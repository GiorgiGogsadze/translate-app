const task_1 = [
  {
    word: "rise",
    definition: "მატება, ზრდა",
  },
  {
    word: "increase",
    definition: "გაზრდა, მომატება",
  },
  {
    word: "grow",
    definition: "ზრდა",
  },
  {
    word: "climb",
    definition: "ტემპერატურის/მაჩვენებლის აწევა",
  },
  {
    word: "surge",
    definition: "მკვეთრი მოზღვავება",
  },
  {
    word: "soar",
    definition: "მკვეთრად აწევა, ზეაფრენა",
  },
  {
    word: "rocket",
    definition: "სწრაფად აწევა (რაკეტასავით)",
  },
  {
    word: "jump",
    definition: "ნახტომისებური ზრდა",
  },
  {
    word: "escalate",
    definition: "თანდათანობითი ესკალაცია",
  },
  {
    word: "shoot up",
    definition: "მკვეთრად აწევა",
  },
  {
    word: "spike",
    definition: "მოკლევადიანი მკვეთრი მატება",
  },
  {
    word: "fall",
    definition: "დაცემა, შემცირება",
  },
  {
    word: "decrease",
    definition: "შემცირება",
  },
  {
    word: "decline",
    definition: "კლება",
  },
  {
    word: "drop",
    definition: "ვარდნა",
  },
  {
    word: "plunge",
    definition: "მკვეთრი ვარდნა",
  },
  {
    word: "plummet",
    definition: "თავზარდამცემი ვარდნა",
  },
  {
    word: "dip",
    definition: "მცირე, მოკლევადიანი ვარდნა",
  },
  {
    word: "slump",
    definition: "მკვეთრი ვარდნა (ეკონომიკური)",
  },
  {
    word: "tumble",
    definition: "სწრაფი ვარდნა",
  },
  {
    word: "sink",
    definition: "ჩაძირვა, დაცემა",
  },
  {
    word: "slide",
    definition: "თანდათანობითი ვარდნა",
  },
  {
    word: "stabilize",
    definition: "სტაბილიზაცია",
  },
  {
    word: "level off",
    definition: "გასწორება, სტაბილურ დონეზე გამოსვლა",
  },
  {
    word: "plateau",
    definition: "პლატო, უცვლელი დონე",
  },
  {
    word: "remain steady",
    definition: "თანაბრად დარჩენა",
  },
  {
    word: "remain constant",
    definition: "მუდმივად დარჩენა",
  },
  {
    word: "stagnate",
    definition: "სტაგნაცია, გაჩერება",
  },
  {
    word: "flatten out",
    definition: "გასწორება, გათანაბრება",
  },
  {
    word: "fluctuate",
    definition: "რყევა, მერყეობა",
  },
  {
    word: "vary",
    definition: "ცვალებადობა",
  },
  {
    word: "oscillate",
    definition: "ბაგირისებური რყევა",
  },
  {
    word: "see-saw",
    definition: "ზევით-ქვევით რყევა",
  },
  {
    word: "peak",
    definition: "მწვერვალი, პიკი",
  },
  {
    word: "hit a high of",
    definition: "მაქსიმუმს მიღწევა",
  },
  {
    word: "reach a low of",
    definition: "მინიმუმს მიღწევა",
  },
  {
    word: "bottom out",
    definition: "ფსკერზე დაბრუნება, ყველაზე დაბალ წერტილს მიღწევა",
  },
  {
    word: "level out at",
    definition: "გასწორება გარკვეულ დონეზე",
  },
  {
    word: "sharply",
    definition: "მკვეთრად",
  },
  {
    word: "dramatically",
    definition: "დრამატულად, მკვეთრად",
  },
  {
    word: "rapidly",
    definition: "სწრაფად",
  },
  {
    word: "steeply",
    definition: "ციცაბოდ, მკვეთრად",
  },
  {
    word: "suddenly",
    definition: "მოულოდნელად",
  },
  {
    word: "significantly",
    definition: "მნიშვნელოვნად",
  },
  {
    word: "considerably",
    definition: "საგრძნობლად",
  },
  {
    word: "markedly",
    definition: "შესამჩნევად",
  },
  {
    word: "steadily",
    definition: "თანდათანობით, სტაბილურად",
  },
  {
    word: "gradually",
    definition: "ეტაპობრივად",
  },
  {
    word: "slightly",
    definition: "ოდნავ",
  },
  {
    word: "slowly",
    definition: "ნელა",
  },
  {
    word: "moderately",
    definition: "ზომიერად",
  },
  {
    word: "marginally",
    definition: "უმნიშვნელოდ",
  },
  {
    word: "initially",
    definition: "საწყისად",
  },
  {
    word: "subsequently",
    definition: "შემდგომში",
  },
  {
    word: "thereafter",
    definition: "შემდეგომ",
  },
  {
    word: "throughout",
    definition: "მთელი პერიოდის განმავლობაში",
  },
  {
    word: "over the period",
    definition: "პერიოდის განმავლობაში",
  },
  {
    word: "by the end of",
    definition: "-ის ბოლოსთვის",
  },
  {
    word: "from X to Y",
    definition: "X-დან Y-მდე",
  },
  {
    word: "exceed",
    definition: "გადააჭარბება",
  },
  {
    word: "surpass",
    definition: "აღემატება",
  },
  {
    word: "outnumber",
    definition: "რაოდენობით აღემატება",
  },
  {
    word: "outperform",
    definition: "აღემატება (მაჩვენებლით)",
  },
  {
    word: "overtake",
    definition: "გასწრება",
  },
  {
    word: "lag behind",
    definition: "ჩამორჩენა, უფრო ნელა",
  },
  {
    word: "fall behind",
    definition: "ჩამორჩენა",
  },
  {
    word: "dominate",
    definition: "დომინირება",
  },
  {
    word: "highest",
    definition: "ყველაზე მაღალი",
  },
  {
    word: "lowest",
    definition: "ყველაზე დაბალი",
  },
  {
    word: "largest",
    definition: "ყველაზე დიდი",
  },
  {
    word: "smallest",
    definition: "ყველაზე პატარა",
  },
  {
    word: "second-highest",
    definition: "მეორე ყველაზე მაღალი",
  },
  {
    word: "top",
    definition: "საუკეთესო, ყველაზე მაღალი",
  },
  {
    word: "leading",
    definition: "წამყვანი",
  },
  {
    word: "minimal",
    definition: "მინიმალური",
  },
  {
    word: "negligible",
    definition: "უმნიშვნელო",
  },
  {
    word: "gap",
    definition: "სხვაობა, უფსკრული",
  },
  {
    word: "margin",
    definition: "სხვაობის ზღვარი",
  },
  {
    word: "difference",
    definition: "განსხვავება",
  },
  {
    word: "disparity",
    definition: "დისბალანსი, უთანასწორობა",
  },
  {
    word: "the majority",
    definition: "უმეტესობა",
  },
  {
    word: "the minority",
    definition: "უმცირესობა",
  },
  {
    word: "a small fraction",
    definition: "მცირე ნაწილი",
  },
  {
    word: "a significant proportion",
    definition: "მნიშვნელოვანი წილი",
  },
  {
    word: "roughly equal",
    definition: "დაახლოებით თანაბარი",
  },
  {
    word: "comparable",
    definition: "შესადარებელი",
  },
  {
    word: "substantially",
    definition: "არსებითად",
  },
  {
    word: "by far",
    definition: "დიდი მანძილით",
  },
  {
    word: "by a small margin",
    definition: "მცირე სხვაობით",
  },
  {
    word: "category",
    definition: "კატეგორია",
  },
  {
    word: "figure",
    definition: "მაჩვენებელი, ციფრი",
  },
  {
    word: "value",
    definition: "მნიშვნელობა, ღირებულება",
  },
  {
    word: "proportion",
    definition: "წილი, პროპორცია",
  },
  {
    word: "share",
    definition: "წილი",
  },
  {
    word: "far exceed",
    definition: "მნიშვნელოვნად აჭარბებს",
  },
  {
    word: "well above",
    definition: "მნიშვნელოვნად მაღლა",
  },
  {
    word: "well below",
    definition: "მნიშვნელოვნად დაბლა",
  },
  {
    word: "on par with",
    definition: "თანაბარ დონეზე",
  },
  {
    word: "roughly the same as",
    definition: "დაახლოებით იგივეა, რაც",
  },
  {
    word: "greatest",
    definition: "ყველაზე დიდი, დიდებული",
  },
  {
    word: "equivalent",
    definition: "ეკვივალენტური",
  },
  {
    word: "identical",
    definition: "იდენტური",
  },
  {
    word: "unchanged",
    definition: "უცვლელი",
  },
  {
    word: "remain stable",
    definition: "სტაბილურად დარჩენა",
  },
  {
    word: "double",
    definition: "გაორმაგება",
  },
  {
    word: "triple",
    definition: "გასამმაგება",
  },
  {
    word: "halve",
    definition: "განახევრება",
  },
  {
    word: "statistic",
    definition: "სტატისტიკა",
  },
  {
    word: "rate",
    definition: "მაჩვენებელი, კოეფიციენტი",
  },
  {
    word: "ratio",
    definition: "თანაფარდობა",
  },
  {
    word: "total",
    definition: "ჯამი, სულ",
  },
  {
    word: "sum",
    definition: "ჯამი",
  },
  {
    word: "average",
    definition: "საშუალო",
  },
  {
    word: "mean",
    definition: "საშუალო არითმეტიკული",
  },
  {
    word: "exactly",
    definition: "ზუსტად",
  },
  {
    word: "precisely",
    definition: "ზედმიწევნით",
  },
  {
    word: "respectively",
    definition: "სათანადო თანმიმდევრობით",
  },
  {
    word: "no data is available for",
    definition: "მონაცემები არ არის ხელმისაწვდომი -სთვის",
  },
  {
    word: "figures were not recorded for",
    definition: "მაჩვენებლები არ დაფიქსირდა -სთვის",
  },
  {
    word: "whereas",
    definition: "მაშინ როცა",
  },
  {
    word: "while",
    definition: "მაშინ როცა, ხოლო",
  },
  {
    word: "in contrast",
    definition: "განსხვავებით, საპირისპიროდ",
  },
  {
    word: "on the other hand",
    definition: "მეორე მხრივ",
  },
  {
    word: "conversely",
    definition: "პირიქით",
  },
  {
    word: "unlike",
    definition: "განსხვავებით",
  },
  {
    word: "similarly",
    definition: "ანალოგიურად",
  },
  {
    word: "likewise",
    definition: "ასევე, იმავე გზით",
  },
  {
    word: "in the same way",
    definition: "იმავე გზით",
  },
  {
    word: "both...and...",
    definition: "როგორც... ისე...",
  },
  {
    word: "correspondingly",
    definition: "შესაბამისად",
  },
  {
    word: "than",
    definition: "ვიდრე",
  },
  {
    word: "as...as",
    definition: "ისეთივე... როგორც",
  },
  {
    word: "twice as high as",
    definition: "ორჯერ მაღალი, ვიდრე",
  },
  {
    word: "three times the amount of",
    definition: "სამჯერ მეტი, ვიდრე",
  },
  {
    word: "half as much as",
    definition: "ნახევარი, რაც",
  },
  {
    word: "correlate with",
    definition: "კორელაციაშია",
  },
  {
    word: "mirror",
    definition: "იმეორებს, ასახავს",
  },
  {
    word: "coincide with",
    definition: "ემთხვევა",
  },
  {
    word: "diverge",
    definition: "განსხვავდება, დაცილება",
  },
  {
    word: "converge",
    definition: "ერთმანეთს უახლოვდება",
  },
  {
    word: "intersect",
    definition: "იკვეთება",
  },
  {
    word: "cross over",
    definition: "გადაკვეთა",
  },
  {
    word: "proportionally",
    definition: "პროპორციულად",
  },
  {
    word: "relatively",
    definition: "შედარებით, მეტ-ნაკლებად",
  },
  {
    word: "comparatively",
    definition: "შედარებით",
  },
  {
    word: "contrast with",
    definition: "საპირისპიროა, კონტრასტშია",
  },
  {
    word: "differ from",
    definition: "განსხვავდება",
  },
  {
    word: "correspond to",
    definition: "შეესაბამება",
  },
  {
    word: "be transformed into",
    definition: "გარდაიქმნა -ად",
  },
  {
    word: "be converted into",
    definition: "გადაკეთდა -ად",
  },
  {
    word: "be replaced by",
    definition: "შეიცვალა -ით",
  },
  {
    word: "be demolished",
    definition: "დაინგრა, დაანგრიეს",
  },
  {
    word: "be knocked down",
    definition: "დაანგრიეს",
  },
  {
    word: "be constructed",
    definition: "აიგო",
  },
  {
    word: "be built",
    definition: "აშენდა",
  },
  {
    word: "be established",
    definition: "დაარსდა",
  },
  {
    word: "be expanded",
    definition: "გაფართოვდა",
  },
  {
    word: "be extended",
    definition: "გაგრძელდა",
  },
  {
    word: "be widened",
    definition: "გაფართოვდა (გზა)",
  },
  {
    word: "be relocated",
    definition: "გადაადგილდა",
  },
  {
    word: "be redeveloped",
    definition: "ხელახლა განვითარდა",
  },
  {
    word: "be renovated",
    definition: "განახლდა",
  },
  {
    word: "be modernized",
    definition: "მოდერნიზდა",
  },
  {
    word: "be removed",
    definition: "მოიხსნა, ამოიღეს",
  },
  {
    word: "disappear",
    definition: "გაქრა",
  },
  {
    word: "newly built",
    definition: "ახლადაშენებული",
  },
  {
    word: "no longer exists",
    definition: "აღარ არსებობს",
  },
  {
    word: "north",
    definition: "ჩრდილოეთი",
  },
  {
    word: "south",
    definition: "სამხრეთი",
  },
  {
    word: "east",
    definition: "აღმოსავლეთი",
  },
  {
    word: "west",
    definition: "დასავლეთი",
  },
  {
    word: "adjacent to",
    definition: "მიმდებარედ",
  },
  {
    word: "next to",
    definition: "გვერდით",
  },
  {
    word: "opposite",
    definition: "საპირისპიროდ",
  },
  {
    word: "bordering",
    definition: "საზღვართან",
  },
  {
    word: "in the vicinity of",
    definition: "-ის სიახლოვეს",
  },
  {
    word: "on the outskirts of",
    definition: "-ის გარეუბანში",
  },
  {
    word: "in the centre of",
    definition: "-ის ცენტრში",
  },
  {
    word: "surrounding",
    definition: "მიმდებარე",
  },
  {
    word: "situated",
    definition: "მდებარეობს",
  },
  {
    word: "residential",
    definition: "საცხოვრებელი",
  },
  {
    word: "commercial",
    definition: "კომერციული",
  },
  {
    word: "agricultural",
    definition: "სასოფლო-სამეურნეო",
  },
  {
    word: "industrial area",
    definition: "სამრეწველო ზონა",
  },
  {
    word: "previously",
    definition: "წინათ",
  },
  {
    word: "formerly",
    definition: "ადრე",
  },
  {
    word: "originally",
    definition: "თავდაპირველად, ორიგინალში",
  },
  {
    word: "currently",
    definition: "ამჟამად",
  },
  {
    word: "now",
    definition: "ახლა",
  },
  {
    word: "by [year]",
    definition: "[წლისთვის]",
  },
  {
    word: "firstly",
    definition: "პირველ რიგში",
  },
  {
    word: "at the outset",
    definition: "დასაწყისში",
  },
  {
    word: "to begin with",
    definition: "დასაწყისისთვის",
  },
  {
    word: "next",
    definition: "შემდეგი",
  },
  {
    word: "then",
    definition: "შემდეგ",
  },
  {
    word: "after that",
    definition: "ამის შემდეგ",
  },
  {
    word: "following this",
    definition: "ამას მოჰყვება",
  },
  {
    word: "meanwhile",
    definition: "ამასობაში",
  },
  {
    word: "simultaneously",
    definition: "ერთდროულად",
  },
  {
    word: "at the same time",
    definition: "იმავდროულად",
  },
  {
    word: "finally",
    definition: "საბოლოოდ",
  },
  {
    word: "lastly",
    definition: "და ბოლოს",
  },
  {
    word: "at the final stage",
    definition: "საბოლოო ეტაპზე",
  },
  {
    word: "be heated",
    definition: "თბება",
  },
  {
    word: "be cooled",
    definition: "გაცივდება",
  },
  {
    word: "be mixed",
    definition: "ირევა",
  },
  {
    word: "be combined",
    definition: "ერწყმის",
  },
  {
    word: "be added",
    definition: "ემატება",
  },
  {
    word: "be poured",
    definition: "ისხმება",
  },
  {
    word: "be filtered",
    definition: "იფილტრება",
  },
  {
    word: "be extracted",
    definition: "მოიპოვება",
  },
  {
    word: "be processed",
    definition: "მუშავდება, პროცესს გადის",
  },
  {
    word: "be transported",
    definition: "გადაიტანება",
  },
  {
    word: "be transferred",
    definition: "გადადის",
  },
  {
    word: "be packaged",
    definition: "იფუთება",
  },
  {
    word: "be stored",
    definition: "ინახება",
  },
  {
    word: "be released",
    definition: "გამოიყოფა",
  },
  {
    word: "be produced",
    definition: "იწარმოება",
  },
  {
    word: "undergoes",
    definition: "განიცდის",
  },
  {
    word: "be sorted",
    definition: "სორტირდება",
  },
  {
    word: "be treated",
    definition: "მუშავდება",
  },
  {
    word: "be dried",
    definition: "შრება",
  },
  {
    word: "be crushed",
    definition: "ილექება, იმტვრევა",
  },
  {
    word: "be refined",
    definition: "იხვეწება",
  },
  {
    word: "the cycle repeats",
    definition: "ციკლი მეორდება",
  },
  {
    word: "the process starts again",
    definition: "პროცესი ხელახლა იწყება",
  },
  {
    word: "be recycled",
    definition: "გადამუშავდება",
  },
  {
    word: "returns to",
    definition: "უბრუნდება",
  },
  {
    word: "as a result",
    definition: "შედეგად",
  },
  {
    word: "once this is done",
    definition: "ამის დასრულების შემდეგ",
  },
  {
    word: "after which",
    definition: "რის შემდეგაც",
  },
  {
    word: "before",
    definition: "მანამდე",
  },
  {
    word: "prior to",
    definition: "-მდე",
  },
  {
    word: "upon completion",
    definition: "დასრულების შემდეგ",
  },
  {
    word: "output",
    definition: "საბოლოო შედეგი",
  },
  {
    word: "by-product",
    definition: "ქვეპროდუქტი",
  },
  {
    word: "end product",
    definition: "საბოლოო პროდუქტი",
  },
  {
    word: "raw material",
    definition: "ნედლეული",
  },
  {
    word: "make up",
    definition: "შეადგენენ",
  },
  {
    word: "account for",
    definition: "აღრიცხვაზე არიან",
  },
  {
    word: "constitute",
    definition: "წარმოადგენენ",
  },
  {
    word: "comprise",
    definition: "მოიცავს",
  },
  {
    word: "modest",
    definition: "მოკრძალებული",
  },
  {
    word: "considerable",
    definition: "მნიშვნელოვანი",
  },
  {
    word: "variation",
    definition: "ცვალებადობა",
  },
  {
    word: "growth",
    definition: "ზრდა",
  },
  {
    word: "fluctuation",
    definition: "მერყეობა",
  },
  {
    word: "go down/up",
    definition: "დაწევა/აწევა",
  },
  {
    word: "nearly three quarters",
    definition: "73%",
  },
  {
    word: "just over a half",
    definition: "51%",
  },
  {
    word: "just under a half",
    definition: "49%",
  },
  {
    word: "nearly a third",
    definition: "32%",
  },
  {
    word: "a tiny fraction",
    definition: "3%",
  },
  {
    word: "exactly a half",
    definition: "50%",
  },
  {
    word: "roughly one quarter",
    definition: "26%",
  },
  {
    word: "almost a quarter",
    definition: "24%",
  },
  {
    word: "approximately three quarters",
    definition: "77%",
  },
  {
    word: "a large proportion",
    definition: "70% p",
  },
  {
    word: "a significant majority",
    definition: "71% p",
  },
  {
    word: "a small minority",
    definition: "15% p",
  },
  {
    word: "an insignificant minority",
    definition: "3% p",
  },
  {
    word: "edge up",
    definition: "მცირედით გაზრდა",
  },
  {
    word: "edge down",
    definition: "მცირედით შემცირება",
  },
];

const task_2 = [
  {
    word: "It is often argued that...",
    definition: "ხშირად ამტკიცებენ, რომ...",
  },
  {
    word: "In recent years, ... has become a controversial/widely discussed issue.",
    definition: "ბოლო წლებში, ... საკამათო/ფართოდ განსახილველ საკითხად იქცა.",
  },
  {
    word: "There is no doubt that...",
    definition: "უდავოა, რომ...",
  },
  {
    word: "This essay will discuss both views and give my own opinion.",
    definition:
      "წინამდებარე ესსეში განვიხილავ ორივე მოსაზრებას და წარმოვადგენ საკუთარ თვალსაზრისს.",
  },
  {
    word: "This essay will examine both sides of the argument before reaching a conclusion.",
    definition:
      "ეს ესსე განიხილავს დისკუსიის ორივე მხარეს, სანამ დასკვნას გამოვიტანთ.",
  },
  {
    word: "While some people believe..., others argue that...",
    definition:
      "მიუხედავად იმისა, რომ ზოგიერთი თვლის, რომ..., სხვები ამტკიცებენ, რომ...",
  },
  {
    word: "In my opinion, ...",
    definition: "ჩემი აზრით, ...",
  },
  {
    word: "I strongly believe that...",
    definition: "მტკიცედ მჯერა, რომ...",
  },
  {
    word: "From my point of view, ...",
    definition: "ჩემი თვალსაზრისით, ...",
  },
  {
    word: "As far as I am concerned, ...",
    definition: "რაც შემეხება მე, ...",
  },
  {
    word: "I am inclined to agree that...",
    definition: "მიდრეკილი ვარ დავეთანხმო, რომ...",
  },
  {
    word: "It seems to me that...",
    definition: "მე მგონია, რომ...",
  },
  {
    word: "This is mainly due to the fact that...",
    definition: "ეს ძირითადად გამოწვეულია იმით, რომ...",
  },
  {
    word: "As a result, ...",
    definition: "შედეგად, ...",
  },
  {
    word: "This leads to...",
    definition: "ეს იწვევს...",
  },
  {
    word: "Consequently, ...",
    definition: "შესაბამისად, ...",
  },
  {
    word: "This can be attributed to...",
    definition: "ეს შეიძლება მიეწეროს...",
  },
  {
    word: "One of the main reasons for this is...",
    definition: "ამის ერთ-ერთი მთავარი მიზეზი არის...",
  },
  {
    word: "Therefore, ...",
    definition: "ამიტომ, ...",
  },
  {
    word: "Furthermore, ...",
    definition: "გარდა ამისა, ...",
  },
  {
    word: "In addition, ...",
    definition: "დამატებით, ...",
  },
  {
    word: "Moreover, ...",
    definition: "უფრო მეტიც, ...",
  },
  {
    word: "Not only..., but also...",
    definition: "არა მხოლოდ..., არამედ ასევე...",
  },
  {
    word: "Besides, ...",
    definition: "გარდა ამისა, ...",
  },
  {
    word: "Another point worth noting is that...",
    definition: "კიდევ ერთი მნიშვნელოვანი საკითხია ის, რომ...",
  },
  {
    word: "On the other hand, ...",
    definition: "მეორე მხრივ, ...",
  },
  {
    word: "However, ...",
    definition: "თუმცა, ...",
  },
  {
    word: "Despite this, ...",
    definition: "ამის მიუხედავად, ...",
  },
  {
    word: "Although/Even though...",
    definition: "მიუხედავად იმისა, რომ.../თუმცა...",
  },
  {
    word: "Nevertheless, ...",
    definition: "მიუხედავად ამისა, ...",
  },
  {
    word: "While it is true that..., it is also important to consider...",
    definition:
      "მართალია, რომ..., მაგრამ ასევე მნიშვნელოვანია გავითვალისწინოთ...",
  },
  {
    word: "In contrast, ...",
    definition: "საპირისპიროდ, ...",
  },
  {
    word: "Whereas...",
    definition: "მაშინ როცა...",
  },
  {
    word: "For example, / For instance, ...",
    definition: "მაგალითად, ...",
  },
  {
    word: "A good example of this is...",
    definition: "ამის კარგი მაგალითია...",
  },
  {
    word: "This is evident/illustrated in...",
    definition: "ეს კარგად ჩანს/ილუსტრირებულია...",
  },
  {
    word: "To illustrate this point, ...",
    definition: "ამ საკითხის საილუსტრაციოდ, ...",
  },
  {
    word: "Such as / like...",
    definition: "როგორიცაა...",
  },
  {
    word: "Compared to..., ...",
    definition: "შედარებით ..., ...",
  },
  {
    word: "Similarly, ...",
    definition: "ანალოგიურად, ...",
  },
  {
    word: "In the same way, ...",
    definition: "იმავე გზით, ...",
  },
  {
    word: "Unlike..., ...",
    definition: "განსხვავებით ...-ისგან, ...",
  },
  {
    word: "One major advantage of this is...",
    definition: "ამის ერთ-ერთი მთავარი უპირატესობა არის...",
  },
  {
    word: "The main benefit of... is...",
    definition: "...ის ძირითადი სარგებელი არის...",
  },
  {
    word: "A drawback/disadvantage of this is that...",
    definition: "ამის ნაკლი/მინუსი არის ის, რომ...",
  },
  {
    word: "This has both positive and negative effects.",
    definition: "ამას აქვს როგორც დადებითი, ისე უარყოფითი შედეგები.",
  },
  {
    word: "The benefits of ... far outweigh the drawbacks.",
    definition: "...-ის სარგებელი მნიშვნელოვნად აღემატება მის ნაკლოვანებებს.",
  },
  {
    word: "The downside of this is...",
    definition: "ამის უარყოფითი მხარეა...",
  },
  {
    word: "It could be argued that...",
    definition: "შეიძლება ითქვას, რომ...",
  },
  {
    word: "It is likely that...",
    definition: "სავარაუდოა, რომ...",
  },
  {
    word: "To some extent, ...",
    definition: "გარკვეულწილად, ...",
  },
  {
    word: "This may/might lead to...",
    definition: "ამან შესაძლოა გამოიწვიოს...",
  },
  {
    word: "Arguably, ...",
    definition: "შესაძლოა ითქვას, რომ...",
  },
  {
    word: "It is crucial/essential that...",
    definition: "გადამწყვეტი/აუცილებელია, რომ...",
  },
  {
    word: "What is more important is...",
    definition: "რაც უფრო მნიშვნელოვანია, არის ის, რომ...",
  },
  {
    word: "It cannot be denied that...",
    definition: "არ შეიძლება უარვყოთ, რომ...",
  },
  {
    word: "Above all, ...",
    definition: "უპირველეს ყოვლისა, ...",
  },
  {
    word: "One possible/effective solution would be to...",
    definition: "ერთ-ერთი შესაძლო/ეფექტური გამოსავალი იქნება...",
  },
  {
    word: "This problem could be addressed/solved by...",
    definition: "ეს პრობლემა შეიძლება მოგვარდეს...",
  },
  {
    word: "Governments/Individuals should take steps to...",
    definition: "მთავრობებმა/ინდივიდებმა უნდა გადადგან ნაბიჯები, რათა...",
  },
  {
    word: "A possible way to tackle this issue is to...",
    definition: "ამ პრობლემის მოგვარების ერთ-ერთი გზა არის...",
  },
  {
    word: "In conclusion, ...",
    definition: "დასკვნის სახით, ...",
  },
  {
    word: "To sum up, ...",
    definition: "შეჯამებისთვის, ...",
  },
  {
    word: "Overall, ...",
    definition: "საერთო ჯამში, ...",
  },
  {
    word: "Taking everything into account, ...",
    definition: "ყველაფრის გათვალისწინებით, ...",
  },
  {
    word: "In light of the above, ...",
    definition: "ზემოთქმულის გათვალისწინებით, ...",
  },
];

const english_graph = [...task_1, ...task_2];
