package core;

import java.util.List;

import org.junit.Assert;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class OneCardAwayFHL2 {
	
	private String [] HTBHand;
	private String [] AIPHand;
	
	@Given("^AIP has a two pair L$")
	public void storeHTPPokerHand(DataTable table) throws Throwable {
		List<List<String>> data = table.raw();
		
		AIPHand = new String [5];
		AIPHand[0] = data.get(0).get(0);
		AIPHand[1] = data.get(0).get(1);
		AIPHand[2] = data.get(0).get(2);
		AIPHand[3] = data.get(0).get(3);
		AIPHand[4] = data.get(0).get(4);	
	}
	
	@And("^HTB_F_TP is given a Flush W$")
	public void storeAIPPokerHand(DataTable table) throws Throwable {
		List<List<String>> data = table.raw();
		HTBHand = new String [5];
		HTBHand[0] = data.get(0).get(0);
		HTBHand[1] = data.get(0).get(1);
		HTBHand[2] = data.get(0).get(2);
		HTBHand[3] = data.get(0).get(3);
		HTBHand[4] = data.get(0).get(4);
	}
	
	@Then("^AIP_FH_TP exchanges the odd Card of the two pair with another card \"([^\"]*)\"$")
	public void cardExchangeAIP(String exchangeCard) throws Throwable {
		PokerStrategy strategy = new PokerStrategy();
		int index = strategy.isOneCardAwayFullHouse2(AIPHand);
		AIPHand[index] = exchangeCard;		
	}

	@Then("^AIP_FH_TP should lose the game$")
	public void determineWiner() throws Throwable {
		PokerStrategy strategy = new PokerStrategy();
		Assert.assertEquals(true, strategy.getScore(AIPHand) < strategy.getScore(HTBHand));
	}
}
