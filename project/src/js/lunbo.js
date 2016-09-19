var lunbo = {

    index: 0, // 当前显示第几张
    len: 0,   // 轮播图片的个数
    dom: {},  // 缓存jquery对象
    timer: null, // 定时器

    init: function() {
        this.initDom();
        this.initSlide();
        this.myshow();

        this.tiemr = setInterval(function() {
            lunbo.mychange();
        }, 3000);
    },

    initDom: function() {
        var dom = this.dom;
        dom.li = $('.pic li');
    },

    initSlide: function() {
        var dom = this.dom;
        this.len = dom.li.size();  // 获取轮播图片的张数
    },

    myshow: function() {
        var dom = this.dom;

        dom.li.eq(this.index).find('.img1').animate({'left': 0}, 1000, function() {

            $(this).next().css('display', 'block');
            $(this).next().animate({ 'left': 0}, 1000);
        })
    },

    mychange: function() {
        var dom = this.dom;
        this.index++;

        if (this.index == this.len) {
            this.index = 0;
        }

        dom.li.eq(this.index).show().siblings().hide();
        this.myshow();

        dom.li.eq(this.index).siblings().find('.img1').css('left', '-760px');
        dom.li.eq(this.index).siblings().find('.img2').css({'left': '-20px', 'display': 'none'});
    }
}

$(function() {
    lunbo.init();
})