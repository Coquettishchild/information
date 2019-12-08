package com.information.controller;

import com.information.dao.FilesDao;
import com.information.dao.RelativeDao;
import com.information.entity.Files;
import com.information.service.FilesService;
import com.information.vo.Result;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import sun.misc.BASE64Encoder;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;
import java.io.FileNotFoundException;
import java.util.UUID;
import java.io.File;
/**
 * @description:
 * @author: CrazyChild
 * @createDate: 2019/11/21
 * @version: 1.0
 */
@RestController
@RequestMapping("/files")
public class FilesController {
    @Autowired
    private FilesService service;

    @Autowired
    private FilesDao dao;

    //文件路径
    private static final Resource re = new ClassPathResource("static/files");
    File filepaths;
    {
        try {
            filepaths = re.getFile();

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    @PostMapping
    public Result add(@RequestBody Files files){
        return service.add(files);
    }

    @DeleteMapping("/{id}")
    public Result delete(@PathVariable int id){
        return service.delete(id);
    }

    @PostMapping("/upload")
    public Result upload(MultipartFile file){
        Result re = new Result();
        try{
            String temp = (UUID.randomUUID()+" ").replaceAll("-","").substring(0,6)+"-";
            String fname = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf("/")+1);
            String filename = filepaths.getAbsolutePath()+"/"+temp+fname;
            File dest = new File(filename);
            if(!dest.exists()){
                dest.createNewFile();
            }
            //保存文件
            file.transferTo(dest);
            re.setSuccess(true);
            re.setMessage("上传成功");
            re.setObj(temp+fname);
        }catch (Exception e){
            e.printStackTrace();
            re.setSuccess(false);
            re.setMessage("上传失败");
            re.setObj(null);
        }
        return re;
    }
    @GetMapping("/download")
    public ResponseEntity<byte[]> downloadFile(@RequestParam("id") int fileID, HttpServletRequest req) {
        Files files = null;
        try {
            files = dao.searchById(fileID);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
        String filepath = filepaths +"/"+files.getFilepath();
        String filename = filepath.substring(filepath.lastIndexOf('/') + 1);
        //修改文件名编码，防止下载时乱码
        String userAgent = req.getHeader("USER-AGENT");
        if (userAgent.contains("Firefox")) {
            try {
                filename = "=?utf-8?b?" + new BASE64Encoder().encode(filename.getBytes("utf-8")) + "?=";
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }
        } else {
            try {
                filename = URLEncoder.encode(filename, "utf-8");
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }
        }
        File file = new File(filepath);
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        headers.setContentDispositionFormData("attachment", filename);
        try {
            return new ResponseEntity<byte[]>(FileUtils.readFileToByteArray(file), headers, HttpStatus.OK);
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }
}
