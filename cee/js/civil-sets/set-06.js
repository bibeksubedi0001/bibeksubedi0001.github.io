/* ============================================================
   CIVIL MODEL SET 6 — Civil Engineering licence-style model paper
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
const CIVIL_MODEL_6 = {
    day: 36,
    kind: "model",
    badge: { top: "Model", main: "C6" },
    title: "Civil Model Set 6",
    subtitle: "Civil Engineering · 9 subjects",
    durationMinutes: 120,
    negativeMarking: 0,
    chapters: [
        {
            id: "cm6basi",
            name: "Basic Civil Engineering",
            subject: "Basic Civil",
            accent: "blue",
            blurb: "13 questions drawn from the Basic Civil Engineering bank.",
            questions: [
                {
                    id: "cm6q001",
                    src: "BASI674-00053",
                    text: "In closed traverse, the sum of the north latitudes is more than the sum of the south latitudes and also the sum of the west departures is more than the sum of the east departures, the bearing of the closing line is in the",
                    options: [
                        { key: "a", text: "NE quadrant" },
                        { key: "b", text: "SE quadrant" },
                        { key: "c", text: "NW quadrant" },
                        { key: "d", text: "SW quadrant" }
                    ],
                    answer: "c",
                    explanation: "Since the sum of North latitudes is greater than South latitudes, the resultant latitude is North. Since the sum of West departures is greater than East departures, the resultant departure is West. A line that is North and West points towards the North-West quadrant."
                },
                {
                    id: "cm6q002",
                    src: "BASI674-00054",
                    text: "Readings taken during traversing using total station are",
                    options: [
                        { key: "a", text: "Horizontal angle, Vertical angle, Horizontal distance, vertical distance, station height" },
                        { key: "b", text: "Horizontal angle, Vertical angle, Horizontal distance, station height" },
                        { key: "c", text: "Horizontal angle, Horizontal distance, vertical distance, station height, height of instrument" },
                        { key: "d", text: "Horizontal angle, Vertical angle, Horizontal distance, vertical distance" }
                    ],
                    answer: "d",
                    explanation: "A total station observes the horizontal angle, the vertical (or zenith) angle and the slope distance, from which it computes the horizontal and vertical components. Instrument and target heights are entered by the surveyor rather than measured by the instrument, so they are not readings."
                },
                {
                    id: "cm6q003",
                    src: "BASI674-00055",
                    text: "The bearings of the lines AB and BC are 146° 30' and 68° 30'. The included angle ABC is",
                    options: [
                        { key: "a", text: "102°" },
                        { key: "b", text: "78°" },
                        { key: "c", text: "45°" },
                        { key: "d", text: "none of these" }
                    ],
                    answer: "a",
                    explanation: "The included angle at B is the bearing of BA minus the bearing of BC. The back bearing of AB is 146 degrees 30 minutes plus 180, that is 326 degrees 30 minutes, and subtracting 68 degrees 30 minutes leaves 258 degrees, whose explement is the interior angle of 102 degrees."
                },
                {
                    id: "cm6q004",
                    src: "BASI674-00056",
                    text: "What is the direction of closing error?",
                    options: [
                        { key: "a", text: "Tan δ = ΣL / ΣD" },
                        { key: "b", text: "Tan δ = ΣD / ΣL" },
                        { key: "c", text: "Tan δ = ΣL - ΣD" },
                        { key: "d", text: "tanδ= ΣL +ΣD" }
                    ],
                    answer: "b",
                    explanation: "δ is the angle of misclosure, which represents the direction of the closing error. ΣD is the algebraic sum of the departures (East-West components) of all the lines in the traverse. ΣL is the algebraic sum of the latitudes (North-South components) of all the lines in the traverse. In a perfectly measured closed traverse, both ΣL and ΣD would equal zero. However, due to errors in measurement, they will have non-zero values, and their ratio determines the direction of the resultant closing error."
                },
                {
                    id: "cm6q005",
                    src: "BASI674-00057",
                    text: "Which of following is obstacle to chaining but not for ranging?",
                    options: [
                        { key: "a", text: "Building" },
                        { key: "b", text: "Hillock" },
                        { key: "c", text: "River" },
                        { key: "d", text: "All of these" }
                    ],
                    answer: "c",
                    explanation: "Chaining means measuring horizontal distance with chain/tape. Ranging means aligning intermediate points in straight line. Obstacles are categorized as: Obstacle to both chaining and ranging – e.g. building, hillock (they block line of sight &amp; also prevent chaining). Obstacle to chaining but not to ranging – e.g. river, because you can see across (ranging possible), but cannot directly measure with chain. Obstacle to ranging but not chaining – rare case when chaining possible but line of sight obstructed."
                },
                {
                    id: "cm6q006",
                    src: "BASI674-00058",
                    text: "The bench marks are fixed during the",
                    options: [
                        { key: "a", text: "Preliminary survey" },
                        { key: "b", text: "Decorations" },
                        { key: "c", text: "After detailed project report" },
                        { key: "d", text: "Detailed survey" }
                    ],
                    answer: "d",
                    explanation: "Bench marks are established during the detailed survey, once the alignment is fixed, so that every level taken during design and construction refers to the same datum. Reconnaissance and preliminary work only compare route options."
                },
                {
                    id: "cm6q007",
                    src: "BASI674-00059",
                    text: "Contour lines of different elevations can unite to form one line, only in the case of",
                    options: [
                        { key: "a", text: "a vertical cliff" },
                        { key: "b", text: "a saddle" },
                        { key: "c", text: "a water shed line" },
                        { key: "d", text: "a hill top" }
                    ],
                    answer: "a",
                    explanation: "Contours can only merge into a single line where the ground face is vertical, as at a cliff, since two elevations then occur at the same plan position. Contours that actually crossed would mean overhanging ground, which is shown by a dashed convention."
                },
                {
                    id: "cm6q008",
                    src: "BASI674-00060",
                    text: "The magnetic bearing of a line is 32° and the magnetic declination is 10° 15' W. The true bearing is",
                    options: [
                        { key: "a", text: "42° 15'" },
                        { key: "b", text: "21° 45'" },
                        { key: "c", text: "42° 15' W" },
                        { key: "d", text: "21° 45' W" }
                    ],
                    answer: "b",
                    explanation: "A westerly declination means magnetic north lies west of true north, so the true bearing is the magnetic bearing minus the declination. Here 32 degrees minus 10 degrees 15 minutes gives 21 degrees 45 minutes."
                },
                {
                    id: "cm6q009",
                    src: "BASI674-00061",
                    text: "For 1m³ volume of 1:1.5:3 PCC, how many bags of cement are required?",
                    options: [
                        { key: "a", text: "6 bags" },
                        { key: "b", text: "10 bags" },
                        { key: "c", text: "8 bags" },
                        { key: "d", text: "12 bags" }
                    ],
                    answer: "c",
                    explanation: "Nepal weighs 50 kg, which is equal to about 1.25 cubic feet or 0.0347 cubic meters. This applies to major local and national brands like Sarbottam Cement and Jagdamba Cement. \\(\\text{Dry Volume} = 1 \\text{ m}^3 \\times 1.54 = 1.54 \\text{ m}^3\\) \\(\\text{Required Volume of Cement} = \\frac{1}{5.5} \\times 1.54 = 0.28 \\text{ m}^3\\) \\(\\text{Weight of Cement} = 0.28 \\text{ m}^3 \\times 1440 \\text{ kg/m}^3 = 403.2 \\text{ kg}\\) \\(\\frac{403.2 \\text{ kg}}{50 \\text{ kg/bag}} = 8.064 \\text{ bags}\\)"
                },
                {
                    id: "cm6q010",
                    src: "BASI674-00062",
                    text: "Binding wire quantity in 1 quintal reinforcement",
                    options: [
                        { key: "a", text: "5kg" },
                        { key: "b", text: "2kg" },
                        { key: "c", text: "10kg" },
                        { key: "d", text: "1kg" }
                    ],
                    answer: "d",
                    explanation: "Binding wire is allowed at about 1 kg per quintal, that is roughly 1 percent of the weight of reinforcement. The exact figure depends on bar diameter and spacing, since more, smaller bars mean more intersections to tie."
                },
                {
                    id: "cm6q011",
                    src: "BASI674-00063",
                    text: "In long wall - short wall method, the length of the long wall is the sum of center line and",
                    options: [
                        { key: "a", text: "b" },
                        { key: "b", text: "b/2" },
                        { key: "c", text: "b/4" },
                        { key: "d", text: "2b" }
                    ],
                    answer: "a",
                    explanation: "For Long Wall Method: Centre to centre length between cross walls = L (This is measured at the centre lines of long walls) Outer length of long wall = L + b Difference between outer length and centre line length = (L + b) − L = b Therefore, Long wall outer length = centre line length + b So, Answer: b"
                },
                {
                    id: "cm6q012",
                    src: "BASI674-00064",
                    text: "Given the carpet area of a floor is 100m2 and the circulation area is 50% of the plinth area, and the rate per sq. m of plinth area is Rs. 40,000. What is the total estimate of the building?",
                    options: [
                        { key: "a", text: "8 lakhs" },
                        { key: "b", text: "80 lakhs" },
                        { key: "c", text: "120 lakhs" },
                        { key: "d", text: "12 lakhs" }
                    ],
                    answer: "b",
                    explanation: "\\(\\begin{aligned} \\text{Plinth Area (PA)} &= \\text{Carpet Area} + \\text{Circulation Area} \\\\ \\text{PA} &= 100 + 0.5 \\times \\text{PA} \\\\ \\text{PA} - 0.5 \\times \\text{PA} &= 100 \\\\ 0.5 \\times \\text{PA} &= 100 \\\\ \\text{PA} &= \\frac{100}{0.5} = 200 \\text{ m}^2 \\\\ \\text{Total Estimate} &= \\text{PA} \\times \\text{Rate} \\\\ \\text{Total Estimate} &= 200 \\times 40,000 \\\\ \\text{Total Estimate} &= \\text{Rs. } 8,000,000 \\end{aligned}\\)"
                },
                {
                    id: "cm6q013",
                    src: "BASI674-00065",
                    text: "The quantity of brickwork with mortar in foundation used per mason per day is",
                    options: [
                        { key: "a", text: "2.5 m³" },
                        { key: "b", text: "3.5 m³" },
                        { key: "c", text: "1.25 m³" },
                        { key: "d", text: "4.5 m³" }
                    ],
                    answer: "c",
                    explanation: "Standard output for brickwork in foundations and plinth is about 1.25 cubic metres per mason per day. Work in superstructure walls is slower per unit volume because of scaffolding, plumbing and the greater care needed on exposed faces."
                }
            ]
        },
        {
            id: "cm6stru",
            name: "Structural Mechanics",
            subject: "Structural Mech",
            accent: "cyan",
            blurb: "11 questions drawn from the Structural Mechanics bank.",
            questions: [
                {
                    id: "cm6q014",
                    src: "STRU935-00045",
                    text: "The simply supported beam 'A' of length I carries a central point load W. Another beam 'B' is loaded with a uniformly distributed load such that the total load on the beam is W. The ratio of maximum deflections between beams A and B is",
                    options: [
                        { key: "a", text: "5/8" },
                        { key: "b", text: "5/4" },
                        { key: "c", text: "4/5" },
                        { key: "d", text: "8/5" }
                    ],
                    answer: "d",
                    explanation: "$$\\delta_A = \\frac{WL^3}{48EI}$$ $$\\delta_B = \\frac{5WL^3}{384EI}$$ $$\\frac{\\delta_A}{\\delta_B} = \\frac{\\frac{WL^3}{48EI}}{\\frac{5WL^3}{384EI}}$$ $$\\frac{\\delta_A}{\\delta_B} = \\frac{8}{5} = 1.6$$"
                },
                {
                    id: "cm6q015",
                    src: "STRU935-00046",
                    text: "A cantilever beam 2m long is subjected to a point load of 2.4kN at its free end. The size of the beam is 40mm x 60mm. Find the stress during collapse of beam.",
                    options: [
                        { key: "a", text: "200 N/mm²" },
                        { key: "b", text: "180 N/mm²" },
                        { key: "c", text: "160 N/mm²" },
                        { key: "d", text: "220 N/mm²" }
                    ],
                    answer: "a",
                    explanation: "The moment at the fixed end is 2.4 times 2, that is 4.8 kNm, or 4.8 million N mm. The section modulus is bd squared over 6, that is 40 times 3600 over 6, which is 24,000 cubic millimetres, so the extreme fibre stress is 4.8 million over 24,000, or 200 N/mm²."
                },
                {
                    id: "cm6q016",
                    src: "STRU935-00047",
                    text: "If the width of a simply supported beam carrying an isolated load at its center is doubled, the deflection of the beam at the center is changed by",
                    options: [
                        { key: "a", text: "1/8" },
                        { key: "b", text: "1/2" },
                        { key: "c", text: "2" },
                        { key: "d", text: "8" }
                    ],
                    answer: "b",
                    explanation: "Deflection is inversely proportional to the second moment of area, and for a rectangle I is bd cubed over 12. Doubling the width doubles I, so the deflection is halved. Doubling the depth instead would divide it by eight. The key has been corrected accordingly."
                },
                {
                    id: "cm6q017",
                    src: "STRU935-00048",
                    text: "What will be the deflection of a cantilever beam subjected to a point load W at its free end?",
                    options: [
                        { key: "a", text: "(WL⁴) / 4EI" },
                        { key: "b", text: "(WL³) / 6EI" },
                        { key: "c", text: "(WL³) / 3EI" },
                        { key: "d", text: "(WL²) / 2EI" }
                    ],
                    answer: "c",
                    explanation: "A cantilever with a point load at its free end deflects by WL cubed over 3EI. That is sixteen times the mid-span deflection of a simply supported beam of the same span and load, which is why cantilevers are so deflection sensitive."
                },
                {
                    id: "cm6q018",
                    src: "STRU935-00049",
                    text: "The deflection at center of fixed beam with total load W applied uniformly over its length L is",
                    options: [
                        { key: "a", text: "(WL⁴) / 384EI" },
                        { key: "b", text: "(WL⁴) / 192EI" },
                        { key: "c", text: "(WL³) / 192EI" },
                        { key: "d", text: "(WL³) / 384EI" }
                    ],
                    answer: "d",
                    explanation: "For a beam fixed at both ends and carrying a total uniformly distributed load W, the central deflection is WL cubed over 384EI. That is one fifth of the 5WL cubed over 384EI of the simply supported case, showing how much the end fixity stiffens the beam. The key has been corrected to the dimensionally consistent form."
                },
                {
                    id: "cm6q019",
                    src: "STRU935-00050",
                    text: "Strain energy in a simply supported beam loaded with point load w at center is",
                    options: [
                        { key: "a", text: "(w²L³) / 96EI" },
                        { key: "b", text: "(w²L³) / 48EI" },
                        { key: "c", text: "(w²L²) / 48EI" }
                    ],
                    answer: "a",
                    explanation: "Strain energy equals the integral of M squared over 2EI along the beam. For a simply supported span with a central point load W the moment rises linearly to WL over 4, and integrating gives U equal to W squared L cubed over 96EI. The key has been corrected from the printed 48EI."
                },
                {
                    id: "cm6q020",
                    src: "STRU935-00051",
                    text: "One end of a column is kept free and other end fixed then ratio of Leff to L is",
                    options: [
                        { key: "a", text: "0.5" },
                        { key: "b", text: "2" },
                        { key: "c", text: "0.3333" },
                        { key: "d", text: "1" }
                    ],
                    answer: "b",
                    explanation: "A column fixed at one end and completely free at the other buckles like half of a pin-ended column of twice the length, so the effective length is 2L. That gives it the lowest critical load of all the standard end conditions."
                },
                {
                    id: "cm6q021",
                    src: "STRU935-00052",
                    text: "When a uniformly distributed load (UDL) of length greater than the length of the girder is moved from left to right, then the bending moment (BM) is maximum:",
                    options: [
                        { key: "a", text: "When the UDL is to the left of the midpoint of the beam." },
                        { key: "b", text: "When the UDL is at the middle of the beam." },
                        { key: "c", text: "When the UDL crosses the midpoint of the beam." },
                        { key: "d", text: "When the UDL covers the entire beam." }
                    ],
                    answer: "c",
                    explanation: "For a load longer than the span, the maximum bending moment at a section occurs when the load covers the whole span, and the largest of those values arises when the leading edge has passed mid-span so the influence line area is fully covered."
                },
                {
                    id: "cm6q022",
                    src: "STRU935-00053",
                    text: "ILD for shear force of cantilever beam is",
                    options: [
                        { key: "a", text: "triangle between free end and fixed end" },
                        { key: "b", text: "rectangle between free end and fixed end" },
                        { key: "c", text: "rectangle between free end and section" },
                        { key: "d", text: "triangle between free end and section" }
                    ],
                    answer: "d",
                    explanation: "The influence line for shear at a section of a cantilever is zero from the fixed end up to the section and constant beyond it, forming a rectangle between the section and the free end, because any load beyond the section transmits its full value across it."
                },
                {
                    id: "cm6q023",
                    src: "STRU935-00054",
                    text: "A train of wheel load is moving over a simply supported beam. The shear force will be maximum at support A (Left Side) )when <img src=\"https://pub-eec20113766447fca01a2e7734598007.r2.dev/questions/Structural Mechanics/Gemini-Generated-Image-17c7rs1-C1oDxuXDbU.png\" alt=\"Question figure\" loading=\"lazy\" style=\"max-width:100%;height:auto;border-radius:6px;margin:6px 0\">",
                    options: [
                        { key: "a", text: "Trailing load is at A" },
                        { key: "b", text: "Leading load is at A" },
                        { key: "c", text: "Load is at mid span" },
                        { key: "d", text: "Shear force will be equal in all cases" }
                    ],
                    answer: "a",
                    explanation: "For a simply supported beam (let's say Support A is on the left and Support B is on the right), the influence line for the shear force at Support A is a triangle.It is at its absolute maximum value (1.0) exactly at Support A.It linearly decreases to zero exactly at Support B."
                },
                {
                    id: "cm6q024",
                    src: "STRU935-00055",
                    text: "Influence line diagram for bending moment in a simply supported beam is a",
                    options: [
                        { key: "a", text: "Straight line" },
                        { key: "b", text: "Parabola" },
                        { key: "c", text: "Triangle" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "c",
                    explanation: "The influence line for bending moment at a section of a simply supported beam is a triangle, rising linearly from zero at each support to a peak of ab over L under the section, where a and b are the distances to the two supports."
                }
            ]
        },
        {
            id: "cm6desi",
            name: "Design of Structures",
            subject: "Design of Str",
            accent: "slate",
            blurb: "9 questions drawn from the Design of Structures bank.",
            questions: [
                {
                    id: "cm6q025",
                    src: "DESI787-00041",
                    text: "The minimum cube strength of concrete used for a pre-stressed member, is",
                    options: [
                        { key: "a", text: "50 kg/cm²" },
                        { key: "b", text: "150 kg/cm²" },
                        { key: "c", text: "250 kg/cm²" },
                        { key: "d", text: "450 kg/cm²" }
                    ],
                    answer: "c",
                    explanation: "Prestressed work needs high strength concrete, with a minimum cube strength of about 250 kg per square centimetre, that is roughly M25. The high prestress force is concentrated at the anchorages, and stronger concrete also creeps and shrinks less, reducing loss of prestress."
                },
                {
                    id: "cm6q026",
                    src: "DESI787-00042",
                    text: "If the diameter of a rebar is D = 20 mm, for U-bend, what is the value of anchorage length?",
                    options: [
                        { key: "a", text: "160 mm" },
                        { key: "b", text: "80 mm" },
                        { key: "c", text: "480 mm" },
                        { key: "d", text: "320 mm" }
                    ],
                    answer: "d",
                    explanation: "Anchorage length=16×D=16×20 mm=320 mm"
                },
                {
                    id: "cm6q027",
                    src: "DESI787-00043",
                    text: "Vertical formwork of column can be removed after",
                    options: [
                        { key: "a", text: "24 MT" },
                        { key: "b", text: "3 days" },
                        { key: "c", text: "7 days" },
                        { key: "d", text: "10 days" }
                    ],
                    answer: "a",
                    explanation: "Vertical formwork to columns and walls carries no load once the concrete can stand up on its own, so it may be struck after about 24 hours. Soffit forms to slabs and beams, which carry weight, must stay far longer and their props longer still."
                },
                {
                    id: "cm6q028",
                    src: "DESI787-00044",
                    text: "The strength of the column with helical reinforcement shall be ______ times the strength of a similar column with lateral ties.",
                    options: [
                        { key: "a", text: "2" },
                        { key: "b", text: "1.05" },
                        { key: "c", text: "3" },
                        { key: "d", text: "1.5" }
                    ],
                    answer: "b",
                    explanation: "A helically bound column is credited with 1.05 times the strength of an equivalent tied column, because the closely spaced spiral confines the core and lets it take more strain before failing. The bonus is allowed only if the spiral meets the code's volume requirement."
                },
                {
                    id: "cm6q029",
                    src: "DESI787-00045",
                    text: "Minimum % reinforcement required for footing for Fe415 grade steel.",
                    options: [
                        { key: "a", text: "0.17" },
                        { key: "b", text: "0.15" },
                        { key: "c", text: "0.12" },
                        { key: "d", text: "0.25" }
                    ],
                    answer: "c",
                    explanation: "For an isolated footing using Fe415 grade steel, the minimum reinforcement required is 0.12% of the gross cross-sectional area. This minimum steel must be distributed in both directions across the footing to control temperature and shrinkage cracks."
                },
                {
                    id: "cm6q030",
                    src: "DESI787-00046",
                    text: "Permissible stress in steel is taken as",
                    options: [
                        { key: "a", text: "Yield stress" },
                        { key: "b", text: "Ultimate stress" },
                        { key: "c", text: "Working stress" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "c",
                    explanation: "In working stress design the permissible stress is the yield stress divided by a factor of safety, and it is that reduced value, the working stress, which the design must not exceed. It keeps the steel comfortably inside its elastic range."
                },
                {
                    id: "cm6q031",
                    src: "DESI787-00047",
                    text: "The section in which the area of tensile steel is such that at the ultimate limit state, the ultimate compressive strain in concrete is reached, however the tensile strain in the reinforcing steel is less than the yield strain is known as?",
                    options: [
                        { key: "a", text: "Over reinforced section" },
                        { key: "b", text: "Ultra reinforced section" },
                        { key: "c", text: "Under reinforced section" },
                        { key: "d", text: "Balanced section" }
                    ],
                    answer: "a",
                    explanation: "If the concrete reaches its ultimate compressive strain while the steel is still below yield, the section is over-reinforced. The concrete crushes suddenly with little deflection or cracking beforehand, which is why codes require the steel to yield first."
                },
                {
                    id: "cm6q032",
                    src: "DESI787-00048",
                    text: "Spot welding is used when two plates are placed",
                    options: [
                        { key: "a", text: "One below the other" },
                        { key: "b", text: "One next to other" },
                        { key: "c", text: "At right angles to each other" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "a",
                    explanation: "Spot welding (RSW) is an electrical resistance welding process that joins overlapping metals between two electrodes. Pressure is applied by squeezing the workpieces between the electrodes, and heat is generated by the passage of welding current through the resistive metals. This allows the materials to fuse and create a welding joint. The joint created through resistance spot welding resembles a button or a nugget, thus, the term spot welding was coined as the current is applied precisely over a small area on the metal’s surface."
                },
                {
                    id: "cm6q033",
                    src: "DESI787-00049",
                    text: "Steel is preferred over other materials in reinforcement because ...",
                    options: [
                        { key: "a", text: "It is easily available" },
                        { key: "b", text: "It is cheapest and good in strength" },
                        { key: "c", text: "The coefficient of thermal expansion of steel and concrete is almost same" },
                        { key: "d", text: "It forms a good bond" }
                    ],
                    answer: "c",
                    explanation: "Steel and concrete have nearly the same coefficient of thermal expansion, about 12 and 10 millionths per degree, so temperature changes do not break the bond between them. Add steel's high tensile strength and good bond and it becomes the natural reinforcement."
                }
            ]
        },
        {
            id: "cm6soil",
            name: "Soil Mechanics and Foundation",
            subject: "Soil Mechanics",
            accent: "amber",
            blurb: "13 questions drawn from the Soil Mechanics and Foundation bank.",
            questions: [
                {
                    id: "cm6q034",
                    src: "SOIL136-00053",
                    text: "Bearing stress is 180kN/m³, unit weight = 20kN/m³, internal angle of friction = 30 degree then according to Rankine's theory what is the min depth of foundation?",
                    options: [
                        { key: "a", text: "0.8 m" },
                        { key: "b", text: "2 m" },
                        { key: "c", text: "0.5 m" },
                        { key: "d", text: "1 m" }
                    ],
                    answer: "d",
                    explanation: "Rankine's minimum depth is the bearing pressure divided by the unit weight, times the square of (1 minus sin phi) over (1 plus sin phi). Here that is 180 over 20, which is 9, times one third squared, giving 9 times one ninth, or 1 m."
                },
                {
                    id: "cm6q035",
                    src: "SOIL136-00054",
                    text: "Formula for area ratio is?",
                    options: [
                        { key: "a", text: "((D₂²-D₁²)/(D₁²)×100" },
                        { key: "b", text: "((D₁²-D₂²))/(D₁²)×100" },
                        { key: "c", text: "((D₂²-D₁²)/(D₂²)×100" },
                        { key: "d", text: "((D₁²-D₂²))/(D₂²)×100" }
                    ],
                    answer: "a",
                    explanation: "Area ratio compares the volume of soil displaced by the sampler with the volume of the sample, that is (D2 squared minus D1 squared) over D1 squared, as a percentage. Keeping it below about 10 percent limits the disturbance, which is why thin-walled tubes are used for undisturbed samples."
                },
                {
                    id: "cm6q036",
                    src: "SOIL136-00055",
                    text: "Based on the assumptions of Rankine's theory, the soil mass is ______",
                    options: [
                        { key: "a", text: "Stratified" },
                        { key: "b", text: "Homogeneous" },
                        { key: "c", text: "Submerged" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "b",
                    explanation: "Rankine's theory assumes the backfill is dry, cohesionless, homogeneous and semi-infinite, with a plane vertical wall face and no friction between soil and wall. Those assumptions are what make the closed-form pressure coefficients possible."
                },
                {
                    id: "cm6q037",
                    src: "SOIL136-00056",
                    text: "The depth of exploration is independent of",
                    options: [
                        { key: "a", text: "Size of structure" },
                        { key: "b", text: "Type of structure" },
                        { key: "c", text: "type of boring" },
                        { key: "d", text: "Load of structure" }
                    ],
                    answer: "c",
                    explanation: "The depth of exploration is governed by the depth of significant stress increase, which depends on the size, type and load of the structure. The method of boring is only the means of reaching that depth and does not decide it."
                },
                {
                    id: "cm6q038",
                    src: "SOIL136-00057",
                    text: "What is the relation of active earth pressure in cohesive soil?",
                    options: [
                        { key: "a", text: "Ka x σz + 2C√(Ka)" },
                        { key: "b", text: "Ka x σz - C√(Ka)" },
                        { key: "c", text: "Ka x σz - 2C√(Ka)" }
                    ],
                    answer: "c",
                    explanation: "For a cohesive soil the active pressure is Ka times the vertical stress, less 2c times the root of Ka. The cohesion term reduces the pressure and can make it negative near the surface, which is why cohesive backfills show a tension crack down to a finite depth."
                },
                {
                    id: "cm6q039",
                    src: "SOIL136-00058",
                    text: "Pick up the correct statement from the following.",
                    options: [
                        { key: "a", text: "Failure plane carries maximum shear stress" },
                        { key: "b", text: "Failure plane does not carry maximum shear stress" },
                        { key: "c", text: "Failure plane carries shear stress equal to maximum shear stress" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "b",
                    explanation: "The failure plane is not the plane of maximum shear stress. Failure occurs on the plane where the ratio of shear to normal stress first reaches the strength envelope, which lies at 45 degrees plus phi over 2 to the major principal plane rather than at 45 degrees."
                },
                {
                    id: "cm6q040",
                    src: "SOIL136-00059",
                    text: "Cullman Graph is used in",
                    options: [
                        { key: "a", text: "Column wedge theory" },
                        { key: "b", text: "Cullman theory" },
                        { key: "c", text: "Rankine theory" },
                        { key: "d", text: "All" }
                    ],
                    answer: "b",
                    explanation: "Culmann's graphical construction locates the critical failure wedge behind a retaining wall by plotting the weight of trial wedges against the corresponding earth pressure and finding the maximum. It handles irregular backfill surfaces and surcharges that Rankine's formulae cannot."
                },
                {
                    id: "cm6q041",
                    src: "SOIL136-00060",
                    text: "Calculate the active pressure intensity when the backfill has a unit weight of 18 KN/m², a wall height of 6 m, an angle of internal friction of 30°, and a surcharge of 36 KN/m².",
                    options: [
                        { key: "a", text: "45 KN/m²" },
                        { key: "b", text: "75 KN/m²" },
                        { key: "c", text: "48 KN/m²" },
                        { key: "d", text: "78 KN/m²" }
                    ],
                    answer: "c",
                    explanation: "\\(\\(K_{a}=\\frac{1-\\sin \\phi }{1+\\sin \\phi }=\\frac{1-\\sin (30^{\\circ })}{1+\\sin (30^{\\circ })}=\\frac{0.5}{1.5}=\\frac{1}{3}\\)\\) \\(p_a = K_a(\\gamma H + q) = \\frac{1}{3}(18 \\times 6 + 36) = \\frac{1}{3}(108 + 36) = 48\\,\\text{kN/m}^2\\)"
                },
                {
                    id: "cm6q042",
                    src: "SOIL136-00061",
                    text: "What is the formula for Active earth pressure coefficient?",
                    options: [
                        { key: "a", text: "(1+sinφ)/(1-sinφ)" },
                        { key: "b", text: "(1+sin²φ)/(1-sin²φ)" },
                        { key: "c", text: "(1-sin²φ)/(1+sin²φ)" },
                        { key: "d", text: "(1-sinφ)/(1+sinφ)" }
                    ],
                    answer: "d",
                    explanation: "The active earth pressure coefficient is (1 minus sin phi) over (1 plus sin phi), which is also tan squared of (45 minus phi over 2). Its reciprocal is the passive coefficient, so passive pressure is always the larger."
                },
                {
                    id: "cm6q043",
                    src: "SOIL136-00062",
                    text: "In infinite slope, FOS = 1.5, angle of internal friction = 36°, then find the safe angle.",
                    options: [
                        { key: "a", text: "26°" },
                        { key: "b", text: "30°" },
                        { key: "c", text: "16°" },
                        { key: "d", text: "20°" }
                    ],
                    answer: "a",
                    explanation: "For a dry infinite slope the factor of safety is tan phi over tan beta. Setting F to 1.5 gives tan beta equal to tan 36 over 1.5, that is 0.7265 over 1.5, or 0.484, so the safe slope angle is about 26 degrees."
                },
                {
                    id: "cm6q044",
                    src: "SOIL136-00063",
                    text: "When do strap footings are used in the foundation?",
                    options: [
                        { key: "a", text: "To transfer the load of an isolated column" },
                        { key: "b", text: "All of the mentioned" },
                        { key: "c", text: "Distance between the columns is long" },
                        { key: "d", text: "Two column loads are unequal" }
                    ],
                    answer: "b",
                    explanation: "A strap footing is used in all these situations: when an exterior column cannot be centred on its own footing, when the columns are too far apart for a combined footing to be economical, and when the two column loads differ."
                },
                {
                    id: "cm6q045",
                    src: "SOIL136-00064",
                    text: "Mat is a type of",
                    options: [
                        { key: "a", text: "Shallow foundation" },
                        { key: "b", text: "Deep foundation" },
                        { key: "c", text: "Both" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "a",
                    explanation: "A raft or mat is a shallow foundation, a single slab covering the whole plan area and spreading the load over it. It is chosen where individual footings would cover more than about half the area or where the soil is weak and settlement must be evened out."
                },
                {
                    id: "cm6q046",
                    src: "SOIL136-00065",
                    text: "Pile foundation is which of the following?",
                    options: [
                        { key: "a", text: "Shallow" },
                        { key: "b", text: "shallow and deep" },
                        { key: "c", text: "Open foundation" },
                        { key: "d", text: "Deep" }
                    ],
                    answer: "d",
                    explanation: "Piles are deep foundations: they carry load past weak surface strata to a firm bearing layer below, or transfer it to the surrounding soil by skin friction along the shaft. Shallow foundations rest at a depth roughly no greater than their width."
                }
            ]
        },
        {
            id: "cm6watr",
            name: "Basic Water Resources Engineering",
            subject: "Water Resources",
            accent: "emerald",
            blurb: "12 questions drawn from the Basic Water Resources Engineering bank.",
            questions: [
                {
                    id: "cm6q047",
                    src: "WATE701-00049",
                    text: "What is the ratio of the velocity at the axis of the pipe to the mean velocity of flow in case of pipe flow under viscous condition?",
                    options: [
                        { key: "a", text: "2" },
                        { key: "b", text: "0.5" },
                        { key: "c", text: "0.67" },
                        { key: "d", text: "1" }
                    ],
                    answer: "a",
                    explanation: "In fully developed laminar pipe flow the velocity profile is a paraboloid, so the centre-line velocity is exactly twice the mean. In turbulent flow the profile is far flatter and the ratio drops to about 1.2."
                },
                {
                    id: "cm6q048",
                    src: "WATE701-00050",
                    text: "What is the formula of sequent depth?",
                    options: [
                        { key: "a", text: "y₂/y₁ = 0.5 (√(8Fr²+1))+1" },
                        { key: "b", text: "y₂/y₁ = 0.5 (√(8Fr²+1))-1" },
                        { key: "c", text: "y₂/y₁ = √(8Fr²+1)-1" },
                        { key: "d", text: "y₂/y₁ = √(8Fr²+1)+1" }
                    ],
                    answer: "b",
                    explanation: "The sequent, or conjugate, depth ratio across a hydraulic jump is y2 over y1 equal to half of (the root of (1 plus 8 Fr squared) minus 1), obtained by applying momentum across the jump. It shows that a stronger supercritical flow needs a much greater downstream depth."
                },
                {
                    id: "cm6q049",
                    src: "WATE701-00051",
                    text: "Fr value for Steady jump",
                    options: [
                        { key: "a", text: "1.7-2.5" },
                        { key: "b", text: "2.5-4.5" },
                        { key: "c", text: "4.5-9" },
                        { key: "d", text: "&gt;9" }
                    ],
                    answer: "c",
                    explanation: "Undular Jump (Fr₁ = 1.0 to 1.7): Gentle surface waves appear with very little turbulence or energy loss. Weak Jump (Fr₁ = 1.7 to 2.5): Small rollers develop on the surface with minor energy dissipation. Oscillating Jump (Fr₁ = 2.5 to 4.5): An unstable jet oscillates back and forth, causing irregular wave action and potential erosion. Steady Jump (Fr₁ = 4.5 to 9.0): A well-balanced, stable jump occurs with highly efficient energy dissipation. Strong Jump (Fr₁ &gt; 9.0): Highly turbulent, rough, and choppy flow takes place, used mainly downstream of large structures to destroy massive amounts of kinetic energy verified."
                },
                {
                    id: "cm6q050",
                    src: "WATE701-00052",
                    text: "The sequent depth ratio of a hydraulic jump in a rectangular channel is 16.48. What is the Froude number (approximate) at the beginning of the jump?",
                    options: [
                        { key: "a", text: "5" },
                        { key: "b", text: "9" },
                        { key: "c", text: "8" },
                        { key: "d", text: "12" }
                    ],
                    answer: "d",
                    explanation: "Rearranging the sequent depth relation, 16.48 equals half of (the root of (1 plus 8 Fr squared) minus 1), so the root is 33.96 and 1 plus 8 Fr squared is about 1153. That gives Fr squared of 144, so the Froude number is 12, a strong jump."
                },
                {
                    id: "cm6q051",
                    src: "WATE701-00053",
                    text: "If Manning's n is doubled then slope should be changed to?",
                    options: [
                        { key: "a", text: "Quadruple" },
                        { key: "b", text: "Halved" },
                        { key: "c", text: "Doubled" },
                        { key: "d", text: "one-quarter" }
                    ],
                    answer: "a",
                    explanation: "Manning's equation makes the discharge proportional to the root of the slope divided by n. To keep the same discharge when n is doubled, the root of the slope must double, so the slope itself must be four times as steep."
                },
                {
                    id: "cm6q052",
                    src: "WATE701-00054",
                    text: "Condition for supercritical flow",
                    options: [
                        { key: "a", text: "Fr&lt;1" },
                        { key: "b", text: "Fr&gt;1" },
                        { key: "c", text: "Fr=1" },
                        { key: "d", text: "Fr&lt;0.67" }
                    ],
                    answer: "b",
                    explanation: "Flow is supercritical when the Froude number exceeds one, meaning the flow velocity is greater than the speed of a surface wave, so disturbances cannot travel upstream. Such flow is shallow, fast and controlled from upstream."
                },
                {
                    id: "cm6q053",
                    src: "WATE701-00055",
                    text: "In open channel flow, alternate depths are defined as the two depths of flow that have the same:",
                    options: [
                        { key: "a", text: "Specific force" },
                        { key: "b", text: "Froude number" },
                        { key: "c", text: "Specific energy" },
                        { key: "d", text: "Critical velocity" }
                    ],
                    answer: "c",
                    explanation: "Alternate depths occur when a single flow can have two different water depths but the exact same specific energy. For any given specific energy (above the minimum), the flow can exist in two states: Subcritical: Deep and slow flow. Supercritical: Shallow and fast flow."
                },
                {
                    id: "cm6q054",
                    src: "WATE701-00056",
                    text: "The area of a channel section is 8m² and the wetted perimeter is 8m. Calculate the value of the bed slope of the channel if the discharge is 33.33m³/s and manning's co efficient is 0.012",
                    options: [
                        { key: "a", text: "1 in 300" },
                        { key: "b", text: "1 in 500" },
                        { key: "c", text: "1 in 600" },
                        { key: "d", text: "1 in 400" }
                    ],
                    answer: "d",
                    explanation: "Calculate the Hydraulic Radius (R): $$R = \\frac{8\\text{ m}^2}{8\\text{ m}} = 1\\text{ m}$$ Substitute values into Manning's Formula: $$33.33 = \\frac{1}{0.012} \\times 8 \\times (1)^{2/3} \\times S^{1/2}$$ $$S^{1/2} \\approx 0.05 = 1 \\text{ in } 400$$"
                },
                {
                    id: "cm6q055",
                    src: "WATE701-00057",
                    text: "In defining the Froude number which depth parameter is used",
                    options: [
                        { key: "a", text: "Hydraulic mean depth" },
                        { key: "b", text: "Hydraulic radius" },
                        { key: "c", text: "critical depth" },
                        { key: "d", text: "depth" }
                    ],
                    answer: "a",
                    explanation: "The Froude number uses the hydraulic mean depth, the flow area divided by the top width, because that is the depth which governs the celerity of a surface wave. For a wide rectangular channel it is simply the flow depth."
                },
                {
                    id: "cm6q056",
                    src: "WATE701-00058",
                    text: "If y₁=1m and y₂=5m in hydraulic jump, find out energy loss?",
                    options: [
                        { key: "a", text: "0.8m" },
                        { key: "b", text: "3.2m" },
                        { key: "c", text: "1.6m" },
                        { key: "d", text: "2.4m" }
                    ],
                    answer: "b",
                    explanation: "\\(E_L = \\frac{(y_2 - y_1)^3}{4 y_1 y_2}\\) \\(E_L = \\frac{64}{20} = 3.2\\text{ m}\\)"
                },
                {
                    id: "cm6q057",
                    src: "WATE701-00059",
                    text: "The portion between two successive flow lines is known as ______",
                    options: [
                        { key: "a", text: "Field channel" },
                        { key: "b", text: "Open channel" },
                        { key: "c", text: "Flow channel" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "c",
                    explanation: "The strip between two adjacent flow lines is a flow channel, and in a properly drawn flow net every channel carries the same discharge. The number of such channels is the Nf that appears in the seepage formula."
                },
                {
                    id: "cm6q058",
                    src: "WATE701-00060",
                    text: "______ measures velocity at a point of fluid in a stream.",
                    options: [
                        { key: "a", text: "Venturi meter" },
                        { key: "b", text: "pH meter" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "Pitot-Static tubes" }
                    ],
                    answer: "d",
                    explanation: "A pitot-static tube measures the velocity at a point by comparing the stagnation pressure at its nose with the static pressure at side holes; the difference is the velocity head. A venturimeter measures total discharge instead."
                }
            ]
        },
        {
            id: "cm6hydr",
            name: "Hydropower",
            subject: "Hydropower",
            accent: "cyan",
            blurb: "10 questions drawn from the Hydropower bank.",
            questions: [
                {
                    id: "cm6q059",
                    src: "HYDR626-00037",
                    text: "What is the minimum submergence that should be provided for a fore bay of Q = 3.6m3/s, D = 1.55m?",
                    options: [
                        { key: "a", text: "1.18" },
                        { key: "b", text: "0.3" },
                        { key: "c", text: "2.3" },
                        { key: "d", text: "3.3" }
                    ],
                    answer: "a",
                    explanation: "\\((h_s) = 1.5 \\cdot V_p^2 / 2g\\) \\(or\\\\ h_s = 0.5 \\cdot V_p \\cdot \\sqrt{D}\\) take, whichever is greater."
                },
                {
                    id: "cm6q060",
                    src: "HYDR626-00038",
                    text: "Which element of hydroelectric power plant prevents the penstock from water hammer phenomenon?",
                    options: [
                        { key: "a", text: "Valves and Gates" },
                        { key: "b", text: "Surge tank" },
                        { key: "c", text: "Draft tubes" },
                        { key: "d", text: "Spillway" }
                    ],
                    answer: "b",
                    explanation: "The surge tank is an open chamber on the conduit close to the powerhouse. When the turbine gates close suddenly the water rises into it instead of slamming against the closed valve, so the pressure rise in the penstock is limited."
                },
                {
                    id: "cm6q061",
                    src: "HYDR626-00039",
                    text: "What is the function of a surge tank function?",
                    options: [
                        { key: "a", text: "To control velocity" },
                        { key: "b", text: "To store water" },
                        { key: "c", text: "To reduce the effects of pressure" },
                        { key: "d", text: "To reduce pipe diameter" }
                    ],
                    answer: "c",
                    explanation: "A surge tank relieves the pressure rise from water hammer on gate closure and supplies the extra water needed on sudden opening, so the flow in the tunnel can adjust gradually. It effectively shortens the length of conduit subject to water hammer."
                },
                {
                    id: "cm6q062",
                    src: "HYDR626-00040",
                    text: "Which is used to protect turbine and runner from damage",
                    options: [
                        { key: "a", text: "Fuel tank" },
                        { key: "b", text: "Power house" },
                        { key: "c", text: "penstock" },
                        { key: "d", text: "Surge tank" }
                    ],
                    answer: "d",
                    explanation: "By absorbing the pressure wave from a sudden change in load, the surge tank protects both the penstock and the turbine and runner from the shock that water hammer would otherwise deliver."
                },
                {
                    id: "cm6q063",
                    src: "HYDR626-00041",
                    text: "The function of a surge tank is to",
                    options: [
                        { key: "a", text: "Supply water at constant pressure" },
                        { key: "b", text: "Relive water hammer pressures in the penstock pipe" },
                        { key: "c", text: "Produce surge in the pipeline" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "b",
                    explanation: "The primary function of a surge tank is to relieve water hammer pressure in the penstock by giving the decelerating water somewhere to go. Its free surface converts the pressure surge into a mass oscillation that damps out."
                },
                {
                    id: "cm6q064",
                    src: "HYDR626-00042",
                    text: "Morning glory is the ______",
                    options: [
                        { key: "a", text: "special flared inlet of the shaft spillway of a dam of very small height" },
                        { key: "b", text: "special flared inlet of the shaft spillway of a large dam project" },
                        { key: "c", text: "a horizontal tunnel constructed in a shaft spillway across the body of a gravity dam to carry surplus reservoir water to the d/s river." },
                        { key: "d", text: "a horizontal tunnel constructed in a shaft spillway of an earthen dam through its foundation to carry surplus reservoir water to the d/s river." }
                    ],
                    answer: "b",
                    explanation: "A morning glory, or bell-mouth, spillway is the flared circular inlet of a vertical shaft spillway, used at large dams where there is no room for a conventional overflow. Water enters radially over the whole circumference and drops down the shaft to a horizontal tunnel."
                },
                {
                    id: "cm6q065",
                    src: "HYDR626-00043",
                    text: "Pick up the correct statement from the following during tunnel excavation",
                    options: [
                        { key: "a", text: "Oxygen should not be less than 19.5%" },
                        { key: "b", text: "Hydrogen sulphide should not be more than 0.001%" },
                        { key: "c", text: "Carbon dioxide should not be more than 0.5%" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "Tunnel ventilation standards cover all of these limits together: oxygen not below 19.5 percent, hydrogen sulphide not above 0.001 percent and carbon dioxide not above 0.5 percent, so that the air stays fit to breathe as blasting fumes and machinery exhaust accumulate."
                },
                {
                    id: "cm6q066",
                    src: "HYDR626-00044",
                    text: "What is the function of a surge tank?",
                    options: [
                        { key: "a", text: "It causes water hammer" },
                        { key: "b", text: "Produces surge in the pipeline" },
                        { key: "c", text: "Supplies water at constant pressure" },
                        { key: "d", text: "Relieves water hammer" }
                    ],
                    answer: "d",
                    explanation: "The surge tank relieves water hammer. Without it the pressure wave from a sudden gate closure would travel the full length of the conduit and could burst the penstock."
                },
                {
                    id: "cm6q067",
                    src: "HYDR626-00045",
                    text: "Which one of the following methods of tunneling is used in hard rocks?",
                    options: [
                        { key: "a", text: "Heading and Benching method" },
                        { key: "b", text: "Fore poling method" },
                        { key: "c", text: "Needle beam method" },
                        { key: "d", text: "Shield tunneling method" }
                    ],
                    answer: "a",
                    explanation: "In hard, self-supporting rock the heading and benching method is used: a top heading is driven and the remaining bench is removed afterwards, which gives good working faces and lets drilling and mucking proceed together. Fore poling, needle beams and shields are for soft ground."
                },
                {
                    id: "cm6q068",
                    src: "HYDR626-00046",
                    text: "Which of the following drainage is not used in tunnel?",
                    options: [
                        { key: "a", text: "Central drainage" },
                        { key: "b", text: "Open ditch drainage" },
                        { key: "c", text: "Permanent drainage" },
                        { key: "d", text: "Side drainage" }
                    ],
                    answer: "b",
                    explanation: "Tunnels are drained by a central drain under the invert, by side drains along the springing, and by the permanent drainage system that handles seepage for the life of the tunnel. An open ditch is a surface road feature and has no place inside a tunnel."
                }
            ]
        },
        {
            id: "cm6irri",
            name: "Irrigation and Drainage",
            subject: "Irrigation",
            accent: "emerald",
            blurb: "11 questions drawn from the Irrigation and Drainage bank.",
            questions: [
                {
                    id: "cm6q069",
                    src: "IRRI951-00046",
                    text: "In a wide rectangular channel, the normal depth is increased by 20%. The discharge in the channel would increase by",
                    options: [
                        { key: "a", text: "0.2" },
                        { key: "b", text: "0.26" },
                        { key: "c", text: "0.36" },
                        { key: "d", text: "0.56" }
                    ],
                    answer: "c",
                    explanation: "In a wide rectangular channel Manning's equation makes the discharge proportional to the depth to the power five thirds. Raising the depth by 20 percent multiplies the discharge by 1.2 to that power, which is about 1.36, an increase of roughly 36 percent."
                },
                {
                    id: "cm6q070",
                    src: "IRRI951-00047",
                    text: "Which type of weir is of recent origin?",
                    options: [
                        { key: "a", text: "Vertical Drop Weir" },
                        { key: "b", text: "Parabolic Weir" },
                        { key: "c", text: "Barrage" },
                        { key: "d", text: "Masonry or Concrete Sloping Weir" }
                    ],
                    answer: "d",
                    explanation: "The concrete weir with sloping glacis is considered to be of recent origin. Developed based on modern sub-surface flow theories (such as Khosla's theory), these weirs feature a hydraulic jump to dissipate energy, sloping concrete faces, and deep cutoff piles to manage uplift pressure."
                },
                {
                    id: "cm6q071",
                    src: "IRRI951-00048",
                    text: "What is the main function of Weir &amp; barrage?",
                    options: [
                        { key: "a", text: "To increase Water height" },
                        { key: "b", text: "To protect bank" },
                        { key: "c", text: "To control rainfall" },
                        { key: "d", text: "none" }
                    ],
                    answer: "a",
                    explanation: "A weir or barrage raises the water level upstream so that water can be diverted by gravity into the canal head regulator. Neither stores water in any significant quantity; the ponding is only enough to command the offtake."
                },
                {
                    id: "cm6q072",
                    src: "IRRI951-00049",
                    text: "According to Bilgh’s creep theory, percolating water flows along",
                    options: [
                        { key: "a", text: "straight path under the foundation of the dam" },
                        { key: "b", text: "circular path under the foundation of the dam" },
                        { key: "c", text: "the outline of the base of the foundation of the dam" },
                        { key: "d", text: "none of these" }
                    ],
                    answer: "c",
                    explanation: "Bligh assumed that percolating water creeps along the contact surface of the base profile of the structure, following its outline down and up every cut-off and along every horizontal floor, losing head uniformly as it goes."
                },
                {
                    id: "cm6q073",
                    src: "IRRI951-00050",
                    text: "What is the major differentiating point between weirs and barrages?",
                    options: [
                        { key: "a", text: "size of the structure" },
                        { key: "b", text: "size of the water channel" },
                        { key: "c", text: "presence of gates" },
                        { key: "d", text: "their usage/purpose" }
                    ],
                    answer: "c",
                    explanation: "A barrage carries gates across its full width, so the upstream level can be controlled and floods passed with the gates raised. A weir is largely an ungated raised crest, cheaper to build but with far less control and greater afflux in floods."
                },
                {
                    id: "cm6q074",
                    src: "IRRI951-00051",
                    text: "Which method is evolved by khosla for designing of hydraulic structures?",
                    options: [
                        { key: "a", text: "Method of Gradients" },
                        { key: "b", text: "Method of Flow Nets" },
                        { key: "c", text: "none" },
                        { key: "d", text: "Method of Independent Variables" }
                    ],
                    answer: "d",
                    explanation: "Khosla's method of independent variables analyses the floor as a set of simple standard forms, each solved exactly, and then applies corrections for floor thickness, mutual interference of piles and the slope of the floor. It replaced Bligh's cruder creep theory."
                },
                {
                    id: "cm6q075",
                    src: "IRRI951-00052",
                    text: "A quantum of discharge with high enough magnitude and frequency to bring about changes to the river boundary and surrounding area is….",
                    options: [
                        { key: "a", text: "Dominant discharge" },
                        { key: "b", text: "Maximum flood discharge" },
                        { key: "c", text: "Design discharge" },
                        { key: "d", text: "Median discharge" }
                    ],
                    answer: "a",
                    explanation: "The dominant or channel-forming discharge is the flow that, over time, does most of the work in shaping the channel. It is not the rare peak flood but a moderate flow of high enough magnitude and frequency for the product of the two to be greatest."
                },
                {
                    id: "cm6q076",
                    src: "IRRI951-00053",
                    text: "Which of the following structures is constructed to separate under sluices from the main weir?",
                    options: [
                        { key: "a", text: "Marginal bund" },
                        { key: "b", text: "Divide wall." },
                        { key: "c", text: "Head regulator" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "b",
                    explanation: "A divide wall runs upstream to downstream between the under-sluice bays and the rest of the weir. It keeps the still pocket in front of the canal head regulator separate from the main weir flow, helping silt settle and preventing cross currents."
                },
                {
                    id: "cm6q077",
                    src: "IRRI951-00054",
                    text: "The weir constructed such that the weight of structure is completely balanced by upward seepage force of water is",
                    options: [
                        { key: "a", text: "Gravity weir" },
                        { key: "b", text: "Non-gravity weir" },
                        { key: "c", text: "Glacis weir" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "a",
                    explanation: "The weir constructed such that the weight of the structure is completely balanced by the upward seepage force of water is called a gravity weir. In this type of structure, the sheer mass and self-weight of the floor and body rely entirely on gravity to counteract and resist the uplift pressure caused by water seeping underneath."
                },
                {
                    id: "cm6q078",
                    src: "IRRI951-00055",
                    text: "Which material has the lowest safe exit gradient using Khosla’s theory?",
                    options: [
                        { key: "a", text: "coarse sand" },
                        { key: "b", text: "shingle" },
                        { key: "c", text: "boulders" },
                        { key: "d", text: "fine sand" }
                    ],
                    answer: "d",
                    explanation: "Fine sand has the lowest permissible exit gradient, around 1 in 6 to 1 in 7, because its light grains are lifted most easily by upward seepage. Coarse sand, shingle and boulders are progressively heavier and can tolerate steeper gradients."
                },
                {
                    id: "cm6q079",
                    src: "IRRI951-00056",
                    text: "Bligh’s theory of seepage assumes",
                    options: [
                        { key: "a", text: "equal weightage to the horizontal and vertical creep" },
                        { key: "b", text: "more weightage to horizontal creep than vertical creep" },
                        { key: "c", text: "less weightage to horizontal creep than vertical creep" },
                        { key: "d", text: "loss of head follows the sine curve" }
                    ],
                    answer: "a",
                    explanation: "Bligh's creep theory treats horizontal and vertical creep as equally effective, so the total creep length is simply the sum of all the horizontal and vertical paths. Lane later recognised that vertical creep is far more effective and weighted horizontal creep by one third."
                }
            ]
        },
        {
            id: "cm6tran",
            name: "Transportation",
            subject: "Transportation",
            accent: "rose",
            blurb: "11 questions drawn from the Transportation bank.",
            questions: [
                {
                    id: "cm6q080",
                    src: "TRAN808-00045",
                    text: "Which percentile value of CBR is used for design of road with more than 20Million ESAL as recommended by DOR.",
                    options: [
                        { key: "a", text: "0.875" },
                        { key: "b", text: "0.9" },
                        { key: "c", text: "0.85" },
                        { key: "d", text: "0.75" }
                    ],
                    answer: "b",
                    explanation: "For heavy traffic above 20 million standard axles the design CBR is taken at the 90th percentile of the test results, so that the subgrade is weaker than the design value at only one tenth of the sections. Lighter roads are designed on lower percentiles."
                },
                {
                    id: "cm6q081",
                    src: "TRAN808-00046",
                    text: "What is the impact value of aggregate if total wt. = 300gm &amp; wt. retained on 2.36mm sieve = 180gm?",
                    options: [
                        { key: "a", text: "0.35" },
                        { key: "b", text: "0.45" },
                        { key: "c", text: "0.4" },
                        { key: "d", text: "0.3" }
                    ],
                    answer: "c",
                    explanation: "The aggregate impact value is the percentage of material finer than 2.36 mm after the standard blows. Here 180 g of 300 g was retained, so 120 g passed, and 120 over 300 gives an impact value of 40 percent."
                },
                {
                    id: "cm6q082",
                    src: "TRAN808-00047",
                    text: "The maximum moisture content on Bitumen is",
                    options: [
                        { key: "a", text: "0.1%" },
                        { key: "b", text: "1%" },
                        { key: "c", text: "2%" },
                        { key: "d", text: "0.2%" }
                    ],
                    answer: "d",
                    explanation: "Bitumen is supplied with a moisture content not exceeding about 0.2 percent by weight. Any more and the water flashes into steam when the binder is heated for mixing, causing dangerous foaming in the boiler."
                },
                {
                    id: "cm6q083",
                    src: "TRAN808-00048",
                    text: "The design factor not considered in CBR is ______",
                    options: [
                        { key: "a", text: "Weather" },
                        { key: "b", text: "Traffic" },
                        { key: "c", text: "VDF" },
                        { key: "d", text: "Growth rate" }
                    ],
                    answer: "a",
                    explanation: "The CBR method sizes the pavement from the subgrade strength and the traffic, expressed through the number of commercial vehicles, the vehicle damage factor and the growth rate. Weather enters only indirectly, through the soaked condition in which the CBR is measured."
                },
                {
                    id: "cm6q084",
                    src: "TRAN808-00049",
                    text: "Which is the organic binding material used in road pavement?",
                    options: [
                        { key: "a", text: "Stone dust" },
                        { key: "b", text: "bitumen" },
                        { key: "c", text: "cement" },
                        { key: "d", text: "lime" }
                    ],
                    answer: "b",
                    explanation: "Bitumen is an organic binder, a residue of petroleum refining made up of hydrocarbons. Cement and lime are inorganic hydraulic binders and stone dust is only a filler."
                },
                {
                    id: "cm6q085",
                    src: "TRAN808-00050",
                    text: "Bitumen content is determined by which test.",
                    options: [
                        { key: "a", text: "Penetration test" },
                        { key: "b", text: "Vee-bee test" },
                        { key: "c", text: "Marshall test" },
                        { key: "d", text: "Ductility test" }
                    ],
                    answer: "c",
                    explanation: "The Marshall method fixes the binder content: specimens are made at several bitumen contents and the optimum is chosen from the stability, flow, density and voids curves. The penetration and ductility tests grade the bitumen itself, not the mix."
                },
                {
                    id: "cm6q086",
                    src: "TRAN808-00051",
                    text: "Which test is used to measure weathering of aggregate?",
                    options: [
                        { key: "a", text: "Impact test" },
                        { key: "b", text: "Crushing test" },
                        { key: "c", text: "Solubility test" },
                        { key: "d", text: "Soundness test" }
                    ],
                    answer: "d",
                    explanation: "The soundness test measures weathering resistance by soaking the aggregate in sodium or magnesium sulphate solution and drying it repeatedly. The salt crystallising in the pores mimics the disruptive pressure of freezing, and the loss in weight is reported."
                },
                {
                    id: "cm6q087",
                    src: "TRAN808-00052",
                    text: "What is the effect of using traffic signals?",
                    options: [
                        { key: "a", text: "reduce right turn conflict as well as rear end collision" },
                        { key: "b", text: "reduce right turn but may increase rear end" },
                        { key: "c", text: "increases both" },
                        { key: "d", text: "none of the above" }
                    ],
                    answer: "b",
                    explanation: "Signals separate the conflicting movements in time, so right-turn and crossing conflicts largely disappear. The stop-and-go operation, however, introduces a new hazard, and rear-end collisions typically rise even as the more serious angle collisions fall."
                },
                {
                    id: "cm6q088",
                    src: "TRAN808-00053",
                    text: "Longitudinal ridging due to the channelization of traffic is called as ______",
                    options: [
                        { key: "a", text: "Growing" },
                        { key: "b", text: "Shoving" },
                        { key: "c", text: "Ridging" },
                        { key: "d", text: "Skidding" }
                    ],
                    answer: "b",
                    explanation: "Shoving is the longitudinal displacement of a bituminous surface into ridges and corrugations where traffic channels along the same path and brakes or accelerates. It comes from an unstable mix, too much binder or a weak bond with the layer below."
                },
                {
                    id: "cm6q089",
                    src: "TRAN808-00054",
                    text: "In which of the following, minimum value is taken?",
                    options: [
                        { key: "a", text: "Forward pass" },
                        { key: "b", text: "Backward pass" },
                        { key: "c", text: "Both" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "a",
                    explanation: "The backward pass through a network takes the minimum, because the latest allowable time for an event is the smallest of the values obtained by subtracting each following activity's duration. The forward pass takes the maximum to find the earliest times."
                },
                {
                    id: "cm6q090",
                    src: "TRAN808-00055",
                    text: "For the movement of vehicles at an intersection of two roads, without any interference, the type of grade separator generally preferred to, is",
                    options: [
                        { key: "a", text: "delta" },
                        { key: "b", text: "trumpet" },
                        { key: "c", text: "diamond interchange" },
                        { key: "d", text: "clover leaf" }
                    ],
                    answer: "d",
                    explanation: "A clover leaf interchange lets all four movements at a crossing of two roads proceed without any stream cutting across another, using loops for the left turns. Trumpet and delta layouts suit T junctions, and a diamond still has at-grade turning conflicts on the minor road."
                }
            ]
        },
        {
            id: "cm6wate",
            name: "Water Supply, Sanitation and Environment",
            subject: "Water Supply",
            accent: "blue",
            blurb: "10 questions drawn from the Water Supply, Sanitation and Environment bank.",
            questions: [
                {
                    id: "cm6q091",
                    src: "WATE813-00041",
                    text: "Use of chlorine in water does not reduce",
                    options: [
                        { key: "a", text: "Dissolved oxygen" },
                        { key: "b", text: "Ammonia" },
                        { key: "c", text: "Organic matter" },
                        { key: "d", text: "Iron" }
                    ],
                    answer: "a",
                    explanation: "Chlorine oxidises ammonia, organic matter and dissolved iron and manganese, and in doing so it is itself consumed. It does not remove dissolved oxygen; if anything the aeration involved in dosing tends to raise it."
                },
                {
                    id: "cm6q092",
                    src: "WATE813-00042",
                    text: "Thickness of filter media of slow sand filter is",
                    options: [
                        { key: "a", text: "80 to 90 cm" },
                        { key: "b", text: "90 to 110 cm" },
                        { key: "c", text: "70 to 80 cm" },
                        { key: "d", text: "60 to 80 cm" }
                    ],
                    answer: "b",
                    explanation: "A slow sand filter carries about 90 to 110 cm of fine sand over its gravel support. The depth matters because purification depends on the biological layer, the schmutzdecke, at the top and on the long path through the fine sand below."
                },
                {
                    id: "cm6q093",
                    src: "WATE813-00043",
                    text: "What is the opening spacing of bars in case of coarse screen?",
                    options: [
                        { key: "a", text: "30mm" },
                        { key: "b", text: "70mm" },
                        { key: "c", text: "50mm" },
                        { key: "d", text: "90mm" }
                    ],
                    answer: "c",
                    explanation: "Coarse screens, also called bar racks, have bars spaced at roughly 50 mm to catch rags, sticks and other large floating matter. Fine screens with much closer spacing follow, so that the coarse material does not blind them."
                },
                {
                    id: "cm6q094",
                    src: "WATE813-00044",
                    text: "What is the rate of filtration of a rapid sand filter?",
                    options: [
                        { key: "a", text: "100 - 200 l/hr/m²" },
                        { key: "b", text: "2000 - 4000 l/hr/m²" },
                        { key: "c", text: "5000 - 10000 l/hr/m²" },
                        { key: "d", text: "3000 - 6000 l/hr/m²" }
                    ],
                    answer: "d",
                    explanation: "Rapid sand filters run at about 3000 to 6000 litres per hour per square metre, some thirty times the rate of a slow sand filter. They rely on coagulation beforehand and on regular backwashing rather than on a biological layer."
                },
                {
                    id: "cm6q095",
                    src: "WATE813-00045",
                    text: "Zeolite used in zeolite softening process for the treatment of hard water gets exhausted after certain time of usage but can be regenerated by flushing it with",
                    options: [
                        { key: "a", text: "10% sodium chloride solution" },
                        { key: "b", text: "10% calcium chloride solution" },
                        { key: "c", text: "10% magnesium sulfate solution" },
                        { key: "d", text: "10% magnesium chloride solution" }
                    ],
                    answer: "a",
                    explanation: "Regeneration reverses the ion exchange: flushing the exhausted bed with a 10 percent common salt solution replaces the calcium and magnesium held on the zeolite with sodium, and the hardness runs to waste as chlorides."
                },
                {
                    id: "cm6q096",
                    src: "WATE813-00046",
                    text: "At what velocity will the particles settle down?",
                    options: [
                        { key: "a", text: "0.5 m/s" },
                        { key: "b", text: "0.3 m/s" },
                        { key: "c", text: "0.1 m/s" },
                        { key: "d", text: "0.25 m/s" }
                    ],
                    answer: "b",
                    explanation: "Particles settle when the upward drag from the flow is less than their settling velocity, so the horizontal velocity through a settling basin has to be kept low, of the order of a few tenths of a metre per second, and well below the scour velocity that would resuspend what has already deposited."
                },
                {
                    id: "cm6q097",
                    src: "WATE813-00047",
                    text: "If a circular sewer is partially full &amp; depth is increased, then?",
                    options: [
                        { key: "a", text: "Wetted perimeter increases" },
                        { key: "b", text: "Velocity increases" },
                        { key: "c", text: "Discharge increases" },
                        { key: "d", text: "Velocity decreases" }
                    ],
                    answer: "c",
                    explanation: "In a partly full circular sewer the flow area grows faster than the wetted perimeter until the depth is well past half full, so the discharge keeps increasing with depth. Discharge in fact peaks at about 95 percent of full depth, slightly above the full-bore value."
                },
                {
                    id: "cm6q098",
                    src: "WATE813-00048",
                    text: "Inverted siphon is provided when",
                    options: [
                        { key: "a", text: "Two sewers meet" },
                        { key: "b", text: "Two roads meet" },
                        { key: "c", text: "To empty out a sump" },
                        { key: "d", text: "A sewer crosses a river" }
                    ],
                    answer: "d",
                    explanation: "An inverted siphon carries a sewer beneath an obstruction such as a river, road or another pipe, dipping below the hydraulic grade line and running full under pressure. Because it cannot be self-cleansing at low flow, it is usually built as several parallel barrels."
                },
                {
                    id: "cm6q099",
                    src: "WATE813-00049",
                    text: "Why is air gap left at the top of sewers?",
                    options: [
                        { key: "a", text: "To meet the fluctuation of sewage inflow" },
                        { key: "b", text: "To maintain open channel flow condition" },
                        { key: "c", text: "All of the above" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "c",
                    explanation: "The free space above the sewage serves every purpose listed: it accommodates surges in inflow, keeps the flow as open channel rather than pressurised, and lets sewer gases ventilate away instead of building up."
                },
                {
                    id: "cm6q100",
                    src: "WATE813-00050",
                    text: "What is the detention time for septic tank?",
                    options: [
                        { key: "a", text: "Less than 12 hours" },
                        { key: "b", text: "24 hours" },
                        { key: "c", text: "12 hours" },
                        { key: "d", text: "48 hours" }
                    ],
                    answer: "b",
                    explanation: "A septic tank is designed for about 24 hours of detention at the daily flow, long enough for the solids to settle and start digesting while the clarified liquid passes on to the soak pit or drain field."
                }
            ]
        }
    ]
};

/* Registered lazily — js/civil.js injects this file when the set is opened. */
window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["civil-6"] = CIVIL_MODEL_6;
