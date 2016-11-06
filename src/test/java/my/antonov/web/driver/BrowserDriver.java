package my.antonov.web.driver;

import my.antonov.util.TestingProperties;
import my.antonov.web.IBrowsers;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.UnreachableBrowserException;

/**
 * Created by alex on 05.11.2016.
 */
public class BrowserDriver implements IBrowsers {

    private static WebDriver driver;

    public synchronized static WebDriver getCurrentDriver() {
        if(driver == null) {
            try {
                DesiredCapabilities capabilities = null;
                switch(TestingProperties.BROWSER) {
                    case FIREFOX:
                        capabilities = DesiredCapabilities.firefox();
                        capabilities.setCapability("javascript", true);
                        driver = new FirefoxDriver(capabilities);
                        break;
                    case CHROME:
                        capabilities = DesiredCapabilities.chrome();
                        capabilities.setCapability("javascript", true);
                        driver = new ChromeDriver(capabilities);
                        break;
                    case EDGE:
                        capabilities = DesiredCapabilities.edge();
                        capabilities.setCapability("javascript", true);
                        driver = new EdgeDriver(capabilities);
                        break;
                }
            } finally {
                Runtime.getRuntime().addShutdownHook(
                        new Thread(new BrowserCleanup()));
            }

        }

        return driver;
    }

    private static class BrowserCleanup implements Runnable {

        @Override
        public void run() {
            close();
        }
    }

    private static void close() {
        try {
            getCurrentDriver().quit();
            driver = null;
            System.out.println("closing the browser");
        } catch (UnreachableBrowserException e) {
            System.out.println("cannot close the browser: unreachable browser");
        }
    }

    public static void loadPage(String URL) {
        System.out.println("navigate to: " + URL);
        getCurrentDriver().get(URL);
    }
}
