const http = require('http')
const path = require('path')
const chalk = require('chalk') // 用于输出，带颜色
const fs = require('fs')
const {hostname,port,root} = require('./config/defaultConfig.js') 
const handlebar = require('handlebars')
const source = fs.readFileSync(path.join(__dirname,'./template/dir.tpl'))
const template = handlebar.compile(source.toString())

let server = http.createServer((req,res)=>{
  // console.log(root)
  // console.log(__dirname)
  res.statusCode = 200
  res.setHeader('Content-Type','text/html')
  const data = {
    title: 'woshi title',
    body: 'woshi body'
  }
  // res.setHeader('Content-Encoding','gzip')
  res.end(template(data))
  // res.end('<html><head></head><body><div>我是div</div></body></html>')
})
server.listen(port,hostname,()=>{
  console.log(`启动成功${hostname}:${port}`)
  console.log(chalk.yellow('this is red!!'))
})