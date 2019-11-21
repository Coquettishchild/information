package com.information.controller;

import com.information.entity.Information;
import com.information.service.InforService;
import com.information.vo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @description:
 * @author: CrazyChild
 * @createDate: 2019/11/19
 * @version: 1.0
 */
@RestController("/info")
public class InforController {
    @Autowired
    private InforService service;

    @GetMapping
    public Result insertInfo(Information info){
        return service.insertInfor(info);
    }


}
