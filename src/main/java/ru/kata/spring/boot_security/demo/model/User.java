package ru.kata.spring.boot_security.demo.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="userstable")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column(name="last_name")
    private String lastName;

    @Column
    private int age;
}