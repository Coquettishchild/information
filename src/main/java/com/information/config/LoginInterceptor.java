package com.information.config;

import com.alibaba.druid.support.json.JSONUtils;
import com.alibaba.fastjson.JSON;
import com.information.entity.User;
import com.information.vo.Result;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @description:
 * @author: CrazyChild
 * @createDate: 2019/11/23
 * @version: 1.0
 */
@Component
public class LoginInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        User user = (User) request.getSession().getAttribute("user");
        Result re = new Result();
        response.reset();
        response.setCharacterEncoding("UTF-8");
        response.setContentType("application/json;charset=UTF-8");
        if(user==null){
            re.setSuccess(false);
            re.setMessage("请先登录");
            re.setObj(null);
            response.getWriter().print(JSON.toJSONString(re));
            return false;
        }else{
            return true;
        }
    }
}
