window.onload = function () {

    var chart1 = new CanvasJS.Chart("chart1", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "Tăng trưởng user theo tuần"
        },
        axisY: {
            title: "Tổng số user"
        },
        axisX: {
            title: "Tuần"
        },
        data: [{        
            type: "column",  
            showInLegend: false, 
            dataPoints: [      
                { y: 5478,  label: "14-20/3" },
                { y: 5566,  label: "21-27/3" },
                { y: 5604,  label: "28-3/4" },
                { y: 5621,  label: "4-10/4" },
                { y: 5662,  label: "11-17/4" },
                { y: 5684,  label: "18-24/4" },
                { y: 5808,  label: "25-1/5" }
            ],
        }]
    });
    chart1.render();

    var chart2 = new CanvasJS.Chart("chart2", {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "New user hàng tuần"
        },
        axisY: {
            title: "Số lượng user"
        },
        axisX: {
            title: "Tuần"
        },
        data: [{        
            type: "line",
            indexLabelFontSize: 16,
            dataPoints: [
                { y: 193, label:"14-20/3", indexLabel: "\u2191 highest",markerColor: "red", markerType: "triangle"},
                { y: 88,  label: "21-27/3"},
                { y: 38,  label: "28-3/4"},
                { y: 17,  label: "4-10/4", indexLabel: "\u2193 lowest",markerColor: "DarkSlateGrey", markerType: "cross"},
                { y: 41,  label: "11-17/4"},
                { y: 21,  label: "18-24/4"},
                { y: 124, label: "25-1/5"}
            ]
        }]
    });
    chart2.render();

    var chart3 = new CanvasJS.Chart("chart3",{
        title: {
            text: "Website Traffic Source"
        },
        data: [{
                type: "pie",
                startAngle: 45,
                showInLegend: "true",
                legendText: "{label}",
                indexLabel: "{label} ({y})",
                yValueFormatString:"#,##0.#"%"",
                dataPoints: [
                    { label: "Organic", y: 36 },
                    { label: "Email Marketing", y: 31 },
                    { label: "Referrals", y: 7 },
                    { label: "Twitter", y: 7 },
                    { label: "Facebook", y: 6 },
                    { label: "Google", y: 10 },
                    { label: "Others", y: 3 }
                ]
        }]
    });
    chart3.render();

    var absoluteDivHeight = $(".canvasjs-chart-canvas").height();
    var blankDiv = $("#div-chart").height();
    $("#div-chart").height(absoluteDivHeight+50)
    console.log(absoluteDivHeight,blankDiv)
}


