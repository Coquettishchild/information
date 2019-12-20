package com.information.controller;

import com.information.entity.User;
import com.information.service.InforService;
import com.information.vo.Result;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

/**
 * @description:
 * @author: CrazyChild
 * @createDate: 2019/11/23
 * @version: 1.0
 */
@RestController
@RequestMapping("/user")
public class UserController {


    @PostMapping("/login")
    public Result login(@RequestBody User user, HttpServletRequest req){
        Result re = new Result();
        if("123456".equals(user.getPassword())||"admin".equals(user.getUsername())){
            re.setMessage("登录成功");
            req.getSession().setAttribute("user",user);
            re.setObj(null);
            re.setSuccess(true);
        }else{
            re.setSuccess(false);
            re.setObj(null);
            re.setMessage("登录失败");
        }
        return re;
    }
}
