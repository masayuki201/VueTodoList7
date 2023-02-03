<template>
  <div>
    <input type="text" v-model="keyword" placeholder="検索">
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import store from "../store";
import { useStore } from "vuex";


export default defineComponent({
  name: "TodoSearch",
  setup(){
    // const store = useStore()
    const keyword = ref<string>('')

    const filteredLists = computed(() => {
      const searchKeyword = store.state.keyword;
      if (searchKeyword === '') return store.state.todoList;
      store.commit('search', searchKeyword)
    });

    return { keyword, filteredLists };
  }

});


</script>

<style scoped>

</style>
