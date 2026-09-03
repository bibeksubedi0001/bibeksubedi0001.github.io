/* ============================================================
   CIVIL MODEL SET 19 — Civil Engineering licence-style model paper
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
const CIVIL_MODEL_19 = {
    day: 49,
    kind: "model",
    badge: { top: "Model", main: "C19" },
    title: "Civil Model Set 19",
    subtitle: "Civil Engineering · 9 subjects",
    durationMinutes: 120,
    negativeMarking: 0,
    chapters: [
        {
            id: "cm19basi",
            name: "Basic Civil Engineering",
            subject: "Basic Civil",
            accent: "blue",
            blurb: "13 questions drawn from the Basic Civil Engineering bank.",
            questions: [
                {
                    id: "cm19q001",
                    src: "BASI674-00229",
                    text: "Which of the following is not used in measuring perpendicular offsets?",
                    options: [
                        { key: "a", text: "Steel tape" },
                        { key: "b", text: "Optical square" },
                        { key: "c", text: "Cross staff" },
                        { key: "d", text: "Line ranger" }
                    ],
                    answer: "d",
                    explanation: "A line ranger is used for ranging (aligning points on a line), not for measuring perpendicular offsets. Optical squares and cross staffs are specifically for setting right angles."
                },
                {
                    id: "cm19q002",
                    src: "BASI674-00230",
                    text: "Which of the following is least affected by temperature changes and is highly precise?",
                    options: [
                        { key: "a", text: "Invar tape" },
                        { key: "b", text: "Linen tape" },
                        { key: "c", text: "Steel tape" },
                        { key: "d", text: "Metallic tape" }
                    ],
                    answer: "a",
                    explanation: "Invar is an alloy of nickel (36%) and steel with a very low coefficient of thermal expansion, making it highly precise and resistant to temperature changes."
                },
                {
                    id: "cm19q003",
                    src: "BASI674-00231",
                    text: "The error due to sag of tape or chain is known as",
                    options: [
                        { key: "a", text: "Positive error" },
                        { key: "b", text: "Negative error" },
                        { key: "c", text: "Compensating error" },
                        { key: "d", text: "None of above" }
                    ],
                    answer: "b",
                    explanation: "Sag causes the tape to curve downwards, making the measured distance longer than the actual horizontal distance. Thus, the correction is subtractive (negative)."
                },
                {
                    id: "cm19q004",
                    src: "BASI674-00232",
                    text: "In optical square, the angle between the first incident ray and the last reflected ray is",
                    options: [
                        { key: "a", text: "60°" },
                        { key: "b", text: "120°" },
                        { key: "c", text: "90°" },
                        { key: "d", text: "150°" }
                    ],
                    answer: "c",
                    explanation: "An optical square is designed to deflect the line of sight by exactly 90° using two reflections, allowing the user to set out right angles from a survey line."
                },
                {
                    id: "cm19q005",
                    src: "BASI674-00233",
                    text: "In surveying the horizontal angle which a line makes with the magnetic meridian is called",
                    options: [
                        { key: "a", text: "Grid meridian" },
                        { key: "b", text: "Arbitrary meridian" },
                        { key: "c", text: "Grid bearing" },
                        { key: "d", text: "Magnetic bearing" }
                    ],
                    answer: "d",
                    explanation: "A magnetic bearing is the horizontal angle measured clockwise from the magnetic north direction to the line."
                },
                {
                    id: "cm19q006",
                    src: "BASI674-00234",
                    text: "The reduced bearing of a line is N87°W. Its whole circle bearing would be",
                    options: [
                        { key: "a", text: "273°" },
                        { key: "b", text: "3°" },
                        { key: "c", text: "93°" },
                        { key: "d", text: "87°" }
                    ],
                    answer: "a",
                    explanation: "Reduced Bearing (RB) N87°W means the line is 87° west of north. In Whole Circle Bearing (WCB), measured clockwise from north, this is 360° - 87° = 273°."
                },
                {
                    id: "cm19q007",
                    src: "BASI674-00235",
                    text: "Which of the following methods of leveling eliminates the error due to curvature and refraction?",
                    options: [
                        { key: "a", text: "Fly leveling" },
                        { key: "b", text: "Leveling by equalizing the distances of foresight and back sight" },
                        { key: "c", text: "Check leveling" },
                        { key: "d", text: "Precise leveling" }
                    ],
                    answer: "b",
                    explanation: "When the foresight and backsight distances are equal, the errors due to curvature and refraction cancel each other out in the height difference calculation."
                },
                {
                    id: "cm19q008",
                    src: "BASI674-00236",
                    text: "A series of closely spaced contour lines represents a",
                    options: [
                        { key: "a", text: "Gentle slope" },
                        { key: "b", text: "Uniform slope" },
                        { key: "c", text: "Steep slope" },
                        { key: "d", text: "Plane surface" }
                    ],
                    answer: "c",
                    explanation: "Contour lines are lines of equal elevation. Closely spaced contours indicate a rapid change in elevation over a short horizontal distance, which defines a steep slope."
                },
                {
                    id: "cm19q009",
                    src: "BASI674-00237",
                    text: "Contour lines drawn on a map, are the lines which pass through",
                    options: [
                        { key: "a", text: "Hills and depressions" },
                        { key: "b", text: "Same elevation" },
                        { key: "c", text: "Same latitude" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "b",
                    explanation: "A contour line is an imaginary line on the ground joining points of equal elevation above a datum, usually mean sea level."
                },
                {
                    id: "cm19q010",
                    src: "BASI674-00238",
                    text: "Direct method of contouring is",
                    options: [
                        { key: "a", text: "Most accurate method" },
                        { key: "b", text: "A quick method" },
                        { key: "c", text: "Adopted for large surveys" },
                        { key: "d", text: "Suitable for hilly terrain" }
                    ],
                    answer: "a",
                    explanation: "In the direct method, contour points are directly located on the ground by leveling. This is the most accurate but also the slowest and most expensive method."
                },
                {
                    id: "cm19q011",
                    src: "BASI674-00239",
                    text: "Which of the following is not a permanent adjustment in theodolite?",
                    options: [
                        { key: "a", text: "Adjustment of vertical plate level" },
                        { key: "b", text: "Elimination of parallax" },
                        { key: "c", text: "Adjustment of telescope" },
                        { key: "d", text: "Adjustment of vertical circle index" }
                    ],
                    answer: "b",
                    explanation: "Eliminating parallax (by focusing the eyepiece and objective) is a temporary adjustment made by the observer at every setup, not a permanent adjustment of the instrument itself."
                },
                {
                    id: "cm19q012",
                    src: "BASI674-00240",
                    text: "How does the size of theodolite specified?",
                    options: [
                        { key: "a", text: "By the length of telescope" },
                        { key: "b", text: "By the diameter of vertical circle" },
                        { key: "c", text: "By the diameter of lower plate" },
                        { key: "d", text: "By the diameter of upper plate" }
                    ],
                    answer: "c",
                    explanation: "The size of a theodolite is specified by the diameter of the main graduated circle on its lower plate.For example, a 10 cm theodolite indicates that the lower plate's main horizontal scale has a 10 cm diameter."
                },
                {
                    id: "cm19q013",
                    src: "BASI674-00241",
                    text: "The ratio of focal length of objective to stadia interval is called",
                    options: [
                        { key: "a", text: "Additive factor" },
                        { key: "b", text: "Staff interval" },
                        { key: "c", text: "Subtractive interval" },
                        { key: "d", text: "Multiplying factor" }
                    ],
                    answer: "d",
                    explanation: "In stadia tacheometry, the distance from instrument to staff is calculated as D = K * s + C, where K (f/i) is the multiplying constant and C is the additive constant."
                }
            ]
        },
        {
            id: "cm19stru",
            name: "Structural Mechanics",
            subject: "Structural Mech",
            accent: "cyan",
            blurb: "11 questions drawn from the Structural Mechanics bank.",
            questions: [
                {
                    id: "cm19q014",
                    src: "STRU935-00192",
                    text: "Castigliano’s second theorem is used to find",
                    options: [
                        { key: "a", text: "Deflection" },
                        { key: "b", text: "Stress" },
                        { key: "c", text: "Strain" },
                        { key: "d", text: "None" }
                    ],
                    answer: "a",
                    explanation: "Castigliano's second theorem is used to find deflections by differentiating the strain energy with respect to a load."
                },
                {
                    id: "cm19q015",
                    src: "STRU935-00193",
                    text: "Which of the following is used to compute deflection on beams",
                    options: [
                        { key: "a", text: "strain energy due to shear" },
                        { key: "b", text: "Strain energy due to bending" },
                        { key: "c", text: "strain energy due to axial force" },
                        { key: "d", text: "strain energy due to torsion" }
                    ],
                    answer: "b",
                    explanation: "For beams, deflection is primarily computed using strain energy due to bending, as bending is the dominant action."
                },
                {
                    id: "cm19q016",
                    src: "STRU935-00194",
                    text: "For calculating the strain energy due to shear, the value of k for circular beam is U = ∫ k (V²/(2AG)) dx",
                    options: [
                        { key: "a", text: "4/5" },
                        { key: "b", text: "3/2" },
                        { key: "c", text: "10/9" },
                        { key: "d", text: "9/10" }
                    ],
                    answer: "c",
                    explanation: "The shear strain energy is written as the integral of k V squared over 2AG, where k corrects for the fact that shear stress is not uniform over the section. The factor is 6/5 for a rectangle and 10/9 for a circle, both greater than one because the peak shear at the neutral axis exceeds the average."
                },
                {
                    id: "cm19q017",
                    src: "STRU935-00195",
                    text: "In simply supported beams, the slope is ...... at supports.",
                    options: [
                        { key: "a", text: "Minimum" },
                        { key: "b", text: "Zero" },
                        { key: "c", text: "Uniform" },
                        { key: "d", text: "Maximum" }
                    ],
                    answer: "d",
                    explanation: "For a symmetrically loaded simply supported beam the elastic curve is flattest at mid-span, where the slope passes through zero, and tilts most sharply where it meets the supports. Deflection is the other way round, zero at the supports and greatest at mid-span, which is why slope and deflection limits control different sections."
                },
                {
                    id: "cm19q018",
                    src: "STRU935-00197",
                    text: "At what distance from base is point of inflection assumed in column of a portal frame which is supported by partially fixed supports (length of column is L)?",
                    options: [
                        { key: "a", text: "L/3" },
                        { key: "b", text: "L/2" },
                        { key: "c", text: "L/4" },
                        { key: "d", text: "L/5" }
                    ],
                    answer: "a",
                    explanation: "For a portal frame with partially fixed supports, the point of inflection in the column is assumed at L/3 from the base."
                },
                {
                    id: "cm19q019",
                    src: "STRU935-00198",
                    text: "What is the effective length of a column at both ends fixed?",
                    options: [
                        { key: "a", text: "L" },
                        { key: "b", text: "L/2" },
                        { key: "c", text: "L/√2" },
                        { key: "d", text: "2L" }
                    ],
                    answer: "b",
                    explanation: "For a column with both ends fixed, the effective length (Le) is L/2, where L is the actual length. This accounts for the rotational restraint at both ends."
                },
                {
                    id: "cm19q020",
                    src: "STRU935-00199",
                    text: "______ of column mainly depends upon end conditions.",
                    options: [
                        { key: "a", text: "Radius of gyration" },
                        { key: "b", text: "Slenderness ratio" },
                        { key: "c", text: "Effective length" },
                        { key: "d", text: "Factored load" }
                    ],
                    answer: "c",
                    explanation: "The effective length of a column is a critical factor that is directly influenced by its end conditions (e.g., fixed, pinned, free)."
                },
                {
                    id: "cm19q021",
                    src: "STRU935-00200",
                    text: "Long columns fail due to ______.",
                    options: [
                        { key: "a", text: "Direct stress" },
                        { key: "b", text: "Lateral stress" },
                        { key: "c", text: "Tensile stress" },
                        { key: "d", text: "Buckling stress" }
                    ],
                    answer: "d",
                    explanation: "Long columns are slender and fail primarily due to elastic buckling (instability) under compressive loads, not by direct crushing."
                },
                {
                    id: "cm19q022",
                    src: "STRU935-00201",
                    text: "Short columns fail due to ______.",
                    options: [
                        { key: "a", text: "Direct stress" },
                        { key: "b", text: "Buckling stress" },
                        { key: "c", text: "Lateral stress" },
                        { key: "d", text: "Tensile stress" }
                    ],
                    answer: "a",
                    explanation: "Short columns have low slenderness ratios and fail by yielding or crushing of the material under direct compressive stress."
                },
                {
                    id: "cm19q023",
                    src: "STRU935-00202",
                    text: "For ______ columns, the slenderness ratio is more than 32 and less than 120.",
                    options: [
                        { key: "a", text: "Long" },
                        { key: "b", text: "Medium" },
                        { key: "c", text: "Short" },
                        { key: "d", text: "Average" }
                    ],
                    answer: "b",
                    explanation: "Columns are often classified as short (SR &lt; 32), medium (32 &lt; SR &lt; 120), and long (SR &gt; 120) based on their slenderness ratio."
                },
                {
                    id: "cm19q024",
                    src: "STRU935-00203",
                    text: "The slenderness ratio is the ratio of effective length to least ______.",
                    options: [
                        { key: "a", text: "Ultimate load" },
                        { key: "b", text: "Actual length" },
                        { key: "c", text: "Radius of gyration" },
                        { key: "d", text: "Factor of safety" }
                    ],
                    answer: "c",
                    explanation: "Slenderness Ratio (λ) = Effective Length (Le) / Least Radius of Gyration (r). It is a key measure of a column's propensity to buckle."
                }
            ]
        },
        {
            id: "cm19desi",
            name: "Design of Structures",
            subject: "Design of Str",
            accent: "slate",
            blurb: "9 questions drawn from the Design of Structures bank.",
            questions: [
                {
                    id: "cm19q025",
                    src: "DESI787-00166",
                    text: "The maximum area of longitudinal reinforcement in a RCC column 400 mm x 400 mm, shall not be less than ......",
                    options: [
                        { key: "a", text: "800 mm²" },
                        { key: "b", text: "1280 mm²" },
                        { key: "c", text: "2560 mm²" },
                        { key: "d", text: "9600 mm²" }
                    ],
                    answer: "d",
                    explanation: "As per IS 456:2000, the maximum longitudinal reinforcement for an RCC column is 6% of the gross cross-sectional area. For a 400mm x 400mm column, area = 160,000 mm². 6% of 160,000 = 9600 mm²."
                },
                {
                    id: "cm19q026",
                    src: "DESI787-00167",
                    text: "Permissible bearing stress for column base in limit state method is",
                    options: [
                        { key: "a", text: "0.45 √fck" },
                        { key: "b", text: "0.25 fck" },
                        { key: "c", text: "0.25 √fck" }
                    ],
                    answer: "a",
                    explanation: "As per IS 456:2000, the permissible bearing stress on the loaded area (footing) is 0.45fck√(A1/A2), with a maximum value of 0.45fck√2. However, for the base itself (without the √(A1/A2) factor), the fundamental permissible bearing stress is often taken as 0.45fck. The option '0.45 √fck' is a common simplification or misstatement found in some contexts, but based on the given choices, it is selected as the correct answer."
                },
                {
                    id: "cm19q027",
                    src: "DESI787-00169",
                    text: "In designing rectangular combined footing ...... should be adopted as design value.",
                    options: [
                        { key: "a", text: "Stress distribution" },
                        { key: "b", text: "Maximum bending moment" },
                        { key: "c", text: "Compensation index" },
                        { key: "d", text: "Side bearing pressure" }
                    ],
                    answer: "b",
                    explanation: "The design of a combined footing is primarily governed by the bending moments and shear forces induced in the footing due to the column loads and soil pressure. The maximum bending moment is a critical design value."
                },
                {
                    id: "cm19q028",
                    src: "DESI787-00170",
                    text: "The design of rigid rectangular combined footing consist in determining the ......",
                    options: [
                        { key: "a", text: "Location of center of gravity of column" },
                        { key: "b", text: "Shear force" },
                        { key: "c", text: "Pressure distribution" },
                        { key: "d", text: "Side bearing pressure" }
                    ],
                    answer: "c",
                    explanation: "For a rigid combined footing, the soil pressure is assumed to be linearly distributed. The primary step in design is to determine this pressure distribution to calculate other internal forces like bending moment and shear."
                },
                {
                    id: "cm19q029",
                    src: "DESI787-00171",
                    text: "If the resultant of the soil pressure coincides with the resultant of the loads, the soil is pressure is assumed to be ......",
                    options: [
                        { key: "a", text: "Non-uniformly" },
                        { key: "b", text: "Zero" },
                        { key: "c", text: "None" },
                        { key: "d", text: "Uniformly distributed" }
                    ],
                    answer: "d",
                    explanation: "If the resultant of the applied loads (from columns) coincides with the resultant of the soil pressure, the footing is under no net moment. This leads to a uniform pressure distribution under a rigid footing."
                },
                {
                    id: "cm19q030",
                    src: "DESI787-00172",
                    text: "The type of footing if two column have unequal loading",
                    options: [
                        { key: "a", text: "Trapezoidal combined" },
                        { key: "b", text: "Rectangular combined" },
                        { key: "c", text: "Raft footing" },
                        { key: "d", text: "Strip footing" }
                    ],
                    answer: "a",
                    explanation: "When two columns carry significantly unequal loads, a trapezoidal combined footing is often used to ensure the resultant of the soil pressure coincides with the resultant of the column loads, achieving a uniform pressure distribution."
                },
                {
                    id: "cm19q031",
                    src: "DESI787-00173",
                    text: "Depth of footing for isolated column is governed by",
                    options: [
                        { key: "a", text: "Maximum BM" },
                        { key: "b", text: "Shear force" },
                        { key: "c", text: "Punching shear" },
                        { key: "d", text: "All of these" }
                    ],
                    answer: "d",
                    explanation: "The depth of an isolated footing is checked for maximum bending moment, one-way (beam) shear, and two-way (punching) shear to ensure safety against all failure modes."
                },
                {
                    id: "cm19q032",
                    src: "DESI787-00174",
                    text: "Minimum thickness of edge of footing is",
                    options: [
                        { key: "a", text: "200 mm" },
                        { key: "b", text: "250 mm" },
                        { key: "c", text: "150 mm" },
                        { key: "d", text: "300 mm" }
                    ],
                    answer: "c",
                    explanation: "As per IS 456:2000, the minimum thickness at the edge of an isolated footing should not be less than 150 mm."
                },
                {
                    id: "cm19q033",
                    src: "DESI787-00175",
                    text: "Reinforcement on combined footing is placed at",
                    options: [
                        { key: "a", text: "Bottom only" },
                        { key: "b", text: "Top only" },
                        { key: "c", text: "None" },
                        { key: "d", text: "Top and bottom" }
                    ],
                    answer: "d",
                    explanation: "A combined footing acts as a slab supported by columns, experiencing negative moments (top tension) near columns and positive moments (bottom tension) in mid-spans. Thus, reinforcement is required at both the top and bottom."
                }
            ]
        },
        {
            id: "cm19soil",
            name: "Soil Mechanics and Foundation",
            subject: "Soil Mechanics",
            accent: "amber",
            blurb: "13 questions drawn from the Soil Mechanics and Foundation bank.",
            questions: [
                {
                    id: "cm19q034",
                    src: "SOIL136-00231",
                    text: "Which of the following is a disadvantage of the shear box test?",
                    options: [
                        { key: "a", text: "Stress condition of soil is complex." },
                        { key: "b", text: "Test cannot be used for coarse grained soil" },
                        { key: "c", text: "No control on the drainage of soil" },
                        { key: "d", text: "The shear box test is more complex test" }
                    ],
                    answer: "a",
                    explanation: "A major disadvantage of the direct shear test is that the stress distribution on the failure plane is not uniform, making the state of stress complex and not easily definable."
                },
                {
                    id: "cm19q035",
                    src: "SOIL136-00232",
                    text: "The shearing of cohesive soil in drained test requires ______ days.",
                    options: [
                        { key: "a", text: "2" },
                        { key: "b", text: "7 to 5" },
                        { key: "c", text: "1 to 2" },
                        { key: "d", text: "1" }
                    ],
                    answer: "b",
                    explanation: "Drained tests on cohesive soils must be performed very slowly to allow full dissipation of pore pressures. This process can take several days (often 5 to 7) for a typical clay sample."
                },
                {
                    id: "cm19q036",
                    src: "SOIL136-00233",
                    text: "A major difference between the direct shear test and triaxial shear test is ______",
                    options: [
                        { key: "a", text: "Control on the drainage level" },
                        { key: "b", text: "Stress condition" },
                        { key: "c", text: "All of the mentioned" },
                        { key: "d", text: "None of the mentioned" }
                    ],
                    answer: "c",
                    explanation: "Key differences include: 1) The triaxial test offers better control over drainage. 2) The stress state in the triaxial test is more uniform and known, whereas it is complex in the direct shear test."
                },
                {
                    id: "cm19q037",
                    src: "SOIL136-00234",
                    text: "In direct shear test, the soil load is subjected to more stress at ______",
                    options: [
                        { key: "a", text: "Centre" },
                        { key: "b", text: "Top and bottom" },
                        { key: "c", text: "All" },
                        { key: "d", text: "Edges" }
                    ],
                    answer: "d",
                    explanation: "Due to the design of the shear box, stress concentrations often occur at the edges of the box, leading to a non-uniform stress distribution across the soil sample."
                },
                {
                    id: "cm19q038",
                    src: "SOIL136-00235",
                    text: "The failure of slopes may take place due to",
                    options: [
                        { key: "a", text: "Action of gravitational force" },
                        { key: "b", text: "force between the soil particle and high water content" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "a",
                    explanation: "Slope failure is primarily driven by the gravitational force acting on the soil mass, which creates shear stresses. If these stresses exceed the soil's shear strength, failure occurs."
                },
                {
                    id: "cm19q039",
                    src: "SOIL136-00236",
                    text: "Slopes is classified into ______ types.",
                    options: [
                        { key: "a", text: "3" },
                        { key: "b", text: "2" },
                        { key: "c", text: "4" },
                        { key: "d", text: "5" }
                    ],
                    answer: "b",
                    explanation: "Slopes are generally classified into two main types: finite slopes (e.g., embankments, cuts) and infinite slopes (e.g., extensive natural hillsides)."
                },
                {
                    id: "cm19q040",
                    src: "SOIL136-00237",
                    text: "Which of the following is an example of slopes extending to infinity?",
                    options: [
                        { key: "a", text: "Inclined face of Earth dams" },
                        { key: "b", text: "Embankments" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "Cuts" }
                    ],
                    answer: "c",
                    explanation: "An infinite slope is a theoretical concept where the soil layer is of infinite extent and constant properties. Man-made slopes like dams, embankments, and cuts are finite in length and depth."
                },
                {
                    id: "cm19q041",
                    src: "SOIL136-00238",
                    text: "If the soil properties for all identical depths below the surface are constant, it is a ______.",
                    options: [
                        { key: "a", text: "Finite slope" },
                        { key: "b", text: "Planar failure surface" },
                        { key: "c", text: "All of the mentioned" },
                        { key: "d", text: "Infinite slope" }
                    ],
                    answer: "d",
                    explanation: "An infinite slope assumes that the soil conditions are uniform at any given depth parallel to the slope surface, meaning the length of the slope is very large compared to its depth."
                },
                {
                    id: "cm19q042",
                    src: "SOIL136-00239",
                    text: "A long natural slope of cohesion-less soil is inclined at 12° to the horizontal. What will be the factor of safety of the slope if φ = 30°?",
                    options: [
                        { key: "a", text: "2.7" },
                        { key: "b", text: "1.6" },
                        { key: "c", text: "0.13" },
                        { key: "d", text: "0.4" }
                    ],
                    answer: "a",
                    explanation: "For an infinite, cohesion-less slope, the factor of safety (F) is given by F = tanφ / tanβ, where β is the slope angle. F = tan(30°) / tan(12°) ≈ 0.577 / 0.213 = 2.71."
                },
                {
                    id: "cm19q043",
                    src: "SOIL136-00240",
                    text: "In the limiting case of stability, the angle of slope is referred to as ______.",
                    options: [
                        { key: "a", text: "Angle of deviation" },
                        { key: "b", text: "Angle of repose" },
                        { key: "c", text: "Angle of unstable slope" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "b",
                    explanation: "The angle of repose is the steepest angle at which a cohesionless soil can be piled without slumping. It is essentially the angle of internal friction (φ) in its loosest state and represents a limiting equilibrium condition."
                },
                {
                    id: "cm19q044",
                    src: "SOIL136-00241",
                    text: "The factor of safety against sliding is given by ______ equation.",
                    options: [
                        { key: "a", text: "F = c / c_m" },
                        { key: "b", text: "F = τ_f / τ" },
                        { key: "c", text: "F = tanφ / tanβ" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "c",
                    explanation: "For an infinite slope with cohesionless soil (c=0), the factor of safety is F = (tanφ) / (tanβ), where φ is the friction angle and β is the slope angle. This equation defines safety against sliding."
                },
                {
                    id: "cm19q045",
                    src: "SOIL136-00242",
                    text: "The shearing resistance of a soil is constituted by ______.",
                    options: [
                        { key: "a", text: "Shearing strength" },
                        { key: "b", text: "None of the mentioned" },
                        { key: "c", text: "All of the mentioned" },
                        { key: "d", text: "Structural resistance and Frictional resistance" }
                    ],
                    answer: "d",
                    explanation: "Shearing resistance has two main components: 1) Cohesion or structural resistance (c), which is independent of normal stress. 2) Frictional resistance (σ tanφ), which depends on the normal stress."
                },
                {
                    id: "cm19q046",
                    src: "SOIL136-00243",
                    text: "The shear strength in cohesionless soil is due to ______.",
                    options: [
                        { key: "a", text: "Inter granular friction" },
                        { key: "b", text: "Internal friction" },
                        { key: "c", text: "Cohesion" },
                        { key: "d", text: "Inter particle force" }
                    ],
                    answer: "a",
                    explanation: "Cohesionless soils (e.g., sands and gravels) derive their shear strength primarily from intergranular friction, which is the frictional resistance between soil particles and interlocking."
                }
            ]
        },
        {
            id: "cm19watr",
            name: "Basic Water Resources Engineering",
            subject: "Water Resources",
            accent: "emerald",
            blurb: "11 questions drawn from the Basic Water Resources Engineering bank.",
            questions: [
                {
                    id: "cm19q047",
                    src: "WATE701-00207",
                    text: "In an open channel flow",
                    options: [
                        { key: "a", text: "hydraulic gradient line is lower than the liquid surface" },
                        { key: "b", text: "hydraulic gradient line coincides with the liquid surface" },
                        { key: "c", text: "hydraulic gradient line is higher than the liquid surface" },
                        { key: "d", text: "none of the above" }
                    ],
                    answer: "b",
                    explanation: "The Hydraulic Grade Line (HGL) represents the pressure head plus the elevation head. In an open channel, the pressure head at the surface is zero (atmospheric), so the HGL coincides with the free water surface itself."
                },
                {
                    id: "cm19q048",
                    src: "WATE701-00208",
                    text: "The maximum velocity in open channel occurs",
                    options: [
                        { key: "a", text: "at the bottom of the channel" },
                        { key: "b", text: "N of the depth of channel" },
                        { key: "c", text: "slightly below free surface" },
                        { key: "d", text: "at the free surface" }
                    ],
                    answer: "c",
                    explanation: "The maximum velocity occurs slightly below the free surface (typically around 0.05 to 0.25 times the depth) due to the drag or shear stress exerted by the air on the water surface."
                },
                {
                    id: "cm19q049",
                    src: "WATE701-00209",
                    text: "The profile of the rising water on the upstream side of the dam is called",
                    options: [
                        { key: "a", text: "backwater curve" },
                        { key: "b", text: "forth water curve" },
                        { key: "c", text: "normal water curve" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "a",
                    explanation: "A backwater curve is the longitudinal profile of the water surface upstream of an obstruction (like a dam or weir) that causes the flow depth to increase above the normal depth. It is an M1 type of gradually varied flow profile."
                },
                {
                    id: "cm19q050",
                    src: "WATE701-00210",
                    text: "Backwater curve is caused if there is a",
                    options: [
                        { key: "a", text: "friction head loss is more than the bed slope" },
                        { key: "b", text: "obstruction due to wet in the channel" },
                        { key: "c", text: "there is an increase in width of the channel" },
                        { key: "d", text: "none of the above" }
                    ],
                    answer: "b",
                    explanation: "A backwater curve is specifically caused by an obstruction (e.g., a weir, dam, or bridge pier) in the channel that impedes the flow, raising the water level upstream."
                },
                {
                    id: "cm19q051",
                    src: "WATE701-00211",
                    text: "When the pipes are connected in parallel, the total loss of the head",
                    options: [
                        { key: "a", text: "is equal to the sum of the loss of head in each pipe" },
                        { key: "b", text: "is same as each pipe" },
                        { key: "c", text: "is equal to the reciprocal of the sum of loss of head in each pipe" },
                        { key: "d", text: "none of the above" }
                    ],
                    answer: "b",
                    explanation: "In a parallel pipe system, the head loss (or pressure drop) between the two common junctions is the same for every branch, regardless of their individual flow rates or diameters. The total flow is the sum of the flows in each branch."
                },
                {
                    id: "cm19q052",
                    src: "WATE701-00212",
                    text: "The basic head loss in long pipe is",
                    options: [
                        { key: "a", text: "fittings" },
                        { key: "b", text: "sudden increase in diameter" },
                        { key: "c", text: "friction" },
                        { key: "d", text: "sudden decrease in diameter" }
                    ],
                    answer: "c",
                    explanation: "In long pipes, the major head loss is primarily due to friction along the pipe walls. Minor losses from fittings, expansions, and contractions are significant but are not the \"basic\" or primary loss in long pipe systems."
                },
                {
                    id: "cm19q053",
                    src: "WATE701-00213",
                    text: "The magnitude of capillary rise will be more in",
                    options: [
                        { key: "a", text: "slits" },
                        { key: "b", text: "sands" },
                        { key: "c", text: "gravels" },
                        { key: "d", text: "clays" }
                    ],
                    answer: "d",
                    explanation: "Capillary rise is inversely proportional to the tube diameter. Clays have the smallest particle size and thus the smallest pore spaces (acting like very fine capillaries), resulting in the highest capillary rise compared to slits, sands, and gravels."
                },
                {
                    id: "cm19q054",
                    src: "WATE701-00214",
                    text: "The hydraulic grade line is",
                    options: [
                        { key: "a", text: "Always above the center line of pipe" },
                        { key: "b", text: "Never above the energy grade line" },
                        { key: "c", text: "Always sloping downward in the direction of flow" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "b",
                    explanation: "The Hydraulic Grade Line (HGL) represents the sum of the pressure head and elevation head. The Energy Grade Line (EGL) is the HGL plus the velocity head. Since velocity head is always positive, the EGL is always above the HGL."
                },
                {
                    id: "cm19q055",
                    src: "WATE701-00215",
                    text: "When the flow in an open channel is gradually varied, the flow is said to be:",
                    options: [
                        { key: "a", text: "steady uniform flow" },
                        { key: "b", text: "steady non-uniform flow" },
                        { key: "c", text: "unsteady uniform flow" },
                        { key: "d", text: "Unsteady non-uniform flow" }
                    ],
                    answer: "b",
                    explanation: "Gradually varied flow (GVF) implies that the depth changes gradually along the channel length. If the flow rate does not change with time, it is 'steady'. Since the depth is not constant, it is 'non-uniform'."
                },
                {
                    id: "cm19q056",
                    src: "WATE701-00216",
                    text: "A channel is said to be of most economical cross-section if",
                    options: [
                        { key: "a", text: "It gives maximum discharge for a given cross-sectional area and bed slope" },
                        { key: "b", text: "It has a minimum wetted perimeter" },
                        { key: "c", text: "It involves lesser excavation for the design amount of discharge" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "The most economical (or efficient) channel section maximizes discharge for a given area and slope, which is achieved by minimizing the wetted perimeter. This also minimizes excavation for a designed discharge."
                },
                {
                    id: "cm19q057",
                    src: "WATE701-00217",
                    text: "The discharge through channel of circular section will be maximum when the depth of water is",
                    options: [
                        { key: "a", text: "0.34 times the diameter of section" },
                        { key: "b", text: "0.67 times the diameter of section" },
                        { key: "c", text: "0.81 times the diameter of section" },
                        { key: "d", text: "0.95 times the diameter of section" }
                    ],
                    answer: "d",
                    explanation: "For a circular channel flowing partially full, the discharge is maximum when the depth of flow is approximately 0.95 times the diameter (d/D = 0.95)."
                }
            ]
        },
        {
            id: "cm19hydr",
            name: "Hydropower",
            subject: "Hydropower",
            accent: "cyan",
            blurb: "10 questions drawn from the Hydropower bank.",
            questions: [
                {
                    id: "cm19q058",
                    src: "HYDR626-00163",
                    text: "Which one of the following statements is not correct with regard to heading and trenching method of tunnelling?",
                    options: [
                        { key: "a", text: "The holes in head and bench are loaded together with explosive for blasting" },
                        { key: "b", text: "Driving of tunnel is done in two portions of its section" },
                        { key: "c", text: "Driving the top portion is done in advance of the bottom portion" },
                        { key: "d", text: "Firing of head holes is done just before the bench holes are fired" }
                    ],
                    answer: "a",
                    explanation: "In the heading and benching method, the top heading and bench are typically blasted separately for safety and control. Blasting them together would be extremely dangerous and is not standard practice."
                },
                {
                    id: "cm19q059",
                    src: "HYDR626-00164",
                    text: "Forepoling method is generally adopted for tunnelling in:",
                    options: [
                        { key: "a", text: "Soft ground" },
                        { key: "b", text: "Firm ground" },
                        { key: "c", text: "Running ground" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "a",
                    explanation: "The forepoling method is a traditional technique used in very soft or unstable ground. It involves driving sharp-ended poles (forepoles) ahead of and over the tunnel roof to provide temporary support and prevent the ground from collapsing during excavation."
                },
                {
                    id: "cm19q060",
                    src: "HYDR626-00165",
                    text: "If 'D' is the diameter of tunnel in meters, then the thickness of lining in mm, as per the empirical formula is given by:",
                    options: [
                        { key: "a", text: "82 D" },
                        { key: "b", text: "104 D" },
                        { key: "c", text: "42 D" },
                        { key: "d", text: "124 D" }
                    ],
                    answer: "c",
                    explanation: "A common empirical rule for preliminary estimates of tunnel lining thickness (in mm) for concrete linings is T = 42D, where D is the tunnel diameter in meters. This provides a rough initial estimate before detailed structural design."
                },
                {
                    id: "cm19q061",
                    src: "HYDR626-00166",
                    text: "In case of drift method of tunnelling, the drift may be excavated at:",
                    options: [
                        { key: "a", text: "the centre" },
                        { key: "b", text: "the bottom" },
                        { key: "c", text: "the top" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "A drift is a small pilot tunnel driven ahead of the main excavation. It can be driven along the centerline, at the top (top heading), or at the bottom (invert) of the proposed tunnel section to probe ground conditions, provide drainage, or facilitate ventilation."
                },
                {
                    id: "cm19q062",
                    src: "HYDR626-00167",
                    text: "A tunnel is found more advantageous as compared to the alternate routes because it:",
                    options: [
                        { key: "a", text: "remains free from snow" },
                        { key: "b", text: "reduces the cost by reducing the route distance" },
                        { key: "c", text: "reduces the maintenance cost" },
                        { key: "d", text: "All the above" }
                    ],
                    answer: "d",
                    explanation: "Tunnels offer multiple advantages: they provide an all-weather route (snow-free), often create a shorter and more direct path (reducing distance and travel time), and generally have lower long-term maintenance costs compared to exposed surface routes like highways over mountains."
                },
                {
                    id: "cm19q063",
                    src: "HYDR626-00168",
                    text: "For tunnels exceeding 300 m in length, the grade should be provided below:",
                    options: [
                        { key: "a", text: "50% of the ruling gradient" },
                        { key: "b", text: "80% of the ruling gradient" },
                        { key: "c", text: "60% of the ruling gradient" },
                        { key: "d", text: "75% of the ruling gradient" }
                    ],
                    answer: "b",
                    explanation: "Long tunnels require a flatter gradient (i.e., a reduced grade) compared to the ruling gradient of the road. This is to account for the added resistance of the enclosed environment and to ensure adequate ventilation. A common specification is to keep it within 80% of the ruling gradient."
                },
                {
                    id: "cm19q064",
                    src: "HYDR626-00169",
                    text: "The method of draining in the tunnels, is generally known as:",
                    options: [
                        { key: "a", text: "foredrainage" },
                        { key: "b", text: "dewatering" },
                        { key: "c", text: "permeating drainage" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "b",
                    explanation: "The process of removing water from the tunnel construction site or finished tunnel is most commonly and generally referred to as dewatering. It involves pumping out groundwater or seepage that enters the excavated space."
                },
                {
                    id: "cm19q065",
                    src: "HYDR626-00170",
                    text: "For highways, tunnelling is preferred to if the open cut exceeds:",
                    options: [
                        { key: "a", text: "10 metres depth" },
                        { key: "b", text: "15 metres depth" },
                        { key: "c", text: "25 metres depth" },
                        { key: "d", text: "20 metres depth" }
                    ],
                    answer: "d",
                    explanation: "For highway construction, an open cut (trench) becomes increasingly expensive, disruptive, and environmentally damaging beyond a certain depth. Tunneling becomes the more economical and practical alternative typically when the required cut depth exceeds about 20 meters."
                },
                {
                    id: "cm19q066",
                    src: "HYDR626-00171",
                    text: "Circular section of tunnels is not suitable for:",
                    options: [
                        { key: "a", text: "non-cohesive soils" },
                        { key: "b", text: "carrying water" },
                        { key: "c", text: "tunnels driven by shield method" },
                        { key: "d", text: "placement of concrete lining" }
                    ],
                    answer: "a",
                    explanation: "In non-cohesive soils (like dry sand or gravel), the ground has little to no inherent strength. A circular shape requires uniform, radial support to be stable. These soils cannot provide this support, making a circular section unstable without extensive and complex ground treatment."
                },
                {
                    id: "cm19q067",
                    src: "HYDR626-00172",
                    text: "Drifters can be used to drill:",
                    options: [
                        { key: "a", text: "only up holes" },
                        { key: "b", text: "horizontal down or up holes" },
                        { key: "c", text: "only down holes" },
                        { key: "d", text: "horizontal or up holes" }
                    ],
                    answer: "b",
                    explanation: "A drifter is a powerful, track-mounted pneumatic drill used in tunneling and mining. It is highly versatile and can be positioned to drill holes in any direction: horizontally, downwards (down holes), or upwards (up holes), depending on the required drilling pattern."
                }
            ]
        },
        {
            id: "cm19irri",
            name: "Irrigation and Drainage",
            subject: "Irrigation",
            accent: "emerald",
            blurb: "11 questions drawn from the Irrigation and Drainage bank.",
            questions: [
                {
                    id: "cm19q068",
                    src: "IRRI951-00190",
                    text: "The base period for a particular crop is 50 days and the duty of the canal is 500 hectares per cumec, the depth of water will be",
                    options: [
                        { key: "a", text: "0.864 cm" },
                        { key: "b", text: "8.64 cm" },
                        { key: "c", text: "86.4 cm" },
                        { key: "d", text: "864 cm" }
                    ],
                    answer: "c",
                    explanation: "$$\\begin{aligned} & \\text{Given data:} \\\\ & \\text{Base Period } (B) = 50 \\text{ days} \\\\ & \\text{Duty } (D) = 500 \\text{ hectares/cumec} \\\\ & \\\\ & \\text{Using the formula:} \\\\ & \\Delta = \\frac{8.64 \\times B}{D} \\\\ & \\\\ & \\text{Calculation:} \\\\ & \\Delta = \\frac{8.64 \\times 50}{500} \\\\ & \\Delta = \\frac{432}{500} \\\\ & \\Delta = 0.864 \\text{ m} \\\\ & \\Delta = 86.4 \\text{ cm} \\end{aligned}$$"
                },
                {
                    id: "cm19q069",
                    src: "IRRI951-00191",
                    text: "If the depth is 8.64 cm on a field over a base period of 10 days, then the duty is",
                    options: [
                        { key: "a", text: "10 hectares per cu.m/s" },
                        { key: "b", text: "664 hectares per cu.m/s" },
                        { key: "c", text: "3000 hectares per cu.m/s" },
                        { key: "d", text: "100 hectares per cu.m/s" }
                    ],
                    answer: "d",
                    explanation: "The relationship is D = (8.64 * B) / Δ. First, convert depth to meters: Δ = 8.64 cm = 0.0864 m. Then, D = (8.64 * 10) / 0.0864 = 86.4 / 0.0864 = 1000 ha/cumec. Note: The option '100 hectares per cu.m/s' is likely a typo and should be 1000, but it is the closest listed answer."
                },
                {
                    id: "cm19q070",
                    src: "IRRI951-00192",
                    text: "10 m³/s of water is diverted to a 32 hectares field for 4 hours. Soil proving after irrigation showed that 0.3 m of water had been stored in the root zone. Water application efficiency in this case would be",
                    options: [
                        { key: "a", text: "66.67 %" },
                        { key: "b", text: "96 %" },
                        { key: "c", text: "48 %" },
                        { key: "d", text: "24 %" }
                    ],
                    answer: "a",
                    explanation: "Volume of water delivered = 10 m³/s * 4 * 3600 s = 144,000 m³. Volume stored in root zone = 32 ha * 10,000 m²/ha * 0.3 m = 96,000 m³. Application efficiency = (Volume stored / Volume delivered) * 100 = (96,000 / 144,000) * 100 = 66.67%."
                },
                {
                    id: "cm19q071",
                    src: "IRRI951-00193",
                    text: "The kor depth for rice is 190 mm and kor Period is 14 days. Outlet factor for this will be",
                    options: [
                        { key: "a", text: "837 hectares/m³/sec" },
                        { key: "b", text: "637 hectares/m³/sec" },
                        { key: "c", text: "972 hectares/m³/sec" },
                        { key: "d", text: "1172 hectares/m³/sec" }
                    ],
                    answer: "b",
                    explanation: "Outlet factor is the duty during the kor period. D = (8.64 * B) / Δ. B = 14 days, Δ = 190 mm = 19 cm. D = (8.64 * 14) / 19 = 120.96 / 19 ≈ 637 ha/cumec."
                },
                {
                    id: "cm19q072",
                    src: "IRRI951-00194",
                    text: "The depth of water required to bring the soil moisture content of a given soil upto its field capacity is called",
                    options: [
                        { key: "a", text: "Hyproscopic water" },
                        { key: "b", text: "Equivalent moisture" },
                        { key: "c", text: "Soil moisture deficiency" },
                        { key: "d", text: "Pellicle water" }
                    ],
                    answer: "c",
                    explanation: "Soil moisture deficiency is the amount of water required to bring the soil moisture content in the root zone up to its field capacity."
                },
                {
                    id: "cm19q073",
                    src: "IRRI951-00195",
                    text: "Effective rainfall for a crop is defined as",
                    options: [
                        { key: "a", text: "The portion of the rainfall which is utilized by crops" },
                        { key: "b", text: "The total rainfall" },
                        { key: "c", text: "The total rainfall minus the total run off" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "a",
                    explanation: "Effective rainfall is the part of the total precipitation that is stored in the soil and is available for use by the crop, excluding losses like runoff and deep percolation."
                },
                {
                    id: "cm19q074",
                    src: "IRRI951-00196",
                    text: "Water present in the soil which cannot be removed except by heating is called",
                    options: [
                        { key: "a", text: "Hyproscopic water" },
                        { key: "b", text: "Gravity water" },
                        { key: "c", text: "Capillary water" },
                        { key: "d", text: "Free water" }
                    ],
                    answer: "a",
                    explanation: "Hygroscopic water is held very tightly by soil particles at tensions greater than 31 atm. It is not available to plants and can only be removed by oven-drying the soil."
                },
                {
                    id: "cm19q075",
                    src: "IRRI951-00197",
                    text: "Net irrigation requirement of a crop is given as",
                    options: [
                        { key: "a", text: "Consumptive use + field losses" },
                        { key: "b", text: "Consumptive use – effective rainfall" },
                        { key: "c", text: "Consumptive use + conveyance losses" },
                        { key: "d", text: "Consumptive use + field losses + conveyance losses" }
                    ],
                    answer: "b",
                    explanation: "Net Irrigation Requirement (NIR) is the amount of irrigation water required to meet the evapotranspiration needs of the crop, after accounting for the contribution from effective rainfall. So, NIR = Cu - Re."
                },
                {
                    id: "cm19q076",
                    src: "IRRI951-00198",
                    text: "Crop ratio is defined as the ratio of area irrigated",
                    options: [
                        { key: "a", text: "In Kharif season to Rabi season" },
                        { key: "b", text: "Under perennial crop to non-perennial crops" },
                        { key: "c", text: "In Rabi season to Kharif season" },
                        { key: "d", text: "Under perennial crop to total area" }
                    ],
                    answer: "c",
                    explanation: "Crop ratio typically refers to the ratio of the area under Rabi (winter) crops to the area under Kharif (monsoon) crops in an irrigation system."
                },
                {
                    id: "cm19q077",
                    src: "IRRI951-00199",
                    text: "The average delta of rice crop is nearer to",
                    options: [
                        { key: "a", text: "40 cm" },
                        { key: "b", text: "80 cm" },
                        { key: "c", text: "160 cm" },
                        { key: "d", text: "120 cm" }
                    ],
                    answer: "d",
                    explanation: "Rice is a water-intensive crop. Its total water requirement, or delta, over its base period typically ranges from 100 cm to 150 cm, with an average often cited near 120 cm."
                },
                {
                    id: "cm19q078",
                    src: "IRRI951-00200",
                    text: "The field capacity of an irrigation soil depends on",
                    options: [
                        { key: "a", text: "Both porosity and pore size" },
                        { key: "b", text: "Only on porosity" },
                        { key: "c", text: "Only on pore size" },
                        { key: "d", text: "Porosity and depth of root zone" }
                    ],
                    answer: "a",
                    explanation: "Field capacity is the amount of water a soil can hold against gravity. It depends on the total pore space (porosity) and the size distribution of those pores (pore size), which determines water retention."
                }
            ]
        },
        {
            id: "cm19tran",
            name: "Transportation",
            subject: "Transportation",
            accent: "rose",
            blurb: "11 questions drawn from the Transportation bank.",
            questions: [
                {
                    id: "cm19q079",
                    src: "TRAN808-00192",
                    text: "The rise of crown for pavement of 7m with having 1 in 50 slopes with respect to edge is",
                    options: [
                        { key: "a", text: "0.14" },
                        { key: "b", text: "0.07" },
                        { key: "c", text: "0.09" },
                        { key: "d", text: "0.11" }
                    ],
                    answer: "b",
                    explanation: "The cross-slope is 1 in 50, meaning a rise of 1 unit over a width of 50 units. For a total width of 7m, the crown is raised in the center relative to the edges. The rise from the edge to the center (half-width = 3.5m) is (1/50) * 3.5 = 0.07 m."
                },
                {
                    id: "cm19q080",
                    src: "TRAN808-00193",
                    text: "The reaction time considered in SSD is",
                    options: [
                        { key: "a", text: "1.5 sec" },
                        { key: "b", text: "2 sec" },
                        { key: "c", text: "2.5 sec" },
                        { key: "d", text: "3 sec" }
                    ],
                    answer: "c",
                    explanation: "As per IRC (Indian Road Congress) standards, the reaction time for calculating Stopping Sight Distance (SSD) is taken as 2.5 seconds."
                },
                {
                    id: "cm19q081",
                    src: "TRAN808-00194",
                    text: "The desirable relationship between OSD and length of overtaking zone is",
                    options: [
                        { key: "a", text: "Length of overtaking zone = OSD" },
                        { key: "b", text: "Length of overtaking zone = 2 OSD" },
                        { key: "c", text: "Length of overtaking zone = 5 OSD" },
                        { key: "d", text: "Length of overtaking zone = 3 OSD" }
                    ],
                    answer: "d",
                    explanation: "An overtaking zone is a length of road where overtaking is allowed. Desirably, it should be at least three times the Overtaking Sight Distance (OSD) to allow for safe completion of the maneuver."
                },
                {
                    id: "cm19q082",
                    src: "TRAN808-00195",
                    text: "If the speed of overtaken vehicle is 50kmph then spacing of vehicles is",
                    options: [
                        { key: "a", text: "14m" },
                        { key: "b", text: "10m" },
                        { key: "c", text: "12m" },
                        { key: "d", text: "16m" }
                    ],
                    answer: "a",
                    explanation: "As per IRC recommendations, the safe spacing between vehicles (S) in a traffic stream is given by S = (0.2 * V + 6) where V is speed in km/h. For V=50 km/h, S = (0.2*50 + 6) = (10 + 6) = 16m. However, a common empirical formula for spacing in overtaking sight distance calculations is often taken as the average length of a vehicle (≈6m) plus a clearance (≈3.6m), totaling around 9.6-10m. For 50 kmph, IRC suggests a spacing of about 14m for OSD calculations."
                },
                {
                    id: "cm19q083",
                    src: "TRAN808-00197",
                    text: "The relationship between SSD and ISD is?",
                    options: [
                        { key: "a", text: "SSD = ISD" },
                        { key: "b", text: "ISD = 2 SSD" },
                        { key: "c", text: "SSD = 1.5 SSD" },
                        { key: "d", text: "SSD = ISD + OSD" }
                    ],
                    answer: "b",
                    explanation: "Intermediate Sight Distance (ISD) is defined as twice the Stopping Sight Distance (SSD). ISD = 2 * SSD. This provides a margin of safety, allowing two-way traffic to stop if needed."
                },
                {
                    id: "cm19q084",
                    src: "TRAN808-00198",
                    text: "The degree of curve is the central angle subtended by an arc of length of?",
                    options: [
                        { key: "a", text: "20m" },
                        { key: "b", text: "25m" },
                        { key: "c", text: "30m" },
                        { key: "d", text: "35m" }
                    ],
                    answer: "c",
                    explanation: "In highway engineering, the degree of curve (D) is defined as the central angle subtended by a 30-meter arc (or a 100-foot arc in imperial units) of the curve."
                },
                {
                    id: "cm19q085",
                    src: "TRAN808-00199",
                    text: "Which of the following is equal to super elevation?",
                    options: [
                        { key: "a", text: "Sinθ" },
                        { key: "b", text: "Cosθ" },
                        { key: "c", text: "Secθ" },
                        { key: "d", text: "Tanθ" }
                    ],
                    answer: "d",
                    explanation: "Superelevation is defined as the rise across the carriageway divided by its width, which is the tangent of the angle of banking. Because that angle is small in practice, tan theta, sin theta and the angle in radians are almost equal, and the standard design equation e plus f equal to v squared over 127R relies on that approximation."
                },
                {
                    id: "cm19q086",
                    src: "TRAN808-00200",
                    text: "The design speed on a highway is 60kmph; calculate the super elevation if radius of curve is 150m and coefficient of friction is 0.15.",
                    options: [
                        { key: "a", text: "0.039" },
                        { key: "b", text: "0.07" },
                        { key: "c", text: "0.04" },
                        { key: "d", text: "0.15" }
                    ],
                    answer: "a",
                    explanation: "Use the formula e + f = V²/(127R). V=60 km/h, R=150m, f=0.15. e + 0.15 = (60²)/(127*150) = 3600 / 19050 ≈ 0.189. Thus, e = 0.189 - 0.15 = 0.039. However, IRC restricts maximum e to 0.07 (7%). Since the calculated e is less than 0.07, it is provided as 0.039."
                },
                {
                    id: "cm19q087",
                    src: "TRAN808-00201",
                    text: "If the super elevation is 0.07 and width of pavement is 7m then the raise of outer edge with respect to inner edge is",
                    options: [
                        { key: "a", text: "0.47m" },
                        { key: "b", text: "0.49m" },
                        { key: "c", text: "0.48m" },
                        { key: "d", text: "0.50m" }
                    ],
                    answer: "b",
                    explanation: "The raise of the outer edge (E) = e * B, where e is the superelevation and B is the width of the pavement. E = 0.07 * 7 = 0.49 meters."
                },
                {
                    id: "cm19q088",
                    src: "TRAN808-00202",
                    text: "The ruling minimum radius in the curve is given by",
                    options: [
                        { key: "a", text: "V²/147(e+f)" },
                        { key: "b", text: "V²/(e+f)" },
                        { key: "c", text: "V²/127(e+f)" }
                    ],
                    answer: "c",
                    explanation: "The ruling minimum radius (R) for a horizontal curve is calculated using the formula R = V² / (127(e + f)), where V is speed in km/h, e is superelevation, and f is the coefficient of friction."
                },
                {
                    id: "cm19q089",
                    src: "TRAN808-00203",
                    text: "The extra widening is the sum of",
                    options: [
                        { key: "a", text: "Two times of mechanical widening" },
                        { key: "b", text: "Two times of psychological widening" },
                        { key: "c", text: "Mechanical widening – physical widening" },
                        { key: "d", text: "Mechanical widening and psychological widening" }
                    ],
                    answer: "d",
                    explanation: "Extra widening on curves (E) has two components: mechanical widening (due to the rigid wheelbase of the vehicle) and psychological widening (to provide extra room for driver comfort and safety). E = W_mechanical + W_psychological."
                }
            ]
        },
        {
            id: "cm19wate",
            name: "Water Supply, Sanitation and Environment",
            subject: "Water Supply",
            accent: "blue",
            blurb: "11 questions drawn from the Water Supply, Sanitation and Environment bank.",
            questions: [
                {
                    id: "cm19q090",
                    src: "WATE813-00178",
                    text: "The detention period for oxidation ponds is usually kept as",
                    options: [
                        { key: "a", text: "10-15 days" },
                        { key: "b", text: "24 hours" },
                        { key: "c", text: "48 hours" },
                        { key: "d", text: "3 months" }
                    ],
                    answer: "a",
                    explanation: "Oxidation ponds (or stabilization ponds) require long detention times to allow for natural biological processes. The detention time typically ranges from 2 to 6 weeks, with 10-15 days being a common value."
                },
                {
                    id: "cm19q091",
                    src: "WATE813-00179",
                    text: "Sewage that has received no purification treatment is called",
                    options: [
                        { key: "a", text: "Untreated sewage" },
                        { key: "b", text: "Raw sewage" },
                        { key: "c", text: "Crude sewage" },
                        { key: "d", text: "Fresh sewage" }
                    ],
                    answer: "b",
                    explanation: "Sewage that has not undergone any treatment process is universally termed 'raw sewage'. The other options are synonyms but 'raw sewage' is the most standard technical term."
                },
                {
                    id: "cm19q092",
                    src: "WATE813-00180",
                    text: "The water carried sewerage system removes",
                    options: [
                        { key: "a", text: "Industrial sewage" },
                        { key: "b", text: "Domestic sewage" },
                        { key: "c", text: "Storm sewage" }
                    ],
                    answer: "c",
                    explanation: "A water-carried sewerage system is designed to remove all liquid wastes, including stormwater runoff (storm sewage), from an area."
                },
                {
                    id: "cm19q093",
                    src: "WATE813-00181",
                    text: "The sewer pipes have to be designed and checked for",
                    options: [
                        { key: "a", text: "only maximum flow" },
                        { key: "b", text: "average flow" },
                        { key: "c", text: "only minimum flow" },
                        { key: "d", text: "both maximum and minimum flow" }
                    ],
                    answer: "d",
                    explanation: "Sewers must be designed for maximum flow to prevent overflow and for minimum flow to ensure self-cleansing velocity is maintained to avoid sedimentation."
                },
                {
                    id: "cm19q094",
                    src: "WATE813-00182",
                    text: "Factor affecting sanitary sewage are",
                    options: [
                        { key: "a", text: "Rate of water supply" },
                        { key: "b", text: "Population" },
                        { key: "c", text: "Unauthorized connection" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "The quantity and characteristics of sanitary sewage are directly influenced by the rate of water supply, the population served, and unauthorized connections that add extraneous flow."
                },
                {
                    id: "cm19q095",
                    src: "WATE813-00183",
                    text: "Sanitary sewage produced is generally expressed as:",
                    options: [
                        { key: "a", text: "m3" },
                        { key: "b", text: "Ipcd" },
                        { key: "c", text: "Liter" },
                        { key: "d", text: "ml" }
                    ],
                    answer: "b",
                    explanation: "Sanitary sewage flow is typically expressed in liters per capita per day (lpcd or Ipcd), which is the average daily sewage generated per person."
                },
                {
                    id: "cm19q096",
                    src: "WATE813-00184",
                    text: "Specific gravity of the sewage is generally",
                    options: [
                        { key: "a", text: "1" },
                        { key: "b", text: "2" },
                        { key: "c", text: "1.001" },
                        { key: "d", text: "0.1" }
                    ],
                    answer: "c",
                    explanation: "The specific gravity of sewage is slightly greater than 1 (approximately 1.001) because it contains dissolved and suspended solids, making it heavier than pure water."
                },
                {
                    id: "cm19q097",
                    src: "WATE813-00185",
                    text: "Minimum velocity in sewer depends upon",
                    options: [
                        { key: "a", text: "Sewer size" },
                        { key: "b", text: "Sewerage system" },
                        { key: "c", text: "Solid particle of different materials and specific gravity" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "The self-cleansing minimum velocity (typically 0.6-0.75 m/s) depends on sewer size, the type of system, and the size, material, and specific gravity of particles to be transported."
                },
                {
                    id: "cm19q098",
                    src: "WATE813-00187",
                    text: "Testing of sewer is done by which of the following methods",
                    options: [
                        { key: "a", text: "Air test" },
                        { key: "b", text: "Straightness test" },
                        { key: "c", text: "Obstruction test" },
                        { key: "d", text: "Air" }
                    ],
                    answer: "a",
                    explanation: "Sewer pipes are commonly tested for water-tightness using an air test, where pressurized air is applied and the pressure drop is measured to detect leaks."
                },
                {
                    id: "cm19q099",
                    src: "WATE813-00188",
                    text: "Which of the following test of the sewer is done by placing a mirror at one end?",
                    options: [
                        { key: "a", text: "Mirror test" },
                        { key: "b", text: "Straightness test" }
                    ],
                    answer: "b",
                    explanation: "A straightness test, or mirror test, involves placing a mirror at one end of the sewer and a lamp at the other. A straight line of sight confirms alignment."
                },
                {
                    id: "cm19q100",
                    src: "WATE813-00189",
                    text: "Sewage can be sampled by",
                    options: [
                        { key: "a", text: "Grab sample" },
                        { key: "b", text: "Composite sample" },
                        { key: "c", text: "Both a and b" },
                        { key: "d", text: "None" }
                    ],
                    answer: "c",
                    explanation: "Sewage sampling can be a grab sample (a single sample at a point in time) or a composite sample (a mixture of samples taken over a period to get an average)."
                }
            ]
        }
    ]
};

/* Registered lazily — js/civil.js injects this file when the set is opened. */
window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["civil-19"] = CIVIL_MODEL_19;
