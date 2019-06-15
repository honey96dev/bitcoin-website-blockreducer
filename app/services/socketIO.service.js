let service = {
    socketIO: undefined,

    socketInfos: [],

    userStatus: [],

    setSocketIO: (socket) => {
        service.socketIO = socket;
    },

    init: () => {
        service.socketIO.on('connect', (socket) => {
            service.socketInfos.push({
                id: socket.id,
                timestamp: new Date().getTime(),
            });

            socket.on('onlineSignal', function (data) {
                data = JSON.parse(data);
                let cnt = service.socketInfos.length;
                for (let i = 0; i < cnt; i++) {
                    if (service.socketInfos[i].id == socket.id) {
                        service.socketInfos[i] = {
                            id: socket.id,
                            userId: data.userId,
                            timestamp: service.socketInfos[i].timestamp,
                        };
                        break;
                    }
                }

                cnt = service.userStatus.length;
                let flag = true;
                for (let i = 0; i < cnt; i++) {
                    if (service.userStatus[i].id === data.userId) {
                        console.log('service.userStatus', service.userStatus);
                        service.userStatus[i] = {
                            id: data.userId,
                            timestamp: (new Date().getTime() - service.userStatus[i].timestamp2 > 60000) ? new Date().getTime() : service.userStatus[i].timestamp,
                            timestamp2: new Date().getTime(),
                        };
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    service.userStatus.push({
                        id: data.userId,
                        timestamp: new Date().getTime(),
                        timestamp2: new Date().getTime(),
                    });
                }
            });
            console.info('service.socketInfos-connect', service.socketInfos);

            socket.on('disconnect', function () {
                // console.log('disconnect', socket.id);
                const cnt = service.socketInfos.length;
                for (let i = 0; i < cnt; i++) {
                    // console.warn('disconnect', socket.id, service.socketInfos[i].id);
                    if (service.socketInfos[i].id === socket.id) {
                        console.warn('delete', socket.id);
                        service.socketInfos.splice(i, 1);
                        break;
                    }
                }
                console.info('service.socketInfos-disconnect', service.socketInfos);
            });
        });
    },
};

module.exports = service;
