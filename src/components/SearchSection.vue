<template>
  <div class="form-group ">
    <label>Search</label>
    <input v-model="search" type="text" class="form-control">
    {{ search }}
  </div>
</template>

<script>
 export default {
  name: "SearchSection",
  computed: {

    search: {
      get() {
        return this.$store.state.TodoManager.search
      },
      set(newSearch) {
        this.$store.commit('TodoManager/setSearch',newSearch)
      }
    }
  }
}
</script>

<style scoped>

</style>