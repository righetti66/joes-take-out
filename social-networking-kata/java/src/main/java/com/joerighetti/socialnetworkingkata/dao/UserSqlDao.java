package com.joerighetti.socialnetworkingkata.dao;

import com.joerighetti.socialnetworkingkata.model.User;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserSqlDao implements UserDao {
    private JdbcTemplate jdbcTemplate;

    public UserSqlDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<User> findAll() {
        List<User> users = new ArrayList<>();
        String sql = "SELECT * FROM users";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
        while (results.next()) {
            User user = mapRowToUser(results);
            users.add(user);
        }
        return users;
    }

    private User mapRowToUser(SqlRowSet results) {
        User user = new User();
        user.setUserId(results.getLong("user_id"));
        user.setUsername((results.getString("username")));
        return user;
    }

    @Override
    public User getUserByUserId(Long userId) {
        String sql = "SELECT * FROM users WHERE user_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, userId);
        if (results.next()) {
            return mapRowToUser(results);
        } else {
            throw new RuntimeException("userId " + userId + " was not found.");
        }
    }

    @Override
    public User findByUsername(String username) {
        String sql = "SELECT * FROM users WHERE username = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, username);
        if (results.next()) {
            return mapRowToUser(results);
        } else {
            throw new RuntimeException("username " + username + " was not found.");
        }
    }

    @Override
    public void create(String username) {
        String sql = "INSERT INTO user (username) VALUES (?)";
        jdbcTemplate.update(sql, username);
    }


}
