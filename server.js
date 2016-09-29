var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
    'article-one': {
        title: 'Rakesh | Article One',
        heading: 'Article One',
        date: '18 Sep, 2016',
        content:`
             <p>
                    This is the content for my first Article. This is the content for my first Article. This is the content for my first Article. This is the content for my first Article. This is the content for my first Article. This is the content for my first Article.
            </p>
            <p>
                This is the content for my first Article. This is the content for my first Article. This is the content for my first Article. This is the content for my first Article. This is the content for my first Article. This is the content for my first Article.
            </p>
            <p>
                This is the content for my first Article. This is the content for my first Article. This is the content for my first Article. This is the content for my first Article. This is the content for my first Article. This is the content for my first Article.
            </P>`
    },
    'article-two':{
     title: 'Rakesh | Article Two',
        heading: 'Article Two',
        date: '22 Sep, 2016',
        content:`
             <p>
                    This is the content for my Second Article. This is the content for my Second Article. This is the content for my Second Article. This is the content for my Second Article. This is the content for my Second Article. This is the content for my Second Article.
            </p>
            <p>
                This is the content for my Second Article. This is the content for my Second Article. This is the content for my Second Article. This is the content for my Second Article. This is the content for my Second Article. This is the content for my Second Article.
            </p>
            <p>
                 This is the content for my Second Article. This is the content for my Second Article. This is the content for my Second Article. This is the content for my Second Article. This is the content for my Second Article. This is the content for my Second Article.
            </P>`
    },
    'article-three':{
    title: 'Rakesh | Article Third',
    heading: 'Article Three',
    date: '27 Sep, 2016',
    content:`
         <p>
            This is the content for my Third Article. This is the content for my Third Article. This is the content for my Third Article. This is the content for my Third Article. This is the content for my Third Article. This is the content for my Third Article. 
        </p>
        <p>
            This is the content for my Third Article. This is the content for my Third Article. This is the content for my Third Article. This is the content for my Third Article. This is the content for my Third Article. This is the content for my Third Article. 
        </p>
        <p>
            This is the content for my Third Article. This is the content for my Third Article. This is the content for my Third Article. This is the content for my Third Article. This is the content for my Third Article. This is the content for my Third Article. 
        </P>`
    },
};

function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
var htmlTemplate=`
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initialscale=1">
        <link href="/ui/style.css" rel="stylesheet" />
    </style>
    </head>
    <body>
        <div class="container">
            <div>
                <a href='/'>Home</a>
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
            </p>
        </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function(req,res){
   var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
