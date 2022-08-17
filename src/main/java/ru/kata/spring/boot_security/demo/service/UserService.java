package ru.kata.spring.boot_security.demo.service;

import org.springframework.security.core.userdetails.UserDetailsService;
import ru.kata.spring.boot_security.demo.model.User;
import java.util.List;

public interface UserService extends UserDetailsService {

    public User findUserById(Long userId) ;

    public List<User> allUsers();

    public void saveUser(User user) ;


    void deleteById(Long id);

    public User getPrincipalUser();

}
