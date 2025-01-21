import path from 'path'
import url from 'url'

const filePath = './dir1/dir2/file.txt'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log('File name', path.basename(filePath))

console.log('Directory', path.dirname(filePath))

console.log('File extension', path.extname(filePath))

console.log('Object', path.parse(filePath))

const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'file.txt')
console.log(filePath2)

const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'file.txt')
console.log(filePath3)
