

<script>
//Have to import json data or wherever is our individual module data source
//e.g. import json_data from './indiv-mod-data.json'

import Vue from 'vue'
import HighchartsVue from 'highcharts-vue'
import jsondata from '@/data/module_data.json';

Vue.use(HighchartsVue);


export default {
  name: 'Overview',
  props: {
    code: String,
    breakdown: Array,
    seriesa: Array,
  },
  data () {
    return {
      code: this.code,
      breakdown: this.breakdown,
      seriesa: this.seriesa,
      breakdownData: [['Assignments', 90],['Class Participation', 100],['Project Work', 30],['Exams', 40]],//this.breakdown,
      breakdownF: [{ y: 40, name: "Point2"},{ y: 30, name: "Point2"},{ y: 10, name: "Point2"}],
      breakdownColors: ['#F0E4C9', '#EACEC2', '#C6DBB9', '#ACBED8'],
      chartOptions: {
        chart: {type: 'pie',
                height: '60%',
        },
        tooltip: {pointFormat: '<b>{point.percentage:.0f}%</b>'},
        plotOptions: {
              pie: {dataLabels: {enabled: true,
                                 distance: -30,
                                 style: {fontSize: '11px',
                                         fontWeight: 'bold',
                                         color: '#424242',
                                         textOutline: 'none',
                                         crop: false,
                                         overflow: "allow",
                                       }
                                },
                    startAngle: -90,
                    endAngle: 90,
                    innerSize: '40%',
                    center: ['50%', '80%'],
                    size: '150%'
              }
        },
        title: {text: undefined},
        legend: {enabled: true,
                 verticalAlign: "top",
                 align: "center",
        },
        series: this.seriea,
        //series: null,
        //series: [{
        //      data: [{ y: 40, name: "Point2"},{ y: 30, name: "Point2"},{ y: 10, name: "Point2"}],// this.breakdownData,//[['Assignments', 20],['Class Participation', 10],['Project Work', 30],['Exams', 40]],//[['Assignments', 20],['Class Participation', 10],['Project Work', 30],['Exams', 40]],//this.breakdownData,
        //      colors: ['#F0E4C9', '#EACEC2', '#C6DBB9', '#ACBED8']
        //}]

      },
    }
  },
  mounted() {
    //this.getData()
    this.fillData()
  },
  methods: {
    fillData() {
      this.chartOptions.series = this.putData()
      //this.chartOptions.series.data = this.breakdown
      //this.chartOptions.series.colors = this.breakdownColors
    },

    putData() {
      //HAVE to replace 0 values with null when preparing json to avoid plotting 0 values, try changing to 0 or null
      //Replace below line with query result using module code prop, FIT THIS FORMAT list of [String, Int] lists)
      //this.breakdownData = this.moduledata[this.code]['Breakdown']//[['Assignments', 20],['Class Participation', 10],['Project Work', 30],['Exams', 40]] //this.moduledata[this.code]['Breakdown']//
      return {
            data: this.breakdown,//[['Assignments', 20],['Class Participation', 10],['Project Work', 30],['Exams', 40]],//this.breakdownData,
            colors: this.breakdownColors
      }
    },
  }
}
</script>

<template>

  <div class="box">
    <div class="chartContainer">
      {{breakdown}}
      <!-- {{seriesa}} -->
      <highcharts class="chart" :options="chartOptions"></highcharts>
    </div>
  </div>

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#box {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

.box {
    display: grid;
    grid-template-columns: 100%; /**repeat(2, 50%); repeat(2, 50%);**/
    grid-template-rows: 100%; /**(50%, 50%);**/
    grid-template-areas:
      "left"; /**"left right";**/
    height: 100%;
  }

.Title {
    color: #003d7c;
    /**font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;**/
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-weight: "bold"; /**330;**/
    font-size: 26px;
    /**text-transform: uppercase;**/
    margin: 30px auto 10px;
}

.paragraph{
    color: #424242;
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-weight: "200"; /**330;**/
    font-size: 12px;
    text-align: "right";
    /**text-transform: uppercase;**/
    margin: 10px auto 10px;
}

.lessonCat{
  color: #EE5230;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 10;
  font-size: 14px;
}

.lessonValue{
  /**color: #424242;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 10;**/
  font-weight: "bold";
  font-size: 13px;
}

.lessonCatEmpty{
  color: #FFFFFF;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 10;
  font-size: 14px;
}

.lessonValueEmpty{
  /**color: #424242;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 10;**/
  color: #FFFFFF;
  font-weight: "bold";
  font-size: 13px;
}

.button {
  margin-top: 10px;
}

</style>
