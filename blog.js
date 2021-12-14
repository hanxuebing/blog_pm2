
const fs = require('fs');
const path = require('path');
const express = require('express');
const chalk = require('chalk')
const blog = express();
const baseDir = __dirname + '../blog'; 
blog.use(express.static(path.resolve(baseDir)))
 
blog.get('*', function(req, res) {
    const html = fs.readFileSync(path.resolve(baseDir, '/index.html'), 'utf-8')
    res.send(html)
})
blog.listen(8080, res => {
    console.log(chalk.yellow('Start Service On 8080'));
});
