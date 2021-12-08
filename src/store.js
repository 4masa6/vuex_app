import { createStore } from 'vuex' // VuexのパッケージからcreateStore という関数をインポート

export const store = createStore({ // createStoreの引数にストアに関する情報をまとめたオブジェクトを指定
  state () {  // stateは、ストアに保管する値を用意しておくもの。コンポーネントのdataに相当するようなイメージ
    return { // このオブジェクトの中に、storeで利用する値をまとめておく
      message: 'This is store data.',
      counter: 0,
    }
  },
  mutations: {
    count: (state, obj) => {
      state.message = obj.message
      state.counter += obj.add
    },
    reset: (state, obj) => {
      state.message = 'reset!'
      state.counter = 0
    }
  }
})
