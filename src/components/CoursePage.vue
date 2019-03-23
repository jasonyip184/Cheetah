<template>
  <div class="course_page">
    <h1>Course Page</h1>
    <CourseDataTable/>
    <br/><br/><br/>
    <Footer/>
  </div>
</template>

<script>
  import Footer from "@/components/Footer.vue";
  import {module_enrolment} from '../firebase';
  import CourseDataTable from "@/components/CourseDataTable.vue";

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
      CourseDataTable,
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
