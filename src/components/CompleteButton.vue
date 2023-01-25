<template>
  <button @click="completed">完了</button>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from "vue";

export default defineComponent({
  name: "CompleteButton",
  props: {
    index: {
      type: Number
    }
  },

  setup(props, context: SetupContext){
    const completed = (e) =>{
      context.emit('complete-todo', props.index);
    };

    return { completed, props }
  }
});
</script>

<style scoped>

</style>
