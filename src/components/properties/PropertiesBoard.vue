<template>
  <div class="properties-board" v-if="displayProperties">
    <vs-row vs-align="center" vs-justify="space-around">
      <PropertyCard v-for="(property, index) in propertiesList"
        :propertyDetails="property" :key="index"/>
    </vs-row>
  </div>
</template>

<script>
import PropertyCard from '@/components/properties/PropertyCard.vue';

export default {
  name: 'PropertiesBoard',
  components: {
    PropertyCard,
  },
  computed: {
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

</style>
