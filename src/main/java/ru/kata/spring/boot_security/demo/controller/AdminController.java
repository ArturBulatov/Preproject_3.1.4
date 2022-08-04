package ru.kata.spring.boot_security.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.UserService;

@Controller
public class AdminController {
    @Autowired
    private UserService userService;

    @GetMapping("/admin")
    public  String adminPage(Model model, @AuthenticationPrincipal User user) {
        model.addAttribute("messages", userService.allUsers());
        model.addAttribute("user", user);
        model.addAttribute("usernew", new User());
        model.addAttribute("roles", userService.getAllRoles());
        return "admin";
    }

    @GetMapping("/user")
    public  String userPage(Model model, @AuthenticationPrincipal User user) {
        model.addAttribute("user", user);
        return "user";
    }

    @PostMapping("/addnew")
    public String addUser(@ModelAttribute() User cl, @RequestParam(required = false, value = "roles") Long[] roles) {
        cl.setRoles(userService.getRolesByIdArr(roles));
        userService.saveUser(cl);
        return "redirect:/admin";
    }

    @GetMapping("delete/{id}")
    public  String deleteUserByID(@PathVariable("id") Long id) {
        userService.delete(userService.findUserById(id));
        return "redirect:/admin";
    }

    @PostMapping("/edit/{id}")
    public String editUserByID(@ModelAttribute("cl") User user,@PathVariable("id") Long id) {
        userService.update(id, user);
        return "redirect:/admin";
    }


}
