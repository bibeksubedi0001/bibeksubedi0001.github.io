/* ============================================================
   CIVIL MODEL SET 5 — Civil Engineering licence-style model paper
   100 questions · 120 minutes · no negative marking

     Basic Civil Engineering...................  13
     Structural Mechanics......................  11
     Design of Structures......................  10
     Soil Mechanics and Foundation.............  13
     Basic Water Resources Engineering.........  12
     Hydropower................................   9
     Irrigation and Drainage...................  11
     Transportation............................  11
     Water Supply, Sanitation and Environment..  10

   Generated from the civil engineering question bank; every bank
   question is used in exactly one set. Identical duplicate options
   were collapsed, and the key was rotated across a/b/c/d except on
   questions whose options refer to other options.
   The "src" field on each question is its id in the source bank.
   ============================================================ */
const CIVIL_MODEL_5 = {
    day: 35,
    kind: "model",
    badge: { top: "Model", main: "C5" },
    title: "Civil Model Set 5",
    subtitle: "Civil Engineering · 9 subjects",
    durationMinutes: 120,
    negativeMarking: 0,
    chapters: [
        {
            id: "cm5basi",
            name: "Basic Civil Engineering",
            subject: "Basic Civil",
            accent: "blue",
            blurb: "13 questions drawn from the Basic Civil Engineering bank.",
            questions: [
                {
                    id: "cm5q001",
                    src: "BASI674-00040",
                    text: "Moment of inertia of rectangle about CG with axis parallel to X-axis is",
                    options: [
                        { key: "a", text: "(db³)/12" },
                        { key: "b", text: "(bd³)/12" },
                        { key: "c", text: "(bd³)/3" },
                        { key: "d", text: "(db³)/3" }
                    ],
                    answer: "b",
                    explanation: "About a centroidal axis parallel to the x-axis the depth d is the dimension being cubed, giving I equal to bd cubed over 12. Turning the section through 90 degrees swaps the roles, so bending about the other axis uses db cubed over 12."
                },
                {
                    id: "cm5q002",
                    src: "BASI674-00041",
                    text: "Center of gravity of hemisphere is",
                    options: [
                        { key: "a", text: "4r/3" },
                        { key: "b", text: "4r/5" },
                        { key: "c", text: "3r/8" },
                        { key: "d", text: "5r/3" }
                    ],
                    answer: "c",
                    explanation: "The centroid of a solid hemisphere lies on its axis at 3r over 8 from the flat face, because the cross-sectional area shrinks towards the pole and most of the volume is concentrated near the base."
                },
                {
                    id: "cm5q003",
                    src: "BASI674-00042",
                    text: "A solid having equilateral triangle as base and other faces converging towards its axis is",
                    options: [
                        { key: "a", text: "Prism" },
                        { key: "b", text: "Hexahedron" },
                        { key: "c", text: "cone" },
                        { key: "d", text: "Pyramid" }
                    ],
                    answer: "d",
                    explanation: "A solid with a polygonal base whose other faces are triangles meeting at a common apex is a pyramid. A prism has two identical parallel bases joined by rectangles, and a cone has a circular base with a curved surface."
                },
                {
                    id: "cm5q004",
                    src: "BASI674-00043",
                    text: "Which of the following shape is made up of uniform triangles?",
                    options: [
                        { key: "a", text: "Cone" },
                        { key: "b", text: "Prism" },
                        { key: "c", text: "Pyramid" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "c",
                    explanation: "A pyramid is bounded by triangular faces rising from the edges of its base to a single apex. A cone has one continuous curved surface rather than flat triangles, and a prism is bounded by rectangles."
                },
                {
                    id: "cm5q005",
                    src: "BASI674-00044",
                    text: "The radius of gyration of a rectangular section is not proportional to",
                    options: [
                        { key: "a", text: "square root of the moment of inertia" },
                        { key: "b", text: "square root of the inverse of the area" },
                        { key: "c", text: "square root of the moment of inertia divided by area of the section" },
                        { key: "d", text: "none of these" }
                    ],
                    answer: "d",
                    explanation: "Radius of gyration is k equal to the root of I over A, so it is proportional to the root of the moment of inertia, to the root of the inverse of the area, and to the root of their ratio. Every option listed is therefore a valid proportionality."
                },
                {
                    id: "cm5q006",
                    src: "BASI674-00045",
                    text: "If level is located at mid point then which error is eliminated?",
                    options: [
                        { key: "a", text: "Cc" },
                        { key: "b", text: "Cr" },
                        { key: "c", text: "Both" },
                        { key: "d", text: "none" }
                    ],
                    answer: "c",
                    explanation: "Setting the level midway between the two staves makes the sight lengths equal, so the curvature correction and the refraction correction are the same at both readings and cancel in the difference. The collimation error cancels for the same reason."
                },
                {
                    id: "cm5q007",
                    src: "BASI674-00046",
                    text: "How many satellites are used for GPS by the US Department of Defense.",
                    options: [
                        { key: "a", text: "18" },
                        { key: "b", text: "20" },
                        { key: "c", text: "22" },
                        { key: "d", text: "24" }
                    ],
                    answer: "d",
                    explanation: "The GPS constellation operated by the US Department of Defense nominally comprises 24 satellites in six orbital planes, which guarantees that at least four are visible from anywhere on Earth, the minimum needed to fix position and receiver clock error."
                },
                {
                    id: "cm5q008",
                    src: "BASI674-00047",
                    text: "Right Face zenith angle if Left Face zenithal angle is 98° 30' 30''.",
                    options: [
                        { key: "a", text: "261° 29' 30''" },
                        { key: "b", text: "178° 30' 30''" },
                        { key: "c", text: "81° 29' 30''" },
                        { key: "d", text: "98° 30' 30''" }
                    ],
                    answer: "a",
                    explanation: "Face left and face right zenith angles must sum to 360 degrees. Subtracting 98 degrees 30 minutes 30 seconds from 360 gives 261 degrees 29 minutes 30 seconds, and observing on both faces cancels the collimation and trunnion axis errors."
                },
                {
                    id: "cm5q009",
                    src: "BASI674-00048",
                    text: "Topography survey is done in",
                    options: [
                        { key: "a", text: "Soil" },
                        { key: "b", text: "Engineering" },
                        { key: "c", text: "Traffic" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "Topographic survey supplies the ground model for every kind of study listed: soil and geological mapping, engineering design of roads, canals and structures, and traffic and land-use planning all start from the same contoured plan."
                },
                {
                    id: "cm5q010",
                    src: "BASI674-00049",
                    text: "Which of the following doesn't determine the capability of GIS?",
                    options: [
                        { key: "a", text: "Defining a map" },
                        { key: "b", text: "Representing cartographic features" },
                        { key: "c", text: "Transferring data" },
                        { key: "d", text: "Retrieving data" }
                    ],
                    answer: "c",
                    explanation: "A geographic information system defines and stores map geometry, represents cartographic features and retrieves and analyses data. Simply transferring files between machines is ordinary data handling and is not what distinguishes a GIS."
                },
                {
                    id: "cm5q011",
                    src: "BASI674-00050",
                    text: "Find the perpendicular distance if the radius of the curve is 10.26 m and the angle is θ = 10° 24'.",
                    options: [
                        { key: "a", text: "0.402 m" },
                        { key: "b", text: "0.204 m" },
                        { key: "c", text: "0.024 m" },
                        { key: "d", text: "0.042 m" }
                    ],
                    answer: "d",
                    explanation: "The mid-ordinate of a curve is M equal to R times (1 minus cos of half the deflection angle). With R of 10.26 m and an angle of 10 degrees 24 minutes, half the angle is 5 degrees 12 minutes, and the bracket is 0.0041, giving about 0.042 m."
                },
                {
                    id: "cm5q012",
                    src: "BASI674-00051",
                    text: "Which of the following indicates the formula for arithmetic check?",
                    options: [
                        { key: "a", text: "ΣB.S-ΣF.S=Last R.L-First R.L" },
                        { key: "b", text: "ΣB.S+ΣF.S=First R.L-Last R.L" },
                        { key: "c", text: "ΣF.S-ΣB.S=Last R.L-First R.L" },
                        { key: "d", text: "ΣF.S+ΣB.S=Last R.L-First R.L" }
                    ],
                    answer: "a",
                    explanation: "If the difference in summation of back sight and fore sight is equal to the difference of last R.L and first R.L, then obtained set of values for finding difference in elevation are correct."
                },
                {
                    id: "cm5q013",
                    src: "BASI674-00052",
                    text: "Find the value of radius of curvature if D is given as 23.76",
                    options: [
                        { key: "a", text: "214.16 m" },
                        { key: "b", text: "241.16 m" },
                        { key: "c", text: "271.23 m" },
                        { key: "d", text: "217.23 m" }
                    ],
                    answer: "b",
                    explanation: "The degree of curve is defined by R equal to 5729.58 divided by D when D is the angle subtended by a 100 unit arc. Dividing 5729.58 by 23.76 gives a radius of about 241 m, so a large degree of curve means a sharp curve."
                }
            ]
        },
        {
            id: "cm5stru",
            name: "Structural Mechanics",
            subject: "Structural Mech",
            accent: "cyan",
            blurb: "11 questions drawn from the Structural Mechanics bank.",
            questions: [
                {
                    id: "cm5q014",
                    src: "STRU935-00034",
                    text: "In purely bending, stress distribution in the beam is.",
                    options: [
                        { key: "a", text: "parabolic" },
                        { key: "b", text: "elliptical" },
                        { key: "c", text: "linear" },
                        { key: "d", text: "constant" }
                    ],
                    answer: "c",
                    explanation: "In pure bending the strain varies linearly from the neutral axis, and while the material stays elastic the stress follows the same straight line, zero at the neutral axis and greatest at the extreme fibres. Shear stress, by contrast, is parabolic."
                },
                {
                    id: "cm5q015",
                    src: "STRU935-00035",
                    text: "Relationship between flexural strength &amp; characteristic strength?",
                    options: [
                        { key: "a", text: "fcr=0.35√fck" },
                        { key: "b", text: "fcr=0.5√fck" },
                        { key: "c", text: "fcr=0.8√fck" },
                        { key: "d", text: "fcr=0.7√fck" }
                    ],
                    answer: "d",
                    explanation: "IS 456 relates the flexural strength to the characteristic compressive strength by fcr equal to 0.7 times the root of fck, in N per square millimetre. This modulus of rupture is what governs the cracking moment of a plain or lightly reinforced section."
                },
                {
                    id: "cm5q016",
                    src: "STRU935-00036",
                    text: "Interpret from the following which one is wrong with respect to strain energy method for finding deflection?",
                    options: [
                        { key: "a", text: "Deflection can be found only at the loaded point." },
                        { key: "b", text: "Deflection can be found only in the direction of load." },
                        { key: "c", text: "Deflection can be found at any point in the desired direction." },
                        { key: "d", text: "Structure should be subjected to a single concentrated load." }
                    ],
                    answer: "a",
                    explanation: "The statement that deflection can be found only at the loaded point is the wrong one, because the unit load method extends strain energy so that the deflection can be found at any point and in any direction, by applying a dummy unit load there."
                },
                {
                    id: "cm5q017",
                    src: "STRU935-00037",
                    text: "The maximum bending moment due to a train of wheel loads on a simply supported girder",
                    options: [
                        { key: "a", text: "always occurs at the centre of span" },
                        { key: "b", text: "always occurs under a wheel load" },
                        { key: "c", text: "never occurs under a wheel load" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "b",
                    explanation: "Under a train of wheel loads the bending moment diagram is a series of straight segments whose slopes change only where a load sits, so the peak always falls under one of the wheels. The absolute maximum is found by trial, placing successive wheels at the critical position."
                },
                {
                    id: "cm5q018",
                    src: "STRU935-00038",
                    text: "Virtual work refers to",
                    options: [
                        { key: "a", text: "Virtual work done by Virtual forces" },
                        { key: "b", text: "Actual work done by Actual forces" },
                        { key: "c", text: "Virtual work done by Actual forces" },
                        { key: "d", text: "Actual work done by Virtual forces" }
                    ],
                    answer: "c",
                    explanation: "In the principle of virtual work a set of imaginary, infinitesimally small displacements is applied to a structure already in equilibrium under its real forces, and the work done by those actual forces through the virtual displacements is set to zero."
                },
                {
                    id: "cm5q019",
                    src: "STRU935-00039",
                    text: "A simply supported beam is subjected to a concentrated load at the midpoint. The shape of BMD is",
                    options: [
                        { key: "a", text: "rectangle" },
                        { key: "b", text: "parabolic" },
                        { key: "c", text: "semi-circle" },
                        { key: "d", text: "triangle" }
                    ],
                    answer: "d",
                    explanation: "A central point load gives a bending moment that rises linearly from zero at each support to WL over 4 at mid-span, so the diagram is a triangle. A uniformly distributed load would give a parabola instead."
                },
                {
                    id: "cm5q020",
                    src: "STRU935-00040",
                    text: "m1 and m2 are no of members of two individual truss of combined truss then compound truss will be determinate if",
                    options: [
                        { key: "a", text: "m = m1 + m2 + 3" },
                        { key: "b", text: "n = m1 + m2" },
                        { key: "c", text: "m = m1 + m2 + 1" },
                        { key: "d", text: "m = m1 + m2 + 2" }
                    ],
                    answer: "a",
                    explanation: "Two simple trusses joined into one compound truss need three additional members, or their equivalent, to prevent relative movement between them. The total then satisfies m equal to m1 plus m2 plus 3 for a statically determinate result."
                },
                {
                    id: "cm5q021",
                    src: "STRU935-00041",
                    text: "Effective length used in crippling load formula for a column with both ends fixed.",
                    options: [
                        { key: "a", text: "L" },
                        { key: "b", text: "L/2" },
                        { key: "c", text: "2L" },
                        { key: "d", text: "L√2" }
                    ],
                    answer: "b",
                    explanation: "Fixing both ends prevents rotation there, so points of contraflexure appear at the quarter points and the buckled shape between them behaves like a pin-ended column of length L over 2. That quartered effective length makes the critical load four times that of a pin-ended column."
                },
                {
                    id: "cm5q022",
                    src: "STRU935-00042",
                    text: "What is the value of the effective length of a column with both ends fixed?",
                    options: [
                        { key: "a", text: "L/4" },
                        { key: "b", text: "2L" },
                        { key: "c", text: "L/2" },
                        { key: "d", text: "L" }
                    ],
                    answer: "c",
                    explanation: "For a column fixed at both ends the effective length is half the actual length. Compare the other standard cases: pinned-pinned gives L, fixed-pinned gives 0.7L and fixed-free gives 2L."
                },
                {
                    id: "cm5q023",
                    src: "STRU935-00043",
                    text: "In case of a simply supported beam carrying a concentrated load at the mid span, what will be the length of the plastic hinge formed?",
                    options: [
                        { key: "a", text: "L/2" },
                        { key: "b", text: "L/4" },
                        { key: "c", text: "L/5" },
                        { key: "d", text: "L/3" }
                    ],
                    answer: "d",
                    explanation: "With a central point load the bending moment falls off linearly from the mid-span peak, so the region where the moment exceeds the yield value spans one third of the length. The plastic hinge is therefore taken as L over 3 long."
                },
                {
                    id: "cm5q024",
                    src: "STRU935-00044",
                    text: "Given that the unsupported length of the column with both ends fixed is L. What will be the unsupported length of an equivalent column with one end fixed and the other end free?",
                    options: [
                        { key: "a", text: "L/4" },
                        { key: "b", text: "L" },
                        { key: "c", text: "L/2" },
                        { key: "d", text: "L/8" }
                    ],
                    answer: "a",
                    explanation: "The Euler's crippling load formula is given by: \\(P_{cr} = \\frac{\\pi^2 EI}{L_e^2}\\) \\(\\begin{aligned} \\frac{\\pi^2 EI}{\\left(\\frac{l}{2}\\right)^2} &= \\frac{\\pi^2 EI}{(2L)^2} \\\\ \\frac{1}{\\frac{l^2}{4}} &= \\frac{1}{4L^2} \\\\ \\frac{4}{l^2} &= \\frac{1}{4L^2}\\\\ 16L^2 &= l^2 \\\\ \\sqrt{16L^2} &= l \\\\ 4L &= l \\\\ L &= \\frac{l}{4} \\end{aligned}\\)"
                }
            ]
        },
        {
            id: "cm5desi",
            name: "Design of Structures",
            subject: "Design of Str",
            accent: "slate",
            blurb: "10 questions drawn from the Design of Structures bank.",
            questions: [
                {
                    id: "cm5q025",
                    src: "DESI787-00031",
                    text: "Determine the section modulus for a beam of 100 mm diameter.",
                    options: [
                        { key: "a", text: "785 × 10³ mm³" },
                        { key: "b", text: "98 × 10³ mm³" },
                        { key: "c", text: "456 × 10³ mm³" },
                        { key: "d", text: "87 × 10³ mm³" }
                    ],
                    answer: "b",
                    explanation: "For a circular section the section modulus is Z equal to pi d cubed over 32. With d of 100 mm that is pi times a million divided by 32, which is about 98,000 cubic millimetres, or 98 times 10 cubed."
                },
                {
                    id: "cm5q026",
                    src: "DESI787-00032",
                    text: "The maximum spacing of contraction joints in unreinforced concrete slabs for a slab thickness of 20cm is",
                    options: [
                        { key: "a", text: "15m" },
                        { key: "b", text: "10m for reinforced=14m" },
                        { key: "c", text: "4.5m" },
                        { key: "d", text: "20m" }
                    ],
                    answer: "c",
                    explanation: "Contraction joints in unreinforced slabs are spaced closely enough that the shrinkage between joints cannot crack the slab, which for a 20 cm slab means about 4.5 m. Reinforced slabs can go considerably further because the steel holds any intermediate crack tight."
                },
                {
                    id: "cm5q027",
                    src: "DESI787-00033",
                    text: "What is the slenderness ratio of 200mm wall with RCC slab at the top and bottom with 5m length and 3.8m of height?",
                    options: [
                        { key: "a", text: "9.5" },
                        { key: "b", text: "20" },
                        { key: "c", text: "25" },
                        { key: "d", text: "19" }
                    ],
                    answer: "d",
                    explanation: "Slenderness ratio is the effective height divided by the thickness. With the wall held by slabs top and bottom, the height of 3.8 m over the 0.2 m thickness gives 19, comfortably inside the limit of 27 that codes set for a braced wall."
                },
                {
                    id: "cm5q028",
                    src: "DESI787-00034",
                    text: "The maximum area of tension reinforcement in beams shall not exceed",
                    options: [
                        { key: "a", text: "0.04" },
                        { key: "b", text: "0.0015" },
                        { key: "c", text: "0.015" },
                        { key: "d", text: "0.01" }
                    ],
                    answer: "a",
                    explanation: "IS 456 caps tension reinforcement in a beam at 0.04 bD, that is 4 percent of the gross section. Beyond that the bars cannot be placed and compacted properly and the section would in any case be over-reinforced and brittle."
                },
                {
                    id: "cm5q029",
                    src: "DESI787-00035",
                    text: "When two column loads are unequal, which of the possible footing can be provided?",
                    options: [
                        { key: "a", text: "Strap footing" },
                        { key: "b", text: "Trapezoidal combined footing" },
                        { key: "c", text: "Raft footing" },
                        { key: "d", text: "Mat footing" }
                    ],
                    answer: "b",
                    explanation: "When two columns carry unequal loads a trapezoidal combined footing is used, made wider under the heavier column so that the centroid of the base area coincides with the resultant of the two loads and the pressure stays uniform."
                },
                {
                    id: "cm5q030",
                    src: "DESI787-00036",
                    text: "Permissible load in circular column shouldn't exceed the permitted load in...if equivalent cross-sectional area.",
                    options: [
                        { key: "a", text: "rectangle column" },
                        { key: "b", text: "trapezoidal column" },
                        { key: "c", text: "Square column" },
                        { key: "d", text: "prismorial column" }
                    ],
                    answer: "c",
                    explanation: "For the same cross-sectional area a circular column carries less than a square one, because its least lateral dimension is smaller so its slenderness ratio is higher and the permissible stress has to be reduced accordingly."
                },
                {
                    id: "cm5q031",
                    src: "DESI787-00037",
                    text: "In case of long columns, direct stress is ....compared to bending stress",
                    options: [
                        { key: "a", text: "More" },
                        { key: "b", text: "Less" },
                        { key: "c", text: "same" },
                        { key: "d", text: "Negligible" }
                    ],
                    answer: "d",
                    explanation: "In a long column failure is governed by buckling, so the bending stress produced by the lateral deflection dominates and the direct axial stress is comparatively negligible. In a short column the reverse is true and the direct stress governs."
                },
                {
                    id: "cm5q032",
                    src: "DESI787-00038",
                    text: "why circular column is generally not used?",
                    options: [
                        { key: "a", text: "It is uneconomical" },
                        { key: "b", text: "difficult to connect to beam" },
                        { key: "c", text: "low load carrying capacity" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "b",
                    explanation: "Circular columns are awkward where beams frame in, because the beam soffit and reinforcement have to be detailed against a curved face and the shuttering is more complicated. They are common in piling and in bridge piers where no beams intersect."
                },
                {
                    id: "cm5q033",
                    src: "DESI787-00039",
                    text: "Prestress loss results in",
                    options: [
                        { key: "a", text: "Decrease in compressive strength" },
                        { key: "b", text: "Decrease in shear strength" },
                        { key: "c", text: "Decrease in tensile strength" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "a",
                    explanation: "Loss of prestress reduces the compression locked into the member, so less applied tension can be balanced before the concrete cracks. That directly reduces the cracking and shear capacity the design relied on."
                },
                {
                    id: "cm5q034",
                    src: "DESI787-00040",
                    text: "What is the maximum theoretical percentage of longitudinal reinforcement in a RCC column?",
                    options: [
                        { key: "a", text: "4% of gross area" },
                        { key: "b", text: "5% of gross area" },
                        { key: "c", text: "6% of gross area" },
                        { key: "d", text: "2% of gross area" }
                    ],
                    answer: "c",
                    explanation: "IS 456 limits longitudinal steel in a column to 6 percent of the gross area, and in practice 4 percent is preferred so that bars can be lapped without congestion. The minimum is 0.8 percent."
                }
            ]
        },
        {
            id: "cm5soil",
            name: "Soil Mechanics and Foundation",
            subject: "Soil Mechanics",
            accent: "amber",
            blurb: "13 questions drawn from the Soil Mechanics and Foundation bank.",
            questions: [
                {
                    id: "cm5q035",
                    src: "SOIL136-00040",
                    text: "The ratio of settlement at any time 't' to the final settlement, is known as",
                    options: [
                        { key: "a", text: "co-efficient of consolidation" },
                        { key: "b", text: "consolidation index" },
                        { key: "c", text: "settlement ratio" },
                        { key: "d", text: "degree of consolidation" }
                    ],
                    answer: "d",
                    explanation: "The degree of consolidation is the settlement achieved at time t divided by the ultimate consolidation settlement, usually expressed as a percentage. It is related to the time factor T through Terzaghi's theory."
                },
                {
                    id: "cm5q036",
                    src: "SOIL136-00041",
                    text: "Water is flowing at a rate of 0.04 m3/s in a soil sample with a thickness of 12 m and cross-sectional area of 50 m2. If the coefficient of permeability is 1.6 × 10^-3 m/s, what is the seepage pressure?",
                    options: [
                        { key: "a", text: "58.86 kN/m²" },
                        { key: "b", text: "50.76 kN/m²" },
                        { key: "c", text: "52.34 kN/m²" },
                        { key: "d", text: "55.34 kN/m²" }
                    ],
                    answer: "a",
                    explanation: "The hydraulic gradient follows from Darcy's law: i equals Q over kA, that is 0.04 divided by (1.6 times 10 to the minus 3, times 50), which is 0.5. The seepage pressure is then i times gamma w times the thickness, 0.5 times 9.81 times 12, or 58.86 kN per square metre."
                },
                {
                    id: "cm5q037",
                    src: "SOIL136-00042",
                    text: "The void ratio of a soil is 0.68 and specific gravity is 2.68. The critical gradient for quick sand condition is",
                    options: [
                        { key: "a", text: "1.5" },
                        { key: "b", text: "1" },
                        { key: "c", text: "2" },
                        { key: "d", text: "0" }
                    ],
                    answer: "b",
                    explanation: "The critical hydraulic gradient is ic equal to (G minus 1) over (1 plus e), that is 1.68 divided by 1.68, which is exactly 1. Quick conditions therefore begin as soon as the upward gradient reaches unity, which is typical of sands."
                },
                {
                    id: "cm5q038",
                    src: "SOIL136-00043",
                    text: "Which of the following has the minimum compressibility?",
                    options: [
                        { key: "a", text: "Air at room temperature" },
                        { key: "b", text: "Oxygen at room temperature" },
                        { key: "c", text: "Water at room temperature" },
                        { key: "d", text: "Nitrogen at room temperature" }
                    ],
                    answer: "c",
                    explanation: "Water is nearly incompressible, with a bulk modulus of about 2.2 GPa, so it has by far the smallest compressibility of the four. Gases are thousands of times more compressible because their molecules are far apart."
                },
                {
                    id: "cm5q039",
                    src: "SOIL136-00044",
                    text: "What is the formula for Shear strength from Vane shear test?",
                    options: [
                        { key: "a", text: "S = T/(πD² (H/2+D/3))" },
                        { key: "b", text: "S = T/(πD² (H/4+D/6))" },
                        { key: "c", text: "S = T/(πD² (H/4+D/3))" },
                        { key: "d", text: "S = T/(πD² (H/2+D/6))" }
                    ],
                    answer: "d",
                    explanation: "For a vane sheared over its full height the undrained strength is S equal to T divided by pi D squared times (H over 2 plus D over 6), where the two terms account for the cylindrical side and the two end faces of the sheared cylinder."
                },
                {
                    id: "cm5q040",
                    src: "SOIL136-00045",
                    text: "Shear strength of cohesionless soil doesn't depend on",
                    options: [
                        { key: "a", text: "Force" },
                        { key: "b", text: "rate of loading" },
                        { key: "c", text: "stress history" },
                        { key: "d", text: "confining pressure" }
                    ],
                    answer: "a",
                    explanation: "The shear strength of a cohesionless soil depends on its confining pressure, its density and its stress history, but not on the absolute magnitude of an applied force in isolation. Strength is expressed as a stress, sigma prime times tan phi, not as a force."
                },
                {
                    id: "cm5q041",
                    src: "SOIL136-00046",
                    text: "The angle subtended by rigid cone below foundation with respect to horizontal is",
                    options: [
                        { key: "a", text: "φ" },
                        { key: "b", text: "45° + φ/2" },
                        { key: "c", text: "45°" },
                        { key: "d", text: "45° - φ/2" }
                    ],
                    answer: "b",
                    explanation: "In Terzaghi's bearing capacity theory the soil directly under the footing is trapped and moves down with it as a rigid wedge. The faces of that wedge make an angle of 45 degrees plus phi over 2 with the horizontal, the same inclination as the failure planes in a triaxial specimen."
                },
                {
                    id: "cm5q042",
                    src: "SOIL136-00047",
                    text: "The X and Y-axis of Mohr's circle represent",
                    options: [
                        { key: "a", text: "shear stress and normal stress" },
                        { key: "b", text: "principal normal stress and principal shear stress" },
                        { key: "c", text: "normal stress and shear stress" },
                        { key: "d", text: "principal shear stress and principal normal stress" }
                    ],
                    answer: "c",
                    explanation: "The horizontal axis of Mohr's circle carries normal stress and the vertical axis carries shear stress. Where the circle cuts the horizontal axis the shear is zero, and those two intercepts are the principal stresses."
                },
                {
                    id: "cm5q043",
                    src: "SOIL136-00048",
                    text: "The shear strength of plastic undrained clay depends upon",
                    options: [
                        { key: "a", text: "Internal friction" },
                        { key: "b", text: "Internal friction and cohesion" },
                        { key: "c", text: "Unit weight of clay" },
                        { key: "d", text: "Cohesion" }
                    ],
                    answer: "d",
                    explanation: "A saturated clay tested undrained behaves as a purely cohesive material: the apparent angle of friction is zero and the strength is the undrained cohesion cu, equal to half the unconfined compressive strength."
                },
                {
                    id: "cm5q044",
                    src: "SOIL136-00049",
                    text: "The neutral stress in a soil mass is",
                    options: [
                        { key: "a", text: "stress taken up by the pore water" },
                        { key: "b", text: "force per neutral area" },
                        { key: "c", text: "force per effective area" },
                        { key: "d", text: "stress taken up by solid particles" }
                    ],
                    answer: "a",
                    explanation: "Neutral stress is another name for pore water pressure, the part of the total stress carried by the water in the voids. It acts equally in all directions and, being carried by water, contributes nothing to shear strength, which is why effective stress governs."
                },
                {
                    id: "cm5q045",
                    src: "SOIL136-00050",
                    text: "For testing a saturated clay for shear strength, the test recommended, is",
                    options: [
                        { key: "a", text: "direct shear test" },
                        { key: "b", text: "unconfined compression test" },
                        { key: "c", text: "tri-axial compression test" },
                        { key: "d", text: "all the above" }
                    ],
                    answer: "b",
                    explanation: "For a saturated clay the unconfined compression test is the quick standard test, since with phi equal to zero the undrained strength is simply half the unconfined compressive strength and no cell pressure is needed."
                },
                {
                    id: "cm5q046",
                    src: "SOIL136-00051",
                    text: "A dry specimen is put through a tri-axial test, it cell pressure =150 Kpa and deviator stress at the failure =100 Kpa then angle of internal friction?",
                    options: [
                        { key: "a", text: "60 degree" },
                        { key: "b", text: "45 degree" },
                        { key: "c", text: "30 degree" },
                        { key: "d", text: "90 degree" }
                    ],
                    answer: "c",
                    explanation: "The major principal stress is the cell pressure plus the deviator stress, that is 150 plus 100, or 250 kPa. The friction angle then follows from sin phi equal to (sigma 1 minus sigma 3) over (sigma 1 plus sigma 3), that is 100 over 400."
                },
                {
                    id: "cm5q047",
                    src: "SOIL136-00052",
                    text: "An angle θ in the physical element is represented by ______ on Mohr's circle.",
                    options: [
                        { key: "a", text: "30°" },
                        { key: "b", text: "40°" },
                        { key: "c", text: "0°" },
                        { key: "d", text: "2θ°" }
                    ],
                    answer: "d",
                    explanation: "Angles are doubled on Mohr's circle: a plane inclined at theta in the physical element appears at 2 theta on the circle. That is why the planes of maximum shear, 90 degrees apart on the circle, lie at 45 degrees to the principal planes in reality."
                }
            ]
        },
        {
            id: "cm5watr",
            name: "Basic Water Resources Engineering",
            subject: "Water Resources",
            accent: "emerald",
            blurb: "12 questions drawn from the Basic Water Resources Engineering bank.",
            questions: [
                {
                    id: "cm5q048",
                    src: "WATE701-00037",
                    text: "Head loss formula h = f L v²/2gD is given by.",
                    options: [
                        { key: "a", text: "Darcy–Weisbach" },
                        { key: "b", text: "Hazen–Williams" },
                        { key: "c", text: "Chezy" },
                        { key: "d", text: "Manning’s" }
                    ],
                    answer: "a",
                    explanation: "The Darcy-Weisbach equation, hf equal to fLV squared over 2gD, gives the friction head loss in a pipe. It is dimensionally consistent and works for any fluid, unlike the empirical Hazen-Williams and Manning formulas."
                },
                {
                    id: "cm5q049",
                    src: "WATE701-00038",
                    text: "Formula for sudden expansion loss",
                    options: [
                        { key: "a", text: "V²/2g" },
                        { key: "b", text: "(V₁ - V₂)²/2g" },
                        { key: "c", text: "kV²/2g" },
                        { key: "d", text: "0.5V²/2g" }
                    ],
                    answer: "b",
                    explanation: "At a sudden enlargement the jet cannot follow the wall and eddies form, dissipating energy. The loss is the velocity head of the difference in velocities, (V1 minus V2) squared over 2g, a result obtained from the momentum equation."
                },
                {
                    id: "cm5q050",
                    src: "WATE701-00039",
                    text: "The coefficient of discharge for an orifice meter is in the range",
                    options: [
                        { key: "a", text: "0.97 to 0.99" },
                        { key: "b", text: "0.93 to 0.98" },
                        { key: "c", text: "0.62 to 0.65" },
                        { key: "d", text: "0.51 to 0.55" }
                    ],
                    answer: "c",
                    explanation: "An orifice meter has a coefficient of discharge of roughly 0.62 to 0.65 because the jet contracts to a vena contracta downstream of the plate and much of the energy is lost in the expansion. A venturimeter, with its gradual diffuser, reaches 0.97 to 0.99."
                },
                {
                    id: "cm5q051",
                    src: "WATE701-00040",
                    text: "The three liquids 1, 2, and 3 with vapor pressures V₁, V₂, and V₃ respectively, are kept under the same pressure. If V₁ &gt; V₂ &gt; V₃, which liquid will start boiling early?",
                    options: [
                        { key: "a", text: "Liquid 2" },
                        { key: "b", text: "Liquid 3" },
                        { key: "c", text: "They will start boiling at the same time" },
                        { key: "d", text: "Liquid 1" }
                    ],
                    answer: "d",
                    explanation: "Boiling begins when the vapour pressure of a liquid reaches the pressure imposed on it. Under a common pressure the liquid with the highest vapour pressure gets there first, so liquid 1 boils earliest."
                },
                {
                    id: "cm5q052",
                    src: "WATE701-00041",
                    text: "Viscosity is defined as the",
                    options: [
                        { key: "a", text: "Resistance to flow of fluid" },
                        { key: "b", text: "Resistance to flow of an object" },
                        { key: "c", text: "Resistance to flow of air" },
                        { key: "d", text: "Resistance to flow of heat" }
                    ],
                    answer: "a",
                    explanation: "Viscosity is a fluid's internal resistance to shearing, that is its resistance to flow, arising from cohesion between molecules and from the exchange of momentum between layers moving at different speeds."
                },
                {
                    id: "cm5q053",
                    src: "WATE701-00042",
                    text: "Fluids which undergo strain rates proportional to the applied shear stress are termed as?",
                    options: [
                        { key: "a", text: "Inviscid fluid" },
                        { key: "b", text: "Newtonian fluid" },
                        { key: "c", text: "Non-Newtonian fluid" },
                        { key: "d", text: "Viscous fluid" }
                    ],
                    answer: "b",
                    explanation: "A Newtonian fluid is one in which the rate of shear strain is directly proportional to the applied shear stress, the constant of proportionality being the dynamic viscosity. Water, air and thin oils behave this way."
                },
                {
                    id: "cm5q054",
                    src: "WATE701-00043",
                    text: "The frictional resistance for fluids in motion is",
                    options: [
                        { key: "a", text: "Proportional to the square of the velocity in laminar flow and to the velocity in turbulent flow" },
                        { key: "b", text: "Proportional to the velocity in both laminar flow and turbulent flow" },
                        { key: "c", text: "Proportional to the velocity in laminar flow and to the square of the velocity in turbulent flow" },
                        { key: "d", text: "Proportional to the square of the velocity in both laminar flow and turbulent flow" }
                    ],
                    answer: "c",
                    explanation: "In laminar flow the resistance comes from viscous shear and is directly proportional to velocity. Once the flow is turbulent, momentum exchange by eddies dominates and the resistance grows with the square of the velocity, which is why turbulent losses rise so steeply."
                },
                {
                    id: "cm5q055",
                    src: "WATE701-00044",
                    text: "Calculate the critical shear stress for usual turbulent flow, given a mean diameter of grain particles in the bed material of 0.3 mm.",
                    options: [
                        { key: "a", text: "0.300 N/m²" },
                        { key: "b", text: "0.106 N/m²" },
                        { key: "c", text: "0.116 N/m²" },
                        { key: "d", text: "0.206 N/m²" }
                    ],
                    answer: "d",
                    explanation: "Critical shear stress is found from the Shields relation, tau c equal to the Shields parameter times the submerged unit weight of the grain times its diameter. With a 0.3 mm grain this gives about 0.2 N per square metre, so very little tractive force is needed to move fine sand."
                },
                {
                    id: "cm5q056",
                    src: "WATE701-00045",
                    text: "e/D is a parameter in the Moody diagram. What is that e in the moody diagram?",
                    options: [
                        { key: "a", text: "Surface roughness" },
                        { key: "b", text: "viscosity" },
                        { key: "c", text: "kinematic viscosity" },
                        { key: "d", text: "boundary layer thickness" }
                    ],
                    answer: "a",
                    explanation: "In the Moody chart e is the absolute roughness of the pipe wall, the average height of the surface irregularities, and e over D is the relative roughness. In fully turbulent flow the friction factor depends on that ratio alone."
                },
                {
                    id: "cm5q057",
                    src: "WATE701-00046",
                    text: "What is the specific gravity of block if its weight in air is 60N and the weight is 40N when immersed in water?",
                    options: [
                        { key: "a", text: "5" },
                        { key: "b", text: "3" },
                        { key: "c", text: "6" },
                        { key: "d", text: "0.333" }
                    ],
                    answer: "b",
                    explanation: "The apparent loss of weight in water is the buoyant force, 60 minus 40, that is 20 N, which equals the weight of water displaced. Specific gravity is the weight in air divided by that loss, 60 over 20, which is 3."
                },
                {
                    id: "cm5q058",
                    src: "WATE701-00047",
                    text: "The head loss at the entrance of the pipe is...... to that of it if s exit",
                    options: [
                        { key: "a", text: "Equal" },
                        { key: "b", text: "Twice" },
                        { key: "c", text: "Half" },
                        { key: "d", text: "Four times" }
                    ],
                    answer: "c",
                    explanation: "The entrance loss for a sharp-edged pipe is 0.5 times the velocity head, whereas the whole velocity head is lost at the exit, so the entry loss is half the exit loss. Rounding or bell-mouthing the entrance reduces it much further."
                },
                {
                    id: "cm5q059",
                    src: "WATE701-00048",
                    text: "Water is flowing down steadily in a constant cross sectional pipe. According to Bernoulli principle",
                    options: [
                        { key: "a", text: "Pressure increases with height" },
                        { key: "b", text: "Pressure decreases with height" },
                        { key: "c", text: "Velocity increases with height" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "b",
                    explanation: "In a pipe of constant section the velocity cannot change, so Bernoulli's equation reduces to pressure head plus elevation head being constant. Pressure therefore falls as elevation rises, which is why the pressure is greatest at the lowest point of a pipeline."
                }
            ]
        },
        {
            id: "cm5hydr",
            name: "Hydropower",
            subject: "Hydropower",
            accent: "cyan",
            blurb: "9 questions drawn from the Hydropower bank.",
            questions: [
                {
                    id: "cm5q060",
                    src: "HYDR626-00028",
                    text: "The applicability of middle third rule used in the design of structures under combined direct and bending stresses is:",
                    options: [
                        { key: "a", text: "Feasible to rectangular cross-sections only" },
                        { key: "b", text: "Feasible to circular cross sections only" },
                        { key: "c", text: "Feasible to square and circular cross sections only" },
                        { key: "d", text: "Feasible to all cross sections" }
                    ],
                    answer: "a",
                    explanation: "In structural design (such as for masonry dams, pillars, or chimneys), we often want to ensure that combined direct (axial) and bending stresses do not produce tension anywhere in the cross-section. The stress at any extreme fiber is given by: \\(\\sigma = \\frac{P}{A} \\pm \\frac{M}{Z}\\) To avoid tensile stress, the minimum stress must be greater than or equal to zero: \\(e \\le \\frac{Z}{A}\\) \\(e \\le \\frac{d}{6}\\) This means the load can be applied at an eccentricity up to d/6 on either side of the centroidal axis. The total safe width is: \\(2 \\times \\frac{d}{6} = \\frac{d}{3}\\)"
                },
                {
                    id: "cm5q061",
                    src: "HYDR626-00029",
                    text: "On the basis of hydraulic design, dam is classified as",
                    options: [
                        { key: "a", text: "diversion and detention Dams" },
                        { key: "b", text: "overflow and non-overflow dam" },
                        { key: "c", text: "storage and diversion dams" },
                        { key: "d", text: "arch and buttress dam" }
                    ],
                    answer: "b",
                    explanation: "Hydraulically, dams are classed as overflow dams, which are designed to pass water over the crest and so need energy dissipation below, and non-overflow dams, which are never overtopped. Storage, diversion and detention are functional classes instead."
                },
                {
                    id: "cm5q062",
                    src: "HYDR626-00030",
                    text: "What should be done to avoid the Friction failure of dam?",
                    options: [
                        { key: "a", text: "Decrease the base width." },
                        { key: "b", text: "Provide anchorage at the top" },
                        { key: "c", text: "Increase the base width." },
                        { key: "d", text: "Provide anchorage at the bottom" }
                    ],
                    answer: "c",
                    explanation: "Sliding or friction failure is resisted by the frictional force on the base, which is the coefficient of friction times the weight. Widening the base adds weight and contact area, so it raises that resistance and improves the factor of safety against sliding."
                },
                {
                    id: "cm5q063",
                    src: "HYDR626-00031",
                    text: "The device that does not help in energy dissipation at the bottom of a hydraulic structure over which water spills is ______",
                    options: [
                        { key: "a", text: "Chute block" },
                        { key: "b", text: "Dentated sill" },
                        { key: "c", text: "Baffle piers" },
                        { key: "d", text: "Morning glory" }
                    ],
                    answer: "d",
                    explanation: "Chute blocks, dentated sills and baffle piers all sit in the stilling basin and break up the flow to dissipate energy. A morning glory is a shaft spillway inlet, an arrangement for passing flood water, not for dissipating it at the toe."
                },
                {
                    id: "cm5q064",
                    src: "HYDR626-00032",
                    text: "The maximum permissible eccentricity of a retaining wall of width 'B' to avoid failure in tension is?",
                    options: [
                        { key: "a", text: "B/6" },
                        { key: "b", text: "B/2" },
                        { key: "c", text: "B/3" },
                        { key: "d", text: "B/12" }
                    ],
                    answer: "a",
                    explanation: "To keep the whole base in compression the resultant must stay within the middle third, so the eccentricity may not exceed B over 6. Beyond that limit tension develops at the heel, which masonry and unreinforced concrete cannot carry."
                },
                {
                    id: "cm5q065",
                    src: "HYDR626-00033",
                    text: "If 20% of the reservoir capacity is earmarked for dead storage in a storage reservoir of 30 m.cum and the average annual slit decomposition in the reservoir is o.1 M. cum, then the useful life of the reservoir will start reducing after",
                    options: [
                        { key: "a", text: "90 years" },
                        { key: "b", text: "60 years" },
                        { key: "c", text: "150 years" },
                        { key: "d", text: "30 years" }
                    ],
                    answer: "b",
                    explanation: "Dead storage is 20 percent of 30 million cubic metres, that is 6 million. At 0.1 million cubic metres of silt a year, the dead storage is filled in 60 years, and only after that does sediment begin eating into the useful storage."
                },
                {
                    id: "cm5q066",
                    src: "HYDR626-00034",
                    text: "For BEIRI settling basin which of the following statement is false?",
                    options: [
                        { key: "a", text: "It is continuous type" },
                        { key: "b", text: "It uses sensors" },
                        { key: "c", text: "Plant needs to be closed during flushing operation" },
                        { key: "d", text: "It is used in middle Marsyangdi" }
                    ],
                    answer: "c",
                    explanation: "The Bieri type basin is designed to flush continuously through a moving gate while the plant keeps running, so shutting the plant down for flushing is the false statement. It is used at Middle Marsyangdi and works with level and turbidity sensing."
                },
                {
                    id: "cm5q067",
                    src: "HYDR626-00035",
                    text: "Submerged intake is located at.",
                    options: [
                        { key: "a", text: "Front of river" },
                        { key: "b", text: "Side of river" },
                        { key: "c", text: "U/S of river" },
                        { key: "d", text: "Bottom of river" }
                    ],
                    answer: "d",
                    explanation: "A submerged intake sits on the bed of the river, entirely below the water surface, so it can draw water at all stages and is not damaged by floating debris or ice. Its drawback is that it silts up and is hard to inspect."
                },
                {
                    id: "cm5q068",
                    src: "HYDR626-00036",
                    text: "Which of the following is incorrect for settling basin?",
                    options: [
                        { key: "a", text: "Laminar flow" },
                        { key: "b", text: "1H:2V for horizontal direction" },
                        { key: "c", text: "1H:5V for vertical direction" },
                        { key: "d", text: "Used for removing slit" }
                    ],
                    answer: "a",
                    explanation: "A settling basin is deliberately designed for very slow, near-uniform flow so that particles can fall out, but the flow there is not truly laminar; it is low-velocity turbulent flow. The transitions and the purpose of removing silt are correctly stated."
                }
            ]
        },
        {
            id: "cm5irri",
            name: "Irrigation and Drainage",
            subject: "Irrigation",
            accent: "emerald",
            blurb: "11 questions drawn from the Irrigation and Drainage bank.",
            questions: [
                {
                    id: "cm5q069",
                    src: "IRRI951-00035",
                    text: "The waterway for a bridge on the river in alluvial plain having a dominant discharge of 3600 ounces should be",
                    options: [
                        { key: "a", text: "250 m" },
                        { key: "b", text: "285 m" },
                        { key: "c", text: "300 m" },
                        { key: "d", text: "225 m" }
                    ],
                    answer: "b",
                    explanation: "Lacey's regime relation gives the wetted perimeter, and so the waterway, as P equal to 4.75 times the root of Q. With a dominant discharge of 3600 cumecs the root is 60, so P is 4.75 times 60, which is 285 m. The key has been corrected from the printed 300 m."
                },
                {
                    id: "cm5q070",
                    src: "IRRI951-00036",
                    text: "Determine the discharge required at the head of the distributary in a canal for irrigating 2400 hectares of Kharif area and 1800 hectares of Rabi area, assuming suitable values for kor depth and kor period.",
                    options: [
                        { key: "a", text: "2 cumec" },
                        { key: "b", text: "2.1 cumec" },
                        { key: "c", text: "2.08 cumec" },
                        { key: "d", text: "2.2 cumec" }
                    ],
                    answer: "c",
                    explanation: "For each season the duty follows from D equal to 8.64 B over delta, using the kor depth and kor period for that crop, and the discharge is the area divided by the duty. The distributary is then designed for the larger of the two seasonal demands, which with the values assumed here is about 2.08 cumec."
                },
                {
                    id: "cm5q071",
                    src: "IRRI951-00037",
                    text: "Calculate the top width of the weir wall (B’) if the head of water over the weir wall during maximum flood is 2 m, considering the specific gravity of the floor material as 2.4.",
                    options: [
                        { key: "a", text: "2 m" },
                        { key: "b", text: "2.4 m" },
                        { key: "c", text: "1.3 m" },
                        { key: "d", text: "1.7 m" }
                    ],
                    answer: "d",
                    explanation: "The weir wall is proportioned so that no tension develops under the flood head, which gives a width of H divided by the root of (G minus 1). With H of 2 m and a specific gravity of 2.4 the root of 1.4 is 1.18, so the width works out at about 1.7 m."
                },
                {
                    id: "cm5q072",
                    src: "IRRI951-00038",
                    text: "Lacey scour depth for a stream carrying a discharge of 3 cumecs per meter width having a silt factor 1.2 is",
                    options: [
                        { key: "a", text: "2.64 m" },
                        { key: "b", text: "1.32 m" },
                        { key: "c", text: "3.96 m" },
                        { key: "d", text: "4.32 m" }
                    ],
                    answer: "a",
                    explanation: "Lacey's scour depth for a known discharge per metre width is R equal to 1.35 times (q squared over f) to the power one third. Here q squared is 9, divided by 1.2 gives 7.5, whose cube root is 1.96, and multiplying by 1.35 gives 2.64 m."
                },
                {
                    id: "cm5q073",
                    src: "IRRI951-00039",
                    text: "If D10 of particle is 2mm with discharge of 2m3/s then longitudinal slope is",
                    options: [
                        { key: "a", text: "1 in 520" },
                        { key: "b", text: "1 in 720" },
                        { key: "c", text: "1 in 620" },
                        { key: "d", text: "1 in 820" }
                    ],
                    answer: "b",
                    explanation: "Lacey's regime slope is S equal to f to the power five thirds, divided by 3340 times Q to the power one sixth, with the silt factor f equal to 1.76 times the root of the grain size in millimetres. For a 2 mm grain f is about 2.49, which puts the slope in the region of 1 in 700 to 1 in 800."
                },
                {
                    id: "cm5q074",
                    src: "IRRI951-00040",
                    text: "If Q = 5m³/s and the mean size of sediments is 0.5mm then what is the velocity using Lacey’s formula?",
                    options: [
                        { key: "a", text: "0.381 m/s" },
                        { key: "b", text: "0.281 m/s" },
                        { key: "c", text: "0.532 m/s" },
                        { key: "d", text: "0.764 m/s" }
                    ],
                    answer: "c",
                    explanation: "Lacey's velocity relation is V equal to (Q f squared over 140) to the power one sixth, with the silt factor f equal to 1.76 times the root of the mean grain size in millimetres. For a 0.5 mm sediment f is about 1.24, which with a discharge of 5 cumecs gives a regime velocity of roughly half a metre per second."
                },
                {
                    id: "cm5q075",
                    src: "IRRI951-00041",
                    text: "For the design of non-scouring channels in coarse alluviums, the shield’s entrainment function should be ……",
                    options: [
                        { key: "a", text: "&gt;0.056" },
                        { key: "b", text: "0.056" },
                        { key: "c", text: "1" },
                        { key: "d", text: "&lt;0.056" }
                    ],
                    answer: "d",
                    explanation: "A channel is non-scouring when the Shields entrainment function stays below its critical value of about 0.056, since at that value the grains on the bed are just on the point of moving. Designing below it keeps the bed material at rest."
                },
                {
                    id: "cm5q076",
                    src: "IRRI951-00042",
                    text: "Cost of lining for 20m perimeter is Rs 40/m2 if net area yields to saving of water of 3 cumecs/million m2 of lining area and each per cumecs of water yields to crop production of Rs 3,00,000.If life of lining is 40 years and the maintainence cost is 12paisa/m2 and maintained by annual interest rate of 6%, find the B/C ratio.",
                    options: [
                        { key: "a", text: "1.2" },
                        { key: "b", text: "1" },
                        { key: "c", text: "0.85" },
                        { key: "d", text: "0.8" }
                    ],
                    answer: "a",
                    explanation: "A benefit-cost study of lining compares the annual value of the water saved, and the extra crop it grows, with the annualised cost of the lining plus its maintenance, using the capital recovery factor for the given life and interest rate. A ratio above one, as here, means lining is worth doing."
                },
                {
                    id: "cm5q077",
                    src: "IRRI951-00043",
                    text: "What is the value of f if d=1mm?",
                    options: [
                        { key: "a", text: "1" },
                        { key: "b", text: "1.76" },
                        { key: "c", text: "1.5" },
                        { key: "d", text: "1.67" }
                    ],
                    answer: "b",
                    explanation: "Lacey's silt factor is f equal to 1.76 times the square root of the mean grain diameter in millimetres. For a 1 mm particle the root is 1, so f is 1.76, which is the value normally quoted for standard silt."
                },
                {
                    id: "cm5q078",
                    src: "IRRI951-00044",
                    text: "Lacey silt factor for 0.35 mm diameter particles",
                    options: [
                        { key: "a", text: "2.08" },
                        { key: "b", text: "0.57" },
                        { key: "c", text: "1.04" },
                        { key: "d", text: "0.67" }
                    ],
                    answer: "c",
                    explanation: "To find the Lacey silt factor (f), you use the standard formula derived from Lacey's Regime Theory in irrigation engineering: \\(f = 1.76 \\sqrt{d_{mm}}\\) f = 1.76×0.5916​≈1.04."
                },
                {
                    id: "cm5q079",
                    src: "IRRI951-00045",
                    text: "The tractive force ratio for regime canal with angle of repose 36° and side slope 30° is",
                    options: [
                        { key: "a", text: "0.48" },
                        { key: "b", text: "0.69" },
                        { key: "c", text: "0.35" },
                        { key: "d", text: "0.53" }
                    ],
                    answer: "d",
                    explanation: "The tractive force ratio for a side slope is K equal to the root of (1 minus sin squared theta over sin squared phi). With theta of 30 degrees and phi of 36 degrees that is the root of (1 minus 0.25 over 0.3455), which is the root of 0.276, giving 0.53. The key has been corrected from the printed 0.69."
                }
            ]
        },
        {
            id: "cm5tran",
            name: "Transportation",
            subject: "Transportation",
            accent: "rose",
            blurb: "11 questions drawn from the Transportation bank.",
            questions: [
                {
                    id: "cm5q080",
                    src: "TRAN808-00034",
                    text: "The aggregate impact value of the aggregate used in",
                    options: [
                        { key: "a", text: "All the options are correct" },
                        { key: "b", text: "Building concrete is less than 45" },
                        { key: "c", text: "Road pavement concrete is less than 30" },
                        { key: "d", text: "Runway concrete is less than 30" }
                    ],
                    answer: "a",
                    explanation: "The permissible aggregate impact value depends on where the aggregate is used, and all the limits quoted are correct: the tougher the duty, from ordinary building concrete through road pavement to runway concrete, the lower the impact value allowed."
                },
                {
                    id: "cm5q081",
                    src: "TRAN808-00035",
                    text: "In LA Abrasion test 1.88kg out of 5kg passed through 1.7mm sieve then the aggregate is suitable for",
                    options: [
                        { key: "a", text: "bituminous penetration macadam" },
                        { key: "b", text: "bituminous surface course" },
                        { key: "c", text: "dense bituminous macadam" },
                        { key: "d", text: "surface dressing" }
                    ],
                    answer: "b",
                    explanation: "The abrasion value is the percentage passing the 1.7 mm sieve, that is 1.88 out of 5, or 37.6 percent. Codes set about 30 percent for a bituminous surfacing and allow appreciably more for base courses, so this value points to a base rather than a wearing course."
                },
                {
                    id: "cm5q082",
                    src: "TRAN808-00036",
                    text: "In mass haul diagram, if end is negative what does it mean?",
                    options: [
                        { key: "a", text: "Balanced" },
                        { key: "b", text: "Surplus" },
                        { key: "c", text: "Burrow" },
                        { key: "d", text: "Can not be said exactly" }
                    ],
                    answer: "c",
                    explanation: "In a mass haul diagram a falling curve means excavation is less than fill, so a negative ordinate at the end shows the section is short of material and earth must be borrowed from outside. A positive ending would mean surplus to be wasted."
                },
                {
                    id: "cm5q083",
                    src: "TRAN808-00037",
                    text: "If 50 kg of fine aggregates and 100 kg of coarse aggregates are mixed in a concrete whose water cement ratio is 0.6, the weight of water required for harsh mix, is",
                    options: [
                        { key: "a", text: "8 kg" },
                        { key: "b", text: "10 kg" },
                        { key: "c", text: "14 kg" },
                        { key: "d", text: "12 kg" }
                    ],
                    answer: "d",
                    explanation: "The 50 kg of fine and 100 kg of coarse aggregate are in the ratio 2 to 4, so the mix is 1:2:4 and the cement is 25 kg. Water is then the water-cement ratio times the cement, and a harsh mix is deliberately kept at the low end of that allowance."
                },
                {
                    id: "cm5q084",
                    src: "TRAN808-00038",
                    text: "If the penetration grade is 62, the penetration value is ...",
                    options: [
                        { key: "a", text: "0.62mm" },
                        { key: "b", text: "62mm" },
                        { key: "c", text: "6.2mm" },
                        { key: "d", text: "620mm" }
                    ],
                    answer: "a",
                    explanation: "Penetration is reported in tenths of a millimetre, so a grade of 62 means the needle penetrated 6.2 mm under the standard 100 g load for 5 seconds at 25 degrees Celsius. A higher number means a softer bitumen."
                },
                {
                    id: "cm5q085",
                    src: "TRAN808-00039",
                    text: "Minimum bitumen ductility value to use in road.",
                    options: [
                        { key: "a", text: "40 cm" },
                        { key: "b", text: "50 cm" },
                        { key: "c", text: "30 cm" },
                        { key: "d", text: "60 cm" }
                    ],
                    answer: "b",
                    explanation: "Bitumen for road work must have a ductility of at least 50 cm, so that the binder can stretch with the pavement as it flexes and as temperature changes without breaking the film around the aggregate."
                },
                {
                    id: "cm5q086",
                    src: "TRAN808-00040",
                    text: "Rate of stretching bitumen in ductility test",
                    options: [
                        { key: "a", text: "5 mm/min" },
                        { key: "b", text: "10 cm/min" },
                        { key: "c", text: "5 cm/min" },
                        { key: "d", text: "10 mm/min" }
                    ],
                    answer: "c",
                    explanation: "In the ductility test the briquette is pulled apart at 5 cm per minute at 27 degrees Celsius, and the length of thread at the moment it snaps is the ductility. Both the rate and the temperature must be held exactly, since the result is very sensitive to them."
                },
                {
                    id: "cm5q087",
                    src: "TRAN808-00041",
                    text: "If CBR = 5%, then resilient modulus as per NRS is",
                    options: [
                        { key: "a", text: "30 MPa" },
                        { key: "b", text: "40 MPa" },
                        { key: "c", text: "60 MPa" },
                        { key: "d", text: "50 MPa" }
                    ],
                    answer: "d",
                    explanation: "The resilient modulus is estimated as 10 times the CBR in megapascals, so a CBR of 5 percent corresponds to about 50 MPa. The relation is empirical and is used for subgrades of moderate strength."
                },
                {
                    id: "cm5q088",
                    src: "TRAN808-00042",
                    text: "What is the standard temperature for Marshall Stability test?",
                    options: [
                        { key: "a", text: "60°C" },
                        { key: "b", text: "27°C" },
                        { key: "c", text: "25°C" },
                        { key: "d", text: "40°C" }
                    ],
                    answer: "a",
                    explanation: "The Marshall stability test is run at 60 degrees Celsius, chosen to represent the hottest pavement temperature the mix will meet in service, which is when a bituminous mix is weakest and most likely to deform."
                },
                {
                    id: "cm5q089",
                    src: "TRAN808-00043",
                    text: "The distance between two samples in a penetration test should be ______",
                    options: [
                        { key: "a", text: "25 mm" },
                        { key: "b", text: "15 mm" },
                        { key: "c", text: "10 mm" },
                        { key: "d", text: "20 mm" }
                    ],
                    answer: "b",
                    explanation: "Successive penetration readings must be taken far enough apart, about 15 mm from one another and from the side of the container, so that the disturbance from one test does not affect the next."
                },
                {
                    id: "cm5q090",
                    src: "TRAN808-00044",
                    text: "Which of the following sieve size is used in Los Angles abrasion test?",
                    options: [
                        { key: "a", text: "2.36 mm" },
                        { key: "b", text: "1.77 mm" },
                        { key: "c", text: "1.7 mm" },
                        { key: "d", text: "1.5 mm" }
                    ],
                    answer: "c",
                    explanation: "In the Los Angeles abrasion test the material is sieved on a 1.7 mm sieve after tumbling with the steel spheres, and the percentage passing that sieve is the abrasion value."
                }
            ]
        },
        {
            id: "cm5wate",
            name: "Water Supply, Sanitation and Environment",
            subject: "Water Supply",
            accent: "blue",
            blurb: "10 questions drawn from the Water Supply, Sanitation and Environment bank.",
            questions: [
                {
                    id: "cm5q091",
                    src: "WATE813-00031",
                    text: "The reserve of water for breakdown period is generally not more than ….. of total storage.",
                    options: [
                        { key: "a", text: "15%" },
                        { key: "b", text: "30%" },
                        { key: "c", text: "50%" },
                        { key: "d", text: "25%" }
                    ],
                    answer: "d",
                    explanation: "The breakdown reserve, held against a pump or main failure, is normally limited to about 25 percent of the total storage. A larger allowance would enlarge the reservoir for a rare event and would leave the water standing long enough to lose its chlorine residual."
                },
                {
                    id: "cm5q092",
                    src: "WATE813-00032",
                    text: "The exhausted permute is generally regenerated by percolating through it a solution of",
                    options: [
                        { key: "a", text: "sodium chloride" },
                        { key: "b", text: "calcium chloride" },
                        { key: "c", text: "magnesium chloride" },
                        { key: "d", text: "barium chloride" }
                    ],
                    answer: "a",
                    explanation: "An exhausted zeolite or permutit bed has given up its sodium and taken on calcium and magnesium. Percolating a strong solution of common salt, sodium chloride, reverses the exchange and washes the hardness out as chlorides."
                },
                {
                    id: "cm5q093",
                    src: "WATE813-00033",
                    text: "When the impurities are separated by the gravitation of settling particles, the operation is called ______",
                    options: [
                        { key: "a", text: "Sedimentation with coagulant" },
                        { key: "b", text: "Plain sedimentation" },
                        { key: "c", text: "Filtration" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "b",
                    explanation: "Plain sedimentation lets particles settle out under gravity alone, with no chemicals added. It removes only the coarser silt; the fine colloidal matter needs a coagulant to bring the particles together first."
                },
                {
                    id: "cm5q094",
                    src: "WATE813-00034",
                    text: "Vacuum filter is most suitable for the",
                    options: [
                        { key: "a", text: "Removal of fines from liquid" },
                        { key: "b", text: "Liquids having high vapor pressure" },
                        { key: "c", text: "Liquids of very high viscosity" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "b",
                    explanation: "A vacuum filter draws the liquid through the medium by suction, so it suits liquids that will not flow readily under gravity or pressure, particularly viscous ones and sludges. It is widely used for dewatering sludge cake."
                },
                {
                    id: "cm5q095",
                    src: "WATE813-00035",
                    text: "For a given discharge, efficiency of sedimentation tank can be increased by",
                    options: [
                        { key: "a", text: "Increasing depth of basin" },
                        { key: "b", text: "Increasing depth" },
                        { key: "c", text: "Decreasing area of basin" }
                    ],
                    answer: "c",
                    explanation: "Settling efficiency depends on the surface loading, the discharge divided by the plan area, so a larger plan area improves removal. Depth affects only the detention time, which is why shallow tanks with a large area, and tube settlers, work so well."
                },
                {
                    id: "cm5q096",
                    src: "WATE813-00036",
                    text: "Efficiency of chlorine as disinfectant",
                    options: [
                        { key: "a", text: "Decreases with pH" },
                        { key: "b", text: "Increases with pH" },
                        { key: "c", text: "maximum at pH 7" },
                        { key: "d", text: "remains constant at all pH" }
                    ],
                    answer: "a",
                    explanation: "Chlorine disinfects mainly as hypochlorous acid, and as pH rises that acid dissociates into the far less effective hypochlorite ion. Efficiency therefore falls as the water becomes more alkaline, and rises in slightly acidic water."
                },
                {
                    id: "cm5q097",
                    src: "WATE813-00037",
                    text: "What would be the effect on pH if Bleaching powder is added?",
                    options: [
                        { key: "a", text: "Decreases" },
                        { key: "b", text: "Increases" },
                        { key: "c", text: "Remains constant" },
                        { key: "d", text: "Depends on initial pH" }
                    ],
                    answer: "b",
                    explanation: "Bleaching powder is calcium hypochlorite, an alkaline compound, so adding it raises the pH of the water. That is one reason its disinfecting power is lower than that of chlorine gas, which lowers pH slightly."
                },
                {
                    id: "cm5q098",
                    src: "WATE813-00038",
                    text: "Alum is chemically",
                    options: [
                        { key: "a", text: "Copper sulphate" },
                        { key: "b", text: "Ferrous sulphate" },
                        { key: "c", text: "Aluminium sulphate" },
                        { key: "d", text: "Ferric sulphate" }
                    ],
                    answer: "c",
                    explanation: "Alum is aluminium sulphate. In water it hydrolyses to aluminium hydroxide floc, which sweeps up the colloidal particles that cause turbidity and colour, and it consumes alkalinity in the process."
                },
                {
                    id: "cm5q099",
                    src: "WATE813-00039",
                    text: "Which of the following is a better test to identify Coliforms?",
                    options: [
                        { key: "a", text: "Coliform index" },
                        { key: "b", text: "Multiple tube fermentation" },
                        { key: "c", text: "MPN test" },
                        { key: "d", text: "Membrane filter technique" }
                    ],
                    answer: "d",
                    explanation: "The membrane filter technique gives a direct count of coliform colonies on the filter after incubation, so it is quicker, more precise and reproducible than the multiple tube fermentation method, which only returns a statistical most probable number."
                },
                {
                    id: "cm5q100",
                    src: "WATE813-00040",
                    text: "By boiling water, hardness can be removed if it is due to",
                    options: [
                        { key: "a", text: "calcium bicarbonate" },
                        { key: "b", text: "calcium sulphate" },
                        { key: "c", text: "magnesium sulphate" },
                        { key: "d", text: "calcium nitrate" }
                    ],
                    answer: "a",
                    explanation: "Boiling drives off carbon dioxide and precipitates the bicarbonates as insoluble carbonates, so it removes the temporary hardness due to calcium and magnesium bicarbonate. Sulphates and chlorides are permanent hardness and need lime-soda or ion exchange."
                }
            ]
        }
    ]
};

/* Registered lazily — js/civil.js injects this file when the set is opened. */
window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["civil-5"] = CIVIL_MODEL_5;
