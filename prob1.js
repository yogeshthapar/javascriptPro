var fs=require("fs");
var csv = fs.readFileSync("Agri.csv")

function csvJSON(csv){
//console.log(typeof csv);
  var lines=csv.split("\n");
  var lines=csv.split("\r");

  var result = [];

  var headers=lines[0].split(",");
      var counter =0;
  for(var i=1;i<lines.length-1;i++){

	  var obj = {};
    lines[i]=lines[i].replace("Annual,","Annual");
    lines[i]=lines[i].replace("\"Annual Ending mar of each Year\"","Annual Ending mar of each Year");
	  var currentline=lines[i].split(",");

	  if (currentline[0].indexOf("Oilseeds")!=-1){
      counter++;

		  obj[headers[0]] = currentline[0];
      obj[headers[23]] = currentline[23];
	    result.push(obj);
    //console.log(result);
  }
  }

 // return JSON.stringify(result);
 console.log(counter);
 fs = require('fs')
 fs.writeFile('p1.json', JSON.stringify(result).replace(/\\n|\\/g, ''), function (err,data) {
   if (err) {
     return console.log(err);
   }
   console.log("genarated");
 });
 }
 var json=csvJSON(csv.toString());
