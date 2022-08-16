package ru.kata.spring.boot_security.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.exception_handling.NoSuchUserException;
import ru.kata.spring.boot_security.demo.exception_handling.UserIncorrectData;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.UserService;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api")
public class UserRESTController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<User> showAllUsers() {
        List<User> allUsers = userService.allUsers();
        return allUsers;
    }

    @GetMapping("/users/principal")
    public User getPrincipalUsers() {
        User user = userService.getPrincipalUser();
        return user;
    }

    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable Long id) {
        User user = userService.findUserById(id);
        if ((user)==null) {
            throw new NoSuchUserException("There is no user with ID = " + id + " in Database");
        }
        return user;
    }

    @PostMapping("/users")
    public User addUser(@RequestBody User user) {
        userService.saveUser(user);
        return user;
    }

    @PutMapping("/users")
    public User editUser(@RequestBody User user) {
        userService.saveUser(user);
        return user;
    }

    @DeleteMapping("/users/{id}")
    public void delete(@PathVariable Long id ) {
        User user = userService.findUserById(id);
        if ((user)==null) {
            throw new NoSuchUserException("There is no user with ID = " + id + " in Database");
        }
        userService.deleteById(id);
    }

}
