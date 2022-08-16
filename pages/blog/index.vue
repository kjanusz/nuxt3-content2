<template>
    <main>
        <ContentList path="/blog" v-slot="{ list }">
            <div v-for="post in list" :key="post._path">
                <h2>{{ post.title }}</h2>
                <p>{{ post.description }}</p>
                <nuxt-link :to="post._path">{{ post.title }}</nuxt-link>
                <pre>{{ path }}</pre>
            </div>
        </ContentList>
    </main>
</template>

<script setup lang="ts">
const { path } = useRoute();
</script>
