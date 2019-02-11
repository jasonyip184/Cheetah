<template>
  <div class="course_page">
    <h1>Course Page</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Module Code</th>
          <th>Final Grade</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="item of items" :key="item['.key']">
            <td>{{ item.module_code }}</td>
            <td>{{ item.final_grade }}</td>
          </tr>
      </tbody>
    </table>
    <br/><br/><br/>
    <Footer/>
  </div>
</template>

<script>
  import Footer from "@/components/Footer.vue";
  import {module_enrolment} from '../firebase';

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
