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
                console.log(flist.length);
                for(let i=0;i<flist.length;i++){
                    if(flist[i].fileflag==1){
                        if(xinflag==0){
                            xstr+=" <tr>\n" +
                                "            <td  rowspan=\"100\" style=\"line-height: 100px !important; width: 250px\">信访及处理情况</td>\n" +
                                "            <td colspan=\"6\" style='border:1px solid #ddd'>\n" +
                                "                <a href='../files/"+flist[i].filepath+"'>"+flist[i].filedescription+"</a>\n" +
                                "                <button class=\"btn btn-danger\" onclick=\"deletexin(this)\">删除</button>\n" +
                                "            </td>\n" +
                                "        </tr>";
                            xinflag++;
                        }else{
                            xstr+=" <tr>\n" +
                                "            <td colspan=\"6\" style='border:1px solid #ddd'>\n" +
                                "                <a href='../files/"+flist[i].filepath+"'>"+flist[i].filedescription+"</a>\n" +
                                "                <button class=\"btn btn-danger\" onclick=\"deletexin(this)\">删除</button>\n" +
                                "            </td>\n" +
                                "        </tr>";
                            xinflag++;
                        }
                    }else if(flist[i].fileflag==2){
                        if(qingflag==0){
                            qstr+="<tr>\n" +
                                "            <td  rowspan=\"100\" style=\"line-height: 70px !important; width: 250px\">因不实报告个人事项收到处理情况</td>\n" +
                                "            <td colspan=\"6\" style='border:1px solid #ddd'>\n" +
                                "                <a href='../files/"+flist[i].filepath+"'>"+flist[i].filedescription+"</a>\n" +
                                "            </td>\n" +
                                "        </tr>";
                            qingflag++;
                        }else{
                            qstr+="<tr>\n" +
                                "            <td colspan=\"6\" style='border:1px solid #ddd'>\n" +
                                "                <a href='../files/"+flist[i].filepath+"'>"+flist[i].filedescription+"</a>\n" +
                                "                <button class=\"btn btn-danger\" onclick=\"deletexin(this)\">删除</button>\n" +
                                "            </td>\n" +
                                "        </tr>";
                            qingflag++;
                        }
                    }else if(flist[i].fileflag==3){
                        if(tanflag==0){
                            tstr+=" <tr>\n" +
                                "            <td  rowspan=\"100\" style=\"line-height: 100px !important; width: 250px\">谈话函询初核等有关材料</td>\n" +
                                "            <td colspan=\"6\" style='border:1px solid #ddd'>\n" +
                                "                <a href='../files/"+flist[i].filepath+"'>"+flist[i].filedescription+"</a>\n" +
                                "                <button class=\"btn btn-danger\" onclick=\"deletexin(this)\">删除</button>\n" +
                                "            </td>\n" +
                                "        </tr>";
                            tanflag++;
                        }else{
                            tstr+="<tr>\n" +
                                "            <td colspan=\"6\" style='border:1px solid #ddd' >\n" +
                                "                <a href='../files/"+flist[i].filepath+"'>"+flist[i].filedescription+"</a>\n" +
                                "                <button class=\"btn btn-danger\" onclick=\"deletexin(this)\">删除</button>\n" +
                                "            </td>\n" +
                                "        </tr>";
                            tanflag++;
                        }
                    }else if(flist[i].fileflag==4){
                        if(lianzheng == 0){
                            lstr+=" <tr>\n" +
                                "            <td  rowspan=\"100\" style=\"line-height: 100px !important; width: 250px\">党风廉政回复材料</td>\n" +
                                "            <td colspan=\"6\" style='border:1px solid #ddd'>\n" +
                                "                <a href='../files/"+flist[i].filepath+"'>"+flist[i].filedescription+"</a>\n" +
                                "                <button class=\"btn btn-danger\" onclick=\"deletexin(this)\">删除</button>\n" +
                                "            </td>\n" +
                                "        </tr>";
                            lianzheng++;
                        }else{
                            lstr+="<tr>\n" +
                                "            <td colspan=\"6\" style='border:1px solid #ddd'>\n" +
                                "                <a href='../files/"+flist[i].filepath+"'>"+flist[i].filedescription+"</a>\n" +
                                "                <button class=\"btn btn-danger\" onclick=\"deletexin(this)\">删除</button>\n" +
                                "            </td>\n" +
                                "        </tr>";
                            lianzheng++;
                        }
                    }else if(flist[i].fileflag==5){
                        if(qita==0){
                            ostr+="<tr>\n" +
                                "            <td  rowspan=\"100\" style=\"line-height: 100px !important; width: 250px\">其他材料</td>\n" +
                                "            <td colspan=\"6\" style='border:1px solid #ddd'>\n" +
                                "                <a href='../files/"+flist[i].filepath+"'>"+flist[i].filedescription+"</a>\n" +
                                "                <button class=\"btn btn-danger\" onclick=\"deletexin(this)\">删除</button>\n" +
                                "            </td>\n" +
                                "        </tr>";
                            qita++;
                        }else{
                            ostr+="<tr>\n" +
                                "            <td colspan=\"6\" style='border:1px solid #ddd'>\n" +
                                "                <a href='../files/"+flist[i].filepath+"'>"+flist[i].filedescription+"</a>\n" +
                                "                <button class=\"btn btn-danger\" onclick=\"deletexin(this)\">删除</button>\n" +
                                "            </td>\n" +
                                "        </tr>";
                            qita++;
                        }
                    }

                }
                if(xinflag==0){
                    xstr+=" <tr>\n" +
                        "            <td  rowspan=\"100\" style=\"line-height: 100px !important; width: 250px\">信访及处理情况</td>\n" +
                        "            <td colspan=\"6\" style='border:1px solid #ddd'>\n" +
                        "            </td>\n" +
                        "        </tr>";
                }
                if(qingflag==0){
                    qstr+="<tr>\n" +
                        "            <td  rowspan=\"100\" style=\"line-height: 70px !important; width: 250px\">因不实报告个人事项收到处理情况</td>\n" +
                        "            <td colspan=\"6\" style='border:1px solid #ddd'>\n" +
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
                        "            <td colspan=\"6\" style='border:1px solid #ddd'>\n" +
                        "            </td>\n" +
                        "        </tr>";
                }
                if(qita==0){
                    ostr+="<tr>\n" +
                        "            <td  rowspan=\"100\" style=\"line-height: 100px !important; width: 250px\">其他材料</td>\n" +
                        "            <td colspan=\"6\" style='border:1px solid #ddd'>\n" +
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
}

function deletexin(node) {
    var i = $(node).parent().prev().children(1).attr("alt");
    $(node).parent().parent().remove();
    if(i==null || i==""){
        return;
    }
    fileslist.splice(i,1);
}
//文件删除添加

//上传完数据，然后插入数据库（2次请求）
function update() {
    upload();
}
//删除亲人单独请求

//添加亲人单独请求


//最后提交获取亲人列表，提交到后台更新

