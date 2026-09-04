/* ============================================================
   DAY 32 — REASONING & GENERAL APTITUDE (SECOND SET)
   50 questions · 60 minutes · 0.25 negative marking

     Verbal & Logical Reasoning ............ 13   d32l1  – d32l13
     Quantitative Aptitude ................. 13   d32q14 – d32q26
     Analytical & Critical Reasoning ....... 12   d32c27 – d32c38
     Non-verbal Reasoning .................. 12   d32n39 – d32n50

   Same syllabus and the same section sizes as Day 31, so the two
   papers can be compared section by section.

   Thirteen items deliberately revisit the concepts missed in Day 31
   (questions 2, 9, 16, 22, 23, 24, 30, 31, 34, 35, 44, 48, 49) with
   fresh numbers and fresh wording; the other thirty-seven cover new
   ground within the same sub-topics.

   Non-verbal items carry inline SVG diagrams, and every one of them
   also states in words what the figure shows, so a question stays
   answerable if the drawing fails to render.
   ============================================================ */
const DAY32 = {
    day: 32,
    title: "Day 32",
    subtitle: "Reasoning & General Aptitude \u00B7 Second Set",
    durationMinutes: 60,
    negativeMarking: 0.25,
    chapters: [
        {
            id: "logic32",
            name: "Verbal & Logical Reasoning",
            subject: "Logical",
            accent: "blue",
            blurb: "Q1–13 · analogy and classification, letter and value codes, series completion, blood relations, direction sense, ranking and conditional deduction.",
            questions: [
                {
                    id: "d32l1",
                    text: "<em>Whisper : Shout :: Drizzle : ?</em>",
                    options: [
                        { key: "a", text: "Cloud" },
                        { key: "b", text: "Downpour" },
                        { key: "c", text: "Rain" },
                        { key: "d", text: "Thunderstorm" }
                    ],
                    answer: "b",
                    explanation: "The pair sets a mild form of something against its intense form: a whisper is speech at its faintest and a shout is speech at its loudest. A drizzle is rainfall at its faintest, so its intense counterpart is a downpour. Rain is the general phenomenon rather than the intense form, a cloud is where it comes from, and a thunderstorm is a different kind of weather event rather than simply heavier drizzle."
                },
                {
                    id: "d32l2",
                    text: "Three of the following four are alike in a certain way. Which one does <em>not</em> belong to the group?",
                    options: [
                        { key: "a", text: "Granite" },
                        { key: "b", text: "Marble" },
                        { key: "c", text: "Basalt" },
                        { key: "d", text: "Quartz" }
                    ],
                    answer: "d",
                    explanation: "Granite, marble and basalt are rocks, that is aggregates built from several different minerals. Quartz is a single mineral with one definite composition, so it is the odd one out. The grouping turns on 'made of one substance' against 'made of many', the same idea that separates a pure metal from an alloy."
                },
                {
                    id: "d32l3",
                    text: "If MOUSE is coded as NLFHV, how is TIGER coded in the same language?",
                    options: [
                        { key: "a", text: "GRTVJ" },
                        { key: "b", text: "HRTVI" },
                        { key: "c", text: "GSTVI" },
                        { key: "d", text: "GRTVI" }
                    ],
                    answer: "d",
                    explanation: "Each letter is replaced by its partner counted from the other end of the alphabet, so A pairs with Z, B with Y and so on: M becomes N, O becomes L, U becomes F, S becomes H and E becomes V. Applying the same rule to TIGER gives T&rarr;G, I&rarr;R, G&rarr;T, E&rarr;V and R&rarr;I, that is GRTVI. A quick check is that the two letters of every pair add up to 27."
                },
                {
                    id: "d32l4",
                    text: "In a certain code A = 2, B = 4, C = 6 and so on. What is the code value of the word HEAD?",
                    options: [
                        { key: "a", text: "32" },
                        { key: "b", text: "36" },
                        { key: "c", text: "38" },
                        { key: "d", text: "40" }
                    ],
                    answer: "b",
                    explanation: "Each letter is worth twice its position in the alphabet. H is the 8th letter and scores 16, E the 5th and scores 10, A the 1st and scores 2, D the 4th and scores 8. The total is 16 + 10 + 2 + 8 = 36. Adding the plain positions instead gives 18, which is half the correct value."
                },
                {
                    id: "d32l5",
                    text: "In a certain code, '<b>pit na ro</b>' means 'birds fly high', '<b>ro sa ka</b>' means 'birds build nests' and '<b>na li ka</b>' means 'nests are high'. Which word stands for '<b>nests</b>'?",
                    options: [
                        { key: "a", text: "ka" },
                        { key: "b", text: "ro" },
                        { key: "c", text: "pit" },
                        { key: "d", text: "li" }
                    ],
                    answer: "a",
                    explanation: "'nests' is the only English word shared by the second and third statements, and the only code word those two share is 'ka'. The other pairings confirm it: 'birds' is common to the first two statements and both contain 'ro', while 'high' is common to the first and third and both contain 'na'."
                },
                {
                    id: "d32l6",
                    text: "Which letter comes next in the series? <b>A, C, F, J, O, ?</b>",
                    options: [
                        { key: "a", text: "S" },
                        { key: "b", text: "T" },
                        { key: "c", text: "U" },
                        { key: "d", text: "V" }
                    ],
                    answer: "c",
                    explanation: "The gap between successive letters grows by one each time: A to C is 2, C to F is 3, F to J is 4 and J to O is 5. The next gap is 6, and six places beyond O, the 15th letter, is the 21st letter, U."
                },
                {
                    id: "d32l7",
                    text: "Find the missing term: <b>3, 8, 15, 24, 35, ?</b>",
                    options: [
                        { key: "a", text: "44" },
                        { key: "b", text: "46" },
                        { key: "c", text: "47" },
                        { key: "d", text: "48" }
                    ],
                    answer: "d",
                    explanation: "Each term is one less than a perfect square: 4 &minus; 1, 9 &minus; 1, 16 &minus; 1, 25 &minus; 1 and 36 &minus; 1. The next square is 49, so the term is 48. The same thing shows in the differences 5, 7, 9, 11, which grow by 2, so the next difference is 13 and 35 + 13 = 48."
                },
                {
                    id: "d32l8",
                    text: "Rohit is the son of Kamal. Sita is the daughter of Kamal. Bimal is the brother of Kamal. Radha is the mother of Bimal. How is Radha related to Sita?",
                    options: [
                        { key: "a", text: "Grandmother" },
                        { key: "b", text: "Aunt" },
                        { key: "c", text: "Mother" },
                        { key: "d", text: "Sister-in-law" }
                    ],
                    answer: "a",
                    explanation: "Radha is the mother of Bimal, and Bimal is Kamal's brother, so Radha is also Kamal's mother. Sita is Kamal's daughter, which makes Radha her grandmother. Notice that Kamal's own gender is never stated, but the answer holds either way."
                },
                {
                    id: "d32l9",
                    text: "If <b>A &divide; B</b> means 'A is the father of B', <b>A &times; B</b> means 'A is the sister of B' and <b>A + B</b> means 'A is the wife of B', which expression shows that <b>M is the paternal aunt of N</b>?",
                    options: [
                        { key: "a", text: "M &divide; R &times; N" },
                        { key: "b", text: "M &times; R &divide; N" },
                        { key: "c", text: "M + R &divide; N" },
                        { key: "d", text: "M &times; R + N" }
                    ],
                    answer: "b",
                    explanation: "A paternal aunt is the sister of the father. In M &times; R &divide; N, the first symbol makes M the sister of R and the second makes R the father of N, so M is the sister of N's father. Option (a) makes M the father of N's sister, which is simply N's father; option (c) makes M the wife of N's father, that is N's mother; and option (d) makes M the sister of N's wife."
                },
                {
                    id: "d32l10",
                    text: "A man walks 5 km towards the north, turns right and walks 3 km, turns right again and walks 9 km, then turns right once more and walks 3 km. How far is he from his starting point and in which direction?",
                    options: [
                        { key: "a", text: "3 km west" },
                        { key: "b", text: "4 km north" },
                        { key: "c", text: "4 km south" },
                        { key: "d", text: "6 km south" }
                    ],
                    answer: "c",
                    explanation: "Each right turn moves him one quarter clockwise, so the legs run north, east, south and west. The two east&ndash;west legs are both 3 km and cancel, leaving 5 km north against 9 km south, a net 4 km to the south of the start."
                },
                {
                    id: "d32l11",
                    text: "At sunrise Rita begins walking with the sun on her right. After a while she turns left, walks on, and then turns left once more. In which direction is she facing now?",
                    options: [
                        { key: "a", text: "East" },
                        { key: "b", text: "North" },
                        { key: "c", text: "South" },
                        { key: "d", text: "West" }
                    ],
                    answer: "c",
                    explanation: "At sunrise the sun is in the east. If the east is on her right hand she must be facing north. A left turn from north brings her to the west, and a second left turn brings her to the south."
                },
                {
                    id: "d32l12",
                    text: "In a class of 40 students Meena ranks 12th from the top. Two students ranked above her and three ranked below her leave the class. What is Meena's new rank from the bottom?",
                    options: [
                        { key: "a", text: "24th" },
                        { key: "b", text: "25th" },
                        { key: "c", text: "26th" },
                        { key: "d", text: "27th" }
                    ],
                    answer: "c",
                    explanation: "Being 12th from the top means 11 students stand above her; losing two of them leaves 9, so she is now 10th from the top. The class now holds 40 &minus; 5 = 35 students, so her rank from the bottom is 35 &minus; 10 + 1 = 26th. Counting the students below her directly gives the same answer: 40 &minus; 12 &minus; 3 = 25 below her, so she is 26th from the bottom."
                },
                {
                    id: "d32l13",
                    text: "<b>Statements:</b> Every student who scores above 90 receives a scholarship. Ramesh received a scholarship.<br><b>Which conclusion follows logically?</b>",
                    options: [
                        { key: "a", text: "Ramesh scored above 90." },
                        { key: "b", text: "Ramesh did not score above 90." },
                        { key: "c", text: "Some students who scored above 90 received no scholarship." },
                        { key: "d", text: "Nothing definite can be concluded about Ramesh's score." }
                    ],
                    answer: "d",
                    explanation: "The rule guarantees a scholarship to high scorers, but it does not say that they are the only ones who get one. Ramesh may have earned his scholarship on some other ground, so his score cannot be fixed either way. Reasoning backwards from the consequence to the condition like this is the classic invalid move; only denying the consequence would have allowed a firm conclusion."
                }
            ]
        },
        {
            id: "quant32",
            name: "Quantitative Aptitude",
            subject: "Quantitative",
            accent: "amber",
            blurb: "Q14–26 · number series and analogy, simplification and approximation, ratio, percentage, average and age, time, work, speed and distance, and data interpretation.",
            questions: [
                {
                    id: "d32q14",
                    text: "Find the missing term: <b>4, 9, 25, 49, 121, ?</b>",
                    options: [
                        { key: "a", text: "169" },
                        { key: "b", text: "132" },
                        { key: "c", text: "144" },
                        { key: "d", text: "196" }
                    ],
                    answer: "a",
                    explanation: "Every term is the square of a prime number: 2&sup2;, 3&sup2;, 5&sup2;, 7&sup2; and 11&sup2;. The next prime is 13, so the term is 13&sup2; = 169. Option (c) is 12&sup2; and option (d) is 14&sup2;, both squares of composite numbers, which breaks the pattern."
                },
                {
                    id: "d32q15",
                    text: "<em>11 : 132 :: 13 : ?</em>",
                    options: [
                        { key: "a", text: "168" },
                        { key: "b", text: "182" },
                        { key: "c", text: "195" },
                        { key: "d", text: "208" }
                    ],
                    answer: "b",
                    explanation: "The rule multiplies the number by the next whole number: 11 &times; 12 = 132. Applying it to 13 gives 13 &times; 14 = 182. The same value can be reached as 13&sup2; + 13 = 169 + 13."
                },
                {
                    id: "d32q16",
                    text: "Simplify: <b>&radic;0.0064 &times; 10&sup2; &divide; 0.4</b>",
                    options: [
                        { key: "a", text: "0.2" },
                        { key: "b", text: "2" },
                        { key: "c", text: "20" },
                        { key: "d", text: "200" }
                    ],
                    answer: "c",
                    explanation: "Take the root first: 0.08 &times; 0.08 = 0.0064, so &radic;0.0064 = 0.08. Then 0.08 &times; 100 = 8, and dividing by 0.4 is the same as multiplying by 2.5, giving 20. The safe way to place the decimal point is to write 0.0064 as 64 &times; 10&#8315;&#8308;, whose root is 8 &times; 10&#8315;&sup2;."
                },
                {
                    id: "d32q17",
                    text: "Which value is closest to <b>&radic;1443 + 24.02 &times; 4.98</b>?",
                    options: [
                        { key: "a", text: "138" },
                        { key: "b", text: "144" },
                        { key: "c", text: "152" },
                        { key: "d", text: "158" }
                    ],
                    answer: "d",
                    explanation: "Since 38&sup2; = 1444, the root is just under 38. The product is close to 24 &times; 5 = 120, and multiplication comes before addition, so the expression is about 38 + 120 = 158. Adding first and then multiplying would be the common mistake."
                },
                {
                    id: "d32q18",
                    text: "In an examination 35% of the candidates failed in English, 25% failed in Mathematics and 15% failed in both subjects. What percentage of the candidates passed in both subjects?",
                    options: [
                        { key: "a", text: "55%" },
                        { key: "b", text: "45%" },
                        { key: "c", text: "60%" },
                        { key: "d", text: "65%" }
                    ],
                    answer: "a",
                    explanation: "Those who failed in at least one subject are 35 + 25 &minus; 15 = 45 per cent, because the 15 per cent who failed in both were counted twice. The rest, 100 &minus; 45 = 55 per cent, passed in both. Simply adding 35 and 25 to get 60 is the trap the overlap is there to catch."
                },
                {
                    id: "d32q19",
                    text: "The ratio of boys to girls in a school is 7 : 5. If 30 more girls join the school, the ratio becomes 7 : 6. How many boys are there in the school?",
                    options: [
                        { key: "a", text: "180" },
                        { key: "b", text: "210" },
                        { key: "c", text: "245" },
                        { key: "d", text: "252" }
                    ],
                    answer: "b",
                    explanation: "Write the numbers as 7k boys and 5k girls. The new condition gives 7k : (5k + 30) = 7 : 6, so 42k = 35k + 210 and k = 30. The number of boys is 7 &times; 30 = 210. Because the boys' share of the ratio stayed at 7, the extra girls simply account for one part, which is another quick route to k = 30."
                },
                {
                    id: "d32q20",
                    text: "The average weight of 8 men increases by 2.5 kg when one of them, weighing 56 kg, is replaced by a new man. What is the weight of the new man?",
                    options: [
                        { key: "a", text: "66 kg" },
                        { key: "b", text: "72 kg" },
                        { key: "c", text: "76 kg" },
                        { key: "d", text: "80 kg" }
                    ],
                    answer: "c",
                    explanation: "The number of men does not change, so an average rise of 2.5 kg means the total rose by 8 &times; 2.5 = 20 kg. That whole rise comes from the swap, so the new man is 20 kg heavier than the one he replaced, that is 56 + 20 = 76 kg."
                },
                {
                    id: "d32q21",
                    text: "The average age of a family of five members is 24 years. The youngest member is 6 years old. What was the average age of the family at the time the youngest member was born?",
                    options: [
                        { key: "a", text: "18 years" },
                        { key: "b", text: "20 years" },
                        { key: "c", text: "21 years" },
                        { key: "d", text: "22.5 years" }
                    ],
                    answer: "d",
                    explanation: "The five ages now total 5 &times; 24 = 120 years. Six years ago the family had only four members, and each of them was 6 years younger, so their total then was 120 &minus; 6 &minus; (4 &times; 6) = 90 years. The average over those four members is 90 &divide; 4 = 22.5 years. Dividing by five instead of four is the usual slip."
                },
                {
                    id: "d32q22",
                    text: "Twenty men can finish a piece of work in 24 days. After they have worked for 9 days, eight of them leave. In how many more days will the remaining men finish the work?",
                    options: [
                        { key: "a", text: "25 days" },
                        { key: "b", text: "20 days" },
                        { key: "c", text: "22 days" },
                        { key: "d", text: "30 days" }
                    ],
                    answer: "a",
                    explanation: "The whole job is 20 &times; 24 = 480 man-days. The first nine days use up 20 &times; 9 = 180 man-days, leaving 300. Only 12 men remain, so the rest takes 300 &divide; 12 = 25 more days. The question asks for the extra days, not the total of 34."
                },
                {
                    id: "d32q23",
                    text: "A train running at 90 km/h crosses a pole in 10 seconds. How long will the same train take to cross a platform 375 m long?",
                    options: [
                        { key: "a", text: "21 s" },
                        { key: "b", text: "25 s" },
                        { key: "c", text: "28 s" },
                        { key: "d", text: "30 s" }
                    ],
                    answer: "b",
                    explanation: "Multiplying by 5/18 turns 90 km/h into 25 m/s. A pole has no length, so the 10 seconds cover the train alone: 25 &times; 10 = 250 m. Crossing the platform needs the train's length plus the platform's, that is 250 + 375 = 625 m, which at 25 m/s takes 25 seconds."
                },
                {
                    id: "d32q24",
                    text: "A car travels from one town to another at 40 km/h and returns along the same road at 60 km/h. What is its average speed for the whole trip?",
                    options: [
                        { key: "a", text: "44 km/h" },
                        { key: "b", text: "46 km/h" },
                        { key: "c", text: "48 km/h" },
                        { key: "d", text: "50 km/h" }
                    ],
                    answer: "c",
                    explanation: "Average speed is total distance divided by total time, never the plain mean of the two speeds. Taking the one-way distance as 120 km, the outward trip takes 3 hours and the return 2 hours, so 240 km takes 5 hours and the average is 48 km/h. Because the two distances are equal, the shortcut 2 &times; 40 &times; 60 &divide; (40 + 60) gives the same 48, and it always falls below the tempting 50."
                },
                {
                    id: "d32q25",
                    text: "The pie chart shows how a household divides its monthly budget of &#8377;36,000. By how much does the amount spent on food exceed the amount spent on transport?<svg class='q-fig' viewBox='0 0 214 124' width='260' height='150' role='img' aria-label='Pie chart of a monthly budget: food 30 percent, rent 25 percent, education 15 percent, transport 10 percent and savings 20 percent'><g stroke='currentColor' stroke-width='1' fill='currentColor'><path d='M60 62 L60 17 A45 45 0 0 1 102.8 75.91 Z' fill-opacity='0.5'/><path d='M60 62 L102.8 75.91 A45 45 0 0 1 46.09 104.8 Z' fill-opacity='0.38'/><path d='M60 62 L46.09 104.8 A45 45 0 0 1 17.2 75.91 Z' fill-opacity='0.27'/><path d='M60 62 L17.2 75.91 A45 45 0 0 1 17.2 48.09 Z' fill-opacity='0.17'/><path d='M60 62 L17.2 48.09 A45 45 0 0 1 60 17 Z' fill-opacity='0.07'/></g><g font-size='7' text-anchor='middle' fill='currentColor'><text x='82.65' y='45.54'>30%</text><text x='72.71' y='86.95'>25%</text><text x='40.2' y='81.8'>15%</text><text x='32' y='62'>10%</text><text x='43.54' y='39.35'>20%</text></g><g font-size='7.5' fill='currentColor'><rect x='122' y='19' width='9' height='9' fill-opacity='0.5' stroke='currentColor' stroke-width='0.7'/><text x='136' y='26'>Food 30%</text><rect x='122' y='37' width='9' height='9' fill-opacity='0.38' stroke='currentColor' stroke-width='0.7'/><text x='136' y='44'>Rent 25%</text><rect x='122' y='55' width='9' height='9' fill-opacity='0.27' stroke='currentColor' stroke-width='0.7'/><text x='136' y='62'>Education 15%</text><rect x='122' y='73' width='9' height='9' fill-opacity='0.17' stroke='currentColor' stroke-width='0.7'/><text x='136' y='80'>Transport 10%</text><rect x='122' y='91' width='9' height='9' fill-opacity='0.07' stroke='currentColor' stroke-width='0.7'/><text x='136' y='98'>Savings 20%</text></g></svg>",
                    options: [
                        { key: "a", text: "&#8377;3,600" },
                        { key: "b", text: "&#8377;5,400" },
                        { key: "c", text: "&#8377;6,300" },
                        { key: "d", text: "&#8377;7,200" }
                    ],
                    answer: "d",
                    explanation: "Food takes 30% and transport 10%, so the gap is 20% of the budget. That is 20/100 &times; 36,000 = &#8377;7,200. Working out the two amounts separately gives &#8377;10,800 and &#8377;3,600, whose difference is the same. Option (a) is the transport figure on its own."
                },
                {
                    id: "d32q26",
                    text: "A household divides its monthly budget as follows: Food 30%, Rent 25%, Education 15%, Transport 10% and Savings 20%. This month the budget is &#8377;36,000. If it rises to &#8377;45,000 next month while the percentages stay the same, by how much will the amount set aside as savings increase?",
                    options: [
                        { key: "a", text: "&#8377;1,800" },
                        { key: "b", text: "&#8377;1,200" },
                        { key: "c", text: "&#8377;2,000" },
                        { key: "d", text: "&#8377;2,700" }
                    ],
                    answer: "a",
                    explanation: "Savings are 20% of the budget in both months, so they go from 0.20 &times; 36,000 = &#8377;7,200 to 0.20 &times; 45,000 = &#8377;9,000, a rise of &#8377;1,800. More directly, the budget grows by &#8377;9,000 and savings take a fifth of that."
                }
            ]
        },
        {
            id: "analy32",
            name: "Analytical & Critical Reasoning",
            subject: "Analytical",
            accent: "slate",
            blurb: "Q27–38 · ordering of events, words and steps, syllogism, statement and assumption, statement and conclusion, cause and effect, course of action and Venn diagram deduction.",
            questions: [
                {
                    id: "d32c27",
                    text: "Arrange the following words in the order in which they appear in a dictionary:<br>1. Ascend &nbsp; 2. Ascertain &nbsp; 3. Ascetic &nbsp; 4. Ascribe &nbsp; 5. Asbestos",
                    options: [
                        { key: "a", text: "5, 1, 2, 3, 4" },
                        { key: "b", text: "5, 1, 3, 2, 4" },
                        { key: "c", text: "5, 2, 1, 3, 4" },
                        { key: "d", text: "1, 5, 2, 3, 4" }
                    ],
                    answer: "a",
                    explanation: "All five begin with 'as'. The third letter decides first: 'b' comes before 'c', so Asbestos leads. Of the remaining four, Ascribe has 'r' as its fourth letter while the other three have 'e', so Ascribe goes last. Among Ascend, Ascertain and Ascetic the fifth letter settles it, and n precedes r, which precedes t."
                },
                {
                    id: "d32c28",
                    text: "Arrange the following stages of building a house in their proper sequence:<br>1. Roofing &nbsp; 2. Foundation &nbsp; 3. Plastering &nbsp; 4. Site survey &nbsp; 5. Walls",
                    options: [
                        { key: "a", text: "4, 2, 5, 3, 1" },
                        { key: "b", text: "4, 2, 5, 1, 3" },
                        { key: "c", text: "2, 4, 5, 1, 3" },
                        { key: "d", text: "4, 5, 2, 1, 3" }
                    ],
                    answer: "b",
                    explanation: "Work begins with a survey of the site, after which the foundation is laid. Walls rise on the foundation, the roof rests on the walls, and plastering is a finishing job done once the shell is complete. Plastering before roofing, as in option (a), would leave the fresh surfaces exposed to the weather."
                },
                {
                    id: "d32c29",
                    text: "<b>Statements:</b> Some doctors are teachers. All teachers are graduates.<br><b>Conclusions:</b> I. All doctors are graduates. &nbsp; II. Some doctors are graduates.",
                    options: [
                        { key: "a", text: "Only conclusion I follows" },
                        { key: "b", text: "Only conclusion II follows" },
                        { key: "c", text: "Both I and II follow" },
                        { key: "d", text: "Neither I nor II follows" }
                    ],
                    answer: "b",
                    explanation: "The doctors who are teachers must be graduates, since every teacher is one, so conclusion II is safe. Conclusion I overreaches: nothing at all is said about the doctors who are not teachers, and they may hold no degree."
                },
                {
                    id: "d32c30",
                    text: "<b>Statements:</b> All engineers are graduates. Some graduates are not employed.<br><b>Conclusions:</b> I. Some engineers are not employed. &nbsp; II. All graduates are engineers.",
                    options: [
                        { key: "a", text: "Only conclusion I follows" },
                        { key: "b", text: "Only conclusion II follows" },
                        { key: "c", text: "Both I and II follow" },
                        { key: "d", text: "Neither I nor II follows" }
                    ],
                    answer: "d",
                    explanation: "The unemployed graduates need not be engineers at all, so conclusion I cannot be drawn; the engineers might every one of them be employed. Conclusion II turns the first statement around, and a universal statement never works in reverse: engineers form part of the graduates, which leaves plenty of graduates outside engineering."
                },
                {
                    id: "d32c31",
                    text: "<b>Statements:</b> All novels are books. All books are printed matter.<br><b>Conclusions:</b> I. All novels are printed matter. &nbsp; II. Some printed matter is novels.",
                    options: [
                        { key: "a", text: "Only conclusion I follows" },
                        { key: "b", text: "Only conclusion II follows" },
                        { key: "c", text: "Both I and II follow" },
                        { key: "d", text: "Neither I nor II follows" }
                    ],
                    answer: "c",
                    explanation: "Two universal statements link end to end, so novels sit inside books, which sit inside printed matter, and conclusion I follows. Conclusion II is the converse in its weaker 'some' form, and that is always valid once the smaller class is known to exist: since novels exist and all of them are printed matter, some printed matter is certainly novels."
                },
                {
                    id: "d32c32",
                    text: "<b>Statement:</b> The college has decided to hold this year's annual examination in the first week of March instead of April.<br><b>Assumptions:</b> I. The syllabus can be completed before March. &nbsp; II. Students would rather sit the examination earlier.",
                    options: [
                        { key: "a", text: "Only assumption I is implicit" },
                        { key: "b", text: "Only assumption II is implicit" },
                        { key: "c", text: "Both I and II are implicit" },
                        { key: "d", text: "Neither I nor II is implicit" }
                    ],
                    answer: "a",
                    explanation: "No college would fix an examination date without taking for granted that the course will be finished by then, so assumption I lies behind the decision. Assumption II is a guess about student preference, and the notice gives no sign that preference had anything to do with the change."
                },
                {
                    id: "d32c33",
                    text: "<b>Statement:</b> The municipality has issued a notice asking residents to store drinking water for the next two days.<br><b>Assumptions:</b> I. The water supply will be interrupted during those two days. &nbsp; II. Residents have some means of storing water.",
                    options: [
                        { key: "a", text: "Only assumption I is implicit" },
                        { key: "b", text: "Only assumption II is implicit" },
                        { key: "c", text: "Both I and II are implicit" },
                        { key: "d", text: "Neither I nor II is implicit" }
                    ],
                    answer: "c",
                    explanation: "Advice to store water only makes sense if the supply is about to stop, so assumption I is implicit. The advice is also useless unless people have tanks, drums or buckets to store it in, so assumption II is taken for granted as well. An instruction always assumes that it can be carried out."
                },
                {
                    id: "d32c34",
                    text: "<b>Statement:</b> The number of road accidents in the city fell from 1,200 to 700 in the year after speed cameras were installed on the main roads.<br><b>Conclusions:</b> I. Measures that discourage speeding can reduce accidents. &nbsp; II. There were no traffic rules in the city before the cameras were installed.",
                    options: [
                        { key: "a", text: "Only conclusion I follows" },
                        { key: "b", text: "Only conclusion II follows" },
                        { key: "c", text: "Both I and II follow" },
                        { key: "d", text: "Neither I nor II follows" }
                    ],
                    answer: "a",
                    explanation: "A sharp fall in accidents immediately after the cameras went up supports the modest claim in conclusion I. Conclusion II goes far beyond the data and is contradicted by it, since speed cameras enforce a speed limit that must already have existed."
                },
                {
                    id: "d32c35",
                    text: "<b>Event A:</b> The government sharply raised the tax on sugary soft drinks in January.<br><b>Event B:</b> Sales of bottled water rose noticeably in the months that followed.<br>Which statement best describes the relation between the two events?",
                    options: [
                        { key: "a", text: "Both are effects of an independent common cause" },
                        { key: "b", text: "A is the effect of B" },
                        { key: "c", text: "B is the effect of A" },
                        { key: "d", text: "The two events are unrelated" }
                    ],
                    answer: "c",
                    explanation: "The tax made soft drinks dearer and pushed buyers towards a cheaper substitute, and the rise in water sales began only after it. The tax is the cause and the change in buying is its effect. Option (b) reverses the order in time, which is impossible, and there is no third factor in the account that could explain both."
                },
                {
                    id: "d32c36",
                    text: "<b>Statement:</b> Several passengers were injured when an overloaded bus overturned on a hill road.<br><b>Courses of action:</b> I. Bus services on hill roads should be stopped altogether. &nbsp; II. The transport office should enforce the passenger limit strictly and penalise overloading.",
                    options: [
                        { key: "a", text: "Only course I follows" },
                        { key: "b", text: "Only course II follows" },
                        { key: "c", text: "Both I and II follow" },
                        { key: "d", text: "Neither I nor II follows" }
                    ],
                    answer: "b",
                    explanation: "Course II removes the stated cause of the accident and is practical, so it follows. Course I is an extreme response that would cut off transport for whole communities to solve a problem caused by overloading rather than by the route itself; a proper course of action must be workable, not merely drastic."
                },
                {
                    id: "d32c37",
                    text: "Which diagram best represents the relationship between <b>Kathmandu (K), Nepal (N)</b> and <b>Asia (A)</b>?",
                    options: [
                        { key: "a", text: "<svg class='opt-fig' viewBox='0 0 100 54' role='img' aria-label='Three separate circles that do not touch'><g fill='none' stroke='currentColor' stroke-width='1.5'><circle cx='18' cy='27' r='15'/><circle cx='50' cy='27' r='15'/><circle cx='82' cy='27' r='15'/></g><g font-size='10' text-anchor='middle' fill='currentColor'><text x='18' y='31'>K</text><text x='50' y='31'>N</text><text x='82' y='31'>A</text></g></svg>Three separate circles" },
                        { key: "b", text: "<svg class='opt-fig' viewBox='0 0 100 54' role='img' aria-label='Nepal inside Asia, with Kathmandu as a separate circle'><g fill='none' stroke='currentColor' stroke-width='1.5'><circle cx='30' cy='27' r='22'/><circle cx='29' cy='30' r='11'/><circle cx='79' cy='27' r='14'/></g><g font-size='9' text-anchor='middle' fill='currentColor'><text x='30' y='11'>A</text><text x='29' y='33'>N</text><text x='79' y='31'>K</text></g></svg>Nepal inside Asia, Kathmandu separate" },
                        { key: "c", text: "<svg class='opt-fig' viewBox='0 0 100 54' role='img' aria-label='Asia inside Kathmandu, and Kathmandu inside Nepal'><g fill='none' stroke='currentColor' stroke-width='1.5'><circle cx='34' cy='27' r='24'/><circle cx='32' cy='30' r='15'/><circle cx='30' cy='34' r='7'/></g><g font-size='9' text-anchor='middle' fill='currentColor'><text x='34' y='11'>N</text><text x='32' y='21'>K</text><text x='30' y='37'>A</text></g></svg>Asia inside Kathmandu inside Nepal" },
                        { key: "d", text: "<svg class='opt-fig' viewBox='0 0 100 54' role='img' aria-label='Kathmandu inside Nepal, and Nepal inside Asia'><g fill='none' stroke='currentColor' stroke-width='1.5'><circle cx='34' cy='27' r='24'/><circle cx='32' cy='30' r='15'/><circle cx='30' cy='34' r='7'/></g><g font-size='9' text-anchor='middle' fill='currentColor'><text x='34' y='11'>A</text><text x='32' y='21'>N</text><text x='30' y='37'>K</text></g></svg>Kathmandu inside Nepal inside Asia" }
                    ],
                    answer: "d",
                    explanation: "Kathmandu is a city within Nepal and Nepal is a country within Asia, so the three form one nest of circles running from smallest to largest. Option (c) has the nesting the wrong way round, and the other two break a containment that certainly exists."
                },
                {
                    id: "d32c38",
                    text: "In a class of 60 students, 35 play football (F), 28 play cricket (C) and 8 play neither game, as the diagram shows. How many students play both games?<svg class='q-fig' viewBox='0 0 152 90' width='196' height='116' role='img' aria-label='Two overlapping circles inside a rectangle representing a class of sixty students'><g fill='none' stroke='currentColor' stroke-width='1.5'><rect x='4' y='4' width='144' height='82' rx='5'/><circle cx='58' cy='44' r='28'/><circle cx='94' cy='44' r='28'/></g><g fill='currentColor'><text x='9' y='15' font-size='7'>60 students</text><text x='9' y='82' font-size='7'>8 play neither</text><text x='44' y='48' font-size='8' text-anchor='middle'>F = 35</text><text x='108' y='48' font-size='8' text-anchor='middle'>C = 28</text><text x='76' y='48' font-size='9' text-anchor='middle'>?</text></g></svg>",
                    options: [
                        { key: "a", text: "5" },
                        { key: "b", text: "9" },
                        { key: "c", text: "10" },
                        { key: "d", text: "11" }
                    ],
                    answer: "d",
                    explanation: "Since 8 play neither game, 60 &minus; 8 = 52 play at least one. By the inclusion&ndash;exclusion principle that figure equals 35 + 28 minus the overlap, so the overlap is 63 &minus; 52 = 11. As a check, 24 play only football, 17 play only cricket and 11 play both, which with the 8 comes to 60."
                }
            ]
        },
        {
            id: "nonvb32",
            name: "Non-verbal Reasoning",
            subject: "Non-verbal",
            accent: "emerald",
            blurb: "Q39–50 · figure series and rotation, odd one out, mirror and water images, paper folding and punching, hidden figures, cube counting and rotational symmetry.",
            questions: [
                {
                    id: "d32n39",
                    text: "In the figure series below a straight line drawn inside a square turns 45&deg; anticlockwise at every step. The first figure shows the line vertical, as drawn. What is the position of the line in the <b>fifth</b> figure?<svg class='q-fig' viewBox='0 0 68 68' width='76' height='76' role='img' aria-label='A square with a vertical line drawn inside it'><rect x='8' y='8' width='52' height='52' fill='none' stroke='currentColor' stroke-width='1.8'/><path d='M34 14V54' stroke='currentColor' stroke-width='2.6' stroke-linecap='round'/></svg>",
                    options: [
                        { key: "a", text: "Vertical" },
                        { key: "b", text: "Horizontal" },
                        { key: "c", text: "Sloping from the bottom-left to the top-right" },
                        { key: "d", text: "Sloping from the top-left to the bottom-right" }
                    ],
                    answer: "a",
                    explanation: "Reaching the fifth figure takes four steps, that is 4 &times; 45&deg; = 180&deg;. A straight line has no head or tail, so turning it through 180&deg; brings it back onto itself and it looks vertical once more. The trap is to treat the line like an arrow, which would indeed end up reversed."
                },
                {
                    id: "d32n40",
                    text: "The card below carries an arrow pointing towards its <b>top-right</b> corner. The card is given a half turn, that is 180&deg;, in its own plane. Which option shows the card afterwards?<svg class='q-fig' viewBox='0 0 60 60' width='68' height='68' role='img' aria-label='A square card with an arrow pointing to the top-right corner'><rect x='6' y='6' width='48' height='48' fill='none' stroke='currentColor' stroke-width='1.8'/><g fill='none' stroke='currentColor' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'><path d='M18 42 42 18'/><path d='M34 18H42V26'/></g></svg>",
                    options: [
                        { key: "a", text: "<svg class='opt-fig' viewBox='0 0 60 60' role='img' aria-label='Arrow pointing to the top-left corner'><rect x='6' y='6' width='48' height='48' fill='none' stroke='currentColor' stroke-width='1.8'/><g fill='none' stroke='currentColor' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'><path d='M42 42 18 18'/><path d='M18 26V18H26'/></g></svg>Towards the top-left" },
                        { key: "b", text: "<svg class='opt-fig' viewBox='0 0 60 60' role='img' aria-label='Arrow pointing to the bottom-left corner'><rect x='6' y='6' width='48' height='48' fill='none' stroke='currentColor' stroke-width='1.8'/><g fill='none' stroke='currentColor' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'><path d='M42 18 18 42'/><path d='M18 34V42H26'/></g></svg>Towards the bottom-left" },
                        { key: "c", text: "<svg class='opt-fig' viewBox='0 0 60 60' role='img' aria-label='Arrow pointing to the bottom-right corner'><rect x='6' y='6' width='48' height='48' fill='none' stroke='currentColor' stroke-width='1.8'/><g fill='none' stroke='currentColor' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'><path d='M18 18 42 42'/><path d='M34 42H42V34'/></g></svg>Towards the bottom-right" },
                        { key: "d", text: "<svg class='opt-fig' viewBox='0 0 60 60' role='img' aria-label='Arrow pointing to the top-right corner'><rect x='6' y='6' width='48' height='48' fill='none' stroke='currentColor' stroke-width='1.8'/><g fill='none' stroke='currentColor' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'><path d='M18 42 42 18'/><path d='M34 18H42V26'/></g></svg>Towards the top-right" }
                    ],
                    answer: "b",
                    explanation: "A half turn sends every point to the opposite side of the centre, so the top-right corner goes to the bottom-left and the arrow travels with it. Options (a) and (c) are reflections rather than rotations, and option (d) is the card unchanged."
                },
                {
                    id: "d32n41",
                    text: "Which of the plane figures below has <b>no line of symmetry</b>?",
                    options: [
                        { key: "a", text: "<svg class='opt-fig' viewBox='0 0 60 60' role='img' aria-label='An equilateral triangle'><polygon points='30,10 52,48 8,48' fill='none' stroke='currentColor' stroke-width='1.8'/></svg>Equilateral triangle" },
                        { key: "b", text: "<svg class='opt-fig' viewBox='0 0 60 60' role='img' aria-label='A regular pentagon'><polygon points='30,10 50.9,25.2 42.9,49.8 17.1,49.8 9.1,25.2' fill='none' stroke='currentColor' stroke-width='1.8'/></svg>Regular pentagon" },
                        { key: "c", text: "<svg class='opt-fig' viewBox='0 0 60 60' role='img' aria-label='A slanted parallelogram'><polygon points='14,44 34,16 56,16 36,44' fill='none' stroke='currentColor' stroke-width='1.8'/></svg>Parallelogram" },
                        { key: "d", text: "<svg class='opt-fig' viewBox='0 0 60 60' role='img' aria-label='An isosceles trapezium'><polygon points='12,46 48,46 40,16 20,16' fill='none' stroke='currentColor' stroke-width='1.8'/></svg>Isosceles trapezium" }
                    ],
                    answer: "c",
                    explanation: "An equilateral triangle has three lines of symmetry, a regular pentagon five and an isosceles trapezium one, running vertically through the midpoints of its parallel sides. A slanted parallelogram has none at all; folding it along either diagonal or either mid-line never makes the halves match. It does have half-turn symmetry, which is easy to confuse with a line of symmetry."
                },
                {
                    id: "d32n42",
                    text: "The figure below shows a triangular flag pointing to the <b>right</b> near the top of a vertical pole, with a round finial at the very top. A mirror is placed vertically along the line to the right. Which option shows the mirror image of this figure?<svg class='q-fig' viewBox='0 0 106 72' width='128' height='87' role='img' aria-label='A triangular flag pointing right near the top of a vertical pole with a round finial on top, and a vertical mirror line to the right'><path d='M20 6V64' fill='none' stroke='currentColor' stroke-width='2.2'/><polygon points='20,10 46,18 20,26' fill='currentColor' fill-opacity='0.35' stroke='currentColor' stroke-width='1.6'/><circle cx='20' cy='6' r='3' fill='currentColor'/><path d='M70 4V68' stroke='currentColor' stroke-width='2.6'/><text x='75' y='38' font-size='7' fill='currentColor'>mirror</text></svg>",
                    options: [
                        { key: "a", text: "<svg class='opt-fig' viewBox='0 0 60 72' role='img' aria-label='Flag pointing right near the top of the pole with the finial on top'><path d='M20 6V64' fill='none' stroke='currentColor' stroke-width='2.2'/><polygon points='20,10 46,18 20,26' fill='currentColor' fill-opacity='0.35' stroke='currentColor' stroke-width='1.6'/><circle cx='20' cy='6' r='3' fill='currentColor'/></svg>Flag to the right, finial on top" },
                        { key: "b", text: "<svg class='opt-fig' viewBox='0 0 60 72' role='img' aria-label='Flag pointing left near the bottom of the pole with the finial at the bottom'><path d='M40 6V64' fill='none' stroke='currentColor' stroke-width='2.2'/><polygon points='40,44 14,52 40,60' fill='currentColor' fill-opacity='0.35' stroke='currentColor' stroke-width='1.6'/><circle cx='40' cy='64' r='3' fill='currentColor'/></svg>Flag to the left, finial at the bottom" },
                        { key: "c", text: "<svg class='opt-fig' viewBox='0 0 60 72' role='img' aria-label='Flag pointing right near the bottom of the pole with the finial at the bottom'><path d='M20 6V64' fill='none' stroke='currentColor' stroke-width='2.2'/><polygon points='20,44 46,52 20,60' fill='currentColor' fill-opacity='0.35' stroke='currentColor' stroke-width='1.6'/><circle cx='20' cy='64' r='3' fill='currentColor'/></svg>Flag to the right, finial at the bottom" },
                        { key: "d", text: "<svg class='opt-fig' viewBox='0 0 60 72' role='img' aria-label='Flag pointing left near the top of the pole with the finial on top'><path d='M40 6V64' fill='none' stroke='currentColor' stroke-width='2.2'/><polygon points='40,10 14,18 40,26' fill='currentColor' fill-opacity='0.35' stroke='currentColor' stroke-width='1.6'/><circle cx='40' cy='6' r='3' fill='currentColor'/></svg>Flag to the left, finial on top" }
                    ],
                    answer: "d",
                    explanation: "A vertical mirror swaps left and right but leaves top and bottom untouched. The flag therefore points to the left while the finial stays at the top of the pole. Options (b) and (c) turn the figure upside down as well, which a vertical mirror never does, and option (a) is the figure unchanged."
                },
                {
                    id: "d32n43",
                    text: "The figure below shows a right-angled triangle resting on a horizontal line, with the right angle at the bottom-left, the vertical side rising from it and the hypotenuse sloping down to the right. Which option shows the <b>water image</b> of this figure?<svg class='q-fig' viewBox='0 0 70 62' width='84' height='74' role='img' aria-label='A right-angled triangle standing on a horizontal line with the right angle at the bottom-left'><path d='M6 48h58' stroke='currentColor' stroke-width='1.2' stroke-dasharray='4 3'/><polygon points='16,48 16,12 50,48' fill='none' stroke='currentColor' stroke-width='1.8'/></svg>",
                    options: [
                        { key: "a", text: "<svg class='opt-fig' viewBox='0 0 70 62' role='img' aria-label='Triangle hanging below the line with the right angle at the top-left'><path d='M6 12h58' stroke='currentColor' stroke-width='1.2' stroke-dasharray='4 3'/><polygon points='16,12 16,48 50,12' fill='none' stroke='currentColor' stroke-width='1.8'/></svg>Below the line, right angle top-left" },
                        { key: "b", text: "<svg class='opt-fig' viewBox='0 0 70 62' role='img' aria-label='Triangle hanging below the line with the right angle at the top-right'><path d='M6 12h58' stroke='currentColor' stroke-width='1.2' stroke-dasharray='4 3'/><polygon points='50,12 50,48 16,12' fill='none' stroke='currentColor' stroke-width='1.8'/></svg>Below the line, right angle top-right" },
                        { key: "c", text: "<svg class='opt-fig' viewBox='0 0 70 62' role='img' aria-label='Triangle standing above the line with the right angle at the bottom-right'><path d='M6 48h58' stroke='currentColor' stroke-width='1.2' stroke-dasharray='4 3'/><polygon points='50,48 50,12 16,48' fill='none' stroke='currentColor' stroke-width='1.8'/></svg>Above the line, right angle bottom-right" },
                        { key: "d", text: "<svg class='opt-fig' viewBox='0 0 70 62' role='img' aria-label='Triangle unchanged, standing above the line with the right angle at the bottom-left'><path d='M6 48h58' stroke='currentColor' stroke-width='1.2' stroke-dasharray='4 3'/><polygon points='16,48 16,12 50,48' fill='none' stroke='currentColor' stroke-width='1.8'/></svg>Unchanged" }
                    ],
                    answer: "a",
                    explanation: "A water image is a reflection in a horizontal line, so top and bottom swap while left and right stay put. The triangle therefore hangs below the line, the right angle moves from the bottom-left to the top-left, and the hypotenuse now slopes upwards to the right. Option (c) is a left&ndash;right mirror image instead, and option (b) flips both ways."
                },
                {
                    id: "d32n44",
                    text: "The dial below is a wall clock as it appears in a mirror, showing <b>2:35</b>. What is the actual time?<svg class='q-fig' viewBox='0 0 80 94' width='90' height='106' role='img' aria-label='A clock dial as seen in a mirror, appearing to show thirty-five minutes past two'><g fill='none' stroke='currentColor' stroke-width='1.5'><circle cx='40' cy='42' r='31'/><path d='M40 13v5M40 66v5M11 42h5M64 42h5'/><path d='M40 42 56.6 38.3' stroke-width='3' stroke-linecap='round'/><path d='M40 42 28 62.8' stroke-width='2' stroke-linecap='round'/></g><circle cx='40' cy='42' r='2.4' fill='currentColor'/><text x='40' y='88' text-anchor='middle' font-size='7' fill='currentColor'>as seen in the mirror</text></svg>",
                    options: [
                        { key: "a", text: "8:25" },
                        { key: "b", text: "9:25" },
                        { key: "c", text: "9:35" },
                        { key: "d", text: "10:35" }
                    ],
                    answer: "b",
                    explanation: "Subtract the time shown in the mirror from 11:60, which is another way of writing 12:00. Here 11:60 &minus; 2:35 = 9:25. Reading it off the dial gives the same result: the 2 o'clock side reflects onto the 10 o'clock side and 35 minutes reflects onto 25 minutes, so the hour hand, being just past 2, reflects to just before 10, that is 9:25."
                },
                {
                    id: "d32n45",
                    text: "A square sheet of paper is folded in half from left to right and then in half from top to bottom, giving a smaller square of four layers. The corner of that small square at which the two creases meet is then cut off, as shown. What does the sheet look like when it is opened out?<svg class='q-fig' viewBox='0 0 178 80' width='214' height='96' role='img' aria-label='A square sheet folded in half twice, with the corner where the two creases meet cut off'><g fill='none' stroke='currentColor' stroke-width='1.6'><rect x='6' y='14' width='48' height='48'/><path d='M30 14v48' stroke-dasharray='4 3'/><path d='M60 32 66 38 60 44' stroke-linecap='round' stroke-linejoin='round'/><rect x='76' y='14' width='24' height='48'/><path d='M76 38h24' stroke-dasharray='4 3'/><path d='M106 32 112 38 106 44' stroke-linecap='round' stroke-linejoin='round'/><rect x='122' y='26' width='24' height='24'/></g><path d='M122 26v24M122 26h24' stroke='currentColor' stroke-width='2.6'/><path d='M122 36 132 26' stroke='currentColor' stroke-width='1.4' stroke-dasharray='3 2'/><text x='127' y='22' text-anchor='middle' font-size='7' fill='currentColor'>cut</text></svg>",
                    options: [
                        { key: "a", text: "Only one corner of the opened sheet is cut off" },
                        { key: "b", text: "Two opposite corners of the sheet are snipped away" },
                        { key: "c", text: "A square hole appears at the centre of the sheet" },
                        { key: "d", text: "All four corners of the opened sheet are cut off" }
                    ],
                    answer: "c",
                    explanation: "The two creases meet at the point that was the very centre of the sheet, so the cut removes paper from all four layers around that single point. Opening the sheet therefore reveals one square hole in the middle with every corner still intact. Cutting the opposite corner, where two raw edges meet, would have snipped all four corners instead."
                },
                {
                    id: "d32n46",
                    text: "A square sheet of paper is folded once along its vertical centre line, and a single hole is then punched through both layers about halfway up and close to the folded edge, as shown. Where are the holes when the sheet is unfolded?<svg class='q-fig' viewBox='0 0 150 78' width='190' height='99' role='img' aria-label='A square sheet folded along its vertical centre line, with one hole punched near the fold at mid height'><g fill='none' stroke='currentColor' stroke-width='1.6'><rect x='6' y='12' width='52' height='52'/><path d='M32 12v52' stroke-dasharray='4 3'/><path d='M64 32 70 38 64 44' stroke-linecap='round' stroke-linejoin='round'/><rect x='86' y='12' width='26' height='52'/></g><path d='M86 12v52' stroke='currentColor' stroke-width='2.8'/><circle cx='93' cy='38' r='2.6' fill='currentColor'/><text x='86' y='73' text-anchor='middle' font-size='7' fill='currentColor'>fold</text></svg>",
                    options: [
                        { key: "a", text: "One hole at the exact centre of the sheet, right on the fold line" },
                        { key: "b", text: "Two holes at the same height, one on each side of the centre" },
                        { key: "c", text: "Two holes one above the other, both lying on the centre line" },
                        { key: "d", text: "Four holes, one near each corner of the opened-out sheet" }
                    ],
                    answer: "b",
                    explanation: "One fold makes two layers, so a single punch gives two holes. Unfolding reflects the punched half in the fold line, so the two holes sit at the same height, one on each side of the centre line and equally close to it. Because the punch was made near the fold rather than on it, the holes stay separate instead of merging into one."
                },
                {
                    id: "d32n47",
                    text: "How many triangles of all sizes are there in the figure below, in which two straight lines are drawn from the apex to two points on the base?<svg class='q-fig' viewBox='0 0 100 80' width='118' height='94' role='img' aria-label='A triangle with two lines drawn from the apex to two points on the base'><g fill='none' stroke='currentColor' stroke-width='1.8'><polygon points='50,10 8,70 92,70'/><path d='M50 10 30 70M50 10 62 70'/></g></svg>",
                    options: [
                        { key: "a", text: "6" },
                        { key: "b", text: "5" },
                        { key: "c", text: "7" },
                        { key: "d", text: "8" }
                    ],
                    answer: "a",
                    explanation: "The two lines cut the base into three parts, and any triangle in the figure is fixed by choosing two of the four points along the base. That gives C(4,2) = 6 triangles: three small ones, two made of a neighbouring pair, and the whole figure. Counting only the three smallest and the whole one, and missing the two overlapping pairs, is what leads to the answer 4."
                },
                {
                    id: "d32n48",
                    text: "The cube below is painted red on all its faces and then cut into 27 identical smaller cubes. How many of the small cubes have <b>exactly two</b> faces painted?<svg class='q-fig' viewBox='0 0 112 112' width='128' height='128' role='img' aria-label='A cube cut into three by three by three smaller cubes'><g fill='none' stroke='currentColor' stroke-width='1.3'><path d='M10 30h70v70H10z'/><path d='M33.33 30v70M56.67 30v70M10 53.33h70M10 76.67h70'/><path d='M10 30 30 10 100 10 100 80 80 100'/><path d='M80 30 100 10'/><path d='M33.33 30 53.33 10M56.67 30 76.67 10'/><path d='M16.67 23.33h70M23.33 16.67h70'/><path d='M86.67 23.33v70M93.33 16.67v70'/><path d='M80 53.33 100 33.33M80 76.67 100 56.67'/></g></svg>",
                    options: [
                        { key: "a", text: "6" },
                        { key: "b", text: "8" },
                        { key: "c", text: "12" },
                        { key: "d", text: "24" }
                    ],
                    answer: "c",
                    explanation: "Twenty-seven small cubes means the original was cut 3 &times; 3 &times; 3. Exactly two painted faces belong to the cubes lying along an edge but away from the corners, and each of the 12 edges holds 3 &minus; 2 = 1 such cube, giving 12 in all. The 8 corner cubes have three painted faces and the 6 face-centre cubes have one."
                },
                {
                    id: "d32n49",
                    text: "The cube below is painted red on all its faces and then cut into 125 identical smaller cubes. How many of the small cubes have <b>no</b> face painted?<svg class='q-fig' viewBox='0 0 112 112' width='128' height='128' role='img' aria-label='A cube cut into five by five by five smaller cubes'><g fill='none' stroke='currentColor' stroke-width='1.1'><path d='M10 30h70v70H10z'/><path d='M24 30v70M38 30v70M52 30v70M66 30v70M10 44h70M10 58h70M10 72h70M10 86h70'/><path d='M10 30 30 10 100 10 100 80 80 100'/><path d='M80 30 100 10'/><path d='M24 30 44 10M38 30 58 10M52 30 72 10M66 30 86 10'/><path d='M14 26h70M18 22h70M22 18h70M26 14h70'/><path d='M84 26v70M88 22v70M92 18v70M96 14v70'/><path d='M80 44 100 24M80 58 100 38M80 72 100 52M80 86 100 66'/></g></svg>",
                    options: [
                        { key: "a", text: "8" },
                        { key: "b", text: "9" },
                        { key: "c", text: "25" },
                        { key: "d", text: "27" }
                    ],
                    answer: "d",
                    explanation: "Since 125 = 5&sup3;, the cube was cut 5 &times; 5 &times; 5. The unpainted cubes are the ones buried inside, and they form a solid cube once one layer is stripped from each of the six faces. Its edge is 5 &minus; 2 = 3, so the count is 3&sup3; = 27."
                },
                {
                    id: "d32n50",
                    text: "A pattern is built by repeating one motif around a centre so that the whole design looks exactly the same after every turn of 45&deg;, as the figure shows. How many times does the motif appear in one complete turn?<svg class='q-fig' viewBox='0 0 80 80' width='92' height='92' role='img' aria-label='A rosette of identical blades repeated around a centre every forty-five degrees'><g fill='currentColor' fill-opacity='0.45' stroke='currentColor' stroke-width='1.3' stroke-linejoin='round'><path d='M40 40 40 14 50 19Z'/><path d='M40 40 40 14 50 19Z' transform='rotate(45 40 40)'/><path d='M40 40 40 14 50 19Z' transform='rotate(90 40 40)'/><path d='M40 40 40 14 50 19Z' transform='rotate(135 40 40)'/><path d='M40 40 40 14 50 19Z' transform='rotate(180 40 40)'/><path d='M40 40 40 14 50 19Z' transform='rotate(225 40 40)'/><path d='M40 40 40 14 50 19Z' transform='rotate(270 40 40)'/><path d='M40 40 40 14 50 19Z' transform='rotate(315 40 40)'/></g></svg>",
                    options: [
                        { key: "a", text: "4" },
                        { key: "b", text: "5" },
                        { key: "c", text: "6" },
                        { key: "d", text: "8" }
                    ],
                    answer: "d",
                    explanation: "A full turn is 360&deg;, and the design repeats every 45&deg;, so the motif occurs 360 &divide; 45 = 8 times. The same number is the order of rotational symmetry of the figure; had the design repeated every 90&deg; the order would have been 4."
                }
            ]
        }
    ]
};

/* Day 32 mirrors Day 31: a reasoning and aptitude paper rather than a subject
   paper, so the breakdown follows the four sections and their sub-topics. */
const DAY32_SYLLABUS = [
    { subject: "Logical", accent: "blue", topics: [
        { topic: "Verbal & Logical Reasoning", subs: [
            { name: "Analogy and Classification", ids: ["d32l1", "d32l2"] },
            { name: "Coding and Decoding", ids: ["d32l3", "d32l4", "d32l5"] },
            { name: "Series Completion", ids: ["d32l6", "d32l7"] },
            { name: "Blood Relations", ids: ["d32l8", "d32l9"] },
            { name: "Direction Sense", ids: ["d32l10", "d32l11"] },
            { name: "Ranking and Arrangement", ids: ["d32l12"] },
            { name: "Logical Deduction from Statements", ids: ["d32l13"] }
        ] }
    ] },
    { subject: "Quantitative", accent: "amber", topics: [
        { topic: "Quantitative Aptitude", subs: [
            { name: "Number Series and Analogy", ids: ["d32q14", "d32q15"] },
            { name: "Simplification and Approximation", ids: ["d32q16", "d32q17"] },
            { name: "Ratio, Percentage, Average and Age", ids: ["d32q18", "d32q19", "d32q20", "d32q21"] },
            { name: "Time, Work, Speed and Distance", ids: ["d32q22", "d32q23", "d32q24"] },
            { name: "Data Interpretation from Tables and Charts", ids: ["d32q25", "d32q26"] }
        ] }
    ] },
    { subject: "Analytical", accent: "slate", topics: [
        { topic: "Analytical & Critical Reasoning", subs: [
            { name: "Ordering of Events, Words and Steps", ids: ["d32c27", "d32c28"] },
            { name: "Syllogism", ids: ["d32c29", "d32c30", "d32c31"] },
            { name: "Statement and Assumption", ids: ["d32c32", "d32c33"] },
            { name: "Statement and Conclusion", ids: ["d32c34"] },
            { name: "Cause and Effect", ids: ["d32c35"] },
            { name: "Course of Action", ids: ["d32c36"] },
            { name: "Venn Diagram Based Deduction", ids: ["d32c37", "d32c38"] }
        ] }
    ] },
    { subject: "Non-verbal", accent: "emerald", topics: [
        { topic: "Non-verbal Reasoning", subs: [
            { name: "Figure Series and Analogy", ids: ["d32n39", "d32n40"] },
            { name: "Odd One Out", ids: ["d32n41"] },
            { name: "Mirror and Water Images", ids: ["d32n42", "d32n43", "d32n44"] },
            { name: "Paper Folding and Cutting", ids: ["d32n45", "d32n46"] },
            { name: "Embedded and Hidden Figures", ids: ["d32n47"] },
            { name: "Cube and Dice", ids: ["d32n48", "d32n49"] },
            { name: "Pattern Completion and Rotation", ids: ["d32n50"] }
        ] }
    ] }
];
DAY32.syllabus = DAY32_SYLLABUS;
