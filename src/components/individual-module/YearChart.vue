<script>
//Have to import json data or wherever is our individual module data source
//e.g. import json_data from './indiv-mod-data.json'

import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import Layout from 'bootstrap-vue/es/components/layout';

Vue.use(VueFusionCharts, FusionCharts, Column2D, FusionTheme);
Vue.use(Layout);

export default {
    name: 'year-chart',
    props: {
      code: String,
    },
    data () {
        return {
            "renderAt": "chart-container",
            "width": "100%",
            "height": "360",
            "dataFormat": "json",
            "type": "column2d", //"pie2d",
            "datasource": {
                "chart": {
                    "caption": "Year of Study",
                    "subCaption": "Others: Exchange Students, Non-Undergrads, etc.",
                    "captionPadding": "16",//0 for pie chart
                    "chartTopMargin": "16",
                    "showPercentValues": "1",
                    "showLegend": "0",
                    "theme": "fusion",
                    "bgColor": "#FAF8EA",
                    "bgAlpha": "40",
                    "xaxisname": "Year",
                    "yaxisname": "Number of Students",
                },
                "data": null,
            },
        }
    },
    mounted() {
      this.fillData();
    },
    methods: {
      fillData() {
        // this is where we will query the imported (json) data with the module code prop for the appropriate data
        //Replace below line with query result using module code prop, FIT THIS FORMAT (list of jsons)
        this.datasource.data = [{
            "label": "Year 1",
            "value": "1523"
        }, {
            "label": "Year 2",
            "value": "1433"
        }, {
            "label": "Year 3",
            "value": "2507"
        }, {
            "label": "Year 4",
            "value": "1433"
        }, {
            "label": "Others",
            "value": "257"
        }];
      },
    }
}
</script>

<template>
    <div id="app">
      <div id="chart-container">
        <fusioncharts
          :type="type"
          :width="width"
          :height="height"
          :dataformat="dataformat"
          :datasource="datasource"
          >
        </fusioncharts>
      </div>
    </div>
</template>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
