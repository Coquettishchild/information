package com.information.controller;

import com.information.entity.Information;
import com.information.service.InforService;
import com.information.vo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    public Result insertInfo(@RequestBody Information info){
        return service.insertInfor(info);
    }

    @PatchMapping
    public Result updateInfo(@RequestBody Information infor) {
        return service.updateInfor(infor);
    }

}
