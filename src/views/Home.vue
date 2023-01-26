<template>
  <div>
    <TodoList />
    <TodoInput />
  </div>
</template>

<script>
import TodoList from '../components/TodoList.vue';
import TodoInput from '../components/TodoInput.vue';

export default {
  name: "Home",
  components: {
    TodoInput,
    TodoList,
  },
}
</script>

<style scoped>

</style>
