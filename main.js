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
            selected_wine_id: 0,
            top_picks_id: 0,
            group_unit: 4,
            new_arrivals: [],
            on_top: true,
            mobile_menu_hidden: true,
            buy_amounts: [],
        }
    },
    computed: {
        shopcart() {
            return {
                amount: this.selected_wine.length,
                has_thing: this.selected_wine.length > 0,
            };
        },
        top_picks_first() {
            if( this.top_picks[0] ) {
                return [
                    this.top_picks[0],
                    this.top_picks[1],
                    this.top_picks[2],
                    this.top_picks[3]
                ];
            }
            return [];
        },
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
        reset_buy_amounts() {
            let a = [];
            for (let index = 0; index < this.group_unit; index++) {
                a.push(0);
            }
            this.buy_amounts = a;
        },
        buy_amount(index = 0, value = 0, amount = 0) {
            let new_array = [ ...this.buy_amounts ];
            const new_value = this.buy_amounts[index] + value;
            if( new_value > 0 && new_value <= amount ) {
                new_array[index] = new_value;
                this.buy_amounts = new_array;
            }
        },
        is_sold_out(amount = 1) {
            return amount < 1;
        }
    },
    created() {
        this.api_request();
        this.set_detect_on_top();
        this.reset_buy_amounts();
    }
});
