package ru.kata.spring.boot_security.demo.service;

import org.springframework.security.core.userdetails.UserDetailsService;
import ru.kata.spring.boot_security.demo.model.Role;
import ru.kata.spring.boot_security.demo.model.User;
import java.util.List;
import java.util.Set;

public interface UserService extends UserDetailsService {

    public User findUserById(Long userId) ;

    public List<User> allUsers();

    public boolean saveUser(User user) ;

    public void update(Long id, User user) ;

    public void delete(User user);

    public Set<Role> getRolesByIdArr(Long[] idList);

    public List<Role> getAllRoles();

}
