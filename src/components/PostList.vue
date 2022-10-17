<template>
  <div>
    <h3>List of users: </h3>
      <post-item v-for="post in posts" :key="post.id" :post="post"/>
  </div>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      requred: true,
    }
  }
}
</script>

<style scoped>
</style>