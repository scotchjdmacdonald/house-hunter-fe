<template>
  <div class="properties-board" v-if="displayProperties">
    <vs-row vs-align="center" vs-justify="space-around">
      <PropertyCard v-for="(property, index) in propertiesList"
        :propertyDetails="property" :key="index"/>
    </vs-row>
    <div class="pagination">
      <div>
        <vs-button :disabled="page == 1" v-on:click="prevPage" size="small" color="#3772FF" icon="navigate_before" text-color="white"></vs-button>
      </div>
      <div><h2>{{page}}</h2></div>
      <div>
        <vs-button v-on:click="nextPage" icon-after size="small" color="#3772FF" icon="navigate_next" text-color="white"></vs-button>
      </div>
    </div>
  </div>
</template>

<script>
import PropertyCard from '@/components/properties/PropertyCard.vue';

export default {
  name: 'PropertiesBoard',
  components: {
    PropertyCard,
  },
  methods: {
    nextPage() {
      this.$store.dispatch('getNextPage');
    },
    prevPage() {
      this.$store.dispatch('getPrevPage');
    }
  },
  computed: {
    page() {
      return (this.$store.state.search.searchParams.page);
    },
    displayProperties() {
      return (this.$store.state.properties.numProperties
        && !(this.$store.state.search.searching));
    },
    propertiesList() {
      return (this.$store.state.properties.list);
    },
  },
};
</script>

<style scoped>

.properties-board {
  padding-top: 30px;
}

.pagination {
  margin: auto;
  width: 15%;
  display: flex;
  padding-top: 40px;
  justify-content: space-around;
  color: #F7C100;

}

</style>
