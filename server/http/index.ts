import Http from "http"
import process from "process"

import App from "./app"
class HTTPServer {
  httpServer: any
  app: App
  port: number

  constructor() {
    if (process.env.MEDIA_PORT) {
      this.port =  parseInt(process.env.MEDIA_PORT)
    }
    else {
      this.port = 7666
    }

    this.app = new App()
    this.httpServer = Http.createServer(this.app.express)
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
