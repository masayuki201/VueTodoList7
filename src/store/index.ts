import { createStore } from "vuex";

export interface State {
    keyword: string,
    todoList: Array<{ id: number, todo: string, comment: string }>,
}

export const store = createStore<State>({
    state: {
        keyword: '',
        todoList: [
            {
                id: 0,
                todo: 'クリーニングへ行く',
                comment: '8時に行く',
            },
            {
                id: 1,
                todo: 'スーパーへ行く',
                comment: '9時に行く',
            },
            {
                id: 2,
                todo: '銀行へ行く',
                comment: '10時に行く',
            },
        ],
    },
    mutations: {
        increment(state, { id, value }) {
            state.todoList.push({ id: id, todo: value, comment: ''})
        },
        complete(state, targetIndex) {
            state.todoList.splice(targetIndex, 1)
        },
        search(state, searchKeyword ){
            console.log('search')
            console.log(state.todoList.value)
            console.log(searchKeyword)

            console.log(state.todoList.includes(searchKeyword))

            state.todoList.filter((todo) => todo.todo.includes(searchKeyword));

            console.log('end')
        }
    },
    actions: {},
    modules: {},
});

export default store
