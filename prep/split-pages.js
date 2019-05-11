const fs = require('fs');
const prefix = '<div class="book-content"><p>'
const suffix = '</p></div>'

fs.readFile('content', 'utf8', function(err, res) {
    // console.log(res);
    const splited = res.split('###')
    console.log(splited)

    for (let i = 0; i < splited.length; i++) {
		fs.writeFileSync(`pages/page${ i + 5 }.html`, `${ prefix }${ splited[i] }${ suffix }`)
    }
});

console.log('after calling readFile');
