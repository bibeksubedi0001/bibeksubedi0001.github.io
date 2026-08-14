/* ============================================================
   DAY 27 — MAGNETISM DRILL
   50 questions · 45 minutes · 0.25 negative marking

     Magnetic properties of materials ... 12   d27p1  – d27p12
     Magnetic field ..................... 20   d27p13 – d27p32
     Electromagnetic induction .......... 18   d27p33 – d27p50

   Scope is exactly the three sub-topics of Physics unit 4 of the
   official MEC syllabus (2020, revised 2026).

   Every question is new: none repeats the magnetism items of
   Day 9, Day 14, Day 19, Day 20, Day 21 or Day 26.
   ============================================================ */
const DAY27 = {
    day: 27,
    title: "Day 27",
    subtitle: "Magnetism Drill · Materials · Magnetic Field · Electromagnetic Induction",
    durationMinutes: 45,
    negativeMarking: 0.25,
    chapters: [
        {
            id: "magmat27",
            name: "Magnetic Properties of Materials",
            subject: "Physics",
            accent: "blue",
            blurb: "Q1–12 · domains, susceptibility, relative permeability, magnetisation and hysteresis in diamagnetic, paramagnetic and ferromagnetic substances.",
            questions: [
                {
                    id: "d27p1",
                    text: "Liquid oxygen poured between the poles of a strong electromagnet clings to the pole pieces instead of running through. The property responsible, and its atomic cause, are:",
                    options: [
                        { key: "a", text: "Diamagnetism, caused by the induced orbital moment of paired electrons" },
                        { key: "b", text: "Paramagnetism, caused by two unpaired electrons in the oxygen molecule" },
                        { key: "c", text: "Ferromagnetism, caused by domains forming in the cold liquid" },
                        { key: "d", text: "Electrostatic attraction, caused by charge induced on the liquid" }
                    ],
                    answer: "b",
                    explanation: "The $\\mathrm{O_2}$ molecule has <strong>two unpaired electrons</strong>, so it carries a permanent magnetic dipole moment and the liquid is <strong>paramagnetic</strong>. A paramagnetic substance is drawn from the weaker towards the stronger part of a non-uniform field, so the liquid is held at the pole gap where the field is most intense. A diamagnetic liquid would instead be pushed out of the gap, and no ferromagnetic domain structure exists in liquid oxygen."
                },
                {
                    id: "d27p2",
                    text: "For a paramagnetic salt obeying Curie's law, a graph of magnetic susceptibility $\\chi$ against the reciprocal of the absolute temperature $1/T$ is:",
                    options: [
                        { key: "a", text: "A straight line through the origin with a positive slope" },
                        { key: "b", text: "A rectangular hyperbola lying in the first quadrant" },
                        { key: "c", text: "A straight line parallel to the $1/T$ axis" },
                        { key: "d", text: "A straight line of negative slope cutting both axes" }
                    ],
                    answer: "a",
                    explanation: "Curie's law is $\\chi=\\dfrac{C}{T}=C\\left(\\dfrac{1}{T}\\right)$, which has the form $y=mx$ with $m=C>0$. Plotted against $1/T$ it is therefore a <strong>straight line through the origin of positive slope</strong>, the slope giving the Curie constant. It is the graph of $\\chi$ against $T$ itself that is a rectangular hyperbola; a horizontal line would describe a diamagnetic substance, whose $\\chi$ is nearly independent of temperature."
                },
                {
                    id: "d27p3",
                    text: "Ferrites, used as the core material of high-frequency transformers and of computer memory devices, are preferred there mainly because they combine:",
                    options: [
                        { key: "a", text: "A large magnetisation with a very high electrical conductivity" },
                        { key: "b", text: "A negative susceptibility with a very small energy loss per cycle" },
                        { key: "c", text: "A useful magnetisation with a very high electrical resistivity" },
                        { key: "d", text: "A susceptibility that is exactly zero at all working temperatures" }
                    ],
                    answer: "c",
                    explanation: "In a ferrite the moments of neighbouring ions are antiparallel but of <em>unequal</em> size, so a substantial net magnetisation survives (ferrimagnetism). Being ceramic oxides they also have a <strong>very high resistivity</strong>, so the eddy currents that would ruin an ordinary metallic core at high frequency are almost completely suppressed. A highly conducting core would be useless at radio frequency, and a zero or negative susceptibility would provide no flux multiplication at all."
                },
                {
                    id: "d27p4",
                    text: "The core of an electromagnet, such as the one used in a scrap-yard crane, is made of soft iron rather than steel because soft iron has:",
                    options: [
                        { key: "a", text: "High permeability and low retentivity, so it demagnetises when the current stops" },
                        { key: "b", text: "High coercivity and high retentivity, so the load is held even without current" },
                        { key: "c", text: "Low permeability and high resistivity, so very little heat is produced" },
                        { key: "d", text: "A wide hysteresis loop, so a large amount of energy can be stored in it" }
                    ],
                    answer: "a",
                    explanation: "An electromagnet must become strongly magnetised while the current flows and lose that magnetism the instant it is switched off. Soft iron has a <strong>high relative permeability</strong> (large $B$ for a small $H$) together with <strong>low retentivity and low coercivity</strong>, i.e. a tall, narrow hysteresis loop of small area. Steel, with its high coercivity and retentivity and broad loop, is exactly what is wanted for a <em>permanent</em> magnet and exactly wrong for an electromagnet."
                },
                {
                    id: "d27p5",
                    text: "The hysteresis loop of a core material encloses an area corresponding to $250\\ \\mathrm{J\\,m^{-3}}$ per cycle. If the core has a volume of $10^{-3}\\ \\mathrm{m^{3}}$ and is magnetised by a $50$ Hz supply, the power dissipated as hysteresis loss is:",
                    options: [
                        { key: "a", text: "0.25 W" },
                        { key: "b", text: "5 W" },
                        { key: "c", text: "12.5 W" },
                        { key: "d", text: "125 W" }
                    ],
                    answer: "c",
                    explanation: "The loop area is the energy wasted per unit volume per cycle. Energy per cycle $=250\\times10^{-3}=0.25\\ \\mathrm{J}$. A $50$ Hz supply takes the material round the loop $50$ times each second, so the power is $P=0.25\\times50=\\mathbf{12.5\\ W}$. Note how the loss is proportional to the frequency — the reason a core meant for high-frequency work must have an extremely narrow loop."
                },
                {
                    id: "d27p6",
                    text: "A permanent magnet gradually loses its magnetism if it is repeatedly hammered or strongly heated. The reason is that both treatments:",
                    options: [
                        { key: "a", text: "Increase the coercivity of the material beyond its saturation value" },
                        { key: "b", text: "Convert the ferromagnetic material into a diamagnetic one permanently" },
                        { key: "c", text: "Reverse the direction of the current circulating inside each atom" },
                        { key: "d", text: "Supply energy that disturbs the ordered alignment of the domains" }
                    ],
                    answer: "d",
                    explanation: "In a magnetised specimen the domains are aligned along a common direction. Mechanical shock and thermal agitation both feed energy to the domain structure and let the domains <strong>swing back into random orientations</strong>, so the net moment falls; heating above the Curie point destroys the ordering altogether and the specimen turns paramagnetic. The change is a loss of <em>alignment</em>, not a change in the nature of the atoms."
                },
                {
                    id: "d27p7",
                    text: "A bar magnet of pole strength $m$ and magnetic moment $M$ is cut into two equal pieces by a cut perpendicular to its length. For each piece the pole strength and the magnetic moment are respectively:",
                    options: [
                        { key: "a", text: "$m$ and $M/2$" },
                        { key: "b", text: "$m/2$ and $M/2$" },
                        { key: "c", text: "$m/2$ and $M$" },
                        { key: "d", text: "$m$ and $M$" }
                    ],
                    answer: "a",
                    explanation: "Pole strength depends on the area of the end face and on the degree of magnetisation, neither of which is altered by a cut across the length — so each piece keeps the <strong>same pole strength $m$</strong>. The magnetic length, however, is halved, and since $M=m\\times2l$, the moment of each piece becomes <strong>$M/2$</strong>. (Had the magnet been cut <em>along</em> its length instead, the pole strength and the moment would both have halved.)"
                },
                {
                    id: "d27p8",
                    text: "Which pair of magnetic quantities is measured in the same SI unit?",
                    options: [
                        { key: "a", text: "Magnetic flux density $B$ and magnetising field $H$" },
                        { key: "b", text: "Intensity of magnetisation $M$ and magnetising field $H$" },
                        { key: "c", text: "Magnetic susceptibility $\\chi$ and relative permeability $\\mu_r$" },
                        { key: "d", text: "Magnetic flux $\\phi$ and magnetic moment of a dipole" }
                    ],
                    answer: "b",
                    explanation: "Magnetisation is dipole moment per unit volume, $\\mathrm{A\\,m^{2}/m^{3}=A\\,m^{-1}}$, and the magnetising field $H$ is also measured in $\\mathrm{A\\,m^{-1}}$ — which is precisely why $\\chi=M/H$ comes out as a <strong>pure number</strong>. $B$ is in tesla, flux in weber and magnetic moment in $\\mathrm{A\\,m^{2}}$. Susceptibility and relative permeability are both dimensionless but they are not the same quantity, being related by $\\mu_r=1+\\chi$."
                },
                {
                    id: "d27p9",
                    text: "Unlike that of a paramagnetic substance, the susceptibility of a ferromagnetic specimen cannot be quoted as a single fixed number, because it:",
                    options: [
                        { key: "a", text: "Depends only on the volume of the specimen chosen for the test" },
                        { key: "b", text: "Is always negative and therefore has no definite magnitude" },
                        { key: "c", text: "Changes sign every time the magnetising field is reversed" },
                        { key: "d", text: "Depends on the magnetising field and on the previous magnetic history" }
                    ],
                    answer: "d",
                    explanation: "For a ferromagnet the $B$–$H$ relation is <strong>non-linear and multivalued</strong>: the magnetisation rises steeply, then saturates, and on reversing $H$ it retraces a different path, so the same $H$ can correspond to several values of $M$ depending on what was done to the specimen before — this is hysteresis. Hence $\\chi=M/H$ is a function of $H$ and of the past history. For dia- and paramagnetic substances $M$ is strictly proportional to $H$, so $\\chi$ is a genuine constant."
                },
                {
                    id: "d27p10",
                    text: "Iron contains about $8.5\\times10^{28}$ atoms per cubic metre and each atom has a magnetic moment of nearly $2.2\\times10^{-23}\\ \\mathrm{A\\,m^{2}}$. If every atomic moment could be lined up, the saturation magnetisation would be about:",
                    options: [
                        { key: "a", text: "$1.9\\times10^{6}\\ \\mathrm{A\\,m^{-1}}$" },
                        { key: "b", text: "$3.9\\times10^{5}\\ \\mathrm{A\\,m^{-1}}$" },
                        { key: "c", text: "$1.9\\times10^{51}\\ \\mathrm{A\\,m^{-1}}$" },
                        { key: "d", text: "$2.6\\times10^{-52}\\ \\mathrm{A\\,m^{-1}}$" }
                    ],
                    answer: "a",
                    explanation: "Magnetisation is the dipole moment per unit volume, so $M_{sat}=n\\,\\mu_{atom}=(8.5\\times10^{28})(2.2\\times10^{-23})\\approx1.87\\times10^{6}\\ \\mathrm{A\\,m^{-1}}$. The measured saturation magnetisation of iron, about $1.7\\times10^{6}\\ \\mathrm{A\\,m^{-1}}$, is close to this figure, which is good evidence that ferromagnetism really does come from the alignment of atomic moments."
                },
                {
                    id: "d27p11",
                    text: "An iron rod is pushed into a current-carrying solenoid without altering the current or the winding. Compared with the empty solenoid:",
                    options: [
                        { key: "a", text: "Both $H$ and $B$ inside are multiplied by the relative permeability" },
                        { key: "b", text: "$H$ inside is unchanged while $B$ inside increases greatly" },
                        { key: "c", text: "$B$ inside is unchanged while $H$ inside increases greatly" },
                        { key: "d", text: "Both $H$ and $B$ inside fall, because the iron absorbs the flux" }
                    ],
                    answer: "b",
                    explanation: "The magnetising field of a long solenoid is $H=nI$ — it is fixed by the <strong>current and the turns per metre alone</strong> and knows nothing about what is inside. The core responds by becoming magnetised, and the flux density becomes $B=\\mu_0(H+M)=\\mu_0\\mu_r H$, so with $\\mu_r$ of the order of $10^{3}$ for iron the <strong>flux density is enormously increased</strong> while $H$ stays exactly where it was."
                },
                {
                    id: "d27p12",
                    text: "The susceptibility of a paramagnetic salt is of the order of $10^{-5}$, while that of iron may exceed $10^{3}$. The reason for this enormous difference is that in the ferromagnetic material:",
                    options: [
                        { key: "a", text: "Each atom carries a moment thousands of times larger than in a paramagnetic atom" },
                        { key: "b", text: "The atoms are packed thousands of times more closely than in a paramagnetic solid" },
                        { key: "c", text: "Exchange forces lock neighbouring moments parallel over a whole domain" },
                        { key: "d", text: "The applied field is able to create fresh magnetic moments inside the atoms" }
                    ],
                    answer: "c",
                    explanation: "The individual atomic moments are of much the same size in both classes of material. What distinguishes a ferromagnet is a strong quantum <strong>exchange interaction</strong> that holds the moments of neighbouring atoms rigidly parallel over a <strong>domain</strong> containing perhaps $10^{17}$ atoms. A modest applied field need only grow or rotate these ready-made blocks, so the response is gigantic, whereas in a paramagnet the field has to align each atom separately against thermal agitation."
                }
            ]
        },
        {
            id: "magfield27",
            name: "Magnetic Field",
            subject: "Physics",
            accent: "cyan",
            blurb: "Q13–32 · B-field of a straight conductor, coil, solenoid and toroid; force on a moving charge and on a current-carrying conductor; torque on a coil; Hall effect.",
            questions: [
                {
                    id: "d27p13",
                    text: "Which statement about magnetic lines of force is correct?",
                    options: [
                        { key: "a", text: "They start on a north pole and end on a south pole, like electric lines" },
                        { key: "b", text: "They may cross one another wherever two fields are superposed" },
                        { key: "c", text: "They form continuous closed loops, since isolated poles do not exist" },
                        { key: "d", text: "They are always straight lines running parallel to the current" }
                    ],
                    answer: "c",
                    explanation: "Because no magnetic monopole has ever been found, magnetic field lines have nowhere to begin or end: they are <strong>continuous closed curves</strong>, running from N to S outside a magnet and from S to N through its interior. This is the content of $\\oint\\vec{B}\\cdot d\\vec{A}=0$. Two lines can never cross, since the field at a point has only one direction, and around a straight current the lines are circles, not straight lines."
                },
                {
                    id: "d27p14",
                    text: "A circular loop of radius $R$ carries a current $I$. A long straight wire lying in the plane of the loop is tangent to it and carries the same current $I$ in such a sense that the two fields at the centre point the same way. The resultant flux density at the centre is:",
                    options: [
                        { key: "a", text: "$\\dfrac{\\mu_0 I}{2R}(\\pi+1)$" },
                        { key: "b", text: "$\\dfrac{\\mu_0 I}{2\\pi R}(\\pi-1)$" },
                        { key: "c", text: "$\\dfrac{\\mu_0 I}{2\\pi R}(\\pi+1)$" },
                        { key: "d", text: "$\\dfrac{\\mu_0 I}{4\\pi R}$" }
                    ],
                    answer: "c",
                    explanation: "The loop gives $B_1=\\dfrac{\\mu_0I}{2R}$ at its centre. The tangent wire is a distance $R$ from the centre, so it gives $B_2=\\dfrac{\\mu_0I}{2\\pi R}$. Both are perpendicular to the plane of the loop, so for the stated sense they simply add: $B=\\dfrac{\\mu_0I}{2R}+\\dfrac{\\mu_0I}{2\\pi R}=\\dfrac{\\mu_0I}{2\\pi R}(\\pi+1)$. Had the wire's current been reversed, the same working with a minus sign would give the factor $(\\pi-1)$."
                },
                {
                    id: "d27p15",
                    text: "Two long parallel wires 20 cm apart carry currents of 2 A and 6 A in the same direction. The magnetic field is zero at a point lying between them, at a distance from the 2 A wire of:",
                    options: [
                        { key: "a", text: "5 cm" },
                        { key: "b", text: "10 cm" },
                        { key: "c", text: "15 cm" },
                        { key: "d", text: "6.7 cm" }
                    ],
                    answer: "a",
                    explanation: "Between two wires whose currents are parallel the two fields are oppositely directed, so a null point exists there. Setting the magnitudes equal, $\\dfrac{\\mu_0(2)}{2\\pi x}=\\dfrac{\\mu_0(6)}{2\\pi(0.2-x)}$, i.e. $2(0.2-x)=6x$, giving $0.4=8x$ and $x=0.05\\ \\mathrm{m}=\\mathbf{5\\ cm}$ from the 2 A wire. The null point always lies nearer the <em>smaller</em> current."
                },
                {
                    id: "d27p16",
                    text: "A very long straight wire carrying current $I$ ends abruptly at a point O (the current being fed in through a fine perpendicular lead). The flux density at a point P at perpendicular distance $a$ from the wire, on the line through O at right angles to the wire, is:",
                    options: [
                        { key: "a", text: "$\\dfrac{\\mu_0 I}{2\\pi a}$" },
                        { key: "b", text: "$\\dfrac{\\mu_0 I}{4\\pi a}$" },
                        { key: "c", text: "$\\dfrac{\\mu_0 I}{\\pi a}$" },
                        { key: "d", text: "Zero" }
                    ],
                    answer: "b",
                    explanation: "For a straight conductor $B=\\dfrac{\\mu_0I}{4\\pi a}(\\sin\\theta_1+\\sin\\theta_2)$, where the angles are measured from the perpendicular to the two ends. For a fully infinite wire both angles are $90^{\\circ}$ and $B=\\dfrac{\\mu_0I}{2\\pi a}$. Here the wire extends to infinity on one side only, so one angle is $90^{\\circ}$ and the other is $0^{\\circ}$: $B=\\dfrac{\\mu_0I}{4\\pi a}(1+0)=\\dfrac{\\mu_0I}{4\\pi a}$ — exactly <strong>half</strong> the infinite-wire value."
                },
                {
                    id: "d27p17",
                    text: "A current is passed along the walls of a long hollow metal pipe, parallel to its axis and uniformly distributed around the circumference. The magnetic field at a point inside the hollow space is:",
                    options: [
                        { key: "a", text: "Inversely proportional to the distance from the axis" },
                        { key: "b", text: "The same as that just outside the pipe wall" },
                        { key: "c", text: "Uniform and directed along the axis of the pipe" },
                        { key: "d", text: "Zero, because the Amperian loop drawn there encloses no current" }
                    ],
                    answer: "d",
                    explanation: "Take a circular Amperian loop of radius $r$ smaller than the inner radius of the pipe, coaxial with it. All the current flows in the wall, <em>outside</em> this loop, so $I_{enc}=0$ and $\\oint\\vec{B}\\cdot d\\vec{l}=\\mu_0(0)=0$. By symmetry $B$ is the same all round the loop, so $B=0$ everywhere in the cavity. Outside the pipe the field is the same as if the whole current were concentrated on the axis, falling off as $1/r$."
                },
                {
                    id: "d27p18",
                    text: "A circular coil of 100 turns and radius 3 cm carries a current of 2 A. The magnetic flux density at a point on its axis 4 cm from the centre is nearly:",
                    options: [
                        { key: "a", text: "$4.2\\times10^{-3}$ T" },
                        { key: "b", text: "$3.6\\times10^{-5}$ T" },
                        { key: "c", text: "$2.1\\times10^{-3}$ T" },
                        { key: "d", text: "$9.0\\times10^{-4}$ T" }
                    ],
                    answer: "d",
                    explanation: "On the axis, $B=\\dfrac{\\mu_0NIa^{2}}{2(a^{2}+x^{2})^{3/2}}$. Here $a^{2}+x^{2}=(0.03)^{2}+(0.04)^{2}=25\\times10^{-4}$, so $(a^{2}+x^{2})^{3/2}=(0.05)^{3}=1.25\\times10^{-4}$. Then $B=\\dfrac{(4\\pi\\times10^{-7})(100)(2)(9\\times10^{-4})}{2(1.25\\times10^{-4})}=\\dfrac{2.26\\times10^{-7}}{2.5\\times10^{-4}}\\approx9.0\\times10^{-4}\\ \\mathrm{T}$. (At the centre it would have been $4.2\\times10^{-3}$ T — option (a) is the trap for anyone who forgets the axial factor.)"
                },
                {
                    id: "d27p19",
                    text: "The magnetic field at the centre of a circular coil of one turn is $B$. If the current through it is doubled and the radius is halved, the field at the centre becomes:",
                    options: [
                        { key: "a", text: "$B$" },
                        { key: "b", text: "$2B$" },
                        { key: "c", text: "$B/4$" },
                        { key: "d", text: "$4B$" }
                    ],
                    answer: "d",
                    explanation: "At the centre $B=\\dfrac{\\mu_0 I}{2r}$, so $B\\propto\\dfrac{I}{r}$. Doubling $I$ doubles the field and halving $r$ doubles it again, giving $B'=\\dfrac{\\mu_0(2I)}{2(r/2)}=4\\times\\dfrac{\\mu_0I}{2r}=\\mathbf{4B}$. Note that this is <em>not</em> the same as re-bending a wire of fixed length, where shrinking the radius also increases the number of turns."
                },
                {
                    id: "d27p20",
                    text: "A long air-cored solenoid has 500 turns per metre and carries a current of 4 A. The flux density on the axis at one <em>end</em> of the solenoid is about:",
                    options: [
                        { key: "a", text: "$1.26\\times10^{-3}$ T" },
                        { key: "b", text: "$2.51\\times10^{-3}$ T" },
                        { key: "c", text: "$5.02\\times10^{-3}$ T" },
                        { key: "d", text: "$6.28\\times10^{-4}$ T" }
                    ],
                    answer: "a",
                    explanation: "Deep inside the solenoid $B=\\mu_0nI=(4\\pi\\times10^{-7})(500)(4)=2.51\\times10^{-3}\\ \\mathrm{T}$. At either <strong>end</strong> only half the winding contributes on each side, and the standard result is that the axial field falls to exactly one half of the interior value: $B_{end}=\\tfrac12\\mu_0nI\\approx1.26\\times10^{-3}\\ \\mathrm{T}$."
                },
                {
                    id: "d27p21",
                    text: "A toroid of mean radius 10 cm is closely wound with 500 turns and carries a current of 2 A. The flux density inside its core is:",
                    options: [
                        { key: "a", text: "$4\\times10^{-3}$ T" },
                        { key: "b", text: "$2\\times10^{-3}$ T" },
                        { key: "c", text: "$1\\times10^{-3}$ T" },
                        { key: "d", text: "Zero" }
                    ],
                    answer: "b",
                    explanation: "Applying Ampere's law to a circular path of radius $r$ along the core, $B(2\\pi r)=\\mu_0NI$, so $B=\\dfrac{\\mu_0NI}{2\\pi r}=\\dfrac{(4\\pi\\times10^{-7})(500)(2)}{2\\pi(0.1)}=\\dfrac{(2\\times10^{-7})(1000)}{0.1}=2\\times10^{-3}\\ \\mathrm{T}$. The field is confined entirely to the core: both inside the central hole and outside the toroid it is zero."
                },
                {
                    id: "d27p22",
                    text: "Three long parallel wires P, Q and R lie in one plane, 10 cm apart in that order, and carry 10 A, 20 A and 30 A respectively, all in the same direction. The force per unit length on the middle wire Q is:",
                    options: [
                        { key: "a", text: "$1.6\\times10^{-3}\\ \\mathrm{N\\,m^{-1}}$ towards P" },
                        { key: "b", text: "$4\\times10^{-4}\\ \\mathrm{N\\,m^{-1}}$ towards P" },
                        { key: "c", text: "$8\\times10^{-4}\\ \\mathrm{N\\,m^{-1}}$ towards R" },
                        { key: "d", text: "Zero, the two forces cancelling" }
                    ],
                    answer: "c",
                    explanation: "Parallel currents attract, so Q is pulled both ways. From P: $\\dfrac{F}{l}=\\dfrac{\\mu_0I_PI_Q}{2\\pi d}=\\dfrac{(2\\times10^{-7})(10)(20)}{0.1}=4\\times10^{-4}\\ \\mathrm{N\\,m^{-1}}$ towards P. From R: $\\dfrac{(2\\times10^{-7})(30)(20)}{0.1}=1.2\\times10^{-3}\\ \\mathrm{N\\,m^{-1}}$ towards R. The resultant is $1.2\\times10^{-3}-4\\times10^{-4}=\\mathbf{8\\times10^{-4}\\ N\\,m^{-1}}$ directed <strong>towards R</strong>, the wire carrying the larger current."
                },
                {
                    id: "d27p23",
                    text: "A rectangular loop carrying a current lies in the same plane as a long straight current-carrying wire, the nearer arm of the loop being parallel to the wire and carrying current in the same direction. The loop experiences:",
                    options: [
                        { key: "a", text: "A net attraction towards the wire" },
                        { key: "b", text: "A net repulsion away from the wire" },
                        { key: "c", text: "No net force, but a torque about its own axis" },
                        { key: "d", text: "Neither a net force nor a torque of any kind" }
                    ],
                    answer: "a",
                    explanation: "The field of the straight wire is <strong>non-uniform</strong>, falling off as $1/r$. The near arm, carrying current parallel to the wire, is attracted; the far arm, whose current is antiparallel, is repelled — but it sits in a weaker field, so its repulsion is smaller. The forces on the two arms perpendicular to the wire are equal and opposite and cancel. The result is a <strong>net attraction</strong>. (In a <em>uniform</em> field the net force on any closed loop would be exactly zero.)"
                },
                {
                    id: "d27p24",
                    text: "A deuteron (mass $2u$, charge $+e$) and an alpha particle (mass $4u$, charge $+2e$) move with the same speed at right angles to the same uniform magnetic field. The ratio of the radii of their circular paths, $r_d : r_\\alpha$, is:",
                    options: [
                        { key: "a", text: "$1:\\sqrt2$" },
                        { key: "b", text: "$1:2$" },
                        { key: "c", text: "$2:1$" },
                        { key: "d", text: "$1:1$" }
                    ],
                    answer: "d",
                    explanation: "The radius is $r=\\dfrac{mv}{qB}$, so at equal speed and field $r\\propto\\dfrac{m}{q}$. For the deuteron $\\dfrac{2u}{e}$ and for the alpha particle $\\dfrac{4u}{2e}=\\dfrac{2u}{e}$ — the two ratios are identical, so the <strong>radii are equal</strong>. The same coincidence makes the two particles circulate with the same period in a cyclotron."
                },
                {
                    id: "d27p25",
                    text: "A proton moves with velocity $2\\times10^{6}\\ \\mathrm{m\\,s^{-1}}$ along the $+x$ direction in a uniform field of $0.5$ T directed along $+y$. Taking $e=1.6\\times10^{-19}$ C, the force on it is:",
                    options: [
                        { key: "a", text: "$1.6\\times10^{-13}$ N along $+z$" },
                        { key: "b", text: "$1.6\\times10^{-13}$ N along $-z$" },
                        { key: "c", text: "$1.6\\times10^{-13}$ N along $-y$" },
                        { key: "d", text: "Zero, since the velocity has no component along $z$" }
                    ],
                    answer: "a",
                    explanation: "$\\vec{F}=q(\\vec{v}\\times\\vec{B})$. With $\\vec{v}=v\\hat{i}$ and $\\vec{B}=B\\hat{j}$, $\\hat{i}\\times\\hat{j}=\\hat{k}$, so the force on a <em>positive</em> charge is along $+z$. Its magnitude is $qvB=(1.6\\times10^{-19})(2\\times10^{6})(0.5)=1.6\\times10^{-13}\\ \\mathrm{N}$. An electron in the same situation would be pushed along $-z$."
                },
                {
                    id: "d27p26",
                    text: "A charged particle passes undeviated through a region of mutually perpendicular electric and magnetic fields. If the magnetic field alone is now switched off, the particle inside the region will follow:",
                    options: [
                        { key: "a", text: "A straight line at unchanged speed" },
                        { key: "b", text: "A circular arc of constant radius" },
                        { key: "c", text: "A parabolic path, like a projectile" },
                        { key: "d", text: "A helix of steadily increasing pitch" }
                    ],
                    answer: "c",
                    explanation: "Only the electric force $q\\vec{E}$ now acts, and it is <strong>constant in magnitude and direction and perpendicular to the initial velocity</strong>. That is exactly the projectile situation: uniform velocity along the original direction combined with uniform acceleration at right angles to it, giving a <strong>parabola</strong>. Had the electric field been switched off instead, the remaining magnetic force would have bent the path into a circle."
                },
                {
                    id: "d27p27",
                    text: "A proton enters a region of uniform magnetic field through a hole in a plane boundary, travelling at right angles to the field, and leaves the region through the same boundary after a semicircular path. The time it spends inside the field:",
                    options: [
                        { key: "a", text: "Is proportional to its speed of entry" },
                        { key: "b", text: "Is inversely proportional to its speed of entry" },
                        { key: "c", text: "Is $\\dfrac{2\\pi m}{qB}$, whatever the speed" },
                        { key: "d", text: "Is $\\dfrac{\\pi m}{qB}$, whatever the speed" }
                    ],
                    answer: "d",
                    explanation: "The period of revolution $T=\\dfrac{2\\pi m}{qB}$ contains no $v$: a faster particle simply travels a proportionately larger circle in the same time. A semicircle takes half a period, so $t=\\dfrac{T}{2}=\\dfrac{\\pi m}{qB}$, <strong>independent of the entry speed</strong>. This speed-independence of the period is exactly the property that makes the fixed-frequency cyclotron possible."
                },
                {
                    id: "d27p28",
                    text: "A coil of 50 turns and area $0.02\\ \\mathrm{m^{2}}$ carries a current of 2 A in a uniform field of 0.5 T. The <em>plane</em> of the coil makes an angle of $30^{\\circ}$ with the direction of the field. The torque on the coil is:",
                    options: [
                        { key: "a", text: "0.5 N m" },
                        { key: "b", text: "1.0 N m" },
                        { key: "c", text: "0.87 N m" },
                        { key: "d", text: "Zero" }
                    ],
                    answer: "c",
                    explanation: "The torque is $\\tau=NIAB\\sin\\theta$ where $\\theta$ is measured between the <strong>normal to the coil</strong> and $\\vec{B}$. If the plane makes $30^{\\circ}$ with the field, the normal makes $90^{\\circ}-30^{\\circ}=60^{\\circ}$ with it. So $\\tau=(50)(2)(0.02)(0.5)\\sin60^{\\circ}=1.0\\times0.866=\\mathbf{0.87\\ N\\,m}$. Using the $30^{\\circ}$ directly would have given the wrong answer 0.5 N m — the commonest slip in this topic."
                },
                {
                    id: "d27p29",
                    text: "A coil of 100 turns and area $0.01\\ \\mathrm{m^{2}}$ carries a current of 1 A in a uniform field of 0.2 T. The work needed to turn it from the position of stable equilibrium through $90^{\\circ}$ is:",
                    options: [
                        { key: "a", text: "0.2 J" },
                        { key: "b", text: "0.4 J" },
                        { key: "c", text: "0.1 J" },
                        { key: "d", text: "Zero" }
                    ],
                    answer: "a",
                    explanation: "The magnetic moment is $M=NIA=(100)(1)(0.01)=1\\ \\mathrm{A\\,m^{2}}$ and the potential energy of a dipole is $U=-MB\\cos\\theta$. Starting from stable equilibrium ($\\theta=0$, $U=-MB$) and turning to $\\theta=90^{\\circ}$ ($U=0$), the work done is $W=MB(\\cos0-\\cos90^{\\circ})=MB=(1)(0.2)=\\mathbf{0.2\\ J}$. Turning it right round to $180^{\\circ}$ would have needed $2MB$."
                },
                {
                    id: "d27p30",
                    text: "In a moving-coil galvanometer the number of turns on the coil is increased, everything else being unaltered. Then:",
                    options: [
                        { key: "a", text: "Both the current sensitivity and the voltage sensitivity are certain to rise" },
                        { key: "b", text: "The current sensitivity rises but the voltage sensitivity need not" },
                        { key: "c", text: "The voltage sensitivity rises but the current sensitivity falls" },
                        { key: "d", text: "Neither sensitivity is affected, since both depend only on the field" }
                    ],
                    answer: "b",
                    explanation: "Current sensitivity is $\\dfrac{\\theta}{I}=\\dfrac{NAB}{k}$, which is directly proportional to $N$ and so certainly increases. Voltage sensitivity is $\\dfrac{\\theta}{V}=\\dfrac{NAB}{kR_g}$; but adding turns also lengthens the wire and raises the coil resistance $R_g$ roughly in proportion to $N$, so the ratio $N/R_g$ — and with it the voltage sensitivity — may hardly change at all. <strong>A more sensitive current detector is therefore not automatically a more sensitive voltage detector.</strong>"
                },
                {
                    id: "d27p31",
                    text: "In a Hall-effect experiment the carriers drift at $5\\times10^{-4}\\ \\mathrm{m\\,s^{-1}}$ across a strip 2 cm wide placed in a perpendicular field of 0.4 T. The Hall voltage between the edges of the strip is:",
                    options: [
                        { key: "a", text: "$2\\ \\mu\\mathrm{V}$" },
                        { key: "b", text: "$4\\ \\mathrm{mV}$" },
                        { key: "c", text: "$1\\ \\mathrm{mV}$" },
                        { key: "d", text: "$4\\ \\mu\\mathrm{V}$" }
                    ],
                    answer: "d",
                    explanation: "Charge piles up on the edges until the transverse electric force balances the magnetic force: $qE_H=qv_dB$, so $E_H=v_dB=(5\\times10^{-4})(0.4)=2\\times10^{-4}\\ \\mathrm{V\\,m^{-1}}$. Multiplying by the width across which this field acts, $V_H=E_H w=(2\\times10^{-4})(0.02)=4\\times10^{-6}\\ \\mathrm{V}=\\mathbf{4\\ \\mu V}$. Hall voltages are tiny precisely because drift velocities are so small."
                },
                {
                    id: "d27p32",
                    text: "An electron moves with speed $v$ in a circular orbit of radius $r$. The magnetic dipole moment of the equivalent current loop is:",
                    options: [
                        { key: "a", text: "$evr$" },
                        { key: "b", text: "$\\dfrac{evr}{2}$" },
                        { key: "c", text: "$\\dfrac{ev}{2\\pi r}$" },
                        { key: "d", text: "$\\dfrac{2\\pi r}{ev}$" }
                    ],
                    answer: "b",
                    explanation: "The electron completes one circuit in $T=\\dfrac{2\\pi r}{v}$, so it is equivalent to a current $I=\\dfrac{e}{T}=\\dfrac{ev}{2\\pi r}$ round a loop of area $A=\\pi r^{2}$. Hence $M=IA=\\dfrac{ev}{2\\pi r}\\times\\pi r^{2}=\\dfrac{evr}{2}$. Writing it as $M=\\dfrac{e}{2m}(mvr)=\\dfrac{e}{2m}L$ shows that the orbital magnetic moment is proportional to the orbital angular momentum — the starting point of atomic magnetism."
                }
            ]
        },
        {
            id: "emi27",
            name: "Electromagnetic Induction",
            subject: "Physics",
            accent: "emerald",
            blurb: "Q33–50 · Faraday's and Lenz's laws, motional emf, A.C. generator, transformer, eddy currents, self and mutual inductance and the energy stored in an inductor.",
            questions: [
                {
                    id: "d27p33",
                    text: "A light aluminium ring rests loosely round the vertical iron core of a coil. The moment the coil is connected to a battery, the ring flies upwards off the core. The explanation is that the induced current in the ring:",
                    options: [
                        { key: "a", text: "Flows the same way as the coil current, so the two attract each other" },
                        { key: "b", text: "Flows opposite to the coil current, so the two repel each other" },
                        { key: "c", text: "Heats the ring, so that hot air lifts it off the core" },
                        { key: "d", text: "Makes the ring diamagnetic, so gravity no longer acts on it" }
                    ],
                    answer: "b",
                    explanation: "The growing flux through the ring induces a current which, by <strong>Lenz's law</strong>, must oppose that increase — so it circulates in the sense opposite to the coil current. Antiparallel currents repel, and the ring is thrown clear. The whole effect is a mechanical statement of energy conservation: the battery has to do extra work to launch the ring. On <em>breaking</em> the circuit the induced current reverses and the ring is momentarily pulled towards the coil."
                },
                {
                    id: "d27p34",
                    text: "A flexible circular loop of wire lies in a uniform magnetic field directed out of the plane of the paper. The loop is suddenly pulled at two opposite points so that it becomes a narrow ellipse. During the deformation the induced current in the loop flows:",
                    options: [
                        { key: "a", text: "Anticlockwise, to oppose the decreasing outward flux" },
                        { key: "b", text: "Clockwise, to oppose the increasing outward flux" },
                        { key: "c", text: "Anticlockwise, to oppose the increasing inward flux" },
                        { key: "d", text: "Not at all, because the magnetic field itself never changes" }
                    ],
                    answer: "a",
                    explanation: "For a fixed perimeter a circle encloses the greatest area, so squashing the loop into an ellipse <strong>reduces the area and hence the outward flux</strong>. Lenz's law says the induced current must try to maintain that flux, so it flows in the sense that produces flux out of the page inside the loop — <strong>anticlockwise</strong> as seen by the reader. Note that an emf appears even though the field is perfectly steady: it is the flux, not the field, that must change."
                },
                {
                    id: "d27p35",
                    text: "A straight conducting rod is rotated in a horizontal plane about a vertical axis through its <em>mid-point</em>, in a uniform vertical magnetic field. The emf measured between the two ends of the rod is:",
                    options: [
                        { key: "a", text: "$B\\omega l^{2}$, twice that of a rod rotated about one end" },
                        { key: "b", text: "$\\tfrac12 B\\omega l^{2}$, the same as for a rod rotated about one end" },
                        { key: "c", text: "$\\tfrac18 B\\omega l^{2}$, one quarter of that value" },
                        { key: "d", text: "Zero, though each half of the rod does develop an emf" }
                    ],
                    answer: "d",
                    explanation: "Each half of length $l/2$ develops an emf $\\tfrac12B\\omega(l/2)^{2}$ between the centre and its own tip. But both halves sweep the field the same way, so in <strong>both</strong> halves the centre is at the same polarity relative to the outer end. Going from one tip through the centre to the other tip, the two equal emfs are traversed in opposition and cancel, leaving <strong>zero</strong> between the ends. A potential difference does exist between the centre and either end."
                },
                {
                    id: "d27p36",
                    text: "A coil of 100 turns and area $4\\times10^{-3}\\ \\mathrm{m^{2}}$ lies with its plane perpendicular to a field of 0.5 T. Its total circuit resistance is $20\\ \\Omega$. The charge that circulates when the coil is turned through $180^{\\circ}$ is:",
                    options: [
                        { key: "a", text: "0.01 C" },
                        { key: "b", text: "0.02 C" },
                        { key: "c", text: "0.04 C" },
                        { key: "d", text: "0.20 C" }
                    ],
                    answer: "b",
                    explanation: "The induced charge is $q=\\dfrac{N\\,\\Delta\\phi}{R}$ and depends only on the <em>total</em> flux change, not on how quickly the turn is made. Reversing the coil changes the flux per turn from $+BA$ to $-BA$, so $\\Delta\\phi=2BA=2(0.5)(4\\times10^{-3})=4\\times10^{-3}\\ \\mathrm{Wb}$. Hence $q=\\dfrac{100\\times4\\times10^{-3}}{20}=\\mathbf{0.02\\ C}$. This is the principle of the ballistic galvanometer method of measuring flux."
                },
                {
                    id: "d27p37",
                    text: "A coil of 200 turns and area $5\\times10^{-3}\\ \\mathrm{m^{2}}$ lies at rest with its plane perpendicular to a magnetic field that varies as $B=0.2\\sin(100t)$ tesla. The peak emf induced in the coil is:",
                    options: [
                        { key: "a", text: "2 V" },
                        { key: "b", text: "200 V" },
                        { key: "c", text: "0.2 V" },
                        { key: "d", text: "20 V" }
                    ],
                    answer: "d",
                    explanation: "The flux linkage is $N\\phi=NAB_0\\sin\\omega t$, so $\\varepsilon=-\\dfrac{d(N\\phi)}{dt}=-NAB_0\\omega\\cos\\omega t$ and the peak value is $\\varepsilon_0=NAB_0\\omega=(200)(5\\times10^{-3})(0.2)(100)=\\mathbf{20\\ V}$. Notice that the coil never moves — a time-varying field alone is enough, and the emf grows in direct proportion to the frequency."
                },
                {
                    id: "d27p38",
                    text: "A current of 4 A in a coil of 500 turns sets up a flux of $2\\times10^{-4}$ Wb through each turn. The self-inductance of the coil is:",
                    options: [
                        { key: "a", text: "0.025 H" },
                        { key: "b", text: "0.05 H" },
                        { key: "c", text: "2.5 H" },
                        { key: "d", text: "0.4 H" }
                    ],
                    answer: "a",
                    explanation: "Self-inductance is defined through the flux linkage, $L=\\dfrac{N\\phi}{I}$. Substituting, $L=\\dfrac{(500)(2\\times10^{-4})}{4}=\\dfrac{0.1}{4}=\\mathbf{0.025\\ H}$. Equivalently, $L$ is the flux linkage per unit current, which is why the henry can be described either as a weber per ampere or as a volt-second per ampere."
                },
                {
                    id: "d27p39",
                    text: "The resistance wire of a standard resistance box is doubled back on itself before being wound on the former. The purpose of this is to make the coil have:",
                    options: [
                        { key: "a", text: "A larger resistance for the same length of wire" },
                        { key: "b", text: "A practically zero self-inductance" },
                        { key: "c", text: "A larger mutual inductance with the neighbouring coils" },
                        { key: "d", text: "A smaller temperature coefficient of resistance" }
                    ],
                    answer: "b",
                    explanation: "In a doubled-back (bifilar) winding the current runs one way along the wire and back the other way immediately alongside, so the two halves produce equal and opposite fluxes that cancel. The net flux linkage is nearly zero, and so is $L=\\dfrac{N\\phi}{I}$ — the coil is <strong>non-inductive</strong>. This matters because a resistance with appreciable inductance would not behave as a pure resistance in an a.c. bridge or during switching."
                },
                {
                    id: "d27p40",
                    text: "A short secondary coil of $N_2$ turns is wound tightly over the middle of a long solenoid of length $l$, cross-sectional area $A$ and $N_1$ turns. Their mutual inductance is:",
                    options: [
                        { key: "a", text: "$\\dfrac{\\mu_0 A l}{N_1 N_2}$" },
                        { key: "b", text: "$\\dfrac{\\mu_0 N_1 N_2 l}{A}$" },
                        { key: "c", text: "$\\dfrac{\\mu_0 N_1^{2} N_2 A}{l}$" },
                        { key: "d", text: "$\\dfrac{\\mu_0 N_1 N_2 A}{l}$" }
                    ],
                    answer: "d",
                    explanation: "A current $I$ in the long solenoid gives an interior field $B=\\mu_0\\dfrac{N_1}{l}I$, and the whole of this flux threads the close-wound secondary. The flux linkage of the secondary is $N_2BA=\\dfrac{\\mu_0N_1N_2A}{l}I$, so $M=\\dfrac{\\mu_0N_1N_2A}{l}$. The symmetry of this expression in $N_1$ and $N_2$ illustrates the reciprocity theorem $M_{12}=M_{21}$, and inserting an iron core multiplies it by $\\mu_r$."
                },
                {
                    id: "d27p41",
                    text: "The current in a 4 H inductor is raised steadily from 2 A to 4 A. The additional energy that has to be supplied to its magnetic field is:",
                    options: [
                        { key: "a", text: "8 J" },
                        { key: "b", text: "16 J" },
                        { key: "c", text: "24 J" },
                        { key: "d", text: "32 J" }
                    ],
                    answer: "c",
                    explanation: "The stored energy is $U=\\tfrac12LI^{2}$, so the extra energy is $\\Delta U=\\tfrac12L\\left(I_2^{2}-I_1^{2}\\right)=\\tfrac12(4)(16-4)=\\mathbf{24\\ J}$. The tempting wrong answer, $\\tfrac12L(I_2-I_1)^{2}=8$ J, ignores the fact that the energy goes as the <em>square</em> of the current, so the second ampere-pair costs far more than the first."
                },
                {
                    id: "d27p42",
                    text: "A bright spark jumps across the contacts when the switch of a circuit containing a large inductance is opened, although no such spark appears when it is closed. The reason is that on opening:",
                    options: [
                        { key: "a", text: "The current is interrupted extremely rapidly, so a very large back emf appears" },
                        { key: "b", text: "The resistance of the circuit suddenly falls to a very small value" },
                        { key: "c", text: "The inductor briefly acts as a source of extra electric charge" },
                        { key: "d", text: "The magnetic energy of the coil is converted directly into charge" }
                    ],
                    answer: "a",
                    explanation: "The self-induced emf is $\\varepsilon=-L\\dfrac{dI}{dt}$. Breaking the circuit drives the current to zero in a very short time, so $\\left|\\dfrac{dI}{dt}\\right|$ is enormous and the induced emf can reach hundreds or thousands of volts — enough to ionise the air gap. This emf keeps the current going for an instant, which is Lenz's law again, and it is how the ignition coil of a petrol engine generates its sparking voltage."
                },
                {
                    id: "d27p43",
                    text: "A coil of inductance 0.5 H carrying a steady current of 4 A is suddenly short-circuited through a resistor, the source being removed at the same instant. The total heat developed in the resistor is:",
                    options: [
                        { key: "a", text: "1 J" },
                        { key: "b", text: "2 J" },
                        { key: "c", text: "4 J" },
                        { key: "d", text: "8 J" }
                    ],
                    answer: "c",
                    explanation: "All the energy stored in the magnetic field is dissipated as heat as the current decays to zero: $W=\\tfrac12LI^{2}=\\tfrac12(0.5)(4)^{2}=\\mathbf{4\\ J}$. The answer does not depend on the size of the resistor — that only fixes the time constant $L/R$, and hence how quickly the 4 J is delivered, not how much there is."
                },
                {
                    id: "d27p44",
                    text: "The armature of a simple a.c. generator makes 600 revolutions per minute. The frequency of the alternating emf produced is:",
                    options: [
                        { key: "a", text: "5 Hz" },
                        { key: "b", text: "10 Hz" },
                        { key: "c", text: "50 Hz" },
                        { key: "d", text: "600 Hz" }
                    ],
                    answer: "b",
                    explanation: "In a two-pole machine the coil generates exactly one complete cycle per revolution, so the frequency in hertz equals the number of revolutions per second: $f=\\dfrac{600}{60}=\\mathbf{10\\ Hz}$. The corresponding angular frequency is $\\omega=2\\pi f\\approx62.8\\ \\mathrm{rad\\,s^{-1}}$, and this is the $\\omega$ that appears in $\\varepsilon=\\varepsilon_0\\sin\\omega t$."
                },
                {
                    id: "d27p45",
                    text: "When the external circuit of an a.c. generator is closed through a low-resistance load, the engine driving the armature has to work noticeably harder. This is because:",
                    options: [
                        { key: "a", text: "The induced current sets up a couple that opposes the rotation of the coil" },
                        { key: "b", text: "The resistance of the armature winding rises as soon as current flows" },
                        { key: "c", text: "The field of the permanent magnets grows stronger under load" },
                        { key: "d", text: "The frequency of the generated emf increases when a load is connected" }
                    ],
                    answer: "a",
                    explanation: "Once current flows, the coil is a current-carrying loop sitting in the field, so it experiences a torque — and by <strong>Lenz's law</strong> that torque opposes the rotation producing it. The driving engine must work against this couple, and the extra mechanical work it does is exactly the electrical energy delivered to the load. This is conservation of energy in action: an unloaded generator spins almost freely, while a heavily loaded one is hard to turn. The field strength, the winding resistance and the frequency (fixed by the speed) are all unchanged by the load."
                },
                {
                    id: "d27p46",
                    text: "In a step-up transformer, compared with the primary winding, the secondary winding has:",
                    options: [
                        { key: "a", text: "More turns of thicker wire, since it carries the larger current" },
                        { key: "b", text: "Fewer turns of thicker wire, since it carries the larger current" },
                        { key: "c", text: "More turns of thinner wire, since it carries the smaller current" },
                        { key: "d", text: "The same number of turns, but of thinner wire" }
                    ],
                    answer: "c",
                    explanation: "Stepping the voltage up requires $N_s>N_p$. Since an ideal transformer conserves power, $V_pI_p=V_sI_s$, so the high-voltage secondary must carry the <strong>smaller current</strong> and can therefore be wound with <strong>thinner</strong> wire. The low-voltage primary carries the heavy current and needs thick wire to keep the copper loss $I^{2}R$ down. In a step-down transformer everything is the other way round."
                },
                {
                    id: "d27p47",
                    text: "Some of the flux set up by the primary of a transformer fails to pass through the secondary. This flux leakage is minimised in practice by:",
                    options: [
                        { key: "a", text: "Using a core built from thin insulated laminations" },
                        { key: "b", text: "Using thick copper wire of very low resistance for both windings" },
                        { key: "c", text: "Winding the two coils one over the other on the same limb of the core" },
                        { key: "d", text: "Choosing a core material whose hysteresis loop has a small area" }
                    ],
                    answer: "c",
                    explanation: "Leakage is a <em>geometrical</em> problem, so the cure is geometrical: the primary and secondary are wound <strong>concentrically over one another on the same limb</strong> of a closed soft-iron core, so that virtually every line of flux links both. The other three measures are genuine transformer refinements, but they cure different losses — laminations reduce eddy currents, thick wire reduces copper loss and a narrow loop reduces hysteresis loss."
                },
                {
                    id: "d27p48",
                    text: "An induction cooker heats a steel pan placed on it but has no effect on an aluminium or a glass vessel of the same shape. The reason the steel pan heats up is that:",
                    options: [
                        { key: "a", text: "The pan completes an electrical circuit through the mains supply" },
                        { key: "b", text: "The alternating field pushes hot air upward against the base of the pan" },
                        { key: "c", text: "Steel conducts heat from the glass cooking surface far better than aluminium" },
                        { key: "d", text: "Eddy currents induced in the ferromagnetic base dissipate energy as heat" }
                    ],
                    answer: "d",
                    explanation: "A coil beneath the ceramic top carries a high-frequency alternating current, whose changing flux induces circulating <strong>eddy currents</strong> in the base of the pan; these dissipate energy as $I^{2}R$ heating right where the food is. The effect is far stronger in a ferromagnetic base, which concentrates the flux and adds hysteresis loss, so non-magnetic aluminium responds only feebly and an insulating glass vessel not at all."
                },
                {
                    id: "d27p49",
                    text: "The coil of a moving-coil galvanometer is wound on a light metallic frame. When the current is switched off, the pointer comes to rest almost at once instead of oscillating. This dead-beat behaviour is due to:",
                    options: [
                        { key: "a", text: "The very large moment of inertia of the metal frame" },
                        { key: "b", text: "Air resistance acting on the broad surface of the frame" },
                        { key: "c", text: "Eddy currents induced in the frame, which oppose its motion" },
                        { key: "d", text: "The restoring couple of the suspension being unusually weak" }
                    ],
                    answer: "c",
                    explanation: "As the frame swings in the strong radial field the flux through it changes, so <strong>eddy currents</strong> are induced in it. By Lenz's law they oppose the very motion that produces them, converting the kinetic energy of the swing into heat and damping the oscillation within about one swing. This is electromagnetic damping, the same principle used to brake the aluminium disc of an energy meter."
                },
                {
                    id: "d27p50",
                    text: "Two identical rings, one of copper and one of dry wood, are dropped through the same region of changing magnetic flux. Which statement is correct?",
                    options: [
                        { key: "a", text: "An emf is induced in the copper ring only, since wood has no free electrons" },
                        { key: "b", text: "An emf is induced in both rings, but an induced current flows only in the copper one" },
                        { key: "c", text: "An induced current flows in both rings, but only the copper one is retarded" },
                        { key: "d", text: "Neither an emf nor a current appears in either ring while it is falling" }
                    ],
                    answer: "b",
                    explanation: "Faraday's law makes the induced emf equal to the rate of change of flux linkage — a purely geometrical and magnetic statement that says nothing about the material, so <strong>both rings have the same emf around them</strong>. Whether a current results depends on the resistance of the path: copper is a good conductor and carries a large induced current (and is therefore retarded by the resulting force), whereas the insulating wooden ring carries essentially none and falls freely."
                }
            ]
        }
    ]
};

const DAY27_SYLLABUS = [
    { subject: "Physics", accent: "blue", topics: [
        { topic: "Magnetic Properties of Materials", subs: [
            { name: "Dia-, Para- and Ferromagnetism", ids: ["d27p1", "d27p2", "d27p3", "d27p12"] },
            { name: "Susceptibility, Permeability and Magnetisation", ids: ["d27p8", "d27p9", "d27p10", "d27p11"] },
            { name: "Domains, Hysteresis and Choice of Material", ids: ["d27p4", "d27p5", "d27p6", "d27p7"] }
        ] },
        { topic: "Magnetic Field", subs: [
            { name: "B-field of a Straight Conductor", ids: ["d27p13", "d27p15", "d27p16", "d27p17"] },
            { name: "B-field of a Circular Coil", ids: ["d27p14", "d27p18", "d27p19", "d27p32"] },
            { name: "B-field of a Solenoid and Toroid", ids: ["d27p20", "d27p21"] },
            { name: "Effect of a Uniform B-field on a Moving Charge", ids: ["d27p24", "d27p25", "d27p26", "d27p27"] },
            { name: "Force and Torque on a Conductor and Coil", ids: ["d27p22", "d27p23", "d27p28", "d27p29", "d27p30"] },
            { name: "Hall Effect", ids: ["d27p31"] }
        ] },
        { topic: "Electromagnetic Induction", subs: [
            { name: "Faraday's and Lenz's Laws, Motional emf", ids: ["d27p33", "d27p34", "d27p35", "d27p36", "d27p37"] },
            { name: "Self and Mutual Inductance, Energy in an Inductor", ids: ["d27p38", "d27p39", "d27p40", "d27p41", "d27p42", "d27p43"] },
            { name: "A.C. Generator and Transformer", ids: ["d27p44", "d27p45", "d27p46", "d27p47"] },
            { name: "Eddy Currents", ids: ["d27p48", "d27p49", "d27p50"] }
        ] }
    ] }
];
DAY27.syllabus = DAY27_SYLLABUS;