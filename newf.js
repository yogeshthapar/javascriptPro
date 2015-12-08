fs=require ("fs");
fs.readFile('Agri.csv','utf8',function(err,data){
  if(err){
    return console.console.log(err);
  }
  console.log(data);
});
