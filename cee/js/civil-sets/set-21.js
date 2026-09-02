/* ============================================================
   CIVIL MODEL SET 21 — Civil Engineering licence-style model paper
   100 questions · 120 minutes · no negative marking

     Basic Civil Engineering...................  13
     Structural Mechanics......................  11
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
const CIVIL_MODEL_21 = {
    day: 51,
    kind: "model",
    badge: { top: "Model", main: "C21" },
    title: "Civil Model Set 21",
    subtitle: "Civil Engineering · 9 subjects",
    durationMinutes: 120,
    negativeMarking: 0,
    chapters: [
        {
            id: "cm21basi",
            name: "Basic Civil Engineering",
            subject: "Basic Civil",
            accent: "blue",
            blurb: "13 questions drawn from the Basic Civil Engineering bank.",
            questions: [
                {
                    id: "cm21q001",
                    src: "BASI674-00256",
                    text: "In the surveys, the slope correction applied to the base line is",
                    options: [
                        { key: "a", text: "Always cumulative" },
                        { key: "b", text: "Always compensating" },
                        { key: "c", text: "Sometimes cumulative, sometimes compensating" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "a",
                    explanation: "Slope correction is subtractive (negative). If not applied, the measured slope distance is recorded, which is always longer than the horizontal distance. This error is systematic and cumulative, building up over the length of the line."
                },
                {
                    id: "cm21q002",
                    src: "BASI674-00257",
                    text: "If h is the difference in height between end points of a chain of length l, the required slope correction is",
                    options: [
                        { key: "a", text: "h^2/l" },
                        { key: "b", text: "h^3/l" },
                        { key: "c", text: "h^2/2l" },
                        { key: "d", text: "h^4/l" }
                    ],
                    answer: "c",
                    explanation: "The exact slope correction for a measured slope length L and height difference h is C = L - √(L² - h²). The approximate formula, valid for gentle slopes, is C ≈ h²/(2L)."
                },
                {
                    id: "cm21q003",
                    src: "BASI674-00258",
                    text: "Check lines (or proof lines) in Chain Surveying are essentially required",
                    options: [
                        { key: "a", text: "To plot the chain lines" },
                        { key: "b", text: "To plot the offsets" },
                        { key: "c", text: "To locate the interior details" },
                        { key: "d", text: "To indicate the accuracy of the survey work" }
                    ],
                    answer: "d",
                    explanation: "Check lines are measured between known points on the main framework. When the survey is plotted, the length of the check line on the plan should match its measured length, verifying the accuracy of the work."
                },
                {
                    id: "cm21q004",
                    src: "BASI674-00259",
                    text: "The method of leveling used to carry out reconnaissance of area is:",
                    options: [
                        { key: "a", text: "Fly leveling" },
                        { key: "b", text: "Check leveling" },
                        { key: "c", text: "Profile leveling" },
                        { key: "d", text: "Simple leveling" }
                    ],
                    answer: "a",
                    explanation: "Fly leveling involves taking a series of quick, approximate levels (backsights and foresights only, no intermediates) to rapidly determine the approximate elevations of points over a large area, ideal for reconnaissance."
                },
                {
                    id: "cm21q005",
                    src: "BASI674-00260",
                    text: "In an adjusted level when the bubble is central, the axis of the bubble tubes becomes parallel to",
                    options: [
                        { key: "a", text: "Horizontal Axis" },
                        { key: "b", text: "Line of collimation" },
                        { key: "c", text: "Axis of the telescope" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "b",
                    explanation: "The fundamental line of a level is the line of collimation (line of sight). When the instrument is in adjustment, the bubble tube axis is parallel to the line of collimation, ensuring it is horizontal when the bubble is centered."
                },
                {
                    id: "cm21q006",
                    src: "BASI674-00261",
                    text: "An internal focusing typing surveying telescope may be focused by the movement of",
                    options: [
                        { key: "a", text: "Objective glass of the telescope" },
                        { key: "b", text: "Convex – lens in the telescope" },
                        { key: "c", text: "Concave lens in the telescope" },
                        { key: "d", text: "Plane– convex lens in the telescope" }
                    ],
                    answer: "c",
                    explanation: "In an internal focusing telescope, a concave lens is moved between the objective and the eyepiece. This movement changes the effective focal length and brings the image into focus on the cross-hairs."
                },
                {
                    id: "cm21q007",
                    src: "BASI674-00262",
                    text: "Which of the following leveling carried out to determine the elevation difference between two points on the surface to earth?",
                    options: [
                        { key: "a", text: "Reciprocal Leveling" },
                        { key: "b", text: "Simple Leveling" },
                        { key: "c", text: "Longitudinal Leveling" },
                        { key: "d", text: "Differential Leveling" }
                    ],
                    answer: "d",
                    explanation: "Differential leveling is the process of determining the difference in elevation between two points (which may be far apart) by using a series of set ups of a leveling instrument."
                },
                {
                    id: "cm21q008",
                    src: "BASI674-00263",
                    text: "The surface of zero elevation around the earth, which is slightly irregular and curved, is known as",
                    options: [
                        { key: "a", text: "Mean sea level" },
                        { key: "b", text: "Good Surface" },
                        { key: "c", text: "Level Surface" },
                        { key: "d", text: "Horizontal Surface" }
                    ],
                    answer: "a",
                    explanation: "Mean Sea Level (MSL) is the average height of the sea's surface, used as a datum (zero reference) for elevations. It is an irregular, curved surface."
                },
                {
                    id: "cm21q009",
                    src: "BASI674-00264",
                    text: "The sensitivity of a level tube decreases if",
                    options: [
                        { key: "a", text: "Radius of curvature of its inner surface is increased." },
                        { key: "b", text: "Both viscosity and surface tension are increased." },
                        { key: "c", text: "Diameter of the tube is increased." },
                        { key: "d", text: "Length of the vapor bubble increased." }
                    ],
                    answer: "b",
                    explanation: "Fluid-property factors (viscosity, surface tension) resist bubble movement → more sluggish → less sensitive."
                },
                {
                    id: "cm21q010",
                    src: "BASI674-00265",
                    text: "Which of the following leveling method is used to determine difference of elevation of two points that are quiet apart?",
                    options: [
                        { key: "a", text: "Check leveling" },
                        { key: "b", text: "Fly Leveling" },
                        { key: "c", text: "Reciprocal Leveling" },
                        { key: "d", text: "Simple Leveling" }
                    ],
                    answer: "c",
                    explanation: "Reciprocal leveling is used to find the difference in elevation between two points separated by an obstacle like a river, where the instrument cannot be placed midway. Levels are taken from both banks to eliminate errors."
                },
                {
                    id: "cm21q011",
                    src: "BASI674-00266",
                    text: "Which of the following are correct for sensitivity of the bubble tube?",
                    options: [
                        { key: "a", text: "Sensitivity decrease with increase in internal radius of the tube." },
                        { key: "b", text: "Sensitivity decrease with increase in diameter of the tube." },
                        { key: "c", text: "Sensitivity increase with decrease in length of the tube." },
                        { key: "d", text: "Sensitivity increase with decrease in viscosity of the liquid." }
                    ],
                    answer: "d",
                    explanation: "Radius (R): Sensitivity ∝ R (directly proportional) Diameter (D): Sensitivity ∝ D (directly proportional) Length (L): Sensitivity ∝ L (directly proportional) Viscosity (μ): Sensitivity ∝ 1/μ (inversely proportional)"
                },
                {
                    id: "cm21q012",
                    src: "BASI674-00267",
                    text: "Which of the following is the CORRECT ratio of refraction correction to curvature correction?",
                    options: [
                        { key: "a", text: "1/7" },
                        { key: "b", text: "1/4" },
                        { key: "c", text: "1/6" },
                        { key: "d", text: "1/9" }
                    ],
                    answer: "a",
                    explanation: "The combined correction for curvature and refraction is C_comb = 0.0673 * d² (d in km). The curvature correction is +0.0785d² and the refraction correction is -0.0112d². The ratio of refraction to curvature is approximately 0.0112/0.0785 ≈ 1/7."
                },
                {
                    id: "cm21q013",
                    src: "BASI674-00269",
                    text: "Which of the following is true for the correction for curvature?",
                    options: [
                        { key: "a", text: "It is proportional to the distance between the staff and instrument." },
                        { key: "b", text: "It is always negative and proportion to square of distance between the staff and instrument." },
                        { key: "c", text: "It is always positive and proportion to square of distance between the staff and instrument." },
                        { key: "d", text: "It is always positive and proportion to the distance between the staff and instrument." }
                    ],
                    answer: "b",
                    explanation: "Curvature correction (C_c) is subtractive because the staff reading is too high due to the earth's curvature. The formula is C_c = -0.0785 * d² (where d is in km), showing it is negative and proportional to the square of the distance."
                }
            ]
        },
        {
            id: "cm21stru",
            name: "Structural Mechanics",
            subject: "Structural Mech",
            accent: "cyan",
            blurb: "11 questions drawn from the Structural Mechanics bank.",
            questions: [
                {
                    id: "cm21q014",
                    src: "STRU935-00216",
                    text: "Which of the following is correct?",
                    options: [
                        { key: "a", text: "1/M = E/R" },
                        { key: "b", text: "2/M = R/E" },
                        { key: "c", text: "M/I = E/R" },
                        { key: "d", text: "1/R = E/M" }
                    ],
                    answer: "c",
                    explanation: "The fundamental flexure formula is M/I = E/R, where M is bending moment, I is moment of inertia, E is modulus of elasticity, and R is radius of curvature."
                },
                {
                    id: "cm21q015",
                    src: "STRU935-00217",
                    text: "What is the general form of elastic curve of a beam?",
                    options: [
                        { key: "a", text: "Linear first-order differential equation" },
                        { key: "b", text: "Non-linear first-order differential equation" },
                        { key: "c", text: "Non-linear second-order differential equation" },
                        { key: "d", text: "Linear second-order differential equation" }
                    ],
                    answer: "d",
                    explanation: "The equation for the deflection curve (elastic curve) is derived as d²y/dx² = M/(EI), which is a linear second-order differential equation."
                },
                {
                    id: "cm21q016",
                    src: "STRU935-00218",
                    text: "What is the assumption for deriving equation for elastic curve?",
                    options: [
                        { key: "a", text: "Deflection is only due to bending" },
                        { key: "b", text: "Deflection is only due to shear force" },
                        { key: "c", text: "Deflection is due to both shear and bending" },
                        { key: "d", text: "Axial forces caused bending" }
                    ],
                    answer: "a",
                    explanation: "The standard Euler-Bernoulli beam theory for deriving the elastic curve assumes that deflections are small and caused primarily by bending moment, with shear deformation neglected."
                },
                {
                    id: "cm21q017",
                    src: "STRU935-00219",
                    text: "______ formula can be used only for long columns.",
                    options: [
                        { key: "a", text: "Rankine’s" },
                        { key: "b", text: "Euler’s" },
                        { key: "c", text: "Swift’s" },
                        { key: "d", text: "Johnson’s" }
                    ],
                    answer: "b",
                    explanation: "Euler's formula is derived based on elastic buckling and is only valid for long columns with high slenderness ratios where buckling is the primary failure mode."
                },
                {
                    id: "cm21q018",
                    src: "STRU935-00220",
                    text: "In Euler’s formula, the column fails due to ______ alone.",
                    options: [
                        { key: "a", text: "Shear" },
                        { key: "b", text: "Torsion" },
                        { key: "c", text: "Bending" },
                        { key: "d", text: "Tension" }
                    ],
                    answer: "c",
                    explanation: "Euler's theory assumes failure occurs purely due to bending stresses caused by buckling instability, not by direct compression or other stresses."
                },
                {
                    id: "cm21q019",
                    src: "STRU935-00221",
                    text: "______ formula is used for determining short as well as long columns.",
                    options: [
                        { key: "a", text: "Gilbert’s" },
                        { key: "b", text: "Johnson’s" },
                        { key: "c", text: "Euler’s" },
                        { key: "d", text: "Rankine’s" }
                    ],
                    answer: "d",
                    explanation: "Rankine's empirical formula combines crushing and buckling failures, making it applicable to both short and long columns."
                },
                {
                    id: "cm21q020",
                    src: "STRU935-00222",
                    text: "What is the recommended value of effective length if the column is effectively held in position and fixed against rotation in both ends?",
                    options: [
                        { key: "a", text: "0.65L" },
                        { key: "b", text: "0.8L" },
                        { key: "c", text: "0.5L" },
                        { key: "d", text: "0.9L" }
                    ],
                    answer: "a",
                    explanation: "For a column fixed against rotation and translation at both ends, the theoretical effective length is 0.5L. However, practical recommendations often use 0.65L to account for imperfect fixity."
                },
                {
                    id: "cm21q021",
                    src: "STRU935-00223",
                    text: "Long axially loaded columns tends to deflect about ______.",
                    options: [
                        { key: "a", text: "Maximum Moment of Inertia" },
                        { key: "b", text: "Least Moment of Inertia" },
                        { key: "c", text: "Core" },
                        { key: "d", text: "Safe loading" }
                    ],
                    answer: "b",
                    explanation: "A column will buckle about the axis with the smallest second moment of area (I_min), as it offers the least resistance to bending."
                },
                {
                    id: "cm21q022",
                    src: "STRU935-00224",
                    text: "______ is the resistance offered by internal stresses to the bending",
                    options: [
                        { key: "a", text: "Failure stress" },
                        { key: "b", text: "Impact stresses" },
                        { key: "c", text: "Bending stresses" },
                        { key: "d", text: "Fatigue stresses" }
                    ],
                    answer: "c",
                    explanation: "Bending stresses are the internal stresses (tensile and compressive) that develop within a beam to resist the applied bending moment."
                },
                {
                    id: "cm21q023",
                    src: "STRU935-00225",
                    text: "The yield moment of a cross section is defined as the moment that will just produce yield-stress in,",
                    options: [
                        { key: "a", text: "Innermost fibre" },
                        { key: "b", text: "Fibre in NA" },
                        { key: "c", text: "Every fiber" },
                        { key: "d", text: "Outermost fibre" }
                    ],
                    answer: "d",
                    explanation: "The yield moment (M_y) is the bending moment at which the stress in the extreme (outermost) fiber just reaches the yield point of the material."
                },
                {
                    id: "cm21q024",
                    src: "STRU935-00226",
                    text: "When sagging moment is applied",
                    options: [
                        { key: "a", text: "bottom fibre is in tension" },
                        { key: "b", text: "Top fibre in tension" },
                        { key: "c", text: "mid fibre in tension" },
                        { key: "d", text: "none" }
                    ],
                    answer: "a",
                    explanation: "A sagging moment (positive moment) causes the beam to sag, resulting in tension in the bottom fibers and compression in the top fibers."
                }
            ]
        },
        {
            id: "cm21desi",
            name: "Design of Structures",
            subject: "Design of Str",
            accent: "slate",
            blurb: "9 questions drawn from the Design of Structures bank.",
            questions: [
                {
                    id: "cm21q025",
                    src: "DESI787-00186",
                    text: "In limit state method of design, for bars in compression the values of bond stress shall be",
                    options: [
                        { key: "a", text: "Decrease by 25%" },
                        { key: "b", text: "Increase by 25%" },
                        { key: "c", text: "Increase by 20%" },
                        { key: "d", text: "Decrease by 20%" }
                    ],
                    answer: "b",
                    explanation: "As per IS 456:2000, the design bond stress in limit state design for bars in compression is increased by 25% compared to the value for bars in tension."
                },
                {
                    id: "cm21q026",
                    src: "DESI787-00187",
                    text: "The minimum edge and end distance from the centre of any hole to the nearest edge of a plate shall not be less than ______ times the hole diameter in case of sheared or hand-flame cut edges.",
                    options: [
                        { key: "a", text: "1.6" },
                        { key: "b", text: "1.5" },
                        { key: "c", text: "1.7" },
                        { key: "d", text: "1.4" }
                    ],
                    answer: "c",
                    explanation: "As per IS 800:2007, for sheared or hand-flame cut edges, the minimum edge distance is 1.7 times the hole diameter."
                },
                {
                    id: "cm21q027",
                    src: "DESI787-00188",
                    text: "M 36 bolt of property class 8.8 will have an ultimate tensile strength of ______ MPa.",
                    options: [
                        { key: "a", text: "640" },
                        { key: "b", text: "600" },
                        { key: "c", text: "1280" },
                        { key: "d", text: "800" }
                    ],
                    answer: "d",
                    explanation: "For bolts, the property class is denoted by X.Y. The ultimate tensile strength (fu) is given by X * 100 MPa. For class 8.8, fu = 8 * 100 = 800 MPa."
                },
                {
                    id: "cm21q028",
                    src: "DESI787-00189",
                    text: "The thermal expansion coefficient α of steels",
                    options: [
                        { key: "a", text: "12 x 10⁻⁶ /°C and closely to α of concrete" },
                        { key: "b", text: "13 x 10⁻⁶ /°C and closely resembles to α of concrete" },
                        { key: "c", text: "11 x 10⁻⁶ /°C and differs widely from α of concrete" },
                        { key: "d", text: "14 x 10⁻⁶ /°C but nearly equal to α of concrete" }
                    ],
                    answer: "a",
                    explanation: "The coefficient of thermal expansion for steel is approximately 12 x 10⁻⁶ /°C. For concrete, it is about 10 x 10⁻⁶ /°C to 12 x 10⁻⁶ /°C, making them quite similar and a key reason for their composite use."
                },
                {
                    id: "cm21q029",
                    src: "DESI787-00190",
                    text: "For overall cost of roof trusses to be minimal the cost of trusses should be equal to",
                    options: [
                        { key: "a", text: "Twice the cost of roof covering plus the cost of purlins" },
                        { key: "b", text: "twice the cost of purlins plus the cost of roof coverings" },
                        { key: "c", text: "The cost of roof coverings plus the cost of purlins" },
                        { key: "d", text: "Twice the cost of purlins plus twice the cost of roof coverings" }
                    ],
                    answer: "b",
                    explanation: "This is based on an economic principle for roof systems. The minimal total cost is achieved when the cost of the trusses equals twice the cost of the purlins plus the cost of the roof covering."
                },
                {
                    id: "cm21q030",
                    src: "DESI787-00191",
                    text: "When the thickness of the thicker plate is 20 mm, the minimum size of the weld is ______",
                    options: [
                        { key: "a", text: "4 mm" },
                        { key: "b", text: "6 mm" },
                        { key: "c", text: "5 mm" },
                        { key: "d", text: "10 mm" }
                    ],
                    answer: "c",
                    explanation: "As per IS 800:2007, the minimum size of a fillet weld is based on the thicker plate. For plates 10-20 mm thick, the minimum weld size is 5 mm. For plates ranging from 20 mm to 32 mm in thickness, the minimum weld size is 6 mm."
                },
                {
                    id: "cm21q031",
                    src: "DESI787-00192",
                    text: "The effective length of fillet weld should not be less than",
                    options: [
                        { key: "a", text: "5" },
                        { key: "b", text: "25" },
                        { key: "c", text: "35" },
                        { key: "d", text: "45" }
                    ],
                    answer: "d",
                    explanation: "As per IS 800:2007, the effective length of a fillet weld should not be less than four times the weld size (4s) or 40 mm, whichever is more. The option 45 mm is a common specification to ensure stability and avoid size effects."
                },
                {
                    id: "cm21q032",
                    src: "DESI787-00193",
                    text: "The thickness of the gusset plate for column splice should not be less than",
                    options: [
                        { key: "a", text: "12 mm" },
                        { key: "b", text: "6 mm" },
                        { key: "c", text: "8 mm" },
                        { key: "d", text: "10 mm" }
                    ],
                    answer: "a",
                    explanation: "As per common design practice and stability requirements, the minimum thickness of a gusset plate in a column splice is typically 12 mm."
                },
                {
                    id: "cm21q033",
                    src: "DESI787-00194",
                    text: "Which of the following is disadvantage of Steel?",
                    options: [
                        { key: "a", text: "High durability" },
                        { key: "b", text: "Poor corrosion resistance" },
                        { key: "c", text: "Reusable" },
                        { key: "d", text: "High strength per unit mass" }
                    ],
                    answer: "b",
                    explanation: "Steel has a high strength-to-weight ratio, is durable, and can be reused. Its main disadvantage is its susceptibility to corrosion if not properly protected."
                }
            ]
        },
        {
            id: "cm21soil",
            name: "Soil Mechanics and Foundation",
            subject: "Soil Mechanics",
            accent: "amber",
            blurb: "13 questions drawn from the Soil Mechanics and Foundation bank.",
            questions: [
                {
                    id: "cm21q034",
                    src: "SOIL136-00259",
                    text: "If the pore pressure is measured during un-drained stage of the test, the result can be expressed in terms of ______.",
                    options: [
                        { key: "a", text: "c_u" },
                        { key: "b", text: "None of the mentioned" },
                        { key: "c", text: "c and φ" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "c",
                    explanation: "If pore pressures are measured during a consolidated-undrained (CU) test, the results can be used to plot effective stress Mohr circles and determine the effective shear strength parameters, cohesion (c') and friction angle (φ')."
                },
                {
                    id: "cm21q035",
                    src: "SOIL136-00260",
                    text: "Negative pore pressure in clay or sand is developed due to ______.",
                    options: [
                        { key: "a", text: "Expansion on loading" },
                        { key: "b", text: "Over loading" },
                        { key: "c", text: "Loose structure" },
                        { key: "d", text: "Compaction" }
                    ],
                    answer: "d",
                    explanation: "Negative pore pressure (or suction) often develops in compacted soils because the compaction process tends to push soil particles into a dense, unsaturated structure, creating capillary tensions in the water menisci between particles."
                },
                {
                    id: "cm21q036",
                    src: "SOIL136-00261",
                    text: "Which of the following strength test is commonly used in the laboratory?",
                    options: [
                        { key: "a", text: "Triaxial shear test" },
                        { key: "b", text: "Direct shear test" },
                        { key: "c", text: "Confined compression test" },
                        { key: "d", text: "Unconfined shear test" }
                    ],
                    answer: "a",
                    explanation: "The triaxial shear test is one of the most versatile and commonly used laboratory tests for determining the shear strength parameters of soils under various drainage and stress conditions."
                },
                {
                    id: "cm21q037",
                    src: "SOIL136-00262",
                    text: "Which of the following is an advantage of using triaxial test?",
                    options: [
                        { key: "a", text: "Accurate result is not possible" },
                        { key: "b", text: "Stress conditions are complex" },
                        { key: "c", text: "The plane of shear failure is predetermined." },
                        { key: "d", text: "CiecsE measurement" }
                    ],
                    answer: "b",
                    explanation: "Triaxial tests allow for the application of complex, three-dimensional stress states that more accurately simulate in-situ conditions compared to simpler tests like the direct shear test."
                },
                {
                    id: "cm21q038",
                    src: "SOIL136-00263",
                    text: "Which of the following is proved to be useful, ongoing over the site?",
                    options: [
                        { key: "a", text: "Excavation" },
                        { key: "b", text: "Escarpments" },
                        { key: "c", text: "Flood marks" },
                        { key: "d", text: "All of above" }
                    ],
                    answer: "d",
                    explanation: "All these features provide valuable geological and geotechnical information about a site's history and conditions."
                },
                {
                    id: "cm21q039",
                    src: "SOIL136-00264",
                    text: "The methods of site investigation are dependent upon ______",
                    options: [
                        { key: "a", text: "Climatic condition" },
                        { key: "b", text: "Nature of engineering project" },
                        { key: "c", text: "Local topography" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "d",
                    explanation: "The scope and techniques of a site investigation are tailored to the specific project type, local ground conditions, and climate."
                },
                {
                    id: "cm21q040",
                    src: "SOIL136-00265",
                    text: "The information that should be yielded on site exploration is ______",
                    options: [
                        { key: "a", text: "All of the mentioned" },
                        { key: "b", text: "Rock formation" },
                        { key: "c", text: "Depth of ground water" },
                        { key: "d", text: "Structural loading" }
                    ],
                    answer: "a",
                    explanation: "A comprehensive site exploration aims to gather data on subsurface strata, groundwater levels, and the proposed structural loads for foundation design."
                },
                {
                    id: "cm21q041",
                    src: "SOIL136-00266",
                    text: "In site exploration, depth up to which the increase in pressure is likely to cause shear failure is known as ______",
                    options: [
                        { key: "a", text: "Failure depth" },
                        { key: "b", text: "Significant depth" },
                        { key: "c", text: "Pressure depth" },
                        { key: "d", text: "Depth of exploration" }
                    ],
                    answer: "b",
                    explanation: "The significant depth is the zone within the soil mass where the additional stress from the foundation load is significant enough to cause settlement."
                },
                {
                    id: "cm21q042",
                    src: "SOIL136-00267",
                    text: "Depending upon the details, the site exploration may be classified as ______",
                    options: [
                        { key: "a", text: "General and Detailed" },
                        { key: "b", text: "Complex" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "Both (a) and (b)" }
                    ],
                    answer: "a",
                    explanation: "Site investigations are typically categorized into preliminary (general) and detailed phases, with the latter involving more intensive testing and sampling."
                },
                {
                    id: "cm21q043",
                    src: "SOIL136-00268",
                    text: "The general exploration gives information about which of the following features?",
                    options: [
                        { key: "a", text: "Depth of rock" },
                        { key: "b", text: "Composition of soil strata" },
                        { key: "c", text: "Ground water level" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "d",
                    explanation: "General exploration provides a broad understanding of the subsurface profile, including soil types, rock depth, and water table level."
                },
                {
                    id: "cm21q044",
                    src: "SOIL136-00269",
                    text: "For pile foundations, the depth of exploration at the start of the work is ______",
                    options: [
                        { key: "a", text: "40 meters" },
                        { key: "b", text: "10 meter" },
                        { key: "c", text: "70 meters" },
                        { key: "d", text: "200 meters" }
                    ],
                    answer: "a",
                    explanation: "Deep foundations like piles require exploration to significant depths, often around 40 meters or more, to ensure they bear on competent strata."
                },
                {
                    id: "cm21q045",
                    src: "SOIL136-00270",
                    text: "What are the methods used for general exploration?",
                    options: [
                        { key: "a", text: "Subsurface penetration" },
                        { key: "b", text: "All of the mentioned" },
                        { key: "c", text: "Ground water exploration" },
                        { key: "d", text: "Rock Cuttings" }
                    ],
                    answer: "b",
                    explanation: "General exploration employs various methods like sounding tests, test pits, and preliminary borings to understand overall site conditions."
                },
                {
                    id: "cm21q046",
                    src: "SOIL136-00271",
                    text: "The feature that helps to estimate the relative density of coarse-grained soil is ______",
                    options: [
                        { key: "a", text: "Shallow test pits" },
                        { key: "b", text: "Exploratory borings" },
                        { key: "c", text: "Soundings" },
                        { key: "d", text: "Geophysical method" }
                    ],
                    answer: "c",
                    explanation: "Penetration resistance tests (Soundings), like the Standard Penetration Test (SPT), are commonly used to estimate the relative density of granular soils."
                }
            ]
        },
        {
            id: "cm21watr",
            name: "Basic Water Resources Engineering",
            subject: "Water Resources",
            accent: "emerald",
            blurb: "11 questions drawn from the Basic Water Resources Engineering bank.",
            questions: [
                {
                    id: "cm21q047",
                    src: "WATE701-00231",
                    text: "The section factor of a rectangular channel is 111.80m. The discharge and velocity of water are 250 m³/s and 5 m/s respectively. Calculate the hydraulic depth of the channel.",
                    options: [
                        { key: "a", text: "2m" },
                        { key: "b", text: "3m" },
                        { key: "c", text: "4m" },
                        { key: "d", text: "5m" }
                    ],
                    answer: "d",
                    explanation: "Section factor for critical flow calculation is Z = A√D_h, where A is area and D_h is hydraulic depth. Given Q=250 m³/s, V=5 m/s, so A = Q/V = 250/5 = 50 m². Given Z = 111.80 m. So, 111.80 = 50 * √(D_h). Therefore, √(D_h) = 111.80 / 50 = 2.236. So, D_h = (2.236)² = 5.000 m approximately."
                },
                {
                    id: "cm21q048",
                    src: "WATE701-00232",
                    text: "The ratio between depth and width of a rectangular channel is X and the area of the rectangular section is 16m². Calculate the top width of the channel.",
                    options: [
                        { key: "a", text: "8m" },
                        { key: "b", text: "5m" },
                        { key: "c", text: "6m" },
                        { key: "d", text: "7m" }
                    ],
                    answer: "a",
                    explanation: "Let depth = y, width = B. Given y/B = X (but X is not specified). Area A = B * y = 16 m². So, B * y = 16. Without the value of X (the ratio), we cannot find B uniquely. For example, if X=1/2, then y=B/2, so B*(B/2)=16, B²=32, B=5.66m. But 5.66 is not an option. If X=1/4, then y=B/4, B*(B/4)=16, B²=64, B=8m. So, if X=0.25, then B=8m. The question likely assumes a standard ratio, but it is not provided. Based on the answer being 8m, we can infer X=0.25."
                },
                {
                    id: "cm21q049",
                    src: "WATE701-00233",
                    text: "Which geometric parameter determines the efficiency of the channel?",
                    options: [
                        { key: "a", text: "Hydraulic depth" },
                        { key: "b", text: "Hydraulic radius" },
                        { key: "c", text: "Section factor" },
                        { key: "d", text: "Normal depth" }
                    ],
                    answer: "b",
                    explanation: "The efficiency of a channel for conveying water is often determined by the hydraulic radius (R = A/P). A higher hydraulic radius indicates a more efficient channel because it means less wetted perimeter for a given area, resulting in less friction loss."
                },
                {
                    id: "cm21q050",
                    src: "WATE701-00234",
                    text: "Calculate wetted area for a rectangular channel which is 5.2m in width and 3m in depth.",
                    options: [
                        { key: "a", text: "16.6m²" },
                        { key: "b", text: "17.6m²" },
                        { key: "c", text: "15.6m²" },
                        { key: "d", text: "18.6m²" }
                    ],
                    answer: "c",
                    explanation: "Wetted area is the cross-sectional area of flow (A). For a rectangular channel, A = width * depth = 5.2m * 3m = 15.6 m²."
                },
                {
                    id: "cm21q051",
                    src: "WATE701-00235",
                    text: "Calculate the wetted perimeter for a rectangular channel having top width of 4.5m and depth of 3m.",
                    options: [
                        { key: "a", text: "12m" },
                        { key: "b", text: "7.5m" },
                        { key: "c", text: "15m" },
                        { key: "d", text: "10.5m" }
                    ],
                    answer: "d",
                    explanation: "For a rectangular channel, the wetted perimeter (P) is the sum of the base and the two sides: P = top width + 2 * depth = 4.5m + 2*3m = 4.5 + 6 = 10.5m."
                },
                {
                    id: "cm21q052",
                    src: "WATE701-00236",
                    text: "A rectangular channel has a depth of 5m and width of 12m. Calculate the hydraulic depth of the channel.",
                    options: [
                        { key: "a", text: "5m" },
                        { key: "b", text: "6m" },
                        { key: "c", text: "7m" },
                        { key: "d", text: "8m" }
                    ],
                    answer: "a",
                    explanation: "Hydraulic depth (D_h) is defined as the cross-sectional area of flow divided by the top width. Area A = width * depth = 12m * 5m = 60 m². Top width T = 12m (for a rectangular channel). So, D_h = A / T = 60 / 12 = 5m."
                },
                {
                    id: "cm21q053",
                    src: "WATE701-00237",
                    text: "The depth and widths of a rectangular channel are 4m and 5m respectively. Determine hydraulic radius of the channel.",
                    options: [
                        { key: "a", text: "4.22m" },
                        { key: "b", text: "1.54m" },
                        { key: "c", text: "3.54m" },
                        { key: "d", text: "2.22m" }
                    ],
                    answer: "b",
                    explanation: "Hydraulic radius (R) = Area / Wetted Perimeter. Area A = depth * width = 4m * 5m = 20 m². Wetted Perimeter P = width + 2*depth = 5m + 2*4m = 5 + 8 = 13m. So, R = 20 / 13 ≈ 1.538m ≈ 1.54m."
                },
                {
                    id: "cm21q054",
                    src: "WATE701-00238",
                    text: "The section factor and hydraulic depth for a rectangular channel are 40m and 4m respectively. Determine the top width of the channel.",
                    options: [
                        { key: "a", text: "3m" },
                        { key: "b", text: "4m" },
                        { key: "c", text: "5m" },
                        { key: "d", text: "6m" }
                    ],
                    answer: "c",
                    explanation: "Section factor Z = A √D_h. Given Z=40m, D_h=4m. So, 40 = A * √4 = A * 2. Therefore, A = 40/2 = 20 m². For a rectangular channel, hydraulic depth D_h = A / T = y (also). So, 4 = 20 / T. Therefore, top width T = 20 / 4 = 5m."
                },
                {
                    id: "cm21q055",
                    src: "WATE701-00239",
                    text: "The hydraulic depth of a rectangular channel is 2m and its wetted area is 12m². Estimate its hydraulic radius.",
                    options: [
                        { key: "a", text: "1.2m" },
                        { key: "b", text: "1.3m" },
                        { key: "c", text: "1.4m" },
                        { key: "d", text: "1.5m" }
                    ],
                    answer: "d",
                    explanation: "Hydraulic depth D_h = A / T = 2m. Given A=12m². So, top width T = A / D_h = 12 / 2 = 6m. For a rectangular channel, area A = T * y = 6 * y = 12, so depth y = 2m. Wetted perimeter P = T + 2y = 6 + 2*2 = 10m. Hydraulic radius R = A/P = 12/10 = 1.2m. But the options include 1.2m and 1.5m. Calculation gives 1.2m, but the \"correct\" answer is listed as 1.5m, indicating a possible error. Based on calculation, it should be 1.2m."
                },
                {
                    id: "cm21q056",
                    src: "WATE701-00240",
                    text: "When the depth of flow is less than critical depth, the specific energy",
                    options: [
                        { key: "a", text: "increases as the depth of flow decreases" },
                        { key: "b", text: "decreases as the depth of flow decreases" },
                        { key: "c", text: "cannot say" },
                        { key: "d", text: "does not depend on the depth of flow" }
                    ],
                    answer: "a",
                    explanation: "For a given discharge, the specific energy curve has two limbs: one for subcritical flow (depth &gt; critical depth) where specific energy increases with depth, and one for supercritical flow (depth &lt; critical depth) where specific energy decreases as depth decreases. So, when depth is less than critical (supercritical flow), specific energy increases as depth decreases."
                },
                {
                    id: "cm21q057",
                    src: "WATE701-00241",
                    text: "For critical slopes of open channel",
                    options: [
                        { key: "a", text: "the normal depth of flow will be equal to critical depth of flow" },
                        { key: "b", text: "the normal depth of flow will be greater than critical depth of flow" },
                        { key: "c", text: "the normal depth of flow will be lesser than critical depth of flow" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "a",
                    explanation: "Critical slope is defined as the slope at which the normal depth equals the critical depth for a given discharge and channel geometry."
                }
            ]
        },
        {
            id: "cm21hydr",
            name: "Hydropower",
            subject: "Hydropower",
            accent: "cyan",
            blurb: "10 questions drawn from the Hydropower bank.",
            questions: [
                {
                    id: "cm21q058",
                    src: "HYDR626-00182",
                    text: "What is the main function of a surge tank in a hydropower plant?",
                    options: [
                        { key: "a", text: "To provide additional storage capacity for excess water" },
                        { key: "b", text: "To regulate the water level in the reservoir" },
                        { key: "c", text: "To absorb pressure variations and prevent water hammer" },
                        { key: "d", text: "To control the flow rate through the turbines" }
                    ],
                    answer: "c",
                    explanation: "This is the fundamental purpose of a surge tank. It acts as a shock absorber for the hydraulic system, dampening pressure oscillations (surges) caused by rapid changes in turbine load, thereby preventing water hammer and protecting the penstock."
                },
                {
                    id: "cm21q059",
                    src: "HYDR626-00183",
                    text: "Which factor is NOT considered in the design of a penstock for a high-head hydropower plant?",
                    options: [
                        { key: "a", text: "Hydrostatic pressure" },
                        { key: "b", text: "Water hammer effect" },
                        { key: "c", text: "Corrosion resistance" },
                        { key: "d", text: "Sediment transport" }
                    ],
                    answer: "d",
                    explanation: "High-head plants typically use intake structures that draw water from deep within a reservoir, where sediment concentration is very low. Therefore, abrasion from sediment transport is not a primary design concern for these penstocks, unlike in low-head plants on rivers."
                },
                {
                    id: "cm21q060",
                    src: "HYDR626-00184",
                    text: "Location of a surge tank, in a hydro electric power station is near",
                    options: [
                        { key: "a", text: "turbine" },
                        { key: "b", text: "dam" },
                        { key: "c", text: "tail race" },
                        { key: "d", text: "reservoir" }
                    ],
                    answer: "a",
                    explanation: "A surge tank is installed as close as possible to the powerhouse/turbine to effectively absorb pressure surges (water hammer) caused by sudden changes in the turbine's load, minimizing the length of pressurized conduit affected."
                },
                {
                    id: "cm21q061",
                    src: "HYDR626-00185",
                    text: "The surge tank controls the water when the load on the turbine is",
                    options: [
                        { key: "a", text: "Equal" },
                        { key: "b", text: "Decreased" },
                        { key: "c", text: "Increased" },
                        { key: "d", text: "Not present" }
                    ],
                    answer: "b",
                    explanation: "A surge tank controls water flow during load changes. A sudden decrease in load causes the turbine governor to close the gates, creating a pressure surge. The surge tank absorbs this excess water, preventing water hammer in the penstock."
                },
                {
                    id: "cm21q062",
                    src: "HYDR626-00186",
                    text: "The water from penstocks enters the ______ which is spiral in shape which the area of cross section of casing goes on decreasing gradually",
                    options: [
                        { key: "a", text: "guide wheel" },
                        { key: "b", text: "draft tube" },
                        { key: "c", text: "casing" },
                        { key: "d", text: "runner" }
                    ],
                    answer: "c",
                    explanation: "This describes the spiral casing (or volute casing) of a reaction turbine (like a Francis turbine). Its purpose is to distribute water evenly around the runner with minimal energy loss, which is why its cross-sectional area decreases gradually."
                },
                {
                    id: "cm21q063",
                    src: "HYDR626-00187",
                    text: "Cavitation usually occurs due to the change of",
                    options: [
                        { key: "a", text: "Temperature" },
                        { key: "b", text: "Volume" },
                        { key: "c", text: "Heat" },
                        { key: "d", text: "Pressure" }
                    ],
                    answer: "d",
                    explanation: "Cavitation is the formation and immediate collapse of vapor bubbles in a liquid. It occurs when the local static pressure in the fluid drops below its vapor pressure, which is primarily a function of pressure change, not temperature, volume, or heat."
                },
                {
                    id: "cm21q064",
                    src: "HYDR626-00188",
                    text: "Penstocks are made up of ______",
                    options: [
                        { key: "a", text: "Steel" },
                        { key: "b", text: "Cast iron" },
                        { key: "c", text: "Wild steel" },
                        { key: "d", text: "Wrought iron" }
                    ],
                    answer: "a",
                    explanation: "Modern penstocks are almost exclusively made from steel due to its high tensile strength, ability to withstand high internal pressures, and durability. 'Wild steel' is not a standard term for construction material."
                },
                {
                    id: "cm21q065",
                    src: "HYDR626-00190",
                    text: "The phenomenon of formation of vapour bubbles and sudden collapsing of the vapour bubbles in the penstock is called as",
                    options: [
                        { key: "a", text: "Vaporization" },
                        { key: "b", text: "governing" },
                        { key: "c", text: "Cavitation" },
                        { key: "d", text: "None of above" }
                    ],
                    answer: "c",
                    explanation: "This is the exact definition of cavitation. The collapse of these vapor bubbles creates intense localized pressure that can cause pitting and damage to the penstock and turbine surfaces."
                },
                {
                    id: "cm21q066",
                    src: "HYDR626-00191",
                    text: "Which one section of tunnel is most suitable for structural consideration",
                    options: [
                        { key: "a", text: "No section" },
                        { key: "b", text: "Horse-Shoe section" },
                        { key: "c", text: "Circular section" },
                        { key: "d", text: "Egg-shaped section" }
                    ],
                    answer: "c",
                    explanation: "A circular section is inherently the strongest shape against external ground and water pressure because the hoop stress is distributed evenly. It is the most efficient shape for resisting radial pressures."
                },
                {
                    id: "cm21q067",
                    src: "HYDR626-00192",
                    text: "Which one section of tunnel is suitable where the tunnel is subjected to high internal pressure, but does not have good quality of rock for adequate rock cover around it",
                    options: [
                        { key: "a", text: "D-Section" },
                        { key: "b", text: "Horse-Shoe section" },
                        { key: "c", text: "Egg shaped section" },
                        { key: "d", text: "circular section" }
                    ],
                    answer: "d",
                    explanation: "For tunnels with high internal pressure (like hydroelectric conduits), a circular section is best as it resists internal pressure efficiently through hoop tension. This is crucial when the surrounding rock cannot provide adequate support."
                }
            ]
        },
        {
            id: "cm21irri",
            name: "Irrigation and Drainage",
            subject: "Irrigation",
            accent: "emerald",
            blurb: "11 questions drawn from the Irrigation and Drainage bank.",
            questions: [
                {
                    id: "cm21q068",
                    src: "IRRI951-00212",
                    text: "An outlet irrigates an area of 40 ha the discharge(L/S)/required at this outlet to meet evapotranspiration requirement of 20 mm occurring uniformly in march month negligible after field losses is (write only integer)",
                    options: [
                        { key: "a", text: "3" },
                        { key: "b", text: "4" },
                        { key: "c", text: "5" },
                        { key: "d", text: "6" }
                    ],
                    answer: "a",
                    explanation: "Total water depth needed = 20 mm = 0.02 m. Total volume needed = Area * Depth = 40 ha * 10,000 m²/ha * 0.02 m = 8,000 m³. March has 31 days = 31 * 24 * 3600 seconds = 2,678,400 seconds. Discharge required = Volume / Time = 8,000 m³ / 2,678,400 s ≈ 0.002986 m³/s = 2.986 L/s ≈ 3 L/s (to the nearest integer)."
                },
                {
                    id: "cm21q069",
                    src: "IRRI951-00213",
                    text: "The intensity of irrigation for the khariff season is 60% for an irrigation project with CCA of 60000 ha. The Duty for the khariff season is 2000 ha /cumec. Assuming conveyance losses of 30% the required discharge (in cumec, write only integer) at the head of the canal",
                    options: [
                        { key: "a", text: "24" },
                        { key: "b", text: "26" },
                        { key: "c", text: "30" },
                        { key: "d", text: "22" }
                    ],
                    answer: "b",
                    explanation: "Area to be irrigated in Kharif = 60% of CCA = 0.6 * 60,000 = 36,000 ha. Discharge required at the field outlet = Area / Duty = 36,000 ha / 2000 ha/cumec = 18 cumec. Conveyance loss is 30%, meaning only 70% of the water released at the head reaches the field. Let Q be the discharge at the head. Then, 0.7Q = 18. Therefore, Q = 18 / 0.7 ≈ 25.71 cumec. The closest integer is 26 cumec."
                },
                {
                    id: "cm21q070",
                    src: "IRRI951-00214",
                    text: "The consumptive use of water for a crop during a particular stage of growth is 3.0 mm/day. The maximum depth of available water in the root zone is 80 mm. Irrigation is required when the amount of available water is 55% of the maximum available water in the root zone. The frequency of irrigation should be?",
                    options: [
                        { key: "a", text: "8" },
                        { key: "b", text: "13" },
                        { key: "c", text: "12" },
                        { key: "d", text: "24" }
                    ],
                    answer: "c",
                    explanation: "Consumptive use of water = 3.0 mm/day Maximum depth of available water = 80 mm If amount of available water is reduced by 45%, then irrigation is required for a depth = 0.45 × 80 = 36 mm Frequency of Irrigation = =&gt; 36÷3=12"
                },
                {
                    id: "cm21q071",
                    src: "IRRI951-00215",
                    text: "If wheat requires about 7.5 cm of water after every 28 days, and the base period for wheat is 140 days, then delta of wheat is",
                    options: [
                        { key: "a", text: "45" },
                        { key: "b", text: "38" },
                        { key: "c", text: "50" },
                        { key: "d", text: "37.5" }
                    ],
                    answer: "d",
                    explanation: "Number of waterings required = Base period / Irrigation interval = 140 days / 28 days = 5. Depth of water applied per watering = 7.5 cm. Total depth of water required, Delta (Δ) = Number of waterings * Depth per watering = 5 * 7.5 cm = 37.5 cm."
                },
                {
                    id: "cm21q072",
                    src: "IRRI951-00216",
                    text: "Leaching is process",
                    options: [
                        { key: "a", text: "By which alkali salts present in the soil are dissolved and drained away" },
                        { key: "b", text: "By which alkali salts in soil come up with water" },
                        { key: "c", text: "Of draining excess water of irrigation" },
                        { key: "d", text: "Which controls water-logging" }
                    ],
                    answer: "a",
                    explanation: "Leaching is the process of applying excess water to the soil surface to dissolve salts and carry them away through the root zone and into the drains, preventing soil salinity."
                },
                {
                    id: "cm21q073",
                    src: "IRRI951-00217",
                    text: "The interval of water supply of irrigation water depends on the types of",
                    options: [
                        { key: "a", text: "Crop only" },
                        { key: "b", text: "Soil, crop and climate" },
                        { key: "c", text: "Soil and crop" },
                        { key: "d", text: "Crop and climate" }
                    ],
                    answer: "b",
                    explanation: "The irrigation interval depends on the soil type (which determines water holding capacity), the crop type (which determines water uptake rate), and the climate (which determines the evapotranspiration rate)."
                },
                {
                    id: "cm21q074",
                    src: "IRRI951-00218",
                    text: "What is the crop ratio of Kharif to rabi crops?",
                    options: [
                        { key: "a", text: "1:4" },
                        { key: "b", text: "1:3" },
                        { key: "c", text: "1:2" },
                        { key: "d", text: "2:1" }
                    ],
                    answer: "c",
                    explanation: "The crop ratio is typically the ratio of Rabi area to Kharif area. The inverse, Kharif to Rabi, is often around 1:2, meaning the Rabi area is usually about twice the Kharif area in many irrigation projects in India."
                },
                {
                    id: "cm21q075",
                    src: "IRRI951-00219",
                    text: "In crop-rotation, a cash crop may be followed by a fodder crop, which is then followed by soil renovating crop like ______",
                    options: [
                        { key: "a", text: "Rice" },
                        { key: "b", text: "Maize" },
                        { key: "c", text: "Oats" },
                        { key: "d", text: "Grams and pulse" }
                    ],
                    answer: "d",
                    explanation: "Leguminous crops like grams and pulses are known as soil-renovating crops because they fix atmospheric nitrogen into the soil, improving its fertility."
                },
                {
                    id: "cm21q076",
                    src: "IRRI951-00220",
                    text: "What is the name of duty called as in direct irrigation?",
                    options: [
                        { key: "a", text: "Flow Duty" },
                        { key: "b", text: "Quantity Duty" },
                        { key: "c", text: "Duty" },
                        { key: "d", text: "Delta" }
                    ],
                    answer: "a",
                    explanation: "In direct irrigation using a weir or a dam, the duty is sometimes specifically referred to as 'Flow Duty'."
                },
                {
                    id: "cm21q077",
                    src: "IRRI951-00221",
                    text: "Which type of period is slightly more than its counterpart period?",
                    options: [
                        { key: "a", text: "Period" },
                        { key: "b", text: "Crop Period" },
                        { key: "c", text: "Base Period" },
                        { key: "d", text: "Rotation Period" }
                    ],
                    answer: "b",
                    explanation: "The base period is the time from the first watering to the last watering. The crop period is the time from sowing to harvesting. The crop period is usually slightly longer than the base period."
                },
                {
                    id: "cm21q078",
                    src: "IRRI951-00223",
                    text: "How can we improve the duty of water?",
                    options: [
                        { key: "a", text: "Construction of Weir" },
                        { key: "b", text: "Construction of Dam" },
                        { key: "c", text: "Lining of Canals" },
                        { key: "d", text: "Check Dams" }
                    ],
                    answer: "c",
                    explanation: "Lining canals reduces seepage losses. This means more water reaches the field for the same amount released from the head, effectively increasing the area irrigated per unit flow (duty)."
                }
            ]
        },
        {
            id: "cm21tran",
            name: "Transportation",
            subject: "Transportation",
            accent: "rose",
            blurb: "11 questions drawn from the Transportation bank.",
            questions: [
                {
                    id: "cm21q079",
                    src: "TRAN808-00215",
                    text: "The water that cannot be drained off by gravity is called",
                    options: [
                        { key: "a", text: "Pore water" },
                        { key: "b", text: "Held water" },
                        { key: "c", text: "Gravitational water" },
                        { key: "d", text: "Capillary water" }
                    ],
                    answer: "d",
                    explanation: "Capillary water is held in the soil pores by surface tension and adhesion forces against gravity. It cannot be removed by ordinary gravitational drainage."
                },
                {
                    id: "cm21q080",
                    src: "TRAN808-00216",
                    text: "The preferable height of the water table should be",
                    options: [
                        { key: "a", text: "1.2 m" },
                        { key: "b", text: "0.75 m" },
                        { key: "c", text: "1.0 m" },
                        { key: "d", text: "0.5 m" }
                    ],
                    answer: "a",
                    explanation: "A high water table can weaken the subgrade. IRC recommends that the water table should be at least 1.0 to 1.2 meters below the finished road surface level for stability."
                },
                {
                    id: "cm21q081",
                    src: "TRAN808-00217",
                    text: "The excess water on shoulder in the dry region with a good drainage system causes",
                    options: [
                        { key: "a", text: "Water stagnation" },
                        { key: "b", text: "Damage to pavement" },
                        { key: "c", text: "Floods" },
                        { key: "d", text: "Increase of initial cost" }
                    ],
                    answer: "b",
                    explanation: "Even in dry regions, if water is allowed to stand on shoulders due to poor cross-slope or drainage, it can seep into the pavement layers, leading to a reduction in subgrade strength and potential damage."
                },
                {
                    id: "cm21q082",
                    src: "TRAN808-00218",
                    text: "The most preferred shape of drainage is",
                    options: [
                        { key: "a", text: "Rectangular" },
                        { key: "b", text: "Triangular" },
                        { key: "c", text: "Trapezoidal" },
                        { key: "d", text: "Circular" }
                    ],
                    answer: "c",
                    explanation: "Trapezoidal drains are most commonly preferred for roadside drainage as they are hydraulically efficient, stable, and easier to construct and maintain compared to other shapes."
                },
                {
                    id: "cm21q083",
                    src: "TRAN808-00219",
                    text: "The longitudinal drain may be provided if the cross slope is more than",
                    options: [
                        { key: "a", text: "1.0%" },
                        { key: "b", text: "2.0%" },
                        { key: "c", text: "3.0%" },
                        { key: "d", text: "4.0%" }
                    ],
                    answer: "d",
                    explanation: "Longitudinal drains are provided along the road when the natural ground cross-slope is steep (typically greater than 4%) to intercept and carry away surface runoff before it reaches the roadway."
                },
                {
                    id: "cm21q084",
                    src: "TRAN808-00220",
                    text: "Which one of the following is not a common application of OD survey?",
                    options: [
                        { key: "a", text: "Weaving-area studies" },
                        { key: "b", text: "Traffic volume studies" },
                        { key: "c", text: "Major activity centre studies" },
                        { key: "d", text: "Freeway studies" }
                    ],
                    answer: "a",
                    explanation: "Origin-Destination (OD) surveys are used to understand travel patterns. Common applications include traffic volume studies, major activity centre studies, and freeway studies. Weaving-area studies are related to traffic flow characteristics at merge and diverge points, not directly to OD data collection."
                },
                {
                    id: "cm21q085",
                    src: "TRAN808-00222",
                    text: "What is the primary disadvantage of the Roadside interview method?",
                    options: [
                        { key: "a", text: "Requires more manpower" },
                        { key: "b", text: "Traffic disruption" },
                        { key: "c", text: "Huge set of data" },
                        { key: "d", text: "Skilled surveyors" }
                    ],
                    answer: "b",
                    explanation: "The roadside interview method involves stopping vehicles to conduct surveys. This directly interferes with the normal flow of traffic, causing congestion and potential safety hazards, making it its primary drawback."
                },
                {
                    id: "cm21q086",
                    src: "TRAN808-00223",
                    text: "Which of the following represents traffic volume from one key area to another in a desire line map?",
                    options: [
                        { key: "a", text: "Circles" },
                        { key: "b", text: "Triangles" },
                        { key: "c", text: "Dark line" },
                        { key: "d", text: "Dots" }
                    ],
                    answer: "c",
                    explanation: "A desire line map is a graphical representation of OD data. The width or darkness of the lines connecting zones (often represented by circles) is proportional to the volume of traffic between those zones."
                },
                {
                    id: "cm21q087",
                    src: "TRAN808-00224",
                    text: "What is traffic engineering?",
                    options: [
                        { key: "a", text: "Traffic engineering optimizes the performance and efficiency of the movement of people, goods, and transportation" },
                        { key: "b", text: "Traffic engineering mainly deals with improving traffic performance, traffic studies and traffic networks" },
                        { key: "c", text: "The main goal of traffic engineering is to reduce high-speed collisions" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "d",
                    explanation: "Traffic engineering is a branch of civil engineering that uses engineering techniques to achieve the safe and efficient movement of people and goods on roadways. It encompasses all the stated objectives: optimization, performance improvement, studies, network design, and safety."
                },
                {
                    id: "cm21q088",
                    src: "TRAN808-00225",
                    text: "What is the most important objective of traffic engineering?",
                    options: [
                        { key: "a", text: "To reduce the accidents" },
                        { key: "b", text: "To provide a high speed road without any other priority" },
                        { key: "c", text: "To increase the traffic" },
                        { key: "d", text: "To consider pedestrians as obstruction" }
                    ],
                    answer: "a",
                    explanation: "While efficiency is important, the paramount objective of traffic engineering is safety. The primary goal is to design and manage road systems to minimize the number and severity of accidents for all road users, including pedestrians."
                },
                {
                    id: "cm21q089",
                    src: "TRAN808-00226",
                    text: "Which branch of engineering deals with improvement of traffic studies and traffic networks?",
                    options: [
                        { key: "a", text: "Traffic management" },
                        { key: "b", text: "Traffic engineering" },
                        { key: "c", text: "Railway engineering" },
                        { key: "d", text: "Highway engineering" }
                    ],
                    answer: "b",
                    explanation: "Traffic engineering is the specific branch that focuses on the application of engineering principles to the planning, functional design, operation, and management of facilities for any mode of transportation to provide for the safe, efficient, and convenient movement of people and goods."
                }
            ]
        },
        {
            id: "cm21wate",
            name: "Water Supply, Sanitation and Environment",
            subject: "Water Supply",
            accent: "blue",
            blurb: "11 questions drawn from the Water Supply, Sanitation and Environment bank.",
            questions: [
                {
                    id: "cm21q090",
                    src: "WATE813-00200",
                    text: "In very first stage of decomposition of the organic matter in sewage",
                    options: [
                        { key: "a", text: "Nitrates are formed" },
                        { key: "b", text: "Nitrites are formed" },
                        { key: "c", text: "Ammonia is formed" },
                        { key: "d", text: "Carbon dioxide is formed" }
                    ],
                    answer: "c",
                    explanation: "The first stage of anaerobic decomposition is liquefaction and acid fermentation, where complex organic nitrogen is broken down into simpler compounds like ammonia."
                },
                {
                    id: "cm21q091",
                    src: "WATE813-00201",
                    text: "The quantity of wastewater is assumed to be...% of the quantity of water supply.",
                    options: [
                        { key: "a", text: "50%" },
                        { key: "b", text: "60%" },
                        { key: "c", text: "40%" },
                        { key: "d", text: "80%" }
                    ],
                    answer: "d",
                    explanation: "It is generally assumed that 70-80% of the supplied water becomes wastewater, accounting for losses like evaporation, garden watering, and other non-return flows."
                },
                {
                    id: "cm21q092",
                    src: "WATE813-00203",
                    text: "...is the process in which ground water infiltrate in to the sewers",
                    options: [
                        { key: "a", text: "Infiltration" },
                        { key: "b", text: "Exfiltration" },
                        { key: "c", text: "Filtration" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "a",
                    explanation: "Infiltration is the process where groundwater seeps into sewer pipes through cracks, defective joints, or connections, adding extraneous flow."
                },
                {
                    id: "cm21q093",
                    src: "WATE813-00204",
                    text: "Two sets of sewers are laid in ... system.",
                    options: [
                        { key: "a", text: "Partial" },
                        { key: "b", text: "Separate" },
                        { key: "c", text: "Combined" },
                        { key: "d", text: "Partially combined" }
                    ],
                    answer: "b",
                    explanation: "A separate system uses two independent networks: one for sanitary sewage (domestic and industrial) and another for stormwater."
                },
                {
                    id: "cm21q094",
                    src: "WATE813-00205",
                    text: "Which of the following is an advantage of sewer as sewer?",
                    options: [
                        { key: "a", text: "River" },
                        { key: "b", text: "It proves economical" },
                        { key: "c", text: "Size of the sewers are small" }
                    ],
                    answer: "c",
                    explanation: "This question seems incomplete or misphrased. A key advantage of a separate sewer system is that the sanitary sewers are smaller as they don't have to carry stormwater."
                },
                {
                    id: "cm21q095",
                    src: "WATE813-00206",
                    text: "When only one set of sewers are used to carry both sanitary sewage and storm water, it is called as ______ system.",
                    options: [
                        { key: "a", text: "Partial" },
                        { key: "b", text: "Direct" },
                        { key: "c", text: "Separate" },
                        { key: "d", text: "Combined" }
                    ],
                    answer: "d",
                    explanation: "A combined system uses a single pipe to convey both domestic wastewater (sanitary sewage) and surface runoff (stormwater)."
                },
                {
                    id: "cm21q096",
                    src: "WATE813-00207",
                    text: "If sizes of the sewers are ... choking problems are less.",
                    options: [
                        { key: "a", text: "Large" },
                        { key: "b", text: "Small" },
                        { key: "c", text: "Big" },
                        { key: "d", text: "Minute" }
                    ],
                    answer: "a",
                    explanation: "Larger sewer sizes have a greater capacity and are less prone to clogging or choking from debris and solids compared to smaller pipes."
                },
                {
                    id: "cm21q097",
                    src: "WATE813-00208",
                    text: "In which kind of cities are combined systems used?",
                    options: [
                        { key: "a", text: "High population" },
                        { key: "b", text: "Less population" },
                        { key: "c", text: "High residences" },
                        { key: "d", text: "High storm" }
                    ],
                    answer: "b",
                    explanation: "If a city has less population, it consists of fewer residences and industries based on the city needs. Hence the quantity of sanitary sewage produced will also be less. It becomes uneconomical to lay separate sewers for both stormwater and sanitary sewage. Hence combined systems are preferred."
                },
                {
                    id: "cm21q098",
                    src: "WATE813-00209",
                    text: "The treatment is costly in which of the following systems?",
                    options: [
                        { key: "a", text: "Separate" },
                        { key: "b", text: "Direct" },
                        { key: "c", text: "Combined" },
                        { key: "d", text: "Partial" }
                    ],
                    answer: "c",
                    explanation: "Treatment is costlier in combined systems because the treatment plant must handle a much larger volume of flow during rain events, requiring larger infrastructure."
                },
                {
                    id: "cm21q099",
                    src: "WATE813-00210",
                    text: "What are the structures that are constructed at suitable intervals along the sewerage system called?",
                    options: [
                        { key: "a", text: "Manholes" },
                        { key: "b", text: "Catch basins" },
                        { key: "c", text: "Pumps" },
                        { key: "d", text: "Sewer appurtenances" }
                    ],
                    answer: "d",
                    explanation: "Sewer appurtenances is the general term for all auxiliary structures built along a sewer system, including manholes, catch basins, inverted siphons, and clean-outs."
                },
                {
                    id: "cm21q100",
                    src: "WATE813-00211",
                    text: "A masonry or RCC chamber constructed at suitable intervals along the sewer lines, for providing access into them is called ______.",
                    options: [
                        { key: "a", text: "Manhole" },
                        { key: "b", text: "Inverted siphons" },
                        { key: "c", text: "Flushing tanks" },
                        { key: "d", text: "Clean-outs" }
                    ],
                    answer: "a",
                    explanation: "A manhole is a standard access point built into a sewer line, allowing personnel to enter for inspection, maintenance, and cleaning operations."
                }
            ]
        }
    ]
};

/* Registered lazily — js/civil.js injects this file when the set is opened. */
window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["civil-21"] = CIVIL_MODEL_21;
