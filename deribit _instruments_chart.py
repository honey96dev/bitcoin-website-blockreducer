import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.ensemble import IsolationForest
import requests
import datetime
import json
import sched
import time


def plot_deribit_instruments():
    url = 'http://localhost:8080/deribit/api/data'
    params = {}
    r = requests.get(url=url, params=params)

    try:
        formatted_string = r.text.replace("'", '"')
        # rows = json.loads(formatted_string)
        # print(rows)
    except:
        return {
            'result': 'error',
            'message': 'http-json-error',
        }

    try:
        # 2. What options pricing data do we have?
        # reading and simply calculating
        # options_df = pd.read_json(rows)
        options_df = pd.read_json(formatted_string, convert_dates=["expiration_timestamp", 'creation_timestamp'])
        # print(options_df['expiration_timestamp'])
        options_df['date_diff'] = (options_df['expiration_timestamp'] - options_df['creation_timestamp']).dt.days
        options_df['spread'] = options_df['best_ask_price'] - options_df['best_bid_price']

        # printing some information
        # print(options_df.head())
        # print(options_df.shape)
        # print(', '.join(x for x in options_df.columns))

        # plotting graph
        col_names_pairplot = {
            's_k': 'Current minus Strike',
            'b_a_mean': 'Average of Bid and Ask',
            'date_diff': 'Date difference',
            'spread': 'Spread',
            'delta': 'Delta',
            'gamma': 'Gamma',
            'strike': 'Strike',
            'best_bid_price': 'Bid',
            'best_ask_price': 'Ask',
            'vega': 'Vega'
        }
        sns_options_colors = ["#4b59b6", "#8401db"]
        # sns_options_colors = ["#9b59b6", "#3498db"]
        sns_options_vars = ['strike', 'best_bid_price', 'delta', 'gamma', 'vega', 'spread']

        sns.set_palette(sns.color_palette(sns_options_colors))
        sns.set_context("paper", rc={"axes.labelsize": 22})

        options_g = sns.pairplot(options_df,
                                 vars=sns_options_vars,
                                 diag_kind='kde',
                                 hue='type',
                                 markers=["o", "x"],
                                 plot_kws=dict(edgecolor='white',
                                               linewidth=.85, alpha=.85),
                                 diag_kws=dict(shade=True),
                                 height=5)

        # print(options_df)

        for i, j in zip(*np.triu_indices_from(options_g.axes, 1)):
            options_g.axes[i, j].set_visible(False)

        xlabels, ylabels = [], []

        for ax in options_g.axes[-1, :]:
            xlabel = ax.xaxis.get_label_text()
            xlabels.append(xlabel)
        for ax in options_g.axes[:, 0]:
            ylabel = ax.yaxis.get_label_text()
            ylabels.append(ylabel)

        i, j = 0, 0
        for i in range(len(xlabels)):
            for j in range(len(ylabels)):
                options_g.axes[j, i].xaxis.set_label_text(col_names_pairplot[xlabels[i]])
                options_g.axes[j, i].yaxis.set_label_text(col_names_pairplot[ylabels[j]])

        plt.savefig('output/options_pairplot.png')
        plt.show()

        # 3. Unsupervised learning for finding outliers (anomaly)
        # it_X_train = options_df[['Strike', 'Delta', 'Gamma', 'date_diff']]
        # it_X_train['s_k'] = options_df['UnderlyingPrice'] - options_df['Strike']
        # it_X_train['b_a_mean'] = (options_df['Bid'] + options_df['Ask']) / 2
        # it_X_train['b_a_mean'] = it_X_train['b_a_mean'].apply(lambda x: int(round(x, 0)))
        # it_X_train['s_k'] = it_X_train['s_k'].apply(lambda x: int(round(x, 0)))

        it_X_train = pd.DataFrame({
            'strike': options_df['strike'],
            'delta': options_df['delta'],
            'gamma': options_df['gamma'],
            'date_diff': options_df['date_diff'],
            's_k': np.asarray(np.round(options_df['underlying_price'] - options_df['strike']), dtype=np.int),
            'b_a_mean': np.asarray(np.round((options_df['best_bid_price'] + options_df['best_ask_price']) / 2),
                                   dtype=np.int)
        })

        col_names = {
            's_k': 'Difference between Current and Strike prices',
            'b_a_mean': 'Average of Bid and Ask',
            'date_diff': 'Difference between Date of valuation and Exercise date',
            'spread': 'Spread',
            'delta': 'Delta',
            'gamma': 'Gamma',
            'strike': 'Strike',
            'bid': 'Bid',
            'ask': 'Ask',
            'vega': 'Vega',  # 'Type':'Type',
            'y': 'Anomaly',
            'type': 'Option type (call or put)',
            'last_price': 'Last trading price'
        }
        print('The features we will use are {}.'.
              format(', '.join(col_names[x] for x in it_X_train.columns)))

        # For the purpose of anomaly detection we will use Isolation Forest.
        clf = IsolationForest(max_samples='auto', contamination=.025,
                              n_estimators=10,
                              random_state=19117, max_features=it_X_train.shape[1],
                              behaviour='new')
        clf.fit(it_X_train)
        y_pred_train = clf.predict(it_X_train)

        it_X_train['y'] = y_pred_train
        it_X_train['type'] = options_df['type']

        # plotting graph
        it_outlier = -1

        sns_options_colors = ["#9b59b6", "#3498db"]
        sns.set_palette(sns.color_palette(sns_options_colors))
        sns.set_context("paper", rc={"axes.labelsize": 10})
        plt.figure(figsize=(14, 8))

        it_x_ = 's_k'
        it_y_ = 'b_a_mean'

        plt.scatter(it_X_train[(it_X_train['y'] == 1) & (it_X_train['type'] == 'Put')][it_x_],
                    it_X_train[(it_X_train['y'] == 1) & (it_X_train['type'] == 'Put')][it_y_],
                    label='Normal put', c=sns_options_colors[1], s=10 * 4, alpha=.55, marker='x')

        plt.scatter(it_X_train[(it_X_train['y'] == 1) & (it_X_train['type'] == 'Call')][it_x_],
                    it_X_train[(it_X_train['y'] == 1) & (it_X_train['type'] == 'Call')][it_y_],
                    label='Normal call', c=sns_options_colors[0], s=10 * 4, alpha=.55, marker='o')

        plt.scatter(it_X_train[(it_X_train['y'] == -1) & (it_X_train['type'] == 'Call')][it_x_],
                    it_X_train[(it_X_train['y'] == -1) & (it_X_train['type'] == 'Call')][it_y_],
                    label='Anomaly call', c='red', s=60 * 4, edgecolor='black', marker='o', alpha=.7)

        plt.scatter(it_X_train[(it_X_train['y'] == -1) & (it_X_train['type'] == 'Put')][it_x_],
                    it_X_train[(it_X_train['y'] == -1) & (it_X_train['type'] == 'Put')][it_y_],
                    label='Anomaly put', c='orange', s=60 * 4, edgecolor='black', marker='x')

        plt.xlabel(col_names[it_x_])
        plt.ylabel(col_names[it_y_])
        plt.legend(fontsize='medium')

        plt.savefig('output.png', dpi=200)
        plt.show()

        # plotting graph
        sns_options_colors = ["#f9a602", "#3498db"]

        sns_options_vars = ['b_a_mean', 'delta', 'gamma', 's_k', 'date_diff']
        sns.set_palette(sns.color_palette(sns_options_colors))
        sns.set_context("paper", rc={"axes.labelsize": 14})

        options_g = sns.pairplot(it_X_train,
                                 vars=sns_options_vars,
                                 diag_kind='kde',
                                 hue='y',
                                 markers=["o", "x"],
                                 plot_kws=dict(edgecolor='white',
                                               linewidth=.85, alpha=.85),
                                 diag_kws=dict(shade=True),
                                 height=3)

        for i, j in zip(*np.triu_indices_from(options_g.axes, 1)):
            options_g.axes[i, j].set_visible(False)

        xlabels, ylabels = [], []

        for ax in options_g.axes[-1, :]:
            xlabel = ax.xaxis.get_label_text()
            xlabels.append(xlabel)
        for ax in options_g.axes[:, 0]:
            ylabel = ax.yaxis.get_label_text()
            ylabels.append(ylabel)

        for i in range(len(xlabels)):
            for j in range(len(ylabels)):
                options_g.axes[j, i].xaxis.set_label_text(col_names_pairplot[xlabels[i]])
                options_g.axes[j, i].yaxis.set_label_text(col_names_pairplot[ylabels[j]])

        plt.savefig('output/it_result_pairplot.png', dpi=100)
        plt.show()

        print('So for every day of the training data we have {} data points.'
              .format(options_df.shape[0] * options_df.shape[1]))

        curr_price_ = options_df.iloc[0, 17]
        plt.figure(figsize=(10, 6))
        # print(', '.join(x for x in options_df.columns))
        plt.scatter(options_df['strike'], options_df['iv_ask'], label='IV to Strike',
                    c='royalblue')
        bottom, top = plt.ylim()
        plt.vlines(curr_price_, bottom ,
                   top,
                   label='Current GS price - ${}'.format(curr_price_),
                   linestyles='--', colors='gray')
        plt.xlabel('Strike price - $')
        plt.ylabel('IV')
        plt.title('Options Volatility smile')
        plt.legend(fontsize='large')
        plt.savefig('output/volatilitysmile.png', dpi=100)
        plt.show()

        return {
            'result': 'success',
            'message': 'done',
        }
    except:
        return {
            'result': 'error',
            'message': 'error',
        }


s = sched.scheduler(time.time, time.sleep)


def do_something(sc):
    print("Doing sync...")
    print(str(datetime.datetime.now()))
    try:
        print(plot_deribit_instruments())
    except:
        time.sleep(5 * 60)
    # do your stuff
    s.enter(5 * 60, 1, do_something, (sc,))


s.enter(0, 1, do_something, (s,))
s.run()
