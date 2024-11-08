<template>
  <div class="flex flex-col justify-center min-h-full px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 class="mt-10 font-bold tracking-tight text-center text-gray-900 text-2xl/9">Reģistējies</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST" @submit.prevent="register">
      <div>
        <label for="name" class="block font-medium text-gray-900 text-sm/6">Tavs vārds</label>
        <div class="mt-2">
          <input id="name" v-model="form.name" placeholder="Vārds" name="name" type="text" autocomplete="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
        </div>
      </div>
      <div>
        <label for="email" class="block font-medium text-gray-900 text-sm/6">Tava e-pasta adrese</label>
        <div class="mt-2">
          <input id="email" v-model="form.email" placeholder="E-pasts" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
        </div>
      </div>

      <div>
          <label for="password"  class="block font-medium text-gray-900 text-sm/6">Parole</label>
          <div class="text-sm"></div>
        <div class="mt-2">
          <input id="password" placeholder="Parole" v-model="form.password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Reģistrēties</button>
      </div>
    </form>   
  </div>
</div>
</template>
<script>
import router from "@/router"

export default {
  data() {
    return {
      form: {
        name:null,
        email: null, 
        password: null,
      }
    }
  },
  methods: {
    register() {
      this.axios.post('/register', this.form).then(response => {
        window.localStorage.setItem('access_token', response.access_token)
        window.localStorage.setItem('user', JSON.stringify(response.user) ?? '{}')
        router.push('/')
      })
    }
  },
}

</script>