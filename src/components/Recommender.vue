<template>
    <div class="flex flex-col flex-wrap content-around mt-4">
      <div class="flex items-center">
        <h2 class="mr-5 text-xl font-semibold">What's Popular</h2>
        <div class="flex items-center justify-center">
          <div class="relative flex w-64 h-10 border border-[#032540] rounded-full overflow-hidden cursor-pointer">
            <div class="absolute top-0 left-0 h-full w-1/2 bg-[#032540] rounded-full transition-transform duration-300" :class="currentSelection === 'popular' ? 'translate-x-0' : 'translate-x-full'"></div>
            <div class="relative flex-1 px-4 py-2 text-sm font-medium text-center transition-colors duration-300"  :class="currentSelection === 'popular' ? 'text-white' : 'text-[#2c4f6a]'" @click="fetchPopularMovies" >
              Popular
            </div>
            <div class="relative flex-1 px-4 py-2 text-sm font-medium text-center transition-colors duration-300" :class="currentSelection === 'top-rated' ? 'text-white' : 'text-[#2c4f6a]'" @click="fetchTopRatedMovies">
              Top Rated
            </div>
          </div>
        </div>
      </div>
      <div class="w-[1400px] gap-2 overflow-scroll">
        <div class="flex h-max w-fit">
          <CardItem v-for="movie in movies" :key="movie.id" :movie="movie" />
        </div>
      </div>
    </div>
  </template>

<script setup>
import { ref, watch, onMounted, defineProps } from 'vue'
import CardItem from './recommenderComponents/CardItem.vue';
import { useFetch } from '../helpers/fetch';

console.log(import.meta.env)

const movies = ref([]);
const currentSelection = ref('popular')
const popularEndpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${ import.meta.env.VITE_MY_API_KEY }&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'`
const topRatedEndpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${ import.meta.env.VITE_MY_API_KEY }&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`

const fetchPopularMovies = async () => {
  movies.value = await useFetch(popularEndpoint);

  currentSelection.value = 'popular';
}

const fetchTopRatedMovies = async () => {
  movies.value = await useFetch(topRatedEndpoint);

  currentSelection.value = 'top-rated';
}

onMounted(() => {
  fetchPopularMovies();
});
</script>