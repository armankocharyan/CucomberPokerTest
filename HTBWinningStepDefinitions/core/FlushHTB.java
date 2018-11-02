package core;

import java.util.List;

import org.junit.Assert;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class FlushHTB {
	
	private String [] HTBHand;
	private String [][] AIPHand;
	
	//Scenario: HTP has a Royal flush and plays against AIP has a Straight Flush
	@Given("^HTB is given a Flush$")
	public void storeHTPPokerHand(DataTable table) throws Throwable {
		List<List<String>> data = table.raw();
		
		HTBHand = new String [5];
		
		HTBHand[0] = data.get(0).get(0);
		HTBHand[1] = data.get(0).get(1);
		HTBHand[2] = data.get(0).get(2);
		HTBHand[3] = data.get(0).get(3);
		HTBHand[4] = data.get(0).get(4);
	}
	
	@And("^AIP is given all the other lower five hands$")
	public void storeAIPPokerHand(DataTable table) throws Throwable {
		List<List<String>> data = table.raw();
		
		AIPHand = new String [5][];
		AIPHand[0] = new String[5];
		AIPHand[1] = new String[5];
		AIPHand[2] = new String[5];
		AIPHand[3] = new String[5];
		AIPHand[4] = new String[5];
		
		AIPHand[0][0] = data.get(0).get(0);
		AIPHand[0][1] = data.get(0).get(1);
		AIPHand[0][2] = data.get(0).get(2);
		AIPHand[0][3] = data.get(0).get(3);
		AIPHand[0][4] = data.get(0).get(4);
		
		AIPHand[1][0] = data.get(1).get(0);
		AIPHand[1][1] = data.get(1).get(1);
		AIPHand[1][2] = data.get(1).get(2);
		AIPHand[1][3] = data.get(1).get(3);
		AIPHand[1][4] = data.get(1).get(4);
		
		AIPHand[2][0] = data.get(2).get(0);
		AIPHand[2][1] = data.get(2).get(1);
		AIPHand[2][2] = data.get(2).get(2);
		AIPHand[2][3] = data.get(2).get(3);
		AIPHand[2][4] = data.get(2).get(4);
		
		AIPHand[3][0] = data.get(3).get(0);
		AIPHand[3][1] = data.get(3).get(1);
		AIPHand[3][2] = data.get(3).get(2);
		AIPHand[3][3] = data.get(3).get(3);
		AIPHand[3][4] = data.get(3).get(4);
		
		AIPHand[4][0] = data.get(4).get(0);
		AIPHand[4][1] = data.get(4).get(1);
		AIPHand[4][2] = data.get(4).get(2);
		AIPHand[4][3] = data.get(4).get(3);
		AIPHand[4][4] = data.get(4).get(4);
		
	}

	@Then("^HTB should win all the five games$")
	public void determineTheWinner() throws Throwable {

		PokerStrategy strategy = new PokerStrategy();
		Assert.assertEquals(true, strategy.getScore(HTBHand) > strategy.getScore(AIPHand[0]));
		Assert.assertEquals(true, strategy.getScore(HTBHand) > strategy.getScore(AIPHand[1]));
		Assert.assertEquals(true, strategy.getScore(HTBHand) > strategy.getScore(AIPHand[2]));
		Assert.assertEquals(true, strategy.getScore(HTBHand) > strategy.getScore(AIPHand[3]));
		Assert.assertEquals(true, strategy.getScore(HTBHand) > strategy.getScore(AIPHand[4]));
		
	}

}