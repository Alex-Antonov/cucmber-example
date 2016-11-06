package my.antonov.model;

/**
 * Created by alex on 05.11.2016.
 */
public class Users {

    public static User createValidUser(){
        User user = new User("", "");
        return user;
    }

    public static User createInvalidUser(){
        User user = new User("", "");
        return user;
    }
}
