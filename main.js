var app = new Vue({
    el: "#app",
    components: {
        // agile: VueAgile
        "carousel": VueCarousel.Carousel,
        "slide": VueCarousel.Slide,
    },
    data()
    {
        return {
            message: "Hello Vue!",
            agile_settings: {
                dots: false
            },
            VueCarousel_settings: {
                perPage: 1,
                navigationEnabled: true
            },
        }
    },
    created()
    {
        $K.init({
            observer: true
        });
    }
});
