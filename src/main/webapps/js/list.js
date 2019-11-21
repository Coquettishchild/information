window.onload=function(){
    list();
}

var list = function(pageNo){

    $.ajax({
        url: "/info/page/"+pageNo,
        type: "GET",
        success: function (data) {

        }
    })
}

//查看档案信息
$('.edit').on("click",function () {
    var id = $(this).parent().siblings(".id").text();
    function getInfo(id){
        $.ajax({
            url: "/information/info/"+id,
            type: "GET",
            success:function (data) {
                if (data.success){

                }
            }
        })
    }
})
