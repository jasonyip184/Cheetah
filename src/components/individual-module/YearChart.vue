<script>

import jsondata from '@/data/module_data.json';


export default {
    name: 'year-chart',
    props: {
      code: String,
      updatedyear: Boolean,
    },
    data () {
        return {
            //code: this.code,
            code: this.$store.state.code,
            moduledata: jsondata,
            renderAt: "chart-container",
            width: "100%",
            height: "360",
            dataFormat: "json",
            type: "column2d", //"pie2d",
            datasource: {
                "chart": {
                    "caption": "Year of Study",
                    "subCaption": "Others: Exchange Students, Non-Undergrads, etc.",
                    "captionPadding": "16",//0 for pie chart
                    "chartTopMargin": "16",
                    "showPercentValues": "1",
                    "showLegend": "0",
                    "showpercentvalues": "1",
                    "plottooltext": "<b>$label</b>, $value",
                    "theme": "fusion",
                    "bgColor": "#FAF8EA",
                    "bgAlpha": "40",
                    "xaxisname": "Year",
                    "yaxisname": "Number of Students",
                },
                "data": null,
                //"data": this.yeardata,
            },
        }
    },
    mounted() {
      this.fillData();
      eventBus.$on('mod-refreshed', ({code}) => {
        fillData()
      })
      //this.$root.$on('refreshing', module => {
      //  this.fillData();
    //});
    },
    methods: {
      fillData() {
        this.datasource.data = this.moduledata[this.code]['Year'];
      },
      refreshData() {
        this.fillData();
        this.$emit('update', true);
        //this.updatedcharts = true
        //this.$forceUpdate();
      }
    },
}
</script>

<template>
    <div id="app">
      <div id="chart-container">
        <b-button @click="refreshData" variant="light" size="sm" block v-show="!updatedyear"><div class="buttontext">Update Chart</div></b-button>
        <!-- <button @click="refreshData" variant="success" v-show="!updatedyear">Update Chart</button> -->
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
