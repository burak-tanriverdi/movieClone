import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
    state: () => ({
        favoriteMovies: JSON.parse(localStorage.getItem('favoriteMovies')) ?? [],
    }),
    actions: {
        toggleFavorite(movie) {
            const index = this.favoriteMovies.findIndex(item => item.id === movie.id);

            if (index === -1) {
                this.favoriteMovies.push(movie);
            } else {
                this.favoriteMovies.splice(index, 1);
            }

            localStorage.setItem('favoriteMovies', JSON.stringify(this.favoriteMovies));
        }
    },
    getters: {
        isFavorite(state) {
            return (movie) => state.favoriteMovies.some(item => item.id === movie.id);
        }
    },
    persist: true
});