package com.information.vo;

import lombok.Data;

/**
 * @description:
 * @author: CrazyChild
 * @createDate: 2019/11/19
 * @version: 1.0
 */
@Data
public class Result {
    private boolean success;
    private String message;
    private Object obj;
}
