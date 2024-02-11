<script lang="ts">
import Header from './components/Header/Header.vue';
import Content from './components/Content/Content.vue';

export default {
    components: {
        Header: Header,
        Content: Content
    }
}
</script>

<template>
    <div class="wrapper">
        <Header title="Погодное приложение" />
        <Content />
    </div>
</template>

<style scoped>
@import './App.css';
</style>
