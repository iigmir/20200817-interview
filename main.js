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

function slice_array({ array = [], pivot = 0, unit = 2 }) {
    return array.slice( pivot, pivot + unit );
}

function chunks(array, size) {
    return Array
        .apply( 0, { length: Math.ceil(array.length / size) })
        .map((_, index) => array.slice( index * size, ( index+1 )*size ))
    ;
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
            on_top: true,
            mobile_menu_hidden: true,
            buy_amounts: [],
            new_arrivals_amount: [],
            top_picks_amount: []
        }
    },
    computed: {
        shopcart() {
            const amount =
                this.new_arrivals_amount.filter(i=>i>0).length +
                this.top_picks_amount.filter(i=>i>0).length;
            return {
                amount: amount,
                has_thing: amount > 0,
            };
        },
        top_picks_first() {
            if( this.top_picks[0] ) {
                const checked = chunks( this.top_picks, this.group_unit );
                return checked[ this.top_picks_pivot ];
            }
            return [];
        },
        new_arrivals_first() {
            if( this.new_arrivals[0] ) {
                const checked = chunks( this.new_arrivals, this.group_unit );
                return checked[ this.new_arrivals_pivot ];
            }
            return [];
        },
        is_desk_mode() {
            return window.innerWidth >= 900;
        },
        group_unit() {
            return this.is_desk_mode ? 4 : 1;
        },
        heightlight_images() {
            const texts = (mode = "desktop", index=0) => `./images/heightlight-${mode}-${index}.png`;
            const mode = this.is_desk_mode ? "desktop" : "mobile";
            return [...Array(4)].map( (it, id) => texts(mode, id+1) );
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
            let top_ary = [...Array(12)].map( () => API_GENERATOR() );
            let new_ary = [...Array(12)].map( () => API_GENERATOR() );
            this.top_picks = DYNAMIC_API ? top_ary : TOP_PICK_API;
            this.new_arrivals = DYNAMIC_API ? new_ary : NEW_ARRI_API;
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
        // Shop methods
        reset_buy_amounts(name = "buy_amounts") {
            const a = [...Array(this.group_unit)].map( () => 0 );
            this[name] = a;
        },
        set_buy_amount(index = 0, value = 0, amount = 0, amount_name = "buy_amounts") {
            const old_array = this[amount_name];
            let new_array = [ ...old_array ];
            const new_value = old_array[index] + value;
            if( new_value >= 0 && new_value <= amount ) {
                new_array[index] = new_value;
                this.$set(this,amount_name,new_array);
            }
        },
        bind_amount_class(index = 0, value = 0, amount = 0, amount_name = "buy_amounts") {
            const bind_disabled_number = (index = 0, value = 0, amount = 0, array = []) => {
                const new_value = array[index] + value;
                return new_value < 0 || new_value > amount || amount < 1;
            }
            const array = this[amount_name] || [];
            return {
                'is-up': value > 0,
                'is-down': value < 0,
                'is-disabled': bind_disabled_number(index, value, amount, array),
            };
        },
        is_sold_out(amount = 1) {
            return amount < 1;
        },
        switch_pivot(name = "", type = "increase") {
            const dictionary = {
                new_arrivals_pivot: this.new_arrivals,
                top_picks_pivot: this.top_picks
            };
            const array = dictionary[name] || [];
            const pivot = this[name];
            if( array.length < 1 || typeof(pivot) !== "number" ) {
                console.error(array, pivot);
                return;
            }
            const small_chunk = chunks(array, this.group_unit).length - 1;
            const results = {
                increase: pivot + 1 <= small_chunk ? pivot + 1 : 0,
                decrease: pivot - 1 >= 0 ? pivot - 1 : small_chunk,
            };
            this[name] = results[type] || 0;
            return;
        }
    },
    created() {
        this.api_request();
        this.set_detect_on_top();
        this.reset_buy_amounts("top_picks_amount");
        this.reset_buy_amounts("new_arrivals_amount");
        this.add_menu_listener();
    }
});
