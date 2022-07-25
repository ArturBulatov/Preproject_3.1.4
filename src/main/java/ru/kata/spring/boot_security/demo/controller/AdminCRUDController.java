package ru.kata.spring.boot_security.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.UserService;

@Controller
@RequestMapping("/admin")
public class AdminCRUDController {
    @Autowired
    private UserService userService;

    @GetMapping("/adduser")
    public String addUser(@ModelAttribute("user") User user) {
        return "admin/adduser";
    }

    @PostMapping()
    public String saveUser(@ModelAttribute("user") User user) {
        userService.saveUser(user);
        return "redirect:/admin";
    }

    @GetMapping("delete/{id}")
    public  String delete(@PathVariable("id") Long id) {
        userService.delete(userService.findUserById(id));
        return "redirect:/admin";
    }
    @GetMapping("/edit/{id}")
    public String editUser(@PathVariable("id") Long id, Model model) {
        User user = userService.findUserById(id);
        model.addAttribute("user", user);
        return "admin/edituser";
    }

    @PostMapping("/edituser/{id}")
    public String edit(@ModelAttribute("user") User user,@PathVariable("id") Long id) {
        userService.update(id, user);
        return "redirect:/admin";
    }
}