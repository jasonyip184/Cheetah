<template>
  <div class="home_page">
    <div v-html="legacySystemHTML"></div>
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
        <b-button id="submitbutton" type="submit" variant="primary" @click="modalShow = !modalShow">Submit</b-button>
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
            <b-button id="coursebutton" href="#/course" variant="primary">View course statistics</b-button>
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
    <br/><br/><br/>

    <Footer/>

    <v-tour name="myTour" :steps="steps"></v-tour>

  </div>
</template>

<script>
  import Footer from "@/components/Footer.vue";
  export default {
    data() {
      return {
        steps: [
          {
            target: '#submitbutton',  // We're using document.querySelector() under the hood
            content: `Use this as a tour`
          },
          {
            target: '#coursebutton',
            content: 'Bring directly to elements with ids'
          },
          {
            target: '[data-v-step="2"]',
            content: 'Try it, you\'ll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.',
            params: {
              placement: 'top'
            }
          }
        ],
        form: {},
        modalShow: false,
        legacySystemHTML: `
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
      onSubmit(evt) {
        evt.preventDefault()
      }
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
