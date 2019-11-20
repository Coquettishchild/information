package com.information.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.information.dao.InforDao;
import com.information.dao.RelativeDao;
import com.information.entity.Information;
import com.information.entity.Relative;
import com.information.vo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

/**
 * @description:信息service
 * @author: CrazyChild
 * @createDate: 2019/11/19
 * @version: 1.0
 */
@Service
public class InforService {
    @Autowired
    private InforDao idao;

    @Autowired
    private RelativeDao rdao;
    /**
     *
     * @param infor
     * @return Result
     * @since v1.0.0
     * author CrazyChild
     * description 插入
     * date 2019/11/19
     */
    @Transactional
    public Result insertInfor(Information infor){
        Result re = new Result();
        try {
            List<Relative> list = infor.getList();
            String id = (""+UUID.randomUUID()).replaceAll("-","");
            infor.setId(id);
            infor.setList(null);
            for (Relative relative: list) {
                relative.setInforid(id);
            }
            idao.insert(infor);
            rdao.insertList(list);
            re.setMessage("插入成功");
            re.setSuccess(true);
            re.setObj(null);
        } catch (Exception e) {
            e.printStackTrace();
            re.setSuccess(false);
            re.setMessage("插入失败");
            re.setObj(null);
        }
        return re;
    }

    /**
     *
     * @param infor
     * @return Result
     * @since v1.0.0
     * author CrazyChild
     * description  更新
     * date 2019/11/19
     */

    @Transactional
    public Result updateInfor(Information infor){
        Result re = new Result();
        try{
            List<Relative> list = infor.getList();
            infor.setList(null);
            idao.updateById(infor);
            for(int i = 0 ;i<list.size();i++){
                rdao.updateById(list.get(i));
            }
            re.setMessage("更新成功");
            re.setSuccess(true);
            re.setObj(null);
        }catch (Exception e){
            e.printStackTrace();
            re.setSuccess(false);
            re.setMessage("更新失败");
        }
        return re;
    }

    /**
     *
     * @param id
     * @return Result
     * @since v1.0.0
     * author CrazyChild
     * description 删除
     * date 2019/11/19
     */

    public Result delete(String id){
        Result re = new Result();
        try{
            idao.deleteById(id);
            re.setMessage("删除成功");
            re.setSuccess(true);
            re.setObj(null);
        }catch (Exception e){
            e.printStackTrace();
            re.setSuccess(false);
            re.setMessage("删除失败");
            re.setObj(null);
        }
        return re;
    }

    /**
     *
     * @param pageNo
     * @return Result
     * @since v1.0.0
     * author CrazyChild
     * description 获取所有
     * date 2019/11/19
     */
    public Result getAll(int pageNo){
        Result re = new Result();
        int pageSize = 10;
        try {
            List<Information> list = idao.getAll(pageNo,pageSize);
            re.setObj(list);
            re.setMessage("查找成功");
            re.setSuccess(true);
        } catch (Exception e) {
            e.printStackTrace();
            re.setMessage("查找失败");
            re.setSuccess(false);
            re.setObj(null);
        }
        return re;
    }

    /**
     *
     * @param 获取文件详情
     * @return
     * @since v1.0.0
     * author CrazyChild
     * description
     * date 2019/11/20
     */
    public Result getDetail(String id){
        Result re = new Result();
        try {
            Information in = idao.getInformation(id);
            re.setObj(in);
            re.setSuccess(true);
            re.setMessage("查找成功");
        } catch (Exception e) {
            e.printStackTrace();
            re.setSuccess(false);
            re.setMessage("查找失败");
            re.setObj(null);
        }
        return  re;
    }

    /**
     *
     * @param name
     * @return
     * @since v1.0.0
     * author CrazyChild
     * description 通过用户名查询
     * date 2019/11/20
     */
    public Result searchByName(String name){
        Result re = new Result();
        try {
            List list = idao.searchByName(name);
            re.setObj(list);
            re.setMessage("查询成功");
            re.setSuccess(true);
        } catch (Exception e) {
            e.printStackTrace();
            re.setSuccess(false);
            re.setMessage("查询失败");
            re.setObj(null);
        }
        return re;
    }
}
