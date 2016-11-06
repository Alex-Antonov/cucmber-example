package my.antonov.tests.steps;

import cucumber.api.java.ru.Дано;
import cucumber.api.java.ru.Если;
import cucumber.api.java.ru.То;
import my.antonov.model.User;
import my.antonov.model.Users;
import my.antonov.web.pages.impl.LoginPage;
import my.antonov.web.pages.impl.PersonPage;

import static org.junit.Assert.assertEquals;


/**
 * Created by alex on 04.11.2016.
 */
public class LoginSteps {

    private LoginPage loginPage;
    private PersonPage personPage;
    private User user;

    @Дано("^я захожу на тестируемый сайт")
    public void given() {
        loginPage = new LoginPage();
        loginPage.openLoginPage();
    }

    @Если("^попытаться залогиниться с (.+) данными")
    public void whenStartSerarching(String type) {
        System.out.println("type: " + type);
        if(type.equals("валидными")) {
            user = Users.createValidUser();
            System.out.println("creating valid user");
        } else {
            user = Users.createInvalidUser();
            System.out.println("creating invalid user");
        }
        personPage = loginPage.login(user.getLogin(), user.getPassword());
    }

    @То("^логирование пройдет (.+)")
    public void then(String status) {
        System.out.println("Login status: " + status);
        personPage.getResult().click();
        System.out.println("Person title: " + personPage.getTitle());
        assertEquals(personPage.getTitle(), "Александр Антонов");
    }
}
