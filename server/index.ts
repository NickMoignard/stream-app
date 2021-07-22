import HTTPServer from "./http/server"
import RTMPServer from "./rtmp/server"

class MediaServer {
    http: HTTPServer
    rtmp: RTMPServer

    constructor() {
        this.http = new HTTPServer()
        this.rtmp = new RTMPServer()
    }

    start() {
        this.http.start()
        this.rtmp.start()
    }
    stop() {
        this.http.stop()
        this.rtmp.stop()
    }
}

export default MediaServer