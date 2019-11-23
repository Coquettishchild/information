package com.information.controller;

import com.information.dao.RelativeDao;
import com.information.entity.Relative;
import com.information.service.RelativeService;
import com.information.vo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @description:
 * @author: CrazyChild
 * @createDate: 2019/11/21
 * @version: 1.0
 */
@RestController
@RequestMapping("/relative")
public class RelativeController {
    @Autowired
    private RelativeService service;

    @DeleteMapping("/{id}")
    public Result delete(@PathVariable("id") int id){
        System.out.println(id);
        return service.delete(id);
    }

    @PostMapping
    public Result add(@RequestBody Relative relative){
        return service.add(relative);
    }

}
