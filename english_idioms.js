const english_idioms = [
  ["a drop in the ocean", "a very small amount that will not have much effect"],
  [
    "a home from home",
    "a place where you feel as relaxed as you do in your own home",
  ],
  // [
  //   "a leopard can't change its spots",
  //   "used for saying that someone will never change their behaviour or character",
  // ],
  // [
  //   "a sight for sore eyes",
  //   "someone or something that you are very pleased to see",
  // ],
  // [
  //   "a stitch in time (saves nine)",
  //   "used for saying that it is better to solve a problem now, rather than leave it until later when it may be more difficult to deal with",
  // ],
  // ["a stone's throw (away/from)", "very close (to)"],
  [
    "Achilles' heel",
    "a weak feature of someone or something that could cause failure or be attacked",
  ],
  ["add fuel to the fire", "make a bad situation worse"],
  // [
  //   "all in good time",
  //   "used for telling someone to wait for something and not try to make you hurry.",
  // ],
  // [
  //   "all mod cons",
  //   "all modern conveniences, the machines and pieces of equipment in your house that make life easy and comfortable",
  // ],
  // [
  //   "an act of God",
  //   "an event such as a flood, lightning or an earthquake that is produced by natural forces, and that people have no control over",
  // ],
  // ["as the crow flies", "in a straight line (used for measuring distance)"],
  // ["at a loose end", "with nothing in particular to do"],
  // [
  //   "be born with a silver spoon in your mouth",
  //   "have advantages because you come from a rich family",
  // ],
  [
    "be on the same wavelength",
    "understand the way another person thinks because you often have the same ideas and opinions they do",
  ],
  // [
  //   "before your time",
  //   "used for saying that something happened or existed before you were born or before you lived or worked somewhere.",
  // ],
  // ["below/under par", "below the usual or expected standard"],
  [
    "big mouth",
    "used as a criticism of someone when they say things they should not",
  ],
  // [
  //   "blot on the landscape",
  //   "something that makes a place look less attractive, for example an ugly building",
  // ],
  ["break even", "neither make a profit nor lose money"],
  // [
  //   "break the mould",
  //   "change a situation by doing something that is very different from what most people usually do or have done in the past",
  // ],
  // [
  //   "bury your head in the sand",
  //   "ignore a problem or an unpleasant situation and hope that it will disappear",
  // ],
  ["change your tune", "change your opinion or attitude"],
  // ["clean as a whistle", "completely honest or legal."],
  // ["clean as a whistle", "extremely clean"],
  // [
  //   "come clean (about sth)",
  //   "tell the truth about something that you have kept secret",
  // ],
  // [
  //   "come rain or shine",
  //   "used for saying that something always happens or someone always does something despite bad weather or difficult conditions",
  // ],
  [
    "commuter belt",
    "area surrounding a large city where many people who work in that city live",
  ],
  [
    "concrete jungle",
    "unpleasant part of a city where there are a lot of ugly buildings close together",
  ],
  [
    "couch potato",
    "someone who spends a lot of time sitting at home watching television",
  ],
  // [
  //   "do sth on a whim",
  //   "do because of a sudden feeling that you must have or do something",
  // ],
  [
    "down on your luck",
    "having a long period of difficulty finding work and earning money",
  ],
  [
    "draw the line (at)",
    "say that you will definitely not allow or accept something",
  ],
  // ["draw the short straw", "be chosen to do something unpleasant"],
  // [
  //   "fall short",
  //   "not reach a particular level or to fail to achieve something you were trying to do",
  // ],
  ["fifty-fifty", "equal, or into two equal parts"],
  // [
  //   "fly off the handle",
  //   "suddenly become extremely angry without a good reason",
  // ],
  // [
  //   "follow your nose",
  //   "do what you feel is right in a particular situation, although you are not certain",
  // ],
  // ["follow your nose", "go straight forward, without turning"],
  ["for good", "permanently, without the possibility of change in the future"],
  ["for the time being", "for now"],
  ["from time to time", "sometimes, but not often"],
  // [
  //   "gain/get/have/take the upper hand",
  //   "gain/get/have/ take control or advantage over a person or situation",
  // ],
  // [
  //   "get on like a house on fire",
  //   "become good friends very quickly and have a lot to talk to each other about",
  // ],
  [
    "get sth off your chest",
    "talk to someone about something that has been worrying you, so that you feel better about it",
  ],
  // ["get the wrong end of the stick", "understand something completely wrongly"],
  // ["get/catch sb's drift", "understand the basic meaning"],
  // ["get/have your way", "be allowed to have or do what you want."],
  [
    "give sb a taste/dose of their own medicine",
    "treat someone in the same bad way they treat other people",
  ],
  ["give sb your word", "promise to do something"],
  // ["give sth a miss", "decide not to do something that you usually do"],
  [
    "go halves",
    "share the cost of something with someone so that you each pay 50%",
  ],
  // [
  //   "go to your head",
  //   "if success goes to your head, it makes you think that you are better or more important than you really are",
  // ],
  // [
  //   "grin and bear it",
  //   "accept a difficult situation without complaining or showing how you feel",
  // ],
  // [
  //   "have a change of heart",
  //   "change your opinion about something or decide not to do something you were planning to do",
  // ],
  ["have green fingers", "be good at growing plants"],
  // ["have time on your hands", "have more time available than you need"],
  // [
  //   "have your wits about you",
  //   "be able to think quickly and make sensible decisions",
  // ],
  // [
  //   "(hear sth) on/through the grapevine",
  //   "the way in which information spreads quickly from one person to another through conversation",
  // ],
  [
    "home sweet home",
    "used for saying that you are happy to be back in your own home",
  ],
  // ["in/for donkey's years", "an extremely long time"],
  // [
  //   "in sb's bad/good books",
  //   "used for saying that someone is annoyed/pleased with you",
  // ],
  [
    "in the dark (about)",
    "not knowing very much about something, because other people are keeping it secret from you",
  ],
  ["in the middle of nowhere", "a long way from any town or city"],
  // ["in the nick of time", "just in time to prevent something bad happening"],
  // ["in the sticks", "in an area far from the town or city"],
  // [
  //   "it's as broad as it's long",
  //   "used for saying that you cannot choose between two things or actions because they are equal",
  // ],
  ["keep a straight face", "remain serious and not laugh"],
  [
    "keep sb posted",
    "regularly give someone information about something they are interested in, for example how a situation is changing or developing",
  ],
  // ["keep sth under your hat", "keep something secret"],
  // [
  //   "keep up with the Joneses",
  //   "try to be as rich, successful, etc as your neighbours",
  // ],
  // ["keep your hair on", "used for telling someone not to get angry or upset"],
  // [
  //   "kick yourself",
  //   "be very annoyed because you have made a mistake, missed an opportunity, etc",
  // ],
  // ["knee-high to a grasshopper", "very small, because you were very young"],
  ["know sth inside out", "be very familiar with"],
  ["know what's what", "know the important facts about a situation"],
  ["last word in", "the newest and best type of something"],
  // [
  //   "lay/put your cards on the table",
  //   "tell people exactly what you are thinking or what you are intending to do",
  // ],
  // [
  //   "let nature take its course",
  //   "allow something to develop without trying to influence it",
  // ],
  // [
  //   "let off steam",
  //   "shout or do something that allows you to get rid of anger",
  // ],
  // [
  //   "let sleeping dogs lie",
  //   "leave a person or situation alone if they might cause you trouble",
  // ],
  // [
  //   "let your hair down",
  //   "relax and enjoy yourself because you are in a comfortable environment",
  // ],
  ["life and soul of the party", "someone who is very lively at social events"],
  // [
  //   "like two peas in a pod",
  //   "used for saying that two people look, behave or think exactly the same",
  // ],
  // ["line your pocket(s)", "obtain money, especially by acting dishonestly"],
  [
    "live and let live",
    "used for saying that you should accept other people's beliefs and way of life, even if they are very different from your own",
  ],
  // [
  //   "lock, stock and barrel",
  //   "including every part of a particular thing, situation, place, etc",
  // ],
  // [
  //   "lose your bearings",
  //   "become confused about where you are and where other things are",
  // ],
  // [
  //   "make a beeline for",
  //   "go towards someone or something in the quickest and most direct way",
  // ],
  [
    "make yourself at home",
    "feel relaxed and behave in the same way as you do in your own home",
  ],
  // [
  //   "never/don't look a gift horse in the mouth",
  //   "if you are given something good, you should not complain about it or try to find things that are wrong with it.",
  // ],
  // [
  //   "no rhyme or reason",
  //   "used for emphasising that there is no reason or explanation for something",
  // ],
  // [
  //   "not have a leg to stand on",
  //   "not have any way of proving that you are right about something",
  // ],
  // [
  //   "not see the wood for the trees",
  //   "used for saying that someone cannot understand what is important in a situation because they are thinking too much about small details",
  // ],
  // [
  //   "off the beaten track",
  //   "away from populated areas or areas popular with tourists",
  // ],
  ["on good terms (with)", "have a good relationship with someone"],
  // [
  //   "on the spur of the moment",
  //   "if you do something on the spur of the moment, you do it suddenly and do not take time to plan it or think carefully about it",
  // ],
  ["on the street", "with no place to live"],
  // [
  //   "on the town",
  //   "spending the evening enjoying yourself in bars, clubs, theatres, etc",
  // ],
  ["once in a blue moon", "very rarely"],
  [
    "out of the blue",
    "happening in a way that is sudden and unexpected, and does not seem connected with anything that happened before",
  ],
  ["out of this world", "extremely good or impressive"],
  // ["over the top", "more than what is considered normal or suitable"],
  // ["pride of place", "in the place that is most central or important"],
  [
    "pull (a few) strings",
    "use your influence in order to get something you want or to help someone, especially when this is unfair",
  ],
  [
    "put sth in perspective",
    "provide a sensible way of judging how good, bad, important, etc something is in comparison with other things",
  ],
  // [
  //   "put two and two together",
  //   "guess what is happening or what something means based on what you have seen or heard",
  // ],
  // [
  //   "put your feet up",
  //   "sit down and relax, especially with your feet raised off the ground",
  // ],
  // [
  //   "quick/slow on the uptake",
  //   "taking a very short/long time to understand or realise something",
  // ],
  [
    "recharge your batteries",
    "rest after being very busy, so that you will be ready to start working again",
  ],
  // ["red tape", "documents, rules or processes that cause delays"],
  [
    "reinvent the wheel",
    "waste time and effort trying to do something that someone else has already done well",
  ],
  [
    "ring a bell",
    "sound familiar to you, although you cannot remember the exact details",
  ],
  // ["round the bend", "crazy"],
  [
    "satellite town",
    "town or city that is close to and depends on a larger city",
  ],
  [
    "sb is only human",
    "used for saying someone has been weak in the ways most people are weak and should not be blamed for their behaviour",
  ],
  // [
  //   "see eye to eye (with sb)",
  //   "agree with someone or have the same opinion as them",
  // ],
  // ["set your heart on", "decide that you want something very much"],
  // [
  //   "six of one (and) half a dozen of the other",
  //   "used for saying that two things are equally good or bad",
  // ],
  [
    "speak volumes",
    "provide a lot of information, especially in an indirect way",
  ],
  // [
  //   "split hairs",
  //   "argue or worry about very small details or differences that are not important.",
  // ],
  [
    "steal the show",
    "receive a lot of attention because you give the best performance in a show or other event",
  ],
  // [
  //   "stick to your guns",
  //   "refuse to change what you are saying or doing despite the opposition or criticism of other people",
  // ],
  // [
  //   "stop dead in your tracks",
  //   "suddenly stop, for example because you are surprised",
  // ],
  [
    "take a short cut to",
    "follow a path that is quicker and shorter than the usual way",
  ],
  // [
  //   "take stock (of)",
  //   "spend some time thinking about the situation you are in before you decide what to do next",
  // ],
  // [
  //   "take the law into your own hands",
  //   "punish someone in your own way without involving the police or the courts, often by doing something illegal yourself",
  // ],
  [
    "take the scenic route",
    "follow a longer path than the usual one because it is more attractive",
  ],
  // [
  //   "tell tales",
  //   "tell someone in authority about bad things that someone else has done, because you want them to be punished",
  // ],
  // [
  //   "the edge over",
  //   "an advantage that makes someone or something more successful than other people or things",
  // ],
  // [
  //   "the luck of the draw",
  //   "used for saying people have limited control over what life brings them",
  // ],
  ["the other day", "recently"],
  // ["the powers that be", "the people who control a situation"],
  // [
  //   "the tools of the trade",
  //   "the skills and equipment that you need in order to do your job",
  // ],
  // ["throw the book at sb", "punish someone very severely"],
  // ["tidy sum/amount", "large sum/amount"],
  // [
  //   "touch wood",
  //   "used when you have said that you have had good luck in order to prevent bad luck from happening to you",
  // ],
  // [
  //   "turn over a new leaf",
  //   "change your life by starting to be a better person or stopping a bad habit",
  // ],
  // ["under sb's thumb", "completely controlled by someone else"],
  // ["up in arms about", "angry and complaining about something"],
  // [
  //   "variety is the spice of life",
  //   "used for saying that different experiences and situations make life enjoyable or interesting",
  // ],
  ["your flesh and blood", "your relative"],
  ["A Piece of Cake", "If you think something is very easy to do"],
  [
    "Kill Two Birds With One Stone",
    "To achieve two things by doing a single action",
  ],
  [
    "You Can't Judge a Book by its Cover",
    "You should not judge people or things based on their appearance",
  ],
  [
    "cry over spilt milk",
    "waste time feeling upset about something bad that has happened and cannot be changed",
  ],
  ["Raining Cats and Dogs", "Raining very heavily"],
  [
    "at the drop of a hat",
    "immediately or in a way that shows that you have no doubts about doing something",
  ],
  [
    "Better late than never",
    "It's better to do something late than not to try it",
  ],
  ["Give sb the green light", "To give permission"],
  ["A white lie", "To tell a lie that is not very serious"],
];
