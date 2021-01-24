var tableData = data;
// Get a reference to the table body
var tbody = d3.select("tbody");
data.forEach((ufoSighting) => {
  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// // from data.js
// var sightings = data;

// Select the button
// var button = d3.select("#filter-btn");
// Select the form
// var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
d3.select("#filter-btn").on("click", runEnter);
// d3.select("#form").on("submit", runEnter);

// Create the function to run for both events
function runEnter() {
tbody.html("");
  // d3.event.preventDefault();
  var inputValue = d3.select("#datetime").property("value");
  var filteredData = tableData;
  if (inputValue != "") {
    filteredData = filteredData.filter(r => r.datetime == inputValue)
  }
  // var tbody = d3.select("tbody");
  for (var i = 0; i < filteredData.length; i ++) {
    data.forEach((filteredData) => {
      var row = tbody.append("tr");
      row.append ("td").text(entry.datetime)
      // Object.entries(filteredData).forEach(([key, value]) => {
      //   var cell = row.append("td");
      //   cell.text(value);
      });
    });
  }
}
