package core;

import java.util.List;

import org.junit.Assert;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class FlushAIP {
	
	private String [][] HTBHand;
	private String [] AIPHand;
	
	//Scenario: HTP has a Royal flush and plays against AIP has a Straight Flush
	@Given("^AIP is given a Flush$")
	public void storeHTPPokerHand(DataTable table) throws Throwable {
		List<List<String>> data = table.raw();
		
		AIPHand = new String [5];
		
		AIPHand[0] = data.get(0).get(0);
		AIPHand[1] = data.get(0).get(1);
		AIPHand[2] = data.get(0).get(2);
		AIPHand[3] = data.get(0).get(3);
		AIPHand[4] = data.get(0).get(4);	
	}
	
	@And("^AIP Holds a Flush$")
	public void holdsCards() {
		PokerStrategy strategy = new PokerStrategy();
		Assert.assertEquals("Flush", strategy.isStrategyNeeded(AIPHand));
	}
	
	@And("^HTB is given all the other lower five hands$")
	public void storeAIPPokerHand(DataTable table) throws Throwable {
		List<List<String>> data = table.raw();
		
		HTBHand = new String [5][];
		HTBHand[0] = new String[5];
		HTBHand[1] = new String[5];
		HTBHand[2] = new String[5];
		HTBHand[3] = new String[5];
		HTBHand[4] = new String[5];
		
		HTBHand[0][0] = data.get(0).get(0);
		HTBHand[0][1] = data.get(0).get(1);
		HTBHand[0][2] = data.get(0).get(2);
		HTBHand[0][3] = data.get(0).get(3);
		HTBHand[0][4] = data.get(0).get(4);
		
		HTBHand[1][0] = data.get(1).get(0);
		HTBHand[1][1] = data.get(1).get(1);
		HTBHand[1][2] = data.get(1).get(2);
		HTBHand[1][3] = data.get(1).get(3);
		HTBHand[1][4] = data.get(1).get(4);
		
		HTBHand[2][0] = data.get(2).get(0);
		HTBHand[2][1] = data.get(2).get(1);
		HTBHand[2][2] = data.get(2).get(2);
		HTBHand[2][3] = data.get(2).get(3);
		HTBHand[2][4] = data.get(2).get(4);
		
		HTBHand[3][0] = data.get(3).get(0);
		HTBHand[3][1] = data.get(3).get(1);
		HTBHand[3][2] = data.get(3).get(2);
		HTBHand[3][3] = data.get(3).get(3);
		HTBHand[3][4] = data.get(3).get(4);
		
		HTBHand[4][0] = data.get(4).get(0);
		HTBHand[4][1] = data.get(4).get(1);
		HTBHand[4][2] = data.get(4).get(2);
		HTBHand[4][3] = data.get(4).get(3);
		HTBHand[4][4] = data.get(4).get(4);
		
		
	}

	@Then("^AIP should win all the five games$")
	public void determineTheWinner() throws Throwable {

		PokerStrategy strategy = new PokerStrategy();
		Assert.assertEquals(true, strategy.getScore(AIPHand) > strategy.getScore(HTBHand[0]));
		Assert.assertEquals(true, strategy.getScore(AIPHand) > strategy.getScore(HTBHand[1]));
		Assert.assertEquals(true, strategy.getScore(AIPHand) > strategy.getScore(HTBHand[2]));
		Assert.assertEquals(true, strategy.getScore(AIPHand) > strategy.getScore(HTBHand[3]));
		Assert.assertEquals(true, strategy.getScore(AIPHand) > strategy.getScore(HTBHand[4]));
		
	}

}
