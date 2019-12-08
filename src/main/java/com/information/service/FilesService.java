package com.information.service;

import com.information.dao.FilesDao;
import com.information.entity.Files;
import com.information.vo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

import static com.alibaba.druid.util.FnvHash.Constants.PATH;

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
    //文件路径
    private static final Resource re = new ClassPathResource("static/images");
    File filepaths;
    {
        try {
            filepaths = re.getFile();

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public Result delete(int id){
        Result re = new Result();
        try{
            Files files = dao.searchById(id);
            File file = new File(filepaths.getAbsolutePath()+"/"+files.getFilepath());
            if(file!=null&&file.exists()){
                file.delete();
            }
            dao.deletefile(id);
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
             dao.insertfile(file);
            re.setSuccess(true);
            re.setMessage("添加成功");
            re.setObj(file.getFid());
        }catch (Exception e){
            e.printStackTrace();
            re.setObj(null);
            re.setMessage("添加失败");
            re.setSuccess(false);
        }
        return re;
    }

}
