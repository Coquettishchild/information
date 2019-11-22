package com.information.service;

import com.information.dao.FilesDao;
import com.information.entity.Files;
import com.information.vo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.List;
/**
 * @description:
 * @author: CrazyChild
 * @createDate: 2019/11/21
 * @version: 1.0
 */
@Service
public class FilesService {

    @Autowired
    private FilesDao dao;

    public Result delete(int id){
        Result re = new Result();
        try{
            Files temp = dao.selectById(id);
            File file = new File(temp.getFilepath());
            if(file.exists()){
                file.delete();
            }
            dao.deleteById(id);
            re.setSuccess(true);
            re.setMessage("删除成功");
            re.setObj(null);
        }catch (Exception e){
            e.printStackTrace();
            re.setObj(null);
            re.setMessage("删除失败");
            re.setSuccess(false);
        }
        return re;
    }

    public Result add(Files file){
        Result re = new Result();
        try{
            dao.insert(file);
            re.setSuccess(true);
            re.setMessage("添加成功");
            re.setObj(null);
        }catch (Exception e){
            e.printStackTrace();
            re.setObj(null);
            re.setMessage("添加失败");
            re.setSuccess(false);
        }
        return re;
    }

}
