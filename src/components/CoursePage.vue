<template>
  <div class="course_page">
    <b-container fluid class="content">
      <b-row align-h="center">
        <b-col cols="12" class="titlePosition">
              <div class="moduleTitle"><font-awesome-icon icon="school" class="shiftLeft"/> Course</div>
        </b-col>
      </b-row>

      <b-row align-h="center" class="description">
        <b-col cols="9">
          Discover modules other students from your (or any other) course are taking.<br/>
          Know what are the popular modules your seniors completed, and plan to take them together with your friends.
        </b-col>
      </b-row>
      </br></br></br>
      <CourseDataTable/>
      <br/><br/><br/>
    </b-container>
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
