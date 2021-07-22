import NodeMediaServer from 'node-media-server'
import rtmpToHLS from '../ffmpeg/rtmpToHLS'

class RTMPServer {
    config: any
    nms: typeof NodeMediaServer
    processing: boolean
    constructor() {
        this.processing = false
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
        this.nms.on('postPublish', (id: any, streamPath: any, args: any) => {
            const process = () => {
                rtmpToHLS(streamPath)
            }
            console.log('postPublish', id, streamPath, args)
            !this.processing && setTimeout(process, 2000)
            this.processing = true
        })
        this.nms.on('donePublish', (id: any, streamPath: any, args: any) => {
            console.log('donePublish',id, streamPath, args)
            this.processing = false
        })
    }
    start() {
        this.nms.run()
    }
    stop() {
        this.nms.stop()
    }
}

export default RTMPServer
