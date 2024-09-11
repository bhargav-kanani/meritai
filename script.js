// // const myChart = new Chart("myChart", {
// //     type: "bar",
// //     data: {},
// //     options: {}
// //   });

// var xValues = ["Q1 2023", "Q2 2023", "Q3 2023", "Q4 2023"];
// var yValues = [60, 78, 100, 60];
// // var barColors = ["#167ee6", "#167ee6","#167ee6", "#167ee6"];
// var barColors = "#167ee6";
// new Chart("myChart", {
//   type: "bar",
//   data: {
//     labels: xValues,
//     datasets: [{
//       backgroundColor: barColors,
//       data: yValues
//     }]
//   },
//   options: {
//     legend: {display: false},
//     title: {
//       display: true,
//       text: "Lead Conversation Rate",
//       borderRadius: 9
//     },
//     scales: {
//         y: {
//             beginAtZero: true
//         }
//     }
//   }
// });

// const myChart = new Chart("myChart", {
//     type: "bar",
//     data: {},
//     options: {}
//   });

// const myChart = new Chart("myChart", {
//     type: "bar",
//     data: {},
//     options: {}
//   });

// const myChart = new Chart("myChart", {
//     type: "bar",
//     data: {},
//     options: {}
//   });

// const myChart = new Chart("myChart", {
//     type: "bar",
//     data: {},
//     options: {}
//   });

var xValues = ["Q1 2023", "Q2 2023", "Q3 2023", "Q4 2023"];
var yValues = [60, 78, 100, 60, 0, 120];
// var barColors = ["#167ee6", "#167ee6","#167ee6", "#167ee6"];
var barColors = "#167ee6";
new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues,
            barPercentage: 0.5, // Adjust bar width percentage (optional)
            categoryPercentage: 0.8 // Adjust bar spacing (optional)
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "Lead Conversation Rate",
            fontSize: 16, // Adjust font size as needed
            font: {
                weight: 'bold' // Set font weight to bold
            },
            position: 'top'
        },
        scales: {
            y: {
                beginAtZero: true, // Start the y-axis at 0%
                min: 0, // Force the minimum value to be 0
                max: 120,
                ticks: {
                    // Set the number of steps to 5
                    stepSize: 20,
                    callback: function (value, index) { // Custom tick callback
                        if (value < 0) {
                            return value; // Display negative values as is
                        } else {
                            return value + "%"; // Add percentage symbol for positive values
                        }
                    }
                }
            },
            x: {
                // Set the number of steps to 4 (adjust as needed)
                stepSize: 1
            }
        }
    }
});