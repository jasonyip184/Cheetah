<template>
  <div class="industry_page">
    <h1>Industry Page</h1>
    <IndustryDataTable/>
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
