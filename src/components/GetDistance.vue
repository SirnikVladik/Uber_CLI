<template>
    <button @click="GetDistance" id="calcCost" type="button">Send</button> 
    <!--при отправке формы значения меняются на начальные -->
</template>

<script>
export default {
  name: "GetDistance",
  props: ["addresses"],
  methods: {
    GetDistance() {
      console.info(this.addresses)
    }
  }
};
</script>

<style>
button {
  display: block;
  margin: 10px auto;
  background-color: #111122;
  color: #fff;
  font-weight: bold;
  font-family: "Bree serif", "Arial", "sans-serif";
  font-size: 120%;
  border: 0;
  padding: 4px 8px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
}
</style>
