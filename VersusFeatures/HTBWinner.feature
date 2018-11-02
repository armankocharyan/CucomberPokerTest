#The step definitions for the features below are in HTBWinningStepDefinitions source folder
#This feature tests if HTB beats AIP in multiple scenarios
#HTB hand is passed in the "Given" Stepand AIP hand(s) are passed in the "And" step for each scenario 

#The functions test the int getScore() method in the PokerStrategy, where the function returns a score for each hand
#Logically the stronger is the player hand the higher should be the returned score

#Definitios use Assert.assertEquals Junit function to compare scores between poker hands

#The scenarios in this feature cover lines 19 to 63 on the correction Grid


Feature: HTB plays against AIP

  Scenario: HTB has a Royal flush and plays against AIP
    Given HTB is given a Royal Flush
      | S10 | SJ | SQ | SK | SA |
    And AIP is given all the other lower nine hands 
      | D10 | D9  | D8  | D7  | D6 |
      | D10 | H10 | C10 | S10 | D6 |
      | D10 | H10 | C10 | D7  | S7 |
      | D2  | D9  | D10 | D7  | DK |
      | H10 | D9  | C8  | D7  | S6 |
      | D10 | C10 | S10 | D7  | D6 |
      | D10 | C10 | SA  | D7  | S7 |
      | D10 | C10 | SK  | D7  | D6 |
      | DA  | C2  | SK  | D7  | D6 |
    Then HTB should win all the nine games
    
    Scenario: HTP has a Straight flush and plays against AIP
    Given HTB is given a Straight Flush
      | D10 | D9  | D8  | D7  | D6 |
    And AIP is given all the other lower eight hands 
      | D10 | H10 | C10 | S10 | D6 |
      | D10 | H10 | C10 | D7  | S7 |
      | D2  | D9  | D10 | D7  | DK |
      | H10 | D9  | C8  | D7  | S6 |
      | D10 | C10 | S10 | D7  | D6 |
      | D10 | C10 | SA  | D7  | S7 |
      | D10 | C10 | SK  | D7  | D6 |
      | DA  | C2  | SK  | D7  | D6 |
    Then HTB should win all the eight games
    
    Scenario: HTP has a Four of a Kind and plays against AIP
    Given HTB is given a Four of Kind
      | D10 | H10 | C10 | S10 | D6 |
    And AIP is given all the other lower seven hands 
      | D10 | H10 | C10 | D7  | S7 |
      | D2  | D9  | D10 | D7  | DK |
      | H10 | D9  | C8  | D7  | S6 |
      | D10 | C10 | S10 | D7  | D6 |
      | D10 | C10 | SA  | D7  | S7 |
      | D10 | C10 | SK  | D7  | D6 |
      | DA  | C2  | SK  | D7  | D6 |
    Then HTB should win all the seven games
    
    Scenario: HTP has a Full House and plays against AIP
    Given HTB is given a Full House
      | D10 | H10 | C10 | D7  | S7 |
    And AIP is given all the other lower six hands 
      | D2  | D9  | D10 | D7  | DK |
      | H10 | D9  | C8  | D7  | S6 |
      | D10 | C10 | S10 | D7  | D6 |
      | D10 | C10 | SA  | D7  | S7 |
      | D10 | C10 | SK  | D7  | D6 |
      | DA  | C2  | SK  | D7  | D6 |
    Then HTB should win all the six games
    
    Scenario: HTP has a Flush and plays against AIP
    Given HTB is given a Flush
      | D2  | D9  | D10 | D7  | DK |
    And AIP is given all the other lower five hands 
      | H10 | D9  | C8  | D7  | S6 |
      | D10 | C10 | S10 | D7  | D6 |
      | D10 | C10 | SA  | D7  | S7 |
      | D10 | C10 | SK  | D7  | D6 |
      | DA  | C2  | SK  | D7  | D6 |
    Then HTB should win all the five games
    
    Scenario: HTB has a Straight and plays against AIP
    Given HTB is given a Straight
      | H10 | D9  | C8  | D7  | S6 |
    And AIP is given all the other lower four hands 
      | D10 | C10 | S10 | D7  | D6 |
      | D10 | C10 | SA  | D7  | S7 |
      | D10 | C10 | SK  | D7  | D6 |
      | DA  | C2  | SK  | D7  | D6 |
    Then HTB should win all the four games
    
    Scenario: HTB has a Three of a kind and plays against AIP
    Given HTB is given a Three of a kind
      | D10 | C10 | S10 | D7  | D6 |
    And AIP is given all the other lower three hands 
      | D10 | C10 | SA  | D7  | S7 |
      | D10 | C10 | SK  | D7  | D6 |
      | DA  | C2  | SK  | D7  | D6 |
    Then HTB should win all the three games
    
    Scenario: HTB has a Two pair and plays against AIP
    Given HTB is given a Two Pair
      | D10 | C10 | SA  | D7  | S7 |
    And AIP is given all the other lower two hands 
      | D10 | C10 | SK  | D7  | D6 |
      | DA  | C2  | SK  | D7  | D6 |
    Then HTB should win all the two games
    
    Scenario: HTB has a pair and plays against AIP
    Given HTB is given a Pair
      | D10 | C10 | SK  | D7  | D6 |
    And AIP has a high card 
      | DA  | C2  | SK  | D7  | D6 |
    Then HTB should win the game
    
   
