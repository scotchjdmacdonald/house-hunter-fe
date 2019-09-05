import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';
import { constructSearchUri } from '@/services/UrlHelper';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    properties: [],
    search: {
      searchParams: {
        minSize: null,
        minPrice: null,
        maxPrice: null,
        suburb: 'jordaan',
        minBedrooms: null,
      },
      searching: false,
    },

  },

  getters: {
    searchUri: state => constructSearchUri(state.search.searchParams),
  },

  mutations: {
    // SearchBoxParams
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
      Vue.set(state, 'properties', [...properties]);
    },

    toggleLoading(state) {
      state.search.searching = !(state.search.searching);
    },
  },

  actions: {
    searchForProperties({ commit, getters }) {
      const uri = getters.searchUri;
      axios
        .get(uri)
        .then((response) => {
          console.log(response);
          const properties = response.data;
          commit('addPropertyResults', properties);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
