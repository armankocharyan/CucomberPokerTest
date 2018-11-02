#The step definitions for the features below are in StrategyStepDefinitions source folder
#This feature tests if AIP exchanges the odd cards and checks the outcome after the exchange
#AIP hand is passed in the "Given" Step
#HTB hand(s) is passed in the first "And" Step


#The testers test the int getScore() method in the PokerStrategy, where the function returns a score for each hand
#Logically the stronger is the player hand the higher should be the returned score

#The testers test the various strategy methods in the PokerStrategy, to test if AIP returns indices of odd card(s)

#Steps use Assert.assertEquals Junit function to compare scores between poker hands and String returns

#The scenarios in this feature cover lines 105 to 120 on the correction Grid



Feature: AIP exchanges card/cards to play HTP

#_SF stands for straight flush
#_RF stands for royal flush
#L is for loss W is for win
  Scenario: AIP exchanges one card to make a Royal Flush and wins the game
    Given AIP is one card away from a Royal Flush W
      | S6 | SK | SQ | SJ | SA |
    And HTB_SF is given a Straight Flush L
      | H6 | H7 | H8 | H9 | H10 |
    Then AIP_RF exchanges the odd Card with the right card "S10"
    Then AIP_RF should win the game

#_SF stands for straight flush
#_RF stands for royal flush
#L is for loss W is for win
  Scenario: AIP exchanges one card to make a Royal Flush and loses the game
    Given AIP is one card away from a Royal Flush L
      | S6 | SK | SQ | SJ | SA |
    And HTB_SF is given a Straight Flush W
      | H6 | H7 | H8 | H9 | H10 |
    Then AIP_RF exchanges the odd Card with another card "H2"
    Then AIP_RF should lose the game

#_FK stands for four of kind
#_SF stands for straight flush
#L is for loss W is for win
  Scenario: AIP exchanges one card to make a Straight Flush and wins the game
    Given AIP is one card away from a Straight Flush W
      | S2 | S8 | S9 | SJ | S10 |
    And HTB_FK is given a Four of a Kind L
      | H6 | S6 | D6 | C6 | H10 |
    Then AIP_SF exchanges the odd Card with the right card "S7"
    Then AIP_SF should win the game

#_FK stands for four of kind
#_SF stands for straight flush
#L is for loss W is for win
  Scenario: AIP exchanges one card to make a Straight Flush and loses the game
    Given AIP is one card away from a Straight Flush L
      | S2 | S8 | S9 | SJ | S10 |
    And HTB_FK is given a Four of a Kind W
      | H6 | S6 | D6 | C6 | H10 |
    Then AIP_SF exchanges the odd Card with another card "H2"
    Then AIP_SF should lose the game

#_F stands for flush
#_FH stands for full house
#L is for loss W is for win
  Scenario: AIP exchanges lowest odd card to make it a Full House and wins the game
    Given AIP is one card away from a Full House W
      | C2 | H9 | CJ | SJ | DJ |
    And HTB_F is given a Flush L
      | H8 | HA | H2 | H5 | H10 |
    Then AIP_FH exchanges the odd Card with the right card "D9"
    Then AIP_FH should win the game

#_F stands for flush
#_FH stands for full house
#L is for loss W is for win
  Scenario: AIP exchanges lowest odd card to make it a Full House and loses the game
    Given AIP is one card away from a Full House L
      | C2 | H9 | CJ | SJ | DJ |
    And HTB_F is given a Flush W
      | H8 | HA | H2 | H5 | H10 |
    Then AIP_FH exchanges the odd Card with another card "H2"
    Then AIP_FH should lose the game

#_TP stands for two pair
#_FH stands for full house
#L is for loss W is for win
  Scenario: AIP exchanges odd card of a two pair to make it a Full House and wins the game
    Given AIP has a two pair W
      | C9 | H9 | C3 | SJ | DJ |
    And HTB_F_TP is given a Flush L
      | H8 | HA | H2 | H5 | H10 |
    Then AIP_FH_TP exchanges the odd Card of the two pair with the right card "CJ"
    Then AIP_FH_TP should win the game

#_F stands for flush
#_TP stands for two pair
#_FH stands for full house
#L is for loss W is for win
  Scenario: AIP exchanges odd card of a two pair to make it a Full House and wins the game
    Given AIP has a two pair W
      | C9 | H9 | C3 | SJ | DJ |
    And HTB_F_TP is given a Flush L
      | H8 | HA | H2 | H5 | H10 |
    Then AIP_FH_TP exchanges the odd Card of the two pair with the right card "CJ"
    Then AIP_FH_TP should win the game

#_F stands for flush
#_TP stands for two pair
#_FH stands for full house
#L is for loss W is for win
  Scenario: AIP exchanges odd card of a two pair to make it a Full House and loses the game
    Given AIP has a two pair L
      | C9 | H9 | C3 | SJ | DJ |
    And HTB_F_TP is given a Flush W
      | H8 | HA | H2 | H5 | H10 |
    Then AIP_FH_TP exchanges the odd Card of the two pair with another card "CK"
    Then AIP_FH_TP should lose the game

#_S stands for straight
#_F stands for flush
#L is for loss W is for win
  Scenario: AIP exchanges card to get a flush and wins the game
    Given AIP is one card away from Flush W
      | H8 | HA | C2 | H5 | H10 |
    And HTB_S is given a Straight L
      | C8 | S9 | H10 | DQ | CJ |
    Then AIP_F exchanges the odd card to with "H6"
    Then AIP_F should win the game
    
#_S stands for straight
#_F stands for flush
#L is for loss W is for win
  Scenario: AIP exchanges card to get a flush and loses the game
    Given AIP is one card away from Flush L
      | H8 | HA | C2 | H5 | H10 |
    And HTB_S is given a Straight W
      | C8 | S9 | H10 | DQ | CJ |
    Then AIP_F exchanges the odd card to with another card "D6"
    Then AIP_F should lose the game

#_S stands for straight
#_F stands for flush
#L is for loss W is for win
  Scenario: AIP exchanges card to get a straight and wins the game
    Given AIP is one card away from Straight W
      | C8 | S9 | H10 | DQ | C3 |
    And HTB_T is given a Three of a kind L
      | C9 | H9 | C3 | SJ | D9 |
    Then AIP_S exchanges the odd card to with "CJ"
    Then AIP_S should win the game
    
#_S stands for straight
#_T stands for Three of a kind
#L is for loss W is for win
  Scenario: AIP exchanges card to get a straight and loses the game
    Given AIP is one card away from Straight L
      | C8 | S9 | H10 | DQ | C3 |
    And HTB_T is given a Three of a kind W
      | C9 | H9 | C3 | SJ | D9 |
    Then AIP_S exchanges the odd card to with another card "C2"
    Then AIP_S should lose the game

#_S stands for straight
#L is for loss W is for win
  Scenario: AIP has three cards of the same suit and exchanges other two
    Given AIP is given a hand with three cards with the same suit
      | C8 | C9 | HA | DQ | C3 |
    Then AIP_S exchanges the odd cards with two cards "C10 CA"
    Then AIP_S should have a new hand with those two added cards
      | C8 | C9 | C10 | CA | C3 |

#_R stands for rank
#L is for loss W is for win
  Scenario: AIP has three cards of the same rank and exchanges other two
    Given AIP is given a hand with three cards with the same rank
      | H9 | C9 | S9 | DQ | C3 |
    Then AIP_R exchanges the odd cards with two new cards "D9 C10"
    Then AIP_R should have a new hand with those two added cards
      | H9 | C9 | S9 | D9 | C10 |

#_P stands for pair
#L is for loss W is for win
  Scenario: AIP has a pair and it exchanges the three other cards
    Given AIP is given a hand with a pair and three random cards
      | H9 | C9 | S2 | DQ | C3 |
    Then AIP_P exchanges the odd cards with three new cards "D9 S9 H10"
    Then AIP_P should have a new hand with those three added cards
      | H9 | C9 | D9 | S9 | H10 |

#_H stands for high card
#L is for loss W is for win
  Scenario: AIP has keeps two high cards and exchanges the other three
    Given AIP is given five random cards
      | H9 | C5 | S2 | DQ | C3 |
    Then AIP_H exchanges the three low cards with new cards "D10 S10 H10"
    Then AIP_H should have a new hand with those three added cards
      | H9 | D10 | S10 | DQ | H10 |
