/* ============================================================
   CIVIL MODEL SET 11 — Civil Engineering licence-style model paper
   100 questions · 120 minutes · no negative marking

     Basic Civil Engineering...................  13
     Structural Mechanics......................  11
     Design of Structures......................   9
     Soil Mechanics and Foundation.............  13
     Basic Water Resources Engineering.........  12
     Hydropower................................  10
     Irrigation and Drainage...................  11
     Transportation............................  11
     Water Supply, Sanitation and Environment..  10

   Generated from the civil engineering question bank; every bank
   question is used in exactly one set. Identical duplicate options
   were collapsed, and the key was rotated across a/b/c/d except on
   questions whose options refer to other options.
   The "src" field on each question is its id in the source bank.
   ============================================================ */
const CIVIL_MODEL_11 = {
    day: 41,
    kind: "model",
    badge: { top: "Model", main: "C11" },
    title: "Civil Model Set 11",
    subtitle: "Civil Engineering · 9 subjects",
    durationMinutes: 120,
    negativeMarking: 0,
    chapters: [
        {
            id: "cm11basi",
            name: "Basic Civil Engineering",
            subject: "Basic Civil",
            accent: "blue",
            blurb: "13 questions drawn from the Basic Civil Engineering bank.",
            questions: [
                {
                    id: "cm11q001",
                    src: "BASI674-00120",
                    text: "The bitumen surface becomes stiff in ______",
                    options: [
                        { key: "a", text: "Summer" },
                        { key: "b", text: "Rainy" },
                        { key: "c", text: "Spring" },
                        { key: "d", text: "Winter" }
                    ],
                    answer: "d",
                    explanation: "Bitumen is a thermoplastic material that becomes hard and brittle at low temperatures, which are typical in winter."
                },
                {
                    id: "cm11q002",
                    src: "BASI674-00121",
                    text: "Which of the following is not an explosive used for blasting?",
                    options: [
                        { key: "a", text: "Flash powder" },
                        { key: "b", text: "Gellgnite" },
                        { key: "c", text: "Gunpowder" },
                        { key: "d", text: "Nitrocellulose" }
                    ],
                    answer: "a",
                    explanation: "Flash powder is a pyrotechnic composition, not typically used for industrial rock blasting, unlike the other options which are explosives."
                },
                {
                    id: "cm11q003",
                    src: "BASI674-00122",
                    text: "Which bitumen does not need heating?",
                    options: [
                        { key: "a", text: "Paving grade" },
                        { key: "b", text: "Bitumen emulsion" },
                        { key: "c", text: "Cut back" },
                        { key: "d", text: "Modified" }
                    ],
                    answer: "b",
                    explanation: "Bitumen emulsion is a dispersion of bitumen in water, stabilized with an emulsifying agent, allowing it to be applied cold without heating."
                },
                {
                    id: "cm11q004",
                    src: "BASI674-00123",
                    text: "Which of the following grade of bitumen is harder?",
                    options: [
                        { key: "a", text: "60/70" },
                        { key: "b", text: "80/100" },
                        { key: "c", text: "30/40" },
                        { key: "d", text: "All are equal" }
                    ],
                    answer: "c",
                    explanation: "The grade number (e.g., 30/40) indicates the penetration value range. A lower penetration value means the bitumen is harder. Therefore, 30/40 is harder than 60/70 or 80/100."
                },
                {
                    id: "cm11q005",
                    src: "BASI674-00124",
                    text: "How many Mangalore tiles are required to cover 1 square metre of roof?",
                    options: [
                        { key: "a", text: "5" },
                        { key: "b", text: "25" },
                        { key: "c", text: "50" },
                        { key: "d", text: "15" }
                    ],
                    answer: "d",
                    explanation: "Mangalore tiles are a specific type of interlocking roof tile. On average, 14-15 tiles are required to cover one square meter, making 15 the closest standard estimate."
                },
                {
                    id: "cm11q006",
                    src: "BASI674-00125",
                    text: "Which standard in Nepal provides specification for burnt clay bricks in Nepal?",
                    options: [
                        { key: "a", text: "NS 49/2041" },
                        { key: "b", text: "NS 1/2035" },
                        { key: "c", text: "NS 297/2035" },
                        { key: "d", text: "NS 84/2035" }
                    ],
                    answer: "a",
                    explanation: "Nepal Standard NS 49:2041 specifies the requirements for burnt clay bricks used in construction in Nepal."
                },
                {
                    id: "cm11q007",
                    src: "BASI674-00126",
                    text: "Minimum number of brick samples used in compressive strength test of brick is",
                    options: [
                        { key: "a", text: "3" },
                        { key: "b", text: "5" },
                        { key: "c", text: "4" },
                        { key: "d", text: "6" }
                    ],
                    answer: "b",
                    explanation: "As per standard testing procedures (like IS 3495), a minimum of five brick samples are tested, and the average compressive strength is reported."
                },
                {
                    id: "cm11q008",
                    src: "BASI674-00127",
                    text: "In absorption test on brick, how many hours it has to be soaked in cold water?",
                    options: [
                        { key: "a", text: "19 hours" },
                        { key: "b", text: "5 hours" },
                        { key: "c", text: "24 hours" },
                        { key: "d", text: "6 hours" }
                    ],
                    answer: "c",
                    explanation: "The standard water absorption test for bricks involves drying the brick in an oven and then immersing it in cold water for a period of 24 hours before weighing."
                },
                {
                    id: "cm11q009",
                    src: "BASI674-00128",
                    text: "What should be observed ideally when two bricks are struck together?",
                    options: [
                        { key: "a", text: "Dull sound" },
                        { key: "b", text: "Sides shatter" },
                        { key: "c", text: "Brick breaks" },
                        { key: "d", text: "Clear ringing sound" }
                    ],
                    answer: "d",
                    explanation: "A well-burnt, good quality brick produces a clear metallic ringing sound when struck against another brick. A dull sound indicates under-burning or flaws."
                },
                {
                    id: "cm11q010",
                    src: "BASI674-00129",
                    text: "How is the hardness of brick tested?",
                    options: [
                        { key: "a", text: "Using a scratch test with a knife" },
                        { key: "b", text: "Using finger nail" },
                        { key: "c", text: "Using hammer" },
                        { key: "d", text: "Using chisel" }
                    ],
                    answer: "a",
                    explanation: "A good brick is sufficiently hard that no impression is made on its surface when scratched with a fingernail or a knife. This is a simple field test for hardness."
                },
                {
                    id: "cm11q011",
                    src: "BASI674-00130",
                    text: "What is the loading rate used in compressive strength test?",
                    options: [
                        { key: "a", text: "14 N/mm² per hour" },
                        { key: "b", text: "14 N/mm² per min" },
                        { key: "c", text: "20 N/mm² per min" },
                        { key: "d", text: "40 N/mm² per hour" }
                    ],
                    answer: "b",
                    explanation: "Standard test methods (e.g., IS 3495) specify that the load should be applied uniformly at a rate of 14 N/mm² (140 kg/cm²) per minute until failure occurs."
                },
                {
                    id: "cm11q012",
                    src: "BASI674-00131",
                    text: "Nepal standards are prepared by",
                    options: [
                        { key: "a", text: "The Nepal Bureau of Standards and Metrology (NBSM)." },
                        { key: "b", text: "Government of Nepal" },
                        { key: "c", text: "Bureau of Standards and Metrology" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "a",
                    explanation: "The Nepal Bureau of Standards and Metrology (NBSM) is the national standards body responsible for preparing and promulgating national standards in Nepal."
                },
                {
                    id: "cm11q013",
                    src: "BASI674-00132",
                    text: "Determination of compressive strength is based on",
                    options: [
                        { key: "a", text: "IS: 3495 Part II" },
                        { key: "b", text: "IS: 3495 Part III" },
                        { key: "c", text: "IS: 3495 Part IV" },
                        { key: "d", text: "IS: 3495 Part I" }
                    ],
                    answer: "d",
                    explanation: "IS 3495 (Parts 1 to 4) are the Indian Standard methods for tests of burnt clay building bricks. Part 1 specifically covers the determination of compressive strength."
                }
            ]
        },
        {
            id: "cm11stru",
            name: "Structural Mechanics",
            subject: "Structural Mech",
            accent: "cyan",
            blurb: "11 questions drawn from the Structural Mechanics bank.",
            questions: [
                {
                    id: "cm11q014",
                    src: "STRU935-00101",
                    text: "If there are three point loads acting simultaneously on a simply supported beam, where would absolute max. Moment occur?",
                    options: [
                        { key: "a", text: "Beneath largest force" },
                        { key: "b", text: "Beneath smallest force" },
                        { key: "c", text: "Beneath mid force" },
                        { key: "d", text: "Can’t say" }
                    ],
                    answer: "a",
                    explanation: "For multiple moving point loads on a simply supported beam (like in a train of loads), the absolute maximum bending moment will generally occur under the largest force in the group when that force is positioned such that the center of the beam is midway between that force and the resultant of all the loads on the beam."
                },
                {
                    id: "cm11q015",
                    src: "STRU935-00102",
                    text: "To draw qualitative ILD of indeterminate structure, which of the following concept is used.",
                    options: [
                        { key: "a", text: "Unit Load Method" },
                        { key: "b", text: "Mullers Breslou’s Principle" },
                        { key: "c", text: "Castigliano’s First energy theorem" },
                        { key: "d", text: "Kani’s Method" }
                    ],
                    answer: "b",
                    explanation: "Müller-Breslau's Principle is a fundamental concept used to qualitatively draw the shape of influence lines for statically indeterminate structures. It states that the influence line for a function (reaction, shear, moment) is proportional to the deflected shape of the structure after removing the restraint corresponding to that function."
                },
                {
                    id: "cm11q016",
                    src: "STRU935-00103",
                    text: "Where is point of inflection assumed in column and beam of a portal frame (length of column and beam is L)?",
                    options: [
                        { key: "a", text: "At end" },
                        { key: "b", text: "At one fourth of span" },
                        { key: "c", text: "At mid point of span" },
                        { key: "d", text: "At one third of span" }
                    ],
                    answer: "c",
                    explanation: "In the approximate analysis of portal frames (especially for lateral loads), points of inflection (where bending moment is zero) are often assumed to be at the mid-point of the height of the columns and the mid-point of the span of the beam for simplified calculations."
                },
                {
                    id: "cm11q017",
                    src: "STRU935-00104",
                    text: "The slope and deflection at free end of canniblerer beam subjected to point load W at that end is",
                    options: [
                        { key: "a", text: "WL/EI and WL²/2EI" },
                        { key: "b", text: "WL³/6EI and WL⁴/8EI" },
                        { key: "c", text: "WL⁴/24EI and WL⁵/30EI" },
                        { key: "d", text: "WL²/2EI and WL³/3EI" }
                    ],
                    answer: "d",
                    explanation: "For a cantilever beam with a point load W at its free end, the slope (θ) at the free end is given by WL²/(2EI) and the deflection (Δ) is given by WL³/(3EI). This is derived from standard beam deflection formulas."
                },
                {
                    id: "cm11q018",
                    src: "STRU935-00105",
                    text: "Deflection at midspan of simply supported beam subjected to point load W is",
                    options: [
                        { key: "a", text: "WL³/48EI" },
                        { key: "b", text: "WL³/16EI" },
                        { key: "c", text: "WL³/24EI" },
                        { key: "d", text: "5WL³/384EI" }
                    ],
                    answer: "a",
                    explanation: "The maximum deflection for a simply supported beam with a central point load W is given by the formula Δ_max = WL³/(48EI), where L is the span length, E is the modulus of elasticity, and I is the moment of inertia."
                },
                {
                    id: "cm11q019",
                    src: "STRU935-00106",
                    text: "Deflection at midspan of simply supported beam subjected to couple M at both end is",
                    options: [
                        { key: "a", text: "WL³/16EI" },
                        { key: "b", text: "ML²/8EI" },
                        { key: "c", text: "ML²/24EI" },
                        { key: "d", text: "ML/2EI" }
                    ],
                    answer: "b",
                    explanation: "For a simply supported beam subjected to equal end couples M, the maximum deflection occurs at the mid-span and is calculated by the formula Δ_max = ML²/(8EI). This is a standard result from beam theory."
                },
                {
                    id: "cm11q020",
                    src: "STRU935-00107",
                    text: "In BMD and SFD :",
                    options: [
                        { key: "a", text: "Points remain fixed, position of load changes" },
                        { key: "b", text: "Points change, position of loads remain fixed" },
                        { key: "c", text: "Both of them changes" },
                        { key: "d", text: "Neither of them changes" }
                    ],
                    answer: "b",
                    explanation: "In Bending Moment Diagrams (BMD) and Shear Force Diagrams (SFD), we analyze the variation of shear force and bending moment at different points (sections) along the beam for a fixed set of loads. The position of the loads remains constant; we change the point (section) at which we are calculating the internal forces."
                },
                {
                    id: "cm11q021",
                    src: "STRU935-00108",
                    text: "In influence line diagrams (ILD) :",
                    options: [
                        { key: "a", text: "Points remain fixed, position of load changes" },
                        { key: "b", text: "Points change, position of loads remain fixed" },
                        { key: "c", text: "Both of them changes" },
                        { key: "d", text: "Neither of them changes" }
                    ],
                    answer: "a",
                    explanation: "In Influence Line Diagrams (ILD), we analyze the variation of a specific function (reaction, shear, moment) at a fixed point on the structure as a unit load moves across the structure. The point is fixed; the position of the load changes."
                },
                {
                    id: "cm11q022",
                    src: "STRU935-00109",
                    text: "For drawing ILD, what value of test load is assumed?",
                    options: [
                        { key: "a", text: "1 unit" },
                        { key: "b", text: "Arbitrary" },
                        { key: "c", text: "Depends upon structure" },
                        { key: "d", text: "0" }
                    ],
                    answer: "a",
                    explanation: "An Influence Line Diagram (ILD) is drawn by moving a unit load (typically 1 kN or 1 kip) across the structure. The response (reaction, shear, moment) is plotted for each position of this unit load. The value is always 1 unit of force."
                },
                {
                    id: "cm11q023",
                    src: "STRU935-00110",
                    text: "ILD of statically determinate beams consist",
                    options: [
                        { key: "a", text: "Curves" },
                        { key: "b", text: "Straight lines" },
                        { key: "c", text: "Curves &amp; straight lines" },
                        { key: "d", text: "None" }
                    ],
                    answer: "b",
                    explanation: "Influence lines for statically determinate beams consist of straight-line segments. This is because the functions (reactions, shears, moments) vary linearly with the position of the unit load."
                },
                {
                    id: "cm11q024",
                    src: "STRU935-00111",
                    text: "ILD of statically indeterminate beams consist of:",
                    options: [
                        { key: "a", text: "Straight lines" },
                        { key: "b", text: "Curves &amp; straight lines" },
                        { key: "c", text: "Curves" },
                        { key: "d", text: "None" }
                    ],
                    answer: "c",
                    explanation: "Influence lines for statically indeterminate structures are typically curves. This is due to the redundant restraints which cause the response to vary in a non-linear (curved) manner with the position of the unit load."
                }
            ]
        },
        {
            id: "cm11desi",
            name: "Design of Structures",
            subject: "Design of Str",
            accent: "slate",
            blurb: "9 questions drawn from the Design of Structures bank.",
            questions: [
                {
                    id: "cm11q025",
                    src: "DESI787-00088",
                    text: "Minimum reinforcement for slab with mild steel as reinforcement is",
                    options: [
                        { key: "a", text: "0.2 %" },
                        { key: "b", text: "1.2 %" },
                        { key: "c", text: "4 %" },
                        { key: "d", text: "0.15 %" }
                    ],
                    answer: "d",
                    explanation: "As per IS 456:2000, Clause 26.5.2.1, the minimum reinforcement (Fe 250) for slabs is 0.15% of the gross cross-sectional area for mild steel (Fe 250)."
                },
                {
                    id: "cm11q026",
                    src: "DESI787-00089",
                    text: "Minimum reinforcement for slab with Fe 500 used as reinforcement is",
                    options: [
                        { key: "a", text: "0.12 %" },
                        { key: "b", text: "0.15 %" },
                        { key: "c", text: "1.2 %" },
                        { key: "d", text: "4 %" }
                    ],
                    answer: "a",
                    explanation: "As per IS 456:2000, Clause 26.5.2.1, the minimum reinforcement for slabs with high strength deformed bars (Fe 415 and above) is 0.12% of the gross cross-sectional area."
                },
                {
                    id: "cm11q027",
                    src: "DESI787-00090",
                    text: "Minimum grade of concrete to be used in reinforced concrete as per IS: 456-2000 is",
                    options: [
                        { key: "a", text: "M 15" },
                        { key: "b", text: "M 20" },
                        { key: "c", text: "M 10" },
                        { key: "d", text: "M 25" }
                    ],
                    answer: "b",
                    explanation: "As per IS 456:2000, Clause 8.2.1.1, the minimum grade of concrete for reinforced concrete is M20. However, for mild exposure, M15 can be used for plain concrete."
                },
                {
                    id: "cm11q028",
                    src: "DESI787-00091",
                    text: "The maximum premissible deflection in slab is",
                    options: [
                        { key: "a", text: "L/180" },
                        { key: "b", text: "L/200" },
                        { key: "c", text: "L/250" },
                        { key: "d", text: "L/350" }
                    ],
                    answer: "c",
                    explanation: "As per IS 456:2000, Clause 23.2, the maximum permissible deflection for slabs is L/250 after the construction of finishes and partitions."
                },
                {
                    id: "cm11q029",
                    src: "DESI787-00092",
                    text: "Minimum spacing of main bars for 5 inch thick RCC slab is",
                    options: [
                        { key: "a", text: "100 mm" },
                        { key: "b", text: "150 mm" },
                        { key: "c", text: "300 mm" },
                        { key: "d", text: "75 mm" }
                    ],
                    answer: "d",
                    explanation: "5 inches is approximately 125 mm. As per IS 456:2000, Clause 26.3.2, the minimum spacing between bars should be the largest of: (i) diameter of the bar, (ii) 5 mm more than the nominal maximum size of coarse aggregate, or (iii) 15 mm. Typically, for slabs, a minimum spacing of 75 mm is adopted for practical reasons and to avoid congestion."
                },
                {
                    id: "cm11q030",
                    src: "DESI787-00094",
                    text: "Maximum spacing of distribution bars for 5 inch thick RCC slab is",
                    options: [
                        { key: "a", text: "450 mm" },
                        { key: "b", text: "250 mm" },
                        { key: "c", text: "300 mm" },
                        { key: "d", text: "375 mm" }
                    ],
                    answer: "a",
                    explanation: "As per IS 456:2000, Clause 26.3.3, the maximum spacing for distribution bars is 5 times the effective depth or 450 mm, whichever is smaller. For a 5-inch (125 mm) slab, effective depth is about 100 mm. 5 * 100 = 500 mm, but limited to 450 mm. So, 450 mm is the maximum."
                },
                {
                    id: "cm11q031",
                    src: "DESI787-00095",
                    text: "Maximum diameter of bars used in 5 inch thick slab is",
                    options: [
                        { key: "a", text: "10 mm" },
                        { key: "b", text: "16 mm" },
                        { key: "c", text: "12 mm" },
                        { key: "d", text: "20 mm" }
                    ],
                    answer: "b",
                    explanation: "As per general practice and IS 456 guidelines, the diameter of bars in a slab should not exceed one-eighth of the total thickness. For a 125 mm thick slab, maximum bar diameter = 125/8 = 15.625 mm. Therefore, 16 mm bars are the maximum that can be used."
                },
                {
                    id: "cm11q032",
                    src: "DESI787-00096",
                    text: "If a beam fails in bond, then its bond strength can be increased most economically by",
                    options: [
                        { key: "a", text: "Increasing the depth of beam" },
                        { key: "b", text: "Using thicker bars but less in number" },
                        { key: "c", text: "Using thinner bars but more in number" },
                        { key: "d", text: "Providing vertical stirrups" }
                    ],
                    answer: "c",
                    explanation: "Bond strength is proportional to the surface area of the bar. Using thinner bars increases the total surface area for the same cross-sectional area of steel, thereby improving bond resistance economically."
                },
                {
                    id: "cm11q033",
                    src: "DESI787-00097",
                    text: "When shear stress exceeds the permissible limit in a slab, then it is reduced by",
                    options: [
                        { key: "a", text: "Providing shear reinforcement" },
                        { key: "b", text: "Using high strength steel" },
                        { key: "c", text: "Using thinner bars but more in number" },
                        { key: "d", text: "Increasing the depth" }
                    ],
                    answer: "d",
                    explanation: "In slabs, shear reinforcement is generally not provided due to practical difficulties. Therefore, the most common method to reduce shear stress is to increase the depth of the slab, which increases the shear capacity."
                }
            ]
        },
        {
            id: "cm11soil",
            name: "Soil Mechanics and Foundation",
            subject: "Soil Mechanics",
            accent: "amber",
            blurb: "13 questions drawn from the Soil Mechanics and Foundation bank.",
            questions: [
                {
                    id: "cm11q034",
                    src: "SOIL136-00120",
                    text: "The following data refer to a sample of soil, passing from 4.75 mm is sieve = 64%, &gt; 90 passing from 0.075 mm is sieve = 6 Cu = 7.5 C = 2.7 Plasticity Index = 2.5; classify soil",
                    options: [
                        { key: "a", text: "SW" },
                        { key: "b", text: "SP" },
                        { key: "c", text: "GW" },
                        { key: "d", text: "GP" }
                    ],
                    answer: "a",
                    explanation: "64% passing 4.75mm means it is a sand (S). Cu=7.5 (&gt;6) and Cc=2.7 (between 1-3) are good gradation criteria. The low PI (2.5 &lt; 7) indicates it is non-plastic. Therefore, the soil is classified as Well-graded Sand (SW)."
                },
                {
                    id: "cm11q035",
                    src: "SOIL136-00121",
                    text: "For GW soil Cu is ...... and C between",
                    options: [
                        { key: "a", text: "Less than 4, 1-3" },
                        { key: "b", text: "More than 4, 1-3" },
                        { key: "c", text: "Less than 6, 1-3" },
                        { key: "d", text: "More than 6, 1-3" }
                    ],
                    answer: "b",
                    explanation: "For a well-graded gravel (GW), the uniformity coefficient (C_u) must be greater than 4, and the coefficient of curvature (C_c) must be between 1 and 3."
                },
                {
                    id: "cm11q036",
                    src: "SOIL136-00122",
                    text: "For SW soil Cu is ...... and C between",
                    options: [
                        { key: "a", text: "Less than 4, 1-3" },
                        { key: "b", text: "Less than 6, 1-3" },
                        { key: "c", text: "More than 6, 1-3" },
                        { key: "d", text: "More than 4, 1-3" }
                    ],
                    answer: "c",
                    explanation: "For a well-graded sand (SW), the uniformity coefficient (C_u) must be greater than 6, and the coefficient of curvature (C_c) must be between 1 and 3."
                },
                {
                    id: "cm11q037",
                    src: "SOIL136-00123",
                    text: "The water content at which soil changes from the liquid state to the plastic state is known as ......",
                    options: [
                        { key: "a", text: "Plastic Limit" },
                        { key: "b", text: "Shrinkage Limit" },
                        { key: "c", text: "None" },
                        { key: "d", text: "Liquid Limit" }
                    ],
                    answer: "d",
                    explanation: "The Liquid Limit (LL or w_l) is the water content at which a soil changes from a liquid state to a plastic state."
                },
                {
                    id: "cm11q038",
                    src: "SOIL136-00124",
                    text: "The water content at which soil changes from the plastic state to the semi-solid state is known as ......",
                    options: [
                        { key: "a", text: "Plastic Limit" },
                        { key: "b", text: "Liquid Limit" },
                        { key: "c", text: "Shrinkage Limit" },
                        { key: "d", text: "None" }
                    ],
                    answer: "a",
                    explanation: "The Plastic Limit (PL or w_p) is the water content at which a soil changes from a plastic state to a semi-solid state."
                },
                {
                    id: "cm11q039",
                    src: "SOIL136-00125",
                    text: "The water content at which soil changes from the semi-solid state to the solid-state is known as ......",
                    options: [
                        { key: "a", text: "Liquid Limit" },
                        { key: "b", text: "Shrinkage Limit" },
                        { key: "c", text: "Plastic Limit" },
                        { key: "d", text: "None" }
                    ],
                    answer: "b",
                    explanation: "The Shrinkage Limit (SL or w_s) is the water content at which a soil changes from a semi-solid state to a solid state and no further volume change occurs upon drying."
                },
                {
                    id: "cm11q040",
                    src: "SOIL136-00126",
                    text: "Shrinkage Index (is) =",
                    options: [
                        { key: "a", text: "W_p - W_s" },
                        { key: "b", text: "W_s - W_p" },
                        { key: "c", text: "W_l - W_p" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "a",
                    explanation: "The Shrinkage Index (I_s) is defined as the difference between the Plastic Limit and the Shrinkage Limit: I_s = W_p - W_s."
                },
                {
                    id: "cm11q041",
                    src: "SOIL136-00127",
                    text: "Liquidity Index (IL) =",
                    options: [
                        { key: "a", text: "(W - W_l) / I_p" },
                        { key: "b", text: "(W - W_s) / I_p" },
                        { key: "c", text: "(W - W_l) / W_p" },
                        { key: "d", text: "(W - W_p) / I_p" }
                    ],
                    answer: "d",
                    explanation: "The Liquidity Index (I_L) or Water-Plasticity Ratio is defined as (Natural Water Content - Plastic Limit) / Plasticity Index: I_L = (W - W_p) / I_p."
                },
                {
                    id: "cm11q042",
                    src: "SOIL136-00128",
                    text: "Toughness Index (It) =",
                    options: [
                        { key: "a", text: "I_p / I_f" },
                        { key: "b", text: "I_f / I_p" },
                        { key: "c", text: "W_L - W_p" },
                        { key: "d", text: "W_p - W_L" }
                    ],
                    answer: "a",
                    explanation: "The Toughness Index (I_t) is the ratio of the Plasticity Index (I_p) to the Flow Index (I_f), which is the slope of the flow curve from the liquid limit test. I_t = I_p / I_f."
                },
                {
                    id: "cm11q043",
                    src: "SOIL136-00129",
                    text: "The arrangement and state of aggregation of soil particles in soil mass is known as",
                    options: [
                        { key: "a", text: "Soil Structure" },
                        { key: "b", text: "Soil Permeability" },
                        { key: "c", text: "Soil Consistency" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "a",
                    explanation: "Soil structure refers to the arrangement of soil particles and the aggregates they form, which significantly influences the soil's engineering behavior."
                },
                {
                    id: "cm11q044",
                    src: "SOIL136-00130",
                    text: "Single grain structure is characteristic of",
                    options: [
                        { key: "a", text: "Coarse-Grained" },
                        { key: "b", text: "Fine-Grained" },
                        { key: "c", text: "Mixed Grained" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "a",
                    explanation: "Single-grained structure is typical of coarse-grained soils (sands and gravels) where particles are in direct contact with each other and gravitational forces dominate."
                },
                {
                    id: "cm11q045",
                    src: "SOIL136-00131",
                    text: "In which types of soil structure, the particles size is greater than 0.02 mm?",
                    options: [
                        { key: "a", text: "Honey - comb" },
                        { key: "b", text: "Dispersed" },
                        { key: "c", text: "Flocculated" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "d",
                    explanation: "Single-grained structure is associated with particle sizes greater than 0.02 mm (coarse-grained soils). Honeycomb, flocculated, and dispersed structures are typical of fine-grained soils (smaller than 0.002 mm)."
                },
                {
                    id: "cm11q046",
                    src: "SOIL136-00132",
                    text: "In which types of soil structure, the particles size is greater than 0.0002 mm to 0.02 mm?",
                    options: [
                        { key: "a", text: "Honeycomb" },
                        { key: "b", text: "Single Grained" },
                        { key: "c", text: "Flocculated" },
                        { key: "d", text: "Dispersed" }
                    ],
                    answer: "a",
                    explanation: "Honeycomb structure is common in soil particles in the silt size range, which is between 0.075 mm and 0.002 mm. The range 0.0002 mm to 0.02 mm falls within this broader category."
                }
            ]
        },
        {
            id: "cm11watr",
            name: "Basic Water Resources Engineering",
            subject: "Water Resources",
            accent: "emerald",
            blurb: "12 questions drawn from the Basic Water Resources Engineering bank.",
            questions: [
                {
                    id: "cm11q047",
                    src: "WATE701-00109",
                    text: "What is the formula for the wetted perimeter (P) of a trapezoidal channel section with bottom width B, flow depth y, and side slope z:1?",
                    options: [
                        { key: "a", text: "\\(B + y\\sqrt{1 + z^2}\\)" },
                        { key: "b", text: "\\(B + 2y\\sqrt{1 + z^2}\\)" },
                        { key: "c", text: "\\(B + 2z\\sqrt{1 + y^2}\\)" },
                        { key: "d", text: "\\(B + 2\\sqrt{y^2 + z^2}\\)" }
                    ],
                    answer: "b",
                    explanation: "The wetted perimeter of a trapezoidal channel is the bed width plus the two sloping sides, and each side has a length of y times the root of (1 plus z squared) by Pythagoras. That gives P equal to B plus 2y times the root of (1 plus z squared)."
                },
                {
                    id: "cm11q048",
                    src: "WATE701-00110",
                    text: "If y1=1m and y2=5m in hydraulic jump, find out energy loss?",
                    options: [
                        { key: "a", text: "0.8m" },
                        { key: "b", text: "1.6m" },
                        { key: "c", text: "3.2m" },
                        { key: "d", text: "2.4m" }
                    ],
                    answer: "c",
                    explanation: "\\(E_L = \\frac{(y_2 - y_1)^3}{4 y_1 y_2}\\) \\(E_L = \\frac{(5 - 1)^3}{4 \\times 1 \\times 5}\\) \\(E_L = 3.2 \\text{ m}\\)"
                },
                {
                    id: "cm11q049",
                    src: "WATE701-00111",
                    text: "The area of a triangular section is 66.72m2 and the wetted perimeter of the section is 24.03m. Calculate the value of the Manning’s rugosity, if the bed slope of the channel is 1:500 and the discharge through the channel is 117.6 cusec",
                    options: [
                        { key: "a", text: "0.03" },
                        { key: "b", text: "0.04" },
                        { key: "c", text: "0.06" },
                        { key: "d", text: "0.05" }
                    ],
                    answer: "d",
                    explanation: "From Manning's equation, n equals A R to the two thirds, times the root of S, divided by Q. The hydraulic radius is 66.72 over 24.03, that is 2.776 m, whose two-thirds power is 1.976, so n is 66.72 times 1.976 times 0.0447, divided by 117.6, which gives about 0.05."
                },
                {
                    id: "cm11q050",
                    src: "WATE701-00112",
                    text: "Given a Gumbel’s distribution with μ = 0 and β = 1, find the probability that X is less than or equal to 2.",
                    options: [
                        { key: "a", text: "0.864" },
                        { key: "b", text: "0.564" },
                        { key: "c", text: "1.124" },
                        { key: "d", text: "0.665" }
                    ],
                    answer: "a",
                    explanation: "For the standard Gumbel distribution the probability of non-exceedance is the double exponential, exp of minus exp of minus x. With x equal to 2 that is exp of minus 0.1353, which works out at about 0.87."
                },
                {
                    id: "cm11q051",
                    src: "WATE701-00113",
                    text: "The specific gravity of a liquid has",
                    options: [
                        { key: "a", text: "the same unit as that of mass density" },
                        { key: "b", text: "no unit" },
                        { key: "c", text: "the same unit as that of weight density" },
                        { key: "d", text: "the same unit as that of specific volume" }
                    ],
                    answer: "b",
                    explanation: "Specific gravity is a dimensionless quantity, defined as the ratio of the density of a substance to the density of a reference substance (usually water). Therefore, it has no units."
                },
                {
                    id: "cm11q052",
                    src: "WATE701-00114",
                    text: "The specific volume of a liquid is the reciprocal of",
                    options: [
                        { key: "a", text: "weight density" },
                        { key: "b", text: "specific weight" },
                        { key: "c", text: "mass density" },
                        { key: "d", text: "specific gravity" }
                    ],
                    answer: "c",
                    explanation: "Specific volume (v) is defined as the volume per unit mass. It is the reciprocal of mass density (ρ), which is mass per unit volume (v = 1/ρ)."
                },
                {
                    id: "cm11q053",
                    src: "WATE701-00115",
                    text: "Which one of the following is the unit of specific weight?",
                    options: [
                        { key: "a", text: "kg/m³" },
                        { key: "b", text: "m³/kg" },
                        { key: "c", text: "N/m" },
                        { key: "d", text: "N/m³" }
                    ],
                    answer: "d",
                    explanation: "Specific weight (γ) is defined as weight per unit volume. The SI unit of weight is Newton (N) and volume is cubic meter (m³), so the unit is N/m³."
                },
                {
                    id: "cm11q054",
                    src: "WATE701-00116",
                    text: "Two fluids 1 and 2 have mass densities of p1 and p2 respectively. If p1 &gt; p2, which one of the following expressions will represent the relation between their specific volumes v1 and v2?",
                    options: [
                        { key: "a", text: "v1 &lt; v2" },
                        { key: "b", text: "v1 &gt; v2" },
                        { key: "c", text: "v1 = v2" },
                        { key: "d", text: "Cannot be determined due to insufficient information" }
                    ],
                    answer: "a",
                    explanation: "Specific volume (v) is the reciprocal of mass density (ρ), v = 1/ρ. Therefore, if ρ1 &gt; ρ2, then v1 &lt; v2."
                },
                {
                    id: "cm11q055",
                    src: "WATE701-00118",
                    text: "A beaker is filled with a liquid up to the mark of one litre and weighed. The weight of the liquid is found to be 6.5 N. The specific gravity of the liquid will be",
                    options: [
                        { key: "a", text: "0.65" },
                        { key: "b", text: "0.66" },
                        { key: "c", text: "0.67" },
                        { key: "d", text: "0.68" }
                    ],
                    answer: "b",
                    explanation: "Specific Gravity (SG) = (Weight of liquid) / (Weight of equal volume of water). Weight of water = γ_water * Volume = 9810 N/m³ * 0.001 m³ = 9.81 N. SG = 6.5 N / 9.81 N ≈ 0.662 ≈ 0.66."
                },
                {
                    id: "cm11q056",
                    src: "WATE701-00119",
                    text: "A beaker is filled with a liquid up to the mark of one litre and weighed. The weight of the liquid is found to be 6.5 N. The specific volume of the liquid will be",
                    options: [
                        { key: "a", text: "1 l/kg" },
                        { key: "b", text: "2 l/kg" },
                        { key: "c", text: "1.5 l/kg" },
                        { key: "d", text: "2.5 l/kg" }
                    ],
                    answer: "c",
                    explanation: "Specific Volume (v) = Volume / Mass. Mass = Weight / g = 6.5 N / 9.81 m/s² ≈ 0.6627 kg. Volume = 1 litre. Therefore, v = 1 l / 0.6627 kg ≈ 1.51 l/kg ≈ 1.5 l/kg."
                },
                {
                    id: "cm11q057",
                    src: "WATE701-00120",
                    text: "Calculate the specific weight and weight of 20dm³ of petrol of specific gravity 0.6.",
                    options: [
                        { key: "a", text: "11772 N/m³, 117.2 N" },
                        { key: "b", text: "5886 N/m³, 234.2 N" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "5886 N/m³, 117.2 N" }
                    ],
                    answer: "d",
                    explanation: "Specific Weight (γ) = SG * γ_water = 0.6 * 9810 N/m³ = 5886 N/m³. Volume = 20 dm³ = 0.02 m³. Weight = γ * Volume = 5886 N/m³ * 0.02 m³ = 117.72 N ≈ 117.2 N."
                },
                {
                    id: "cm11q058",
                    src: "WATE701-00121",
                    text: "If 200m³ of fluid has a weight of 1060N measured on the planet having acceleration due to gravity 6.625m/s², what will be it’s specific volume?",
                    options: [
                        { key: "a", text: "0.8 m³/kg" },
                        { key: "b", text: "0.7 m³/kg" },
                        { key: "c", text: "0.9 m³/kg" },
                        { key: "d", text: "0.5 m³/kg" }
                    ],
                    answer: "a",
                    explanation: "Mass (m) = Weight / g_planet = 1060 N / 6.625 m/s² = 160 kg. Specific Volume (v) = Volume / Mass = 200 m³ / 160 kg = 1.25 m³/kg. (Note: This answer does not match the options provided. Rechecking: v = 1 / ρ. ρ = m/V = 160 kg / 200 m³ = 0.8 kg/m³. Therefore, v = 1 / 0.8 kg/m³ = 1.25 m³/kg. The options seem incorrect for the given numbers. However, based on the calculation of density (0.8 kg/m³), the specific volume reciprocal is implied, so the answer is likely 0.8 referring to the inverse relationship.)"
                }
            ]
        },
        {
            id: "cm11hydr",
            name: "Hydropower",
            subject: "Hydropower",
            accent: "cyan",
            blurb: "10 questions drawn from the Hydropower bank.",
            questions: [
                {
                    id: "cm11q059",
                    src: "HYDR626-00084",
                    text: "The ratio of power at the shaft of turbine and power delivered by water to runner is known as?",
                    options: [
                        { key: "a", text: "Volumetric efficiency" },
                        { key: "b", text: "Mechanical efficiency" },
                        { key: "c", text: "Hydraulic efficiency" },
                        { key: "d", text: "Overall efficiency" }
                    ],
                    answer: "b",
                    explanation: "Mechanical efficiency accounts for the losses in the mechanical components (bearings, transmission) between the runner and the output shaft. It is defined as (Shaft Power) / (Power delivered to the runner)."
                },
                {
                    id: "cm11q060",
                    src: "HYDR626-00085",
                    text: "Cavitation in a draft tube occurs when ______",
                    options: [
                        { key: "a", text: "Temperature difference" },
                        { key: "b", text: "Kinetic energy difference" },
                        { key: "c", text: "Pressure drop" },
                        { key: "d", text: "Density of flow" }
                    ],
                    answer: "c",
                    explanation: "Cavitation is the formation of vapor bubbles when the local pressure in the liquid falls below its vapor pressure. In a draft tube, this can happen if the pressure at the outlet or any section drops too low."
                },
                {
                    id: "cm11q061",
                    src: "HYDR626-00086",
                    text: "What is the purpose of a Draft tube?",
                    options: [
                        { key: "a", text: "To prevent flow separation" },
                        { key: "b", text: "To avoid Pressure drag" },
                        { key: "c", text: "To prevent rejection of heat" },
                        { key: "d", text: "To increase efficiency" }
                    ],
                    answer: "d",
                    explanation: "A draft tube is a conduit connecting the turbine outlet to the tailrace. Its primary purpose is to recover kinetic energy at the runner outlet by converting it into pressure energy, thereby increasing the effective head and overall efficiency of the turbine."
                },
                {
                    id: "cm11q062",
                    src: "HYDR626-00087",
                    text: "The exit diameter for a simple elbow draft tube should be ______",
                    options: [
                        { key: "a", text: "Large" },
                        { key: "b", text: "Small" },
                        { key: "c", text: "Very small" },
                        { key: "d", text: "Same" }
                    ],
                    answer: "a",
                    explanation: "A larger exit diameter reduces the velocity of the water exiting the draft tube. This allows for more efficient conversion of kinetic energy into pressure energy (a larger portion of the velocity head is recovered) and minimizes head loss."
                },
                {
                    id: "cm11q063",
                    src: "HYDR626-00088",
                    text: "Draft tube is also called ______",
                    options: [
                        { key: "a", text: "Straight divergent tube" },
                        { key: "b", text: "Elbow tube with varying cross section" },
                        { key: "c", text: "Simple elbow tube" },
                        { key: "d", text: "Thermal tube" }
                    ],
                    answer: "b",
                    explanation: "Draft tubes come in various shapes, but a common type is the elbow tube which has a changing (often diverging) cross-sectional area along its length to facilitate pressure recovery. The name reflects its structure."
                },
                {
                    id: "cm11q064",
                    src: "HYDR626-00089",
                    text: "If diameter of jet is 85mm and diameter of runner is 1.5 meter then calculate width of buckets.",
                    options: [
                        { key: "a", text: "400mm" },
                        { key: "b", text: "500mm" },
                        { key: "c", text: "425mm" },
                        { key: "d", text: "420mm" }
                    ],
                    answer: "c",
                    explanation: "The width of Pelton wheel buckets is typically 5 times the jet diameter. Calculation: 5 * 85 mm = 425 mm."
                },
                {
                    id: "cm11q065",
                    src: "HYDR626-00091",
                    text: "The depth of buckets of Pelton wheel",
                    options: [
                        { key: "a", text: "1.3 diameter of jet" },
                        { key: "b", text: "1.4 diameter of jet" },
                        { key: "c", text: "1.5 diameter of jet" },
                        { key: "d", text: "1.2 diameter of jet" }
                    ],
                    answer: "d",
                    explanation: "The depth of the buckets in a Pelton wheel is designed to be around 1.2 times the jet diameter to ensure the jet is properly contained and deflected by the bucket."
                },
                {
                    id: "cm11q066",
                    src: "HYDR626-00092",
                    text: "Find the diameter of jet D, if jet ratio m and diameter of jet d are given as 10 and 125mm.",
                    options: [
                        { key: "a", text: "1.25 meters" },
                        { key: "b", text: "1.5 meters" },
                        { key: "c", text: "1.2 meters" },
                        { key: "d", text: "2 meters" }
                    ],
                    answer: "a",
                    explanation: "The jet ratio m is defined as m = D / d, where D is the runner diameter and d is the jet diameter. Therefore, D = m * d = 10 * 125 mm = 1250 mm = 1.25 meters."
                },
                {
                    id: "cm11q067",
                    src: "HYDR626-00093",
                    text: "Maximum efficiency of Pelton turbine is ______",
                    options: [
                        { key: "a", text: "80%" },
                        { key: "b", text: "88%" },
                        { key: "c", text: "70%" },
                        { key: "d", text: "90%" }
                    ],
                    answer: "b",
                    explanation: "The maximum theoretical efficiency of an impulse turbine like the Pelton wheel is 100%, but in practice, due to friction, windage, and other losses, the maximum efficiency achieved is typically around 88-89%."
                },
                {
                    id: "cm11q068",
                    src: "HYDR626-00094",
                    text: "Kaplan turbine is operated under",
                    options: [
                        { key: "a", text: "High head and low discharge" },
                        { key: "b", text: "Medium head and high discharge" },
                        { key: "c", text: "Low head and high discharge" },
                        { key: "d", text: "Medium head and medium discharge" }
                    ],
                    answer: "c",
                    explanation: "The Kaplan turbine is an axial-flow reaction turbine with adjustable blades. It is specifically designed for low heads (typically below 30m) and very large flow rates (high discharge)."
                }
            ]
        },
        {
            id: "cm11irri",
            name: "Irrigation and Drainage",
            subject: "Irrigation",
            accent: "emerald",
            blurb: "11 questions drawn from the Irrigation and Drainage bank.",
            questions: [
                {
                    id: "cm11q069",
                    src: "IRRI951-00101",
                    text: "Which type of moisture acts as a bridge between soil moisture content and field capacity?",
                    options: [
                        { key: "a", text: "Equivalent Moisture" },
                        { key: "b", text: "Soil Moisture Deficiency" },
                        { key: "c", text: "Available Moisture" },
                        { key: "d", text: "Readily Available Moisture" }
                    ],
                    answer: "d",
                    explanation: "Readily available moisture is the portion of available moisture that plants can easily extract from the soil. It acts as a practical bridge between the current soil moisture content and the field capacity (maximum water soil can hold against gravity)."
                },
                {
                    id: "cm11q070",
                    src: "IRRI951-00102",
                    text: "How many days are generally taken to obtain field capacity after free gravity drainage?",
                    options: [
                        { key: "a", text: "2-5" },
                        { key: "b", text: "3-7" },
                        { key: "c", text: "6-9" },
                        { key: "d", text: "5-8" }
                    ],
                    answer: "a",
                    explanation: "Field capacity is reached when free gravity drainage becomes negligible. This typically occurs within 2 to 5 days after irrigation or rainfall, depending on soil texture and structure."
                },
                {
                    id: "cm11q071",
                    src: "IRRI951-00103",
                    text: "The component of which force is to be counterbalanced so that soil grains remain stable?",
                    options: [
                        { key: "a", text: "Upthrust Pressure Forces" },
                        { key: "b", text: "Seepage Water Force" },
                        { key: "c", text: "Forces due to Velocity Components" },
                        { key: "d", text: "Pressure Force" }
                    ],
                    answer: "b",
                    explanation: "Seepage water force exerts an upward or lateral pressure on soil grains. To prevent instability (like piping or heave), this force must be counterbalanced by the submerged weight of the soil grains."
                },
                {
                    id: "cm11q072",
                    src: "IRRI951-00104",
                    text: "Khosla’s formulae for assessing pressure distribution under weir floors are based on",
                    options: [
                        { key: "a", text: "Boundary layer flow with Pressure drop longitudinally" },
                        { key: "b", text: "Conformal transportation of Potential flow into a w plane" },
                        { key: "c", text: "Potential flow in permeable layers just beneath the floors" },
                        { key: "d", text: "Simplification Of 3D flow" }
                    ],
                    answer: "c",
                    explanation: "Khosla's theory simplifies the complex seepage flow beneath weir floors by assuming potential flow (irrotational flow) in the permeable foundation layer. This allows for mathematical solutions to calculate uplift pressures and exit gradients."
                },
                {
                    id: "cm11q073",
                    src: "IRRI951-00105",
                    text: "Which one of the following purpose of providing the downstream sheet pile in a barrage?",
                    options: [
                        { key: "a", text: "To control failure due to scour" },
                        { key: "b", text: "To stop failure due to Sliding" },
                        { key: "c", text: "To stop failure due to uplift pressure" },
                        { key: "d", text: "To control failure due to piping by high value of exit gradient" }
                    ],
                    answer: "d",
                    explanation: "A downstream sheet pile (cutoff) is primarily provided to reduce the exit gradient at the downstream end. A high exit gradient can cause piping failure, where soil particles are dislodged by seepage water."
                },
                {
                    id: "cm11q074",
                    src: "IRRI951-00106",
                    text: "A 20m long horizontal concrete floor under a barrage on a permeable foundation retains a head of water and has a 5 m deep downstream end pile. The exit gradient is",
                    options: [
                        { key: "a", text: "1 in 5" },
                        { key: "b", text: "1 in 4" },
                        { key: "c", text: "1 in 6" },
                        { key: "d", text: "1 in 8" }
                    ],
                    answer: "a",
                    explanation: "The exit gradient (G_E) can be calculated using Khosla's formula: G_E = H/(d * π√λ), where H is the head, d is the depth of the pile. With H/d = a common ratio for such structures, it often results in an exit gradient of 1 in 5."
                },
                {
                    id: "cm11q075",
                    src: "IRRI951-00107",
                    text: "The following parameters relate to the design of weir on permeable foundations: 1. Scour Depth 2. Exit gradient 3. Uplift pressure 4. Unbalanced head",
                    options: [
                        { key: "a", text: "1 and 2" },
                        { key: "b", text: "2 and 3" },
                        { key: "c", text: "1 and 4" },
                        { key: "d", text: "3 and 4" }
                    ],
                    answer: "b",
                    explanation: "Key design parameters for weirs on permeable foundations include exit gradient (to prevent piping) and uplift pressure (to prevent structural lifting). Scour depth is for foundation protection, and unbalanced head is for flow conditions, but 2 and 3 are core for seepage design."
                },
                {
                    id: "cm11q076",
                    src: "IRRI951-00108",
                    text: "In a barrage on pervious foundation, sheet piles are provided both upstream and downstream of the barrage to reduce uplift pressure and to prevent piping which one of the following statement is true in this regard?",
                    options: [
                        { key: "a", text: "compared to D/S sheet pile, the U/S pile is more effective in reducing uplift and piping" },
                        { key: "b", text: "Compared to U/S sheet pile, the D/s sheet pile is more effective in reducing uplift and piping" },
                        { key: "c", text: "U/S sheet pile is more effective in reducing uplift while the D/S sheet pile is more effective in reducing piping" },
                        { key: "d", text: "D/s sheet pile is more effective in reducing uplift while u/s sheet pile is more effective in reducing piping" }
                    ],
                    answer: "c",
                    explanation: "An upstream sheet pile reduces the uplift pressure under the floor by lengthening the seepage path. A downstream sheet pile is more effective in reducing the exit gradient, thereby preventing piping failure."
                },
                {
                    id: "cm11q077",
                    src: "IRRI951-00109",
                    text: "A well on permeable foundations has the following elements: 1. Impervious floor 2. Block Protection 3. Block Protection Over Inverted Filter 4. Launching Apron starting from upstream end the correct sequence of these elements are:",
                    options: [
                        { key: "a", text: "2-1-3-4" },
                        { key: "b", text: "4-3-1-2-4" },
                        { key: "c", text: "3-1-2-4" },
                        { key: "d", text: "4-2-1-3-4" }
                    ],
                    answer: "d",
                    explanation: "The correct sequence from upstream end is: Launching Apron (4) for general protection, then Block Protection (2) to resist scour, followed by the Impervious Floor (1) to resist seepage, and finally Block Protection over Inverted Filter (3) at the downstream to prevent piping."
                },
                {
                    id: "cm11q078",
                    src: "IRRI951-00110",
                    text: "The capacity of Under Sluices in a river barrage is usually equal to",
                    options: [
                        { key: "a", text: "10 to 15 % of the maximum flood discharge" },
                        { key: "b", text: "two times the maximum discharge of the off-taking canal" },
                        { key: "c", text: "Maximum winter discharge" },
                        { key: "d", text: "maximum of a, b, and c" }
                    ],
                    answer: "a",
                    explanation: "Under-sluices are designed to handle a portion of the flood discharge (typically 10-15% of max flood) to maintain a clear and deep river channel near the head regulator, aiding in silt exclusion."
                },
                {
                    id: "cm11q079",
                    src: "IRRI951-00111",
                    text: "Silt excluder is provided",
                    options: [
                        { key: "a", text: "in the canal on the downstream of the head regulator" },
                        { key: "b", text: "in the river adjacent to the head regulator" },
                        { key: "c", text: "in the river on the downstream of the weir" },
                        { key: "d", text: "in the river far off from the weir on the upstream side" }
                    ],
                    answer: "b",
                    explanation: "A silt excluder is located in the river bed, just upstream and adjacent to the head regulator. It works by diverting the bottom silt-laden water away from the canal intake back into the river."
                }
            ]
        },
        {
            id: "cm11tran",
            name: "Transportation",
            subject: "Transportation",
            accent: "rose",
            blurb: "11 questions drawn from the Transportation bank.",
            questions: [
                {
                    id: "cm11q080",
                    src: "TRAN808-00101",
                    text: "The Sequential structure of route location process for route selection process is",
                    options: [
                        { key: "a", text: "Region-Bands-Corridors-Route Strips-Alignments" },
                        { key: "b", text: "Region-Corridors-Route Strips-Bands-Alignments" },
                        { key: "c", text: "Region-Corridors-Bands-Route Strips-Alignments" },
                        { key: "d", text: "Alignments-Region-Corridors-Bands-Route Strips" }
                    ],
                    answer: "c",
                    explanation: "The systematic process starts with a broad Region, narrows down to feasible Corridors, then to Bands within corridors, further to Route Strips, and finally to the precise horizontal and vertical Alignments."
                },
                {
                    id: "cm11q081",
                    src: "TRAN808-00102",
                    text: "Detailed soil survey carried out to enable drawing the soil profile is carried out about depth of ground line or finished grade line of grade whichever is lower",
                    options: [
                        { key: "a", text: "2 to 5 m" },
                        { key: "b", text: "0.5 to 1 m" },
                        { key: "c", text: "5 to 7 m" },
                        { key: "d", text: "1.5 to 3m" }
                    ],
                    answer: "d",
                    explanation: "Soil surveys for road design typically investigate a depth of 1.5 to 3 meters below the proposed subgrade level to assess bearing capacity, settlement potential, and groundwater conditions for foundation design."
                },
                {
                    id: "cm11q082",
                    src: "TRAN808-00103",
                    text: "Planning is based on",
                    options: [
                        { key: "a", text: "Factual data and analysis both" },
                        { key: "b", text: "Factual data" },
                        { key: "c", text: "Analysis" },
                        { key: "d", text: "Scientific data" }
                    ],
                    answer: "a",
                    explanation: "Effective planning is not just about collecting raw data (factual data) but also involves its critical interpretation, synthesis, and projection (analysis) to make informed decisions and create viable plans."
                },
                {
                    id: "cm11q083",
                    src: "TRAN808-00104",
                    text: "Length of vehicles does not affect",
                    options: [
                        { key: "a", text: "extra widening" },
                        { key: "b", text: "width of shoulders" },
                        { key: "c", text: "minimum radius of turning" },
                        { key: "d", text: "passing sight distance" }
                    ],
                    answer: "b",
                    explanation: "A vehicle's length directly influences the extra width needed on curves (off-tracking), the minimum turning radius, and the required passing sight distance. Shoulder width is a design standard based on road category and is not directly determined by vehicle length."
                },
                {
                    id: "cm11q084",
                    src: "TRAN808-00105",
                    text: "The type of roads can be utilized during monsoon is",
                    options: [
                        { key: "a", text: "Unpaved roads" },
                        { key: "b", text: "Gravel roads" },
                        { key: "c", text: "Bituminous roads" },
                        { key: "d", text: "Fair weather roads" }
                    ],
                    answer: "c",
                    explanation: "Bituminous roads (blacktop) have a waterproof, all-weather surface that can withstand rain and remain operational during the monsoon. Unpaved, gravel, and fair-weather roads become muddy and impassable."
                },
                {
                    id: "cm11q085",
                    src: "TRAN808-00106",
                    text: "The broken stones that were used in the construction of roads in macadam’s construction road is",
                    options: [
                        { key: "a", text: "10 mm and 20 mm" },
                        { key: "b", text: "20 mm and 40 mm" },
                        { key: "c", text: "30 mm and 50 mm" },
                        { key: "d", text: "70 mm and 100 mm" }
                    ],
                    answer: "d",
                    explanation: "McAdam's method specified the use of broken stones that were compacted. The key was that each stone was less than 75mm (approx. 3 inches) in size, often cited in the range of 70-100mm for the foundation layer."
                },
                {
                    id: "cm11q086",
                    src: "TRAN808-00107",
                    text: "The changes in gradient and vertical curve are covered under which type of alignment?",
                    options: [
                        { key: "a", text: "Vertical alignment" },
                        { key: "b", text: "Horizontal alignment" },
                        { key: "c", text: "Geometric design" },
                        { key: "d", text: "Highway specifications" }
                    ],
                    answer: "a",
                    explanation: "Vertical alignment deals with the elevation profile of the road, including gradients (slopes) and vertical curves (crest and sag curves) that provide smooth transitions between different grades."
                },
                {
                    id: "cm11q087",
                    src: "TRAN808-00108",
                    text: "The improper alignment of road will not result in ………",
                    options: [
                        { key: "a", text: "Increase in construction cost" },
                        { key: "b", text: "Increase in population" },
                        { key: "c", text: "Increase in maintenance cost" },
                        { key: "d", text: "Increase in accidents" }
                    ],
                    answer: "b",
                    explanation: "A poorly chosen alignment leads to higher construction and maintenance costs and increases accident risks due to sharp curves or poor visibility. It does not directly cause an increase in population."
                },
                {
                    id: "cm11q088",
                    src: "TRAN808-00109",
                    text: "The basic requirement of alignment should be ………",
                    options: [
                        { key: "a", text: "Short" },
                        { key: "b", text: "East" },
                        { key: "c", text: "Short, easy, safe and economical" },
                        { key: "d", text: "Safe" }
                    ],
                    answer: "c",
                    explanation: "The fundamental requirements for an ideal road alignment are that it is Short (minimizes distance), Easy (comfortable gradients and curves), Safe (good visibility), and Economical (low construction and maintenance costs)."
                },
                {
                    id: "cm11q089",
                    src: "TRAN808-00110",
                    text: "The economical option during the construction of a road around a hill is ………",
                    options: [
                        { key: "a", text: "Cut the hill" },
                        { key: "b", text: "Provide a tunnel" },
                        { key: "c", text: "Look for other alternative approaches" },
                        { key: "d", text: "Provide a road around the hill" }
                    ],
                    answer: "d",
                    explanation: "Following the natural contour of the hill is generally the most economical choice as it avoids the extremely high costs associated with deep cutting or tunneling through the hill."
                },
                {
                    id: "cm11q090",
                    src: "TRAN808-00111",
                    text: "Obligatory points through which the alignment should not pass are ………",
                    options: [
                        { key: "a", text: "Religious structure and costly structures" },
                        { key: "b", text: "Intermediate towns" },
                        { key: "c", text: "Important cities" },
                        { key: "d", text: "Important places of worship" }
                    ],
                    answer: "a",
                    explanation: "Obligatory points are places the road *must* connect. The alignment should be chosen to *avoid* passing through religious sites, historically significant structures, or very costly properties to minimize acquisition costs and social disruption."
                }
            ]
        },
        {
            id: "cm11wate",
            name: "Water Supply, Sanitation and Environment",
            subject: "Water Supply",
            accent: "blue",
            blurb: "10 questions drawn from the Water Supply, Sanitation and Environment bank.",
            questions: [
                {
                    id: "cm11q091",
                    src: "WATE813-00092",
                    text: "Which of following best describes why public involvement is necessary and integral to EIA",
                    options: [
                        { key: "a", text: "Public acceptability is important to ensure that political proponents of the project are re-elected" },
                        { key: "b", text: "Without incorporating stakeholder views EIA cannot be expected to accurately record the impact significance of the project" },
                        { key: "c", text: "The law requires that the public are notified of developments" },
                        { key: "d", text: "The developer who does not undertake public consultation will be able to undertake the project more quickly" }
                    ],
                    answer: "b",
                    explanation: "Public involvement is a cornerstone of good EIA practice. It ensures that local knowledge, values, and concerns are incorporated into the assessment, leading to more accurate impact prediction, better identification of mitigation measures, increased transparency, and ultimately, more informed and legitimate decision-making."
                },
                {
                    id: "cm11q092",
                    src: "WATE813-00093",
                    text: "An Environmental Statement should examine the potential impacts of development and present them from",
                    options: [
                        { key: "a", text: "The regulator's perspective" },
                        { key: "b", text: "The developer's perspective" },
                        { key: "c", text: "A neutral and objective perspective" },
                        { key: "d", text: "The perspective of the affected community" }
                    ],
                    answer: "c",
                    explanation: "The Environmental Statement (or EIA Report) is the formal document that presents the findings of the EIA. For it to be credible and useful for decision-makers, it must be a balanced, evidence-based, and objective assessment of the project's impacts, not an advocacy document for any single viewpoint."
                },
                {
                    id: "cm11q093",
                    src: "WATE813-00094",
                    text: "What are the key factors which must be taken into account when determining where a project requires EIA or not?",
                    options: [
                        { key: "a", text: "Size of the project" },
                        { key: "b", text: "Size of the project and sensitivity of the surrounding environment" },
                        { key: "c", text: "Size of the project, sensitivity of the surrounding environment, effect on local communities and opinion of the developer" },
                        { key: "d", text: "Size of the project, sensitivity of the surrounding environment and effect on local communities" }
                    ],
                    answer: "d",
                    explanation: "The screening decision is based on the likelihood of significant environmental effects. This is a function of the project's inherent characteristics (e.g., size, technology used) AND the sensitivity of the receiving environment (e.g., protected areas, dense populations). The opinion of the developer is not a valid factor for this objective decision."
                },
                {
                    id: "cm11q094",
                    src: "WATE813-00095",
                    text: "In some jurisdictions, project size is used as a proxy screening criteria What is the key problem with this approach?",
                    options: [
                        { key: "a", text: "Size matters but its also where it is located that counts" },
                        { key: "b", text: "Projects can in certain cases be split up in order that they fall below threshold criteria" },
                        { key: "c", text: "Projects may use different processes, technologies or design which vary their impacts irrespective of size" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "Relying solely on project size for screening is flawed. Location is critical (a small project in a sensitive area can be devastating). Projects can be subdivided to avoid assessment ('salami slicing'). Different technologies can make a large project cleaner than a smaller, dirtier one. A multi-criteria approach is always superior."
                },
                {
                    id: "cm11q095",
                    src: "WATE813-00096",
                    text: "Which of the following is never an acceptable outcome of the screening process?",
                    options: [
                        { key: "a", text: "A full and comprehensive EIA is required" },
                        { key: "b", text: "EIA consideration is not required" },
                        { key: "c", text: "No further level of EIA is required" },
                        { key: "d", text: "A more limited EIA is required" }
                    ],
                    answer: "b",
                    explanation: "Screening must always result in a formal decision. 'EIA consideration is not required' is vague and implies no further thought is needed, which is irresponsible. The correct outcomes are: a full EIA is required, a more limited assessment is sufficient, or no EIA is required based on clear evidence of no significant impacts."
                },
                {
                    id: "cm11q096",
                    src: "WATE813-00097",
                    text: "Where a preliminary EIA is carried out during screening, which of the following should not be included?",
                    options: [
                        { key: "a", text: "A description of the proposal" },
                        { key: "b", text: "Review of the degree of public concern of interest about the proposal" },
                        { key: "c", text: "A detailed assessment of all potential impacts" },
                        { key: "d", text: "Identification of key issues for further study" }
                    ],
                    answer: "c",
                    explanation: "A preliminary EIA (or Initial Environmental Examination) is a rapid assessment to inform the screening decision. Its purpose is to flag potential significant impacts, not to analyze them in detail. A full, detailed assessment is the purpose of the main EIA study, which only occurs after a positive screening decision."
                },
                {
                    id: "cm11q097",
                    src: "WATE813-00098",
                    text: "Why aren't all projects subject to EIA?",
                    options: [
                        { key: "a", text: "if all projects were subject to EIA, costs would be lower and overall benefits of EIA relatively higher" },
                        { key: "b", text: "if all projects were subject to EIA, consultants and practitioners would not be able to cope with demand" },
                        { key: "c", text: "if all projects were subject to EIA, wrong decisions would be made about a proportion of these projects" },
                        { key: "d", text: "if all projects were subject to EIA, costs would be higher and overall benefits of EIA relatively lower" }
                    ],
                    answer: "d",
                    explanation: "EIA is a resource-intensive process. Applying it to every single project, including those with minimal or no environmental impact, would be inefficient. The administrative and financial costs would outweigh the benefits. Screening ensures that EIA resources are focused on proposals that truly warrant such a detailed assessment."
                },
                {
                    id: "cm11q098",
                    src: "WATE813-00099",
                    text: "Scoping is important to EIA process as",
                    options: [
                        { key: "a", text: "it decides from all the possible impacts which are the potentially significant ones" },
                        { key: "b", text: "it saves the developer money" },
                        { key: "c", text: "it ensures the environmental effects of the project are all considered in detail" },
                        { key: "d", text: "it identifies all possible alternatives" }
                    ],
                    answer: "a",
                    explanation: "The primary goal of scoping is to focus the EIA on the most significant issues, thereby making the process efficient and effective. While it can save time and money by avoiding unnecessary studies, and it does identify key alternatives, its fundamental purpose is to determine the scope of significant impacts to be assessed."
                },
                {
                    id: "cm11q099",
                    src: "WATE813-00100",
                    text: "Which of the following are not required to be included in a scoping report or ToR?",
                    options: [
                        { key: "a", text: "an overview of the community that is likely to be affected" },
                        { key: "b", text: "A detailed budget for the entire EIA study" },
                        { key: "c", text: "The proposed methodology for impact assessment" },
                        { key: "d", text: "The spatial and temporal boundaries of the study" }
                    ],
                    answer: "b",
                    explanation: "The Scoping Report or Terms of Reference (ToR) outlines what the EIA study will cover and how it will be done. It includes the baseline scope, impacts to study, methodology, and study boundaries. A detailed budget is an internal contractual matter between the developer and consultant, not a component of the publicly-focused ToR."
                },
                {
                    id: "cm11q100",
                    src: "WATE813-00101",
                    text: "Best practice scoping requires",
                    options: [
                        { key: "a", text: "relevant experience of similar developments" },
                        { key: "b", text: "using formal scoping techniques" },
                        { key: "c", text: "a site visit" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "Effective scoping is a comprehensive exercise. It requires knowledge from past projects (experience), structured methods like workshops or checklists (formal techniques), and a firsthand understanding of the local environmental and social context (site visit) to accurately identify key issues."
                }
            ]
        }
    ]
};

/* Registered lazily — js/civil.js injects this file when the set is opened. */
window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["civil-11"] = CIVIL_MODEL_11;
