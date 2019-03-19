

<script>
//Have to import json data or wherever is our individual module data source
//e.g. import json_data from './indiv-mod-data.json'

import Vue from 'vue'
import HighchartsVue from 'highcharts-vue'
import { Layout } from 'bootstrap-vue/es/components'
import { Button } from 'bootstrap-vue/es/components/button'
import breakdown from '@/components/individual-module/ModuleBreakdown.vue'

Vue.use(HighchartsVue);
Vue.use(Layout);


export default {
  name: 'Overview',
  props: {
    code: String,
    description: String,
    lessons: Array
  },
  components: {
    'module-breakdown': breakdown,
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
}
</script>

<template>

  <div class="box">
    <div class="left">
      <h1 class="Title">Overview</h1>
      <body class="paragraph">
        <p class="text-justify">
          {{description}}
        </p>
      </body>

      <h1 class="Title">Lessons</h1>

      <b-container fluid class="lessons-table">
        <b-row align-h="left">

          <b-col cols="6">

            <b-row align-h="left">
            <body class="lessonCat">Lecture: </br></body>
            </b-row>
            <b-row align-h="left">
              <div v-if="lessons[0] == 0">
                <body class="lessonValue">-</body>
              </div>
              <div v-else>
                <body class="lessonValue">{{lessons[0]}} * {{lessons[1]}} hr session(s) / {{lessons[2]}} week(s)</body>
              </div>
            </b-row>

            <b-row align-h="left">
            <body class="lessonCat">Sectional:</body>
            </b-row>
            <b-row align-h="left">
              <div v-if="lessons[3] == 0">
                <body class="lessonValue">-</body>
              </div>
              <div v-else>
                <body class="lessonValue">{{lessons[3]}} * {{lessons[4]}} hr session(s) / {{lessons[5]}} week(s)</body>
              </div>
            </b-row>


            <b-row align-h="left">
            <body class="lessonCat">Recitation:</body>
            </b-row>
            <b-row align-h="left">
              <div v-if="lessons[6] == 0">
                <body class="lessonValue">-</body>
              </div>
              <div v-else>
                <body class="lessonValue">{{lessons[6]}} * {{lessons[7]}} hr session(s) / {{lessons[8]}} week(s)</body>
              </div>
            </b-row>

          </b-col>

          <b-col cols="6">

            <b-row align-h="left">
            <body class="lessonCat">Tutorial:</body>
            </b-row>
            <b-row align-h="left">
              <div v-if="lessons[9] == 0">
                <body class="lessonValue">-</body>
              </div>
              <div v-else>
                <body class="lessonValue">{{lessons[9]}} * {{lessons[10]}} hr session(s) / {{lessons[11]}} week(s)</body>
              </div>
            </b-row>

            <b-row align-h="left">
            <body class="lessonCat">Lab:</body>
            </b-row>
            <b-row align-h="left">
              <div v-if="lessons[12] == 0">
                <body class="lessonValue">-</body>
              </div>
              <div v-else>
                <body class="lessonValue">{{lessons[12]}} * {{lessons[13]}} hr session(s) / {{lessons[14]}} week(s)</body>
              </div>
            </b-row>

            <b-row align-h="left">
            <body class="lessonCatEmpty">_</body>
            </b-row>
            <b-row align-h="left">
            <body class="lessonValueEmpty">_</body>
            </b-row>

          </b-col>

        </b-row>

        <b-row align-h="end" class="button">
          <b-button size="sm" variant="outline-primary" :href="'https://nusmods.com/modules/' + code">Add to timetable in NUSMods</b-button>
        </b-row>

      </b-container>


      <h1 class="Title">Assessment Breakdown</h1>
      <div class="chartContainer">
        <module-breakdown v-bind:code="code"></module-breakdown>
      </div>
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
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    grid-template-areas:
      "left";
    height: 100%;
  }

.Title {
    color: #003d7c;
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-weight: "bold"; /**330;**/
    font-size: 26px;
    margin: 30px auto 10px;
}

.paragraph{
    color: #424242;
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-weight: "200"; /**330;**/
    font-size: 12px;
    text-align: "right";
    margin: 10px auto 10px;
}

.lessonCat{
  color: #EE5230;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 10;
  font-size: 14px;
}

.lessonValue{
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
  color: #FFFFFF;
  font-weight: "bold";
  font-size: 13px;
}

.button {
  margin-top: 7px;
  /**margin-left: 50px;**/
}
</style>
