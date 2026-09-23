const DAY41 = {
    day: 41,
    title: "Day 41",
    subtitle: "Train Problems and Mixed MAT",
    durationMinutes: 60,
    negativeMarking: 0.25,
    chapters: [
        {
            id: "trains41",
            name: "Numerical Reasoning - Trains",
            subject: "MAT",
            accent: "blue",
            blurb: "Thirty problems on poles, platforms, bridges, overtaking, opposing trains, passengers, timetables and stoppages.",
            questions: [
                {
                    id: "d41t1",
                    text: "A train 210 m long passes a stationary signal post completely in 12 seconds at constant speed. What is its speed in km/h?",
                    options: [
                        { key: "a", text: "54 km/h" },
                        { key: "b", text: "63 km/h" },
                        { key: "c", text: "72 km/h" },
                        { key: "d", text: "84 km/h" }
                    ],
                    answer: "b",
                    explanation: "To clear a point object, the train travels its own length. Its speed is $210/12=17.5$ m/s. Multiplying by 3.6 converts this to 63 km/h. No platform length is added when the stationary object is a post."
                },
                {
                    id: "d41t2",
                    text: "A 156 m train travels at a constant 72 km/h. How long does it take to clear a 244 m platform, from its front reaching the near end to its rear leaving the far end?",
                    options: [
                        { key: "a", text: "7.8 seconds" },
                        { key: "b", text: "12.2 seconds" },
                        { key: "c", text: "16 seconds" },
                        { key: "d", text: "20 seconds" }
                    ],
                    answer: "d",
                    explanation: "The speed is 20 m/s. Complete clearance requires the front to travel the platform length plus the train length, $244+156=400$ m. The time is $400/20=20$ seconds. Using only the platform length would stop the timing before the rear had cleared it."
                },
                {
                    id: "d41t3",
                    text: "At the same constant speed, a train clears a pole in 12 seconds and a 270 m bridge in 30 seconds. What is the length of the train?",
                    options: [
                        { key: "a", text: "180 m" },
                        { key: "b", text: "270 m" },
                        { key: "c", text: "450 m" },
                        { key: "d", text: "120 m" }
                    ],
                    answer: "a",
                    explanation: "The extra 18 seconds is the time to cover the bridge's additional 270 m, so speed is $270/18=15$ m/s. In the 12-second pole crossing, the train travels one train length: $15(12)=180$ m. Both observations must be used with the same speed."
                },
                {
                    id: "d41t4",
                    text: "A train clears a 200 m platform in 20 seconds and a 440 m platform in 32 seconds, maintaining the same speed. What is its speed?",
                    options: [
                        { key: "a", text: "54 km/h" },
                        { key: "b", text: "60 km/h" },
                        { key: "c", text: "72 km/h" },
                        { key: "d", text: "90 km/h" }
                    ],
                    answer: "c",
                    explanation: "Subtracting the two complete-crossing equations removes the unknown train length. The extra 240 m takes 12 seconds, giving 20 m/s or 72 km/h. Checking either equation gives a train length of 200 m, which is consistent with the other observation."
                },
                {
                    id: "d41t5",
                    text: "A train clears a 300 m bridge in 24 seconds and a 600 m tunnel in 39 seconds at the same constant speed. For how long is the entire train inside that tunnel, from the rear entering until the front starts to leave?",
                    options: [
                        { key: "a", text: "15 seconds" },
                        { key: "b", text: "21 seconds" },
                        { key: "c", text: "30 seconds" },
                        { key: "d", text: "39 seconds" }
                    ],
                    answer: "b",
                    explanation: "The extra 300 m takes 15 seconds, so speed is 20 m/s. The train length is $24(20)-300=180$ m. While the whole train is inside the 600 m tunnel, it travels only $600-180=420$ m, taking 21 seconds. Full tunnel clearance instead uses the sum of lengths and takes 39 seconds."
                },
                {
                    id: "d41t6",
                    text: "Trains 180 m and 240 m long approach on parallel tracks at constant speeds of 72 km/h and 54 km/h. How long elapses from their fronts meeting until their rears separate?",
                    options: [
                        { key: "a", text: "12 seconds" },
                        { key: "b", text: "24 seconds" },
                        { key: "c", text: "42 seconds" },
                        { key: "d", text: "28 seconds" }
                    ],
                    answer: "a",
                    explanation: "The opposing speeds add to 126 km/h, or 35 m/s. Complete crossing requires a relative displacement equal to the combined length, $180+240=420$ m. Thus the time is $420/35=12$ seconds. Subtracting speeds would apply to overtaking, not this head-on approach."
                },
                {
                    id: "d41t7",
                    text: "A 225 m express overtakes a 150 m train on a parallel track. Both move in the same direction at constant speeds of 90 km/h and 54 km/h respectively. From the express's front reaching the slower train's rear until its rear clears the slower train's front, how long does the pass take?",
                    options: [
                        { key: "a", text: "9.375 seconds" },
                        { key: "b", text: "15 seconds" },
                        { key: "c", text: "25 seconds" },
                        { key: "d", text: "37.5 seconds" }
                    ],
                    answer: "d",
                    explanation: "Same-direction relative speed is $90-54=36$ km/h, or 10 m/s. The express must gain both train lengths, a total of 375 m, for its rear to clear the other front. This takes $375/10=37.5$ seconds. The distance does not become just the faster train's length merely because both move together."
                },
                {
                    id: "d41t8",
                    text: "A 210 m train moving at 90 km/h completely overtakes another train moving at 54 km/h in 36 seconds. The trains maintain constant speeds on parallel tracks. What is the slower train's length?",
                    options: [
                        { key: "a", text: "360 m" },
                        { key: "b", text: "210 m" },
                        { key: "c", text: "150 m" },
                        { key: "d", text: "90 m" }
                    ],
                    answer: "c",
                    explanation: "The relative speed is 10 m/s, so 36 seconds corresponds to a combined length of 360 m. Subtract the known 210 m train length to obtain 150 m. The 360 m is not the unknown length alone; it includes both trains during a complete overtake."
                },
                {
                    id: "d41t9",
                    text: "Two trains 156 m and 204 m long cross completely in 12 seconds while moving in opposite directions at constant speeds. The first train travels at 72 km/h. What is the second train's speed?",
                    options: [
                        { key: "a", text: "36 km/h" },
                        { key: "b", text: "108 km/h" },
                        { key: "c", text: "144 km/h" },
                        { key: "d", text: "54 km/h" }
                    ],
                    answer: "a",
                    explanation: "The relative speed is $(156+204)/12=30$ m/s, or 108 km/h. In opposite directions this equals the sum of speeds. Therefore the second speed is $108-72=36$ km/h. Adding 72 to the relative speed would solve a different, same-direction situation."
                },
                {
                    id: "d41t10",
                    text: "Two trains of equal length move in opposite directions at 54 km/h and 36 km/h. Their complete crossing takes 24 seconds at constant speeds. How long is each train?",
                    options: [
                        { key: "a", text: "600 m" },
                        { key: "b", text: "150 m" },
                        { key: "c", text: "300 m" },
                        { key: "d", text: "450 m" }
                    ],
                    answer: "c",
                    explanation: "Their combined speed is 90 km/h, or 25 m/s. In 24 seconds they cover 600 m relative to one another. That is the sum of two equal train lengths, so each is 300 m. Reporting 600 m would forget that the measured interval clears two trains."
                },
                {
                    id: "d41t11",
                    text: "Trains 270 m and 180 m long cross completely in 18 seconds in opposite directions. Their constant speeds are in the ratio 5:4. What is the speed of the faster train?",
                    options: [
                        { key: "a", text: "40 km/h" },
                        { key: "b", text: "50 km/h" },
                        { key: "c", text: "45 km/h" },
                        { key: "d", text: "90 km/h" }
                    ],
                    answer: "b",
                    explanation: "The sum of speeds is $450/18=25$ m/s, or 90 km/h. The nine ratio parts therefore represent 90 km/h, making one part 10 km/h. The faster train has five parts and travels at 50 km/h. The different lengths do not set the speed ratio; that ratio is independently given."
                },
                {
                    id: "d41t12",
                    text: "Two trains have lengths 240 m and 360 m. With the same two speed magnitudes, they take 20 seconds to cross completely in opposite directions but 100 seconds for a complete same-direction overtake. What is the faster-to-slower speed ratio?",
                    options: [
                        { key: "a", text: "5:1" },
                        { key: "b", text: "2:1" },
                        { key: "c", text: "5:4" },
                        { key: "d", text: "3:2" }
                    ],
                    answer: "d",
                    explanation: "The speed sum is $600/20=30$ m/s and their difference is $600/100=6$ m/s. Adding and subtracting these equations gives speeds 18 and 12 m/s. Their ratio is 3:2. The crossing-time ratio gives a ratio of relative speeds, not directly the ratio of the individual speeds."
                },
                {
                    id: "d41t13",
                    text: "A passenger sits at a fixed position in a 180 m train travelling at 36 km/h. A 270 m train approaches on a parallel track at 72 km/h. How long does the second train take to pass that passenger, from its front reaching the passenger until its rear passes?",
                    options: [
                        { key: "a", text: "15 seconds" },
                        { key: "b", text: "27 seconds" },
                        { key: "c", text: "9 seconds" },
                        { key: "d", text: "18 seconds" }
                    ],
                    answer: "c",
                    explanation: "The approaching train moves relative to the passenger at 108 km/h, or 30 m/s. It must move only its own 270 m length past that point observer, so the time is 9 seconds. Adding the passenger's train length would calculate complete train-to-train clearance instead."
                },
                {
                    id: "d41t14",
                    text: "A passenger remains seated in a 180 m train moving at 54 km/h. A 300 m express at 90 km/h overtakes on a parallel track in the same direction. For how long does the express pass the passenger, measured from its front reaching the passenger to its rear passing?",
                    options: [
                        { key: "a", text: "48 seconds" },
                        { key: "b", text: "30 seconds" },
                        { key: "c", text: "12 seconds" },
                        { key: "d", text: "18 seconds" }
                    ],
                    answer: "b",
                    explanation: "The express gains on the passenger at 36 km/h, or 10 m/s. Passing a point observer requires a gain of the express length only: $300/10=30$ seconds. The 180 m length of the observer's train is irrelevant to this specifically defined observation interval."
                },
                {
                    id: "d41t15",
                    text: "A train moving at 54 km/h passes a runner moving at 9 km/h along a parallel path in the same direction. The whole train takes 12 seconds to pass the runner. What is the train's length?",
                    options: [
                        { key: "a", text: "150 m" },
                        { key: "b", text: "180 m" },
                        { key: "c", text: "210 m" },
                        { key: "d", text: "120 m" }
                    ],
                    answer: "a",
                    explanation: "The relative speed is $54-9=45$ km/h, or 12.5 m/s. The length is therefore $12.5(12)=150$ m. Using the train's ground speed would wrongly treat the runner as stationary; adding speeds would describe a runner approaching the train."
                },
                {
                    id: "d41t16",
                    text: "A train 200 m long passes a cyclist travelling at 18 km/h along a parallel path in the opposite direction. The complete passage past the cyclist takes 8 seconds. What is the train's constant speed?",
                    options: [
                        { key: "a", text: "90 km/h" },
                        { key: "b", text: "108 km/h" },
                        { key: "c", text: "54 km/h" },
                        { key: "d", text: "72 km/h" }
                    ],
                    answer: "d",
                    explanation: "Relative speed is $200/8=25$ m/s, or 90 km/h. It is the sum of the train and cyclist speeds, so the train travels at $90-18=72$ km/h. The cyclist is a point observer here; no separate cyclist length is included."
                },
                {
                    id: "d41t17",
                    text: "At an unchanged speed, a train passes a walker moving at 6 km/h in its direction in 12 seconds, and another walker moving at 6 km/h in the opposite direction in 8 seconds. What is the train's length?",
                    options: [
                        { key: "a", text: "120 m" },
                        { key: "b", text: "80 m" },
                        { key: "c", text: "100 m" },
                        { key: "d", text: "96 m" }
                    ],
                    answer: "b",
                    explanation: "With train speed $v$ in km/h, equal lengths imply $12(v-6)=8(v+6)$. This gives $v=30$ km/h. Opposite-direction relative speed is then 36 km/h, or 10 m/s, and the length is $10(8)=80$ m. The conversion factor cancels in the first equation but is needed to obtain metres."
                },
                {
                    id: "d41t18",
                    text: "Two trains A and B approach on parallel tracks at constant speeds. A passenger seated in A sees the entire train B pass in 12 seconds. A passenger seated in B sees the entire train A pass in 9 seconds. What is the length ratio A:B?",
                    options: [
                        { key: "a", text: "4:3" },
                        { key: "b", text: "1:1" },
                        { key: "c", text: "2:3" },
                        { key: "d", text: "3:4" }
                    ],
                    answer: "d",
                    explanation: "Both passengers measure the same relative-speed magnitude. Their observation times are therefore proportional to the lengths of the trains passing them: A corresponds to 9 seconds and B to 12 seconds. Thus A:B is 9:12, or 3:4. The train containing the observer is not the length being timed."
                },
                {
                    id: "d41t19",
                    text: "The fronts of two approaching trains are initially 950 m apart along parallel tracks. Their lengths are 180 m and 270 m, and their constant speeds are 72 km/h and 54 km/h. How long from that initial instant until they have passed one another completely?",
                    options: [
                        { key: "a", text: "27.14 seconds" },
                        { key: "b", text: "12.86 seconds" },
                        { key: "c", text: "40 seconds" },
                        { key: "d", text: "50 seconds" }
                    ],
                    answer: "c",
                    explanation: "Relative speed is 35 m/s. Before full clearance, the trains must close the initial 950 m front-to-front gap and then move past their combined 450 m length. Total relative distance is 1,400 m, giving 40 seconds. Timing only the gap ends at the first meeting, not at complete separation."
                },
                {
                    id: "d41t20",
                    text: "A 240 m express at 90 km/h follows a 160 m train at 54 km/h on a parallel track in the same direction. Initially, the express's front is 400 m behind the slower train's rear. At constant speeds, how long until the express's rear clears the slower train's front?<svg class='q-fig' viewBox='0 0 330 145' width='330' height='145' role='img' aria-label='Express A, length 240 m, follows train B, length 160 m. Both move right. A travels at 90 km per hour, B at 54 km per hour. The gap from A front to B rear is 400 m.'><g fill='none' stroke='currentColor' stroke-width='1.7'><rect x='15' y='72' width='90' height='27'/><rect x='235' y='72' width='65' height='27'/><path d='M20 32H98m-7-5 7 5-7 5M237 32H310m-7-5 7 5-7 5M109 63H231M109 58V68M231 58V68'/></g><g fill='currentColor' font-family='sans-serif' font-size='14' text-anchor='middle'><text x='60' y='20'>90 km/h</text><text x='270' y='20'>54 km/h</text><text x='170' y='53'>400 m gap</text><text x='60' y='91'>A</text><text x='267' y='91'>B</text><text x='60' y='121'>240 m</text><text x='267' y='121'>160 m</text></g></svg>",
                    options: [
                        { key: "a", text: "80 seconds" },
                        { key: "b", text: "40 seconds" },
                        { key: "c", text: "56 seconds" },
                        { key: "d", text: "64 seconds" }
                    ],
                    answer: "a",
                    explanation: "The express gains at 10 m/s. It first closes the 400 m gap, then gains another $240+160=400$ m to pass completely. The required relative displacement is 800 m and the time is 80 seconds. Closing the gap alone takes 40 seconds and only begins the overlap."
                },
                {
                    id: "d41t21",
                    text: "Stations P and Q are 330 km apart. A train leaves P toward Q at 8:00 a.m. at 60 km/h. Another leaves Q toward P at 8:30 a.m. at 90 km/h. Both maintain these speeds. Treat the trains as points for the meeting time. When do they meet?",
                    options: [
                        { key: "a", text: "10:00 a.m." },
                        { key: "b", text: "10:12 a.m." },
                        { key: "c", text: "11:00 a.m." },
                        { key: "d", text: "10:30 a.m." }
                    ],
                    answer: "d",
                    explanation: "By 8:30 the first train has covered 30 km, leaving 300 km between them. From that time the closing speed is $60+90=150$ km/h, so meeting takes two further hours. They meet at 10:30, not two hours after the first train's earlier departure."
                },
                {
                    id: "d41t22",
                    text: "A local train's front leaves a station at 7:00 a.m. and travels continuously at 48 km/h. An express's front leaves the same station at 8:15 a.m., follows a parallel route in the same direction at 72 km/h, and makes no stop. When does its front draw level with the local train's front?",
                    options: [
                        { key: "a", text: "10:45 a.m." },
                        { key: "b", text: "9:45 a.m." },
                        { key: "c", text: "10:15 a.m." },
                        { key: "d", text: "11:00 a.m." }
                    ],
                    answer: "a",
                    explanation: "The local has a 1.25-hour start, giving a front-to-front lead of $48(1.25)=60$ km. The express closes this at 24 km/h and takes 2.5 hours after 8:15, reaching it at 10:45. Only the fronts are compared, so no train lengths are added for this catch-up event."
                },
                {
                    id: "d41t23",
                    text: "A train's average speed while moving is 80 km/h, but its average over a journey including stops is 64 km/h. On average, how many minutes of each hour of total elapsed journey time are spent stopped?",
                    options: [
                        { key: "a", text: "15 minutes" },
                        { key: "b", text: "10 minutes" },
                        { key: "c", text: "12 minutes" },
                        { key: "d", text: "16 minutes" }
                    ],
                    answer: "c",
                    explanation: "The moving-time fraction is $64/80=0.80$, since distance divided by moving speed gives moving time. Thus 20% of total elapsed time is spent stopped: $0.20(60)=12$ minutes per elapsed hour. Fifteen minutes would instead be the stop time associated with one full hour of moving time."
                },
                {
                    id: "d41t24",
                    text: "A train travels half of a journey's distance at 54 km/h and the other half at 90 km/h, with no stops. What is its average speed for the entire journey?",
                    options: [
                        { key: "a", text: "72 km/h" },
                        { key: "b", text: "67.5 km/h" },
                        { key: "c", text: "64.8 km/h" },
                        { key: "d", text: "70 km/h" }
                    ],
                    answer: "b",
                    explanation: "For equal distances, average speed is total distance divided by the sum of the two travel times. Taking each half as 270 km gives times 5 h and 3 h, so the average is $540/8=67.5$ km/h. The arithmetic mean, 72 km/h, applies to equal times rather than equal distances."
                },
                {
                    id: "d41t25",
                    text: "A train is scheduled to cover 180 km in 3 hours, including any stops. It covers the first 60 km at 40 km/h, then stops for 15 minutes. At what constant speed must it cover the remaining distance to arrive on schedule, with no further stops?",
                    options: [
                        { key: "a", text: "96 km/h" },
                        { key: "b", text: "80 km/h" },
                        { key: "c", text: "90 km/h" },
                        { key: "d", text: "120 km/h" }
                    ],
                    answer: "a",
                    explanation: "The first stage takes 1.5 hours and the stop adds 0.25 hour, leaving 1.25 hours of the three-hour allowance. The remaining distance is 120 km, so the required speed is $120/1.25=96$ km/h. Ignoring the stop would leave too much time and underestimate the necessary speed."
                },
                {
                    id: "d41t26",
                    text: "A 160 m train clears a 240 m platform in 20 seconds. By what percentage must its constant speed increase to clear the same platform in 16 seconds?",
                    options: [
                        { key: "a", text: "20%" },
                        { key: "b", text: "40%" },
                        { key: "c", text: "25%" },
                        { key: "d", text: "16%" }
                    ],
                    answer: "c",
                    explanation: "The complete-crossing distance remains 400 m. Speeds are therefore 20 m/s initially and 25 m/s finally. The increase is $5/20$ as a percentage, or 25%. A 20% reduction in time does not imply a 20% increase in speed because the percentage bases differ."
                },
                {
                    id: "d41t27",
                    text: "Two trains travel at equal constant speed magnitudes. Train A clears a pole in 12 seconds, while train B clears a pole in 18 seconds. If they approach on parallel tracks, how long does complete crossing take from their fronts meeting?",
                    options: [
                        { key: "a", text: "30 seconds" },
                        { key: "b", text: "6 seconds" },
                        { key: "c", text: "24 seconds" },
                        { key: "d", text: "15 seconds" }
                    ],
                    answer: "d",
                    explanation: "If their common speed is v, their lengths are 12v and 18v in consistent units. Their total length is 30v, and their opposing relative speed is 2v. Crossing time is therefore 15 seconds. The actual speed need not be known because it cancels."
                },
                {
                    id: "d41t28",
                    text: "A 300 m train A at 72 km/h and a 400 m train B at 54 km/h approach on parallel tracks. How far does A itself travel from the instant their fronts meet until the trains have crossed completely?",
                    options: [
                        { key: "a", text: "700 m" },
                        { key: "b", text: "400 m" },
                        { key: "c", text: "300 m" },
                        { key: "d", text: "1,000 m" }
                    ],
                    answer: "b",
                    explanation: "Relative speed is $20+15=35$ m/s, so the complete crossing of 700 m takes 20 seconds. During that interval A travels $20(20)=400$ m in the ground frame. The 700 m is the relative displacement, not the distance travelled by either train individually."
                },
                {
                    id: "d41t29",
                    text: "At one constant speed, a train clears a platform twice its own length in 36 seconds. It clears a different platform, 180 m long, in 30 seconds. What is the train's length?",
                    options: [
                        { key: "a", text: "90 m" },
                        { key: "b", text: "180 m" },
                        { key: "c", text: "120 m" },
                        { key: "d", text: "240 m" }
                    ],
                    answer: "c",
                    explanation: "Let the train length be L. The first complete-crossing distance is 3L, so speed is $3L/36=L/12$. The other observation gives $L+180=30L/12$. Thus $180=1.5L$, giving L = 120 m. The first platform is twice the train length, but total clearance distance is three times it."
                },
                {
                    id: "d41t30",
                    text: "The table gives three trains' lengths and the times they take to clear a pole at their respective constant speeds. If any selected pair approaches on parallel tracks at these speeds, which pair completes its crossing in the shortest time?<svg class='q-fig' viewBox='0 0 310 170' width='310' height='170' role='img' aria-label='Train A: length 150 m, pole time 10 s. Train B: length 240 m, pole time 12 s. Train C: length 210 m, pole time 14 s.'><g fill='none' stroke='currentColor' stroke-width='1.2'><path d='M8 8H302V160H8ZM8 46H302M8 84H302M8 122H302M82 8V160M190 8V160'/></g><g fill='currentColor' font-family='sans-serif' font-size='15' text-anchor='middle'><text x='45' y='33'>Train</text><text x='136' y='33'>Length (m)</text><text x='246' y='33'>Pole (s)</text><text x='45' y='71'>A</text><text x='136' y='71'>150</text><text x='246' y='71'>10</text><text x='45' y='109'>B</text><text x='136' y='109'>240</text><text x='246' y='109'>12</text><text x='45' y='147'>C</text><text x='136' y='147'>210</text><text x='246' y='147'>14</text></g></svg>",
                    options: [
                        { key: "a", text: "A and B" },
                        { key: "b", text: "A and C" },
                        { key: "c", text: "B and C" },
                        { key: "d", text: "All three pairings take equal time." }
                    ],
                    answer: "a",
                    explanation: "The speeds of A, B and C are 15, 20 and 15 m/s. Opposite-direction crossing times are $390/35$ for A-B, $360/30=12$ for A-C, and $450/35$ for B-C. A-B takes about 11.14 seconds, the least. The shortest total length alone is not sufficient because the relative speeds also differ."
                }
            ]
        },
        {
            id: "verbal41",
            name: "Verbal Reasoning",
            subject: "MAT",
            accent: "cyan",
            blurb: "Five questions on word codes, letter operations, ranks, relationships and letter series.",
            questions: [
                {
                    id: "d41v31",
                    text: "Each word has one distinct fixed code, but order may change. 'pa ne li' means 'bright small room'; 'ko li sa' means 'room beside garden'; 'ne tu sa' means 'small shaded garden'; and 'ko tu mi' means 'beside shaded school'. What are the codes for bright, shaded and school in that order?",
                    options: [
                        { key: "a", text: "ne tu mi" },
                        { key: "b", text: "pa ko sa" },
                        { key: "c", text: "mi tu pa" },
                        { key: "d", text: "pa tu mi" }
                    ],
                    answer: "d",
                    explanation: "Comparing shared words identifies li as room, ne as small and sa as garden. The remaining code in the first statement is pa for bright. Ko is beside, tu is shaded, and the last statement leaves mi for school. Their requested order is pa tu mi, not the order from an arbitrary sentence."
                },
                {
                    id: "d41v32",
                    text: "A code reverses a six-letter word, then moves letters at positions 1, 3 and 5 one place forward and positions 2, 4 and 6 two places backward in the alphabet, wrapping when necessary. Thus GARDEN becomes OCEPBE. How is MONKEY coded?",
                    options: [
                        { key: "a", text: "ZCMLPK" },
                        { key: "b", text: "ZCLLPK" },
                        { key: "c", text: "XGJPNO" },
                        { key: "d", text: "KPLLCZ" }
                    ],
                    answer: "b",
                    explanation: "Reverse MONKEY to get YEKNOM. Applying the alternating shifts gives Y to Z, E to C, K to L, N to L, O to P and M to K. This produces ZCLLPK. The shifts apply to positions in the reversed word; applying them first would generally change the answer."
                },
                {
                    id: "d41v33",
                    text: "Mina is 18th from the left and Raju 23rd from the right in a row. After they exchange places, Mina is 31st from the left. Before the exchange, six people stood strictly between Mina and Sita, with Sita to Mina's right. Sita does not move. What is Sita's rank from the right?",
                    options: [
                        { key: "a", text: "28th" },
                        { key: "b", text: "29th" },
                        { key: "c", text: "30th" },
                        { key: "d", text: "31st" }
                    ],
                    answer: "b",
                    explanation: "Raju's original left rank is 31, so the row contains $31+23-1=53$ people. Six strictly between Mina and Sita means Sita is seven positions to the right of Mina's original position: 25th from the left. Her right rank is $53-25+1=29$. The exchange does not move Sita."
                },
                {
                    id: "d41v34",
                    text: "Let A + B mean A is the full brother of B; A - B mean A is the mother of B; and A &times; B mean A is the father of B. In P - Q + R &times; S, each relation applies only to its two adjacent names. How is Q related to S?",
                    options: [
                        { key: "a", text: "Maternal uncle" },
                        { key: "b", text: "Father" },
                        { key: "c", text: "Brother" },
                        { key: "d", text: "Paternal uncle" }
                    ],
                    answer: "d",
                    explanation: "Q + R says Q is R's brother, and R times S says R is S's father. Q is therefore the brother of S's father, a paternal uncle. P being Q's mother adds family context but does not turn Q into a maternal relative of S. The expression is a chain of relations, not arithmetic."
                },
                {
                    id: "d41v35",
                    text: "Which pair continues the letter series BX, EV, IT, NR, ... ?",
                    options: [
                        { key: "a", text: "TP" },
                        { key: "b", text: "SP" },
                        { key: "c", text: "TQ" },
                        { key: "d", text: "UO" }
                    ],
                    answer: "a",
                    explanation: "First-letter positions are 2, 5, 9 and 14, with increases 3, 4 and 5; the next increase is 6, giving 20, or T. Second letters move backward by two positions: X, V, T, R, P. Combining the independent sequences gives TP."
                }
            ]
        },
        {
            id: "numerical41",
            name: "Numerical Reasoning - Mixed",
            subject: "MAT",
            accent: "blue",
            blurb: "Five non-train problems on ages, discounts, averages, work and mixture replacement.",
            questions: [
                {
                    id: "d41n36",
                    text: "Four years ago, the ages of two people were in the ratio 5:2. Eight years from now, they will be in the ratio 2:1. What is the younger person's present age?",
                    options: [
                        { key: "a", text: "24 years" },
                        { key: "b", text: "32 years" },
                        { key: "c", text: "28 years" },
                        { key: "d", text: "36 years" }
                    ],
                    answer: "c",
                    explanation: "Let the ages four years ago be 5x and 2x. The future comparison is 12 years after that point, so $5x+12=2(2x+12)$, giving x = 12. The younger person is now $2(12)+4=28$ years old. Adding only eight years to the past ages would mix two different time references."
                },
                {
                    id: "d41n37",
                    text: "A seller gives successive discounts of 20% and 10% on a marked price, yet earns an 8% profit on cost price. By what percentage was the marked price above cost price?",
                    options: [
                        { key: "a", text: "50%" },
                        { key: "b", text: "38%" },
                        { key: "c", text: "40%" },
                        { key: "d", text: "60%" }
                    ],
                    answer: "a",
                    explanation: "The selling price is $0.80(0.90)=0.72$ of the marked price and 1.08 times cost. Thus marked price divided by cost is $1.08/0.72=1.50$, a 50% markup. Adding the two discounts as 30% would use an incorrect common base."
                },
                {
                    id: "d41n38",
                    text: "The average of eight recorded numbers was calculated as 25. A value of 42 had mistakenly been recorded as 24. After correcting that error, the actual numbers 31 and 43 are removed. What is the average of the six numbers remaining?",
                    options: [
                        { key: "a", text: "21" },
                        { key: "b", text: "25" },
                        { key: "c", text: "24" },
                        { key: "d", text: "27.25" }
                    ],
                    answer: "c",
                    explanation: "The recorded total is $8(25)=200$. Correcting 24 to 42 adds 18, giving 218. Removing 31 and 43 leaves $218-74=144$, whose mean across six numbers is 24. The value 27.25 is the corrected eight-number average before the removals."
                },
                {
                    id: "d41n39",
                    text: "A can complete a job in 12 days and B in 18 days. They work together at constant additive rates for 3 days, then A leaves. How many additional days does B alone need to finish?",
                    options: [
                        { key: "a", text: "7.2 days" },
                        { key: "b", text: "10.5 days" },
                        { key: "c", text: "13.5 days" },
                        { key: "d", text: "9 days" }
                    ],
                    answer: "b",
                    explanation: "Together they complete $3(1/12+1/18)=5/12$ of the job. The remaining 7/12 takes B $(7/12)(18)=10.5$ additional days. The total project duration would be 13.5 days, but the question asks for the time after A leaves."
                },
                {
                    id: "d41n40",
                    text: "A container holds 28 L of milk and water in the ratio 5:2. Remove 7 L of the well-mixed liquid and replace it with 7 L of water. Then add 3 L of pure milk. What is the final milk-to-water ratio?",
                    options: [
                        { key: "a", text: "15:13" },
                        { key: "b", text: "18:10" },
                        { key: "c", text: "20:11" },
                        { key: "d", text: "18:13" }
                    ],
                    answer: "d",
                    explanation: "Initially milk and water volumes are 20 L and 8 L. Removing one quarter of the mixture leaves 15 L milk and 6 L water. Replacement raises the water to 13 L; the later milk addition raises milk to 18 L. The final ratio is 18:13 and final total volume is 31 L."
                }
            ]
        },
        {
            id: "logical41",
            name: "Logical Sequencing",
            subject: "MAT",
            accent: "cyan",
            blurb: "Five questions on ordered constraints, syllogisms, assumptions, truth conditions and set membership.",
            questions: [
                {
                    id: "d41l41",
                    text: "Six presentations A, B, C, D, E and F occupy six consecutive slots. F is last. Exactly two presentations are between A and E, with A earlier. C occurs before A, and B is immediately before D. Which presentation is fourth?",
                    options: [
                        { key: "a", text: "A" },
                        { key: "b", text: "B" },
                        { key: "c", text: "D" },
                        { key: "d", text: "E" }
                    ],
                    answer: "c",
                    explanation: "E is three slots after A. A cannot be first because C precedes it, and A cannot be third because that would put E in F's final slot. Therefore A is second, E fifth and C first. The remaining third and fourth slots are B and D, so D is fourth."
                },
                {
                    id: "d41l42",
                    text: "Use only these statements: All writers are readers. No reader is inactive. Some editors are writers. Conclusions: I. Some editors are not inactive. II. No inactive person is a writer. III. All readers are writers. Which conclusions follow necessarily?",
                    options: [
                        { key: "a", text: "Only I and II" },
                        { key: "b", text: "Only I and III" },
                        { key: "c", text: "Only II and III" },
                        { key: "d", text: "All three" }
                    ],
                    answer: "a",
                    explanation: "The editors known to be writers are readers and therefore not inactive, proving I. Writers belong entirely to readers, which exclude inactive people, proving II. The inclusion of writers within readers cannot be reversed, so III need not hold. The premises allow readers who are not writers."
                },
                {
                    id: "d41l43",
                    text: "A library plans to replace its only physical booking desk with online booking, while promising that every registered member will still be able to book books. Which assumption is necessary for that particular promise?",
                    options: [
                        { key: "a", text: "Every member prefers a screen to a paper form." },
                        { key: "b", text: "Online booking will increase every member's reading speed." },
                        { key: "c", text: "Every book will always be available immediately." },
                        { key: "d", text: "Every member can access the online booking process, directly or through an available assistance arrangement." }
                    ],
                    answer: "d",
                    explanation: "If a member has neither direct nor assisted access, removing the only other booking route defeats the promise of access for every member. That makes the access assumption necessary. Preference, reading speed and guaranteed stock availability are not required merely to be able to submit a booking."
                },
                {
                    id: "d41l44",
                    text: "Exactly one of boxes A, B, C and D holds a token. A's label says, 'The token is not in B.' B's label says, 'The token is in C or D.' C's label says, 'The token is in A.' D's label says, 'The token is not in D.' Exactly two labels are true. Where is the token?",
                    options: [
                        { key: "a", text: "A" },
                        { key: "b", text: "D" },
                        { key: "c", text: "B" },
                        { key: "d", text: "C" }
                    ],
                    answer: "b",
                    explanation: "Test all possible locations. A gives three true labels; B gives only one; C gives three. With the token in D, A and B are true while C and D are false, giving exactly two. Thus D is the unique valid location, even though its own label is false."
                },
                {
                    id: "d41l45",
                    text: "Among 100 applicants, 60 passed test A, 50 passed B and 40 passed C. Twenty-five passed both A and B, 20 both A and C, and 15 both B and C; each pair count includes those who passed all three. Eight passed all three tests. How many passed exactly one test?",
                    options: [
                        { key: "a", text: "98" },
                        { key: "b", text: "36" },
                        { key: "c", text: "46" },
                        { key: "d", text: "54" }
                    ],
                    answer: "d",
                    explanation: "Only-A count is $60-25-20+8=23$. Only-B is $50-25-15+8=18$, and only-C is $40-20-15+8=13$. Adding gives 54. The all-three group must be added back in each calculation because it was subtracted twice; the union of all three tests is not the requested exactly-one count."
                }
            ]
        },
        {
            id: "spatial41",
            name: "Spatial and Abstract Reasoning",
            subject: "MAT",
            accent: "cyan",
            blurb: "Five questions on cube orientation, paper folding, transformations, painted cubes and rectangle counting.",
            questions: [
                {
                    id: "d41s46",
                    text: "Fold the net into a cube with the numbers outside. Orient it with 4 on top and 3 facing you. Which number is on the right face?<svg class='q-fig' viewBox='0 0 260 195' width='260' height='195' role='img' aria-label='Cube net: horizontal row 3, 1, 6, 4; face 2 directly above 1; face 5 directly below 1'><g fill='none' stroke='currentColor' stroke-width='1.8'><path d='M30 72H230V122H30ZM80 72V122M130 72V122M180 72V122M80 72V22H130V72M80 122V172H130V122'/></g><g fill='currentColor' font-family='sans-serif' font-size='22' text-anchor='middle'><text x='55' y='105'>3</text><text x='105' y='105'>1</text><text x='155' y='105'>6</text><text x='205' y='105'>4</text><text x='105' y='55'>2</text><text x='105' y='155'>5</text></g></svg>",
                    options: [
                        { key: "a", text: "5" },
                        { key: "b", text: "2" },
                        { key: "c", text: "6" },
                        { key: "d", text: "1" }
                    ],
                    answer: "b",
                    explanation: "With 1 initially in front, 3 is left, 6 right, 2 top, 5 bottom and 4 back. Turn to face 3: 4 is now left and 2 remains top. Keeping 3 in front, rotate until 4 becomes top; 2 then moves to the right. Opposite pairs alone do not determine which adjacent face is right."
                },
                {
                    id: "d41s47",
                    text: "A square sheet has side 20 cm and lower-left corner (0, 0), with x rightwards and y upwards. Fold the left half onto the right along x = 10, then the bottom half onto the top along y = 10. Punch a tiny hole through all layers at (13, 18), using the original coordinates. What is the greatest distance between two hole centres after unfolding?",
                    options: [
                        { key: "a", text: "$2\\sqrt{29}$ cm" },
                        { key: "b", text: "$2\\sqrt{65}$ cm" },
                        { key: "c", text: "$2\\sqrt{73}$ cm" },
                        { key: "d", text: "$16$ cm" }
                    ],
                    answer: "c",
                    explanation: "Unfolding gives horizontal coordinates 13 and 7, and vertical coordinates 18 and 2. The four holes are the corners of a rectangle 6 cm by 16 cm. The largest separation is its diagonal, $\\sqrt{6^2+16^2}=2\\sqrt{73}$ cm. Distances from a hole to a fold are not the full separations between reflected holes."
                },
                {
                    id: "d41s48",
                    text: "The card has an upward arrow and a dot near its lower-right corner. Rotate the entire card 180 degrees, reflect it top-to-bottom across a horizontal line, then rotate it 90 degrees clockwise. What are the final arrow direction and dot position?<svg class='q-fig' viewBox='0 0 170 155' width='170' height='155' role='img' aria-label='Square card with an upward arrow and a dot near its lower-right corner'><g fill='none' stroke='currentColor' stroke-width='2'><path d='M30 25H130V125H30Z'/><path d='M80 108V44M66 58L80 44L94 58' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/></g><circle cx='115' cy='110' r='5' fill='currentColor'/></svg>",
                    options: [
                        { key: "a", text: "Arrow right; dot upper left" },
                        { key: "b", text: "Arrow right; dot lower right" },
                        { key: "c", text: "Arrow left; dot upper left" },
                        { key: "d", text: "Arrow down; dot upper right" }
                    ],
                    answer: "a",
                    explanation: "Track both features separately. The arrow goes up to down, then up after reflection, then right. The dot goes lower right to upper left, then lower left, then upper left. Matching only the arrow is insufficient; reflecting top-to-bottom changes the vertical component, not the horizontal component."
                },
                {
                    id: "d41s49",
                    text: "Exactly three mutually adjacent faces of a large cube are painted; its other three faces are unpainted. The cube is then divided into 125 equal small cubes in a regular grid. How many small cubes have exactly two painted faces?",
                    options: [
                        { key: "a", text: "9" },
                        { key: "b", text: "12" },
                        { key: "c", text: "15" },
                        { key: "d", text: "36" }
                    ],
                    answer: "b",
                    explanation: "There are five cubes per edge. The three painted faces meet along three edges sharing one common corner. Along each such edge, four cubes have exactly two painted faces; the common corner has three and is excluded. The far endpoint still has only two because its third face is unpainted. Total count is $3(4)=12$."
                },
                {
                    id: "d41s50",
                    text: "Count every rectangle whose sides lie entirely on drawn segments, including squares. The outer rectangle has three columns, a full-width middle line, an extra upper line across the left two columns, and an extra lower line across the right two columns.<svg class='q-fig' viewBox='0 0 300 210' width='300' height='210' role='img' aria-label='Outer rectangle divided into three columns by two full vertical lines. Full-width horizontal lines at top, middle and bottom. An additional upper horizontal line spans the left two columns, and an additional lower horizontal line spans the right two columns.'><g fill='none' stroke='currentColor' stroke-width='2'><path d='M30 20H270V180H30ZM110 20V180M190 20V180M30 100H270M30 60H190M110 140H270'/></g></svg>",
                    options: [
                        { key: "a", text: "31" },
                        { key: "b", text: "34" },
                        { key: "c", text: "37" },
                        { key: "d", text: "40" }
                    ],
                    answer: "c",
                    explanation: "Count by pairs of vertical boundaries. The left, middle and right single columns give 6, 10 and 6 rectangles. The left-two and right-two column spans give 6 each. Across all three columns, only top, middle and bottom are full-width, giving 3 rectangles. Total is $6+10+6+6+6+3=37$. Partial lines cannot serve as full edges across a missing segment."
                }
            ]
        }
    ]
};

const DAY41_SYLLABUS = [{ subject: "MAT", accent: "cyan", topics: [
    { topic: "Verbal Reasoning", subs: [
        { name: "Verbal Reasoning: Codes, Ranks and Relationships", ids: ["d41v31", "d41v32", "d41v33", "d41v34", "d41v35"] }
    ] },
    { topic: "Numerical Reasoning", subs: [
        { name: "Numerical Reasoning: Trains, Poles, Platforms and Tunnels", ids: ["d41t1", "d41t2", "d41t3", "d41t4", "d41t5", "d41t29"] },
        { name: "Numerical Reasoning: Opposing Trains and Overtaking", ids: ["d41t6", "d41t7", "d41t8", "d41t9", "d41t10", "d41t11", "d41t12", "d41t19", "d41t20", "d41t27", "d41t28"] },
        { name: "Numerical Reasoning: Trains Passing Moving Observers", ids: ["d41t13", "d41t14", "d41t15", "d41t16", "d41t17", "d41t18"] },
        { name: "Numerical Reasoning: Train Schedules, Stops and Data", ids: ["d41t21", "d41t22", "d41t23", "d41t24", "d41t25", "d41t26", "d41t30"] },
        { name: "Numerical Reasoning: Ages, Percentages, Averages and Work", ids: ["d41n36", "d41n37", "d41n38", "d41n39", "d41n40"] }
    ] },
    { topic: "Logical Sequencing", subs: [
        { name: "Logical Reasoning: Constraints and Deductions", ids: ["d41l41", "d41l42", "d41l43", "d41l44", "d41l45"] }
    ] },
    { topic: "Spatial Relation / Abstract Reasoning", subs: [
        { name: "Spatial and Abstract Reasoning", ids: ["d41s46", "d41s47", "d41s48", "d41s49", "d41s50"] }
    ] }
] }];
DAY41.syllabus = DAY41_SYLLABUS;