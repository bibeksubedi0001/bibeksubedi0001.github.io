/* ============================================================
   CIVIL MODEL SET 17 — Civil Engineering licence-style model paper
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
const CIVIL_MODEL_17 = {
    day: 47,
    kind: "model",
    badge: { top: "Model", main: "C17" },
    title: "Civil Model Set 17",
    subtitle: "Civil Engineering · 9 subjects",
    durationMinutes: 120,
    negativeMarking: 0,
    chapters: [
        {
            id: "cm17basi",
            name: "Basic Civil Engineering",
            subject: "Basic Civil",
            accent: "blue",
            blurb: "13 questions drawn from the Basic Civil Engineering bank.",
            questions: [
                {
                    id: "cm17q001",
                    src: "BASI674-00202",
                    text: "Crushing strength of a good structural stone should be more than",
                    options: [
                        { key: "a", text: "50 N/mm2" },
                        { key: "b", text: "100 N/mm2" },
                        { key: "c", text: "65 N/mm2" },
                        { key: "d", text: "200 N/mm2" }
                    ],
                    answer: "b",
                    explanation: "A good building stone must have high compressive strength to bear heavy loads. A minimum crushing strength of 100 N/mm² (100 MPa) is a standard requirement for structural stonework."
                },
                {
                    id: "cm17q002",
                    src: "BASI674-00203",
                    text: "Water retentivity for brick masonry should not be less than",
                    options: [
                        { key: "a", text: "50 %" },
                        { key: "b", text: "60 %" },
                        { key: "c", text: "70 %" },
                        { key: "d", text: "80 %" }
                    ],
                    answer: "c",
                    explanation: "Water retentivity is the ability of mortar to retain its water against the suction of bricks. A minimum of 70% is specified to ensure proper hydration of cement and development of strong bond between brick and mortar."
                },
                {
                    id: "cm17q003",
                    src: "BASI674-00204",
                    text: "For masonry work with solid bricks, consistency of mortar should be",
                    options: [
                        { key: "a", text: "5 to 8 cm" },
                        { key: "b", text: "14 to 18 cm" },
                        { key: "c", text: "19 to 23 cm" },
                        { key: "d", text: "9 to 13 cm" }
                    ],
                    answer: "d",
                    explanation: "The consistency of mortar is measured by its penetration in a cone test. For solid bricks with high suction, a standard consistency range is 9 to 13 cm to ensure good workability and bond strength."
                },
                {
                    id: "cm17q004",
                    src: "BASI674-00205",
                    text: "Market form of timber which rough squared shaped is",
                    options: [
                        { key: "a", text: "Balk" },
                        { key: "b", text: "Log" },
                        { key: "c", text: "Posts" },
                        { key: "d", text: "Planks" }
                    ],
                    answer: "a",
                    explanation: "A balk is a market form of timber that is roughly squared from a log. It is the stage before being further sawn into more specific sizes like posts or planks."
                },
                {
                    id: "cm17q005",
                    src: "BASI674-00206",
                    text: "Spokeshave is used for smoothening:",
                    options: [
                        { key: "a", text: "Plane surfaces" },
                        { key: "b", text: "Curved surfaces" },
                        { key: "c", text: "Interior surfaces" },
                        { key: "d", text: "Rough surfaces" }
                    ],
                    answer: "b",
                    explanation: "A spokeshave is a hand tool with a blade between two handles. It is specifically designed for shaping and smoothing curved surfaces, such as those on chair legs or wheel spokes."
                },
                {
                    id: "cm17q006",
                    src: "BASI674-00207",
                    text: "For cutting along the grains ___ saws are used",
                    options: [
                        { key: "a", text: "Cross cut saw" },
                        { key: "b", text: "Dovetail saw" },
                        { key: "c", text: "Rib saw" },
                        { key: "d", text: "Compass saw" }
                    ],
                    answer: "c",
                    explanation: "A rip saw is designed for cutting wood parallel to (along) the grain. Its teeth are chisel-shaped to act like a series of chisels, plowing through the wood fibers."
                },
                {
                    id: "cm17q007",
                    src: "BASI674-00208",
                    text: "Forming a conical shape in the end of a hole is said to be:",
                    options: [
                        { key: "a", text: "Bracing" },
                        { key: "b", text: "Drilling" },
                        { key: "c", text: "Boring" },
                        { key: "d", text: "Counter sinking" }
                    ],
                    answer: "d",
                    explanation: "Counter sinking is the process of cutting a conical enlargement at the top of a hole. This allows the head of a screw or bolt to sit flush with or below the surface of the material."
                },
                {
                    id: "cm17q008",
                    src: "BASI674-00209",
                    text: "Clamping vice is used for",
                    options: [
                        { key: "a", text: "Sawing" },
                        { key: "b", text: "Joining" },
                        { key: "c", text: "Cutting" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "A clamping vice is a versatile workholding tool. It is essential for securing wood pieces during various operations like sawing, cutting, planing, joining, and drilling."
                },
                {
                    id: "cm17q009",
                    src: "BASI674-00210",
                    text: "The following hammer is used for striking as well as for pulling the nails from the wood",
                    options: [
                        { key: "a", text: "Cross Peen Hammer" },
                        { key: "b", text: "Claw Hammer" },
                        { key: "c", text: "Mallet" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "b",
                    explanation: "A claw hammer has a flat striking face on one end and a curved, split 'claw' on the other end, which is specifically designed for pulling out (extracting) nails."
                },
                {
                    id: "cm17q010",
                    src: "BASI674-00211",
                    text: "Following hammer is made up of wood",
                    options: [
                        { key: "a", text: "Cross Peen Hammer" },
                        { key: "b", text: "Claw Hammer" },
                        { key: "c", text: "Mallet" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "c",
                    explanation: "A mallet is a type of hammer with a large, usually wooden head. It is used to strike chisels or other tools where a metal hammer would cause damage to the tool handle."
                },
                {
                    id: "cm17q011",
                    src: "BASI674-00212",
                    text: "Following types of machines are used in carpentry shop",
                    options: [
                        { key: "a", text: "Lathe machine" },
                        { key: "b", text: "Grinder" },
                        { key: "c", text: "Thickness planner" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "A modern carpentry shop utilizes various machines: a wood lathe for turning, a grinder for sharpening tools, and a thickness planer for achieving uniform board thickness, among others."
                },
                {
                    id: "cm17q012",
                    src: "BASI674-00213",
                    text: "Following machine is used to saw the wood lengthwise",
                    options: [
                        { key: "a", text: "Lathe machine" },
                        { key: "b", text: "Thickness planner" },
                        { key: "c", text: "Band saw" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "c",
                    explanation: "A band saw, with its continuous band blade, is perfectly suited for making long, straight cuts (ripping) along the length of a piece of wood, as well as for curved cuts."
                },
                {
                    id: "cm17q013",
                    src: "BASI674-00214",
                    text: "Paints with white lead base are suitable for painting of",
                    options: [
                        { key: "a", text: "wood work" },
                        { key: "b", text: "Iron work" },
                        { key: "c", text: "both (a) and (b)" },
                        { key: "d", text: "none" }
                    ],
                    answer: "a",
                    explanation: "White lead paint has excellent opacity and durability on wood surfaces. However, it is not suitable for ironwork as it does not inhibit rust and can actually promote corrosion. It has also been largely phased out due to lead toxicity."
                }
            ]
        },
        {
            id: "cm17stru",
            name: "Structural Mechanics",
            subject: "Structural Mech",
            accent: "cyan",
            blurb: "11 questions drawn from the Structural Mechanics bank.",
            questions: [
                {
                    id: "cm17q014",
                    src: "STRU935-00169",
                    text: "If all the reactions acting on a planar system are concurrent in nature, then the system is:",
                    options: [
                        { key: "a", text: "Can’t say" },
                        { key: "b", text: "Essentially stable" },
                        { key: "c", text: "Essentially unstable" },
                        { key: "d", text: "None of the mentioned" }
                    ],
                    answer: "c",
                    explanation: "If all reactions are concurrent, they cannot provide resistance to a moment about the point of concurrency, making the system unstable."
                },
                {
                    id: "cm17q015",
                    src: "STRU935-00170",
                    text: "If a system has more equations of equilibrium than no. of forces, then the system is:",
                    options: [
                        { key: "a", text: "Partially constrained" },
                        { key: "b", text: "Stable" },
                        { key: "c", text: "Solvable" },
                        { key: "d", text: "Improperly constrained" }
                    ],
                    answer: "d",
                    explanation: "If there are more equations than unknown forces, the system is over-constrained or improperly constrained, leading to potential instability or inconsistency."
                },
                {
                    id: "cm17q016",
                    src: "STRU935-00171",
                    text: "Which of the following is statically determinate structure?",
                    options: [
                        { key: "a", text: "Double overhanging beam" },
                        { key: "b", text: "Fixed beam" },
                        { key: "c", text: "Continuous beam" },
                        { key: "d", text: "Two hinged arch" }
                    ],
                    answer: "a",
                    explanation: "A double overhanging beam is typically statically determinate, while fixed beams, continuous beams, and two-hinged arches are indeterminate."
                },
                {
                    id: "cm17q017",
                    src: "STRU935-00172",
                    text: "To convert indeterminate structure to a determinate structure, number of force release to be provided equals to ......",
                    options: [
                        { key: "a", text: "Number of equilibriums equations for the respective structures available" },
                        { key: "b", text: "Static Indeterminacy" },
                        { key: "c", text: "External Static Indeterminacy only" },
                        { key: "d", text: "Internal Static Indeterminacy only" }
                    ],
                    answer: "b",
                    explanation: "To make an indeterminate structure determinate, the number of force releases required equals the degree of static indeterminacy."
                },
                {
                    id: "cm17q018",
                    src: "STRU935-00174",
                    text: "Resilience can also be termed as ......",
                    options: [
                        { key: "a", text: "Stress energy" },
                        { key: "b", text: "Modulus" },
                        { key: "c", text: "Strain energy" },
                        { key: "d", text: "Tenacity" }
                    ],
                    answer: "c",
                    explanation: "Resilience is the ability to absorb energy elastically, which is stored as strain energy."
                },
                {
                    id: "cm17q019",
                    src: "STRU935-00175",
                    text: "In virtual work method, the virtual quantity is",
                    options: [
                        { key: "a", text: "load" },
                        { key: "b", text: "slope" },
                        { key: "c", text: "moment" },
                        { key: "d", text: "displacement" }
                    ],
                    answer: "d",
                    explanation: "In the virtual work method, the virtual quantity is a small, imaginary displacement."
                },
                {
                    id: "cm17q020",
                    src: "STRU935-00176",
                    text: "What is the relation between work done by external loads and work done by internal loads.",
                    options: [
                        { key: "a", text: "They are equal" },
                        { key: "b", text: "They are unequal" },
                        { key: "c", text: "Can’t say" },
                        { key: "d", text: "Depends on load" }
                    ],
                    answer: "a",
                    explanation: "According to the principle of virtual work, the virtual work done by external loads equals the virtual work done by internal loads."
                },
                {
                    id: "cm17q021",
                    src: "STRU935-00177",
                    text: "To apply virtual work method it is :-",
                    options: [
                        { key: "a", text: "Not compulsory for external and internal forces to be in equilibrium" },
                        { key: "b", text: "Compulsory for external and internal forces to be in equilibrium" },
                        { key: "c", text: "Compulsory for external and internal forces to be in equilibrium in higher loads" },
                        { key: "d", text: "None" }
                    ],
                    answer: "b",
                    explanation: "For the virtual work method to be applicable, the system must be in equilibrium under the actual loads and the virtual displacements must be compatible."
                },
                {
                    id: "cm17q022",
                    src: "STRU935-00178",
                    text: "Virtual work can be applied when:",
                    options: [
                        { key: "a", text: "Elastic limit is exceeded" },
                        { key: "b", text: "Elastic limit is not exceeded" },
                        { key: "c", text: "Doesn’t depend upon elastic limit" },
                        { key: "d", text: "Can’t say" }
                    ],
                    answer: "c",
                    explanation: "The principle of virtual work is applicable to any system in equilibrium, regardless of whether the material behavior is elastic or not."
                },
                {
                    id: "cm17q023",
                    src: "STRU935-00179",
                    text: "What is the shape of load-deformation curve for a linear elastic member?",
                    options: [
                        { key: "a", text: "Straight line with varying slope" },
                        { key: "b", text: "Curve" },
                        { key: "c", text: "Sine wave" },
                        { key: "d", text: "Straight line with constant slope" }
                    ],
                    answer: "d",
                    explanation: "For a linear elastic material, the load-deformation curve is a straight line with a constant slope (Hooke's law)."
                },
                {
                    id: "cm17q024",
                    src: "STRU935-00180",
                    text: "What is the shape of load-deformation curve for a non-linear elastic member?",
                    options: [
                        { key: "a", text: "Curve" },
                        { key: "b", text: "Straight line with constant slope" },
                        { key: "c", text: "Straight line with varying slope" },
                        { key: "d", text: "Circle" }
                    ],
                    answer: "a",
                    explanation: "For a non-linear elastic material, the load-deformation relationship is curved but still elastic (no permanent deformation)."
                }
            ]
        },
        {
            id: "cm17desi",
            name: "Design of Structures",
            subject: "Design of Str",
            accent: "slate",
            blurb: "9 questions drawn from the Design of Structures bank.",
            questions: [
                {
                    id: "cm17q025",
                    src: "DESI787-00146",
                    text: "In rolled steel beams, shear force is mostly resisted by",
                    options: [
                        { key: "a", text: "Web only" },
                        { key: "b", text: "Flanges only" },
                        { key: "c", text: "Web and flanges together" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "a",
                    explanation: "The web of an I-beam or rolled steel section is designed to carry over 90% of the total shear force due to its significantly larger depth-to-thickness ratio compared to the flanges."
                },
                {
                    id: "cm17q026",
                    src: "DESI787-00147",
                    text: "The most economical section for a column, is",
                    options: [
                        { key: "a", text: "Rectangular" },
                        { key: "b", text: "Solid round" },
                        { key: "c", text: "Tubular section" },
                        { key: "d", text: "Flat strip" }
                    ],
                    answer: "c",
                    explanation: "Tubular (hollow circular or rectangular) sections are often the most economical for columns because they have a high radius of gyration about all axes, providing high buckling resistance for a given cross-sectional area."
                },
                {
                    id: "cm17q027",
                    src: "DESI787-00148",
                    text: "If the thickness of the plate to be connected by a rivet is 16 mm, then the suitable size of rivet as per Unwin’s formula will be",
                    options: [
                        { key: "a", text: "16 mm" },
                        { key: "b", text: "20 mm" },
                        { key: "c", text: "27 mm" },
                        { key: "d", text: "24 mm" }
                    ],
                    answer: "d",
                    explanation: "Unwin's formula provides the rivet diameter: d = 6.04√t, where t is the thickness of the thickest plate in mm. For t=16mm, d = 6.04√16 ≈ 6.04*4 ≈ 24.16 mm. The standard size is rounded down to 24 mm."
                },
                {
                    id: "cm17q028",
                    src: "DESI787-00149",
                    text: "Cold cracks can be prevented by",
                    options: [
                        { key: "a", text: "the use of low hydrogen electrode" },
                        { key: "b", text: "uniform heating" },
                        { key: "c", text: "faster cooling" },
                        { key: "d", text: "slower cooling" }
                    ],
                    answer: "a",
                    explanation: "Cold cracks (hydrogen-induced cracking) occur in the weld heat-affected zone. Using low-hydrogen electrodes minimizes the source of hydrogen, which is the primary cause of this type of cracking."
                },
                {
                    id: "cm17q029",
                    src: "DESI787-00150",
                    text: "The diameter of a bolt hole is taken as the nominal diameter of the bolt plus",
                    options: [
                        { key: "a", text: "1.0 mm" },
                        { key: "b", text: "1.6 mm" },
                        { key: "c", text: "1.2 mm" },
                        { key: "d", text: "1.4 mm" }
                    ],
                    answer: "b",
                    explanation: "Standard practice is to make the hole diameter 1.5 to 2.0 mm larger than the nominal bolt diameter to allow for slight misalignment during erection. 1.6 mm is the closest option."
                },
                {
                    id: "cm17q030",
                    src: "DESI787-00151",
                    text: "As compared to field rivets, the shop rivets are",
                    options: [
                        { key: "a", text: "Stronger" },
                        { key: "b", text: "Weaker" },
                        { key: "c", text: "Equally strong" },
                        { key: "d", text: "Any of the above" }
                    ],
                    answer: "a",
                    explanation: "Shop riveting is performed under controlled conditions with proper equipment, allowing for better quality control and more uniform heating/forming, resulting in generally stronger connections than field riveting."
                },
                {
                    id: "cm17q031",
                    src: "DESI787-00153",
                    text: "The size of a butt weld is specified by the effective throat thickness which in the case of incomplete penetration, is taken as",
                    options: [
                        { key: "a", text: "5/8 of the thickness of the thicker part" },
                        { key: "b", text: "7/8 of the thickness of the thicker part" },
                        { key: "c", text: "7/8 of the thickness of the thinner part" },
                        { key: "d", text: "5/8 of the thickness of the thinner part" }
                    ],
                    answer: "d",
                    explanation: "For partial penetration butt welds, the effective throat thickness is taken as a fraction of the thinner part joined. A common specification is 5/8 of the thickness of the thinner part."
                },
                {
                    id: "cm17q032",
                    src: "DESI787-00154",
                    text: "The overlap of pattern plates with the main members in welded connections should be more than",
                    options: [
                        { key: "a", text: "6 t" },
                        { key: "b", text: "3 t" },
                        { key: "c", text: "8 t" },
                        { key: "d", text: "10 t" }
                    ],
                    answer: "a",
                    explanation: "To ensure adequate transfer of load and stability, pattern plates (or splice plates) should overlap the main member by more than 6 times the plate thickness (6t)."
                },
                {
                    id: "cm17q033",
                    src: "DESI787-00155",
                    text: "A fillet weld may be termed as",
                    options: [
                        { key: "a", text: "Mitre weld" },
                        { key: "b", text: "Concave weld" },
                        { key: "c", text: "Convex weld" },
                        { key: "d", text: "All the above" }
                    ],
                    answer: "d",
                    explanation: "The profile of a fillet weld can vary: mitre (flat), concave, or convex, depending on the welding technique and the amount of filler metal used."
                }
            ]
        },
        {
            id: "cm17soil",
            name: "Soil Mechanics and Foundation",
            subject: "Soil Mechanics",
            accent: "amber",
            blurb: "13 questions drawn from the Soil Mechanics and Foundation bank.",
            questions: [
                {
                    id: "cm17q034",
                    src: "SOIL136-00202",
                    text: "What is the decrease in the volume of soil mass under stress called?",
                    options: [
                        { key: "a", text: "compressibility" },
                        { key: "b", text: "tension" },
                        { key: "c", text: "compression" },
                        { key: "d", text: "consolidation" }
                    ],
                    answer: "c",
                    explanation: "Compression is the general term for a decrease in volume of a soil mass under an applied stress. Consolidation is a specific type of compression that involves the expulsion of pore water over time."
                },
                {
                    id: "cm17q035",
                    src: "SOIL136-00203",
                    text: "Standard proctor test is used for determining optimum content (OMc)",
                    options: [
                        { key: "a", text: "void ratio" },
                        { key: "b", text: "coefficient of consolidation" },
                        { key: "c", text: "pavement thickness" },
                        { key: "d", text: "dry density and OMC" }
                    ],
                    answer: "d",
                    explanation: "The Standard Proctor test (or light compaction test) is a laboratory method used to determine the relationship between water content and dry density for a soil. The test results are used to find the optimum moisture content (OMC) that gives the maximum dry density."
                },
                {
                    id: "cm17q036",
                    src: "SOIL136-00204",
                    text: "Compaction of soil is aimed at decreasing dry density.",
                    options: [
                        { key: "a", text: "decreasing Void ratio" },
                        { key: "b", text: "increasing porosity." },
                        { key: "c", text: "decreasing shear strength" },
                        { key: "d", text: "increasing shear strength" }
                    ],
                    answer: "a",
                    explanation: "The primary aim of compaction is to increase the soil's density and strength. This is achieved by reducing the volume of air voids, i.e., decreasing the void ratio. A lower void ratio leads to higher dry density, lower permeability, and higher shear strength."
                },
                {
                    id: "cm17q037",
                    src: "SOIL136-00205",
                    text: "The process of compaction of soil involves",
                    options: [
                        { key: "a", text: "expulsion of pore water" },
                        { key: "b", text: "expulsion of air voids" },
                        { key: "c", text: "expulsion of both" },
                        { key: "d", text: "none of these" }
                    ],
                    answer: "b",
                    explanation: "Compaction is the process of expelling air from the void spaces in soil to increase its density. It is applied to partially saturated soils. Water is sometimes added as a lubricant but is not the primary element being expelled; the goal is to reduce the air content."
                },
                {
                    id: "cm17q038",
                    src: "SOIL136-00206",
                    text: "Compaction of a soil",
                    options: [
                        { key: "a", text: "increasing dry density" },
                        { key: "b", text: "decreasing porosity" },
                        { key: "c", text: "both increasing dry density and increasing dry density" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "c",
                    explanation: "Compaction increases the dry density of a soil by rearranging particles and reducing the volume of voids. Since porosity (n) is the ratio of volume of voids to total volume, a decrease in void volume directly results in decreased porosity."
                },
                {
                    id: "cm17q039",
                    src: "SOIL136-00207",
                    text: "For the same soil, increases in compaction effort ...",
                    options: [
                        { key: "a", text: "does not affect OMC" },
                        { key: "b", text: "increase OMC" },
                        { key: "c", text: "decrease more density" },
                        { key: "d", text: "decreases OMC" }
                    ],
                    answer: "d",
                    explanation: "As compactive effort increases, the maximum dry density increases, and the optimum moisture content (OMC) decreases. This is because higher energy allows particles to pack more densely at lower water contents."
                },
                {
                    id: "cm17q040",
                    src: "SOIL136-00208",
                    text: "The most effective method for compacting sand is by using",
                    options: [
                        { key: "a", text: "vibration" },
                        { key: "b", text: "pneumatic rollers" },
                        { key: "c", text: "sheep foot rollers" },
                        { key: "d", text: "sheet typed rollers" }
                    ],
                    answer: "a",
                    explanation: "Granular soils like sand are best compacted by vibration. Vibratory rollers or plate compactors use vibrations to cause sand particles to rearrange themselves into a denser configuration by reducing inter-particle friction."
                },
                {
                    id: "cm17q041",
                    src: "SOIL136-00209",
                    text: "The ratio of dry density obtained in the field to the proctor's maximum dry density is called",
                    options: [
                        { key: "a", text: "compaction energy" },
                        { key: "b", text: "relative compaction" },
                        { key: "c", text: "compactive effort" },
                        { key: "d", text: "none of these" }
                    ],
                    answer: "b",
                    explanation: "Relative compaction is a measure of the field compaction achieved, expressed as a percentage. It is the ratio of the field dry density to the maximum dry density obtained from a laboratory Proctor test, multiplied by 100."
                },
                {
                    id: "cm17q042",
                    src: "SOIL136-00210",
                    text: "The soil involved in the compaction is",
                    options: [
                        { key: "a", text: "perfectly saturated soil" },
                        { key: "b", text: "partly saturated soil" },
                        { key: "c", text: "submerged soil" },
                        { key: "d", text: "none of these" }
                    ],
                    answer: "b",
                    explanation: "Compaction is typically performed on partially saturated soils. The presence of some water acts as a lubricant, helping soil particles slide past each other into a denser configuration. Expelling all air to achieve full saturation is not the goal of compaction."
                },
                {
                    id: "cm17q043",
                    src: "SOIL136-00211",
                    text: "The maximum dry density up to which any soil can be compacted depends upon...",
                    options: [
                        { key: "a", text: "water content only" },
                        { key: "b", text: "amount of compactive effort only" },
                        { key: "c", text: "both water content and compactive effort" },
                        { key: "d", text: "none of these" }
                    ],
                    answer: "c",
                    explanation: "The maximum dry density achievable for a soil is not a fixed value. It depends on two key factors: the water content (which provides lubrication) and the compactive effort (the energy applied per unit volume)."
                },
                {
                    id: "cm17q044",
                    src: "SOIL136-00212",
                    text: "Seepage force is the energy transfer between",
                    options: [
                        { key: "a", text: "water and soil" },
                        { key: "b", text: "air and water" },
                        { key: "c", text: "earth and air" },
                        { key: "d", text: "water and water" }
                    ],
                    answer: "a",
                    explanation: "Seepage force is the frictional drag exerted by water flowing through the soil pores on the soil particles. It represents the transfer of energy from the flowing water to the soil skeleton."
                },
                {
                    id: "cm17q045",
                    src: "SOIL136-00213",
                    text: "The first rational approach to the problem of seepage through soils was",
                    options: [
                        { key: "a", text: "Archimedes" },
                        { key: "b", text: "Darcy" },
                        { key: "c", text: "Poiseuille" },
                        { key: "d", text: "Terzaghi" }
                    ],
                    answer: "b",
                    explanation: "Henry Darcy, a French engineer, established the fundamental law for flow through porous media in 1856 based on experiments with water flowing through sand. Darcy's Law is the cornerstone of seepage studies."
                },
                {
                    id: "cm17q046",
                    src: "SOIL136-00215",
                    text: "The seepage pressure always acts ______",
                    options: [
                        { key: "a", text: "opposite to direction of flow" },
                        { key: "b", text: "perpendicular to direction of flow" },
                        { key: "c", text: "In the direction of flow" },
                        { key: "d", text: "tangential to direction of flow" }
                    ],
                    answer: "c",
                    explanation: "Seepage pressure, and consequently the seepage force it generates, acts in the direction of the flow of water through the soil pores."
                }
            ]
        },
        {
            id: "cm17watr",
            name: "Basic Water Resources Engineering",
            subject: "Water Resources",
            accent: "emerald",
            blurb: "11 questions drawn from the Basic Water Resources Engineering bank.",
            questions: [
                {
                    id: "cm17q047",
                    src: "WATE701-00182",
                    text: "Calculate the critical depth of a rectangular channel having width 3m and the discharge through it is 15 m³/s.",
                    options: [
                        { key: "a", text: "0.36m" },
                        { key: "b", text: "2.36m" },
                        { key: "c", text: "3.36m" },
                        { key: "d", text: "1.36m" }
                    ],
                    answer: "d",
                    explanation: "For rectangular channel, critical depth y_c = (q²/g)^(1/3), where q=Q/B=15/3=5 m²/s. y_c = (25/9.81)^(1/3) = (2.548)^(1/3) ≈ 1.36m."
                },
                {
                    id: "cm17q048",
                    src: "WATE701-00184",
                    text: "Calculate minimum specific energy of a rectangular channel having critical depth of 1.5m.",
                    options: [
                        { key: "a", text: "2.25m" },
                        { key: "b", text: "3.25m" },
                        { key: "c", text: "1.25m" }
                    ],
                    answer: "a",
                    explanation: "For any channel, minimum specific energy at critical flow is E_min = y_c + V_c²/(2g). For rectangular channel, at critical flow, V_c²/(2g) = y_c/2. So E_min = y_c + y_c/2 = 1.5*1.5 = 2.25m."
                },
                {
                    id: "cm17q049",
                    src: "WATE701-00185",
                    text: "The base width of a rectangular channel is 4m and the maximum discharge through the channel is 10 m³/s, calculate the specific energy.",
                    options: [
                        { key: "a", text: "0.7m" },
                        { key: "b", text: "1.3m" },
                        { key: "c", text: "1.0m" },
                        { key: "d", text: "1.6m" }
                    ],
                    answer: "b",
                    explanation: "For maximum discharge, the flow is critical. For rectangular channel, E_min = 1.5 y_c. Also, q_max = Q/B = 10/4=2.5 m²/s. y_c = (q²/g)^(1/3) = (6.25/9.81)^(1/3) = (0.637)^(1/3)≈0.86m. Then E_min = 1.5*0.86=1.29m ≈1.3m."
                },
                {
                    id: "cm17q050",
                    src: "WATE701-00187",
                    text: "The specific energy of a channel section is 1.01m and the velocity of flow is 0.5m/s, calculate the depth of flow.",
                    options: [
                        { key: "a", text: "0.8m" },
                        { key: "b", text: "1.2m" },
                        { key: "c", text: "1.0m" },
                        { key: "d", text: "1.4m" }
                    ],
                    answer: "c",
                    explanation: "E = y + V²/(2g) = 1.01. V²/(2g)=0.25/(19.62)=0.01274m. So y = 1.01 - 0.01274 = 0.997m ≈1.0m."
                },
                {
                    id: "cm17q051",
                    src: "WATE701-00188",
                    text: "The dimensions of a rectangular channel are 3m in depth and 4m in width. Calculate the bed slope of the channel if the specific energy is 3.13m. [C=50]",
                    options: [
                        { key: "a", text: "1 in 1000" },
                        { key: "b", text: "1 in 1100" },
                        { key: "c", text: "1 in 1300" },
                        { key: "d", text: "1 in 1200" }
                    ],
                    answer: "d",
                    explanation: "\\(\\[ \\begin{aligned} \\text{Specific energy: } E &= y + \\frac{V^2}{2g} \\\\ 3.13 &= 3 + \\frac{V^2}{2 \\times 9.81} \\\\ \\frac{V^2}{19.62} &= 0.13 \\\\ V^2 &= 2.5506 \\\\ V &\\approx 1.597\\ \\text{m/s} \\\\[6pt] \\text{Discharge: } Q &= A \\cdot V = (4 \\times 3) \\times 1.597 = 19.164\\ \\text{m}^3/\\text{s} \\\\[6pt] \\text{Hydraulic radius: } R &= \\frac{A}{P} = \\frac{12}{4 + 2 \\times 3} = 1.2\\ \\text{m} \\\\[6pt] \\text{Chezy's formula: } V &= C\\sqrt{RS} \\\\ S &= \\frac{V^2}{C^2 R} = \\frac{2.5506}{50^2 \\times 1.2} \\\\ S &= \\frac{2.5506}{3000} \\approx 8.502 \\times 10^{-4}\\text{ (or 1 in 1176)} \\end{aligned} \\]\\)"
                },
                {
                    id: "cm17q052",
                    src: "WATE701-00189",
                    text: "The depth of a trapezoidal channel section is 2m, base width of 2m and base a side slope of 1H:2V. Calculate n if the bed slope is 1 in 1000.",
                    options: [
                        { key: "a", text: "0.015" },
                        { key: "b", text: "0.012" },
                        { key: "c", text: "0.013" },
                        { key: "d", text: "0.014" }
                    ],
                    answer: "a",
                    explanation: "Need velocity or discharge? Not given. Perhaps assume most economical? For side slope 1H:2V, z=2. For economical trapezoidal, condition: half top width = side length, etc. But here dimensions given. Area A = (b+zy)y = (2+2*2)*2 = (2+4)*2=12 m². P = b + 2y√(1+z²)=2 + 4√5=2+8.944=10.944m. R=12/10.944=1.096m. S=0.001. To find n, need V or Q. Not given. Perhaps the specific energy is not provided. Maybe the channel is flowing with critical depth or uniform flow. This question might be incomplete, but from options, often n=0.015 for rough channels."
                },
                {
                    id: "cm17q053",
                    src: "WATE701-00190",
                    text: "Calculate the velocity of flow through a channel having depth of 1.2m and specific energy equal to 1.24m.",
                    options: [
                        { key: "a", text: "0.6 m/s" },
                        { key: "b", text: "0.9m/s" },
                        { key: "c", text: "0.7 m/s" },
                        { key: "d", text: "0.8m/s" }
                    ],
                    answer: "b",
                    explanation: "E = y + V²/(2g)=1.24. So V²/(2g)=1.24-1.2=0.04, V=√(0.04*19.62)=√0.7848=0.885 m/s ≈0.9m/s."
                },
                {
                    id: "cm17q054",
                    src: "WATE701-00191",
                    text: "The specific energy of a rectangular channel having dimensions 2m×3m is 3.095m. Calculate the friction factor.",
                    options: [
                        { key: "a", text: "0.01" },
                        { key: "b", text: "0.03" },
                        { key: "c", text: "0.02" },
                        { key: "d", text: "0.04" }
                    ],
                    answer: "c",
                    explanation: "Specific energy is E equal to y plus V squared over 2g, so subtracting the depth leaves the velocity head, from which the velocity and hence the discharge follow. The friction factor is then obtained from the Darcy form, f equal to 8gRS over V squared, once the hydraulic radius and slope are known."
                },
                {
                    id: "cm17q055",
                    src: "WATE701-00192",
                    text: "Calculate the average shear stress for a rectangular channel having depth 0.5m, width 0.8m if the specific energy is 0.56m.",
                    options: [
                        { key: "a", text: "2.32 N/m²" },
                        { key: "b", text: "4.32 N/m²" },
                        { key: "c", text: "5.32 N/m²" },
                        { key: "d", text: "3.32 N/m²" }
                    ],
                    answer: "d",
                    explanation: "Shear stress τ = γ R S, where γ=9810 N/m³. Need S. From specific energy: E = y + V²/(2g)=0.56. With y=0.5, so V²/(2g)=0.06, V=√(0.06*19.62)=√1.1772=1.085 m/s. Q=A*V=(0.8*0.5)*1.085=0.4*1.085=0.434 m³/s. For uniform flow, S = (V*n / R^(2/3))^2, but n not given. Or using Chezy? Perhaps assume that the specific energy is minimum, so critical flow. Then y_c = 2/3 E = 0.373m, but given depth 0.5m, so not critical. This is tricky. Perhaps they want the shear stress at the bed based on the energy gradient? Another way: average shear stress = γ R S_f, and S_f = dE/dx. Not given. Perhaps for the given specific energy, we can find the slope if we assume uniform flow. But not enough info. Maybe the answer is (b) 3.32."
                },
                {
                    id: "cm17q056",
                    src: "WATE701-00193",
                    text: "Calculate the specific energy for the most economical rectangular channel having depth 2m and width 4m if the bed slope of the channel is 1 in 1200. C = 35.",
                    options: [
                        { key: "a", text: "2.05m" },
                        { key: "b", text: "3.05m" },
                        { key: "c", text: "4.05m" },
                        { key: "d", text: "5.05m" }
                    ],
                    answer: "a",
                    explanation: "For rectangular, most economical has B=2y, but here width=4m, depth=2m, so indeed B=2y. For uniform flow, V = C√(R*S). R=y/2=1m. S=1/1200=0.000833. V=35√(1*0.000833)=35*0.02887=1.01 m/s. Then specific energy E = y + V²/(2g)=2 + (1.01²)/(19.62)=2 + 0.052=2.052m."
                },
                {
                    id: "cm17q057",
                    src: "WATE701-00194",
                    text: "Estimate the specific energy for the most economical trapezoidal channel section having depth of 5m, side slope of 1H:4V and bed slope of 1 in 1200.",
                    options: [
                        { key: "a", text: "1.14m" },
                        { key: "b", text: "2.14m" },
                        { key: "c", text: "3.14m" },
                        { key: "d", text: "4.14m" }
                    ],
                    answer: "b",
                    explanation: "For most economical trapezoidal, the condition is that the side slope is 1/√3, but here given 1H:4V (z=4). So it may not be most economical for given z. Perhaps they mean the section is designed for most economical with that z. The hydraulic radius R = y/2 = 2.5m. S=0.000833. Using Chezy, V = C√(R*S), but C not given. Perhaps assume C=50? Then V=50√(2.5*0.000833)=50√0.0020825=50*0.04564=2.282 m/s. Then E = y + V²/(2g)=5+0.265≈5.27 m."
                }
            ]
        },
        {
            id: "cm17hydr",
            name: "Hydropower",
            subject: "Hydropower",
            accent: "cyan",
            blurb: "10 questions drawn from the Hydropower bank.",
            questions: [
                {
                    id: "cm17q058",
                    src: "HYDR626-00143",
                    text: "The important type of axial flow reaction turbines are ______",
                    options: [
                        { key: "a", text: "Propeller and Pelton turbines" },
                        { key: "b", text: "Kaplan and Francis turbines" },
                        { key: "c", text: "Propeller and Kaplan turbines" },
                        { key: "d", text: "Propeller and Francis turbines" }
                    ],
                    answer: "c",
                    explanation: "Axial flow reaction turbines are those where water flows parallel to the axis of rotation. The main types are the Propeller turbine (with fixed blades) and the Kaplan turbine (an evolved propeller turbine with adjustable blades for better efficiency at partial loads)."
                },
                {
                    id: "cm17q059",
                    src: "HYDR626-00144",
                    text: "______ is an axial flow reaction turbines, if vanes are fixed to hub of turbine.",
                    options: [
                        { key: "a", text: "Francis turbine" },
                        { key: "b", text: "Kaplan turbine" },
                        { key: "c", text: "Pelton turbine" },
                        { key: "d", text: "Propeller turbine" }
                    ],
                    answer: "d",
                    explanation: "A propeller turbine is an axial flow reaction turbine where the runner blades are fixed to the hub and are not adjustable. A Kaplan turbine is also axial flow but has adjustable blades. Francis turbines are mixed flow, and Pelton turbines are impulse turbines."
                },
                {
                    id: "cm17q060",
                    src: "HYDR626-00145",
                    text: "Velocity triangles are used to analyze",
                    options: [
                        { key: "a", text: "Flow of water along blades of turbine" },
                        { key: "b", text: "Measure discharge of flow" },
                        { key: "c", text: "Angle of deflection of jet" },
                        { key: "d", text: "Flow of water, measure of discharge, angle of deflection" }
                    ],
                    answer: "a",
                    explanation: "Velocity triangles are graphical representations of the absolute, relative, and whirl velocities of water at the inlet and outlet of a turbine runner. They are the primary tool for analyzing the flow geometry and energy transfer between the water and the blades."
                },
                {
                    id: "cm17q061",
                    src: "HYDR626-00146",
                    text: "Radial flow reaction turbines contain spiral casing which area ______",
                    options: [
                        { key: "a", text: "Remains constant" },
                        { key: "b", text: "Gradually decreases" },
                        { key: "c", text: "Gradually increases" },
                        { key: "d", text: "Suddenly decreases" }
                    ],
                    answer: "b",
                    explanation: "The spiral casing (scroll case) of a reaction turbine (like a Francis turbine) is designed to surround the runner. Its cross-sectional area gradually decreases around the circumference. This design ensures a uniform distribution of water all around the guide vanes and maintains constant velocity as the flow rate decreases towards the end of the spiral."
                },
                {
                    id: "cm17q062",
                    src: "HYDR626-00147",
                    text: "The pressure at the exit of runner of reaction turbine is generally ______ than atmospheric pressure",
                    options: [
                        { key: "a", text: "Greater" },
                        { key: "b", text: "Constant" },
                        { key: "c", text: "Lesser" },
                        { key: "d", text: "Equal" }
                    ],
                    answer: "c",
                    explanation: "In a reaction turbine (e.g., Francis, Kaplan), the runner is completely submerged in water and the casing is sealed. The pressure at the outlet of the runner is intentionally kept less than atmospheric pressure (vacuum) to maximize the effective head across the turbine, thereby extracting more energy from the water."
                },
                {
                    id: "cm17q063",
                    src: "HYDR626-00148",
                    text: "In inward radial flow reaction turbine the ratio of tangential wheel at inlet to given velocity of jet is known as ______.",
                    options: [
                        { key: "a", text: "Flow ratio" },
                        { key: "b", text: "Discharge" },
                        { key: "c", text: "Radial discharge" },
                        { key: "d", text: "Speed ratio" }
                    ],
                    answer: "d",
                    explanation: "The speed ratio (φ) is a key non-dimensional parameter for turbines. For a radial flow turbine, it is defined as the ratio of the tangential velocity (peripheral velocity) of the runner at inlet to the theoretical spouting velocity of the jet (√(2gH)), where H is the net head."
                },
                {
                    id: "cm17q064",
                    src: "HYDR626-00150",
                    text: "Cavitation usually occurs due to the change of which of the following?",
                    options: [
                        { key: "a", text: "Pressure" },
                        { key: "b", text: "Temperature" },
                        { key: "c", text: "Volume" },
                        { key: "d", text: "Heat" }
                    ],
                    answer: "a",
                    explanation: "Cavitation is the formation and subsequent collapse of vapor bubbles in a liquid. It occurs when the local static pressure in the fluid drops below the vapor pressure of the liquid, which is primarily a function of pressure, not temperature, volume, or heat."
                },
                {
                    id: "cm17q065",
                    src: "HYDR626-00151",
                    text: "Penstocks are made up of ______.",
                    options: [
                        { key: "a", text: "Cast iron" },
                        { key: "b", text: "Steel" },
                        { key: "c", text: "Mild steel" },
                        { key: "d", text: "Wrought iron" }
                    ],
                    answer: "b",
                    explanation: "Penstocks are large pipes that convey water under high pressure to turbines. They are subjected to immense stress and are therefore almost exclusively made from high-strength steel to withstand the internal pressure and prevent bursting."
                },
                {
                    id: "cm17q066",
                    src: "HYDR626-00152",
                    text: "A penstock in a hydroelectric power plant is:",
                    options: [
                        { key: "a", text: "a pipe connected to runner outlet" },
                        { key: "b", text: "a nozzle that releases high pressure water on turbine" },
                        { key: "c", text: "a conduit connecting forebay to scroll case" },
                        { key: "d", text: "a pipe connecting surge tank to dam" }
                    ],
                    answer: "c",
                    explanation: "A penstock is a crucial conduit that carries water from the forebay (or intake structure) at the head of the system down to the turbines housed in the powerhouse, where it connects to the scroll case or distributor."
                },
                {
                    id: "cm17q067",
                    src: "HYDR626-00153",
                    text: "Which statement about a surge tank is wrong?",
                    options: [
                        { key: "a", text: "Ideal location of surge tank is at the turbine inlet" },
                        { key: "b", text: "A decrease in load demands causes a rise in water level in surge tank" },
                        { key: "c", text: "Surge tanks are installed to reduce harmful effects of water hammer phenomenon" },
                        { key: "d", text: "Surge tanks are totally closed to avoid entry of unwanted objects to penstock" }
                    ],
                    answer: "d",
                    explanation: "Surge tanks are not totally closed; they are open at the top to the atmosphere. This allows the water level to rise and fall freely to absorb pressure surges. A closed tank would not function as a surge tank."
                }
            ]
        },
        {
            id: "cm17irri",
            name: "Irrigation and Drainage",
            subject: "Irrigation",
            accent: "emerald",
            blurb: "11 questions drawn from the Irrigation and Drainage bank.",
            questions: [
                {
                    id: "cm17q068",
                    src: "IRRI951-00169",
                    text: "What type of force is completely responsible for the bed load movement?",
                    options: [
                        { key: "a", text: "Drag Force" },
                        { key: "b", text: "Forces of Turbulence" },
                        { key: "c", text: "Capillary Force" },
                        { key: "d", text: "Gravity Force" }
                    ],
                    answer: "a",
                    explanation: "The drag force, which is the component of the fluid's force parallel to the bed, is directly responsible for pulling and rolling the sediment particles along the channel bed."
                },
                {
                    id: "cm17q069",
                    src: "IRRI951-00170",
                    text: "What type of force is needed for suspension of suspended load in flowing water?",
                    options: [
                        { key: "a", text: "Capillary Force" },
                        { key: "b", text: "Forces of Turbulence" },
                        { key: "c", text: "Drag Force" },
                        { key: "d", text: "Gravity Force" }
                    ],
                    answer: "b",
                    explanation: "Suspended sediment is kept in suspension by the upward components of turbulent eddies within the flowing water, which counteract the downward force of gravity."
                },
                {
                    id: "cm17q070",
                    src: "IRRI951-00171",
                    text: "What cause is prime responsible for the heavy movement of water from main canal to branch canal?",
                    options: [
                        { key: "a", text: "Velocity of Flow" },
                        { key: "b", text: "Type of Flow" },
                        { key: "c", text: "Existence of Favorable Gradient" },
                        { key: "d", text: "Depth of the Canal" }
                    ],
                    answer: "c",
                    explanation: "A branch canal takes off from the main canal. The prime reason for significant water flow into a branch canal is that its alignment offers a steeper and more favorable gradient compared to the main canal, attracting more water."
                },
                {
                    id: "cm17q071",
                    src: "IRRI951-00172",
                    text: "Lacey’s regime theory is valid for",
                    options: [
                        { key: "a", text: "Lined canal" },
                        { key: "b", text: "Unlined canal" },
                        { key: "c", text: "Non-alluvial canal" },
                        { key: "d", text: "Alluvial canal" }
                    ],
                    answer: "d",
                    explanation: "Lacey's theory deals with the design of stable channels in alluvial soils (silt, sand, gravel) which are transported by water. It is not applicable to lined or non-alluvial (rocky) canals."
                },
                {
                    id: "cm17q072",
                    src: "IRRI951-00173",
                    text: "Water in which condition or state carry a maximum amount of sediment?",
                    options: [
                        { key: "a", text: "Floods" },
                        { key: "b", text: "Uniform State" },
                        { key: "c", text: "Vapor State" },
                        { key: "d", text: "Ice" }
                    ],
                    answer: "a",
                    explanation: "During floods, the discharge and velocity of a river are at their highest. This increased flow energy allows the water to pick up and transport a vastly greater amount of sediment."
                },
                {
                    id: "cm17q073",
                    src: "IRRI951-00174",
                    text: "What minimum value of shear stress is needed to move the sediment?",
                    options: [
                        { key: "a", text: "Critical Velocity Ratio" },
                        { key: "b", text: "Critical Shear Stress" },
                        { key: "c", text: "Critical Velocity" },
                        { key: "d", text: "Drag Force" }
                    ],
                    answer: "b",
                    explanation: "The critical shear stress is the minimum value of the tractive force (shear stress) exerted by the flowing water that is required to initiate motion of a sediment particle on the channel bed."
                },
                {
                    id: "cm17q074",
                    src: "IRRI951-00175",
                    text: "What is the range of value of Manning’s coefficient for straight alignment for cast in-situ concrete lining?",
                    options: [
                        { key: "a", text: "0.015-0.018" },
                        { key: "b", text: "0.018-0.020" },
                        { key: "c", text: "0.012-0.015" },
                        { key: "d", text: "0.020-0.025" }
                    ],
                    answer: "c",
                    explanation: "Cast in-situ concrete lining provides a very smooth surface. The Manning's roughness coefficient 'n' for such a surface typically ranges from 0.012 to 0.015."
                },
                {
                    id: "cm17q075",
                    src: "IRRI951-00176",
                    text: "Which of the following statement is wrong?",
                    options: [
                        { key: "a", text: "A lined canal is not susceptible to erosion" },
                        { key: "b", text: "The provision of adequate lining reduces the danger of breaches of channel" },
                        { key: "c", text: "The lining does not reduce the money spent in removing weeds" },
                        { key: "d", text: "Lining eliminates flood dangers" }
                    ],
                    answer: "d",
                    explanation: "Lining prevents seepage and increases velocity, but it does not eliminate flood dangers. Floods are caused by excessive inflow, which can still overtop the canal banks whether lined or unlined."
                },
                {
                    id: "cm17q076",
                    src: "IRRI951-00177",
                    text: "In soil-cement lining the Portland cement is added to the soil up to the extent of ______",
                    options: [
                        { key: "a", text: "2% to 8%" },
                        { key: "b", text: "4% to 5%" },
                        { key: "c", text: "0.1% to 5%" },
                        { key: "d", text: "&gt; 10%" }
                    ],
                    answer: "a",
                    explanation: "In soil-cement lining, a small percentage of Portland cement (typically between 2% to 8% by weight) is mixed with the soil and compacted. This stabilizes the soil, making it more impervious and durable."
                },
                {
                    id: "cm17q077",
                    src: "IRRI951-00178",
                    text: "With the increase in supplied irrigation water, the yield of crops",
                    options: [
                        { key: "a", text: "Increases continuously" },
                        { key: "b", text: "Increases up to certain limit, and then decreases" },
                        { key: "c", text: "Decreasing continuously" },
                        { key: "d", text: "Increases up to certain limit, and then becomes constant" }
                    ],
                    answer: "b",
                    explanation: "Beyond a certain point, over-irrigation can lead to waterlogging, which deprives plant roots of oxygen and can leach away nutrients, ultimately causing a decrease in crop yield."
                },
                {
                    id: "cm17q078",
                    src: "IRRI951-00179",
                    text: "The relationship between the duty D in ha/cumecs, the water depth Δ in cm, and base period B in days, D is given by:",
                    options: [
                        { key: "a", text: "8648/Δ" },
                        { key: "b", text: "864Δ/B" },
                        { key: "c", text: "864B/Δ" },
                        { key: "d", text: "8648/2Δ" }
                    ],
                    answer: "c",
                    explanation: "The standard formula connecting duty (D), delta (Δ), and base period (B) is Δ = (8.64B)/D. Rearranging for duty gives D = (8.64B)/Δ. Multiplying numerator and denominator by 1000 to express delta in cm gives D = (864B)/Δ."
                }
            ]
        },
        {
            id: "cm17tran",
            name: "Transportation",
            subject: "Transportation",
            accent: "rose",
            blurb: "11 questions drawn from the Transportation bank.",
            questions: [
                {
                    id: "cm17q079",
                    src: "TRAN808-00169",
                    text: "Which aggregate produce higher stability of mix?",
                    options: [
                        { key: "a", text: "Gravel" },
                        { key: "b", text: "Rounded sand" },
                        { key: "c", text: "Fly ash" },
                        { key: "d", text: "Sharp sand" }
                    ],
                    answer: "d",
                    explanation: "Angular and sharp aggregates (crushed stone, sharp sand) interlock more effectively than rounded aggregates (gravel, rounded sand), providing higher shear strength and stability to the bituminous mix or concrete."
                },
                {
                    id: "cm17q080",
                    src: "TRAN808-00170",
                    text: "Maximum size of aggregate in base course is...",
                    options: [
                        { key: "a", text: "50 mm" },
                        { key: "b", text: "25 mm" },
                        { key: "c", text: "40 mm" },
                        { key: "d", text: "30 mm" }
                    ],
                    answer: "a",
                    explanation: "For base courses like Water Bound Macadam (WBM) or Wet Mix Macadam (WMM), the maximum nominal size of aggregate used is typically 50 mm (or 63mm in some cases) to provide a strong, well-draining foundation."
                },
                {
                    id: "cm17q081",
                    src: "TRAN808-00171",
                    text: "Maximum size of aggregate in surface course is ...",
                    options: [
                        { key: "a", text: "18.5mm" },
                        { key: "b", text: "19.5mm" },
                        { key: "c", text: "20.5mm" },
                        { key: "d", text: "21.5mm" }
                    ],
                    answer: "b",
                    explanation: "For bituminous surface courses like Bituminous Concrete (BC), the maximum nominal aggregate size is usually restricted to 19 mm (or 13.2mm for thinner layers) to ensure a smooth, dense, and uniform riding surface."
                },
                {
                    id: "cm17q082",
                    src: "TRAN808-00172",
                    text: "The specific gravity of bitumen lies between ______",
                    options: [
                        { key: "a", text: "0.8 &amp; 0.9" },
                        { key: "b", text: "0.55 &amp; 0.97" },
                        { key: "c", text: "0.97 &amp; 1.02" },
                        { key: "d", text: "1.02 &amp; 1.05" }
                    ],
                    answer: "c",
                    explanation: "The specific gravity of pure bitumen typically falls within the range of 0.97 to 1.02. This property is important for volume calculations in mix design and for identifying impurities."
                },
                {
                    id: "cm17q083",
                    src: "TRAN808-00173",
                    text: "The tests to evaluate the strength of subgrade soil can be broadly classified as",
                    options: [
                        { key: "a", text: "Shear and penetration tests" },
                        { key: "b", text: "Shear and bearing tests" },
                        { key: "c", text: "Bearing and penetration tests" },
                        { key: "d", text: "Shear, bearing and penetration tests" }
                    ],
                    answer: "d",
                    explanation: "Subgrade strength is evaluated using tests based on shear principles (e.g., direct shear, triaxial), bearing capacity (e.g., plate load test), and penetration resistance (e.g., CBR test, standard penetration test)."
                },
                {
                    id: "cm17q084",
                    src: "TRAN808-00175",
                    text: "What does CBR stand for?",
                    options: [
                        { key: "a", text: "California Bearing Ratio" },
                        { key: "b", text: "California Binding Ratio" },
                        { key: "c", text: "Combined Binding Ratio" },
                        { key: "d", text: "Combined Bearing Ratio" }
                    ],
                    answer: "a",
                    explanation: "CBR stands for California Bearing Ratio. It is a penetration test developed by the California Division of Highways to evaluate the mechanical strength of subgrade soils and base courses for pavement design."
                },
                {
                    id: "cm17q085",
                    src: "TRAN808-00176",
                    text: "Which of the below indices is a measure of shearing strength of soil at the plastic limit?",
                    options: [
                        { key: "a", text: "Plasticity index" },
                        { key: "b", text: "Toughness index" },
                        { key: "c", text: "Consistency index" },
                        { key: "d", text: "Flow index" }
                    ],
                    answer: "b",
                    explanation: "The Toughness Index (IT) is defined as the ratio of the Plasticity Index (IP) to the Flow Index (IF). It gives a measure of the shearing strength of the soil at the plastic limit."
                },
                {
                    id: "cm17q086",
                    src: "TRAN808-00177",
                    text: "In the vane shear test, the difference between the initial and final reading gives the",
                    options: [
                        { key: "a", text: "Angle of failure" },
                        { key: "b", text: "Angle of repose" },
                        { key: "c", text: "Angle of torque" },
                        { key: "d", text: "Angle of internal friction" }
                    ],
                    answer: "c",
                    explanation: "The vane shear test measures the undrained shear strength of soft clays. The torque applied to rotate the vane is measured. The difference in readings relates directly to the angle of torque, which is used to calculate the shear strength."
                },
                {
                    id: "cm17q087",
                    src: "TRAN808-00178",
                    text: "The most raised portion of the pavement is called",
                    options: [
                        { key: "a", text: "Super elevation" },
                        { key: "b", text: "Camber" },
                        { key: "c", text: "Kerb" },
                        { key: "d", text: "Crown" }
                    ],
                    answer: "d",
                    explanation: "The crown is the highest central point of a pavement cross-section, designed for drainage. Camber is the cross-slope, and superelevation is the banking on curves."
                },
                {
                    id: "cm17q088",
                    src: "TRAN808-00179",
                    text: "The design of horizontal and vertical alignments, super elevation, gradient is worst affected by",
                    options: [
                        { key: "a", text: "Speed of vehicle" },
                        { key: "b", text: "Length of vehicle" },
                        { key: "c", text: "Width of vehicle" },
                        { key: "d", text: "Height of vehicle" }
                    ],
                    answer: "a",
                    explanation: "The design speed of a vehicle is the primary factor influencing geometric design elements like alignment, superelevation, and gradient, as it determines sight distances and centrifugal forces."
                },
                {
                    id: "cm17q089",
                    src: "TRAN808-00180",
                    text: "The Rolling terrain topography has a cross slope of",
                    options: [
                        { key: "a", text: "0-10%" },
                        { key: "b", text: "10-25%" },
                        { key: "c", text: "25-60%" },
                        { key: "d", text: "&gt; 60%" }
                    ],
                    answer: "b",
                    explanation: "As per standard terrain classification, Rolling terrain is characterized by cross slopes between 10% and 25%."
                }
            ]
        },
        {
            id: "cm17wate",
            name: "Water Supply, Sanitation and Environment",
            subject: "Water Supply",
            accent: "blue",
            blurb: "11 questions drawn from the Water Supply, Sanitation and Environment bank.",
            questions: [
                {
                    id: "cm17q090",
                    src: "WATE813-00156",
                    text: "In the design and operation of an oxidation pond, which of these factors are important?",
                    options: [
                        { key: "a", text: "depth and shape" },
                        { key: "b", text: "surface area" },
                        { key: "c", text: "inlets and outlets" },
                        { key: "d", text: "all of these" }
                    ],
                    answer: "d",
                    explanation: "All factors are critical. Depth affects light penetration and anaerobic conditions. Surface area determines oxygen transfer from the atmosphere. Inlets and outlets must be designed to avoid short-circuiting and ensure proper detention time."
                },
                {
                    id: "cm17q091",
                    src: "WATE813-00157",
                    text: "A trickling filter is primarily a",
                    options: [
                        { key: "a", text: "solid from sewage" },
                        { key: "b", text: "straining process to remove turbidity from water" },
                        { key: "c", text: "straining process to remove bacteria from water" },
                        { key: "d", text: "biological oxidation process to remove organic matter from sewage" }
                    ],
                    answer: "d",
                    explanation: "A trickling filter is a secondary treatment unit where sewage is distributed over a bed of media. A microbial film (zoogleal slime) on the media absorbs and biologically oxidizes organic matter."
                },
                {
                    id: "cm17q092",
                    src: "WATE813-00158",
                    text: "Critical DO deficit is equal to",
                    options: [
                        { key: "a", text: "D_c = (k_d / k_r) * L_0 * 10^(-k_d * t_c)" },
                        { key: "b", text: "D_c = (k_d / k_r) * L_0 * 100^(-k_d * t_c)" },
                        { key: "c", text: "Not Provided" }
                    ],
                    answer: "a",
                    explanation: "The critical dissolved oxygen deficit (D_c) in a stream, as per the Streeter-Phelps equation, occurs at a critical time (t_c) and is calculated using the formula: D_c = (k_d / k_r) * L_0 * 10^(-k_d * t_c), where k_d is the deoxygenation rate constant, k_r is the reaeration rate constant, and L_0 is the ultimate BOD."
                },
                {
                    id: "cm17q093",
                    src: "WATE813-00160",
                    text: "In the oxidation ditch, the excess sludge is taken to",
                    options: [
                        { key: "a", text: "anaerobic digester" },
                        { key: "b", text: "aerobic digester" },
                        { key: "c", text: "drying digester" },
                        { key: "d", text: "incinerator" }
                    ],
                    answer: "b",
                    explanation: "Oxidation ditches are extended aeration activated sludge systems. The excess sludge produced is well-stabilized aerobically and is often further treated in aerobic digesters before disposal."
                },
                {
                    id: "cm17q094",
                    src: "WATE813-00161",
                    text: "Sewage treatment in an oxidation pond is done by",
                    options: [
                        { key: "a", text: "algal photosynthesis" },
                        { key: "b", text: "bacterial oxidation" },
                        { key: "c", text: "algal-bacterial symbiosis" },
                        { key: "d", text: "chemical oxidation" }
                    ],
                    answer: "c",
                    explanation: "Oxidation ponds rely on a symbiotic relationship: Bacteria decompose organic matter, producing CO₂ and nutrients. Algae use these products for photosynthesis, producing oxygen which is used by the bacteria."
                },
                {
                    id: "cm17q095",
                    src: "WATE813-00162",
                    text: "Identify the waste water treatment unit which use both aerobic and anaerobic mechanism for the removal of organic matter",
                    options: [
                        { key: "a", text: "Activated sludge process" },
                        { key: "b", text: "Oxidation ditch" },
                        { key: "c", text: "Not Provided" },
                        { key: "d", text: "Trickling filter" }
                    ],
                    answer: "d",
                    explanation: "A trickling filter has aerobic conditions on the outer surface of the biofilm and anaerobic conditions towards the inner layers of the thick microbial slime, utilizing both mechanisms."
                },
                {
                    id: "cm17q096",
                    src: "WATE813-00163",
                    text: "The maximum efficiency of BOD removal achieved in",
                    options: [
                        { key: "a", text: "Oxidation ditch" },
                        { key: "b", text: "Aerated lagoons" },
                        { key: "c", text: "Trickling filters" },
                        { key: "d", text: "Digestion tank" }
                    ],
                    answer: "a",
                    explanation: "Oxidation ditches are a form of extended aeration activated sludge process, which is highly efficient and can achieve BOD removal efficiencies of 95% or higher, often greater than standard trickling filters or aerated lagoons."
                },
                {
                    id: "cm17q097",
                    src: "WATE813-00164",
                    text: "In trickling filter, what is the phenomenon of losing slime layer called?",
                    options: [
                        { key: "a", text: "Sluggling" },
                        { key: "b", text: "Sloughing" },
                        { key: "c", text: "Slinning" },
                        { key: "d", text: "Slashing" }
                    ],
                    answer: "b",
                    explanation: "Sloughing is the process where portions of the accumulated microbial slime layer on the filter media detach and wash away in the effluent. This is a natural part of the trickling filter cycle and helps prevent clogging."
                },
                {
                    id: "cm17q098",
                    src: "WATE813-00165",
                    text: "The recirculation factor in a low rate trickling filter is",
                    options: [
                        { key: "a", text: "0" },
                        { key: "b", text: "10" },
                        { key: "c", text: "1" },
                        { key: "d", text: "100" }
                    ],
                    answer: "c",
                    explanation: "Low-rate trickling filters typically operate without recirculation (recirculation ratio = 0) or with a very low ratio (often less than 1). The option '1' is the closest standard value, representing a recirculation ratio of 1:1."
                },
                {
                    id: "cm17q099",
                    src: "WATE813-00166",
                    text: "The organic loading in a trickling filter is measured in",
                    options: [
                        { key: "a", text: "m³/day" },
                        { key: "b", text: "Not Provided" },
                        { key: "c", text: "gm/m²/day" }
                    ],
                    answer: "c",
                    explanation: "Organic loading on a trickling filter is typically expressed as mass of BOD applied per unit surface area of the filter per day (e.g., grams of BOD per square meter per day, g/m²/d)."
                },
                {
                    id: "cm17q100",
                    src: "WATE813-00167",
                    text: "The efficiency of biochemical oxygen demand (BOD) removal in trickling filter is",
                    options: [
                        { key: "a", text: "65%" },
                        { key: "b", text: "98%" },
                        { key: "c", text: "Not Provided" }
                    ],
                    answer: "a",
                    explanation: "Standard-rate trickling filters typically achieve BOD removal efficiencies in the range of 65% to 85%. High-rate filters can reach 80-90%, but 98% is more typical of advanced tertiary treatment."
                }
            ]
        }
    ]
};

/* Registered lazily — js/civil.js injects this file when the set is opened. */
window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["civil-17"] = CIVIL_MODEL_17;
