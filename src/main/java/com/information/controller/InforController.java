package com.information.controller;

import com.information.entity.Information;
import com.information.service.InforService;
import com.information.vo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.UUID;

/**
 * @description:
 * @author: CrazyChild
 * @createDate: 2019/11/19
 * @version: 1.0
 */
@RestController
@RequestMapping("/info")
public class InforController {
    @Autowired
    private InforService service;
    //文件路径
    private static final Resource re = new ClassPathResource("static/images");

//    private static final String PATH = ResourceUtils.CLASSPATH_URL_PREFIX+"static/images";
    File filepath;
    {
        try {
//            filepath = ResourceUtils.getFile(PATH);
            filepath=re.getFile();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @GetMapping
    public Result searchByName(String name){
        return service.searchByName(name);
    }

    @GetMapping("/{id}")
    public Result getDetail(@PathVariable("id") String id){
        return service.getDetail(id);
    }

    @PostMapping("/delete/{id}")
    public Result deletInfo(@PathVariable("id") String id){
        return service.delete(id);
    }

    @GetMapping("page/{page}")
    public Result listInfo(@PathVariable("page") int pageNo){
        return service.getAll(pageNo);
    }

    @PostMapping
    public Result insertInfo(@RequestBody Information obj){
        return service.insertInfor(obj);
    }

    @PostMapping("/update")
    public Result updateInfo(@RequestBody Information obj) {
        return service.updateInfor(obj);
    }

    @PostMapping("/uploadhead")
    public Result uploadhead( MultipartFile file){
        Result re = new Result();
        try{
            String temp = (UUID.randomUUID()+" ").replaceAll("-","").substring(0,6)+"-";
            int index = file.getOriginalFilename().lastIndexOf("/");
            String name="";
            if(index==-1){
                name  = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf("\\")+1);
            }else{
                name  = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf("/")+1);
            }
            String filename = filepath.getAbsolutePath()+"/"+temp+name;
            File dest = new File(filename);
            if(!dest.exists()){
                dest.createNewFile();
            }
            //保存文件
            file.transferTo(dest);
            re.setSuccess(true);
            re.setMessage("上传成功");
            re.setObj(temp+name);
        }catch (Exception e){
            e.printStackTrace();
            re.setSuccess(false);
            re.setMessage("上传失败");
            re.setObj(null);
        }
        return re;
    }

}
