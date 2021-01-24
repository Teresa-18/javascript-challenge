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
// var button = d3.select("#filter-btn");
// var form = d3.select("#form");
d3.select("#filter-btn").on("click", runEnter);
d3.select("input").on("submit", runEnter);


// Create the function to run for both events
function runEnter() {
  // Declare variables
  tbody.html("");
  d3.event.preventDefault();
  var inputValue;
  var filteredData = tableData;
  if (d3.select("#datetime") != "") {
    inputValue = d3.select("#datetime").property("value");
    filteredData = filteredData.filter(r => r.datetime === inputValue);
      console.log(filteredData);
  }
    else if (d3.select("#city") != "") {
      inputValue = d3.select("#city").property("value");
      filteredData = filteredData.filter(r => r.city === inputValue);
        console.log(filteredData);
  }
    else if (d3.select("#state") != "") {
      inputValue = d3.select("#state").property("value");
      filteredData = filteredData.filter(r => r.state === inputValue);
        console.log(filteredData);
  }
    else if (d3.select("#country") != "") {
      inputValue = d3.select("#country").property("value");
      filteredData = filteredData.filter(r => r.country === inputValue);
        console.log(filteredData);
  }
    else if (d3.select("#shape") != "") {
      inputValue = d3.select("#shape").property("value");
      filteredData = filteredData.filter(r => r.shape === inputValue);
        console.log(filteredData);
  }
    else {
      data.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
  }  
  filteredData.forEach((ufoSighting) => {
      var row = tbody.append("tr");
      Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
