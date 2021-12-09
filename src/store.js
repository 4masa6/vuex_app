import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"

export const store = createStore({
  state () {
    return {
      message: 'count number.',
      counter: 0,
    }
  },
  mutations: {
    doit: (state) => {
      var n = Math.floor(Math.random() * 10)
      state.counter += n
      state.message = 'add ' + n + '.';
    },
    reset: (state) => {
      state.counter = 0
      state.message = 'reset!'
    },
  },
  plugins: [
    createPersistedState(), // pluginsにオブジェクトを追加するだけでstateに用意された値は全てローカルストレージに保存されるようになる。
  ],
})
