<template>
  <div class="modtype">
    <h1>Module Type Page</h1>
    <DataTable/>
    <Footer/>
  </div>
</template>

<script>
  import Footer from "@/components/Footer.vue";
  import DataTable from "@/components/DataTable.vue";
  export default {
    name: "modtype",
    components: {
      DataTable,
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
