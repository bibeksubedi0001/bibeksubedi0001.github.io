const DAY37 = {
    day: 37,
    title: "Day 37",
    subtitle: "Proton CEE Mock - Day Shift Set B",
    durationMinutes: 180,
    negativeMarking: 0.25,
    chapters: [
        {
            id: "physics37",
            name: "Physics",
            subject: "Physics",
            accent: "blue",
            blurb: "Mechanics, thermal physics, waves, optics, electricity and modern physics.",
            questions: [
                {
                    id: "d37p1",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 1 },
                    text: "The momentum of a non-relativistic body of constant mass becomes three times its initial value. By what percentage does its kinetic energy increase?",
                    options: [
                        { key: "a", text: "200%" },
                        { key: "b", text: "300%" },
                        { key: "c", text: "800%" },
                        { key: "d", text: "900%" }
                    ],
                    answer: "c",
                    explanation: "For fixed mass, $K=p^2/(2m)$. Tripling momentum makes the final kinetic energy nine times the original. The increase is therefore $9K-K=8K$, or 800%. The final value is 900% of the initial value, which is different from the percentage increase."
                },
                {
                    id: "d37p2",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 2 },
                    text: "A boat moves at 10 km/h relative to still water. It crosses a river 2 km wide along the shortest path in 15 minutes. What is the speed of the uniform river current?",
                    options: [
                        { key: "a", text: "6 km/h" },
                        { key: "b", text: "8 km/h" },
                        { key: "c", text: "4 km/h" },
                        { key: "d", text: "2 km/h" }
                    ],
                    answer: "a",
                    explanation: "The shortest path is perpendicular to the banks, so the boat's upstream component cancels the current. Its cross-river component is $2/0.25=8$ km/h. The components of its 10 km/h velocity satisfy $u^2+8^2=10^2$, giving a current speed of 6 km/h."
                },
                {
                    id: "d37p3",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 3 },
                    text: "A ball is projected from ground level at $20\\sqrt{2}$ m/s and $45^\\circ$ above the horizontal. A fielder is initially 120 m away along the direction of the shot and starts running as the ball is hit. At what constant speed must the fielder run towards the batter to reach the landing point when the ball lands? Use $g=10$ m/s$^2$ and neglect air resistance.",
                    options: [
                        { key: "a", text: "5 m/s" },
                        { key: "b", text: "8 m/s" },
                        { key: "c", text: "12 m/s" },
                        { key: "d", text: "10 m/s" }
                    ],
                    answer: "d",
                    explanation: "Both initial velocity components are 20 m/s. Flight time is $2(20)/10=4$ s and range is $20(4)=80$ m. The fielder must cover $120-80=40$ m towards the batter in 4 s, requiring 10 m/s. The landing level and the start time are specified to remove timing ambiguity."
                },
                {
                    id: "d37p4",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 4 },
                    text: "A person of mass 60 kg stands in a lift accelerating upwards at 2 m/s$^2$. What normal reaction does the floor exert on the person? Take $g=10$ m/s$^2$.",
                    options: [
                        { key: "a", text: "480 N" },
                        { key: "b", text: "720 N" },
                        { key: "c", text: "600 N" },
                        { key: "d", text: "120 N" }
                    ],
                    answer: "b",
                    explanation: "Taking upwards as positive, Newton's second law gives $N-mg=ma$. Thus $N=m(g+a)=60(10+2)=720$ N. Upward acceleration raises the apparent weight above the ordinary weight of 600 N; the direction of velocity alone would not determine the reading."
                },
                {
                    id: "d37p5",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 5 },
                    text: "A car of constant mass starts from rest. A constant net power $P$ is supplied to increase its kinetic energy, with resistive losses neglected. How does its speed depend on elapsed time $t$?",
                    options: [
                        { key: "a", text: "$v\\propto t$" },
                        { key: "b", text: "$v\\propto t^2$" },
                        { key: "c", text: "$v\\propto t^{1/2}$" },
                        { key: "d", text: "$v\\propto t^{-1/2}$" }
                    ],
                    answer: "c",
                    explanation: "Constant net power supplies energy $Pt$. Starting from rest gives $mv^2/2=Pt$, so $v=\\sqrt{2Pt/m}$ and speed is proportional to the square root of time. Constant power is not constant force: the driving force in this idealized model varies as $P/v$."
                },
                {
                    id: "d37p6",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 6 },
                    text: "A particle performs simple harmonic motion of amplitude $A$. When its speed is half its maximum speed, what is the magnitude of its displacement from the mean position?",
                    options: [
                        { key: "a", text: "$A/2$" },
                        { key: "b", text: "$A/\\sqrt{2}$" },
                        { key: "c", text: "$A/\\sqrt{3}$" },
                        { key: "d", text: "$\\sqrt{3}A/2$" }
                    ],
                    answer: "d",
                    explanation: "In SHM, $v^2=\\omega^2(A^2-x^2)$ and $v_{\\max}=\\omega A$. Substituting $v=v_{\\max}/2$ gives $A^2/4=A^2-x^2$. Hence $x^2=3A^2/4$ and $|x|=\\sqrt{3}A/2$. Either side of the mean position is possible."
                },
                {
                    id: "d37p7",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 7 },
                    text: "A particle is projected radially upwards from Earth's surface at speed $\\sqrt{gR}$, where $R$ is Earth's radius and $g$ is surface gravitational acceleration. Neglect air resistance and Earth's rotation. What maximum height above the surface does it reach?",
                    options: [
                        { key: "a", text: "$R$" },
                        { key: "b", text: "$R/2$" },
                        { key: "c", text: "$2R$" },
                        { key: "d", text: "$R/4$" }
                    ],
                    answer: "a",
                    explanation: "Gravity varies with distance, so a constant-$g$ trajectory formula is unsuitable here. With $GM=gR^2$, energy conservation gives $gR/2=gR^2(1/R-1/(R+h))$. Therefore $R+h=2R$ and the height is $h=R$. The final distance from Earth's centre is 2R."
                },
                {
                    id: "d37p8",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 8 },
                    text: "A wire obeying Hooke's law has Young's modulus $Y$ and dimensionless longitudinal strain $s$. What elastic strain energy is stored per unit volume?",
                    options: [
                        { key: "a", text: "$Ys^2$" },
                        { key: "b", text: "$Ys^2/2$" },
                        { key: "c", text: "$s^2/(2Y)$" },
                        { key: "d", text: "$Y/(2s^2)$" }
                    ],
                    answer: "b",
                    explanation: "Strain energy density is half the product of stress and strain. Since stress is $Ys$, the energy density is $(Ys)s/2=Ys^2/2$. If the symbol represented stress rather than strain, the expression would instead be stress squared divided by $2Y$."
                },
                {
                    id: "d37p9",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 9 },
                    text: "A circular disc rolls without slipping along a straight horizontal track. What kind of motion does its centre of mass execute relative to the ground?",
                    options: [
                        { key: "a", text: "Circular motion about the contact point" },
                        { key: "b", text: "Oscillation about a fixed equilibrium point" },
                        { key: "c", text: "Rotation about the disc's central axis" },
                        { key: "d", text: "Translation along a straight horizontal line" }
                    ],
                    answer: "d",
                    explanation: "Rolling combines translation of the centre of mass with rotation of the disc about that centre. The centre itself stays at one radius above the track and moves along a straight line. Points on the rim follow cycloidal paths relative to the ground, but the centre does not."
                },
                {
                    id: "d37p10",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 10 },
                    text: "A sphere of volume $V$ moving at speed $v$ through a viscous liquid experiences Stokes drag $F$. A sphere of volume $8V$ is maintained at the same speed in the same liquid. Assuming creeping flow in both cases, what is its drag?",
                    options: [
                        { key: "a", text: "$2F$" },
                        { key: "b", text: "$4F$" },
                        { key: "c", text: "$8F$" },
                        { key: "d", text: "$F/2$" }
                    ],
                    answer: "a",
                    explanation: "Stokes drag is $6\\pi\\eta rv$. At fixed viscosity and speed it scales with radius, not volume. Multiplying volume by eight doubles radius, so the drag becomes $2F$. Equal speeds are imposed here; freely falling larger spheres generally have different terminal speeds."
                },
                {
                    id: "d37p11",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 11 },
                    text: "What makes idealized constant-volume gas thermometry suitable for determining thermodynamic temperature on a primary basis?",
                    options: [
                        { key: "a", text: "Every real gas obeys the ideal-gas law at any pressure" },
                        { key: "b", text: "A gas thermometer never needs pressure or volume corrections" },
                        { key: "c", text: "The zero-density pressure-temperature relation is gas independent" },
                        { key: "d", text: "Any sealed gas produces an intrinsically digital temperature reading" }
                    ],
                    answer: "c",
                    explanation: "At constant volume and fixed amount, the ideal-gas limit gives pressure proportional to thermodynamic temperature. Extrapolating real-gas measurements towards zero density removes gas-dependent deviations. Practical gas thermometers still require careful corrections; primary does not mean correction-free or capable of every temperature."
                },
                {
                    id: "d37p12",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 12 },
                    text: "A steel wire, 8 m long and 4 mm in diameter, is held at fixed length between rigid supports. It is cooled by 10 K without becoming slack. Find the increase in tension if $Y=2\\times10^{11}$ N/m$^2$ and $\\alpha=12\\times10^{-6}$ K$^{-1}$.",
                    options: [
                        { key: "a", text: "$24\\pi$ N" },
                        { key: "b", text: "$96\\pi$ N" },
                        { key: "c", text: "$48\\pi$ N" },
                        { key: "d", text: "$192\\pi$ N" }
                    ],
                    answer: "b",
                    explanation: "Preventing thermal contraction produces an additional tensile stress $Y\\alpha\\Delta T=2.4\\times10^7$ N/m$^2$. The cross-sectional area is $\\pi(0.002)^2=4\\pi\\times10^{-6}$ m$^2$. Thus the tension increases by stress times area, $96\\pi$ N, approximately 302 N. Wire length cancels in the restrained-strain calculation."
                },
                {
                    id: "d37p13",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 13 },
                    text: "Pure ice melts at constant pressure and temperature while absorbing heat. If one formally defines an effective heat capacity during this phase change as $\\delta Q/dT$, how is it represented?",
                    options: [
                        { key: "a", text: "Formally infinite" },
                        { key: "b", text: "Exactly zero" },
                        { key: "c", text: "One joule per kelvin" },
                        { key: "d", text: "Equal to latent heat" }
                    ],
                    answer: "a",
                    explanation: "Heat is absorbed as latent heat while temperature remains unchanged. Consequently the phase-change ratio of heat input to temperature rise is formally infinite, rather than an ordinary finite heat capacity. This does not mean that the specific heat of solid ice away from melting is infinite."
                },
                {
                    id: "d37p14",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 14 },
                    text: "A body cools from 50.0 to 49.9 $^\\circ$C in 5 s in surroundings at 30 $^\\circ$C. Under Newton's law of cooling, approximately how long will the same body take to cool from 40.0 to 39.9 $^\\circ$C?",
                    options: [
                        { key: "a", text: "5 s" },
                        { key: "b", text: "15 s" },
                        { key: "c", text: "20 s" },
                        { key: "d", text: "10 s" }
                    ],
                    answer: "d",
                    explanation: "For a small temperature drop, cooling rate is proportional to excess temperature above the surroundings. Near 50 $^\\circ$C that excess is about 20 K; near 40 $^\\circ$C it is about 10 K. The rate is approximately halved, so the same 0.1 K drop takes about twice as long: 10 s."
                },
                {
                    id: "d37p15",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 15 },
                    text: "The rms speed of molecules of an ideal gas is $v$ at 120 K. What is the rms speed of the same gas at 480 K?",
                    options: [
                        { key: "a", text: "$4v$" },
                        { key: "b", text: "$v/2$" },
                        { key: "c", text: "$2v$" },
                        { key: "d", text: "$v/4$" }
                    ],
                    answer: "c",
                    explanation: "For a fixed molecular mass, $v_{\\rm rms}=\\sqrt{3kT/m}$, so rms speed scales as the square root of absolute temperature. The temperature ratio is $480/120=4$, giving a speed ratio of $\\sqrt{4}=2$. Temperatures must be in kelvin for this proportionality."
                },
                {
                    id: "d37p16",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 16 },
                    text: "An ideal gas follows the closed cycle A to B to C to A shown below. A and B have volume $V_1$; their pressures are $P_1$ and $4P_1$. C is at $(3V_1,P_1)$, and BC is straight. What is the net work done <b>by the gas</b> in one cycle?<svg class='q-fig' viewBox='0 0 320 220' width='320' height='220' role='img' aria-label='Pressure-volume diagram: A at V1 and P1, B at V1 and 4P1, C at 3V1 and P1; arrows run A to B to C to A'><g fill='none' stroke='currentColor' stroke-width='1.8'><path d='M45 185V20m-4 8 4-8 4 8M45 185H294m-8-4 8 4-8 4'/><path d='M95 155V45L245 155Z'/><path d='M45 45H95M45 155H95M95 155V185M245 155V185' stroke-dasharray='4 4'/><path d='M95 111V86m-4 7 4-7 4 7M159 92l22 16m-9-1 9 1-4-8M180 155h-30m7-4-7 4 7 4'/></g><g fill='currentColor' font-family='sans-serif' font-size='15'><text x='23' y='19'>P</text><text x='299' y='190'>V</text><text x='11' y='50'>4P1</text><text x='20' y='161'>P1</text><text x='85' y='207'>V1</text><text x='231' y='207'>3V1</text><text x='79' y='146'>A</text><text x='101' y='40'>B</text><text x='253' y='157'>C</text></g></svg>",
                    options: [
                        { key: "a", text: "$6P_1V_1$" },
                        { key: "b", text: "$3P_1V_1$" },
                        { key: "c", text: "$-3P_1V_1$" },
                        { key: "d", text: "$12P_1V_1$" }
                    ],
                    answer: "b",
                    explanation: "The net work is the signed area enclosed by the pressure-volume cycle. Its base is $2V_1$ and height is $3P_1$, so the triangular area is $3P_1V_1$. Clockwise traversal makes work by the gas positive. The source sketch has inconsistent arrows; the redrawn C-to-A return closes the stated cycle unambiguously."
                },
                {
                    id: "d37p17",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 17 },
                    text: "Which statement about a reversible thermodynamic process is necessarily correct?",
                    options: [
                        { key: "a", text: "The entropy of the system cannot change during heat transfer" },
                        { key: "b", text: "The work done by the system must be zero on every path" },
                        { key: "c", text: "The temperature of the system must remain constant throughout" },
                        { key: "d", text: "The total entropy of the system and surroundings is unchanged" }
                    ],
                    answer: "d",
                    explanation: "A reversible process generates no entropy, so the combined entropy change of system and surroundings is zero. The system's own entropy may increase or decrease through reversible heat transfer, with an equal and opposite surroundings change. Reversible processes can involve work and temperature changes."
                },
                {
                    id: "d37p18",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 18 },
                    text: "A concave mirror of focal-length magnitude $f$ forms an inverted real image three times the object's height. What is the object's distance from the mirror?",
                    options: [
                        { key: "a", text: "$4f/3$" },
                        { key: "b", text: "$3f/4$" },
                        { key: "c", text: "$2f/3$" },
                        { key: "d", text: "$3f/2$" }
                    ],
                    answer: "a",
                    explanation: "Using positive distance magnitudes for this real-object, real-image arrangement, magnification magnitude gives $v=3u$. The mirror equation is $1/f=1/u+1/v=4/(3u)$, so $u=4f/3$. An upright virtual shaving image would require a different relation; the real image is explicitly specified here."
                },
                {
                    id: "d37p19",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 19 },
                    text: "For a thin prism in air, with small refracting angle $A$, what determines its angular dispersion between violet and red light?",
                    options: [
                        { key: "a", text: "The refracting angle, but not the refractive indices" },
                        { key: "b", text: "The refractive indices, but not the refracting angle" },
                        { key: "c", text: "Both the refracting angle and the material's dispersion" },
                        { key: "d", text: "Neither the refracting angle nor the material's dispersion" }
                    ],
                    answer: "c",
                    explanation: "For a thin prism, deviation is approximately $(\\mu-1)A$. Thus angular dispersion is $(\\mu_v-\\mu_r)A$, which depends on both material dispersion and prism angle. This distinguishes angular dispersion from dispersive power, the ratio of angular dispersion to mean deviation, which is approximately material dependent alone."
                },
                {
                    id: "d37p20",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 20 },
                    text: "A thin, symmetric equiconvex lens of focal length $f$ is divided by a plane perpendicular to its principal axis through its centre and by a second plane containing that axis. Ignoring edge effects, what is the focal length of each of the four pieces?",
                    options: [
                        { key: "a", text: "$f/2$" },
                        { key: "b", text: "$2f$" },
                        { key: "c", text: "$f$" },
                        { key: "d", text: "$4f$" }
                    ],
                    answer: "b",
                    explanation: "The transverse cut makes two plano-convex lenses. Each has one curved refracting surface instead of two equal curved surfaces, so its power is halved and focal length is doubled. The cut containing the axis only reduces aperture, not power. Stating the cutting planes resolves the source's ambiguous horizontal/vertical wording."
                },
                {
                    id: "d37p21",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 21 },
                    text: "A prism has refractive index $\\sqrt{2}$ and refracting angle $30^\\circ$. One refracting face is silvered. At what angle of incidence on the unsilvered face will a ray retrace its path after reflection? The prism is in air.",
                    options: [
                        { key: "a", text: "$30^\\circ$" },
                        { key: "b", text: "$60^\\circ$" },
                        { key: "c", text: "$0^\\circ$" },
                        { key: "d", text: "$45^\\circ$" }
                    ],
                    answer: "d",
                    explanation: "Retracing requires normal incidence on the silvered face. Inside the prism, $r_1+r_2=A$, so $r_2=0$ gives $r_1=30^\\circ$. Snell's law at the entrance then gives $\\sin i=\\sqrt{2}\\sin30^\\circ=1/\\sqrt{2}$, hence $i=45^\\circ$."
                },
                {
                    id: "d37p22",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 22 },
                    text: "At equal temperature, hydrogen has $\\gamma=7/5$ and molar mass 2 g/mol, while helium has $\\gamma=5/3$ and molar mass 4 g/mol. What is the ratio of the speed of sound in hydrogen to that in helium?",
                    options: [
                        { key: "a", text: "$\\sqrt{42}:5$" },
                        { key: "b", text: "$\\sqrt{21}:5$" },
                        { key: "c", text: "$5:\\sqrt{42}$" },
                        { key: "d", text: "$1:1$" }
                    ],
                    answer: "a",
                    explanation: "For an ideal gas, sound speed is $\\sqrt{\\gamma RT/M}$. The squared ratio is $[(7/5)/2]/[(5/3)/4]=42/25$. Taking the square root gives $\\sqrt{42}/5$, approximately 1.296. Both the molar mass and heat-capacity ratio matter."
                },
                {
                    id: "d37p23",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 23 },
                    text: "A 1000 Hz tuning fork produces successive fundamental and first-overtone resonances in a tube closed at one end. The resonant air-column lengths differ by 0.170 m. What is the speed of sound, assuming the same end correction at both resonances?",
                    options: [
                        { key: "a", text: "170 m/s" },
                        { key: "b", text: "340 m/s" },
                        { key: "c", text: "350 m/s" },
                        { key: "d", text: "680 m/s" }
                    ],
                    answer: "b",
                    explanation: "For a closed tube the first two resonance lengths, including end correction, are $\\lambda/4$ and $3\\lambda/4$. Their difference is $\\lambda/2$, so $\\lambda=2(0.170)=0.340$ m. Then $v=f\\lambda=1000(0.340)=340$ m/s. The common end correction cancels."
                },
                {
                    id: "d37p24",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 24 },
                    text: "Two coherent waves of the same frequency and polarization interfere. The maximum-to-minimum intensity ratio is 49:1. What are the larger-to-smaller amplitude ratio and the individual intensity ratio, respectively?",
                    options: [
                        { key: "a", text: "7:1 and 49:1" },
                        { key: "b", text: "4:3 and 4:3" },
                        { key: "c", text: "4:3 and 16:9" },
                        { key: "d", text: "3:2 and 9:4" }
                    ],
                    answer: "c",
                    explanation: "Writing the amplitudes as $a_1>a_2$, the intensity ratio is $[(a_1+a_2)/(a_1-a_2)]^2=49$. Thus $a_1+a_2=7(a_1-a_2)$, giving $a_1/a_2=4/3$. Individual intensity is proportional to amplitude squared, so the intensity ratio is 16:9."
                },
                {
                    id: "d37p25",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 25 },
                    text: "Why is diffraction around an ordinary doorway much more noticeable for audible sound than for visible light?",
                    options: [
                        { key: "a", text: "Sound wavelengths are much closer to the doorway's width" },
                        { key: "b", text: "Sound travels slowly enough to gain extra time for bending" },
                        { key: "c", text: "Longitudinal waves diffract but transverse waves never do" },
                        { key: "d", text: "Light cannot spread after passing through any finite opening" }
                    ],
                    answer: "a",
                    explanation: "Diffraction is appreciable when an opening's size is comparable to the wavelength. Audible wavelengths can be comparable to a doorway, whereas visible wavelengths are tiny by comparison. Both sound and light diffract; being longitudinal or transverse does not decide whether diffraction can occur."
                },
                {
                    id: "d37p26",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 26 },
                    text: "Two fixed point charges are moved so that their separation increases by 25%, with charge magnitudes and medium unchanged. By what percentage does the magnitude of their electrostatic force decrease?",
                    options: [
                        { key: "a", text: "25%" },
                        { key: "b", text: "20%" },
                        { key: "c", text: "36%" },
                        { key: "d", text: "64%" }
                    ],
                    answer: "c",
                    explanation: "Coulomb force varies inversely as separation squared. The new force is $F/(1.25)^2=0.64F$. The reduction is $F-0.64F=0.36F$, or 36%. A value of 64% describes the fraction remaining, not the decrease."
                },
                {
                    id: "d37p27",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 27 },
                    text: "What is the direction and shape of electric field lines around an isolated negative point charge?",
                    options: [
                        { key: "a", text: "Radial and directed away from the charge" },
                        { key: "b", text: "Radial and directed towards the charge" },
                        { key: "c", text: "Circular and directed clockwise about the charge" },
                        { key: "d", text: "Circular and directed anticlockwise about the charge" }
                    ],
                    answer: "b",
                    explanation: "Electric field direction is defined by the force on a positive test charge. A negative point charge attracts that test charge, so field lines point radially inwards. Circular field lines describe magnetic fields around a straight current, not this electrostatic field."
                },
                {
                    id: "d37p28",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 28 },
                    text: "An isolated hollow conducting sphere of radius 12 cm has an empty cavity and is in electrostatic equilibrium. Its surface is at 24 V relative to infinity. What is the potential at the centre?",
                    options: [
                        { key: "a", text: "0 V" },
                        { key: "b", text: "12 V" },
                        { key: "c", text: "48 V" },
                        { key: "d", text: "24 V" }
                    ],
                    answer: "d",
                    explanation: "There is no electric field inside the empty cavity of this conductor in electrostatic equilibrium. Since potential difference is the negative integral of electric field, the centre and surface are at the same potential, 24 V. Zero field does not require zero potential."
                },
                {
                    id: "d37p29",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 29 },
                    text: "A 4 mm thick dielectric slab of relative permittivity 4 is inserted between the plates of an air-filled parallel-plate capacitor, covering the full plate area. By how much must the separation be increased to restore the original capacitance? Neglect fringing and assume enough initial space for the slab.",
                    options: [
                        { key: "a", text: "3 mm" },
                        { key: "b", text: "1 mm" },
                        { key: "c", text: "2 mm" },
                        { key: "d", text: "4 mm" }
                    ],
                    answer: "a",
                    explanation: "If the new separation is $d'$, the effective air thickness is $d'-t+t/K$. To preserve the original capacitance this must equal the original separation $d$. Thus $d'-d=t(1-1/K)=4(1-1/4)=3$ mm. The slab and the remaining air act as series dielectric layers."
                },
                {
                    id: "d37p30",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 30 },
                    text: "A uniform wire has total resistance 20 ohms and is bent into a circle. What resistance is measured between two diametrically opposite points, using ideal connecting leads?",
                    options: [
                        { key: "a", text: "10 ohms" },
                        { key: "b", text: "20 ohms" },
                        { key: "c", text: "5 ohms" },
                        { key: "d", text: "40 ohms" }
                    ],
                    answer: "c",
                    explanation: "The diameter endpoints divide the uniform wire into two equal semicircles, each of resistance 10 ohms. These provide two parallel paths, so the equivalent resistance is $10\\times10/(10+10)=5$ ohms. No conducting wire is added across the diameter itself."
                },
                {
                    id: "d37p31",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 31 },
                    text: "$N$ identical cells, each of emf $E$ and internal resistance $r$, are connected in series aiding around a closed loop with negligible external resistance. In the ideal steady circuit, what is the terminal potential difference across any one cell?",
                    options: [
                        { key: "a", text: "$E$" },
                        { key: "b", text: "$0$" },
                        { key: "c", text: "$NE$" },
                        { key: "d", text: "$E/N$" }
                    ],
                    answer: "b",
                    explanation: "The total emf is $NE$ and total internal resistance is $Nr$, giving current $I=E/r$. A discharging cell's terminal voltage is $E-Ir$, which is zero here. This is an ideal short-circuit calculation, not a safe way to operate real cells."
                },
                {
                    id: "d37p32",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 32 },
                    text: "A moving-coil galvanometer deflects through 50 divisions for a certain total current. Connecting a 12-ohm shunt reduces the deflection to 10 divisions while the total supplied current is kept unchanged. What is the galvanometer resistance?",
                    options: [
                        { key: "a", text: "12 ohms" },
                        { key: "b", text: "24 ohms" },
                        { key: "c", text: "60 ohms" },
                        { key: "d", text: "48 ohms" }
                    ],
                    answer: "d",
                    explanation: "Deflection is proportional to galvanometer current. After shunting, the galvanometer carries $10/50=1/5$ of the fixed total current; the shunt carries $4/5$. Equal branch voltages give $I_gG=I_sS$, so $G=4S=48$ ohms. Holding total current fixed is essential to this inference."
                },
                {
                    id: "d37p33",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 33 },
                    text: "In the usual parabolic thermocouple model, the neutral temperature is 250 $^\\circ$C when the cold junction is at 0 $^\\circ$C. The cold junction is then raised to 30 $^\\circ$C. What are the neutral and nontrivial inversion temperatures, respectively?",
                    options: [
                        { key: "a", text: "250 and 470 degrees Celsius" },
                        { key: "b", text: "220 and 440 degrees Celsius" },
                        { key: "c", text: "250 and 500 degrees Celsius" },
                        { key: "d", text: "280 and 530 degrees Celsius" }
                    ],
                    answer: "a",
                    explanation: "For fixed thermocouple coefficients the neutral temperature does not depend on the cold-junction temperature. The nontrivial inversion temperature satisfies $T_i=2T_n-T_c$. Therefore $T_n=250$ and $T_i=2(250)-30=470$ degrees Celsius. The other zero-emf point is simply equal junction temperatures."
                },
                {
                    id: "d37p34",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 34 },
                    text: "A horizontal straight wire of mass 200 g and length 1.5 m carries 2 A. A uniform horizontal magnetic field perpendicular to the wire provides an upward force that balances its weight. Find the field strength using $g=9.9$ m/s$^2$.",
                    options: [
                        { key: "a", text: "0.33 T" },
                        { key: "b", text: "1.50 T" },
                        { key: "c", text: "0.66 T" },
                        { key: "d", text: "2.00 T" }
                    ],
                    answer: "c",
                    explanation: "For a perpendicular field, the magnetic force on the straight wire is $BIL$. Balance requires $BIL=mg$, so $B=0.200(9.9)/(2\\times1.5)=0.66$ T. The current and field directions must also give an upward cross-product force, as specified in the question."
                },
                {
                    id: "d37p35",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 35 },
                    text: "A galvanometer has current sensitivity 5 divisions per milliampere and voltage sensitivity 20 divisions per volt. What is its resistance?",
                    options: [
                        { key: "a", text: "25 ohms" },
                        { key: "b", text: "250 ohms" },
                        { key: "c", text: "40 ohms" },
                        { key: "d", text: "500 ohms" }
                    ],
                    answer: "b",
                    explanation: "Current sensitivity is $\\theta/I$ and voltage sensitivity is $\\theta/V$. Their ratio is $V/I=R$. Convert 5 divisions/mA to 5000 divisions/A, then $R=5000/20=250$ ohms. Omitting the milliampere-to-ampere conversion would give the wrong resistance."
                },
                {
                    id: "d37p36",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 36 },
                    text: "A previously magnetized ferromagnetic specimen retains flux density when the applied field is removed. What is the magnitude of the reverse magnetizing field required to bring its flux density back to zero called?",
                    options: [
                        { key: "a", text: "Coercivity" },
                        { key: "b", text: "Retentivity" },
                        { key: "c", text: "Permeability" },
                        { key: "d", text: "Susceptibility" }
                    ],
                    answer: "a",
                    explanation: "Coercivity measures the reverse field needed to reduce the residual flux density to zero on a hysteresis loop. Retentivity instead describes the flux density left when the magnetizing field is zero. Specifying prior magnetization distinguishes this from an initially unmagnetized specimen."
                },
                {
                    id: "d37p37",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 37 },
                    text: "A train 150 m long moves along a straight horizontal track at 60 km/h in a uniform vertical magnetic field of $2\\times10^{-5}$ T. What motional emf is induced between its front and rear along a conductor parallel to its motion?",
                    options: [
                        { key: "a", text: "0.050 V" },
                        { key: "b", text: "5.0 V" },
                        { key: "c", text: "10.0 V" },
                        { key: "d", text: "0 V" }
                    ],
                    answer: "d",
                    explanation: "Motional emf is the line integral of $(\\mathbf{v}\\times\\mathbf{B})$ along the conductor. The magnetic force is transverse to the train's motion, so its component along the front-to-rear conductor is zero. An axle across the train could develop an emf, but its length is not the train's length."
                },
                {
                    id: "d37p38",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 38 },
                    text: "An ideal sinusoidal AC supply is rated at 220 V rms. What is its peak voltage, approximately?",
                    options: [
                        { key: "a", text: "156 V" },
                        { key: "b", text: "311 V" },
                        { key: "c", text: "220 V" },
                        { key: "d", text: "440 V" }
                    ],
                    answer: "b",
                    explanation: "For a sine wave, $V_{\\rm rms}=V_0/\\sqrt{2}$. Therefore the peak voltage is $V_0=220\\sqrt{2}\\approx311$ V. The stated supply rating is an rms value, not the peak or the mean over a complete cycle."
                },
                {
                    id: "d37p39",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 39 },
                    text: "Using the nuclear-radius law $R=R_0A^{1/3}$, a nucleus of mass number 256 has radius 8 fm. What radius does the same model predict for a helium nucleus of mass number 4?",
                    options: [
                        { key: "a", text: "1 fm" },
                        { key: "b", text: "4 fm" },
                        { key: "c", text: "2 fm" },
                        { key: "d", text: "3 fm" }
                    ],
                    answer: "c",
                    explanation: "With the same radius constant, the radius ratio is $(4/256)^{1/3}=(1/64)^{1/3}=1/4$. Hence the predicted helium radius is $8/4=2$ fm. This uses the stated approximate nuclear model; radii do not scale linearly with mass number."
                },
                {
                    id: "d37p40",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 40 },
                    text: "Let $M$ be an atom's mass expressed numerically in unified atomic mass units and $A$ its mass number. Define the <b>unscaled</b> packing fraction as $f=(M-A)/A$. Which relation follows?",
                    options: [
                        { key: "a", text: "$M=A/(1+f)$" },
                        { key: "b", text: "$M=f(1+A)$" },
                        { key: "c", text: "$A=f(1+M)$" },
                        { key: "d", text: "$M=A(1+f)$" }
                    ],
                    answer: "d",
                    explanation: "Multiplying the definition by $A$ gives $Af=M-A$. Rearranging yields $M=A+Af=A(1+f)$. Some texts multiply packing fraction by $10^4$ when reporting it; the question explicitly uses the unscaled definition, so no such factor enters."
                },
                {
                    id: "d37p41",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 41 },
                    text: "Intrinsic silicon and silver are cooled from 100 to 20 degrees Celsius. Ignoring changes in dimensions, how do their electrical conductivities normally change over this range?",
                    options: [
                        { key: "a", text: "Silicon decreases; silver increases" },
                        { key: "b", text: "Silicon increases; silver decreases" },
                        { key: "c", text: "Both silicon and silver increase" },
                        { key: "d", text: "Both silicon and silver decrease" }
                    ],
                    answer: "a",
                    explanation: "Cooling a metal reduces lattice-vibration scattering, generally increasing its conductivity. In intrinsic silicon, cooling greatly reduces the thermally generated carrier concentration, so conductivity decreases. The intrinsic qualification avoids special doped-semiconductor temperature regimes."
                },
                {
                    id: "d37p42",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 42 },
                    text: "Monochromatic light of frequency $\\nu$ above threshold produces photoelectrons from a metal of positive work function $\\phi$. If the frequency is doubled, how does the stopping potential compare with its initial value?",
                    options: [
                        { key: "a", text: "It becomes exactly twice the initial value" },
                        { key: "b", text: "It increases to less than twice the initial value" },
                        { key: "c", text: "It increases to more than twice the initial value" },
                        { key: "d", text: "It remains equal to the initial value" }
                    ],
                    answer: "c",
                    explanation: "Initially $eV_s=h\\nu-\\phi$. After doubling frequency, $eV'_s=2h\\nu-\\phi$, so $V'_s=2V_s+\\phi/e$. Since the work function is positive, the new stopping potential is greater than twice the old value. Doubling intensity would not have this effect."
                },
                {
                    id: "d37p43",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 43 },
                    text: "Ignoring reduced-mass and fine-structure effects, which principal quantum number of doubly ionized lithium, Li$^{2+}$, gives the same energy as hydrogen's first excited state?",
                    options: [
                        { key: "a", text: "3" },
                        { key: "b", text: "6" },
                        { key: "c", text: "4" },
                        { key: "d", text: "2" }
                    ],
                    answer: "b",
                    explanation: "A hydrogen-like ion has $E_n=-13.6Z^2/n^2$ eV. Hydrogen's first excited state has $n=2$ and energy $-13.6/4$ eV. For lithium, $Z=3$, so $9/n^2=1/4$, giving $n=6$. Principal level 6 is the fifth excited state, not the sixth excited state."
                },
                {
                    id: "d37p44",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 44 },
                    text: "An X-ray tube has a steady anode current of 8.0 mA. How many electrons strike the target per second? Take the elementary charge as $1.6\\times10^{-19}$ C.",
                    options: [
                        { key: "a", text: "$5.0\\times10^{15}$" },
                        { key: "b", text: "$1.28\\times10^{17}$" },
                        { key: "c", text: "$8.0\\times10^{16}$" },
                        { key: "d", text: "$5.0\\times10^{16}$" }
                    ],
                    answer: "d",
                    explanation: "Current is charge transferred per second. Dividing $8.0\\times10^{-3}$ C/s by $1.6\\times10^{-19}$ C per electron gives $5.0\\times10^{16}$ electrons/s. The accelerating voltage affects electron energy, but it is not needed to infer the arrival rate from current."
                },
                {
                    id: "d37p45",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 45 },
                    text: "A radioactive sample loses seven-eighths of its original undecayed nuclei in 12 days. What fraction of its original nuclei remains undecayed after 20 days? Assume one constant half-life.",
                    options: [
                        { key: "a", text: "$1/32$" },
                        { key: "b", text: "$1/64$" },
                        { key: "c", text: "$1/16$" },
                        { key: "d", text: "$1/128$" }
                    ],
                    answer: "a",
                    explanation: "If seven-eighths decay, one-eighth remains. Since $1/8=(1/2)^3$, 12 days represent three half-lives, giving a half-life of 4 days. Twenty days are five half-lives, so the remaining fraction is $(1/2)^5=1/32$."
                },
                {
                    id: "d37p46",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 46 },
                    text: "Which charged particle is emitted in nuclear beta-minus decay when a neutron is converted into a proton?",
                    options: [
                        { key: "a", text: "Positron" },
                        { key: "b", text: "Proton" },
                        { key: "c", text: "Electron" },
                        { key: "d", text: "Alpha particle" }
                    ],
                    answer: "c",
                    explanation: "In beta-minus decay, a neutron converts into a proton, an electron and an electron antineutrino. The emitted charged beta particle is the electron, created in the weak interaction. Beta-plus decay instead emits a positron, so the minus sign is important."
                },
                {
                    id: "d37p47",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 47 },
                    text: "What initially establishes the depletion region and built-in potential barrier when an unbiased p-n junction is formed?",
                    options: [
                        { key: "a", text: "Motion of the entire crystal lattice across the junction" },
                        { key: "b", text: "Diffusion and recombination leaving fixed ionized dopants" },
                        { key: "c", text: "A continuous external supply of charge from a battery" },
                        { key: "d", text: "Complete removal of the forbidden energy gap in the solid" }
                    ],
                    answer: "b",
                    explanation: "Majority carriers diffuse down concentration gradients and recombine near the junction. They leave immobile ionized donors and acceptors, whose space charge creates an electric field and built-in barrier. At equilibrium, drift and diffusion currents balance; no external battery is required."
                },
                {
                    id: "d37p48",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 48 },
                    text: "Every gate in the circuit is a two-input NOR gate. Where two input wires join, they carry the same signal. Which single gate has the same input-output function as the entire circuit?<svg class='q-fig' viewBox='0 0 380 205' width='380' height='205' role='img' aria-label='A and B each enter a NOR gate with its two inputs tied together. Those outputs enter a third NOR gate. Its output enters a fourth NOR gate with tied inputs, producing Q.'><g fill='none' stroke='currentColor' stroke-width='1.8'><path d='M55 25Q67 52 55 79Q87 79 101 52Q87 25 55 25ZM55 125Q67 152 55 179Q87 179 101 152Q87 125 55 125ZM160 75Q172 102 160 129Q192 129 206 102Q192 75 160 75ZM260 75Q272 102 260 129Q292 129 306 102Q292 75 260 75Z'/><circle cx='105' cy='52' r='4'/><circle cx='105' cy='152' r='4'/><circle cx='210' cy='102' r='4'/><circle cx='310' cy='102' r='4'/><path d='M18 52H38M38 40V64M38 40H60M38 64H60M18 152H38M38 140V164M38 140H60M38 164H60M109 52H137V90H165M109 152H137V114H165M214 102H239M239 90V114M239 90H265M239 114H265M314 102H354'/></g><g fill='currentColor'><circle cx='38' cy='52' r='2.5'/><circle cx='38' cy='152' r='2.5'/><circle cx='239' cy='102' r='2.5'/></g><g fill='currentColor' font-family='sans-serif' font-size='16'><text x='2' y='57'>A</text><text x='2' y='157'>B</text><text x='358' y='107'>Q</text></g></svg>",
                    options: [
                        { key: "a", text: "NOR" },
                        { key: "b", text: "AND" },
                        { key: "c", text: "OR" },
                        { key: "d", text: "NAND" }
                    ],
                    answer: "d",
                    explanation: "A NOR gate with tied inputs acts as an inverter, so the first two outputs are NOT A and NOT B. The third output is NOT(NOT A OR NOT B), equal to A AND B. The final tied-input NOR inverts this, giving NOT(A AND B): the NAND function."
                },
                {
                    id: "d37p49",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 49 },
                    text: "An ideal centre-tapped full-wave rectifier is supplied with AC of frequency 60 Hz. Before smoothing, what is the fundamental repetition frequency of its output voltage pulses?",
                    options: [
                        { key: "a", text: "120 Hz" },
                        { key: "b", text: "60 Hz" },
                        { key: "c", text: "30 Hz" },
                        { key: "d", text: "0 Hz" }
                    ],
                    answer: "a",
                    explanation: "Both half-cycles of the input produce output pulses of the same polarity in a full-wave rectifier. There are therefore two pulses per input cycle, giving $2f=120$ Hz. Unsmoothed rectified output contains a DC component and ripple; it is not perfectly constant DC."
                },
                {
                    id: "d37p50",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 50 },
                    text: "Which type of seismic body wave can propagate through both solid rock and liquid?",
                    options: [
                        { key: "a", text: "S waves, which require shear rigidity" },
                        { key: "b", text: "Love waves, which travel along the surface" },
                        { key: "c", text: "P waves, which produce compression and rarefaction" },
                        { key: "d", text: "Rayleigh waves, which travel along the surface" }
                    ],
                    answer: "c",
                    explanation: "P waves are longitudinal compressional body waves. Solids and liquids both resist compression, so both can transmit them. S waves require shear rigidity, which an ordinary liquid lacks. Love and Rayleigh waves are surface waves, not the requested body-wave type."
                }
            ]
        },
        {
            id: "chemistry37",
            name: "Chemistry",
            subject: "Chemistry",
            accent: "amber",
            blurb: "Physical, inorganic, organic, applied and analytical chemistry.",
            questions: [
                {
                    id: "d37c51",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 51 },
                    text: "One unified atomic mass unit is one-twelfth of the mass of an unbound ground-state carbon-12 atom at rest. Its approximate value in kilograms is:",
                    options: [
                        { key: "a", text: "$1.66\\times10^{-24}$ kg" },
                        { key: "b", text: "$6.02\\times10^{-23}$ kg" },
                        { key: "c", text: "$1.66\\times10^{-26}$ kg" },
                        { key: "d", text: "$1.66\\times10^{-27}$ kg" }
                    ],
                    answer: "d",
                    explanation: "The unified atomic mass unit is approximately $1.6605\\times10^{-27}$ kg, or $1.6605\\times10^{-24}$ g. The definition refers to one-twelfth of one carbon-12 atom's mass, not 1/12 gram. Converting between grams and kilograms accounts for a factor of one thousand."
                },
                {
                    id: "d37c52",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 52 },
                    text: "What mass of KCl is required to prepare 250 mL of 0.200 mol/L solution? Take atomic masses K = 39.0 and Cl = 35.5, and make up to the stated final volume.",
                    options: [
                        { key: "a", text: "1.8625 g" },
                        { key: "b", text: "3.7250 g" },
                        { key: "c", text: "7.4500 g" },
                        { key: "d", text: "14.9000 g" }
                    ],
                    answer: "b",
                    explanation: "The molar mass of KCl is $39.0+35.5=74.5$ g/mol. Required moles are $0.200\\times0.250=0.0500$ mol. Therefore mass is $0.0500\\times74.5=3.725$ g. The 250 mL refers to final solution volume, not the volume of water added."
                },
                {
                    id: "d37c53",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 53 },
                    text: "For a fixed mass of nitrogen, the masses of oxygen in two oxides A and B are in the ratio 1:4. Oxide A is N<sub>2</sub>O. What is the empirical formula of B?",
                    options: [
                        { key: "a", text: "NO<sub>2</sub>" },
                        { key: "b", text: "NO" },
                        { key: "c", text: "N<sub>2</sub>O<sub>3</sub>" },
                        { key: "d", text: "N<sub>2</sub>O<sub>5</sub>" }
                    ],
                    answer: "a",
                    explanation: "Keeping two nitrogen atoms as the reference, A has one oxygen atom and B must have four. The composition of B is therefore N2O4, whose simplest ratio is NO2. This information fixes the empirical formula but cannot by itself distinguish NO2 molecules from N2O4 molecules."
                },
                {
                    id: "d37c54",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 54 },
                    text: "Writing the electronic configuration of a lithium atom as $1s^3$ directly violates which principle?",
                    options: [
                        { key: "a", text: "Hund's rule of maximum multiplicity" },
                        { key: "b", text: "The Aufbau order of orbital filling" },
                        { key: "c", text: "The Pauli exclusion principle" },
                        { key: "d", text: "The de Broglie matter-wave relation" }
                    ],
                    answer: "c",
                    explanation: "An orbital can contain at most two electrons, with opposite spins. Three electrons in the single 1s orbital would force two electrons to share all four quantum numbers, violating the Pauli exclusion principle. The ground-state configuration of lithium is $1s^2\\,2s^1$."
                },
                {
                    id: "d37c55",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 55 },
                    text: "Which description correctly defines the first ionization energy of an element?",
                    options: [
                        { key: "a", text: "Energy released when gaseous atoms gain their first electrons" },
                        { key: "b", text: "Energy released when gaseous ions capture free electrons" },
                        { key: "c", text: "Energy needed to separate a solid into individual gaseous atoms" },
                        { key: "d", text: "Energy needed to remove electrons from isolated gaseous atoms" }
                    ],
                    answer: "d",
                    explanation: "First ionization removes one electron from each isolated ground-state gaseous atom to form singly positive gaseous ions. It requires energy. Electron addition concerns electron affinity, while converting a solid into separated gaseous atoms concerns atomization rather than ionization."
                },
                {
                    id: "d37c56",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 56 },
                    text: "Which statement is incorrect for typical carbon-carbon single and double bonds?",
                    options: [
                        { key: "a", text: "A pi bond is stronger than the corresponding sigma bond" },
                        { key: "b", text: "A carbon-carbon double bond contains one sigma and one pi bond" },
                        { key: "c", text: "A carbon-carbon double bond is shorter than a single bond" },
                        { key: "d", text: "A carbon-carbon double bond is stronger overall than a single bond" }
                    ],
                    answer: "a",
                    explanation: "A sigma bond has more effective head-on orbital overlap than the sideways overlap of the corresponding pi bond, so the sigma component is stronger. A double bond combines one sigma and one pi component, making it shorter and stronger overall than the corresponding single bond."
                },
                {
                    id: "d37c57",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 57 },
                    text: "Using conventional Lewis structures, including the usual P=O and S=O drawings for these oxyacids, which molecule has the greatest total number of lone electron pairs?",
                    options: [
                        { key: "a", text: "O<sub>3</sub>" },
                        { key: "b", text: "H<sub>2</sub>SO<sub>4</sub>" },
                        { key: "c", text: "H<sub>3</sub>PO<sub>3</sub>" },
                        { key: "d", text: "HNO<sub>3</sub>" }
                    ],
                    answer: "b",
                    explanation: "In the specified conventional drawings, H2SO4 has eight lone pairs on its four oxygen atoms. O3 and H3PO3 each have six; HNO3 has seven. Phosphorous acid, H3PO3, replaces the scan's H3PO4 because H3PO4 also has eight and would tie with H2SO4."
                },
                {
                    id: "d37c58",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 58 },
                    text: "In a usual Kekule Lewis structure of benzene, each carbon forms four bonds when bond order is counted. What is the formal charge on each carbon atom?",
                    options: [
                        { key: "a", text: "+1" },
                        { key: "b", text: "-1" },
                        { key: "c", text: "0" },
                        { key: "d", text: "+2" }
                    ],
                    answer: "c",
                    explanation: "Each carbon contributes four valence electrons, has no lone pair, and is assigned half of eight bonding electrons. Its formal charge is therefore $4-0-8/2=0$. Resonance in benzene does not imply that its ordinary carbon atoms carry net formal ionic charges."
                },
                {
                    id: "d37c59",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 59 },
                    text: "In which oxyacid does phosphorus have oxidation state +3? Use the usual +1 for hydrogen and -2 for oxygen.",
                    options: [
                        { key: "a", text: "H<sub>3</sub>PO<sub>3</sub>" },
                        { key: "b", text: "H<sub>3</sub>PO<sub>4</sub>" },
                        { key: "c", text: "HPO<sub>3</sub>" },
                        { key: "d", text: "H<sub>4</sub>P<sub>2</sub>O<sub>7</sub>" }
                    ],
                    answer: "a",
                    explanation: "For neutral H3PO3, the oxidation-state sum gives $3(+1)+x+3(-2)=0$, hence $x=+3$. In phosphoric, metaphosphoric and pyrophosphoric acid, the corresponding calculation gives phosphorus in the +5 state. Oxidation state is not the same as an acid's basicity."
                },
                {
                    id: "d37c60",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 60 },
                    text: "A fixed amount of ideal gas initially has pressure $P$. Its volume and absolute temperature are both doubled. What is its final pressure?",
                    options: [
                        { key: "a", text: "$2P$" },
                        { key: "b", text: "$P$" },
                        { key: "c", text: "$4P$" },
                        { key: "d", text: "$P/2$" }
                    ],
                    answer: "b",
                    explanation: "For fixed amount of ideal gas, $PV=nRT$ implies $P\\propto T/V$. Doubling both temperature and volume leaves their ratio unchanged, so the final pressure equals $P$. The temperature change must refer to kelvin, not a doubling of the Celsius reading."
                },
                {
                    id: "d37c61",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 61 },
                    text: "At a fixed temperature a reaction has equilibrium constant $K$. Every stoichiometric coefficient in its equation is divided by two, without reversing the reaction. What is the equilibrium constant for the rewritten equation?",
                    options: [
                        { key: "a", text: "$2K$" },
                        { key: "b", text: "$K/2$" },
                        { key: "c", text: "$K^2$" },
                        { key: "d", text: "$K^{1/2}$" }
                    ],
                    answer: "d",
                    explanation: "Stoichiometric coefficients become the exponents in the equilibrium-constant expression. Dividing every coefficient by two takes the square root of that entire expression, giving $K'=K^{1/2}$. Reversing the reaction, a different operation, would invert the constant."
                },
                {
                    id: "d37c62",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 62 },
                    text: "Which atmospheric gas mainly accounts for the mild natural acidity of unpolluted rainwater?",
                    options: [
                        { key: "a", text: "Sulphur dioxide" },
                        { key: "b", text: "Nitrogen dioxide" },
                        { key: "c", text: "Carbon dioxide" },
                        { key: "d", text: "Ammonia" }
                    ],
                    answer: "c",
                    explanation: "Carbon dioxide dissolves in rainwater and forms carbonic acid, making otherwise unpolluted rain mildly acidic. Sulphur and nitrogen oxides can cause additional, pollution-related acid rain. Ammonia is basic and tends to neutralize acidity rather than create it."
                },
                {
                    id: "d37c63",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 63 },
                    text: "A sparingly soluble salt dissociates as AB(s) into A<sup>+</sup>(aq) and B<sup>-</sup>(aq). When $K_{sp}$ is written as the product of molar concentrations, what conventional unit does that concentration product have?",
                    options: [
                        { key: "a", text: "$\\mathrm{mol\\,L^{-1}}$" },
                        { key: "b", text: "$\\mathrm{mol^2\\,L^{-2}}$" },
                        { key: "c", text: "$\\mathrm{mol^3\\,L^{-3}}$" },
                        { key: "d", text: "$\\mathrm{L\\,mol^{-1}}$" }
                    ],
                    answer: "b",
                    explanation: "The concentration expression is $K_{sp}=[A^+][B^-]$, so its conventional concentration units are $(\\mathrm{mol/L})^2$. This is distinct from molar solubility, which has units mol/L. The rigorous thermodynamic constant expressed using dimensionless activities is itself dimensionless."
                },
                {
                    id: "d37c64",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 64 },
                    text: "Find the approximate pH of 0.10% (mass/volume) aqueous NaOH at 25 degrees Celsius. Assume complete dissociation, molar mass 40 g/mol and $pK_w=14.00$.",
                    options: [
                        { key: "a", text: "12.4" },
                        { key: "b", text: "13.4" },
                        { key: "c", text: "10.4" },
                        { key: "d", text: "8.6" }
                    ],
                    answer: "a",
                    explanation: "A 0.10% mass/volume solution contains 0.10 g per 100 mL, or 1.0 g/L. Thus $[OH^-]=1.0/40=0.025$ mol/L. Its pOH is $-\\log_{10}(0.025)\\approx1.60$, so pH is $14.00-1.60=12.40$."
                },
                {
                    id: "d37c65",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 65 },
                    text: "A homogeneous reaction has positive activation energy and positive order in its reactant. Which group contains three changes that each increase its forward rate when considered separately? Assume a suitable rate-increasing catalyst.",
                    options: [
                        { key: "a", text: "Lower temperature; dilute the reactant; add the catalyst" },
                        { key: "b", text: "Raise temperature; dilute the reactant; remove the catalyst" },
                        { key: "c", text: "Lower temperature; concentrate the reactant; remove the catalyst" },
                        { key: "d", text: "Raise temperature; concentrate the reactant; add the catalyst" }
                    ],
                    answer: "d",
                    explanation: "Temperature changes the distribution of molecular energies, reactant concentration affects encounter rates, and a catalyst supplies an alternative reaction pathway. Other factors can matter in particular systems, such as surface area or light, but all three factors in the selected group are standard kinetic controls."
                },
                {
                    id: "d37c66",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 66 },
                    text: "How many faradays of charge are required to reduce one mole of MnO<sub>4</sub><sup>-</sup> to Mn<sup>2+</sup> in acidic solution?",
                    options: [
                        { key: "a", text: "3 F" },
                        { key: "b", text: "4 F" },
                        { key: "c", text: "5 F" },
                        { key: "d", text: "6 F" }
                    ],
                    answer: "c",
                    explanation: "Manganese changes from +7 in permanganate to +2, gaining five electrons per manganese atom. One mole of permanganate therefore accepts five moles of electrons, equivalent to five faradays. The acidic medium specifies Mn2+ rather than another reduction product such as MnO2."
                },
                {
                    id: "d37c67",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 67 },
                    text: "A pure solid melts reversibly at its melting point and constant pressure. What happens to its enthalpy?",
                    options: [
                        { key: "a", text: "It increases by the enthalpy of fusion" },
                        { key: "b", text: "It decreases by the enthalpy of fusion" },
                        { key: "c", text: "It remains fixed because temperature is fixed" },
                        { key: "d", text: "It becomes zero at the phase boundary" }
                    ],
                    answer: "a",
                    explanation: "Melting absorbs latent heat at constant pressure. With only pressure-volume work, that heat equals the positive enthalpy change of fusion. Temperature can remain fixed while enthalpy increases because energy is used to change the phase rather than simply raise thermal temperature."
                },
                {
                    id: "d37c68",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 68 },
                    text: "In the localized valence-bond description of the methyl carbanion, CH<sub>3</sub><sup>-</sup>, which hybridization and geometry are associated with its carbon atom?",
                    options: [
                        { key: "a", text: "sp; linear" },
                        { key: "b", text: "sp3; trigonal pyramidal" },
                        { key: "c", text: "sp2; trigonal planar" },
                        { key: "d", text: "sp3d; trigonal bipyramidal" }
                    ],
                    answer: "b",
                    explanation: "The methyl carbanion has three carbon-hydrogen sigma bonds and a lone pair on carbon. Four electron domains are described using sp3 hybridization, with a trigonal-pyramidal arrangement of the three hydrogens. Resonance-stabilized carbanions can be planar, so the simple methyl ion is specified."
                },
                {
                    id: "d37c69",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 69 },
                    text: "What is the systematic substitutive name of CH<sub>3</sub>CN, counting the nitrile carbon in the parent chain?",
                    options: [
                        { key: "a", text: "Propanenitrile" },
                        { key: "b", text: "Methanenitrile" },
                        { key: "c", text: "Ethanamide" },
                        { key: "d", text: "Ethanenitrile" }
                    ],
                    answer: "d",
                    explanation: "The methyl carbon and nitrile carbon together form a two-carbon chain. Adding the nitrile suffix gives ethanenitrile. Acetonitrile is also an accepted retained name, so it is not offered as a supposedly incorrect competing option in this systematic-name question."
                },
                {
                    id: "d37c70",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 70 },
                    text: "Which named reaction couples alkyl halides using sodium in dry ether to prepare a higher alkane?",
                    options: [
                        { key: "a", text: "Williamson synthesis" },
                        { key: "b", text: "Ozonolysis" },
                        { key: "c", text: "Wurtz reaction" },
                        { key: "d", text: "Friedel-Crafts acylation" }
                    ],
                    answer: "c",
                    explanation: "The Wurtz reaction joins two alkyl groups from alkyl halides using sodium, commonly in dry ether. Identical alkyl halides are preferred for a single symmetrical product. Williamson synthesis prepares ethers, ozonolysis cleaves multiple bonds, and Friedel-Crafts acylation modifies aromatic rings."
                },
                {
                    id: "d37c71",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 71 },
                    text: "For the same simple alkyl group R, which carbon-halogen bond normally has the greatest homolytic bond-dissociation energy?",
                    options: [
                        { key: "a", text: "R-F" },
                        { key: "b", text: "R-Cl" },
                        { key: "c", text: "R-Br" },
                        { key: "d", text: "R-I" }
                    ],
                    answer: "a",
                    explanation: "The carbon-fluorine bond is short and strong, with a higher bond-dissociation energy than the corresponding carbon-chlorine, carbon-bromine or carbon-iodine bond. This specifies bond strength rather than using the vague word stability, which can depend on the reaction being considered."
                },
                {
                    id: "d37c72",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 72 },
                    text: "The carbylamine test uses chloroform and alcoholic KOH. Which class of amine gives the characteristic positive test?",
                    options: [
                        { key: "a", text: "Secondary amines" },
                        { key: "b", text: "Primary amines" },
                        { key: "c", text: "Tertiary amines" },
                        { key: "d", text: "Quaternary ammonium salts" }
                    ],
                    answer: "b",
                    explanation: "Primary aliphatic and aromatic amines give the carbylamine reaction, forming an isocyanide. Secondary and tertiary amines do not give this standard positive test. The full reagent combination is specified because chloroform alone is not the complete analytical test."
                },
                {
                    id: "d37c73",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 73 },
                    text: "In the industrial manufacture of chlorobenzene, the process using benzene, hydrogen chloride and oxygen over a copper chloride catalyst is called the:",
                    options: [
                        { key: "a", text: "Dow process" },
                        { key: "b", text: "Deacon process" },
                        { key: "c", text: "Raschig process" },
                        { key: "d", text: "Contact process" }
                    ],
                    answer: "c",
                    explanation: "This chlorobenzene manufacturing route is the Raschig process. The Dow process is associated with conversion of chlorobenzene to phenol, the Deacon process with oxidation of hydrogen chloride to chlorine, and the Contact process with sulphuric acid manufacture."
                },
                {
                    id: "d37c74",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 74 },
                    text: "Glycerol has structure HOCH<sub>2</sub>-CH(OH)-CH<sub>2</sub>OH. How many of its alcohol groups are primary and how many are secondary?",
                    options: [
                        { key: "a", text: "Three primary; zero secondary" },
                        { key: "b", text: "One primary; two secondary" },
                        { key: "c", text: "Zero primary; three secondary" },
                        { key: "d", text: "Two primary; one secondary" }
                    ],
                    answer: "d",
                    explanation: "Each terminal CH2OH carbon is bonded to only one other carbon, making its alcohol group primary. The middle CHOH carbon is bonded to two other carbons, making that alcohol group secondary. Glycerol therefore has two primary and one secondary alcohol groups."
                },
                {
                    id: "d37c75",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 75 },
                    text: "Ethene undergoes hydroformylation with CO and H<sub>2</sub> using a cobalt carbonyl catalyst. The aldehyde formed is then hydrogenated. Which alcohol results?",
                    options: [
                        { key: "a", text: "Ethanol" },
                        { key: "b", text: "Propan-1-ol" },
                        { key: "c", text: "Propan-2-ol" },
                        { key: "d", text: "Butan-1-ol" }
                    ],
                    answer: "b",
                    explanation: "Hydroformylation adds a hydrogen and formyl group across the double bond, increasing the carbon count by one. Ethene thus forms propanal. Hydrogenating its aldehyde group gives the primary alcohol propan-1-ol, not propan-2-ol or an unchanged two-carbon alcohol."
                },
                {
                    id: "d37c76",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 76 },
                    text: "Phenol reacts with excess bromine water at room temperature. Which product gives the characteristic white precipitate?",
                    options: [
                        { key: "a", text: "2-Bromophenol" },
                        { key: "b", text: "4-Bromophenol" },
                        { key: "c", text: "2,4-Dibromophenol" },
                        { key: "d", text: "2,4,6-Tribromophenol" }
                    ],
                    answer: "d",
                    explanation: "The hydroxyl group strongly activates phenol's ring at the ortho and para positions. With excess bromine water, substitution occurs at both ortho positions and the para position, producing white 2,4,6-tribromophenol. Controlled bromination in a nonpolar solvent can give different product distributions."
                },
                {
                    id: "d37c77",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 77 },
                    text: "Which alkene yields only ethanal as its carbonyl product on ozonolysis followed by a reductive work-up?",
                    options: [
                        { key: "a", text: "But-1-ene" },
                        { key: "b", text: "Propene" },
                        { key: "c", text: "But-2-ene" },
                        { key: "d", text: "Ethene" }
                    ],
                    answer: "c",
                    explanation: "But-2-ene has the symmetrical structure CH3-CH=CH-CH3. Cleaving its double bond gives two identical CH3CHO molecules, ethanal. But-1-ene and propene give two different carbonyl products, while ethene gives methanal rather than ethanal."
                },
                {
                    id: "d37c78",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 78 },
                    text: "Which aldehyde has alpha-hydrogens and therefore undergoes the ordinary aldol reaction rather than the usual Cannizzaro reaction under standard textbook conditions?",
                    options: [
                        { key: "a", text: "Ethanal, CH<sub>3</sub>CHO" },
                        { key: "b", text: "Methanal, HCHO" },
                        { key: "c", text: "Benzaldehyde, C<sub>6</sub>H<sub>5</sub>CHO" },
                        { key: "d", text: "2,2-Dimethylpropanal, (CH<sub>3</sub>)<sub>3</sub>CCHO" }
                    ],
                    answer: "a",
                    explanation: "Ethanal has hydrogens on the carbon adjacent to its carbonyl group, allowing enolate formation and aldol addition. The other listed aldehydes lack alpha-hydrogens. The scan's claim that a listed ordinary compound undergoes both reactions is replaced by this standard distinction to avoid an invalid single-answer item."
                },
                {
                    id: "d37c79",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 79 },
                    text: "Benzaldehyde reacts with acetic anhydride in the presence of sodium acetate to form cinnamic acid after work-up. Which named condensation is this?",
                    options: [
                        { key: "a", text: "Benzoin condensation" },
                        { key: "b", text: "Perkin condensation" },
                        { key: "c", text: "Claisen ester condensation" },
                        { key: "d", text: "Knoevenagel condensation" }
                    ],
                    answer: "b",
                    explanation: "The Perkin condensation couples an aromatic aldehyde with an acid anhydride using a carboxylate base. Benzaldehyde and acetic anhydride give the unsaturated acid cinnamic acid, or 3-phenylprop-2-enoic acid. Specifying the reagents distinguishes this route from other carbon-carbon bond-forming condensations."
                },
                {
                    id: "d37c80",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 80 },
                    text: "Which of the following carboxylic acids is strongest in dilute aqueous solution?",
                    options: [
                        { key: "a", text: "CH<sub>3</sub>COOH" },
                        { key: "b", text: "HCOOH" },
                        { key: "c", text: "ClCH<sub>2</sub>COOH" },
                        { key: "d", text: "FCH<sub>2</sub>COOH" }
                    ],
                    answer: "d",
                    explanation: "Fluorine strongly withdraws electron density through the inductive effect, stabilizing the conjugate carboxylate ion. Its effect is stronger than chlorine's at the same position. Fluoroacetic acid is therefore stronger than chloroacetic, formic and acetic acid in this set."
                },
                {
                    id: "d37c81",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 81 },
                    text: "In the classical reduction of nitrobenzene with lithium aluminium hydride in dry ether, which coupled nitrogen-containing product is obtained?",
                    options: [
                        { key: "a", text: "Aniline" },
                        { key: "b", text: "Azoxybenzene" },
                        { key: "c", text: "Azobenzene" },
                        { key: "d", text: "4-Aminophenol" }
                    ],
                    answer: "c",
                    explanation: "Aromatic nitro compounds can undergo reductive coupling with lithium aluminium hydride to give azo compounds. Nitrobenzene gives azobenzene, containing a phenyl-N=N-phenyl linkage. This classical aryl-nitro reaction should not be confused with acidic metal reduction to aniline or a blanket assumption that every nitro reduction yields an amine."
                },
                {
                    id: "d37c82",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 82 },
                    text: "Which reagent gives characteristic differences in the reactions of primary, secondary and tertiary aliphatic amines, helping distinguish the three classes?",
                    options: [
                        { key: "a", text: "Nitrous acid" },
                        { key: "b", text: "Grignard reagent" },
                        { key: "c", text: "Fehling's solution" },
                        { key: "d", text: "Tollens' reagent" }
                    ],
                    answer: "a",
                    explanation: "Primary aliphatic amines typically release nitrogen with nitrous acid, secondary amines form N-nitroso compounds, and tertiary aliphatic amines mainly form salts under the usual test conditions. Aromatic amines have additional behaviour, so the aliphatic qualification is important."
                },
                {
                    id: "d37c83",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 83 },
                    text: "Which statement about a typical Grignard reagent, RMgX, is incorrect?",
                    options: [
                        { key: "a", text: "It is an organomagnesium compound" },
                        { key: "b", text: "Its carbon-magnesium bond makes carbon partially positive" },
                        { key: "c", text: "It reacts with water and requires dry conditions" },
                        { key: "d", text: "Its carbon can act as a nucleophilic centre" }
                    ],
                    answer: "b",
                    explanation: "Carbon is more electronegative than magnesium, so the carbon-magnesium bond is polarized with carbon partially negative and magnesium partially positive. This accounts for the carbon's nucleophilic and strongly basic behaviour. Describing it as a completely ordinary nonpolar bond or assigning the opposite polarity is incorrect."
                },
                {
                    id: "d37c84",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 84 },
                    text: "Two molecules of ethyl acetate undergo Claisen condensation with sodium ethoxide, followed by acid work-up. What is the principal condensation product?",
                    options: [
                        { key: "a", text: "Ethyl formate" },
                        { key: "b", text: "Diethyl ether" },
                        { key: "c", text: "Ethyl benzoate" },
                        { key: "d", text: "Ethyl acetoacetate" }
                    ],
                    answer: "d",
                    explanation: "The enolate of one ethyl acetate molecule attacks a second ester molecule, giving ethyl acetoacetate after elimination and work-up. It is a beta-keto ester, also called ethyl 3-oxobutanoate. These synonymous descriptions are not placed in separate options because that would create multiple correct choices."
                },
                {
                    id: "d37c85",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 85 },
                    text: "Which formulation describes Nessler's reagent used in the classical test for ammonia?",
                    options: [
                        { key: "a", text: "Potassium tetraiodomercurate(II) in water alone" },
                        { key: "b", text: "Potassium tetraiodomercurate(II) in hydrochloric acid" },
                        { key: "c", text: "Potassium tetraiodomercurate(II) in potassium hydroxide" },
                        { key: "d", text: "Potassium tetrachloromercurate(II) in potassium iodide" }
                    ],
                    answer: "c",
                    explanation: "Nessler's reagent is an alkaline solution of potassium tetraiodomercurate(II), K2[HgI4], commonly in KOH. Both the iodide complex and alkaline medium are needed for the standard ammonia test. Merely naming the complex without the base is an incomplete reagent formulation."
                },
                {
                    id: "d37c86",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 86 },
                    text: "In adsorption chromatography using a solid stationary phase such as silica, components are separated mainly because they have different:",
                    options: [
                        { key: "a", text: "Rates of evaporation at their normal boiling points" },
                        { key: "b", text: "Affinities for adsorption on the stationary phase" },
                        { key: "c", text: "Solubilities in a second immiscible liquid phase" },
                        { key: "d", text: "Rates of passage through a semipermeable membrane" }
                    ],
                    answer: "b",
                    explanation: "Components differ in their attraction to the adsorbent relative to the moving solvent, so they migrate at different rates. This is differential adsorption. Other chromatographic methods can use partition, ion exchange or size exclusion, so adsorption chromatography is specified rather than assigning one mechanism to every method."
                },
                {
                    id: "d37c87",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 87 },
                    text: "A sodium-fusion extract of an organic compound gives a violet colour with sodium nitroprusside. Which element does this classical result indicate?",
                    options: [
                        { key: "a", text: "Sulphur" },
                        { key: "b", text: "Nitrogen" },
                        { key: "c", text: "Chlorine" },
                        { key: "d", text: "Phosphorus" }
                    ],
                    answer: "a",
                    explanation: "Sodium fusion converts sulphur into sulphide. Sulphide then reacts with sodium nitroprusside to give the violet thionitroprusside complex. The reagent must be named: a colour in an unspecified sodium extract alone would not be a sufficient analytical identification."
                },
                {
                    id: "d37c88",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 88 },
                    text: "During titration of oxalic acid with potassium permanganate in dilute sulphuric acid, which indicator is normally used to detect the endpoint?",
                    options: [
                        { key: "a", text: "Phenolphthalein added to the flask" },
                        { key: "b", text: "Methyl orange added to the flask" },
                        { key: "c", text: "Permanganate itself as a self-indicator" },
                        { key: "d", text: "Starch added near the endpoint" }
                    ],
                    answer: "c",
                    explanation: "Permanganate is intensely coloured, whereas Mn2+ formed in acidic solution is very pale. Before equivalence, each addition is consumed; a slight excess leaves a persistent pale pink colour. Therefore permanganate acts as its own indicator and no separate acid-base or starch indicator is required."
                },
                {
                    id: "d37c89",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 89 },
                    text: "Under classical qualitative-analysis conditions, which pair both precipitate as sulphides when H<sub>2</sub>S is passed through a solution acidified with dilute HCl?",
                    options: [
                        { key: "a", text: "Zn<sup>2+</sup> and Ni<sup>2+</sup>" },
                        { key: "b", text: "Cu<sup>2+</sup> and Co<sup>2+</sup>" },
                        { key: "c", text: "Bi<sup>3+</sup> and Zn<sup>2+</sup>" },
                        { key: "d", text: "Bi<sup>3+</sup> and Sn<sup>2+</sup>" }
                    ],
                    answer: "d",
                    explanation: "Bismuth and tin belong to the classical acid-precipitated sulphide group, forming Bi2S3 and SnS under the stated conditions. Zinc, nickel and cobalt normally require a higher sulphide concentration. Asking which both precipitate avoids the source's ambiguity: two ions that both remain dissolved also cannot be separated by this step alone."
                },
                {
                    id: "d37c90",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 90 },
                    text: "In the diaphragm-cell chlor-alkali process, in which compartment is the sodium hydroxide solution formed?",
                    options: [
                        { key: "a", text: "Cathode compartment" },
                        { key: "b", text: "Anode compartment" },
                        { key: "c", text: "Both compartments equally" },
                        { key: "d", text: "Neither compartment" }
                    ],
                    answer: "a",
                    explanation: "Water is reduced at the cathode to hydrogen and hydroxide ions. Sodium ions accompany the hydroxide in the cathode compartment, producing sodium hydroxide solution. Chlorine is formed at the anode; the diaphragm helps keep it separated from hydroxide and hydrogen."
                },
                {
                    id: "d37c91",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 91 },
                    text: "Compared with a dedicated continuous chemical plant, a batch process is especially suitable when production involves:",
                    options: [
                        { key: "a", text: "A single product at a fixed high output continuously" },
                        { key: "b", text: "Small production lots and frequent product changes" },
                        { key: "c", text: "An uninterrupted feed maintained indefinitely" },
                        { key: "d", text: "An invariant steady state throughout operation" }
                    ],
                    answer: "b",
                    explanation: "Batch equipment can be charged, processed, emptied and prepared for another product or formulation, giving flexibility for small lots. Continuous plants are often preferred for sustained large-volume output of one product. Batch processing can be controlled and automated; inability to control it is not a defining feature."
                },
                {
                    id: "d37c92",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 92 },
                    text: "Which listed ore is a sulphide ore and is therefore the standard choice for concentration by froth flotation?",
                    options: [
                        { key: "a", text: "Calamine, ZnCO<sub>3</sub>" },
                        { key: "b", text: "Horn silver, AgCl" },
                        { key: "c", text: "Malachite, Cu<sub>2</sub>CO<sub>3</sub>(OH)<sub>2</sub>" },
                        { key: "d", text: "Cinnabar, HgS" }
                    ],
                    answer: "d",
                    explanation: "Cinnabar is mercury sulphide, HgS. Froth flotation is classically associated with sulphide-ore concentration through selective wetting and attachment to air bubbles. The other listed minerals are carbonate, chloride or basic carbonate ores rather than sulphides."
                },
                {
                    id: "d37c93",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 93 },
                    text: "Adipic acid reacts with hexane-1,6-diamine in a condensation polymerization. Which polymer is formed?",
                    options: [
                        { key: "a", text: "Polyethylene" },
                        { key: "b", text: "Polyvinyl chloride" },
                        { key: "c", text: "Nylon-6,6" },
                        { key: "d", text: "Polyacrylonitrile" }
                    ],
                    answer: "c",
                    explanation: "The two carboxyl groups of adipic acid and two amino groups of hexane-1,6-diamine form repeated amide linkages with elimination of water. Both monomers contain six carbon atoms, giving the name nylon-6,6. The other choices are addition polymers made from different monomers."
                },
                {
                    id: "d37c94",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 94 },
                    text: "Tritium is the hydrogen isotope with mass number 3 and atomic number 1. How many neutrons does its nucleus contain?",
                    options: [
                        { key: "a", text: "2" },
                        { key: "b", text: "1" },
                        { key: "c", text: "3" },
                        { key: "d", text: "0" }
                    ],
                    answer: "a",
                    explanation: "Mass number counts protons plus neutrons, while atomic number counts protons. Tritium therefore has $3-1=2$ neutrons and one proton. Its electrons are outside the nucleus and do not enter this subtraction."
                },
                {
                    id: "d37c95",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 95 },
                    text: "Beryllium oxide reacts with both acids and sufficiently strong bases. Which classification fits BeO?",
                    options: [
                        { key: "a", text: "Acidic oxide only" },
                        { key: "b", text: "Amphoteric oxide" },
                        { key: "c", text: "Neutral oxide" },
                        { key: "d", text: "Basic oxide only" }
                    ],
                    answer: "b",
                    explanation: "An amphoteric oxide can react as a base with acids and as an acid with strong bases. BeO displays this behaviour because the small Be2+ ion gives its compounds appreciable covalent character. Heavier Group 2 oxides are predominantly basic."
                },
                {
                    id: "d37c96",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 96 },
                    text: "Nitrogen is only slightly soluble in water. It is collected in an initially water-filled inverted gas jar, with incoming gas replacing the water. What is this collection method called?",
                    options: [
                        { key: "a", text: "Upward displacement of air" },
                        { key: "b", text: "Downward displacement of air" },
                        { key: "c", text: "Upward displacement of water" },
                        { key: "d", text: "Downward displacement of water" }
                    ],
                    answer: "d",
                    explanation: "The gas collects at the top of the inverted jar and pushes water down and out, so the method is downward displacement of water, also called collection over water. It is suitable for gases with low water solubility that do not react appreciably with water."
                },
                {
                    id: "d37c97",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 97 },
                    text: "Which crystalline allotrope is commonly described in introductory chemistry as the purest natural form of carbon and has a three-dimensional network of tetrahedrally bonded carbon atoms?",
                    options: [
                        { key: "a", text: "Graphite" },
                        { key: "b", text: "Animal charcoal" },
                        { key: "c", text: "Diamond" },
                        { key: "d", text: "Coke" }
                    ],
                    answer: "c",
                    explanation: "Diamond has a three-dimensional network in which each carbon bonds tetrahedrally to four neighbours. It is the conventional textbook answer to the source's purity question. Actual chemical purity depends on the specimen; natural diamonds can contain impurities, so purity is not an exceptionless definition of this allotrope."
                },
                {
                    id: "d37c98",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 98 },
                    text: "Which statement about halogens and their compounds is incorrect under ordinary room conditions?",
                    options: [
                        { key: "a", text: "Elemental bromine is a gas at 25 degrees Celsius and 1 atm" },
                        { key: "b", text: "Chlorine reacts with slaked lime in bleaching-powder manufacture" },
                        { key: "c", text: "Concentrated sulphuric acid can oxidize hydrogen bromide" },
                        { key: "d", text: "Iodide ions are generally oxidized more readily than bromide ions" }
                    ],
                    answer: "a",
                    explanation: "Bromine is a reddish-brown liquid at 25 degrees Celsius and ordinary atmospheric pressure, although it gives off coloured vapour. The other statements are standard halogen chemistry. Concentrated sulphuric acid is unsuitable for drying HBr because oxidation changes the gas."
                },
                {
                    id: "d37c99",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 99 },
                    text: "Controlled partial oxidation of H<sub>2</sub>S in water, for example by a limited amount of dilute nitric acid, produces very fine sulphur particles dispersed in the liquid. What is this dispersed product?",
                    options: [
                        { key: "a", text: "A true molecular solution of sulphur" },
                        { key: "b", text: "A colloidal sol of sulphur" },
                        { key: "c", text: "Large monoclinic sulphur crystals" },
                        { key: "d", text: "A homogeneous solution of sulphate only" }
                    ],
                    answer: "b",
                    explanation: "Partial oxidation converts sulphide sulphur from -2 to elemental sulphur, which can form a colloidal dispersion in water. The particles are larger than molecules but remain finely dispersed. Conditions matter: stronger or excess oxidant can oxidize sulphur further, so unlimited oxidation is not assumed."
                },
                {
                    id: "d37c100",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 100 },
                    text: "Which order shows the general increase in water solubility of the listed Group 2 hydroxides?",
                    options: [
                        { key: "a", text: "Ba(OH)<sub>2</sub> &lt; Sr(OH)<sub>2</sub> &lt; Ca(OH)<sub>2</sub> &lt; Mg(OH)<sub>2</sub> &lt; Be(OH)<sub>2</sub>" },
                        { key: "b", text: "Be(OH)<sub>2</sub> &lt; Ca(OH)<sub>2</sub> &lt; Mg(OH)<sub>2</sub> &lt; Ba(OH)<sub>2</sub> &lt; Sr(OH)<sub>2</sub>" },
                        { key: "c", text: "Mg(OH)<sub>2</sub> &lt; Be(OH)<sub>2</sub> &lt; Sr(OH)<sub>2</sub> &lt; Ca(OH)<sub>2</sub> &lt; Ba(OH)<sub>2</sub>" },
                        { key: "d", text: "Be(OH)<sub>2</sub> &lt; Mg(OH)<sub>2</sub> &lt; Ca(OH)<sub>2</sub> &lt; Sr(OH)<sub>2</sub> &lt; Ba(OH)<sub>2</sub>" }
                    ],
                    answer: "d",
                    explanation: "The general water-solubility trend for these hydroxides increases down Group 2, from very poorly soluble beryllium and magnesium hydroxides towards more soluble barium hydroxide. Changes in lattice and hydration energies govern the trend. Dissolution of amphoteric Be(OH)2 in strong acid or base is a separate comparison."
                }
            ]
        },
        {
            id: "zoology37",
            name: "Zoology",
            subject: "Zoology",
            accent: "rose",
            blurb: "Animal diversity, selected animals, evolution and human biology.",
            questions: [
                {
                    id: "d37z101",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 101 },
                    text: "Which pair of molluscs both possess a vascularized pulmonary sac or lung-like mantle cavity for aerial respiration?",
                    options: [
                        { key: "a", text: "Chiton and Unio" },
                        { key: "b", text: "Pila and Helix" },
                        { key: "c", text: "Unio and Sepia" },
                        { key: "d", text: "Chiton and Sepia" }
                    ],
                    answer: "b",
                    explanation: "Pila can use its pulmonary sac for aerial respiration and also possesses a gill for aquatic respiration. Helix is a land snail with a vascularized mantle cavity functioning as a lung. Chiton, Unio and Sepia use gills rather than this lung-like structure."
                },
                {
                    id: "d37z102",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 102 },
                    text: "In the traditional classification of sponges by skeletal composition, which set contains only members of Demospongiae?",
                    options: [
                        { key: "a", text: "Leucosolenia, Euspongia and Sycon" },
                        { key: "b", text: "Euplectella, Hyalonema and Spongilla" },
                        { key: "c", text: "Sycon, Leucosolenia and Hyalonema" },
                        { key: "d", text: "Spongilla, Euspongia and Chalina" }
                    ],
                    answer: "d",
                    explanation: "Spongilla, Euspongia and Chalina are demosponges, whose skeleton may contain spongin, siliceous spicules or both. Sycon and Leucosolenia are calcareous sponges. Euplectella and Hyalonema are glass sponges, placed in Hexactinellida."
                },
                {
                    id: "d37z103",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 103 },
                    text: "Which is <b>not</b> a typical feature of sharks in class Chondrichthyes?",
                    options: [
                        { key: "a", text: "Skin covered with ctenoid scales" },
                        { key: "b", text: "A predominantly cartilaginous endoskeleton" },
                        { key: "c", text: "Absence of a gas-filled swim bladder" },
                        { key: "d", text: "A mouth located on the ventral side" }
                    ],
                    answer: "a",
                    explanation: "Sharks characteristically have placoid scales, not the ctenoid scales found in many bony fishes. Their skeleton is mainly cartilaginous and they lack a gas-filled swim bladder. The class and example are stated explicitly because the source's group name is unclear."
                },
                {
                    id: "d37z104",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 104 },
                    text: "A healthy freshwater protozoan is transferred to distilled water. What short-term change in its contractile-vacuole activity is expected as it regulates water balance?",
                    options: [
                        { key: "a", text: "It stops expelling water altogether" },
                        { key: "b", text: "It expels water less frequently" },
                        { key: "c", text: "It expels water more frequently" },
                        { key: "d", text: "It changes into a food vacuole" }
                    ],
                    answer: "c",
                    explanation: "Distilled water is more hypotonic than ordinary freshwater, increasing osmotic water entry into the cell. The contractile vacuole must remove the extra water, so its discharge frequency generally rises. Its role here is osmoregulation rather than digestion or absorption of water."
                },
                {
                    id: "d37z105",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 105 },
                    text: "In the commonly studied male frog, the breeding-season nuptial or copulatory pad develops on which part?",
                    options: [
                        { key: "a", text: "First digit of the hind foot" },
                        { key: "b", text: "Skin around the cloacal aperture" },
                        { key: "c", text: "Outer surface of the shank" },
                        { key: "d", text: "First digit of the forelimb" }
                    ],
                    answer: "d",
                    explanation: "The male's first forelimb digit develops a nuptial pad that improves its grip during amplexus. It is a secondary sexual character, not a pad on the first toe of the hind limb or on the shank. Its prominence is associated with the breeding season."
                },
                {
                    id: "d37z106",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 106 },
                    text: "For the commonly studied frog species in which males have vocal sacs, which statement about sexual dimorphism is incorrect?",
                    options: [
                        { key: "a", text: "Females of comparable age are generally larger than males" },
                        { key: "b", text: "Vocal sacs are a female-specific breeding character" },
                        { key: "c", text: "Males produce mating calls during the breeding season" },
                        { key: "d", text: "Males have strong forelimbs used to hold the female" }
                    ],
                    answer: "b",
                    explanation: "The vocal sacs in the standard textbook frog are male structures that help amplify mating calls, not female-specific structures. The other choices describe the commonly taught dimorphism. The scan's original alternatives do not supply a clear exception, so one explicitly false sex assignment is used here."
                },
                {
                    id: "d37z107",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 107 },
                    text: "After fertilization in a female Anopheles mosquito, the Plasmodium zygote develops into an ookinete. Which description identifies this stage?",
                    options: [
                        { key: "a", text: "A nonmotile haploid stage inside a human red blood cell" },
                        { key: "b", text: "A flagellated male gamete released before fertilization" },
                        { key: "c", text: "An elongated motile diploid stage crossing the mosquito gut wall" },
                        { key: "d", text: "A sporozoite waiting inside the mosquito salivary glands" }
                    ],
                    answer: "c",
                    explanation: "The fertilized diploid zygote elongates into a motile ookinete, which traverses the mosquito's midgut epithelium and subsequently forms an oocyst. It is not the male microgamete, a human blood-stage trophozoite or the later infective sporozoite."
                },
                {
                    id: "d37z108",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 108 },
                    text: "Which statement about Plasmodium falciparum is incorrect?",
                    options: [
                        { key: "a", text: "Its infected erythrocytes never adhere within small blood vessels" },
                        { key: "b", text: "It can cause severe malaria and serious microcirculatory obstruction" },
                        { key: "c", text: "It lacks the dormant liver hypnozoites responsible for true relapse" },
                        { key: "d", text: "Its mature gametocytes characteristically have a crescent shape" }
                    ],
                    answer: "a",
                    explanation: "Falciparum-infected erythrocytes can adhere to vascular endothelium and become sequestered in small vessels, contributing to severe disease. It does have an initial liver stage but lacks dormant hypnozoites. Absence of hypnozoites should not be confused with absence of all liver development."
                },
                {
                    id: "d37z109",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 109 },
                    text: "The Miller-Urey experiment passed electrical discharges through a mixture modelling a possible primitive atmosphere. Which biologically important class of small organic compounds was produced?",
                    options: [
                        { key: "a", text: "Complete nucleoproteins" },
                        { key: "b", text: "Amino acids" },
                        { key: "c", text: "Functional glycoproteins" },
                        { key: "d", text: "Intact lipoprotein particles" }
                    ],
                    answer: "b",
                    explanation: "The experiment produced amino acids and other small organic molecules from simpler chemicals under its chosen conditions. It supported the possibility of abiotic organic synthesis, not the spontaneous creation of living cells or complete complex proteins. Its gas mixture was a model, not proof of one exact early atmosphere."
                },
                {
                    id: "d37z110",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 110 },
                    text: "A fossil leaf retains a thin carbonaceous film outlining the organism, while most internal tissue structure has been lost under sediment pressure. What type of fossil is this?",
                    options: [
                        { key: "a", text: "Petrified fossil" },
                        { key: "b", text: "Mould fossil" },
                        { key: "c", text: "Compression fossil" },
                        { key: "d", text: "Impression fossil" }
                    ],
                    answer: "c",
                    explanation: "A compression fossil preserves flattened organic material, often as a carbon film. An impression preserves an imprint without that organic residue, while petrification involves mineral preservation or replacement of tissues. The retained carbonaceous film is the distinguishing clue."
                },
                {
                    id: "d37z111",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 111 },
                    text: "Which claim is incorrect for the Upper Palaeolithic modern humans traditionally called Cro-Magnon people?",
                    options: [
                        { key: "a", text: "Their ordinary food production depended on established crop agriculture" },
                        { key: "b", text: "They were anatomically modern members of Homo sapiens" },
                        { key: "c", text: "The name comes from a fossil locality in France" },
                        { key: "d", text: "They made sophisticated tools and are associated with symbolic art" }
                    ],
                    answer: "a",
                    explanation: "These early European modern humans were predominantly hunter-gatherers, not established agricultural societies. Systematic crop farming developed much later. Cro-Magnon is a historical label for some early modern human remains, not a separate species or an assertion that every living person descends directly from one fossil group."
                },
                {
                    id: "d37z112",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 112 },
                    text: "A bee uses the sun as a compass and maintains a constant angle to the direction of sunlight while travelling. Which term describes this orientation?",
                    options: [
                        { key: "a", text: "Klinotaxis" },
                        { key: "b", text: "Tropotaxis" },
                        { key: "c", text: "Telotaxis" },
                        { key: "d", text: "Menotaxis" }
                    ],
                    answer: "d",
                    explanation: "Menotaxis is orientation at a constant angle to a stimulus, as in sun-compass navigation. Klinotaxis uses successive comparisons, tropotaxis uses simultaneous comparison between receptors, and telotaxis involves selecting one stimulus source. Simply moving towards light would instead be positive phototaxis."
                },
                {
                    id: "d37z113",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 113 },
                    text: "Which pair represents in-situ conservation, protecting organisms within their natural habitats?",
                    options: [
                        { key: "a", text: "Botanical garden and seed bank" },
                        { key: "b", text: "Zoological park and tissue-culture collection" },
                        { key: "c", text: "National park and wildlife sanctuary" },
                        { key: "d", text: "Gene bank and captive-breeding centre" }
                    ],
                    answer: "c",
                    explanation: "National parks and wildlife sanctuaries conserve populations in their natural ecosystems. Botanical gardens, seed or gene banks and captive-breeding facilities protect material or organisms outside the original habitat and are forms of ex-situ conservation. A conservation label alone is not the same as a protected natural habitat."
                },
                {
                    id: "d37z114",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 114 },
                    text: "Which statement about the body wall of the commonly studied earthworm is incorrect?",
                    options: [
                        { key: "a", text: "Its muscle layers are outer longitudinal and inner circular" },
                        { key: "b", text: "Its outer cuticle is thin, noncellular and nonchitinous" },
                        { key: "c", text: "Its epidermis includes glandular and supporting cells" },
                        { key: "d", text: "Its inner surface is lined by coelomic epithelium" }
                    ],
                    answer: "a",
                    explanation: "The muscular layers are outer circular and inner longitudinal, not the reverse. The cuticle is a noncellular secretion over the epidermis and is not living cellular tissue. These qualifications remove the scan's additional misleading description of a living cuticle while retaining the body-wall concept."
                },
                {
                    id: "d37z115",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 115 },
                    text: "In the textbook earthworm Pheretima posthuma, where does the pair of intestinal caeca arise and in which direction does it extend?",
                    options: [
                        { key: "a", text: "From segment 22, extending posteriorly towards segment 26" },
                        { key: "b", text: "From segment 26, extending posteriorly towards segment 30" },
                        { key: "c", text: "From segment 25, extending anteriorly towards segment 20" },
                        { key: "d", text: "From segment 26, extending anteriorly towards segment 22" }
                    ],
                    answer: "d",
                    explanation: "A pair of short, conical intestinal caeca arises from the intestine in segment 26 and projects forwards towards segment 22. These diverticula contribute digestive secretions. Their point of origin must not be confused with the anterior limit they reach."
                },
                {
                    id: "d37z116",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 116 },
                    text: "A tissue graft is transferred between two genetically non-identical members of the same species. What is this graft called?",
                    options: [
                        { key: "a", text: "Autograft" },
                        { key: "b", text: "Allograft" },
                        { key: "c", text: "Isograft" },
                        { key: "d", text: "Xenograft" }
                    ],
                    answer: "b",
                    explanation: "An allograft is exchanged between genetically different individuals of the same species. An autograft stays within one individual, an isograft is between genetically identical individuals, and a xenograft crosses species. The same-species condition rules out xenograft."
                },
                {
                    id: "d37z117",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 117 },
                    text: "Why is diagnostic amniocentesis generally performed from about 15 weeks of pregnancy rather than very early in the first trimester?",
                    options: [
                        { key: "a", text: "Very early testing carries greater pregnancy-loss and fetal-complication risks" },
                        { key: "b", text: "All inherited chromosome abnormalities first arise after the fifteenth week" },
                        { key: "c", text: "The procedure always requires general anaesthesia before the fifteenth week" },
                        { key: "d", text: "Fetal chromosomes cannot be examined by any laboratory method before that time" }
                    ],
                    answer: "a",
                    explanation: "Early amniocentesis has higher risks, including pregnancy loss and certain fetal complications, than standard second-trimester testing. Genetic abnormalities do not first appear at 15 weeks, and general anaesthesia is not routinely required. The source's 12-week phrasing is updated to the usual timing threshold."
                },
                {
                    id: "d37z118",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 118 },
                    text: "During gastrulation, a sheet of cells rolls inward over an edge and then spreads along the inner surface of the embryo. Which morphogenetic movement is this?",
                    options: [
                        { key: "a", text: "Invagination" },
                        { key: "b", text: "Epiboly" },
                        { key: "c", text: "Involution" },
                        { key: "d", text: "Delamination" }
                    ],
                    answer: "c",
                    explanation: "Involution is inward rolling of a cell sheet over an edge, followed by movement along an internal surface. Invagination is local infolding of a sheet, epiboly is spreading over other cells, and delamination splits a sheet into layers. The rolling movement is the decisive feature."
                },
                {
                    id: "d37z119",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 119 },
                    text: "Which pair of features is characteristic of the ileum in the standard histological comparison with the duodenum?",
                    options: [
                        { key: "a", text: "Brunner's glands and broad leaf-like villi" },
                        { key: "b", text: "Peyer's patches and shorter club-shaped villi" },
                        { key: "c", text: "Gastric pits and oxyntic glands" },
                        { key: "d", text: "Numerous goblet cells and complete absence of villi" }
                    ],
                    answer: "b",
                    explanation: "The ileum characteristically has aggregated lymphoid nodules called Peyer's patches and relatively short villi, often described as club-shaped in introductory histology. Brunner's glands are a duodenal feature, gastric glands belong to the stomach, and absence of villi is characteristic of the large intestine."
                },
                {
                    id: "d37z120",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 120 },
                    text: "On which membrane in the cochlea does the organ of Corti rest?",
                    options: [
                        { key: "a", text: "Reissner's membrane" },
                        { key: "b", text: "Tympanic membrane" },
                        { key: "c", text: "Round-window membrane" },
                        { key: "d", text: "Basilar membrane" }
                    ],
                    answer: "d",
                    explanation: "The organ of Corti is the auditory sensory epithelium situated on the basilar membrane inside the cochlear duct. Sound-induced basilar-membrane motion deflects hair-cell stereocilia relative to neighbouring structures. Reissner's membrane separates the cochlear duct from scala vestibuli."
                },
                {
                    id: "d37z121",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 121 },
                    text: "Which hormone released from the posterior pituitary directly strengthens uterine contractions in the positive-feedback reflex of childbirth?",
                    options: [
                        { key: "a", text: "Prolactin" },
                        { key: "b", text: "Follicle-stimulating hormone" },
                        { key: "c", text: "Progesterone" },
                        { key: "d", text: "Oxytocin" }
                    ],
                    answer: "d",
                    explanation: "Oxytocin stimulates uterine smooth-muscle contraction. Cervical stretch promotes further oxytocin release, reinforcing contractions through positive feedback. It is synthesized in the hypothalamus and released from the posterior pituitary. Prolonged labour alone would not establish a specific hormone deficiency, so the physiological mechanism is asked directly."
                },
                {
                    id: "d37z122",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 122 },
                    text: "Which set contains only peptide hormones?",
                    options: [
                        { key: "a", text: "Glucagon, oxytocin and vasopressin" },
                        { key: "b", text: "Glucagon, thyroxine and adrenaline" },
                        { key: "c", text: "Cortisol, insulin and aldosterone" },
                        { key: "d", text: "Thyroxine, serotonin and testosterone" }
                    ],
                    answer: "a",
                    explanation: "Glucagon is a polypeptide, while oxytocin and vasopressin are nine-amino-acid peptide hormones. Thyroxine and adrenaline are amino-acid derivatives; cortisol, aldosterone and testosterone are steroids. Chemical origin must be distinguished from the gland that secretes a hormone."
                },
                {
                    id: "d37z123",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 123 },
                    text: "During spermiogenesis, the Golgi apparatus helps form which sperm structure that stores hydrolytic enzymes, including hyaluronidase, associated with fertilization?",
                    options: [
                        { key: "a", text: "Mitochondrial sheath" },
                        { key: "b", text: "Axial filament" },
                        { key: "c", text: "Acrosome" },
                        { key: "d", text: "Connecting piece" }
                    ],
                    answer: "c",
                    explanation: "The acrosome is the enzyme-containing cap over the anterior part of the sperm nucleus, formed with Golgi involvement during spermiogenesis. Enzyme proteins are synthesized by ribosomes and processed and packaged through the secretory pathway; the Golgi is not itself the site of protein synthesis, as the scan's wording might suggest."
                },
                {
                    id: "d37z124",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 124 },
                    text: "Which cell-secretion pair is incorrectly matched?",
                    options: [
                        { key: "a", text: "Gastric parietal cells - intrinsic factor" },
                        { key: "b", text: "Enterochromaffin (argentaffin) cells - secretin" },
                        { key: "c", text: "Gastric chief cells - pepsinogen" },
                        { key: "d", text: "Duodenal S cells - secretin" }
                    ],
                    answer: "b",
                    explanation: "Enterochromaffin cells are chiefly associated with serotonin secretion, while secretin is released by S cells in the proximal small intestine. Gastric parietal cells secrete intrinsic factor and acid; chief cells release pepsinogen. The source's broad gland descriptions are replaced with specific cell types."
                },
                {
                    id: "d37z125",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 125 },
                    text: "In systemic capillaries, bicarbonate leaves red blood cells while chloride enters them. This Hamburger phenomenon mainly supports which process?",
                    options: [
                        { key: "a", text: "Transport of oxygen from the lungs to tissues" },
                        { key: "b", text: "Direct production of ATP inside the red blood cell" },
                        { key: "c", text: "Transport of carbon dioxide from tissues to the lungs" },
                        { key: "d", text: "Formation of new red blood cells in bone marrow" }
                    ],
                    answer: "c",
                    explanation: "The chloride shift maintains electrical balance as bicarbonate, made from tissue CO2 inside red cells, enters plasma. Much of the blood's CO2 is transported in this bicarbonate form. The exchange reverses in the lungs as bicarbonate is converted back to CO2 for exhalation."
                },
                {
                    id: "d37z126",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 126 },
                    text: "Which arteries arise from the aortic root just above the aortic valve and supply the heart muscle?",
                    options: [
                        { key: "a", text: "Pulmonary arteries" },
                        { key: "b", text: "Coronary arteries" },
                        { key: "c", text: "Subclavian arteries" },
                        { key: "d", text: "Common carotid arteries" }
                    ],
                    answer: "b",
                    explanation: "The right and left coronary arteries arise from the aortic sinuses at the root of the ascending aorta and supply the myocardium. Pulmonary arteries leave the right ventricle, while the major vessels serving the head and upper limbs arise farther along the aortic arch."
                },
                {
                    id: "d37z127",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 127 },
                    text: "Which description best fits the <b>thin descending limb</b> of the loop of Henle?",
                    options: [
                        { key: "a", text: "Simple cuboidal epithelium; impermeable to water" },
                        { key: "b", text: "Simple squamous epithelium; impermeable to water" },
                        { key: "c", text: "Transitional epithelium; active filtration of blood" },
                        { key: "d", text: "Simple squamous epithelium; highly permeable to water" }
                    ],
                    answer: "d",
                    explanation: "The thin descending limb has a thin squamous lining and high water permeability, allowing water to leave into the hyperosmotic medulla. The thick ascending limb instead has cuboidal cells, transports salts and is poorly permeable to water. Specifying thin versus thick avoids treating every limb segment as identical."
                },
                {
                    id: "d37z128",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 128 },
                    text: "An ovulatory menstrual cycle lasts 35 days instead of 28 days, while its luteal phase remains about 14 days. Which phase has mainly lengthened?",
                    options: [
                        { key: "a", text: "Follicular phase" },
                        { key: "b", text: "Luteal phase" },
                        { key: "c", text: "Moment of ovulation" },
                        { key: "d", text: "Fertilization phase" }
                    ],
                    answer: "a",
                    explanation: "With a 14-day luteal phase, ovulation occurs about $35-14=21$ days after the cycle begins rather than around day 14. The extra time lies mainly in the pre-ovulatory follicular phase. Cycle length alone does not establish a diagnosis; the luteal-phase assumption is supplied explicitly."
                },
                {
                    id: "d37z129",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 129 },
                    text: "Which term describes a condition in which the heart cannot pump blood adequately to meet the body's needs, or can do so only at abnormally elevated filling pressures?",
                    options: [
                        { key: "a", text: "Cardiac arrhythmia" },
                        { key: "b", text: "Heart failure" },
                        { key: "c", text: "Myocardial infarction" },
                        { key: "d", text: "Physiological bradycardia" }
                    ],
                    answer: "b",
                    explanation: "Heart failure is the functional syndrome of inadequate cardiac performance described here. An arrhythmia is an abnormal rhythm and myocardial infarction is injury from interrupted coronary blood supply; either can contribute to failure, but neither is identical to its definition."
                },
                {
                    id: "d37z130",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 130 },
                    text: "Which set consists entirely of cranial nerves classified as motor nerves?",
                    options: [
                        { key: "a", text: "I, II and VIII" },
                        { key: "b", text: "V, VII and IX" },
                        { key: "c", text: "II, VIII and X" },
                        { key: "d", text: "III, IV and VI" }
                    ],
                    answer: "d",
                    explanation: "The oculomotor (III), trochlear (IV) and abducens (VI) nerves control eye movements and are classified as motor nerves. I, II and VIII are sensory, while V, VII, IX and X are mixed. Other motor cranial nerves include XI and XII, but they are not needed to identify the all-motor option."
                },
                {
                    id: "d37z131",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 131 },
                    text: "Which statement about action-potential propagation is incorrect?",
                    options: [
                        { key: "a", text: "A thinner axon conducts faster than a thicker axon with similar myelination" },
                        { key: "b", text: "Another action potential cannot start during the absolute refractory period" },
                        { key: "c", text: "Myelinated axons regenerate action potentials mainly at nodes of Ranvier" },
                        { key: "d", text: "Opening voltage-gated sodium channels contributes to rapid depolarization" }
                    ],
                    answer: "a",
                    explanation: "For comparable myelination and other conditions, larger axon diameter generally increases conduction speed by reducing internal resistance. Myelin further accelerates conduction through saltatory propagation. The absolute refractory period, associated with sodium-channel inactivation, prevents immediate re-excitation."
                },
                {
                    id: "d37z132",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 132 },
                    text: "Which statement about the human eye is incorrect?",
                    options: [
                        { key: "a", text: "Muller glial cells provide support within the retina" },
                        { key: "b", text: "The ciliary muscle helps alter lens curvature for accommodation" },
                        { key: "c", text: "The central foveola contains abundant rods mixed with its cones" },
                        { key: "d", text: "Retinal photoreceptors convert light into changes in electrical signalling" }
                    ],
                    answer: "c",
                    explanation: "The centre of the fovea, the foveola, is densely packed with cones and is rod-free. This specialization supports high visual acuity in bright light. Rods become abundant away from the centre, while Muller cells are retinal supporting glia rather than photoreceptors."
                },
                {
                    id: "d37z133",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 133 },
                    text: "Which hepatitis virus depends on hepatitis B surface antigen for assembly and transmission of infectious particles?",
                    options: [
                        { key: "a", text: "Hepatitis D virus" },
                        { key: "b", text: "Hepatitis A virus" },
                        { key: "c", text: "Hepatitis C virus" },
                        { key: "d", text: "Hepatitis E virus" }
                    ],
                    answer: "a",
                    explanation: "Hepatitis D virus uses hepatitis B surface antigen to form its envelope and produce infectious particles. It therefore occurs with hepatitis B as coinfection or superinfection. The source mixes hepatitis-virus labels; the dependency is specified directly here. Hepatitis E does not require hepatitis B."
                },
                {
                    id: "d37z134",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 134 },
                    text: "In the usual pharmacological classification of first-line anti-tuberculosis drugs, which is primarily bacteriostatic rather than bactericidal?",
                    options: [
                        { key: "a", text: "Isoniazid" },
                        { key: "b", text: "Rifampicin" },
                        { key: "c", text: "Ethambutol" },
                        { key: "d", text: "Pyrazinamide" }
                    ],
                    answer: "c",
                    explanation: "Ethambutol is traditionally classified as primarily bacteriostatic, inhibiting mycobacterial cell-wall synthesis. Isoniazid, rifampicin and pyrazinamide have bactericidal activity against susceptible organisms in their relevant conditions. This is a drug-classification question, not a recommendation for an individual treatment regimen."
                },
                {
                    id: "d37z135",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 135 },
                    text: "Which is <b>not</b> a characteristic feature traditionally associated with uncomplicated typhoid fever in textbook descriptions?",
                    options: [
                        { key: "a", text: "A gradually rising, step-ladder fever pattern" },
                        { key: "b", text: "Persistent marked neutrophilic leukocytosis" },
                        { key: "c", text: "Relative bradycardia during fever" },
                        { key: "d", text: "Enlargement of the liver in some patients" }
                    ],
                    answer: "b",
                    explanation: "Typhoid is classically associated with a normal or reduced white-cell count rather than persistent marked neutrophilic leukocytosis. Step-ladder fever, relative bradycardia and hepatomegaly are traditional features, but none is present in every patient. Laboratory confirmation is needed rather than diagnosis from one listed feature."
                },
                {
                    id: "d37z136",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 136 },
                    text: "Which immunoglobulin is usually pentameric in plasma and is especially effective at directly agglutinating red blood cells because of its high valency?",
                    options: [
                        { key: "a", text: "IgA" },
                        { key: "b", text: "IgG" },
                        { key: "c", text: "IgD" },
                        { key: "d", text: "IgM" }
                    ],
                    answer: "d",
                    explanation: "Secreted IgM is usually a pentamer with multiple antigen-binding sites, making it an efficient agglutinating antibody. Many natural ABO antibodies are IgM. IgG can bind red-cell antigens, but its smaller structure makes direct agglutination less efficient under many standard test conditions."
                },
                {
                    id: "d37z137",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 137 },
                    text: "In a relaxed skeletal-muscle sarcomere, which contractile filaments occupy the H zone?",
                    options: [
                        { key: "a", text: "Thin actin filaments only" },
                        { key: "b", text: "Overlapping actin and myosin filaments" },
                        { key: "c", text: "Thick myosin filaments only" },
                        { key: "d", text: "Neither actin nor myosin filaments" }
                    ],
                    answer: "c",
                    explanation: "The H zone is the central region of the A band where thick myosin filaments are not overlapped by thin actin filaments. It narrows as contraction increases overlap. The question concerns contractile filaments; other structural proteins can also occur in this region."
                },
                {
                    id: "d37z138",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 138 },
                    text: "Which connective tissue forms a delicate supporting meshwork in organs such as lymph nodes and bone marrow?",
                    options: [
                        { key: "a", text: "Dense regular connective tissue" },
                        { key: "b", text: "Adipose connective tissue" },
                        { key: "c", text: "Hyaline cartilage" },
                        { key: "d", text: "Reticular connective tissue" }
                    ],
                    answer: "d",
                    explanation: "Reticular connective tissue contains a fine network of reticular fibres, mainly type III collagen, supporting many free cells in lymphoid and haemopoietic organs. Dense regular tissue is organized into parallel strong bundles, adipose stores fat, and cartilage has a different supporting matrix."
                },
                {
                    id: "d37z139",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 139 },
                    text: "Which ganglia contain the cell bodies of primary sensory neurons carrying information from the body into the spinal cord?",
                    options: [
                        { key: "a", text: "Dorsal root ganglia" },
                        { key: "b", text: "Sympathetic chain ganglia" },
                        { key: "c", text: "Parasympathetic terminal ganglia" },
                        { key: "d", text: "Coeliac autonomic ganglia" }
                    ],
                    answer: "a",
                    explanation: "Dorsal root ganglia contain primary sensory neuron cell bodies, typically pseudounipolar. Sympathetic and parasympathetic ganglia contain autonomic motor neuron cell bodies. The source also lists a true statement about sympathetic motor ganglia, so this version asks for the sensory location directly."
                },
                {
                    id: "d37z140",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 140 },
                    text: "Which epithelial type lines much of the uterine tube and helps move an ovum or early embryo towards the uterus?",
                    options: [
                        { key: "a", text: "Nonkeratinized stratified squamous epithelium" },
                        { key: "b", text: "Simple columnar epithelium with ciliated cells" },
                        { key: "c", text: "Pseudostratified ciliated respiratory epithelium" },
                        { key: "d", text: "Transitional epithelium with umbrella cells" }
                    ],
                    answer: "b",
                    explanation: "The uterine tube has simple columnar epithelium containing ciliated and secretory cells. Ciliary beating assists transport towards the uterus, together with smooth-muscle contractions. It is not the pseudostratified ciliated epithelium characteristic of much of the conducting respiratory tract."
                }
            ]
        },
        {
            id: "botany37",
            name: "Botany",
            subject: "Botany",
            accent: "emerald",
            blurb: "Cell biology, biodiversity, plant physiology, anatomy, ecology and genetics.",
            questions: [
                {
                    id: "d37b141",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 141 },
                    text: "In brown adipose tissue, uncoupling protein allows oxidation to release energy as heat instead of capturing all of it as ATP. Which organelle is the main site of this thermogenesis?",
                    options: [
                        { key: "a", text: "Nucleus" },
                        { key: "b", text: "Ribosome" },
                        { key: "c", text: "Mitochondrion" },
                        { key: "d", text: "Golgi apparatus" }
                    ],
                    answer: "c",
                    explanation: "Uncoupling protein 1 in the inner mitochondrial membrane allows protons to return without driving ATP synthase. Energy from the proton gradient is released as heat. This mitochondrial mechanism contributes to non-shivering thermogenesis, rather than making the nucleus or ribosomes the main heat-generating organelle."
                },
                {
                    id: "d37b142",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 142 },
                    text: "A secretory protein is synthesized on rough-ER-associated ribosomes and carried in transport vesicles to the Golgi apparatus. Which Golgi face normally receives these incoming vesicles?",
                    options: [
                        { key: "a", text: "Cis face" },
                        { key: "b", text: "Trans face" },
                        { key: "c", text: "Trans-Golgi exit network" },
                        { key: "d", text: "Secretory-vesicle outer surface" }
                    ],
                    answer: "a",
                    explanation: "The cis face is the receiving side of the Golgi, commonly oriented towards the ER. Proteins then pass through Golgi compartments for modification and sorting before leaving from the trans side. Ribosomes synthesize proteins; they do not transport proteins between the ER and Golgi."
                },
                {
                    id: "d37b143",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 143 },
                    text: "Which description correctly distinguishes a typical bacterial flagellum from a motile eukaryotic cilium?",
                    options: [
                        { key: "a", text: "Tubulin filament with a 9+2 microtubule axoneme" },
                        { key: "b", text: "Flagellin filament arranged as nine microtubule doublets" },
                        { key: "c", text: "Tubulin filament with a 9+0 microtubule axoneme" },
                        { key: "d", text: "Flagellin filament without a microtubule axoneme" }
                    ],
                    answer: "d",
                    explanation: "A typical bacterial flagellar filament is made of flagellin and rotates using a basal motor. It does not have the microtubule axoneme of eukaryotic cilia. Neither 9+2 nor 9+0 is the correct arrangement for bacterial flagellin, so the scan's prokaryotic arrangement choices are corrected."
                },
                {
                    id: "d37b144",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 144 },
                    text: "A gamete with an extra chromosome 21 is formed by meiotic nondisjunction, later producing a trisomy-21 zygote. During which stage does the failure of chromosome separation occur?",
                    options: [
                        { key: "a", text: "Prophase" },
                        { key: "b", text: "Anaphase" },
                        { key: "c", text: "Interphase" },
                        { key: "d", text: "Metaphase" }
                    ],
                    answer: "b",
                    explanation: "Separation occurs at anaphase: homologous chromosomes separate in anaphase I and sister chromatids in anaphase II. Failure at either division can create an abnormal gamete. Most trisomy-21 cases involve nondisjunction, though Down syndrome can also have other chromosomal mechanisms."
                },
                {
                    id: "d37b145",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 145 },
                    text: "A diploid cell has $2n=24$ chromosomes and DNA content $2C$ in G1. After DNA replication and completion of meiosis I, what are the chromosome number and DNA content in each daughter cell?",
                    options: [
                        { key: "a", text: "12 chromosomes and 2C DNA" },
                        { key: "b", text: "24 chromosomes and 2C DNA" },
                        { key: "c", text: "12 chromosomes and C DNA" },
                        { key: "d", text: "24 chromosomes and 4C DNA" }
                    ],
                    answer: "a",
                    explanation: "Replication raises DNA from 2C to 4C without changing chromosome number. Meiosis I separates homologous chromosomes, producing cells with 12 chromosomes and 2C DNA each. Each chromosome still consists of two sister chromatids; the DNA content falls to C only after meiosis II."
                },
                {
                    id: "d37b146",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 146 },
                    text: "Which sequence places the listed plant taxonomic ranks from broader to narrower? Intermediate ranks may be omitted.",
                    options: [
                        { key: "a", text: "Kingdom > Class > Division > Family" },
                        { key: "b", text: "Division > Order > Class > Genus" },
                        { key: "c", text: "Division > Class > Order > Genus" },
                        { key: "d", text: "Class > Family > Species > Genus" }
                    ],
                    answer: "c",
                    explanation: "The standard descending hierarchy is kingdom, division or phylum, class, order, family, genus and species. Division, class, order and genus therefore appear in the correct relative order, with family omitted. The question explicitly allows such an omission."
                },
                {
                    id: "d37b147",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 147 },
                    text: "Which virus-to-overall-virion-shape match is incorrect in the usual introductory classification?",
                    options: [
                        { key: "a", text: "Rabies virus - bullet-shaped" },
                        { key: "b", text: "Influenza virus - rigid spiral-shaped virion" },
                        { key: "c", text: "Tobacco mosaic virus - rod-shaped" },
                        { key: "d", text: "Poxvirus - brick-shaped" }
                    ],
                    answer: "b",
                    explanation: "Influenza virions are enveloped and pleomorphic, often approximately spherical or filamentous, not rigid spiral-shaped particles. Their nucleocapsids have helical organization, which must not be confused with the whole virion's outline. The other matches are the standard characteristic shapes."
                },
                {
                    id: "d37b148",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 148 },
                    text: "Roots grow obliquely from the lower stem nodes of maize and sugarcane into the soil, providing mechanical support. These are:",
                    options: [
                        { key: "a", text: "Pneumatophores" },
                        { key: "b", text: "Prop roots" },
                        { key: "c", text: "Tuberous roots" },
                        { key: "d", text: "Stilt roots" }
                    ],
                    answer: "d",
                    explanation: "Stilt roots arise from lower stem nodes and enter the soil obliquely, bracing the stem. Prop roots such as those of banyan descend from branches. Pneumatophores aid gas exchange in waterlogged soil, while tuberous roots are modified mainly for food storage."
                },
                {
                    id: "d37b149",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 149 },
                    text: "A dry fruit develops from a single carpel of a superior, unilocular ovary and opens along only one suture. What type of fruit is it?",
                    options: [
                        { key: "a", text: "Legume" },
                        { key: "b", text: "Siliqua" },
                        { key: "c", text: "Follicle" },
                        { key: "d", text: "Capsule" }
                    ],
                    answer: "c",
                    explanation: "A follicle is a dry dehiscent fruit derived from one carpel and opening along one suture. A legume also comes from one carpel but usually opens along both sutures. Siliquae and typical capsules develop from more than one fused carpel."
                },
                {
                    id: "d37b150",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 150 },
                    text: "Which description and floral formula fit a typical pigeon pea flower, Cajanus cajan? Parentheses denote fusion of members.",
                    options: [
                        { key: "a", text: "Actinomorphic, bisexual; K(5), C(5), A5, G(2); superior ovary" },
                        { key: "b", text: "Zygomorphic, bisexual; K(5), C1+2+(2), A(9)+1, G1; superior ovary" },
                        { key: "c", text: "Actinomorphic, bisexual; K2+2, C4, A2+4, G(2); superior ovary" },
                        { key: "d", text: "Zygomorphic, bisexual; K(5), C1+2+(2), A(9)+1, G1; inferior ovary" }
                    ],
                    answer: "b",
                    explanation: "Pigeon pea is a papilionoid legume with a zygomorphic bisexual flower, fused sepals, one standard petal, two wings and two fused keel petals. Its stamens are diadelphous, nine joined and one free, and its single-carpellary ovary is superior. Writing ovary position in words avoids an easily lost underline in the scanned formula."
                },
                {
                    id: "d37b151",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 151 },
                    text: "A guide tries to identify poisonous mushrooms using only cap shape, a volva, milky juice or bruising colour. Which assessment of these general rules is scientifically sound?",
                    options: [
                        { key: "a", text: "A pointed cap alone reliably identifies every poisonous species" },
                        { key: "b", text: "Milky juice alone guarantees that a mushroom is safe to eat" },
                        { key: "c", text: "Absence of a volva alone excludes all dangerously poisonous species" },
                        { key: "d", text: "No such single visible trait reliably establishes mushroom edibility" }
                    ],
                    answer: "d",
                    explanation: "These folk rules are not reliable tests of toxicity: edible and poisonous species can share visible traits, and dangerous species do not all look alike. Reliable identification requires species-level expertise. The scan's universal appearance rules are corrected rather than taught as foraging guidance; never taste an unidentified mushroom."
                },
                {
                    id: "d37b152",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 152 },
                    text: "Which listed alga is a red alga that stores floridean starch as a reserve food?",
                    options: [
                        { key: "a", text: "Batrachospermum" },
                        { key: "b", text: "Ulothrix" },
                        { key: "c", text: "Sargassum" },
                        { key: "d", text: "Macrocystis" }
                    ],
                    answer: "a",
                    explanation: "Batrachospermum belongs to the red algae, whose characteristic reserve is floridean starch. Ulothrix is a green alga, while Sargassum and Macrocystis are brown algae with different principal storage products, including laminarin and mannitol."
                },
                {
                    id: "d37b153",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 153 },
                    text: "In the standard account of fern fertilization, which substance in the archegonial secretion attracts motile antherozoids by chemotaxis?",
                    options: [
                        { key: "a", text: "Sucrose" },
                        { key: "b", text: "Malic acid" },
                        { key: "c", text: "Glucose" },
                        { key: "d", text: "Oxalic acid" }
                    ],
                    answer: "b",
                    explanation: "Malic acid in the archegonial secretion is the standard fern example of a chemical attractant for antherozoids. Their directed swimming towards the egg is positive chemotaxis. Water is still needed as the medium through which the motile gametes move."
                },
                {
                    id: "d37b154",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 154 },
                    text: "In a typical winged Pinus seed, the membranous seed wing develops from tissue associated with which structure?",
                    options: [
                        { key: "a", text: "Outer layer of the ovule's integument" },
                        { key: "b", text: "Inner layer of the ovule's integument" },
                        { key: "c", text: "Bract scale of the female cone" },
                        { key: "d", text: "Ovuliferous scale of the female cone" }
                    ],
                    answer: "d",
                    explanation: "The typical pine seed wing is derived from tissue of the ovuliferous, or seed-bearing, scale. The ovule's integument forms the seed coat, while the bract scale is a distinct cone structure. Not every pine has equally developed wings, so the typical winged seed is specified."
                },
                {
                    id: "d37b155",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 155 },
                    text: "Under the classical relation $DPD=OP-TP$, a plant cell becomes fully flaccid at incipient plasmolysis. Which relation is correct? Here OP is osmotic pressure and TP is turgor pressure.",
                    options: [
                        { key: "a", text: "$TP=0$ and $DPD=OP$" },
                        { key: "b", text: "$DPD=0$ and $TP=OP$" },
                        { key: "c", text: "$OP=0$ and $TP>0$" },
                        { key: "d", text: "$TP=OP$ and $DPD=OP$" }
                    ],
                    answer: "a",
                    explanation: "At incipient plasmolysis, the cell has lost its turgor, so $TP=0$. Substituting into $DPD=OP-TP$ gives $DPD=OP$. A fully turgid cell, by contrast, can have $TP=OP$ and zero DPD. The source's multiple false choices are avoided by asking for the correct paired relation."
                },
                {
                    id: "d37b156",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 156 },
                    text: "In the classic ion-accumulation model of stomatal opening, uptake of which ion into guard cells is especially important in lowering their osmotic potential?",
                    options: [
                        { key: "a", text: "Na<sup>+</sup>" },
                        { key: "b", text: "Mg<sup>2+</sup>" },
                        { key: "c", text: "K<sup>+</sup>" },
                        { key: "d", text: "Fe<sup>3+</sup>" }
                    ],
                    answer: "c",
                    explanation: "Potassium uptake, balanced by anions such as chloride or malate, raises guard-cell solute concentration. Water enters osmotically, turgor increases and the stomatal pore opens. Sugars and other regulatory signals also contribute, so potassium is not described as the sole controller."
                },
                {
                    id: "d37b157",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 157 },
                    text: "In a short-term comparison with all instantaneous conditions otherwise identical, which factor mainly changes the time available for photosynthesis each day rather than its rate at that moment?",
                    options: [
                        { key: "a", text: "Light intensity at the leaf" },
                        { key: "b", text: "Wavelength composition of the light" },
                        { key: "c", text: "Temperature of the leaf" },
                        { key: "d", text: "Duration of the daily light period" }
                    ],
                    answer: "d",
                    explanation: "Photoperiod determines how long illumination is available and therefore can change total daily photosynthesis. Intensity, light quality and temperature can directly alter the instantaneous rate. Longer-term acclimation to day length is a separate effect, excluded by the short-term, otherwise-identical comparison."
                },
                {
                    id: "d37b158",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 158 },
                    text: "At complex IV, the terminal complex of the mitochondrial electron-transport chain, which reduction occurs?",
                    options: [
                        { key: "a", text: "NAD<sup>+</sup> is reduced to NADH" },
                        { key: "b", text: "O<sub>2</sub> is reduced to H<sub>2</sub>O" },
                        { key: "c", text: "CO<sub>2</sub> is reduced to glucose" },
                        { key: "d", text: "FAD is reduced to FADH<sub>2</sub>" }
                    ],
                    answer: "b",
                    explanation: "Complex IV, cytochrome c oxidase, transfers electrons ultimately to molecular oxygen, the terminal acceptor. Oxygen combines with electrons and protons to form water at the haem-copper catalytic centre. NADH and FADH2 donate reducing equivalents earlier in the respiratory chain."
                },
                {
                    id: "d37b159",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 159 },
                    text: "During germination of a cereal grain, which plant hormone from the embryo stimulates the aleurone layer to produce alpha-amylase?",
                    options: [
                        { key: "a", text: "Abscisic acid" },
                        { key: "b", text: "Auxin" },
                        { key: "c", text: "Gibberellin" },
                        { key: "d", text: "Ethylene" }
                    ],
                    answer: "c",
                    explanation: "Gibberellins signal the aleurone cells to synthesize hydrolytic enzymes, including alpha-amylase. These mobilize starch reserves in the endosperm to support the growing embryo. Abscisic acid generally favours dormancy and opposes aspects of this germination response."
                },
                {
                    id: "d37b160",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 160 },
                    text: "A destarched plant is exposed to light. A leaf is then briefly boiled in water for a starch test. Which treatment should follow so the iodine colour can be observed clearly?",
                    options: [
                        { key: "a", text: "Remove chlorophyll with warm ethanol, rinse, then add iodine" },
                        { key: "b", text: "Add iodine to the still-green leaf, then extract all pigments" },
                        { key: "c", text: "Remove chlorophyll with cold water, then add Benedict's solution" },
                        { key: "d", text: "Coat the leaf with oil, rinse with water, then add iodine" }
                    ],
                    answer: "a",
                    explanation: "Ethanol removes chlorophyll, allowing the blue-black iodine-starch colour to be seen without the green pigment masking it. The leaf is rinsed to soften it before iodine is applied. Ethanol is heated indirectly in a water bath because it is flammable; destarching first removes pre-existing starch."
                },
                {
                    id: "d37b161",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 161 },
                    text: "A hybrid shows superior growth, yield or vigour compared with its parental comparison group. The phenomenon called heterosis is also known as:",
                    options: [
                        { key: "a", text: "Hybrid vigour" },
                        { key: "b", text: "Inbreeding depression" },
                        { key: "c", text: "Heterostyly" },
                        { key: "d", text: "Vegetative propagation" }
                    ],
                    answer: "a",
                    explanation: "Heterosis means hybrid vigour, an improvement in selected traits of a hybrid relative to a defined parental comparison. It is not simply another name for crossing or for heterostyly, which concerns floral style and stamen lengths. Inbreeding depression describes a loss of vigour associated with inbreeding."
                },
                {
                    id: "d37b162",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 162 },
                    text: "Which root association is used as a biofertilizer because its hyphae improve phosphate uptake and can help plants acquire water from a larger volume of soil?",
                    options: [
                        { key: "a", text: "Rhizobium in legume nodules" },
                        { key: "b", text: "Anabaena associated with Azolla" },
                        { key: "c", text: "Mycorrhizal fungi associated with roots" },
                        { key: "d", text: "Free-living nitrogen-fixing Azotobacter" }
                    ],
                    answer: "c",
                    explanation: "Mycorrhizal fungal hyphae explore soil beyond the root's immediate depletion zone, improving access to phosphate and often water. They do not manufacture the element phosphorus. Some bacteria also mobilize phosphate, so the hyphal root association is specified instead of treating all bacterial biofertilizers as incapable of phosphorus benefits."
                },
                {
                    id: "d37b163",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 163 },
                    text: "The disarmed Ti plasmid used to transfer genes into many plant cells is derived from which bacterium?",
                    options: [
                        { key: "a", text: "Bacillus thuringiensis" },
                        { key: "b", text: "Agrobacterium tumefaciens" },
                        { key: "c", text: "Salmonella Typhimurium" },
                        { key: "d", text: "Lactobacillus acidophilus" }
                    ],
                    answer: "b",
                    explanation: "Agrobacterium tumefaciens naturally transfers part of its Ti plasmid into plant cells. Removing disease-causing functions allows that transfer system to be used as a vector. Bacillus thuringiensis is a source of insecticidal genes, but it is not the source of the Ti-plasmid vector."
                },
                {
                    id: "d37b164",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 164 },
                    text: "Interbreeding populations within one species have heritable genetic differences associated with adaptation to different local habitats, even though they may look similar. These populations are called:",
                    options: [
                        { key: "a", text: "Ecads" },
                        { key: "b", text: "Ecological equivalents" },
                        { key: "c", text: "Keystone species" },
                        { key: "d", text: "Ecotypes" }
                    ],
                    answer: "d",
                    explanation: "Ecotypes are genetically differentiated populations adapted to particular environments within a species. Ecads are environmentally induced forms without the same heritable genetic distinction. The source's use of separate species is clarified to populations of one species, preserving the interbreeding premise."
                },
                {
                    id: "d37b165",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 165 },
                    text: "Which ecological term specifically denotes plants adapted to sandy habitats such as sand dunes?",
                    options: [
                        { key: "a", text: "Oxylophytes" },
                        { key: "b", text: "Psammophytes" },
                        { key: "c", text: "Hydrophytes" },
                        { key: "d", text: "Halophytes" }
                    ],
                    answer: "b",
                    explanation: "Psammophytes are plants of sandy habitats. Hydrophytes are adapted to water, halophytes to saline conditions and oxylophytes to acidic soils. A dune plant may also show drought adaptations, but psammophyte is the term that specifically identifies the sandy substrate."
                },
                {
                    id: "d37b166",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 166 },
                    text: "In some Acacia species the leaf lamina is reduced and the petiole becomes a flattened, photosynthetic phyllode. This is commonly interpreted as which adaptation?",
                    options: [
                        { key: "a", text: "Hydrophytic adaptation" },
                        { key: "b", text: "Halophytic adaptation" },
                        { key: "c", text: "Parasitic adaptation" },
                        { key: "d", text: "Xerophytic adaptation" }
                    ],
                    answer: "d",
                    explanation: "Phyllodes can maintain photosynthesis while reducing the water loss associated with a large thin lamina, making them a common xerophytic adaptation. A phyllode is a modified petiole or rachis, not simply a leaf blade given a new name. The stem-based analogue is a phylloclade."
                },
                {
                    id: "d37b167",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 167 },
                    text: "Which ecological term is incorrectly matched with its meaning?",
                    options: [
                        { key: "a", text: "Ecesis - the entire sequence of community replacement during succession" },
                        { key: "b", text: "Niche - an organism's ecological role and resource relationships" },
                        { key: "c", text: "Standing crop - living biomass present at a particular time" },
                        { key: "d", text: "Grazing food chain - a feeding chain beginning with living producers" }
                    ],
                    answer: "a",
                    explanation: "Ecesis is the successful establishment of a species in a new area, one step involved in succession. It is not the whole succession process. Niche concerns ecological role, standing crop is a biomass snapshot, and a grazing food chain begins with living photosynthetic producers."
                },
                {
                    id: "d37b168",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 168 },
                    text: "In the traditional terminology of apomictic development, an embryo arises from a synergid or antipodal cell of the embryo sac rather than from the egg, without fertilization. This is called:",
                    options: [
                        { key: "a", text: "Apospory" },
                        { key: "b", text: "Parthenocarpy" },
                        { key: "c", text: "Apogamy" },
                        { key: "d", text: "Polyspermy" }
                    ],
                    answer: "c",
                    explanation: "Apogamy is embryo or sporophyte development from a gametophytic cell other than the egg without fertilization. Parthenogenesis specifically uses an unfertilized egg, while parthenocarpy is fruit development without fertilization. Embryos from nucellus or integument outside the embryo sac are adventive embryos."
                },
                {
                    id: "d37b169",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 169 },
                    text: "Which claim about usual post-fertilization development in angiosperms is incorrect?",
                    options: [
                        { key: "a", text: "The ovary wall develops into the pericarp" },
                        { key: "b", text: "The ovule's integuments contribute to the seed coat" },
                        { key: "c", text: "The zygote develops into the embryo" },
                        { key: "d", text: "The funicle disappears as soon as fertilization occurs" }
                    ],
                    answer: "d",
                    explanation: "The funicle is the stalk attaching an ovule and then the developing seed to the placenta; it does not necessarily disappear as soon as fertilization occurs. The ovary wall forms pericarp, integuments form seed-coat tissues and the zygote forms the embryo. Detachment at maturity is a separate event."
                },
                {
                    id: "d37b170",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 170 },
                    text: "The hypodermis of a typical maize stem is mainly composed of which tissue?",
                    options: [
                        { key: "a", text: "Sclerenchyma" },
                        { key: "b", text: "Collenchyma" },
                        { key: "c", text: "Aerenchyma" },
                        { key: "d", text: "Chlorenchyma" }
                    ],
                    answer: "a",
                    explanation: "A typical monocot stem such as maize has a sclerenchymatous hypodermis, providing mechanical strength below the epidermis. Many young dicot stems instead have a collenchymatous hypodermis. The named example avoids treating this contrast as universal across every monocot and dicot."
                },
                {
                    id: "d37b171",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 171 },
                    text: "Using the definition of the stele as tissues internal to the endodermis, how many of these listed structures belong to a typical stem stele when present: vascular bundles, pericycle, endodermis, pith, cortex and epidermis?",
                    options: [
                        { key: "a", text: "2" },
                        { key: "b", text: "4" },
                        { key: "c", text: "3" },
                        { key: "d", text: "5" }
                    ],
                    answer: "c",
                    explanation: "Vascular bundles, pericycle and pith are internal to the endodermal boundary and belong to the stele when present: three listed structures. Endodermis is the boundary layer under the supplied definition, while cortex and epidermis lie outside it. Some stele types lack pith, hence the qualification."
                },
                {
                    id: "d37b172",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 172 },
                    text: "In a woody dicot stem undergoing normal secondary growth, where is the youngest secondary xylem located?",
                    options: [
                        { key: "a", text: "Immediately outside the vascular cambium" },
                        { key: "b", text: "Immediately inside the vascular cambium" },
                        { key: "c", text: "At the centre of the pith" },
                        { key: "d", text: "Immediately inside the outer epidermis" }
                    ],
                    answer: "b",
                    explanation: "Vascular cambium produces secondary xylem towards the inside and secondary phloem towards the outside. The most recently produced xylem therefore lies immediately inside the cambium, while progressively older xylem lies farther inward. The newest phloem occupies the opposite side."
                },
                {
                    id: "d37b173",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 173 },
                    text: "An RNA strand is synthesized using one strand of DNA as the template. What is this process called?",
                    options: [
                        { key: "a", text: "Translation" },
                        { key: "b", text: "DNA replication" },
                        { key: "c", text: "Transcription" },
                        { key: "d", text: "Reverse transcription" }
                    ],
                    answer: "c",
                    explanation: "Transcription makes RNA from a DNA template, usually using RNA polymerase. Translation uses messenger RNA to direct protein synthesis, DNA replication makes DNA from DNA, and reverse transcription makes DNA using RNA as the template. The direction of information transfer distinguishes them."
                },
                {
                    id: "d37b174",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 174 },
                    text: "Suppose the pea genes for cotyledon colour and seed shape had been so tightly linked that no recombinants appeared in Mendel's crosses. Which principle would those two traits fail to demonstrate?",
                    options: [
                        { key: "a", text: "Dominance" },
                        { key: "b", text: "Independent assortment" },
                        { key: "c", text: "Segregation of alleles at one locus" },
                        { key: "d", text: "Fusion of gametes during fertilization" }
                    ],
                    answer: "b",
                    explanation: "Very tightly linked genes tend to travel together rather than assort independently. Their joint inheritance would therefore fail to show independent assortment. Alleles at each individual locus can still segregate normally, and dominance relationships are not abolished by physical linkage."
                },
                {
                    id: "d37b175",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 175 },
                    text: "Which condition is the classic example of a single-base substitution in the beta-globin gene replacing glutamic acid with valine?",
                    options: [
                        { key: "a", text: "Down syndrome" },
                        { key: "b", text: "Turner syndrome" },
                        { key: "c", text: "Klinefelter syndrome" },
                        { key: "d", text: "Sickle-cell anaemia" }
                    ],
                    answer: "d",
                    explanation: "The common sickle-cell mutation changes a beta-globin codon from GAG to GTG in coding DNA, replacing glutamic acid with valine. This is a point mutation. The other listed syndromes are associated with changes in chromosome number rather than this single-base substitution."
                },
                {
                    id: "d37b176",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 176 },
                    text: "A woman with normal colour vision whose father is red-green colourblind marries a red-green colourblind man. Assuming simple X-linked recessive inheritance and equal probabilities of sons and daughters, what fraction of their children is expected to be colourblind?",
                    options: [
                        { key: "a", text: "50%" },
                        { key: "b", text: "25%" },
                        { key: "c", text: "75%" },
                        { key: "d", text: "100%" }
                    ],
                    answer: "a",
                    explanation: "The unaffected daughter of an affected father must be a carrier, $X^NX^c$. Her partner is $X^cY$. Their equally likely offspring are a carrier daughter, affected daughter, unaffected son and affected son. Two of the four are affected, giving 50% overall."
                },
                {
                    id: "d37b177",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 177 },
                    text: "Assume complete dominance at two independently inherited loci A/a and B/b. Which cross gives an overall 3:1 phenotypic ratio because only one locus segregates?",
                    options: [
                        { key: "a", text: "AaBb x AaBb" },
                        { key: "b", text: "Aabb x Aabb" },
                        { key: "c", text: "AaBb x aabb" },
                        { key: "d", text: "AABB x aaBB" }
                    ],
                    answer: "b",
                    explanation: "In Aabb x Aabb, the B locus is fixed as bb, while Aa x Aa produces three dominant-A phenotypes for each recessive aa phenotype. AaBb x AaBb instead gives 9:3:3:1, the double testcross gives 1:1:1:1, and AABB x aaBB gives a single phenotype."
                },
                {
                    id: "d37b178",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 178 },
                    text: "A karyotype contains one extra copy of a single chromosome, giving $2n+1$ rather than an extra complete chromosome set. What is this condition called?",
                    options: [
                        { key: "a", text: "Trisomy" },
                        { key: "b", text: "Monosomy" },
                        { key: "c", text: "Triploidy" },
                        { key: "d", text: "Tetraploidy" }
                    ],
                    answer: "a",
                    explanation: "Trisomy is the presence of three copies of one chromosome in an otherwise diploid complement, written $2n+1$. Monosomy is $2n-1$. Triploidy and tetraploidy involve entire extra sets, giving 3n or 4n, not just one additional chromosome."
                },
                {
                    id: "d37b179",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 179 },
                    text: "Which polysaccharide-to-monomer match is incorrect?",
                    options: [
                        { key: "a", text: "Cellulose - beta-D-glucose units" },
                        { key: "b", text: "Starch - alpha-D-glucose units" },
                        { key: "c", text: "Glycogen - beta-D-glucose units" },
                        { key: "d", text: "Inulin - principally fructose units" }
                    ],
                    answer: "c",
                    explanation: "Glycogen is made from alpha-D-glucose units with alpha-1,4 main-chain and alpha-1,6 branch linkages. Cellulose instead has beta-1,4-linked glucose. Inulin is a fructan, principally made of fructose, and can contain a terminal glucose, so that description is qualified."
                },
                {
                    id: "d37b180",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 180 },
                    text: "In the classical classification into simple, compound and derived lipids, free fatty acids obtained by lipid hydrolysis are placed under:",
                    options: [
                        { key: "a", text: "Simple lipids" },
                        { key: "b", text: "Compound lipids" },
                        { key: "c", text: "Steroid lipids" },
                        { key: "d", text: "Derived lipids" }
                    ],
                    answer: "d",
                    explanation: "Derived lipids include products obtained by hydrolysis of simple or compound lipids, such as fatty acids. Simple lipids include fats and waxes, while compound lipids include substances such as phospholipids. A fatty acid is not automatically a steroid; the steroid nucleus is a distinct ring system."
                }
            ]
        },
        {
            id: "mat37",
            name: "Mental Agility",
            subject: "MAT",
            accent: "slate",
            blurb: "Verbal reasoning, numerical reasoning, logical sequencing and spatial relations.",
            questions: [
                {
                    id: "d37m181",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 181 },
                    text: "In a letter code, TRAIN is written as USBJO. How is PLANE written in the same code?",
                    options: [
                        { key: "a", text: "QMBOF" },
                        { key: "b", text: "QMBOE" },
                        { key: "c", text: "QNBOF" },
                        { key: "d", text: "RMBOF" }
                    ],
                    answer: "a",
                    explanation: "Each letter advances by one alphabetic position: T becomes U, R becomes S, and so on. Applying this to P, L, A, N and E gives Q, M, B, O and F. The example is corrected from the scan's inconsistent URBJO to USBJO so the rule applies to every letter."
                },
                {
                    id: "d37m182",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 182 },
                    text: "Choose the word that does not belong with the other three in the context of spending money.",
                    options: [
                        { key: "a", text: "Frugal" },
                        { key: "b", text: "Thrifty" },
                        { key: "c", text: "Lavish" },
                        { key: "d", text: "Prudent" }
                    ],
                    answer: "c",
                    explanation: "Frugal, thrifty and financially prudent all suggest careful use of money. Lavish suggests generous or extravagant spending and contrasts with that shared idea. The spending context fixes the relevant sense of prudent rather than requiring all four words to be exact synonyms."
                },
                {
                    id: "d37m183",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 183 },
                    text: "Statements: All poets are dreamers. Some dreamers are painters.<br>Conclusion: Some poets are painters.<br>What can be said about the conclusion using only these statements?",
                    options: [
                        { key: "a", text: "It must be true" },
                        { key: "b", text: "It must be false" },
                        { key: "c", text: "It contradicts the first statement" },
                        { key: "d", text: "It cannot be determined" }
                    ],
                    answer: "d",
                    explanation: "The dreamers who are painters may include poets, but they may instead all lie outside the poet group. Both arrangements satisfy the premises. Therefore the conclusion is possible but not logically forced, and it is not necessarily false either."
                },
                {
                    id: "d37m184",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 184 },
                    text: "Which word pair has the same kind of relationship as OBSTINATE : COMPLIANT?",
                    options: [
                        { key: "a", text: "Timid : Cowardly" },
                        { key: "b", text: "Frugal : Extravagant" },
                        { key: "c", text: "Ancient : Old" },
                        { key: "d", text: "Rigid : Firm" }
                    ],
                    answer: "b",
                    explanation: "Obstinate and compliant contrast in willingness to yield or cooperate. Frugal and extravagant are also contrasting terms, here about expenditure. Timid and cowardly, ancient and old, and rigid and firm have similar rather than opposite meanings in the intended comparison."
                },
                {
                    id: "d37m185",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 185 },
                    text: "Complete the analogy: CANDLE : WAX :: TYRE : ?",
                    options: [
                        { key: "a", text: "Rubber" },
                        { key: "b", text: "Wheel" },
                        { key: "c", text: "Road" },
                        { key: "d", text: "Air" }
                    ],
                    answer: "a",
                    explanation: "The relationship is an object to its characteristic manufacturing material. A candle is made mainly of wax, while a tyre is made mainly of rubber compounds with reinforcement. Wheel, road and air are associated with tyre use but are not the corresponding material."
                },
                {
                    id: "d37m186",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 186 },
                    text: "A sum earns simple interest at 12.5% per year. In how many years will the total amount become three times the principal?",
                    options: [
                        { key: "a", text: "12 years" },
                        { key: "b", text: "20 years" },
                        { key: "c", text: "24 years" },
                        { key: "d", text: "16 years" }
                    ],
                    answer: "d",
                    explanation: "Tripling the total amount means earning interest equal to twice the principal. Under simple interest, $I=Prt$, so $2P=P(0.125)t$. Hence $t=2/0.125=16$ years. A compound-interest formula would apply to a different assumption."
                },
                {
                    id: "d37m187",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 187 },
                    text: "Two trains, 180 m and 120 m long, move on parallel tracks in opposite directions at 54 km/h and 36 km/h. How long does it take them to cross completely, measured from their fronts meeting until their rears separate?",
                    options: [
                        { key: "a", text: "10 s" },
                        { key: "b", text: "12 s" },
                        { key: "c", text: "15 s" },
                        { key: "d", text: "20 s" }
                    ],
                    answer: "b",
                    explanation: "Opposite-direction speeds add: $54+36=90$ km/h, which is 25 m/s. Complete crossing requires relative travel equal to the sum of the train lengths, $180+120=300$ m. Time is therefore $300/25=12$ s."
                },
                {
                    id: "d37m188",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 188 },
                    text: "Find the next term: 4, 9, 20, 43, 90, ?",
                    options: [
                        { key: "a", text: "180" },
                        { key: "b", text: "183" },
                        { key: "c", text: "185" },
                        { key: "d", text: "187" }
                    ],
                    answer: "c",
                    explanation: "Each term is twice the preceding term plus successive integers: $4(2)+1=9$, $9(2)+2=20$, $20(2)+3=43$ and $43(2)+4=90$. Continuing the same pattern gives $90(2)+5=185$."
                },
                {
                    id: "d37m189",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 189 },
                    text: "Worker A completes a job alone in 12 days and worker B alone in 18 days. At constant independent work rates, how many days do they need when working together?",
                    options: [
                        { key: "a", text: "6.4 days" },
                        { key: "b", text: "7.5 days" },
                        { key: "c", text: "8.0 days" },
                        { key: "d", text: "7.2 days" }
                    ],
                    answer: "d",
                    explanation: "Their combined rate is $1/12+1/18=5/36$ of the job per day. The time for one whole job is the reciprocal, $36/5=7.2$ days. Adding the two completion times or averaging them would not add the workers' actual rates."
                },
                {
                    id: "d37m190",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 190 },
                    text: "The average of nine consecutive odd integers is 57. What is the largest integer in the set?",
                    options: [
                        { key: "a", text: "65" },
                        { key: "b", text: "61" },
                        { key: "c", text: "63" },
                        { key: "d", text: "67" }
                    ],
                    answer: "a",
                    explanation: "In an arithmetic sequence with an odd number of terms, the average is the middle term. There are four odd-number steps after 57, each of size 2. The largest is $57+4(2)=65$. The set is symmetric about its average."
                },
                {
                    id: "d37m191",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 191 },
                    text: "Five friends P, Q, R, S and T sit in a row facing north. R is at the left end and T at the right end. P sits immediately to the left of Q, and S lies between P and T. Who occupies the middle seat?",
                    options: [
                        { key: "a", text: "P" },
                        { key: "b", text: "Q" },
                        { key: "c", text: "S" },
                        { key: "d", text: "R" }
                    ],
                    answer: "b",
                    explanation: "The only order satisfying the stated ends and adjacency is R, P, Q, S, T. Hence Q is in the middle. The source merely puts R and T at opposite ends without fixing which is left; that permits another arrangement, so their end positions are specified here."
                },
                {
                    id: "d37m192",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 192 },
                    text: "Find the next term: 2, 3, 5, 8, 13, 21, ?",
                    options: [
                        { key: "a", text: "31" },
                        { key: "b", text: "32" },
                        { key: "c", text: "34" },
                        { key: "d", text: "35" }
                    ],
                    answer: "c",
                    explanation: "Each term after the first two is the sum of the preceding two: $2+3=5$, $3+5=8$, and so on. Therefore the term after 21 is $13+21=34$. This is the same additive rule used in the Fibonacci sequence."
                },
                {
                    id: "d37m193",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 193 },
                    text: "Arrange the time units in order from shortest to longest, rather than in alphabetical order.",
                    options: [
                        { key: "a", text: "Year, century, decade, millennium" },
                        { key: "b", text: "Decade, year, century, millennium" },
                        { key: "c", text: "Year, decade, century, millennium" },
                        { key: "d", text: "Millennium, century, decade, year" }
                    ],
                    answer: "c",
                    explanation: "A year is the base unit here; a decade is 10 years, a century 100 years and a millennium 1000 years. Ordering by duration therefore gives year, decade, century and millennium. The reverse sequence would be longest to shortest."
                },
                {
                    id: "d37m194",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 194 },
                    text: "Complete the number series: 3, 8, 15, 24, 35, ?",
                    options: [
                        { key: "a", text: "46" },
                        { key: "b", text: "48" },
                        { key: "c", text: "50" },
                        { key: "d", text: "45" }
                    ],
                    answer: "b",
                    explanation: "The consecutive differences are 5, 7, 9 and 11, so the next difference is 13 and the next term is $35+13=48$. Equivalently, the terms are $2^2-1$, $3^2-1$, through $6^2-1$, followed by $7^2-1$."
                },
                {
                    id: "d37m195",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 195 },
                    text: "If 1 January 1998 was a Thursday, what day of the week was 1 January 2011 in the Gregorian calendar?",
                    options: [
                        { key: "a", text: "Friday" },
                        { key: "b", text: "Sunday" },
                        { key: "c", text: "Monday" },
                        { key: "d", text: "Saturday" }
                    ],
                    answer: "d",
                    explanation: "The interval spans 13 years and includes leap days in 2000, 2004 and 2008. The weekday advances by $13+3=16$ days modulo 7, or two days. Two days after Thursday is Saturday. The year 2000 is a leap year because it is divisible by 400."
                },
                {
                    id: "d37m196",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 196 },
                    text: "A square sheet is folded along a diagonal, then the resulting triangle is folded along its line of symmetry. A small triangular hole is punched through all layers strictly inside the final packet, without touching an edge or crease. How many separate holes appear when the sheet is fully unfolded?<svg class='q-fig' viewBox='0 0 330 130' width='330' height='130' role='img' aria-label='A square with diagonal fold lines, then a folded triangular packet with a small interior triangular punch away from its edges'><g fill='none' stroke='currentColor' stroke-width='1.7'><path d='M20 20H100V100H20Z'/><path d='M20 20L100 100M100 20L20 100' stroke-dasharray='4 4'/><path d='M130 60H183m-8-5 8 5-8 5'/><path d='M225 30H305L265 70Z'/></g><path d='M259 40H271L265 50Z' fill='currentColor'/><g fill='currentColor' font-family='sans-serif' font-size='15' text-anchor='middle'><text x='60' y='121'>Sheet</text><text x='265' y='104'>Folded packet</text></g></svg>",
                    options: [
                        { key: "a", text: "4" },
                        { key: "b", text: "2" },
                        { key: "c", text: "6" },
                        { key: "d", text: "8" }
                    ],
                    answer: "a",
                    explanation: "Each fold doubles the number of layers, so two folds give four layers. The interior punch makes a separate opening in each original-sheet region, giving four holes on unfolding. A cut touching a folded corner can merge openings or trim an edge, so the punch location is explicitly clarified."
                },
                {
                    id: "d37m197",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 197 },
                    text: "The net below is folded into a cube with the numbers on the outside. When 3 is on top and 5 faces you, which number is on the left face?<svg class='q-fig' viewBox='0 0 260 200' width='260' height='200' role='img' aria-label='Cube net with horizontal row 4, 5, 3, 2; face 1 is above 5 and face 6 below 5'><g fill='none' stroke='currentColor' stroke-width='1.8'><path d='M30 78H230V128H30ZM80 78V128M130 78V128M180 78V128M80 78V28H130V78M80 128V178H130V128'/></g><g fill='currentColor' font-family='sans-serif' font-size='22' text-anchor='middle'><text x='55' y='111'>4</text><text x='105' y='111'>5</text><text x='155' y='111'>3</text><text x='205' y='111'>2</text><text x='105' y='61'>1</text><text x='105' y='161'>6</text></g></svg>",
                    options: [
                        { key: "a", text: "2" },
                        { key: "b", text: "1" },
                        { key: "c", text: "4" },
                        { key: "d", text: "6" }
                    ],
                    answer: "b",
                    explanation: "With 5 initially in front, the net places 1 above, 6 below, 4 left and 3 right. Rotate the cube about the front-back axis so 3 becomes the top; 1 then becomes the left face. Opposite pairs sum to seven, but that condition alone does not distinguish left from right. The net supplies the missing orientation."
                },
                {
                    id: "d37m198",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 198 },
                    text: "Which option continues the illustrated series?<svg class='q-fig' viewBox='0 0 320 75' width='320' height='75' role='img' aria-label='Five circles in order: left half shaded, right half shaded, bottom half shaded, top half shaded, left half shaded'><g fill='currentColor'><path d='M30 12A23 23 0 0 0 30 58Z'/><path d='M95 12A23 23 0 0 1 95 58Z'/><path d='M137 35A23 23 0 0 0 183 35Z'/><path d='M202 35A23 23 0 0 1 248 35Z'/><path d='M290 12A23 23 0 0 0 290 58Z'/></g><g fill='none' stroke='currentColor' stroke-width='1.7'><circle cx='30' cy='35' r='23'/><circle cx='95' cy='35' r='23'/><circle cx='160' cy='35' r='23'/><circle cx='225' cy='35' r='23'/><circle cx='290' cy='35' r='23'/></g></svg>",
                    options: [
                        { key: "a", text: "<svg class='opt-fig' viewBox='0 0 64 64' width='64' height='64' role='img' aria-label='Fully shaded circle'><circle cx='32' cy='32' r='23' fill='currentColor' stroke='currentColor' stroke-width='1.7'/></svg>" },
                        { key: "b", text: "<svg class='opt-fig' viewBox='0 0 64 64' width='64' height='64' role='img' aria-label='Top half shaded'><path d='M9 32A23 23 0 0 1 55 32Z' fill='currentColor'/><circle cx='32' cy='32' r='23' fill='none' stroke='currentColor' stroke-width='1.7'/></svg>" },
                        { key: "c", text: "<svg class='opt-fig' viewBox='0 0 64 64' width='64' height='64' role='img' aria-label='Bottom half shaded'><path d='M9 32A23 23 0 0 0 55 32Z' fill='currentColor'/><circle cx='32' cy='32' r='23' fill='none' stroke='currentColor' stroke-width='1.7'/></svg>" },
                        { key: "d", text: "<svg class='opt-fig' viewBox='0 0 64 64' width='64' height='64' role='img' aria-label='Right half shaded'><path d='M32 9A23 23 0 0 1 32 55Z' fill='currentColor'/><circle cx='32' cy='32' r='23' fill='none' stroke='currentColor' stroke-width='1.7'/></svg>" }
                    ],
                    answer: "d",
                    explanation: "The shaded halves repeat in the order left, right, bottom and top. The fifth circle restarts that four-position cycle with the left half shaded, so the next one has the right half shaded. A fully shaded circle does not occur in the repeating cycle."
                },
                {
                    id: "d37m199",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 199 },
                    text: "All three medians of the large triangle are drawn. Counting triangles of every size whose sides lie entirely on the drawn segments, how many triangles are in the figure?<svg class='q-fig' viewBox='0 0 260 195' width='260' height='195' role='img' aria-label='A triangle with all three straight medians drawn from each vertex to the midpoint of the opposite side, meeting at one centroid'><g fill='none' stroke='currentColor' stroke-width='1.8'><path d='M130 20L20 170H240Z'/><path d='M130 20V170M20 170L185 95M240 170L75 95'/></g></svg>",
                    options: [
                        { key: "a", text: "16" },
                        { key: "b", text: "12" },
                        { key: "c", text: "10" },
                        { key: "d", text: "6" }
                    ],
                    answer: "a",
                    explanation: "There are six smallest triangles, three triangles formed by the centroid and two original vertices, six half-size triangles formed using a median, and the one whole triangle. The total is $6+3+6+1=16$. The scan's alternatives omit 16; counting only the six smallest regions would not answer the all-sizes question."
                },
                {
                    id: "d37m200",
                    revisionOf: { paper: "PROTON-CEE-DAY-SHIFT-SET-B", question: 200 },
                    text: "A transparent sheet shows an arrow pointing east. The sheet is first rotated 90 degrees anticlockwise in its plane and then reflected top-to-bottom across a horizontal mirror line. Which direction does the arrow finally point?",
                    options: [
                        { key: "a", text: "North" },
                        { key: "b", text: "East" },
                        { key: "c", text: "South" },
                        { key: "d", text: "West" }
                    ],
                    answer: "c",
                    explanation: "The anticlockwise quarter-turn changes east to north. A top-to-bottom reflection then reverses the vertical direction, changing north to south. A left-to-right reflection would be different, so the mirror orientation and the order of operations are both specified."
                }
            ]
        }
    ]
};

const DAY37_SYLLABUS = [
    { subject: "Physics", accent: "blue", topics: [
        { topic: "Mechanics", subs: [
            { name: "Momentum, Work and Power", ids: ["d37p1", "d37p5"] },
            { name: "Relative Motion and Projectiles", ids: ["d37p2", "d37p3"] },
            { name: "Newton's Laws and Rolling Motion", ids: ["d37p4", "d37p9"] },
            { name: "Simple Harmonic Motion", ids: ["d37p6"] },
            { name: "Gravitation and Energy", ids: ["d37p7"] },
            { name: "Elasticity and Viscosity", ids: ["d37p8", "d37p10"] }
        ] },
        { topic: "Heat and Thermodynamics", subs: [
            { name: "Thermometry and Thermal Expansion", ids: ["d37p11", "d37p12"] },
            { name: "Latent Heat and Cooling", ids: ["d37p13", "d37p14"] },
            { name: "Kinetic Theory of Gases", ids: ["d37p15"] },
            { name: "Thermodynamic Work and Entropy", ids: ["d37p16", "d37p17"] }
        ] },
        { topic: "Waves and Optics", subs: [
            { name: "Mirrors, Lenses and Prisms", ids: ["d37p18", "d37p19", "d37p20", "d37p21"] },
            { name: "Sound Speed and Resonance", ids: ["d37p22", "d37p23"] },
            { name: "Interference and Diffraction", ids: ["d37p24", "d37p25"] },
            { name: "Seismic Wave Propagation", ids: ["d37p50"] }
        ] },
        { topic: "Current Electricity and Magnetism", subs: [
            { name: "Resistors and Cells", ids: ["d37p30", "d37p31"] },
            { name: "Galvanometers and Sensitivity", ids: ["d37p32", "d37p35"] },
            { name: "Thermoelectric Effect", ids: ["d37p33"] },
            { name: "Magnetic Force and Hysteresis", ids: ["d37p34", "d37p36"] },
            { name: "Motional EMF and AC Values", ids: ["d37p37", "d37p38"] }
        ] },
        { topic: "Electrostatics and Capacitors", subs: [
            { name: "Electric Force, Field and Potential", ids: ["d37p26", "d37p27", "d37p28"] },
            { name: "Dielectrics in Capacitors", ids: ["d37p29"] }
        ] },
        { topic: "Modern Physics", subs: [
            { name: "Nuclear Radius and Packing Fraction", ids: ["d37p39", "d37p40"] },
            { name: "Semiconductors, Logic Gates and Rectification", ids: ["d37p41", "d37p47", "d37p48", "d37p49"] },
            { name: "Photoelectric Effect, Atomic Levels and X Rays", ids: ["d37p42", "d37p43", "d37p44"] },
            { name: "Radioactive Decay", ids: ["d37p45", "d37p46"] }
        ] }
    ] },
    { subject: "Chemistry", accent: "amber", topics: [
        { topic: "Physical Chemistry", subs: [
            { name: "Atomic Mass, Stoichiometry and Concentration", ids: ["d37c51", "d37c52", "d37c53"] },
            { name: "Atomic Structure and Ionization Energy", ids: ["d37c54", "d37c55"] },
            { name: "Bonding, Lewis Structures and Formal Charge", ids: ["d37c56", "d37c57", "d37c58"] },
            { name: "Oxidation States and Electrochemistry", ids: ["d37c59", "d37c66"] },
            { name: "Gas Laws and Chemical Equilibrium", ids: ["d37c60", "d37c61"] },
            { name: "Ionic Equilibrium and pH", ids: ["d37c63", "d37c64"] },
            { name: "Kinetics and Thermodynamics", ids: ["d37c65", "d37c67"] },
            { name: "Isotopes and Nuclear Composition", ids: ["d37c94"] }
        ] },
        { topic: "Inorganic Chemistry", subs: [
            { name: "Carbon, Nitrogen, Sulphur and Halogens", ids: ["d37c62", "d37c96", "d37c97", "d37c98", "d37c99"] },
            { name: "Metallurgy and Ore Concentration", ids: ["d37c92"] },
            { name: "Alkaline Earth Compounds", ids: ["d37c95", "d37c100"] }
        ] },
        { topic: "Organic Chemistry", subs: [
            { name: "Carbanions and Nomenclature", ids: ["d37c68", "d37c69"] },
            { name: "Hydrocarbons and Halo Compounds", ids: ["d37c70", "d37c71", "d37c73", "d37c77"] },
            { name: "Alcohols, Phenols and Oxo Process", ids: ["d37c74", "d37c75", "d37c76"] },
            { name: "Carbonyl Reactions and Carboxylic Acids", ids: ["d37c78", "d37c79", "d37c80", "d37c84"] },
            { name: "Nitro Compounds and Amines", ids: ["d37c72", "d37c81", "d37c82"] },
            { name: "Grignard Reagents", ids: ["d37c83"] }
        ] },
        { topic: "Applied Chemistry", subs: [
            { name: "Chemical Manufacturing and Batch Processing", ids: ["d37c90", "d37c91"] },
            { name: "Polymers", ids: ["d37c93"] }
        ] },
        { topic: "Analytical Chemistry", subs: [
            { name: "Chemical Tests and Sulphide Groups", ids: ["d37c85", "d37c87", "d37c89"] },
            { name: "Chromatography and Redox Titration", ids: ["d37c86", "d37c88"] }
        ] }
    ] },
    { subject: "Zoology", accent: "rose", topics: [
        { topic: "Evolutionary Biology", subs: [
            { name: "Origin of Life, Fossils and Human Evolution", ids: ["d37z109", "d37z110", "d37z111"] }
        ] },
        { topic: "Animal Diversity and Classification", subs: [
            { name: "Molluscs, Sponges and Cartilaginous Fishes", ids: ["d37z101", "d37z102", "d37z103"] },
            { name: "Protozoan Osmoregulation", ids: ["d37z104"] }
        ] },
        { topic: "Animal Tissues and Histology", subs: [
            { name: "Muscle, Connective Tissue and Epithelium", ids: ["d37z137", "d37z138", "d37z140"] }
        ] },
        { topic: "Study of Selected Animals", subs: [
            { name: "Frog Sexual Dimorphism", ids: ["d37z105", "d37z106"] },
            { name: "Plasmodium Life Cycle", ids: ["d37z107", "d37z108"] },
            { name: "Earthworm Body Wall and Digestion", ids: ["d37z114", "d37z115"] }
        ] },
        { topic: "Human Biology and Physiology", subs: [
            { name: "Digestive System", ids: ["d37z119", "d37z124"] },
            { name: "Respiratory Gas Transport", ids: ["d37z125"] },
            { name: "Circulatory System", ids: ["d37z126", "d37z129"] },
            { name: "Excretory System", ids: ["d37z127"] },
            { name: "Nervous System", ids: ["d37z130", "d37z131", "d37z139"] },
            { name: "Sense Organs", ids: ["d37z120", "d37z132"] },
            { name: "Endocrinology", ids: ["d37z122"] },
            { name: "Reproduction and Embryonic Development", ids: ["d37z118", "d37z121", "d37z123", "d37z128"] }
        ] },
        { topic: "Microbial Diseases and Immunology", subs: [
            { name: "Hepatitis, Tuberculosis and Typhoid", ids: ["d37z133", "d37z134", "d37z135"] },
            { name: "Immunoglobulins", ids: ["d37z136"] }
        ] },
        { topic: "Medical Technology and Applied Biology", subs: [
            { name: "Transplantation and Amniocentesis", ids: ["d37z116", "d37z117"] }
        ] },
        { topic: "Biota, Environment and Conservation", subs: [
            { name: "Animal Behaviour and In-situ Conservation", ids: ["d37z112", "d37z113"] }
        ] }
    ] },
    { subject: "Botany", accent: "emerald", topics: [
        { topic: "Basic Components of Life", subs: [
            { name: "Carbohydrates and Lipids", ids: ["d37b179", "d37b180"] }
        ] },
        { topic: "Biodiversity", subs: [
            { name: "Taxonomic Hierarchy and Viruses", ids: ["d37b146", "d37b147"] },
            { name: "Angiosperm Roots, Fruits and Floral Formulae", ids: ["d37b148", "d37b149", "d37b150"] },
            { name: "Fungi and Algae", ids: ["d37b151", "d37b152"] },
            { name: "Ferns and Gymnosperms", ids: ["d37b153", "d37b154"] }
        ] },
        { topic: "Ecology and Vegetation", subs: [
            { name: "Ecotypes, Habitat and Xerophytic Adaptations", ids: ["d37b164", "d37b165", "d37b166"] },
            { name: "Ecological Terms and Succession", ids: ["d37b167"] }
        ] },
        { topic: "Cell Biology", subs: [
            { name: "Mitochondria, Golgi and Flagella", ids: ["d37b141", "d37b142", "d37b143"] },
            { name: "Meiosis, DNA Content and Nondisjunction", ids: ["d37b144", "d37b145"] }
        ] },
        { topic: "Genetics", subs: [
            { name: "Transcription, Linkage and Mutation", ids: ["d37b173", "d37b174", "d37b175"] },
            { name: "Sex-linked and Mendelian Inheritance", ids: ["d37b176", "d37b177"] },
            { name: "Chromosome Number", ids: ["d37b178"] }
        ] },
        { topic: "Plant Anatomy", subs: [
            { name: "Hypodermis, Stele and Secondary Growth", ids: ["d37b170", "d37b171", "d37b172"] }
        ] },
        { topic: "Plant Physiology", subs: [
            { name: "Plant Water Relations and Stomata", ids: ["d37b155", "d37b156"] },
            { name: "Photosynthesis, Respiration and Starch Test", ids: ["d37b157", "d37b158", "d37b160"] },
            { name: "Gibberellins and Germination", ids: ["d37b159"] }
        ] },
        { topic: "Developmental Botany", subs: [
            { name: "Apogamy and Post-fertilization Changes", ids: ["d37b168", "d37b169"] }
        ] },
        { topic: "Applied Botany", subs: [
            { name: "Hybrid Vigour, Biofertilizers and Gene Transfer", ids: ["d37b161", "d37b162", "d37b163"] }
        ] }
    ] },
    { subject: "MAT", accent: "slate", topics: [
        { topic: "Verbal Reasoning", subs: [
            { name: "Letter Coding and Classification", ids: ["d37m181", "d37m182"] },
            { name: "Word Relationships and Analogies", ids: ["d37m184", "d37m185"] }
        ] },
        { topic: "Numerical Reasoning", subs: [
            { name: "Interest, Relative Speed and Work Rates", ids: ["d37m186", "d37m187", "d37m189"] },
            { name: "Averages and Calendar Arithmetic", ids: ["d37m190", "d37m195"] }
        ] },
        { topic: "Logical Sequencing", subs: [
            { name: "Syllogisms and Seating Arrangements", ids: ["d37m183", "d37m191"] },
            { name: "Number Series and Ordered Units", ids: ["d37m188", "d37m192", "d37m193", "d37m194"] }
        ] },
        { topic: "Spatial Relation / Abstract Reasoning", subs: [
            { name: "Paper Folding and Cube Nets", ids: ["d37m196", "d37m197"] },
            { name: "Visual Series, Triangle Counting and Transformations", ids: ["d37m198", "d37m199", "d37m200"] }
        ] }
    ] }
];
DAY37.syllabus = DAY37_SYLLABUS;