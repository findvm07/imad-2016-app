var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
        title: 'Article One | Vishnu Mohan',
        heading: 'Article One',
        date: 'sep 5, 2016',
        content: `<p>
                        This is the content for my Article One.  This is the content for my Article One.  This is the content for my Article One.  This is the content for my Article One.  This is the content for my Article One.  This is the content for my Article One.  This is the content for my Article One.  This is the content for my Article One.  This is the content for my Article One.  This is the content for my Article One.  This is the content for my Article One.
                    </p>
                    <p>
                        This is the content for my Article One.  This is the content for my Article One.  This is the content for my Article One.  This is the content for my Article One.  This is the content for my Article One.  This is the content for my Article One.  This is the content for my Article One.  This is the content for my Article One.  This is the content for my Article One.  This is the content for my Article One.  This is the content for my Article One.
                    </p>
                    <p>
                        This is the content for my Article One.  This is the content for my Article One.  This is the content for my Article One.  This is the content for my Article One.  This is the content for my Article One.  This is the content for my Article One.  This is the content for my Article One.  This is the content for my Article One.  This is the content for my Article One.  This is the content for my Article One.  This is the content for my Article One.
                    </p>`
    },
    'article-two': {
        title: 'Article Two | Vishnu Mohan',
        heading: 'Article Two',
        date: 'sep 6, 2016',
        content: `<p>
                        This is the content for my Article Two.
                    </p>
                    `
    },
    'article-three': {
        title: 'Article Three | Vishnu Mohan',
        heading: 'Article Three',
        date: 'sep 7, 2016',
        content: `<p>
                        This is the content for my Article Three.
                    </p>`
    }
    };

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
            <body>
                <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                   <div>
                       ${date}
                    </div>
                <div>
                    ${content}
                </div> 
                <hr/>
                <p><b>Post your Comments below...</b></p>
                <div id="article-para">
                </div>
                <div class="comment">
                    <textarea type="text" id="article" placeholder="article" rows="10" cols="50">
                    <p>Enter your comment..</p>
                    </textarea>
                <input type='submit' value='Submit' id="submit_btn_art"/>
                </div>
                
            </body>
    </html>
    `;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
   counter = counter + 1;
   res.send(counter.toString());
});

var blogs = [];
app.get('/submit-blogs', function (req, res) {
    // Get the article from the request
    var blog = req.query.blog;
    blogs.push(blog);
    res.send(JSON.stringify(blogs));
});


var names = [];
app.get('/submit-name/', function (req, res) {
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
