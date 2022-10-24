<template>
  <div class="navbar">
    <router-link class="main" to="/">Vue 3</router-link>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">
        Posts
      </my-button>
      <my-button
        @click="$router.push('/about')"
        style="margin-left: 20px"
        >
        About
      </my-button>
      <my-button 
        @click="$router.push('/store')"
        style="margin-left: 20px"
      >
        Store
      </my-button>
      <my-button 
        @click="$router.push('/composition')"
        style="margin-left: 20px"
      >
        Composition API
      </my-button>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgrey;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
  margin-bottom: 20px;
}

.navbar__btns {
  margin-left: auto;
}

.main {
  text-decoration: none;
  color: #000;
}
</style>