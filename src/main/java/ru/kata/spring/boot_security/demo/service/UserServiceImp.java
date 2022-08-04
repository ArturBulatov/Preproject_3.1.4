package ru.kata.spring.boot_security.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.kata.spring.boot_security.demo.model.Role;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.repository.RoleRepository;
import ru.kata.spring.boot_security.demo.repository.UserRepository;

import java.util.*;

@Transactional
@Service
public class UserServiceImp implements UserService {

    @Autowired
     UserRepository userRepository;

    @Autowired
     RoleRepository roleRepository;

    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(email);
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
        User userFromDB = userRepository.findByUsername(user.getEmail());
        if (userFromDB != null) {
            return false;
        }
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return true;
    }

    public void update(Long id, User user) {
        User user_updated = userRepository.getById(id);
        user_updated.setFirstname(user.getFirstname());
        user_updated.setLastName(user.getLastName());
        user_updated.setEmail(user.getEmail());
        if (!user.getPassword().isEmpty()){
            user_updated.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        }
        user_updated.setAge(user.getAge());
        user_updated.setRoles(user.getRoles());

    }

    public void delete(User user) {
        userRepository.delete(user);
    }

    public Set<Role> getRolesByIdArr(Long[] idList) {
        Set<Role> result = new HashSet<>();
        for (Long id : idList) {
            result.add(roleRepository.findById(id).get());
        }
        return result;
    }

    public List<Role> getAllRoles() {
        return roleRepository.findAll();
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