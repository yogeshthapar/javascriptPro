var rl = require('readline').createInterface({
  input: require('fs').createReadStream('Agri.csv')
});

rl.on('line', function (line) {

  var arr=line.split("/n");
  var result = [];

  var headers=line[0].split(",");

  for(var i=1;i<line.length;i++){

    var obj = {};
    var currentline=line[i].split(",");

     for(var j=0;j<headers.length;j++){
       obj[headers[j]] = currentline[i];
    }

    result.push(obj);
    //console.log(result);

  }

 // return JSON.stringify(result);
 // var stream = fs.createWriteStream("my_file.JSON");


fs = require('fs')
fs.writeFile('m1.json', JSON.stringify(result), function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log("genarated");
});

});
