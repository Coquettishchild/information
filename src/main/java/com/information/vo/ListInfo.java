package com.information.vo;

import lombok.Data;

import java.util.Date;

/**
 * @Author: Archiver
 * @Description: 列表信息类
 * @Date: Created in 0:05 2019/11/23
 * @Modified By:
 */
@Data
public class ListInfo {
    //列表姓名
    private String name;
    //性别
    private String sex;
    //出生年月
    private String birthday;
    //职务
    private String post;
    //籍贯
    private String nativeplace;
}
