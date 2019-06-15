let service = {
    socketIO: undefined,

    socketInfos: [],

    setSocketIO: (socket) => {
        service.socketIO = socket;
    },

    init: () => {
        service.socketIO.on('connect', (socket) => {
            service.socketInfos.push({id: socket.id});
            socket.on('onlineSignal', function (data) {
                // console.warn('data', data);
                data = JSON.parse(data);
                const cnt = service.socketInfos.length;
                for (let i = 0; i < cnt; i++) {
                    if (service.socketInfos[i].id == socket.id) {
                        service.socketInfos[i] = {
                            id: socket.id,
                            userId: data.userId,
                            timestamp: new Date(),
                        }
                        break;
                    }
                }
                console.info('service.socketInfos', service.socketInfos);
            });

            socket.on('disconnect', function () {
                // console.log('disconnect', socket.id);
                const cnt = service.socketInfos.length;
                for (let i = 0; i < cnt; i++) {
                    // console.warn('disconnect', socket.id);
                    if (service.socketInfos[i].id === socket.id) {
                        // console.warn('delete', socket.id);
                        service.socketInfos.splice(i, 1);
                    }
                    break;
                }
            });
        });
    },
};

module.exports = service;
