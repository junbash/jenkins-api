<!--App.vue는 가장 상단의 페이지-->
<template>
  <!--라우터 링크 부분-->
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/pipeline">Pipeline</router-link> |
    <router-link to="/credential">Credential</router-link>
  </div>
  <!--링크에 따른 view의 처리부-->
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
