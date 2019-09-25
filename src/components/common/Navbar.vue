<template>
    <div class="navbar">
        <div class="title-div" v-on:click="home()">
            <a href=""><h1 class="title">house<span class="title-green">hunter</span></h1></a>
            <span class="title-follower">helping you find rental properties in Amsterdam </span>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Navbar',
  components: {
  },
  computed: {
    home() {
        (this.$store.commit('resetSearch'));
    },
  }
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
    padding-top: 10px;
    padding-bottom: 15px;
    z-index: 1;
    margin: 0px;
}
.title {
    font-size: 45px;
    color: #FFFCF9;
    font-weight: 800;
}

.title-green {
    color: #F7C100;
}

.title-follower{
    font-size: 12px;
    color: #FFFCF9;
    padding-left: 10px;

}

.title-div {
    display: inline-block;
}
</style>
