<template>
  <div class="alert alert-primary">
    <h1>{{ data.title }}</h1>
    <!-- $storeはstoreに保存している値のオブジェクト。$store.state.値 でアクセスできる -->
    <p class="mt-3 h5">{{ $store.state.message }}</p>
    <hr>
    <div>
      <p class="mt-3 h5">{{ $store.state.counter }}</p>
      <button class="btn btn-info mr-2" @click="$store.commit('count', 1)">
        add1
      </button>
      <button class="btn btn-info mr-2" @click="$store.commit('count', 2)">
        add2
      </button>
      <button class="btn btn-info mr-2" @click="$store.commit('count', 3)">
        add3
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
