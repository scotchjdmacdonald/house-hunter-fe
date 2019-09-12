<template>
    <div class="welcome-hero" v-if="newSearch">
        <div class="hero-text">
            <h1>Looking to rent in Amsterdam?</h1>
            <p>Welcome to househunter, we look across different rental sites for properties
            matching your preferences,</p>
            <p>fiddle with the above parameters, click Search, and we will start hunting.</p>
        </div>
        <div>
            <img src="@/assets/heroImg5.svg">
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
    margin-top: 50px;
}

.hero-text{
    padding-bottom: 40px;
}

h1{
    font-size: 40px;
    padding-bottom: 22px;
}
img{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  }
</style>
