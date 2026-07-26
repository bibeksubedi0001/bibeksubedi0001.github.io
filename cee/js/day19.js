/* ============================================================
   DAY 19 — Magnetism (100 questions)
   Syllabus: magnetic properties of materials (domains, relative
   permeability, susceptibility, hysteresis, dia/para/ferro);
   magnetic field of a straight conductor, circular coil and long
   solenoid, force on a moving charge and on a current-carrying
   conductor/coil, Hall effect; electromagnetic induction
   (Faraday, Lenz, a.c. generator, transformer, eddy currents,
   self and mutual inductance, energy stored in an inductor).

   Source policy: 22 questions are the complete set of unique
   magnetism items in D:\IOE Entrance\New folder (topic
   "Magnetism & Electromagnetic Induction"; the bank tags 23 but
   02:86 and 21:28 are the same question). 78 further questions
   were written to the same IOE difficulty to cover the syllabus.
   ============================================================ */
const DAY19 = {
    day: 19,
    title: "Day 19",
    subtitle: "Magnetism · Materials, Fields & Induction · 100 Q",
    durationMinutes: 90,
    negativeMarking: 0.25,
    chapters: [
        {
            id: "magmat19",
            name: "Magnetic Properties of Materials",
            subject: "Physics",
            accent: "rose",
            blurb: "Dia, para and ferromagnetism · domains · relative permeability & susceptibility · hysteresis.",
            questions: [
                {
                    id: "m1",
                    text: "A small rod of an unknown material is suspended in a strongly non-uniform magnetic field and is pushed from the stronger towards the weaker part of the field. The material is:",
                    options: [
                        { key: "a", text: "diamagnetic" },
                        { key: "b", text: "antiferromagnetic" },
                        { key: "c", text: "ferromagnetic" },
                        { key: "d", text: "paramagnetic" }
                    ],
                    answer: "a",
                    explanation: "Only diamagnetic materials are magnetised opposite to the applied field, so they experience a net force towards the weaker field region. Paramagnetic and ferromagnetic specimens are drawn towards the stronger region.",
                    source: "Authored (CEE/IOE magnetism syllabus): Dia/Para/Ferro classification"
                },
                {
                    id: "m2",
                    text: "Four specimens have susceptibilities $\\chi_P=-2.6\\times10^{-5}$, $\\chi_Q=+1.8\\times10^{-5}$, $\\chi_R=+2.5\\times10^{3}$ and $\\chi_S=-1$. The paramagnetic and the perfectly diamagnetic specimens are respectively:",
                    options: [
                        { key: "a", text: "$S$ and $R$" },
                        { key: "b", text: "$Q$ and $S$" },
                        { key: "c", text: "$R$ and $P$" },
                        { key: "d", text: "$P$ and $Q$" }
                    ],
                    answer: "b",
                    explanation: "A small positive susceptibility ($Q$) is paramagnetic and a large positive value ($R$) is ferromagnetic. A small negative value ($P$) is ordinarily diamagnetic, while $\\chi=-1$ ($S$) means complete flux expulsion, i.e. a perfect diamagnet such as a superconductor.",
                    source: "Authored (CEE/IOE magnetism syllabus): Dia/Para/Ferro classification"
                },
                {
                    id: "m3",
                    text: "For a superconductor below its critical temperature, the magnetic susceptibility and relative permeability are:",
                    options: [
                        { key: "a", text: "$\\chi=-0.5,\\ \\mu_r=0.5$" },
                        { key: "b", text: "$\\chi=+1,\\ \\mu_r=2$" },
                        { key: "c", text: "$\\chi=-1,\\ \\mu_r=0$" },
                        { key: "d", text: "$\\chi=0,\\ \\mu_r=1$" }
                    ],
                    answer: "c",
                    explanation: "A superconductor expels the field completely (Meissner effect), so $M=-H$ giving $\\chi=M/H=-1$ and $\\mu_r=1+\\chi=0$.",
                    source: "Authored (CEE/IOE magnetism syllabus): Dia/Para/Ferro classification"
                },
                {
                    id: "m4",
                    text: "A paramagnetic liquid is placed between the poles of an electromagnet in a watch-glass. On switching the field on, the liquid:",
                    options: [
                        { key: "a", text: "remains completely unaffected" },
                        { key: "b", text: "is expelled vertically out of the watch-glass" },
                        { key: "c", text: "is pushed away from the poles" },
                        { key: "d", text: "accumulates at the centre where the field is strongest" }
                    ],
                    answer: "d",
                    explanation: "A paramagnetic substance is weakly attracted towards the stronger field, so the liquid heaps up at the middle where the gap is narrow and the field is strongest.",
                    source: "Authored (CEE/IOE magnetism syllabus): Dia/Para/Ferro classification"
                },
                {
                    id: "m5",
                    text: "A ferromagnetic material is heated above its Curie temperature. It then behaves as:",
                    options: [
                        { key: "a", text: "a paramagnet" },
                        { key: "b", text: "a perfect conductor" },
                        { key: "c", text: "a stronger ferromagnet" },
                        { key: "d", text: "a diamagnet" }
                    ],
                    answer: "a",
                    explanation: "Thermal agitation destroys the ordered domain structure at the Curie point, so above $T_C$ the specimen retains only a weak positive susceptibility and behaves as a paramagnet.",
                    source: "Authored (CEE/IOE magnetism syllabus): Dia/Para/Ferro classification"
                },
                {
                    id: "m6",
                    text: "The susceptibility of a paramagnetic salt is $3.0\\times10^{-4}$ at $300$ K. Assuming Curie's law, its susceptibility at $150$ K is:",
                    options: [
                        { key: "a", text: "$9.0\\times10^{-4}$" },
                        { key: "b", text: "$6.0\\times10^{-4}$" },
                        { key: "c", text: "$1.5\\times10^{-4}$" },
                        { key: "d", text: "$3.0\\times10^{-4}$" }
                    ],
                    answer: "b",
                    explanation: "Curie's law gives $\\chi\\propto1/T$, so $\\chi_2=\\chi_1(T_1/T_2)=3.0\\times10^{-4}\\times(300/150)=6.0\\times10^{-4}$.",
                    source: "Authored (CEE/IOE magnetism syllabus): Curie law"
                },
                {
                    id: "m7",
                    text: "Above the Curie temperature $T_C$, the susceptibility of a ferromagnetic material varies with temperature as:",
                    options: [
                        { key: "a", text: "$\\chi=C(T-T_C)$" },
                        { key: "b", text: "$\\chi=C/T$" },
                        { key: "c", text: "$\\chi=C/(T-T_C)$" },
                        { key: "d", text: "$\\chi=CT$" }
                    ],
                    answer: "c",
                    explanation: "Above $T_C$ a ferromagnet obeys the Curie–Weiss law $\\chi=\\dfrac{C}{T-T_C}$; the plain Curie law $\\chi=C/T$ applies to ordinary paramagnets.",
                    source: "Authored (CEE/IOE magnetism syllabus): Curie law"
                },
                {
                    id: "m8",
                    text: "A material has magnetic susceptibility $\\chi=-1.2\\times10^{-5}$. Its relative permeability is:",
                    options: [
                        { key: "a", text: "$1.000012$" },
                        { key: "b", text: "$1.2\\times10^{-5}$" },
                        { key: "c", text: "$-1.2\\times10^{-5}$" },
                        { key: "d", text: "$0.999988$" }
                    ],
                    answer: "d",
                    explanation: "$\\mu_r=1+\\chi=1-1.2\\times10^{-5}=0.999988$, slightly less than unity as expected for a diamagnetic substance.",
                    source: "Authored (CEE/IOE magnetism syllabus): Permeability & susceptibility"
                },
                {
                    id: "m9",
                    text: "The relative permeability of a typical ferromagnetic material is of the order of:",
                    options: [
                        { key: "a", text: "$10^{3}$ to $10^{5}$" },
                        { key: "b", text: "$10^{-5}$" },
                        { key: "c", text: "slightly less than $1$" },
                        { key: "d", text: "slightly greater than $1$" }
                    ],
                    answer: "a",
                    explanation: "Ferromagnets have very large positive susceptibility, so $\\mu_r=1+\\chi$ ranges from about $10^3$ to $10^5$. Values slightly above or below unity belong to para- and diamagnets.",
                    source: "Authored (CEE/IOE magnetism syllabus): Permeability & susceptibility"
                },
                {
                    id: "m10",
                    text: "A solenoid with $1000$ turns per metre carries $2$ A and is wound on a core of relative permeability $500$. The magnetic flux density inside the core is nearly:",
                    options: [
                        { key: "a", text: "$2.51\\times10^{-3}$ T" },
                        { key: "b", text: "$1.26$ T" },
                        { key: "c", text: "$2.51$ T" },
                        { key: "d", text: "$0.63$ T" }
                    ],
                    answer: "b",
                    explanation: "$B=\\mu_0\\mu_r nI=4\\pi\\times10^{-7}\\times500\\times1000\\times2=4\\pi\\times10^{-1}\\approx1.26$ T.",
                    source: "Authored (CEE/IOE magnetism syllabus): Permeability & susceptibility"
                },
                {
                    id: "m11",
                    text: "A magnetising field of $200$ A/m produces magnetisation in a material of susceptibility $1500$. The intensity of magnetisation is:",
                    options: [
                        { key: "a", text: "$7.5$ A/m" },
                        { key: "b", text: "$1700$ A/m" },
                        { key: "c", text: "$3.0\\times10^{5}$ A/m" },
                        { key: "d", text: "$1.3$ A/m" }
                    ],
                    answer: "c",
                    explanation: "$M=\\chi H=1500\\times200=3.0\\times10^{5}$ A/m.",
                    source: "Authored (CEE/IOE magnetism syllabus): Permeability & susceptibility"
                },
                {
                    id: "m12",
                    text: "The correct relation between the magnetic flux density $B$, the magnetising field $H$ and the magnetisation $M$ inside a material is:",
                    options: [
                        { key: "a", text: "$B=\\mu_0(H-M)$" },
                        { key: "b", text: "$B=\\mu_0 HM$" },
                        { key: "c", text: "$B=\\mu_0(M-H)$" },
                        { key: "d", text: "$B=\\mu_0(H+M)$" }
                    ],
                    answer: "d",
                    explanation: "Inside a magnetised medium the total field is the sum of the applied and the material contributions: $B=\\mu_0(H+M)$, which with $M=\\chi H$ gives $B=\\mu_0\\mu_r H$.",
                    source: "Authored (CEE/IOE magnetism syllabus): Permeability & susceptibility"
                },
                {
                    id: "m13",
                    text: "The SI unit of magnetic susceptibility is:",
                    options: [
                        { key: "a", text: "it is a dimensionless number" },
                        { key: "b", text: "tesla" },
                        { key: "c", text: "ampere per metre" },
                        { key: "d", text: "weber" }
                    ],
                    answer: "a",
                    explanation: "$\\chi=M/H$ and both $M$ and $H$ are measured in A/m, so the susceptibility has no unit and is a pure number.",
                    source: "Authored (CEE/IOE magnetism syllabus): Permeability & susceptibility"
                },
                {
                    id: "m14",
                    text: "A bar of volume $2\\times10^{-5}\\,\\mathrm{m^3}$ acquires a magnetic moment of $4\\ \\mathrm{A\\,m^2}$. Its intensity of magnetisation is:",
                    options: [
                        { key: "a", text: "$8\\times10^{-5}\\ \\mathrm{A/m}$" },
                        { key: "b", text: "$2\\times10^{5}\\ \\mathrm{A/m}$" },
                        { key: "c", text: "$5\\times10^{-6}\\ \\mathrm{A/m}$" },
                        { key: "d", text: "$2\\times10^{-5}\\ \\mathrm{A/m}$" }
                    ],
                    answer: "b",
                    explanation: "Magnetisation is the magnetic moment per unit volume: $M=m/V=4/(2\\times10^{-5})=2\\times10^{5}$ A/m.",
                    source: "Authored (CEE/IOE magnetism syllabus): Permeability & susceptibility"
                },
                {
                    id: "m15",
                    text: "In an unmagnetised ferromagnetic specimen the domains are:",
                    options: [
                        { key: "a", text: "absent altogether" },
                        { key: "b", text: "all aligned along one direction" },
                        { key: "c", text: "randomly oriented so that their moments cancel" },
                        { key: "d", text: "aligned opposite to the earth's field" }
                    ],
                    answer: "c",
                    explanation: "Domains always exist in a ferromagnet, but in the unmagnetised state their magnetic moments point in random directions and cancel, giving zero net moment.",
                    source: "Authored (CEE/IOE magnetism syllabus): Domains & hysteresis"
                },
                {
                    id: "m16",
                    text: "When a weak magnetising field is applied to a ferromagnetic specimen, magnetisation occurs mainly by:",
                    options: [
                        { key: "a", text: "destruction of the crystal lattice" },
                        { key: "b", text: "conversion of the specimen into a paramagnet" },
                        { key: "c", text: "creation of new domains" },
                        { key: "d", text: "growth of domains favourably oriented to the field at the cost of others" }
                    ],
                    answer: "d",
                    explanation: "For weak fields the domain walls move so that domains already aligned near the field direction grow, while unfavourably oriented domains shrink. Domain rotation dominates only at strong fields.",
                    source: "Authored (CEE/IOE magnetism syllabus): Domains & hysteresis"
                },
                {
                    id: "m17",
                    text: "The area enclosed by the B–H hysteresis loop of a magnetic material represents:",
                    options: [
                        { key: "a", text: "the energy dissipated per unit volume per cycle of magnetisation" },
                        { key: "b", text: "the relative permeability of the material" },
                        { key: "c", text: "the retentivity of the material" },
                        { key: "d", text: "the coercivity of the material" }
                    ],
                    answer: "a",
                    explanation: "The loop area equals the work done per unit volume in taking the specimen once round the magnetisation cycle, which appears as heat.",
                    source: "Authored (CEE/IOE magnetism syllabus): Domains & hysteresis"
                },
                {
                    id: "m18",
                    text: "The hysteresis loop of a core material has an area equivalent to $200\\ \\mathrm{J/m^3}$ per cycle. If the core volume is $5\\times10^{-3}\\ \\mathrm{m^3}$ and it is magnetised at $50$ Hz, the power lost as hysteresis heat is:",
                    options: [
                        { key: "a", text: "$500$ W" },
                        { key: "b", text: "$50$ W" },
                        { key: "c", text: "$1$ W" },
                        { key: "d", text: "$10$ W" }
                    ],
                    answer: "b",
                    explanation: "Energy per cycle $=200\\times5\\times10^{-3}=1$ J. At $50$ cycles per second the power dissipated is $1\\times50=50$ W.",
                    source: "Authored (CEE/IOE magnetism syllabus): Domains & hysteresis"
                },
                {
                    id: "m19",
                    text: "The material best suited for the core of a transformer must have:",
                    options: [
                        { key: "a", text: "high retentivity and high coercivity" },
                        { key: "b", text: "negative susceptibility" },
                        { key: "c", text: "high permeability and a narrow hysteresis loop" },
                        { key: "d", text: "low permeability and a wide hysteresis loop" }
                    ],
                    answer: "c",
                    explanation: "A transformer core is magnetised and demagnetised continuously, so it needs high permeability for good flux linkage and a narrow loop (low coercivity, small area) to keep hysteresis loss small — soft iron or silicon steel.",
                    source: "Authored (CEE/IOE magnetism syllabus): Domains & hysteresis"
                },
                {
                    id: "m20",
                    text: "The coercivity of a ferromagnetic material is defined as:",
                    options: [
                        { key: "a", text: "the maximum flux density the material can reach" },
                        { key: "b", text: "the temperature at which ferromagnetism disappears" },
                        { key: "c", text: "the magnetisation left when the applied field is removed" },
                        { key: "d", text: "the reverse magnetising field needed to reduce the flux density to zero" }
                    ],
                    answer: "d",
                    explanation: "Coercivity is the magnitude of the reverse field $H$ required to bring the residual flux density $B$ down to zero. The magnetisation left at $H=0$ is the retentivity.",
                    source: "Authored (CEE/IOE magnetism syllabus): Domains & hysteresis"
                }
            ]
        },
        {
            id: "magfield19",
            name: "Magnetic Field & Magnetic Force",
            subject: "Physics",
            accent: "blue",
            blurb: "B-field of straight conductors, coils, solenoids and toroids · force on moving charges and conductors · Hall effect.",
            questions: [
                {
                    id: "f1",
                    text: "A long straight wire carries a current of $10$ A. The magnetic flux density at a perpendicular distance of $5$ cm from the wire is:",
                    options: [
                        { key: "a", text: "$4\\times10^{-5}$ T" },
                        { key: "b", text: "$2\\times10^{-5}$ T" },
                        { key: "c", text: "$4\\times10^{-4}$ T" },
                        { key: "d", text: "$8\\times10^{-6}$ T" }
                    ],
                    answer: "a",
                    explanation: "$B=\\dfrac{\\mu_0 I}{2\\pi a}=\\dfrac{2\\times10^{-7}\\times10}{0.05}=4\\times10^{-5}$ T, and the lines of force are concentric circles about the wire.",
                    source: "Authored (CEE/IOE magnetism syllabus): Field due to straight conductor"
                },
                {
                    id: "f2",
                    text: "Two long parallel wires $10$ cm apart carry currents of $5$ A and $10$ A in the same direction. The force per unit length between them is:",
                    options: [
                        { key: "a", text: "$10^{-4}$ N/m, repulsive" },
                        { key: "b", text: "$10^{-4}$ N/m, attractive" },
                        { key: "c", text: "$5\\times10^{-5}$ N/m, attractive" },
                        { key: "d", text: "$2\\times10^{-4}$ N/m, repulsive" }
                    ],
                    answer: "b",
                    explanation: "$\\dfrac{F}{L}=\\dfrac{\\mu_0 I_1I_2}{2\\pi d}=\\dfrac{2\\times10^{-7}\\times5\\times10}{0.1}=10^{-4}$ N/m. Currents in the same direction attract each other.",
                    source: "Authored (CEE/IOE magnetism syllabus): Field due to straight conductor"
                },
                {
                    id: "f3",
                    text: "Two long parallel conductors carry currents in opposite directions. The conductors will:",
                    options: [
                        { key: "a", text: "twist about their axes" },
                        { key: "b", text: "attract each other" },
                        { key: "c", text: "repel each other" },
                        { key: "d", text: "experience no force" }
                    ],
                    answer: "c",
                    explanation: "Each wire sits in the field of the other; for antiparallel currents the resulting force $F=BIL$ acts outwards on both, so they repel.",
                    source: "Authored (CEE/IOE magnetism syllabus): Field due to straight conductor"
                },
                {
                    id: "f4",
                    text: "A long straight cylindrical conductor of radius $4$ mm carries a uniformly distributed current of $20$ A. The magnetic field at a point $2$ mm from the axis is:",
                    options: [
                        { key: "a", text: "$2\\times10^{-3}$ T" },
                        { key: "b", text: "zero" },
                        { key: "c", text: "$1\\times10^{-3}$ T" },
                        { key: "d", text: "$5\\times10^{-4}$ T" }
                    ],
                    answer: "d",
                    explanation: "Inside the conductor Ampere's law gives $B=\\dfrac{\\mu_0 I r}{2\\pi R^2}=\\dfrac{4\\pi\\times10^{-7}\\times20\\times0.002}{2\\pi\\times(0.004)^2}=5\\times10^{-4}$ T.",
                    source: "Authored (CEE/IOE magnetism syllabus): Field due to straight conductor"
                },
                {
                    id: "f5",
                    text: "The magnetic field at the centre of a circular coil of radius r carrying a current I is:",
                    options: [
                        { key: "a", text: "μ₀I/2r" },
                        { key: "b", text: "μ₀I/4πr" },
                        { key: "c", text: "μ₀I/2πr" },
                        { key: "d", text: "μ₀I/r" }
                    ],
                    answer: "a",
                    explanation: "The magnetic field at the centre of a circular coil of radius r carrying current I is B = μ₀I/2r.",
                    source: "IOE NewSetstoUse 09:32"
                },
                {
                    id: "f6",
                    text: "Calculate the magnetic field due to a circular coil of 500 turns and mean diameter 0.1 m carrying a current of 14 A at the centre.",
                    options: [
                        { key: "a", text: "2.205×10⁻² T" },
                        { key: "b", text: "8.82×10⁻² T" },
                        { key: "c", text: "1.6×10⁻¹ T" },
                        { key: "d", text: "4.41×10⁻² T" }
                    ],
                    answer: "b",
                    explanation: "B = µ₀NI/(2r) = 4π×10⁻⁷×500×14/(2×0.05) ≈ 8.82×10⁻² T.",
                    source: "IOE NewSetstoUse 13:32"
                },
                {
                    id: "f7",
                    text: "A circular coil of $100$ turns and radius $20$ cm carries a current of $3$ A. The magnetic field at its centre is nearly:",
                    options: [
                        { key: "a", text: "$1.9\\times10^{-3}$ T" },
                        { key: "b", text: "$9.4\\times10^{-5}$ T" },
                        { key: "c", text: "$9.4\\times10^{-4}$ T" },
                        { key: "d", text: "$4.7\\times10^{-4}$ T" }
                    ],
                    answer: "c",
                    explanation: "$B=\\dfrac{\\mu_0 NI}{2r}=\\dfrac{4\\pi\\times10^{-7}\\times100\\times3}{2\\times0.2}=4\\pi\\times10^{-7}\\times750\\approx9.4\\times10^{-4}$ T.",
                    source: "Authored (CEE/IOE magnetism syllabus): Circular coil & arcs"
                },
                {
                    id: "f8",
                    text: "The magnetic field at the centre of a circular coil of radius $r$ is $B_0$. The field on its axis at a distance $r$ from the centre is:",
                    options: [
                        { key: "a", text: "$\\dfrac{B_0}{2}$" },
                        { key: "b", text: "$\\dfrac{B_0}{4}$" },
                        { key: "c", text: "$\\dfrac{B_0}{\\sqrt2}$" },
                        { key: "d", text: "$\\dfrac{B_0}{2\\sqrt2}$" }
                    ],
                    answer: "d",
                    explanation: "On the axis $B=\\dfrac{\\mu_0 NIr^2}{2(r^2+x^2)^{3/2}}$. Putting $x=r$ gives $B=\\dfrac{\\mu_0 NI}{4\\sqrt2\\,r}$, and since $B_0=\\dfrac{\\mu_0 NI}{2r}$, we get $B=\\dfrac{B_0}{2\\sqrt2}$.",
                    source: "Authored (CEE/IOE magnetism syllabus): Circular coil & arcs"
                },
                {
                    id: "f9",
                    text: "A wire is bent into a semicircle of radius $5$ cm and carries a current of $10$ A. The magnetic field at the centre of the semicircle is:",
                    options: [
                        { key: "a", text: "$6.28\\times10^{-5}$ T" },
                        { key: "b", text: "$3.14\\times10^{-5}$ T" },
                        { key: "c", text: "$2.51\\times10^{-4}$ T" },
                        { key: "d", text: "$1.26\\times10^{-4}$ T" }
                    ],
                    answer: "a",
                    explanation: "A semicircle gives half the field of a full loop: $B=\\dfrac{\\mu_0 I}{4r}=\\dfrac{4\\pi\\times10^{-7}\\times10}{4\\times0.05}\\approx6.28\\times10^{-5}$ T.",
                    source: "Authored (CEE/IOE magnetism syllabus): Circular coil & arcs"
                },
                {
                    id: "f10",
                    text: "A circular arc of radius $r$ subtends an angle $\\theta$ (in radian) at its centre and carries a current $I$. The magnetic field at the centre is:",
                    options: [
                        { key: "a", text: "$\\dfrac{\\mu_0 I r}{4\\pi\\theta}$" },
                        { key: "b", text: "$\\dfrac{\\mu_0 I\\theta}{4\\pi r}$" },
                        { key: "c", text: "$\\dfrac{\\mu_0 I}{2r}$" },
                        { key: "d", text: "$\\dfrac{\\mu_0 I\\theta}{2\\pi r}$" }
                    ],
                    answer: "b",
                    explanation: "The arc carries the fraction $\\theta/2\\pi$ of a full turn, so $B=\\dfrac{\\theta}{2\\pi}\\cdot\\dfrac{\\mu_0 I}{2r}=\\dfrac{\\mu_0 I\\theta}{4\\pi r}$.",
                    source: "Authored (CEE/IOE magnetism syllabus): Circular coil & arcs"
                },
                {
                    id: "f11",
                    text: "A square loop of side $20$ cm carries a current of $5$ A. The magnetic field at the centre of the loop is nearly:",
                    options: [
                        { key: "a", text: "$7.07\\times10^{-6}$ T" },
                        { key: "b", text: "$1.41\\times10^{-5}$ T" },
                        { key: "c", text: "$2.83\\times10^{-5}$ T" },
                        { key: "d", text: "$5.00\\times10^{-5}$ T" }
                    ],
                    answer: "c",
                    explanation: "Each side contributes $\\dfrac{\\mu_0 I}{4\\pi(a/2)}(\\sin45^\\circ+\\sin45^\\circ)$; for four sides $B=\\dfrac{2\\sqrt2\\,\\mu_0 I}{\\pi a}=\\dfrac{2\\sqrt2\\times4\\pi\\times10^{-7}\\times5}{\\pi\\times0.2}\\approx2.83\\times10^{-5}$ T.",
                    source: "Authored (CEE/IOE magnetism syllabus): Circular coil & arcs"
                },
                {
                    id: "f12",
                    text: "Two small circular coils are placed with their planes mutually perpendicular and their centres coinciding. They produce fields of $3\\times10^{-5}$ T and $4\\times10^{-5}$ T at the common centre. The resultant field there is:",
                    options: [
                        { key: "a", text: "$3.5\\times10^{-5}$ T" },
                        { key: "b", text: "$1\\times10^{-5}$ T" },
                        { key: "c", text: "$7\\times10^{-5}$ T" },
                        { key: "d", text: "$5\\times10^{-5}$ T" }
                    ],
                    answer: "d",
                    explanation: "The two fields are mutually perpendicular, so they add vectorially: $B=\\sqrt{(3\\times10^{-5})^2+(4\\times10^{-5})^2}=5\\times10^{-5}$ T.",
                    source: "Authored (CEE/IOE magnetism syllabus): Circular coil & arcs"
                },
                {
                    id: "f13",
                    text: "A coil carrying a heavy current and having a large number of turns is mounted in a vertical plane along the N–S direction. The current flows clockwise as seen from the east. A small magnetic needle at its centre will have its N pole pointing in the",
                    options: [
                        { key: "a", text: "W − N direction" },
                        { key: "b", text: "E − N direction" },
                        { key: "c", text: "W − S direction" },
                        { key: "d", text: "E − S direction" }
                    ],
                    answer: "a",
                    explanation: "Clockwise current (seen from the east) produces a field at the centre pointing west. The needle aligns with the resultant of this westward field and the Earth's northward horizontal field, so its N pole points between west and north (W–N direction).",
                    source: "IOE NewSetstoUse 17:32"
                },
                {
                    id: "f14",
                    text: "A solenoid of length 3.2 cm has 90 turns carrying a constant current of 1.2 A. Calculate the magnetic field at the centre.",
                    options: [
                        { key: "a", text: "2.1×10⁻³ T" },
                        { key: "b", text: "4.2×10⁻³ T" },
                        { key: "c", text: "6.3×10⁻³ T" },
                        { key: "d", text: "8.4×10⁻³ T" }
                    ],
                    answer: "b",
                    explanation: "The magnetic field at the centre of a long solenoid is B = μ₀nI, where n = N/L is the number of turns per unit length. Here n = 90/0.032 m = 2812.5 turns per metre. So B = 4π×10⁻⁷ × 2812.5 × 1.2 = 4π×10⁻⁷ × 3375 ≈ 1.2566×10⁻⁶ × 3375 ≈ 4.2×10⁻³ T. The field is uniform along the axis near the centre of the solenoid.",
                    source: "IOE NewSetstoUse 02:86"
                },
                {
                    id: "f15",
                    text: "An ideal solenoid having 3750 turns per metre carries a current of 2 A. Find the magnetic induction at its centre. (µ₀ = 4π×10⁻⁷ T·m/A)",
                    options: [
                        { key: "a", text: "3π×10⁻⁴" },
                        { key: "b", text: "9.1×10⁻⁶" },
                        { key: "c", text: "3π×10⁻³" },
                        { key: "d", text: "6π×10⁻⁵" }
                    ],
                    answer: "c",
                    explanation: "B = μ₀nI = (4π×10⁻⁷)(3750)(2) = 3π×10⁻³ T.",
                    source: "IOE NewSetstoUse 08:85"
                },
                {
                    id: "f16",
                    text: "A wire 30 m long is bent into 'N' turns of a circular coil of diameter 15 cm forming a solenoid of length 60 cm. Calculate the flux density inside it when a current of 3 A passes through it:",
                    options: [
                        { key: "a", text: "5×10⁻⁴ T" },
                        { key: "b", text: "6.67×10⁻⁴ T" },
                        { key: "c", text: "3.5×10⁻⁴ T" },
                        { key: "d", text: "4×10⁻⁴ T" }
                    ],
                    answer: "d",
                    explanation: "Turns N = 30/(π×0.15) ≈ 64. B = μ₀(N/L)I = 4π×10⁻⁷×(64/0.6)×3 ≈ 4×10⁻⁴ T.",
                    source: "IOE NewSetstoUse 11:86"
                },
                {
                    id: "f17",
                    text: "A long solenoid has $2000$ turns per metre and carries a current of $1.5$ A. The flux density well inside the solenoid is nearly:",
                    options: [
                        { key: "a", text: "$3.8\\times10^{-3}$ T" },
                        { key: "b", text: "$1.9\\times10^{-3}$ T" },
                        { key: "c", text: "$7.5\\times10^{-4}$ T" },
                        { key: "d", text: "$3.8\\times10^{-4}$ T" }
                    ],
                    answer: "a",
                    explanation: "$B=\\mu_0 nI=4\\pi\\times10^{-7}\\times2000\\times1.5\\approx3.8\\times10^{-3}$ T, and the field is uniform over the central region.",
                    source: "Authored (CEE/IOE magnetism syllabus): Solenoid & toroid"
                },
                {
                    id: "f18",
                    text: "The magnetic field at one end on the axis of a long solenoid, compared with the field at its centre, is:",
                    options: [
                        { key: "a", text: "equal" },
                        { key: "b", text: "one-half" },
                        { key: "c", text: "double" },
                        { key: "d", text: "one-quarter" }
                    ],
                    answer: "b",
                    explanation: "At the centre the whole winding contributes from both sides giving $B=\\mu_0 nI$, but at an end only half of it does, so $B_{end}=\\tfrac12\\mu_0 nI$.",
                    source: "Authored (CEE/IOE magnetism syllabus): Solenoid & toroid"
                },
                {
                    id: "f19",
                    text: "A toroid of mean radius $r$ has $N$ closely wound turns carrying current $I$. The magnetic field within the core of the toroid is:",
                    options: [
                        { key: "a", text: "zero" },
                        { key: "b", text: "$\\dfrac{\\mu_0 NI}{4\\pi r}$" },
                        { key: "c", text: "$\\dfrac{\\mu_0 NI}{2\\pi r}$" },
                        { key: "d", text: "$\\dfrac{\\mu_0 NI}{2r}$" }
                    ],
                    answer: "c",
                    explanation: "Applying Ampere's circuital law to a circular path of radius $r$ inside the winding, $B(2\\pi r)=\\mu_0 NI$, so $B=\\dfrac{\\mu_0 NI}{2\\pi r}$. Outside the toroid the field is zero.",
                    source: "Authored (CEE/IOE magnetism syllabus): Solenoid & toroid"
                },
                {
                    id: "f20",
                    text: "An electron is moving in a region where both electric field and magnetic field are present. It will gain energy from:",
                    options: [
                        { key: "a", text: "Magnetic field" },
                        { key: "b", text: "Both" },
                        { key: "c", text: "None" },
                        { key: "d", text: "Electric field" }
                    ],
                    answer: "d",
                    explanation: "A magnetic force is always perpendicular to velocity and does no work, so the electron gains energy only from the electric field.",
                    source: "IOE NewSetstoUse 07:32"
                },
                {
                    id: "f21",
                    text: "A proton (mass $1.6\\times10^{-27}$ kg, charge $1.6\\times10^{-19}$ C) enters a uniform field of $0.5$ T at $2\\times10^{6}$ m/s perpendicular to the field. The radius of its circular path is:",
                    options: [
                        { key: "a", text: "$4$ cm" },
                        { key: "b", text: "$2$ cm" },
                        { key: "c", text: "$40$ cm" },
                        { key: "d", text: "$8$ cm" }
                    ],
                    answer: "a",
                    explanation: "$r=\\dfrac{mv}{qB}=\\dfrac{1.6\\times10^{-27}\\times2\\times10^{6}}{1.6\\times10^{-19}\\times0.5}=0.04$ m $=4$ cm.",
                    source: "Authored (CEE/IOE magnetism syllabus): Force on a moving charge"
                },
                {
                    id: "f22",
                    text: "A charged particle moves in a circle in a uniform magnetic field. If its speed is doubled while the field is unchanged, its time period of revolution:",
                    options: [
                        { key: "a", text: "is halved" },
                        { key: "b", text: "remains unchanged" },
                        { key: "c", text: "becomes four times" },
                        { key: "d", text: "is doubled" }
                    ],
                    answer: "b",
                    explanation: "$T=\\dfrac{2\\pi m}{qB}$ contains no speed term, so the period (and the cyclotron frequency) is independent of the speed; only the radius doubles.",
                    source: "Authored (CEE/IOE magnetism syllabus): Force on a moving charge"
                },
                {
                    id: "f23",
                    text: "A charged particle of kinetic energy $K$ moves perpendicular to a uniform magnetic field in a circle of radius $r$. If the kinetic energy is doubled, the new radius is:",
                    options: [
                        { key: "a", text: "$4r$" },
                        { key: "b", text: "$2r$" },
                        { key: "c", text: "$\\sqrt2\\,r$" },
                        { key: "d", text: "$r/\\sqrt2$" }
                    ],
                    answer: "c",
                    explanation: "Since $p=\\sqrt{2mK}$, the radius $r=\\dfrac{p}{qB}=\\dfrac{\\sqrt{2mK}}{qB}\\propto\\sqrt{K}$. Doubling $K$ multiplies the radius by $\\sqrt2$.",
                    source: "Authored (CEE/IOE magnetism syllabus): Force on a moving charge"
                },
                {
                    id: "f24",
                    text: "In a velocity selector the electric field is $3\\times10^{5}$ V/m and the magnetic field is $0.1$ T, applied mutually perpendicular. The speed of the particles that pass undeviated is:",
                    options: [
                        { key: "a", text: "$3\\times10^{5}$ m/s" },
                        { key: "b", text: "$3\\times10^{7}$ m/s" },
                        { key: "c", text: "$3\\times10^{4}$ m/s" },
                        { key: "d", text: "$3\\times10^{6}$ m/s" }
                    ],
                    answer: "d",
                    explanation: "For no deflection the electric and magnetic forces balance: $qE=qvB$, so $v=E/B=3\\times10^{5}/0.1=3\\times10^{6}$ m/s, independent of charge and mass.",
                    source: "Authored (CEE/IOE magnetism syllabus): Force on a moving charge"
                },
                {
                    id: "f25",
                    text: "A charged particle enters a uniform magnetic field with its velocity inclined at an angle $\\theta$ (other than $0^\\circ$ or $90^\\circ$) to the field. Its path is:",
                    options: [
                        { key: "a", text: "a helix" },
                        { key: "b", text: "a parabola" },
                        { key: "c", text: "a straight line" },
                        { key: "d", text: "a circle" }
                    ],
                    answer: "a",
                    explanation: "The component $v\\cos\\theta$ along $\\vec B$ is unaffected while $v\\sin\\theta$ produces circular motion, and the two together give a helix of pitch $v\\cos\\theta\\cdot T$.",
                    source: "Authored (CEE/IOE magnetism syllabus): Force on a moving charge"
                },
                {
                    id: "f26",
                    text: "An electron is projected exactly parallel to a uniform magnetic field. It will:",
                    options: [
                        { key: "a", text: "move along a helical path" },
                        { key: "b", text: "continue undeviated with constant speed" },
                        { key: "c", text: "be brought instantly to rest" },
                        { key: "d", text: "move along a circular path" }
                    ],
                    answer: "b",
                    explanation: "The magnetic force is $qvB\\sin\\theta$ and $\\theta=0$, so the force vanishes and the electron travels in a straight line at constant speed.",
                    source: "Authored (CEE/IOE magnetism syllabus): Force on a moving charge"
                },
                {
                    id: "f27",
                    text: "The work done by a magnetic force on a charged particle moving in a uniform magnetic field is:",
                    options: [
                        { key: "a", text: "equal to the change in its potential energy" },
                        { key: "b", text: "always positive" },
                        { key: "c", text: "always zero" },
                        { key: "d", text: "always negative" }
                    ],
                    answer: "c",
                    explanation: "The magnetic force is always perpendicular to the velocity, so $\\vec F\\cdot\\vec v=0$; it changes only the direction of motion and never the kinetic energy.",
                    source: "Authored (CEE/IOE magnetism syllabus): Force on a moving charge"
                },
                {
                    id: "f28",
                    text: "An electron (mass $9.1\\times10^{-31}$ kg) moving at $1\\times10^{7}$ m/s enters a field of $2\\times10^{-3}$ T at right angles. The radius of its path is nearly:",
                    options: [
                        { key: "a", text: "$5.7$ cm" },
                        { key: "b", text: "$1.4$ cm" },
                        { key: "c", text: "$28$ cm" },
                        { key: "d", text: "$2.8$ cm" }
                    ],
                    answer: "d",
                    explanation: "$r=\\dfrac{mv}{qB}=\\dfrac{9.1\\times10^{-31}\\times10^{7}}{1.6\\times10^{-19}\\times2\\times10^{-3}}\\approx2.8\\times10^{-2}$ m.",
                    source: "Authored (CEE/IOE magnetism syllabus): Force on a moving charge"
                },
                {
                    id: "f29",
                    text: "The cyclotron frequency of a proton (mass $1.67\\times10^{-27}$ kg) in a magnetic field of $1$ T is nearly:",
                    options: [
                        { key: "a", text: "$15$ MHz" },
                        { key: "b", text: "$150$ MHz" },
                        { key: "c", text: "$1.5$ kHz" },
                        { key: "d", text: "$1.5$ MHz" }
                    ],
                    answer: "a",
                    explanation: "$f=\\dfrac{qB}{2\\pi m}=\\dfrac{1.6\\times10^{-19}\\times1}{2\\pi\\times1.67\\times10^{-27}}\\approx1.5\\times10^{7}$ Hz $=15$ MHz.",
                    source: "Authored (CEE/IOE magnetism syllabus): Force on a moving charge"
                },
                {
                    id: "f30",
                    text: "In a cyclotron of dee radius $R$ and magnetic field $B$, the maximum kinetic energy gained by a particle of charge $q$ and mass $m$ is:",
                    options: [
                        { key: "a", text: "$\\dfrac{2m}{q^2B^2R^2}$" },
                        { key: "b", text: "$\\dfrac{q^2B^2R^2}{2m}$" },
                        { key: "c", text: "$\\dfrac{qBR}{2m}$" },
                        { key: "d", text: "$\\dfrac{q^2B^2R}{2m}$" }
                    ],
                    answer: "b",
                    explanation: "At the rim $v=\\dfrac{qBR}{m}$, so $K=\\tfrac12mv^2=\\dfrac{q^2B^2R^2}{2m}$. The energy is limited by the dee radius, not by the applied voltage.",
                    source: "Authored (CEE/IOE magnetism syllabus): Force on a moving charge"
                },
                {
                    id: "f31",
                    text: "Given the mass of a wire (200 g) and its length (0.24 m) placed in a magnetic field of 0.2 T, find the current required to support it against gravity.",
                    options: [
                        { key: "a", text: "4.08 A" },
                        { key: "b", text: "20.4 A" },
                        { key: "c", text: "40.8 A" },
                        { key: "d", text: "81.7 A" }
                    ],
                    answer: "c",
                    explanation: "To support the wire the magnetic force balances gravity: BIL = mg ⟹ I = mg/(BL) = (0.2·9.8)/(0.2·0.24) ≈ 40.8 A.",
                    source: "IOE NewSetstoUse 04:86"
                },
                {
                    id: "f32",
                    text: "A straight conductor of length $40$ cm carrying $5$ A is placed in a uniform field of $0.2$ T so that the conductor makes $30^\\circ$ with the field. The force on the conductor is:",
                    options: [
                        { key: "a", text: "$0.35$ N" },
                        { key: "b", text: "zero" },
                        { key: "c", text: "$0.4$ N" },
                        { key: "d", text: "$0.2$ N" }
                    ],
                    answer: "d",
                    explanation: "$F=BIL\\sin\\theta=0.2\\times5\\times0.4\\times\\sin30^\\circ=0.2$ N.",
                    source: "Authored (CEE/IOE magnetism syllabus): Force & torque on conductor/coil"
                },
                {
                    id: "f33",
                    text: "A wire bent into a semicircle of radius $10$ cm carries $4$ A and is placed in a uniform field of $0.5$ T perpendicular to its plane. The net force on the semicircular wire is:",
                    options: [
                        { key: "a", text: "$0.4$ N" },
                        { key: "b", text: "$0.63$ N" },
                        { key: "c", text: "$0.2$ N" },
                        { key: "d", text: "zero" }
                    ],
                    answer: "a",
                    explanation: "For a current in a uniform field the net force depends only on the straight line joining the ends, of length $2R=0.2$ m. Hence $F=BI(2R)=0.5\\times4\\times0.2=0.4$ N.",
                    source: "Authored (CEE/IOE magnetism syllabus): Force & torque on conductor/coil"
                },
                {
                    id: "f34",
                    text: "A rectangular coil of $50$ turns and area $0.01\\ \\mathrm{m^2}$ carries $2$ A with its plane parallel to a uniform field of $0.5$ T. The torque on the coil is:",
                    options: [
                        { key: "a", text: "$0.25$ N·m" },
                        { key: "b", text: "$0.5$ N·m" },
                        { key: "c", text: "$1.0$ N·m" },
                        { key: "d", text: "zero" }
                    ],
                    answer: "b",
                    explanation: "$\\tau=NIAB\\sin\\theta$ where $\\theta$ is the angle between the normal and $\\vec B$. With the plane parallel to $\\vec B$, $\\theta=90^\\circ$ and $\\tau=50\\times2\\times0.01\\times0.5=0.5$ N·m, the maximum value.",
                    source: "Authored (CEE/IOE magnetism syllabus): Force & torque on conductor/coil"
                },
                {
                    id: "f35",
                    text: "A current loop of magnetic moment $\\vec m$ is placed in a uniform field $\\vec B$. Its potential energy is minimum when:",
                    options: [
                        { key: "a", text: "$\\vec m$ is perpendicular to $\\vec B$" },
                        { key: "b", text: "the loop carries no current" },
                        { key: "c", text: "$\\vec m$ is parallel to $\\vec B$" },
                        { key: "d", text: "$\\vec m$ is antiparallel to $\\vec B$" }
                    ],
                    answer: "c",
                    explanation: "$U=-\\vec m\\cdot\\vec B=-mB\\cos\\theta$ is least at $\\theta=0$, so the stable equilibrium is with the moment parallel to the field; the antiparallel position is unstable.",
                    source: "Authored (CEE/IOE magnetism syllabus): Force & torque on conductor/coil"
                },
                {
                    id: "f36",
                    text: "The Hall effect in a conducting slab is used principally to determine:",
                    options: [
                        { key: "a", text: "the thermal conductivity of the slab" },
                        { key: "b", text: "the melting point of the material" },
                        { key: "c", text: "the resistivity of the slab only" },
                        { key: "d", text: "the sign and number density of the charge carriers" }
                    ],
                    answer: "d",
                    explanation: "The polarity of the transverse Hall voltage reveals whether the carriers are negative or positive, and its magnitude $V_H=\\dfrac{BI}{nqt}$ gives their number density.",
                    source: "Authored (CEE/IOE magnetism syllabus): Hall effect"
                },
                {
                    id: "f37",
                    text: "A metal strip of thickness $1$ mm carries a current of $2$ A in a perpendicular field of $0.5$ T. If the carrier density is $8\\times10^{28}\\ \\mathrm{m^{-3}}$, the Hall voltage is nearly:",
                    options: [
                        { key: "a", text: "$7.8\\times10^{-8}$ V" },
                        { key: "b", text: "$7.8\\times10^{-5}$ V" },
                        { key: "c", text: "$1.6\\times10^{-6}$ V" },
                        { key: "d", text: "$3.9\\times10^{-8}$ V" }
                    ],
                    answer: "a",
                    explanation: "$V_H=\\dfrac{BI}{nqt}=\\dfrac{0.5\\times2}{8\\times10^{28}\\times1.6\\times10^{-19}\\times10^{-3}}\\approx7.8\\times10^{-8}$ V.",
                    source: "Authored (CEE/IOE magnetism syllabus): Hall effect"
                },
                {
                    id: "f38",
                    text: "The Hall coefficient of a conductor with carrier density $n$ and carrier charge $q$ is given by:",
                    options: [
                        { key: "a", text: "$nq$" },
                        { key: "b", text: "$\\dfrac{1}{nq}$" },
                        { key: "c", text: "$\\dfrac{q}{n}$" },
                        { key: "d", text: "$\\dfrac{n}{q}$" }
                    ],
                    answer: "b",
                    explanation: "The Hall coefficient is defined as $R_H=\\dfrac{E_H}{JB}=\\dfrac{1}{nq}$, so a small carrier density gives a large Hall coefficient — which is why semiconductors show a much bigger Hall effect than metals.",
                    source: "Authored (CEE/IOE magnetism syllabus): Hall effect"
                }
            ]
        },
        {
            id: "emi19",
            name: "Electromagnetic Induction",
            subject: "Physics",
            accent: "emerald",
            blurb: "Faraday & Lenz laws · motional emf · a.c. generator · transformer & eddy currents · self/mutual inductance and stored energy.",
            questions: [
                {
                    id: "e1",
                    text: "Lenz's law is a consequence of the conservation of:",
                    options: [
                        { key: "a", text: "magnetic flux" },
                        { key: "b", text: "charge" },
                        { key: "c", text: "energy" },
                        { key: "d", text: "momentum" }
                    ],
                    answer: "c",
                    explanation: "Lenz's law — the induced current opposes the change producing it — is a direct consequence of the conservation of energy.",
                    source: "IOE NewSetstoUse 05:22"
                },
                {
                    id: "e2",
                    text: "Induced emf doesn't depend on:",
                    options: [
                        { key: "a", text: "No. of turns" },
                        { key: "b", text: "Associated flux" },
                        { key: "c", text: "Time" },
                        { key: "d", text: "Resistance of coil" }
                    ],
                    answer: "d",
                    explanation: "Induced emf = −N(dφ/dt) depends on the turns, flux and its rate of change, but not on the coil's own resistance.",
                    source: "IOE NewSetstoUse 10:32"
                },
                {
                    id: "e3",
                    text: "The magnetic flux perpendicular to the plane of a coil is φ = 4t² + 5t + 2 (weber). Calculate the magnitude of the instantaneous emf induced at t = 2 s.",
                    options: [
                        { key: "a", text: "21 V" },
                        { key: "b", text: "10.5 V" },
                        { key: "c", text: "−21 V" },
                        { key: "d", text: "42 V" }
                    ],
                    answer: "a",
                    explanation: "emf = −dφ/dt = −(8t + 5); at t = 2 s its magnitude is 8(2) + 5 = 21 V.",
                    source: "IOE NewSetstoUse 10:86"
                },
                {
                    id: "e4",
                    text: "A coil of 200 cm² area with 500 turns has a magnetic field changing at 20 tesla per second through it; find the induced emf in the coil.",
                    options: [
                        { key: "a", text: "2000 V" },
                        { key: "b", text: "200 V" },
                        { key: "c", text: "20 V" },
                        { key: "d", text: "2 V" }
                    ],
                    answer: "b",
                    explanation: "Induced emf = N·A·(dB/dt) = 500 × (200×10⁻⁴ m²) × 20 = 200 V.",
                    source: "IOE NewSetstoUse 09:86"
                },
                {
                    id: "e5",
                    text: "A coil of $50$ turns and area $4\\times10^{-2}\\ \\mathrm{m^2}$ is placed perpendicular to a magnetic field changing at $0.5$ T/s. The induced emf is:",
                    options: [
                        { key: "a", text: "$2.5$ V" },
                        { key: "b", text: "$0.1$ V" },
                        { key: "c", text: "$1$ V" },
                        { key: "d", text: "$10$ V" }
                    ],
                    answer: "c",
                    explanation: "$\\varepsilon=NA\\dfrac{dB}{dt}=50\\times4\\times10^{-2}\\times0.5=1$ V.",
                    source: "Authored (CEE/IOE magnetism syllabus): Faraday & Lenz laws"
                },
                {
                    id: "e6",
                    text: "The north pole of a bar magnet is pushed towards a closed coil. Seen from the side of the approaching magnet, the induced current in the coil flows:",
                    options: [
                        { key: "a", text: "clockwise, so that the near face becomes a north pole" },
                        { key: "b", text: "in no definite sense" },
                        { key: "c", text: "clockwise, so that the near face becomes a south pole" },
                        { key: "d", text: "anticlockwise, so that the near face becomes a north pole" }
                    ],
                    answer: "d",
                    explanation: "By Lenz's law the coil must oppose the approach, so the face towards the magnet becomes a north pole and repels it. Viewed from the magnet, that requires an anticlockwise current.",
                    source: "Authored (CEE/IOE magnetism syllabus): Faraday & Lenz laws"
                },
                {
                    id: "e7",
                    text: "A strong bar magnet is dropped through a long vertical copper pipe. Compared with free fall in air, the magnet:",
                    options: [
                        { key: "a", text: "falls much more slowly" },
                        { key: "b", text: "falls in exactly the same time" },
                        { key: "c", text: "sticks permanently to the pipe" },
                        { key: "d", text: "falls faster" }
                    ],
                    answer: "a",
                    explanation: "The changing flux induces eddy currents in the pipe whose field opposes the motion (Lenz's law), producing a retarding force so the magnet drifts down slowly even though copper is non-magnetic.",
                    source: "Authored (CEE/IOE magnetism syllabus): Faraday & Lenz laws"
                },
                {
                    id: "e8",
                    text: "A coil of $100$ turns and resistance $10\\ \\Omega$ experiences a flux change of $5\\times10^{-3}$ Wb. The charge that circulates through the coil is:",
                    options: [
                        { key: "a", text: "$0.005$ C" },
                        { key: "b", text: "$0.05$ C" },
                        { key: "c", text: "$0.5$ C" },
                        { key: "d", text: "$5\\times10^{-4}$ C" }
                    ],
                    answer: "b",
                    explanation: "The induced charge $q=\\dfrac{N\\Delta\\phi}{R}=\\dfrac{100\\times5\\times10^{-3}}{10}=0.05$ C. Note it depends only on the total flux change, not on how fast it occurs.",
                    source: "Authored (CEE/IOE magnetism syllabus): Faraday & Lenz laws"
                },
                {
                    id: "e9",
                    text: "A conducting rod of length $1.2$ m moves at $8$ m/s perpendicular to both its own length and a uniform field of $0.5$ T. The emf induced across its ends is:",
                    options: [
                        { key: "a", text: "$0.6$ V" },
                        { key: "b", text: "$2.4$ V" },
                        { key: "c", text: "$4.8$ V" },
                        { key: "d", text: "$9.6$ V" }
                    ],
                    answer: "c",
                    explanation: "Motional emf $\\varepsilon=Blv=0.5\\times1.2\\times8=4.8$ V.",
                    source: "Authored (CEE/IOE magnetism syllabus): Motional emf"
                },
                {
                    id: "e10",
                    text: "A rod of length $0.5$ m rotates about one end in a plane perpendicular to a uniform field of $0.2$ T at $10$ rad/s. The emf between its ends is:",
                    options: [
                        { key: "a", text: "$0.05$ V" },
                        { key: "b", text: "$0.5$ V" },
                        { key: "c", text: "$1.0$ V" },
                        { key: "d", text: "$0.25$ V" }
                    ],
                    answer: "d",
                    explanation: "For a rotating rod $\\varepsilon=\\tfrac12B\\omega l^2=\\tfrac12\\times0.2\\times10\\times(0.5)^2=0.25$ V.",
                    source: "Authored (CEE/IOE magnetism syllabus): Motional emf"
                },
                {
                    id: "e11",
                    text: "A rectangular loop moves at constant velocity into a region of uniform magnetic field and then continues until it is completely inside. The induced emf is:",
                    options: [
                        { key: "a", text: "present while entering and zero when fully inside" },
                        { key: "b", text: "zero while entering and present when fully inside" },
                        { key: "c", text: "zero at all times" },
                        { key: "d", text: "constant throughout the motion" }
                    ],
                    answer: "a",
                    explanation: "While the loop enters, the enclosed flux increases and an emf $Blv$ appears. Once the loop is entirely inside the uniform field the flux is constant, so the emf falls to zero.",
                    source: "Authored (CEE/IOE magnetism syllabus): Motional emf"
                },
                {
                    id: "e12",
                    text: "An aeroplane with a wingspan of $20$ m flies horizontally at $300$ m/s where the vertical component of the earth's field is $5\\times10^{-5}$ T. The emf between its wing tips is:",
                    options: [
                        { key: "a", text: "$30$ V" },
                        { key: "b", text: "$0.3$ V" },
                        { key: "c", text: "$3.0$ V" },
                        { key: "d", text: "$0.03$ V" }
                    ],
                    answer: "b",
                    explanation: "Only the vertical component contributes: $\\varepsilon=B_V l v=5\\times10^{-5}\\times20\\times300=0.3$ V.",
                    source: "Authored (CEE/IOE magnetism syllabus): Motional emf"
                },
                {
                    id: "e13",
                    text: "A coil of $100$ turns and area $0.02\\ \\mathrm{m^2}$ rotates at $100$ rad/s in a uniform field of $0.5$ T. The peak emf generated is:",
                    options: [
                        { key: "a", text: "$10$ V" },
                        { key: "b", text: "$50$ V" },
                        { key: "c", text: "$100$ V" },
                        { key: "d", text: "$200$ V" }
                    ],
                    answer: "c",
                    explanation: "For an a.c. generator $\\varepsilon_0=NAB\\omega=100\\times0.02\\times0.5\\times100=100$ V.",
                    source: "Authored (CEE/IOE magnetism syllabus): AC generator"
                },
                {
                    id: "e14",
                    text: "In an a.c. generator the induced emf is maximum when the plane of the coil is:",
                    options: [
                        { key: "a", text: "at $45^\\circ$ to the field" },
                        { key: "b", text: "at $30^\\circ$ to the field" },
                        { key: "c", text: "perpendicular to the field" },
                        { key: "d", text: "parallel to the field" }
                    ],
                    answer: "d",
                    explanation: "The emf follows the rate of change of flux, which is greatest when the flux itself is momentarily zero — that is, when the coil plane contains the field direction (plane parallel to $\\vec B$).",
                    source: "Authored (CEE/IOE magnetism syllabus): AC generator"
                },
                {
                    id: "e15",
                    text: "The emf of an a.c. generator is $\\varepsilon=\\varepsilon_0\\sin\\omega t$. At the instant the flux through the coil is maximum, the induced emf is:",
                    options: [
                        { key: "a", text: "zero" },
                        { key: "b", text: "half of $\\varepsilon_0$" },
                        { key: "c", text: "equal to $\\varepsilon_0/\\sqrt2$" },
                        { key: "d", text: "maximum" }
                    ],
                    answer: "a",
                    explanation: "Flux is maximum when the coil plane is perpendicular to $\\vec B$; at that instant $d\\phi/dt=0$, so the emf is zero. Emf and flux are $90^\\circ$ out of phase.",
                    source: "Authored (CEE/IOE magnetism syllabus): AC generator"
                },
                {
                    id: "e16",
                    text: "If the speed of rotation of an a.c. generator coil is doubled, the peak emf and the frequency of the output respectively become:",
                    options: [
                        { key: "a", text: "four times and doubled" },
                        { key: "b", text: "doubled and doubled" },
                        { key: "c", text: "doubled and unchanged" },
                        { key: "d", text: "unchanged and doubled" }
                    ],
                    answer: "b",
                    explanation: "Both quantities are governed by $\\omega$: the peak value $\\varepsilon_0=NAB\\omega$ doubles and the frequency $f=\\omega/2\\pi$ also doubles.",
                    source: "Authored (CEE/IOE magnetism syllabus): AC generator"
                },
                {
                    id: "e17",
                    text: "Eddy current is produced in",
                    options: [
                        { key: "a", text: "changing electric field" },
                        { key: "b", text: "uniform magnetic field" },
                        { key: "c", text: "non-uniform magnetic field" },
                        { key: "d", text: "heated magnetic field" }
                    ],
                    answer: "c",
                    explanation: "Eddy currents are induced by a changing/non-uniform magnetic field.",
                    source: "IOE NewSetstoUse 13:31"
                },
                {
                    id: "e18",
                    text: "An ideal transformer has $1100$ turns in the primary and $100$ turns in the secondary. With $220$ V applied to the primary, the secondary voltage is:",
                    options: [
                        { key: "a", text: "$2420$ V" },
                        { key: "b", text: "$11$ V" },
                        { key: "c", text: "$200$ V" },
                        { key: "d", text: "$20$ V" }
                    ],
                    answer: "d",
                    explanation: "$\\dfrac{V_s}{V_p}=\\dfrac{N_s}{N_p}\\Rightarrow V_s=220\\times\\dfrac{100}{1100}=20$ V — a step-down transformer.",
                    source: "Authored (CEE/IOE magnetism syllabus): Transformer & eddy currents"
                },
                {
                    id: "e19",
                    text: "In an ideal step-down transformer of turns ratio $N_p:N_s=10:1$, the primary current is $0.5$ A. The secondary current is:",
                    options: [
                        { key: "a", text: "$5$ A" },
                        { key: "b", text: "$0.5$ A" },
                        { key: "c", text: "$50$ A" },
                        { key: "d", text: "$0.05$ A" }
                    ],
                    answer: "a",
                    explanation: "Power is conserved in an ideal transformer, so $I_s=I_p\\dfrac{N_p}{N_s}=0.5\\times10=5$ A. Stepping the voltage down steps the current up.",
                    source: "Authored (CEE/IOE magnetism syllabus): Transformer & eddy currents"
                },
                {
                    id: "e20",
                    text: "A transformer draws $5$ A at $220$ V in the primary and delivers $45$ A at $22$ V in the secondary. Its efficiency is:",
                    options: [
                        { key: "a", text: "$100\\%$" },
                        { key: "b", text: "$90\\%$" },
                        { key: "c", text: "$80\\%$" },
                        { key: "d", text: "$45\\%$" }
                    ],
                    answer: "b",
                    explanation: "Input power $=220\\times5=1100$ W and output power $=22\\times45=990$ W, so $\\eta=\\dfrac{990}{1100}\\times100=90\\%$.",
                    source: "Authored (CEE/IOE magnetism syllabus): Transformer & eddy currents"
                },
                {
                    id: "e21",
                    text: "The core of a transformer is built up of thin, insulated laminations mainly to:",
                    options: [
                        { key: "a", text: "increase the flux linkage" },
                        { key: "b", text: "reduce hysteresis loss" },
                        { key: "c", text: "reduce power loss due to eddy currents" },
                        { key: "d", text: "reduce the resistance of the windings" }
                    ],
                    answer: "c",
                    explanation: "Laminations break the conducting cross-section into thin insulated sheets, greatly increasing the resistance of the eddy-current paths and so cutting the $I^2R$ heating they cause.",
                    source: "Authored (CEE/IOE magnetism syllabus): Transformer & eddy currents"
                },
                {
                    id: "e22",
                    text: "Eddy currents are usefully employed in:",
                    options: [
                        { key: "a", text: "increasing the emf of a cell" },
                        { key: "b", text: "reducing the resistance of a conductor" },
                        { key: "c", text: "a moving-coil galvanometer to increase sensitivity" },
                        { key: "d", text: "induction furnaces and electromagnetic braking" }
                    ],
                    answer: "d",
                    explanation: "The heat produced by strong eddy currents melts metal in an induction furnace, and the opposing force they generate is used for magnetic braking and for damping in instruments.",
                    source: "Authored (CEE/IOE magnetism syllabus): Transformer & eddy currents"
                },
                {
                    id: "e23",
                    text: "A transformer cannot be used to step up a steady d.c. voltage because:",
                    options: [
                        { key: "a", text: "a steady current produces no changing flux and hence no induced emf" },
                        { key: "b", text: "the core saturates instantly with d.c." },
                        { key: "c", text: "the secondary has too few turns for d.c." },
                        { key: "d", text: "d.c. cannot flow through copper windings" }
                    ],
                    answer: "a",
                    explanation: "Transformer action depends on mutual induction, which needs $d\\phi/dt\\neq0$. A steady direct current gives a constant flux, so no emf is induced in the secondary.",
                    source: "Authored (CEE/IOE magnetism syllabus): Transformer & eddy currents"
                },
                {
                    id: "e24",
                    text: "If L₁ and L₂ are inductances of coils in contact (assume ideal), find the mutual inductance.",
                    options: [
                        { key: "a", text: "(L₁+L₂)/2" },
                        { key: "b", text: "√(L₁L₂)" },
                        { key: "c", text: "L₁L₂" },
                        { key: "d", text: "L₁/L₂" }
                    ],
                    answer: "b",
                    explanation: "For ideal coupling the mutual inductance is M = √(L₁L₂).",
                    source: "IOE NewSetstoUse 12:86"
                },
                {
                    id: "e25",
                    text: "A solenoid of $500$ turns is $0.5$ m long and has a cross-sectional area of $10^{-3}\\ \\mathrm{m^2}$. Its self-inductance is nearly:",
                    options: [
                        { key: "a", text: "$3.1\\times10^{-4}$ H" },
                        { key: "b", text: "$1.3\\times10^{-3}$ H" },
                        { key: "c", text: "$6.3\\times10^{-4}$ H" },
                        { key: "d", text: "$6.3\\times10^{-3}$ H" }
                    ],
                    answer: "c",
                    explanation: "$L=\\dfrac{\\mu_0N^2A}{l}=\\dfrac{4\\pi\\times10^{-7}\\times(500)^2\\times10^{-3}}{0.5}\\approx6.3\\times10^{-4}$ H.",
                    source: "Authored (CEE/IOE magnetism syllabus): Self & mutual inductance"
                },
                {
                    id: "e26",
                    text: "The number of turns of a solenoid is doubled without changing its length or area. Its self-inductance becomes:",
                    options: [
                        { key: "a", text: "unchanged" },
                        { key: "b", text: "double" },
                        { key: "c", text: "half" },
                        { key: "d", text: "four times" }
                    ],
                    answer: "d",
                    explanation: "$L=\\dfrac{\\mu_0N^2A}{l}\\propto N^2$, so doubling the turns makes the inductance four times as large.",
                    source: "Authored (CEE/IOE magnetism syllabus): Self & mutual inductance"
                },
                {
                    id: "e27",
                    text: "The self-inductance of a coil depends on:",
                    options: [
                        { key: "a", text: "its geometry and the permeability of its core" },
                        { key: "b", text: "the resistance of its winding" },
                        { key: "c", text: "the current flowing through it" },
                        { key: "d", text: "the emf applied to it" }
                    ],
                    answer: "a",
                    explanation: "Inductance is a purely geometrical/material property — turns, area, length and core permeability. It is independent of the instantaneous current or applied emf.",
                    source: "Authored (CEE/IOE magnetism syllabus): Self & mutual inductance"
                },
                {
                    id: "e28",
                    text: "Two coils of self-inductance $L_1$ and $L_2$ with mutual inductance $M$ are connected in series so that their fluxes aid each other. The equivalent inductance is:",
                    options: [
                        { key: "a", text: "$L_1+L_2-2M$" },
                        { key: "b", text: "$L_1+L_2+2M$" },
                        { key: "c", text: "$L_1+L_2$" },
                        { key: "d", text: "$\\sqrt{L_1L_2}$" }
                    ],
                    answer: "b",
                    explanation: "For series aiding the mutual flux adds to the self flux of each coil, giving $L=L_1+L_2+2M$; in series opposition it would be $L_1+L_2-2M$.",
                    source: "Authored (CEE/IOE magnetism syllabus): Self & mutual inductance"
                },
                {
                    id: "e29",
                    text: "Two coils have self-inductances $L_1$ and $L_2$ and mutual inductance $M$. Their coefficient of coupling is:",
                    options: [
                        { key: "a", text: "$\\dfrac{M}{L_1+L_2}$" },
                        { key: "b", text: "$M\\sqrt{L_1L_2}$" },
                        { key: "c", text: "$\\dfrac{M}{\\sqrt{L_1L_2}}$" },
                        { key: "d", text: "$\\dfrac{\\sqrt{L_1L_2}}{M}$" }
                    ],
                    answer: "c",
                    explanation: "The coupling coefficient is $k=\\dfrac{M}{\\sqrt{L_1L_2}}$, with $k=1$ for perfect flux linkage and $k<1$ when some flux leaks.",
                    source: "Authored (CEE/IOE magnetism syllabus): Self & mutual inductance"
                },
                {
                    id: "e30",
                    text: "The mutual inductance between two coils is $0.5$ H. If the current in the primary changes at $4$ A/s, the emf induced in the secondary is:",
                    options: [
                        { key: "a", text: "$8$ V" },
                        { key: "b", text: "$0.5$ V" },
                        { key: "c", text: "$0.125$ V" },
                        { key: "d", text: "$2$ V" }
                    ],
                    answer: "d",
                    explanation: "$\\varepsilon_2=M\\dfrac{dI_1}{dt}=0.5\\times4=2$ V.",
                    source: "Authored (CEE/IOE magnetism syllabus): Self & mutual inductance"
                },
                {
                    id: "e31",
                    text: "The energy stored in an inductor of $2$ H carrying a steady current of $3$ A is:",
                    options: [
                        { key: "a", text: "$9$ J" },
                        { key: "b", text: "$18$ J" },
                        { key: "c", text: "$3$ J" },
                        { key: "d", text: "$6$ J" }
                    ],
                    answer: "a",
                    explanation: "$U=\\tfrac12LI^2=\\tfrac12\\times2\\times3^2=9$ J, stored in the magnetic field of the coil.",
                    source: "Authored (CEE/IOE magnetism syllabus): Energy in an inductor"
                },
                {
                    id: "e32",
                    text: "The energy density of a magnetic field of flux density $0.4$ T in free space is nearly:",
                    options: [
                        { key: "a", text: "$8.0\\times10^{3}\\ \\mathrm{J/m^3}$" },
                        { key: "b", text: "$6.4\\times10^{4}\\ \\mathrm{J/m^3}$" },
                        { key: "c", text: "$1.6\\times10^{5}\\ \\mathrm{J/m^3}$" },
                        { key: "d", text: "$3.2\\times10^{4}\\ \\mathrm{J/m^3}$" }
                    ],
                    answer: "b",
                    explanation: "$u=\\dfrac{B^2}{2\\mu_0}=\\dfrac{(0.4)^2}{2\\times4\\pi\\times10^{-7}}\\approx6.4\\times10^{4}\\ \\mathrm{J/m^3}$.",
                    source: "Authored (CEE/IOE magnetism syllabus): Energy in an inductor"
                },
                {
                    id: "e33",
                    text: "In a circuit containing an inductance of $0.2$ H in series with a resistance of $100\\ \\Omega$, the time constant is:",
                    options: [
                        { key: "a", text: "$20$ s" },
                        { key: "b", text: "$2$ s" },
                        { key: "c", text: "$2\\times10^{-3}$ s" },
                        { key: "d", text: "$500$ s" }
                    ],
                    answer: "c",
                    explanation: "The time constant of an L–R circuit is $\\tau=\\dfrac{L}{R}=\\dfrac{0.2}{100}=2\\times10^{-3}$ s.",
                    source: "Authored (CEE/IOE magnetism syllabus): Energy in an inductor"
                },
                {
                    id: "e34",
                    text: "When a d.c. source is switched on in an L–R circuit, the current after one time constant reaches what fraction of its final value?",
                    options: [
                        { key: "a", text: "$1.00$" },
                        { key: "b", text: "$0.37$" },
                        { key: "c", text: "$0.50$" },
                        { key: "d", text: "$0.63$" }
                    ],
                    answer: "d",
                    explanation: "The growth law is $I=I_0(1-e^{-t/\\tau})$; at $t=\\tau$, $I=I_0(1-e^{-1})=0.63I_0$.",
                    source: "Authored (CEE/IOE magnetism syllabus): Energy in an inductor"
                }
            ]
        },
        {
            id: "earthmag19",
            name: "Earth's Magnetism & Instruments",
            subject: "Physics",
            accent: "slate",
            blurb: "The remaining IOE source-bank magnetism items — magnetic elements of the earth and galvanometers.",
            questions: [
                {
                    id: "g1",
                    text: "The angle between the magnetic meridian and the geographic meridian is called ___.",
                    options: [
                        { key: "a", text: "magnetic declination" },
                        { key: "b", text: "magnetic moment" },
                        { key: "c", text: "magnetic latitude" },
                        { key: "d", text: "angle of dip (inclination)" }
                    ],
                    answer: "a",
                    explanation: "The magnetic meridian is the vertical plane containing the Earth's magnetic field direction at a place, while the geographic meridian is the vertical plane through the geographic north–south line. The angle between these two planes is called the magnetic declination. The angle of dip, by contrast, is the angle the Earth's field makes with the horizontal, not with the geographic meridian.",
                    source: "IOE NewSetstoUse 01:32"
                },
                {
                    id: "g2",
                    text: "What is the angle of dip at the magnetic poles of the earth?",
                    options: [
                        { key: "a", text: "180°" },
                        { key: "b", text: "90°" },
                        { key: "c", text: "Zero" },
                        { key: "d", text: "45°" }
                    ],
                    answer: "b",
                    explanation: "At the magnetic poles the field is vertical, so the angle of dip is 90°.",
                    source: "IOE NewSetstoUse 16:32"
                },
                {
                    id: "g3",
                    text: "Line of force due to earth's horizontal magnetic field are:",
                    options: [
                        { key: "a", text: "elliptical" },
                        { key: "b", text: "concentric circles" },
                        { key: "c", text: "parallel and straight" },
                        { key: "d", text: "curved lines" }
                    ],
                    answer: "c",
                    explanation: "The earth's horizontal field lines are parallel and straight.",
                    source: "IOE NewSetstoUse 15:31"
                },
                {
                    id: "g4",
                    text: "Unit of pole strength.",
                    options: [
                        { key: "a", text: "ampere-metre² (A·m²)" },
                        { key: "b", text: "weber (Wb)" },
                        { key: "c", text: "tesla (T)" },
                        { key: "d", text: "ampere-metre (A·m)" }
                    ],
                    answer: "d",
                    explanation: "Magnetic pole strength has the SI unit ampere-metre (A·m).",
                    source: "IOE NewSetstoUse 11:32"
                },
                {
                    id: "g5",
                    text: "A bar magnet shows 30 oscillations per minute at a place where the horizontal component of Earth's field is H = 0.4×10⁻⁵ T. Find H at a place where the same magnet takes 1.5 s per oscillation.",
                    options: [
                        { key: "a", text: "7.1×10⁻⁶ T" },
                        { key: "b", text: "0.4×10⁻⁵ T" },
                        { key: "c", text: "0.3×10⁻⁵ T" },
                        { key: "d", text: "2.25×10⁻⁵ T" }
                    ],
                    answer: "a",
                    explanation: "The period T ∝ 1/√H. First T₁ = 60/30 = 2 s; with T₂ = 1.5 s, H₂ = H₁(T₁/T₂)² = 0.4×10⁻⁵×(2/1.5)² ≈ 7.1×10⁻⁶ T.",
                    source: "IOE NewSetstoUse 06:86"
                },
                {
                    id: "g6",
                    text: "A galvanometer of resistance 20 Ω shows 60 divisions of deflection for a certain circuit current. When a shunt is connected, the same circuit current gives only 20 divisions. What is the shunt resistance?",
                    options: [
                        { key: "a", text: "8 Ω" },
                        { key: "b", text: "10 Ω" },
                        { key: "c", text: "1 Ω" },
                        { key: "d", text: "4 Ω" }
                    ],
                    answer: "b",
                    explanation: "With the shunt, only the fraction S/(S+G) of the circuit current passes through the galvanometer, so the deflection falls in that ratio: 20/60 = S/(S+20) ⟹ S + 20 = 3S ⟹ S = G/2 = 10 Ω.",
                    source: "IOE NewSetstoUse 03:86"
                },
                {
                    id: "g7",
                    text: "State the principle of a ballistic galvanometer.",
                    options: [
                        { key: "a", text: "The steady deflection is proportional to the current" },
                        { key: "b", text: "The deflection is proportional to the applied voltage" },
                        { key: "c", text: "The first throw (deflection) is directly proportional to the charge passing through the coil" },
                        { key: "d", text: "The time period is proportional to the charge passed" }
                    ],
                    answer: "c",
                    explanation: "In a ballistic galvanometer the first (maximum) throw of the coil is directly proportional to the total charge that passes through it.",
                    source: "IOE NewSetstoUse 05:33"
                },
                {
                    id: "g8",
                    text: "A current of 10⁻⁶ A produces a deflection of 20 divisions in a galvanometer. The figure of merit is:",
                    options: [
                        { key: "a", text: "5×10⁻⁵ A/div" },
                        { key: "b", text: "2×10⁷ div/A" },
                        { key: "c", text: "0.1 A/div" },
                        { key: "d", text: "5×10⁻⁸ A/div" }
                    ],
                    answer: "d",
                    explanation: "Figure of merit = current/deflection = 10⁻⁶/20 = 5×10⁻⁸ A/div.",
                    source: "IOE NewSetstoUse 14:86"
                }
            ]
        }
    ]
};

const DAY19_SYLLABUS = [
    { subject: "Physics", accent: "blue", topics: [
        { topic: "Magnetic Properties of Materials", subs: [
            { name: "Dia, Para & Ferromagnetic Behaviour", ids: ["m1", "m2", "m3", "m4", "m5", "m6", "m7"] },
            { name: "Relative Permeability & Susceptibility", ids: ["m8", "m9", "m10", "m11", "m12", "m13", "m14"] },
            { name: "Domains, Hysteresis & Core Materials", ids: ["m15", "m16", "m17", "m18", "m19", "m20"] }
        ] },
        { topic: "Magnetic Field", subs: [
            { name: "Field due to a Straight Conductor", ids: ["f1", "f2", "f3", "f4"] },
            { name: "Circular Coil & Arcs", ids: ["f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12", "f13"] },
            { name: "Long Solenoid & Toroid", ids: ["f14", "f15", "f16", "f17", "f18", "f19"] },
            { name: "Force on a Moving Charge", ids: ["f20", "f21", "f22", "f23", "f24", "f25", "f26", "f27", "f28", "f29", "f30"] },
            { name: "Force & Torque on a Conductor/Coil", ids: ["f31", "f32", "f33", "f34", "f35"] },
            { name: "Hall Effect", ids: ["f36", "f37", "f38"] }
        ] },
        { topic: "Electromagnetic Induction", subs: [
            { name: "Faraday's & Lenz's Laws", ids: ["e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8"] },
            { name: "Motional EMF", ids: ["e9", "e10", "e11", "e12"] },
            { name: "A.C. Generator", ids: ["e13", "e14", "e15", "e16"] },
            { name: "Transformer & Eddy Currents", ids: ["e17", "e18", "e19", "e20", "e21", "e22", "e23"] },
            { name: "Self & Mutual Inductance", ids: ["e24", "e25", "e26", "e27", "e28", "e29", "e30"] },
            { name: "Energy Stored in an Inductor", ids: ["e31", "e32", "e33", "e34"] }
        ] },
        { topic: "Earth's Magnetism & Instruments", subs: [
            { name: "Magnetic Elements of the Earth", ids: ["g1", "g2", "g3", "g4", "g5"] },
            { name: "Galvanometers", ids: ["g6", "g7", "g8"] }
        ] }
    ] }
];
DAY19.syllabus = DAY19_SYLLABUS;
