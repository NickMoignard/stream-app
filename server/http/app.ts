import Express from "express"

class MediaServer {
  app: any

  constructor() {
    this.app = Express()

    this.app.all("*", (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
      res.header("Access-Control-Allow-Origin", "*")
      res.header(
        "Access-Control-Allow-Headers",
        "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
      )
      res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
      res.header("Access-Control-Allow-Credentials", "true")
      if (req.method === "OPTIONS") {
        res.sendStatus(200)
      } else {
        next()
      }
    })

    this.app.use(Express.static("../../media"))
  }
}

export default MediaServer
