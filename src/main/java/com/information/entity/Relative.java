package com.information.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * @description: 关系类
 * @author: CrazyChild
 * @createDate: 2019/11/19
 * @version: 1.0
 */
@Data
@TableName("relative")
public class Relative {
    //id
    private String rid;
    //姓名
    private String name;
    //年龄
    private int age;
    //称谓
    private String appellation;
    //政治面貌
    private String politicaloutlook;
    //工作单位
    private String workunit;
    //外键
    private String inforid;
}
