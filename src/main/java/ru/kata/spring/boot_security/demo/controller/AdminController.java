package ru.kata.spring.boot_security.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.UserService;
@CrossOrigin
@Controller
public class AdminController {
    @Autowired
    private UserService userService;

    @GetMapping("/admin")
    public  String adminPage() {
        return "admin";
    }
}
