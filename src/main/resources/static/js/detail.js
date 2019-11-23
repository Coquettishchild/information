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
//回显数据到页面上
var detail = function(id){
    $.ajax({
        url: "/information/info/"+id,
        type: "GET",
        success:function (data) {
            if (data.success){
                $('.name').text(data.obj.name);
                $('.sex').text(data.obj.sex);
                $('.birthday').text(data.obj.birthday);
                $('.nation').text(data.obj.nation);
                $('.nativeplace').text(data.obj.nativeplace);
                $('.birthplace').text(data.obj.birthplace);
                $('.party').text(data.obj.party);
                $('.jointime').text(data.obj.jointime);
                $('.health').text(data.obj.health);
                $('.post').text(data.obj.post);
                $('.major').text(data.obj.major);
                $('.fulltimeschooling').text(data.obj.fulltimeschooling);
                $('.fulltimesgraduated').text(data.obj.fulltimesgraduated);
                $('.inserviceeducation').text(data.obj.inserviceeducation);
                $('.inservicegraduated').text(data.obj.inservicegraduated);
                $('.position').text(data.obj.position);
                $('.jianli').text(data.obj.resume);
                $('.rewards').text(data.obj.rewards);
                //亲属关系
                $('.relative').html('');
                str = "<tbody>";
                str += "<tr>\n" +
                    "            <td  rowspan=\"100\">家庭主要成员及重要社会关系</td>\n" +
                    "            <td >\n" +
                    "                称谓\n" +
                    "            </td>\n" +
                    "            <td>\n" +
                    "                姓名\n" +
                    "            </td>\n" +
                    "            <td>\n" +
                    "                年龄\n" +
                    "            </td>\n" +
                    "            <td>\n" +
                    "                政治面貌\n" +
                    "            </td>\n" +
                    "            <td colspan=\"2\">\n" +
                    "                工作单位及职务\n" +
                    "            </td>\n" +
                    "\n" +
                    "        </tr>"
                var list = data.obj.list;
                for (let i=0;i<list.length;i++){
                    str += "<tr>\n" +
                        "            <td>\n" +
                        "                "+list[i].appellation+"\n" +
                        "            </td>\n" +
                        "            <td>\n" +
                        "                "+list[i].name+"\n" +
                        "            </td>\n" +
                        "            <td>\n" +
                        "                "+list[i].age+"\n" +
                        "            </td>\n" +
                        "            <td>\n" +
                        "                "+list[i].politicaloutlook+"\n" +
                        "            </td>\n" +
                        "            <td colspan=\"2\">\n" +
                        "                "+list[i].workunit+"\n" +
                        "            </td>\n" +
                        "        </tr>"
                }
                str += "</tbody>";
                $('.relative').html(str);
            }
        }
    })
}
//跳转修改页面
function updateInfo() {
    window.location.href="../secendhtml/infor.html?id="+id;
}