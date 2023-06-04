package org.javamaster.invocationlab.admin;

import org.javamaster.invocationlab.admin.config.ErdException;
import org.javamaster.invocationlab.admin.dto.WebApiRspDto;
import org.javamaster.invocationlab.admin.model.ResultVo;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @author yudong
 * @date 2022/11/12
 */
@ControllerAdvice
public class GlobalHandler {
    private final Logger logger = Logger.getLogger(getClass());

    @ResponseBody
    @ExceptionHandler(ErdException.class)
    public ResultVo<String> exceptionHandler(ErdException e) {
        logger.error("error", e);
        return ResultVo.fail(e.getMessage());
    }

    @ResponseBody
    @ExceptionHandler(Exception.class)
    public WebApiRspDto<String> exceptionHandler(Exception e) {
        logger.error("error", e);
        WebApiRspDto<String> webApiRspDto = WebApiRspDto.error(ExceptionUtils.getMessage(e) + "\r\n"
                + ExceptionUtils.getStackTrace(e));
        webApiRspDto.setMsg(ExceptionUtils.getMessage(e));
        return webApiRspDto;
    }

}