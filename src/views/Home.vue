<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HedgeHogs from '@/components/pages/HedgeHogs.vue'

export default {
  name: 'HedgeHogs',
  components: {
    HedgeHogs
  }
}
</script>
