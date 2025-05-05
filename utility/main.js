const { AgCharts } = agCharts;

function formatNumber(value) {
  return `${value}`;
}

function renderElectricityChart() {
  const options = {
    container: document.getElementById("electricityChart"),

    data: getData(),
    title: {
      text: "Electricity Usage",
    },
    series: [
      {
        type: "bar",
        xKey: "month",
        yKey: "electricityUsage",
        label: {
          formatter: ({ value }) => formatNumber(value),
        },
      },
    ],
    axes: [
      {
        type: "category",
        position: "bottom",
        title: {
          text: "Month",
        },
      },
      {
        type: "number",
        position: "left",
        title: {
          text: "Usage (kWh)",
        },
        label: {
          formatter: ({ value }) => formatNumber(value),
        },
      },
    ],
  };

  AgCharts.create(options);
}

function renderWaterChart() {
  const options = {
    container: document.getElementById("waterChart"),

    data: getData(),
    title: {
      text: "Water Usage",
    },
    series: [
      {
        type: "bar",
        xKey: "month",
        yKey: "waterUsage",
        label: {
          formatter: ({ value }) => formatNumber(value),
        },
      },
    ],
    axes: [
      {
        type: "category",
        position: "bottom",
        title: {
          text: "Month",
        },
      },
      {
        type: "number",
        position: "left",
        title: {
          text: "Usage (Cu M)",
        },
        label: {
          formatter: ({ value }) => formatNumber(value),
        },
      },
    ],
  };

  AgCharts.create(options);
}

renderElectricityChart();
renderWaterChart();
