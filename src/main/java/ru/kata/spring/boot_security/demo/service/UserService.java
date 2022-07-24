package ru.kata.spring.boot_security.demo.service;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.kata.spring.boot_security.demo.model.Role;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.repository.RoleRepository;
import ru.kata.spring.boot_security.demo.repository.UserRepository;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class UserService implements UserDetailsService {

    @Autowired
     UserRepository userRepository;
    @Autowired
     RoleRepository roleRepository;
    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return user;
    }
    public User findUserById(Long userId) {
        Optional<User> userFromDB = userRepository.findById(userId);
        return userFromDB.orElse(new User());
    }

    public List<User> allUsers() {
        return userRepository.findAll();
    }

    public boolean saveUser(User user) {
        User userFromDB = userRepository.findByUsername(user.getUsername());

        if (userFromDB != null) {
            return false;
        }
        user.setRoles(Collections.singleton(new Role(1L, "ROLE_USER")));
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return true;
    }

    public void update(Long id, User user) {
        User user_updated = userRepository.getById(id);
        user_updated.setFirstname(user.getFirstname());
        user_updated.setLastName(user.getLastName());
        user_updated.setUsername(user.getUsername());
        user_updated.setPassword(user.getPassword());
        user_updated.setAge(user.getAge());
    }

    public void delete(User user) {
        userRepository.delete(user);
    }

}



























//package ru.kata.spring.boot_security.demo.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//import ru.kata.spring.boot_security.demo.model.User;
//import ru.kata.spring.boot_security.demo.repository.UserRepository;
//
//import java.util.List;
//
//@Service
//@Transactional(readOnly = true)
//public class UserService {
//    private final UserRepository userRepository;
//
//    @Autowired
//    public UserService(UserRepository userRepository) {
//        this.userRepository = userRepository;
//    }
//
//    public List<User> getAll() {
//        return userRepository.findAll();
//    }
//
//    public User getOne(Long id) {
//        return userRepository.getById(id);
//    }
//    @Transactional
//    public void add(User user) {
//        userRepository.save(user);
//    }
//    @Transactional
//    public void delete(User user) {
//        userRepository.delete(user);
//    }
//    @Transactional
//    public void update(Long id, User user) {
//        User user_updated = userRepository.getById(id);
//        user_updated.setName(user.getName());
//        user_updated.setLastName(user.getLastName());
//        user_updated.setAge(user.getAge());
//    }
//}