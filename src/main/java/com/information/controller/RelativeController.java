package com.information.controller;

import com.information.dao.RelativeDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    private RelativeDao dao;

}
