"use strict";
Vue.use(VueAwesomeSwiper)
var app = new Vue({
    el:"#app",
    mixins:[commonMixin],
    data:{
        countId:'1bit',
        // tab 切换
        tab:{
            count:10,
            active_index:-1,
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
                name:'其它城市专场',
                elem:'yh-center__others',
                offsetTop:0,
                height:0,
                index:2,
                top:0
            },{
                name:'合作伙伴',
                elem:'yh-center__corperate',
                offsetTop:0,
                height:0,
                index:3,
                top:0
            }]
        },
        onlyone:{
            count:1,
            imgs:[
                'images/onlyone-img-01.jpg',
                'images/onlyone-img-01.jpg',
                'images/onlyone-img-01.jpg'
            ],
            company:{
                companyId:147,
                city:"北京",
                financestage: "D轮及以上",
                companysize: "2000人以上",
                otherlabel: "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                positionVo:[{
                    "positionId":1,
                    "positionName":"算法工程师",
                    "salary":"15-40K"
                },{
                    "positionId":1,
                    "positionName":"算法工程师",
                    "salary":"15-40K"
                },{
                    "positionId":1,
                    "positionName":"算法工程师",
                    "salary":"15-40K"
                },{
                    "positionId":1,
                    "positionName":"算法工程师",
                    "salary":"15-40K"
                }],
            }
        },
        others:[
            "beijing","shanghai","shenzhen",
            "guangzhou","hangzhou","chengdu",
            "nanjing","wuhan","suzhou"
        ],
        corperate:[
            147,147,147,147,147,147,
            147,147,147,147,147,147,
            147,147,147,147,147,147
        ],
    },
    mounted:function(){
        this.from = (getQueryString('lagoufrom')+'').toLocaleLowerCase();
        this.browserType = this.getBrowserType()

        // // this.addJSCSS();
        // // this.loadedJSCSS();

        // // 热招快报
        // this.getBulletData()
        // // 24小时热力排行榜 - 最In
        // this.getPopularInData()
        // // 24小时热力排行榜 - 极速响应
        // this.getPopularQuickestData()
        // // 24小时热力排行榜 - 最受欢迎
        // this.getPopularMostData()
        // // 领先雇主
        // this.getLeaderData()
        // // 超级雇主
        // this.getEmployerData()
        // // 名企首发 - 公司列表
        // this.getFirstData()
        // // 名企首发 - 大咖
        // this.getFirstRecommendData()
        // // 千万豪门
        // this.getRichData()
        // // 高薪必投
        // this.getWillData()
        // // 热招风暴
        // this.getStormData()
        // // AI狂热季
        // this.getAiData()
        // // 人气精选
        // this.getChoiceData()
    },
    methods:{
    
        






        
        addJSCSS:function(){
            switch (this.browserType) {
                case 0:  // Opera浏览器
                case 1:  // Firefox浏览器
                case 2:  // Chrome浏览器
                case 3:  // Safari浏览器
                    this.addCssByLink('https://www.lgstatic.com/topic/css/swiper.min.css', this.loadedJSCSS);
                    this.addScript('https://www.lgstatic.com/topic/js/swiper.min.js', this.loadedJSCSS);
                    break;
                case 6:  // IE浏览器
                    animationStatus = true;
                    // lunAnimation(browserType);
                    break;
                case 4:  // IE9.0及以上浏览器
                case 5:
                default:
                    this.addCssByLink('https://www.lgstatic.com/topic/css/idangerous.swiper.css', this.loadedJSCSS);
                    this.addScript('https://www.lgstatic.com/topic/js/idangerous.swiper.min.js', this.loadedJSCSS);
                    break;
            }
        },
        /***********************************
         **  功能函数
         */
        getPopularInData:function(){
            var self = this,
                url = 'activityapi/smallActivity/most-delivery.json';
            if(this.isAPP){
                url = 'activityapi/smallActivity/app-most-delivery.json'
            }
            this.getAjaxData(url,function(data){
                self.popular.in.list = data;
            },{
                count:3
            })
        },
        getPopularQuickestData:function(){
            var self = this,
                url = '';
            if(this.from == 'ios' || this.from == 'android'){
                url = 'activityapi/smallActivity/app-deal-fast.json'
            }else {
                url = 'activityapi/smallActivity/pc-deal-fast.json'
            }
            this.getAjaxData(url,function(data){
                if(self.isObject(data)){
                    self.popular.quickest.list = data;
                }
            },{
                count:3
            })
        },
        getPopularMostData:function(){
            var self = this;
            this.getAjaxData('activityapi/smallActivity/query-config-position.json',function(data){
                self.popular.most.list = data;
            },{
                templateId:'2018MustVoteGoodCompany',
                count:3,
                positionCount:0
            })
        },
        getLeaderData:function(){
            var self = this,
                count = self.leader.list[0].count;
            this.getAjaxData('activityapi/smallActivity/query-config-position.json',function(data){
                var i = 0;
                for(i = 0; i < data.length; i++){
                    data[i].count = count
                }
                self.leader.list = data;
            },{
                templateId:'2018LeadEmployer',
                count:1,
                positionCount:3
            })
        },
        cutString:function(str,num){
            str = str ? str : ''
            var str2 = str.replace(/([\u4E00-\u9FA5]|[\uFE30-\uFFA0])/g,"çç"),
                result = '';
            if (str2.length > num){
                var length = str2.slice(0,num).replace(/çç/g,'ç').length;
                result = str.slice(0,length)+'...';
            }else {
                result = str;
            }
            return result;
        },
        getEmployerData:function(){
            var self = this;
            this.getAjaxData('activityapi/smallActivity/query-config-position.json',function(data){
                var i = 0;
                for(i = 0; i < data.length; i++){
                    data[i].oneWord = self.cutString(data[i].oneWord,34);
                }
                self.employer.list = data;
                self.$nextTick(function(){
                    self.addEmployerAnimation();
                })
            },{
                templateId:'2018SuperEmployer',
                positionCount:3
            })
        },
    }
})