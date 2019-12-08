var list = new Array();
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
function deleterela(temp) {
    var id = $(temp).attr("data");
    if(id ==null){
        var i = $(temp).parent().prev().children(1).attr("alt");
        $(temp).parent().parent().remove();
        list.splice(i,1);
        return;
    }
    $(temp).parent().parent().remove();
    $.ajax({
        url: "/information/relative/" + id,
        type: "DELETE",
        success: function (data) {
            if (data.success) {
                alert("删除成功");
            } else {
                alert(data.message);
                window.location.href="../index.html";
            }
        },
        error: function (data) {
            alert(data.message);
        }
    })
}
var Request = new Object();
Request = GetRequest();
//取到id
var id = Request.id;
$(function () {
    detail(id);
})
//添加亲人
function addrelative() {
    $('#par').append("  <tr ><td></td>\n" +
        "            <td class=\"rappellation\">\n" +
        "                <input type=\"text\" class=\"form-control\" >\n" +
        "            </td>\n" +
        "            <td class=\"rrname\">\n" +
        "                <input type=\"text\" class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td class=\"rage\">\n" +
        "                <input type=\"text\" class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td class=\"rpoliticaloutlook\"> \n" +
        "                <input type=\"text\" class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td  class=\"rworkunit\">\n" +
        "                <input type=\"text\" class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <button class=\"btn btn-danger\" onclick=\"deletexin(this)\">删除</button>\n" +
        "            </td>\n" +
        "        </tr>");
}
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
                $('#par').html('');
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
                        "                "+list[i].rname+"\n" +
                        "            </td>\n" +
                        "            <td>\n" ;
                    if(list[i].age==0){
                        str+= "                "+" "+"\n" +
                            "            </td>\n" +
                            "            <td>\n" +
                            "                "+list[i].politicaloutlook+"\n" +
                            "            </td>\n" +
                            "            <td >\n" +
                            "                "+list[i].workunit+"\n" +
                            "            </td>\n" +
                            "            <td>\n" +
                            "                <button class=\"btn btn-danger\" onclick=\"deleterela(this)\" data='"+list[i].rid+"'>删除</button>\n" +
                            "            </td>"+
                            "        </tr>";
                    }else{
                        str+= "                "+list[i].age+"\n" +
                            "            </td>\n" +
                            "            <td>\n" +
                            "                "+list[i].politicaloutlook+"\n" +
                            "            </td>\n" +
                            "            <td >\n" +
                            "                "+list[i].workunit+"\n" +
                            "            </td>\n" +
                            "            <td>\n" +
                            "                <button class=\"btn btn-danger\" onclick=\"deleterela(this)\" data='"+list[i].rid+"'>删除</button>\n" +
                            "            </td>"+
                            "        </tr>";
                    }


                }
                str += "</tbody>";
                $('#par').html(str);
                var xinflag =0;
                var qingflag = 0;
                var tanflag = 0;
                var lianzheng = 0;
                var qita  = 0;
                var xstr = "";
                var qstr="";
                var tstr="";
                var lstr="";
                var ostr="";
                var flist = data.obj.filesList;
                for(let i=0;i<flist.length;i++){
                    if(flist[i].fileflag==1){
                        if(xinflag==0){
                            xstr+=" <tr>\n" +
                                "            <td  rowspan=\"100\" style=\"line-height: 100px !important; width: 250px\">信访及处理情况</td>\n" +
                                "            <td colspan=\"5\" style='border:1px solid #ddd'>\n" +
                                "                <a  href= '/information/files/download?id="+flist[i].fid+"'>"+flist[i].filedescription+"</a>\n" +
                                "            </td>\n" +
                                "<td style='border:1px solid #ddd'>   <button class=\"btn btn-danger\" onclick=\"deletefile(this)\"  alt='"+flist[i].fid+"'>删除</button> </td>"+
                                "        </tr>";
                            xinflag++;
                        }else{
                            xstr+=" <tr>\n" +
                                "            <td colspan=\"5\" style='border:1px solid #ddd'>\n" +
                                "                <a  href= '/information/files/download?id="+flist[i].fid+"'>"+flist[i].filedescription+"</a>\n" +
                                "            </td>\n" +
                                "<td style='border:1px solid #ddd'>   <button class=\"btn btn-danger\" onclick=\"deletefile(this)\"  alt='"+flist[i].fid+"'>删除</button> </td>"+
                                "        </tr>";
                            xinflag++;
                        }
                    }else if(flist[i].fileflag==2){
                        if(qingflag==0){
                            qstr+="<tr>\n" +
                                "            <td  rowspan=\"100\" style=\"line-height: 70px !important; width: 250px\">因不实报告个人事项收到处理情况</td>\n" +
                                "            <td colspan=\"5\" style='border:1px solid #ddd'>\n" +
                                "                <a  href= '/information/files/download?id="+flist[i].fid+"'>"+flist[i].filedescription+"</a>\n" +
                                "            </td>\n" +
                                "<td style='border:1px solid #ddd'>   <button class=\"btn btn-danger\" onclick=\"deletefile(this)\"  alt='"+flist[i].fid+"'>删除</button> </td>"+
                                "        </tr>";
                            qingflag++;
                        }else{
                            qstr+="<tr>\n" +
                                "            <td colspan=\"5\" style='border:1px solid #ddd'>\n" +
                                "                <a  href= '/information/files/download?id="+flist[i].fid+"'>"+flist[i].filedescription+"</a>\n" +
                                "            </td>\n" +
                                "<td style='border:1px solid #ddd'>   <button class=\"btn btn-danger\"  onclick=\"deletefile(this)\"  alt='"+flist[i].fid+"'>删除</button> </td>"+
                                "        </tr>";
                            qingflag++;
                        }
                    }else if(flist[i].fileflag==3){
                        if(tanflag==0){
                            tstr+=" <tr>\n" +
                                "            <td  rowspan=\"100\" style=\"line-height: 100px !important; width: 250px\">谈话函询初核等有关材料</td>\n" +
                                "            <td colspan=\"5\" style='border:1px solid #ddd'>\n" +
                                "                <a  href= '/information/files/download?id="+flist[i].fid+"'>"+flist[i].filedescription+"</a>\n" +
                                "            </td>\n" +
                                "<td style='border:1px solid #ddd'>   <button class=\"btn btn-danger\" onclick=\"deletefile(this)\"  alt='"+flist[i].fid+"'>删除</button> </td>"+
                                "        </tr>";
                            tanflag++;
                        }else{
                            tstr+="<tr>\n" +
                                "            <td colspan=\"5\" style='border:1px solid #ddd' >\n" +
                                "                <a  href= '/information/files/download?id="+flist[i].fid+"'>"+flist[i].filedescription+"</a>\n" +
                                "            </td>\n" +
                                "<td style='border:1px solid #ddd'>   <button class=\"btn btn-danger\" onclick=\"deletefile(this)\"  alt='"+flist[i].fid+"'>删除</button> </td>"+
                                "        </tr>";
                            tanflag++;
                        }
                    }else if(flist[i].fileflag==4){
                        if(lianzheng == 0){
                            lstr+=" <tr>\n" +
                                "            <td  rowspan=\"100\" style=\"line-height: 100px !important; width: 250px\">党风廉政回复材料</td>\n" +
                                "            <td colspan=\"5\" style='border:1px solid #ddd'>\n" +
                                "                <a  href= '/information/files/download?id="+flist[i].fid+"'>"+flist[i].filedescription+"</a>\n" +
                                "            </td>\n" +
                                "<td style='border:1px solid #ddd'>   <button class=\"btn btn-danger\" onclick=\"deletefile(this)\"  alt='"+flist[i].fid+"'>删除</button> </td>"+
                                "        </tr>";
                            lianzheng++;
                        }else{
                            lstr+="<tr>\n" +
                                "            <td colspan=\"5\" style='border:1px solid #ddd'>\n" +
                                "                <a  href= '/information/files/download?id="+flist[i].fid+"'>"+flist[i].filedescription+"</a>\n" +
                                "            </td>\n" +
                                "<td style='border:1px solid #ddd'>   <button class=\"btn btn-danger\" onclick=\"deletefile(this)\"  alt='"+flist[i].fid+"'>删除</button> </td>"+
                                "        </tr>";
                            lianzheng++;
                        }
                    }else if(flist[i].fileflag==5){
                        if(qita==0){
                            ostr+="<tr>\n" +
                                "            <td  rowspan=\"100\" style=\"line-height: 100px !important; width: 250px\">其他材料</td>\n" +
                                "            <td colspan=\"5\" style='border:1px solid #ddd'>\n" +
                                "                <a  href= '/information/files/download?id="+flist[i].fid+"'>"+flist[i].filedescription+"</a>\n" +
                                "            </td>\n" +
                                "<td style='border:1px solid #ddd'>   <button class=\"btn btn-danger\" onclick=\"deletefile(this)\"  alt='"+flist[i].fid+"'>删除</button> </td>"+
                                "        </tr>";
                            qita++;
                        }else{
                            ostr+="<tr>\n" +
                                "            <td colspan=\"5\" style='border:1px solid #ddd'>\n" +
                                "                <a href= '/information/files/download?id="+flist[i].fid+"'>"+flist[i].filedescription+"</a>\n" +
                                "            </td>\n" +
                                "<td style='border:1px solid #ddd'>   <button class=\"btn btn-danger\" onclick=\"deletefile(this)\"  alt='"+flist[i].fid+"'>删除</button> </td>"+
                                "        </tr>";
                            qita++;
                        }
                    }

                }
                if(xinflag==0){
                    xstr+=" <tr>\n" +
                        "            <td  rowspan=\"100\" style=\"line-height: 100px !important; width: 250px\">信访及处理情况</td>\n" +
                        "            <td colspan=\"5\" style='border:1px solid #ddd'>\n" +
                        "            </td>\n" +
                        "        </tr>";
                }
                if(qingflag==0){
                    qstr+="<tr>\n" +
                        "            <td  rowspan=\"100\" style=\"line-height: 70px !important; width: 250px\">因不实报告个人事项收到处理情况</td>\n" +
                        "            <td colspan=\"5\" style='border:1px solid #ddd'>\n" +
                        "            </td>\n" +
                        "        </tr>";
                }
                if(tanflag==0){
                    tstr+=" <tr>\n" +
                        "            <td  rowspan=\"100\" style=\"line-height: 100px !important; width: 250px\">谈话函询初核等有关材料</td>\n" +
                        "            <td colspan=\"6\" style='border:1px solid #ddd'>\n" +
                        "            </td>\n" +
                        "        </tr>";
                }
                if(lianzheng==0){
                    lstr+=" <tr>\n" +
                        "            <td  rowspan=\"100\" style=\"line-height: 100px !important; width: 250px\">党风廉政回复材料</td>\n" +
                        "            <td colspan=\"5\" style='border:1px solid #ddd'>\n" +
                        "            </td>\n" +
                        "        </tr>";
                }
                if(qita==0){
                    ostr+="<tr>\n" +
                        "            <td  rowspan=\"100\" style=\"line-height: 100px !important; width: 250px\">其他材料</td>\n" +
                        "            <td colspan=\"5\" style='border:1px solid #ddd'>\n" +
                        "            </td>\n" +
                        "        </tr>";
                }
                $('#xin').html(xstr);
                $('#qingkuang').html(qstr);
                $('#tanhua').html(tstr);
                $('#lianzheng').html(lstr);
                $('#other').html(ostr);
            }
        })
    }
};
function addfile(type,id) {
    $(id).append("<tr>" +
        "            <td colspan=\"2\">\n" +
        "                <input type=\"file\" name=\"\"  class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td colspan=\"2\">\n" +
        "                    <input type=\"text\" name=\"\" placeholder=\"文件说明\"  class=\"form-control\">\n" +
        "            </td>\n" +
        "            <td>\n" +
        "                <button class=\"btn btn-primary\" onclick=\"uploadfiles("+type+",this)\">上传</button>\n" +
        "            </td>\n" +
        "            <td style='border: 1px solid #ddd'>\n" +
        "                <button class=\"btn btn-danger\" onclick=\"deletefile(this)\">删除</button>\n" +
        "            </td></tr>");
}
function uploadfiles(type,file) {
    var temp =new Object();
    var formData = new FormData();
    var f = $(file).parent().prev().prev().children(1).get(0).files[0];
    var message = $(file).parent().prev().children(1).val();
    var path;
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
                console.log("上传成功");
                temp.filepath=req.obj;
                temp.inid = id;
                temp.filedescription=message;
                temp.fileflag = type;
                var length = fileslist.push(temp);
                $(file).parent().prev().remove();
                $(file).parent().prev().attr("colspan","5");
                path = req.obj;
                //插入数据库
                $.ajax({
                    url: "/information/files",
                    type: "POST",
                    contentType : "application/json;charsetset=UTF-8",
                    data:JSON.stringify(temp),
                    success: function (data) {
                        if (data.success) {
                            sessionStorage.setItem("fid",data.obj);
                            alert("文件上传成功");
                        } else {
                            alert(data.message);
                        }
                    },
                    error: function (data) {
                        alert(data.message);
                    }
                })
                //等待设置完成
                var i=0;
                while(i<1000000){
                    i++;
                }
                var fid = sessionStorage.getItem("fid");
                var str ="<a  alt='"+fid+"' href= '/information/files/download?id="+fid+"'>"+message+"</a>";
                $(file).parent().prev().html(str);
                $(file).parent().prev().css("border","1px solid #ddd");
                $(file).parent().remove();
            } else {
                alert("文件上传失败")
            }
        }
    })
}
function deletefile(temp) {
    var i = $(temp).attr("alt");
    $(temp).parent().parent().remove();
    //删除文件
    $.ajax({
        url: "/information/files/" + i,
        type: "DELETE",
        success: function (data) {
            if (data.success) {
                alert("删除成功");
            } else {
                alert(data.message);
            }
        },
        error: function (data) {
            alert(data.message);
        }
    })
}

function updateInfo() {
    console.log("更新");
    var info = new Object();
    //填写个人信息
    info.name = $('#name').val();
    if(info.name==null||info.name==" "){
        alert("请先填写信息");
        return;
    }
    info.id=id;
    info.sex = $('#sex').val();
    info.birthday = $('#birthday').val();
    var heading = sessionStorage.getItem("head");
    if(heading!=null && heading!=""){
        info.heading = heading;
    }
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
    //guanxi
    var list = new Array();
    var appellation = $('.rappellation');
    var rname = $('.rrname');
    var age = $('.rage');
    var politicaloutlook = $('.rpoliticaloutlook');
    var workunit = $('.rworkunit');
    for(var i = 0;i<appellation.length;i++){
        var flag = appellation.eq(i).children(1).val();
        if(flag!=null&&flag!=NaN&&flag!=""){
            var obj = new Object;
            obj.appellation = appellation.eq(i).children(1).val();
            obj.rname = rname.eq(i).children(1).val();
            obj.age = age.eq(i).children(1).val();
            obj.politicaloutlook = politicaloutlook.eq(i).children(1).val();
            obj.workunit = workunit.eq(i).children(1).val();
            obj.inforid= id;
            list.push(obj);
        }
    }
    info.list = list;
    $.ajax({
        url: '/information/info',
        data: JSON.stringify(info),
        contentType : "application/json;charsetset=UTF-8",
        type: 'PATCH',
        success: function (req) {
            if (req.success) {
                alert("提交成功");
                window.location.href="../secendhtml/list.html";
            } else {
                alert(req.message);
                window.location.href="../index.html";
            }
        },
        error: function (data) {
            alert(data.message);
        }
    })
}




