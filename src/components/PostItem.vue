<template>
  <div class="post">
    <div>
      <div>{{ post.id }}</div>
      <div><strong>Title:</strong> {{ post.title }}</div>
      <div><strong>Description:</strong> {{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button @click="$router.push(`posts/${post.id}`)"> Open </my-button>
      <my-button @click="$emit('remove', post)"> Delete </my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}

.post__btns {
  display: flex;
}
</style>
