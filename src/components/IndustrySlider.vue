<script>

export default {
    name: 'industry-slider',
    props: {
      industry: String,
    },
    data () {
        return {
            industry: this.industry,
        }
    },
    mounted() {

    },
    methods: {

    },
}
</script>

<template>
    <div id="slider">
      <div id="chart-container">
        {{industry}}
        <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            fade
            indicators
            img-width="100"
            img-height="50"
          >
            <b-carousel-slide
              caption="First slide"
              img-src="require('@/assets/companies/a1.jpg')"
              width="100"
              height="50"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Second Slide"
              img-src="../assets/companies/a2.jpg"
              width="100"
              height="50"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Third Slide"
              img-src="~/static/a3.jpg"
              width="100"
              height="50"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Fourth Slide"
              img-src="https://picsum.photos/1024/480/?image=23"
              width="100"
              height="50"
            ></b-carousel-slide>
        </b-carousel>
      </div>
    </div>
</template>


<style scoped>
#slider {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.buttontext {
  color: #FF5138; /**#007BFF;**/
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 500; /**330;**/
  font-size: 16px;
  margin: auto;
  padding-left: 3%;
  padding-right: 3%;
}

h1, h2 {
  font-weight: normal;
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
