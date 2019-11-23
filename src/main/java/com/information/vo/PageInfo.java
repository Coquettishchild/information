package com.information.vo;

import lombok.Data;

import java.util.Date;
import java.util.List;

/**
 * @Author: Archiver
 * @Description: 前台分页信息类
 * @Date: Created in 23:18 2019/11/22
 * @Modified By:
 */
@Data
public class PageInfo {
    //当前页数
    private int pageNo;
    //总页数
    private int totalNo;
    //信息列表
    private List<ListInfo> listInfo;
}
