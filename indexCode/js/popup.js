/**
 * 功能说明：
 * 1.点击登录弹出窗口
 * 2.点击关闭X窗口关闭
 * */
$(function () {
    // 弹出窗口
    $("#loginPopup").click(function () {
        $(document.body).css({"overflow-y": "hidden"});//禁用页面滚动
        $(".pop-wrapper,.pop-bg").show();//显示弹出窗口和遮罩层
    });
    //关闭窗口
    $('.close-btn').click(function () {
        $(document.body).removeAttr("style");//恢复页面滚动
        $(".pop-wrapper,.pop-bg").hide();//隐藏弹出窗口和遮罩层
    });
});
$(function (){
	
	
});
