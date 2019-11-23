//通过姓名查询信息
$(document.body).on('click', '.search', function () {
    var name = $('#search').val();
    if (name != null && name !== "") {
        $.ajax({
            url: "/information/info",
            type: "GET",
            data: {"name": name},
            success: function (data) {
                if (data.success) {
                    $('.list').html("");
                    var str = "     <tbody>      <tr>\n" +
                        "                <td colspan=\"4\" style=\"text-align: left\">\n" +
                        "                    <button class=\"btn btn-primary add\">&nbsp;+添加&nbsp;</button>\n" +
                        "                </td>\n" +
                        "                <td  style=\"text-align: left\" colspan=\"2\">\n" +
                        "                    <input type=\"text\" class=\"form-control\" id=\"search\" value='" + name + "'>\n" +
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
                        "                </th>\n" + -
                            "                <th >\n" +
                        "                    操作\n" +
                        "                </th>\n" +
                        "            </tr> ";
                    if (data.obj.length > 0) {
                        for (let i = 0; i < data.obj.length; i++) {
                            str += "            <tr>\n" +
                                "                <td class=\"name\">" + data.obj[i].name + "</td>\n" +
                                "                <td>" + data.obj[i].sex + "</td>\n" +
                                "                <td>" + data.obj[i].birthday + "</td>\n" +
                                "                <td>" + data.obj[i].post + "</td>\n" +
                                "                <td>" + data.obj[i].nativeplace + "</td>\n" +
                                "                <td >\n" +
                                "                    <button class=\"btn btn-primary\" onclick='infor(" + data.obj[i].id + ")'>查看</button>\n" +
                                "                    <button class=\"btn btn-danger\" onclick='deleteInfo(" + data.obj[i].id + ")'>删除</button>\n" +
                                "                    <button class=\"btn btn-info\" onclick='editInfo(" + data.obj[i].id + ")'>修改</button>\n" +
                                "                </td>\n" +
                                "            </tr>";
                        }
                    } else {
                        alert("未找到相关人员信息");
                        $('.page').remove();
                        window.location.href = "/information/secendhtml/list.html";
                        return;
                    }
                    str += "</tbody>";
                    $('.list').html(str);
                    $('.page').remove();
                }else{
                    alert(data.message);
                }
            },
            error: function (data) {
                alert(data.message);
            }
        })
    }
})
//当前页数
var pageNo = localStorage.getItem("pageNo");


var totalPage = localStorage.getItem("totalPage");


// 生成人员列表

var listInfo = function (pageNo) {

    if (pageNo == null) {
        pageNo = 1;
        localStorage.setItem("pageNo", 1)
    }
    $.ajax({
        url: "/information/info/page/" + pageNo,
        type: "GET",
        success: function (data) {
            if (data.success) {
                if (totalPage != null) {
                    totalPage = data.obj.totalNo;
                } else {
                    localStorage.setItem('totalPage', data.obj.totalNo);
                }
                createList(data);
            } else {
                alert(data.message);
                window.location.href="../index.html";
                localStorage.setItem('pageNo', 1);
                localStorage.setItem('totalPage', data.obj.totalNo);
                window.location.href = "./list.html";
            }
        },
        error: function (data) {
            alert(data.message);
        }
    })
}

function createList(data) {

//生成人员列表
    $('.list').html("");
    var str = "     <tbody>      <tr>\n" +
        "                <td colspan=\"4\" style=\"text-align: left\">\n" +
        "                    <button class=\"btn btn-primary add\">&nbsp;+添加&nbsp;</button>\n" +
        "                </td>\n" +
        "                <td  style=\"text-align: left\" colspan=\"2\">\n" +
        "                    <input type=\"text\" class=\"form-control\" id=\"search\" value='" + name + "'>\n" +
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
        "                </th>\n" + -
            "                <th >\n" +
        "                    操作\n" +
        "                </th>\n" +
        "            </tr> ";
    if (data.obj.listInfo.length > 0) {
        for (let i = 0; i < data.obj.listInfo.length; i++) {
            str += "            <tr>\n" +
                "                <td class=\"name\">" + data.obj.listInfo[i].name + "</td>\n" +
                "                <td>" + data.obj.listInfo[i].sex + "</td>\n" +
                "                <td>" + data.obj.listInfo[i].birthday + "</td>\n" +
                "                <td>" + data.obj.listInfo[i].post + "</td>\n" +
                "                <td>" + data.obj.listInfo[i].nativeplace + "</td>\n" +
                "                <td >\n" +
                "                    <button class=\"btn btn-primary\" onclick='infor(" + "\"" + data.obj.listInfo[i].id + "\"" + ")'>查看</button>\n" +
                "                    <button class=\"btn btn-danger\" onclick='deleteInfo(" + "\"" + data.obj.listInfo[i].id + "\"" + ")'>删除</button>\n" +
                "                    <button class=\"btn btn-info\" onclick='editInfo(" + "\"" + data.obj.listInfo[i].id + "\"" + ")'>修改</button>\n" +
                "                </td>\n" +
                "            </tr>";
        }
    } else {
        $('.page').remove();
        return;
    }
    str += "</tbody>";
    $('.list').html(str);
    fenye(localStorage.getItem('pageNo'), localStorage.getItem('totalPage'));
}

//分页
function fenye(pageNo, totalPage) {
    var currentPage = Number(pageNo);
    var pageNum = Number(totalPage);
    //给每个button赋值（第一个默认为1）
    $("#page_btn1").on("click", function () {
        localStorage.setItem('pageNo', 1);
        window.location.href = "./list.html";
    })
    $("#page_btn2").text(currentPage - 2);
    $("#page_btn2").on("click", function () {
        localStorage.setItem('pageNo', currentPage - 2);
        window.location.href = "./list.html";
    })
    $("#page_btn3").text(currentPage - 1);
    $("#page_btn3").on("click", function () {
        localStorage.setItem('pageNo', currentPage - 1);
        window.location.href = "./list.html";
    })
    $("#page_btn4").text(currentPage);
    $("#page_btn4").on("click", function () {
        localStorage.setItem('pageNo', currentPage);
        window.location.href = "./list.html";
    })
    $("#page_btn5").text(currentPage + 1);
    $("#page_btn5").on("click", function () {
        localStorage.setItem('pageNo', currentPage + 1);
        window.location.href = "./list.html";
    })
    $("#page_btn6").text(currentPage + 2);
    $("#page_btn6").on("click", function () {
        localStorage.setItem('pageNo', currentPage + 2);
        window.location.href = "./list.html";
    })
    $("#page_btn7").text(pageNum);
    $("#page_btn7").on("click", function () {
        localStorage.setItem('pageNo', pageNum);
        window.location.href = "./list.html";
    })
    //可改变当前页的button样式
    $("#page_btn4").css("background-color", "#4f90fb");
    $("#page_btn4").css("border", "1px solid #ddd");
    $("#page_btn4").css("color", "#fff");
    //先处理"上一页"和"下一页"的情况

    if (currentPage == 1)//如果当前页为首页
    {
        $("#prePage").hide();
    }
    if (currentPage == pageNum)//如果当前页为末页
    {

        $("#sufPage").hide();
    }
    //处理当前页小于等于3的特殊情况
    if (currentPage <= 3) {
        $("#prePoint").hide();
        $("#page_btn1").hide();
    }//当前页是4还需要hide掉第一个省略号按钮（！重要）
    else if (currentPage == 4) {
        $("#prePoint").hide();
    }
    //当前页是1还需要hide掉第二第三个按钮
    if (currentPage == 1) {
        $("#page_btn2").hide();
        $("#page_btn3").hide();
    }//当前页是2则也需要hide掉第二个按钮（此时为-1）
    else if (currentPage == 2) {
        $("#page_btn2").hide();
    }
    //最末端的特殊情况处理和最前端是一样的
    if (currentPage >= pageNum - 2) {
        $("#sufPoint").hide();
        $("#page_btn7").hide();
    } else if (currentPage == pageNum - 3) {
        $("#sufPoint").hide();
    }
    if (currentPage == pageNum) {

        $("#page_btn5").hide();
        $("#page_btn6").hide();
    }
    if (currentPage == pageNum - 1) {

        $("#page_btn6").hide();
    }
}

//上一页
$(document.body).on("click", "#prePage", function () {
    if (pageNo <= 1) {
        $('#prePage').attr('disabled', true);
    } else {
        pageNo--;
        localStorage.setItem('pageNo', pageNo);
        localStorage.setItem('totalPage', totalPage);
        window.location.href = "./list.html";
    }
});

//下一页
$(document.body).on("click", "#sufPage", function () {
    if (pageNo >= totalPage) {
        $('#sufPage').attr('disabled', true);
    } else {
        pageNo++;
        localStorage.setItem('pageNo', pageNo);
        localStorage.setItem('totalPage', totalPage);
        window.location.href = "./list.html";
    }
});

var ulList = $('.pagination');

var child = ulList.children();
//添加人员信息
$(document.body).on("click", ".add", function () {
    window.location.href = "../secendhtml/infor.html";
});

var editInfo = function (id) {

//修改档案信息
    console.log(id);
    window.location.href = "../secendhtml/infor.html?id=" + id;
};
var infor = function (id) {

//查看预览
    console.log(id);
    window.location.href = "/information/secendhtml/detail.html?id=" + id;
};
var deleteInfo = function (id) {

//删除人员信息
    console.log(id);
    if (confirm("是否确定删除该人员信息？")) {
        $.ajax({
            url: "/information/info/" + id,
            type: "DELETE",
            success: function (data) {
                if (data.success) {
                    alert("删除成功");
                    window.location.href="../secendhtml/list.html";
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
};
// 生成人员列表
listInfo(pageNo);
