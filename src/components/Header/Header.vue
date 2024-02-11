<script lang="ts">
export default {
    props: [
        'title'
    ]
}
</script>

<template>
    <h1 class="title">{{ title }}</h1>
</template>

<style>
@import './Header.css';
</style>
