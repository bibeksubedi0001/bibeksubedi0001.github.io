/* ============================================================
   DAY 20 — IOM GRAND CEE PHYSICAL MOCK TEST
   Morning Shift · Set "A" · 200 questions · 3 hours

   Section split (exactly as in the printed paper):
     Q1–Q50    Physics    (d20p1  … d20p50)
     Q51–Q90   Zoology    (d20z51 … d20z90)
     Q91–Q130  Botany     (d20b91 … d20b130)
     Q131–Q180 Chemistry  (d20c131… d20c180)
     Q181–Q200 MAT        (d20m181… d20m200)

   Every question carries a worked explanation. Figures that the
   printed paper shows as diagrams are re-drawn here as inline
   SVG so they render on any screen.

   A handful of printed items were internally inconsistent (no
   option could ever be correct). Those are flagged inside their
   own explanation with a short "Printed-paper note".
   ============================================================ */
const DAY20 = {
    day: 20,
    title: "Day 20",
    subtitle: "IOM Grand CEE Mock · Morning Shift Set A · 200 Q",
    durationMinutes: 180,
    negativeMarking: 0.25,
    chapters: [
        {
            id: "phy20",
            name: "Physics",
            subject: "Physics",
            accent: "blue",
            blurb: "Q1–50 · units & dimensions, mechanics, fluids, heat, waves, optics, electricity, magnetism, modern & nuclear physics.",
            questions: [
                {
                    id: "d20p1",
                    text: "The physical equation $s=ut+at^{2}$ is:",
                    options: [
                        { key: "a", text: "Both dimensionally correct and physically correct" },
                        { key: "b", text: "Dimensionally correct but physically incorrect" },
                        { key: "c", text: "Physically correct but dimensionally incorrect" },
                        { key: "d", text: "Both dimensionally and physically incorrect" }
                    ],
                    answer: "b",
                    explanation: "Check the dimensions: $[ut]=LT^{-1}\\cdot T=L$ and $[at^{2}]=LT^{-2}\\cdot T^{2}=L$, so every term has the dimension of length — the equation is dimensionally correct. But the true kinematic relation is $s=ut+\\tfrac12at^{2}$; the missing factor $\\tfrac12$ is a pure number and dimensional analysis can never detect it. Hence the equation is dimensionally correct but physically wrong."
                },
                {
                    id: "d20p2",
                    text: "If $\\theta$ is the angle between $\\vec{A}$ and $\\vec{B}$, then $|\\vec{A}\\times\\vec{B}|=\\vec{A}\\cdot\\vec{B}$ times:",
                    options: [
                        { key: "a", text: "$\\tan\\theta$" },
                        { key: "b", text: "$\\cot\\theta$" },
                        { key: "c", text: "$\\cos\\theta$" },
                        { key: "d", text: "$\\sin\\theta$" }
                    ],
                    answer: "a",
                    explanation: "$|\\vec{A}\\times\\vec{B}|=AB\\sin\\theta$ and $\\vec{A}\\cdot\\vec{B}=AB\\cos\\theta$. Dividing, $\\dfrac{|\\vec{A}\\times\\vec{B}|}{\\vec{A}\\cdot\\vec{B}}=\\dfrac{\\sin\\theta}{\\cos\\theta}=\\tan\\theta$, so the cross product equals the dot product multiplied by $\\tan\\theta$."
                },
                {
                    id: "d20p3",
                    text: "A bullet is projected with a speed of 200 m/s at an angle of $15^{\\circ}$ with the ground. What is the minimum speed of projection with which the same range can be achieved?",
                    options: [
                        { key: "a", text: "200 m/s" },
                        { key: "b", text: "243 m/s" },
                        { key: "c", text: "141 m/s" },
                        { key: "d", text: "86 m/s" }
                    ],
                    answer: "c",
                    explanation: "Range $R=\\dfrac{u^{2}\\sin2\\theta}{g}=\\dfrac{(200)^{2}\\sin30^{\\circ}}{g}=\\dfrac{20000}{g}$. For a fixed range the launch speed is least when $\\sin2\\theta$ is greatest, i.e. $\\theta=45^{\\circ}$, giving $u_{\\min}^{2}=Rg=20000$, so $u_{\\min}=\\sqrt{20000}\\approx141$ m/s."
                },
                {
                    id: "d20p4",
                    text: "A machine gun of mass $M$ fires $n$ bullets per second, each of mass $m$, with velocity $v$. The initial recoil acceleration of the gun is:",
                    options: [
                        { key: "a", text: "$\\dfrac{Mv}{nm}$" },
                        { key: "b", text: "$\\dfrac{mv}{nM}$" },
                        { key: "c", text: "$\\dfrac{mnv}{M}$" },
                        { key: "d", text: "$\\dfrac{Mnv}{m}$" }
                    ],
                    answer: "c",
                    explanation: "In one second the gun throws out $n$ bullets, each carrying momentum $mv$, so the momentum delivered per second is $nmv$. By Newton's second/third laws the reaction force on the gun is $F=nmv$, and its acceleration is $a=\\dfrac{F}{M}=\\dfrac{mnv}{M}$."
                },
                {
                    id: "d20p5",
                    text: "A body slides down a frictionless track which ends in a circular loop of diameter $D$, as shown. What is the minimum height $h$ (in terms of $D$) from which the body must start so that it just completes the loop?<div style='margin-top:10px'><svg viewBox='0 0 210 128' width='240' style='max-width:100%'><g fill='none' stroke='currentColor' stroke-width='2'><path d='M16 12 C 62 12, 66 104, 116 104'/><line x1='4' y1='104' x2='204' y2='104'/><circle cx='140' cy='80' r='24'/></g><line x1='16' y1='12' x2='16' y2='104' stroke='currentColor' stroke-width='1' stroke-dasharray='4 3'/><line x1='140' y1='56' x2='140' y2='104' stroke='#2563eb' stroke-width='1.2' stroke-dasharray='3 3'/><text x='22' y='60' font-size='12' fill='currentColor'>h</text><text x='145' y='84' font-size='12' fill='currentColor'>D</text><text x='6' y='10' font-size='10' fill='currentColor'>A</text></svg></div>",
                    options: [
                        { key: "a", text: "$h=\\dfrac{5D}{2}$" },
                        { key: "b", text: "$h=\\dfrac{5D}{4}$" },
                        { key: "c", text: "$h=\\dfrac{3D}{4}$" },
                        { key: "d", text: "$h=\\dfrac{D}{4}$" }
                    ],
                    answer: "b",
                    explanation: "At the top of the loop the minimum condition is $mg=\\dfrac{mv_{t}^{2}}{R}\\Rightarrow v_{t}^{2}=gR$. Energy conservation from the start to the top gives $mgh=mg(2R)+\\tfrac12mv_{t}^{2}=2mgR+\\tfrac12mgR$, so $h=\\tfrac52R$. With $R=D/2$, $h=\\dfrac{5D}{4}$."
                },
                {
                    id: "d20p6",
                    text: "A body of moment of inertia $I$ rotating about an axis has angular momentum $L$. The rotational kinetic energy of the body is:",
                    options: [
                        { key: "a", text: "$\\tfrac12 LI$" },
                        { key: "b", text: "$\\tfrac12 LI^{2}$" },
                        { key: "c", text: "$\\dfrac{L^{2}}{2I}$" },
                        { key: "d", text: "$2LI$" }
                    ],
                    answer: "c",
                    explanation: "$L=I\\omega\\Rightarrow\\omega=L/I$. Therefore $K=\\tfrac12I\\omega^{2}=\\tfrac12I\\left(\\dfrac{L}{I}\\right)^{2}=\\dfrac{L^{2}}{2I}$ — the rotational analogue of $K=p^{2}/2m$."
                },
                {
                    id: "d20p7",
                    text: "Two identical springs are arranged with a block as shown. The oscillation frequency of the mass is $f$. If one spring is removed, the frequency of oscillation becomes:<div style='margin-top:10px'><svg viewBox='0 0 244 74' width='250' style='max-width:100%'><g fill='none' stroke='currentColor' stroke-width='1.8'><line x1='10' y1='12' x2='10' y2='60'/><line x1='234' y1='12' x2='234' y2='60'/><path d='M10 36 h10 l5 -10 l10 20 l10 -20 l10 20 l10 -20 l10 20 l10 -20 l10 20 l5 -10 h10'/><path d='M144 36 h10 l5 -10 l10 20 l10 -20 l10 20 l10 -20 l10 20 l10 -20 l10 20 l5 -10 h10'/><rect x='100' y='20' width='44' height='32'/><line x1='0' y1='60' x2='244' y2='60'/></g><text x='114' y='42' font-size='14' fill='currentColor'>m</text><text x='48' y='16' font-size='11' fill='currentColor'>k</text><text x='186' y='16' font-size='11' fill='currentColor'>k</text></svg></div>",
                    options: [
                        { key: "a", text: "$f$" },
                        { key: "b", text: "$2f$" },
                        { key: "c", text: "$\\sqrt2\\,f$" },
                        { key: "d", text: "$\\dfrac{f}{\\sqrt2}$" }
                    ],
                    answer: "d",
                    explanation: "Springs attached on opposite sides of the block act in <b>parallel</b> — when the block moves right, one is stretched and the other compressed, and both push it back. So $k_{\\text{eff}}=2k$ and $f=\\dfrac{1}{2\\pi}\\sqrt{\\dfrac{2k}{m}}$. Removing one spring gives $f'=\\dfrac{1}{2\\pi}\\sqrt{\\dfrac{k}{m}}=\\dfrac{f}{\\sqrt2}$."
                },
                {
                    id: "d20p8",
                    text: "When two tubes of different diameters are dipped vertically in a liquid that wets them, the rise of liquid is:",
                    options: [
                        { key: "a", text: "Same in both tubes" },
                        { key: "b", text: "More in the tube of larger diameter" },
                        { key: "c", text: "More in the tube of smaller diameter" },
                        { key: "d", text: "Cannot be said" }
                    ],
                    answer: "c",
                    explanation: "Capillary rise is $h=\\dfrac{2T\\cos\\theta}{r\\rho g}$, i.e. $h\\propto\\dfrac1r$. The narrower the bore, the higher the liquid climbs, so the rise is greater in the tube of smaller diameter."
                },
                {
                    id: "d20p9",
                    text: "The surface tension of a liquid, with increase of temperature, generally:",
                    options: [
                        { key: "a", text: "Increases" },
                        { key: "b", text: "Decreases" },
                        { key: "c", text: "Remains constant" },
                        { key: "d", text: "Decreases up to $60^{\\circ}$ and then increases" }
                    ],
                    answer: "b",
                    explanation: "Rising temperature increases the average kinetic energy of the molecules and weakens the net inward cohesive pull at the surface, so surface tension falls almost linearly with temperature and becomes zero at the critical temperature."
                },
                {
                    id: "d20p10",
                    text: "If $V_e$ is the escape velocity and $V_o$ the orbital velocity of a satellite for an orbit close to the Earth's surface, then they are related by:",
                    options: [
                        { key: "a", text: "$V_o=\\sqrt2\\,V_e$" },
                        { key: "b", text: "$V_o=V_e$" },
                        { key: "c", text: "$V_e=\\sqrt{2V_o}$" },
                        { key: "d", text: "$V_e=\\sqrt2\\,V_o$" }
                    ],
                    answer: "d",
                    explanation: "For an orbit grazing the surface, $V_o=\\sqrt{gR}$, while $V_e=\\sqrt{2gR}$. Dividing, $V_e=\\sqrt2\\,V_o$ (about 11.2 km/s versus 7.9 km/s)."
                },
                {
                    id: "d20p11",
                    text: "A faulty thermometer has its fixed points marked $5^{\\circ}$ and $95^{\\circ}$. This thermometer reads the temperature of a body as $59^{\\circ}$. What is the correct temperature on the Celsius scale?",
                    options: [
                        { key: "a", text: "$60^{\\circ}$C" },
                        { key: "b", text: "$34.4^{\\circ}$C" },
                        { key: "c", text: "$48.6^{\\circ}$C" },
                        { key: "d", text: "$58^{\\circ}$C" }
                    ],
                    answer: "a",
                    explanation: "Equal fractions of the fundamental interval represent equal temperatures: $\\dfrac{C-0}{100-0}=\\dfrac{X-L}{U-L}=\\dfrac{59-5}{95-5}=\\dfrac{54}{90}=0.6$, so $C=60^{\\circ}$C.<br><i>Printed-paper note:</i> the set shows the fixed points as $0^{\\circ}$ and $90^{\\circ}$, which would give $59\\times100/90=65.6^{\\circ}$C — a value not offered in any option. With the standard $5^{\\circ}/95^{\\circ}$ marks the intended answer $60^{\\circ}$C comes out exactly."
                },
                {
                    id: "d20p12",
                    text: "Two materials of different initial lengths expand equally, having different linear expansivities. The relation between them is:",
                    options: [
                        { key: "a", text: "$\\dfrac{l_1}{l_2}=\\dfrac{\\alpha_1}{\\alpha_2}$" },
                        { key: "b", text: "$\\dfrac{l_1}{l_2}=\\dfrac{\\alpha_2}{\\alpha_1}$" },
                        { key: "c", text: "$l_1l_2=\\alpha_1\\alpha_2$" },
                        { key: "d", text: "$\\dfrac{l_1}{l_2}>\\dfrac{\\alpha_1}{\\alpha_2}$" }
                    ],
                    answer: "b",
                    explanation: "Equal expansion for the same temperature rise means $l_1\\alpha_1\\Delta T=l_2\\alpha_2\\Delta T$, hence $l_1\\alpha_1=l_2\\alpha_2$, i.e. $\\dfrac{l_1}{l_2}=\\dfrac{\\alpha_2}{\\alpha_1}$ — the rod with the smaller expansivity must be the longer one."
                },
                {
                    id: "d20p13",
                    text: "Tilak has two rods made of steel and iron. The ratio of their densities (steel : iron) is $3:4$ and the ratio of their specific heat capacities is $4:3$. He wants to know the ratio of thermal capacities <i>per unit volume</i> of steel to iron. What is his result?",
                    options: [
                        { key: "a", text: "$9:16$" },
                        { key: "b", text: "$16:9$" },
                        { key: "c", text: "$1:1$" },
                        { key: "d", text: "$3:2$" }
                    ],
                    answer: "c",
                    explanation: "Thermal capacity per unit volume $=\\dfrac{mc}{V}=\\rho c$. So the required ratio is $\\dfrac{\\rho_s c_s}{\\rho_i c_i}=\\dfrac34\\times\\dfrac43=1$, i.e. $1:1$."
                },
                {
                    id: "d20p14",
                    text: "Which of the following parameters is the same for the molecules of all gases at a given temperature?",
                    options: [
                        { key: "a", text: "Mass" },
                        { key: "b", text: "Kinetic energy" },
                        { key: "c", text: "Speed" },
                        { key: "d", text: "Momentum" }
                    ],
                    answer: "b",
                    explanation: "Kinetic theory gives an average translational kinetic energy $\\bar{E}=\\tfrac32k_BT$ per molecule, which depends only on temperature. Mass differs from gas to gas, and since $\\tfrac12m\\bar{v^2}$ is fixed, heavier molecules move slower — so speed and momentum are not the same."
                },
                {
                    id: "d20p15",
                    text: "For the isothermal compression of a gas in a closed vessel:",
                    options: [
                        { key: "a", text: "Work done is zero" },
                        { key: "b", text: "Heat has to be given from outside" },
                        { key: "c", text: "The energy of the system remains constant" },
                        { key: "d", text: "Energy of the system increases" }
                    ],
                    answer: "c",
                    explanation: "For an ideal gas the internal energy depends only on temperature, so an isothermal process has $\\Delta U=0$ — the energy of the system stays constant. Work $W=nRT\\ln(V_2/V_1)$ is negative (done on the gas), and by $\\Delta U=Q+W_{\\text{on}}$ that heat must be <i>rejected</i> to the surroundings, not supplied."
                },
                {
                    id: "d20p16",
                    text: "The temperatures of the reservoir and sink of an ideal heat engine are $T_1$ and $T_2$ respectively; its efficiency is $\\eta$. Now both $T_1$ and $T_2$ are increased by $100^{\\circ}$C. The new efficiency of the engine will be:",
                    options: [
                        { key: "a", text: "more than $\\eta$" },
                        { key: "b", text: "less than $\\eta$" },
                        { key: "c", text: "equal to $\\eta$" },
                        { key: "d", text: "exactly double of $\\eta$" }
                    ],
                    answer: "b",
                    explanation: "$\\eta=1-\\dfrac{T_2}{T_1}$. Adding the same amount to both temperatures pushes the ratio towards 1, because for $T_2<T_1$, $\\dfrac{T_2+100}{T_1+100}>\\dfrac{T_2}{T_1}$. A bigger ratio means a smaller efficiency, so $\\eta'<\\eta$."
                },
                {
                    id: "d20p17",
                    text: "A perfectly diamagnetic sphere has a small spherical cavity at its centre, which is filled with a paramagnetic substance. The whole system is placed in a uniform magnetic field $\\vec{B}$. Then the field inside the paramagnetic substance is:",
                    options: [
                        { key: "a", text: "$\\vec{B}$" },
                        { key: "b", text: "Zero" },
                        { key: "c", text: "Much larger than $|\\vec{B}|$ and parallel to $\\vec{B}$" },
                        { key: "d", text: "Much larger than $|\\vec{B}|$ but opposite to $\\vec{B}$" }
                    ],
                    answer: "b",
                    explanation: "A perfect diamagnet ($\\chi=-1$, e.g. a superconductor) expels magnetic flux completely — the Meissner effect. No flux can reach the interior, so the cavity and the paramagnetic material inside it experience zero magnetic field."
                },
                {
                    id: "d20p18",
                    text: "A concave mirror of focal length $f$ in air is immersed in water of refractive index $\\mu=\\tfrac43$. What will be the focal length of the mirror in water?",
                    options: [
                        { key: "a", text: "$\\tfrac34 f$" },
                        { key: "b", text: "$\\tfrac43 f$" },
                        { key: "c", text: "$\\tfrac23 f$" },
                        { key: "d", text: "$f$" }
                    ],
                    answer: "d",
                    explanation: "For a mirror $f=R/2$, a purely geometrical result of reflection. Refractive index enters only in refraction (lens maker's formula), so immersing a mirror in any transparent medium leaves its focal length unchanged."
                },
                {
                    id: "d20p19",
                    text: "When light passes from air into a glass slab:",
                    options: [
                        { key: "a", text: "Wavelength decreases" },
                        { key: "b", text: "Frequency increases" },
                        { key: "c", text: "Velocity increases" },
                        { key: "d", text: "Frequency decreases" }
                    ],
                    answer: "a",
                    explanation: "Frequency is fixed by the source and never changes at a boundary. In glass the speed falls to $v=c/\\mu$, so from $v=f\\lambda$ the wavelength also falls to $\\lambda/\\mu$."
                },
                {
                    id: "d20p20",
                    text: "What is the refractive index of glass with respect to water? (Take $\\mu_{\\text{glass}}=1.5$, $\\mu_{\\text{water}}=1.33$.)",
                    options: [
                        { key: "a", text: "1.12" },
                        { key: "b", text: "1.50" },
                        { key: "c", text: "2.42" },
                        { key: "d", text: "1.33" }
                    ],
                    answer: "a",
                    explanation: "$^{w}\\mu_{g}=\\dfrac{\\mu_g}{\\mu_w}=\\dfrac{1.5}{1.33}\\approx1.12$. Note 1.5 is glass w.r.t. air, 1.33 is water w.r.t. air and 2.42 is diamond."
                },
                {
                    id: "d20p21",
                    text: "Two identical waves travelling in opposite directions superimpose on each other. The characteristic of this wave matches with one of the following:",
                    options: [
                        { key: "a", text: "Some particles are permanently at rest while others are in motion" },
                        { key: "b", text: "No particle attains its own maximum velocity at the same time as the others when passing through the mean position" },
                        { key: "c", text: "It carries energy in the forward direction" },
                        { key: "d", text: "The amplitude of each particle is the same" }
                    ],
                    answer: "a",
                    explanation: "The superposition gives a <b>stationary wave</b>. Particles at the nodes have zero amplitude and stay permanently at rest, while all others vibrate. In a stationary wave all particles do cross the mean position together (so (b) is wrong), amplitude varies from node to antinode (so (d) is wrong), and no net energy is transported (so (c) is wrong)."
                },
                {
                    id: "d20p22",
                    text: "Sound is propagated through a string under tension with speed $V_0$. If the mass of the string is doubled but its length and tension are unchanged, the speed of the wave becomes:",
                    options: [
                        { key: "a", text: "$\\dfrac{V_0}{\\sqrt2}$" },
                        { key: "b", text: "$\\dfrac{V_0}{2}$" },
                        { key: "c", text: "$2V_0$" },
                        { key: "d", text: "$\\sqrt2\\,V_0$" }
                    ],
                    answer: "a",
                    explanation: "$v=\\sqrt{T/\\mu}$ with $\\mu=m/l$. Doubling the mass at the same length doubles $\\mu$, so $v'=\\sqrt{\\dfrac{T}{2\\mu}}=\\dfrac{V_0}{\\sqrt2}$."
                },
                {
                    id: "d20p23",
                    text: "Young's double-slit experiment is performed inside water. The fringe width will:",
                    options: [
                        { key: "a", text: "Decrease" },
                        { key: "b", text: "Remain the same" },
                        { key: "c", text: "Increase" },
                        { key: "d", text: "First increase, then decrease" }
                    ],
                    answer: "a",
                    explanation: "$\\beta=\\dfrac{\\lambda D}{d}$. Inside water the wavelength shrinks to $\\lambda/\\mu$, so $\\beta'=\\beta/\\mu$ — the fringes crowd closer together (about 25 % narrower for $\\mu=4/3$)."
                },
                {
                    id: "d20p24",
                    text: "The intensity of a sound increases to 1000 times. The increase in intensity level is:",
                    options: [
                        { key: "a", text: "3 dB" },
                        { key: "b", text: "30 dB" },
                        { key: "c", text: "$10\\sqrt{10}$ dB" },
                        { key: "d", text: "1000 dB" }
                    ],
                    answer: "b",
                    explanation: "$\\Delta\\beta=10\\log_{10}\\dfrac{I_2}{I_1}=10\\log_{10}(1000)=10\\times3=30$ dB. (Every factor of 10 in intensity adds 10 dB.)"
                },
                {
                    id: "d20p25",
                    text: "A cell of emf $\\varepsilon$ and internal resistance $r$ supplies current for the same time through external resistances $R_1$ and $R_2$ separately. If the heat developed in the external resistance is the same in the two cases, $r$ is equal to:",
                    options: [
                        { key: "a", text: "$\\dfrac{1}{R_1}+\\dfrac{1}{R_2}$" },
                        { key: "b", text: "$\\dfrac{R_1+R_2}{2}$" },
                        { key: "c", text: "$\\sqrt{R_1R_2}$" },
                        { key: "d", text: "$R_1+R_2$" }
                    ],
                    answer: "c",
                    explanation: "Heat in the external resistor is $H=I^{2}Rt=\\dfrac{\\varepsilon^{2}R\\,t}{(R+r)^{2}}$. Setting $\\dfrac{R_1}{(R_1+r)^{2}}=\\dfrac{R_2}{(R_2+r)^{2}}$ and cross-multiplying gives $R_1R_2^{2}+ \\ldots$, which simplifies to $r^{2}=R_1R_2$, i.e. $r=\\sqrt{R_1R_2}$ — the geometric mean of the two external resistances."
                },
                {
                    id: "d20p26",
                    text: "A one-metre wire carrying 2 A is placed perpendicular to a magnetic field of 2 T. The force acting on the wire is:",
                    options: [
                        { key: "a", text: "1 N" },
                        { key: "b", text: "2 N" },
                        { key: "c", text: "3 N" },
                        { key: "d", text: "4 N" }
                    ],
                    answer: "d",
                    explanation: "$F=BIL\\sin\\theta=2\\times2\\times1\\times\\sin90^{\\circ}=4$ N."
                },
                {
                    id: "d20p27",
                    text: "Electrical appliances tend to lose charge from sharp points, so sharp edges are avoided in such instruments. This phenomenon of loss of charge via sharp points is known as:",
                    options: [
                        { key: "a", text: "Sharp point leakage" },
                        { key: "b", text: "Action of conduction in air" },
                        { key: "c", text: "Dielectric breakdown" },
                        { key: "d", text: "Action of points" }
                    ],
                    answer: "d",
                    explanation: "Surface charge density is largest where the radius of curvature is smallest, so the field at a sharp point becomes strong enough to ionise the surrounding air and leak charge away (corona discharge). This is called the <b>action of points</b>, and it is exactly the principle used in the lightning conductor and the Van de Graaff generator."
                },
                {
                    id: "d20p28",
                    text: "A copper–iron thermocouple was set up and a series of experiments performed while varying the temperatures of the hot and cold junctions. Which one of the following was observed?",
                    options: [
                        { key: "a", text: "The temperature of inversion in all the experiments was the same" },
                        { key: "b", text: "The neutral temperature in all the experiments was different" },
                        { key: "c", text: "The sum of the temperature of inversion and the cold junction temperature is double the neutral temperature" },
                        { key: "d", text: "The neutral temperature reverses its direction after a certain point" }
                    ],
                    answer: "c",
                    explanation: "For a given pair of metals the neutral temperature $\\theta_n$ is a constant, but the temperature of inversion $\\theta_i$ depends on the cold junction, because $\\theta_n$ lies exactly midway between them: $\\theta_n=\\dfrac{\\theta_i+\\theta_c}{2}$, i.e. $\\theta_i+\\theta_c=2\\theta_n$."
                },
                {
                    id: "d20p29",
                    text: "Two parallel conductors carrying current in opposite directions:",
                    options: [
                        { key: "a", text: "Repel each other" },
                        { key: "b", text: "Attract each other" },
                        { key: "c", text: "May attract or repel" },
                        { key: "d", text: "First repel, then attract" }
                    ],
                    answer: "a",
                    explanation: "Ampère's force law gives $\\dfrac{F}{l}=\\dfrac{\\mu_0I_1I_2}{2\\pi d}$; the direction from $\\vec{F}=I\\vec{l}\\times\\vec{B}$ shows like (parallel) currents attract while unlike (antiparallel) currents repel."
                },
                {
                    id: "d20p30",
                    text: "Two parallel plates are maintained at $+6$ V (upper) and $+6$ V (lower), separated by 2 cm. The magnitude and direction of the electric field between them is:",
                    options: [
                        { key: "a", text: "0" },
                        { key: "b", text: "600 V/m upward" },
                        { key: "c", text: "600 V/m downward" },
                        { key: "d", text: "300 V/m upward" }
                    ],
                    answer: "a",
                    explanation: "$E=\\dfrac{\\Delta V}{d}$. Both plates sit at the same potential $(+6$ V$)$, so $\\Delta V=0$ and the field between them is zero — the common potential value is irrelevant, only the difference matters."
                },
                {
                    id: "d20p31",
                    text: "The net resistance of an ammeter should be small to ensure that:",
                    options: [
                        { key: "a", text: "It does not get overheated" },
                        { key: "b", text: "It does not draw excessive current" },
                        { key: "c", text: "It can measure large currents" },
                        { key: "d", text: "It does not appreciably change the current to be measured" }
                    ],
                    answer: "d",
                    explanation: "An ammeter is inserted in series, so its resistance adds to the circuit resistance. Only if that added resistance is negligible does the current after insertion stay essentially equal to the current the circuit had before — an ideal ammeter has zero resistance."
                },
                {
                    id: "d20p32",
                    text: "If the flux associated with a coil varies at the rate of 1 weber per minute, the induced emf is:",
                    options: [
                        { key: "a", text: "1 V" },
                        { key: "b", text: "$\\tfrac{1}{60}$ V" },
                        { key: "c", text: "Zero" },
                        { key: "d", text: "60 V" }
                    ],
                    answer: "b",
                    explanation: "$|e|=\\dfrac{d\\Phi}{dt}=\\dfrac{1\\ \\text{Wb}}{60\\ \\text{s}}=\\dfrac{1}{60}$ V $\\approx0.017$ V. (1 volt corresponds to 1 weber per <i>second</i>.)"
                },
                {
                    id: "d20p33",
                    text: "What is the graphical representation of the electric field due to a uniformly (volume) charged sphere of radius $R$, as a function of the distance $r$ from the centre?",
                    options: [
                        { key: "a", text: "<svg viewBox='0 0 140 84' width='128' style='vertical-align:middle'><line x1='20' y1='6' x2='20' y2='66' stroke='currentColor' stroke-width='1.4'/><line x1='20' y1='66' x2='132' y2='66' stroke='currentColor' stroke-width='1.4'/><path d='M20 66 L58 18' fill='none' stroke='#2563eb' stroke-width='2.4'/><path d='M58 18 Q80 46 130 60' fill='none' stroke='#2563eb' stroke-width='2.4'/><line x1='58' y1='18' x2='58' y2='66' stroke='currentColor' stroke-width='0.9' stroke-dasharray='3 3'/><text x='6' y='16' font-size='10' fill='currentColor'>E</text><text x='124' y='80' font-size='10' fill='currentColor'>r</text><text x='53' y='80' font-size='10' fill='currentColor'>R</text></svg>" },
                        { key: "b", text: "<svg viewBox='0 0 140 84' width='128' style='vertical-align:middle'><line x1='20' y1='6' x2='20' y2='66' stroke='currentColor' stroke-width='1.4'/><line x1='20' y1='66' x2='132' y2='66' stroke='currentColor' stroke-width='1.4'/><path d='M24 10 Q40 60 130 63' fill='none' stroke='#2563eb' stroke-width='2.4'/><line x1='58' y1='6' x2='58' y2='66' stroke='currentColor' stroke-width='0.9' stroke-dasharray='3 3'/><text x='6' y='16' font-size='10' fill='currentColor'>E</text><text x='124' y='80' font-size='10' fill='currentColor'>r</text><text x='53' y='80' font-size='10' fill='currentColor'>R</text></svg>" },
                        { key: "c", text: "<svg viewBox='0 0 140 84' width='128' style='vertical-align:middle'><line x1='20' y1='6' x2='20' y2='66' stroke='currentColor' stroke-width='1.4'/><line x1='20' y1='66' x2='132' y2='66' stroke='currentColor' stroke-width='1.4'/><path d='M20 20 L58 20' fill='none' stroke='#2563eb' stroke-width='2.4'/><path d='M58 20 Q80 48 130 61' fill='none' stroke='#2563eb' stroke-width='2.4'/><line x1='58' y1='20' x2='58' y2='66' stroke='currentColor' stroke-width='0.9' stroke-dasharray='3 3'/><text x='6' y='16' font-size='10' fill='currentColor'>E</text><text x='124' y='80' font-size='10' fill='currentColor'>r</text><text x='53' y='80' font-size='10' fill='currentColor'>R</text></svg>" },
                        { key: "d", text: "<svg viewBox='0 0 140 84' width='128' style='vertical-align:middle'><line x1='20' y1='6' x2='20' y2='66' stroke='currentColor' stroke-width='1.4'/><line x1='20' y1='66' x2='132' y2='66' stroke='currentColor' stroke-width='1.4'/><path d='M20 66 L58 18 L130 18' fill='none' stroke='#2563eb' stroke-width='2.4'/><line x1='58' y1='18' x2='58' y2='66' stroke='currentColor' stroke-width='0.9' stroke-dasharray='3 3'/><text x='6' y='16' font-size='10' fill='currentColor'>E</text><text x='124' y='80' font-size='10' fill='currentColor'>r</text><text x='53' y='80' font-size='10' fill='currentColor'>R</text></svg>" }
                    ],
                    answer: "a",
                    explanation: "Applying Gauss's law inside ($r<R$) encloses only the fraction $\\dfrac{r^{3}}{R^{3}}$ of the charge, giving $E=\\dfrac{\\rho r}{3\\varepsilon_0}\\propto r$ — a straight line rising from the centre. Outside ($r>R$) the whole charge acts as if at the centre, so $E=\\dfrac{Q}{4\\pi\\varepsilon_0r^{2}}\\propto\\dfrac{1}{r^{2}}$. The field therefore rises linearly to a maximum at the surface and then falls off as $1/r^{2}$."
                },
                {
                    id: "d20p34",
                    text: "A wire of mass 200 kg has a capacitance of 0.0014 $\\mu$F/kg and is operated at a frequency of 50 kHz. What inductance (in $\\mu$H) makes the impedance minimum?",
                    options: [
                        { key: "a", text: "27" },
                        { key: "b", text: "37" },
                        { key: "c", text: "47" },
                        { key: "d", text: "57" }
                    ],
                    answer: "b",
                    explanation: "Total capacitance $C=200\\times0.0014=0.28\\ \\mu\\text{F}=2.8\\times10^{-7}$ F. Impedance is minimum at series resonance, where $\\omega L=\\dfrac{1}{\\omega C}$, i.e. $L=\\dfrac{1}{\\omega^{2}C}$ with $\\omega=2\\pi f=3.14\\times10^{5}$ rad/s. So $L=\\dfrac{1}{(3.14\\times10^{5})^{2}\\times2.8\\times10^{-7}}\\approx3.6\\times10^{-5}$ H $\\approx36\\ \\mu$H, i.e. about 37 $\\mu$H."
                },
                {
                    id: "d20p35",
                    text: "A capacitor of 8 $\\mu$F can withstand a potential difference of 250 V. The minimum number of such capacitors required to make a 16 $\\mu$F combination able to withstand 1000 V is:",
                    options: [
                        { key: "a", text: "32" },
                        { key: "b", text: "8" },
                        { key: "c", text: "4" },
                        { key: "d", text: "16" }
                    ],
                    answer: "a",
                    explanation: "To survive 1000 V we need $1000/250=4$ capacitors in series per row; each row then has $C_{\\text{row}}=8/4=2\\ \\mu$F. To reach 16 $\\mu$F we need $16/2=8$ such rows in parallel. Total $=4\\times8=32$ capacitors."
                },
                {
                    id: "d20p36",
                    text: "On what parameter does the electric flux density inside a Gaussian surface <b>not</b> depend?",
                    options: [
                        { key: "a", text: "Relative permittivity" },
                        { key: "b", text: "Charge" },
                        { key: "c", text: "Distance" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "a",
                    explanation: "The electric displacement (flux density) is $D=\\dfrac{q}{4\\pi r^{2}}$ — it is fixed by the enclosed charge and the geometry alone. Introducing a dielectric changes $E=D/(\\varepsilon_0\\varepsilon_r)$ but leaves $D$ untouched, so $D$ is independent of the relative permittivity."
                },
                {
                    id: "d20p37",
                    text: "If the position of an electron is measured precisely with zero uncertainty $(\\Delta x\\to0)$, what will be the uncertainty in its momentum $(\\Delta p)$?",
                    options: [
                        { key: "a", text: "Zero" },
                        { key: "b", text: "Equal to $\\hbar$" },
                        { key: "c", text: "Infinite" },
                        { key: "d", text: "Equal to $\\dfrac{h}{4\\pi}$" }
                    ],
                    answer: "c",
                    explanation: "Heisenberg's principle requires $\\Delta x\\,\\Delta p\\ge\\dfrac{h}{4\\pi}$. As $\\Delta x\\to0$, $\\Delta p\\ge\\dfrac{h}{4\\pi\\Delta x}\\to\\infty$: perfect knowledge of position makes the momentum completely indeterminate."
                },
                {
                    id: "d20p38",
                    text: "Doubly ionized helium and hydrogen ions are accelerated from rest through the same potential drop. The ratio of the final velocity of the helium ion to that of the hydrogen ion is:",
                    options: [
                        { key: "a", text: "$\\dfrac12$" },
                        { key: "b", text: "2" },
                        { key: "c", text: "$\\dfrac{1}{\\sqrt2}$" },
                        { key: "d", text: "$\\sqrt2$" }
                    ],
                    answer: "c",
                    explanation: "$qV=\\tfrac12mv^{2}\\Rightarrow v=\\sqrt{\\dfrac{2qV}{m}}$. For $\\mathrm{He^{2+}}$: $q=2e,\\ m=4m_p$; for $\\mathrm{H^{+}}$: $q=e,\\ m=m_p$. Hence $\\dfrac{v_{He}}{v_{H}}=\\sqrt{\\dfrac{2e/4m_p}{e/m_p}}=\\sqrt{\\dfrac12}=\\dfrac{1}{\\sqrt2}$."
                },
                {
                    id: "d20p39",
                    text: "The nuclear radius of oxygen-16 is $3\\times10^{-15}$ m. What is the nuclear radius of $X$-131 (atomic mass of $X=131$)?",
                    options: [
                        { key: "a", text: "$8\\times10^{-13}$ m" },
                        { key: "b", text: "$6\\times10^{-15}$ cm" },
                        { key: "c", text: "$6\\times10^{-10}$ m" },
                        { key: "d", text: "$6\\times10^{-15}$ m" }
                    ],
                    answer: "d",
                    explanation: "$R=R_0A^{1/3}$, so $\\dfrac{R_X}{R_O}=\\left(\\dfrac{131}{16}\\right)^{1/3}=(8.19)^{1/3}\\approx2.02$. Thus $R_X\\approx3\\times10^{-15}\\times2.02\\approx6\\times10^{-15}$ m (option (b) has the wrong unit)."
                },
                {
                    id: "d20p40",
                    text: "The dynamic mass of a photon is:",
                    options: [
                        { key: "a", text: "Zero" },
                        { key: "b", text: "$h\\nu$" },
                        { key: "c", text: "$\\dfrac{h\\nu}{c}$" },
                        { key: "d", text: "$\\dfrac{h\\nu}{c^{2}}$" }
                    ],
                    answer: "d",
                    explanation: "From $E=mc^{2}$ and $E=h\\nu$, the effective (dynamic/relativistic) mass is $m=\\dfrac{h\\nu}{c^{2}}$. Its <i>rest</i> mass is zero, and $h\\nu/c$ is the photon's momentum."
                },
                {
                    id: "d20p41",
                    text: "In a Millikan oil-drop experiment, an oil drop is held stationary by a potential difference of 400 V. If another drop of double the radius but carrying the same charge is to be held stationary, the potential difference required is:",
                    options: [
                        { key: "a", text: "800 V" },
                        { key: "b", text: "1600 V" },
                        { key: "c", text: "3200 V" },
                        { key: "d", text: "400 V" }
                    ],
                    answer: "c",
                    explanation: "For balance, $\\dfrac{qV}{d}=mg=\\dfrac43\\pi r^{3}\\rho g$, so at fixed $q$ and $d$, $V\\propto r^{3}$. Doubling the radius multiplies the weight — and therefore the required voltage — by $2^{3}=8$: $V=8\\times400=3200$ V."
                },
                {
                    id: "d20p42",
                    text: "In the photoelectric effect, if the frequency of the incident light is doubled, the stopping potential becomes:",
                    options: [
                        { key: "a", text: "More than double" },
                        { key: "b", text: "Less than double" },
                        { key: "c", text: "Half" },
                        { key: "d", text: "Same" }
                    ],
                    answer: "a",
                    explanation: "$eV_0=h\\nu-\\phi$. Doubling the frequency gives $eV_0'=2h\\nu-\\phi=2(h\\nu-\\phi)+\\phi=2eV_0+\\phi$. Since the work function $\\phi>0$, the new stopping potential is more than double the old one."
                },
                {
                    id: "d20p43",
                    text: "Which gate is represented by the circuit shown?<div style='margin-top:10px'><svg viewBox='0 0 250 136' width='260' style='max-width:100%'><g fill='none' stroke='currentColor' stroke-width='1.7'><path d='M64 12 h16 a17 17 0 0 1 0 34 h-16 z'/><circle cx='101' cy='29' r='4.5'/><path d='M64 88 h16 a17 17 0 0 1 0 34 h-16 z'/><circle cx='101' cy='105' r='4.5'/><path d='M156 50 h16 a17 17 0 0 1 0 34 h-16 z'/><circle cx='193' cy='67' r='4.5'/><line x1='24' y1='29' x2='64' y2='29'/><line x1='24' y1='105' x2='64' y2='105'/><line x1='64' y1='20' x2='58' y2='20'/><line x1='64' y1='38' x2='58' y2='38'/><line x1='58' y1='20' x2='58' y2='38'/><line x1='64' y1='96' x2='58' y2='96'/><line x1='64' y1='114' x2='58' y2='114'/><line x1='58' y1='96' x2='58' y2='114'/><path d='M105.5 29 H130 V58 H156'/><path d='M105.5 105 H130 V76 H156'/><line x1='197.5' y1='67' x2='232' y2='67'/></g><text x='10' y='33' font-size='12' fill='currentColor'>A</text><text x='10' y='109' font-size='12' fill='currentColor'>B</text><text x='234' y='71' font-size='12' fill='currentColor'>Y</text></svg></div>",
                    options: [
                        { key: "a", text: "OR" },
                        { key: "b", text: "AND" },
                        { key: "c", text: "NAND" },
                        { key: "d", text: "NOR" }
                    ],
                    answer: "a",
                    explanation: "Each of the first two NAND gates has both inputs tied together, so it works as an inverter: $A\\cdot A=A\\Rightarrow\\overline{A}$, and likewise $\\overline{B}$. The third NAND then gives $Y=\\overline{\\overline{A}\\cdot\\overline{B}}=A+B$ by De Morgan's theorem — an OR gate. Truth table: $(0,0)\\to0,\\ (0,1)\\to1,\\ (1,0)\\to1,\\ (1,1)\\to1$. This is the standard demonstration that NAND is a universal gate."
                },
                {
                    id: "d20p44",
                    text: "The band gap between the conduction band and the valence band in Si and Ge is ......... respectively.",
                    options: [
                        { key: "a", text: "0.67 eV and 1.12 eV" },
                        { key: "b", text: "1.12 eV and 0.67 eV" },
                        { key: "c", text: "1 eV and 0.67 eV" },
                        { key: "d", text: "1.9 eV and 1.12 eV" }
                    ],
                    answer: "b",
                    explanation: "Silicon has the larger forbidden gap, $E_g\\approx1.1$ eV, while germanium has $E_g\\approx0.7$ eV. That is why Ge devices conduct (and leak) more readily at room temperature while Si tolerates higher temperatures."
                },
                {
                    id: "d20p45",
                    text: "Avalanche breakdown in a p–n junction is due to:",
                    options: [
                        { key: "a", text: "Shift of the Fermi level" },
                        { key: "b", text: "Cumulative effect of conduction-band electron collisions" },
                        { key: "c", text: "Widening of the forbidden gap" },
                        { key: "d", text: "High impurity concentration" }
                    ],
                    answer: "b",
                    explanation: "Under a large reverse bias the minority carriers gain enough kinetic energy to knock further electrons out of covalent bonds; those secondary carriers do the same, so the current multiplies in a chain (avalanche) reaction. Heavy doping with a very thin depletion layer instead produces <i>Zener</i> breakdown."
                },
                {
                    id: "d20p46",
                    text: "The baryon number of each meson is:",
                    options: [
                        { key: "a", text: "Zero" },
                        { key: "b", text: "1" },
                        { key: "c", text: "$\\dfrac13$" },
                        { key: "d", text: "$\\dfrac23$" }
                    ],
                    answer: "a",
                    explanation: "A meson is a quark–antiquark pair. Each quark carries baryon number $+\\tfrac13$ and each antiquark $-\\tfrac13$, so the total is $\\tfrac13-\\tfrac13=0$. Baryons (three quarks) have baryon number 1."
                },
                {
                    id: "d20p47",
                    text: "Energy released per nucleon is:",
                    options: [
                        { key: "a", text: "More for nuclear fusion than nuclear fission" },
                        { key: "b", text: "More for nuclear fission than fusion" },
                        { key: "c", text: "Equal for both" },
                        { key: "d", text: "Cannot be defined" }
                    ],
                    answer: "a",
                    explanation: "Fusion of light nuclei releases roughly 6–7 MeV per nucleon (e.g. hydrogen to helium), whereas fission of $^{235}$U releases about 200 MeV over 236 nucleons, i.e. under 1 MeV per nucleon. The binding-energy curve rises far more steeply on the light side than it falls on the heavy side."
                },
                {
                    id: "d20p48",
                    text: "Properties of gravitational waves include all of the following <b>except</b>:",
                    options: [
                        { key: "a", text: "They are invisible" },
                        { key: "b", text: "These waves squeeze and stretch anything in their path as they pass by" },
                        { key: "c", text: "These waves obey the inverse square law" },
                        { key: "d", text: "These waves exist in high frequency only, as low frequency is not possible" }
                    ],
                    answer: "d",
                    explanation: "Gravitational waves cover an enormous frequency range — from the kilohertz signals of merging neutron stars detected by LIGO down to the nanohertz background probed by pulsar-timing arrays. So the claim that only high frequencies are possible is false; the other three statements are correct."
                },
                {
                    id: "d20p49",
                    text: "Absorbed dose has the unit of:",
                    options: [
                        { key: "a", text: "Gray" },
                        { key: "b", text: "Dalton" },
                        { key: "c", text: "Barn" },
                        { key: "d", text: "Joule" }
                    ],
                    answer: "a",
                    explanation: "Absorbed dose is energy deposited per unit mass; 1 gray = 1 J/kg (the older unit is the rad, $1\\ \\mathrm{Gy}=100$ rad). Dalton is a unit of atomic mass, barn a unit of nuclear cross-section, and sievert the unit of equivalent dose."
                },
                {
                    id: "d20p50",
                    text: "What do we call a massive explosion that throws out a dying star's outer layers?",
                    options: [
                        { key: "a", text: "Supernova" },
                        { key: "b", text: "Nebula" },
                        { key: "c", text: "Black hole" },
                        { key: "d", text: "Red giant" }
                    ],
                    answer: "a",
                    explanation: "When a massive star exhausts its nuclear fuel its core collapses and the outer envelope is blown off in a supernova explosion, leaving behind a neutron star or a black hole. A nebula is the resulting cloud of gas/dust, and a red giant is the swollen late stage of a low-mass star."
                }
            ]
        }
        ,
        {
            id: "zoo20",
            name: "Zoology",
            subject: "Zoology",
            accent: "rose",
            blurb: "Q51–90 · evolution, animal diversity, parasitology, human anatomy & physiology, health and disease.",
            questions: [
                {
                    id: "d20z51",
                    text: "According to Neo-Darwinism, the evolution of a species is based upon the sum total of the adaptive changes initially segregated by:",
                    options: [
                        { key: "a", text: "Natural selection" },
                        { key: "b", text: "Isolation" },
                        { key: "c", text: "Speciation" },
                        { key: "d", text: "Human conservation" }
                    ],
                    answer: "b",
                    explanation: "Neo-Darwinism (the modern synthesis) explains evolution through mutation, recombination, natural selection and <b>isolation</b>. Isolation — geographic or reproductive — is what first <i>segregates</i> a population so that its accumulated adaptive changes cannot be swamped by gene flow; selection then acts on the separated gene pools and speciation is the end result, not the starting step."
                },
                {
                    id: "d20z52",
                    text: "Which of the following is the most evident source of evidence of evolution?",
                    options: [
                        { key: "a", text: "Fossils" },
                        { key: "b", text: "Embryos" },
                        { key: "c", text: "Morphology" },
                        { key: "d", text: "Vestigial organs" }
                    ],
                    answer: "a",
                    explanation: "Fossils are direct, datable remains of organisms that actually lived, so palaeontological evidence is the most concrete and convincing. Embryological, morphological and vestigial evidence is indirect — it must be interpreted through comparison."
                },
                {
                    id: "d20z53",
                    text: "The noticeable difference of Peking man from Java man was its:",
                    options: [
                        { key: "a", text: "Smaller cranial capacity" },
                        { key: "b", text: "Larger cranial capacity" },
                        { key: "c", text: "Longer arms" },
                        { key: "d", text: "Longer legs" }
                    ],
                    answer: "b",
                    explanation: "Both are forms of <i>Homo erectus</i>. Java man (<i>H. erectus erectus</i>) had a cranial capacity of about 900 cc, while Peking man (<i>H. erectus pekinensis</i>) had roughly 1075–1100 cc, and also used fire and stone tools."
                },
                {
                    id: "d20z54",
                    text: "Exoskeleton is absent in:",
                    options: [
                        { key: "a", text: "Scoliodon" },
                        { key: "b", text: "Rabbit" },
                        { key: "c", text: "Frog" },
                        { key: "d", text: "Turtle" }
                    ],
                    answer: "c",
                    explanation: "The frog has a naked, moist, glandular skin used for cutaneous respiration, so it carries no exoskeleton at all. Scoliodon has placoid scales, the rabbit has hair, claws and nails, and the turtle has a bony carapace and plastron covered with horny scutes."
                },
                {
                    id: "d20z55",
                    text: "Chromatophores in the skin of frog are found in the stratum:",
                    options: [
                        { key: "a", text: "Corneum" },
                        { key: "b", text: "Compactum" },
                        { key: "c", text: "Germinativum" },
                        { key: "d", text: "Spongiosum" }
                    ],
                    answer: "d",
                    explanation: "Frog skin has an epidermis (stratum corneum + stratum germinativum) and a dermis (stratum spongiosum + stratum compactum). The pigment cells — melanophores, guanophores and lipophores — together with mucous glands lie in the loose upper dermal layer, the <b>stratum spongiosum</b>."
                },
                {
                    id: "d20z56",
                    text: "A malaria patient develops fever on Day 1 and again on Day 4. Which species is most likely responsible?",
                    options: [
                        { key: "a", text: "Plasmodium vivax" },
                        { key: "b", text: "Plasmodium falciparum" },
                        { key: "c", text: "Plasmodium malariae" },
                        { key: "d", text: "Plasmodium ovale" }
                    ],
                    answer: "c",
                    explanation: "Fever recurs when a generation of erythrocytic schizonts bursts. Day 1 to Day 4 is a 72-hour cycle — quartan malaria — which is characteristic of <i>P. malariae</i>. <i>P. vivax</i> and <i>P. ovale</i> give benign tertian fever (48 h) and <i>P. falciparum</i> malignant tertian fever (about 36–48 h)."
                },
                {
                    id: "d20z57",
                    text: "Which stage of Plasmodium falciparum is characteristically crescent (banana)-shaped in a peripheral blood smear?",
                    options: [
                        { key: "a", text: "Sporozoite" },
                        { key: "b", text: "Trophozoite" },
                        { key: "c", text: "Schizont" },
                        { key: "d", text: "Gametocyte" }
                    ],
                    answer: "d",
                    explanation: "The mature gametocyte of <i>P. falciparum</i> is the classic crescentic or banana-shaped body seen in a blood film — a diagnostic hallmark. Only ring trophozoites and gametocytes normally circulate in falciparum infection, the schizont stage being sequestered in deep capillaries."
                },
                {
                    id: "d20z58",
                    text: "The first body segment of an earthworm bearing the mouth is called:",
                    options: [
                        { key: "a", text: "Peristomium" },
                        { key: "b", text: "Prostomium" },
                        { key: "c", text: "Clitellum" },
                        { key: "d", text: "Pygidium" }
                    ],
                    answer: "a",
                    explanation: "The <b>peristomium</b> is the true first segment and carries the mouth. The prostomium is only a fleshy overhanging lobe (not a segment) used to push soil, the clitellum is a glandular girdle around segments 14–16 in <i>Pheretima</i>, and the pygidium is the terminal anal segment."
                },
                {
                    id: "d20z59",
                    text: "An earthworm is prevented from forming a cocoon. Which event can still occur normally?",
                    options: [
                        { key: "a", text: "Embryonic development" },
                        { key: "b", text: "Fertilization inside the cocoon" },
                        { key: "c", text: "Exchange of sperm during copulation" },
                        { key: "d", text: "Hatching of young worms" }
                    ],
                    answer: "c",
                    explanation: "Earthworms are hermaphrodite but cross-fertilising: two worms copulate and exchange sperm, which is stored in the spermathecae. That step is complete long before the clitellum secretes the cocoon. Fertilisation, embryonic development and hatching all take place <i>inside</i> the cocoon, so all three fail if no cocoon is formed."
                },
                {
                    id: "d20z60",
                    text: "Which statement is correct?",
                    options: [
                        { key: "a", text: "All coelomates are segmented" },
                        { key: "b", text: "All acoelomates are diploblastic" },
                        { key: "c", text: "All pseudocoelomates are bilaterally symmetrical" },
                        { key: "d", text: "All triploblastic animals are coelomates" }
                    ],
                    answer: "c",
                    explanation: "Pseudocoelomates (Aschelminthes/Nematoda) are without exception bilaterally symmetrical. Molluscs and echinoderms are coelomate yet unsegmented; flatworms are acoelomate but triploblastic, not diploblastic; and Platyhelminthes are triploblastic yet acoelomate."
                },
                {
                    id: "d20z61",
                    text: "Which of the following is <b>not</b> a deuterostome?",
                    options: [
                        { key: "a", text: "Starfish" },
                        { key: "b", text: "Sea urchin" },
                        { key: "c", text: "Balanoglossus" },
                        { key: "d", text: "Cockroach" }
                    ],
                    answer: "d",
                    explanation: "In deuterostomes the blastopore becomes the anus and the mouth forms later — this includes Echinodermata (starfish, sea urchin), Hemichordata (<i>Balanoglossus</i>) and Chordata. The cockroach is an arthropod, a protostome, in which the blastopore becomes the mouth."
                },
                {
                    id: "d20z62",
                    text: "Periodic reversal in the direction of blood flow is characteristic of which of the following?",
                    options: [
                        { key: "a", text: "Sepia" },
                        { key: "b", text: "Herdmania" },
                        { key: "c", text: "Branchiostoma" },
                        { key: "d", text: "Pila" }
                    ],
                    answer: "b",
                    explanation: "<i>Herdmania</i> (a urochordate) has a tubular heart whose peristaltic beat stops and restarts in the opposite direction every few minutes, so the blood flows alternately in the branchial and visceral directions. This reversal of heartbeat is unique among chordates."
                },
                {
                    id: "d20z63",
                    text: "Wax glands are possessed by:",
                    options: [
                        { key: "a", text: "Honey bee" },
                        { key: "b", text: "Earthworm" },
                        { key: "c", text: "Cockroach" },
                        { key: "d", text: "Mosquito" }
                    ],
                    answer: "a",
                    explanation: "Worker honey bees have four pairs of wax glands on the ventral side of abdominal segments 4–7. The wax secreted there is chewed and moulded into the hexagonal cells of the comb."
                },
                {
                    id: "d20z64",
                    text: "Measuring Biochemical Oxygen Demand (BOD) is a method used for:",
                    options: [
                        { key: "a", text: "Estimating the amount of organic matter in sewage water" },
                        { key: "b", text: "Working out the efficiency of oil-driven automobile engines" },
                        { key: "c", text: "Measuring the activity of Saccharomyces cerevisiae in producing curd on a commercial scale" },
                        { key: "d", text: "Working out the efficiency of RBCs in their capacity to carry oxygen" }
                    ],
                    answer: "a",
                    explanation: "BOD is the amount of dissolved oxygen consumed by aerobic micro-organisms while they oxidise the organic matter in a water sample (usually over 5 days at 20 °C). A high BOD therefore signals heavy organic pollution — it is the standard index of sewage strength."
                },
                {
                    id: "d20z65",
                    text: "Consumption of which one of the following foods can prevent the kind of blindness associated with vitamin 'A' deficiency?",
                    options: [
                        { key: "a", text: "Flavr Savr tomato" },
                        { key: "b", text: "Canola" },
                        { key: "c", text: "Golden rice" },
                        { key: "d", text: "Bt-brinjal" }
                    ],
                    answer: "c",
                    explanation: "Golden rice is transgenic rice engineered (with <i>psy</i> and <i>crtI</i> genes) to accumulate $\\beta$-carotene — provitamin A — in the endosperm, so it combats xerophthalmia and night blindness. Flavr Savr tomato has delayed ripening, Bt-brinjal is insect resistant, and canola was modified for oil quality."
                },
                {
                    id: "d20z66",
                    text: "A patient undergoing multi-drug therapy for tuberculosis shows reddish sweat and secretions as a side effect. This is most likely a consequence of the use of:",
                    options: [
                        { key: "a", text: "Rifampicin" },
                        { key: "b", text: "Isoniazid" },
                        { key: "c", text: "Ethambutol" },
                        { key: "d", text: "Moxifloxacin" }
                    ],
                    answer: "a",
                    explanation: "Rifampicin is itself an orange-red compound and is excreted in all body fluids, colouring urine, sweat, tears and saliva orange-red. The effect is harmless. Isoniazid causes peripheral neuropathy, ethambutol optic neuritis, and fluoroquinolones tendon problems."
                },
                {
                    id: "d20z67",
                    text: "Which of the following is the \"confirmatory test\" for HIV/AIDS?",
                    options: [
                        { key: "a", text: "ELISA" },
                        { key: "b", text: "Western blot test" },
                        { key: "c", text: "Mantoux test" },
                        { key: "d", text: "Widal test" }
                    ],
                    answer: "b",
                    explanation: "ELISA is the highly sensitive <i>screening</i> test, but false positives occur, so a reactive ELISA is confirmed by the highly specific <b>Western blot</b>, which detects antibodies against individual HIV proteins. The Mantoux test is for tuberculosis and the Widal test for typhoid."
                },
                {
                    id: "d20z68",
                    text: "The most common malignancy developed in AIDS patients is:",
                    options: [
                        { key: "a", text: "Leukemia" },
                        { key: "b", text: "Carcinoma" },
                        { key: "c", text: "Melanoma" },
                        { key: "d", text: "Kaposi sarcoma" }
                    ],
                    answer: "d",
                    explanation: "Kaposi's sarcoma, caused by human herpesvirus-8 in a severely immunosuppressed host, is the classic AIDS-defining cancer and appears as purplish vascular skin lesions. Non-Hodgkin lymphoma and invasive cervical cancer are the other AIDS-defining malignancies."
                },
                {
                    id: "d20z69",
                    text: "An example of a second-generation vaccine is the vaccine for:",
                    options: [
                        { key: "a", text: "Hepatitis B virus" },
                        { key: "b", text: "AIDS" },
                        { key: "c", text: "Herpes" },
                        { key: "d", text: "Malaria" }
                    ],
                    answer: "a",
                    explanation: "First-generation vaccines use whole killed or attenuated organisms; second-generation vaccines use purified subunits or recombinant antigens. The hepatitis-B vaccine — recombinant HBsAg produced in yeast — is the standard textbook example. Third-generation vaccines are DNA/mRNA vaccines."
                },
                {
                    id: "d20z70",
                    text: "A Pap smear test is conducted to detect cervical cancer in the female. The layer of tissue collected as a sample during the test is:",
                    options: [
                        { key: "a", text: "Non-keratinized stratified squamous epithelium" },
                        { key: "b", text: "Keratinized stratified squamous epithelium" },
                        { key: "c", text: "Columnar epithelium" },
                        { key: "d", text: "Stratified cuboidal epithelium" }
                    ],
                    answer: "a",
                    explanation: "The ectocervix and vagina are lined by moist, <b>non-keratinized</b> stratified squamous epithelium, and it is those exfoliated cells (from the transformation zone) that are scraped and examined in a Pap smear. Keratinized stratified squamous epithelium is found in the epidermis of skin."
                },
                {
                    id: "d20z71",
                    text: "During an injury the nasal septum gets damaged. For its repair, which cartilage is preferred?",
                    options: [
                        { key: "a", text: "Hyaline cartilage" },
                        { key: "b", text: "Elastic cartilage" },
                        { key: "c", text: "Fibrous cartilage" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "a",
                    explanation: "The septal cartilage of the nose is itself hyaline cartilage, so a hyaline graft matches the original tissue in strength, smoothness and shape. Elastic cartilage occurs in the pinna and epiglottis, fibrocartilage in intervertebral discs and pubic symphysis."
                },
                {
                    id: "d20z72",
                    text: "Which of the following substances, if introduced into the blood stream, would cause coagulation of blood at the site of its introduction?",
                    options: [
                        { key: "a", text: "Thromboplastin" },
                        { key: "b", text: "Fibrinogen" },
                        { key: "c", text: "Prothrombin" },
                        { key: "d", text: "Calcium phosphate" }
                    ],
                    answer: "a",
                    explanation: "Thromboplastin (tissue factor, factor III) is the trigger of the extrinsic pathway: it converts prothrombin to thrombin, which then converts fibrinogen to fibrin. Fibrinogen and prothrombin are already circulating as inactive precursors, so adding more of them starts nothing."
                },
                {
                    id: "d20z73",
                    text: "Which structural part of the neuron is specifically adapted to receive incoming nerve impulses and carry them toward the cell body?",
                    options: [
                        { key: "a", text: "Axon" },
                        { key: "b", text: "Dendrites" },
                        { key: "c", text: "Axon hillock" },
                        { key: "d", text: "Bone marrow" }
                    ],
                    answer: "b",
                    explanation: "Dendrites are short, branched cytoplasmic processes containing Nissl granules; they bear the postsynaptic receptors and conduct impulses <i>towards</i> the cyton. The axon conducts away from it, and the axon hillock is merely the trigger zone where the action potential is generated."
                },
                {
                    id: "d20z74",
                    text: "The hinder free part of the soft palate, which hangs down freely as a small flap, is called:",
                    options: [
                        { key: "a", text: "Rugae" },
                        { key: "b", text: "Uvula" },
                        { key: "c", text: "Frenulum" },
                        { key: "d", text: "Sulcus terminalis" }
                    ],
                    answer: "b",
                    explanation: "The uvula is the conical projection at the free posterior margin of the soft palate; during swallowing it closes the nasopharynx. Rugae are folds of the stomach/hard palate, the frenulum anchors the tongue, and the sulcus terminalis is the V-shaped groove on the tongue."
                },
                {
                    id: "d20z75",
                    text: "A 60-year-old man develops chest pain while climbing stairs due to narrowing of the coronary arteries. The most likely condition is:",
                    options: [
                        { key: "a", text: "Anaemia" },
                        { key: "b", text: "Atherosclerosis" },
                        { key: "c", text: "Arteriosclerosis" },
                        { key: "d", text: "Hypertension" }
                    ],
                    answer: "b",
                    explanation: "Atherosclerosis is the deposition of lipid-rich plaques inside the arterial intima, which narrows the coronary lumen; exertion raises oxygen demand beyond supply and causes angina pectoris. Arteriosclerosis is the general hardening/loss of elasticity of arterial walls, a broader and less specific change."
                },
                {
                    id: "d20z76",
                    text: "Which statement about the suprarenal gland is <b>incorrect</b>?",
                    options: [
                        { key: "a", text: "It has a dual germ-layer origin — outer cortex from mesoderm, inner medulla from ectoderm" },
                        { key: "b", text: "It is also known as the 4S and 3F gland" },
                        { key: "c", text: "Destruction of the adrenal cortex can lead to Addison's disease" },
                        { key: "d", text: "Fat redistribution (buffalo hump, moon face) is a feature of Conn's disease" }
                    ],
                    answer: "d",
                    explanation: "Buffalo hump and moon face are the classic signs of <b>Cushing's syndrome</b> (excess glucocorticoids). Conn's syndrome is primary hyperaldosteronism, causing hypertension and hypokalaemia. The other three statements are correct — the medulla is neural-crest (ectodermal) in origin, and adrenaline is the 4S/3F hormone (stress, fight, flight, fright)."
                },
                {
                    id: "d20z77",
                    text: "Select the wrong pair:",
                    options: [
                        { key: "a", text: "Thermoregulatory centre – Hypothalamus" },
                        { key: "b", text: "1st discovered hormone – Secretin" },
                        { key: "c", text: "Oxytocin produced by – Hypothalamus" },
                        { key: "d", text: "Decreased levels of ADH – Polyuria, glycosuria" }
                    ],
                    answer: "d",
                    explanation: "Lack of ADH causes <i>diabetes insipidus</i>: the collecting ducts cannot reabsorb water, so there is polyuria and polydipsia — but the urine contains <b>no glucose</b>. Glycosuria belongs to diabetes mellitus. The other pairings are correct (secretin, described by Bayliss and Starling in 1902, was the first hormone discovered)."
                },
                {
                    id: "d20z78",
                    text: "\"Amount of air a person can inspire after a normal expiration\" is defined as:",
                    options: [
                        { key: "a", text: "Inspiratory Capacity (IC)" },
                        { key: "b", text: "Expiratory Capacity (EC)" },
                        { key: "c", text: "Functional Residual Capacity (FRC)" },
                        { key: "d", text: "Vital Capacity (VC)" }
                    ],
                    answer: "a",
                    explanation: "Inspiratory capacity $=$ tidal volume $+$ inspiratory reserve volume $\\approx500+3000=3500$ mL — exactly the air that can be taken in starting from the end of a normal expiration. FRC is what remains in the lungs after a normal expiration $(\\mathrm{ERV+RV})$ and VC is the maximum exchangeable volume."
                },
                {
                    id: "d20z79",
                    text: "In the large intestine, several small pouch-like segments are called:",
                    options: [
                        { key: "a", text: "Haustra" },
                        { key: "b", text: "Nephrons" },
                        { key: "c", text: "Compartments" },
                        { key: "d", text: "Both (a) and (b)" }
                    ],
                    answer: "a",
                    explanation: "The three longitudinal bands of the colon (taeniae coli) are shorter than the gut itself, so the wall is gathered into a chain of sacculations called <b>haustra</b>, which slow the contents and help water absorption. Nephrons are the functional units of the kidney."
                },
                {
                    id: "d20z80",
                    text: "Identify the wrong pair:",
                    options: [
                        { key: "a", text: "Lining the ventricle and secreting CSF – Ependymal cells" },
                        { key: "b", text: "Outer white and inner grey matter – Spinal cord" },
                        { key: "c", text: "Lateral ventricles communicate with the third ventricle – Foramen of Monro" },
                        { key: "d", text: "Olfactory epithelium – Multipolar neurons" }
                    ],
                    answer: "d",
                    explanation: "The olfactory receptor cells are <b>bipolar</b> neurons — one dendrite bearing cilia in the mucus and one axon passing through the cribriform plate. Multipolar neurons are typical of the spinal cord and motor pathways. The other three pairings are correct."
                },
                {
                    id: "d20z81",
                    text: "The irregular sound heard over an artery when it is compressed (as in blood-pressure measurement) is:",
                    options: [
                        { key: "a", text: "Lubb" },
                        { key: "b", text: "Dub" },
                        { key: "c", text: "Korotkoff sound" },
                        { key: "d", text: "Murmur" }
                    ],
                    answer: "c",
                    explanation: "When a cuff partially compresses the brachial artery the flow becomes turbulent and produces the tapping <b>Korotkoff sounds</b>; their appearance marks the systolic and their disappearance the diastolic pressure. Lubb and dub are the normal valve sounds and a murmur arises from defective valves."
                },
                {
                    id: "d20z82",
                    text: "The capsule enclosing the testes of mammals is called the:",
                    options: [
                        { key: "a", text: "Tunica albuginea" },
                        { key: "b", text: "Tunica vaginalis" },
                        { key: "c", text: "Tunica vasculosa" },
                        { key: "d", text: "Tunica membrana" }
                    ],
                    answer: "a",
                    explanation: "The tunica albuginea is the tough, whitish fibrous capsule immediately surrounding the testis; its inward septa divide the organ into testicular lobules. The tunica vaginalis is the outer serous sac derived from the peritoneum and the tunica vasculosa is the innermost vascular layer."
                },
                {
                    id: "d20z83",
                    text: "The time required for the filtration of the whole blood in a patient in whom one kidney has failed is about:",
                    options: [
                        { key: "a", text: "40 min" },
                        { key: "b", text: "80 min" },
                        { key: "c", text: "120 min" },
                        { key: "d", text: "4 min" }
                    ],
                    answer: "b",
                    explanation: "Two normal kidneys filter about 1100–1200 mL of blood per minute and process the body's entire blood volume roughly every 40 minutes. With only one functioning kidney the filtering surface is halved, so the same job takes about twice as long — 80 minutes."
                },
                {
                    id: "d20z84",
                    text: "Ora serrata is found in the:",
                    options: [
                        { key: "a", text: "Conjunctiva" },
                        { key: "b", text: "Cornea" },
                        { key: "c", text: "Sclera" },
                        { key: "d", text: "Retina" }
                    ],
                    answer: "d",
                    explanation: "The ora serrata is the serrated (wavy) anterior margin at which the photosensitive part of the retina ends and the non-photosensitive ciliary epithelium begins."
                },
                {
                    id: "d20z85",
                    text: "Merkel's discs and Meissner's corpuscles are found in the:",
                    options: [
                        { key: "a", text: "Skin of frog" },
                        { key: "b", text: "Skin of mammal" },
                        { key: "c", text: "Skin of toad" },
                        { key: "d", text: "Skin of earthworm" }
                    ],
                    answer: "b",
                    explanation: "Both are cutaneous mechanoreceptors of <b>mammalian</b> skin: Merkel's discs are slowly-adapting touch/pressure receptors in the stratum basale, while Meissner's corpuscles are rapidly-adapting light-touch receptors in the dermal papillae of hairless skin (finger tips, lips, palms)."
                },
                {
                    id: "d20z86",
                    text: "Transgenic plants are the ones:",
                    options: [
                        { key: "a", text: "Generated by introducing foreign DNA into a cell and regenerating a plant from that cell" },
                        { key: "b", text: "Produced after protoplast fusion in artificial medium" },
                        { key: "c", text: "Grown in artificial medium after hybridization in the field" },
                        { key: "d", text: "Produced by a somatic embryo in artificial medium" }
                    ],
                    answer: "a",
                    explanation: "A transgenic plant by definition carries a foreign gene stably integrated in its genome — introduced by <i>Agrobacterium</i>, a gene gun or electroporation — and is then regenerated by tissue culture. Protoplast fusion gives somatic hybrids/cybrids and somatic embryogenesis gives clones, neither of which involves a transgene."
                },
                {
                    id: "d20z87",
                    text: "Why is amniocentesis not done before 12 weeks?",
                    options: [
                        { key: "a", text: "Neural tube defects cannot be detected before 12 weeks" },
                        { key: "b", text: "High risk of loss of foetus" },
                        { key: "c", text: "DNA gets degenerated" },
                        { key: "d", text: "Loss of immunological cells from the foetus" }
                    ],
                    answer: "b",
                    explanation: "Before about 14–15 weeks there is very little amniotic fluid and few viable fetal cells, so early amniocentesis carries a markedly higher rate of miscarriage, amniotic-fluid leakage and talipes. For that reason the procedure is normally deferred to the second trimester."
                },
                {
                    id: "d20z88",
                    text: "The uterine layer of the human being that is sloughed off during each menstruation is the:",
                    options: [
                        { key: "a", text: "Stratum functionalis" },
                        { key: "b", text: "Stratum basalis" },
                        { key: "c", text: "Perimetrium" },
                        { key: "d", text: "Myometrium" }
                    ],
                    answer: "a",
                    explanation: "The endometrium has two layers. The superficial <b>stratum functionalis</b> is built up under oestrogen and progesterone and is shed when the corpus luteum regresses; the deep stratum basalis is retained and regenerates the functional layer in the next cycle."
                },
                {
                    id: "d20z89",
                    text: "The volume of urine is regulated by:",
                    options: [
                        { key: "a", text: "ADH and aldosterone" },
                        { key: "b", text: "Oxytocin and placenta" },
                        { key: "c", text: "Progesterone and oestrogen" },
                        { key: "d", text: "Thyroxine and aldosterone" }
                    ],
                    answer: "a",
                    explanation: "ADH (vasopressin) makes the distal tubule and collecting duct permeable to water, so more water is reabsorbed and less urine is passed. Aldosterone promotes $\\mathrm{Na^+}$ reabsorption in the distal tubule, and water follows osmotically — together they set the final urine volume."
                },
                {
                    id: "d20z90",
                    text: "Which pair of cranial nerves is of the mixed type?",
                    options: [
                        { key: "a", text: "Olfactory and optic" },
                        { key: "b", text: "Facial and vagus" },
                        { key: "c", text: "Oculomotor and abducens" },
                        { key: "d", text: "Trigeminal and olfactory" }
                    ],
                    answer: "b",
                    explanation: "Mixed cranial nerves carry both sensory and motor fibres: V (trigeminal), VII (facial), IX (glossopharyngeal) and X (vagus). So the facial + vagus pair is mixed. Olfactory and optic are purely sensory, while oculomotor and abducens are purely motor (note that (d) fails because the olfactory nerve is sensory only)."
                }
            ]
        }
        ,
        {
            id: "bot20",
            name: "Botany",
            subject: "Botany",
            accent: "emerald",
            blurb: "Q91–130 · plant anatomy & physiology, ecology, cell biology, genetics, molecular biology and plant diversity.",
            questions: [
                {
                    id: "d20b91",
                    text: "Which of the following medicinal plant–drug pairs is <b>incorrectly</b> matched?",
                    options: [
                        { key: "a", text: "<i>Azadirachta indica</i> – Nimbin" },
                        { key: "b", text: "<i>Ocimum sanctum</i> – Eugenol" },
                        { key: "c", text: "<i>Zingiber officinale</i> – Gingerol" },
                        { key: "d", text: "<i>Rauwolfia serpentina</i> – Vincristine" }
                    ],
                    answer: "d",
                    explanation: "<i>Rauwolfia serpentina</i> (sarpagandha) yields the antihypertensive alkaloid <b>reserpine</b>. Vincristine and vinblastine, the anticancer alkaloids, come from <i>Catharanthus roseus</i> (periwinkle). The other three pairings are correct."
                },
                {
                    id: "d20b92",
                    text: "To obtain disease-free plants through tissue culture techniques, the best method is:",
                    options: [
                        { key: "a", text: "Protoplast culture" },
                        { key: "b", text: "Meristem culture" },
                        { key: "c", text: "Embryo rescue" },
                        { key: "d", text: "Anther culture" }
                    ],
                    answer: "b",
                    explanation: "The apical meristem has no vascular connection and divides so fast that viruses cannot keep pace, so it is virtually virus-free. Culturing that tip (meristem/shoot-tip culture) therefore regenerates virus-free plants — the routine method for potato, banana and sugarcane."
                },
                {
                    id: "d20b93",
                    text: "The oldest layer of the secondary phloem in a stem lies:",
                    options: [
                        { key: "a", text: "Outward to the primary phloem" },
                        { key: "b", text: "Outward to the vascular cambium" },
                        { key: "c", text: "Inward to the primary phloem" },
                        { key: "d", text: "Inward to the vascular cambium" }
                    ],
                    answer: "c",
                    explanation: "The cambium cuts off secondary phloem towards the outside, so each new layer is pushed <i>inside</i> the earlier ones. From the surface inwards the order is: primary phloem &rarr; oldest secondary phloem &rarr; younger secondary phloem &rarr; cambium. The oldest secondary phloem therefore sits immediately inward of the primary phloem."
                },
                {
                    id: "d20b94",
                    text: "Which of the following is genetically similar to autogamy, but still requires pollinators?",
                    options: [
                        { key: "a", text: "Geitonogamy" },
                        { key: "b", text: "Cleistogamy" },
                        { key: "c", text: "Apogamy" },
                        { key: "d", text: "Xenogamy" }
                    ],
                    answer: "a",
                    explanation: "In geitonogamy pollen is transferred to the stigma of a <i>different flower on the same plant</i>. Genetically it is self-pollination (the pollen is from the same individual), but functionally it is cross-pollination because it needs an external agent. Cleistogamy is obligate autogamy in closed flowers and needs no vector."
                },
                {
                    id: "d20b95",
                    text: "Dichogamy, a floral mechanism that favours cross-pollination, is one in which:",
                    options: [
                        { key: "a", text: "Anthers and stigma are placed at different levels" },
                        { key: "b", text: "Stamens and stigma mature at different times" },
                        { key: "c", text: "The structure of the anther and stigma acts as a barrier" },
                        { key: "d", text: "Pollen is unable to germinate on its own stigma" }
                    ],
                    answer: "b",
                    explanation: "Dichogamy = different <i>times</i> of maturity (protandry: anthers first, as in sunflower; protogyny: stigma first, as in <i>Mirabilis</i>). Different <i>levels</i> is herkogamy, and failure of pollen to germinate on its own stigma is self-incompatibility."
                },
                {
                    id: "d20b96",
                    text: "Restriction endonucleases are used in genetic engineering because:",
                    options: [
                        { key: "a", text: "They can degrade harmful proteins" },
                        { key: "b", text: "They can join DNA fragments" },
                        { key: "c", text: "They can cut DNA at specific base sequences" },
                        { key: "d", text: "They can cut DNA at variable sites" }
                    ],
                    answer: "c",
                    explanation: "A restriction endonuclease recognises a specific palindromic sequence (e.g. <i>Eco</i>RI cuts $\\mathrm{GAATTC}$ between G and A) and cuts there every time, producing identical sticky ends on vector and insert. Joining is done afterwards by DNA ligase."
                },
                {
                    id: "d20b97",
                    text: "Which of the following statements is correct?",
                    options: [
                        { key: "a", text: "RuBisCO is present in the mesophyll cells of $C_4$ plants" },
                        { key: "b", text: "RuBisCO is present in the mesophyll cells of $C_3$ plants" },
                        { key: "c", text: "PEPcase is present in the bundle-sheath cells of $C_4$ plants" },
                        { key: "d", text: "Both RuBisCO and PEPcase are present in the mesophyll cells of $C_4$ plants" }
                    ],
                    answer: "b",
                    explanation: "$C_3$ plants have only one type of photosynthetic cell, the mesophyll, and RuBisCO works there. In $C_4$ plants (Kranz anatomy) the division of labour is strict: PEP carboxylase in the mesophyll fixes $\\mathrm{CO_2}$ into oxaloacetate, while RuBisCO is confined to the bundle-sheath cells."
                },
                {
                    id: "d20b98",
                    text: "Which one of the following would be an example of chemotactic movement?",
                    options: [
                        { key: "a", text: "Movement of moss antherozoids in response to cane sugar secreted by archegonia" },
                        { key: "b", text: "Movement of fern antherozoids towards the archegonium in response to malic acid" },
                        { key: "c", text: "Growth of the pollen tube on the stigma" },
                        { key: "d", text: "Growth of the pollen grain inside the anther" }
                    ],
                    answer: "a",
                    explanation: "Chemotaxis is the locomotory movement of a whole free-swimming cell along a chemical gradient. Moss antherozoids swim towards the sucrose (cane sugar) released by the archegonial neck — the standard textbook example, and the key taken by this paper. <br><i>Note:</i> option (b) — fern antherozoids swimming towards malic acid — is equally a genuine case of chemotaxis, so this item has two defensible answers. Options (c) and (d) are growth movements (chemotropism), not taxis."
                },
                {
                    id: "d20b99",
                    text: "Complex II of the mitochondrial electron transport chain is also known as:",
                    options: [
                        { key: "a", text: "Cytochrome c oxidase" },
                        { key: "b", text: "NADH dehydrogenase" },
                        { key: "c", text: "Cytochrome $bc_1$" },
                        { key: "d", text: "Succinate dehydrogenase" }
                    ],
                    answer: "d",
                    explanation: "Complex II is succinate dehydrogenase — the only enzyme shared by the Krebs cycle and the ETC. It hands electrons from $\\mathrm{FADH_2}$ straight to ubiquinone and pumps <i>no</i> protons, which is why $\\mathrm{FADH_2}$ yields fewer ATP than NADH. Complex I is NADH dehydrogenase, III is cytochrome $bc_1$ and IV is cytochrome c oxidase."
                },
                {
                    id: "d20b100",
                    text: "If a cell is fully turgid, which of the following would be zero?",
                    options: [
                        { key: "a", text: "Turgor pressure" },
                        { key: "b", text: "Wall pressure" },
                        { key: "c", text: "Diffusion Pressure Deficit (DPD)" },
                        { key: "d", text: "Osmotic pressure" }
                    ],
                    answer: "c",
                    explanation: "$\\mathrm{DPD}=\\mathrm{OP}-\\mathrm{TP}$. At full turgor the turgor pressure has risen until it equals the osmotic pressure, so $\\mathrm{DPD}=0$ and the cell can absorb no more water. Turgor pressure and wall pressure are then maximum, not zero."
                },
                {
                    id: "d20b101",
                    text: "In short-day plants, flowering is induced by:",
                    options: [
                        { key: "a", text: "Long night" },
                        { key: "b", text: "Photoperiod of less than 12 hours" },
                        { key: "c", text: "Photoperiod less than the critical value together with an uninterrupted long night" },
                        { key: "d", text: "Darkness less than the critical value and long uninterrupted daylight" }
                    ],
                    answer: "c",
                    explanation: "Short-day plants are really <i>long-night</i> plants: the light period must be shorter than a critical value <b>and</b> the dark period must exceed a critical length without interruption. A single flash of red light in the middle of the night (night break) converts $P_r$ to $P_{fr}$ and blocks flowering, proving that the continuity of darkness is what matters."
                },
                {
                    id: "d20b102",
                    text: "A conjoint, collateral and open vascular bundle is found in:",
                    options: [
                        { key: "a", text: "Dicot root" },
                        { key: "b", text: "Dicot stem" },
                        { key: "c", text: "Monocot root" },
                        { key: "d", text: "Monocot stem" }
                    ],
                    answer: "b",
                    explanation: "\"Conjoint\" = xylem and phloem in the same bundle; \"collateral\" = phloem outside the xylem on the same radius; \"open\" = a strip of cambium between them allowing secondary growth. This is the dicot stem. The monocot stem is conjoint, collateral but <i>closed</i>, while roots have radial bundles."
                },
                {
                    id: "d20b103",
                    text: "The loss of water in the form of water droplets along with minerals takes place from small pores at the leaf margin. These pores are called:",
                    options: [
                        { key: "a", text: "Hydathodes" },
                        { key: "b", text: "Lenticels" },
                        { key: "c", text: "Stomata" },
                        { key: "d", text: "Auricles" }
                    ],
                    answer: "a",
                    explanation: "Guttation occurs through hydathodes (water stomata) at the vein endings on the leaf margin. They stay permanently open and, being fed directly by the xylem under root pressure, release liquid water containing dissolved minerals — unlike stomata, which release water vapour."
                },
                {
                    id: "d20b104",
                    text: "Passage cells are thin-walled cells found in:",
                    options: [
                        { key: "a", text: "Phloem elements that serve as entry points for substances to be transported to other plant parts" },
                        { key: "b", text: "The testa of seeds, to enable emergence of the growing embryonic axis during germination" },
                        { key: "c", text: "The central region of the style, through which the pollen tube grows towards the ovary" },
                        { key: "d", text: "The endodermis of roots, facilitating rapid transport of water from the cortex to the pericycle" }
                    ],
                    answer: "d",
                    explanation: "Most endodermal cells develop suberised Casparian strips that block the apoplast. A few cells opposite the protoxylem remain thin-walled and unsuberised — the <b>passage cells</b> — and provide the route by which water and salts pass from the cortex into the pericycle and stele."
                },
                {
                    id: "d20b105",
                    text: "Which geological process stores carbon long-term in the Earth's crust?",
                    options: [
                        { key: "a", text: "Volcanism" },
                        { key: "b", text: "Sedimentation and fossilization" },
                        { key: "c", text: "Photosynthesis" },
                        { key: "d", text: "Transpiration" }
                    ],
                    answer: "b",
                    explanation: "Carbon is locked away for millions of years when dead organisms and carbonate shells are buried in sediments and converted into limestone, coal, oil and natural gas. Volcanism <i>releases</i> $\\mathrm{CO_2}$ back to the atmosphere, and photosynthesis stores carbon only for the short biological term."
                },
                {
                    id: "d20b106",
                    text: "Succession is the order of colonization of species in an ecosystem starting from a barren or destroyed area of land. If succession occurs on bare rock, it is:",
                    options: [
                        { key: "a", text: "Primary succession" },
                        { key: "b", text: "Secondary succession" },
                        { key: "c", text: "Tertiary succession" },
                        { key: "d", text: "Quaternary succession" }
                    ],
                    answer: "a",
                    explanation: "Primary succession begins where no soil and no living community ever existed — bare rock, new volcanic lava, or a fresh sand dune — and is pioneered by lichens (xerarch/lithosere). Secondary succession begins on land that already has soil after a disturbance such as fire or abandoned cultivation, and is therefore much faster."
                },
                {
                    id: "d20b107",
                    text: "In hydrophytes, the reduced vascular tissue is primarily due to:",
                    options: [
                        { key: "a", text: "Greater photosynthesis" },
                        { key: "b", text: "Lack of transpiration pull" },
                        { key: "c", text: "Weak sunlight penetration" },
                        { key: "d", text: "Lack of root hairs" }
                    ],
                    answer: "b",
                    explanation: "A submerged plant absorbs water and salts over its entire surface and loses almost no water, so there is virtually no transpiration pull and no need for long-distance conduction. Xylem is therefore poorly developed (often reduced to a lacuna), while aerenchyma is well developed for buoyancy and gas storage."
                },
                {
                    id: "d20b108",
                    text: "What happens if the decomposers in an ecosystem are destroyed?",
                    options: [
                        { key: "a", text: "The mineral cycle is stopped" },
                        { key: "b", text: "The energy cycle will be stopped" },
                        { key: "c", text: "Photochemical change will be absent" },
                        { key: "d", text: "Rate of decomposition of minerals will increase" }
                    ],
                    answer: "a",
                    explanation: "Decomposers mineralise dead organic matter and return $\\mathrm{N},\\ \\mathrm{P},\\ \\mathrm{S}$ and carbon to the soil and air. Without them nutrients stay locked in detritus and the biogeochemical (mineral) cycles halt. Note that energy <i>flows</i> unidirectionally and is never cycled, so (b) is wrong in principle."
                },
                {
                    id: "d20b109",
                    text: "Which level of protein structure is determined by the sequence of amino acids in a protein?",
                    options: [
                        { key: "a", text: "Primary structure" },
                        { key: "b", text: "Secondary structure" },
                        { key: "c", text: "Tertiary structure" },
                        { key: "d", text: "Quaternary structure" }
                    ],
                    answer: "a",
                    explanation: "The primary structure <i>is</i> the linear sequence of amino acids joined by peptide bonds. (Higher levels are ultimately dictated by that sequence, but the level defined by it is the primary structure.)"
                },
                {
                    id: "d20b110",
                    text: "Which of the following is a non-reducing sugar?",
                    options: [
                        { key: "a", text: "Glucose" },
                        { key: "b", text: "Galactose" },
                        { key: "c", text: "Lactose" },
                        { key: "d", text: "Trehalose" }
                    ],
                    answer: "d",
                    explanation: "In trehalose the two glucose units are joined $\\alpha1\\rightarrow1\\alpha$, i.e. through <i>both</i> anomeric carbons, so no free aldehyde group remains and it cannot reduce Fehling's or Benedict's reagent. Glucose and galactose are reducing monosaccharides and lactose has a free anomeric carbon on its glucose unit."
                },
                {
                    id: "d20b111",
                    text: "Crossing over takes place between which chromatids and at which stage of the cell cycle?",
                    options: [
                        { key: "a", text: "Non-sister chromatids of non-homologous chromosomes at zygotene of Prophase I" },
                        { key: "b", text: "Non-sister chromatids of homologous chromosomes at pachytene of Prophase I" },
                        { key: "c", text: "Non-sister chromatids of homologous chromosomes at zygotene of Prophase I" },
                        { key: "d", text: "Non-sister chromatids of non-homologous chromosomes at pachytene of Prophase I" }
                    ],
                    answer: "b",
                    explanation: "Synapsis (pairing) with the synaptonemal complex is completed in zygotene; the actual exchange of segments between non-sister chromatids of a homologous pair — catalysed by recombination nodules containing recombinase — happens in <b>pachytene</b>. The chiasmata become visible later, in diplotene."
                },
                {
                    id: "d20b112",
                    text: "Cell is the fundamental structural and functional unit of all living organisms because:",
                    options: [
                        { key: "a", text: "Anything less than a complete structure of a cell does not ensure independent living" },
                        { key: "b", text: "The metabolic reactions can only occur inside a living cell" },
                        { key: "c", text: "Nucleic acids present in the cells ensure the living state" },
                        { key: "d", text: "The membrane-bound organelles cause differentiation for proper functioning" }
                    ],
                    answer: "a",
                    explanation: "The cell is the smallest unit that is capable of independent existence — it can take in materials, metabolise, grow, respond and reproduce on its own. Sub-cellular fragments (organelles, viruses) cannot. Metabolic reactions can also be run in vitro, so (b) is untrue, and prokaryotes have no membrane-bound organelles, so (d) fails."
                },
                {
                    id: "d20b113",
                    text: "Identify the meiotic stage in which the homologous chromosomes separate while the sister chromatids remain associated at their centromeres:",
                    options: [
                        { key: "a", text: "Metaphase I" },
                        { key: "b", text: "Metaphase II" },
                        { key: "c", text: "Anaphase I" },
                        { key: "d", text: "Anaphase II" }
                    ],
                    answer: "c",
                    explanation: "In anaphase I the homologues of each bivalent are pulled to opposite poles (this is the reductional division, $2n\\to n$), but their centromeres do <b>not</b> split, so each chromosome still travels as two sister chromatids. The centromeres divide only in anaphase II."
                },
                {
                    id: "d20b114",
                    text: "The Golgi complex is a part of the endomembrane system (EMS) of a cell. The major role of the Golgi complex is:",
                    options: [
                        { key: "a", text: "An energy-transferring organelle" },
                        { key: "b", text: "In post-translational modification of proteins and glycosidation of lipids" },
                        { key: "c", text: "In trapping light and transforming it into chemical energy" },
                        { key: "d", text: "In digesting proteins and carbohydrates by hydrolytic enzymes" }
                    ],
                    answer: "b",
                    explanation: "The Golgi apparatus receives proteins from the ER at its <i>cis</i> face, glycosylates, phosphorylates and sorts them, and packages them into vesicles at the <i>trans</i> face — it also forms glycolipids and, in plants, cell-plate material. Energy transfer is mitochondrial, light trapping is in chloroplasts, and hydrolysis is by lysosomes."
                },
                {
                    id: "d20b115",
                    text: "According to the widely accepted fluid-mosaic model, cell membranes are semi-fluid, where lipids and integral proteins can diffuse randomly. In recent years this model has been modified in several respects. In this regard, which of the following statements is <b>incorrect</b>?",
                    options: [
                        { key: "a", text: "Proteins in cell membranes can travel within the lipid bilayer" },
                        { key: "b", text: "Proteins can also undergo flip-flop movements in the lipid bilayer" },
                        { key: "c", text: "Proteins can remain confined within certain domains of the membrane" },
                        { key: "d", text: "Many proteins remain completely embedded within the lipid bilayer" }
                    ],
                    answer: "b",
                    explanation: "Membrane proteins move laterally with ease but essentially never flip-flop: their bulky hydrophilic domains and attached sugars would have to be dragged through the hydrophobic core, an energetically prohibitive step. Even for lipids the transverse flip-flop is rare and needs flippase enzymes."
                },
                {
                    id: "d20b116",
                    text: "Which of the following statements is correct with reference to the flowers of the family Solanaceae?",
                    options: [
                        { key: "a", text: "Pentamerous, zygomorphic, bisexual, epigynous" },
                        { key: "b", text: "Pentamerous, actinomorphic, unisexual, hypogynous" },
                        { key: "c", text: "Trimerous, actinomorphic, bisexual, hypogynous" },
                        { key: "d", text: "Pentamerous, bisexual, actinomorphic, hypogynous" }
                    ],
                    answer: "d",
                    explanation: "Solanaceae flowers are pentamerous (K$_{(5)}$ C$_{(5)}$ A$_5$ G$_{(2)}$), radially symmetrical (actinomorphic), bisexual and hypogynous with a superior ovary, axile placentation and an obliquely placed bicarpellary gynoecium."
                },
                {
                    id: "d20b117",
                    text: "One of the given sets of characters is related to the family having vexillary aestivation of the corolla. Recognize it.",
                    options: [
                        { key: "a", text: "Epiphyllous stamens and axile placentation" },
                        { key: "b", text: "Diadelphous stamens and marginal placentation" },
                        { key: "c", text: "Syngenesious stamens and basal placentation" },
                        { key: "d", text: "Scutellum as cotyledon and basal placentation" }
                    ],
                    answer: "b",
                    explanation: "Vexillary (papilionaceous) aestivation — a large standard covering two wings which cover the keel — belongs to Fabaceae/Papilionoideae. That family also shows diadelphous stamens $(9)+1$ and a monocarpellary ovary with marginal placentation. Syngenesious stamens are Asteraceae, epiphyllous stamens Liliaceae, and a scutellum is the monocot cotyledon of Poaceae."
                },
                {
                    id: "d20b118",
                    text: "In Pinus, the pollen grain has 6 chromosomes. Then its endosperm will have:",
                    options: [
                        { key: "a", text: "12" },
                        { key: "b", text: "18" },
                        { key: "c", text: "6" },
                        { key: "d", text: "24" }
                    ],
                    answer: "c",
                    explanation: "In gymnosperms there is <b>no</b> double fertilisation: the endosperm is simply the haploid female gametophyte formed before fertilisation. Since the pollen grain (male gametophyte) is haploid with $n=6$, the endosperm is also haploid and has 6 chromosomes. (In angiosperms it would have been triploid, 18.)"
                },
                {
                    id: "d20b119",
                    text: "Independent alternation of generation is found in:",
                    options: [
                        { key: "a", text: "Bryophyta" },
                        { key: "b", text: "Pteridophyta" },
                        { key: "c", text: "Gymnosperms" },
                        { key: "d", text: "Angiosperms" }
                    ],
                    answer: "b",
                    explanation: "In pteridophytes the sporophyte (the fern plant) and the gametophyte (the prothallus) both live as free, photosynthetic, independent individuals. In bryophytes the sporophyte is permanently attached to and dependent on the gametophyte, while in seed plants the gametophyte is reduced and retained inside the sporophyte."
                },
                {
                    id: "d20b120",
                    text: "The sporophyte indicates the diploid phase of the life cycle, and the zygote is the first cell of the sporophytic generation. The foot of a bryophyte sporophyte functions primarily to:",
                    options: [
                        { key: "a", text: "Absorb minerals from soil" },
                        { key: "b", text: "Anchor and absorb nutrients from the gametophyte" },
                        { key: "c", text: "Help in the transfer of gametes from the gametophyte to the sporophyte" },
                        { key: "d", text: "Help in photosynthesis" }
                    ],
                    answer: "b",
                    explanation: "The bryophyte sporophyte (foot, seta, capsule) is semi-parasitic on the gametophyte. The bulbous foot is embedded in the gametophyte tissue, fixing the sporophyte in place and drawing water and nutrients from it — it never touches the soil."
                },
                {
                    id: "d20b121",
                    text: "Which of the following is the primary component of the outer membrane in Gram-negative bacteria?",
                    options: [
                        { key: "a", text: "Peptidoglycan" },
                        { key: "b", text: "Lipoteichoic acid" },
                        { key: "c", text: "Lipopolysaccharide (LPS)" },
                        { key: "d", text: "Mycolic acid" }
                    ],
                    answer: "c",
                    explanation: "The outer leaflet of the Gram-negative outer membrane is built almost entirely of lipopolysaccharide (lipid A + core + O-antigen); lipid A is the endotoxin responsible for septic shock. Teichoic and lipoteichoic acids belong to Gram-positive walls and mycolic acid to acid-fast <i>Mycobacterium</i>."
                },
                {
                    id: "d20b122",
                    text: "Which term is used for the relationship between algae and fungi in which the alga lives as a slave and the fungus is the dominant organism?",
                    options: [
                        { key: "a", text: "Helotism" },
                        { key: "b", text: "Consortium" },
                        { key: "c", text: "Symbiosis" },
                        { key: "d", text: "Heliotropism" }
                    ],
                    answer: "a",
                    explanation: "In a lichen the fungus (mycobiont) forms most of the thallus, controls the association and takes the food manufactured by the alga (phycobiont). This master–slave view of the partnership is called <b>helotism</b>, a term first used by Crombie."
                },
                {
                    id: "d20b123",
                    text: "Fungi are known for many ecological roles like decomposers, mutualistic partners and structural stabilizers. What does the \"perfect stage\" of a fungus indicate?",
                    options: [
                        { key: "a", text: "It can reproduce asexually" },
                        { key: "b", text: "It is perfectly healthy" },
                        { key: "c", text: "It can reproduce by sexual spores" },
                        { key: "d", text: "It is a heterotrophic organism" }
                    ],
                    answer: "c",
                    explanation: "The teleomorph or \"perfect stage\" is the sexually reproducing phase that bears meiospores (ascospores or basidiospores). The asexual, conidia-producing phase is the anamorph or \"imperfect stage\" — fungi known only in that state used to be placed in Deuteromycetes (Fungi Imperfecti)."
                },
                {
                    id: "d20b124",
                    text: "The five-kingdom classification was proposed by the American ecologist R. H. Whittaker in 1969. The main basis of the five-kingdom classification is:",
                    options: [
                        { key: "a", text: "Mode of nutrition" },
                        { key: "b", text: "Structure of the nucleus" },
                        { key: "c", text: "Cell wall" },
                        { key: "d", text: "Sexual reproduction" }
                    ],
                    answer: "a",
                    explanation: "Whittaker used cell structure, body organisation, reproduction and phylogeny, but the criterion that actually separates his three multicellular kingdoms is the <b>mode of nutrition</b> — autotrophic Plantae, absorptive (saprotrophic/parasitic) Fungi and ingestive Animalia."
                },
                {
                    id: "d20b125",
                    text: "Any change during cell division that results in the loss or gain of one or more chromosomes is known as:",
                    options: [
                        { key: "a", text: "Aneuploidy" },
                        { key: "b", text: "Euploidy" },
                        { key: "c", text: "Monoploidy" },
                        { key: "d", text: "Hypoploidy" }
                    ],
                    answer: "a",
                    explanation: "Aneuploidy is a change in a <i>few</i> chromosomes caused by non-disjunction — e.g. trisomy 21 (Down's), monosomy X (Turner's). Euploidy is a change in whole sets of chromosomes (triploid, tetraploid). Hypoploidy is only the deficiency sub-type of aneuploidy, so the general term is aneuploidy."
                },
                {
                    id: "d20b126",
                    text: "The probability that a male inherited his Y-chromosome from his maternal grandfather is:",
                    options: [
                        { key: "a", text: "0%" },
                        { key: "b", text: "25%" },
                        { key: "c", text: "50%" },
                        { key: "d", text: "100%" }
                    ],
                    answer: "a",
                    explanation: "A boy always receives his Y from his father and his X from his mother. The mother, being XX, could only have received an X from her own father, so no part of the maternal grandfather's Y can ever reach the grandson — the probability is 0 %. (A male's Y always traces back to his <i>paternal</i> grandfather.)"
                },
                {
                    id: "d20b127",
                    text: "In a cross between $TTRR\\times ttrr$, what percentage of the resulting progeny will be tall, red-flowered plants?",
                    options: [
                        { key: "a", text: "25%" },
                        { key: "b", text: "50%" },
                        { key: "c", text: "75%" },
                        { key: "d", text: "100%" }
                    ],
                    answer: "d",
                    explanation: "$TTRR$ produces only $TR$ gametes and $ttrr$ only $tr$ gametes, so every $F_1$ individual is $TtRr$. With $T$ (tall) and $R$ (red) dominant, all of them show the tall red phenotype — 100 %. The familiar $9:3:3:1$ appears only in the $F_2$."
                },
                {
                    id: "d20b128",
                    text: "Which of the following statements is <b>false</b> regarding the enzyme DNA polymerase that catalyses the elongation of complementary DNA strands?",
                    options: [
                        { key: "a", text: "DNA polymerase III is a highly processive enzyme" },
                        { key: "b", text: "DNA polymerase III possesses $5'\\rightarrow3'$ polymerase activity required for elongation" },
                        { key: "c", text: "DNA polymerase III possesses $3'\\rightarrow5'$ exonuclease activity important for maintaining fidelity" },
                        { key: "d", text: "They can initiate DNA synthesis on their own" }
                    ],
                    answer: "d",
                    explanation: "No DNA polymerase can start a chain <i>de novo</i>: each needs a free $3'$-OH, which is supplied by a short RNA primer laid down by primase. The other three statements are true — Pol III is highly processive, synthesises $5'\\rightarrow3'$ and proofreads with a $3'\\rightarrow5'$ exonuclease."
                },
                {
                    id: "d20b129",
                    text: "According to the central dogma of molecular biology, DNA is first transcribed to RNA and then translated into protein. The RNA formed immediately after transcription is called:",
                    options: [
                        { key: "a", text: "Small nuclear RNA (snRNA)" },
                        { key: "b", text: "Heterogeneous nuclear RNA (hnRNA)" },
                        { key: "c", text: "Ribonucleoproteins (RNPs)" },
                        { key: "d", text: "Soluble RNA (tRNA)" }
                    ],
                    answer: "b",
                    explanation: "The primary eukaryotic transcript is hnRNA — it still contains introns and lacks a cap and tail. Capping, tailing and splicing (by snRNPs) then convert it into mature mRNA that leaves the nucleus."
                },
                {
                    id: "d20b130",
                    text: "Genetic codons are combinations of triplet bases that code for an amino acid, but a single amino acid can be coded by multiple codons. This property of the genetic code is that:",
                    options: [
                        { key: "a", text: "Genetic codes are unambiguous" },
                        { key: "b", text: "Genetic codes are degenerate" },
                        { key: "c", text: "Genetic codes are non-overlapping" },
                        { key: "d", text: "Genetic codes are universal" }
                    ],
                    answer: "b",
                    explanation: "Degeneracy means several synonymous codons specify one amino acid (e.g. six codons for leucine), usually differing only in the third — wobble — base. Unambiguity means the reverse: one codon never codes for two different amino acids."
                }
            ]
        }
        ,
        {
            id: "chem20",
            name: "Chemistry",
            subject: "Chemistry",
            accent: "amber",
            blurb: "Q131–180 · physical, inorganic, organic, applied and analytical chemistry.",
            questions: [
                {
                    id: "d20c131",
                    text: "The mole fraction of the solute in a 2.5 molal aqueous solution is:",
                    options: [
                        { key: "a", text: "0.03" },
                        { key: "b", text: "0.02" },
                        { key: "c", text: "0.043" },
                        { key: "d", text: "0.06" }
                    ],
                    answer: "c",
                    explanation: "2.5 molal means 2.5 mol solute in 1000 g water. Moles of water $=\\dfrac{1000}{18}=55.5$. Mole fraction of solute $=\\dfrac{2.5}{2.5+55.5}=\\dfrac{2.5}{58}=0.043$."
                },
                {
                    id: "d20c132",
                    text: "The electronic arrangement shown below is correct according to:<div style='margin-top:10px'><svg viewBox='0 0 132 54' width='150' style='max-width:100%'><g fill='none' stroke='currentColor' stroke-width='1.6'><rect x='12' y='12' width='46' height='30'/><rect x='62' y='12' width='46' height='30'/><line x1='26' y1='18' x2='26' y2='36'/><line x1='26' y1='18' x2='22' y2='24'/><line x1='26' y1='18' x2='30' y2='24'/><line x1='44' y1='18' x2='44' y2='36'/><line x1='44' y1='36' x2='40' y2='30'/><line x1='44' y1='36' x2='48' y2='30'/><line x1='76' y1='18' x2='76' y2='36'/><line x1='76' y1='18' x2='72' y2='24'/><line x1='76' y1='18' x2='80' y2='24'/><line x1='94' y1='18' x2='94' y2='36'/><line x1='94' y1='36' x2='90' y2='30'/><line x1='94' y1='36' x2='98' y2='30'/></g></svg></div>",
                    options: [
                        { key: "a", text: "Hund's rule" },
                        { key: "b", text: "Pauli exclusion principle" },
                        { key: "c", text: "Aufbau principle" },
                        { key: "d", text: "Heisenberg's principle" }
                    ],
                    answer: "b",
                    explanation: "Each box (orbital) holds exactly two electrons and they are drawn with <i>opposite</i> spins. That is precisely Pauli's statement — no two electrons in an atom can have all four quantum numbers identical, so an orbital can accommodate at most two electrons and only if their spins are paired. Hund's rule concerns the order of filling degenerate orbitals, and the Aufbau principle the energy order of subshells."
                },
                {
                    id: "d20c133",
                    text: "When the same amount of zinc is treated separately with an excess of $\\mathrm{H_2SO_4}$ and an excess of NaOH, the ratio of the volumes of $\\mathrm{H_2}$ evolved is:",
                    options: [
                        { key: "a", text: "$1:1$" },
                        { key: "b", text: "$1:2$" },
                        { key: "c", text: "$2:1$" },
                        { key: "d", text: "$9:4$" }
                    ],
                    answer: "a",
                    explanation: "$\\mathrm{Zn+H_2SO_4\\rightarrow ZnSO_4+H_2}$ and $\\mathrm{Zn+2NaOH\\rightarrow Na_2ZnO_2+H_2}$. In both reactions one mole of zinc liberates one mole of hydrogen, so equal amounts of Zn give equal volumes — the ratio is $1:1$."
                },
                {
                    id: "d20c134",
                    text: "What is the equivalent mass of $\\mathrm{H_3PO_3}$ in the reaction $\\mathrm{2NaOH+H_3PO_3\\rightarrow Na_2HPO_3+2H_2O}$? ($M$ = molar mass)",
                    options: [
                        { key: "a", text: "$2M$" },
                        { key: "b", text: "$\\dfrac{M}{1}$" },
                        { key: "c", text: "$\\dfrac{M}{2}$" },
                        { key: "d", text: "$\\dfrac{M}{3}$" }
                    ],
                    answer: "c",
                    explanation: "Although $\\mathrm{H_3PO_3}$ has three hydrogens, only two are bonded to oxygen and are replaceable — the third is attached directly to phosphorus. The equation confirms that 2 mol NaOH react per mole of acid, so the basicity is 2 and $E=\\dfrac{M}{2}$ (phosphorous acid is dibasic)."
                },
                {
                    id: "d20c135",
                    text: "Which of the following is <b>not</b> an example of a redox reaction?",
                    options: [
                        { key: "a", text: "Acid–base neutralization" },
                        { key: "b", text: "Double displacement reaction" },
                        { key: "c", text: "Thermal decomposition of $\\mathrm{CaCO_3}$" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "In neutralization $\\mathrm{H^++OH^-\\rightarrow H_2O}$ no oxidation number changes; in a double displacement the ions simply swap partners; and in $\\mathrm{CaCO_3\\rightarrow CaO+CO_2}$ carbon stays $+4$ and oxygen $-2$ throughout. None of the three involves electron transfer, so the answer is \"all of the above\"."
                },
                {
                    id: "d20c136",
                    text: "When a pinch of NaCN is added to water, its pOH:",
                    options: [
                        { key: "a", text: "Increases" },
                        { key: "b", text: "Remains the same" },
                        { key: "c", text: "Decreases" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "c",
                    explanation: "NaCN is the salt of a strong base and a weak acid (HCN), so it hydrolyses: $\\mathrm{CN^-+H_2O\\rightleftharpoons HCN+OH^-}$. The $\\mathrm{[OH^-]}$ rises, making the solution basic, and since $\\mathrm{pOH}=-\\log[\\mathrm{OH^-}]$, the pOH falls (pH rises above 7)."
                },
                {
                    id: "d20c137",
                    text: "What are the oxidation states of nitrogen and lead in hydrazoic acid and sindoor respectively?",
                    options: [
                        { key: "a", text: "$-3$ and $+2.67$" },
                        { key: "b", text: "$-\\tfrac13$ and $+4$" },
                        { key: "c", text: "$-3$ and $+2$" },
                        { key: "d", text: "$-\\tfrac13$ and $+2.67$" }
                    ],
                    answer: "d",
                    explanation: "Hydrazoic acid is $\\mathrm{HN_3}$: $+1+3x=0\\Rightarrow x=-\\tfrac13$ (an average, since the three N atoms are not equivalent). Sindoor is red lead, $\\mathrm{Pb_3O_4}$: $3x+4(-2)=0\\Rightarrow x=+\\tfrac83=+2.67$ (really a mixture of $2\\,\\mathrm{Pb^{2+}}$ and $1\\,\\mathrm{Pb^{4+}}$)."
                },
                {
                    id: "d20c138",
                    text: "For the reactions $A\\rightleftharpoons 2B+C,\\ K_1=16$ and $D\\rightleftharpoons \\tfrac{C}{2}+E,\\ K_2=9$, what is $K$ for $\\tfrac12A+E\\rightleftharpoons B+D$?",
                    options: [
                        { key: "a", text: "$\\dfrac49$" },
                        { key: "b", text: "$\\dfrac94$" },
                        { key: "c", text: "12" },
                        { key: "d", text: "144" }
                    ],
                    answer: "a",
                    explanation: "Halving a reaction takes the square root of $K$, and reversing it takes the reciprocal. $\\tfrac12\\times$(reaction 1): $\\tfrac12A\\rightleftharpoons B+\\tfrac12C$ with $K=\\sqrt{16}=4$. Reverse of reaction 2: $\\tfrac12C+E\\rightleftharpoons D$ with $K=\\tfrac19$. Adding the two, $\\tfrac12C$ cancels and $K=4\\times\\tfrac19=\\dfrac49$."
                },
                {
                    id: "d20c139",
                    text: "Which of the following is the strongest acid?",
                    options: [
                        { key: "a", text: "$\\mathrm{H_3PO_4}$" },
                        { key: "b", text: "$\\mathrm{H_3PO_3}$" },
                        { key: "c", text: "$\\mathrm{H_3PO_2}$" },
                        { key: "d", text: "All have the same strength" }
                    ],
                    answer: "d",
                    explanation: "By Pauling's rule the strength of an oxyacid $\\mathrm{XO_m(OH)_n}$ depends on $m$, the number of non-hydroxyl (doubly bonded) oxygens: $\\mathrm{p}K_{a1}\\approx8-5m$. All three acids are $\\mathrm{PO(OH)_3}$, $\\mathrm{PO(H)(OH)_2}$ and $\\mathrm{PO(H)_2(OH)}$ — each has exactly one $\\mathrm{P=O}$, so all have $\\mathrm{p}K_{a1}\\approx3$ and comparable strength. (Measured values $2.1,\\ 2.0,\\ 1.2$ do differ slightly, the order being $\\mathrm{H_3PO_2>H_3PO_3>H_3PO_4}$, but they belong to the same class.) Note that basicity falls $3,2,1$ even though acid strength does not."
                },
                {
                    id: "d20c140",
                    text: "A current of 2 A with a current efficiency of 75 % is passed through $\\mathrm{CuSO_4}$ solution for 10 minutes. The mass of copper deposited is:",
                    options: [
                        { key: "a", text: "0.7292 g" },
                        { key: "b", text: "7.292 g" },
                        { key: "c", text: "0.0729 g" },
                        { key: "d", text: "0.296 g" }
                    ],
                    answer: "d",
                    explanation: "Charge actually used $=I\\,t\\times\\text{efficiency}=2\\times600\\times0.75=900$ C. By Faraday's first law $m=\\dfrac{E}{F}Q=\\dfrac{63.5/2}{96500}\\times900=\\dfrac{31.75\\times900}{96500}\\approx0.296$ g.<br><i>Printed-paper note:</i> the set states 3 A, which gives 0.444 g — a value that appears in none of the options; with 2 A option (d) is exact."
                },
                {
                    id: "d20c141",
                    text: "A hydrated salt $\\mathrm{Na_2SO_4\\cdot xH_2O}$ loses about 56 % of its weight on dehydration. The hydrated salt is:",
                    options: [
                        { key: "a", text: "$\\mathrm{Na_2SO_4\\cdot H_2O}$" },
                        { key: "b", text: "$\\mathrm{Na_2SO_4\\cdot10H_2O}$" },
                        { key: "c", text: "$\\mathrm{Na_2SO_4\\cdot5H_2O}$" },
                        { key: "d", text: "$\\mathrm{Na_2SO_4\\cdot7H_2O}$" }
                    ],
                    answer: "b",
                    explanation: "Loss on dehydration is the water content: $\\dfrac{18x}{142+18x}=0.56$. Solving, $18x=79.5+10.08x\\Rightarrow7.92x=79.5\\Rightarrow x\\approx10$. Check with $x=10$: $\\dfrac{180}{322}=55.9\\ \\%$ — so the salt is Glauber's salt, $\\mathrm{Na_2SO_4\\cdot10H_2O}$."
                },
                {
                    id: "d20c142",
                    text: "How many moles of $\\mathrm{H_2S}$ are needed to reduce 1 mole of $\\mathrm{K_2Cr_2O_7}$?",
                    options: [
                        { key: "a", text: "1" },
                        { key: "b", text: "2" },
                        { key: "c", text: "6" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "d",
                    explanation: "$\\mathrm{Cr_2O_7^{2-}+14H^++6e^-\\rightarrow2Cr^{3+}+7H_2O}$ requires 6 electrons, while $\\mathrm{H_2S\\rightarrow S+2H^++2e^-}$ supplies only 2 each. So $6/2=\\mathbf{3}$ moles of $\\mathrm{H_2S}$ are needed — a value not listed, hence \"none of these\"."
                },
                {
                    id: "d20c143",
                    text: "For $2A+B\\rightarrow C$ the experimental data are:<div style='margin-top:10px'><table style='border-collapse:collapse;font-size:0.92em'><tr><th style='border:1px solid currentColor;padding:4px 8px'>Exp. No.</th><th style='border:1px solid currentColor;padding:4px 8px'>Initial [A]</th><th style='border:1px solid currentColor;padding:4px 8px'>Initial [B]</th><th style='border:1px solid currentColor;padding:4px 8px'>Initial rate</th></tr><tr><td style='border:1px solid currentColor;padding:4px 8px'>1</td><td style='border:1px solid currentColor;padding:4px 8px'>0.10</td><td style='border:1px solid currentColor;padding:4px 8px'>0.10</td><td style='border:1px solid currentColor;padding:4px 8px'>2 &times; 10<sup>-3</sup></td></tr><tr><td style='border:1px solid currentColor;padding:4px 8px'>2</td><td style='border:1px solid currentColor;padding:4px 8px'>0.20</td><td style='border:1px solid currentColor;padding:4px 8px'>0.10</td><td style='border:1px solid currentColor;padding:4px 8px'>4 &times; 10<sup>-3</sup></td></tr><tr><td style='border:1px solid currentColor;padding:4px 8px'>3</td><td style='border:1px solid currentColor;padding:4px 8px'>0.20</td><td style='border:1px solid currentColor;padding:4px 8px'>0.20</td><td style='border:1px solid currentColor;padding:4px 8px'>1.6 &times; 10<sup>-2</sup></td></tr></table></div>Find the order of the reaction with respect to A.",
                    options: [
                        { key: "a", text: "Zero" },
                        { key: "b", text: "First" },
                        { key: "c", text: "Second" },
                        { key: "d", text: "Third" }
                    ],
                    answer: "b",
                    explanation: "Compare experiments 1 and 2, where $[B]$ is held constant: $[A]$ doubles $(0.10\\to0.20)$ and the rate doubles $(2\\times10^{-3}\\to4\\times10^{-3})$. Since $2=2^{x}$, $x=1$ — the reaction is first order in A. (Experiments 2 and 3 show that doubling $[B]$ quadruples the rate, so it is second order in B and third order overall.)"
                },
                {
                    id: "d20c144",
                    text: "Find the number of sigma and pi bonds in $\\mathrm{(CN)_2C=C(CN)_2}$ (tetracyanoethene).",
                    options: [
                        { key: "a", text: "$9\\sigma$ and $8\\pi$" },
                        { key: "b", text: "$9\\sigma$ and $9\\pi$" },
                        { key: "c", text: "$8\\sigma$ and $8\\pi$" },
                        { key: "d", text: "$10\\sigma$ and $9\\pi$" }
                    ],
                    answer: "b",
                    explanation: "Count bond by bond. Sigma: 1 in the central $\\mathrm{C=C}$, 4 in the $\\mathrm{C-C\\equiv N}$ links, and 1 in each of the four $\\mathrm{C\\equiv N}$ groups $=1+4+4=9\\sigma$. Pi: 1 in the $\\mathrm{C=C}$ plus 2 in each of the four $\\mathrm{C\\equiv N}$ $=1+8=9\\pi$."
                },
                {
                    id: "d20c145",
                    text: "If the intermolecular force in a liquid is high, it will have:",
                    options: [
                        { key: "a", text: "Low boiling point" },
                        { key: "b", text: "Low vapour pressure" },
                        { key: "c", text: "Low viscosity" },
                        { key: "d", text: "Low surface tension" }
                    ],
                    answer: "b",
                    explanation: "Strong intermolecular attraction makes it hard for molecules to escape into the vapour phase, so the equilibrium vapour pressure is low (and the boiling point, viscosity and surface tension are all correspondingly <i>high</i>)."
                },
                {
                    id: "d20c146",
                    text: "A metal M displaces nickel from $\\mathrm{NiSO_4}$ solution but does not displace Mn from $\\mathrm{MnSO_4}$ solution. The correct order of reducing power is:",
                    options: [
                        { key: "a", text: "$\\mathrm{Mn>Ni>M}$" },
                        { key: "b", text: "$\\mathrm{Ni>Mn>M}$" },
                        { key: "c", text: "$\\mathrm{Mn>M>Ni}$" },
                        { key: "d", text: "$\\mathrm{M>Ni>Mn}$" }
                    ],
                    answer: "c",
                    explanation: "A metal displaces another only if it is the stronger reducing agent. M displaces Ni $\\Rightarrow$ M is more reducing than Ni. M fails to displace Mn $\\Rightarrow$ Mn is more reducing than M. Combining, $\\mathrm{Mn>M>Ni}$."
                },
                {
                    id: "d20c147",
                    text: "Which of the following is exothermic?",
                    options: [
                        { key: "a", text: "$\\mathrm{N_2(g)+O_2(g)\\rightarrow2NO(g)},\\ \\Delta H=+43.2$ kcal" },
                        { key: "b", text: "$\\mathrm{N_2(g)+3H_2(g)\\rightarrow2NH_3(g)}+22.4$ kcal" },
                        { key: "c", text: "Melting of ice" },
                        { key: "d", text: "$\\mathrm{C(diamond)}+3.3\\ \\text{kcal}\\rightarrow\\mathrm{C(graphite)}$" }
                    ],
                    answer: "b",
                    explanation: "Heat appearing on the <i>product</i> side means heat is given out, so $\\Delta H$ is negative — the Haber synthesis of ammonia is exothermic. In (a) $\\Delta H$ is positive, in (d) the heat is absorbed (written on the reactant side), and melting of ice absorbs the latent heat of fusion."
                },
                {
                    id: "d20c148",
                    text: "Tritium, a radioactive isotope of hydrogen, emits:",
                    options: [
                        { key: "a", text: "$\\alpha$-particle" },
                        { key: "b", text: "$\\beta$-particle" },
                        { key: "c", text: "$\\gamma$-particle" },
                        { key: "d", text: "neutron" }
                    ],
                    answer: "b",
                    explanation: "$^{3}_{1}\\mathrm{H}\\rightarrow{}^{3}_{2}\\mathrm{He}+{}^{0}_{-1}e+\\bar{\\nu}$. Its high neutron-to-proton ratio is corrected by converting a neutron into a proton, so tritium is a pure, low-energy $\\beta^-$ emitter with a half-life of about 12.3 years."
                },
                {
                    id: "d20c149",
                    text: "Which of the following does <b>not</b> decrease the amount of oxygen in air?",
                    options: [
                        { key: "a", text: "Rusting of iron" },
                        { key: "b", text: "Aerobic respiration" },
                        { key: "c", text: "Photosynthesis" },
                        { key: "d", text: "Use of diesel as a fuel" }
                    ],
                    answer: "c",
                    explanation: "Rusting, respiration and combustion all consume atmospheric $\\mathrm{O_2}$. Photosynthesis does the opposite — it consumes $\\mathrm{CO_2}$ and <i>releases</i> $\\mathrm{O_2}$."
                },
                {
                    id: "d20c150",
                    text: "Ammonia reacts with Nessler's reagent to give:",
                    options: [
                        { key: "a", text: "White ppt." },
                        { key: "b", text: "Violet ppt." },
                        { key: "c", text: "Deep blue ppt." },
                        { key: "d", text: "Brown ppt." }
                    ],
                    answer: "d",
                    explanation: "Nessler's reagent is alkaline $\\mathrm{K_2[HgI_4]}$. With $\\mathrm{NH_3}$ it gives the brown precipitate of the iodide of Millon's base, $\\mathrm{HgO\\cdot Hg(NH_2)I}$ — the standard confirmatory test for ammonium salts."
                },
                {
                    id: "d20c151",
                    text: "Water transported through lead pipes becomes poisonous due to the formation of:",
                    options: [
                        { key: "a", text: "$\\mathrm{PbO}$" },
                        { key: "b", text: "$\\mathrm{PbO_2}$" },
                        { key: "c", text: "$\\mathrm{Pb(OH)_2}$" },
                        { key: "d", text: "$\\mathrm{Pb_3O_4}$" }
                    ],
                    answer: "c",
                    explanation: "In the presence of dissolved oxygen, lead slowly dissolves in soft water to give sparingly soluble lead hydroxide: $\\mathrm{2Pb+O_2+2H_2O\\rightarrow2Pb(OH)_2}$. This process, called plumbosolvency, contaminates the water and causes cumulative lead poisoning (plumbism)."
                },
                {
                    id: "d20c152",
                    text: "White phosphorus reacts with caustic soda and produces $\\mathrm{PH_3}$ and $\\mathrm{NaH_2PO_2}$. This reaction is an example of:",
                    options: [
                        { key: "a", text: "Reduction" },
                        { key: "b", text: "Oxidation" },
                        { key: "c", text: "Reduction and oxidation" },
                        { key: "d", text: "Neutralization" }
                    ],
                    answer: "c",
                    explanation: "$\\mathrm{P_4+3NaOH+3H_2O\\rightarrow PH_3+3NaH_2PO_2}$. Phosphorus starts at oxidation state 0 and ends both at $-3$ (in $\\mathrm{PH_3}$, reduced) and $+1$ (in $\\mathrm{NaH_2PO_2}$, oxidised). One element being simultaneously oxidised and reduced is a <b>disproportionation</b> reaction."
                },
                {
                    id: "d20c153",
                    text: "Copper turnings, when heated with concentrated sulphuric acid, give:",
                    options: [
                        { key: "a", text: "$\\mathrm{SO_2}$" },
                        { key: "b", text: "$\\mathrm{H_2S}$" },
                        { key: "c", text: "$\\mathrm{SO_3}$" },
                        { key: "d", text: "$\\mathrm{O_2}$" }
                    ],
                    answer: "a",
                    explanation: "$\\mathrm{Cu+2H_2SO_4(conc.)\\xrightarrow{\\Delta}CuSO_4+SO_2\\uparrow+2H_2O}$. Hot concentrated $\\mathrm{H_2SO_4}$ acts as an oxidising agent and is itself reduced to $\\mathrm{SO_2}$; copper, being below hydrogen in the electrochemical series, cannot liberate $\\mathrm{H_2}$."
                },
                {
                    id: "d20c154",
                    text: "The poling process is used:",
                    options: [
                        { key: "a", text: "For the removal of $\\mathrm{Cu_2O}$ from Cu" },
                        { key: "b", text: "For the removal of $\\mathrm{Al_2O_3}$ from Al" },
                        { key: "c", text: "For the removal of $\\mathrm{Fe_2O_3}$ from Fe" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "a",
                    explanation: "In poling, molten impure copper (or tin) is stirred with green wooden poles. The wood releases hydrocarbon gases that act as reducing agents and convert the dissolved oxide impurity back to the metal: $\\mathrm{Cu_2O+CO\\rightarrow2Cu+CO_2}$. It is used only for metals whose own oxide is the impurity."
                },
                {
                    id: "d20c155",
                    text: "Which of the following metals can be purified by distillation?",
                    options: [
                        { key: "a", text: "Cu" },
                        { key: "b", text: "Ag" },
                        { key: "c", text: "Fe" },
                        { key: "d", text: "Hg" }
                    ],
                    answer: "d",
                    explanation: "Distillation works only for metals with a low boiling point that vaporise well below the temperature at which the impurities do — mercury (b.p. 357 °C), zinc, cadmium. Cu, Ag and Fe are refined by electrolysis or poling."
                },
                {
                    id: "d20c156",
                    text: "The correct order of the stoichiometries of AgCl formed when $\\mathrm{AgNO_3}$ in excess is treated with the complexes $\\mathrm{CoCl_3\\cdot6NH_3},\\ \\mathrm{CoCl_3\\cdot5NH_3},\\ \\mathrm{CoCl_3\\cdot4NH_3}$ respectively is:",
                    options: [
                        { key: "a", text: "3AgCl, 1AgCl, 2AgCl" },
                        { key: "b", text: "3AgCl, 2AgCl, 1AgCl" },
                        { key: "c", text: "2AgCl, 3AgCl, 2AgCl" },
                        { key: "d", text: "1AgCl, 3AgCl, 2AgCl" }
                    ],
                    answer: "b",
                    explanation: "Only <i>ionisable</i> chloride outside the coordination sphere is precipitated. $\\mathrm{[Co(NH_3)_6]Cl_3}\\to3\\mathrm{Cl^-}\\to3$AgCl; $\\mathrm{[Co(NH_3)_5Cl]Cl_2}\\to2$AgCl; $\\mathrm{[Co(NH_3)_4Cl_2]Cl}\\to1$AgCl. This is exactly the experiment by which Werner deduced primary and secondary valency."
                },
                {
                    id: "d20c157",
                    text: "When equal moles of lithium nitrate and potassium nitrate are heated in separate crucibles, what difference in the gaseous products will be observed?",
                    options: [
                        { key: "a", text: "Potassium nitrate evolves nitrogen dioxide, while lithium nitrate does not decompose" },
                        { key: "b", text: "Both nitrates decompose to produce exactly the same mixture of nitrogen dioxide and oxygen gas" },
                        { key: "c", text: "Lithium nitrate evolves only nitrogen gas, while potassium nitrate evolves nitrogen dioxide" },
                        { key: "d", text: "Lithium nitrate evolves both nitrogen dioxide and oxygen, while potassium nitrate evolves only oxygen" }
                    ],
                    answer: "d",
                    explanation: "$\\mathrm{4LiNO_3\\rightarrow2Li_2O+4NO_2+O_2}$, whereas $\\mathrm{2KNO_3\\rightarrow2KNO_2+O_2}$. Because $\\mathrm{Li^+}$ is small and highly polarising (diagonal relationship with Mg), it distorts the nitrate ion strongly enough to break it down to the oxide; the large, weakly polarising $\\mathrm{K^+}$ only takes the nitrate as far as the nitrite."
                },
                {
                    id: "d20c158",
                    text: "For the reaction $\\mathrm{4NH_3(g)+5O_2(g)\\rightleftharpoons4NO(g)+6H_2O(g)},\\ \\Delta H=-215$ kcal, what conditions give the maximum yield of NO(g) at equilibrium?",
                    options: [
                        { key: "a", text: "High temperature, high pressure" },
                        { key: "b", text: "Low temperature, low pressure" },
                        { key: "c", text: "High temperature, low pressure" },
                        { key: "d", text: "Low temperature, high pressure" }
                    ],
                    answer: "b",
                    explanation: "By Le Chatelier's principle: the reaction is exothermic, so <b>low temperature</b> shifts it forward; and the gaseous moles increase from $4+5=9$ to $4+6=10$, so <b>low pressure</b> also favours the products."
                },
                {
                    id: "d20c159",
                    text: "Which of the following is a thermosetting polymer?",
                    options: [
                        { key: "a", text: "Polyethylene" },
                        { key: "b", text: "Polyvinyl chloride" },
                        { key: "c", text: "Bakelite" },
                        { key: "d", text: "Polystyrene" }
                    ],
                    answer: "c",
                    explanation: "Bakelite (phenol + formaldehyde) is a heavily cross-linked three-dimensional network, so once moulded it cannot be softened and remoulded on heating. The other three are linear/branched thermoplastics that soften repeatedly on heating."
                },
                {
                    id: "d20c160",
                    text: "Which of the following can be used as a catalyst in the Contact process?",
                    options: [
                        { key: "a", text: "$\\mathrm{V_2O_5}$" },
                        { key: "b", text: "Pt" },
                        { key: "c", text: "Finely divided Fe" },
                        { key: "d", text: "Both (a) and (b)" }
                    ],
                    answer: "d",
                    explanation: "$\\mathrm{2SO_2+O_2\\rightleftharpoons2SO_3}$ was originally catalysed by finely divided platinum, but Pt is costly and is easily poisoned by arsenic impurities, so modern plants use vanadium pentoxide. Both are valid Contact-process catalysts; iron belongs to the Haber process."
                },
                {
                    id: "d20c161",
                    text: "In the \"Kraft pulping\" process, wood chips are digested under heat and pressure using \"white liquor\". What are the two primary active chemicals of white liquor?",
                    options: [
                        { key: "a", text: "$\\mathrm{NaOH}$ and $\\mathrm{Na_2CO_3}$" },
                        { key: "b", text: "$\\mathrm{NaOH}$ and $\\mathrm{Na_2S}$" },
                        { key: "c", text: "$\\mathrm{NaOH}$ and $\\mathrm{Na_2SO_3}$" },
                        { key: "d", text: "$\\mathrm{Na_2S}$ and $\\mathrm{Na_2SO_4}$" }
                    ],
                    answer: "b",
                    explanation: "White liquor is an aqueous solution of sodium hydroxide and sodium sulphide. The $\\mathrm{HS^-}$ ion attacks and fragments the lignin much faster than hydroxide alone, freeing the cellulose fibres — this is what makes kraft (sulphate) pulp so strong."
                },
                {
                    id: "d20c162",
                    text: "Which of the following will show a positive Fehling's test?",
                    options: [
                        { key: "a", text: "$\\mathrm{C_6H_5-CHO}$ (benzaldehyde)" },
                        { key: "b", text: "$\\mathrm{C_6H_5-CO-CH_3}$ (acetophenone)" },
                        { key: "c", text: "$\\mathrm{C_6H_5-CH_2-CHO}$ (phenylacetaldehyde)" },
                        { key: "d", text: "$\\mathrm{CH_3-CH(OH)-CH(OH)-C_2H_5}$ (a vicinal diol)" }
                    ],
                    answer: "c",
                    explanation: "Fehling's solution oxidises only <b>aliphatic</b> aldehydes, giving a red $\\mathrm{Cu_2O}$ precipitate. In phenylacetaldehyde the $\\mathrm{-CHO}$ is one carbon away from the ring, so it behaves as an aliphatic aldehyde and gives a positive test. Benzaldehyde (aromatic aldehyde) and ketones do not react, and an alcohol has no carbonyl at all."
                },
                {
                    id: "d20c163",
                    text: "A non-reducing sugar \"A\" hydrolyses to give two reducing monosaccharides. Sugar A is:",
                    options: [
                        { key: "a", text: "Fructose" },
                        { key: "b", text: "Galactose" },
                        { key: "c", text: "Glucose" },
                        { key: "d", text: "Sucrose" }
                    ],
                    answer: "d",
                    explanation: "Sucrose is non-reducing because both anomeric carbons are used in the glycosidic linkage $(\\alpha1\\rightarrow2\\beta)$. Hydrolysis (invertase or dilute acid) gives glucose and fructose, both of which are reducing — this mixture is invert sugar. The other three options are themselves monosaccharides and are reducing."
                },
                {
                    id: "d20c164",
                    text: "Find C in the sequence:<br>$\\mathrm{C_6H_5NO_2\\xrightarrow{Sn/HCl}A\\xrightarrow{NaNO_2+HCl,\\ 273-278\\ K}B\\xrightarrow{C_2H_5OH}C}$",
                    options: [
                        { key: "a", text: "$\\mathrm{C_6H_6}$ (benzene)" },
                        { key: "b", text: "$\\mathrm{C_6H_5OH}$ (phenol)" },
                        { key: "c", text: "$\\mathrm{C_6H_5OC_2H_5}$ (phenetole)" },
                        { key: "d", text: "$\\mathrm{C_6H_5C_2H_5}$ (ethylbenzene)" }
                    ],
                    answer: "a",
                    explanation: "$\\mathrm{Sn/HCl}$ reduces nitrobenzene to aniline (A). Cold $\\mathrm{NaNO_2/HCl}$ diazotises it to benzenediazonium chloride (B). Ethanol then acts as a <b>reducing agent</b>, donating a hydride and being oxidised to acetaldehyde: $\\mathrm{C_6H_5N_2Cl+C_2H_5OH\\rightarrow C_6H_6+CH_3CHO+N_2+HCl}$. So C is benzene. (Phenol would need warm water, and phenetole comes from the Williamson synthesis.)"
                },
                {
                    id: "d20c165",
                    text: "In the compound $\\mathrm{OHC-CH=CH-CH_2-C\\equiv C-C\\equiv N}$, the numbers of sp and $\\mathrm{sp^2}$ hybridised carbons are respectively:",
                    options: [
                        { key: "a", text: "4 and 5" },
                        { key: "b", text: "4 and 6" },
                        { key: "c", text: "3 and 6" },
                        { key: "d", text: "3 and 3" }
                    ],
                    answer: "d",
                    explanation: "A carbon forming one triple bond (or two double bonds) is sp; one forming a single double bond is $\\mathrm{sp^2}$; one with only single bonds is $\\mathrm{sp^3}$. Here the two alkyne carbons and the nitrile carbon are sp $=3$; the $\\mathrm{-CHO}$ carbon and the two alkene carbons are $\\mathrm{sp^2}=3$; and the $\\mathrm{-CH_2-}$ is $\\mathrm{sp^3}$."
                },
                {
                    id: "d20c166",
                    text: "A broad-spectrum antibiotic is:",
                    options: [
                        { key: "a", text: "Paracetamol" },
                        { key: "b", text: "Penicillin" },
                        { key: "c", text: "Aspirin" },
                        { key: "d", text: "Chloramphenicol" }
                    ],
                    answer: "d",
                    explanation: "Chloramphenicol acts on both Gram-positive and Gram-negative bacteria as well as rickettsiae, so it is broad-spectrum. Penicillin G is narrow-spectrum (mainly Gram-positive), while paracetamol is an analgesic-antipyretic and aspirin an analgesic-antipyretic-antiplatelet drug — neither is an antibiotic."
                },
                {
                    id: "d20c167",
                    text: "Alizarin is a:",
                    options: [
                        { key: "a", text: "Direct dye" },
                        { key: "b", text: "Vat dye" },
                        { key: "c", text: "Mordant dye" },
                        { key: "d", text: "Disperse dye" }
                    ],
                    answer: "c",
                    explanation: "Alizarin (1,2-dihydroxyanthraquinone, from madder root) has no affinity for the fibre by itself; it must first be fixed with a metal salt (mordant), and the colour depends on the metal — red with $\\mathrm{Al^{3+}}$, violet with $\\mathrm{Fe^{2+}}$, brownish-red with $\\mathrm{Cr^{3+}}$. Indigo is the classic vat dye."
                },
                {
                    id: "d20c168",
                    text: "Consider the reaction $\\mathrm{CH_3-C\\equiv CH\\xrightarrow{(i)\\ Hg^{2+}/H_2SO_4\\ \\ (ii)\\ HCN\\ \\ (iii)\\ H_2/Ni}P}$. The product P is:",
                    options: [
                        { key: "a", text: "$\\mathrm{(CH_3)_2C(OH)-CH_2-NH_2}$" },
                        { key: "b", text: "$\\mathrm{(CH_3)_2C(OH)-NH_2}$" },
                        { key: "c", text: "$\\mathrm{(CH_3)_2C(CH_3)-COOH}$" },
                        { key: "d", text: "$\\mathrm{(CH_3)_2C(CH_3)-CHO}$" }
                    ],
                    answer: "a",
                    explanation: "Step (i) is Markovnikov hydration (Kucherov reaction): propyne $\\rightarrow$ acetone, $\\mathrm{CH_3COCH_3}$. Step (ii) is nucleophilic addition of HCN to give the cyanohydrin $\\mathrm{(CH_3)_2C(OH)CN}$. Step (iii) reduces the nitrile to a primary amine, giving 1-amino-2-methylpropan-2-ol, $\\mathrm{(CH_3)_2C(OH)CH_2NH_2}$."
                },
                {
                    id: "d20c169",
                    text: "$\\alpha$-helix and $\\beta$-pleated sheet proteins belong to which one of the following types of protein structure?",
                    options: [
                        { key: "a", text: "Primary" },
                        { key: "b", text: "Secondary" },
                        { key: "c", text: "Tertiary" },
                        { key: "d", text: "Quaternary" }
                    ],
                    answer: "b",
                    explanation: "Secondary structure is the local regular folding of the polypeptide backbone stabilised by hydrogen bonds between the $\\mathrm{>C=O}$ and $\\mathrm{>N-H}$ groups — the right-handed $\\alpha$-helix and the $\\beta$-pleated sheet are its two forms."
                },
                {
                    id: "d20c170",
                    text: "Consider the sequence $\\mathrm{CH_3-C\\equiv CH\\xrightarrow{H_2/Pd-CaCO_3}A\\xrightarrow{O_3/Zn,\\,H_2O}B+C}$. Then:",
                    options: [
                        { key: "a", text: "$B=\\mathrm{CH_3CHO}$ and $C=\\mathrm{HCHO}$" },
                        { key: "b", text: "$B=\\mathrm{CH_3CHO}$ and $C=\\mathrm{HCOOH}$" },
                        { key: "c", text: "$B=\\mathrm{CH_3COCH_3}$ and $C=\\mathrm{HCHO}$" },
                        { key: "d", text: "$B=\\mathrm{HCHO}$ and $C=\\mathrm{CH_3COOH}$" }
                    ],
                    answer: "a",
                    explanation: "$\\mathrm{Pd/CaCO_3}$ (Lindlar's catalyst) is a poisoned catalyst that stops the hydrogenation at the alkene stage, so $A=\\mathrm{CH_3CH=CH_2}$ (propene). Reductive ozonolysis $(\\mathrm{O_3}$ then $\\mathrm{Zn/H_2O})$ cleaves the double bond into two carbonyls without further oxidation: $\\mathrm{CH_3CHO}$ and $\\mathrm{HCHO}$. (Zinc is added precisely to prevent the acids of oxidative work-up.)"
                },
                {
                    id: "d20c171",
                    text: "Which of the following reactions/tests can be used to distinguish acetaldehyde and acetone?<br>(A) Iodoform test&nbsp; (B) Cannizzaro&nbsp; (C) Aldol condensation&nbsp; (D) Fehling's test&nbsp; (E) Tollens' test&nbsp; (F) Clemmensen reduction",
                    options: [
                        { key: "a", text: "D, E only" },
                        { key: "b", text: "A, B, C, F only" },
                        { key: "c", text: "B, C, F only" },
                        { key: "d", text: "B, C, D, E only" }
                    ],
                    answer: "a",
                    explanation: "Only a mild oxidising test separates an aldehyde from a ketone: acetaldehyde gives a red $\\mathrm{Cu_2O}$ precipitate with Fehling's and a silver mirror with Tollens', while acetone gives neither. Both compounds contain $\\mathrm{CH_3CO-}$ so both give the iodoform test; both have $\\alpha$-hydrogens so both undergo aldol and neither undergoes Cannizzaro; and Clemmensen reduces both to hydrocarbons."
                },
                {
                    id: "d20c172",
                    text: "In the reactions $\\mathrm{CH_3CH_2CH_2Br\\xrightarrow{AgNO_2}X}$ and $\\mathrm{CH_3CH_2CH_2Br\\xrightarrow{AgCN}Y}$, the major products X and Y respectively are:",
                    options: [
                        { key: "a", text: "$\\mathrm{CH_3CH_2CH_2ONO}$ and $\\mathrm{CH_3CH_2CH_2CN}$" },
                        { key: "b", text: "$\\mathrm{CH_3CH_2CH_2NO_2}$ and $\\mathrm{CH_3CH_2CH_2CN}$" },
                        { key: "c", text: "$\\mathrm{CH_3CH_2CH_2NO_2}$ and $\\mathrm{CH_3CH_2CH_2NC}$" },
                        { key: "d", text: "$\\mathrm{CH_3CH_2CH_2ONO}$ and $\\mathrm{CH_3CH_2CH_2CN}$" }
                    ],
                    answer: "c",
                    explanation: "$\\mathrm{NO_2^-}$ and $\\mathrm{CN^-}$ are ambident nucleophiles. In the silver salts the bond is largely covalent, so attack occurs through the <i>less</i> electronegative atom: through N of the nitrite giving the nitroalkane, and through N of the cyanide giving the isocyanide. (With the potassium salts, which are ionic, the products would be the alkyl nitrite and the alkyl cyanide instead.)"
                },
                {
                    id: "d20c173",
                    text: "Fructose is an example of:",
                    options: [
                        { key: "a", text: "Pyranose" },
                        { key: "b", text: "Ketohexose" },
                        { key: "c", text: "Aldohexose" },
                        { key: "d", text: "Heptose" }
                    ],
                    answer: "b",
                    explanation: "Fructose is $\\mathrm{C_6H_{12}O_6}$ with a keto group at C-2, so it is a ketohexose. In solution it cyclises mainly to the five-membered furanose form, not the pyranose form; glucose is the aldohexose."
                },
                {
                    id: "d20c174",
                    text: "The 2,4-DNP test can be used to identify:",
                    options: [
                        { key: "a", text: "Amine" },
                        { key: "b", text: "Aldehyde" },
                        { key: "c", text: "Ether" },
                        { key: "d", text: "Halogens" }
                    ],
                    answer: "b",
                    explanation: "2,4-Dinitrophenylhydrazine (Brady's reagent) condenses with the carbonyl group of aldehydes and ketones to give an orange-to-red 2,4-dinitrophenylhydrazone precipitate; the sharp melting point of that derivative identifies the carbonyl compound."
                },
                {
                    id: "d20c175",
                    text: "Which one of the following carbonyl compounds <b>cannot</b> be prepared by the addition of water on an alkyne in the presence of $\\mathrm{HgSO_4}$ and $\\mathrm{H_2SO_4}$?",
                    options: [
                        { key: "a", text: "$\\mathrm{CH_3-CHO}$" },
                        { key: "b", text: "$\\mathrm{C_6H_{11}-CO-CH_3}$ (cyclohexyl methyl ketone)" },
                        { key: "c", text: "$\\mathrm{CH_3-CH_2-CHO}$" },
                        { key: "d", text: "$\\mathrm{CH_3-CO-CH_2CH_3}$" }
                    ],
                    answer: "c",
                    explanation: "Hydration follows Markovnikov's rule, so the $\\mathrm{-OH}$ always goes to the more substituted carbon. Acetylene is the <b>only</b> alkyne that can give an aldehyde (acetaldehyde); every other alkyne gives a ketone. Propanal would require anti-Markovnikov addition to propyne, so it cannot be made this way (it needs hydroboration–oxidation)."
                },
                {
                    id: "d20c176",
                    text: "In the sequence $\\mathrm{C_6H_5N_2^+Cl^-\\xrightarrow{A,\\ H_2O}C_6H_6\\xrightarrow{B,\\ anhyd.\\ AlCl_3}C_6H_5CH_2CH_3}$, the reagents A and B respectively are:",
                    options: [
                        { key: "a", text: "$\\mathrm{H_3PO_2}$ and $\\mathrm{CH_3CH_2Cl}$" },
                        { key: "b", text: "$\\mathrm{CH_3CH_2OH}$ and $\\mathrm{H_3PO_2}$" },
                        { key: "c", text: "$\\mathrm{H_3PO_2}$ and $\\mathrm{CH_3CH_2OH}$" },
                        { key: "d", text: "$\\mathrm{CH_3CH_2Cl}$ and $\\mathrm{H_3PO_2}$" }
                    ],
                    answer: "a",
                    explanation: "Hypophosphorous acid $\\mathrm{H_3PO_2}$ (with water) reduces the diazonium salt, replacing the $\\mathrm{-N_2^+}$ group by $\\mathrm{-H}$ to give benzene — the standard deamination route. Benzene is then converted to ethylbenzene by Friedel–Crafts alkylation with ethyl chloride and anhydrous $\\mathrm{AlCl_3}$."
                },
                {
                    id: "d20c177",
                    text: "The correct pair(s) of ambident nucleophiles is (are):<br>A. $\\mathrm{AgCN/KCN}$&nbsp; B. $\\mathrm{RCOOAg/RCOOK}$&nbsp; C. $\\mathrm{AgNO_2/KNO_2}$&nbsp; D. $\\mathrm{AgI/KI}$",
                    options: [
                        { key: "a", text: "B and C only" },
                        { key: "b", text: "A only" },
                        { key: "c", text: "A and C only" },
                        { key: "d", text: "B only" }
                    ],
                    answer: "c",
                    explanation: "An ambident nucleophile can attack through either of two different atoms. The cyanide ion attacks through C (nitrile) or N (isocyanide) and the nitrite ion through N (nitroalkane) or O (alkyl nitrite). Iodide has only one donor site, and the carboxylate, although it has two oxygens, gives the same ester either way because the two are equivalent by resonance."
                },
                {
                    id: "d20c178",
                    text: "A compound with the molecular formula $\\mathrm{C_3H_6O}$ can show:",
                    options: [
                        { key: "a", text: "Positional isomerism" },
                        { key: "b", text: "Both positional isomerism and metamerism" },
                        { key: "c", text: "Metamerism" },
                        { key: "d", text: "Functional group isomerism" }
                    ],
                    answer: "d",
                    explanation: "$\\mathrm{C_3H_6O}$ covers propanal $(\\mathrm{CH_3CH_2CHO})$, propanone $(\\mathrm{CH_3COCH_3})$, prop-2-en-1-ol and methyl vinyl ether — compounds with entirely different functional groups. Metamerism needs different alkyl groups round the same functional group and is impossible with only three carbons."
                },
                {
                    id: "d20c179",
                    text: "The total number of reagents from the list below that can convert nitrobenzene into aniline is:<br>I. $\\mathrm{Sn-HCl}$&nbsp; II. $\\mathrm{Sn-NH_4OH}$&nbsp; III. $\\mathrm{Fe-HCl}$&nbsp; IV. $\\mathrm{Zn-HCl}$&nbsp; V. $\\mathrm{H_2}$–Raney nickel",
                    options: [
                        { key: "a", text: "II" },
                        { key: "b", text: "III" },
                        { key: "c", text: "IV" },
                        { key: "d", text: "V" }
                    ],
                    answer: "c",
                    explanation: "Complete reduction of $\\mathrm{-NO_2}$ to $\\mathrm{-NH_2}$ needs an <i>acidic</i> medium or catalytic hydrogenation, so $\\mathrm{Sn/HCl},\\ \\mathrm{Fe/HCl},\\ \\mathrm{Zn/HCl}$ and $\\mathrm{H_2/Raney\\ Ni}$ all work — <b>four</b> reagents. In neutral/alkaline medium ($\\mathrm{Sn-NH_4OH}$, like $\\mathrm{Zn/NH_4Cl}$) the reduction stops at N-phenylhydroxylamine."
                },
                {
                    id: "d20c180",
                    text: "For the reaction $\\mathrm{C_6H_5CHO\\xrightarrow{1.\\ NaOH,\\ \\Delta\\ \\ 2.\\ H_3O^+}}$ products, the compound which is <b>not</b> formed is one having:",
                    options: [
                        { key: "a", text: "both alcohol and acid functional groups" },
                        { key: "b", text: "a monocarboxylic acid" },
                        { key: "c", text: "a dicarboxylic acid" },
                        { key: "d", text: "benzyl alcohol" }
                    ],
                    answer: "c",
                    explanation: "Benzaldehyde has no $\\alpha$-hydrogen, so with concentrated alkali it undergoes the <b>Cannizzaro reaction</b> — a disproportionation giving benzyl alcohol (reduced) and sodium benzoate, which on acidification gives benzoic acid, a monocarboxylic acid. No dicarboxylic acid can be produced from a single $\\mathrm{-CHO}$ group."
                }
            ]
        }
        ,
        {
            id: "mat20",
            name: "MAT",
            subject: "MAT",
            accent: "slate",
            blurb: "Q181–200 · series, coding, analogy, blood relations, direction sense, arithmetic and non-verbal reasoning.",
            questions: [
                {
                    id: "d20m181",
                    text: "S, M, T, W, T, F, ?",
                    options: [
                        { key: "a", text: "S" },
                        { key: "b", text: "M" },
                        { key: "c", text: "T" },
                        { key: "d", text: "W" }
                    ],
                    answer: "a",
                    explanation: "The letters are the initials of the days of the week — <b>S</b>unday, <b>M</b>onday, <b>T</b>uesday, <b>W</b>ednesday, <b>T</b>hursday, <b>F</b>riday — so the next one is <b>S</b>aturday."
                },
                {
                    id: "d20m182",
                    text: "Ram, Hari, Shyam and Krishna live in the same village. The house of Hari is to the east of Ram's house but to the north of Shyam's house. The house of Shyam is to the west of Krishna's house. Krishna's house is in which direction from Ram's house?",
                    options: [
                        { key: "a", text: "North-East" },
                        { key: "b", text: "West" },
                        { key: "c", text: "South-East" },
                        { key: "d", text: "East" }
                    ],
                    answer: "c",
                    explanation: "Put Ram at the origin. Hari is east of Ram, so Hari is at $(2,0)$. Shyam is south of Hari, so Shyam is at $(2,-2)$. Krishna is east of Shyam, so Krishna is at $(4,-2)$. Relative to Ram $(0,0)$ that is to the east and to the south — i.e. <b>South-East</b>."
                },
                {
                    id: "d20m183",
                    text: "If REASON is coded as 5 and BELIEVED as 7, what is the code number for GOVERNMENT?",
                    options: [
                        { key: "a", text: "6" },
                        { key: "b", text: "8" },
                        { key: "c", text: "9" },
                        { key: "d", text: "10" }
                    ],
                    answer: "c",
                    explanation: "The code is simply (number of letters $-$ 1). REASON has 6 letters $\\to5$; BELIEVED has 8 letters $\\to7$; GOVERNMENT has 10 letters $\\to\\mathbf{9}$."
                },
                {
                    id: "d20m184",
                    text: "A lotus flower always has:",
                    options: [
                        { key: "a", text: "Petals" },
                        { key: "b", text: "Mud" },
                        { key: "c", text: "Root" },
                        { key: "d", text: "Water" }
                    ],
                    answer: "a",
                    explanation: "In this type of question the answer must be an <i>invariable</i> part of the thing itself, not of its surroundings. A flower by definition has petals; mud and water are only the usual habitat, and a cut lotus flower has no root."
                },
                {
                    id: "d20m185",
                    text: "There are six children playing football, namely A, B, C, D, E and F. A and E are brothers. F is a sister of E. C is the only son of A's uncle. B and D are the daughters of the brother of C's father. How many male players are there?",
                    options: [
                        { key: "a", text: "1" },
                        { key: "b", text: "3" },
                        { key: "c", text: "4" },
                        { key: "d", text: "5" }
                    ],
                    answer: "b",
                    explanation: "\"A and E are brothers\" makes both male. F is a sister, hence female. C is the only <i>son</i>, hence male. B and D are daughters, hence female. Males $=\\{A,\\ E,\\ C\\}=\\mathbf{3}$."
                },
                {
                    id: "d20m186",
                    text: "Asia : Japan :: Africa : ?",
                    options: [
                        { key: "a", text: "Argentina" },
                        { key: "b", text: "Cape Verde" },
                        { key: "c", text: "Hungary" },
                        { key: "d", text: "Albania" }
                    ],
                    answer: "b",
                    explanation: "Japan is an island country situated in Asia. The only country in the list that lies in Africa — and, like Japan, is an island nation — is Cape Verde. Argentina is in South America, Hungary and Albania are in Europe."
                },
                {
                    id: "d20m187",
                    text: "Arrange the given words in a meaningful sequence and choose the correct order: 1. Animal&nbsp; 2. Feline&nbsp; 3. Leopard&nbsp; 4. Mammal&nbsp; 5. Vertebrate",
                    options: [
                        { key: "a", text: "1, 2, 3, 4, 5" },
                        { key: "b", text: "1, 4, 3, 2, 5" },
                        { key: "c", text: "1, 3, 5, 4, 2" },
                        { key: "d", text: "1, 5, 4, 2, 3" }
                    ],
                    answer: "d",
                    explanation: "The words must run from the widest class to the narrowest: Animal $\\to$ Vertebrate $\\to$ Mammal $\\to$ Feline (cat family) $\\to$ Leopard — that is $1,\\ 5,\\ 4,\\ 2,\\ 3$."
                },
                {
                    id: "d20m188",
                    text: "A bus leaves Kathmandu with half as many women as men. At Janakpur ten men get down and five women get in. Now there are equal numbers of men and women. How many passengers boarded the bus initially at Kathmandu?",
                    options: [
                        { key: "a", text: "36" },
                        { key: "b", text: "45" },
                        { key: "c", text: "15" },
                        { key: "d", text: "30" }
                    ],
                    answer: "b",
                    explanation: "Let the men be $M$; then the women are $M/2$. After Janakpur: $M-10=\\dfrac{M}{2}+5\\Rightarrow\\dfrac{M}{2}=15\\Rightarrow M=30$, so women $=15$. Total boarding at Kathmandu $=30+15=\\mathbf{45}$."
                },
                {
                    id: "d20m189",
                    text: "Which one of the following diagrams correctly represents the relationship among <b>Questions</b>, <b>Examination</b> and <b>Practice</b>?",
                    options: [
                        { key: "a", text: "<svg viewBox='0 0 132 86' width='132' style='vertical-align:middle'><g fill='none' stroke='currentColor' stroke-width='1.8'><circle cx='36' cy='44' r='27'/><circle cx='66' cy='44' r='27'/><circle cx='96' cy='44' r='27'/></g></svg>" },
                        { key: "b", text: "<svg viewBox='0 0 132 86' width='132' style='vertical-align:middle'><g fill='none' stroke='currentColor' stroke-width='1.8'><circle cx='66' cy='44' r='34'/><circle cx='66' cy='44' r='22'/><circle cx='66' cy='44' r='10'/></g></svg>" },
                        { key: "c", text: "<svg viewBox='0 0 132 86' width='132' style='vertical-align:middle'><g fill='none' stroke='currentColor' stroke-width='1.8'><circle cx='66' cy='44' r='34'/><circle cx='52' cy='38' r='12'/><circle cx='82' cy='52' r='12'/></g></svg>" },
                        { key: "d", text: "<svg viewBox='0 0 132 86' width='132' style='vertical-align:middle'><g fill='none' stroke='currentColor' stroke-width='1.8'><circle cx='53' cy='35' r='23'/><circle cx='79' cy='35' r='23'/><circle cx='66' cy='57' r='23'/></g></svg>" }
                    ],
                    answer: "a",
                    explanation: "An examination and a practice session are two <i>different</i> activities, so their circles must not overlap. But <b>questions</b> occur in both of them, so the questions circle has to overlap each of the other two — exactly the chain of three circles in diagram (a). Diagram (d) would wrongly make examination and practice overlap, and (b)/(c) would wrongly make one term a subset of another."
                },
                {
                    id: "d20m190",
                    text: "C3 F6 : I9 L12 :: K11 N14 : ?",
                    options: [
                        { key: "a", text: "O15 R18" },
                        { key: "b", text: "R18 U21" },
                        { key: "c", text: "Q17 T20" },
                        { key: "d", text: "L12 O15" }
                    ],
                    answer: "c",
                    explanation: "Each letter is paired with its position in the alphabet, and the letters advance in steps of 3: C(3), F(6), I(9), L(12). Continuing from K(11) and N(14) the next two are Q(17) and T(20), so the answer is <b>Q17 T20</b>."
                },
                {
                    id: "d20m191",
                    text: "If 1 January 2001 was a Monday, on what day of the week did Valentine's Day, 14 February 2018, fall?",
                    options: [
                        { key: "a", text: "Thursday" },
                        { key: "b", text: "Monday" },
                        { key: "c", text: "Tuesday" },
                        { key: "d", text: "Wednesday" }
                    ],
                    answer: "d",
                    explanation: "From 1 Jan 2001 to 1 Jan 2018 there are 17 years containing 4 leap years (2004, 2008, 2012, 2016), so the odd days $=17+4=21\\equiv0\\ (\\mathrm{mod}\\ 7)$ — 1 Jan 2018 was again a Monday. From 1 Jan to 14 Feb is $30+14=44$ days later, and $44\\div7$ leaves a remainder of 2. Monday $+2=\\mathbf{Wednesday}$."
                },
                {
                    id: "d20m192",
                    text: "It was 9:35 am by Deepa's watch, which kept correct time, when Nada informed her that the last bus had left the bus stop at 9:25 am. Nada's watch is 5 minutes fast. The buses run every 20 minutes. For how long must Deepa wait to catch the next bus?",
                    options: [
                        { key: "a", text: "15 minutes" },
                        { key: "b", text: "10 minutes" },
                        { key: "c", text: "25 minutes" },
                        { key: "d", text: "5 minutes" }
                    ],
                    answer: "d",
                    explanation: "Nada's watch runs 5 minutes fast, so the bus that she timed at 9:25 actually left at <b>9:20</b>. With a 20-minute frequency the next bus leaves at 9:40. Deepa's correct time is 9:35, so she waits $9{:}40-9{:}35=\\mathbf{5}$ minutes."
                },
                {
                    id: "d20m193",
                    text: "How many diagonals can be made by joining the vertices of a hexagon?",
                    options: [
                        { key: "a", text: "9" },
                        { key: "b", text: "18" },
                        { key: "c", text: "15" },
                        { key: "d", text: "20" }
                    ],
                    answer: "a",
                    explanation: "Number of diagonals $=\\dfrac{n(n-3)}{2}=\\dfrac{6\\times3}{2}=\\mathbf{9}$. (Equivalently, $^6C_2=15$ lines join the vertices, of which 6 are sides, leaving $15-6=9$ diagonals.)"
                },
                {
                    id: "d20m194",
                    text: "Ten years ago P was half of Q in age. If the ratio of their present ages is $3:4$, what will be the total of their present ages?",
                    options: [
                        { key: "a", text: "45" },
                        { key: "b", text: "40" },
                        { key: "c", text: "35" },
                        { key: "d", text: "30" }
                    ],
                    answer: "c",
                    explanation: "Let the present ages be $3x$ and $4x$. Ten years ago: $3x-10=\\dfrac{4x-10}{2}\\Rightarrow6x-20=4x-10\\Rightarrow x=5$. So $P=15,\\ Q=20$ and the total is $\\mathbf{35}$ years."
                },
                {
                    id: "d20m195",
                    text: "A box of sweets was distributed between A and B in the ratio $3:4$. If A got 36 sweets, what was the total number of sweets?",
                    options: [
                        { key: "a", text: "12" },
                        { key: "b", text: "84" },
                        { key: "c", text: "144" },
                        { key: "d", text: "27" }
                    ],
                    answer: "b",
                    explanation: "Let the shares be $3x$ and $4x$. Then $3x=36\\Rightarrow x=12$, so B gets 48 and the total is $7x=7\\times12=\\mathbf{84}$ sweets."
                },
                {
                    id: "d20m196",
                    text: "Find the missing number '?'.<div style='margin-top:10px'><svg viewBox='0 0 214 168' width='240' style='max-width:100%'><g fill='none' stroke='currentColor' stroke-width='1.6'><circle cx='34' cy='22' r='17'/><circle cx='82' cy='22' r='17'/><circle cx='130' cy='22' r='17'/><circle cx='178' cy='22' r='17'/><circle cx='58' cy='68' r='17'/><circle cx='106' cy='68' r='17'/><circle cx='154' cy='68' r='17'/><circle cx='82' cy='114' r='17'/><circle cx='130' cy='114' r='17'/><circle cx='106' cy='152' r='14'/></g><g font-size='15' fill='currentColor' text-anchor='middle'><text x='34' y='28'>2</text><text x='82' y='28'>0</text><text x='130' y='28'>5</text><text x='178' y='28'>?</text><text x='58' y='74'>2</text><text x='106' y='74'>5</text><text x='154' y='74'>3</text><text x='82' y='120'>7</text><text x='130' y='120'>8</text><text x='106' y='157'>6</text></g></svg></div>",
                    options: [
                        { key: "a", text: "6" },
                        { key: "b", text: "7" },
                        { key: "c", text: "8" },
                        { key: "d", text: "9" }
                    ],
                    answer: "b",
                    explanation: "Each circle is the <b>digit sum of the sum of the two circles just above it</b>. Check the known ones: $2+5=7$ and $5+3=8$, then $7+8=15\\to1+5=6$ — the bottom value. Also $2+0=2$ and $0+5=5$. For the last pair, $5+?$ must give 3, i.e. $5+?=12\\Rightarrow?=\\mathbf{7}$."
                },
                {
                    id: "d20m197",
                    text: "Select the correct option that completes the series.<div style='margin-top:10px'><svg viewBox='0 0 250 68' width='260' style='max-width:100%'><g fill='none' stroke='currentColor' stroke-width='1.6'><rect x='10' y='12' width='44' height='44'/><rect x='72' y='12' width='44' height='44'/><rect x='134' y='12' width='44' height='44'/><rect x='196' y='12' width='44' height='44'/></g><polygon points='10,12 32,12 10,34' fill='currentColor'/><polygon points='116,12 94,12 116,34' fill='currentColor'/><polygon points='178,56 178,34 156,56' fill='currentColor'/><text x='218' y='44' font-size='20' fill='currentColor' text-anchor='middle'>?</text></svg></div>",
                    options: [
                        { key: "a", text: "<svg viewBox='0 0 56 56' width='54' style='vertical-align:middle'><rect x='6' y='6' width='44' height='44' fill='none' stroke='currentColor' stroke-width='1.6'/><polygon points='6,6 28,6 6,28' fill='currentColor'/></svg>" },
                        { key: "b", text: "<svg viewBox='0 0 56 56' width='54' style='vertical-align:middle'><rect x='6' y='6' width='44' height='44' fill='none' stroke='currentColor' stroke-width='1.6'/><polygon points='50,6 28,6 50,28' fill='currentColor'/></svg>" },
                        { key: "c", text: "<svg viewBox='0 0 56 56' width='54' style='vertical-align:middle'><rect x='6' y='6' width='44' height='44' fill='none' stroke='currentColor' stroke-width='1.6'/><polygon points='6,50 6,28 28,50' fill='currentColor'/></svg>" },
                        { key: "d", text: "<svg viewBox='0 0 56 56' width='54' style='vertical-align:middle'><rect x='6' y='6' width='44' height='44' fill='none' stroke='currentColor' stroke-width='1.6'/><circle cx='28' cy='28' r='9' fill='currentColor'/></svg>" }
                    ],
                    answer: "c",
                    explanation: "The shaded corner triangle turns through $90^{\\circ}$ clockwise at every step: top-left $\\to$ top-right $\\to$ bottom-right $\\to$ <b>bottom-left</b>. Option (c) shows the triangle in the bottom-left corner, so it completes the series."
                },
                {
                    id: "d20m198",
                    text: "Four of the five pieces below can be fitted together to form a perfect circle. Which are they?<div style='margin-top:10px'><svg viewBox='0 0 466 92' width='420' style='max-width:100%'><g fill='none' stroke='currentColor' stroke-width='2'><path d='M34 14 L78 14 A44 44 0 0 1 34 58 Z'/><path d='M126 14 L170 14 A44 44 0 0 1 104 52.1 Z'/><path d='M218 14 L262 14 A44 44 0 0 1 218 58 Z'/><path d='M310 14 L354 14 A44 44 0 0 1 332 52.1 Z'/><path d='M402 14 L446 14 A44 44 0 0 1 433.1 45.1 Z'/></g><g font-size='14' fill='currentColor' text-anchor='middle'><text x='50' y='84'>A</text><text x='136' y='84'>B</text><text x='234' y='84'>C</text><text x='324' y='84'>D</text><text x='416' y='84'>E</text></g></svg></div>",
                    options: [
                        { key: "a", text: "A B C D" },
                        { key: "b", text: "A B C E" },
                        { key: "c", text: "A B D E" },
                        { key: "d", text: "B C D E" }
                    ],
                    answer: "a",
                    explanation: "Measure the angle at the tip of each sector: A $=90^{\\circ}$, B $=120^{\\circ}$, C $=90^{\\circ}$, D $=60^{\\circ}$ and E $=45^{\\circ}$. Only a set summing to exactly $360^{\\circ}$ can close a circle, and $90+120+90+60=\\mathbf{360^{\\circ}}$ — that is <b>A, B, C, D</b>. Every combination that includes E falls short or overshoots."
                },
                {
                    id: "d20m199",
                    text: "What should replace the question mark?<div style='margin-top:10px'><svg viewBox='0 0 268 70' width='270' style='max-width:100%'><g fill='none' stroke='currentColor' stroke-width='1.6'><polygon points='34,10 58,34 34,58 10,34'/><polygon points='100,10 124,34 100,58 76,34'/><polygon points='166,10 190,34 166,58 142,34'/><polygon points='232,10 256,34 232,58 208,34'/></g><g stroke='currentColor' stroke-width='1.3'><circle cx='34' cy='22' r='4.5' fill='currentColor'/><circle cx='46' cy='34' r='4.5' fill='none'/><circle cx='34' cy='46' r='4.5' fill='none'/><circle cx='22' cy='34' r='4.5' fill='none'/><circle cx='100' cy='22' r='4.5' fill='none'/><circle cx='112' cy='34' r='4.5' fill='currentColor'/><circle cx='100' cy='46' r='4.5' fill='none'/><circle cx='88' cy='34' r='4.5' fill='none'/><circle cx='166' cy='22' r='4.5' fill='none'/><circle cx='178' cy='34' r='4.5' fill='none'/><circle cx='166' cy='46' r='4.5' fill='currentColor'/><circle cx='154' cy='34' r='4.5' fill='none'/></g><text x='232' y='40' font-size='18' fill='currentColor' text-anchor='middle'>?</text></svg></div>",
                    options: [
                        { key: "a", text: "<svg viewBox='0 0 68 68' width='62' style='vertical-align:middle'><polygon points='34,6 62,34 34,62 6,34' fill='none' stroke='currentColor' stroke-width='1.6'/><circle cx='34' cy='20' r='5' fill='currentColor' stroke='currentColor'/><circle cx='48' cy='34' r='5' fill='none' stroke='currentColor'/><circle cx='34' cy='48' r='5' fill='none' stroke='currentColor'/><circle cx='20' cy='34' r='5' fill='none' stroke='currentColor'/></svg>" },
                        { key: "b", text: "<svg viewBox='0 0 68 68' width='62' style='vertical-align:middle'><polygon points='34,6 62,34 34,62 6,34' fill='none' stroke='currentColor' stroke-width='1.6'/><circle cx='34' cy='20' r='5' fill='none' stroke='currentColor'/><circle cx='48' cy='34' r='5' fill='currentColor' stroke='currentColor'/><circle cx='34' cy='48' r='5' fill='none' stroke='currentColor'/><circle cx='20' cy='34' r='5' fill='none' stroke='currentColor'/></svg>" },
                        { key: "c", text: "<svg viewBox='0 0 68 68' width='62' style='vertical-align:middle'><polygon points='34,6 62,34 34,62 6,34' fill='none' stroke='currentColor' stroke-width='1.6'/><circle cx='34' cy='20' r='5' fill='none' stroke='currentColor'/><circle cx='48' cy='34' r='5' fill='none' stroke='currentColor'/><circle cx='34' cy='48' r='5' fill='currentColor' stroke='currentColor'/><circle cx='20' cy='34' r='5' fill='none' stroke='currentColor'/></svg>" },
                        { key: "d", text: "<svg viewBox='0 0 68 68' width='62' style='vertical-align:middle'><polygon points='34,6 62,34 34,62 6,34' fill='none' stroke='currentColor' stroke-width='1.6'/><circle cx='34' cy='20' r='5' fill='none' stroke='currentColor'/><circle cx='48' cy='34' r='5' fill='none' stroke='currentColor'/><circle cx='34' cy='48' r='5' fill='none' stroke='currentColor'/><circle cx='20' cy='34' r='5' fill='currentColor' stroke='currentColor'/></svg>" }
                    ],
                    answer: "d",
                    explanation: "Every tile carries four dots and exactly one of them is solid. Going from tile to tile the solid dot moves one position <b>clockwise</b>: top $\\to$ right $\\to$ bottom $\\to$ <b>left</b>. So the fourth tile must have the solid dot on the left, which is option (d)."
                },
                {
                    id: "d20m200",
                    text: "Theta : Phi : Omega",
                    options: [
                        { key: "a", text: "These are Latin alphabets" },
                        { key: "b", text: "These are signs of algebra" },
                        { key: "c", text: "These are Greek letters" },
                        { key: "d", text: "These are used in physical derivations" }
                    ],
                    answer: "c",
                    explanation: "$\\theta,\\ \\phi$ and $\\omega$ are the 8th, 21st and 24th letters of the Greek alphabet. That common property defines the group. Being used in physics is only an application of some Greek letters, not what the three have in common by definition."
                }
            ]
        }
    ]
};

/* Topic names and `weight` (questions the unit carries in the real CEE paper) follow the
   official MEC "Syllabus for Bachelor Level Common Entrance Examination (2020, revised 2026)". */
const DAY20_SYLLABUS = [
    { subject: "Physics", accent: "blue", topics: [
        { topic: "1. Mechanics", weight: 10, subs: [
            { name: "Physical Quantities, Vectors & Scalars", ids: ["d20p1", "d20p2"] },
            { name: "Kinematics", ids: ["d20p3"] },
            { name: "Dynamics", ids: ["d20p4"] },
            { name: "Rotational Dynamics", ids: ["d20p6"] },
            { name: "Fluid Statics & Dynamics", ids: ["d20p8", "d20p9"] },
            { name: "Circular & Periodic Motion", ids: ["d20p5", "d20p7"] },
            { name: "Gravity", ids: ["d20p10"] }
        ] },
        { topic: "2. Heat & Thermodynamics", weight: 7, subs: [
            { name: "Heat, Temperature & Thermometers", ids: ["d20p11"] },
            { name: "Thermal Expansion", ids: ["d20p12"] },
            { name: "Quantity of Heat", ids: ["d20p13"] },
            { name: "Ideal Gas", ids: ["d20p14"] },
            { name: "First Law of Thermodynamics", ids: ["d20p15"] },
            { name: "Second Law of Thermodynamics", ids: ["d20p16"] }
        ] },
        { topic: "3. Waves & Optics", weight: 8, subs: [
            { name: "Wave Motion", ids: ["d20p22"] },
            { name: "Stationary Waves", ids: ["d20p21"] },
            { name: "Acoustic Phenomena", ids: ["d20p24"] },
            { name: "Reflection, Refraction & Dispersion", ids: ["d20p18", "d20p19", "d20p20"] },
            { name: "Interference", ids: ["d20p23"] }
        ] },
        { topic: "4. Current Electricity & Magnetism", weight: 9, subs: [
            { name: "Electrical Circuits & Instruments", ids: ["d20p25", "d20p31"] },
            { name: "Thermoelectric Effect", ids: ["d20p28"] },
            { name: "Alternating Currents", ids: ["d20p34"] },
            { name: "Magnetic Properties of Materials", ids: ["d20p17"] },
            { name: "Magnetic Field", ids: ["d20p26", "d20p29"] },
            { name: "Electromagnetic Induction", ids: ["d20p32"] }
        ] },
        { topic: "5. Electrostatics & Capacitors", weight: 4, subs: [
            { name: "Electric Charge & Electric Field", ids: ["d20p27"] },
            { name: "Field Strength, Potential & Gauss's Law", ids: ["d20p30", "d20p33", "d20p36"] },
            { name: "Capacitors", ids: ["d20p35"] }
        ] },
        { topic: "6. Modern Physics", weight: 12, subs: [
            { name: "Nuclear Physics", ids: ["d20p39", "d20p47"] },
            { name: "Electron", ids: ["d20p38", "d20p41"] },
            { name: "Photon & Photoelectric Effect", ids: ["d20p40", "d20p42"] },
            { name: "Wave–Particle Duality", ids: ["d20p37"] },
            { name: "Radioactivity", ids: ["d20p49"] },
            { name: "Solids & Semiconductor Devices", ids: ["d20p43", "d20p44", "d20p45"] },
            { name: "Particle Physics & Recent Trends", ids: ["d20p46", "d20p48", "d20p50"] }
        ] }
    ] },
    { subject: "Zoology", accent: "rose", topics: [
        { topic: "1. Evolutionary Biology", weight: 3, subs: [
            { name: "Evidences of Evolution", ids: ["d20z52"] },
            { name: "Theories of Evolution", ids: ["d20z51"] },
            { name: "Human Evolution", ids: ["d20z53"] }
        ] },
        { topic: "2. Animal Diversity & Classification", weight: 4, subs: [
            { name: "Diagnostic Features: Protozoa to Chordata", ids: ["d20z54", "d20z62", "d20z63"] },
            { name: "Body Plans & Classification", ids: ["d20z60", "d20z61"] }
        ] },
        { topic: "3. Animal Tissues & Histology", weight: 4, subs: [
            { name: "Epithelial Tissue", ids: ["d20z70"] },
            { name: "Connective Tissue", ids: ["d20z71"] },
            { name: "Nervous Tissue & Receptors", ids: ["d20z73", "d20z85"] }
        ] },
        { topic: "4. Study of Selected Animals", weight: 6, subs: [
            { name: "Plasmodium & Malaria", ids: ["d20z56", "d20z57"] },
            { name: "Earthworm (Pheretima)", ids: ["d20z58", "d20z59"] },
            { name: "Frog (Rana)", ids: ["d20z55"] }
        ] },
        { topic: "5. Human Biology & Physiology", weight: 15, subs: [
            { name: "Digestive System", ids: ["d20z74", "d20z79"] },
            { name: "Respiratory System", ids: ["d20z78"] },
            { name: "Circulatory System", ids: ["d20z72", "d20z75", "d20z81"] },
            { name: "Excretory System", ids: ["d20z83", "d20z89"] },
            { name: "Nervous System", ids: ["d20z80", "d20z90"] },
            { name: "Sense Organs", ids: ["d20z84"] },
            { name: "Endocrinology", ids: ["d20z76", "d20z77"] },
            { name: "Reproductive System", ids: ["d20z82", "d20z88"] }
        ] },
        { topic: "6. Microbial Diseases & Immunology", weight: 4, subs: [
            { name: "Diseases (TB, HIV, Hepatitis…)", ids: ["d20z66", "d20z67", "d20z68"] },
            { name: "Immunity & Vaccines", ids: ["d20z69"] }
        ] },
        { topic: "7. Medical Technology & Applied Biology", weight: 2, subs: [
            { name: "Amniocentesis & Transgenic Organisms", ids: ["d20z86", "d20z87"] },
            { name: "Applied Microbiology & Nutrition", ids: ["d20z65"] }
        ] },
        { topic: "8. Biota, Environment & Conservation", weight: 2, subs: [
            { name: "Environmental Pollution", ids: ["d20z64"] }
        ] }
    ] },
    { subject: "Botany", accent: "emerald", topics: [
        { topic: "1. Basic Components of Life", weight: 2, subs: [
            { name: "Carbohydrates", ids: ["d20b110"] },
            { name: "Proteins & Enzymes", ids: ["d20b109"] }
        ] },
        { topic: "2. Biodiversity", weight: 9, subs: [
            { name: "Classification Systems", ids: ["d20b124"] },
            { name: "Monera & Virus", ids: ["d20b121"] },
            { name: "Fungi & Lichens", ids: ["d20b122", "d20b123"] },
            { name: "Bryophytes & Pteridophytes", ids: ["d20b119", "d20b120"] },
            { name: "Gymnosperms", ids: ["d20b118"] },
            { name: "Angiosperms: Families & Morphology", ids: ["d20b116", "d20b117"] },
            { name: "Economic Importance & Medicinal Plants of Nepal", ids: ["d20b91"] }
        ] },
        { topic: "3. Ecology & Vegetation", weight: 4, subs: [
            { name: "Ecosystem Ecology", ids: ["d20b108"] },
            { name: "Biogeochemical Cycles", ids: ["d20b105"] },
            { name: "Vegetation, Adaptation & Succession", ids: ["d20b106", "d20b107"] }
        ] },
        { topic: "4. Cell Biology", weight: 5, subs: [
            { name: "Cell Theory & Cell Types", ids: ["d20b112"] },
            { name: "Cell Membrane", ids: ["d20b115"] },
            { name: "Cell Organelles", ids: ["d20b114"] },
            { name: "Cell Cycle & Cell Division", ids: ["d20b111", "d20b113"] }
        ] },
        { topic: "5. Genetics", weight: 6, subs: [
            { name: "Genetic Material & DNA Replication", ids: ["d20b128"] },
            { name: "Central Dogma & Genetic Code", ids: ["d20b129", "d20b130"] },
            { name: "Mendelian Genetics", ids: ["d20b127"] },
            { name: "Sex-linked Inheritance", ids: ["d20b126"] },
            { name: "Mutation & Polyploidy", ids: ["d20b125"] }
        ] },
        { topic: "6. Plant Anatomy", weight: 3, subs: [
            { name: "Plant Tissues & Secondary Growth", ids: ["d20b93"] },
            { name: "Types of Vascular Bundles", ids: ["d20b102"] },
            { name: "Monocot & Dicot Root, Stem & Leaf", ids: ["d20b104"] }
        ] },
        { topic: "7. Plant Physiology", weight: 6, subs: [
            { name: "Water Relations, Transpiration & Guttation", ids: ["d20b100", "d20b103"] },
            { name: "Photosynthesis", ids: ["d20b97"] },
            { name: "Respiration", ids: ["d20b99"] },
            { name: "Plant Growth & Photoperiodism", ids: ["d20b101"] }
        ] },
        { topic: "8. Developmental Botany", weight: 2, subs: [
            { name: "Pollination & its Types", ids: ["d20b94", "d20b95"] },
            { name: "Gametogenesis & Fertilisation", ids: ["d20b98"] }
        ] },
        { topic: "9. Applied Botany", weight: 3, subs: [
            { name: "Plant Tissue Culture", ids: ["d20b92"] },
            { name: "Genetic Engineering", ids: ["d20b96"] }
        ] }
    ] },
    { subject: "Chemistry", accent: "amber", topics: [
        { topic: "1. Physical Chemistry", weight: 17, subs: [
            { name: "Stoichiometry", ids: ["d20c141"] },
            { name: "Atomic Structure", ids: ["d20c132"] },
            { name: "Chemical Bonding & Shape of Molecules", ids: ["d20c144"] },
            { name: "Redox Reaction", ids: ["d20c135", "d20c137", "d20c142"] },
            { name: "States of Matter", ids: ["d20c145"] },
            { name: "Chemical Equilibrium", ids: ["d20c138", "d20c158"] },
            { name: "Volumetric Analysis & Concentration Terms", ids: ["d20c131", "d20c134"] },
            { name: "Ionic Equilibrium", ids: ["d20c136", "d20c139"] },
            { name: "Chemical Kinetics", ids: ["d20c143"] },
            { name: "Electrochemistry", ids: ["d20c140", "d20c146"] },
            { name: "Chemical Thermodynamics", ids: ["d20c147"] },
            { name: "Nuclear Chemistry", ids: ["d20c148"] }
        ] },
        { topic: "2. Inorganic Chemistry", weight: 10, subs: [
            { name: "Chemistry of Non-metals", ids: ["d20c152", "d20c153"] },
            { name: "Chemistry of Metals & Metallurgy", ids: ["d20c133", "d20c154", "d20c155", "d20c157"] },
            { name: "Coordination Compounds", ids: ["d20c156"] },
            { name: "Bio-inorganic Chemistry", ids: ["d20c151"] }
        ] },
        { topic: "3. Organic Chemistry", weight: 17, subs: [
            { name: "General Organic Chemistry", ids: ["d20c165", "d20c178"] },
            { name: "Hydrocarbons", ids: ["d20c170", "d20c175"] },
            { name: "Haloalkanes & Haloarenes", ids: ["d20c172", "d20c177"] },
            { name: "Aldehydes, Ketones & Carboxylic Acids", ids: ["d20c168", "d20c180"] },
            { name: "Nitro-compounds", ids: ["d20c179"] },
            { name: "Amines & Diazonium Salts", ids: ["d20c164", "d20c176"] },
            { name: "Biomolecules", ids: ["d20c163", "d20c169", "d20c173"] }
        ] },
        { topic: "4. Applied Chemistry", weight: 3, subs: [
            { name: "Manufacturing Processes", ids: ["d20c160", "d20c161"] },
            { name: "Chemistry in Service to Mankind", ids: ["d20c159", "d20c166", "d20c167"] },
            { name: "Environmental Effect of Chemical Industry", ids: ["d20c149"] }
        ] },
        { topic: "5. Analytical Chemistry", weight: 3, subs: [
            { name: "Chemical & Distinction Tests", ids: ["d20c150", "d20c162", "d20c171", "d20c174"] }
        ] }
    ] },
    { subject: "MAT", accent: "slate", topics: [
        { topic: "1. Verbal Reasoning", weight: 5, subs: [
            { name: "Coding–Decoding", ids: ["d20m183", "d20m190"] },
            { name: "Analogy & Classification", ids: ["d20m184", "d20m186", "d20m200"] }
        ] },
        { topic: "2. Numerical Reasoning", weight: 5, subs: [
            { name: "Ages, Ratio & Distribution", ids: ["d20m188", "d20m194", "d20m195"] },
            { name: "Time, Calendar & Clocks", ids: ["d20m191", "d20m192"] },
            { name: "Geometry & Counting", ids: ["d20m193"] }
        ] },
        { topic: "3. Logical Sequencing", weight: 5, subs: [
            { name: "Series & Meaningful Order", ids: ["d20m181", "d20m187"] },
            { name: "Blood Relations", ids: ["d20m185"] },
            { name: "Venn Diagrams", ids: ["d20m189"] },
            { name: "Number Puzzles", ids: ["d20m196"] }
        ] },
        { topic: "4. Spatial Relation / Abstract Reasoning", weight: 5, subs: [
            { name: "Direction Sense", ids: ["d20m182"] },
            { name: "Figure Series & Pattern Completion", ids: ["d20m197", "d20m199"] },
            { name: "Figure Assembly", ids: ["d20m198"] }
        ] }
    ] }
];
DAY20.syllabus = DAY20_SYLLABUS;
