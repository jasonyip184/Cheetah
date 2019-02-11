<template>
  <div class="about_page">
    <p>NUS Module Demographics is a web application designed to be complementary
                to existing module planners such as NUSMods and NUSTimetable Builder.
                We intend for this to app to be fit in together with NUS' official timetable builder.
                Feedback and suggestions on improvements to the app are more than welcome!</p>
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
