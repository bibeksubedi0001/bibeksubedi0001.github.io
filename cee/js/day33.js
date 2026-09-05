/* ============================================================
   DAY 33 — MENTAL AGILITY TEST (MAT)
    40 questions · 60 minutes · 0.25 negative marking

     Verbal Reasoning ...................... 10   d33v1  – d33v10
     Numerical Reasoning ................... 10   d33q11 – d33q20
     Logical Sequencing .................... 10   d33l21 – d33l30
     Spatial Relation / Abstract Reasoning . 10   d33s31 – d33s40

   The four MAT units receive equal practice weight. All questions
   are new; every answer has a worked explanation. Spatial figures
   use inline SVG rather than font glyphs, with descriptive labels.
   ============================================================ */
const DAY33 = {
    day: 33,
    title: "Day 33",
    subtitle: "Mental Agility Test · 40 Questions",
    durationMinutes: 60,
    negativeMarking: 0.25,
    chapters: [
        {
            id: "verbal33",
            name: "Verbal Reasoning",
            subject: "MAT",
            accent: "blue",
            blurb: "Q1–10 · analogy, classification, coding, letter series, family relations, direction sense, ranking, arrangement and deduction.",
            questions: [
                {
                    id: "d33v1",
                    text: "Complete the instrument–quantity analogy: <b>Thermometer : Temperature :: Hygrometer : ?</b>",
                    options: [
                        { key: "a", text: "Altitude" },
                        { key: "b", text: "Atmospheric pressure" },
                        { key: "c", text: "Humidity" },
                        { key: "d", text: "Wind speed" }
                    ],
                    answer: "c",
                    explanation: "A thermometer measures temperature; a hygrometer measures humidity. The relation is an instrument to the quantity it measures. An altimeter measures altitude, a barometer atmospheric pressure and an anemometer wind speed."
                },
                {
                    id: "d33v2",
                    text: "In three of these letter groups, the second letter is <b>three places after</b> the first and the third letter is <b>four places after</b> the second. Which group breaks this rule?",
                    options: [
                        { key: "a", text: "MPU" },
                        { key: "b", text: "DGK" },
                        { key: "c", text: "HKO" },
                        { key: "d", text: "RUY" }
                    ],
                    answer: "a",
                    explanation: "DGK has gaps of +3 and +4, as do HKO and RUY. In MPU, M to P is +3 but P to U is +5. The last letter would have to be T for that group to obey the same rule."
                },
                {
                    id: "d33v3",
                    text: "A code moves letters in odd-numbered positions one place forward in the alphabet and letters in even-numbered positions one place backward. Thus <b>PLANT</b> becomes <b>QKBMU</b>. How is <b>BRICK</b> coded?",
                    options: [
                        { key: "a", text: "CQJDL" },
                        { key: "b", text: "ASJBL" },
                        { key: "c", text: "CQIBL" },
                        { key: "d", text: "CQJBL" }
                    ],
                    answer: "d",
                    explanation: "Number the positions from the left. B moves forward to C, R backward to Q, I forward to J, C backward to B and K forward to L. Joining the results gives CQJBL. Applying a forward shift to every position would fail at the second and fourth letters."
                },
                {
                    id: "d33v4",
                    text: "Each word has one fixed code word, but word order may change. <b>la mi so</b> means 'bright red lamp'; <b>tu so ne</b> means 'lamp near desk'; <b>mi ka ne</b> means 'red wooden desk'. Which code means <b>bright</b>?",
                    options: [
                        { key: "a", text: "mi" },
                        { key: "b", text: "la" },
                        { key: "c", text: "so" },
                        { key: "d", text: "ne" }
                    ],
                    answer: "b",
                    explanation: "The first two statements share only 'lamp' and 'so', so so means lamp. The first and third share 'red' and 'mi', so mi means red. Removing these two known words from la mi so leaves la for bright. The second and third also identify ne as desk."
                },
                {
                    id: "d33v5",
                    text: "Complete the letter-pair series: <b>ZC, WF, TI, QL, ?</b>",
                    options: [
                        { key: "a", text: "MN" },
                        { key: "b", text: "NP" },
                        { key: "c", text: "NO" },
                        { key: "d", text: "OO" }
                    ],
                    answer: "c",
                    explanation: "Read the two letter positions separately. The first letters move backward by three: Z, W, T, Q, N. The second letters move forward by three: C, F, I, L, O. The next pair is therefore NO."
                },
                {
                    id: "d33v6",
                    text: "Rupa and Kiran are full siblings. Rupa is a woman and Kiran is a man. Bikas is Rupa's son. How is Kiran related to Bikas?",
                    options: [
                        { key: "a", text: "Paternal uncle" },
                        { key: "b", text: "Maternal uncle" },
                        { key: "c", text: "Grandfather" },
                        { key: "d", text: "Cousin" }
                    ],
                    answer: "b",
                    explanation: "Rupa is Bikas's mother. Kiran is Rupa's brother, so he is the brother of Bikas's mother: his maternal uncle. A paternal uncle would instead be the brother of Bikas's father."
                },
                {
                    id: "d33v7",
                    text: "A walker goes 8 m north, turns right and walks 6 m, turns right and walks 16 m, then turns left and walks 9 m. What is the shortest distance and direction from the starting point to the finishing point?",
                    options: [
                        { key: "a", text: "17 m south-east" },
                        { key: "b", text: "17 m north-east" },
                        { key: "c", text: "23 m south-east" },
                        { key: "d", text: "7 m south-west" }
                    ],
                    answer: "a",
                    explanation: "The directions of travel are north, east, south and east; a left turn while facing south points east. The net displacement is 15 m east and 8 m south. The shortest distance is $\\sqrt{15^2+8^2}=\\sqrt{289}=17$ m, towards the south-east. The total walking distance is not the displacement."
                },
                {
                    id: "d33v8",
                    text: "In a row of 42 students, Asha is 14th from the left and Binod is 19th from the right. How many students stand strictly between Asha and Binod?",
                    options: [
                        { key: "a", text: "8" },
                        { key: "b", text: "10" },
                        { key: "c", text: "11" },
                        { key: "d", text: "9" }
                    ],
                    answer: "d",
                    explanation: "Convert Binod's rank to the same end: from the left he is $42-19+1=24$th. The number strictly between positions 14 and 24 is $24-14-1=9$. Subtracting only the two ranks would also count one of the endpoints."
                },
                {
                    id: "d33v9",
                    text: "J, K, L, M and N sit in a straight row, all facing north. J is at the far left. L is immediately to the right of K, M is immediately to the left of N, and K sits somewhere to the left of M. Who sits in the middle?",
                    options: [
                        { key: "a", text: "L" },
                        { key: "b", text: "K" },
                        { key: "c", text: "M" },
                        { key: "d", text: "N" }
                    ],
                    answer: "a",
                    explanation: "After fixing J at the left end, the adjacent pairs KL and MN must occupy the remaining four seats. Since K is to the left of M, the KL pair must come before the MN pair. The only order is J, K, L, M, N, so L occupies the third, middle seat."
                },
                {
                    id: "d33v10",
                    text: "Every shortlisted candidate passed the screening test. Everyone who passed that test submitted an identity document. Prakash did not submit an identity document. Which conclusion must follow?",
                    options: [
                        { key: "a", text: "Prakash was shortlisted without taking the test." },
                        { key: "b", text: "Prakash passed the test but was not shortlisted." },
                        { key: "c", text: "Prakash was not shortlisted." },
                        { key: "d", text: "Everyone who submitted an identity document was shortlisted." }
                    ],
                    answer: "c",
                    explanation: "Being shortlisted requires passing the test, and passing requires submitting an identity document. Prakash lacks that necessary document, so he cannot have passed and cannot have been shortlisted. The statements do not say that submitting a document alone is sufficient for shortlisting."
                }
            ]
        },
        {
            id: "numerical33",
            name: "Numerical Reasoning",
            subject: "MAT",
            accent: "amber",
            blurb: "Q11–20 · number patterns, fractions, percentages, mixtures, ages, averages, work rates, relative speed and data interpretation.",
            questions: [
                {
                    id: "d33q11",
                    text: "Find the next term: <b>2, 6, 15, 31, 56, ?</b>",
                    options: [
                        { key: "a", text: "81" },
                        { key: "b", text: "86" },
                        { key: "c", text: "90" },
                        { key: "d", text: "92" }
                    ],
                    answer: "d",
                    explanation: "The successive differences are 4, 9, 16 and 25: the squares of 2, 3, 4 and 5. The next difference is $6^2=36$, giving $56+36=92$."
                },
                {
                    id: "d33q12",
                    text: "Evaluate $\\left(\\frac{3}{4}\\div\\frac{5}{8}\\right)+0.35\\times4$.",
                    options: [
                        { key: "a", text: "2.20" },
                        { key: "b", text: "2.60" },
                        { key: "c", text: "3.40" },
                        { key: "d", text: "4.80" }
                    ],
                    answer: "b",
                    explanation: "Dividing by a fraction means multiplying by its reciprocal: $\\frac{3}{4}\\times\\frac{8}{5}=\\frac{6}{5}=1.2$. Also, $0.35\\times4=1.4$. Adding the two terms gives $1.2+1.4=2.60$."
                },
                {
                    id: "d33q13",
                    text: "The price per kilogram of rice falls by 20%. With the same fixed amount of money, by what percentage can a buyer increase the quantity purchased?",
                    options: [
                        { key: "a", text: "25%" },
                        { key: "b", text: "20%" },
                        { key: "c", text: "16%" },
                        { key: "d", text: "40%" }
                    ],
                    answer: "a",
                    explanation: "The new price is 80% of the old price. With a fixed budget, quantity is inversely proportional to price, so the quantity multiplier is $100/80=1.25$. The increase is 25%, not 20%; the percentage change in quantity has a different base."
                },
                {
                    id: "d33q14",
                    text: "A 21-litre mixture contains milk and water in the ratio 5 : 2. If 9 litres of water are added and no liquid is removed, what is the new ratio of milk to water?",
                    options: [
                        { key: "a", text: "5 : 3" },
                        { key: "b", text: "3 : 2" },
                        { key: "c", text: "1 : 1" },
                        { key: "d", text: "5 : 2" }
                    ],
                    answer: "c",
                    explanation: "The original seven ratio-parts represent 21 litres, so each part is 3 litres. There are 15 litres of milk and 6 litres of water. Adding 9 litres of water leaves 15 litres of each, giving the ratio 1 : 1."
                },
                {
                    id: "d33q15",
                    text: "Four years ago, the ages of A and B were in the ratio 3 : 2. Six years from now, their ages will be in the ratio 4 : 3. What is A's present age?",
                    options: [
                        { key: "a", text: "24 years" },
                        { key: "b", text: "30 years" },
                        { key: "c", text: "32 years" },
                        { key: "d", text: "34 years" }
                    ],
                    answer: "d",
                    explanation: "Let their ages four years ago be $3x$ and $2x$. Six years from now is ten years after that point, so $(3x+10)/(2x+10)=4/3$. Thus $9x+30=8x+40$, giving $x=10$. A is now $3(10)+4=34$ years old. Check: the past ages were 30 and 20, and the future ages will be 40 and 30."
                },
                {
                    id: "d33q16",
                    text: "The mean of eight numbers is 24. After two numbers are removed, the mean of the remaining six is 21. The removed numbers differ by 10. What is the larger removed number?",
                    options: [
                        { key: "a", text: "38" },
                        { key: "b", text: "33" },
                        { key: "c", text: "36" },
                        { key: "d", text: "43" }
                    ],
                    answer: "a",
                    explanation: "The original sum is $8\\times24=192$, and the remaining sum is $6\\times21=126$. The removed pair therefore adds to 66. If the larger is $x$, the smaller is $x-10$, so $2x-10=66$ and $x=38$. The other number is 28."
                },
                {
                    id: "d33q17",
                    text: "An inlet fills a tank in 12 hours, a second inlet fills it in 18 hours, and an outlet empties a full tank in 36 hours. All operate at constant rates. If all three are opened together, how long will they take to fill an initially empty tank?",
                    options: [
                        { key: "a", text: "6 hours" },
                        { key: "b", text: "9 hours" },
                        { key: "c", text: "12 hours" },
                        { key: "d", text: "18 hours" }
                    ],
                    answer: "b",
                    explanation: "Add filling rates and subtract the emptying rate: $\\frac{1}{12}+\\frac{1}{18}-\\frac{1}{36}=\\frac{3+2-1}{36}=\\frac{1}{9}$ tank per hour. One full tank therefore takes 9 hours. Adding the times instead of the rates would be incorrect."
                },
                {
                    id: "d33q18",
                    text: "Two trains, 120 m and 180 m long, travel on parallel tracks in opposite directions at 54 km/h and 36 km/h. How long do they take to pass each other completely, measured from when their fronts meet?",
                    options: [
                        { key: "a", text: "8 seconds" },
                        { key: "b", text: "10 seconds" },
                        { key: "c", text: "12 seconds" },
                        { key: "d", text: "20 seconds" }
                    ],
                    answer: "c",
                    explanation: "Their relative speed is $54+36=90$ km/h, or $90\\times5/18=25$ m/s. To pass completely, they must cover their combined length relative to one another: $120+180=300$ m. Hence the time is $300/25=12$ seconds."
                },
                {
                    id: "d33q19",
                    text: "The table shows examination results at four centres. Which centre has the highest <b>pass percentage</b>?<table style='border-collapse:collapse;width:100%;max-width:360px;margin-top:12px;font-size:0.9em;text-align:center'><thead><tr style='border-bottom:1px solid currentColor'><th scope='col' style='padding:6px'>Centre</th><th scope='col' style='padding:6px'>Appeared</th><th scope='col' style='padding:6px'>Passed</th></tr></thead><tbody><tr><th scope='row' style='padding:5px'>A</th><td>80</td><td>60</td></tr><tr><th scope='row' style='padding:5px'>B</th><td>120</td><td>96</td></tr><tr><th scope='row' style='padding:5px'>C</th><td>100</td><td>78</td></tr><tr><th scope='row' style='padding:5px'>D</th><td>150</td><td>114</td></tr></tbody></table>",
                    options: [
                        { key: "a", text: "Centre A" },
                        { key: "b", text: "Centre B" },
                        { key: "c", text: "Centre C" },
                        { key: "d", text: "Centre D" }
                    ],
                    answer: "b",
                    explanation: "Divide passed by appeared at each centre: A gives $60/80=75\\%$, B gives $96/120=80\\%$, C gives 78%, and D gives $114/150=76\\%$. Centre B is highest at 80%. Centre D has the largest number of passes, but not the largest proportion."
                },
                {
                    id: "d33q20",
                    text: "A library issued 40 books on Monday, 55 on Tuesday, 45 on Wednesday and 60 on Thursday, as shown. What percentage of the four-day total was issued on <b>Tuesday and Thursday together</b>?<svg class='q-fig' viewBox='0 0 280 172' width='336' height='206' role='img' aria-label='Bar chart of books issued: Monday 40, Tuesday 55, Wednesday 45, Thursday 60'><g fill='none' stroke='currentColor' stroke-width='1'><path d='M30 16v126h238'/><path d='M30 102h238M30 62h238M30 22h238' stroke-dasharray='3 4' opacity='0.3'/></g><g fill='currentColor' fill-opacity='0.3' stroke='currentColor' stroke-width='1.2'><rect x='48' y='62' width='32' height='80'/><rect x='103' y='32' width='32' height='110'/><rect x='158' y='52' width='32' height='90'/><rect x='213' y='22' width='32' height='120'/></g><g fill='currentColor' text-anchor='middle' font-size='11'><text x='64' y='55'>40</text><text x='119' y='25'>55</text><text x='174' y='45'>45</text><text x='229' y='15'>60</text><text x='64' y='159'>Mon</text><text x='119' y='159'>Tue</text><text x='174' y='159'>Wed</text><text x='229' y='159'>Thu</text></g><g fill='currentColor' text-anchor='end' font-size='10'><text x='24' y='146'>0</text><text x='24' y='106'>20</text><text x='24' y='66'>40</text><text x='24' y='26'>60</text></g></svg>",
                    options: [
                        { key: "a", text: "42.5%" },
                        { key: "b", text: "50%" },
                        { key: "c", text: "55%" },
                        { key: "d", text: "57.5%" }
                    ],
                    answer: "d",
                    explanation: "The four-day total is $40+55+45+60=200$. Tuesday and Thursday contribute $55+60=115$. Their share is $(115/200)\\times100=57.5\\%$. The other two days account for the remaining 42.5%."
                }
            ]
        },
        {
            id: "logical33",
            name: "Logical Sequencing",
            subject: "MAT",
            accent: "slate",
            blurb: "Q21–30 · word order, scheduling, syllogisms, assumptions, conclusions, cause and effect, course of action, sets and truth conditions.",
            questions: [
                {
                    id: "d33l21",
                    text: "Arrange the following words in dictionary order:<br><b>1.</b> Precise &nbsp; <b>2.</b> Precede &nbsp; <b>3.</b> Predict &nbsp; <b>4.</b> Precious",
                    options: [
                        { key: "a", text: "2, 1, 4, 3" },
                        { key: "b", text: "2, 4, 1, 3" },
                        { key: "c", text: "4, 2, 1, 3" },
                        { key: "d", text: "3, 2, 4, 1" }
                    ],
                    answer: "b",
                    explanation: "All four start with Pre. The Prec words precede Predict because c comes before d. Among the Prec words, Precede comes first because e precedes i. Precious and Precise agree through Preci, then o precedes s. The full order is Precede, Precious, Precise, Predict: 2, 4, 1, 3."
                },
                {
                    id: "d33l22",
                    text: "Five lectures A, B, C, D and E are held one per day from Monday to Friday. B is held immediately before D. E is before B, C is after D, and A is not on Monday. Which lecture <b>must</b> be on Monday?",
                    options: [
                        { key: "a", text: "A" },
                        { key: "b", text: "B" },
                        { key: "c", text: "C" },
                        { key: "d", text: "E" }
                    ],
                    answer: "d",
                    explanation: "Among E, B, D and C, the required order is E before B, immediately followed by D, with C later. B cannot be first because E precedes it; neither D nor C can be first either. A is explicitly excluded from Monday. Therefore E must occupy Monday, even though the other days are not all uniquely determined."
                },
                {
                    id: "d33l23",
                    text: "Treat the statements as true.<br><b>Statements:</b> All violinists are musicians. No musician is a robot. Some teachers are violinists.<br><b>Conclusions:</b> I. Some teachers are not robots. II. No violinist is a robot.<br>Which conclusions necessarily follow?",
                    options: [
                        { key: "a", text: "Only I" },
                        { key: "b", text: "Only II" },
                        { key: "c", text: "Both I and II" },
                        { key: "d", text: "Neither I nor II" }
                    ],
                    answer: "c",
                    explanation: "Every violinist lies inside the musician group, which has no overlap with robots, so II follows. The stated teachers who are violinists are therefore musicians and are not robots, which proves I. Their existence is explicitly supplied by 'some teachers are violinists'; it is not inferred from an 'all' statement."
                },
                {
                    id: "d33l24",
                    text: "Treat the statements as true.<br><b>Statements:</b> Some lakes are reservoirs. All reservoirs are protected sites.<br><b>Conclusions:</b> I. Some lakes are protected sites. II. All protected sites are lakes.<br>Which conclusions necessarily follow?",
                    options: [
                        { key: "a", text: "Only I" },
                        { key: "b", text: "Only II" },
                        { key: "c", text: "Both I and II" },
                        { key: "d", text: "Neither I nor II" }
                    ],
                    answer: "a",
                    explanation: "The lakes that are reservoirs must also be protected sites, so I follows. Protected sites may include places that are neither lakes nor reservoirs. Reversing or extending the given one-way inclusion to 'all protected sites are lakes' is unjustified, so II does not follow."
                },
                {
                    id: "d33l25",
                    text: "A college will use students' college email accounts as the <b>only</b> channel for official notices, intending that every student can receive them. Which assumption is necessary for this plan?",
                    options: [
                        { key: "a", text: "Every student prefers email to paper notices." },
                        { key: "b", text: "No official notice will ever need a correction." },
                        { key: "c", text: "Every student has access to their college email account." },
                        { key: "d", text: "Receiving email notices will improve every student's marks." }
                    ],
                    answer: "c",
                    explanation: "If even one student cannot access their college account, email alone cannot make notices accessible to every student. Account access is therefore necessary to the stated plan. Preference for email, error-free notices and improved marks are not requirements for being able to receive a notice."
                },
                {
                    id: "d33l26",
                    text: "A report says a library extended its opening hours and average weekly visits rose by 20% in the following three months. It gives no information about other changes or visitors' reasons. Which conclusion is strictly supported?",
                    options: [
                        { key: "a", text: "The longer hours were the sole cause of the increase." },
                        { key: "b", text: "The number of visits increased in every individual week." },
                        { key: "c", text: "Every additional visit occurred during the new opening hours." },
                        { key: "d", text: "Average weekly visits rose after the hours changed, but the report alone does not establish the cause." }
                    ],
                    answer: "d",
                    explanation: "The report establishes a time sequence and a change in the average. It does not establish causation or rule out other influences. An increased average does not require an increase in every week, and there is no breakdown showing when the extra visits occurred."
                },
                {
                    id: "d33l27",
                    text: "A feeder cable broke during a storm, immediately disconnecting power to all buildings supplied by it. Engineers found no other fault, and supply returned when they repaired that cable. What is the most direct cause-and-effect relationship?",
                    options: [
                        { key: "a", text: "The power interruption caused the feeder cable to break." },
                        { key: "b", text: "The broken feeder cable caused the power interruption." },
                        { key: "c", text: "The cable break and the interruption were unrelated events." },
                        { key: "d", text: "An increase in electricity demand is established as the cause." }
                    ],
                    answer: "b",
                    explanation: "The cable break directly interrupted the supply path, and repairing that same path restored power. Both the stated mechanism and the repair outcome support the cable break as the cause of the interruption. Nothing in the account establishes increased demand or the reverse causal direction."
                },
                {
                    id: "d33l28",
                    text: "A routine school inspection finds an emergency exit blocked by stored furniture. There is no ongoing emergency.<br><b>Proposed actions:</b> I. Remove the furniture and introduce checks to keep the exit clear. II. Permanently cancel all classes at the school.<br>Which action is a proportionate response that directly addresses the finding?",
                    options: [
                        { key: "a", text: "Only I" },
                        { key: "b", text: "Neither I nor II" },
                        { key: "c", text: "Only II" },
                        { key: "d", text: "Both I and II" }
                    ],
                    answer: "a",
                    explanation: "Action I removes the obstruction and adds a preventive check, directly addressing the problem found. Permanently cancelling every class is not a proportionate response to this remediable obstruction, so II is not warranted by the information given."
                },
                {
                    id: "d33l29",
                    text: "Among 60 students, 32 belong to club A, 28 to club B and 20 to club C. The pairwise overlaps are 12 in A and B, 8 in A and C, and 6 in B and C; <b>each pairwise count includes students in all three clubs</b>. Four students belong to all three. How many belong to none?",
                    options: [
                        { key: "a", text: "4" },
                        { key: "b", text: "6" },
                        { key: "c", text: "8" },
                        { key: "d", text: "2" }
                    ],
                    answer: "d",
                    explanation: "Use inclusion–exclusion. First add the club totals: $32+28+20=80$. The pairwise overlaps total $12+8+6=26$. Add back the triple overlap once: $80-26+4=58$ students belong to at least one club. This last correction is needed because subtracting all three pairwise overlaps otherwise removes those four students too many times. Thus $60-58=2$ students belong to none."
                },
                {
                    id: "d33l30",
                    text: "Exactly one of three envelopes A, B and C contains a ticket. Their notes say:<br><b>A:</b> 'The ticket is not in A.'<br><b>B:</b> 'The ticket is in A.'<br><b>C:</b> 'The ticket is not in C.'<br>Exactly one note is true and the other two are false. Where is the ticket?",
                    options: [
                        { key: "a", text: "Envelope A" },
                        { key: "b", text: "Envelope C" },
                        { key: "c", text: "Envelope B" },
                        { key: "d", text: "It cannot be determined." }
                    ],
                    answer: "b",
                    explanation: "The notes on A and B contradict each other, so exactly one of those two is already true. To keep the total at one true note, C's note must be false. Therefore 'the ticket is not in C' is false, and the ticket is in C. Checking gives A true, B false and C false."
                }
            ]
        },
        {
            id: "spatial33",
            name: "Spatial Relation / Abstract Reasoning",
            subject: "MAT",
            accent: "emerald",
            blurb: "Q31–40 · rotations, figure rules, mirror and water images, paper folding, square counting, cube nets, painted cubes and pattern completion.",
            questions: [
                {
                    id: "d33s31",
                    text: "A square card has an upward-pointing arrow through its centre and a dot near its bottom-right corner. The whole card is rotated <b>90&deg; clockwise</b> in its own plane, without flipping it. Which option shows the result?<svg class='q-fig' viewBox='0 0 70 70' width='84' height='84' role='img' aria-label='Square card: arrow points up; dot is in the bottom-right corner'><rect x='5' y='5' width='60' height='60' fill='none' stroke='currentColor' stroke-width='1.6'/><path d='M35 51V19m-8 8 8-8 8 8' fill='none' stroke='currentColor' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'/><circle cx='51' cy='51' r='4' fill='currentColor'/></svg>",
                    options: [
                        { key: "a", text: "<svg class='opt-fig' viewBox='0 0 70 70' role='img' aria-label='Right arrow, bottom-left dot'><rect x='5' y='5' width='60' height='60' fill='none' stroke='currentColor' stroke-width='1.6'/><path d='M19 35H51m-8-8 8 8-8 8' fill='none' stroke='currentColor' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'/><circle cx='19' cy='51' r='4' fill='currentColor'/></svg>Right arrow; bottom-left dot" },
                        { key: "b", text: "<svg class='opt-fig' viewBox='0 0 70 70' role='img' aria-label='Right arrow, bottom-right dot'><rect x='5' y='5' width='60' height='60' fill='none' stroke='currentColor' stroke-width='1.6'/><path d='M19 35H51m-8-8 8 8-8 8' fill='none' stroke='currentColor' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'/><circle cx='51' cy='51' r='4' fill='currentColor'/></svg>Right arrow; bottom-right dot" },
                        { key: "c", text: "<svg class='opt-fig' viewBox='0 0 70 70' role='img' aria-label='Left arrow, top-right dot'><rect x='5' y='5' width='60' height='60' fill='none' stroke='currentColor' stroke-width='1.6'/><path d='M51 35H19m8-8-8 8 8 8' fill='none' stroke='currentColor' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'/><circle cx='51' cy='19' r='4' fill='currentColor'/></svg>Left arrow; top-right dot" },
                        { key: "d", text: "<svg class='opt-fig' viewBox='0 0 70 70' role='img' aria-label='Down arrow, top-left dot'><rect x='5' y='5' width='60' height='60' fill='none' stroke='currentColor' stroke-width='1.6'/><path d='M35 19V51m-8-8 8 8 8-8' fill='none' stroke='currentColor' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'/><circle cx='19' cy='19' r='4' fill='currentColor'/></svg>Down arrow; top-left dot" }
                    ],
                    answer: "a",
                    explanation: "A clockwise quarter-turn sends up to right. It also sends the original bottom-right corner to the bottom-left corner. Both features must rotate together; rotating only the arrow but leaving the dot in place produces the wrong option."
                },
                {
                    id: "d33s32",
                    text: "In each row, superpose the <b>internal strokes</b> of the first two tiles and erase any stroke present in both. The remaining strokes form the third tile; the square borders stay fixed. The rows are (vertical, horizontal, plus), (plus, horizontal, vertical), and (plus, vertical, missing). Which tile completes the pattern?<svg class='q-fig' viewBox='0 0 190 190' width='228' height='228' role='img' aria-label='Three-by-three tile matrix: row one vertical, horizontal, plus; row two plus, horizontal, vertical; row three plus, vertical, missing'><g fill='none' stroke='currentColor' stroke-width='1.2'><rect x='10' y='10' width='45' height='45'/><rect x='70' y='10' width='45' height='45'/><rect x='130' y='10' width='45' height='45'/><rect x='10' y='70' width='45' height='45'/><rect x='70' y='70' width='45' height='45'/><rect x='130' y='70' width='45' height='45'/><rect x='10' y='130' width='45' height='45'/><rect x='70' y='130' width='45' height='45'/><rect x='130' y='130' width='45' height='45'/></g><g fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round'><path d='M32.5 20v25M80 32.5h25M152.5 20v25M140 32.5h25M32.5 80v25M20 92.5h25M80 92.5h25M152.5 80v25M32.5 140v25M20 152.5h25M92.5 140v25'/></g><text x='152.5' y='160' text-anchor='middle' fill='currentColor' font-size='22'>?</text></svg>",
                    options: [
                        { key: "a", text: "<svg class='opt-fig' viewBox='0 0 60 60' role='img' aria-label='A plus sign inside a square'><rect x='5' y='5' width='50' height='50' fill='none' stroke='currentColor' stroke-width='1.3'/><path d='M30 15v30M15 30h30' stroke='currentColor' stroke-width='2.5'/></svg>Both lines (a plus)" },
                        { key: "b", text: "<svg class='opt-fig' viewBox='0 0 60 60' role='img' aria-label='A vertical line inside a square'><rect x='5' y='5' width='50' height='50' fill='none' stroke='currentColor' stroke-width='1.3'/><path d='M30 15v30' stroke='currentColor' stroke-width='2.5'/></svg>Vertical line only" },
                        { key: "c", text: "<svg class='opt-fig' viewBox='0 0 60 60' role='img' aria-label='A horizontal line inside a square'><rect x='5' y='5' width='50' height='50' fill='none' stroke='currentColor' stroke-width='1.3'/><path d='M15 30h30' stroke='currentColor' stroke-width='2.5'/></svg>Horizontal line only" },
                        { key: "d", text: "<svg class='opt-fig' viewBox='0 0 60 60' role='img' aria-label='An empty square'><rect x='5' y='5' width='50' height='50' fill='none' stroke='currentColor' stroke-width='1.3'/></svg>No internal line" }
                    ],
                    answer: "c",
                    explanation: "The plus contains one vertical and one horizontal line. The next tile contains the same vertical line, so that shared line is erased. Only the horizontal line remains. This is an exclusive-or rule applied to the internal strokes; the square borders are just tile frames."
                },
                {
                    id: "d33s33",
                    text: "A square has a filled circle in its upper-left corner and an upright outline triangle in its lower-right corner. A <b>vertical mirror</b> is placed to its right. Where are the two marks within the reflected square?<svg class='q-fig' viewBox='0 0 136 86' width='190' height='120' role='img' aria-label='Square with upper-left filled circle and lower-right upright triangle; vertical mirror line on the right'><rect x='14' y='12' width='60' height='60' fill='none' stroke='currentColor' stroke-width='1.6'/><circle cx='28' cy='26' r='5' fill='currentColor'/><polygon points='60,50 53,64 67,64' fill='none' stroke='currentColor' stroke-width='1.8'/><path d='M96 6v72' stroke='currentColor' stroke-width='2.3'/><text x='102' y='45' fill='currentColor' font-size='8'>mirror</text></svg>",
                    options: [
                        { key: "a", text: "Circle lower-left; triangle upper-right" },
                        { key: "b", text: "Circle upper-right; triangle lower-left" },
                        { key: "c", text: "Circle lower-right; triangle upper-left" },
                        { key: "d", text: "Circle upper-left; triangle lower-right" }
                    ],
                    answer: "b",
                    explanation: "Reflection in a vertical mirror reverses left and right but preserves height. Thus the upper-left circle moves to the upper-right, and the lower-right triangle moves to the lower-left. Neither mark crosses from the upper half to the lower half."
                },
                {
                    id: "d33s34",
                    text: "A card shows a triangle pointing left, with a small circle above it. What does its <b>water image</b>, a reflection in the horizontal line below the card, show?<svg class='q-fig' viewBox='0 0 92 102' width='110' height='122' role='img' aria-label='Card with a left-pointing triangle and a circle above it; horizontal reflection line below'><rect x='12' y='8' width='64' height='66' fill='none' stroke='currentColor' stroke-width='1.5'/><polygon points='24,45 56,29 56,61' fill='none' stroke='currentColor' stroke-width='1.8'/><circle cx='44' cy='18' r='4' fill='currentColor'/><path d='M6 84h80' stroke='currentColor' stroke-width='1.5' stroke-dasharray='4 3'/><text x='46' y='98' text-anchor='middle' fill='currentColor' font-size='8'>water line</text></svg>",
                    options: [
                        { key: "a", text: "Triangle points right; circle is below it." },
                        { key: "b", text: "Triangle points right; circle is above it." },
                        { key: "c", text: "Triangle points left; circle is above it." },
                        { key: "d", text: "Triangle points left; circle is below it." }
                    ],
                    answer: "d",
                    explanation: "A horizontal reflection swaps above and below while keeping left and right unchanged. The triangle therefore still points left, but the circle now lies below it. Changing the triangle to point right would introduce an extra left–right reflection."
                },
                {
                    id: "d33s35",
                    text: "A square sheet of side 12 cm is folded left to right along its vertical centre line, then bottom to top along its horizontal centre line. A small hole is punched through all four layers, <b>2 cm to the right of the vertical fold and 1 cm above the horizontal fold</b>. After unfolding, how many distinct holes appear, and what is the area of the rectangle formed by their centres?<svg class='q-fig' viewBox='0 0 146 106' width='204' height='148' role='img' aria-label='Folded six-centimetre square packet: left and bottom edges are folds; punched hole two centimetres right of the left fold and one centimetre above the bottom fold'><rect x='30' y='10' width='60' height='60' fill='none' stroke='currentColor' stroke-width='1.4'/><path d='M30 10v60h60' fill='none' stroke='currentColor' stroke-width='2.8'/><circle cx='50' cy='60' r='2.5' fill='currentColor'/><path d='M30 60h17M53 60h57M90 70h20' fill='none' stroke='currentColor' stroke-width='1' stroke-dasharray='3 3'/><path d='M106 60v10M103 60h6M103 70h6' fill='none' stroke='currentColor' stroke-width='1'/><g fill='currentColor' font-size='9'><text x='40' y='54' text-anchor='middle'>2 cm</text><text x='114' y='68'>1 cm</text><text x='61' y='83' text-anchor='middle'>fold</text><text x='18' y='46' transform='rotate(-90 18 46)' text-anchor='middle'>fold</text><text x='66' y='100' text-anchor='middle'>folded packet</text></g></svg>",
                    options: [
                        { key: "a", text: "4 holes; 8 cm&sup2;" },
                        { key: "b", text: "4 holes; 2 cm&sup2;" },
                        { key: "c", text: "2 holes; 8 cm&sup2;" },
                        { key: "d", text: "4 holes; 16 cm&sup2;" }
                    ],
                    answer: "a",
                    explanation: "The punch is away from both folds, so four separate holes appear. Their centres lie 2 cm on either side of the vertical centre line and 1 cm on either side of the horizontal centre line. The rectangle therefore has width $2+2=4$ cm and height $1+1=2$ cm. Its area is $4\\times2=8\\,\\mathrm{cm^2}$."
                },
                {
                    id: "d33s36",
                    text: "How many squares of all sizes are formed by the grid lines in this <b>3-row, 4-column</b> grid of equal square cells? There are no diagonal lines.<svg class='q-fig' viewBox='0 0 180 140' width='234' height='182' role='img' aria-label='Rectangular grid with three rows and four columns of equal square cells'><g fill='none' stroke='currentColor' stroke-width='1.8'><rect x='10' y='10' width='160' height='120'/><path d='M50 10v120M90 10v120M130 10v120M10 50h160M10 90h160'/></g></svg>",
                    options: [
                        { key: "a", text: "12" },
                        { key: "b", text: "18" },
                        { key: "c", text: "20" },
                        { key: "d", text: "30" }
                    ],
                    answer: "c",
                    explanation: "There are $3\\times4=12$ unit squares, $2\\times3=6$ squares of side two cells and $1\\times2=2$ squares of side three cells. The total is $12+6+2=20$. Four-cell-wide squares do not fit because the grid is only three cells high."
                },
                {
                    id: "d33s37",
                    text: "The net below has A, C, D and E in a horizontal row, B immediately above C, and F immediately below C. When it is folded into a cube, which face is <b>opposite A</b>?<svg class='q-fig' viewBox='0 0 180 140' width='234' height='182' role='img' aria-label='Cube net: A, C, D, E in a horizontal row, B above C, F below C'><g fill='none' stroke='currentColor' stroke-width='1.6'><rect x='10' y='50' width='40' height='40'/><rect x='50' y='50' width='40' height='40'/><rect x='90' y='50' width='40' height='40'/><rect x='130' y='50' width='40' height='40'/><rect x='50' y='10' width='40' height='40'/><rect x='50' y='90' width='40' height='40'/></g><g fill='currentColor' font-size='15' text-anchor='middle'><text x='30' y='75'>A</text><text x='70' y='75'>C</text><text x='110' y='75'>D</text><text x='150' y='75'>E</text><text x='70' y='35'>B</text><text x='70' y='115'>F</text></g></svg>",
                    options: [
                        { key: "a", text: "B" },
                        { key: "b", text: "C" },
                        { key: "c", text: "E" },
                        { key: "d", text: "D" }
                    ],
                    answer: "d",
                    explanation: "The four squares A, C, D and E wrap around the cube as its side faces. Faces two positions apart on this strip become opposite: A faces D, and C faces E. The two remaining faces, B and F, are also opposite. A face touching A in the folded cube cannot be its opposite."
                },
                {
                    id: "d33s38",
                    text: "Only <b>two opposite faces</b> of a large cube are painted; the other four faces are unpainted. It is cut into 64 identical smaller cubes, four along each edge. How many small cubes have <b>exactly one</b> painted face?<svg class='q-fig' viewBox='0 0 200 146' width='250' height='183' role='img' aria-label='Cube with four divisions per edge; front face shaded, opposite hidden face also painted, the other four outer faces unpainted'><rect x='10' y='40' width='80' height='80' fill='currentColor' fill-opacity='0.18'/><g fill='none' stroke='currentColor' stroke-width='1.3'><path d='M10 40h80v80H10zM10 40 40 10h80v80l-30 30M90 40 120 10'/><path d='M30 40v80M50 40v80M70 40v80M10 60h80M10 80h80M10 100h80'/><path d='M30 40 60 10M50 40 80 10M70 40 100 10M17.5 32.5h80M25 25h80M32.5 17.5h80M97.5 32.5v80M105 25v80M112.5 17.5v80M90 60 120 30M90 80 120 50M90 100 120 70'/><path d='M40 10v80h80' stroke-dasharray='3 3' opacity='0.4'/></g><g fill='currentColor' font-size='9'><text x='132' y='49'>Opposite</text><text x='132' y='62'>hidden face</text><text x='132' y='75'>also painted</text><text x='65' y='138' text-anchor='middle'>4 small cubes per edge</text></g></svg>",
                    options: [
                        { key: "a", text: "16" },
                        { key: "b", text: "32" },
                        { key: "c", text: "24" },
                        { key: "d", text: "56" }
                    ],
                    answer: "b",
                    explanation: "Each painted outer face supplies one layer of $4\\times4=16$ small cubes. Because the painted faces are opposite and four small cubes fit along the intervening edge, these two layers do not overlap. Every cube in either layer has exactly one painted face, including edge and corner cubes, because the other outer faces were never painted. The total is $2\\times16=32$."
                },
                {
                    id: "d33s39",
                    text: "Which of these figures does <b>not</b> look unchanged after a 180&deg; rotation about its centre?",
                    options: [
                        { key: "a", text: "<svg class='opt-fig' viewBox='0 0 60 60' role='img' aria-label='A square with both diagonals drawn'><g fill='none' stroke='currentColor' stroke-width='1.8'><rect x='10' y='10' width='40' height='40'/><path d='M10 10 50 50M10 50 50 10'/></g></svg>Square with both diagonals" },
                        { key: "b", text: "<svg class='opt-fig' viewBox='0 0 60 60' role='img' aria-label='A non-square rectangle'><rect x='6' y='17' width='48' height='26' fill='none' stroke='currentColor' stroke-width='1.8'/></svg>Non-square rectangle" },
                        { key: "c", text: "<svg class='opt-fig' viewBox='0 0 60 60' role='img' aria-label='An upright T-shaped figure'><path d='M10 12h40M30 12v38' fill='none' stroke='currentColor' stroke-width='3'/></svg>Upright T-shaped figure" },
                        { key: "d", text: "<svg class='opt-fig' viewBox='0 0 60 60' role='img' aria-label='A plus sign with four equal arms'><path d='M30 10v40M10 30h40' fill='none' stroke='currentColor' stroke-width='3'/></svg>Plus sign with equal arms" }
                    ],
                    answer: "c",
                    explanation: "A half-turn makes the T upside down: its crossbar moves from the top to the bottom, so it does not coincide with its original position. A rectangle, a square with both diagonals and an equal-armed plus all coincide with themselves after 180&deg;."
                },
                {
                    id: "d33s40",
                    text: "In a tile series the dot moves one corner clockwise at each step, while the number of central strokes alternates between one and two. The first three tiles are <b>top-left/one, top-right/two, bottom-right/one</b>. What is the fourth tile?<svg class='q-fig' viewBox='0 0 230 92' width='299' height='120' role='img' aria-label='Three square tiles: dot top-left and one central stroke; dot top-right and two strokes; dot bottom-right and one stroke'><g fill='none' stroke='currentColor' stroke-width='1.5'><rect x='8' y='8' width='58' height='58'/><rect x='85' y='8' width='58' height='58'/><rect x='162' y='8' width='58' height='58'/></g><g fill='currentColor'><circle cx='20' cy='20' r='4'/><circle cx='131' cy='20' r='4'/><circle cx='208' cy='54' r='4'/></g><path d='M37 29v16M109 29v16M119 29v16M191 29v16' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round'/><g fill='currentColor' text-anchor='middle' font-size='10'><text x='37' y='84'>1</text><text x='114' y='84'>2</text><text x='191' y='84'>3</text></g></svg>",
                    options: [
                        { key: "a", text: "Dot bottom-left; two central strokes" },
                        { key: "b", text: "Dot bottom-left; one central stroke" },
                        { key: "c", text: "Dot top-left; two central strokes" },
                        { key: "d", text: "Dot top-right; one central stroke" }
                    ],
                    answer: "a",
                    explanation: "Clockwise corner order is top-left, top-right, bottom-right, bottom-left, then back to top-left. The fourth dot is therefore bottom-left. The stroke counts go 1, 2, 1, 2, so the fourth tile needs two strokes. An option satisfying only one of these two rules is insufficient."
                }
            ]
        }
    ]
};

/* Keep all four units under MAT so these marks also contribute to the
   existing MAT subject-performance panel. Every question is mapped once. */
const DAY33_SYLLABUS = [
    { subject: "MAT", accent: "slate", topics: [
        { topic: "Verbal Reasoning", subs: [
            { name: "Analogy and Classification", ids: ["d33v1", "d33v2"] },
            { name: "Coding and Decoding", ids: ["d33v3", "d33v4"] },
            { name: "Series Completion", ids: ["d33v5"] },
            { name: "Blood Relations", ids: ["d33v6"] },
            { name: "Direction Sense", ids: ["d33v7"] },
            { name: "Ranking and Arrangement", ids: ["d33v8", "d33v9"] },
            { name: "Logical Deduction from Statements", ids: ["d33v10"] }
        ] },
        { topic: "Numerical Reasoning", subs: [
            { name: "Number Series and Analogy", ids: ["d33q11"] },
            { name: "Simplification and Approximation", ids: ["d33q12"] },
            { name: "Ratio, Percentage, Average and Age", ids: ["d33q13", "d33q14", "d33q15", "d33q16"] },
            { name: "Time, Work, Speed and Distance", ids: ["d33q17", "d33q18"] },
            { name: "Data Interpretation from Tables and Charts", ids: ["d33q19", "d33q20"] }
        ] },
        { topic: "Logical Sequencing", subs: [
            { name: "Ordering of Events, Words and Steps", ids: ["d33l21", "d33l22"] },
            { name: "Syllogism", ids: ["d33l23", "d33l24"] },
            { name: "Statement and Assumption", ids: ["d33l25"] },
            { name: "Statement and Conclusion", ids: ["d33l26", "d33l30"] },
            { name: "Cause and Effect", ids: ["d33l27"] },
            { name: "Course of Action", ids: ["d33l28"] },
            { name: "Venn Diagram Based Deduction", ids: ["d33l29"] }
        ] },
        { topic: "Spatial Relation / Abstract Reasoning", subs: [
            { name: "Figure Series and Analogy", ids: ["d33s32", "d33s40"] },
            { name: "Odd One Out", ids: ["d33s39"] },
            { name: "Mirror and Water Images", ids: ["d33s33", "d33s34"] },
            { name: "Paper Folding and Cutting", ids: ["d33s35"] },
            { name: "Embedded and Hidden Figures", ids: ["d33s36"] },
            { name: "Cube and Dice", ids: ["d33s37", "d33s38"] },
            { name: "Pattern Completion and Rotation", ids: ["d33s31"] }
        ] }
    ] }
];
DAY33.syllabus = DAY33_SYLLABUS;