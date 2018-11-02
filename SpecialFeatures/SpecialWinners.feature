#The step definitions for the features below are in SpecialWinnerStepDefinitions source folder
#This feature tests for winners between AIP and HTP in multiple scenarios
#AIP hand is passed in the "Given" Stepand HTB hand are passed in the "And" step for each scenario 

#The functions test the int getScore() method in the PokerStrategy, where the function returns a score for each hand
#Logically the stronger is the player hand the higher should be the returned score

#Definitios use Assert.assertEquals Junit function to compare scores between poker hands

#The scenarios in this feature cover lines 123 to 149 on the correction Grid


Feature: Determining winners on special hands for AIP and HTB

  Scenario: AIP and HTB both have a Royal FLush but AIP wins because it has a higher suit
    Given AIP has a spades Royal Flush
      | S10 | SK | SQ | SJ | SA |
    And HTB has a hearts Royal Flush
      | H10 | HJ | HQ | HK | HA |
    Then AIP should win because spades is the higher suit
    
  Scenario: AIP and HTB both have a Straight FLush but AIP wins because it has a higher card
    Given AIP has a hearts Straight Flush with a high card
      | H10 | H9 | H8 | H7 | H6 |
    And HTB has a spades Straight Flush with a low card
      | S9  | S8 | S7 | S6 | S5 |
    Then AIP should win because it has the higher high card
    
  Scenario: AIP and HTB both have a Straight FLush but AIP wins because it has a higher suit
    Given AIP has a spades Straight Flush
      | S10 | S9 | S8 | S7 | S6 |
    And HTB has a hearts Straight Flush
      | H10 | H9 | H8 | H7 | H6 |
    Then AIP should win because spades SF is higher
    
  Scenario: AIP and HTB both have a Four of a kind but AIP wins because it has the higher quadruplet
    Given AIP has a four of a kind with a high quadruplet
      | S10 | D10 | H10 | C10 | S6 |
    And HTB has a four of a kind with a low quadruplet
      | H9  | C9  | D9  | S9  | H6 |
    Then AIP should win because it has the higher quadruplet
    
    Scenario: AIP and HTB both have a Full House but AIP wins because it has the higher triplet
    Given AIP has a full house with a high triplet
      | S10 | D10 | H10 | C6 | S6 |
    And HTB has a full house with a low triplet
      | H9  | C9  | D9  | D6  | H6 |
    Then AIP should win because it has the higher fullhouse triplet
    
    Scenario: AIP and HTB both have a Three of a kind but AIP wins because it has the higher triplet
    Given AIP has a three of a kind with a high triplet
      | S10 | D10 | H10 | C6 | S7 |
    And HTB has a three of a kind with a low triplet
      | H9  | C9  | D9  | D7  | H6 |
    Then AIP should win because it has the higher three of a kind triplet
    
    Scenario: AIP and HTB both have a Straight but AIP wins because it has the higher high card
    Given AIP has a straight with a high card
      | S10 | H9 | C8 | S6 | D7 |
    And HTB has a straight with a low card
      | H9  | C8  | D6  | C7  | H5 |
    Then AIP should win because it has the higher high card Straight
    
    Scenario: AIP and HTB both have a Straight but AIP wins because it has the higher high card
    Given AIP has a straight with a high card
      | S10 | H9 | C8 | S6 | D7 |
    And HTB has a straight with a low card
      | H9  | C8  | D6  | C7  | H5 |
    Then AIP should win because it has the higher high card Straight
    
    Scenario: AIP and HTB both have a Straight but AIP wins because it has the higher suit high card
    Given AIP has a straight with a high suit card
      | S9 | H8 | C6 | S7 | D5 |
    And HTB has a straight with a low suit card
      | H9  | C8  | D6  | C7  | H5 |
    Then AIP should win because it has the higher suit high card Straight
    
    Scenario: AIP and HTB both have a  the same two pair, AIP wins because it has the higher suit
    Given AIP has a two pair with high suit pair
      | S9 | H9 | C10 | S7 | D7 |
    And HTB has a two pair with low suit pair
      | H9  | C9  | D6  | C7  | H7 |
    Then AIP should win because it has the higher suit high pair
    
    Scenario: AIP and HTB have a  distinct two pairs, AIP wins because it has the higher rank pair
    Given AIP has a two pair with high rank pair
      | S9 | H9 | C10 | S7 | D7 |
    And HTB has a two pair with low rank pair
      | H8  | C8  | D6  | C6  | H7 |
    Then AIP should win because it has the higher rank high pair
    
    Scenario: AIP and HTB have a the same rank pairs, AIP wins because it has the higher suit pair
    Given AIP has a pair with a higher suit pair
      | S9 | H9 | C2 | S3 | D6 |
    And HTB has a two pair with a lower suit pair
      | H9  | C9  | D2  | C6  | H7 |
    Then AIP should win because it has the higher suit among the two pairs
    
    Scenario: AIP and HTB both have a high card of the same rank, AIP wins because his card has a higher suit
    Given AIP has a high card with a high suit
      | S9 | H4 | C2 | S3 | D6 |
    And HTB has a high card with a low suit
      | H9 | C4  | D2  | C6  | H7 |
    Then AIP should win because it has the higher suit card
    
    Scenario: AIP and HTB both have a high card, AIP wins because his card has a higher rank
    Given AIP has a high card with a high rank
      | H10 | H4 | C2 | S3 | D6 |
    And HTB has a high card with a low rank
      | S9 | C4  | D2  | C6  | H7 |
    Then AIP should win because it has the higher rank card
    
    Scenario: AIP and HTB both have a flush, AIP wins because his flush has a higher high card
    Given AIP has a high card flush
      | S10 | S8 | S6 | S4 | S3 |
    And HTB has a low card flush
      | H10 | H8 | H6 | H4 | H2 |
    Then AIP should win because it has the higher high card flush
    
    Scenario: AIP and HTB both have a flush, AIP wins because his flush has a higher suit, case one
    Given AIP has a higher suit flush case one
      | S10 | S4 | S2 | S3 | S6 |
    And HTB has a lower suit flush case one
      | H10 | H4 | H2 | H3 | H6 |
    Then AIP should win because it has the higher suit flush case one
    
    Scenario: AIP and HTB both have a flush, AIP wins because his flush has a higher suit, case two
    Given AIP has a higher suit flush case two
      | S10 | S8 | S6 | S4 | S3 |
    And HTB has a lower suit flush case two
      | H10 | H8 | H6 | H3 | H2 |
    Then AIP should win because it has the higher suit flush case two
    
    Scenario: AIP and HTB both have a flush, AIP wins because his flush has a higher suit, case two
    Given AIP has a higher suit flush case three
      | S10 | S8 | S6 | S4 | S3 |
    And HTB has a lower suit flush case three
      | H10 | H8 | H5 | H3 | H2 |
    Then AIP should win because it has the higher suit flush case three
    
    Scenario: AIP and HTB both have a flush, AIP wins because his flush has a higher suit, case two
    Given AIP has a higher suit flush case four
      | S10 | S8 | S6 | S4 | S3 |
    And HTB has a lower suit flush case four
      | H10 | H7 | H5 | H3 | H2 |
    Then AIP should win because it has the higher suit flush case four