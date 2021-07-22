import NodeMediaServer from 'node-media-server'

class RTMPServer {
    config: any
    nms: typeof NodeMediaServer
    constructor() {
        this.config = {
            rtmp: {
                port: 1935,
                chunk_size: 60000,
                gop_cache: true,
                ping: 30,
                ping_timeout: 60
            },
        }
        this.nms = new NodeMediaServer(this.config)
    }
    start() {
        this.nms.run()
    }
    stop() {
        this.nms.stop()
    }
}

export default RTMPServer
