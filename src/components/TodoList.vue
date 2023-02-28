<template>
   <div class="p-6"  v-for="(todo, index) in state.todoList" :key="todo.todo">
       <div class="relative">
         <h2 class="listTodo">{{ todo.todo }}</h2>
         <router-link :to="{name: 'detail', params: {id: todo.id}}" class="detailButton">詳細</router-link>
         <CompleteButton :index="index" class="completeButton" />
       </div>
   </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
// import TodoSearch from '../components/TodoSearch.vue';
import CompleteButton from '../components/CompleteButton.vue';

export default defineComponent({
  name: "TodoList",
  components: {
    CompleteButton,
    // TodoSearch,
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
