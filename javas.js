let navBar=document.getElementById("nav-links");

function showMenu(){
    navBar.style.right="0px";
    navBar.style.display="block";
}
function closeMenu(){
    navBar.style.display="none";
}

/* graphics for population information
*/
document.addEventListener('DOMContentLoaded', function() {
    // Data for Bethamcherla population
    var data = {
        labels: ['Male', 'Female'],
        datasets: [{
            label: 'Population in Bethamcherla',
            backgroundColor: ['#3498db', 'rgb(120, 234, 156)'],
            borderColor: '#2980b9',
            borderWidth: 1,
            data: [19424, 19570] // Replace with actual data values
        }]
    };

    // Configuration options
    var options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback: function(value) { return value; }
                }
            }]
        },
        // Customize labels
        plugins: {
            legend: {
                labels: {
                    color: 'black', // Color of legend labels
                    
                },
                label:
                {
                    color:"black",
                    fontSize:'25px'
                }

            }
        },
        // Customize other labels (like axis labels)
        scales: {
            x: {
                ticks: {
                    color: 'black' // Color of x-axis labels
                }
            },
            y: {
                ticks: {
                    color: 'black' // Color of y-axis labels
                }
            }
        }
    };

    // Get the canvas element
    var ctx = document.getElementById('populationChart').getContext('2d');

    // Create the bar chart
    var populationChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
});


//for Literacy



      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Male', 78],
          ['Female', 56],
          
        ]);

        // Set chart options
        var options = {
            'title': 'Literacy rate of Bethamcherla city', // Chart title
              // Chart height in pixels
            'backgroundColor': 'white',  // Background color of the chart
            'titleTextStyle': {
              color: 'black',  // Title text color
              fontSize: 15,  // Title font size
              bold: true  ,
              
                            // Title bold style
            },
            'legend': {
              textStyle: {
                color: 'black'  // Legend text color
              }
            }
          };
                    
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      };

//survey

// Load the Visualization API with the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback function to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart2);

// Callback function that creates and populates a data table,
// instantiates the bar chart, passes in the data, and draws it.
function drawChart2() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Food Type'); // Define column for food type labels
  data.addColumn('number', 'Percentage'); // Define column for percentage values
  data.addRows([
    ['Vegetarian Food', 75], // Data row for vegetarian food, 75% preference
    ['Non Vegetarian Food', 25], // Data row for non-vegetarian food, 25% preference
  ]);

  // Set chart options.
  var options = {
    'title': 'Types of Food Preferred', // Chart title
     // Chart height in pixels
    'backgroundColor': 'white', // Background color of the chart
    'titleTextStyle': {
      color: 'black', // Title text color
      fontSize: 15, // Title font size
      bold: true // Title bold style
    },
    'legend': {
      textStyle: {
        color: 'black' // Legend text color
      }
    }
  };

  // Instantiate and draw the bar chart, passing in data and options.
  var chart = new google.visualization.BarChart(document.getElementById('survey-graphs'));
  chart.draw(data, options);
}

//food choices
// Load the Visualization API with the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback function to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart4);

// Callback function that creates and populates a data table,
// instantiates the bar chart, passes in the data, and draws it.
function drawChart4() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Food Type'); // Define column for food type labels
  data.addColumn('number', 'Percentage'); // Define column for percentage values
  data.addRows([
    ['Good taste', 87.5], // Data row for vegetarian food, 75% preference
    ['Low cost', 75],
    ['Good quality ',75],
     ['Healthy food',68.7],
     ['Convenience',62.5],
     ['Natural content and weight control',68.75],
  ]);

  // Set chart options.
  var options = {
    'title': 'Determinates of Food choices', // Chart title
     // Chart height in pixels
    'backgroundColor': 'white', // Background color of the chart
    'titleTextStyle': {
      color: 'black', // Title text color
      fontSize: 15, // Title font size
      bold: true // Title bold style
    },
    'legend': {
      textStyle: {
        color: 'black' // Legend text color
      }
    }
  };

  // Instantiate and draw the bar chart, passing in data and options.
  var chart = new google.visualization.BarChart(document.getElementById('graph_two'));
  chart.draw(data, options);
}

/* table*/
let search=document.getElementById("search");
let please=document.getElementById("please");
let foodName=document.getElementById("name");
let total=document.getElementById("total");
let know=document.getElementById("know");
let count=0;

function nutrition(){
  if(search.value==="")
    {
      alert("Enter a Item To Search.");
    }
    let complete=0;
    please.innerText='Please Wait..';
    know.innerText="";
var apiKey = 'btok+IjIjyEnEa4NAa/wKw==KN7QNVEY4wi8Z22d';

var query = search.value;
var url = `https://api.api-ninjas.com/v1/nutrition?query=${query}`;

fetch(url, {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json',
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(result => {
    console.log(result);

    
    let keys = Object.keys(result[0]);
    
    // Get the table element
    
    
    var table = document.getElementById('nutritionTable');
    // Create table header row
   while (table.rows.length > 1) {
      table.deleteRow(1);
    }
    if(table.rows.length===0){
    var headerRow = table.insertRow();
    var headerCell1 = headerRow.insertCell(0);
    var headerCell2 = headerRow.insertCell(1);
    headerCell1.textContent = 'Property';
    headerCell2.textContent = 'Value';
    headerCell1.style.fontWeight = 'bold';
    headerCell2.style.fontWeight = 'bold';
    }
    foodName.innerText=`Name of the Food Item is ${search.value}`;

    keys.forEach(key => {
      if(result[0][key]>=0 || result[0][key]===search.value){
        
        var row = table.insertRow();
        
    
        var cell1 = row.insertCell(0);
        cell1.textContent = key;
        
        var cell2 = row.insertCell(1);
        if(result[0][key]>=0){
        complete+=(result[0][key]);};
        cell2.textContent = result[0][key];
      };
    });
    
    please.innerText="";
    count++;
    total.innerText=`${search.value} Has a Total Calories of ${complete}`;
})
.catch(error => {
    console.error('Fetch Error:', error);
});

};
