/* ============================================================
   CIVIL MODEL SET 30 — Civil Engineering licence-style model paper
   100 questions · 120 minutes · no negative marking

     Basic Civil Engineering...................  13
     Structural Mechanics......................  11
     Design of Structures......................  10
     Soil Mechanics and Foundation.............  14
     Basic Water Resources Engineering.........  12
     Hydropower................................   9
     Irrigation and Drainage...................  10
     Transportation............................  11
     Water Supply, Sanitation and Environment..  10

   Generated from the civil engineering question bank; every bank
   question is used in exactly one set. Identical duplicate options
   were collapsed, and the key was rotated across a/b/c/d except on
   questions whose options refer to other options.
   The "src" field on each question is its id in the source bank.
   ============================================================ */
const CIVIL_MODEL_30 = {
    day: 60,
    kind: "model",
    badge: { top: "Model", main: "C30" },
    title: "Civil Model Set 30",
    subtitle: "Civil Engineering · 9 subjects",
    durationMinutes: 120,
    negativeMarking: 0,
    chapters: [
        {
            id: "cm30basi",
            name: "Basic Civil Engineering",
            subject: "Basic Civil",
            accent: "blue",
            blurb: "13 questions drawn from the Basic Civil Engineering bank.",
            questions: [
                {
                    id: "cm30q001",
                    src: "BASI674-00378",
                    text: "Pick up the excavation where measurements are made in square meters for payment:",
                    options: [
                        { key: "a", text: "Ordinary cuttings up to 1 m" },
                        { key: "b", text: "Surface dressing up to 15 cm depths" },
                        { key: "c", text: "Surface excavation up to 30 cm depths" },
                        { key: "d", text: "Both (b) and (c)" }
                    ],
                    answer: "d",
                    explanation: "Shallow excavation works like surface dressing (up to 15 cm) and surface excavation (up to 30 cm) are measured in area (sq.m), not volume, due to their minimal depth."
                },
                {
                    id: "cm30q002",
                    src: "BASI674-00379",
                    text: "As per Indian Standard Specifications, the peak discharge for domestic purposes per capita per minute, is taken",
                    options: [
                        { key: "a", text: "1.80 liters for 5 to 10 users" },
                        { key: "b", text: "1.20 liters for 15 users" },
                        { key: "c", text: "1.35 for 20 users" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "IS 1172:1993 specifies these values for estimating peak water demand based on the number of users, as demand per user decreases with a larger group."
                },
                {
                    id: "cm30q003",
                    src: "BASI674-00380",
                    text: "In long and short wall method of estimation, the length of long wall is the centre to centre distance between the walls and",
                    options: [
                        { key: "a", text: "Breadth of the wall" },
                        { key: "b", text: "Half breadth of wall on each side" },
                        { key: "c", text: "One fourth breadth of wall on each side" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "b",
                    explanation: "While the net addition equals one full breadth of the wall, standard engineering literature specifies the process as adding half the breadth of the wall on each side (or at each end) to emphasize that the projection extends outward by B/2 at both corners."
                },
                {
                    id: "cm30q004",
                    src: "BASI674-00381",
                    text: "The measurement is not made in square meters in case of:",
                    options: [
                        { key: "a", text: "D.P.C. (Damp Proof Course)" },
                        { key: "b", text: "Concrete (Jeffries)" },
                        { key: "c", text: "Form works" },
                        { key: "d", text: "Brickwork" }
                    ],
                    answer: "b",
                    explanation: "D.P.C. and Formwork are measured in square meters, but Concrete (or items like brickwork) are generally measured in cubic meters. Hence, measurement for concrete is not made in sq.m."
                },
                {
                    id: "cm30q005",
                    src: "BASI674-00383",
                    text: "The area is measured correct to the near:",
                    options: [
                        { key: "a", text: "0.02 sqm" },
                        { key: "b", text: "0.03 sqm" },
                        { key: "c", text: "0.01 sqm" },
                        { key: "d", text: "0.04 sqm" }
                    ],
                    answer: "c",
                    explanation: "As per standard practice (IS 1200), areas are measured and rounded to the nearest 0.01 square meter for accuracy in estimation."
                },
                {
                    id: "cm30q006",
                    src: "BASI674-00384",
                    text: "The trap which is provided to disconnect the house drain from the street sewer is called:",
                    options: [
                        { key: "a", text: "Master trap" },
                        { key: "b", text: "Intercepting trap" },
                        { key: "c", text: "Interception manhole" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "b",
                    explanation: "An intercepting trap is provided at the junction of a house drain and a public sewer to prevent sewer gases from entering the house drainage system."
                },
                {
                    id: "cm30q007",
                    src: "BASI674-00385",
                    text: "Due to change in price level, a revised estimate is prepared if the sanctioned estimate exceeds:",
                    options: [
                        { key: "a", text: "5.0%" },
                        { key: "b", text: "2.5%" },
                        { key: "c", text: "4.0%" },
                        { key: "d", text: "7.5%" }
                    ],
                    answer: "a",
                    explanation: "A revised estimate is required if the original sanctioned estimate is likely to be exceeded by more than 5% due to rate changes or other factors."
                },
                {
                    id: "cm30q008",
                    src: "BASI674-00386",
                    text: "While preparing a detailed estimate:",
                    options: [
                        { key: "a", text: "Dimension should be measured correct to 0.01 m" },
                        { key: "b", text: "Area should be measured correct to 0.01 sqm" },
                        { key: "c", text: "Volume should be measured correct to 0.01 sqm" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "a",
                    explanation: "Dimensions are measured to the nearest 0.01 m, areas to 0.01 sq m, and volumes to 0.01 cum. the option \"Volume should be measured correct to 0.01 sqm\" is incorrect (sqm instead of cum)."
                },
                {
                    id: "cm30q009",
                    src: "BASI674-00387",
                    text: "The item of the brick structure measured in sq.m. is",
                    options: [
                        { key: "a", text: "Reinforced brick work" },
                        { key: "b", text: "Brick edging" },
                        { key: "c", text: "Broken glass coping" },
                        { key: "d", text: "Brick work in arches" }
                    ],
                    answer: "c",
                    explanation: "Broken glass coping (sq.m.): Measured by surface area because it is a flat layer treatment applied to the top of a boundary wall. Reinforced brick work (cu.m.): Measured by volume as it is a solid, three-dimensional structural element with varying length, width, and thickness. Brick edging (Running meters): Measured by linear length since its cross-section (the size of a single brick) remains constant along the border. Brick work in arches (cu.m.): Measured by volume because it forms a 3D structural span requiring calculations for length, depth, and wall thickness. Verified"
                },
                {
                    id: "cm30q010",
                    src: "BASI674-00388",
                    text: "The expected out turn of 2.5 cm cement concrete floor per mansion per day",
                    options: [
                        { key: "a", text: "2.5 sqm" },
                        { key: "b", text: "5.0 sqm" },
                        { key: "c", text: "10 sqm" },
                        { key: "d", text: "7.5 sqm" }
                    ],
                    answer: "d",
                    explanation: "The expected output (out turn) for a 2.5 cm thick cement concrete floor is typically around 7.5 square meters per mason per day."
                },
                {
                    id: "cm30q011",
                    src: "BASI674-00389",
                    text: "The most reliable estimate is",
                    options: [
                        { key: "a", text: "Detailed estimate" },
                        { key: "b", text: "Preliminary estimate" },
                        { key: "c", text: "Plinth area estimate" },
                        { key: "d", text: "Cube rate estimate" }
                    ],
                    answer: "a",
                    explanation: "A detailed estimate is prepared after finalizing detailed drawings and specifications, involving detailed quantity take-off and pricing, making it the most accurate and reliable."
                },
                {
                    id: "cm30q012",
                    src: "BASI674-00390",
                    text: "According to ISI method of measurement, the order of the sequence is",
                    options: [
                        { key: "a", text: "length, breadth, height" },
                        { key: "b", text: "breadth, length, height" },
                        { key: "c", text: "height, length, breadth" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "a",
                    explanation: "The standard sequence for presenting dimensions in the Indian Standards (IS 1200) is Length, then Breadth, then Height or Depth."
                },
                {
                    id: "cm30q013",
                    src: "BASI674-00391",
                    text: "Anti-siphonage pipe is connected to",
                    options: [
                        { key: "a", text: "Main soil pipe" },
                        { key: "b", text: "Bottom of P trap W.C." },
                        { key: "c", text: "Top of P trap W.C." },
                        { key: "d", text: "Side of water closet" }
                    ],
                    answer: "c",
                    explanation: "An anti-siphonage pipe is connected to the top of the P-trap of a water closet. It provides ventilation to prevent the siphoning action which could break the water seal in the trap."
                }
            ]
        },
        {
            id: "cm30stru",
            name: "Structural Mechanics",
            subject: "Structural Mech",
            accent: "cyan",
            blurb: "11 questions drawn from the Structural Mechanics bank.",
            questions: [
                {
                    id: "cm30q014",
                    src: "STRU935-00317",
                    text: "Which point on the stress strain curve occurs after yield plateau?",
                    options: [
                        { key: "a", text: "Lower yield point" },
                        { key: "b", text: "Upper yield point" },
                        { key: "c", text: "Breaking point" },
                        { key: "d", text: "Ultimate point" }
                    ],
                    answer: "d",
                    explanation: "After the yield plateau (in mild steel), the material begins to strain-harden. The stress increases with strain until it reaches a maximum value, which is the ultimate tensile strength (UTS) or ultimate point. Necking begins after this point."
                },
                {
                    id: "cm30q015",
                    src: "STRU935-00318",
                    text: "How do point loads and udl be represented in SFD?",
                    options: [
                        { key: "a", text: "Simple lines and inclined lines" },
                        { key: "b", text: "Simple lines and curved lines" },
                        { key: "c", text: "Curved lines and inclined lines" },
                        { key: "d", text: "Both curved lines" }
                    ],
                    answer: "a",
                    explanation: "In a Shear Force Diagram (SFD): A point load causes a vertical jump (a simple line straight up or down) in the SFD. A Uniformly Distributed Load (UDL) causes a linearly varying shear force, which is represented by an inclined straight line in the SFD."
                },
                {
                    id: "cm30q016",
                    src: "STRU935-00319",
                    text: "When shear force diagram is parabolic curve between two points, it indicates that there is",
                    options: [
                        { key: "a", text: "Point loads at two points" },
                        { key: "b", text: "UVL between points" },
                        { key: "c", text: "No loading between points" },
                        { key: "d", text: "UDL between points" }
                    ],
                    answer: "b",
                    explanation: "The shape of the SFD is related to the load type by the differential relationship dS/dx = -w. A UDL (constant w) gives a linear SFD (dS/dx = constant). A parabolic SFD (second-order curve) indicates that the load is varying linearly (UVL - Uniformly Varying Load), as integrating a linear function (w) gives a quadratic function (S)."
                },
                {
                    id: "cm30q017",
                    src: "STRU935-00320",
                    text: "Elastic limit is the point .....",
                    options: [
                        { key: "a", text: "Up to which stress is proportional to strain" },
                        { key: "b", text: "At which elongation takes place without application of additional load" },
                        { key: "c", text: "Up to which if the load is removed, original volume and shapes are regained" },
                        { key: "d", text: "None of the mentioned" }
                    ],
                    answer: "c",
                    explanation: "The elastic limit is the maximum stress a material can sustain without any permanent (plastic) deformation upon complete unloading. If the load is removed before reaching this point, the material will return to its original shape and dimensions."
                },
                {
                    id: "cm30q018",
                    src: "STRU935-00321",
                    text: "Where is the necking region?",
                    options: [
                        { key: "a", text: "The area between lower yield point and upper yield point" },
                        { key: "b", text: "The area between the plastic limit and elastic limit" },
                        { key: "c", text: "The area between the ultimate point and initial point" },
                        { key: "d", text: "The area between the ultimate point and rupture" }
                    ],
                    answer: "d",
                    explanation: "Necking is a localized reduction in cross-sectional area that occurs after the ultimate tensile strength (UTS) is reached in a ductile material during a tension test. The region on the stress-strain curve from the UTS to the point of fracture (rupture) is where necking takes place."
                },
                {
                    id: "cm30q019",
                    src: "STRU935-00322",
                    text: "If the material has identical elastic properties in all directions, it is called .....",
                    options: [
                        { key: "a", text: "Isotropic" },
                        { key: "b", text: "Elastic" },
                        { key: "c", text: "Plastic" },
                        { key: "d", text: "Homogeneous" }
                    ],
                    answer: "a",
                    explanation: "Isotropy is the property of a material whereby its mechanical and elastic properties (like Young's Modulus) are identical in all directions. A material can be homogeneous (same composition throughout) but anisotropic (properties vary with direction), like wood."
                },
                {
                    id: "cm30q020",
                    src: "STRU935-00323",
                    text: "The forces in the members of simple trusses, may be analysed by",
                    options: [
                        { key: "a", text: "graphical method" },
                        { key: "b", text: "method of joints" },
                        { key: "c", text: "method of sections" },
                        { key: "d", text: "All the above" }
                    ],
                    answer: "d",
                    explanation: "Simple trusses are stable, determinate structures. The forces in their members can be determined using the graphical method (e.g., Cremona's diagram), the method of joints (applying equilibrium equations to each joint), and the method of sections (cutting the truss and analyzing a section). All these methods are valid for analysis."
                },
                {
                    id: "cm30q021",
                    src: "STRU935-00324",
                    text: "A point subjected to a number of forces will be in equilibrium, if",
                    options: [
                        { key: "a", text: "sum of resolved parts in any two perpendicular directions is zero" },
                        { key: "b", text: "two resolved parts in any two perpendicular directions are equal" },
                        { key: "c", text: "algebraic sum of the forces is zero" },
                        { key: "d", text: "algebraic sum of the moments of the forces about the point is zero" }
                    ],
                    answer: "c",
                    explanation: "For a particle (a point) subjected to concurrent forces, the necessary and sufficient condition for equilibrium is that the vector sum of all forces is zero. This is equivalent to the algebraic sum of the components in any two perpendicular directions being zero. The moment condition is not applicable to a point as all forces act through it."
                },
                {
                    id: "cm30q022",
                    src: "STRU935-00325",
                    text: "In a loaded beam, the point of contraflexure occurs at a section where",
                    options: [
                        { key: "a", text: "bending moment is minimum" },
                        { key: "b", text: "bending moment is maximum" },
                        { key: "c", text: "shearing force is maximum" },
                        { key: "d", text: "bending moment is zero or changes sign" }
                    ],
                    answer: "d",
                    explanation: "The point of contraflexure is defined as the point in a beam where the bending moment is zero and changes its sign from positive to negative or vice versa."
                },
                {
                    id: "cm30q023",
                    src: "STRU935-00326",
                    text: "Sagging bending moment occurs at the ______ of the beam.",
                    options: [
                        { key: "a", text: "Mid Span" },
                        { key: "b", text: "At supports" },
                        { key: "c", text: "Point of contraflexure" },
                        { key: "d", text: "Point of emergence" }
                    ],
                    answer: "a",
                    explanation: "A sagging bending moment causes the beam to sag or deflect downwards in the middle, resulting in tension at the bottom fibers. This typically occurs at the mid-span of a simply supported beam."
                },
                {
                    id: "cm30q024",
                    src: "STRU935-00327",
                    text: "A beam of length L is pinned at both ends and is subjected to a concentrated bending couple of moment M at its centre. The maximum bending moment in the beam is",
                    options: [
                        { key: "a", text: "M" },
                        { key: "b", text: "M/2" },
                        { key: "c", text: "M/4" },
                        { key: "d", text: "M/8" }
                    ],
                    answer: "b",
                    explanation: "For a simply supported beam with a concentrated couple M at midspan, the reactions form a couple to balance M. The bending moment diagram is linear, varying from +M/2 at one end to -M/2 at the other. The maximum absolute bending moment is M/2."
                }
            ]
        },
        {
            id: "cm30desi",
            name: "Design of Structures",
            subject: "Design of Str",
            accent: "slate",
            blurb: "10 questions drawn from the Design of Structures bank.",
            questions: [
                {
                    id: "cm30q025",
                    src: "DESI787-00275",
                    text: "Schmidt’s Rebound Hammer technique is used to measure:",
                    options: [
                        { key: "a", text: "Tensile Strength" },
                        { key: "b", text: "Shrinkage limit" },
                        { key: "c", text: "Surface hardness" },
                        { key: "d", text: "Thickness of member" }
                    ],
                    answer: "c",
                    explanation: "The Schmidt Rebound Hammer test is a non-destructive test that measures the surface hardness of concrete. The rebound number is correlated with the compressive strength of concrete, but it directly measures hardness, not strength itself."
                },
                {
                    id: "cm30q026",
                    src: "DESI787-00276",
                    text: "As per IS : 10262: 2009, the standard deviation for M25 concrete is:",
                    options: [
                        { key: "a", text: "3.5" },
                        { key: "b", text: "4.5" },
                        { key: "c", text: "5.0" },
                        { key: "d", text: "4.0" }
                    ],
                    answer: "d",
                    explanation: "As per IS 10262:2009 (Guidelines for concrete mix design), Table 1, the assumed standard deviation for M25 grade concrete is 4.0 N/mm². This value is used in the mix design calculations to determine the target mean strength."
                },
                {
                    id: "cm30q027",
                    src: "DESI787-00277",
                    text: "The nominal mix for M20 concrete is",
                    options: [
                        { key: "a", text: "1:1.5:3" },
                        { key: "b", text: "1:3:6" },
                        { key: "c", text: "1:2:4" },
                        { key: "d", text: "1:1:2" }
                    ],
                    answer: "a",
                    explanation: "As per IS 456:2000, the nominal mix for M20 grade concrete is 1:1.5:3 (Cement : Fine Aggregate : Coarse Aggregate) by weight."
                },
                {
                    id: "cm30q028",
                    src: "DESI787-00278",
                    text: "Maximum water quantity per bag of cement for M20 grade concrete is",
                    options: [
                        { key: "a", text: "34 l" },
                        { key: "b", text: "30 l" },
                        { key: "c", text: "32 l" },
                        { key: "d", text: "28 l" }
                    ],
                    answer: "b",
                    explanation: "As per IS 456:2000, Table 5, the maximum free water-cement ratio for M20 concrete for mild exposure is 0.55. Since one bag of cement is 50 kg, the maximum water content per bag is 50 * 0.55 = 27.5 liters. Common practice and other codes often specify a maximum of 30 liters per bag to ensure workability without exceeding the w/c ratio too much. The closest standard value is 30 l."
                },
                {
                    id: "cm30q029",
                    src: "DESI787-00279",
                    text: "What should be mean target strength to get M20 concrete",
                    options: [
                        { key: "a", text: "20 N/mm²" },
                        { key: "b", text: "21.65 N/mm²" },
                        { key: "c", text: "26.60 N/mm²" },
                        { key: "d", text: "24 N/mm²" }
                    ],
                    answer: "c",
                    explanation: "The target mean strength (f'_t) is calculated as f_ck + k*S, where k is a constant (usually 1.65 for 5% failure probability) and S is the standard deviation. For M20 and a standard deviation of 4 N/mm² (as per IS 10262:2009 for M25, but often used for lower grades), f'_t = 20 + 1.65*4 = 26.6 N/mm²."
                },
                {
                    id: "cm30q030",
                    src: "DESI787-00280",
                    text: "Size of test specimen for splitting tensile test",
                    options: [
                        { key: "a", text: "Cube of side 15 cm" },
                        { key: "b", text: "Cuboid of 15cm x 15cm x 50cm" },
                        { key: "c", text: "Prism" },
                        { key: "d", text: "Cylinder of diameter 15 cm, height 30 cm" }
                    ],
                    answer: "d",
                    explanation: "As per IS 5816:1999, the standard specimen for the splitting tensile strength test of concrete is a cylinder 150 mm in diameter and 300 mm in length (15 cm x 30 cm)."
                },
                {
                    id: "cm30q031",
                    src: "DESI787-00281",
                    text: "Which of following is standard grade concrete?",
                    options: [
                        { key: "a", text: "M10-M20" },
                        { key: "b", text: "M25-M60" },
                        { key: "c", text: "M60+" },
                        { key: "d", text: "all of above" }
                    ],
                    answer: "b",
                    explanation: "As per IS 456:2000, standard concrete grades range from M25 to M60. Grades below M25 are designated as ordinary concrete, and grades above M60 are designated as high-strength concrete."
                },
                {
                    id: "cm30q032",
                    src: "DESI787-00282",
                    text: "If 1500 g of cement is required to have cement paste 1875 g of normal consistency the percentage of water is,",
                    options: [
                        { key: "a", text: "20%" },
                        { key: "b", text: "25%" },
                        { key: "c", text: "30%" },
                        { key: "d", text: "none" }
                    ],
                    answer: "b",
                    explanation: "The weight of water in the paste is 1875 g - 1500 g = 375 g. The percentage of water by weight of cement is (375 / 1500) * 100 = 25%. This is the standard test for normal consistency of cement paste (Vicat apparatus)."
                },
                {
                    id: "cm30q033",
                    src: "DESI787-00283",
                    text: "Flexural strength of M25 concrete is?",
                    options: [
                        { key: "a", text: "3 MPa" },
                        { key: "b", text: "5.0 MPa" },
                        { key: "c", text: "3.5 MPa" },
                        { key: "d", text: "25.0 MPa" }
                    ],
                    answer: "c",
                    explanation: "The flexural strength (modulus of rupture) of concrete is approximately 0.7√f_ck (as per IS 456:2000, Clause 6.2.2). For M25 concrete (f_ck = 25 N/mm²), flexural strength ≈ 0.7 * √25 = 0.7 * 5 = 3.5 N/mm² (MPa)."
                },
                {
                    id: "cm30q034",
                    src: "DESI787-00284",
                    text: "What is permanent action according to classification of actions by IS code?",
                    options: [
                        { key: "a", text: "Due to construction and service stage loads" },
                        { key: "b", text: "Due to accidents" },
                        { key: "c", text: "Due to earthquake loads" },
                        { key: "d", text: "Due to self weight" }
                    ],
                    answer: "d",
                    explanation: "Permanent actions are those that are likely to act throughout a given reference period and for which variations in magnitude with time are negligible. This includes the self-weight of the structure and fixed permanent equipment."
                }
            ]
        },
        {
            id: "cm30soil",
            name: "Soil Mechanics and Foundation",
            subject: "Soil Mechanics",
            accent: "amber",
            blurb: "14 questions drawn from the Soil Mechanics and Foundation bank.",
            questions: [
                {
                    id: "cm30q035",
                    src: "SOIL136-00385",
                    text: "Which of the following type of loading method is popular now-a-days?",
                    options: [
                        { key: "a", text: "Reaction truss" },
                        { key: "b", text: "Gravity loading platform" },
                        { key: "c", text: "Concrete blocks" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "a",
                    explanation: "The Reaction Truss (or reaction frame) method is more popular and efficient for larger loads as it eliminates the need for cumbersome, heavy kentledge (weights) and is generally easier and safer to set up on site."
                },
                {
                    id: "cm30q036",
                    src: "SOIL136-00386",
                    text: "The value of factor of safety used, for finding safe bearing capacity is ______",
                    options: [
                        { key: "a", text: "2.5" },
                        { key: "b", text: "3" },
                        { key: "c", text: "2" },
                        { key: "d", text: "4" }
                    ],
                    answer: "b",
                    explanation: "A factor of safety (FOS) of 3 is commonly used in geotechnical engineering to derive the safe bearing capacity (q_s) from the ultimate bearing capacity (q_u) determined from a plate load test: q_s = q_u / 3.\""
                },
                {
                    id: "cm30q037",
                    src: "SOIL136-00387",
                    text: "For a c-φ soil, Housel suggested which of the following expression?",
                    options: [
                        { key: "a", text: "Q = A q" },
                        { key: "b", text: "q_f = M + N (q_f / B_p)" },
                        { key: "c", text: "Q = A q + P s" },
                        { key: "d", text: "Q = P s" }
                    ],
                    answer: "c",
                    explanation: "Housel's method proposes that the load (Q) a footing can carry is a function of two soil properties: a bearing value (q) related to area (A) and a perimeter shear value (s) related to the perimeter (P). Thus, Q = A * q + P * s."
                },
                {
                    id: "cm30q038",
                    src: "SOIL136-00388",
                    text: "______ footing is used in load bearing masonry construction.",
                    options: [
                        { key: "a", text: "isolated" },
                        { key: "b", text: "Strap" },
                        { key: "c", text: "Pile" },
                        { key: "d", text: "Strip" }
                    ],
                    answer: "d",
                    explanation: "Strip footings (or continuous footings) are long footings that support a load-bearing wall or a row of columns. They are commonly used in load-bearing masonry construction to distribute the load over a larger area."
                },
                {
                    id: "cm30q039",
                    src: "SOIL136-00389",
                    text: "How many types of combined footing are possible?",
                    options: [
                        { key: "a", text: "3" },
                        { key: "b", text: "2" },
                        { key: "c", text: "4" },
                        { key: "d", text: "5" }
                    ],
                    answer: "a",
                    explanation: "The main types of combined footings are rectangular, trapezoidal, and strap (or cantilever) footings."
                },
                {
                    id: "cm30q040",
                    src: "SOIL136-00390",
                    text: "Steining is a component of which of the below type of foundation?",
                    options: [
                        { key: "a", text: "Pile" },
                        { key: "b", text: "Well" },
                        { key: "c", text: "Strap" },
                        { key: "d", text: "Isolated" }
                    ],
                    answer: "b",
                    explanation: "Steining is the vertical wall of a well foundation, which is a type of deep foundation. It is usually made of brick or concrete masonry."
                },
                {
                    id: "cm30q041",
                    src: "SOIL136-00391",
                    text: "Pier foundation is also called:",
                    options: [
                        { key: "a", text: "Box" },
                        { key: "b", text: "Bridge" },
                        { key: "c", text: "Caisson" },
                        { key: "d", text: "Girder" }
                    ],
                    answer: "c",
                    explanation: "A pier foundation is a type of deep foundation, also commonly known as a caisson foundation. It is constructed by excavating a cylindrical hole and filling it with concrete."
                },
                {
                    id: "cm30q042",
                    src: "SOIL136-00393",
                    text: "Machine foundation is subjected to:",
                    options: [
                        { key: "a", text: "Static loads" },
                        { key: "b", text: "Wind loads" },
                        { key: "c", text: "Dynamic loads" },
                        { key: "d", text: "Static and dynamic loads" }
                    ],
                    answer: "d",
                    explanation: "Machine foundations must be designed to withstand both the static weight of the machine and the dynamic forces (vibrations) generated during its operation."
                },
                {
                    id: "cm30q043",
                    src: "SOIL136-00394",
                    text: "Foundations can be broadly classified under:",
                    options: [
                        { key: "a", text: "Shallow foundation and Deep foundation" },
                        { key: "b", text: "Pile foundation" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "Both (a) and (b)" }
                    ],
                    answer: "a",
                    explanation: "Foundations are broadly classified into two main categories: shallow foundations (e.g., spread footings) and deep foundations (e.g., piles, piers, caissons)."
                },
                {
                    id: "cm30q044",
                    src: "SOIL136-00395",
                    text: "A foundation is said to be shallow if its depth is ______ than its width.",
                    options: [
                        { key: "a", text: "Equal to and Less than" },
                        { key: "b", text: "Greater than" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "Both (a) and (b)" }
                    ],
                    answer: "a",
                    explanation: "A foundation is generally considered shallow if its depth (Df) is less than or equal to its width (B)."
                },
                {
                    id: "cm30q045",
                    src: "SOIL136-00396",
                    text: "Which of the following, is a type of shallow footing?",
                    options: [
                        { key: "a", text: "Pile foundation" },
                        { key: "b", text: "Pier foundation" },
                        { key: "c", text: "Spread footing" },
                        { key: "d", text: "Well foundation" }
                    ],
                    answer: "c",
                    explanation: "Spread footings (or isolated footings) are the most common type of shallow foundation, used to support a single column."
                },
                {
                    id: "cm30q046",
                    src: "SOIL136-00397",
                    text: "Which of the below is the most commonly used shallow foundation?",
                    options: [
                        { key: "a", text: "Strap footing" },
                        { key: "b", text: "Combined footing" },
                        { key: "c", text: "Raft footing" },
                        { key: "d", text: "Spread footing" }
                    ],
                    answer: "d",
                    explanation: "Spread footings (isolated footings) are the simplest and most frequently used type of shallow foundation for individual columns."
                },
                {
                    id: "cm30q047",
                    src: "SOIL136-00398",
                    text: "The pressure intensity beneath the footing depends upon ______.",
                    options: [
                        { key: "a", text: "All of the mentioned" },
                        { key: "b", text: "Rigidity of the footing" },
                        { key: "c", text: "Soil type" },
                        { key: "d", text: "Condition of soil" }
                    ],
                    answer: "a",
                    explanation: "The distribution of pressure under a footing is influenced by the rigidity of the footing itself, the type of soil (cohesive vs. cohesionless), and the overall condition of the soil (e.g., density, saturation)."
                },
                {
                    id: "cm30q048",
                    src: "SOIL136-00399",
                    text: "Once the pressure distribution is known in the reinforced concrete footing can be calculated:",
                    options: [
                        { key: "a", text: "Finding moment and Shear force" },
                        { key: "b", text: "Bearing pressure" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "Both (a) and (b)" }
                    ],
                    answer: "a",
                    explanation: "Once the soil pressure distribution is known, structural design of the footing involves calculating the bending moments and shear forces to determine the required reinforcement."
                }
            ]
        },
        {
            id: "cm30watr",
            name: "Basic Water Resources Engineering",
            subject: "Water Resources",
            accent: "emerald",
            blurb: "12 questions drawn from the Basic Water Resources Engineering bank.",
            questions: [
                {
                    id: "cm30q049",
                    src: "WATE701-00337",
                    text: "The 12-hours unit hydrograph catchment is triangular in shape with a base width of 144 hours and peak discharge of 23 m³/s. The unit hydrograph refers to a catchment of area",
                    options: [
                        { key: "a", text: "756 km²" },
                        { key: "b", text: "1000 km²" },
                        { key: "c", text: "596 km²" },
                        { key: "d", text: "None" }
                    ],
                    answer: "c",
                    explanation: "The area under the unit hydrograph represents 1 cm of direct runoff. For a triangular UH, the volume is (1/2 * base width * peak discharge). Set this volume equal to 1 cm * catchment area. Solve for the area: Area (km²) = [ (1/2 * 144 hrs * 3600 s/hr * 23 m³/s) / (0.01 m) ] / 1e6. The result is approximately 596 km²."
                },
                {
                    id: "cm30q050",
                    src: "WATE701-00338",
                    text: "An instantaneous unit hydrograph is a hydrograph of",
                    options: [
                        { key: "a", text: "unit duration and infinitely small rainfall excess" },
                        { key: "b", text: "infinitely small duration and of unit rainfall excess of an infinitely small area" },
                        { key: "c", text: "unit rainfall excess on infinitely small area" },
                        { key: "d", text: "infinitely small duration and of unit rainfall excess" }
                    ],
                    answer: "d",
                    explanation: "An Instantaneous Unit Hydrograph (IUH) is the hypothetical direct runoff hydrograph from a catchment resulting from a unit depth (e.g., 1 cm) of effective rainfall falling instantaneously (i.e., over an infinitely small duration) and uniformly over the entire catchment."
                },
                {
                    id: "cm30q051",
                    src: "WATE701-00339",
                    text: "Rational formula is applicable only to",
                    options: [
                        { key: "a", text: "large catchment having area &gt; 100 km²" },
                        { key: "b", text: "small size catchments having area &lt; 50 km²" },
                        { key: "c", text: "medium size catchment having area between 50 km² – 100 km²" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "b",
                    explanation: "The Rational Formula (Q = CiA) assumes a constant rainfall intensity (i) and runoff coefficient (C) for the entire catchment. This assumption of spatial and temporal uniformity is only reasonable for small catchments, typically less than 50 km²."
                },
                {
                    id: "cm30q052",
                    src: "WATE701-00340",
                    text: "The time needed for water to flow from the most remote point in a watershed outlet is known as",
                    options: [
                        { key: "a", text: "time of overland flow" },
                        { key: "b", text: "time of concentration" },
                        { key: "c", text: "time of travel" },
                        { key: "d", text: "rainfall duration" }
                    ],
                    answer: "b",
                    explanation: "The time of concentration (t_c) is defined as the time required for water to travel from the hydraulically most distant point in the watershed to the outlet. It is a fundamental parameter in hydrologic design."
                },
                {
                    id: "cm30q053",
                    src: "WATE701-00341",
                    text: "The probable maximum flood is",
                    options: [
                        { key: "a", text: "standard project flood of extremely large river" },
                        { key: "b", text: "flood adopted in the design of all kinds of spillways" },
                        { key: "c", text: "extremely large but physically possible flood in the region" },
                        { key: "d", text: "maximum possible flood that can occur anywhere in the country" }
                    ],
                    answer: "c",
                    explanation: "The Probable Maximum Flood (PMF) is the theoretical maximum flood that could occur at a particular location, given the most severe combination of critical meteorological and hydrologic conditions that are considered physically possible in the region. It is used for designing high-hazard structures like large dam spillways."
                },
                {
                    id: "cm30q054",
                    src: "WATE701-00342",
                    text: "A culvert is designed for a peak flow Qp on the basis of rational flow. If a storm of the same intensity as used in the design but of duration twice larger occurs, the resulting discharge will be",
                    options: [
                        { key: "a", text: "2Qp" },
                        { key: "b", text: "Qp / 2" },
                        { key: "c", text: "Qp²" },
                        { key: "d", text: "Qp" }
                    ],
                    answer: "d",
                    explanation: "The Rational Formula (Q = CiA) states that peak discharge is a function of rainfall intensity (i), not duration. If the intensity remains the same, the peak discharge (Qp) will remain the same, regardless of the storm duration. The duration must be at least equal to the time of concentration for the formula to be valid."
                },
                {
                    id: "cm30q055",
                    src: "WATE701-00343",
                    text: "An intermittent stream",
                    options: [
                        { key: "a", text: "Has flows in the stream wet season due" },
                        { key: "b", text: "has water table above the stream bed" },
                        { key: "c", text: "Has only flash flow in response to storms throughout the year" },
                        { key: "d", text: "Does not have any contribution of groundwater at any time." }
                    ],
                    answer: "a",
                    explanation: "An intermittent stream (or seasonal stream) flows only during certain times of the year, typically during the wet season when the water table is high enough to contribute groundwater or due to seasonal rainfall. It dries up during the dry season."
                },
                {
                    id: "cm30q056",
                    src: "WATE701-00344",
                    text: "A unit hydrograph has one unit of",
                    options: [
                        { key: "a", text: "Rainfall duration" },
                        { key: "b", text: "Rainfall excess" },
                        { key: "c", text: "Time base of direct runoff" },
                        { key: "d", text: "Discharge" }
                    ],
                    answer: "b",
                    explanation: "A unit hydrograph is defined by a unit depth (e.g., 1 cm or 1 inch) of rainfall excess (effective rainfall) occurring uniformly over the watershed in a specified duration."
                },
                {
                    id: "cm30q057",
                    src: "WATE701-00345",
                    text: "If two 2-hour hydrograph are staggered by 2 hours and added graphically, the resulting hydrograph will be",
                    options: [
                        { key: "a", text: "7-hour unit hydrograph" },
                        { key: "b", text: "4-hour unit hydrograph" },
                        { key: "c", text: "2-hour unit hydrograph with 2 cm runoff" },
                        { key: "d", text: "4-hour unit hydrograph with 2 cm" }
                    ],
                    answer: "c",
                    explanation: "This describes the principle of superposition used to derive a unit hydrograph for a longer duration. Adding two identical 2-hour unit hydrographs (each for 1 cm of runoff), staggered by 2 hours, results in a hydrograph for 2 cm of runoff resulting from a 2-hour storm. This is not a unit hydrograph itself but a direct runoff hydrograph for a specific event."
                },
                {
                    id: "cm30q058",
                    src: "WATE701-00346",
                    text: "The hydrograph derived by relating the characteristics such as peak flow, base time with watershed characteristics such as time of concentration is called",
                    options: [
                        { key: "a", text: "Synthetic hydrograph" },
                        { key: "b", text: "Zero duration hydrograph" },
                        { key: "c", text: "Unit hydrograph" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "a",
                    explanation: "A synthetic unit hydrograph is derived using empirical formulas that relate its characteristics (like peak flow, time to peak, base time) to the physiographic characteristics of a watershed (like area, slope, length of the main channel) when streamflow data is not available."
                },
                {
                    id: "cm30q059",
                    src: "WATE701-00348",
                    text: "Variations in peak discharge in the hydrograph is acceptable up to",
                    options: [
                        { key: "a", text: "± 10 %" },
                        { key: "b", text: "± 5 %" },
                        { key: "c", text: "± 15 %" },
                        { key: "d", text: "± 20 %" }
                    ],
                    answer: "a",
                    explanation: "When developing a unit hydrograph from multiple storm events, a variation of up to ±10% in the peak discharge of the derived hydrographs is generally considered acceptable for them to be averaged into a single representative unit hydrograph."
                },
                {
                    id: "cm30q060",
                    src: "WATE701-00349",
                    text: "A mean annual runoff of 1 m/s from a catchment of area 31.54 km² represents an effective rainfall of",
                    options: [
                        { key: "a", text: "1 cm" },
                        { key: "b", text: "100 cm" },
                        { key: "c", text: "100 mm" },
                        { key: "d", text: "3.17 cm" }
                    ],
                    answer: "b",
                    explanation: "Calculate the total annual runoff volume: 1 m³/s * 365 days * 24 hrs/day * 3600 s/hr. Divide this volume (in m³) by the catchment area (31.54 km² * 10^6 m²/km²) to find the depth of water in meters. Convert to cm. The result is very close to 100 cm. The area 31.54 km² is chosen so the math works out neatly to 100 cm (or 1 m)."
                }
            ]
        },
        {
            id: "cm30hydr",
            name: "Hydropower",
            subject: "Hydropower",
            accent: "cyan",
            blurb: "9 questions drawn from the Hydropower bank.",
            questions: [
                {
                    id: "cm30q061",
                    src: "HYDR626-00271",
                    text: "Bottom intake is suitable for project having",
                    options: [
                        { key: "a", text: "Steep gradient of river" },
                        { key: "b", text: "Flat gradient of river" },
                        { key: "c", text: "High sediment laden river" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "a",
                    explanation: "A bottom intake, or Tyrolean weir, is most suitable for rivers with steep gradients because it utilizes gravity to draw water through the top grating while allowing larger bed load sediments to be flushed underneath."
                },
                {
                    id: "cm30q062",
                    src: "HYDR626-00272",
                    text: "Bottom intake is not suitable for project having",
                    options: [
                        { key: "a", text: "Very flat gradient of river" },
                        { key: "b", text: "Flat gradient of river" },
                        { key: "c", text: "Both of the above" },
                        { key: "d", text: "More than 10% of the above" }
                    ],
                    answer: "c",
                    explanation: "Bottom intakes are inefficient in rivers with flat gradients because the low stream velocity prevents the effective flushing of sediments that accumulate on and around the intake grating."
                },
                {
                    id: "cm30q063",
                    src: "HYDR626-00273",
                    text: "Which of the following are feature ideal headworks",
                    options: [
                        { key: "a", text: "Withdrawal of required amount of water" },
                        { key: "b", text: "Economic and minimum operation and maintenance" },
                        { key: "c", text: "Prevent Floating Debris and ice from entering into the conveyance system" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "Ideal headworks reliably divert the design discharge, are cost-effective to build and maintain, and include features like trash racks to exclude debris and ice."
                },
                {
                    id: "cm30q064",
                    src: "HYDR626-00274",
                    text: "Flood wall is designed upto",
                    options: [
                        { key: "a", text: "Height of maximum flood level" },
                        { key: "b", text: "Height of minimum flood level" },
                        { key: "c", text: "Up to 5m" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "a",
                    explanation: "A flood wall is a structure designed to protect an area from flooding. It must be designed to a height equal to or greater than the maximum anticipated flood level to be effective."
                },
                {
                    id: "cm30q065",
                    src: "HYDR626-00275",
                    text: "Undersluice is constructed",
                    options: [
                        { key: "a", text: "To flush away accumulated bed load in front of intake towards the downstream of the river" },
                        { key: "b", text: "To flush away heavy debris" },
                        { key: "c", text: "To flush dead animal and fishes" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "a",
                    explanation: "Undersluices, or scouring sluices, are gates located near the bed level of a weir. Their primary purpose is to create a high-velocity flow that scours and flushes away bed load sediment deposited in front of the main intake."
                },
                {
                    id: "cm30q066",
                    src: "HYDR626-00276",
                    text: "Design discharge of intake will be taken",
                    options: [
                        { key: "a", text: "as 10 to 20% of turbine discharge to account for flushing" },
                        { key: "b", text: "as 100 to 120% of turbine discharge to account for flushing" },
                        { key: "c", text: "as 50 to 60% of turbine discharge to account for flushing" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "b",
                    explanation: "The design discharge of the intake is typically 100-120% of the turbine discharge. This additional capacity accounts for water needed for flushing sediments from the settling basin or other structures within the system."
                },
                {
                    id: "cm30q067",
                    src: "HYDR626-00277",
                    text: "Which type of hydropower plant uses a dam to create a reservoir to store water for electricity generation?",
                    options: [
                        { key: "a", text: "Reservoir plant" },
                        { key: "b", text: "Run-of-river plant" },
                        { key: "c", text: "Pumped-storage plant" },
                        { key: "d", text: "Tidal plant" }
                    ],
                    answer: "a",
                    explanation: "A reservoir hydropower plant, also known as an impoundment plant, uses a dam to store river water in a reservoir. Water released from the reservoir flows through a turbine, spinning it, which activates a generator to produce electricity."
                },
                {
                    id: "cm30q068",
                    src: "HYDR626-00278",
                    text: "Which type of hydropower plant uses the difference in water levels between high tide and low tide to generate electricity?",
                    options: [
                        { key: "a", text: "Reservoir plant" },
                        { key: "b", text: "Tidal plant" },
                        { key: "c", text: "Run-of-river plant" },
                        { key: "d", text: "Pumped-storage plant" }
                    ],
                    answer: "b",
                    explanation: "Tidal power plants harness the energy from the natural rise and fall of tides. The gravitational pull of the moon and sun on the earth's oceans creates this predictable energy source."
                },
                {
                    id: "cm30q069",
                    src: "HYDR626-00280",
                    text: "Which type of hydropower plant is designed to operate continuously, with little or no fluctuation in output?",
                    options: [
                        { key: "a", text: "Peaking plant" },
                        { key: "b", text: "Intermediate load plant" },
                        { key: "c", text: "Base load plant" },
                        { key: "d", text: "Pumped-storage plant" }
                    ],
                    answer: "c",
                    explanation: "Base load power plants are designed to run continuously at or near full capacity to meet the minimum level of power demand 24/7. They provide a constant, reliable supply of electricity."
                }
            ]
        },
        {
            id: "cm30irri",
            name: "Irrigation and Drainage",
            subject: "Irrigation",
            accent: "emerald",
            blurb: "10 questions drawn from the Irrigation and Drainage bank.",
            questions: [
                {
                    id: "cm30q070",
                    src: "IRRI951-00311",
                    text: "In the design of surface drainage on hilly road areas, a typical design assumption for side‑drain depth is:",
                    options: [
                        { key: "a", text: "100 mm" },
                        { key: "b", text: "200 mm" },
                        { key: "c", text: "400 mm" },
                        { key: "d", text: "300 mm" }
                    ],
                    answer: "d",
                    explanation: "Nn the document Department of Roads, Nepal (“Designing Safer Side Drains”), it states that channel drains (not ponding water on the carriageway) should ideally be no deeper than 300 mm (with an absolute maximum of 450 mm). https://dor.gov.np/home/publication/traffic-safety/force/designing-safer-side-drains"
                },
                {
                    id: "cm30q071",
                    src: "IRRI951-00312",
                    text: "The subsurface drainage is also called",
                    options: [
                        { key: "a", text: "Tile drainage" },
                        { key: "b", text: "Under Ground drainage" },
                        { key: "c", text: "Both (a) and (b)" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "c",
                    explanation: "Subsurface drainage is a general term for systems that remove water from below the soil surface. \"Tile drainage\" (using pipes) and \"underground drainage\" are common synonyms."
                },
                {
                    id: "cm30q072",
                    src: "IRRI951-00313",
                    text: "A desirable minimum working grade in sub surface drainage is taken as",
                    options: [
                        { key: "a", text: "0.5 %" },
                        { key: "b", text: "0.2 %" },
                        { key: "c", text: "1 %" },
                        { key: "d", text: "3 %" }
                    ],
                    answer: "b",
                    explanation: "A very slight slope is sufficient for subsurface drains because they flow full. A minimum grade of 0.05% to 0.2% is often used to ensure self-cleansing velocity and prevent siltation, with 0.2% being a common practical minimum."
                },
                {
                    id: "cm30q073",
                    src: "IRRI951-00314",
                    text: "Which category of river training work deals with flood control?",
                    options: [
                        { key: "a", text: "Training for Sediment" },
                        { key: "b", text: "Low Water Training" },
                        { key: "c", text: "Training for Discharge" },
                        { key: "d", text: "Training for Depth" }
                    ],
                    answer: "c",
                    explanation: "River training works are classified based on the water level they are designed to manage. Training for Discharge, often involving structures like levees or dykes, is specifically aimed at confining flood waters within a set channel to control floods."
                },
                {
                    id: "cm30q074",
                    src: "IRRI951-00315",
                    text: "Which category of river training work helps in navigation of the channels?",
                    options: [
                        { key: "a", text: "Mean Water Training" },
                        { key: "b", text: "Training for Discharge" },
                        { key: "c", text: "Training for Sediment" },
                        { key: "d", text: "Training for Depths" }
                    ],
                    answer: "d",
                    explanation: "Low Water Training, also known as Training for Depth, focuses on maintaining a sufficient depth of water during the dry season. This is crucial for navigation, as it ensures channels remain navigable even when water levels are low."
                },
                {
                    id: "cm30q075",
                    src: "IRRI951-00317",
                    text: "Into how many groups groynes are classified according to the function they serve?",
                    options: [
                        { key: "a", text: "3" },
                        { key: "b", text: "2" },
                        { key: "c", text: "4" },
                        { key: "d", text: "5" }
                    ],
                    answer: "a",
                    explanation: "Based on their function and the effect they have on river flow, groynes are primarily classified into three types: 1) Attracting Groynes (pointing downstream), 2) Repelling Groynes (pointing upstream), and 3) Deflecting Groynes (perpendicular to the bank)."
                },
                {
                    id: "cm30q076",
                    src: "IRRI951-00318",
                    text: "When the river flows through the steep hilly region, then that stage is known as",
                    options: [
                        { key: "a", text: "Rocky stage" },
                        { key: "b", text: "Boulder stage" },
                        { key: "c", text: "Alluvial stage" },
                        { key: "d", text: "Delta stage" }
                    ],
                    answer: "b",
                    explanation: "The 'Boulder stage' refers to the upper course of a river in mountainous or hilly terrain. Here, the river has a steep slope, high velocity, and carries large sediments like boulders, performing mainly erosional work."
                },
                {
                    id: "cm30q077",
                    src: "IRRI951-00319",
                    text: "When river flows through the plain terrain, then that stage is known as",
                    options: [
                        { key: "a", text: "Delta stage" },
                        { key: "b", text: "Boulder stage" },
                        { key: "c", text: "Through stage" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "d",
                    explanation: "The correct term for a river flowing through plain terrain is the 'Alluvial stage' or 'Valley stage'. In this mature stage, the river's slope reduces, it carries finer sediments, and performs both erosion and deposition, often forming meanders."
                },
                {
                    id: "cm30q078",
                    src: "IRRI951-00320",
                    text: "The permeable temporary structure constructed on the river bank to protect it from erosion is known as",
                    options: [
                        { key: "a", text: "Gulde bank" },
                        { key: "b", text: "Repelling groyne" },
                        { key: "c", text: "N/A" },
                        { key: "d", text: "Spur" }
                    ],
                    answer: "d",
                    explanation: "A spur is a river training structure (often temporary and permeable) built projecting from the bank into the river. Its purpose is to protect the bank from erosion by deflecting the current away from it. Groynes are a type of spur."
                },
                {
                    id: "cm30q079",
                    src: "IRRI951-00321",
                    text: "In which stage river velocity is maximum or very high?",
                    options: [
                        { key: "a", text: "Boulder stage" },
                        { key: "b", text: "Rocky stage" },
                        { key: "c", text: "Alluvial stage" },
                        { key: "d", text: "Delta stage" }
                    ],
                    answer: "a",
                    explanation: "River velocity is highest in the 'Boulder stage' (upper course). The steep gradient in the hilly regions causes the water to flow with maximum force and high velocity, enabling it to transport large boulders and perform intense erosion."
                }
            ]
        },
        {
            id: "cm30tran",
            name: "Transportation",
            subject: "Transportation",
            accent: "rose",
            blurb: "11 questions drawn from the Transportation bank.",
            questions: [
                {
                    id: "cm30q080",
                    src: "TRAN808-00319",
                    text: "Design needs to be conducted during the early phase of the project.",
                    options: [
                        { key: "a", text: "Primary" },
                        { key: "b", text: "Preliminary" },
                        { key: "c", text: "Trial" },
                        { key: "d", text: "Initial" }
                    ],
                    answer: "b",
                    explanation: "Preliminary design is the initial phase where the basic layout, material choices, and approximate dimensions are established, setting the direction for the detailed design later."
                },
                {
                    id: "cm30q081",
                    src: "TRAN808-00320",
                    text: "What is the factor that ensures a good pavement design process?",
                    options: [
                        { key: "a", text: "Location" },
                        { key: "b", text: "Fund" },
                        { key: "c", text: "Effective Communication" },
                        { key: "d", text: "Climate" }
                    ],
                    answer: "c",
                    explanation: "While all factors are important, effective communication between all stakeholders (clients, designers, contractors) is fundamental to defining needs, constraints, and ensuring the design is implemented correctly."
                },
                {
                    id: "cm30q082",
                    src: "TRAN808-00321",
                    text: "Road maintenance job include",
                    options: [
                        { key: "a", text: "Maintenance of road pavement" },
                        { key: "b", text: "Maintenance of shoulders" },
                        { key: "c", text: "Maintenance of road drainage work" },
                        { key: "d", text: "All of these" }
                    ],
                    answer: "d",
                    explanation: "Road maintenance is a comprehensive activity that involves taking care of the pavement surface, the shoulders on either side, and the drainage systems to ensure water is effectively channeled away, preventing damage."
                },
                {
                    id: "cm30q083",
                    src: "TRAN808-00322",
                    text: "The basic causes of sub-grade failure are",
                    options: [
                        { key: "a", text: "Inadequate stability" },
                        { key: "b", text: "Excessive stress application" },
                        { key: "c", text: "Inadequate stress application" },
                        { key: "d", text: "All the above" }
                    ],
                    answer: "d",
                    explanation: "Sub-grade failure occurs when the soil beneath the pavement cannot support the loads applied to it. This can be due to the soil's inherent lack of strength or from applying a load that is too heavy."
                },
                {
                    id: "cm30q084",
                    src: "TRAN808-00323",
                    text: "Which of the following is not a flexible pavement failure",
                    options: [
                        { key: "a", text: "Ruts" },
                        { key: "b", text: "Slab failure" },
                        { key: "c", text: "Pot holes" },
                        { key: "d", text: "Frost heaving" }
                    ],
                    answer: "b",
                    explanation: "Flexible pavements fail due to surface distortions like ruts and potholes, or subgrade issues like frost heaving. Slab failure is a specific failure mode of rigid pavements."
                },
                {
                    id: "cm30q085",
                    src: "TRAN808-00324",
                    text: "Slab failure is a type of",
                    options: [
                        { key: "a", text: "Flexible pavement failure" },
                        { key: "b", text: "Semi-rigid pavement failure" },
                        { key: "c", text: "Rigid pavement failure" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "c",
                    explanation: "Slab failure refers to the breaking of a concrete slab into two or more pieces, which is a classic structural failure associated with rigid pavements."
                },
                {
                    id: "cm30q086",
                    src: "TRAN808-00325",
                    text: "Map cracking is",
                    options: [
                        { key: "a", text: "Formation of irregular cracks of bituminous surfacing" },
                        { key: "b", text: "Formation of cracks followed with a depression" },
                        { key: "c", text: "Formation of cracks in the longitudinal direction" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "a",
                    explanation: "Map cracking, also known as alligator cracking, is a pattern of interconnected irregular cracks in flexible pavements, often indicating fatigue failure."
                },
                {
                    id: "cm30q087",
                    src: "TRAN808-00326",
                    text: "Which of the following is not a type of rigid pavement failure",
                    options: [
                        { key: "a", text: "Ruts" },
                        { key: "b", text: "Shrinkage cracks" },
                        { key: "c", text: "Mud pumping" },
                        { key: "d", text: "Warping cracks" }
                    ],
                    answer: "a",
                    explanation: "Ruts are surface depressions caused by permanent deformation in flexible pavements. Shrinkage, mud pumping, and warping are distresses specific to rigid concrete pavements."
                },
                {
                    id: "cm30q088",
                    src: "TRAN808-00327",
                    text: "Which one of the following is not the correct type of critical load position in pavement slab design",
                    options: [
                        { key: "a", text: "Edge loading" },
                        { key: "b", text: "Eccentric loading" },
                        { key: "c", text: "Interior loading" },
                        { key: "d", text: "Corner loading" }
                    ],
                    answer: "b",
                    explanation: "In rigid pavement design, the critical stress conditions are analyzed for three standard load positions: interior, edge, and corner. Eccentric loading is not a standard classification."
                },
                {
                    id: "cm30q089",
                    src: "TRAN808-00328",
                    text: "Which statements are correct regarding Westergaard’s concept to temperature stresses? i) Top gets heated, bottom becomes hot. ii) Slab expands towards expansion joints. iii) Frictional force causes compression at bottom.",
                    options: [
                        { key: "a", text: "I and II only" },
                        { key: "b", text: "I and III only" },
                        { key: "c", text: "II and III only" },
                        { key: "d", text: "I, II and III" }
                    ],
                    answer: "c",
                    explanation: "Statement i) is incorrect due to temperature gradient. Statements ii) and iii) are correct regarding slab expansion and induced compressive stresses from friction."
                },
                {
                    id: "cm30q090",
                    src: "TRAN808-00329",
                    text: "Bituminous surfacing done on already existing impervious pavement is known as",
                    options: [
                        { key: "a", text: "Prime Coat" },
                        { key: "b", text: "Seal Coat" },
                        { key: "c", text: "Surface Dressing" },
                        { key: "d", text: "Tack Coat" }
                    ],
                    answer: "d",
                    explanation: "A tack coat is a light application of bituminous material applied to an existing impervious surface to ensure a strong bond with a new overlay."
                }
            ]
        },
        {
            id: "cm30wate",
            name: "Water Supply, Sanitation and Environment",
            subject: "Water Supply",
            accent: "blue",
            blurb: "10 questions drawn from the Water Supply, Sanitation and Environment bank.",
            questions: [
                {
                    id: "cm30q091",
                    src: "WATE813-00299",
                    text: "Worm and viruses are also known as organism present water",
                    options: [
                        { key: "a", text: "living" },
                        { key: "b", text: "water quality" },
                        { key: "c", text: "vector" },
                        { key: "d", text: "mustaed peer organism" }
                    ],
                    answer: "a",
                    explanation: "Worms (helminths) and viruses are living organisms that can be present in water and cause disease. They are distinct from chemical contaminants. The term \"mustaed peer organism\" appears to be a misspelling or non-standard term and is not correct."
                },
                {
                    id: "cm30q092",
                    src: "WATE813-00300",
                    text: "Most common surface water source is...",
                    options: [
                        { key: "a", text: "well" },
                        { key: "b", text: "River" },
                        { key: "c", text: "Tube well" },
                        { key: "d", text: "Infiltration well" }
                    ],
                    answer: "b",
                    explanation: "Rivers are the most common surface water sources used for large-scale water supply due to their continuous flow and relatively easier accessibility for intake and treatment compared to other sources."
                },
                {
                    id: "cm30q093",
                    src: "WATE813-00301",
                    text: "Which of the following give under ground water?",
                    options: [
                        { key: "a", text: "River" },
                        { key: "b", text: "Pond" },
                        { key: "c", text: "spring" },
                        { key: "d", text: "lake" }
                    ],
                    answer: "c",
                    explanation: "A spring is a natural point where groundwater flows out from an aquifer onto the land surface, making it a source of underground water. Rivers, ponds, and lakes are surface water sources."
                },
                {
                    id: "cm30q094",
                    src: "WATE813-00302",
                    text: "A geological formation, which not only stores water but yields it in sufficient quantity is known as",
                    options: [
                        { key: "a", text: "aquifuge" },
                        { key: "b", text: "aquiclude" },
                        { key: "c", text: "aquitard" },
                        { key: "d", text: "aquifer" }
                    ],
                    answer: "d",
                    explanation: "An aquifer is a saturated geological formation that contains and transmits significant quantities of water under normal field conditions, making it a productive source for wells and springs."
                },
                {
                    id: "cm30q095",
                    src: "WATE813-00303",
                    text: "Ground water is usually free from",
                    options: [
                        { key: "a", text: "Suspended impurities" },
                        { key: "b", text: "Dissolved impurities" },
                        { key: "c", text: "Both suspended and dissolved" },
                        { key: "d", text: "Neither suspended nor dissolved" }
                    ],
                    answer: "a",
                    explanation: "As water percolates through the soil, the soil acts as a filter, removing suspended particles like silt and sand. However, groundwater often contains dissolved impurities like minerals (e.g., calcium, magnesium) picked up from the geologic formations."
                },
                {
                    id: "cm30q096",
                    src: "WATE813-00304",
                    text: "The per capita per day demand of water is taken as an average value of over a period of",
                    options: [
                        { key: "a", text: "1 day" },
                        { key: "b", text: "1 year" },
                        { key: "c", text: "1 month" },
                        { key: "d", text: "&gt; 1 year" }
                    ],
                    answer: "b",
                    explanation: "Per capita demand is calculated as the total annual quantity of water supplied divided by the population and 365 days. It is an average that smooths out variations in daily, weekly, and seasonal consumption."
                },
                {
                    id: "cm30q097",
                    src: "WATE813-00305",
                    text: "A city supply does not include",
                    options: [
                        { key: "a", text: "domestic" },
                        { key: "b", text: "commercial" },
                        { key: "c", text: "Live stock demand" },
                        { key: "d", text: "Loss and damage" }
                    ],
                    answer: "c",
                    explanation: "A city's municipal water supply system is designed for human-related activities: domestic use (drinking, cooking, cleaning), commercial use (businesses, hotels), and institutional use. It also accounts for system losses. Livestock demand is considered an agricultural or rural water supply need."
                },
                {
                    id: "cm30q098",
                    src: "WATE813-00306",
                    text: "As per DWSS, fire demand in Nepal should not more than ...... ipcd.",
                    options: [
                        { key: "a", text: "1 ipcd" },
                        { key: "b", text: "2 ipcd" },
                        { key: "c", text: "3 ipcd" },
                        { key: "d", text: "1.5 ipcd" }
                    ],
                    answer: "d",
                    explanation: "The Department of Water Supply and Sewerage (DWSS) in Nepal specifies that the design fire demand should not exceed 1.5 litres per capita per day (ipcd) to ensure the system is designed efficiently for both regular consumption and emergency fire fighting."
                },
                {
                    id: "cm30q099",
                    src: "WATE813-00307",
                    text: "Which of the following causes a decreases in per capita consumption.",
                    options: [
                        { key: "a", text: "Intermittent water supply" },
                        { key: "b", text: "Better standard of livings" },
                        { key: "c", text: "High temperature" },
                        { key: "d", text: "Low temperature" }
                    ],
                    answer: "a",
                    explanation: "When water is supplied for only a few hours a day (intermittent supply), people cannot use water freely. They are limited by their storage capacity, which leads to an overall decrease in measured per capita consumption compared to a continuous 24/7 supply."
                },
                {
                    id: "cm30q100",
                    src: "WATE813-00309",
                    text: "When total hardness is greater than alkalinity then NCH is",
                    options: [
                        { key: "a", text: "CH + O" },
                        { key: "b", text: "NCH = TH - CH" },
                        { key: "c", text: "CH" },
                        { key: "d", text: "TH" }
                    ],
                    answer: "b",
                    explanation: "When Total Hardness (TH) is greater than Alkalinity, the Carbonate Hardness (CH) is equal to the total alkalinity. The Non-Carbonate Hardness (NCH) is the portion of hardness associated with non-carbonate ions (e.g., chlorides, sulfates) and is calculated as NCH = TH - CH (or TH - Alkalinity)."
                }
            ]
        }
    ]
};

/* Registered lazily — js/civil.js injects this file when the set is opened. */
window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["civil-30"] = CIVIL_MODEL_30;
