// !preview r2d3 data=c(0.3, 0.6, 0.8, 0.5, 0.40, 0.20)
//
// r2d3: https://rstudio.github.io/r2d3
//

var rows = 5;
var cols = 5;
var size = 30;
var igap = 5;
var data = new Array(rows * cols).fill({});

var squares = svg.selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", (d, i) => (i % cols) * (size + igap))
  .attr("y", (d, i) => parseInt(i / cols) * (size + igap))
  .attr("width", size)
  .attr("height", size)
  .attr("fill", (d, i) => {
    // 计算索引值
    var rowIndex = Math.floor(i / cols) + 1;
    var colIndex = i % cols + 1;
    if (rowIndex > colIndex) {
      return "gray"
    }
    if (rowIndex == colIndex) {
      return "orange"
    } else {
      return "steelblue"
    }
  })
  .on('click', function(){
    d3.select(this).attr('fill', 'red')
    console.log(this)
  });
//alert(squares)
//console.log(squares)