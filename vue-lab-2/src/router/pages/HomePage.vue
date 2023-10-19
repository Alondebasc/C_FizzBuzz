<script setup>
import books from '@/books'
import { computed, ref } from 'vue'

const library = computed(() => books.library)
const searchBook = ref('')
const filteredBooks = computed(() => {
  return library.value.filter((book) => {
    return book.title.toLowerCase().includes(searchBook.value.toLowerCase())
  })
})
</script>

<template>
  <div>
    <h1 class="home">Library</h1>
    <div class="search">
    <input type="text" v-model="searchBook" placeholder="Search for a Book" />
    </div>
    <ul v-for="book in filteredBooks" :key="book.id" class='book-list'>
        <router-link :to="'/books/' + book.id">
          <p>{{ book.title }}</p>
        </router-link>
    </ul>
  </div>

</template>


<style scoped>
.home {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-weight: bold;
  font-style: italic;
  text-decoration: underline;
  text-transform: uppercase;
  color: black;
}

.search {
  text-align: center;
  margin-bottom: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-style: italic;
  text-decoration: underline;
  text-transform: uppercase;
  color: green;
  border: 1px solid grey;
  background-color: lightgrey;
  border-radius: 5px;
  padding: 5px;
}
.book-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: white;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 5px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-style: italic;
  text-decoration: underline;
  text-transform: uppercase;
  color: green;
}
</style>
