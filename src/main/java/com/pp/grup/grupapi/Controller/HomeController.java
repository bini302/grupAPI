package com.pp.grup.grupapi.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpSession;

@Controller
public class HomeController {
    //기본페이지 요청 메서드
    @GetMapping(value = {"/", "/home", "/main"})
    public String main(HttpSession session) {
        if (session.getAttribute("loginEmail")==null){
            return "home";
        } else {
            session.getAttribute("loginEmail");
            return "main";
        }
    }
}