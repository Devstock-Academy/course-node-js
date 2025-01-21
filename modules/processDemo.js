console.log(process.argv)
console.log(process.env)
console.log(process.pid)
console.log(process.versions)
console.log(process.platform)
console.log(process.memoryUsage())
console.log(process.cpuUsage())
console.log(process.cwd())

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`)
})

process.exit(0)

console.log('This will not be printed')
