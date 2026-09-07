/* ============================================================
   DAY 34 — TARGETED REVISION (questions Prakriti missed)
        100 questions · 100 minutes · 0.25 negative marking

   Fresh, CEE-level variants (similar, not identical) of the
   questions marked wrong on the Ambition Guru 15th Physical
   Mock (circled) and on Day 33. Each item notes its source in
   a // comment so the mapping can be checked.

        Physics ...... 20   (mock)
        Chemistry .... 23   (mock)
        Zoology ...... 11   (mock)
        Botany ....... 19   (mock)
        MAT .......... 27   (7 mock + 15 Day-33 variants + 5 follow-ups)
   ============================================================ */
const DAY34 = {
    day: 34,
    title: "Day 34",
    subtitle: "Targeted Revision",
    durationMinutes: 100,
    negativeMarking: 0.25,
    chapters: [
        {
            id: "physics34",
            name: "Physics",
            subject: "Physics",
            accent: "blue",
            blurb: "Q1–20 · mechanics, properties of matter, heat, waves, optics, electricity and modern physics.",
            questions: [
                {
                    // mock Q2 — relative velocity, shortest crossing path
                    id: "d34p1",
                    text: "A motorboat can travel at 13 m/s in still water. It crosses a straight river 120 m wide, flowing at 5 m/s, along the <b>shortest possible path relative to the banks</b>. What distance does it travel along that path?",
                    options: [
                        { key: "a", text: "130 m" },
                        { key: "b", text: "144 m" },
                        { key: "c", text: "120 m" },
                        { key: "d", text: "156 m" }
                    ],
                    answer: "c",
                    explanation: "The shortest bank-to-bank path is perpendicular to the banks, so its length is the width, 120 m. The boat aims upstream to cancel the current; its remaining cross-stream speed is $\\sqrt{13^2-5^2}=12$ m/s. It takes 10 s and lands directly opposite. Pointing the boat perpendicular to the banks instead would minimize crossing time but allow downstream drift."
                },
                {
                    // mock Q4 — inertia
                    id: "d34p2",
                    text: "A heavy block initially at rest resists being moved when it is struck. Which property of the block accounts for its resistance to being set into motion?",
                    options: [
                        { key: "a", text: "inertia of rest" },
                        { key: "b", text: "inertia of motion" },
                        { key: "c", text: "centrifugal force" },
                        { key: "d", text: "friction with the floor" }
                    ],
                    answer: "a",
                    explanation: "Inertia of rest is the tendency of a stationary body to resist being set into motion. The block requires a net force to accelerate, and its larger mass means greater inertia. Inertia of motion would describe the tendency of an already moving body to keep moving. The question asks about the block's resistance to a change in motion, not the contact force acting on whatever strikes it.",
                },
                {
                    // mock Q7 — elongation under own weight
                    id: "d34p3",
                    text: "A uniform elastic wire hangs vertically. Let its extension under its own weight be $e_1$. An additional load equal to the wire's weight is attached to the lower end, producing a <b>further</b> extension $e_2$. What is $e_1/e_2$?",
                    options: [
                        { key: "a", text: "equal" },
                        { key: "b", text: "one-fourth" },
                        { key: "c", text: "double" },
                        { key: "d", text: "one-half" }
                    ],
                    answer: "d",
                    explanation: "Tension due to the wire's own weight varies linearly from zero at the bottom to $mg$ at the top, giving $e_1=mgL/(2AY)$. The added end load contributes the same extra tension $mg$ throughout the wire, so $e_2=mgL/(AY)$. Thus $e_1/e_2=1/2$. The comparison is with the further extension from the added load, not the total extension after loading."
                },
                {
                    // mock Q8 — escape velocity scaling
                    id: "d34p4",
                    text: "A planet has three times Earth's mass and three-quarters of Earth's radius. Its surface escape velocity, compared with Earth's escape velocity $v_e$, is:",
                    options: [
                        { key: "a", text: "$v_e$" },
                        { key: "b", text: "$2v_e$" },
                        { key: "c", text: "$4v_e$" },
                        { key: "d", text: "$\\sqrt{2}\\,v_e$" }
                    ],
                    answer: "b",
                    explanation: "Escape speed is $v_e=\\sqrt{2GM/R}$, so both mass and radius matter. The new mass-to-radius ratio is multiplied by $3/(3/4)=4$. Taking the square root gives a speed multiplier of 2, hence $2v_e$. Using the mass factor alone or forgetting the square root gives the wrong result.",
                },
                {
                    // mock Q9 — capillary rise, ratio of radii
                    id: "d34p5",
                    text: "Water rises 4 cm in one capillary tube and 1 cm in another tube of the same material. The ratio of the radii of the two tubes is:",
                    options: [
                        { key: "a", text: "4 : 1" },
                        { key: "b", text: "1 : 2" },
                        { key: "c", text: "1 : 4" },
                        { key: "d", text: "2 : 1" }
                    ],
                    answer: "c",
                    explanation: "Capillary rise $h=2T\\cos\\theta/(r\\rho g)$, so $h\\propto1/r$. The radii are therefore in the inverse ratio of the rises: $r_1:r_2=h_2:h_1=1:4$. The tube in which water rises higher has the smaller radius."
                },
                {
                    // mock Q13 — degrees of freedom from gamma
                    id: "d34p6",
                    text: "An ideal gas obeying equipartition has a specific-heat ratio $\\gamma=1.4$. How many active degrees of freedom per molecule are implied?",
                    options: [
                        { key: "a", text: "3" },
                        { key: "b", text: "5" },
                        { key: "c", text: "6" },
                        { key: "d", text: "7" }
                    ],
                    answer: "b",
                    explanation: "The ratio of specific heats is related to the degrees of freedom $f$ by $\\gamma=1+2/f$, so $f=2/(\\gamma-1)=2/0.4=5$. This corresponds to a diatomic gas: three translational and two rotational degrees of freedom."
                },
                {
                    // mock Q14 — ice and water calorimetry, final ratio
                    id: "d34p7",
                    text: "40 g of ice at 0 °C is added to 30 g of water at 40 °C. Taking the latent heat of fusion of ice as 80 cal/g, the ratio of water to ice in the final mixture is:",
                    options: [
                        { key: "a", text: "9 : 5" },
                        { key: "b", text: "5 : 9" },
                        { key: "c", text: "3 : 2" },
                        { key: "d", text: "7 : 5" }
                    ],
                    answer: "a",
                    explanation: "The warm water releases $30\\times40=1200$ cal in cooling to 0 °C, which melts $1200/80=15$ g of ice. So 15 g of ice melts and 25 g remains, while the water becomes $30+15=45$ g. The final ratio of water to ice is $45:25=9:5$."
                },
                {
                    // mock Q17 — apparent weight in a heated liquid
                    id: "d34p8",
                    text: "A metal block remains fully immersed while its surrounding liquid is heated. The liquid expands and its density decreases; the block's volume change is negligible. Its apparent weight will:",
                    options: [
                        { key: "a", text: "decrease" },
                        { key: "b", text: "remain unchanged" },
                        { key: "c", text: "fall to zero" },
                        { key: "d", text: "increase" }
                    ],
                    answer: "d",
                    explanation: "Upthrust is $\\rho_{\\rm liquid}gV$. With essentially fixed block volume and decreasing liquid density, upthrust decreases. Apparent weight is true weight minus upthrust, so it increases. Stating the expansion assumptions matters: the result is not universal for every possible liquid and temperature range."
                },
                {
                    // mock Q18 — echoes and speed of sound
                    id: "d34p9",
                    text: "A person at one end of a hall 85 m long claps once. The 4th echo is heard 2 s after the clap. The speed of sound is:",
                    options: [
                        { key: "a", text: "320 m/s" },
                        { key: "b", text: "330 m/s" },
                        { key: "c", text: "340 m/s" },
                        { key: "d", text: "350 m/s" }
                    ],
                    answer: "c",
                    explanation: "Each echo corresponds to one round trip to the far wall and back, a distance of $2\\times85=170$ m. Four echoes cover $4\\times170=680$ m in 2 s, so the speed of sound is $680/2=340$ m/s."
                },
                {
                    // mock Q19 — string segments, length ratio from frequency ratio
                    id: "d34p10",
                    text: "A stretched string is divided by bridges into three segments whose fundamental frequencies are in the ratio 2 : 3 : 4. The lengths of the segments are in the ratio:",
                    options: [
                        { key: "a", text: "2 : 3 : 4" },
                        { key: "b", text: "6 : 4 : 3" },
                        { key: "c", text: "4 : 3 : 2" },
                        { key: "d", text: "3 : 4 : 6" }
                    ],
                    answer: "b",
                    explanation: "For a fixed tension and linear density the fundamental frequency $f\\propto1/L$. The lengths are therefore inversely proportional to the frequencies: $L\\propto\\tfrac12:\\tfrac13:\\tfrac14=6:4:3$ after clearing the denominators."
                },
                {
                    // mock Q20 — superposition, phase difference from resultant amplitude
                    id: "d34p11",
                    text: "Two coherent waves of the same frequency and amplitude $A$ superpose at a point. Their resultant amplitude is $\\sqrt{3}\\,A$. What is the smallest positive phase difference between them?",
                    options: [
                        { key: "a", text: "$\\pi/3$" },
                        { key: "b", text: "$\\pi/2$" },
                        { key: "c", text: "$2\\pi/3$" },
                        { key: "d", text: "$\\pi/4$" }
                    ],
                    answer: "a",
                    explanation: "The resultant of two equal amplitudes is $R=2A\\cos(\\phi/2)$. Setting $2A\\cos(\\phi/2)=\\sqrt{3}\\,A$ gives $\\cos(\\phi/2)=\\sqrt{3}/2$, so $\\phi/2=30^\\circ$ and $\\phi=60^\\circ=\\pi/3$."
                },
                {
                    // mock Q23 — spherical mirror, magnification
                    id: "d34p12",
                    text: "A convex mirror has a focal length of 12 cm and forms an erect image one-quarter the height of its object. How far in front of the mirror is the object?",
                    options: [
                        { key: "a", text: "24 cm" },
                        { key: "b", text: "48 cm" },
                        { key: "c", text: "12 cm" },
                        { key: "d", text: "36 cm" }
                    ],
                    answer: "d",
                    explanation: "Using the Cartesian convention, $f=+12$ cm and $m=-v/u=+1/4$, so $v=-u/4$. The mirror formula gives $1/f=1/u+1/v=-3/u$, hence $u=-3f=-36$ cm. The object is 36 cm in front; the virtual image lies 9 cm behind the mirror. Keeping the positive magnification of the erect image avoids the concave-mirror sign error."
                },
                {
                    // mock Q27 — charging and change of mass
                    id: "d34p13",
                    text: "When an initially neutral metal sphere is given a <b>negative</b> charge, its mass:",
                    options: [
                        { key: "a", text: "decreases slightly" },
                        { key: "b", text: "remains exactly the same" },
                        { key: "c", text: "increases slightly" },
                        { key: "d", text: "becomes zero" }
                    ],
                    answer: "c",
                    explanation: "A negative charge is gained by adding electrons, and electrons have mass, so the sphere becomes very slightly heavier. A body given a positive charge instead loses electrons and becomes slightly lighter."
                },
                {
                    // mock Q30 — AC, time from zero to peak
                    id: "d34p14",
                    text: "An alternating current is $I=10\\sin(200\\pi t)$ A, with $t$ in seconds. The time taken for the current to rise from zero to its peak value is:",
                    options: [
                        { key: "a", text: "0.005 s" },
                        { key: "b", text: "0.0025 s" },
                        { key: "c", text: "0.01 s" },
                        { key: "d", text: "0.001 s" }
                    ],
                    answer: "b",
                    explanation: "Here $\\omega=200\\pi$ rad/s, so the period is $T=2\\pi/\\omega=0.01$ s. The current rises from zero to its peak in a quarter period, $T/4=0.0025$ s."
                },
                {
                    // mock Q38 — thermoelectric effects
                    id: "d34p15",
                    text: "The absorption or evolution of heat when an electric current flows through a <b>single</b> conductor that has a temperature gradient along its length is called the:",
                    options: [
                        { key: "a", text: "Thomson effect" },
                        { key: "b", text: "Peltier effect" },
                        { key: "c", text: "Seebeck effect" },
                        { key: "d", text: "Joule effect" }
                    ],
                    answer: "a",
                    explanation: "The Thomson effect involves heat exchanged along a single conductor carrying current between points at different temperatures. The Peltier and Seebeck effects occur at junctions of two different metals, and Joule heating does not require any temperature gradient."
                },
                {
                    // mock Q41 — minimum versus maximum photoelectron energy
                    id: "d34p16",
                    text: "Photons of energy 7 eV illuminate a metal of work function 4.5 eV. In the usual photoelectric model, what is the <b>minimum possible</b> kinetic energy of an electron just escaping the surface?",
                    options: [
                        { key: "a", text: "4.5 eV" },
                        { key: "b", text: "7 eV" },
                        { key: "c", text: "0 eV" },
                        { key: "d", text: "2.5 eV" }
                    ],
                    answer: "c",
                    explanation: "Einstein's equation gives the maximum, not the minimum: $K_{\\max}=7-4.5=2.5$ eV. Electrons can lose energy before reaching the surface; an electron that only just escapes has kinetic energy approaching zero. Thus the minimum limiting value is 0 eV. Selecting 2.5 eV would answer a different question."
                },
                {
                    // mock Q42 — hydrogen spectrum, number of lines
                    id: "d34p17",
                    text: "Hydrogen atoms in the ground state are excited by radiation of photon energy 12.75 eV. The number of distinct lines that can appear in the emission spectrum is:",
                    options: [
                        { key: "a", text: "3" },
                        { key: "b", text: "4" },
                        { key: "c", text: "10" },
                        { key: "d", text: "6" }
                    ],
                    answer: "d",
                    explanation: "The absorbed energy raises the atom to a level with $E_n=-13.6+12.75=-0.85$ eV, so $n^2=13.6/0.85=16$ and $n=4$. The number of possible spectral lines is $n(n-1)/2=4\\times3/2=6$."
                },
                {
                    // mock Q44 — nuclear reaction, conservation of mass number
                    id: "d34p18",
                    text: "An aluminium nucleus, ${}^{27}_{13}\\mathrm{Al}$, absorbs a deuteron, ${}^{2}_{1}\\mathrm{H}$, and emits an alpha particle, ${}^{4}_{2}\\mathrm{He}$. What is the mass number of the residual nucleus $X$?",
                    options: [
                        { key: "a", text: "25" },
                        { key: "b", text: "26" },
                        { key: "c", text: "27" },
                        { key: "d", text: "29" }
                    ],
                    answer: "a",
                    explanation: "Conserve nucleon number: $27+2=A_X+4$, so $A_X=25$. Charge conservation gives $13+1=Z_X+2$, hence $Z_X=12$ and the product is magnesium-25. Absorbing a deuteron and emitting an alpha particle lowers the target's mass number by two."
                },
                {
                    // mock Q45 — elementary constituents of ordinary atomic matter
                    id: "d34p19",
                    text: "Which list names elementary particles involved in the structure of ordinary atoms, rather than treating protons and neutrons as elementary?",
                    options: [
                        { key: "a", text: "Protons, neutrons and electrons" },
                        { key: "b", text: "Quarks, gluons and electrons" },
                        { key: "c", text: "Protons, positrons and photons" },
                        { key: "d", text: "Neutrons, neutrinos and photons" }
                    ],
                    answer: "b",
                    explanation: "Protons and neutrons are composite particles made of quarks bound through the strong interaction mediated by gluons. Electrons are elementary leptons. Protons, neutrons and electrons are useful constituents in the school-level atomic model, but calling all three elementary would be incorrect."
                },
                {
                    // mock Q48 — semiconductor diode
                    id: "d34p20",
                    text: "A two-terminal device carries current when connected one way in a circuit but blocks it almost completely when the connections are reversed. The device is a:",
                    options: [
                        { key: "a", text: "fixed resistor" },
                        { key: "b", text: "capacitor" },
                        { key: "c", text: "p–n junction diode" },
                        { key: "d", text: "filament lamp" }
                    ],
                    answer: "c",
                    explanation: "A p–n junction diode conducts when forward biased and blocks current when reverse biased, so reversing the polarity stops the current. A resistor and a filament lamp conduct both ways, and a capacitor blocks a steady current in either direction."
                }
            ]
        },
        {
            id: "chemistry34",
            name: "Chemistry",
            subject: "Chemistry",
            accent: "amber",
            blurb: "Q21–43 · stoichiometry, atomic structure, bonding, redox, equilibrium, organic reactions and inorganic chemistry.",
            questions: [
                {
                    // mock Q52 — stoichiometry, limiting/mole ratio
                    id: "d34c1",
                    text: "54 g of aluminium is reacted with 64 g of oxygen until the limiting reactant is consumed. How many grams of aluminium oxide can form? (Al = 27, O = 16)",
                    options: [
                        { key: "a", text: "51 g" },
                        { key: "b", text: "102 g" },
                        { key: "c", text: "204 g" },
                        { key: "d", text: "153 g" }
                    ],
                    answer: "b",
                    explanation: "$4\\mathrm{Al}+3\\mathrm{O_2}\\rightarrow2\\mathrm{Al_2O_3}$. The amounts are 2 mol Al and 2 mol oxygen. Reacting 2 mol Al needs only 1.5 mol oxygen, so Al is limiting and 0.5 mol oxygen remains. The product is 1 mol of aluminium oxide, whose molar mass is $2(27)+3(16)=102$ g/mol. Thus 102 g forms; not all the supplied oxygen enters the product.",
                },
                {
                    // mock Q53 — quantum numbers, number of orbitals
                    id: "d34c2",
                    text: "How many distinct orbitals are specified when all three quantum numbers are fixed at $n=4$, $l=2$ and $m_l=-1$?",
                    options: [
                        { key: "a", text: "1" },
                        { key: "b", text: "2" },
                        { key: "c", text: "5" },
                        { key: "d", text: "10" }
                    ],
                    answer: "a",
                    explanation: "Fixing $n$, $l$ and $m_l$ identifies one orbital. The 4d subshell as a whole has five orbitals, but specifying $m_l=-1$ selects just one of them. Two electrons with opposite spins may occupy that orbital; electron capacity is not the number of orbitals."
                },
                {
                    // mock Q55 — hybridization
                    id: "d34c3",
                    text: "In the valence-bond description of the low-spin octahedral complex $[\\mathrm{Fe(CN)_6}]^{3-}$, the metal uses which hybridization?",
                    options: [
                        { key: "a", text: "$sp^3d^2$" },
                        { key: "b", text: "$sp^3d$" },
                        { key: "c", text: "$d^2sp^3$" },
                        { key: "d", text: "$sp^3$" }
                    ],
                    answer: "c",
                    explanation: "Iron is in the +3 state and has a $3d^5$ configuration. Strong-field cyanide gives a low-spin arrangement. In the valence-bond model, two inner 3d orbitals join one 4s and three 4p orbitals, giving $d^2sp^3$ hybridization. The octahedral shape alone does not decide between inner-orbital $d^2sp^3$ and outer-orbital $sp^3d^2$ descriptions."
                },
                {
                    // mock Q58 — oxidation number
                    id: "d34c4",
                    text: "In the brown-ring cation $[\\mathrm{Fe(H_2O)_5NO}]^{2+}$, use the conventional formal assignment of nitrosyl as $\\mathrm{NO^+}$ and water as neutral. What formal oxidation number does this assign to iron?",
                    options: [
                        { key: "a", text: "+3" },
                        { key: "b", text: "+1" },
                        { key: "c", text: "0" },
                        { key: "d", text: "+2" }
                    ],
                    answer: "b",
                    explanation: "With the stated ligand-charge convention, $x+5(0)+1=2$, so iron is formally +1. Nitrosyl is a non-innocent ligand, so the charge assignment is stated explicitly; this is formal oxidation-number bookkeeping, not a claim that the metal's actual charge is exactly +1."
                },
                {
                    // mock Q59 — equilibrium concentrations and mass action
                    id: "d34c5",
                    text: "For $A+B\\rightleftharpoons C+D$, initially $[A]=[B]$ and no C or D is present. At equilibrium, $[C]=3[A]$. What is $K_c$?",
                    options: [
                        { key: "a", text: "9" },
                        { key: "b", text: "3" },
                        { key: "c", text: "$1/3$" },
                        { key: "d", text: "$1/9$" }
                    ],
                    answer: "a",
                    explanation: "The 1:1 stoichiometry keeps A and B equal, while equal amounts of C and D form from zero. Let the equilibrium concentration of A be $a$; then B is $a$, and both C and D are $3a$. Thus $K_c=[C][D]/([A][B])=(3a)^2/a^2=9$. Both products belong in the numerator."
                },
                {
                    // mock Q60 — molality uses the solvent mass
                    id: "d34c6",
                    text: "20 g of NaOH is dissolved in 250 g of water. Given the molar mass of NaOH as 40 g/mol, what is the molality?",
                    options: [
                        { key: "a", text: "2.0 mol/kg" },
                        { key: "b", text: "0.5 mol/kg" },
                        { key: "c", text: "1.0 mol/kg" },
                        { key: "d", text: "4.0 mol/kg" }
                    ],
                    answer: "a",
                    explanation: "The solute amount is $20/40=0.50$ mol and the solvent mass is $250/1000=0.250$ kg. Molality is $0.50/0.250=2.0$ mol/kg. Use 250 g of solvent, not the 270 g mass of the complete solution."
                },
                {
                    // mock Q61 — acid normality
                    id: "d34c7",
                    text: "A 2.45% (w/v) solution of sulphuric acid is used for complete neutralization of both acidic hydrogens. If its molar mass is 98 g/mol, what is its normality?",
                    options: [
                        { key: "a", text: "0.50 N" },
                        { key: "b", text: "0.25 N" },
                        { key: "c", text: "1.00 N" },
                        { key: "d", text: "2.00 N" }
                    ],
                    answer: "a",
                    explanation: "A 2.45% (w/v) solution contains 2.45 g per 100 mL, or 24.5 g per litre. Complete neutralization gives an equivalent mass of $98/2=49$ g/equivalent. Normality is therefore $24.5/49=0.50$ N. Its molarity is 0.25 M; these are not the same for a diprotic acid in this reaction."
                },
                {
                    // mock Q65 — isothermal phase change
                    id: "d34c8",
                    text: "Pure ice melts slowly at 0&deg;C and 1 atm while absorbing heat and remaining in equilibrium with liquid water. Since the temperature stays fixed, the process is described as:",
                    options: [
                        { key: "a", text: "adiabatic" },
                        { key: "b", text: "isochoric" },
                        { key: "c", text: "cyclic" },
                        { key: "d", text: "isothermal" }
                    ],
                    answer: "d",
                    explanation: "Isothermal means constant temperature, not zero heat transfer. The absorbed latent heat changes ice into water without raising the temperature while both phases coexist. Melting is not adiabatic because heat enters, and the sample does not return to its original state as it would in a cycle."
                },
                {
                    // mock Q66 — cell potential, free energy and equilibrium
                    id: "d34c9",
                    text: "For a reaction as written, $E^\\circ_{\\rm cell}=-0.20$ V. Which combination of standard Gibbs energy change and equilibrium constant is correct?",
                    options: [
                        { key: "a", text: "$\\Delta G^\\circ<0$ and $K>1$" },
                        { key: "b", text: "$\\Delta G^\\circ<0$ and $K<1$" },
                        { key: "c", text: "$\\Delta G^\\circ>0$ and $K<1$" },
                        { key: "d", text: "$\\Delta G^\\circ>0$ and $K>1$" }
                    ],
                    answer: "c",
                    explanation: "$\\Delta G^\\circ=-nFE^\\circ$, so a negative standard cell potential gives a positive standard Gibbs energy change. Also $\\Delta G^\\circ=-RT\\ln K$; a positive value requires $\\ln K<0$, hence $K<1$. These statements refer to the forward reaction as written under standard conditions."
                },
                {
                    // mock Q67 — second ionization energy
                    id: "d34c10",
                    text: "Among boron, carbon, nitrogen and oxygen, which has the greatest <b>second</b> ionization energy?",
                    options: [
                        { key: "a", text: "Boron" },
                        { key: "b", text: "Carbon" },
                        { key: "c", text: "Nitrogen" },
                        { key: "d", text: "Oxygen" }
                    ],
                    answer: "d",
                    explanation: "Second ionization removes an electron from the singly charged cation, not the neutral atom. Oxygen becomes $\\mathrm{O^+}$ with a half-filled $2p^3$ arrangement after its first ionization. Removing another electron disrupts that relatively stable arrangement, making oxygen's second ionization energy the largest of these four. Nitrogen's familiar high first ionization energy answers a different comparison."
                },
                {
                    // mock Q69 — scope of the conventional sodium-fusion tests
                    id: "d34c11",
                    text: "Which listed element is not identified by the conventional Lassaigne tests on a sodium-fusion extract?",
                    options: [
                        { key: "a", text: "Phosphorus" },
                        { key: "b", text: "Nitrogen" },
                        { key: "c", text: "Sulphur" },
                        { key: "d", text: "Chlorine" }
                    ],
                    answer: "a",
                    explanation: "The conventional extract tests identify nitrogen, sulphur and halogens after sodium fusion converts them into suitable ionic compounds. Phosphorus is tested separately by oxidation to phosphate followed by an appropriate phosphate test. This does not mean phosphorus is impossible to detect chemically; it distinguishes that procedure from the usual Lassaigne tests."
                },
                {
                    // mock Q71 — electrophile in aromatic sulphonation
                    id: "d34c12",
                    text: "When benzene undergoes sulphonation with fuming sulphuric acid, which electron-deficient species acts as the conventional sulphonating electrophile?",
                    options: [
                        { key: "a", text: "$\\mathrm{HSO_4^-}$" },
                        { key: "b", text: "$\\mathrm{SO_4^{2-}}$" },
                        { key: "c", text: "$\\mathrm{SO_3}$" },
                        { key: "d", text: "$\\mathrm{SO_2}$" }
                    ],
                    answer: "c",
                    explanation: "Sulphur trioxide has an electron-deficient sulphur centre and accepts electron density from benzene's pi system. Loss of a proton then restores aromaticity, giving benzenesulphonic acid. The sulphate and hydrogen sulphate anions are not the electrophiles represented in this standard sulphonation description."
                },
                {
                    // mock Q73 — stereochemistry of dissolving-metal reduction
                    id: "d34c13",
                    text: "Hex-3-yne is reduced using sodium in liquid ammonia. Which alkene is the predominant product?",
                    options: [
                        { key: "a", text: "cis-Hex-3-ene" },
                        { key: "b", text: "Hex-1-ene" },
                        { key: "c", text: "trans-Hex-3-ene" },
                        { key: "d", text: "Hex-2-ene" }
                    ],
                    answer: "c",
                    explanation: "Dissolving-metal reduction of an internal alkyne adds hydrogen overall in an anti fashion and normally stops at the trans alkene. The multiple bond remains between carbons 3 and 4, giving trans-hex-3-ene. Hydrogen with Lindlar's catalyst would instead favour the cis alkene."
                },
                {
                    // mock Q79 — crossed aldol condensation
                    id: "d34c14",
                    text: "Benzaldehyde reacts with acetone under dilute-base conditions in a crossed aldol reaction followed by dehydration. This named condensation is the:",
                    options: [
                        { key: "a", text: "Benzoin condensation" },
                        { key: "b", text: "Cannizzaro reaction" },
                        { key: "c", text: "Claisen-Schmidt condensation" },
                        { key: "d", text: "Knoevenagel condensation" }
                    ],
                    answer: "c",
                    explanation: "The Claisen-Schmidt condensation is a crossed aldol condensation involving an aromatic aldehyde without alpha-hydrogen and a suitable aldehyde or ketone with alpha-hydrogen. Here acetone supplies the enolate and benzaldehyde supplies the carbonyl attacked. Benzaldehyde cannot undergo self-aldol because it has no alpha-hydrogen."
                },
                {
                    // mock Q82 — acylating agent in Friedel–Crafts
                    id: "d34c15",
                    text: "Which carbonyl compound is unsuitable as a conventional acylating reagent for benzene in a Friedel-Crafts reaction?",
                    options: [
                        { key: "a", text: "Acetyl chloride" },
                        { key: "b", text: "Propanoic anhydride" },
                        { key: "c", text: "Benzoyl bromide" },
                        { key: "d", text: "Acetamide" }
                    ],
                    answer: "d",
                    explanation: "Acid halides and anhydrides are usual Friedel-Crafts acylating reagents because they can generate a suitable acyl electrophile with a Lewis acid. An ordinary amide such as acetamide does not behave this way under the conventional conditions: its nitrogen group is a poor leaving group and strongly stabilizes the carbonyl by resonance. All four choices contain a carbonyl group, so recognizing that group alone is insufficient.",
                },
                {
                    // mock Q84 — Hofmann bromamide degradation
                    id: "d34c16",
                    text: "Propanamide, $\\mathrm{CH_3CH_2CONH_2}$, is treated with sodium hypobromite in alkaline solution. What is the organic product of the Hofmann degradation?",
                    options: [
                        { key: "a", text: "Propan-1-amine" },
                        { key: "b", text: "Propanenitrile" },
                        { key: "c", text: "Propan-1-ol" },
                        { key: "d", text: "Ethanamine" }
                    ],
                    answer: "d",
                    explanation: "Hofmann degradation converts a primary amide into a primary amine with one fewer carbon atom: $\\mathrm{RCONH_2}\\rightarrow\\mathrm{RNH_2}$. Propanamide has three carbons, so it gives the two-carbon amine ethanamine. The carbonyl carbon is lost; the reaction does not retain all three carbons as propan-1-amine."
                },
                {
                    // mock Q86 — oxidation of iodide by ozone
                    id: "d34c17",
                    text: "Ozone is passed through aqueous potassium iodide. Which liberated substance gives a blue colour when starch is added?",
                    options: [
                        { key: "a", text: "$\\mathrm{Cl_2}$" },
                        { key: "b", text: "$\\mathrm{HI}$" },
                        { key: "c", text: "$\\mathrm{I_2}$" },
                        { key: "d", text: "$\\mathrm{O_2}$" }
                    ],
                    answer: "c",
                    explanation: "Ozone oxidizes iodide ions to iodine. The balanced reaction is $\\mathrm{O_3+2KI+H_2O\\rightarrow I_2+2KOH+O_2}$. Iodine gives the blue starch complex; the oxygen also produced is not responsible for that colour."
                },
                {
                    // mock Q88 — basicity of the acid from sulphur dioxide
                    id: "d34c18",
                    text: "Sulphur dioxide from roasting an iron sulphide is dissolved in water, giving the acid conventionally written as $\\mathrm{H_2SO_3}$. How many replaceable acidic hydrogens per molecule give its basicity?",
                    options: [
                        { key: "a", text: "2" },
                        { key: "b", text: "1" },
                        { key: "c", text: "3" },
                        { key: "d", text: "0" }
                    ],
                    answer: "a",
                    explanation: "Sulphurous acid is dibasic: its two acidic hydrogens can be replaced in two stages, forming hydrogen sulphite and then sulphite. Basicity counts replaceable acidic hydrogens, not oxygen atoms or acid strength. It does not mean both hydrogens dissociate completely in water."
                },
                {
                    // mock Q90 — high-temperature metallurgical furnaces
                    id: "d34c19",
                    text: "For operations requiring exceptionally high temperatures in metallurgy, which of these furnace types can generally achieve the highest temperature?",
                    options: [
                        { key: "a", text: "Reverberatory furnace" },
                        { key: "b", text: "Muffle furnace" },
                        { key: "c", text: "Blast furnace" },
                        { key: "d", text: "Electric arc furnace" }
                    ],
                    answer: "d",
                    explanation: "An electric arc provides a highly concentrated source of heat and can reach temperatures beyond those normally obtained in the listed conventional fuel-fired furnaces. The comparison concerns attainable temperature, not furnace size or the amount of iron produced."
                },
                {
                    // mock Q94 — surface hardening of iron or steel
                    id: "d34c20",
                    text: "A low-carbon steel component is heated in a carbon-rich environment and then hardened so that its exterior resists wear while its core remains comparatively tough. This treatment is called:",
                    options: [
                        { key: "a", text: "Annealing" },
                        { key: "b", text: "Tempering" },
                        { key: "c", text: "Sherardizing" },
                        { key: "d", text: "Case hardening" }
                    ],
                    answer: "d",
                    explanation: "Carburizing enriches the surface in carbon; subsequent hardening produces a hard outer case with a tougher core. Annealing generally softens the metal, tempering adjusts previously hardened steel, and sherardizing is a zinc-coating process."
                },
                {
                    // mock Q95 — Biuret test for peptide bonds
                    id: "d34c21",
                    text: "A protein solution develops the characteristic violet colour with alkaline copper(II) reagent in the Biuret test. Which linkages are responsible for this reaction?",
                    options: [
                        { key: "a", text: "Peptide bonds" },
                        { key: "b", text: "Ester bonds" },
                        { key: "c", text: "Disulphide bonds" },
                        { key: "d", text: "Glycosidic bonds" }
                    ],
                    answer: "a",
                    explanation: "The Biuret colour arises from a copper complex involving peptide linkages under alkaline conditions. A typical positive reaction requires at least two peptide bonds, as in a tripeptide or protein. It is not a test for disulphide bridges or for ordinary free amino acids."
                },
                {
                    // mock Q96 — hydrolysis of acyl chloride
                    id: "d34c22",
                    text: "Acetyl chloride reacts vigorously with water, liberating a gas that turns moist blue litmus red. The gas is:",
                    options: [
                        { key: "a", text: "carbon dioxide" },
                        { key: "b", text: "sulphur dioxide" },
                        { key: "c", text: "hydrogen chloride" },
                        { key: "d", text: "chlorine" }
                    ],
                    answer: "c",
                    explanation: "$\\mathrm{CH_3COCl}+\\mathrm{H_2O}\\rightarrow \\mathrm{CH_3COOH}+\\mathrm{HCl}$. The acidic hydrogen chloride fumes turn moist blue litmus red. Acid chlorides are readily hydrolysed because chloride is a good leaving group."
                },
                {
                    // mock Q100 — deflection of radioactive rays in a field
                    id: "d34c23",
                    text: "Alpha particles and beta-minus particles enter the same perpendicular magnetic field at the <b>same speed</b>. Which listed radiation bends most sharply, with the smallest circular-path radius?",
                    options: [
                        { key: "a", text: "α-rays" },
                        { key: "b", text: "neutrons" },
                        { key: "c", text: "β-rays" },
                        { key: "d", text: "γ-rays" }
                    ],
                    answer: "c",
                    explanation: "For equal speeds, $r=mv/(|q|B)$ shows that the much smaller mass-to-charge ratio of beta-minus particles gives the smaller radius. Alpha particles are much heavier despite carrying twice the charge magnitude. Gamma rays and neutrons have no electric charge and are not bent by this Lorentz force. Stating equal speed makes the comparison definite."
                }
            ]
        },
        {
            id: "zoology34",
            name: "Zoology",
            subject: "Zoology",
            accent: "rose",
            blurb: "Q44–54 · animal diversity, tissues, human physiology and reproduction.",
            questions: [
                {
                    // mock Q105 — sexual dimorphism
                    id: "d34z1",
                    text: "Which animal normally has separate male and female individuals with clear sexual dimorphism, including a posterior copulatory bursa in the male?",
                    options: [
                        { key: "a", text: "Fasciola hepatica" },
                        { key: "b", text: "Taenia solium" },
                        { key: "c", text: "Earthworm" },
                        { key: "d", text: "Ancylostoma" }
                    ],
                    answer: "d",
                    explanation: "Ancylostoma is a hookworm with separate sexes; males and females differ in size and posterior structures, including the male's copulatory bursa. Fasciola, Taenia and earthworms are normally hermaphroditic, with male and female reproductive organs in the same individual. Sexual dimorphism concerns differences between the two sexes, not stages of metamorphosis.",
                },
                {
                    // mock Q110 — muscle cytoplasm
                    id: "d34z2",
                    text: "The specialised cytoplasm that surrounds the myofibrils within a muscle fibre is called the:",
                    options: [
                        { key: "a", text: "sarcolemma" },
                        { key: "b", text: "sarcoplasm" },
                        { key: "c", text: "sarcomere" },
                        { key: "d", text: "sarcoplasmic reticulum" }
                    ],
                    answer: "b",
                    explanation: "The cytoplasm of a muscle fibre is the sarcoplasm. The sarcolemma is its plasma membrane, the sarcomere is the contractile unit between two Z-lines, and the sarcoplasmic reticulum is the calcium-storing endoplasmic reticulum."
                },
                {
                    // mock Q116 — germinative layer of frog skin
                    id: "d34z3",
                    text: "The innermost stratum germinativum of an adult frog's epidermis produces new epidermal cells. In the standard description of frog skin, this layer consists of:",
                    options: [
                        { key: "a", text: "Several layers of flattened cells" },
                        { key: "b", text: "Several layers of cuboidal cells" },
                        { key: "c", text: "A single layer of columnar cells" },
                        { key: "d", text: "A layer of ciliated pseudostratified cells" }
                    ],
                    answer: "c",
                    explanation: "The basal germinative layer is described as a single layer of living columnar cells that divide to replace epidermal cells. The outer stratum corneum contains flattened cells. The question asks about the named basal layer, not the many-layered epidermis as a whole."
                },
                {
                    // mock Q118 — cellulose digestion in humans
                    id: "d34z4",
                    text: "Human digestive secretions do not break cellulose into glucose because humans do not produce which enzyme?",
                    options: [
                        { key: "a", text: "Amylase" },
                        { key: "b", text: "Maltase" },
                        { key: "c", text: "Lactase" },
                        { key: "d", text: "Cellulase" }
                    ],
                    answer: "d",
                    explanation: "Cellulose contains beta-1,4 glycosidic linkages, which human digestive enzymes cannot hydrolyse because humans do not secrete cellulase. Amylase acts on starch instead. Some dietary fibre can undergo microbial fermentation in the colon; that is different from cellulose digestion by human enzymes."
                },
                {
                    // mock Q119 — intrinsic factor and vitamin absorption
                    id: "d34z5",
                    text: "Damage to gastric parietal cells reduces intrinsic-factor secretion. Absorption of which vitamin is most directly impaired?",
                    options: [
                        { key: "a", text: "Vitamin B<sub>1</sub>" },
                        { key: "b", text: "Vitamin B<sub>2</sub>" },
                        { key: "c", text: "Vitamin B<sub>6</sub>" },
                        { key: "d", text: "Vitamin B<sub>12</sub>" }
                    ],
                    answer: "d",
                    explanation: "Intrinsic factor binds cobalamin, vitamin B<sub>12</sub>, and permits its normal receptor-mediated absorption in the terminal ileum. A persistent lack of intrinsic factor can therefore cause vitamin B<sub>12</sub> deficiency and pernicious anaemia. The other listed B vitamins do not depend on this binding protein."
                },
                {
                    // mock Q120 — stroke volume
                    id: "d34z6",
                    text: "A resting person's left ventricle pumps 5.25 litres per minute at a heart rate of 75 beats per minute. What is the stroke volume?",
                    options: [
                        { key: "a", text: "50 mL" },
                        { key: "b", text: "70 mL" },
                        { key: "c", text: "90 mL" },
                        { key: "d", text: "120 mL" }
                    ],
                    answer: "b",
                    explanation: "Cardiac output equals heart rate times stroke volume. Convert 5.25 L/min to 5250 mL/min, then divide by 75 beats/min: $5250/75=70$ mL per beat. This is the amount ejected in a beat, not the total volume present in the ventricle before contraction."
                },
                {
                    // mock Q124 — renal reabsorption
                    id: "d34z7",
                    text: "In a healthy person whose blood glucose is below the renal threshold, which filtered substance is normally reabsorbed essentially completely and is therefore absent from routine urine tests?",
                    options: [
                        { key: "a", text: "Urea" },
                        { key: "b", text: "Creatinine" },
                        { key: "c", text: "Glucose" },
                        { key: "d", text: "Uric acid" }
                    ],
                    answer: "c",
                    explanation: "The proximal tubule normally reabsorbs essentially all filtered glucose when the filtered load is below its transport capacity. Glucose may appear in urine when that capacity is exceeded or tubular reabsorption is impaired. Urea, creatinine and uric acid are normally excreted to varying extents."
                },
                {
                    // mock Q126 — anterior spinal cord enlargement
                    id: "d34z8",
                    text: "In humans, the spinal cord widens in the region from which nerves supplying the upper limbs arise. This region is the:",
                    options: [
                        { key: "a", text: "Cauda equina" },
                        { key: "b", text: "Filum terminale" },
                        { key: "c", text: "Medulla oblongata" },
                        { key: "d", text: "Cervical enlargement" }
                    ],
                    answer: "d",
                    explanation: "The cervical enlargement contains the additional neurons and connections associated with the upper limbs. The cauda equina is a bundle of lower spinal nerve roots, the filum terminale is a supporting strand, and the medulla oblongata is part of the brainstem."
                },
                {
                    // mock Q127 — iris response to dim illumination
                    id: "d34z9",
                    text: "A person moves from bright daylight into a dim room. Which response of the iris admits more light into the eye?",
                    options: [
                        { key: "a", text: "Circular muscles contract; the pupil narrows" },
                        { key: "b", text: "Radial muscles relax; the pupil narrows" },
                        { key: "c", text: "Circular muscles contract; the pupil widens" },
                        { key: "d", text: "Radial muscles contract; the pupil widens" }
                    ],
                    answer: "d",
                    explanation: "Contraction of the radial dilator muscles, with relaxation of the circular sphincter, widens the pupil in dim light. Ciliary muscles mainly adjust lens shape for focusing. Slower dark adaptation also occurs in the retina; pupil dilation is not the whole explanation for the gradual improvement in night vision."
                },
                {
                    // mock Q128 — static equilibrium
                    id: "d34z10",
                    text: "Which pair of inner-ear structures detects head position relative to gravity and linear acceleration, contributing to static equilibrium?",
                    options: [
                        { key: "a", text: "Cochlea and auditory ossicles" },
                        { key: "b", text: "Utricle and saccule" },
                        { key: "c", text: "Semicircular canals and cochlea" },
                        { key: "d", text: "Eardrum and auditory tube" }
                    ],
                    answer: "b",
                    explanation: "The utricle and saccule contain otolith organs whose hair cells respond to gravity and linear acceleration. The semicircular canals chiefly detect angular acceleration, whereas the cochlea is concerned with hearing. These are different functions within the inner ear."
                },
                {
                    // mock Q132 — sperm storage
                    id: "d34z11",
                    text: "After they are formed in the testis, sperms are stored and become motile mainly in the:",
                    options: [
                        { key: "a", text: "seminal vesicle" },
                        { key: "b", text: "epididymis" },
                        { key: "c", text: "prostate gland" },
                        { key: "d", text: "vas deferens" }
                    ],
                    answer: "b",
                    explanation: "Sperms mature and are stored in the coiled epididymis before ejaculation. The seminal vesicle and prostate contribute fluid to semen but do not store sperm."
                }
            ]
        },
        {
            id: "botany34",
            name: "Botany",
            subject: "Botany",
            accent: "emerald",
            blurb: "Q55–73 · cell division, plant anatomy, ecology, physiology, genetics and biotechnology.",
            questions: [
                {
                    // mock Q137 — microbial biocontrol of plant pathogens
                    id: "d34b1",
                    text: "A grower treats seeds and roots with the beneficial soil bacterium Streptomyces lydicus. It is used primarily as a biocontrol agent against:",
                    options: [
                        { key: "a", text: "Plant viral infections" },
                        { key: "b", text: "Leaf-feeding insect pests" },
                        { key: "c", text: "Plant-pathogenic fungi" },
                        { key: "d", text: "Mineral-deficiency disorders" }
                    ],
                    answer: "c",
                    explanation: "Streptomyces lydicus is used as a microbial antagonist of plant-pathogenic fungi in the root environment. Competition and antifungal activity help suppress disease. The fact that the biocontrol organism is a bacterium does not mean its target must also be a bacterium."
                },
                {
                    // mock Q142 — fungal partner of most lichens
                    id: "d34b2",
                    text: "Most lichen-forming fungal partners, or mycobionts, belong to which group?",
                    options: [
                        { key: "a", text: "Ascomycetes" },
                        { key: "b", text: "Basidiomycetes" },
                        { key: "c", text: "Zygomycetes" },
                        { key: "d", text: "Chytridiomycetes" }
                    ],
                    answer: "a",
                    explanation: "The great majority of lichen mycobionts are ascomycetes, whose sexual spores form in asci. A small minority are basidiomycetes. The photosynthetic partner is an alga or cyanobacterium, so identifying that partner would not answer this question about the fungus."
                },
                {
                    // mock Q145 — moss gametophyte
                    id: "d34b3",
                    text: "Multicellular branched rhizoids together with erect, leafy gametophytes are characteristic of:",
                    options: [
                        { key: "a", text: "mosses (Bryophyta)" },
                        { key: "b", text: "liverworts" },
                        { key: "c", text: "ferns" },
                        { key: "d", text: "green algae" }
                    ],
                    answer: "a",
                    explanation: "Mosses have leafy gametophytes anchored by multicellular, branched rhizoids. Liverwort rhizoids are generally unicellular; liverworts themselves may be thalloid or leafy, so it would be wrong to call every liverwort a flat thallus. Ferns instead have a dominant sporophyte with true roots."
                },
                {
                    // mock Q152 — shape of a storage taproot
                    id: "d34b4",
                    text: "Which pair correctly matches a storage taproot with its shape?",
                    options: [
                        { key: "a", text: "Carrot - conical" },
                        { key: "b", text: "Radish - napiform" },
                        { key: "c", text: "Turnip - fusiform" },
                        { key: "d", text: "Sweet potato - conical taproot" }
                    ],
                    answer: "a",
                    explanation: "A carrot's conical taproot is broad near the stem and tapers gradually towards its tip. Radish is usually described as fusiform, broadest in the middle, and turnip as napiform, rounded above and abruptly narrowed below. Sweet potato stores food in tuberous adventitious roots, not a conical taproot."
                },
                {
                    // mock Q154 — secondary succession
                    id: "d34b5",
                    text: "A fire removes much of a plant community, but the soil and some below-ground parts survive. Which statement about the ensuing secondary succession is correct?",
                    options: [
                        { key: "a", text: "It must begin with soil formation on bare rock." },
                        { key: "b", text: "It can occur only within an undamaged forest." },
                        { key: "c", text: "It cannot involve seeds or roots already present." },
                        { key: "d", text: "The retained soil usually allows faster recovery." }
                    ],
                    answer: "d",
                    explanation: "Secondary succession starts after disturbance where soil already exists. Surviving roots, seeds, nutrients and microbes often make it faster than primary succession on bare substrate. It is not restricted to forests, and it does not have to repeat the initial weathering and soil-building stages."
                },
                {
                    // mock Q156 — parasitic food chain
                    id: "d34b6",
                    text: "Which sequence represents a parasitic food chain in a pond? The arrows show transfer from the food source or host to the organism feeding on it.",
                    options: [
                        { key: "a", text: "Algae &rarr; small fish &rarr; large fish" },
                        { key: "b", text: "Fish &rarr; parasitic louse &rarr; hyperparasite" },
                        { key: "c", text: "Dead leaves &rarr; microbes &rarr; detritivores" },
                        { key: "d", text: "Fish &rarr; water snake &rarr; fish-eating bird" }
                    ],
                    answer: "b",
                    explanation: "A fish can support a parasitic fish louse, which may itself support a hyperparasite. Energy passes from the larger host to its parasite and then to a parasite of that parasite. The other sequences describe grazing or predation, or a detritus-based route, rather than the host-to-parasite relationship.",
                },
                {
                    // mock Q157 — histogen giving rise to the stele
                    id: "d34b7",
                    text: "In the classical histogen theory, which primary histogen gives rise to the central vascular cylinder, or stele?",
                    options: [
                        { key: "a", text: "Dermatogen" },
                        { key: "b", text: "Plerome" },
                        { key: "c", text: "Periblem" },
                        { key: "d", text: "Calyptrogen" }
                    ],
                    answer: "b",
                    explanation: "In that classical scheme, plerome forms the stele, periblem forms the cortex, and dermatogen forms the epidermis; calyptrogen is associated with the root cap. Procambium is the meristem that differentiates into primary xylem and phloem, but it is terminology from a different description of meristem organization."
                },
                {
                    // mock Q158 — primary root versus stem anatomy
                    id: "d34b8",
                    text: "Which combination is characteristic of a young dicot root's primary vascular system, in contrast to a typical young dicot stem?",
                    options: [
                        { key: "a", text: "Endarch xylem; conjoint bundles" },
                        { key: "b", text: "Endarch xylem; radial bundles" },
                        { key: "c", text: "Exarch xylem; radial bundles" },
                        { key: "d", text: "Exarch xylem; conjoint bundles" }
                    ],
                    answer: "c",
                    explanation: "A typical primary root has peripheral protoxylem (exarch development), with xylem and phloem on alternate radii. A typical dicot stem has endarch xylem and conjoint collateral bundles. Cortex and protoxylem occur in both organs, so their mere presence does not distinguish them."
                },
                {
                    // mock Q160 — purpose of herbicide-tolerant crops
                    id: "d34b9",
                    text: "A farmer grows a crop engineered to tolerate a particular herbicide and applies that herbicide to the field. What is the intended selective effect?",
                    options: [
                        { key: "a", text: "The crop and every weed tolerate the spray." },
                        { key: "b", text: "The crop is removed while the weeds survive." },
                        { key: "c", text: "Susceptible weeds are controlled while the crop survives." },
                        { key: "d", text: "Weeds disappear without applying any herbicide." }
                    ],
                    answer: "c",
                    explanation: "Herbicide tolerance allows the crop to withstand a herbicide that controls susceptible weeds, reducing competition without the same damage to the crop. It does not eliminate the use of herbicides or make the crop automatically resistant to insects and diseases. Resistant weeds can still evolve, so the trait does not guarantee control of every weed."
                },
                {
                    // mock Q161 — microinjection
                    id: "d34b10",
                    text: "The technique in which foreign DNA is introduced by injecting it directly into the nucleus of a host cell using a fine glass needle is called:",
                    options: [
                        { key: "a", text: "electroporation" },
                        { key: "b", text: "the gene gun (biolistics)" },
                        { key: "c", text: "the plasmid vector method" },
                        { key: "d", text: "microinjection" }
                    ],
                    answer: "d",
                    explanation: "Microinjection delivers DNA straight into the nucleus with a micropipette. Electroporation uses electric pulses, the gene gun fires DNA-coated particles, and plasmid vectors carry DNA in through a microbe."
                },
                {
                    // mock Q162 — protoplast isolation enzymes
                    id: "d34b11",
                    text: "To isolate protoplasts for somatic hybridization, the plant cell walls are digested with:",
                    options: [
                        { key: "a", text: "cellulase and pectinase" },
                        { key: "b", text: "amylase and lipase" },
                        { key: "c", text: "protease and nuclease" },
                        { key: "d", text: "DNase and RNase" }
                    ],
                    answer: "a",
                    explanation: "Cellulase digests the cellulose wall and pectinase dissolves the middle lamella, releasing wall-free protoplasts. The other enzymes act on starch, proteins or nucleic acids, not on the cell wall."
                },
                {
                    // mock Q163 — tissue-culture hormones
                    id: "d34b12",
                    text: "In plant tissue culture, increasing which hormone relative to auxin generally encourages a callus to develop shoot buds?",
                    options: [
                        { key: "a", text: "Gibberellins" },
                        { key: "b", text: "Cytokinins" },
                        { key: "c", text: "Ethylene" },
                        { key: "d", text: "Abscisic acid" }
                    ],
                    answer: "b",
                    explanation: "Cytokinins promote cell division and, at a high ratio to auxin in a suitable culture, generally favour shoot formation. A comparatively high auxin-to-cytokinin ratio usually favours roots. The exact response depends on the species and medium, but cytokinins are the hormone group associated with this shoot-inducing treatment.",
                },
                {
                    // mock Q165 — crossing over during meiosis
                    id: "d34b13",
                    text: "In the standard textbook sequence of meiotic prophase I, exchange of corresponding chromosome segments between non-sister chromatids of paired homologues is associated with:",
                    options: [
                        { key: "a", text: "Zygotene" },
                        { key: "b", text: "Diplotene" },
                        { key: "c", text: "Pachytene" },
                        { key: "d", text: "Leptotene" }
                    ],
                    answer: "c",
                    explanation: "The textbook association is crossing over with pachytene, after homologous chromosomes have synapsed during zygotene. Chiasmata become evident as the homologues begin separating at diplotene. Distinguish the exchange stage from the later visibility of its chiasmata."
                },
                {
                    // mock Q167 — why a triplet genetic code has 64 codons
                    id: "d34b14",
                    text: "RNA uses four kinds of nucleotide. With three ordered positions in each codon and repetition allowed, how many different codons can be formed?",
                    options: [
                        { key: "a", text: "64" },
                        { key: "b", text: "12" },
                        { key: "c", text: "16" },
                        { key: "d", text: "81" }
                    ],
                    answer: "a",
                    explanation: "Each of the three positions independently has four possibilities, so the count is $4^3=64$. In the standard genetic code, 61 specify amino acids and three are stop codons. The number 64 follows from the triplet structure, not from having 64 amino acids or 64 distinct tRNAs."
                },
                {
                    // mock Q170 — incomplete dominance
                    id: "d34b15",
                    text: "Incomplete dominance, giving pink flowers in the F₁ generation, is classically shown by:",
                    options: [
                        { key: "a", text: "Pisum sativum" },
                        { key: "b", text: "Mirabilis jalapa" },
                        { key: "c", text: "Lathyrus odoratus" },
                        { key: "d", text: "Neurospora crassa" }
                    ],
                    answer: "b",
                    explanation: "In Mirabilis jalapa (four o'clock plant) a red-flowered parent crossed with a white one gives pink F₁ plants, because neither allele is completely dominant. Pisum sativum is Mendel's pea, which shows complete dominance."
                },
                {
                    // mock Q172 — contagium vivum fluidum
                    id: "d34b16",
                    text: "The term contagium vivum fluidum ('infectious living fluid'), applied to the agent extracted from tobacco mosaic-diseased plants, was coined by:",
                    options: [
                        { key: "a", text: "Ivanowsky" },
                        { key: "b", text: "Beijerinck" },
                        { key: "c", text: "Stanley" },
                        { key: "d", text: "Pasteur" }
                    ],
                    answer: "b",
                    explanation: "Beijerinck coined contagium vivum fluidum for the tobacco mosaic agent. Ivanowsky had shown it passed through bacteria-proof filters, and Stanley later crystallised the tobacco mosaic virus."
                },
                {
                    // mock Q175 — Calvin cycle requirement
                    id: "d34b17",
                    text: "The fixation of one molecule of CO₂ through the Calvin cycle requires:",
                    options: [
                        { key: "a", text: "2 ATP and 2 NADPH" },
                        { key: "b", text: "2 ATP and 1 NADPH" },
                        { key: "c", text: "3 ATP and 1 NADPH" },
                        { key: "d", text: "3 ATP and 2 NADPH" }
                    ],
                    answer: "d",
                    explanation: "For every CO₂ fixed, the Calvin cycle uses 3 ATP and 2 NADPH. Producing one molecule of glucose (six CO₂) therefore needs 18 ATP and 12 NADPH."
                },
                {
                    // mock Q176 — C4 anatomy
                    id: "d34b18",
                    text: "The specific anatomical feature associated with C₄ plants is:",
                    options: [
                        { key: "a", text: "Kranz anatomy with chloroplast-rich bundle-sheath cells" },
                        { key: "b", text: "a well-developed spongy mesophyll" },
                        { key: "c", text: "deeply sunken stomata" },
                        { key: "d", text: "the complete absence of chloroplasts" }
                    ],
                    answer: "a",
                    explanation: "C₄ plants show Kranz anatomy: a wreath of large bundle-sheath cells, rich in chloroplasts, surrounds the vascular bundles and carries out the Calvin cycle, keeping CO₂ concentrated and reducing photorespiration."
                },
                {
                    // mock Q177 — stage producing most ATP
                    id: "d34b19",
                    text: "During the complete aerobic oxidation of one glucose molecule, the largest number of ATP molecules is generated during:",
                    options: [
                        { key: "a", text: "glycolysis" },
                        { key: "b", text: "the link reaction" },
                        { key: "c", text: "the Krebs cycle" },
                        { key: "d", text: "the electron transport chain" }
                    ],
                    answer: "d",
                    explanation: "Most ATP is produced by oxidative phosphorylation in the electron transport chain, which re-oxidises the NADH and FADH₂ made earlier. Glycolysis and the Krebs cycle yield only a small amount of ATP directly."
                }
            ]
        },
        {
            id: "mat34",
            name: "MAT / Reasoning",
            subject: "MAT",
            accent: "slate",
            blurb: "Q74–100 · verbal, numerical, logical and spatial reasoning drawn from the mock and Day 33, with five additional follow-ups.",
            questions: [
                {
                    // mock Q183 — coding-decoding
                    id: "d34m1",
                    text: "In a code, a word's letters are rearranged into alphabetical order: <b>MEDICAL</b> becomes <b>ACDEILM</b>. What is the code for <b>ORANGES</b>?",
                    options: [
                        { key: "a", text: "AEGNORS" },
                        { key: "b", text: "AEGNOSR" },
                        { key: "c", text: "AEGRNOS" },
                        { key: "d", text: "AEGONRS" }
                    ],
                    answer: "a",
                    explanation: "Arrange the letters of ORANGES from earliest to latest in the alphabet: A, E, G, N, O, R, S. The code is AEGNORS. No letter is replaced or shifted; the original letters are only reordered, as in the MEDICAL example."
                },
                {
                    // mock Q184 — analogy (thing : container)
                    id: "d34m2",
                    text: "<b>Arrows : Quiver</b> :: <b>Books : ?</b>",
                    options: [
                        { key: "a", text: "Author" },
                        { key: "b", text: "Library" },
                        { key: "c", text: "Paper" },
                        { key: "d", text: "Pen" }
                    ],
                    answer: "b",
                    explanation: "A quiver is the place where arrows are kept, so the relation is 'object : place where it is stored'. Books are kept in a library. An author writes books and paper/pen are materials, so they do not fit the relation."
                },
                {
                    // mock Q185 — substitution logic (colours)
                    id: "d34m3",
                    text: "If 'red' is called 'blue', 'blue' is called 'green', 'green' is called 'white' and 'white' is called 'yellow', then the colour of a healthy leaf is called:",
                    options: [
                        { key: "a", text: "green" },
                        { key: "b", text: "white" },
                        { key: "c", text: "yellow" },
                        { key: "d", text: "blue" }
                    ],
                    answer: "b",
                    explanation: "A healthy leaf is really green, and in this code 'green' is called 'white'. So the leaf's colour is called white. Answer with the new name of the real colour, not the real colour itself."
                },
                {
                    // mock Q190 — completion of a letter series
                    id: "d34m4",
                    text: "Complete the letter series. Each successive forward jump increases by one alphabet position.<svg class='q-fig' viewBox='0 0 340 80' width='340' height='80' role='img' aria-label='Five boxes containing B, D, G, K and a question mark, from left to right'><g fill='none' stroke='currentColor' stroke-width='1.6'><rect x='7' y='8' width='58' height='54'/><rect x='73' y='8' width='58' height='54'/><rect x='139' y='8' width='58' height='54'/><rect x='205' y='8' width='58' height='54'/><rect x='271' y='8' width='58' height='54'/></g><g fill='currentColor' text-anchor='middle' font-size='22'><text x='36' y='43'>B</text><text x='102' y='43'>D</text><text x='168' y='43'>G</text><text x='234' y='43'>K</text><text x='300' y='43'>?</text></g></svg>",
                    options: [
                        { key: "a", text: "O" },
                        { key: "b", text: "P" },
                        { key: "c", text: "Q" },
                        { key: "d", text: "R" }
                    ],
                    answer: "b",
                    explanation: "The alphabet positions are 2, 4, 7 and 11, with increases of 2, 3 and 4. The next increase is 5, giving position $11+5=16$, which is P. The stated growing-jump rule avoids an ambiguous guess about the pattern."
                },
                {
                    // mock Q194 — compound interest, quarterly
                    id: "d34m5",
                    text: "Find the compound interest on Rs 8,000 for 9 months at 20% per annum, compounded quarterly.",
                    options: [
                        { key: "a", text: "Rs 1,200" },
                        { key: "b", text: "Rs 1,261" },
                        { key: "c", text: "Rs 1,324" },
                        { key: "d", text: "Rs 1,250" }
                    ],
                    answer: "b",
                    explanation: "Quarterly rate = 20%/4 = 5%, and 9 months = 3 quarters. Amount $=8000(1.05)^3=8000\\times1.157625=9261$. So CI $=9261-8000=$ Rs 1,261."
                },
                {
                    // mock Q197 — folding a net into a cube
                    id: "d34m6",
                    text: "Which cube can be formed by folding the net shown? Compare the labelled faces; ignore the orientation of the individual letter shapes.<svg class='q-fig' viewBox='0 0 180 140' width='234' height='182' role='img' aria-label='Cube net: P, Q, R, S in a horizontal row, T above Q and U below Q'><g fill='none' stroke='currentColor' stroke-width='1.6'><rect x='10' y='50' width='40' height='40'/><rect x='50' y='50' width='40' height='40'/><rect x='90' y='50' width='40' height='40'/><rect x='130' y='50' width='40' height='40'/><rect x='50' y='10' width='40' height='40'/><rect x='50' y='90' width='40' height='40'/></g><g fill='currentColor' font-size='15' text-anchor='middle'><text x='30' y='75'>P</text><text x='70' y='75'>Q</text><text x='110' y='75'>R</text><text x='150' y='75'>S</text><text x='70' y='35'>T</text><text x='70' y='115'>U</text></g></svg>",
                    options: [
                        { key: "a", text: "<svg class='opt-fig' viewBox='0 0 80 84' role='img' aria-label='Cube with T on top, Q in front and R on the right'><g fill='none' stroke='currentColor' stroke-width='1.6' stroke-linejoin='round'><path d='M10 32h40v40H10ZM10 32 28 16h40v40L50 72M50 32 68 16'/></g><g fill='currentColor' text-anchor='middle' font-size='13'><text x='39' y='28'>T</text><text x='30' y='56'>Q</text><text x='59' y='49'>R</text></g></svg>Top T, front Q, right R" },
                        { key: "b", text: "<svg class='opt-fig' viewBox='0 0 80 84' role='img' aria-label='Cube with T on top, P in front and R on the right'><g fill='none' stroke='currentColor' stroke-width='1.6' stroke-linejoin='round'><path d='M10 32h40v40H10ZM10 32 28 16h40v40L50 72M50 32 68 16'/></g><g fill='currentColor' text-anchor='middle' font-size='13'><text x='39' y='28'>T</text><text x='30' y='56'>P</text><text x='59' y='49'>R</text></g></svg>Top T, front P, right R" },
                        { key: "c", text: "<svg class='opt-fig' viewBox='0 0 80 84' role='img' aria-label='Cube with U on top, Q in front and S on the right'><g fill='none' stroke='currentColor' stroke-width='1.6' stroke-linejoin='round'><path d='M10 32h40v40H10ZM10 32 28 16h40v40L50 72M50 32 68 16'/></g><g fill='currentColor' text-anchor='middle' font-size='13'><text x='39' y='28'>U</text><text x='30' y='56'>Q</text><text x='59' y='49'>S</text></g></svg>Top U, front Q, right S" },
                        { key: "d", text: "<svg class='opt-fig' viewBox='0 0 80 84' role='img' aria-label='Cube with P on top, T in front and U on the right'><g fill='none' stroke='currentColor' stroke-width='1.6' stroke-linejoin='round'><path d='M10 32h40v40H10ZM10 32 28 16h40v40L50 72M50 32 68 16'/></g><g fill='currentColor' text-anchor='middle' font-size='13'><text x='39' y='28'>P</text><text x='30' y='56'>T</text><text x='59' y='49'>U</text></g></svg>Top P, front T, right U" }
                    ],
                    answer: "a",
                    explanation: "The opposite pairs are P/R, Q/S and T/U. With Q as the front, T folds to the top and R to the right, giving the first cube. Each other drawing incorrectly puts an opposite pair on adjacent visible faces: P/R, Q/S or T/U. Opposite faces cannot meet along an edge of the folded cube.",
                },
                {
                    // mock Q198 — rotation of a figure
                    id: "d34m7",
                    text: "A square card has an arrow pointing <b>up</b> and a dot in its <b>top-right</b> corner. The card is turned 90&deg; <b>anticlockwise</b>. Which option shows the result?<svg class='q-fig' viewBox='0 0 70 70' width='84' height='84' role='img' aria-label='Square card: arrow points up, dot in the top-right corner'><rect x='5' y='5' width='60' height='60' fill='none' stroke='currentColor' stroke-width='1.6'/><path d='M35 51V19m-8 8 8-8 8 8' fill='none' stroke='currentColor' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'/><circle cx='51' cy='19' r='4' fill='currentColor'/></svg>",
                    options: [
                        { key: "a", text: "<svg class='opt-fig' viewBox='0 0 70 70' role='img' aria-label='Right arrow, top-right dot'><rect x='5' y='5' width='60' height='60' fill='none' stroke='currentColor' stroke-width='1.6'/><path d='M19 35H51m-8-8 8 8-8 8' fill='none' stroke='currentColor' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'/><circle cx='51' cy='19' r='4' fill='currentColor'/></svg>Arrow right; dot top-right" },
                        { key: "b", text: "<svg class='opt-fig' viewBox='0 0 70 70' role='img' aria-label='Down arrow, bottom-left dot'><rect x='5' y='5' width='60' height='60' fill='none' stroke='currentColor' stroke-width='1.6'/><path d='M35 19V51m-8-8 8 8 8-8' fill='none' stroke='currentColor' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'/><circle cx='19' cy='51' r='4' fill='currentColor'/></svg>Arrow down; dot bottom-left" },
                        { key: "c", text: "<svg class='opt-fig' viewBox='0 0 70 70' role='img' aria-label='Left arrow, top-left dot'><rect x='5' y='5' width='60' height='60' fill='none' stroke='currentColor' stroke-width='1.6'/><path d='M51 35H19m8-8-8 8 8 8' fill='none' stroke='currentColor' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'/><circle cx='19' cy='19' r='4' fill='currentColor'/></svg>Arrow left; dot top-left" },
                        { key: "d", text: "<svg class='opt-fig' viewBox='0 0 70 70' role='img' aria-label='Up arrow, bottom-right dot'><rect x='5' y='5' width='60' height='60' fill='none' stroke='currentColor' stroke-width='1.6'/><path d='M35 51V19m-8 8 8-8 8 8' fill='none' stroke='currentColor' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'/><circle cx='51' cy='51' r='4' fill='currentColor'/></svg>Arrow up; dot bottom-right" }
                    ],
                    answer: "c",
                    explanation: "A 90&deg; anticlockwise turn sends 'up' to 'left', so the arrow points left. The same turn carries the top-right corner to the top-left corner, so the dot moves there too. Both features rotate together."
                },
                {
                    // Day 33 Q2 — classification (mineral vs rock)
                    id: "d34m8",
                    text: "Three of the following are rocks and one is a mineral. Which is the odd one out?",
                    options: [
                        { key: "a", text: "Granite" },
                        { key: "b", text: "Basalt" },
                        { key: "c", text: "Halite" },
                        { key: "d", text: "Marble" }
                    ],
                    answer: "c",
                    explanation: "Halite is the mineral sodium chloride. Granite, basalt and marble are rock types. A rock may be dominated by a single mineral, as marble often is by calcite, so the distinction is not simply 'one ingredient versus several'. Feldspar would be a mineral-group name rather than one fixed-composition mineral."
                },
                {
                    // Day 33 Q12 — sufficient vs necessary
                    id: "d34m9",
                    text: "Every student who submits the project on time gets a bonus mark. Rita received a bonus mark. Using <b>only</b> this information, which conclusion is justified?",
                    options: [
                        { key: "a", text: "Rita must have submitted the project on time." },
                        { key: "b", text: "Rita may or may not have submitted the project on time." },
                        { key: "c", text: "Rita must have submitted the project late." },
                        { key: "d", text: "Only students who submitted on time got a bonus mark." }
                    ],
                    answer: "b",
                    explanation: "Submitting on time is sufficient for a bonus mark, but the rule does not say it is the only way to earn one. Rita may have submitted on time, or gained the bonus by some other route, so her timing cannot be fixed from the statement alone."
                },
                {
                    // Day 33 Q17 — mixture, add water to reach a ratio
                    id: "d34m10",
                    text: "A 28-litre mixture of milk and water is in the ratio 5 : 2. How many litres of water must be added to change the ratio to 5 : 4?",
                    options: [
                        { key: "a", text: "10 litres" },
                        { key: "b", text: "4 litres" },
                        { key: "c", text: "6 litres" },
                        { key: "d", text: "8 litres" }
                    ],
                    answer: "d",
                    explanation: "The 7 ratio-parts make 28 litres, so each part is 4 litres: 20 litres of milk and 8 of water. The milk is unchanged, so for 5 : 4 the water must become $20\\times4/5=16$ litres. That means adding $16-8=8$ litres."
                },
                {
                    // Day 33 Q18 — ages, present and future ratio
                    id: "d34m11",
                    text: "Four years ago, A's and B's ages were in the ratio 4 : 3. Five years from now, their ages will be in the ratio 5 : 4. What is A's present age?",
                    options: [
                        { key: "a", text: "40 years" },
                        { key: "b", text: "32 years" },
                        { key: "c", text: "36 years" },
                        { key: "d", text: "28 years" }
                    ],
                    answer: "a",
                    explanation: "Let their ages four years ago be $4x$ and $3x$. Five years from now is nine years after that point, so $(4x+9)/(3x+9)=5/4$. This gives $16x+36=15x+45$, hence $x=9$. A is now $4(9)+4=40$ years old. Check: past ages 36 and 27 become future ages 45 and 36, with ratios 4:3 and 5:4 respectively.",
                },
                {
                    // Day 33 Q21 — pipes and cistern with an outlet
                    id: "d34m12",
                    text: "Pipe A fills a tank in 10 hours and pipe B in 15 hours, while outlet C empties a full tank in 30 hours. All rates are constant. With all three open, an initially empty tank fills in:",
                    options: [
                        { key: "a", text: "7.5 hours" },
                        { key: "b", text: "6 hours" },
                        { key: "c", text: "9 hours" },
                        { key: "d", text: "10 hours" }
                    ],
                    answer: "a",
                    explanation: "Add the filling rates and subtract the emptying rate: $\\tfrac1{10}+\\tfrac1{15}-\\tfrac1{30}=\\tfrac{3+2-1}{30}=\\tfrac4{30}=\\tfrac2{15}$ tank per hour. The tank therefore fills in $15/2=7.5$ hours."
                },
                {
                    // Day 33 Q22 — two trains, opposite directions
                    id: "d34m13",
                    text: "Two trains 150 m and 100 m long run on parallel tracks in opposite directions at 45 km/h and 27 km/h. How long do they take to cross each other completely?",
                    options: [
                        { key: "a", text: "10 seconds" },
                        { key: "b", text: "12.5 seconds" },
                        { key: "c", text: "15 seconds" },
                        { key: "d", text: "20 seconds" }
                    ],
                    answer: "b",
                    explanation: "For opposite directions the relative speed adds: $45+27=72$ km/h $=20$ m/s. To cross, the trains cover their combined length $150+100=250$ m. The time is $250/20=12.5$ seconds."
                },
                {
                    // Day 33 Q23 — train past a pole vs a platform
                    id: "d34m14",
                    text: "A train passes a pole in 9 seconds and a 240 m long platform in 24 seconds, both at the same constant speed. The length of the train is:",
                    options: [
                        { key: "a", text: "120 m" },
                        { key: "b", text: "144 m" },
                        { key: "c", text: "160 m" },
                        { key: "d", text: "180 m" }
                    ],
                    answer: "b",
                    explanation: "Passing the pole covers one train length: $L=9v$. Passing the platform covers length plus 240 m: $L+240=24v$. Subtracting, $240=15v$, so $v=16$ m/s and $L=9\\times16=144$ m."
                },
                {
                    // Day 33 Q25 — data interpretation, bar chart
                    id: "d34m15",
                    text: "The bar chart shows the number of items a shop sold on four days. What percentage of the four-day total was sold on <b>Tuesday and Wednesday together</b>?<svg class='q-fig' viewBox='0 0 280 172' width='336' height='206' role='img' aria-label='Bar chart of items sold: Monday 20, Tuesday 35, Wednesday 25, Thursday 20'><g fill='none' stroke='currentColor' stroke-width='1'><path d='M30 16v126h238'/><path d='M30 110h238M30 78h238M30 46h238' stroke-dasharray='3 4' opacity='0.3'/></g><g fill='currentColor' fill-opacity='0.3' stroke='currentColor' stroke-width='1.2'><rect x='48' y='78' width='32' height='64'/><rect x='103' y='30' width='32' height='112'/><rect x='158' y='62' width='32' height='80'/><rect x='213' y='78' width='32' height='64'/></g><g fill='currentColor' text-anchor='middle' font-size='11'><text x='64' y='71'>20</text><text x='119' y='23'>35</text><text x='174' y='55'>25</text><text x='229' y='71'>20</text><text x='64' y='159'>Mon</text><text x='119' y='159'>Tue</text><text x='174' y='159'>Wed</text><text x='229' y='159'>Thu</text></g><g fill='currentColor' text-anchor='end' font-size='10'><text x='24' y='146'>0</text><text x='24' y='114'>10</text><text x='24' y='82'>20</text><text x='24' y='50'>30</text></g></svg>",
                    options: [
                        { key: "a", text: "55%" },
                        { key: "b", text: "50%" },
                        { key: "c", text: "45%" },
                        { key: "d", text: "60%" }
                    ],
                    answer: "d",
                    explanation: "The four-day total is $20+35+25+20=100$. Tuesday and Wednesday together sold $35+25=60$. Their share is $(60/100)\\times100=60\\%$."
                },
                {
                    // Day 33 Q30 — syllogism
                    id: "d34m16",
                    text: "Treat the statements as true.<br><b>Statements:</b> All poets are dreamers. Some dreamers are not realists.<br><b>Conclusions:</b> I. Some poets are not realists. II. All dreamers are poets.<br>Which conclusion necessarily follows?",
                    options: [
                        { key: "a", text: "Only I" },
                        { key: "b", text: "Only II" },
                        { key: "c", text: "Both I and II" },
                        { key: "d", text: "Neither I nor II" }
                    ],
                    answer: "d",
                    explanation: "The dreamers who are not realists need not be poets, so I is not guaranteed. The first statement places poets inside dreamers but does not make the groups identical, so II fails too. A model with all poets being realist dreamers, plus some non-poet non-realist dreamers, satisfies both statements while both conclusions fail."
                },
                {
                    // Day 33 Q33 — correlation vs causation
                    id: "d34m17",
                    text: "A town installed brighter street lights, and over the next year night-time road accidents fell by 15%. No other information is given. Which statement is strictly supported?",
                    options: [
                        { key: "a", text: "The lights alone explain the change in accident numbers." },
                        { key: "b", text: "The data show a decrease, but do not establish its cause." },
                        { key: "c", text: "Every individual month had fewer accidents than before." },
                        { key: "d", text: "All previous night accidents resulted from dim lighting." }
                    ],
                    answer: "b",
                    explanation: "The data show a sequence in time and a fall in the yearly figure. They do not establish cause or rule out other factors, and a fall in the annual total need not occur in every month."
                },
                {
                    // Day 33 Q37 — Venn / set counting
                    id: "d34m18",
                    text: "Of 70 students, 34 join club A, 30 join B and 26 join C. There are 14 in A and B, 12 in A and C, and 10 in B and C; <b>each pairwise count includes</b> the 6 students in all three clubs. How many join <b>none</b> of the clubs?<svg class='q-fig' viewBox='0 0 260 224' width='260' height='224' role='img' aria-label='A universal set containing three overlapping circles labelled A, B and C; the space outside all three circles is also inside the universal set'><g fill='none' stroke='currentColor' stroke-width='1.6'><rect x='7' y='10' width='246' height='204'/><circle cx='94' cy='85' r='53'/><circle cx='160' cy='85' r='53'/><circle cx='127' cy='140' r='53'/></g><g fill='currentColor' text-anchor='middle' font-size='14'><text x='77' y='74'>A</text><text x='177' y='74'>B</text><text x='127' y='172'>C</text></g></svg>",
                    options: [
                        { key: "a", text: "12" },
                        { key: "b", text: "4" },
                        { key: "c", text: "10" },
                        { key: "d", text: "16" }
                    ],
                    answer: "c",
                    explanation: "Add the club totals: $34+30+26=90$. Subtract the pairwise overlaps: $14+12+10=36$. Then add the all-three count back once: $90-36+6=60$ students join at least one club. Hence $70-60=10$ join none. The triple-overlap correction is essential because that group was included in each pairwise count."
                },
                {
                    // Day 33 Q38 — truth-teller puzzle
                    id: "d34m19",
                    text: "Exactly one of three boxes A, B and C holds a prize. Their labels read — <b>A:</b> 'The prize is not in A.' <b>B:</b> 'The prize is in B.' <b>C:</b> 'The prize is in B.' If exactly one label is true, where is the prize?",
                    options: [
                        { key: "a", text: "Box A" },
                        { key: "b", text: "Box B" },
                        { key: "c", text: "Box C" },
                        { key: "d", text: "It cannot be determined." }
                    ],
                    answer: "c",
                    explanation: "Test each case. If the prize is in C: A's label ('not in A') is true, while B's and C's ('in B') are both false — exactly one true, as required. The other two locations give either none or three true labels, so the prize is in C."
                },
                {
                    // Day 33 Q42 — water image
                    id: "d34m20",
                    text: "Which option shows the <b>water image</b> of this card, reflected in the horizontal line below it?<svg class='q-fig' viewBox='0 0 90 110' width='117' height='143' role='img' aria-label='An upward triangle with a dot near its tip inside a square card; a horizontal water line is below the card'><g transform='translate(10 0)'><rect x='5' y='5' width='60' height='60' fill='none' stroke='currentColor' stroke-width='1.5'/><polygon points='35,15 19,55 51,55' fill='none' stroke='currentColor' stroke-width='1.8'/><circle cx='35' cy='27' r='3' fill='currentColor'/></g><path d='M6 83h78' stroke='currentColor' stroke-width='1.5' stroke-dasharray='4 3'/><text x='45' y='103' text-anchor='middle' fill='currentColor' font-size='10'>water line</text></svg>",
                    options: [
                        { key: "a", text: "<svg class='opt-fig' viewBox='0 0 70 70' role='img' aria-label='Downward triangle; dot near its lower tip'><rect x='5' y='5' width='60' height='60' fill='none' stroke='currentColor' stroke-width='1.5'/><polygon points='35,55 19,15 51,15' fill='none' stroke='currentColor' stroke-width='1.8'/><circle cx='35' cy='43' r='3' fill='currentColor'/></svg>Downward; dot near tip" },
                        { key: "b", text: "<svg class='opt-fig' viewBox='0 0 70 70' role='img' aria-label='Upward triangle; dot near its lower base'><rect x='5' y='5' width='60' height='60' fill='none' stroke='currentColor' stroke-width='1.5'/><polygon points='35,15 19,55 51,55' fill='none' stroke='currentColor' stroke-width='1.8'/><circle cx='35' cy='43' r='3' fill='currentColor'/></svg>Upward; dot near base" },
                        { key: "c", text: "<svg class='opt-fig' viewBox='0 0 70 70' role='img' aria-label='Downward triangle; dot near its upper base'><rect x='5' y='5' width='60' height='60' fill='none' stroke='currentColor' stroke-width='1.5'/><polygon points='35,55 19,15 51,15' fill='none' stroke='currentColor' stroke-width='1.8'/><circle cx='35' cy='27' r='3' fill='currentColor'/></svg>Downward; dot near base" },
                        { key: "d", text: "<svg class='opt-fig' viewBox='0 0 70 70' role='img' aria-label='Upward triangle; dot near its upper tip'><rect x='5' y='5' width='60' height='60' fill='none' stroke='currentColor' stroke-width='1.5'/><polygon points='35,15 19,55 51,55' fill='none' stroke='currentColor' stroke-width='1.8'/><circle cx='35' cy='27' r='3' fill='currentColor'/></svg>Upward; dot near tip" }
                    ],
                    answer: "a",
                    explanation: "A horizontal reflection reverses top and bottom but preserves left and right. The upward triangle becomes downward, and the dot moves with it to the lower tip. Reflecting only the triangle while leaving the dot in its original position would produce a different image."
                },
                {
                    // Day 33 Q46 — painted cube, exactly one face
                    id: "d34m21",
                    text: "Only one pair of <b>opposite</b> faces of a large cube is painted red; the other four faces are left unpainted. The cube is cut into 27 identical small cubes, three along each edge. How many small cubes have <b>exactly one</b> red face?<svg class='q-fig' viewBox='0 0 252 171' width='277' height='188' role='img' aria-label='Three-by-three-by-three cube: the visible front face is red, its opposite hidden face is also red, and the other four faces are unpainted'><path d='M12 48h90v90H12Z' fill='#cf4861' fill-opacity='0.3'/><g fill='none' stroke='currentColor' stroke-width='1.4'><path d='M12 48h90v90H12ZM12 48 42 18h90v90l-30 30M102 48 132 18'/><path d='M42 48v90M72 48v90M12 78h90M12 108h90M42 48 72 18M72 48 102 18M22 38h90M32 28h90M112 38v90M122 28v90M102 78 132 48M102 108 132 78'/></g><g fill='currentColor' font-size='11'><text x='148' y='61'>Opposite face</text><text x='148' y='77'>also red</text><text x='74' y='160' text-anchor='middle'>3 cubes per edge</text></g></svg>",
                    options: [
                        { key: "a", text: "18" },
                        { key: "b", text: "9" },
                        { key: "c", text: "8" },
                        { key: "d", text: "27" }
                    ],
                    answer: "a",
                    explanation: "Each painted face gives a layer of $3\\times3=9$ small cubes. Because the two painted faces are opposite and three cubes fit along the edge between them, the layers do not overlap, and no small cube touches both. Every one of these $9+9=18$ cubes has exactly one red face."
                },
                {
                    // Day 33 Q49 — odd one out, line symmetry
                    id: "d34m22",
                    text: "Which of the following <b>drawn block letters</b> has no line of reflection symmetry? Judge the shapes shown, not a different typeface.",
                    options: [
                        { key: "a", text: "<svg class='opt-fig' viewBox='0 0 70 70' role='img' aria-label='Block letter A'><path d='M13 57 35 13 57 57M23 37h24' fill='none' stroke='currentColor' stroke-width='4' stroke-linejoin='miter'/></svg>A" },
                        { key: "b", text: "<svg class='opt-fig' viewBox='0 0 70 70' role='img' aria-label='Block letter H'><path d='M16 13v44M54 13v44M16 35h38' fill='none' stroke='currentColor' stroke-width='4'/></svg>H" },
                        { key: "c", text: "<svg class='opt-fig' viewBox='0 0 70 70' role='img' aria-label='Block letter X'><path d='M15 15 55 55M15 55 55 15' fill='none' stroke='currentColor' stroke-width='4'/></svg>X" },
                        { key: "d", text: "<svg class='opt-fig' viewBox='0 0 70 70' role='img' aria-label='Block letter F'><path d='M19 57V13h36M19 34h26' fill='none' stroke='currentColor' stroke-width='4'/></svg>F" }
                    ],
                    answer: "d",
                    explanation: "The drawn F has no reflection axis: no fold makes its strokes coincide. The drawn A has a vertical axis, and the drawn H and X have both vertical and horizontal reflection symmetry. Using fixed drawings avoids changes caused by decorative or italic fonts."
                },
                {
                    id: "d34m23",
                    additionalPractice: true,
                    text: "At a college, 31 students join Maths, 29 join Science and 24 join Music. The pairwise memberships are 12 in Maths and Science, 9 in Maths and Music, and 8 in Science and Music. Each pairwise count <b>includes</b> the 4 students in all three clubs. How many students belong to <b>exactly two</b> clubs?<svg class='q-fig' viewBox='0 0 250 195' width='275' height='215' role='img' aria-label='Three overlapping circles labelled Maths, Science and Music, with a shared central region'><g fill='none' stroke='currentColor' stroke-width='1.8'><circle cx='92' cy='70' r='55'/><circle cx='158' cy='70' r='55'/><circle cx='125' cy='125' r='55'/></g><g fill='currentColor' text-anchor='middle' font-size='12'><text x='76' y='60'>Maths</text><text x='176' y='60'>Science</text><text x='125' y='157'>Music</text></g></svg>",
                    options: [
                        { key: "a", text: "17" },
                        { key: "b", text: "21" },
                        { key: "c", text: "25" },
                        { key: "d", text: "29" }
                    ],
                    answer: "a",
                    explanation: "Remove the all-three members from each pair: Maths and Science only has $12-4=8$, Maths and Music only has $9-4=5$, and Science and Music only has $8-4=4$. These three regions do not overlap, so exactly two clubs contain $8+5+4=17$ students. Adding the original pairwise counts would count each all-three member three times."
                },
                {
                    id: "d34m24",
                    additionalPractice: true,
                    text: "How many triangles of <b>all sizes</b> are formed by the drawn lines? Four internal segments run from the apex to the base, and one segment parallel to the base crosses all of them.<svg class='q-fig' viewBox='0 0 260 185' width='286' height='204' role='img' aria-label='A triangle split into five wedges by four lines from its apex, with one horizontal segment halfway down'><g fill='none' stroke='currentColor' stroke-width='1.8' stroke-linejoin='round'><path d='M20 160 130 20 240 160Z'/><path d='M130 20 64 160M130 20 108 160M130 20 152 160M130 20 196 160M75 90H185'/></g></svg>",
                    options: [
                        { key: "a", text: "20" },
                        { key: "b", text: "30" },
                        { key: "c", text: "25" },
                        { key: "d", text: "40" }
                    ],
                    answer: "b",
                    explanation: "Every triangle uses the common apex, two of the six rays from it, and a base on one of the two horizontal levels. At either level the number is $5+4+3+2+1=15$, counting triangles spanning one through five wedges. The two levels therefore give $15+15=30$. There are no inverted triangles: all non-horizontal lines meet only at the upper apex."
                },
                {
                    id: "d34m25",
                    additionalPractice: true,
                    text: "A rectangular sheet 16 cm wide and 12 cm high is folded left to right through its centre, then bottom to top through its centre. A small hole is punched through the four layers, 3 cm right of the vertical fold and 2 cm above the horizontal fold. What is the <b>perimeter</b> of the rectangle joining the four hole centres after unfolding?<svg class='q-fig' viewBox='0 0 220 150' width='264' height='180' role='img' aria-label='Folded packet: left and bottom edges are folds; a hole is three centimetres right of the left fold and two centimetres above the bottom fold'><rect x='30' y='20' width='120' height='90' fill='none' stroke='currentColor' stroke-width='1.5'/><path d='M30 20v90h120' fill='none' stroke='currentColor' stroke-width='3'/><circle cx='75' cy='80' r='3.5' fill='currentColor'/><g fill='none' stroke='currentColor' stroke-width='1.2'><path d='M30 80h41M79 80h91M150 110h20' stroke-dasharray='3 3'/><path d='M166 80v30M162 80h8M162 110h8'/></g><g fill='currentColor' font-size='11'><text x='52' y='70' text-anchor='middle'>3 cm</text><text x='177' y='99'>2 cm</text><text x='90' y='132' text-anchor='middle'>fold</text><text x='16' y='70' transform='rotate(-90 16 70)' text-anchor='middle'>fold</text></g></svg>",
                    options: [
                        { key: "a", text: "10 cm" },
                        { key: "b", text: "14 cm" },
                        { key: "c", text: "20 cm" },
                        { key: "d", text: "24 cm" }
                    ],
                    answer: "c",
                    explanation: "Unfolding reflects the punch across each centre line. The holes are 3 cm on either side horizontally and 2 cm on either side vertically, giving a rectangle 6 cm wide and 4 cm high. Its perimeter is $2(6+4)=20$ cm. The four holes are distinct because the punch lies on neither fold. The sheet's outer dimensions are not the dimensions of this smaller rectangle."
                },
                {
                    id: "d34m26",
                    additionalPractice: true,
                    text: "The dot moves one corner clockwise at every step. Independently, the diagonal alternates between the two possible slopes. Which tile comes next?<svg class='q-fig' viewBox='0 0 310 98' width='341' height='108' role='img' aria-label='Tile sequence: top-left dot with descending diagonal, top-right dot with ascending diagonal, bottom-right dot with descending diagonal, then a missing tile'><g fill='none' stroke='currentColor' stroke-width='1.5'><rect x='5' y='10' width='60' height='60'/><rect x='85' y='10' width='60' height='60'/><rect x='165' y='10' width='60' height='60'/><rect x='245' y='10' width='60' height='60'/></g><g fill='none' stroke='currentColor' stroke-width='2.2'><path d='M24 29 46 51M104 51 126 29M184 29 206 51'/></g><g fill='currentColor'><circle cx='16' cy='21' r='4'/><circle cx='134' cy='21' r='4'/><circle cx='214' cy='59' r='4'/></g><g fill='currentColor' text-anchor='middle' font-size='12'><text x='35' y='91'>1</text><text x='115' y='91'>2</text><text x='195' y='91'>3</text><text x='275' y='47' font-size='23'>?</text></g></svg>",
                    options: [
                        { key: "a", text: "<svg class='opt-fig' viewBox='0 0 70 70' role='img' aria-label='Bottom-left dot; descending diagonal'><rect x='5' y='5' width='60' height='60' fill='none' stroke='currentColor' stroke-width='1.5'/><path d='M24 24 46 46' stroke='currentColor' stroke-width='2.2'/><circle cx='16' cy='54' r='4' fill='currentColor'/></svg>Bottom-left; descending" },
                        { key: "b", text: "<svg class='opt-fig' viewBox='0 0 70 70' role='img' aria-label='Top-left dot; ascending diagonal'><rect x='5' y='5' width='60' height='60' fill='none' stroke='currentColor' stroke-width='1.5'/><path d='M24 46 46 24' stroke='currentColor' stroke-width='2.2'/><circle cx='16' cy='16' r='4' fill='currentColor'/></svg>Top-left; ascending" },
                        { key: "c", text: "<svg class='opt-fig' viewBox='0 0 70 70' role='img' aria-label='Bottom-right dot; ascending diagonal'><rect x='5' y='5' width='60' height='60' fill='none' stroke='currentColor' stroke-width='1.5'/><path d='M24 46 46 24' stroke='currentColor' stroke-width='2.2'/><circle cx='54' cy='54' r='4' fill='currentColor'/></svg>Bottom-right; ascending" },
                        { key: "d", text: "<svg class='opt-fig' viewBox='0 0 70 70' role='img' aria-label='Bottom-left dot; ascending diagonal'><rect x='5' y='5' width='60' height='60' fill='none' stroke='currentColor' stroke-width='1.5'/><path d='M24 46 46 24' stroke='currentColor' stroke-width='2.2'/><circle cx='16' cy='54' r='4' fill='currentColor'/></svg>Bottom-left; ascending" }
                    ],
                    answer: "d",
                    explanation: "The dot visits top-left, top-right, bottom-right and then bottom-left. The diagonal is descending in tiles 1 and 3, so tile 4 needs the ascending diagonal, running from lower-left to upper-right. Only the bottom-left dot with that diagonal satisfies both rules."
                },
                {
                    id: "d34m27",
                    additionalPractice: true,
                    text: "All six faces of a cube are painted before it is cut into 216 identical smaller cubes, six along each edge. How many small cubes have <b>exactly two</b> painted faces?<svg class='q-fig' viewBox='0 0 210 180' width='252' height='216' role='img' aria-label='Cube divided into six small cubes per edge, with all six outer faces painted'><g fill='currentColor' fill-opacity='0.12' stroke='currentColor' stroke-width='1.5'><path d='M12 50h96v96H12Z'/><path d='M12 50 48 14h96l-36 36Z'/><path d='M108 50 144 14v96l-36 36Z'/></g><g fill='none' stroke='currentColor' stroke-width='0.9'><path d='M28 50v96M44 50v96M60 50v96M76 50v96M92 50v96M12 66h96M12 82h96M12 98h96M12 114h96M12 130h96'/><path d='M28 50 64 14M44 50 80 14M60 50 96 14M76 50 112 14M92 50 128 14M18 44h96M24 38h96M30 32h96M36 26h96M42 20h96'/><path d='M114 44v96M120 38v96M126 32v96M132 26v96M138 20v96M108 66 144 30M108 82 144 46M108 98 144 62M108 114 144 78M108 130 144 94'/></g><g fill='currentColor' font-size='11'><text x='153' y='69'>All 6</text><text x='153' y='84'>faces</text><text x='153' y='99'>painted</text><text x='89' y='169' text-anchor='middle'>6 cubes per edge</text></g></svg>",
                    options: [
                        { key: "a", text: "24" },
                        { key: "b", text: "32" },
                        { key: "c", text: "36" },
                        { key: "d", text: "48" }
                    ],
                    answer: "d",
                    explanation: "Exactly two painted faces occur along an outer edge but not at its corners. Each of the 12 edges has $6-2=4$ such cubes, so the total is $12\\times4=48$. The eight corner cubes have three painted faces and must be excluded; face-interior cubes have only one."
                }
            ]
        }
    ]
};

/* Syllabus drill-down: every question id mapped exactly once. */
const DAY34_SYLLABUS = [
    { subject: "Physics", accent: "blue", topics: [
        { topic: "Mechanics & Properties of Matter", subs: [
            { name: "Kinematics and Laws of Motion", ids: ["d34p1", "d34p2"] },
            { name: "Elasticity, Gravitation and Surface Tension", ids: ["d34p3", "d34p4", "d34p5"] }
        ] },
        { topic: "Heat & Thermodynamics", subs: [
            { name: "Kinetic Theory and Calorimetry", ids: ["d34p6", "d34p7", "d34p8"] }
        ] },
        { topic: "Waves & Optics", subs: [
            { name: "Sound, Waves and Superposition", ids: ["d34p9", "d34p10", "d34p11"] },
            { name: "Reflection by Mirrors", ids: ["d34p12"] }
        ] },
        { topic: "Electricity & Magnetism", subs: [
            { name: "Charge, Alternating Current and Thermoelectricity", ids: ["d34p13", "d34p14", "d34p15"] }
        ] },
        { topic: "Modern Physics", subs: [
            { name: "Photoelectric Effect, Atom and Nucleus", ids: ["d34p16", "d34p17", "d34p18", "d34p19"] },
            { name: "Semiconductors", ids: ["d34p20"] }
        ] }
    ] },
    { subject: "Chemistry", accent: "amber", topics: [
        { topic: "Physical Chemistry", subs: [
            { name: "Stoichiometry and Concentration", ids: ["d34c1", "d34c6", "d34c7"] },
            { name: "Equilibrium, Thermodynamics and Electrochemistry", ids: ["d34c5", "d34c8", "d34c9"] }
        ] },
        { topic: "Atomic Structure & Coordination", subs: [
            { name: "Quantum Numbers, Ionization and Radiation", ids: ["d34c2", "d34c10", "d34c23"] },
            { name: "Hybridization and Formal Oxidation Numbers", ids: ["d34c3", "d34c4"] }
        ] },
        { topic: "Organic Chemistry", subs: [
            { name: "Hydrocarbon Reactions and Reagents", ids: ["d34c12", "d34c13", "d34c15"] },
            { name: "Carbonyl Compounds and Acid Derivatives", ids: ["d34c14", "d34c16", "d34c22"] },
            { name: "Elemental and Biomolecule Tests", ids: ["d34c11", "d34c21"] }
        ] },
        { topic: "Inorganic Chemistry & Metallurgy", subs: [
            { name: "Non-metals and Their Compounds", ids: ["d34c17", "d34c18"] },
            { name: "Furnaces and Surface Hardening", ids: ["d34c19", "d34c20"] }
        ] }
    ] },
    { subject: "Zoology", accent: "rose", topics: [
        { topic: "Animal Diversity & Tissues", subs: [
            { name: "Sexual Dimorphism, Muscle and Frog Skin", ids: ["d34z1", "d34z2", "d34z3"] }
        ] },
        { topic: "Human Physiology", subs: [
            { name: "Circulation", ids: ["d34z6"] },
            { name: "Digestion and Absorption", ids: ["d34z4", "d34z5"] },
            { name: "Renal Reabsorption", ids: ["d34z7"] },
            { name: "Nervous System and Sense Organs", ids: ["d34z8", "d34z9", "d34z10"] }
        ] },
        { topic: "Reproduction", subs: [
            { name: "Sperm Maturation and Storage", ids: ["d34z11"] }
        ] }
    ] },
    { subject: "Botany", accent: "emerald", topics: [
        { topic: "Biological Diversity", subs: [
            { name: "Lichens, Bryophytes and Viruses", ids: ["d34b2", "d34b3", "d34b16"] }
        ] },
        { topic: "Genetics & Cell Division", subs: [
            { name: "Meiosis, Genetic Code and Inheritance", ids: ["d34b13", "d34b14", "d34b15"] }
        ] },
        { topic: "Plant Anatomy", subs: [
            { name: "Storage Roots, Histogens and Vascular Structure", ids: ["d34b4", "d34b7", "d34b8"] }
        ] },
        { topic: "Ecology", subs: [
            { name: "Succession and Food Chains", ids: ["d34b5", "d34b6"] }
        ] },
        { topic: "Plant Physiology", subs: [
            { name: "Photosynthesis and Respiration", ids: ["d34b17", "d34b18", "d34b19"] }
        ] },
        { topic: "Applied Biology & Biotechnology", subs: [
            { name: "Biocontrol and Herbicide Tolerance", ids: ["d34b1", "d34b9"] },
            { name: "DNA Transfer, Protoplasts and Tissue Culture", ids: ["d34b10", "d34b11", "d34b12"] }
        ] }
    ] },
    { subject: "MAT", accent: "slate", topics: [
        { topic: "Verbal Reasoning", subs: [
            { name: "Coding, Analogy, Classification and Deduction", ids: ["d34m1", "d34m2", "d34m3", "d34m8", "d34m9"] }
        ] },
        { topic: "Numerical Reasoning", subs: [
            { name: "Arithmetic, Ratios and Data Interpretation", ids: ["d34m5", "d34m10", "d34m11", "d34m12", "d34m13", "d34m14", "d34m15", "d34m18", "d34m23"] }
        ] },
        { topic: "Logical Sequencing", subs: [
            { name: "Series, Syllogism, Cause–Effect and Truth Values", ids: ["d34m4", "d34m16", "d34m17", "d34m19"] }
        ] },
        { topic: "Spatial Relation / Abstract Reasoning", subs: [
            { name: "Cubes, Rotation, Mirror Images and Symmetry", ids: ["d34m6", "d34m7", "d34m20", "d34m21", "d34m22", "d34m26", "d34m27"] },
            { name: "Figure Counting, Paper Folding and Cutting", ids: ["d34m24", "d34m25"] }
        ] }
    ] }
];
DAY34.syllabus = DAY34_SYLLABUS;
