var commonMixin = {
    data:{
        fontSize:16,
        logoHref:'https://www.lgstatic.com/thumbnail_100x100/',
        logoHrefO:'https://www.lgstatic.com/',
        companyHref:{
            one:"self.location=\'https://www.lagou.com/center/company_",
            two:".html\';"
        },
        positionHref:{
            one:"self.location=\'https://www.lagou.com/center/job_",
            two:".html\';"
        },
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
                name:'本地实力首选',
                elem:'yh-center__local',
                offsetTop:0,
                height:0,
                index:2,
                top:0
            },{
                name:'潜力公司top榜',
                elem:'yh-center__top',
                offsetTop:0,
                height:0,
                index:3,
                top:0
            },{
                name:'其它城市专场',
                elem:'yh-center__others',
                offsetTop:0,
                height:0,
                index:4,
                top:0
            }]
        },
        onlyoneOptions:{
            // autoplay:true,//等同于以下设置
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
            speed:500,
            loop:true,
            pagination: {
                el: '.img-pagination',
                bulletClass : 'img-p',
                bulletActiveClass: 'active'
            }
            // pagination:'.img-pagination',
            // bulletClass : 'img-p',
            // bulletActiveClass : 'active'
        },
        employerActiveIndex:0,
        employerOptions:{
            // autoplay:true,//等同于以下设置
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
            speed:500,
            loop:true,
            initialSlide:0,
            // pagination:'.employer-pagination',
            // paginationType:'custom',
            // paginationElement:'div',
            // paginationClickable:true,
            // bulletClass : 'employer-p',
            // bulletActiveClass : 'active'
            on:{
                slideChangeTransitionStart:function(){
                    var sapp = app || this.$el[0].__vue__.$root
                    sapp.changeEmployerActiveIndex(this.activeIndex)
                },
            }
            // autoplay:3000,
            // speed:500,
            // loop:true,
            // pagination:'.img-pagination',
            // bulletClass : 'img-p',
            // bulletActiveClass : 'active'
        },
        employerCount:50,
        employerList:[{
            "id": 312260,
            "financestage": "不需要融资",
            "logo": "i/image/M00/7F/B5/CgpFT1pV0aKAF4u8AABVMWtorEo579.png",
            "companyname": "百度在线网络技术（北京）有限公司",
            "companyshortname": "拉勾网",
            "companyfeatures": "用科技让复杂的世界更简单",
            "city": "北京",
            "createtime": "Oct 13, 2013 3:49:33 PM",
            "isenable": 1,
            "approve": 2,
            "companysize": "2000人以上",
            "industryfield": "移动互联网,数据服务",
            "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
            "customerlabel": "2787",
            "approvemanid": 3634,
            "approvemanemail": "yelin@baidu.com",
            "createmanid": 10747,
            "createmanemail": "zhubaining@baidu.com",
            "companylng": "116.2956171",
            "companylat": "40.04873954",
            "companyaddress": "百度大厦",
            "displayContactNum": 20,
            "leader":{
                "name":"陈琪",
                "position":"CEO",
                "words":"公司高速发展中，<br/>欢迎有趣的小伙伴<br/>们加入！”"
            },
            "positionVo":[
                {
                    "positionId":1,
                    "positionName":"设计",
                    "salary":"15-40K"
                },{
                    "positionId":1,
                    "positionName":"设计",
                    "salary":"15-40K"
                },{
                    "positionId":1,
                    "positionName":"产品经理",
                    "salary":"15-40K"
                }
            ],
        },{
            "id": 15265,
            "financestage": "不需要融资",
            "logo": "i/image/M00/5B/5A/Cgp3O1fg3uWAEuuhAABBDg7PalQ660.png",
            "companyname": "百度在线网络技术（北京）有限公司",
            "companyshortname": "我来贷WeLab",
            "companyfeatures": "用科技让复杂的世界更简单",
            "city": "北京",
            "createtime": "Oct 13, 2013 3:49:33 PM",
            "isenable": 1,
            "approve": 2,
            "companysize": "2000人以上",
            "industryfield": "移动互联网,数据服务",
            "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
            "customerlabel": "2787",
            "approvemanid": 3634,
            "approvemanemail": "yelin@baidu.com",
            "createmanid": 10747,
            "createmanemail": "zhubaining@baidu.com",
            "companylng": "116.2956171",
            "companylat": "40.04873954",
            "companyaddress": "百度大厦",
            "displayContactNum": 20,
            "leader":{
                "name":"陈琪",
                "position":"CEO",
                "words":"公司高速发展中，<br/>欢迎有趣的小伙伴<br/>们加入！”"
            },
            "positionVo":[
                {
                    "positionId":1,
                    "positionName":"设计",
                    "salary":"15-40K"
                },{
                    "positionId":1,
                    "positionName":"设计",
                    "salary":"15-40K"
                },{
                    "positionId":1,
                    "positionName":"产品经理",
                    "salary":"15-40K"
                }
            ],
        },{
            "id": 1575,
            "financestage": "不需要融资",
            "logo": "i/image/M00/21/3E/CgpFT1kVdzeAJNbUAABJB7x9sm8374.png",
            "companyname": "百度在线网络技术（北京）有限公司",
            "companyshortname": "百度",
            "companyfeatures": "用科技让复杂的世界更简单",
            "city": "北京",
            "createtime": "Oct 13, 2013 3:49:33 PM",
            "isenable": 1,
            "approve": 2,
            "companysize": "2000人以上",
            "industryfield": "移动互联网,数据服务",
            "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
            "customerlabel": "2787",
            "approvemanid": 3634,
            "approvemanemail": "yelin@baidu.com",
            "createmanid": 10747,
            "createmanemail": "zhubaining@baidu.com",
            "companylng": "116.2956171",
            "companylat": "40.04873954",
            "companyaddress": "百度大厦",
            "displayContactNum": 20,
            "leader":{
                "name":"陈琪",
                "position":"CEO",
                "words":"公司高速发展中，<br/>欢迎有趣的小伙伴<br/>们加入！”"
            },
            "positionVo":[
                {
                    "positionId":1,
                    "positionName":"设计",
                    "salary":"15-40K"
                },{
                    "positionId":1,
                    "positionName":"设计",
                    "salary":"15-40K"
                },{
                    "positionId":1,
                    "positionName":"产品经理",
                    "salary":"15-40K"
                }
            ],
        },{
            "id": 38079,
            "financestage": "不需要融资",
            "logo": "i/image/M00/03/BD/CgqKkVbC5DyAYlIvAAAMhxAJc1Y825.jpg",
            "companyname": "百度在线网络技术（北京）有限公司",
            "companyshortname": "GYENNO",
            "companyfeatures": "用科技让复杂的世界更简单",
            "city": "北京",
            "createtime": "Oct 13, 2013 3:49:33 PM",
            "isenable": 1,
            "approve": 2,
            "companysize": "2000人以上",
            "industryfield": "移动互联网,数据服务",
            "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
            "customerlabel": "2787",
            "approvemanid": 3634,
            "approvemanemail": "yelin@baidu.com",
            "createmanid": 10747,
            "createmanemail": "zhubaining@baidu.com",
            "companylng": "116.2956171",
            "companylat": "40.04873954",
            "companyaddress": "百度大厦",
            "displayContactNum": 20,
            "leader":{
                "name":"陈琪",
                "position":"CEO",
                "words":"公司高速发展中，<br/>欢迎有趣的小伙伴<br/>们加入！”"
            },
            "positionVo":[
                {
                    "positionId":1,
                    "positionName":"设计",
                    "salary":"15-40K"
                },{
                    "positionId":1,
                    "positionName":"设计",
                    "salary":"15-40K"
                },{
                    "positionId":1,
                    "positionName":"产品经理",
                    "salary":"15-40K"
                }
            ],
        }],
        localCount:1000,
        localList:[{
            "id": 312260,
            "financestage": "不需要融资",
            "logo": "i/image/M00/7F/B5/CgpFT1pV0aKAF4u8AABVMWtorEo579.png",
            "companyname": "百度在线网络技术（北京）有限公司",
            "companyshortname": "拉勾网",
            "companyfeatures": "用科技让复杂的世界更简单",
            "city": "北京",
            "createtime": "Oct 13, 2013 3:49:33 PM",
            "isenable": 1,
            "approve": 2,
            "companysize": "2000人以上",
            "industryfield": "移动互联网,数据服务",
            "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
            "customerlabel": "2787",
            "approvemanid": 3634,
            "approvemanemail": "yelin@baidu.com",
            "createmanid": 10747,
            "createmanemail": "zhubaining@baidu.com",
            "companylng": "116.2956171",
            "companylat": "40.04873954",
            "companyaddress": "百度大厦",
            "displayContactNum": 20,
            "leader":{
                "name":"陈琪",
                "position":"CEO",
                "words":"公司高速发展中，<br/>欢迎有趣的小伙伴<br/>们加入！”"
            },
            "positionVo":[
                {
                    "positionId":1,
                    "positionName":"设计",
                    "salary":"15-40K"
                },{
                    "positionId":1,
                    "positionName":"设计",
                    "salary":"15-40K"
                },{
                    "positionId":1,
                    "positionName":"产品经理",
                    "salary":"15-40K"
                }
            ],
        },{
            "id": 15265,
            "financestage": "不需要融资",
            "logo": "i/image/M00/5B/5A/Cgp3O1fg3uWAEuuhAABBDg7PalQ660.png",
            "companyname": "百度在线网络技术（北京）有限公司",
            "companyshortname": "我来贷WeLab",
            "companyfeatures": "用科技让复杂的世界更简单",
            "city": "北京",
            "createtime": "Oct 13, 2013 3:49:33 PM",
            "isenable": 1,
            "approve": 2,
            "companysize": "2000人以上",
            "industryfield": "移动互联网,数据服务",
            "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
            "customerlabel": "2787",
            "approvemanid": 3634,
            "approvemanemail": "yelin@baidu.com",
            "createmanid": 10747,
            "createmanemail": "zhubaining@baidu.com",
            "companylng": "116.2956171",
            "companylat": "40.04873954",
            "companyaddress": "百度大厦",
            "displayContactNum": 20,
            "leader":{
                "name":"陈琪",
                "position":"CEO",
                "words":"公司高速发展中，<br/>欢迎有趣的小伙伴<br/>们加入！”"
            },
            "positionVo":[
                {
                    "positionId":1,
                    "positionName":"设计",
                    "salary":"15-40K"
                },{
                    "positionId":1,
                    "positionName":"设计",
                    "salary":"15-40K"
                },{
                    "positionId":1,
                    "positionName":"产品经理",
                    "salary":"15-40K"
                }
            ],
        },{
            "id": 1575,
            "financestage": "不需要融资",
            "logo": "i/image/M00/21/3E/CgpFT1kVdzeAJNbUAABJB7x9sm8374.png",
            "companyname": "百度在线网络技术（北京）有限公司",
            "companyshortname": "百度",
            "companyfeatures": "用科技让复杂的世界更简单",
            "city": "北京",
            "createtime": "Oct 13, 2013 3:49:33 PM",
            "isenable": 1,
            "approve": 2,
            "companysize": "2000人以上",
            "industryfield": "移动互联网,数据服务",
            "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
            "customerlabel": "2787",
            "approvemanid": 3634,
            "approvemanemail": "yelin@baidu.com",
            "createmanid": 10747,
            "createmanemail": "zhubaining@baidu.com",
            "companylng": "116.2956171",
            "companylat": "40.04873954",
            "companyaddress": "百度大厦",
            "displayContactNum": 20,
            "leader":{
                "name":"陈琪",
                "position":"CEO",
                "words":"公司高速发展中，<br/>欢迎有趣的小伙伴<br/>们加入！”"
            },
            "positionVo":[
                {
                    "positionId":1,
                    "positionName":"设计",
                    "salary":"15-40K"
                },{
                    "positionId":1,
                    "positionName":"设计",
                    "salary":"15-40K"
                },{
                    "positionId":1,
                    "positionName":"产品经理",
                    "salary":"15-40K"
                }
            ],
        },{
            "id": 38079,
            "financestage": "不需要融资",
            "logo": "i/image/M00/03/BD/CgqKkVbC5DyAYlIvAAAMhxAJc1Y825.jpg",
            "companyname": "百度在线网络技术（北京）有限公司",
            "companyshortname": "GYENNO",
            "companyfeatures": "用科技让复杂的世界更简单",
            "city": "北京",
            "createtime": "Oct 13, 2013 3:49:33 PM",
            "isenable": 1,
            "approve": 2,
            "companysize": "2000人以上",
            "industryfield": "移动互联网,数据服务",
            "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
            "customerlabel": "2787",
            "approvemanid": 3634,
            "approvemanemail": "yelin@baidu.com",
            "createmanid": 10747,
            "createmanemail": "zhubaining@baidu.com",
            "companylng": "116.2956171",
            "companylat": "40.04873954",
            "companyaddress": "百度大厦",
            "displayContactNum": 20,
            "leader":{
                "name":"陈琪",
                "position":"CEO",
                "words":"公司高速发展中，<br/>欢迎有趣的小伙伴<br/>们加入！”"
            },
            "positionVo":[
                {
                    "positionId":1,
                    "positionName":"设计",
                    "salary":"15-40K"
                },{
                    "positionId":1,
                    "positionName":"设计",
                    "salary":"15-40K"
                },{
                    "positionId":1,
                    "positionName":"产品经理",
                    "salary":"15-40K"
                }
            ],
        },{
            "id": 312260,
            "financestage": "不需要融资",
            "logo": "i/image/M00/7F/B5/CgpFT1pV0aKAF4u8AABVMWtorEo579.png",
            "companyname": "百度在线网络技术（北京）有限公司",
            "companyshortname": "拉勾网",
            "companyfeatures": "用科技让复杂的世界更简单",
            "city": "北京",
            "createtime": "Oct 13, 2013 3:49:33 PM",
            "isenable": 1,
            "approve": 2,
            "companysize": "2000人以上",
            "industryfield": "移动互联网,数据服务",
            "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
            "customerlabel": "2787",
            "approvemanid": 3634,
            "approvemanemail": "yelin@baidu.com",
            "createmanid": 10747,
            "createmanemail": "zhubaining@baidu.com",
            "companylng": "116.2956171",
            "companylat": "40.04873954",
            "companyaddress": "百度大厦",
            "displayContactNum": 20,
            "leader":{
                "name":"陈琪",
                "position":"CEO",
                "words":"公司高速发展中，<br/>欢迎有趣的小伙伴<br/>们加入！”"
            },
            "positionVo":[
                {
                    "positionId":1,
                    "positionName":"设计",
                    "salary":"15-40K"
                },{
                    "positionId":1,
                    "positionName":"设计",
                    "salary":"15-40K"
                },{
                    "positionId":1,
                    "positionName":"产品经理",
                    "salary":"15-40K"
                }
            ],
        },{
            "id": 15265,
            "financestage": "不需要融资",
            "logo": "i/image/M00/5B/5A/Cgp3O1fg3uWAEuuhAABBDg7PalQ660.png",
            "companyname": "百度在线网络技术（北京）有限公司",
            "companyshortname": "我来贷WeLab",
            "companyfeatures": "用科技让复杂的世界更简单",
            "city": "北京",
            "createtime": "Oct 13, 2013 3:49:33 PM",
            "isenable": 1,
            "approve": 2,
            "companysize": "2000人以上",
            "industryfield": "移动互联网,数据服务",
            "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
            "customerlabel": "2787",
            "approvemanid": 3634,
            "approvemanemail": "yelin@baidu.com",
            "createmanid": 10747,
            "createmanemail": "zhubaining@baidu.com",
            "companylng": "116.2956171",
            "companylat": "40.04873954",
            "companyaddress": "百度大厦",
            "displayContactNum": 20,
            "leader":{
                "name":"陈琪",
                "position":"CEO",
                "words":"公司高速发展中，<br/>欢迎有趣的小伙伴<br/>们加入！”"
            },
            "positionVo":[
                {
                    "positionId":1,
                    "positionName":"设计",
                    "salary":"15-40K"
                },{
                    "positionId":1,
                    "positionName":"设计",
                    "salary":"15-40K"
                },{
                    "positionId":1,
                    "positionName":"产品经理",
                    "salary":"15-40K"
                }
            ],
        },{
            "id": 1575,
            "financestage": "不需要融资",
            "logo": "i/image/M00/21/3E/CgpFT1kVdzeAJNbUAABJB7x9sm8374.png",
            "companyname": "百度在线网络技术（北京）有限公司",
            "companyshortname": "百度",
            "companyfeatures": "用科技让复杂的世界更简单",
            "city": "北京",
            "createtime": "Oct 13, 2013 3:49:33 PM",
            "isenable": 1,
            "approve": 2,
            "companysize": "2000人以上",
            "industryfield": "移动互联网,数据服务",
            "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
            "customerlabel": "2787",
            "approvemanid": 3634,
            "approvemanemail": "yelin@baidu.com",
            "createmanid": 10747,
            "createmanemail": "zhubaining@baidu.com",
            "companylng": "116.2956171",
            "companylat": "40.04873954",
            "companyaddress": "百度大厦",
            "displayContactNum": 20,
            "leader":{
                "name":"陈琪",
                "position":"CEO",
                "words":"公司高速发展中，<br/>欢迎有趣的小伙伴<br/>们加入！”"
            },
            "positionVo":[
                {
                    "positionId":1,
                    "positionName":"设计",
                    "salary":"15-40K"
                },{
                    "positionId":1,
                    "positionName":"设计",
                    "salary":"15-40K"
                },{
                    "positionId":1,
                    "positionName":"产品经理",
                    "salary":"15-40K"
                }
            ],
        },{
            "id": 38079,
            "financestage": "不需要融资",
            "logo": "i/image/M00/03/BD/CgqKkVbC5DyAYlIvAAAMhxAJc1Y825.jpg",
            "companyname": "百度在线网络技术（北京）有限公司",
            "companyshortname": "GYENNO",
            "companyfeatures": "用科技让复杂的世界更简单",
            "city": "北京",
            "createtime": "Oct 13, 2013 3:49:33 PM",
            "isenable": 1,
            "approve": 2,
            "companysize": "2000人以上",
            "industryfield": "移动互联网,数据服务",
            "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
            "customerlabel": "2787",
            "approvemanid": 3634,
            "approvemanemail": "yelin@baidu.com",
            "createmanid": 10747,
            "createmanemail": "zhubaining@baidu.com",
            "companylng": "116.2956171",
            "companylat": "40.04873954",
            "companyaddress": "百度大厦",
            "displayContactNum": 20,
            "leader":{
                "name":"陈琪",
                "position":"CEO",
                "words":"公司高速发展中，<br/>欢迎有趣的小伙伴<br/>们加入！”"
            },
            "positionVo":[
                {
                    "positionId":1,
                    "positionName":"设计",
                    "salary":"15-40K"
                },{
                    "positionId":1,
                    "positionName":"设计",
                    "salary":"15-40K"
                },{
                    "positionId":1,
                    "positionName":"产品经理",
                    "salary":"15-40K"
                }
            ],
        }],
        topCount:3000,
        topActiveIndex:[0,0,0,0],
        topTime:Date.now(),
        topList:[
            [{
                "id": 312260,
                "financestage": "不需要融资",
                "logo": "i/image/M00/7F/B5/CgpFT1pV0aKAF4u8AABVMWtorEo579.png",
                "companyname": "百度在线网络技术（北京）有限公司",
                "companyshortname": "拉勾网",
                "companyfeatures": "用科技让复杂的世界更简单",
                "city": "北京",
                "createtime": "Oct 13, 2013 3:49:33 PM",
                "isenable": 1,
                "approve": 2,
                "companysize": "2000人以上",
                "industryfield": "移动互联网,数据服务",
                "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                "customerlabel": "2787",
                "approvemanid": 3634,
                "approvemanemail": "yelin@baidu.com",
                "createmanid": 10747,
                "createmanemail": "zhubaining@baidu.com",
                "companylng": "116.2956171",
                "companylat": "40.04873954",
                "companyaddress": "百度大厦",
                "displayContactNum": 20,
                "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
                "positionVo":[
                    {
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
            },{
                "id": 15265,
                "financestage": "不需要融资",
                "logo": "i/image/M00/5B/5A/Cgp3O1fg3uWAEuuhAABBDg7PalQ660.png",
                "companyname": "百度在线网络技术（北京）有限公司",
                "companyshortname": "我来贷WeLab",
                "companyfeatures": "用科技让复杂的世界更简单",
                "city": "北京",
                "createtime": "Oct 13, 2013 3:49:33 PM",
                "isenable": 1,
                "approve": 2,
                "companysize": "2000人以上",
                "industryfield": "移动互联网,数据服务",
                "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                "customerlabel": "2787",
                "approvemanid": 3634,
                "approvemanemail": "yelin@baidu.com",
                "createmanid": 10747,
                "createmanemail": "zhubaining@baidu.com",
                "companylng": "116.2956171",
                "companylat": "40.04873954",
                "companyaddress": "百度大厦",
                "displayContactNum": 20,
                "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
                "positionVo":[
                    {
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
            },{
                "id": 1575,
                "financestage": "不需要融资",
                "logo": "i/image/M00/21/3E/CgpFT1kVdzeAJNbUAABJB7x9sm8374.png",
                "companyname": "百度在线网络技术（北京）有限公司",
                "companyshortname": "百度",
                "companyfeatures": "用科技让复杂的世界更简单",
                "city": "北京",
                "createtime": "Oct 13, 2013 3:49:33 PM",
                "isenable": 1,
                "approve": 2,
                "companysize": "2000人以上",
                "industryfield": "移动互联网,数据服务",
                "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                "customerlabel": "2787",
                "approvemanid": 3634,
                "approvemanemail": "yelin@baidu.com",
                "createmanid": 10747,
                "createmanemail": "zhubaining@baidu.com",
                "companylng": "116.2956171",
                "companylat": "40.04873954",
                "companyaddress": "百度大厦",
                "displayContactNum": 20,
                "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
                "positionVo":[
                    {
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
            },{
                "id": 38079,
                "financestage": "不需要融资",
                "logo": "i/image/M00/03/BD/CgqKkVbC5DyAYlIvAAAMhxAJc1Y825.jpg",
                "companyname": "百度在线网络技术（北京）有限公司",
                "companyshortname": "GYENNO",
                "companyfeatures": "用科技让复杂的世界更简单",
                "city": "北京",
                "createtime": "Oct 13, 2013 3:49:33 PM",
                "isenable": 1,
                "approve": 2,
                "companysize": "2000人以上",
                "industryfield": "移动互联网,数据服务",
                "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                "customerlabel": "2787",
                "approvemanid": 3634,
                "approvemanemail": "yelin@baidu.com",
                "createmanid": 10747,
                "createmanemail": "zhubaining@baidu.com",
                "companylng": "116.2956171",
                "companylat": "40.04873954",
                "companyaddress": "百度大厦",
                "displayContactNum": 20,
                "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
                "positionVo":[
                    {
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
            },{
                "id": 312260,
                "financestage": "不需要融资",
                "logo": "i/image/M00/7F/B5/CgpFT1pV0aKAF4u8AABVMWtorEo579.png",
                "companyname": "百度在线网络技术（北京）有限公司",
                "companyshortname": "拉勾网",
                "companyfeatures": "用科技让复杂的世界更简单",
                "city": "北京",
                "createtime": "Oct 13, 2013 3:49:33 PM",
                "isenable": 1,
                "approve": 2,
                "companysize": "2000人以上",
                "industryfield": "移动互联网,数据服务",
                "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                "customerlabel": "2787",
                "approvemanid": 3634,
                "approvemanemail": "yelin@baidu.com",
                "createmanid": 10747,
                "createmanemail": "zhubaining@baidu.com",
                "companylng": "116.2956171",
                "companylat": "40.04873954",
                "companyaddress": "百度大厦",
                "displayContactNum": 20,
                "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
                "positionVo":[
                    {
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
            }],
            [{
                "id": 312260,
                "financestage": "不需要融资",
                "logo": "i/image/M00/7F/B5/CgpFT1pV0aKAF4u8AABVMWtorEo579.png",
                "companyname": "百度在线网络技术（北京）有限公司",
                "companyshortname": "拉勾网",
                "companyfeatures": "用科技让复杂的世界更简单",
                "city": "北京",
                "createtime": "Oct 13, 2013 3:49:33 PM",
                "isenable": 1,
                "approve": 2,
                "companysize": "2000人以上",
                "industryfield": "移动互联网,数据服务",
                "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                "customerlabel": "2787",
                "approvemanid": 3634,
                "approvemanemail": "yelin@baidu.com",
                "createmanid": 10747,
                "createmanemail": "zhubaining@baidu.com",
                "companylng": "116.2956171",
                "companylat": "40.04873954",
                "companyaddress": "百度大厦",
                "displayContactNum": 20,
                "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
                "positionVo":[
                    {
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
            },{
                "id": 15265,
                "financestage": "不需要融资",
                "logo": "i/image/M00/5B/5A/Cgp3O1fg3uWAEuuhAABBDg7PalQ660.png",
                "companyname": "百度在线网络技术（北京）有限公司",
                "companyshortname": "我来贷WeLab",
                "companyfeatures": "用科技让复杂的世界更简单",
                "city": "北京",
                "createtime": "Oct 13, 2013 3:49:33 PM",
                "isenable": 1,
                "approve": 2,
                "companysize": "2000人以上",
                "industryfield": "移动互联网,数据服务",
                "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                "customerlabel": "2787",
                "approvemanid": 3634,
                "approvemanemail": "yelin@baidu.com",
                "createmanid": 10747,
                "createmanemail": "zhubaining@baidu.com",
                "companylng": "116.2956171",
                "companylat": "40.04873954",
                "companyaddress": "百度大厦",
                "displayContactNum": 20,
                "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
                "positionVo":[
                    {
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
            },{
                "id": 1575,
                "financestage": "不需要融资",
                "logo": "i/image/M00/21/3E/CgpFT1kVdzeAJNbUAABJB7x9sm8374.png",
                "companyname": "百度在线网络技术（北京）有限公司",
                "companyshortname": "百度",
                "companyfeatures": "用科技让复杂的世界更简单",
                "city": "北京",
                "createtime": "Oct 13, 2013 3:49:33 PM",
                "isenable": 1,
                "approve": 2,
                "companysize": "2000人以上",
                "industryfield": "移动互联网,数据服务",
                "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                "customerlabel": "2787",
                "approvemanid": 3634,
                "approvemanemail": "yelin@baidu.com",
                "createmanid": 10747,
                "createmanemail": "zhubaining@baidu.com",
                "companylng": "116.2956171",
                "companylat": "40.04873954",
                "companyaddress": "百度大厦",
                "displayContactNum": 20,
                "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
                "positionVo":[
                    {
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
            },{
                "id": 38079,
                "financestage": "不需要融资",
                "logo": "i/image/M00/03/BD/CgqKkVbC5DyAYlIvAAAMhxAJc1Y825.jpg",
                "companyname": "百度在线网络技术（北京）有限公司",
                "companyshortname": "GYENNO",
                "companyfeatures": "用科技让复杂的世界更简单",
                "city": "北京",
                "createtime": "Oct 13, 2013 3:49:33 PM",
                "isenable": 1,
                "approve": 2,
                "companysize": "2000人以上",
                "industryfield": "移动互联网,数据服务",
                "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                "customerlabel": "2787",
                "approvemanid": 3634,
                "approvemanemail": "yelin@baidu.com",
                "createmanid": 10747,
                "createmanemail": "zhubaining@baidu.com",
                "companylng": "116.2956171",
                "companylat": "40.04873954",
                "companyaddress": "百度大厦",
                "displayContactNum": 20,
                "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
                "positionVo":[
                    {
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
            },{
                "id": 312260,
                "financestage": "不需要融资",
                "logo": "i/image/M00/7F/B5/CgpFT1pV0aKAF4u8AABVMWtorEo579.png",
                "companyname": "百度在线网络技术（北京）有限公司",
                "companyshortname": "拉勾网",
                "companyfeatures": "用科技让复杂的世界更简单",
                "city": "北京",
                "createtime": "Oct 13, 2013 3:49:33 PM",
                "isenable": 1,
                "approve": 2,
                "companysize": "2000人以上",
                "industryfield": "移动互联网,数据服务",
                "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                "customerlabel": "2787",
                "approvemanid": 3634,
                "approvemanemail": "yelin@baidu.com",
                "createmanid": 10747,
                "createmanemail": "zhubaining@baidu.com",
                "companylng": "116.2956171",
                "companylat": "40.04873954",
                "companyaddress": "百度大厦",
                "displayContactNum": 20,
                "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
                "positionVo":[
                    {
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
            }],
            [{
                "id": 312260,
                "financestage": "不需要融资",
                "logo": "i/image/M00/7F/B5/CgpFT1pV0aKAF4u8AABVMWtorEo579.png",
                "companyname": "百度在线网络技术（北京）有限公司",
                "companyshortname": "拉勾网",
                "companyfeatures": "用科技让复杂的世界更简单",
                "city": "北京",
                "createtime": "Oct 13, 2013 3:49:33 PM",
                "isenable": 1,
                "approve": 2,
                "companysize": "2000人以上",
                "industryfield": "移动互联网,数据服务",
                "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                "customerlabel": "2787",
                "approvemanid": 3634,
                "approvemanemail": "yelin@baidu.com",
                "createmanid": 10747,
                "createmanemail": "zhubaining@baidu.com",
                "companylng": "116.2956171",
                "companylat": "40.04873954",
                "companyaddress": "百度大厦",
                "displayContactNum": 20,
                "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
                "positionVo":[
                    {
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
            },{
                "id": 15265,
                "financestage": "不需要融资",
                "logo": "i/image/M00/5B/5A/Cgp3O1fg3uWAEuuhAABBDg7PalQ660.png",
                "companyname": "百度在线网络技术（北京）有限公司",
                "companyshortname": "我来贷WeLab",
                "companyfeatures": "用科技让复杂的世界更简单",
                "city": "北京",
                "createtime": "Oct 13, 2013 3:49:33 PM",
                "isenable": 1,
                "approve": 2,
                "companysize": "2000人以上",
                "industryfield": "移动互联网,数据服务",
                "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                "customerlabel": "2787",
                "approvemanid": 3634,
                "approvemanemail": "yelin@baidu.com",
                "createmanid": 10747,
                "createmanemail": "zhubaining@baidu.com",
                "companylng": "116.2956171",
                "companylat": "40.04873954",
                "companyaddress": "百度大厦",
                "displayContactNum": 20,
                "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
                "positionVo":[
                    {
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
            },{
                "id": 1575,
                "financestage": "不需要融资",
                "logo": "i/image/M00/21/3E/CgpFT1kVdzeAJNbUAABJB7x9sm8374.png",
                "companyname": "百度在线网络技术（北京）有限公司",
                "companyshortname": "百度",
                "companyfeatures": "用科技让复杂的世界更简单",
                "city": "北京",
                "createtime": "Oct 13, 2013 3:49:33 PM",
                "isenable": 1,
                "approve": 2,
                "companysize": "2000人以上",
                "industryfield": "移动互联网,数据服务",
                "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                "customerlabel": "2787",
                "approvemanid": 3634,
                "approvemanemail": "yelin@baidu.com",
                "createmanid": 10747,
                "createmanemail": "zhubaining@baidu.com",
                "companylng": "116.2956171",
                "companylat": "40.04873954",
                "companyaddress": "百度大厦",
                "displayContactNum": 20,
                "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
                "positionVo":[
                    {
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
            },{
                "id": 38079,
                "financestage": "不需要融资",
                "logo": "i/image/M00/03/BD/CgqKkVbC5DyAYlIvAAAMhxAJc1Y825.jpg",
                "companyname": "百度在线网络技术（北京）有限公司",
                "companyshortname": "GYENNO",
                "companyfeatures": "用科技让复杂的世界更简单",
                "city": "北京",
                "createtime": "Oct 13, 2013 3:49:33 PM",
                "isenable": 1,
                "approve": 2,
                "companysize": "2000人以上",
                "industryfield": "移动互联网,数据服务",
                "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                "customerlabel": "2787",
                "approvemanid": 3634,
                "approvemanemail": "yelin@baidu.com",
                "createmanid": 10747,
                "createmanemail": "zhubaining@baidu.com",
                "companylng": "116.2956171",
                "companylat": "40.04873954",
                "companyaddress": "百度大厦",
                "displayContactNum": 20,
                "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
                "positionVo":[
                    {
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
            },{
                "id": 312260,
                "financestage": "不需要融资",
                "logo": "i/image/M00/7F/B5/CgpFT1pV0aKAF4u8AABVMWtorEo579.png",
                "companyname": "百度在线网络技术（北京）有限公司",
                "companyshortname": "拉勾网",
                "companyfeatures": "用科技让复杂的世界更简单",
                "city": "北京",
                "createtime": "Oct 13, 2013 3:49:33 PM",
                "isenable": 1,
                "approve": 2,
                "companysize": "2000人以上",
                "industryfield": "移动互联网,数据服务",
                "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                "customerlabel": "2787",
                "approvemanid": 3634,
                "approvemanemail": "yelin@baidu.com",
                "createmanid": 10747,
                "createmanemail": "zhubaining@baidu.com",
                "companylng": "116.2956171",
                "companylat": "40.04873954",
                "companyaddress": "百度大厦",
                "displayContactNum": 20,
                "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
                "positionVo":[
                    {
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
            }],
            [{
                "id": 312260,
                "financestage": "不需要融资",
                "logo": "i/image/M00/7F/B5/CgpFT1pV0aKAF4u8AABVMWtorEo579.png",
                "companyname": "百度在线网络技术（北京）有限公司",
                "companyshortname": "拉勾网",
                "companyfeatures": "用科技让复杂的世界更简单",
                "city": "北京",
                "createtime": "Oct 13, 2013 3:49:33 PM",
                "isenable": 1,
                "approve": 2,
                "companysize": "2000人以上",
                "industryfield": "移动互联网,数据服务",
                "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                "customerlabel": "2787",
                "approvemanid": 3634,
                "approvemanemail": "yelin@baidu.com",
                "createmanid": 10747,
                "createmanemail": "zhubaining@baidu.com",
                "companylng": "116.2956171",
                "companylat": "40.04873954",
                "companyaddress": "百度大厦",
                "displayContactNum": 20,
                "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
                "positionVo":[
                    {
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
            },{
                "id": 15265,
                "financestage": "不需要融资",
                "logo": "i/image/M00/5B/5A/Cgp3O1fg3uWAEuuhAABBDg7PalQ660.png",
                "companyname": "百度在线网络技术（北京）有限公司",
                "companyshortname": "我来贷WeLab",
                "companyfeatures": "用科技让复杂的世界更简单",
                "city": "北京",
                "createtime": "Oct 13, 2013 3:49:33 PM",
                "isenable": 1,
                "approve": 2,
                "companysize": "2000人以上",
                "industryfield": "移动互联网,数据服务",
                "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                "customerlabel": "2787",
                "approvemanid": 3634,
                "approvemanemail": "yelin@baidu.com",
                "createmanid": 10747,
                "createmanemail": "zhubaining@baidu.com",
                "companylng": "116.2956171",
                "companylat": "40.04873954",
                "companyaddress": "百度大厦",
                "displayContactNum": 20,
                "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
                "positionVo":[
                    {
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
            },{
                "id": 1575,
                "financestage": "不需要融资",
                "logo": "i/image/M00/21/3E/CgpFT1kVdzeAJNbUAABJB7x9sm8374.png",
                "companyname": "百度在线网络技术（北京）有限公司",
                "companyshortname": "百度",
                "companyfeatures": "用科技让复杂的世界更简单",
                "city": "北京",
                "createtime": "Oct 13, 2013 3:49:33 PM",
                "isenable": 1,
                "approve": 2,
                "companysize": "2000人以上",
                "industryfield": "移动互联网,数据服务",
                "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                "customerlabel": "2787",
                "approvemanid": 3634,
                "approvemanemail": "yelin@baidu.com",
                "createmanid": 10747,
                "createmanemail": "zhubaining@baidu.com",
                "companylng": "116.2956171",
                "companylat": "40.04873954",
                "companyaddress": "百度大厦",
                "displayContactNum": 20,
                "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
                "positionVo":[
                    {
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
            },{
                "id": 38079,
                "financestage": "不需要融资",
                "logo": "i/image/M00/03/BD/CgqKkVbC5DyAYlIvAAAMhxAJc1Y825.jpg",
                "companyname": "百度在线网络技术（北京）有限公司",
                "companyshortname": "GYENNO",
                "companyfeatures": "用科技让复杂的世界更简单",
                "city": "北京",
                "createtime": "Oct 13, 2013 3:49:33 PM",
                "isenable": 1,
                "approve": 2,
                "companysize": "2000人以上",
                "industryfield": "移动互联网,数据服务",
                "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                "customerlabel": "2787",
                "approvemanid": 3634,
                "approvemanemail": "yelin@baidu.com",
                "createmanid": 10747,
                "createmanemail": "zhubaining@baidu.com",
                "companylng": "116.2956171",
                "companylat": "40.04873954",
                "companyaddress": "百度大厦",
                "displayContactNum": 20,
                "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
                "positionVo":[
                    {
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
            },{
                "id": 312260,
                "financestage": "不需要融资",
                "logo": "i/image/M00/7F/B5/CgpFT1pV0aKAF4u8AABVMWtorEo579.png",
                "companyname": "百度在线网络技术（北京）有限公司",
                "companyshortname": "拉勾网",
                "companyfeatures": "用科技让复杂的世界更简单",
                "city": "北京",
                "createtime": "Oct 13, 2013 3:49:33 PM",
                "isenable": 1,
                "approve": 2,
                "companysize": "2000人以上",
                "industryfield": "移动互联网,数据服务",
                "otherlabel": "股票期权,弹性工作,五险一金,免费班车,岗位晋升,节日礼物,大数据,广告,工程师文化",
                "customerlabel": "2787",
                "approvemanid": 3634,
                "approvemanemail": "yelin@baidu.com",
                "createmanid": 10747,
                "createmanemail": "zhubaining@baidu.com",
                "companylng": "116.2956171",
                "companylat": "40.04873954",
                "companyaddress": "百度大厦",
                "displayContactNum": 20,
                "words":'“公司高速发展中， 欢迎有趣的小伙伴们加入！” ',
                "positionVo":[
                    {
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"设计",
                        "salary":"15-40K"
                    },{
                        "positionId":1,
                        "positionName":"产品经理",
                        "salary":"15-40K"
                    }
                ],
            }]
        ],
        othersCount:5000,
        corperateCount:6000,
        isAPP:false,
        isiPhone:false,
        testStatus:false,
        partnerStatus:false,
        browserType:0,  // 浏览器类型
        loadedCount:0,  // js、css加载数量
        employerAnimation:{},
        floating:{
            count:'f000',
            status:false,
        },
    },
    methods:{
        setLogoHref:function(logo){
            if(logo){
                if(logo.indexOf('i/image') == 0 || 
                    logo.indexOf('image1') == 0 || 
                    logo.indexOf('image2') == 0){
                    return this.logoHref + logo
                }else if(logo.indexOf('http') == 0){
                    return logo
                }else {
                    return this.logoHrefO + logo
                }
            }else{
                return '';
            }
        },
        labelList:function(labels){
            var arr = (labels ? labels : '').split(/[,.、。|·]/g),
                brr = [],
                i = 0
            for(i = 0; i < arr.length; i++){
                if(arr[i].trim()){
                    brr.push(arr[i].trim())
                }
            }
            return brr
        },
        getCount:function(num){
            return '0000'.slice((num+'').length)+num
        },
        changeEmployerActiveIndex:function(index){
            if(index == 0){
                this.employerActiveIndex = this.employerList.length - 1
            }else{
                this.employerActiveIndex = (index-1) % this.employerList.length
            }
        },
        employerSlideTo:function(index){
            this.$refs['employerSwiper'].swiper.slideTo(index+1)
        },
        employerSlidePrev:function(){
            this.$refs['employerSwiper'].swiper.slidePrev()
        },
        employerSlideNext:function(){
            this.$refs['employerSwiper'].swiper.slideNext()
        },
        showCurrentCompany:function(pindex,index){
            this.topActiveIndex[pindex] = index
            this.topTime = Date.now()
        },
        getCorperateRow:function(index){
            return Math.floor(index / 6)
        },
        topCurrent:function(pindex){
            return this.topList[pindex][this.topActiveIndex[pindex]]
        },
        floatingCloseEvent:function(){
            this.floating.status = false;
        },
        getTabHeight:function(){
            var list = this.tab.list,
                elem = null,
                parent = [],
                height = 0,
                top = 0,
                status = false,
                i = 0,j = 0;
            for(i = 0; i < list.length; i++){
                if(list[i].elem){
                    elem = this.$refs[list[i].elem];
                    top = 0;
                    height = 0;
                    if(list[i].parent){
                        parent = list[i].parent;
                        for(j = 0; j < parent.length; j++){
                            top += this.tab.list[parent[j]].offsetTop;
                            // height += this.tab.list[parent[j]].height;
                        }
                        // top += elem.offsetTop;
                        top += this.getPX(list[i].top)
                    }else{
                        top += elem.offsetTop;
                    }
                    if(list[i].initHeight){
                        height = this.getPX(list[i].initHeight);
                    }else{
                        height = elem.offsetHeight;
                    }
                    if(list[i].offsetTop != top || list[i].height != height){
                        this.tab.list[i].offsetTop = top;
                        this.tab.list[i].height = height;
                        status = true
                    }
                }
            }
            if(!status) {
                this.tab.status = true;
            }
        },
        toTopEvent:function(){
            $('html,body').animate({'scrollTop': 0},500);
        },
        tabClickEvent:function(index,e){
            var self = this;
            this.tab.active_index = index;
            this.tab.click_status = true;
            if(this.tab.list[index].elem){
                // if(!this.tab.status){
                    this.getTabHeight();
                    this.tab.offsetTop = this.$refs['yh-center__tab'].offsetTop;
                // }
                $('html,body').animate({'scrollTop': this.tab.list[index].offsetTop+ "px"},500,function(){
                    self.tab.click_status = false;
                });
            }else{  // 跳页面
                window.location.href = this.tab.list[index].href
            }
        },
        isObject:function(e){
            return e instanceof Object
        },
        getComputedValue:function(elem,attribute){
            var value = window.getComputedStyle(elem,null).getPropertyValue(attribute);
            return value;
        },
        getPointValue:function(elem,attribute){
            if(!elem || elem.length == 0){
                return 0
            }
            var value = window.getComputedStyle(elem,null).getPropertyValue(attribute);
            return parseFloat(parseFloat(value).toFixed(2));
        },
        getPointWidth:function(elem){
            var value = this.getPointValue(elem,"width"); //window.getComputedStyle(elem[0],null).getPropertyValue("width");
            return value;
        },
        getPointOuterWidth:function(elem){
            var width =  this.getPointValue(elem,"width"), //window.getComputedStyle(elem[0],null).getPropertyValue("width");
                left = this.getPointValue(elem,"padding-left"),
                right = this.getPointValue(elem,"padding-right"),
                value = width + left + right;
            return value;
        },
        addCssByLink:function(url, callback) {
            var doc = document;
            var link = doc.createElement("link");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("type", "text/css");
            link.setAttribute("href", url);
            
            var heads = doc.getElementsByTagName("head");
            if (heads.length)
                heads[0].appendChild(link);
            else
                doc.documentElement.appendChild(link);
            link.onload = function() {
                callback();
            }
        },
        addScript:function(url, callback) {
            var script = document.createElement("script");
            script.setAttribute("type", "text/javascript");
            script.setAttribute("src", url);
            var heads = document.getElementsByTagName("head");
            if (heads.length)
                heads[0].appendChild(script);
            else
                document.documentElement.appendChild(script);
            script.onload = function() {
                callback();
            }
        },
        getBrowserType:function(){
            var userAgent = window.navigator.userAgent; //取得浏览器的userAgent字符串
            var isOpera = userAgent.indexOf("Opera") > -1;
            var browserType = 0;
            if (isOpera) { //判断是否Opera浏览器
                browserType = 0;
            } else if (userAgent.indexOf("Firefox") > -1) { //判断是否Firefox浏览器
                browserType = 1;
            } else if (userAgent.indexOf("Chrome") > -1) { //判断是否Chrome浏览器
                browserType = 2;
            } else if (userAgent.indexOf("Safari") > -1) { //判断是否Safari浏览器
                browserType = 3;
            } else if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) { //判断是否IE浏览器
                /*if(userAgent.match(/6./i)=="6."){
                    browserType = 6;
                    }else if(userAgent.match(/7./i)=="7."){
                    browserType = 6;
                    }else if(userAgent.match(/8./i)=="8."){
                    browserType = 6;
                    }*/
                if (userAgent.match(/9./i) == "9." || userAgent.match(/10./i) == "10.") {
                    browserType = 4;
                } else {
                    browserType = 6;
                }
            } else if (userAgent.toLowerCase().indexOf("trident") > -1 && userAgent.indexOf("rv") > -1) {
                browserType = 5;
            }
            return browserType;
        },
        ismobile:function(){
            var u = navigator.userAgent, app = navigator.appVersion;
            if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
                if(window.location.href.indexOf("?mobile")<0){
                    try{
                        if(/iPhone/i.test(navigator.userAgent)){  // /iPhone|mac|iPod|iPad/i
                            return 'iphone';
                        }else{
                            return 'android';
                        }
                    }catch(e){}
                }
            }else if( u.indexOf('iPad') > -1){
                return 'iphone';
            }else{
                return 'android';
            }
        },
        getAjaxData:function(url,callback,params){
            $.ajax({
                url:'https://activity.lagou.com/'+url,
                type:'get',
                data:params ? params : {},
                // dataType:'jsonp',
                // jsonp:'jsoncallback',
                success:function(data){
                    var content = data.content;
                    if(data.success){
                        callback(content)
                    }else {
                        console.log('出错啦～刷新重试～')
                    }
                },
                error:function(error){
                    console.log(error)
                },
            })
        },
    },
}