var broadcast = {
	dom:{},
	index:0,
	timer:0,
	init:function(){
		this.initDom();
		this.initStart();
		this.stop();
		this.bbtnBind();
	},
	initDom:function(){
		var dom = this.dom;
		dom.bimg = $('.bimg');
		dom.imglist = $('.bimg li');
		dom.bbtn = $('.bbtn'); 
	},
	initStart:function(){
		var dom = this.dom;
        var self = this;
        self.timer = setInterval(function(){
             self.showPic();
        },3000)
        
	},
	//图片轮播
	showPic:function(){
		var dom = this.dom;
		var self = this;
		self.index++;
		if(self.index>=dom.imglist.length){
			self.index = 0;
		}
        dom.bimg.find('li').eq(self.index).animate({opacity:1}).siblings('li').animate({opacity:0});
        dom.bbtn.find('li').eq(self.index).addClass('btn_active').siblings('li').removeClass('btn_active');
    },
    //鼠标绑定事件
    stop:function(){
    	var dom = this.dom;
    	var self = this;
    	dom.bimg.on('mouseenter',function(){
    		clearInterval(self.timer);
    	}).on('mouseleave',function(){
    		self.timer = setInterval(function(){
                self.showPic();
        },3000);
    	})
    },
    //按钮切换事件
    bbtnBind:function(){
    	var dom = this.dom;
    	var self = this;
    	dom.bbtn.on('mouseover','li',function(){
    		self.index = $(this).index()-1;
    		self.showPic();
    	})
    }
}
$(function(){
	broadcast.init();
})