package com.information.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * @description:
 * @author: CrazyChild
 * @createDate: 2019/11/21
 * @version: 1.0
 */
@Data
@TableName("files")
public class Files {
    //id
    private long fid;
    //文件
    private String filepath;
    //文件描述
    private String filedescription;
    //文件标识  信访标识1
    //报告情况2
    //谈话函3
    //党风廉政4
    //其他材料5
    private int fileflag;
    //inid
    private String inid;
}
