QUEUE_TYPE = {
    CUSTOM: 'CUSTOM', //Custom games
    NORMAL_5x5_BLIND: 'NORMAL_5x5_BLIND', //Normal 5v5 Blind Pick games
    BOT_5x5: 'BOT_5x5', //Historical Summoner's Rift Coop vs AI games
    BOT_5x5_INTRO: 'BOT_5x5_INTRO', //Summoner's Rift Coop vs AI Intro Bot games
    BOT_5x5_BEGINNER: 'BOT_5x5_BEGINNER', //Summoner's Rift Coop vs AI Beginner Bot games
    BOT_5x5_INTERMEDIATE: 'BOT_5x5_INTERMEDIATE', //Historical Summoner's Rift Coop vs AI Intermediate Bot games
    NORMAL_3x3: 'NORMAL_3x3', //Normal 3v3 games
    NORMAL_5x5_DRAFT: 'NORMAL_5x5_DRAFT', //Normal 5v5 Draft Pick games
    ODIN_5x5_BLIND: 'ODIN_5x5_BLIND', //Dominion 5v5 Blind Pick games
    ODIN_5x5_DRAFT: 'ODIN_5x5_DRAFT', //Dominion 5v5 Draft Pick games
    BOT_ODIN_5x5: 'BOT_ODIN_5x5', //Dominion Coop vs AI games
    RANKED_SOLO_5x5: 'RANKED_SOLO_5x5', //Ranked Solo 5v5 games
    RANKED_PREMADE_3x3: 'RANKED_PREMADE_3x3', //Ranked Premade 3v3 games
    RANKED_PREMADE_5x5: 'RANKED_PREMADE_5x5', //Ranked Premade 5v5 games
    RANKED_TEAM_3x3: 'RANKED_TEAM_3x3', //Ranked Team 3v3 games
    RANKED_TEAM_5x5: 'RANKED_TEAM_5x5', //Ranked Team 5v5 games
    BOT_TT_3x3: 'BOT_TT_3x3', //Twisted Treeline Coop vs AI games
    GROUP_FINDER_5x5: 'GROUP_FINDER_5x5', //Team Builder games
    ARAM_5x5: 'ARAM_5x5', //ARAM games
    ONEFORALL_5x5: 'ONEFORALL_5x5', //One for All games
    FIRSTBLOOD_1x1: 'FIRSTBLOOD_1x1', //Snowdown Showdown 1v1 games
    FIRSTBLOOD_2x2: 'FIRSTBLOOD_2x2', //Snowdown Showdown 2v2 games
    SR_6x6: 'SR_6x6', //Hexakill games
    URF_5x5: 'URF_5x5', //Ultra Rapid Fire games
    BOT_URF_5x5: 'BOT_URF_5x5', //Ultra Rapid Fire games played against AI games
    NIGHTMARE_BOT_5x5_RANK1: 'NIGHTMARE_BOT_5x5_RANK1', //Doom Bots Rank 1 games
    NIGHTMARE_BOT_5x5_RANK1: 'NIGHTMARE_BOT_5x5_RANK1', //Doom Bots Rank 2 games
    NIGHTMARE_BOT_5x5_RANK1: 'NIGHTMARE_BOT_5x5_RANK1' //Doom Bots Rank 5 games
};

MAP_TYPE = {
    SUMMONERS_RIFT_SUMMER: 1,
    SUMMONERS_RIFT_AUTUMN: 2,
    TUTORIAL: 3,//	The Proving Grounds	Tutorial Map
    TWISTED_TREELINE_ORIG: 4,//	Twisted Treeline	Original Version
    CRYSTAL_SCAR: 8,
    TWISTED_TREELINE_CURRENT: 10,
    HOWLING_ABYSS: 12
};

GAME_MODE = {
    CLASSIC: 'CLASSIC', //	Classic Summoner's Rift and Twisted Treeline games
    ODIN: 'ODIN',//	Dominion/Crystal Scar games
    ARAM: 'ARAM',//	ARAM games
    TUTORIAL: 'TUTORIAL',//	Tutorial games
    ONEFORALL: 'ONEFORALL',	//One for All games
    FIRSTBLOOD: 'FIRSTBLOOD'//	Snowdown Showdown games
};

GAME_TYPE = {
    CUSTOM_GAME: 'CUSTOM_GAME', //Custom games
    TUTORIAL_GAME: 'TUTORIAL_GAME', //Tutorial games
    MATCHED_GAME: 'MATCHED_GAME' // Matched
};

SUB_TYPE = {
    NONE: 'NONE', //Custom games
    NORMAL: 'NORMAL', //Summoner's Rift unranked games
    NORMAL_3x3: 'NORMAL_3x3', //Twisted Treeline unranked games
    ODIN_UNRANKED: 'ODIN_UNRANKED', //Dominion/Crystal Scar games
    ARAM_UNRANKED_5x5: 'ARAM_UNRANKED_5x5', //ARAM / Howling Abyss games
    BOT: 'BOT',//	Summoner's Rift and Crystal Scar games played against Intro, Beginner, or Intermediate AI
    BOT_3x3: 'BOT_3x3', //Twisted Treeline games played against AI
    RANKED_SOLO_5x5: 'RANKED_SOLO_5x5', //Summoner's Rift ranked solo queue games
    RANKED_TEAM_3x3: 'RANKED_TEAM_3x3', //Twisted Treeline ranked team games
    RANKED_TEAM_5x5: 'RANKED_TEAM_5x5', //Summoner's Rift ranked team games
    ONEFORALL_5x5: 'ONEFORALL_5x5', //One for All games
    FIRSTBLOOD_1x1: 'FIRSTBLOOD_1x1', //Snowdown Showdown 1x1 games
    FIRSTBLOOD_2x2: 'FIRSTBLOOD_2x2', //Snowdown Showdown 2x2 games
    SR_6x6: 'SR_6x6', //Hexakill games
    CAP_5x5: 'CAP_5x5', //Team Builder games
    URF: 'URF', //Ultra Rapid Fire games
    URF_BOT: 'URF_BOT', //Ultra Rapid Fire games played against AI
    NIGHTMARE_BOT: 'NIGHTMARE_BOT' //Summoner's Rift games played against Nightmare AI
};


PLAYER_STAT = {
    Unranked: 'Unranked', //Summoner's Rift unranked games
    Unranked3x3: 'Unranked3x3', //Twisted Treeline unranked games
    OdinUnranked: 'OdinUnranked', //Dominion/Crystal Scar games
    AramUnranked5x5: 'AramUnranked5x5', //ARAM / Howling Abyss games
    CoopVsAI: 'CoopVsAI', //Summoner's Rift and Crystal Scar games played against AI
    CoopVsAI3x3: 'CoopVsAI3x3', //Twisted Treeline games played against AI
    RankedSolo5x5: 'RankedSolo5x5', //Summoner's Rift ranked solo queue games
    RankedTeam3x3: 'RankedTeam3x3', //Twisted Treeline ranked team games
    RankedTeam5x5: 'RankedTeam5x5', //Summoner's Rift ranked team games
    OneForAll5x5: 'OneForAll5x5', //One for All games
    FirstBlood1x1: 'FirstBlood1x1', //Snowdown Showdown 1x1 games
    FirstBlood2x2: 'FirstBlood2x2', //Snowdown Showdown 2x2 games
    SummonersRift6x6: 'SummonersRift6x6', //Hexakill games
    CAP5x5: 'CAP5x5', //Team Builder games
    URF: 'URF', //Ultra Rapid Fire games
    URFBots: 'URFBots' //Ultra Rapid Fire games played against AI
};

runes = {
    color: {
        RED1: 1,
        RED2: 2,
        RED3: 3,
        RED4: 4,
        RED5: 5,
        RED6: 6,
        RED7: 7,
        RED8: 8,
        RED9: 9,
        YELLOW1: 10,
        YELLOW2: 11,
        YELLOW3: 12,
        YELLOW4: 13,
        YELLOW5: 14,
        YELLOW6: 15,
        YELLOW7: 16,
        YELLOW8: 17,
        YELLOW9: 18,
        BLUE1: 19,
        BLUE2: 20,
        BLUE3: 21,
        BLUE4: 22,
        BLUE5: 23,
        BLUE6: 24,
        BLUE7: 25,
        BLUE8: 26,
        BLUE9: 27,
        QUINT1: 28,
        QUINT2: 29,
        QUINT3: 30
    },
    name: {
        MARK1: 1,
        MARK2: 2,
        MARK3: 3,
        MARK4: 4,
        MARK5: 5,
        MARK6: 6,
        MARK7: 7,
        MARK8: 8,
        MARK9: 9,
        SEAL1: 10,
        SEAL2: 11,
        SEAL3: 12,
        SEAL4: 13,
        SEAL5: 14,
        SEAL6: 15,
        SEAL7: 16,
        SEAL8: 17,
        SEAL9: 18,
        GLYPH1: 19,
        GLYPH2: 20,
        GLYPH3: 21,
        GLYPH4: 22,
        GLYPH5: 23,
        GLYPH6: 24,
        GLYPH7: 25,
        GLYPH8: 26,
        GLYPH9: 27,
        QUINTESSENCE1: 28,
        QUINTESSENCE2: 29,
        QUINTESSENCE3: 30
    },
    location: {
        SLOT1: 1,
        SLOT2: 2,
        SLOT3: 3,
        SLOT4: 4,
        SLOT5: 5,
        SLOT6: 6,
        SLOT7: 7,
        SLOT8: 8,
        SLOT9: 9,
        SLOT10: 10,
        SLOT11: 11,
        SLOT12: 12,
        SLOT13: 13,
        SLOT14: 14,
        SLOT15: 15,
        SLOT16: 16,
        SLOT17: 17,
        SLOT18: 18,
        SLOT19: 19,
        SLOT20: 20,
        SLOT21: 21,
        SLOT22: 22,
        SLOT23: 23,
        SLOT24: 24,
        SLOT25: 25,
        SLOT26: 26,
        SLOT27: 27,
        SLOT28: 28,
        SLOT29: 29,
        SLOT30: 30
    }
};

exports.QUEUE_TYPE = QUEUE_TYPE;
exports.GAME_TYPE = GAME_TYPE;
exports.GAME_MODE = GAME_MODE;
exports.MAP_TYPE = MAP_TYPE;
exports.SUB_TYPE = SUB_TYPE;
exports.PLAYER_STAT_TYPE = PLAYER_STAT;
exports.RUNE_SLOT_BY_COLOR = runes.color;
exports.RUNE_SLOT_BY_NAME = runes.name;
exports.RUNE_SLOT_BY_LOCATION = runes.location;
