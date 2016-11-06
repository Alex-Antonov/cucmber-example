package my.antonov.web.pages.impl;

import my.antonov.web.pages.AbstractPage;
import org.openqa.selenium.WebElement;

/**
 * Created by alex on 04.11.2016.
 */
public class PersonPage extends AbstractPage {

    public PersonPage() {
        super();
    }

    public WebElement getResult() {
        return $(".//ol/li[@id='l_pr']");
    }

    public String getTitle() {
        return driver.getTitle();
    }
}
