<script>
import { useStore } from '/stores/store.js';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const isFavorite = computed(() => store.isFavorite(props.movie));

    const toggleFavorite = () => {
      store.toggleFavorite(props.movie);
    };

    const getImageUrl = () => {
      return `https://image.tmdb.org/t/p/w220_and_h330_face/${props.movie.poster_path}`;
    };

    console.log(props.movie, store.favoriteMovies, store.favoriteMovies.find((movie) => props.movie.id === movie.id));
    

    return { isFavorite, toggleFavorite, getImageUrl };
  },
});
</script>

<template>
  <div class="relative w-64 p-2 mt-8" >
    <div class="relative">
        <img class="object-cover w-full h-auto mb-4 rounded-xl" :src="getImageUrl()" :alt="`Poster of ${movie.title}`" />
        <div class="flex justify-center items-center-safe w-12 h-12 -bottom-5 left-0 absolute p-2 rounded-full border-4 border-[#00ff80] z-10 text-center text-s font-bold text-white bg-[#092d36]">
            {{ movie.vote_average.toFixed(1) * 10 }} <span class="text-[10px] font-bold">%</span>
        </div>
    </div>
    <div class="text-lg font-semibold text-left text-gray-800">
      {{ movie.title }}
    </div>
    <div class="text-left text-gray-500 text-m">
      {{ movie.release_date }}
    </div>
    <button @click.stop="toggleFavorite" class="absolute top-0 left-4 cursor-pointer flex items-center justify-center mt-4 mx-auto w-10 h-10 rounded-full bg-[#f0f0f080]">
      <i :class="isFavorite ? 'fa-solid fa-heart text-pink-700' : 'fa-regular fa-heart text-pink-700'" class="text-xl"></i>
    </button>
  </div>
</template>