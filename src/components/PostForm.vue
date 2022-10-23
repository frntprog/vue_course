<template>
  <form @submit.prevent>
    <h4>Post Creation</h4>
    <my-input
      v-focus
      v-model="post.title" 
      type="text" 
      placeholder="Title"
      />
    <my-input
      v-model="post.body" 
      type="text" 
      placeholder="Description"
      />
    <my-button
      style="margin-top: 15px" 
      @click="createPost"
    >
      Create Post
    </my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      },
    }
  },

  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
      };
    }
  },

}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>