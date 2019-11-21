//查看档案信息
$('.edit').on("click",function () {
    var id = $(this).parent().siblings(".id").text();
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
