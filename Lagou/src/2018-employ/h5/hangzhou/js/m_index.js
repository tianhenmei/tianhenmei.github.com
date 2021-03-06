"use strict";
Vue.use(VueAwesomeSwiper)
var app = new Vue({
    el:"#app",
    mixins:[commonMixin],
    data:{
        countId:'1c4z',
        others:[
            "shanghai","beijing",
            "shenzhen","guangzhou",
            "suzhou","nanjing",
            "wuhan","chengdu"
        ],
        tab:{
            offsetTop:0,
            height:0,
            active_index:0,
            count:10,
            status:false,
            click_status:false,
            list:[{
                name:'超凡雇主',
                elem:'yh-center__onlyone',
                offsetTop:0,
                height:0,
                index:0,
                top:0
            },{
                name:'STAR雇主',
                elem:'yh-center__employer',
                offsetTop:0,
                height:0,
                index:1,
                top:0
            },{
                name:'实力首选',
                elem:'yh-center__local',
                offsetTop:0,
                height:0,
                index:2,
                top:0
            },{
                name:'其他城市',
                elem:'yh-center__others',
                offsetTop:0,
                height:0,
                index:3,
                top:0
            }],
            fixed:false,
            shadow_status:false,
            initWidth:750,
            showWidth:750,
            width:9999,
            left:0,
            transition:true,
            start:{
                x:0,
                y:0
            }
        },
    },
    mounted:function(){
        // 超凡雇主
        this.getOnlyoneData('2018STAR101_SUPER_EMPLOYER_hangzhou')
        // Star雇主
        this.getEmployerData('2018STAR101_STAR_EMPLOYER_hangzhou')
        // 本地实力首选
        this.getLocalData('2018STAR101_LOCAL_EMPLOYER_hangzhou','')
        // 潜力公司TOP榜
        this.getTopData('2018STAR101_TOP_EMPLOYER_hangzhou','')
    },
    methods:{
        
    }
})
