<template>
  <div>
    <TodoInput />
    <TodoSearch />
    <TodoList />
  </div>
</template>

<script>
import TodoList from '../components/TodoList.vue';
import TodoInput from '../components/TodoInput.vue';
import TodoSearch from '../components/TodoSearch.vue';

export default {
  name: "Home",
  components: {
    TodoSearch,
    TodoInput,
    TodoList,
  },
}
</script>

<style scoped>

</style>
