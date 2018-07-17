Plotly.d3.csv("/Users/liamtoohey/Documents/Sports Models/AFL/currentratings.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
  }
var data = [{
  mode: 'markers',
  type: 'scatter',
  x: unpack(rows, 'Defensive Rating'),
  y: unpack(rows, 'Offensive Rating'),
}]

var layout = { 
  xaxis: {
    range: [ 0.75, 5.25 ]
  },
  yaxis: {
    range: [0, 8]
  },
  title:'Data Labels Hover'
};

Plotly.newPlot('myDiv', data, layout);