const english_idioms = [
  {
    word: "a drop in the ocean",
    definition: "a very small amount that will not have much effect",
  },
  {
    word: "a home from home",
    definition: "a place where you feel as relaxed as you do in your own home",
  },
  {
    word: "a leopard can't change its spots",
    definition:
      "used for saying that someone will never change their behaviour or character",
  },
  {
    word: "a sight for sore eyes",
    definition: "someone or something that you are very pleased to see",
  },
  {
    word: "a stitch in time (saves nine)",
    definition:
      "used for saying that it is better to solve a problem now, rather than leave it until later when it may be more difficult to deal with",
  },
  {
    word: "a stone's throw (away/from)",
    definition: "very close (to)",
  },
  {
    word: "Achilles' heel",
    definition:
      "a weak feature of someone or something that could cause failure or be attacked",
  },
  {
    word: "add fuel to the fire",
    definition: "make a bad situation worse",
  },
  {
    word: "all in good time",
    definition:
      "used for telling someone to wait for something and not try to make you hurry.",
  },
  {
    word: "all mod cons",
    definition:
      "all modern conveniences, the machines and pieces of equipment in your house that make life easy and comfortable",
  },
  {
    word: "an act of God",
    definition:
      "an event such as a flood, lightning or an earthquake that is produced by natural forces, and that people have no control over",
  },
  {
    word: "as the crow flies",
    definition: "in a straight line (used for measuring distance)",
  },
  {
    word: "at a loose end",
    definition: "with nothing in particular to do",
  },
  {
    word: "be born with a silver spoon in your mouth",
    definition: "have advantages because you come from a rich family",
  },
  {
    word: "be on the same wavelength",
    definition:
      "understand the way another person thinks because you often have the same ideas and opinions they do",
  },
  {
    word: "before your time",
    definition:
      "used for saying that something happened or existed before you were born or before you lived or worked somewhere.",
  },
  {
    word: "below/under par",
    definition: "below the usual or expected standard",
  },
  {
    word: "big mouth",
    definition:
      "used as a criticism of someone when they say things they should not",
  },
  {
    word: "blot on the landscape",
    definition:
      "something that makes a place look less attractive, for example an ugly building",
  },
  {
    word: "break even",
    definition: "neither make a profit nor lose money",
  },
  {
    word: "break the mould",
    definition:
      "change a situation by doing something that is very different from what most people usually do or have done in the past",
  },
  {
    word: "bury your head in the sand",
    definition:
      "ignore a problem or an unpleasant situation and hope that it will disappear",
  },
  {
    word: "change your tune",
    definition: "change your opinion or attitude",
  },
  {
    word: "clean as a whistle",
    definition: "completely honest or legal.",
  },
  {
    word: "clean as a whistle",
    definition: "extremely clean",
  },
  {
    word: "come clean (about sth)",
    definition: "tell the truth about something that you have kept secret",
  },
  {
    word: "come rain or shine",
    definition:
      "used for saying that something always happens or someone always does something despite bad weather or difficult conditions",
  },
  {
    word: "commuter belt",
    definition:
      "area surrounding a large city where many people who work in that city live",
  },
  {
    word: "concrete jungle",
    definition:
      "unpleasant part of a city where there are a lot of ugly buildings close together",
  },
  {
    word: "couch potato",
    definition:
      "someone who spends a lot of time sitting at home watching television",
  },
  {
    word: "do sth on a whim",
    definition:
      "do because of a sudden feeling that you must have or do something",
  },
  {
    word: "down on your luck",
    definition:
      "having a long period of difficulty finding work and earning money",
  },
  {
    word: "draw the line (at)",
    definition: "say that you will definitely not allow or accept something",
  },
  {
    word: "draw the short straw",
    definition: "be chosen to do something unpleasant",
  },
  {
    word: "fall short",
    definition:
      "not reach a particular level or to fail to achieve something you were trying to do",
  },
  {
    word: "fifty-fifty",
    definition: "equal, or into two equal parts",
  },
  {
    word: "fly off the handle",
    definition: "suddenly become extremely angry without a good reason",
  },
  {
    word: "follow your nose",
    definition:
      "do what you feel is right in a particular situation, although you are not certain",
  },
  {
    word: "follow your nose",
    definition: "go straight forward, without turning",
  },
  {
    word: "for good",
    definition: "permanently, without the possibility of change in the future",
  },
  {
    word: "for the time being",
    definition: "for now",
  },
  {
    word: "from time to time",
    definition: "sometimes, but not often",
  },
  {
    word: "gain/get/have/take the upper hand",
    definition:
      "gain/get/have/ take control or advantage over a person or situation",
  },
  {
    word: "get on like a house on fire",
    definition:
      "become good friends very quickly and have a lot to talk to each other about",
  },
  {
    word: "get sth off your chest",
    definition:
      "talk to someone about something that has been worrying you, so that you feel better about it",
  },
  {
    word: "get the wrong end of the stick",
    definition: "understand something completely wrongly",
  },
  {
    word: "get/catch sb's drift",
    definition: "understand the basic meaning",
  },
  {
    word: "get/have your way",
    definition: "be allowed to have or do what you want.",
  },
  {
    word: "give sb a taste/dose of their own medicine",
    definition: "treat someone in the same bad way they treat other people",
  },
  {
    word: "give sb your word",
    definition: "promise to do something",
  },
  {
    word: "give sth a miss",
    definition: "decide not to do something that you usually do",
  },
  {
    word: "go halves",
    definition:
      "share the cost of something with someone so that you each pay 50%",
  },
  {
    word: "go to your head",
    definition:
      "if success goes to your head, it makes you think that you are better or more important than you really are",
  },
  {
    word: "grin and bear it",
    definition:
      "accept a difficult situation without complaining or showing how you feel",
  },
  {
    word: "have a change of heart",
    definition:
      "change your opinion about something or decide not to do something you were planning to do",
  },
  {
    word: "have green fingers",
    definition: "be good at growing plants",
  },
  {
    word: "have time on your hands",
    definition: "have more time available than you need",
  },
  {
    word: "have your wits about you",
    definition: "be able to think quickly and make sensible decisions",
  },
  {
    word: "(hear sth) on/through the grapevine",
    definition:
      "the way in which information spreads quickly from one person to another through conversation",
  },
  {
    word: "home sweet home",
    definition:
      "used for saying that you are happy to be back in your own home",
  },
  {
    word: "in/for donkey's years",
    definition: "an extremely long time",
  },
  {
    word: "in sb's bad/good books",
    definition: "used for saying that someone is annoyed/pleased with you",
  },
  {
    word: "in the dark (about)",
    definition:
      "not knowing very much about something, because other people are keeping it secret from you",
  },
  {
    word: "in the middle of nowhere",
    definition: "a long way from any town or city",
  },
  {
    word: "in the nick of time",
    definition: "just in time to prevent something bad happening",
  },
  {
    word: "in the sticks",
    definition: "in an area far from the town or city",
  },
  {
    word: "it's as broad as it's long",
    definition:
      "used for saying that you cannot choose between two things or actions because they are equal",
  },
  {
    word: "keep a straight face",
    definition: "remain serious and not laugh",
  },
  {
    word: "keep sb posted",
    definition:
      "regularly give someone information about something they are interested in, for example how a situation is changing or developing",
  },
  {
    word: "keep sth under your hat",
    definition: "keep something secret",
  },
  {
    word: "keep up with the Joneses",
    definition: "try to be as rich, successful, etc as your neighbours",
  },
  {
    word: "keep your hair on",
    definition: "used for telling someone not to get angry or upset",
  },
  {
    word: "kick yourself",
    definition:
      "be very annoyed because you have made a mistake, missed an opportunity, etc",
  },
  {
    word: "knee-high to a grasshopper",
    definition: "very small, because you were very young",
  },
  {
    word: "know sth inside out",
    definition: "be very familiar with",
  },
  {
    word: "know what's what",
    definition: "know the important facts about a situation",
  },
  {
    word: "last word in",
    definition: "the newest and best type of something",
  },
  {
    word: "lay/put your cards on the table",
    definition:
      "tell people exactly what you are thinking or what you are intending to do",
  },
  {
    word: "let nature take its course",
    definition: "allow something to develop without trying to influence it",
  },
  {
    word: "let off steam",
    definition: "shout or do something that allows you to get rid of anger",
  },
  {
    word: "let sleeping dogs lie",
    definition:
      "leave a person or situation alone if they might cause you trouble",
  },
  {
    word: "let your hair down",
    definition:
      "relax and enjoy yourself because you are in a comfortable environment",
  },
  {
    word: "life and soul of the party",
    definition: "someone who is very lively at social events",
  },
  {
    word: "like two peas in a pod",
    definition:
      "used for saying that two people look, behave or think exactly the same",
  },
  {
    word: "line your pocket(s)",
    definition: "obtain money, especially by acting dishonestly",
  },
  {
    word: "live and let live",
    definition:
      "used for saying that you should accept other people's beliefs and way of life, even if they are very different from your own",
  },
  {
    word: "lock, stock and barrel",
    definition:
      "including every part of a particular thing, situation, place, etc",
  },
  {
    word: "lose your bearings",
    definition:
      "become confused about where you are and where other things are",
  },
  {
    word: "make a beeline for",
    definition:
      "go towards someone or something in the quickest and most direct way",
  },
  {
    word: "make yourself at home",
    definition:
      "feel relaxed and behave in the same way as you do in your own home",
  },
  {
    word: "never/don't look a gift horse in the mouth",
    definition:
      "if you are given something good, you should not complain about it or try to find things that are wrong with it.",
  },
  {
    word: "no rhyme or reason",
    definition:
      "used for emphasising that there is no reason or explanation for something",
  },
  {
    word: "not have a leg to stand on",
    definition:
      "not have any way of proving that you are right about something",
  },
  {
    word: "not see the wood for the trees",
    definition:
      "used for saying that someone cannot understand what is important in a situation because they are thinking too much about small details",
  },
  {
    word: "off the beaten track",
    definition: "away from populated areas or areas popular with tourists",
  },
  {
    word: "on good terms (with)",
    definition: "have a good relationship with someone",
  },
  {
    word: "on the spur of the moment",
    definition:
      "if you do something on the spur of the moment, you do it suddenly and do not take time to plan it or think carefully about it",
  },
  {
    word: "on the street",
    definition: "with no place to live",
  },
  {
    word: "on the town",
    definition:
      "spending the evening enjoying yourself in bars, clubs, theatres, etc",
  },
  {
    word: "once in a blue moon",
    definition: "very rarely",
  },
  {
    word: "out of the blue",
    definition:
      "happening in a way that is sudden and unexpected, and does not seem connected with anything that happened before",
  },
  {
    word: "out of this world",
    definition: "extremely good or impressive",
  },
  {
    word: "over the top",
    definition: "more than what is considered normal or suitable",
  },
  {
    word: "pride of place",
    definition: "in the place that is most central or important",
  },
  {
    word: "pull (a few) strings",
    definition:
      "use your influence in order to get something you want or to help someone, especially when this is unfair",
  },
  {
    word: "put sth in perspective",
    definition:
      "provide a sensible way of judging how good, bad, important, etc something is in comparison with other things",
  },
  {
    word: "put two and two together",
    definition:
      "guess what is happening or what something means based on what you have seen or heard",
  },
  {
    word: "put your feet up",
    definition:
      "sit down and relax, especially with your feet raised off the ground",
  },
  {
    word: "quick/slow on the uptake",
    definition:
      "taking a very short/long time to understand or realise something",
  },
  {
    word: "recharge your batteries",
    definition:
      "rest after being very busy, so that you will be ready to start working again",
  },
  {
    word: "red tape",
    definition: "documents, rules or processes that cause delays",
  },
  {
    word: "reinvent the wheel",
    definition:
      "waste time and effort trying to do something that someone else has already done well",
  },
  {
    word: "ring a bell",
    definition:
      "sound familiar to you, although you cannot remember the exact details",
  },
  {
    word: "round the bend",
    definition: "crazy",
  },
  {
    word: "satellite town",
    definition: "town or city that is close to and depends on a larger city",
  },
  {
    word: "sb is only human",
    definition:
      "used for saying someone has been weak in the ways most people are weak and should not be blamed for their behaviour",
  },
  {
    word: "see eye to eye (with sb)",
    definition: "agree with someone or have the same opinion as them",
  },
  {
    word: "set your heart on",
    definition: "decide that you want something very much",
  },
  {
    word: "six of one (and) half a dozen of the other",
    definition: "used for saying that two things are equally good or bad",
  },
  {
    word: "speak volumes",
    definition: "provide a lot of information, especially in an indirect way",
  },
  {
    word: "split hairs",
    definition:
      "argue or worry about very small details or differences that are not important.",
  },
  {
    word: "steal the show",
    definition:
      "receive a lot of attention because you give the best performance in a show or other event",
  },
  {
    word: "stick to your guns",
    definition:
      "refuse to change what you are saying or doing despite the opposition or criticism of other people",
  },
  {
    word: "stop dead in your tracks",
    definition: "suddenly stop, for example because you are surprised",
  },
  {
    word: "take a short cut to",
    definition: "follow a path that is quicker and shorter than the usual way",
  },
  {
    word: "take stock (of)",
    definition:
      "spend some time thinking about the situation you are in before you decide what to do next",
  },
  {
    word: "take the law into your own hands",
    definition:
      "punish someone in your own way without involving the police or the courts, often by doing something illegal yourself",
  },
  {
    word: "take the scenic route",
    definition:
      "follow a longer path than the usual one because it is more attractive",
  },
  {
    word: "tell tales",
    definition:
      "tell someone in authority about bad things that someone else has done, because you want them to be punished",
  },
  {
    word: "the edge over",
    definition:
      "an advantage that makes someone or something more successful than other people or things",
  },
  {
    word: "the luck of the draw",
    definition:
      "used for saying people have limited control over what life brings them",
  },
  {
    word: "the other day",
    definition: "recently",
  },
  {
    word: "the powers that be",
    definition: "the people who control a situation",
  },
  {
    word: "the tools of the trade",
    definition:
      "the skills and equipment that you need in order to do your job",
  },
  {
    word: "throw the book at sb",
    definition: "punish someone very severely",
  },
  {
    word: "tidy sum/amount",
    definition: "large sum/amount",
  },
  {
    word: "touch wood",
    definition:
      "used when you have said that you have had good luck in order to prevent bad luck from happening to you",
  },
  {
    word: "turn over a new leaf",
    definition:
      "change your life by starting to be a better person or stopping a bad habit",
  },
  {
    word: "under sb's thumb",
    definition: "completely controlled by someone else",
  },
  {
    word: "up in arms about",
    definition: "angry and complaining about something",
  },
  {
    word: "variety is the spice of life",
    definition:
      "used for saying that different experiences and situations make life enjoyable or interesting",
  },
  {
    word: "your flesh and blood",
    definition: "your relative",
  },
  {
    word: "A Piece of Cake",
    definition: "If you think something is very easy to do",
  },
  {
    word: "Kill Two Birds With One Stone",
    definition: "To achieve two things by doing a single action",
  },
  {
    word: "You Can't Judge a Book by its Cover",
    definition:
      "You should not judge people or things based on their appearance",
  },
  {
    word: "cry over spilt milk",
    definition:
      "waste time feeling upset about something bad that has happened and cannot be changed",
  },
  {
    word: "Raining Cats and Dogs",
    definition: "Raining very heavily",
  },
  {
    word: "at the drop of a hat",
    definition:
      "immediately or in a way that shows that you have no doubts about doing something",
  },
  {
    word: "Better late than never",
    definition: "It's better to do something late than not to try it",
  },
  {
    word: "Give sb the green light",
    definition: "To give permission",
  },
  {
    word: "A white lie",
    definition: "To tell a lie that is not very serious",
  },
];
