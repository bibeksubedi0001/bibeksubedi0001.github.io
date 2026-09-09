const DAY36 = {
    day: 36,
    title: "Day 36",
    subtitle: "Targeted Revision & Plant Anatomy",
    durationMinutes: 100,
    negativeMarking: 0.25,
    chapters: [
        {
            id: "physics36",
            name: "Physics Revision",
            subject: "Physics",
            accent: "blue",
            blurb: "Mechanics, fluids, heat, waves, optics, electricity and atomic physics.",
            questions: [
                {
                    id: "d36p1",
                    revisionOf: { day: 35, question: 1, id: "d35p1" },
                    text: "A uniform hanging wire extends by $e$ under its own weight $W$. A separate load of weight $3W$ is attached at its lower end. Within the elastic limit, what <b>additional extension</b> does that load produce?",
                    options: [
                        { key: "a", text: "$3e$" },
                        { key: "b", text: "$6e$" },
                        { key: "c", text: "$7e$" },
                        { key: "d", text: "$e/3$" }
                    ],
                    answer: "b",
                    explanation: "Own-weight tension varies from zero to $W$, with mean $W/2$, so $e=WL/(2AY)$. The end load adds uniform tension $3W$, giving an extra $3WL/(AY)=6e$. The total extension would be $7e$, but the question asks only for the added extension."
                },
                {
                    id: "d36p2",
                    revisionOf: { day: 35, question: 3, id: "d35p3" },
                    text: "Ground-state hydrogen atoms absorb photons of energy 13.2222 eV, rounded to four decimal places. Using $E_n=-13.6/n^2$ eV and ignoring fine structure, how many distinct emission lines can arise from all possible subsequent downward transitions across a large collection of these atoms?",
                    options: [
                        { key: "a", text: "5" },
                        { key: "b", text: "6" },
                        { key: "c", text: "10" },
                        { key: "d", text: "15" }
                    ],
                    answer: "d",
                    explanation: "Each pair of different energy levels supplies one possible transition. For six levels the count is $6(6-1)/2=15$, also obtained as $5+4+3+2+1$. A single atom need not emit all 15 lines in its cascade. The energy quoted is rounded: excitation to level 6 requires about 13.2222 eV."
                },
                {
                    id: "d36p3",
                    revisionOf: { day: 35, question: 4, id: "d35p4" },
                    text: "Two uniform vertical wires have the same material and cross-sectional area, but lengths $L$ and $3L$. Under their own weights, what is the ratio of the longer wire's extension to the shorter wire's extension?",
                    options: [
                        { key: "a", text: "9 : 1" },
                        { key: "b", text: "3 : 1" },
                        { key: "c", text: "1 : 3" },
                        { key: "d", text: "1 : 9" }
                    ],
                    answer: "a",
                    explanation: "For a uniform wire, own-weight extension is $\\rho gL^2/(2Y)$ after substituting its mass into $mgL/(2AY)$. Tripling length therefore multiplies extension by nine. Both the weight and the length being stretched increase; this is not a fixed-load comparison."
                },
                {
                    id: "d36p4",
                    revisionOf: { day: 35, question: 5, id: "d35p5" },
                    text: "The current in a circuit is $I=8\\sin(125\\pi t)$ A, with time in seconds. What interval separates successive positive maxima?",
                    options: [
                        { key: "a", text: "4 ms" },
                        { key: "b", text: "8 ms" },
                        { key: "c", text: "16 ms" },
                        { key: "d", text: "32 ms" }
                    ],
                    answer: "c",
                    explanation: "Two successive positive maxima are one full period apart: $T=2\\pi/(125\\pi)=0.016$ s, or 16 ms. The first positive maximum occurs after a quarter-period, 4 ms, while a positive and the following negative maximum are 8 ms apart."
                },
                {
                    id: "d36p5",
                    revisionOf: { day: 35, question: 45, id: "d35o7" },
                    text: "A thin concave lens has power -4 D in air. A real object is 75 cm in front of it. Where is the image?",
                    options: [
                        { key: "a", text: "18.75 cm behind the lens" },
                        { key: "b", text: "18.75 cm in front of the lens" },
                        { key: "c", text: "37.50 cm behind the lens" },
                        { key: "d", text: "37.50 cm in front of the lens" }
                    ],
                    answer: "b",
                    explanation: "The focal length is $1/(-4)=-0.25$ m, or -25 cm. With $u=-75$ cm, use $1/v=1/f+1/u$. Thus $1/v=-1/25-1/75=-4/75$, giving $v=-18.75$ cm. The negative image distance means a virtual image on the object's side of the lens."
                },
                {
                    id: "d36p6",
                    revisionOf: { day: 35, question: 50, id: "d35o12" },
                    text: "Two thin lenses in contact form an achromatic combination of power +4 D. Their crown and flint glasses have dispersive powers 0.030 and 0.045 respectively. What are the crown and flint lens powers, in that order?",
                    options: [
                        { key: "a", text: "+8 D and -4 D" },
                        { key: "b", text: "+4 D and +8 D" },
                        { key: "c", text: "-12 D and +8 D" },
                        { key: "d", text: "+12 D and -8 D" }
                    ],
                    answer: "d",
                    explanation: "Achromatism requires $0.030P_c+0.045P_f=0$, so $P_c=-1.5P_f$. Also $P_c+P_f=4$. Hence $P_f=-8$ D and $P_c=+12$ D. Their powers add to +4 D while their dispersion-weighted powers cancel."
                },
                {
                    id: "d36p7",
                    revisionOf: { paper: "AG-15-SET-B", question: 3 },
                    text: "A small bob hangs from a light thread of length 0.80 m. What minimum speed at the lowest point allows it just to reach the horizontal level of its suspension point? Ignore air resistance and use $g=10\\,\\mathrm{m/s^2}$.",
                    options: [
                        { key: "a", text: "2 m/s" },
                        { key: "b", text: "$2\\sqrt{2}$ m/s" },
                        { key: "c", text: "4 m/s" },
                        { key: "d", text: "$4\\sqrt{2}$ m/s" }
                    ],
                    answer: "c",
                    explanation: "The bob rises through one thread length. At the limiting height its speed can just reach zero, so energy conservation gives $mv^2/2=mgL$. Therefore $v=\\sqrt{2gL}=\\sqrt{16}=4$ m/s. Requiring a complete vertical circle would impose a different condition at the top."
                },
                {
                    id: "d36p8",
                    revisionOf: { paper: "AG-15-SET-B", question: 4 },
                    text: "A rigid, sealed enclosure, its air and a bird are supported by a balance. The bird first rests on the floor and later hovers steadily without touching it. After transients, how does the time-averaged balance reading compare?",
                    options: [
                        { key: "a", text: "It is unchanged" },
                        { key: "b", text: "It falls by the bird's weight" },
                        { key: "c", text: "It rises by the bird's weight" },
                        { key: "d", text: "It falls to zero" }
                    ],
                    answer: "a",
                    explanation: "The supported closed system has the same total mass and no mean vertical acceleration. During steady hovering, the bird transfers downward momentum to the enclosed air, which transfers the load to the enclosure. Sealing and averaging are specified because an open wire cage with escaping airflow and transient wingbeats need not have the same instantaneous reading."
                },
                {
                    id: "d36p9",
                    revisionOf: { paper: "AG-15-SET-B", question: 9 },
                    text: "For fully developed laminar flow through a horizontal circular tube, the pressure difference, tube radius, length and dynamic viscosity are fixed. Changing which remaining liquid property does not enter the Poiseuille expression for volumetric flow rate?",
                    options: [
                        { key: "a", text: "Dynamic viscosity" },
                        { key: "b", text: "Pressure difference" },
                        { key: "c", text: "Tube radius" },
                        { key: "d", text: "Density" }
                    ],
                    answer: "d",
                    explanation: "Poiseuille's law gives $Q=\\pi r^4\\Delta P/(8\\eta L)$. Density does not appear explicitly when dynamic viscosity and the stated conditions are fixed. Density can affect whether flow remains laminar, so the comparison assumes that laminar-flow condition is maintained."
                },
                {
                    id: "d36p10",
                    revisionOf: { paper: "AG-15-SET-B", question: 10 },
                    text: "Water rises 4 cm in a clean capillary tube with zero contact angle. Its tip is then held 18 cm below a water surface. Neglecting airflow losses, what maximum gauge pressure, expressed as centimetres of water, is needed to form a hemispherical air bubble at the tip?",
                    options: [
                        { key: "a", text: "14 cm of water" },
                        { key: "b", text: "18 cm of water" },
                        { key: "c", text: "22 cm of water" },
                        { key: "d", text: "26 cm of water" }
                    ],
                    answer: "c",
                    explanation: "The gauge pressure must overcome the 18 cm hydrostatic head plus the bubble's surface-tension pressure. For a hemispherical bubble of tube radius $r$, that excess is $2T/r$. The original capillary rise satisfies $\\rho gh=2T/r$, so the extra pressure equals 4 cm of water. Total head is $18+4=22$ cm."
                },
                {
                    id: "d36p11",
                    revisionOf: { paper: "AG-15-SET-B", question: 13 },
                    text: "Two ideal gases A and B have equal temperatures, but A's molar mass is three times B's. What is the ratio of their translational kinetic energies <b>per unit mass</b>, B to A?",
                    options: [
                        { key: "a", text: "1 : 1" },
                        { key: "b", text: "3 : 1" },
                        { key: "c", text: "1 : 3" },
                        { key: "d", text: "9 : 1" }
                    ],
                    answer: "b",
                    explanation: "Translational kinetic energy per mole is $3RT/2$, equal for both gases. Per unit mass it is $3RT/(2M)$, inversely proportional to molar mass. Therefore B, with one-third the molar mass, has three times A's translational energy per kilogram. Equal energy per molecule does not imply equal energy per kilogram."
                },
                {
                    id: "d36p12",
                    revisionOf: { paper: "AG-15-SET-B", question: 14 },
                    text: "For an ideal gas following a specified thermodynamic path, define molar heat capacity by $C=\\delta Q/(n\\,dT)$. Which statement is correct?",
                    options: [
                        { key: "a", text: "It depends on the path and can be negative" },
                        { key: "b", text: "It must equal either the fixed value Cv or Cp" },
                        { key: "c", text: "It is always positive on every possible path" },
                        { key: "d", text: "It depends only on how much gas is present" }
                    ],
                    answer: "a",
                    explanation: "Heat transfer depends on the process, not just the initial and final temperatures. A gas can lose heat while its temperature rises under compression, giving a negative path heat capacity. Constant-volume and constant-pressure capacities are important special cases; the path definition is not restricted to those two values."
                },
                {
                    id: "d36p13",
                    revisionOf: { paper: "AG-15-SET-B", question: 18 },
                    text: "A sound source moves anticlockwise around a circle at constant speed. A is the lowest point, B the highest, and C the rightmost. A stationary observer is far to the right, so the lines of sight are effectively horizontal. Which ordering of observed frequencies is correct?<svg class='q-fig' viewBox='0 0 320 185' width='320' height='185' role='img' aria-label='Circular source path with A at bottom moving right, B at top moving left, C at right moving upward, and observer O far to the right'><g fill='none' stroke='currentColor' stroke-width='1.7'><circle cx='88' cy='91' r='46'/><path d='M134 91H274' stroke-dasharray='4 4'/><path d='M109 30H66l8-5m-8 5 8 5M67 153h43l-8-5m8 5-8 5M150 112V69l-5 8m5-8 5 8'/></g><g fill='currentColor' font-size='13' text-anchor='middle'><text x='88' y='177'>A</text><text x='88' y='18'>B</text><text x='163' y='95'>C</text><text x='291' y='96'>O</text></g></svg>",
                    options: [
                        { key: "a", text: "$f_B>f_C>f_A$" },
                        { key: "b", text: "$f_C>f_A>f_B$" },
                        { key: "c", text: "$f_A=f_B>f_C$" },
                        { key: "d", text: "$f_A>f_C>f_B$" }
                    ],
                    answer: "d",
                    explanation: "At A the source moves toward the observer, raising the received frequency. At B it moves away, lowering it. At C its instantaneous velocity is perpendicular to the line of sight, so there is no first-order classical Doppler shift. Thus $f_A>f_C>f_B$. The direction of motion is stated explicitly."
                },
                {
                    id: "d36p14",
                    revisionOf: { paper: "AG-15-SET-B", question: 19 },
                    text: "A pipe closed at one end sounds its second overtone in resonance with the first overtone of a pipe open at both ends. Ignoring end corrections and using the same sound speed, what is the closed-pipe to open-pipe length ratio?",
                    options: [
                        { key: "a", text: "4 : 5" },
                        { key: "b", text: "5 : 4" },
                        { key: "c", text: "3 : 2" },
                        { key: "d", text: "2 : 3" }
                    ],
                    answer: "b",
                    explanation: "A closed pipe's allowed harmonics are 1, 3, 5, so its second overtone is $5v/(4L_c)$. An open pipe's first overtone is its second harmonic, $v/L_o$. Equating these gives $5L_o=4L_c$, hence $L_c:L_o=5:4$. Overtone numbers are not identical to harmonic numbers for a closed pipe."
                },
                {
                    id: "d36p15",
                    revisionOf: { paper: "AG-15-SET-B", question: 25 },
                    text: "Blue and green projectors illuminate the same region of a white screen with suitable equal intensities. Under additive colour mixing, that region appears:",
                    options: [
                        { key: "a", text: "Magenta" },
                        { key: "b", text: "Yellow" },
                        { key: "c", text: "Cyan" },
                        { key: "d", text: "White" }
                    ],
                    answer: "c",
                    explanation: "Adding green and blue light produces cyan. Red plus green produces yellow, while red plus blue produces magenta. White requires an appropriate combination of all three additive primaries. Mixing projected lights is different from mixing pigments, which absorb parts of the incident spectrum."
                },
                {
                    id: "d36p16",
                    revisionOf: { paper: "AG-15-SET-B", question: 26 },
                    text: "How many electrons must be added to a neutral conductor to give it a charge of $-4.8\\,\\mu\\mathrm{C}$? Take the magnitude of the electron charge as $1.6\\times10^{-19}$ C.",
                    options: [
                        { key: "a", text: "$3.0\\times10^{13}$" },
                        { key: "b", text: "$3.0\\times10^{19}$" },
                        { key: "c", text: "$7.68\\times10^{-25}$" },
                        { key: "d", text: "$3.0\\times10^{12}$" }
                    ],
                    answer: "a",
                    explanation: "Use the charge magnitude: $N=|Q|/e$. Substitution gives $N=\\frac{4.8\\times10^{-6}}{1.6\\times10^{-19}}$, hence $N=3.0\\times10^{13}$. The negative sign indicates added electrons; the number of electrons itself is positive. Remember that micro means a factor of $10^{-6}$."
                },
                {
                    id: "d36p17",
                    revisionOf: { paper: "AG-15-SET-B", question: 29 },
                    text: "A 6 microfarad capacitor charged to 80 V is disconnected from its source and connected in parallel to an initially uncharged capacitor. Their final common voltage is 30 V. What is the second capacitance?",
                    options: [
                        { key: "a", text: "4 microfarads" },
                        { key: "b", text: "16 microfarads" },
                        { key: "c", text: "6 microfarads" },
                        { key: "d", text: "10 microfarads" }
                    ],
                    answer: "d",
                    explanation: "Initial charge is $6\\times80=480$ microcoulombs. Charge conservation gives $(6+C_2)30=480$, so the combined capacitance is 16 microfarads and $C_2=10$ microfarads. Charge is conserved in this connection, although the stored electrostatic energy decreases."
                },
                {
                    id: "d36p18",
                    revisionOf: { paper: "AG-15-SET-B", question: 31 },
                    text: "A long uniform solenoid of inductance 24 mH is divided by cuts perpendicular to its axis into three equal shorter solenoids with the same cross-sectional area and turn density. Neglect end effects and mutual coupling after separation. What is each part's inductance?",
                    options: [
                        { key: "a", text: "24 mH" },
                        { key: "b", text: "8 mH" },
                        { key: "c", text: "$8/3$ mH" },
                        { key: "d", text: "72 mH" }
                    ],
                    answer: "b",
                    explanation: "For a long solenoid, $L=\\mu N^2A/\\ell$. Each part has $N/3$ turns and length $\\ell/3$, so its inductance is $L/3=8$ mH. Dividing by nine would account for the change in turns but forget the corresponding reduction in solenoid length."
                },
                {
                    id: "d36p19",
                    revisionOf: { paper: "AG-15-SET-B", question: 36 },
                    text: "A uniform potentiometer wire has 5.0 V maintained across its full length. A cell of emf 1.2 V balances against 144 cm of this wire. What is the total wire length?",
                    options: [
                        { key: "a", text: "3.0 m" },
                        { key: "b", text: "4.0 m" },
                        { key: "c", text: "6.0 m" },
                        { key: "d", text: "8.0 m" }
                    ],
                    answer: "c",
                    explanation: "The potential gradient is $1.2/144$ V per centimetre. The full 5 V therefore occupies $5\\times144/1.2=600$ cm, or 6.0 m. Uniform wire and steady current make the voltage drop proportional to length; at balance no current is drawn from the test cell."
                },
                {
                    id: "d36p20",
                    revisionOf: { paper: "AG-15-SET-B", question: 40 },
                    text: "Compare the typical energy needed to remove a nucleon from a well-bound stable nucleus with that needed to remove an outer electron from an ordinary neutral atom. The nucleon-removal energy is usually:",
                    options: [
                        { key: "a", text: "Much greater, typically on the MeV scale" },
                        { key: "b", text: "Much smaller, typically on the micro-eV scale" },
                        { key: "c", text: "Exactly equal because the charges are equal" },
                        { key: "d", text: "Always zero for a neutron in the nucleus" }
                    ],
                    answer: "a",
                    explanation: "Typical nuclear separation energies are millions of electronvolts, whereas ordinary outer-electron ionization energies are usually several electronvolts. Nuclear binding is therefore much stronger on this comparison. The word typical and the stable, well-bound condition avoid claiming one universal separation energy for every isotope."
                },
                {
                    id: "d36p21",
                    revisionOf: { paper: "AG-15-SET-B", question: 46 },
                    text: "In the low-redshift Hubble-law regime, a galaxy at 60 Mpc has redshift 0.015. Ignoring peculiar velocities, what redshift is expected for a galaxy at 180 Mpc under the same Hubble constant?",
                    options: [
                        { key: "a", text: "0.005" },
                        { key: "b", text: "0.015" },
                        { key: "c", text: "0.135" },
                        { key: "d", text: "0.045" }
                    ],
                    answer: "d",
                    explanation: "At low redshift, $cz\\approx H_0r$, so redshift is directly proportional to distance. The second distance is three times the first, giving $z=3(0.015)=0.045$. The approximation is stated because the simple linear redshift-distance relation is not exact at arbitrarily large cosmological redshift."
                },
                {
                    id: "d36p22",
                    revisionOf: { paper: "AG-15-SET-B", question: 47 },
                    text: "Which seismic wave can propagate through both solid rock and a liquid layer because it involves compression and expansion of the medium?",
                    options: [
                        { key: "a", text: "S wave" },
                        { key: "b", text: "Love wave" },
                        { key: "c", text: "P wave" },
                        { key: "d", text: "Electromagnetic wave" }
                    ],
                    answer: "c",
                    explanation: "P waves are longitudinal compressional waves. Both solids and liquids resist volume changes and can transmit them. S waves require a shear restoring force and do not propagate through an ideal liquid interior. Electromagnetic waves are not seismic disturbances of the medium."
                },
                {
                    id: "d36p23",
                    revisionOf: { paper: "AG-15-SET-B", question: 49 },
                    text: "At specified operating points, a diode carries 20 mA at 0.60 V forward bias and 2 microamperes at 6.0 V reverse bias. Using the static resistance $|V/I|$, what is its forward-to-reverse resistance ratio?",
                    options: [
                        { key: "a", text: "1 : 1000" },
                        { key: "b", text: "1 : 100000" },
                        { key: "c", text: "100000 : 1" },
                        { key: "d", text: "1 : 100" }
                    ],
                    answer: "b",
                    explanation: "The forward resistance is $0.60/0.020=30$ ohms. The reverse resistance is $6/(2\\times10^{-6})=3\\times10^6$ ohms. Their ratio is $30:3000000=1:100000$. Diodes do not have one universal resistance ratio; the bias points and the static-resistance definition are supplied here."
                }
            ]
        },
        {
            id: "chemistry36",
            name: "Chemistry Revision",
            subject: "Chemistry",
            accent: "amber",
            blurb: "Atomic structure, equilibrium, thermochemistry, organic reactions and chemical tests.",
            questions: [
                {
                    id: "d36c1",
                    revisionOf: { day: 35, question: 6, id: "d35c1" },
                    text: "All three spatial quantum numbers are fixed at $n=6$, $l=2$ and $m_l=-2$. How many distinct orbitals does this set identify?",
                    options: [
                        { key: "a", text: "2" },
                        { key: "b", text: "5" },
                        { key: "c", text: "10" },
                        { key: "d", text: "1" }
                    ],
                    answer: "d",
                    explanation: "The allowed values identify one particular orbital in the 6d subshell. Specifying only $n=6$ and $l=2$ would leave five possible magnetic quantum numbers, but fixing $m_l=-2$ selects one orbital. Two is its electron capacity, not the number of spatial orbitals."
                },
                {
                    id: "d36c2",
                    revisionOf: { day: 35, question: 8, id: "d35c3" },
                    text: "In the formal ionic description of $[\\mathrm{Fe(H_2O)_5NO}]^{2+}$, water is neutral and nitrosyl is assigned +1. Which formal oxidation number must iron have to give the observed complex charge?",
                    options: [
                        { key: "a", text: "+2" },
                        { key: "b", text: "+1" },
                        { key: "c", text: "+3" },
                        { key: "d", text: "0" }
                    ],
                    answer: "b",
                    explanation: "Let iron's formal oxidation number be $x$. Charge bookkeeping gives $x+5(0)+1=2$, so $x=+1$. The charge convention for nitrosyl is stated because it is a non-innocent ligand; oxidation-number arithmetic should not be confused with a measured localized charge on iron."
                },
                {
                    id: "d36c3",
                    revisionOf: { day: 35, question: 10, id: "d35c5" },
                    text: "A solution contains 3.92 g of sulphuric acid per 100 mL of solution. For complete neutralization of both acidic hydrogens, what is its normality? Use molar mass 98 g/mol.",
                    options: [
                        { key: "a", text: "0.80 N" },
                        { key: "b", text: "0.40 N" },
                        { key: "c", text: "0.08 N" },
                        { key: "d", text: "1.60 N" }
                    ],
                    answer: "a",
                    explanation: "There are 39.2 g per litre. Complete neutralization gives an equivalent mass of $98/2=49$ g per equivalent, so normality is $39.2/49=0.80$ N. Molarity is 0.40 M; normality doubles it for this particular two-proton neutralization."
                },
                {
                    id: "d36c4",
                    revisionOf: { day: 35, question: 14, id: "d35c9" },
                    text: "Complete conversion of 0.40 mol of sulphurous acid, conventionally $\\mathrm{H_2SO_3}$, to sodium sulphite requires how many moles of NaOH?",
                    options: [
                        { key: "a", text: "0.20 mol" },
                        { key: "b", text: "0.40 mol" },
                        { key: "c", text: "0.80 mol" },
                        { key: "d", text: "1.20 mol" }
                    ],
                    answer: "c",
                    explanation: "Sulphurous acid is dibasic. Forming sulphite replaces both acidic hydrogens, requiring two moles of hydroxide per mole of acid. Thus the amount is $2(0.40)=0.80$ mol. One equivalent of base per mole would stop at hydrogen sulphite rather than complete neutralization."
                },
                {
                    id: "d36c5",
                    revisionOf: { day: 35, question: 17, id: "d35c12" },
                    text: "For $A+B\\rightleftharpoons C+D$, equal concentrations of A and B are mixed with no products present. If $K_c=36$, what is the equilibrium ratio $[C]/[A]$?",
                    options: [
                        { key: "a", text: "36" },
                        { key: "b", text: "$1/36$" },
                        { key: "c", text: "$1/6$" },
                        { key: "d", text: "6" }
                    ],
                    answer: "d",
                    explanation: "The 1:1 stoichiometry and starting amounts imply $[A]=[B]$ and $[C]=[D]$ at equilibrium. Hence $K_c=([C]/[A])^2$. The concentration ratio is the positive root, $\\sqrt{36}=6$, not 36 and not its reciprocal."
                },
                {
                    id: "d36c6",
                    revisionOf: { paper: "AG-15-SET-B", question: 53 },
                    text: "A spectral line splits when the emitting atoms are placed in an external electric field, with no magnetic field applied. This is the:",
                    options: [
                        { key: "a", text: "Stark effect" },
                        { key: "b", text: "Zeeman effect" },
                        { key: "c", text: "Compton effect" },
                        { key: "d", text: "Photoelectric effect" }
                    ],
                    answer: "a",
                    explanation: "Electric-field-induced shifting or splitting of atomic energy levels and spectral lines is the Stark effect. Zeeman splitting is associated with a magnetic field. The Compton and photoelectric effects involve different interactions of radiation with matter, not this external-field line splitting."
                },
                {
                    id: "d36c7",
                    revisionOf: { paper: "AG-15-SET-B", question: 56 },
                    text: "A face-centred cubic unit cell has atoms at all eight corners and at the centres of all six faces. After allowing for sharing with neighbouring cells, how many atoms belong to one cell?",
                    options: [
                        { key: "a", text: "2" },
                        { key: "b", text: "3" },
                        { key: "c", text: "4" },
                        { key: "d", text: "14" }
                    ],
                    answer: "c",
                    explanation: "Each corner contributes one-eighth of an atom and each face centre contributes one-half. The effective number is $8(1/8)+6(1/2)=1+3=4$. Counting 14 visible atom positions without sharing does not give the unit cell's effective atom count."
                },
                {
                    id: "d36c8",
                    revisionOf: { paper: "AG-15-SET-B", question: 57 },
                    text: "Taking hydrogen as +1 and oxygen as -2, what is the <b>average</b> oxidation number of carbon in ethanol, $\\mathrm{C_2H_6O}$?",
                    options: [
                        { key: "a", text: "0" },
                        { key: "b", text: "-2" },
                        { key: "c", text: "+2" },
                        { key: "d", text: "-3" }
                    ],
                    answer: "b",
                    explanation: "For a neutral molecule, $2x+6(+1)+(-2)=0$, so $2x=-4$ and the average is -2. Ethanol's two carbon atoms are not equivalent: their individual values are -3 and -1. The question explicitly asks for the average, not the value at one particular carbon."
                },
                {
                    id: "d36c9",
                    revisionOf: { paper: "AG-15-SET-B", question: 64 },
                    text: "A one-step reaction has forward activation energy 70 kJ/mol and enthalpy change -25 kJ/mol. Using the same transition state for the reverse reaction, what is the reverse activation energy?",
                    options: [
                        { key: "a", text: "45 kJ/mol" },
                        { key: "b", text: "70 kJ/mol" },
                        { key: "c", text: "25 kJ/mol" },
                        { key: "d", text: "95 kJ/mol" }
                    ],
                    answer: "d",
                    explanation: "The products lie 25 kJ/mol below the reactants. Climbing from those products to the same transition state therefore requires $70+25=95$ kJ/mol. Algebraically, $E_{a,\\mathrm{rev}}=E_{a,\\mathrm{fwd}}-\\Delta H$. Reverse activation energy is not always smaller; it depends on the reaction enthalpy."
                },
                {
                    id: "d36c10",
                    revisionOf: { paper: "AG-15-SET-B", question: 65 },
                    text: "An ideal gas expands adiabatically and does 240 J of work on its surroundings. With work done <b>by</b> the gas taken as positive, what is its change in internal energy?",
                    options: [
                        { key: "a", text: "-240 J" },
                        { key: "b", text: "+240 J" },
                        { key: "c", text: "0 J" },
                        { key: "d", text: "-480 J" }
                    ],
                    answer: "a",
                    explanation: "The stated sign convention gives $\\Delta U=Q-W$. Adiabatic means $Q=0$, so $\\Delta U=-240$ J. The gas supplies the work from its internal energy. Stating whether work is by or on the gas prevents a sign-convention ambiguity."
                },
                {
                    id: "d36c11",
                    revisionOf: { paper: "AG-15-SET-B", question: 67 },
                    text: "Atoms of which main-group family commonly gain one electron to complete their outer shell and form singly charged anions?",
                    options: [
                        { key: "a", text: "Alkali metals" },
                        { key: "b", text: "Alkaline-earth metals" },
                        { key: "c", text: "Halogens" },
                        { key: "d", text: "Noble gases" }
                    ],
                    answer: "c",
                    explanation: "Halogens have seven valence electrons and commonly gain one to form ions such as chloride and bromide. Alkali and alkaline-earth metals tend to lose electrons and form cations. Noble gases already have filled valence shells and do not commonly form such anions."
                },
                {
                    id: "d36c12",
                    revisionOf: { paper: "AG-15-SET-B", question: 69 },
                    text: "Cyclopentane has a carbon ring but lacks an aromatic pi-electron system. Which classification best describes it?",
                    options: [
                        { key: "a", text: "Aromatic hydrocarbon" },
                        { key: "b", text: "Alicyclic hydrocarbon" },
                        { key: "c", text: "Acyclic hydrocarbon" },
                        { key: "d", text: "Heterocyclic compound" }
                    ],
                    answer: "b",
                    explanation: "Alicyclic compounds are non-aromatic carbocyclic compounds: their rings contain carbon atoms, but their chemistry is aliphatic rather than aromatic. Acyclic means no ring, while heterocyclic requires a non-carbon atom within the ring. A ring alone is not evidence of aromaticity."
                },
                {
                    id: "d36c13",
                    revisionOf: { paper: "AG-15-SET-B", question: 72 },
                    text: "An unbranched alkene gives n-octane on hydrogenation. Its two alkene carbon atoms are symmetry-equivalent, so adding HBr gives only one constitutional bromo product. Ignoring stereoisomers, which alkene satisfies this description?",
                    options: [
                        { key: "a", text: "Oct-1-ene" },
                        { key: "b", text: "Oct-2-ene" },
                        { key: "c", text: "Oct-3-ene" },
                        { key: "d", text: "Oct-4-ene" }
                    ],
                    answer: "d",
                    explanation: "Oct-4-ene has equal propyl groups on the two sides of the double bond. Attaching hydrogen and bromine in either orientation therefore gives the same constitutional product, 4-bromooctane. The other listed double-bond positions do not have this end-for-end symmetry. Constitutional identity is distinguished from possible stereoisomers."
                },
                {
                    id: "d36c14",
                    revisionOf: { paper: "AG-15-SET-B", question: 73 },
                    text: "In the ideal planar structure of benzene, count every pairwise bond angle at each carbon, including both C-C-C and C-C-H angles. How many of these angles are 120&deg; in one molecule?",
                    options: [
                        { key: "a", text: "18" },
                        { key: "b", text: "6" },
                        { key: "c", text: "12" },
                        { key: "d", text: "24" }
                    ],
                    answer: "a",
                    explanation: "Each of the six trigonal planar carbon atoms has three bond directions and therefore three pairwise angles. All are ideally 120 degrees, giving $6\\times3=18$. Six counts only the ring's C-C-C angles and omits the twelve C-C-H angles included by the question."
                },
                {
                    id: "d36c15",
                    revisionOf: { paper: "AG-15-SET-B", question: 80 },
                    text: "Which sodium salt of an aromatic carboxylic acid is commonly used as a preservative in suitably acidic foods and drinks?",
                    options: [
                        { key: "a", text: "Sodium carbonate" },
                        { key: "b", text: "Sodium sulphate" },
                        { key: "c", text: "Sodium benzoate" },
                        { key: "d", text: "Sodium oxalate" }
                    ],
                    answer: "c",
                    explanation: "Sodium benzoate is the sodium salt of benzoic acid and is used as a preservative, especially in acidic products where undissociated benzoic acid contributes to antimicrobial activity. The other listed salts are not this aromatic carboxylate preservative. This identifies a use, not an unrestricted dosage recommendation."
                },
                {
                    id: "d36c16",
                    revisionOf: { paper: "AG-15-SET-B", question: 81 },
                    text: "The prominent membrane-active peptide in honeybee venom is which substance?",
                    options: [
                        { key: "a", text: "Histamine" },
                        { key: "b", text: "Melittin" },
                        { key: "c", text: "Serotonin" },
                        { key: "d", text: "Acetylcholine" }
                    ],
                    answer: "b",
                    explanation: "Melittin is a major peptide component of honeybee venom and interacts strongly with cell membranes. Bee venom is a complex mixture rather than simply an injection of one common acid. The question distinguishes this peptide from other small signalling molecules."
                },
                {
                    id: "d36c17",
                    revisionOf: { paper: "AG-15-SET-B", question: 83 },
                    text: "At comparable concentrations in a polar protic medium, which of these is generally the strongest nucleophile towards an unhindered primary alkyl halide?",
                    options: [
                        { key: "a", text: "Ethanol" },
                        { key: "b", text: "Ethanoic acid" },
                        { key: "c", text: "Acetate ion" },
                        { key: "d", text: "Hydrosulphide ion" }
                    ],
                    answer: "d",
                    explanation: "Hydrosulphide, HS-, combines negative charge with a readily polarizable sulphur atom and is generally a strong nucleophile under these conditions. Acetate has its charge delocalized by resonance, while the neutral acid and alcohol are weaker choices. Nucleophilicity depends on solvent and substrate, so the conditions are specified rather than asserting a universal order."
                },
                {
                    id: "d36c18",
                    revisionOf: { paper: "AG-15-SET-B", question: 84 },
                    text: "Which amine is expected to form an N-nitrosamine on reaction with nitrous acid under the usual cold aqueous test conditions?",
                    options: [
                        { key: "a", text: "Dipropylamine" },
                        { key: "b", text: "Propan-1-amine" },
                        { key: "c", text: "Methanamine" },
                        { key: "d", text: "Triethylamine" }
                    ],
                    answer: "a",
                    explanation: "Dipropylamine is a secondary amine and has the N-H group and substitution pattern required for ordinary N-nitrosamine formation. The two primary aliphatic amines follow different nitrous-acid chemistry, while triethylamine is tertiary and lacks an N-H bond. The distinction is the amine class, not simply chain length."
                },
                {
                    id: "d36c19",
                    revisionOf: { paper: "AG-15-SET-B", question: 88 },
                    text: "A strong dehydrating agent removes water from nitric acid without allowing the product to decompose. Which oxide is the corresponding acid anhydride?",
                    options: [
                        { key: "a", text: "$\\mathrm{NO}$" },
                        { key: "b", text: "$\\mathrm{N_2O}$" },
                        { key: "c", text: "$\\mathrm{N_2O_5}$" },
                        { key: "d", text: "$\\mathrm{NO_2}$" }
                    ],
                    answer: "c",
                    explanation: "Formally, removing one water molecule from two nitric-acid molecules gives dinitrogen pentoxide: $2\\mathrm{HNO_3}$ minus $\\mathrm{H_2O}$ leaves $\\mathrm{N_2O_5}$. Nitrogen remains in oxidation state +5. The no-decomposition condition distinguishes dehydration from later thermal breakdown of the oxide."
                },
                {
                    id: "d36c20",
                    revisionOf: { paper: "AG-15-SET-B", question: 89 },
                    text: "An acidic gas blackens moist lead acetate paper because a dark sulphide precipitate forms. Which gas is indicated?",
                    options: [
                        { key: "a", text: "Hydrogen chloride" },
                        { key: "b", text: "Hydrogen sulphide" },
                        { key: "c", text: "Carbon dioxide" },
                        { key: "d", text: "Ammonia" }
                    ],
                    answer: "b",
                    explanation: "Hydrogen sulphide supplies sulphide that reacts with lead(II) ions to form black lead sulphide, PbS. Neither hydrogen chloride nor carbon dioxide forms that sulphide, and ammonia is basic. The identity of the precipitate, not acidity alone, makes the observation diagnostic."
                },
                {
                    id: "d36c21",
                    revisionOf: { paper: "AG-15-SET-B", question: 91 },
                    text: "Which ion is expected to have the greatest magnitude of hydration enthalpy because of its high charge and small size?",
                    options: [
                        { key: "a", text: "$\\mathrm{Na^+}$" },
                        { key: "b", text: "$\\mathrm{K^+}$" },
                        { key: "c", text: "$\\mathrm{Mg^{2+}}$" },
                        { key: "d", text: "$\\mathrm{Al^{3+}}$" }
                    ],
                    answer: "d",
                    explanation: "Aluminium(III) has the greatest charge density among these ions and interacts especially strongly with polar water molecules. Its hydration is therefore the most exothermic in magnitude. Since hydration enthalpies are negative, greatest magnitude is specified to avoid confusing most negative with algebraically greatest."
                },
                {
                    id: "d36c22",
                    revisionOf: { paper: "AG-15-SET-B", question: 92 },
                    text: "Silver chloride dissolves in aqueous ammonia because silver(I) forms which principal soluble complex?",
                    options: [
                        { key: "a", text: "$[\\mathrm{Ag(NH_3)_2}]^+$" },
                        { key: "b", text: "$[\\mathrm{Ag(NH_3)_2}]^{2+}$" },
                        { key: "c", text: "$[\\mathrm{AgCl_2}]^-$" },
                        { key: "d", text: "$[\\mathrm{Ag(OH)_4}]^{3-}$" }
                    ],
                    answer: "a",
                    explanation: "Ammonia coordinates to silver(I) to form the diamminesilver(I) ion. Binding free silver ions shifts the dissolution equilibrium of AgCl towards solution. The effect is complex formation, not simply that ammonia is a better solvent than water or that it changes silver's oxidation state."
                },
                {
                    id: "d36c23",
                    revisionOf: { paper: "AG-15-SET-B", question: 95 },
                    text: "The brown product formed when ammonia reacts with Nessler's reagent is conventionally represented as a basic mercury amido-iodide. Which formula corresponds to that product?",
                    options: [
                        { key: "a", text: "$\\mathrm{K_2HgI_4}$" },
                        { key: "b", text: "$\\mathrm{HgI_2}$" },
                        { key: "c", text: "$\\mathrm{HgO\\cdot Hg(NH_2)I}$" },
                        { key: "d", text: "$[\\mathrm{Hg(NH_3)_2}]\\mathrm{I_2}$" }
                    ],
                    answer: "c",
                    explanation: "The conventional textbook product is written as $\\mathrm{HgO\\cdot Hg(NH_2)I}$, also represented by the linkage NH2-Hg-O-Hg-I. The tetraiodomercurate complex belongs to the starting Nessler reagent, not the brown amido product. This distinguishes product formation from ordinary ammonia coordination."
                },
                {
                    id: "d36c24",
                    revisionOf: { paper: "AG-15-SET-B", question: 98 },
                    text: "Alizarin, an anthraquinone derivative traditionally associated with madder, is best known for which industrial application?",
                    options: [
                        { key: "a", text: "Fuel refining" },
                        { key: "b", text: "Textile dyeing" },
                        { key: "c", text: "Glass etching" },
                        { key: "d", text: "Steel hardening" }
                    ],
                    answer: "b",
                    explanation: "Alizarin is a well-known mordant dye, historically obtained from madder and later manufactured synthetically. Its interaction with metal-ion mordants produces coloured complexes useful in dyeing. Its characteristic application is not fuel processing, etching glass or heat-treating steel."
                },
                {
                    id: "d36c25",
                    revisionOf: { paper: "AG-15-SET-B", question: 99 },
                    text: "As a wet sheet of cellulose fibres dries during papermaking, which interaction between hydroxyl-rich surfaces is especially important in binding neighbouring fibres together?",
                    options: [
                        { key: "a", text: "Metallic bonding" },
                        { key: "b", text: "Ionic bonding through sodium" },
                        { key: "c", text: "Disulphide cross-linking" },
                        { key: "d", text: "Hydrogen bonding" }
                    ],
                    answer: "d",
                    explanation: "Cellulose has many hydroxyl groups that can form hydrogen bonds when fibres come into close contact on drying. These interactions contribute strongly to paper strength. They are inter-fibre interactions, distinct from the covalent glycosidic bonds that hold each cellulose chain together."
                },
                {
                    id: "d36c26",
                    revisionOf: { paper: "AG-15-SET-B", question: 100 },
                    text: "Which combination supplies the usual starting materials for the Solvay process of manufacturing sodium carbonate?",
                    options: [
                        { key: "a", text: "Brine, limestone and ammonia" },
                        { key: "b", text: "Brine, gypsum and hydrogen" },
                        { key: "c", text: "Potash, limestone and nitrogen" },
                        { key: "d", text: "Brine, silica and sulphur dioxide" }
                    ],
                    answer: "a",
                    explanation: "The process uses concentrated sodium chloride solution, limestone and ammonia. Limestone supplies carbon dioxide and lime; ammonia assists bicarbonate precipitation and is largely recovered and recycled. Sodium chloride and limestone are the main net consumed raw materials, rather than ammonia being consumed once for every carbonate produced."
                }
            ]
        },
        {
            id: "zoology36",
            name: "Zoology Revision",
            subject: "Zoology",
            accent: "rose",
            blurb: "Physiology, animal tissues, selected animals, evolution and infection.",
            questions: [
                {
                    id: "d36z1",
                    revisionOf: { day: 35, question: 24, id: "d35h1" },
                    text: "Which enzyme at the duodenal brush border directly initiates the pancreatic protease cascade by converting trypsinogen into trypsin?",
                    options: [
                        { key: "a", text: "Pepsin" },
                        { key: "b", text: "Pancreatic amylase" },
                        { key: "c", text: "Enteropeptidase" },
                        { key: "d", text: "Carboxypeptidase" }
                    ],
                    answer: "c",
                    explanation: "Enteropeptidase, also called enterokinase, activates trypsinogen at the intestinal brush border. The resulting trypsin activates additional pancreatic zymogens. Pepsin is a gastric protease, while amylase digests starch; neither starts this intestinal trypsin-activation step."
                },
                {
                    id: "d36z2",
                    revisionOf: { day: 35, question: 26, id: "d35h3" },
                    text: "A person's tidal volume is 0.50 L, inspiratory reserve 2.40 L, expiratory reserve 1.20 L and residual volume 1.30 L. What is the vital capacity?",
                    options: [
                        { key: "a", text: "4.10 L" },
                        { key: "b", text: "5.40 L" },
                        { key: "c", text: "2.90 L" },
                        { key: "d", text: "3.60 L" }
                    ],
                    answer: "a",
                    explanation: "Vital capacity is tidal volume plus inspiratory reserve plus expiratory reserve: $0.50+2.40+1.20=4.10$ L. Residual volume remains after maximal expiration and is excluded. Including that additional 1.30 L would give total lung capacity, not vital capacity."
                },
                {
                    id: "d36z3",
                    revisionOf: { day: 35, question: 28, id: "d35h5" },
                    text: "At the start of ventricular systole, ventricular pressure rises while volume remains constant until ejection begins. During this interval, which valves are open?",
                    options: [
                        { key: "a", text: "Only the atrioventricular valves" },
                        { key: "b", text: "Only the semilunar valves" },
                        { key: "c", text: "Both sets of valves" },
                        { key: "d", text: "Neither set of valves" }
                    ],
                    answer: "d",
                    explanation: "This is isovolumetric contraction. The atrioventricular valves have closed, and the semilunar valves have not yet opened because ventricular pressure has not exceeded arterial pressure. All valves are closed, so pressure rises without either inflow or outflow changing ventricular volume."
                },
                {
                    id: "d36z4",
                    revisionOf: { day: 35, question: 29, id: "d35h6" },
                    text: "A left ventricle holds 170 mL at the end of filling and 90 mL after contraction. At a heart rate of 75 beats per minute, what is its cardiac output?",
                    options: [
                        { key: "a", text: "6.75 L/min" },
                        { key: "b", text: "6.00 L/min" },
                        { key: "c", text: "12.75 L/min" },
                        { key: "d", text: "4.50 L/min" }
                    ],
                    answer: "b",
                    explanation: "The ejected volume per beat is $170-90=80$ mL. Multiplying by heart rate gives $80\\times75=6000$ mL/min, or 6.00 L/min. The residual end-systolic blood is not pumped out in that beat, so the full filling volume must not be used as stroke volume."
                },
                {
                    id: "d36z5",
                    revisionOf: { day: 35, question: 31, id: "d35h8" },
                    text: "Which nephron segment removes substantial NaCl from tubular fluid while remaining essentially impermeable to water, thereby acting as a diluting segment?",
                    options: [
                        { key: "a", text: "Thick ascending limb of Henle" },
                        { key: "b", text: "Thin descending limb of Henle" },
                        { key: "c", text: "Proximal convoluted tubule" },
                        { key: "d", text: "Collecting duct under high ADH" }
                    ],
                    answer: "a",
                    explanation: "The thick ascending limb transports salts out without corresponding water movement, reducing the tubular fluid's osmolarity. The descending limb permits water movement, and ADH increases collecting-duct water permeability. The contrast between solute movement and water permeability is the key to identifying this segment."
                },
                {
                    id: "d36z6",
                    revisionOf: { day: 35, question: 34, id: "d35h11" },
                    text: "A healthy young person shifts focus from a nearby page to a distant hill. Which change in the accommodation apparatus is expected?",
                    options: [
                        { key: "a", text: "Ciliary muscles contract; lens becomes flatter" },
                        { key: "b", text: "Ciliary muscles relax; lens becomes rounder" },
                        { key: "c", text: "Ciliary muscles relax; lens becomes flatter" },
                        { key: "d", text: "Ciliary muscles contract; lens becomes rounder" }
                    ],
                    answer: "c",
                    explanation: "For distant vision the ciliary muscles relax, increasing tension in the suspensory ligaments and flattening the lens. Its converging power decreases. Near vision uses the opposite sequence: muscle contraction, reduced ligament tension and a rounder lens. Iris muscles regulate pupil size, a different function."
                },
                {
                    id: "d36z7",
                    revisionOf: { day: 35, question: 35, id: "d35h12" },
                    text: "The thyroid gland cannot produce enough thyroxine, but the hypothalamus and pituitary still respond normally to feedback. Which combination is expected?",
                    options: [
                        { key: "a", text: "Low thyroxine and low TSH" },
                        { key: "b", text: "Low thyroxine and high TSH" },
                        { key: "c", text: "High thyroxine and low TSH" },
                        { key: "d", text: "High thyroxine and high TSH" }
                    ],
                    answer: "b",
                    explanation: "Reduced thyroid hormone removes some negative feedback from the functioning hypothalamic-pituitary axis. The pituitary increases thyroid-stimulating hormone, TSH, despite the gland's inadequate response. This is a primary thyroid problem, not pituitary failure, which would not produce the same compensatory TSH rise."
                },
                {
                    id: "d36z8",
                    revisionOf: { paper: "AG-15-SET-B", question: 101 },
                    text: "A spark-discharge experiment circulates methane, ammonia, hydrogen and water vapour in an apparatus modelling a proposed early-Earth environment. Which finding matches the classic Miller-Urey result?",
                    options: [
                        { key: "a", text: "Spontaneous formation of living bacteria" },
                        { key: "b", text: "Formation of fully functional nuclei" },
                        { key: "c", text: "Production of complete chromosomes" },
                        { key: "d", text: "Formation of amino acids and other organics" }
                    ],
                    answer: "d",
                    explanation: "The classic experiment demonstrated abiotic synthesis of amino acids and other organic compounds from the chosen gas mixture with an energy source. It did not create living cells or complete organisms. The result supports possible chemical steps in origin-of-life models, not a claim that the exact ancient atmosphere is established by the apparatus."
                },
                {
                    id: "d36z9",
                    revisionOf: { paper: "AG-15-SET-B", question: 105 },
                    text: "Which arrangement best describes the nervous system of a typical roundworm such as Ascaris?",
                    options: [
                        { key: "a", text: "A diffuse nerve net without cords" },
                        { key: "b", text: "A hollow dorsal nerve tube only" },
                        { key: "c", text: "A nerve ring with longitudinal nerve cords" },
                        { key: "d", text: "A brain with a vertebrate spinal cord" }
                    ],
                    answer: "c",
                    explanation: "Nematodes have a circumpharyngeal nerve ring and longitudinal cords, including prominent dorsal and ventral cords with additional lateral components. A diffuse nerve net is associated with simpler arrangements such as cnidarians, while a hollow dorsal neural tube is a chordate feature."
                },
                {
                    id: "d36z10",
                    revisionOf: { paper: "AG-15-SET-B", question: 108 },
                    text: "In normal human skin, the pigment-producing melanocytes of the epidermis are located mainly in which layer?",
                    options: [
                        { key: "a", text: "Stratum basale, or germinativum" },
                        { key: "b", text: "Stratum corneum" },
                        { key: "c", text: "Stratum lucidum" },
                        { key: "d", text: "Subcutaneous adipose tissue" }
                    ],
                    answer: "a",
                    explanation: "Melanocytes lie mainly in the basal epidermal layer and transfer melanin-containing melanosomes to neighbouring keratinocytes. Pigment may therefore be found beyond the cell that produced it. The question asks specifically for the main location of the pigment-producing cells, not every layer containing some melanin."
                },
                {
                    id: "d36z11",
                    revisionOf: { paper: "AG-15-SET-B", question: 115 },
                    text: "In the standard account of earthworm digestion, calciferous glands help counter acidity associated with swallowed soil and organic matter. Their stated function is primarily:",
                    options: [
                        { key: "a", text: "Absorption of amino acids" },
                        { key: "b", text: "Digestion of starch" },
                        { key: "c", text: "Production of bile pigments" },
                        { key: "d", text: "Neutralization of humic acid" }
                    ],
                    answer: "d",
                    explanation: "Calciferous glands are associated with calcium carbonate secretion and, in the standard earthworm account, neutralization of humic acids in ingested material. They are not bile-producing vertebrate glands or the primary site of protein absorption. The distinction concerns the secretion's acid-counteracting role."
                },
                {
                    id: "d36z12",
                    revisionOf: { paper: "AG-15-SET-B", question: 118 },
                    text: "Argentaffin enterochromaffin cells, many of which release serotonin, are characteristic endocrine cells of which location?",
                    options: [
                        { key: "a", text: "Renal glomeruli" },
                        { key: "b", text: "Gastrointestinal mucosa" },
                        { key: "c", text: "Skeletal muscle fibres" },
                        { key: "d", text: "Articular cartilage" }
                    ],
                    answer: "b",
                    explanation: "Enterochromaffin cells occur within the epithelial lining and glands of the gastrointestinal tract. Many store and release serotonin and show argentaffin staining properties. The term identifies specialized mucosal endocrine cells, not a general cell type of cartilage, kidney filtration units or skeletal muscle."
                },
                {
                    id: "d36z13",
                    revisionOf: { paper: "AG-15-SET-B", question: 121 },
                    text: "Carbonic anhydrase catalyses rapid interconversion of carbon dioxide and bicarbonate in red blood cells. Which metal ion is essential in its usual active site?",
                    options: [
                        { key: "a", text: "Iron" },
                        { key: "b", text: "Copper" },
                        { key: "c", text: "Zinc" },
                        { key: "d", text: "Manganese" }
                    ],
                    answer: "c",
                    explanation: "The familiar mammalian carbonic anhydrases are zinc enzymes. Their zinc-containing active site facilitates the reversible hydration of carbon dioxide, important in gas transport and acid-base balance. Iron belongs to haemoglobin's haem group, but that does not make it the metal of this separate enzyme."
                },
                {
                    id: "d36z14",
                    revisionOf: { paper: "AG-15-SET-B", question: 123 },
                    text: "Blood travels from intestinal capillaries through a vessel directly to liver sinusoids before returning to the heart. What type of circulation is illustrated?<svg class='q-fig' viewBox='0 0 350 105' width='350' height='105' role='img' aria-label='Intestinal capillary network connected through a portal vein to a liver sinusoidal network before the blood returns to the heart'><g fill='none' stroke='currentColor' stroke-width='1.5'><path d='M20 50h30m0 0 20-22 25 22-25 22-20-22m20-22v44M95 50h64m-8-5 8 5-8 5M159 50h20m0 0 20-22 25 22-25 22-20-22m20-22v44M224 50h98m-8-5 8 5-8 5'/></g><g fill='currentColor' text-anchor='middle' font-size='11'><text x='66' y='92'>Intestine</text><text x='136' y='22'>Vein</text><text x='200' y='92'>Liver</text><text x='286' y='22'>To heart</text></g></svg>",
                    options: [
                        { key: "a", text: "Portal circulation" },
                        { key: "b", text: "Coronary circulation" },
                        { key: "c", text: "Pulmonary circulation" },
                        { key: "d", text: "Lymphatic circulation" }
                    ],
                    answer: "a",
                    explanation: "A portal system connects one capillary bed to another through a portal vessel before blood returns to the heart. The hepatic portal vein connects intestinal capillaries to liver sinusoids, allowing absorbed substances to reach the liver first. This is blood circulation, not lymph flow."
                },
                {
                    id: "d36z15",
                    revisionOf: { paper: "AG-15-SET-B", question: 125 },
                    text: "A nerve impulse propagates along an axon through changing membrane voltage and regulated movement of ions. It is best described as:",
                    options: [
                        { key: "a", text: "A mechanical pressure wave" },
                        { key: "b", text: "A thermal conduction wave" },
                        { key: "c", text: "A stream of free electrons in metal" },
                        { key: "d", text: "An electrochemical signal" }
                    ],
                    answer: "d",
                    explanation: "Action potentials involve voltage changes generated by ion movements through membrane channels and propagation along the excitable membrane. The mechanism is electrochemical. It is not a sound-like mechanical wave or the free-electron conduction found in a metal wire."
                },
                {
                    id: "d36z16",
                    revisionOf: { paper: "AG-15-SET-B", question: 126 },
                    text: "A person deliberately holds a breath and then consciously takes a deep breath. The voluntary command originates mainly in the:",
                    options: [
                        { key: "a", text: "Medullary respiratory centres" },
                        { key: "b", text: "Spinal sensory ganglia" },
                        { key: "c", text: "Motor regions of the cerebral cortex" },
                        { key: "d", text: "Carotid-body chemoreceptors" }
                    ],
                    answer: "c",
                    explanation: "Voluntary control of respiratory muscles is initiated in the cerebral cortex through descending motor pathways. Brainstem centres organize automatic breathing, while peripheral chemoreceptors supply feedback. Consciously choosing a breath is therefore distinguished from the automatic rhythm that usually runs without attention."
                },
                {
                    id: "d36z17",
                    revisionOf: { paper: "AG-15-SET-B", question: 128 },
                    text: "Deiters' cells, the outer phalangeal supporting cells associated with outer hair cells, occur in which sensory structure?",
                    options: [
                        { key: "a", text: "Retina" },
                        { key: "b", text: "Organ of Corti" },
                        { key: "c", text: "Olfactory epithelium" },
                        { key: "d", text: "Taste bud" }
                    ],
                    answer: "b",
                    explanation: "Deiters' supporting cells are components of the cochlear organ of Corti. They support outer hair cells and contribute to the sensory epithelium's organization. Specifying outer phalangeal cells avoids confusion with other anatomical structures historically bearing the same eponym."
                },
                {
                    id: "d36z18",
                    revisionOf: { paper: "AG-15-SET-B", question: 130 },
                    text: "Untreated congenital deficiency of which hormone can severely impair a child's growth and brain development?",
                    options: [
                        { key: "a", text: "Thyroxine" },
                        { key: "b", text: "Adrenaline" },
                        { key: "c", text: "Calcitonin" },
                        { key: "d", text: "Aldosterone" }
                    ],
                    answer: "a",
                    explanation: "Thyroid hormone is essential for normal early brain development and growth. Untreated congenital hypothyroidism can therefore cause serious developmental effects. This educational distinction is one reason newborn screening and timely clinical treatment are important; the other listed hormones do not replace thyroid hormone's developmental role."
                },
                {
                    id: "d36z19",
                    revisionOf: { paper: "AG-15-SET-B", question: 135 },
                    text: "Which influenza-virus surface protein cleaves sialic-acid residues and helps newly formed virions detach from an infected cell?",
                    options: [
                        { key: "a", text: "Haemagglutinin" },
                        { key: "b", text: "Matrix protein M1" },
                        { key: "c", text: "Nucleoprotein" },
                        { key: "d", text: "Neuraminidase" }
                    ],
                    answer: "d",
                    explanation: "Neuraminidase removes sialic-acid residues, facilitating release and reducing aggregation of new virions. Haemagglutinin mainly mediates binding to sialic-acid-containing receptors during entry. The names HA and NA refer to different steps in the viral life cycle."
                },
                {
                    id: "d36z20",
                    revisionOf: { paper: "AG-15-SET-B", question: 139 },
                    text: "The reduction of functional digits and elongation of limbs in horses are associated primarily with adaptation for:",
                    options: [
                        { key: "a", text: "Burrowing" },
                        { key: "b", text: "Climbing" },
                        { key: "c", text: "Running" },
                        { key: "d", text: "Gliding" }
                    ],
                    answer: "c",
                    explanation: "These features are characteristic of cursorial, or running, adaptation. In the horse lineage, support became concentrated on a single functional digit with an elongated distal limb. Fossorial refers to burrowing and scansorial to climbing, rather than efficient running on open ground."
                },
                {
                    id: "d36z21",
                    revisionOf: { paper: "AG-15-SET-B", question: 140 },
                    text: "Which neuron carries information from a stimulated skin receptor towards the central nervous system?",
                    options: [
                        { key: "a", text: "Motor efferent neuron" },
                        { key: "b", text: "Sensory afferent neuron" },
                        { key: "c", text: "Local interneuron only" },
                        { key: "d", text: "Autonomic motor neuron" }
                    ],
                    answer: "b",
                    explanation: "Afferent sensory neurons convey information towards the central nervous system. Efferent motor neurons carry commands away to effectors, while interneurons connect neural pathways within the CNS. The distinction here is the direction and role of the signal, not merely whether the neuron conducts an impulse."
                }
            ]
        },
        {
            id: "botanyrevision36",
            name: "Botany Revision",
            subject: "Botany",
            accent: "emerald",
            blurb: "Adaptation, organelles, ferns, mineral nutrition, cell division and biotechnology.",
            questions: [
                {
                    id: "d36b1",
                    revisionOf: { paper: "AG-15-SET-B", question: 146 },
                    text: "Two otherwise similar leaves have the same exposed area and stomatal behaviour. Which feature would most directly reduce water loss through the epidermal surface between stomata?",
                    options: [
                        { key: "a", text: "A thinner epidermal cuticle" },
                        { key: "b", text: "A thicker waxy cuticle" },
                        { key: "c", text: "A shorter root system" },
                        { key: "d", text: "A larger exposed surface" }
                    ],
                    answer: "b",
                    explanation: "A thick waxy cuticle reduces cuticular water loss across the epidermal surface. The question holds area and stomatal behaviour fixed to isolate this mechanism. Desert plants may also reduce leaf area or alter stomata, but those are different adaptations and are not the changed factor here."
                },
                {
                    id: "d36b2",
                    revisionOf: { paper: "AG-15-SET-B", question: 149 },
                    text: "Which event is <b>not</b> a step in processing a newly made secretory protein as it enters the rough endoplasmic reticulum?",
                    options: [
                        { key: "a", text: "Folding of the polypeptide" },
                        { key: "b", text: "Cleavage of a signal peptide" },
                        { key: "c", text: "Initial protein glycosylation" },
                        { key: "d", text: "Synthesis of phospholipid molecules" }
                    ],
                    answer: "d",
                    explanation: "Folding, signal-peptide cleavage and initial glycosylation are protein-processing events associated with the rough ER. Phospholipid synthesis produces membrane lipids rather than modifying that secretory protein. This distinction does not claim that lipid-synthesis enzymes are absent from every part of an ER membrane bearing ribosomes."
                },
                {
                    id: "d36b3",
                    revisionOf: { paper: "AG-15-SET-B", question: 150 },
                    text: "In the typical mature archegonium of Dryopteris, liquefaction of which cells opens the passage towards the egg and contributes to the mucilaginous material?",
                    options: [
                        { key: "a", text: "Binucleate neck canal and ventral canal cells" },
                        { key: "b", text: "Four neck canal cells and the egg cell" },
                        { key: "c", text: "Two synergids and the central cell" },
                        { key: "d", text: "The egg and both outer neck-wall layers" }
                    ],
                    answer: "a",
                    explanation: "The characteristic fern archegonium has a binucleate neck canal cell and a ventral canal cell above the egg. Their contents break down, opening a route for swimming sperm and contributing to the mucilage. The egg remains the female gamete, while synergids belong to the angiosperm embryo sac, not this fern archegonium."
                },
                {
                    id: "d36b4",
                    revisionOf: { paper: "AG-15-SET-B", question: 161 },
                    text: "Which micronutrient is a component of the usual iron-molybdenum cofactor of nitrogenase in nitrogen-fixing root-nodule bacteria?",
                    options: [
                        { key: "a", text: "Zinc" },
                        { key: "b", text: "Manganese" },
                        { key: "c", text: "Molybdenum" },
                        { key: "d", text: "Chlorine" }
                    ],
                    answer: "c",
                    explanation: "Molybdenum is part of the FeMo cofactor in the common nitrogenase system, which reduces atmospheric nitrogen. It is therefore associated with biological nitrogen fixation in legume nodules. Other elements have important plant roles, but the specific cofactor named here requires molybdenum."
                },
                {
                    id: "d36b5",
                    revisionOf: { paper: "AG-15-SET-B", question: 162 },
                    text: "Who pioneered DNA fingerprinting by exploiting highly variable repetitive regions of human DNA in the 1980s?",
                    options: [
                        { key: "a", text: "Frederick Sanger" },
                        { key: "b", text: "Alec Jeffreys" },
                        { key: "c", text: "Barbara McClintock" },
                        { key: "d", text: "Gregor Mendel" }
                    ],
                    answer: "b",
                    explanation: "Alec Jeffreys developed DNA fingerprinting using variable minisatellite patterns. Sanger is associated with sequencing methods, McClintock with transposable elements, and Mendel with classical inheritance laws. Related discoveries in genetics should not be substituted for the specific origin of DNA profiling."
                },
                {
                    id: "d36b6",
                    revisionOf: { paper: "AG-15-SET-B", question: 165 },
                    text: "A diploid plant cell has $2n=12$. At mitotic metaphase, each duplicated chromosome has one kinetochore on each sister chromatid. How many kinetochores are present in that cell?",
                    options: [
                        { key: "a", text: "6" },
                        { key: "b", text: "12" },
                        { key: "c", text: "48" },
                        { key: "d", text: "24" }
                    ],
                    answer: "d",
                    explanation: "The metaphase cell has 12 chromosomes, each consisting of two sister chromatids. Each sister has its own kinetochore, giving $12\\times2=24$. DNA replication doubles chromatids and kinetochores, but chromosome number remains 12 until sister centromeres separate at anaphase."
                },
                {
                    id: "d36b7",
                    revisionOf: { paper: "AG-15-SET-B", question: 178 },
                    text: "When ATP is hydrolysed to ADP and inorganic phosphate, the terminal phosphate is released by cleavage of which type of linkage?",
                    options: [
                        { key: "a", text: "Phosphoanhydride linkage" },
                        { key: "b", text: "Peptide linkage" },
                        { key: "c", text: "Glycosidic linkage" },
                        { key: "d", text: "Disulphide linkage" }
                    ],
                    answer: "a",
                    explanation: "The phosphate-to-phosphate connections in ATP are phosphoanhydride linkages. The overall hydrolysis is energetically favourable because the products are better stabilized under the relevant conditions. Breaking a bond alone requires energy; the net energy release belongs to the whole hydrolysis reaction, not bond breaking in isolation."
                }
            ]
        },
        {
            id: "mat36",
            name: "MAT Revision",
            subject: "MAT",
            accent: "slate",
            blurb: "Logical inference, clock intervals, sets, letter patterns and spatial reasoning.",
            questions: [
                {
                    id: "d36m1",
                    revisionOf: { day: 35, question: 20, id: "d35m2" },
                    text: "Use only the statements given.<br><b>Statements:</b> All editors are graduates. Some graduates are not employees.<br><b>Conclusions:</b> I. Some editors are not employees. II. All graduates are editors.<br>Which conclusions necessarily follow?",
                    options: [
                        { key: "a", text: "Only I" },
                        { key: "b", text: "Neither I nor II" },
                        { key: "c", text: "Both I and II" },
                        { key: "d", text: "Only II" }
                    ],
                    answer: "b",
                    explanation: "The graduates who are not employees might all lie outside the editor group, so I is not guaranteed. The inclusion of every editor among graduates does not establish the reverse inclusion, so II is not guaranteed. Both statements remain true if all editors are employed and some other graduates are not employed."
                },
                {
                    id: "d36m2",
                    revisionOf: { day: 35, question: 23, id: "d35m5" },
                    text: "Only the top and bottom faces of a large cube are painted blue. It is cut into 216 equal small cubes, six along each edge. How many small cubes have <b>no</b> painted face?<svg class='q-fig' viewBox='0 0 258 172' width='284' height='189' role='img' aria-label='Six-by-six-by-six cube; only the top and opposite bottom faces are painted blue'><path d='M12 44 40 16h84L96 44Z' fill='#2563eb' fill-opacity='0.25'/><g fill='none' stroke='currentColor' stroke-width='1.25'><path d='M12 44h84v84H12ZM12 44 40 16h84v84l-28 28M96 44 124 16'/><path d='M26 44v84M40 44v84M54 44v84M68 44v84M82 44v84M12 58h84M12 72h84M12 86h84M12 100h84M12 114h84M26 44 54 16M40 44 68 16M54 44 82 16M68 44 96 16M82 44 110 16M16.667 39.333h84M21.333 34.667h84M26 30h84M30.667 25.333h84M35.333 20.667h84M100.667 39.333v84M105.333 34.667v84M110 30v84M114.667 25.333v84M119.333 20.667v84M96 58 124 30M96 72 124 44M96 86 124 58M96 100 124 72M96 114 124 86'/></g><g fill='currentColor' font-size='11'><text x='143' y='59'>Top and bottom</text><text x='143' y='75'>painted</text><text x='73' y='155' text-anchor='middle'>6 cubes per edge</text></g></svg>",
                    options: [
                        { key: "a", text: "64" },
                        { key: "b", text: "72" },
                        { key: "c", text: "144" },
                        { key: "d", text: "216" }
                    ],
                    answer: "c",
                    explanation: "Each of the two painted faces contributes one layer of $6^2=36$ cubes. The four middle layers are unpainted, including their exposed side edges, because the vertical faces were never painted. Thus the count is $4\\times36=144$. The familiar $(6-2)^3=64$ applies only when all six outside faces were painted."
                },
                {
                    id: "d36m3",
                    revisionOf: { paper: "AG-15-SET-B", question: 183 },
                    text: "A clock takes 16 seconds from its first strike to its ninth strike. At the same uniform interval between strikes, how long does it take from its first strike to its twelfth?",
                    options: [
                        { key: "a", text: "24 seconds" },
                        { key: "b", text: "20 seconds" },
                        { key: "c", text: "18 seconds" },
                        { key: "d", text: "22 seconds" }
                    ],
                    answer: "d",
                    explanation: "Nine strikes have eight intervals between the first and last, so each interval is $16/8=2$ seconds. Twelve strikes have eleven intervals, taking $11\\times2=22$ seconds. Timing from first to last means counting gaps rather than multiplying by the number of strikes."
                },
                {
                    id: "d36m4",
                    revisionOf: { paper: "AG-15-SET-B", question: 191 },
                    text: "In a town, a person can independently be a teacher, a musician and a cyclist. Every combination occurs, including membership in all three groups and in each group alone. Which diagram best represents these three sets?",
                    options: [
                        { key: "a", text: "<svg class='opt-fig' viewBox='0 0 160 140' role='img' aria-label='Three pairwise-overlapping circles with a common central overlap'><g fill='none' stroke='currentColor' stroke-width='2'><circle cx='55' cy='48' r='34'/><circle cx='105' cy='48' r='34'/><circle cx='80' cy='92' r='34'/></g></svg>Three overlapping sets" },
                        { key: "b", text: "<svg class='opt-fig' viewBox='0 0 160 140' role='img' aria-label='Three nested circles'><g fill='none' stroke='currentColor' stroke-width='2'><circle cx='80' cy='70' r='60'/><circle cx='80' cy='70' r='39'/><circle cx='80' cy='70' r='18'/></g></svg>Three nested sets" },
                        { key: "c", text: "<svg class='opt-fig' viewBox='0 0 160 140' role='img' aria-label='Three circles with no overlap'><g fill='none' stroke='currentColor' stroke-width='2'><circle cx='38' cy='43' r='26'/><circle cx='121' cy='43' r='26'/><circle cx='80' cy='107' r='26'/></g></svg>Three disjoint sets" },
                        { key: "d", text: "<svg class='opt-fig' viewBox='0 0 160 140' role='img' aria-label='One circle inside a second circle, with a third separate circle'><g fill='none' stroke='currentColor' stroke-width='2'><circle cx='50' cy='70' r='44'/><circle cx='50' cy='70' r='21'/><circle cx='130' cy='70' r='23'/></g></svg>Nested and separate sets" }
                    ],
                    answer: "a",
                    explanation: "All three sets need exclusive regions, pairwise overlaps and a shared three-way overlap. Three mutually overlapping circles provide all seven membership regions. Nested circles would force one group to be a subset of another, and separated circles would forbid overlaps that the question explicitly says occur."
                },
                {
                    id: "d36m5",
                    revisionOf: { paper: "AG-15-SET-B", question: 192 },
                    text: "The same three-letter block repeats four times. Fill the blanks from left to right:<br><b>r _ s &nbsp; r s _ &nbsp; _ s s &nbsp; r _ s</b>",
                    options: [
                        { key: "a", text: "s, r, s, s" },
                        { key: "b", text: "r, s, s, r" },
                        { key: "c", text: "s, s, r, s" },
                        { key: "d", text: "r, r, s, s" }
                    ],
                    answer: "c",
                    explanation: "The visible positions in the blocks identify the repeated block as rss. Completing each block in turn requires s in the first, s in the second, r in the third and s in the fourth. The full sequence is rss rss rss rss, so the missing letters are s, s, r, s."
                },
                {
                    id: "d36m6",
                    revisionOf: { paper: "AG-15-SET-B", question: 193 },
                    text: "Read the adjacent vertex pairs clockwise, starting at the top: <b>(6, 13), (12, 25), (18, ?)</b>. Each pair follows the same rule. What replaces the question mark?<svg class='q-fig' viewBox='0 0 240 235' width='252' height='247' role='img' aria-label='Six-pointed star with clockwise vertex numbers 6, 13, 12, 25, 18 and a question mark'><g fill='none' stroke='currentColor' stroke-width='1.7'><path d='M120 12 216 168H24ZM24 64h192l-96 156Z'/></g><g fill='currentColor' text-anchor='middle' font-size='16'><text x='120' y='51'>6</text><text x='181' y='84'>13</text><text x='181' y='156'>12</text><text x='120' y='193'>25</text><text x='59' y='156'>18</text><text x='59' y='84'>?</text></g></svg>",
                    options: [
                        { key: "a", text: "35" },
                        { key: "b", text: "37" },
                        { key: "c", text: "36" },
                        { key: "d", text: "39" }
                    ],
                    answer: "b",
                    explanation: "The second number in each pair is twice the first plus one: $2(6)+1=13$ and $2(12)+1=25$. The missing value is therefore $2(18)+1=37$. The stated pairing matters; treating all six vertices as an ordinary consecutive sequence would apply a different rule."
                },
                {
                    id: "d36m7",
                    revisionOf: { paper: "AG-15-SET-B", question: 194 },
                    text: "Three numbers below are prime and one is composite. Which is the odd one out?",
                    options: [
                        { key: "a", text: "47" },
                        { key: "b", text: "53" },
                        { key: "c", text: "71" },
                        { key: "d", text: "63" }
                    ],
                    answer: "d",
                    explanation: "63 has nontrivial factors, for example $63=7\\times9$, so it is composite. The other three numbers are prime. For 47, 53 and 71, testing prime divisors no larger than their square roots establishes primality. Stating the classification makes the numerical odd-one-out criterion definite."
                },
                {
                    id: "d36m8",
                    revisionOf: { paper: "AG-15-SET-B", question: 196 },
                    text: "Which option contains the complete target path with the <b>same proportions and orientation</b>? Uniform resizing and extra intersecting lines are allowed, but the target may not be rotated, reflected or distorted.<svg class='q-fig' viewBox='0 0 92 92' width='138' height='138' role='img' aria-label='Open angular target path: diagonal up-right, vertical down, horizontal left, vertical down and horizontal right'><path d='M30 36 46 24V48H30V72H58' fill='none' stroke='currentColor' stroke-width='2.4' stroke-linejoin='round'/></svg>",
                    options: [
                        { key: "a", text: "<svg class='opt-fig' viewBox='0 0 92 92' role='img' aria-label='Pattern A: triangular outline with intersecting lines and a stepped path'><g fill='none' stroke='currentColor' stroke-width='1.8' stroke-linejoin='round'><path d='M4 86 46 2 88 86ZM46 2V86M24 58H68M46 48 76 70'/><path d='M30 36 46 24V48H30V72H58'/></g></svg>Pattern A" },
                        { key: "b", text: "<svg class='opt-fig' viewBox='0 0 92 92' role='img' aria-label='Pattern B: triangular outline with a stepped path ending in an upward diagonal'><g fill='none' stroke='currentColor' stroke-width='1.8' stroke-linejoin='round'><path d='M4 86 46 2 88 86ZM46 2V86M24 58H68M46 48 76 70'/><path d='M30 36 46 24V48H30V72L58 60'/></g></svg>Pattern B" },
                        { key: "c", text: "<svg class='opt-fig' viewBox='0 0 92 92' role='img' aria-label='Pattern C: triangular outline with a stepped path starting in a downward diagonal'><g fill='none' stroke='currentColor' stroke-width='1.8' stroke-linejoin='round'><path d='M4 86 46 2 88 86ZM46 2V86M24 58H68M46 48 76 70'/><path d='M30 24 46 36V48H30V72H58'/></g></svg>Pattern C" },
                        { key: "d", text: "<svg class='opt-fig' viewBox='0 0 92 92' role='img' aria-label='Pattern D: triangular outline with a stepped path containing a diagonal middle connection'><g fill='none' stroke='currentColor' stroke-width='1.8' stroke-linejoin='round'><path d='M4 86 46 2 88 86ZM46 2V86M24 58H68M46 48 76 70'/><path d='M30 36 46 24V48L30 58V72H58'/></g></svg>Pattern D" }
                    ],
                    answer: "a",
                    explanation: "Pattern A retains all five target segments, including the upper rising diagonal, the leftward middle horizontal and the final rightward horizontal. Pattern B replaces the final horizontal by a diagonal, C changes the first diagonal, and D changes the middle connection. Extra lines may cross a target segment but cannot supply a missing straight segment in another direction."
                }
            ]
        },
        {
            id: "anatomy36",
            name: "Plant Anatomy",
            subject: "Botany",
            accent: "cyan",
            blurb: "Plant tissues, vascular bundles and internal structure of roots, stems and leaves.",
            questions: [
                {
                    id: "d36a1",
                    additionalPractice: true,
                    text: "Living supporting cells beneath a young petiole's epidermis show thickening concentrated at their corners. Which wall materials principally produce this characteristic collenchyma thickening?",
                    options: [
                        { key: "a", text: "Suberin and wax" },
                        { key: "b", text: "Chitin and protein" },
                        { key: "c", text: "Cellulose and pectin" },
                        { key: "d", text: "Lignin and cutin" }
                    ],
                    answer: "c",
                    explanation: "Collenchyma has unevenly thickened primary walls rich in cellulose and pectic substances, usually remaining living and flexible. This suits support in growing parts. Strongly lignified secondary walls instead characterize much sclerenchyma, while suberin and wax are associated with protective barriers."
                },
                {
                    id: "d36a2",
                    additionalPractice: true,
                    text: "A pear's gritty texture comes from clusters of short cells with very thick lignified walls, narrow lumina and numerous pits. These cells are:",
                    options: [
                        { key: "a", text: "Sieve-tube elements" },
                        { key: "b", text: "Sclereids" },
                        { key: "c", text: "Collenchyma cells" },
                        { key: "d", text: "Guard cells" }
                    ],
                    answer: "b",
                    explanation: "Sclereids, often called stone cells, are typically short or irregular sclerenchyma cells with heavily thickened lignified walls. Their clusters account for the gritty texture. Fibres are another form of sclerenchyma but are generally elongated; the description here is of sclereids."
                },
                {
                    id: "d36a3",
                    additionalPractice: true,
                    text: "Selective damage to companion cells would most directly impair the metabolic support of which mature angiosperm conducting cells?",
                    options: [
                        { key: "a", text: "Sieve-tube elements" },
                        { key: "b", text: "Vessel elements" },
                        { key: "c", text: "Tracheids" },
                        { key: "d", text: "Xylem fibres" }
                    ],
                    answer: "a",
                    explanation: "Mature sieve-tube elements are living but lose their nuclei and many organelles. Their closely associated companion cells provide important metabolic support through numerous connections. Vessel elements and tracheids are dead at functional maturity, so they do not have this companion-cell relationship."
                },
                {
                    id: "d36a4",
                    additionalPractice: true,
                    text: "Which usual component of functional xylem retains living protoplasts and contributes to storage and lateral transport?",
                    options: [
                        { key: "a", text: "Vessel elements" },
                        { key: "b", text: "Tracheids" },
                        { key: "c", text: "Typical xylem fibres" },
                        { key: "d", text: "Xylem parenchyma" }
                    ],
                    answer: "d",
                    explanation: "Xylem parenchyma cells are living and can store substances and support lateral transport. The usual conducting vessel elements and tracheids lose their protoplasts at maturity. Xylem is therefore not a tissue composed exclusively of dead cells, even though its major water-conducting elements are dead."
                },
                {
                    id: "d36a5",
                    additionalPractice: true,
                    text: "The first-formed xylem in an elongating organ commonly has annular or helical secondary-wall thickenings that permit some continued stretch. This first-formed xylem is called:",
                    options: [
                        { key: "a", text: "Metaxylem" },
                        { key: "b", text: "Protoxylem" },
                        { key: "c", text: "Secondary phloem" },
                        { key: "d", text: "Phelloderm" }
                    ],
                    answer: "b",
                    explanation: "Protoxylem differentiates early while the organ is still elongating. Annular and helical thickenings reinforce the wall without enclosing it in one rigid continuous sheet. Metaxylem differentiates later and often has more extensive reticulate or pitted reinforcement."
                },
                {
                    id: "d36a6",
                    additionalPractice: true,
                    text: "The diagram represents an open collateral vascular bundle viewed from the outside towards the centre of a young dicot stem. Which tissue occupies the thin layer X between phloem and xylem?<svg class='q-fig' viewBox='0 0 310 183' width='310' height='183' role='img' aria-label='Vascular bundle with phloem on the outside, a narrow layer labelled X, and xylem on the inside'><g stroke='currentColor' stroke-width='1.4'><rect x='52' y='28' width='152' height='45' fill='#059669' fill-opacity='0.12'/><rect x='52' y='73' width='152' height='13' fill='#d97706' fill-opacity='0.2'/><rect x='52' y='86' width='152' height='65' fill='#2563eb' fill-opacity='0.12'/><path d='M204 79.5h44' fill='none'/></g><g fill='currentColor' font-size='13' text-anchor='middle'><text x='128' y='17'>Outside</text><text x='128' y='55'>Phloem</text><text x='128' y='124'>Xylem</text><text x='128' y='174'>Towards centre</text><text x='265' y='84'>X</text></g></svg>",
                    options: [
                        { key: "a", text: "Endodermis" },
                        { key: "b", text: "Cork" },
                        { key: "c", text: "Vascular cambium" },
                        { key: "d", text: "Epidermis" }
                    ],
                    answer: "c",
                    explanation: "An open collateral bundle retains vascular cambium between its external phloem and internal xylem. Cambial division can add conducting tissues during secondary growth. In a closed collateral bundle, that cambial layer is absent; endodermis and epidermis do not occupy this within-bundle position."
                },
                {
                    id: "d36a7",
                    additionalPractice: true,
                    text: "A stem vascular bundle has phloem on both the outer and inner sides of its xylem, as in the typical Cucurbita example. The bundle is described as:",
                    options: [
                        { key: "a", text: "Bicollateral" },
                        { key: "b", text: "Radial" },
                        { key: "c", text: "Amphicribral" },
                        { key: "d", text: "Amphivasal" }
                    ],
                    answer: "a",
                    explanation: "Bicollateral bundles have external and internal phloem flanking the xylem. Radial bundles put xylem and phloem on alternating radii. Amphicribral and amphivasal are concentric arrangements in which one tissue surrounds the other, rather than the two-sided pattern described."
                },
                {
                    id: "d36a8",
                    additionalPractice: true,
                    text: "In a typical angiosperm root, lateral roots originate internally rather than from the epidermis. Which cell layer commonly initiates them?",
                    options: [
                        { key: "a", text: "Root-cap epidermis" },
                        { key: "b", text: "Palisade mesophyll" },
                        { key: "c", text: "Cortical aerenchyma" },
                        { key: "d", text: "Pericycle" }
                    ],
                    answer: "d",
                    explanation: "Pericycle cells just inside the endodermis commonly initiate lateral roots, which then grow outward through overlying tissues. This is endogenous origin. Root hairs are different: they are extensions of epidermal cells and are not small lateral roots."
                },
                {
                    id: "d36a9",
                    additionalPractice: true,
                    text: "A water-soluble tracer remains in cell walls and cannot cross plasma membranes. At an intact root endodermis with functional Casparian strips, why can it not freely pass into the stele by the same route?",
                    options: [
                        { key: "a", text: "All water movement stops at the cortex" },
                        { key: "b", text: "The xylem lumen is filled with cutin" },
                        { key: "c", text: "The continuous apoplastic route is blocked" },
                        { key: "d", text: "The pericycle pumps the tracer into soil" }
                    ],
                    answer: "c",
                    explanation: "Casparian strips interrupt the cell-wall, or apoplastic, route through the endodermis. Entry into the stele normally requires a membrane-crossing step, allowing selective control. The tracer cannot follow that step under the stated assumption; this does not mean the root completely stops taking up water."
                },
                {
                    id: "d36a10",
                    additionalPractice: true,
                    text: "A transverse section has many xylem poles alternating with phloem around a large central pith. The protoxylem lies towards the outside. Which typical organ best fits?",
                    options: [
                        { key: "a", text: "Monocot root" },
                        { key: "b", text: "Young dicot stem" },
                        { key: "c", text: "Dorsiventral leaf" },
                        { key: "d", text: "Monocot stem" }
                    ],
                    answer: "a",
                    explanation: "The radial, exarch and commonly polyarch arrangement with a prominent pith is characteristic of a typical monocot root. Monocot stems instead have scattered conjoint vascular bundles, and a young dicot stem usually has a ring of conjoint bundles with endarch xylem."
                },
                {
                    id: "d36a11",
                    additionalPractice: true,
                    text: "The schematic transverse section shows many separate, closed conjoint vascular bundles scattered through ground tissue, with no sharp cortex-pith boundary. Which typical organ is represented?<svg class='q-fig' viewBox='0 0 260 205' width='260' height='205' role='img' aria-label='Circular transverse section with many discrete vascular bundles scattered throughout the ground tissue rather than in one ring'><circle cx='130' cy='97' r='82' fill='#059669' fill-opacity='0.05' stroke='currentColor' stroke-width='1.8'/><g fill='#2563eb' fill-opacity='0.22' stroke='currentColor' stroke-width='1.2'><ellipse cx='102' cy='40' rx='7' ry='10'/><ellipse cx='147' cy='33' rx='7' ry='10'/><ellipse cx='175' cy='60' rx='7' ry='10'/><ellipse cx='192' cy='99' rx='7' ry='10'/><ellipse cx='172' cy='139' rx='7' ry='10'/><ellipse cx='138' cy='158' rx='7' ry='10'/><ellipse cx='96' cy='147' rx='7' ry='10'/><ellipse cx='72' cy='111' rx='7' ry='10'/><ellipse cx='77' cy='68' rx='7' ry='10'/><ellipse cx='117' cy='77' rx='9' ry='12'/><ellipse cx='151' cy='102' rx='9' ry='12'/><ellipse cx='115' cy='121' rx='9' ry='12'/></g><text x='130' y='196' text-anchor='middle' fill='currentColor' font-size='12'>Transverse section</text></svg>",
                    options: [
                        { key: "a", text: "Dicot root" },
                        { key: "b", text: "Monocot stem" },
                        { key: "c", text: "Young dicot stem" },
                        { key: "d", text: "Monocot root" }
                    ],
                    answer: "b",
                    explanation: "A typical monocot stem, such as maize, has numerous closed conjoint bundles scattered through largely undifferentiated ground tissue. A young dicot stem usually arranges open collateral bundles in a ring. Root vascular tissue is radial rather than numerous scattered conjoint bundles."
                },
                {
                    id: "d36a12",
                    additionalPractice: true,
                    text: "Layer X in this simplified transverse section lies just below the upper epidermis of a dorsiventral leaf and contains closely packed elongated cells. What is it?<svg class='q-fig' viewBox='0 0 322 198' width='322' height='198' role='img' aria-label='Leaf transverse section with upper epidermis, elongated closely packed cells marked X underneath, then loosely arranged spongy cells above the lower epidermis'><g stroke='currentColor' stroke-width='1.2'><rect x='20' y='30' width='235' height='18' fill='none'/><rect x='20' y='156' width='235' height='18' fill='none'/><g fill='#059669' fill-opacity='0.14'><rect x='29' y='51' width='22' height='48' rx='7'/><rect x='55' y='51' width='22' height='48' rx='7'/><rect x='81' y='51' width='22' height='48' rx='7'/><rect x='107' y='51' width='22' height='48' rx='7'/><rect x='133' y='51' width='22' height='48' rx='7'/><rect x='159' y='51' width='22' height='48' rx='7'/><rect x='185' y='51' width='22' height='48' rx='7'/><rect x='211' y='51' width='22' height='48' rx='7'/><ellipse cx='43' cy='122' rx='18' ry='12'/><ellipse cx='98' cy='130' rx='19' ry='13'/><ellipse cx='150' cy='116' rx='19' ry='11'/><ellipse cx='199' cy='137' rx='20' ry='13'/><ellipse cx='238' cy='116' rx='14' ry='10'/></g><path d='M246 75h42' fill='none'/></g><g fill='currentColor' text-anchor='middle' font-size='12'><text x='136' y='20'>Upper epidermis</text><text x='299' y='79'>X</text><text x='137' y='192'>Lower epidermis</text></g></svg>",
                    options: [
                        { key: "a", text: "Vascular cambium" },
                        { key: "b", text: "Root endodermis" },
                        { key: "c", text: "Palisade mesophyll" },
                        { key: "d", text: "Cork cambium" }
                    ],
                    answer: "c",
                    explanation: "Palisade mesophyll lies beneath the upper epidermis in a typical dorsiventral leaf. Its elongated, closely arranged chloroplast-rich cells are well positioned for photosynthesis. Spongy mesophyll below it is more loosely arranged, providing intercellular spaces for gas exchange."
                },
                {
                    id: "d36a13",
                    additionalPractice: true,
                    text: "During ordinary secondary growth of a dicot stem, the vascular cambium produces which tissues on its inner and outer sides, respectively?",
                    options: [
                        { key: "a", text: "Secondary phloem and secondary xylem" },
                        { key: "b", text: "Cork and secondary cortex" },
                        { key: "c", text: "Epidermis and endodermis" },
                        { key: "d", text: "Secondary xylem and secondary phloem" }
                    ],
                    answer: "d",
                    explanation: "The vascular cambium adds secondary xylem towards the centre and secondary phloem towards the outside. Its activity increases stem girth, often producing more xylem than phloem. Cork and phelloderm are products of the separate cork cambium, not these two vascular products."
                },
                {
                    id: "d36a14",
                    additionalPractice: true,
                    text: "A lateral meristem produces cork towards the outside and phelloderm towards the inside, forming part of the periderm. This meristem is the:",
                    options: [
                        { key: "a", text: "Vascular cambium" },
                        { key: "b", text: "Phellogen" },
                        { key: "c", text: "Root apical meristem" },
                        { key: "d", text: "Intercalary meristem" }
                    ],
                    answer: "b",
                    explanation: "Phellogen is cork cambium. It forms protective cork, or phellem, outward and living phelloderm inward. Together these tissues form the periderm. Vascular cambium instead adds secondary conducting tissues, while apical and intercalary meristems primarily contribute to length growth."
                },
                {
                    id: "d36a15",
                    additionalPractice: true,
                    text: "In a longitudinal view of a young root, numerous root hairs first become conspicuous behind the main elongation zone. This hair-bearing region is the zone of:",
                    options: [
                        { key: "a", text: "Maturation and differentiation" },
                        { key: "b", text: "Maximum cell division" },
                        { key: "c", text: "Root-cap protection" },
                        { key: "d", text: "Maximum cell elongation" }
                    ],
                    answer: "a",
                    explanation: "Root hairs develop as epidermal cells differentiate in the maturation zone after their major elongation. The apical meristem lies closer to the tip, protected by the root cap. Root hairs greatly enlarge the absorbing surface but are outgrowths of individual epidermal cells, not new multicellular root branches."
                }
            ]
        }
    ]
};

const DAY36_SYLLABUS = [
    { subject: "Physics", accent: "blue", topics: [
        { topic: "Mechanics", subs: [
            { name: "Elasticity and Own-weight Extension", ids: ["d36p1", "d36p3"] },
            { name: "Energy and Circular Motion", ids: ["d36p7"] },
            { name: "Force, Fluids and Surface Tension", ids: ["d36p8", "d36p9", "d36p10"] }
        ] },
        { topic: "Heat and Thermodynamics", subs: [
            { name: "Kinetic Theory and Heat Capacity", ids: ["d36p11", "d36p12"] }
        ] },
        { topic: "Waves and Optics", subs: [
            { name: "Lenses and Achromatism", ids: ["d36p5", "d36p6"] },
            { name: "Doppler Effect and Pipe Harmonics", ids: ["d36p13", "d36p14"] },
            { name: "Colour Mixing and Wave Types", ids: ["d36p15", "d36p22"] }
        ] },
        { topic: "Current Electricity and Magnetism", subs: [
            { name: "Alternating Current and Self-inductance", ids: ["d36p4", "d36p18"] },
            { name: "Potentiometer", ids: ["d36p19"] }
        ] },
        { topic: "Electrostatics and Capacitors", subs: [
            { name: "Charge and Charge Sharing", ids: ["d36p16", "d36p17"] }
        ] },
        { topic: "Modern Physics", subs: [
            { name: "Atomic Spectra and Nuclear Energy", ids: ["d36p2", "d36p20"] },
            { name: "Hubble Law and Semiconductor Diodes", ids: ["d36p21", "d36p23"] }
        ] }
    ] },
    { subject: "Chemistry", accent: "amber", topics: [
        { topic: "General and Physical Chemistry", subs: [
            { name: "Orbitals, Spectra and Crystal Structure", ids: ["d36c1", "d36c6", "d36c7"] },
            { name: "Formal Oxidation Numbers", ids: ["d36c2", "d36c8"] },
            { name: "Acid Equivalents and Chemical Equilibrium", ids: ["d36c3", "d36c4", "d36c5"] },
            { name: "Activation Energy and Thermodynamics", ids: ["d36c9", "d36c10"] }
        ] },
        { topic: "Inorganic Chemistry", subs: [
            { name: "Halogens and Nitrogen Oxides", ids: ["d36c11", "d36c19"] },
            { name: "Hydration and Complex Formation", ids: ["d36c21", "d36c22"] }
        ] },
        { topic: "Organic Chemistry", subs: [
            { name: "Classification, Symmetry and Benzene Structure", ids: ["d36c12", "d36c13", "d36c14"] },
            { name: "Nucleophiles and Amines", ids: ["d36c17", "d36c18"] }
        ] },
        { topic: "Applied Chemistry", subs: [
            { name: "Preservatives, Venom Peptides and Dyes", ids: ["d36c15", "d36c16", "d36c24"] },
            { name: "Paper and Sodium Carbonate Manufacture", ids: ["d36c25", "d36c26"] }
        ] },
        { topic: "Analytical Chemistry", subs: [
            { name: "Sulphide and Ammonia Tests", ids: ["d36c20", "d36c23"] }
        ] }
    ] },
    { subject: "Zoology", accent: "rose", topics: [
        { topic: "Evolutionary Biology", subs: [
            { name: "Chemical Origin of Life and Adaptation", ids: ["d36z8", "d36z20"] }
        ] },
        { topic: "Animal Diversity and Histology", subs: [
            { name: "Nematode Nervous System", ids: ["d36z9"] },
            { name: "Pigment and Enteroendocrine Cells", ids: ["d36z10", "d36z12"] }
        ] },
        { topic: "Study of Selected Animals", subs: [
            { name: "Earthworm Digestion", ids: ["d36z11"] }
        ] },
        { topic: "Human Biology and Physiology", subs: [
            { name: "Digestive Enzyme Activation", ids: ["d36z1"] },
            { name: "Respiratory Volumes, Enzymes and Control", ids: ["d36z2", "d36z13", "d36z16"] },
            { name: "Cardiac Cycle, Output and Portal Circulation", ids: ["d36z3", "d36z4", "d36z14"] },
            { name: "Nephron Function", ids: ["d36z5"] },
            { name: "Nerve Impulses and Sensory Pathways", ids: ["d36z15", "d36z21"] },
            { name: "Eye and Ear", ids: ["d36z6", "d36z17"] },
            { name: "Thyroid Function and Feedback", ids: ["d36z7", "d36z18"] }
        ] },
        { topic: "Microbial Diseases", subs: [
            { name: "Influenza", ids: ["d36z19"] }
        ] }
    ] },
    { subject: "Botany", accent: "emerald", topics: [
        { topic: "Cell Biology", subs: [
            { name: "Endoplasmic Reticulum, Kinetochores and ATP", ids: ["d36b2", "d36b6", "d36b7"] }
        ] },
        { topic: "Biodiversity", subs: [
            { name: "Fern Reproduction", ids: ["d36b3"] }
        ] },
        { topic: "Ecology and Plant Physiology", subs: [
            { name: "Xerophytic Adaptation and Nitrogen Fixation", ids: ["d36b1", "d36b4"] }
        ] },
        { topic: "Applied Botany", subs: [
            { name: "DNA Fingerprinting", ids: ["d36b5"] }
        ] },
        { topic: "Plant Anatomy", subs: [
            { name: "Plant Tissues and Conducting Cells", ids: ["d36a1", "d36a2", "d36a3", "d36a4", "d36a5"] },
            { name: "Vascular Bundle Types", ids: ["d36a6", "d36a7"] },
            { name: "Root Internal Structure", ids: ["d36a8", "d36a9", "d36a10", "d36a15"] },
            { name: "Stem Structure and Lateral Meristems", ids: ["d36a11", "d36a13", "d36a14"] },
            { name: "Leaf Internal Structure", ids: ["d36a12"] }
        ] }
    ] },
    { subject: "MAT", accent: "slate", topics: [
        { topic: "Logical Sequencing", subs: [
            { name: "Syllogisms and Set Relationships", ids: ["d36m1", "d36m4"] },
            { name: "Letter Completion", ids: ["d36m5"] }
        ] },
        { topic: "Numerical Reasoning", subs: [
            { name: "Clock Intervals and Number Classification", ids: ["d36m3", "d36m7"] }
        ] },
        { topic: "Spatial Relation / Abstract Reasoning", subs: [
            { name: "Painted Cubes", ids: ["d36m2"] },
            { name: "Number Figures and Embedded Paths", ids: ["d36m6", "d36m8"] }
        ] }
    ] }
];
DAY36.syllabus = DAY36_SYLLABUS;