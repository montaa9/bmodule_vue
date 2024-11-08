<template>
    <div class="bg-indigo-200">
        <div class="flex flex-col">
            <input v-model="NewArticle.title" placeholder="Raksta virsraksts" class="px-2 py-4 mt-2 border rounded" />

            <textarea v-model="NewArticle.text" placeholder="Raksta teksts"
                class="px-2 py-4 mt-2 border rounded"> </textarea>

            <button @click="EditArticle" class="px-4 rounded-full bg-sky-300">Saglabāt</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            NewArticle: {
                title: "",
                text: "",
            },
        };
    },
    methods: {
        EditArticle() {
            this.axios.put(`/articles/${this.$route.params.id}`, this.NewArticle).then(response => {
                this.NewArticle.title = "";
                this.NewArticle.text = "";
                this.$router.push("/articles")
            })
        },
    }
}
</script>