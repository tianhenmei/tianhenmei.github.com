function ANGLE(position, global) {
    var dx = global.x - position.x,
        dy = global.y - position.y,
        an = Math.acos(dy / Math.sqrt(dx * dx + dy * dy))
      if(dx >= 0 && dy >= 0){
        an = 2 * Math.PI - an
      }else if(dx >= 0 && dy <= 0){
        an = 2 * Math.PI - an
      }
    return an
}
var app = new Vue({
    el:"#app",
    data:{
        width:750,
        height:1206,
        fontSize:16,
        people:[],  // 用于存放所有人物角色舞台的数组
        stage:null,  // 用于人物舞台
        stageE:null,
        stageO:null,
        classifyActive:0,
        currentRoleType:0,
        currentRotate:null,
        backgroundStage:null,
        classify:[{
            name:"选人"
        },{
            name:"朝向"
        },{
            name:"睡衣"
        },{
            name:"表情"
        },{
            name:"发型"
        },{
            name:"卧室"
        },{
            name:"其他"
        }],
        sex:[{
            name:"男",
            en:'man'
        },{
            name:"女",
            en:'woman'
        }],
        facing:[{
            name:"站立",
            en:'stand',
        },{
            name:"坐着",
            en:'sit'
        },{
            name:"跪着",
            en:'knee'
        }],
        cloth:[{
            name:"1"
        },{
            name:"2"
        },{
            name:"3"
        },{
            name:"4"
        },{
            name:"5"
        },{
            name:"6"
        }],
        emotionList:[{
            name:"1"
        },{
            name:"2"
        },{
            name:"3"
        },{
            name:"4"
        },{
            name:"5"
        }],
        hairList:[{
            name:"1"
        },{
            name:"2"
        },{
            name:"3"
        },{
            name:"4"
        },{
            name:"5"
        }],
        roomList:[{
            name:"1"
        },{
            name:"2"
        },{
            name:"3"
        },{
            name:"4"
        }],
        othersList:[
            {},{},{},{},{},
            {},{},{},{},{}],
        role:[
            // man
            [
                // 站立
                {
                    bodyPosition: {
                        x: 327,
                        y: 200
                    },
                    bodyImgPosition: {
                        x: 0,
                        y: 162+77
                    },
                    headPosition: {
                        x: 35,
                        y: 77
                    },
                    hairPosition: {
                        x: 103,
                        y: 0
                    },
                    globalPosition: {
                        x: 0,
                        y: 0
                    }
                },{  // 坐着
                    bodyPosition: {
                        x: 327,
                        y: 200
                    },
                    bodyImgPosition: {
                        x: 0,
                        y: 84+79
                    },
                    headPosition: {
                        x: 90,
                        y: 79
                    },
                    hairPosition: {
                        x: 159,
                        y: 0
                    },
                    globalPosition: {
                        x: 0,
                        y: 0
                    }
                },{  // 跪着
                    bodyPosition: {
                        x: 225,
                        y: 200
                    },
                    bodyImgPosition: {
                        x: 0,
                        y: 0+27
                    },
                    headPosition: {
                        x: 202,
                        y: 48+27
                    },
                    hairPosition: {
                        x: 269,
                        y: 0
                    },
                    globalPosition: {
                        x: 0,
                        y: 0
                    }
                }
            ],
            // woman
            [
                // 站立
                {
                    bodyPosition: {
                        x: 327,
                        y: 200
                    },
                    bodyImgPosition: {
                        x: 0,
                        y: 93+30
                    },
                    headPosition: {
                        x: 173,
                        y: 30
                    },
                    hairPosition: {
                        x: 173 - 17,
                        y: 0
                    },
                    globalPosition: {
                        x: 0,
                        y: 0
                    }
                },{  // 坐着
                    bodyPosition: {
                        x: 327,
                        y: 200
                    },
                    bodyImgPosition: {
                        x: 0,
                        y: 125+30
                    },
                    headPosition: {
                        x: 233,
                        y: 30
                    },
                    hairPosition: {
                        x: 233 - 17,
                        y: 0
                    },
                    globalPosition: {
                        x: 0,
                        y: 0
                    }
                },{  // 跪着
                    bodyPosition: {
                        x: 327,
                        y: 200
                    },
                    bodyImgPosition: {
                        x: 0,
                        y: 112+30
                    },
                    headPosition: {
                        x: 244,
                        y: 30
                    },
                    hairPosition: {
                        x: 244 - 17,
                        y: 0
                    },
                    globalPosition: {
                        x: 0,
                        y: 0
                    }
                }
            ]
        ],
        clothes:[
            [  // man 
                // 站立
                [{
                    url:'images/man-stand-01.png',
                    width:280,
                    height:954,
                    position:{
                        x:46,
                        y:18
                    },
                },{
                    url:'images/man-stand-02.png',
                    width:310,
                    height:984,
                    position:{
                        x:27,
                        y:13
                    },
                },{
                    url:'images/man-stand-03.png',
                    width:397,
                    height:980,
                    position:{
                        x:29,
                        y:11
                    },
                },{
                    url:'images/man-stand-04.png',
                    width:292,
                    height:969,
                    position:{
                        x:39,
                        y:18
                    }
                },{
                    url:'images/man-stand-05.png',
                    width:371,
                    height:991,
                    position:{
                        x:0,
                        y:0
                    }
                },{
                    url:'images/man-stand-06.png',
                    width:336,
                    height:968,
                    position:{
                        x:25,
                        y:14
                    }
                }],[{ // 坐着 
                    url:'images/man-sit-01.png',
                    width:477,
                    height:506,
                    position:{
                        x:10,
                        y:85
                    }
                },{
                    url:'images/man-sit-02.png',
                    width:471,
                    height:510,
                    position:{
                        x:13,
                        y:84
                    }
                },{
                    url:'images/man-sit-03.png',
                    width:471,
                    height:506,
                    position:{
                        x:0,
                        y:87
                    }
                },{
                    url:'images/man-sit-04.png',
                    width:479,
                    height:545,
                    position:{
                        x:12,
                        y:54
                    }
                },{
                    url:'images/man-sit-05.png',
                    width:481,
                    height:587,
                    position:{
                        x:9,
                        y:0
                    }
                },{
                    url:'images/man-sit-06.png',
                    width:479,
                    height:514,
                    position:{
                        x:17,
                        y:87
                    }
                }],[{ // 跪着
                    url:'images/man-knee-01.png',
                    width:279,
                    height:508,
                    position:{
                        x:209,
                        y:217
                    }
                },{
                    url:'images/man-knee-02.png',
                    width:353,
                    height:507,
                    position:{
                        x:181,
                        y:216
                    }
                },{
                    url:'images/man-knee-03.png',
                    width:526,
                    height:730,
                    position:{
                        x:102,
                        y:3
                    }
                },{
                    url:'images/man-knee-04.png',
                    width:630,
                    height:512,
                    position:{
                        x:0,
                        y:221
                    }
                },{
                    url:'images/man-knee-05.png',
                    width:406,
                    height:579,
                    position:{
                        x:153,
                        y:154
                    }
                },{
                    url:'images/man-knee-06.png',
                    width:414,
                    height:494,
                    position:{
                        x:139,
                        y:216
                    }
                }]
            ],[  // woman
                // 站立
                [{
                    url:'images/woman-stand-01.png',
                    width:257,
                    height:900,
                    position:{
                        x:132,
                        y:97
                    }
                },{
                    url:'images/woman-stand-02.png',
                    width:347,
                    height:924,
                    position:{
                        x:83,
                        y:6497
                    }
                },{
                    url:'images/woman-stand-03.png',
                    width:525,
                    height:924,
                    position:{
                        x:25,
                        y:62
                    }
                },{
                    url:'images/woman-stand-04.png',
                    width:302,
                    height:911,
                    position:{
                        x:110,
                        y:93
                    }
                },{
                    url:'images/woman-stand-05.png',
                    width:518,
                    height:945,
                    position:{
                        x:0,
                        y:76
                    }
                },{
                    url:'images/woman-stand-06.png',
                    width:459,
                    height:999,
                    position:{
                        x:58,
                        y:0
                    }
                }],[{// 站立
                    url:'images/woman-sit-01.png',
                    width:448,
                    height:461,
                    position:{
                        x:102,
                        y:29
                    }
                },{
                    url:'images/woman-sit-02.png',
                    width:396,
                    height:451,
                    position:{
                        x:117,
                        y:30
                    }
                },{
                    url:'images/woman-sit-03.png',
                    width:528,
                    height:461,
                    position:{
                        x:84,
                        y:28
                    }
                },{
                    url:'images/woman-sit-04.png',
                    width:406,
                    height:492,
                    position:{
                        x:124,
                        y:29
                    }
                },{
                    url:'images/woman-sit-05.png',
                    width:643,
                    height:515,
                    position:{
                        x:0,
                        y:0
                    }
                },{
                    url:'images/woman-sit-06.png',
                    width:463,
                    height:467,
                    position:{
                        x:119,
                        y:31
                    }
                }],[{// 跪着
                    url:'images/woman-knee-01.png',
                    width:259,
                    height:505,
                    position:{
                        x:210,
                        y:41
                    }
                },{
                    url:'images/woman-knee-02.png',
                    width:294,
                    height:507,
                    position:{
                        x:181,
                        y:44
                    }
                },{
                    url:'images/woman-knee-03.png',
                    width:525,
                    height:525,
                    position:{
                        x:98,
                        y:13
                    }
                },{
                    url:'images/woman-knee-04.png',
                    width:323,
                    height:510,
                    position:{
                        x:159,
                        y:41
                    }
                },{
                    url:'images/woman-knee-05.png',
                    width:643,
                    height:512,
                    position:{
                        x:0,
                        y:13
                    }
                },{
                    url:'images/woman-knee-06.png',
                    width:278,
                    height:490,
                    position:{
                        x:196,
                        y:42
                    }
                }]
            ]
        ],
        emotion:[[{
            url:'images/man-head-01.png',
            width:222,
            height:266,
            position:{
                x:26,
                y:6
            }
        },{
            url:'images/man-head-02.png',
            width:248,
            height:269,
            position:{
                x:0,
                y:0
            }
        },{
            url:'images/man-head-03.png',
            width:222,
            height:266,
            position:{
                x:26,
                y:6
            }
        },{
            url:'images/man-head-04.png',
            width:222,
            height:266,
            position:{
                x:26,
                y:4
            }
        },{
            url:'images/man-head-05.png',
            width:294,
            height:266,
            position:{
                x:26,
                y:3
            }
        }],[{
            url:'images/woman-head-1.png',
            width:177,
            height:253,
            position:{
                x:0,
                y:0
            }
        },{
            url:'images/woman-head-2.png',
            width:177,
            height:253,
            position:{
                x:0,
                y:0
            }
        },{
            url:'images/woman-head-3.png',
            width:177,
            height:253,
            position:{
                x:0,
                y:0
            }
        },{
            url:'images/woman-head-4.png',
            width:177,
            height:253,
            position:{
                x:0,
                y:0
            }
        },{
            url:'images/woman-head-5.png',
            width:177,
            height:253,
            position:{
                x:0,
                y:0
            }
        }]],
        hair:[[{
            url:'images/man-hair-01.png',
            width:146,
            height:112,
            position:{
                x:7,
                y:51
            },
        },{
            url:'images/man-hair-02.png',
            width:146,
            height:111,
            position:{
                x:10,
                y:47
            },
        },{
            url:'images/man-hair-03.png',
            width:155,
            height:73,
            position:{
                x:0,
                y:70
            }
        },{
            url:'images/man-hair-04.png',
            width:127,
            height:64,
            position:{
                x:13,
                y:76
            },
        },{
            url:'images/man-hair-05.png',
            width:139,
            height:138,
            position:{
                x:3,
                y:0
            }
        }],[{
            url:'images/woman-hair-01.png',
            width:183,
            height:166,
            position:{
                x:14,
                y:12
            }
        },{
            url:'images/woman-hair-02.png',
            width:161,
            height:226,
            position:{
                x:26,
                y:7
            }
        },{
            url:'images/woman-hair-03.png',
            width:136,
            height:131,
            position:{
                x:33,
                y:7
            }
        },{
            url:'images/woman-hair-04.png',
            width:220,
            height:243,
            position:{
                x:0,
                y:16
            }
        },{
            url:'images/woman-hair-05.png',
            width:145,
            height:231,
            position:{
                x:28,
                y:0
            }
        }]],
        room:[{
            url:'images/room1.jpg',
            width:1080,
            height:2178
        },{
            url:'images/room2.jpg',
            width:1080,
            height:2016
        },{
            url:'images/room3.jpg',
            width:1080,
            height:2016
        },{
            url:'images/room4.jpg',
            width:1080,
            height:2016
        }],
        others:[{
            url:'images/others/01.png',
            width:336,
            height:1030
        },{
            url:'images/others/02.png',
            width:213,
            height:276
        },{
            url:'images/others/03.png',
            width:117,
            height:306
        },{
            url:'images/others/04.png',
            width:138,
            height:281
        },{
            url:'images/others/05.png',
            width:108,
            height:82
        },{
            url:'images/others/06.png',
            width:115,
            height:98
        },{
            url:'images/others/07.png',
            width:140,
            height:81
        },{
            url:'images/others/08.png',
            width:87,
            height:103
        },{
            url:'images/others/09.png',
            width:454,
            height:516
        },{
            url:'images/others/10.png',
            width:55,
            height:122
        },{
            url:'images/others/11.png',
            width:178,
            height:259
        },{
            url:'images/others/12.png',
            width:323,
            height:186
        },{
            url:'images/others/13.png',
            width:262,
            height:177
        },{
            url:'images/others/14.png',
            width:227,
            height:168
        },{
            url:'images/others/15.png',
            width:332,
            height:341
        },{
            url:'images/others/16.png',
            width:194,
            height:253
        },{
            url:'images/others/17.png',
            width:97,
            height:175
        },{
            url:'images/others/18.png',
            width:368,
            height:633
        },{
            url:'images/others/19.png',
            width:221,
            height:178
        },{
            url:'images/others/20.png',
            width:55,
            height:266
        },{
            url:'images/others/21.png',
            width:55,
            height:266
        },{
            url:'images/others/22.png',
            width:55,
            height:266
        },{
            url:'images/others/23.png',
            width:55,
            height:266
        },{
            url:'images/others/24.png',
            width:415,
            height:325
        },{
            url:'images/others/25.png',
            width:242,
            height:283
        },{
            url:'images/others/26.png',
            width:133,
            height:134
        },{
            url:'images/others/27.png',
            width:109,
            height:64
        },{
            url:'images/others/28.png',
            width:454,
            height:365
        }]
    },
    computed:{
        userInfo:function(){
            return {
                sex:'',
                facing:'front',
            }
        },
    },
    mounted:function(){
        var _this = this
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.fontSize = fontSize
        this.initCanvas()
        document.addEventListener('touchend',function(e){
            if(_this.currentRotate){
                _this.currentRotate.dragging = false
                _this.currentRotate = null
            }
        },this)
    },
    methods:{
        getRem:function(value){
            // return value / (750 / 16)
            return value * (750 / 1080) / (750 / 16)
        },
        getPx:function(value){
            return value * (750 / 1080) / (750 / 16) * this.fontSize
        },
        initCanvas:function(){
            // 创建canvas画布（1080x1736）
        　　 // 并设置背景为黑色(16进制),第三个参数（options对象）是可选的
        　　 // 然后将其添加到html中
            var content = this.$refs.content
            // PIXI.Application
            // PIXI.CanvasRenderer
            var can = new PIXI.Application(this.width,this.height,{
                antialias: true,  
                backgroundColor:0xffffff
            })
            content.appendChild(can.view)
            // 使用图片方式创建背景精灵
            this.backgroundStage = new PIXI.Container()
            var background = this.setBackground(0)
            // 将背景精灵放置于舞台之上
            this.backgroundStage.index = 0
            this.backgroundStage.addChild(background)
            can.stage.addChild(this.backgroundStage)
            // can.render(this.stage)
            // 之后的对象都存在于舞台之上
            // this.stage: 用于放置人物
            this.stage = new PIXI.Container()
            this.stage.x = 0
            this.stage.y = 0
            can.stage.addChild(this.stage)
            this.stageE = new PIXI.Container()
            can.stage.addChild(this.stageE)
            this.stageO = new PIXI.Container()
            can.stage.addChild(this.stageO)
        },
        setBackground:function(index){
            var current = this.room[index],
                background = new PIXI.Sprite.fromImage(current.url)
            background.width = this.width
            background.height = this.getPx(current.height)
            return background
        },
        onDragStart:function(event){
            // store a reference to the data
            // the reason for this is because of multitouch
            // we want to track the movement of this particular touch
            this.data = event.data;
            // this.alpha = 0.5;
            this.dragging = true;
        },
        onDragMove:function(){
            if (this.dragging) {
                var newPosition = this.data.getLocalPosition(this.parent);
                this.x = newPosition.x;
                this.y = newPosition.y;
            }
        },
        onDragEnd:function(){
            // this.alpha = 1;
            this.dragging = false;
            // set the interaction data to null
            this.data = null;
        },
        changeClassify:function(index){
            var length = this.people.length
            this.currentRoleType = length > 0 ? this.people[length - 1].role : 0
            this.classifyActive = index
        },
        selectRole:function(index){
            var stage = null
            if(this.stageE.children.length == 0){
                stage = this.createRole(index)
                this.stageE.addChild(stage)
            }else if(this.stageE.children.length == 1){
                var temp = this.stageE.children[0]
                this.stageO.addChild(temp)
                temp.chosen = true
                temp.outline.visible = true
                this.stageE.removeChildren()
                stage = this.createRole(index)
                this.stageE.addChild(stage)
            }
            
        },
        createRole:function(index){
            var stage = new PIXI.Container(),
                length = this.people.length,
                _this = this
            stage.index = length
            _this.people.push(stage)
            stage.chosen = true
            stage.interactive = true
            stage.buttonMode = true
            stage.on("touchstart",function(o){
                new TWEEN.Tween(this.scale).to({
                    x:1.015,
                    y:1.015
                },100).start()
                if(!this.chosen){
                    this.chosen = true
                    this.outline.visible = true
                    if(_this.stageE.children.length){

                    }else{
                        var first = _this.stageE.children[0]
                        first.chosen = false
                        first.outline.visible = false
                        _this.stageO.addChild(first)
                        _this.stageE.removeChildren()
                    }
                }
                // _this.people.remove(this)
                _this.people.splice(this.index,1)
                _this.people.push(this)
                // 更新底部配置界面所有物体的状态
                // e(this.role,t)
                _this.stageE.addChild(this)
                _this.stageO.removeChild(this)
            }).on("touchend", function() {
                new TWEEN.Tween(this.scale).to({
                    x: 1,
                    y: 1
                }, 100).start()
            })
            stage.role = index
            stage.facing = 0
            stage.emotion = 0
            stage.clothes = 0
            stage.hair = 0
            var x = Math.floor(Math.random() * 50) - 50,
                y = Math.floor(Math.random() * 50) - 50,
                data = this.role[index][stage.facing]
            stage.globalPosition = {
                x:data.globalPosition.x + x,
                y:data.globalPosition.y + y
            }
            stage.data = {
                rotation:0
            }
            this.addChild(stage,{
                role:data,  // 朝向
                emotion:this.emotion[index][stage.emotion],  // 表情
                clothes:this.clothes[index][stage.facing][stage.clothes],  // 衣服
                hair:this.hair[index][stage.hair]  // 表情
            })
            return stage
        },
        addChild:function(stage,data){
            var _this = this
            var headStage = new PIXI.Container()
            var bodyStage = new PIXI.Container()
            var lineStage = new PIXI.Container()
            var body = new PIXI.Sprite.fromImage(data.clothes.url),
                minx = 0,
                miny = 0
            
            body.width = this.getPx(data.clothes.width)
            body.height = this.getPx(data.clothes.height)
            body.position.set(
                this.getPx(data.role.bodyImgPosition.x),
                this.getPx(data.role.bodyImgPosition.y))
            bodyStage.position.set(0,
                this.getPx(data.clothes.position.y-data.emotion.position.y-data.hair.position.y))
            bodyStage.addChild(body)

            var head = new PIXI.Sprite.fromImage(data.emotion.url)
            head.width = this.getPx(data.emotion.width)
            head.height = this.getPx(data.emotion.height)
            if(data.emotion.position){
                if(minx > data.emotion.position.x){
                    minx = data.emotion.position.x
                }
                if(miny > data.emotion.position.y){
                    miny = data.emotion.position.y
                }
                head.position.set(
                    this.getPx(data.role.headPosition.x+data.emotion.position.x), 
                    this.getPx(data.role.headPosition.y-data.hair.position.y))
            }else{
                head.position.set(
                    this.getPx(data.role.headPosition.x), 
                    this.getPx(data.role.headPosition.y))
            }
            headStage.position.set(
                -this.getPx(data.clothes.position.x),0)
                // this.getPx(-data.clothes.position.y))
            headStage.addChild(head)
            var hair = new PIXI.Sprite.fromImage(data.hair.url)
            hair.width = this.getPx(data.hair.width)
            hair.height = this.getPx(data.hair.height)
            if(data.hair.position){
                if(minx > data.hair.position.x){
                    minx = data.hair.position.x
                }
                if(miny > data.hair.position.y){
                    miny = data.hair.position.y
                }
                hair.position.set(
                    this.getPx(data.role.hairPosition.x+data.hair.position.x),0)
                    // this.getPx(data.role.hairPosition.y+data.hair.position.y))
            }else{
                hair.position.set(
                    this.getPx(data.role.hairPosition.x),
                    this.getPx(data.role.hairPosition.y))
            }
            headStage.addChild(hair)

            bodyStage.interactive = true
            bodyStage.buttonMode = true
            bodyStage.on('touchstart',function(o){
                _this.roleTouchStart(o,this)
            })
            .on("touchmove", function(o){
                _this.roleTouchMove(o,this)
            })
            .on("touchend", function(){
                _this.roleTouchEnd(this)
            })
            headStage.interactive = true
            headStage.buttonMode = true
            headStage.on('touchstart',function(o){
                _this.roleTouchStart(o,this)
            })
            .on("touchmove", function(o){
                _this.roleTouchMove(o,this)
            })
            .on("touchend", function(){
                _this.roleTouchEnd(this)
            })
            lineStage.position.set(this.getPx(minx),this.getPx(miny))

            stage.head = headStage
            stage.body = bodyStage
            stage.outline = lineStage
            stage.addChild(headStage,bodyStage,lineStage)
            
            stage.pivot.set(stage.width / 2, stage.height / 2)
            stage.position.set(stage.globalPosition.x + stage.width / 2, 
                        stage.globalPosition.y + stage.height / 2)
            // if(stage.facing == 1){
            //     stage.pivot.set(0, o.height / 2)
            //     stage.position.set(stage.globalPosition.x + stage.width / 2, 
            //         stage.globalPosition.y + stage.height / 2)
            //     if(stage.role == 0){
            //         stage.globalPosition.x += 150
            //     }else if(stage.role == 1){
            //         stage.globalPosition.x += 130
            //     }
            // }else if(stage.pivot._x == 0){
            //     if(stage.role == 0){
            //         stage.globalPosition.x += 150
            //     }else if(stage.role == 1){
            //         stage.globalPosition.x += 130
            //     }
            //     stage.pivot.set(stage.width / 2, stage.height / 2),
            //     stage.position.set(stage.globalPosition.x + stage.width / 2, 
            //         stage.globalPosition.y + stage.height / 2)
            // }
        },
        roleTouchStart:function(o,self){
            self.dragging = true
            self.startPosition = {
                x: o.data.global.x,
                y: o.data.global.y
            }
        },
        roleTouchMove:function(o,self){
            if(self.dragging){
                self.newPosition = {
                    x: o.data.global.x,
                    y: o.data.global.y
                }
                self.parent.position.set(
                    self.newPosition.x - self.startPosition.x + self.parent.globalPosition.x + self.parent.pivot._x, 
                    self.newPosition.y - self.startPosition.y + self.parent.globalPosition.y + self.parent.pivot._y)
            }
        },
        roleTouchEnd:function(self){
            self.dragging = false
            self.parent.globalPosition.x = self.parent.position.x - self.parent.pivot._x
            self.parent.globalPosition.y = self.parent.position.y - self.parent.pivot._y
        },
        changeFacing:function(index){
            var length = this.people.length
            if(length > 0){
                var stage = this.people[length - 1]
                this.setOnTop(stage)
                this.setFacing(stage,index)
            }
        },
        setFacing:function(stage,index){
            var _this = this
            if(stage.facing != index){
                stage.facing = index
                stage.removeChildren()
                var data = this.role[stage.role][stage.facing]
                this.addChild(stage,{
                    role:data,  // 朝向
                    emotion:this.emotion[stage.role][stage.emotion],  // 表情
                    clothes:this.clothes[stage.role][stage.facing][stage.clothes],  // 衣服
                    hair:this.hair[stage.role][stage.hair]  // 表情
                })
                setTimeout(function() {
                    _this.drawSelection(stage)
                }, 100)
            }
        },
        setOnTop:function(stage){
            if (stage != this.stageE.children[0]) {
                if (this.stageE.children.length == 0){

                }else {
                    var t = this.stageE.children[0]
                    t.chosen = false
                    t.outline.visible = false
                    this.stageO.addChild(t)
                    this.stageE.removeChildren()
                }
                // e(stage.sex, stage)
                this.stageE.addChild(stage)
                this.stageO.removeChild(stage)
                stage.chosen = true
                stage.outline.visible = true
            }
        },
        changeClothes:function(index){
            var length = this.people.length
            if(length > 0){
                var stage = this.people[length - 1]
                this.setOnTop(stage)
                this.setClothes(stage,index)
            }
        },
        setClothes:function(stage,index){
            var _this = this
            if(stage.clothes != index){
                stage.clothes = index
                stage.removeChildren()
                this.addChild(stage,{
                    role:this.role[stage.role][stage.facing],  // 朝向
                    emotion:this.emotion[stage.role][stage.emotion],  // 表情
                    clothes:this.clothes[stage.role][stage.facing][stage.clothes],  // 衣服
                    hair:this.hair[stage.role][stage.hair]  // 表情
                })
                setTimeout(function() {
                    _this.drawSelection(stage)
                }, 100)
            }
        },
        changeMotion:function(index){
            var length = this.people.length
            if(length > 0){
                var stage = this.people[length - 1]
                this.setOnTop(stage)
                this.setMotion(stage,index)
            }
        },
        setMotion:function(stage,index){
            var _this = this
            if(stage.emotion != index){
                stage.emotion = index
                stage.removeChildren()
                this.addChild(stage,{
                    role:this.role[stage.role][stage.facing],  // 朝向
                    emotion:this.emotion[stage.role][stage.emotion],  // 表情
                    clothes:this.clothes[stage.role][stage.facing][stage.clothes],  // 衣服
                    hair:this.hair[stage.role][stage.hair]  // 表情
                })
                setTimeout(function() {
                    _this.drawSelection(stage)
                }, 100)
            }
        },
        changeHair:function(index){
            var length = this.people.length
            if(length > 0){
                var stage = this.people[length - 1]
                this.setOnTop(stage)
                this.setHair(stage,index)
            }
        },
        setHair:function(stage,index){
            var _this = this
            if(stage.hair != index){
                stage.hair = index
                stage.removeChildren()
                this.addChild(stage,{
                    role:this.role[stage.role][stage.facing],  // 朝向
                    emotion:this.emotion[stage.role][stage.emotion],  // 表情
                    clothes:this.clothes[stage.role][stage.facing][stage.clothes],  // 衣服
                    hair:this.hair[stage.role][stage.hair]  // 表情
                })
                setTimeout(function() {
                    _this.drawSelection(stage)
                }, 100)
            }
        },
        changeRoom:function(index){
            if(this.backgroundStage.index != index){
                var background = this.setBackground(index)
                this.backgroundStage.index = index
                this.backgroundStage.removeChildren()
                this.backgroundStage.addChild(background)
            }
        },
        addOthers:function(index){
            var _this = this
            if (this.stageE.children.length == 1) {
                var current = this.stageE.children[0];
                current.chosen = false
                current.outline.visible = false
                this.stageO.addChild(current),
                this.stageE.removeChildren()
            }
            var otherStage = new PIXI.Container();
            otherStage.chosen = true
            otherStage.interactive = true
            otherStage.buttonMode = true
            otherStage.on("touchstart", function(o) {
                new TWEEN.Tween(this.scale).to({
                    x: 1.015,
                    y: 1.015
                }, 100).start()
                if (!this.chosen) {
                    this.chosen = true
                    this.outline.visible = true
                    if (_this.stageE.children.length == 0){

                    }else {
                        var last = _this.stageE.children[0];
                        last.chosen = false
                        last.outline.visible = false
                        _this.stageO.addChild(last),
                        _this.stageE.removeChildren()
                    }
                    _this.stageE.addChild(this)
                    _this.stageO.removeChild(this)
                }
            }),
            otherStage.data = {};
            var x = 50 * Math.random() - 50
              , y = 50 * Math.random() - 50;
            otherStage.globalPosition = {
                x: 200 + x,
                y: 500 + y
            },
            otherStage.position.set(otherStage.globalPosition.x, otherStage.globalPosition.y);
            var subject = new PIXI.Sprite.fromImage(_this.others[index].url)
            subject.width = _this.getPx(_this.others[index].width)
            subject.height = _this.getPx(_this.others[index].height)
            subject.interactive = true
            subject.buttonMode = true
            var outer = new PIXI.Container();
            otherStage.addChild(subject, outer)
            otherStage.outline = outer
            subject.texture.baseTexture.hasLoaded ? b(otherStage) : subject.texture.baseTexture.on("loaded", function() {
                _this.setOthersOperation(otherStage)
            }),
            _this.stageE.addChild(otherStage)
        },
        setOthersOperation:function(stage){
            var _this = this
            stage.outline.removeChildren();
            var gra = new PIXI.Graphics();
            gra.lineStyle(1, 16777215, 1);
            var width = stage.width,
                height = stage.height;
            stage.pivot.set(width / 2, height / 2),
            stage.position.set(stage.globalPosition.x + width / 2, stage.globalPosition.y + height / 2);
            var distance = 20;
            gra.moveTo(-distance, -distance),
            _this.drawDashLine(gra, -distance, -distance, width + distance, -distance),
            _this.drawDashLine(gra, width + distance, -distance, width + distance, height + distance),
            _this.drawDashLine(gra, width + distance, height + distance, -distance, height + distance),
            _this.drawDashLine(gra, -distance, height + distance, -distance, -distance),
            stage.children[0].on("touchstart", function(o) {
                this.dragging = true
                this.startPosition = {
                    x: o.data.global.x,
                    y: o.data.global.y
                }
            }).on("touchmove", function(o) {
                if(this.dragging){
                    this.newPosition = {
                        x: o.data.global.x,
                        y: o.data.global.y
                    },
                    this.parent.position.set(
                        this.newPosition.x - this.startPosition.x + this.parent.globalPosition.x + this.parent.pivot._x, 
                        this.newPosition.y - this.startPosition.y + this.parent.globalPosition.y + this.parent.pivot._y)
                }
            }).on("touchend", function() {
                this.dragging = false
                this.parent.globalPosition.x = this.parent.position.x - this.parent.pivot._x,
                this.parent.globalPosition.y = this.parent.position.y - this.parent.pivot._y
            }),
            stage.outline.addChild(gra);
            var rotate = new PIXI.Sprite.fromImage("images/rotate.png")
            rotate.position.set(-distance-42, -distance-42),
            rotate.interactive = true
            rotate.buttonMode = true
            rotate.on("touchstart", function(o) {
                this.dragging = true;
                var global = o.data.global;
                this.parent.parent.data.rotation = this.parent.parent.rotation;
                var angle = ANGLE({
                    x: this.parent.parent.position.x,
                    y: this.parent.parent.position.y
                }, global);
                this.startRotation = angle
                _this.currentRotate = this
            }).on("touchmove", function(o) {
                if (this.dragging) {
                    var global = o.data.global
                      , angle = ANGLE({
                        x: this.parent.parent.position.x,
                        y: this.parent.parent.position.y
                    }, global);
                    this.parent.parent.rotation = angle - this.startRotation + this.parent.parent.data.rotation
                }
            }).on("touchend", function() {
                this.dragging = false
                _this.currentRotate = null
            });
            var close = new PIXI.Sprite.fromImage("images/close.png")
            close.position.set(width + distance, -distance - 42)
            close.interactive = true
            close.buttonMode = true
            close.on("tap", function() {
                this.parent.parent.parent.removeChild(this.parent.parent)
            }),
            stage.outline.addChild(rotate, close)
        },
        drawSelection:function(stage){
            var _this = this
            stage.outline.removeChildren();
            var gra = new PIXI.Graphics();
            gra.lineStyle(1, 16777215, 1);  // 0xffffff
            var width = stage.width
              , height = stage.height;
            // 3 != stage.facingTo && 6 == stage.faceIndex && (height -= 130)
            gra.moveTo(0, 0),
            _this.drawDashLine(gra, 0, 0, width, 0),
            _this.drawDashLine(gra, width, 0, width, height),
            _this.drawDashLine(gra, width, height, 0, height),
            _this.drawDashLine(gra, 0, height, 0, 0),
            stage.outline.addChild(gra);
            var rotate = new PIXI.Sprite.fromImage("images/rotate.png")
            rotate.position.set(-42, -42),
            rotate.interactive = true
            rotate.buttonMode = true
            rotate.on("touchstart", function(o) {
                this.dragging = true;
                var global = o.data.global;
                this.parent.parent.data.rotation = this.parent.parent.rotation;
                var angle = ANGLE({
                    x: this.parent.parent.position.x,
                    y: this.parent.parent.position.y
                }, global);
                this.startRotation = angle
                _this.currentRotate = this
            }).on("touchmove", function(o) {
                if (this.dragging) {
                    var global = o.data.global
                      , angle = ANGLE({
                        x: this.parent.parent.position.x,
                        y: this.parent.parent.position.y
                    }, global);
                    this.parent.parent.rotation = angle - this.startRotation + this.parent.parent.data.rotation
                }
            }).on("touchend", function() {
                this.dragging = false
                _this.currentRotate = null
            });
            var close = new PIXI.Sprite.fromImage("images/close.png")
            close.position.set(width, -42)
            close.interactive = true
            close.buttonMode = true
            close.on("tap", function() {
                // _this.people.remove(this.parent.parent)
                _this.people.splice(this.parent.parent.index,1)
                this.parent.parent.parent.removeChild(this.parent.parent)
                // if(_this.people.length > 0 ){
                //     e(_this.people[_this.people.length - 1].sex, _this.people[_this.people.length - 1])
                // }else{
                //     e(-100)
                // }
            }),
            stage.outline.addChild(rotate, close)
        },
        getBeveling:function(dx, dy) {
            return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
        },
        drawDashLine:function(gra, startX, startY, endX, endY, dis) {
            dis = void 0 === dis ? 5 : dis;
            var distance = this.getBeveling(endX - startX, endY - startY),
                ra = Math.floor(distance / dis),
                func = '',
                i = 0
            for (i = 0; i < ra; i++){
                if(i % 2 == 0){
                    func = "moveTo"
                }else {
                    func = "lineTo"
                }
                gra[func](
                    startX + (endX - startX) / ra * i, 
                    startY + (endY - startY) / ra * i
                )
            }
        }
    }
})