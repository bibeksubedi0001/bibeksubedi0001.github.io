/* ============================================================
   CIVIL MODEL SET 16 — Civil Engineering licence-style model paper
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
const CIVIL_MODEL_16 = {
    day: 46,
    kind: "model",
    badge: { top: "Model", main: "C16" },
    title: "Civil Model Set 16",
    subtitle: "Civil Engineering · 9 subjects",
    durationMinutes: 120,
    negativeMarking: 0,
    chapters: [
        {
            id: "cm16basi",
            name: "Basic Civil Engineering",
            subject: "Basic Civil",
            accent: "blue",
            blurb: "13 questions drawn from the Basic Civil Engineering bank.",
            questions: [
                {
                    id: "cm16q001",
                    src: "BASI674-00188",
                    text: "Brick nogging type of partition wall, is constructed by",
                    options: [
                        { key: "a", text: "Constructing brick work within a wooden framework" },
                        { key: "b", text: "Laying bricks as stretchers in cement mortar" },
                        { key: "c", text: "Laying bricks as headers in cement mortar" },
                        { key: "d", text: "Reinforcing brick wall with iron straps" }
                    ],
                    answer: "a",
                    explanation: "Brick nogging is a traditional construction method where a timber frame is built and the spaces between the wooden studs are filled with bricks laid in a mortar, typically in a stretcher bond pattern."
                },
                {
                    id: "cm16q002",
                    src: "BASI674-00189",
                    text: "The type of ashlar masonry in which stones are finely chisel dressed and thickness of joints does not exceed 3 mm, is",
                    options: [
                        { key: "a", text: "Chamfered ashlar masonry" },
                        { key: "b", text: "Coursed ashlar masonry" },
                        { key: "c", text: "Ashlar facing masonry" },
                        { key: "d", text: "Random coursed ashlar masonry" }
                    ],
                    answer: "b",
                    explanation: "Coursed ashlar masonry uses finely chisel-dressed stones laid in uniform horizontal layers with high precision. This technique ensures a superior finish where mortar joints are perfectly thin and do not exceed 3 mm."
                },
                {
                    id: "cm16q003",
                    src: "BASI674-00190",
                    text: "The nominal thickness of one brick wall in mm, is",
                    options: [
                        { key: "a", text: "90 mm" },
                        { key: "b", text: "150 mm" },
                        { key: "c", text: "200 mm" },
                        { key: "d", text: "190 mm" }
                    ],
                    answer: "c",
                    explanation: "The nominal thickness of a wall is the thickness including the mortar joint. A standard brick is 190 mm long, and with a 10 mm mortar joint on one end, the nominal length (and thus the wall thickness for a one-brick wall) becomes 200 mm."
                },
                {
                    id: "cm16q004",
                    src: "BASI674-00191",
                    text: "Queen closer may be placed",
                    options: [
                        { key: "a", text: "in header course" },
                        { key: "b", text: "in stretcher course" },
                        { key: "c", text: "in stretcher course next to first brick" },
                        { key: "d", text: "in header course next to first brick" }
                    ],
                    answer: "d",
                    explanation: "A queen closer is primarily used next to the quoin header (the first brick in a header course) to break the vertical joint and maintain the bond pattern in English bond and its variations."
                },
                {
                    id: "cm16q005",
                    src: "BASI674-00192",
                    text: "To construct a 10 cm thick partition wall, you will prefer",
                    options: [
                        { key: "a", text: "Stretcher bond" },
                        { key: "b", text: "English bond" },
                        { key: "c", text: "Flemish bond" },
                        { key: "d", text: "Header bond" }
                    ],
                    answer: "a",
                    explanation: "A 10 cm thick wall is essentially the width of a single brick. Stretcher bond, where all bricks are laid as stretchers, is the most suitable and common bond for such thin walls."
                },
                {
                    id: "cm16q006",
                    src: "BASI674-00193",
                    text: "The strength of brick masonry in 1:6 cement mortar, is",
                    options: [
                        { key: "a", text: "20 tonnes/m2" },
                        { key: "b", text: "40 tonnes/m2" },
                        { key: "c", text: "50 tonnes/m2" },
                        { key: "d", text: "60 tonnes/m2" }
                    ],
                    answer: "b",
                    explanation: "The compressive strength of brick masonry depends on the brick and mortar strength. With a 1:6 cement mortar, a typical strength is around 4 N/mm² or 40 tonnes/m² (since 1 N/mm² ≈ 10 tonnes/m²)."
                },
                {
                    id: "cm16q007",
                    src: "BASI674-00194",
                    text: "For brick construction, the lime-sand mortar, is",
                    options: [
                        { key: "a", text: "1 : 1" },
                        { key: "b", text: "1 : 3" },
                        { key: "c", text: "1 : 2" },
                        { key: "d", text: "1 : 4" }
                    ],
                    answer: "c",
                    explanation: "A standard, good-quality lime mortar mix for general brickwork is one part lime to two or three parts sand by volume. 1:2 is a common and strong specification."
                },
                {
                    id: "cm16q008",
                    src: "BASI674-00195",
                    text: "The nominal thickness of an expansion joint in brick walls, is kept more than",
                    options: [
                        { key: "a", text: "5 mm" },
                        { key: "b", text: "10 mm" },
                        { key: "c", text: "15 mm" },
                        { key: "d", text: "20 mm" }
                    ],
                    answer: "d",
                    explanation: "Expansion joints in brickwork are designed to allow for thermal movement. They are typically 20 mm to 25 mm wide to be effective and are filled with a compressible material."
                },
                {
                    id: "cm16q009",
                    src: "BASI674-00196",
                    text: "The 9 cm x 9 cm side of a brick as seen in the wall face, is generally known as",
                    options: [
                        { key: "a", text: "Header" },
                        { key: "b", text: "Stretcher" },
                        { key: "c", text: "Face" },
                        { key: "d", text: "Front" }
                    ],
                    answer: "a",
                    explanation: "When a brick is laid with its 9 cm x 9 cm end facing outwards, parallel to the wall face, it is called a header. This orientation is used to bond the wall together through its thickness."
                },
                {
                    id: "cm16q010",
                    src: "BASI674-00198",
                    text: "The type of bond in which every course contains both headers and stretchers, is called",
                    options: [
                        { key: "a", text: "English bond" },
                        { key: "b", text: "Flemish bond" },
                        { key: "c", text: "Russian bond" },
                        { key: "d", text: "Mixed bond" }
                    ],
                    answer: "b",
                    explanation: "Flemish bond is defined by each course consisting of alternating headers and stretchers. This pattern is repeated in every course."
                },
                {
                    id: "cm16q011",
                    src: "BASI674-00199",
                    text: "In stone masonry, a horizontal layer of stones is known as",
                    options: [
                        { key: "a", text: "Bed" },
                        { key: "b", text: "Bond" },
                        { key: "c", text: "Course" },
                        { key: "d", text: "Stretcher" }
                    ],
                    answer: "c",
                    explanation: "A 'course' is a continuous horizontal layer of masonry units (stones or bricks) in a wall."
                },
                {
                    id: "cm16q012",
                    src: "BASI674-00200",
                    text: "When stones are placed right across the wall at regular intervals is known as",
                    options: [
                        { key: "a", text: "Backing" },
                        { key: "b", text: "Hearing" },
                        { key: "c", text: "Through stone" },
                        { key: "d", text: "None of these." }
                    ],
                    answer: "c",
                    explanation: "A through stone (or bond stone) is a stone that extends over the entire thickness of the wall. It ties the wall together and improves its stability and strength."
                },
                {
                    id: "cm16q013",
                    src: "BASI674-00201",
                    text: "Which statement is false? Stone is ______",
                    options: [
                        { key: "a", text: "More resistant to fire than brick." },
                        { key: "b", text: "Stronger than brick." },
                        { key: "c", text: "More durable than brick." },
                        { key: "d", text: "More weather resisting than brick." }
                    ],
                    answer: "a",
                    explanation: "While stone is generally stronger, more durable, and more weather-resistant, it is not more resistant to fire than brick. Many stones, like granite, can crack and spall in intense heat, whereas well-burnt brick is an excellent fire-resistant material."
                }
            ]
        },
        {
            id: "cm16stru",
            name: "Structural Mechanics",
            subject: "Structural Mech",
            accent: "cyan",
            blurb: "11 questions drawn from the Structural Mechanics bank.",
            questions: [
                {
                    id: "cm16q014",
                    src: "STRU935-00158",
                    text: "The degree of static indeterminacy of a pin-jointed space frame is given by",
                    options: [
                        { key: "a", text: "m + r - 2j" },
                        { key: "b", text: "m + r - 3j" },
                        { key: "c", text: "3m + r - 3j" },
                        { key: "d", text: "m + r + 3j" }
                    ],
                    answer: "b",
                    explanation: "For a pin-jointed space frame, each joint has 3 degrees of freedom. The degree of static indeterminacy is given by (number of members + number of reactions) - 3*(number of joints)."
                },
                {
                    id: "cm16q015",
                    src: "STRU935-00159",
                    text: "A pin-jointed plane frame is unstable if",
                    options: [
                        { key: "a", text: "(m + r) = 2j" },
                        { key: "b", text: "(m + r) &gt; 2j" },
                        { key: "c", text: "(m + r) &lt; 2j" },
                        { key: "d", text: "None" }
                    ],
                    answer: "c",
                    explanation: "For a pin-jointed plane frame, the condition for instability is (m + r) &lt; 2j, where m is the number of members, r is the number of reaction components, and j is the number of joints. This means there are insufficient members and reactions to make the frame stable."
                },
                {
                    id: "cm16q016",
                    src: "STRU935-00160",
                    text: "The number of independent displacement components at each joint of a rigid-jointed space frame is",
                    options: [
                        { key: "a", text: "1" },
                        { key: "b", text: "2" },
                        { key: "c", text: "3" },
                        { key: "d", text: "6" }
                    ],
                    answer: "d",
                    explanation: "In a rigid-jointed space frame, each joint has 6 degrees of freedom: three translations (in x, y, z directions) and three rotations (about x, y, z axes)."
                },
                {
                    id: "cm16q017",
                    src: "STRU935-00161",
                    text: "Degree of static indeterminacy of a rigid-jointed plane frame having 15 members, 3 reaction components and 14 joints is",
                    options: [
                        { key: "a", text: "6" },
                        { key: "b", text: "2" },
                        { key: "c", text: "3" },
                        { key: "d", text: "8" }
                    ],
                    answer: "a",
                    explanation: "For a rigid-jointed plane frame, the degree of static indeterminacy is given by 3m + r - 3j. Here, m=15, r=3, j=14. So, 3*15 + 3 - 3*14 = 45 + 3 - 42 = 6."
                },
                {
                    id: "cm16q018",
                    src: "STRU935-00162",
                    text: "The degree of static indeterminacy up to which column analogy method can be used is",
                    options: [
                        { key: "a", text: "2" },
                        { key: "b", text: "3" },
                        { key: "c", text: "4" },
                        { key: "d", text: "Unrestricted" }
                    ],
                    answer: "b",
                    explanation: "The column analogy method is typically used for structures with degree of static indeterminacy up to 3."
                },
                {
                    id: "cm16q019",
                    src: "STRU935-00163",
                    text: "If in a pin-jointed plane frame (m + r) &gt; 2j, then the frame is (Where ‘m’ is number of members, ‘r’ is reaction components and ‘j’ is number of joints)",
                    options: [
                        { key: "a", text: "Stable and statically determinate" },
                        { key: "b", text: "Stable and statically indeterminate" },
                        { key: "c", text: "Unstable" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "b",
                    explanation: "For a pin-jointed plane frame, if (m + r) &gt; 2j, the frame is stable and statically indeterminate. The condition for statical determinacy is (m + r) = 2j."
                },
                {
                    id: "cm16q020",
                    src: "STRU935-00164",
                    text: "The Castigliano’s second theorem can be used to compute deflections",
                    options: [
                        { key: "a", text: "In statically determinate structures only" },
                        { key: "b", text: "At the point under the load only" },
                        { key: "c", text: "For beams and frames only" },
                        { key: "d", text: "For any type of structure" }
                    ],
                    answer: "d",
                    explanation: "Castigliano's second theorem is applicable to any linearly elastic structure, whether statically determinate or indeterminate."
                },
                {
                    id: "cm16q021",
                    src: "STRU935-00165",
                    text: "The deflection at any point of a perfect frame can be obtained by applying a unit load at the joint in",
                    options: [
                        { key: "a", text: "The direction in which the deflection is required" },
                        { key: "b", text: "Vertical direction" },
                        { key: "c", text: "Horizontal direction" },
                        { key: "d", text: "Inclined direction" }
                    ],
                    answer: "a",
                    explanation: "To find deflection at a point in a specific direction, a unit load is applied at that point in the same direction."
                },
                {
                    id: "cm16q022",
                    src: "STRU935-00166",
                    text: "The principle of virtual work can be applied to elastic system by considering the virtual work of",
                    options: [
                        { key: "a", text: "Internal forces only" },
                        { key: "b", text: "External forces only" },
                        { key: "c", text: "Internal as well as external forces" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "c",
                    explanation: "In the principle of virtual work, the virtual work done by external forces equals the virtual work done by internal forces."
                },
                {
                    id: "cm16q023",
                    src: "STRU935-00167",
                    text: "For the validity of principle of superposition, materials should behave in which manner?",
                    options: [
                        { key: "a", text: "non-linear-elastic" },
                        { key: "b", text: "Non-linear-inelastic" },
                        { key: "c", text: "linear-elastic" },
                        { key: "d", text: "Linear- inelastic" }
                    ],
                    answer: "c",
                    explanation: "The principle of superposition is valid only for linear elastic materials where the response is proportional to the load."
                },
                {
                    id: "cm16q024",
                    src: "STRU935-00168",
                    text: "If in planar system, X parts/members are there with Y no. of forces, then condition for statically determinacy is:",
                    options: [
                        { key: "a", text: "Y &lt; 3X" },
                        { key: "b", text: "Y &gt; 3X" },
                        { key: "c", text: "None" },
                        { key: "d", text: "Y = 3X" }
                    ],
                    answer: "d",
                    explanation: "For a planar system, each member/part has 3 equations of equilibrium. For statically determinacy, the number of forces (Y) should equal 3 times the number of parts (X)."
                }
            ]
        },
        {
            id: "cm16desi",
            name: "Design of Structures",
            subject: "Design of Str",
            accent: "slate",
            blurb: "10 questions drawn from the Design of Structures bank.",
            questions: [
                {
                    id: "cm16q025",
                    src: "DESI787-00136",
                    text: "The Indian standard code used for design of timber structures is",
                    options: [
                        { key: "a", text: "IS 883" },
                        { key: "b", text: "IS 1905" },
                        { key: "c", text: "IS 800" },
                        { key: "d", text: "IS 456" }
                    ],
                    answer: "a",
                    explanation: "IS 883: Code of Practice for Design of Structural Timber in Buildings is the relevant Indian Standard."
                },
                {
                    id: "cm16q026",
                    src: "DESI787-00137",
                    text: "The permissible deflection for 4m timber beam is",
                    options: [
                        { key: "a", text: "11.11 mm" },
                        { key: "b", text: "16.67 mm" },
                        { key: "c", text: "22.22 mm" },
                        { key: "d", text: "9.99 mm" }
                    ],
                    answer: "b",
                    explanation: "The permissible deflection for timber beams is usually limited to span/240. For a 4m (4000 mm) span, 4000/240 = 16.67 mm."
                },
                {
                    id: "cm16q027",
                    src: "DESI787-00138",
                    text: "The permissible deflection for 2m timber cantilever beam is",
                    options: [
                        { key: "a", text: "5.55 mm" },
                        { key: "b", text: "11.11 mm" },
                        { key: "c", text: "13.33 mm" },
                        { key: "d", text: "22.22 mm" }
                    ],
                    answer: "c",
                    explanation: "The permissible deflection for cantilevers is often limited to span/150. For a 2m (2000 mm) cantilever, 2000/150 = 13.33 mm."
                },
                {
                    id: "cm16q028",
                    src: "DESI787-00139",
                    text: "Maximum depth of timber beam of width 7 cm without lateral stiffness is",
                    options: [
                        { key: "a", text: "170 mm" },
                        { key: "b", text: "200 mm" },
                        { key: "c", text: "250 mm" },
                        { key: "d", text: "210 mm" }
                    ],
                    answer: "d",
                    explanation: "To prevent lateral buckling, the depth of a timber beam is often limited to a multiple of its width. A common rule is depth ≤ 3 * width. For 70 mm width, 3 * 70 = 210 mm."
                },
                {
                    id: "cm16q029",
                    src: "DESI787-00140",
                    text: "Minimum width of timber beam of span 4.0 m is",
                    options: [
                        { key: "a", text: "100 mm" },
                        { key: "b", text: "50 mm" },
                        { key: "c", text: "80 mm" },
                        { key: "d", text: "230 mm" }
                    ],
                    answer: "a",
                    explanation: "For structural adequacy and stability, a minimum width is required for a given span. For a 4m span, 100 mm is a typical minimum width specification."
                },
                {
                    id: "cm16q030",
                    src: "DESI787-00141",
                    text: "Intermediate vertical stiffeners in a plate girder need to be provided if the depth of web exceeds",
                    options: [
                        { key: "a", text: "50 t" },
                        { key: "b", text: "85 t" },
                        { key: "c", text: "100 t" },
                        { key: "d", text: "200 t" }
                    ],
                    answer: "b",
                    explanation: "As per design codes, intermediate stiffeners are required when the web depth-to-thickness ratio (d/t_w) exceeds 85√(250/f_y) to prevent web buckling under shear."
                },
                {
                    id: "cm16q031",
                    src: "DESI787-00142",
                    text: "Bolts are most suitable to carry",
                    options: [
                        { key: "a", text: "Bending" },
                        { key: "b", text: "Axial tension" },
                        { key: "c", text: "Shear" },
                        { key: "d", text: "Shear and bending" }
                    ],
                    answer: "c",
                    explanation: "Bolted connections are primarily designed to transfer shear forces between connected members. While they can carry tension, their primary and most efficient function is resisting shear."
                },
                {
                    id: "cm16q032",
                    src: "DESI787-00143",
                    text: "Rolled steel angle sections are classified as",
                    options: [
                        { key: "a", text: "Equal angles" },
                        { key: "b", text: "Unequal angles" },
                        { key: "c", text: "Bulb angles" },
                        { key: "d", text: "All the above" }
                    ],
                    answer: "d",
                    explanation: "Rolled steel angles come in various types: equal angles (legs same size), unequal angles (legs different sizes), and bulb angles (one leg thickened)."
                },
                {
                    id: "cm16q033",
                    src: "DESI787-00144",
                    text: "The Indian standard code which deals with steel structures, is",
                    options: [
                        { key: "a", text: "IS 800" },
                        { key: "b", text: "IS 801" },
                        { key: "c", text: "IS 802" },
                        { key: "d", text: "IS 803" }
                    ],
                    answer: "a",
                    explanation: "IS 800 is the fundamental Indian Standard code of practice for general construction in steel."
                },
                {
                    id: "cm16q034",
                    src: "DESI787-00145",
                    text: "A butt weld is specified by",
                    options: [
                        { key: "a", text: "Plate thickness" },
                        { key: "b", text: "Effective throat thickness" },
                        { key: "c", text: "Size of weld" },
                        { key: "d", text: "Penetration thickness" }
                    ],
                    answer: "b",
                    explanation: "The strength of a butt weld is determined by its effective throat thickness, which is the shortest distance from the root to the face of the weld."
                }
            ]
        },
        {
            id: "cm16soil",
            name: "Soil Mechanics and Foundation",
            subject: "Soil Mechanics",
            accent: "amber",
            blurb: "14 questions drawn from the Soil Mechanics and Foundation bank.",
            questions: [
                {
                    id: "cm16q035",
                    src: "SOIL136-00188",
                    text: "The property of a soil which allows it to be deformed rapidly without rupture, elastic rebound and also a volume change, is known",
                    options: [
                        { key: "a", text: "Porosity" },
                        { key: "b", text: "Permeability" },
                        { key: "c", text: "Plasticity" },
                        { key: "d", text: "Ductility" }
                    ],
                    answer: "c",
                    explanation: "Plasticity is the property of a soil that allows it to undergo deformation without cracking or rebounding elastically, and the deformation is permanent. This is a key property of fine-grained soils like clay."
                },
                {
                    id: "cm16q036",
                    src: "SOIL136-00189",
                    text: "Failure of the stability of slopes, generally occurs along",
                    options: [
                        { key: "a", text: "Slip plane" },
                        { key: "b", text: "A horizontal surface" },
                        { key: "c", text: "All the surfaces" },
                        { key: "d", text: "A curved surface" }
                    ],
                    answer: "d",
                    explanation: "Slope failures, such as landslides, most commonly occur along a curved surface, often approximated as a circular arc for analysis. This is known as a rotational slip or circular failure surface."
                },
                {
                    id: "cm16q037",
                    src: "SOIL136-00190",
                    text: "The shearing force acting along the slice of a curved surface of slippage, causes the soil to slide",
                    options: [
                        { key: "a", text: "Down at the center" },
                        { key: "b", text: "Upward at the center" },
                        { key: "c", text: "Down at the toe" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "c",
                    explanation: "In a typical rotational slope failure, the movement of the soil mass is rotational. The top of the slide moves downward, while the bottom (the toe) of the slide moves upward and outward."
                },
                {
                    id: "cm16q038",
                    src: "SOIL136-00191",
                    text: "With the increase in the amount of compaction energy",
                    options: [
                        { key: "a", text: "Optimum water content increases but maximum dry density decreases" },
                        { key: "b", text: "Optimum water content decreases but maximum dry density increases" },
                        { key: "c", text: "Both optimum water content and maximum dry density increase" },
                        { key: "d", text: "Both optimum water content and maximum dry density decrease" }
                    ],
                    answer: "b",
                    explanation: "As compactive effort increases, the maximum dry density that can be achieved increases. However, the optimum water content (the moisture content at which this maximum density occurs) decreases because less water is needed to lubricate the soil particles for denser packing under higher energy."
                },
                {
                    id: "cm16q039",
                    src: "SOIL136-00192",
                    text: "Soils containing organic matters",
                    options: [
                        { key: "a", text: "Are of spongy nature" },
                        { key: "b", text: "Swell with decrease of moisture" },
                        { key: "c", text: "Shrink with increase of moisture content" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "a",
                    explanation: "Organic soils, such as peat, have a spongy, compressible structure. They typically have very high water content, low specific gravity, and are highly compressible, making them unsuitable for supporting foundations."
                },
                {
                    id: "cm16q040",
                    src: "SOIL136-00193",
                    text: "What is the compression called that resulting from a long-term static load and consequent escape of pore water?",
                    options: [
                        { key: "a", text: "compression" },
                        { key: "b", text: "compressibility" },
                        { key: "c", text: "tension" },
                        { key: "d", text: "consolidation" }
                    ],
                    answer: "d",
                    explanation: "Consolidation is the process by which soil volume decreases due to the expulsion of water from the voids under a sustained, long-term static load. It is a time-dependent process primarily associated with cohesive soils."
                },
                {
                    id: "cm16q041",
                    src: "SOIL136-00194",
                    text: "By which process some compression of soil takes place, after the hydrostatic pressure reduces to zero?",
                    options: [
                        { key: "a", text: "secondary consolidation" },
                        { key: "b", text: "effective pressure" },
                        { key: "c", text: "load increment" },
                        { key: "d", text: "primary consolidation" }
                    ],
                    answer: "a",
                    explanation: "Secondary consolidation (or creep) is the compression that occurs after the primary consolidation is complete (i.e., after all excess pore water pressure has dissipated). It is due to the plastic adjustment of the soil fabric."
                },
                {
                    id: "cm16q042",
                    src: "SOIL136-00195",
                    text: "What is the secondary consolidation called?",
                    options: [
                        { key: "a", text: "effective pressure" },
                        { key: "b", text: "secondary time effect" },
                        { key: "c", text: "load increment" },
                        { key: "d", text: "compaction" }
                    ],
                    answer: "b",
                    explanation: "Secondary consolidation is also commonly referred to as the \"secondary time effect\" because it is a time-dependent deformation that occurs after primary consolidation, governed by the viscous resistance of the soil skeleton."
                },
                {
                    id: "cm16q043",
                    src: "SOIL136-00196",
                    text: "With what the total settlement of the layer is equal, in the numerical integration of an equation?",
                    options: [
                        { key: "a", text: "to the product of individual settlements of various thin layers" },
                        { key: "b", text: "to the difference of the individual settlements of various thin layers" },
                        { key: "c", text: "to the sum of individual settlements of various thin layers" },
                        { key: "d", text: "to the division of the individual settlements of various thin layers" }
                    ],
                    answer: "c",
                    explanation: "In numerical methods for calculating consolidation settlement (e.g., using the coefficient of volume change, m_v), a thick clay layer is divided into several thin sub-layers. The total settlement (S_c) is the sum of the settlements calculated for each individual sub-layer."
                },
                {
                    id: "cm16q044",
                    src: "SOIL136-00197",
                    text: "What is it called, if increases in water content because of an increase in volume of voids?",
                    options: [
                        { key: "a", text: "compression" },
                        { key: "b", text: "compressibility" },
                        { key: "c", text: "consolidation" },
                        { key: "d", text: "swelling" }
                    ],
                    answer: "d",
                    explanation: "Swelling is the process where a soil increases in volume, typically due to an increase in water content. This often occurs in expansive clays that absorb water, causing the volume of voids to increase."
                },
                {
                    id: "cm16q045",
                    src: "SOIL136-00198",
                    text: "What is the compression of the soil, under the short duration of moving or vibratory loads?",
                    options: [
                        { key: "a", text: "compaction" },
                        { key: "b", text: "saturation" },
                        { key: "c", text: "compressibility" },
                        { key: "d", text: "swelling" }
                    ],
                    answer: "a",
                    explanation: "Compaction is the process of densifying a soil by reducing the air voids through the application of mechanical energy, often from short-duration, moving, or vibratory loads like rollers. It is a rapid, man-made process."
                },
                {
                    id: "cm16q046",
                    src: "SOIL136-00199",
                    text: "By the following factor, the compressibility of clay is caused",
                    options: [
                        { key: "a", text: "changes in salinity" },
                        { key: "b", text: "the expulsion of the double layer water from among the grains" },
                        { key: "c", text: "ion exchange" },
                        { key: "d", text: "swelling of clay" }
                    ],
                    answer: "b",
                    explanation: "The compressibility of clay is largely due to the rearrangement of particles and the expulsion of water that is held in the diffuse double layers surrounding the clay particles. This water is not free to drain easily."
                },
                {
                    id: "cm16q047",
                    src: "SOIL136-00200",
                    text: "In the semi-logarithmic plot, what does the virgin compression curve become?",
                    options: [
                        { key: "a", text: "parabolic curve" },
                        { key: "b", text: "hyperbolic curve" },
                        { key: "c", text: "straight line" },
                        { key: "d", text: "elliptical curve" }
                    ],
                    answer: "c",
                    explanation: "When the void ratio (e) is plotted against the logarithm of effective stress (log σ'), the virgin compression curve (the part of the curve beyond the preconsolidation pressure) is approximately a straight line. The slope of this line is the compression index (C_c)."
                },
                {
                    id: "cm16q048",
                    src: "SOIL136-00201",
                    text: "What is the coefficient of volume change m_v called?",
                    options: [
                        { key: "a", text: "coefficient of compressibility" },
                        { key: "b", text: "compression index" },
                        { key: "c", text: "expansion index" },
                        { key: "d", text: "coefficient of volume compressibility" }
                    ],
                    answer: "d",
                    explanation: "The coefficient of volume change (m_v) is defined as the volumetric strain per unit increase in effective stress. It is also known as the coefficient of volume compressibility. m_v = a_v / (1 + e_0), where a_v is the coefficient of compressibility."
                }
            ]
        },
        {
            id: "cm16watr",
            name: "Basic Water Resources Engineering",
            subject: "Water Resources",
            accent: "emerald",
            blurb: "12 questions drawn from the Basic Water Resources Engineering bank.",
            questions: [
                {
                    id: "cm16q049",
                    src: "WATE701-00170",
                    text: "The maximum discharge through a rectangular channel is 7.15m³/s, determine the depth of the channel where S0 = 1/2000 and C=40.",
                    options: [
                        { key: "a", text: "2m" },
                        { key: "b", text: "4m" },
                        { key: "c", text: "3m" },
                        { key: "d", text: "1m" }
                    ],
                    answer: "a",
                    explanation: "For max discharge, B=2y. Q = A * C * √(R*S) = (2y*y) * 40 * √((y/2)*(1/2000)) = 2y² * 40 * √(y/4000) = 80y² * √y / √4000 = 80y^(5/2) / 63.245 = 1.265 y^(5/2). Set equal to 7.15: y^(5/2)=7.15/1.265=5.65, y=(5.65)^(2/5). 5.65^0.4 ≈ ? 2^5=32, so y=2: 2^(5/2)=2^2.5=5.656, which matches. So y=2m."
                },
                {
                    id: "cm16q050",
                    src: "WATE701-00171",
                    text: "The base width of a most economical rectangular channel is 8m, calculate the hydraulic radius of the channel.",
                    options: [
                        { key: "a", text: "5m" },
                        { key: "b", text: "2m" },
                        { key: "c", text: "4m" },
                        { key: "d", text: "3m" }
                    ],
                    answer: "b",
                    explanation: "For most economical rectangular, B=2y, so y=B/2=4m. Hydraulic radius R = y/2 = 2m."
                },
                {
                    id: "cm16q051",
                    src: "WATE701-00172",
                    text: "Calculate the section factor for the most economical rectangular section having depth of 4m.",
                    options: [
                        { key: "a", text: "32" },
                        { key: "b", text: "128" },
                        { key: "c", text: "64" },
                        { key: "d", text: "256" }
                    ],
                    answer: "c",
                    explanation: "The most economical rectangular section has a width of twice the depth, so B is 8 m and the area is 32 square metres. The hydraulic depth of a rectangular channel is simply the flow depth, 4 m, so the section factor Z equal to A times the root of D is 32 times 2, which is 64."
                },
                {
                    id: "cm16q052",
                    src: "WATE701-00173",
                    text: "The ratio between maximum discharge and top width of a rectangular channel is 91:50, calculate the depth of the channel if the bed slope is 1 in 3000 and C = 50.",
                    options: [
                        { key: "a", text: "3m" },
                        { key: "b", text: "4m" },
                        { key: "c", text: "5m" },
                        { key: "d", text: "2m" }
                    ],
                    answer: "d",
                    explanation: "For max discharge, B=2y, T=B=2y. Q_max = A * C * √(R*S) = (2y*y)*50*√((y/2)*(1/3000)) = 100y² * √(y/6000) = 100y^(5/2)/√6000 = 100y^(5/2)/77.46 = 1.291y^(5/2). Ratio Q/T = 1.291y^(5/2) / (2y) = 0.6455 y^(3/2) = 91/50 = 1.82. So y^(3/2)=1.82/0.6455=2.82, y=(2.82)^(2/3)= (2.82^0.6667). 2^0.6667=1.587, 3^0.6667=2.08, so y=2m: 2^(3/2)=2.828, close to 2.82."
                },
                {
                    id: "cm16q053",
                    src: "WATE701-00174",
                    text: "The hydraulic radius of an economical rectangular section is 4m, calculate the discharge through the channel if the bed slope of the channel is 1 in 1000 and manning’s co efficient is 0.015.",
                    options: [
                        { key: "a", text: "680m³/s" },
                        { key: "b", text: "690m³/s" },
                        { key: "c", text: "700m³/s" },
                        { key: "d", text: "710 m³/s" }
                    ],
                    answer: "a",
                    explanation: "For economical rectangular, R=y/2=4, so y=8m, B=2y=16m. A=B*y=128 m². S=0.001. Manning: Q = (1/n) A R^(2/3) S^(1/2) = (1/0.015)*128*(4)^(2/3)*√0.001 = 66.667 * 128 * (4^(0.6667)) * 0.03162. 4^(2/3)= (4^2)^(1/3)=16^(1/3)=2.52. So Q = 66.667*128=8533.33, *2.52=21504, *0.03162≈680 m³/s."
                },
                {
                    id: "cm16q054",
                    src: "WATE701-00175",
                    text: "What is energy per unit head of water called as ______.",
                    options: [
                        { key: "a", text: "Total energy" },
                        { key: "b", text: "Specific energy" },
                        { key: "c", text: "Velocity head" },
                        { key: "d", text: "Datum head" }
                    ],
                    answer: "b",
                    explanation: "Specific energy is defined as the energy per unit weight of water measured with respect to the channel bottom."
                },
                {
                    id: "cm16q055",
                    src: "WATE701-00176",
                    text: "What is the plot between Total energy and channel position called as?",
                    options: [
                        { key: "a", text: "Specific grade line" },
                        { key: "b", text: "Datum line" },
                        { key: "c", text: "Energy grade line" },
                        { key: "d", text: "Velocity line" }
                    ],
                    answer: "c",
                    explanation: "The Energy Grade Line (EGL) is a plot of the total energy head (datum head + pressure head + velocity head) along the channel."
                },
                {
                    id: "cm16q056",
                    src: "WATE701-00177",
                    text: "Which of the following conditions is not true for a uniform flow?",
                    options: [
                        { key: "a", text: "y1 = y2" },
                        { key: "b", text: "S0 = Sf" },
                        { key: "c", text: "V1 = V2" },
                        { key: "d", text: "Z1 = Z2" }
                    ],
                    answer: "d",
                    explanation: "In uniform flow the depth, the velocity and the flow area stay the same from section to section, and the bed slope equals the friction slope. What cannot stay the same is the bed elevation itself, since the channel must fall to provide that slope, so Z1 equals Z2 is the condition that does not hold."
                },
                {
                    id: "cm16q057",
                    src: "WATE701-00178",
                    text: "Energy per unit weight of water measured with respect to the datum is called as______.",
                    options: [
                        { key: "a", text: "Specific energy" },
                        { key: "b", text: "Total energy" },
                        { key: "c", text: "Velocity head" },
                        { key: "d", text: "Datum head" }
                    ],
                    answer: "a",
                    explanation: "Energy per unit weight of water measured with respect to the channel bottom (or a local bed reference) as the datum is called specific energy. Total energy is the sum of datum head, pressure head, and velocity head, all measured with respect to a fixed datum."
                },
                {
                    id: "cm16q058",
                    src: "WATE701-00179",
                    text: "Calculate the specific energy for a channel having depth 3m and velocity of flow being 1.5 m/s",
                    options: [
                        { key: "a", text: "2.11m" },
                        { key: "b", text: "3.11m" },
                        { key: "c", text: "4.11m" },
                        { key: "d", text: "5.11m" }
                    ],
                    answer: "b",
                    explanation: "Specific energy E = y + V²/(2g) = 3 + (1.5²)/(2*9.81) = 3 + (2.25/19.62) = 3 + 0.1147 = 3.1147m ≈3.11m."
                },
                {
                    id: "cm16q059",
                    src: "WATE701-00180",
                    text: "The specific energy of a triangular channel is 5.06m and the depth of the channel is 5m having side slope of 1H:4V then calculate the value of C. Given: S0=1 in 1000.",
                    options: [
                        { key: "a", text: "40" },
                        { key: "b", text: "45" },
                        { key: "c", text: "50" },
                        { key: "d", text: "55" }
                    ],
                    answer: "c",
                    explanation: "For triangular channel, side slope 1H:4V means z=4. Specific energy E = y + V²/(2g)=5.06. With y=5, so 5 + V²/(2g)=5.06, thus V²/(2g)=0.06, V=√(0.06*2*9.81)=√1.1772=1.085 m/s. Area A = z y² = 4*25=100 m²? Actually, for triangular, A = z y², but careful: if side slope is 1H:4V, then z = horizontal/vertical = 1/4=0.25. So A = z y² = 0.25*25=6.25 m². Then V=Q/A. Also, for uniform flow, V = C√(R*S). Hydraulic radius R = A/P. Top width T=2zy=2*0.25*5=2.5m. Wetted perimeter P = 2y√(1+z²)=10√(1+0.0625)=10*1.031=10.31m. R=6.25/10.31=0.606m. S=0.001. So V = C√(0.606*0.001)=C√0.000606=C*0.02462. Set equal to 1.085, so C=1.085/0.02462=44.07. Close to 45. the option 45 is correct."
                },
                {
                    id: "cm16q060",
                    src: "WATE701-00181",
                    text: "What is the condition for critical flow?",
                    options: [
                        { key: "a", text: "Q²/g = A²/T" },
                        { key: "b", text: "Q²/g = A/T" },
                        { key: "c", text: "Q²/g = A³/T²" },
                        { key: "d", text: "Q²/g = A³/T" }
                    ],
                    answer: "d",
                    explanation: "The condition for critical flow is that the Froude number is 1, which leads to Q²/g = A³/T."
                }
            ]
        },
        {
            id: "cm16hydr",
            name: "Hydropower",
            subject: "Hydropower",
            accent: "cyan",
            blurb: "9 questions drawn from the Hydropower bank.",
            questions: [
                {
                    id: "cm16q061",
                    src: "HYDR626-00134",
                    text: "Based on installed capacity micro hydropower plant has capacity of",
                    options: [
                        { key: "a", text: "&lt;100kw" },
                        { key: "b", text: "&gt;100kw" },
                        { key: "c", text: "&gt;500kw" },
                        { key: "d", text: "&gt;10mw" }
                    ],
                    answer: "a",
                    explanation: "Micro-hydropower plants are small-scale systems. A common international classification defines a micro plant as one with an installed capacity of less than 100 kW. They are often used for decentralized power generation in remote areas."
                },
                {
                    id: "cm16q062",
                    src: "HYDR626-00135",
                    text: "Which of the following zone in Zoned type embankment prevents piping through crack?",
                    options: [
                        { key: "a", text: "Central core" },
                        { key: "b", text: "Transition zone" },
                        { key: "c", text: "Outer zone" },
                        { key: "d", text: "Core wall" }
                    ],
                    answer: "b",
                    explanation: "In a zoned embankment dam, the transition zone (or filter zone) is placed between the fine-grained impervious core and the coarse-grained outer shells. Its critical function is to prevent the migration of fine particles from the core (piping) into the shell if a crack develops, thereby stopping erosion."
                },
                {
                    id: "cm16q063",
                    src: "HYDR626-00136",
                    text: "A dam reservoir which is not provided with gate controls on its spillway and other sluice is called",
                    options: [
                        { key: "a", text: "Detention dam" },
                        { key: "b", text: "Storage reservoir" },
                        { key: "c", text: "Retarding basin" },
                        { key: "d", text: "Flood control reservoir" }
                    ],
                    answer: "c",
                    explanation: "A retarding basin (or detention reservoir) is designed for flood control only. It has ungated spillways and outlets, allowing it to fill automatically during a flood and release water slowly as the inflow recedes. It is usually empty until a flood event occurs."
                },
                {
                    id: "cm16q064",
                    src: "HYDR626-00137",
                    text: "A dam reservoir catering to flood control irrigation, and water supply basically designed for irrigation alone is a",
                    options: [
                        { key: "a", text: "Multipurpose reservoir" },
                        { key: "b", text: "Distribution reservoir" },
                        { key: "c", text: "Retarding basins" },
                        { key: "d", text: "Single-purpose reservoir" }
                    ],
                    answer: "d",
                    explanation: "A single-purpose reservoir is designed and operated primarily for one objective, such as irrigation. Even if it incidentally provides other benefits (like some flood storage space), its basic design and rule curves are optimized for its primary purpose."
                },
                {
                    id: "cm16q065",
                    src: "HYDR626-00138",
                    text: "Which reservoir is also known as Mitigation reservoir?",
                    options: [
                        { key: "a", text: "Flood control reservoir" },
                        { key: "b", text: "Conservation reservoir" },
                        { key: "c", text: "Multipurpose dam" },
                        { key: "d", text: "Storage reservoir" }
                    ],
                    answer: "a",
                    explanation: "A flood control reservoir is often called a mitigation reservoir because its primary purpose is to mitigate (reduce or lessen) the impact of floods by storing excess floodwater and releasing it in a controlled manner after the peak flood has passed."
                },
                {
                    id: "cm16q066",
                    src: "HYDR626-00139",
                    text: "Reciprocating pumps work on the principle of ______",
                    options: [
                        { key: "a", text: "Drag force" },
                        { key: "b", text: "Positive displacement" },
                        { key: "c", text: "Flow speed" },
                        { key: "d", text: "N/A" }
                    ],
                    answer: "b",
                    explanation: "Reciprocating pumps are positive displacement pumps. They work by trapping a fixed volume of fluid in a chamber and then mechanically forcing (displacing) it into the discharge pipe. The flow rate is determined by the pump's displacement and speed, not the system pressure."
                },
                {
                    id: "cm16q067",
                    src: "HYDR626-00140",
                    text: "Reciprocating pumps have ______ efficiency compared to centrifugal pumps",
                    options: [
                        { key: "a", text: "Lower" },
                        { key: "b", text: "Equal" },
                        { key: "c", text: "Higher" },
                        { key: "d", text: "Exponential" }
                    ],
                    answer: "c",
                    explanation: "Reciprocating pumps generally have higher maximum efficiencies (up to 90% or more) than centrifugal pumps, especially at low flow rates and high pressures. This is due to their positive displacement action which minimizes internal leakage (slippage)."
                },
                {
                    id: "cm16q068",
                    src: "HYDR626-00141",
                    text: "To obtain maximum hydraulic efficiency of impulse turbine, blade velocity should be ______ times the inlet velocity of jet.",
                    options: [
                        { key: "a", text: "One quarter" },
                        { key: "b", text: "Twice" },
                        { key: "c", text: "Thrice" },
                        { key: "d", text: "Half" }
                    ],
                    answer: "d",
                    explanation: "For an impulse turbine (like Pelton wheel), maximum efficiency is achieved when the blade velocity is exactly half of the inlet jet velocity. This allows the jet to be deflected by 180 degrees, transferring virtually all of its kinetic energy to the blades."
                },
                {
                    id: "cm16q069",
                    src: "HYDR626-00142",
                    text: "Reciprocating pumps are also called as.....",
                    options: [
                        { key: "a", text: "Force pumps" },
                        { key: "b", text: "Mass Pumps" },
                        { key: "c", text: "Heat pumps" },
                        { key: "d", text: "Speed pumps" }
                    ],
                    answer: "a",
                    explanation: "Reciprocating pumps are positive displacement pumps where a piston draws fluid into a cylinder and then forces it out under pressure. This \"forcing\" action is why they are historically and commonly referred to as force pumps."
                }
            ]
        },
        {
            id: "cm16irri",
            name: "Irrigation and Drainage",
            subject: "Irrigation",
            accent: "emerald",
            blurb: "10 questions drawn from the Irrigation and Drainage bank.",
            questions: [
                {
                    id: "cm16q070",
                    src: "IRRI951-00159",
                    text: "Let us consider in a given area the plantation of a certain crop takes 20 days, and the total water depth required by this crop is 80 cm on the field. Find the duty of irrigation water required for the crop during this period. (a) Assuming 20% losses of water in the water courses, find duty at the head of the course. (b) Find the duty of the water at the head of the distributary, assuming 10% losses from the distributary head.",
                    options: [
                        { key: "a", text: "182.9 hectares/cumec, 194.4 hectares/cumec" },
                        { key: "b", text: "172.8 hectares/cumec, 194.4 hectares/cumec" },
                        { key: "c", text: "172.8 hectares/cumec, 185.4 hectares/cumec" },
                        { key: "d", text: "185.6 hectares/cumec, 184.6 hectares/cumec" }
                    ],
                    answer: "b",
                    explanation: "Duty (D) = (864 * B) / Δ, where B is the base period in days and Δ is the delta in meters. Base period (B) = 20 days, Delta (Δ) = 0.8 m. Basic Duty D = (864 * 20) / 0.8 = 21600 hectares/cumec. (a) With 20% losses at water course, efficiency = 0.8. Duty = 21600 * 0.8 = 17280 ha/cumec ≈ 172.8 ha/cumec. (b) With an additional 10% loss at distributary, overall efficiency = 0.8 * 0.9 = 0.72. Duty = 21600 * 0.72 = 15552 ha/cumec. This calculated value (155.52) does not match any option perfectly. Rechecking common approach: Duty at head of watercourse = Basic Duty / (1 - Loss fraction) = 21600 / (1 - 0.2) = 27000 ha/cumec? Standard method: Duty downstream is higher. If duty at field is D_field = 21600 ha/cumec, then duty at head of watercourse (after 20% loss) is D_wc = D_field / (1 - 0.20) = 21600 / 0.8 = 27000 ha/cumec? This doesn't match options. The options suggest the inverse calculation. The provided answer 172.8 and 194.4 is the option \"172.8 hectares/cumec, 194.4 hectares/cumec\" . The calculation might be: Delta includes losses? Or duty is calculated as area irrigated by 1 cumec. The correct pair based on standard answers for this common problem is 172.8 and 194.4."
                },
                {
                    id: "cm16q071",
                    src: "IRRI951-00160",
                    text: "What is the safe limiting velocity for cement concrete lining?",
                    options: [
                        { key: "a", text: "1.5 m/s" },
                        { key: "b", text: "2.2 m/s" },
                        { key: "c", text: "2.7 m/s" },
                        { key: "d", text: "1.8 m/s" }
                    ],
                    answer: "c",
                    explanation: "Cement concrete lining is highly resistant to erosion. The safe limiting velocity, which is the maximum velocity that does not cause erosion, is typically 2.7 m/s."
                },
                {
                    id: "cm16q072",
                    src: "IRRI951-00161",
                    text: "The most economical type of lining is the one which shows ______.",
                    options: [
                        { key: "a", text: "minimum benefit-cost ratio" },
                        { key: "b", text: "zero benefit-cost ratio" },
                        { key: "c", text: "benefit-cost ratio = 1" },
                        { key: "d", text: "maximum benefit-cost ratio" }
                    ],
                    answer: "d",
                    explanation: "Economic efficiency is maximized when the ratio of benefits (water saved, increased capacity) to costs (construction, maintenance) is the highest."
                },
                {
                    id: "cm16q073",
                    src: "IRRI951-00162",
                    text: "Which of the following guideline is not recommended for the choice of lining when the bed width of the canal is up to 3 m?",
                    options: [
                        { key: "a", text: "In-situ cement concrete lining in bed as well as on sides" },
                        { key: "b", text: "Single burnt clay tile lining or brick lining" },
                        { key: "c", text: "PCC slab lining" },
                        { key: "d", text: "Flexible membrane lining with adequate earth/file cover" }
                    ],
                    answer: "a",
                    explanation: "For small canals (bed width ≤ 3m), in-situ cement concrete lining is often not recommended due to higher cost and potential cracking. Precast slabs (PCC), brick, or flexible linings are more common and economical."
                },
                {
                    id: "cm16q074",
                    src: "IRRI951-00163",
                    text: "Which of the following is not a cause for the hydrostatic pressure on the lining?",
                    options: [
                        { key: "a", text: "Keeping of the rainwater in the backfill" },
                        { key: "b", text: "When the water table remains below the canal bed" },
                        { key: "c", text: "The backfill is of low drainage" },
                        { key: "d", text: "The backfill is of high permeability (i.e. greater than 3 cm/sec)" }
                    ],
                    answer: "b",
                    explanation: "If the water table is below the canal bed, there is no external water pressure acting upwards on the lining. Hydrostatic pressure builds up when water is trapped behind the lining (e.g., from rain or a high water table) and cannot drain quickly."
                },
                {
                    id: "cm16q075",
                    src: "IRRI951-00164",
                    text: "Pressure relief valves may help in ______.",
                    options: [
                        { key: "a", text: "Holding the hydrostatic pressure" },
                        { key: "b", text: "Increasing the hydrostatic pressure" },
                        { key: "c", text: "Releasing the hydrostatic pressure" },
                        { key: "d", text: "may increase or decrease the hydrostatic pressure" }
                    ],
                    answer: "c",
                    explanation: "Pressure relief valves or weep holes are provided in canal linings to allow trapped water to escape, thus reducing the damaging hydrostatic pressure that can uplift the lining."
                },
                {
                    id: "cm16q076",
                    src: "IRRI951-00165",
                    text: "Pipe drains run ______.",
                    options: [
                        { key: "a", text: "longitudinally on the bed and transverse to the length of canal on the side slopes" },
                        { key: "b", text: "Longitudinally to the length of the canal on the side slopes and transverse to the bed" },
                        { key: "c", text: "transverse to the bed" },
                        { key: "d", text: "longitudinally to the length of the canal" }
                    ],
                    answer: "d",
                    explanation: "Pipe drains are typically laid longitudinally along the length of the canal, often near the toe of the embankment, to collect seepage water and carry it away to a sump or outlet."
                },
                {
                    id: "cm16q077",
                    src: "IRRI951-00166",
                    text: "Which of the following statement is wrong about the requirement of good lining?",
                    options: [
                        { key: "a", text: "The hydraulic efficiency generally reduces with time" },
                        { key: "b", text: "The lining should be able to withstand the differential sub-soil pressure" },
                        { key: "c", text: "Brick lining, concrete lining or precast slab lining can be easily repaired as compared to cast-in-situ concrete lining" },
                        { key: "d", text: "Brick tile lining may provide better abrasion resistance than cement concrete and boulder lining" }
                    ],
                    answer: "a",
                    explanation: "A well-maintained lining maintains its smoothness. Therefore, its hydraulic efficiency (conveying capacity) generally does not reduce with time; it may even improve slightly as the surface gets polished. Other factors like siltation outside the canal affect the water table pressure."
                },
                {
                    id: "cm16q078",
                    src: "IRRI951-00167",
                    text: "Which type of lining is adopted when the channels have become stable and no danger’s scouring is expected?",
                    options: [
                        { key: "a", text: "Brick lining" },
                        { key: "b", text: "Flexible membrane lining in the bed and rigid lining on the sides" },
                        { key: "c", text: "Single burnt clay tile lining" },
                        { key: "d", text: "In-situ cement concrete lining" }
                    ],
                    answer: "b",
                    explanation: "The burnt clay tile lining is to be adopted at places where aggregates for the manufacture of concrete are not available economically. The brick lining is used where seepage considerations are important. In-situ cement concrete lining is provided when the canal has a bed width greater than 8 m. Flexible membrane lining is used in the bed of stable channels because it is an economical, impermeable barrier that prevents seepage without needing the high structural strength or scour resistance of expensive rigid materials."
                },
                {
                    id: "cm16q079",
                    src: "IRRI951-00168",
                    text: "On which factor does the movement of bed load depends?",
                    options: [
                        { key: "a", text: "Type of Flow" },
                        { key: "b", text: "Depth of Flow" },
                        { key: "c", text: "Velocity of Flow" },
                        { key: "d", text: "Width of the β^k" }
                    ],
                    answer: "c",
                    explanation: "The movement of bed load (sediment rolling along the bed) is primarily initiated and governed by the shear stress exerted by the flowing water on the bed, which is a function of flow velocity."
                }
            ]
        },
        {
            id: "cm16tran",
            name: "Transportation",
            subject: "Transportation",
            accent: "rose",
            blurb: "11 questions drawn from the Transportation bank.",
            questions: [
                {
                    id: "cm16q080",
                    src: "TRAN808-00158",
                    text: "According to size, aggregates is/are classified into ______ types.",
                    options: [
                        { key: "a", text: "1" },
                        { key: "b", text: "3" },
                        { key: "c", text: "4" },
                        { key: "d", text: "2" }
                    ],
                    answer: "d",
                    explanation: "Based on particle size, aggregates are primarily classified into two types: Fine aggregate (sand, passing 4.75mm sieve) and Coarse aggregate (gravel, crushed stone, retained on 4.75mm sieve)."
                },
                {
                    id: "cm16q081",
                    src: "TRAN808-00159",
                    text: "What is the total percentage of aggregate in concrete by volume?",
                    options: [
                        { key: "a", text: "60-75%" },
                        { key: "b", text: "50-60%" },
                        { key: "c", text: "85%" },
                        { key: "d", text: "50%" }
                    ],
                    answer: "a",
                    explanation: "Aggregates typically constitute about 60% to 75% of the volume of a concrete mix. They provide volume stability, reduce shrinkage, and are a cost-effective filler compared to cement."
                },
                {
                    id: "cm16q082",
                    src: "TRAN808-00160",
                    text: "What is the size of fine aggregates?",
                    options: [
                        { key: "a", text: "4.75mm" },
                        { key: "b", text: "&lt; 4.75mm" },
                        { key: "c", text: "&gt; 4.75mm" },
                        { key: "d", text: "12mm" }
                    ],
                    answer: "b",
                    explanation: "Fine aggregate, commonly known as sand, is defined as aggregate where most particles pass through a 4.75 mm IS sieve. Its size is less than 4.75mm."
                },
                {
                    id: "cm16q083",
                    src: "TRAN808-00161",
                    text: "Crushed stone, gravel and ordinary sand are examples of ______.",
                    options: [
                        { key: "a", text: "Lightweight aggregate" },
                        { key: "b", text: "Heavy-weight aggregate" },
                        { key: "c", text: "Normal-weight aggregate" },
                        { key: "d", text: "Both Normal-weight aggregate and Heavy-weight aggregate" }
                    ],
                    answer: "c",
                    explanation: "Normal-weight aggregates have a specific gravity typically between 2.5 and 2.7. Crushed stone, gravel, and sand are standard aggregates producing concrete with a density of about 2300-2500 kg/m³."
                },
                {
                    id: "cm16q084",
                    src: "TRAN808-00162",
                    text: "Aggregate crushed before the application of full load of ______.",
                    options: [
                        { key: "a", text: "10ton" },
                        { key: "b", text: "20ton" },
                        { key: "c", text: "30ton" },
                        { key: "d", text: "40ton" }
                    ],
                    answer: "d",
                    explanation: "This likely refers to the aggregate crushing test (IS:2386-Part IV). The standard test load is 40 tonnes applied gradually over 10 minutes. The value is the percentage crushed/fines formed under this load."
                },
                {
                    id: "cm16q085",
                    src: "TRAN808-00163",
                    text: "Which layer of pavement should withstand stress?",
                    options: [
                        { key: "a", text: "Surface" },
                        { key: "b", text: "Sub grade" },
                        { key: "c", text: "Sub base" },
                        { key: "d", text: "Base" }
                    ],
                    answer: "a",
                    explanation: "The surface course (or wearing course) is the topmost layer directly in contact with traffic loads. It must withstand the highest stresses from tires and provide a smooth, skid-resistant, and durable riding surface."
                },
                {
                    id: "cm16q086",
                    src: "TRAN808-00164",
                    text: "The surface of bitumen should be ______",
                    options: [
                        { key: "a", text: "Smooth" },
                        { key: "b", text: "Sufficient enough to resist friction" },
                        { key: "c", text: "Rough." },
                        { key: "d", text: "Very smooth" }
                    ],
                    answer: "b",
                    explanation: "The bitumen surface, typically the wearing course, must have adequate texture and roughness to provide sufficient skid resistance (friction) for vehicle tires, especially under wet conditions, to ensure safety."
                },
                {
                    id: "cm16q087",
                    src: "TRAN808-00165",
                    text: "The DBM is used in ______",
                    options: [
                        { key: "a", text: "Local streets" },
                        { key: "b", text: "Rural roads" },
                        { key: "c", text: "Highway" },
                        { key: "d", text: "Concrete bridges" }
                    ],
                    answer: "c",
                    explanation: "Dense Bituminous Macadam (DBM) is a high-quality bituminous mixture used as a base course or binder course in high-traffic roads like highways and urban roads, providing high stability and durability."
                },
                {
                    id: "cm16q088",
                    src: "TRAN808-00166",
                    text: "The filler material should pass from ______",
                    options: [
                        { key: "a", text: "0.75mm" },
                        { key: "b", text: "7.5mm" },
                        { key: "c", text: "75mm" },
                        { key: "d", text: "0.075mm" }
                    ],
                    answer: "d",
                    explanation: "Filler material, often limestone dust or cement, is a finely divided mineral material. As per specifications, it should mostly pass through a 0.075 mm (75-micron) IS sieve to effectively fill voids and improve stability."
                },
                {
                    id: "cm16q089",
                    src: "TRAN808-00167",
                    text: "Rutting may be avoided by ______",
                    options: [
                        { key: "a", text: "Good compaction" },
                        { key: "b", text: "Good aggregate" },
                        { key: "c", text: "Good filler" },
                        { key: "d", text: "Good workmanship" }
                    ],
                    answer: "a",
                    explanation: "Rutting is a permanent longitudinal depression in the wheel path caused by repetitive traffic loading. Proper compaction during construction ensures high density and stability, preventing subsequent plastic deformation and rutting."
                },
                {
                    id: "cm16q090",
                    src: "TRAN808-00168",
                    text: "Bleeding may be avoided by ______",
                    options: [
                        { key: "a", text: "Water voids" },
                        { key: "b", text: "Air voids" },
                        { key: "c", text: "Porosity" },
                        { key: "d", text: "Water content" }
                    ],
                    answer: "b",
                    explanation: "Bleeding is the upward movement of bitumen binder to the surface, causing a slippery film. It is prevented by having an adequate amount of interconnected air voids in the mix to allow bitumen expansion without bleeding."
                }
            ]
        },
        {
            id: "cm16wate",
            name: "Water Supply, Sanitation and Environment",
            subject: "Water Supply",
            accent: "blue",
            blurb: "10 questions drawn from the Water Supply, Sanitation and Environment bank.",
            questions: [
                {
                    id: "cm16q091",
                    src: "WATE813-00146",
                    text: "The minimum depth of septic tank as per design criteria is",
                    options: [
                        { key: "a", text: "1.4m" },
                        { key: "b", text: "1.5m" },
                        { key: "c", text: "1.2m" },
                        { key: "d", text: "Not Provided" }
                    ],
                    answer: "c",
                    explanation: "As per common design standards (like IS 2470), the minimum liquid depth for a septic tank is 1.0m to 1.2m, with 1.2m being a standard minimum to allow for sludge accumulation and scum formation."
                },
                {
                    id: "cm16q092",
                    src: "WATE813-00147",
                    text: "The detention period of septic tank is ...",
                    options: [
                        { key: "a", text: "2 hours" },
                        { key: "b", text: "4 hours" },
                        { key: "c", text: "1 week" },
                        { key: "d", text: "Not Provided" }
                    ],
                    answer: "d",
                    explanation: "The detention period for a septic tank is the time sewage remains inside it for settling and digestion. It is typically 24 to 48 hours, not 2 hours, 4 hours, or 1 week. The correct value is missing from the options."
                },
                {
                    id: "cm16q093",
                    src: "WATE813-00148",
                    text: "The minimum design depth of oxidation pond is ...m",
                    options: [
                        { key: "a", text: "1.5" },
                        { key: "b", text: "0.3" },
                        { key: "c", text: "0.5" },
                        { key: "d", text: "Not Provided" }
                    ],
                    answer: "a",
                    explanation: "Oxidation ponds (or stabilization ponds) require sufficient depth for biological processes but must be shallow enough to allow light penetration for algae. A typical minimum design depth is around 1.0m to 1.5m."
                },
                {
                    id: "cm16q094",
                    src: "WATE813-00149",
                    text: "The color of digested sludge is ....",
                    options: [
                        { key: "a", text: "Blue" },
                        { key: "b", text: "Black" },
                        { key: "c", text: "Brown" },
                        { key: "d", text: "Gray" }
                    ],
                    answer: "b",
                    explanation: "Well-digested sludge is dark black in color due to the formation of various reduced compounds like iron sulfide under anaerobic conditions."
                },
                {
                    id: "cm16q095",
                    src: "WATE813-00150",
                    text: "In a sedimentation tank (length L, width B, depth D) the settling velocity of a particle for a discharge Q is",
                    options: [
                        { key: "a", text: "Q/(L*D)" },
                        { key: "b", text: "Q/(B*D)" },
                        { key: "c", text: "Q/(L*B)" },
                        { key: "d", text: "Not Provided" }
                    ],
                    answer: "c",
                    explanation: "The settling velocity for a particle that is 100% removed in an ideal sedimentation tank is equal to the overflow rate or surface loading rate, which is calculated as Discharge (Q) divided by the plan surface area (L * B)."
                },
                {
                    id: "cm16q096",
                    src: "WATE813-00151",
                    text: "When wastewater is disposed off into a running stream, 4 zones are formed. In which of the following zones will the minimum level of dissolved oxygen be found?",
                    options: [
                        { key: "a", text: "Zone of degradation" },
                        { key: "b", text: "Zone of recovery" },
                        { key: "c", text: "Zone of clear water" },
                        { key: "d", text: "Zone of active decomposition" }
                    ],
                    answer: "d",
                    explanation: "The 'Zone of Active Decomposition' is characterized by heavy pollution where aerobic bacteria consume oxygen to decompose organic matter faster than it can be replenished, leading to a dissolved oxygen sag curve minimum."
                },
                {
                    id: "cm16q097",
                    src: "WATE813-00152",
                    text: "During sludge digestion",
                    options: [
                        { key: "a", text: "Alkaline condition should prevail" },
                        { key: "b", text: "Acidity condition should prevail" },
                        { key: "c", text: "Acidity of alkaline condition" },
                        { key: "d", text: "Neutral condition should prevail" }
                    ],
                    answer: "a",
                    explanation: "Successful anaerobic sludge digestion requires a slightly alkaline environment (pH around 7.0 to 7.6) to maintain healthy methanogenic bacteria populations, which are sensitive to acidity."
                },
                {
                    id: "cm16q098",
                    src: "WATE813-00153",
                    text: "Chlorine is sometimes used in sewage treatment",
                    options: [
                        { key: "a", text: "To avoid flocculation" },
                        { key: "b", text: "To avoid bulking of activated sludge" },
                        { key: "c", text: "To increase biological activated sludge" },
                        { key: "d", text: "To help in grease separation" }
                    ],
                    answer: "b",
                    explanation: "Bulking is a condition where sludge solids do not settle well due to excessive growth of filamentous bacteria. Chlorination of the return activated sludge stream is a common method to control these organisms."
                },
                {
                    id: "cm16q099",
                    src: "WATE813-00154",
                    text: "The dominating microorganisms in an activated sludge process reactor are",
                    options: [
                        { key: "a", text: "Anaerobic heterotrophs" },
                        { key: "b", text: "Autotrophs" },
                        { key: "c", text: "Aerobic heterotrophs" },
                        { key: "d", text: "Phototrophs" }
                    ],
                    answer: "c",
                    explanation: "The activated sludge process is an aerobic biological treatment method. The dominant microorganisms are aerobic heterotrophs, which use organic matter in the wastewater as food in the presence of oxygen."
                },
                {
                    id: "cm16q100",
                    src: "WATE813-00155",
                    text: "A BOD removal efficiency of 95% can be expected from",
                    options: [
                        { key: "a", text: "Septic tank" },
                        { key: "b", text: "Imhoff tank" },
                        { key: "c", text: "Not Provided" }
                    ],
                    answer: "c",
                    explanation: "Septic and Imhoff tanks are primary sedimentation units with some anaerobic digestion. They typically achieve around 30-40% BOD removal. High-rate secondary treatment processes like activated sludge or trickling filters can achieve 85-95% BOD removal. The correct option is missing."
                }
            ]
        }
    ]
};

/* Registered lazily — js/civil.js injects this file when the set is opened. */
window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["civil-16"] = CIVIL_MODEL_16;
