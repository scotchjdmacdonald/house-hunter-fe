<template>
    <div class="welcome-hero" v-if="newSearch">
        <div>
            <img src="@/assets/heroImg5.svg">
        </div>
        <div class="hero-text">
            <h1>Looking to rent in Amsterdam?</h1>
            <p>Welcome to househunter, we look across different rental sites for properties
            matching your</p>
            <p>preferences. Fiddle with the above parameters, click Search, and we will start hunting.</p>
        </div>
    </div>
</template>

<script>

export default {
  name: 'WelcomeHero',
  components: {
  },
  computed: {
    newSearch() {
      return this.$store.state.search.newSearch;
    },
  },
};
</script>

<style scoped>
.welcome-hero{
    width: 100%;
    justify-content: center;
    align-content: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #F7C100;
    margin-top: 100px;
}

.hero-text{
    padding-bottom: 0px;
}

p {
    font-size: 15px;
}

h1{
    font-size: 35px;
    padding-bottom: 22px;
}
img{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 250px;
  padding-bottom: 30px;
  }
</style>
