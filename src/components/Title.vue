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

p {
  font-weight: bold;
  padding: 10px;
  margin: 0px;
  cursor: default;
  font-size: 200%;
}
</style>


