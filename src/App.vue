<template>
  <div id="app" style="background-image: url(img/loginScreen.png); height: 600px;">
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
