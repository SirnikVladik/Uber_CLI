<template>
    <input @change="returnSecondAddress"  v-model="secondAddress" id="address" type="text" placeholder="Second address">
</template>

<script>
export default {
  name: "SecondAddress",
  props: ["returnToParent"],
  data() {
    return {
      secondAddress: ""
    };
  },
  methods: {
    returnSecondAddress() {
      this.returnToParent({
        secondAddress: this.secondAddress,
      });
    }
  }
};
</script>

<style scoped>
input {
  display: flex;
  display: block;
  margin: 10px auto;
  background-color: transparent;
  border: 2px solid #111122;
  outline: none;
  border-radius: 5px;
  color: #fff;
  font-size: 110%;
  padding: 3px 10px;
}

input::-webkit-input-placeholder {
  color: #fff;
}
</style>

