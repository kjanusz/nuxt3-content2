<template>
    <main>
        <!-- work <h1>{{ data?.title }}</h1> -->
        <ContentRenderer v-if="data" :value="data">
            <!-- don't work <h1>{{ data?.title }}</h1> -->
            <template #empty>
                <p>No content found.</p>
            </template>
        </ContentRenderer>
    </main>
</template>

<script setup lang="ts">
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, () => queryContent().where({ _path: path, draft: { $ne: true } }).findOne())
</script>