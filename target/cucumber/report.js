$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AIPStrategy.feature");
formatter.feature({
  "line": 1,
  "name": "AIP exchanges card/cards to play HTP",
  "description": "",
  "id": "aip-exchanges-card/cards-to-play-htp",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "AIP exchanges one card to make a Royal Flush and wins the game",
  "description": "",
  "id": "aip-exchanges-card/cards-to-play-htp;aip-exchanges-one-card-to-make-a-royal-flush-and-wins-the-game",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "AIP is one card away from a Royal Flush W",
  "rows": [
    {
      "cells": [
        "S6",
        "SK",
        "SQ",
        "SJ",
        "SA"
      ],
      "line": 5
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "HTB_SF is given a Straight Flush L",
  "rows": [
    {
      "cells": [
        "H6",
        "H7",
        "H8",
        "H9",
        "H10"
      ],
      "line": 7
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "AIP_RF exchanges the odd Card with the right card \"S10\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "AIP_RF should win the game",
  "keyword": "Then "
});
formatter.match({
  "location": "OneCardAwayRFW.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 121643800,
  "status": "passed"
});
formatter.match({
  "location": "OneCardAwayRFW.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 54200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S10",
      "offset": 51
    }
  ],
  "location": "OneCardAwayRFW.cardExchangeAIP(String)"
});
formatter.result({
  "duration": 3707900,
  "status": "passed"
});
formatter.match({
  "location": "OneCardAwayRFW.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 4365000,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "AIP exchanges one card to make a Royal Flush and loses the game",
  "description": "",
  "id": "aip-exchanges-card/cards-to-play-htp;aip-exchanges-one-card-to-make-a-royal-flush-and-loses-the-game",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "AIP is one card away from a Royal Flush L",
  "rows": [
    {
      "cells": [
        "S6",
        "SK",
        "SQ",
        "SJ",
        "SA"
      ],
      "line": 13
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "HTB_SF is given a Straight Flush W",
  "rows": [
    {
      "cells": [
        "H6",
        "H7",
        "H8",
        "H9",
        "H10"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "AIP_RF exchanges the odd Card with another card \"H2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "AIP_RF should lose the game",
  "keyword": "Then "
});
formatter.match({
  "location": "OneCardAwayRFL.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 108500,
  "status": "passed"
});
formatter.match({
  "location": "OneCardAwayRFL.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 55700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "H2",
      "offset": 49
    }
  ],
  "location": "OneCardAwayRFL.cardExchangeAIP(String)"
});
formatter.result({
  "duration": 128500,
  "status": "passed"
});
formatter.match({
  "location": "OneCardAwayRFL.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 211200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "AIP exchanges one card to make a Straight Flush and wins the game",
  "description": "",
  "id": "aip-exchanges-card/cards-to-play-htp;aip-exchanges-one-card-to-make-a-straight-flush-and-wins-the-game",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "AIP is one card away from a Straight Flush W",
  "rows": [
    {
      "cells": [
        "S2",
        "S8",
        "S9",
        "SJ",
        "S10"
      ],
      "line": 21
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "HTB_FK is given a Four of a Kind L",
  "rows": [
    {
      "cells": [
        "H6",
        "S6",
        "D6",
        "C6",
        "H10"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "AIP_SF exchanges the odd Card with the right card \"S7\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "AIP_SF should win the game",
  "keyword": "Then "
});
formatter.match({
  "location": "OneCardAwaySFW.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 128200,
  "status": "passed"
});
formatter.match({
  "location": "OneCardAwaySFW.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 48500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S7",
      "offset": 51
    }
  ],
  "location": "OneCardAwaySFW.cardExchangeAIP(String)"
});
formatter.result({
  "duration": 123100,
  "status": "passed"
});
formatter.match({
  "location": "OneCardAwaySFW.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 237800,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "AIP exchanges one card to make a Straight Flush and loses the game",
  "description": "",
  "id": "aip-exchanges-card/cards-to-play-htp;aip-exchanges-one-card-to-make-a-straight-flush-and-loses-the-game",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "AIP is one card away from a Straight Flush L",
  "rows": [
    {
      "cells": [
        "S2",
        "S8",
        "S9",
        "SJ",
        "S10"
      ],
      "line": 29
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "HTB_FK is given a Four of a Kind W",
  "rows": [
    {
      "cells": [
        "H6",
        "S6",
        "D6",
        "C6",
        "H10"
      ],
      "line": 31
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "AIP_SF exchanges the odd Card with another card \"H2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "AIP_SF should lose the game",
  "keyword": "Then "
});
formatter.match({
  "location": "OneCardAwaySFL.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 164300,
  "status": "passed"
});
formatter.match({
  "location": "OneCardAwaySFL.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 51800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "H2",
      "offset": 49
    }
  ],
  "location": "OneCardAwaySFL.cardExchangeAIP(String)"
});
formatter.result({
  "duration": 113600,
  "status": "passed"
});
formatter.match({
  "location": "OneCardAwaySFL.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 247300,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "AIP exchanges lowest odd card to make it a Full House and wins the game",
  "description": "",
  "id": "aip-exchanges-card/cards-to-play-htp;aip-exchanges-lowest-odd-card-to-make-it-a-full-house-and-wins-the-game",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "AIP is one card away from a Full House W",
  "rows": [
    {
      "cells": [
        "C2",
        "H9",
        "CJ",
        "SJ",
        "DJ"
      ],
      "line": 37
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "HTB_F is given a Flush L",
  "rows": [
    {
      "cells": [
        "H8",
        "HA",
        "H2",
        "H5",
        "H10"
      ],
      "line": 39
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "AIP_FH exchanges the odd Card with the right card \"D9\"",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "AIP_FH should win the game",
  "keyword": "Then "
});
formatter.match({
  "location": "OneCardAwayFHW.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 123400,
  "status": "passed"
});
formatter.match({
  "location": "OneCardAwayFHW.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 71100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "D9",
      "offset": 51
    }
  ],
  "location": "OneCardAwayFHW.cardExchangeAIP(String)"
});
formatter.result({
  "duration": 138700,
  "status": "passed"
});
formatter.match({
  "location": "OneCardAwayFHW.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 127500,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "AIP exchanges lowest odd card to make it a Full House and loses the game",
  "description": "",
  "id": "aip-exchanges-card/cards-to-play-htp;aip-exchanges-lowest-odd-card-to-make-it-a-full-house-and-loses-the-game",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "AIP is one card away from a Full House L",
  "rows": [
    {
      "cells": [
        "C2",
        "H9",
        "CJ",
        "SJ",
        "DJ"
      ],
      "line": 45
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "HTB_F is given a Flush W",
  "rows": [
    {
      "cells": [
        "H8",
        "HA",
        "H2",
        "H5",
        "H10"
      ],
      "line": 47
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "AIP_FH exchanges the odd Card with another card \"H2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "AIP_FH should lose the game",
  "keyword": "Then "
});
formatter.match({
  "location": "OneCardAwayFHL.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 100000,
  "status": "passed"
});
formatter.match({
  "location": "OneCardAwayFHL.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 30500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "H2",
      "offset": 49
    }
  ],
  "location": "OneCardAwayFHL.cardExchangeAIP(String)"
});
formatter.result({
  "duration": 80600,
  "status": "passed"
});
formatter.match({
  "location": "OneCardAwayFHL.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 279700,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "AIP exchanges odd card of a two pair to make it a Full House and wins the game",
  "description": "",
  "id": "aip-exchanges-card/cards-to-play-htp;aip-exchanges-odd-card-of-a-two-pair-to-make-it-a-full-house-and-wins-the-game",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 52,
  "name": "AIP has a two pair W",
  "rows": [
    {
      "cells": [
        "C9",
        "H9",
        "C3",
        "SJ",
        "DJ"
      ],
      "line": 53
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "HTB_F_TP is given a Flush L",
  "rows": [
    {
      "cells": [
        "H8",
        "HA",
        "H2",
        "H5",
        "H10"
      ],
      "line": 55
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "AIP_FH_TP exchanges the odd Card of the two pair with the right card \"CJ\"",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "AIP_FH_TP should win the game",
  "keyword": "Then "
});
formatter.match({
  "location": "OneCardAwayFHW2.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 93100,
  "status": "passed"
});
formatter.match({
  "location": "OneCardAwayFHW2.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 56500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CJ",
      "offset": 70
    }
  ],
  "location": "OneCardAwayFHW2.cardExchangeAIP(String)"
});
formatter.result({
  "duration": 97400,
  "status": "passed"
});
formatter.match({
  "location": "OneCardAwayFHW2.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 176600,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "AIP exchanges odd card of a two pair to make it a Full House and wins the game",
  "description": "",
  "id": "aip-exchanges-card/cards-to-play-htp;aip-exchanges-odd-card-of-a-two-pair-to-make-it-a-full-house-and-wins-the-game",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 60,
  "name": "AIP has a two pair W",
  "rows": [
    {
      "cells": [
        "C9",
        "H9",
        "C3",
        "SJ",
        "DJ"
      ],
      "line": 61
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "HTB_F_TP is given a Flush L",
  "rows": [
    {
      "cells": [
        "H8",
        "HA",
        "H2",
        "H5",
        "H10"
      ],
      "line": 63
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "AIP_FH_TP exchanges the odd Card of the two pair with the right card \"CJ\"",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "AIP_FH_TP should win the game",
  "keyword": "Then "
});
formatter.match({
  "location": "OneCardAwayFHW2.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 65500,
  "status": "passed"
});
formatter.match({
  "location": "OneCardAwayFHW2.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 57600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CJ",
      "offset": 70
    }
  ],
  "location": "OneCardAwayFHW2.cardExchangeAIP(String)"
});
formatter.result({
  "duration": 57600,
  "status": "passed"
});
formatter.match({
  "location": "OneCardAwayFHW2.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 134900,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "AIP exchanges odd card of a two pair to make it a Full House and loses the game",
  "description": "",
  "id": "aip-exchanges-card/cards-to-play-htp;aip-exchanges-odd-card-of-a-two-pair-to-make-it-a-full-house-and-loses-the-game",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 68,
  "name": "AIP has a two pair L",
  "rows": [
    {
      "cells": [
        "C9",
        "H9",
        "C3",
        "SJ",
        "DJ"
      ],
      "line": 69
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "HTB_F_TP is given a Flush W",
  "rows": [
    {
      "cells": [
        "H8",
        "HA",
        "H2",
        "H5",
        "H10"
      ],
      "line": 71
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "AIP_FH_TP exchanges the odd Card of the two pair with another card \"CK\"",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "AIP_FH_TP should lose the game",
  "keyword": "Then "
});
formatter.match({
  "location": "OneCardAwayFHL2.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 106700,
  "status": "passed"
});
formatter.match({
  "location": "OneCardAwayFHL2.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 44800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CK",
      "offset": 68
    }
  ],
  "location": "OneCardAwayFHL2.cardExchangeAIP(String)"
});
formatter.result({
  "duration": 79900,
  "status": "passed"
});
formatter.match({
  "location": "OneCardAwayFHL2.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 205000,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "AIP exchanges card to get a flush and wins the game",
  "description": "",
  "id": "aip-exchanges-card/cards-to-play-htp;aip-exchanges-card-to-get-a-flush-and-wins-the-game",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 76,
  "name": "AIP is one card away from Flush W",
  "rows": [
    {
      "cells": [
        "H8",
        "HA",
        "C2",
        "H5",
        "H10"
      ],
      "line": 77
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "HTB_S is given a Straight L",
  "rows": [
    {
      "cells": [
        "C8",
        "S9",
        "H10",
        "DQ",
        "CJ"
      ],
      "line": 79
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "AIP_F exchanges the odd card to with \"H6\"",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "AIP_F should win the game",
  "keyword": "Then "
});
formatter.match({
  "location": "OneCardAwayFlushW.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 105400,
  "status": "passed"
});
formatter.match({
  "location": "OneCardAwayFlushW.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 44200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "H6",
      "offset": 38
    }
  ],
  "location": "OneCardAwayFlushW.cardExchangeAIP(String)"
});
formatter.result({
  "duration": 89600,
  "status": "passed"
});
formatter.match({
  "location": "OneCardAwayFlushW.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 979600,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "AIP exchanges card to get a flush and loses the game",
  "description": "",
  "id": "aip-exchanges-card/cards-to-play-htp;aip-exchanges-card-to-get-a-flush-and-loses-the-game",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 84,
  "name": "AIP is one card away from Flush L",
  "rows": [
    {
      "cells": [
        "H8",
        "HA",
        "C2",
        "H5",
        "H10"
      ],
      "line": 85
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 86,
  "name": "HTB_S is given a Straight W",
  "rows": [
    {
      "cells": [
        "C8",
        "S9",
        "H10",
        "DQ",
        "CJ"
      ],
      "line": 87
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "AIP_F exchanges the odd card to with another card \"D6\"",
  "keyword": "Then "
});
formatter.step({
  "line": 89,
  "name": "AIP_F should lose the game",
  "keyword": "Then "
});
formatter.match({
  "location": "OneCardAwayFlushL.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 113200,
  "status": "passed"
});
formatter.match({
  "location": "OneCardAwayFlushL.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 52100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "D6",
      "offset": 51
    }
  ],
  "location": "OneCardAwayFlushL.cardExchangeAIP(String)"
});
formatter.result({
  "duration": 92800,
  "status": "passed"
});
formatter.match({
  "location": "OneCardAwayFlushL.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 201400,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "AIP exchanges card to get a straight and wins the game",
  "description": "",
  "id": "aip-exchanges-card/cards-to-play-htp;aip-exchanges-card-to-get-a-straight-and-wins-the-game",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 92,
  "name": "AIP is one card away from Straight W",
  "rows": [
    {
      "cells": [
        "C8",
        "S9",
        "H10",
        "DQ",
        "C3"
      ],
      "line": 93
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
  "name": "HTB_T is given a Three of a kind L",
  "rows": [
    {
      "cells": [
        "C9",
        "H9",
        "C3",
        "SJ",
        "D9"
      ],
      "line": 95
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "AIP_S exchanges the odd card to with \"CJ\"",
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "AIP_S should win the game",
  "keyword": "Then "
});
formatter.match({
  "location": "OneCardAwayStraightW.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 333400,
  "status": "passed"
});
formatter.match({
  "location": "OneCardAwayStraightW.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 51900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CJ",
      "offset": 38
    }
  ],
  "location": "OneCardAwayStraightW.cardExchangeAIP(String)"
});
formatter.result({
  "duration": 109800,
  "status": "passed"
});
formatter.match({
  "location": "OneCardAwayStraightW.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 626700,
  "status": "passed"
});
formatter.scenario({
  "line": 99,
  "name": "AIP exchanges card to get a straight and loses the game",
  "description": "",
  "id": "aip-exchanges-card/cards-to-play-htp;aip-exchanges-card-to-get-a-straight-and-loses-the-game",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 100,
  "name": "AIP is one card away from Straight L",
  "rows": [
    {
      "cells": [
        "C8",
        "S9",
        "H10",
        "DQ",
        "C3"
      ],
      "line": 101
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "HTB_T is given a Three of a kind W",
  "rows": [
    {
      "cells": [
        "C9",
        "H9",
        "C3",
        "SJ",
        "D9"
      ],
      "line": 103
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "AIP_S exchanges the odd card to with another card \"C2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "AIP_S should lose the game",
  "keyword": "Then "
});
formatter.match({
  "location": "OneCardAwayFromStraightL.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 105300,
  "status": "passed"
});
formatter.match({
  "location": "OneCardAwayFromStraightL.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 41800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C2",
      "offset": 51
    }
  ],
  "location": "OneCardAwayFromStraightL.cardExchangeAIP(String)"
});
formatter.result({
  "duration": 117000,
  "status": "passed"
});
formatter.match({
  "location": "OneCardAwayFromStraightL.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 176300,
  "status": "passed"
});
formatter.scenario({
  "line": 107,
  "name": "AIP has three cards of the same suit and exchanges other two",
  "description": "",
  "id": "aip-exchanges-card/cards-to-play-htp;aip-has-three-cards-of-the-same-suit-and-exchanges-other-two",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 108,
  "name": "AIP is given a hand with three cards with the same suit",
  "rows": [
    {
      "cells": [
        "C8",
        "C9",
        "HA",
        "DQ",
        "C3"
      ],
      "line": 109
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 110,
  "name": "AIP_S exchanges the odd cards with two cards \"C10 CA\"",
  "keyword": "Then "
});
formatter.step({
  "line": 111,
  "name": "AIP_S should have a new hand with those two added cards",
  "rows": [
    {
      "cells": [
        "C8",
        "C9",
        "C10",
        "CA",
        "C3"
      ],
      "line": 112
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SameThreeSuit.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 154400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C10 CA",
      "offset": 46
    }
  ],
  "location": "SameThreeSuit.cardExchangeAIP(String)"
});
formatter.result({
  "duration": 151200,
  "status": "passed"
});
formatter.match({
  "location": "SameThreeSuit.newHand(DataTable)"
});
formatter.result({
  "duration": 118000,
  "status": "passed"
});
formatter.scenario({
  "line": 114,
  "name": "AIP has three cards of the same rank and exchanges other two",
  "description": "",
  "id": "aip-exchanges-card/cards-to-play-htp;aip-has-three-cards-of-the-same-rank-and-exchanges-other-two",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 115,
  "name": "AIP is given a hand with three cards with the same rank",
  "rows": [
    {
      "cells": [
        "H9",
        "C9",
        "S9",
        "DQ",
        "C3"
      ],
      "line": 116
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 117,
  "name": "AIP_R exchanges the odd cards with two new cards \"D9 C10\"",
  "keyword": "Then "
});
formatter.step({
  "line": 118,
  "name": "AIP_R should have a new hand with those two added cards",
  "rows": [
    {
      "cells": [
        "H9",
        "C9",
        "S9",
        "D9",
        "C10"
      ],
      "line": 119
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SameThreeRank.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 90200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "D9 C10",
      "offset": 50
    }
  ],
  "location": "SameThreeRank.cardExchangeAIP(String)"
});
formatter.result({
  "duration": 319900,
  "status": "passed"
});
formatter.match({
  "location": "SameThreeRank.newHand(DataTable)"
});
formatter.result({
  "duration": 90600,
  "status": "passed"
});
formatter.scenario({
  "line": 121,
  "name": "AIP has a pair and it exchanges the three other cards",
  "description": "",
  "id": "aip-exchanges-card/cards-to-play-htp;aip-has-a-pair-and-it-exchanges-the-three-other-cards",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 122,
  "name": "AIP is given a hand with a pair and three random cards",
  "rows": [
    {
      "cells": [
        "H9",
        "C9",
        "S2",
        "DQ",
        "C3"
      ],
      "line": 123
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 124,
  "name": "AIP_P exchanges the odd cards with three new cards \"D9 S9 H10\"",
  "keyword": "Then "
});
formatter.step({
  "line": 125,
  "name": "AIP_P should have a new hand with those three added cards",
  "rows": [
    {
      "cells": [
        "H9",
        "C9",
        "D9",
        "S9",
        "H10"
      ],
      "line": 126
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TwoPairExchange.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 93800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "D9 S9 H10",
      "offset": 52
    }
  ],
  "location": "TwoPairExchange.cardExchangeAIP(String)"
});
formatter.result({
  "duration": 225500,
  "status": "passed"
});
formatter.match({
  "location": "TwoPairExchange.newHand(DataTable)"
});
formatter.result({
  "duration": 82100,
  "status": "passed"
});
formatter.scenario({
  "line": 128,
  "name": "AIP has keeps two high cards and exchanges the other three",
  "description": "",
  "id": "aip-exchanges-card/cards-to-play-htp;aip-has-keeps-two-high-cards-and-exchanges-the-other-three",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 129,
  "name": "AIP is given five random cards",
  "rows": [
    {
      "cells": [
        "H9",
        "C5",
        "S2",
        "DQ",
        "C3"
      ],
      "line": 130
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 131,
  "name": "AIP_H exchanges the three low cards with new cards \"D10 S10 H10\"",
  "keyword": "Then "
});
formatter.step({
  "line": 132,
  "name": "AIP_H should have a new hand with those three added cards",
  "rows": [
    {
      "cells": [
        "H9",
        "D10",
        "S10",
        "DQ",
        "H10"
      ],
      "line": 133
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HighCardExchange.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 110100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "D10 S10 H10",
      "offset": 52
    }
  ],
  "location": "HighCardExchange.cardExchangeAIP(String)"
});
formatter.result({
  "duration": 688800,
  "status": "passed"
});
formatter.match({
  "location": "HighCardExchange.newHand(DataTable)"
});
formatter.result({
  "duration": 96300,
  "status": "passed"
});
formatter.uri("AIPWinner.feature");
formatter.feature({
  "line": 1,
  "name": "AIP plays against HTB",
  "description": "",
  "id": "aip-plays-against-htb",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "AIP has a Royal flush and plays against HTB",
  "description": "",
  "id": "aip-plays-against-htb;aip-has-a-royal-flush-and-plays-against-htb",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "AIP is given a Royal Flush",
  "rows": [
    {
      "cells": [
        "S10",
        "SJ",
        "SQ",
        "SK",
        "SA"
      ],
      "line": 5
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "AIP Holds Royal Flush",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "HTB is given all the other lower nine hands",
  "rows": [
    {
      "cells": [
        "D10",
        "D9",
        "D8",
        "D7",
        "D6"
      ],
      "line": 8
    },
    {
      "cells": [
        "D10",
        "H10",
        "C10",
        "S10",
        "D6"
      ],
      "line": 9
    },
    {
      "cells": [
        "D10",
        "H10",
        "C10",
        "D7",
        "S7"
      ],
      "line": 10
    },
    {
      "cells": [
        "D2",
        "D9",
        "D10",
        "D7",
        "DK"
      ],
      "line": 11
    },
    {
      "cells": [
        "H10",
        "D9",
        "C8",
        "D7",
        "S6"
      ],
      "line": 12
    },
    {
      "cells": [
        "D10",
        "C10",
        "S10",
        "D7",
        "D6"
      ],
      "line": 13
    },
    {
      "cells": [
        "D10",
        "C10",
        "SA",
        "D7",
        "S7"
      ],
      "line": 14
    },
    {
      "cells": [
        "D10",
        "C10",
        "SK",
        "D7",
        "D6"
      ],
      "line": 15
    },
    {
      "cells": [
        "DA",
        "C2",
        "SK",
        "D7",
        "D6"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "AIP should win all the nine games",
  "keyword": "Then "
});
formatter.match({
  "location": "RoyalFlushAIP.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 95800,
  "status": "passed"
});
formatter.match({
  "location": "RoyalFlushAIP.holdsCards()"
});
formatter.result({
  "duration": 80400,
  "status": "passed"
});
formatter.match({
  "location": "RoyalFlushAIP.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 65300,
  "status": "passed"
});
formatter.match({
  "location": "RoyalFlushAIP.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 580400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "AIP has a Straight flush and plays against HTB",
  "description": "",
  "id": "aip-plays-against-htb;aip-has-a-straight-flush-and-plays-against-htb",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "AIP is given a Straight Flush",
  "rows": [
    {
      "cells": [
        "D10",
        "D9",
        "D8",
        "D7",
        "D6"
      ],
      "line": 21
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "AIP Holds Straight Flush",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "HTB is given all the other lower eight hands",
  "rows": [
    {
      "cells": [
        "D10",
        "H10",
        "C10",
        "S10",
        "D6"
      ],
      "line": 24
    },
    {
      "cells": [
        "D10",
        "H10",
        "C10",
        "D7",
        "S7"
      ],
      "line": 25
    },
    {
      "cells": [
        "D2",
        "D9",
        "D10",
        "D7",
        "DK"
      ],
      "line": 26
    },
    {
      "cells": [
        "H10",
        "D9",
        "C8",
        "D7",
        "S6"
      ],
      "line": 27
    },
    {
      "cells": [
        "D10",
        "C10",
        "S10",
        "D7",
        "D6"
      ],
      "line": 28
    },
    {
      "cells": [
        "D10",
        "C10",
        "SA",
        "D7",
        "S7"
      ],
      "line": 29
    },
    {
      "cells": [
        "D10",
        "C10",
        "SK",
        "D7",
        "D6"
      ],
      "line": 30
    },
    {
      "cells": [
        "DA",
        "C2",
        "SK",
        "D7",
        "D6"
      ],
      "line": 31
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "AIP should win all the eight games",
  "keyword": "Then "
});
formatter.match({
  "location": "StraightFlushAIP.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 103800,
  "status": "passed"
});
formatter.match({
  "location": "StraightFlushAIP.holdsCards()"
});
formatter.result({
  "duration": 158700,
  "status": "passed"
});
formatter.match({
  "location": "StraightFlushAIP.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 72100,
  "status": "passed"
});
formatter.match({
  "location": "StraightFlushAIP.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 701300,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "AIP has a Four of a Kind and plays against HTB",
  "description": "",
  "id": "aip-plays-against-htb;aip-has-a-four-of-a-kind-and-plays-against-htb",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "AIP is given a Four of Kind",
  "rows": [
    {
      "cells": [
        "D10",
        "H10",
        "C10",
        "S10",
        "D6"
      ],
      "line": 36
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "AIP Holds Four of a Kind",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "HTB is given all the other lower seven hands",
  "rows": [
    {
      "cells": [
        "D10",
        "H10",
        "C10",
        "D7",
        "S7"
      ],
      "line": 39
    },
    {
      "cells": [
        "D2",
        "D9",
        "D10",
        "D7",
        "DK"
      ],
      "line": 40
    },
    {
      "cells": [
        "H10",
        "D9",
        "C8",
        "D7",
        "S6"
      ],
      "line": 41
    },
    {
      "cells": [
        "D10",
        "C10",
        "S10",
        "D7",
        "D6"
      ],
      "line": 42
    },
    {
      "cells": [
        "D10",
        "C10",
        "SA",
        "D7",
        "S7"
      ],
      "line": 43
    },
    {
      "cells": [
        "D10",
        "C10",
        "SK",
        "D7",
        "D6"
      ],
      "line": 44
    },
    {
      "cells": [
        "DA",
        "C2",
        "SK",
        "D7",
        "D6"
      ],
      "line": 45
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "AIP should win all the seven games",
  "keyword": "Then "
});
formatter.match({
  "location": "FourOfKindAIP.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 131600,
  "status": "passed"
});
formatter.match({
  "location": "FourOfKindAIP.holdsCards()"
});
formatter.result({
  "duration": 47600,
  "status": "passed"
});
formatter.match({
  "location": "FourOfKindAIP.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 68700,
  "status": "passed"
});
formatter.match({
  "location": "FourOfKindAIP.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 464600,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "AIP has a Full House and plays against HTB",
  "description": "",
  "id": "aip-plays-against-htb;aip-has-a-full-house-and-plays-against-htb",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 49,
  "name": "AIP is given a Full House",
  "rows": [
    {
      "cells": [
        "D10",
        "H10",
        "C10",
        "D7",
        "S7"
      ],
      "line": 50
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "AIP Holds a Full House",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "HTB is given all the other lower six hands",
  "rows": [
    {
      "cells": [
        "D2",
        "D9",
        "D10",
        "D7",
        "DK"
      ],
      "line": 53
    },
    {
      "cells": [
        "H10",
        "D9",
        "C8",
        "D7",
        "S6"
      ],
      "line": 54
    },
    {
      "cells": [
        "D10",
        "C10",
        "S10",
        "D7",
        "D6"
      ],
      "line": 55
    },
    {
      "cells": [
        "D10",
        "C10",
        "SA",
        "D7",
        "S7"
      ],
      "line": 56
    },
    {
      "cells": [
        "D10",
        "C10",
        "SK",
        "D7",
        "D6"
      ],
      "line": 57
    },
    {
      "cells": [
        "DA",
        "C2",
        "SK",
        "D7",
        "D6"
      ],
      "line": 58
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "AIP should win all the six games",
  "keyword": "Then "
});
formatter.match({
  "location": "FullHouseAIP.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 106000,
  "status": "passed"
});
formatter.match({
  "location": "FullHouseAIP.holdsCards()"
});
formatter.result({
  "duration": 63500,
  "status": "passed"
});
formatter.match({
  "location": "FullHouseAIP.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 55400,
  "status": "passed"
});
formatter.match({
  "location": "FullHouseAIP.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 765700,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "AIP has a Flush and plays against HTB",
  "description": "",
  "id": "aip-plays-against-htb;aip-has-a-flush-and-plays-against-htb",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 62,
  "name": "AIP is given a Flush",
  "rows": [
    {
      "cells": [
        "D2",
        "D9",
        "D10",
        "D7",
        "DK"
      ],
      "line": 63
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 64,
  "name": "AIP Holds a Flush",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "HTB is given all the other lower five hands",
  "rows": [
    {
      "cells": [
        "H10",
        "D9",
        "C8",
        "D7",
        "S6"
      ],
      "line": 66
    },
    {
      "cells": [
        "D10",
        "C10",
        "S10",
        "D7",
        "D6"
      ],
      "line": 67
    },
    {
      "cells": [
        "D10",
        "C10",
        "SA",
        "D7",
        "S7"
      ],
      "line": 68
    },
    {
      "cells": [
        "D10",
        "C10",
        "SK",
        "D7",
        "D6"
      ],
      "line": 69
    },
    {
      "cells": [
        "DA",
        "C2",
        "SK",
        "D7",
        "D6"
      ],
      "line": 70
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "AIP should win all the five games",
  "keyword": "Then "
});
formatter.match({
  "location": "FlushAIP.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 119000,
  "status": "passed"
});
formatter.match({
  "location": "FlushAIP.holdsCards()"
});
formatter.result({
  "duration": 177600,
  "status": "passed"
});
formatter.match({
  "location": "FlushAIP.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 607200,
  "status": "passed"
});
formatter.match({
  "location": "FlushAIP.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 709800,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "AIP has a Straight and plays against HTB",
  "description": "",
  "id": "aip-plays-against-htb;aip-has-a-straight-and-plays-against-htb",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 74,
  "name": "AIP is given a Straight",
  "rows": [
    {
      "cells": [
        "H10",
        "D9",
        "C8",
        "D7",
        "S6"
      ],
      "line": 75
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "HTB is given all the other lower four hands",
  "rows": [
    {
      "cells": [
        "D10",
        "C10",
        "S10",
        "D7",
        "D6"
      ],
      "line": 77
    },
    {
      "cells": [
        "D10",
        "C10",
        "SA",
        "D7",
        "S7"
      ],
      "line": 78
    },
    {
      "cells": [
        "D10",
        "C10",
        "SK",
        "D7",
        "D6"
      ],
      "line": 79
    },
    {
      "cells": [
        "DA",
        "C2",
        "SK",
        "D7",
        "D6"
      ],
      "line": 80
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "AIP should win all the four games",
  "keyword": "Then "
});
formatter.match({
  "location": "StraightAIP.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 99600,
  "status": "passed"
});
formatter.match({
  "location": "StraightAIP.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 44200,
  "status": "passed"
});
formatter.match({
  "location": "StraightAIP.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 381500,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "AIP has a Three of a kind and plays against HTB",
  "description": "",
  "id": "aip-plays-against-htb;aip-has-a-three-of-a-kind-and-plays-against-htb",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 84,
  "name": "AIP is given a Three of a kind",
  "rows": [
    {
      "cells": [
        "D10",
        "C10",
        "S10",
        "D7",
        "D6"
      ],
      "line": 85
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 86,
  "name": "HTB is given all the other lower three hands",
  "rows": [
    {
      "cells": [
        "D10",
        "C10",
        "SA",
        "D7",
        "S7"
      ],
      "line": 87
    },
    {
      "cells": [
        "D10",
        "C10",
        "SK",
        "D7",
        "D6"
      ],
      "line": 88
    },
    {
      "cells": [
        "DA",
        "C2",
        "SK",
        "D7",
        "D6"
      ],
      "line": 89
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "AIP should win all the three games",
  "keyword": "Then "
});
formatter.match({
  "location": "ThreeOfAKindAIP.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 167500,
  "status": "passed"
});
formatter.match({
  "location": "ThreeOfAKindAIP.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 57700,
  "status": "passed"
});
formatter.match({
  "location": "ThreeOfAKindAIP.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 519300,
  "status": "passed"
});
formatter.scenario({
  "line": 92,
  "name": "AIP has a Two pair and plays against HTB",
  "description": "",
  "id": "aip-plays-against-htb;aip-has-a-two-pair-and-plays-against-htb",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 93,
  "name": "AIP is given a Two Pair",
  "rows": [
    {
      "cells": [
        "D10",
        "C10",
        "SA",
        "D7",
        "S7"
      ],
      "line": 94
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 95,
  "name": "HTB is given all the other lower two hands",
  "rows": [
    {
      "cells": [
        "D10",
        "C10",
        "SK",
        "D7",
        "D6"
      ],
      "line": 96
    },
    {
      "cells": [
        "DA",
        "C2",
        "SK",
        "D7",
        "D6"
      ],
      "line": 97
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "AIP should win all the two games",
  "keyword": "Then "
});
formatter.match({
  "location": "TwoPairAIP.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 128600,
  "status": "passed"
});
formatter.match({
  "location": "TwoPairAIP.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 56900,
  "status": "passed"
});
formatter.match({
  "location": "TwoPairAIP.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 411700,
  "status": "passed"
});
formatter.scenario({
  "line": 100,
  "name": "AIP has a pair and plays against HTB",
  "description": "",
  "id": "aip-plays-against-htb;aip-has-a-pair-and-plays-against-htb",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 101,
  "name": "AIP is given a Pair",
  "rows": [
    {
      "cells": [
        "D10",
        "C10",
        "SK",
        "D7",
        "D6"
      ],
      "line": 102
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "HTB has a high card",
  "rows": [
    {
      "cells": [
        "DA",
        "C2",
        "SK",
        "D7",
        "D6"
      ],
      "line": 104
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "AIP should win the game",
  "keyword": "Then "
});
formatter.match({
  "location": "PairAIP.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 106000,
  "status": "passed"
});
formatter.match({
  "location": "PairAIP.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 43100,
  "status": "passed"
});
formatter.match({
  "location": "PairAIP.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 250600,
  "status": "passed"
});
formatter.uri("HTBWinner.feature");
formatter.feature({
  "line": 1,
  "name": "HTB plays against AIP",
  "description": "",
  "id": "htb-plays-against-aip",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "HTB has a Royal flush and plays against AIP",
  "description": "",
  "id": "htb-plays-against-aip;htb-has-a-royal-flush-and-plays-against-aip",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "HTB is given a Royal Flush",
  "rows": [
    {
      "cells": [
        "S10",
        "SJ",
        "SQ",
        "SK",
        "SA"
      ],
      "line": 5
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "AIP is given all the other lower nine hands",
  "rows": [
    {
      "cells": [
        "D10",
        "D9",
        "D8",
        "D7",
        "D6"
      ],
      "line": 7
    },
    {
      "cells": [
        "D10",
        "H10",
        "C10",
        "S10",
        "D6"
      ],
      "line": 8
    },
    {
      "cells": [
        "D10",
        "H10",
        "C10",
        "D7",
        "S7"
      ],
      "line": 9
    },
    {
      "cells": [
        "D2",
        "D9",
        "D10",
        "D7",
        "DK"
      ],
      "line": 10
    },
    {
      "cells": [
        "H10",
        "D9",
        "C8",
        "D7",
        "S6"
      ],
      "line": 11
    },
    {
      "cells": [
        "D10",
        "C10",
        "S10",
        "D7",
        "D6"
      ],
      "line": 12
    },
    {
      "cells": [
        "D10",
        "C10",
        "SA",
        "D7",
        "S7"
      ],
      "line": 13
    },
    {
      "cells": [
        "D10",
        "C10",
        "SK",
        "D7",
        "D6"
      ],
      "line": 14
    },
    {
      "cells": [
        "DA",
        "C2",
        "SK",
        "D7",
        "D6"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "HTB should win all the nine games",
  "keyword": "Then "
});
formatter.match({
  "location": "RoyalFlushHTB.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 143700,
  "status": "passed"
});
formatter.match({
  "location": "RoyalFlushHTB.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 95400,
  "status": "passed"
});
formatter.match({
  "location": "RoyalFlushHTB.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 7694700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "HTP has a Straight flush and plays against AIP",
  "description": "",
  "id": "htb-plays-against-aip;htp-has-a-straight-flush-and-plays-against-aip",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "HTB is given a Straight Flush",
  "rows": [
    {
      "cells": [
        "D10",
        "D9",
        "D8",
        "D7",
        "D6"
      ],
      "line": 20
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "AIP is given all the other lower eight hands",
  "rows": [
    {
      "cells": [
        "D10",
        "H10",
        "C10",
        "S10",
        "D6"
      ],
      "line": 22
    },
    {
      "cells": [
        "D10",
        "H10",
        "C10",
        "D7",
        "S7"
      ],
      "line": 23
    },
    {
      "cells": [
        "D2",
        "D9",
        "D10",
        "D7",
        "DK"
      ],
      "line": 24
    },
    {
      "cells": [
        "H10",
        "D9",
        "C8",
        "D7",
        "S6"
      ],
      "line": 25
    },
    {
      "cells": [
        "D10",
        "C10",
        "S10",
        "D7",
        "D6"
      ],
      "line": 26
    },
    {
      "cells": [
        "D10",
        "C10",
        "SA",
        "D7",
        "S7"
      ],
      "line": 27
    },
    {
      "cells": [
        "D10",
        "C10",
        "SK",
        "D7",
        "D6"
      ],
      "line": 28
    },
    {
      "cells": [
        "DA",
        "C2",
        "SK",
        "D7",
        "D6"
      ],
      "line": 29
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "HTB should win all the eight games",
  "keyword": "Then "
});
formatter.match({
  "location": "StraightFlushHTB.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 313800,
  "status": "passed"
});
formatter.match({
  "location": "StraightFlushHTB.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 74600,
  "status": "passed"
});
formatter.match({
  "location": "StraightFlushHTB.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 722600,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "HTP has a Four of a Kind and plays against AIP",
  "description": "",
  "id": "htb-plays-against-aip;htp-has-a-four-of-a-kind-and-plays-against-aip",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "HTB is given a Four of Kind",
  "rows": [
    {
      "cells": [
        "D10",
        "H10",
        "C10",
        "S10",
        "D6"
      ],
      "line": 34
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "AIP is given all the other lower seven hands",
  "rows": [
    {
      "cells": [
        "D10",
        "H10",
        "C10",
        "D7",
        "S7"
      ],
      "line": 36
    },
    {
      "cells": [
        "D2",
        "D9",
        "D10",
        "D7",
        "DK"
      ],
      "line": 37
    },
    {
      "cells": [
        "H10",
        "D9",
        "C8",
        "D7",
        "S6"
      ],
      "line": 38
    },
    {
      "cells": [
        "D10",
        "C10",
        "S10",
        "D7",
        "D6"
      ],
      "line": 39
    },
    {
      "cells": [
        "D10",
        "C10",
        "SA",
        "D7",
        "S7"
      ],
      "line": 40
    },
    {
      "cells": [
        "D10",
        "C10",
        "SK",
        "D7",
        "D6"
      ],
      "line": 41
    },
    {
      "cells": [
        "DA",
        "C2",
        "SK",
        "D7",
        "D6"
      ],
      "line": 42
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "HTB should win all the seven games",
  "keyword": "Then "
});
formatter.match({
  "location": "FourOfKindHTB.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 95400,
  "status": "passed"
});
formatter.match({
  "location": "FourOfKindHTB.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 50300,
  "status": "passed"
});
formatter.match({
  "location": "FourOfKindHTB.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 450600,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "HTP has a Full House and plays against AIP",
  "description": "",
  "id": "htb-plays-against-aip;htp-has-a-full-house-and-plays-against-aip",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "HTB is given a Full House",
  "rows": [
    {
      "cells": [
        "D10",
        "H10",
        "C10",
        "D7",
        "S7"
      ],
      "line": 47
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "AIP is given all the other lower six hands",
  "rows": [
    {
      "cells": [
        "D2",
        "D9",
        "D10",
        "D7",
        "DK"
      ],
      "line": 49
    },
    {
      "cells": [
        "H10",
        "D9",
        "C8",
        "D7",
        "S6"
      ],
      "line": 50
    },
    {
      "cells": [
        "D10",
        "C10",
        "S10",
        "D7",
        "D6"
      ],
      "line": 51
    },
    {
      "cells": [
        "D10",
        "C10",
        "SA",
        "D7",
        "S7"
      ],
      "line": 52
    },
    {
      "cells": [
        "D10",
        "C10",
        "SK",
        "D7",
        "D6"
      ],
      "line": 53
    },
    {
      "cells": [
        "DA",
        "C2",
        "SK",
        "D7",
        "D6"
      ],
      "line": 54
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "HTB should win all the six games",
  "keyword": "Then "
});
formatter.match({
  "location": "FullHouseHTB.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 152300,
  "status": "passed"
});
formatter.match({
  "location": "FullHouseHTB.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 78700,
  "status": "passed"
});
formatter.match({
  "location": "FullHouseHTB.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 959600,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "HTP has a Flush and plays against AIP",
  "description": "",
  "id": "htb-plays-against-aip;htp-has-a-flush-and-plays-against-aip",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 58,
  "name": "HTB is given a Flush",
  "rows": [
    {
      "cells": [
        "D2",
        "D9",
        "D10",
        "D7",
        "DK"
      ],
      "line": 59
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "AIP is given all the other lower five hands",
  "rows": [
    {
      "cells": [
        "H10",
        "D9",
        "C8",
        "D7",
        "S6"
      ],
      "line": 61
    },
    {
      "cells": [
        "D10",
        "C10",
        "S10",
        "D7",
        "D6"
      ],
      "line": 62
    },
    {
      "cells": [
        "D10",
        "C10",
        "SA",
        "D7",
        "S7"
      ],
      "line": 63
    },
    {
      "cells": [
        "D10",
        "C10",
        "SK",
        "D7",
        "D6"
      ],
      "line": 64
    },
    {
      "cells": [
        "DA",
        "C2",
        "SK",
        "D7",
        "D6"
      ],
      "line": 65
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "HTB should win all the five games",
  "keyword": "Then "
});
formatter.match({
  "location": "FlushHTB.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 116100,
  "status": "passed"
});
formatter.match({
  "location": "FlushHTB.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 132000,
  "status": "passed"
});
formatter.match({
  "location": "FlushHTB.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 3496900,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "HTB has a Straight and plays against AIP",
  "description": "",
  "id": "htb-plays-against-aip;htb-has-a-straight-and-plays-against-aip",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 69,
  "name": "HTB is given a Straight",
  "rows": [
    {
      "cells": [
        "H10",
        "D9",
        "C8",
        "D7",
        "S6"
      ],
      "line": 70
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "AIP is given all the other lower four hands",
  "rows": [
    {
      "cells": [
        "D10",
        "C10",
        "S10",
        "D7",
        "D6"
      ],
      "line": 72
    },
    {
      "cells": [
        "D10",
        "C10",
        "SA",
        "D7",
        "S7"
      ],
      "line": 73
    },
    {
      "cells": [
        "D10",
        "C10",
        "SK",
        "D7",
        "D6"
      ],
      "line": 74
    },
    {
      "cells": [
        "DA",
        "C2",
        "SK",
        "D7",
        "D6"
      ],
      "line": 75
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "HTB should win all the four games",
  "keyword": "Then "
});
formatter.match({
  "location": "StraightHTB.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 14008700,
  "status": "passed"
});
formatter.match({
  "location": "StraightHTB.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 61700,
  "status": "passed"
});
formatter.match({
  "location": "StraightHTB.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 599900,
  "status": "passed"
});
formatter.scenario({
  "line": 78,
  "name": "HTB has a Three of a kind and plays against AIP",
  "description": "",
  "id": "htb-plays-against-aip;htb-has-a-three-of-a-kind-and-plays-against-aip",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 79,
  "name": "HTB is given a Three of a kind",
  "rows": [
    {
      "cells": [
        "D10",
        "C10",
        "S10",
        "D7",
        "D6"
      ],
      "line": 80
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 81,
  "name": "AIP is given all the other lower three hands",
  "rows": [
    {
      "cells": [
        "D10",
        "C10",
        "SA",
        "D7",
        "S7"
      ],
      "line": 82
    },
    {
      "cells": [
        "D10",
        "C10",
        "SK",
        "D7",
        "D6"
      ],
      "line": 83
    },
    {
      "cells": [
        "DA",
        "C2",
        "SK",
        "D7",
        "D6"
      ],
      "line": 84
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "HTB should win all the three games",
  "keyword": "Then "
});
formatter.match({
  "location": "ThreeOfAKindHTB.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 185700,
  "status": "passed"
});
formatter.match({
  "location": "ThreeOfAKindHTB.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 721500,
  "status": "passed"
});
formatter.match({
  "location": "ThreeOfAKindHTB.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 312300,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "HTB has a Two pair and plays against AIP",
  "description": "",
  "id": "htb-plays-against-aip;htb-has-a-two-pair-and-plays-against-aip",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 88,
  "name": "HTB is given a Two Pair",
  "rows": [
    {
      "cells": [
        "D10",
        "C10",
        "SA",
        "D7",
        "S7"
      ],
      "line": 89
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 90,
  "name": "AIP is given all the other lower two hands",
  "rows": [
    {
      "cells": [
        "D10",
        "C10",
        "SK",
        "D7",
        "D6"
      ],
      "line": 91
    },
    {
      "cells": [
        "DA",
        "C2",
        "SK",
        "D7",
        "D6"
      ],
      "line": 92
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "HTB should win all the two games",
  "keyword": "Then "
});
formatter.match({
  "location": "TwoPairHTB.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 100700,
  "status": "passed"
});
formatter.match({
  "location": "TwoPairHTB.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 39300,
  "status": "passed"
});
formatter.match({
  "location": "TwoPairHTB.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 225500,
  "status": "passed"
});
formatter.scenario({
  "line": 95,
  "name": "HTB has a pair and plays against AIP",
  "description": "",
  "id": "htb-plays-against-aip;htb-has-a-pair-and-plays-against-aip",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 96,
  "name": "HTB is given a Pair",
  "rows": [
    {
      "cells": [
        "D10",
        "C10",
        "SK",
        "D7",
        "D6"
      ],
      "line": 97
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 98,
  "name": "AIP has a high card",
  "rows": [
    {
      "cells": [
        "DA",
        "C2",
        "SK",
        "D7",
        "D6"
      ],
      "line": 99
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "HTB should win the game",
  "keyword": "Then "
});
formatter.match({
  "location": "PairHTB.storeHTPPokerHand(DataTable)"
});
formatter.result({
  "duration": 92800,
  "status": "passed"
});
formatter.match({
  "location": "PairHTB.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 32300,
  "status": "passed"
});
formatter.match({
  "location": "PairHTB.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 132400,
  "status": "passed"
});
formatter.uri("PokerHandPermutations.feature");
formatter.feature({
  "line": 1,
  "name": "Test recognize all nine poker hands with all possible card permutations",
  "description": "",
  "id": "test-recognize-all-nine-poker-hands-with-all-possible-card-permutations",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "A royal flush hand should pass for isRoyalFlush test in any order",
  "description": "",
  "id": "test-recognize-all-nine-poker-hands-with-all-possible-card-permutations;a-royal-flush-hand-should-pass-for-isroyalflush-test-in-any-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "A royal flush poker hand in any order",
  "rows": [
    {
      "cells": [
        "SA",
        "SK",
        "SQ",
        "SJ",
        "S10"
      ],
      "line": 5
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I should get true for royal flush in any poker hand permutation",
  "keyword": "Then "
});
formatter.match({
  "location": "RoyalFlushStepDefinitions.storePokerHand(DataTable)"
});
formatter.result({
  "duration": 174700,
  "status": "passed"
});
formatter.match({
  "location": "RoyalFlushStepDefinitions.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 1169600,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "A straight flush hand should pass for isStraightFlush test in any order",
  "description": "",
  "id": "test-recognize-all-nine-poker-hands-with-all-possible-card-permutations;a-straight-flush-hand-should-pass-for-isstraightflush-test-in-any-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "A straight flush poker hand in any order",
  "rows": [
    {
      "cells": [
        "S5",
        "S6",
        "S7",
        "S8",
        "S9"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I should get true for straight flush in any poker hand permutation",
  "keyword": "Then "
});
formatter.match({
  "location": "StraightFlushStepDefinitions.storePokerHand(DataTable)"
});
formatter.result({
  "duration": 95200,
  "status": "passed"
});
formatter.match({
  "location": "StraightFlushStepDefinitions.checkCardsForStraightFlush()"
});
formatter.result({
  "duration": 1203200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "A four of a kind poker hand should pass for isFourKind test in any order",
  "description": "",
  "id": "test-recognize-all-nine-poker-hands-with-all-possible-card-permutations;a-four-of-a-kind-poker-hand-should-pass-for-isfourkind-test-in-any-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "A four of a kind poker hand in any order",
  "rows": [
    {
      "cells": [
        "S5",
        "H5",
        "C5",
        "D5",
        "S9"
      ],
      "line": 15
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I should get true for four of a kind in any poker hand permutation",
  "keyword": "Then "
});
formatter.match({
  "location": "FourOfKindStepDefinitions.storePokerHand(DataTable)"
});
formatter.result({
  "duration": 105900,
  "status": "passed"
});
formatter.match({
  "location": "FourOfKindStepDefinitions.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 977800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "A full house hand should pass for isFullHouse test in any order",
  "description": "",
  "id": "test-recognize-all-nine-poker-hands-with-all-possible-card-permutations;a-full-house-hand-should-pass-for-isfullhouse-test-in-any-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "A full house poker hand in any order",
  "rows": [
    {
      "cells": [
        "H8",
        "C8",
        "S8",
        "DA",
        "SA"
      ],
      "line": 20
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I should get true for full house in any poker hand permutation",
  "keyword": "Then "
});
formatter.match({
  "location": "FullHouseStepDefinitions.storePokerHand(DataTable)"
});
formatter.result({
  "duration": 105400,
  "status": "passed"
});
formatter.match({
  "location": "FullHouseStepDefinitions.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 507800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "A flush hand should pass for isFlush test in any order",
  "description": "",
  "id": "test-recognize-all-nine-poker-hands-with-all-possible-card-permutations;a-flush-hand-should-pass-for-isflush-test-in-any-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "A flush poker hand in any order",
  "rows": [
    {
      "cells": [
        "S6",
        "S3",
        "S8",
        "SJ",
        "SA"
      ],
      "line": 25
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I should get true for flush in any poker hand permutation",
  "keyword": "Then "
});
formatter.match({
  "location": "FlushStepDefinitions.storePokerHand(DataTable)"
});
formatter.result({
  "duration": 104400,
  "status": "passed"
});
formatter.match({
  "location": "FlushStepDefinitions.checkCardsForRoyalFlush()"
});
formatter.result({
  "duration": 998900,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "A straight hand should pass for isStraight test in any order",
  "description": "",
  "id": "test-recognize-all-nine-poker-hands-with-all-possible-card-permutations;a-straight-hand-should-pass-for-isstraight-test-in-any-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "A straight poker hand in any order",
  "rows": [
    {
      "cells": [
        "H5",
        "S6",
        "D7",
        "S8",
        "C9"
      ],
      "line": 30
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I should get true for straight in any poker hand permutation",
  "keyword": "Then "
});
formatter.match({
  "location": "StraightStepDefinitions.storePokerHand(DataTable)"
});
formatter.result({
  "duration": 97600,
  "status": "passed"
});
formatter.match({
  "location": "StraightStepDefinitions.checkCardsForStraightFlush()"
});
formatter.result({
  "duration": 1222500,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "A three of a kind poker hand should pass for isThreeKind test in any order",
  "description": "",
  "id": "test-recognize-all-nine-poker-hands-with-all-possible-card-permutations;a-three-of-a-kind-poker-hand-should-pass-for-isthreekind-test-in-any-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "A three of a kind poker hand in any order",
  "rows": [
    {
      "cells": [
        "H5",
        "S6",
        "D8",
        "H6",
        "C6"
      ],
      "line": 35
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I should get true for three of a kind in any poker hand permutation",
  "keyword": "Then "
});
formatter.match({
  "location": "ThreeOfKindStepDefinitions.storePokerHand(DataTable)"
});
formatter.result({
  "duration": 118300,
  "status": "passed"
});
formatter.match({
  "location": "ThreeOfKindStepDefinitions.checkCardsForStraightFlush()"
});
formatter.result({
  "duration": 480200,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "A two pair of a poker hand should pass for isTwoPair test in any order",
  "description": "",
  "id": "test-recognize-all-nine-poker-hands-with-all-possible-card-permutations;a-two-pair-of-a-poker-hand-should-pass-for-istwopair-test-in-any-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "A two pair poker hand in any order",
  "rows": [
    {
      "cells": [
        "H5",
        "S5",
        "D8",
        "H6",
        "C6"
      ],
      "line": 40
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I should get true for two pair in any poker hand permutation",
  "keyword": "Then "
});
formatter.match({
  "location": "TwoPairStepDefinitions.storePokerHand(DataTable)"
});
formatter.result({
  "duration": 90300,
  "status": "passed"
});
formatter.match({
  "location": "TwoPairStepDefinitions.checkCardsForStraightFlush()"
});
formatter.result({
  "duration": 865500,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "A pair of a poker hand should pass for isPair test in any order",
  "description": "",
  "id": "test-recognize-all-nine-poker-hands-with-all-possible-card-permutations;a-pair-of-a-poker-hand-should-pass-for-ispair-test-in-any-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "A pair poker hand in any order",
  "rows": [
    {
      "cells": [
        "H5",
        "S5",
        "D8",
        "H6",
        "C6"
      ],
      "line": 45
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I should get true for pair in any poker hand permutation",
  "keyword": "Then "
});
formatter.match({
  "location": "PairStepDefinitions.storePokerHand(DataTable)"
});
formatter.result({
  "duration": 106600,
  "status": "passed"
});
formatter.match({
  "location": "PairStepDefinitions.checkCardsForStraightFlush()"
});
formatter.result({
  "duration": 790200,
  "status": "passed"
});
formatter.uri("SpecialWinners.feature");
formatter.feature({
  "line": 1,
  "name": "Determining winners on special hands for AIP and HTB",
  "description": "",
  "id": "determining-winners-on-special-hands-for-aip-and-htb",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "AIP and HTB both have a Royal FLush but AIP wins because it has a higher suit",
  "description": "",
  "id": "determining-winners-on-special-hands-for-aip-and-htb;aip-and-htb-both-have-a-royal-flush-but-aip-wins-because-it-has-a-higher-suit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "AIP has a spades Royal Flush",
  "rows": [
    {
      "cells": [
        "S10",
        "SK",
        "SQ",
        "SJ",
        "SA"
      ],
      "line": 5
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "HTB has a hearts Royal Flush",
  "rows": [
    {
      "cells": [
        "H10",
        "HJ",
        "HQ",
        "HK",
        "HA"
      ],
      "line": 7
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "AIP should win because spades is the higher suit",
  "keyword": "Then "
});
formatter.match({
  "location": "RFSuitWinner.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 124600,
  "status": "passed"
});
formatter.match({
  "location": "RFSuitWinner.storeHTBPokerHand(DataTable)"
});
formatter.result({
  "duration": 52900,
  "status": "passed"
});
formatter.match({
  "location": "RFSuitWinner.winnerIs()"
});
formatter.result({
  "duration": 286600,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "AIP and HTB both have a Straight FLush but AIP wins because it has a higher card",
  "description": "",
  "id": "determining-winners-on-special-hands-for-aip-and-htb;aip-and-htb-both-have-a-straight-flush-but-aip-wins-because-it-has-a-higher-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "AIP has a hearts Straight Flush with a high card",
  "rows": [
    {
      "cells": [
        "H10",
        "H9",
        "H8",
        "H7",
        "H6"
      ],
      "line": 12
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "HTB has a spades Straight Flush with a low card",
  "rows": [
    {
      "cells": [
        "S9",
        "S8",
        "S7",
        "S6",
        "S5"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "AIP should win because it has the higher high card",
  "keyword": "Then "
});
formatter.match({
  "location": "SFHighCardWinner.storeAIBPokerHand(DataTable)"
});
formatter.result({
  "duration": 121200,
  "status": "passed"
});
formatter.match({
  "location": "SFHighCardWinner.storeHTBPokerHand(DataTable)"
});
formatter.result({
  "duration": 42100,
  "status": "passed"
});
formatter.match({
  "location": "SFHighCardWinner.winnerIs()"
});
formatter.result({
  "duration": 204900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "AIP and HTB both have a Straight FLush but AIP wins because it has a higher suit",
  "description": "",
  "id": "determining-winners-on-special-hands-for-aip-and-htb;aip-and-htb-both-have-a-straight-flush-but-aip-wins-because-it-has-a-higher-suit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "AIP has a spades Straight Flush",
  "rows": [
    {
      "cells": [
        "S10",
        "S9",
        "S8",
        "S7",
        "S6"
      ],
      "line": 19
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "HTB has a hearts Straight Flush",
  "rows": [
    {
      "cells": [
        "H10",
        "H9",
        "H8",
        "H7",
        "H6"
      ],
      "line": 21
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "AIP should win because spades SF is higher",
  "keyword": "Then "
});
formatter.match({
  "location": "SFSuitWinner.storeAIBPokerHand(DataTable)"
});
formatter.result({
  "duration": 99300,
  "status": "passed"
});
formatter.match({
  "location": "SFSuitWinner.storeHTBPokerHand(DataTable)"
});
formatter.result({
  "duration": 50100,
  "status": "passed"
});
formatter.match({
  "location": "SFSuitWinner.winnerIs()"
});
formatter.result({
  "duration": 148800,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "AIP and HTB both have a Four of a kind but AIP wins because it has the higher quadruplet",
  "description": "",
  "id": "determining-winners-on-special-hands-for-aip-and-htb;aip-and-htb-both-have-a-four-of-a-kind-but-aip-wins-because-it-has-the-higher-quadruplet",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "AIP has a four of a kind with a high quadruplet",
  "rows": [
    {
      "cells": [
        "S10",
        "D10",
        "H10",
        "C10",
        "S6"
      ],
      "line": 26
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "HTB has a four of a kind with a low quadruplet",
  "rows": [
    {
      "cells": [
        "H9",
        "C9",
        "D9",
        "S9",
        "H6"
      ],
      "line": 28
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "AIP should win because it has the higher quadruplet",
  "keyword": "Then "
});
formatter.match({
  "location": "FourOfKindHighWinner.storeAIBPokerHand(DataTable)"
});
formatter.result({
  "duration": 197900,
  "status": "passed"
});
formatter.match({
  "location": "FourOfKindHighWinner.storeHTBPokerHand(DataTable)"
});
formatter.result({
  "duration": 45600,
  "status": "passed"
});
formatter.match({
  "location": "FourOfKindHighWinner.winnerIs()"
});
formatter.result({
  "duration": 56900,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "AIP and HTB both have a Full House but AIP wins because it has the higher triplet",
  "description": "",
  "id": "determining-winners-on-special-hands-for-aip-and-htb;aip-and-htb-both-have-a-full-house-but-aip-wins-because-it-has-the-higher-triplet",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "AIP has a full house with a high triplet",
  "rows": [
    {
      "cells": [
        "S10",
        "D10",
        "H10",
        "C6",
        "S6"
      ],
      "line": 33
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "HTB has a full house with a low triplet",
  "rows": [
    {
      "cells": [
        "H9",
        "C9",
        "D9",
        "D6",
        "H6"
      ],
      "line": 35
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "AIP should win because it has the higher fullhouse triplet",
  "keyword": "Then "
});
formatter.match({
  "location": "FullHouseHighWinner.storeAIBPokerHand(DataTable)"
});
formatter.result({
  "duration": 301200,
  "status": "passed"
});
formatter.match({
  "location": "FullHouseHighWinner.storeHTBPokerHand(DataTable)"
});
formatter.result({
  "duration": 40000,
  "status": "passed"
});
formatter.match({
  "location": "FullHouseHighWinner.winnerIs()"
});
formatter.result({
  "duration": 101600,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "AIP and HTB both have a Three of a kind but AIP wins because it has the higher triplet",
  "description": "",
  "id": "determining-winners-on-special-hands-for-aip-and-htb;aip-and-htb-both-have-a-three-of-a-kind-but-aip-wins-because-it-has-the-higher-triplet",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "AIP has a three of a kind with a high triplet",
  "rows": [
    {
      "cells": [
        "S10",
        "D10",
        "H10",
        "C6",
        "S7"
      ],
      "line": 40
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "HTB has a three of a kind with a low triplet",
  "rows": [
    {
      "cells": [
        "H9",
        "C9",
        "D9",
        "D7",
        "H6"
      ],
      "line": 42
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "AIP should win because it has the higher three of a kind triplet",
  "keyword": "Then "
});
formatter.match({
  "location": "ThreeOfKindHighWinner.storeAIBPokerHand(DataTable)"
});
formatter.result({
  "duration": 193800,
  "status": "passed"
});
formatter.match({
  "location": "ThreeOfKindHighWinner.storeHTBPokerHand(DataTable)"
});
formatter.result({
  "duration": 38200,
  "status": "passed"
});
formatter.match({
  "location": "ThreeOfKindHighWinner.winnerIs()"
});
formatter.result({
  "duration": 249300,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "AIP and HTB both have a Straight but AIP wins because it has the higher high card",
  "description": "",
  "id": "determining-winners-on-special-hands-for-aip-and-htb;aip-and-htb-both-have-a-straight-but-aip-wins-because-it-has-the-higher-high-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "AIP has a straight with a high card",
  "rows": [
    {
      "cells": [
        "S10",
        "H9",
        "C8",
        "S6",
        "D7"
      ],
      "line": 47
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "HTB has a straight with a low card",
  "rows": [
    {
      "cells": [
        "H9",
        "C8",
        "D6",
        "C7",
        "H5"
      ],
      "line": 49
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "AIP should win because it has the higher high card Straight",
  "keyword": "Then "
});
formatter.match({
  "location": "StraightHighWinner.storeAIBPokerHand(DataTable)"
});
formatter.result({
  "duration": 77400,
  "status": "passed"
});
formatter.match({
  "location": "StraightHighWinner.storeHTBPokerHand(DataTable)"
});
formatter.result({
  "duration": 31200,
  "status": "passed"
});
formatter.match({
  "location": "StraightHighWinner.winnerIs()"
});
formatter.result({
  "duration": 120400,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "AIP and HTB both have a Straight but AIP wins because it has the higher high card",
  "description": "",
  "id": "determining-winners-on-special-hands-for-aip-and-htb;aip-and-htb-both-have-a-straight-but-aip-wins-because-it-has-the-higher-high-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 53,
  "name": "AIP has a straight with a high card",
  "rows": [
    {
      "cells": [
        "S10",
        "H9",
        "C8",
        "S6",
        "D7"
      ],
      "line": 54
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "HTB has a straight with a low card",
  "rows": [
    {
      "cells": [
        "H9",
        "C8",
        "D6",
        "C7",
        "H5"
      ],
      "line": 56
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "AIP should win because it has the higher high card Straight",
  "keyword": "Then "
});
formatter.match({
  "location": "StraightHighWinner.storeAIBPokerHand(DataTable)"
});
formatter.result({
  "duration": 83200,
  "status": "passed"
});
formatter.match({
  "location": "StraightHighWinner.storeHTBPokerHand(DataTable)"
});
formatter.result({
  "duration": 63300,
  "status": "passed"
});
formatter.match({
  "location": "StraightHighWinner.winnerIs()"
});
formatter.result({
  "duration": 83900,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "AIP and HTB both have a Straight but AIP wins because it has the higher suit high card",
  "description": "",
  "id": "determining-winners-on-special-hands-for-aip-and-htb;aip-and-htb-both-have-a-straight-but-aip-wins-because-it-has-the-higher-suit-high-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 60,
  "name": "AIP has a straight with a high suit card",
  "rows": [
    {
      "cells": [
        "S9",
        "H8",
        "C6",
        "S7",
        "D5"
      ],
      "line": 61
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "HTB has a straight with a low suit card",
  "rows": [
    {
      "cells": [
        "H9",
        "C8",
        "D6",
        "C7",
        "H5"
      ],
      "line": 63
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "AIP should win because it has the higher suit high card Straight",
  "keyword": "Then "
});
formatter.match({
  "location": "StraightSuitWinner.storeAIBPokerHand(DataTable)"
});
formatter.result({
  "duration": 104500,
  "status": "passed"
});
formatter.match({
  "location": "StraightSuitWinner.storeHTBPokerHand(DataTable)"
});
formatter.result({
  "duration": 31700,
  "status": "passed"
});
formatter.match({
  "location": "StraightSuitWinner.winnerIs()"
});
formatter.result({
  "duration": 211700,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "AIP and HTB both have a  the same two pair, AIP wins because it has the higher suit",
  "description": "",
  "id": "determining-winners-on-special-hands-for-aip-and-htb;aip-and-htb-both-have-a--the-same-two-pair,-aip-wins-because-it-has-the-higher-suit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 67,
  "name": "AIP has a two pair with high suit pair",
  "rows": [
    {
      "cells": [
        "S9",
        "H9",
        "C10",
        "S7",
        "D7"
      ],
      "line": 68
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "HTB has a two pair with low suit pair",
  "rows": [
    {
      "cells": [
        "H9",
        "C9",
        "D6",
        "C7",
        "H7"
      ],
      "line": 70
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "AIP should win because it has the higher suit high pair",
  "keyword": "Then "
});
formatter.match({
  "location": "TwoPairSuitWinner.storeAIBPokerHand(DataTable)"
});
formatter.result({
  "duration": 234800,
  "status": "passed"
});
formatter.match({
  "location": "TwoPairSuitWinner.storeHTBPokerHand(DataTable)"
});
formatter.result({
  "duration": 48500,
  "status": "passed"
});
formatter.match({
  "location": "TwoPairSuitWinner.winnerIs()"
});
formatter.result({
  "duration": 198700,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "AIP and HTB have a  distinct two pairs, AIP wins because it has the higher rank pair",
  "description": "",
  "id": "determining-winners-on-special-hands-for-aip-and-htb;aip-and-htb-have-a--distinct-two-pairs,-aip-wins-because-it-has-the-higher-rank-pair",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 74,
  "name": "AIP has a two pair with high rank pair",
  "rows": [
    {
      "cells": [
        "S9",
        "H9",
        "C10",
        "S7",
        "D7"
      ],
      "line": 75
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "HTB has a two pair with low rank pair",
  "rows": [
    {
      "cells": [
        "H8",
        "C8",
        "D6",
        "C6",
        "H7"
      ],
      "line": 77
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "AIP should win because it has the higher rank high pair",
  "keyword": "Then "
});
formatter.match({
  "location": "TwoPairRankWinner.storeAIBPokerHand(DataTable)"
});
formatter.result({
  "duration": 118500,
  "status": "passed"
});
formatter.match({
  "location": "TwoPairRankWinner.storeHTBPokerHand(DataTable)"
});
formatter.result({
  "duration": 49000,
  "status": "passed"
});
formatter.match({
  "location": "TwoPairRankWinner.winnerIs()"
});
formatter.result({
  "duration": 125900,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "AIP and HTB have a the same rank pairs, AIP wins because it has the higher suit pair",
  "description": "",
  "id": "determining-winners-on-special-hands-for-aip-and-htb;aip-and-htb-have-a-the-same-rank-pairs,-aip-wins-because-it-has-the-higher-suit-pair",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 81,
  "name": "AIP has a pair with a higher suit pair",
  "rows": [
    {
      "cells": [
        "S9",
        "H9",
        "C2",
        "S3",
        "D6"
      ],
      "line": 82
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 83,
  "name": "HTB has a two pair with a lower suit pair",
  "rows": [
    {
      "cells": [
        "H9",
        "C9",
        "D2",
        "C6",
        "H7"
      ],
      "line": 84
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "AIP should win because it has the higher suit among the two pairs",
  "keyword": "Then "
});
formatter.match({
  "location": "PairSuitWinner.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 239600,
  "status": "passed"
});
formatter.match({
  "location": "PairSuitWinner.storeHTBPokerHand(DataTable)"
});
formatter.result({
  "duration": 1177600,
  "status": "passed"
});
formatter.match({
  "location": "PairSuitWinner.winnerIs()"
});
formatter.result({
  "duration": 185900,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "AIP and HTB both have a high card of the same rank, AIP wins because his card has a higher suit",
  "description": "",
  "id": "determining-winners-on-special-hands-for-aip-and-htb;aip-and-htb-both-have-a-high-card-of-the-same-rank,-aip-wins-because-his-card-has-a-higher-suit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 88,
  "name": "AIP has a high card with a high suit",
  "rows": [
    {
      "cells": [
        "S9",
        "H4",
        "C2",
        "S3",
        "D6"
      ],
      "line": 89
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 90,
  "name": "HTB has a high card with a low suit",
  "rows": [
    {
      "cells": [
        "H9",
        "C4",
        "D2",
        "C6",
        "H7"
      ],
      "line": 91
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "AIP should win because it has the higher suit card",
  "keyword": "Then "
});
formatter.match({
  "location": "HighCardSuitWinner.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 94900,
  "status": "passed"
});
formatter.match({
  "location": "HighCardSuitWinner.storeHTBPokerHand(DataTable)"
});
formatter.result({
  "duration": 54800,
  "status": "passed"
});
formatter.match({
  "location": "HighCardSuitWinner.winnerIs()"
});
formatter.result({
  "duration": 137200,
  "status": "passed"
});
formatter.scenario({
  "line": 94,
  "name": "AIP and HTB both have a high card, AIP wins because his card has a higher rank",
  "description": "",
  "id": "determining-winners-on-special-hands-for-aip-and-htb;aip-and-htb-both-have-a-high-card,-aip-wins-because-his-card-has-a-higher-rank",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 95,
  "name": "AIP has a high card with a high rank",
  "rows": [
    {
      "cells": [
        "H10",
        "H4",
        "C2",
        "S3",
        "D6"
      ],
      "line": 96
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 97,
  "name": "HTB has a high card with a low rank",
  "rows": [
    {
      "cells": [
        "S9",
        "C4",
        "D2",
        "C6",
        "H7"
      ],
      "line": 98
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "AIP should win because it has the higher rank card",
  "keyword": "Then "
});
formatter.match({
  "location": "HighCardRankWinner.storeAIPPokerHand(DataTable)"
});
formatter.result({
  "duration": 121800,
  "status": "passed"
});
formatter.match({
  "location": "HighCardRankWinner.storeHTBPokerHand(DataTable)"
});
formatter.result({
  "duration": 37600,
  "status": "passed"
});
formatter.match({
  "location": "HighCardRankWinner.winnerIs()"
});
formatter.result({
  "duration": 135800,
  "status": "passed"
});
formatter.scenario({
  "line": 101,
  "name": "AIP and HTB both have a flush, AIP wins because his flush has a higher high card",
  "description": "",
  "id": "determining-winners-on-special-hands-for-aip-and-htb;aip-and-htb-both-have-a-flush,-aip-wins-because-his-flush-has-a-higher-high-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 102,
  "name": "AIP has a high card flush",
  "rows": [
    {
      "cells": [
        "S10",
        "S8",
        "S6",
        "S4",
        "S3"
      ],
      "line": 103
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 104,
  "name": "HTB has a low card flush",
  "rows": [
    {
      "cells": [
        "H10",
        "H8",
        "H6",
        "H4",
        "H2"
      ],
      "line": 105
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "AIP should win because it has the higher high card flush",
  "keyword": "Then "
});
formatter.match({
  "location": "FlushSuitWInnerC1.storeAIBPokerHand(DataTable)"
});
formatter.result({
  "duration": 178500,
  "status": "passed"
});
formatter.match({
  "location": "FlushSuitWInnerC1.storeHTBPokerHand(DataTable)"
});
formatter.result({
  "duration": 29900,
  "status": "passed"
});
formatter.match({
  "location": "FlushSuitWInnerC1.winnerIs()"
});
formatter.result({
  "duration": 319900,
  "status": "passed"
});
formatter.scenario({
  "line": 108,
  "name": "AIP and HTB both have a flush, AIP wins because his flush has a higher suit, case one",
  "description": "",
  "id": "determining-winners-on-special-hands-for-aip-and-htb;aip-and-htb-both-have-a-flush,-aip-wins-because-his-flush-has-a-higher-suit,-case-one",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 109,
  "name": "AIP has a higher suit flush case one",
  "rows": [
    {
      "cells": [
        "S10",
        "S4",
        "S2",
        "S3",
        "S6"
      ],
      "line": 110
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 111,
  "name": "HTB has a lower suit flush case one",
  "rows": [
    {
      "cells": [
        "H10",
        "H4",
        "H2",
        "H3",
        "H6"
      ],
      "line": 112
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "AIP should win because it has the higher suit flush case one",
  "keyword": "Then "
});
formatter.match({
  "location": "FlushSuitWinner.storeAIBPokerHand(DataTable)"
});
formatter.result({
  "duration": 94200,
  "status": "passed"
});
formatter.match({
  "location": "FlushSuitWinner.storeHTBPokerHand(DataTable)"
});
formatter.result({
  "duration": 2291500,
  "status": "passed"
});
formatter.match({
  "location": "FlushSuitWinner.winnerIs()"
});
formatter.result({
  "duration": 154800,
  "status": "passed"
});
formatter.scenario({
  "line": 115,
  "name": "AIP and HTB both have a flush, AIP wins because his flush has a higher suit, case two",
  "description": "",
  "id": "determining-winners-on-special-hands-for-aip-and-htb;aip-and-htb-both-have-a-flush,-aip-wins-because-his-flush-has-a-higher-suit,-case-two",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 116,
  "name": "AIP has a higher suit flush case two",
  "rows": [
    {
      "cells": [
        "S10",
        "S8",
        "S6",
        "S4",
        "S3"
      ],
      "line": 117
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 118,
  "name": "HTB has a lower suit flush case two",
  "rows": [
    {
      "cells": [
        "H10",
        "H8",
        "H6",
        "H3",
        "H2"
      ],
      "line": 119
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "AIP should win because it has the higher suit flush case two",
  "keyword": "Then "
});
formatter.match({
  "location": "FlashSuitWinnerC2.storeAIBPokerHand(DataTable)"
});
formatter.result({
  "duration": 104400,
  "status": "passed"
});
formatter.match({
  "location": "FlashSuitWinnerC2.storeHTBPokerHand(DataTable)"
});
formatter.result({
  "duration": 37200,
  "status": "passed"
});
formatter.match({
  "location": "FlashSuitWinnerC2.winnerIs()"
});
formatter.result({
  "duration": 119600,
  "status": "passed"
});
formatter.scenario({
  "line": 122,
  "name": "AIP and HTB both have a flush, AIP wins because his flush has a higher suit, case two",
  "description": "",
  "id": "determining-winners-on-special-hands-for-aip-and-htb;aip-and-htb-both-have-a-flush,-aip-wins-because-his-flush-has-a-higher-suit,-case-two",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 123,
  "name": "AIP has a higher suit flush case three",
  "rows": [
    {
      "cells": [
        "S10",
        "S8",
        "S6",
        "S4",
        "S3"
      ],
      "line": 124
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 125,
  "name": "HTB has a lower suit flush case three",
  "rows": [
    {
      "cells": [
        "H10",
        "H8",
        "H5",
        "H3",
        "H2"
      ],
      "line": 126
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "AIP should win because it has the higher suit flush case three",
  "keyword": "Then "
});
formatter.match({
  "location": "FlashSuitWinnerC3.storeAIBPokerHand(DataTable)"
});
formatter.result({
  "duration": 81800,
  "status": "passed"
});
formatter.match({
  "location": "FlashSuitWinnerC3.storeHTBPokerHand(DataTable)"
});
formatter.result({
  "duration": 33300,
  "status": "passed"
});
formatter.match({
  "location": "FlashSuitWinnerC3.winnerIs()"
});
formatter.result({
  "duration": 115800,
  "status": "passed"
});
formatter.scenario({
  "line": 129,
  "name": "AIP and HTB both have a flush, AIP wins because his flush has a higher suit, case two",
  "description": "",
  "id": "determining-winners-on-special-hands-for-aip-and-htb;aip-and-htb-both-have-a-flush,-aip-wins-because-his-flush-has-a-higher-suit,-case-two",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 130,
  "name": "AIP has a higher suit flush case four",
  "rows": [
    {
      "cells": [
        "S10",
        "S8",
        "S6",
        "S4",
        "S3"
      ],
      "line": 131
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 132,
  "name": "HTB has a lower suit flush case four",
  "rows": [
    {
      "cells": [
        "H10",
        "H7",
        "H5",
        "H3",
        "H2"
      ],
      "line": 133
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "AIP should win because it has the higher suit flush case four",
  "keyword": "Then "
});
formatter.match({
  "location": "FlashSuitWinnerC4.storeAIBPokerHand(DataTable)"
});
formatter.result({
  "duration": 84700,
  "status": "passed"
});
formatter.match({
  "location": "FlashSuitWinnerC4.storeHTBPokerHand(DataTable)"
});
formatter.result({
  "duration": 32300,
  "status": "passed"
});
formatter.match({
  "location": "FlashSuitWinnerC4.winnerIs()"
});
formatter.result({
  "duration": 138800,
  "status": "passed"
});
});