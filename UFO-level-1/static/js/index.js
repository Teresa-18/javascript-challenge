
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(data);

// Loop Through `data` for each ufo report object
data.forEach((ufoSighting) => {
    // Use d3 to append one table row `tr` for each ufo report object
    var row = tbody.append("tr");
    // Use `Object.entries` for each ufo report value
    Object.entries(ufoSighting).forEach(([key, value]) => {
        // Append a cell to the row for each value in the ufo report object
        var cell = row.append("td");
        // Use d3 to update each cell's text with ufo report values
        cell.text(value);
    });
});

// from data.js
var tableData = data;

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Print the value to the console
  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(table => table.datetime === inputValue);

  console.log(filteredData);
};