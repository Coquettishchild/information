$(function () {
    listInfo(pageNo);
})

//通过姓名查询信息
$(document.body).on('click','.search',function(){
    var name = $('#search').val();
    if (name!=null&&name!==""){
        $.ajax({
            url: "/information/info",
            type: "GET",
            data: {"name":name},
            success:function (data) {
                if (data.success){
                    $('.list').html("");
                    var str = "     <tbody>      <tr>\n" +
                        "                <td colspan=\"4\" style=\"text-align: left\">\n" +
                        "                    <button class=\"btn btn-primary add\">&nbsp;+添加&nbsp;</button>\n" +
                        "                </td>\n" +
                        "                <td  style=\"text-align: left\" colspan=\"2\">\n" +
                        "                    <input type=\"text\" class=\"form-control\" id=\"search\" value='"+name+"'>\n" +
                        "                    <button class=\"btn btn-success search\" id=\"btnsearch\">&nbsp;查找&nbsp;</button>\n" +
                        "                </td>\n" +
                        "            </tr>\n" +
                        "            <tr>\n" +
                        "                <th>\n" +
                        "                    姓名\n" +
                        "                </th>\n" +
                        "                <th>\n" +
                        "                    性别\n" +
                        "                </th>\n" +
                        "                <th >\n" +
                        "                    出生年月（岁）\n" +
                        "                </th>\n" +
                        "                <th>\n" +
                        "                    专业技术职务\n" +
                        "                </th>\n" +
                        "                <th>\n" +
                        "                    籍贯\n" +
                        "                </th>\n" +-
                        "                <th >\n" +
                        "                    操作\n" +
                        "                </th>\n" +
                        "            </tr> ";
                    if (data.obj.length>0){
                        for (let i=0;i<data.obj.length;i++){
                            str+= "            <tr>\n" +
                                "                <td class=\"name\">"+data.obj[i].name+"</td>\n" +
                                "                <td>"+data.obj[i].sex+"</td>\n" +
                                "                <td>"+data.obj[i].birthday+"</td>\n" +
                                "                <td>"+data.obj[i].post+"</td>\n" +
                                "                <td>"+data.obj[i].nativeplace+"</td>\n" +
                                "                <td >\n" +
                                "                    <button class=\"btn btn-primary\" onclick='infor("+data.obj[i].id+")'>查看</button>\n" +
                                "                    <button class=\"btn btn-danger\" onclick='deleteInfo("+data.obj[i].id+")'>删除</button>\n" +
                                "                    <button class=\"btn btn-info\" onclick='editInfo("+data.obj[i].id+")'>修改</button>\n" +
                                "                </td>\n" +
                                "            </tr>";
                        }
                    }else {
                        alert("未找到相关人员信息");
                        $('.page').remove();
                        window.location.href="/information/secendhtml/list.html";
                        return;
                    }
                    str += "</tbody>";
                    $('.list').html(str);
                    $('.page').remove();
                }else {

                }
            }
        })
    }
})

//当前页数
var pageNo=1;
var totalPage=0;

// 生成人员列表
var listInfo = function(pageNo){
    $.ajax({
        url: "/information/info/page/"+pageNo,
        type: "GET",
        success:function (data) {
            if (data.success) {
                createList(data);
                totalPage=data.obj.totalNo;
            }
        },
        error: function() {
            alert("出现错误");
        }
    })
}

//生成人员列表
function createList(data){
    $('.list').html("");
    var str = "     <tbody>      <tr>\n" +
        "                <td colspan=\"4\" style=\"text-align: left\">\n" +
        "                    <button class=\"btn btn-primary add\">&nbsp;+添加&nbsp;</button>\n" +
        "                </td>\n" +
        "                <td  style=\"text-align: left\" colspan=\"2\">\n" +
        "                    <input type=\"text\" class=\"form-control\" id=\"search\" value='"+name+"'>\n" +
        "                    <button class=\"btn btn-success search\" id=\"btnsearch\">&nbsp;查找&nbsp;</button>\n" +
        "                </td>\n" +
        "            </tr>\n" +
        "            <tr>\n" +
        "                <th>\n" +
        "                    姓名\n" +
        "                </th>\n" +
        "                <th>\n" +
        "                    性别\n" +
        "                </th>\n" +
        "                <th >\n" +
        "                    出生年月（岁）\n" +
        "                </th>\n" +
        "                <th>\n" +
        "                    专业技术职务\n" +
        "                </th>\n" +
        "                <th>\n" +
        "                    籍贯\n" +
        "                </th>\n" +-
            "                <th >\n" +
        "                    操作\n" +
        "                </th>\n" +
        "            </tr> ";
    if (data.obj.listInfo.length>0) {
        for (let i = 0; i < data.obj.listInfo.length; i++) {
            str += "            <tr>\n" +
                "                <td class=\"name\">" + data.obj.listInfo[i].name + "</td>\n" +
                "                <td>" + data.obj.listInfo[i].sex + "</td>\n" +
                "                <td>" + data.obj.listInfo[i].birthday + "</td>\n" +
                "                <td>" + data.obj.listInfo[i].post + "</td>\n" +
                "                <td>" + data.obj.listInfo[i].nativeplace + "</td>\n" +
                "                <td >\n" +
                "                    <button class=\"btn btn-primary\" onclick='infor(" + data.obj.listInfo[i].id + ")'>查看</button>\n" +
                "                    <button class=\"btn btn-danger\" onclick='deleteInfo(" + data.obj.listInfo[i].id + ")'>删除</button>\n" +
                "                    <button class=\"btn btn-info\" onclick='editInfo(" + data.obj.listInfo[i].id + ")'>修改</button>\n" +
                "                </td>\n" +
                "            </tr>";
        }
    }
    else {
        $('.page').remove();
        return;
    }
    str += "</tbody>";
    $('.list').html(str);
}

//上一页
$(document.body).on("click","#prePage",function () {
    if (pageNo<=1){
        $('#prePage').attr('disabled',true);
    }else {
        pageNo--;
        listInfo(pageNo);
    }
})

//下一页
$(document.body).on("click","#nextPage",function () {
    if (pageNo>=totalPage){
        $('#nextPage').attr('disabled',true);
    }else {
        pageNo++;
        listInfo(pageNo);
    }
})





//添加人员信息
$(document.body).on("click",".add",function () {
    window.location.href="../secendhtml/infor.html";
})

//修改档案信息
var editInfo = function (id) {
    window.location.href="../secendhtml/infor.html?id="+id;
}

//查看预览
var infor = function(id){
    window.location.href="/information/secendhtml/detail.html?id="+id;
}

//删除人员信息
var deleteInfo = function (id) {
    if (confirm("是否确定删除该人员信息？")){
        $.ajax({
            url: "/information/info/"+id,
            type: "DELETE",
            success: function (data) {
                if (data.success){
                    alert("删除成功");
                }else {
                    alert("删除失败");
                }
            }
        })
    }
}