<template>
    <section class="h-[600px] w-full bg-cover">
        <div class="container text-white mx-auto flex flex-col justify-center h-full">
            <div class="flex flex-col">
                <h2 class="text-6xl font-semibold">Welcome.</h2>
                <h3 class="text-4xl font-semibold">Millions of movies, TV shows and people to discover. Explore now.</h3>
            </div>
            <div class="pt-12" bis_skin_checked="1">
                <form id="inner_search_form" class="relative" action="/search" method="get" accept-charset="utf-8">
                    <label class="inner_search_wrapper">
                        <span class="k-input k-textbox k-input-solid k-input-md k-rounded-md" style="">
                            <input class="bg-white w-full py-4 h-12 px-8 rounded-4xl placeholder:text-[#8997AB] placeholder:text-xl text-xl" dir="auto" id="inner_search_v4" name="query" type="text" autocorrect="off" autofill="off" autocomplete="off" spellcheck="false" placeholder="Search for a movie, tv show, person......" value="" data-role="textbox" aria-disabled="false" inputmode="text" style="width: 100%;">
                        </span>
                    </label>

                    <input type="submit" value="Search" data-role="button" class="px-8 h-full rounded-full absolute right-0 bg-gradient-to-r from-cyan-500 to-blue-500" role="button" aria-disabled="false" tabindex="0">
                </form>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
section {
  background-image: image-set(url(https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter\(duotone,00192f,00baff\)/46FRuCeAn6TrS4F1P4F9zhyCpyo.jpg)1x,url(https://media.themoviedb.org/t/p/w3840_and_h1200_multi_faces_filter\(duotone,00192f,00baff\)/46FRuCeAn6TrS4F1P4F9zhyCpyo.jpg)2x);
}
</style>