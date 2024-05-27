export const sidebarData = [
  {
    icon: "ic:round-space-dashboard",
    text: "Dashboard",
  },
  {
    icon: "solar:card-outline",
    text: "Sales & Payment",
  },
  {
    icon: "tabler:file-invoice",
    text: "Invoices",
  },
  {
    icon: "map:accounting",
    text: "Accounting",
  },
  {
    icon: "iconamoon:invoice",
    text: "Purchases",
  },
  {
    icon: "mdi:report-box-outline",
    text: "Reports",
  },
  {
    icon: "material-symbols:integration-instructions-outline",
    text: "Integrations",
  },
];

export const cardData = [
  {
    icon: "uis:graph-bar",
    iconBgColor: "bg-[#504F9D]",
    title: "Overall Revenue",
    amount: "$27,350",
    trend: "+3.6",
    trendIcon: "gridicons:trending",
  },
  {
    icon: "solar:pie-chart-linear",
    iconBgColor: "bg-[#02A18A]",
    title: "Invoiced",
    amount: "$7,020",
    trend: "-2.05%",
    trendIcon: "material-symbols:trending-down",
  },
  {
    icon: "hugeicons:money-receive-flow-01",
    iconBgColor: "bg-[#70D560]",
    title: "Received",
    amount: "$4,950",
    trend: "+1.3%",
    trendIcon: "gridicons:trending",
  },
  {
    icon: "octicon:people-16",
    iconBgColor: "bg-[#E1F296]",
    title: "Clients",
    amount: "3,065",
    trend: "+5.04%",
    trendIcon: "gridicons:trending",
  },
];

export const monthlyData = [
  { month: "January", inflow: 5000, outflow: 3000 },
  { month: "February", inflow: 6000, outflow: 3500 },
  { month: "March", inflow: 7000, outflow: 4000 },
  { month: "April", inflow: 8000, outflow: 4500 },
  { month: "May", inflow: 9000, outflow: 5000 },
  { month: "June", inflow: 10000, outflow: 5500 },
  { month: "July", inflow: 11000, outflow: 6000 },
  { month: "August", inflow: 12000, outflow: 6500 },
  { month: "September", inflow: 13000, outflow: 7000 },
  { month: "October", inflow: 14000, outflow: 7500 },
  { month: "November", inflow: 15000, outflow: 8000 },
  { month: "December", inflow: 16000, outflow: 8500 },
];

// MoneyInsightsChart Data

const inflowData = [
  26020, 39130, 21500, 31120, 27620, 24920, 50000, 38500, 39500, 45000, 35000,
  20030,
];
const outflowData = [
  12000, 15000, 10000, 5000, 4200, 5700, 17000, 17000, 19200, 12500, 16200,
  8800,
];

const monthsMoneyInsights = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const MoneyInsightsChartData = {
  labels: monthsMoneyInsights,
  datasets: [
    {
      label: "Inflow",
      data: inflowData,
      backgroundColor: "#054D3D",
      borderColor: "#054D3D",
      borderWidth: 1,
      borderRadius: {
        topLeft: 24,
        topRight: 24,
        bottomLeft: 0,
        bottomRight: 0,
      },
    },
    {
      label: "Outflow",
      data: outflowData,
      backgroundColor: "#02A18A",
      borderColor: "#02A18A",
      borderWidth: 1,
      borderRadius: {
        topLeft: 24,
        topRight: 24,
        bottomLeft: 0,
        bottomRight: 0,
      },
    },
  ],
};

export const MoneyInsightsChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Monthly Inflow and Outflow",
    },
    tooltip: {
      backgroundColor: "#70D560",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#E9E9E9",
      },
    },
    y: {
      grid: {
        display: true,
        borderDash: [5, 5],
      },
      ticks: {
        stepSize: 10000,
      },
      border: {
        display: false,
      },
    },
  },
};

// Report Chart Data

const reportData = [35, 45, 50, 30, 40, 25, 30];
const reportLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const maxValue = Math.max(...reportData);

export const reportChartData = {
  labels: reportLabels,
  datasets: [
    {
      label: "Weekly",
      data: reportData,
      backgroundColor: function (context) {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        if (!chartArea) {
          return null;
        }

        const gradient = ctx.createLinearGradient(
          0,
          chartArea.bottom,
          0,
          chartArea.top
        );
        gradient.addColorStop(0, "#064E3B");
        gradient.addColorStop(1, "#059669");

        return context.raw === maxValue ? gradient : "#F0F7F6";
      },
      borderRadius: 12,
      barPercentage: 1,
      categoryPercentage: 0.9,
    },
  ],
};

export const reportChartOptions = {
  maintainAspectRatio: false,
  layout: {
    padding: {
      top: 50,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      anchor: "end",
      align: "end",
      font: {
        weight: "bold",
        size: 14,
      },
      formatter: (value, context) => {
        return value === maxValue ? value : ''; // Show label only for the highest bar
      },
      display: (context) => {
        return context.dataset.data[context.dataIndex] === maxValue;
      },
      backgroundColor: (context) => {
        return context.dataset.data[context.dataIndex] === maxValue ? '#059669' : 'transparent';
      },
      borderRadius: (context) => {
        return context.dataset.data[context.dataIndex] === maxValue ? 10 : 0;
      },
      color: (context) => {
        return context.dataset.data[context.dataIndex] === maxValue ? 'white' : 'transparent';
      },
      padding: (context) => {
        return context.dataset.data[context.dataIndex] === maxValue ? { top: 6, right: 20, bottom: 6, left: 20 } : { top: 0, right: 0, bottom: 0, left: 0 };
      },
    },
  },
  scales: {
    y: {
      display: false,
    },
    x: {
      grid: {
        display: false,
        min: 0,
        max: maxValue + 20,
      },
    },
  },
};
