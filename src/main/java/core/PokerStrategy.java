package core;

import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;

public class PokerStrategy {
	
	//Constant Variables
	static final LinkedList<Integer> SPECIAL_STRAIGHT = new LinkedList<Integer>(){{
		add(2);
		add(3);
		add(4);
		add(5);
		add(14);
	}};
	
	//Hand Identifiers:
	
	public boolean isPair(String [] hand) {
		
		
		LinkedList<String> type = new LinkedList<String>();
		
		for(int i = 0; i < hand.length; i++) type.add(hand[i].substring(1));
		
		int counter = 0;
		boolean foundPair = false;
		String tempType = "";
		
		for (int i = 0; i < type.size(); i++) {
			for (int j = 0; j < type.size(); j++) {
				if(type.get(i).equals(type.get(j)) ) {
					
					counter++;
					if(counter == 2) {
						if(!foundPair && !type.get(i).equals(tempType)) {
							foundPair = true;
						}
					}
					
				}
				
			}
			counter = 0;
		}
		
		return foundPair;
	}

	public boolean isTwoPair(String [] hand) {
		
		LinkedList<String> type = new LinkedList<String>();
		
		for(int i = 0; i < hand.length; i++) type .add(hand[i].substring(1));
		
		
		int counter = 0;
		String tempType = "";
		boolean twoOfKind = false;
		for (int i = 0; i < type.size(); i++) {
			
			for (int j = 0; j < type.size(); j++) if(type.get(i).equals(type.get(j))) counter++;
			
			if(counter > 2) return false;
			
			if(counter == 2) { 
				tempType = type.get(i); 
				twoOfKind = true;
				}
			counter = 0;
			
		}
		
		if (!twoOfKind) return twoOfKind;
		
		for (int i = 0; i < type.size(); i++) {
			
			for(int j = 0; j < type.size(); j++) if(type.get(i).equals(type.get(j) ) && (!type.get(i).equals(tempType))) counter++;
			
			if(counter == 2) return true;
			counter = 0;
		}
		
		
		return false;
	}

    public boolean isThreeKind(String [] hand) {
		
		LinkedList<String> type = new LinkedList<String>();
		
		for(int i = 0; i < hand.length; i++) type.add(hand[i].substring(1));
		
		
		int counter = 0;
		String tempType = "";
		boolean threeOfKind = false;
		
		for (int i = 0; i < type.size(); i++) {
			
			for (int j = 0; j < type.size(); j++) if(type.get(i).equals(type.get(j))) counter++;
			
			if(counter > 3) return false;
			
			if(counter == 3) { 
				tempType = type.get(i); 
				threeOfKind = true;
				return true;
				}
			counter = 0;
			
		}
		
		return false;
	}
	
    public boolean isStraight(String [] hand) {
		
		LinkedList<String> type = new LinkedList<String>();
		for(int i = 0; i < hand.length; i++) type .add(hand[i].substring(1));
		
		LinkedList<Integer> intType = new LinkedList<Integer>();
		
		for(int i = 0; i < type.size(); i ++) {
			if(type.get(i).equals("J")) intType.add(11);
			else if(type.get(i).equals("Q")) intType.add(12);
			else if(type.get(i).equals("K")) intType.add(13);
			else if(type.get(i).equals("A")) intType.add(14);
			else intType.add(Integer.parseInt(type.get(i)));
		}
		
		if(intType.contains(14)) {
			if(isAceOneHelper(intType) == 4) intType.set(intType.indexOf(14), 1);
		}
		
		Collections.sort(intType);
				
		for (int i = 0; i < intType.size() - 1; i ++) {
			
			if (intType.get(i + 1) - intType.get(i) != 1)
				return false;
		}
		
		return true;
	}
    
    public boolean isFlush(String [] hand) {
		
		LinkedList<String> suit = new LinkedList<String>();
		for(int i = 0; i < hand.length; i++) suit.add(hand[i].substring(0, 1));
		
		for(int i = 0; i < suit.size(); i++) {
			
			for(int j = 0; j < suit.size(); j++) {
				
				if(! suit.get(i).equals(suit.get(j))) return false;
			}
		}
		return true;
	}
    
    public boolean isFullHouse(String [] hand) {
    	
		LinkedList<String> type = new LinkedList<String>();
		
		for(int i = 0; i < hand.length; i++) type .add(hand[i].substring(1));
		
		int counter = 0;
		String tempType = "";
		boolean threeOfKind = false;
		//checks to see if there is a three of a kind
		//if there is it stores the card type
		for (int i = 0; i < type.size(); i++) {
			
			for (int j = 0; j < type.size(); j++) if(type.get(i).equals(type.get(j))) counter++;
			
			if(counter > 3) return false;
			
			
			if(counter == 3) { 
					tempType = type.get(i); 
					threeOfKind = true;
				}
			counter = 0;
			
		}
		
		if (!threeOfKind) return threeOfKind;
		
		//checks to see if there is a two of a kind that is 
		//not the same as the previous equation
		
		for (int i = 0; i < type.size(); i++) {
			
			for(int j = 0; j < type.size(); j++) if(type.get(i).equals(type.get(j) ) && (!type.get(i).equals(tempType))) counter++;
			
			if(counter == 2) return true;
			counter = 0;
		}
		
		
		return false;
		
	}

    public boolean isFourKind(String [] hand) {
		
		LinkedList<String> type = new LinkedList<String>();
		
		for(int i = 0; i < hand.length; i++) type.add(hand[i].substring(1));
		
		
		int counter = 0;
		String tempType = "";
		boolean fourOfKind = false;
		
		for (int i = 0; i < type.size(); i++) {
			
			for (int j = 0; j < type.size(); j++) if(type.get(i).equals(type.get(j))) counter++;
			
			if(counter > 4) return false;
			
			if(counter == 4) { 
				tempType = type.get(i); 
				fourOfKind = true;
				return true;
				}
			counter = 0;
			
		}
		
		return false;
	}
    
    public boolean isStraightFlush(String [] hand) {
	
		LinkedList<String> suit = new LinkedList<String>();
		LinkedList<String> type = new LinkedList<String>();
		
		for(int i = 0; i < hand.length; i++) {
			suit.add(hand[i].substring(0, 1));
			type.add(hand[i].substring(1));
		}
		
		//check to see if the suit is the same
		for(int i = 0; i < suit.size(); i++) {
			
			for(int j = 0; j < suit.size(); j++) {
				
				if(!suit.get(i).equals(suit.get(j))) return false;
			}
			
		}
		
		LinkedList<Integer> intType = new LinkedList<Integer>();
	
		//convert the string linked list to an int linked list
		for(int i = 0; i < type.size(); i ++) {
			if(type.get(i).equals("J")) intType.add(11);
			else if(type.get(i).equals("Q")) intType.add(12);
			else if(type.get(i).equals("K")) intType.add(13);
			else if(type.get(i).equals("A")) intType.add(14);
			else intType.add(Integer.parseInt(type.get(i)));
		}
		
		//check to see if the Ace is 1 or 14
		if(intType.containsAll(SPECIAL_STRAIGHT)) {
			intType.set(intType.indexOf(14), 1);
			Collections.sort(intType);
		}
				
		//sort the numbers from lowest to highest
		Collections.sort(intType);
		
		
		//check to see if the hand is a straight
		for (int i = 0; i < intType.size() - 1; i ++) {
			
			if (intType.get(i + 1) - intType.get(i) != 1)
				return false;
		}
		
		
		return true;
	}
    
    public boolean isRoyalFlush(String [] hand) {
		
		
		LinkedList<String> suit = new LinkedList<String>();
		LinkedList<String> type = new LinkedList<String>();
		
		//split the array into suit and type lists
		for(int i = 0; i < hand.length; i++) {
			suit.add(hand[i].substring(0, 1));
			type.add(hand[i].substring(1));
		}
		
		//check to see if the suit is the same
		for(int i = 0; i < suit.size(); i++) {
			
			for(int j = 0; j < suit.size(); j++) {
				
				if(!suit.get(i).equals(suit.get(j))) return false;
			}
			
		}
		
		
		LinkedList<Integer> intType = new LinkedList<Integer>();
		
		//convert the string linked list to an int linked list
		for(int i = 0; i < type.size(); i ++) {
			if(type.get(i).equals("J")) intType.add(11);
			else if(type.get(i).equals("Q")) intType.add(12);
			else if(type.get(i).equals("K")) intType.add(13);
			else if(type.get(i).equals("A")) intType.add(14);
			else intType.add(Integer.parseInt(type.get(i)));
		}
		
		Collections.sort(intType);
		//for(int i = 0; i < intType.size(); i ++) System.out.print(intType.get(i) + "\t");
		
		for (int i = 0; i < intType.size() - 1; i ++) {
			
			if (intType.get(i + 1) - intType.get(i) != 1)
				return false;
		}
		
		//check to see if lowest elem is 10 and highest is ace
		if(intType.get(0) != 10 && intType.get(4) != 14) return false;
		
		return true;
	}
  
    
    //One away strategy methods
    public int isOneCardAwayStraight(String [] hand) {
		
		LinkedList<String> type = new LinkedList<String>();
		
		
		//split the array into suit and type lists
		for(int i = 0; i < hand.length; i++) {
			type.add(hand[i].substring(1));
		}
				
		LinkedList<Integer> intType = new LinkedList<Integer>();
		
		//convert the string linked list to an int linked list
		for(int i = 0; i < type.size(); i ++) {
			if(type.get(i).equals("J")) intType.add(11);
			else if(type.get(i).equals("Q")) intType.add(12);
			else if(type.get(i).equals("K")) intType.add(13);
			else if(type.get(i).equals("A")) intType.add(14);
			else intType.add(Integer.parseInt(type.get(i)));
		}
		
		
		//our hand contains 3 of the following cards [2, 3, 4, 5] then ace has to be 1
		if(intType.contains(14)) {
			if(isAceOneHelper(intType) == 3) intType.set(intType.indexOf(14), 1);
		}
		
		
		Collections.sort(intType);
		//for(int i = 0; i < intType.size(); i ++) System.out.print(intType.get(i) + "\t");
		
		int tempTypeIndex = -1;
		String tempType = "";
		boolean foundCard = false;
		
		
		//First Card
		if(intType.get(1) - intType.get(0) != 1) {
			//if(intType.get(1) - intType.get(0) != 2) return -1;
			if(intType.get(2) - intType.get(1) != 1) return -1;
			if(intType.get(3) - intType.get(2) != 1) return -1;
			if(intType.get(4) - intType.get(3) == 1) {
				if(foundCard) return -1;
				foundCard = true;
				tempTypeIndex = 0;
			}
		}
		
		
		if(intType.get(2) - intType.get(1) != 1) {
			if(intType.get(2) - intType.get(1) != 2) return -1;
			if(intType.get(3) - intType.get(2) != 1) return -1;
			if(intType.get(4) - intType.get(3) == 1) {
				if(foundCard) return -1;
				foundCard = true;
				tempTypeIndex = 0;
			}
			
		}
		
		if(intType.get(3) - intType.get(2) != 1) {
			if(intType.get(3) - intType.get(2) != 2) return -1;
			if(intType.get(4) - intType.get(3) == 1) {
				if(foundCard) return -1;
				foundCard = true;
				tempTypeIndex = 0;
			}
			
		}
		
		if(intType.get(4) - intType.get(3) != 1) {
			if(foundCard) return -1;
			foundCard = true;
			tempTypeIndex = 4;
			
			//special case
			if(intType.get(4) - intType.get(3) == 2) tempTypeIndex = 0;
		}
        if(tempTypeIndex == -1) return -1;
		
		
		if(intType.get(tempTypeIndex) == 1) tempType = "A";
		else if(intType.get(tempTypeIndex) == 11) tempType = "J";
		else if(intType.get(tempTypeIndex) == 12) tempType = "Q";
		else if(intType.get(tempTypeIndex) == 13) tempType = "K";
		else if(intType.get(tempTypeIndex) == 14) tempType = "A";
		else tempType = intType.get(tempTypeIndex).toString();

		//System.out.println("tempType: " + tempType);
		return type.indexOf(tempType);
	}
    
    public int isOneCardAwayFlush(String [] hand) {
		
		LinkedList<String> suit = new LinkedList<String>();
		
		//split the array into suit and type lists
		for(int i = 0; i < hand.length; i++) {
			suit.add(hand[i].substring(0, 1));
		}
		
		
		
		int counter = 0;
		int tempSuitIndex = -1;
		boolean foundCard = false;
		
		//check to see if the suit is the same
		
		
		for(int i = 0; i < suit.size(); i++) {
			
			for(int j = 0; j < suit.size(); j++) {
				
				if(!suit.get(i).equals(suit.get(j))) {
					counter++;
				}
				
			}
			
			
			if(counter != 1 && counter != suit.size() - 1) return -1;
			
			
			if(counter == suit.size() - 1) {
				
				if(foundCard) return -1;
				
				foundCard = true;
				tempSuitIndex = i;
			}
			
			counter = 0;
		}
		
		
		
		return tempSuitIndex;
	}
    
    public int isOneCardAwaySF(String [] hand) {
	
		
		if(isFlush(hand)) return isOneCardAwayStraight(hand);
		if(isStraight(hand)) return isOneCardAwayFlush(hand);
		if(isOneCardAwayStraight(hand) == isOneCardAwayFlush(hand)) return isOneCardAwayFlush(hand);
		
		return -1;
		
	}
    
    public int isTwoDistinct(String [] hand){
    	
    	LinkedList<String> type = new LinkedList<String>();
		
		for(int i = 0; i < hand.length; i++) type .add(hand[i].substring(1));
		
		int counter = 0;
		String tempType1 = "";
		String tempType2 = "";
		
		boolean twoOfKind1 = false;
		boolean twoOfKind2 = false;
		
		//firstPair
		for (int i = 0; i < type.size(); i++) {
			
			for (int j = 0; j < type.size(); j++) if(type.get(i).equals(type.get(j))) counter++;
			if(counter > 2) return -1;
			if(counter == 2) { 
				if (!twoOfKind1) {
					tempType1 = type.get(i); 
					twoOfKind1 = true;
				}
			}
			counter = 0;
		}
		
		for (int i = 0; i < type.size(); i++) {
			
			for(int j = 0; j < type.size(); j++) if(type.get(i).equals(type.get(j)) && (!type.get(i).equals(tempType1))) counter++;
			if(counter > 2) return -1;
			if(counter == 2) { 
				if (!twoOfKind2) {
					tempType2 = type.get(i); 
					twoOfKind2 = true;
				}
			}
			counter = 0;
		}
		
		String oddCard = "";
		for(int i = 0; i < type.size(); i++)
			if( !(type.get(i).equals(tempType1)) && !(type.get(i).equals(tempType2))) oddCard = type.get(i);
		
		if(oddCard.equals(""))return -1;
		
		return type.indexOf(oddCard);
    	
    }
    
    public int isOneCardAwayFullHouse(String[] hand) {
		ArrayList <Integer> otherCards = new ArrayList<Integer>();
		
		LinkedList<String> type = new LinkedList<String>();
		
		for(int i = 0; i < hand.length; i++) type.add(hand[i].substring(1));
		
		int counter = 0;
		String tempType = "";
		boolean threeOfKind = false;
		//checks to see if there is a three of a kind
		//if there is it stores the card type
		for (int i = 0; i < type.size(); i++) {
			
			for (int j = 0; j < type.size(); j++) if(type.get(i).equals(type.get(j))) counter++;
			if(counter == 3) tempType = type.get(i); 
			counter = 0;
		}
		
		String otherCard1 = "";
		String otherCard2 = "";
		
		for (int i = 0; i < type.size(); i++) if(!type.get(i).equals(tempType))otherCard1 = type.get(i);
		for (int i = 0; i < type.size(); i++) if((!type.get(i).equals(tempType)) && (!type.get(i).equals(otherCard1)))otherCard2 = type.get(i);
		
		otherCards.add(type.indexOf(otherCard1));
		otherCards.add(type.indexOf(otherCard2));
		
		if(otherCards.size() != 2) {
			otherCards.removeAll(otherCards);
			otherCards.add(-1);
			return -1;
		}
		
		int intOtherCard1, intOtherCard2;
		
		if(otherCard1.equals("J")) intOtherCard1 = 11;
		else if(otherCard1.equals("Q")) intOtherCard1 = 12;
		else if(otherCard1.equals("K")) intOtherCard1 = 13;
		else if(otherCard1.equals("A")) intOtherCard1 = 14;
		else intOtherCard1 = Integer.parseInt(otherCard1);
		
		if(otherCard2.equals("J")) intOtherCard2 = 11;
		else if(otherCard2.equals("Q")) intOtherCard2 = 12;
		else if(otherCard2.equals("K")) intOtherCard2 = 13;
		else if(otherCard2.equals("A")) intOtherCard2 = 14;
		else intOtherCard2 = Integer.parseInt(otherCard2);
		
		if(intOtherCard2 > intOtherCard1) return type.indexOf(otherCard1);
		else return type.indexOf(otherCard2);
    	
    }
    
    public int isOneCardAwayFullHouse2(String[] hand) {
    	
    	LinkedList<String> type = new LinkedList<String>();
		for(int i = 0; i < hand.length; i++) type .add(hand[i].substring(1));
		
		int counter = 0;
		String tempType = "";
		String tempType2 = "";
		
		boolean twoOfKind = false;
		boolean twoOfKind2 = false;
		
		for (int i = 0; i < type.size(); i++) {
			
			for (int j = 0; j < type.size(); j++) if(type.get(i).equals(type.get(j))) counter++;
			
			if(counter > 2) return -1;
			
			if(counter == 2) { 
				tempType = type.get(i); 
				twoOfKind = true;
				}
			counter = 0;
			
		}
		
		if (!twoOfKind) return -1;
		
		for (int i = 0; i < type.size(); i++) {
			
			for(int j = 0; j < type.size(); j++) if(type.get(i).equals(type.get(j)) && (!type.get(i).equals(tempType))) counter++;
			
			if(counter > 2) return -1;
			
			if(counter == 2) { 
				tempType2 = type.get(i); 
				twoOfKind2 = true;
			}
			counter = 0;
		}
		if(!twoOfKind && !twoOfKind2) return -1;
		
		for(int i = 0; i < type.size(); i++) {
			if(!type.get(i).equals(tempType) && !type.get(i).equals(tempType2)) return i;
		}
		
		return -1;
    	
    	
    }
    //Repetitive card Identifiers
    
    
    public ArrayList<Integer> isSameThreeSuit(String [] hand){
		
		ArrayList <Integer> otherCards = new ArrayList<Integer>();
		LinkedList<String> suit = new LinkedList<String>();
		
		for(int i = 0; i < hand.length; i++) suit.add(hand[i].substring(0, 1));
		
		
		int counter = 0;
		String tempType = "";
		boolean threeOfKind = false;
		
		for (int i = 0; i < suit.size(); i++) {
			
			for (int j = 0; j < suit.size(); j++) if(suit.get(i).equals(suit.get(j))) counter++;
			if(counter == 3) tempType = suit.get(i); 
			counter = 0;
		}
		
		String otherCard1 = "";
		String otherCard2 = "";
		
		for (int i = 0; i < suit.size(); i++) if(!suit.get(i).equals(tempType))otherCard1 = suit.get(i);
		for (int i = 0; i < suit.size(); i++) if((!suit.get(i).equals(tempType)) && (!suit.get(i).equals(otherCard1)))otherCard2 = suit.get(i);
		
		otherCards.add(suit.indexOf(otherCard1));
		otherCards.add(suit.indexOf(otherCard2));
		
		return otherCards;
	}

    public ArrayList<Integer> isSameThreeRank(String [] hand){
		
		ArrayList <Integer> otherCards = new ArrayList<Integer>();
		
		LinkedList<String> type = new LinkedList<String>();
		
		for(int i = 0; i < hand.length; i++) type.add(hand[i].substring(1));
		
		int counter = 0;
		String tempType = "";
		boolean threeOfKind = false;
		//checks to see if there is a three of a kind
		//if there is it stores the card type
		for (int i = 0; i < type.size(); i++) {
			
			for (int j = 0; j < type.size(); j++) if(type.get(i).equals(type.get(j))) counter++;
			if(counter == 3) tempType = type.get(i); 
			counter = 0;
		}
		
		String otherCard1 = "";
		String otherCard2 = "";
		
		for (int i = 0; i < type.size(); i++) if(!type.get(i).equals(tempType))otherCard1 = type.get(i);
		for (int i = 0; i < type.size(); i++) if((!type.get(i).equals(tempType)) && (!type.get(i).equals(otherCard1)))otherCard2 = type.get(i);
		
		otherCards.add(type.indexOf(otherCard1));
		otherCards.add(type.indexOf(otherCard2));
		
		if(otherCards.size() != 2) {
			otherCards.removeAll(otherCards);
			otherCards.add(-1);
			return otherCards;
		}
		
		return otherCards;
	}

    public ArrayList<Integer> isThreeSequenced(String [] hand){
		
		ArrayList <Integer> otherCards = new ArrayList<Integer>();
		
		
		LinkedList<String> type = new LinkedList<String>();
		
		
		//split the array into suit and type lists
		for(int i = 0; i < hand.length; i++) type.add(hand[i].substring(1));
		
				
		LinkedList<Integer> intType = new LinkedList<Integer>();
		
		//convert the string linked list to an int linked list
		for(int i = 0; i < type.size(); i ++) {
			if(type.get(i).equals("J")) intType.add(11);
			else if(type.get(i).equals("Q")) intType.add(12);
			else if(type.get(i).equals("K")) intType.add(13);
			else if(type.get(i).equals("A")) intType.add(14);
			else intType.add(Integer.parseInt(type.get(i)));
		}
		
		
		//our hand contains 3 of the following cards [2, 3] then ace has to be 1
		if(intType.contains(14)) {
			if(intType.contains(2) && intType.contains(3)) intType.set(intType.indexOf(14), 1);
		}
		
		Collections.sort(intType);
		
		if(intType.get(1) - intType.get(0) == 1 && intType.get(2) - intType.get(1) == 1) {
			
			String value1 = "";
			String value2 = "";
			
			if(intType.get(3) == 1) value1 = "A";
			else if(intType.get(3) == 11) value1 = "J";
			else if(intType.get(3) == 12) value1 = "Q";
			else if(intType.get(3) == 13) value1 = "K";
			else if(intType.get(3) == 14) value1 = "A";
			else value1 = new Integer(intType.get(3)).toString();
			
			if(intType.get(4) == 1) value2 = "A";
			else if(intType.get(4) == 11) value2 = "J";
			else if(intType.get(4) == 12) value2 = "Q";
			else if(intType.get(4) == 13) value2 = "K";
			else if(intType.get(4) == 14) value2 = "A";
			else value2 = new Integer(intType.get(4)).toString();
			
			otherCards.add(type.indexOf(value1));
			otherCards.add(type.indexOf(value2));
			
		}
		
		else if(intType.get(2) - intType.get(1) == 1 && intType.get(3) - intType.get(2) == 1) {
			
			String value1 = "";
			String value2 = "";
			
			if(intType.get(0) == 1) value1 = "A";
			else if(intType.get(0) == 11) value1 = "J";
			else if(intType.get(0) == 12) value1 = "Q";
			else if(intType.get(0) == 13) value1 = "K";
			else if(intType.get(0) == 14) value1 = "A";
			else value1 = new Integer(intType.get(0)).toString();
			
			if(intType.get(4) == 1) value2 = "A";
			else if(intType.get(4) == 11) value2 = "J";
			else if(intType.get(4) == 12) value2 = "Q";
			else if(intType.get(4) == 13) value2 = "K";
			else if(intType.get(4) == 14) value2 = "A";
			else value2 = new Integer(intType.get(4)).toString();
			
			otherCards.add(type.indexOf(value1));
			otherCards.add(type.indexOf(value2));
		}
		else if(intType.get(3) - intType.get(2) == 1 && intType.get(4) - intType.get(3) == 1) {
			
			String value1 = "";
			String value2 = "";
			
			if(intType.get(0) == 1) value1 = "A";
			else if(intType.get(0) == 11) value1 = "J";
			else if(intType.get(0) == 12) value1 = "Q";
			else if(intType.get(0) == 13) value1 = "K";
			else if(intType.get(0) == 14) value1 = "A";
			else value1 = new Integer(intType.get(0)).toString();
			
			if(intType.get(1) == 1) value2 = "A";
			else if(intType.get(1) == 11) value2 = "J";
			else if(intType.get(1) == 12) value2 = "Q";
			else if(intType.get(1) == 13) value2 = "K";
			else if(intType.get(1) == 14) value2 = "A";
			else value2 = new Integer(intType.get(1)).toString();
			
			otherCards.add(type.indexOf(value1));
			otherCards.add(type.indexOf(value2));
		}
		else {
			otherCards.add(-1);
		}
		return otherCards;
		
	}
    
    public ArrayList<Integer> isDistinctPair(String[] hand){
		
    	ArrayList<Integer> otherCards = new ArrayList<Integer> ();
		
		LinkedList<String> suit = new LinkedList<String>();
		
		for(int i = 0; i < hand.length; i++) {
			suit.add(hand[i].substring(1));
			//System.out.print(suit.get(i) + "\t");
		}
		
		int counter = 0;
		String tempType = "";
		boolean twoOfKind = false;
		//checks to see if there is a three of a kind
		//if there is it stores the card type
		for (int i = 0; i < suit.size(); i++) {
			
			for (int j = 0; j < suit.size(); j++) if(suit.get(i).equals(suit.get(j))) counter++;
			if(counter == 2) tempType = suit.get(i); 
			counter = 0;
		}
		
		String otherCard1 = "";
		String otherCard2 = "";
		String otherCard3 = "";
		
		for (int i = 0; i < suit.size(); i++) if(!suit.get(i).equals(tempType))otherCard1 = suit.get(i);
		for (int i = 0; i < suit.size(); i++) if((!suit.get(i).equals(tempType)) && (!suit.get(i).equals(otherCard1)))otherCard2 = suit.get(i);
		for (int i = 0; i < suit.size(); i++) if((!suit.get(i).equals(tempType)) && (!suit.get(i).equals(otherCard1) && (!suit.get(i).equals(otherCard2)))) otherCard3 = suit.get(i);
		
		otherCards.add(suit.indexOf(otherCard1));
		otherCards.add(suit.indexOf(otherCard2));
		otherCards.add(suit.indexOf(otherCard3));
		
		if(otherCards.size() != 3) {
			otherCards.removeAll(otherCards);
			otherCards.add(-1);
			return otherCards;
		}
		
		return otherCards;
		
	}
    
    public ArrayList<Integer> isHighCard(String[] hand){
		
		
		ArrayList<Integer> returnArray = new ArrayList<Integer>();
		
		LinkedList<String> type = new LinkedList<String>();
		LinkedList<Integer> intType = new LinkedList<Integer>();
		
		for(int i = 0; i < hand.length; i++) type.add(hand[i].substring(1)); 
		
		
		for(int i = 0; i < type.size(); i ++) {
			if(type.get(i).equals("J")) intType.add(11);
			else if(type.get(i).equals("Q")) intType.add(12);
			else if(type.get(i).equals("K")) intType.add(13);
			else if(type.get(i).equals("A")) intType.add(14);
			else intType.add(Integer.parseInt(type.get(i)));
		}
		
		
		//check to see if the Ace is 1 or 14
		if(intType.containsAll(SPECIAL_STRAIGHT)) {
			intType.set(intType.indexOf(14), 1);
			Collections.sort(intType);
		}
				
		//sort the numbers from lowest to highest
		Collections.sort(intType);
		
		String value1 = "";
		String value2 = "";
		String value3 = ""; 
		
		if(intType.get(0) == 1) value1 = "A";
		else if(intType.get(0) == 11) value1 = "J";
		else if(intType.get(0) == 12) value1 = "Q";
		else if(intType.get(0) == 13) value1 = "K";
		else if(intType.get(0) == 14) value1 = "A";
		else value1 = new Integer(intType.get(0)).toString();
		
		if(intType.get(1) == 1) value2 = "A";
		else if(intType.get(1) == 11) value2 = "J";
		else if(intType.get(1) == 12) value2 = "Q";
		else if(intType.get(1) == 13) value2 = "K";
		else if(intType.get(1) == 14) value2 = "A";
		else value2 = new Integer(intType.get(1)).toString();
		
		if(intType.get(2) == 1) value3 = "A";
		else if(intType.get(2) == 11) value3 = "J";
		else if(intType.get(2) == 12) value3 = "Q";
		else if(intType.get(2) == 13) value3 = "K";
		else if(intType.get(2) == 14) value3 = "A";
		else value3 = new Integer(intType.get(2)).toString();
		
		
		returnArray.add(type.indexOf(value1));
		returnArray.add(type.indexOf(value2));
		returnArray.add(type.indexOf(value3));
		
		if(returnArray.size() != 3) {
			returnArray.removeAll(returnArray);
			returnArray.add(-1);
			return returnArray;
		}
		
		return returnArray;
		
	}
    
    //Returns the score of a given Hand
    
    //GetScore method, returns the score of the hand
    
    //Get Score Function
    //used to determine the score of a hand
    public int getScore (String [] hand) {
		
		int handScore = 0;
		
		
		if(isRoyalFlush(hand)) {
			//System.out.println("Royal Flush!");
			//for(int i = 0; i < hand.length; i++) System.out.print(hand[i] + "\t");
			handScore += 90000000;
			handScore += getSuitScore(hand, 0);
		}
		else if(isStraightFlush(hand)) {
			//System.out.println("StraightFLush Flush!");
			//for(int i = 0; i < hand.length; i++) System.out.print(hand[i] + "\t");
			handScore += 80000000;
			handScore += getHighCardScore(hand);
			handScore += getSuitScore(hand, 0);
		}
		else if(isFourKind(hand)) {
			//System.out.println("Four of a kind!");
			//for(int i = 0; i < hand.length; i++) System.out.print(hand[i] + "\t");
			handScore += 70000000;
			handScore += getHighSequenceScore(hand, 4);
		}
		else if(isFullHouse(hand)) {
			//System.out.println("Full House!");
			//for(int i = 0; i < hand.length; i++) System.out.print(hand[i] + "\t");
			handScore += 60000000;
			handScore += getHighSequenceScore(hand, 3);
		}
		else if(isFlush(hand)) {
			//System.out.println("Flush!");
			//for(int i = 0; i < hand.length; i++) System.out.print(hand[i] + "\t");
			handScore += 50000000;
			handScore += getHighCardScore(hand);
			//System.out.println("High Card Score: " + getHighCardScore(hand));
			handScore += getSuitScore(hand, 0);
			//System.out.println("get suit score: " + getSuitScore(hand, 0));
		}
		else if(isStraight(hand)) {
			//System.out.println("Straight!");
			//for(int i = 0; i < hand.length; i++) System.out.print(hand[i] + "\t");
			handScore += 40000000;
			handScore += getHighCardScore(hand);
			//System.out.println("High Card Score: " + getHighCardScore(hand));
		}
		else if(isThreeKind(hand)) {
			//System.out.println("Three of a Kind!");
			//for(int i = 0; i < hand.length; i++) System.out.print(hand[i] + "\t");
			handScore += 30000000;
			handScore += getHighSequenceScore(hand, 3);
		}
		else if(isTwoPair(hand)) {
			//System.out.println("Two Pair!");
			//for(int i = 0; i < hand.length; i++) System.out.print(hand[i] + "\t");
			handScore += 20000000;
			handScore += twoPairScore(hand);
		}
		else if(isPair(hand)) {
			//System.out.println("Pair!");
			//for(int i = 0; i < hand.length; i++) System.out.print(hand[i] + "\t");
			handScore += 10000000;
			handScore += getHighSequenceScore(hand, 2);
			handScore += getSuitScore(hand, 0);
		}
		else{
			//System.out.println("High Card!");
			//for(int i = 0; i < hand.length; i++) System.out.print(hand[i] + "\t");
			handScore += handScore += getHighCardScore(hand);
		}
		
		
		return handScore;
	}
    
    //Acceptance Test Methods
    
    public String isStrategyNeeded(String [] hand) {
		
		if(isRoyalFlush(hand)) return "Royal Flush";
		else if(isStraightFlush(hand)) return "Straight Flush";
		else if(isFourKind(hand)) return "Four of a Kind";
		else if(isFullHouse(hand)) return "Full House";
		else if(isFlush(hand)) return "Flush";
		else if(isStraight(hand))return "Straight";
		else if(isThreeKind(hand)) return "Three of a Kind";
		else if(isTwoPair(hand)) return "Two Pair";
		else if(isPair(hand)) return "Pair";
		else return "High Card";
		
	}
    
    public int applyStrategy1(String [] hand) {
		
		if(isOneCardAwaySF(hand) != -1) {
			//System.out.println("isOneCardAwaySF");
			return isOneCardAwaySF(hand);
		}
		else if(isOneCardAwayStraight(hand) != -1) {
			//System.out.println("isOneCardAwayStraight");
			return isOneCardAwayStraight(hand);
		}
		else if(isOneCardAwayFlush(hand) != -1) {
			//System.out.println("isOneCardAwayFlush");
			return isOneCardAwayFlush(hand);
		}
		else if(isTwoDistinct(hand) != -1){
			//System.out.println("isTwoDistinct");
			return isOneCardAwayFlush(hand);
		}

		
		return -1;
	}
    
    public ArrayList<Integer> applyStrategy2(String [] hand){
		
		if(!isSameThreeRank(hand).contains(-1)) return isSameThreeRank(hand);
		else if(!isSameThreeSuit(hand).contains(-1)) return isSameThreeSuit(hand);
		else if(!isThreeSequenced(hand).contains(-1)) return isThreeSequenced(hand);
		else if(!isDistinctPair(hand).contains(-1)) return isDistinctPair(hand);
		else return isHighCard(hand);
		
		
	}
  
    
    //Helper Functions:
    
    //Helper functions

    
    public int isAceOneHelper(LinkedList<Integer> intType) {
		int counter = 0;
		
		if(intType.contains(2)) counter++;
		if(intType.contains(3)) counter++;
		if(intType.contains(4)) counter++;
		if(intType.contains(5)) counter++;
		
		
		return counter;
	}
    
    
    public int getHighSequenceScore(String [] hand , int repeat) {
		
		LinkedList<String> type = new LinkedList<String>();
		LinkedList<String> suit = new LinkedList<String>();
		
		for(int i = 0; i < hand.length; i++) {
			suit.add(hand[i].substring(0, 1));
			type.add(hand[i].substring(1));
			//System.out.print(type.get(i) + "\t");
		}
		
		int counter = 0;
		int score = 0;
		
		for (int i = 0; i < type.size(); i++) {
			
			for (int j = 0; j < type.size(); j++) if(type.get(i).equals(type.get(j))) counter++;
			
			if(counter == repeat) {
				if(type.get(i).equals("J")) score += 11;
				else if(type.get(i).equals("Q")) score += 12;
				else if(type.get(i).equals("K")) score += 13;
				else if(type.get(i).equals("A")) score += 14;
				else score += 100000 * Integer.parseInt(type.get(i));
				return score;
				
			}
			counter = 0;
			
		}
		
		return score;
	}
    

	public int twoPairScore(String [] hand) {
		
		LinkedList<String> type = new LinkedList<String>();
		
		for(int i = 0; i < hand.length; i++) {
			type .add(hand[i].substring(1));
			//System.out.print(type.get(i) + "\t");
		}
		
		
		//System.out.print("\n");
		
		int counter = 0;
		String tempType1 = "";
		String tempType2 = "";
		
		boolean twoOfKind1 = false;
		boolean twoOfKind2 = false;
		//checks to see if there is a three of a kind
		//if there is it stores the card type
		for (int i = 0; i < type.size(); i++) {
			
			for (int j = 0; j < type.size(); j++) if(type.get(i).equals(type.get(j))) counter++;
			
			if(counter > 2) return -1;
			
			if(counter == 2) { 
				if (!twoOfKind1) {
					tempType1 = type.get(i); 
					twoOfKind1 = true;
				}
					
			}
			counter = 0;
		}
		
		//checks to see if there is a two of a kind that is 
		//not the same as the previous equation
		
		for (int i = 0; i < type.size(); i++) {
			
			for(int j = 0; j < type.size(); j++) if(type.get(i).equals(type.get(j)) && (!type.get(i).equals(tempType1))) counter++;
			
			if(counter > 2) return -1;
			
			if(counter == 2) { 
				if (!twoOfKind2) {
					tempType2 = type.get(i); 
					twoOfKind2 = true;
				}
				
			}
			counter = 0;
		}
		
		String oddCard = "";
		
		int pairScore1 = 0;
		int pairScore2 = 0;
		int oddCardScore = 0;
		
		
		for(int i = 0; i < type.size(); i++)
			if( !(type.get(i).equals(tempType1)) && !(type.get(i).equals(tempType2))) oddCard = type.get(i);
		
		if(oddCard.equals(""))return -1;
		
		
		if(tempType1.equals("J")) pairScore1 += 11;
		else if(tempType1.equals("Q")) pairScore1 += 12;
		else if(tempType1.equals("K")) pairScore1 += 13;
		else if(tempType1.equals("A")) pairScore1 += 14;
		else pairScore1 += Integer.parseInt(tempType1);
		
		
		if(tempType2.equals("J")) pairScore2 += 11;
		else if(tempType2.equals("Q")) pairScore2 += 12;
		else if(tempType2.equals("K")) pairScore2 += 13;
		else if(tempType2.equals("A")) pairScore2 += 14;
		else pairScore2 += Integer.parseInt(tempType2);
		
		if(oddCard.equals("J")) oddCardScore  += 11;
		else if(oddCard.equals("Q")) oddCardScore  += 12;
		else if(oddCard.equals("K")) oddCardScore  += 13;
		else if(oddCard.equals("A")) oddCardScore  += 14;
		else oddCardScore += Integer.parseInt(oddCard);
		
		if(pairScore1 > pairScore2) return 100000 * pairScore1 + 1000 * pairScore2 + 10 * oddCardScore + getSuitScore(hand, type.indexOf(oddCard));
		else return 100000 * pairScore2 + 1000 * pairScore1 + 10 * oddCardScore + getSuitScore(hand, type.indexOf(oddCard));
		
		
	}
		

	public int getHighCardScore(String [] hand) {
		
		LinkedList<String> type = new LinkedList<String>();
		LinkedList<Integer> intType = new LinkedList<Integer>();
		
		for(int i = 0; i < hand.length; i++) type.add(hand[i].substring(1)); 
		
		
		for(int i = 0; i < type.size(); i ++) {
			if(type.get(i).equals("J")) intType.add(11);
			else if(type.get(i).equals("Q")) intType.add(12);
			else if(type.get(i).equals("K")) intType.add(13);
			else if(type.get(i).equals("A")) intType.add(14);
			else intType.add(Integer.parseInt(type.get(i)));
		}
		
		
		//check to see if the Ace is 1 or 14
		if(intType.containsAll(SPECIAL_STRAIGHT)) {
			intType.set(intType.indexOf(14), 1);
			Collections.sort(intType);
		}
				
		//sort the numbers from lowest to highest
		Collections.sort(intType);
		
		int highCard = intType.get(intType.size() - 1);
		String tempType = "";
		
		if(highCard == 1) tempType = "A";
		else if(highCard == 11) tempType = "J";
		else if(highCard == 12) tempType = "Q";
		else if(highCard == 13) tempType = "K";
		else if(highCard == 14) tempType = "A";
		else tempType = new Integer(highCard).toString();
		
		
		
		return 100000 * highCard + getSuitScore(hand, type.indexOf(tempType));
		
	}
	
	
	public int getSuitScore(String [] hand, int index) {
		
		LinkedList<String> suit = new LinkedList<String>();
		
		for(int i = 0; i < hand.length; i++) {
			suit.add(hand[i].substring(0, 1));
			//System.out.print(type.get(i) + "\t");
		}
		
		if(suit.get(index).equals("C")) return 1;
		else if(suit.get(index).equals("D")) return 2;
		else if(suit.get(index).equals("H")) return 3;
		else if(suit.get(index).equals("S")) return 4;
		
		return 0;
	}
    
    

}
