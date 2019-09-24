<template>
    <div class="loading-hero" v-if="isLoading">
        <h1 class="loading-title">just a sec while we hunt...</h1>
        <div class="lds-ripple">
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'LoadingHero',
  computed: {
    isLoading() {
      return this.$store.state.search.searching;
    },
  },
};
</script>


<style scoped>

.loading-title {
    padding-bottom: 30px;
    padding-left: 20px;
}

.loading-hero {
    justify-content: center;
    align-content: center;
    display: flex;
    flex-direction: column;
    padding-top: 150px;
    text-align: center;
    color: #F7C100;
    padding-right: 30px;
}

.lds-ripple {
    margin-left: auto;
    margin-right: auto;
  display: block;
  position: relative;
  width: 100px;
  height: 100px;
}
.lds-ripple div {
  position: absolute;
  border: 5px solid #F7C100;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 50px;
    left: 50px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 100px;
    height: 100px;
    opacity: 0;
  }
}
</style>
