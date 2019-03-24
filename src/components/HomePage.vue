<template>
  <div class="home_page">
    <div v-html="legacySystemHTML"></div>

    </br>
    <!-- Use this whole chunk for the cards and module input field -->
    <b-container fluid class="content">
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


      <b-row align-h="center" height="300px">

        <b-col cols="12" class="categoryHeader">Search Individual Modules:</b-col>
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
                <b-button :disabled="isInvalidInput" variant="dark" @click="updateCode">Search</b-button>
                <!--<button :disabled="isInvalidInput" @click="updateCode">Search</button>-->
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

      <br/><br/>



    </b-container>
    <!-- COPY till here, also copy data() parts and computed checkModuleCode() function -->

    <!-- This is Nicholas old input form and cards
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
            <b-button href="#/modtype" variant="primary">View batch statistics</b-button>
        </b-card>
        <b-card bg-variant="success"
                text-variant="white"
                header="Industry"
                class="text-center">
            <p class="card-text">Wanna know what modules the alumni students have taken? We think it's best that you find out what modules your seniors have taken especially if they are in an industry you are interested in.</p>
            <b-button href="#/industry" variant="primary">View modules associated with industry</b-button>
        </b-card>
    </b-card-group>
    -->

    <br/><br/><br/>
    <Footer/>

    <v-tour name="myTour" :steps="steps"></v-tour>

  </div>
</template>

<script>
  import Footer from "@/components/Footer.vue";
  import jsondata from '@/data/module_data.json';
  import { mapMutations } from 'vuex'  // Add mapMutations



  export default {
    data() {
      return {
        modulelist: jsondata['modulelist'], //for my input field
        isInvalidInput: true, //for my input field.
        code: '', //for my input field
        //form: {}, Used only for Nicholas's old input
        //modalShow: false, Used only for Nicholas's old input
        // For tour
        steps: [
          {
            target: '#inputModuleCode',
            content: `Use this as a tour`
          },
          //{
          //  target: '.minibox',
          //  content: 'Bring directly to elements with ids'
          //},
        ],
        legacySystemHTML: `
        <section class="banner full">
				<article class="slide">
					<img src="https://www.nicholaswan.me/images/cheetah/computing.png" alt="" />
					<div class="inner">
						<header>
							<p><a href="#">View modules done by seniors in your faculty</a></p>
							<h2>Faculty</h2>

						</header>
						<button class="button"> <a href="#/course">Explore More</a> </button>
					</div>
				</article>
				<article class="slide2 slide" >
					<img src="https://www.nicholaswan.me/images/cheetah/arts.png" alt="" />
					<div class="inner">
						<header>
							<p>View modules by type (e.g language, GE modules)</p>
							<h2>Module Type</h2>
						</header>
						<button class="button"> <a href="#/modtype">Explore More</a> </button>

					</div>
				</article>
				<article class="slide">
					<img src="https://www.nicholaswan.me/images/cheetah/industry.png"  alt="" />
					<div class="inner">
						<header>
							<p>View modules taken by graduates in an industry</p>
							<h2>Industry</h2>
						</header>
						<button class="button"> <a href="#/industry">Explore More</a> </button>

					</div>
				</article>
			</section>
      `
      /** I commented out Nicholas's old cards, keeping only the slider
      <section id="one" class="wrapper style2">
        <div class="inner">
          <header class="align-center">

          <h2> How to Use </h2>
          <p> Visit one of the three category pages</p>

        <div class="row">
        <div class="col-md-3">
          <div class="minibox">
          <i class="fas fa-school icons2"></i>
          <h2>Faculty Page</h2>
          <p>Get to know when your seniors have completed a module to find out if you are taking a module too early or too late </p>

        </div>
        </div>
        <div class="col-md-3">
          <div class="minibox">
          <i class="fas fa-book icons2"></i>
          <h2>Module Type Page</h2>
          <p> Want to take a Language or GE module but not sure of the options? Click here to help you make your decision!</p>
        </div>
        </div>
        <div class="col-md-3">
          <div class="minibox">
            <i class="fas fa-industry icons2"></i>
            <h2>Industry Page</h2>
            <p> Find out which modules will teach you useful knowledge and skills required to work in an Industry. </p>
        </div>
        </div>
        </div>
          </div>
        </header>


        </div>
      </section>
      **/
      }
    },
    mounted: function () {
      this.$tours['myTour'].start()
    },
    methods: {
      /** Used only for Nicholas's old input
      onSubmit(evt) {
        evt.preventDefault()
      },
      **/
      toUpperCase(text) {
        return text.toUpperCase();
      },
      ...mapMutations([
        'UPDATE_MODULE_CODE'
      ]),
      updateCode() {
        this.UPDATE_MODULE_CODE(this.code)
      }
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

.shiftUp {
  margin-bottom: 0px;
  margin-top: 0px;
}

.categoryHeader {
  color: #003d7c;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: "bold"; /**330;**/
  font-size: 27px; /**32px;**/
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
  margin-top: 30px;
  /**margin-top: 60px;
  padding-bottom: 0px;
  text-transform: uppercase;
  /**margin: 10px auto 10px;**/
}

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
