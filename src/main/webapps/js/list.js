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
