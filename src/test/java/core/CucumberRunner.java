package core;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		format = {"pretty", "json:target/cucumber.json"},
		features = {"HandFeatures", "VersusFeatures", "StrategyFeatures", "SpecialFeatures"},
		glue = {"core"}
		)
public class CucumberRunner {

}
