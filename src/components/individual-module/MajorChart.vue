<script>

import jsondata from '@/data/module_data.json';


export default {
    name: 'major-chart',
    props: {
      code: String,
      updatedmajor: Boolean,
    },
    data () {
        return {
            code: this.code,
            moduledata: jsondata,
            renderAt: "chart-container",
            width: "100%",
            height: "360",
            dataFormat: "json",
            type: "pie2d",
            datasource: {
                "chart": {
                    "caption": "Faculty / Major Segmentation",
                    "captionPadding": "0",
                    "chartTopMargin": "16",
                    "manageLabelOverflow": "1",
                    "labelSepChar": ", ", //"<br />",
                    "showpercentvalues": "1",
                    "plottooltext": "<b>$label</b>, $value",
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
        this.datasource.data = this.moduledata[this.code]['Faculty'];
      },
      refreshData() {
        this.fillData();
        this.$emit('update', true);
      }
    }
}
</script>

<template>
    <div id="app">
      <div id="chart-container">
        <b-button @click="refreshData" variant="light" size="sm" block v-show="!updatedmajor"><div class="buttontext">Update Chart</div></b-button>
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


<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.buttontext {
  color: #FF5138; /**#007BFF;**/
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 500; /**330;**/
  font-size: 16px;
  margin: auto;
  padding-left: 3%;
  padding-right: 3%;
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
