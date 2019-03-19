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
    name: 'major-chart',
    props: {
      code: String,
    },
    data () {
        return {
            "renderAt": "chart-container",
            "width": "100%",
            "height": "360",
            "dataFormat": "json",
            "type": "pie2d",
            "datasource": {
                "chart": {
                    "caption": "Faculty / Major Segmentation",
                    "captionPadding": "0",
                    "chartTopMargin": "16",
                    "showpercentvalues": "1",
                    "labelSepChar": "<br />",
                    //"palette" : "1",
                    "showLegend": "1",
                    "legendItemFontSize" : "12",
                    "theme": "fusion",
                    "bgColor": "#FAF8EA",
                    "bgAlpha": "40",
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
            "label": "Computer Science",
            "value": "15123"
        }, {
            "label": "Architecture",
            "value": "14233"
        }, {
            "label": "Nursing",
            "value": "25507"
        }, {
            "label": "Economics",
            "value": "14233"
        }, {
            "label": "Accounting",
            "value": "25507"
        }, {
            "label": "Chemical Engineering",
            "value": "14233"
        }, {
            "label": "Statistics",
            "value": "25507"
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
