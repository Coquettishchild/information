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
                $('.heading').html("<img src='../images/"+data.obj.heading+"' >");
                $('.major').text(data.obj.major);
                $('.fulltimeschooling').text(data.obj.fulltimeschooling);
                $('.fulltimesgraduated').text(data.obj.fulltimesgraduated);
                $('.inserviceeducation').text(data.obj.inserviceeducation);
                $('.inservicegraduated').text(data.obj.inservicegraduated);
                $('.position').text(data.obj.position);
                $('.jianli').html(data.obj.resume);
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
                        "                "+list[i].rname+"\n" +
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
                                "            </td>\n" +
                                "        </tr>";
                            xinflag++;
                        }else{
                            xstr+=" <tr>\n" +
                                "            <td colspan=\"6\" style='border:1px solid #ddd'>\n" +
                                "                <a href='../files/"+flist[i].filepath+"'>"+flist[i].filedescription+"</a>\n" +
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
                                "            </td>\n" +
                                "        </tr>";
                            tanflag++;
                        }else{
                            tstr+="<tr>\n" +
                                "            <td colspan=\"6\" style='border:1px solid #ddd' >\n" +
                                "                <a href='../files/"+flist[i].filepath+"'>"+flist[i].filedescription+"</a>\n" +
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
                                "            </td>\n" +
                                "        </tr>";
                            lianzheng++;
                        }else{
                            lstr+="<tr>\n" +
                                "            <td colspan=\"6\" style='border:1px solid #ddd'>\n" +
                                "                <a href='../files/"+flist[i].filepath+"'>"+flist[i].filedescription+"</a>\n" +
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
                                "            </td>\n" +
                                "        </tr>";
                            qita++;
                        }else{
                            ostr+="<tr>\n" +
                                "            <td colspan=\"6\" style='border:1px solid #ddd'>\n" +
                                "                <a href='../files/"+flist[i].filepath+"'>"+flist[i].filedescription+"</a>\n" +
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
        }
    })
};
//跳转修改页面
function updateInfo() {
    window.location.href="../secendhtml/infor.html?id="+id;
}