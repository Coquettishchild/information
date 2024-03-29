package com.information.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import java.util.List;
import java.util.Date;

/**
 * @description: 信息类
 * @author: CrazyChild
 * @createDate: 2019/11/19
 * @version: 1.0
 */
@Data
@TableName("information")
public class Information {
    //id
    private String id;
    //姓名
    private String name;
    //性别
    private String sex;
    //出生日期（岁）
    private String birthday;
    //民族
    private String nation;
    //籍贯
    private String nativeplace;
    //头像路径
    private String heading;
    //出生地
    private String birthplace;
    //健康状况
    private String health;
    //入党时间
    @JsonFormat(pattern = "yyyy-MM-dd",locale = "zh",timezone = "GMY+8")
    private Date party;
    //参加工作时间
    @JsonFormat(pattern = "yyyy-MM-dd",locale = "zh",timezone = "GMY+8")
    private Date jointime;
    //职务
    private String post;
    //专长
    private String major;
    //全日制教育
    private String fulltimeschooling;
    //在职教育
    private String inserviceeducation;
    //全日制毕业院校及专业
    private String fulltimesgraduated;
    //在职教育毕业院校及专业
    private String inservicegraduated;
    //现任职务
    private String position;
    //简历
    private String resume;
    //奖惩情况
    private String rewards;
    //关系
    private List<Relative> list;
    //文件
    private List<Files> filesList;
}
