package com.example.springvue;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;

@Controller
public class ErrorController implements org.springframework.boot.web.servlet.error.ErrorController {
    @GetMapping("/error")
    public String redirect(HttpServletRequest request) {

        Object status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);
        HttpStatus httpStatus = HttpStatus.valueOf(Integer.valueOf(status.toString()));
        System.out.println("httpStatus : "+httpStatus.toString() + ":::"+ request);
        return "index.html";
    }

    @Override
    public String getErrorPath() {
        System.out.println("!!!!");
        return "null";
    }
}
