<template>
    <vs-col class="properties-card" type="flex" vs-justify="center" vs-align="center"
        vs-sm="10" vs-xs="10" vs-lg="5" vs-w="5">
        <vs-card actionable class="cardx">
            <div class="titles" slot="header">
                <div>
                    <h3>{{propertyDetails.address}}</h3>
                </div>
                <h2> {{propertyDetails.price}}</h2>
            </div>
            <div slot="media">
                <PropertyImageCarousel :images="propertyDetails.images"/>
            </div>
                <div class="details">
                    <div>
                        <img src="@/assets/icons/LOCATION.svg"/>
                        <span class="details-text">{{propertyDetails.postcode}}</span>
                    </div>
                    <div>
                        <img src="@/assets/icons/BED.svg"/>
                        <span class="details-text">{{propertyDetails.rooms}}</span>
                    </div>
                    <div>
                        <img src="@/assets/icons/SIZE.svg"/>
                        <span class="details-text">{{propertyDetails.size}}
                        </span>
                    </div>
                </div>
            <div slot="footer">
                <vs-row vs-justify="flex-end">
                    <a :href="propertyDetails.link" target="_blank">
                        <vs-button color="#3772FF">View</vs-button>
                    </a>
                </vs-row>
            </div>
        </vs-card>
    </vs-col>
</template>

<script>
import PropertyImageCarousel from '@/components/properties/PropertyImageCarousel.vue';

export default {
  name: 'PropertiesCard',
  components: {
    PropertyImageCarousel,
  },
  props: {
    propertyDetails: Object,
  },
};
</script>

<style scoped>
.properties-card {
    color: #564D65;
}
h3, h2{
    font-weight: 400;
}

.details {
    display: flex;
    justify-content: space-around;
}

.titles {
    display: flex;
    align-content: center;
    justify-content: space-between;
}

.details-text {
    vertical-align: middle;
}

img{
    vertical-align: middle;
    width: 25px;
    padding-right: 5px;
}
</style>
