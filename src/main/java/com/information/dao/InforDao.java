package com.information.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.information.entity.Information;
import org.apache.ibatis.annotations.Mapper;

/**
 * @description: information的dao层
 * @author: CrazyChild
 * @createDate: 2019/11/19
 * @version: 1.0
 */
@Mapper
public interface InforDao extends BaseMapper<Information> {

}
