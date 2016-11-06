package my.antonov.tests;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by alex on 04.11.2016.
 */
@RunWith(Cucumber.class)
@CucumberOptions(tags = {},format = {"pretty", "json:target/cucumber.json","html:target/cucumber.html"}, features = {"src/test/resources/features/"})
public class CucumberRunnerTest {
}
