<template>
  <div class="course_page">

    <b-container fluid class="content">
      <b-row align-h="center">
        <b-col cols="1" class="titlePosition">
          <img alt="NUSMods Logo" height="65" width="65" src="../assets/faculty.png" />
        </b-col>
        <b-col cols="2" class="titlePosition">
              <div class="moduleTitle">Faculty</div> <!-- Course or Faculty?-->
        </b-col>
      </b-row>

      <b-row align-h="center" class="description">
        <b-col cols="9">Discover modules other students from your (or any other) course are taking.<br/>Know what are the popular modules your seniors completed, and plan to take them together with your friends.
        </b-col>
      </b-row>

      </br></br></br>
      <!-- Everything above here should be able to be reused, make sure to close the container -->

      <b-row align-h="center">

        <b-col cols="3">
          <b-row align-h="center">
            <div class="filterHeader">Faculty:</div>
          </b-row>
          <b-row align-h="center">
            <b-col cols="10"><b-form-select v-model="selectedFaculty" :options="facultyOptions" size="sm"/></b-col>
          </b-row>
        </b-col>

        <b-col cols="3">
          <b-row align-h="center">
            <div class="filterHeader">Major:</div>
          </b-row>
          <b-row align-h="center">
            <b-col cols="10">
              <b-form-select v-model="selectedMajor" size="sm">
                <option :value="null">Please select an option</option>
                <optgroup label="Computing">
                  <option :value="8">Business Analytics</option>
                  <option :value="9">Computer Science</option>
                  <option :value="10">Computer Engineering</option>
                  <option :value="11">Information Security</option>
                  <option :value="12">Information Systems</option>
                </optgroup>
              </b-form-select>
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="3">
          <b-row align-h="center">
            <div class="filterHeader">Year:</div>
          </b-row>
          <b-row align-h="center">
            <b-col cols="10"><b-form-select v-model="selectedYear" :options="yearOptions" size="sm"/></b-col>
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
  import {module_enrolment} from '../firebase';
  import DataTable from "@/components/DataTable.vue";

  import { FormSelect } from 'bootstrap-vue/es/components/form-select'
  import { Popover } from 'bootstrap-vue/es/directives/popover' //need to import this for tooltip

  export default {
    name: "course",
    data() {
      return {
        items: [],
        selected: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ],
        facultyOptions: [
          { value: null, text: 'Please select an option' },
          { value: '1', text: 'Arts and Social Sciences' },
          { value: '2', text: 'Business' },
          { value: '3', text: 'Computing' },
          { value: '4', text: 'Engineering' },
          { value: '5', text: 'Science',}
        ],
        selectedFaculty: null,
        majorOptions: [
          { value: null, text: 'Please select an option' },
          { value: '1', text: 'Year 1' },
          { value: '2', text: 'Year 2' },
          { value: '3', text: 'Year 3' },
          { value: '4', text: 'Year 4' },
          { value: '5', text: 'Others' },
          { value: '1', text: 'Year 1' },
          { value: '2', text: 'Year 2' },
          { value: '3', text: 'Year 3' },
          { value: '4', text: 'Year 4' },
          { value: '5', text: 'Others' },
          { value: '1', text: 'Year 1' },
          { value: '2', text: 'Year 2' },
          { value: '3', text: 'Year 3' },
          { value: '4', text: 'Year 4' },
          { value: '5', text: 'Others' },
          { value: '1', text: 'Year 1' },
          { value: '2', text: 'Year 2' },
          { value: '3', text: 'Year 3' },
          { value: '4', text: 'Year 4' },
          { value: '5', text: 'Others' }
        ],
        selectedMajor: null,
        yearOptions: [
          { value: null, text: 'Please select an option' },
          { value: '1', text: 'Year 1' },
          { value: '2', text: 'Year 2' },
          { value: '3', text: 'Year 3' },
          { value: '4', text: 'Year 4' },
          { value: '5', text: 'Others' }
        ],
        selectedYear: null,
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
