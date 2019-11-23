package com.information.service;

import com.information.dao.RelativeDao;
import com.information.entity.Relative;
import com.information.vo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
/**
 * @description: 关系service
 * @author: CrazyChild
 * @createDate: 2019/11/21
 * @version: 1.0
 */
@Service
public class RelativeService {
    @Autowired
    private RelativeDao dao;

    public Result delete(int id){
        Result re = new Result();
        try{
            dao.deleterealtive(id);
            re.setObj(null);
            re.setMessage("删除成功");
            re.setSuccess(true);
        }catch (Exception e){
            e.printStackTrace();
            re.setObj(null);
            re.setMessage("删除失败");
            re.setSuccess(false);
        }
        return re;
    }

    public Result add(Relative relative){
        Result re = new Result();
        try{
            dao.insert(relative);
            re.setObj(null);
            re.setMessage("添加成功");
            re.setSuccess(true);
        }catch (Exception e){
            e.printStackTrace();
            re.setObj(null);
            re.setMessage("添加失败");
            re.setSuccess(false);
        }
        return re;
    }
}
