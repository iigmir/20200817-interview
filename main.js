function debounce(func, delay=250) {
    let timer = null;
   
    return () => {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args);
        }, delay)
    }
}

function throttle(func, timeout = 250) {
    let last;
    let timer;
   
    return function () {
        const context = this;
        const args = arguments;
        const now = + new Date();
   
        if (last && now < last + timeout) {
            clearTimeout(timer);
            timer = setTimeout( () => {
                last = now;
                func.apply( context, args );
            }, timeout)
        } else {
            last = now;
            func.apply( context, args );
        }
    }
}

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
            selected_wine: [],
            top_picks: [],
            new_arrivals: [],
            on_top: true
        }
    },
    computed: {
        shopcart() {
            return {
                amount: this.selected_wine.length,
                has_thing: this.selected_wine.length > 0,
            };
        },
        on_top2() {
            return true;
        }
    },
    methods: {
        detect_on_top() {
            this.on_top = window.scrollY < 10;
        },
        api_request() {
            let top_ary = [];
            let new_ary = [];
            for (let index = 0; index < 12; index++) {
                top_ary.push( API_GENERATOR() );
                new_ary.push( API_GENERATOR() );
            }
            this.top_picks = top_ary;
            this.new_arrivals = new_ary;
        },
    },
    created() {
        document.addEventListener( "scroll", this.detect_on_top );
        this.api_request();
    }
});
