package com.information.controller;

import com.information.entity.Information;
import com.information.service.InforService;
import com.information.vo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileNotFoundException;
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
    private static final String PATH = ResourceUtils.CLASSPATH_URL_PREFIX+"static\\images";
    File filepath;
    {
        try {
            filepath = ResourceUtils.getFile(PATH);
        } catch (FileNotFoundException e) {
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

    @DeleteMapping("/{id}")
    public Result deletInfo(@PathVariable("id") String id){
        return service.delete(id);
    }

    @GetMapping("page/{page}")
    public Result listInfo(@PathVariable("page") int pageNo){
        //因为MySQL limit初始行为 0
        pageNo--;
        return service.getAll(pageNo);
    }

    @PostMapping
    public Result insertInfo(@RequestBody Information obj){
        return service.insertInfor(obj);
    }

    @PatchMapping
    public Result updateInfo(@RequestBody Information infor) {
        return service.updateInfor(infor);
    }

    @PostMapping("/uploadhead")
    public Result uploadhead( MultipartFile file){
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
