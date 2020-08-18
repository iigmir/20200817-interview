var app = new Vue({
    el: "#app",
    data()
    {
        return {
            message: "Hello Vue!",
        }
    },
    created()
    {
        $K.init({
            observer: true
        });
    }
});
