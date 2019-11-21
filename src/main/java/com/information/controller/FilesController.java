package com.information.controller;

import com.information.dao.FilesDao;
import com.information.entity.Files;
import com.information.service.FilesService;
import com.information.vo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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

        }catch (Exception e){

        }
        return re;
    }
}
