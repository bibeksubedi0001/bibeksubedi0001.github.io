/* ============================================================
   DAY 31 — REASONING & GENERAL APTITUDE
   50 questions · 60 minutes · 0.25 negative marking

     Verbal & Logical Reasoning ............ 13   d31l1  – d31l13
     Quantitative Aptitude ................. 13   d31q14 – d31q26
     Analytical & Critical Reasoning ....... 12   d31c27 – d31c38
     Non-verbal Reasoning .................. 12   d31n39 – d31n50

   Deliberately harder than a screening-level paper: multi-step
   deductions, positional letter codes, compound work/speed setups
   and two-conclusion syllogisms.

   Every non-verbal item is written so that it is fully solvable
   from the text alone — rotations are given as angles, mirror and
   water images as letter strings, folding and dice as counts — so
   the paper needs no figures.
   ============================================================ */
const DAY31 = {
    day: 31,
    title: "Day 31",
    subtitle: "Reasoning & General Aptitude",
    durationMinutes: 60,
    negativeMarking: 0.25,
    chapters: [
        {
            id: "logic31",
            name: "Verbal & Logical Reasoning",
            subject: "Logical",
            accent: "blue",
            blurb: "Q1–13 · analogy and classification, positional letter and digit codes, series completion, blood relations, direction sense, ranking and conditional deduction.",
            questions: [
                {
                    id: "d31l1",
                    text: "<em>Cartographer : Map :: Choreographer : ?</em>",
                    options: [
                        { key: "a", text: "Song" },
                        { key: "b", text: "Dance" },
                        { key: "c", text: "Sculpture" },
                        { key: "d", text: "Poem" }
                    ],
                    answer: "b",
                    explanation: "A cartographer is the person who creates maps, so the pair links a specialist to what he composes. A choreographer composes dances. A sculptor makes sculptures and a poet writes poems, which is why those options do not fit the pattern."
                },
                {
                    id: "d31l2",
                    text: "Three of the following four are alike in a certain way. Which one does <em>not</em> belong to the group?",
                    options: [
                        { key: "a", text: "Copper" },
                        { key: "b", text: "Brass" },
                        { key: "c", text: "Bronze" },
                        { key: "d", text: "Pewter" }
                    ],
                    answer: "a",
                    explanation: "Bronze, brass and pewter are all alloys — mixtures of two or more metals. Copper is a pure metal, an element in its own right, so it is the odd one out."
                },
                {
                    id: "d31l3",
                    text: "In a certain code language, CHAIR is written as DJDMW. How will TABLE be written in the same code?",
                    options: [
                        { key: "a", text: "UCEPJ" },
                        { key: "b", text: "UCPEJ" },
                        { key: "c", text: "UBEPJ" },
                        { key: "d", text: "UCEJP" }
                    ],
                    answer: "a",
                    explanation: "The shift grows with the position of the letter: C+1=D, H+2=J, A+3=D, I+4=M, R+5=W. Applying the same +1, +2, +3, +4, +5 to TABLE gives T+1=U, A+2=C, B+3=E, L+4=P, E+5=J, that is UCEPJ."
                },
                {
                    id: "d31l4",
                    text: "If PEN = 35 and INK = 34, where a word's value is the sum of the positions of its letters in the alphabet, then BOOK = ?",
                    options: [
                        { key: "a", text: "41" },
                        { key: "b", text: "42" },
                        { key: "c", text: "45" },
                        { key: "d", text: "43" }
                    ],
                    answer: "d",
                    explanation: "PEN = 16+5+14 = 35 and INK = 9+14+11 = 34, confirming the rule. BOOK = B(2) + O(15) + O(15) + K(11) = 43."
                },
                {
                    id: "d31l5",
                    text: "In a code, 'fresh fruit juice' is written as <b>7 3 5</b>, 'juice is sweet' as <b>5 8 9</b>, and 'fruit is ripe' as <b>3 8 2</b>. Which digit stands for 'fresh'?",
                    options: [
                        { key: "a", text: "3" },
                        { key: "b", text: "5" },
                        { key: "c", text: "8" },
                        { key: "d", text: "7" }
                    ],
                    answer: "d",
                    explanation: "'juice' is common to the first two statements, whose only shared digit is 5. 'fruit' is common to the first and third, whose only shared digit is 3. In the first statement the digits are 7, 3 and 5, so the digit left over for 'fresh' is 7."
                },
                {
                    id: "d31l6",
                    text: "Complete the series: <b>B2, D4, G7, K11, ?</b>",
                    options: [
                        { key: "a", text: "O15" },
                        { key: "b", text: "P16" },
                        { key: "c", text: "P15" },
                        { key: "d", text: "Q17" }
                    ],
                    answer: "b",
                    explanation: "Each letter is followed by its own position in the alphabet, and the gap between successive letters grows by one: B(2) to D(4) is +2, D to G(7) is +3, G to K(11) is +4. The next gap is +5, giving position 16, which is P, so the term is P16."
                },
                {
                    id: "d31l7",
                    text: "Find the next term: <b>3, 7, 16, 35, 74, ?</b>",
                    options: [
                        { key: "a", text: "148" },
                        { key: "b", text: "151" },
                        { key: "c", text: "153" },
                        { key: "d", text: "157" }
                    ],
                    answer: "c",
                    explanation: "Each term is twice the previous one plus a counter that increases by 1: 3×2+1 = 7, 7×2+2 = 16, 16×2+3 = 35, 35×2+4 = 74. The next term is 74×2+5 = 153."
                },
                {
                    id: "d31l8",
                    text: "Q is the son of P. R is the sister of Q. S is the mother of R. T is the father of S. How is P related to T?",
                    options: [
                        { key: "a", text: "Son" },
                        { key: "b", text: "Son-in-law" },
                        { key: "c", text: "Brother-in-law" },
                        { key: "d", text: "Nephew" }
                    ],
                    answer: "b",
                    explanation: "R is Q's sister, so R is also P's child. S, being R's mother, is therefore P's wife, and T, S's father, is P's wife's father. A man is the son-in-law of his wife's father."
                },
                {
                    id: "d31l9",
                    text: "If <b>A + B</b> means 'A is the mother of B', <b>A − B</b> means 'A is the brother of B' and <b>A × B</b> means 'A is the father of B', which expression shows that <b>P is the maternal uncle of Q</b>?",
                    options: [
                        { key: "a", text: "P + R − Q" },
                        { key: "b", text: "P − R + Q" },
                        { key: "c", text: "P × R + Q" },
                        { key: "d", text: "P − R × Q" }
                    ],
                    answer: "b",
                    explanation: "A maternal uncle is the brother of the mother. P − R makes P the brother of R, and R + Q makes R the mother of Q, so P is the brother of Q's mother. Option (d) would make P the brother of Q's father, a paternal uncle."
                },
                {
                    id: "d31l10",
                    text: "A man walks 3 km east, then 4 km north, then 6 km west, then 4 km south, and finally 1 km east. How far is he from his starting point and in which direction?",
                    options: [
                        { key: "a", text: "2 km east" },
                        { key: "b", text: "3 km west" },
                        { key: "c", text: "2 km west" },
                        { key: "d", text: "1 km west" }
                    ],
                    answer: "c",
                    explanation: "The 4 km north and the 4 km south cancel, so he ends on the same east–west line as his start. Along that line he moves +3, then −6, then +1, giving −2, that is 2 km to the west of the starting point."
                },
                {
                    id: "d31l11",
                    text: "At sunrise a boy stands facing a pole and finds that the shadow of the pole falls exactly to his left. Which direction is he facing?",
                    options: [
                        { key: "a", text: "North" },
                        { key: "b", text: "South" },
                        { key: "c", text: "East" },
                        { key: "d", text: "West" }
                    ],
                    answer: "a",
                    explanation: "At sunrise the sun is in the east, so every shadow points west. If west is on his left hand, then he must be facing north."
                },
                {
                    id: "d31l12",
                    text: "In a row of children Anil is 11th from the left and 13th from the right. Three more children then join the row at the left end and two children leave from the right end. What is Anil's new position from the left?",
                    options: [
                        { key: "a", text: "13th" },
                        { key: "b", text: "14th" },
                        { key: "c", text: "15th" },
                        { key: "d", text: "16th" }
                    ],
                    answer: "b",
                    explanation: "A position counted from the left depends only on how many children stand to the left, so the two who leave at the right end change nothing. The three joining at the left push Anil three places further along, from 11th to 14th. (The row began with 11 + 13 − 1 = 23 children.)"
                },
                {
                    id: "d31l13",
                    text: "<b>Statements:</b> If it rains, the match is cancelled. The match was <em>not</em> cancelled.<br><b>Which conclusion follows logically?</b>",
                    options: [
                        { key: "a", text: "It rained." },
                        { key: "b", text: "It did not rain." },
                        { key: "c", text: "The match was postponed." },
                        { key: "d", text: "Nothing can be concluded." }
                    ],
                    answer: "b",
                    explanation: "Denying the consequent of a conditional lets you deny the antecedent. Since rain guarantees cancellation and there was no cancellation, it cannot have rained. Note that the reverse move — concluding 'it rained' from a cancellation — would be invalid, because the match could be cancelled for other reasons."
                }
            ]
        },
        {
            id: "quant31",
            name: "Quantitative Aptitude",
            subject: "Quantitative",
            accent: "amber",
            blurb: "Q14–26 · number series and analogy, simplification and approximation, ratio, percentage, average and age, time, work, speed and distance, and data interpretation.",
            questions: [
                {
                    id: "d31q14",
                    text: "Find the next term: <b>7, 10, 16, 28, 52, ?</b>",
                    options: [
                        { key: "a", text: "94" },
                        { key: "b", text: "96" },
                        { key: "c", text: "104" },
                        { key: "d", text: "100" }
                    ],
                    answer: "d",
                    explanation: "Look at the differences: 3, 6, 12, 24. Each is double the one before it, so the next difference is 48 and the next term is 52 + 48 = 100."
                },
                {
                    id: "d31q15",
                    text: "<em>6 : 222 :: 7 : ?</em>",
                    options: [
                        { key: "a", text: "336" },
                        { key: "b", text: "343" },
                        { key: "c", text: "350" },
                        { key: "d", text: "357" }
                    ],
                    answer: "c",
                    explanation: "The rule is the cube of the number plus the number itself: 6³ + 6 = 216 + 6 = 222. Hence 7³ + 7 = 343 + 7 = 350. Option (b) is the cube alone, a common trap."
                },
                {
                    id: "d31q16",
                    text: "Simplify: <b>&radic;0.0081 &times; 10³ &divide; 0.09</b>",
                    options: [
                        { key: "a", text: "1000" },
                        { key: "b", text: "100" },
                        { key: "c", text: "900" },
                        { key: "d", text: "10000" }
                    ],
                    answer: "a",
                    explanation: "&radic;0.0081 = 0.09, since 0.09 × 0.09 = 0.0081. Then 0.09 × 1000 = 90, and 90 ÷ 0.09 = 1000."
                },
                {
                    id: "d31q17",
                    text: "What is the approximate value of <b>(4.98)² + (7.02)² − (2.99)²</b>?",
                    options: [
                        { key: "a", text: "61" },
                        { key: "b", text: "65" },
                        { key: "c", text: "69" },
                        { key: "d", text: "73" }
                    ],
                    answer: "b",
                    explanation: "Round each number to the nearest whole number: 4.98 ≈ 5, 7.02 ≈ 7 and 2.99 ≈ 3. Then 25 + 49 − 9 = 65, which is close enough because the rounding errors are tiny and partly cancel."
                },
                {
                    id: "d31q18",
                    text: "In an election between two candidates the winner secured 56% of the valid votes and won by 1,344 votes. How many valid votes were cast?",
                    options: [
                        { key: "a", text: "9,600" },
                        { key: "b", text: "11,200" },
                        { key: "c", text: "12,000" },
                        { key: "d", text: "13,440" }
                    ],
                    answer: "b",
                    explanation: "The loser took the remaining 44%, so the winning margin is 56 − 44 = 12% of the valid votes. If 12% equals 1,344 votes, the total is 1344 × 100/12 = 11,200. The common slip is to divide by 56 instead of by the 12% margin."
                },
                {
                    id: "d31q19",
                    text: "A sum of ₹6,200 is divided among A, B and C so that A : B = 3 : 4 and B : C = 6 : 5. What is C's share?",
                    options: [
                        { key: "a", text: "₹1,800" },
                        { key: "b", text: "₹2,400" },
                        { key: "c", text: "₹2,200" },
                        { key: "d", text: "₹2,000" }
                    ],
                    answer: "d",
                    explanation: "Make B common to both ratios. A : B = 3 : 4 = 9 : 12 and B : C = 6 : 5 = 12 : 10, so A : B : C = 9 : 12 : 10 with 31 parts in all. C's share = 6200 × 10/31 = ₹2,000."
                },
                {
                    id: "d31q20",
                    text: "A student's average mark in four subjects is 68. What must he score in a fifth subject to raise his average over the five subjects to 72?",
                    options: [
                        { key: "a", text: "84" },
                        { key: "b", text: "86" },
                        { key: "c", text: "88" },
                        { key: "d", text: "92" }
                    ],
                    answer: "c",
                    explanation: "Four subjects at an average of 68 give 272 marks, while five subjects at 72 need 360. The fifth score must therefore be 360 − 272 = 88. Equivalently he needs the new average of 72 plus 4 extra marks to lift each of the earlier four subjects."
                },
                {
                    id: "d31q21",
                    text: "A father is twice as old as his son. Twenty years ago he was four times as old as his son was then. What is the father's present age?",
                    options: [
                        { key: "a", text: "50 years" },
                        { key: "b", text: "55 years" },
                        { key: "c", text: "60 years" },
                        { key: "d", text: "65 years" }
                    ],
                    answer: "c",
                    explanation: "Let the son be s, so the father is 2s. Twenty years ago their ages were s − 20 and 2s − 20, and the condition gives 2s − 20 = 4(s − 20). That reduces to 2s = 60, so s = 30 and the father is 60. Check: 20 years ago they were 40 and 10, and 40 is indeed four times 10."
                },
                {
                    id: "d31q22",
                    text: "Twelve men can complete a piece of work in 18 days. After they have worked for 6 days, six more men join them. In how many more days will the work be finished?",
                    options: [
                        { key: "a", text: "6 days" },
                        { key: "b", text: "7 days" },
                        { key: "c", text: "9 days" },
                        { key: "d", text: "8 days" }
                    ],
                    answer: "d",
                    explanation: "The whole job is 12 × 18 = 216 man-days. In the first 6 days the twelve men complete 72 man-days, leaving 144. With 18 men now on the job, the remainder takes 144 ÷ 18 = 8 more days."
                },
                {
                    id: "d31q23",
                    text: "A train 180 m long crosses a platform 270 m long in 30 seconds. What is the speed of the train in km/h?",
                    options: [
                        { key: "a", text: "45" },
                        { key: "b", text: "48" },
                        { key: "c", text: "54" },
                        { key: "d", text: "60" }
                    ],
                    answer: "c",
                    explanation: "To clear a platform the train must cover its own length plus the platform's, that is 180 + 270 = 450 m, in 30 s. The speed is 15 m/s, and multiplying by 18/5 converts this to 54 km/h."
                },
                {
                    id: "d31q24",
                    text: "A man covers the first half of a journey at 30 km/h and the second half at 60 km/h. What is his average speed for the whole journey?",
                    options: [
                        { key: "a", text: "40 km/h" },
                        { key: "b", text: "42 km/h" },
                        { key: "c", text: "45 km/h" },
                        { key: "d", text: "50 km/h" }
                    ],
                    answer: "a",
                    explanation: "Average speed is total distance divided by total time, not the mean of the two speeds. Taking the journey as 60 km, the halves take 30/30 = 1 h and 30/60 = 0.5 h, so 60 km takes 1.5 h and the average is 40 km/h. The tempting 45 km/h is wrong because more time is spent on the slower half."
                },
                {
                    id: "d31q25",
                    text: "The table gives the units sold by four salespersons in three months.<br><b>Jan / Feb / Mar</b><br>A — 120, 150, 180<br>B — 90, 110, 130<br>C — 160, 140, 150<br>D — 100, 130, 170<br>By what percent did D's March sales exceed D's January sales?",
                    options: [
                        { key: "a", text: "40%" },
                        { key: "b", text: "58%" },
                        { key: "c", text: "170%" },
                        { key: "d", text: "70%" }
                    ],
                    answer: "d",
                    explanation: "The rise is 170 − 100 = 70 units on a January base of 100, so the increase is 70/100 = 70%. Option (d) is the ratio of March to January, not the excess."
                },
                {
                    id: "d31q26",
                    text: "The table gives the units sold by four salespersons in three months.<br><b>Jan / Feb / Mar</b><br>A — 120, 150, 180<br>B — 90, 110, 130<br>C — 160, 140, 150<br>D — 100, 130, 170<br>What is C's average monthly sale over the three months?",
                    options: [
                        { key: "a", text: "140" },
                        { key: "b", text: "145" },
                        { key: "c", text: "150" },
                        { key: "d", text: "155" }
                    ],
                    answer: "c",
                    explanation: "C sold 160 + 140 + 150 = 450 units over three months, so the average is 450/3 = 150 units per month."
                }
            ]
        },
        {
            id: "analy31",
            name: "Analytical & Critical Reasoning",
            subject: "Analytical",
            accent: "slate",
            blurb: "Q27–38 · ordering of events, words and steps, syllogism, statement and assumption, statement and conclusion, cause and effect, course of action and Venn diagram deduction.",
            questions: [
                {
                    id: "d31c27",
                    text: "Arrange the following words in the order in which they appear in a dictionary:<br>1. Intrude &nbsp; 2. Intrinsic &nbsp; 3. Introvert &nbsp; 4. Intricate &nbsp; 5. Intimate",
                    options: [
                        { key: "a", text: "5, 4, 2, 3, 1" },
                        { key: "b", text: "5, 2, 4, 3, 1" },
                        { key: "c", text: "4, 5, 2, 1, 3" },
                        { key: "d", text: "5, 4, 2, 1, 3" }
                    ],
                    answer: "a",
                    explanation: "All five share 'int'. Next comes 'i' before 'r', so Intimate leads. Among the rest, compare the fifth letter: Intricate and Intrinsic both have 'i', and 'c' precedes 'n', so Intricate comes before Intrinsic; then Introvert ('o') and finally Intrude ('u')."
                },
                {
                    id: "d31c28",
                    text: "Arrange the following steps of publishing a research paper in their proper sequence:<br>1. Peer review &nbsp; 2. Manuscript submission &nbsp; 3. Literature survey &nbsp; 4. Publication &nbsp; 5. Revision",
                    options: [
                        { key: "a", text: "3, 2, 1, 5, 4" },
                        { key: "b", text: "2, 3, 1, 5, 4" },
                        { key: "c", text: "3, 1, 2, 5, 4" },
                        { key: "d", text: "3, 2, 5, 1, 4" }
                    ],
                    answer: "a",
                    explanation: "The work begins with a literature survey, after which the manuscript is submitted. The journal then sends it for peer review, the author revises it in the light of the reviewers' comments, and only then is it published."
                },
                {
                    id: "d31c29",
                    text: "<b>Statements:</b> Only a few teachers are writers. All writers are readers.<br><b>Conclusions:</b> I. All teachers are readers. &nbsp; II. Some teachers are readers.",
                    options: [
                        { key: "a", text: "Only conclusion I follows" },
                        { key: "b", text: "Only conclusion II follows" },
                        { key: "c", text: "Both I and II follow" },
                        { key: "d", text: "Neither I nor II follows" }
                    ],
                    answer: "b",
                    explanation: "'Only a few teachers are writers' means some are and some are not. The teachers who are writers must be readers, so some teachers are certainly readers and II follows. Conclusion I fails because the remaining teachers, who are not writers, need not be readers at all."
                },
                {
                    id: "d31c30",
                    text: "<b>Statements:</b> All metals are conductors. Some conductors are not solids.<br><b>Conclusions:</b> I. Some metals are not solids. &nbsp; II. All conductors are metals.",
                    options: [
                        { key: "a", text: "Only conclusion I follows" },
                        { key: "b", text: "Only conclusion II follows" },
                        { key: "c", text: "Both I and II follow" },
                        { key: "d", text: "Neither I nor II follows" }
                    ],
                    answer: "d",
                    explanation: "The conductors that are not solids need not be metals at all, so nothing follows about metals and conclusion I is unsafe. Conclusion II reverses a universal statement, which is never valid: metals being a part of the conductors does not make every conductor a metal."
                },
                {
                    id: "d31c31",
                    text: "<b>Statements:</b> All squares are rectangles. All rectangles are quadrilaterals.<br><b>Conclusions:</b> I. All squares are quadrilaterals. &nbsp; II. Some quadrilaterals are squares.",
                    options: [
                        { key: "a", text: "Only conclusion I follows" },
                        { key: "b", text: "Only conclusion II follows" },
                        { key: "c", text: "Both I and II follow" },
                        { key: "d", text: "Neither I nor II follows" }
                    ],
                    answer: "c",
                    explanation: "The two universal statements chain together, so every square is a quadrilateral and conclusion I follows. Because squares exist and all of them are quadrilaterals, it is also true that some quadrilaterals are squares, which is the valid converse of a universal statement."
                },
                {
                    id: "d31c32",
                    text: "<b>Statement:</b> The government has decided to run buses on this route from next month.<br><b>Assumptions:</b> I. There will be enough passengers on this route. &nbsp; II. The transport now available on this route is inadequate.",
                    options: [
                        { key: "a", text: "Only assumption I is implicit" },
                        { key: "b", text: "Only assumption II is implicit" },
                        { key: "c", text: "Both I and II are implicit" },
                        { key: "d", text: "Neither I nor II is implicit" }
                    ],
                    answer: "c",
                    explanation: "A service is introduced only when it is expected to be used, so assumption I underlies the decision. The very act of adding buses also takes for granted that the present arrangements do not meet the need, so assumption II is implicit as well."
                },
                {
                    id: "d31c33",
                    text: "<b>Statement:</b> 'Buy our air purifier and breathe clean air at home.' — an advertisement.<br><b>Assumptions:</b> I. The air inside homes may be polluted. &nbsp; II. Everyone can afford an air purifier.",
                    options: [
                        { key: "a", text: "Only assumption I is implicit" },
                        { key: "b", text: "Only assumption II is implicit" },
                        { key: "c", text: "Both I and II are implicit" },
                        { key: "d", text: "Neither I nor II is implicit" }
                    ],
                    answer: "a",
                    explanation: "The advertisement only makes sense if indoor air can be polluted, so assumption I is implicit. Assumption II is not: an advertiser targets those who can buy the product and need not assume that literally everyone can afford it."
                },
                {
                    id: "d31c34",
                    text: "<b>Statement:</b> The literacy rate of the district rose from 45% to 72% in ten years.<br><b>Conclusions:</b> I. Educational facilities in the district improved during this period. &nbsp; II. The district had no schools ten years ago.",
                    options: [
                        { key: "a", text: "Only conclusion I follows" },
                        { key: "b", text: "Only conclusion II follows" },
                        { key: "c", text: "Both I and II follow" },
                        { key: "d", text: "Neither I nor II follows" }
                    ],
                    answer: "a",
                    explanation: "A large rise in literacy is reasonably explained by better educational provision, so conclusion I follows. Conclusion II contradicts the data: a literacy rate of 45% shows that schooling already existed."
                },
                {
                    id: "d31c35",
                    text: "<b>Event A:</b> The municipality banned plastic carry bags in the city from 1 January.<br><b>Event B:</b> Sales of cloth bags in the city rose sharply during January.<br>Which statement best describes the relation between the two events?",
                    options: [
                        { key: "a", text: "A is the effect of B" },
                        { key: "b", text: "B is the effect of A" },
                        { key: "c", text: "Both are independent effects of a common cause" },
                        { key: "d", text: "Both are independent causes" }
                    ],
                    answer: "b",
                    explanation: "The ban removed the usual alternative and forced shoppers to look for a substitute, and the rise in cloth-bag sales began right after it. The ban is the cause and the rise in sales is its effect; the reverse order is impossible because the ban was decided first."
                },
                {
                    id: "d31c36",
                    text: "<b>Statement:</b> A large number of students failed in mathematics in this year's examination.<br><b>Courses of action:</b> I. The mathematics syllabus should be shortened. &nbsp; II. Remedial classes should be arranged for weak students.",
                    options: [
                        { key: "a", text: "Only course I follows" },
                        { key: "b", text: "Only course II follows" },
                        { key: "c", text: "Both I and II follow" },
                        { key: "d", text: "Neither I nor II follows" }
                    ],
                    answer: "b",
                    explanation: "Remedial teaching attacks the actual weakness and is a proper course of action. Cutting the syllabus lowers the standard instead of addressing the difficulty and assumes, without evidence, that the syllabus length was the cause."
                },
                {
                    id: "d31c37",
                    text: "Which of the following best represents the relationship between <b>Doctors, Surgeons</b> and <b>Women</b>?",
                    options: [
                        { key: "a", text: "Three circles that do not touch one another" },
                        { key: "b", text: "Surgeons inside Doctors, with Women overlapping both" },
                        { key: "c", text: "Doctors inside Surgeons, with Women separate" },
                        { key: "d", text: "Women inside Doctors, with Surgeons separate" }
                    ],
                    answer: "b",
                    explanation: "Every surgeon is a doctor, so the surgeons form a circle wholly inside the doctors. Women form a separate class that partly overlaps both, since some women are doctors and some of those are surgeons, while many women are neither."
                },
                {
                    id: "d31c38",
                    text: "In a group of 100 people, 60 read newspaper A, 45 read newspaper B and 20 read both. How many read neither newspaper?",
                    options: [
                        { key: "a", text: "5" },
                        { key: "b", text: "10" },
                        { key: "c", text: "15" },
                        { key: "d", text: "25" }
                    ],
                    answer: "c",
                    explanation: "By the inclusion–exclusion principle the number reading at least one paper is 60 + 45 − 20 = 85. Subtracting from the group of 100 leaves 15 who read neither."
                }
            ]
        },
        {
            id: "nonvb31",
            name: "Non-verbal Reasoning",
            subject: "Non-verbal",
            accent: "emerald",
            blurb: "Q39–50 · figure series and analogy, odd one out, mirror and water images, paper folding and cutting, hidden figures, cube and dice, and pattern completion by rotation.",
            questions: [
                {
                    id: "d31n39",
                    text: "In a figure series an arrow turns 135° clockwise at every step. If it initially points north, in which direction does it point after the fourth step?",
                    options: [
                        { key: "a", text: "North" },
                        { key: "b", text: "East" },
                        { key: "c", text: "West" },
                        { key: "d", text: "South" }
                    ],
                    answer: "d",
                    explanation: "Four steps of 135° amount to 540°. A full turn of 360° brings the arrow back to where it began, so the effective rotation is 540 − 360 = 180°, which turns north into south."
                },
                {
                    id: "d31n40",
                    text: "A square card carries a dot in its <b>top-left</b> corner. The card is rotated 270° clockwise in its own plane. Where is the dot now?",
                    options: [
                        { key: "a", text: "Top-right corner" },
                        { key: "b", text: "Bottom-right corner" },
                        { key: "c", text: "Bottom-left corner" },
                        { key: "d", text: "Top-left corner" }
                    ],
                    answer: "c",
                    explanation: "Follow the corner step by step: 90° clockwise takes the top-left corner to the top-right, 180° takes it to the bottom-right, and 270° takes it to the bottom-left. A 270° clockwise turn is the same as 90° anticlockwise."
                },
                {
                    id: "d31n41",
                    text: "Which of the following solids has <b>no vertex</b> at all?",
                    options: [
                        { key: "a", text: "Cube" },
                        { key: "b", text: "Cone" },
                        { key: "c", text: "Square pyramid" },
                        { key: "d", text: "Cylinder" }
                    ],
                    answer: "d",
                    explanation: "A cube has 8 vertices and a square pyramid has 5. A cone has a single vertex at its apex. A cylinder has two circular edges but no point where edges meet, so it has no vertex."
                },
                {
                    id: "d31n42",
                    text: "A mirror is placed vertically to the right of the word <b>PHYSICS</b>. What is its mirror image?",
                    options: [
                        { key: "a", text: "SCISYHP" },
                        { key: "b", text: "PHYSICS" },
                        { key: "c", text: "SCIYSHP" },
                        { key: "d", text: "SICSYHP" }
                    ],
                    answer: "a",
                    explanation: "A vertical mirror reverses left and right, so the letters appear in the opposite order, each one itself laterally inverted. Reversing PHYSICS gives SCISYHP."
                },
                {
                    id: "d31n43",
                    text: "In block capitals, which of the following words would look <b>unchanged</b> in its water image?",
                    options: [
                        { key: "a", text: "MIND" },
                        { key: "b", text: "HIDE" },
                        { key: "c", text: "FACE" },
                        { key: "d", text: "TIDE" }
                    ],
                    answer: "b",
                    explanation: "A water image flips the word about a horizontal axis, so it is unchanged only if every letter is symmetrical top to bottom. H, I, D and E all are, so HIDE survives. M, N, F, A and T are not symmetrical in that way, which rules out the other three."
                },
                {
                    id: "d31n44",
                    text: "A wall clock seen in a mirror appears to show <b>8:20</b>. What is the actual time?",
                    options: [
                        { key: "a", text: "4:40" },
                        { key: "b", text: "3:20" },
                        { key: "c", text: "4:20" },
                        { key: "d", text: "3:40" }
                    ],
                    answer: "d",
                    explanation: "Subtract the apparent time from 11:60 (that is, 12:00). 11:60 − 8:20 = 3:40. You can check it on the dial: the mirror reflects the 8 o'clock position onto the 4 o'clock side, and the minute hand at 20 minutes reflects to 40 minutes."
                },
                {
                    id: "d31n45",
                    text: "A square sheet of paper is folded in half twice, forming a smaller square of four layers. Two holes are then punched through all the layers. How many holes are there when the sheet is unfolded?",
                    options: [
                        { key: "a", text: "4" },
                        { key: "b", text: "6" },
                        { key: "c", text: "8" },
                        { key: "d", text: "16" }
                    ],
                    answer: "c",
                    explanation: "Folding in half twice gives 2 × 2 = 4 layers, so each punch passes through 4 thicknesses and leaves 4 holes. Two punches therefore produce 2 × 4 = 8 holes."
                },
                {
                    id: "d31n46",
                    text: "A circular sheet is folded twice through its centre, giving a quarter-circle, and one small semicircular notch is cut on the folded arc. How many notches appear along the circumference when the sheet is opened out?",
                    options: [
                        { key: "a", text: "2" },
                        { key: "b", text: "3" },
                        { key: "c", text: "4" },
                        { key: "d", text: "8" }
                    ],
                    answer: "c",
                    explanation: "Two folds through the centre stack the sheet into four layers, and the arc of the quarter-circle is made up of four separate pieces of the original circumference. One cut through all four therefore reappears as 4 notches, evenly spaced."
                },
                {
                    id: "d31n47",
                    text: "How many rectangles of all sizes are there in a <b>3 × 3</b> grid of squares?",
                    options: [
                        { key: "a", text: "9" },
                        { key: "b", text: "14" },
                        { key: "c", text: "24" },
                        { key: "d", text: "36" }
                    ],
                    answer: "d",
                    explanation: "A rectangle is fixed by choosing two of the 4 vertical lines and two of the 4 horizontal lines. That gives C(4,2) × C(4,2) = 6 × 6 = 36. Option (b) is the count of squares only, not of all rectangles."
                },
                {
                    id: "d31n48",
                    text: "A cube is painted red on all its faces and then cut into 64 identical smaller cubes. How many of the small cubes have <b>exactly two</b> faces painted?",
                    options: [
                        { key: "a", text: "8" },
                        { key: "b", text: "16" },
                        { key: "c", text: "32" },
                        { key: "d", text: "24" }
                    ],
                    answer: "d",
                    explanation: "Sixty-four small cubes means the original was cut 4 × 4 × 4. Cubes with exactly two painted faces lie along the edges but not at the corners, and each of the 12 edges holds 4 − 2 = 2 such cubes, giving 12 × 2 = 24."
                },
                {
                    id: "d31n49",
                    text: "A cube is painted red on all its faces and then cut into 64 identical smaller cubes. How many of the small cubes have <b>no</b> face painted?",
                    options: [
                        { key: "a", text: "8" },
                        { key: "b", text: "12" },
                        { key: "c", text: "16" },
                        { key: "d", text: "24" }
                    ],
                    answer: "a",
                    explanation: "The unpainted cubes are those hidden inside, forming a smaller cube once the outer shell is stripped from each direction. Its edge is 4 − 2 = 2, so the count is 2³ = 8."
                },
                {
                    id: "d31n50",
                    text: "A pattern has rotational symmetry of order 4. Through what smallest angle must it be turned about its centre before it first coincides with itself?",
                    options: [
                        { key: "a", text: "90°" },
                        { key: "b", text: "60°" },
                        { key: "c", text: "45°" },
                        { key: "d", text: "120°" }
                    ],
                    answer: "a",
                    explanation: "Order 4 means the pattern fits onto itself 4 times in one complete turn, so the positions are spaced 360° ÷ 4 = 90° apart."
                }
            ]
        }
    ]
};

/* Day 31 is a reasoning and aptitude paper rather than a subject paper, so the
   breakdown below follows the four sections and their listed sub-topics. */
const DAY31_SYLLABUS = [
    { subject: "Logical", accent: "blue", topics: [
        { topic: "Verbal & Logical Reasoning", subs: [
            { name: "Analogy and Classification", ids: ["d31l1", "d31l2"] },
            { name: "Coding and Decoding", ids: ["d31l3", "d31l4", "d31l5"] },
            { name: "Series Completion", ids: ["d31l6", "d31l7"] },
            { name: "Blood Relations", ids: ["d31l8", "d31l9"] },
            { name: "Direction Sense", ids: ["d31l10", "d31l11"] },
            { name: "Ranking and Arrangement", ids: ["d31l12"] },
            { name: "Logical Deduction from Statements", ids: ["d31l13"] }
        ] }
    ] },
    { subject: "Quantitative", accent: "amber", topics: [
        { topic: "Quantitative Aptitude", subs: [
            { name: "Number Series and Analogy", ids: ["d31q14", "d31q15"] },
            { name: "Simplification and Approximation", ids: ["d31q16", "d31q17"] },
            { name: "Ratio, Percentage, Average and Age", ids: ["d31q18", "d31q19", "d31q20", "d31q21"] },
            { name: "Time, Work, Speed and Distance", ids: ["d31q22", "d31q23", "d31q24"] },
            { name: "Data Interpretation from Tables and Charts", ids: ["d31q25", "d31q26"] }
        ] }
    ] },
    { subject: "Analytical", accent: "slate", topics: [
        { topic: "Analytical & Critical Reasoning", subs: [
            { name: "Ordering of Events, Words and Steps", ids: ["d31c27", "d31c28"] },
            { name: "Syllogism", ids: ["d31c29", "d31c30", "d31c31"] },
            { name: "Statement and Assumption", ids: ["d31c32", "d31c33"] },
            { name: "Statement and Conclusion", ids: ["d31c34"] },
            { name: "Cause and Effect", ids: ["d31c35"] },
            { name: "Course of Action", ids: ["d31c36"] },
            { name: "Venn Diagram Based Deduction", ids: ["d31c37", "d31c38"] }
        ] }
    ] },
    { subject: "Non-verbal", accent: "emerald", topics: [
        { topic: "Non-verbal Reasoning", subs: [
            { name: "Figure Series and Analogy", ids: ["d31n39", "d31n40"] },
            { name: "Odd One Out", ids: ["d31n41"] },
            { name: "Mirror and Water Images", ids: ["d31n42", "d31n43", "d31n44"] },
            { name: "Paper Folding and Cutting", ids: ["d31n45", "d31n46"] },
            { name: "Embedded and Hidden Figures", ids: ["d31n47"] },
            { name: "Cube and Dice", ids: ["d31n48", "d31n49"] },
            { name: "Pattern Completion and Rotation", ids: ["d31n50"] }
        ] }
    ] }
];
DAY31.syllabus = DAY31_SYLLABUS;
