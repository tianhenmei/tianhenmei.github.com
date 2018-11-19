(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function noop(){}
var scrollClass = function(options) {
    this.elem = null;
    this.initHeight = 0;
    this.elemHeight = 0;
    this.ul = null;
    this.li = null;
    this.bar = null;
    this.barHeight = 0;
    this.classname = '';
    this.length = 0;
    this.one = 0;
    this.height = 0;
    this.top = 0;
    this.start = 0;
    this.end = 0;
    this.number = 0;
    this.space = 0;
    this.scale = 0;
    this.fixedHeight = true;
    // 滑到底部调用回调函数
    this.moveEndCallback = null;
    this.moveEndStatus = false;
    this.secondTimeStatus = false;
    // 滑到顶部调用回调函数
    this.moveUpCallback = null;
    this.moveUpStatus = false;
    this.secondUpTimeStatus = false;

    var self = this;
    this.init = function(options) {
        var elem = $('.' + options.classname),
            ul = elem.children('ul').length ? elem.children('ul') : elem.find('.'+options.classname+'_ul'),
            li = ul.children('li').length ? ul.children('li') : ul.find('.'+options.classname+'_li'),
            bar = elem.find('.' + options.classname + '_bar'),
            length = options.length ? options.length : li.length,
            one = length > 0 ? li.eq(0).height() : 0;

        self.initHeight = options.height;
        self.elemHeight = options.totalHeight || elem.height();
        self.classname = options.classname;
        self.elem = elem[0];
        self.ul = ul;
        self.li = li;
        self.bar = bar;
        self.length = length;
        self.one = options.one ? self.getRem(options.one) : one;
        self.height = self.one * length + parseFloat(ul.css('padding-top')) + parseFloat(ul.css('padding-bottom')) - self.getRem(self.initHeight);
        self.number = options.number;
        self.space = options.space;
        self.barHeight = self.elemHeight * self.number / self.length;
        self.scale = (self.elemHeight - self.barHeight - self.getRem(self.space) * 2) / ((self.length - self.number) * self.one);
        self.fixedHeight = options.fixedHeight == undefined ? true : !!options.fixedHeight;
        self.moveEndCallback = options.moveEndCallback || null;
        self.moveUpCallback = options.moveUpCallback || null;
        bar.css({
            height: self.barHeight + 'px'
        });

        var barParent = self.bar.parent('.' + self.classname + '_bar_bg');
        if (self.length > self.number) { // 只有列表的值太多，才会出现滚动条
            if (barParent.length > 0) {
                barParent.removeClass('search_hide');
            } else {
                self.bar.removeClass('search_hide');
            }
            self.initEvent();
            if (!self.fixedHeight) {
                elem.css({
                    'height': self.getRem(self.initHeight) + 'px'
                });
            }
        } else {
            if (barParent.length > 0) {
                barParent.addClass('search_hide');
            } else {
                self.bar.addClass('search_hide');
            }
            if (!self.fixedHeight) {
                elem.css({
                    'height': ul.height() + parseFloat(ul.css('padding-top')) + parseFloat(ul.css('padding-bottom')) + 'px'
                });
            }
            if(app.scrollData[self.classname]){
                elem[0].removeEventListener('touchstart', app.scrollData[self.classname].startScroll, false);
                elem[0].removeEventListener('touchmove', app.scrollData[self.classname].moveScroll, false);
            }
        }
    };

    this.initEvent = function() {
        var elem = $('.' + self.classname)[0];
        this.removeEvent();

        elem.addEventListener('touchstart', self.startScroll, false);
        elem.addEventListener('touchmove', self.moveScroll, false);
    };

    this.removeEvent = function(){
        var elem = $('.' + self.classname)[0];
        elem.removeEventListener('touchstart', self.startScroll, false);
        elem.removeEventListener('touchmove', self.moveScroll, false);        
    },

    this.startScroll = function(e) {
        // e.stopPropagation();
        // e.preventDefault();

        app.scrollData.isMoving = false;
        // clickTime = new Date().getTime();
        if (app.scrollData[self.classname].length > app.scrollData[self.classname].number) {
            var touch = e.targetTouches[0];
            app.scrollData[self.classname].start = touch.clientY;
            app.scrollData[self.classname].top = parseFloat(app.scrollData[self.classname].ul.css('top')) || 0;
            if(self.moveEndStatus){
                self.secondTimeStatus = true;
            }
            if(self.moveUpStatus){
                self.secondUpTimeStatus = true;
            }
        }
    };

    this.moveScroll = function(e) {
        e.stopPropagation();
        e.preventDefault();

        if (app.scrollData[self.classname].length > app.scrollData[self.classname].number) {
            app.scrollData.isMoving = true;
            var touch = e.targetTouches[0],
                direction = touch.clientY - app.scrollData[self.classname].start;

            app.scrollData[self.classname].end = touch.clientY - app.scrollData[self.classname].start + app.scrollData[self.classname].top
            
            if(Math.abs(direction) > 60){
                e.stopPropagation();
            }
            direction = direction > 0 ? 1 : -1;
            if (direction == 1 && app.scrollData[self.classname].end >= 0) { // 向上
                self.secondTimeStatus = false;
                app.scrollData[self.classname].end = 0;
                // 移动到顶部：
                if(self.moveUpCallback){
                    if(app.scrollData[self.classname].top == 0){
                        self.moveUpStatus = false;
                        self.secondUpTimeStatus = false;
                        self.moveUpCallback();
                    }else{
                        if(!self.moveUpStatus){
                            self.moveUpStatus = true;
                        }else if(self.secondUpTimeStatus){
                            self.moveUpStatus = false;
                            self.secondUpTimeStatus = false;
                            self.moveUpCallback();
                        }
                    }
                }
            } else if (direction == -1 && app.scrollData[self.classname].end <= -app.scrollData[self.classname].height) { // 向下

                app.scrollData[self.classname].end = -app.scrollData[self.classname].height;
                // 移动到底部：
                if(self.moveEndCallback){
                    if(app.scrollData[self.classname].top == -app.scrollData[self.classname].height){
                        self.moveEndStatus = false;
                        self.secondTimeStatus = false;
                        self.moveEndCallback();
                    }else{
                        if(!self.moveEndStatus){
                            self.moveEndStatus = true;
                        }else if(self.secondTimeStatus){
                            self.moveEndStatus = false;
                            self.secondTimeStatus = false;
                            self.moveEndCallback();
                        }
                    }
                }
            }
            // console.log(-self.scale*self.end);
            app.scrollData[self.classname].bar.css({
                top: -app.scrollData[self.classname].scale * app.scrollData[self.classname].end + 'px'
            });
            app.scrollData[self.classname].ul.css({
                top: app.scrollData[self.classname].end + 'px'
            });
        }
    };

    this.setRank = function(rank) {
        rank -= 1;
        self.li.removeClass('rank-active');
        if (rank <= (self.length - 1) && rank >= 0) {
            var rankTop = (rank - 1) * self.one,
                position = rank;
            if (rank <= self.number / 2) { // 当前排行在一半以下
                // 什么也不用做
                position = 0;
            } else if (rank >= (self.length - self.number / 2)) { // 当前排行在最后一屏的一半以上
                // 定位在最后一屏
                position = self.length - self.number;

            } else {
                position = rank - Math.floor(self.number / 2);
            }
            self.li.eq(rank).addClass('rank-active');
        } else {
            position = 0;
            // rank = 0;
        }
        self.ul.css({
            top: -(position * self.one) + 'px'
        });
        self.bar.css({
            top: self.scale * (position * self.one) + 'px'
        });
    };

    this.getRem = function(value) {
        var scale = 1206 / 750,
            currentScale = GC.h / GC.w,
            fontSize = parseFloat(document.documentElement.style.fontSize) || 16 //GC.w / (10 / currentScale * scale);
        
        return value / (750 / 16) * fontSize;
        // return value / 750 * 10 * fontSize;
        // return value / 750 * document.documentElement.clientWidth;
    }

    self.init(options);
};
function setRem(value){
    return value / (750 / 16)+'rem';
}
// 音乐播放
function backgroundMusic(audio){
    // 自动播放音乐效果，解决浏览器或者APP自动播放问题
    if(audio.paused){
        audio.load();
        audio.play();
    }
    function musicInBrowserHandler() {
        if(audio.paused){
            audio.load();
            audio.play();
        }
        document.body.removeEventListener('touchstart', musicInBrowserHandler);
    }
    document.body.addEventListener('touchstart', musicInBrowserHandler);

    // 自动播放音乐效果，解决微信自动播放问题
    function musicInWeixinHandler() {
        if(audio.paused){
            audio.load();
            audio.play();
        }
        document.addEventListener("WeixinJSBridgeReady", function () {
            if(audio.paused){
                audio.load();
                audio.play();
            }
        }, false);
        document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
    }
    document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
}
// Vue.config.errorHandler = function(err, vm, info){
//     alert(err);
// }
// 3: 报名成功，展示公司页
// test
var initialNow = 0,
    initialLast = 0,
    initialCompanyId = 0,
    mode = "development",// "development",//"production",
    initialText = '测试',
    initialPhone = '12345678900',
    randomIndex = Math.floor(Math.random() * 10);

// 音乐
// if(mode != "development"){
    backgroundMusic(document.getElementById("music"));
// }
var PageMove = function () {
    function PageMove(options) {
        _classCallCheck(this, PageMove);
        
        this.data = {
            direction: {
                x: "down",
                y: "down"
            },
            start: {
                x: 0,
                y: 0
            },
            end: {
                x: 0,
                y: 0
            },
            // test
            now: initialNow,
            last: initialLast,
            page: {
                up: {
                    last: (options.animation ? options.animation : "move") + "ULast",
                    now: (options.animation ? options.animation : "move") + "UNow"
                },
                down: {
                    last: (options.animation ? options.animation : "move") + "DLast",
                    now: (options.animation ? options.animation : "move") + "DNow"
                }
            },
            pageLength: jQuery(".page").length,
            isMoving: false,
            clickStatus: false
        };
        this._initPageMoveEvent();
    }
    
    _createClass(PageMove, [{
        key: "pageMove",
        value: function pageMove(od, self) {
            // if(self.data.last < self.data.now){
            //     app.$data['page'+self.data.last].status = 'out';
            // }else {
            //     app.$data['page'+self.data.last].status = 'back';
            // }
            setTimeout(function(){
                // jQuery(".page").removeClass("pageCurrent").addClass("hide");
                // jQuery(".page" + self.data.last).attr('style','');
                // jQuery(".page" + self.data.now).removeClass("hide").addClass("pageCurrent");
                self.data.isMoving = false;
                app.$data.flipStatus = false;
                jQuery(".page" + self.data.last)
                    .removeClass("active moveUNow moveULast moveDNow moveDLast");
                jQuery(".page" + self.data.now)
                    .removeClass("moveUNow moveULast moveDNow moveDLast");
                // app.$data['page'+self.data.now].status = 'in';
                // app.$data['page'+self.data.last].status = 'in';
            },500)
        }
    }, {
        key: "_dataMove",
        value: function _dataMove(od, self) {
            var classify = jQuery('.page'+self.data.now+' .classify'),
                data = app.$data['data'+(self.data.now - 1)],
                now = od == 'up' ? 'moveDataUNow' : 'moveDataDNow',
                last = od == 'up' ? 'moveDataULast' : 'moveDataDLast';
            classify.removeClass("moveDataULast moveDataUNow moveDataDLast moveDataDNow opacityChange delay0-5").addClass("hide");
            classify.eq(data.current).removeClass("hide").addClass(now);
            classify.eq(data.current-1).removeClass("hide").addClass(last);
            (function(classify,data){
                setTimeout(function () {
                    classify.removeClass("moveDataULast moveDataUNow moveDataDLast moveDataDNow");
                    classify.eq(data.current-1).addClass("hide");
                    self.data.isMoving = false;
                    app.$data.flipStatus = false;
                }, 500);
            })(classify,data);
        }
    },{
        key: "_pageMoveCompute",
        value: function _pageMoveCompute(self) {
            var direction = '';
            var od = "down";
            if (self.data.direction.y == "up") {
                direction = 'U';
            } else {
                direction = 'D';
            }
            switch(true){
                case self.data.now == 0 && direction == 'U':
                    if(!app.$data.firstFlip){
                        app.$data.firstFlip = true;
                        app.$data.firstMove = true;
                        setTimeout(function(){
                            app.$data.lastPage = 0;
                            app.$data.activePage = 1;
                            self.data.last = 0;
                            self.data.now = 1;
                            app.$data.firstFlip = false;
                            jQuery(".page" + self.data.now)
                                .removeClass("moveUNow moveULast moveDNow moveDLast");
                        },500);
                    }
                    break;
                case true:
                    self.data.last = self.data.now;
                    if (self.data.direction.y == "up") {
                        self.data.now += 1;
                    } else {
                        self.data.now -= 1;
                        od = "up";
                    }
                    if ( self.data.now >= self.data.pageLength) {
                        self.data.now = self.data.pageLength - 1;
                        self.data.last = self.data.now - 1;
                        self.data.isMoving = false;
                        self.data.clickStatus = false;
                        app.$data.flipStatus = false;
                        return;
                    }
                    if (self.data.now <= -1) {
                        self.data.last = 1;
                        self.data.now = 0;
                        self.data.isMoving = false;
                        self.data.clickStatus = false;
                        app.$data.flipStatus = false;
                        return;
                    }
                    app.$data.lastPage = self.data.last;
                    app.$data.activePage = self.data.now;
                    app.$data.direction = direction;
                    app.$data.firstMove = false;
                    self.pageMove(od, self);
                    break;
            }
        }
    }, {
        key: "_initPageMoveEvent",
        value: function _initPageMoveEvent() {
            var self = this;
            window.addEventListener('touchmove', noop, { passive: false })
            document.addEventListener("touchstart", function (ev) {
                var touch = ev.targetTouches[0];
                self.data.start.x = touch.clientX;
                self.data.start.y = touch.clientY;
            },false);
            document.addEventListener("touchmove", function (ev) {
                // if(self.data.now < 1){
                    ev.preventDefault();
                // }
                var touch = ev.targetTouches[0];
                self.data.end.x = touch.clientX;
                self.data.end.y = touch.clientY;
            },{passive:false});
            document.addEventListener("touchend", function (ev) {
                var initdisc = 40,
                    disc = self.data.end.y == 0 ? false : Math.abs(self.data.end.y - self.data.start.y) > initdisc;
                self.data.direction.x = self.data.end.x - self.data.start.x > initdisc ? "down" : self.data.end.x - self.data.start.x < initdisc ? "up" : "down";
                self.data.direction.y = self.data.end.y - self.data.start.y > initdisc ? "down" : self.data.end.y - self.data.start.y < initdisc ? "up" : "down";
                
                if (app.$data.pageStatus && !self.data.clickStatus && !self.data.isMoving && disc) {
                    self.data.isMoving = true;
                    if(!app.$data.flipStatus){
                        app.$data.flipStatus = true;
                        self._pageMoveCompute(self);
                    }
                }
                self.data.start.x = 0;
                self.data.start.y = 0;
                self.data.end.x = 0;
                self.data.end.y = 0;
                self.data.isMoving = false;
                self.data.clickStatus = false;
                app.$data.flipStatus = false;
            },false);
        }
    }]);

    return PageMove;
}();

var app = null;
var PM = new PageMove({ animation: "move" });  

// Vue.config.errorHandler = function (err, vm, info) {
//     alert(err);
// }
app = new Vue({
    el:"#app",
    data:{
        // test
        mode:mode,// "development",//"production",
        lg:"1k67",
        activePage:initialNow,
        lastPage:initialLast,
        direction:'U',
        pageStatus:true,
        firstMove:true,
        isMoving:false,
        firstFlip:false,
        page0:{
            status:'in',
            in:{},
            out:{}
        },
        page1:{
            status:'in',
            in:{},
            out:{}
        },
        page2:{
            status:'in',
            in:{},
            out:{}
        },
        page3:{
            status:'in',
            in:{},
            out:{}
        },
        page4:{
            status:'in',
            in:{},
            out:{}
        },
        page5:{
            status:'in',
            in:{},
            out:{}
        },
        page6:{
            status:'in',
            in:{},
            out:{}
        },
        signup:{
            templateId:'5bf2336ce4b030768a24d2f1',
            companyId:0,
            name:'',
            city:'',
            company:'',
            phone:''
        },
        nameTips:'',  // * 请输入您的名字
        cityTips:'',
        companyTips:'',
        phoneTips:'',
        signupSearchStatus:false,
        signupRequestStatus:false,
        signupList:[],
        signupStatus:false,
        scrollData:{
            'page2__signup--search':{}
        },
        heightStatus:0,
        maxHeight:0
    },
    computed:{
        
    },
    mounted:function(){
        //音乐
        $('.music-icon').on('click',function(){
            if($('#music')[0].paused){
                $('#music')[0].play();
                $(".music-icon").removeClass('close').addClass('open');

            }else{
                $('#music')[0].pause();
                $(".music-icon").removeClass('open').addClass('close');
            }
        });
        // test
        // if(this.isWeiXin()){
        //     this.getUserWeixinData()
        // }
        var rightSize = parseFloat((RC.w / RC.h).toFixed(1)),
            currentSize = parseFloat((GC.w / GC.h).toFixed(1));
        if(rightSize > currentSize){
            this.heightStatus = Math.floor(RC.w / GC.w * GC.h - RC.h);
            this.maxHeight = this.heightStatus > 128 ? 128 : 0
        }
    },
    methods:{
        noop:function(){},
        getFitTop:function(def,ratio){
            return this.setRem(def+this.heightStatus * ratio);
        },
        getMaxTop:function(def,ratio){
            return this.setRem(def+this.maxHeight * ratio);
        },
        setDataCount:function(count){
            return '0000'.slice((count+'').length)+count
        },
        setRem:setRem,
        getRem:function(value) {
            var fontSize = parseFloat(document.documentElement.style.fontSize) || 16;
            
            return value / (750 / 16) * fontSize;
        },
        getDelayTime:function(start,gap,index){
            var current = (start+gap * index)+''.split(''),
                f = '',
                l = '';
            if(current.length == 1){
                f = '0';
                l = current[0];
            }else {
                f = current[0];
                l = current[1];
            }
            return f+'-'+l;
        },
        getPageMoveClass:function(index){
            var classname = '';
            if(this.firstMove){
                if(this.activePage == index){
                    classname = 'active';
                }
            }else{
                if(this.activePage == index){
                    classname = 'move'+this.direction+'Now active';
                }else if(this.lastPage == index){
                    classname = 'move'+this.direction+'Last active';
                }
            }
            return classname;
        },
        // 报名
        checkNullEvent:function(key,cn){
            if(!this.signup[key].trim()){
                this[key+'Tips'] = '* 请输入'+cn;
                return false;
            }else{
                this[key+'Tips'] = '';
                return true;
            }
        },
        checkPhoneEvent:function(key){
            var value = this.signup[key],
                isValidPhone = /^1[\d]{10}$/g.test(this.signup[key]);
            if(!isValidPhone) {
                this[key+'Tips'] = '* 请输入正确的电话格式';
                return false;
            }else{
                this[key+'Tips'] = '';
                return true;
            }
        },
        updateCompanyList:function(){
            var self = this;
            if(!this.signup.company){
                this.companyTips = '* 请输入企业名称或企业ID';
                return;
            }
            this.companyTips = '';
            // 正在请求
            // if(this.signupRequestStatus){
            //     this.waitingRequest++;
            //     return;
            // }
            console.log(this.signup.company);
            this.signupRequestStatus = true;
            $.ajax({
                type: 'get',
                url: 'https://activity.lagou.com/activityapi/common/queryCompany.json',
                data:{
                    keyword:this.signup.company
                },
                success: function(result) {
                    self.signupRequestStatus = false;
                    if (result.success) {
                        var data = result.content || [];
                        if(data.length > 0){
                            self.signupList = data;
                            self.signupSearchStatus = true;
                            self.$nextTick(function(){
                                self.setSignupSearchScroll();
                            })
                        }else{
                            self.companyTips = '* 您输入的企业不存在';
                            self.signupSearchStatus = false;
                        }
                    } else{ // 查找失败
                        self.companyTips = '* 您输入的企业不存在';
                        self.signupSearchStatus = false;
                    }
                },
                error: function(xhr, type) {
                    self.signupRequestStatus = false;
                    self.companyTips = '网络原因请重新尝试!';
                }
            });
        },
        setSignupSearchScroll:function(){
            var classname = 'page2__signup--search';
            this.$refs['page2__signup--search_ul'].style.top = 0;
            this.$refs['page2__signup--search_bar'].style.top = 0;
            this.scrollData['page2__signup--search'] = new scrollClass({
                classname: classname,
                height: 270,
                totalHeight:this.getRem(270+40),
                space: 0,
                number: 270 / 36,
                one: 36,
                fixedHeight: false
            });
        },
        signupSelectCompanyEvent:function(one){
            this.signup.company = one.companyname;
            this.signup.companyId = one.id;
            this.signupSearchStatus = false;
        },
        signupEvent:function(){
            var status = true;
            if(!this.checkNullEvent('name','您的名称')){
                status = false;
            }
            if(!this.checkNullEvent('city','公司所在城市')){
                status = false;
            }
            if(!this.checkNullEvent('company','公司名称')){
                status = false;
            }
            if(!this.checkPhoneEvent('phone')){
                status = false;
            }

            if(status){
                // 信息填写完成
                this.sendSighup();
            }
        },
        sendSighup:function(){
            var self = this;
            if(this.mode == "development"){
                self.showSuccessLayer();
            }else{
                var self = this,
                    signup = this.signup;
                $.ajax({
                    type: 'get',
                    url: 'http://www.lagou.com/activityapi/common/signUp.json',
                    data:{
                        type:signup.templateId,
                        name:signup.name,
                        city:signup.city,
                        companyName:signup.company,
                        contact:signup.phone,
                        extend1:signup.companyId
                    },
                    success: function(result) {
                        if (result.success) {
                            self.showSuccessLayer();
                        }else if(result.state == 300){
                            alert(result.message);
                        }else {
                            alert(result.message);
                        }
                    },
                    error: function(xhr, type) {
                        alert('网络原因请重新尝试!');
                    }
                });
            }
        },
        showSuccessLayer:function(){
            var self = this;
            self.signupStatus = true;
            setTimeout(function(){
                self.signupStatus = false;
            },2000);
        }
    }
})
},{}]},{},[1]);

function postEncodingID(data) {
	var _PID = "",
	_PNO = "",
	_PV = 0,
	_PCONTENTID = "",
	_PRANDOM = "",
	_GAMETHOD = "",
	_GAMSGTYPE = "",
	_GATJ = "",
	_GATJVAL = 0,
	v = 1,
	t = "a",
	dl = encodeURIComponent(window.location.href),
	dr = document.referrer,
	dt = document.title;
    var _ELS = document;
    var arr_GATJ = [];
    try {
        _PID = data["data-lg-tj-id"] || "idnull"
        _PNO = data["data-lg-tj-no"] || "idnull"
        _PCONTENTID = data["data-lg-tj-cid"] || "idnull"
        _PRANDOM = getRandom()
        _GAMETHOD = data["data-lg-gatj-method"] || "send"
        _GAMSGTYPE = data["data-lg-gatj-msgtype"] || "event"
        _GATJ = data["data-lg-gatj-msg"] || ""
        _GATJVAL = parseInt(data["data-lg-gatj-val"] || 0)
        if (_GATJ && typeof ga == "function") {
            arr_GATJ.push(_GAMETHOD, _GAMSGTYPE);
            arr_GATJ = arr_GATJ.concat(_GATJ.split(",")); !! _GATJVAL && arr_GATJ.push(_GATJVAL);
            ga.apply(null, arr_GATJ)
        }
        if (_PID != "idnull") {
            var _params = {};
            _params.v = v;
            _params.t = 'div';//target.tagName.toLocaleLowerCase();
            _params.dl = dl;  
            _params.dr = dr;
            _params.dt = dt;
            _params.aid = [_PID, _PNO, _PV, _PCONTENTID, _PRANDOM].join("_");
            imgGET(_params)
        } else {
            return
        }
    } catch(e) {}
}
function imgGET(params) {
    var REMOTE = {
		server: "https://a.lagou.com/track"
	};
    var _img = new Image();
    paramsArr = [];
    for (var item in params) {
        if (typeof item == "string") {
            paramsArr.push(item + "=" + params[item])
        }
    }
    _img.src = REMOTE.server + "?" + paramsArr.join("&")
}
function getRandom(digit) {
    window._CASH_RANDOM ? "": window._CASH_RANDOM = {};
    var _cash_random = window._CASH_RANDOM || {},
    _digit = digit || 4,
    _random = getRandomSimple();
    while (_cash_random[_random]) {
        _random = getRandomSimple();
        if (!_cash_random[_random]) {
            break
        }
    }
    window._CASH_RANDOM[_random] = _random;
    return _random;
    function getRandomSimple() {
        var random = "";
        for (var i = 0; i < _digit; i++) {
            var r = Math.floor(Math.random() * 10);
            random += r.toString()
        }
        return random.toString()
    }
}