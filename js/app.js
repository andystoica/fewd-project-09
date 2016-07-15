// Close alert windows on clicking the anchor element
$('.alert-message a').click(function(){
  $(this).parent().fadeOut();
  return false;
});


// Charts Global Settings
Chart.defaults.global.defaultFontColor = '#666666';
Chart.defaults.global.defaultFontFamily = "'Roboto', Helvetica, Arial, sans-serif";
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontStyle = 100;
Chart.defaults.global.maintainAspectRatio = false;
Chart.defaults.global.responsive = true;
Chart.defaults.global.legend.display = false;
Chart.defaults.bar.scaleShowVerticalLines = false;


// General Traffic Chart
var generalTrafficLabels = ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"];
var generalTrafficValues = [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250];

var cgt = document.getElementById("generalTraffic");
var myChart = new Chart(cgt, {
    type: 'line',
    data: {
        labels: generalTrafficLabels,
        datasets: [{
                    data: generalTrafficValues,
                    backgroundColor: 'rgba(116, 121, 189, .5)',
                    lineTension: 0,
                    borderWidth: 2,
                    borderColor: '#7479bd',
                    pointBorderColor: '#7479bd',
                    pointRadius: 6,
                    pointBorderWidth: 2,
                    pointBackgroundColor: '#fff'
                  }]
    },
    options: {
        scales: {
            yAxes: [{
                type: 'linear',
                ticks: {
                    max: 2500,
                    min: 0,
                    stepSize: 500
                },
                gridLines: {
                    drawTicks: false,
                    color: '#dfdfdf'
                }
            }],
            xAxes: [{
                gridLines: {
                    drawTicks: false,
                    color: '#dfdfdf'
                }
            }]
        }
    }
});


// Daily Traffic Chart
var dailyTrafficLabels = ["S", "M", "T", "W", "T", "F", "S"];
var dailyTrafficValues = [50, 125, 150, 125, 225, 175, 75];

var cdt = document.getElementById("dailyTraffic");
var myChart = new Chart(cdt, {
    type: 'bar',
    data: {
        labels: dailyTrafficLabels,
        datasets: [{
            data: dailyTrafficValues,
            backgroundColor: [
                '#7479bd',
                '#7479bd',
                '#7479bd',
                '#7479bd',
                '#7479bd',
                '#7479bd',
                '#7479bd'
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                type: 'linear',
                ticks: {
                    max: 250,
                    min: 0,
                    stepSize: 50
                },
                gridLines: {
                    drawTicks: false,
                    color: '#dfdfdf'
                }
            }],
            xAxes: [{
                gridLines: {
                    drawTicks: false,
                    color: 'rgba(0, 0, 0, 0)'
                }
            }]
        }
    }
});


// Mobile Usage Chart
var mobileUsersLabels = ["Phone", "Tablet", "Desktop"];
var mobileUsersValues = [140, 120, 500];

var cmu = document.getElementById("mobileUsers");
var myChart = new Chart(cmu, {
    type: 'doughnut',
    data: {
        labels: mobileUsersLabels,
        datasets: [{
            label: '# of Votes',
            data: mobileUsersValues,
            backgroundColor: [
                '#83c891',
                '#75b1be',
                '#7479bd',
            ],
            borderWidth: 0
        }]
    },
    options: {
    }
});
