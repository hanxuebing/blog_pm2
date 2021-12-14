
const fs = require('fs');
const path = require('path');
const express = require('express');
const chalk = require('chalk')
const blog = express();
blog.use(express.static(path.resolve(__dirname, '../blog')))
 
blog.get('*', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, '../blog/index.html'), 'utf-8')
    res.send(html)
})
blog.listen(8080, res => {
    console.log(chalk.yellow('Start Service On 8080'));
});
