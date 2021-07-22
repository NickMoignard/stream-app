import Express from "express"

class App {
  express: any

  constructor() {
    this.express = Express()

    this.express.all("*", (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
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

    this.express.use(Express.static("../../media"))
  }
}

export default App
