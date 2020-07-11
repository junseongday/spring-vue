package com.example.springvue;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ErrorController implements org.springframework.boot.web.servlet.error.ErrorController {
    @Override
    public String getErrorPath() {
        System.out.println("getErrorPath");
        return "/error";
    }

    @GetMapping("/error")
    public String redirect() {
        System.out.println("redirect");
        return "/error.html";
    }
}
