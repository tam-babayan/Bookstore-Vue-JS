<template>
  <div id="app">
    <searchBar @queryChanged="query = $event"></searchBar>
    <flipCards :query=query> </flipCards>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      query: null
    }
  },
  name: "App"
};
</script>

<style>
</style>
