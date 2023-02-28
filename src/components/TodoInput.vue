<template>
  <input v-model="todoRef" type="text" class="inputText">
  <button @click="add" class="inputButton">登録</button>
</template>

<script lang="ts">
import { defineComponent, SetupContext, ref } from "vue";
import { useStore } from "vuex";
import store from "../store";

export default defineComponent({
  name: "TodoInput",
  setup( props, context: SetupContext ){
    const todoRef = ref<string>('')

    const lastId = () => {
      if(store.state.todoList.length === 0){
        return 1
      } else {
        const lastItem = store.state.todoList.slice(-1)[0]
        return lastItem.id + 1
      }
    }

    const add = (e) =>{
      if (!todoRef.value) {
            alert('文字を入力して下さい')
            return
          }
      const id = lastId()
      const value = todoRef.value
      store.commit('increment', {id, value})
      todoRef.value = ''
    };

    return { add, todoRef};
  }
});
</script>

<style scoped>

</style>
