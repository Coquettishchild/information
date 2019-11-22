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
        $('#xin').append(
            "<tr>\n" +
            "            <td colspan=\"2\">\n" +
            "                <input type=\"file\" name=\"\" id=\"\" class=\"form-control\">\n" +
            "            </td>\n" +
            "            <td colspan=\"2\">\n" +
            "                <input type=\"text\" name=\"\" placeholder=\"文件说明\" id=\"\" class=\"form-control\">\n" +
            "            </td>\n" +
            "            <td>\n" +
            "                <button class=\"btn btn-primary\">上传</button>\n" +
            "            </td>\n" +
            "            <td>\n" +
            "                <button class=\"btn btn-danger\" onclick=\"deletexin(this)\">删除</button>\n" +
            "            </td>\n" +
            "        </tr>");
}
function deletexin(node) {
    $(node).parent().parent().remove();
}
function addpar() {
    $('#par').append(" <tr>\n" +
        "            <td></td>\n" +
        "            <td>\n" +
        "                <input type=\"text\" class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <input type=\"text\" class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <input type=\"text\" class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <input type=\"text\" class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td colspan=\"2\">\n" +
        "                <input type=\"text\" class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <button class=\"btn btn-danger\" onclick=\"deletexin(this)\">删除</button>\n" +
        "            </td>\n" +
        "        </tr>");
}
function addqingkuang() {
    $('#qingkuang').append(
        "<tr>\n" +
        "            <td colspan=\"2\">\n" +
        "                <input type=\"file\" name=\"\" id=\"\" class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td colspan=\"2\">\n" +
        "                <input type=\"text\" name=\"\" placeholder=\"文件说明\" id=\"\" class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <button class=\"btn btn-primary\">上传</button>\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <button class=\"btn btn-danger\" onclick=\"deletexin(this)\">删除</button>\n" +
        "            </td>\n" +
        "        </tr>");
}
function addtanhua() {
    $('#tanhua').append(
        "<tr>\n" +
        "            <td colspan=\"2\">\n" +
        "                <input type=\"file\" name=\"\" id=\"\" class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td colspan=\"2\">\n" +
        "                <input type=\"text\" name=\"\" placeholder=\"文件说明\" id=\"\" class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <button class=\"btn btn-primary\">上传</button>\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <button class=\"btn btn-danger\" onclick=\"deletexin(this)\">删除</button>\n" +
        "            </td>\n" +
        "        </tr>");
}
function addlianzheng() {
    $('#lianzheng').append(
        "<tr>\n" +
        "            <td colspan=\"2\">\n" +
        "                <input type=\"file\" name=\"\" id=\"\" class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td colspan=\"2\">\n" +
        "                <input type=\"text\" name=\"\" placeholder=\"文件说明\" id=\"\" class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <button class=\"btn btn-primary\">上传</button>\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <button class=\"btn btn-danger\" onclick=\"deletexin(this)\">删除</button>\n" +
        "            </td>\n" +
        "        </tr>");

}
function addother() {
    $('#other').append(
        "<tr>\n" +
        "            <td colspan=\"2\">\n" +
        "                <input type=\"file\" name=\"\" id=\"\" class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td colspan=\"2\">\n" +
        "                <input type=\"text\" name=\"\" placeholder=\"文件说明\" id=\"\" class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <button class=\"btn btn-primary\">上传</button>\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <button class=\"btn btn-danger\" onclick=\"deletexin(this)\">删除</button>\n" +
        "            </td>\n" +
        "        </tr>");

}
function toList() {
    window.location.href="../secendhtml/list.html";
}
var E = window.wangEditor
var editor2 = new E('#jianli')
editor2.create()

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

//填写个人信息
var name = $('#name').val();
var sex = $('#sex').val();
var birthday = $('#birthday').val();
var heading = $('#heading').val();
var nation = $('#nation').val();
var nativeplace = $('#nativeplace').val();
var birthplace = $('#birthplace').val();
var party = $('#party').val();
var jointime = $('#jointime').val();
var health = $('#health').val();
var post = $('#post').val();
var major = $('#major').val();
var fulltimeschooling = $('#fulltimeschooling').val();
var fulltimesgraduated = $('#fulltimesgraduated').val();
var inserviceeducation = $('#inserviceeducation').val();
var inservicegraduated = $('#inservicegraduated').val();
var position = $('#position').val();
var rewards = $('#rewards').val();
var jianli = $('#jianli').val();
