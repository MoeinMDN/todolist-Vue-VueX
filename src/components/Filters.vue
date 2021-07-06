<template>
  <div class="mt-3 mt-3">
    <p class="d-inline mx-2">filters</p>
    <div class="form-check form-check-inline">
      <input v-model="filter" class="form-check-input" type="radio" name="filter" id="inlineCheckbox1"
             value="option1">
      <label class="form-check-label" for="inlineCheckbox1">All</label>
    </div>
    <div class="form-check form-check-inline">
      <input v-model="filter" class="form-check-input" type="radio" name="filter" id="inlineCheckbox2" value="option2">
      <label class="form-check-label" for="inlineCheckbox2">Done</label>
    </div>
    <div class="form-check form-check-inline">
      <input v-model="filter" class="form-check-input" type="radio" name="filter" id="inlineCheckbox3" value="option3">
      <label class="form-check-label" for="inlineCheckbox3">Not Done</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filters",
  computed: {
    filter: {
      get() {
        return this.$store.state.TodoManager.filter;
      },
      set(newFilter) {
        this.$store.commit('TodoManager/changeFilter', newFilter)
      }
    }
  }
}
</script>

<style scoped>

</style>