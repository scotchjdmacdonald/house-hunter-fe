<template>
    <div class="navbar">
        <a href="/"><h1 class="title">house<span class="title-green">hunter</span></h1></a>
        <span class="title-follower">helping you find rental properties in Amsterdam </span>
    </div>
</template>

<script>

export default {
  name: 'Navbar',
  components: {
  },
};
</script>

<style scoped>
.navbar{
    top: 0;
    width: 100%;
    position: fixed;
    overflow: hidden;
    background-color: #3772FF;
    padding-left: 40px;
    padding-top: 15px;
    padding-bottom: 20px;
    z-index: 1;

}
.title {
    font-size: 45px;
    color: #FFFCF9;
}

.title-green {
    color: #F7C100;
}

.title-follower{
    font-size: 12px;
    color: #FFFCF9;
    padding-left: 10px;

}
</style>
