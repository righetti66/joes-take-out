package com.joerighetti.socialnetworkingkata.controller;



import com.joerighetti.socialnetworkingkata.dao.PostDao;
import com.joerighetti.socialnetworkingkata.dao.UserDao;
import com.joerighetti.socialnetworkingkata.model.Post;
import com.joerighetti.socialnetworkingkata.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;


@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserController {
    private UserDao userDao;
    private PostDao postDao;

    public UserController(UserDao userDao, PostDao postDao) {
        this.userDao = userDao;
        this.postDao = postDao;
    }


    @RequestMapping(path = "/users", method = RequestMethod.GET)
    public List<User> getAllUsers(){
        return userDao.findAll();
    }

    @RequestMapping(path = "/users/{userId}", method = RequestMethod.GET)
    public User getUserByUserId(@PathVariable Long userId) {
        return userDao.getUserByUserId(userId);
    }

    @RequestMapping(path = "/users/{username}", method = RequestMethod.GET)
    public User getUserByUsername(@PathVariable String username) {
        return userDao.findByUsername(username);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(path = "/users", method = RequestMethod.POST)
    public void create(String username) {
        userDao.create(username);
    }

    @RequestMapping(path = "/posts", method = RequestMethod.GET)
    public List<Post> getAllPosts() { return postDao.findAll(); }

    @RequestMapping(path = "/posts/{postId}", method = RequestMethod.GET)
    public Post getPostByPostId(@PathVariable Long postId) { return postDao.getPostByPostId(postId); }

    @RequestMapping(path = "/posts/{userId}", method = RequestMethod.GET)
    public List<Post> getPostByUserId(@PathVariable Long userId) { return postDao.findByUserId(userId); }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(path = "/posts", method = RequestMethod.POST)
    public void create(Long userId, String postText, Date postDate) { postDao.create(userId, postText, postDate); }


}
