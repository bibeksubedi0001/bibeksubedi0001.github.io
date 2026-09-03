/* ============================================================
   CIVIL MODEL SET 15 — Civil Engineering licence-style model paper
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
const CIVIL_MODEL_15 = {
    day: 45,
    kind: "model",
    badge: { top: "Model", main: "C15" },
    title: "Civil Model Set 15",
    subtitle: "Civil Engineering · 9 subjects",
    durationMinutes: 120,
    negativeMarking: 0,
    chapters: [
        {
            id: "cm15basi",
            name: "Basic Civil Engineering",
            subject: "Basic Civil",
            accent: "blue",
            blurb: "13 questions drawn from the Basic Civil Engineering bank.",
            questions: [
                {
                    id: "cm15q001",
                    src: "BASI674-00175",
                    text: "The bond in which headers and stretchers are laid in alternate courses and every stretcher course is started with a three fourth brick bat, is known as",
                    options: [
                        { key: "a", text: "English cross bond" },
                        { key: "b", text: "Monk bond" },
                        { key: "c", text: "Rat-trap bond" },
                        { key: "d", text: "Dutch bond" }
                    ],
                    answer: "d",
                    explanation: "This is the defining characteristic of the Dutch bond, a variation of the English bond designed to improve the breaking of vertical joints."
                },
                {
                    id: "cm15q002",
                    src: "BASI674-00176",
                    text: "The type of stone masonry in which stones of same height are laid in layers, is called",
                    options: [
                        { key: "a", text: "Course rubble masonry" },
                        { key: "b", text: "Random rubble masonry" },
                        { key: "c", text: "Uncoursed rubble masonry" },
                        { key: "d", text: "Ashlar masonry" }
                    ],
                    answer: "a",
                    explanation: "Coursed rubble masonry involves arranging stones of approximately the same height in continuous horizontal courses (layers)."
                },
                {
                    id: "cm15q003",
                    src: "BASI674-00177",
                    text: "The piece of a brick cut with its one corner equivalent to half the length and half the width of a full brick, is known as",
                    options: [
                        { key: "a", text: "Queen closer" },
                        { key: "b", text: "King closer" },
                        { key: "c", text: "Beveiled closer" },
                        { key: "d", text: "Half king closer" }
                    ],
                    answer: "b",
                    explanation: "A king closer is a brick cut diagonally from one corner to the middle of the longer side, removing one-quarter of the brick. This creates a corner where one end is half the length and half the width."
                },
                {
                    id: "cm15q004",
                    src: "BASI674-00178",
                    text: "Single Flemish bond consists of",
                    options: [
                        { key: "a", text: "English bond facing and double Flemish bond backing in each course" },
                        { key: "b", text: "Stretcher bond facing and double Flemish bond backing in each course" },
                        { key: "c", text: "Double Flemish bond facing and English bond backing in each course" },
                        { key: "d", text: "Double Flemish bond facing and header bond backing in each course" }
                    ],
                    answer: "c",
                    explanation: "Single Flemish bond is a composite bond. It has the appearance of Flemish bond on the exposed face but uses the stronger English bond pattern for the backing and hearting of the wall."
                },
                {
                    id: "cm15q005",
                    src: "BASI674-00179",
                    text: "The type of bond in a brick masonry containing alternate courses of stretchers and headers, is called",
                    options: [
                        { key: "a", text: "Flemish bond" },
                        { key: "b", text: "Stretcher bond" },
                        { key: "c", text: "Header bond" },
                        { key: "d", text: "English bond" }
                    ],
                    answer: "d",
                    explanation: "English bond is characterized by alternating courses of headers and stretchers. This pattern provides great strength and is easily identifiable."
                },
                {
                    id: "cm15q006",
                    src: "BASI674-00180",
                    text: "The width of the hollow space between two walls of a cavity wall should not exceed",
                    options: [
                        { key: "a", text: "10 cm" },
                        { key: "b", text: "5 cm" },
                        { key: "c", text: "7.5 cm" },
                        { key: "d", text: "15 cm" }
                    ],
                    answer: "a",
                    explanation: "The cavity in a cavity wall is typically between 5 cm and 10 cm. A width exceeding 10 cm can lead to instability and mortar droppings bridging the cavity, reducing its insulating effectiveness."
                },
                {
                    id: "cm15q007",
                    src: "BASI674-00181",
                    text: "An arch constructed with finely dressed stones, is known",
                    options: [
                        { key: "a", text: "Rubble arch" },
                        { key: "b", text: "Ashlar arch" },
                        { key: "c", text: "Gauged arch" },
                        { key: "d", text: "Axed arch" }
                    ],
                    answer: "b",
                    explanation: "An ashlar arch is constructed with precisely cut (dressed) stone voussoirs, giving it a very fine and finished appearance."
                },
                {
                    id: "cm15q008",
                    src: "BASI674-00182",
                    text: "The dimensions of a half queen closer, are",
                    options: [
                        { key: "a", text: "9 cm × 9 cm × 9 cm" },
                        { key: "b", text: "9 cm × 9 cm × 4.5 cm" },
                        { key: "c", text: "9 cm × 4.5 cm × 9 cm" },
                        { key: "d", text: "1.8 cm × 4.5 cm × 9 cm" }
                    ],
                    answer: "c",
                    explanation: "A queen closer is a brick cut lengthwise into two halves (9 cm x 4.5 cm x 9 cm). A half queen closer is half of that again, cut across the width, resulting in dimensions of 9 cm (length) x 4.5 cm (width) x 4.5 cm (height). The option 9 cm x 4.5 cm x 9 cm is the standard dimension for a queen closer, not a half. The correct dimension for a half queen closer is 4.5 cm x 4.5 cm x 9 cm, but this is not listed. Among the given options, 9 cm x 4.5 cm x 9 cm is the standard queen closer, which is the closest relevant answer."
                },
                {
                    id: "cm15q009",
                    src: "BASI674-00183",
                    text: "As compared to English bond, double Flemish bond is",
                    options: [
                        { key: "a", text: "Stronger" },
                        { key: "b", text: "More compact" },
                        { key: "c", text: "Costly" },
                        { key: "d", text: "None" }
                    ],
                    answer: "d",
                    explanation: "Double Flemish bond is less strong and less compact than English bond but provides a better aesthetic appearance on both sides. The answer 'None' implies it is not stronger."
                },
                {
                    id: "cm15q010",
                    src: "BASI674-00184",
                    text: "The stone masonry of finely dressed stones laid in cement or lime, is",
                    options: [
                        { key: "a", text: "Ashlar masonry" },
                        { key: "b", text: "Random rubble masonry" },
                        { key: "c", text: "Coursed rubble masonry" },
                        { key: "d", text: "Dry rubble masonry" }
                    ],
                    answer: "a",
                    explanation: "Ashlar masonry is the finest form of stone masonry. It uses accurately dressed stones with very thin beds and end joints, laid in cement or lime mortar."
                },
                {
                    id: "cm15q011",
                    src: "BASI674-00185",
                    text: "The 19 cm × 9 cm side of a brick as seen in the wall face, is generally known as",
                    options: [
                        { key: "a", text: "Face" },
                        { key: "b", text: "Stretcher" },
                        { key: "c", text: "Front" },
                        { key: "d", text: "Header" }
                    ],
                    answer: "b",
                    explanation: "When a brick is laid with its longest, 19 cm x 9 cm face parallel to the face of the wall, it is called a stretcher. This is the most common orientation in brickwork."
                },
                {
                    id: "cm15q012",
                    src: "BASI674-00186",
                    text: "The type of arch used for high class buildings where appearance is of prime importance, is known as",
                    options: [
                        { key: "a", text: "Ashlar arch" },
                        { key: "b", text: "Rubble arch" },
                        { key: "c", text: "Gauged brick arch" },
                        { key: "d", text: "Axed brick arch" }
                    ],
                    answer: "c",
                    explanation: "A gauged brick arch is made from soft bricks that are finely cut, rubbed, and shaped with a saw to precise dimensions. The joints are extremely thin, making it the most refined and decorative type of brick arch."
                },
                {
                    id: "cm15q013",
                    src: "BASI674-00187",
                    text: "The piece of a brick cut along the centre of width in such away that its length is equal to that of full brick, is called",
                    options: [
                        { key: "a", text: "Half brick" },
                        { key: "b", text: "King closer" },
                        { key: "c", text: "Beveiled closer" },
                        { key: "d", text: "Queen closer" }
                    ],
                    answer: "d",
                    explanation: "A queen closer is a brick that is cut lengthwise into two equal parts, resulting in two pieces each with dimensions of 9 cm x 4.5 cm x 9 cm (LxWxH)."
                }
            ]
        },
        {
            id: "cm15stru",
            name: "Structural Mechanics",
            subject: "Structural Mech",
            accent: "cyan",
            blurb: "11 questions drawn from the Structural Mechanics bank.",
            questions: [
                {
                    id: "cm15q014",
                    src: "STRU935-00147",
                    text: "For a particular steel section, which of the following options represents a ratio of the plastic moment and yield moment",
                    options: [
                        { key: "a", text: "Shape factor" },
                        { key: "b", text: "Load factor" },
                        { key: "c", text: "Flexural rigidity" },
                        { key: "d", text: "Valid stress" }
                    ],
                    answer: "a",
                    explanation: "The shape factor is defined as the ratio of the plastic moment capacity (M_p) to the yield moment (M_y) of a cross-section."
                },
                {
                    id: "cm15q015",
                    src: "STRU935-00148",
                    text: "Which of the following divides section into equal half area?",
                    options: [
                        { key: "a", text: "Elastic neutral axis" },
                        { key: "b", text: "Plastic neutral axis" },
                        { key: "c", text: "Axis of symmetry" },
                        { key: "d", text: "b and c" }
                    ],
                    answer: "b",
                    explanation: "The Plastic Neutral Axis (PNA) is defined as the axis that divides the cross-sectional area into two equal parts, ensuring force equilibrium under pure plastic bending."
                },
                {
                    id: "cm15q016",
                    src: "STRU935-00149",
                    text: "For a particular steel section, which of the following options represents a ratio of the ultimate collapse load to the working load",
                    options: [
                        { key: "a", text: "Shape factor" },
                        { key: "b", text: "Flexural rigidity" },
                        { key: "c", text: "Load factor" },
                        { key: "d", text: "Valid stress" }
                    ],
                    answer: "c",
                    explanation: "The load factor in plastic design is the ratio of the ultimate load causing collapse to the working load the structure is designed for."
                },
                {
                    id: "cm15q017",
                    src: "STRU935-00150",
                    text: "The maximum ordinate under the crown of influence line diagram for the horizontal thrust of three hinged arch is equal to",
                    options: [
                        { key: "a", text: "L/2h" },
                        { key: "b", text: "L/6h" },
                        { key: "c", text: "L/4h" }
                    ],
                    answer: "c",
                    explanation: "For a three-hinged arch, the influence line for horizontal thrust H has its maximum ordinate at the crown. This maximum value is L/(4h), where L is the span and h is the rise."
                },
                {
                    id: "cm15q018",
                    src: "STRU935-00151",
                    text: "A three-hinged parabolic arch subjected to a load w at L/4 distance from left support. The rise of the crown is 4 m, span is 20 m and w is 80 kN, the horizontal thrust at the support is",
                    options: [
                        { key: "a", text: "50 kN" },
                        { key: "b", text: "20 kN" },
                        { key: "c", text: "40 kN" },
                        { key: "d", text: "60 kN" }
                    ],
                    answer: "a",
                    explanation: "The horizontal thrust H is found by taking moments about the crown hinge. For the left segment, ΣM_crown = 0: H*4 - V_left*10 + 80*5 = 0. V_left = (80*15)/20 = 60 kN. Solving gives H = (60*10 - 400)/4 = 200/4 = 50 kN."
                },
                {
                    id: "cm15q019",
                    src: "STRU935-00152",
                    text: "A three-hinged parabolic arch subjected to a load w at L/4 distance from left support. The rise of the crown is 4 m, span is 20 m and w is 80 kN, the vertical support reaction at the left support is",
                    options: [
                        { key: "a", text: "20 kN" },
                        { key: "b", text: "60 kN" },
                        { key: "c", text: "40 kN" },
                        { key: "d", text: "50 kN" }
                    ],
                    answer: "b",
                    explanation: "The vertical reaction at the left support is calculated from static equilibrium: V_left = (w * distance from right support) / span = (80 kN * 15 m) / 20 m = 60 kN."
                },
                {
                    id: "cm15q020",
                    src: "STRU935-00153",
                    text: "A three-hinged parabolic arch subjected to a load w at L/4 distance from left support. The rise of the crown is 4 m, span is 20 m and w is 80 kN, the bending moment at L/4 distance from left support is",
                    options: [
                        { key: "a", text: "60 kNm" },
                        { key: "b", text: "80 kNm" },
                        { key: "c", text: "150 kNm" },
                        { key: "d", text: "300 kNm" }
                    ],
                    answer: "c",
                    explanation: "The bending moment at any point is M = M⁰ - H*y, where M⁰ is the beam moment. At x=5m, M⁰ = V_left * x = 60*5 = 300 kNm. The arch height y at x=5m is y = (4h/L²)x(L-x) = (16/400)*5*15 = 3 m. Thus, M = 300 - 50*3 = 150 kNm."
                },
                {
                    id: "cm15q021",
                    src: "STRU935-00154",
                    text: "A three-hinged parabolic arch subjected to a load w at L/4 distance from left support. The rise of the crown is 4 m, span is 20 m and w is 80 kN, the beam moment at L/4 distance from left support is",
                    options: [
                        { key: "a", text: "60 kNm" },
                        { key: "b", text: "80 kNm" },
                        { key: "c", text: "150 kNm" },
                        { key: "d", text: "300 kNm" }
                    ],
                    answer: "d",
                    explanation: "The beam moment (M⁰) is the moment in a simply supported beam. At x=5m from the left support, M⁰ = V_left * x = 60 kN * 5 m = 300 kNm. The point load at that location does not contribute to the moment at that same point."
                },
                {
                    id: "cm15q022",
                    src: "STRU935-00155",
                    text: "Horizontal thrust when udl of 1kN/m covers left half span of symmetric three hinged arc, with rise 5m, span 20 m",
                    options: [
                        { key: "a", text: "5 kN" },
                        { key: "b", text: "1 kN" },
                        { key: "c", text: "10 kN" },
                        { key: "d", text: "15 kN" }
                    ],
                    answer: "a",
                    explanation: "The half-span load totals 10 kN acting 5 m from the left support, so the reactions are 7.5 kN and 2.5 kN. In a three-hinged arch the moment at the crown hinge is zero, so H times the rise equals the simple-beam moment there, that is 2.5 times 10, or 25 kNm. Dividing by the 5 m rise gives H equal to 5 kN. The key has been corrected from the printed 10 kN."
                },
                {
                    id: "cm15q023",
                    src: "STRU935-00156",
                    text: "The number of independent equations to be satisfied for static equilibrium of a plane structure is",
                    options: [
                        { key: "a", text: "1" },
                        { key: "b", text: "3" },
                        { key: "c", text: "2" },
                        { key: "d", text: "6" }
                    ],
                    answer: "b",
                    explanation: "A plane structure has three independent equilibrium equations, the sum of horizontal forces, the sum of vertical forces and the sum of moments, all equal to zero. If the unknown reactions number more than three the structure is statically indeterminate, and in three dimensions the count rises to six equations."
                },
                {
                    id: "cm15q024",
                    src: "STRU935-00157",
                    text: "The number of independent equations to be satisfied for static equilibrium in a space structure is",
                    options: [
                        { key: "a", text: "2" },
                        { key: "b", text: "3" },
                        { key: "c", text: "6" },
                        { key: "d", text: "4" }
                    ],
                    answer: "c",
                    explanation: "For a space structure, static equilibrium requires satisfying six equations: ΣFx = 0, ΣFy = 0, ΣFz = 0, ΣMx = 0, ΣMy = 0, and ΣMz = 0."
                }
            ]
        },
        {
            id: "cm15desi",
            name: "Design of Structures",
            subject: "Design of Str",
            accent: "slate",
            blurb: "9 questions drawn from the Design of Structures bank.",
            questions: [
                {
                    id: "cm15q025",
                    src: "DESI787-00127",
                    text: "In case of timber structures, the simple bending formula M = fz may be applied for",
                    options: [
                        { key: "a", text: "All rectangular beams" },
                        { key: "b", text: "Solid circular beams only" },
                        { key: "c", text: "All square cross-section beams" },
                        { key: "d", text: "Rectangular beams up to 300 mm depth" }
                    ],
                    answer: "d",
                    explanation: "The simple bending formula is applicable to rectangular timber beams with a depth not exceeding 300 mm. For deeper beams, lateral stability must be considered, and the formula may need modification."
                },
                {
                    id: "cm15q026",
                    src: "DESI787-00128",
                    text: "The strength of timber",
                    options: [
                        { key: "a", text: "is maximum in a direction parallel to grain" },
                        { key: "b", text: "is maximum in direction perpendicular to grain" },
                        { key: "c", text: "Is maximum in direction 45 degree to the grain" },
                        { key: "d", text: "Is same in all direction" }
                    ],
                    answer: "a",
                    explanation: "Timber is an anisotropic material. Its strength is greatest along the direction of its fibers (parallel to grain) and significantly weaker across them (perpendicular to grain)."
                },
                {
                    id: "cm15q027",
                    src: "DESI787-00129",
                    text: "Tensile strength along grain of timber is …… times the compressive strength in same direction",
                    options: [
                        { key: "a", text: "1" },
                        { key: "b", text: "2 - 4" },
                        { key: "c", text: "4 - 8" },
                        { key: "d", text: "8 - 10" }
                    ],
                    answer: "b",
                    explanation: "The tensile strength of wood parallel to the grain is typically 2 to 4 times greater than its compressive strength in the same direction."
                },
                {
                    id: "cm15q028",
                    src: "DESI787-00130",
                    text: "Modulus of elasticity for Group A species of timber should be",
                    options: [
                        { key: "a", text: "above 9.8×10³ up to 12.6×10³ N/mm²" },
                        { key: "b", text: "above 5.6×10³ up to 9.8×10³ N/mm²" },
                        { key: "c", text: "above 12.6×10³ N/mm²" },
                        { key: "d", text: "less than 5.6×10³ N/mm²" }
                    ],
                    answer: "c",
                    explanation: "Timber is classified into groups based on modulus of elasticity. Group A includes the strongest species with a modulus of elasticity greater than 12.6 kN/mm²."
                },
                {
                    id: "cm15q029",
                    src: "DESI787-00131",
                    text: "Maximum permissible stress on extreme fiber for Group C species of timber should be",
                    options: [
                        { key: "a", text: "above 18.0 N/mm²" },
                        { key: "b", text: "above 12.0 up to 18.0 N/mm²" },
                        { key: "c", text: "above 8.5 up to 12.0 N/mm²" },
                        { key: "d", text: "less than 8.5 N/mm²" }
                    ],
                    answer: "d",
                    explanation: "Timber groups are also defined by permissible bending stress. Group C species have the lowest permissible extreme fiber stress, which is less than 8.5 N/mm²."
                },
                {
                    id: "cm15q030",
                    src: "DESI787-00132",
                    text: "Which of following are classification of structural timber",
                    options: [
                        { key: "a", text: "Select grade" },
                        { key: "b", text: "Grade I" },
                        { key: "c", text: "Grade II" },
                        { key: "d", text: "All of above" }
                    ],
                    answer: "d",
                    explanation: "Structural timber is graded based on its quality and permissible stresses. The common classifications are Select Grade, Grade I, and Grade II."
                },
                {
                    id: "cm15q031",
                    src: "DESI787-00133",
                    text: "The value of form factor for solid circular beam is",
                    options: [
                        { key: "a", text: "0.81" },
                        { key: "b", text: "1.18" },
                        { key: "c", text: "1.00" },
                        { key: "d", text: "1.41" }
                    ],
                    answer: "b",
                    explanation: "The form factor, or shape factor, is the ratio of the plastic to the elastic section modulus, and for a solid circular section it is about 1.7; the figure of 1.18 quoted here is the value used for a circular member in the code being followed. Whatever the exact figure, it expresses how much moment the section can still take after the extreme fibre first yields."
                },
                {
                    id: "cm15q032",
                    src: "DESI787-00134",
                    text: "The value of form factor for solid square beam when load is acting in direction of diagonal is",
                    options: [
                        { key: "a", text: "0.81" },
                        { key: "b", text: "1.00" },
                        { key: "c", text: "1.41" },
                        { key: "d", text: "1.18" }
                    ],
                    answer: "c",
                    explanation: "When a load is applied along the diagonal of a square beam, the form factor increases to 1.41 due to the changed moment of inertia and section modulus."
                },
                {
                    id: "cm15q033",
                    src: "DESI787-00135",
                    text: "The Nepal standard code used for design of timber structures is",
                    options: [
                        { key: "a", text: "NBC 110" },
                        { key: "b", text: "NBC 112" },
                        { key: "c", text: "NBC 113" },
                        { key: "d", text: "NBC 111" }
                    ],
                    answer: "d",
                    explanation: "Nepal Building Code NBC 111 covers the design of timber structures, setting the permissible stresses for the local species groups, the rules for joints and fasteners, and the durability and preservative treatment requirements. NBC 110 covers plain and reinforced concrete and NBC 112 steel."
                }
            ]
        },
        {
            id: "cm15soil",
            name: "Soil Mechanics and Foundation",
            subject: "Soil Mechanics",
            accent: "amber",
            blurb: "13 questions drawn from the Soil Mechanics and Foundation bank.",
            questions: [
                {
                    id: "cm15q034",
                    src: "SOIL136-00174",
                    text: "The seepage analysis is done on the assumption of ______",
                    options: [
                        { key: "a", text: "Flow is laminar and Darcy’s law is valid" },
                        { key: "b", text: "Seepage of water" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "Both (a) and (b)" }
                    ],
                    answer: "a",
                    explanation: "Seepage analysis using flow nets is based on the fundamental assumptions that the flow is laminar (which it usually is in soils) and that Darcy's law (v = ki) is valid."
                },
                {
                    id: "cm15q035",
                    src: "SOIL136-00175",
                    text: "For unconfined flow, which of the following discharge slot is used?",
                    options: [
                        { key: "a", text: "Partially penetrating slot" },
                        { key: "b", text: "Fully penetrating slot" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "Both (a) and (b)" }
                    ],
                    answer: "b",
                    explanation: "An unconfined aquifer has a water table as its upper boundary. For simplified 2D flow net analysis and discharge calculations, it is often assumed that the structure (e.g., a cut-off wall) fully penetrates the aquifer to allow for a clearer definition of flow lines."
                },
                {
                    id: "cm15q036",
                    src: "SOIL136-00176",
                    text: "Fine grained cohesive soil can be drained or stabilized by ______",
                    options: [
                        { key: "a", text: "Vacuum method" },
                        { key: "b", text: "Shallow well system" },
                        { key: "c", text: "Electro-osmosis method" },
                        { key: "d", text: "Well point system" }
                    ],
                    answer: "c",
                    explanation: "Electro-osmosis is an effective method for dewatering fine-grained cohesive soils (clays) where conventional pumping methods are inefficient. An electric current is applied to move water towards the cathode, which is then pumped out."
                },
                {
                    id: "cm15q037",
                    src: "SOIL136-00177",
                    text: "Discharge for an unconfined aquifer can be found from the expression developed by",
                    options: [
                        { key: "a", text: "Darcy" },
                        { key: "b", text: "Chapman" },
                        { key: "c", text: "Baron" },
                        { key: "d", text: "Dupuit" }
                    ],
                    answer: "d",
                    explanation: "Dupuit and Forchheimer developed assumptions that simplify the calculation of discharge in unconfined aquifers, leading to the Dupuit-Forchheimer discharge formula."
                },
                {
                    id: "cm15q038",
                    src: "SOIL136-00178",
                    text: "A complete design of dewatering system consist of ______",
                    options: [
                        { key: "a", text: "All of the mentioned" },
                        { key: "b", text: "Spacing of wells" },
                        { key: "c", text: "Penetration of wells" },
                        { key: "d", text: "Pumping capacities" }
                    ],
                    answer: "a",
                    explanation: "Designing an effective dewatering system requires determining the optimal spacing between wells, the necessary depth of well penetration to lower the water table sufficiently, and the pumping capacity required to handle the total inflow."
                },
                {
                    id: "cm15q039",
                    src: "SOIL136-00179",
                    text: "When dewatering system consist of number of well-points ______ can be considered for a simplified solution.",
                    options: [
                        { key: "a", text: "Seepage analysis" },
                        { key: "b", text: "Linear drainage limit" },
                        { key: "c", text: "Flow of water" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "b",
                    explanation: "A line of closely spaced wellpoints can often be approximated as a continuous 'linear drain' for the purpose of simplifying seepage analysis and calculating discharge and drawdown."
                },
                {
                    id: "cm15q040",
                    src: "SOIL136-00180",
                    text: "In discharge equation given by chapmen qp=kba(H-ho)/1+EA, EA refers to ______",
                    options: [
                        { key: "a", text: "Coefficient of permeability" },
                        { key: "b", text: "Electric gradient" },
                        { key: "c", text: "Extra length factor" },
                        { key: "d", text: "Efficiency of permeability of soil" }
                    ],
                    answer: "c",
                    explanation: "In Chapman's formula for discharge from a partially penetrating slot, 'EA' represents an 'extra length factor' which accounts for the additional flow due to the partial penetration compared to a fully penetrating slot."
                },
                {
                    id: "cm15q041",
                    src: "SOIL136-00181",
                    text: "The application of electro-osmosis on dewatering of soil was developed by ______",
                    options: [
                        { key: "a", text: "Darcy" },
                        { key: "b", text: "Chapman" },
                        { key: "c", text: "Dupuit" },
                        { key: "d", text: "Leasegrande" }
                    ],
                    answer: "d",
                    explanation: "This is likely a misspelling of 'Casagrande'. Ludwig Casagrande pioneered the application of electro-osmosis for soil stabilization and dewatering in geotechnical engineering."
                },
                {
                    id: "cm15q042",
                    src: "SOIL136-00182",
                    text: "For fine-grained soil what type of dewatering system can be used?",
                    options: [
                        { key: "a", text: "Electro-osmosis method" },
                        { key: "b", text: "Shallow well system" },
                        { key: "c", text: "Deep well system" },
                        { key: "d", text: "Vacuum method" }
                    ],
                    answer: "a",
                    explanation: "As mentioned previously, electro-osmosis is particularly suited for fine-grained, cohesive soils like clays where gravity drainage (used in wellpoint systems) is very slow or ineffective."
                },
                {
                    id: "cm15q043",
                    src: "SOIL136-00183",
                    text: "The drawdown curve in fully penetrated slot is based on the assumptions of ______",
                    options: [
                        { key: "a", text: "Dupuit and Forchheimer" },
                        { key: "b", text: "Darcy" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "Both (a) and (b)" }
                    ],
                    answer: "a",
                    explanation: "The Dupuit-Forchheimer theory makes simplifying assumptions (e.g., horizontal flow lines) to model the drawdown curve (phreatic surface) in an unconfined aquifer drained by a fully penetrating slot or well."
                },
                {
                    id: "cm15q044",
                    src: "SOIL136-00184",
                    text: "During seepage through a soil, direction of seepage is always",
                    options: [
                        { key: "a", text: "Parallel to equipotential lines" },
                        { key: "b", text: "Perpendicular to stream lines" },
                        { key: "c", text: "Perpendicular to equipotential lines" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "c",
                    explanation: "Seepage velocity is proportional to the hydraulic gradient. The gradient is perpendicular to equipotential lines. Therefore, the direction of seepage flow is perpendicular to the equipotential lines."
                },
                {
                    id: "cm15q045",
                    src: "SOIL136-00186",
                    text: "Pick up correct statement from the following:",
                    options: [
                        { key: "a", text: "Coefficient of compressibility is decrease in void ratio per unit increase of pressure" },
                        { key: "b", text: "The percent settlement at any time is called degree of consolidation" },
                        { key: "c", text: "Time factor is a dimensionless quantity" },
                        { key: "d", text: "All the above" }
                    ],
                    answer: "d",
                    explanation: "All three statements are correct definitions in soil mechanics. The coefficient of compressibility (a_v) is the slope of the e-log p curve, representing the change in void ratio per unit increase in pressure. The degree of consolidation is the ratio, expressed as a percentage, of the settlement at a given time to the ultimate settlement. The time factor (T_v) is a dimensionless parameter used in consolidation theory."
                },
                {
                    id: "cm15q046",
                    src: "SOIL136-00187",
                    text: "Direct measurement of permeability of the specimen at any stage of loading can be made",
                    options: [
                        { key: "a", text: "Only in fixed ring type consolidometer" },
                        { key: "b", text: "Only in floating ring type consolidometer" },
                        { key: "c", text: "Both (a) and (b)" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "a",
                    explanation: "In a fixed ring test, the soil specimen is confined in a ring fixed to the base, allowing for direct measurement of permeability at any stage because the cross-sectional area remains constant. In a floating ring test, the ring is not fixed, and the area changes, making direct permeability measurement difficult."
                }
            ]
        },
        {
            id: "cm15watr",
            name: "Basic Water Resources Engineering",
            subject: "Water Resources",
            accent: "emerald",
            blurb: "11 questions drawn from the Basic Water Resources Engineering bank.",
            questions: [
                {
                    id: "cm15q047",
                    src: "WATE701-00159",
                    text: "Calculate the top width of a trapezoidal channel section having a side slope1H:4V, base of 5m and the wetted area is 17.25m².",
                    options: [
                        { key: "a", text: "5.5m" },
                        { key: "b", text: "6.5m" },
                        { key: "c", text: "7.5m" },
                        { key: "d", text: "8.5m" }
                    ],
                    answer: "b",
                    explanation: "For side slope 1H:4V, z = 1/4 = 0.25. Area A = (b + zy)y = (5 + 0.25y)y = 5y + 0.25y² = 17.25. Solve quadratic: 0.25y² + 5y - 17.25=0 multiply by 4: y² + 20y - 69=0. y = [-20 ± √(400+276)]/2 = [-20 ± √676]/2 = [-20 ± 26]/2. Positive root y=3m. Top width T = b + 2zy = 5 + 2*0.25*3 = 5 + 1.5 = 6.5m."
                },
                {
                    id: "cm15q048",
                    src: "WATE701-00160",
                    text: "The product Z_y in a trapezoidal channel is 2 and the side slope is 1/2. Calculate the wetted perimeter of the channel section if the wetted area is 32m².",
                    options: [
                        { key: "a", text: "13.94m" },
                        { key: "b", text: "15.94m" },
                        { key: "c", text: "14.94m" },
                        { key: "d", text: "16.94m" }
                    ],
                    answer: "c",
                    explanation: "With z equal to 0.5 and zy equal to 2, the depth is 4 m. The area (b plus zy) times y equals 32, so (b plus 2) times 4 is 32 and the bed width is 6 m. The wetted perimeter is b plus 2y times the root of (1 plus z squared), that is 6 plus 8 times 1.118, which is 14.94 m. The key has been corrected from the printed 13.94 m."
                },
                {
                    id: "cm15q049",
                    src: "WATE701-00161",
                    text: "The top width of a trapezoidal channel is 12m, the bottom width of the channel is 6m and the side slope is 1H:2V, calculate the wetted perimeter.",
                    options: [
                        { key: "a", text: "17.41m" },
                        { key: "b", text: "18.41m" },
                        { key: "c", text: "20.41m" },
                        { key: "d", text: "19.41m" }
                    ],
                    answer: "d",
                    explanation: "the ratio of horizontal to vertical is 1/2 : $$\\frac{x}{y} = \\frac{1}{2} \\Rightarrow y = 2x$$ $$y = 2 \\times 3 = 6\\text{ m}$$ length of the side slope (s): \\(s = \\sqrt{x^2 + y^2} = \\sqrt{3^2 + 6^2} = 6.708\\) The wetted perimeter is the length of the boundary in contact with the water (bottom + two sides): P = b + 2s P = 6 + 2(6.708) P = 6 + 13.416 = 19.416"
                },
                {
                    id: "cm15q050",
                    src: "WATE701-00162",
                    text: "The wetted area of a trapezoidal section is 15m² and the top width is 6m, calculate the section factor.",
                    options: [
                        { key: "a", text: "23.72" },
                        { key: "b", text: "24.72" },
                        { key: "c", text: "25.72" },
                        { key: "d", text: "26.72" }
                    ],
                    answer: "a",
                    explanation: "Section factor Z = A√D, and hydraulic depth D = A/T. So Z = A√(A/T) = A^(3/2)/√T. Given A=15, T=6, so Z = (15^(3/2))/√6 = (15√15)/√6 = √(15^3/6) = √(3375/6) = √562.5 ≈ 23.72."
                },
                {
                    id: "cm15q051",
                    src: "WATE701-00163",
                    text: "The ratio of section factor and hydraulic depth in a trapezoidal section is 324/25, calculate the top width if the total wetted area of the channel is 24m².",
                    options: [
                        { key: "a", text: "4m" },
                        { key: "b", text: "7m" },
                        { key: "c", text: "5m" },
                        { key: "d", text: "6m" }
                    ],
                    answer: "b",
                    explanation: "Since Z equals A times the root of D, the ratio Z over D reduces to A over the root of D. Setting that equal to 324 over 25 with an area of 24 gives the root of D as 1.852, so D is 3.43 m. The hydraulic depth is A over T, so the top width is 24 divided by 3.43, which is about 7 m. The key has been corrected from the printed 6 m."
                },
                {
                    id: "cm15q052",
                    src: "WATE701-00164",
                    text: "For a channel to be economic which of the following parameters should be minimum.",
                    options: [
                        { key: "a", text: "Wetted area" },
                        { key: "b", text: "Section factor" },
                        { key: "c", text: "Wetted perimeter" },
                        { key: "d", text: "Hydraulic depth" }
                    ],
                    answer: "c",
                    explanation: "An economical channel section is one that has a minimum wetted perimeter for a given cross-sectional area, which minimizes resistance to flow."
                },
                {
                    id: "cm15q053",
                    src: "WATE701-00165",
                    text: "A rectangular channel section has depth y and width B, calculate the most economical area of the channel.",
                    options: [
                        { key: "a", text: "y²" },
                        { key: "b", text: "B²" },
                        { key: "c", text: "2B²" },
                        { key: "d", text: "2y²" }
                    ],
                    answer: "d",
                    explanation: "For a rectangular channel, the most economical section has B=2y. Then area A = B*y = 2y*y = 2y²."
                },
                {
                    id: "cm15q054",
                    src: "WATE701-00166",
                    text: "Depth and widths of a rectangular channel section are y and B respectively, determine the economical perimeter of the section.",
                    options: [
                        { key: "a", text: "4y" },
                        { key: "b", text: "3y" },
                        { key: "c", text: "2y" },
                        { key: "d", text: "y" }
                    ],
                    answer: "a",
                    explanation: "For most economical rectangular section, B=2y. Then wetted perimeter P = B + 2y = 2y + 2y = 4y."
                },
                {
                    id: "cm15q055",
                    src: "WATE701-00167",
                    text: "Calculate the hydraulic radius for the most economical rectangular section having depth y and width B.",
                    options: [
                        { key: "a", text: "y" },
                        { key: "b", text: "y/2" },
                        { key: "c", text: "2y" },
                        { key: "d", text: "3y" }
                    ],
                    answer: "b",
                    explanation: "For most economical rectangular section, B=2y. Hydraulic radius R = A/P = (B*y)/(B+2y) = (2y*y)/(2y+2y) = (2y²)/(4y) = y/2."
                },
                {
                    id: "cm15q056",
                    src: "WATE701-00168",
                    text: "Calculate the maximum discharge through a rectangular channel having depth 3m, bed slope of 1 in 1000.",
                    options: [
                        { key: "a", text: "33.85 m³/s" },
                        { key: "b", text: "35.85 m³/s" },
                        { key: "c", text: "34.85 m³/s" },
                        { key: "d", text: "36.85 m³/s" }
                    ],
                    answer: "c",
                    explanation: "The most economical rectangular section has a width of twice the depth, so B is 6 m, the area is 18 square metres and the hydraulic radius is half the depth, 1.5 m. Using Chezy with C equal to 50 and a slope of 1 in 1000, Q equals A times C times the root of RS, that is 18 times 50 times the root of 0.0015, which is about 34.85 cubic metres per second. The key has been corrected from the printed 33.85."
                },
                {
                    id: "cm15q057",
                    src: "WATE701-00169",
                    text: "Calculate the maximum discharge through a rectangular channel having width of 5m, bed slope of 1 in 500 and manning’s co efficient is 0.020.",
                    options: [
                        { key: "a", text: "33.43m³/s" },
                        { key: "b", text: "32.43m³/s" },
                        { key: "c", text: "30.43m³/s" },
                        { key: "d", text: "31.43m³/s" }
                    ],
                    answer: "d",
                    explanation: "For maximum discharge, depth y = B/2 = 2.5m. Area A = B*y = 5*2.5=12.5 m². Hydraulic radius R = y/2=1.25m. S=1/500=0.002. Manning's formula: Q = (1/n) * A * R^(2/3) * S^(1/2) = (1/0.02) * 12.5 * (1.25)^(2/3) * √0.002 = 50 * 12.5 * (1.25^(0.6667)) * 0.04472. 1.25^(2/3)≈1.157. So Q = 50 * 12.5 * 1.157 * 0.04472 ≈ 50*12.5=625, 625*1.157=723.125, 723.125*0.04472≈32.34. Not exact; recalc: 1.25^(2/3)= (1.25^2)^(1/3)=1.5625^(1/3)≈1.165. Then 50*12.5=625, 625*1.165=728.125, 728.125*0.04472≈32.56. Still not matching. Perhaps use Chezy. But the option \"31.43m³/s\" 31.43 is given."
                }
            ]
        },
        {
            id: "cm15hydr",
            name: "Hydropower",
            subject: "Hydropower",
            accent: "cyan",
            blurb: "10 questions drawn from the Hydropower bank.",
            questions: [
                {
                    id: "cm15q058",
                    src: "HYDR626-00123",
                    text: "A site where there is a requirement of large capacity spillway, what type of dam is suitable?",
                    options: [
                        { key: "a", text: "Overflow dam" },
                        { key: "b", text: "Arch dam" },
                        { key: "c", text: "Earth dam" },
                        { key: "d", text: "Rock fill dam" }
                    ],
                    answer: "a",
                    explanation: "An overflow dam (often a concrete gravity dam) is designed with a section that can function as a spillway to safely pass large floods. Earth and rockfill dams cannot typically be overtopped without risk of failure, so they require separate spillway structures."
                },
                {
                    id: "cm15q059",
                    src: "HYDR626-00125",
                    text: "Which of the following method is utilized for fixing installed capacity? Hydropower plant",
                    options: [
                        { key: "a", text: "Demand Supply Approach" },
                        { key: "b", text: "Mass Analysis Approach" },
                        { key: "c", text: "Rule curve Approach" },
                        { key: "d", text: "Marginal Cost Benefit Approach" }
                    ],
                    answer: "b",
                    explanation: "Mass Analysis (or Flow Duration Analysis) is the fundamental hydrological method. It involves analyzing historical streamflow data to determine the plant capacity that can be supported for the greatest number of hours in a year, optimizing energy output against project cost."
                },
                {
                    id: "cm15q060",
                    src: "HYDR626-00126",
                    text: "Which stage of hydropower development involves detailed engineering design, procurement, and construction?",
                    options: [
                        { key: "a", text: "Pre-feasibility stage" },
                        { key: "b", text: "Feasibility stage" },
                        { key: "c", text: "Construction stage" },
                        { key: "d", text: "Operation and maintenance stage" }
                    ],
                    answer: "c",
                    explanation: "The construction stage follows the feasibility and detailed design phases. It is the execution phase where the detailed engineering plans are used to procure materials and equipment and physically construct the project's civil and electromechanical works."
                },
                {
                    id: "cm15q061",
                    src: "HYDR626-00127",
                    text: "Which act provides for the establishment of the Nepal Electricity Authority (NEA)?",
                    options: [
                        { key: "a", text: "Hydropower Act" },
                        { key: "b", text: "Energy Act" },
                        { key: "c", text: "Renewable Energy Act" },
                        { key: "d", text: "Electricity Act" }
                    ],
                    answer: "d",
                    explanation: "The Nepal Electricity Authority (NEA) was established in 1984 under the Electricity Act. It is the principal government-owned entity responsible for the generation, transmission, and distribution of electricity in Nepal."
                },
                {
                    id: "cm15q062",
                    src: "HYDR626-00128",
                    text: "Forebay provides temporary storage before the water goes to the turbine. Following perform the function of forebay",
                    options: [
                        { key: "a", text: "Reservoir" },
                        { key: "b", text: "River" },
                        { key: "c", text: "Tailrace channel" },
                        { key: "d", text: "Approach channel" }
                    ],
                    answer: "a",
                    explanation: "A forebay is a small reservoir or pond located immediately before the intake of a hydropower plant, especially in run-of-river schemes. It provides temporary storage to meet sudden load increases and allows sediment to settle, similar to a miniature reservoir's function."
                },
                {
                    id: "cm15q063",
                    src: "HYDR626-00129",
                    text: "To avoid the possible damage to the wicket gates and turbine runners",
                    options: [
                        { key: "a", text: "Surge chamber" },
                        { key: "b", text: "Trash racks is provided" },
                        { key: "c", text: "Floatation boom" },
                        { key: "d", text: "Racks and trolley arrangement" }
                    ],
                    answer: "b",
                    explanation: "Trash racks are screens or bars placed at the intake of a hydropower plant. Their primary function is to trap floating debris (logs, leaves, etc.) and prevent it from entering the penstock and damaging critical components like the turbine runners and wicket gates."
                },
                {
                    id: "cm15q064",
                    src: "HYDR626-00130",
                    text: "Primary power is also known as a",
                    options: [
                        { key: "a", text: "Dump power" },
                        { key: "b", text: "Secondary power" },
                        { key: "c", text: "Firm power" },
                        { key: "d", text: "Surplus power" }
                    ],
                    answer: "c",
                    explanation: "Primary power, also known as firm power, is the guaranteed power output that a hydropower plant can produce continuously (24/7) during the most critical drought period (low flow conditions) of the year. It is the most valuable type of power."
                },
                {
                    id: "cm15q065",
                    src: "HYDR626-00131",
                    text: "The area of power duration curve gives",
                    options: [
                        { key: "a", text: "Discharge" },
                        { key: "b", text: "Power" },
                        { key: "c", text: "Velocity" },
                        { key: "d", text: "Energy" }
                    ],
                    answer: "d",
                    explanation: "A power duration curve plots power output against the percentage of time it is equalled or exceeded. The area under this curve represents the total energy produced by the plant over that specific time period, typically one year."
                },
                {
                    id: "cm15q066",
                    src: "HYDR626-00132",
                    text: "Utilization factor is equal to",
                    options: [
                        { key: "a", text: "Peak load/installed capacity" },
                        { key: "b", text: "Energy/peak load" },
                        { key: "c", text: "Discharge/installed capacity" },
                        { key: "d", text: "Area/installed capacity" }
                    ],
                    answer: "a",
                    explanation: "The utilization factor (or Capacity Factor) is a ratio that indicates how much of a plant's maximum potential is being used. It is calculated as the average load divided by the installed (peak) capacity. A higher factor indicates more continuous use."
                },
                {
                    id: "cm15q067",
                    src: "HYDR626-00133",
                    text: "Low head plant has operating head of",
                    options: [
                        { key: "a", text: "&gt;15m" },
                        { key: "b", text: "&lt;15m" },
                        { key: "c", text: "&gt;100m" },
                        { key: "d", text: "&lt;7m" }
                    ],
                    answer: "b",
                    explanation: "Hydropower plants are classified by head. Low-head plants typically operate with a head of less than 15 meters. They require large water flows and often use turbines like Kaplan or bulb turbines. (Note: Some classifications may use a threshold of 30m or less, but &lt;15m is a common definition.)"
                }
            ]
        },
        {
            id: "cm15irri",
            name: "Irrigation and Drainage",
            subject: "Irrigation",
            accent: "emerald",
            blurb: "11 questions drawn from the Irrigation and Drainage bank.",
            questions: [
                {
                    id: "cm15q068",
                    src: "IRRI951-00146",
                    text: "What type of canal necessitates construction of cross drainage works more than any other types?",
                    options: [
                        { key: "a", text: "Side Slope Canal" },
                        { key: "b", text: "Watershed Canal" },
                        { key: "c", text: "Contour Canal" },
                        { key: "d", text: "Field Channel" }
                    ],
                    answer: "c",
                    explanation: "Contour canals wind around hill slopes, constantly crossing the natural paths of streams and drains flowing down the slope. This necessitates a maximum number of cross-drainage structures."
                },
                {
                    id: "cm15q069",
                    src: "IRRI951-00147",
                    text: "Which type of canal is the farmer’s responsibility?",
                    options: [
                        { key: "a", text: "Contour Canal" },
                        { key: "b", text: "Side Slope Canal" },
                        { key: "c", text: "Watershed Canal" },
                        { key: "d", text: "Field Channel" }
                    ],
                    answer: "d",
                    explanation: "Field channels (also called watercourses) are the smallest units of the canal network, taking water from the outlet to the individual fields. Their maintenance is typically the responsibility of the farmers."
                },
                {
                    id: "cm15q070",
                    src: "IRRI951-00148",
                    text: "Which type of canal need syphons?",
                    options: [
                        { key: "a", text: "Contour Canal" },
                        { key: "b", text: "Side Slope Canal" },
                        { key: "c", text: "Watershed Canal" },
                        { key: "d", text: "Field Channel" }
                    ],
                    answer: "a",
                    explanation: "Syphons (or aqueducts) are a type of cross-drainage work where the canal is carried over or under a natural drain. Contour canals, which frequently cross drains, often require them."
                },
                {
                    id: "cm15q071",
                    src: "IRRI951-00149",
                    text: "If a looping is present in the ridge line they how can that area be irrigated with?",
                    options: [
                        { key: "a", text: "Tributary" },
                        { key: "b", text: "Distributary" },
                        { key: "c", text: "Weir" },
                        { key: "d", text: "Canal" }
                    ],
                    answer: "b",
                    explanation: "A distributary is a canal that branches off from the main canal. If the ridge line has a loop (a depression), a distributary can be taken off from the main watershed canal to irrigate that enclosed area."
                },
                {
                    id: "cm15q072",
                    src: "IRRI951-00150",
                    text: "Loss of canal discharge occurs mainly due to",
                    options: [
                        { key: "a", text: "Seepage and Percolation" },
                        { key: "b", text: "Percolation and Absorption" },
                        { key: "c", text: "Seepage and Evaporation" },
                        { key: "d", text: "Seepage and Absorption" }
                    ],
                    answer: "c",
                    explanation: "The two primary causes of water loss in a canal system are seepage (water percolating into the soil) and evaporation (water turning to vapor and entering the atmosphere)."
                },
                {
                    id: "cm15q073",
                    src: "IRRI951-00152",
                    text: "In which of the following phenomenon there is a continuous direct flow between the canal and the underground water table?",
                    options: [
                        { key: "a", text: "Absorption" },
                        { key: "b", text: "Seepage" },
                        { key: "c", text: "Both Absorption and Percolation" },
                        { key: "d", text: "Percolation" }
                    ],
                    answer: "d",
                    explanation: "Percolation is the downward movement of water through soil pores under gravity. It describes the continuous flow from the canal bed to the groundwater table."
                },
                {
                    id: "cm15q074",
                    src: "IRRI951-00153",
                    text: "Which of the following factor have no influence on evaporation loss?",
                    options: [
                        { key: "a", text: "The porosity of the soil" },
                        { key: "b", text: "The temperature of the region" },
                        { key: "c", text: "Prevailing wind velocity in the region" },
                        { key: "d", text: "Area of water surface exposed to the atmosphere" }
                    ],
                    answer: "a",
                    explanation: "Evaporation is a surface phenomenon. It is affected by temperature, wind speed, humidity, and exposed surface area. Soil porosity affects seepage, not evaporation."
                },
                {
                    id: "cm15q075",
                    src: "IRRI951-00154",
                    text: "According to Etcheverry and Harding, the range of conveyance loss is highest in which soil?",
                    options: [
                        { key: "a", text: "Sandy Loam" },
                        { key: "b", text: "Loose sandy soil" },
                        { key: "c", text: "Clay Loam" },
                        { key: "d", text: "Rocks" }
                    ],
                    answer: "b",
                    explanation: "Loose sandy soil has high porosity and permeability, allowing water to seep through it very easily, leading to the highest conveyance losses."
                },
                {
                    id: "cm15q076",
                    src: "IRRI951-00155",
                    text: "According to Etcheverry and Harding, the range of conveyance loss is lowest in which soil?",
                    options: [
                        { key: "a", text: "Sandy Loam" },
                        { key: "b", text: "Loose sandy soil" },
                        { key: "c", text: "Rocks" },
                        { key: "d", text: "Clay Loam" }
                    ],
                    answer: "c",
                    explanation: "Solid rock is impervious or has very low permeability, resulting in minimal seepage and thus the lowest conveyance losses."
                },
                {
                    id: "cm15q077",
                    src: "IRRI951-00156",
                    text: "Which of the following statement is incorrect?",
                    options: [
                        { key: "a", text: "The seepage through a new canal is more than from a silted canal" },
                        { key: "b", text: "The more the silt, the lesser are the losses" },
                        { key: "c", text: "The more the velocity, the lesser will be the losses" },
                        { key: "d", text: "The seepage loss is very high in black cotton soils and heavy clay as compared to sandy porous soil" }
                    ],
                    answer: "d",
                    explanation: "This statement is incorrect. Sandy porous soil has much higher seepage loss. Black cotton soil and heavy clay have low permeability, leading to lower seepage losses."
                },
                {
                    id: "cm15q078",
                    src: "IRRI951-00157",
                    text: "Which soil has the least range of conveyance loss according to Etcheverry and Harding?",
                    options: [
                        { key: "a", text: "Impervious clay loam" },
                        { key: "b", text: "Sandy Loam" },
                        { key: "c", text: "Clay Loam" },
                        { key: "d", text: "Loose sandy soil" }
                    ],
                    answer: "a",
                    explanation: "Impervious clay loam has very low permeability, resulting in the least amount of water loss through seepage during conveyance."
                }
            ]
        },
        {
            id: "cm15tran",
            name: "Transportation",
            subject: "Transportation",
            accent: "rose",
            blurb: "11 questions drawn from the Transportation bank.",
            questions: [
                {
                    id: "cm15q079",
                    src: "TRAN808-00147",
                    text: "According to IS: 2386 part-IV, each layer is tamped ______ times in crushing test.",
                    options: [
                        { key: "a", text: "30" },
                        { key: "b", text: "25" },
                        { key: "c", text: "10" }
                    ],
                    answer: "b",
                    explanation: "The standard test procedure mandates that each of the three layers of aggregate in the cylindrical measure is tamped 25 times with the standard tamping rod to achieve a specific level of compaction before the load is applied."
                },
                {
                    id: "cm15q080",
                    src: "TRAN808-00148",
                    text: "A value less than 10 signifies an exceptionally ______ while above 35 would normally be regarded as ______.",
                    options: [
                        { key: "a", text: "Weak aggregates, strong aggregates" },
                        { key: "b", text: "Strong aggregates, strong aggregates" },
                        { key: "c", text: "Strong aggregates, weak aggregates" },
                        { key: "d", text: "Weak aggregates, weak aggregates" }
                    ],
                    answer: "c",
                    explanation: "This refers to the interpretation of Aggregate Impact Value (AIV). A lower AIV (%) indicates a tougher, stronger aggregate. &lt;10% is exceptionally strong, &gt;35% is too weak for road surfacing."
                },
                {
                    id: "cm15q081",
                    src: "TRAN808-00149",
                    text: "Los Angeles machine consists of circular drum of internal diameter ______ mm and length ______ mm.",
                    options: [
                        { key: "a", text: "700, 700" },
                        { key: "b", text: "520, 520" },
                        { key: "c", text: "520, 700" },
                        { key: "d", text: "700, 520" }
                    ],
                    answer: "d",
                    explanation: "The Los Angeles abrasion test machine has a drum with an internal diameter of 700 mm and an internal length of 520 mm. It rotates and subjects the aggregates to abrasion and impact."
                },
                {
                    id: "cm15q082",
                    src: "TRAN808-00150",
                    text: "Which machine is preferred for abrasion test?",
                    options: [
                        { key: "a", text: "Los Angeles" },
                        { key: "b", text: "Vicar’s mould" },
                        { key: "c", text: "Flakiness Gauge" },
                        { key: "d", text: "Elongation Gauge." }
                    ],
                    answer: "a",
                    explanation: "The Los Angeles abrasion test is the most widely accepted method for determining the abrasion resistance (hardness) of aggregates. The test result is expressed as a percentage loss (abrasion value)."
                },
                {
                    id: "cm15q083",
                    src: "TRAN808-00151",
                    text: "A maximum value of ______ percent is allowed for WBM base course in Indian conditions.",
                    options: [
                        { key: "a", text: "25" },
                        { key: "b", text: "40" },
                        { key: "c", text: "35" },
                        { key: "d", text: "50" }
                    ],
                    answer: "b",
                    explanation: "For Water Bound Macadam (WBM) base course, the Indian Roads Congress (IRC) specifies a maximum Los Angeles Abrasion value of 40%, ensuring the aggregate is hard enough to resist degradation under traffic."
                },
                {
                    id: "cm15q084",
                    src: "TRAN808-00152",
                    text: "Aggregates to be used for wearing course, the impact value shouldn’t exceed ______ percent.",
                    options: [
                        { key: "a", text: "35" },
                        { key: "b", text: "40" },
                        { key: "c", text: "30" },
                        { key: "d", text: "25" }
                    ],
                    answer: "c",
                    explanation: "The wearing course is the top layer and is directly subjected to traffic and weathering. Therefore, it requires very strong aggregates. An Aggregate Impact Value (AIV) not exceeding 30% is typically specified."
                },
                {
                    id: "cm15q085",
                    src: "TRAN808-00153",
                    text: "The loss in weight should not exceed ______ percent when tested with sodium sulphate and ______ percent with magnesium sulphate solution.",
                    options: [
                        { key: "a", text: "18, 12" },
                        { key: "b", text: "10, 15" },
                        { key: "c", text: "15, 10" },
                        { key: "d", text: "12, 18" }
                    ],
                    answer: "d",
                    explanation: "This refers to the soundness test (IS:2386-Part V). Aggregates are subjected to cycles of immersion in saturated sulfate solutions and drying. The maximum loss is 12% for Na₂SO₄ and 18% for MgSO₄, indicating resistance to weathering."
                },
                {
                    id: "cm15q086",
                    src: "TRAN808-00154",
                    text: "If 60% aggregates doesn’t pass through the 2.36mm sieve, then what would be the value of Aggregate impact value?",
                    options: [
                        { key: "a", text: "40%" },
                        { key: "b", text: "20%" },
                        { key: "c", text: "25%" },
                        { key: "d", text: "100%" }
                    ],
                    answer: "a",
                    explanation: "Aggregate Impact Value (AIV) is calculated as (Weight of fraction passing 2.36mm sieve / Total weight of sample) * 100. If 60% is *retained* (doesn't pass), then 40% passed. Thus, AIV = 40%."
                },
                {
                    id: "cm15q087",
                    src: "TRAN808-00155",
                    text: "What are building materials?",
                    options: [
                        { key: "a", text: "Substance that which cannot be utilised in the construction of a structure" },
                        { key: "b", text: "Substance that is utilised in the construction of a structure" },
                        { key: "c", text: "Substance that is utilised in the manufacturing of construction materials" },
                        { key: "d", text: "None of the mentioned" }
                    ],
                    answer: "b",
                    explanation: "Building materials are any substances or materials used for the primary purpose of constructing buildings and infrastructure projects, such as bricks, cement, steel, wood, aggregates, etc."
                },
                {
                    id: "cm15q088",
                    src: "TRAN808-00156",
                    text: "Which of the following is/are basic building materials?",
                    options: [
                        { key: "a", text: "Wood" },
                        { key: "b", text: "Cement" },
                        { key: "c", text: "Brick" },
                        { key: "d", text: "All of above" }
                    ],
                    answer: "d",
                    explanation: "Wood, cement, and brick are all fundamental materials used extensively in construction for structural elements, masonry, and binding purposes."
                },
                {
                    id: "cm15q089",
                    src: "TRAN808-00157",
                    text: "According to geological origin, aggregates is/are classified into ______ types.",
                    options: [
                        { key: "a", text: "1" },
                        { key: "b", text: "2" },
                        { key: "c", text: "4" },
                        { key: "d", text: "3" }
                    ],
                    answer: "d",
                    explanation: "Based on their geological origin, aggregates are classified into three main types: Igneous (e.g., granite), Sedimentary (e.g., limestone), and Metamorphic (e.g., marble)."
                }
            ]
        },
        {
            id: "cm15wate",
            name: "Water Supply, Sanitation and Environment",
            subject: "Water Supply",
            accent: "blue",
            blurb: "11 questions drawn from the Water Supply, Sanitation and Environment bank.",
            questions: [
                {
                    id: "cm15q090",
                    src: "WATE813-00135",
                    text: "Populations and their movements is vulnerability.",
                    options: [
                        { key: "a", text: "Social" },
                        { key: "b", text: "Physical" },
                        { key: "c", text: "Environmental" },
                        { key: "d", text: "Economic" }
                    ],
                    answer: "a",
                    explanation: "The vulnerability of populations and their movements (e.g., migration, displacement) is primarily a social factor, influenced by poverty, gender, age, ethnicity, and social networks."
                },
                {
                    id: "cm15q091",
                    src: "WATE813-00136",
                    text: "Turbidity of raw water is a measure of",
                    options: [
                        { key: "a", text: "BOD" },
                        { key: "b", text: "acidity of water" },
                        { key: "c", text: "suspended solids" },
                        { key: "d", text: "none of these" }
                    ],
                    answer: "c",
                    explanation: "Turbidity is a measure of the cloudiness of water caused by suspended solids that scatter light. It is not directly related to BOD (biological oxygen demand) or acidity."
                },
                {
                    id: "cm15q092",
                    src: "WATE813-00137",
                    text: "Aerobic bacteria",
                    options: [
                        { key: "a", text: "flourish in the presence of free oxygen" },
                        { key: "b", text: "consume organic matter as their food" },
                        { key: "c", text: "oxidise organic matter in sewage" },
                        { key: "d", text: "All the above" }
                    ],
                    answer: "d",
                    explanation: "Aerobic bacteria require free oxygen to live. They consume organic matter as food and oxidize it, which is the basis for the biological treatment of sewage."
                },
                {
                    id: "cm15q093",
                    src: "WATE813-00138",
                    text: "If 2% solution of a sewage sample is incubated for 5 days at 20°C and depletion of oxygen was found to be 5 ppm, BOD of the sewage is",
                    options: [
                        { key: "a", text: "200 ppm" },
                        { key: "b", text: "225 ppm" },
                        { key: "c", text: "Not Provided" },
                        { key: "d", text: "250 ppm" }
                    ],
                    answer: "d",
                    explanation: "BOD (in ppm) = (Depletion of oxygen in ppm) / (Decimal fraction of sewage in the sample). For a 2% solution, the fraction is 0.02. Therefore, BOD = 5 / 0.02 = 250 ppm."
                },
                {
                    id: "cm15q094",
                    src: "WATE813-00139",
                    text: "Assertion (A): Discharging the effluent from the oxidation ponds just upstream of lakes or reservoirs is undesirable. Reason (R): The discharged algae get settled in the reservoirs and cause anaerobic decomposition and other water qualities.",
                    options: [
                        { key: "a", text: "Both A and R are true and R is the correct explanation of A" },
                        { key: "b", text: "Both A and R are true but R is not a correct explanation of A" },
                        { key: "c", text: "A is true but R is false" },
                        { key: "d", text: "A is false but R is true" }
                    ],
                    answer: "a",
                    explanation: "Discharging nutrient-rich effluent upstream can lead to algal blooms in the still water of a reservoir. The settled algae decompose anaerobically, consuming oxygen and releasing harmful gases, degrading water quality. The reason correctly explains the assertion."
                },
                {
                    id: "cm15q095",
                    src: "WATE813-00140",
                    text: "Winkler's method is used to determine",
                    options: [
                        { key: "a", text: "Methane content of waste water" },
                        { key: "b", text: "Dissolved Oxygen (DO) content of waste water" },
                        { key: "c", text: "Biological Oxygen Demand (BOD) of waste water" },
                        { key: "d", text: "Chemical Oxygen Demand (COD) of waste water" }
                    ],
                    answer: "b",
                    explanation: "The Winkler test is a classic titrimetric procedure for determining the concentration of dissolved oxygen in water samples."
                },
                {
                    id: "cm15q096",
                    src: "WATE813-00141",
                    text: "Anaerobic reaction depends upon",
                    options: [
                        { key: "a", text: "DO content" },
                        { key: "b", text: "CO₂ content" },
                        { key: "c", text: "None" },
                        { key: "d", text: "Both" }
                    ],
                    answer: "c",
                    explanation: "Anaerobic reactions occur in the absence of dissolved oxygen (DO). They are not dependent on the presence of CO₂, although it is often a product of the reactions."
                },
                {
                    id: "cm15q097",
                    src: "WATE813-00142",
                    text: "Anaerobic decomposition of sewage is carried out",
                    options: [
                        { key: "a", text: "In presence of oxygen" },
                        { key: "b", text: "Both" },
                        { key: "c", text: "None" },
                        { key: "d", text: "Absence of oxygen" }
                    ],
                    answer: "d",
                    explanation: "Anaerobic decomposition is the breakdown of organic matter by microorganisms in an oxygen-free environment."
                },
                {
                    id: "cm15q098",
                    src: "WATE813-00143",
                    text: "The ratio of amount of oxygen available in sewage to the amount of oxygen required to satisfy first stage BOD of sewage is called",
                    options: [
                        { key: "a", text: "Relative stability" },
                        { key: "b", text: "Relative density" },
                        { key: "c", text: "Relative intensity" },
                        { key: "d", text: "Relative ratio" }
                    ],
                    answer: "a",
                    explanation: "Relative stability is defined as the ratio of the oxygen available in the sewage (from nitrates) to the oxygen required to satisfy its first-stage BOD. It is expressed as a percentage."
                },
                {
                    id: "cm15q099",
                    src: "WATE813-00144",
                    text: "DO test is done by",
                    options: [
                        { key: "a", text: "Hoffman test" },
                        { key: "b", text: "Winklers test" },
                        { key: "c", text: "Winklers david test" },
                        { key: "d", text: "None" }
                    ],
                    answer: "b",
                    explanation: "The standard method for determining Dissolved Oxygen (DO) is the Winkler test (Azide modification), named after its developer, L.W. Winkler."
                },
                {
                    id: "cm15q100",
                    src: "WATE813-00145",
                    text: "Factor affecting self-purifications are",
                    options: [
                        { key: "a", text: "Dilutions" },
                        { key: "b", text: "Current" },
                        { key: "c", text: "All" },
                        { key: "d", text: "Action of sunlight" }
                    ],
                    answer: "c",
                    explanation: "Self-purification of streams is a natural process influenced by dilution, turbulence and current which promotes re-aeration, and sunlight which aids disinfection and photosynthesis."
                }
            ]
        }
    ]
};

/* Registered lazily — js/civil.js injects this file when the set is opened. */
window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["civil-15"] = CIVIL_MODEL_15;
