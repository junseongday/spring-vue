package com.example.springvue;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/account", method = RequestMethod.POST)
public class AccountController {
    @RequestMapping(value = "/info")
    public ResponseEntity<?> fetchAccount() {
        HashMap<String, Object> data = new HashMap<>();
        data.put("name","junseong");
        List<HashMap<String, Object>> res = new ArrayList();
        res.add(data);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }
}
