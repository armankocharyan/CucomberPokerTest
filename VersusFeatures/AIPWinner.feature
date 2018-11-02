#The step definitions for the features below are in AIPWinningStepDefinitions source folder
#This feature tests if AIP holds and beats HTB in multiple scenarios
#AIP hand is passed in the "Given" Step
#AIP hand is held in the first "And" Step
#HTB hand(s) is passed in the second "And" Step


#The testers test the int getScore() method in the PokerStrategy, where the function returns a score for each hand
#Logically the stronger is the player hand the higher should be the returned score

#The testers test the String isStrategyNeeded() method in the PokerStrategy, to test if AIP holds the cards
#isStrategyNeeded() returns the name of the given poker hand if strategy is not needed

#Steps use Assert.assertEquals Junit function to compare scores between poker hands and String returns

#The scenarios in this feature cover lines 65 to 103 on the correction Grid



Feature: AIP plays against HTB

  Scenario: AIP has a Royal flush and plays against HTB
    Given AIP is given a Royal Flush
      | S10 | SJ | SQ | SK | SA |
    And AIP Holds Royal Flush
    And HTB is given all the other lower nine hands 
      | D10 | D9  | D8  | D7  | D6 |
      | D10 | H10 | C10 | S10 | D6 |
      | D10 | H10 | C10 | D7  | S7 |
      | D2  | D9  | D10 | D7  | DK |
      | H10 | D9  | C8  | D7  | S6 |
      | D10 | C10 | S10 | D7  | D6 |
      | D10 | C10 | SA  | D7  | S7 |
      | D10 | C10 | SK  | D7  | D6 |
      | DA  | C2  | SK  | D7  | D6 |
    Then AIP should win all the nine games
    
    Scenario: AIP has a Straight flush and plays against HTB
    Given AIP is given a Straight Flush
      | D10 | D9  | D8  | D7  | D6 |
    And AIP Holds Straight Flush
    And HTB is given all the other lower eight hands 
      | D10 | H10 | C10 | S10 | D6 |
      | D10 | H10 | C10 | D7  | S7 |
      | D2  | D9  | D10 | D7  | DK |
      | H10 | D9  | C8  | D7  | S6 |
      | D10 | C10 | S10 | D7  | D6 |
      | D10 | C10 | SA  | D7  | S7 |
      | D10 | C10 | SK  | D7  | D6 |
      | DA  | C2  | SK  | D7  | D6 |
    Then AIP should win all the eight games
    
    Scenario: AIP has a Four of a Kind and plays against HTB
    Given AIP is given a Four of Kind
      | D10 | H10 | C10 | S10 | D6 |
    And AIP Holds Four of a Kind
    And HTB is given all the other lower seven hands 
      | D10 | H10 | C10 | D7  | S7 |
      | D2  | D9  | D10 | D7  | DK |
      | H10 | D9  | C8  | D7  | S6 |
      | D10 | C10 | S10 | D7  | D6 |
      | D10 | C10 | SA  | D7  | S7 |
      | D10 | C10 | SK  | D7  | D6 |
      | DA  | C2  | SK  | D7  | D6 |
    Then AIP should win all the seven games
    
    Scenario: AIP has a Full House and plays against HTB
    Given AIP is given a Full House
      | D10 | H10 | C10 | D7  | S7 |
    And AIP Holds a Full House
    And HTB is given all the other lower six hands 
      | D2  | D9  | D10 | D7  | DK |
      | H10 | D9  | C8  | D7  | S6 |
      | D10 | C10 | S10 | D7  | D6 |
      | D10 | C10 | SA  | D7  | S7 |
      | D10 | C10 | SK  | D7  | D6 |
      | DA  | C2  | SK  | D7  | D6 |
    Then AIP should win all the six games
    
    Scenario: AIP has a Flush and plays against HTB
    Given AIP is given a Flush
      | D2  | D9  | D10 | D7  | DK |
    And AIP Holds a Flush
    And HTB is given all the other lower five hands 
      | H10 | D9  | C8  | D7  | S6 |
      | D10 | C10 | S10 | D7  | D6 |
      | D10 | C10 | SA  | D7  | S7 |
      | D10 | C10 | SK  | D7  | D6 |
      | DA  | C2  | SK  | D7  | D6 |
    Then AIP should win all the five games
    
    Scenario: AIP has a Straight and plays against HTB
    Given AIP is given a Straight
      | H10 | D9  | C8  | D7  | S6 |
    And HTB is given all the other lower four hands 
      | D10 | C10 | S10 | D7  | D6 |
      | D10 | C10 | SA  | D7  | S7 |
      | D10 | C10 | SK  | D7  | D6 |
      | DA  | C2  | SK  | D7  | D6 |
    Then AIP should win all the four games
    
    Scenario: AIP has a Three of a kind and plays against HTB
    Given AIP is given a Three of a kind
      | D10 | C10 | S10 | D7  | D6 |
    And HTB is given all the other lower three hands 
      | D10 | C10 | SA  | D7  | S7 |
      | D10 | C10 | SK  | D7  | D6 |
      | DA  | C2  | SK  | D7  | D6 |
    Then AIP should win all the three games
    
    Scenario: AIP has a Two pair and plays against HTB
    Given AIP is given a Two Pair
      | D10 | C10 | SA  | D7  | S7 |
    And HTB is given all the other lower two hands 
      | D10 | C10 | SK  | D7  | D6 |
      | DA  | C2  | SK  | D7  | D6 |
    Then AIP should win all the two games
    
    Scenario: AIP has a pair and plays against HTB
    Given AIP is given a Pair
      | D10 | C10 | SK  | D7  | D6 |
    And HTB has a high card 
      | DA  | C2  | SK  | D7  | D6 |
    Then AIP should win the game
    