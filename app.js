const { urlencoded } = require("express")
const express = require("express")
const app = express()
const port = 4000

app.use(urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.send(
    "Welcome to Docker, Fargate AWS, GITLAB & Terraform integration CI/CD V1"
  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
