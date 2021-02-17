// app.js 会把客户端的 IP 打印到标准输出，并返回当前域名
// 前 5 次请求都正常，第 5 次之后将会返回 500 错误
const http = require('http')
const os = require('os')

let errorCount = 0

console.log('server starting')
const handler = function (request, response) {
  console.log(request.connection.remoteAddress)
  if (errorCount++ <= 4) {
    response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
    response.end(`客户端部署在${os.hostname()}之上`)
  } else {
    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' })
    response.end(`服务端内部错误`)
  }
  
}
const www = http.createServer(handler)
www.listen(8080)