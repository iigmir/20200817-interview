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
            on_top: true,
            mobile_menu_hidden: true,
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
        set_detect_on_top() {
            if( window.innerWidth >= 900 ) {
                document.addEventListener( "scroll", this.detect_on_top );
            }
        },
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
        set_mobile_menu_hidden(bool = true) {
            this.mobile_menu_hidden = bool;
        },
        close_menu() {
            if( !this.mobile_menu_hidden ) {
                this.set_mobile_menu_hidden(true);
            }
        },
        set_close_menu_by_screen() {
            if( window.innerWidth < 900 ) {
                document.addEventListener("click", () => this.close_menu());
                document.querySelector(".mobile-screen.navigator .hamburger").addEventListener("click", e => e.stopPropagation() );
            }
        },
    },
    created() {
        this.api_request();
        this.set_detect_on_top();
    }
});
