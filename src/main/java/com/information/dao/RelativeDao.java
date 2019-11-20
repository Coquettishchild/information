package com.information.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.information.entity.Relative;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;
/**
 * @description:
 * @author: CrazyChild
 * @createDate: 2019/11/19
 * @version: 1.0
 */
@Mapper
public interface RelativeDao extends BaseMapper<Relative> {
    void insertList(List<Relative> re)throws Exception;
}
