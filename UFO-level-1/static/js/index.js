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
