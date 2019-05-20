/**
 * 功能说明:
 * 1.图片自动向左播放，但是当鼠标过轮播区时暂停播放，放开则继续；
 * 2.点击左侧箭头显示上一张图；
 * 3.点击右侧箭头显示下一张图；
 * 4.当鼠标滑到指示点的时候，显示对应的一张图；
 *
 */
$(function () {
    var $container = $('.banner-box');//轮播展示区
    var $pics = $(".pics-list");//图片
    var $points = $('.points-list li');//指示点组
    var $prev = $('.prev');//上一页
    var $next = $('.next');//下一页
    var PAGE_WIDTH = 1200; //一页的宽度
    var TIME = 400; // 翻页的持续时间
    var imgCount = $points.length;//指示点总数===图片总数
    var curIndex = 0; //当前下标
    /**
     * 1.
     * --图片自动向左播放
     * --当鼠标过轮播区时暂停播放
     * --放开则继续
     */
    //滑到最后一张则从第一张开始
    var move=function () {
        curIndex = (curIndex < imgCount - 1) ? (++curIndex) : 0;
        //调用变换处理函数
        changeTo(curIndex);
    };
    // 定时器自动变换3秒每次
    var autoChange = setInterval(move, 3000);

    //当鼠标悬停在轮播区域，自动轮播暂停
    $container.hover(function () {
        // 清除定时器
        clearInterval(autoChange)
    }, function () {
        autoChange = setInterval(move, 3000);
    });

    // 点击左侧箭头显示下一张图
    $next.click(function () {
        move()
    });
    //点击左侧箭头显示上一张图
    $prev.click(function () {
        curIndex = (curIndex > 0) ? (--curIndex) : (imgCount - 1);
        changeTo(curIndex);
    });
    //点击指示点图标切换到对应的页
    $points.mouseover(function () {
        curIndex=$(this).index();
        changeTo(curIndex);
    });
    /**
     * 变换函数 changeTo(@param)
     * @param num 切换目标索引
     */
    function changeTo(num) {
        var goLeft = (- num * PAGE_WIDTH)+"px";//偏移的值
        $pics.animate({left:goLeft}, TIME);//滚动到指定图片
        $points.removeClass("active").eq(num).addClass("active");//指示点锁定
    }
})