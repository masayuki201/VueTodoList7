import { createStore } from "vuex";

export interface State {
    todoList: Array<{ id: number, todo: string }>
}

export const store = createStore<State>({
    state: {
        todoList: [
            {
                id: 0,
                todo: 'クリーニングへ行く',
                comment: ['8時に行く'],
            },
            {
                id: 1,
                todo: 'スーパーへ行く',
                comment: ['9時に行く'],
            },
            {
                id: 2,
                todo: '銀行へ行く',
                comment: ['10時に行く'],
            },
        ]
    },
    mutations: {
        increment(state, { id, value }) {
            state.todoList.push({ id: id, todo: value, comment: []})
        },
        complete(state, targetIndex) {
            state.todoList.splice(targetIndex, 1)
        },
    },
    actions: {},
    modules: {},
});

export default store
