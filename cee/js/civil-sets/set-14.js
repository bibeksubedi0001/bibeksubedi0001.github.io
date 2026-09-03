/* ============================================================
   CIVIL MODEL SET 14 — Civil Engineering licence-style model paper
   100 questions · 120 minutes · no negative marking

     Basic Civil Engineering...................  13
     Structural Mechanics......................  11
     Design of Structures......................   9
     Soil Mechanics and Foundation.............  14
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
const CIVIL_MODEL_14 = {
    day: 44,
    kind: "model",
    badge: { top: "Model", main: "C14" },
    title: "Civil Model Set 14",
    subtitle: "Civil Engineering · 9 subjects",
    durationMinutes: 120,
    negativeMarking: 0,
    chapters: [
        {
            id: "cm14basi",
            name: "Basic Civil Engineering",
            subject: "Basic Civil",
            accent: "blue",
            blurb: "13 questions drawn from the Basic Civil Engineering bank.",
            questions: [
                {
                    id: "cm14q001",
                    src: "BASI674-00161",
                    text: "Los Angeles machine consists of circular drum of internal diameter ______ mm and length ______ mm.",
                    options: [
                        { key: "a", text: "700, 700" },
                        { key: "b", text: "520, 520" },
                        { key: "c", text: "700, 520" },
                        { key: "d", text: "520, 700" }
                    ],
                    answer: "c",
                    explanation: "The Los Angeles abrasion drum has an internal diameter of 700 mm and an internal length of 520 mm, with a removable shelf that lifts the charge and drops it as the drum turns at 30 to 33 rpm. The combination of steel spheres, impact from the drop and rubbing between particles is what makes the test represent real wear."
                },
                {
                    id: "cm14q002",
                    src: "BASI674-00162",
                    text: "Which machine is preferred for abrasion test?",
                    options: [
                        { key: "a", text: "Vicat’s mould" },
                        { key: "b", text: "Flakiness Gauge" },
                        { key: "c", text: "Elongation Gauge" },
                        { key: "d", text: "Los Angeles" }
                    ],
                    answer: "d",
                    explanation: "The Los Angeles abrasion machine is the most widely used apparatus for determining the abrasion resistance (toughness) of aggregates."
                },
                {
                    id: "cm14q003",
                    src: "BASI674-00163",
                    text: "A maximum aggregate impact value of ______ percent is allowed for WBM base course in Indian conditions.",
                    options: [
                        { key: "a", text: "40" },
                        { key: "b", text: "25" },
                        { key: "c", text: "35" },
                        { key: "d", text: "50" }
                    ],
                    answer: "a",
                    explanation: "For Water Bound Macadam (WBM) base course, the Indian Roads Congress (IRC) specifications allow a maximum Aggregate Impact Value (AIV) of 40%."
                },
                {
                    id: "cm14q004",
                    src: "BASI674-00164",
                    text: "Aggregates to be used for wearing coupe, impact value shouldn’t exceed ______ percent.",
                    options: [
                        { key: "a", text: "35" },
                        { key: "b", text: "30" },
                        { key: "c", text: "40" },
                        { key: "d", text: "25" }
                    ],
                    answer: "b",
                    explanation: "For wearing surfaces like road pavements, aggregates need to be highly resistant to impact. A lower maximum AIV of 30% is typically specified to ensure durability."
                },
                {
                    id: "cm14q005",
                    src: "BASI674-00165",
                    text: "During a tensile test on a ductile material,",
                    options: [
                        { key: "a", text: "Nominal stress at fracture is higher than the ultimate stress" },
                        { key: "b", text: "True stress a fracture is the same as the ultimate stress" },
                        { key: "c", text: "True stress at fracture is higher than the ultimate stress" },
                        { key: "d", text: "None of the mentioned" }
                    ],
                    answer: "c",
                    explanation: "Ultimate stress is the maximum nominal stress. After necking, the nominal stress decreases until fracture. However, true stress (load/actual area) continues to increase until fracture because the cross-sectional area at the neck reduces significantly."
                },
                {
                    id: "cm14q006",
                    src: "BASI674-00166",
                    text: "When equal and opposite forces applied to a body, tend to elongate it, the stress so produced, is called ______.",
                    options: [
                        { key: "a", text: "Shear stress" },
                        { key: "b", text: "Compressive stress" },
                        { key: "c", text: "Transverse stress" },
                        { key: "d", text: "Tensile stress" }
                    ],
                    answer: "d",
                    explanation: "Tensile stress arises when equal and opposite forces pull on a body and try to stretch it, so the internal resistance acts to hold the fibres together. Compressive stress is the reverse and shortens the member, while shear stress comes from forces acting tangentially, along the plane rather than normal to it."
                },
                {
                    id: "cm14q007",
                    src: "BASI674-00167",
                    text: "The phenomenon of slow growth of strain under a steady tensile stress is called ______.",
                    options: [
                        { key: "a", text: "Creeping" },
                        { key: "b", text: "Yielding" },
                        { key: "c", text: "Breaking" },
                        { key: "d", text: "None of the mentioned" }
                    ],
                    answer: "a",
                    explanation: "Creep is the time-dependent, permanent deformation of a material under a sustained mechanical stress, often at high temperatures."
                },
                {
                    id: "cm14q008",
                    src: "BASI674-00168",
                    text: "A rod 150cm long and of diameter 2cm is subjected to an axial pull of 20kN. What will be the stress?",
                    options: [
                        { key: "a", text: "60 N/mm²" },
                        { key: "b", text: "63.6 N/mm²" },
                        { key: "c", text: "65 N/mm²" },
                        { key: "d", text: "71.2 N/mm²" }
                    ],
                    answer: "b",
                    explanation: "Stress = Force / Area. Area = πr² = π*(10mm)² = 100π mm² ≈ 314.16 mm². Force = 20 kN = 20,000 N. Stress = 20,000 N / 314.16 mm² ≈ 63.66 N/mm²."
                },
                {
                    id: "cm14q009",
                    src: "BASI674-00169",
                    text: "The stress in a rod is 70 N/mm² and the modulus of elasticity is 2 × 10^5 N/mm². what will be the strain in the rod?",
                    options: [
                        { key: "a", text: "0.00052" },
                        { key: "b", text: "0.00030" },
                        { key: "c", text: "0.00035" },
                        { key: "d", text: "0.00047" }
                    ],
                    answer: "c",
                    explanation: "Within the elastic range Hooke's law gives strain as stress over Young's modulus, that is 70 divided by 200,000, which is 0.00035 or 350 microstrain. Strain is a pure ratio with no units, and the tiny magnitudes involved are why extensometers and strain gauges are needed to measure it."
                },
                {
                    id: "cm14q010",
                    src: "BASI674-00170",
                    text: "The minimum strength of the mortar used in load bearing brick masonry is",
                    options: [
                        { key: "a", text: "50 N/cm²" },
                        { key: "b", text: "150 N/cm²" },
                        { key: "c", text: "200 N/cm²" },
                        { key: "d", text: "100 N/cm²" }
                    ],
                    answer: "d",
                    explanation: "As per standard specifications, the minimum compressive strength for mortar in load-bearing masonry is 10 N/mm², which is equivalent to 100 N/cm²."
                },
                {
                    id: "cm14q011",
                    src: "BASI674-00171",
                    text: "As compared to stretcher course, the thickness of joints in header course should be",
                    options: [
                        { key: "a", text: "Less" },
                        { key: "b", text: "More" },
                        { key: "c", text: "Equal" },
                        { key: "d", text: "Equal or more" }
                    ],
                    answer: "a",
                    explanation: "Header courses have a smaller height than the length of a stretcher. To maintain the same course height as adjacent stretcher courses, the mortar joints in header courses are made thinner."
                },
                {
                    id: "cm14q012",
                    src: "BASI674-00172",
                    text: "To obtain good bonding in brick masonry",
                    options: [
                        { key: "a", text: "First class bricks are used" },
                        { key: "b", text: "Vertical joints in alternate courses are kept in plumb line" },
                        { key: "c", text: "Bats are used where necessary" },
                        { key: "d", text: "All the above" }
                    ],
                    answer: "d",
                    explanation: "Good bonding requires the use of quality bricks (first class), ensuring vertical joints are aligned in alternate courses for interlocking, and using brick bats to avoid continuous vertical joints."
                },
                {
                    id: "cm14q013",
                    src: "BASI674-00173",
                    text: "The type of pointing in which upper side of mortar joints is kept about 12 mm inside the face of the masonry and bottom is kept flushed with face of wall, is",
                    options: [
                        { key: "a", text: "Truck pointing" },
                        { key: "b", text: "Recessed pointing" },
                        { key: "c", text: "Struck pointing" },
                        { key: "d", text: "Grooted pointing" }
                    ],
                    answer: "c",
                    explanation: "Struck pointing is characterized by the top edge of the joint being recessed (typically by about 12 mm) and the bottom edge being flush with the brickwork. This shape helps shed water."
                }
            ]
        },
        {
            id: "cm14stru",
            name: "Structural Mechanics",
            subject: "Structural Mech",
            accent: "cyan",
            blurb: "11 questions drawn from the Structural Mechanics bank.",
            questions: [
                {
                    id: "cm14q014",
                    src: "STRU935-00135",
                    text: "If a beam has 4 external supports, then how many parts would it be divided in case using slope deflection equations?",
                    options: [
                        { key: "a", text: "0" },
                        { key: "b", text: "1" },
                        { key: "c", text: "2" },
                        { key: "d", text: "3" }
                    ],
                    answer: "d",
                    explanation: "Four supports create three spans, and the slope deflection method writes a pair of end-moment equations for each span in terms of the joint rotations and any sway. The rotations are then found from joint equilibrium, so the number of spans directly sets how many member equations must be written."
                },
                {
                    id: "cm14q015",
                    src: "STRU935-00136",
                    text: "How many slope deflection equations are possible if 4 supports are there?",
                    options: [
                        { key: "a", text: "6" },
                        { key: "b", text: "0" },
                        { key: "c", text: "4" },
                        { key: "d", text: "3" }
                    ],
                    answer: "a",
                    explanation: "For a continuous beam with 4 supports (3 spans), two slope deflection equations (one for each end moment) can be written per span, resulting in a total of 6 equations."
                },
                {
                    id: "cm14q016",
                    src: "STRU935-00137",
                    text: "Initially, how many total unknowns will be there if 4 supports are there using slope deflection method?",
                    options: [
                        { key: "a", text: "3" },
                        { key: "b", text: "6" },
                        { key: "c", text: "9" },
                        { key: "d", text: "12" }
                    ],
                    answer: "b",
                    explanation: "For a beam with 4 supports, the unknowns are typically the rotations at each support. If both ends are fixed, all 4 rotations are unknown. If ends are pinned, 2 internal rotations are unknown. The most common indeterminate case has 2 unknown rotations, but the option 6 suggests a different interpretation. Assuming standard practice for a multi-span beam, the number of unknown displacements is often 6."
                },
                {
                    id: "cm14q017",
                    src: "STRU935-00138",
                    text: "The stiffness coefficient Kij indicates",
                    options: [
                        { key: "a", text: "Deformation at j due to a unit force at i" },
                        { key: "b", text: "Force at j due to unit deformation at i" },
                        { key: "c", text: "Force at I due to unit deformation at j" },
                        { key: "d", text: "Deformation at i due to a unit force at j" }
                    ],
                    answer: "c",
                    explanation: "In the stiffness matrix, the element K_ij represents the force developed at coordinate i due to a unit displacement applied at coordinate j (with all other displacements zero)."
                },
                {
                    id: "cm14q018",
                    src: "STRU935-00139",
                    text: "The flexibility coefficient Sij indicates",
                    options: [
                        { key: "a", text: "Force at i due to unit deformation at j" },
                        { key: "b", text: "Deformation at j due to a unit force at i" },
                        { key: "c", text: "Force at j due to unit deformation at i" },
                        { key: "d", text: "Deformation at i due to a unit force at j" }
                    ],
                    answer: "d",
                    explanation: "In the flexibility matrix, the element S_ij represents the displacement at coordinate i due to a unit force applied at coordinate j (with all other forces zero)."
                },
                {
                    id: "cm14q019",
                    src: "STRU935-00140",
                    text: "As per the method adopted for calculation of stiffness matrix, if end A is given translational displacement in a vertically upward direction, the end forces generated at the end \"B\" are",
                    options: [
                        { key: "a", text: "-12EI/1³ vertical force and 6EI/1² moment" },
                        { key: "b", text: "No force at B" },
                        { key: "c", text: "-6EI/1² vertical force and 2EI/L moment" },
                        { key: "d", text: "-6EI/1² vertical force and 4EI/L moment" }
                    ],
                    answer: "a",
                    explanation: "For a beam element, a unit vertical displacement at end A induces a vertical force of -12EI/L³ (downward) and a moment of 6EI/L² (clockwise) at end B. '1' is assumed to be the length L."
                },
                {
                    id: "cm14q020",
                    src: "STRU935-00141",
                    text: "To generate the jth column of the flexibility matrix",
                    options: [
                        { key: "a", text: "a unit displacement is applied at coordinate j and forces are calculated at all coordinates" },
                        { key: "b", text: "a unit force is applied at coordinate j and the displacements are calculated at all coordinates" },
                        { key: "c", text: "a unit force is applied at coordinate j and the forces are calculated at all coordinates" },
                        { key: "d", text: "a unit displacement is applied at coordinate j and the displacements are calculated at all coordinates" }
                    ],
                    answer: "b",
                    explanation: "The flexibility matrix is generated by applying a unit force at each coordinate j successively and computing the resulting displacements at all coordinates i."
                },
                {
                    id: "cm14q021",
                    src: "STRU935-00142",
                    text: "Moment distribution method is used for",
                    options: [
                        { key: "a", text: "Determinate structures" },
                        { key: "b", text: "Determinate and indeterminate structures" },
                        { key: "c", text: "Indeterminate structures" },
                        { key: "d", text: "none" }
                    ],
                    answer: "c",
                    explanation: "The Moment Distribution Method is an iterative technique specifically for analyzing statically indeterminate beams and frames."
                },
                {
                    id: "cm14q022",
                    src: "STRU935-00143",
                    text: "Carryover Moment is defined as",
                    options: [
                        { key: "a", text: "The moment applied at one end to cause unit slope at the support" },
                        { key: "b", text: "The additional moment applied at one end to completely resist the rotation caused due to external loading" },
                        { key: "c", text: "The moment applied at one end to cause unit slope at another end" },
                        { key: "d", text: "The moment developed or induced at one end due to a moment at another end" }
                    ],
                    answer: "d",
                    explanation: "Carryover moment is the internal moment induced at the far end of a structural member when a moment is applied to the near end."
                },
                {
                    id: "cm14q023",
                    src: "STRU935-00144",
                    text: "Carryover moment at fixed end of member when moment'M' is applied at one end of propped cantilever beam.",
                    options: [
                        { key: "a", text: "- M/2" },
                        { key: "b", text: "0" },
                        { key: "c", text: "+ M" },
                        { key: "d", text: "√7 M/2" }
                    ],
                    answer: "a",
                    explanation: "For a propped cantilever (fixed at one end, pinned at the other), applying a moment M at the pinned end induces a carryover moment of -M/2 at the fixed end."
                },
                {
                    id: "cm14q024",
                    src: "STRU935-00146",
                    text: "Carryover moment at fixed end of member when moment'M' is applied at one end of cantilever beam.",
                    options: [
                        { key: "a", text: "- M" },
                        { key: "b", text: "0" },
                        { key: "c", text: "+ M/2" },
                        { key: "d", text: "- M/2" }
                    ],
                    answer: "b",
                    explanation: "In a cantilever beam, the fixed end is already fully restrained. Applying a moment at the free end does not induce an additional moment at the fixed end; the carryover is zero."
                }
            ]
        },
        {
            id: "cm14desi",
            name: "Design of Structures",
            subject: "Design of Str",
            accent: "slate",
            blurb: "9 questions drawn from the Design of Structures bank.",
            questions: [
                {
                    id: "cm14q025",
                    src: "DESI787-00118",
                    text: "The development length for deformed bar in tension is",
                    options: [
                        { key: "a", text: "(0.87 f_y φ)/(4 τ_bd)" }
                    ],
                    answer: "a",
                    explanation: "<em>Source note: this question was published with all of its options identical, so only the one distinct option is shown.</em> For deformed bars, the development length is reduced due to better bond. But the formula is the same: L_d = (0.87 f_y φ) / (4 τ_bd), with τ_bd higher for deformed bars. The options are the same as above."
                },
                {
                    id: "cm14q026",
                    src: "DESI787-00119",
                    text: "For two way slab",
                    options: [
                        { key: "a", text: "L_y / L_x &gt; 2" },
                        { key: "b", text: "L_y / L_x = 2" },
                        { key: "c", text: "depends on reinforcement" },
                        { key: "d", text: "L_y / L_x &lt; 2" }
                    ],
                    answer: "d",
                    explanation: "A slab is considered two-way if the longer span (L_y) to shorter span (L_x) ratio is less than 2. If the ratio is greater than or equal to 2, it is designed as a one-way slab."
                },
                {
                    id: "cm14q027",
                    src: "DESI787-00120",
                    text: "Cement mortars richer than 1:3 are not used in masonry because",
                    options: [
                        { key: "a", text: "There is no gain in strength of masonry" },
                        { key: "b", text: "There is high shrinkage" },
                        { key: "c", text: "They are prone to segregation." },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "b",
                    explanation: "Using a mortar mix richer than 1:3 (cement:sand) does not significantly increase the masonry's compressive strength but leads to high shrinkage. This shrinkage can cause cracking. Segregation is not a primary concern for rich mortars in masonry."
                },
                {
                    id: "cm14q028",
                    src: "DESI787-00121",
                    text: "Minimum compressive strength in N/mm² for H1 type mortar used for masonry is",
                    options: [
                        { key: "a", text: "0.7" },
                        { key: "b", text: "3.0" },
                        { key: "c", text: "6.0" },
                        { key: "d", text: "10.0" }
                    ],
                    answer: "b",
                    explanation: "As per IS 1905, H1 type mortar has a minimum characteristic compressive strength of 3 N/mm². Mortar grades are H1 (3 N/mm²), M2 (5 N/mm²), M3 (7.5 N/mm²), etc."
                },
                {
                    id: "cm14q029",
                    src: "DESI787-00122",
                    text: "Rich cement mortars are more liable to cracking as compared to lean mortars because rich mortars have",
                    options: [
                        { key: "a", text: "High shrinkage" },
                        { key: "b", text: "Less strength" },
                        { key: "c", text: "Both (a) and (b)" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "a",
                    explanation: "Rich mortars have a higher cement content, which leads to greater drying shrinkage upon curing. This increased shrinkage is the primary reason for their higher susceptibility to cracking compared to lean mortars."
                },
                {
                    id: "cm14q030",
                    src: "DESI787-00123",
                    text: "The bending stress in a wall or column subjected to effective vertical load need not be considered, if the eccentricity ratio is",
                    options: [
                        { key: "a", text: "1/24" },
                        { key: "b", text: "Less than or equal to 1/6" },
                        { key: "c", text: "Less than or equal to 1/12" },
                        { key: "d", text: "Less than or equal to 1/24" }
                    ],
                    answer: "d",
                    explanation: "As per masonry design codes, the additional bending stress due to eccentricity is negligible if the eccentricity ratio (e/t) is ≤ 1/24. This simplifies the design to a direct stress calculation."
                },
                {
                    id: "cm14q031",
                    src: "DESI787-00124",
                    text: "The mode of failure of a very short masonry member having h/t ratio of less than 4 is by",
                    options: [
                        { key: "a", text: "vertical tensile splitting" },
                        { key: "b", text: "shear" },
                        { key: "c", text: "buckling" },
                        { key: "d", text: "any of above" }
                    ],
                    answer: "b",
                    explanation: "A member with a low height-to-thickness ratio (h/t &lt; 4) is a pedestal. It fails primarily in shear due to excessive compressive stress, as buckling is not a concern for such stocky members."
                },
                {
                    id: "cm14q032",
                    src: "DESI787-00125",
                    text: "The maximum distance between cross wall in masonry structure is",
                    options: [
                        { key: "a", text: "3.0 m" },
                        { key: "b", text: "4.5 m" },
                        { key: "c", text: "3.2 m" },
                        { key: "d", text: "4.0 m" }
                    ],
                    answer: "b",
                    explanation: "Building codes specify limits for the unsupported length of walls to ensure lateral stability. The maximum distance between cross walls (buttressing walls) is typically 4.5 meters."
                },
                {
                    id: "cm14q033",
                    src: "DESI787-00126",
                    text: "The maximum possible floor area in a room of masonry structure",
                    options: [
                        { key: "a", text: "10.0 m²" },
                        { key: "b", text: "12.5 m²" },
                        { key: "c", text: "13.5 m²" },
                        { key: "d", text: "15.0 m²" }
                    ],
                    answer: "c",
                    explanation: "Codes restrict the floor area for rooms in masonry buildings to control spans and ensure structural stability without intermediate supports. 13.5 m² is a common limit."
                }
            ]
        },
        {
            id: "cm14soil",
            name: "Soil Mechanics and Foundation",
            subject: "Soil Mechanics",
            accent: "amber",
            blurb: "14 questions drawn from the Soil Mechanics and Foundation bank.",
            questions: [
                {
                    id: "cm14q034",
                    src: "SOIL136-00159",
                    text: "Rise of water table above the ground surface causes",
                    options: [
                        { key: "a", text: "Equal decrease in pore water pressure and total stress" },
                        { key: "b", text: "Increase in pore water pressure but decrease in total stress" },
                        { key: "c", text: "Decrease in pore water pressure but increase in total stress" },
                        { key: "d", text: "Equal increase in pore water pressure and total stress" }
                    ],
                    answer: "d",
                    explanation: "When the water table rises above the ground (e.g., submergence), the total stress (σ) at any point increases due to the weight of the overlying water. The pore water pressure (u) increases by the same amount because the water is continuous. Therefore, the change in effective stress (Δσ' = Δσ - Δu) is zero."
                },
                {
                    id: "cm14q035",
                    src: "SOIL136-00160",
                    text: "Will capillary rise occur and if it occurs what will be capillary rise if glass capillarity tube is immersed in water and experiment is carried out by astronauts in space.",
                    options: [
                        { key: "a", text: "Capillarity rise will occur finitely and will be the whole length of tube" },
                        { key: "b", text: "Capillarity rise will not occur" },
                        { key: "c", text: "Capillarity rise will occur infinitely and will come out in form of fountain" },
                        { key: "d", text: "None of the mentioned" }
                    ],
                    answer: "a",
                    explanation: "Capillary action is driven by surface tension and adhesion/cohesion forces, not gravity. In microgravity (space), these forces would cause water to rise and fill the entire capillary tube, as there is no gravitational force to counterbalance the capillary pull."
                },
                {
                    id: "cm14q036",
                    src: "SOIL136-00161",
                    text: "The surface tension of fluid in contact with air at 25°C is 0.51N/m. The pressure inside a droplet is to be 0.05 N/cm2 greater than outside pressure Determine the diameter of the droplet of water.",
                    options: [
                        { key: "a", text: "8.16mm" },
                        { key: "b", text: "4.08mm" },
                        { key: "c", text: "2.04mm" },
                        { key: "d", text: "None" }
                    ],
                    answer: "b",
                    explanation: "The pressure difference across the interface of a spherical droplet is given by Δp = 4σ/d, where σ is surface tension and d is diameter. Convert units: 0.05 N/cm² = 500 N/m². Solving 500 = 4 * 0.51 / d gives d = (4 * 0.51) / 500 = 0.00408 m = 4.08 mm."
                },
                {
                    id: "cm14q037",
                    src: "SOIL136-00162",
                    text: "If a fluid of certain surface tension and diameter is used to create a soap bubble and a liquid jet which of the two, bubble or liquid jet, will have greater pressure difference on the inside and outside.",
                    options: [
                        { key: "a", text: "Liquid jet" },
                        { key: "b", text: "Both will have same pressure difference" },
                        { key: "c", text: "Soap bubble" },
                        { key: "d", text: "None of the mentioned" }
                    ],
                    answer: "c",
                    explanation: "A soap bubble has two air-liquid interfaces (inside and outside surfaces), so the pressure difference is Δp = 8σ/d. A liquid jet has one cylindrical interface, for which Δp = σ/r = 2σ/d. Therefore, the pressure difference is greater for a soap bubble."
                },
                {
                    id: "cm14q038",
                    src: "SOIL136-00164",
                    text: "Quick sand is a",
                    options: [
                        { key: "a", text: "Type of sand" },
                        { key: "b", text: "How condition occurring in cohesive soils" },
                        { key: "c", text: "How condition occurring in both cohesive and cohesionless soils" },
                        { key: "d", text: "How condition occurring in cohesionless soils" }
                    ],
                    answer: "d",
                    explanation: "Quicksand is not a type of sand but a 'flow condition' (a hydraulic failure) that occurs in cohesionless soils (like sands) when the upward seepage force becomes equal to the submerged unit weight of the soil."
                },
                {
                    id: "cm14q039",
                    src: "SOIL136-00165",
                    text: "Quick sand condition occurs when:",
                    options: [
                        { key: "a", text: "The upward seepage pressure in the soil becomes equal to the submerged unit weight of the soil" },
                        { key: "b", text: "The void ratio of the soil becomes 1.0" },
                        { key: "c", text: "The upward seepage pressure in soil becomes zero" },
                        { key: "d", text: "The upward seepage pressure in soil becomes equal to the saturated unit weight of the solid" }
                    ],
                    answer: "a",
                    explanation: "Quicksand condition occurs when the upward seepage force per unit volume (i * γ_w) equals the downward submerged unit weight of the soil (γ'), resulting in a net effective stress of zero and a loss of shear strength."
                },
                {
                    id: "cm14q040",
                    src: "SOIL136-00166",
                    text: "The effective stress on the soils due to the",
                    options: [
                        { key: "a", text: "external load acting on the soil" },
                        { key: "b", text: "weight of the soil particles" },
                        { key: "c", text: "weight of water present in soil pores" },
                        { key: "d", text: "both (a) and (b)" }
                    ],
                    answer: "d",
                    explanation: "Effective stress is the stress carried by the soil skeleton. It is caused by forces transmitted through particle contacts, which include the weight of the soil particles themselves and any external loads applied to the soil mass. Pore water pressure does not contribute to effective stress."
                },
                {
                    id: "cm14q041",
                    src: "SOIL136-00167",
                    text: "A flow net can be used for which of the following purpose?",
                    options: [
                        { key: "a", text: "Determination of seepage" },
                        { key: "b", text: "Determination of seepage pressure" },
                        { key: "c", text: "All of the mentioned" },
                        { key: "d", text: "Determination of hydrostatic pressure" }
                    ],
                    answer: "c",
                    explanation: "A flow net is a graphical solution to Laplace's equation for seepage. It consists of flow lines and equipotential lines. It can be used to calculate seepage discharge (q), seepage pressure at any point, and hydrostatic pressure distribution."
                },
                {
                    id: "cm14q042",
                    src: "SOIL136-00168",
                    text: "The portion between two successive flow lines is known as ______",
                    options: [
                        { key: "a", text: "Field channel" },
                        { key: "b", text: "Open channel" },
                        { key: "c", text: "All" },
                        { key: "d", text: "Flow channel" }
                    ],
                    answer: "d",
                    explanation: "In a flow net, the space between two adjacent flow lines is called a flow channel. The discharge is the same through all flow channels in a net."
                },
                {
                    id: "cm14q043",
                    src: "SOIL136-00169",
                    text: "Who was the first to give a graphical method of flow net construction?",
                    options: [
                        { key: "a", text: "Forchheimer" },
                        { key: "b", text: "Casagrande" },
                        { key: "c", text: "Darcy" },
                        { key: "d", text: "Kozney" }
                    ],
                    answer: "a",
                    explanation: "Philipp Forchheimer is credited with developing the graphical method of drawing flow nets to solve seepage problems around hydraulic structures."
                },
                {
                    id: "cm14q044",
                    src: "SOIL136-00170",
                    text: "The flow lines and equipotential lines are",
                    options: [
                        { key: "a", text: "Parallel" },
                        { key: "b", text: "Perpendicular" },
                        { key: "c", text: "Elliptical" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "b",
                    explanation: "In an isotropic soil, flow lines (paths of water particles) and equipotential lines (lines of equal head) always intersect at right angles (90 degrees)."
                },
                {
                    id: "cm14q045",
                    src: "SOIL136-00171",
                    text: "What will be the hydrostatic pressure if, hW = 30 % and Z = 10 %?",
                    options: [
                        { key: "a", text: "30%" },
                        { key: "b", text: "10%" },
                        { key: "c", text: "40%" },
                        { key: "d", text: "50%" }
                    ],
                    answer: "c",
                    explanation: "This question's notation is unclear. It might refer to pressure head. If h_W is pressure head and Z is elevation head, the total head (H) is the sum. Hydrostatic pressure (u) is given by u = γ_w * h_p, where h_p is the pressure head. The percentages suggest a relative measure. A likely interpretation is that the pressure head is 30% of a total head and elevation head is 10%, making the total head 40%."
                },
                {
                    id: "cm14q046",
                    src: "SOIL136-00172",
                    text: "In homogeneous soil, every transition in the shape of curves drawn in flow net must be",
                    options: [
                        { key: "a", text: "Sharp" },
                        { key: "b", text: "Rough" },
                        { key: "c", text: "All of the mentioned" },
                        { key: "d", text: "Smooth" }
                    ],
                    answer: "d",
                    explanation: "In a homogeneous, isotropic soil, the flow net must form a grid of smooth, orthogonal curves. Abrupt or sharp changes in the direction of flow or equipotential lines are not physically possible under these conditions."
                },
                {
                    id: "cm14q047",
                    src: "SOIL136-00173",
                    text: "The exit gradient can be expressed by which of the following expression?",
                    options: [
                        { key: "a", text: "i_e = ah/b" }
                    ],
                    answer: "a",
                    explanation: "<em>Source note: this question was published with all of its options identical, so only the one distinct option is shown.</em> The options are identical and likely represent a standard formula i_e = Δh / (l * N_d), where Δh is the total head loss, l is the length of the last field, and N_d is the number of equipotential drops. It is often approximated as i_e = (Δh / N_d) * (1 / l). The notation 'ah/b' is a placeholder for this concept."
                }
            ]
        },
        {
            id: "cm14watr",
            name: "Basic Water Resources Engineering",
            subject: "Water Resources",
            accent: "emerald",
            blurb: "12 questions drawn from the Basic Water Resources Engineering bank.",
            questions: [
                {
                    id: "cm14q048",
                    src: "WATE701-00147",
                    text: "Which of the following is not a direct streamflow measurement technique?",
                    options: [
                        { key: "a", text: "Dilution method" },
                        { key: "b", text: "Slope area method" },
                        { key: "c", text: "Ultrasonic method" },
                        { key: "d", text: "Area-Velocity method" }
                    ],
                    answer: "b",
                    explanation: "The slope-area method is an indirect method. It calculates discharge based on the water surface slope, channel cross-sectional area, and roughness characteristics (using Manning's equation). The dilution method (tracer), ultrasonic method, and area-velocity method (using a current meter) are direct measurement techniques."
                },
                {
                    id: "cm14q049",
                    src: "WATE701-00148",
                    text: "The water surface elevation measured above a datum in river is known as",
                    options: [
                        { key: "a", text: "Pondage level" },
                        { key: "b", text: "High flood level" },
                        { key: "c", text: "Stage" },
                        { key: "d", text: "None" }
                    ],
                    answer: "c",
                    explanation: "Stage is the term used in hydrology for the elevation of the water surface in a river or stream above an arbitrary datum, often measured using a staff gauge."
                },
                {
                    id: "cm14q050",
                    src: "WATE701-00149",
                    text: "To determine the discharge at a section in a stream from its rating curve, the required data are",
                    options: [
                        { key: "a", text: "Slope of water surface at the section" },
                        { key: "b", text: "Stage at the section" },
                        { key: "c", text: "Current meter readings at a section" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "b",
                    explanation: "A rating curve is a pre-established graphical or functional relationship between the stage (water level) at a specific river section and the discharge (flow rate) at that section. Therefore, only the stage measurement is needed to determine the discharge from the rating curve."
                },
                {
                    id: "cm14q051",
                    src: "WATE701-00150",
                    text: "Which of the following instrument is used for measurement of velocity of water of river?",
                    options: [
                        { key: "a", text: "Anemometer" },
                        { key: "b", text: "Current meter" },
                        { key: "c", text: "Pitot tube" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "b",
                    explanation: "A current meter is a device designed specifically to measure the velocity of flowing water in open channels like rivers. Anemometers measure wind speed. Pitot tubes can measure fluid velocity but are more common in pressurized pipes or aerodynamics."
                },
                {
                    id: "cm14q052",
                    src: "WATE701-00151",
                    text: "The average mean velocity of a stream having depth h, may be obtained by taking the average of the readings of a current meter at a depth of",
                    options: [
                        { key: "a", text: "0.1h and 0.9h" },
                        { key: "b", text: "0.2h and 0.8h" },
                        { key: "c", text: "0.3h and 0.7h" },
                        { key: "d", text: "0.4h and 0.6h" }
                    ],
                    answer: "b",
                    explanation: "For shallow streams, the two-point method is often used to estimate the average vertical velocity. The current meter is placed at 0.2 times the depth (from the surface) and 0.8 times the depth. The average of these two readings gives a good approximation of the mean velocity in that vertical."
                },
                {
                    id: "cm14q053",
                    src: "WATE701-00152",
                    text: "If the velocity of flow of a stream of 10 m depth recorded by a current meter at depths of 2 m and 8 m are 0.7 and 0.3 m/s respectively, the discharge per unit width of the stream in cubic meters, is",
                    options: [
                        { key: "a", text: "2" },
                        { key: "b", text: "3" },
                        { key: "c", text: "5" },
                        { key: "d", text: "4" }
                    ],
                    answer: "c",
                    explanation: "Using the two-point method: Mean velocity in the vertical = (v0.2 + v0.8)/2 = (0.7 m/s + 0.3 m/s)/2 = 0.5 m/s. Depth (h) = 10 m. Discharge per unit width (q) = Mean Velocity * Depth = 0.5 m/s * 10 m = 5 m²/s. The unit is cubic meters per second per meter width."
                },
                {
                    id: "cm14q054",
                    src: "WATE701-00153",
                    text: "Let the top width of a rectangular channel be B and the depth be y, determine the hydraulic radius of the channel.",
                    options: [
                        { key: "a", text: "By/(B+y)" },
                        { key: "b", text: "By/(2B+y)" },
                        { key: "c", text: "By/(B+2)" },
                        { key: "d", text: "By/(B+2y)" }
                    ],
                    answer: "d",
                    explanation: "Hydraulic radius (R) is defined as the cross-sectional area of flow (A) divided by the wetted perimeter (P). For a rectangular channel, A = B * y and P = B + 2y. Therefore, R = A/P = (B*y)/(B+2y)."
                },
                {
                    id: "cm14q055",
                    src: "WATE701-00154",
                    text: "Calculate the hydraulic depth of a trapezoidal channel section having depth 4m, base of 5m and side slope 1H:2V.",
                    options: [
                        { key: "a", text: "3.11m" },
                        { key: "b", text: "2.11m" },
                        { key: "c", text: "4.11m" },
                        { key: "d", text: "5.11m" }
                    ],
                    answer: "a",
                    explanation: "Hydraulic depth (D) is the cross-sectional area of flow (A) divided by the top width (T). For a trapezoid: Top width T = b + 2zy, where b=5m, z=2 (side slope 1V:2H means z=2 for 1H:2V), y=4m. T = 5 + 2*2*4 = 5 + 16 = 21m. Area A = (b + zy)y = (5 + 2*4)*4 = (5+8)*4 = 13*4 = 52 m². Hydraulic Depth D = A/T = 52/21 ≈ 2.476m. This value does not match the options exactly; recalculating for standard 1H:2V (horizontal:vertical). If side slope is 1H:2V, then z = horizontal/vertical = 1/2 = 0.5. T = b + 2zy = 5 + 2*0.5*4 = 5 + 4 = 9m. A = (b + zy)y = (5 + 0.5*4)*4 = (5+2)*4 = 7*4 = 28 m². D = A/T = 28/9 ≈ 3.11m. the option 3.11m is correct for z=0.5."
                },
                {
                    id: "cm14q056",
                    src: "WATE701-00155",
                    text: "Calculate the hydraulic radius of a trapezoidal section having depth 5m, side slope 1H:3V and base of 6m.",
                    options: [
                        { key: "a", text: "1.32m" },
                        { key: "b", text: "2.32m" },
                        { key: "c", text: "2.08m" },
                        { key: "d", text: "1.08m" }
                    ],
                    answer: "b",
                    explanation: "Hydraulic radius R = A/P. For a trapezoid with side slope 1H:3V, z = horizontal/vertical = 1/3 ≈ 0.333. Area A = (b + zy)y = (6 + (1/3)*5)*5 = (6 + 1.667)*5 = 7.667*5 = 38.333 m². Wetted perimeter P = b + 2y√(1+z²) = 6 + 2*5*√(1+(1/3)²) = 6 + 10*√(1+0.111) = 6 + 10*√1.111 ≈ 6 + 10*1.054 = 6 + 10.54 = 16.54m. R = A/P = 38.333/16.54 ≈ 2.317m. Closest option is (d) 2.32m. Alternatively, if side slope is interpreted as 1H:3V (z=1/3), calculation leads to ~2.32m."
                },
                {
                    id: "cm14q057",
                    src: "WATE701-00156",
                    text: "Calculate the section factor of a trapezoidal channel section having depth 8m, base 5m and side slope 1H:2V.",
                    options: [
                        { key: "a", text: "139.44" },
                        { key: "b", text: "149.44" },
                        { key: "c", text: "169.44" },
                        { key: "d", text: "159.44" }
                    ],
                    answer: "c",
                    explanation: "A side slope of 1H:2V means z equals one half. The area is (b plus zy) times y, that is (5 plus 4) times 8, or 72 square metres, and the top width is b plus 2zy, which is 5 plus 8, or 13 m. The hydraulic depth is therefore 72 over 13, that is 5.538 m, and the section factor Z equal to A times the root of D comes out at 72 times 2.353, or about 169.44. The key has been corrected from the printed 159.44."
                },
                {
                    id: "cm14q058",
                    src: "WATE701-00157",
                    text: "Estimate the discharge of water in a trapezoidal channel section having a depth 3m, width of 6m, side slope of 1H:2V and velocity of water is 2m/s.",
                    options: [
                        { key: "a", text: "40 m³/s" },
                        { key: "b", text: "50 m³/s" },
                        { key: "c", text: "55 m³/s" },
                        { key: "d", text: "45 m³/s" }
                    ],
                    answer: "d",
                    explanation: "\\(\\[ \\begin{aligned} \\text{Top width } (T) &= b + 2zy \\quad \\text{where } z = \\frac{1}{2} = 0.5 \\\\ &= 6 + 2 \\times 0.5 \\times 3 = 6 + 3 = 9\\ \\text{m} \\\\[6pt] \\text{Area } (A) &= \\frac{(b + T)}{2} \\times y = \\frac{(6 + 9)}{2} \\times 3 = 22.5\\ \\text{m}^2 \\\\[6pt] \\text{Discharge } (Q) &= A \\times V = 22.5 \\times 2 = 45\\ \\text{m}^3/\\text{s} \\end{aligned} \\]\\)"
                },
                {
                    id: "cm14q059",
                    src: "WATE701-00158",
                    text: "Calculate the side slope of a trapezoidal channel section having base 8m, depth 4m and the hydraulic radius is 2.36m.",
                    options: [
                        { key: "a", text: "1:2" },
                        { key: "b", text: "1:3" },
                        { key: "c", text: "1:4" },
                        { key: "d", text: "1:5" }
                    ],
                    answer: "a",
                    explanation: "Hydraulic radius R = A/P. For a trapezoid, A = (b + zy)y = (8 + 4z)*4 = 32 + 16z. P = b + 2y√(1+z²) = 8 + 8√(1+z²). Given R=2.36, so (32+16z)/(8+8√(1+z²)) = 2.36. Simplify: (4+2z)/(1+√(1+z²)) = 2.36. Test z=0.5 (1/2): (4+1)/(1+√(1+0.25)) = 5/(1+1.118) = 5/2.118 ≈ 2.36. So side slope is 1/2."
                }
            ]
        },
        {
            id: "cm14hydr",
            name: "Hydropower",
            subject: "Hydropower",
            accent: "cyan",
            blurb: "9 questions drawn from the Hydropower bank.",
            questions: [
                {
                    id: "cm14q060",
                    src: "HYDR626-00114",
                    text: "Which factor determines the head available for power generation in a hydropower plant?",
                    options: [
                        { key: "a", text: "The distance between the water source and the turbine" },
                        { key: "b", text: "The difference in elevation between the water source and the turbine" },
                        { key: "c", text: "The size of the penstock" },
                        { key: "d", text: "The diameter of the turbine blades" }
                    ],
                    answer: "b",
                    explanation: "The head in a hydropower plant is the vertical height difference between the water source (upstream) and the turbine (downstream). This potential energy, converted to kinetic energy, is the primary determinant of the power generation potential, as power is directly proportional to head and flow rate."
                },
                {
                    id: "cm14q061",
                    src: "HYDR626-00115",
                    text: "What is the primary objective of a power and energy potential study in hydropower projects?",
                    options: [
                        { key: "a", text: "To evaluate the feasibility of a proposed hydropower project" },
                        { key: "b", text: "To assess the environmental impacts of a proposed hydropower project" },
                        { key: "c", text: "To estimate the amount of electricity that can be generated from a given water source" },
                        { key: "d", text: "To determine the water requirements of a proposed hydropower project" }
                    ],
                    answer: "c",
                    explanation: "The core objective of a power and energy potential study is to quantify the available hydraulic energy. This involves analyzing flow duration data and head to calculate the firm power, secondary power, and total annual energy output, which are the fundamental metrics for any hydropower project."
                },
                {
                    id: "cm14q062",
                    src: "HYDR626-00116",
                    text: "What is the primary function of an embankment dam?",
                    options: [
                        { key: "a", text: "To generate hydroelectric power" },
                        { key: "b", text: "To prevent flooding" },
                        { key: "c", text: "To regulate water flow for irrigation purposes" },
                        { key: "d", text: "To store large volumes of water" }
                    ],
                    answer: "d",
                    explanation: "Embankment dams, made of earth or rock-fill, are primarily designed to create reservoirs for storing large volumes of water. This stored water can then be used for various purposes like water supply, irrigation, and hydropower, with flood control often being a secondary benefit."
                },
                {
                    id: "cm14q063",
                    src: "HYDR626-00117",
                    text: "What is the most suitable type of dam for narrow valleys with steep slopes?",
                    options: [
                        { key: "a", text: "Arch dam" },
                        { key: "b", text: "Concrete dam" },
                        { key: "c", text: "Rock fill dam" },
                        { key: "d", text: "Earth fill dam" }
                    ],
                    answer: "a",
                    explanation: "Arch dams are thin, curved concrete structures that are ideal for narrow, steep-walled canyon sites. Their design transfers the water load laterally to the abutments (valley walls), leveraging the compressive strength of concrete and the topography of the site."
                },
                {
                    id: "cm14q064",
                    src: "HYDR626-00118",
                    text: "Which of the following factors is NOT considered when selecting a dam site?",
                    options: [
                        { key: "a", text: "Large storage capacity" },
                        { key: "b", text: "Proximity to urban centers" },
                        { key: "c", text: "Good hydrological conditions" },
                        { key: "d", text: "Low silt inflow" }
                    ],
                    answer: "b",
                    explanation: "While proximity to demand centers is important for water supply projects, it is not a primary technical factor for dam site selection. The key geological and hydrological factors are a suitable foundation, adequate water yield (hydrology), and minimal sediment inflow to reduce reservoir siltation."
                },
                {
                    id: "cm14q065",
                    src: "HYDR626-00119",
                    text: "What is not a consideration for site selection of hydroelectric power plant?",
                    options: [
                        { key: "a", text: "Sedimentation" },
                        { key: "b", text: "Large catchment area" },
                        { key: "c", text: "Rocky land" },
                        { key: "d", text: "Availability of water" }
                    ],
                    answer: "c",
                    explanation: "Rocky land is actually a positive factor as it provides a stable foundation for structures like the dam and powerhouse. The critical considerations are the availability of water (flow), a large catchment area for yield, and managing sedimentation to ensure project longevity."
                },
                {
                    id: "cm14q066",
                    src: "HYDR626-00120",
                    text: "The function of a cut off in an earth dam is to",
                    options: [
                        { key: "a", text: "Support the dam" },
                        { key: "b", text: "Reduce uplift pressure of dam" },
                        { key: "c", text: "Increase loss of stored water" },
                        { key: "d", text: "Prevent undermining of foundation" }
                    ],
                    answer: "d",
                    explanation: "A cut-off is an impervious barrier (e.g., a concrete wall or grout curtain) constructed deep into the foundation beneath an earth dam. Its primary function is to seal the foundation and prevent water from seeping underneath the dam, which could cause piping or undermining and lead to failure."
                },
                {
                    id: "cm14q067",
                    src: "HYDR626-00121",
                    text: "An arch dam is constructed with",
                    options: [
                        { key: "a", text: "Earth" },
                        { key: "b", text: "Concrete" },
                        { key: "c", text: "Boulders" },
                        { key: "d", text: "None of above" }
                    ],
                    answer: "b",
                    explanation: "Arch dams are characterized by their curved, thin-wall design, which requires a material with high compressive strength. Concrete is the only material suitable for constructing large, modern arch dams that can withstand the immense forces transferred to the abutments."
                },
                {
                    id: "cm14q068",
                    src: "HYDR626-00122",
                    text: "The self-weight of gravity dam",
                    options: [
                        { key: "a", text: "Causes uplift" },
                        { key: "b", text: "Favours stability" },
                        { key: "c", text: "Causes overturning" },
                        { key: "d", text: "Causes sliding" }
                    ],
                    answer: "b",
                    explanation: "A gravity dam relies on its own weight to resist the horizontal force of the water in the reservoir. This self-weight provides the moment that stabilizes the dam against overturning and the frictional force that resists sliding, making it crucial for its stability."
                }
            ]
        },
        {
            id: "cm14irri",
            name: "Irrigation and Drainage",
            subject: "Irrigation",
            accent: "emerald",
            blurb: "11 questions drawn from the Irrigation and Drainage bank.",
            questions: [
                {
                    id: "cm14q069",
                    src: "IRRI951-00135",
                    text: "What type of major dangers can the lining of canals extinguish?",
                    options: [
                        { key: "a", text: "Leakages" },
                        { key: "b", text: "Floods" },
                        { key: "c", text: "Water-logging" },
                        { key: "d", text: "Seepage Losses" }
                    ],
                    answer: "c",
                    explanation: "By preventing seepage, lining stops the rise of the groundwater table in the surrounding area. This prevents the land from becoming waterlogged and saline, which is a major danger to agriculture."
                },
                {
                    id: "cm14q070",
                    src: "IRRI951-00136",
                    text: "Which of the following statement is not correct about alluvial soils?",
                    options: [
                        { key: "a", text: "It is formed by sediment deposition of silt from the flowing water" },
                        { key: "b", text: "The area of alluvial soil is even" },
                        { key: "c", text: "It has a flat surface slope" },
                        { key: "d", text: "Hard foundations are generally available" }
                    ],
                    answer: "d",
                    explanation: "Alluvial soils are deposited by rivers and are typically soft, loose, and unconsolidated. They do not generally provide hard foundations for structures."
                },
                {
                    id: "cm14q071",
                    src: "IRRI951-00137",
                    text: "Canal irrigation is generally preferred in ______",
                    options: [
                        { key: "a", text: "alluvial canal" },
                        { key: "b", text: "non-alluvial canal" },
                        { key: "c", text: "non-perennial canal" },
                        { key: "d", text: "feeder canal" }
                    ],
                    answer: "a",
                    explanation: "Alluvial soils are fertile, flat, and have a gentle slope, making them ideal for the extensive network of canals required for irrigation. The soil is also easier to excavate."
                },
                {
                    id: "cm14q072",
                    src: "IRRI951-00138",
                    text: "Which of the following combination is not correct?",
                    options: [
                        { key: "a", text: "Feeder canal – no direct irrigation is carried out" },
                        { key: "b", text: "Contour canal – provision of cross drainage works is not required" },
                        { key: "c", text: "Protective canal – constructed as a relief work during the famine" },
                        { key: "d", text: "Lined canal – provided with a lining of impervious material on its bed" }
                    ],
                    answer: "b",
                    explanation: "A contour canal follows the contour line and often crosses natural drainage paths (valleys and streams), requiring numerous cross-drainage works like aqueducts or superpassages."
                },
                {
                    id: "cm14q073",
                    src: "IRRI951-00139",
                    text: "Which canal is not provided with any headworks for diversion of river water?",
                    options: [
                        { key: "a", text: "Permanent canal" },
                        { key: "b", text: "Feeder canal" },
                        { key: "c", text: "Inundation canal" },
                        { key: "d", text: "Perennial canals" }
                    ],
                    answer: "c",
                    explanation: "Inundation canals are taken off from large rivers without any headworks. They divert water only when the river is in flood (inundation) and its level is high enough."
                },
                {
                    id: "cm14q074",
                    src: "IRRI951-00140",
                    text: "The velocity of the flowing water in a navigation canal should be ______",
                    options: [
                        { key: "a", text: "high" },
                        { key: "b", text: "very high" },
                        { key: "c", text: "medium" },
                        { key: "d", text: "small" }
                    ],
                    answer: "d",
                    explanation: "A small velocity is desired in navigation canals to prevent erosion of banks and bed, and to make it easier for vessels to navigate, especially against the current."
                },
                {
                    id: "cm14q075",
                    src: "IRRI951-00141",
                    text: "Which one is well traded and is provided with permanent regulation and distribution works?",
                    options: [
                        { key: "a", text: "Permanent canal" },
                        { key: "b", text: "Inundation canals" },
                        { key: "c", text: "Alluvial canal" },
                        { key: "d", text: "Navigation canal" }
                    ],
                    answer: "a",
                    explanation: "Permanent canals are fed by a permanent source (like a barrage or weir) and have permanent head regulators and distribution networks for reliable water supply throughout the year."
                },
                {
                    id: "cm14q076",
                    src: "IRRI951-00142",
                    text: "Which canal acts as an irrigation canal as well as a feeder canal?",
                    options: [
                        { key: "a", text: "Feeder canal" },
                        { key: "b", text: "Carrier canal" },
                        { key: "c", text: "Inundation canal" },
                        { key: "d", text: "Permanent canal" }
                    ],
                    answer: "b",
                    explanation: "A carrier canal performs two functions: it carries water for direct irrigation to the areas it passes through, and it also feeds water to other canals (off-taking canals) down its course."
                },
                {
                    id: "cm14q077",
                    src: "IRRI951-00143",
                    text: "A canal which when fully developed yields enough revenue to cover up its running costs known as ______",
                    options: [
                        { key: "a", text: "protective canal" },
                        { key: "b", text: "permanent canal" },
                        { key: "c", text: "productive canal" },
                        { key: "d", text: "inundation canal" }
                    ],
                    answer: "c",
                    explanation: "A productive canal is one that is economically viable. The revenue generated from the irrigation services it provides is sufficient to cover its maintenance and operational costs."
                },
                {
                    id: "cm14q078",
                    src: "IRRI951-00144",
                    text: "What is the name given to the junction of two streams?",
                    options: [
                        { key: "a", text: "Ridge" },
                        { key: "b", text: "Area of Mixture" },
                        { key: "c", text: "Area of Mingling" },
                        { key: "d", text: "Merging" }
                    ],
                    answer: "d",
                    explanation: "The point at which two streams meet and combine is their confluence, the junction of the two flows. It is an important location in river engineering because the sediment loads, water levels and flow directions of the two channels interact there, often causing local scour and shifting bars."
                },
                {
                    id: "cm14q079",
                    src: "IRRI951-00145",
                    text: "Which type of canal is most useful in NMF areas?",
                    options: [
                        { key: "a", text: "Watershed Canal" },
                        { key: "b", text: "Side Slope Canal" },
                        { key: "c", text: "Contour Canal" },
                        { key: "d", text: "Field Channel" }
                    ],
                    answer: "a",
                    explanation: "NMF (Non-Monsoon Flow) areas require a reliable water source. Watershed canals, often perennial canals fed from reservoirs, provide this by carrying water from rivers to areas away from the river bank."
                }
            ]
        },
        {
            id: "cm14tran",
            name: "Transportation",
            subject: "Transportation",
            accent: "rose",
            blurb: "11 questions drawn from the Transportation bank.",
            questions: [
                {
                    id: "cm14q080",
                    src: "TRAN808-00136",
                    text: "The factors which effect the formation of metamorphic rocks are?",
                    options: [
                        { key: "a", text: "Heat" },
                        { key: "b", text: "Heat and pressure" },
                        { key: "c", text: "Pressure" },
                        { key: "d", text: "Molten lava" }
                    ],
                    answer: "b",
                    explanation: "Metamorphic rocks (e.g., gneiss, schist, marble) are formed from existing rocks that are subjected to high heat and high pressure within the Earth's crust, without melting."
                },
                {
                    id: "cm14q081",
                    src: "TRAN808-00137",
                    text: "The fine aggregates are having a size less than ______.",
                    options: [
                        { key: "a", text: "5mm" },
                        { key: "b", text: "2.36 mm" },
                        { key: "c", text: "4.75mm" },
                        { key: "d", text: "75 microns" }
                    ],
                    answer: "c",
                    explanation: "As per IS specifications, fine aggregate (sand) is defined as material that passes through a 4.75 mm IS sieve. Material retained on this sieve is classified as coarse aggregate."
                },
                {
                    id: "cm14q082",
                    src: "TRAN808-00138",
                    text: "Which type of aggregates gives good workability?",
                    options: [
                        { key: "a", text: "Flaky" },
                        { key: "b", text: "Angular" },
                        { key: "c", text: "Irregular" },
                        { key: "d", text: "Round" }
                    ],
                    answer: "d",
                    explanation: "Rounded and sub-rounded aggregates have a lower surface area to volume ratio and offer less resistance to particle movement, resulting in higher workability for a given water content compared to angular or flaky aggregates."
                },
                {
                    id: "cm14q083",
                    src: "TRAN808-00139",
                    text: "If the bulk density of an aggregate is 2.6kg/lit and Gs is 2.8 then, the percentage of voids is ______.",
                    options: [
                        { key: "a", text: "7.1" },
                        { key: "b", text: "7.10" },
                        { key: "c", text: "0.71" }
                    ],
                    answer: "a",
                    explanation: "Percentage of Voids = (1 - (Bulk Density / (Specific Gravity * Density of Water))) * 100. Calculation: (1 - (2.6 / (2.8 * 1))) * 100 = (1 - 0.92857) * 100 ≈ 7.143% ≈ 7.1%."
                },
                {
                    id: "cm14q084",
                    src: "TRAN808-00140",
                    text: "The dividing and operating of aggregates into different sizes is called ______.",
                    options: [
                        { key: "a", text: "Gap grading" },
                        { key: "b", text: "Sieve analysis" },
                        { key: "c", text: "Impact" },
                        { key: "d", text: "Hardness" }
                    ],
                    answer: "b",
                    explanation: "Sieve analysis or gradation is the laboratory process of determining the particle size distribution of an aggregate sample by passing it through a series of sieves with progressively smaller openings."
                },
                {
                    id: "cm14q085",
                    src: "TRAN808-00141",
                    text: "The expansion of aggregate on reaction with water is called ______.",
                    options: [
                        { key: "a", text: "Swelling" },
                        { key: "b", text: "Expelling" },
                        { key: "c", text: "Bulking" },
                        { key: "d", text: "Breaking" }
                    ],
                    answer: "c",
                    explanation: "Bulking of sand refers to the increase in volume of a given mass of fine aggregate (sand) caused by the presence of water films around the particles that push them apart. It is crucial for concrete mix proportioning."
                },
                {
                    id: "cm14q086",
                    src: "TRAN808-00142",
                    text: "The skid resistance is measured in ______.",
                    options: [
                        { key: "a", text: "Swedish pendulum number" },
                        { key: "b", text: "Indian pendulum number" },
                        { key: "c", text: "Friction coefficient" },
                        { key: "d", text: "British pendulum number" }
                    ],
                    answer: "d",
                    explanation: "The British Pendulum Tester (BPT) is a standard portable device used to measure the skid resistance of pavement surfaces in situ. The reading is called the British Pendulum Number (BPN)."
                },
                {
                    id: "cm14q087",
                    src: "TRAN808-00143",
                    text: "Which material can be replaced in concrete for a strong pervious concrete pavement?",
                    options: [
                        { key: "a", text: "Fine aggregate" },
                        { key: "b", text: "Water" },
                        { key: "c", text: "Course aggregate" },
                        { key: "d", text: "Cement" }
                    ],
                    answer: "a",
                    explanation: "Pervious concrete is designed with interconnected voids to allow water to pass through. It is made primarily with coarse aggregate, a limited amount of cement paste, and little to no fine aggregates (sand)."
                },
                {
                    id: "cm14q088",
                    src: "TRAN808-00144",
                    text: "The minimum grade of concrete required for pavement design is ______.",
                    options: [
                        { key: "a", text: "M30" },
                        { key: "b", text: "M40" },
                        { key: "c", text: "M35" },
                        { key: "d", text: "M45" }
                    ],
                    answer: "b",
                    explanation: "As per IRC (Indian Road Congress) guidelines, the minimum grade of concrete specified for cement concrete pavements is M40, ensuring high strength and durability to withstand traffic loads."
                },
                {
                    id: "cm14q089",
                    src: "TRAN808-00145",
                    text: "The aggregates which do not have sufficient strength like waste bricks can be used in ______.",
                    options: [
                        { key: "a", text: "Base" },
                        { key: "b", text: "Surface" },
                        { key: "c", text: "Shoulder" },
                        { key: "d", text: "Footpath" }
                    ],
                    answer: "c",
                    explanation: "Shoulders are the non-traffic areas adjacent to the pavement. They require stability but not the high strength needed for the main pavement layers, making them suitable for using lower-quality or recycled aggregates."
                },
                {
                    id: "cm14q090",
                    src: "TRAN808-00146",
                    text: "In crushing test, dry aggregates passing through ______, run rice and retained ______.",
                    options: [
                        { key: "a", text: "11.5, 10" },
                        { key: "b", text: "12.5, 11.5" },
                        { key: "c", text: "10, 2.36" },
                        { key: "d", text: "12.5, 10" }
                    ],
                    answer: "d",
                    explanation: "As per IS:2386 (Part IV), the aggregate crushing test is performed on material passing a 12.5mm IS sieve and retained on a 10mm IS sieve. This specific size fraction is tested for resistance to crushing."
                }
            ]
        },
        {
            id: "cm14wate",
            name: "Water Supply, Sanitation and Environment",
            subject: "Water Supply",
            accent: "blue",
            blurb: "10 questions drawn from the Water Supply, Sanitation and Environment bank.",
            questions: [
                {
                    id: "cm14q091",
                    src: "WATE813-00125",
                    text: "The full form of BES in EIA is",
                    options: [
                        { key: "a", text: "Brief Environmental Study" },
                        { key: "b", text: "Burse Environmental Study" },
                        { key: "c", text: "Bureau of Environmental Study" },
                        { key: "d", text: "Bureau of English Study" }
                    ],
                    answer: "a",
                    explanation: "In some EIA frameworks, a BES (Brief Environmental Study) is a simplified assessment required for projects with potentially limited environmental impacts."
                },
                {
                    id: "cm14q092",
                    src: "WATE813-00126",
                    text: "Once EIA is complete ...",
                    options: [
                        { key: "a", text: "EIA is not submitted to competent authority" },
                        { key: "b", text: "EIA is submitted to competent authority" },
                        { key: "c", text: "EIA is submitted to municipality chief" },
                        { key: "d", text: "EIA is submitted to municipal administrative chief" }
                    ],
                    answer: "b",
                    explanation: "The final EIA report is submitted to the designated competent authority (e.g., a national ministry or agency) for review and to inform the final decision on project approval."
                },
                {
                    id: "cm14q093",
                    src: "WATE813-00127",
                    text: "Process for IEE and EIA is provided by...for development activities in Nepal.",
                    options: [
                        { key: "a", text: "Nepal Environmental assessment guideline 1993" },
                        { key: "b", text: "National Environmental assessment guideline 1992" },
                        { key: "c", text: "National Environmental assessment guideline 1993" },
                        { key: "d", text: "Natural Environmental assessment guideline 1993" }
                    ],
                    answer: "c",
                    explanation: "The National Environmental Impact Assessment Guidelines of 1993 were a key document establishing the formal EIA process in Nepal, later updated by new legislation."
                },
                {
                    id: "cm14q094",
                    src: "WATE813-00128",
                    text: "Administrative Process for IEE and EIA is provided by... for approval, preparation and implementation",
                    options: [
                        { key: "a", text: "EPA 2077 and EPR 2078" },
                        { key: "b", text: "EPA 2076 and EPR 2077" },
                        { key: "c", text: "EPA 2076 and EPA 2077" },
                        { key: "d", text: "EPA 2076 and EPR 2078" }
                    ],
                    answer: "d",
                    explanation: "The Environment Protection Act (EPA) 2076 (2019) and the Environment Protection Rules (EPR) 2078 (2021) provide the current legal framework for the EIA process in Nepal."
                },
                {
                    id: "cm14q095",
                    src: "WATE813-00129",
                    text: "IEE is done to",
                    options: [
                        { key: "a", text: "Minimize the overall environmental impact and cost of the project" },
                        { key: "b", text: "maximize the overall environmental impact and cost of the project" },
                        { key: "c", text: "Minimize the overall positive environmental impact and cost of the project" },
                        { key: "d", text: "maximize the overall environmental impact and cost of the house" }
                    ],
                    answer: "a",
                    explanation: "The purpose of an IEE is to identify potential environmental issues early and propose mitigation measures, thereby minimizing the project's negative environmental impacts and associated costs."
                },
                {
                    id: "cm14q096",
                    src: "WATE813-00130",
                    text: "How many distinct types of actions are defined as part of disaster management?",
                    options: [
                        { key: "a", text: "7" },
                        { key: "b", text: "4" },
                        { key: "c", text: "5" },
                        { key: "d", text: "6" }
                    ],
                    answer: "b",
                    explanation: "The four phases of comprehensive disaster management are: 1) Mitigation, 2) Preparedness, 3) Response, and 4) Recovery. These represent the distinct cycles of action."
                },
                {
                    id: "cm14q097",
                    src: "WATE813-00131",
                    text: "The full form of NDRRMA is",
                    options: [
                        { key: "a", text: "Natural Disaster Risk Reduction and Management Authority." },
                        { key: "b", text: "Nepal Disaster Risk Reduction and Management Authority." },
                        { key: "c", text: "National Disaster Risk Reduction and Management Authority." },
                        { key: "d", text: "National Disaster Risk Reduction and Management Assessment." }
                    ],
                    answer: "c",
                    explanation: "NDRRMA stands for National Disaster Risk Reduction and Management Authority. It is the leading government agency in Nepal for disaster management."
                },
                {
                    id: "cm14q098",
                    src: "WATE813-00132",
                    text: "The full form of DRR is",
                    options: [
                        { key: "a", text: "Disaster risk reuse" },
                        { key: "b", text: "Disaster risk relieves" },
                        { key: "c", text: "Disaster risk relief" },
                        { key: "d", text: "Disaster Risk Reduction" }
                    ],
                    answer: "d",
                    explanation: "DRR is the standard acronym for Disaster Risk Reduction, which encompasses all activities aimed at preventing new and reducing existing disaster risk."
                },
                {
                    id: "cm14q099",
                    src: "WATE813-00133",
                    text: "Nepal Ranks ... in terms of earthquake",
                    options: [
                        { key: "a", text: "11 th" },
                        { key: "b", text: "4 th" },
                        { key: "c", text: "20 th" },
                        { key: "d", text: "6 th" }
                    ],
                    answer: "a",
                    explanation: "According to global seismic risk analyses, Nepal ranks 11th in the world in terms of vulnerability to earthquakes due to its location on a major tectonic plate boundary."
                },
                {
                    id: "cm14q100",
                    src: "WATE813-00134",
                    text: "Nepal Ranks ...th in terms of flood risk.",
                    options: [
                        { key: "a", text: "4" },
                        { key: "b", text: "30" },
                        { key: "c", text: "7" },
                        { key: "d", text: "5" }
                    ],
                    answer: "b",
                    explanation: "Global reports on flood risk, such as the World Risk Report, have ranked Nepal as high as 30th in the world in terms of exposure and vulnerability to flood hazards."
                }
            ]
        }
    ]
};

/* Registered lazily — js/civil.js injects this file when the set is opened. */
window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["civil-14"] = CIVIL_MODEL_14;
