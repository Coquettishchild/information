
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
    window.location.href="./list.html";
}
var E = window.wangEditor
var editor2 = new E('#jianli')
editor2.create()

//填写个人信息
var name = $('#name').val();
var sex = $('#sex').val();
var birthday = $('#birthday').val();
var heading = $('#heading').val();
var nantion = $('#nantion').val();
var nativeplace = $('#nativeplace').val();
var birthplace = $('#birthplace').val();
var party = $('#party').val();
var joinTime = $('#joinTime').val();
var health = $('#health').val();
var post = $('#post').val();
var fulltimeschooling = $('#fulltimeschooling').val();
var fulltimesgraduated = $('#fulltimesgraduated').val();
var inserviceeducation = $('#inserviceeducation').val();
var inservicegraduated = $('#inservicegraduated').val();
var position = $('#position').val();
var jianli = $('#jianli').val();
