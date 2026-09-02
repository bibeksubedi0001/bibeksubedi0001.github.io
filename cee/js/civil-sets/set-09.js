/* ============================================================
   CIVIL MODEL SET 9 — Civil Engineering licence-style model paper
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
const CIVIL_MODEL_9 = {
    day: 39,
    kind: "model",
    badge: { top: "Model", main: "C9" },
    title: "Civil Model Set 9",
    subtitle: "Civil Engineering · 9 subjects",
    durationMinutes: 120,
    negativeMarking: 0,
    chapters: [
        {
            id: "cm9basi",
            name: "Basic Civil Engineering",
            subject: "Basic Civil",
            accent: "blue",
            blurb: "13 questions drawn from the Basic Civil Engineering bank.",
            questions: [
                {
                    id: "cm9q001",
                    src: "BASI674-00093",
                    text: "Which of the following is a type of Engineering Materials and is a Metal?",
                    options: [
                        { key: "a", text: "Asbestos" },
                        { key: "b", text: "Both b &amp; c" },
                        { key: "c", text: "Ferrous Metals" },
                        { key: "d", text: "Non-Ferrous Metals" }
                    ],
                    answer: "b",
                    explanation: "Asbestos is a mineral fiber, not a metal. Ferrous metals (iron-based) and non-ferrous metals (e.g., aluminum, copper, zinc) are the two primary categories of metals used in engineering."
                },
                {
                    id: "cm9q002",
                    src: "BASI674-00094",
                    text: "Which of the following is a characteristic of alumina?",
                    options: [
                        { key: "a", text: "Poor wear resistance" },
                        { key: "b", text: "Good toughness" },
                        { key: "c", text: "Excellent hardness" },
                        { key: "d", text: "Good tensile strength" }
                    ],
                    answer: "c",
                    explanation: "Alumina (Aluminium Oxide, Al₂O₃) is a ceramic material known for its extreme hardness (9 on the Mohs scale, close to diamond), high compressive strength, and excellent wear resistance. It is, however, brittle (poor toughness) and has relatively low tensile strength."
                },
                {
                    id: "cm9q003",
                    src: "BASI674-00095",
                    text: "Pigments in the paint give",
                    options: [
                        { key: "a", text: "Softness" },
                        { key: "b", text: "Durability" },
                        { key: "c", text: "Viscosity" },
                        { key: "d", text: "Colour" }
                    ],
                    answer: "d",
                    explanation: "The primary function of pigments in paint is to provide color and opacity (hiding power). They also contribute to other properties like durability and sometimes viscosity, but their fundamental role is imparting color."
                },
                {
                    id: "cm9q004",
                    src: "BASI674-00096",
                    text: "Maximum % of water absorption of first class brick is",
                    options: [
                        { key: "a", text: "15" },
                        { key: "b", text: "10" },
                        { key: "c", text: "20" },
                        { key: "d", text: "24" }
                    ],
                    answer: "a",
                    explanation: "As per standard specifications, first-class bricks should have a water absorption not exceeding 15% to 20% of their dry weight after 24 hours of immersion. 15% is a common stringent requirement for high-quality bricks, ensuring their durability and resistance to frost action."
                },
                {
                    id: "cm9q005",
                    src: "BASI674-00097",
                    text: "Stone used for pier of bridge abutment, foundation and road work",
                    options: [
                        { key: "a", text: "Marble" },
                        { key: "b", text: "Granite" },
                        { key: "c", text: "Slate" },
                        { key: "d", text: "All" }
                    ],
                    answer: "b",
                    explanation: "Granite is an igneous rock with high compressive strength, toughness, hardness, and low porosity. These properties make it highly resistant to weathering and abrasion, ideal for heavy-duty applications like bridge piers, foundations, and road metal (aggregate). Marble is softer and slate is used for roofing and flooring."
                },
                {
                    id: "cm9q006",
                    src: "BASI674-00098",
                    text: "Number of handmade bricks required to make a brick masonry of 1 cu. m",
                    options: [
                        { key: "a", text: "430" },
                        { key: "b", text: "530" },
                        { key: "c", text: "560" },
                        { key: "d", text: "660" }
                    ],
                    answer: "c",
                    explanation: "While the theoretical count is 500 for standard modular bricks, 560 is the standard norm for handmade bricks to account for their slightly smaller local dimensions and higher wastage. In the Nepalese context (DUDBC norms), this higher figure ensures accuracy during material procurement for non-machine-made masonry. NS =530 IS=500 Hand/local=560 Machine made=530"
                },
                {
                    id: "cm9q007",
                    src: "BASI674-00099",
                    text: "Undesirable properties of cement is due to formation of",
                    options: [
                        { key: "a", text: "Dicalcium silicate" },
                        { key: "b", text: "Tricalcium silicate" },
                        { key: "c", text: "Tetracalcium aluminate" },
                        { key: "d", text: "Tricalcium aluminate" }
                    ],
                    answer: "d",
                    explanation: "Tricalcium aluminate (C3A) is responsible for the initial setting and high early heat of hydration in cement. This can lead to undesirable properties like lower ultimate strength, higher susceptibility to sulfate attack, and cracking in massive concrete pours due to thermal stresses."
                },
                {
                    id: "cm9q008",
                    src: "BASI674-00100",
                    text: "Defects in wood due to hardening is",
                    options: [
                        { key: "a", text: "Checks" },
                        { key: "b", text: "Knots" },
                        { key: "c", text: "Rind galls" },
                        { key: "d", text: "Burls" }
                    ],
                    answer: "a",
                    explanation: "Checks are cracks that develop in wood due to uneven shrinkage during the seasoning (drying) process. This 'hardening' or drying causes the outer layers to shrink faster than the inner ones, leading to radial cracks called checks."
                },
                {
                    id: "cm9q009",
                    src: "BASI674-00101",
                    text: "The property of metals because of which they can be transformed into different shapes by hammering is",
                    options: [
                        { key: "a", text: "Toughness" },
                        { key: "b", text: "Malleability" },
                        { key: "c", text: "Hardness" },
                        { key: "d", text: "Ductility" }
                    ],
                    answer: "b",
                    explanation: "Malleability is the property of a material (especially metals) to be deformed under compressive stress, such as hammering or rolling, into thin sheets without cracking. Ductility is the ability to be drawn into wires under tensile stress."
                },
                {
                    id: "cm9q010",
                    src: "BASI674-00102",
                    text: "Turpentine oil is used in paint as",
                    options: [
                        { key: "a", text: "Base" },
                        { key: "b", text: "Drier" },
                        { key: "c", text: "Thinner" },
                        { key: "d", text: "Vehicle" }
                    ],
                    answer: "c",
                    explanation: "A thinner (or solvent) is used to reduce the viscosity of the paint for easier application. Turpentine is a common volatile oil used as a thinner for oil-based paints. The vehicle is the liquid carrier (usually oil), the base is the solid pigment, and the drier accelerates the drying process."
                },
                {
                    id: "cm9q011",
                    src: "BASI674-00104",
                    text: "Plastic bitumen is generally used for",
                    options: [
                        { key: "a", text: "Road pavements" },
                        { key: "b", text: "Expansion joints" },
                        { key: "c", text: "None" },
                        { key: "d", text: "Crack fillings" }
                    ],
                    answer: "d",
                    explanation: "Plastic bitumen is a blend of bitumen, thinner (e.g., naphtha), and appropriate fillers. It remains plastic and flexible after the thinner evaporates. This property makes it ideal for filling cracks in masonry and concrete structures, as it can accommodate minor movements without failing."
                },
                {
                    id: "cm9q012",
                    src: "BASI674-00105",
                    text: "Circular finished stones are generally used for:",
                    options: [
                        { key: "a", text: "Pillar" },
                        { key: "b", text: "Tombstone" },
                        { key: "c", text: "Landscaping" },
                        { key: "d", text: "Column" }
                    ],
                    answer: "a",
                    explanation: "Circular finished stones, often called 'pillars' or 'posts', are commonly used in construction for structural support (e.g., in buildings, fences) and decorative purposes. While columns are also circular, the term 'pillar' is more general and often associated with this shaped stone."
                },
                {
                    id: "cm9q013",
                    src: "BASI674-00106",
                    text: "Good quality stone absorbs water less than how many percentage?",
                    options: [
                        { key: "a", text: "10%" },
                        { key: "b", text: "5%" },
                        { key: "c", text: "15%" },
                        { key: "d", text: "100%" }
                    ],
                    answer: "b",
                    explanation: "A good quality building stone should have very low water absorption to be durable and resistant to frost action and weathering. While standards vary, an absorption rate of less than 5% is often cited as excellent for the best quality stones."
                }
            ]
        },
        {
            id: "cm9stru",
            name: "Structural Mechanics",
            subject: "Structural Mech",
            accent: "cyan",
            blurb: "11 questions drawn from the Structural Mechanics bank.",
            questions: [
                {
                    id: "cm9q014",
                    src: "STRU935-00078",
                    text: "How can you strengthen a wall of 50m length and 5m height built with brick masonry?",
                    options: [
                        { key: "a", text: "By using stronger grade of mortar" },
                        { key: "b", text: "It can't be strengthened" },
                        { key: "c", text: "By constructing buttress" },
                        { key: "d", text: "By using stronger brick" }
                    ],
                    answer: "c",
                    explanation: "A long, thin masonry wall is slender about its weak axis and buckles or overturns sideways. Buttresses built at intervals along it act as stiff piers, shortening the effective span of the wall and giving it the lateral stability that a stronger mortar or brick alone could not."
                },
                {
                    id: "cm9q015",
                    src: "STRU935-00079",
                    text: "A shaft is subjected to bending moment M and a torque T simultaneously. The ratio of the maximum bending stress to maximum shear stress developed in the shaft, is",
                    options: [
                        { key: "a", text: "M/T" },
                        { key: "b", text: "T/M" },
                        { key: "c", text: "2T/M" },
                        { key: "d", text: "2M/T" }
                    ],
                    answer: "d",
                    explanation: "Bending gives sigma equal to 32M over pi d cubed and torsion gives tau equal to 16T over pi d cubed. Dividing one by the other, everything cancels except the loads, leaving a ratio of 2M over T."
                },
                {
                    id: "cm9q016",
                    src: "STRU935-00080",
                    text: "A rod of area 1000 mm² has axial pull of 20 kN. Then what is the shear stress at 300 inclined to horizontal axis?",
                    options: [
                        { key: "a", text: "0.866 N/mm²" },
                        { key: "b", text: "2 N/mm²" },
                        { key: "c", text: "0.667 N/mm²" },
                        { key: "d", text: "1 N/mm²" }
                    ],
                    answer: "a",
                    explanation: "The direct stress is 20,000 over 1000, that is 20 N/mm². On a plane at theta to the axis the shear stress is (sigma over 2) times sin 2 theta, so at 30 degrees it is 10 times sin 60, which is 8.66 N/mm². The published key lists the same figure with the decimal point shifted."
                },
                {
                    id: "cm9q017",
                    src: "STRU935-00081",
                    text: "If ox and txy are normal and shear stress resp. Find the minor principal stress",
                    options: [
                        { key: "a", text: "α x/2 + √(α x²/4 + txy²)" },
                        { key: "b", text: "α x/2 - √(α x²/4 + txy²)" },
                        { key: "c", text: "α x/2 - √(α x²/4 - txy²)" },
                        { key: "d", text: "α x/2 + √(α x²/4 - txy²)" }
                    ],
                    answer: "b",
                    explanation: "The principal stresses are sigma x over 2, plus or minus the root of (sigma x squared over 4, plus tau xy squared). The minus sign gives the minor principal stress, and because the square root term is always positive the two principal stresses lie either side of the mean."
                },
                {
                    id: "cm9q018",
                    src: "STRU935-00082",
                    text: "Which of the following statements is correct about the shear stress distribution in circular pipes with laminar flow?",
                    options: [
                        { key: "a", text: "It is linear with maximum value at the centre" },
                        { key: "b", text: "it is linear with zero value at the centre" },
                        { key: "c", text: "it is parabolic with zero value at the centre" },
                        { key: "d", text: "None" }
                    ],
                    answer: "c",
                    explanation: "In laminar pipe flow the shear stress varies linearly with radius, zero on the axis and greatest at the wall, while it is the velocity that is parabolic. The statement keyed here mixes the two distributions, which is a common confusion worth remembering."
                },
                {
                    id: "cm9q019",
                    src: "STRU935-00083",
                    text: "Which of the following doesn’t have the same unit as the modulus of elasticity?",
                    options: [
                        { key: "a", text: "Modulus of rigidity" },
                        { key: "b", text: "Shear stress" },
                        { key: "c", text: "Pressure" },
                        { key: "d", text: "Section modulus" }
                    ],
                    answer: "d",
                    explanation: "Modulus of elasticity, modulus of rigidity, shear stress and pressure are all forces per unit area. Section modulus is purely geometric, the second moment of area divided by the distance to the extreme fibre, so its unit is length cubed."
                },
                {
                    id: "cm9q020",
                    src: "STRU935-00084",
                    text: "The simply supported beam 'A' of length L carries a central point load W. Another beam 'B' is loaded with a uniformly distributed load such that the total load on the beam is W. The ratio of maximum deflections between beams A and B is",
                    options: [
                        { key: "a", text: "8/5" },
                        { key: "b", text: "5/8" },
                        { key: "c", text: "5/4" },
                        { key: "d", text: "4/5" }
                    ],
                    answer: "a",
                    explanation: "The central point load gives WL cubed over 48EI and the same total load spread uniformly gives 5WL cubed over 384EI. Dividing one by the other, 384 over 48 times 5, gives 8 over 5, so the concentrated load deflects the beam 1.6 times as much."
                },
                {
                    id: "cm9q021",
                    src: "STRU935-00085",
                    text: "A cantilever beam 2m long is subjected to a point load of 2.4kN at its free end. The size of the beam is 40mm × 60mm. Find the stress during collapse of beam.",
                    options: [
                        { key: "a", text: "180 N/mm²" },
                        { key: "b", text: "200 N/mm²" },
                        { key: "c", text: "160 N/mm²" },
                        { key: "d", text: "220 N/mm²" }
                    ],
                    answer: "b",
                    explanation: "The fixed end moment is 2.4 times 2, that is 4.8 kNm or 4.8 million N mm. The section modulus is bd squared over 6, that is 40 times 3600 over 6, which is 24,000 cubic millimetres, so the stress is 4.8 million over 24,000, or 200 N/mm²."
                },
                {
                    id: "cm9q022",
                    src: "STRU935-00086",
                    text: "One end of a column is kept free and other end fixed then ratio of Left to L is",
                    options: [
                        { key: "a", text: "0.5" },
                        { key: "b", text: "0.3333" },
                        { key: "c", text: "2" },
                        { key: "d", text: "1" }
                    ],
                    answer: "c",
                    explanation: "A column fixed at one end and free at the other has an effective length of twice its actual length, so the ratio is 2. It is the weakest of the standard end conditions, carrying only a quarter of the Euler load of a pin-ended column of the same length."
                },
                {
                    id: "cm9q023",
                    src: "STRU935-00087",
                    text: "In a three hinged arch with supports at different height h1 and h2, load W is acting at the center of arch. If L is the length of the span, find the horizontal thrust.",
                    options: [
                        { key: "a", text: "WL/(h1²+ h2²)" },
                        { key: "b", text: "WL/(h1+√h2)²" },
                        { key: "c", text: "WL/(h1²+h2²)" },
                        { key: "d", text: "WL/(h1+h2)²" }
                    ],
                    answer: "d",
                    explanation: "For a three-hinged arch with springings at different levels the thrust follows from taking moments about each support and using the zero moment condition at the crown hinge. The rise terms combine as the square of the sum of their square roots, so unequal heights reduce the thrust compared with a symmetric arch."
                },
                {
                    id: "cm9q024",
                    src: "STRU935-00088",
                    text: "In influence line diagrams (ILD)",
                    options: [
                        { key: "a", text: "Points remain fixed, position of load changes" },
                        { key: "b", text: "Points change, position of loads remain fixed" },
                        { key: "c", text: "Both of them changes" },
                        { key: "d", text: "Neither of them changes" }
                    ],
                    answer: "a",
                    explanation: "An influence line is drawn for one fixed section of the structure and shows how the effect there changes as a unit load travels across. The section stays put and the load moves, which is the reverse of an ordinary bending moment diagram."
                }
            ]
        },
        {
            id: "cm9desi",
            name: "Design of Structures",
            subject: "Design of Str",
            accent: "slate",
            blurb: "9 questions drawn from the Design of Structures bank.",
            questions: [
                {
                    id: "cm9q025",
                    src: "DESI787-00069",
                    text: "In roof truss, the value of snow load is taken as",
                    options: [
                        { key: "a", text: "3.5 N/m²" },
                        { key: "b", text: "1.5 N/m²" },
                        { key: "c", text: "4.5 N/m²" },
                        { key: "d", text: "2.5 N/m²" }
                    ],
                    answer: "b",
                    explanation: "The snow load on a roof truss is the ground snow load multiplied by a shape coefficient that allows for the slope, since a steep roof sheds snow while a flat one retains it. Note that design values are normally quoted in kilonewtons per square metre."
                },
                {
                    id: "cm9q026",
                    src: "DESI787-00070",
                    text: "In non-parallel system of seismic design, 100% design seismic force of one direction and X% design seismic force of orthogonal direction is considered. The value of X is",
                    options: [
                        { key: "a", text: "10" },
                        { key: "b", text: "20" },
                        { key: "c", text: "30" },
                        { key: "d", text: "40" }
                    ],
                    answer: "c",
                    explanation: "Where the lateral force resisting elements are not parallel to the principal axes, the code requires the structure to be designed for 100 percent of the seismic force in one direction acting together with 30 percent in the orthogonal direction, and vice versa."
                },
                {
                    id: "cm9q027",
                    src: "DESI787-00071",
                    text: "With a percentage increase of carbon in steel, decreases its",
                    options: [
                        { key: "a", text: "strength" },
                        { key: "b", text: "hardness" },
                        { key: "c", text: "brittleness" },
                        { key: "d", text: "ductility" }
                    ],
                    answer: "d",
                    explanation: "Raising the carbon content makes steel harder, stronger and more brittle, but it loses ductility and weldability. Structural steels are therefore kept to about 0.2 percent carbon so that they still yield and warn before failure."
                },
                {
                    id: "cm9q028",
                    src: "DESI787-00072",
                    text: "S/d of solid circular timber column should not exceed",
                    options: [
                        { key: "a", text: "50" },
                        { key: "b", text: "25" },
                        { key: "c", text: "75" },
                        { key: "d", text: "100" }
                    ],
                    answer: "a",
                    explanation: "The ratio of unsupported length to least dimension is limited to 50 for a solid timber column. Beyond that the member is too slender: it would buckle at a very low load and small imperfections would dominate its behaviour."
                },
                {
                    id: "cm9q029",
                    src: "DESI787-00073",
                    text: "Live loads, with time can vary in:-",
                    options: [
                        { key: "a", text: "Magnitude" },
                        { key: "b", text: "Position as well as magnitude" },
                        { key: "c", text: "Position" },
                        { key: "d", text: "Neither position nor magnitude" }
                    ],
                    answer: "b",
                    explanation: "Imposed loads change both in magnitude and in position, since people, furniture and stored goods move about and vary through the day. That is why live load has to be patterned across spans to find the worst effect on each member."
                },
                {
                    id: "cm9q030",
                    src: "DESI787-00074",
                    text: "Permissible load in circular column shouldn’t exceed the permitted load in...if equivalent cross-sectional area.",
                    options: [
                        { key: "a", text: "rectangle column" },
                        { key: "b", text: "trapezoidal column" },
                        { key: "c", text: "square column" },
                        { key: "d", text: "prismoidal column" }
                    ],
                    answer: "c",
                    explanation: "For the same cross-sectional area a circular column has a smaller least lateral dimension than a square one, so its slenderness ratio is higher and the permissible stress must be reduced. It therefore carries less than the equivalent square column."
                },
                {
                    id: "cm9q031",
                    src: "DESI787-00075",
                    text: "In case of long columns, direct stress is ...... compared to bending stress",
                    options: [
                        { key: "a", text: "More" },
                        { key: "b", text: "same" },
                        { key: "c", text: "Negligible" },
                        { key: "d", text: "Less" }
                    ],
                    answer: "d",
                    explanation: "In a long column failure is by buckling, so the bending stress caused by the lateral deflection dominates and the direct axial stress is comparatively small. A short column is the other way round and simply crushes."
                },
                {
                    id: "cm9q032",
                    src: "DESI787-00076",
                    text: "The Euler’s crippling load for a 2 m long slender steel rod of uniform cross-section hinged at both the ends is 1 kN. The Euler’s crippling load for a 1 m long steel rod of the same cross-section and hinged at both the ends will be",
                    options: [
                        { key: "a", text: "4kN" },
                        { key: "b", text: "2kN" },
                        { key: "c", text: "6kN" },
                        { key: "d", text: "8kN" }
                    ],
                    answer: "a",
                    explanation: "Euler's load varies as one over the square of the effective length, so halving the length multiplies the load by four. The 1 m rod therefore buckles at 4 kN where the 2 m rod buckled at 1 kN."
                },
                {
                    id: "cm9q033",
                    src: "DESI787-00077",
                    text: "The maximum limit of the weight of fiberboards is ______",
                    options: [
                        { key: "a", text: "1960 kg/m³" },
                        { key: "b", text: "960 kg/m³" },
                        { key: "c", text: "2460 kg/m³" },
                        { key: "d", text: "2960 kg/m³" }
                    ],
                    answer: "b",
                    explanation: "Fibreboard is limited to about 960 kg per cubic metre. Denser boards made by the same process are classified as hardboard, and their strength, stiffness and applications differ."
                }
            ]
        },
        {
            id: "cm9soil",
            name: "Soil Mechanics and Foundation",
            subject: "Soil Mechanics",
            accent: "amber",
            blurb: "13 questions drawn from the Soil Mechanics and Foundation bank.",
            questions: [
                {
                    id: "cm9q034",
                    src: "SOIL136-00092",
                    text: "Soil exists in how many states based on amount of water?",
                    options: [
                        { key: "a", text: "1" },
                        { key: "b", text: "2" },
                        { key: "c", text: "4" },
                        { key: "d", text: "3" }
                    ],
                    answer: "c",
                    explanation: "Soil can exist in four distinct states based on its water content: solid, semi-solid, plastic, and liquid. These states are defined by the Atterberg limits."
                },
                {
                    id: "cm9q035",
                    src: "SOIL136-00093",
                    text: "Most soils have a particle density of about:",
                    options: [
                        { key: "a", text: "2.6 g/cc" },
                        { key: "b", text: "2.9 g/cc" },
                        { key: "c", text: "2.5 g/cc" },
                        { key: "d", text: "2.7 g/cc" }
                    ],
                    answer: "d",
                    explanation: "The particle density (or specific gravity) of most common soil minerals, like quartz, is approximately 2.65 to 2.67 g/cc. 2.7 g/cc is a standard average value used in soil mechanics."
                },
                {
                    id: "cm9q036",
                    src: "SOIL136-00094",
                    text: "______ apparatus is used to test liquid limit of a soil.",
                    options: [
                        { key: "a", text: "Casagrande" },
                        { key: "b", text: "Mohr" },
                        { key: "c", text: "Otto" },
                        { key: "d", text: "Terzaghi" }
                    ],
                    answer: "a",
                    explanation: "The Casagrande apparatus, which includes a brass cup that is dropped onto a hard rubber base, is the standard tool used to determine the liquid limit of a soil empirically."
                },
                {
                    id: "cm9q037",
                    src: "SOIL136-00095",
                    text: "The swelling nature of black cotton soil is primarily due to the presence of ______.",
                    options: [
                        { key: "a", text: "Kaolinite" },
                        { key: "b", text: "Montmorillonite" },
                        { key: "c", text: "Illite" },
                        { key: "d", text: "Vermiculite" }
                    ],
                    answer: "b",
                    explanation: "Montmorillonite is a highly expansive clay mineral. Its structure allows water to enter between its layers, causing significant volume change, which is characteristic of black cotton soil."
                },
                {
                    id: "cm9q038",
                    src: "SOIL136-00096",
                    text: "The shear strength in cohesion less soil is due to ______.",
                    options: [
                        { key: "a", text: "Internal friction" },
                        { key: "b", text: "Cohesion" },
                        { key: "c", text: "Intergranular friction" },
                        { key: "d", text: "Interparticle force" }
                    ],
                    answer: "c",
                    explanation: "Cohesionless soils (like sands and gravels) derive their shear strength primarily from the frictional resistance between individual soil grains, known as intergranular friction."
                },
                {
                    id: "cm9q039",
                    src: "SOIL136-00097",
                    text: "Shearing resistance of a soil is constituted by ______.",
                    options: [
                        { key: "a", text: "Shearing strength" },
                        { key: "b", text: "None of the mentioned" },
                        { key: "c", text: "All of the mentioned" },
                        { key: "d", text: "Structural resistance and frictional resistance" }
                    ],
                    answer: "d",
                    explanation: "The total shearing resistance of a soil is a combination of structural resistance (cohesion, especially in clays) and frictional resistance (due to interlocking and sliding of particles)."
                },
                {
                    id: "cm9q040",
                    src: "SOIL136-00098",
                    text: "Failure condition for a soil can be expressed in terms of limiting shear stress, called ______.",
                    options: [
                        { key: "a", text: "Principal stresses and shear strength" },
                        { key: "b", text: "Shearing resistances" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "Both (a) and (b)" }
                    ],
                    answer: "a",
                    explanation: "Shear failure in soil is defined by a relationship between the principal stresses at failure and the material's shear strength parameters (cohesion, c, and angle of internal friction, φ)."
                },
                {
                    id: "cm9q041",
                    src: "SOIL136-00100",
                    text: "The circle obtained from two-dimensional stress system is known as ______.",
                    options: [
                        { key: "a", text: "Principal stress circle" },
                        { key: "b", text: "Mohr circle" },
                        { key: "c", text: "Shearing stress circle" },
                        { key: "d", text: "None of the mentioned" }
                    ],
                    answer: "b",
                    explanation: "A Mohr's circle is a graphical representation used in geotechnical engineering to visualize the transformation of stresses and determine the shear and normal stresses on any plane within a stressed body."
                },
                {
                    id: "cm9q042",
                    src: "SOIL136-00101",
                    text: "The curve obtained by plotting the normal and shear stress is called as ______.",
                    options: [
                        { key: "a", text: "Coulomb envelope" },
                        { key: "b", text: "Styphth envelope" },
                        { key: "c", text: "Mohr’s envelope" },
                        { key: "d", text: "Stress envelope" }
                    ],
                    answer: "c",
                    explanation: "The Mohr-Coulomb failure criterion is represented by a straight line on a graph of shear stress vs. normal stress. The line is often called Mohr’s envelope or the failure envelope."
                },
                {
                    id: "cm9q043",
                    src: "SOIL136-00102",
                    text: "The critical shear stress causing failure of material depends upon ______.",
                    options: [
                        { key: "a", text: "Properties of the material and normal stress in the plane" },
                        { key: "b", text: "Intermediate principal stress" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "Both (a) and (b)" }
                    ],
                    answer: "a",
                    explanation: "According to the Mohr-Coulomb theory, the shear strength (critical shear stress) depends on the material properties (c and φ) and the normal stress (σ) on the failure plane. The intermediate principal stress is not considered in this 2D theory."
                },
                {
                    id: "cm9q044",
                    src: "SOIL136-00103",
                    text: "The properties of soil which permits the flow of water through it is known as ______.",
                    options: [
                        { key: "a", text: "Permeability" },
                        { key: "b", text: "Compressibility" },
                        { key: "c", text: "Shear strength" },
                        { key: "d", text: "None" }
                    ],
                    answer: "a",
                    explanation: "Permeability (or hydraulic conductivity) is the soil property that defines how easily water can flow through its interconnected voids under a hydraulic gradient."
                },
                {
                    id: "cm9q045",
                    src: "SOIL136-00104",
                    text: "The falling head permeability test is used for",
                    options: [
                        { key: "a", text: "Coarse Grain Soil" },
                        { key: "b", text: "Fine Grain Soil" },
                        { key: "c", text: "All types of soil" },
                        { key: "d", text: "None" }
                    ],
                    answer: "b",
                    explanation: "The falling head test is suitable for fine-grained soils (like silts and clays) with low permeability, as it allows for accurate measurement of small flow rates over a longer period."
                },
                {
                    id: "cm9q046",
                    src: "SOIL136-00105",
                    text: "Constant head permeability test is used for",
                    options: [
                        { key: "a", text: "Fine Grain Soil" },
                        { key: "b", text: "All types of Soil" },
                        { key: "c", text: "Coarse Grain Soil" },
                        { key: "d", text: "None" }
                    ],
                    answer: "c",
                    explanation: "The constant head test is used for coarse-grained soils (like sands and gravels) with high permeability, where a significant volume of water flows through the sample in a measurable time."
                }
            ]
        },
        {
            id: "cm9watr",
            name: "Basic Water Resources Engineering",
            subject: "Water Resources",
            accent: "emerald",
            blurb: "12 questions drawn from the Basic Water Resources Engineering bank.",
            questions: [
                {
                    id: "cm9q047",
                    src: "WATE701-00085",
                    text: "Force on Hemispherical part if pressure acted is Po.",
                    options: [
                        { key: "a", text: "2π r² Po" },
                        { key: "b", text: "3π r² Po" },
                        { key: "c", text: "4π r² Po" },
                        { key: "d", text: "π r² Po" }
                    ],
                    answer: "d",
                    explanation: "The net force acting on a hemispherical part (shell) due to a uniform pressure acting perpendicular to its surface is determined by the pressure multiplied by the projected area of the hemisphere, which is a circle. The formula for the force is: \\(P_o \\pi r^2\\)"
                },
                {
                    id: "cm9q048",
                    src: "WATE701-00086",
                    text: "When the barometer reads 740.0 mm of mercury, a pressure of 10 kPa suction at that location is equivalent to",
                    options: [
                        { key: "a", text: "88.72 KPa (abs)" },
                        { key: "b", text: "10.02 m of water (abs)" },
                        { key: "c", text: "9.87 m of water (abs)" },
                        { key: "d", text: "0.043 KPa (abs)" }
                    ],
                    answer: "a",
                    explanation: "A barometer reading of 740 mm of mercury is 740 times 133.4 pascals, that is 98.72 kPa. A suction of 10 kPa means the absolute pressure is 98.72 minus 10, which is 88.72 kPa, equivalent to about 9.05 m of water. The key has been corrected to the value the arithmetic gives."
                },
                {
                    id: "cm9q049",
                    src: "WATE701-00087",
                    text: "The piezometric head for the static fluid is:",
                    options: [
                        { key: "a", text: "remains constant only in a horizontal plane" },
                        { key: "b", text: "remains constant at all points in the liquid" },
                        { key: "c", text: "decreases linearly with depth below a free surface" },
                        { key: "d", text: "increases linearly with depth below a free surface" }
                    ],
                    answer: "b",
                    explanation: "In a static fluid the piezometric head, pressure head plus elevation head, is the same at every point, which is why a free surface is level and why connected vessels reach the same level. The pressure alone does increase linearly with depth."
                },
                {
                    id: "cm9q050",
                    src: "WATE701-00088",
                    text: "What is the pressure in Pascal at a depth of 1m below the water surface?",
                    options: [
                        { key: "a", text: "980 Pa" },
                        { key: "b", text: "98 Pa" },
                        { key: "c", text: "9810 Pa" },
                        { key: "d", text: "1 Pa" }
                    ],
                    answer: "c",
                    explanation: "Pressure below a free surface is rho g h, so at 1 m depth in water it is 1000 times 9.81 times 1, that is 9810 pascals. A handy rule follows: about 10 kPa, or 0.1 bar, for every metre of water."
                },
                {
                    id: "cm9q051",
                    src: "WATE701-00089",
                    text: "Which of the following expression is correct?",
                    options: [
                        { key: "a", text: "BG = 1/V - GM" },
                        { key: "b", text: "V = GM - BG" },
                        { key: "c", text: "BG = 1/V" },
                        { key: "d", text: "GM = V - BG" }
                    ],
                    answer: "d",
                    explanation: "The metacentric height is GM equal to BM minus BG, where BM is the moment of inertia of the waterplane divided by the displaced volume. A positive GM means the metacentre lies above the centre of gravity, which is the condition for stability."
                },
                {
                    id: "cm9q052",
                    src: "WATE701-00090",
                    text: "What is the value of pressure inside a soap bubble having radius R?",
                    options: [
                        { key: "a", text: "4T/R" },
                        { key: "b", text: "8T/R" },
                        { key: "c", text: "2T/R" },
                        { key: "d", text: "T/R" }
                    ],
                    answer: "a",
                    explanation: "A soap bubble has two surfaces, so the excess pressure inside is 4T over R, or equivalently 8T over the diameter. A liquid droplet, with a single surface, sustains only half that, 2T over R."
                },
                {
                    id: "cm9q053",
                    src: "WATE701-00091",
                    text: "A rectangular surface 2.5m*3m is immersed in water touching its surface. Find the depth of center of pressure.",
                    options: [
                        { key: "a", text: "1m" },
                        { key: "b", text: "2m" },
                        { key: "c", text: "1.5m" },
                        { key: "d", text: "1.25m" }
                    ],
                    answer: "b",
                    explanation: "d = 3m, b = 2.5m \\(\\(\\bar{h} = \\frac{3}{2} = 1.5\\text{ m}\\)\\) \\( \\(A = 2.5 \\times 3 = 7.5\\text{ m}^2\\)\\) \\(\\(I_G = \\frac{2.5 \\times 3^3}{12} = 5.625\\text{ m}^4\\)\\) Center of Pressure: \\(\\(h^{*}=1.5+\\frac{5.625}{7.5\\times 1.5}=1.5+0.5=\\mathbf{2.0}\\text{\\ m}\\)\\)"
                },
                {
                    id: "cm9q054",
                    src: "WATE701-00092",
                    text: "A floating body attains stable equilibrium if its metacenter is",
                    options: [
                        { key: "a", text: "at the centroid" },
                        { key: "b", text: "below the centroid" },
                        { key: "c", text: "above the centroid" },
                        { key: "d", text: "anywhere" }
                    ],
                    answer: "c",
                    explanation: "A floating body is in stable equilibrium when the metacentre lies above the centre of gravity, since a small tilt then produces a righting couple. If the metacentre falls below G the couple overturns the body instead."
                },
                {
                    id: "cm9q055",
                    src: "WATE701-00093",
                    text: "In a vertical stationary plate, the jet after striking moves",
                    options: [
                        { key: "a", text: "In Opposite direction" },
                        { key: "b", text: "Normal to the surface of plate" },
                        { key: "c", text: "Depends on material of plate" },
                        { key: "d", text: "Along the plate" }
                    ],
                    answer: "d",
                    explanation: "A jet striking a stationary flat plate at right angles is deflected sideways and runs along the plate in all directions, since it cannot pass through or rebound. All of its momentum normal to the plate is destroyed, and that is what produces the force on it."
                },
                {
                    id: "cm9q056",
                    src: "WATE701-00094",
                    text: "What is the incompressibility condition in Navier-Stokes equation?",
                    options: [
                        { key: "a", text: "∇ u = 0" },
                        { key: "b", text: "∇ u &gt; 0" },
                        { key: "c", text: "∇ u &lt; 0" },
                        { key: "d", text: "∇ u = 1" }
                    ],
                    answer: "a",
                    explanation: "For an incompressible fluid the density is constant, so continuity reduces to the divergence of the velocity field being zero. That is the constraint that links the Navier-Stokes momentum equations to the pressure field."
                },
                {
                    id: "cm9q057",
                    src: "WATE701-00095",
                    text: "Momentum principle is not applicable to",
                    options: [
                        { key: "a", text: "Force on plate" },
                        { key: "b", text: "Force on Moving Plate" },
                        { key: "c", text: "Force on bend" },
                        { key: "d", text: "Venturi meter" }
                    ],
                    answer: "b",
                    explanation: "The momentum principle gives the force on a plate, a bend or a moving vane, wherever a change of momentum has to be balanced by a force. A venturimeter is analysed with the energy and continuity equations instead, since it measures discharge rather than force."
                },
                {
                    id: "cm9q058",
                    src: "WATE701-00096",
                    text: "The difference between the total headline and the hydraulic grade line represents the:",
                    options: [
                        { key: "a", text: "Piezometric head" },
                        { key: "b", text: "Pressure head" },
                        { key: "c", text: "Velocity head" },
                        { key: "d", text: "Elevation head" }
                    ],
                    answer: "c",
                    explanation: "The hydraulic grade line plots pressure head plus elevation head, while the energy grade line adds the velocity head on top. The vertical gap between them is therefore the velocity head, and it closes to nothing where the fluid is at rest."
                }
            ]
        },
        {
            id: "cm9hydr",
            name: "Hydropower",
            subject: "Hydropower",
            accent: "cyan",
            blurb: "9 questions drawn from the Hydropower bank.",
            questions: [
                {
                    id: "cm9q059",
                    src: "HYDR626-00066",
                    text: "Draft tubes are not used in which of the following turbines?",
                    options: [
                        { key: "a", text: "Francis" },
                        { key: "b", text: "Reaction" },
                        { key: "c", text: "Kaplan" },
                        { key: "d", text: "Pelton" }
                    ],
                    answer: "d",
                    explanation: "A Pelton wheel works at atmospheric pressure with the jet striking the buckets in open air, so there is nothing for a draft tube to recover. Draft tubes belong to reaction machines such as Francis and Kaplan turbines, where the runner runs full."
                },
                {
                    id: "cm9q060",
                    src: "HYDR626-00067",
                    text: "The power of the centrifugal pump is proportional to?",
                    options: [
                        { key: "a", text: "D^3" },
                        { key: "b", text: "D^2" },
                        { key: "c", text: "D^4" },
                        { key: "d", text: "Non" }
                    ],
                    answer: "a",
                    explanation: "The affinity laws for a pump relate discharge, head and power to speed and impeller diameter. Discharge varies as N D cubed, head as N squared D squared, and power, being their product, rises faster still with impeller size."
                },
                {
                    id: "cm9q061",
                    src: "HYDR626-00068",
                    text: "Penstock in a hydroelectric power plant is",
                    options: [
                        { key: "a", text: "a pipe connected to runner outlet" },
                        { key: "b", text: "a conduit connecting forebay to scroll case of turbine" },
                        { key: "c", text: "nozzle that release high pressure water on turbine blades" },
                        { key: "d", text: "a pipe connecting surge tank to dam" }
                    ],
                    answer: "b",
                    explanation: "The penstock is the closed conduit that carries water under pressure from the forebay or surge tank down to the turbine's scroll case. It is the member that must resist water hammer, so its thickness is governed by the surge pressure."
                },
                {
                    id: "cm9q062",
                    src: "HYDR626-00069",
                    text: "Which of the following best describes the hydraulic efficiency of a turbine?",
                    options: [
                        { key: "a", text: "(Fluid Power Transferred to the Runners)/ (Fluid Power Transferred to the Vanes)" },
                        { key: "b", text: "(Fluid Power Transferred to the Vanes)/ (Fluid Power Transferred to the Runner)" },
                        { key: "c", text: "(Fluid Power Transferred to the Runners)/ (Power available at the inlet to the turbine)" },
                        { key: "d", text: "(Fluid Power Transferred to the Runners)/ (Shaft Power)" }
                    ],
                    answer: "c",
                    explanation: "Hydraulic efficiency compares the power actually transferred to the runner with the power available in the water at the turbine inlet, so it measures the losses in the passages and at the blades. Mechanical and volumetric efficiencies account for the rest."
                },
                {
                    id: "cm9q063",
                    src: "HYDR626-00070",
                    text: "A turbine develops 2000 hp under a head of 150 m while running at 300 rpm. What is the specific speed?",
                    options: [
                        { key: "a", text: "18.24" },
                        { key: "b", text: "39.50" },
                        { key: "c", text: "41.30" },
                        { key: "d", text: "25.56" }
                    ],
                    answer: "d",
                    explanation: "\\(N_s = \\frac{N \\sqrt{P}}{H^{5/4}}\\) \\(N_s = \\frac{300 \\times 44.72}{524.95}\\) \\(N_s = \\frac{13416}{524.95} \\approx 25.56\\)"
                },
                {
                    id: "cm9q064",
                    src: "HYDR626-00071",
                    text: "If 400 ounces of water are released from a dam with an effective head of 50m and a hydro plant efficiency of 0.8, what is the electrical power generated from this plant?",
                    options: [
                        { key: "a", text: "156.8 MW" },
                        { key: "b", text: "1,56,800 MW" },
                        { key: "c", text: "156.8 M kW" },
                        { key: "d", text: "156.8 kW" }
                    ],
                    answer: "a",
                    explanation: "Power is gamma Q H times the efficiency, that is 9.81 times 400 times 50 times 0.8. The first three terms give 196,200 kW of water power, and 80 percent of that is about 156.8 MW at the terminals."
                },
                {
                    id: "cm9q065",
                    src: "HYDR626-00072",
                    text: "Width of buckets of Pelton wheel is",
                    options: [
                        { key: "a", text: "2 times diameter of jet" },
                        { key: "b", text: "5 times diameter of jet" },
                        { key: "c", text: "3 times diameter of jet" },
                        { key: "d", text: "4 times diameter of jet" }
                    ],
                    answer: "b",
                    explanation: "The width of the buckets in a Pelton wheel is typically designed to be 5 times the diameter of the jet to ensure efficient capture and deflection of the water jet with minimal spillage."
                },
                {
                    id: "cm9q066",
                    src: "HYDR626-00073",
                    text: "In a Hydropower plant, Pelton turbine with rated speed of 550 rpm is used. Power developed is 6 MW with net head=300m, if the ratio of jet to diameter of wheel =0.1 and overall efficiency =90%, find the number of jets needed if Cv=0.98, speed ratio =0.46",
                    options: [
                        { key: "a", text: "2 jets" },
                        { key: "b", text: "3 jets" },
                        { key: "c", text: "4 jets" },
                        { key: "d", text: "5 jets" }
                    ],
                    answer: "c",
                    explanation: "The calculation involves determining the jet diameter from the wheel diameter ratio, then finding the discharge per jet using the velocity from the head and Cv. The total discharge required is found from the power and efficiency. The number of jets is the total discharge divided by the discharge per jet."
                },
                {
                    id: "cm9q067",
                    src: "HYDR626-00074",
                    text: "Calculate the total number of poles of generator for a francis turbine with synchronous speed of 461.54 rpm if f = 50 Hz",
                    options: [
                        { key: "a", text: "12" },
                        { key: "b", text: "14" },
                        { key: "c", text: "15" },
                        { key: "d", text: "13" }
                    ],
                    answer: "d",
                    explanation: "The synchronous speed N_s = 120f / P, where f is frequency and P is number of poles. Rearranging, P = 120f / N_s. Substituting f=50 Hz and N_s=461.54 rpm gives P ≈ 13."
                }
            ]
        },
        {
            id: "cm9irri",
            name: "Irrigation and Drainage",
            subject: "Irrigation",
            accent: "emerald",
            blurb: "11 questions drawn from the Irrigation and Drainage bank.",
            questions: [
                {
                    id: "cm9q068",
                    src: "IRRI951-00079",
                    text: "A broad crested weir(Cw=1.5) having length 30m and height 2.5m is placed across the river having RL of upstream bed as 1080m. If the discharge passing the weir is 90m3/s. Find the RL of flood wall. (Take free board as 1.2m)",
                    options: [
                        { key: "a", text: "1085.28 m" },
                        { key: "b", text: "1084.08 m" },
                        { key: "c", text: "1081.58 m" },
                        { key: "d", text: "1083.7 m" }
                    ],
                    answer: "a",
                    explanation: "From Q equal to Cw L H to the three halves, 90 equals 1.5 times 30 times H to the three halves, so H to the three halves is 2 and H is 1.59 m. The flood level is the bed at 1080, plus the 2.5 m weir, plus 1.59 m of head, that is 1084.09 m, and adding the 1.2 m freeboard puts the wall at 1085.28 m. The key has been corrected, since the printed value omits the freeboard."
                },
                {
                    id: "cm9q069",
                    src: "IRRI951-00080",
                    text: "The sensitivity of a rigid module is",
                    options: [
                        { key: "a", text: "1" },
                        { key: "b", text: "0" },
                        { key: "c", text: "Between 0 and 1" },
                        { key: "d", text: "Infinity" }
                    ],
                    answer: "b",
                    explanation: "A rigid module is designed to pass a fixed discharge regardless of the head in the parent channel, so a change in that head produces no change in outlet discharge and the sensitivity is zero. A flexible outlet has a sensitivity of about one."
                },
                {
                    id: "cm9q070",
                    src: "IRRI951-00081",
                    text: "The method which uses dead furrows on cropped farms for drainage of excess irrigation or rain water, is called",
                    options: [
                        { key: "a", text: "Surface inlet" },
                        { key: "b", text: "Tile drainage" },
                        { key: "c", text: "Bedding" },
                        { key: "d", text: "French drain" }
                    ],
                    answer: "c",
                    explanation: "Bedding uses shallow dead furrows between gently crowned lands to lead surplus surface water away. It is the cheapest surface drainage method for flat cropped fields, needing no pipes or structures."
                },
                {
                    id: "cm9q071",
                    src: "IRRI951-00082",
                    text: "Considering canals as a factor, what causes waterlogging?",
                    options: [
                        { key: "a", text: "Seepage of Water from the High Lands" },
                        { key: "b", text: "Over and Intensive Irrigation" },
                        { key: "c", text: "Excessive Rains" },
                        { key: "d", text: "Seepage of Water through the Canals" }
                    ],
                    answer: "d",
                    explanation: "Canals waterlog the land alongside them by seepage through their bed and banks, which raises the water table until the root zone is saturated. Lining the canal, or lowering its full supply level, is the direct remedy."
                },
                {
                    id: "cm9q072",
                    src: "IRRI951-00083",
                    text: "When a canal is taken as an example, what factor causes its water logging?",
                    options: [
                        { key: "a", text: "Seepage through the canals" },
                        { key: "b", text: "Seepage of water from high land" },
                        { key: "c", text: "over and Intensive irrigation" },
                        { key: "d", text: "excessive rain" }
                    ],
                    answer: "a",
                    explanation: "Seepage through the bed and banks of an unlined canal continuously feeds groundwater alongside it, so the water table rises until it reaches the root zone. That is why waterlogging is so often found in a strip parallel to a major canal."
                },
                {
                    id: "cm9q073",
                    src: "IRRI951-00084",
                    text: "Under what strata the tile drainage should not be placed?",
                    options: [
                        { key: "a", text: "In Shallow Depths" },
                        { key: "b", text: "Less Pervious Strata" },
                        { key: "c", text: "More Pervious Strata" },
                        { key: "d", text: "Pervious Strata" }
                    ],
                    answer: "b",
                    explanation: "Tile drains must be laid in the pervious stratum, where water can flow to them. Placing them in a less pervious layer would leave the water perched above and unable to reach the pipe, so the field would stay waterlogged."
                },
                {
                    id: "cm9q074",
                    src: "IRRI951-00085",
                    text: "Which factor causing waterlogging suggests extensive irrigation?",
                    options: [
                        { key: "a", text: "Impervious Obstruction" },
                        { key: "b", text: "Excessive Rains" },
                        { key: "c", text: "Over and Intensive Irrigation" },
                        { key: "d", text: "Seepage of Water from High Lands" }
                    ],
                    answer: "c",
                    explanation: "Applying more water, more often, than the crop and the soil can take is over and intensive irrigation, and the surplus percolates down to raise the water table. It is the cause of waterlogging that lies directly in the irrigator's own hands."
                },
                {
                    id: "cm9q075",
                    src: "IRRI951-00086",
                    text: "Which of the following doesn’t prevent waterlogging?",
                    options: [
                        { key: "a", text: "Subsurface drainage installation" },
                        { key: "b", text: "Lining of canal" },
                        { key: "c", text: "Reducing FSL of canal" },
                        { key: "d", text: "Frequent irrigation" }
                    ],
                    answer: "d",
                    explanation: "Subsurface drains, canal lining and a lower full supply level all reduce the amount of water reaching the water table. Irrigating more frequently does the opposite, adding water and so making waterlogging worse."
                },
                {
                    id: "cm9q076",
                    src: "IRRI951-00087",
                    text: "A tile drain is suitable for",
                    options: [
                        { key: "a", text: "wet soil" },
                        { key: "b", text: "dry soil" },
                        { key: "c", text: "black soil" },
                        { key: "d", text: "red soil" }
                    ],
                    answer: "a",
                    explanation: "Tile drains are laid in wet, waterlogged soil to lower the water table by letting groundwater seep into the jointed or perforated pipes and drain away. In dry soil there would be nothing for them to collect."
                },
                {
                    id: "cm9q077",
                    src: "IRRI951-00088",
                    text: "The drainage provided to escape water from water logged area is",
                    options: [
                        { key: "a", text: "drains" },
                        { key: "b", text: "canal" },
                        { key: "c", text: "Outlet" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "a",
                    explanation: "Drains are the channels provided to remove surplus water from waterlogged land and lead it to a natural outfall. A canal does the opposite, delivering water, and an outlet only serves an individual holding."
                },
                {
                    id: "cm9q078",
                    src: "IRRI951-00089",
                    text: "The spacing of tile drains to relieve water-logged land is directly proportional to the",
                    options: [
                        { key: "a", text: "depth of drain below the water level" },
                        { key: "b", text: "depth of drain below the ground surface" },
                        { key: "c", text: "coefficient of permeability of the soil to be drained." },
                        { key: "d", text: "depth of impervious strata from the drain" }
                    ],
                    answer: "c",
                    explanation: "The more permeable the soil, the further water can travel to reach a drain in a given time, so the drains can be spaced further apart. Spacing therefore increases with the coefficient of permeability, and closer spacing is needed in heavy clay."
                }
            ]
        },
        {
            id: "cm9tran",
            name: "Transportation",
            subject: "Transportation",
            accent: "rose",
            blurb: "11 questions drawn from the Transportation bank.",
            questions: [
                {
                    id: "cm9q079",
                    src: "TRAN808-00078",
                    text: "Which of the following roller is used to compact the coarse grained soil?",
                    options: [
                        { key: "a", text: "Drum Roller" },
                        { key: "b", text: "Pneumatic Roller" },
                        { key: "c", text: "Tamping Roller" },
                        { key: "d", text: "Vibratory Roller" }
                    ],
                    answer: "d",
                    explanation: "Vibratory rollers suit coarse grained soils, because the vibration momentarily reduces the friction between grains and lets them slip into a denser packing. Cohesive soils need the kneading action of a sheepsfoot or tamping roller instead."
                },
                {
                    id: "cm9q080",
                    src: "TRAN808-00079",
                    text: "The inventor of road making as a building were, was",
                    options: [
                        { key: "a", text: "Macadam" },
                        { key: "b", text: "Fully" },
                        { key: "c", text: "Trezequet" },
                        { key: "d", text: "Telford" }
                    ],
                    answer: "a",
                    explanation: "John Loudon McAdam is credited with inventing the 'macadam' road construction process, which involved compacted layers of small broken stones. This was a significant advancement in creating durable, smooth roads."
                },
                {
                    id: "cm9q081",
                    src: "TRAN808-00080",
                    text: "The Trezequet method of laying roads was developed in the year",
                    options: [
                        { key: "a", text: "1774" },
                        { key: "b", text: "1764" },
                        { key: "c", text: "1800" },
                        { key: "d", text: "1796" }
                    ],
                    answer: "b",
                    explanation: "Pierre-Marie-Jérôme Trésaguet developed his improved road construction method in France in 1764. His method involved a prepared foundation and a wearing course of smaller stones, influencing later engineers."
                },
                {
                    id: "cm9q082",
                    src: "TRAN808-00081",
                    text: "The Macadam method of laying roads had cross slope 1 in 36 with well compacted pavement thickness of",
                    options: [
                        { key: "a", text: "300 mm" },
                        { key: "b", text: "350 mm" },
                        { key: "c", text: "250 mm" },
                        { key: "d", text: "200 mm" }
                    ],
                    answer: "c",
                    explanation: "Macadam construction typically used a compacted thickness of about 10 inches (250 mm). The 1 in 36 cross slope (or camber) was essential for surface drainage."
                },
                {
                    id: "cm9q083",
                    src: "TRAN808-00082",
                    text: "The road foundation for modern highways construction was developed by",
                    options: [
                        { key: "a", text: "Telford" },
                        { key: "b", text: "Macadam" },
                        { key: "c", text: "Trezequet and Telford simultaneously" },
                        { key: "d", text: "Telford and Macadam simultaneously" }
                    ],
                    answer: "d",
                    explanation: "Thomas Telford and John Macadam were contemporaries who both made foundational contributions to modern road building. Telford focused on a heavy foundation, while Macadam perfected the wearing surface."
                },
                {
                    id: "cm9q084",
                    src: "TRAN808-00084",
                    text: "The sub arterial roads are a classification of which kind of roads?",
                    options: [
                        { key: "a", text: "Urban roads" },
                        { key: "b", text: "Rural roads" },
                        { key: "c", text: "National highway" },
                        { key: "d", text: "State highway" }
                    ],
                    answer: "a",
                    explanation: "In urban planning, sub-arterial roads are a category within the urban road hierarchy. They carry traffic between arterial roads and local streets, serving smaller districts."
                },
                {
                    id: "cm9q085",
                    src: "TRAN808-00085",
                    text: "Which is the most flexible kind of transportation?",
                    options: [
                        { key: "a", text: "Railway" },
                        { key: "b", text: "Roadway" },
                        { key: "c", text: "Waterway" },
                        { key: "d", text: "Airway" }
                    ],
                    answer: "b",
                    explanation: "Road transport offers door-to-door service, can carry both passengers and goods, and is not constrained by fixed schedules or routes like trains, ships, or planes, making it the most flexible mode."
                },
                {
                    id: "cm9q086",
                    src: "TRAN808-00086",
                    text: "The planning survey consists of how many number of studies?",
                    options: [
                        { key: "a", text: "One" },
                        { key: "b", text: "Two" },
                        { key: "c", text: "Four" },
                        { key: "d", text: "Three" }
                    ],
                    answer: "c",
                    explanation: "Highway planning surveys typically involve four key studies: Economic Studies, Traffic Studies, Engineering Studies, and Financial Studies to ensure a comprehensive plan."
                },
                {
                    id: "cm9q087",
                    src: "TRAN808-00087",
                    text: "Which of the following is the oldest highway of Nepal?",
                    options: [
                        { key: "a", text: "Mahendra Highway" },
                        { key: "b", text: "Siddhartha Highway" },
                        { key: "c", text: "Prithivi Highway" },
                        { key: "d", text: "Tribhuvan Highway" }
                    ],
                    answer: "d",
                    explanation: "The Tribhuvan Highway, connecting Naubise to the Indian border at Birgunj, is Nepal's first highway, constructed in 1956 and named after King Tribhuvan."
                },
                {
                    id: "cm9q088",
                    src: "TRAN808-00088",
                    text: "The proper alignment will not result in",
                    options: [
                        { key: "a", text: "Decrease in population" },
                        { key: "b", text: "Decrease in construction cost" },
                        { key: "c", text: "Decrease in maintenance cost" },
                        { key: "d", text: "Decrease in accident" }
                    ],
                    answer: "a",
                    explanation: "A well-planned road alignment optimizes construction and maintenance costs and enhances safety, but it does not directly cause a decrease in the population of an area."
                },
                {
                    id: "cm9q089",
                    src: "TRAN808-00089",
                    text: "Obligatory point through which the alignment should not pass are",
                    options: [
                        { key: "a", text: "Intermediate town" },
                        { key: "b", text: "Religious structure and costly structure" },
                        { key: "c", text: "Important cities" },
                        { key: "d", text: "Stable road section" }
                    ],
                    answer: "b",
                    explanation: "Obligatory points are key locations that an alignment must connect (e.g., towns). Points it should *avoid* are obstacles like religious sites, expensive buildings, or unstable areas to minimize cost and social impact."
                }
            ]
        },
        {
            id: "cm9wate",
            name: "Water Supply, Sanitation and Environment",
            subject: "Water Supply",
            accent: "blue",
            blurb: "11 questions drawn from the Water Supply, Sanitation and Environment bank.",
            questions: [
                {
                    id: "cm9q090",
                    src: "WATE813-00071",
                    text: "What is the definition of mitigation in the context of risk management?",
                    options: [
                        { key: "a", text: "The process of identifying and assessing potential risks" },
                        { key: "b", text: "The complete elimination of all risks within a system" },
                        { key: "c", text: "The implementation of strategies to reduce the impact or likelihood of identified risks" },
                        { key: "d", text: "The transfer of risks to external parties through insurance" }
                    ],
                    answer: "c",
                    explanation: "Mitigation is the deliberate action taken to reduce either the likelihood of an identified risk or the severity of its consequences. It is distinct from identifying and assessing risks, from transferring them by insurance, and from the impossible goal of eliminating them entirely."
                },
                {
                    id: "cm9q091",
                    src: "WATE813-00072",
                    text: "Which one among the following is the correct order of steps taken during the process of Environmental Impact Assessment (EIA)?",
                    options: [
                        { key: "a", text: "Scoping, Screening, Public Hearing, EIA, Issue of Environmental Clearance" },
                        { key: "b", text: "Screening, Public Hearing, Scoping, EIA, Issue of Environmental Clearance" },
                        { key: "c", text: "Screening, EIA, Scoping, Public Hearing, Issue of Environmental Clearance" },
                        { key: "d", text: "Screening, Scoping, EIA, Public Hearing, Issue of Environmental Clearance" }
                    ],
                    answer: "d",
                    explanation: "The sequence runs screening, to decide whether an assessment is needed at all, then scoping, to fix its terms of reference, then the assessment study itself, then public hearing, and finally the issue of environmental clearance."
                },
                {
                    id: "cm9q092",
                    src: "WATE813-00073",
                    text: "Variability in the rate of return is known as",
                    options: [
                        { key: "a", text: "Return" },
                        { key: "b", text: "Risk" },
                        { key: "c", text: "Interest" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "b",
                    explanation: "Risk in an investment sense is the variability of the return, that is how widely the actual outcome may differ from the expected one. It is measured by the standard deviation or variance of the return, not by its average value."
                },
                {
                    id: "cm9q093",
                    src: "WATE813-00074",
                    text: "Vulnerability analysis comes in which part of the Disaster Management Cycle",
                    options: [
                        { key: "a", text: "Response" },
                        { key: "b", text: "Preparedness" },
                        { key: "c", text: "Recovery" },
                        { key: "d", text: "mitigation" }
                    ],
                    answer: "b",
                    explanation: "Vulnerability analysis is carried out in the preparedness phase, before any event, so that the elements most likely to suffer can be identified and plans, resources and warning systems put in place for them."
                },
                {
                    id: "cm9q094",
                    src: "WATE813-00075",
                    text: "What term denotes reduction of risk to a threshold level?",
                    options: [
                        { key: "a", text: "mitigation" },
                        { key: "b", text: "acceptance" },
                        { key: "c", text: "transfer" },
                        { key: "d", text: "none of the above" }
                    ],
                    answer: "a",
                    explanation: "Mitigation is the reduction of risk to an acceptable threshold level. Acceptance means living with the residual risk, and transfer means passing the financial consequence to another party through insurance."
                },
                {
                    id: "cm9q095",
                    src: "WATE813-00076",
                    text: "Which ministry passes DRM strategy?",
                    options: [
                        { key: "a", text: "ministry of disaster risk management" },
                        { key: "b", text: "ministry of defense" },
                        { key: "c", text: "ministry of tourism" },
                        { key: "d", text: "ministry of home affairs" }
                    ],
                    answer: "d",
                    explanation: "In Nepal the Ministry of Home Affairs is the lead agency for disaster risk management, and it is through that ministry that the national DRM strategy and action plan are issued and coordinated."
                },
                {
                    id: "cm9q096",
                    src: "WATE813-00077",
                    text: "In which phase, detailed risk analysis is done?",
                    options: [
                        { key: "a", text: "Planning phase" },
                        { key: "b", text: "Feasibility study" },
                        { key: "c", text: "Evaluation phase" },
                        { key: "d", text: "Implementation phase" }
                    ],
                    answer: "a",
                    explanation: "Detailed risk analysis belongs to the planning phase, once the project concept has been approved, because that is when the design, cost and schedule are being fixed and there is still freedom to change them in response to what the analysis finds."
                },
                {
                    id: "cm9q097",
                    src: "WATE813-00078",
                    text: "What is EIA?",
                    options: [
                        { key: "a", text: "Environmental Impact Assessment (EIA) is a method for promoting rapid project development without considering its potential impact on the environment." },
                        { key: "b", text: "EIA is a systematic process used to evaluate the environmental consequences of a proposed project or development, aiming to identify and mitigate potential adverse effects on the environment." },
                        { key: "c", text: "EIA stands for Economic Investment Appraisal, focusing on financial considerations rather than environmental effects." },
                        { key: "d", text: "Environmental Impact Assessment (EIA) is a process that intentionally overlooks potential negative effects of a project on the surrounding ecosystem." }
                    ],
                    answer: "b",
                    explanation: "Environmental impact assessment is the systematic process of predicting the environmental consequences of a proposed development before it is approved, so that adverse effects can be avoided, reduced or compensated and the decision can be taken with them in view."
                },
                {
                    id: "cm9q098",
                    src: "WATE813-00079",
                    text: "In which of the following scoping is required?",
                    options: [
                        { key: "a", text: "BES" },
                        { key: "b", text: "IEE" },
                        { key: "c", text: "EIA" },
                        { key: "d", text: "TOR" }
                    ],
                    answer: "c",
                    explanation: "Scoping belongs to the full environmental impact assessment, where the terms of reference must be fixed and the significant issues, alternatives and study boundaries identified. An initial environmental examination is a much shorter screening-level study."
                },
                {
                    id: "cm9q099",
                    src: "WATE813-00080",
                    text: "What is included in an Impact assessment?",
                    options: [
                        { key: "a", text: "A detailed assessment of the planned project and selected alternatives compared to the baseline conditions" },
                        { key: "b", text: "Qualitative descriptions measuring high, medium and low impacts" },
                        { key: "c", text: "Quantitative descriptions such as indicating the cubic metres of water withdrawn, sewage produced, and pollutants released" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "An impact assessment covers all of these: the project and its alternatives compared against baseline conditions, qualitative gradings of high, medium and low significance, and quantitative measures such as water withdrawn, sewage generated and pollutants released."
                },
                {
                    id: "cm9q100",
                    src: "WATE813-00081",
                    text: "When was the first environmental act introduced in Nepal?",
                    options: [
                        { key: "a", text: "1993" },
                        { key: "b", text: "1997" },
                        { key: "c", text: "2001" },
                        { key: "d", text: "1994" }
                    ],
                    answer: "a",
                    explanation: "Nepal's first environmental legislation, the Environment Protection Act, dates from 1993, that is 2053 BS in the Nepali calendar, with the accompanying rules following shortly afterwards."
                }
            ]
        }
    ]
};

/* Registered lazily — js/civil.js injects this file when the set is opened. */
window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["civil-9"] = CIVIL_MODEL_9;
