/**
 * Created by Administrator on 2/28/2017.
 */

var fs = require('fs');

var _getAllFilesFromFolder = function (dir) {

    // var filesystem = require("fs");
    var results = [];

    fs.readdirSync(dir).forEach(function (file) {
        var lastElement = file;
        //console.log('last element '+lastElement);
        var file2 = dir + '/' + file;

        var stat = fs.statSync(file2);

        if (stat && stat.isDirectory()) {
            results = results.concat(_getAllFilesFromFolder(lastElement))
        } else results.push(lastElement);

    });

    var x = results[results.length - 1];
    x = x.split('.json');
    console.log(x[0]);
    return x[0];

};

module.exports.get = function (req, res) {

    var event = fs.readFileSync('app/data/event/' + req.params.id + '.json', 'utf8');
    res.setHeader('Content-type', 'application/json');

    res.send(event);
};

module.exports.save = function (req, res) {

    var lastElemnt = _getAllFilesFromFolder('app/data/event');
    lastElemnt = parseInt(lastElemnt) + 1;
    var event = req.body;
    console.log(lastElemnt);
    console.log(event);
    event.id = lastElemnt;
    fs.writeFileSync('app/data/event/' + lastElemnt + '.json', JSON.stringify(event));
    res.send(event);
};

module.exports.getAll = function (req, res) {

    var path = 'app/data/event/';
    var files = [];
    try {
        files = fs.readdirSync(path);
    }
    catch (e) {
        res.send([]);
        res.end();
    };
    var results = "[";
    for (var i = 0; i < files.length; i += 1) {

        if (files[i].indexOf('.json') == files[i].length - 5) {

            results += fs.readFileSync(path + "/" + files[i]) + ",";
        }
    }
    results = results.substr(0, results.length - 1);
    results += "]";

    res.setHeader('Content-Type','application/json');
    res.send(results);
    res.end();
};