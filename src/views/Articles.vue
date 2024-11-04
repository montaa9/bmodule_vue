<template>
   <button  class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
  Pievienot
</button>
<button @click="logout" class="px-4 py-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow hover:bg-gray-100">
  iziet
</button>
</template>

<script>
export default {
    data() {
        return {
            userInfo: {
                id: "",
                name: "",
                email: "",
                password: "",
                
            }
        }
    },
    methods: {
        logout() {
        this.axios.get('/logout').then(response => {
            localStorage.removeItem('access_token')
            this.$router.push("/")
        })
        }
    }
}
</script>