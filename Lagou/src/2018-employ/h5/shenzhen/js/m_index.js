"use strict";
Vue.use(VueAwesomeSwiper)
var app = new Vue({
    el:"#app",
    mixins:[commonMixin],
    data:{
        countId:'1c4u',
        others:[
            "shanghai","beijing",
            "nanjing","guangzhou",
            "suzhou","chengdu",
            "wuhan","hangzhou"
        ],
        corperate:[
            147,147,147,147,
            147,147,147,147,
            147,147,147,147,
            147,147,147,147,
            147,147,147,147,
            147,147,147,147
        ],
    },
    mounted:function(){
        this.from = (getQueryString('lagoufrom')+'').toLocaleLowerCase();
        var frompartner = getQueryString('frompartner');
        this.partnerStatus = frompartner// ? true : false;
        this.isAPP = this.from == 'ios' || this.from == 'android'
        if(!this.isAPP){
            this.floating.status = true;
        }
        this.browserType = this.getBrowserType()

        this.fontSize = parseFloat(this.getComputedValue(document.documentElement,'font-size'));
        this.tab.showWidth = this.getRemValue(this.tab.initWidth) * this.fontSize;
        this.setTabWidth();

        // this.addJSCSS();
        // this.loadedJSCSS();
        this.initWindowScrollEvent();

        // // 超凡雇主
        // this.getOnlyoneData(147)
        // // Star雇主
        // this.getEmployerData(147)
        // // 本地实力首选
        // this.getLocalData(147,'shenzhen')
    },
    methods:{
        
    }
})
