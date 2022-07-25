package ru.kata.spring.boot_security.demo.service;

import org.springframework.security.core.userdetails.UserDetailsService;
import ru.kata.spring.boot_security.demo.model.User;
import java.util.List;

public interface UserService extends UserDetailsService {

    public User findUserById(Long userId) ;

    public List<User> allUsers();

    public boolean saveUser(User user) ;

    public void update(Long id, User user) ;

    public void delete(User user);

}
