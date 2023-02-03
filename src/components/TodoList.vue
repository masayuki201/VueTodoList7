<template>
 <div>
   <ul class="todolist">
     <li v-for="(todo, index) in filteredLists" :key="todo.todo">
       {{ todo.todo }}
       <router-link :to="{name: 'detail', params: {id: todo.id}}">詳細</router-link>
       <CompleteButton :index="index" />
     </li>
   </ul>
 </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import CompleteButton from '../components/CompleteButton.vue';

export default defineComponent({
  name: "TodoList",
  components: {
    CompleteButton,
  },

  setup() {
    const store = useStore()
    const state = reactive<{ todoList: Array<{todo: string}>}>({
      todoList: store.state.todoList
    });

    return { state };
  }
});
</script>

<style scoped>

</style>
