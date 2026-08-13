/* ============================================================
   DAY 26 — MAGNETISM + BIOMOLECULES + HUMAN PHYSIOLOGY
   100 questions · 90 minutes · 0.25 negative marking

     Magnetic properties of materials ... 12   d26p1  – d26p12
     Magnetic field ..................... 26   d26p13 – d26p38
     Electromagnetic induction .......... 22   d26p39 – d26p60
     Biomolecules (Botany unit 1) ....... 20   d26b61 – d26b80
     Human biology (Zoology unit 5) ..... 20   d26z81 – d26z100

   Questions are new: none repeats the Day 19 / Day 21 magnetism
   sets, the Day 24 / Day 25 biomolecule sets or the Day 22 /
   Day 23 human-physiology sets.
   ============================================================ */
const DAY26 = {
    day: 26,
    title: "Day 26",
    subtitle: "Magnetism · Biomolecules · Human Physiology",
    durationMinutes: 90,
    negativeMarking: 0.25,
    chapters: [
        {
            id: "magmat26",
            name: "Magnetic Properties of Materials",
            subject: "Physics",
            accent: "blue",
            blurb: "Q1–12 · domains, susceptibility, relative permeability and hysteresis in diamagnetic, paramagnetic and ferromagnetic materials.",
            questions: [
                {
                    id: "d26p1",
                    text: "Diamagnetism is exhibited, at least weakly, by every substance, and its magnitude is practically independent of temperature. This is because a diamagnetic moment arises from:",
                    options: [
                        { key: "a", text: "The alignment of permanent atomic dipoles along the field" },
                        { key: "b", text: "The spin of unpaired electrons left in the outermost shell" },
                        { key: "c", text: "A change in the orbital motion of electrons induced by the field" },
                        { key: "d", text: "The rotation of whole domains towards the direction of the field" }
                    ],
                    answer: "c",
                    explanation: "An applied field speeds up or slows down the orbital motion of the electrons (Larmor precession), and by Lenz's law the induced moment always <strong>opposes</strong> the field. Since no permanent dipole has to be aligned against thermal agitation, $\\chi$ is small, <strong>negative and nearly temperature independent</strong>. In paramagnetic and ferromagnetic substances this effect is present too, but is swamped by the much larger alignment of permanent moments."
                },
                {
                    id: "d26p2",
                    text: "The susceptibility of a paramagnetic substance falls as its temperature is raised because:",
                    options: [
                        { key: "a", text: "The material gradually changes into a diamagnetic substance" },
                        { key: "b", text: "The magnetic moment of each individual atom becomes smaller" },
                        { key: "c", text: "The number of atoms per unit volume increases with heating" },
                        { key: "d", text: "Increased thermal agitation disturbs the alignment of the dipoles" }
                    ],
                    answer: "d",
                    explanation: "A paramagnetic substance owns permanent atomic dipoles, but they point at random. The field tries to line them up while <strong>thermal motion tends to randomise them</strong>, so the degree of alignment — and hence $\\chi$ — falls as $T$ rises. Curie's law expresses this as $\\chi = C/T$: the susceptibility is inversely proportional to the absolute temperature."
                },
                {
                    id: "d26p3",
                    text: "At the atomic level, a substance is diamagnetic when its atoms or ions have:",
                    options: [
                        { key: "a", text: "One unpaired electron in an inner incomplete shell" },
                        { key: "b", text: "A very large number of electrons in the outermost shell" },
                        { key: "c", text: "All their electrons paired, so the net moment is zero" },
                        { key: "d", text: "Nuclei whose magnetic moment exceeds the electronic one" }
                    ],
                    answer: "c",
                    explanation: "When every orbital is filled, the orbital and spin moments cancel in pairs and the atom has <strong>no permanent magnetic moment</strong>; only the induced, opposing moment survives. Bismuth, copper, water, sodium chloride and the inert gases are diamagnetic for this reason. Aluminium, platinum and liquid oxygen have <strong>unpaired electrons</strong> and are paramagnetic, oxygen strikingly so."
                },
                {
                    id: "d26p4",
                    text: "A specimen is placed in a uniform magnetic field and the pattern of the lines of force is examined. The lines crowd very strongly into the specimen. The material is:",
                    options: [
                        { key: "a", text: "Diamagnetic, its permeability being slightly less than $\\mu_0$" },
                        { key: "b", text: "Paramagnetic, its permeability being slightly more than $\\mu_0$" },
                        { key: "c", text: "Non-magnetic, its permeability being exactly equal to $\\mu_0$" },
                        { key: "d", text: "Ferromagnetic, its permeability being far greater than $\\mu_0$" }
                    ],
                    answer: "d",
                    explanation: "The number of lines threading a specimen measures its permeability. A <strong>ferromagnetic</strong> body ($\\mu_r$ of the order of $10^3$–$10^5$) sucks the lines in so that they crowd through it; a <strong>paramagnetic</strong> body draws them in slightly; a <strong>diamagnetic</strong> body pushes them out, so that they are slightly thinned inside it."
                },
                {
                    id: "d26p5",
                    text: "A delicate instrument is protected from a stray magnetic field by enclosing it in a box made of:",
                    options: [
                        { key: "a", text: "Soft iron, which draws the lines of force into its own walls" },
                        { key: "b", text: "Copper, whose diamagnetism cancels the outside field exactly" },
                        { key: "c", text: "Hardened steel, whose high coercivity blocks the field" },
                        { key: "d", text: "Any thick insulator, since magnetism cannot cross an insulator" }
                    ],
                    answer: "a",
                    explanation: "This is <strong>magnetic shielding</strong>. Because soft iron has an enormous permeability, the lines of force find it a far easier path than air and are guided round the cavity through the walls, leaving the space inside almost field-free. Magnetic lines cannot be cut off by an insulator or by a vacuum — they can only be <em>diverted</em>, which is why a high-permeability enclosure is used."
                },
                {
                    id: "d26p6",
                    text: "The magnetisation that a ferromagnetic specimen retains after the magnetising field has been reduced to zero is called its:",
                    options: [
                        { key: "a", text: "Coercivity, measured by the reverse field needed to demagnetise it" },
                        { key: "b", text: "Saturation, measured by the largest magnetisation it can acquire" },
                        { key: "c", text: "Permeability, measured by the ratio of $B$ to $H$ at that point" },
                        { key: "d", text: "Retentivity, measured by the residual flux density left in it" }
                    ],
                    answer: "d",
                    explanation: "On the hysteresis loop the intercept on the $B$-axis is the <strong>remanence or retentivity</strong> — the flux density left when $H = 0$, caused by domains that fail to return to their random arrangement. The intercept on the $H$-axis is the <strong>coercivity</strong>, the reverse field that must be applied to wipe the remanence out. The two are independent properties of a material."
                },
                {
                    id: "d26p7",
                    text: "Steel is preferred to soft iron for making a permanent magnet because steel has:",
                    options: [
                        { key: "a", text: "Low retentivity together with low coercivity" },
                        { key: "b", text: "High retentivity but very low coercivity" },
                        { key: "c", text: "High retentivity together with high coercivity" },
                        { key: "d", text: "Low retentivity but very high coercivity" }
                    ],
                    answer: "c",
                    explanation: "A permanent magnet must stay magnetised (<strong>high retentivity</strong>) and must resist being demagnetised by stray fields, shocks or heating (<strong>high coercivity</strong>), so its hysteresis loop is broad and tall — steel, alnico and ticonal answer this. Soft iron has a tall but very narrow loop: it magnetises strongly yet loses it at once, which is exactly what an <em>electromagnet</em> or a transformer core needs."
                },
                {
                    id: "d26p8",
                    text: "In a complete cycle of magnetisation the flux density $B$ lags behind the magnetising field $H$. The direct consequence of this lag is that:",
                    options: [
                        { key: "a", text: "The specimen becomes permanently unmagnetisable after one cycle" },
                        { key: "b", text: "Energy proportional to the area of the loop is dissipated as heat" },
                        { key: "c", text: "The permeability of the specimen stays constant during the cycle" },
                        { key: "d", text: "The magnetisation reaches saturation at a much smaller field" }
                    ],
                    answer: "b",
                    explanation: "<strong>Hysteresis</strong> means that $B$ depends not only on the present $H$ but on the previous history of the specimen; the $B$–$H$ curve therefore does not retrace itself and encloses a loop. The work done per unit volume per cycle in driving the domain walls against internal friction equals the <strong>area of the loop</strong> and appears as heat, which is why an a.c. machine core warms up."
                },
                {
                    id: "d26p9",
                    text: "A magnetising field of $500\\ \\mathrm{A\\,m^{-1}}$ produces a flux density of $0.4\\ \\mathrm{T}$ in a specimen. Taking $\\mu_0 = 4\\pi\\times10^{-7}\\ \\mathrm{T\\,m\\,A^{-1}}$, the relative permeability of the specimen is nearly:",
                    options: [
                        { key: "a", text: "$6.4\\times10^{2}$" },
                        { key: "b", text: "$8.0\\times10^{2}$" },
                        { key: "c", text: "$1.6\\times10^{3}$" },
                        { key: "d", text: "$6.4\\times10^{3}$" }
                    ],
                    answer: "a",
                    explanation: "The permeability is $\\mu = B/H = 0.4/500 = 8\\times10^{-4}\\ \\mathrm{T\\,m\\,A^{-1}}$. Hence $\\mu_r = \\mu/\\mu_0 = 8\\times10^{-4}/(4\\pi\\times10^{-7}) = 8\\times10^{-4}/(1.257\\times10^{-6}) \\approx 6.4\\times10^{2}$. A value of several hundred marks the specimen as <strong>ferromagnetic</strong>."
                },
                {
                    id: "d26p10",
                    text: "A rod of magnetic susceptibility $499$ is placed in a magnetising field $H$. Inside the rod the flux density is:",
                    options: [
                        { key: "a", text: "$499\\,\\mu_0 H$" },
                        { key: "b", text: "$500\\,\\mu_0 H$" },
                        { key: "c", text: "$\\mu_0 H/500$" },
                        { key: "d", text: "$501\\,\\mu_0 H$" }
                    ],
                    answer: "b",
                    explanation: "Inside a magnetised material $B = \\mu_0 (H + M)$ and $M = \\chi H$, so $B = \\mu_0 H(1+\\chi) = \\mu_0\\mu_r H$. Here $\\mu_r = 1 + \\chi = 1 + 499 = 500$, giving $B = 500\\,\\mu_0 H$. Note that the contribution of the material, $\\mu_0 M = 499\\,\\mu_0 H$, is only <em>part</em> of the total; the applied field itself supplies the remaining $\\mu_0 H$."
                },
                {
                    id: "d26p11",
                    text: "As the magnetising field applied to a ferromagnetic specimen is increased steadily, the magnetisation at first rises rapidly and then becomes constant. The constant value is reached when:",
                    options: [
                        { key: "a", text: "The specimen has been heated above its Curie temperature" },
                        { key: "b", text: "The domain walls have vanished and the domains have dissolved" },
                        { key: "c", text: "All the domains are aligned along the direction of the field" },
                        { key: "d", text: "The susceptibility of the specimen has fallen exactly to zero" }
                    ],
                    answer: "c",
                    explanation: "Magnetisation proceeds in two stages: in weak fields the domains favourably oriented <strong>grow at the expense of the others by wall movement</strong>, and in strong fields the remaining domains <strong>rotate bodily</strong> into the field direction. Once every domain points along the field no further increase is possible and the specimen is at <strong>saturation magnetisation</strong>; extra $H$ then adds only the $\\mu_0 H$ term to $B$."
                },
                {
                    id: "d26p12",
                    text: "A piece of unmagnetised soft iron is attracted by either pole of a bar magnet held near it. The reason is that the iron:",
                    options: [
                        { key: "a", text: "Always carries a permanent north pole on the face turned to the magnet" },
                        { key: "b", text: "Is repelled by a north pole and attracted only by a south pole" },
                        { key: "c", text: "Acquires a net electric charge of the opposite sign by induction" },
                        { key: "d", text: "Becomes magnetised by induction with an unlike pole facing the magnet" }
                    ],
                    answer: "d",
                    explanation: "The field of the magnet aligns the domains of the iron, so the near face always develops the <strong>opposite (unlike) pole</strong> and the far face the like pole. The unlike pole is nearer, so attraction always exceeds repulsion — hence <strong>attraction to either pole</strong>. This is magnetic induction, and it is also why iron filings cling to a magnet in chains."
                }
            ]
        },
        {
            id: "magfld26",
            name: "Magnetic Field & Magnetic Force",
            subject: "Physics",
            accent: "cyan",
            blurb: "Q13–38 · B-field of a straight conductor, circular coil and solenoid; force on a moving charge and on a current-carrying conductor or coil; Hall effect.",
            questions: [
                {
                    id: "d26p13",
                    text: "According to the Biot–Savart law, the flux density $dB$ produced at a point by a current element $I\\,dl$ is:",
                    options: [
                        { key: "a", text: "Independent of $\\theta$ and inversely proportional to $r^3$" },
                        { key: "b", text: "Proportional to $\\cos\\theta$ and inversely proportional to $r$" },
                        { key: "c", text: "Proportional to $\\sin\\theta$ and inversely proportional to $r$" },
                        { key: "d", text: "Proportional to $\\sin\\theta$ and inversely proportional to $r^2$" }
                    ],
                    answer: "d",
                    explanation: "The law states $dB = \\dfrac{\\mu_0}{4\\pi}\\dfrac{I\\,dl\\sin\\theta}{r^2}$, where $\\theta$ is the angle between the element and the line joining it to the point. Hence $dB$ is <strong>zero for a point on the axis of the element</strong> ($\\theta = 0$) and greatest for a point on its perpendicular ($\\theta = 90^\\circ$). The direction of $d\\vec B$ is that of $d\\vec l \\times \\hat r$, i.e. perpendicular to the plane containing the element and the point."
                },
                {
                    id: "d26p14",
                    text: "A long vertical wire carries a steady current vertically upwards. At a point lying due east of the wire the magnetic field is directed:",
                    options: [
                        { key: "a", text: "Vertically upwards, parallel to the current in the wire" },
                        { key: "b", text: "Horizontally towards the north" },
                        { key: "c", text: "Horizontally towards the south" },
                        { key: "d", text: "Horizontally towards the west, away from the wire" }
                    ],
                    answer: "b",
                    explanation: "By the <strong>right-hand grip rule</strong>, with the thumb pointing up along the current the fingers curl anticlockwise as seen from above. At a point east of the wire the tangent to that circle points <strong>north</strong>. The field lines are concentric horizontal circles round the wire, always perpendicular to the wire and to the radius, and their magnitude is $B = \\mu_0 I/2\\pi r$."
                },
                {
                    id: "d26p15",
                    text: "Ampère's circuital law states that around any closed path in a magnetic field:",
                    options: [
                        { key: "a", text: "$\\oint \\vec B\\cdot d\\vec l = \\mu_0 I$, $I$ being the current enclosed" },
                        { key: "b", text: "$\\oint \\vec B\\cdot d\\vec A = \\mu_0 I$, $I$ being the total current present" },
                        { key: "c", text: "$\\oint \\vec B\\cdot d\\vec l = 0$ whatever current may be enclosed" },
                        { key: "d", text: "$\\oint \\vec B\\cdot d\\vec l = \\mu_0 I r$, $r$ being the radius of the path" }
                    ],
                    answer: "a",
                    explanation: "The line integral of $\\vec B$ round a closed loop equals $\\mu_0$ times the <strong>net current threading that loop</strong>, whatever the shape of the loop and whatever currents lie outside it. Choosing a path on which $B$ is constant and parallel to $d\\vec l$ turns the integral into $B\\times(\\text{length})$, which gives at once $B = \\mu_0 I/2\\pi r$ for a straight wire and $B = \\mu_0 n I$ inside a solenoid."
                },
                {
                    id: "d26p16",
                    text: "At what perpendicular distance from a long straight wire carrying $5\\ \\mathrm{A}$ is the magnetic flux density equal to $3.2\\times10^{-5}\\ \\mathrm{T}$, the value of the earth's horizontal field?",
                    options: [
                        { key: "a", text: "$1.6\\ \\mathrm{cm}$" },
                        { key: "b", text: "$3.1\\ \\mathrm{cm}$" },
                        { key: "c", text: "$6.3\\ \\mathrm{cm}$" },
                        { key: "d", text: "$12.5\\ \\mathrm{cm}$" }
                    ],
                    answer: "b",
                    explanation: "From $B = \\dfrac{\\mu_0 I}{2\\pi r}$, $r = \\dfrac{\\mu_0 I}{2\\pi B} = \\dfrac{2\\times10^{-7}\\times 5}{3.2\\times10^{-5}} = \\dfrac{10^{-6}}{3.2\\times10^{-5}} = 3.1\\times10^{-2}\\ \\mathrm{m}$, i.e. about $3.1$ cm. Nearer than this the wire's field dominates the earth's, which is why a compass needle placed close to a current-carrying wire swings round — the observation Oersted made in 1820."
                },
                {
                    id: "d26p17",
                    text: "The ampere is defined through the force between two long parallel conductors: it is that steady current which, flowing in each of two infinitely long parallel wires placed $1\\ \\mathrm{m}$ apart in vacuum, produces a force per unit length of:",
                    options: [
                        { key: "a", text: "$2\\times10^{-7}\\ \\mathrm{N\\,m^{-1}}$" },
                        { key: "b", text: "$4\\pi\\times10^{-7}\\ \\mathrm{N\\,m^{-1}}$" },
                        { key: "c", text: "$1\\times10^{-7}\\ \\mathrm{N\\,m^{-1}}$" },
                        { key: "d", text: "$9\\times10^{9}\\ \\mathrm{N\\,m^{-1}}$" }
                    ],
                    answer: "a",
                    explanation: "One wire sits in the field $B_1 = \\mu_0 I_1/2\\pi d$ of the other, so $\\dfrac{F}{l} = \\dfrac{\\mu_0 I_1 I_2}{2\\pi d}$. Putting $I_1 = I_2 = 1$ A and $d = 1$ m gives $F/l = 2\\times10^{-7}\\ \\mathrm{N\\,m^{-1}}$. The force is <strong>attractive for currents in the same direction</strong> and repulsive for opposite currents."
                },
                {
                    id: "d26p18",
                    text: "A circular coil carrying a current is viewed from one side, and the current is seen to circulate anticlockwise. That face of the coil behaves as:",
                    options: [
                        { key: "a", text: "A south pole, the field entering the coil at that face" },
                        { key: "b", text: "Neither pole, since a single coil has no polarity at all" },
                        { key: "c", text: "A north pole, the field emerging from the coil at that face" },
                        { key: "d", text: "A north pole only while the current is being switched on" }
                    ],
                    answer: "c",
                    explanation: "By the <strong>clock rule</strong>, a face at which the current appears <em>anti</em>clockwise is a <strong>north</strong> pole and one at which it appears clockwise is a south pole. The field lines emerge from the north face, so a current loop is equivalent to a tiny magnetic dipole of moment $m = NIA$ directed along the outward normal of the north face, as given by the right-hand rule."
                },
                {
                    id: "d26p19",
                    text: "A wire of fixed length is first bent into a single circular turn and then into $n$ smaller turns of the same total length, the same current being passed in each case. The magnetic field at the centre becomes:",
                    options: [
                        { key: "a", text: "$n$ times the original value" },
                        { key: "b", text: "Unchanged, the length of the wire being the same" },
                        { key: "c", text: "$1/n$ times the original value" },
                        { key: "d", text: "$n^2$ times the original value" }
                    ],
                    answer: "d",
                    explanation: "With one turn $2\\pi r_1 = L$, so $B_1 = \\dfrac{\\mu_0 I}{2r_1} = \\dfrac{\\pi\\mu_0 I}{L}$. With $n$ turns $2\\pi r_n n = L$, i.e. $r_n = r_1/n$, and $B_n = \\dfrac{\\mu_0 n I}{2r_n} = \\dfrac{\\pi\\mu_0 n^2 I}{L}$. The field is thus multiplied by $n^2$ — once for the extra turns and once again because each turn has become smaller."
                },
                {
                    id: "d26p20",
                    text: "Two concentric coplanar circular coils of radii $10\\ \\mathrm{cm}$ and $20\\ \\mathrm{cm}$ each carry $2\\ \\mathrm{A}$, but in opposite senses. The magnetic flux density at the common centre is:",
                    options: [
                        { key: "a", text: "Zero, the two fields cancelling exactly" },
                        { key: "b", text: "$6.3\\times10^{-6}\\ \\mathrm{T}$" },
                        { key: "c", text: "$1.3\\times10^{-5}\\ \\mathrm{T}$" },
                        { key: "d", text: "$1.9\\times10^{-5}\\ \\mathrm{T}$" }
                    ],
                    answer: "b",
                    explanation: "For a single turn $B = \\mu_0 I/2r$. Inner coil: $B_1 = \\dfrac{4\\pi\\times10^{-7}\\times2}{2\\times0.10} = 1.26\\times10^{-5}\\ \\mathrm{T}$. Outer coil: $B_2 = \\dfrac{4\\pi\\times10^{-7}\\times2}{2\\times0.20} = 6.3\\times10^{-6}\\ \\mathrm{T}$. The currents are opposed, so the fields subtract: $B = 1.26\\times10^{-5} - 6.3\\times10^{-6} = 6.3\\times10^{-6}\\ \\mathrm{T}$, directed as the inner coil's field."
                },
                {
                    id: "d26p21",
                    text: "At a point on the axis of a circular coil far away from it, the magnetic field varies with the distance $x$ from the centre as:",
                    options: [
                        { key: "a", text: "$B \\propto 1/x$, as for a long straight wire" },
                        { key: "b", text: "$B \\propto 1/x^{2}$, as for a point charge" },
                        { key: "c", text: "$B \\propto 1/x^{3}$, as for a magnetic dipole" },
                        { key: "d", text: "$B$ is independent of $x$, as inside a solenoid" }
                    ],
                    answer: "c",
                    explanation: "On the axis $B = \\dfrac{\\mu_0 N I r^2}{2(r^2+x^2)^{3/2}}$. For $x \\gg r$ this becomes $B \\approx \\dfrac{\\mu_0 N I r^2}{2x^3} = \\dfrac{\\mu_0}{4\\pi}\\dfrac{2m}{x^3}$ with $m = NI\\pi r^2$. The inverse-cube fall is exactly that of a <strong>bar magnet end-on</strong>, confirming that a current loop is a magnetic dipole."
                },
                {
                    id: "d26p22",
                    text: "A circular coil of $50$ turns and radius $4\\ \\mathrm{cm}$ carries a current of $2\\ \\mathrm{A}$. Its magnetic dipole moment is about:",
                    options: [
                        { key: "a", text: "$0.25\\ \\mathrm{A\\,m^2}$" },
                        { key: "b", text: "$0.50\\ \\mathrm{A\\,m^2}$" },
                        { key: "c", text: "$1.0\\ \\mathrm{A\\,m^2}$" },
                        { key: "d", text: "$4.0\\ \\mathrm{A\\,m^2}$" }
                    ],
                    answer: "b",
                    explanation: "$m = NIA = NI\\pi r^2 = 50\\times2\\times\\pi\\times(0.04)^2 = 100\\times5.03\\times10^{-3} = 0.50\\ \\mathrm{A\\,m^2}$. The moment is a vector along the axis, given by the right-hand rule, and it is this quantity that decides the torque $\\vec\\tau = \\vec m\\times\\vec B$ and the potential energy $U = -\\vec m\\cdot\\vec B$ of the coil in an external field."
                },
                {
                    id: "d26p23",
                    text: "The magnetic field well inside a long current-carrying solenoid is uniform and:",
                    options: [
                        { key: "a", text: "Depends on the turns per unit length and the current only" },
                        { key: "b", text: "Increases as the cross-sectional area of the solenoid is increased" },
                        { key: "c", text: "Falls off inversely as the distance from the axis of the solenoid" },
                        { key: "d", text: "Is directed at right angles to the axis of the solenoid" }
                    ],
                    answer: "a",
                    explanation: "Ampère's law applied to a rectangular path gives $B = \\mu_0 n I$, where $n$ is the number of turns <em>per metre</em>. It contains neither the radius nor the total length, so a fat solenoid and a thin one wound equally tightly give the same field; the field is <strong>parallel to the axis</strong>, uniform across the section and almost zero outside. This is the standard way of producing a uniform magnetic field in the laboratory."
                },
                {
                    id: "d26p24",
                    text: "How many turns per metre must a long air-cored solenoid have if a current of $5\\ \\mathrm{A}$ is to produce a flux density of $6.28\\times10^{-3}\\ \\mathrm{T}$ inside it?",
                    options: [
                        { key: "a", text: "$500$" },
                        { key: "b", text: "$2000$" },
                        { key: "c", text: "$1000$" },
                        { key: "d", text: "$4000$" }
                    ],
                    answer: "c",
                    explanation: "From $B = \\mu_0 n I$, $n = \\dfrac{B}{\\mu_0 I} = \\dfrac{6.28\\times10^{-3}}{4\\pi\\times10^{-7}\\times5} = \\dfrac{6.28\\times10^{-3}}{6.28\\times10^{-6}} = 1000$ turns per metre. If the solenoid were wound on a soft-iron core of relative permeability $\\mu_r$, the same current would give $\\mu_r$ times this flux density."
                },
                {
                    id: "d26p25",
                    text: "A current-carrying solenoid hung freely by a thread comes to rest pointing north and south, like a bar magnet. Its polarity can be found by:",
                    options: [
                        { key: "a", text: "Fleming's left-hand rule, the thumb giving the north pole" },
                        { key: "b", text: "The right-hand grip rule, the fingers pointing to the north pole" },
                        { key: "c", text: "Lenz's law, the north pole always facing the source of the current" },
                        { key: "d", text: "The clock rule: the face with anticlockwise current is the north pole" }
                    ],
                    answer: "d",
                    explanation: "A solenoid is a pile of current loops, so its ends behave like the poles of a bar magnet: the end at which the current runs <strong>anticlockwise</strong> (seen from outside) is the <strong>north</strong> pole, the other a south pole. Equivalently, grasp the solenoid with the right hand so that the fingers follow the current — the outstretched thumb then points to the north pole. Reversing the current interchanges the poles."
                },
                {
                    id: "d26p26",
                    text: "A charged particle enters a uniform magnetic field with a speed $v$. At what angle to the field must it move if the magnetic force on it is to be half of the maximum possible force?",
                    options: [
                        { key: "a", text: "$90^\\circ$" },
                        { key: "b", text: "$45^\\circ$" },
                        { key: "c", text: "$60^\\circ$" },
                        { key: "d", text: "$30^\\circ$" }
                    ],
                    answer: "d",
                    explanation: "$F = qvB\\sin\\theta$, whose maximum value $qvB$ occurs at $\\theta = 90^\\circ$. For $F = \\tfrac12 qvB$ we need $\\sin\\theta = 0.5$, i.e. $\\theta = 30^\\circ$. At $\\theta = 0$ or $180^\\circ$ the force vanishes and the particle goes straight on; for any other angle the path is a <strong>helix</strong>, the component $v\\cos\\theta$ carrying it along the field while $v\\sin\\theta$ curls it round."
                },
                {
                    id: "d26p27",
                    text: "An electron travels horizontally towards the north in a region where the magnetic field points vertically downwards. The magnetic force on the electron is directed towards the:",
                    options: [
                        { key: "a", text: "West" },
                        { key: "b", text: "East" },
                        { key: "c", text: "South" },
                        { key: "d", text: "Vertically upwards" }
                    ],
                    answer: "b",
                    explanation: "For a positive charge moving north in a downward field, $\\vec v\\times\\vec B$ points west. The electron carries a <strong>negative</strong> charge, so the force $\\vec F = q\\vec v\\times\\vec B$ is reversed and points <strong>east</strong>. The same result follows from Fleming's left-hand rule if the conventional current — opposite to the electron's motion, i.e. towards the south — is used."
                },
                {
                    id: "d26p28",
                    text: "An electron and a proton having the same kinetic energy enter the same uniform magnetic field at right angles to it. The radii of their circular paths are related by:",
                    options: [
                        { key: "a", text: "They are equal, the kinetic energies being equal" },
                        { key: "b", text: "The electron's radius is about $43$ times the proton's" },
                        { key: "c", text: "The proton's radius is about $43$ times the electron's" },
                        { key: "d", text: "The proton's radius is $1836$ times the electron's" }
                    ],
                    answer: "c",
                    explanation: "Since $r = \\dfrac{mv}{qB} = \\dfrac{\\sqrt{2mK}}{qB}$, for the same $K$ and the same magnitude of charge $r \\propto \\sqrt m$. Hence $\\dfrac{r_p}{r_e} = \\sqrt{\\dfrac{m_p}{m_e}} = \\sqrt{1836} \\approx 43$. The heavier particle therefore sweeps the much wider circle; note that it is $\\sqrt m$, not $m$, because the lighter particle moves correspondingly faster."
                },
                {
                    id: "d26p29",
                    text: "In a cyclotron the frequency of the applied alternating voltage is kept constant throughout the acceleration. This is possible because the time taken by the particle for one revolution:",
                    options: [
                        { key: "a", text: "Is independent of both its speed and the radius of its path" },
                        { key: "b", text: "Decreases steadily as the particle picks up more energy" },
                        { key: "c", text: "Depends only on the potential difference across the dees" },
                        { key: "d", text: "Is proportional to the radius of the semicircle described" }
                    ],
                    answer: "a",
                    explanation: "The period is $T = \\dfrac{2\\pi m}{qB}$, containing neither $v$ nor $r$: as the particle speeds up its circle grows in exactly the same proportion, so each half-turn still takes the same time and it always arrives at the gap in step with the oscillator. The scheme finally fails at very high energies, when the <strong>relativistic increase of mass</strong> lengthens $T$ and the particle slips out of phase."
                },
                {
                    id: "d26p30",
                    text: "In a cathode-ray tube an electron beam of speed $2\\times10^{7}\\ \\mathrm{m\\,s^{-1}}$ is to be bent into an arc of radius $0.10\\ \\mathrm{m}$ by a transverse magnetic field. Taking $m = 9.1\\times10^{-31}$ kg and $e = 1.6\\times10^{-19}$ C, the field required is about:",
                    options: [
                        { key: "a", text: "$5.7\\times10^{-4}\\ \\mathrm{T}$" },
                        { key: "b", text: "$1.1\\times10^{-3}\\ \\mathrm{T}$" },
                        { key: "c", text: "$2.3\\times10^{-3}\\ \\mathrm{T}$" },
                        { key: "d", text: "$1.1\\times10^{-2}\\ \\mathrm{T}$" }
                    ],
                    answer: "b",
                    explanation: "From $r = mv/eB$, $B = \\dfrac{mv}{er} = \\dfrac{9.1\\times10^{-31}\\times2\\times10^{7}}{1.6\\times10^{-19}\\times0.10} = \\dfrac{1.82\\times10^{-23}}{1.6\\times10^{-20}} \\approx 1.1\\times10^{-3}\\ \\mathrm{T}$. Barely a millitesla suffices, which is why a small deflecting coil can sweep the beam across a whole screen."
                },
                {
                    id: "d26p31",
                    text: "A copper rod lying east–west carries a current towards the east in a magnetic field that points vertically downwards. The rod experiences a force directed towards the:",
                    options: [
                        { key: "a", text: "North" },
                        { key: "b", text: "South" },
                        { key: "c", text: "West, opposing the current" },
                        { key: "d", text: "Vertically downwards" }
                    ],
                    answer: "a",
                    explanation: "Fleming's <strong>left-hand rule</strong>: the forefinger along the field (downwards), the middle finger along the current (east), and the thumb — the force — then points <strong>north</strong>. The same follows from $\\vec F = I\\vec l\\times\\vec B$. The force is always perpendicular both to the conductor and to the field, and it is greatest when the two are at right angles."
                },
                {
                    id: "d26p32",
                    text: "A closed current-carrying loop of any shape whatever is placed in a uniform magnetic field. The net force acting on the loop is:",
                    options: [
                        { key: "a", text: "Zero, although the loop may still experience a couple" },
                        { key: "b", text: "$BIL$, where $L$ is the whole perimeter of the loop" },
                        { key: "c", text: "Directed along the field and proportional to the area" },
                        { key: "d", text: "Zero only when the loop happens to be circular" }
                    ],
                    answer: "a",
                    explanation: "The force on an element is $I\\,d\\vec l\\times\\vec B$, and for a closed loop in a <em>uniform</em> field $\\oint d\\vec l = 0$, so the forces on opposite parts cancel and the <strong>resultant force is always zero</strong>. The <strong>torque</strong> $\\tau = NIAB\\sin\\alpha$, however, is not, which is why a coil in a motor <em>turns</em> instead of being dragged bodily along. In a non-uniform field the cancellation fails and a net force does appear."
                },
                {
                    id: "d26p33",
                    text: "A rectangular current-carrying coil is free to turn in a uniform magnetic field. The torque on it is zero and the equilibrium is stable when the:",
                    options: [
                        { key: "a", text: "Plane of the coil is parallel to the field" },
                        { key: "b", text: "Coil is inclined at $45^\\circ$ to the direction of the field" },
                        { key: "c", text: "Plane of the coil is perpendicular to the field" },
                        { key: "d", text: "Coil carries the largest current that it can safely take" }
                    ],
                    answer: "c",
                    explanation: "The torque is $\\tau = NIAB\\sin\\alpha$, $\\alpha$ being the angle between the <strong>normal to the coil</strong> and $\\vec B$. It is greatest ($NIAB$) when the plane of the coil <em>contains</em> the field and zero when the normal is along the field, i.e. the plane is <strong>perpendicular</strong> to the field. Of the two zero-torque positions, the one with $\\vec m$ parallel to $\\vec B$ has the least energy $U = -mB$ and is the stable one."
                },
                {
                    id: "d26p34",
                    text: "The pole pieces of a moving-coil galvanometer are made concave and a soft-iron cylinder is placed inside the coil. The purpose of this arrangement is to:",
                    options: [
                        { key: "a", text: "Prevent the current from heating the suspension wire of the coil" },
                        { key: "b", text: "Increase the resistance of the instrument so that it can be used as a voltmeter" },
                        { key: "c", text: "Damp the oscillations of the coil so that the reading is quickly steady" },
                        { key: "d", text: "Make the field radial so that the deflection is proportional to the current" }
                    ],
                    answer: "d",
                    explanation: "In a <strong>radial field</strong> the plane of the coil always contains $\\vec B$, so the deflecting torque stays $NIAB$ for every position of the coil. Balancing it against the restoring couple $k\\theta$ of the suspension gives $\\theta = (NAB/k)I$, i.e. $\\theta \\propto I$, and the instrument has a <strong>uniform (linear) scale</strong>. The soft-iron core also concentrates the flux and so raises the sensitivity."
                },
                {
                    id: "d26p35",
                    text: "A galvanometer of resistance $100\\ \\Omega$ gives a full-scale deflection for $1\\ \\mathrm{mA}$. To convert it into an ammeter reading up to $1\\ \\mathrm{A}$, the shunt required is nearly:",
                    options: [
                        { key: "a", text: "$0.1\\ \\Omega$ in parallel with the galvanometer" },
                        { key: "b", text: "$1\\ \\Omega$ in parallel with the galvanometer" },
                        { key: "c", text: "$0.1\\ \\Omega$ in series with the galvanometer" },
                        { key: "d", text: "$100\\ \\Omega$ in series with the galvanometer" }
                    ],
                    answer: "a",
                    explanation: "The shunt must carry $I - I_g$ while the same voltage appears across both: $S = \\dfrac{I_g G}{I-I_g} = \\dfrac{10^{-3}\\times100}{1-10^{-3}} \\approx 0.1\\ \\Omega$. A low resistance in <strong>parallel</strong> converts a galvanometer into an ammeter (and lowers its combined resistance, as an ammeter requires); a high resistance in <em>series</em> would convert it into a voltmeter."
                },
                {
                    id: "d26p36",
                    text: "When the Hall voltage of a semiconductor specimen is measured, its sign is found to be reversed compared with that of a metal such as copper. This shows that in the specimen:",
                    options: [
                        { key: "a", text: "The current is carried mainly by positive holes" },
                        { key: "b", text: "The carriers move much faster than in the metal" },
                        { key: "c", text: "The number of carriers per unit volume is far greater" },
                        { key: "d", text: "The magnetic field has been applied along the current" }
                    ],
                    answer: "a",
                    explanation: "The magnetic force pushes the carriers to one face whichever their sign, but the <strong>sign of the charge piling up there is the sign of the carriers</strong>. A reversed Hall voltage therefore identifies a <strong>p-type</strong> specimen, in which conduction is by holes. This is the chief use of the effect: it tells us the sign of the majority carriers, and from $V_H = BI/nqt$ it also gives their number density."
                },
                {
                    id: "d26p37",
                    text: "The same current is sent through two specimens of the same material in the same magnetic field, one specimen being twice as thick as the other. The Hall voltage across the thicker specimen is:",
                    options: [
                        { key: "a", text: "Twice that across the thinner specimen" },
                        { key: "b", text: "Half that across the thinner specimen" },
                        { key: "c", text: "Four times that across the thinner specimen" },
                        { key: "d", text: "The same, the material and current being the same" }
                    ],
                    answer: "b",
                    explanation: "Since $V_H = \\dfrac{BI}{nqt}$, the Hall voltage is <strong>inversely proportional to the thickness</strong> measured along the field, so doubling $t$ halves $V_H$. It does not depend on the width or the length of the specimen. This is why commercial Hall probes are made as very thin films, and why a semiconductor — with its far smaller $n$ — gives a Hall voltage thousands of times larger than a metal."
                },
                {
                    id: "d26p38",
                    text: "The magnetic flux through a surface held in a magnetic field is:",
                    options: [
                        { key: "a", text: "A vector quantity whose SI unit is the tesla" },
                        { key: "b", text: "A scalar quantity whose SI unit is the ampere-metre" },
                        { key: "c", text: "A vector quantity whose SI unit is the weber per square metre" },
                        { key: "d", text: "A scalar quantity whose SI unit is the weber" }
                    ],
                    answer: "d",
                    explanation: "$\\phi = \\vec B\\cdot\\vec A = BA\\cos\\theta$ is a <strong>scalar</strong>, measured in <strong>webers</strong> ($1\\ \\mathrm{Wb} = 1\\ \\mathrm{T\\,m^2} = 1\\ \\mathrm{V\\,s}$). It is greatest when the plane of the area is perpendicular to $\\vec B$ and zero when the field grazes the surface. The flux density $B$ itself is the vector, measured in tesla or weber per square metre."
                }
            ]
        },
        {
            id: "emind26",
            name: "Electromagnetic Induction",
            subject: "Physics",
            accent: "amber",
            blurb: "Q39–60 · Faraday's and Lenz's laws, a.c. generator, transformer, eddy currents, self and mutual inductance and energy stored in an inductor.",
            questions: [
                {
                    id: "d26p39",
                    text: "Faraday's law of electromagnetic induction states that the induced emf in a circuit is equal to the:",
                    options: [
                        { key: "a", text: "Total magnetic flux linked with the circuit at that instant" },
                        { key: "b", text: "Rate of change of magnetic flux linkage with the circuit" },
                        { key: "c", text: "Product of the flux and the resistance of the circuit" },
                        { key: "d", text: "Rate of change of the current flowing in the circuit" }
                    ],
                    answer: "b",
                    explanation: "The law is $\\varepsilon = -\\dfrac{d(N\\phi)}{dt}$: what counts is not how much flux is linked but <strong>how fast it changes</strong>. A coil resting in an enormous steady field has no emf, while a small flux swept away in a millisecond gives a large one. The minus sign is Lenz's law, which fixes the <em>direction</em> of the induced emf."
                },
                {
                    id: "d26p40",
                    text: "A closed copper loop lies at rest in a very strong but perfectly steady magnetic field. The induced emf in the loop is:",
                    options: [
                        { key: "a", text: "Large, because the field itself is very strong" },
                        { key: "b", text: "Zero, because copper is a diamagnetic substance" },
                        { key: "c", text: "Zero, because the flux linked with it is not changing" },
                        { key: "d", text: "Small but finite, being proportional to the flux linked" }
                    ],
                    answer: "c",
                    explanation: "Induction depends on $d\\phi/dt$ alone. With the loop stationary, the field constant and the area unchanged, the flux is constant and <strong>no emf appears whatever the size of $B$</strong>. An emf would arise if the field were varied, the loop moved into a region of different field, its area altered, or the loop rotated so that $\\cos\\theta$ changed."
                },
                {
                    id: "d26p41",
                    text: "A bar magnet is thrust into a coil whose ends are not joined, so that the circuit is open. In the coil there is:",
                    options: [
                        { key: "a", text: "Neither an induced emf nor an induced current" },
                        { key: "b", text: "An induced emf but no induced current" },
                        { key: "c", text: "An induced current but no induced emf" },
                        { key: "d", text: "An emf that appears only when the magnet is withdrawn" }
                    ],
                    answer: "b",
                    explanation: "The changing flux always induces an <strong>emf</strong>, since that depends only on $d\\phi/dt$. A <strong>current</strong>, however, needs a complete conducting path, so with the ends free none flows and a voltmeter across them would read the full induced emf. It also follows that no opposing force is felt on the magnet — the work-energy bookkeeping of Lenz's law applies only when a current actually flows."
                },
                {
                    id: "d26p42",
                    text: "The magnetic field through a horizontal conducting ring is directed out of the page and is increasing steadily. The induced current in the ring flows:",
                    options: [
                        { key: "a", text: "Anticlockwise, so as to strengthen the field inside the ring" },
                        { key: "b", text: "Clockwise, and only if the ring is made of a magnetic material" },
                        { key: "c", text: "Anticlockwise, but only for the first instant of the change" },
                        { key: "d", text: "Clockwise, so as to oppose the increase of flux" }
                    ],
                    answer: "d",
                    explanation: "By <strong>Lenz's law</strong> the induced current opposes the change that causes it, so it must set up a flux <em>into</em> the page inside the ring; by the right-hand rule that requires a <strong>clockwise</strong> current. Were the field decreasing, the current would run anticlockwise to prop the flux up. Lenz's law is simply the conservation of energy applied to induction."
                },
                {
                    id: "d26p43",
                    text: "A straight conductor is moved at right angles across a magnetic field and an emf appears between its ends. At the microscopic level this emf arises because:",
                    options: [
                        { key: "a", text: "The free electrons in the rod are pushed to one end by the field" },
                        { key: "b", text: "The resistance of the rod falls as soon as it begins to move" },
                        { key: "c", text: "The rod becomes magnetised and behaves as a small bar magnet" },
                        { key: "d", text: "Heat produced by friction sets up a thermoelectric voltage" }
                    ],
                    answer: "a",
                    explanation: "Each free electron shares the velocity $v$ of the rod, so it feels a force $e\\,v B$ along the rod and drifts to one end, leaving the other positive. Charge piles up until the electric field it creates balances the magnetic force, and the potential difference then settles at $\\varepsilon = Bvl$. This <strong>motional emf</strong> is the same result that Faraday's law gives from the area swept out per second."
                },
                {
                    id: "d26p44",
                    text: "A rod of length $0.5\\ \\mathrm{m}$ slides at $4\\ \\mathrm{m\\,s^{-1}}$ along frictionless rails in a field of $0.4\\ \\mathrm{T}$ perpendicular to the plane of the rails, the circuit having a total resistance of $2\\ \\Omega$. The induced current and the power dissipated are:",
                    options: [
                        { key: "a", text: "$1.6\\ \\mathrm{A}$ and $5.12\\ \\mathrm{W}$" },
                        { key: "b", text: "$0.4\\ \\mathrm{A}$ and $0.80\\ \\mathrm{W}$" },
                        { key: "c", text: "$0.8\\ \\mathrm{A}$ and $1.28\\ \\mathrm{W}$" },
                        { key: "d", text: "$0.4\\ \\mathrm{A}$ and $0.32\\ \\mathrm{W}$" }
                    ],
                    answer: "d",
                    explanation: "$\\varepsilon = Bvl = 0.4\\times4\\times0.5 = 0.8\\ \\mathrm{V}$, so $I = \\varepsilon/R = 0.4\\ \\mathrm{A}$ and $P = I^2R = 0.16\\times2 = 0.32\\ \\mathrm{W}$. The same power must be supplied mechanically: the retarding force is $BIl = 0.08$ N and $Fv = 0.08\\times4 = 0.32$ W, which is Lenz's law as an energy balance."
                },
                {
                    id: "d26p45",
                    text: "The flux through each turn of a $500$-turn coil falls steadily from $8\\times10^{-4}\\ \\mathrm{Wb}$ to $2\\times10^{-4}\\ \\mathrm{Wb}$ in $0.1\\ \\mathrm{s}$. The emf induced in the coil is:",
                    options: [
                        { key: "a", text: "$0.3\\ \\mathrm{V}$" },
                        { key: "b", text: "$1.5\\ \\mathrm{V}$" },
                        { key: "c", text: "$3.0\\ \\mathrm{V}$" },
                        { key: "d", text: "$30\\ \\mathrm{V}$" }
                    ],
                    answer: "c",
                    explanation: "$\\varepsilon = N\\dfrac{\\Delta\\phi}{\\Delta t} = 500\\times\\dfrac{(8-2)\\times10^{-4}}{0.1} = 500\\times6\\times10^{-3} = 3.0\\ \\mathrm{V}$. Had the same change been completed in $0.01$ s the emf would have been ten times as large; only the <em>rate</em> matters, and multiplying the turns multiplies the flux linkage."
                },
                {
                    id: "d26p46",
                    text: "Self-induction is often called the 'inertia' of electricity because a coil:",
                    options: [
                        { key: "a", text: "Stores electric charge in the way a capacitor does" },
                        { key: "b", text: "Opposes any change, growth or decay, in the current through it" },
                        { key: "c", text: "Prevents any current at all from ever flowing through it" },
                        { key: "d", text: "Increases its resistance in proportion to the current" }
                    ],
                    answer: "b",
                    explanation: "A change of current changes the coil's own flux, and the induced 'back emf' $\\varepsilon = -L\\,di/dt$ acts <strong>against the change</strong>: it delays the growth of current when the circuit is closed and keeps the current going for a moment when it is broken — which is why a spark jumps at the switch of an inductive circuit. The analogy with mechanical inertia is exact, $L$ playing the part of mass."
                },
                {
                    id: "d26p47",
                    text: "One henry is that inductance in which:",
                    options: [
                        { key: "a", text: "A steady current of one ampere in it stores one joule of energy" },
                        { key: "b", text: "A flux of one weber through it produces a current of one ampere" },
                        { key: "c", text: "A current changing at one ampere per second induces one volt in it" },
                        { key: "d", text: "One coulomb of charge passes through it in one second" }
                    ],
                    answer: "c",
                    explanation: "From $\\varepsilon = -L\\,di/dt$, $1\\ \\mathrm{H} = 1\\ \\mathrm{V\\,s\\,A^{-1}}$. Equivalently, from $N\\phi = LI$, a coil has an inductance of one henry when a current of one ampere links one weber-turn of flux with it. Note that a one-henry coil storing one joule would need $I = \\sqrt{2}$ A, since $U = \\tfrac12 LI^2$."
                },
                {
                    id: "d26p48",
                    text: "When the current in a coil is changed uniformly from $2\\ \\mathrm{A}$ to $6\\ \\mathrm{A}$ in $0.05\\ \\mathrm{s}$, an emf of $8\\ \\mathrm{V}$ is induced in it. Its self-inductance is:",
                    options: [
                        { key: "a", text: "$0.1\\ \\mathrm{H}$" },
                        { key: "b", text: "$0.4\\ \\mathrm{H}$" },
                        { key: "c", text: "$1.6\\ \\mathrm{H}$" },
                        { key: "d", text: "$2.5\\ \\mathrm{H}$" }
                    ],
                    answer: "a",
                    explanation: "The rate of change of current is $\\dfrac{6-2}{0.05} = 80\\ \\mathrm{A\\,s^{-1}}$, so $L = \\dfrac{|\\varepsilon|}{|di/dt|} = \\dfrac{8}{80} = 0.1\\ \\mathrm{H}$. The inductance is a constant of the coil — it depends on the number of turns, the area, the length and the core — and not on the current that happens to flow."
                },
                {
                    id: "d26p49",
                    text: "An air-cored coil is given a core of soft iron of relative permeability $\\mu_r$, nothing else being altered. Its self-inductance:",
                    options: [
                        { key: "a", text: "Becomes $\\mu_r$ times as large" },
                        { key: "b", text: "Falls to $1/\\mu_r$ of its former value" },
                        { key: "c", text: "Is unaffected, since $L$ depends only on the geometry" },
                        { key: "d", text: "Becomes $\\mu_r^{2}$ times as large" }
                    ],
                    answer: "a",
                    explanation: "For a solenoid $L = \\mu_0\\mu_r n^2 A l = \\dfrac{\\mu_0\\mu_r N^2 A}{l}$, so the inductance is <strong>directly proportional to the permeability of the core</strong>. Since $\\mu_r$ for soft iron may be several thousand, an iron core raises the inductance enormously — the reason that chokes, transformers and electromagnets are all iron-cored."
                },
                {
                    id: "d26p50",
                    text: "The mutual inductance of a pair of coils does NOT depend on:",
                    options: [
                        { key: "a", text: "The number of turns on each of the two coils" },
                        { key: "b", text: "The distance between them and their relative orientation" },
                        { key: "c", text: "The permeability of the medium or core between them" },
                        { key: "d", text: "The steady current maintained in the primary coil" }
                    ],
                    answer: "d",
                    explanation: "$M$ is defined by $N_2\\phi_2 = M I_1$; it is a <strong>geometrical constant</strong> of the pair, fixed by the turns, the areas, the separation, the orientation and the core, and it is the same either way round ($M_{12}=M_{21}$). It does not depend on the current, just as a capacitance does not depend on the charge. $M$ is greatest when the coils are wound one over the other on a common iron core."
                },
                {
                    id: "d26p51",
                    text: "A current of $2\\ \\mathrm{A}$ in coil P sends a flux of $4\\times10^{-5}\\ \\mathrm{Wb}$ through each of the $200$ turns of a neighbouring coil Q. The mutual inductance of the pair is:",
                    options: [
                        { key: "a", text: "$2\\ \\mathrm{mH}$" },
                        { key: "b", text: "$4\\ \\mathrm{mH}$" },
                        { key: "c", text: "$8\\ \\mathrm{mH}$" },
                        { key: "d", text: "$40\\ \\mathrm{mH}$" }
                    ],
                    answer: "b",
                    explanation: "$M = \\dfrac{N_2\\phi_2}{I_1} = \\dfrac{200\\times4\\times10^{-5}}{2} = \\dfrac{8\\times10^{-3}}{2} = 4\\times10^{-3}\\ \\mathrm{H} = 4\\ \\mathrm{mH}$. A current changing at $100\\ \\mathrm{A\\,s^{-1}}$ in P would then induce $M\\,di/dt = 0.4$ V in Q — the principle on which the transformer and the induction coil work."
                },
                {
                    id: "d26p52",
                    text: "The current through an inductor is doubled. The energy stored in its magnetic field becomes:",
                    options: [
                        { key: "a", text: "Twice as great" },
                        { key: "b", text: "Unchanged, energy being stored in the core alone" },
                        { key: "c", text: "Half as great" },
                        { key: "d", text: "Four times as great" }
                    ],
                    answer: "d",
                    explanation: "The work done against the back emf in establishing a current is $U = \\tfrac12 LI^2$, so the energy goes up as the <strong>square</strong> of the current: doubling $I$ quadruples $U$. The energy is held in the magnetic field itself, at a density $u = B^2/2\\mu_0$, and it is returned to the circuit when the current is switched off."
                },
                {
                    id: "d26p53",
                    text: "The one essential difference between the a.c. generator and the d.c. generator is that the a.c. machine uses:",
                    options: [
                        { key: "a", text: "A laminated core, whereas the d.c. machine uses a solid iron core" },
                        { key: "b", text: "A permanent magnet, whereas the d.c. machine uses an electromagnet" },
                        { key: "c", text: "A coil of many turns, whereas the d.c. machine uses a single turn" },
                        { key: "d", text: "Two slip rings, whereas the d.c. machine uses a split-ring commutator" }
                    ],
                    answer: "d",
                    explanation: "The emf generated in a rotating coil is <em>always</em> alternating. Two <strong>slip rings</strong> hand it out to the brushes unchanged, giving an alternating output; a <strong>split-ring commutator</strong> reverses the connections to the brushes every half revolution, so that the output to the external circuit is always in the same direction — a unidirectional, though fluctuating, current."
                },
                {
                    id: "d26p54",
                    text: "An a.c. generator produces a sinusoidal emf whose peak value is $311\\ \\mathrm{V}$. The reading of an a.c. voltmeter connected across it will be about:",
                    options: [
                        { key: "a", text: "$155\\ \\mathrm{V}$" },
                        { key: "b", text: "$220\\ \\mathrm{V}$" },
                        { key: "c", text: "$311\\ \\mathrm{V}$" },
                        { key: "d", text: "$440\\ \\mathrm{V}$" }
                    ],
                    answer: "b",
                    explanation: "A.c. meters read the <strong>root-mean-square</strong> value, $\\varepsilon_{rms} = \\varepsilon_0/\\sqrt2 = 311/1.414 \\approx 220\\ \\mathrm{V}$ — which is why the domestic supply quoted as 220 V actually peaks at about 311 V. The rms value is the equivalent direct voltage as regards heating, and the peak emf itself is $\\varepsilon_0 = NAB\\omega$."
                },
                {
                    id: "d26p55",
                    text: "Electrical power is transmitted over long distances at very high voltage chiefly because:",
                    options: [
                        { key: "a", text: "A high voltage travels along the wires at a greater speed" },
                        { key: "b", text: "High-voltage cables can be made of much cheaper material" },
                        { key: "c", text: "The current is then small and the $I^2R$ loss in the line is small" },
                        { key: "d", text: "The frequency of the supply is raised at the same time" }
                    ],
                    answer: "c",
                    explanation: "For a given power $P = VI$, raising $V$ lowers $I$ in the same proportion, and since the heat wasted in the line is $I^2R$, ten times the voltage means a <strong>hundredth of the loss</strong>. A step-up transformer at the power station and step-down transformers near the consumer make this possible — an economy that direct current could not offer, and the reason a.c. won the 'war of the currents'."
                },
                {
                    id: "d26p56",
                    text: "A transformer whose efficiency is $90\\ \\%$ delivers $4.5\\ \\mathrm{kW}$ to its load. The power drawn by the primary from the mains is:",
                    options: [
                        { key: "a", text: "$4.05\\ \\mathrm{kW}$" },
                        { key: "b", text: "$4.95\\ \\mathrm{kW}$" },
                        { key: "c", text: "$5.00\\ \\mathrm{kW}$" },
                        { key: "d", text: "$5.50\\ \\mathrm{kW}$" }
                    ],
                    answer: "c",
                    explanation: "Efficiency $\\eta = \\dfrac{P_{out}}{P_{in}}$, so $P_{in} = \\dfrac{4.5}{0.90} = 5.0\\ \\mathrm{kW}$. The missing $0.5$ kW is wasted as heat in the copper windings and in the iron core. A transformer has no moving parts, so well-designed ones reach efficiencies above $95\\ \\%$ — higher than almost any other machine."
                },
                {
                    id: "d26p57",
                    text: "The loss of energy that occurs in the windings of a transformer, and that is reduced by using thick copper wire of low resistance, is called:",
                    options: [
                        { key: "a", text: "Copper loss, caused by the heating of the coils by their own current" },
                        { key: "b", text: "Hysteresis loss, caused by repeated magnetisation of the core" },
                        { key: "c", text: "Eddy-current loss, caused by induced currents circulating in the core" },
                        { key: "d", text: "Flux leakage, caused by lines that fail to pass through the secondary" }
                    ],
                    answer: "a",
                    explanation: "The four losses of a transformer and their remedies are: <strong>copper loss</strong> ($I^2R$ in the windings) — thick wire; <strong>eddy-current loss</strong> — a laminated core; <strong>hysteresis loss</strong> — a core of soft iron or silicon steel with a narrow loop; and <strong>flux leakage</strong> — winding the coils one over the other on a closed core."
                },
                {
                    id: "d26p58",
                    text: "A copper plate swinging between the poles of a strong magnet is quickly brought to rest, but when deep slots are cut in the plate it swings on for much longer. The slots act by:",
                    options: [
                        { key: "a", text: "Reducing the mass and therefore the momentum of the plate" },
                        { key: "b", text: "Breaking up the paths available to the eddy currents" },
                        { key: "c", text: "Making the copper plate diamagnetic instead of paramagnetic" },
                        { key: "d", text: "Allowing the magnetic lines of force to pass through the gaps" }
                    ],
                    answer: "b",
                    explanation: "The changing flux through the moving plate induces circulating <strong>eddy currents</strong>, and by Lenz's law the force on them opposes the motion, so the kinetic energy is dissipated as heat and the plate is damped. Cutting slots confines the currents to narrow strips of higher resistance, so they are feeble and the damping almost disappears — the same reason that a transformer core is laminated."
                },
                {
                    id: "d26p59",
                    text: "A coil of inductance $L$ and resistance $R$ is connected to a steady battery of emf $V$. A long time after the switch is closed, the current in the circuit is:",
                    options: [
                        { key: "a", text: "Zero, since the coil opposes the current completely" },
                        { key: "b", text: "Still rising, and never reaches a steady value" },
                        { key: "c", text: "$V/(R + L)$, the inductance adding to the resistance" },
                        { key: "d", text: "$V/R$, the inductance then having no effect" }
                    ],
                    answer: "d",
                    explanation: "The back emf is $L\\,di/dt$, so it exists only <strong>while the current is changing</strong>. Once the current has settled, $di/dt = 0$, the coil behaves as a plain resistance and $I = V/R$. During the growth the current rises as $I = \\dfrac{V}{R}\\left(1 - e^{-Rt/L}\\right)$, reaching $63\\ \\%$ of its final value in one time constant $L/R$."
                },
                {
                    id: "d26p60",
                    text: "In Faraday's classic experiment a coil joined to a galvanometer lies beside a second coil joined to a battery through a key. The galvanometer deflects:",
                    options: [
                        { key: "a", text: "Steadily as long as the key is kept closed" },
                        { key: "b", text: "Only at make and at break of the circuit, in opposite senses" },
                        { key: "c", text: "Only while the key remains open, and always in the same sense" },
                        { key: "d", text: "Not at all, since the two circuits are not connected together" }
                    ],
                    answer: "b",
                    explanation: "A steady primary current gives a steady flux and therefore no emf. The flux <em>changes</em> only while the current is growing (at make) and while it is dying away (at break), and since $d\\phi/dt$ has opposite signs on those two occasions the momentary deflections, or 'kicks', are in <strong>opposite directions</strong>. This is <strong>mutual induction</strong>, and it is the whole principle of the transformer — which for the same reason cannot work on direct current."
                }
            ]
        },
        {
            id: "biomol26",
            name: "Biomolecules",
            subject: "Botany",
            accent: "emerald",
            blurb: "Q61–80 · structure, types and biological role of carbohydrates, lipids, minerals, proteins and enzymes.",
            questions: [
                {
                    id: "d26b61",
                    text: "Besides supplying energy, carbohydrates enter into the very structure of the hereditary material. The sugar that forms part of the backbone of DNA and RNA is:",
                    options: [
                        { key: "a", text: "A hexose, glucose in DNA and fructose in RNA" },
                        { key: "b", text: "A triose, glyceraldehyde in both DNA and RNA" },
                        { key: "c", text: "A pentose, deoxyribose in DNA and ribose in RNA" },
                        { key: "d", text: "A disaccharide, maltose in DNA and lactose in RNA" }
                    ],
                    answer: "c",
                    explanation: "The nucleotide is built of a phosphate, a nitrogen base and a <strong>five-carbon sugar</strong>. RNA carries <strong>ribose</strong>, DNA <strong>deoxyribose</strong>, which lacks the oxygen at carbon 2 — the single difference that makes DNA the more stable and therefore the better store of information. Ribose sugars also occur in ATP, NAD and FAD."
                },
                {
                    id: "d26b62",
                    text: "Glycogen is far more highly branched than amylopectin. The advantage of this heavy branching to an animal is that:",
                    options: [
                        { key: "a", text: "It makes the molecule completely insoluble in the cell sap" },
                        { key: "b", text: "It allows the molecule to be stored inside the mitochondria" },
                        { key: "c", text: "It provides many free ends from which glucose is split off fast" },
                        { key: "d", text: "It protects the molecule from attack by all digestive enzymes" }
                    ],
                    answer: "c",
                    explanation: "Glycogen has an $\\alpha$-1,6 branch about every 8–12 residues against every 24–30 in amylopectin. Phosphorylase attacks only the <strong>non-reducing ends</strong>, so the more branches, the more points of attack and the faster glucose can be mobilised — vital for an animal that must meet a sudden demand. It is stored in the liver and muscles and is called animal starch."
                },
                {
                    id: "d26b63",
                    text: "Cellulose is the most abundant organic compound on earth. Its great tensile strength comes from the fact that its unbranched chains:",
                    options: [
                        { key: "a", text: "Are hydrogen-bonded side by side into strong microfibrils" },
                        { key: "b", text: "Are coiled into a helix that traps iodine between the turns" },
                        { key: "c", text: "Carry a branch at every twenty-fifth glucose residue" },
                        { key: "d", text: "Contain alternate units of glucose and of galacturonic acid" }
                    ],
                    answer: "a",
                    explanation: "The $\\beta$-1,4 linkage makes every alternate glucose turn over, so the chain is straight and ribbon-like. Hundreds of such chains lie side by side, held by <strong>hydrogen bonds</strong> into crystalline <strong>microfibrils</strong> of great strength that are laid in layers in the cell wall. This is why cellulose gives paper, cotton, rayon and gun-cotton their properties."
                },
                {
                    id: "d26b64",
                    text: "A solution is treated with alcoholic $\\alpha$-naphthol and concentrated sulphuric acid is poured down the side of the tube; a violet ring appears at the junction. The solution contains:",
                    options: [
                        { key: "a", text: "A protein, the test being the biuret test" },
                        { key: "b", text: "A carbohydrate, the test being Molisch's test" },
                        { key: "c", text: "A fat, the test being the translucent-spot test" },
                        { key: "d", text: "A free amino acid, the test being the ninhydrin test" }
                    ],
                    answer: "b",
                    explanation: "<strong>Molisch's test</strong> is the general test for carbohydrates: the acid dehydrates the sugar to furfural (or hydroxymethyl furfural), which condenses with $\\alpha$-naphthol to give the violet ring. It answers for mono-, di- and polysaccharides alike. Benedict's and Fehling's tests distinguish the <em>reducing</em> sugars, and iodine detects starch."
                },
                {
                    id: "d26b65",
                    text: "Short carbohydrate chains projecting from the outer surface of a plasma membrane are attached to lipids and proteins. Their chief role is:",
                    options: [
                        { key: "a", text: "To act as an immediate reserve of respiratory fuel" },
                        { key: "b", text: "To carry the enzymes of the electron transport chain" },
                        { key: "c", text: "To keep the membrane fluid at low temperature" },
                        { key: "d", text: "To act as markers by which cells recognise one another" }
                    ],
                    answer: "d",
                    explanation: "The sugar chains of <strong>glycolipids and glycoproteins</strong> make up the glycocalyx and give each cell type its chemical 'name tag'. They are the receptors for hormones and for many viruses, they hold cells together in a tissue, and in man they carry the <strong>A and B antigens of the blood groups</strong>. They are structural and informational, not a fuel store."
                },
                {
                    id: "d26b66",
                    text: "Cholesterol and ergosterol are classed among the lipids although they contain neither glycerol nor a fatty acid. They are:",
                    options: [
                        { key: "a", text: "Derived lipids, built of four fused carbon rings" },
                        { key: "b", text: "Simple lipids, being esters of a long-chain alcohol" },
                        { key: "c", text: "Compound lipids, containing a phosphate group as well" },
                        { key: "d", text: "Not lipids at all, but polymers of isoprene units only" }
                    ],
                    answer: "a",
                    explanation: "Lipids fall into <strong>simple</strong> (fats, oils and waxes), <strong>compound</strong> (phospholipids, glycolipids and lipoproteins) and <strong>derived</strong> lipids, the last including fatty acids and the <strong>steroids</strong>, which are built on a nucleus of four fused rings. Cholesterol stiffens animal membranes and is the parent of the bile salts and sex hormones; ergosterol of fungi becomes vitamin D in ultraviolet light."
                },
                {
                    id: "d26b67",
                    text: "Which biological role of lipids is correctly stated?",
                    options: [
                        { key: "a", text: "They are the only nitrogen-containing food of the body" },
                        { key: "b", text: "They act as the immediate respiratory substrate of every cell" },
                        { key: "c", text: "They form the framework of the chromosomes of the nucleus" },
                        { key: "d", text: "They dissolve the vitamins A, D, E and K and carry them about" }
                    ],
                    answer: "d",
                    explanation: "Fats are the <strong>solvent and vehicle of the fat-soluble vitamins</strong>, so a fat-free diet leads to their deficiency. They also insulate the body against heat loss, cushion delicate organs such as the kidney and eyeball, waterproof the surface and yield <strong>metabolic water</strong> on oxidation — the store in a camel's hump. The immediate respiratory substrate, however, is glucose, and nitrogen is supplied by proteins."
                },
                {
                    id: "d26b68",
                    text: "Fat rather than carbohydrate is used for long-term storage in a seed or in an animal because, weight for weight, fat:",
                    options: [
                        { key: "a", text: "Is digested and absorbed much more rapidly than starch" },
                        { key: "b", text: "Is anhydrous, whereas stored glycogen holds much water with it" },
                        { key: "c", text: "Can be converted into protein whenever nitrogen is available" },
                        { key: "d", text: "Dissolves easily in the cell sap and so moves about freely" }
                    ],
                    answer: "b",
                    explanation: "A fat is not only richer in energy because it is more highly reduced, it is also <strong>stored dry</strong>, while glycogen is hydrated and drags roughly twice its own weight of water with it. The store is therefore several times lighter for the same energy — decisive for a migrating bird, a hibernating animal or a seed that must be carried by the wind."
                },
                {
                    id: "d26b69",
                    text: "Which lipid is correctly matched with the part it plays in the plant or animal body?",
                    options: [
                        { key: "a", text: "Triglyceride — the chief structural material of the cell membrane" },
                        { key: "b", text: "Phospholipid — the waterproof covering of the leaf surface" },
                        { key: "c", text: "Wax — the reserve food of the oil seed and of adipose tissue" },
                        { key: "d", text: "Cholesterol — the parent substance of the steroid hormones" }
                    ],
                    answer: "d",
                    explanation: "The correct pairings are: <strong>triglyceride</strong> — food reserve of oil seeds and adipose tissue; <strong>phospholipid</strong> — bilayer of every cell membrane, because it has a water-loving head and water-hating tails; <strong>wax</strong> — cuticle of leaves, bloom of fruits and honeycomb; <strong>cholesterol</strong> — membrane component and precursor of the bile salts, vitamin D and the sex and adrenal cortical hormones."
                },
                {
                    id: "d26b70",
                    text: "Which pairing of an element with the substance in which it is an essential constituent is correct?",
                    options: [
                        { key: "a", text: "Sulphur — the amino acids cysteine and methionine" },
                        { key: "b", text: "Phosphorus — the pyrrole rings of the chlorophyll molecule" },
                        { key: "c", text: "Nitrogen — the phospholipids and the nucleotide ATP" },
                        { key: "d", text: "Potassium — the cell wall, where it occurs as the pectate" }
                    ],
                    answer: "a",
                    explanation: "<strong>Sulphur</strong> occurs in cysteine and methionine (and hence in the disulphide bridges of proteins), in coenzyme A and in the vitamins thiamine and biotin. Nitrogen is in proteins, nucleic acids, chlorophyll and the hormones; <strong>phosphorus</strong> in ATP, nucleic acids and phospholipids; magnesium is the metal of chlorophyll; and it is calcium, not potassium, that cements the middle lamella."
                },
                {
                    id: "d26b71",
                    text: "Trace elements act mainly as activators or as constituents of enzymes. Which metal is correctly matched with the protein in which it works?",
                    options: [
                        { key: "a", text: "Zinc — the nitrogenase of the nitrogen-fixing bacteria" },
                        { key: "b", text: "Manganese — the plastocyanin of photosystem I" },
                        { key: "c", text: "Copper — the ferredoxin of the light reaction" },
                        { key: "d", text: "Iron — the cytochromes of the electron transport chain" }
                    ],
                    answer: "d",
                    explanation: "<strong>Iron</strong> is the metal of the haem of the cytochromes, of catalase and peroxidase, and of ferredoxin; its shuttling between $\\mathrm{Fe^{2+}}$ and $\\mathrm{Fe^{3+}}$ carries the electrons. <strong>Molybdenum</strong> belongs to nitrogenase and nitrate reductase, <strong>copper</strong> to plastocyanin and cytochrome oxidase, <strong>manganese</strong> to the oxygen-evolving complex of photosystem II, and <strong>zinc</strong> to carbonic anhydrase and alcohol dehydrogenase."
                },
                {
                    id: "d26b72",
                    text: "Amino acids are classified as acidic, basic or neutral according to the nature of the R group. A basic amino acid among the following is:",
                    options: [
                        { key: "a", text: "Glutamic acid, which carries a second carboxyl group" },
                        { key: "b", text: "Alanine, whose side chain is a simple methyl group" },
                        { key: "c", text: "Lysine, which carries a second amino group" },
                        { key: "d", text: "Cysteine, whose side chain carries a thiol group" }
                    ],
                    answer: "c",
                    explanation: "If the R group has an extra $\\mathrm{-NH_2}$ the amino acid is <strong>basic</strong> — lysine, arginine and histidine; an extra $\\mathrm{-COOH}$ makes it <strong>acidic</strong> — aspartic and glutamic acid; when the two groups balance it is <strong>neutral</strong> — glycine, alanine, valine. These charged side chains form the ionic bonds that help to hold the folded shape of a protein and give it its isoelectric point."
                },
                {
                    id: "d26b73",
                    text: "A polypeptide chain, however long, has at its two ends:",
                    options: [
                        { key: "a", text: "A free amino group at one end and a free carboxyl at the other" },
                        { key: "b", text: "A free amino group at both of the two ends of the chain" },
                        { key: "c", text: "A phosphate group at one end and a sugar at the other" },
                        { key: "d", text: "Two peptide bonds, one of which is always a disulphide bridge" }
                    ],
                    answer: "a",
                    explanation: "Every residue but the two terminal ones has both its groups locked in peptide bonds, so a chain keeps one free $\\mathrm{-NH_2}$ (the <strong>N-terminal</strong>) and one free $\\mathrm{-COOH}$ (the <strong>C-terminal</strong>). By convention the sequence — the primary structure — is written from the N-terminal end, and it is in that direction that the chain is built on the ribosome."
                },
                {
                    id: "d26b74",
                    text: "The tertiary structure of a globular protein is made rigid by a covalent cross-link formed between two:",
                    options: [
                        { key: "a", text: "Lysine residues, giving a peptide bridge" },
                        { key: "b", text: "Serine residues, giving an ester bridge" },
                        { key: "c", text: "Cysteine residues, giving a disulphide bridge" },
                        { key: "d", text: "Glycine residues, giving a hydrogen bridge" }
                    ],
                    answer: "c",
                    explanation: "Two $\\mathrm{-SH}$ groups of <strong>cysteine</strong> residues, often far apart in the chain, are oxidised to a $\\mathrm{-S{-}S-}$ <strong>disulphide bridge</strong> that pins the folded chain together; insulin, ribonuclease and keratin all depend on it. The other forces of the tertiary level — hydrogen bonds, ionic bonds and hydrophobic interactions — are weak and non-covalent, which is why proteins denature so easily."
                },
                {
                    id: "d26b75",
                    text: "Proteins are the only major food that contains nitrogen, and on an average they hold about $16\\ \\%$ of it. The nitrogen estimated in a sample is therefore multiplied by $6.25$ to obtain the:",
                    options: [
                        { key: "a", text: "Amount of protein present in the sample" },
                        { key: "b", text: "Number of amino acids in the polypeptide chain" },
                        { key: "c", text: "Energy value of the sample in kilocalories" },
                        { key: "d", text: "Quantity of urea that the sample will finally yield" }
                    ],
                    answer: "a",
                    explanation: "Since $16\\ \\%$ is one part in $6.25$, the protein content is the nitrogen content multiplied by the factor $100/16 = 6.25$. This is the basis of the <strong>Kjeldahl method</strong>, in which the organic nitrogen is converted to ammonium sulphate and then estimated. Carbohydrates and fats contain only carbon, hydrogen and oxygen, so they contribute nothing to the figure."
                },
                {
                    id: "d26b76",
                    text: "Raw egg white is given at once to a person who has swallowed a salt of mercury or of lead. It acts as an antidote because the heavy metal:",
                    options: [
                        { key: "a", text: "Is converted by the egg into a harmless soluble sugar" },
                        { key: "b", text: "Precipitates the egg protein and is itself locked up in it" },
                        { key: "c", text: "Is oxidised by the enzymes present in the egg white" },
                        { key: "d", text: "Passes unchanged through the stomach and is not absorbed" }
                    ],
                    answer: "b",
                    explanation: "Heavy-metal ions <strong>denature and precipitate proteins</strong> by combining with their $\\mathrm{-SH}$ and $\\mathrm{-COO^-}$ groups. Given a large excess of albumin, the poison is locked up in the insoluble complex in the stomach instead of attacking the body's own enzymes, and the whole mass is then removed by an emetic or a stomach wash."
                },
                {
                    id: "d26b77",
                    text: "Most enzymes are named by adding the suffix '-ase' to the name of the substrate they attack. On this system, an enzyme called sucrase would:",
                    options: [
                        { key: "a", text: "Be secreted only by the cells that manufacture sucrose" },
                        { key: "b", text: "Hydrolyse sucrose into glucose and fructose" },
                        { key: "c", text: "Join glucose and fructose together into sucrose" },
                        { key: "d", text: "Oxidise sucrose completely to carbon dioxide and water" }
                    ],
                    answer: "b",
                    explanation: "Lipase acts on lipids, maltase on maltose, protease on protein, and <strong>sucrase (invertase)</strong> splits sucrose into glucose and fructose. A few enzymes discovered early keep their old trivial names — pepsin, trypsin, ptyalin, rennin — while the systematic name given by the international scheme states both the substrate and the reaction, as in 'succinate dehydrogenase'."
                },
                {
                    id: "d26b78",
                    text: "Which statement about the general properties of enzymes is NOT correct?",
                    options: [
                        { key: "a", text: "They are colloidal in nature and have a high molecular weight" },
                        { key: "b", text: "They are effective in extremely small amounts" },
                        { key: "c", text: "They are used up in the reaction and must be replaced" },
                        { key: "d", text: "Many of them can catalyse the reaction in either direction" }
                    ],
                    answer: "c",
                    explanation: "An enzyme emerges from the reaction <strong>chemically unchanged</strong> and is used over and over again, which is exactly why traces suffice. The other three statements are true: being large protein molecules they form colloidal solutions, they are needed only in minute quantity, and many — such as the lipases and the dehydrogenases — will drive the reaction whichever way conditions favour."
                },
                {
                    id: "d26b79",
                    text: "Malonate stops the action of succinic dehydrogenase because the malonate molecule closely resembles succinate in shape and size. This is an example of:",
                    options: [
                        { key: "a", text: "Irreversible denaturation of the enzyme protein" },
                        { key: "b", text: "Non-competitive inhibition at an allosteric site" },
                        { key: "c", text: "Feedback inhibition by the end product of the pathway" },
                        { key: "d", text: "Competitive inhibition at the active site of the enzyme" }
                    ],
                    answer: "d",
                    explanation: "A <strong>competitive inhibitor</strong> is a structural analogue of the substrate; it occupies the active site without being changed, and the two compete for it, so the effect can be <strong>reversed by raising the substrate concentration</strong>. Sulpha drugs act in the same way by mimicking PABA in the folic-acid pathway of bacteria. A non-competitive inhibitor binds elsewhere and cannot be displaced by more substrate."
                },
                {
                    id: "d26b80",
                    text: "Potassium cyanide is a deadly poison because the cyanide ion combines with the iron of cytochrome oxidase. The cyanide is acting as:",
                    options: [
                        { key: "a", text: "A coenzyme, which the enzyme cannot work without" },
                        { key: "b", text: "An activator, which speeds the enzyme beyond safe limits" },
                        { key: "c", text: "A substrate, which the enzyme oxidises to a toxic product" },
                        { key: "d", text: "An inhibitor, which blocks the terminal step of respiration" }
                    ],
                    answer: "d",
                    explanation: "By binding the iron of the terminal enzyme of the respiratory chain, cyanide stops the transfer of electrons to oxygen, so ATP production ceases and the cells die although the blood is fully oxygenated. Other well-known inhibitors are fluoride on enolase and heavy metals on $\\mathrm{-SH}$ enzymes, while <strong>activators</strong> do the opposite — $\\mathrm{Cl^-}$ for salivary amylase and $\\mathrm{Mg^{2+}}$ for the kinases."
                }
            ]
        },
        {
            id: "humphys26",
            name: "Human Biology & Physiology",
            subject: "Zoology",
            accent: "rose",
            blurb: "Q81–100 · digestive, respiratory, circulatory, excretory, nervous, sensory, endocrine and reproductive systems.",
            questions: [
                {
                    id: "d26z81",
                    text: "From the lumen outwards, the four coats of the wall of the human alimentary canal are:",
                    options: [
                        { key: "a", text: "Mucosa, submucosa, muscularis and serosa" },
                        { key: "b", text: "Serosa, muscularis, submucosa and mucosa" },
                        { key: "c", text: "Submucosa, mucosa, serosa and muscularis" },
                        { key: "d", text: "Muscularis, serosa, mucosa and submucosa" }
                    ],
                    answer: "a",
                    explanation: "The plan is the same from the oesophagus to the rectum: the <strong>mucosa</strong> lines the lumen and secretes and absorbs (thrown into villi in the small intestine and rugae in the stomach); the <strong>submucosa</strong> of loose connective tissue carries the vessels and Meissner's plexus; the <strong>muscularis</strong> has inner circular and outer longitudinal muscle with Auerbach's plexus between them; and the <strong>serosa</strong> is the outermost peritoneal covering."
                },
                {
                    id: "d26z82",
                    text: "The end products to which proteins, carbohydrates and fats are finally reduced before they can be absorbed are respectively:",
                    options: [
                        { key: "a", text: "Peptones, disaccharides and glycerol along with water" },
                        { key: "b", text: "Polypeptides, starch and emulsified triglycerides" },
                        { key: "c", text: "Urea, glycogen and cholesterol held in solution" },
                        { key: "d", text: "Amino acids, monosaccharides, fatty acids and glycerol" }
                    ],
                    answer: "d",
                    explanation: "Digestion is a stepwise hydrolysis: protein $\\rightarrow$ proteoses and peptones $\\rightarrow$ peptides $\\rightarrow$ <strong>amino acids</strong>; starch $\\rightarrow$ dextrins $\\rightarrow$ maltose $\\rightarrow$ <strong>glucose</strong>; fat $\\rightarrow$ diglyceride and monoglyceride $\\rightarrow$ <strong>fatty acids and glycerol</strong>. Only these smallest units can cross the intestinal epithelium; the final step for the sugars and peptides is carried out by enzymes of the brush border itself."
                },
                {
                    id: "d26z83",
                    text: "In a gastric gland the hydrochloric acid and the pepsinogen are secreted respectively by the:",
                    options: [
                        { key: "a", text: "Chief cells and the parietal cells" },
                        { key: "b", text: "Goblet cells and the argentaffin cells" },
                        { key: "c", text: "Parietal cells and the chief cells" },
                        { key: "d", text: "Mucous neck cells and the goblet cells" }
                    ],
                    answer: "c",
                    explanation: "<strong>Parietal (oxyntic) cells</strong> pour out hydrochloric acid — and, in man, the intrinsic factor needed to absorb vitamin $\\mathrm{B_{12}}$ — while the <strong>chief (peptic or zymogen) cells</strong> secrete the inactive pepsinogen, which the acid converts to pepsin. <strong>Mucous neck cells</strong> add the alkaline mucus that protects the lining, and the argentaffin cells secrete gastrin and serotonin."
                },
                {
                    id: "d26z84",
                    text: "Compared with inspired air, the air breathed out by a healthy person contains:",
                    options: [
                        { key: "a", text: "No oxygen at all and about $21\\ \\%$ of carbon dioxide" },
                        { key: "b", text: "About $21\\ \\%$ oxygen and about $0.04\\ \\%$ carbon dioxide" },
                        { key: "c", text: "About $16\\ \\%$ oxygen and about $4\\ \\%$ carbon dioxide" },
                        { key: "d", text: "More nitrogen than inspired air and no water vapour" }
                    ],
                    answer: "c",
                    explanation: "Inspired air holds roughly $21\\ \\%$ oxygen and $0.04\\ \\%$ carbon dioxide; expired air about <strong>$16\\ \\%$ oxygen and $4\\ \\%$ carbon dioxide</strong>, besides being warmed and saturated with water vapour. Only about a fifth of the oxygen taken in is used, which is why expired air still supports life and mouth-to-mouth resuscitation works. The nitrogen is unchanged."
                },
                {
                    id: "d26z85",
                    text: "As carbon dioxide enters a red blood cell it is converted to bicarbonate, which passes out into the plasma. Electrical neutrality is maintained because:",
                    options: [
                        { key: "a", text: "Chloride ions move from the plasma into the red cell" },
                        { key: "b", text: "Sodium ions move out of the red cell into the plasma" },
                        { key: "c", text: "Hydrogen ions are pumped out of the cell with the bicarbonate" },
                        { key: "d", text: "Potassium ions leave the plasma and enter the red cell" }
                    ],
                    answer: "a",
                    explanation: "Carbonic anhydrase makes $\\mathrm{H_2CO_3}$, which dissociates into $\\mathrm{H^+}$ and $\\mathrm{HCO_3^-}$; the $\\mathrm{H^+}$ is buffered by haemoglobin while the bicarbonate diffuses out. To balance the charge, <strong>chloride ions diffuse in</strong> — the <strong>chloride shift</strong> or Hamburger phenomenon. It is reversed in the lungs, and it is the reason that venous red cells are slightly richer in chloride and in water than arterial ones."
                },
                {
                    id: "d26z86",
                    text: "A person who breathes deeply and rapidly for a minute or two finds that breathing then stops for a while. This temporary apnoea occurs because the forced breathing has:",
                    options: [
                        { key: "a", text: "Filled the blood with so much oxygen that the lungs need a rest" },
                        { key: "b", text: "Washed out the carbon dioxide that stimulates the respiratory centre" },
                        { key: "c", text: "Fatigued the diaphragm and the intercostal muscles completely" },
                        { key: "d", text: "Collapsed the alveoli, which must slowly open up once more" }
                    ],
                    answer: "b",
                    explanation: "The respiratory centre in the medulla is driven chiefly by the <strong>carbon dioxide concentration (and the resulting $\\mathrm{H^+}$)</strong> of the blood, not by a want of oxygen. Hyperventilation blows off $\\mathrm{CO_2}$, the stimulus falls below threshold, and breathing halts until enough $\\mathrm{CO_2}$ has accumulated again. Divers who hyperventilate before a dive risk blacking out under water for exactly this reason."
                },
                {
                    id: "d26z87",
                    text: "The valve that prevents the blood from flowing back into the left atrium when the left ventricle contracts is the:",
                    options: [
                        { key: "a", text: "Tricuspid valve, which has three flaps" },
                        { key: "b", text: "Bicuspid or mitral valve, which has two flaps" },
                        { key: "c", text: "Aortic semilunar valve, which has three pockets" },
                        { key: "d", text: "Pulmonary semilunar valve, at the root of the artery" }
                    ],
                    answer: "b",
                    explanation: "The atrio-ventricular valve on the left is the <strong>bicuspid or mitral</strong> valve and on the right the <strong>tricuspid</strong>; both are anchored by the chordae tendineae to the papillary muscles so that they cannot be turned inside out. The <strong>semilunar</strong> valves guard the openings of the aorta and the pulmonary artery and stop the blood running back into the ventricles during diastole."
                },
                {
                    id: "d26z88",
                    text: "Which sequence correctly traces a drop of blood from the right ventricle back to the left ventricle?",
                    options: [
                        { key: "a", text: "Pulmonary artery, lungs, pulmonary vein, left atrium, left ventricle" },
                        { key: "b", text: "Pulmonary vein, lungs, pulmonary artery, left atrium, left ventricle" },
                        { key: "c", text: "Aorta, lungs, vena cava, left atrium, left ventricle" },
                        { key: "d", text: "Pulmonary artery, liver, hepatic vein, left atrium, left ventricle" }
                    ],
                    answer: "a",
                    explanation: "This is the <strong>pulmonary circuit</strong> of the double circulation. The right ventricle pumps deoxygenated blood along the <strong>pulmonary artery</strong> — the only artery carrying such blood — to the lungs, and the four <strong>pulmonary veins</strong> — the only veins carrying oxygenated blood — return it to the left atrium. From the left ventricle the systemic circuit then begins at the aorta."
                },
                {
                    id: "d26z89",
                    text: "In measuring arterial blood pressure with a sphygmomanometer, the cuff is wrapped round the upper arm and the stethoscope is placed over the:",
                    options: [
                        { key: "a", text: "Radial artery at the wrist, and the first sound gives the diastolic pressure" },
                        { key: "b", text: "Basilic vein at the elbow, and the first sound gives the venous pressure" },
                        { key: "c", text: "Carotid artery of the neck, and the last sound gives the systolic pressure" },
                        { key: "d", text: "Brachial artery at the elbow, and the first sound gives the systolic pressure" }
                    ],
                    answer: "d",
                    explanation: "The cuff is inflated until it closes the <strong>brachial artery</strong> and is then let down slowly. The pressure at which the first tapping (Korotkoff) sound is heard, as blood spurts through in systole, is the <strong>systolic pressure</strong>; the pressure at which the sounds disappear, flow having become smooth again, is the <strong>diastolic</strong>. A normal young adult reads about $120/80$ mm Hg."
                },
                {
                    id: "d26z90",
                    text: "Normal human urine is faintly acidic and consists of about:",
                    options: [
                        { key: "a", text: "$80\\ \\%$ water, ammonia being the chief solid excreted" },
                        { key: "b", text: "$60\\ \\%$ water, uric acid being the chief solid excreted" },
                        { key: "c", text: "$95\\ \\%$ water, glucose being the chief solid excreted" },
                        { key: "d", text: "$95\\ \\%$ water, urea being the chief solid excreted" }
                    ],
                    answer: "d",
                    explanation: "Of the $1$–$1.8$ litres passed daily, about <strong>$95\\ \\%$ is water</strong> and the rest solids, of which <strong>urea</strong> (about $25$ g a day) is much the largest, followed by sodium chloride, creatinine, uric acid and traces of ammonia. Glucose, proteins, blood cells and ketone bodies are <strong>absent</strong> from normal urine; their appearance signals disease."
                },
                {
                    id: "d26z91",
                    text: "Infection of the urinary tract is much commoner in women than in men. The main anatomical reason is that in the female the:",
                    options: [
                        { key: "a", text: "Kidneys lie lower down and are less well protected by the ribs" },
                        { key: "b", text: "Urinary bladder is very much smaller in its total capacity" },
                        { key: "c", text: "Urethra is short and opens close to the anal region" },
                        { key: "d", text: "Ureters open into the bladder at a much steeper angle" }
                    ],
                    answer: "c",
                    explanation: "The female <strong>urethra is only about $4$ cm long</strong> and carries urine alone, opening in the vulva just in front of the vaginal orifice and near the anus, so bacteria have a short journey to the bladder. The male urethra is some $20$ cm long, passes through the penis and serves both urine and semen. Copious fluid intake, which flushes the tract, is the simplest preventive."
                },
                {
                    id: "d26z92",
                    text: "Nissl granules are found in the cell body and dendrites of a neuron but never in the axon. These granules are:",
                    options: [
                        { key: "a", text: "Rough endoplasmic reticulum, the site of protein synthesis" },
                        { key: "b", text: "Stacks of smooth membrane concerned with the storage of calcium" },
                        { key: "c", text: "Granules of the neurotransmitter waiting to be released" },
                        { key: "d", text: "Mitochondria specially modified to supply the energy of conduction" }
                    ],
                    answer: "a",
                    explanation: "<strong>Nissl bodies</strong> are masses of rough endoplasmic reticulum and free ribosomes, and they make the proteins and neurotransmitters of the cell. Because the axon has none, everything it needs is manufactured in the cell body and carried down by axonal transport — which is why an axon cut off from its cell body degenerates. Their disappearance ('chromatolysis') is a sign of injury to a nerve cell."
                },
                {
                    id: "d26z93",
                    text: "Which lobe of the cerebral hemisphere is correctly matched with its principal function?",
                    options: [
                        { key: "a", text: "Frontal lobe — the interpretation of sound and of smell" },
                        { key: "b", text: "Parietal lobe — the control of voluntary movement and speech" },
                        { key: "c", text: "Occipital lobe — the reception and interpretation of vision" },
                        { key: "d", text: "Temporal lobe — the sensations of touch, pressure and temperature" }
                    ],
                    answer: "c",
                    explanation: "The <strong>occipital</strong> lobe is the visual area; the <strong>frontal</strong> lobe carries the motor area, Broca's speech area and the seat of judgement and personality; the <strong>parietal</strong> lobe receives touch, pressure, pain and temperature; and the <strong>temporal</strong> lobe deals with hearing, smell and memory. Each is connected to the opposite side of the body, and the two hemispheres are joined by the corpus callosum."
                },
                {
                    id: "d26z94",
                    text: "When an impulse reaches the terminal knob of an axon, the neurotransmitter is discharged into the synaptic cleft only if:",
                    options: [
                        { key: "a", text: "Calcium ions enter the knob through voltage-gated channels" },
                        { key: "b", text: "Potassium ions are pumped rapidly out of the synaptic cleft" },
                        { key: "c", text: "The myelin sheath is stripped away from the terminal knob" },
                        { key: "d", text: "Acetylcholinesterase is first released into the synaptic cleft" }
                    ],
                    answer: "a",
                    explanation: "Depolarisation of the knob opens voltage-gated <strong>calcium</strong> channels; the inrushing $\\mathrm{Ca^{2+}}$ makes the synaptic vesicles fuse with the presynaptic membrane and empty their transmitter by exocytosis. The transmitter then opens chemically gated channels on the postsynaptic membrane. Acetylcholinesterase acts afterwards, destroying the transmitter so that the synapse is ready for the next impulse."
                },
                {
                    id: "d26z95",
                    text: "The three coats of the human eyeball, from outside inwards, and the fluid in front of the lens are:",
                    options: [
                        { key: "a", text: "Sclera, choroid, retina; and the vitreous humour" },
                        { key: "b", text: "Choroid, sclera, retina; and the aqueous humour" },
                        { key: "c", text: "Sclera, choroid, retina; and the aqueous humour" },
                        { key: "d", text: "Retina, choroid, sclera; and the vitreous humour" }
                    ],
                    answer: "c",
                    explanation: "The tough white <strong>sclera</strong> protects and keeps the shape, becoming the transparent cornea in front; the pigmented, vascular <strong>choroid</strong> nourishes the eye and stops internal reflection, and in front becomes the ciliary body and iris; the <strong>retina</strong> holds the photoreceptors. The watery <strong>aqueous humour</strong> lies between cornea and lens, and the jelly-like vitreous humour behind the lens."
                },
                {
                    id: "d26z96",
                    text: "The rods and the cones of the retina differ in that the rods:",
                    options: [
                        { key: "a", text: "Contain iodopsin and give colour vision in bright light" },
                        { key: "b", text: "Contain rhodopsin and give vision in dim light without colour" },
                        { key: "c", text: "Are packed most densely at the fovea centralis of the retina" },
                        { key: "d", text: "Are far fewer in number than the cones in the human eye" }
                    ],
                    answer: "b",
                    explanation: "About $120$ million <strong>rods</strong> carry <strong>rhodopsin</strong> (visual purple, made from vitamin A); they are extremely sensitive but give only shades of grey, so they serve <strong>scotopic</strong> or twilight vision, and their want causes night blindness. The $6$–$7$ million <strong>cones</strong> carry iodopsin in three types sensitive to red, green and blue, need bright light, give colour and sharp detail, and are crowded at the fovea."
                },
                {
                    id: "d26z97",
                    text: "Hormones are chemically of several kinds. Which group is correctly stated?",
                    options: [
                        { key: "a", text: "Cortisol and testosterone are steroids derived from cholesterol" },
                        { key: "b", text: "Insulin and glucagon are steroids derived from cholesterol" },
                        { key: "c", text: "Thyroxine and adrenaline are large protein hormones" },
                        { key: "d", text: "Oxytocin and vasopressin are amines derived from tyrosine" }
                    ],
                    answer: "a",
                    explanation: "Chemically hormones fall into <strong>steroids</strong> (cortisol, aldosterone, oestrogen, testosterone — all built from cholesterol), <strong>amines</strong> derived from tyrosine (thyroxine, adrenaline), and <strong>peptides and proteins</strong> (insulin, glucagon, oxytocin, ADH, the pituitary tropic hormones). The distinction matters: being fat-soluble, steroids pass through the cell membrane and act on the genes, while peptide hormones act through surface receptors and a second messenger."
                },
                {
                    id: "d26z98",
                    text: "The pancreas is described as a heterocrine or mixed gland because it:",
                    options: [
                        { key: "a", text: "Secretes two hormones that have exactly opposite effects" },
                        { key: "b", text: "Has both an exocrine part with ducts and a ductless endocrine part" },
                        { key: "c", text: "Is derived from two different germ layers of the embryo" },
                        { key: "d", text: "Pours its secretion into the duodenum and into the stomach alike" }
                    ],
                    answer: "b",
                    explanation: "The bulk of the gland is <strong>exocrine</strong>: acini that send pancreatic juice down the pancreatic duct to the duodenum. Scattered among them are about a million <strong>islets of Langerhans</strong>, which have no ducts and pass insulin, glucagon and somatostatin straight into the blood. The gonads and the placenta are also mixed glands; the thyroid and adrenal are purely endocrine."
                },
                {
                    id: "d26z99",
                    text: "Round the plasma membrane of a released secondary oocyte lie, in order from within outwards:",
                    options: [
                        { key: "a", text: "Corona radiata, then zona pellucida" },
                        { key: "b", text: "Zona pellucida, then corona radiata" },
                        { key: "c", text: "Chorion, then amnion" },
                        { key: "d", text: "Vitelline membrane, then the acrosome" }
                    ],
                    answer: "b",
                    explanation: "Immediately outside the vitelline (plasma) membrane is the transparent glycoprotein <strong>zona pellucida</strong>, and outside that the <strong>corona radiata</strong>, a layer of follicle cells clinging to the egg after ovulation. A sperm must digest its way through both with the enzymes of its acrosome; the moment one succeeds, the zona changes chemically and blocks all the others, preventing polyspermy."
                },
                {
                    id: "d26z100",
                    text: "The correct sequence of changes in the ovary during one ovarian cycle is:",
                    options: [
                        { key: "a", text: "Graafian follicle, primary follicle, corpus albicans, corpus luteum" },
                        { key: "b", text: "Corpus luteum, primary follicle, Graafian follicle, corpus albicans" },
                        { key: "c", text: "Primary follicle, Graafian follicle, corpus luteum, corpus albicans" },
                        { key: "d", text: "Primary follicle, corpus albicans, Graafian follicle, corpus luteum" }
                    ],
                    answer: "c",
                    explanation: "Under FSH a <strong>primary follicle</strong> ripens into the fluid-filled <strong>Graafian follicle</strong>, which bursts at ovulation under the LH surge. Its remains become the yellow <strong>corpus luteum</strong>, which secretes progesterone and prepares the uterus. If there is no pregnancy it degenerates in about ten days into the white scar, the <strong>corpus albicans</strong>, progesterone falls and menstruation follows; if pregnancy occurs, hCG keeps the corpus luteum alive."
                }
            ]
        }
    ]
};

const DAY26_SYLLABUS = [
    { subject: "Physics", accent: "blue", topics: [
        { topic: "Magnetic Properties of Materials", subs: [
            { name: "Dia-, Para- and Ferromagnetism", ids: ["d26p1", "d26p2", "d26p3", "d26p4", "d26p5", "d26p12"] },
            { name: "Domains, Hysteresis and Choice of Material", ids: ["d26p6", "d26p7", "d26p8", "d26p9", "d26p10", "d26p11"] }
        ] },
        { topic: "Magnetic Field", subs: [
            { name: "B-field of Straight Conductor, Coil and Solenoid", ids: ["d26p13", "d26p14", "d26p15", "d26p16", "d26p17", "d26p18", "d26p19", "d26p20", "d26p21", "d26p22", "d26p23", "d26p24", "d26p25", "d26p38"] },
            { name: "Force on a Moving Charge", ids: ["d26p26", "d26p27", "d26p28", "d26p29", "d26p30"] },
            { name: "Force and Torque on a Conductor and Coil", ids: ["d26p31", "d26p32", "d26p33", "d26p34", "d26p35"] },
            { name: "Hall Effect", ids: ["d26p36", "d26p37"] }
        ] },
        { topic: "Electromagnetic Induction", subs: [
            { name: "Faraday's and Lenz's Laws, Motional emf", ids: ["d26p39", "d26p40", "d26p41", "d26p42", "d26p43", "d26p44", "d26p45"] },
            { name: "A.C. Generator, Transformer and Eddy Currents", ids: ["d26p53", "d26p54", "d26p55", "d26p56", "d26p57", "d26p58", "d26p60"] },
            { name: "Self and Mutual Inductance, Energy in an Inductor", ids: ["d26p46", "d26p47", "d26p48", "d26p49", "d26p50", "d26p51", "d26p52", "d26p59"] }
        ] }
    ] },
    { subject: "Botany", accent: "emerald", topics: [
        { topic: "1. Basic Components of Life", weight: 2, subs: [
            { name: "Carbohydrates", ids: ["d26b61", "d26b62", "d26b63", "d26b64", "d26b65"] },
            { name: "Lipids and Minerals", ids: ["d26b66", "d26b67", "d26b68", "d26b69", "d26b70", "d26b71"] },
            { name: "Proteins and Enzymes", ids: ["d26b72", "d26b73", "d26b74", "d26b75", "d26b76", "d26b77", "d26b78", "d26b79", "d26b80"] }
        ] }
    ] },
    { subject: "Zoology", accent: "rose", topics: [
        { topic: "5. Human Biology and Physiology", weight: 15, subs: [
            { name: "Digestive System", ids: ["d26z81", "d26z82", "d26z83"] },
            { name: "Respiratory System", ids: ["d26z84", "d26z85", "d26z86"] },
            { name: "Circulatory System", ids: ["d26z87", "d26z88", "d26z89"] },
            { name: "Excretory System", ids: ["d26z90", "d26z91"] },
            { name: "Nervous System", ids: ["d26z92", "d26z93", "d26z94"] },
            { name: "Sense Organs", ids: ["d26z95", "d26z96"] },
            { name: "Endocrinology", ids: ["d26z97", "d26z98"] },
            { name: "Reproductive System", ids: ["d26z99", "d26z100"] }
        ] }
    ] }
];
DAY26.syllabus = DAY26_SYLLABUS;
