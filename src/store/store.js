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
        page: 1,
      },
      searching: false,
      newSearch: true,
    },

  },

  getters: {
    searchUri: state => constructSearchUri(state.search.searchParams),

    numPages: state => (~~(state.properties.totalProperties / state.properties.numProperties)),
  },

  mutations: {

    // Property
    updateNumProperties(state, numProperties) {
      state.properties.numProperties = numProperties;
    },
    updateTotalProperties(state, totalProperties) {
      state.properties.totalProperties = totalProperties;
    },
    addPropertyResults(state, properties) {
      Vue.set(state.properties, 'list', [...properties]);
    },


    // Pagination
    incrementPage(state, page) {
      state.search.searchParams.page += 1;
    },
    decrementPage(state, page) {
      state.search.searchParams.page -= 1;
    },
    resetPage(state, page) {
      state.search.searchParams.page = 1;
    },

    // SearchBoxParams
    updateSuburb(state, suburb) {
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

    // Conditional Rendering
    toggleLoading(state) {
      state.search.searching = !(state.search.searching);
    },
    removeWelcome(state) {
      state.search.newSearch = false;
    },
  },

  actions: {

    newSearch({ commit, dispatch }) {
      commit('resetPage');
      dispatch('searchForProperties');
    },

    searchForProperties({ commit, getters }) {
      commit('removeWelcome');
      commit('toggleLoading');
      const uri = getters.searchUri;
      axios
        .get(uri)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            const { properties } = response.data;
            const { totalResults } = response.data;
            commit('updateNumProperties', response.data.properties.length);
            commit('updateTotalProperties', totalResults);
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

    getNextPage({ commit, dispatch }) {
      commit('incrementPage');
      dispatch('searchForProperties');
    },
    getPrevPage({ commit, dispatch }) {
      commit('decrementPage');
      dispatch('searchForProperties');
    },
  },
});
