var config = {
    type: 'doughnutLabels',
    data: {
        datasets: [{
            data: [
                30,
                20,
                18,
                15,
                8,
                5,
                4
            ],
            backgroundColor: [
                "#268f44",
                "#4CAF50",
                "#325c91",
                "#388E3B",
                "#2bbbcd",
                "#1E5E21",
                "#49c073"
            ],
            label: 'Dataset 1'
        }],
        labels: [
            "Development",
            "Acquisition / Partnerships",
            "Marketing / Sales",
            "Operations",
            "R&D",
            "Legal",
            "International Expansion"
        ]
    },
    options: {
        responsive: true,
        legend: {
            display:false,
            position: 'top'
        },
        title: {
            display: false,
            text: 'Chart.js Doughnut Chart'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        },
        cutoutPercentage: 70
    }
};

var ctx = document.getElementById("fund_graph").getContext("2d");
new Chart(ctx, config);
//============================================
//token
//=============================================
var config_token = {
    type: 'doughnutLabels',
    data: {
        datasets: [{
            data: [
                620,
                200,
                180,
            ],
            backgroundColor: [
                "#0f8f45",
                "#1ebbcd",
                "#325c92",
                "#49c073"
            ],
            borderColor: [
                "#202B3C",
                "#202B3C",
                "#202B3C",
                "#202B3C",
                "#202B3C"
            ],
            borderWidth: [2, 2, 2, 2, 2],
            label: 'Dataset 1'
        }],
        labels: [
            "Token Sale",
            "AXT Team + Advisors",
            "Company Reserve",
        ]
    },
    options: {
        responsive: true,
        legend: {
            display:false,
            position: 'top'
        },
        title: {
            display: false,
            text: 'Chart.js Doughnut Chart'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        },
        cutoutPercentage: 93
    }
};

var ctx_token = document.getElementById("token_graph").getContext("2d");
new Chart(ctx_token, config_token);
