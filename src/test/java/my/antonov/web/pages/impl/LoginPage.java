package my.antonov.web.pages.impl;

import my.antonov.util.TestingProperties;
import my.antonov.web.pages.AbstractPage;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


/**
 * Created by alex on 04.11.2016.
 */
public class LoginPage extends AbstractPage {

    private WebElement login;
    private WebElement password;


    public LoginPage() {
        super();
    }

    public void openLoginPage() {
        open(TestingProperties.URL);
        login = $(".//form/input[@name='email']");
        password = $(".//form/input[@name='pass']");
    }

    public PersonPage login(String login, String pass) {
        System.out.println("Login as \'" + login + "\'");
        this.login.sendKeys(login);
        this.password.sendKeys(pass);
        this.password.submit();
        return new PersonPage();
    }



}
