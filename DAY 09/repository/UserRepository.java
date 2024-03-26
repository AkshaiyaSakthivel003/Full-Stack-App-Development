package com.java.aqua.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.java.aqua.model.User;


public interface UserRepository extends JpaRepository<User, String>{
    
    Optional<User> findByEmail(String email);
    User findByName(String name);

}