
<script setup>
import { ref } from 'vue'
import BookForm from '@/components/BookForm.vue'
const message = ref('')
import books from '@/books'
const newBook = ref(null)
const val1 = ref('New Book')
const val2 = ref('Add Book')

function addBook(book) {
  console.log(book)
  newBook.value = book
  newBook.value.id = books.library.length + 1
  books.library.push(newBook.value)
  message.value = 'Book Added'
}

</script>

<template>

  <BookForm :buttonText='val1' :form_function='val2' @response='addBook'/>

</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}
</style>
```

