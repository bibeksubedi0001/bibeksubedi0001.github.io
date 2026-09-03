/* ============================================================
   CIVIL MODEL SET 13 — Civil Engineering licence-style model paper
   100 questions · 120 minutes · no negative marking

     Basic Civil Engineering...................  13
     Structural Mechanics......................  11
     Design of Structures......................  10
     Soil Mechanics and Foundation.............  13
     Basic Water Resources Engineering.........  12
     Hydropower................................   9
     Irrigation and Drainage...................  11
     Transportation............................  11
     Water Supply, Sanitation and Environment..  10

   Generated from the civil engineering question bank; every bank
   question is used in exactly one set. Identical duplicate options
   were collapsed, and the key was rotated across a/b/c/d except on
   questions whose options refer to other options.
   The "src" field on each question is its id in the source bank.
   ============================================================ */
const CIVIL_MODEL_13 = {
    day: 43,
    kind: "model",
    badge: { top: "Model", main: "C13" },
    title: "Civil Model Set 13",
    subtitle: "Civil Engineering · 9 subjects",
    durationMinutes: 120,
    negativeMarking: 0,
    chapters: [
        {
            id: "cm13basi",
            name: "Basic Civil Engineering",
            subject: "Basic Civil",
            accent: "blue",
            blurb: "13 questions drawn from the Basic Civil Engineering bank.",
            questions: [
                {
                    id: "cm13q001",
                    src: "BASI674-00147",
                    text: "Which cement is used for artificial marble?",
                    options: [
                        { key: "a", text: "Rapid Hardening Cement" },
                        { key: "b", text: "Coloured Cement" },
                        { key: "c", text: "Sulphate Resisting Cement" },
                        { key: "d", text: "Quick Setting Cement" }
                    ],
                    answer: "b",
                    explanation: "Coloured cement, made by adding pigments (5-10%) to OPC, is used for finishing works, decorative panels, and artificial marble to achieve the desired color."
                },
                {
                    id: "cm13q002",
                    src: "BASI674-00149",
                    text: "Rubbed stone, gravel and ordinary sand are examples of ______",
                    options: [
                        { key: "a", text: "Lightweight aggregate" },
                        { key: "b", text: "Heavy-weight aggregate" },
                        { key: "c", text: "Normal-weight aggregate" },
                        { key: "d", text: "Both Normal-weight aggregate and Heavy-weight aggregate" }
                    ],
                    answer: "c",
                    explanation: "These are common natural aggregates with a specific gravity typically between 2.5 and 2.7, used to produce normal-weight concrete with a density of about 2300-2500 kg/m³."
                },
                {
                    id: "cm13q003",
                    src: "BASI674-00150",
                    text: "Aggregate crushed before the application of full load of ______",
                    options: [
                        { key: "a", text: "1000n" },
                        { key: "b", text: "2000n" },
                        { key: "c", text: "3000n" },
                        { key: "d", text: "4000n" }
                    ],
                    answer: "d",
                    explanation: "The aggregate crushing value test is performed by applying a compressive load of 400 kN (400,000 Newtons) gradually over 10 minutes."
                },
                {
                    id: "cm13q004",
                    src: "BASI674-00151",
                    text: "What do you mean by bulking?",
                    options: [
                        { key: "a", text: "The volume increase of fine aggregate due to presence of moisture content in it" },
                        { key: "b", text: "The moisture present in aggregate forms a film around each particle" },
                        { key: "c", text: "Fine aggregate shows completely realistic volume" },
                        { key: "d", text: "The state of setting someone or something apart from others" }
                    ],
                    answer: "a",
                    explanation: "Bulking is the phenomenon where the volume of fine aggregate (sand) increases due to the formation of a water film around the particles that pushes them apart."
                },
                {
                    id: "cm13q005",
                    src: "BASI674-00152",
                    text: "What is the percentage of bulk if fine aggregates manufactured by extremely fine sand?",
                    options: [
                        { key: "a", text: "20" },
                        { key: "b", text: "40" },
                        { key: "c", text: "30" },
                        { key: "d", text: "50" }
                    ],
                    answer: "b",
                    explanation: "The percentage of bulking is higher for finer sands because they have a larger surface area and more particles, leading to a greater overall volume increase from the water films. It can be up to 40%."
                },
                {
                    id: "cm13q006",
                    src: "BASI674-00153",
                    text: "Bulking ______ with increase in moisture.",
                    options: [
                        { key: "a", text: "Increase" },
                        { key: "b", text: "Decrease" },
                        { key: "c", text: "First increase" },
                        { key: "d", text: "First decrease then decrease increase" }
                    ],
                    answer: "c",
                    explanation: "Bulking increases with moisture content up to a certain point (critical moisture content, around 5-8%). Beyond this point, the water films merge, and the sand volume starts to decrease back to its original volume (or even less) as the voids fill with water."
                },
                {
                    id: "cm13q007",
                    src: "BASI674-00154",
                    text: "Fine sand bulks ______ than coarse sand.",
                    options: [
                        { key: "a", text: "Less" },
                        { key: "b", text: "Equal" },
                        { key: "c", text: "Depends on volume" },
                        { key: "d", text: "More" }
                    ],
                    answer: "d",
                    explanation: "Fine sand has a greater specific surface area (more surface area per unit volume) than coarse sand. This allows for more water films to form, pushing more particles apart and resulting in a higher percentage of bulking."
                },
                {
                    id: "cm13q008",
                    src: "BASI674-00155",
                    text: "Which apparatus we don’t need to calculate the bulking of fine aggregates?",
                    options: [
                        { key: "a", text: "Vicat’s mould" },
                        { key: "b", text: "Measuring cylinder" },
                        { key: "c", text: "Weighing balance" },
                        { key: "d", text: "Steel rule" }
                    ],
                    answer: "a",
                    explanation: "The bulking test for sand requires a measuring cylinder, a balance, and a rule to measure height. Vicat's apparatus is used for cement consistency tests, not for sand bulking."
                },
                {
                    id: "cm13q009",
                    src: "BASI674-00156",
                    text: "If the moisture content of 5 to 10% by weight, then the bulking of sand is increased by ______",
                    options: [
                        { key: "a", text: "20" },
                        { key: "b", text: "40" },
                        { key: "c", text: "30" },
                        { key: "d", text: "50" }
                    ],
                    answer: "b",
                    explanation: "At a moisture content of around 5-10%, bulking is near its maximum value. For fine sands, this maximum bulking can be as high as 30-40%."
                },
                {
                    id: "cm13q010",
                    src: "BASI674-00157",
                    text: "When sand is fully dry then it’s volume is ______ to sand in saturated condition.",
                    options: [
                        { key: "a", text: "Equal" },
                        { key: "b", text: "More" },
                        { key: "c", text: "Less" },
                        { key: "d", text: "Can’t say" }
                    ],
                    answer: "c",
                    explanation: "In the saturated surface dry (SSD) condition, water fills the voids between sand particles without causing bulking. Dry sand occupies less volume than bulked sand but slightly more or similar volume than SSD sand because the water in SSD sand adds weight but not significant volume to the voids. The most accurate comparison is that dry sand has a higher volume than the same mass of sand at the SSD condition due to the lack of water weight compacting it, but the question is ambiguous. Standardly, bulked volume &gt; dry volume &gt; or = SSD volume for the same mass. The answer is often considered 'Less' meaning dry volume is less than the bulked volume it would have at 5-8% moisture."
                },
                {
                    id: "cm13q011",
                    src: "BASI674-00158",
                    text: "In crushing test, dry aggregates passing through ______ mm sieve and retained ______ mm in a cylinder.",
                    options: [
                        { key: "a", text: "11.5, 10" },
                        { key: "b", text: "12.5, 11.5" },
                        { key: "c", text: "10, 2.36" },
                        { key: "d", text: "12.5, 10" }
                    ],
                    answer: "d",
                    explanation: "The aggregate crushing value test uses the fraction passing the 12.5 mm sieve and retained on the 10 mm sieve, so that every particle is of comparable size and the result reflects the material rather than the grading. The sample is compacted in a 15 cm cylinder and loaded to 40 tonnes over 10 minutes, and the fines passing 2.36 mm are then weighed."
                },
                {
                    id: "cm13q012",
                    src: "BASI674-00159",
                    text: "According to IS: 2386 part-IV, each layer is tamped ______ times in crushing test.",
                    options: [
                        { key: "a", text: "25" },
                        { key: "b", text: "20" },
                        { key: "c", text: "30" },
                        { key: "d", text: "10" }
                    ],
                    answer: "a",
                    explanation: "The test specifies that the aggregate in the cylindrical measure is compacted by tamping each of the three layers 25 times with a standard tamping rod."
                },
                {
                    id: "cm13q013",
                    src: "BASI674-00160",
                    text: "A value less than 10 signifies an exceptionally ______ while above 35 would normally be regarded as ______.",
                    options: [
                        { key: "a", text: "Weak aggregates, strong aggregates" },
                        { key: "b", text: "Strong aggregates, weak aggregates" },
                        { key: "c", text: "Weak aggregates, weak aggregates" },
                        { key: "d", text: "Strong aggregates, strong aggregates" }
                    ],
                    answer: "b",
                    explanation: "The Aggregate Crushing Value (ACV) measures the resistance of aggregate to crushing under a gradually applied load. A lower ACV indicates a stronger aggregate. Therefore, &lt;10 is exceptionally strong, and &gt;35 is weak."
                }
            ]
        },
        {
            id: "cm13stru",
            name: "Structural Mechanics",
            subject: "Structural Mech",
            accent: "cyan",
            blurb: "11 questions drawn from the Structural Mechanics bank.",
            questions: [
                {
                    id: "cm13q014",
                    src: "STRU935-00123",
                    text: "Force methods are prefered when",
                    options: [
                        { key: "a", text: "always" },
                        { key: "b", text: "DSI &gt; DKI" },
                        { key: "c", text: "DKI &gt; DSI" },
                        { key: "d", text: "never" }
                    ],
                    answer: "c",
                    explanation: "The force method is preferred when the degree of static indeterminacy (DSI) is less than the degree of kinematic indeterminacy (DKI), as it results in fewer unknown redundants."
                },
                {
                    id: "cm13q015",
                    src: "STRU935-00124",
                    text: "How many compatibility equations should be written if we have n no. of redundant reactions?",
                    options: [
                        { key: "a", text: "n - 1" },
                        { key: "b", text: "n - 3" },
                        { key: "c", text: "n - 2" },
                        { key: "d", text: "n" }
                    ],
                    answer: "d",
                    explanation: "In the force method, the number of compatibility equations required is equal to the number of redundant reactions (n) to be solved for."
                },
                {
                    id: "cm13q016",
                    src: "STRU935-00125",
                    text: "Flexibility matrix is always:",
                    options: [
                        { key: "a", text: "symmetric" },
                        { key: "b", text: "non-symmetric" },
                        { key: "c", text: "anti-symmetric" },
                        { key: "d", text: "depends on load" }
                    ],
                    answer: "a",
                    explanation: "Maxwell's reciprocal theorem states that the flexibility coefficient f_ij equals f_ji, making the flexibility matrix always symmetric."
                },
                {
                    id: "cm13q017",
                    src: "STRU935-00126",
                    text: "In general, any structure can be classified as a symmetric one:",
                    options: [
                        { key: "a", text: "when its loading is symmetric" },
                        { key: "b", text: "when its structure is symmetric" },
                        { key: "c", text: "when its supports are symmetric" },
                        { key: "d", text: "when it develops symmetric internal loading and deflections" }
                    ],
                    answer: "b",
                    explanation: "Structural symmetry is defined by the geometry of the structure, including its support conditions and material properties, not by the loading."
                },
                {
                    id: "cm13q018",
                    src: "STRU935-00128",
                    text: "Which of the following is unknown in stiffness method?",
                    options: [
                        { key: "a", text: "force" },
                        { key: "b", text: "support reactions" },
                        { key: "c", text: "displacement" },
                        { key: "d", text: "can’t say" }
                    ],
                    answer: "c",
                    explanation: "In the stiffness method, joint displacements are the primary unknowns. Forces are then derived from these displacements."
                },
                {
                    id: "cm13q019",
                    src: "STRU935-00129",
                    text: "Stiffness of the end A if the far end B is fixed is",
                    options: [
                        { key: "a", text: "EI/L" },
                        { key: "b", text: "2EI/L" },
                        { key: "c", text: "3EI/L" },
                        { key: "d", text: "4EI/L" }
                    ],
                    answer: "d",
                    explanation: "With the far end fully fixed, the moment needed at A for unit rotation there is 4EI over L, and half of it, 2EI over L, carries over to the far end. That carry-over factor of one half is what makes moment distribution work, and the stiffness falls to 3EI over L if the far end is pinned instead."
                },
                {
                    id: "cm13q020",
                    src: "STRU935-00130",
                    text: "Stiffness of the end A if the far end B is hinged is",
                    options: [
                        { key: "a", text: "3EI/L" },
                        { key: "b", text: "EI/L" },
                        { key: "c", text: "2EI/L" },
                        { key: "d", text: "4EI/L" }
                    ],
                    answer: "a",
                    explanation: "When the far end is pinned it can rotate freely, so it offers less restraint and the stiffness at A drops to 3EI over L, three quarters of the fixed-end value. Nothing carries over to a pinned end, which is why modified stiffness is used to shorten moment distribution on beams with simply supported ends."
                },
                {
                    id: "cm13q021",
                    src: "STRU935-00131",
                    text: "The displacement method depends on which of the followings",
                    options: [
                        { key: "a", text: "static indeterminacy" },
                        { key: "b", text: "kinematic indeterminacy" },
                        { key: "c", text: "external static indeterminacy" },
                        { key: "d", text: "internal static indeterminacy" }
                    ],
                    answer: "b",
                    explanation: "The displacement method is based on the number of independent joint displacements, which is the degree of kinematic indeterminacy."
                },
                {
                    id: "cm13q022",
                    src: "STRU935-00132",
                    text: "Which of the following methods for solving indeterminate structures are easiest for computational purposes?",
                    options: [
                        { key: "a", text: "Force method" },
                        { key: "b", text: "Method of consistent deformation" },
                        { key: "c", text: "Displacement method" },
                        { key: "d", text: "Moment area method" }
                    ],
                    answer: "c",
                    explanation: "The displacement method is highly systematic and easier to implement in computer software due to its straightforward assembly of the global stiffness matrix."
                },
                {
                    id: "cm13q023",
                    src: "STRU935-00133",
                    text: "In slope deflection method, if left support goes down and right support goes up, then this will be:",
                    options: [
                        { key: "a", text: "Positive rotation" },
                        { key: "b", text: "Can’t say" },
                        { key: "c", text: "Depends upon magnitude" },
                        { key: "d", text: "Negative rotation" }
                    ],
                    answer: "d",
                    explanation: "This support movement creates a sagging curvature in the beam, which is associated with a negative rotation (clockwise) at the ends."
                },
                {
                    id: "cm13q024",
                    src: "STRU935-00134",
                    text: "While using slope deflection method, in which direction is the moment taken as positive?",
                    options: [
                        { key: "a", text: "Clockwise" },
                        { key: "b", text: "Anti-clockwise" },
                        { key: "c", text: "Depends upon case" },
                        { key: "d", text: "Depends upon loading" }
                    ],
                    answer: "a",
                    explanation: "The slope deflection method takes clockwise moments acting on the member ends as positive, along with clockwise joint rotations. The sign convention is arbitrary but must be applied consistently, because the fixed-end moments, the rotation terms and the sway terms in the equation all depend on it."
                }
            ]
        },
        {
            id: "cm13desi",
            name: "Design of Structures",
            subject: "Design of Str",
            accent: "slate",
            blurb: "10 questions drawn from the Design of Structures bank.",
            questions: [
                {
                    id: "cm13q025",
                    src: "DESI787-00108",
                    text: "The failure in under reinforced section is",
                    options: [
                        { key: "a", text: "Brittle" },
                        { key: "b", text: "Ductile" },
                        { key: "c", text: "Both" },
                        { key: "d", text: "None" }
                    ],
                    answer: "b",
                    explanation: "In an under-reinforced section, the steel yields first before concrete crushes, giving warning signs and exhibiting ductile behavior."
                },
                {
                    id: "cm13q026",
                    src: "DESI787-00109",
                    text: "The maximum ratio of depth of neutral axis of balanced section to effective depth of beam is",
                    options: [
                        { key: "a", text: "0.46" },
                        { key: "b", text: "0.53" },
                        { key: "c", text: "0.48" },
                        { key: "d", text: "0.61" }
                    ],
                    answer: "c",
                    explanation: "The limiting neutral axis depth follows from strain compatibility, and for Fe 415 it is 0.48d. For Fe 250 the steel yields at a lower strain so the limit rises to 0.53d, and for Fe 500 it falls to 0.46d. Keeping the neutral axis above the limit forces the steel to yield before the concrete crushes, which is what makes the failure ductile."
                },
                {
                    id: "cm13q027",
                    src: "DESI787-00110",
                    text: "The depth of neutral axis for use of singly reinforced section with 500 grade reinforcement should be less than",
                    options: [
                        { key: "a", text: "0.484" },
                        { key: "b", text: "0.536" },
                        { key: "c", text: "0.614" },
                        { key: "d", text: "0.466" }
                    ],
                    answer: "d",
                    explanation: "The limiting neutral axis depth follows from strain compatibility: xu,max over d equals 0.0035 divided by (0.0055 plus 0.87 fy over Es). For Fe 500 that is 0.0035 over 0.007675, which is about 0.46, so the neutral axis must stay above roughly 0.466d."
                },
                {
                    id: "cm13q028",
                    src: "DESI787-00111",
                    text: "Spacing between two longitudinal bars should not be more than",
                    options: [
                        { key: "a", text: "300 mm" },
                        { key: "b", text: "150 mm" },
                        { key: "c", text: "180 mm" },
                        { key: "d", text: "450 mm" }
                    ],
                    answer: "a",
                    explanation: "As per IS 456:2000, Clause 26.3.2, the horizontal distance between parallel main reinforcement bars should not be more than 300 mm."
                },
                {
                    id: "cm13q029",
                    src: "DESI787-00112",
                    text: "Side reinforcement should be provided for beam of depth more than",
                    options: [
                        { key: "a", text: "450 mm" },
                        { key: "b", text: "750 mm" },
                        { key: "c", text: "600 mm" },
                        { key: "d", text: "900 mm" }
                    ],
                    answer: "b",
                    explanation: "As per IS 456:2000, Clause 26.5.1.3, side face reinforcement should be provided when the depth of the web exceeds 750 mm."
                },
                {
                    id: "cm13q030",
                    src: "DESI787-00113",
                    text: "The maximum spacing between vertical stirrups of effective depth 360 mm is",
                    options: [
                        { key: "a", text: "300 mm" },
                        { key: "b", text: "450 mm" },
                        { key: "c", text: "270 mm" },
                        { key: "d", text: "130 mm" }
                    ],
                    answer: "c",
                    explanation: "As per IS 456:2000, Clause 26.5.1.5, the maximum spacing of shear reinforcement should not exceed 0.75d = 0.75 * 360 = 270 mm."
                },
                {
                    id: "cm13q031",
                    src: "DESI787-00114",
                    text: "If shear stress due to load is less than shear capacity of concrete section of beam,",
                    options: [
                        { key: "a", text: "shear reinforcement should not be provided" },
                        { key: "b", text: "design for shear reinforcement is done in every case" },
                        { key: "c", text: "shear reinforcement is not provided in any beam" },
                        { key: "d", text: "minimum shear reinforcement should be provided" }
                    ],
                    answer: "d",
                    explanation: "As per IS 456:2000, Clause 26.5.1.6, even if the calculated shear stress is less than the shear capacity of concrete, minimum shear reinforcement must be provided in all beams."
                },
                {
                    id: "cm13q032",
                    src: "DESI787-00115",
                    text: "Shear strength of concrete depends on",
                    options: [
                        { key: "a", text: "both" },
                        { key: "b", text: "longitudinal reinforcement" },
                        { key: "c", text: "grade of concrete" },
                        { key: "d", text: "none" }
                    ],
                    answer: "a",
                    explanation: "The shear strength of concrete (τ_c) depends on the grade of concrete and the percentage of tension reinforcement (p_t) as per IS 456:2000, Table 19."
                },
                {
                    id: "cm13q033",
                    src: "DESI787-00116",
                    text: "The shear load resisted by vertical shear reinforcement is",
                    options: [
                        { key: "a", text: "0.87 f_y A_sv d / s_v (sinα + cosα)" },
                        { key: "b", text: "0.87 f_y A_sv d / s_v" }
                    ],
                    answer: "b",
                    explanation: "For vertical stirrups (α=90°), the shear resistance is V_us = (0.87 f_y A_sv d) / s_v. The options have typographical errors, but the correct formula is 0.87 f_y A_sv d / s_v."
                },
                {
                    id: "cm13q034",
                    src: "DESI787-00117",
                    text: "The development length for tension bars",
                    options: [
                        { key: "a", text: "\\(\\frac{0.87 f_y \\phi}{5 \\tau_{bd}}\\)" },
                        { key: "b", text: "\\(\\frac{f_y \\phi}{4 \\tau_{bd}}\\)" },
                        { key: "c", text: "\\(\\frac{0.87 f_y \\phi}{4 \\tau_{bd}}\\)" },
                        { key: "d", text: "\\(\\frac{0.87 f_y \\phi}{3 \\tau_{bd}}\\)" }
                    ],
                    answer: "c",
                    explanation: "According to IS 456:2000 (Clause 26.2.1), the development length (Ld) is calculated using the formula: \\(L_d = \\frac{\\phi \\sigma_s}{4 \\tau_{bd}}\\) \\(=\\frac{0.87 f_y \\phi}{4 \\tau_{bd}}\\)"
                }
            ]
        },
        {
            id: "cm13soil",
            name: "Soil Mechanics and Foundation",
            subject: "Soil Mechanics",
            accent: "amber",
            blurb: "13 questions drawn from the Soil Mechanics and Foundation bank.",
            questions: [
                {
                    id: "cm13q035",
                    src: "SOIL136-00146",
                    text: "Coarse grained soils, containing fines between 5-12%, are designated by ______ symbol.",
                    options: [
                        { key: "a", text: "GW-GM and SP-SM" },
                        { key: "b", text: "CL-ML" },
                        { key: "c", text: "None" },
                        { key: "d", text: "Both (a) and (b)" }
                    ],
                    answer: "a",
                    explanation: "In USCS, if a coarse-grained soil contains 5-12% fines, a dual symbol is used (e.g., GW-GM, SP-SM). The first part indicates the primary gravel/sand classification, and the second indicates the type of fines (silt or clay)."
                },
                {
                    id: "cm13q036",
                    src: "SOIL136-00147",
                    text: "Sieve analysis is meant for ______.",
                    options: [
                        { key: "a", text: "coarse-grained soils" },
                        { key: "b", text: "fine-grained soils" },
                        { key: "c", text: "coarse-grained gravel" },
                        { key: "d", text: "silt" }
                    ],
                    answer: "a",
                    explanation: "Sieve analysis is a method used to determine the particle size distribution of coarse-grained soils (gravels and sands). Fine-grained soils (silts and clays) are analyzed using hydrometer analysis."
                },
                {
                    id: "cm13q037",
                    src: "SOIL136-00148",
                    text: "The portion retained on the ______ sieve is termed as the gravel fraction.",
                    options: [
                        { key: "a", text: "7.75mm" },
                        { key: "b", text: "4.75mm" },
                        { key: "c", text: "42.5micron" },
                        { key: "d", text: "75micron" }
                    ],
                    answer: "b",
                    explanation: "The gravel fraction consists of particles retained on the No. 4 sieve, which has an opening of 4.75 mm. '7.75mm' is likely a repeated error; the standard sieve for gravel is the 4.75mm (No. 4) sieve. Larger gravel is retained on sieves like the 3-inch or 3/4-inch."
                },
                {
                    id: "cm13q038",
                    src: "SOIL136-00149",
                    text: "The receiver at the bottom of the assembly in sieve shaking machine is ______.",
                    options: [
                        { key: "a", text: "3.75mm sieve" },
                        { key: "b", text: "42.5micron" },
                        { key: "c", text: "pan" },
                        { key: "d", text: "75micron" }
                    ],
                    answer: "c",
                    explanation: "The pan is placed at the very bottom of the stack of sieves to collect all the soil particles that pass through the finest sieve."
                },
                {
                    id: "cm13q039",
                    src: "SOIL136-00150",
                    text: "______ minutes of shaking is done for soil with small particles.",
                    options: [
                        { key: "a", text: "2" },
                        { key: "b", text: "15" },
                        { key: "c", text: "60" },
                        { key: "d", text: "10" }
                    ],
                    answer: "d",
                    explanation: "Standard practice for sieve analysis typically involves shaking for about 10 minutes for most soils to ensure adequate separation of particles."
                },
                {
                    id: "cm13q040",
                    src: "SOIL136-00151",
                    text: "The percentage of soil retained on each sieve is calculated on the basis of ______.",
                    options: [
                        { key: "a", text: "total mass" },
                        { key: "b", text: "total weight" },
                        { key: "c", text: "volume of sample" },
                        { key: "d", text: "density of soil" }
                    ],
                    answer: "a",
                    explanation: "The mass of soil retained on each sieve is divided by the total dry mass of the sample used for the test to calculate the percentage retained."
                },
                {
                    id: "cm13q041",
                    src: "SOIL136-00152",
                    text: "______ is used for washing the soil portion passing through 4.75 mm sieve.",
                    options: [
                        { key: "a", text: "distilled water" },
                        { key: "b", text: "2% of sodium hex metaphosphate per liter of water" },
                        { key: "c", text: "10% of brine solution" },
                        { key: "d", text: "kerosene" }
                    ],
                    answer: "b",
                    explanation: "A dispersing agent like sodium hexametaphosphate is added to water to break down soil aggregates and ensure that individual particles are washed through the sieves, preventing clumping."
                },
                {
                    id: "cm13q042",
                    src: "SOIL136-00153",
                    text: "The description ‘sandy silty clay’ signifies that:",
                    options: [
                        { key: "a", text: "the soil contains unequal proportions of the three constituents, in the order, sand &gt; silt &gt; clay." },
                        { key: "b", text: "there is no information regarding the relative proportions of the three." },
                        { key: "c", text: "the soil contains unequal proportions of the three constituents, in the order, clay &gt; silt &gt; sand." },
                        { key: "d", text: "the soil contains equal proportions of sand, silt and clay." }
                    ],
                    answer: "c",
                    explanation: "In standard soil description terminology, the last named component is the predominant one. Therefore, 'sandy silty clay' means the soil is primarily clay, with some silt and even less sand."
                },
                {
                    id: "cm13q043",
                    src: "SOIL136-00154",
                    text: "The fundamental equation of specific gravity (G) dry density (Vd) and unit weight of water (Vw) and void ratio (e) is ...",
                    options: [
                        { key: "a", text: "e = (∂Vw)/∂x" },
                        { key: "b", text: "e = (∂Vw)/∂yd" },
                        { key: "c", text: "yd = (∂Vw)/∂z" }
                    ],
                    answer: "c",
                    explanation: "This option seems to contain typographical errors. The fundamental relationship is γ_d = (G * γ_w) / (1 + e), where γ_d is dry unit weight, G is specific gravity, γ_w is unit weight of water, and e is void ratio. The correct option is not clearly stated among the choices."
                },
                {
                    id: "cm13q044",
                    src: "SOIL136-00155",
                    text: "A fundamental equation of specific gravity (G) water content (w) and degree of saturation (S) grid void ratio (e) is ...",
                    options: [
                        { key: "a", text: "e×S=w×G" },
                        { key: "b", text: "e×w=S×G" },
                        { key: "c", text: "e =w×G×S" },
                        { key: "d", text: "w =e×G×S" }
                    ],
                    answer: "a",
                    explanation: "The fundamental relationship is S * e = w * G, where S is degree of saturation, e is void ratio, w is water content, and G is specific gravity."
                },
                {
                    id: "cm13q045",
                    src: "SOIL136-00156",
                    text: "Effective stress is",
                    options: [
                        { key: "a", text: "the stress at particles contact" },
                        { key: "b", text: "a physical parameter that can be measured" },
                        { key: "c", text: "important because it is a function of engineering properties of soil" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "c",
                    explanation: "Effective stress (σ') = Total stress (σ) - Pore water pressure (u). It is not the stress at particle contacts nor directly measurable, but it controls the mechanical behavior of soil like shear strength and compressibility."
                },
                {
                    id: "cm13q046",
                    src: "SOIL136-00157",
                    text: "Effective stress on soil",
                    options: [
                        { key: "a", text: "increases voids ratio and decreases permeability" },
                        { key: "b", text: "increases both voids ratio and permeability" },
                        { key: "c", text: "Decreases both voids ratio and permeability" },
                        { key: "d", text: "Decreases voids ratio and increases permeability" }
                    ],
                    answer: "c",
                    explanation: "An increase in effective stress causes soil particles to pack more tightly, decreasing the void ratio (e). A lower void ratio reduces the size and connectivity of flow paths, thus decreasing permeability (k)."
                },
                {
                    id: "cm13q047",
                    src: "SOIL136-00158",
                    text: "A fully saturated soil is said to be ______",
                    options: [
                        { key: "a", text: "one phase system" },
                        { key: "b", text: "two phase system with soil and air" },
                        { key: "c", text: "three phase system" },
                        { key: "d", text: "two phase system with soil and water" }
                    ],
                    answer: "d",
                    explanation: "A fully saturated soil has water filling every void, so the air phase disappears and only solids and water remain, making it a two-phase system. A completely dry soil is the other two-phase case, solids and air, while partially saturated soil in the field is the general three-phase system."
                }
            ]
        },
        {
            id: "cm13watr",
            name: "Basic Water Resources Engineering",
            subject: "Water Resources",
            accent: "emerald",
            blurb: "12 questions drawn from the Basic Water Resources Engineering bank.",
            questions: [
                {
                    id: "cm13q048",
                    src: "WATE701-00135",
                    text: "Imaginary lines joining the points having equal rainfall depth in a given duration is known as",
                    options: [
                        { key: "a", text: "Isoliyets" },
                        { key: "b", text: "Isogenic lines" },
                        { key: "c", text: "Isocline line" },
                        { key: "d", text: "Agonic line" }
                    ],
                    answer: "a",
                    explanation: "Isohyets are contours of equal rainfall depth over a given period, drawn by interpolating between gauge readings with knowledge of the terrain. The isohyetal method then computes catchment average rainfall by weighting each depth band by the area between successive lines, which is why it handles orographic rainfall better than Thiessen polygons."
                },
                {
                    id: "cm13q049",
                    src: "WATE701-00136",
                    text: "Double mass curve technique is adopted to",
                    options: [
                        { key: "a", text: "Find the average rainfall over a number of years" },
                        { key: "b", text: "Check the consistency of rain gauge records" },
                        { key: "c", text: "Find the number of rain gauges required" },
                        { key: "d", text: "To estimate the missing rainfall data" }
                    ],
                    answer: "b",
                    explanation: "The double mass curve is a plot of the cumulative data of one variable against the cumulative data of a related variable for the same period. It is primarily used to check for and correct inconsistencies (like relocations or changes in exposure) in the rainfall record of a single station by comparing it to the cumulative average of several surrounding stable stations."
                },
                {
                    id: "cm13q050",
                    src: "WATE701-00137",
                    text: "The mass curve of rainfall of a storm is a plot of",
                    options: [
                        { key: "a", text: "Rainfall depth for various equal durations plotted in decreasing order" },
                        { key: "b", text: "Rainfall intensity versus time" },
                        { key: "c", text: "Accumulated precipitation versus time in chronological order" },
                        { key: "d", text: "Accumulated rainfall intensity versus time" }
                    ],
                    answer: "c",
                    explanation: "A mass curve (or cumulative rainfall curve) is a graphical representation of the total precipitation accumulated against time, from the beginning of a storm to its end. It shows the running total."
                },
                {
                    id: "cm13q051",
                    src: "WATE701-00138",
                    text: "A plot between rainfall intensity versus time is called",
                    options: [
                        { key: "a", text: "Hydrograph" },
                        { key: "b", text: "Mass curve" },
                        { key: "c", text: "Isohyet" },
                        { key: "d", text: "Hyetograph" }
                    ],
                    answer: "d",
                    explanation: "A hyetograph is a bar or line plot of rainfall intensity against time through a storm, so its area is the total depth. It is the input to a unit hydrograph analysis, whereas a hydrograph plots discharge against time and a mass curve plots accumulated depth."
                },
                {
                    id: "cm13q052",
                    src: "WATE701-00139",
                    text: "The Thiessen polygon is",
                    options: [
                        { key: "a", text: "A representative area used for weighing the observed station precipitation" },
                        { key: "b", text: "A polygon obtained by joining adjoining rain gauge stations" },
                        { key: "c", text: "An area used in construction of DAD curve" },
                        { key: "d", text: "The descriptive term for the shape of hydrograph" }
                    ],
                    answer: "a",
                    explanation: "The Thiessen polygon method is a technique for calculating areal average rainfall. Each rain gauge station is associated with a polygon area that is closer to that station than to any other. The measured precipitation at a station is applied to its entire polygon area, and the average rainfall is the area-weighted average of all stations."
                },
                {
                    id: "cm13q053",
                    src: "WATE701-00140",
                    text: "Depth area duration curve of precipitation are drawn as",
                    options: [
                        { key: "a", text: "Minimizing envelopes through the appropriate data points" },
                        { key: "b", text: "Maximizing envelope through the appropriate data points" },
                        { key: "c", text: "Best fit mean curves through the appropriate data point" },
                        { key: "d", text: "Best fit straight lines through the appropriate data points" }
                    ],
                    answer: "b",
                    explanation: "Depth-Area-Duration (DAD) curves are drawn as enveloping curves that represent the maximum precipitation amounts for various areas and durations observed during extreme storm events. They are used for design purposes like spillway capacity."
                },
                {
                    id: "cm13q054",
                    src: "WATE701-00141",
                    text: "Depth area duration curves of precipitation at a station would normally be",
                    options: [
                        { key: "a", text: "Curves concave downwards with duration increasing outwards" },
                        { key: "b", text: "Curves concave upwards with duration decreasing outwards" },
                        { key: "c", text: "Curves concave upwards with duration increasing outwards" },
                        { key: "d", text: "Curves concave downwards with duration decreasing outwards" }
                    ],
                    answer: "c",
                    explanation: "For a given duration, the average rainfall depth decreases as the area increases, making the curve concave upwards. For a given area, the rainfall depth increases with duration. When plotted together for different durations, the curves for longer durations will lie above and be less steep (spread outwards) than those for shorter durations."
                },
                {
                    id: "cm13q055",
                    src: "WATE701-00142",
                    text: "The most suitable chemical which can be applied to the water surface for reducing evaporation",
                    options: [
                        { key: "a", text: "Methyl alcohol" },
                        { key: "b", text: "Ethyl alcohol" },
                        { key: "c", text: "Butyl alcohol" },
                        { key: "d", text: "Cetyl alcohol" }
                    ],
                    answer: "d",
                    explanation: "Cetyl alcohol (hexadecanol) forms a monomolecular layer on the water surface. This layer acts as a barrier to water molecules, significantly reducing the rate of evaporation without affecting water quality adversely, making it the most suitable choice."
                },
                {
                    id: "cm13q056",
                    src: "WATE701-00143",
                    text: "Wind speed is measured with",
                    options: [
                        { key: "a", text: "Anemometer" },
                        { key: "b", text: "A wind vane" },
                        { key: "c", text: "A heliometer" },
                        { key: "d", text: "Stevenson box" }
                    ],
                    answer: "a",
                    explanation: "An anemometer is a device specifically designed to measure wind speed. A wind vane measures wind direction. A Stevenson box is a shelter for meteorological instruments. A heliometer measures the sun's diameter."
                },
                {
                    id: "cm13q057",
                    src: "WATE701-00144",
                    text: "Interception losses are due to",
                    options: [
                        { key: "a", text: "Evaporation" },
                        { key: "b", text: "Transpiration" },
                        { key: "c", text: "Streamflow" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "a",
                    explanation: "Interception loss refers to the portion of precipitation that is caught by vegetation (leaves, stems) and subsequently evaporates back into the atmosphere before reaching the ground. It is not related to transpiration (water loss through plants) or direct streamflow."
                },
                {
                    id: "cm13q058",
                    src: "WATE701-00145",
                    text: "Lysimeter is used to measure",
                    options: [
                        { key: "a", text: "Infiltration" },
                        { key: "b", text: "Evaporation" },
                        { key: "c", text: "Evapotranspiration" },
                        { key: "d", text: "Vapor pressure" }
                    ],
                    answer: "c",
                    explanation: "A lysimeter is a measuring device used to determine the actual evapotranspiration rate by measuring the water balance of a isolated block of soil (mass of water entering and leaving the system)."
                },
                {
                    id: "cm13q059",
                    src: "WATE701-00146",
                    text: "The infiltration capacity during rain storm is considerably reduced due to",
                    options: [
                        { key: "a", text: "Surface detention" },
                        { key: "b", text: "Soil moisture" },
                        { key: "c", text: "Compaction due to rain" },
                        { key: "d", text: "All" }
                    ],
                    answer: "d",
                    explanation: "Surface detention (water ponded on the surface), increased soil moisture (which reduces the suction head), and compaction or sealing of the soil surface by raindrop impact all contribute to a decrease in infiltration capacity as a storm progresses."
                }
            ]
        },
        {
            id: "cm13hydr",
            name: "Hydropower",
            subject: "Hydropower",
            accent: "cyan",
            blurb: "9 questions drawn from the Hydropower bank.",
            questions: [
                {
                    id: "cm13q060",
                    src: "HYDR626-00104",
                    text: "Which kind of turbine is a Fourneyron Turbine?",
                    options: [
                        { key: "a", text: "Outward flow turbine" },
                        { key: "b", text: "Inward flow turbine" },
                        { key: "c", text: "Mixed flow turbine" },
                        { key: "d", text: "Radial flow turbine" }
                    ],
                    answer: "a",
                    explanation: "The Fourneyron turbine is an early type of reaction turbine where water enters the runner at the center and flows radially outward. It is an example of an outward flow turbine."
                },
                {
                    id: "cm13q061",
                    src: "HYDR626-00105",
                    text: "The main function of nozzle is to ______.",
                    options: [
                        { key: "a", text: "Varying temperatures" },
                        { key: "b", text: "Pressure variations" },
                        { key: "c", text: "Load variations" },
                        { key: "d", text: "Heat variations" }
                    ],
                    answer: "b",
                    explanation: "The primary function of a nozzle in an impulse turbine is to convert the pressure energy of the water into a high-speed jet of kinetic energy. This is achieved by a controlled pressure drop and variation in cross-sectional area."
                },
                {
                    id: "cm13q062",
                    src: "HYDR626-00106",
                    text: "Which kind of turbine is a Pelton wheel turbine?",
                    options: [
                        { key: "a", text: "Radial flow turbine" },
                        { key: "b", text: "Outward flow turbine" },
                        { key: "c", text: "Tangential flow turbine" },
                        { key: "d", text: "Inward flow turbine" }
                    ],
                    answer: "c",
                    explanation: "In a Pelton wheel, the jet of water strikes the buckets tangentially to the path of rotation. Therefore, it is classified as a tangential flow impulse turbine."
                },
                {
                    id: "cm13q063",
                    src: "HYDR626-00108",
                    text: "The hydraulic turbine suitable for a range of 95 to 440 rpm is",
                    options: [
                        { key: "a", text: "Pelton wheel" },
                        { key: "b", text: "Kaplan turbine" },
                        { key: "c", text: "Bulb turbine" },
                        { key: "d", text: "Francis turbine" }
                    ],
                    answer: "d",
                    explanation: "Francis turbines are reaction turbines designed for medium head and medium flow applications. Their typical operational speed range (e.g., 95 to 440 rpm) fits well with the synchronous speeds required for electrical generators connected to medium-head grid systems."
                },
                {
                    id: "cm13q064",
                    src: "HYDR626-00109",
                    text: "Which component of a hydropower plant is responsible for converting mechanical energy into electrical energy?",
                    options: [
                        { key: "a", text: "Generator" },
                        { key: "b", text: "Turbine" },
                        { key: "c", text: "Penstock" },
                        { key: "d", text: "Transformer" }
                    ],
                    answer: "a",
                    explanation: "The generator is the machine that is directly coupled to the turbine shaft. It operates on the principle of electromagnetic induction to convert the rotational mechanical energy from the turbine into electrical energy."
                },
                {
                    id: "cm13q065",
                    src: "HYDR626-00110",
                    text: "Which component of a hydropower plant is responsible for distributing electricity to the Power Grid?",
                    options: [
                        { key: "a", text: "Generator" },
                        { key: "b", text: "Transmission Lines" },
                        { key: "c", text: "Transformer" },
                        { key: "d", text: "Penstock" }
                    ],
                    answer: "b",
                    explanation: "While transformers step up the voltage for efficient transmission, the physical conductors (overhead lines or cables) known as transmission lines are responsible for the actual distribution of electricity over distances to the grid and consumers."
                },
                {
                    id: "cm13q066",
                    src: "HYDR626-00111",
                    text: "Which type of turbine is a Francis Turbine?",
                    options: [
                        { key: "a", text: "Impulse Turbine" },
                        { key: "b", text: "Screw Turbine" },
                        { key: "c", text: "Reaction turbine" },
                        { key: "d", text: "Turbo turbine" }
                    ],
                    answer: "c",
                    explanation: "The Francis turbine is the most common type of reaction turbine. It operates by having water enter the runner radially and exit axially, with both pressure and velocity changing through the runner."
                },
                {
                    id: "cm13q067",
                    src: "HYDR626-00112",
                    text: "Pelton turbine is operated under;",
                    options: [
                        { key: "a", text: "Low head and high discharge" },
                        { key: "b", text: "Medium head and high discharge" },
                        { key: "c", text: "Medium head and medium discharge" },
                        { key: "d", text: "High head and low discharge" }
                    ],
                    answer: "d",
                    explanation: "The Pelton wheel is an impulse turbine. It is most efficient under conditions of very high head (often hundreds of meters) and relatively low flow rates (discharge)."
                },
                {
                    id: "cm13q068",
                    src: "HYDR626-00113",
                    text: "Which reservoir is helpful in permitting the pumps or the water treatment plants to work at a uniform rate?",
                    options: [
                        { key: "a", text: "Distribution reservoir" },
                        { key: "b", text: "Storage reservoir" },
                        { key: "c", text: "Detention reservoir" },
                        { key: "d", text: "Multipurpose reservoir" }
                    ],
                    answer: "a",
                    explanation: "A distribution reservoir stores treated water near the point of demand. It absorbs fluctuations in water consumption, allowing pumps and treatment plants to operate at a constant, efficient rate, thus saving energy and reducing wear on equipment."
                }
            ]
        },
        {
            id: "cm13irri",
            name: "Irrigation and Drainage",
            subject: "Irrigation",
            accent: "emerald",
            blurb: "11 questions drawn from the Irrigation and Drainage bank.",
            questions: [
                {
                    id: "cm13q069",
                    src: "IRRI951-00124",
                    text: "The upward acceleration of dam due to seismic activity will ______",
                    options: [
                        { key: "a", text: "Increase the base pressure" },
                        { key: "b", text: "decrease the base pressure" },
                        { key: "c", text: "not affect the effective weight of the dam" },
                        { key: "d", text: "increase the horizontal dynamic force" }
                    ],
                    answer: "b",
                    explanation: "Upward seismic acceleration reduces the effective weight of the dam. This reduction in the downward force decreases the compressive stress (base pressure) at the base of the dam, which can be critical for stability."
                },
                {
                    id: "cm13q070",
                    src: "IRRI951-00125",
                    text: "What is the average value of acceleration that is sufficient for high dams in seismic zones? (g is the acceleration due to gravity)",
                    options: [
                        { key: "a", text: "0.05g to 0.1g" },
                        { key: "b", text: "0.3gs" },
                        { key: "c", text: "0.1g to 0.15g" },
                        { key: "d", text: "0.15g" }
                    ],
                    answer: "c",
                    explanation: "For high dams located in seismic zones, a seismic coefficient (fraction of g) between 0.1 and 0.15 is commonly used in design to account for earthquake forces. This value is based on historical seismic data and risk assessment."
                },
                {
                    id: "cm13q071",
                    src: "IRRI951-00126",
                    text: "What is Von Karman’s formula for hydrodynamic force (Pe)?",
                    options: [
                        { key: "a", text: "0.555K_AV_wH_{23}" },
                        { key: "b", text: "0.777K_AV_wH_{2}" },
                        { key: "c", text: "0.555K_AV_wK_2" },
                        { key: "d", text: "0.555K_AV_wH^2" }
                    ],
                    answer: "d",
                    explanation: "Von Karman's formula for the total hydrodynamic force (P_e) on a dam face during an earthquake is P_e = 0.555 * K_h * γ_w * H², where K_h is the seismic coefficient, γ_w is the unit weight of water, and H is the depth of water."
                },
                {
                    id: "cm13q072",
                    src: "IRRI951-00127",
                    text: "On flatlands what type of canal alignment is used?",
                    options: [
                        { key: "a", text: "Watershed Canal" },
                        { key: "b", text: "Side Slope Canal" },
                        { key: "c", text: "Contour Canal" },
                        { key: "d", text: "Field Channel" }
                    ],
                    answer: "a",
                    explanation: "In flatlands, a watershed canal (or ridge canal) is aligned along the natural ridge or watershed. This allows for gravity flow irrigation on both sides of the canal, maximizing the commanded area."
                },
                {
                    id: "cm13q073",
                    src: "IRRI951-00128",
                    text: "Inflow and Outflow method is generally used to measure ______",
                    options: [
                        { key: "a", text: "Transpiration loss" },
                        { key: "b", text: "seepage loss" },
                        { key: "c", text: "Evaporation loss" },
                        { key: "d", text: "percolation loss" }
                    ],
                    answer: "b",
                    explanation: "The inflow-outflow method measures seepage loss in a canal reach. It involves measuring the discharge at the beginning (inflow) and end (outflow) of a test reach; the difference, after accounting for other losses, is attributed to seepage."
                },
                {
                    id: "cm13q074",
                    src: "IRRI951-00129",
                    text: "What type of losses can be mainly avoided by lining the canals?",
                    options: [
                        { key: "a", text: "Evaporation Losses" },
                        { key: "b", text: "Erosion of Canal Bed" },
                        { key: "c", text: "Seepage Losses" },
                        { key: "d", text: "Discharge Losses at Branch Canal" }
                    ],
                    answer: "c",
                    explanation: "Lining canals with impervious materials primarily prevents water from seeping into the surrounding soil, thus avoiding seepage losses."
                },
                {
                    id: "cm13q075",
                    src: "IRRI951-00130",
                    text: "What is the name given to the land unfit for agriculture due to waterlogging?",
                    options: [
                        { key: "a", text: "Desert" },
                        { key: "b", text: "Tundra" },
                        { key: "c", text: "Waterlogged Area" },
                        { key: "d", text: "Thur" }
                    ],
                    answer: "d",
                    explanation: "Land that becomes waterlogged and saline, rendering it unfit for agriculture, is commonly known as 'Thur' or 'Kallar' in various regions."
                },
                {
                    id: "cm13q076",
                    src: "IRRI951-00131",
                    text: "Design a lined canal carrying a discharge of 20 cumecs. The slope is 1 in 7000. Assume suitable values for side slopes and lining.[Given rugosity coefficient as 0.015]",
                    options: [
                        { key: "a", text: "Side Slope = 1.5: 1, Depth = 3.77 m" },
                        { key: "b", text: "Side Slope = 1.2: 1, Depth = 4.4 m" },
                        { key: "c", text: "Side Slope = 1.4: 1, Depth = 4.1 m" },
                        { key: "d", text: "Side Slope = 1.3: 1, Depth = 4.5 m" }
                    ],
                    answer: "a",
                    explanation: "The most economical section for a lined canal is a half-hexagon. Using Manning's formula (Q = (1/n)*A*R^(2/3)*S^(1/2)) with common side slopes of 1.5:1 (H:V) for lined canals, the calculated depth for given parameters (Q=20, S=1/7000, n=0.015) is approximately 3.77 m."
                },
                {
                    id: "cm13q077",
                    src: "IRRI951-00132",
                    text: "Design a lined canal to carry a discharge of 400 cumecs and slope is 1 in 6000. Take side slopes as 1 : 1 and rugosity constant as 0.012. Assume limiting velocity as 3 m/sec.",
                    options: [
                        { key: "a", text: "Total Depth = 6.3 m, Bed Width = 15 m" },
                        { key: "b", text: "Total Depth = 6.28 m, Bed Width = 14.2 m" },
                        { key: "c", text: "Total Depth = 6.5 m, Bed Width = 14 m" },
                        { key: "d", text: "Total Depth = 6.25 m, Bed Width = 14.4 m" }
                    ],
                    answer: "b",
                    explanation: "Using Manning's formula and ensuring the velocity does not exceed the limiting value (3 m/s), the dimensions are iteratively calculated. For Q=400 cumecs, S=1/6000, n=0.012, z=1, the correct option satisfies both the discharge and velocity criteria."
                },
                {
                    id: "cm13q078",
                    src: "IRRI951-00133",
                    text: "Depending on what factor does the lining of a canal can increase the capacity of the canal?",
                    options: [
                        { key: "a", text: "Width of the Canal" },
                        { key: "b", text: "Type of Flow" },
                        { key: "c", text: "Velocity" },
                        { key: "d", text: "Side Slope" }
                    ],
                    answer: "c",
                    explanation: "Lining reduces the surface roughness (Manning's n), which allows for a higher velocity of flow for the same cross-sectional area and slope. A higher velocity means a higher discharge (capacity) for the same canal dimensions."
                },
                {
                    id: "cm13q079",
                    src: "IRRI951-00134",
                    text: "Mathematically, depending on what factor we can say velocity increases the capacity of the canal?",
                    options: [
                        { key: "a", text: "Coefficient of Viscosity" },
                        { key: "b", text: "Coefficient of Capillarity" },
                        { key: "c", text: "Coefficient of Resistance" },
                        { key: "d", text: "Coefficient of Roughness" }
                    ],
                    answer: "d",
                    explanation: "The velocity in an open channel is inversely proportional to the coefficient of roughness (e.g., Manning's n). A lower 'n' value (achieved by lining) increases velocity, which in turn increases the canal's discharge capacity (Q = A * V)."
                }
            ]
        },
        {
            id: "cm13tran",
            name: "Transportation",
            subject: "Transportation",
            accent: "rose",
            blurb: "11 questions drawn from the Transportation bank.",
            questions: [
                {
                    id: "cm13q080",
                    src: "TRAN808-00124",
                    text: "The maximum length of vehicles considered for design of roads in Nepal are",
                    options: [
                        { key: "a", text: "18.0 m" },
                        { key: "b", text: "20.0 m" },
                        { key: "c", text: "18.50 m" },
                        { key: "d", text: "18.60 m" }
                    ],
                    answer: "a",
                    explanation: "The standard maximum length for a single-unit design vehicle (e.g., a large truck or bus) in Nepal is 18.0 meters. This dimension is critical for designing curve widening, turning radii, and parking facilities."
                },
                {
                    id: "cm13q081",
                    src: "TRAN808-00125",
                    text: "The materials not included in highway construction are ______.",
                    options: [
                        { key: "a", text: "Stone" },
                        { key: "b", text: "Petrol" },
                        { key: "c", text: "Dust" },
                        { key: "d", text: "Soil" }
                    ],
                    answer: "b",
                    explanation: "Petrol is a fuel and not a standard construction material for building highways. Stone, dust (as filler), and soil (for embankments/subgrade) are all commonly used."
                },
                {
                    id: "cm13q082",
                    src: "TRAN808-00126",
                    text: "For places where there is a passage of flood water then the highway has to be built on ______.",
                    options: [
                        { key: "a", text: "Subway" },
                        { key: "b", text: "Overpass" },
                        { key: "c", text: "Embankment" },
                        { key: "d", text: "Underpass" }
                    ],
                    answer: "c",
                    explanation: "An embankment is a raised structure that elevates the highway above flood level, allowing water to pass underneath without damaging the road."
                },
                {
                    id: "cm13q083",
                    src: "TRAN808-00127",
                    text: "The layer which is constructed above embankment is called ______.",
                    options: [
                        { key: "a", text: "Fill" },
                        { key: "b", text: "Base" },
                        { key: "c", text: "Sub base" },
                        { key: "d", text: "Sub grade" }
                    ],
                    answer: "d",
                    explanation: "The subgrade is the native soil or improved soil layer that forms the foundation for the pavement structure, built upon the embankment fill."
                },
                {
                    id: "cm13q084",
                    src: "TRAN808-00128",
                    text: "The highest CBR number is required for ______.",
                    options: [
                        { key: "a", text: "Sub grade" },
                        { key: "b", text: "Pavement" },
                        { key: "c", text: "Sub base" },
                        { key: "d", text: "Base" }
                    ],
                    answer: "a",
                    explanation: "The California Bearing Ratio (CBR) measures soil strength. The subgrade, being the foundational layer, requires the highest strength (CBR value) to support the entire pavement structure."
                },
                {
                    id: "cm13q085",
                    src: "TRAN808-00130",
                    text: "Bitumen is a by-product of ______.",
                    options: [
                        { key: "a", text: "Wood" },
                        { key: "b", text: "Petroleum" },
                        { key: "c", text: "Kerosene" },
                        { key: "d", text: "Coal" }
                    ],
                    answer: "b",
                    explanation: "Bitumen is a viscous liquid or solid derived from the distillation of crude petroleum during the refining process. It is a primary binder in asphalt pavements."
                },
                {
                    id: "cm13q086",
                    src: "TRAN808-00131",
                    text: "Tar is a by-product of ______.",
                    options: [
                        { key: "a", text: "Wood" },
                        { key: "b", text: "Petroleum" },
                        { key: "c", text: "Coal" },
                        { key: "d", text: "Kerosene" }
                    ],
                    answer: "c",
                    explanation: "Coal tar is a thick black liquid produced during the destructive distillation of coal to make coke or coal gas. It was historically used as a binder before being largely replaced by bitumen."
                },
                {
                    id: "cm13q087",
                    src: "TRAN808-00132",
                    text: "In the initial stage of construction which type of pavement is cheap?",
                    options: [
                        { key: "a", text: "Flexible" },
                        { key: "b", text: "Rigid" },
                        { key: "c", text: "Composite" },
                        { key: "d", text: "WBM" }
                    ],
                    answer: "d",
                    explanation: "WBM (Water Bound Macadam) roads are the cheapest type of pavement used in the initial stages of construction. They consist of crushed aggregates bound with water and screenings, laid in layers and compacted.While not as durable or smooth as flexible or rigid pavements, they are economical and easy to construct, making them suitable for low-traffic or temporary roads. Hence, in the initial stage of construction, WBM pavement is the cheapest."
                },
                {
                    id: "cm13q088",
                    src: "TRAN808-00133",
                    text: "Aggregates obtained from which type of rocks are strong?",
                    options: [
                        { key: "a", text: "Igneous" },
                        { key: "b", text: "Sedimentary" },
                        { key: "c", text: "Metamorphic" },
                        { key: "d", text: "Rocks formed by weathering" }
                    ],
                    answer: "a",
                    explanation: "Igneous rocks (e.g., granite, basalt) are formed from cooled magma and are generally very strong, hard, and dense, making them excellent high-quality aggregates for construction."
                },
                {
                    id: "cm13q089",
                    src: "TRAN808-00134",
                    text: "What is the maximum size that can be used in plain concrete?",
                    options: [
                        { key: "a", text: "20 mm" },
                        { key: "b", text: "40 mm" },
                        { key: "c", text: "100 mm" },
                        { key: "d", text: "200 mm" }
                    ],
                    answer: "b",
                    explanation: "IS codes typically recommend a maximum nominal size of 20mm to 40mm for reinforced concrete to ensure proper compaction and bond with reinforcement. 40mm is often used for plain concrete in mass structures."
                },
                {
                    id: "cm13q090",
                    src: "TRAN808-00135",
                    text: "The flaky aggregates should not exceed ______.",
                    options: [
                        { key: "a", text: "1/2 of mean dimension" },
                        { key: "b", text: "3/4th of mean dimension" },
                        { key: "c", text: "3/5th of mean dimension" },
                        { key: "d", text: "1/8th of mean dimension" }
                    ],
                    answer: "c",
                    explanation: "Flakiness index is the percentage by weight of particles whose thickness is less than 0.6 times (3/5th) their mean dimension. Excessive flaky aggregates are undesirable as they compromise strength and workability."
                }
            ]
        },
        {
            id: "cm13wate",
            name: "Water Supply, Sanitation and Environment",
            subject: "Water Supply",
            accent: "blue",
            blurb: "10 questions drawn from the Water Supply, Sanitation and Environment bank.",
            questions: [
                {
                    id: "cm13q091",
                    src: "WATE813-00115",
                    text: "Where undertaken, EIA should be used to help determine whether consent is given for development",
                    options: [
                        { key: "a", text: "never" },
                        { key: "b", text: "hardly ever" },
                        { key: "c", text: "often" },
                        { key: "d", text: "always" }
                    ],
                    answer: "d",
                    explanation: "Environmental Impact Assessment (EIA) is a fundamental decision-making tool. When the EIA process is legally mandated for a project, its findings should always be a primary factor in determining whether development consent is granted."
                },
                {
                    id: "cm13q092",
                    src: "WATE813-00116",
                    text: "The primary reason for Environmental Impact Assessment is to",
                    options: [
                        { key: "a", text: "identify the environmental consequences of development in advance" },
                        { key: "b", text: "mitigate existing environmental impacts of development" },
                        { key: "c", text: "predict the size of impacts of developments" },
                        { key: "d", text: "describe proposed developments" }
                    ],
                    answer: "a",
                    explanation: "The core purpose of an EIA is proactive identification and prediction of potential environmental consequences before a development decision is made, allowing for preventive measures and informed decision-making."
                },
                {
                    id: "cm13q093",
                    src: "WATE813-00117",
                    text: "Which of following statements are false?",
                    options: [
                        { key: "a", text: "EIA is intended to be a rational and comprehensive assessment" },
                        { key: "b", text: "Land use planning systems do the same thing as EIA" },
                        { key: "c", text: "EIA is costly and time consuming" },
                        { key: "d", text: "EIA is a process" }
                    ],
                    answer: "b",
                    explanation: "Land use planning and EIA are related but distinct tools. Land use planning allocates land for specific purposes, while EIA is a process to assess the specific environmental impacts of a proposed project within that planning framework."
                },
                {
                    id: "cm13q094",
                    src: "WATE813-00118",
                    text: "EIA is necessary because?",
                    options: [
                        { key: "a", text: "development is bad for the environment" },
                        { key: "b", text: "there is growing interest in sustainability" },
                        { key: "c", text: "environmental impacts of developments are of public interest" },
                        { key: "d", text: "none of the above" }
                    ],
                    answer: "c",
                    explanation: "EIA is necessary to ensure transparency, public participation, and informed decision-making regarding developments that can significantly affect the environment, which is a matter of public interest."
                },
                {
                    id: "cm13q095",
                    src: "WATE813-00119",
                    text: "Which environmental principle best reflects the intent of EIA?",
                    options: [
                        { key: "a", text: "polluter pays" },
                        { key: "b", text: "prevention is better than cure" },
                        { key: "c", text: "reduce reuse recycle" },
                        { key: "d", text: "none of the above" }
                    ],
                    answer: "b",
                    explanation: "The core philosophy of EIA is preventive: to identify and mitigate potential negative environmental impacts *before* they occur, aligning perfectly with the principle that prevention is better than cure."
                },
                {
                    id: "cm13q096",
                    src: "WATE813-00120",
                    text: "Environmental impacts can be of types:",
                    options: [
                        { key: "a", text: "4" },
                        { key: "b", text: "3" },
                        { key: "c", text: "5" },
                        { key: "d", text: "2" }
                    ],
                    answer: "a",
                    explanation: "Environmental impacts are generally categorized into four main types: air pollution, water pollution, land degradation, and noise pollution. Some frameworks may include others, but a common classification uses these four."
                },
                {
                    id: "cm13q097",
                    src: "WATE813-00121",
                    text: "A short-term environmental impact assessment EIA has a time period of:",
                    options: [
                        { key: "a", text: "2-5 years" },
                        { key: "b", text: "5-10 years" },
                        { key: "c", text: "10-15 years" },
                        { key: "d", text: "5-7 years" }
                    ],
                    answer: "b",
                    explanation: "In EIA terminology, impacts are often assessed over different timeframes. A short-term impact is typically considered to last for a period of 5 to 10 years following project implementation."
                },
                {
                    id: "cm13q098",
                    src: "WATE813-00122",
                    text: "How many stages are there in EIA:",
                    options: [
                        { key: "a", text: "5" },
                        { key: "b", text: "3" },
                        { key: "c", text: "4" },
                        { key: "d", text: "2" }
                    ],
                    answer: "c",
                    explanation: "The EIA process typically follows four key stages: 1) Screening, 2) Scoping, 3) Impact Analysis &amp; Mitigation, and 4) Reporting (EIA Report), Review, and Decision Making. Monitoring is sometimes added as a fifth stage."
                },
                {
                    id: "cm13q099",
                    src: "WATE813-00123",
                    text: "The full form of IEE is",
                    options: [
                        { key: "a", text: "Illegal Environmental Examination" },
                        { key: "b", text: "Initial Environmental assessment" },
                        { key: "c", text: "Initial Environment Examination" },
                        { key: "d", text: "Initial Environmental Examination" }
                    ],
                    answer: "d",
                    explanation: "IEE stands for Initial Environmental Examination. It is a preliminary environmental review to determine if a full-scale EIA is required for a project."
                },
                {
                    id: "cm13q100",
                    src: "WATE813-00124",
                    text: "The full form of EIA is",
                    options: [
                        { key: "a", text: "Environmental Impact assessment" },
                        { key: "b", text: "Initial Environmental Impact assessment" },
                        { key: "c", text: "None of the above" }
                    ],
                    answer: "a",
                    explanation: "EIA is the standard acronym for Environmental Impact Assessment. The repeated option is a typo in the original question, but the correct answer is clear."
                }
            ]
        }
    ]
};

/* Registered lazily — js/civil.js injects this file when the set is opened. */
window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["civil-13"] = CIVIL_MODEL_13;
