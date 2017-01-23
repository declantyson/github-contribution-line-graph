/*
 *
 *  github-contribution-line-graph
 *  Declan Tyson
 *  v0.0.1
 *  23/01/2017
 *
 */

var data = {
    labels: [],
    datasets: [{
        label: "Contributions",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#ffffff",
        borderWidth: 3,
        borderColor: "#44a340",
        borderCapStyle: "round",
        borderDash: [],
        borderJoinStyle: "round",
        pointBorderColor: "#44a340",
        pointBackgroundColour: "#44a340",
        pointRadius: 0.5,
        data: [],
        spanGaps: true
    }]
};

$('.js-calendar-graph .day').each(function () {
    if(data.labels.length >= 28) data.labels.shift();
    if(data.datasets[0].data.length >= 28) data.datasets[0].data.shift();

    data.labels.push($(this).data('date'));
    data.datasets[0].data.push($(this).data('count'));
});

var $graphContainer = $('<div class="js-contribution-graph js-contribution-graph__line"/>');
$('.js-contribution-graph').after($graphContainer);
$graphContainer.append('<canvas id="gclg"/>');

var gclg = new Chart(document.getElementById("gclg"), {
    type: "line",
    data: data
});