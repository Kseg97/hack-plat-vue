<template>
  <div id="app">
    <div id="nav">
      <Navigation />
      <event/>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import Navigation from '@/components/layout/Navigation'
  import event from '@/components/layout/event'

  export default{
    components: {
      Navigation,
      event
    }
  }
</script>
