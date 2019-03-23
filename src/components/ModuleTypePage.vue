<template>
  <div class="modtype">

        <b-container fluid class="content">
          <b-row align-h="center">
            <b-col cols="1"></b-col>
            <b-col cols="1" class="titlePosition">
              <img alt="NUSMods Logo" height="65" width="65" src="../assets/type.png" />
            </b-col>
            <b-col cols="4" class="titlePosition">
                  <div class="moduleTitle">Module Type</div>
            </b-col>
          </b-row>

          <b-row align-h="center" class="description">
            <b-col cols="9">Discover modules based on their module types.</br>Find out what others chose for their Programme Electives, or/ and find out more about popular GE mods.
            </b-col>
          </b-row>

          </br></br></br>
          <!-- Everything above here should be able to be reused, make sure to close the container -->

          <b-row align-h="center">

            <b-col cols="3">
                <b-row align-h="center">
                    <div class="filterHeader">Faculty / Major:</div>
                </b-row>
                <b-row align-h="center">
                    <b-col cols="10">
                      <b-form-select v-model="selectedFaculty" size="sm">
                        <option :value="null">Please select an option</option>
                        <optgroup label="Arts and Social Sciences">
                          <option :value="1">Economics</option>
                          <option :value="2">English Literature</option>
                          <option :value="3">History</option>
                          <option :value="4">Japanese Studies</option>
                          <option :value="5">Political Science</option>
                        </optgroup>
                        <optgroup label="Business">
                          <option :value="6">Business Administration (Accountancy)</option>
                          <option :value="7">Business Administration</option>
                        </optgroup>
                        <optgroup label="Computing">
                          <option :value="8">Business Analytics</option>
                          <option :value="9">Computer Science</option>
                          <option :value="10">Computer Engineering</option>
                          <option :value="11">Information Security</option>
                          <option :value="12">Information Systems</option>
                        </optgroup>
                        <optgroup label="Engineering">
                          <option :value="13">Chemical Engineering</option>
                          <option :value="14">Electrical Engineering</option>
                          <option :value="15">Industrial and Systems Engineering</option>
                        </optgroup>
                        <optgroup label="Science">
                          <option :value="16">Applied Mathematics</option>
                          <option :value="17">Chemistry</option>
                          <option :value="18">Data Science and Analytics</option>
                          <option :value="19">Food Science and Technology</option>
                          <option :value="20">Life Sciences</option>
                          <option :value="21">Physics</option>
                        </optgroup>
                      </b-form-select>
                    </b-col>
                </b-row>
            </b-col>

            <b-col cols="3">
                <!-- tool tip example on an image is here can be set to click instead of hover, can also adjust position etc. -->
                <b-row align-h="center" class="text-justify">
                    <div class="filterHeader"><img v-b-popover.hover.topleft="categoryPopoverData" alt="Help" height="12" width="12" src="../assets/help.png" /> Category:</div>
                </b-row>
                <b-row align-h="center">
                    <b-col cols="10">
                      <b-form-select v-model="selectedType" size="sm">
                        <option :value="null">Please select an option</option>
                        <optgroup label="Core">
                          <option :value="1">Core Module</option>
                          <option :value="2">Programme Elective</option>
                        </optgroup>
                        <optgroup label="Unrestricted Electives">
                          <option :value="3">GE Modules</option>
                          <option :value="4">Language Modules</option>
                          <option :value="5">Others</option>
                        </optgroup>
                      </b-form-select>
                    </b-col>
                </b-row>
            </b-col>

            <b-col cols="3">
                <b-row align-h="center">
                    <div class="filterHeader">Workload:</div>
                </b-row>
                <b-row align-h="center">
                    <b-col cols="10"><b-form-select multiple v-model="selectedWorkload" :options="workloadOptions" size="sm"/></b-col>
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
  //need to import this for tooltip

  export default {
    name: "modtype",
    data() {
      return {
        items: [],
        facultyOptions: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ],
        selectedFaculty: null,
        typeOptions: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ],
        selectedType: null,
        workloadOptions: [
          { value: '1', text: 'Assignments' },
          { value: '2', text: 'Class Participation' },
          { value: '3', text: 'Project Work' },
          { value: '4', text: 'Exams' }
        ],
        selectedWorkload: null,
        //tool tip configuration
        categoryPopoverData: {
          title: 'Category Differences',
          content: 'Core Modules are compulsory modules (no choice) that have to be completed as part of a major’s requirements. Programme Electives refer to modules which students select (some) from a given basket of modules.'
        }
      }
    },
    components: {
      DataTable,
      Footer
    },
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
  margin-left: -50px;
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
