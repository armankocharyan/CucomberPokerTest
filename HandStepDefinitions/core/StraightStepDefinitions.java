package core;

import java.util.List;

import org.junit.Assert;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class StraightStepDefinitions {
	
	private String [] hand;
	private final int NUMBER_OF_PERMUTATIONS = 120; //5! = 120
	
	
	@Given("^A straight poker hand in any order$")
	public void storePokerHand(DataTable table) throws Throwable {
		
		//System.out.println("Given a straight poker hand in any order\n");
		List<List<String>> data = table.raw();
		hand = new String [5];
		
		hand[0] = data.get(0).get(0);
		hand[1] = data.get(0).get(1);
		hand[2] = data.get(0).get(2);
		hand[3] = data.get(0).get(3);
		hand[4] = data.get(0).get(4);
		
	}

	@Then("^I should get true for straight in any poker hand permutation$")
	public void checkCardsForStraight() throws Throwable {
		Permutation.resetCounter();
		Permutation.permuteEachHand(hand, Permutation.STRAIGHT);
		Assert.assertEquals(Permutation.getCounter(), NUMBER_OF_PERMUTATIONS);
		
	}
}
