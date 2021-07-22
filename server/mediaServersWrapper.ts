import HTTPServer from "./http"
import RTMPServer from "./rtmp"

class MediaServersWrapper {
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

export default MediaServersWrapper