<template>
    <div class="bg-indigo-200">
        <div class="flex flex-col">
            <div class="flex justify-center">
                <h1 class="py-4">Čau, {{ userInfo.name }}</h1>
            </div>
            <div class="flex justify-center gap-2">
                <button @click="router.push('/articles/create')"
                    class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                    Pievienot
                </button>
                <button @click="logout"
                    class="px-4 py-2 font-semibold text-gray-800 border border-gray-400 rounded shadow bt-8g-white hover:bg-gray-100">
                    iziet
                </button>
            </div>
            <div class="mt-4">
                <input v-model="search" placeholder="meklēt rakstu.." @input="searchQuery"
                    class="w-full px-2 py-1 border rounded" />
            </div>
        </div>
        <div class="mt-6">
            <h2 class="text-lg font-bold">Raksti</h2>
            <ul>
                <li v-for="article in articles" :key="article.id" class="py-2 border-b">
                    <h3 class="font-semibold"> {{ article.title }} </h3>
                    <p>{{ article.text }}</p>
                    <small>Autors: {{ article.user.name }}</small>
                    <div class="mt-2">
                        <button @click="vote(article.id, true)" class="px-4 rounded-full bg-sky-300">Upvote </button>
                        <br>
                        <button @click="vote(article.id, false)" class="px-4 bg-red-300 rounded-full">Downvote</button>
                        <p>Reputācija: {{ article.reputation }}</p>
                        <button @click="router.push(`/articles/${article.id}`)"
                            class="px-4 bg-green-300 rounded-full">Rediģēt </button>

                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import router from "@/router"

export default {
    data() {
        return {
            userInfo: {},
            articles: [],
            search: "",
            page: 1,
            currentPage: 1,
            router: router,
        };
    },
    mounted() {
        console.log('mounted')
        this.axios.get('/articles').then(response => {
            this.articles = response.data.data;
        })
        window.addEventListener("scroll", this.nextPage);

        this.axios.get('/user').then(response => {
            this.userInfo = response.data.data;
        })
    },

    methods: {
        logout() {
            this.axios.get('/logout').then(response => {
                localStorage.removeItem('access_token')
                this.$router.push("/")
            })
        },

        searchQuery() {
            if (this.search) {
                this.axios.get(`/articles/search/${this.search}`).then(response => {
                    this.articles = response.data.data
                })
            } else {
                this.axios.get('/articles').then(response => {
                    this.articles = response.data.data;
                });
            }
        },
        vote(article_id, is_upvote) {
            this.axios.post(`/articles/vote/${article_id}`, { is_upvote }).then(response => {
                this.axios.get('/articles').then(response => {
                    this.articles = response.data.data;
                });
            })
        },

        nextPage() {
            const endOfPage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
            if (endOfPage) {
                this.currentPage = this.currentPage + 1;
                this.axios.get(`/articles?page=${this.currentPage}`).then(response => {
                    this.articles.push(...response.data.data);
                });
            }
        }
    }
}
</script>