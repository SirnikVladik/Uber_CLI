<template>
<p>{{ title }}</p>    
</template>

<script>
export default {
  name: "Title",
  data() {
    return {
      title: "Uber UI"
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Bree+Serif");

p {
  font-weight: bold;
  padding: 10px;
  margin: 0px;
  cursor: default;
  font-size: 200%;
}
</style>


