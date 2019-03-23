<template>
  <div class="about_page">

    <b-container fluid class="content">
      <b-row align-h="center">
        <b-col cols="3" class="titlePosition">
              <div class="header">About</div>
        </b-col>
      </b-row>

      <br/>

      <b-row align-h="center" class="description">
        <b-col cols="9">
          <p>NUS Module Demographics is a web application designed to be complementary
                      to existing module planners such as NUSMods and NUSTimetable Builder.
                      We intend for this to app to be fit in together with NUS' official timetable builder.
                      Feedback and suggestions on improvements to the app are more than welcome!</p>
        </b-col>
      </b-row>
    </b-container>

    <br/><br/><br/>

    <Footer/>
  </div>
</template>

<script>
  import Footer from "@/components/Footer.vue";
  export default {
    name: "batch",
    components: {
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

.header {
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
