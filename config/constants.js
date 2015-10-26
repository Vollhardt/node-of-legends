/**
 * @desc constants for the project
 * @module constants
 */

/**
 * Queue type for ranked queries
 * @enum
 * @readonly
 * @static
 */
RANKED_QUEUE_TYPE = {
    /**Solo/Duo Summoner's Rift (5s)*/
    SOLO_5v5: 'RANKED_SOLO_5x5',
    /**Team Summoner's Rift (5s)*/
    TEAM_5v5: 'RANKED_TEAM_5x5',
    /**Team Twisted Treeline (3s)*/
    TEAM_3v3: 'RANKED_TEAM_3x3'
};

/**
 * Season for Stats queries
 * @enum
 * @readonly
 * @static
 */
STATS_SEASON = {
    /** Season 3 */
    SEASON_3: 'SEASON3',
    /** Season 4 */
    SEASON_4: 'SEASON4'
};

/**
 * Types of champion data available on the static API
 * @enum
 * @readonly
 * @static
 */
CHAMPION_DATA_TO_RETRIVE = {
    /** All fields */
    ALL: 'all',
    /** tips for allies **/
    ALLY_TIPS: 'allytips',
    /** skin images */
    SKIN_IMAGES: 'altimages',
    /** blurb about the champ*/
    BLURB: 'blurb',
    /** tips for enemies */
    ENEMY_TIPS: 'enemytips',
    /** champ image */
    IMAGE: 'image',
    /** defense, magic, difficulty and attack info (1-10) */
    INFO: 'info',
    /** lore */
    LORE: 'lore',
    /** type of resource champion uses*/
    RESOURCE: 'partype',
    /** passive skill */
    PASSIVE: 'passive',
    /** recommended items */
    RECOMMENDED: 'recommended',
    /** skins */
    SKINS: 'skins',
    /** spells */
    SPELLS: 'spells',
    /** stats */
    STATS: 'stats',
    /** tags describing the champ */
    TAGS: 'tags'
};

/**
 * Types of item data available on the static API
 * @enum
 * @readonly
 * @static
 */
ITEM_DATA_TO_RETRIEVE = {
    /** all */
    ALL: 'all',
    /** colloquialism the item is also know by */
    COLLOQ: 'colloq',
    /** allow use if full HP/MP */
    CONSUME_ON_FULL: 'consumeOnFull',
    /** is item a consumable (boolean) */
    CONSUMED: 'consumed',
    /** how many items must be created/purchased before this item can be created*/
    DEPTH: 'depth',
    /** items the item is made from (ids)*/
    FROM: 'from',
    /** gold info: total/base cost, sell amt etc */
    GOLD: 'gold',
    /** group item belongs in */
    GROUP: 'group',
    /** hide from all maps and stores */
    HIDE_FROM_ALL: 'hideFromAll',
    /** image filename/data for item */
    IMAGE: 'image',
    /** is the item in the store */
    IN_STORE: 'inStore',
    /** items this item builds into (ids) */
    INTO: 'into',
    /** maps item is available on */
    MAPS: 'maps',
    /** a specific champion is required to purchase/use this item */
    REQUIRED_CHAMPION: 'requiredChampion',
    /** description without XML tags */
    SANITIZED_DESCRIPTION: 'sanitizedDescription',
    /** special recipe*/
    SPECIAL_RECIPE: 'specialRecipe',
    /** max stacks on the item */
    STACKS: 'stacks',
    /** item's stats */
    STATS: 'stats',
    /** tags describing the item */
    TAGS: 'tags',
    /** List of tags describing the item in the store */
    TREE: 'tree'
};

/**
 * Types of mastery data available on the static API
 * @enum
 * @readonly
 * @static
 */
MASTERY_DATA_TO_RETRIEVE = {
    /** all data fields */
    ALL: 'all',
    /** image data fields */
    IMAGE: 'image',
    /** Prerequisites */
    PREREQUISITES: 'prereq',
    /** RANKS */
    RANKS: 'ranks',
    /** description without XML tags */
    SANITIZED_DESCRIPTION: 'sanitizedDescription',
    /** List of tags describing the item in the store */
    TREE: 'tree'
};

/**
 * Types of rune data available on the static API
 * @enum
 * @readonly
 * @static
 */
RUNE_DATA_TO_RETRIEVE = {
    /** all data fields */
    ALL: 'all',
    /** basic */
    BASIC: 'basic',
    /** colloquialism the rune is also know by */
    COLLOQ: 'colloq',
    /** allow use if full HP/MP */
    CONSUME_ON_FULL: 'consumeOnFull',
    /** is item a consumable (boolean) */
    CONSUMED: 'consumed',
    /** how many rune must be created/purchased before this rune can be created*/
    DEPTH: 'depth',
    /** rune the rune is made from (ids)*/
    FROM: 'from',
    /** gold info: total/base cost, sell amt etc */
    GOLD: 'gold',
    /** hide from all maps and stores */
    HIDE_FROM_ALL: 'hideFromAll',
    /** image filename/data for rune */
    IMAGE: 'image',
    /** is the rune in the store */
    IN_STORE: 'inStore',
    /** rune this rune builds into (ids) */
    INTO: 'into',
    /** maps rune is available on */
    MAPS: 'maps',
    /** a specific champion is required to purchase/use this rune */
    REQUIRED_CHAMPION: 'requiredChampion',
    /** description without XML tags */
    SANITIZED_DESCRIPTION: 'sanitizedDescription',
    /** special recipe*/
    SPECIAL_RECIPE: 'specialRecipe',
    /** max stacks on the item */
    STACKS: 'stacks',
    /** rune's stats */
    STATS: 'stats',
    /** tags describing the rune */
    TAGS: 'tags'
};

/**
 * Types of summoner spell data available on the static API
 * @enum
 * @readonly
 * @static
 */
var SUMMONER_SPELL_INFO_TO_RETRIEVE = {
    /** all data fields */
    ALL: "all",
    /** spell CD */
    COOLDOWN: "cooldown",
    /** CD burn */
    COOLDOWN_BURN: "cooldownBurn",
    /** cost to cast spell */
    COST: "cost",
    COST_BURN: "costBurn",
    /** type of cost of spell, if any */
    COST_TYPE: "costType",
    /** effects caused by spell */
    EFFECT: "effect",
    /** effect burn */
    EFFECT_BURN: "effectBurn",
    /** image filename/data for spell */
    IMAGE: "image",
    /** spell key */
    KEY: "key",
    /** tips to level spell */
    LEVEL_TIP: "leveltip",
    /** max rank of spell  */
    MAX_RANK: "maxrank",
    /** game modes spell available in */
    MODES: "modes",
    /** spell range */
    RANGE: "range",
    /** spell range burn */
    RANGE_BURN: "rangeBurn",
    /** resource consumed by spell */
    RESOURCE: "resource",
    /** description without XML tags */
    SANITIZED_DESCRIPTION: "sanitizedDescription",
    /** tooltip without XML tags */
    SANITIZED_TOOLTIP: "sanitizedTooltip",
    /** tooltip with {{ }} replacements */
    TOOLTIP: "tooltip",
    /** rankup coefficients and keys to insert into tooltip */
    VARS: "vars"
};


//exports
module.exports.RANKED_QUEUE_TYPE = RANKED_QUEUE_TYPE;
module.exports.STATS_SEASON = STATS_SEASON;
module.exports.CHAMPION_DATA_TO_RETRIVE = CHAMPION_DATA_TO_RETRIVE;
module.exports.ITEM_DATA_TO_RETRIEVE = ITEM_DATA_TO_RETRIEVE;
module.exports.MASTERY_DATA_TO_RETRIEVE = MASTERY_DATA_TO_RETRIEVE;
module.exports.RUNE_DATA_TO_RETRIEVE = RUNE_DATA_TO_RETRIEVE;
module.exports.SUMMONER_SPELL_INFO_TO_RETRIEVE = SUMMONER_SPELL_INFO_TO_RETRIEVE;
