// JavaScript Document
// var loadingHost = '';
var loadingHost = 'https://www.lgstatic.com/activity-rsrc/dist/2018-818HR/';
var imgArray = [
	// "images/DIN-BlackItalic.otf",
	loadingHost+"images/page0-detail.png",
	loadingHost+"images/page0-title.png",
	loadingHost+"images/page1-bg.png",
	loadingHost+"images/page1-icon.png",
	loadingHost+"images/page1-orbit.png",
	loadingHost+"images/page1-star01.png",
	loadingHost+"images/page1-star02.png",
	loadingHost+"images/page1-star03.png",
	loadingHost+"images/question-icon.png",
	loadingHost+"images/bg.mp3",
	loadingHost+"images/page2-bottom.png",
	loadingHost+"images/page2-btn.png",
	loadingHost+"images/page2-save.png",
	"images/result-bg.png",
	"images/result-border.png",
	"images/result-bottom.png",
	"images/result-ercode-02.png",
	"images/result-orbit.png",
	"images/result-line.png",
	"images/result-star-01.png",
	"images/result-star-02.png",
	"images/result-title-01.png",
	"images/result-title-02.png",
	"images/result-title-03.png",
	loadingHost+"images/scene-01.png",
	loadingHost+"images/scene-05-body.png",
	loadingHost+"images/scene-05-word.png",
	loadingHost+"images/scene-05.png",
	loadingHost+"images/scene-06-content.png",
	loadingHost+"images/scene-06-hand.png",
	loadingHost+"images/scene-06-phone.png",
	loadingHost+"images/scene-06-tips.png",
	loadingHost+"images/scene-06-word.png",
	loadingHost+"images/video-desk.png",
	loadingHost+"images/video-floor.png",
	loadingHost+"images/video-icon.png",
	loadingHost+"images/video-wall.png",
	loadingHost+"images/music/scene-01.mp3",
	loadingHost+"images/music/scene-02.mp3",
	loadingHost+"images/music/scene-03.mp3",
	loadingHost+"images/music/scene-04.mp3",
	loadingHost+"images/music/scene-05.mp3",
	loadingHost+"images/music/scene-06.mp3",
	loadingHost+"images/music/bullet.mp3",
	loadingHost+"images/music/message.mp3"
];
var now = 0;
// jQuery.ajax({
//     type:'get',
//     url:'https://activity.lagou.com/activityapi/common/getNow',
//     success:function(data){
//         now = data.content;
//     }
// });
// 资源加载
var Loader = function(){
	this.currProgress = 0;  // 当前加载进度
	this.isCompleted = false; // 判断是否加载完毕
	this.total = 100;  // 最大值100

	var loaded = 0;

	var loading = document.getElementById('loading'),
		number = document.getElementById('loading__num')//,
		// progress_bg = document.getElementById('loading__progress'),
		// progress = document.getElementById('progress'),
		// w = progress_bg.offsetWidth;// / imgArray.length;//20;
	// alert(w)
	this.Loading = function(imgArray,success){
		var self = this;
		for( var i = 0 ; i < imgArray.length; i++ ){
			var ext = imgArray[i].substring(imgArray[i].lastIndexOf('.')).toLowerCase();
			if( /((.png)|(.jpg)|(.jpeg)|(.gif))/g.test(ext)){
				var img = new Image();
				img.onload = function(){
					loaded ++;
					self.currProgress = Math.floor(loaded / imgArray.length * 100)
					// progress.style.width = self.currProgress / 100 * w+"px";  // self.currProgress / 100 * w+"px"
					number.innerHTML = (self.currProgress).toFixed(0)+"%";
					// var o = Math.floor(self.currProgress / 100),
					// 	s = Math.floor(self.currProgress % 100 / 10),
					// 	t = self.currProgress % 100 % 10
					// number.innerHTML = '<div class="num'+(o > 0 ? '' : ' hide')+' num'+o+'"></div>'+
					// 	'<div class="num'+(o || s > 0 ? '' : ' hide')+' num'+s+'"></div>'+
					// 	'<div class="num num'+t+'"></div><div class="unit"></div>'
					if( loaded == imgArray.length ){
						success();  // 回调函数
					}
				};
				img.onerror = function(){
					loaded ++;
					if( loaded == imgArray.length ){
						success();  // 回调函数
					}
				};
				// img.src = ctx + "/template/1024/" + imgArray[i];
                img.src = imgArray[i]; // loadingHost + imgArray[i];
			}else{
				this.loadMusic(imgArray[i]);  // loadingHost + imgArray[i]
			}
		}
	};
	this.loadMusic = function(path){
		jQuery.ajax({
			type: 'get',
			url: path,
			data: {},
			async:false,   // false 同步  true  异步
			success: function (data) {
				loaded++;
				if( loaded == imgArray.length ){
					success();  // 回调函数
				}
				//console.log("success");
			},
			error: function (xhr, type)  {
				loaded++;
				if( loaded == imgArray.length ){
					success();  // 回调函数
				}
				//console.log('error');
			}
		})
	};
	this.success = function(){
		// progress.style.width = w+"px";
		// number.innerHTML = "100%";
		var last = new Date().getTime(),
			middle = last - startTime;
		if(middle >= 2000){
			middle = 50;
		}
		setTimeout(function(){
			console.log("加载完毕");
			loadingStatus = true;
			if(pageStatus){
				pageStatus = false;
				loadingStatus = false;
				loadingSuccess();
			}
		},middle);
		//init.initDate();  // 设置时间
		// init.page1Play();  // 播放音乐
		// init(now);

		//jQuery('.page5').removeClass('hidden');
		//jQuery('.page5 .message').removeClass('hidden');
		//jQuery('.page5 .messBG').addClass('person').removeClass('hidden');
		//init.nextAnimate();
	};
	this.loadLoading = function(imgArray,obj){
		// var img = new Image();
		// img.onload = function(){
			obj.Loading(imgArray,obj.success);
		// };
		// img.onerror = function(){
			// obj.Loading(imgArray,obj.success);
		// };
		// img.src = ctx + "/template/1024/" + imgArray[0];
        // img.src = imgArray[0];
	};
};
//window.onload = function(){
var loader = new Loader();
loader.loadLoading(imgArray,loader);
//};