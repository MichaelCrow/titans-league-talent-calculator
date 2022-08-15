import { TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/paladin"),
);
const icons = requireAll(require.context("../../assets/icons/paladin"));

export const data: TalentData = {
  Holy: {
    name: "Holy",
    background: backgrounds["holy"],
    icon: icons["spell_holy_holybolt"],
    talents: {
      "Improved Seal of Righteousness": {
        name: "Improved Seal of Righteousness", 
        pos: "a1", 
        icon: icons["ability_thunderbolt"], 
        maxRank: 3, 
        reqPoints: 0, 
        description: talentText`Increase the damage done by your Seal of Righteousness and Judgement of Righteousness by ${[
          5,
          10,
          15,
        ]}%.`, 
      },
      "Divine Strength": {
        name: "Divine Strength", 
        pos: "a2", 
        icon: icons["ability_golemthunderclap"], 
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText`Increases your Strength by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`, 
      },
      "Divine Intellect": {
        name: "Divine Intellect", 
        pos: "a3", 
        icon: icons["spell_nature_sleep"], 
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText`Increase you total Intellect by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`, 
      },
      "Aura Mastery": {
        name: "Aura Mastery", 
        pos: "b1", 
        icon: icons["spell_holy_auramastery"], 
        maxRank: 2, 
        reqPoints: 5, 
        description: talentText`Increases the radius of a Paladin's auras by ${[
          5,
          10,
        ]} yards.`, 
      },
      "Shield of Faith": {
        name: "Shield of Faith", 
        pos: "b4", 
        icon: icons["spell_holy_holyguidance"], 
        maxRank: 3, 
        reqPoints: 5, 
        description: talentText`Reduces all spell damage taken by ${[
          5,
          10,
          15,
        ]}%.`, 
      },
      "Holy Power": {
        name: "Holy Power", 
        pos: "b3", 
        icon: icons["spell_holy_power"], 
        maxRank: 5, 
        reqPoints: 5, 
        description: talentText`Increases the critical effect chance of your Holy spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`, 
      },
      "Improved Lay on Hands": {
        name: "Improved Lay on Hands", 
        pos: "a4", 
        icon: icons["spell_holy_layonhands"], 
        maxRank: 2, 
        reqPoints: 0, 
        description: talentText`Gives the target of your Lay on Hands spell a 30% bonus to their resistance and armor value from items for${[
          60,
          120
        ]} seconds. In addition, the cooldown for you Lay on Hands spell is reduced by ${[
          15,
          30,
        ]} min.`, 
      },
      "Spiritual Focus": {
        name: "Spiritual Focus", 
        pos: "c1", 
        icon: icons["spell_arcane_blink"], 
        maxRank: 3, 
        reqPoints: 10, 
        description: talentText`Gives your spells a ${[
          20,
          40,
          60,
        ]}% chance to not lose casting time when you take damage.`, 
      },
      "Consecration": {
        name: "Consecration", 
        pos: "c2", 
        icon: icons["spell_holy_innerfire"], 
        maxRank: 1, 
        reqPoints: 10, 
        prereq: "Improved Purifying", 
        arrows: [{ dir: "down", from: "b2", to: "c2"}],
        description: talentText`Consecrates the land beneath the Paladin, doing 8 Holy damage to enemies who neter the area.`, 
      },
      "Divine Grace": {
        name: "Divine Grace", 
        pos: "d1", 
        icon: icons["spell_holy_sealofwisdom"], 
        maxRank: 2, 
        reqPoints: 15, 
        description: talentText`Increases the effect of your Seal and Judgement of Light, your Seal and Judgement of Wisdom, you Blessing of Wisdom, and your Blessing of Light by ${[
          10,
          20,
        ]}%. In addition, increases the duration and reduces the cost of your Blessing of Wisdowm and Blessing of Light by ${[
          50,
          100,
        ]}%.`, 
      },
      "Divine Concentration": {
        name: "Divine Concentration", 
        pos: "d2", 
        icon: icons["spell_holy_fanaticism"], 
        maxRank: 3, 
        reqPoints: 15, 
        description: talentText`Regenerates 1% of your total Mana every ${[
          15,
          10,
          5
         ]} seconds.`, 
      },
      "Improved Purifying": {
        name: "Improved Purifying", 
        pos: "b2", 
        icon: icons["spell_holy_purifyingpower"], 
        maxRank: 3, 
        reqPoints: 5,  
        description: talentText`Reduces the Mana cost of your Cleanse, Purify, Consecration, Exorcism, Holy Wrath, and Hammer of Wrath spells by ${[
          10,
          20,
          30,
        ]}% and increases the critical strike chance of your Exorcism, Holy Wrath, and Hammer of Wrath spells by ${[
          10,
          20,
          30,
        ]}%.`, 
      },
      "Illumination": {
        name: "Illumination", 
        pos: "d3", 
        icon: icons["spell_holy_greaterheal"], 
        maxRank: 5, 
        reqPoints: 15, 
        prereq: "Holy Power", 
        arrows: [{ dir: "down", from: "b3", to: "d3" }], 
        description: talentText`After getting a critical effect from your Flash of Light, Holy Light, Holy Shock, Exorcism, Holy Wrath, or Hammer of Wrath spells, gives you a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to gain Mana equal to 50% of the base cost of the spell.`, 
      },
      "Unyielding Faith": {
        name: "Unyielding Faith", 
        pos: "d4", 
        icon: icons["spell_holy_unyieldingfaith"], 
        maxRank: 3, 
        reqPoints: 15, 
        description: talentText`Increases your chance to resist Fear and Disorient effects by an additional ${[
          10,
          20,
          30,
        ]}%.`, 
      },
      "Light's Mercy": {
        name: "Light's Mercy", 
        pos: "e1", 
        icon: icons["spell_holy_holybolt"], 
        maxRank: 3, 
        reqPoints: 20, 
        description: talentText`Reduces the cost of your Holy Light, Flash of Light, and Holy Shock spells by ${[
          5,
          10,
          15,
        ]}%.`, 
      },
      "Holy Shock": {
        name: "Holy Shock", 
        pos: "e2", 
        icon: icons["spell_holy_searinglight"], 
        maxRank: 1, 
        reqPoints: 20, 
        description: talentText`Blasts the target with Holy energy, causing 134 Holy damage to an enemy, or 134 healing to an ally. Heals twice amount on targets that have 20% or less health.`, 
      },
      "Long Arm of Justice": {
        name: "Long Arm of Justice", 
        pos: "e3", 
        icon: icons["spell_holy_healingaura"], 
        maxRank: 3, 
        reqPoints: 20, 
        description: talentText`Increases the range of your Judgements, Exorcism, and Hammer of Wrath spells by ${[
          2,
          4,
          6,
        ]} yards, increases the radius of your Holy Wrath by ${[
          3,
          6,
          9,
        ]} yards, and reduces the cast time of your Holy Wrath and Hammer of Wrath spells by ${[
          0.5,
          1,
          1.5,
        ]} sec.`, 
      },
      "Healing Light": {
        name: "Healing Light", 
        pos: "f1", 
        icon: icons["spell_holy_proclaimchampion"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText`Gives your Flash of Light spells a ${[
          20,
          40,
          60,
          80,
          100
        ]}% chance to apply the Spark of Light effect. Spark of light reduces the cast time of your next Holy Light by 0.25 sec and increases its range by 2 yards, the effect stacks up to 10 times.\nAlso increases the critical effect chance of your Flash of Light by ${[
          2,
          4,
          6,
          8,
          10
        ]}%.`, 
      },
      "Searing Light": {
        name: "Searing Light", 
        pos: "f3", 
        icon: icons["spell_holy_revivechampion"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText`Increases you Holy damage by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`, 
      },
      "Inner Light": {
        name: "Inner Light", 
        pos: "g2", 
        icon: icons["spell_holy_surgeoflight"], 
        maxRank: 1, 
        reqPoints: 30, 
        prereq: "Holy Shock", 
        arrows: [{ dir: "down", from: "e2", to: "g2" }], 
        description: talentText`You emit a flash of blinding light, removing the mana cost of all your spells and blinding nearby enemies for 6 seconds. Targets must be facing you. Any damage caused will remove the effect.`, 
      },
    },
  },
  Protection: {
    name: "Protection",
    background: backgrounds["protection"],
    icon: icons["spell_holy_devotionaura"],
    talents: {
      "Toughness": {
        name: "Toughness", 
        pos: "a2", 
        icon: icons["spell_holy_devotion"], 
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText`Increases your resistances and armor value from items by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`, 
      },
      "Shield Specialization": {
        name: "Shield Specialization", 
        pos: "a3", 
        icon: icons["inv_shield_06"],
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText`Increases the amount of damage absorbed by your shield by ${[
          10,
          20,
          30,
          40,
          50,
        ]}%.`, 
      },
      "Vindication": {
        name: "Vindication", 
        pos: "b1", 
        icon: icons["spell_holy_vindication"], 
        maxRank: 3, 
        reqPoints: 5, 
        description: talentText`Gives the Paladin's damaging melee attacks a chance to reduce the target's stats by 10% for ${[
          10,
          20,
          30,
        ]} seconds.`, 
      },
      "Improved Defensive Auras": {
        name: "Improved Defensive Auras", 
        pos: "b2", 
        icon: icons["spell_holy_devotionaura"], 
        maxRank: 2, 
        reqPoints: 5, 
        description: talentText`Increases the armor and resistance bonus of your Devotion and Resistance auras by ${[
          25,
          50,
        ]}%.`, 
      },
      "Redoubt": {
        name: "Redoubt", 
        pos: "b3", 
        icon: icons["ability_defend"], 
        maxRank: 5, 
        reqPoints: 5, 
        prereq: "Shield Specialization", 
        arrows: [{ dir: "down", from: "a3", to: "b3"}], 
        description: talentText`Gives you a ${[
          4,
          8,
          12,
          16,
          20,
        ]}% chance when hit to gain a 30% chance to block attacks for 15 seconds of 5 blocks. Critical hits grants this effect five times more often.`, 
      },
      "Improved Hammer of Justice": {
        name: "Improved Hammer of Justice", 
        pos: "b4", 
        icon: icons["spell_holy_sealofmight"], 
        maxRank: 3, 
        reqPoints: 5, 
        description: talentText`Increases the duration of your Hammer of Justice spell by ${[
          0.5,
          1,
          1.5,
        ]} sec and reduces its coolodwn by ${[
          10,
          20,
          30,
        ]} sec.`, 
      },
      "Dominance": {
        name: "Dominance", 
        pos: "c1", 
        icon: icons["spell_nature_reincarnation"], 
        maxRank: 1, 
        reqPoints: 10, 
        prereq: "Vindication", 
        arrows: [{ dir: "down", from: "b1", to: "c1" }], 
        description: talentText`Degenerates the movement and attack capabilities of nearby opponents by 15%.`, 
      },
      "Blessing of Sanctuary": {
        name: "Blessing of Sanctuary", 
        pos: "c2", 
        icon: icons["spell_nature_lightningshield"], 
        maxRank: 1, 
        reqPoints: 10, 
        description: talentText`Places a Blessing on the friendly target, reducing the damage dealt from all sources by up to 10 for 300 seconds. In addition, when the target blocks a melee attack, the attacker will take 10 holy damage. Players may only have one Blessing on them per Paladin at any one time.`, 
      },
      "One-Handed Weapon Specialization": {
        name: "One-Handed Weapon Specialization", 
        pos: "e3", 
        icon: icons["inv_sword_20"], 
        maxRank: 5, 
        reqPoints: 20, 
        description: talentText`Increases the damage your deal with one-handed melee weapons by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`, 
      },
      "Precision": {
        name: "Precision", 
        pos: "c3", 
        icon: icons["ability_rogue_ambush"], 
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Increases your chance to hit with melee attack and spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`, 
      },
      "Guardian's Favor": {
        name: "Guardian's Favor", 
        pos: "d1", 
        icon: icons["spell_holy_sealofprotection"], 
        maxRank: 2, 
        reqPoints: 15, 
        description: talentText`Increases the effect of your Blessing of Salvation and Blessing of Sanctuary by ${[
          10,
          20,
        ]}%. Also increases the duration and reduces the Mana cost of your Blessings of Freedom, Protection, Sacrifice, Salvation, and Sanctuary by ${[
          50,
          100,
        ]}%.`, 
      },
      "Improved Concentration Aura": {
        name: "Improved Concentration Aura", 
        pos: "d4", 
        icon: icons["spell_holy_mindsooth"], 
        maxRank: 3, 
        reqPoints: 15, 
        description: talentText`Increases the effect of your Concentration Aura by an additional ${[
          5,
          10,
          15,
        ]}% and gives all group members affected by the aura an additional ${[
          5,
          10,
          15,
        ]}% chance to resist Silence and Interrupt effects.`, 
      },
      "Second Wind": {
        name: "Second Wind", 
        pos: "c4", 
        icon: icons["inv_jewelry_talisman_06"], 
        maxRank: 5, 
        reqPoints: 10, 
        description: talentText`Gives you a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to generate Mana equal to 10% of healing taken.`, 
      },
      "Improved Righteous Fury": {
        name: "Improved Righteous Fury", 
        pos: "e1", 
        icon: icons["spell_holy_sealoffury"], 
        maxRank: 3, 
        reqPoints: 20, 
        description: talentText`Increase the amount of threat generated while under the effect of Righteous Fury by ${[
          10,
          20,
          30,
        ]}%.`, 
      },
      "Holy Shield": {
        name: "Holy Shield", 
        pos: "e2", 
        icon: icons["spell_holy_blessingofprotection"], 
        maxRank: 1, 
        reqPoints: 20, 
        prereq: "Blessing of Sanctuary", 
        arrows: [{ dir: "down", from: "c2", to: "e2"}], 
        description: talentText`Increases chance to block by 30% for 10 seconds, and deals 45 Holy damage for each attack blocked while active. Damage caused by Holy Shield causes 20% additional threat. Each block expends a charge. 4 charges.`, 
      },
      "Unbreakability": {
        name: "Unbreakability", 
        pos: "d3", 
        icon: icons["inv_shield_20"], 
        maxRank: 3, 
        reqPoints: 15, 
        description: talentText`Increases your total Health by ${[
          5,
          10,
          15,
        ]}%.`, 
      },
      "Morale": {
        name: "Morale", 
        pos: "f1", 
        icon: icons["spell_holy_heroism"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText`Increases your chance to resist Fear and Charm effects by ${[
          10,
          20,
          30,
          40,
          50,
        ]}%. In addition, your melee attacks have a ${[
          4,
          8,
          12,
          16,
          20,
        ]}% chance to restore 125 Mana.`, 
      },
      "Improved Holy Shield": {
        name: "Improved Holy Shield", 
        pos: "f2", 
        icon: icons["spell_holy_blessingofprotection"], 
        maxRank: 2, 
        reqPoints: 25, 
        prereq: "Holy Shield", 
        arrows: [{ dir: "down", from: "e2", to: "f2" }], 
        description: talentText`Allows your Holy Shield to block an additional ${[
          2,
          4,
        ]} attacks and increases its duration by ${[
          5,
          10,
        ]} seconds.`, 
      },
      "Reckoning": {
        name: "Reckoning", 
        pos: "f3", 
        icon: icons["spell_holy_blessingofstrength"], 
        maxRank: 5, 
        reqPoints: 25,
        prereq: "One-Handed Weapon Specialization", 
        arrows: [{ dir: "down", from: "e3", to: "f3" }], 
        description: talentText`Gives you a ${[
          4,
          8,
          12,
          16,
          20,
        ]}% chance to gain an extra attack after being hit by attacks or spells. The critical attacks have 5 times higher chance to grant an extra attack.`, 
      },
      "Seal of Fury": {
        name: "Seal of Fury", 
        pos: "g2", 
        icon: icons["spell_holy_crusader"], 
        maxRank: 1, 
        reqPoints: 30, 
        description: talentText`Fills the Paladin with divine fury for 30 seconds, causing melee attacks to deal additional physical damage equal to 30% of normal weapon damage to all targets in front of the Paladin. Only one Seal can be active on the Paladin at any one time.\n\nUnleashing this Seal's energy will judge an enemy for 4 seconds, forcing the target to attack you. Has no effect if the target is already attacking you.`, 
      },
    },
  },
  Retribution: {
    name: "Retribution",
    background: backgrounds["retribution"],
    icon: icons["spell_holy_auraoflight"],
    talents: {
      "Improved Judgement": {
        name: "Improved Judgement", 
        pos: "a1", 
        icon: icons["spell_holy_righteousfury"], 
        maxRank: 3, 
        reqPoints: 0, 
        description: talentText`Decreases the cooldown of your Judgement spells by ${[
          1,
          2,
          3,
        ]} sec.`, 
      },
      "Conviction": {
        name: "Conviction", 
        pos: "a2", 
        icon: icons["spell_holy_retributionaura"], 
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText`Increases your chance to get a critical strike with attacks and offensive spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`, 
      },
      "Improved Seal of the Crusader": {
        name: "Improved Seal of the Crusader", pos: "a3", 
        icon: icons["spell_holy_holysmite"], 
        maxRank: 3, reqPoints: 0, 
        description: talentText`Increases the Holy damage and melee attack power bonuses of your Seal of the Crusader and the Holy damage increase of your Judgement of the Crusader by ${[
          5,
          10,
          15,
        ]}%.`, 
      },
      "Deflection": {
        name: "Deflection", 
        pos: "b1", 
        icon: icons["ability_parry"], 
        maxRank: 3, 
        reqPoints: 5, 
        description: talentText`Increases your Parry chance by ${[
          2,
          4,
          6,
        ]}%.`, 
      },
      "Improved Retribution Aura": {
        name: "Improved Retribution Aura", 
        pos: "b3", 
        icon: icons["spell_holy_auraoflight"], 
        maxRank: 2, 
        reqPoints: 5, 
        description: talentText`Increases the damage done by your Retribution Aura by ${[
          50,
          100,
        ]}%.`, 
      },
      "The Revenant": {
        name: "The Revenant", 
        pos: "c1", 
        icon: icons["spell_holy_ashestoashes"], 
        maxRank: 3, 
        reqPoints: 10, 
        prereq: "Deflection", 
        arrows: [{ dir: "down", from: "b1", to: "c1" }], 
        description: talentText`Reduces the chance you are critically hit by ${[
          2,
          4,
          6,
        ]}%.`, 
      },
      "Crusade": {
        name: "Crusade", 
        pos: "c2", 
        icon: icons["spell_holy_crusade"], 
        maxRank: 5, 
        reqPoints: 10,
        prereq: "Conviction", 
        arrows: [{ dir: "down", from: "a2", to: "c2" }], 
        description: talentText`Increases spell damage and healing by up to ${[
          6,
          12,
          18,
          24,
          30,
        ]}% of your total Strength.`, 
      },
      "Seal of Command": {
        name: "Seal of Command", 
        pos: "c3", 
        icon: icons["ability_warrior_innerrage"], 
        maxRank: 1, 
        reqPoints: 10, 
        description: talentText`Gives the Paladin a chance to deal additional Holy damage equal to 50% of normal weapon damage. Only on Seal can be active on the Paladin at any one time. Lasts 30 seconds. Unleashing this Seal's energy will judge an enemy, instantly causing 0 Holy damage, 143 if the target is stunned, incapacitated or disoriented.`, 
      },
      "Pursuit of Justice": {
        name: "Pursuit of Justice", 
        pos: "c4", 
        icon: icons["spell_holy_persuitofjustice"], 
        maxRank: 2, 
        reqPoints: 10, 
        description: talentText`Increases the movement speed and mounted movement speed by ${[
          5,
          10,
        ]}%. This does not stack with other movement speed increasing effects.`, 
      },
      "Eye for an Eye": {
        name: "Eye for an Eye", 
        pos: "d1", 
        icon: icons["spell_holy_eyeforaneye"], 
        maxRank: 2, 
        reqPoints: 15, 
        description: talentText`All spell hits against you cause ${[
          5,
          10,
        ]}% of the damage taken to the caster as well.`, 
      },
      "Benediction": {
        name: "Benediction", 
        pos: "d2",
         icon: icons["spell_frost_windwalkon"], 
        maxRank: 3, 
        reqPoints: 15, 
        description: talentText`Reduces the cost of your Judgement and Seal spells by ${[
          10,
          20,
          30,
        ]}%.`, 
      },
      "Divine Might": {
        name: "Divine Might", 
        pos: "d3", 
        icon: icons["spell_holy_fistofjustice"], 
        maxRank: 2, 
        reqPoints: 15, 
        description: talentText`Increases the effect of your Blessing of Might and Blessing of Kings by ${[
          10,
          20,
        ]}%. Also increases their duration and reduces Mana cost by ${[
          50,
          100,
        ]}%.`, 
      },
      "Two-Handed Weapon Specialization": {
        name: "Two-Handed Weapon Specialization", 
        pos: "e1", 
        icon: icons["inv_hammer_04"], 
        maxRank: 3, 
        reqPoints: 20, 
        description: talentText`Increases the damage you deal with two-handed melee weapons by ${[
          4,
          7,
          10,
        ]}%.`, 
      },
      "Sanctity Aura": {
        name: "Sanctity Aura", 
        pos: "e2", 
        icon: icons["spell_holy_mindvision"], 
        maxRank: 1, 
        reqPoints: 20, 
        description: talentText`Increases Holy damage done by party members within 30 yards by 10%. Players may only have on Aura on them per Paladin at any one time.`, 
      },
      "Vengeance": {
        name: "Vengeance", 
        pos: "e3", 
        icon: icons["ability_racial_avatar"], 
        maxRank: 5, 
        reqPoints: 20, 
        description: talentText`Gives your critical strikes a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to increase damage you deal by 3% for 15 sec. Stacks up to 5 times.`, 
      },
      "Repentance": {
        name: "Repentance", 
        pos: "e4", 
        icon: icons["spell_holy_prayerofhealing"], 
        maxRank: 1, 
        reqPoints: 20, 
        description: talentText`Puts the enemy target in a state of meditation, incapacitating them and increasing their Mana regeneration. Lasts up to 60 seconds. Any damage caused will awaken the target. Only works against Humanoids.`, 
      },
      "Blessed Strikes": {
        name: "Blessed Strikes", 
        pos: "f1", 
        icon: icons["spell_holy_blessedarm"], 
        maxRank: 5, 
        reqPoints: 25,
        description: talentText`Causes your attacks to ignore up to ${[
          60,
          120,
          180,
          240,
          300,
        ]} of your target's Armor. The amount of Armor reduced scales with your level. Also, reduces the threat caused by all actions by ${[
          4,
          8,
          12,
          16,
          20,
        ]}% except when under the effects of Righteous Fury.`, 
      },
      "Improved Sanctity Aura": {
        name: "Improved Sanctity Aura", 
        pos: "f2", 
        icon: icons["spell_holy_mindvision"], 
        maxRank: 2, 
        reqPoints: 25, 
        prereq: "Sanctity Aura", 
        arrows: [{ dir: "down", from: "e2", to: "f2" }], 
        description: talentText`Increases the effect of your Sanctity Aura by ${[
          3,
          5,
        ]}% and gives all group members an additional ${[
          3,
          5,
        ]}% bonus to healing done.`, 
      },
      "Codex of the Silver Hand": {
        name: "Codex of the Silver Hand", 
        pos: "f3", 
        icon: icons["inv_misc_book_07"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText`Allow ${[
          20,
          40,
          60,
          80,
          100,
        ]}% of your Mana regeneration to continue during and for 5 sec after Casting. In addition, reduces the Mana cost of your Holy Light spell by ${[
          10,
          20,
          30,
          40,
          50,
        ]}%, but increases its casting time by ${[
          0.5,
          1,
          1.5,
          2,
          2.5,
        ]} sec.`, 
      },
      "Inevitable Justice": {
        name: "Inevitable Justice", 
        pos: "g2", 
        icon: icons["spell_holy_divinepurpose"], 
        maxRank: 1, 
        reqPoints: 30, 
        description: talentText`Increases the critical strike chance of all Judgements by 30% and makes your Seals and Judgements undispellable.`, 
      },
    },
  },
};