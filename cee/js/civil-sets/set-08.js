/* ============================================================
   CIVIL MODEL SET 8 — Civil Engineering licence-style model paper
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
const CIVIL_MODEL_8 = {
    day: 38,
    kind: "model",
    badge: { top: "Model", main: "C8" },
    title: "Civil Model Set 8",
    subtitle: "Civil Engineering · 9 subjects",
    durationMinutes: 120,
    negativeMarking: 0,
    chapters: [
        {
            id: "cm8basi",
            name: "Basic Civil Engineering",
            subject: "Basic Civil",
            accent: "blue",
            blurb: "13 questions drawn from the Basic Civil Engineering bank.",
            questions: [
                {
                    id: "cm8q001",
                    src: "BASI674-00080",
                    text: "In an adjusted level when the bubble is centered the axis of the bubble tube become parallel to",
                    options: [
                        { key: "a", text: "Line of sight" },
                        { key: "b", text: "Line of collimation" },
                        { key: "c", text: "Axis of the telescope" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "a",
                    explanation: "The fundamental line of a leveling instrument is the line of sight (or line of collimation, which are synonymous). The primary adjustment ensures that the axis of the bubble tube is parallel to the line of sight. When the bubble is centered, this axis is horizontal, making the line of sight horizontal."
                },
                {
                    id: "cm8q002",
                    src: "BASI674-00081",
                    text: "The line normal to the plumb line is known as",
                    options: [
                        { key: "a", text: "Horizontal line" },
                        { key: "b", text: "Level line" },
                        { key: "c", text: "Datum line" },
                        { key: "d", text: "Vertical line" }
                    ],
                    answer: "b",
                    explanation: "A plumb line follows the direction of gravity, which is a vertical line. A line perpendicular (normal) to the vertical is perfectly horizontal. This horizontal line is also called a level line."
                },
                {
                    id: "cm8q003",
                    src: "BASI674-00082",
                    text: "Leveling deals with measurement in :",
                    options: [
                        { key: "a", text: "Horizontal plane" },
                        { key: "b", text: "Vertical plane" },
                        { key: "c", text: "Both (a) and (b)" },
                        { key: "d", text: "Inclined plane" }
                    ],
                    answer: "b",
                    explanation: "Surveying is broadly divided into two operations: Planimetry (determining horizontal positions and distances) and Leveling (determining relative heights or elevations in the vertical plane)."
                },
                {
                    id: "cm8q004",
                    src: "BASI674-00083",
                    text: "The rise and fall method of leveling provides a complete check on :",
                    options: [
                        { key: "a", text: "Back sight" },
                        { key: "b", text: "Intermediate sight" },
                        { key: "c", text: "Fore sight" },
                        { key: "d", text: "All of above" }
                    ],
                    answer: "d",
                    explanation: "As explained in Q49, the arithmetic check (ΣBS - ΣFS = ΣRise - ΣFall = Last R.L. - First R.L.) in the rise and fall method incorporates all back sights (BS), intermediate sights (IS), and fore sights (FS), providing a check on the calculations for all readings."
                },
                {
                    id: "cm8q005",
                    src: "BASI674-00084",
                    text: "Cross hairs in surveying telescopes are fitted :",
                    options: [
                        { key: "a", text: "In front of the eyepiece" },
                        { key: "b", text: "In the objective lens." },
                        { key: "c", text: "At the centre of the telescope" },
                        { key: "d", text: "At the optical centre of the eyepiece" }
                    ],
                    answer: "a",
                    explanation: "Cross hairs (or stadia lines) are mounted on a diaphragm, which is located at the focal plane of the objective lens, which is in front of the eyepiece. This positioning ensures the cross hairs are in sharp focus simultaneously with the image of the staff."
                },
                {
                    id: "cm8q006",
                    src: "BASI674-00085",
                    text: "The fixed point, whose elevation is known, is called:",
                    options: [
                        { key: "a", text: "Change point" },
                        { key: "b", text: "Benchmark" },
                        { key: "c", text: "Reduced level" },
                        { key: "d", text: "Station" }
                    ],
                    answer: "b",
                    explanation: "A benchmark (BM) is a permanent point of known elevation above a standard datum (like mean sea level). It is used as a reference point for leveling operations."
                },
                {
                    id: "cm8q007",
                    src: "BASI674-00086",
                    text: "The correction in elevations due to the curvature and refraction is proportional to :",
                    options: [
                        { key: "a", text: "D/R" },
                        { key: "b", text: "R/D²" },
                        { key: "c", text: "D²/R" },
                        { key: "d", text: "R/D" }
                    ],
                    answer: "c",
                    explanation: "The combined correction for curvature and refraction is given by C_cr = 0.0673 D², where D is the distance in kilometers. This shows the correction is proportional to the square of the distance (D²). The formula is derived from earth's radius R, making it proportional to D²/R."
                },
                {
                    id: "cm8q008",
                    src: "BASI674-00087",
                    text: "A level line is a :",
                    options: [
                        { key: "a", text: "Line passing through centre of cross hairs and centre of eye – piece" },
                        { key: "b", text: "Line passing through object line and the eye – piece" },
                        { key: "c", text: "Horizontal line" },
                        { key: "d", text: "Line Parallel to the mean spheroidal surface of earth." }
                    ],
                    answer: "d",
                    explanation: "A level line is a curved line on the earth's surface where every point is normal to the direction of gravity (plumb line) and is therefore an equipotential surface. It is parallel to the mean spheroidal surface of the earth, not a straight horizontal line."
                },
                {
                    id: "cm8q009",
                    src: "BASI674-00088",
                    text: "The height of instrument is equal to :",
                    options: [
                        { key: "a", text: "Reduced level of bench mark + back sight" },
                        { key: "b", text: "Reduced level of bench mark – back sight" },
                        { key: "c", text: "Reduced level of bench mark – fore sight" },
                        { key: "d", text: "Reduced level of bench mark + intermediate sight" }
                    ],
                    answer: "a",
                    explanation: "Height of Instrument (HI) is the elevation of the line of sight of the level. It is calculated by adding the Back Sight (BS) reading taken on a point of known Reduced Level (RL) to that RL: HI = RL(BM) + BS."
                },
                {
                    id: "cm8q010",
                    src: "BASI674-00089",
                    text: "A staff reading taken on a point whose elevation is to be determined as a change point is called:",
                    options: [
                        { key: "a", text: "Back sight reading" },
                        { key: "b", text: "Foresight reading" },
                        { key: "c", text: "Intermediate sight" },
                        { key: "d", text: "Long sight" }
                    ],
                    answer: "b",
                    explanation: "A Change Point (CP) is a point on which both a foresight (FS) and a backsight (BS) are taken. The foresight is taken to determine its elevation before the instrument is moved. The backsight is taken from the new instrument position to establish a new Height of Instrument."
                },
                {
                    id: "cm8q011",
                    src: "BASI674-00090",
                    text: "Which of the following is not a property of engineering materials?",
                    options: [
                        { key: "a", text: "Mechanical properties" },
                        { key: "b", text: "Chemical properties" },
                        { key: "c", text: "Polymorphism" },
                        { key: "d", text: "Electrical properties" }
                    ],
                    answer: "c",
                    explanation: "Mechanical, Chemical, and Electrical are all classes of material properties. Polymorphism is a characteristic (the ability of a solid material to exist in more than one form or crystal structure) but is not itself classified as a separate 'property' category like the others."
                },
                {
                    id: "cm8q012",
                    src: "BASI674-00091",
                    text: "For a good building stone how much is the required crushing strength?",
                    options: [
                        { key: "a", text: "&lt; 50 N/mm²" },
                        { key: "b", text: "155 N/mm²" },
                        { key: "c", text: "10 N/mm²" },
                        { key: "d", text: "&gt; 100 N/mm²" }
                    ],
                    answer: "d",
                    explanation: "A good building stone must have high compressive strength to withstand heavy loads. A crushing strength greater than 100 N/mm² (100 MPa) is generally considered acceptable for construction purposes."
                },
                {
                    id: "cm8q013",
                    src: "BASI674-00092",
                    text: "What is a freestone?",
                    options: [
                        { key: "a", text: "Stone free from veins and planes of cleavage" },
                        { key: "b", text: "Stone free from impurities" },
                        { key: "c", text: "Stone that doesn’t require dressing" },
                        { key: "d", text: "Metamorphic stone" }
                    ],
                    answer: "a",
                    explanation: "A freestone is a fine-grained sandstone or limestone that can be easily cut and carved in any direction without splitting or fracturing along inherent veins, beds, or planes of cleavage. This isotropic property is crucial for detailed stone carving."
                }
            ]
        },
        {
            id: "cm8stru",
            name: "Structural Mechanics",
            subject: "Structural Mech",
            accent: "cyan",
            blurb: "11 questions drawn from the Structural Mechanics bank.",
            questions: [
                {
                    id: "cm8q014",
                    src: "STRU935-00067",
                    text: "The simultaneous equations of slope deflection method can be solved by iteration in",
                    options: [
                        { key: "a", text: "Conjugate beam method" },
                        { key: "b", text: "Consistant deformation method" },
                        { key: "c", text: "Moment distribution method" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "c",
                    explanation: "Moment distribution is an iterative way of satisfying the same joint equilibrium equations that slope deflection sets up algebraically. Joints are locked, fixed end moments computed, then released one at a time and balanced until the carry-over moments become negligible."
                },
                {
                    id: "cm8q015",
                    src: "STRU935-00068",
                    text: "In a plastic analysis of structures, the segment between any two successive plastic hinges is assumed to deform as",
                    options: [
                        { key: "a", text: "A plastic material" },
                        { key: "b", text: "An elastic material" },
                        { key: "c", text: "A rigid material" },
                        { key: "d", text: "An inelastic material" }
                    ],
                    answer: "c",
                    explanation: "Plastic analysis assumes all the inelastic deformation concentrates at the hinges, so the lengths between successive hinges stay straight and simply rotate about them as rigid links. That is what turns the collapse mechanism into a simple kinematic problem."
                },
                {
                    id: "cm8q016",
                    src: "STRU935-00069",
                    text: "For a fixed-end beam of length L and central point load of W, what will be the value of W at collapse?",
                    options: [
                        { key: "a", text: "6Mp / L" },
                        { key: "b", text: "10Mp / L" },
                        { key: "c", text: "9Mp / L" },
                        { key: "d", text: "8Mp / L" }
                    ],
                    answer: "d",
                    explanation: "A fixed beam with a central point load needs three hinges to collapse, one at each support and one under the load. Equating external to internal work in that mechanism, W times L over 4 equals 4 Mp times theta, which gives a collapse load of 8 Mp over L."
                },
                {
                    id: "cm8q017",
                    src: "STRU935-00070",
                    text: "The horizontal thrust in a two hinged semi-circular arch subjected to UDL of w kN/m over left half span will be",
                    options: [
                        { key: "a", text: "2wR/3π" },
                        { key: "b", text: "4wR/3π" },
                        { key: "c", text: "wR/2" },
                        { key: "d", text: "wR" }
                    ],
                    answer: "a",
                    explanation: "For a two-hinged arch the horizontal thrust follows from the strain energy condition, the integral of My ds over EI divided by the integral of y squared ds over EI. Carrying that out for a semicircular arch loaded over half the span gives a thrust of the order of wR over pi."
                },
                {
                    id: "cm8q018",
                    src: "STRU935-00071",
                    text: "Stiffness for free end if far end is fixed.",
                    options: [
                        { key: "a", text: "2E/L" },
                        { key: "b", text: "4E/L" },
                        { key: "c", text: "3E/L" },
                        { key: "d", text: "E/L" }
                    ],
                    answer: "b",
                    explanation: "Stiffness is the moment needed at the near end to produce unit rotation there. With the far end fully fixed it is 4EI over L; if the far end were pinned it would drop to 3EI over L, and with a guided far end only EI over L. The key has been corrected to the fixed-end value."
                },
                {
                    id: "cm8q019",
                    src: "STRU935-00072",
                    text: "For given two hinged semicircular arches A, B and C of radii 5 m, 7.5 m, and 10 m respectively and carrying concentrated crown load 'W', ratio of horizontal thrust at their support will be.",
                    options: [
                        { key: "a", text: "1:1:1" },
                        { key: "b", text: "1:1.5:2" },
                        { key: "c", text: "2:1.5:1" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "a",
                    explanation: "For a two-hinged semicircular arch carrying a point load at the crown, the horizontal thrust works out as W over pi, with the radius cancelling out of the strain energy integrals. All three arches therefore develop the same thrust, so the ratio is 1:1:1."
                },
                {
                    id: "cm8q020",
                    src: "STRU935-00073",
                    text: "For a two hinged arch having constant EI, the horizontal thrust H at a point (x, y) on the arch, in terms of beam moment M is given by",
                    options: [
                        { key: "a", text: "∫(My dy/dx) / ∫(y ds/EI)" },
                        { key: "b", text: "∫(My² dy/dx) / ∫(y² ds/EI)" },
                        { key: "c", text: "∫(My dy/dx) / ∫(y² ds/EI)" }
                    ],
                    answer: "c",
                    explanation: "The horizontal thrust in a two-hinged arch comes from minimising strain energy, which gives H as the integral of the beam moment times y, divided by the integral of y squared, both weighted by ds over EI. The numerator carries the applied loading and the denominator only the geometry."
                },
                {
                    id: "cm8q021",
                    src: "STRU935-00074",
                    text: "The equivalent length is of a column of length L having both the ends fixed, is",
                    options: [
                        { key: "a", text: "L/2" },
                        { key: "b", text: "2L" },
                        { key: "c", text: "L" },
                        { key: "d", text: "L/√2" }
                    ],
                    answer: "a",
                    explanation: "Fixing both ends puts points of contraflexure at the quarter points, so the portion that actually buckles behaves like a pin-ended column of length L over 2. That is the equivalent or effective length used in Euler's formula."
                },
                {
                    id: "cm8q022",
                    src: "STRU935-00075",
                    text: "A column of length L is fixed at both ends. It is equivalent to another column with both ends hinged having length .....",
                    options: [
                        { key: "a", text: "L" },
                        { key: "b", text: "L/2" },
                        { key: "c", text: "2L" },
                        { key: "d", text: "L/√2" }
                    ],
                    answer: "b",
                    explanation: "A column fixed at both ends buckles in the same way as a hinged-hinged column of half its length, so it carries four times the Euler load. This equivalence is exactly what the effective length concept expresses."
                },
                {
                    id: "cm8q023",
                    src: "STRU935-00076",
                    text: "In slope deflection method, the slope and deflection of joints are computed using",
                    options: [
                        { key: "a", text: "Stiffness of joint" },
                        { key: "b", text: "elasticity of joint" },
                        { key: "c", text: "equilibrium of joint" },
                        { key: "d", text: "equilibrium of structure" }
                    ],
                    answer: "c",
                    explanation: "In slope deflection the member end moments are written in terms of the unknown joint rotations and sway, and those unknowns are then found by writing equilibrium at each joint, that is the sum of the member end moments at a joint equals the applied moment."
                },
                {
                    id: "cm8q024",
                    src: "STRU935-00077",
                    text: "For a simply supported beam of effective span 10m, the normal span to depth ratio is",
                    options: [
                        { key: "a", text: "26" },
                        { key: "b", text: "30" },
                        { key: "c", text: "6" },
                        { key: "d", text: "20" }
                    ],
                    answer: "d",
                    explanation: "IS 456 gives a basic span to effective depth ratio of 20 for a simply supported beam, with 7 for a cantilever and 26 for a continuous beam. Meeting it usually means deflection need not be calculated explicitly."
                }
            ]
        },
        {
            id: "cm8desi",
            name: "Design of Structures",
            subject: "Design of Str",
            accent: "slate",
            blurb: "9 questions drawn from the Design of Structures bank.",
            questions: [
                {
                    id: "cm8q025",
                    src: "DESI787-00060",
                    text: "The shape factor of standard rolled beam section varies from",
                    options: [
                        { key: "a", text: "1.10 to 1.20" },
                        { key: "b", text: "1.20 to 1.30" },
                        { key: "c", text: "1.30 to 1.40" },
                        { key: "d", text: "1.40 to 1.50" }
                    ],
                    answer: "a",
                    explanation: "For standard rolled I-sections the shape factor, the ratio of plastic to elastic section modulus, is about 1.10 to 1.20. It is low because the flanges, which dominate both moduli, are already far from the neutral axis."
                },
                {
                    id: "cm8q026",
                    src: "DESI787-00061",
                    text: "Strengths of a rivet in single shearing, in bearing and in tearing are 3425 kg, 4575 kg and 5025 kg respectively. If the load in the member is 35 tonnes, the number of rivets required, is",
                    options: [
                        { key: "a", text: "10" },
                        { key: "b", text: "11" },
                        { key: "c", text: "12" },
                        { key: "d", text: "13" }
                    ],
                    answer: "b",
                    explanation: "The rivet value is the least of the three strengths, that is 3425 kg in single shear. Dividing the 35 tonne load, 35,000 kg, by 3425 gives 10.2, and since a part rivet is impossible the joint needs 11 rivets."
                },
                {
                    id: "cm8q027",
                    src: "DESI787-00062",
                    text: "For an I-beam, shape factor is 1.12. The factor of safety in bending is 1.5. If the allowable stress is increased by 20% for wind and earthquake loads, then the load factor is",
                    options: [
                        { key: "a", text: "1.1" },
                        { key: "b", text: "1.25" },
                        { key: "c", text: "1.4" },
                        { key: "d", text: "1.35" }
                    ],
                    answer: "c",
                    explanation: "The load factor is the shape factor times the factor of safety, that is 1.12 times 1.5, which is 1.68. Allowing the stress to rise 20 percent for wind or earthquake divides that by 1.2, leaving a load factor of 1.4. The key has been corrected from the printed 1.25."
                },
                {
                    id: "cm8q028",
                    src: "DESI787-00063",
                    text: "The lowest edge of the sloping surface of roof is called:",
                    options: [
                        { key: "a", text: "Ridge" },
                        { key: "b", text: "Rafters" },
                        { key: "c", text: "Pitch" },
                        { key: "d", text: "eaves" }
                    ],
                    answer: "d",
                    explanation: "The eaves are the lowest edge of a sloping roof, where the rainwater runs off into the gutter. The ridge is the highest line, the rafters are the sloping members and the pitch is the angle of slope. The key has been corrected accordingly."
                },
                {
                    id: "cm8q029",
                    src: "DESI787-00064",
                    text: "Strength of timber is maximum in the direction",
                    options: [
                        { key: "a", text: "Parallel to grain" },
                        { key: "b", text: "Across grain" },
                        { key: "c", text: "Perpendicular to the grain" },
                        { key: "d", text: "Same in everywhere" }
                    ],
                    answer: "a",
                    explanation: "Timber is far stronger along the grain than across it, because the cellulose fibres run lengthwise and carry the load directly. Across the grain the load must be taken by the much weaker bond between fibres, which is why timber splits so easily."
                },
                {
                    id: "cm8q030",
                    src: "DESI787-00065",
                    text: "Which NBC code deals with earthquake resistant design for low strength masonry?",
                    options: [
                        { key: "a", text: "NBC-202" },
                        { key: "b", text: "NBC-203" },
                        { key: "c", text: "NBC-204" },
                        { key: "d", text: "NBC-205" }
                    ],
                    answer: "b",
                    explanation: "NBC 203 covers guidelines for earthquake resistant building construction in low strength masonry, the traditional stone and mud mortar and brick construction that makes up much of Nepal's housing stock. NBC 205 deals with reinforced concrete frames."
                },
                {
                    id: "cm8q031",
                    src: "DESI787-00066",
                    text: "The law that governs the standards of construction of structural and non-structural buildings in Nepal is",
                    options: [
                        { key: "a", text: "Building bylaws" },
                        { key: "b", text: "Building code" },
                        { key: "c", text: "Building specification" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "b",
                    explanation: "The building code lays down the legally enforceable standards for the design and construction of both structural and non-structural elements. Building bylaws are local rules on land use, coverage, height and setbacks rather than structural safety."
                },
                {
                    id: "cm8q032",
                    src: "DESI787-00067",
                    text: "When purlins are placed between panel points the principal rafter is to be designed for",
                    options: [
                        { key: "a", text: "axial compression and tension" },
                        { key: "b", text: "axial compression" },
                        { key: "c", text: "axial tension and bending moment" },
                        { key: "d", text: "axial compression and bending moment" }
                    ],
                    answer: "d",
                    explanation: "A purlin landing between panel points applies its load to the rafter away from a node, so the rafter bends as well as carrying the truss axial force. It must therefore be designed for combined axial compression and bending."
                },
                {
                    id: "cm8q033",
                    src: "DESI787-00068",
                    text: "The maximum limit of the weight of fiberboards is",
                    options: [
                        { key: "a", text: "960 kg/m³" },
                        { key: "b", text: "1960 kg/m³" },
                        { key: "c", text: "2460 kg/m³" },
                        { key: "d", text: "2960 kg/m³" }
                    ],
                    answer: "a",
                    explanation: "Fibreboards are limited to a density of about 960 kg per cubic metre. Beyond that the product is classed as hardboard rather than fibreboard, and its working properties and uses are different."
                }
            ]
        },
        {
            id: "cm8soil",
            name: "Soil Mechanics and Foundation",
            subject: "Soil Mechanics",
            accent: "amber",
            blurb: "13 questions drawn from the Soil Mechanics and Foundation bank.",
            questions: [
                {
                    id: "cm8q034",
                    src: "SOIL136-00079",
                    text: "Which of the following is not assumptions of Terzaghi's bearing capacity theory?",
                    options: [
                        { key: "a", text: "Depth of foundation is less than or equal to its width" },
                        { key: "b", text: "Base of the footing is smooth" },
                        { key: "c", text: "Load applied in vertical and non-eccentric" },
                        { key: "d", text: "Soil is isotropic and homogenous" }
                    ],
                    answer: "b",
                    explanation: "Terzaghi assumed the base of the footing is rough, not smooth, because friction between the footing and the soil is what traps the wedge of soil beneath it and makes the elastic wedge move down with the footing. The other assumptions listed are all part of his theory."
                },
                {
                    id: "cm8q035",
                    src: "SOIL136-00080",
                    text: "Bearing capacity formula for cohesionless soil from the plate load test",
                    options: [
                        { key: "a", text: "Bp/Bf *Qu(p)" },
                        { key: "b", text: "Qu(p)" },
                        { key: "c", text: "Bf/Bp *Qu(p)" },
                        { key: "d", text: "2Qu(p)" }
                    ],
                    answer: "c",
                    explanation: "For cohesionless soils the ultimate bearing capacity scales directly with the width, so the value for the footing is the plate value multiplied by Bf over Bp. For clays it is independent of width, so the plate result applies unchanged."
                },
                {
                    id: "cm8q036",
                    src: "SOIL136-00081",
                    text: "The bearing capacity of soil depends on the water table correction factors Rw1 and Rw2. Specifically, the factor Rw2 is used to account for the water table position located:",
                    options: [
                        { key: "a", text: "Above the ground level" },
                        { key: "b", text: "At the ground level (GL)" },
                        { key: "c", text: "Between the ground level and the foundation base" },
                        { key: "d", text: "Below the foundation base" }
                    ],
                    answer: "d",
                    explanation: "In soil mechanics (specifically Terzaghi's modified equations), these factors adjust the bearing capacity based on the unit weight of soil when water is present: Rw1 (Surcharge Correction): Used when the water table is between the Ground Level and the Foundation Base. It affects the surcharge term (q). Rw2 (Base Correction): Used when the water table is at or Below the Foundation Base (within a depth equal to the width of the footing). It affects the self-weight term (γ)."
                },
                {
                    id: "cm8q037",
                    src: "SOIL136-00082",
                    text: "Soft rocks bearing capacity",
                    options: [
                        { key: "a", text: "450 KN/m²" },
                        { key: "b", text: "1200 KN/m²" },
                        { key: "c", text: "1620 KN/m²" },
                        { key: "d", text: "3240 KN/m²" }
                    ],
                    answer: "a",
                    explanation: "Soft rocks, such as shale, mudstone, and weathered sandstone, typically exhibit a safe bearing capacity of approximately 450 KN/m²."
                },
                {
                    id: "cm8q038",
                    src: "SOIL136-00083",
                    text: "The bearing capacity of soft clay in kPa is",
                    options: [
                        { key: "a", text: "50" },
                        { key: "b", text: "100" },
                        { key: "c", text: "150" },
                        { key: "d", text: "200" }
                    ],
                    answer: "b",
                    explanation: "Soft clay has a safe bearing capacity of roughly 100 kPa, that is about 10 tonnes per square metre. Stiff clay reaches two to three times that, while very soft clay and organic soils fall well below it."
                },
                {
                    id: "cm8q039",
                    src: "SOIL136-00084",
                    text: "Piston sampler is used for which type of soil?",
                    options: [
                        { key: "a", text: "Very soft clay" },
                        { key: "b", text: "Sand" },
                        { key: "c", text: "Clay" },
                        { key: "d", text: "Rock" }
                    ],
                    answer: "c",
                    explanation: "A piston sampler is used in very soft and sensitive clays. The piston stays at the top of the soil while the tube is pushed past it, which prevents the sample from slumping or being over-driven and keeps it far less disturbed."
                },
                {
                    id: "cm8q040",
                    src: "SOIL136-00085",
                    text: "Which of the following is correct?",
                    options: [
                        { key: "a", text: "1+n = 1/(1+e)" },
                        { key: "b", text: "n = 1/(1+e)" },
                        { key: "c", text: "n = 1/e" },
                        { key: "d", text: "1-n = 1/(1+e)" }
                    ],
                    answer: "d",
                    explanation: "Porosity is the void volume over the total volume and void ratio is the void volume over the solid volume, so n equals e over (1 plus e). Subtracting from one gives 1 minus n equal to 1 over (1 plus e), which is just the solid fraction. The pair of conversions, n equal to e over (1 plus e) and e equal to n over (1 minus n), is worth memorising because phase problems switch between them constantly."
                },
                {
                    id: "cm8q041",
                    src: "SOIL136-00086",
                    text: "A clay is ___ if it has been subjected to a pressure in excess of its present pressure.",
                    options: [
                        { key: "a", text: "Post consolidated" },
                        { key: "b", text: "Normally consolidated" },
                        { key: "c", text: "Over consolidated" },
                        { key: "d", text: "Any of above" }
                    ],
                    answer: "c",
                    explanation: "A clay that has once carried a greater effective pressure than it does now is over-consolidated. It behaves stiffly on reloading until the past maximum, the preconsolidation pressure, is exceeded, after which it follows the much steeper virgin compression line."
                },
                {
                    id: "cm8q042",
                    src: "SOIL136-00087",
                    text: "What is the meaning of bukling of sand?",
                    options: [
                        { key: "a", text: "Increase in weight of sand due to moisture absorption" },
                        { key: "b", text: "Increase in volume of sand due to moisture absorption." },
                        { key: "c", text: "Increase in mass of sand due to moisture absorption" },
                        { key: "d", text: "Increase in strength of sand due to moisture absorption" }
                    ],
                    answer: "b",
                    explanation: "Bulking is the increase in the volume of loose sand caused by moisture films holding the grains apart through surface tension. It reaches a maximum at around 4 to 6 percent moisture and disappears entirely when the sand is saturated."
                },
                {
                    id: "cm8q043",
                    src: "SOIL136-00088",
                    text: "Based on the assumptions of Rankine’s theory, the soil mass is ______",
                    options: [
                        { key: "a", text: "Stratified" },
                        { key: "b", text: "Submerged" },
                        { key: "c", text: "Homogeneous" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "c",
                    explanation: "Rankine's analysis assumes a dry, cohesionless, homogeneous and semi-infinite soil mass with a plane vertical back to the wall and no wall friction. Those simplifications are what allow the earth pressure coefficients to be written in closed form."
                },
                {
                    id: "cm8q044",
                    src: "SOIL136-00089",
                    text: "Calculate the active pressure intensity when the backfill has a unit weight of 18 KN/m³, a wall height of 6 m, an angle of internal friction of 30°, and a surcharge of 36 KN/m².",
                    options: [
                        { key: "a", text: "45 KN/m²" },
                        { key: "b", text: "75 KN/m²" },
                        { key: "c", text: "78 KN/m²" },
                        { key: "d", text: "48 KN/m²" }
                    ],
                    answer: "d",
                    explanation: "The active coefficient for a friction angle of 30 degrees is one third. The vertical stress at the base is 18 times 6, that is 108, plus the 36 kPa surcharge, giving 144 kPa, and one third of that is 48 kPa."
                },
                {
                    id: "cm8q045",
                    src: "SOIL136-00090",
                    text: "In infinite slope, FOS = 1.5, angle of internal friction = 360, then find the safe angle.",
                    options: [
                        { key: "a", text: "260" },
                        { key: "b", text: "300" },
                        { key: "c", text: "160" },
                        { key: "d", text: "200" }
                    ],
                    answer: "a",
                    explanation: "For a dry infinite slope the factor of safety is tan phi over tan beta. Setting it to 1.5 gives tan beta equal to tan 36 divided by 1.5, that is 0.484, so the safe slope angle is about 26 degrees."
                },
                {
                    id: "cm8q046",
                    src: "SOIL136-00091",
                    text: "The minimum depth of foundation, according to Rankine’s formula will be: - (Given that q = 180 KN/m², y = 20 KN/m² and Φ = 30°)",
                    options: [
                        { key: "a", text: "0.8m" },
                        { key: "b", text: "1m" },
                        { key: "c", text: "8m" },
                        { key: "d", text: "0.5m" }
                    ],
                    answer: "b",
                    explanation: "Rankine's minimum depth is the bearing pressure divided by the unit weight, times the square of (1 minus sin phi) over (1 plus sin phi). Here 180 over 20 is 9, and one third squared is one ninth, so the depth is 1 m."
                }
            ]
        },
        {
            id: "cm8watr",
            name: "Basic Water Resources Engineering",
            subject: "Water Resources",
            accent: "emerald",
            blurb: "12 questions drawn from the Basic Water Resources Engineering bank.",
            questions: [
                {
                    id: "cm8q047",
                    src: "WATE701-00073",
                    text: "Ordinate of Unit hydrograph is obtained by dividing ordinate of DRH by",
                    options: [
                        { key: "a", text: "Area of Catchment." },
                        { key: "b", text: "Run Off Volume" },
                        { key: "c", text: "Run off depth." },
                        { key: "d", text: "RunOff Length" }
                    ],
                    answer: "c",
                    explanation: "A unit hydrograph is the direct runoff hydrograph produced by one unit depth of effective rainfall, so the ordinates of the direct runoff hydrograph are divided by the depth of runoff in centimetres to obtain it."
                },
                {
                    id: "cm8q048",
                    src: "WATE701-00074",
                    text: "Precipitation caused by lifting of an air mass due to the pressure difference, is called",
                    options: [
                        { key: "a", text: "cyclonic precipitation" },
                        { key: "b", text: "convective precipitation" },
                        { key: "c", text: "geographic precipitation" },
                        { key: "d", text: "none of these." }
                    ],
                    answer: "a",
                    explanation: "Cyclonic precipitation results from air being lifted as it converges into a low pressure area, that is from a horizontal pressure difference rather than from surface heating or a mountain barrier. It is widespread and of moderate intensity and long duration."
                },
                {
                    id: "cm8q049",
                    src: "WATE701-00075",
                    text: "Rational method is applicable for",
                    options: [
                        { key: "a", text: "Duration of rainfall = time of concentration" },
                        { key: "b", text: "Duration of rainfall &lt; time of concentration" },
                        { key: "c", text: "Duration of rainfall &gt; time of concentration" },
                        { key: "d", text: "Duration doesn't depend on the time of concentration." }
                    ],
                    answer: "a",
                    explanation: "The rational method assumes the rainfall lasts at least as long as the time of concentration, so that the whole catchment is contributing to the outlet at once. That is the condition under which the peak discharge Q equal to CIA is reached."
                },
                {
                    id: "cm8q050",
                    src: "WATE701-00076",
                    text: "Recession limb of a hydrograph is independent of",
                    options: [
                        { key: "a", text: "basin characteristics" },
                        { key: "b", text: "storm characteristics" },
                        { key: "c", text: "both" },
                        { key: "d", text: "none" }
                    ],
                    answer: "b",
                    explanation: "The recession limb represents water draining from storage after the rain has stopped, so its shape depends only on the basin, its storage and its drainage characteristics, not on the storm that filled it. That is why it plots as almost the same curve for every event."
                },
                {
                    id: "cm8q051",
                    src: "WATE701-00077",
                    text: "Given a Gumbel's distribution with μ = 0 and β = 1, find the probability that X is less than or equal to 2.",
                    options: [
                        { key: "a", text: "0.564" },
                        { key: "b", text: "1.124" },
                        { key: "c", text: "0.864" },
                        { key: "d", text: "0.665" }
                    ],
                    answer: "c",
                    explanation: "For the standard Gumbel distribution the non-exceedance probability is the double exponential, exp of minus exp of minus x. With x equal to 2 that is exp of minus 0.135, which is about 0.87."
                },
                {
                    id: "cm8q052",
                    src: "WATE701-00078",
                    text: "Which method gives accurate estimate of average rainfall in a hilly area catchment?",
                    options: [
                        { key: "a", text: "Normal ratio method" },
                        { key: "b", text: "Arithmetic mean method" },
                        { key: "c", text: "Theissen polygon method" },
                        { key: "d", text: "Isoliyetal method" }
                    ],
                    answer: "d",
                    explanation: "The isohyetal method is the most accurate in hilly country, because the analyst draws the contours of equal rainfall using knowledge of the terrain and orographic effects rather than relying on the geometry of the gauge network alone."
                },
                {
                    id: "cm8q053",
                    src: "WATE701-00079",
                    text: "Which among the following method is very accurate of rain gauging?",
                    options: [
                        { key: "a", text: "Iso-hyetol method" },
                        { key: "b", text: "Arithmetic mean method" },
                        { key: "c", text: "Theissen method" },
                        { key: "d", text: "Recording type" }
                    ],
                    answer: "a",
                    explanation: "While the other methods rely on purely mathematical or geometric constructions, the Isohyetal method incorporates the actual physical characteristics of the terrain."
                },
                {
                    id: "cm8q054",
                    src: "WATE701-00080",
                    text: "What do you mean by cold frontal precipitation?",
                    options: [
                        { key: "a", text: "small catchment area with moderate precipitation" },
                        { key: "b", text: "small catchment area with heavy precipitation" },
                        { key: "c", text: "large catchment area with heavy precipitation" },
                        { key: "d", text: "large catchment area with moderate precipitation" }
                    ],
                    answer: "b",
                    explanation: "Small Area: Cold fronts have a steep leading edge and move rapidly. Because of this, the weather disturbances they create are concentrated in a narrow band, resulting in precipitation that covers a relatively small geographical area at any given time. Heavy Precipitation: The dense, cold air aggressively wedges underneath the warmer air, forcing the warm air to rise very quickly. This rapid uplift creates towering cumulonimbus clouds that produce intense, heavy rainfall (and often thunderstorms) that last for a short duration."
                },
                {
                    id: "cm8q055",
                    src: "WATE701-00081",
                    text: "The double mass curve technique is used",
                    options: [
                        { key: "a", text: "To find the average rainfall over a number of years" },
                        { key: "b", text: "To estimate the missing rainfall data" },
                        { key: "c", text: "To check the consistency of rain gauge records" },
                        { key: "d", text: "To find the minimum number of rain gauges required in a basin" }
                    ],
                    answer: "c",
                    explanation: "The double mass curve plots the accumulated rainfall of a suspect station against the accumulated mean of surrounding stations. A change in slope reveals that the station's record has become inconsistent, usually because the gauge was moved or its exposure changed."
                },
                {
                    id: "cm8q056",
                    src: "WATE701-00082",
                    text: "Isoliyets are the imaginary lines joining the points of equal",
                    options: [
                        { key: "a", text: "pressure" },
                        { key: "b", text: "height" },
                        { key: "c", text: "humidity" },
                        { key: "d", text: "rainfall" }
                    ],
                    answer: "d",
                    explanation: "An isohyet is a line joining points of equal rainfall depth, and the map of isohyets is used to compute the average depth over a catchment by weighting each band by the area between successive lines."
                },
                {
                    id: "cm8q057",
                    src: "WATE701-00083",
                    text: "Which method gives accurate flow characteristics in context of river of Nepal?",
                    options: [
                        { key: "a", text: "WECS/DHM 1990" },
                        { key: "b", text: "MIP" },
                        { key: "c", text: "DHM 2004" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "a",
                    explanation: "For ungauged Nepali catchments the WECS/DHM 1990 regional method is the standard, since it was derived from Nepal's own hydrological records and expresses flow in terms of basin area below 5000 m and monsoon characteristics."
                },
                {
                    id: "cm8q058",
                    src: "WATE701-00084",
                    text: "Which of the following is right?",
                    options: [
                        { key: "a", text: "Pabs=Patm-Pgauge" },
                        { key: "b", text: "Pabs=Patm+Pgauge" },
                        { key: "c", text: "Patm=Pabs+ Pgauge" },
                        { key: "d", text: "Pgauge = Patm –Pabs" }
                    ],
                    answer: "b",
                    explanation: "Absolute pressure is measured from a perfect vacuum, so it equals the atmospheric pressure plus the gauge reading. A gauge reads zero in open air because it already has atmospheric pressure on its other side."
                }
            ]
        },
        {
            id: "cm8hydr",
            name: "Hydropower",
            subject: "Hydropower",
            accent: "cyan",
            blurb: "10 questions drawn from the Hydropower bank.",
            questions: [
                {
                    id: "cm8q059",
                    src: "HYDR626-00056",
                    text: "In a reaction turbine, when steam flows through the fixed blades,",
                    options: [
                        { key: "a", text: "pressure decreases while velocity increases" },
                        { key: "b", text: "pressure and velocity both decreases" },
                        { key: "c", text: "pressure increases while velocity decreases" },
                        { key: "d", text: "pressure and velocity both increases" }
                    ],
                    answer: "c",
                    explanation: "In a reaction machine the fixed blades act as nozzles: the fluid expands through them, so its pressure falls and its velocity rises before it enters the moving blades, where a further pressure drop occurs."
                },
                {
                    id: "cm8q060",
                    src: "HYDR626-00057",
                    text: "Which of the following is correct?",
                    options: [
                        { key: "a", text: "Pelton is reaction turbine" },
                        { key: "b", text: "Kaplan is impulse turbine" },
                        { key: "c", text: "Francis is impulse turbine" },
                        { key: "d", text: "Pelton is impulse turbine" }
                    ],
                    answer: "d",
                    explanation: "A Pelton wheel is an impulse turbine: all the pressure energy is converted into a free jet by the nozzle, and the runner works at atmospheric pressure. Francis and Kaplan machines are reaction turbines with the runner full of water under pressure."
                },
                {
                    id: "cm8q061",
                    src: "HYDR626-00058",
                    text: "Pressure at the inlet and outlet of the draft tube shouldn’t be.",
                    options: [
                        { key: "a", text: "Less than one-third of atmospheric pressure" },
                        { key: "b", text: "Greater than one-third of atmospheric pressure" },
                        { key: "c", text: "Less than 1atm" },
                        { key: "d", text: "Greater than 1 atm" }
                    ],
                    answer: "a",
                    explanation: "The pressure at the draft tube must not fall below about one third of an atmosphere, since at lower absolute pressure the water flashes into vapour and cavitation begins, pitting the runner and the tube."
                },
                {
                    id: "cm8q062",
                    src: "HYDR626-00059",
                    text: "What is the use of governor?",
                    options: [
                        { key: "a", text: "It controls acceleration" },
                        { key: "b", text: "It controls the mean speed" },
                        { key: "c", text: "It controls the temperature" },
                        { key: "d", text: "It controls sediment" }
                    ],
                    answer: "b",
                    explanation: "The governor holds the turbine at its set speed by opening or closing the guide vanes or the nozzle as the electrical load changes, so that the generator frequency stays constant."
                },
                {
                    id: "cm8q063",
                    src: "HYDR626-00060",
                    text: "Kaplan turbine is",
                    options: [
                        { key: "a", text: "Inward flow impulse turbine" },
                        { key: "b", text: "Outward flow reaction turbine" },
                        { key: "c", text: "Low head Axial flow turbine" },
                        { key: "d", text: "high head mixed flow turbine" }
                    ],
                    answer: "c",
                    explanation: "The Kaplan is a low head, axial flow reaction turbine with adjustable runner blades. The adjustment keeps its efficiency high over a wide range of discharge, which suits run-of-river schemes with variable flow."
                },
                {
                    id: "cm8q064",
                    src: "HYDR626-00061",
                    text: "The pressure energy of water is converted to kinetic energy through a nozzle provided next to runner blade in",
                    options: [
                        { key: "a", text: "Impulse turbine" },
                        { key: "b", text: "Reaction turbine" },
                        { key: "c", text: "Both a and b" },
                        { key: "d", text: "Kaplan turbine" }
                    ],
                    answer: "a",
                    explanation: "In an impulse turbine the whole pressure head is converted to velocity in the nozzle just ahead of the runner, and the jet then strikes the buckets at atmospheric pressure. In a reaction turbine the conversion continues within the runner itself."
                },
                {
                    id: "cm8q065",
                    src: "HYDR626-00062",
                    text: "For the same power output, which power plant of the following has minimum operating charges?",
                    options: [
                        { key: "a", text: "Hydel plant" },
                        { key: "b", text: "Nuclear plant" },
                        { key: "c", text: "Thermal plant" },
                        { key: "d", text: "Gas turbine plant" }
                    ],
                    answer: "a",
                    explanation: "A hydro plant has the lowest operating cost of the four, because its fuel, the river, is free and its plant is simple to run. Its costs are almost entirely capital and are recovered over a very long life."
                },
                {
                    id: "cm8q066",
                    src: "HYDR626-00063",
                    text: "The power output from a hydro-electric power plant depends on three parameters......",
                    options: [
                        { key: "a", text: "Head, type, and dam of discharge" },
                        { key: "b", text: "Head, discharge, and efficiency of the system" },
                        { key: "c", text: "Type of dam, discharge, and type of catchment area" },
                        { key: "d", text: "Efficiency of the system, type of draft tube, and type of turbine used" }
                    ],
                    answer: "b",
                    explanation: "Output depends on the head, the discharge and the overall efficiency of the system, through P equal to gamma Q H eta. The type of dam, catchment or draft tube matter only insofar as they influence those three."
                },
                {
                    id: "cm8q067",
                    src: "HYDR626-00064",
                    text: "The energy of water entering the reaction turbine is ______",
                    options: [
                        { key: "a", text: "Fully the kinetic energy" },
                        { key: "b", text: "Fully the pressure energy" },
                        { key: "c", text: "Partly the pressure energy and partly the kinetic energy" },
                        { key: "d", text: "Unpredictable" }
                    ],
                    answer: "c",
                    explanation: "Water entering a reaction turbine still carries part of its energy as pressure and part as velocity, and the pressure continues to drop as it passes through the runner. In an impulse machine the conversion is complete before the runner."
                },
                {
                    id: "cm8q068",
                    src: "HYDR626-00065",
                    text: "Which of the following is impulse turbine?",
                    options: [
                        { key: "a", text: "Francis" },
                        { key: "b", text: "Kaplan" },
                        { key: "c", text: "Propeller" },
                        { key: "d", text: "Pelton" }
                    ],
                    answer: "d",
                    explanation: "The Pelton wheel is the impulse turbine, suited to high heads and small discharges. Francis, Kaplan and propeller machines are all reaction turbines."
                }
            ]
        },
        {
            id: "cm8irri",
            name: "Irrigation and Drainage",
            subject: "Irrigation",
            accent: "emerald",
            blurb: "11 questions drawn from the Irrigation and Drainage bank.",
            questions: [
                {
                    id: "cm8q069",
                    src: "IRRI951-00068",
                    text: "Cross regulators are provided.",
                    options: [
                        { key: "a", text: "to rise the water level to its upstream during the periods of low discharge" },
                        { key: "b", text: "in parent channel" },
                        { key: "c", text: "to help in closing the supply to downstream of the parent channel" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "Cross regulators serve all these purposes: built across the parent channel, they raise the upstream water level when the discharge is low so that offtakes can still draw their share, and they allow supply to the downstream reach to be shut off."
                },
                {
                    id: "cm8q070",
                    src: "IRRI951-00069",
                    text: "The function of cross regulator in irrigation",
                    options: [
                        { key: "a", text: "to maintain the head for flow in off taking canal" },
                        { key: "b", text: "overflow excessive flow water" },
                        { key: "c", text: "Regulate the water supplies in the distributaries" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "A cross regulator maintains the head needed by the offtaking channel, regulates the supplies distributed downstream, and can pass surplus water when required, so every function listed applies."
                },
                {
                    id: "cm8q071",
                    src: "IRRI951-00070",
                    text: "The crossing arrangement preferably made at the junction of a huge canal and a river stream carrying a short-lived high flood discharge at almost equal bed levels is a",
                    options: [
                        { key: "a", text: "Super passage" },
                        { key: "b", text: "Aqueduct" },
                        { key: "c", text: "Level crossing" },
                        { key: "d", text: "Canal siphon" }
                    ],
                    answer: "c",
                    explanation: "Where a canal and a river of similar bed level meet and the river brings only a brief flood, a level crossing is used: the two are allowed to mix in a common pool, with regulators on each side to control how much passes on."
                },
                {
                    id: "cm8q072",
                    src: "IRRI951-00071",
                    text: "The structure at the head of regulator to remove silt is",
                    options: [
                        { key: "a", text: "Silt elector" },
                        { key: "b", text: "Silt excluder" },
                        { key: "c", text: "Silt extractor" },
                        { key: "d", text: "All of these" }
                    ],
                    answer: "b",
                    explanation: "Silt excluders are built in the river bed just upstream of the head regulator, with tunnels that draw the silt-laden bottom layer away to the downstream side while the clearer surface water passes into the canal."
                },
                {
                    id: "cm8q073",
                    src: "IRRI951-00072",
                    text: "For a saddle siphon, the maximum operative head is 4.53 m. The width and height of the throat of the siphon are 5 m and 2.25 m respectively. The coefficient of discharge is 0.90. How many units are required to pass a flood of 350 cumecs?",
                    options: [
                        { key: "a", text: "Four" },
                        { key: "b", text: "One" },
                        { key: "c", text: "Two" },
                        { key: "d", text: "Three" }
                    ],
                    answer: "a",
                    explanation: "The discharge of one siphon unit is Cd times the throat area times the root of 2gH, that is 0.9 times 11.25 times the root of (2 times 9.81 times 4.53), which is about 95 cumecs. Passing 350 cumecs therefore needs 350 over 95, that is 3.7, so four units. The key has been corrected from the printed three."
                },
                {
                    id: "cm8q074",
                    src: "IRRI951-00073",
                    text: "Canal fall is provided if",
                    options: [
                        { key: "a", text: "Ground slope exceeds designed bed slope" },
                        { key: "b", text: "Design bed slope exceeds ground slope" },
                        { key: "c", text: "Ground slope is same as designed bed slope" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "a",
                    explanation: "If the canal followed the steep ground directly, the water's velocity would become too high and erode the canal bed and banks. To prevent this, engineers construct vertical drops (canal falls) at intervals to step the water down safely and dissipate the excess energy.If the designed bed slope were to exceed the ground slope, water wouldn't flow by gravity, and you would need pumping or a different structural approach altogether."
                },
                {
                    id: "cm8q075",
                    src: "IRRI951-00074",
                    text: "What can’t you provide at head regulator?",
                    options: [
                        { key: "a", text: "Fish ladder" },
                        { key: "b", text: "Divide wall" },
                        { key: "c", text: "Canal aqueduct" },
                        { key: "d", text: "Under sluice" }
                    ],
                    answer: "c",
                    explanation: "A head regulator can carry a fish ladder, a divide wall and under sluices, all of which belong at the weir site. An aqueduct is a cross drainage work carrying a canal over a drain and has nothing to do with the head regulator."
                },
                {
                    id: "cm8q076",
                    src: "IRRI951-00075",
                    text: "Which of the following CD works carry drainage over the canal?",
                    options: [
                        { key: "a", text: "Aqueduct and Syphon Aqueduct" },
                        { key: "b", text: "Level-crossing and inlets outlets" },
                        { key: "c", text: "Canal Syphon and Aqueduct" },
                        { key: "d", text: "Super passage and Syphon" }
                    ],
                    answer: "d",
                    explanation: "A super passage carries the drain over the canal on a trough, and a canal siphon takes the canal under the drain in a pressurised barrel; in both, the drainage is above the canal. Aqueducts do the reverse."
                },
                {
                    id: "cm8q077",
                    src: "IRRI951-00076",
                    text: "What are cross drainage works carrying canal over natural drain called?",
                    options: [
                        { key: "a", text: "Aqueduct and syphon aqueduct" },
                        { key: "b", text: "Canal syphon and super passage" },
                        { key: "c", text: "Aqueduct and super passage" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "a",
                    explanation: "An aqueduct carries the canal over the drain on a trough with the drain flowing freely beneath, and a siphon aqueduct does the same but with the drain running under pressure through barrels. In both, the canal is on top."
                },
                {
                    id: "cm8q078",
                    src: "IRRI951-00077",
                    text: "In a syphon flume, having length 100m, width 10 m and depth 2 m, velocity is reduced to 2.5 m/s. Calculate head loss, given 0.015 for concrete lining.",
                    options: [
                        { key: "a", text: "67mm" },
                        { key: "b", text: "87mm" },
                        { key: "c", text: "77mm" },
                        { key: "d", text: "97mm" }
                    ],
                    answer: "b",
                    explanation: "The hydraulic radius is the area over the perimeter, 20 over 14, that is 1.43 m. Using Manning's expression for friction loss, n squared V squared L over R to the four thirds gives 0.000225 times 6.25 times 100, divided by 1.61, which is about 0.087 m, or 87 mm."
                },
                {
                    id: "cm8q079",
                    src: "IRRI951-00078",
                    text: "In a Sarda type fall, the rectangular crest, may be used for discharge upto",
                    options: [
                        { key: "a", text: "6 ounces" },
                        { key: "b", text: "10 ounces" },
                        { key: "c", text: "14 ounces" },
                        { key: "d", text: "20 ounces" }
                    ],
                    answer: "c",
                    explanation: "A Sarda type fall uses a rectangular crest for discharges up to about 14 cumecs and a trapezoidal crest above that, where the larger flow needs the extra base width for stability and gives a better coefficient of discharge. The crest width is set from the head over it, and the fall is built with a cistern below to dissipate the energy. The key has been corrected from the printed 6."
                }
            ]
        },
        {
            id: "cm8tran",
            name: "Transportation",
            subject: "Transportation",
            accent: "rose",
            blurb: "11 questions drawn from the Transportation bank.",
            questions: [
                {
                    id: "cm8q080",
                    src: "TRAN808-00067",
                    text: "The coefficient of subgrade doesn't depend upon",
                    options: [
                        { key: "a", text: "The size of footing" },
                        { key: "b", text: "The Shape of footing" },
                        { key: "c", text: "The depth of footing" },
                        { key: "d", text: "Water table" }
                    ],
                    answer: "d",
                    explanation: "The modulus of subgrade reaction depends on the size, shape and depth of the loaded area, since all of them change how the stress spreads into the soil, and it is corrected for them. The water table affects the soil stiffness itself rather than the coefficient's definition."
                },
                {
                    id: "cm8q081",
                    src: "TRAN808-00068",
                    text: "The bitumen layer spread over old pavement to bind newer pavement layer together is",
                    options: [
                        { key: "a", text: "Tack coat" },
                        { key: "b", text: "Seal coat" },
                        { key: "c", text: "Prime coat" },
                        { key: "d", text: "Otta seal" }
                    ],
                    answer: "a",
                    explanation: "A tack coat is a thin sprayed film of bitumen applied to an existing bituminous or concrete surface to bond the new layer to it. A prime coat, by contrast, is sprayed on a granular base to penetrate and seal it before the first bituminous layer."
                },
                {
                    id: "cm8q082",
                    src: "TRAN808-00069",
                    text: "The dowel bars are provided to",
                    options: [
                        { key: "a", text: "resist shear stress" },
                        { key: "b", text: "transfer stress from one portion to another" },
                        { key: "c", text: "resist bending stress" },
                        { key: "d", text: "resist frictional stress" }
                    ],
                    answer: "b",
                    explanation: "Dowel bars are plain round bars set across a transverse joint in rigid pavement. They carry shear from one slab to the next so the wheel load is shared, while allowing the slabs to expand and contract freely along the bar."
                },
                {
                    id: "cm8q083",
                    src: "TRAN808-00070",
                    text: "Which of the following pavement is best for night visibility?",
                    options: [
                        { key: "a", text: "Gravel road" },
                        { key: "b", text: "Black top surface" },
                        { key: "c", text: "cement concrete" },
                        { key: "d", text: "WBM" }
                    ],
                    answer: "c",
                    explanation: "A cement concrete surface is light in colour and reflects headlight beams well, so night visibility is far better than on a black bituminous surface, which absorbs most of the light falling on it."
                },
                {
                    id: "cm8q084",
                    src: "TRAN808-00071",
                    text: "The bars in rigid pavements provide across",
                    options: [
                        { key: "a", text: "Expansion Joints" },
                        { key: "b", text: "Longitudinal joints" },
                        { key: "c", text: "Construction joints" },
                        { key: "d", text: "Contraction joints" }
                    ],
                    answer: "d",
                    explanation: "Tie bars run across longitudinal joints to hold adjacent lanes together and stop them separating. They are deformed bars, fully bonded, unlike dowels, which are plain and deliberately allow movement."
                },
                {
                    id: "cm8q085",
                    src: "TRAN808-00072",
                    text: "In the penetration macadam construction, the bitumen is.",
                    options: [
                        { key: "a", text: "Sprayed after the aggregates are spread and compacted." },
                        { key: "b", text: "Premixed with aggregates and then spread." },
                        { key: "c", text: "Sprayed before the aggregates are spread and compacted." },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "c",
                    explanation: "In penetration macadam the coarse aggregate is spread and rolled first, then hot bitumen is sprayed on top so that it penetrates down into the voids and binds the layer, with key aggregate spread afterwards. In a premix the two are mixed before laying."
                },
                {
                    id: "cm8q086",
                    src: "TRAN808-00073",
                    text: "For sandy soils the most common method of stabilization is",
                    options: [
                        { key: "a", text: "soil-cement" },
                        { key: "b", text: "soil-bitumen" },
                        { key: "c", text: "mechanical" },
                        { key: "d", text: "soil-lime" }
                    ],
                    answer: "b",
                    explanation: "Sandy soils lack cohesion but drain freely, so they are stabilised with bitumen, which waterproofs and binds the grains together. Clayey soils, by contrast, are usually treated with lime, and silty soils with cement."
                },
                {
                    id: "cm8q087",
                    src: "TRAN808-00074",
                    text: "A wall constructed with stones to protect slopes of cuttings in natural ground from the action of weathering agents, is called",
                    options: [
                        { key: "a", text: "retaining wall" },
                        { key: "b", text: "buttress" },
                        { key: "c", text: "breast wall" },
                        { key: "d", text: "parapet wall" }
                    ],
                    answer: "c",
                    explanation: "A breast wall retains the natural ground exposed in a hillside cutting, holding the face and protecting it from weathering and slips. A retaining wall holds filled ground rather than undisturbed natural soil."
                },
                {
                    id: "cm8q088",
                    src: "TRAN808-00075",
                    text: "Pot hole maintenance in case of bituminous road is",
                    options: [
                        { key: "a", text: "period maintenance" },
                        { key: "b", text: "recurrent maintenance" },
                        { key: "c", text: "special maintenance" },
                        { key: "d", text: "routine maintenance" }
                    ],
                    answer: "d",
                    explanation: "Patching a pothole is routine maintenance, the small-scale, frequent work needed to keep the road serviceable and to stop water reaching the layers below. Resurfacing and overlays are periodic maintenance."
                },
                {
                    id: "cm8q089",
                    src: "TRAN808-00076",
                    text: "Bulking of coarse aggregate is",
                    options: [
                        { key: "a", text: "less than sand" },
                        { key: "b", text: "More than sand" },
                        { key: "c", text: "negligible" },
                        { key: "d", text: "equal to sand" }
                    ],
                    answer: "a",
                    explanation: "Bulking is caused by moisture films holding fine particles apart, and its effect grows as the grains get smaller. In coarse aggregate the particles are far too heavy for surface tension to separate, so bulking is negligible."
                },
                {
                    id: "cm8q090",
                    src: "TRAN808-00077",
                    text: "The longitudinal depression in the wheel path in bituminous pavements is",
                    options: [
                        { key: "a", text: "Longitudinal cracking" },
                        { key: "b", text: "Rutting" },
                        { key: "c", text: "Shear failure" },
                        { key: "d", text: "bleeding" }
                    ],
                    answer: "b",
                    explanation: "A longitudinal depression along the wheel path is rutting, caused by permanent deformation of the pavement layers or the subgrade under repeated loading, often made worse by inadequate compaction or an unstable mix."
                }
            ]
        },
        {
            id: "cm8wate",
            name: "Water Supply, Sanitation and Environment",
            subject: "Water Supply",
            accent: "blue",
            blurb: "10 questions drawn from the Water Supply, Sanitation and Environment bank.",
            questions: [
                {
                    id: "cm8q091",
                    src: "WATE813-00061",
                    text: "Calculate the amount of air required for the equalization tank with a flow of 500 m³/h and BOD load of 800 mg/L.",
                    options: [
                        { key: "a", text: "950 m³/hr" },
                        { key: "b", text: "800 m³/hr" },
                        { key: "c", text: "2000 m³/hr" },
                        { key: "d", text: "785 m³/hr" }
                    ],
                    answer: "c",
                    explanation: "Aeration in an equalisation tank has to keep the contents mixed and aerobic, so the air supply is set from the tank volume and the organic load rather than from oxygen demand alone. A typical allowance is of the order of 0.01 to 0.015 cubic metres of air per minute per cubic metre of tank."
                },
                {
                    id: "cm8q092",
                    src: "WATE813-00062",
                    text: "DO value of fresh pond water at 20° C temp, 760mm of Hg pressure, zero salinity",
                    options: [
                        { key: "a", text: "8.2mg/l" },
                        { key: "b", text: "14mg/l" },
                        { key: "c", text: "7mg/l" },
                        { key: "d", text: "9.08mg/l" }
                    ],
                    answer: "d",
                    explanation: "The saturation concentration of dissolved oxygen in fresh water at 20 degrees Celsius, standard atmospheric pressure and zero salinity is about 9.08 mg per litre. It falls as temperature, salinity or altitude increase."
                },
                {
                    id: "cm8q093",
                    src: "WATE813-00063",
                    text: "In slow sand filters, the turbidity of raw water can be removed only up to",
                    options: [
                        { key: "a", text: "60 mg/l" },
                        { key: "b", text: "75 mg/l" },
                        { key: "c", text: "100 gm/l" },
                        { key: "d", text: "150 mg/l" }
                    ],
                    answer: "a",
                    explanation: "Slow sand filters can only handle raw water up to about 60 mg per litre of turbidity. Anything dirtier clogs the schmutzdecke quickly and the filter runs would be impractically short, so pre-settling or a roughing filter is needed first."
                },
                {
                    id: "cm8q094",
                    src: "WATE813-00064",
                    text: "In which DO value below which the survival of aquatic life is not possible?",
                    options: [
                        { key: "a", text: "5 mg/L" },
                        { key: "b", text: "4 mg/L" },
                        { key: "c", text: "7 mg/L" },
                        { key: "d", text: "15 mg/L" }
                    ],
                    answer: "b",
                    explanation: "Most fish and other aquatic life cannot survive where dissolved oxygen falls below about 4 mg per litre, which is why discharge standards are written to protect that level in the receiving stream."
                },
                {
                    id: "cm8q095",
                    src: "WATE813-00065",
                    text: "If 2% solution of a sewage sample is incubated for 5 days at 20°C and depletion of oxygen was found to be 5 ppm, B.O.D. of the sewage is",
                    options: [
                        { key: "a", text: "200 ppm" },
                        { key: "b", text: "225 ppm" },
                        { key: "c", text: "250 ppm" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "c",
                    explanation: "The dilution factor is 100 over 2, that is 50. Multiplying the 5 ppm oxygen depletion by 50 gives a five-day BOD of 250 ppm."
                },
                {
                    id: "cm8q096",
                    src: "WATE813-00066",
                    text: "The detention period in a septic tank is assumed",
                    options: [
                        { key: "a", text: "20 minutes" },
                        { key: "b", text: "25 minutes" },
                        { key: "c", text: "40 minutes" },
                        { key: "d", text: "30 minutes" }
                    ],
                    answer: "d",
                    explanation: "A septic tank is normally designed for about 24 hours of detention so that solids can settle and digest. The options printed here are all in minutes, which is the order of detention used for a grit chamber, so read the keyed figure in that light."
                },
                {
                    id: "cm8q097",
                    src: "WATE813-00067",
                    text: "What is the minimum amount of DO required for the life survival of aquatic animals?",
                    options: [
                        { key: "a", text: "4 mg/l" },
                        { key: "b", text: "10 mg/l" },
                        { key: "c", text: "2 mg/l" },
                        { key: "d", text: "1 mg/l" }
                    ],
                    answer: "a",
                    explanation: "Aquatic animals need at least about 4 mg per litre of dissolved oxygen to survive. Below that they become stressed, and prolonged exposure kills the more sensitive species first."
                },
                {
                    id: "cm8q098",
                    src: "WATE813-00068",
                    text: "What will be the sludge volume index (SVI) if 100 ml of sludge collected in 30 minutes on drying weighs 800mg?",
                    options: [
                        { key: "a", text: "115" },
                        { key: "b", text: "125" },
                        { key: "c", text: "78" },
                        { key: "d", text: "100" }
                    ],
                    answer: "b",
                    explanation: "The sludge volume index is the settled volume in millilitres per litre, times 1000, divided by the suspended solids in milligrams per litre. That is 100 times 1000 divided by 800, which gives 125, a value indicating reasonably good settling."
                },
                {
                    id: "cm8q099",
                    src: "WATE813-00069",
                    text: "One liter of sewage, when allowed to settle for 30 minutes gives a sludge volume of 27 cm³. If the dry weight of this sludge is 3.0 grams, then its sludge volume index will be",
                    options: [
                        { key: "a", text: "24" },
                        { key: "b", text: "30" },
                        { key: "c", text: "9" },
                        { key: "d", text: "81" }
                    ],
                    answer: "c",
                    explanation: "\\(SVI = \\frac{\\text{Settled Sludge Volume (mL/L)}}{\\text{Mixed Liquor Suspended Solids (g/L)}}\\) \\(SVI = \\frac{27 \\text{ mL/L}}{3.0 \\text{ g/L}}\\) \\(SVI = 9 \\text{ mL/g} \\text{ - verified}\\)"
                },
                {
                    id: "cm8q100",
                    src: "WATE813-00070",
                    text: "In treatment plant if BOD decreases from 300mg/l to 30mg/l then efficient of treatment plant is",
                    options: [
                        { key: "a", text: "1" },
                        { key: "b", text: "0.95" },
                        { key: "c", text: "0.85" },
                        { key: "d", text: "0.9" }
                    ],
                    answer: "d",
                    explanation: "Efficiency is the BOD removed divided by the BOD applied, that is 300 minus 30 over 300, which is 270 over 300, or 90 percent."
                }
            ]
        }
    ]
};

/* Registered lazily — js/civil.js injects this file when the set is opened. */
window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["civil-8"] = CIVIL_MODEL_8;
