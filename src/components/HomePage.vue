<template>
  <div class="home_page">
    <img alt="Vue logo" src="../assets/nusmainlogo.jpg" height=300px/>
    <h1>Welcome to NUS Module Demographics</h1>
    <br/>

    <!-- Use this whole chunk for the module input field -->
    <b-container fluid class="content">
      <b-row align-h="center">
        <b-col cols="3">
          <b-input-group>

            <b-form-input
              id="inputModuleCode"
              v-model="code"
              trim
              type="text"
              :state="checkModuleCode"
              aria-describedby="inputLiveHelp inputLiveFeedback"
              placeholder="Enter Module Code"
            />
            <b-input-group-append>
              <router-link :to="{ name: 'module', params: { code } }">
                <b-button :disabled="isInvalidInput" variant="dark">Search</b-button>
              </router-link>
            </b-input-group-append>

            <!-- This will only be shown if the preceeding input has an invalid state -->
            <b-form-invalid-feedback id="inputLiveFeedback">
              Invalid Module Code
            </b-form-invalid-feedback>

          </b-input-group>
        </b-col>
      </b-row>
    </b-container>
    <!-- COPY till here, also copy data() parts and computed checkModuleCode() function -->

    <br/>
    <br/>
    <br/>

    <li>
      <b-form @submit="onSubmit">
        <b-form-group id="searchModule"
                      label="Search module information"
                      label-for="enteredModuleCode">
          <b-form-input id="enteredModuleCode"
                        type="text"
                        v-model="form.text"
                        required
                        placeholder="Enter module code" />
        </b-form-group>
        <b-button type="submit" variant="primary" @click="modalShow = !modalShow">Submit</b-button>
      </b-form>

      <b-modal v-model="modalShow">
        <h1>{{ this.form.text }}</h1>
      </b-modal>
    </li>

    <ul /><br />

    <b-card-group deck class="mb-3">
        <b-card bg-variant="secondary"
                text-variant="white"
                header="Course"
                class="text-center">
            <p class="card-text">Discover the modules students from your course are taking. Wouldn't it be great to know whether you're following the same path as your seniors? It's good to know that you are special sometimes too!</p>
            <b-button href="#/course" variant="primary">View course statistics</b-button>
        </b-card>
        <b-card bg-variant="danger"
                text-variant="white"
                header="Batch"
                class="text-center">
            <p class="card-text">Ever wondered what modules your batchmates across faculties are taking? Plan your GEMs or unresticted electives.</p>
            <b-button href="#/batch" variant="primary">View batch statistics</b-button>
        </b-card>
        <b-card bg-variant="success"
                text-variant="white"
                header="Industry"
                class="text-center">
            <p class="card-text">Wanna know what modules the alumni students have taken? We think it's best that you find out what modules your seniors have taken especially if they are in an industry you are interested in.</p>
            <b-button href="#/industry" variant="primary">View modules associated with industry</b-button>
        </b-card>
    </b-card-group>
    <br/><br/><br/>
    <Footer/>
  </div>
</template>

<script>
  import Footer from "@/components/Footer.vue";
  import jsondata from '@/data/module_data.json';

  export default {
    data() {
      return {
        modulelist: jsondata['modulelist'], //copy this
        isInvalidInput: true, //copy this
        code: '', //copy this
        form: {},
        modalShow: false
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
      },
    },
    computed: {
      checkModuleCode() {
        if (this.code.length == 0) {
          return 'null'
        }
        else {
          if (this.modulelist.includes(this.code)){
            this.isInvalidInput = false
            return true
          }
          else{
            this.isInvalidInput = true
            return false
          }
        }
      },
    },
    name: "home",
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
