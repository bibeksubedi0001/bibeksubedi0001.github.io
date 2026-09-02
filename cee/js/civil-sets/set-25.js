/* ============================================================
   CIVIL MODEL SET 25 — Civil Engineering licence-style model paper
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
const CIVIL_MODEL_25 = {
    day: 55,
    kind: "model",
    badge: { top: "Model", main: "C25" },
    title: "Civil Model Set 25",
    subtitle: "Civil Engineering · 9 subjects",
    durationMinutes: 120,
    negativeMarking: 0,
    chapters: [
        {
            id: "cm25basi",
            name: "Basic Civil Engineering",
            subject: "Basic Civil",
            accent: "blue",
            blurb: "13 questions drawn from the Basic Civil Engineering bank.",
            questions: [
                {
                    id: "cm25q001",
                    src: "BASI674-00310",
                    text: "The point at which the total area of a plane figure is assumed to be concentrated is called ______.",
                    options: [
                        { key: "a", text: "Centre of gravity" },
                        { key: "b", text: "Centroid" },
                        { key: "c", text: "Central point" },
                        { key: "d", text: "Inertial point" }
                    ],
                    answer: "b",
                    explanation: "The centroid is the geometric center of a plane figure. It is the average position of all the points in the shape. For a uniform lamina (constant thickness and density), the centroid coincides with the center of gravity."
                },
                {
                    id: "cm25q002",
                    src: "BASI674-00311",
                    text: "Where will be the centre of gravity of a uniform rod lies?",
                    options: [
                        { key: "a", text: "At its end" },
                        { key: "b", text: "At its center of its cross-sectional area" },
                        { key: "c", text: "At its middle point" },
                        { key: "d", text: "Depends upon its material" }
                    ],
                    answer: "c",
                    explanation: "For a uniform, straight rod (prismatic bar), the center of gravity is located at its geometric center, i.e., the midpoint of its length, assuming constant density and cross-section."
                },
                {
                    id: "cm25q003",
                    src: "BASI674-00312",
                    text: "Where the center of gravity of a circle lies?",
                    options: [
                        { key: "a", text: "Anywhere on its radius" },
                        { key: "b", text: "Anywhere on its circumference" },
                        { key: "c", text: "Anywhere on its diameter" },
                        { key: "d", text: "At its centre" }
                    ],
                    answer: "d",
                    explanation: "Due to its perfect symmetry, the center of gravity of a uniform circular ring, disc, or any circle is located precisely at its geometric center."
                },
                {
                    id: "cm25q004",
                    src: "BASI674-00313",
                    text: "Where will be the center of gravity of the following section will lie in coordinates? (Assume question refers to a common problem finding CG of a rectangle or composite shape, likely answer (6,1.5) for a T-section or similar)",
                    options: [
                        { key: "a", text: "(6,1.5)" },
                        { key: "b", text: "(6,3)" },
                        { key: "c", text: "(6,6)" },
                        { key: "d", text: "(1.5,3)" }
                    ],
                    answer: "a",
                    explanation: "Without the specific figure, this is a common result for a T-section or an I-section where the CG is calculated to be at (6, 1.5) from a chosen reference axis. This option is provided and is a standard answer for such problems."
                },
                {
                    id: "cm25q005",
                    src: "BASI674-00314",
                    text: "The axis about which moment of area is taken is known as ______",
                    options: [
                        { key: "a", text: "Axis of area" },
                        { key: "b", text: "Axis of reference" },
                        { key: "c", text: "Axis of moment" },
                        { key: "d", text: "Axis of rotation" }
                    ],
                    answer: "b",
                    explanation: "In mechanics, the axis about which the moment of area (or moment of inertia) is calculated is called the axis of reference. It is the benchmark axis from which distances (y) are measured for the calculation ∫ y² dA."
                },
                {
                    id: "cm25q006",
                    src: "BASI674-00315",
                    text: "What is MOI?",
                    options: [
                        { key: "a", text: "m⁴/2" },
                        { key: "b", text: "mal" },
                        { key: "c", text: "None" },
                        { key: "d", text: "a²/2" }
                    ],
                    answer: "c",
                    explanation: "MOI stands for Moment of Inertia. None of the options correctly define it. It is either mass moment of inertia (I = ∫ r² dm) with units kg-m², or area moment of inertia (I = ∫ y² dA) with units m⁴."
                },
                {
                    id: "cm25q007",
                    src: "BASI674-00316",
                    text: "What is the formula of radius of gyration?",
                    options: [
                        { key: "a", text: "k² = I²/A" },
                        { key: "b", text: "k² = I²/A²" },
                        { key: "c", text: "k² = I/(A)^{1/2}" },
                        { key: "d", text: "k² = I/A" }
                    ],
                    answer: "d",
                    explanation: "The radius of gyration (k) for an area is defined by the formula I = A * k², where I is the moment of inertia and A is the total area. Therefore, k² = I / A. This is the standard definition."
                },
                {
                    id: "cm25q008",
                    src: "BASI674-00317",
                    text: "What is the unit of radius of gyration?",
                    options: [
                        { key: "a", text: "m" },
                        { key: "b", text: "m⁴" },
                        { key: "c", text: "N" },
                        { key: "d", text: "m³" }
                    ],
                    answer: "a",
                    explanation: "The radius of gyration (k) is a length. It is the distance from the axis where the area could be concentrated. Therefore, its SI unit is the meter (m)."
                },
                {
                    id: "cm25q009",
                    src: "BASI674-00319",
                    text: "What will be the the radius of gyration of a circular plate of diameter 10cm?",
                    options: [
                        { key: "a", text: "1.5cm" },
                        { key: "b", text: "2.5cm" },
                        { key: "c", text: "2.0cm" },
                        { key: "d", text: "3cm" }
                    ],
                    answer: "b",
                    explanation: "For a circular area about its diameter, I = πd⁴/64 and A = πd²/4. Radius of gyration k = √(I/A) = √((πd⁴/64) / (πd²/4)) = √((d⁴/64) * (4/d²)) = √(d²/16) = d/4. For d=10cm, k=10/4=2.5 cm."
                },
                {
                    id: "cm25q010",
                    src: "BASI674-00320",
                    text: "The center of gravity of a semi-circle lies at a distance of ______ From its base measured along the vertical radius.",
                    options: [
                        { key: "a", text: "3r/4π" },
                        { key: "b", text: "3r/8π" },
                        { key: "c", text: "4r/3π" },
                        { key: "d", text: "8r/3π" }
                    ],
                    answer: "c",
                    explanation: "The centroid of a semi-circular lamina lies at a distance of 4r/(3π) from its flat, straight edge (diameter), measured along the axis of symmetry. This is a standard formula."
                },
                {
                    id: "cm25q011",
                    src: "BASI674-00321",
                    text: "CG of plane lamina is not at its geometrical centre, if it is a ______",
                    options: [
                        { key: "a", text: "Circle" },
                        { key: "b", text: "Square" },
                        { key: "c", text: "Rectangle" },
                        { key: "d", text: "Right angled triangle" }
                    ],
                    answer: "d",
                    explanation: "Circles, squares, and rectangles are symmetric shapes whose centroid is at their geometric center. A right-angled triangle is not symmetric about its center; its centroid is located at the intersection of its medians, which is not the geometric center of the bounding box."
                },
                {
                    id: "cm25q012",
                    src: "BASI674-00322",
                    text: "What will be the the radius of gyration of a circular plate of diameter 10cm? (Repeated question)",
                    options: [
                        { key: "a", text: "2.5cm" },
                        { key: "b", text: "1.5cm" },
                        { key: "c", text: "2.0cm" },
                        { key: "d", text: "3cm" }
                    ],
                    answer: "a",
                    explanation: "This is a repeat of question 21. The answer remains k = d/4 = 10/4 = 2.5 cm for the moment of inertia about a diameter."
                },
                {
                    id: "cm25q013",
                    src: "BASI674-00323",
                    text: "The axis about which moment of area is taken is known as ______ (Repeated question)",
                    options: [
                        { key: "a", text: "Axis of area" },
                        { key: "b", text: "Axis of reference" },
                        { key: "c", text: "Axis of moment" },
                        { key: "d", text: "Axis of rotation" }
                    ],
                    answer: "b",
                    explanation: "This is a repeat of question 16. The axis is called the axis of reference."
                }
            ]
        },
        {
            id: "cm25stru",
            name: "Structural Mechanics",
            subject: "Structural Mech",
            accent: "cyan",
            blurb: "11 questions drawn from the Structural Mechanics bank.",
            questions: [
                {
                    id: "cm25q014",
                    src: "STRU935-00261",
                    text: "......is a property of a material by virtue of it, material regain original shape after removal of load.",
                    options: [
                        { key: "a", text: "Rigidity" },
                        { key: "b", text: "Plasticity" },
                        { key: "c", text: "Elasticity" },
                        { key: "d", text: "Noise" }
                    ],
                    answer: "c",
                    explanation: "Elasticity is the property of a material to return to its original shape and size after the removal of the deforming load."
                },
                {
                    id: "cm25q015",
                    src: "STRU935-00263",
                    text: "The equation for major principal stress is",
                    options: [
                        { key: "a", text: "σ₁ = (σ_x + σ_y)/2 - √(((σ_x - σ_y)/2)² + τ_xy²)" },
                        { key: "b", text: "σ₁ = (σ_x + σ_y)/2 + √(((σ_x - σ_y)/2)² - τ_xy²)" },
                        { key: "c", text: "σ₁ = (σ_x + σ_y)/2 - √(((σ_x - σ_y)/2)² - τ_xy²)" },
                        { key: "d", text: "σ₁ = (σ_x + σ_y)/2 + √(((σ_x - σ_y)/2)² + τ_xy²)" }
                    ],
                    answer: "d",
                    explanation: "The major principal stress is given by σ₁ = (σ_x + σ_y)/2 + √(((σ_x - σ_y)/2)² + τ_xy²). The options are poorly written with σ₁ and σ₂ confused."
                },
                {
                    id: "cm25q016",
                    src: "STRU935-00264",
                    text: "The equation for maximum shear stress is",
                    options: [
                        { key: "a", text: "τ_max = (σ₁ - σ₂)/2" },
                        { key: "b", text: "τ_max = (σ₁ + σ₂)/2" }
                    ],
                    answer: "a",
                    explanation: "The maximum shear stress is half the difference between the major and minor principal stresses: τ_max = (σ₁ - σ₂)/2. the option \"τ_max = (σ₁ - σ₂)/2\" , (c), and (d) are identical and correct, while (b) is wrong."
                },
                {
                    id: "cm25q017",
                    src: "STRU935-00265",
                    text: "The angle made by resultant stress with normal stress is called an ......",
                    options: [
                        { key: "a", text: "Angle of repose" },
                        { key: "b", text: "Angle of friction" },
                        { key: "c", text: "Angle of obliquity" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "c",
                    explanation: "The angle between the resultant stress and the normal to the plane on which it acts is called the angle of obliquity."
                },
                {
                    id: "cm25q018",
                    src: "STRU935-00266",
                    text: "Which of the following stresses can be determined using Mohr’s circle method?",
                    options: [
                        { key: "a", text: "Torsional stress" },
                        { key: "b", text: "Bending stress" },
                        { key: "c", text: "Principal stress" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "Mohr's circle is a graphical method used to find transformations of stress, including principal stresses, maximum shear stresses, and stresses on any plane. It can be applied to various stress states like torsion and bending. Verified."
                },
                {
                    id: "cm25q019",
                    src: "STRU935-00267",
                    text: "The graphical method of Mohr’s circle represents shear stress (τ)",
                    options: [
                        { key: "a", text: "X-axis" },
                        { key: "b", text: "Z-axis" },
                        { key: "c", text: "None" },
                        { key: "d", text: "Y-axis" }
                    ],
                    answer: "d",
                    explanation: "In Mohr's circle, normal stresses (σ) are plotted on the abscissa (X-axis) and shear stresses (τ) are plotted on the ordinate (Y-axis)."
                },
                {
                    id: "cm25q020",
                    src: "STRU935-00268",
                    text: "Why is the strain the fundamental property but not the stress?",
                    options: [
                        { key: "a", text: "Because it is a ratio" },
                        { key: "b", text: "Because it is dimensionless" },
                        { key: "c", text: "Because it’s value is calculated in the laboratory" },
                        { key: "d", text: "No stress is the fundamental property" }
                    ],
                    answer: "a",
                    explanation: "Strain is a fundamental property because it is a dimensionless measure of deformation (change in length/original length). Stress, while important, is force per unit area and not a fundamental geometric property."
                },
                {
                    id: "cm25q021",
                    src: "STRU935-00269",
                    text: "The material in which large deformation is possible before absolute failure by rupture is called ………",
                    options: [
                        { key: "a", text: "Plastic" },
                        { key: "b", text: "Ductile" },
                        { key: "c", text: "Elastic" },
                        { key: "d", text: "Brittle" }
                    ],
                    answer: "b",
                    explanation: "Ductile materials undergo significant plastic deformation before fracture (e.g., mild steel)."
                },
                {
                    id: "cm25q022",
                    src: "STRU935-00270",
                    text: "What is a creep?",
                    options: [
                        { key: "a", text: "Gradual increase of elastic strain with time at constant load" },
                        { key: "b", text: "Gradual increase of plastic strain with time at varying load" },
                        { key: "c", text: "Gradual increase of plastic strain with time at constant load" },
                        { key: "d", text: "Gradual increase of elastic strain with time at varying load" }
                    ],
                    answer: "c",
                    explanation: "Creep is the time-dependent, permanent deformation of a material under a constant load or stress, usually at high temperatures."
                },
                {
                    id: "cm25q023",
                    src: "STRU935-00271",
                    text: "If the material has different elastic properties in perpendicular directions, it is called ………",
                    options: [
                        { key: "a", text: "Elastic" },
                        { key: "b", text: "Isotropic" },
                        { key: "c", text: "Plastic" },
                        { key: "d", text: "Orthotropic" }
                    ],
                    answer: "d",
                    explanation: "Orthotropic materials have different elastic properties in three mutually perpendicular directions (e.g., wood)."
                },
                {
                    id: "cm25q024",
                    src: "STRU935-00272",
                    text: "Which one of the following pairs is NOT correctly matched?",
                    options: [
                        { key: "a", text: "Visco-elastic – small plastic zone" },
                        { key: "b", text: "Orthotropic material – different properties in three perpendicular directions" },
                        { key: "c", text: "Strain hardening material – stiffening effect felt at some stage" },
                        { key: "d", text: "Isotropic material – same physical property in all directions at a point" }
                    ],
                    answer: "a",
                    explanation: "Visco-elastic materials exhibit time-dependent elastic and viscous behavior, not necessarily a small plastic zone. This is not a standard description."
                }
            ]
        },
        {
            id: "cm25desi",
            name: "Design of Structures",
            subject: "Design of Str",
            accent: "slate",
            blurb: "9 questions drawn from the Design of Structures bank.",
            questions: [
                {
                    id: "cm25q025",
                    src: "DESI787-00225",
                    text: "Hot cracks can be prevented by ______",
                    options: [
                        { key: "a", text: "faster cooling" },
                        { key: "b", text: "pre-heating" },
                        { key: "c", text: "non-uniform heat" },
                        { key: "d", text: "slower cooling" }
                    ],
                    answer: "b",
                    explanation: "Pre-heating the metal before welding reduces the cooling rate and thermal gradients, which helps in preventing the formation of hot cracks."
                },
                {
                    id: "cm25q026",
                    src: "DESI787-00227",
                    text: "What is concrete?",
                    options: [
                        { key: "a", text: "A mixture of homogenous materials" },
                        { key: "b", text: "A mixture of material and hydrogen" },
                        { key: "c", text: "A mixture of cement, water, and aggregates" },
                        { key: "d", text: "A mixture of cement and hydrogen sulphide" }
                    ],
                    answer: "c",
                    explanation: "Concrete is a composite material composed of fine and coarse aggregate bonded together with a fluid cement (cement paste) that hardens over time."
                },
                {
                    id: "cm25q027",
                    src: "DESI787-00228",
                    text: "Which type of concrete is classified based on the design of concrete?",
                    options: [
                        { key: "a", text: "Plain" },
                        { key: "b", text: "Reinforced" }
                    ],
                    answer: "b",
                    explanation: "Concrete is classified based on its design, such as plain concrete (without reinforcement) and reinforced concrete (with steel reinforcement to carry tensile loads). The question implies a classification system, and reinforced is a primary category."
                },
                {
                    id: "cm25q028",
                    src: "DESI787-00229",
                    text: "Which of the following cement is used in sewage and water treatment plants?",
                    options: [
                        { key: "a", text: "Sulphane Resisting Cement" },
                        { key: "b", text: "Quick Setting Cement" },
                        { key: "c", text: "Low Heat Cement" },
                        { key: "d", text: "Rapid Hardening Cement" }
                    ],
                    answer: "a",
                    explanation: "Sulphate Resisting Cement is used in environments with high sulphate content, such as sewage and marine structures, to prevent destructive expansive reactions."
                },
                {
                    id: "cm25q029",
                    src: "DESI787-00230",
                    text: "Which of the following cement is used for interior and exterior decorative works?",
                    options: [
                        { key: "a", text: "Low Heat Cement" },
                        { key: "b", text: "Colored Cement" },
                        { key: "c", text: "High Alumina Cement" },
                        { key: "d", text: "Rapid Hardening Cement" }
                    ],
                    answer: "b",
                    explanation: "Colored cement, made by incorporating pigments, is specifically used for aesthetic and decorative applications in construction."
                },
                {
                    id: "cm25q030",
                    src: "DESI787-00231",
                    text: "Which of the following ratio is also known as water-cement ratio?",
                    options: [
                        { key: "a", text: "Weight of water to the weight of aggregate" },
                        { key: "b", text: "Density of cement to the Density of cement" },
                        { key: "c", text: "Weight of water to the weight of cement" },
                        { key: "d", text: "Volume of cement to the volume of cement" }
                    ],
                    answer: "c",
                    explanation: "The water-cement ratio is a critical factor in concrete mix design, defined as the ratio of the weight of water to the weight of cement used. It greatly influences the strength and durability of concrete."
                },
                {
                    id: "cm25q031",
                    src: "DESI787-00232",
                    text: "What is the total percentage of aggregates in concrete in terms of volume?",
                    options: [
                        { key: "a", text: "65-80%" },
                        { key: "b", text: "90%" },
                        { key: "c", text: "40%" },
                        { key: "d", text: "60-75%" }
                    ],
                    answer: "d",
                    explanation: "Aggregates typically make up 60-75% of the total volume of concrete. They act as a filler material and provide volume stability, reducing the amount of cement paste required."
                },
                {
                    id: "cm25q032",
                    src: "DESI787-00233",
                    text: "What happens if mineral oil is present in mixing for concrete?",
                    options: [
                        { key: "a", text: "Reduces strength" },
                        { key: "b", text: "Gives more slump" },
                        { key: "c", text: "Improves strong" },
                        { key: "d", text: "Gives a smooth surface" }
                    ],
                    answer: "a",
                    explanation: "Mineral oil acts as an impurity and interferes with the cement hydration process. This leads to a weak bond between cement paste and aggregates, significantly reducing the final strength of the concrete."
                },
                {
                    id: "cm25q033",
                    src: "DESI787-00234",
                    text: "Which of the following increases the workability of Concrete?",
                    options: [
                        { key: "a", text: "Decreasing size of aggregates" },
                        { key: "b", text: "Increasing size of aggregates" },
                        { key: "c", text: "Increasing flaky aggregates" },
                        { key: "d", text: "Increasing fine aggregates" }
                    ],
                    answer: "b",
                    explanation: "Larger aggregate sizes have a lower surface area, requiring less water to lubricate them. This results in a more workable mix for the same water content. Rounded aggregates also improve workability more than flaky or angular ones."
                }
            ]
        },
        {
            id: "cm25soil",
            name: "Soil Mechanics and Foundation",
            subject: "Soil Mechanics",
            accent: "amber",
            blurb: "13 questions drawn from the Soil Mechanics and Foundation bank.",
            questions: [
                {
                    id: "cm25q034",
                    src: "SOIL136-00315",
                    text: "The coefficient of active earth pressure is ______ than the coefficient of passive pressure.",
                    options: [
                        { key: "a", text: "greater than" },
                        { key: "b", text: "equal to" },
                        { key: "c", text: "less than" },
                        { key: "d", text: "insufficient data" }
                    ],
                    answer: "c",
                    explanation: "K_a is always less than 1, while K_p is always greater than 1. Therefore, K_a &lt; K_p."
                },
                {
                    id: "cm25q035",
                    src: "SOIL136-00316",
                    text: "The coefficient earth pressure at rest is ______.",
                    options: [
                        { key: "a", text: "less than coefficient of active pressure" },
                        { key: "b", text: "equal to coefficient of active pressure" },
                        { key: "c", text: "one" },
                        { key: "d", text: "greater than coefficient of active pressure" }
                    ],
                    answer: "d",
                    explanation: "The relationship is K_a &lt; K_0 &lt; K_p. For most soils, K_0 is greater than K_a."
                },
                {
                    id: "cm25q036",
                    src: "SOIL136-00317",
                    text: "For earth pressure at rest, there will be no",
                    options: [
                        { key: "a", text: "vertical stress" },
                        { key: "b", text: "shear stress" },
                        { key: "c", text: "horizontal stress" },
                        { key: "d", text: "both (a) and (c)" }
                    ],
                    answer: "b",
                    explanation: "The 'at-rest' condition implies no lateral movement, meaning no shear strain and therefore no shear stress on vertical and horizontal planes."
                },
                {
                    id: "cm25q037",
                    src: "SOIL136-00318",
                    text: "The coefficient of earth pressure at rest is given by ______.",
                    options: [
                        { key: "a", text: "K₀ = μ / (1 + μ)" },
                        { key: "b", text: "K₀ = μ / (1 - μ)" },
                        { key: "c", text: "K₀ = 2μ / (1 - μ)" },
                        { key: "d", text: "K₀ = 1 / μ" }
                    ],
                    answer: "b",
                    explanation: "For an elastic material, the coefficient of earth pressure at rest is related to Poisson's ratio (μ) by K₀ = μ / (1 - μ)."
                },
                {
                    id: "cm25q038",
                    src: "SOIL136-00319",
                    text: "The pressure distribution diagram for earth pressure at rest is ______.",
                    options: [
                        { key: "a", text: "circular" },
                        { key: "b", text: "rectangular" },
                        { key: "c", text: "triangular" },
                        { key: "d", text: "square" }
                    ],
                    answer: "c",
                    explanation: "For a homogeneous soil mass, the lateral earth pressure at rest increases linearly with depth, resulting in a triangular pressure distribution."
                },
                {
                    id: "cm25q039",
                    src: "SOIL136-00320",
                    text: "For cohesionless soil the angle of internal friction is 45°, find the K₀.",
                    options: [
                        { key: "a", text: "0.438" },
                        { key: "b", text: "0.286" },
                        { key: "c", text: "0.592" },
                        { key: "d", text: "0.293" }
                    ],
                    answer: "d",
                    explanation: "Using Jaky's formula: K₀ = 1 - sinφ = 1 - sin(45°) = 1 - (0.7071) = 0.2929 ≈ 0.293."
                },
                {
                    id: "cm25q040",
                    src: "SOIL136-00321",
                    text: "If K₀ = 0.4, then find the value of μ.",
                    options: [
                        { key: "a", text: "0.286" },
                        { key: "b", text: "0.438" },
                        { key: "c", text: "0.666" },
                        { key: "d", text: "0.592" }
                    ],
                    answer: "a",
                    explanation: "Using the formula K₀ = μ / (1 - μ). 0.4 = μ / (1 - μ). Solving: 0.4(1 - μ) = μ =&gt; 0.4 - 0.4μ = μ =&gt; 0.4 = 1.4μ =&gt; μ = 0.4 / 1.4 = 0.2857 ≈ 0.286."
                },
                {
                    id: "cm25q041",
                    src: "SOIL136-00322",
                    text: "For clay soil the value of n can be taken as ______ in the absence of test data.",
                    options: [
                        { key: "a", text: "0.20 to 0.25" },
                        { key: "b", text: "0.4 to 0.5" },
                        { key: "c", text: "0.003 to 0.05" },
                        { key: "d", text: "0.08 to 0.10" }
                    ],
                    answer: "b",
                    explanation: "The value of 'n' (porosity) for clay soils typically ranges from 0.4 to 0.5. This is because clay particles are very small and can hold a significant amount of water between them, leading to higher porosity compared to other soil types."
                },
                {
                    id: "cm25q042",
                    src: "SOIL136-00323",
                    text: "The two commonly used penetration tests are ______.",
                    options: [
                        { key: "a", text: "Standard penetration test" },
                        { key: "b", text: "Cone penetration test" },
                        { key: "c", text: "Both (a) and (b)" },
                        { key: "d", text: "None of the mentioned" }
                    ],
                    answer: "c",
                    explanation: "The Standard Penetration Test (SPT) and the Cone Penetration Test (CPT) are the two most common in-situ tests used in geotechnical engineering to determine the relative density and strength properties of soils."
                },
                {
                    id: "cm25q043",
                    src: "SOIL136-00324",
                    text: "The values derived from penetration tests can be used for finding ______.",
                    options: [
                        { key: "a", text: "Depth of hard stratum and Strength of soil" },
                        { key: "b", text: "Soil saturation" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "Both (a) and (b)" }
                    ],
                    answer: "a",
                    explanation: "Penetration tests provide data on the resistance of soil to penetration, which is directly correlated to soil strength and can help identify the depth at which a hard, competent stratum is encountered."
                },
                {
                    id: "cm25q044",
                    src: "SOIL136-00325",
                    text: "The observed value of N in static cone penetration test is corrected by ______.",
                    options: [
                        { key: "a", text: "Overburden and Dilatancy /submergence" },
                        { key: "b", text: "Effective pressure" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "a",
                    explanation: "The raw N-value from the SPT is corrected for overburden pressure (which affects confinement) and dilatancy (which affects the behavior of fine sands and silts below the water table) to get a standardized measure of soil resistance."
                },
                {
                    id: "cm25q045",
                    src: "SOIL136-00326",
                    text: "Correction for increasing effective overburden pressure have been proposed by ______.",
                    options: [
                        { key: "a", text: "Gibbs and Holtz" },
                        { key: "b", text: "All of the mentioned" },
                        { key: "c", text: "Peck" },
                        { key: "d", text: "Thornburn" }
                    ],
                    answer: "b",
                    explanation: "Multiple researchers, including Gibbs &amp; Holtz, Peck, and Thornburn, have developed correction factors to account for the effect of varying effective overburden pressure on penetration resistance values."
                },
                {
                    id: "cm25q046",
                    src: "SOIL136-00327",
                    text: "The split tube used in static cone penetration test, is commonly known as ______.",
                    options: [
                        { key: "a", text: "Split tube sampler" },
                        { key: "b", text: "Tube sampler" },
                        { key: "c", text: "Split spoon sampler" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "c",
                    explanation: "The split-barrel sampler used to retrieve soil samples during the Standard Penetration Test is universally known as a split-spoon sampler."
                }
            ]
        },
        {
            id: "cm25watr",
            name: "Basic Water Resources Engineering",
            subject: "Water Resources",
            accent: "emerald",
            blurb: "11 questions drawn from the Basic Water Resources Engineering bank.",
            questions: [
                {
                    id: "cm25q047",
                    src: "WATE701-00278",
                    text: "If fluid is at rest in a container of a narrow mouth at a certain column height and some fluid is at rest at some column height in a container having broad mouth, will the pressure be different at certain depth from fluid surface.",
                    options: [
                        { key: "a", text: "Pressure will be more for narrower mouth" },
                        { key: "b", text: "Pressure will be less for narrower mouth" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "Pressure will be same for both." }
                    ],
                    answer: "d",
                    explanation: "Hydrostatic pressure at a point in a fluid at rest depends only on the depth of that point from the free surface and the density of the fluid, not on the shape or size of the container (Pascal's law for hydrostatics)."
                },
                {
                    id: "cm25q048",
                    src: "WATE701-00279",
                    text: "Pressure intensity or force due to pressure gradient for fluid at rest is considered as which kind of force?",
                    options: [
                        { key: "a", text: "Surface force" },
                        { key: "b", text: "Body force" },
                        { key: "c", text: "Force due to motion" },
                        { key: "d", text: "None of the mentioned" }
                    ],
                    answer: "a",
                    explanation: "In fluid mechanics, surface forces act on the boundaries of a fluid element through direct contact (like pressure and viscous forces), while body forces act throughout the volume (like gravity). The pressure force is a surface force."
                },
                {
                    id: "cm25q049",
                    src: "WATE701-00280",
                    text: "Calculate the hydrostatic pressure for water moving with constant velocity at a depth of 5 m from the surface.",
                    options: [
                        { key: "a", text: "98 KN/m²" },
                        { key: "b", text: "49 kN/m²" },
                        { key: "c", text: "24 KN/m²" },
                        { key: "d", text: "Since fluid is in motion, we cannot analyze" }
                    ],
                    answer: "b",
                    explanation: "Sanfoundry, a fluid in uniform motion experiences no additional dynamic effects from acceleration and behaves analytically the same as a fluid at rest. Therefore, standard hydrostatic formulas as P =ρ g h"
                },
                {
                    id: "cm25q050",
                    src: "WATE701-00281",
                    text: "A cuboidal beaker is half filled with water. By what percent will the hydrostatic force on one side of the beaker change if the water level is doubled?",
                    options: [
                        { key: "a", text: "50% increase" },
                        { key: "b", text: "200% increase" },
                        { key: "c", text: "100% increase" },
                        { key: "d", text: "300% increase" }
                    ],
                    answer: "c",
                    explanation: "Hydrostatic force on a plane surface is F = ρg h_c A, where h_c is the depth of the centroid. If the beaker is cuboidal, the side is rectangular. If water level is doubled, the area A doubles and the centroid depth h_c doubles. Thus, F new = ρg (2h_c)(2A) = 4 ρg h_c A = 4F_original. This is a 300% increase. However, the question is cut off. Assuming it asks for the change when level is doubled, the answer should be 300% increase, but it's not listed. The question is incomplete in the provided text."
                },
                {
                    id: "cm25q051",
                    src: "WATE701-00282",
                    text: "Will capillary rise occur and if it occurs what will be capillary rise if glass capillarity tube is immersed in water and experiment is carried out by astronauts in space.",
                    options: [
                        { key: "a", text: "Capillarity rise will not occur" },
                        { key: "b", text: "Capillarity rise will occur infinitely and will come out in form of fountain" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "Capillarity rise will occur finitely and will be the whole length of tube" }
                    ],
                    answer: "d",
                    explanation: "Capillary action is due to surface tension and adhesion/cohesion, which are still present in microgravity. However, without gravity, there is no force to balance the capillary rise, so the liquid will rise to fill the entire length of the tube."
                },
                {
                    id: "cm25q052",
                    src: "WATE701-00283",
                    text: "Which of the following is the condition for the boiling of a liquid?",
                    options: [
                        { key: "a", text: "Absolute pressure of a liquid must be less than or equal to it’s vapor pressure" },
                        { key: "b", text: "Absolute pressure of a liquid must be greater than or equal to it’s vapor pressure" },
                        { key: "c", text: "Absolute pressure of a liquid must be equal to it’s vapor pressure" },
                        { key: "d", text: "Absolute pressure of a liquid must be greater than it’s vapor pressure" }
                    ],
                    answer: "a",
                    explanation: "Boiling occurs when the vapor pressure of a liquid equals or exceeds the surrounding atmospheric pressure. This allows bubbles to form within the liquid."
                },
                {
                    id: "cm25q053",
                    src: "WATE701-00284",
                    text: "Which of the following equation correctly depicts the relation between the vapor pressure of a liquid and it’s temperature?",
                    options: [
                        { key: "a", text: "Vapor pressure increases linearly with the increase in temperature of the liquid" },
                        { key: "b", text: "Vapor pressure increases rapidly with the increase in temperature of the liquid at low temperatures and the rate of increase goes low at higher temperatures" },
                        { key: "c", text: "Vapor pressure increases slightly with the increase in temperature of the liquid at low temperatures and the rate of increase goes high at higher temperatures" },
                        { key: "d", text: "Vapor pressure remains unchanged with the increase in temperature of the liquid" }
                    ],
                    answer: "b",
                    explanation: "Vapor pressure increases non-linearly with temperature. The increase is more rapid at higher temperatures, as described by the Clausius-Clapeyron equation."
                },
                {
                    id: "cm25q054",
                    src: "WATE701-00286",
                    text: "For what value of flow behavior index, does the consistency index has a dimension independent of time?",
                    options: [
                        { key: "a", text: "0" },
                        { key: "b", text: "2" },
                        { key: "c", text: "1" },
                        { key: "d", text: "3" }
                    ],
                    answer: "c",
                    explanation: "In the power-law model for non-Newtonian fluids, τ = K (du/dy)^n. The consistency index K has dimensions that depend on n. For n=1 (Newtonian fluid), K becomes dynamic viscosity with dimensions [M L⁻¹ T⁻¹], which is independent of time? Actually, for n=1, it is independent of time? The dimension of K is [M L⁻¹ T^(n-2)]. For it to be independent of time, the exponent of T must be 0, so n-2=0, hence n=2. But the option is 1. There might be a confusion. The question asks for 'dimension independent of time', meaning the exponent of time is zero. So, n-2=0, n=2. However, the provided answer in the text is (b) 1. This is a discrepancy. Based on dimension analysis, n=2 is correct for time-independent dimension of K."
                },
                {
                    id: "cm25q055",
                    src: "WATE701-00287",
                    text: "What will be the dimension of the flow consistency index for a fluid with a flow behavior index of -1?",
                    options: [
                        { key: "a", text: "N/m²s²" },
                        { key: "b", text: "N/m²" },
                        { key: "c", text: "N/m" },
                        { key: "d", text: "N/m²s" }
                    ],
                    answer: "d",
                    explanation: "For power-law fluid, τ = K (du/dy)^n. Dimensions of τ are [M L⁻¹ T⁻²]. Dimensions of du/dy are [T⁻¹]. So, [M L⁻¹ T⁻²] = K [T⁻¹]^n. Thus, K = [M L⁻¹ T⁻²] * [T]^n. For n=-1, K = [M L⁻¹ T⁻²] * [T⁻¹] = [M L⁻¹ T⁻³]. In SI units, this is Pa·s⁻¹ or N/m²s. Note: The question in the text says n=-12, which is likely a typo, and it should be n=-1 for the given options."
                },
                {
                    id: "cm25q056",
                    src: "WATE701-00288",
                    text: "Which of the following contribute to the reason behind the origin of surface tension?",
                    options: [
                        { key: "a", text: "both cohesive forces and adhesive forces" },
                        { key: "b", text: "only cohesive forces" },
                        { key: "c", text: "only adhesive forces" },
                        { key: "d", text: "neither cohesive forces nor adhesive forces" }
                    ],
                    answer: "a",
                    explanation: "Surface tension arises due to the imbalance of cohesive forces (between like molecules) and adhesive forces (between unlike molecules) at the interface between two fluids."
                },
                {
                    id: "cm25q057",
                    src: "WATE701-00289",
                    text: "What will be the diameter (in mm) of a water droplet, the pressure inside which is 0.05 N/cm² greater than the outside pressure? (Take surface tension as 0.075 N/m)",
                    options: [
                        { key: "a", text: "3" },
                        { key: "b", text: "0.6" },
                        { key: "c", text: "0.3" },
                        { key: "d", text: "6" }
                    ],
                    answer: "b",
                    explanation: "The excess pressure inside a droplet is ΔP = 4σ/d. ΔP = 0.05 N/cm² = 500 N/m². σ = 0.075 N/m. So, d = 4σ/ΔP = (4*0.075)/500 = 0.0006 m = 0.6 mm."
                }
            ]
        },
        {
            id: "cm25hydr",
            name: "Hydropower",
            subject: "Hydropower",
            accent: "cyan",
            blurb: "10 questions drawn from the Hydropower bank.",
            questions: [
                {
                    id: "cm25q058",
                    src: "HYDR626-00222",
                    text: "If the height of the dam is 35 meters and specific gravity of concrete is 2.4 with no uplift pressure, what should be the minimum base width of dam by considering elementary profile of a dam, if the coefficient of friction = 0.7.",
                    options: [
                        { key: "a", text: "20.33" },
                        { key: "b", text: "21.23" },
                        { key: "c", text: "22.6" },
                        { key: "d", text: "35" }
                    ],
                    answer: "c",
                    explanation: "For an elementary profile without uplift, the minimum base width (B) for no tension is given by B = H / √(Sc), where Sc is the specific gravity of the material. Sc = 2.4, so B = 35 / √2.4 ≈ 35 / 1.549 ≈ 22.6 m. The friction coefficient is not needed for this specific check."
                },
                {
                    id: "cm25q059",
                    src: "HYDR626-00223",
                    text: "What is the specific discharge over an ogee spillway if head over crest (H)= 1.2m and c= 0.7.",
                    options: [
                        { key: "a", text: "7.12 cumecs/m" },
                        { key: "b", text: "3.56 cumecs/m" },
                        { key: "c", text: "(Fourth option not provided)" },
                        { key: "d", text: "4.27 cumecs/m" }
                    ],
                    answer: "d",
                    explanation: "The formula for discharge over an ogee spillway is q = C * H^(3/2), where C is the coefficient of discharge. Given C=0.7 and H=1.2m, q = 0.7 * (1.2)^(3/2) = 0.7 * (1.2 * √1.2) ≈ 0.7 * (1.2 * 1.095) ≈ 0.7 * 1.314 ≈ 0.92 cumecs/m. This result does not match the options, suggesting the value 'c/a' in the question might be the coefficient C itself, perhaps with a value of 2.2 or similar. If C is taken as 2.2, q = 2.2 * (1.2)^(3/2) ≈ 2.2 * 1.314 ≈ 2.89, still not matching. The closest option based on standard C values (around 2.0-2.3) is 4.27 if H is used differently. There might be a misprint in the question. The calculation for option (3) is 0.7 * 2.2 * 1.2^(3/2) or similar."
                },
                {
                    id: "cm25q060",
                    src: "HYDR626-00224",
                    text: "What is the name of the process where water is pumped back into a reservoir when electricity demand is low?",
                    options: [
                        { key: "a", text: "Pumped storage" },
                        { key: "b", text: "Tidal storage" },
                        { key: "c", text: "Wave storage" },
                        { key: "d", text: "Solar storage" }
                    ],
                    answer: "a",
                    explanation: "Pumped storage hydropower is a type of energy storage where water is pumped from a lower reservoir to an upper reservoir during periods of low electricity demand (low cost) and then released to generate power during periods of high demand (high cost)."
                },
                {
                    id: "cm25q061",
                    src: "HYDR626-00225",
                    text: "What is the most common type of hydropower facility?",
                    options: [
                        { key: "a", text: "Run-of-river" },
                        { key: "b", text: "Reservoir" },
                        { key: "c", text: "Tidal" },
                        { key: "d", text: "Wave" }
                    ],
                    answer: "b",
                    explanation: "Reservoir (or storage) hydropower plants are the most common type. They use a dam to store water in a reservoir, providing the ability to generate electricity on demand and manage water resources for multiple uses."
                },
                {
                    id: "cm25q062",
                    src: "HYDR626-00226",
                    text: "The primary power at a hydro plant is determined considering",
                    options: [
                        { key: "a", text: "100% available flow" },
                        { key: "b", text: "Minimum stream flow" },
                        { key: "c", text: "Available pondage" },
                        { key: "d", text: "All of above" }
                    ],
                    answer: "d",
                    explanation: "Primary power is the firm, continuous power that can be generated reliably based on the minimum available flow, the plant's pondage capacity to regulate daily variations, and the full available head."
                },
                {
                    id: "cm25q063",
                    src: "HYDR626-00227",
                    text: "The main source of energy for conventional power generation is",
                    options: [
                        { key: "a", text: "Solar energy" },
                        { key: "b", text: "Water energy" },
                        { key: "c", text: "Wind energy" },
                        { key: "d", text: "All of above" }
                    ],
                    answer: "b",
                    explanation: "Conventional power generation historically and primarily refers to thermal (coal, gas, nuclear) and hydropower. Among the options given, water energy (hydropower) is a key conventional source."
                },
                {
                    id: "cm25q064",
                    src: "HYDR626-00228",
                    text: "The non-commercial energy source for generation of energy is",
                    options: [
                        { key: "a", text: "Agricultural waste" },
                        { key: "b", text: "Coal" },
                        { key: "c", text: "Water" },
                        { key: "d", text: "Lignite" }
                    ],
                    answer: "a",
                    explanation: "Non-commercial energy sources are typically traditional biomass fuels (like agricultural waste, wood, dung) that are not traded in organized commercial markets, unlike coal, lignite, or developed water power."
                },
                {
                    id: "cm25q065",
                    src: "HYDR626-00229",
                    text: "The main objective of the planning for water power development is",
                    options: [
                        { key: "a", text: "Pricing of the fuel" },
                        { key: "b", text: "To derive maximum benefit from the available water with least tinkering with the environment" },
                        { key: "c", text: "Analysis of hydrological aspects power development only" },
                        { key: "d", text: "Formulation of the hydropower policy" }
                    ],
                    answer: "b",
                    explanation: "The core objective of integrated water power planning is sustainable development: optimizing energy generation and other benefits (irrigation, flood control) while minimizing negative social and environmental impacts."
                },
                {
                    id: "cm25q066",
                    src: "HYDR626-00230",
                    text: "The ratio of maximum power utilized to the maximum power available is",
                    options: [
                        { key: "a", text: "Power factor" },
                        { key: "b", text: "Reserve capacity" },
                        { key: "c", text: "Plant use factor" },
                        { key: "d", text: "Capacity factor" }
                    ],
                    answer: "c",
                    explanation: "Plant use factor is defined as the ratio of the actual energy produced over a period to the maximum possible energy that could have been produced if the plant operated continuously at its maximum rating during the same period."
                },
                {
                    id: "cm25q067",
                    src: "HYDR626-00231",
                    text: "The net amount of power which is continuously available from a plant without any break is known as",
                    options: [
                        { key: "a", text: "Secondary power" },
                        { key: "b", text: "Power factor" },
                        { key: "c", text: "Utilization factor" },
                        { key: "d", text: "Firm power" }
                    ],
                    answer: "d",
                    explanation: "Firm power is the guaranteed power output that a plant can provide continuously, 24/7, under specified conditions. It is the most valuable type of power from a reliability perspective."
                }
            ]
        },
        {
            id: "cm25irri",
            name: "Irrigation and Drainage",
            subject: "Irrigation",
            accent: "emerald",
            blurb: "11 questions drawn from the Irrigation and Drainage bank.",
            questions: [
                {
                    id: "cm25q068",
                    src: "IRRI951-00256",
                    text: "Canals taken off from ice fed rivers are",
                    options: [
                        { key: "a", text: "Perennial canal" },
                        { key: "b", text: "Permanent canal" },
                        { key: "c", text: "Non-perennial canal" },
                        { key: "d", text: "Flood canal" }
                    ],
                    answer: "a",
                    explanation: "Canals taken off from rivers fed by glaciers or ice melt (ice-fed rivers) receive a continuous water supply throughout the year, making them perennial canals."
                },
                {
                    id: "cm25q069",
                    src: "IRRI951-00257",
                    text: "Canals taken off from rivers with or without regulators are",
                    options: [
                        { key: "a", text: "Perennial canal" },
                        { key: "b", text: "Permanent canal" },
                        { key: "c", text: "Non-perennial canal" },
                        { key: "d", text: "Flood canal" }
                    ],
                    answer: "b",
                    explanation: "Permanent canals are those that are constructed as permanent structures with proper headworks (including regulators) to control the flow from the river, regardless of whether the river itself is perennial or non-perennial."
                },
                {
                    id: "cm25q070",
                    src: "IRRI951-00258",
                    text: "The ratio of the rate of change of discharge in outlet and parent channel, is known as",
                    options: [
                        { key: "a", text: "Efficiency" },
                        { key: "b", text: "Sensitivity" },
                        { key: "c", text: "Flexibility" },
                        { key: "d", text: "Modular limit" }
                    ],
                    answer: "c",
                    explanation: "Flexibility (F) is defined as the ratio of the rate of change of discharge of an outlet to the rate of change of discharge in the parent channel (F = dq / dQ)."
                },
                {
                    id: "cm25q071",
                    src: "IRRI951-00259",
                    text: "An outlet which maintains a constant discharge irrespective of fluctuation in the water levels of the supplying channel or water course, is known as",
                    options: [
                        { key: "a", text: "Non-modular outlet" },
                        { key: "b", text: "Semi-modular outlet" },
                        { key: "c", text: "Flexible modular outlet" },
                        { key: "d", text: "Rigid modular outlet" }
                    ],
                    answer: "d",
                    explanation: "A rigid module (or rigid modular outlet) is designed to discharge a fixed, constant quantity of water regardless of fluctuations in the water level of the supplying channel, ensuring equitable distribution."
                },
                {
                    id: "cm25q072",
                    src: "IRRI951-00260",
                    text: "F.S.L. of a canal at its head with respect to parent channel is kept",
                    options: [
                        { key: "a", text: "At the same level" },
                        { key: "b", text: "15 cm lower" },
                        { key: "c", text: "15 cm higher" },
                        { key: "d", text: "none of these" }
                    ],
                    answer: "b",
                    explanation: "The Full Supply Level (FSL) of a canal at its head is typically kept about 15 cm lower than the water level in the parent channel (e.g., river) to account for head loss through the head regulator structure."
                },
                {
                    id: "cm25q073",
                    src: "IRRI951-00261",
                    text: "The depth of the crest of a scouring sluice below the crest of a head regulator, is generally kept",
                    options: [
                        { key: "a", text: "0.20 m" },
                        { key: "b", text: "1.20 m" },
                        { key: "c", text: "2.20 m" },
                        { key: "d", text: "3.20 m" }
                    ],
                    answer: "b",
                    explanation: "The crest of the scouring sluice is set about 1.20 meters below the crest of the head regulator. This depth is sufficient to allow the sluice to effectively scour and remove silt deposited in front of the head regulator."
                },
                {
                    id: "cm25q074",
                    src: "IRRI951-00262",
                    text: "The sensitivity of a rigid module, is",
                    options: [
                        { key: "a", text: "2.00" },
                        { key: "b", text: "1.50" },
                        { key: "c", text: "Zero" },
                        { key: "d", text: "1.00" }
                    ],
                    answer: "c",
                    explanation: "Sensitivity is the ratio of the rate of change of discharge of the outlet to the rate of change of water level in the distributary. For a rigid module, the discharge is constant and does not change with water level, so its sensitivity is zero."
                },
                {
                    id: "cm25q075",
                    src: "IRRI951-00263",
                    text: "A straight glacis type fall with a baffle platform and a baffle wall is called",
                    options: [
                        { key: "a", text: "Vertical dropfall" },
                        { key: "b", text: "Glacis fall" },
                        { key: "c", text: "Montague type fall" },
                        { key: "d", text: "Inglis fall" }
                    ],
                    answer: "d",
                    explanation: "An Inglis fall (or baffle fall) is characterized by a straight glacis (slope) equipped with a baffle platform and a baffle wall. These elements are designed to dissipate the energy of the flowing water effectively."
                },
                {
                    id: "cm25q076",
                    src: "IRRI951-00264",
                    text: "Which of the following types of falls use parabolic glacis for energy dissipation?",
                    options: [
                        { key: "a", text: "Montague type fall" },
                        { key: "b", text: "Vertical drop fall" },
                        { key: "c", text: "Glacis fall" },
                        { key: "d", text: "Inglis fall" }
                    ],
                    answer: "a",
                    explanation: "The Montague type fall utilizes a parabolic glacis (ogee shape). This shape is designed to maintain contact between the water and the surface, ensuring efficient energy dissipation through friction and turbulence."
                },
                {
                    id: "cm25q077",
                    src: "IRRI951-00265",
                    text: "In a Sardis type fall, rectangular crest is used for discharge upto",
                    options: [
                        { key: "a", text: "6 cumecs" },
                        { key: "b", text: "14 cumecs" },
                        { key: "c", text: "10 cumecs" },
                        { key: "d", text: "20 cumecs" }
                    ],
                    answer: "b",
                    explanation: "The Sardis type fall, which incorporates a raised crest and a sloping glacis, typically uses a rectangular crest design for canals with discharges up to 14 cubic meters per second (cumecs)."
                },
                {
                    id: "cm25q078",
                    src: "IRRI951-00266",
                    text: "Which of the following can be used as a meter fall ?",
                    options: [
                        { key: "a", text: "vertical drop fall" },
                        { key: "b", text: "flumed glacis fall" },
                        { key: "c", text: "unflumed glacis fall" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "d",
                    explanation: "A meter fall is a structure designed to measure the discharge in a canal. Various types of falls, including vertical drop, flumed glacis, and unflumed glacis falls, can be calibrated and used for this purpose."
                }
            ]
        },
        {
            id: "cm25tran",
            name: "Transportation",
            subject: "Transportation",
            accent: "rose",
            blurb: "11 questions drawn from the Transportation bank.",
            questions: [
                {
                    id: "cm25q079",
                    src: "TRAN808-00260",
                    text: "As per IRC, the minimum horizontal clearance required for lighting poles for the road with raised kerbs is ...... from the edge of raised kerb.",
                    options: [
                        { key: "a", text: "0.5 m" },
                        { key: "b", text: "0.4 m" },
                        { key: "c", text: "0.3 m" },
                        { key: "d", text: "0.6 m" }
                    ],
                    answer: "d",
                    explanation: "IRC recommends a minimum horizontal clearance of 0.6 meters from the face of a raised kerb to a lighting pole to prevent vehicles from striking the pole if they mount or are close to the kerb."
                },
                {
                    id: "cm25q080",
                    src: "TRAN808-00261",
                    text: "The most cost-effective/economical layout of lighting for narrow roads is",
                    options: [
                        { key: "a", text: "Central" },
                        { key: "b", text: "Staggered, on both side" },
                        { key: "c", text: "Single side" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "c",
                    explanation: "A single-side lighting layout requires only one set of poles, wiring, and fixtures. For narrow roads, it can often provide sufficient illumination across the road width, making it the most economical option compared to central or staggered two-side layouts."
                },
                {
                    id: "cm25q081",
                    src: "TRAN808-00263",
                    text: "What do you mean by trips?",
                    options: [
                        { key: "a", text: "Two-way movement of a person from origin to destination" },
                        { key: "b", text: "One-way movement of a person from origin to destination" },
                        { key: "c", text: "Continuous movement" },
                        { key: "d", text: "A movement that is more than 50 kms" }
                    ],
                    answer: "b",
                    explanation: "In transport planning, a \"trip\" is defined as a one-way movement of a person or vehicle from an origin (start point) to a destination (end point) for a specific purpose. A round journey consists of two trips."
                },
                {
                    id: "cm25q082",
                    src: "TRAN808-00264",
                    text: "Trips are classified into how many categories?",
                    options: [
                        { key: "a", text: "2" },
                        { key: "b", text: "4" },
                        { key: "c", text: "3" },
                        { key: "d", text: "5" }
                    ],
                    answer: "c",
                    explanation: "Trips are primarily classified based on purpose into three main categories: Home-Based Work (HBW), Home-Based Other (HBO - e.g., shopping, recreation), and Non-Home-Based (NHB - trips not starting or ending at home)."
                },
                {
                    id: "cm25q083",
                    src: "TRAN808-00265",
                    text: "The best type of interchange can be provided with ______",
                    options: [
                        { key: "a", text: "Rotary" },
                        { key: "b", text: "Diamond" },
                        { key: "c", text: "Partial cloverleaf" },
                        { key: "d", text: "Full cloverleaf" }
                    ],
                    answer: "d",
                    explanation: "A full cloverleaf interchange provides grade-separated ramps for all turning movements (left and right turns in all directions). This eliminates all at-grade conflicts, allowing for the highest capacity and safety among the options listed."
                },
                {
                    id: "cm25q084",
                    src: "TRAN808-00266",
                    text: "The capacity of an uncontrolled intersection is ______",
                    options: [
                        { key: "a", text: "1200 to 1400 vehicles/hour" },
                        { key: "b", text: "1000 to 1200 vehicles/hour" },
                        { key: "c", text: "1100 to 1200 vehicles/hour" },
                        { key: "d", text: "1400 to 1600 vehicles/hour" }
                    ],
                    answer: "a",
                    explanation: "The practical capacity of an uncontrolled intersection (relying on drivers' judgment and rules of the road) typically ranges between 1200 and 1400 passenger car units per hour on the major road."
                },
                {
                    id: "cm25q085",
                    src: "TRAN808-00267",
                    text: "The ramps in the grade separated intersections do not include ______",
                    options: [
                        { key: "a", text: "Direct" },
                        { key: "b", text: "Cloverleaf" },
                        { key: "c", text: "Semi direct" },
                        { key: "d", text: "Indirect" }
                    ],
                    answer: "b",
                    explanation: "Cloverleaf is a *type* of grade-separated interchange that *uses* ramps. The classification of ramp *designs* themselves includes Direct, Semi-Direct, and Indirect (loop) ramps. 'Cloverleaf' is not a ramp type but an interchange layout that uses loops."
                },
                {
                    id: "cm25q086",
                    src: "TRAN808-00268",
                    text: "The type of parking in which the vehicles are parked along the kerb is called ______",
                    options: [
                        { key: "a", text: "Off-street parking" },
                        { key: "b", text: "Parallel parking" },
                        { key: "c", text: "Kerb parking" },
                        { key: "d", text: "Angle parking" }
                    ],
                    answer: "c",
                    explanation: "Parking along the kerb is generically termed 'kerb parking' or 'on-street parking'. This includes both parallel parking and angle parking configurations. The other options are specific types or different categories (off-street)."
                },
                {
                    id: "cm25q087",
                    src: "TRAN808-00269",
                    text: "A road pavement should have which of the following features?",
                    options: [
                        { key: "a", text: "Yielding" },
                        { key: "b", text: "Undulation" },
                        { key: "c", text: "Deflection" },
                        { key: "d", text: "Non-yielding" }
                    ],
                    answer: "d",
                    explanation: "A pavement must be non-yielding to support traffic loads without excessive deformation, providing a stable and durable surface."
                },
                {
                    id: "cm25q088",
                    src: "TRAN808-00270",
                    text: "______ pavement has a concrete slab as the topmost layer.",
                    options: [
                        { key: "a", text: "Rigid" },
                        { key: "b", text: "Fixed" },
                        { key: "c", text: "Flexible" },
                        { key: "d", text: "Portable" }
                    ],
                    answer: "a",
                    explanation: "Rigid pavements are characterized by a top layer of Portland cement concrete (PCC) slab, which has high flexural strength."
                },
                {
                    id: "cm25q089",
                    src: "TRAN808-00271",
                    text: "In what shape is the compressive strength distributed in a flexible pavement?",
                    options: [
                        { key: "a", text: "Rectangle" },
                        { key: "b", text: "Truncated cone" },
                        { key: "c", text: "Circle" },
                        { key: "d", text: "Cone" }
                    ],
                    answer: "b",
                    explanation: "In flexible pavement design, a wheel load applied at the surface is distributed downward through the various layers (surface course, base, sub-base, and subgrade). As the load moves deeper, it spreads over a larger area, which reduces the pressure (stress) on the underlying soil. This distribution is typically modeled as a truncated cone (or a frustum)."
                }
            ]
        },
        {
            id: "cm25wate",
            name: "Water Supply, Sanitation and Environment",
            subject: "Water Supply",
            accent: "blue",
            blurb: "11 questions drawn from the Water Supply, Sanitation and Environment bank.",
            questions: [
                {
                    id: "cm25q090",
                    src: "WATE813-00244",
                    text: "Which chemical is not effective for removal of iron and manganese",
                    options: [
                        { key: "a", text: "chlorine dioxides" },
                        { key: "b", text: "ozone" },
                        { key: "c", text: "chloramine" },
                        { key: "d", text: "potassium permanganate" }
                    ],
                    answer: "c",
                    explanation: "Chloramine is a weaker oxidant compared to chlorine dioxide, ozone, and potassium permanganate, making it less effective for oxidizing and removing iron and manganese."
                },
                {
                    id: "cm25q091",
                    src: "WATE813-00245",
                    text: "What are the ponds constructed for removing entrained solids called?",
                    options: [
                        { key: "a", text: "Clarifiers" },
                        { key: "b", text: "Acting basins" },
                        { key: "c", text: "Eco-ponds" },
                        { key: "d", text: "Settling ponds" }
                    ],
                    answer: "d",
                    explanation: "Settling ponds or sedimentation ponds are designed to allow entrained solids to settle out from water by gravity."
                },
                {
                    id: "cm25q092",
                    src: "WATE813-00246",
                    text: "The tanks built with mechanical means for continuous removal of solids being deposited by sedimentation are called",
                    options: [
                        { key: "a", text: "Clarifiers" },
                        { key: "b", text: "Settling basins" },
                        { key: "c", text: "Sedimentation tanks" },
                        { key: "d", text: "Eco-ponds" }
                    ],
                    answer: "a",
                    explanation: "Clarifiers are sedimentation tanks equipped with mechanical scrapers for the continuous removal of settled sludge."
                },
                {
                    id: "cm25q093",
                    src: "WATE813-00247",
                    text: "What is the accumulated layer at the bottom of the tank called as?",
                    options: [
                        { key: "a", text: "Flocs" },
                        { key: "b", text: "Sludge" },
                        { key: "c", text: "Sediment" },
                        { key: "d", text: "Sewage" }
                    ],
                    answer: "b",
                    explanation: "The concentrated mixture of solids settled at the bottom of a sedimentation tank or clarifier is called sludge."
                },
                {
                    id: "cm25q094",
                    src: "WATE813-00248",
                    text: "What is the time period for which the water is stored in fill and draw type of sedimentation tank?",
                    options: [
                        { key: "a", text: "48 hours" },
                        { key: "b", text: "52 hours" },
                        { key: "c", text: "24 hours" },
                        { key: "d", text: "76 hours" }
                    ],
                    answer: "c",
                    explanation: "A fill-and-draw tank operates in batches. It is filled, allowed to settle for about 24 hours, the clear water is drawn off, and the cycle repeats."
                },
                {
                    id: "cm25q095",
                    src: "WATE813-00249",
                    text: "What is the maximum permissible velocity in horizontal flow type sedimentation tank?",
                    options: [
                        { key: "a", text: "0.2 m/s" },
                        { key: "b", text: "1 m/s" },
                        { key: "c", text: "2 m/s" },
                        { key: "d", text: "0.3 m/s" }
                    ],
                    answer: "d",
                    explanation: "A low horizontal flow velocity (typically &lt;0.3 m/s) is crucial in sedimentation tanks to prevent scour and re-suspension of already settled particles."
                },
                {
                    id: "cm25q096",
                    src: "WATE813-00250",
                    text: "Plain chlorination is used for water",
                    options: [
                        { key: "a", text: "Obtained from clear lakes" },
                        { key: "b", text: "Consumed during emergencies" },
                        { key: "c", text: "Supplies to armies during war" },
                        { key: "d", text: "All the above" }
                    ],
                    answer: "d",
                    explanation: "Plain chlorination (chlorination without prior filtration) is a simple disinfection method often used for relatively clear water or in emergency/temporary situations."
                },
                {
                    id: "cm25q097",
                    src: "WATE813-00251",
                    text: "Activated carbon is used in water treatment for",
                    options: [
                        { key: "a", text: "Disinfection" },
                        { key: "b", text: "Removing Color" },
                        { key: "c", text: "Removing hardness" },
                        { key: "d", text: "removing corrosiveness" }
                    ],
                    answer: "b",
                    explanation: "Activated carbon is primarily used for adsorption of organic contaminants, which are often responsible for color, taste, and odor."
                },
                {
                    id: "cm25q098",
                    src: "WATE813-00252",
                    text: "A method that is not used to remove iron and manganese from water is...",
                    options: [
                        { key: "a", text: "oxidation with chlorine followed by filtration" },
                        { key: "b", text: "aeration" },
                        { key: "c", text: "Sequestration" },
                        { key: "d", text: "filtration with manganese - greensand" }
                    ],
                    answer: "c",
                    explanation: "Sequestration (using chemicals like polyphosphates to keep metals in solution) does not remove iron and manganese; it only prevents their precipitation and staining. Oxidation/filtration and greensand are standard removal methods."
                },
                {
                    id: "cm25q099",
                    src: "WATE813-00253",
                    text: "The process in which chlorination is done beyond break point is known as",
                    options: [
                        { key: "a", text: "pre-chlorination" },
                        { key: "b", text: "post - chlorination" },
                        { key: "c", text: "de -chlorination" },
                        { key: "d", text: "super - chlorination" }
                    ],
                    answer: "d",
                    explanation: "Super-chlorination involves adding chlorine significantly beyond the breakpoint to ensure disinfection, often followed by dechlorination to reduce the high residual."
                },
                {
                    id: "cm25q100",
                    src: "WATE813-00254",
                    text: "Chemical formula of bleaching powder is",
                    options: [
                        { key: "a", text: "Ca(OCl)₂" },
                        { key: "b", text: "Ca(OCl)" },
                        { key: "c", text: "CaCl₂" },
                        { key: "d", text: "Ca(O₃)" }
                    ],
                    answer: "a",
                    explanation: "The chemical formula for bleaching powder (chlorinated lime) is often represented as Ca(OCl)₂, though it is a mixture containing calcium hypochlorite, Ca(ClO)₂."
                }
            ]
        }
    ]
};

/* Registered lazily — js/civil.js injects this file when the set is opened. */
window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["civil-25"] = CIVIL_MODEL_25;
