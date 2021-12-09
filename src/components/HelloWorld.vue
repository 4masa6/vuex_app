<template>
  <div class="alert alert-primary">
    <h1>{{ data.title }}</h1>
    <!-- $storeはstoreに保存している値のオブジェクト。$store.state.値 でアクセスできる -->
    <p class="mt-3 h5">{{ $store.state.message }}</p>
    <hr>
    <p>clicked: {{ $store.state.counter }}</p>
    <button class="btn btn-primary" @click="$store.commit('doit')">doit</button>
    <button class="btn btn-secondary" @click="$store.commit('reset')">reset</button>
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
