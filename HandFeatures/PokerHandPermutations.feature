#The step definitions for the features below are in SpecialWinnerStepDefinitions source folder
#This feature tests the winner for special hands

#Testers test the getScore function in the src/main/java source folder

#Definitios use Assert.assertEquals Junit function to see if all to compare the score of each hand against each other
#The scenarios in this feature cover lines 123 to 149 on the correction Grid

Feature: Test recognize all nine poker hands with all possible card permutations

  Scenario: A royal flush hand should pass for isRoyalFlush test in any order
    Given A royal flush poker hand in any order
      | SA | SK | SQ | SJ | S10 |
    Then I should get true for royal flush in any poker hand permutation

  Scenario: A straight flush hand should pass for isStraightFlush test in any order
    Given A straight flush poker hand in any order
      | S5 | S6 | S7 | S8 | S9 |
    Then I should get true for straight flush in any poker hand permutation
    
  Scenario: A four of a kind poker hand should pass for isFourKind test in any order
    Given A four of a kind poker hand in any order
      | S5 | H5 | C5 | D5 | S9 |
    Then I should get true for four of a kind in any poker hand permutation
    
  Scenario: A full house hand should pass for isFullHouse test in any order
    Given A full house poker hand in any order
      | H8 | C8 | S8 | DA | SA |
    Then I should get true for full house in any poker hand permutation
    
  Scenario: A flush hand should pass for isFlush test in any order
    Given A flush poker hand in any order
      | S6 | S3 | S8 | SJ | SA |
    Then I should get true for flush in any poker hand permutation
  
  Scenario: A straight hand should pass for isStraight test in any order
    Given A straight poker hand in any order
      | H5 | S6 | D7 | S8 | C9 |
    Then I should get true for straight in any poker hand permutation
    
  Scenario: A three of a kind poker hand should pass for isThreeKind test in any order
    Given A three of a kind poker hand in any order
      | H5 | S6 | D8 | H6 | C6 |
    Then I should get true for three of a kind in any poker hand permutation
    
  Scenario: A two pair of a poker hand should pass for isTwoPair test in any order
    Given A two pair poker hand in any order
      | H5 | S5 | D8 | H6 | C6 |
    Then I should get true for two pair in any poker hand permutation
    
  Scenario: A pair of a poker hand should pass for isPair test in any order
    Given A pair poker hand in any order
      | H5 | S5 | D8 | H6 | C6 |
    Then I should get true for pair in any poker hand permutation