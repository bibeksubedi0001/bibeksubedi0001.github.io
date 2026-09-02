/* ============================================================
   CIVIL MODEL SET 1 — Civil Engineering licence-style model paper
   100 questions · 120 minutes · no negative marking

     Basic Civil Engineering...................  15
     Structural Mechanics......................  11
     Design of Structures......................   9
     Soil Mechanics and Foundation.............  14
     Basic Water Resources Engineering.........  10
     Hydropower................................   9
     Irrigation and Drainage...................  11
     Transportation............................  11
     Water Supply, Sanitation and Environment..  10

   Imported from the civil engineering question bank; questions are
   allocated in proportion to each subject's share of the bank.
   Only text-only items are used, so every stem, option and
   explanation renders without MathJax. The "src" field on each
   question is its id in the source bank.
   ============================================================ */
const CIVIL_MODEL_1 = {
    day: 31,
    kind: "model",
    badge: { top: "Model", main: "C1" },
    title: "Civil Model Set 1",
    subtitle: "Civil Engineering · nine subjects",
    durationMinutes: 120,
    negativeMarking: 0,
    chapters: [
        {
            id: "cm1basi",
            name: "Basic Civil Engineering",
            subject: "Basic Civil",
            accent: "blue",
            blurb: "15 questions drawn from the Basic Civil Engineering bank.",
            questions: [
                {
                    id: "cm1q001",
                    src: "BASI674-00074",
                    text: "For which of the following, will the chain surveying be well adopted one?",
                    options: [
                        { key: "a", text: "Small surveys in open ground" },
                        { key: "b", text: "Large areas with difficult details" },
                        { key: "c", text: "Small surveys with crowded details" },
                        { key: "d", text: "Large areas with simple details" }
                    ],
                    answer: "a",
                    explanation: "Chain surveying is best suited for small, relatively flat, and open areas where triangulation is not necessary. It is not suitable for large or crowded areas due to its linear nature and lack of angular measurements."
                },
                {
                    id: "cm1q002",
                    src: "BASI674-00103",
                    text: "Small areas on painted surface enclosed by hair line cracks are called",
                    options: [
                        { key: "a", text: "Crocodiling" },
                        { key: "b", text: "Crazing" },
                        { key: "c", text: "Chalking" },
                        { key: "d", text: "Blistering" }
                    ],
                    answer: "b",
                    explanation: "Crazing is the defect where a network of fine cracks appears on the painted surface, forming small enclosed areas. It is often caused by improper seasoning of wood, use of excessive drier, or poor quality paint."
                },
                {
                    id: "cm1q003",
                    src: "BASI674-00133",
                    text: "Specification for cement is governed by",
                    options: [
                        { key: "a", text: "IS 49/2041" },
                        { key: "b", text: "NS : 269-1976" },
                        { key: "c", text: "NS 49/2041" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "c",
                    explanation: "NS 49:2041 is the Nepal Standard for ordinary Portland cement, which governs its specifications within Nepal."
                },
                {
                    id: "cm1q004",
                    src: "BASI674-00148",
                    text: "What is the total percentage of aggregates in concrete by volume?",
                    options: [
                        { key: "a", text: "50-60%" },
                        { key: "b", text: "85%" },
                        { key: "c", text: "70-75%" },
                        { key: "d", text: "90-95%" }
                    ],
                    answer: "c",
                    explanation: "Aggregates typically make up about 60-80% of the concrete volume and 70-85% of its weight, forming the inert filler matrix. 70-75% is a standard estimate by volume."
                },
                {
                    id: "cm1q005",
                    src: "BASI674-00174",
                    text: "Dutch bond is a modification of",
                    options: [
                        { key: "a", text: "Single Flemish bond" },
                        { key: "b", text: "Stretcher bond" },
                        { key: "c", text: "Header bond" },
                        { key: "d", text: "English bond" }
                    ],
                    answer: "d",
                    explanation: "Dutch bond is a variation of the English bond. It differs by starting each alternate stretching course with a three-quarter bat to create a better overlap and avoid a continuous vertical joint at the corner."
                },
                {
                    id: "cm1q006",
                    src: "BASI674-00197",
                    text: "The brick laid with its breadth parallel to the face of a wall, is known as",
                    options: [
                        { key: "a", text: "Header" },
                        { key: "b", text: "Stretcher" },
                        { key: "c", text: "Closer" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "a",
                    explanation: "A header is a brick laid so that its breadth (the shorter face) is parallel to the face of the wall. A stretcher is a brick laid so that its length (the longer face) is parallel to the face of the wall."
                },
                {
                    id: "cm1q007",
                    src: "BASI674-00217",
                    text: "The type of surveying in which the curvature of the earth is taken into account is called",
                    options: [
                        { key: "a", text: "Geodetic surveying" },
                        { key: "b", text: "Plane surveying" },
                        { key: "c", text: "Preliminary surveying" },
                        { key: "d", text: "Topographical surveying" }
                    ],
                    answer: "a",
                    explanation: "Geodetic surveying considers the earth's curvature for large areas and high-precision work, while plane surveying assumes a flat surface for smaller areas."
                },
                {
                    id: "cm1q008",
                    src: "BASI674-00248",
                    text: "Every 20 m chain should be accurate to within",
                    options: [
                        { key: "a", text: "± 5 mm" },
                        { key: "b", text: "± 2 mm" },
                        { key: "c", text: "± 8 mm" },
                        { key: "d", text: "None" }
                    ],
                    answer: "a",
                    explanation: "The standard tolerance for the accuracy of a surveying chain is ±5 mm for a 20 m chain to ensure the precision of measurements is maintained."
                },
                {
                    id: "cm1q009",
                    src: "BASI674-00268",
                    text: "The height of any point with respect to mean sea level is called",
                    options: [
                        { key: "a", text: "Bench mark" },
                        { key: "b", text: "Datum" },
                        { key: "c", text: "Level surface" },
                        { key: "d", text: "Reduced Level" }
                    ],
                    answer: "d",
                    explanation: "Reduced Level (RL) is the height or elevation of a point above or below the assumed datum, which is typically Mean Sea Level (MSL)."
                },
                {
                    id: "cm1q010",
                    src: "BASI674-00282",
                    text: "The local swelling of a finished plaster, is termed",
                    options: [
                        { key: "a", text: "cracking" },
                        { key: "b", text: "blistering" },
                        { key: "c", text: "dubbing" },
                        { key: "d", text: "hacking" }
                    ],
                    answer: "b",
                    explanation: "Blistering is a plaster defect where small patches of plaster swell out beyond the plastered surface, often caused by trapped air or moisture behind the finished skin."
                },
                {
                    id: "cm1q011",
                    src: "BASI674-00318",
                    text: "The center of gravity of a circular ring will be a ______",
                    options: [
                        { key: "a", text: "line which acts as axis of that ring" },
                        { key: "b", text: "point at center of ring" },
                        { key: "c", text: "point anywhere in its inner circumference" },
                        { key: "d", text: "point on centroid of cross section of ring" }
                    ],
                    answer: "b",
                    explanation: "For a thin, uniform circular ring (hoop), the center of gravity is located at the geometric center of the circle defined by the ring. This is a point in space, not on the ring itself."
                },
                {
                    id: "cm1q012",
                    src: "BASI674-00331",
                    text: "Which one of the following set of internal angles (degree) of a triangle shows well condition triangle?",
                    options: [
                        { key: "a", text: "20, 90, 70" },
                        { key: "b", text: "35, 80, 65" },
                        { key: "c", text: "40, 125, 15" },
                        { key: "d", text: "25, 45, 110" }
                    ],
                    answer: "b",
                    explanation: "A well-conditioned triangle has all angles roughly between 30° and 120°. The set 35, 80, 65 sums to 180° and all angles are within the ideal range, minimizing error propagation in triangulation surveys."
                },
                {
                    id: "cm1q013",
                    src: "BASI674-00382",
                    text: "The unit of measurement is per quintal for the following:",
                    options: [
                        { key: "a", text: "M.S. reinforcement of R.C.C. works" },
                        { key: "b", text: "Rolling shutters" },
                        { key: "c", text: "Collapsible gates with rails" },
                        { key: "d", text: "Expanded metal wire netting" }
                    ],
                    answer: "a",
                    explanation: "Reinforcement steel (M.S. bars) in RCC is measured by weight, i.e., per quintal (100 kg). Other items are typically measured in square meters or numbers."
                },
                {
                    id: "cm1q014",
                    src: "BASI674-00393",
                    text: "Pick up the correct statement in case of water supply",
                    options: [
                        { key: "a", text: "Pipes laid in trenches and pipes fixed to walls are measured separately" },
                        { key: "b", text: "All of the above" },
                        { key: "c", text: "Pipes are classified according to their sizes and quality" },
                        { key: "d", text: "Cutting through walls and floors are included with the item" }
                    ],
                    answer: "b",
                    explanation: "Standard measurement rules for water supply pipes specify separate measurement for different placements, inclusion of ancillary work, and classification by size/quality."
                },
                {
                    id: "cm1q015",
                    src: "BASI674-00418",
                    text: "When a property is purchased with an d_{eq} to sell it off at a profit is termed as",
                    options: [
                        { key: "a", text: "Monopoly value" },
                        { key: "b", text: "Sentimental value" },
                        { key: "c", text: "Reversionary value" },
                        { key: "d", text: "Speculative value" }
                    ],
                    answer: "d",
                    explanation: "Speculative value is the value based on the expectation of a future increase in price, leading to potential profit upon resale."
                }
            ]
        },
        {
            id: "cm1stru",
            name: "Structural Mechanics",
            subject: "Structural Mech",
            accent: "cyan",
            blurb: "11 questions drawn from the Structural Mechanics bank.",
            questions: [
                {
                    id: "cm1q016",
                    src: "STRU935-00091",
                    text: "Maximum bending moment on a simply supported beam of length 8m subjected to 1KN/m load over 4m is:",
                    options: [
                        { key: "a", text: "4.5 kNm" },
                        { key: "b", text: "6 kNm" },
                        { key: "c", text: "8 kNm" },
                        { key: "d", text: "16 kNm" }
                    ],
                    answer: "a",
                    explanation: "The maximum bending moment for a partial UDL on a simply supported beam depends on the load's position. For a symmetric load over the central 4m, the maximum moment is typically less than the full-span UDL case. Standard formulas or analysis yield a value of 4.5 kNm for this specific configuration."
                },
                {
                    id: "cm1q017",
                    src: "STRU935-00127",
                    text: "What is the SI unit of stiffness coefficient?",
                    options: [
                        { key: "a", text: "m/KN" },
                        { key: "b", text: "N/m" },
                        { key: "c", text: "KN" },
                        { key: "d", text: "m" }
                    ],
                    answer: "b",
                    explanation: "Stiffness (k) is defined as force per unit displacement. Its SI unit is therefore Newton per meter (N/m)."
                },
                {
                    id: "cm1q018",
                    src: "STRU935-00145",
                    text: "Carryover moment at simply supported end of member when moment'M' is applied at one end.",
                    options: [
                        { key: "a", text: "- M" },
                        { key: "b", text: "0" },
                        { key: "c", text: "+ M/2" },
                        { key: "d", text: "- M/2" }
                    ],
                    answer: "b",
                    explanation: "Simply Supported (Pinned / Roller) End: A simply supported end offers no rotational restraint. Therefore, applying a moment at the opposite end does not induce any moment (carryover is zero) at a simply supported end.Because M = 0 at a simple support, the carry-over factor (COF) is 0, resulting in a carry-over moment of 0. Fixed End: If the far end is fixed (preventing rotation), the carry-over factor (COF) is +1/2, making the carry-over moment +M/2."
                },
                {
                    id: "cm1q019",
                    src: "STRU935-00173",
                    text: "The beam with two roller support is",
                    options: [
                        { key: "a", text: "Geometrically Unstable" },
                        { key: "b", text: "Statically Unstable" },
                        { key: "c", text: "Stable" },
                        { key: "d", text: "Internally Unstable" }
                    ],
                    answer: "a",
                    explanation: "A beam with two roller supports is geometrically unstable as it can undergo horizontal movement."
                },
                {
                    id: "cm1q020",
                    src: "STRU935-00196",
                    text: "Calculate the maximum deflection of a simply supported beam if the maximum slope at A is 0.0075 radians and the distance of centre of gravity of bending moment diagram to support A is 1.33 metres.",
                    options: [
                        { key: "a", text: "9.975 mm" },
                        { key: "b", text: "9.5 mm" },
                        { key: "c", text: "9.25 mm" },
                        { key: "d", text: "9.785 mm" }
                    ],
                    answer: "a",
                    explanation: "The maximum deflection is given by δ_max = θ_A * x̄, where x̄ is the distance from support A to the centroid of the M/EI diagram. Here, θ_A = 0.0075 rad, x̄ = 1.33 m. So, δ_max = 0.0075 * 1.33 = 0.009975 m = 9.975 mm."
                },
                {
                    id: "cm1q021",
                    src: "STRU935-00215",
                    text: "A positive moment by standard sign convention should bend a horizontal beam:",
                    options: [
                        { key: "a", text: "Concave upward" },
                        { key: "b", text: "Concave downward" },
                        { key: "c", text: "Convex upward" },
                        { key: "d", text: "Can’t say" }
                    ],
                    answer: "a",
                    explanation: "A positive bending moment causes compression in the top fibers and tension in the bottom fibers, resulting in a concave upward shape (smiling)."
                },
                {
                    id: "cm1q022",
                    src: "STRU935-00234",
                    text: "Radius of the beam is ______ bending moment.",
                    options: [
                        { key: "a", text: "Equal" },
                        { key: "b", text: "Directly proportion" },
                        { key: "c", text: "Inversely proportion" },
                        { key: "d", text: "Coincides" }
                    ],
                    answer: "c",
                    explanation: "The radius of curvature (R) is inversely proportional to the bending moment (M), as R = EI/M."
                },
                {
                    id: "cm1q023",
                    src: "STRU935-00262",
                    text: "The equation for resultant stress on inclined plane is",
                    options: [
                        { key: "a", text: "Both a and c" },
                        { key: "b", text: "σ_r = √(σ₁² - σ₂²)" },
                        { key: "c", text: "σ_r = √(σ₁² + σ₂²)" },
                        { key: "d", text: "σ_r = √(σ_n² + σ_t²)" }
                    ],
                    answer: "d",
                    explanation: "The resultant stress on an inclined plane is the vector sum of the normal stress (σ_n) acting perpendicular to the plane and the tangential or shear stress (τ) acting along it. Being perpendicular to each other, their magnitudes combine by Pythagoras, so σ_r = √(σ_n² + τ²); the symbol σ_t is used here for that tangential component."
                },
                {
                    id: "cm1q024",
                    src: "STRU935-00293",
                    text: "For keeping the stress wholly compressive the load may be applied on a circular column anywhere within a concentric circle of diameter ………",
                    options: [
                        { key: "a", text: "D/2" },
                        { key: "b", text: "D/4" },
                        { key: "c", text: "D/3" },
                        { key: "d", text: "D/8" }
                    ],
                    answer: "b",
                    explanation: "For a circular column, the kernel (core) is a circle of diameter D/4. Load applied within this area results in no tension."
                },
                {
                    id: "cm1q025",
                    src: "STRU935-00332",
                    text: "Drawing torsional moment diagram is similar to",
                    options: [
                        { key: "a", text: "Drawing shear force diagram carrying UDL" },
                        { key: "b", text: "Drawing bending moment diagram carrying point loads" },
                        { key: "c", text: "Drawing shear force diagram carrying point loads" },
                        { key: "d", text: "Drawing bending moment diagram carrying UDL" }
                    ],
                    answer: "c",
                    explanation: "The internal torsional moment in a shaft changes abruptly at the point of application of a concentrated external torque, analogous to how the shear force in a beam changes abruptly at a point load. Distributed torque leads to a linear variation, similar to a UDL's effect on shear force."
                },
                {
                    id: "cm1q026",
                    src: "STRU935-00339",
                    text: "If SFD is horizontal and BMD has vertical line",
                    options: [
                        { key: "a", text: "Moment is acting" },
                        { key: "b", text: "No force is acting" },
                        { key: "c", text: "Point load acting" },
                        { key: "d", text: "UDL acting at span" }
                    ],
                    answer: "a",
                    explanation: "A horizontal line on the Shear Force Diagram (SFD) indicates constant shear force, meaning no distributed load (w=0). A vertical line on the Bending Moment Diagram (BMD) indicates a discontinuity or jump, which is caused by an applied concentrated moment at that point."
                }
            ]
        },
        {
            id: "cm1desi",
            name: "Design of Structures",
            subject: "Design of Str",
            accent: "slate",
            blurb: "9 questions drawn from the Design of Structures bank.",
            questions: [
                {
                    id: "cm1q027",
                    src: "DESI787-00093",
                    text: "Maximum spacing of main bars for 5 inch thick RCC slab is",
                    options: [
                        { key: "a", text: "300 mm" },
                        { key: "b", text: "250 mm" },
                        { key: "c", text: "375 mm" },
                        { key: "d", text: "450 mm" }
                    ],
                    answer: "a",
                    explanation: "As per IS 456:2000, Clause 26.3.3, the maximum spacing of main bars in a slab should not exceed three times the effective depth or 300 mm, whichever is smaller. For a 5-inch (125 mm) slab, effective depth is about 100 mm. 3 * 100 = 300 mm. So, 300 mm is the maximum."
                },
                {
                    id: "cm1q028",
                    src: "DESI787-00106",
                    text: "The maximum tension reinforcement in beam should not be less than ......",
                    options: [
                        { key: "a", text: "2%" },
                        { key: "b", text: "4%" },
                        { key: "c", text: "6%" },
                        { key: "d", text: "0.04%" }
                    ],
                    answer: "b",
                    explanation: "As per IS 456:2000, Clause 26.5.1.1, the maximum tension reinforcement in beams should not exceed 4% of the gross cross-sectional area (bd)."
                },
                {
                    id: "cm1q029",
                    src: "DESI787-00152",
                    text: "When the bolts are subjected to reversal of stresses, the most suitable type of Bolt is",
                    options: [
                        { key: "a", text: "Black bolt" },
                        { key: "b", text: "Ordinary unfinished bolt" },
                        { key: "c", text: "High strength bolt" },
                        { key: "d", text: "Turned and fitted bolt" }
                    ],
                    answer: "d",
                    explanation: "Turned and fitted bolts are machined to precise tolerances to fit snugly in reamed holes. This prevents slip and bearing under load reversal, making them suitable for such conditions."
                },
                {
                    id: "cm1q030",
                    src: "DESI787-00168",
                    text: "If the independent spread footing of two columns are connected by a beam, it is called",
                    options: [
                        { key: "a", text: "isolated footing" },
                        { key: "b", text: "Combined footing" },
                        { key: "c", text: "Strap footing" },
                        { key: "d", text: "Raft footing" }
                    ],
                    answer: "c",
                    explanation: "A strap footing (or cantilever footing) consists of two isolated footings connected by a beam (strap) to transfer moments and shear between them, making it different from a single combined footing or raft."
                },
                {
                    id: "cm1q031",
                    src: "DESI787-00204",
                    text: "Proof stress for the minimum bolt tension is:",
                    options: [
                        { key: "a", text: "0.7 fub" },
                        { key: "b", text: "0.5 fub" },
                        { key: "c", text: "0.7 fy" },
                        { key: "d", text: "0.5 fy" }
                    ],
                    answer: "a",
                    explanation: "As per IS 800:2007, the proof load for high-strength bolts (for pretension) is taken as 0.7 times the ultimate tensile strength of the bolt (fub)."
                },
                {
                    id: "cm1q032",
                    src: "DESI787-00226",
                    text: "What is Concrete Technology?",
                    options: [
                        { key: "a", text: "Concrete Technology deals with the study of bricks" },
                        { key: "b", text: "Concrete Technology deals with the study of properties of concrete" },
                        { key: "c", text: "Concrete Technology is the study of building materials" },
                        { key: "d", text: "None of the mentioned" }
                    ],
                    answer: "b",
                    explanation: "Concrete Technology is a branch of civil engineering focused on the study of the properties, mix design, and applications of concrete as a construction material."
                },
                {
                    id: "cm1q033",
                    src: "DESI787-00246",
                    text: "The final operation of finishing the concrete surface is called ......",
                    options: [
                        { key: "a", text: "Troweling" },
                        { key: "b", text: "Floating" },
                        { key: "c", text: "Screening" },
                        { key: "d", text: "Compacting" }
                    ],
                    answer: "a",
                    explanation: "Troweling is the final finishing operation performed after floating. A steel trowel is used to produce a hard, smooth, and dense surface. It is done when the concrete has stiffened further and any water sheen has disappeared."
                },
                {
                    id: "cm1q034",
                    src: "DESI787-00263",
                    text: "After the curing of 28 days, the concrete gains strength upto ......",
                    options: [
                        { key: "a", text: "40%" },
                        { key: "b", text: "100%" },
                        { key: "c", text: "80%" },
                        { key: "d", text: "60%" }
                    ],
                    answer: "b",
                    explanation: "The characteristic compressive strength of concrete (f_ck) is defined as its 28-day strength. Therefore, after 28 days of proper curing, concrete is expected to have achieved 100% of its designed strength."
                },
                {
                    id: "cm1q035",
                    src: "DESI787-00304",
                    text: "Wind Pressure at any height of structure does not depend on ______.",
                    options: [
                        { key: "a", text: "Velocity and density of air" },
                        { key: "b", text: "Angle of wind attack" },
                        { key: "c", text: "Topography of ground surface" },
                        { key: "d", text: "Material of structure" }
                    ],
                    answer: "d",
                    explanation: "Wind pressure is a function of wind speed (which depends on height, topography, etc.), air density, and the shape of the structure (which influences pressure coefficients). The material of the structure affects its strength and response to the pressure, but not the magnitude of the wind pressure itself."
                }
            ]
        },
        {
            id: "cm1soil",
            name: "Soil Mechanics and Foundation",
            subject: "Soil Mechanics",
            accent: "amber",
            blurb: "14 questions drawn from the Soil Mechanics and Foundation bank.",
            questions: [
                {
                    id: "cm1q036",
                    src: "SOIL136-00099",
                    text: "The shear deformation of soil in a building can cause ______ of the following.",
                    options: [
                        { key: "a", text: "Sinking of footing" },
                        { key: "b", text: "Slide in an earth embankment" },
                        { key: "c", text: "All of the mentioned" },
                        { key: "d", text: "Movement of wedge" }
                    ],
                    answer: "c",
                    explanation: "Shear deformation or failure can manifest in various ways, including bearing capacity failure (sinking footing), slope failure (slide in embankment), and lateral earth pressure failure (movement of a wedge)."
                },
                {
                    id: "cm1q037",
                    src: "SOIL136-00114",
                    text: "In wet soil mass, air occupies one-seventh of its volume and Water occupies one- eighth of its volume. What will be the ratio of volume of voids with respect to the total volume?",
                    options: [
                        { key: "a", text: "0.329" },
                        { key: "b", text: "0.268" },
                        { key: "c", text: "0.432" },
                        { key: "d", text: "0.279" }
                    ],
                    answer: "d",
                    explanation: "Volume of air, V_a = V/7. Volume of water, V_w = V/8. Volume of voids, V_v = V_a + V_w = V/7 + V/8 = (15/56)V = 0.2679V ≈ 0.268. The ratio V_v/V is therefore 0.268."
                },
                {
                    id: "cm1q038",
                    src: "SOIL136-00163",
                    text: "For liquid fluids, will capillarity rise (or fall) increase or decrease with rise in temperature?",
                    options: [
                        { key: "a", text: "Increase" },
                        { key: "b", text: "Remain constant" },
                        { key: "c", text: "Decrease" },
                        { key: "d", text: "First decrease then increase" }
                    ],
                    answer: "c",
                    explanation: "Surface tension (σ) of a liquid decreases with an increase in temperature. Since capillary rise h is directly proportional to surface tension (h = 4σcosθ / (γ_w d)), the capillary rise will decrease as temperature increases."
                },
                {
                    id: "cm1q039",
                    src: "SOIL136-00185",
                    text: "The seepage force in a soil, is",
                    options: [
                        { key: "a", text: "Perpendicular to the equipotential lines" },
                        { key: "b", text: "Proportional to the exit gradient" },
                        { key: "c", text: "Proportional to the head loss" },
                        { key: "d", text: "All the above" }
                    ],
                    answer: "d",
                    explanation: "Seepage force per unit volume is j = i * γ_w. Its direction is the direction of flow, which is perpendicular to equipotential lines. The magnitude is proportional to the hydraulic gradient (i). The exit gradient is a specific gradient at the outflow point, and head loss is related to the gradient over a length."
                },
                {
                    id: "cm1q040",
                    src: "SOIL136-00214",
                    text: "The relationship between seepage force J and seepage pressure ps is given by ______",
                    options: [
                        { key: "a", text: "J = ps * A" },
                        { key: "b", text: "J = ps + A" },
                        { key: "c", text: "J = ps - A" },
                        { key: "d", text: "J = ps / A" }
                    ],
                    answer: "a",
                    explanation: "Seepage pressure (p_s) is the pressure exerted by seepage water on the soil skeleton. Seepage force (J) is the total force resulting from this pressure over a cross-sectional area A. Therefore, J = p_s * A."
                },
                {
                    id: "cm1q041",
                    src: "SOIL136-00220",
                    text: "In an un-drained test on saturated clays, both σ₁ and σ₃ is independent of ______",
                    options: [
                        { key: "a", text: "Pore pressure" },
                        { key: "b", text: "Shear strength" },
                        { key: "c", text: "Effective pressure" },
                        { key: "d", text: "Cell pressure" }
                    ],
                    answer: "d",
                    explanation: "In an un-drained test on saturated clays, the total principal stresses (σ₁ and σ₃) are controlled by the applied cell pressure and deviator stress. The resulting undrained shear strength is independent of the initial confining (cell) pressure for a normally consolidated clay."
                },
                {
                    id: "cm1q042",
                    src: "SOIL136-00250",
                    text: "The normal stresses acting on planes of the soil are known as ______.",
                    options: [
                        { key: "a", text: "Major principal stresses" },
                        { key: "b", text: "Principal stresses" },
                        { key: "c", text: "Minor principal stresses" },
                        { key: "d", text: "Principal planes" }
                    ],
                    answer: "b",
                    explanation: "Principal stresses (σ₁, σ₂, σ₃) are the normal stresses acting on the principal planes where the shear stress is zero."
                },
                {
                    id: "cm1q043",
                    src: "SOIL136-00288",
                    text: "Compute the active pressure intensity when the backfill has unit weight of 18 KN/m³ and height of wall is 6 m. The angle of internal friction is 30°.",
                    options: [
                        { key: "a", text: "45 KN/m³" },
                        { key: "b", text: "37 KN/m³" },
                        { key: "c", text: "36 KN/m³" },
                        { key: "d", text: "27 KN/m³" }
                    ],
                    answer: "c",
                    explanation: "Pa = Ka * γ * H. Ka=(1-sin30)/(1+sin30)=1/3. Pa=(1/3)*18*6=36 kN/m²."
                },
                {
                    id: "cm1q044",
                    src: "SOIL136-00298",
                    text: "The resultant active pressure per unit length of wall for dry backfill with no surcharge is P_a=",
                    options: [
                        { key: "a", text: "K_a H²" },
                        { key: "b", text: "K_a γ H²" },
                        { key: "c", text: "K_a γ H" },
                        { key: "d", text: "1/2 K_a γ H²" }
                    ],
                    answer: "d",
                    explanation: "The total active thrust per unit length of wall is the integral of the triangular pressure distribution, resulting in the formula (1/2) * K_a * γ * H²."
                },
                {
                    id: "cm1q045",
                    src: "SOIL136-00330",
                    text: "The cone resistance qc, for sandy silt type of soil is ______.",
                    options: [
                        { key: "a", text: "3.5" },
                        { key: "b", text: "6" },
                        { key: "c", text: "5" },
                        { key: "d", text: "Varies with density" }
                    ],
                    answer: "c",
                    explanation: "While cone resistance (qc) values can vary, a typical approximate value for sandy silt is around 5 MPa. It's important to note that this value is highly dependent on the soil's density and other specific conditions."
                },
                {
                    id: "cm1q046",
                    src: "SOIL136-00357",
                    text: "Which of the following is a characteristic of general shear failure?",
                    options: [
                        { key: "a", text: "All of the mentioned" },
                        { key: "b", text: "Failure is sudden" },
                        { key: "c", text: "Buiqing of shearing mass of soil" },
                        { key: "d", text: "Failure is accompanied by compressibility of soil" }
                    ],
                    answer: "a",
                    explanation: "General shear failure is characterized by a well-defined failure pattern: it is often sudden and catastrophic, accompanied by a significant 'bulging' or heaving of the soil mass on the sides, and occurs after only small settlements (low compressibility)."
                },
                {
                    id: "cm1q047",
                    src: "SOIL136-00369",
                    text: "Which of the following is a limitation, of assumption in Terzaghi’s analysis?",
                    options: [
                        { key: "a", text: "A change when the soil is compressed and strip footing has a rough base" },
                        { key: "b", text: "Soil is homogeneous" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "b",
                    explanation: "A key assumption in Terzaghi's original theory is that the soil is homogeneous and isotropic. This is often not the case in reality, where soil strata can be layered and anisotropic, which is a limitation of the theory."
                },
                {
                    id: "cm1q048",
                    src: "SOIL136-00392",
                    text: "Which of the below is not a preliminary consideration for building a foundation?",
                    options: [
                        { key: "a", text: "Bearing capacity of soil" },
                        { key: "b", text: "Ground water condition" },
                        { key: "c", text: "Settlement control" },
                        { key: "d", text: "Soil organisms" }
                    ],
                    answer: "d",
                    explanation: "Soil organisms are not a primary engineering consideration for foundation design. The key factors are the soil's bearing capacity, groundwater conditions, and potential for settlement."
                },
                {
                    id: "cm1q049",
                    src: "SOIL136-00425",
                    text: "Dynamic formula does not indicate about ______.",
                    options: [
                        { key: "a", text: "Allowable load" },
                        { key: "b", text: "Temporary change in soil structure and Future settlement" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "Both (a) and (b)" }
                    ],
                    answer: "b",
                    explanation: "A major limitation of dynamic formulae is that they do not account for soil setup (increase in strength after driving in clays) or relaxation (decrease in strength after driving in sands), nor do they predict the long-term settlement of the pile under load."
                }
            ]
        },
        {
            id: "cm1watr",
            name: "Basic Water Resources Engineering",
            subject: "Water Resources",
            accent: "emerald",
            blurb: "10 questions drawn from the Basic Water Resources Engineering bank.",
            questions: [
                {
                    id: "cm1q050",
                    src: "WATE701-00117",
                    text: "A beaker is filled with a liquid up to the mark of one litre and weighed. The weight of the liquid is found to be 6.5 N. The specific weight of the liquid will be",
                    options: [
                        { key: "a", text: "6.5 N/m³" },
                        { key: "b", text: "9810 N/m³" },
                        { key: "c", text: "6500 N/m³" },
                        { key: "d", text: "0.0065 N/m³" }
                    ],
                    answer: "c",
                    explanation: "Specific weight (γ) = Weight / Volume. Volume = 1 litre = 0.001 m³. Weight = 6.5 N. Therefore, γ = 6.5 N / 0.001 m³ = 6500 N/m³."
                },
                {
                    id: "cm1q051",
                    src: "WATE701-00132",
                    text: "Which of the following is adopted as standard recouping rain gauge?",
                    options: [
                        { key: "a", text: "Symon’s rain gauge" },
                        { key: "b", text: "Natural syphon type" },
                        { key: "c", text: "Tipping bucket type" },
                        { key: "d", text: "Weighing bucket type" }
                    ],
                    answer: "b",
                    explanation: "The natural syphon type (also known as the standard syphon rain gauge) is adopted as the standard non-recording rain gauge in many countries, including India. It provides a daily rainfall measurement."
                },
                {
                    id: "cm1q052",
                    src: "WATE701-00183",
                    text: "Calculate the total discharge through a rectangular channel having critical depth of 1.13m and the base width of the channel is 4m.",
                    options: [
                        { key: "a", text: "28 m³/s" },
                        { key: "b", text: "20 m³/s" },
                        { key: "c", text: "24 m³/s" },
                        { key: "d", text: "16 m³/s" }
                    ],
                    answer: "d",
                    explanation: "For a rectangular channel the critical depth is y_c = (q²/g)^(1/3), so cubing gives q² = y_c³ × g = 1.13³ × 9.81 = 14.15, and the discharge per metre width is q = 3.76 m²/s. Multiplying by the 4 m width gives Q = 15.04 m³/s, so the nearest listed discharge is 16 m³/s."
                },
                {
                    id: "cm1q053",
                    src: "WATE701-00186",
                    text: "The minimum specific energy of a rectangular channel is 1.3m and the base width of the channel is 10m, calculate the discharge through the channel.",
                    options: [
                        { key: "a", text: "15 m³/s" },
                        { key: "b", text: "10 m³/s" },
                        { key: "c", text: "20m³/s" },
                        { key: "d", text: "25m³/s" }
                    ],
                    answer: "a",
                    explanation: "E_min = 1.5 y_c, so 1.3=1.5 y_c, y_c=0.8667m. For rectangular, y_c = (q²/g)^(1/3), so 0.8667³ = q²/9.81, 0.651 = q²/9.81, q²=6.386, q=2.527 m²/s. Q = q*B = 2.527*10=25.27 m³/s. Not matching; perhaps E_min=1.3 means y_c=1.3/1.5=0.8667, then q=√(g y_c³)=√(9.81*0.651)=√6.386=2.527, Q=25.27. But options include 25. Alternatively, if E_min is for critical flow, and discharge is maximum? Perhaps the channel is flowing with critical depth. Recheck: E_min = 1.5 y_c =1.3, so y_c=0.8667. Then q = √(g y_c³)=√(9.81*0.651)=2.527, Q=25.27. So (d) 25 m³/s is correct."
                },
                {
                    id: "cm1q054",
                    src: "WATE701-00225",
                    text: "If the depth of water in an open channel is less than the critical depth, the flow is called",
                    options: [
                        { key: "a", text: "critical flow" },
                        { key: "b", text: "torrential flow" },
                        { key: "c", text: "tranquil flow" },
                        { key: "d", text: "turbulent flow" }
                    ],
                    answer: "b",
                    explanation: "Flow with a depth less than critical depth (y &lt; y_c) is supercritical flow. This type of flow is characterized by high velocity and shallow depth and is often referred to as 'torrential' or 'shooting' flow. 'Tranquil flow' is another name for subcritical flow (y &gt; y_c)."
                },
                {
                    id: "cm1q055",
                    src: "WATE701-00256",
                    text: "Hydraulic jump can occur under all of the following conditions except",
                    options: [
                        { key: "a", text: "On the upstream side of the sluices" },
                        { key: "b", text: "where the gradient suddenly changes from a steep slope to a flat slope" },
                        { key: "c", text: "When water moving in shooting flow impacts with water having a larger depth with streaming flow" },
                        { key: "d", text: "At the foot of the spillway" }
                    ],
                    answer: "a",
                    explanation: "Hydraulic jumps occur downstream of structures like spillways (A), at slope transitions (B), and when supercritical flow meets deeper subcritical flow (C). They do not occur on the upstream side of sluices; the flow there is typically subcritical approaching the gate."
                },
                {
                    id: "cm1q056",
                    src: "WATE701-00285",
                    text: "Which one of the following is true about Bulk Modulus of elasticity?",
                    options: [
                        { key: "a", text: "It is the ratio of compressive stress to volumetric strain" },
                        { key: "b", text: "It is the ratio of compressive stress to linear strain" },
                        { key: "c", text: "It is the ratio of tensile stress to volumetric strain" },
                        { key: "d", text: "It is the ratio of tensile stress to linear strain" }
                    ],
                    answer: "a",
                    explanation: "The Bulk Modulus (K) is defined as K = -V (dP/dV), which is the ratio of compressive stress (pressure change) to volumetric strain (fractional change in volume)."
                },
                {
                    id: "cm1q057",
                    src: "WATE701-00294",
                    text: "The rise in the level of a liquid in a tube is h. What will be the new rise in liquid level if the tube is inclined at an angle of 30° to the vertical?",
                    options: [
                        { key: "a", text: "2h⁄√3" },
                        { key: "b", text: "h/2" },
                        { key: "c", text: "h" },
                        { key: "d", text: "0" }
                    ],
                    answer: "a",
                    explanation: "Vertical rise = h (same as before). Inclined length = h / cos(30°) = h / (√3/2) = 2h/√3. So, new rise along tube = 2h/√3."
                },
                {
                    id: "cm1q058",
                    src: "WATE701-00347",
                    text: "Variations in the hydrograph base is acceptable up to",
                    options: [
                        { key: "a", text: "± 5 %" },
                        { key: "b", text: "± 15 %" },
                        { key: "c", text: "± 25 %" },
                        { key: "d", text: "± 20 %" }
                    ],
                    answer: "d",
                    explanation: "When developing a unit hydrograph from multiple storm events, a variation of up to ±20% in the base time (time base) of the derived hydrographs is generally considered acceptable for them to be averaged into a single representative unit hydrograph."
                },
                {
                    id: "cm1q059",
                    src: "WATE701-00365",
                    text: "Instantaneous unit hydrograph is",
                    options: [
                        { key: "a", text: "Unit duration" },
                        { key: "b", text: "Unit excess rainfall" },
                        { key: "c", text: "Infinitely small duration" },
                        { key: "d", text: "Both b and c" }
                    ],
                    answer: "d",
                    explanation: "An Instantaneous Unit Hydrograph (IUH) results from a unit depth (e.g., 1 cm) of effective rainfall (unit excess rainfall) occurring instantaneously (infinitely small duration) over the catchment."
                }
            ]
        },
        {
            id: "cm1hydr",
            name: "Hydropower",
            subject: "Hydropower",
            accent: "cyan",
            blurb: "9 questions drawn from the Hydropower bank.",
            questions: [
                {
                    id: "cm1q060",
                    src: "HYDR626-00090",
                    text: "The ratio of diameter of jet to diameter of runner is ______",
                    options: [
                        { key: "a", text: "1:3" },
                        { key: "b", text: "1:6" },
                        { key: "c", text: "4:10" },
                        { key: "d", text: "3:4" }
                    ],
                    answer: "b",
                    explanation: "The jet ratio (m) is defined as D/d, where D is runner diameter and d is jet diameter. For Pelton wheels, m typically ranges from 6 to 35. Therefore, the ratio d:D is 1:m, commonly around 1:12, but the closest standard answer among options is 1:6."
                },
                {
                    id: "cm1q061",
                    src: "HYDR626-00107",
                    text: "In what type of turbine water enters radial direction and leaves axial direction?",
                    options: [
                        { key: "a", text: "Mixed flow turbine" },
                        { key: "b", text: "Axial flow turbine" },
                        { key: "c", text: "Outward flow turbine" },
                        { key: "d", text: "Tangential flow turbine" }
                    ],
                    answer: "a",
                    explanation: "A Francis turbine is a classic example of a mixed flow turbine. Water enters the runner in a radial direction and is turned so that it leaves primarily in an axial direction, parallel to the shaft."
                },
                {
                    id: "cm1q062",
                    src: "HYDR626-00124",
                    text: "The correct sequence in direction of flow of water for installation in a hydropower plant is",
                    options: [
                        { key: "a", text: "Reservoir, surge tank, penstock, turbine" },
                        { key: "b", text: "Reservoir, penstock, turbine, surge tank" },
                        { key: "c", text: "Reservoir, penstock, surge tank, turbine" },
                        { key: "d", text: "Reservoir, surge tank, turbine, penstock" }
                    ],
                    answer: "c",
                    explanation: "Water flows from the reservoir under pressure through the penstock. The surge tank is a standpipe connected to the penstock to absorb pressure variations. Water then continues down the penstock to the turbine. The tailrace is after the turbine. The surge tank is off the main penstock line, not directly in the sequential flow path."
                },
                {
                    id: "cm1q063",
                    src: "HYDR626-00149",
                    text: "The water from penstocks enters the ______ which is spiral in shape and the area of cross section of casing goes on decreasing gradually.",
                    options: [
                        { key: "a", text: "guide wheel" },
                        { key: "b", text: "draft tube" },
                        { key: "c", text: "casing" },
                        { key: "d", text: "runner" }
                    ],
                    answer: "c",
                    explanation: "In a reaction turbine (like a Francis turbine), the water from the penstock enters a spiral casing. This casing is designed to distribute water around the entire circumference of the runner with uniform velocity and decreasing cross-sectional area to maintain constant velocity."
                },
                {
                    id: "cm1q064",
                    src: "HYDR626-00189",
                    text: "Which statement about surge tank is wrong?",
                    options: [
                        { key: "a", text: "Surge tanks are totally closed to avoid entry of unwanted objects to penstock" },
                        { key: "b", text: "A decrease in load demands cause a rise in water level in surge tank" },
                        { key: "c", text: "Ideal location of surge tank is at the turbine inlet" },
                        { key: "d", text: "Surge tanks are installed to reduce harm effects of water hammer phenomenon" }
                    ],
                    answer: "c",
                    explanation: "The surge tank is located near the beginning of the penstock, not exactly at the turbine inlet. Its function is to absorb pressure surges and mitigate water hammer during load changes. When the load decreases, the water level in the surge tank rises because of reduced flow demand. Surge tanks are open to atmosphere (sometimes covered with screens), not “totally closed.”"
                },
                {
                    id: "cm1q065",
                    src: "HYDR626-00211",
                    text: "Shaft spillway can be adopted at dam sites in",
                    options: [
                        { key: "a", text: "Narrow canyons where abutments rise mildly" },
                        { key: "b", text: "Narrow canyons where abutment rise steeply" },
                        { key: "c", text: "Wide canyons where abutment rise steeply" },
                        { key: "d", text: "None of them" }
                    ],
                    answer: "b",
                    explanation: "A shaft (or morning glory) spillway is ideal for narrow canyons with steeply rising abutments, as the funnel-shaped inlet can be integrated into the canyon wall."
                },
                {
                    id: "cm1q066",
                    src: "HYDR626-00238",
                    text: "Which component of a hydropower plant is responsible for filtering debris from the water before it enters the turbine?",
                    options: [
                        { key: "a", text: "Spillway" },
                        { key: "b", text: "Dam" },
                        { key: "c", text: "Trash rack" },
                        { key: "d", text: "Intake gate" }
                    ],
                    answer: "c",
                    explanation: "A trash rack is a screen, typically made of metal bars, placed at the intake to the water conveyance system to prevent large debris from entering and damaging the turbines or clogging the system."
                },
                {
                    id: "cm1q067",
                    src: "HYDR626-00279",
                    text: "Which type of hydropower plant is most commonly used for small-scale electricity generation in rural areas?",
                    options: [
                        { key: "a", text: "Reservoir plant" },
                        { key: "b", text: "Micro-Hydropower plant" },
                        { key: "c", text: "Tidal plant" },
                        { key: "d", text: "Pumped-storage plant" }
                    ],
                    answer: "b",
                    explanation: "Micro-hydropower plants are small-scale systems, typically generating up to 100 kW. They are ideal for remote, rural areas as they can provide power to small communities or industries without connection to a main grid, often using run-of-river designs with minimal environmental impact."
                },
                {
                    id: "cm1q068",
                    src: "HYDR626-00295",
                    text: "Largest upcoming hydropower plant of Nepal is",
                    options: [
                        { key: "a", text: "Upper Kamali Hydroelectric Project" },
                        { key: "b", text: "Arun III Hydroelectric Project" },
                        { key: "c", text: "Budhigandaki Hydroelectric Project" },
                        { key: "d", text: "Tila I Hydroelectric Project" }
                    ],
                    answer: "c",
                    explanation: "The Budhigandaki Hydroelectric Project is a planned storage-type project with a capacity of 1,200 MW. It is expected to be the largest hydroelectric facility in Nepal upon completion, providing significant energy storage and peak power generation."
                }
            ]
        },
        {
            id: "cm1irri",
            name: "Irrigation and Drainage",
            subject: "Irrigation",
            accent: "emerald",
            blurb: "11 questions drawn from the Irrigation and Drainage bank.",
            questions: [
                {
                    id: "cm1q069",
                    src: "IRRI951-00021",
                    text: "Which type of canal does not need cross drainage structures?",
                    options: [
                        { key: "a", text: "Side Slope Canal" },
                        { key: "b", text: "Contour Canal" },
                        { key: "c", text: "Watershed Canal" },
                        { key: "d", text: "Field Channel" }
                    ],
                    answer: "c",
                    explanation: "A watershed canal runs along the ridge line (or watershed) dividing two drainage areas. Since it is located at the highest point between catchments, it does not cross any natural streams or drainage lines - hence, no cross drainage structures (like aqueducts or culverts) are required. Side Slope Canal: Runs along a slope; may intersect streams -&gt; cross drainage structures often needed. Contour Canal: Follows the contour but may still cross small drains. Field Channel: Carries water to fields; may not need large structures, but not the correct classification in this context."
                },
                {
                    id: "cm1q070",
                    src: "IRRI951-00118",
                    text: "The vertical component of the earthquake wave which produces adverse effects on the stability of a dam when is acting in ______",
                    options: [
                        { key: "a", text: "downward direction" },
                        { key: "b", text: "upward direction" },
                        { key: "c", text: "Both (a) and (b)" },
                        { key: "d", text: "any direction" }
                    ],
                    answer: "b",
                    explanation: "An upward vertical seismic acceleration reduces the effective weight of the dam, which is crucial for stability against sliding and overturning. This reduction in resisting weight has an adverse effect on the dam's stability."
                },
                {
                    id: "cm1q071",
                    src: "IRRI951-00151",
                    text: "Which of the following factor do not affect seepage loss?",
                    options: [
                        { key: "a", text: "Underground water-table condition" },
                        { key: "b", text: "The porosity of the soil" },
                        { key: "c", text: "Physical properties of the canal water" },
                        { key: "d", text: "Prevailing wind velocity in the region" }
                    ],
                    answer: "d",
                    explanation: "Seepage loss is governed by soil properties (porosity, permeability), hydraulic gradient (influenced by water table), and water level. Wind velocity affects evaporation loss, not seepage."
                },
                {
                    id: "cm1q072",
                    src: "IRRI951-00158",
                    text: "What is the most important point to be considered while fixing the canal capacity?",
                    options: [
                        { key: "a", text: "Water Demand" },
                        { key: "b", text: "Average Demand" },
                        { key: "c", text: "Keenest Demand" },
                        { key: "d", text: "Demand" }
                    ],
                    answer: "c",
                    explanation: "The canal must be designed to supply the maximum water requirement (keenest demand) of the crops it serves, ensuring sufficient water is available during the peak irrigation period."
                },
                {
                    id: "cm1q073",
                    src: "IRRI951-00204",
                    text: "What is the first step in soil preparation before sowing of seeds?",
                    options: [
                        { key: "a", text: "Levelling" },
                        { key: "b", text: "Pre-watering" },
                        { key: "c", text: "Manuring" },
                        { key: "d", text: "Ploughing" }
                    ],
                    answer: "d",
                    explanation: "Ploughing (or tilling) is the primary and first step in soil preparation. It loosens the soil, improves aeration, and facilitates the incorporation of organic matter."
                },
                {
                    id: "cm1q074",
                    src: "IRRI951-00222",
                    text: "Which type of area is large in quantity compared to others?",
                    options: [
                        { key: "a", text: "Culturable Cultivated Area" },
                        { key: "b", text: "Culturable Commanded Area (C.C.A)" },
                        { key: "c", text: "Gross Commanded Area (G.C.A)" },
                        { key: "d", text: "Culturable Uncultivated Area" }
                    ],
                    answer: "c",
                    explanation: "Gross Commanded Area (GCA) is the total area that can be irrigated by a system. It includes the Culturable Commanded Area (CCA) as well as unculturable areas like forests, roads, and buildings. Therefore, GCA is always larger than CCA."
                },
                {
                    id: "cm1q075",
                    src: "IRRI951-00244",
                    text: "In case of aqueduct and syphon aqueduct, the maximum permissible reduction for piers width in waterway from Lacey’s perimeter is:",
                    options: [
                        { key: "a", text: "10%" },
                        { key: "b", text: "20%" },
                        { key: "c", text: "30%" },
                        { key: "d", text: "45%" }
                    ],
                    answer: "c",
                    explanation: "The combined width of the piers in the waterway can be reduced up to a maximum of 30% of Lacey's wetted perimeter without significantly affecting the hydraulic efficiency of the structure."
                },
                {
                    id: "cm1q076",
                    src: "IRRI951-00272",
                    text: "Due to inadequate drainage which factor causes waterlogging with constant percolation?",
                    options: [
                        { key: "a", text: "Over and Intensive Irrigation" },
                        { key: "b", text: "Impervious Obstruction" },
                        { key: "c", text: "Inadequate Surface Drainage" },
                        { key: "d", text: "Flat Topography" }
                    ],
                    answer: "a",
                    explanation: "When irrigation is applied intensively and in excess of crop needs, and the natural or artificial drainage is inadequate, the constant percolation causes the water table to rise, leading to water-logging."
                },
                {
                    id: "cm1q077",
                    src: "IRRI951-00305",
                    text: "In design of surface drainage in Terai region the maximum water level persist for one day is assumed as",
                    options: [
                        { key: "a", text: "100 mm" },
                        { key: "b", text: "200 mm" },
                        { key: "c", text: "300 mm" },
                        { key: "d", text: "400 mm" }
                    ],
                    answer: "c",
                    explanation: "The design criterion often allows for a maximum water level of 300 mm to persist for a very short duration (one day) without causing significant damage to most field crops."
                },
                {
                    id: "cm1q078",
                    src: "IRRI951-00316",
                    text: "What is the main aim of mean water training?",
                    options: [
                        { key: "a", text: "Provide Sufficient Water Depth" },
                        { key: "b", text: "To Constant Velocity" },
                        { key: "c", text: "Flood Control" },
                        { key: "d", text: "Effective Disposal of Suspended and Bed Loads" }
                    ],
                    answer: "d",
                    explanation: "Mean Water Training is conducted at the average river flow level. Its primary objective is to train the river to flow in a defined channel and to efficiently transport its sediment load (both suspended and bed load) to prevent silting and maintain a stable course."
                },
                {
                    id: "cm1q079",
                    src: "IRRI951-00337",
                    text: "A leeve on flood",
                    options: [
                        { key: "a", text: "Increases the water surface elevation of the river at flood" },
                        { key: "b", text: "All of the above" },
                        { key: "c", text: "Increases the velocity and scouring action through leeved portion" },
                        { key: "d", text: "Decreases the surface slope of the stream above the leeved portion" }
                    ],
                    answer: "b",
                    explanation: "By constricting the floodplain, levees increase the water level within the main channel for a given discharge. This can reduce the slope upstream and increase the velocity and scouring potential within the confined section, which is a significant design consideration."
                }
            ]
        },
        {
            id: "cm1tran",
            name: "Transportation",
            subject: "Transportation",
            accent: "rose",
            blurb: "11 questions drawn from the Transportation bank.",
            questions: [
                {
                    id: "cm1q080",
                    src: "TRAN808-00083",
                    text: "The road connecting two towns is called a",
                    options: [
                        { key: "a", text: "Country road" },
                        { key: "b", text: "urban road" },
                        { key: "c", text: "National highway" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "a",
                    explanation: "A country road is a general term for a road that connects towns or villages in rural areas, as opposed to roads within a city (urban) or major national arteries."
                },
                {
                    id: "cm1q081",
                    src: "TRAN808-00114",
                    text: "The stability of slopes is considered while designing?",
                    options: [
                        { key: "a", text: "National highway" },
                        { key: "b", text: "State highway" },
                        { key: "c", text: "Hill roads" },
                        { key: "d", text: "District road" }
                    ],
                    answer: "c",
                    explanation: "The design of hill roads, which are built on sloping terrain, requires meticulous analysis of slope stability to prevent landslides, rockfalls, and erosion, ensuring the long-term safety and integrity of the road."
                },
                {
                    id: "cm1q082",
                    src: "TRAN808-00129",
                    text: "What is the most common waste material used in construction?",
                    options: [
                        { key: "a", text: "Rice husk" },
                        { key: "b", text: "Slag" },
                        { key: "c", text: "Pozzolona" },
                        { key: "d", text: "Fly ash" }
                    ],
                    answer: "d",
                    explanation: "Fly ash, a byproduct of coal combustion in power plants, is widely used as a pozzolanic material in concrete and for soil stabilization due to its abundance and beneficial properties."
                },
                {
                    id: "cm1q083",
                    src: "TRAN808-00174",
                    text: "The ______ test can be conducted in-situ as well as in the laboratory.",
                    options: [
                        { key: "a", text: "Direct shear" },
                        { key: "b", text: "Unconfined compression" },
                        { key: "c", text: "Triaxial" },
                        { key: "d", text: "CBR" }
                    ],
                    answer: "d",
                    explanation: "The California Bearing Ratio (CBR) test is versatile. It can be performed in a laboratory on remolded or undisturbed samples and also conducted in-situ on the prepared subgrade to determine its strength directly in the field."
                },
                {
                    id: "cm1q084",
                    src: "TRAN808-00196",
                    text: "The reaction time of a driver assumed in OSD is",
                    options: [
                        { key: "a", text: "1 sec" },
                        { key: "b", text: "2.5 sec" },
                        { key: "c", text: "2 sec" },
                        { key: "d", text: "3 sec" }
                    ],
                    answer: "c",
                    explanation: "For calculating Overtaking Sight Distance (OSD), the IRC recommends a reaction time of 2 seconds for the driver initiating the overtaking maneuver."
                },
                {
                    id: "cm1q085",
                    src: "TRAN808-00221",
                    text: "Fixed delay does not depend on which of the following factor?",
                    options: [
                        { key: "a", text: "Traffic signals" },
                        { key: "b", text: "Level crossing" },
                        { key: "c", text: "Markers" },
                        { key: "d", text: "Traffic volume" }
                    ],
                    answer: "d",
                    explanation: "Fixed delay is caused by external factors like traffic control devices (signals, markers, level crossings) that are constant and not influenced by the traffic flow itself. Traffic volume affects operational delay, not fixed delay."
                },
                {
                    id: "cm1q086",
                    src: "TRAN808-00262",
                    text: "Which of the following is not an objective of OD Studies?",
                    options: [
                        { key: "a", text: "To determine the amount of by passable traffic that enters a town and thus establishes the need for diversion" },
                        { key: "b", text: "To assess the pedestrian pattern" },
                        { key: "c", text: "To determine the potential of the present highway system and plan for new facilities" },
                        { key: "d", text: "To develop trip generation and trip distribution models" }
                    ],
                    answer: "b",
                    explanation: "While OD studies focus on vehicular trips between zones, detailed pedestrian movement patterns (origin, destination, routes) are typically studied separately through pedestrian surveys, as they have different characteristics and purposes."
                },
                {
                    id: "cm1q087",
                    src: "TRAN808-00272",
                    text: "After how long can the flexible pavement be opened to the public after its construction?",
                    options: [
                        { key: "a", text: "28 days" },
                        { key: "b", text: "24 days" },
                        { key: "c", text: "28 hours" },
                        { key: "d", text: "24 hours" }
                    ],
                    answer: "d",
                    explanation: "Flexible pavements, often made with bituminous materials, can typically be opened to traffic within 24 hours after construction as they do not require a prolonged curing period like concrete."
                },
                {
                    id: "cm1q088",
                    src: "TRAN808-00305",
                    text: "A vehicle has four axles, what would be the equivalent wheel load (EWL) constant used for the R-value design method?",
                    options: [
                        { key: "a", text: "4620" },
                        { key: "b", text: "2460" },
                        { key: "c", text: "330" },
                        { key: "d", text: "3040" }
                    ],
                    answer: "c",
                    explanation: "In the R-value design method, the EWL constant for a vehicle with 4 axles is 330."
                },
                {
                    id: "cm1q089",
                    src: "TRAN808-00318",
                    text: "The design charts for computing vertical, tangential and radial stresses were first developed for a Poisson’s ratio of ______.",
                    options: [
                        { key: "a", text: "0.5" },
                        { key: "b", text: "0.4" },
                        { key: "c", text: "0.2" },
                        { key: "d", text: "0.3" }
                    ],
                    answer: "a",
                    explanation: "The influential design charts developed by Foster and Ahlvin for stresses under a flexible circular load were initially developed for a Poisson’s ratio of 0.5, assuming the material is incompressible."
                },
                {
                    id: "cm1q090",
                    src: "TRAN808-00359",
                    text: "Bleeding in bituminous mix refers to appearance of excess bitumen due to",
                    options: [
                        { key: "a", text: "Seepage of water" },
                        { key: "b", text: "Traffic load and subgrade pressure" },
                        { key: "c", text: "Setting of bitumen" },
                        { key: "d", text: "Test" }
                    ],
                    answer: "b",
                    explanation: "Bleeding is caused by excessive asphalt, high heat, or traffic loads pushing binder to the surface."
                }
            ]
        },
        {
            id: "cm1wate",
            name: "Water Supply, Sanitation and Environment",
            subject: "Water Supply",
            accent: "blue",
            blurb: "10 questions drawn from the Water Supply, Sanitation and Environment bank.",
            questions: [
                {
                    id: "cm1q091",
                    src: "WATE813-00108",
                    text: "All the primarily concerned and other categories’ indirect impact of hazard among the following",
                    options: [
                        { key: "a", text: "Social" },
                        { key: "b", text: "Health" },
                        { key: "c", text: "Environment" },
                        { key: "d", text: "Economic" }
                    ],
                    answer: "d",
                    explanation: "While hazards have direct and indirect impacts on social structures, health, and the environment, economic impacts are often considered both a primary concern and a category that experiences significant indirect consequences (e.g., business interruption, loss of productivity, increased insurance costs)."
                },
                {
                    id: "cm1q092",
                    src: "WATE813-00112",
                    text: "Among the following types of hazard which one is more common?",
                    options: [
                        { key: "a", text: "Biological" },
                        { key: "b", text: "Ergonomic" },
                        { key: "c", text: "Physical" },
                        { key: "d", text: "Mechanical" }
                    ],
                    answer: "c",
                    explanation: "Physical hazards (e.g., noise, radiation, extreme temperatures) are among the most commonly encountered types of hazards across various environments, including workplaces and disaster settings."
                },
                {
                    id: "cm1q093",
                    src: "WATE813-00159",
                    text: "From amongst the following sewage treatment option, largest land requirements for a given discharge will be needed for",
                    options: [
                        { key: "a", text: "Oxidation pond" },
                        { key: "b", text: "Oxidation ditch" },
                        { key: "c", text: "Aerobic pond" },
                        { key: "d", text: "Anaerobic pond" }
                    ],
                    answer: "a",
                    explanation: "Oxidation ponds (waste stabilization ponds) have very long hydraulic retention times (often several weeks to months) and consequently require the largest land area compared to mechanical treatment systems like oxidation ditches or other pond types."
                },
                {
                    id: "cm1q094",
                    src: "WATE813-00186",
                    text: "Minimum size of public sewer should not be less than ...",
                    options: [
                        { key: "a", text: "30cm" },
                        { key: "b", text: "15cm" },
                        { key: "c", text: "13cm" },
                        { key: "d", text: "20cm" }
                    ],
                    answer: "b",
                    explanation: "To prevent clogging and allow for cleaning, the minimum diameter for a public sewer is universally recommended to be 15 cm (150 mm)."
                },
                {
                    id: "cm1q095",
                    src: "WATE813-00202",
                    text: "...is additional flow through sewers available during rainy season?",
                    options: [
                        { key: "a", text: "Dry weather flow" },
                        { key: "b", text: "GVF" },
                        { key: "c", text: "Rapidly varied flow" },
                        { key: "d", text: "Storm water flow" }
                    ],
                    answer: "d",
                    explanation: "Stormwater flow is the surface runoff from rainfall that enters the sewer system, significantly increasing the flow rate during and after a rain event."
                },
                {
                    id: "cm1q096",
                    src: "WATE813-00222",
                    text: "A combined sewage system collectively carries",
                    options: [
                        { key: "a", text: "Domestic sewage and industrial sewage" },
                        { key: "b", text: "Storm sewage and domestic sewage" },
                        { key: "c", text: "Storm sewage and industrial sewage" },
                        { key: "d", text: "Storm domestic and industrial sewage" }
                    ],
                    answer: "d",
                    explanation: "A combined system is designed to carry all wastewater: sanitary sewage (domestic and industrial) and stormwater (surface runoff)."
                },
                {
                    id: "cm1q097",
                    src: "WATE813-00268",
                    text: "What is formed when coagulant is added to water?",
                    options: [
                        { key: "a", text: "Scum" },
                        { key: "b", text: "Floc" },
                        { key: "c", text: "Bubbles" },
                        { key: "d", text: "Soap" }
                    ],
                    answer: "b",
                    explanation: "When a coagulant (like alum) is added and mixed, it neutralizes particle charges and forms visible, settleable aggregates called flocs."
                },
                {
                    id: "cm1q098",
                    src: "WATE813-00284",
                    text: "From high level water resource, the water supply system used in termed as",
                    options: [
                        { key: "a", text: "Gravity system" },
                        { key: "b", text: "Pumping system" },
                        { key: "c", text: "Pumping and storage system" },
                        { key: "d", text: "Dual system" }
                    ],
                    answer: "a",
                    explanation: "A gravity system is used when the water source is at a sufficiently high elevation. Water flows to the distribution system by gravity alone, eliminating the need for pumping and reducing operational costs significantly."
                },
                {
                    id: "cm1q099",
                    src: "WATE813-00308",
                    text: "NTU is unit",
                    options: [
                        { key: "a", text: "color" },
                        { key: "b", text: "odor" },
                        { key: "c", text: "turbidity" },
                        { key: "d", text: "taste" }
                    ],
                    answer: "c",
                    explanation: "NTU stands for Nephelometric Turbidity Unit. It is the standard unit for measuring turbidity, which is the cloudiness or haziness of a fluid caused by suspended solids that scatter light."
                },
                {
                    id: "cm1q100",
                    src: "WATE813-00326",
                    text: "When total hardness is less than alkanity",
                    options: [
                        { key: "a", text: "carbonate hardness = Total Hardness" },
                        { key: "b", text: "Non carbonate hardness = 0" },
                        { key: "c", text: "None of the above" },
                        { key: "d", text: "Both (a) and (b)" }
                    ],
                    answer: "d",
                    explanation: "When Total Hardness (TH) &lt; Alkalinity, it means all the hardness is carbonate hardness (CH). There is no non-carbonate hardness (NCH). Therefore, CH = TH and NCH = 0."
                }
            ]
        }
    ]
};

/* Registered lazily — js/civil.js injects this file when the set is opened. */
window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["civil-1"] = CIVIL_MODEL_1;
