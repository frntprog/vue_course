<template>
  <form @submit.prevent>
    <h4>Post Creation</h4>
    <my-input v-model="post.title" type="text" placeholder="Title"/>
    <my-input v-model="post.description" type="text" placeholder="Description"/>
    <my-button style="margin-top: 15px" @click="createPost">Creat Post</my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        description: '',
      },
    }
  },

  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        description: '',
      };
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>