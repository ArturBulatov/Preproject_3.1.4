package ru.kata.spring.boot_security.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.repository.UserRepository;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAll() {
        return userRepository.findAll();
    }

    public User getOne(Long id) {
        return userRepository.getById(id);
    }
    @Transactional
    public void add(User user) {
        userRepository.save(user);
    }
    @Transactional
    public void delete(User user) {
        userRepository.delete(user);
    }
    @Transactional
    public void update(Long id, User user) {
        User user_updated = userRepository.getById(id);
        user_updated.setName(user.getName());
        user_updated.setLastName(user.getLastName());
        user_updated.setAge(user.getAge());
    }
}