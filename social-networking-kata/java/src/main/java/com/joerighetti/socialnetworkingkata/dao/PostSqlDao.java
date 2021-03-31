package com.joerighetti.socialnetworkingkata.dao;

import com.joerighetti.socialnetworkingkata.model.Post;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class PostSqlDao implements PostDao{
    private JdbcTemplate jdbcTemplate;

    public PostSqlDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Post> findAll() {
        List<Post> posts = new ArrayList<>();
        String sql = "SELECT * FROM posts";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
        while(results.next()) {
            Post post = mapRowToPost(results);
            posts.add(post);
        }
        return posts;
    }

    private Post mapRowToPost(SqlRowSet results) {
        Post post = new Post();
        post.setPostId(results.getLong("post_id"));
        post.setUserId(results.getLong("user_id"));
        post.setPostText(results.getString("post_text"));
        post.setPostDate(results.getDate("post_date"));
        return post;
    }

    @Override
    public Post getPostByPostId(Long postId) {
        String sql = "SELECT * FROM posts WHERE post_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, postId);
        if (results.next()) {
            return mapRowToPost(results);
        } else {
            throw new RuntimeException("postId " + postId + " was not found");
        }
    }

    @Override
    public List<Post> findByUserId(Long userId) {
        List<Post> posts = new ArrayList<>();
        String sql = "SELECT * FROM posts WHERE user_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
        while (results.next()) {
            Post post = mapRowToPost(results);
            posts.add(post);
        }
        return posts;
    }

    @Override
    public void create(Long userId, String postText, Date postDate) {
        String sql = "INSERT INTO posts (user_id, post_text, post_date) VALUES (?, ?, ?)";
        jdbcTemplate.update(sql, userId, postText, postDate);
    }
}
