var tableData = data;
// Get a reference to the table body
var table = d3.select("table");
var tbody = d3.select("tbody");

tableData.forEach((ufoSighting) => {
  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});



// Create event handlers for clicking the button or pressing the enter key
// var button = d3.select("#filter-btn");
// var form = d3.select("#myInput");

// button.on("click", runEnter);
// form.on("submit", runEnter);


var clear = d3.select("#clear");
clear.on("click", (document.getElementById('myInput').value = ''));

var searchInput = document.querySelector("#myInput");

searchInput.addEventListener("keyup", function(e) {
  var searchItem = e.target.value.toLowerCase();
  var spanItems = document.querySelectorAll("tbody tr");

  spanItems.forEach(function(item) {
    if (item.textContent.toLowerCase().indexOf(searchItem) != -1){
      item.closest("tr").style.display;
    }
    else {
      item.closest("tr").style.display = "none"
    }
  })
})


// Create the function to run for both events
// function runEnter() {
  // Declare variables
  






//   if (d3.select("#datetime") != "") {
//     inputValue = d3.select("#datetime").property("value");
//     filteredData = filteredData.filter(r => r.datetime === inputValue);
//       console.log(filteredData);
//   filteredData.forEach((ufoSighting) => {
//     var row = tbody.append("tr");
//     Object.entries(ufoSighting).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });
//   }
//     else if (d3.select("#city") != "") {
//       inputValue = d3.select("#city").property("value");
//       filteredData = filteredData.filter(r => r.city === inputValue);
//         console.log(filteredData);
//     filteredData.forEach((ufoSighting) => {
//       var row = tbody.append("tr");
//       Object.entries(ufoSighting).forEach(([key, value]) => {
//         var cell = row.append("td");
//         cell.text(value);
//       });
//     });
//   }
//     else if (d3.select("#state") != "") {
//       inputValue = d3.select("#state").property("value");
//       filteredData = filteredData.filter(r => r.state === inputValue);
//         console.log(filteredData);
//     filteredData.forEach((ufoSighting) => {
//       var row = tbody.append("tr");
//       Object.entries(ufoSighting).forEach(([key, value]) => {
//         var cell = row.append("td");
//         cell.text(value);
//       });
//     });
//   }
//     else if (d3.select("#country") != "") {
//       inputValue = d3.select("#country").property("value");
//       filteredData = filteredData.filter(r => r.country === inputValue);
//         console.log(filteredData);
//     filteredData.forEach((ufoSighting) => {
//       var row = tbody.append("tr");
//       Object.entries(ufoSighting).forEach(([key, value]) => {
//         var cell = row.append("td");
//         cell.text(value);
//       });
//     });
//   }
//     else if (d3.select("#shape") != "") {
//       inputValue = d3.select("#shape").property("value");
//       filteredData = filteredData.filter(r => r.shape === inputValue);
//         console.log(filteredData);
//     filteredData.forEach((ufoSighting) => {
//       var row = tbody.append("tr");
//       Object.entries(ufoSighting).forEach(([key, value]) => {
//         var cell = row.append("td");
//         cell.text(value);
//       });
//     });
//   }
//     else {
//       // data.forEach((ufoSighting) => {
//       //   var row = tbody.append("tr");
//       //   Object.entries(ufoSighting).forEach(([key, value]) => {
//       //     var cell = row.append("td");
//       //     cell.text(value);
//       //   });
//       // });
//   }  
  
// }
