<template>
  <button @click="completed">完了</button>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "CompleteButton",
  props: {
    index: {
      type: Number
    }
  },

  setup(props, context: SetupContext){
    const store = useStore()
    const completed = (e) =>{
      const targetIndex = props.index
      store.commit('complete', targetIndex)
    };

    return { completed, props }
  }
});
</script>

<style scoped>

</style>
