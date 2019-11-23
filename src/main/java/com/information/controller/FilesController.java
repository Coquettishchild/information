package com.information.controller;

import com.information.dao.FilesDao;
import com.information.dao.RelativeDao;
import com.information.entity.Files;
import com.information.service.FilesService;
import com.information.vo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.io.FileNotFoundException;
import java.util.UUID;
import java.io.File;
/**
 * @description:
 * @author: CrazyChild
 * @createDate: 2019/11/21
 * @version: 1.0
 */
@RestController
@RequestMapping("/files")
public class FilesController {
    @Autowired
    private FilesService service;


    //文件路径
    private static final String PATH = ResourceUtils.CLASSPATH_URL_PREFIX+"static\\files";
    File filepath;
    {
        try {
            filepath = ResourceUtils.getFile(PATH);

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
    @PostMapping
    public Result add(@RequestBody Files files){
        return service.add(files);
    }

    @DeleteMapping
    public Result delete(int id){
        return service.delete(id);
    }

    @PostMapping("/upload")
    public Result upload(MultipartFile file){
        Result re = new Result();
        try{
            String temp = (UUID.randomUUID()+" ").replaceAll("-","").substring(0,6)+"-";
            String filename = filepath.getAbsolutePath()+"\\"+temp+file.getOriginalFilename();
            File dest = new File(filename);
            if(!dest.exists()){
                dest.createNewFile();
            }
            //保存文件
            file.transferTo(dest);
            re.setSuccess(true);
            re.setMessage("上传成功");
            re.setObj(temp+file.getOriginalFilename());
        }catch (Exception e){
            e.printStackTrace();
            re.setSuccess(false);
            re.setMessage("上传失败");
            re.setObj(null);
        }
        return re;
    }

}
