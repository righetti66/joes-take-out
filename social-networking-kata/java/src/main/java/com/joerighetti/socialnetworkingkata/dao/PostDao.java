package com.joerighetti.socialnetworkingkata.dao;

import com.joerighetti.socialnetworkingkata.model.Post;

import java.util.Date;
import java.util.List;

public interface PostDao {

    List<Post> findAll();

    Post getPostByPostId(Long postId);

    List<Post> findByUserId(Long userId);

    void create(Long userId, String postText, Date postDate);
}

