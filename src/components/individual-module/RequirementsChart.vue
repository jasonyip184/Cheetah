<script>

import jsondata from '@/data/module_data.json';


export default {
    name: 'req-chart',
    props: {
      code: String,
      updatedreq: Boolean,
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
                    "caption": "Fulfilled Requirements",
                    "subCaption": "Core: Module was completed as part of a major's requirements <br /> Unrestricted Elective: Completed as a non-Core module",
                    "captionPadding": "0",
                    "chartTopMargin": "16",
                    "showpercentvalues": "1",
                    "showLegend": "0",
                    "labelSepChar": "<br />",
                    "plottooltext": "<b>$label</b>, $value",
                    "theme": "fusion",
                    "bgColor": "#FAF8EA",
                    "bgAlpha": "40",
                    "startingAngle": "360",
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
        this.datasource.data = this.moduledata[this.code]['Fulfilled Requirements'];
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
        <b-button @click="refreshData" variant="light" size="sm" block v-show="!updatedreq"><div class="buttontext">Update Chart</div></b-button>
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
