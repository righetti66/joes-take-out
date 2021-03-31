package com.joerighetti.socialnetworkingkata.dao;

import com.joerighetti.socialnetworkingkata.model.User;

import java.util.List;

public interface UserDao {

    List<User> findAll();

    User getUserByUserId(Long userId);

    User findByUsername(String username);

    void create(String username);

}
