<template>
  <div id="app">
    <app-title></app-title>
    <img src="./assets/logo.png">
    <form>
      <first-address :returnToParent="returnToParent"></first-address>
      <second-address :returnToParent="returnToParent"></second-address>
      <get-distance :addresses="addresses"></get-distance>
    </form>
    <cost-result :cost="cost" :parameters="parameters" ></cost-result>
  </div>
</template>

<script>
import Title from "./components/Title.vue";
import FirstAddress from "./components/FirstAddress.vue";
import SecondAddress from "./components/SecondAddress.vue";
import GetDistance from "./components/GetDistance.vue";
import CostResult from "./components/CostResult.vue";

export default {
  name: "app",
  data() {
    return {
      parameters: {
        dist: 120,
        time: 50,
        perKilomiters: 0.185,
        perMinutes: 0.025,
        reservation: 0.9
      },
      addresses: {
        firstAddress: "",
        secondAddress: ""
      }
    };
  },
  components: {
    "app-title": Title,
    "first-address": FirstAddress,
    "second-address": SecondAddress,
    "get-distance": GetDistance,
    "cost-result": CostResult
  },
  methods: {
    returnToParent(data) {
      if (data.firstAddress != undefined) {
        this.addresses.firstAddress = data.firstAddress;
        console.info(
          "First Address: ",
          this.addresses.firstAddress,
          "; Second Address: ",
          this.addresses.secondAddress
        );
      }
      if (data.secondAddress != undefined) {
        this.addresses.secondAddress = data.secondAddress;
        console.info(
          "First Address: ",
          this.addresses.firstAddress,
          "; Second Address: ",
          this.addresses.secondAddress
        );
      }
    }
  },
  computed: {
    cost() {
      let cost =
        this.parameters.reservation +
        this.parameters.time * this.parameters.perMinutes +
        this.parameters.dist * this.parameters.perKilomiters;
      if (cost < 1.65) {
        return 1.65;
      } else {
        return Math.ceil(cost * 100) / 100;
      }
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Bree+Serif");

body {
  background-color: #222233;
}

p {
  padding: 0px;
  margin: 0px;
}

img {
  width: 10%;
}

#app {
  font-family: "Bree Serif", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}
</style>
