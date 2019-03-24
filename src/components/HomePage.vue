<template>
  <div class="home_page">
    <div v-html="carouselHTML"></div>
    <br/><br/>

    <!-- Search Input -->
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
    <br/><br/>

    <div v-html="cardsHTML"></div>

    <Footer/>

    <v-tour name="myTour" :steps="steps"></v-tour>

  </div>
</template>

<script>
  import Footer from "@/components/Footer.vue";
  import jsondata from '@/data/module_data.json';

  export default {
    data() {
      return {
        // For tour
        steps: [
          {
            target: '#inputModuleCode',
            content: `Use this as a tour`
          },
          {
            target: '.minibox',
            content: 'Bring directly to elements with ids'
          },
        ],
        // For input field
        modulelist: jsondata['modulelist'],
        isInvalidInput: true,
        code: '',
        form: {},
        modalShow: false,
        carouselHTML: `
        <section class="banner full">
				<article class="slide">
					<img src="https://www.nicholaswan.me/images/cheetah/computing.png" alt="" />
					<div class="inner">
						<header>
							<p><a href="#">View modules done by seniors in your faculty</a></p>
							<h2>Faculty</h2>

						</header>
						<button class="button"> <a href="#/course">View Page</a> </button>
					</div>
				</article>
				<article class="slide2 slide" >
					<img src="https://www.nicholaswan.me/images/cheetah/arts.png" alt="" />
					<div class="inner">
						<header>
							<p>View modules by type (e.g language, GE modules)</p>
							<h2>Module Type</h2>
						</header>
						<button class="button"> <a href="#/modtype">Find out More</a> </button>

					</div>
				</article>
				<article class="slide">
					<img src="https://www.nicholaswan.me/images/cheetah/industry.png"  alt="" />
					<div class="inner">
						<header>
							<p>View modules taken by graduates in an industry</p>
							<h2>Industry</h2>
						</header>
						<button class="button"> <a href="#/industry">Click Here</a> </button>

					</div>
				</article>
			</section>
      `,
      cardsHTML: `
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
      `

      }
    },
    mounted: function () {
      this.$tours['myTour'].start()
    },
    methods: {
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
