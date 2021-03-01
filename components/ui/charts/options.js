export const options = {
    colors: ["#178acd", "#23d2be", "#fdc131", "#f2326b", "#239f25", "#fb9209", "#842660", "#4d6272", "#f45b5b", "#91e8e1"],
    chart: {
        type: '',
        zoomType: 'xy'
    },
    lang: {
        thousandsSep: ',',
        noData: "No Data Available"
    },
    boost: {
        useGPUTranslations: true,
        usePreAllocated: true
    },
    title: {
        text: '',
        style: {
            color: '#5a6771',
            font: 'bold 16px "Lato", Verdana, sans-serif',
        }
    },
    subtitle: {
        text: '',
        style: {
            color: '#5a6771',
            font: 'bold 12px "Lato", Verdana, sans-serif',
        }
    },
    exporting: false,
    xAxis: {
        dateTimeLabelFormats: {
            millisecond: '%H:%M:%S.%L',
            second: '%H:%M:%S',
            minute: '%H:%M',
            hour: '%H:%M',
            day: '%b %e',
            week: '%b %e',
            month: '%b \'%y',
            year: '%Y'
        },
        labels: {
            style: {
                color: '#637079',
                font: '9pt Lato, sans-serif',
            },
        },
        title: {
            text: '',
            style: {
                color: '#637079',
                font: '11pt Lato, sans-serif',
            },
        },
        lineWidth: 0,
        gridLineWidth: 0
    },  
    credits: {
        enabled: false,
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            style: {
                color: '#637079',
                font: '9pt Lato, sans-serif',
            },
        },
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        gridLineWidth: 0
    },
    tooltip: {
        shared: true,
        dateTimeLabelFormats: {
            millisecond: '%H:%M:%S.%L',
            second: '%H:%M:%S',
            minute: '%H:%M',
            hour: '%H:%M',
            day: '%b %e',
            week: '%b %e',
            month: '%b \'%y',
            year: '%Y'
        },
        valueDecimals: 2,
    },
    legend: {
        floating: false,
        margin: 0,
        itemDistance: 7,
        symbolPadding: 2,
        itemStyle: {
            fontWeight: 'normal',
            color: '#5a6771',
            fontSize: '12px'
        },
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.5
        },
        series: {
            cursor: 'pointer',
        },
    },
}

export const charttypes = {
    'AreaChart': 'area',
    'LineChart': 'line',
    'BarChart': 'bar',
    'AreaSplineChart': 'areaspline',
    'AreaRangeChart': 'arearange',
    'SteamGraphChart': 'steamgraph',
    'ScatterChart': 'scatter',
    'ColumnChart': 'column',
    'BubbleChart': 'bubble',
    'SplineChart': 'spline',
    'SolidGaugeChart': 'solidgauge',
    'HeatMapChart': 'heatmap',
    'TileMapChart': 'tilemap',
    'WaterFallChart': 'waterfall',
    'VariwindChart': 'variwide',
    'FunnelChart': 'funnel',
    'PyramidChart': 'pyramid',
    'DependencyWheelChart': 'dependencywheel',
    'SankeyChart': 'sankey',
    'OrganizationChart': 'organization',
    'XrangeChart': 'xrange',
    'WordCloudChart': 'wordcloud',
    'ColumnPyramidChart': 'columnpyramid',
    'ItemChart': 'item',
    'NetworkGraphChart': 'networkgraph',
    'VennChart': 'venn',
    'PackedBubbleChart': 'packedbubble',
    'BubbleChart': 'bubble',
    'VariablePieChart': 'variablepie',
    'Timeline': 'timeline',
    'Map': 'map',
    'NumberBox': 'numberbox',
}