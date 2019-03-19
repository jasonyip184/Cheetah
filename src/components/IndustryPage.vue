<template>
  <div class="industry_page">

        <b-container fluid class="content">
          <b-row align-h="center">
            <b-col cols="1" class="titlePosition">
              <img alt="NUSMods Logo" height="65" width="65" src="../assets/industry.png" />
            </b-col>
            <b-col cols="2" class="titlePosition">
                  <div class="moduleTitle">Industry</div>
            </b-col>
          </b-row>

          <b-row align-h="center" class="description">
            <b-col cols="9">Discover modules recently employed graduates took while they were studying.</br>This information can serve as a useful guideline of skills and knowledge that would be helpful for a certain industry.
            </b-col>
          </b-row>

          </br></br></br>
          <!-- Everything above here should be able to be reused, make sure to close the container -->

          <b-row align-h="center">

            <b-col cols="3">
              <!-- tool tip example on an image is here can be set to click instead of hover, can also adjust position etc. -->
              <b-row align-h="center">
                  <div class="filterHeader"><img v-b-popover.hover.topleft="industryPopoverData" alt="Help" height="12" width="12" src="../assets/help.png" /> Industry:</div>
              </b-row>
              <b-row align-h="center">
                  <b-col cols="10"><b-form-select v-model="selected" :options="options" size="sm"/></b-col>
              </b-row>
            </b-col>

          </b-row>

          </br></br></br>

          <b-row align-h="center">
            <DataTable/>
          </b-row>
        </b-container>

        <br/><br/><br/>
        <Footer/>
      </div>
</template>

<script>
  import Footer from "@/components/Footer.vue";
  import DataTable from "@/components/DataTable.vue";
  export default {
    name: "industry",
    data() {
      return {
        items: [],
        selected: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: '1', text: 'Healthcare' },
          { value: '2', text: 'Finance' },
          { value: '3', text: 'Transport' },
          { value: '4', text: 'Information Technology' },
          { value: '5', text: 'Agriculture' }
        ],
        //tool tip configuration
        industryPopoverData: {
          title: 'Industry Options Clarification',
          content: 'Options within this filter are based on the industry options provided in the most recent (i.e. last year\'s) GES survey. '
        }
      }
    },
    components: {
      DataTable,
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
  margin-top: -10px;
  padding-bottom: 0px;
}

.moduleTitle {
  color: #003d7c;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: "bold";
  font-size: 56px;
  width: 100%;
  text-align: center;
  margin-top: 5px;
  margin-left: -15px;
  padding-bottom: 0px;
  padding-left: 0px;
}

.description {
  color: #424242;
  font-size: 16px;
  width: 100%;
  text-align: center;
  margin-top: 25px;
  padding-bottom: 0px;
  padding-left: 0px;
}

.filterHeader {
  color: #0c69aa;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 369;
  font-size: 25px;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
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
