/* ============================================================
   CIVIL MODEL SET 31 — Civil Engineering licence-style model paper
   100 questions · 120 minutes · no negative marking

     Basic Civil Engineering...................  14
     Structural Mechanics......................  10
     Design of Structures......................   9
     Soil Mechanics and Foundation.............  13
     Basic Water Resources Engineering.........  11
     Hydropower................................  10
     Irrigation and Drainage...................  11
     Transportation............................  11
     Water Supply, Sanitation and Environment..  11

   Generated from the civil engineering question bank; every bank
   question is used in exactly one set. Identical duplicate options
   were collapsed, and the key was rotated across a/b/c/d except on
   questions whose options refer to other options.
   The "src" field on each question is its id in the source bank.
   ============================================================ */
const CIVIL_MODEL_31 = {
    day: 61,
    kind: "model",
    badge: { top: "Model", main: "C31" },
    title: "Civil Model Set 31",
    subtitle: "Civil Engineering · 9 subjects",
    durationMinutes: 120,
    negativeMarking: 0,
    chapters: [
        {
            id: "cm31basi",
            name: "Basic Civil Engineering",
            subject: "Basic Civil",
            accent: "blue",
            blurb: "14 questions drawn from the Basic Civil Engineering bank.",
            questions: [
                {
                    id: "cm31q001",
                    src: "BASI674-00392",
                    text: "A portion of an embankment having a uniform up-gradient 1 in 500 is circular with radius 1000 m of the centre line. It subtends 180° at the centre. If the height of the bank is 1 m at the lower end, and side slopes 2 : 1, the earth work involved.",
                    options: [
                        { key: "a", text: "25,500 m³" },
                        { key: "b", text: "26,500 m³" },
                        { key: "c", text: "28,500 m³" },
                        { key: "d", text: "27,500 m³" }
                    ],
                    answer: "d",
                    explanation: "(Description: This requires calculating the volume of a curved embankment section using the prismoidal formula or mean area method, considering the gradient and side slopes. The answer is a specific calculation result.)"
                },
                {
                    id: "cm31q002",
                    src: "BASI674-00394",
                    text: "The concrete work for the following part of the building of specified thickness is measured in square meters:",
                    options: [
                        { key: "a", text: "Root slabs" },
                        { key: "b", text: "Floors" },
                        { key: "c", text: "Wall panels" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "b",
                    explanation: "Concrete in floors and roofs of specified thickness is often measured in area (sq.m). Wall panels might be measured in sq.m for chhajjas or similar elements, but general wall concrete is in cum. Floors are the most standard answer."
                },
                {
                    id: "cm31q003",
                    src: "BASI674-00395",
                    text: "The expected out turn of 12 mm plastering with cement mortar is:",
                    options: [
                        { key: "a", text: "4.0 sq m" },
                        { key: "b", text: "8.0 sq m" },
                        { key: "c", text: "6.0 sq m" },
                        { key: "d", text: "10.0 sq m" }
                    ],
                    answer: "b",
                    explanation: "The standard out-turn for 12 mm cement plaster is about 8 square metres per mason per day. Out-turn figures like this are what convert a quantity into labour days when a rate is being analysed, and they vary with the thickness, the height above floor and the surface being plastered."
                },
                {
                    id: "cm31q004",
                    src: "BASI674-00396",
                    text: "The total length of a cranked bar through a distance (d) at 45° in case of a beam of effective length L, is",
                    options: [
                        { key: "a", text: "L + 0.42 d" },
                        { key: "b", text: "L − (0.42 d)" },
                        { key: "c", text: "L + (2 × 0.42 d)" },
                        { key: "d", text: "L − (2 × 0.4 d)" }
                    ],
                    answer: "c",
                    explanation: "For a bar cranked at both ends at 45°, the additional length due to each bend is 0.42d. Therefore, the total length is the effective span L plus twice this value (2 × 0.42d)."
                },
                {
                    id: "cm31q005",
                    src: "BASI674-00397",
                    text: "The measurement is made for stone work in square metre in case of",
                    options: [
                        { key: "a", text: "Wall facing" },
                        { key: "b", text: "Columns, lintels, copings" },
                        { key: "c", text: "Building work" },
                        { key: "d", text: "(a) and (b) of the above" }
                    ],
                    answer: "d",
                    explanation: "Stonework for wall facing and for elements like columns, lintels, and copings is measured in square meters. General stone masonry in building work is measured in cubic meters."
                },
                {
                    id: "cm31q006",
                    src: "BASI674-00398",
                    text: "Carpet area does not include the area of",
                    options: [
                        { key: "a", text: "Walls along with doors and other openings" },
                        { key: "b", text: "Bath room and lavatory" },
                        { key: "c", text: "Kitchen and pantry" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "a",
                    explanation: "Carpet area is the usable covered area within a building. It excludes the area occupied by walls. It typically includes bathrooms, lavatories, kitchens, and pantries."
                },
                {
                    id: "cm31q007",
                    src: "BASI674-00399",
                    text: "In case of laying gullies, siphons, intercepting traps, the cost includes",
                    options: [
                        { key: "a", text: "Setting and laying" },
                        { key: "b", text: "Bed correcting" },
                        { key: "c", text: "Connection to drains" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "The cost for these drainage items typically includes all operations: setting, laying, preparing the bed, and making connections to the main drain."
                },
                {
                    id: "cm31q008",
                    src: "BASI674-00400",
                    text: "Pick up the incorrect statement from the following.",
                    options: [
                        { key: "a", text: "The built up covered area at the floor level of any storey of a building is called plinth area" },
                        { key: "b", text: "The usable covered area of the rooms of any storey of a building is called carpet area" },
                        { key: "c", text: "The carpet area of a building along with area of its kitchen, pantry, store, lavatory, bath room and glazed veranda, is called floor area" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "c",
                    explanation: "The described area (carpet area + walls + other areas) is actually the definition of \"Floor Area\" or \"Built-up Area\", not just \"floor area\". The statement is incorrect."
                },
                {
                    id: "cm31q009",
                    src: "BASI674-00401",
                    text: "The inspection pit or chamber is a manhole provided in a base drainage system",
                    options: [
                        { key: "a", text: "At every change of direction" },
                        { key: "b", text: "At every change of gradient" },
                        { key: "c", text: "At every 30 m intervals" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "Manholes or inspection chambers are provided at all these locations in a drainage system to allow for access, inspection, and cleaning."
                },
                {
                    id: "cm31q010",
                    src: "BASI674-00402",
                    text: "The ‘centre line method’ is specially adopted for estimating.",
                    options: [
                        { key: "a", text: "Circular buildings" },
                        { key: "b", text: "Hexagonal buildings" },
                        { key: "c", text: "Octagonal buildings" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "The center line method is particularly useful for estimating the quantities of buildings with curved, hexagonal, or octagonal plans where walls are of uniform thickness and the plan is symmetrical."
                },
                {
                    id: "cm31q011",
                    src: "BASI674-00403",
                    text: "The diameter of a domestic sewer pipe laid at gradient 1 in 100 is recommended",
                    options: [
                        { key: "a", text: "100 mm" },
                        { key: "b", text: "150 mm" },
                        { key: "c", text: "200 mm" },
                        { key: "d", text: "175 mm" }
                    ],
                    answer: "b",
                    explanation: "Following are some recommendations for domestic sewer pipe. 100 mm for 1 in 60. 150 mm for 1 in 100. 200 mm for 1 in 120"
                },
                {
                    id: "cm31q012",
                    src: "BASI674-00404",
                    text: "The brickwork is measured in a square meter, in case of",
                    options: [
                        { key: "a", text: "Honeycomb brickwork" },
                        { key: "b", text: "Brick flat soling" },
                        { key: "c", text: "All options are correct" },
                        { key: "d", text: "Half brick walls or the partition" }
                    ],
                    answer: "c",
                    explanation: "Honeycomb brickwork (for ventilation), brick flat soling (a foundation layer), and half-brick thick partition walls are all typically measured in square meters, not cubic meters."
                },
                {
                    id: "cm31q013",
                    src: "BASI674-00405",
                    text: "Which of the following is the most accurate method for calculating obsolescence?",
                    options: [
                        { key: "a", text: "Straight-line method" },
                        { key: "b", text: "Constant percentage method" },
                        { key: "c", text: "Sinking fund method" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "c",
                    explanation: "The sinking fund method is considered more accurate for calculating depreciation (including obsolescence) as it accounts for the interest earned on the annually set aside depreciation fund."
                },
                {
                    id: "cm31q014",
                    src: "BASI674-00406",
                    text: "The method used for the valuation of open land",
                    options: [
                        { key: "a", text: "Rental method" },
                        { key: "b", text: "Development method" },
                        { key: "c", text: "Comparative method" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "c",
                    explanation: "The comparative method (comparing recent sale prices of similar plots) is the most common and direct method for valuing vacant land."
                }
            ]
        },
        {
            id: "cm31stru",
            name: "Structural Mechanics",
            subject: "Structural Mech",
            accent: "cyan",
            blurb: "10 questions drawn from the Structural Mechanics bank.",
            questions: [
                {
                    id: "cm31q015",
                    src: "STRU935-00328",
                    text: "The reaction at the supports will be vertical to the plane of the support if the frame structure rests on",
                    options: [
                        { key: "a", text: "roller supports" },
                        { key: "b", text: "fixed supports" },
                        { key: "c", text: "hinged supports" },
                        { key: "d", text: "All the above" }
                    ],
                    answer: "a",
                    explanation: "A roller support provides a reaction force that is perpendicular (normal) to the surface on which it rolls. If the support rests on a horizontal plane, the reaction is vertical. Other supports can have horizontal components."
                },
                {
                    id: "cm31q016",
                    src: "STRU935-00329",
                    text: "A diagram which shows the variations of the axial load for all sections of the span of a beam, is called",
                    options: [
                        { key: "a", text: "bending moment diagram" },
                        { key: "b", text: "shear force diagram" },
                        { key: "c", text: "thrust diagram" },
                        { key: "d", text: "stress diagram" }
                    ],
                    answer: "c",
                    explanation: "A thrust diagram, also known as an axial force diagram, graphically represents the axial force (tension or compression) at every section along the length of a structural member like a beam or truss."
                },
                {
                    id: "cm31q017",
                    src: "STRU935-00330",
                    text: "Beams of uniform strength are preferred to those of uniform section because these are economical for",
                    options: [
                        { key: "a", text: "heavy weights" },
                        { key: "b", text: "light weights" },
                        { key: "c", text: "short spans" },
                        { key: "d", text: "large spans" }
                    ],
                    answer: "d",
                    explanation: "Beams of uniform strength are designed so that the maximum bending stress is constant throughout the length by varying the cross-section. This optimizes material use, making them economical for large spans where bending moments are significant."
                },
                {
                    id: "cm31q018",
                    src: "STRU935-00331",
                    text: "The self weight of a beam will be taken as",
                    options: [
                        { key: "a", text: "Point load" },
                        { key: "b", text: "Uniformly distributed load" },
                        { key: "c", text: "Uniformly varying load" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "b",
                    explanation: "The self-weight of a prismatic beam (constant cross-section) is distributed evenly along its entire length. Therefore, it is modeled as a uniformly distributed load (UDL)."
                },
                {
                    id: "cm31q019",
                    src: "STRU935-00333",
                    text: "When bending moment diagram is vertical at a point, it indicates that there is ______ at that point:",
                    options: [
                        { key: "a", text: "Point load" },
                        { key: "b", text: "Moment" },
                        { key: "c", text: "Torsion" },
                        { key: "d", text: "Series of point load" }
                    ],
                    answer: "b",
                    explanation: "A vertical line in the Bending Moment Diagram represents an instantaneous finite change in the bending moment value. This is caused solely by the application of an external concentrated moment or couple at that point."
                },
                {
                    id: "cm31q020",
                    src: "STRU935-00334",
                    text: "The shape of the bending moment diagram over the length of a beam, having no external load, is always",
                    options: [
                        { key: "a", text: "Parabolic" },
                        { key: "b", text: "Cubical" },
                        { key: "c", text: "Linear" },
                        { key: "d", text: "Circular" }
                    ],
                    answer: "c",
                    explanation: "In the absence of external load (w=0) on a beam segment, the shear force (V) is constant. The bending moment (M), being the integral of V, is a linear function of x. Thus, the BMD is a straight line."
                },
                {
                    id: "cm31q021",
                    src: "STRU935-00335",
                    text: "If two forces acting at a joint are not along the straight line, then for the equilibrium of the joint",
                    options: [
                        { key: "a", text: "one of the forces must be zero" },
                        { key: "b", text: "forces must be equal and of the same sign" },
                        { key: "c", text: "forces must be equal in magnitude but opposite in sign" },
                        { key: "d", text: "each force must be zero" }
                    ],
                    answer: "d",
                    explanation: "For two forces to maintain equilibrium at a joint, they must be collinear, equal in magnitude, and opposite in direction. If they are not collinear, they will produce a resultant force and moment. The only way to satisfy equilibrium conditions is if both forces are zero."
                },
                {
                    id: "cm31q022",
                    src: "STRU935-00336",
                    text: "A simply supported beam of span L carries a concentrated load W at its mid-span. The maximum bending moment M is",
                    options: [
                        { key: "a", text: "WL/4" },
                        { key: "b", text: "WL/2" },
                        { key: "c", text: "WL/8" },
                        { key: "d", text: "WL/12" }
                    ],
                    answer: "a",
                    explanation: "For a simply supported beam with a central point load W, the reactions at each support are W/2. The maximum bending moment occurs at the mid-span and is calculated as (W/2) * (L/2) = WL/4."
                },
                {
                    id: "cm31q023",
                    src: "STRU935-00337",
                    text: "A simply supported beam of span L carries a concentrated load W at points C and D, L/3 from either support. The maximum bending moment M lies",
                    options: [
                        { key: "a", text: "at support" },
                        { key: "b", text: "under the loads" },
                        { key: "c", text: "between two loads" },
                        { key: "d", text: "at midspan" }
                    ],
                    answer: "b",
                    explanation: "With symmetrical point loads at L/3 from each support, the bending moment is maximum directly under each point load. The bending moment at the center is less than at these points."
                },
                {
                    id: "cm31q024",
                    src: "STRU935-00338",
                    text: "The shape of the bending moment diagram over the length of a beam, carrying a uniformly distributed load is always",
                    options: [
                        { key: "a", text: "linear" },
                        { key: "b", text: "circular" },
                        { key: "c", text: "parabolic" },
                        { key: "d", text: "cubical" }
                    ],
                    answer: "c",
                    explanation: "For a beam under a uniformly distributed load (UDL), the shear force diagram is linear. The bending moment diagram, being the integral of the shear force, is a parabolic curve (second degree)."
                }
            ]
        },
        {
            id: "cm31desi",
            name: "Design of Structures",
            subject: "Design of Str",
            accent: "slate",
            blurb: "9 questions drawn from the Design of Structures bank.",
            questions: [
                {
                    id: "cm31q025",
                    src: "DESI787-00285",
                    text: "What is variable action according to classification of actions by IS code?",
                    options: [
                        { key: "a", text: "Due to self weight" },
                        { key: "b", text: "Due to accidents" },
                        { key: "c", text: "Due to earthquake loads" },
                        { key: "d", text: "Due to construction and service stage loads" }
                    ],
                    answer: "d",
                    explanation: "Variable actions are those for which the variation in magnitude with time is not negligible. This includes imposed loads (live loads) from occupancy, movable equipment, and construction loads, but not accidental loads like earthquakes or fires, which are a separate category."
                },
                {
                    id: "cm31q026",
                    src: "DESI787-00286",
                    text: "What is P-Δ effect?",
                    options: [
                        { key: "a", text: "Second order moments arising from joint displaced" },
                        { key: "b", text: "Earthquake load" },
                        { key: "c", text: "Second order moments arising from member deflection" },
                        { key: "d", text: "Load due to shrinkage effect" }
                    ],
                    answer: "a",
                    explanation: "The P-Δ effect is a second-order geometric nonlinearity where the axial force (P) acting through the lateral displacement (Δ) of a story (joint displacement) creates additional overturning moments, potentially reducing the structural stability."
                },
                {
                    id: "cm31q027",
                    src: "DESI787-00287",
                    text: "Match the pair: A. Mass and gravitational effect, B. Mass and acceleration effect, C. Environmental effects with (i) wind load, (ii) Load due to settlement, (iii) Imposed load",
                    options: [
                        { key: "a", text: "A-i, B-ii, C-iii" },
                        { key: "b", text: "A-iii, B-i, C-ii" },
                        { key: "c", text: "A-iii, B-ii, C-i" },
                        { key: "d", text: "A-ii, B-iii, C-i" }
                    ],
                    answer: "b",
                    explanation: "A. Mass and gravitational effect directly relates to Dead Load (self-weight, Imposed load iii is incorrect here). B. Mass and acceleration effect relates to Seismic loads (not listed, but wind i is a pressure load). C. Environmental effects include wind (i) and snow. Settlement (ii) is a geotechnical effect. The closest logical match based on options is A-iii (Imposed load is often mistakenly paired, but gravitational effect is dead load, not imposed), but the intended correct answer from the options is likely A-iii, B-i, C-ii. Re-evaluating: A. Mass &amp; gravitational effect is Dead Load (not in options, so perhaps implied as imposed load iii is wrong). The correct pairing per standard codes is not perfectly listed. The the option A-iii, B-i, C-ii is the chosen answer from the list, meaning A (Mass &amp; gravitational effect) is matched with iii (Imposed load - which is incorrect, but it's the selected option)."
                },
                {
                    id: "cm31q028",
                    src: "DESI787-00288",
                    text: "What is characteristic load?",
                    options: [
                        { key: "a", text: "Seismic load" },
                        { key: "b", text: "Load which will be exceeded by certain probability during life of structure" },
                        { key: "c", text: "Load which will not be exceeded by certain probability during life of structure" },
                        { key: "d", text: "Pressure load" }
                    ],
                    answer: "c",
                    explanation: "The characteristic load is that value of a load which has a prescribed probability of not being exceeded during a specified reference period (the design life). It is a basis for structural design codes."
                },
                {
                    id: "cm31q029",
                    src: "DESI787-00289",
                    text: "Which of the following is not included in Imposed load classification?",
                    options: [
                        { key: "a", text: "Residential load" },
                        { key: "b", text: "Industrial load" },
                        { key: "c", text: "Construction load" },
                        { key: "d", text: "Snow load" }
                    ],
                    answer: "d",
                    explanation: "Imposed loads (live loads) are those liable to change due to the intended use or occupancy of the structure. Snow load is considered a separate environmental/variable action, not classified under the typical 'imposed load' category which covers occupancy loads."
                },
                {
                    id: "cm31q030",
                    src: "DESI787-00290",
                    text: "What is the minimum imposed load on roof trusses as per IS code?",
                    options: [
                        { key: "a", text: "0.75 kN/m²" },
                        { key: "b", text: "0.5 kN/m²" },
                        { key: "c", text: "0.9 kN/m²" },
                        { key: "d", text: "1.2 kN/m²" }
                    ],
                    answer: "a",
                    explanation: "As per IS 875 (Part 2), the minimum imposed load to be considered on roof trusses is 0.75 kN/m² of plan area for accessible roofs, unless a specific greater load is anticipated."
                },
                {
                    id: "cm31q031",
                    src: "DESI787-00291",
                    text: "For roofs of slope greater than 10°, the imposed load is reduced by ______ for every degree rise in slope.",
                    options: [
                        { key: "a", text: "0.02" },
                        { key: "b", text: "0.75" },
                        { key: "c", text: "0.5" },
                        { key: "d", text: "1.0" }
                    ],
                    answer: "b",
                    explanation: "IS 875 (Part 2) specifies that for roofs with a slope greater than 10 degrees, the imposed load is reduced by 0.75 kN/m² for every degree increase in slope over 10 degrees, up to a maximum reduction specified in the code."
                },
                {
                    id: "cm31q032",
                    src: "DESI787-00292",
                    text: "Which IS Code is used for designing a industrial building considering earthquake loads?",
                    options: [
                        { key: "a", text: "IS 800" },
                        { key: "b", text: "IS 875" },
                        { key: "c", text: "IS 1893 (Part-2)" },
                        { key: "d", text: "IS 456" }
                    ],
                    answer: "c",
                    explanation: "IS 1893 provides the criteria for earthquake resistant design of structures. Part 1 is for general buildings, and Part 2 is specifically for liquid-retaining tanks, but it is often referenced for industrial structures with specific masses. For general industrial buildings, IS 1893 (Part 1) is primary, but Part-2 is listed as the answer here, likely for specific industrial structures."
                },
                {
                    id: "cm31q033",
                    src: "DESI787-00293",
                    text: "For earthquake loads, axially loaded members have to resist ______",
                    options: [
                        { key: "a", text: "Tension only" },
                        { key: "b", text: "Compression only" },
                        { key: "c", text: "Bending moment" },
                        { key: "d", text: "Both tension and compression" }
                    ],
                    answer: "d",
                    explanation: "During an earthquake, the inertial forces cause reversals in the direction of loading. Therefore, members designed for axial loads (like bracings) must be designed to resist both tension and compression cycles."
                }
            ]
        },
        {
            id: "cm31soil",
            name: "Soil Mechanics and Foundation",
            subject: "Soil Mechanics",
            accent: "amber",
            blurb: "13 questions drawn from the Soil Mechanics and Foundation bank.",
            questions: [
                {
                    id: "cm31q034",
                    src: "SOIL136-00400",
                    text: "In conventional design, allowable bearing capacity should be taken smaller than which of the following value?",
                    options: [
                        { key: "a", text: "Safe bearing capacity and Allowable bearing pressure" },
                        { key: "b", text: "The pressure intensities beneath the footing" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "Both (a) and (b)" }
                    ],
                    answer: "a",
                    explanation: "The allowable bearing capacity is the maximum pressure the soil can carry without risk of shear failure or excessive settlement. It is derived from the ultimate bearing capacity by applying a factor of safety and must be less than the safe bearing capacity."
                },
                {
                    id: "cm31q035",
                    src: "SOIL136-00401",
                    text: "In cohesive soil, the pressure distribution beneath the footing is ______",
                    options: [
                        { key: "a", text: "Linear" },
                        { key: "b", text: "Non linear" },
                        { key: "c", text: "Zero" },
                        { key: "d", text: "None" }
                    ],
                    answer: "b",
                    explanation: "In cohesive soils (like clay), the pressure distribution under a flexible footing is non-linear, often approximated as parabolic or following a different pattern than the linear distribution assumed for cohesionless soils."
                },
                {
                    id: "cm31q036",
                    src: "SOIL136-00402",
                    text: "When do strap footings are used in foundation?",
                    options: [
                        { key: "a", text: "To transfer load of an isolated column" },
                        { key: "b", text: "Enhance between the columns are long" },
                        { key: "c", text: "All of the mentioned" },
                        { key: "d", text: "Two column loads are unequal" }
                    ],
                    answer: "c",
                    explanation: "Strap footings (or cantilever footings) are used when columns are located near a property line, when the distance between columns is large, or when the column loads are unequal. The strap beam connects them to help distribute the load evenly."
                },
                {
                    id: "cm31q037",
                    src: "SOIL136-00403",
                    text: "When two column loads are unequal, which of the possible footing can be provided?",
                    options: [
                        { key: "a", text: "Strap footing" },
                        { key: "b", text: "Rain footing" },
                        { key: "c", text: "Mast footing" },
                        { key: "d", text: "Trapezoidal combined footing" }
                    ],
                    answer: "d",
                    explanation: "A trapezoidal combined footing is often designed when two column loads are unequal. Its shape is adjusted so that the centroid of the footing area coincides with the resultant of the two column loads, ensuring uniform soil pressure."
                },
                {
                    id: "cm31q038",
                    src: "SOIL136-00404",
                    text: "The total settlement of a footing in clay is considered to be consisting of ______ components.",
                    options: [
                        { key: "a", text: "Three" },
                        { key: "b", text: "One" },
                        { key: "c", text: "Two" },
                        { key: "d", text: "Four" }
                    ],
                    answer: "a",
                    explanation: "The total settlement (S) of a footing on clay is generally considered to have three components: immediate or elastic settlement (Si), primary consolidation settlement (Sc), and secondary compression settlement (Ss)."
                },
                {
                    id: "cm31q039",
                    src: "SOIL136-00405",
                    text: "The component \\( S_c \\) used in the total settlement of clay refers to which of the following?",
                    options: [
                        { key: "a", text: "Total settlement" },
                        { key: "b", text: "Consolidation settlement" },
                        { key: "c", text: "Immediate plastic settlement" },
                        { key: "d", text: "Settlement due to secondary consolidation of clay" }
                    ],
                    answer: "b",
                    explanation: "In soil mechanics notation, Sc typically represents the primary consolidation settlement, which is the settlement that occurs over time as water is expelled from the voids in saturated cohesive soils."
                },
                {
                    id: "cm31q040",
                    src: "SOIL136-00406",
                    text: "The immediate settlement can be computed from the expression, based on ______.",
                    options: [
                        { key: "a", text: "Theory of plasticity" },
                        { key: "b", text: "Terraghi's analysis" },
                        { key: "c", text: "Theory of elasticity" },
                        { key: "d", text: "Pressure distribution" }
                    ],
                    answer: "c",
                    explanation: "Immediate (or elastic) settlement is calculated using theories based on linear elasticity, often employing influence factors that depend on the shape and rigidity of the footing."
                },
                {
                    id: "cm31q041",
                    src: "SOIL136-00407",
                    text: "The influence factor for rigid square footing is ______.",
                    options: [
                        { key: "a", text: "0.88" },
                        { key: "b", text: "1.06" },
                        { key: "c", text: "1.7" },
                        { key: "d", text: "0.82" }
                    ],
                    answer: "d",
                    explanation: "The influence factor (If) for calculating immediate settlement of a rigid square footing on the surface of an elastic medium is typically taken as 0.82. This value is derived from elastic theory."
                },
                {
                    id: "cm31q042",
                    src: "SOIL136-00408",
                    text: "The value of \\( E_s \\) used in the immediate settlement equation, can be found out using ______.",
                    options: [
                        { key: "a", text: "Compression test" },
                        { key: "b", text: "Translal test" },
                        { key: "c", text: "Direct shear test" },
                        { key: "d", text: "Rankine's theory" }
                    ],
                    answer: "a",
                    explanation: "The modulus of elasticity of soil (Es) is most commonly determined from the stress-strain curve obtained from an unconfined compression test or a triaxial compression test on an undisturbed soil sample."
                },
                {
                    id: "cm31q043",
                    src: "SOIL136-00409",
                    text: "A combined footing may be rectangular in shape if both the columns carry ______.",
                    options: [
                        { key: "a", text: "Unequal loads" },
                        { key: "b", text: "Equal loads" },
                        { key: "c", text: "No load" },
                        { key: "d", text: "All" }
                    ],
                    answer: "b",
                    explanation: "A rectangular combined footing is simplest to design and is feasible when the two columns carry equal loads and are spaced such that the resultant force is at the centroid of a rectangle."
                },
                {
                    id: "cm31q044",
                    src: "SOIL136-00410",
                    text: "The influence factor \\( N \\)/\\( r \\) of rigid rectangular footing with \\( \\frac{1}{n} = 1.5 \\) is ______.",
                    options: [
                        { key: "a", text: "0.88" },
                        { key: "b", text: "0.82" },
                        { key: "c", text: "1.06" },
                        { key: "d", text: "1" }
                    ],
                    answer: "c",
                    explanation: "The question likely refers to the influence factor (If) for settlement. For a rigid rectangular footing with a length-to-width ratio (L/B) of 1.5, a typical value from elastic theory is approximately 1.06."
                },
                {
                    id: "cm31q045",
                    src: "SOIL136-00411",
                    text: "The design of rigid rectangular combined footing consist in determining the ______.",
                    options: [
                        { key: "a", text: "Pressure distribution" },
                        { key: "b", text: "Shear force" },
                        { key: "c", text: "Safe bearing pressure" },
                        { key: "d", text: "Location of center of gravity of column" }
                    ],
                    answer: "d",
                    explanation: "A key initial step in designing a combined footing is to determine the location of the resultant of the column loads (the center of gravity of the total load). The footing is then shaped and sized so its centroid coincides with this resultant to achieve uniform soil pressure."
                },
                {
                    id: "cm31q046",
                    src: "SOIL136-00412",
                    text: "If the independent spread footing of two columns are connected by a beam, it is called ______.",
                    options: [
                        { key: "a", text: "Strap footing" },
                        { key: "b", text: "Combined footing" },
                        { key: "c", text: "Trapezoidal combined footing" },
                        { key: "d", text: "Raft footing" }
                    ],
                    answer: "a",
                    explanation: "A strap footing consists of two isolated spread footings connected by a rigid beam (called a strap or connector). The strap beam helps to transfer the load from an eccentrically loaded footing to the other."
                }
            ]
        },
        {
            id: "cm31watr",
            name: "Basic Water Resources Engineering",
            subject: "Water Resources",
            accent: "emerald",
            blurb: "11 questions drawn from the Basic Water Resources Engineering bank.",
            questions: [
                {
                    id: "cm31q047",
                    src: "WATE701-00350",
                    text: "Direct runoff is made up of",
                    options: [
                        { key: "a", text: "surface runoff, infiltration and evapotranspiration" },
                        { key: "b", text: "surface runoff, prompt interflow and channel precipitation" },
                        { key: "c", text: "overland flow and infiltration" },
                        { key: "d", text: "rainfall and evaporation" }
                    ],
                    answer: "b",
                    explanation: "Direct runoff is the part of the runoff that reaches the stream shortly after a rainfall event. It includes: 1) Surface runoff (overland flow), 2) Prompt interflow (subsurface flow that moves quickly to the stream), and 3) Rainfall that falls directly onto the channel surface."
                },
                {
                    id: "cm31q048",
                    src: "WATE701-00351",
                    text: "The excess precipitation which moves over the land surfaces to reach smaller channels is known as",
                    options: [
                        { key: "a", text: "surplus flow" },
                        { key: "b", text: "deficit flow" },
                        { key: "c", text: "overland flow" },
                        { key: "d", text: "All of these" }
                    ],
                    answer: "c",
                    explanation: "Overland flow is the movement of water over the land surface, downslope toward a channel, after the soil's infiltration capacity has been exceeded or when the surface is impermeable."
                },
                {
                    id: "cm31q049",
                    src: "WATE701-00352",
                    text: "The part of runoff which enters the stream immediately after the rainfall is known as",
                    options: [
                        { key: "a", text: "Indirect runoff" },
                        { key: "b", text: "Direct runoff" },
                        { key: "c", text: "Baseflow" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "b",
                    explanation: "Direct runoff is the portion of the runoff that enters the stream quickly in response to a specific rainfall event, as opposed to baseflow, which is the delayed, sustained flow from groundwater sources."
                },
                {
                    id: "cm31q050",
                    src: "WATE701-00353",
                    text: "A part of precipitation that inflicts and move laterally through upper crust of the soil and returns to the surface at some location away from the point of entry into the soil is called",
                    options: [
                        { key: "a", text: "Infiltration capacity" },
                        { key: "b", text: "Interflow" },
                        { key: "c", text: "Ground flow" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "b",
                    explanation: "Interflow, or subsurface runoff, is the portion of precipitation that infiltrates the soil and then moves laterally through the upper soil layers (above the main groundwater level) until it discharges into a stream or returns to the surface."
                },
                {
                    id: "cm31q051",
                    src: "WATE701-00354",
                    text: "A plot of the cumulative discharge volume against time plotted in chronological order is known as",
                    options: [
                        { key: "a", text: "Flow duration curve" },
                        { key: "b", text: "Flow mass curve" },
                        { key: "c", text: "Rating curve" },
                        { key: "d", text: "Shield’s curve" }
                    ],
                    answer: "b",
                    explanation: "A mass curve (or mass diagram) is a plot of the cumulative quantity of water (volume) that has passed a point in a stream over a period of time, plotted against time."
                },
                {
                    id: "cm31q052",
                    src: "WATE701-00355",
                    text: "The flow mass curve is an integral curve of",
                    options: [
                        { key: "a", text: "hystograph" },
                        { key: "b", text: "flow duration curve" },
                        { key: "c", text: "Hydrograph" },
                        { key: "d", text: "S-curve" }
                    ],
                    answer: "c",
                    explanation: "A hydrograph is a plot of discharge (Q) vs. time (t). The flow mass curve is the integral (or cumulative sum) of the hydrograph, representing the total volume V = ∫ Q dt up to any time t."
                },
                {
                    id: "cm31q053",
                    src: "WATE701-00356",
                    text: "The total rainfall in a catchment of an area 1200 km² during 6-hr storm is 16 cm while the surface runoff due to the storm is 1.2 * 108 m². The φ-index is",
                    options: [
                        { key: "a", text: "0.1 cm/h" },
                        { key: "b", text: "0.2 cm/h" },
                        { key: "c", text: "cannot say" },
                        { key: "d", text: "1 cm/h" }
                    ],
                    answer: "d",
                    explanation: "The φ-index is the constant rate of rainfall loss (infiltration) such that the volume of rainfall excess equals the volume of direct runoff. Total rainfall volume = 16 cm * 1200 km². Runoff volume is given as 1.2e8 m³. Convert both volumes to the same units (e.g., m³) and find the depth of runoff. The depth of rainfall excess = total rainfall depth - losses. Losses = φ * storm duration (6 hr). Solve for φ. The calculation yields φ = 1 cm/hr."
                },
                {
                    id: "cm31q054",
                    src: "WATE701-00357",
                    text: "Baseflow separation is performed on",
                    options: [
                        { key: "a", text: "flood hydrograph to obtain the magnitude of effective rainfall" },
                        { key: "b", text: "Unit hydrograph to get the direct runoff hydrograph" },
                        { key: "c", text: "flood hydrograph to obtain rainfall hydrograph" },
                        { key: "d", text: "hydrographs of effluent streams only" }
                    ],
                    answer: "a",
                    explanation: "Baseflow separation is the process of dividing the total streamflow hydrograph during a storm into two components: direct runoff (from the storm) and baseflow (from groundwater). The volume under the direct runoff portion is used to calculate the total effective rainfall (rainfall excess) depth."
                },
                {
                    id: "cm31q055",
                    src: "WATE701-00358",
                    text: "If a gauging section is having shifting control due to backwater effects, then",
                    options: [
                        { key: "a", text: "the section is useless for stream gauging purpose" },
                        { key: "b", text: "A loop rating curve result" },
                        { key: "c", text: "the discharge is determined by area velocity method" },
                        { key: "d", text: "a secondary gauge is installed downstream." }
                    ],
                    answer: "b",
                    explanation: "Backwater effects cause the stage-discharge relationship to become hysteretic. For the same stage (water level), the discharge is higher on the rising limb of a flood wave and lower on the falling limb. This results in a looped rating curve instead of a single, unique curve."
                },
                {
                    id: "cm31q056",
                    src: "WATE701-00359",
                    text: "Which of the following method is used to estimate the flood discharge based on high water marks left over in the past?",
                    options: [
                        { key: "a", text: "Area velocity method" },
                        { key: "b", text: "Ultrasonic method" },
                        { key: "c", text: "Slope area method" },
                        { key: "d", text: "Moving boat method" }
                    ],
                    answer: "c",
                    explanation: "The slope-area method is used to estimate peak flood discharges after the event has occurred. It uses high-water marks to determine the cross-sectional area and water surface slope (energy gradient) of the flood, and then applies a flow resistance equation (like Manning's equation) to compute the discharge."
                },
                {
                    id: "cm31q057",
                    src: "WATE701-00360",
                    text: "The dilution method of stream gauging is ideally suited for measuring discharges in",
                    options: [
                        { key: "a", text: "Large alluvial river" },
                        { key: "b", text: "Flood flow in mountain stream" },
                        { key: "c", text: "Steady flow in small turbulent stream" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "c",
                    explanation: "The dilution (or chemical gaging) method is highly accurate for measuring discharge in small, turbulent streams where current meters are ineffective. It involves injecting a tracer and measuring its concentration downstream. It works best under steady flow conditions."
                }
            ]
        },
        {
            id: "cm31hydr",
            name: "Hydropower",
            subject: "Hydropower",
            accent: "cyan",
            blurb: "10 questions drawn from the Hydropower bank.",
            questions: [
                {
                    id: "cm31q058",
                    src: "HYDR626-00281",
                    text: "The minimum power which a hydropower plant can generate throughout the year is called as ______.",
                    options: [
                        { key: "a", text: "firm power" },
                        { key: "b", text: "power plant capacity" },
                        { key: "c", text: "power plant load" },
                        { key: "d", text: "water power" }
                    ],
                    answer: "a",
                    explanation: "Firm power is the guaranteed minimum amount of power that a hydroelectric plant can generate under the most adverse hydrological conditions, such as during a drought. It is a critical metric for reliability and planning."
                },
                {
                    id: "cm31q059",
                    src: "HYDR626-00282",
                    text: "Hydroelectric power plant is ______.",
                    options: [
                        { key: "a", text: "Thermal power plant" },
                        { key: "b", text: "Hydro-electric power plant" },
                        { key: "c", text: "Nuclear power plant" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "b",
                    explanation: "This is a trick question to confirm the identity of the plant itself. A hydroelectric power plant generates electricity from the energy of flowing water."
                },
                {
                    id: "cm31q060",
                    src: "HYDR626-00283",
                    text: "Operating charges are minimum in the case of ...... for same power output",
                    options: [
                        { key: "a", text: "Gas turbine plant" },
                        { key: "b", text: "Thermal plant" },
                        { key: "c", text: "Hydel plant" },
                        { key: "d", text: "Nuclear plant" }
                    ],
                    answer: "c",
                    explanation: "Operating charges are minimal for hydroelectric (Hydel) plants because they do not require fuel to operate. Their primary cost is the initial construction and periodic maintenance, unlike thermal or nuclear plants which have significant ongoing fuel costs."
                },
                {
                    id: "cm31q061",
                    src: "HYDR626-00284",
                    text: "The cheapest plant in operation and maintenance is ......",
                    options: [
                        { key: "a", text: "Steam power plant" },
                        { key: "b", text: "Nuclear power plant" },
                        { key: "c", text: "Hydro-electric power plant" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "c",
                    explanation: "Hydro-electric power plants have the lowest operation and maintenance (O&amp;M) costs. They have no fuel expenditure, and their simple, robust technology requires less maintenance compared to the complex systems of steam, nuclear, or gas turbine plants."
                },
                {
                    id: "cm31q062",
                    src: "HYDR626-00285",
                    text: "The annual depreciation of a hydro power plant is about ......",
                    options: [
                        { key: "a", text: "0.5% to 1.5%" },
                        { key: "b", text: "10% to 15%" },
                        { key: "c", text: "15% to 20%" },
                        { key: "d", text: "20% to 25%" }
                    ],
                    answer: "a",
                    explanation: "Hydroelectric plants have a very long lifespan (often 50-100 years) and are built with durable materials like concrete and steel. Consequently, their value depreciates at a very slow annual rate."
                },
                {
                    id: "cm31q063",
                    src: "HYDR626-00286",
                    text: "The installed capacity of first hydro power plant of Nepal is",
                    options: [
                        { key: "a", text: "100kw" },
                        { key: "b", text: "500kw" },
                        { key: "c", text: "200kw" },
                        { key: "d", text: "800kw" }
                    ],
                    answer: "b",
                    explanation: "The Pharping Hydro Power Plant, located south of Kathmandu, was the first hydroelectric plant in Nepal. It was built in 1911 and had an installed capacity of 500 kW."
                },
                {
                    id: "cm31q064",
                    src: "HYDR626-00287",
                    text: "when was first hydro power plant generated in Nepal?",
                    options: [
                        { key: "a", text: "1912 AD" },
                        { key: "b", text: "1922 AD" },
                        { key: "c", text: "1911 AD" },
                        { key: "d", text: "1901 AD" }
                    ],
                    answer: "c",
                    explanation: "The Pharping Hydro Power Plant (500 kW) began operation in 1911 AD (1968 BS), making it one of the oldest hydroelectric plants in Asia."
                },
                {
                    id: "cm31q065",
                    src: "HYDR626-00288",
                    text: "Among the hydropower plants given below ... is not a peaking-ROR type.",
                    options: [
                        { key: "a", text: "Kaligandaki A" },
                        { key: "b", text: "Marsyangdi" },
                        { key: "c", text: "Upper Tamakoshi" },
                        { key: "d", text: "Kulekhani-1" }
                    ],
                    answer: "d",
                    explanation: "Kulekhani-1 is a storage-type project with a reservoir, allowing it to store water and generate power during peak demand periods. Peaking-ROR (Run-of-River) typically refers to ROR plants with some pondage for short-term storage, but Kulekhani is a full reservoir plant."
                },
                {
                    id: "cm31q066",
                    src: "HYDR626-00289",
                    text: "Nepal Electricity Authority(NEA) is established under the",
                    options: [
                        { key: "a", text: "Nepal Electricity Act 1984" },
                        { key: "b", text: "Nepal Electricity Act 1948" },
                        { key: "c", text: "Nepal Electricity Act 1994" },
                        { key: "d", text: "Nepal Electricity Act 1949" }
                    ],
                    answer: "a",
                    explanation: "The Nepal Electricity Authority (NEA) was formed in 1984 (2041 BS) under the Nepal Electricity Authority Act, 1984, by merging the Department of Electricity and the Nepal Electricity Corporation."
                },
                {
                    id: "cm31q067",
                    src: "HYDR626-00290",
                    text: "What is the economically feasible power potential of Nepal?",
                    options: [
                        { key: "a", text: "85 GW" },
                        { key: "b", text: "42 GW" },
                        { key: "c", text: "44 GW" },
                        { key: "d", text: "44000 GW" }
                    ],
                    answer: "b",
                    explanation: "Nepal's theoretical hydropower potential is estimated to be around 83,000 MW. However, the technically feasible potential is about 42,000 MW (42 GW), which is the capacity that can be developed considering technical, economic, and environmental constraints."
                }
            ]
        },
        {
            id: "cm31irri",
            name: "Irrigation and Drainage",
            subject: "Irrigation",
            accent: "emerald",
            blurb: "11 questions drawn from the Irrigation and Drainage bank.",
            questions: [
                {
                    id: "cm31q068",
                    src: "IRRI951-00322",
                    text: "Due to the unequal erosion of the river banks, the ... section is developed in the river course",
                    options: [
                        { key: "a", text: "Attracting" },
                        { key: "b", text: "Meandering" },
                        { key: "c", text: "None of these" },
                        { key: "d", text: "deflecting" }
                    ],
                    answer: "b",
                    explanation: "Meandering refers to the sinuous, winding path a river takes. This pattern develops over time due to helicoidal flow, where water spirals, causing unequal erosion on the outer banks (cut banks) and deposition on the inner banks (point bars)."
                },
                {
                    id: "cm31q069",
                    src: "IRRI951-00323",
                    text: "A river training work is generally required when the river is",
                    options: [
                        { key: "a", text: "Meandering" },
                        { key: "b", text: "Aggrading" },
                        { key: "c", text: "Degrading" },
                        { key: "d", text: "All the above" }
                    ],
                    answer: "d",
                    explanation: "River training works are necessary to correct and stabilize a river's course. This is needed when a river is meandering (shifting path), aggrading (raising its bed due to sediment deposition), or degrading (lowering its bed due to excessive erosion)."
                },
                {
                    id: "cm31q070",
                    src: "IRRI951-00324",
                    text: "Finally formed berms in canals are provided for",
                    options: [
                        { key: "a", text: "Protection of banks erosion by the waves" },
                        { key: "b", text: "Control of seepage losses" },
                        { key: "c", text: "Strengthening of banks" },
                        { key: "d", text: "All the above" }
                    ],
                    answer: "d",
                    explanation: "A berm is a horizontal ledge in a canal bank. The final, formed berm serves multiple purposes: it strengthens the bank, helps control seepage, and provides protection against wave action and erosion."
                },
                {
                    id: "cm31q071",
                    src: "IRRI951-00325",
                    text: "Canals constructed for draining off water from water logged areas, are known",
                    options: [
                        { key: "a", text: "Inundation canals" },
                        { key: "b", text: "Drains" },
                        { key: "c", text: "Valley canals" },
                        { key: "d", text: "Contour canals" }
                    ],
                    answer: "b",
                    explanation: "Canals or channels built specifically to remove excess water from waterlogged land are called drains or drainage canals. Their primary function is to lower the water table and carry away surplus water."
                },
                {
                    id: "cm31q072",
                    src: "IRRI951-00326",
                    text: "The river training works are adopted on a river",
                    options: [
                        { key: "a", text: "to pass high flood discharge safely and quickly through the breach" },
                        { key: "b", text: "to direct and guide the river flow" },
                        { key: "c", text: "to reduce bank erosion to a minimum" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "d",
                    explanation: "The comprehensive objective of river training works is to ensure safe passage of floods, guide the river along a desired course, and minimize damage from bank erosion. All the listed options are key purposes."
                },
                {
                    id: "cm31q073",
                    src: "IRRI951-00327",
                    text: "Study the following statements. (i) Levees are constructed parallel to river flow, (ii) Spurs are constructed transverse to river flow, (iii) Groynes are constructed transverse to river flow. The correct answer is...",
                    options: [
                        { key: "a", text: "(i) and (ii)" },
                        { key: "b", text: "(i) and (iii)." },
                        { key: "c", text: "(iii) and (iv)" },
                        { key: "d", text: "(ii) and (iii)" }
                    ],
                    answer: "d",
                    explanation: "Levees (or dykes) are embankments built parallel to the river flow to contain floods. Spurs and groynes (a type of spur) are structures built projecting from the bank, transverse (perpendicular or at an angle) to the river flow to deflect current and control erosion."
                },
                {
                    id: "cm31q074",
                    src: "IRRI951-00328",
                    text: "A deflecting groyne in a river is",
                    options: [
                        { key: "a", text: "Inclined towards upstream" },
                        { key: "b", text: "Perpendicular to bank" },
                        { key: "c", text: "Inclined towards downstream" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "b",
                    explanation: "A deflecting groyne is built perpendicular (at a right angle) to the bank. Its length is usually short, and it is designed to simply deflect the current away from the bank without significantly altering the river's course upstream or downstream."
                },
                {
                    id: "cm31q075",
                    src: "IRRI951-00329",
                    text: "A repelling groyne is aligned",
                    options: [
                        { key: "a", text: "Pointing downstream" },
                        { key: "b", text: "Pointing upstream" },
                        { key: "c", text: "Perpendicular to bank" },
                        { key: "d", text: "Parallel to bank" }
                    ],
                    answer: "b",
                    explanation: "A repelling groyne is aligned pointing upstream (inclined towards the direction of the flow). This alignment is designed to repel the river current away from the bank, creating a slack water zone that encourages sediment deposition near the bank."
                },
                {
                    id: "cm31q076",
                    src: "IRRI951-00330",
                    text: "Generally the weir is aligned at right angles to the direction of the main river current because",
                    options: [
                        { key: "a", text: "It ensures less length of the weir" },
                        { key: "b", text: "It gives better discharging capacity" },
                        { key: "c", text: "It is economical" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "d",
                    explanation: "Aligning a weir perpendicular to the main current ensures the structure presents the shortest possible length to the flow, which is more economical to build. This alignment also allows for the most efficient water approach, maximizing its discharge capacity."
                },
                {
                    id: "cm31q077",
                    src: "IRRI951-00331",
                    text: "Irrigation canals are generally aligned along",
                    options: [
                        { key: "a", text: "Contour line" },
                        { key: "b", text: "Straight line" },
                        { key: "c", text: "Valley line" },
                        { key: "d", text: "Water shed" }
                    ],
                    answer: "d",
                    explanation: "Irrigation canals are typically aligned along a watershed (or ridge line). This allows for gravity flow to both sides of the canal, enabling the command of maximum area for irrigation. This is known as a 'ridge canal' or 'watershed canal'."
                },
                {
                    id: "cm31q078",
                    src: "IRRI951-00332",
                    text: "The method used for training of rivers is",
                    options: [
                        { key: "a", text: "guide bank" },
                        { key: "b", text: "dyke or levee" },
                        { key: "c", text: "groove" },
                        { key: "d", text: "all of these" }
                    ],
                    answer: "d",
                    explanation: "River training employs various methods. Guide banks (or guide levees) direct flow through a structure. Dykes/levees confine flood water. Groynes (sometimes misspelled as grooves) project from the bank to deflect current. All are valid river training methods."
                }
            ]
        },
        {
            id: "cm31tran",
            name: "Transportation",
            subject: "Transportation",
            accent: "rose",
            blurb: "11 questions drawn from the Transportation bank.",
            questions: [
                {
                    id: "cm31q079",
                    src: "TRAN808-00330",
                    text: "In cement concrete slabs, bars are installed in",
                    options: [
                        { key: "a", text: "Expansion joints" },
                        { key: "b", text: "Contraction joints" },
                        { key: "c", text: "Warping joints" },
                        { key: "d", text: "Longitudinal joints" }
                    ],
                    answer: "b",
                    explanation: "Dowel bars, plain and greased at one end, are set across contraction joints so that load transfers from one slab to the next while the slabs can still shorten freely as the concrete shrinks. Tie bars, which are deformed and fully bonded, are used at longitudinal joints instead, where movement must be prevented."
                },
                {
                    id: "cm31q080",
                    src: "TRAN808-00331",
                    text: "The general requirement in reinforced concrete road is to place reinforcement",
                    options: [
                        { key: "a", text: "Near the top of the slab" },
                        { key: "b", text: "At the middle" },
                        { key: "c", text: "Near the bottom of the slab" },
                        { key: "d", text: "Equally distributed at top and bottom" }
                    ],
                    answer: "c",
                    explanation: "Maximum tensile stress under wheel loads occurs at the bottom of the slab, so reinforcement is placed there to resist these stresses."
                },
                {
                    id: "cm31q081",
                    src: "TRAN808-00332",
                    text: "Flattening and smoothing the road quickly by scrapping is called",
                    options: [
                        { key: "a", text: "Compaction" },
                        { key: "b", text: "Consolidation" },
                        { key: "c", text: "Ditch digging" },
                        { key: "d", text: "Grading" }
                    ],
                    answer: "d",
                    explanation: "Grading is the process of shaping and leveling the subgrade or base course to the desired profile using machinery like motor graders."
                },
                {
                    id: "cm31q082",
                    src: "TRAN808-00333",
                    text: "Warping of concrete pavement causes",
                    options: [
                        { key: "a", text: "Reversal of stresses" },
                        { key: "b", text: "Frictional stresses" },
                        { key: "c", text: "Direct compressive stresses" },
                        { key: "d", text: "Direct tensile stresses" }
                    ],
                    answer: "a",
                    explanation: "Warping comes from the temperature difference between the top and bottom of a slab. During the day the top is hotter and tries to expand, putting the bottom in tension; at night the gradient reverses. The stresses therefore alternate in sign twice a day, and it is that reversal which fatigues the concrete."
                },
                {
                    id: "cm31q083",
                    src: "TRAN808-00334",
                    text: "Benkelman Beam is used for",
                    options: [
                        { key: "a", text: "Measuring temperature gradient" },
                        { key: "b", text: "Design of pavement overlay by deflection" },
                        { key: "c", text: "Part of girders system bridge" },
                        { key: "d", text: "Supporting structure for scaffolding" }
                    ],
                    answer: "b",
                    explanation: "The Benkelman Beam measures pavement deflection under a moving wheel load, used for evaluating structural capacity and overlay design."
                },
                {
                    id: "cm31q084",
                    src: "TRAN808-00335",
                    text: "In water bound macadam roads, the binding material is",
                    options: [
                        { key: "a", text: "Sand" },
                        { key: "b", text: "Bitumen" },
                        { key: "c", text: "Crushed aggregate dust" },
                        { key: "d", text: "Cement" }
                    ],
                    answer: "c",
                    explanation: "In WBM, the binding action is provided by stone dust and water, which lock the coarse aggregates together through compaction."
                },
                {
                    id: "cm31q085",
                    src: "TRAN808-00336",
                    text: "Which method is recommended by IRC for flexible pavement design?",
                    options: [
                        { key: "a", text: "Group index method" },
                        { key: "b", text: "CBR method" },
                        { key: "c", text: "Westergaard method" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "b",
                    explanation: "IRC recommends the CBR method for flexible pavements, in which the subgrade strength expressed as a CBR percentage and the cumulative standard axles decide the total thickness from the design curves. Westergaard's analysis belongs to rigid pavements and the group index method is now obsolete."
                },
                {
                    id: "cm31q086",
                    src: "TRAN808-00337",
                    text: "In winter during mid-day critical stress combination at edge of concrete pavement is",
                    options: [
                        { key: "a", text: "Load - warping - frictional" },
                        { key: "b", text: "Load + warping - frictional" }
                    ],
                    answer: "a",
                    explanation: "In winter at midday the slab top is warmer than the bottom, so the warping stress at the edge relieves rather than adds to the load stress, and the frictional stress from contraction also acts to relieve it. The critical combination at the edge is therefore load minus warping minus friction."
                },
                {
                    id: "cm31q087",
                    src: "TRAN808-00338",
                    text: "The dowel bars are used in rigid pavements for",
                    options: [
                        { key: "a", text: "Resisting tensile stresses" },
                        { key: "b", text: "Transferring load between slabs" },
                        { key: "c", text: "Resisting bending stresses" },
                        { key: "d", text: "Resisting shear stresses" }
                    ],
                    answer: "b",
                    explanation: "Dowel bars transfer wheel load across a transverse joint so that the approaching slab shares the load with the one being left, which prevents faulting and rocking at the joint. They are deliberately smooth and greased on one side so they do not restrain the longitudinal movement of the slabs."
                },
                {
                    id: "cm31q088",
                    src: "TRAN808-00339",
                    text: "The Modulus of subgrade Reaction is determined by",
                    options: [
                        { key: "a", text: "Benkelman Beam" },
                        { key: "b", text: "Compression machine" },
                        { key: "c", text: "Plate-bearing equipment" },
                        { key: "d", text: "CBR machine" }
                    ],
                    answer: "c",
                    explanation: "The modulus of subgrade reaction k is measured by a plate bearing test, loading a 750 mm plate and recording the pressure needed to produce a settlement of 1.25 mm. The value feeds directly into Westergaard's rigid pavement equations, and it is corrected for plate size and for soaking."
                },
                {
                    id: "cm31q089",
                    src: "TRAN808-00340",
                    text: "Tack coat is provided",
                    options: [
                        { key: "a", text: "To increase skid resistance" },
                        { key: "b", text: "To prevent water ingress" },
                        { key: "c", text: "To smoothen the surface" },
                        { key: "d", text: "To ensure bond between old and new construction" }
                    ],
                    answer: "d",
                    explanation: "A tack coat is a thin bituminous layer applied to ensure a strong adhesive bond between existing pavement and new overlay."
                }
            ]
        },
        {
            id: "cm31wate",
            name: "Water Supply, Sanitation and Environment",
            subject: "Water Supply",
            accent: "blue",
            blurb: "11 questions drawn from the Water Supply, Sanitation and Environment bank.",
            questions: [
                {
                    id: "cm31q090",
                    src: "WATE813-00310",
                    text: "Temporary hardness in water is caused by... Of Ca and Mg:",
                    options: [
                        { key: "a", text: "bicarbonates" },
                        { key: "b", text: "Nitrates" },
                        { key: "c", text: "chlorides" },
                        { key: "d", text: "sulphates" }
                    ],
                    answer: "a",
                    explanation: "Temporary hardness is caused by the presence of dissolved bicarbonate salts of calcium and magnesium [Ca(HCO₃)₂ and Mg(HCO₃)₂]. It is called 'temporary' because it can be removed by boiling, which precipitates the carbonates."
                },
                {
                    id: "cm31q091",
                    src: "WATE813-00311",
                    text: "Which of the following is a waterborne disease?",
                    options: [
                        { key: "a", text: "Smallpox" },
                        { key: "b", text: "Cholera" },
                        { key: "c", text: "Malaria" },
                        { key: "d", text: "Tuberculosis" }
                    ],
                    answer: "b",
                    explanation: "Cholera is a classic waterborne disease caused by the bacterium *Vibrio cholerae*, which is spread primarily through ingestion of contaminated water. Smallpox is airborne, Malaria is vector-borne (mosquito), and Tuberculosis is primarily airborne."
                },
                {
                    id: "cm31q092",
                    src: "WATE813-00312",
                    text: "Water lost in theft and waste contributes to how much % of total consumption?",
                    options: [
                        { key: "a", text: "5" },
                        { key: "b", text: "10" },
                        { key: "c", text: "25" },
                        { key: "d", text: "20" }
                    ],
                    answer: "c",
                    explanation: "Unaccounted-for water (UFW), which includes losses from leakage (waste), unauthorized connections (theft), and metering inaccuracies, typically accounts for a significant portion of a system's water. A common estimate used in planning is around 15-25% of the total water production."
                },
                {
                    id: "cm31q093",
                    src: "WATE813-00313",
                    text: "Which is the correct statement regarding per capita demand?",
                    options: [
                        { key: "a", text: "Daily water required by an individual" },
                        { key: "b", text: "Water required for various purposes by a person" },
                        { key: "c", text: "Water required by an individual in a year" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "b",
                    explanation: "Per capita demand is the average amount of water required by one person for all domestic, commercial, public, and industrial purposes within a city on a per day basis. It is a comprehensive measure, not just for individual drinking needs or an annual total."
                },
                {
                    id: "cm31q094",
                    src: "WATE813-00314",
                    text: "Hard water contains dissolved calcium and magnesium salts in it",
                    options: [
                        { key: "a", text: "True" },
                        { key: "b", text: "False" },
                        { key: "c", text: "Partially True" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "a",
                    explanation: "This is the fundamental definition of hard water. The dissolved salts, primarily bicarbonates, chlorides, and sulfates of calcium and magnesium, are what cause the hardness by reacting with soap."
                },
                {
                    id: "cm31q095",
                    src: "WATE813-00315",
                    text: "In hard water, cleansing quality of soap is depressed",
                    options: [
                        { key: "a", text: "True" },
                        { key: "b", text: "False" },
                        { key: "c", text: "Partially True" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "a",
                    explanation: "Hardness ions (Ca²⁺ and Mg²⁺) react with soap to form an insoluble precipitate (scum) instead of lather. This means more soap is required to achieve cleansing, effectively depressing its quality and efficiency."
                },
                {
                    id: "cm31q096",
                    src: "WATE813-00316",
                    text: "Due to the presence of dissolved hardness-producing salts, the boiling point of water is depressed",
                    options: [
                        { key: "a", text: "True" },
                        { key: "b", text: "False" },
                        { key: "c", text: "Partially True" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "b",
                    explanation: "Dissolved salts *elevate* the boiling point of water, not depress it. This is a colligative property known as boiling point elevation. The statement is incorrect."
                },
                {
                    id: "cm31q097",
                    src: "WATE813-00317",
                    text: "Select the incorrect statement from the following option.",
                    options: [
                        { key: "a", text: "The taste of hard water is better than soft water" },
                        { key: "b", text: "The dissolved calcium in hard water can help to produce strong teeth" },
                        { key: "c", text: "Hard water coats the lead piping with a layer of insoluble calcium carbonate which prevents poisonous lead dissolving in water" },
                        { key: "d", text: "Boiler feed water should also be hard in nature" }
                    ],
                    answer: "d",
                    explanation: "This is incorrect. Hard water is unsuitable for boilers. When heated, the hardness salts precipitate out as scale, which reduces heat transfer efficiency, leads to fuel waste, and can cause boiler overheating and failure."
                },
                {
                    id: "cm31q098",
                    src: "WATE813-00318",
                    text: "Hardness of water is conventionally expressed in terms of equivalent amount of",
                    options: [
                        { key: "a", text: "CaCO₃" },
                        { key: "b", text: "H₂CO₃" },
                        { key: "c", text: "MgCO₃" },
                        { key: "d", text: "Na₂CO₃" }
                    ],
                    answer: "a",
                    explanation: "All concentrations of hardness-causing ions are converted to an equivalent amount of calcium carbonate (CaCO₃). This provides a standard unit (mg/L as CaCO₃) for easy comparison and calculation."
                },
                {
                    id: "cm31q099",
                    src: "WATE813-00319",
                    text: "Which of the following is not a unit of hardness?",
                    options: [
                        { key: "a", text: "Parts per million" },
                        { key: "b", text: "Degree centigrade" },
                        { key: "c", text: "Degree clarke" },
                        { key: "d", text: "Degree French" }
                    ],
                    answer: "b",
                    explanation: "Degree centigrade (°C) is a unit of temperature, not hardness. Hardness is measured in ppm (equivalent to mg/L CaCO₃), °Clark (grains per Imperial gallon as CaCO₃), or °French (parts per 100,000 as CaCO₃)."
                },
                {
                    id: "cm31q100",
                    src: "WATE813-00320",
                    text: "... is the water that form lather directly with the soap.",
                    options: [
                        { key: "a", text: "Hard water" },
                        { key: "b", text: "Partially hard water" },
                        { key: "c", text: "Soft water" },
                        { key: "d", text: "Very hard water" }
                    ],
                    answer: "c",
                    explanation: "Soft water is free from dissolved salts of calcium and magnesium. It readily forms lather with soap without producing any scum, unlike hard water."
                }
            ]
        }
    ]
};

/* Registered lazily — js/civil.js injects this file when the set is opened. */
window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["civil-31"] = CIVIL_MODEL_31;
