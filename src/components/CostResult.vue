<template>
<p>{{ cost }}$({{ parameters.dist }} km, {{ parameters.time }} min)</p>    
</template>

<script>
export default {
  props: ["parameters", "cost"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
p {
  font-size: 200%;
}
</style>

