<template>
  <div id="IndexForm">
    <el-row style="height: calc(50% - 5px)" class="Index-Row Index-Row-1">
      <div id="Index-Box-1-1" class="Index-Col"></div>
      <div id="Index-Box-1-2" class="Index-Col"></div>
    </el-row>
    <el-row style="height: calc(50% - 5px)" class="Index-Row Index-Row-2">
      <div id="Index-Box-2-1" class="Index-Col"></div>
      <div id="Index-Box-2-2" class="Index-Col"></div>
    </el-row>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
// // import * as echarts from "echarts";
// import "echarts-gl";
// import * as echarts from "echarts/core";
// import {
//   ScatterChart,
//   CustomChart,
//   BarChart,
//   ThemeRiverChart,
// } from "echarts/charts";
// // 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
// import {
//   TooltipComponent,
//   LegendComponent,
//   PolarComponent,
//   VisualMapComponent,
//   SingleAxisComponent,
// } from "echarts/components";
// // 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
// import { CanvasRenderer } from "echarts/renderers";


// echarts.use([
//   ScatterChart,
//   LegendComponent,
//   CustomChart,
//   VisualMapComponent,
//   BarChart,
//   PolarComponent,
//   ThemeRiverChart,
//   SingleAxisComponent,
//   TooltipComponent,
//   CanvasRenderer,
// ]);
onMounted(() => {
  showIB1_1();
  showIB1_2();
  showIB2_1();
  showIB2_2();
});

const showIB1_1 = () => {
  var chartDom = document.getElementById("Index-Box-1-1");
  var myChart = echarts.init(chartDom);
  var option;

  // prettier-ignore
  const femaleData = [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
    [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
    [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
    [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
    [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
    [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
    [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
    [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6],
    [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3],
    [167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8],
    [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3],
    [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3],
    [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0],
    [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7],
    [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5],
    [164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2],
    [170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8],
    [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9],
    [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2],
    [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4],
    [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4],
    [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2],
    [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0],
    [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0],
    [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4],
    [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4],
    [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5],
    [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5],
    [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2],
    [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2],
    [160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3],
    [166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5],
    [170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4],
    [167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6],
    [160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8],
    [177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1],
    [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5],
    [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2],
    [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6],
    [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0],
    [162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0],
    [157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9],
    [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1],
    [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
    [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
    [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
    [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
    [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
    [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
    [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
    [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
    [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]
];
  // prettier-ignore
  const maleDeta = [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8],
    [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6],
    [180.0, 76.6], [177.8, 83.6], [192.0, 90.0], [176.0, 74.6], [174.0, 71.0],
    [184.0, 79.6], [192.7, 93.8], [171.5, 70.0], [173.0, 72.4], [176.0, 85.9],
    [176.0, 78.8], [180.5, 77.8], [172.7, 66.2], [176.0, 86.4], [173.5, 81.8],
    [178.0, 89.6], [180.3, 82.8], [180.3, 76.4], [164.5, 63.2], [173.0, 60.9],
    [183.5, 74.8], [175.5, 70.0], [188.0, 72.4], [189.2, 84.1], [172.8, 69.1],
    [170.0, 59.5], [182.0, 67.2], [170.0, 61.3], [177.8, 68.6], [184.2, 80.1],
    [186.7, 87.8], [171.4, 84.7], [172.7, 73.4], [175.3, 72.1], [180.3, 82.6],
    [182.9, 88.7], [188.0, 84.1], [177.2, 94.1], [172.1, 74.9], [167.0, 59.1],
    [169.5, 75.6], [174.0, 86.2], [172.7, 75.3], [182.2, 87.1], [164.1, 55.2],
    [163.0, 57.0], [171.5, 61.4], [184.2, 76.8], [174.0, 86.8], [174.0, 72.2],
    [177.0, 71.6], [186.0, 84.8], [167.0, 68.2], [171.8, 66.1], [182.0, 72.0],
    [167.0, 64.6], [177.8, 74.8], [164.5, 70.0], [192.0, 101.6], [175.5, 63.2],
    [171.2, 79.1], [181.6, 78.9], [167.4, 67.7], [181.1, 66.0], [177.0, 68.2],
    [174.5, 63.9], [177.5, 72.0], [170.5, 56.8], [182.4, 74.5], [197.1, 90.9],
    [180.1, 93.0], [175.5, 80.9], [180.6, 72.7], [184.4, 68.0], [175.5, 70.9],
    [180.6, 72.5], [177.0, 72.5], [177.1, 83.4], [181.6, 75.5], [176.5, 73.0],
    [175.0, 70.2], [174.0, 73.4], [165.1, 70.5], [177.0, 68.9], [192.0, 102.3],
    [176.5, 68.4], [169.4, 65.9], [182.1, 75.7], [179.8, 84.5], [175.3, 87.7],
    [184.9, 86.4], [177.3, 73.2], [167.4, 53.9], [178.1, 72.0], [168.9, 55.5],
    [157.2, 58.4], [180.3, 83.2], [170.2, 72.7], [177.8, 64.1], [172.7, 72.3],
    [165.1, 65.0], [186.7, 86.4], [165.1, 65.0], [174.0, 88.6], [175.3, 84.1],
    [185.4, 66.8], [177.8, 75.5], [180.3, 93.2], [180.3, 82.7], [177.8, 58.0],
    [177.8, 79.5], [177.8, 78.6], [177.8, 71.8], [177.8, 116.4], [163.8, 72.2],
    [188.0, 83.6], [198.1, 85.5], [175.3, 90.9], [166.4, 85.9], [190.5, 89.1],
    [166.4, 75.0], [177.8, 77.7], [179.7, 86.4], [172.7, 90.9], [190.5, 73.6],
    [185.4, 76.4], [168.9, 69.1], [167.6, 84.5], [175.3, 64.5], [170.2, 69.1],
    [190.5, 108.6], [177.8, 86.4], [190.5, 80.9], [177.8, 87.7], [184.2, 94.5],
    [176.5, 80.2], [177.8, 72.0], [180.3, 71.4], [171.4, 72.7], [172.7, 84.1],
    [172.7, 76.8], [177.8, 63.6], [177.8, 80.9], [182.9, 80.9], [170.2, 85.5],
    [167.6, 68.6], [175.3, 67.7], [165.1, 66.4], [185.4, 102.3], [181.6, 70.5],
    [172.7, 95.9], [190.5, 84.1], [179.1, 87.3], [175.3, 71.8], [170.2, 65.9],
    [193.0, 95.9], [171.4, 91.4], [177.8, 81.8], [177.8, 96.8], [167.6, 69.1],
    [167.6, 82.7], [180.3, 75.5], [182.9, 79.5], [176.5, 73.6], [186.7, 91.8],
    [188.0, 84.1], [188.0, 85.9], [177.8, 81.8], [174.0, 82.5], [177.8, 80.5],
    [171.4, 70.0], [185.4, 81.8], [185.4, 84.1], [188.0, 90.5], [188.0, 91.4],
    [182.9, 89.1], [176.5, 85.0], [175.3, 69.1], [175.3, 73.6], [188.0, 80.5],
    [188.0, 82.7], [175.3, 86.4], [170.5, 67.7], [179.1, 92.7], [177.8, 93.6],
    [175.3, 70.9], [182.9, 75.0], [170.8, 93.2], [188.0, 93.2], [180.3, 77.7],
    [177.8, 61.4], [185.4, 94.1], [168.9, 75.0], [185.4, 83.6], [180.3, 85.5],
    [174.0, 73.9], [167.6, 66.8], [182.9, 87.3], [160.0, 72.3], [180.3, 88.6],
    [167.6, 75.5], [186.7, 101.4], [175.3, 91.1], [175.3, 67.3], [175.9, 77.7],
    [175.3, 81.8], [179.1, 75.5], [181.6, 84.5], [177.8, 76.6], [182.9, 85.0],
    [177.8, 102.5], [184.2, 77.3], [179.1, 71.8], [176.5, 87.9], [188.0, 94.3],
    [174.0, 70.9], [167.6, 64.5], [170.2, 77.3], [167.6, 72.3], [188.0, 87.3],
    [174.0, 80.0], [176.5, 82.3], [180.3, 73.6], [167.6, 74.1], [188.0, 85.9],
    [180.3, 73.2], [167.6, 76.3], [183.0, 65.9], [183.0, 90.9], [179.1, 89.1],
    [170.2, 62.3], [177.8, 82.7], [179.1, 79.1], [190.5, 98.2], [177.8, 84.1],
    [180.3, 83.2], [180.3, 83.2]
];
  function calculateAverage(data, dim) {
    let total = 0;
    for (var i = 0; i < data.length; i++) {
      total += data[i][dim];
    }
    return (total /= data.length);
  }
  const scatterOption = (option = {
    xAxis: {
      scale: true,
    },
    yAxis: {
      scale: true,
    },
    series: [
      {
        type: "scatter",
        id: "female",
        dataGroupId: "female",
        universalTransition: {
          enabled: true,
          delay: function (idx, count) {
            return Math.random() * 400;
          },
        },
        data: femaleData,
      },
      {
        type: "scatter",
        id: "male",
        dataGroupId: "male",
        universalTransition: {
          enabled: true,
          delay: function (idx, count) {
            return Math.random() * 400;
          },
        },
        data: maleDeta,
      },
    ],
  });
  const barOption = {
    xAxis: {
      type: "category",
      data: ["Female", "Male"],
    },
    yAxis: {},
    series: [
      {
        type: "bar",
        id: "total",
        data: [
          {
            value: calculateAverage(maleDeta, 0),
            groupId: "male",
          },
          {
            value: calculateAverage(femaleData, 0),
            groupId: "female",
          },
        ],
        universalTransition: {
          enabled: true,
          seriesKey: ["female", "male"],
          delay: function (idx, count) {
            return Math.random() * 400;
          },
        },
      },
    ],
  };
  let currentOption = scatterOption;
  setInterval(function () {
    currentOption = currentOption === scatterOption ? barOption : scatterOption;
    myChart.setOption(currentOption, true);
  }, 2000);

  option && myChart.setOption(option);
};
const showIB1_2 = () => {
  var chartDom = document.getElementById("Index-Box-1-2");
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "line",
        lineStyle: {
          color: "rgba(0,0,0,0.2)",
          width: 1,
          type: "solid",
        },
      },
    },
    legend: {
      data: ["DQ", "TY", "SS", "QG", "SY", "DD"],
    },
    singleAxis: {
      top: 50,
      bottom: 50,
      axisTick: {},
      axisLabel: {},
      type: "time",
      axisPointer: {
        animation: true,
        label: {
          show: true,
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          opacity: 0.2,
        },
      },
    },
    series: [
      {
        type: "themeRiver",
        emphasis: {
          itemStyle: {
            shadowBlur: 20,
            shadowColor: "rgba(0, 0, 0, 0.8)",
          },
        },
        data: [
          ["2015/11/08", 10, "DQ"],
          ["2015/11/09", 15, "DQ"],
          ["2015/11/10", 35, "DQ"],
          ["2015/11/11", 38, "DQ"],
          ["2015/11/12", 22, "DQ"],
          ["2015/11/13", 16, "DQ"],
          ["2015/11/14", 7, "DQ"],
          ["2015/11/15", 2, "DQ"],
          ["2015/11/16", 17, "DQ"],
          ["2015/11/17", 33, "DQ"],
          ["2015/11/18", 40, "DQ"],
          ["2015/11/19", 32, "DQ"],
          ["2015/11/20", 26, "DQ"],
          ["2015/11/21", 35, "DQ"],
          ["2015/11/22", 40, "DQ"],
          ["2015/11/23", 32, "DQ"],
          ["2015/11/24", 26, "DQ"],
          ["2015/11/25", 22, "DQ"],
          ["2015/11/26", 16, "DQ"],
          ["2015/11/27", 22, "DQ"],
          ["2015/11/28", 10, "DQ"],
          ["2015/11/08", 35, "TY"],
          ["2015/11/09", 36, "TY"],
          ["2015/11/10", 37, "TY"],
          ["2015/11/11", 22, "TY"],
          ["2015/11/12", 24, "TY"],
          ["2015/11/13", 26, "TY"],
          ["2015/11/14", 34, "TY"],
          ["2015/11/15", 21, "TY"],
          ["2015/11/16", 18, "TY"],
          ["2015/11/17", 45, "TY"],
          ["2015/11/18", 32, "TY"],
          ["2015/11/19", 35, "TY"],
          ["2015/11/20", 30, "TY"],
          ["2015/11/21", 28, "TY"],
          ["2015/11/22", 27, "TY"],
          ["2015/11/23", 26, "TY"],
          ["2015/11/24", 15, "TY"],
          ["2015/11/25", 30, "TY"],
          ["2015/11/26", 35, "TY"],
          ["2015/11/27", 42, "TY"],
          ["2015/11/28", 42, "TY"],
          ["2015/11/08", 21, "SS"],
          ["2015/11/09", 25, "SS"],
          ["2015/11/10", 27, "SS"],
          ["2015/11/11", 23, "SS"],
          ["2015/11/12", 24, "SS"],
          ["2015/11/13", 21, "SS"],
          ["2015/11/14", 35, "SS"],
          ["2015/11/15", 39, "SS"],
          ["2015/11/16", 40, "SS"],
          ["2015/11/17", 36, "SS"],
          ["2015/11/18", 33, "SS"],
          ["2015/11/19", 43, "SS"],
          ["2015/11/20", 40, "SS"],
          ["2015/11/21", 34, "SS"],
          ["2015/11/22", 28, "SS"],
          ["2015/11/23", 26, "SS"],
          ["2015/11/24", 37, "SS"],
          ["2015/11/25", 41, "SS"],
          ["2015/11/26", 46, "SS"],
          ["2015/11/27", 47, "SS"],
          ["2015/11/28", 41, "SS"],
          ["2015/11/08", 10, "QG"],
          ["2015/11/09", 15, "QG"],
          ["2015/11/10", 35, "QG"],
          ["2015/11/11", 38, "QG"],
          ["2015/11/12", 22, "QG"],
          ["2015/11/13", 16, "QG"],
          ["2015/11/14", 7, "QG"],
          ["2015/11/15", 2, "QG"],
          ["2015/11/16", 17, "QG"],
          ["2015/11/17", 33, "QG"],
          ["2015/11/18", 40, "QG"],
          ["2015/11/19", 32, "QG"],
          ["2015/11/20", 26, "QG"],
          ["2015/11/21", 35, "QG"],
          ["2015/11/22", 40, "QG"],
          ["2015/11/23", 32, "QG"],
          ["2015/11/24", 26, "QG"],
          ["2015/11/25", 22, "QG"],
          ["2015/11/26", 16, "QG"],
          ["2015/11/27", 22, "QG"],
          ["2015/11/28", 10, "QG"],
          ["2015/11/08", 10, "SY"],
          ["2015/11/09", 15, "SY"],
          ["2015/11/10", 35, "SY"],
          ["2015/11/11", 38, "SY"],
          ["2015/11/12", 22, "SY"],
          ["2015/11/13", 16, "SY"],
          ["2015/11/14", 7, "SY"],
          ["2015/11/15", 2, "SY"],
          ["2015/11/16", 17, "SY"],
          ["2015/11/17", 33, "SY"],
          ["2015/11/18", 40, "SY"],
          ["2015/11/19", 32, "SY"],
          ["2015/11/20", 26, "SY"],
          ["2015/11/21", 35, "SY"],
          ["2015/11/22", 4, "SY"],
          ["2015/11/23", 32, "SY"],
          ["2015/11/24", 26, "SY"],
          ["2015/11/25", 22, "SY"],
          ["2015/11/26", 16, "SY"],
          ["2015/11/27", 22, "SY"],
          ["2015/11/28", 10, "SY"],
          ["2015/11/08", 10, "DD"],
          ["2015/11/09", 15, "DD"],
          ["2015/11/10", 35, "DD"],
          ["2015/11/11", 38, "DD"],
          ["2015/11/12", 22, "DD"],
          ["2015/11/13", 16, "DD"],
          ["2015/11/14", 7, "DD"],
          ["2015/11/15", 2, "DD"],
          ["2015/11/16", 17, "DD"],
          ["2015/11/17", 33, "DD"],
          ["2015/11/18", 4, "DD"],
          ["2015/11/19", 32, "DD"],
          ["2015/11/20", 26, "DD"],
          ["2015/11/21", 35, "DD"],
          ["2015/11/22", 40, "DD"],
          ["2015/11/23", 32, "DD"],
          ["2015/11/24", 26, "DD"],
          ["2015/11/25", 22, "DD"],
          ["2015/11/26", 16, "DD"],
          ["2015/11/27", 22, "DD"],
          ["2015/11/28", 10, "DD"],
        ],
      },
    ],
  };

  option && myChart.setOption(option);
};
const showIB2_1 = () => {
  var chartDom = document.getElementById("Index-Box-2-1");
  var myChart = echarts.init(chartDom);
  var option;

  var _animationDuration = 5000;
  var _animationDurationUpdate = 7000;
  var _animationEasingUpdate = "linear";
  // prettier-ignore
  var _radianLabels = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpius', 'Sagittarius', 'Capricornus', 'Aquarius', 'Pisces'];
  var _valOnRoundRadian = _radianLabels.length;
  var _radianStep = Math.PI / 45;
  var _barWidthValue = 0.4;
  var _valOnRadiusStep = 4;
  // angleAxis.startAngle is 90 by default.
  var _startRadian = Math.PI / 2;
  // prettier-ignore
  var _colors = [
    { fill: '#5470c6', text: '#2747a5' },
    { fill: '#91cc75', text: '#447f27' },
    { fill: '#fac858', text: '#a0761c' }
];
  var _currentDataIndex = 0;
  // prettier-ignore
  var _datasourceList = [
    [[1, 3], [2, 6], [3, 9]],
    [[1, 12], [2, 16], [3, 14]],
    [[1, 17], [2, 22], [3, 19]],
    [[1, 19], [2, 33], [3, 24]],
    [[1, 24], [2, 42], [3, 29]],
    [[1, 27], [2, 47], [3, 41]],
    [[1, 36], [2, 52], [3, 52]],
    [[1, 46], [2, 59], [3, 63]],
    [[1, 60], [2, 63], [3, 69]],
];
  var _barNamesByOrdinal = { 1: "A", 2: "B", 3: "C" };
  function getMaxRadius() {
    var radius = 0;
    var datasource = _datasourceList[_currentDataIndex];
    for (var j = 0; j < datasource.length; j++) {
      var dataItem = datasource[j];
      radius = Math.max(
        radius,
        getSpiralValueOnRadius(dataItem[0], dataItem[1])
      );
    }
    return Math.ceil(radius * 1.2);
  }
  function getSpiralValueOnRadius(valOnStartRadius, valOnEndAngle) {
    return (
      valOnStartRadius + _valOnRadiusStep * (valOnEndAngle / _valOnRoundRadian)
    );
  }
  function getSpiralRadius(startRadius, endRadian, radiusStep) {
    return (
      startRadius + radiusStep * ((_startRadian - endRadian) / (Math.PI * 2))
    );
  }
  function renderItem(params, api) {
    var children = [];
    var dataIdx = params.dataIndex;
    addShapes(
      params,
      api,
      children,
      api.value(0),
      api.value(1),
      _colors[dataIdx]
    );
    return {
      type: "group",
      children: children,
    };
  }
  function addShapes(
    params,
    api,
    children,
    valOnStartRadius,
    valOnEndRadian,
    color
  ) {
    var coords = api.coord([valOnStartRadius, valOnEndRadian]);
    var startRadius = coords[2];
    var endRadian = coords[3];
    var widthRadius = api.coord([_barWidthValue, 0])[2];
    addPolygon(params, children, widthRadius, startRadius, endRadian, color);
    addLabel(params, children, widthRadius, startRadius, endRadian, color);
  }
  function addPolygon(
    params,
    children,
    widthRadius,
    startRadius,
    endRadian,
    color
  ) {
    children.push({
      type: "polygon",
      shape: {
        points: makeShapePoints(params, widthRadius, startRadius, endRadian),
      },
      extra: {
        widthRadius: widthRadius,
        startRadius: startRadius,
        endRadian: endRadian,
        transition: ["widthRadius", "startRadius", "endRadian"],
      },
      style: {
        fill: color.fill,
      },
      during: function (apiDuring) {
        apiDuring.setShape(
          "points",
          makeShapePoints(
            params,
            apiDuring.getExtra("widthRadius"),
            apiDuring.getExtra("startRadius"),
            apiDuring.getExtra("endRadian")
          )
        );
      },
    });
  }
  function makeShapePoints(params, widthRadius, startRadius, endRadian) {
    var points = [];
    var radiusStep = getRadiusStepByWidth(widthRadius);
    // angleAxis.clockwise is true by default. So when rotate clickwisely, radian decreases.
    for (
      var iRadian = _startRadian, end = endRadian - _radianStep;
      iRadian > end;
      iRadian -= _radianStep
    ) {
      iRadian < endRadian && (iRadian = endRadian);
      var iRadius = getSpiralRadius(
        startRadius - widthRadius,
        iRadian,
        radiusStep
      );
      points.push(convertToPolarPoint(params, iRadius, iRadian));
    }
    for (
      var iRadian = endRadian;
      iRadian < _startRadian + _radianStep;
      iRadian += _radianStep
    ) {
      iRadian > _startRadian && (iRadian = _startRadian);
      var iRadius = getSpiralRadius(
        startRadius + widthRadius,
        iRadian,
        radiusStep
      );
      points.push(convertToPolarPoint(params, iRadius, iRadian));
    }
    return points;
  }
  function getRadiusStepByWidth(widthRadius) {
    return (widthRadius / _barWidthValue) * _valOnRadiusStep;
  }
  function addLabel(
    params,
    children,
    widthRadius,
    startRadius,
    endRadian,
    color
  ) {
    var point = makeLabelPosition(params, widthRadius, startRadius, endRadian);
    children.push({
      type: "text",
      x: point[0],
      y: point[1],
      transition: [],
      extra: {
        startRadius: startRadius,
        endRadian: endRadian,
        widthRadius: widthRadius,
        transition: ["startRadius", "endRadian", "widthRadius"],
      },
      style: {
        text: makeText(endRadian),
        fill: color.text,
        stroke: "#fff",
        lineWidth: 3,
        fontSize: 16,
        align: "center",
        verticalAlign: "middle",
        rich: {
          round: { fontSize: 24 },
          percent: { fontSize: 18 },
        },
      },
      z2: 50,
      during: function (apiDuring) {
        var endRadian = apiDuring.getExtra("endRadian");
        var point = makeLabelPosition(
          params,
          apiDuring.getExtra("widthRadius"),
          apiDuring.getExtra("startRadius"),
          endRadian
        );
        apiDuring.setTransform("x", point[0]).setTransform("y", point[1]);
        apiDuring.setStyle("text", makeText(endRadian));
      },
    });
    function makeText(endRadian) {
      var radian = _startRadian - endRadian;
      var PI2 = Math.PI * 2;
      var round = Math.floor(radian / PI2);
      var percent = (((radian / PI2) % 1) * 100).toFixed(1) + "%";
      return "Round {round|" + round + "}\n{percent|" + percent + "}";
    }
  }
  function makeLabelPosition(params, widthRadius, startRadius, endRadian) {
    var radiusStep = getRadiusStepByWidth(widthRadius);
    var iRadius = getSpiralRadius(startRadius, endRadian, radiusStep);
    return convertToPolarPoint(params, iRadius, endRadian - 10 / iRadius);
  }
  function convertToPolarPoint(renderItemParams, radius, radian) {
    return [
      Math.cos(radian) * radius + renderItemParams.coordSys.cx,
      -Math.sin(radian) * radius + renderItemParams.coordSys.cy,
    ];
  }
  option = {
    animationDuration: _animationDuration,
    animationDurationUpdate: _animationDurationUpdate,
    animationEasingUpdate: _animationEasingUpdate,
    dataset: {
      source: _datasourceList[_currentDataIndex],
    },
    tooltip: {},
    angleAxis: {
      type: "value",
      splitArea: { show: true },
      axisLabel: {
        formatter: function (val) {
          return _radianLabels[val];
        },
        color: "rgba(0,0,0,0.2)",
      },
      axisLine: { lineStyle: { color: "rgba(0,0,0,0.2)" } },
      min: 0,
      max: _valOnRoundRadian,
    },
    radiusAxis: {
      type: "value",
      interval: 1,
      splitLine: { show: false },
      axisLabel: {
        color: "rgba(0,0,0,0.6)",
        formatter: function (value) {
          return _barNamesByOrdinal[value] || "";
        },
      },
      axisTick: { show: false },
      axisLine: { lineStyle: { color: "rgba(0,0,0,0.2)" } },
      min: 0,
      max: getMaxRadius(),
    },
    polar: {},
    series: [
      {
        type: "custom",
        coordinateSystem: "polar",
        renderItem: renderItem,
      },
    ],
  };
  function next() {
    ++_currentDataIndex;
    myChart.setOption({
      dataset: {
        source: _datasourceList[_currentDataIndex],
      },
      radiusAxis: {
        max: getMaxRadius(),
      },
    });
    if (_currentDataIndex < _datasourceList.length - 1) {
      setTimeout(next, _animationDurationUpdate);
    }
  }
  setTimeout(next, 1000);

  option && myChart.setOption(option);
};
const showIB2_2 = () => {
  var chartDom = document.getElementById("Index-Box-2-2");
  var myChart = echarts.init(chartDom);
  var option;

  var data = [];
  // Parametric curve
  for (var t = 0; t < 25; t += 0.001) {
    var x = (1 + 0.25 * Math.cos(75 * t)) * Math.cos(t);
    var y = (1 + 0.25 * Math.cos(75 * t)) * Math.sin(t);
    var z = t + 2.0 * Math.sin(75 * t);
    data.push([x, y, z]);
  }
  console.log(data.length);
  option = {
    tooltip: {},
    backgroundColor: "#fff",
    visualMap: {
      show: false,
      dimension: 2,
      min: 0,
      max: 30,
      inRange: {
        color: [
          "#313695",
          "#4575b4",
          "#74add1",
          "#abd9e9",
          "#e0f3f8",
          "#ffffbf",
          "#fee090",
          "#fdae61",
          "#f46d43",
          "#d73027",
          "#a50026",
        ],
      },
    },
    xAxis3D: {
      type: "value",
    },
    yAxis3D: {
      type: "value",
    },
    zAxis3D: {
      type: "value",
    },
    grid3D: {
      viewControl: {
        projection: "orthographic",
      },
    },
    series: [
      {
        type: "line3D",
        data: data,
        lineStyle: {
          width: 4,
        },
      },
    ],
  };

  option && myChart.setOption(option);
};
</script>

<style lang="css">
.Index-Col {
  background-color: white;
  height: 100%;
  width: calc(50% - 5px);
  border-radius: 10px;
}
.Index-Row-1 {
  margin-bottom: 10px;
}
#Index-Box-1-1,
#Index-Box-2-1 {
  margin-right: 10px;
}
#IndexForm {
  text-align: center;
  height: 100%;
}
@media screen and (max-width: 500px) {
  .Index-Row {
    height: 100vh !important;
  }
  .Index-Col {
    width: 100%;
    height: calc(50% - 15px);
    margin: 10px;
    padding-left: 30px;
  }
}
</style>
