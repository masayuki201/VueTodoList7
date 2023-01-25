<template>
 <div>
   <ul class="todolist">
     <li v-for="(todo, index) in state.todoList" :key="todo.todo">
       {{ todo.todo }}
       <CompleteButton :index="index" @complete-todo="completeTodoAction" />
     </li>
   </ul>
   <TodoInput @add-todo="addTodoAction" />
 </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import TodoInput from '../components/TodoInput.vue'
import CompleteButton from '../components/CompleteButton.vue';

export default defineComponent({
  name: "TodoList",
  components: {
    CompleteButton,
    TodoInput,
  },

  setup() {
    const state = reactive<{ todoList: Array<{todo: string}>;}>({
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

    const addTodoAction = ( value: string) => {
      state.todoList.push({todo: value})
    };

    const completeTodoAction = ( targetIndex ) => {
      state.todoList.splice(targetIndex, 1)
    }

    return { state, addTodoAction, completeTodoAction };
  }
});
</script>

<style scoped>

</style>
