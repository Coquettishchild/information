//获取URL中的参数值
function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
var Request = new Object();
Request = GetRequest();
//取到id
var id = Request.id;
$(function () {
    detail(id);
})
//回显数据
var detail = function(id){
    if (id!=null){
        $.ajax({
            url: "/information/info/"+id,
            type: "GET",
            success: function (data) {
                $('#name').val(data.obj.name);
                $('#sex').val(data.obj.sex);
                $('#birthday').val(data.obj.birthday);
                $('#heading').val(data.obj.heading);
                $('#nation').val(data.obj.nation);
                $('#nativeplace').val(data.obj.nativeplace);
                $('#birthplace').val(data.obj.birthplace);
                $('#party').val(data.obj.party);
                $('#jointime').val(data.obj.jointime);
                $('#health').val(data.obj.health);
                $('#post').val(data.obj.post);
                $('#major').val(data.obj.major);
                $('#fulltimeschooling').val(data.obj.fulltimeschooling);
                $('#fulltimesgraduated').val(data.obj.fulltimesgraduated);
                $('#inserviceeducation').val(data.obj.inserviceeducation);
                $('#inservicegraduated').val(data.obj.inservicegraduated);
                $('#position').val(data.obj.position);
                $('#rewards').val(data.obj.rewards);
                editor2.txt.html(data.obj.resume);
                var family = $('.family').children().children();
                for (let i=0;i<family.length;i++){
                    var len = data.obj.list.length;
                    if (i>=1&&i<=len){
                        var child = $(family[i]).children().children();
                        $(child[0]).val(data.obj.list[i-1].appellation);
                        $(child[1]).val(data.obj.list[i-1].rname);
                        $(child[2]).val(data.obj.list[i-1].age);
                        $(child[3]).val(data.obj.list[i-1].politicaloutlook);
                        $(child[4]).val(data.obj.list[i-1].workunit);
                    }
                }
            }
        })
    }
}
//文件删除添加


//上传完数据，然后插入数据库（2次请求）

//删除亲人单独请求


//添加亲人单独请求


//最后提交获取亲人列表，提交到后台更新

