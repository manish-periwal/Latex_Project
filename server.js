/**
 * Created by manishp on 18-11-2017.
 */
var express = require('express');
var bodyParser = require('body-parser');
var app     = express();
var fs = require('fs');
var PythonShell = require('python-shell');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));



app.post('/myaction', function(req, res) {
    console.log("Got a request");
    //res.send('You sent the name "' + req.body.author_name + '".');
    console.log(req.body.author_name);

    author_name = req.body.author_name;
    department = req.body.department;
    prof_name = req.body.prof_name;
    sub_date = req.body.sub_date;
    title = req.body.title;

    var stream = fs.createWriteStream("input1.txt");
    stream.once('open', function(fd) {

        stream.write(author_name+'\n');
        stream.write(department+'\n');
        stream.write(prof_name+'\n');
        stream.write(sub_date+'\n');
        stream.write(title+'\n');

        stream.end();
    });



    PythonShell.run('latex.py', function (err) {
        if (err) throw err;
        console.log('finished');
    });
});



app.listen(3005, function() {
    console.log('Server running at http://127.0.0.1:3005/');
});