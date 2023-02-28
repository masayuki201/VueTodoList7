<template>
  <div>
    <template v-if="detailItem">
      <div>
        <h2>
          <p class="font-bold m-5">タイトル</p>
          <input class="inputText" type="text" v-model="detailItem.todo" placeholder="タイトル">
        </h2>
      </div>
      <div>
        <h2>
          <p class="font-bold m-5">コメント</p>
          <textarea class="inputComment" v-model="detailItem.comment" placeholder="コメント"></textarea>
        </h2>
      </div>
      <router-link class="rounded bg-yellow-500 text-white m-5 p-1" to="/">一覧へ</router-link>

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
