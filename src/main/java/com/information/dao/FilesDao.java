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
    void insertList(@Param("list") List<Files> list)throws Exception;

    List<Files> getlist(String inid)throws Exception;

    void deletefile(int id)throws Exception;

    long insertfile(@Param("files") Files files)throws Exception;

    Files searchById(int id)throws Exception;
}
