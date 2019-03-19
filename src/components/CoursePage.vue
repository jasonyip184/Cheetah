<template>
  <div class="course_page">
    <h1>Course Page</h1>
    <DataTable/>
    <br/><br/><br/>
    <Footer/>
  </div>
</template>

<script>
  import Footer from "@/components/Footer.vue";
  import {module_enrolment} from '../firebase';
  import DataTable from "@/components/DataTable.vue";

  export default {
    name: "course",
    data() {
      return {
        items: []
      }
    },
    firebase: {
      items: module_enrolment
    },
    components: {
      DataTable,
      Footer
    },
  };
</script>

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
