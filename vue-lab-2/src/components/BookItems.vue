<template>
  <router-link :to="'/books/' + bookId">
    <p>{{ bookTitle }}</p>
    <p>
      {{ bookId}}
    </p>
    <p>
      {{author}}
    </p>
  </router-link>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  bookTitle: String,
  bookId: Number,
  author: String,
});
</script>

<style scoped>
p {
  font-weight: bold;
  cursor: pointer;
  color: blue;
  text-decoration: underline;
}
</style>
