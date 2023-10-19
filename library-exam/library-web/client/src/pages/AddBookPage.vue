<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import BookForm from '../components/BookForm.vue'
import useAuthenticationService from '../services/authentication-service.js'

const router = useRouter()
const authenticationService = useAuthenticationService()

const errorMessage = ref('')

async function addBook(title, author, year, pageCount, description) {
  try {
    await authenticationService.addBook(title, author, year, pageCount, description)
    router.push({ name: 'Home' })
  } catch (error) {
    errorMessage.value = error.message
  }

}

const user = computed(() => authenticationService.user.value)
watch(user, (user) => {
  if (user && user.role !== 'librarian') {
    router.push({ name: 'Home' })
  }
})


</script>

<template>
  <main>
    <div class="content">
      <BookForm
        primary-button="Add"
        primary-button-class="success"
        :error-message="errorMessage"
        @primary-button-clicked="addBook"
      />
    </div>
  </main>
</template>
