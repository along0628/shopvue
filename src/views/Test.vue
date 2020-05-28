<template>
    <div>
        <h1>这是我的第一个 Vue 页面</h1>
        <h2>6666</h2>
        <van-button type="primary">主要按钮</van-button>
        <van-button loading type="info" loading-text="加载中..." />
    </div>
</template>

<script>
    export default {
        name: "Test"
    }
</script>

<style scoped>
    h1{
        color: green;
    }
</style>