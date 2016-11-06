package my.antonov.web.pages;

import my.antonov.web.IBrowsers;
import my.antonov.web.driver.BrowserDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import java.util.concurrent.TimeUnit;

/**
 * Created by alex on 04.11.2016.
 */
public abstract class AbstractPage implements IBrowsers {

    protected WebDriver driver;

    public AbstractPage() {
        setUp();
    }
    public void setUp() {
        driver = BrowserDriver.getCurrentDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }


    protected void open(String URL) {
        driver.get(URL);
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }

    protected WebElement $(String xpath, String... args) {
        return driver.findElement(By.xpath(String.format(xpath, args)));
    }
}
