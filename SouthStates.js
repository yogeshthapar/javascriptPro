var fs=require('fs');
var csv = fs.readFileSync("Agri.csv");

function southRice(csv){
  var strArr = csv.split('\r\n');
  for(var i=0;i<strArr.length;i++){
    strArr[i] = strArr[i].split(",");
  }
  var subArr = [];
  for(var i=1;i<strArr.length;i++){
    if(strArr[i][0].indexOf("Agricultural Production Foodgrains Rice Volume")>-1){
      if(strArr[i][0].indexOf("Andhra")>-1||
        strArr[i][0].indexOf("Kerala")>-1||
        strArr[i][0].indexOf("Karnataka")>-1||
        strArr[i][0].indexOf("Tamil")>-1)

      subArr.push(strArr[i]);
    }
  }
  //console.log(strArr);
  var obj = [];
  for(var i=4;i<subArr[0].length;i++){
    var stateObj = {};
    if(subArr[0][i]!='NA')
    stateObj["Andhra"]=subArr[0][i];
    else
    stateObj["Andhra"]=0;

    if(subArr[0][i]!='NA')
    stateObj["Karnataka"]=subArr[1][i];
    else
    stateObj["Karnataka"]=0;

    if(subArr[0][i]!='NA')
    stateObj["Kerala"]=subArr[2][i];
    else
    stateObj["Kerala"]=0;

    if(subArr[0][i]!='NA')
    stateObj["Tamil"]=subArr[3][i];
    else
    stateObj["Tamil"]=0;

    stateObj["year"]=strArr[0][i-1].replace(" 3-","");
    obj[i-4]=stateObj;
    //console.log(stateObj);
  }
  console.log(obj);
  fs.writeFile("southRice.json",JSON.stringify(obj,null,2),function(err){
    if (err){
      return console.log(err);
    }
  });
}

var json=southRice(csv.toString());
