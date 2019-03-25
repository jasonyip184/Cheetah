<template>
  <div class="industry_page">
    <b-container fluid class="content">
      <b-row align-h="center">
        <b-col cols="12" class="titlePosition">
              <div class="moduleTitle"><font-awesome-icon icon="industry" class="shiftLeft"/> Industry</div>
        </b-col>
      </b-row>

      <b-row align-h="center" class="description">
        <b-col cols="9">
          Discover modules recently employed graduates took while they were studying.</br>
          This information can serve as a useful guideline of skills and knowledge that would be helpful for a certain industry.
        </b-col>
      </b-row>
      </br></br></br>
      <IndustryDataTable/>
      </br></br></br>
    </b-container>
    <Footer/>
  </div>
</template>

<script>
  import Footer from "@/components/Footer.vue";
  import IndustryDataTable from "@/components/IndustryDataTable.vue";
  export default {
    name: "industry",
    components: {
      IndustryDataTable,
      Footer
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.titlePosition {
  color: #003d7c;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: "bold";
  font-size: 56px;
  width: 100%;
  text-align: center;
  margin-top: 50px;
  padding-bottom: 0px;
}

.moduleTitle {
  color: #003d7c;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: "bold";
  font-size: 56px;
  width: 100%;
  text-align: center;
  margin-top: 0px;
  margin-left: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

.shiftLeft {
  padding-right: 15px;
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
