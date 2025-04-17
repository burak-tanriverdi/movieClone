<template>
  <div class="container flex flex-col flex-wrap content-around h-full mx-auto mt-4">
    <div class="flex">
      <h2 class="mr-5 text-xl font-semibold">What's Popular</h2>
      <div class="flex items-center">
        <div class="relative flex w-64 h-10 border border-[#032540] rounded-full overflow-hidden cursor-pointer">
          <div
            class="absolute top-0 left-0 h-full w-1/2 bg-[#032540] rounded-full transition-transform duration-300"
            :class="currentSelection === 'popular' ? 'translate-x-0' : 'translate-x-full'"
          ></div>
          <div
            class="relative flex-1 px-4 py-2 text-sm font-medium text-center transition-colors duration-300"
            :class="currentSelection === 'popular' ? 'text-white' : 'text-[#2c4f6a]'"
            @click="fetchPopularMovies"
          >
            Popular
          </div>
          <div
            class="relative flex-1 px-4 py-2 text-sm font-medium text-center transition-colors duration-300"
            :class="currentSelection === 'top-rated' ? 'text-white' : 'text-[#2c4f6a]'"
            @click="fetchTopRatedMovies"
          >
            Top Rated
          </div>
        </div>
      </div>
    </div>

    <div v-if="loading" class="flex justify-center items-center py-8 h-[500px] w-full">
      <svg class="animate-spin h-24 w-24 text-[#032540]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
      </svg>
    </div>

    <div v-else class="flex relative overflow-x-scroll h-[550px] w-full">
      <div class="flex">
        <CardItem v-for="movie in movies" :key="movie.id" :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CardItem from './recommenderComponents/CardItem.vue'
import { useFetch } from '../helpers/fetch'

const loading = ref(false)
const movies = ref([])
const currentSelection = ref('popular')

const popularEndpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${ import.meta.env.VITE_MY_API_KEY }&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
const topRatedEndpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${ import.meta.env.VITE_MY_API_KEY }&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`

const MIN_LOADING_MS = 600;

async function fetchWithMinLoading(endpoint, selectionKey) {
  currentSelection.value = selectionKey
  loading.value = true

  const start = performance.now()
  movies.value = await useFetch(endpoint)
  const elapsed = performance.now() - start

  if (elapsed < MIN_LOADING_MS) {
    await new Promise(resolve => setTimeout(resolve, MIN_LOADING_MS - elapsed))
  }

  loading.value = false
}

const fetchPopularMovies = () =>
  fetchWithMinLoading(popularEndpoint, 'popular')

const fetchTopRatedMovies = () =>
  fetchWithMinLoading(topRatedEndpoint, 'top-rated')

onMounted(fetchPopularMovies)
</script>