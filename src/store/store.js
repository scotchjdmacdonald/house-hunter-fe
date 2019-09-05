import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';
import { error } from 'util';
import { constructSearchUri } from '@/services/UrlHelper';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    properties: {
      list: [],
      numProperties: null,
      totalProperties: 0,
    },
    search: {
      searchParams: {
        minSize: null,
        minPrice: null,
        maxPrice: null,
        suburb: null,
        minBedrooms: null,
      },
      searching: false,
      newSearch: true,
    },

  },

  getters: {
    searchUri: state => constructSearchUri(state.search.searchParams),
  },

  mutations: {

    updateNumProperties(state, numProperties) {
      state.properties.numProperties = numProperties;
    },

    // SearchBoxParams
    updateSuburb(state, minSize) {
      state.search.searchParams.suburb = suburb;
    },
    updateMinSize(state, minSize) {
      state.search.searchParams.minSize = minSize;
    },
    updateMinPrice(state, minPrice) {
      state.search.searchParams.minPrice = minPrice;
    },
    updateMaxPrice(state, maxPrice) {
      state.search.searchParams.maxPrice = maxPrice;
    },
    updateMinBedrooms(state, minBedrooms) {
      state.search.searchParams.minBedrooms = minBedrooms;
    },

    addPropertyResults(state, properties) {
      Vue.set(state.properties, 'list', [...properties]);
    },

    toggleLoading(state) {
      state.search.searching = !(state.search.searching);
    },
    removeWelcome(state) {
      state.search.newSearch = false;
    },
  },

  actions: {
    searchForProperties({ commit, getters }) {
      commit('removeWelcome');
      commit('toggleLoading');
      const uri = getters.searchUri;
      axios
        .get(uri)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            const properties = response.data;
            commit('updateNumProperties', response.data.length);
            commit('addPropertyResults', properties);
            commit('toggleLoading');
          } else {
            throw error;
          }
        })
        .catch(() => {
          console.log(error);
        });
    },
  },
});
