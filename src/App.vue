<template>
  <div id="app">
    <div id="nav">
      <Navigation />
      <login />
      <register />
    </div>
    <router-view/>
  </div>
</template>

<script>
  import Navigation from '@/components/layout/Navigation'
  import login from '@/components/layout/login'
  import register from '@/components/layout/register'
  
  export default{
    components: {
      Navigation,
      login,
      register
    }
  }
</script>
