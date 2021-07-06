<template>
  <div @dblclick="$store.commit('TodoManager/changeStatus',todo.id)" class="card mt-4 text-white " :class="{'bg-info':todo.status , 'bg-warning':!todo.status}">

    <div class="card-header">
      {{ todo.title }}
      <span aria-hidden="true" class="float-end"
            @click="$store.commit('TodoManager/deleteItem',todo.id)"
            style="cursor: pointer">&times;</span>
    </div>
    <div class="card-body">
      <p class="card-text">{{ todo.description }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "TodoItem",
  props: ['todo'],
}
</script>

<style scoped>

</style>