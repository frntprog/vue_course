<template>
  <div>
    <h1>Page with Posts</h1>
    <my-input
      v-model="searchQuery"
      placeholder="Searching..."
    />
    <div class="app__btns">
      <my-button
        @click="showDialog"
      >
      Create Post
      </my-button> 
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"/>
    </my-dialog>
    <post-list v-if="!isPostLoading" @remove="removePost" :posts="searchedAndSortedPosts"/>
    <div v-else>Loading...</div>
    <div v-intersection="loadMorePosts" class="observer">

    </div>
    <!-- <div class="page__wrapper">
      <div 
      v-for="pageNumber in totalPages" 
      :key="pageNumber"
      class="page" 
      :class="{
        'current-page': page === pageNumber
      }"
      @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div> -->
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue"
import PostForm from "@/components/PostForm.vue"
import axios from 'axios'
import MyInput from "@/components/UI/MyInput.vue"

export default {
  components: {
    PostList,
    PostForm,
    MyInput
},
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 0,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        {value: 'title', name: 'By title'},
        {value: 'body', name: 'By description'},
      ]
    }
  },
  mounted () {
    this.fetchPosts();
    // let options = {
    //   rootMargin: '0px',
    //   threshold: 1.0
    // }
    // let callback = (entries, observer) => {
    //     /* Content excerpted, show below */
    //     if (entries[0].isIntersecting && this.page < this.totalPages) {
    //       this.loadMorePosts();
    //     }
    // };
    // let observer = new IntersectionObserver(callback, options);
    // observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]);
      });
    },
    searchedAndSortedPosts() {
      return this.sortedPosts.filter(post => post.title.includes(this.searchQuery));
    }
  },
  watch: {
    // page() {
    //   this.fetchPosts();
    // },
  }, 
  methods: {
    // changePage(pageNumber) {
    //   this.page = pageNumber;
    // },
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id); 
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        this.isPostLoading = true;
        setTimeout(async () => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit,
            }
          });
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
          this.posts = response.data;
          this.isPostLoading = false;
        }, 1000);
      } catch (error) {
          alert(error);
      };
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = [...this.posts, ...response.data];
      } catch (error) {
          alert(error);
      }
    }
  },
}
</script>

<style>
.app__btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  height: 100px;
  border: 1px solid #000;
  padding: 10px;
}

.current-page {
  border: 2px solid teal;
}

.observer {
  height: 30px;
  background: gray;
}

</style>