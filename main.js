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
            new_arrivals: [],
            new_arrivals_pivot: 0,
            top_picks: [],
            top_picks_pivot: 0,
            group_unit: 4,
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
                return this.new_arrivals.slice( this.top_picks_pivot, this.group_unit );
            }
            return [];
        },
        new_arrivals_first() {
            if( this.new_arrivals[0] ) {
                return this.new_arrivals.slice( this.new_arrivals_pivot, this.group_unit );
            }
            return [];
        },
        is_desk_mode() {
            return window.innerWidth >= 900;
        }
    },
    methods: {
        set_detect_on_top() {
            if( this.is_desk_mode ) {
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
        // Menu events
        add_menu_listener() {
            if( !this.is_desk_mode ) {
                document.querySelector("#app").addEventListener(
                    "click",
                    e => this.close_menu_by_event(e)
                );
            }
        },
        set_mobile_menu_hidden(bool = true) {
            this.mobile_menu_hidden = bool;
        },
        toggle_menu() {
            this.set_mobile_menu_hidden(!this.mobile_menu_hidden);
        },
        open_menu() {
            this.set_mobile_menu_hidden(false);
        },
        close_menu() {
            if( this.mobile_menu_hidden === false ) {
                this.set_mobile_menu_hidden(true);
            }
        },
        close_menu_by_event(event) {
            const clicks_in_the_menu = event.target.contains( this.$refs.mobile_menu );
            if( clicks_in_the_menu && this.is_desk_mode === false ) {
                this.close_menu();
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
        bind_disabled_number(index = 0, value = 0, amount = 0) {
            const new_value = this.buy_amounts[index] + value;
            return new_value < 0 || new_value > amount;
        },
        bind_disabled_class(index = 0, value = 0, amount = 0) {
            return {
                'is-disabled': this.bind_disabled_number(index, value, amount),
            };
        },
        is_sold_out(amount = 1) {
            return amount < 1;
        }
    },
    created() {
        this.api_request();
        this.set_detect_on_top();
        this.reset_buy_amounts();
        this.add_menu_listener();
    }
});
