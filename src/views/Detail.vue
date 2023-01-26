<template>
  <div>
    <template v-if="detailItem">
      <div>
        <h2>
          <p>タイトル</p>
          <p>{{ detailItem.todo }}</p>
        </h2>
      </div>
      <div>
        <h2>
          <p>コメント</p>
          <p>{{ detailItem.comment }}</p>
        </h2>
      </div>
    </template>
    <template v-else>
      <div>
        <h2>データが存在しません</h2>
        <router-link to="/">TOPへ</router-link>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import TodoInput from '../components/TodoInput.vue';

export default defineComponent({
  name: "Detail",

  components: {
    TodoInput,
  },

  setup() {
    const store = useStore()
    const route = useRoute()
    const routerId = route.params.id
    const detailItem = store.state.todoList.find(e => String(e.id) === routerId)
    return { detailItem }
  }
});
</script>

<style scoped>

</style>
