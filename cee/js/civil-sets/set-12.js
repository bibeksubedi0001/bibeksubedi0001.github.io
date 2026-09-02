/* ============================================================
   CIVIL MODEL SET 12 — Civil Engineering licence-style model paper
   100 questions · 120 minutes · no negative marking

     Basic Civil Engineering...................  13
     Structural Mechanics......................  11
     Design of Structures......................   9
     Soil Mechanics and Foundation.............  13
     Basic Water Resources Engineering.........  12
     Hydropower................................   9
     Irrigation and Drainage...................  11
     Transportation............................  11
     Water Supply, Sanitation and Environment..  11

   Generated from the civil engineering question bank; every bank
   question is used in exactly one set. Identical duplicate options
   were collapsed, and the key was rotated across a/b/c/d except on
   questions whose options refer to other options.
   The "src" field on each question is its id in the source bank.
   ============================================================ */
const CIVIL_MODEL_12 = {
    day: 42,
    kind: "model",
    badge: { top: "Model", main: "C12" },
    title: "Civil Model Set 12",
    subtitle: "Civil Engineering · 9 subjects",
    durationMinutes: 120,
    negativeMarking: 0,
    chapters: [
        {
            id: "cm12basi",
            name: "Basic Civil Engineering",
            subject: "Basic Civil",
            accent: "blue",
            blurb: "13 questions drawn from the Basic Civil Engineering bank.",
            questions: [
                {
                    id: "cm12q001",
                    src: "BASI674-00134",
                    text: "Water Absorption Test on brick is done to",
                    options: [
                        { key: "a", text: "find out the amount of pores in bricks" },
                        { key: "b", text: "find out of strength of brick" },
                        { key: "c", text: "both" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "a",
                    explanation: "The water absorption test directly measures the porosity of a brick. Higher absorption indicates more pores, which generally correlates with lower strength and frost resistance, but the test itself measures absorption, not strength directly."
                },
                {
                    id: "cm12q002",
                    src: "BASI674-00135",
                    text: "Standard values for water absorption for 13c class brick(IS)",
                    options: [
                        { key: "a", text: "15 %" },
                        { key: "b", text: "20%" },
                        { key: "c", text: "10 %" },
                        { key: "d", text: "18%" }
                    ],
                    answer: "b",
                    explanation: "As per Indian Standard IS 1077, common burnt clay bricks of class 13.5 (approx. 13c) should have a water absorption not more than 20% by weight."
                },
                {
                    id: "cm12q003",
                    src: "BASI674-00136",
                    text: "Standard values for water absorption for 13c class brick(NS)",
                    options: [
                        { key: "a", text: "15 %" },
                        { key: "b", text: "10 %" },
                        { key: "c", text: "20%" },
                        { key: "d", text: "18%" }
                    ],
                    answer: "c",
                    explanation: "Nepal Standard NS 49:2041 aligns with common international practices, and for common building bricks (similar to class 13c), the maximum water absorption is typically specified as 20%."
                },
                {
                    id: "cm12q004",
                    src: "BASI674-00137",
                    text: "Minimum compressive strength of brick used for masonry work according to Nepal Standard",
                    options: [
                        { key: "a", text: "4.5 N / mm²" },
                        { key: "b", text: "2.5 N / mm²" },
                        { key: "c", text: "5.5 N / mm²" },
                        { key: "d", text: "3.5 N / mm²" }
                    ],
                    answer: "d",
                    explanation: "Nepal Standard NS 49:2041 specifies different classes of bricks. The minimum compressive strength for general masonry work is typically 3.5 N/mm² for certain classes."
                },
                {
                    id: "cm12q005",
                    src: "BASI674-00138",
                    text: "In the soundness test a specimen of hardened cement paste is ______ for a fixed time.",
                    options: [
                        { key: "a", text: "Boiled" },
                        { key: "b", text: "Freeze" },
                        { key: "c", text: "Dry" },
                        { key: "d", text: "Dipped in water" }
                    ],
                    answer: "a",
                    explanation: "The Le Chatelier test for soundness involves boiling the cement paste specimen to accelerate any potential expansion caused by unsound compounds like free lime or magnesia."
                },
                {
                    id: "cm12q006",
                    src: "BASI674-00139",
                    text: "To determine the fineness of cement.",
                    options: [
                        { key: "a", text: "Grain size is larger than specified mesh size" },
                        { key: "b", text: "Grain size is smaller than specified mesh size" },
                        { key: "c", text: "Grain size is equal to specified mesh size" },
                        { key: "d", text: "Grain size is 1mm" }
                    ],
                    answer: "b",
                    explanation: "Fineness is determined by sieving cement through a standard sieve (e.g., 90μm). The residue left on the sieve should be minimal, meaning most grains are smaller than the mesh size."
                },
                {
                    id: "cm12q007",
                    src: "BASI674-00140",
                    text: "What is the amount of water required to give the paste normal consistency for consistency test?",
                    options: [
                        { key: "a", text: "0.79 times" },
                        { key: "b", text: "0.77 times" },
                        { key: "c", text: "0.78 times" },
                        { key: "d", text: "0.76 times" }
                    ],
                    answer: "c",
                    explanation: "The Vicat test for normal consistency determines the water (% by weight of cement) needed. For OPC, this is typically around 26-33%, which is approximately 0.26P to 0.33P where P is the weight of cement. 0.78P is not the standard ratio. The correct concept is that the water is a percentage of the cement weight, not a multiple. The options seem erroneous. The standard is to find the percentage of water that allows the plunger to penetrate to a point 5-7mm from the bottom of the paste."
                },
                {
                    id: "cm12q008",
                    src: "BASI674-00141",
                    text: "Initial setting time of OPC should not be less than ______.",
                    options: [
                        { key: "a", text: "15 minutes" },
                        { key: "b", text: "28 minutes" },
                        { key: "c", text: "1 hour" },
                        { key: "d", text: "30 minutes" }
                    ],
                    answer: "d",
                    explanation: "As per standard specifications (like IS 269), the initial setting time of Ordinary Portland Cement shall not be less than 30 minutes."
                },
                {
                    id: "cm12q009",
                    src: "BASI674-00142",
                    text: "Final setting time of cement should not be more than ______",
                    options: [
                        { key: "a", text: "10 hours" },
                        { key: "b", text: "1 hour" },
                        { key: "c", text: "5 hours" },
                        { key: "d", text: "8 hours" }
                    ],
                    answer: "a",
                    explanation: "As per standard specifications (like IS 269), the final setting time of Ordinary Portland Cement shall not be more than 600 minutes, which is 10 hours."
                },
                {
                    id: "cm12q010",
                    src: "BASI674-00143",
                    text: "In the soundness test, the whole assembly is immersed in water for ______",
                    options: [
                        { key: "a", text: "30 minutes" },
                        { key: "b", text: "24 hours" },
                        { key: "c", text: "48 hours" },
                        { key: "d", text: "72 hours" }
                    ],
                    answer: "b",
                    explanation: "In the Le Chatelier soundness test, the mold containing the cement paste is immersed in water at a specified temperature for 24 hours before measuring the initial length and then boiling."
                },
                {
                    id: "cm12q011",
                    src: "BASI674-00144",
                    text: "What is the final setting time?",
                    options: [
                        { key: "a", text: "The time to reach that stage at which cement paste loses its elasticity" },
                        { key: "b", text: "The time at which cement paste gains its plasticity" },
                        { key: "c", text: "The time at which cement paste loses its plasticity" },
                        { key: "d", text: "The time when cement paste becomes hardened" }
                    ],
                    answer: "c",
                    explanation: "The final setting time is the time required for the cement paste to harden sufficiently and lose its plasticity completely, gaining some mechanical strength."
                },
                {
                    id: "cm12q012",
                    src: "BASI674-00145",
                    text: "Initial setting time of Low Heat Cement should not be less than ______",
                    options: [
                        { key: "a", text: "15 minutes" },
                        { key: "b", text: "90 minutes" },
                        { key: "c", text: "120 minutes" },
                        { key: "d", text: "60 minutes" }
                    ],
                    answer: "d",
                    explanation: "Low Heat Portland Cement (as per IS 12600) has a longer setting time than OPC. Its initial setting time is not less than 60 minutes."
                },
                {
                    id: "cm12q013",
                    src: "BASI674-00146",
                    text: "Which cement is used in sewage and water treatment plants?",
                    options: [
                        { key: "a", text: "Sulphate Resisting Cement" },
                        { key: "b", text: "Rapid Hardening Cement" },
                        { key: "c", text: "Low Heat Cement" },
                        { key: "d", text: "Quick Setting Cement" }
                    ],
                    answer: "a",
                    explanation: "Sulphate Resisting Cement (SRC) is designed to withstand the corrosive action of sulphates present in soil and groundwater, common in sewage and water treatment environments."
                }
            ]
        },
        {
            id: "cm12stru",
            name: "Structural Mechanics",
            subject: "Structural Mech",
            accent: "cyan",
            blurb: "11 questions drawn from the Structural Mechanics bank.",
            questions: [
                {
                    id: "cm12q014",
                    src: "STRU935-00112",
                    text: "What will be the shape of ILD curve for vertical reaction of simply supported beam?",
                    options: [
                        { key: "a", text: "Circular" },
                        { key: "b", text: "Triangular" },
                        { key: "c", text: "Rectangular" },
                        { key: "d", text: "Trapezoidal" }
                    ],
                    answer: "b",
                    explanation: "The Influence Line Diagram (ILD) for the vertical reaction at a support of a simply supported beam is a triangle. The value is 1 when the unit load is directly over that support, 0 when over the other support, and varies linearly in between."
                },
                {
                    id: "cm12q015",
                    src: "STRU935-00113",
                    text: "For a particular steel section, which of the following options represents a product of the factor of safety and shape factor",
                    options: [
                        { key: "a", text: "Shape factor" },
                        { key: "b", text: "Flexural rigidity" },
                        { key: "c", text: "Load factor" },
                        { key: "d", text: "Yield stress" }
                    ],
                    answer: "c",
                    explanation: "The product of the factor of safety (FOS) and the shape factor (SF) is defined as the Load Factor. It represents the ratio of the ultimate collapse load to the working load in plastic design."
                },
                {
                    id: "cm12q016",
                    src: "STRU935-00114",
                    text: "The shape factor for circular section is",
                    options: [
                        { key: "a", text: "1.2" },
                        { key: "b", text: "1.8" },
                        { key: "c", text: "1.5" },
                        { key: "d", text: "1.7" }
                    ],
                    answer: "d",
                    explanation: "The shape factor is the ratio of the plastic moment capacity to the yield moment capacity. For a solid circular cross-section, this value is 16/(3π) ≈ 1.7."
                },
                {
                    id: "cm12q017",
                    src: "STRU935-00115",
                    text: "The shape factor for rectangular section is",
                    options: [
                        { key: "a", text: "1.5" },
                        { key: "b", text: "1.2" },
                        { key: "c", text: "1.7" },
                        { key: "d", text: "1.8" }
                    ],
                    answer: "a",
                    explanation: "The shape factor for a rectangular section is calculated as (plastic modulus)/(elastic modulus) = (bd²/4)/(bd²/6) = 1.5."
                },
                {
                    id: "cm12q018",
                    src: "STRU935-00116",
                    text: "A simply supported beam of span 6 m carries an UDL of 25kN/m. The plastic moment capacity is",
                    options: [
                        { key: "a", text: "102.50 kNm" },
                        { key: "b", text: "112.50 kNm" },
                        { key: "c", text: "125.50 kNm" },
                        { key: "d", text: "146.85 kNm" }
                    ],
                    answer: "b",
                    explanation: "For a simply supported beam under a uniformly distributed load, the maximum moment at collapse is wL²/8. This value is the plastic moment capacity required to form a plastic hinge. M_p = (25 kN/m * (6 m)²) / 8 = 112.5 kNm."
                },
                {
                    id: "cm12q019",
                    src: "STRU935-00117",
                    text: "For a fixed beam of length L and centrally loaded point load of W, what will be the value of W at collapse",
                    options: [
                        { key: "a", text: "10 Mp/L" },
                        { key: "b", text: "8 Mp/L" },
                        { key: "c", text: "6 Mp/L" },
                        { key: "d", text: "9 Mp/L" }
                    ],
                    answer: "c",
                    explanation: "For a fixed-fixed beam with a central point load, collapse occurs when three hinges form. The work equation yields W * (Lθ/2) = M_p * (θ + θ + θ) = 3M_pθ. Solving gives W = 6M_p/L."
                },
                {
                    id: "cm12q020",
                    src: "STRU935-00118",
                    text: "For a fixed beam of length L and centrally loaded point load of W, what will be the plastic moment capacity",
                    options: [
                        { key: "a", text: "WL/6" },
                        { key: "b", text: "WL/10" },
                        { key: "c", text: "WL/9" },
                        { key: "d", text: "WL/8" }
                    ],
                    answer: "d",
                    explanation: "$$M_p = \\frac{WL}{8}$$"
                },
                {
                    id: "cm12q021",
                    src: "STRU935-00119",
                    text: "The plastic modulus of a section is 5 × 10⁴ mm³. Its shape factor is 1.2 and the plastic moment capacity is 120 kNm, what is the value of the yield stress of the material?",
                    options: [
                        { key: "a", text: "240 N/mm²" },
                        { key: "b", text: "100 N/mm²" },
                        { key: "c", text: "200 N/mm²" },
                        { key: "d", text: "288 N/mm²" }
                    ],
                    answer: "a",
                    explanation: "The plastic moment capacity is the yield stress times the plastic section modulus, so fy equals Mp divided by Zp. The shape factor is not needed here; it only relates the plastic modulus to the elastic one, Zp equal to 1.2 Ze."
                },
                {
                    id: "cm12q022",
                    src: "STRU935-00120",
                    text: "In the analysis of structures by plastic theory, the following conditions must be satisfied",
                    options: [
                        { key: "a", text: "Equilibrium condition" },
                        { key: "b", text: "Mechanism condition" },
                        { key: "c", text: "Yield condition" },
                        { key: "d", text: "All the above" }
                    ],
                    answer: "d",
                    explanation: "Plastic analysis requires satisfying three fundamental conditions: equilibrium of forces, formation of a collapse mechanism, and that the bending moment nowhere exceeds the plastic moment capacity (yield condition)."
                },
                {
                    id: "cm12q023",
                    src: "STRU935-00121",
                    text: "The plastic modulus of rectangular beam of width 200 mm and depth 400 mm is",
                    options: [
                        { key: "a", text: "2 × 10⁶ mm³" },
                        { key: "b", text: "5.33 × 10⁶ mm³" },
                        { key: "c", text: "8 × 10⁶ mm³" },
                        { key: "d", text: "1.07 × 10⁶ mm³" }
                    ],
                    answer: "c",
                    explanation: "For a rectangle, the plastic modulus Z_p = (width × depth²) / 4 = (200 mm × (400 mm)²) / 4 = (200 × 160,000) / 4 = 8,000,000 mm³ = 8 × 10⁶ mm³."
                },
                {
                    id: "cm12q024",
                    src: "STRU935-00122",
                    text: "Which of the following is not the displacement method?",
                    options: [
                        { key: "a", text: "Slope deflection method" },
                        { key: "b", text: "Moment distribution method" },
                        { key: "c", text: "Kant’s method" },
                        { key: "d", text: "Column analogy method" }
                    ],
                    answer: "d",
                    explanation: "The Column Analogy Method is a force (flexibility)-based technique for analyzing indeterminate structures. The other options are all displacement (stiffness) methods."
                }
            ]
        },
        {
            id: "cm12desi",
            name: "Design of Structures",
            subject: "Design of Str",
            accent: "slate",
            blurb: "9 questions drawn from the Design of Structures bank.",
            questions: [
                {
                    id: "cm12q025",
                    src: "DESI787-00098",
                    text: "For simply supported beam of span 8 m, the minimum effective depth to satisfy the vertical deflection limits should be",
                    options: [
                        { key: "a", text: "400 mm" },
                        { key: "b", text: "500 mm" },
                        { key: "c", text: "700 mm" },
                        { key: "d", text: "More than 1 m" }
                    ],
                    answer: "a",
                    explanation: "As per IS 456:2000, Clause 23.2.1, the span to effective depth ratio for a simply supported beam is 20. Therefore, effective depth = span / 20 = 8000 / 20 = 400 mm."
                },
                {
                    id: "cm12q026",
                    src: "DESI787-00099",
                    text: "For simply supported beam of span 15 m, the minimum effective depth to satisfy the vertical deflection limits should be",
                    options: [
                        { key: "a", text: "400 mm" },
                        { key: "b", text: "More than 1 m" },
                        { key: "c", text: "500 mm" },
                        { key: "d", text: "700 mm" }
                    ],
                    answer: "b",
                    explanation: "IS 456 gives a span to effective depth ratio of 20 for a simply supported beam, so a 15 m span needs an effective depth of at least 15000 over 20, that is 750 mm. Every smaller option fails that check, so the depth has to be well above it."
                },
                {
                    id: "cm12q027",
                    src: "DESI787-00100",
                    text: "If the size of panel is 6m x 6m, then as per Indian Standars, width of column strip and middle strip",
                    options: [
                        { key: "a", text: "3.0 m and 1.5 m" },
                        { key: "b", text: "1.5 m and 3.0 m" },
                        { key: "c", text: "3.0 m and 3.0 m" },
                        { key: "d", text: "1.5 m and 1.5 m" }
                    ],
                    answer: "c",
                    explanation: "As per IS 456:2000, for two-way slabs, the column strip is defined as a width on each side of the column centerline equal to one-fourth the shorter span. For a 6m panel, column strip width = 2 * (6/4) = 3m. The middle strip is the region between two column strips, which is also 6m - 3m = 3m. So, both are 3m."
                },
                {
                    id: "cm12q028",
                    src: "DESI787-00101",
                    text: "The average permissible stress in bond for plain bars in tension is",
                    options: [
                        { key: "a", text: "Increased by 10% for bars in compression" },
                        { key: "b", text: "Decreased by 10% for bars in compression" },
                        { key: "c", text: "Decreased by 25% for bars in compression" },
                        { key: "d", text: "Increased by 25% for bars in compression" }
                    ],
                    answer: "d",
                    explanation: "As per IS 456:2000, Clause 26.2.1.1, the permissible stress in bond for plain bars in compression is 25% higher than that in tension."
                },
                {
                    id: "cm12q029",
                    src: "DESI787-00102",
                    text: "Minimum cover in a slab should neither be less than the diameter of bar nor less than",
                    options: [
                        { key: "a", text: "15 mm" },
                        { key: "b", text: "10 mm" },
                        { key: "c", text: "25 mm" },
                        { key: "d", text: "13 mm" }
                    ],
                    answer: "a",
                    explanation: "As per IS 456:2000, Clause 26.4.2, the nominal cover to reinforcement should not be less than the diameter of the bar and not less than 15 mm for slabs."
                },
                {
                    id: "cm12q030",
                    src: "DESI787-00103",
                    text: "Minimum cover in a beam should neither be less than the diameter of bar nor less than",
                    options: [
                        { key: "a", text: "10 mm" },
                        { key: "b", text: "20 mm" },
                        { key: "c", text: "15 mm" },
                        { key: "d", text: "25 mm" }
                    ],
                    answer: "b",
                    explanation: "As per IS 456:2000, Clause 26.4.2, the nominal cover to reinforcement should not be less than the diameter of the bar and not less than 20 mm for beams."
                },
                {
                    id: "cm12q031",
                    src: "DESI787-00104",
                    text: "The maximum depth of neutral axis for beam of effective depth 500 mm",
                    options: [
                        { key: "a", text: "260 mm" },
                        { key: "b", text: "265 mm" },
                        { key: "c", text: "245 mm" },
                        { key: "d", text: "200 mm" }
                    ],
                    answer: "c",
                    explanation: "For Fe 415 steel and M20 concrete, the depth of neutral axis for balanced section is 0.48d. So, 0.48 * 500 = 240 mm. The closest option is 245 mm. For Fe 250, it is 0.53d = 265 mm. But commonly, for Fe 415, it is 0.48d. However, the options include 245 and 265. The exact value as per IS 456 is x_u,max = 0.0035 / (0.0055 + 0.87f_y/E_s) * d. For Fe 415, f_y=415, E_s=2e5, so x_u,max = 0.0035 / (0.0055 + 0.87*415/200000) * d = 0.0035 / (0.0055 + 0.00180) * d = 0.0035/0.0073 * d = 0.479d = 239.5mm ~ 240mm. So, 245mm is close. For Fe 250, it is 0.53d=265mm. The question does not specify steel grade, but the option 245mm is for Fe 415."
                },
                {
                    id: "cm12q032",
                    src: "DESI787-00105",
                    text: "The maximum depth of stress block in balanced RCC beam section of depth d is......",
                    options: [
                        { key: "a", text: "0.3 d" },
                        { key: "b", text: "0.53 d" },
                        { key: "c", text: "0.60 d" },
                        { key: "d", text: "0.43 d" }
                    ],
                    answer: "d",
                    explanation: "For a balanced section with mild steel the neutral axis is at its limiting depth of 0.53d, and the equivalent rectangular stress block extends over 0.8 of that. The block depth is therefore 0.8 times 0.53d, which is about 0.43d."
                },
                {
                    id: "cm12q033",
                    src: "DESI787-00107",
                    text: "Over reinforced section fails on",
                    options: [
                        { key: "a", text: "Compression part" },
                        { key: "b", text: "Tension part" },
                        { key: "c", text: "Both at same time" },
                        { key: "d", text: "Any part" }
                    ],
                    answer: "a",
                    explanation: "In an over-reinforced section, the compressive strength of concrete is exhausted before the steel yields, leading to a brittle failure in the compression zone."
                }
            ]
        },
        {
            id: "cm12soil",
            name: "Soil Mechanics and Foundation",
            subject: "Soil Mechanics",
            accent: "amber",
            blurb: "13 questions drawn from the Soil Mechanics and Foundation bank.",
            questions: [
                {
                    id: "cm12q034",
                    src: "SOIL136-00133",
                    text: "Size of silt particles is",
                    options: [
                        { key: "a", text: "above 4.75 mm" },
                        { key: "b", text: "0.075 mm to 0.002 mm" },
                        { key: "c", text: "between 4.75 mm to 0.075 mm" },
                        { key: "d", text: "below 0.002 mm" }
                    ],
                    answer: "b",
                    explanation: "According to the Unified Soil Classification System (USCS), silt particles are defined as those passing the No. 200 sieve (0.075 mm) and larger than 0.002 mm."
                },
                {
                    id: "cm12q035",
                    src: "SOIL136-00134",
                    text: "Unified soil classification system (USCS) was developed by ......",
                    options: [
                        { key: "a", text: "Kozney" },
                        { key: "b", text: "Atterberg" },
                        { key: "c", text: "Casagrande" },
                        { key: "d", text: "Rankine" }
                    ],
                    answer: "c",
                    explanation: "The Unified Soil Classification System (USCS) was developed by Arthur Casagrande during World War II for the U.S. Army Corps of Engineers. It was later adopted with modifications by other agencies."
                },
                {
                    id: "cm12q036",
                    src: "SOIL136-00135",
                    text: "The USCS system was used for which of the following purpose during World War 2?",
                    options: [
                        { key: "a", text: "Dam construction" },
                        { key: "b", text: "Foundation" },
                        { key: "c", text: "Earth slopes" },
                        { key: "d", text: "Air field construction" }
                    ],
                    answer: "d",
                    explanation: "The Unified Soil Classification System (USCS) was developed by Casagrande during World War II primarily for airfield construction. It was used to quickly classify soils for military engineering projects."
                },
                {
                    id: "cm12q037",
                    src: "SOIL136-00136",
                    text: "According to USCS, the fined grained soil is classified on the basis of ______.",
                    options: [
                        { key: "a", text: "Plasticity" },
                        { key: "b", text: "Grain size distribution" },
                        { key: "c", text: "Group index" },
                        { key: "d", text: "Particle size composition" }
                    ],
                    answer: "a",
                    explanation: "Fine-grained soils (silts and clays) are classified in the USCS based on their plasticity characteristics, which are determined by the Atterberg limits, not just particle size."
                },
                {
                    id: "cm12q038",
                    src: "SOIL136-00137",
                    text: "By USCS system, soil are classified in to ______ major groups.",
                    options: [
                        { key: "a", text: "2" },
                        { key: "b", text: "4" },
                        { key: "c", text: "5" },
                        { key: "d", text: "6" }
                    ],
                    answer: "b",
                    explanation: "The USCS classifies soils into four major groups: coarse-grained, fine-grained, organic soils, and peat. These are further subdivided."
                },
                {
                    id: "cm12q039",
                    src: "SOIL136-00138",
                    text: "A soil is considered as coarse grained, if it retains more than ______ in a sieve.",
                    options: [
                        { key: "a", text: "90% of the soil" },
                        { key: "b", text: "70% of the soil" },
                        { key: "c", text: "50% of the soil" },
                        { key: "d", text: "20% of the soil" }
                    ],
                    answer: "c",
                    explanation: "A soil is classified as coarse-grained if more than 50% of its material (by weight) is retained on the No. 200 sieve (0.075 mm opening)."
                },
                {
                    id: "cm12q040",
                    src: "SOIL136-00139",
                    text: "Fine grained soil are sub-divided in to ______.",
                    options: [
                        { key: "a", text: "Sand and clay" },
                        { key: "b", text: "Organic and silt" },
                        { key: "c", text: "Gravel and peat" },
                        { key: "d", text: "Silt and clay" }
                    ],
                    answer: "d",
                    explanation: "Fine-grained soils are primarily subdivided into silts (M) and clays (C). These are further classified based on their plasticity."
                },
                {
                    id: "cm12q041",
                    src: "SOIL136-00140",
                    text: "Coarse grained soil is sub-divided in to ______.",
                    options: [
                        { key: "a", text: "Gravel and sand" },
                        { key: "b", text: "Gravel and clay" },
                        { key: "c", text: "Sand and silt" },
                        { key: "d", text: "Silt and clay" }
                    ],
                    answer: "a",
                    explanation: "Coarse-grained soils are subdivided based on the predominant particle size: gravels (G) and sands (S)."
                },
                {
                    id: "cm12q042",
                    src: "SOIL136-00141",
                    text: "In Casagrande’s plasticity chart, the numbers in the chart denotes ______.",
                    options: [
                        { key: "a", text: "Grade of the soil" },
                        { key: "b", text: "Relative suitability" },
                        { key: "c", text: "Division of the group" },
                        { key: "d", text: "None of the mentioned" }
                    ],
                    answer: "b",
                    explanation: "The A-line on the plasticity chart separates clays from silts. The numbers (e.g., the '7' line) often denote the relative suitability of the soil for use as a construction material, with lower numbers indicating better suitability."
                },
                {
                    id: "cm12q043",
                    src: "SOIL136-00142",
                    text: "The best known classification system in textural classification is ___.",
                    options: [
                        { key: "a", text: "M.I.T. classification system" },
                        { key: "b", text: "Indian classification system" },
                        { key: "c", text: "Triangular classification of U.S. public road administration" },
                        { key: "d", text: "International classification" }
                    ],
                    answer: "c",
                    explanation: "The textural classification system using a triangular chart to represent proportions of sand, silt, and clay was developed by the U.S. Public Roads Administration and is very well-known."
                },
                {
                    id: "cm12q044",
                    src: "SOIL136-00143",
                    text: "Textural classification is most suitable for ______.",
                    options: [
                        { key: "a", text: "Clay soil" },
                        { key: "b", text: "Wet soil" },
                        { key: "c", text: "Soil with moist" },
                        { key: "d", text: "Coarse grained soil" }
                    ],
                    answer: "d",
                    explanation: "Textural classification (using the ternary diagram) is most effective for coarse-grained soils where the relative proportions of gravel, sand, and fines are the primary concern."
                },
                {
                    id: "cm12q045",
                    src: "SOIL136-00144",
                    text: "To use textural classification chart ______ lines must be drawn.",
                    options: [
                        { key: "a", text: "Parallel to the three sides of the triangle" },
                        { key: "b", text: "Parallel to the only one side of the triangle" },
                        { key: "c", text: "Adjacent to the three sides of the triangle" },
                        { key: "d", text: "Adjacent to the one sides of the triangle" }
                    ],
                    answer: "a",
                    explanation: "To find the classification point on a textural triangle, lines are drawn parallel to each of the three sides from the respective percentage points on the axes."
                },
                {
                    id: "cm12q046",
                    src: "SOIL136-00145",
                    text: "Unified soil classification system (USCS) was developed by ______.",
                    options: [
                        { key: "a", text: "Kozney" },
                        { key: "b", text: "Tasagrande" },
                        { key: "c", text: "Attenberg" },
                        { key: "d", text: "Rankine" }
                    ],
                    answer: "b",
                    explanation: "The Unified Soil Classification System (USCS) was developed by Arthur Casagrande. 'Tasagrande' is likely a typo for 'Casagrande'."
                }
            ]
        },
        {
            id: "cm12watr",
            name: "Basic Water Resources Engineering",
            subject: "Water Resources",
            accent: "emerald",
            blurb: "12 questions drawn from the Basic Water Resources Engineering bank.",
            questions: [
                {
                    id: "cm12q047",
                    src: "WATE701-00122",
                    text: "Specific gravity is what kind of property?",
                    options: [
                        { key: "a", text: "Extensive" },
                        { key: "b", text: "None of the mentioned" },
                        { key: "c", text: "Intensive" },
                        { key: "d", text: "It depends on external conditions" }
                    ],
                    answer: "c",
                    explanation: "An intensive property is one that does not depend on the amount of matter present. Specific gravity, being a ratio of densities, is independent of the system size, making it an intensive property."
                },
                {
                    id: "cm12q048",
                    src: "WATE701-00123",
                    text: "If there is bucket full of oil and bucket full of water and you are asked to lift them, which one of the two will require more effort given that volume of buckets remains same?",
                    options: [
                        { key: "a", text: "Oil bucket" },
                        { key: "b", text: "Water bucket" },
                        { key: "c", text: "Equal effort will be required to lift both of them" },
                        { key: "d", text: "None of the mentioned" }
                    ],
                    answer: "b",
                    explanation: "Effort required is proportional to the weight of the bucket. Since the volumes are the same, the bucket with the higher density (and thus higher specific weight) will be heavier. Water has a higher density than oil, so the water bucket will require more effort to lift."
                },
                {
                    id: "cm12q049",
                    src: "WATE701-00124",
                    text: "If the fluid has specific weight of 10N/m³ for a volume of 100dm³ on a planet which is having acceleration due to gravity 20m/s², what will be its specific weight on a planet having acceleration due to gravity 4m/s²?",
                    options: [
                        { key: "a", text: "2 N/m³" },
                        { key: "b", text: "10 N/m³" },
                        { key: "c", text: "50 N/m³" },
                        { key: "d", text: "200 N/m³" }
                    ],
                    answer: "a",
                    explanation: "Specific weight (γ) = ρ * g. Mass (m) is constant. On first planet: γ1 = ρ * g1 = 10 N/m³, g1=20 m/s². Therefore, ρ = γ1 / g1 = 10 / 20 = 0.5 kg/m³. On second planet: γ2 = ρ * g2 = 0.5 kg/m³ * 4 m/s² = 2 N/m³."
                },
                {
                    id: "cm12q050",
                    src: "WATE701-00125",
                    text: "The area of land draining into stream or water course at a given location is known as",
                    options: [
                        { key: "a", text: "Catchment area" },
                        { key: "b", text: "Drainage basin" },
                        { key: "c", text: "Watershed" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "Catchment area, drainage basin, and watershed are all terms used to describe the area of land that collects precipitation and drains into a common outlet, such as a stream, river, or lake."
                },
                {
                    id: "cm12q051",
                    src: "WATE701-00126",
                    text: "All forms of water that reach the earth from the atmosphere is known as",
                    options: [
                        { key: "a", text: "Rainfall" },
                        { key: "b", text: "Precipitation" },
                        { key: "c", text: "Water fall" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "b",
                    explanation: "Precipitation is the general term for all forms of water (liquid or solid) that fall from the atmosphere and reach the earth's surface, including rain, snow, sleet, and hail."
                },
                {
                    id: "cm12q052",
                    src: "WATE701-00127",
                    text: "Evaporation depends on",
                    options: [
                        { key: "a", text: "Temperature" },
                        { key: "b", text: "Humidity" },
                        { key: "c", text: "Salinity of water" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "The rate of evaporation is influenced by temperature (higher temperature increases it), humidity (lower humidity increases it), and salinity (higher salinity decreases it, as it lowers the vapor pressure of water)."
                },
                {
                    id: "cm12q053",
                    src: "WATE701-00128",
                    text: "The rate of evaporation increases with",
                    options: [
                        { key: "a", text: "Increase of wind speed" },
                        { key: "b", text: "Decrease with temperature" },
                        { key: "c", text: "Increase of salt content" },
                        { key: "d", text: "Increase in humidity" }
                    ],
                    answer: "a",
                    explanation: "Wind speed is a key factor; higher wind speed removes the saturated air layer above the water surface more quickly, allowing for faster evaporation. It increases with temperature, not decrease. It decreases with increased salt content and increased humidity."
                },
                {
                    id: "cm12q054",
                    src: "WATE701-00129",
                    text: "The process by which moisture absorbed by the roots of plants and circulated through plant body, return back to atmosphere as water vapor by stomata and leaves of plants",
                    options: [
                        { key: "a", text: "Evaporation" },
                        { key: "b", text: "Transpiration" },
                        { key: "c", text: "Evapotranspiration" },
                        { key: "d", text: "Loss of moisture" }
                    ],
                    answer: "b",
                    explanation: "Transpiration is the specific process where water is absorbed by plant roots, moves through the plant, and is evaporated into the atmosphere from the surfaces of leaves and stems."
                },
                {
                    id: "cm12q055",
                    src: "WATE701-00130",
                    text: "The average annual rainfall in Nepal is",
                    options: [
                        { key: "a", text: "1500 mm" },
                        { key: "b", text: "890 mm" },
                        { key: "c", text: "1890 mm" },
                        { key: "d", text: "1170 mm" }
                    ],
                    answer: "c",
                    explanation: "This is a specific geographical fact. The average annual rainfall for Nepal is approximately 1890 mm."
                },
                {
                    id: "cm12q056",
                    src: "WATE701-00131",
                    text: "For determination of average annual precipitation in a catchment basin, the best method is",
                    options: [
                        { key: "a", text: "Arithmetical" },
                        { key: "b", text: "Thiessen’s polygon" },
                        { key: "c", text: "Isoliyetal method" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "c",
                    explanation: "The isohyetal method involves drawing contour lines of equal rainfall (isohyets). It is generally considered the most accurate method for determining average precipitation over an area, especially if the rain gauges are not uniformly distributed, as it accounts for topographic influences."
                },
                {
                    id: "cm12q057",
                    src: "WATE701-00133",
                    text: "Which of the following recording rain gauge does not produce the mass curve of precipitation as record?",
                    options: [
                        { key: "a", text: "Symon’s rain gauge" },
                        { key: "b", text: "Tipping bucket type" },
                        { key: "c", text: "Natural syphon type" },
                        { key: "d", text: "Weighing bucket type" }
                    ],
                    answer: "a",
                    explanation: "This is a standard non-recording rain gauge. It consists of a collector, a funnel, and a receiving bottle. The rainfall collected in the bottle is measured using a graduated measuring glass, typically once every 24 hours. Since it only provides the total rainfall over a long interval, it does not give a continuous record needed for a mass curve plot."
                },
                {
                    id: "cm12q058",
                    src: "WATE701-00134",
                    text: "The monthly rainfall at a place A during December 2010 was recorded as 60 mm above normal. Here the term normal means:",
                    options: [
                        { key: "a", text: "The rainfall in the previous year in the same month" },
                        { key: "b", text: "The average monthly rainfall for December computed from a specific 30 years of past period" },
                        { key: "c", text: "The rainfall was normally expected based on previous month’s data" },
                        { key: "d", text: "The average rainfall computed from 12 months record" }
                    ],
                    answer: "b",
                    explanation: "In climatology, 'normal' rainfall for a specific month is defined as the average (mean) rainfall for that month calculated over a standard reference period, typically 30 years, as recommended by the World Meteorological Organization (WMO)."
                }
            ]
        },
        {
            id: "cm12hydr",
            name: "Hydropower",
            subject: "Hydropower",
            accent: "cyan",
            blurb: "9 questions drawn from the Hydropower bank.",
            questions: [
                {
                    id: "cm12q059",
                    src: "HYDR626-00095",
                    text: "Hydraulic turbine is a device in which fluid power is converted to",
                    options: [
                        { key: "a", text: "Hydraulic power" },
                        { key: "b", text: "Kinetic power" },
                        { key: "c", text: "Mechanical power" },
                        { key: "d", text: "Electrical power" }
                    ],
                    answer: "c",
                    explanation: "A hydraulic turbine is the prime mover. It converts the hydraulic energy (potential and kinetic) of water into mechanical energy in the form of a rotating shaft. An attached generator then converts this mechanical energy into electrical energy."
                },
                {
                    id: "cm12q060",
                    src: "HYDR626-00096",
                    text: "Which of the following is not a reaction turbine?",
                    options: [
                        { key: "a", text: "Francis turbine" },
                        { key: "b", text: "Kaplan turbine" },
                        { key: "c", text: "Propeller turbine" },
                        { key: "d", text: "Pelton wheel turbine" }
                    ],
                    answer: "d",
                    explanation: "Reaction turbines (e.g., Francis, Kaplan, Propeller) operate submerged and use both pressure and velocity energy. The Pelton wheel is an impulse turbine, using only the velocity energy of a jet and operating in air."
                },
                {
                    id: "cm12q061",
                    src: "HYDR626-00097",
                    text: "Hydraulic energy is converted into another form of energy by hydraulic machines. What form of energy is that?",
                    options: [
                        { key: "a", text: "Mechanical Energy" },
                        { key: "b", text: "Electrical Energy" },
                        { key: "c", text: "Nuclear Energy" },
                        { key: "d", text: "Elastic Energy" }
                    ],
                    answer: "a",
                    explanation: "Hydraulic machines like turbines are prime movers. Their primary function is to convert the energy of flowing water (hydraulic energy) into useful mechanical work on a rotating shaft."
                },
                {
                    id: "cm12q062",
                    src: "HYDR626-00098",
                    text: "Which principle is used in Hydraulic Turbines?",
                    options: [
                        { key: "a", text: "Faraday law" },
                        { key: "b", text: "Newton’s second law" },
                        { key: "c", text: "Charles law" },
                        { key: "d", text: "Braggs law" }
                    ],
                    answer: "b",
                    explanation: "The operation of all hydraulic turbines is governed by Newton's second law of motion. The force exerted by the water jet (impulse) or the reaction from the pressure drop (reaction) causes the runner to rotate."
                },
                {
                    id: "cm12q063",
                    src: "HYDR626-00099",
                    text: "Buckets and blades used in a turbine are used to:",
                    options: [
                        { key: "a", text: "Switch off the turbine" },
                        { key: "b", text: "To regulate the wind speed" },
                        { key: "c", text: "Alter the direction of water" },
                        { key: "d", text: "To regenerate the power" }
                    ],
                    answer: "c",
                    explanation: "The key function of buckets (in impulse turbines) and blades (in reaction turbines) is to change the direction of the water flow. This change in momentum applies a force on the runner, causing it to rotate and produce mechanical power."
                },
                {
                    id: "cm12q064",
                    src: "HYDR626-00100",
                    text: "______ is the electric power obtained from the energy of the water.",
                    options: [
                        { key: "a", text: "Rollo dynamic power" },
                        { key: "b", text: "Thermal power" },
                        { key: "c", text: "Nuclear power" },
                        { key: "d", text: "Hydroelectric power" }
                    ],
                    answer: "d",
                    explanation: "Hydroelectric power is the term specifically used for electrical energy generated by harnessing the gravitational potential energy and kinetic energy of flowing or falling water."
                },
                {
                    id: "cm12q065",
                    src: "HYDR626-00101",
                    text: "Hydraulic Machines fall under the category",
                    options: [
                        { key: "a", text: "Roto-dynamic machinery" },
                        { key: "b", text: "Pulverizers" },
                        { key: "c", text: "Kinetic machinery" },
                        { key: "d", text: "Condensers" }
                    ],
                    answer: "a",
                    explanation: "Roto-dynamic machinery is a broad category of devices that transfer energy between a rotor and a fluid. This includes turbines (which absorb energy from the fluid) and pumps (which add energy to the fluid)."
                },
                {
                    id: "cm12q066",
                    src: "HYDR626-00102",
                    text: "Which kind of turbines does not change the form of energy of water at the inlet?",
                    options: [
                        { key: "a", text: "Reaction turbines" },
                        { key: "b", text: "Impulse turbine" },
                        { key: "c", text: "Reactive turbines" },
                        { key: "d", text: "Kinetic turbine" }
                    ],
                    answer: "b",
                    explanation: "In an impulse turbine (e.g., Pelton wheel), the water's pressure energy is completely converted to kinetic energy in a nozzle before it strikes the runner. The runner itself only changes the direction of the jet, not the form of energy."
                },
                {
                    id: "cm12q067",
                    src: "HYDR626-00103",
                    text: "Which type of turbine is used to change the velocity of the water through its flow?",
                    options: [
                        { key: "a", text: "Kinetic turbines" },
                        { key: "b", text: "Axial flow turbines" },
                        { key: "c", text: "Reaction turbines" },
                        { key: "d", text: "Impulse turbines" }
                    ],
                    answer: "c",
                    explanation: "In a reaction turbine (e.g., Francis, Kaplan), the water's pressure changes as it flows through the runner. This change in pressure is accompanied by a change in the water's velocity, according to Bernoulli's principle."
                }
            ]
        },
        {
            id: "cm12irri",
            name: "Irrigation and Drainage",
            subject: "Irrigation",
            accent: "emerald",
            blurb: "11 questions drawn from the Irrigation and Drainage bank.",
            questions: [
                {
                    id: "cm12q068",
                    src: "IRRI951-00112",
                    text: "In the design of impervious apron by Khosla’s theory for weirs, the horizontal length of the apron is founded by the consideration of?",
                    options: [
                        { key: "a", text: "Design Discharge" },
                        { key: "b", text: "scouring depth" },
                        { key: "c", text: "velocity of flow over weir" },
                        { key: "d", text: "Permissible Exit gradient" }
                    ],
                    answer: "d",
                    explanation: "The length of the impervious apron is primarily determined based on the permissible exit gradient. A longer apron reduces the exit gradient to a safe value, preventing piping failure in the permeable foundation."
                },
                {
                    id: "cm12q069",
                    src: "IRRI951-00113",
                    text: "According to Khosla’s theory for seepage below a hydraulic structure the exit gradient in absence of a downstream sheet pile, is",
                    options: [
                        { key: "a", text: "0" },
                        { key: "b", text: "1" },
                        { key: "c", text: "infinite" },
                        { key: "d", text: "none of them" }
                    ],
                    answer: "c",
                    explanation: "Without a downstream sheet pile (cutoff), the depth of pervious material is theoretically infinite. This leads to an infinite exit gradient according to Khosla's formulae, making the structure highly vulnerable to piping failure."
                },
                {
                    id: "cm12q070",
                    src: "IRRI951-00114",
                    text: "Gravity dam is most suitable when the foundation is ______",
                    options: [
                        { key: "a", text: "weak" },
                        { key: "b", text: "strong" },
                        { key: "c", text: "with heavy overburden" },
                        { key: "d", text: "rocky but cracked" }
                    ],
                    answer: "b",
                    explanation: "Gravity dams rely on their own weight to resist forces. They require a strong foundation (like solid rock) to bear the enormous weight and transfer loads safely without excessive settlement or failure."
                },
                {
                    id: "cm12q071",
                    src: "IRRI951-00115",
                    text: "Which of the following type of dam is built in areas where the foundation is not strong enough to bear the weight of concrete?",
                    options: [
                        { key: "a", text: "Rock-fill dam" },
                        { key: "b", text: "Gravity dam" },
                        { key: "c", text: "Earth dam" },
                        { key: "d", text: "Arch dam" }
                    ],
                    answer: "c",
                    explanation: "Earth dams are flexible and can be built on weaker foundations (like alluvial soils) because they distribute loads over a wider area and can accommodate some settlement without failure, unlike rigid concrete dams."
                },
                {
                    id: "cm12q072",
                    src: "IRRI951-00116",
                    text: "In which of the following dam the weight of water is carried by a deck of RCC or by arches that share the weight burden?",
                    options: [
                        { key: "a", text: "Earth dams" },
                        { key: "b", text: "Rockfill dams" },
                        { key: "c", text: "Timber dam" },
                        { key: "d", text: "A hollow masonry gravity dam" }
                    ],
                    answer: "d",
                    explanation: "Hollow masonry gravity dams have a hollow interior or are buttressed. The weight of the water is supported by a reinforced concrete deck or a series of arches, which transfer the load to the buttresses, reducing the material needed compared to a solid gravity dam."
                },
                {
                    id: "cm12q073",
                    src: "IRRI951-00117",
                    text: "It is possible to construct steel dam only up to a height of ______",
                    options: [
                        { key: "a", text: "20 m" },
                        { key: "b", text: "5 m" },
                        { key: "c", text: "10 m" },
                        { key: "d", text: "50 m" }
                    ],
                    answer: "a",
                    explanation: "Steel dams are rare and used for specific purposes. They are economically and structurally feasible only for low heights, typically up to about 20 meters, due to limitations in material strength and cost-effectiveness for taller structures."
                },
                {
                    id: "cm12q074",
                    src: "IRRI951-00119",
                    text: "The horizontal component of an earthquake wave producing instability in a dam is the one which acts ______",
                    options: [
                        { key: "a", text: "towards dam" },
                        { key: "b", text: "towards reservoir" },
                        { key: "c", text: "away from reservoir" },
                        { key: "d", text: "away from dam" }
                    ],
                    answer: "b",
                    explanation: "When the horizontal seismic force acts towards the reservoir, it increases the destabilizing force on the dam by adding to the water pressure, making it more critical for stability analysis than when it acts away from the reservoir."
                },
                {
                    id: "cm12q075",
                    src: "IRRI951-00120",
                    text: "Vertical downward earthquake acceleration as a result of a gravity dam will ______",
                    options: [
                        { key: "a", text: "increase resisting weight of dam by 10%" },
                        { key: "b", text: "increase the uplift by 10%" },
                        { key: "c", text: "decrease resisting weight of dam by 10%" },
                        { key: "d", text: "decrease the uplift by 10%" }
                    ],
                    answer: "c",
                    explanation: "Vertical downward acceleration effectively reduces the gravitational acceleration. This decreases the effective weight of the dam (Resisting Weight = Mass x (g - a_v)), reducing its stability against sliding and overturning."
                },
                {
                    id: "cm12q076",
                    src: "IRRI951-00121",
                    text: "A gravity dam is subjected to hydrodynamic pressure caused by ______",
                    options: [
                        { key: "a", text: "the rising waves of the reservoir when a food wave enters into it" },
                        { key: "b", text: "the rising waves in the reservoir due to high winds" },
                        { key: "c", text: "the increase in water pressure momentarily caused by the horizontal earthquake acting towards the dam" },
                        { key: "d", text: "the increase in water pressure momentarily caused by the horizontal earthquake acting towards the reservoir" }
                    ],
                    answer: "d",
                    explanation: "Hydrodynamic pressure is an additional water pressure induced on the upstream face of the dam when it is subjected to a horizontal earthquake acceleration towards the reservoir. The water resists movement, creating an equivalent pressure on the dam."
                },
                {
                    id: "cm12q077",
                    src: "IRRI951-00122",
                    text: "In a concrete gravity dam with a vertical upstream face the stabilizing force is provided by the ______",
                    options: [
                        { key: "a", text: "Weight of the dam" },
                        { key: "b", text: "water supported against upstream slope" },
                        { key: "c", text: "uplift pressure" },
                        { key: "d", text: "water pressure at the tail end" }
                    ],
                    answer: "a",
                    explanation: "The primary stabilizing force in a gravity dam is its own weight. This weight generates friction along the base and provides the moment to resist overturning caused by water pressure and other forces. A vertical upstream face is common in gravity dam design."
                },
                {
                    id: "cm12q078",
                    src: "IRRI951-00123",
                    text: "What is the value of horizontal destabilizing force caused by the formation of waves in a storage reservoir having a fetch of 52 km due to high wind of 172 km/h?",
                    options: [
                        { key: "a", text: "30KN" },
                        { key: "b", text: "180KN" },
                        { key: "c", text: "60KN" },
                        { key: "d", text: "130KN" }
                    ],
                    answer: "b",
                    explanation: "$$h_w = 0.032 \\cdot \\sqrt{V \\cdot F} = 0.032 \\cdot \\sqrt{172 \\times 52} = 3.02 \\text{ m}$$ $$P_w = 19.62 \\cdot h_w^2 \\text{ kN/m} = 19.62 \\times 3.02^2 = 179.69 \\text{ kN/m}$$"
                }
            ]
        },
        {
            id: "cm12tran",
            name: "Transportation",
            subject: "Transportation",
            accent: "rose",
            blurb: "11 questions drawn from the Transportation bank.",
            questions: [
                {
                    id: "cm12q079",
                    src: "TRAN808-00112",
                    text: "The desire lines are prepared for study of traffic flow",
                    options: [
                        { key: "a", text: "Growth of traffic in the future" },
                        { key: "b", text: "Anticipated traffic flow" },
                        { key: "c", text: "Origin and destination" },
                        { key: "d", text: "Not Provided" }
                    ],
                    answer: "c",
                    explanation: "Desire lines are straight lines drawn on a map between origin and destination points, with thickness proportional to the number of trips. They are a key tool in Origin-Destination (O-D) studies to visualize traffic flow patterns."
                },
                {
                    id: "cm12q080",
                    src: "TRAN808-00113",
                    text: "Which of the following types of roads are most preferred for highways?",
                    options: [
                        { key: "a", text: "Cement concrete roads" },
                        { key: "b", text: "Gravel roads" },
                        { key: "c", text: "Unpaved surfaces" },
                        { key: "d", text: "Bituminous roads" }
                    ],
                    answer: "d",
                    explanation: "Bituminous (asphalt) roads are the most common and preferred surface for highways. They offer a smooth, waterproof, durable, and skid-resistant riding surface that is relatively quick and economical to construct and maintain."
                },
                {
                    id: "cm12q081",
                    src: "TRAN808-00115",
                    text: "The resisting length should be kept ………",
                    options: [
                        { key: "a", text: "Minimum" },
                        { key: "b", text: "Maximum" },
                        { key: "c", text: "Depends on gradient" },
                        { key: "d", text: "Depends on rise and fall" }
                    ],
                    answer: "a",
                    explanation: "In vertical alignment design, 'resisting length' refers to the continuous upward gradient. It should be minimized to reduce the strain on vehicles (especially heavy goods vehicles) climbing the slope, thus improving operational efficiency."
                },
                {
                    id: "cm12q082",
                    src: "TRAN808-00116",
                    text: "National highways are represented by letter(NRS 2070)",
                    options: [
                        { key: "a", text: "If followed by 3 digit number" },
                        { key: "b", text: "If followed by 2 digit number" },
                        { key: "c", text: "D followed by 2 digit number" }
                    ],
                    answer: "b",
                    explanation: "As per Nepal Road Standards 2070, National Highways are designated by the letter 'H' followed by a two-digit number (e.g., H01, H02)."
                },
                {
                    id: "cm12q083",
                    src: "TRAN808-00117",
                    text: "Feeders roads are represented by letter(NRS 2070)",
                    options: [
                        { key: "a", text: "'F' followed by 2 digit number" },
                        { key: "b", text: "'D' followed by 2 digit number" },
                        { key: "c", text: "'F' followed by 3 digit number" },
                        { key: "d", text: "'D' followed by 3 digit number" }
                    ],
                    answer: "c",
                    explanation: "As per Nepal Road Standards 2070, Feeder Roads are designated designated by letter \"F\" followed by 3-digit number. For references(Page 9): <a href=\"https://dor.gov.np/home/publication/general-documents/force/nepal-road-standard-2-7\" target=\"_blank\" rel=\"noopener noreferrer\">reference</a>"
                },
                {
                    id: "cm12q084",
                    src: "TRAN808-00118",
                    text: "Roads in Nepal are classified as (Administrative)",
                    options: [
                        { key: "a", text: "National Highways" },
                        { key: "b", text: "Greater Roads" },
                        { key: "c", text: "District Roads" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "The administrative classification of roads in Nepal, as per the Nepal Road Standard 2070, includes National Highways (H), Feeder Roads (D), District Roads (DR), and Urban Roads."
                },
                {
                    id: "cm12q085",
                    src: "TRAN808-00119",
                    text: "NRS 2070, class II roads have:",
                    options: [
                        { key: "a", text: "AOT of 5000-20000 PCU in 20 yrs perspective period" },
                        { key: "b", text: "AOT of 20,000 PCU or more in 20 yrs perspective period" },
                        { key: "c", text: "AOT of 2000-5000 PCU in 20 yrs perspective period" },
                        { key: "d", text: "ADT of less than 2000 PCU in 20 yrs perspective period." }
                    ],
                    answer: "a",
                    explanation: "NRS 2070 defines Class II roads as those designed for an Annual Average Daily Traffic (AADT) volume between 5,000 and 20,000 Passenger Car Units (PCU) at the end of the 20-year design period."
                },
                {
                    id: "cm12q086",
                    src: "TRAN808-00120",
                    text: "NRS 2070, class III roads have",
                    options: [
                        { key: "a", text: "ADT of 20,000 PCU or more in 20 yrs perspective period" },
                        { key: "b", text: "ADT of 2000-5000 PCU in 20 yrs perspective period" },
                        { key: "c", text: "ADT of 5000-20000 PCU in 20 yrs perspective period." },
                        { key: "d", text: "ADT of less than 2000 PCU in 20 yrs perspective period." }
                    ],
                    answer: "b",
                    explanation: "NRS 2070 defines Class III roads as those designed for an Annual Average Daily Traffic (AADT) volume between 2,000 and 5,000 Passenger Car Units (PCU)."
                },
                {
                    id: "cm12q087",
                    src: "TRAN808-00121",
                    text: "NRS 2070, class IV roads have",
                    options: [
                        { key: "a", text: "ADT of 20,000 PCU or more in 20 yrs perspective period" },
                        { key: "b", text: "ADT of 5000-20000 PCU in 20 yrs perspective period." },
                        { key: "c", text: "ADT of less than 2000 PCU in 20 yrs perspective period." },
                        { key: "d", text: "ADT of 2000-5000 PCU in 20 yrs perspective period" }
                    ],
                    answer: "c",
                    explanation: "NRS 2070 defines Class IV roads as low-volume roads designed for an Annual Average Daily Traffic (AADT) of less than 2,000 Passenger Car Units (PCU)."
                },
                {
                    id: "cm12q088",
                    src: "TRAN808-00122",
                    text: "The maximum width of vehicles considered for design of roads in Nepal are",
                    options: [
                        { key: "a", text: "2.0 m" },
                        { key: "b", text: "3.0 m" },
                        { key: "c", text: "4.0 m" },
                        { key: "d", text: "2.50 m" }
                    ],
                    answer: "d",
                    explanation: "As per standard vehicle dimensions used in geometric design in Nepal, the maximum width of a design vehicle is typically taken as 2.50 meters to determine lane width, clearance, etc."
                },
                {
                    id: "cm12q089",
                    src: "TRAN808-00123",
                    text: "The maximum height of vehicles considered for design of roads in Nepal are",
                    options: [
                        { key: "a", text: "4.20 m" },
                        { key: "b", text: "4.750 m" },
                        { key: "c", text: "4.5 m" },
                        { key: "d", text: "4.10 m" }
                    ],
                    answer: "a",
                    explanation: "The standard maximum height for a design vehicle in Nepal is 4.20 meters. This determines the minimum vertical clearance required for structures like overpasses and tunnels."
                }
            ]
        },
        {
            id: "cm12wate",
            name: "Water Supply, Sanitation and Environment",
            subject: "Water Supply",
            accent: "blue",
            blurb: "11 questions drawn from the Water Supply, Sanitation and Environment bank.",
            questions: [
                {
                    id: "cm12q090",
                    src: "WATE813-00102",
                    text: "Which of the following should be included in the scoping study/ToR?",
                    options: [
                        { key: "a", text: "the policy and institutional frameworks under which the EIA will be conducted" },
                        { key: "b", text: "problems with data availability" },
                        { key: "c", text: "spatial and temporal parameters for detailed studies" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "d",
                    explanation: "A robust Terms of Reference (ToR) is a blueprint for the EIA. It must define the legal and policy context, acknowledge limitations like data gaps, and set the geographical area and time frame (e.g., construction vs. operation phase) for the detailed studies to ensure a comprehensive and feasible assessment."
                },
                {
                    id: "cm12q091",
                    src: "WATE813-00103",
                    text: "Which of the following is not a material consideration when making impact predictions of environmental damage?",
                    options: [
                        { key: "a", text: "the period of time an impact will last for" },
                        { key: "b", text: "the area over which an impact will occur" },
                        { key: "c", text: "benefits of the project for jobs and economy" },
                        { key: "d", text: "the intensity of environmental damage within the impact zone" }
                    ],
                    answer: "c",
                    explanation: "Impact prediction focuses on characterizing the nature, magnitude, and significance of the environmental effect itself. Key parameters include duration (time), extent (area), and intensity. While project benefits (jobs, economy) are crucial in the final decision-making balance, they are separate from the technical prediction of the environmental damage."
                },
                {
                    id: "cm12q092",
                    src: "WATE813-00104",
                    text: "Which of the following are indirect impacts?",
                    options: [
                        { key: "a", text: "visual impact of a chimney in a power station project" },
                        { key: "b", text: "predicted noise impact of a new road in operation" },
                        { key: "c", text: "impact on air quality from trucking supplies of wood to a construction site" },
                        { key: "d", text: "impact of mining raw materials for building new power station" }
                    ],
                    answer: "d",
                    explanation: "Indirect impacts are secondary or induced effects that are not directly caused by the project action but are occurring later in time or farther away in distance. Mining raw materials for the power station is an indirect impact (also called a cumulative impact). The other options are direct impacts occurring from the primary project activities."
                },
                {
                    id: "cm12q093",
                    src: "WATE813-00105",
                    text: "Insurance is an example of",
                    options: [
                        { key: "a", text: "Risk transfer" },
                        { key: "b", text: "Risk reduction" },
                        { key: "c", text: "Risk avoidance" },
                        { key: "d", text: "Risk acceptance" }
                    ],
                    answer: "a",
                    explanation: "Insurance is a classic example of risk transfer, where the financial risk is shifted from an individual or entity to an insurance company in exchange for a premium."
                },
                {
                    id: "cm12q094",
                    src: "WATE813-00106",
                    text: "All are the principle of emergency management except?",
                    options: [
                        { key: "a", text: "Coordination" },
                        { key: "b", text: "Inflexibility" },
                        { key: "c", text: "Comprehension" },
                        { key: "d", text: "Progression" }
                    ],
                    answer: "b",
                    explanation: "Emergency management principles are dynamic and adaptive. Key principles include coordination, comprehension (understanding the situation), and progression (a phased approach). Inflexibility is contrary to the adaptable nature of effective emergency management."
                },
                {
                    id: "cm12q095",
                    src: "WATE813-00107",
                    text: "Which of the following is wrong?",
                    options: [
                        { key: "a", text: "Disaster may be hazard" },
                        { key: "b", text: "Hazard is product of risk and vulnerability" },
                        { key: "c", text: "Hazard is any negative event require external assistance" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "b",
                    explanation: "This statement reverses the standard risk formula. The correct formula is Risk = Hazard x Vulnerability x Exposure. A hazard is a potential source of harm. Not all hazards require external assistance; only when they materialize and cause significant damage do they become disasters."
                },
                {
                    id: "cm12q096",
                    src: "WATE813-00109",
                    text: "Slow occurrences and multi casual among the following natural disaster",
                    options: [
                        { key: "a", text: "Conflict" },
                        { key: "b", text: "Earth quake" },
                        { key: "c", text: "Volcano eruption" },
                        { key: "d", text: "Out break" }
                    ],
                    answer: "d",
                    explanation: "Outbreaks (e.g., epidemics, pandemics) are often slow-onset disasters with multiple causal factors (biological, social, environmental), unlike geophysical events like earthquakes or volcanic eruptions which are rapid-onset."
                },
                {
                    id: "cm12q097",
                    src: "WATE813-00110",
                    text: "Natural disasters generally involve which of the following?",
                    options: [
                        { key: "a", text: "Events that involve overlapping natural causes" },
                        { key: "b", text: "Events with a single clear-cut cause" },
                        { key: "c", text: "Events wholly caused by activities of man" },
                        { key: "d", text: "Events that are unaffected by activities of man" }
                    ],
                    answer: "a",
                    explanation: "Natural disasters typically result from complex, interlinked natural processes (e.g., weather patterns, tectonic movements). Human activities (e.g., climate change, deforestation) can also significantly influence their frequency and intensity."
                },
                {
                    id: "cm12q098",
                    src: "WATE813-00111",
                    text: "Common cause of tsunami",
                    options: [
                        { key: "a", text: "Funnel-shaped air spirals" },
                        { key: "b", text: "Undersea earthquake" },
                        { key: "c", text: "Strong winds accompanied by rain, snow and thunder" },
                        { key: "d", text: "Volcanic eruption through magma" }
                    ],
                    answer: "b",
                    explanation: "The most common cause of tsunamis is the vertical displacement of the seafloor due to undersea earthquakes. While volcanic eruptions can also cause tsunamis, they are less frequent. The other options describe causes of tornadoes and storms."
                },
                {
                    id: "cm12q099",
                    src: "WATE813-00113",
                    text: "Commonly used type of epidemiological study design for disaster among the following",
                    options: [
                        { key: "a", text: "Cohort" },
                        { key: "b", text: "Experimental" },
                        { key: "c", text: "Crossectional" },
                        { key: "d", text: "Case control" }
                    ],
                    answer: "c",
                    explanation: "Cross-sectional studies are frequently used immediately after a disaster to quickly assess the prevalence of health outcomes, needs, and exposure among the affected population at a specific point in time."
                },
                {
                    id: "cm12q100",
                    src: "WATE813-00114",
                    text: "More frequent type of disaster in Nepal among the following",
                    options: [
                        { key: "a", text: "Drought" },
                        { key: "b", text: "Outbreak" },
                        { key: "c", text: "Flood" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "d",
                    explanation: "Nepal is highly vulnerable to a variety of natural disasters. Floods and landslides are very common, especially during the monsoon season. Droughts occur in certain regions, and disease outbreaks are also a recurrent challenge."
                }
            ]
        }
    ]
};

/* Registered lazily — js/civil.js injects this file when the set is opened. */
window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["civil-12"] = CIVIL_MODEL_12;
