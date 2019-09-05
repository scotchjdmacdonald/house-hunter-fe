<template>
    <div class="homepage">
        <Navbar/>
        <div id="page-container">
            <SearchBox/>
            <WelcomeHero/>
            <LoadingHero/>
            <PropertiesBoard/>
        </div>
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
    padding-top: 30px;
}

</style>
