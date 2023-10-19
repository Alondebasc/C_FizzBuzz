<script setup>
import { ref, onMounted } from 'vue'
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  buttonText: String,
  form_function: String,
  initialData: Object,
})

const emit = defineEmits(['response'])
const title = ref('')
const author = ref('')
const pageCount = ref('')

onMounted(() => {

  if (props.initialData) {
    title.value = props.initialData.title
    author.value = props.initialData.author
    pageCount.value = props.initialData.pageCount
  }
})

function FormData() {
  const book = {
    title: title.value,
    author: author.value,
    pageCount: pageCount.value,
  }
  emit('response', book)
  title.value = ''
  author.value = ''
  pageCount.value = ''
}
</script>

<template>
  <form @submit.prevent="FormData" class='createbook'>
    <h2>{{ form_function }}</h2>
    <label for="title">Title</label>
    <input type="text" id="title" name="title" v-model='title'/>
    <label for="author">Author</label>
    <input type="text" id="author" name="author" v-model='author'/>
    <label for="pageCount">Page Count</label>
    <input type="number" id="pageCount" name="pageCount" v-model='pageCount' min="0" />
    <div class='buttons'>
      <button class='submitbut' type="submit">{{ buttonText }}</button>
      <button class='resetbut' type="reset">Reset</button>
    </div>
  </form>
</template>

<style scoped>
.createbook {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: brown;
  border: white solid 3px;
}

.buttons {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.submitbut, .resetbut {
  background-color: beige;
  border-radius: 28px;
  border: 1px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: rgba(161, 80, 22, 0.55);
  font-family: Arial;
  font-size: 17px;
  padding: 16px 31px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
}
</style>
