<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    console.log('App is mounted')
  }
}
</script>
