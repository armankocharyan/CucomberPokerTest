package core;

import java.util.List;

import org.junit.Assert;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class PairSuitWinner {

	private String [] AIPHand;
	private String [] HTBHand;
	
	@Given("^AIP has a pair with a higher suit pair$")
	public void storeAIPPokerHand(DataTable table) throws Throwable {
		List<List<String>> data = table.raw();
		
		AIPHand = new String [5];
		AIPHand[0] = data.get(0).get(0);
		AIPHand[1] = data.get(0).get(1);
		AIPHand[2] = data.get(0).get(2);
		AIPHand[3] = data.get(0).get(3);
		AIPHand[4] = data.get(0).get(4);	
	}
	
	@And("^HTB has a two pair with a lower suit pair$")
	public void storeHTBPokerHand(DataTable table) throws Throwable {
		List<List<String>> data = table.raw();
		
		HTBHand = new String [5];
		HTBHand[0] = data.get(0).get(0);
		HTBHand[1] = data.get(0).get(1);
		HTBHand[2] = data.get(0).get(2);
		HTBHand[3] = data.get(0).get(3);
		HTBHand[4] = data.get(0).get(4);
		
		
	}
	
	@Then("^AIP should win because it has the higher suit among the two pairs$")
	public void winnerIs() throws Throwable {
		PokerStrategy strategy = new PokerStrategy ();
		
		//System.out.println("AIP score: " + strategy.getScore(AIPHand));
		//System.out.println("AIP score: " + strategy.getScore(HTBHand));
		Assert.assertEquals(true, strategy.getScore(AIPHand) > strategy.getScore(HTBHand));
		
	}
}
