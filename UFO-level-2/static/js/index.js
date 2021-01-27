// from data.js
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

// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);

// Create the function to run for both events
function updateTable() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  console.log(dataset)
  if (dataset === "Date") {
    var filteredData = tableData;
    filteredData = filteredData.filter(r => r.datetime == inputValue);
    console.log(filteredData);
  }

  tbody.html("");
  d3.event.preventDefault();
  var inputValue = d3.select("#myInput").property("value");
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
