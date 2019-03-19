

<script>
//Have to import json data or wherever is our individual module data source
//e.g. import json_data from './indiv-mod-data.json'

import Vue from 'vue'
import HighchartsVue from 'highcharts-vue'

Vue.use(HighchartsVue);


export default {
  name: 'Overview',
  props: {
    code: String,
    description: String,
    lessons: Array
  },
  data () {
    return {
      "breakdownData": null,
      "breakdownColors": ['#F0E4C9', '#EACEC2', '#C6DBB9', '#ACBED8'],
      "chartOptions": {
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
        series: null,

      },
    }
  },
  mounted() {
    this.fillData()
  },
  methods: {
    fillData() {
      this.chartOptions.series = this.getData()
    },

    getData() {
      //HAVE to replace 0 values with null when preparing json to avoid plotting 0 values, try changing to 0 or null
      //Replace below line with query result using module code prop, FIT THIS FORMAT list of [String, Int] lists)
      this.breakdownData = [['Assignments', 20],['Class Participation', 10],['Project Work', 30],['Exams', 40]]
      return {
            data: this.breakdownData,
            colors: this.breakdownColors
      }
    },
  }
}
</script>

<template>

  <div class="box">
    <div class="chartContainer">
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
