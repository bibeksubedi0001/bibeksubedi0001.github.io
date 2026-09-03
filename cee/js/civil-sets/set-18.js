/* ============================================================
   CIVIL MODEL SET 18 — Civil Engineering licence-style model paper
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
const CIVIL_MODEL_18 = {
    day: 48,
    kind: "model",
    badge: { top: "Model", main: "C18" },
    title: "Civil Model Set 18",
    subtitle: "Civil Engineering · 9 subjects",
    durationMinutes: 120,
    negativeMarking: 0,
    chapters: [
        {
            id: "cm18basi",
            name: "Basic Civil Engineering",
            subject: "Basic Civil",
            accent: "blue",
            blurb: "13 questions drawn from the Basic Civil Engineering bank.",
            questions: [
                {
                    id: "cm18q001",
                    src: "BASI674-00215",
                    text: "The amount of water used for one kg of distemper is",
                    options: [
                        { key: "a", text: "0.2 liter" },
                        { key: "b", text: "0.4 liter" },
                        { key: "c", text: "0.6 liter" },
                        { key: "d", text: "0.8 liter" }
                    ],
                    answer: "c",
                    explanation: "Distemper is a water-bound decorative coating. The standard mix ratio is about 0.6 liters of water per kilogram of distemper powder to achieve the proper consistency for application."
                },
                {
                    id: "cm18q002",
                    src: "BASI674-00216",
                    text: "______ are used to press mortar and spread it uniformly.",
                    options: [
                        { key: "a", text: "Trowel" },
                        { key: "b", text: "Aluminum rod" },
                        { key: "c", text: "Brush" },
                        { key: "d", text: "Floats" }
                    ],
                    answer: "d",
                    explanation: "Floats, typically made of wood, plastic, or metal, are flat tools with a handle. They are used to apply, press, and smooth plaster or mortar onto a surface, ensuring it is level and uniform."
                },
                {
                    id: "cm18q003",
                    src: "BASI674-00218",
                    text: "The surveying used to determine additional details such as boundaries of fields, is called",
                    options: [
                        { key: "a", text: "Cadastral surveying" },
                        { key: "b", text: "City surveying" },
                        { key: "c", text: "Location surveying" },
                        { key: "d", text: "Topographical surveying" }
                    ],
                    answer: "a",
                    explanation: "Cadastral surveying is specifically for marking property boundaries, land ownership, and property lines."
                },
                {
                    id: "cm18q004",
                    src: "BASI674-00219",
                    text: "Permissible limits of error in chaining for measurement on rough or hilly ground is",
                    options: [
                        { key: "a", text: "1:2000" },
                        { key: "b", text: "1:250" },
                        { key: "c", text: "1:1000" },
                        { key: "d", text: "1:500" }
                    ],
                    answer: "b",
                    explanation: "The permissible error is more lenient (e.g., 1:250) on rough or hilly terrain due to the increased difficulty in achieving precise measurements compared to flat ground (1:1000) or ordinary ground (1:500)."
                },
                {
                    id: "cm18q005",
                    src: "BASI674-00220",
                    text: "In a diagonal scale only",
                    options: [
                        { key: "a", text: "Units can be shown" },
                        { key: "b", text: "Units, tenths can be shown" },
                        { key: "c", text: "Units, tenths and hundredths can be shown" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "c",
                    explanation: "A diagonal scale uses the principle of similar triangles to measure units, tenths, and hundredths, providing higher precision than a plain or vernier scale."
                },
                {
                    id: "cm18q006",
                    src: "BASI674-00221",
                    text: "In an engineering drawing it is written scale 1 cm=100 m. Which ratio does it correspond to?",
                    options: [
                        { key: "a", text: "1:100" },
                        { key: "b", text: "1:1000" },
                        { key: "c", text: "1:100000" },
                        { key: "d", text: "1:10000" }
                    ],
                    answer: "d",
                    explanation: "Representative Fraction (RF) is calculated as (Map Distance)/(Ground Distance). Here, 1 cm / 100 m = 1 cm / 10000 cm = 1:10000."
                },
                {
                    id: "cm18q007",
                    src: "BASI674-00222",
                    text: "A line joining some fixed stations on main survey lines is",
                    options: [
                        { key: "a", text: "Tie line" },
                        { key: "b", text: "Check line" },
                        { key: "c", text: "Base line" },
                        { key: "d", text: "Cross line" }
                    ],
                    answer: "a",
                    explanation: "A tie line (or subsidiary line) connects fixed points on main survey lines to locate interior details and provide a check on the framework."
                },
                {
                    id: "cm18q008",
                    src: "BASI674-00223",
                    text: "In a well conditioned triangle, one angle should not be less than",
                    options: [
                        { key: "a", text: "40°" },
                        { key: "b", text: "30°" },
                        { key: "c", text: "45°" },
                        { key: "d", text: "50°" }
                    ],
                    answer: "b",
                    explanation: "A well-conditioned triangle has all angles between 30° and 120°. This ensures good intersection of arcs from adjacent sides and minimizes errors in plotting."
                },
                {
                    id: "cm18q009",
                    src: "BASI674-00224",
                    text: "Ranging is the process of",
                    options: [
                        { key: "a", text: "Fixing ranging rods on the extremities of the area" },
                        { key: "b", text: "Taking offset from a chain line" },
                        { key: "c", text: "Aligning the chain in a straight line between two extremities" },
                        { key: "d", text: "Chaining over a range of mountains" }
                    ],
                    answer: "c",
                    explanation: "Ranging is the process of establishing intermediate points on a straight line between two fixed endpoints to ensure chaining is done in a straight line."
                },
                {
                    id: "cm18q010",
                    src: "BASI674-00225",
                    text: "What is the angle in degrees between two plane mirrors of an optical square?",
                    options: [
                        { key: "a", text: "30" },
                        { key: "b", text: "60" },
                        { key: "c", text: "90" },
                        { key: "d", text: "45" }
                    ],
                    answer: "d",
                    explanation: "An optical square uses two mirrors set at 45° to each other to deflect a line of sight by 90°, allowing for easy setting out of right angles."
                },
                {
                    id: "cm18q011",
                    src: "BASI674-00226",
                    text: "The branch of surveying in which only linear measurements are directly made in the field is",
                    options: [
                        { key: "a", text: "chain surveying" },
                        { key: "b", text: "land surveying" },
                        { key: "c", text: "engineering surveying" },
                        { key: "d", text: "Topographical surveying" }
                    ],
                    answer: "a",
                    explanation: "Chain surveying (or chain triangulation) is the simplest form of surveying where only linear measurements are taken in the field to form a framework of triangles. Angular measurements are not taken."
                },
                {
                    id: "cm18q012",
                    src: "BASI674-00227",
                    text: "Incorrect marking the end of chain length is an example of",
                    options: [
                        { key: "a", text: "Positive error" },
                        { key: "b", text: "Cumulative error" },
                        { key: "c", text: "Negative error" },
                        { key: "d", text: "Compensating error" }
                    ],
                    answer: "b",
                    explanation: "An error that accumulates in the same direction throughout the survey is a cumulative error. Incorrect end marking consistently makes each chain length too long or too short."
                },
                {
                    id: "cm18q013",
                    src: "BASI674-00228",
                    text: "A scale is to be devised to read into metre, centimeter and decimeter. Which type of the following scales is best suited for this purpose?",
                    options: [
                        { key: "a", text: "Plain scale" },
                        { key: "b", text: "Vernier scale" },
                        { key: "c", text: "Diagonal scale" },
                        { key: "d", text: "(b) or (a)" }
                    ],
                    answer: "c",
                    explanation: "A diagonal scale is designed to measure three units (e.g., m, dm, cm) using the principle of similar triangles, providing the necessary precision."
                }
            ]
        },
        {
            id: "cm18stru",
            name: "Structural Mechanics",
            subject: "Structural Mech",
            accent: "cyan",
            blurb: "11 questions drawn from the Structural Mechanics bank.",
            questions: [
                {
                    id: "cm18q014",
                    src: "STRU935-00181",
                    text: "If an axial force N is applied gradually to a bar which is linear elastic and has a constant cross sectional area A and length L, what will be the value of strain energy U?",
                    options: [
                        { key: "a", text: "1/4 N²L/AE" },
                        { key: "b", text: "1/3 N²L/AE" },
                        { key: "c", text: "N²L/AE" },
                        { key: "d", text: "1/2 N²L/AE" }
                    ],
                    answer: "d",
                    explanation: "The strain energy stored in a linearly elastic bar under axial load is U = (1/2) * N * Δ = (1/2) * N * (NL/AE) = N²L/(2AE)."
                },
                {
                    id: "cm18q015",
                    src: "STRU935-00182",
                    text: "If an axial force N is applied gradually to a bar which is linear elastic and has a constant cross sectional area A and length L, what will be the elongation Δ?",
                    options: [
                        { key: "a", text: "NL/AE" },
                        { key: "b", text: "1/4 NL/AE" },
                        { key: "c", text: "1/3 NL/AE" },
                        { key: "d", text: "1/2 NL/AE" }
                    ],
                    answer: "a",
                    explanation: "Under a gradually applied axial force the stress is N over A and the strain is that divided by E, so over a length L the extension is NL over AE. The product AE is the axial rigidity, so a stiffer material or a fatter bar stretches proportionally less, and the extension grows directly with length."
                },
                {
                    id: "cm18q016",
                    src: "STRU935-00183",
                    text: "In which of the following cases, is virtual work theorem applicable?",
                    options: [
                        { key: "a", text: "Yielding support, non-linear elastic material" },
                        { key: "b", text: "Non-yielding support, linear elastic material" },
                        { key: "c", text: "Yielding support, linear elastic material" },
                        { key: "d", text: "Non-yielding support, non-linear elastic material" }
                    ],
                    answer: "b",
                    explanation: "Virtual work theorem is generally applicable to systems with non-yielding supports and linear elastic material behavior for accurate results."
                },
                {
                    id: "cm18q017",
                    src: "STRU935-00184",
                    text: "What is the maximum energy absorbed by any member subjected to load without permanent deformation?",
                    options: [
                        { key: "a", text: "Modulus of resilience" },
                        { key: "b", text: "Resilience" },
                        { key: "c", text: "proof resilience" },
                        { key: "d", text: "Strain energy" }
                    ],
                    answer: "c",
                    explanation: "Proof resilience is the maximum strain energy that can be stored in a body without permanent deformation."
                },
                {
                    id: "cm18q018",
                    src: "STRU935-00185",
                    text: "What is the maximum energy absorbed by any member per unit volume subjected to load without permanent deformation?",
                    options: [
                        { key: "a", text: "Proof resilience" },
                        { key: "b", text: "Resilience" },
                        { key: "c", text: "Strain energy" },
                        { key: "d", text: "Modulus of resilience" }
                    ],
                    answer: "d",
                    explanation: "Modulus of resilience is the proof resilience per unit volume, i.e., the maximum strain energy per unit volume."
                },
                {
                    id: "cm18q019",
                    src: "STRU935-00186",
                    text: "What is the energy absorbed by any material subjected to load within elastic limit?",
                    options: [
                        { key: "a", text: "Strain energy" },
                        { key: "b", text: "Proof resilience" },
                        { key: "c", text: "Modulus of resilience" },
                        { key: "d", text: "Resilience" }
                    ],
                    answer: "a",
                    explanation: "Strain energy is the total energy absorbed by a material when subjected to load within the elastic limit."
                },
                {
                    id: "cm18q020",
                    src: "STRU935-00187",
                    text: "Proof resilience is",
                    options: [
                        { key: "a", text: "U = σ²/(2E)" },
                        { key: "b", text: "U = σ² * volume / (2E)" },
                        { key: "c", text: "U = σ * volume / (2E)" },
                        { key: "d", text: "U = σ² * volume / E" }
                    ],
                    answer: "b",
                    explanation: "Proof resilience is the total strain energy at the elastic limit, given by U = (σ² * volume) / (2E), where σ is the proof stress."
                },
                {
                    id: "cm18q021",
                    src: "STRU935-00188",
                    text: "Stress due to impact load is ...... times the stress due to gradual load",
                    options: [
                        { key: "a", text: "equal to 1" },
                        { key: "b", text: "equal to 2" },
                        { key: "c", text: "between 1 to 2" },
                        { key: "d", text: "less than 1" }
                    ],
                    answer: "c",
                    explanation: "Stress due to impact load can vary depending on the height and weight; it is generally between 1 to 2 times the stress due to gradual load for many cases."
                },
                {
                    id: "cm18q022",
                    src: "STRU935-00189",
                    text: "Stress due to load falling from certain height is ..... times the stress due to gradual load",
                    options: [
                        { key: "a", text: "equal to 1" },
                        { key: "b", text: "equal to 2" },
                        { key: "c", text: "less than 1" },
                        { key: "d", text: "more than 2" }
                    ],
                    answer: "d",
                    explanation: "When a load falls from a height, the stress can be significantly higher, often more than 2 times the stress due to gradual load."
                },
                {
                    id: "cm18q023",
                    src: "STRU935-00190",
                    text: "Maxwell’s reciprocal theorem is special case of",
                    options: [
                        { key: "a", text: "Castigliano second theorem" },
                        { key: "b", text: "Superposition theorem" },
                        { key: "c", text: "Castigliano first theorem" },
                        { key: "d", text: "Stress law" }
                    ],
                    answer: "a",
                    explanation: "Castigliano's second theorem states that the deflection at a point equals the partial derivative of the strain energy with respect to the load there. Applying it to two loads in turn shows that the deflection at A due to a load at B equals the deflection at B due to the same load at A, which is Maxwell's reciprocal theorem."
                },
                {
                    id: "cm18q024",
                    src: "STRU935-00191",
                    text: "Castigliano’s first theorem is used to find",
                    options: [
                        { key: "a", text: "Stress" },
                        { key: "b", text: "Deflection" },
                        { key: "c", text: "Strain" },
                        { key: "d", text: "None" }
                    ],
                    answer: "b",
                    explanation: "Castigliano's first theorem is used to find displacements (deflections) at points where forces are applied."
                }
            ]
        },
        {
            id: "cm18desi",
            name: "Design of Structures",
            subject: "Design of Str",
            accent: "slate",
            blurb: "10 questions drawn from the Design of Structures bank.",
            questions: [
                {
                    id: "cm18q025",
                    src: "DESI787-00156",
                    text: "Gantry girders are designed to resist",
                    options: [
                        { key: "a", text: "Lateral loads" },
                        { key: "b", text: "Longitudinal loads and vertical loads" },
                        { key: "c", text: "Lateral, longitudinal and vertical loads" },
                        { key: "d", text: "Lateral and longitudinal loads" }
                    ],
                    answer: "c",
                    explanation: "Gantry girders support overhead cranes. They must resist vertical loads from the crane weight and lifted load, lateral loads from crane movement, and longitudinal loads from crane braking."
                },
                {
                    id: "cm18q026",
                    src: "DESI787-00157",
                    text: "Steel tanks are mainly designed for",
                    options: [
                        { key: "a", text: "Weight of tank" },
                        { key: "b", text: "Wind pressure" },
                        { key: "c", text: "Earthquake forces" },
                        { key: "d", text: "Water pressure" }
                    ],
                    answer: "d",
                    explanation: "The primary design load for liquid-containing steel tanks is the hydrostatic pressure exerted by the fluid (water pressure). Other loads are secondary but must be considered."
                },
                {
                    id: "cm18q027",
                    src: "DESI787-00158",
                    text: "The cross-section of a standard fillet is a triangle whose base angles are",
                    options: [
                        { key: "a", text: "45° and 45°" },
                        { key: "b", text: "30° and 60°" },
                        { key: "c", text: "40° and 50°" },
                        { key: "d", text: "20° and 70°" }
                    ],
                    answer: "a",
                    explanation: "A standard fillet weld has a theoretically right-angled isosceles triangular cross-section with equal legs, resulting in base angles of 45° each."
                },
                {
                    id: "cm18q028",
                    src: "DESI787-00159",
                    text: "Cold-driven rivets range from",
                    options: [
                        { key: "a", text: "6 to 10 mm in diameter" },
                        { key: "b", text: "12 to 22 mm in diameter" },
                        { key: "c", text: "10 to 16 mm in diameter" },
                        { key: "d", text: "22 to 32 mm in diameter" }
                    ],
                    answer: "b",
                    explanation: "Cold-driven rivets are typically used for smaller diameters, commonly in the range of 12 to 22 mm."
                },
                {
                    id: "cm18q029",
                    src: "DESI787-00160",
                    text: "When plates are exposed to weather, tacking rivets are provided at a pitch in line not exceeding (where t is the thickness of the outside plate),",
                    options: [
                        { key: "a", text: "8 t" },
                        { key: "b", text: "24 t" },
                        { key: "c", text: "16 t" },
                        { key: "d", text: "32 t" }
                    ],
                    answer: "c",
                    explanation: "To prevent water ingress and corrosion between plates, the pitch of tacking rivets in exposed structures is limited to not more than 16 times the thickness of the thinner outside plate."
                },
                {
                    id: "cm18q030",
                    src: "DESI787-00161",
                    text: "In a tension member if one or more than one rivet holes are off the line, the failure of the member depends upon:",
                    options: [
                        { key: "a", text: "Pitch" },
                        { key: "b", text: "Gauge" },
                        { key: "c", text: "Diameter of the rivet holes" },
                        { key: "d", text: "All the above" }
                    ],
                    answer: "d",
                    explanation: "The failure load of a tension member with misplaced holes depends on the reduced net area, which is a function of the pitch (distance along the line of force), gauge (transverse distance), and hole diameter."
                },
                {
                    id: "cm18q031",
                    src: "DESI787-00162",
                    text: "The main type of butt joints is a double cover",
                    options: [
                        { key: "a", text: "Shear riveted joint" },
                        { key: "b", text: "Chain riveted joint" },
                        { key: "c", text: "Zig-zag riveted joint" },
                        { key: "d", text: "All the above" }
                    ],
                    answer: "d",
                    explanation: "Butt joints are made by placing covering plates on both sides. The rivets can be arranged in chain, zig-zag, or other patterns, all of which are types of shear riveted joints."
                },
                {
                    id: "cm18q032",
                    src: "DESI787-00163",
                    text: "The central deflection of a simply supported steel beam of length L with a concentrated load W at the centre, is",
                    options: [
                        { key: "a", text: "WL² / 3EI" },
                        { key: "b", text: "WL³ / 48EI" },
                        { key: "c", text: "WL³ / 3EI" },
                        { key: "d", text: "5WL⁴ / 384EI" }
                    ],
                    answer: "b",
                    explanation: "The standard formula for the maximum deflection of a simply supported beam with a central point load is δ = (WL³) / (48EI)."
                },
                {
                    id: "cm18q033",
                    src: "DESI787-00164",
                    text: "According to IS : 800-1962 the permissible bending stress in steel slab plates, is",
                    options: [
                        { key: "a", text: "1500 kg/cm²" },
                        { key: "b", text: "1420 kg/cm²" },
                        { key: "c", text: "1890 kg/cm²" },
                        { key: "d", text: "2125 kg/cm²" }
                    ],
                    answer: "c",
                    explanation: "Older codes like IS 800:1962 specified permissible stresses. The permissible bending stress in steel slab plates was 1890 kg/cm²."
                },
                {
                    id: "cm18q034",
                    src: "DESI787-00165",
                    text: "The minimum area of longitudinal reinforcement in a RCC column 400 mm x 400 mm, shall not be less than ......",
                    options: [
                        { key: "a", text: "800 mm²" },
                        { key: "b", text: "9600 mm²" },
                        { key: "c", text: "1200 mm²" }
                    ],
                    answer: "c",
                    explanation: "As per IS 456:2000, the minimum longitudinal reinforcement for an RCC column is 0.8% of the gross cross-sectional area. For a 400mm x 400mm column, area = 160,000 mm². 0.8% of 160,000 = 1280 mm². The closest option is 1200 mm², which is the intended answer based on typical code interpretation and provided choices."
                }
            ]
        },
        {
            id: "cm18soil",
            name: "Soil Mechanics and Foundation",
            subject: "Soil Mechanics",
            accent: "amber",
            blurb: "14 questions drawn from the Soil Mechanics and Foundation bank.",
            questions: [
                {
                    id: "cm18q035",
                    src: "SOIL136-00216",
                    text: "The seepage pressure ps is given by ______",
                    options: [
                        { key: "a", text: "y_w * i * h" },
                        { key: "b", text: "y_w h" },
                        { key: "c", text: "2 y_w h" },
                        { key: "d", text: "y_w * i" }
                    ],
                    answer: "a",
                    explanation: "Seepage pressure (p_s) is the pressure loss due to friction over a flow path of length h. It is calculated as the product of the hydraulic gradient (i) over that path, the length (h), and the unit weight of water (γ_w): p_s = i * h * γ_w. Note: i = Δh / h, so p_s = (Δh / h) * h * γ_w = Δh * γ_w."
                },
                {
                    id: "cm18q036",
                    src: "SOIL136-00217",
                    text: "The seepage medium can be replaced by ______ electric model having the same geometric shape.",
                    options: [
                        { key: "a", text: "Potential divider" },
                        { key: "b", text: "Electric conductor" },
                        { key: "c", text: "Insulator" },
                        { key: "d", text: "Potentiometer" }
                    ],
                    answer: "b",
                    explanation: "In the flow net analogy for seepage, the soil medium (through which water flows) is analogous to an electric conductor (through which current flows). Equipotential lines are analogous to constant voltage lines, and flow lines are analogous to current flow lines."
                },
                {
                    id: "cm18q037",
                    src: "SOIL136-00218",
                    text: "The shear strength of a soil ...",
                    options: [
                        { key: "a", text: "directly proportional to the compression index of the soil" },
                        { key: "b", text: "decrease with an increase in initial void ratio" },
                        { key: "c", text: "directly proportional to the depth of the compressible soil mass" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "b",
                    explanation: "Shear strength is influenced by soil properties. It generally decreases as the initial void ratio increases because a higher void ratio indicates a looser soil structure with less interparticle contact and frictional resistance."
                },
                {
                    id: "cm18q038",
                    src: "SOIL136-00219",
                    text: "The un-drained test is carried out on sample of clay, silt, and peat to determine",
                    options: [
                        { key: "a", text: "Pore pressure" },
                        { key: "b", text: "None of the mentioned" },
                        { key: "c", text: "All of the mentioned" },
                        { key: "d", text: "Shear strength of natural ground and sensitivity" }
                    ],
                    answer: "d",
                    explanation: "An un-drained test is typically performed on fine-grained soils like clay, silt, and peat to find their undrained shear strength (e.g., for short-term stability analysis) and to calculate sensitivity, which is the ratio of undisturbed to remolded strength."
                },
                {
                    id: "cm18q039",
                    src: "SOIL136-00221",
                    text: "The consolidated-undrained test can be performed in ______ methods.",
                    options: [
                        { key: "a", text: "3" },
                        { key: "b", text: "2" },
                        { key: "c", text: "4" },
                        { key: "d", text: "1" }
                    ],
                    answer: "a",
                    explanation: "The consolidated-undrained (CU) test is commonly performed using three methods based on how the shear stress is applied: compression, extension, and lateral extension."
                },
                {
                    id: "cm18q040",
                    src: "SOIL136-00222",
                    text: "Which of the following cannot be obtained by using un-drained test?",
                    options: [
                        { key: "a", text: "Shear strength" },
                        { key: "b", text: "Effective stress failure envelope" },
                        { key: "c", text: "Sensitivity" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "b",
                    explanation: "An un-drained test provides the undrained shear strength (cᵤ) and can be used to find sensitivity. However, because pore pressures are not measured, the effective stress parameters (c' and φ') for the failure envelope cannot be determined from this test alone."
                },
                {
                    id: "cm18q041",
                    src: "SOIL136-00223",
                    text: "The change in the pore pressure during an un-drained shear can be explained by ______",
                    options: [
                        { key: "a", text: "Lateral pressure" },
                        { key: "b", text: "Effective stress" },
                        { key: "c", text: "Pore pressure parameter" },
                        { key: "d", text: "Mohr’s circle" }
                    ],
                    answer: "c",
                    explanation: "Pore pressure parameters (like Skempton's A and B) are coefficients used to predict the change in pore water pressure in response to a change in applied stress under undrained conditions."
                },
                {
                    id: "cm18q042",
                    src: "SOIL136-00224",
                    text: "Factor affecting pore pressure parameters is ______",
                    options: [
                        { key: "a", text: "Type of shear" },
                        { key: "b", text: "Temperature" },
                        { key: "c", text: "Nature of the fluid" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "d",
                    explanation: "Pore pressure parameters are influenced by the type of shear stress (e.g., compression vs. extension), temperature changes affecting soil and fluid properties, and the nature of the pore fluid (e.g., its compressibility)."
                },
                {
                    id: "cm18q043",
                    src: "SOIL136-00225",
                    text: "The equation τ = c + σ tanφ is given by",
                    options: [
                        { key: "a", text: "Coulomb" },
                        { key: "b", text: "Rankine" },
                        { key: "c", text: "Culaman" },
                        { key: "d", text: "Mohr" }
                    ],
                    answer: "a",
                    explanation: "The linear shear strength equation τ = c + σ tanφ, where c is cohesion and φ is the angle of internal friction, is known as the Coulomb failure criterion."
                },
                {
                    id: "cm18q044",
                    src: "SOIL136-00226",
                    text: "Which of the following shear test is developed based on drainage conditions?",
                    options: [
                        { key: "a", text: "Direct shear test" },
                        { key: "b", text: "Quick test and Consolidated un drained test" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "b",
                    explanation: "Shear tests are classified based on drainage: Quick test (undrained), Consolidated-quick test (consolidated-undrained), and Slow test (drained). The direct shear test is an apparatus that can perform these tests."
                },
                {
                    id: "cm18q045",
                    src: "SOIL136-00227",
                    text: "The direct shear test can also be called as",
                    options: [
                        { key: "a", text: "Simple shear test" },
                        { key: "b", text: "Stress test" },
                        { key: "c", text: "Strain controlled shear box test" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "c",
                    explanation: "The direct shear test is often called a shear box test. In a strain-controlled apparatus, the shear force is measured as one half of the box is displaced at a constant rate."
                },
                {
                    id: "cm18q046",
                    src: "SOIL136-00228",
                    text: "The commonly used apparatus used for performing shear box test is ______",
                    options: [
                        { key: "a", text: "Bishop’s pore pressure apparatus" },
                        { key: "b", text: "Triaxial shear test apparatus" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "Shear-box apparatus" }
                    ],
                    answer: "d",
                    explanation: "The direct shear test is performed specifically in a shear-box apparatus, which holds a soil sample in a split box and shears it along a predetermined plane."
                },
                {
                    id: "cm18q047",
                    src: "SOIL136-00229",
                    text: "To conduct un-drained test, which of the following is used?",
                    options: [
                        { key: "a", text: "Plain grids" },
                        { key: "b", text: "Slope grids" },
                        { key: "c", text: "Perforated grids" },
                        { key: "d", text: "All" }
                    ],
                    answer: "a",
                    explanation: "In a direct shear test, an undrained (quick) test requires impermeable plates (plain grids) to prevent drainage from the soil sample during shearing."
                },
                {
                    id: "cm18q048",
                    src: "SOIL136-00230",
                    text: "The drained test is also known as ______",
                    options: [
                        { key: "a", text: "Direct shear test" },
                        { key: "b", text: "Slow test" },
                        { key: "c", text: "Vane shear test" },
                        { key: "d", text: "Quick test" }
                    ],
                    answer: "b",
                    explanation: "A drained test is performed so slowly that no excess pore pressures develop. This slow rate of shearing gives it the name 'Slow test'."
                }
            ]
        },
        {
            id: "cm18watr",
            name: "Basic Water Resources Engineering",
            subject: "Water Resources",
            accent: "emerald",
            blurb: "12 questions drawn from the Basic Water Resources Engineering bank.",
            questions: [
                {
                    id: "cm18q049",
                    src: "WATE701-00195",
                    text: "Chevy’s formula is used to determine",
                    options: [
                        { key: "a", text: "head loss due to friction in pipe" },
                        { key: "b", text: "velocity of flow in pipe" },
                        { key: "c", text: "velocity of flow in channel" },
                        { key: "d", text: "none of the above" }
                    ],
                    answer: "c",
                    explanation: "Chezy's formula (V = C√(RS)) is primarily used to calculate the mean velocity of flow in open channels, where C is Chezy's coefficient, R is the hydraulic radius, and S is the slope of the energy grade line."
                },
                {
                    id: "cm18q050",
                    src: "WATE701-00196",
                    text: "Most economical section of a circular channel for maximum discharge",
                    options: [
                        { key: "a", text: "depth of water = 0.95 * diameter of circular section" },
                        { key: "b", text: "hydraulic mean depth = 0.286 * diameter of circular section" },
                        { key: "c", text: "wetted perimeter = 2.6 * diameter of circular section" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "For maximum discharge in a circular channel, the depth of flow is 0.95D, the hydraulic mean depth is 0.286D, and the wetted perimeter is approximately 2.6D. All these conditions define the most economical section."
                },
                {
                    id: "cm18q051",
                    src: "WATE701-00197",
                    text: "Most economical section of a circular channel for maximum velocity, is if",
                    options: [
                        { key: "a", text: "depth of water = 0.81 * diameter" },
                        { key: "b", text: "hydraulic mean depth = 0.304 * diameter of circular section" },
                        { key: "c", text: "wetted perimeter = 2.245 * diameter of circular section" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "d",
                    explanation: "For maximum velocity in a circular channel, the depth of flow is 0.81D, the hydraulic mean depth is 0.304D, and the wetted perimeter is approximately 2.245D. All these conditions define the most economical section for max velocity."
                },
                {
                    id: "cm18q052",
                    src: "WATE701-00198",
                    text: "The discharge through a trapezoidal channel is maximum when",
                    options: [
                        { key: "a", text: "half of top width = sloping side" },
                        { key: "b", text: "top width = 0.5 * sloping side" },
                        { key: "c", text: "top width = 1.5 * sloping side" },
                        { key: "d", text: "none of the above" }
                    ],
                    answer: "a",
                    explanation: "For a trapezoidal channel, the condition for the most economical section (maximum discharge) is that the length of the sloping side is equal to half of the top width."
                },
                {
                    id: "cm18q053",
                    src: "WATE701-00199",
                    text: "For the same specific force, the two depths at which same discharge occur are called",
                    options: [
                        { key: "a", text: "alternate depths" },
                        { key: "b", text: "critical depths" },
                        { key: "c", text: "conjugate depths" },
                        { key: "d", text: "normal depths" }
                    ],
                    answer: "c",
                    explanation: "Conjugate depths are the two sequent depths (one supercritical, one subcritical) that satisfy the specific force equation for a given discharge in a hydraulic jump. They are not to be confused with alternate depths, which are for specific energy."
                },
                {
                    id: "cm18q054",
                    src: "WATE701-00200",
                    text: "For any channel section, the specific energy increases with",
                    options: [
                        { key: "a", text: "decrease in depth of super critical flow" },
                        { key: "b", text: "increase in depth of super critical flow" },
                        { key: "c", text: "decrease in depth of sub critical flow" },
                        { key: "d", text: "none of the above" }
                    ],
                    answer: "a",
                    explanation: "In the supercritical flow branch of the specific energy curve (low depth, high velocity), a decrease in depth leads to an increase in specific energy. In the subcritical branch, an increase in depth increases specific energy."
                },
                {
                    id: "cm18q055",
                    src: "WATE701-00201",
                    text: "The phenomenon occurring in an open channel when a rapidly flowing stream abruptly changes to a slowly flowing stream causing a distinct rise of liquid surface is",
                    options: [
                        { key: "a", text: "water hammer" },
                        { key: "b", text: "hydraulic jump" },
                        { key: "c", text: "critical discharge" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "b",
                    explanation: "A hydraulic jump is a rapid transition from supercritical flow (high velocity, low depth) to subcritical flow (low velocity, high depth), resulting in significant energy dissipation and a rise in the water surface."
                },
                {
                    id: "cm18q056",
                    src: "WATE701-00202",
                    text: "The depth of flow at which specific energy is minimum is called",
                    options: [
                        { key: "a", text: "normal depth" },
                        { key: "b", text: "critical depth" },
                        { key: "c", text: "alternate depth" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "b",
                    explanation: "The critical depth is the depth of flow at which the specific energy is a minimum for a given discharge. It is a key concept in differentiating between subcritical and supercritical flow."
                },
                {
                    id: "cm18q057",
                    src: "WATE701-00203",
                    text: "Super critical flow occurs in",
                    options: [
                        { key: "a", text: "normal slope" },
                        { key: "b", text: "mild slope" },
                        { key: "c", text: "steep slope" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "c",
                    explanation: "Supercritical flow (Froude number &gt; 1) occurs when the channel slope is greater than the critical slope, which is classified as a steep slope. It is characterized by high velocity and shallow depth."
                },
                {
                    id: "cm18q058",
                    src: "WATE701-00204",
                    text: "Open channel flow is",
                    options: [
                        { key: "a", text: "one in which liquid is flowing in a closed conduit running full" },
                        { key: "b", text: "a covered channel running full" },
                        { key: "c", text: "one in which the liquid is flowing in a conduit under pressure" },
                        { key: "d", text: "one in which the liquid is flowing in a conduit has a free surface" }
                    ],
                    answer: "d",
                    explanation: "Open channel flow is defined by the presence of a free surface that is open to the atmosphere, unlike pipe flow which is under pressure and has no free surface."
                },
                {
                    id: "cm18q059",
                    src: "WATE701-00205",
                    text: "In an open channel",
                    options: [
                        { key: "a", text: "maximum velocity occurs at a little distance below water surface" },
                        { key: "b", text: "velocity distribution is symmetrical about pipe axis" },
                        { key: "c", text: "flow cross section is fixed" },
                        { key: "d", text: "the flow takes place at the expense of hydraulic pressure" }
                    ],
                    answer: "a",
                    explanation: "Due to friction at the air-water interface and the channel boundaries, the maximum velocity in an open channel typically occurs at a point slightly below the free surface, not at the center."
                },
                {
                    id: "cm18q060",
                    src: "WATE701-00206",
                    text: "For uniform flow in channel",
                    options: [
                        { key: "a", text: "Total energy line is horizontal, while the water surface and channel bed are inclined." },
                        { key: "b", text: "Total energy line, hydraulic gradient line, and channel bed are parallel." },
                        { key: "c", text: "Water surface is horizontal, while the total energy line and channel bed are parallel." },
                        { key: "d", text: "Channel bed and water surface are parallel, but the total energy line is horizontal." }
                    ],
                    answer: "b",
                    explanation: "In uniform flow, the water depth (y) and flow velocity (V) remain completely constant along the channel. Because depth and velocity head (V²/2g) do not change, the water surface and Total Energy Line stay at fixed vertical distances above the channel bed, making all three lines parallel."
                }
            ]
        },
        {
            id: "cm18hydr",
            name: "Hydropower",
            subject: "Hydropower",
            accent: "cyan",
            blurb: "9 questions drawn from the Hydropower bank.",
            questions: [
                {
                    id: "cm18q061",
                    src: "HYDR626-00154",
                    text: "The phenomenon of formation of vapour bubbles and sudden collapsing of the vapour bubbles in the penstock is called as:",
                    options: [
                        { key: "a", text: "Activation" },
                        { key: "b", text: "Governing" },
                        { key: "c", text: "Cavitation" },
                        { key: "d", text: "None of above" }
                    ],
                    answer: "c",
                    explanation: "This is the definition of cavitation. The collapse of these vapor bubbles creates intense shockwaves that can cause significant pitting and damage to the metal surfaces of the penstock and turbine blades."
                },
                {
                    id: "cm18q062",
                    src: "HYDR626-00155",
                    text: "Which phenomenon in a pipe flow is termed as water hammer?",
                    options: [
                        { key: "a", text: "The rise of negative pressure" },
                        { key: "b", text: "The zero pressure in pipe flow" },
                        { key: "c", text: "Rise of pressure due to gradual closure of valve" },
                        { key: "d", text: "Sudden rise of pressure in a long pipe due to sudden closure of valve" }
                    ],
                    answer: "d",
                    explanation: "Water hammer is a pressure surge or wave caused when a fluid in motion is forced to stop or change direction suddenly (momentum change). This creates a shockwave that travels through the pipe, resulting in a sudden, sharp rise in pressure."
                },
                {
                    id: "cm18q063",
                    src: "HYDR626-00156",
                    text: "Which section of a tunnel is most suitable for structural consideration?",
                    options: [
                        { key: "a", text: "Circular section" },
                        { key: "b", text: "D-Section" },
                        { key: "c", text: "Horse-Shoe section" },
                        { key: "d", text: "Egg-shaped section" }
                    ],
                    answer: "a",
                    explanation: "A circular section is inherently the strongest shape against external ground and water pressure because the hoop stress is distributed evenly around the circumference. It is the most efficient shape for resisting radial forces."
                },
                {
                    id: "cm18q064",
                    src: "HYDR626-00157",
                    text: "Which section of a tunnel is suitable where the tunnel is subjected to high internal pressure, but does not have good quality of rock and/or adequate rock cover around it?",
                    options: [
                        { key: "a", text: "D-Section" },
                        { key: "b", text: "Circular section" },
                        { key: "c", text: "Horse-Shoe section" },
                        { key: "d", text: "Egg-shaped section" }
                    ],
                    answer: "b",
                    explanation: "Even with poor rock conditions, a circular section lined with concrete or steel is the preferred choice for tunnels with high internal pressure (like penstocks). The circular shape best contains the internal pressure and the lining can be designed to transfer loads to the surrounding ground."
                },
                {
                    id: "cm18q065",
                    src: "HYDR626-00158",
                    text: "The valve closure is said to be gradual if the time required to close the valve is:",
                    options: [
                        { key: "a", text: "t = 2L/c" },
                        { key: "b", text: "t = 4L/c" },
                        { key: "c", text: "t &gt; 2L/c" },
                        { key: "d", text: "t &lt; 2L/c" }
                    ],
                    answer: "c",
                    explanation: "The critical time for valve closure is given by Tc = 2L/c, where L is the pipe length and c is the speed of the pressure wave. If the actual closure time (t) is greater than Tc, it is considered a gradual closure, and the water hammer pressure rise is reduced."
                },
                {
                    id: "cm18q066",
                    src: "HYDR626-00159",
                    text: "To attain the required shape of the tunnel section, we use:",
                    options: [
                        { key: "a", text: "Easers" },
                        { key: "b", text: "Cut holes" },
                        { key: "c", text: "Chisels" },
                        { key: "d", text: "Trimmers" }
                    ],
                    answer: "d",
                    explanation: "Trimmers (or trimmer holes) are the holes drilled after the initial cut and relief holes. They are carefully placed and blasted to 'trim' or sculpt the excavation to the final, precise designed profile of the tunnel."
                },
                {
                    id: "cm18q067",
                    src: "HYDR626-00160",
                    text: "For the full face method, the excavation to be done is generally divided into:",
                    options: [
                        { key: "a", text: "Three sections" },
                        { key: "b", text: "Two sections" },
                        { key: "c", text: "Four sections" },
                        { key: "d", text: "Five sections" }
                    ],
                    answer: "a",
                    explanation: "In the full-face method, the entire tunnel face is drilled and blasted at once. The typical drilling pattern divides the face into three main sections: the cut (center), relief, and trimmings (perimeter) to achieve efficient breakage and the desired shape."
                },
                {
                    id: "cm18q068",
                    src: "HYDR626-00161",
                    text: "Which one of the following is considered to be an advantage of the heading and benching method of tunnel construction?",
                    options: [
                        { key: "a", text: "It is suitable for construction in unstable rocks" },
                        { key: "b", text: "Tunneling can be continuous and the work can be expedited" },
                        { key: "c", text: "In this method, it is easy to install timber support" },
                        { key: "d", text: "In case of excessive water, it is easy to take correct steps" }
                    ],
                    answer: "b",
                    explanation: "A major advantage of heading and benching is that it allows for concurrent operations. While the bench is being excavated, the next advance in the top heading can begin, leading to continuous progress and faster overall construction rates."
                },
                {
                    id: "cm18q069",
                    src: "HYDR626-00162",
                    text: "Which one of the following statements is not correct for heading and benching method of tunnelling?",
                    options: [
                        { key: "a", text: "Drilling and mucking can be done simultaneously" },
                        { key: "b", text: "Benching provides a platform for working on heading" },
                        { key: "c", text: "Removal of muck from heading is very easy" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "c",
                    explanation: "Removing muck from the top heading is actually one of the main disadvantages of heading and benching method. The muck excavated from the upper section must either be dropped down to the lower section (which can interfere with the ongoing bench work) or transported via temporary ramps, making the mucking process difficult and inefficient compared to full-face tunneling."
                }
            ]
        },
        {
            id: "cm18irri",
            name: "Irrigation and Drainage",
            subject: "Irrigation",
            accent: "emerald",
            blurb: "10 questions drawn from the Irrigation and Drainage bank.",
            questions: [
                {
                    id: "cm18q070",
                    src: "IRRI951-00180",
                    text: "The maximum irrigation requirement of RICE crop is exhibited by its:",
                    options: [
                        { key: "a", text: "Maximum delta value" },
                        { key: "b", text: "Maximum duty value" },
                        { key: "c", text: "Minimum duty value" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "c",
                    explanation: "Duty is the area irrigated per unit discharge of water. A low duty means a large amount of water is required to irrigate a unit area, indicating a high irrigation requirement."
                },
                {
                    id: "cm18q071",
                    src: "IRRI951-00181",
                    text: "The duty of water at the outlet is also known as",
                    options: [
                        { key: "a", text: "Outlet factor" },
                        { key: "b", text: "Time factor" },
                        { key: "c", text: "Capacity" },
                        { key: "d", text: "Full supply co-efficient" }
                    ],
                    answer: "a",
                    explanation: "The duty of water calculated at the outlet of a watercourse is specifically called the outlet factor."
                },
                {
                    id: "cm18q072",
                    src: "IRRI951-00182",
                    text: "Consumptive use of water for a crop represents:",
                    options: [
                        { key: "a", text: "The transportation needs of the crop" },
                        { key: "b", text: "Evaporation needs of the cropped area" },
                        { key: "c", text: "Evapotranspiration needs of the cropped area plus the minor quantity required in plant metabolism" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "c",
                    explanation: "Consumptive use is the total water used by a plant for transpiration and building plant tissue, plus the water evaporated from the adjacent soil."
                },
                {
                    id: "cm18q073",
                    src: "IRRI951-00183",
                    text: "The amount of irrigation water required to fulfill the evapotranspiration and minor metabolic plant needs per unit of cropped area is called:",
                    options: [
                        { key: "a", text: "Consumptive use" },
                        { key: "b", text: "Consumptive irrigation requirement" },
                        { key: "c", text: "Net irrigation use" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "b",
                    explanation: "Consumptive Irrigation Requirement (CIR) is the amount of irrigation water required to meet the evapotranspiration needs of a crop, excluding effective rainfall and other contributions."
                },
                {
                    id: "cm18q074",
                    src: "IRRI951-00184",
                    text: "The water which can be utilized by the crop from the soil is called:",
                    options: [
                        { key: "a", text: "Field capillary water" },
                        { key: "b", text: "Capillary water" },
                        { key: "c", text: "Hydroscopic water" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "a",
                    explanation: "Field capacity is the amount of water held in the soil after excess water has drained away. This capillary water is readily available for plant use."
                },
                {
                    id: "cm18q075",
                    src: "IRRI951-00185",
                    text: "Permanent wilting point moisture content for a crop represents the",
                    options: [
                        { key: "a", text: "Field capillary water" },
                        { key: "b", text: "Capillary water" },
                        { key: "c", text: "Hydroscopic water" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "c",
                    explanation: "At the permanent wilting point, the only water remaining in the soil is held so tightly by adhesive forces (hygroscopic water) that plants cannot extract it."
                },
                {
                    id: "cm18q076",
                    src: "IRRI951-00186",
                    text: "Available moisture for a crop is equal to",
                    options: [
                        { key: "a", text: "Field capacity moisture content – wilting point moisture content" },
                        { key: "b", text: "Field capacity moisture content – hygroscopic moisture content" },
                        { key: "c", text: "Both A and B" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "a",
                    explanation: "Available moisture is the difference between the water content at field capacity (maximum water held against gravity) and the permanent wilting point (minimum water available to plants)."
                },
                {
                    id: "cm18q077",
                    src: "IRRI951-00187",
                    text: "The ratio of the water applied to a field penetrates uniformly throughout, then the water distribution efficiency is:",
                    options: [
                        { key: "a", text: "1" },
                        { key: "b", text: "0" },
                        { key: "c", text: "0.5" },
                        { key: "d", text: "None of them, as more data is required to ascertain it" }
                    ],
                    answer: "a",
                    explanation: "If water penetrates uniformly throughout the root zone, the depth of water stored is equal to the depth of water applied, making the distribution efficiency 100% or 1."
                },
                {
                    id: "cm18q078",
                    src: "IRRI951-00188",
                    text: "The ratio of the water stored in the root zone during irrigation to the water needed in the root zone prior to irrigation, is called",
                    options: [
                        { key: "a", text: "efficiency of water use" },
                        { key: "b", text: "efficiency of water application" },
                        { key: "c", text: "efficiency of water conveyance" },
                        { key: "d", text: "efficiency of water storage" }
                    ],
                    answer: "d",
                    explanation: "Water storage efficiency is a measure of how effectively the irrigation water replaces the soil moisture deficit in the root zone."
                },
                {
                    id: "cm18q079",
                    src: "IRRI951-00189",
                    text: "The ratio of the quantity of water stored in the root zone of the crops to the quantity of water actually delivered in the field is known as",
                    options: [
                        { key: "a", text: "Water conveyance efficiency" },
                        { key: "b", text: "Water application efficiency" },
                        { key: "c", text: "Water use efficiency" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "b",
                    explanation: "Water application efficiency is defined as the ratio of the volume of water stored in the root zone to the volume of water delivered to the field."
                }
            ]
        },
        {
            id: "cm18tran",
            name: "Transportation",
            subject: "Transportation",
            accent: "rose",
            blurb: "11 questions drawn from the Transportation bank.",
            questions: [
                {
                    id: "cm18q080",
                    src: "TRAN808-00181",
                    text: "According to NRS-2070, the design speed of Road III Class having Rolling terrain is",
                    options: [
                        { key: "a", text: "100 kmph" },
                        { key: "b", text: "60 kmph" },
                        { key: "c", text: "40 kmph" },
                        { key: "d", text: "80 kmph" }
                    ],
                    answer: "b",
                    explanation: "NRS-2070 (Nepal Road Standard) specifies the design speed for a Class III road in Rolling terrain as 60 kmph."
                },
                {
                    id: "cm18q081",
                    src: "TRAN808-00182",
                    text: "According to NRS-2070, The width of shoulders on either side of the carriageway shall be at least:-",
                    options: [
                        { key: "a", text: "0.50 m" },
                        { key: "b", text: "1 m" },
                        { key: "c", text: "0.75 m" },
                        { key: "d", text: "1.25 m" }
                    ],
                    answer: "c",
                    explanation: "Nepal Road Standard 2070 requires a shoulder of at least 0.75 m on each side of the carriageway. The shoulder gives a broken-down vehicle somewhere to stand, supports the edge of the pavement laterally, and carries surface water clear of the running surface."
                },
                {
                    id: "cm18q082",
                    src: "TRAN808-00183",
                    text: "The height of low kerb is kept about",
                    options: [
                        { key: "a", text: "50 mm" },
                        { key: "b", text: "75 mm" },
                        { key: "c", text: "200 mm" },
                        { key: "d", text: "100 mm" }
                    ],
                    answer: "d",
                    explanation: "A low kerb, also known as a mountable kerb, is typically about 100 mm high to guide traffic while allowing vehicles to mount it if necessary."
                },
                {
                    id: "cm18q083",
                    src: "TRAN808-00184",
                    text: "The extra width of pavement is provided on",
                    options: [
                        { key: "a", text: "Horizontal curve" },
                        { key: "b", text: "Width of pavement" },
                        { key: "c", text: "Length of pavement" },
                        { key: "d", text: "Super elevation" }
                    ],
                    answer: "a",
                    explanation: "Extra widening is provided on horizontal curves to account for the off-tracking of vehicles (mechanical widening) and for psychological reasons to give drivers more comfort (psychological widening)."
                },
                {
                    id: "cm18q084",
                    src: "TRAN808-00185",
                    text: "Transition curve is introduced in",
                    options: [
                        { key: "a", text: "Horizontal curve" },
                        { key: "b", text: "Between horizontal curve and circular curve" },
                        { key: "c", text: "Circular curve" },
                        { key: "d", text: "Vertical curve" }
                    ],
                    answer: "b",
                    explanation: "A transition curve is inserted between a straight road (tangent) and a circular curve, or between two circular curves of different radii, to allow a gradual change in curvature and superelevation."
                },
                {
                    id: "cm18q085",
                    src: "TRAN808-00186",
                    text: "The type of transition curves generally provided on hill roads, is",
                    options: [
                        { key: "a", text: "circular" },
                        { key: "b", text: "cubic parabola" },
                        { key: "c", text: "spiral" },
                        { key: "d", text: "Lemniscate" }
                    ],
                    answer: "c",
                    explanation: "Spiral curves are most commonly used on hill roads due to the ease with which they can be laid out in the field and their property of providing a uniform rate of change of curvature."
                },
                {
                    id: "cm18q086",
                    src: "TRAN808-00187",
                    text: "The most important factor that is required for road geometries is",
                    options: [
                        { key: "a", text: "SSD" },
                        { key: "b", text: "OSD" },
                        { key: "c", text: "ISD" },
                        { key: "d", text: "Speed of vehicle" }
                    ],
                    answer: "d",
                    explanation: "The design speed is the single most important factor controlling the geometric design of road elements like sight distances, curvature, superelevation, and gradient."
                },
                {
                    id: "cm18q087",
                    src: "TRAN808-00188",
                    text: "A part of pavement raised with respect to one side keeping other side constant is called",
                    options: [
                        { key: "a", text: "Super elevation" },
                        { key: "b", text: "Footpath" },
                        { key: "c", text: "Kerb" },
                        { key: "d", text: "Camber" }
                    ],
                    answer: "a",
                    explanation: "Superelevation is the transverse slope provided on a horizontal curve by raising the outer edge with respect to the inner edge to counteract centrifugal force."
                },
                {
                    id: "cm18q088",
                    src: "TRAN808-00189",
                    text: "The braking efficiency mainly depends on",
                    options: [
                        { key: "a", text: "Sight distance" },
                        { key: "b", text: "Friction" },
                        { key: "c", text: "PIEV theory" },
                        { key: "d", text: "Length of the curve" }
                    ],
                    answer: "b",
                    explanation: "Braking efficiency is the percentage of the theoretical maximum braking force that is actually developed. It primarily depends on the coefficient of friction between the tire and the road surface."
                },
                {
                    id: "cm18q089",
                    src: "TRAN808-00190",
                    text: "The minimum camber required in heavy rainfall area for bituminous roads as per IRC is",
                    options: [
                        { key: "a", text: "1%" },
                        { key: "b", text: "2.7%" },
                        { key: "c", text: "2.5%" },
                        { key: "d", text: "3%" }
                    ],
                    answer: "c",
                    explanation: "As per Indian Road Congress (IRC) guidelines, the recommended camber for bituminous surfaces in heavy rainfall areas is 2.5%."
                },
                {
                    id: "cm18q090",
                    src: "TRAN808-00191",
                    text: "The SSD is based on",
                    options: [
                        { key: "a", text: "Speed of vehicle" },
                        { key: "b", text: "Voluntary action of brain" },
                        { key: "c", text: "Reflex action of brain" },
                        { key: "d", text: "PIEV theory" }
                    ],
                    answer: "d",
                    explanation: "Stopping Sight Distance (SSD) is based on the PIEV theory, which accounts for the time taken for Perception, Intellection, Emotion, and Volition before a driver applies the brakes."
                }
            ]
        },
        {
            id: "cm18wate",
            name: "Water Supply, Sanitation and Environment",
            subject: "Water Supply",
            accent: "blue",
            blurb: "10 questions drawn from the Water Supply, Sanitation and Environment bank.",
            questions: [
                {
                    id: "cm18q091",
                    src: "WATE813-00168",
                    text: "Septic tank is provided for",
                    options: [
                        { key: "a", text: "setting of incoming sewage" },
                        { key: "b", text: "settle sludge digestion" },
                        { key: "c", text: "storage of digested sludge" },
                        { key: "d", text: "all these factors" }
                    ],
                    answer: "d",
                    explanation: "A septic tank is a primary treatment unit designed for all these functions: sedimentation of solids, anaerobic digestion of the settled sludge, and storage of the digested sludge until it is removed."
                },
                {
                    id: "cm18q092",
                    src: "WATE813-00169",
                    text: "Septic tank is a I.Listing tank II.Digestion tank III.Aeration tank which of the above is/are correct?",
                    options: [
                        { key: "a", text: "I only" },
                        { key: "b", text: "I and II only" },
                        { key: "c", text: "II and III only" },
                        { key: "d", text: "III only" }
                    ],
                    answer: "b",
                    explanation: "A septic tank is a settling (sedimentation) tank and an anaerobic digestion tank. It is not an aeration tank as the process is anaerobic."
                },
                {
                    id: "cm18q093",
                    src: "WATE813-00170",
                    text: "Soak pit is connected to",
                    options: [
                        { key: "a", text: "manhole" },
                        { key: "b", text: "spike trap" },
                        { key: "c", text: "Not Provided" },
                        { key: "d", text: "nahani trap" }
                    ],
                    answer: "c",
                    explanation: "A soak pit (or seepage pit) is used to dispose of effluent from a septic tank. It is connected to the outlet pipe of the septic tank, not directly to any of the listed traps. The correct option is missing."
                },
                {
                    id: "cm18q094",
                    src: "WATE813-00171",
                    text: "In the activated sludge process",
                    options: [
                        { key: "a", text: "aeration is continued till stability" },
                        { key: "b", text: "sludge is activated by constant stirrings" },
                        { key: "c", text: "Water is removed by centrifugal action." },
                        { key: "d", text: "aeration is done with an admixture of previously aerated sludge" }
                    ],
                    answer: "d",
                    explanation: "The key feature of the activated sludge process is the recycling of a portion of the settled biomass (return activated sludge) back to the aeration tank. This 'admixture' maintains a high concentration of microorganisms to treat the incoming sewage."
                },
                {
                    id: "cm18q095",
                    src: "WATE813-00172",
                    text: "To test chemical oxygen demand (COD) of sewage, organic matter is oxidized by potassium dichromate in the presence of",
                    options: [
                        { key: "a", text: "Sulphuric acid" },
                        { key: "b", text: "Hydrochloric acid" },
                        { key: "c", text: "Nitric acid" },
                        { key: "d", text: "Citric acid" }
                    ],
                    answer: "a",
                    explanation: "The standard COD test uses a strong oxidizing agent (potassium dichromate, K₂Cr₂O₇) in a highly acidic environment provided by concentrated sulfuric acid (H₂SO₄)."
                },
                {
                    id: "cm18q096",
                    src: "WATE813-00173",
                    text: "The discharge per unit plan area of a sedimentation tank, is generally called",
                    options: [
                        { key: "a", text: "over flow rate" },
                        { key: "b", text: "surface loading" },
                        { key: "c", text: "over flow velocity" },
                        { key: "d", text: "All the above" }
                    ],
                    answer: "d",
                    explanation: "All three terms – overflow rate, surface loading, and overflow velocity – are synonyms for the same design parameter: flow rate (Q) divided by the surface area (A)."
                },
                {
                    id: "cm18q097",
                    src: "WATE813-00174",
                    text: "Standard BOD is taken as",
                    options: [
                        { key: "a", text: "10-day BOD at 20 degree Celsius" },
                        { key: "b", text: "20-day BOD at 20 degree Celsius" },
                        { key: "c", text: "5-day BOD at 20 degree Celsius" },
                        { key: "d", text: "None" }
                    ],
                    answer: "c",
                    explanation: "The standard BOD test is defined as the 5-day biochemical oxygen demand measured at 20°C (BOD₅ at 20°C)."
                },
                {
                    id: "cm18q098",
                    src: "WATE813-00175",
                    text: "Minimum DO in water bodies should be ... to have aquatic life possible or survive.",
                    options: [
                        { key: "a", text: "5ppm" },
                        { key: "b", text: "10ppm" },
                        { key: "c", text: "3ppm" },
                        { key: "d", text: "4ppm" }
                    ],
                    answer: "d",
                    explanation: "A minimum dissolved oxygen concentration of 4-5 mg/L (ppm) is generally required to support a population of diverse and healthy aquatic life. Lower levels cause stress and can lead to fish kills."
                },
                {
                    id: "cm18q099",
                    src: "WATE813-00176",
                    text: "Expression for amount of BOD remaining at any time t is given by",
                    options: [
                        { key: "a", text: "L_t = L_0 (10^(-k_d t))" },
                        { key: "b", text: "L_t = L_0 (10^(-k_r t))" }
                    ],
                    answer: "a",
                    explanation: "The amount of ultimate BOD remaining at any time t (L_t) is given by L_t = L_0 * 10^(-k_d * t), where L_0 is the ultimate BOD first-stage and k_d is the deoxygenation rate constant."
                },
                {
                    id: "cm18q100",
                    src: "WATE813-00177",
                    text: "Streeter Phelps equation is",
                    options: [
                        { key: "a", text: "D_t = (k_d L_0 / (k_r - k_d)) (10^(-k_d t) - 10^(-k_r t)) + D_0 10^(-k_r t)" }
                    ],
                    answer: "a",
                    explanation: "<em>Source note: this question was published with all of its options identical, so only the one distinct option is shown.</em> The Streeter-Phelps equation models the dissolved oxygen deficit (D_t) in a river: D_t = (k_d * L_0 / (k_r - k_d)) * (10^(-k_d * t) - 10^(-k_r * t)) + D_0 * 10^(-k_r * t), where D_0 is the initial deficit."
                }
            ]
        }
    ]
};

/* Registered lazily — js/civil.js injects this file when the set is opened. */
window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["civil-18"] = CIVIL_MODEL_18;
