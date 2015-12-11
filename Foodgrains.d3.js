var margin ={top:20, right:30, bottom:110, left:40},
    width=1300-margin.left - margin.right,
    height=700-margin.top-margin.bottom;

// scale to ordinal because x axis is not numerical
var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);

//scale to numerical value by height
var y = d3.scale.linear().range([height, 0]);

var chart = d3.select("#chart")
              .append("svg")  //append svg element inside #chart
              .attr("width", width+(2*margin.left)+margin.right)    //set width
              .attr("height", height+margin.top+margin.bottom);  //set height
var xAxis = d3.svg.axis()
              .scale(x)
              .orient("bottom");  //orient bottom because x-axis will appear below the bars

var yAxis = d3.svg.axis()
              .scale(y)
              .orient("left");

d3.json("FoodGrains.json", function(error, data){

  data.sort(function(a,b){
    return(parseFloat(b.Year)-parseFloat(a.Year));
  });

  x.domain(data.map(function(d){ return d.Quantity}));
  y.domain([0,250]);

  var bar = chart.selectAll("g")
                    .data(data)
                  .enter()
                    .append("g")
                    .attr("transform", function(d, i){
                      return "translate("+x(d.Quantity)+", 0)";
                    });

  bar.append("rect")
      .attr("y", function(d) {
        return y(d.Year);
      })
      .attr("x", function(d,i){
        return x.rangeBand()+(margin.left/3);
      })
      .attr("height", function(d) {
        return height - y(d.Year);
      })
      .attr("width", x.rangeBand());  //set width base on range on ordinal data

  bar.append("text")
      .attr("x", x.rangeBand()+margin.left )
      .attr("y", function(d) { return y(d.Year) -10; })
      .attr("dx", ".71em")
      .attr("dy", ".15em")
      .text(function(d) { return d.Year; });

  chart.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate("+margin.left+","+ height+")")
        .call(xAxis)
       .selectAll("text")
       .attr("transform", "rotate(-60)")
       .attr("dx", "-.51em")
       .attr("dy", ".71em")
       .style("text-anchor","end");
        // .append("text")
        // //.attr("transform", "rotate(-90)")
        // .attr("y", 6)
        // .attr("dy", ".71em")
        // .style("text-anchor", "end")
        // .text("Quantity");

  chart.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate("+margin.left+",0)")
        .call(yAxis)
        .append("text")
        // .selectAll("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Quantity(Ton mn)");
});

function type(d) {
    d.Year = +d.Year; // coerce to number
    return d;
  }
