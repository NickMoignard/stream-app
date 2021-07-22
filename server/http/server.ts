import MediaServer from "./app"
import Http from "http"
import process from "process"

class HTTPServer {
  httpServer: any
  ms: MediaServer
  port: number

  constructor() {
    if (process.env.MEDIA_PORT) {
      this.port =  parseInt(process.env.MEDIA_PORT)
    }
    else {
      this.port = 7666
    }

    this.ms = new MediaServer()
    this.httpServer = Http.createServer(this.ms.app)
    if (!this.httpServer) throw Error('Http Server could not be created')
  }

  start() {
    console.log()
    this.httpServer.listen(this.port, () => {
      console.log(`HTTP Media Server listening on port ${this.port}`)
    })
    this.httpServer.on('error', (e: any) => {
      console.log('HTTP Server error', e)
    })
    this.httpServer.on('close', () => {
      console.log('HTTP Server Closing')
    })
  }

  stop() {
    if (this.httpServer) this.httpServer.close()
  }
}

export default HTTPServer
