package Stepdefinition;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features={"src/test/resources/signup.feature","src/test/resources/signin.feature","src/test/resources/search.feature","src/test/resources/addtocart.feature"},
glue="Stepdefinition",
plugin="json:target/cucumber.json")
public class RunCukesTest {
}
