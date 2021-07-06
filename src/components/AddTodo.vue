<template>
  <form @submit.prevent="$store.commit('TodoManager/addItem')">
    <div class="row">

      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Add Todo</label>
        <div class="col-sm-4">
          <input placeholder="title" v-model="title" required type="text" class="form-control">
        </div>
        <div class="col-sm-4">
          <textarea class="form-control" v-model="description" placeholder="description" rows="1"></textarea>
        </div>
        <button class="btn btn-success col-sm-2 d-inline" type="submit">submit</button>

      </div>


    </div>
  </form>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex';

export default {
  name: "AddTodo",

  computed: {
    title: {
      get() {
        return this.$store.state.TodoManager.title
      },
      set(newTitle) {
        this.$store.commit('TodoManager/setTitle', newTitle)
      }
    },
    description: {
      get() {
        return this.$store.state.TodoManager.description;
      },
      set(newDescription) {
        this.$store.commit('TodoManager/setDescription', newDescription);
      }
    }
  }
}
</script>

<style scoped>

</style>