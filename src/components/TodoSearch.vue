<template>
  <div>
    <input type="text" v-model="keyword" placeholder="検索">
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, computed, SetupContext} from "vue";
// import store from "../store";
import { useStore } from "vuex";


export default defineComponent({
  name: "TodoSearch",
  setup( context: SetupContext ){
    const store = useStore()
    const keyword = ref<string>('')
    console.log(keyword.value);

    const filteredLists = computed(() => {
      const searchKeyword = keyword.value;

  console.log('filteredListsの中');
  console.log(searchKeyword);

      if (searchKeyword === '') return store.state.todoList;
  console.log('ifのあと');

  console.log(filteredLists);

      return  store.commit('search', searchKeyword)
    });

    return { keyword, filteredLists };
  }

});


</script>

<style scoped>

</style>
