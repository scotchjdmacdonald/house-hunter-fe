<template>
    <div class="welcome-hero">
        <div class="hero-text">
            <h1>Welcome to househunter</h1>
            <p>Fiddle with the above parameters, click Search, and start hunting.</p>
        </div>
        <div>
            <img src="@/assets/heroImg.svg">
        </div>
    </div>
</template>

<script>

export default {
  name: 'WelcomeHero',
  components: {
  },
};
</script>

<style scoped>
.welcome-hero{
    color: #00D1B2;
    width: 100%;
    height: 300px;
    justify-content: center;
    align-content: center;
    display: flex;
    flex-direction: column;
    padding-top: 150px;
    text-align: center;
    color: #3DDC97;
}

.hero-text{
    padding-bottom: 20px;
}

h1{
    font-size: 40px;
}
img{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  }
</style>
