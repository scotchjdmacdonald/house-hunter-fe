<template>
    <div class="search-box">
        <div class="search-container">
            <div class="select-input">
                <div class="input-label"><label >Choose suburb</label></div>
                <vs-select :disabled="isSearching" autocomplete placeholder="Select" 
                  class="inner-select"
                    v-model="suburb" width="210px">
                    <vs-select-item :key="index" :value="item.text"
                        :text="item.text" v-for="(item,index) in suburbs" />
                </vs-select>
            </div>
            <div class="select-input-first">
                <div class="input-label"><label >Price Min</label></div>
                <vs-select :disabled="isSearching" placeholder="Select" class="inner-select"
                    v-model="minPrice" width="100px">
                    <vs-select-item :key="index" :value="item.value"
                        :text="item.text" v-for="(item,index) in prices" />
                </vs-select>
            </div>
            <div class="select-input">
                <div class="input-label"><label >Price Max</label></div>
                <vs-select :disabled="isSearching" placeholder="Select" class="inner-select"
                    v-model="maxPrice" width="100px">
                    <vs-select-item :key="index" :value="item.value"
                        :text="item.text" v-for="(item,index) in prices" />
                </vs-select>
            </div>
            <div class="select-input">
                <div class="input-label"><label >Min bedrooms</label></div>
                <vs-select :disabled="isSearching" placeholder="Select" class="inner-select"
                    v-model="minBedrooms" width="100px">
                    <vs-select-item :key="index" :value="item.value"
                        :text="item.text" v-for="(item,index) in bedrooms" />
                </vs-select>
            </div>
            <div class="select-input">
                <div class="input-label"><label >Minimum size</label></div>
                <vs-select :disabled="isSearching" placeholder="Select" class="inner-select"
                    v-model="minSize" width="100px">
                    <vs-select-item :key="index" :value="item.value"
                        :text="item.text" v-for="(item,index) in sizes" />
                </vs-select>
            </div>
            <div class="search-button">
                <vs-button :disabled="isSearching" size="large" color="#F7C100" type="filled"
                        v-on:click="searchProperties">Search</vs-button>
            </div>
        </div>
    </div>
</template>

<script>
import { sizes, prices, bedrooms, suburbs } from '@/constants/constants';

export default {
  name: 'SearchBox',
  components: {
  },
  data() {
    return {
      // option arrarys
      sizes,
      prices,
      bedrooms,
      suburbs
    };
  },
  methods: {
    async searchProperties() {
      this.$store.dispatch('searchForProperties');
    },
  },
  computed: {
    isSearching() {
      return this.$store.state.search.searching;
    },
    suburb: {
      get() {
        return this.$store.state.search.searchParams.suburb;
      },
      set(value) {
        this.$store.commit('updateSuburb', value);
      },
    },
    minSize: {
      get() {
        return this.$store.state.search.searchParams.minSize;
      },
      set(value) {
        this.$store.commit('updateMinSize', value);
      },
    },
    minPrice: {
      get() {
        return this.$store.state.search.searchParams.minPrice;
      },
      set(value) {
        this.$store.commit('updateMinPrice', value);
      },
    },
    maxPrice: {
      get() {
        return this.$store.state.search.searchParams.maxPrice;
      },
      set(value) {
        this.$store.commit('updateMaxPrice', value);
      },
    },
    minBedrooms: {
      get() {
        return this.$store.state.search.searchParams.minBedrooms;
      },
      set(value) {
        this.$store.commit('updateMinBedrooms', value);
      },
    },
  },
};
</script>

<style scoped>
.search-box {
    background-color: #4F83FF;
    padding-top: 10px;
    padding-bottom: 40px;
    padding-left: 50px;
    padding-right: 50px;
    border: #4F83FF solid;
    border-radius: 5px;
    color: #f0f8ff;
    font-size: 14px;
}

.search-container {
    width: 100%;
    display: inline-flex;
    flex-flow: row wrap;
    align-content: flex-start;
}

.input-label {
    padding-left: 1px;
    margin-bottom: 10px;
}

.inner-select {
    color: #564D65;
}

.select-input {
    margin-top: 20px;
    margin-right: 65px;
}
.select-input-first {
    margin-top: 20px;
    margin-right: 5px;
}

.search-button {
    margin-left: auto;
    margin-top: 41px;
}

button {
    width: 80px;
}

</style>
