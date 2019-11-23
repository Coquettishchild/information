//登录框上下居中
function middle(){
    //获取屏幕的高度
    var heightBig=window.innerHeight;
    //获取元素的高度
    var d1=document.querySelector(".lowin-wrapper");
    var heightSmall=parseFloat(window.getComputedStyle(d1).height);
    d1.style.margin=(heightBig-heightSmall)/2-300+"px auto";
}
middle();
window.onresize=middle;
//回车触发登录事件
$(document).keyup(function (event) {
    if (event.keyCode==13){
        $("#login").trigger("click");
    }
})

var login = function () {
    var userName = $("#userName").val();
    var password = $("#password").val();
    var user = new Object();
    user.username = userName;
    user.password = password;
    if(userName==null||userName==""){
        alert("请输入用户名！");
    }else if(password==null||password==""){
        alert("请输入密码！");
    }else{
        $.ajax({
            url:"/information/user/login",
            contentType : "application/json;charsetset=UTF-8",
            async:true,
            data:JSON.stringify(user),
            type:"POST",
            success:function(req){
                if(req.success===true){
                    window.location.href="./secendhtml/list.html";
                }else{
                    alert(req.message);
                }
            },
            error:function(req){
                alert(req.message);
            }
        });
    }
};