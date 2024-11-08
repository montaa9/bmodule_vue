<template>
    <div class="bg-indigo-200">
        <div class="flex flex-col">
            <input v-model="NewArticle.title" placeholder="Raksta virsraksts" class="px-2 py-4 mt-2 border rounded" />

            <textarea v-model="NewArticle.text" placeholder="Raksta teksts"
                class="px-2 py-4 mt-2 border rounded"> </textarea>

            <button @click="AddArticle" class="px-4 rounded-full bg-sky-300">Pievienot</button>
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
        AddArticle() {
            this.axios.post('/articles', this.NewArticle).then(response => {
                this.NewArticle.title = "";
                this.NewArticle.text = "";
                this.ShowAddArticleForm = false;
                this.$router.push("/articles")

            })
        },
    }
}
</script>