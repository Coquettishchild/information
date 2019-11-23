package com.information.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.information.entity.Information;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
/**
 * @description: information的dao层
 * @author: CrazyChild
 * @createDate: 2019/11/19
 * @version: 1.0
 */
@Mapper
public interface InforDao extends BaseMapper<Information> {

     Information getInformation(String id)throws  Exception;

     List<Information> getAll(@Param("pageNo") int pageNo,@Param("pageSize") int pageSize)throws Exception;

     List<Information> searchByName(String name)throws Exception;

     int getTotalNo()throws Exception;
}
