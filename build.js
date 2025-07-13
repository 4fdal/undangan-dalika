import fs from 'fs'

const baseURL = "https://4fdal.github.io/ika"
const fileHTML = fs.readFileSync("./index.stub", 'utf-8')

fs.writeFileSync("./ika/index.html", fileHTML.replaceAll("{{base_url}}", baseURL), 'utf-8')


