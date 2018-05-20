<template>
    <input @change="returnFirstAddress" v-model="firstAddress" id="address" type="text" placeholder="First address">
</template>

<script>
export default {
  name: "FirstAddress",
  props: ["returnToParent"],
  data() {
    return {
      firstAddress: ""
    };
  },
  methods: {
    returnFirstAddress() {
      this.returnToParent({
        firstAddress: this.firstAddress
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

