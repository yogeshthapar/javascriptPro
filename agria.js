var fs=require("fs");
var csv = fs.readFileSync("Agri.csv")

function csvJSON(csv){
//console.log(typeof csv);
  var lines=csv.split("\n");
  var lines=csv.split("\r");

  var result = [];

  var headers=lines[0].split(",");

  for(var i=1;i<lines.length-1;i++){

	  var obj = {};
    lines[i]=lines[i].replace("Annual,","Annual");
    lines[i]=lines[i].replace("\"Annual Ending mar Of Each Year\"","Annual Ending mar Of Each Year");
	  var currentline=lines[i].split(",");

	  for(var j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
	  }

	  result.push(obj);
    //console.log(result);

  }

 // return JSON.stringify(result);
 fs = require('fs')
 fs.writeFile('m93.json', JSON.stringify(result).replace(/\\n|\\/g, ''), function (err,data) {
   if (err) {
     return console.log(err);
   }
   console.log("genarated");
 });

}
var json=csvJSON(csv.toString());
