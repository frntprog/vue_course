<template>
  <div class="app">
    <post-form @create="createPost"/>
    <post-list :posts="posts"/>
  </div>
</template>

<script>
import PostList from "./components/PostList.vue"
import PostForm from "./components/PostForm.vue"
export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [
        {id: 1, title: 'JavaScript', description: 'It is description for title!'},
        {id: 2, title: 'JavaScript 2', description: 'It is description for title 2 !'},
        {id: 3, title: 'JavaScript 3', description: 'It is description for title 2 !'},
      ],
    }
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

</style>