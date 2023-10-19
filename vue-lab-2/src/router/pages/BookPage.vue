<template>
  <div class="book-page">
    <div class="book">
      <h2>{{ currentBook.title }}</h2>
      <br>
      <p>Author: {{ currentBook.author }}</p>
      <br>
      <p>Page Count: {{ currentBook.pageCount }}</p>
      <br>
      <BookForm
        :buttonText="val1"
        :form_function="val2"
        @response="UpdateBook"
        :initialData="currentBook"
      />
      <RouterLink to="/"><button @click="deleteBook" class='myButton'>Delete Book </button></RouterLink>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import books from '@/books';
import BookForm from '@/components/BookForm.vue'

const message = ref('');
const url = window.location.href;
const id = url.split('/')[4];
const newBook = ref(null);
const library = computed(() => books.library);
const currentBook = computed(() => books.library.find((book) => book.id === Number(id)));
const emit = defineEmits(['addBook']);
const router = useRouter();
const bookId = ref(null)
const val1 = ref('Save Changes');
const val2 = ref('Update Book');

function UpdateBook(bookData) {
  newBook.value = bookData;
  newBook.value.id = currentBook.value.id;
  books.library.splice(currentBook.value.id - 1, 1, newBook.value);
  message.value = 'Book Updated';
}

function deleteBook() {
  const index = books.library.findIndex((book) => book.id === currentBook.value.id);

  if (index !== -1) {
    books.library = books.library.filter((book) => book.id !== currentBook.value.id);

    for (let i = index; i < books.library.length; i++) {
      books.library[i].id = i + 1;
    }
  }
}
</script>

<style scoped>
.book {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-weight: bold;
  font-style: italic;
  text-transform: uppercase;
  border: 1px solid grey;
  background-color: lightgrey;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 20px;
}
.myButton {
  background-color: #44c767;
  border-radius: 28px;
  border: 1px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 17px;
  padding: 16px 31px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
}
</style>
