package com.information.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.information.entity.Files;
import com.information.entity.Relative;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
/**
 * @description:
 * @author: CrazyChild
 * @createDate: 2019/11/19
 * @version: 1.0
 */
@Mapper
public interface RelativeDao extends BaseMapper<Relative> {
    void insertList(@Param("list") List<Relative> list)throws Exception;
    void insertfList(@Param("list") List<Files> list)throws Exception;

    void deleterealtive(int id)throws Exception;
}
