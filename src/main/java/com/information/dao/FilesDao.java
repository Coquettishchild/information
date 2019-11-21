package com.information.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.information.entity.Files;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
/**
 * @description:
 * @author: CrazyChild
 * @createDate: 2019/11/21
 * @version: 1.0
 */
@Mapper
public interface FilesDao extends BaseMapper<Files> {
    void insertList(List<Files> list)throws Exception;
}
