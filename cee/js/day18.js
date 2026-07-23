/* ============================================================
   DAY 18 — Official 2026 CEE Chemistry syllabus
   50 full-syllabus Chemistry questions (17 Physical ·
   10 Inorganic · 17 Organic · 3 Applied · 3 Analytical),
   17 Hydrocarbon-cluster questions, 16 Applied Chemistry,
   16 Analytical Chemistry and 1 CEE Physics question.

    Source policy: 75 questions are imported verbatim
    from D:\IOE Entrance\website\src\data\sets.json with answer and
    explanation joins; 1 source question has an
    obvious chemistry typo corrected transparently; 24 questions
    fill official CEE topics absent from that bank. Every source-based question
    retains provenance metadata.
   ============================================================ */
const DAY18 = {
    day: 18,
    title: "Day 18",
    subtitle: "CEE Chemistry + Hydrocarbons + Applied & Analytical · 100 Q",
    durationMinutes: 90,
    negativeMarking: 0.25,
    chapters: [
        {
            id: "chem18",
            name: "Chemistry (Full CEE Syllabus)",
            subject: "Chemistry",
            accent: "amber",
            blurb: "50 official-CEE-syllabus questions · Physical 17 · Inorganic 10 · Organic 17 · Applied 3 · Analytical 3.",
            questions: [
                {
                    id: "d18c1",
                    text: "Air contains about 21% oxygen by volume. Find the total number of moles of gas present in 1 L of air at STP.",
                    options: [
                        { key: "a", text: "0.045 mol" },
                        { key: "b", text: "0.21 mol" },
                        { key: "c", text: "9.4×10⁻³ mol" },
                        { key: "d", text: "0.0224 mol" }
                    ],
                    answer: "a",
                    explanation: "At STP 22.4 L contains 1 mol, so 1 L of air contains 1/22.4 ≈ 0.045 mol of gas.",
                    source: "IOE sets.json 17:63"
                },
                {
                    id: "d18c2",
                    text: "CO₂ gas is passed through 50 mL of 2.4 M Ca(OH)₂ solution to precipitate CaCO₃. Find the maximum mass of CaCO₃ that can be formed.",
                    options: [
                        { key: "a", text: "30" },
                        { key: "b", text: "12" },
                        { key: "c", text: "24" },
                        { key: "d", text: "60" }
                    ],
                    answer: "b",
                    explanation: "Moles of Ca(OH)₂ = 0.05 L × 2.4 M = 0.12; CaCO₃ forms 1:1, so mass = 0.12 × 100 = 12 g.",
                    source: "IOE sets.json 09:66"
                },
                {
                    id: "d18c3",
                    text: "Find the total number of valence electrons present in the N³⁻ ions contained in 4.2 g of N³⁻ (atomic mass of N = 14).",
                    options: [
                        { key: "a", text: "2.4" },
                        { key: "b", text: "4.8×10²³" },
                        { key: "c", text: "1.445×10²⁴" },
                        { key: "d", text: "8" }
                    ],
                    answer: "c",
                    explanation: "Moles = 4.2/14 = 0.3; number of N³⁻ ions = 0.3 × 6.02×10²³. Each N³⁻ has 8 valence electrons: 8 × 1.806×10²³ = 1.445×10²⁴.",
                    source: "IOE sets.json 07:69"
                },
                {
                    id: "d18c4",
                    text: "The shape of an orbital is given by which quantum number?",
                    options: [
                        { key: "a", text: "Magnetic (mₗ)" },
                        { key: "b", text: "Spin (mₛ)" },
                        { key: "c", text: "Principal (n)" },
                        { key: "d", text: "Azimuthal (l)" }
                    ],
                    answer: "d",
                    explanation: "The azimuthal (orbital angular-momentum) quantum number l determines the shape of an orbital — s, p, d, f.",
                    source: "IOE sets.json 02:69"
                },
                {
                    id: "d18c5",
                    text: "On moving across a period from left to right, the atomic radius generally:",
                    options: [
                        { key: "a", text: "decreases" },
                        { key: "b", text: "remains the same" },
                        { key: "c", text: "doubles" },
                        { key: "d", text: "increases" }
                    ],
                    answer: "a",
                    explanation: "Atomic radius decreases across a period from left to right (rising nuclear charge).",
                    source: "IOE sets.json 16:68"
                },
                {
                    id: "d18c6",
                    text: "Definition of a dative bond.",
                    options: [
                        { key: "a", text: "An electrostatic force of attraction between oppositely charged ions" },
                        { key: "b", text: "A covalent bond in which both shared electrons are donated by one atom" },
                        { key: "c", text: "A bond formed by complete transfer of electrons from one atom to another" },
                        { key: "d", text: "A bond formed by equal sharing of one electron from each atom" }
                    ],
                    answer: "b",
                    explanation: "A dative (coordinate) bond is a covalent bond in which both of the shared electrons are supplied by one atom (the donor), instead of one electron coming from each atom.",
                    source: "IOE sets.json 02:75"
                },
                {
                    id: "d18c7",
                    text: "The bond angle in a water molecule is approximately:",
                    options: [
                        { key: "a", text: "109.5°" },
                        { key: "b", text: "120°" },
                        { key: "c", text: "104.5°" },
                        { key: "d", text: "90°" }
                    ],
                    answer: "c",
                    explanation: "The H–O–H bond angle in water is about 104.5°.",
                    source: "IOE sets.json 09:75"
                },
                {
                    id: "d18c8",
                    text: "Equation of state for 16 g of Oxygen (2 marks):",
                    options: [
                        { key: "a", text: "PV = 2RT" },
                        { key: "b", text: "PV = RT" },
                        { key: "c", text: "PV = (3/2)RT" },
                        { key: "d", text: "PV = RT/2" }
                    ],
                    answer: "d",
                    explanation: "16 g O₂ = 0.5 mol, so PV = nRT = 0.5RT = RT/2.",
                    source: "IOE sets.json 08:70"
                },
                {
                    id: "d18c9",
                    text: "Number of Faradays to convert Cr₂O₇²⁻ to Cr³⁺:",
                    options: [
                        { key: "a", text: "6 F" },
                        { key: "b", text: "1 F" },
                        { key: "c", text: "2 F" },
                        { key: "d", text: "3 F" }
                    ],
                    answer: "a",
                    explanation: "Cr₂O₇²⁻ → 2Cr³⁺ gains 6 electrons, so 6 Faradays are required.",
                    source: "IOE sets.json 16:73"
                },
                {
                    id: "d18c10",
                    text: "For $\\mathrm{N_2O_4(g)\\rightleftharpoons2NO_2(g)}$, $K_p=1.80$ at 300 K. The value of $K_c$ is approximately ($R=0.0821$ L atm K$^{-1}$ mol$^{-1}$):",
                    options: [
                        { key: "a", text: "$44.3$" },
                        { key: "b", text: "$0.073$" },
                        { key: "c", text: "$1.80$" },
                        { key: "d", text: "$24.6$" }
                    ],
                    answer: "b",
                    explanation: "$K_p=K_c(RT)^{\\Delta n}$ and $\\Delta n=2-1=1$. Thus $K_c=1.80/(0.0821\\times300)\\approx0.073$.",
                    source: "Authored for 2026 CEE syllabus: Chemical Equilibrium"
                },
                {
                    id: "d18c11",
                    text: "The mass of 70% H₂SO₄ required for neutralisation of 1 mole of NaOH is ___.",
                    options: [
                        { key: "a", text: "98 g" },
                        { key: "b", text: "35 g" },
                        { key: "c", text: "70 g" },
                        { key: "d", text: "49 g" }
                    ],
                    answer: "c",
                    explanation: "1 mol NaOH needs 0.5 mol (49 g) H₂SO₄; at 70% purity that is 49/0.7 = 70 g.",
                    source: "IOE sets.json 04:72"
                },
                {
                    id: "d18c12",
                    text: "Given Ksp(Ag₂S) = 10⁻³⁴, Ksp(Cu₂S) = 10⁻²⁷, Ksp(AuS) = 10⁻¹⁹. Find the order of solubility: S(Ag₂S), S(Cu₂S), S(AuS).",
                    options: [
                        { key: "a", text: "S(AuS) > S(Cu₂S) > S(Ag₂S)" },
                        { key: "b", text: "S(Ag₂S) > S(AuS) > S(Cu₂S)" },
                        { key: "c", text: "S(Cu₂S) > S(Ag₂S) > S(AuS)" },
                        { key: "d", text: "S(Cu₂S) > S(AuS) > S(Ag₂S)" }
                    ],
                    answer: "d",
                    explanation: "Computing s from each Ksp (Ag₂S and Cu₂S use 4s³; AuS uses s²) gives S(Cu₂S) > S(AuS) > S(Ag₂S).",
                    source: "IOE sets.json 08:71"
                },
                {
                    id: "d18c13",
                    text: "A first-order reaction has $k=2.303\\times10^{-3}\\,\\mathrm{s^{-1}}$. The time required for 90% completion is:",
                    options: [
                        { key: "a", text: "$1000$ s" },
                        { key: "b", text: "$1500$ s" },
                        { key: "c", text: "$2303$ s" },
                        { key: "d", text: "$500$ s" }
                    ],
                    answer: "a",
                    explanation: "For 90% completion, $a/(a-x)=10$. Hence $t=\\dfrac{2.303}{k}\\log10=\\dfrac{2.303}{2.303\\times10^{-3}}=1000$ s.",
                    source: "Authored for 2026 CEE syllabus: Chemical Kinetics"
                },
                {
                    id: "d18c14",
                    text: "A current of 1.70 ampere is passed through 300 mL of 0.160 M solution of zinc sulphate for 230 seconds with a current efficiency of 90 per cent. Find the molarity of Zn²⁺ ions after the deposition of zinc. (Assume volume constant.) [Hard]",
                    options: [
                        { key: "a", text: "0.140 M" },
                        { key: "b", text: "0.154 M" },
                        { key: "c", text: "0.146 M" },
                        { key: "d", text: "0.160 M" }
                    ],
                    answer: "b",
                    explanation: "Charge = 1.70×230×0.9 = 352 C → 352/(2F) mol Zn removed; remaining Zn²⁺ ≈ 0.154 M.",
                    source: "IOE sets.json 06:73"
                },
                {
                    id: "d18c15",
                    text: "For a reaction at 298 K, $\\Delta H=-40.0$ kJ mol$^{-1}$ and $\\Delta S=-100$ J K$^{-1}$ mol$^{-1}$. Which statement is correct?",
                    options: [
                        { key: "a", text: "$\\Delta G=+69.8$ kJ mol$^{-1}$; non-spontaneous" },
                        { key: "b", text: "$\\Delta G=-69.8$ kJ mol$^{-1}$; spontaneous" },
                        { key: "c", text: "$\\Delta G=-10.2$ kJ mol$^{-1}$; spontaneous" },
                        { key: "d", text: "$\\Delta G=+10.2$ kJ mol$^{-1}$; non-spontaneous" }
                    ],
                    answer: "c",
                    explanation: "Convert entropy to kJ: $-0.100$ kJ K$^{-1}$ mol$^{-1}$. Then $\\Delta G=\\Delta H-T\\Delta S=-40-298(-0.100)=-10.2$ kJ mol$^{-1}$, so the reaction is spontaneous.",
                    source: "Authored for 2026 CEE syllabus: Chemical Thermodynamics"
                },
                {
                    id: "d18c16",
                    text: "A radionuclide has a half-life of 6.0 h. Its mean life is closest to:",
                    options: [
                        { key: "a", text: "$12.0$ h" },
                        { key: "b", text: "$4.16$ h" },
                        { key: "c", text: "$6.00$ h" },
                        { key: "d", text: "$8.66$ h" }
                    ],
                    answer: "d",
                    explanation: "$\\tau=1/\\lambda=T_{1/2}/\\ln2=6.0/0.693\\approx8.66$ h.",
                    source: "Authored for 2026 CEE syllabus: Nuclear Chemistry"
                },
                {
                    id: "d18c17",
                    text: "A metal crystallises in an FCC lattice with unit-cell edge $400$ pm. Its atomic radius is:",
                    options: [
                        { key: "a", text: "$141$ pm" },
                        { key: "b", text: "$173$ pm" },
                        { key: "c", text: "$200$ pm" },
                        { key: "d", text: "$100$ pm" }
                    ],
                    answer: "a",
                    explanation: "Atoms touch along the face diagonal in FCC: $4r=a\\sqrt2$. Therefore $r=a/(2\\sqrt2)=400/(2\\sqrt2)\\approx141$ pm.",
                    source: "Authored for 2026 CEE syllabus: Solid State"
                },
                {
                    id: "d18c18",
                    text: "NO gas is obtained when Zn is reacted with:",
                    options: [
                        { key: "a", text: "very dil HNO₃" },
                        { key: "b", text: "moderately concentrated HNO₃" },
                        { key: "c", text: "conc. HNO₃" },
                        { key: "d", text: "dil HNO₃" }
                    ],
                    answer: "b",
                    explanation: "Moderately concentrated HNO₃ reacting with zinc gives NO gas.",
                    source: "IOE sets.json 01:77"
                },
                {
                    id: "d18c19",
                    text: "SO₂ removes the colour of flowers because:",
                    options: [
                        { key: "a", text: "it absorbs the colouring matter" },
                        { key: "b", text: "it oxidizes the colouring matter" },
                        { key: "c", text: "it reduces the colouring matter" },
                        { key: "d", text: "it dissolves the colouring matter" }
                    ],
                    answer: "c",
                    explanation: "SO₂ bleaches by reducing the coloured matter (the colour can later return on oxidation).",
                    source: "IOE sets.json 02:77"
                },
                {
                    id: "d18c20",
                    text: "Yellow gas is used in bleaching because it is:",
                    options: [
                        { key: "a", text: "reducing agent" },
                        { key: "b", text: "both a and b" },
                        { key: "c", text: "none" },
                        { key: "d", text: "oxidizing agent" }
                    ],
                    answer: "d",
                    explanation: "Chlorine (the yellow-green gas) bleaches by oxidation, acting as an oxidising agent.",
                    source: "IOE sets.json 07:77"
                },
                {
                    id: "d18c21",
                    text: "Heavy water — formula.",
                    options: [
                        { key: "a", text: "D₂O" },
                        { key: "b", text: "H₂O₂" },
                        { key: "c", text: "T₂O" },
                        { key: "d", text: "H₂O" }
                    ],
                    answer: "a",
                    explanation: "Heavy water is deuterium oxide, D₂O.",
                    source: "IOE sets.json 09:76"
                },
                {
                    id: "d18c22",
                    text: "Which of the following is most volatile halogen acid?",
                    options: [
                        { key: "a", text: "HF" },
                        { key: "b", text: "HCl" },
                        { key: "c", text: "HBr" },
                        { key: "d", text: "HI" }
                    ],
                    answer: "b",
                    explanation: "HCl is the most volatile halogen acid (HF is held up by hydrogen bonding).",
                    source: "IOE sets.json 10:76"
                },
                {
                    id: "d18c23",
                    text: "In the extraction of copper from its sulphide ore, the metal is formed by the reduction of Cu₂O with",
                    options: [
                        { key: "a", text: "FeS" },
                        { key: "b", text: "CO" },
                        { key: "c", text: "Cu₂S" },
                        { key: "d", text: "SO₂" }
                    ],
                    answer: "c",
                    explanation: "In the bessemerization step, cuprous oxide is reduced by cuprous sulphide itself (self-reduction): 2Cu₂O + Cu₂S → 6Cu + SO₂.",
                    source: "IOE sets.json 01:78"
                },
                {
                    id: "d18c24",
                    text: "Pure copper is obtained after?",
                    options: [
                        { key: "a", text: "Poling" },
                        { key: "b", text: "Roasting" },
                        { key: "c", text: "Bessemerization" },
                        { key: "d", text: "Electrolytic refining" }
                    ],
                    answer: "d",
                    explanation: "Pure copper is obtained by electrolytic refining.",
                    source: "IOE sets.json 09:78"
                },
                {
                    id: "d18c25",
                    text: "In the aluminothermic process, aluminium acts as a:",
                    options: [
                        { key: "a", text: "Reducing agent" },
                        { key: "b", text: "Solder" },
                        { key: "c", text: "Flux" },
                        { key: "d", text: "Oxidizing agent" }
                    ],
                    answer: "a",
                    explanation: "In the aluminothermic (thermite) process aluminium acts as the reducing agent.",
                    source: "IOE sets.json 11:78"
                },
                {
                    id: "d18c26",
                    text: "Schweitzer's reagent? (composition/formula)",
                    options: [
                        { key: "a", text: "[Ag(NH₃)₂]OH" },
                        { key: "b", text: "[Cu(NH₃)₄](OH)₂" },
                        { key: "c", text: "[Cu(NH₃)₄]SO₄" },
                        { key: "d", text: "K₂[HgI₄]" }
                    ],
                    answer: "b",
                    explanation: "Schweitzer's reagent is tetraamminecopper(II) hydroxide, [Cu(NH₃)₄](OH)₂.",
                    source: "IOE sets.json 13:77"
                },
                {
                    id: "d18c27",
                    text: "Which bio-inorganic pairing is correct?",
                    options: [
                        { key: "a", text: "Iron - principal extracellular cation" },
                        { key: "b", text: "Magnesium - oxygen transport in haemoglobin" },
                        { key: "c", text: "Cobalt - central metal in vitamin $\\mathrm{B_{12}}$" },
                        { key: "d", text: "Sodium - central metal in chlorophyll" }
                    ],
                    answer: "c",
                    explanation: "Cobalt is the central metal of cobalamin (vitamin $\\mathrm{B_{12}}$). Iron occurs in haemoglobin, magnesium in chlorophyll, and sodium is the main extracellular cation.",
                    source: "Authored for 2026 CEE syllabus: Bio-inorganic Chemistry"
                },
                {
                    id: "d18c28",
                    text: "The number of isomers of C₅H₁₂ is:",
                    options: [
                        { key: "a", text: "4" },
                        { key: "b", text: "5" },
                        { key: "c", text: "6" },
                        { key: "d", text: "3" }
                    ],
                    answer: "d",
                    explanation: "C₅H₁₂ has 3 structural isomers: n-pentane, 2-methylbutane (isopentane) and 2,2-dimethylpropane (neopentane).",
                    source: "IOE sets.json 01:79"
                },
                {
                    id: "d18c29",
                    text: "IUPAC name of HCONHCH₂CH₃.",
                    options: [
                        { key: "a", text: "N-ethylmethanamide" },
                        { key: "b", text: "N-methylethanamide" },
                        { key: "c", text: "N-ethylethanamide" },
                        { key: "d", text: "propanamide" }
                    ],
                    answer: "a",
                    explanation: "HCO–NH–C₂H₅: the parent HCO–NH₂ is methanamide, and the ethyl group on nitrogen makes it N-ethylmethanamide.",
                    source: "IOE sets.json 02:80"
                },
                {
                    id: "d18c30",
                    text: "C₂H₆O shows which isomerism?",
                    options: [
                        { key: "a", text: "Positional isomerism" },
                        { key: "b", text: "Functional isomerism" },
                        { key: "c", text: "Chain isomerism" },
                        { key: "d", text: "Metamerism" }
                    ],
                    answer: "b",
                    explanation: "C₂H₆O can be ethanol or dimethyl ether, so it shows functional isomerism.",
                    source: "IOE sets.json 04:80"
                },
                {
                    id: "d18c31",
                    text: "Ethoxyethane (CH₃CH₂–O–CH₂CH₃) and 1-methoxypropane (CH₃–O–CH₂CH₂CH₃) are related as ___?",
                    options: [
                        { key: "a", text: "Position isomers" },
                        { key: "b", text: "Functional isomers" },
                        { key: "c", text: "Metamers" },
                        { key: "d", text: "Chain isomers" }
                    ],
                    answer: "c",
                    explanation: "Same molecular formula but different alkyl groups on oxygen makes them metamers.",
                    source: "IOE sets.json 14:79"
                },
                {
                    id: "d18c32",
                    text: "Alkyl halide forms alcohol by:",
                    options: [
                        { key: "a", text: "dehydrogenation" },
                        { key: "b", text: "addition" },
                        { key: "c", text: "elimination" },
                        { key: "d", text: "substitution" }
                    ],
                    answer: "d",
                    explanation: "An alkyl halide is converted to an alcohol when the nucleophile OH⁻ replaces the halogen: R–X + OH⁻ → R–OH — a nucleophilic substitution.",
                    source: "IOE sets.json 01:82"
                },
                {
                    id: "d18c33",
                    text: "The product formed by heating ethyl iodide with alcoholic potassium cyanide is hydrolyzed; the final compound obtained is",
                    options: [
                        { key: "a", text: "propanoic acid" },
                        { key: "b", text: "propanol" },
                        { key: "c", text: "propanal" },
                        { key: "d", text: "propanone" }
                    ],
                    answer: "a",
                    explanation: "Ethyl iodide + alc. KCN gives propanenitrile, whose hydrolysis yields propanoic acid.",
                    source: "IOE sets.json 15:81"
                },
                {
                    id: "d18c34",
                    text: "Which method is not used to produce ethanol? (IOE 2080)",
                    options: [
                        { key: "a", text: "Aq. KOH + CH₃CH₂Cl" },
                        { key: "b", text: "HCN + CH₃MgBr" },
                        { key: "c", text: "C₂H₄ + H₂O / dil. H₂SO₄ (hydration of ethene)" },
                        { key: "d", text: "Moist Ag₂O + CH₃CH₂Cl" }
                    ],
                    answer: "b",
                    explanation: "HCN + CH₃MgBr does not give ethanol; the other routes do.",
                    source: "IOE sets.json 07:81"
                },
                {
                    id: "d18c35",
                    text: "Which of the following gives the Cannizzaro reaction?",
                    options: [
                        { key: "a", text: "CH₃COCH₃ (acetone)" },
                        { key: "b", text: "CH₃CHO (acetaldehyde)" },
                        { key: "c", text: "HCHO (methanal)" },
                        { key: "d", text: "CH₃CH₂CHO (propanal)" }
                    ],
                    answer: "c",
                    explanation: "The Cannizzaro reaction requires an aldehyde with no α-hydrogen. Of the options, only HCHO (methanal) has no α-hydrogen, so it gives the Cannizzaro reaction.",
                    source: "IOE sets.json 08:82"
                },
                {
                    id: "d18c36",
                    text: "Ethyl alcohol to ethyl ethanoate — what type of reaction is it? (name it)",
                    options: [
                        { key: "a", text: "saponification" },
                        { key: "b", text: "hydrolysis" },
                        { key: "c", text: "oxidation" },
                        { key: "d", text: "esterification" }
                    ],
                    answer: "d",
                    explanation: "Ethanol with an acid forming ethyl ethanoate is esterification.",
                    source: "IOE sets.json 10:81"
                },
                {
                    id: "d18c37",
                    text: "You can prepare ethanol directly by using:",
                    options: [
                        { key: "a", text: "ethene" },
                        { key: "b", text: "ethane" },
                        { key: "c", text: "ethyne" },
                        { key: "d", text: "methanol" }
                    ],
                    answer: "a",
                    explanation: "Ethene undergoes acid-catalysed hydration to give ethanol directly.",
                    source: "IOE sets.json 10:82"
                },
                {
                    id: "d18c38",
                    text: "Why does a tertiary amine not react with CH₃-COCl?",
                    options: [
                        { key: "a", text: "Tertiary amines form unstable products when reacted with acyl chlorides." },
                        { key: "b", text: "The tertiary amine lacks a reactive hydrogen atom on the nitrogen." },
                        { key: "c", text: "Tertiary amines are too bulky to undergo acylation reactions." },
                        { key: "d", text: "Acyl chlorides preferentially react with primary and secondary amines." }
                    ],
                    answer: "b",
                    explanation: "A tertiary amine has no N–H, so it cannot be acylated by CH₃COCl.",
                    source: "IOE sets.json 17:83"
                },
                {
                    id: "d18c39",
                    text: "When benzene reacts with a mixture of H₂SO₄ and HNO₃, which of the following ions takes part actively?",
                    options: [
                        { key: "a", text: "Nitride" },
                        { key: "b", text: "Nitrate" },
                        { key: "c", text: "Nitronium" },
                        { key: "d", text: "Nitrite" }
                    ],
                    answer: "c",
                    explanation: "Nitration of benzene proceeds via the nitronium ion, NO₂⁺.",
                    source: "IOE sets.json 07:83"
                },
                {
                    id: "d18c40",
                    text: "Which is least reactive towards ESR (electrophilic substitution reaction)?",
                    options: [
                        { key: "a", text: "Bromobenzene" },
                        { key: "b", text: "Aniline" },
                        { key: "c", text: "Phenol" },
                        { key: "d", text: "Nitrobenzene" }
                    ],
                    answer: "d",
                    explanation: "The −NO₂ group strongly deactivates the ring, so nitrobenzene is least reactive to electrophiles.",
                    source: "IOE sets.json 12:83"
                },
                {
                    id: "d18c41",
                    text: "Methyl phenyl ketone via Friedel–Crafts acylation.",
                    options: [
                        { key: "a", text: "Acetyl chloride (CH₃COCl) + anhydrous AlCl₃" },
                        { key: "b", text: "Methyl chloride (CH₃Cl) + anhydrous AlCl₃" },
                        { key: "c", text: "Acetic acid + conc. H₂SO₄" },
                        { key: "d", text: "Chlorobenzene + anhydrous AlCl₃" }
                    ],
                    answer: "a",
                    explanation: "Acetophenone (methyl phenyl ketone) is made by Friedel–Crafts acylation with CH₃COCl and anhydrous AlCl₃.",
                    source: "IOE sets.json 14:82"
                },
                {
                    id: "d18c42",
                    text: "A —(0–5 °C, NaNO₂/HCl)→ B —(Phenol)→ C. (Identify the products / reaction.)",
                    options: [
                        { key: "a", text: "A = benzene, B = chlorobenzene, C = phenol" },
                        { key: "b", text: "A = aniline, B = benzenediazonium chloride, C = p-hydroxyazobenzene" },
                        { key: "c", text: "A = phenol, B = nitrobenzene, C = aniline" },
                        { key: "d", text: "A = nitrobenzene, B = aniline, C = azobenzene" }
                    ],
                    answer: "b",
                    explanation: "Aniline (A) → benzenediazonium chloride (B) → coupling with phenol → p-hydroxyazobenzene (C).",
                    source: "IOE sets.json 14:84"
                },
                {
                    id: "d18c43",
                    text: "R–X + Mg + dry ether is the reactant of which reaction?",
                    options: [
                        { key: "a", text: "Williamson's synthesis" },
                        { key: "b", text: "Wurtz reaction" },
                        { key: "c", text: "Grignard reaction" },
                        { key: "d", text: "Wurtz–Fittig reaction" }
                    ],
                    answer: "c",
                    explanation: "R–X + Mg in dry ether forms a Grignard reagent (the Grignard reaction).",
                    source: "IOE sets.json 03:82"
                },
                {
                    id: "d18c44",
                    text: "A (with 2 moles CH₃MgI, ether) → B (H₂O/H⁺) → 2-methyl-propan-2-ol. A is:",
                    options: [
                        { key: "a", text: "Formyl chloride" },
                        { key: "b", text: "chloroethane" },
                        { key: "c", text: "acetic acid" },
                        { key: "d", text: "Ethanoyl chloride" }
                    ],
                    answer: "d",
                    explanation: "Acetyl (ethanoyl) chloride reacts with two equivalents of CH₃MgI, and after hydrolysis the two added methyls plus the acyl methyl give (CH₃)₃C–OH (2-methylpropan-2-ol). So A is ethanoyl chloride.",
                    source: "IOE sets.json 05:82"
                },
                {
                    id: "d18c45",
                    text: "Suitable temperature, pressure and catalyst used in the preparation of ammonia by Haber's process.",
                    options: [
                        { key: "a", text: "450–500 °C, ~200 atm, finely divided iron (Fe) catalyst" },
                        { key: "b", text: "250 °C, 50 atm, platinum catalyst" },
                        { key: "c", text: "700 °C, 1 atm, V₂O₅ catalyst" },
                        { key: "d", text: "100 °C, 500 atm, nickel catalyst" }
                    ],
                    answer: "a",
                    explanation: "Haber's process uses about 450–500 °C, ~200 atm and a finely divided iron catalyst.",
                    source: "IOE sets.json 08:84"
                },
                {
                    id: "d18c46",
                    text: "The catalyst used in the Ostwald process for the preparation of nitric acid.",
                    options: [
                        { key: "a", text: "Nickel (Ni)" },
                        { key: "b", text: "Platinum (Pt–Rh gauze)" },
                        { key: "c", text: "Iron (Fe)" },
                        { key: "d", text: "Vanadium pentoxide (V₂O₅)" }
                    ],
                    answer: "b",
                    explanation: "The Ostwald process oxidises NH₃ over a platinum (Pt–Rh) gauze catalyst.",
                    source: "IOE sets.json 15:84"
                },
                {
                    id: "d18c47",
                    text: "The Solvay process is used to extract:",
                    options: [
                        { key: "a", text: "NaNO₃" },
                        { key: "b", text: "Na" },
                        { key: "c", text: "Na₂CO₃" },
                        { key: "d", text: "NaOH" }
                    ],
                    answer: "c",
                    explanation: "The Solvay (ammonia–soda) process manufactures sodium carbonate, Na₂CO₃.",
                    source: "IOE sets.json 04:76"
                },
                {
                    id: "d18c48",
                    text: "On heating with H₂SO₄ gives char (charring test):",
                    options: [
                        { key: "a", text: "fats" },
                        { key: "b", text: "protein" },
                        { key: "c", text: "hydrocarbons" },
                        { key: "d", text: "carbohydrate" }
                    ],
                    answer: "d",
                    explanation: "Concentrated H₂SO₄ chars carbohydrates by dehydration, leaving carbon.",
                    source: "IOE sets.json 10:79"
                },
                {
                    id: "d18c49",
                    text: "Contents of three bottles were found to react: (i) neither with Fehling's solution nor with Tollen's reagent; (ii) only with Tollen's reagent but not with Fehling's solution; (iii) with both Tollen's reagent and Fehling's solution. If they contained either ethanal (acetaldehyde), propanone (acetone) or benzaldehyde, which bottle contained which?",
                    options: [
                        { key: "a", text: "(i) propanone, (ii) benzaldehyde, (iii) ethanal" },
                        { key: "b", text: "(i) propanone, (ii) ethanal, (iii) benzaldehyde" },
                        { key: "c", text: "(i) benzaldehyde, (ii) ethanal, (iii) propanone" },
                        { key: "d", text: "(i) benzaldehyde, (ii) propanone, (iii) ethanal" }
                    ],
                    answer: "a",
                    explanation: "Propanone gives neither test, benzaldehyde only Tollens', and ethanal both, so (i)propanone, (ii)benzaldehyde, (iii)ethanal.",
                    source: "IOE sets.json 16:81"
                },
                {
                    id: "d18c50",
                    text: "The fraction of chloride precipitated by AgNO₃ solution from [Co(NH₃)₅Cl]Cl₂ is:",
                    options: [
                        { key: "a", text: "1/2" },
                        { key: "b", text: "2/3" },
                        { key: "c", text: "2/7" },
                        { key: "d", text: "1/3" }
                    ],
                    answer: "b",
                    explanation: "Only 2 of the 3 chlorides are ionizable in [Co(NH₃)₅Cl]Cl₂, so 2/3 is precipitated.",
                    source: "IOE sets.json 10:68"
                }
            ]
        },
        {
            id: "hydrocarbon18",
            name: "Hydrocarbons",
            subject: "Chemistry",
            accent: "cyan",
            blurb: "17 questions from the IOE Hydrocarbons clustering, plus one CEE gap-filler where the source cluster ended at 16.",
            questions: [
                {
                    id: "d18h1",
                    text: "Ethyne is obtained by the hydrolysis of",
                    options: [
                        { key: "a", text: "Ethyl magnesium bromide" },
                        { key: "b", text: "Aluminium carbide" },
                        { key: "c", text: "Calcium carbide" },
                        { key: "d", text: "Magnesium nitrate" }
                    ],
                    answer: "c",
                    explanation: "Calcium carbide reacts with water to give ethyne: CaC₂ + 2H₂O → C₂H₂ + Ca(OH)₂.",
                    source: "IOE sets.json 01:81"
                },
                {
                    id: "d18h2",
                    text: "Benzene is a polymer of:",
                    options: [
                        { key: "a", text: "methane" },
                        { key: "b", text: "ethane" },
                        { key: "c", text: "ethene" },
                        { key: "d", text: "ethyne" }
                    ],
                    answer: "d",
                    explanation: "Three molecules of ethyne (acetylene) cyclize to benzene (3 C₂H₂ → C₆H₆), so benzene is a polymer of ethyne.",
                    source: "IOE sets.json 02:81"
                },
                {
                    id: "d18h3",
                    text: "Na reacts with:",
                    options: [
                        { key: "a", text: "ethyne" },
                        { key: "b", text: "ether" },
                        { key: "c", text: "ethane" },
                        { key: "d", text: "ethene" }
                    ],
                    answer: "a",
                    explanation: "Ethyne's acidic terminal hydrogen reacts with sodium to give sodium acetylide.",
                    source: "IOE sets.json 03:81"
                },
                {
                    id: "d18h4",
                    text: "The carbon in an alkene is:",
                    options: [
                        { key: "a", text: "sp³-hybridized" },
                        { key: "b", text: "sp²-hybridized" },
                        { key: "c", text: "sp-hybridized" },
                        { key: "d", text: "No hybridization" }
                    ],
                    answer: "b",
                    explanation: "The doubly-bonded carbons of an alkene are sp²-hybridized.",
                    source: "IOE sets.json 04:81"
                },
                {
                    id: "d18h5",
                    text: "___ + alc. KOH → Ethene.",
                    options: [
                        { key: "a", text: "CH₃CH₂OH (ethanol)" },
                        { key: "b", text: "CH₂ClCH₂Cl (1,2-dichloroethane)" },
                        { key: "c", text: "CH₃CH₂Cl (chloroethane)" },
                        { key: "d", text: "CH₃Cl (chloromethane)" }
                    ],
                    answer: "c",
                    explanation: "Chloroethane with alcoholic KOH eliminates HCl to give ethene.",
                    source: "IOE sets.json 06:80"
                },
                {
                    id: "d18h6",
                    text: "The polymer obtained by the polymerization of ethene is:",
                    options: [
                        { key: "a", text: "PVC" },
                        { key: "b", text: "teflon" },
                        { key: "c", text: "nylon" },
                        { key: "d", text: "polythene" }
                    ],
                    answer: "d",
                    explanation: "Polymerization of ethene gives polythene.",
                    source: "IOE sets.json 07:80"
                },
                {
                    id: "d18h7",
                    text: "The hybridization of each carbon atom in ethyne (acetylene, C₂H₂) is:",
                    options: [
                        { key: "a", text: "sp" },
                        { key: "b", text: "sp²" },
                        { key: "c", text: "sp³" },
                        { key: "d", text: "sp³d" }
                    ],
                    answer: "a",
                    explanation: "Each carbon in ethyne (acetylene) is sp-hybridized.",
                    source: "IOE sets.json 08:80"
                },
                {
                    id: "d18h8",
                    text: "Oxidation of ethyne to ethanedioic (oxalic) acid is carried out using:",
                    options: [
                        { key: "a", text: "H₂O/Zn" },
                        { key: "b", text: "acidified KMnO₄" },
                        { key: "c", text: "neutral KMnO₄" },
                        { key: "d", text: "basic KMnO₄" }
                    ],
                    answer: "b",
                    explanation: "The source stem says “ethanoic acid,” an impossible oxidation product of ethyne. The intended product is ethanedioic (oxalic) acid, obtained by oxidation with acidified potassium permanganate.",
                    source: "Adapted from IOE sets.json 09:80: corrected ethanoic acid to ethanedioic acid"
                },
                {
                    id: "d18h9",
                    text: "A halo-alkane, when treated with alc. KCN, shows:",
                    options: [
                        { key: "a", text: "None of the above" },
                        { key: "b", text: "Elimination reaction" },
                        { key: "c", text: "Substitution reaction" },
                        { key: "d", text: "Addition reaction" }
                    ],
                    answer: "c",
                    explanation: "A halo-alkane with alcoholic KCN undergoes nucleophilic substitution to a nitrile.",
                    source: "IOE sets.json 10:80"
                },
                {
                    id: "d18h10",
                    text: "The hydrocarbon formed by the hydrolysis of beryllium carbide is",
                    options: [
                        { key: "a", text: "ethane" },
                        { key: "b", text: "acetylene" },
                        { key: "c", text: "propylene" },
                        { key: "d", text: "methane" }
                    ],
                    answer: "d",
                    explanation: "Beryllium carbide (Be₂C) hydrolyses to give methane.",
                    source: "IOE sets.json 11:80"
                },
                {
                    id: "d18h11",
                    text: "Which one of the following can best be used to distinguish between samples of ethane and ethene?",
                    options: [
                        { key: "a", text: "Aqueous bromine" },
                        { key: "b", text: "Litmus solution" },
                        { key: "c", text: "Lime water" },
                        { key: "d", text: "Aqueous AgNO₃" }
                    ],
                    answer: "a",
                    explanation: "Ethene decolourizes aqueous bromine while ethane does not, distinguishing them.",
                    source: "IOE sets.json 12:80"
                },
                {
                    id: "d18h12",
                    text: "The general molecular formula of an alkane is:",
                    options: [
                        { key: "a", text: "CₙHₙ" },
                        { key: "b", text: "CₙH₂ₙ₊₂" },
                        { key: "c", text: "CₙH₂ₙ" },
                        { key: "d", text: "CₙH₂ₙ₋₂" }
                    ],
                    answer: "b",
                    explanation: "The general formula of an alkane is CₙH₂ₙ₊₂.",
                    source: "IOE sets.json 13:80"
                },
                {
                    id: "d18h13",
                    text: "The number of sigma and pi bonds present in a molecule of ethene (C₂H₄) is:",
                    options: [
                        { key: "a", text: "3 sigma and 1 pi" },
                        { key: "b", text: "4 sigma and 2 pi" },
                        { key: "c", text: "5 sigma and 1 pi" },
                        { key: "d", text: "6 sigma and 0 pi" }
                    ],
                    answer: "c",
                    explanation: "Ethene has 5 sigma bonds (4 C–H, 1 C–C) and 1 pi bond.",
                    source: "IOE sets.json 14:80"
                },
                {
                    id: "d18h14",
                    text: "Acetylene with a Cu tube? (reaction)",
                    options: [
                        { key: "a", text: "ethylene" },
                        { key: "b", text: "ethane" },
                        { key: "c", text: "toluene" },
                        { key: "d", text: "benzene" }
                    ],
                    answer: "d",
                    explanation: "Acetylene passed through a red-hot copper tube trimerizes to benzene.",
                    source: "IOE sets.json 15:80"
                },
                {
                    id: "d18h15",
                    text: "From which compound is benzene synthesized?",
                    options: [
                        { key: "a", text: "Ethyne" },
                        { key: "b", text: "Ethene" },
                        { key: "c", text: "Toluene" },
                        { key: "d", text: "Ethane" }
                    ],
                    answer: "a",
                    explanation: "Benzene is synthesized by trimerizing ethyne (acetylene).",
                    source: "IOE sets.json 16:80"
                },
                {
                    id: "d18h16",
                    text: "Which of the following doesn't give a precipitate with ammoniacal AgNO₃?",
                    options: [
                        { key: "a", text: "But-1-yne" },
                        { key: "b", text: "Benzene" },
                        { key: "c", text: "Ethyne" },
                        { key: "d", text: "Propyne" }
                    ],
                    answer: "b",
                    explanation: "Benzene has no terminal alkyne hydrogen, so it gives no precipitate with ammoniacal AgNO₃.",
                    source: "IOE sets.json 17:80"
                },
                {
                    id: "d18h17",
                    text: "During catalytic reforming, one mole of $n$-hexane is converted to benzene. How many moles of hydrogen are liberated?",
                    options: [
                        { key: "a", text: "$2$" },
                        { key: "b", text: "$3$" },
                        { key: "c", text: "$4$" },
                        { key: "d", text: "$5$" }
                    ],
                    answer: "c",
                    explanation: "Balancing $\\mathrm{C_6H_{14}\\to C_6H_6+xH_2}$ gives $14=6+2x$, so $x=4$.",
                    source: "Authored for 2026 CEE syllabus: Hydrocarbons - Reforming"
                }
            ]
        },
        {
            id: "applied18",
            name: "Applied Chemistry",
            subject: "Chemistry",
            accent: "emerald",
            blurb: "16 syllabus-bound questions on industry, manufacturing, useful compounds and chemistry in service to mankind.",
            questions: [
                {
                    id: "d18a1",
                    text: "The catalyst used in the Haber process for the manufacture of ammonia is:",
                    options: [
                        { key: "a", text: "vanadium pentoxide" },
                        { key: "b", text: "platinum" },
                        { key: "c", text: "nickel" },
                        { key: "d", text: "iron" }
                    ],
                    answer: "d",
                    explanation: "The Haber process uses a finely divided iron catalyst.",
                    source: "IOE sets.json 05:67"
                },
                {
                    id: "d18a2",
                    text: "Catalytic oxidation of NH₃ gives what?",
                    options: [
                        { key: "a", text: "Nitric oxide (NO)" },
                        { key: "b", text: "Nitrogen (N₂)" },
                        { key: "c", text: "Nitrogen dioxide (NO₂)" },
                        { key: "d", text: "Nitrous oxide (N₂O)" }
                    ],
                    answer: "a",
                    explanation: "Catalytic (Ostwald) oxidation of NH₃ over Pt gives nitric oxide, NO.",
                    source: "IOE sets.json 09:84"
                },
                {
                    id: "d18a3",
                    text: "The catalyst used in the contact process for the manufacture of sulphuric acid is:",
                    options: [
                        { key: "a", text: "manganese dioxide" },
                        { key: "b", text: "vanadium pentoxide (V₂O₅)" },
                        { key: "c", text: "iron" },
                        { key: "d", text: "platinum" }
                    ],
                    answer: "b",
                    explanation: "The contact process for H₂SO₄ uses a vanadium pentoxide (V₂O₅) catalyst.",
                    source: "IOE sets.json 05:73"
                },
                {
                    id: "d18a4",
                    text: "The by-product of the Solvay process is",
                    options: [
                        { key: "a", text: "H₂ only" },
                        { key: "b", text: "NaOH" },
                        { key: "c", text: "CaCl₂" },
                        { key: "d", text: "H₂ & Cl₂" }
                    ],
                    answer: "c",
                    explanation: "Calcium chloride (CaCl₂) is the by-product of the Solvay process.",
                    source: "IOE sets.json 10:66"
                },
                {
                    id: "d18a5",
                    text: "NaOH is manufactured by ___.",
                    options: [
                        { key: "a", text: "Solvay process" },
                        { key: "b", text: "Haber process" },
                        { key: "c", text: "Ostwald process" },
                        { key: "d", text: "Electrolysis of brine (Castner–Kellner process)" }
                    ],
                    answer: "d",
                    explanation: "NaOH is manufactured by electrolysis of brine (the Castner–Kellner process).",
                    source: "IOE sets.json 05:76"
                },
                {
                    id: "d18a6",
                    text: "The chemical formula of bleaching powder is:",
                    options: [
                        { key: "a", text: "CaOCl₂" },
                        { key: "b", text: "CaCl₂" },
                        { key: "c", text: "CaCO₃" },
                        { key: "d", text: "Ca(OH)₂" }
                    ],
                    answer: "a",
                    explanation: "Bleaching powder is calcium oxychloride, CaOCl₂.",
                    source: "IOE sets.json 01:66"
                },
                {
                    id: "d18a7",
                    text: "The chemical formula of Plaster of Paris is:",
                    options: [
                        { key: "a", text: "CaSO₄·2H₂O" },
                        { key: "b", text: "CaSO₄·½H₂O" },
                        { key: "c", text: "CaSO₄" },
                        { key: "d", text: "Ca(OH)₂" }
                    ],
                    answer: "b",
                    explanation: "Plaster of Paris is CaSO₄·½H₂O.",
                    source: "IOE sets.json 02:67"
                },
                {
                    id: "d18a8",
                    text: "White vitriol — molecular formula.",
                    options: [
                        { key: "a", text: "FeSO₄·7H₂O" },
                        { key: "b", text: "MgSO₄·7H₂O" },
                        { key: "c", text: "ZnSO₄·7H₂O" },
                        { key: "d", text: "CuSO₄·5H₂O" }
                    ],
                    answer: "c",
                    explanation: "White vitriol is zinc sulphate heptahydrate, ZnSO₄·7H₂O.",
                    source: "IOE sets.json 16:78"
                },
                {
                    id: "d18a9",
                    text: "Composition of lime water.",
                    options: [
                        { key: "a", text: "CaO in water" },
                        { key: "b", text: "CaCO₃ in water" },
                        { key: "c", text: "CaCl₂ in water" },
                        { key: "d", text: "Ca(OH)₂ in water" }
                    ],
                    answer: "d",
                    explanation: "Lime water is a solution of calcium hydroxide, Ca(OH)₂, in water.",
                    source: "IOE sets.json 02:76"
                },
                {
                    id: "d18a10",
                    text: "A buffer solution resists a change in its:",
                    options: [
                        { key: "a", text: "pH" },
                        { key: "b", text: "temperature" },
                        { key: "c", text: "volume" },
                        { key: "d", text: "colour" }
                    ],
                    answer: "a",
                    explanation: "A buffer resists change in pH when small amounts of acid or base are added.",
                    source: "IOE sets.json 04:73"
                },
                {
                    id: "d18a11",
                    text: "A chemical plant must manufacture a large, uniform product continuously for several years. Compared with batch processing, the strongest economic reason for choosing a continuous process is:",
                    options: [
                        { key: "a", text: "easy switching among many unrelated products" },
                        { key: "b", text: "lower unit cost through steady high-throughput operation" },
                        { key: "c", text: "complete elimination of process-control equipment" },
                        { key: "d", text: "zero capital investment before production starts" }
                    ],
                    answer: "b",
                    explanation: "Continuous operation suits high-volume standard products and usually lowers unit cost through steady throughput, automation and reduced downtime. It still needs capital and process control.",
                    source: "Authored for 2026 CEE syllabus: Chemical Industry & Plant Management"
                },
                {
                    id: "d18a12",
                    text: "In Portland-cement manufacture, gypsum is ground with clinker chiefly to:",
                    options: [
                        { key: "a", text: "remove iron oxide from the raw meal" },
                        { key: "b", text: "increase the lime content of clinker" },
                        { key: "c", text: "retard the rapid setting of cement" },
                        { key: "d", text: "convert silica into calcium silicate" }
                    ],
                    answer: "c",
                    explanation: "A small amount of gypsum controls the rapid hydration of tricalcium aluminate and prevents flash setting.",
                    source: "Authored for 2026 CEE syllabus: Cement Manufacture"
                },
                {
                    id: "d18a13",
                    text: "The active cooking chemicals in the Kraft process for converting wood chips into paper pulp are mainly:",
                    options: [
                        { key: "a", text: "$\\mathrm{HCl}$ and $\\mathrm{Cl_2}$" },
                        { key: "b", text: "$\\mathrm{CaCO_3}$ and $\\mathrm{SiO_2}$" },
                        { key: "c", text: "$\\mathrm{NH_3}$ and $\\mathrm{CO_2}$" },
                        { key: "d", text: "$\\mathrm{NaOH}$ and $\\mathrm{Na_2S}$" }
                    ],
                    answer: "d",
                    explanation: "Kraft pulping uses white liquor containing sodium hydroxide and sodium sulphide to dissolve lignin and release cellulose fibres.",
                    source: "Authored for 2026 CEE syllabus: Paper & Pulp Manufacture"
                },
                {
                    id: "d18a14",
                    text: "In the diaphragm-cell electrolysis of brine, the diaphragm is essential because it:",
                    options: [
                        { key: "a", text: "prevents chlorine from reacting with cathodic $\\mathrm{OH^-}$" },
                        { key: "b", text: "allows sodium metal to deposit at the cathode" },
                        { key: "c", text: "converts sodium chloride directly into sodium carbonate" },
                        { key: "d", text: "mixes chlorine with hydrogen to increase yield" }
                    ],
                    answer: "a",
                    explanation: "The porous diaphragm separates anode chlorine from cathodic hydrogen and hydroxide, preventing formation of hypochlorite and an explosive $\\mathrm{H_2/Cl_2}$ mixture.",
                    source: "Authored for 2026 CEE syllabus: Diaphragm Cell"
                },
                {
                    id: "d18a15",
                    text: "Industrial urea manufacture proceeds through the intermediate:",
                    options: [
                        { key: "a", text: "calcium cyanamide, $\\mathrm{CaCN_2}$" },
                        { key: "b", text: "ammonium carbamate, $\\mathrm{NH_2COONH_4}$" },
                        { key: "c", text: "ammonium nitrate, $\\mathrm{NH_4NO_3}$" },
                        { key: "d", text: "sodium cyanate, $\\mathrm{NaOCN}$" }
                    ],
                    answer: "b",
                    explanation: "$2\\mathrm{NH_3+CO_2\\rightleftharpoons NH_2COONH_4}$; ammonium carbamate then dehydrates to urea and water.",
                    source: "Authored for 2026 CEE syllabus: Urea Manufacture"
                },
                {
                    id: "d18a16",
                    text: "Which pair correctly represents chemistry in service to mankind?",
                    options: [
                        { key: "a", text: "DDT - biodegradable polymer; insulin - synthetic dye" },
                        { key: "b", text: "starch sol - true solution; aspirin - nitrogen fertiliser" },
                        { key: "c", text: "cobalt-60 - cancer radiotherapy; phosphate salts - fertilisers" },
                        { key: "d", text: "carbon-14 - drinking-water chlorination; PVC - antibiotic" }
                    ],
                    answer: "c",
                    explanation: "Cobalt-60 is a medical gamma source and phosphates are major fertilisers. The other pairings misuse radioisotopes, polymers, drugs, pesticides or colloids.",
                    source: "Authored for 2026 CEE syllabus: Chemistry in Service to Mankind"
                }
            ]
        },
        {
            id: "analytical18",
            name: "Analytical Chemistry",
            subject: "Chemistry",
            accent: "rose",
            blurb: "16 questions on chemical tests, separation techniques and acid-base, redox and complexometric titrations.",
            questions: [
                {
                    id: "d18n1",
                    text: "Naphthalene is purified by? (sublimation)",
                    options: [
                        { key: "a", text: "distillation" },
                        { key: "b", text: "crystallization" },
                        { key: "c", text: "filtration" },
                        { key: "d", text: "sublimation" }
                    ],
                    answer: "d",
                    explanation: "Naphthalene sublimes on heating, so it is purified by sublimation.",
                    source: "IOE sets.json 05:79"
                },
                {
                    id: "d18n2",
                    text: "Which reagent is used to distinguish an aldehyde from a ketone?",
                    options: [
                        { key: "a", text: "Tollen's reagent" },
                        { key: "b", text: "bromine water" },
                        { key: "c", text: "sodium hydroxide" },
                        { key: "d", text: "concentrated H₂SO₄" }
                    ],
                    answer: "a",
                    explanation: "Tollens' reagent gives a silver mirror with aldehydes but not ketones, distinguishing them.",
                    source: "IOE sets.json 12:82"
                },
                {
                    id: "d18n3",
                    text: "Ozonolysis is used to determine:",
                    options: [
                        { key: "a", text: "functional group" },
                        { key: "b", text: "double bond" },
                        { key: "c", text: "single bond" },
                        { key: "d", text: "aromatic" }
                    ],
                    answer: "b",
                    explanation: "Ozonolysis locates the position of a carbon–carbon double bond.",
                    source: "IOE sets.json 05:80"
                },
                {
                    id: "d18n4",
                    text: "100 ml of 0.1 N HCl is treated with excess of AgNO₃. The weight of AgCl precipitated is:",
                    options: [
                        { key: "a", text: "7.175 gm" },
                        { key: "b", text: "3.65 gm" },
                        { key: "c", text: "1.435 gm" },
                        { key: "d", text: "14.35 gm" }
                    ],
                    answer: "c",
                    explanation: "0.01 mol Cl⁻ gives 0.01 mol AgCl; mass = 0.01×143.5 = 1.435 g.",
                    source: "IOE sets.json 08:63"
                },
                {
                    id: "d18n5",
                    text: "Nessler's reagent is:",
                    options: [
                        { key: "a", text: "K₄[Fe(CN)₆]" },
                        { key: "b", text: "K₃[Fe(CN)₆]" },
                        { key: "c", text: "Na₂[Fe(CN)₅NO]" },
                        { key: "d", text: "K₂[HgI₄]" }
                    ],
                    answer: "d",
                    explanation: "Nessler's reagent is K₂[HgI₄].",
                    source: "IOE sets.json 14:77"
                },
                {
                    id: "d18n6",
                    text: "KMnO₄ in titration acts as a self-indicator. (statement / true-false)",
                    options: [
                        { key: "a", text: "True — its intense purple colour marks the end point itself" },
                        { key: "b", text: "False — an external indicator is always required" },
                        { key: "c", text: "True — but only when starch is added" },
                        { key: "d", text: "False — it is colourless in solution" }
                    ],
                    answer: "a",
                    explanation: "KMnO₄'s intense purple colour marks the end point itself, so it is a self-indicator.",
                    source: "IOE sets.json 13:81"
                },
                {
                    id: "d18n7",
                    text: "In Lassaigne's test, an organic compound containing both nitrogen and sulphur gives a blood-red colour with $\\mathrm{Fe^{3+}}$ when sodium fusion forms:",
                    options: [
                        { key: "a", text: "$\\mathrm{Na_2S}$" },
                        { key: "b", text: "$\\mathrm{NaSCN}$" },
                        { key: "c", text: "$\\mathrm{NaNO_3}$" },
                        { key: "d", text: "$\\mathrm{NaCN}$" }
                    ],
                    answer: "b",
                    explanation: "With insufficient sodium, carbon, nitrogen and sulphur form sodium thiocyanate. $\\mathrm{SCN^-}$ gives a blood-red ferric-thiocyanate complex.",
                    source: "Authored for 2026 CEE syllabus: Lassaigne Test"
                },
                {
                    id: "d18n8",
                    text: "A violet ring at the junction after adding alcoholic $\\alpha$-naphthol and carefully layering concentrated $\\mathrm{H_2SO_4}$ is a positive test for:",
                    options: [
                        { key: "a", text: "fats" },
                        { key: "b", text: "halogens" },
                        { key: "c", text: "carbohydrates" },
                        { key: "d", text: "proteins" }
                    ],
                    answer: "c",
                    explanation: "Molisch's test detects carbohydrates: dehydration by concentrated acid forms furfural derivatives that condense with $\\alpha$-naphthol to give a violet ring.",
                    source: "Authored for 2026 CEE syllabus: Biomolecule Tests - Carbohydrate"
                },
                {
                    id: "d18n9",
                    text: "The violet colour in the Biuret test for protein is produced by complex formation between peptide bonds and:",
                    options: [
                        { key: "a", text: "$\\mathrm{Ag^+}$ in ammoniacal medium" },
                        { key: "b", text: "$\\mathrm{Fe^{3+}}$ in acidic medium" },
                        { key: "c", text: "$\\mathrm{I_2}$ in iodide solution" },
                        { key: "d", text: "$\\mathrm{Cu^{2+}}$ in alkaline medium" }
                    ],
                    answer: "d",
                    explanation: "In alkaline solution, copper(II) ions coordinate with peptide nitrogens to form the violet Biuret complex.",
                    source: "Authored for 2026 CEE syllabus: Biomolecule Tests - Protein"
                },
                {
                    id: "d18n10",
                    text: "Fractional crystallisation is most effective for separating two solids when they have:",
                    options: [
                        { key: "a", text: "very different changes in solubility with temperature" },
                        { key: "b", text: "identical solubilities at every temperature" },
                        { key: "c", text: "different magnetic susceptibilities only" },
                        { key: "d", text: "equal boiling points but different densities" }
                    ],
                    answer: "a",
                    explanation: "On cooling a hot solution, the less soluble component crystallises preferentially when the two solids have sufficiently different solubility-temperature curves.",
                    source: "Authored for 2026 CEE syllabus: Fractional Crystallisation"
                },
                {
                    id: "d18n11",
                    text: "A high-boiling liquid decomposes at its normal boiling point and contains a non-volatile impurity. The best separation method is:",
                    options: [
                        { key: "a", text: "simple distillation at one atmosphere" },
                        { key: "b", text: "vacuum distillation at reduced pressure" },
                        { key: "c", text: "paper chromatography in water" },
                        { key: "d", text: "fractional crystallisation from ice" }
                    ],
                    answer: "b",
                    explanation: "Reduced pressure lowers the boiling point, allowing the volatile liquid to distil before thermal decomposition while the non-volatile impurity remains.",
                    source: "Authored for 2026 CEE syllabus: Vacuum Distillation"
                },
                {
                    id: "d18n12",
                    text: "In paper chromatography, a solute spot moves 3.0 cm while the solvent front moves 7.5 cm. Its $R_f$ value is:",
                    options: [
                        { key: "a", text: "$4.50$" },
                        { key: "b", text: "$0.25$" },
                        { key: "c", text: "$0.40$" },
                        { key: "d", text: "$2.50$" }
                    ],
                    answer: "c",
                    explanation: "$R_f=\\dfrac{\\text{distance moved by solute}}{\\text{distance moved by solvent front}}=3.0/7.5=0.40$.",
                    source: "Authored for 2026 CEE syllabus: Paper Chromatography"
                },
                {
                    id: "d18n13",
                    text: "Atmolysis separates a mixture of gases primarily because the gases:",
                    options: [
                        { key: "a", text: "condense at the same temperature but different pressures" },
                        { key: "b", text: "react selectively with filter paper" },
                        { key: "c", text: "form crystals of different solubilities" },
                        { key: "d", text: "diffuse through a porous partition at different rates" }
                    ],
                    answer: "d",
                    explanation: "Atmolysis uses unequal diffusion rates through a porous membrane; by Graham's law, rate is inversely proportional to the square root of molar mass.",
                    source: "Authored for 2026 CEE syllabus: Atmolysis"
                },
                {
                    id: "d18n14",
                    text: "The most suitable indicator for titrating acetic acid with sodium hydroxide is:",
                    options: [
                        { key: "a", text: "phenolphthalein" },
                        { key: "b", text: "methyl red" },
                        { key: "c", text: "starch" },
                        { key: "d", text: "methyl orange" }
                    ],
                    answer: "a",
                    explanation: "A weak-acid/strong-base equivalence point is basic, within the phenolphthalein transition range. Methyl orange changes too early.",
                    source: "Authored for 2026 CEE syllabus: Acid-Base Titration Indicators"
                },
                {
                    id: "d18n15",
                    text: "Which statement correctly distinguishes iodometry from iodimetry?",
                    options: [
                        { key: "a", text: "Iodometry directly uses standard iodine; iodimetry always uses EDTA" },
                        { key: "b", text: "Iodometry titrates liberated iodine with thiosulphate; iodimetry directly uses standard iodine" },
                        { key: "c", text: "Iodometry uses permanganate; iodimetry uses dichromate" },
                        { key: "d", text: "Both methods use iodine only as an external indicator" }
                    ],
                    answer: "b",
                    explanation: "Iodometry is indirect: an oxidant liberates iodine from iodide and the iodine is titrated with thiosulphate. Iodimetry directly titrates a reductant with standard iodine.",
                    source: "Authored for 2026 CEE syllabus: Iodometric & Iodimetric Titration"
                },
                {
                    id: "d18n16",
                    text: "In an EDTA complexometric titration of total hardness, one mole of EDTA reacts with:",
                    options: [
                        { key: "a", text: "one mole of metal only if it is monovalent" },
                        { key: "b", text: "four moles of calcium but one mole of magnesium" },
                        { key: "c", text: "one mole of $\\mathrm{Ca^{2+}}$ or $\\mathrm{Mg^{2+}}$" },
                        { key: "d", text: "two moles of every divalent metal ion" }
                    ],
                    answer: "c",
                    explanation: "EDTA is hexadentate but forms a 1:1 chelate with most metal ions, including $\\mathrm{Ca^{2+}}$ and $\\mathrm{Mg^{2+}}$.",
                    source: "Authored for 2026 CEE syllabus: Complexometric Titration"
                }
            ]
        },
        {
            id: "ceeextra18",
            name: "CEE Wildcard · Fluid Dynamics",
            subject: "Physics",
            accent: "blue",
            blurb: "1 application question from the official CEE Physics syllabus.",
            questions: [
                {
                    id: "d18x1",
                    text: "Water flows horizontally through a pipe whose cross-sectional area narrows to one-half. For ideal steady incompressible flow, the speed in the narrow section and its static pressure respectively:",
                    options: [
                        { key: "a", text: "doubles and remains unchanged" },
                        { key: "b", text: "quadruples and decreases" },
                        { key: "c", text: "halves and increases" },
                        { key: "d", text: "doubles and decreases" }
                    ],
                    answer: "d",
                    explanation: "Continuity gives $A_1v_1=A_2v_2$, so halving area doubles speed. Bernoulli's equation then requires the static pressure to fall.",
                    source: "Authored for 2026 CEE syllabus: Physics - Fluid Dynamics"
                }
            ]
        }
    ]
};

const DAY18_SYLLABUS = [
    { subject: "Chemistry", accent: "amber", topics: [
        { topic: "Full Syllabus · Physical Chemistry", subs: [
            { name: "Basic Concepts & Stoichiometry", ids: ["d18c1", "d18c2"] },
            { name: "Atomic Structure", ids: ["d18c3", "d18c4"] },
            { name: "Classification & Periodicity", ids: ["d18c5"] },
            { name: "Chemical Bonding & Molecular Shape", ids: ["d18c6", "d18c7"] },
            { name: "States of Matter", ids: ["d18c8"] },
            { name: "Redox Reactions", ids: ["d18c9"] },
            { name: "Chemical Equilibrium", ids: ["d18c10"] },
            { name: "Volumetric Analysis", ids: ["d18c11"] },
            { name: "Ionic Equilibrium", ids: ["d18c12"] },
            { name: "Chemical Kinetics", ids: ["d18c13"] },
            { name: "Electrochemistry", ids: ["d18c14"] },
            { name: "Chemical Thermodynamics", ids: ["d18c15"] },
            { name: "Nuclear Chemistry", ids: ["d18c16"] },
            { name: "Solid State", ids: ["d18c17"] }
        ] },
        { topic: "Full Syllabus · Inorganic Chemistry", subs: [
            { name: "Chemistry of Non-metals", ids: ["d18c18", "d18c19", "d18c20", "d18c21", "d18c22"] },
            { name: "Chemistry of Metals", ids: ["d18c23", "d18c24", "d18c25", "d18c26"] },
            { name: "Bio-inorganic Chemistry", ids: ["d18c27"] }
        ] },
        { topic: "Full Syllabus · Organic Chemistry", subs: [
            { name: "General Organic Chemistry, Nomenclature & Isomerism", ids: ["d18c28", "d18c29", "d18c30", "d18c31"] },
            { name: "Haloalkanes & Haloarenes", ids: ["d18c32", "d18c33"] },
            { name: "Alcohols, Phenols & Ethers", ids: ["d18c34", "d18c36", "d18c37"] },
            { name: "Aldehydes, Ketones & Carboxylic Derivatives", ids: ["d18c35", "d18c41", "d18c44"] },
            { name: "Aromatic, Nitro & Amine Chemistry", ids: ["d18c38", "d18c39", "d18c40", "d18c42"] },
            { name: "Organometallic Compounds", ids: ["d18c43"] }
        ] },
        { topic: "Full Syllabus · Applied Chemistry", subs: [
            { name: "Manufacturing Processes", ids: ["d18c45", "d18c46", "d18c47"] }
        ] },
        { topic: "Full Syllabus · Analytical Chemistry", subs: [
            { name: "Chemical & Distinction Tests", ids: ["d18c48", "d18c49"] },
            { name: "Precipitation Analysis", ids: ["d18c50"] }
        ] },
        { topic: "Hydrocarbons Intensive", subs: [
            { name: "Alkanes, Alkenes & Alkynes", ids: ["d18h1", "d18h3", "d18h4", "d18h5", "d18h7", "d18h8", "d18h10", "d18h11", "d18h12", "d18h13", "d18h16"] },
            { name: "Aromatic Hydrocarbons, Reforming & Reactions", ids: ["d18h2", "d18h9", "d18h14", "d18h15", "d18h17"] },
            { name: "Polymerisation", ids: ["d18h6"] }
        ] },
        { topic: "Applied Chemistry Intensive", subs: [
            { name: "Manufacturing & Plant Management", ids: ["d18a1", "d18a2", "d18a3", "d18a4", "d18a5", "d18a11", "d18a12", "d18a13", "d18a14", "d18a15"] },
            { name: "Applications of Elements & Compounds", ids: ["d18a6", "d18a7", "d18a8", "d18a9"] },
            { name: "Chemistry in Service to Mankind", ids: ["d18a10", "d18a16"] }
        ] },
        { topic: "Analytical Chemistry Intensive", subs: [
            { name: "Chemical & Biomolecule Tests", ids: ["d18n2", "d18n3", "d18n5", "d18n7", "d18n8", "d18n9"] },
            { name: "Separation Techniques", ids: ["d18n1", "d18n4", "d18n10", "d18n11", "d18n12", "d18n13"] },
            { name: "Types of Titration", ids: ["d18n6", "d18n14", "d18n15", "d18n16"] }
        ] }
    ] },
    { subject: "Physics", accent: "blue", topics: [
        { topic: "Mechanics", subs: [
            { name: "Fluid Statics & Dynamics", ids: ["d18x1"] }
        ] }
    ] }
];
DAY18.syllabus = DAY18_SYLLABUS;
