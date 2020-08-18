var app = new Vue({
    el: "#app",
    components: {
        agile: VueAgile
    },
    data()
    {
        return {
            message: "Hello Vue!",
            agile_settings: {
                dots: false
            }
        }
    },
    created()
    {
        $K.init({
            observer: true
        });
    }
});
