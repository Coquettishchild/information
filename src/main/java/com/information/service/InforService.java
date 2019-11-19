package com.information.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.information.dao.InforDao;
import com.information.entity.Information;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @description:
 * @author: CrazyChild
 * @createDate: 2019/11/19
 * @version: 1.0
 */
@Service
public class InforService {
    @Autowired
    private InforDao dao;
}
