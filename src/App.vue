<template>
  <div class="headerBox">
    <router-link to="/">
      <h1 class="headerTitle">
        TodoList7
      </h1>
    </router-link>
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: 'App',

})
</script>

<style scoped>

</style>
