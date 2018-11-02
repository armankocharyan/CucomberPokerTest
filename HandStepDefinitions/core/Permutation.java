package core;

public class Permutation {
	
	public static final int ROYAL_FLUSH = 9;
	public static final int STRAIGHT_FLUSH = 8; 
	public static final int FOUR_OF_KIND = 7; 
	public static final int FULL_HOUSE = 6; 
	public static final int FLUSH = 5; 
	public static final int STRAIGHT = 4; 
	public static final int THREE_OF_KIND = 3; 
	public static final int TWO_PAIR = 2; 
	public static final int PAIR = 1; 
	
	
	private static int counter = 0;
	
	public static void resetCounter() {counter = 0;}
	
	public static void permuteEachHand(String[] arr, int hand){
		permuteEachHandHelper(arr, 0, hand);
	}
	
	public static int getCounter() {return counter;};

	private static void permuteEachHandHelper(String[] arr, int index, int hand){
		
		
		PokerStrategy strategy = new PokerStrategy();
	    if(index >= arr.length - 1){ 
	    	
	    	if(hand == ROYAL_FLUSH) {if(strategy.isRoyalFlush(arr)) counter++;}
	    	else if(hand == STRAIGHT_FLUSH) {if(strategy.isStraightFlush(arr)) counter++;}
	    	else if(hand == FOUR_OF_KIND) {if(strategy.isFourKind(arr)) counter++;}
	    	else if(hand == FULL_HOUSE) {if(strategy.isFullHouse(arr)) counter++;}
	    	else if(hand == FLUSH) {if(strategy.isFlush(arr)) counter++;}
	    	else if(hand == STRAIGHT) {if(strategy.isStraight(arr)) counter++;}
	    	else if(hand == THREE_OF_KIND) {if(strategy.isThreeKind(arr)) counter++;}
	    	else if(hand == TWO_PAIR) {if(strategy.isTwoPair(arr)) counter++;}
	    	else if(hand == PAIR) {if(strategy.isPair(arr)) counter++;}
	    	
	    	return;
	    }

	    for(int i = index; i < arr.length; i++){ 
	    	
	        String t = arr[index];
	        arr[index] = arr[i];
	        arr[i] = t;

	        permuteEachHandHelper(arr, index+1, hand);

	        t = arr[index];
	        arr[index] = arr[i];
	        arr[i] = t;
	    }
	   
	}

}
