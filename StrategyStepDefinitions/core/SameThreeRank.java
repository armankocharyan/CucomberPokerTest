package core;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.junit.Assert;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class SameThreeRank {

	private String [] AIPHand;
	private ArrayList newList;
	
	@Given("^AIP is given a hand with three cards with the same rank$")
	public void storeHTPPokerHand(DataTable table) throws Throwable {
		List<List<String>> data = table.raw();
		
		AIPHand = new String [5];
		AIPHand[0] = data.get(0).get(0);
		AIPHand[1] = data.get(0).get(1);
		AIPHand[2] = data.get(0).get(2);
		AIPHand[3] = data.get(0).get(3);
		AIPHand[4] = data.get(0).get(4);	
	}
	
	@Then("^AIP_R exchanges the odd cards with two new cards \"([^\"]*)\"$")
	public void cardExchangeAIP(String exchangeCard) throws Throwable {
		PokerStrategy strategy = new PokerStrategy();
		
		String [] arr = exchangeCard.split(" ");
		newList = strategy.isSameThreeRank(AIPHand);
		
		for(int i = 0; i < newList.size(); i++) {
			AIPHand[(Integer) newList.get(i)] = arr[i];
			System.out.println(newList.get(i));
		}
	}
	
	@Then("^AIP_R should have a new hand with those two added cards$")
	public void newHand(DataTable table) throws Throwable {
		List<List<String>> data = table.raw();
		ArrayList<String> newHand = new ArrayList<String>();
		
		newHand.add(data.get(0).get(0));
		newHand.add(data.get(0).get(1));
		newHand.add(data.get(0).get(2));
		newHand.add(data.get(0).get(3));
		newHand.add(data.get(0).get(4));
		
		Assert.assertEquals(true, newHand.containsAll(new ArrayList<String>(Arrays.asList(AIPHand))));
		
	}

}
