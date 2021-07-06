<template>

  <div class="container">
    <Toolbar/>
    <TodoItem v-for="todo in allTodos" :key="todo.id" :todo="todo"/>
  </div>

</template>

<script>
import TodoItem from "@/components/TodoItem";
import Toolbar from "@/components/Toolbar";
import {mapGetters, mapActions} from 'vuex';


export default {
  name: 'App',
  components: {
    TodoItem, Toolbar
  },
  computed: {
    ...mapGetters({
      allTodos: 'TodoManager/allTodos'
    })
  }
}
</script>

<style>

</style>
