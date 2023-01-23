<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <TodoList />
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {
  name: 'App',
  components: {
    TodoList,
  }
}
</script>
