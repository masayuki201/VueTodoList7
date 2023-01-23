<template>
 <div>
   <ul class="todolist">
     <li v-for="todo in state.todoList" :key="todo.todo">{{ todo.todo }}</li>
   </ul>
   <TodoInput />
 </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import TodoInput from '../components/TodoInput.vue'

export default defineComponent({
  name: "TodoList",
  components: {
    TodoInput,
  },
  setup() {
    const state = reactive<{ todoList: [{todo: String}, {todo: String}, {todo: String}];}>({
      todoList: [
        {
          todo: 'クリーニングへ行く',
        },
        {
          todo: 'スーパーへ行く',
        },
        {
          todo: '銀行へ行く',
        },
      ]
    });
    return { state };
  }
});
</script>

<style scoped>

</style>
