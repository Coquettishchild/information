
var fileslist = new Array();

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

function addxin() {
    $('#xin').append("<tr>" +
        "            <td colspan=\"2\">\n" +
        "                <input type=\"file\" name=\"\"  class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td colspan=\"2\">\n" +
        "                    <input type=\"text\" name=\"\" placeholder=\"文件说明\"  class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <button class=\"btn btn-primary\" onclick=\"uploadfile(1,this)\">上传</button>\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <button class=\"btn btn-danger\" onclick=\"deletexin(this)\">删除</button>\n" +
        "            </td></tr>");
}

function deletexin(node) {
    var i = $(node).parent().prev().children(1).attr("alt");
    $(node).parent().parent().remove();
    if(i==null || i==""){
        return;
    }
    fileslist.splice(i,1);
}

function addpar() {
    $('#par').append("  <tr ><td></td>\n" +
        "            <td class=\"appellation\">\n" +
        "                <input type=\"text\" class=\"form-control\" >\n" +
        "            </td>\n" +
        "            <td class=\"name\">\n" +
        "                <input type=\"text\" class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td class=\"age\">\n" +
        "                <input type=\"text\" class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td class=\"politicaloutlook\"> \n" +
        "                <input type=\"text\" class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td colspan=\"2\" class=\"workunit\">\n" +
        "                <input type=\"text\" class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <button class=\"btn btn-danger\" onclick=\"deletexin(this)\">删除</button>\n" +
        "            </td>\n" +
        "        </tr>");
}

function addqingkuang() {
    $('#qingkuang').append(
        "<tr>" +
        "            <td colspan=\"2\">\n" +
        "                <input type=\"file\" name=\"\"  class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td colspan=\"2\">\n" +
        "                    <input type=\"text\" name=\"\" placeholder=\"文件说明\"  class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <button class=\"btn btn-primary\" onclick=\"uploadfile(2,this)\">上传</button>\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <button class=\"btn btn-danger\" onclick=\"deletexin(this)\">删除</button>\n" +
        "            </td></tr>");
}

function addtanhua() {
    $('#tanhua').append(
        "<tr>" +
        "            <td colspan=\"2\">\n" +
        "                <input type=\"file\" name=\"\"  class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td colspan=\"2\">\n" +
        "                    <input type=\"text\" name=\"\" placeholder=\"文件说明\"  class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <button class=\"btn btn-primary\" onclick=\"uploadfile(3,this)\">上传</button>\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <button class=\"btn btn-danger\" onclick=\"deletexin(this)\">删除</button>\n" +
        "            </td></tr>");
}

function addlianzheng() {
    $('#lianzheng').append(
        "<tr>" +
        "            <td colspan=\"2\">\n" +
        "                <input type=\"file\" name=\"\"  class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td colspan=\"2\">\n" +
        "                    <input type=\"text\" name=\"\" placeholder=\"文件说明\"  class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <button class=\"btn btn-primary\" onclick=\"uploadfile(4,this)\">上传</button>\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <button class=\"btn btn-danger\" onclick=\"deletexin(this)\">删除</button>\n" +
        "            </td></tr>");

}

function addother() {
    $('#other').append(
        "<tr>" +
        "            <td colspan=\"2\">\n" +
        "                <input type=\"file\" name=\"\"  class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td colspan=\"2\">\n" +
        "                    <input type=\"text\" name=\"\" placeholder=\"文件说明\"  class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <button class=\"btn btn-primary\" onclick=\"uploadfile(5,this)\">上传</button>\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <button class=\"btn btn-danger\" onclick=\"deletexin(this)\">删除</button>\n" +
        "            </td></tr>");

}

function toList() {
    window.location.href="../secendhtml/list.html";
}

var E = window.wangEditor
var editor2 = new E('#resume')
editor2.create()


var heading;
function change(temp) {
    //获取头像
    var formData = new FormData($("#head")[0]);
    var file = $("#headimg").get(0).files[0];
    formData.append("file", file);
    $.ajax({
        url: '/information/info/uploadhead',
        data: formData,
        type: 'POST',
        async: true,
        contentType: false,
        processData: false,
        success: function (req) {
            if (req.success) {
                heading = req.obj;
                $('#head').html("<img src='../images/"+req.obj+"' style='width: 150px;height: 200px'>");
                alert("头像上传成功");
            } else {
                alert("头像上传失败")
            }
        }
    })
}


function upload() {
    var info = new Object();
    //填写个人信息
    info.name = $('#name').val();
    info.sex = $('#sex').val();
    info.birthday = $('#birthday').val();
    info.heading = heading;
    info.nation = $('#nation').val();
    info.nativeplace = $('#nativeplace').val();
    info.birthplace = $('#birthplace').val();
    info.party = $('#party').val();
    info.jointime = $('#jointime').val();
    info.health = $('#health').val();
    info.post = $('#post').val();
    info.major=$('#major').val();
    info.fulltimeschooling = $('#fulltimeschooling').val();
    info.fulltimesgraduated = $('#fulltimesgraduated').val();
    info.inserviceeducation = $('#inserviceeducation').val();
    info.inservicegraduated = $('#inservicegraduated').val();
    info.rewards = $('#rewards').val();
    info.position = $('#position').val();
    info.resume = editor2.txt.html();
    info.filesList = fileslist;
    var list = new Array();
    var appellation = $('.appellation');
    var name = $('.name');
    var age = $('.age');
    var politicaloutlook = $('.politicaloutlook');
    var workunit = $('.workunit');
    for(var i = 0;i<appellation.length;i++){
        var flag = appellation.eq(i).children(1).val();
        if(flag!=null&&flag!=NaN&&flag!=""){
            var obj = new Object;
            obj.appellation = appellation.eq(i).children(1).val();
            obj.name = name.eq(i).children(1).val();
            obj.age = age.eq(i).children(1).val();
            obj.politicaloutlook = politicaloutlook.eq(i).children(1).val();
            obj.workunit = workunit.eq(i).children(1).val();
            list.push(obj);
        }
    }
    info.list = list;

    $.ajax({
        url: '/information/info',
        data: JSON.stringify(info),
        contentType : "application/json;charsetset=UTF-8",
        type: 'POST',
        success: function (req) {
            if (req.success) {
               alert("提交成功");
            } else {
                alert("提交失败")
            }
        }
    })
}

function uploadfile(flag,file) {
    var temp =new Object();
    var formData = new FormData();
    var f = $(file).parent().prev().prev().children(1).get(0).files[0];
    var message = $(file).parent().prev().children(1).val();
    if(f==null){
        alert("请先选择文件");
        return;
    }
    if(message == null || message == ""){
        alert("请填写文件描述");
        return;
    }
    formData.append("file",f);
    $.ajax({
        url: '/information/files/upload',
        data: formData,
        type: 'POST',
        async: true,
        contentType: false,
        processData: false,
        success: function (req) {
            if (req.success) {
                temp.filepath=req.obj;
                temp.filedescription=message;
                temp.fileflag = flag;
                var length = fileslist.push(temp);
                $(file).parent().prev().remove();
                $(file).parent().prev().attr("colspan","5");
                var str ="<a alt='"+(length-1)+"' href='../files/"+req.obj+"'>"+message+"</a>";
               $(file).parent().prev().html(str);
               $(file).parent().remove();
                alert("文件上传成功");

            } else {
                alert("文件上传失败")
            }
        }
    })
}

//回显要修改的信息
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
                        $(child[1]).val(data.obj.list[i-1].name);
                        $(child[2]).val(data.obj.list[i-1].age);
                        $(child[3]).val(data.obj.list[i-1].politicaloutlook);
                        $(child[4]).val(data.obj.list[i-1].workunit);
                    }
                }
            }
        })
    }
}

