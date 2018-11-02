package core;

import java.util.List;

import org.junit.Assert;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class OneCardAwayRFL {
	
	private String [] HTBHand;
	private String [] AIPHand;
	
	//Scenario: HTP has a Royal flush and plays against AIP has a Straight Flush
	@Given("^AIP is one card away from a Royal Flush L$")
	public void storeHTPPokerHand(DataTable table) throws Throwable {
		List<List<String>> data = table.raw();
		
		AIPHand = new String [5];
		AIPHand[0] = data.get(0).get(0);
		AIPHand[1] = data.get(0).get(1);
		AIPHand[2] = data.get(0).get(2);
		AIPHand[3] = data.get(0).get(3);
		AIPHand[4] = data.get(0).get(4);	
	}
	
	@And("^HTB_SF is given a Straight Flush W$")
	public void storeAIPPokerHand(DataTable table) throws Throwable {
		List<List<String>> data = table.raw();
		HTBHand = new String [5];
		HTBHand[0] = data.get(0).get(0);
		HTBHand[1] = data.get(0).get(1);
		HTBHand[2] = data.get(0).get(2);
		HTBHand[3] = data.get(0).get(3);
		HTBHand[4] = data.get(0).get(4);
		
	}
	
	@Then("^AIP_RF exchanges the odd Card with another card \"([^\"]*)\"$")
	public void cardExchangeAIP(String exchangeCard) throws Throwable {
		PokerStrategy strategy = new PokerStrategy();
		int index = strategy.isOneCardAwaySF(AIPHand);
		AIPHand[index] = exchangeCard;		
	}

	@Then("^AIP_RF should lose the game$")
	public void determineWiner() throws Throwable {
		PokerStrategy strategy = new PokerStrategy();
		Assert.assertEquals(true, strategy.getScore(AIPHand) < strategy.getScore(HTBHand));
	}

}
