//通过姓名查询信息
$('.search').on("click",function () {
    var name = $('#search').val();
    $.ajax({
        url: "/information/info",
        type: "GET",
        data: {"name":name},
        success:function (data) {
            if (data.success){

            }else {

            }
        }
    })
})


//查看档案信息
$('.edit').on("click",function () {
    var name = $(this).parent().siblings(".name").text();

    function getInfo(id){
        $.ajax({
            url: "/information/info/"+id,
            type: "GET",
            success:function (req) {
                if (req.success){

                }
            }
        })
    }
})
