package com.information.service;

import com.information.dao.FilesDao;
import com.information.dao.InforDao;
import com.information.dao.RelativeDao;
import com.information.entity.Files;
import com.information.entity.Information;
import com.information.entity.Relative;
import com.information.vo.ListInfo;
import com.information.vo.PageInfo;
import com.information.vo.Result;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
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

    private static final Logger logger = Logger.getLogger(InforService.class);

    @Autowired
    private InforDao idao;

    @Autowired
    private RelativeDao rdao;

    @Autowired
    private FilesDao fdao;
    /**
     *
     * @param infor
     * @return Result
     * @since v1.0.0
     * author CrazyChild
     * description 插入
     * date 2019/11/19
     */
    //先插入主infor，然后批量插入文件和关系
    @Transactional
    public Result insertInfor(Information infor){
        Result re = new Result();
        try {
            List<Relative> list = infor.getList();
            List<Files> flist  = infor.getFilesList();
            String id = (""+UUID.randomUUID()).replaceAll("-","");
            infor.setId(id);
            infor.setList(null);
            infor.setFilesList(null);
            idao.insert(infor);
            if(list!=null && list.size()>0){
                for (Relative relative: list) {
                    relative.setInforid(id);
                }
                rdao.insertList(list);
            }
            if(flist!=null && flist.size()>0){
                for (Files files: flist) {
                    files.setInid(id);
                }
                fdao.insertList(flist);
            }
            re.setMessage("插入成功");
            re.setSuccess(true);
            re.setObj(null);
            logger.info("插入成功");
        } catch (Exception e) {
            re.setSuccess(false);
            re.setMessage("插入失败");
            re.setObj(null);
            logger.info("插入失败",e);
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
            if (list!=null){
                if (!list.isEmpty()){
                    for(int i = 0 ;i<list.size();i++){
                        rdao.updateById(list.get(i));
                    }
                }
            }
            re.setMessage("更新成功");
            re.setSuccess(true);
            re.setObj(null);
            logger.info("更新成功");
        }catch (Exception e){
            re.setSuccess(false);
            re.setMessage("更新失败");
            logger.info("更新失败",e);
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
            logger.info("删除成功");
        }catch (Exception e){
            re.setSuccess(false);
            re.setMessage("删除失败");
            re.setObj(null);
            logger.info("删除失败",e);
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
        //因为MySQL limit初始行为 0
        pageNo = (pageNo-1)*pageSize;
        try {
            List<Information> list = idao.getAll(pageNo,pageSize);
            Double totalNo = idao.getTotalNo();
            Double totalPageNo = Math.ceil(totalNo/pageSize);
            //新建分页类
            PageInfo page = new PageInfo();
            //设置当前页数
            page.setPageNo(pageNo+1);
            //设置总页数
            page.setTotalNo((int) Math.ceil(totalPageNo));
            List<ListInfo> listInfos = new ArrayList<>();
            for (Information info:list) {
                ListInfo listInfo = new ListInfo();
                listInfo.setId(info.getId());
                listInfo.setName(info.getName());
                listInfo.setSex(info.getSex());
                listInfo.setBirthday(info.getBirthday());
                listInfo.setNativeplace(info.getNativeplace());
                listInfo.setPost(info.getPost());
                listInfos.add(listInfo);
            }
            page.setListInfo(listInfos);
            re.setObj(page);
            re.setMessage("查找成功");
            re.setSuccess(true);
            logger.info("分页查找成功");
        } catch (Exception e) {
            re.setMessage("查找失败");
            re.setSuccess(false);
            re.setObj(null);
            logger.info("分页查找失败",e);
        }
        return re;
    }

    /**
     * 获取文件详情
     * @param
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
            List<Files> list = fdao.getlist(id);
            in.setFilesList(list);
            re.setObj(in);
            re.setSuccess(true);
            re.setMessage("查找成功");
            logger.info("文件查找成功");
        } catch (Exception e) {
            re.setSuccess(false);
            re.setMessage("查找失败");
            re.setObj(null);
            logger.info("文件查找失败",e);
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
            logger.info("用户名查找成功");
        } catch (Exception e) {
            re.setSuccess(false);
            re.setMessage("查询失败");
            re.setObj(null);
            logger.info("用户名查找失败",e);
        }
        return re;
    }
}
