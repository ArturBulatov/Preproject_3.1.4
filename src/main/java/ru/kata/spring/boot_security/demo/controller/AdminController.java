package ru.kata.spring.boot_security.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@Controller
public class AdminController {

    @GetMapping("/admin")
    public  String adminPage() {
        return "admin";
    }
}
