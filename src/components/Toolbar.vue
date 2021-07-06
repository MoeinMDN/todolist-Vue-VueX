<template>
  <AppTitle/>
  <SearchSection/>
  <hr>
  <Filters/>
  <hr>
  <AddTodo/>
  <hr>
</template>

<script>

import SearchSection from "@/components/SearchSection";
import Filters from "@/components/Filters";
import AddTodo from "@/components/AddTodo";
import AppTitle from "@/components/AppTitle";
import TodoItem from "@/components/TodoItem";

export default {
  name: "Toolbar",
  components: {
    SearchSection, Filters, AddTodo, TodoItem, AppTitle

  }
}
</script>

<style scoped>

</style>