<template>
    <div>
        <h1>TEST CONTENT APP</h1>
        <nuxt-link :to="link">BLOG</nuxt-link>
    </div>
</template>

<script setup lang="ts">
const link = "/blog";
</script>
