// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(data);

// Loop Through `data` and console.log each ufo report object
data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
   // Use d3 to append one table row `tr` for each ufo report object
    var row = tbody.append("tr");

   // Use `Object.entries` to console.log each ufo report value
   Object.entries(ufoSighting).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value in the ufo report object
    var cell = row.append("td");
    // Use d3 to update each cell's text with ufo report values
    cell.text(value);
  });
});