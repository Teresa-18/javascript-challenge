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
// Create event handlers for clicking the button or pressing the enter key
var button = d3.select("#filter-btn");
var form = d3.select("#form");
button.on("click", runEnter);
form.on("submit", runEnter);


// Create the function to run for both events
function runEnter() {
  tbody.html("");
  d3.event.preventDefault();
  var inputValue = d3.select("#datetime").property("value");
  var filteredData = tableData;
  if (inputValue != "") {
    filteredData = filteredData.filter(r => r.datetime == inputValue);
    console.log(filteredData);
  }
  filteredData.forEach((ufoSighting) => {
      var row = tbody.append("tr");
      Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
}
