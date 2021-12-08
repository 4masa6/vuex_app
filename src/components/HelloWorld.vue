<template>
  <div class="alert alert-primary">
    <h1>{{ data.title }}</h1>
    <!-- $storeはstoreに保存している値のオブジェクト。$store.state.値 でアクセスできる -->
    <p class="mt-3 h5">{{ $store.state.message }}</p>
    <hr>
    <div>
      <p class="mt-3 h5">{{ $store.state.counter }}</p>
      <button class="btn btn-info mr-2" @click="$store.commit({type: 'count', message: 'add 1!', add: 1})">
        add1
      </button>
      <button class="btn btn-info mr-2" @click="$store.commit({type: 'count', message: 'add 5!', add: 5})">
        add5
      </button>
      <button class="btn btn-info mr-2" @click="$store.commit({type: 'count', message: 'add 10!', add: 10})">
        add10
      </button>
      <button class="btn btn-secondary" @click="$store.commit('reset')">
        reset
      </button>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  setup(props) {
    const data = reactive({
      title: 'Vuex',
    })
    return {
      data
    }
  }
}
</script>
