import { createStore } from 'vuex'
import TodoManager from "@/store/modules/TodoManager";
export default createStore({
  modules: {
    TodoManager
  }
})
