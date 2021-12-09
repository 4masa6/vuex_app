import { createStore } from 'vuex' // VuexのパッケージからcreateStore という関数をインポート

export const store = createStore({ // createStoreの引数にストアに関する情報をまとめたオブジェクトを指定
  state () {  // stateは、ストアに保管する値を用意しておくもの。コンポーネントのdataに相当するようなイメージ
    return { // このオブジェクトの中に、storeで利用する値をまとめておく
      message: 'count number.',
      counter: 0,
    }
  },
  // コンポーネントでmutationsを呼び出す ⇒ $store.commit('名前')
  mutations: { // mutationsは関数をまとめたオブジェクトとして、値を用意。
    count: (state, n) => { // 第一引数は必ずstateを指定する。それ以外の引数は第二引数以降。オブジェクトを引数に指定することもできる。
      state.counter += n
    },
    say: (state, msg) => {
      state.message = msg
    },
    reset: (state) => {
      state.count = 0
      state.message = 'reset!'
    },
  },
  // コンポーネントでmutationsを呼び出す ⇒ $store.dispatch('名前')
  actions: { // actionsはmutationsを実行する処理。複数のmutationsをまとめて実行できる。
    doit: (context) => { // 第一引数は必ずcontext。contextオブジェクトのcommitメソッドを実行する。
      var n = Math.floor(Math.random() * 10)
      context.commit('count', n)
      context.commit('say', 'add ' + n + '!')
    },
  }
})
