<template>
    <div class="homepage">
        <Navbar/>
        <div id="page-container">
            <SearchBox/>
            <WelcomeHero/>
            <LoadingHero/>
            <PropertiesBoard/>
        </div>
        <div id="footer">by <a target="_blank" href="https://github.com/scotchjdmacdonald">Scotch</a></div>
    </div>
</template>

<script>
import SearchBox from '@/components/search/SearchBox.vue';
import Navbar from '@/components/common/Navbar.vue';
import WelcomeHero from '@/components/common/WelcomeHero.vue';
import LoadingHero from '@/components/common/LoadingHero.vue';
import PropertiesBoard from '@/components/properties/PropertiesBoard.vue';

export default {
  name: 'homepage',
  components: {
    SearchBox,
    Navbar,
    WelcomeHero,
    LoadingHero,
    PropertiesBoard,
  },
};
</script>

<style scoped>

#page-container{
    padding-left: 50px;
    padding-right: 50px;
    width: 100%;
    padding-top: 15px;
    margin-bottom: 35px;
}

#footer {
    background-color: #3772FF;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 30px;
    margin: 0px;
    padding-right: 40px;
    padding-top: 6px;
    text-align: end;
    font-size: 13px;
    color: #FFFCF9 !important;
}

a {
    color: #FFFCF9;
}

</style>
