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
            VueCarousel_settings: {
                perPage: 1,
                loop: true,
                navigationEnabled: true,
                paginationEnabled: false,
                navigationPrevLabel: "<img src='./fontawesome/chevron-left.svg' />",
                navigationNextLabel: "<img src='./fontawesome/chevron-right.svg' />",
            },
            selected_wine: []
        }
    },
    computed: {
        shopcart() {
            return {
                amount: this.selected_wine.length,
                has_thing: this.selected_wine.length > 0,
            };
        }
    },
    created()
    {
        $K.init({
            observer: true
        });
    }
});
