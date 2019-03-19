<template>
  <div class="about_page">
    <b-container fluid class="content">

      <b-row align-h="center">
        <b-col cols="12">
          <module-title v-bind:code="code" v-bind:name="name"></module-title>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="moduleInfo"> <!-- implied cols="4" as it is even-->
          <information v-bind:code="code" v-bind:description="description" v-bind:lessons="lessons"></information>
        </b-col>

        <b-col class="chartCol"> <!-- implied cols="4" as it is even-->
          <major-chart v-bind:code="code"></major-chart>
          <requirements-chart v-bind:code="code"></requirements-chart>
        </b-col>

        <b-col class="chartCol"> <!-- implied cols="4" as it is even-->
          <year-chart v-bind:code="code"></year-chart>
          <industry-chart v-bind:code="code"></industry-chart>
        </b-col>
      </b-row>
    </b-container>

    <b-row>
    </b-row>

    </br></br></br></br></br>
    <Footer/>
  </div>
</template>

<script>
  import Footer from "@/components/Footer.vue";
  import title from '@/components/individual-module/ModuleTitle.vue'
  import info from '@/components/individual-module/ModuleInformation.vue';
  import major from '@/components/individual-module/MajorChart.vue';
  import year from '@/components/individual-module/YearChart.vue';
  import req from '@/components/individual-module/RequirementsChart.vue';
  import ind from '@/components/individual-module/IndustryChart.vue';


  import Vue from 'vue'
  import HighchartsVue from 'highcharts-vue'
  import { Layout } from 'bootstrap-vue/es/components'
  import { Button } from 'bootstrap-vue/es/components/button'

  Vue.use(HighchartsVue);
  Vue.use(Layout);

  export default {
    name: "batch",
    props: {
      code: String,
      name: String,
      description: String,
      lessons: Array,
    },
    components: {
      'module-title': title,
      'information': info,
      'major-chart': major,
      'year-chart': year,
      'requirements-chart': req,
      'industry-chart': ind,
      Footer
    },
    mounted() {
      this.getModuleInfo();
    },
    methods: {
      getModuleInfo() {
        // hardcoded for now, will be commented out as it will be passed as a prop from landing page or table,
        this.code = "CS1010S";
        // this is where we will query the imported (json) data with the module code prop for the module name, description, lessons, any others.
        //Replace below lines with query results, FIT THIS FORMAT (string, string, list/array respectively
        this.name = "Programming Methodology";
        this.description = "This module introduces the fundamental concepts of problem solving by computing and programming using an imperative programming language. It is the first and foremost introductory course to computing and is equivalent to CS1010 and CS1010E Programming Methodology. Topics covered include problem solving by computing, writing pseudo-codes, basic problem formulation and problem solving, program development, coding, testing and debugging, fundamental programming constructs (variables, types, expressions, assignments, functions, control structures, etc.), fundamental data structures: arrays, strings and structures, simple file processing, and basic recursion. This module is appropriate for FoS students."
        this.lessons = [1,2,1,0,0,0,1,1,1,1,1,1,0,0,0];
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#about_page {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.moduleInfo{
  text-align: left;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif; /**not working**/
}

.chartCol {
  width: 100%;
  margin-top: -20px;
}

h3 {
  margin: 40px 0 0;
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
