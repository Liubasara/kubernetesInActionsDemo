const http = require('http')
const os = require('os')
const fs = require('fs')

// 挂载目录所在位置的数据文件
const dataFile = '/var/data/test.txt'

console.log('server starting')
const handler = function (request, response) {
  if (request.method === 'POST') {
    let file = fs.createWriteStream(dataFile)
    file.on('open', function (fd) {
      request.pipe(file)
      console.log('post 请求的数据已存储至挂载卷对应文件中')
      response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
      response.end('post 所传输数据已被存储至 pod ' + os.hostname() + '\n')
    })
  } else {
    let data = fs.existsSync(dataFile) ? fs.readFileSync(dataFile, 'utf8') : '还没有任何数据被存储至后台文件系统'
    response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
    response.write('访问 pod 为: ' + os.hostname() + '\n')
    response.end('获得数据为: ' + data + '\n')
  }
}
const www = http.createServer(handler)
www.listen(8080)
