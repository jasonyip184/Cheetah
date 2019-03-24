<template>
  <div class="home_page">
    <img alt="Vue logo" src="../assets/nusmainlogo.jpg" height=300px/>
    <h1>Welcome to NUS Module Demographics</h1>
    <br/>

    <!-- Use this whole chunk for the cards and module input field -->
    <b-container fluid class="content">
      <br/><br/>
      <b-row align-h="center" height="300px">
        <b-col cols="4">
          <b-input-group>

            <b-form-input
              id="inputModuleCode"
              v-model="code"
              trim
              type="text"
              :state="checkModuleCode"
              aria-describedby="inputLiveHelp inputLiveFeedback"
              placeholder="Enter Module Code (e.g. ACC1002)"
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

          <!-- Can be removed if unnecessary -->
          <b-form-text id="inputLiveHelp">
              Please do not enter the module name together with the module code
          </b-form-text>

        </b-col>
      </b-row>

      <br/><br/><br/>

      <b-row align-h="center">

        <b-col cols="4">
          <b-card no-body>
            <b-row no-gutters>
              <b-col md="4">
                <b-card-img src="https://www.nicholaswan.me/images/cheetah/computing.png" max-width="100%" height="100%" class="rounded-0" />
              </b-col>
              <b-col md="8">
                <b-card-body>
                  <router-link :to="{ name: 'course'}">
                    <div class="cardTitle">Faculty</div>
                  </router-link>
                  <b-card-text>
                    <p class="text-justify">
                      Find out which year you should be clearing certain modules based on what your seniors did
                    </p>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>

        <b-col cols="4">
          <b-card no-body>
            <b-row no-gutters>
              <b-col md="4">
                <b-card-img src="https://www.nicholaswan.me/images/cheetah/arts.png" max-width="100%" height="100%"class="rounded-0" />
              </b-col>
              <b-col md="8">
                <b-card-body>
                  <router-link :to="{ name: 'modtype'}">
                    <div class="cardTitle">Module Type</div>
                  </router-link>
                  <b-card-text>
                    <p class="text-justify">
                      Find out which are popular GE modules to take based on your ideal workload requirements
                    </p>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>

        <b-col cols="4">
          <b-card no-body>
            <b-row no-gutters>
              <b-col md="4">
                <b-card-img src="https://www.nicholaswan.me/images/cheetah/industry.png" max-width="100%" height="100%" auto class="rounded-0" />
              </b-col>
              <b-col md="8">
                <b-card-body>
                  <router-link :to="{ name: 'industry'}">
                    <div class="cardTitle">Industry</div>
                  </router-link>
                  <b-card-text>
                    <p class="text-justify">
                      Find out which modules will teach you useful knowledge and skills required to work in an industry
                    </p>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
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
      toUpperCase(text) {
        return text.toUpperCase();
      },
    },
    computed: {
      checkModuleCode() {
        if (this.code.length == 0) {
          return 'null'
        }
        else {
          let mod = this.code.toUpperCase()
          if (this.modulelist.includes(mod)){ //this.code
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

.cardTitle {
  color: #424242;
  font-weight: bold; /**bold or "200"**/
  font-size: 20px;
  margin-top: -10px;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;
  /**
  width: 100%;
  text-align: center;
  margin-top: 0px;
  padding-bottom: 0px;
  text-transform: uppercase;
  margin: 10px auto 10px;**/
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
