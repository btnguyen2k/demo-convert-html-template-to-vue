<template>
    <LogIn />
</template>

<script>
import LogIn from './components/LogIn.vue'

export default {
    name: 'App',
    components: {
        LogIn
    }
}
</script>

<style lang="css">
/* Bootstrap 5.x */
@import "bootstrap/dist/css/bootstrap.min.css";
@import "bootstrap";
@import "bootstrap-icons";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
