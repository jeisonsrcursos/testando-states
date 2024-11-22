import { createStore } from "vuex";

//export default createStore({

const store = createStore({
    state: {
        count: 0
    },
    getters: {
        contagem(state){
            return state.count
        }
    },
    mutations: {
        incrementar(state){
            state.count++;
        },
        decrementar(state){
            state.count--;
        }
    },
    actions: {
        incrementar({ commit }){
            commit('incrementar');
        },
        decrementar({ commit }){
            commit('decrementar')
        }
    }
});

export default store;