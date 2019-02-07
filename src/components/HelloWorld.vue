<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
    <ul>
    </ul>
    <b-card-group deck
                  class="mb-3">
        <b-card bg-variant="warning"
                text-variant="white"
                header="Course"
                class="text-center">
            <p class="card-text">View course statistics</p>
            <b-button href="#/about" variant="primary">Go somewhere</b-button>
        </b-card>
        <b-card bg-variant="danger"
                text-variant="white"
                header="Batch"
                class="text-center">
            <p class="card-text">View batch statistics</p>
            <b-button href="#/about" variant="primary">Go somewhere</b-button>
        </b-card>
        <b-card bg-variant="success"
                text-variant="white"
                header="Industry"
                class="text-center">
            <p class="card-text">View modules associated with industry</p>
            <b-button href="#/about" variant="primary">Go somewhere</b-button>
        </b-card>
    </b-card-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {},
        modalShow: false
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
      }
    },
    name: "HelloWorld",
    props: {
      msg: String
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
