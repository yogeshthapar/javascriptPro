var fs=require("fs");
var csv = fs.readFileSync("Agri.csv")

function ComVSum(csv){
//console.log(typeof csv);
  var lines=csv.split("\n");
  var lines=csv.split("\r");
  var result=[];
  var res = [];
  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){
	  var obj = {};
    lines[i]=lines[i].replace("Annual,","Annual");
    lines[i]=lines[i].replace("\"Annual Ending mar Of Each Year\"","Annual Ending mar Of Each Year");
    var currentline=lines[i].split(",");
    if(currentline[0].indexOf("Commercial")!=-1)
    {
      for(var j=3;j<headers.length;j++){
        if(currentline[j].indexOf("NA")!=-1){
          currentline[j]=0;
        }
        currentline[j]=parseFloat(currentline[j]);
  		  obj[headers[j].substr(3,6)] = currentline[j];
        	  }
      res.push(obj);

	  }
  }
 var agg={}
 for(i=3;i<headers.length;i++){
   agg[headers[i].substr(3,6)]=0;
 }
for(i=0;i<res.length;i++){
  for(j in res[i]){
    agg[j]+=res[i][j];


    console.log(agg[j].toFixed(2));
  }
}
var agg1={};
var year="Year";
var sum="TotalProd";
for(i in agg)
{
//console.log(agg[i]+"hi");
  agg1 = new Object();
  agg1[year]=i;
  agg1[sum]=agg[i].toFixed(2);
  result.push(agg1);

}



 fs = require('fs')
 fs.writeFile('CommercialSum.json', JSON.stringify(result,null,4).replace(/\\n|\\/g, ''), function (err,data) {
   if (err) {
     return console.log(err);
   }
   console.log("generated");
 });

}
var json=ComVSum(csv.toString());
//var str = json.replace("/");
