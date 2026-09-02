/* ============================================================
   CIVIL MODEL SET 29 — Civil Engineering licence-style model paper
   100 questions · 120 minutes · no negative marking

     Basic Civil Engineering...................  14
     Structural Mechanics......................  10
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
const CIVIL_MODEL_29 = {
    day: 59,
    kind: "model",
    badge: { top: "Model", main: "C29" },
    title: "Civil Model Set 29",
    subtitle: "Civil Engineering · 9 subjects",
    durationMinutes: 120,
    negativeMarking: 0,
    chapters: [
        {
            id: "cm29basi",
            name: "Basic Civil Engineering",
            subject: "Basic Civil",
            accent: "blue",
            blurb: "14 questions drawn from the Basic Civil Engineering bank.",
            questions: [
                {
                    id: "cm29q001",
                    src: "BASI674-00364",
                    text: "The brick work is not measured in cu m in case of",
                    options: [
                        { key: "a", text: "One or more than one brick wall" },
                        { key: "b", text: "Half brick wall" },
                        { key: "c", text: "Reinforced brick work" },
                        { key: "d", text: "Brick work in arches" }
                    ],
                    answer: "b",
                    explanation: "As per standard practice, half-brick thick walls (typically 10 cm or 4.5 inches) are measured in square meters, while thicker walls, reinforced brickwork, and arches are measured in cubic meters."
                },
                {
                    id: "cm29q002",
                    src: "BASI674-00365",
                    text: "While estimating the quantities for the construction of a building, which of the following is the correct metric unit relationship?",
                    options: [
                        { key: "a", text: "Meter for length" },
                        { key: "b", text: "Square meter for area" },
                        { key: "c", text: "All" },
                        { key: "d", text: "Cubic meter for volume" }
                    ],
                    answer: "c",
                    explanation: "The standard metric units are: meter (m) for length, square meter (m²) for area, cubic meter (m³) for volume."
                },
                {
                    id: "cm29q003",
                    src: "BASI674-00366",
                    text: "Pick up the incorrect statement from the following:",
                    options: [
                        { key: "a", text: "Lead is the average horizontal straight distance between the borrow pit and the place of spreading soil" },
                        { key: "b", text: "The lead is calculated for each block of the excavated area" },
                        { key: "c", text: "The unit of lead is 50 m for a distance upto 500 m" },
                        { key: "d", text: "The unit of lead is 1 km where the lead exceeds 2 km" }
                    ],
                    answer: "d",
                    explanation: "The standard unit of lead is 50 m for a distance up to 500 m, and 1 km for a lead exceeding 500 m (not 2 km). This statement is incorrect."
                },
                {
                    id: "cm29q004",
                    src: "BASI674-00367",
                    text: "The assumption on which the trapezoidal formula for volumes is based, is:",
                    options: [
                        { key: "a", text: "The end sections are parallel planes" },
                        { key: "b", text: "The mid-area of a pyramid is half the average area of the ends" },
                        { key: "c", text: "The volume of the Prismoidal is over-estimated and hence a Prismoidal correction is applied" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "a",
                    explanation: "The trapezoidal formula assumes the volume between two cross-sections is the average of their areas multiplied by the distance between them. This is valid only if the end sections are parallel planes. The other statements relate to the prismoidal formula."
                },
                {
                    id: "cm29q005",
                    src: "BASI674-00368",
                    text: "In the mid-section formula",
                    options: [
                        { key: "a", text: "The mean depth is the average of depths of two consecutive sections" },
                        { key: "b", text: "The area of mid-sections is calculated by using mean depth" },
                        { key: "c", text: "The volume of the earth work is calculated by multiplying the mid-section area by the distance between the two original sections" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "The mid-section formula is a simplified earthwork calculation method where the area of a section midway between two original sections is computed and multiplied by the distance between them to find the volume."
                },
                {
                    id: "cm29q006",
                    src: "BASI674-00369",
                    text: "Referring of given figure, pick up the correct statement from the following: (Figure described: Long wall 6.80m, Short wall 4.80m, center line lengths implied)",
                    options: [
                        { key: "a", text: "The total length of centre line of four walls is 20 m" },
                        { key: "b", text: "Length of long wall out-to-out is 6.80 m" },
                        { key: "c", text: "Length of short walls in-to-in is 3.20 m" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "Given the common centerline calculation for a building (e.g., 20m total centerline length), the out-to-out long wall length is often given directly (6.80m), and the in-to-in short wall length is derived by subtracting the wall thickness from the centerline length (e.g., 4m - 0.8m = 3.20m if thickness is 0.4m). All statements align with this logic."
                },
                {
                    id: "cm29q007",
                    src: "BASI674-00370",
                    text: "Pick up the correct statement regarding centre line method of estimating a building",
                    options: [
                        { key: "a", text: "Product of the centre line of the walls and area of cross-section of any item, gives total quantity of the item" },
                        { key: "b", text: "The centre line is worked out separately for different sections of walls of a building" },
                        { key: "c", text: "The centre line length is reduced by half the layer of main wall joining the partition wall" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "The center line method is a common technique for building estimation. All the statements accurately describe the rules and adjustments made when using this method to calculate quantities."
                },
                {
                    id: "cm29q008",
                    src: "BASI674-00371",
                    text: "The cross-sections for a highway is taken at",
                    options: [
                        { key: "a", text: "Right angle to the centre line" },
                        { key: "b", text: "30 meters apart" },
                        { key: "c", text: "50 meters apart" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "a",
                    explanation: "Highway cross-sections are always taken perpendicular (at a right angle) to the centerline of the road to accurately represent the topography and calculate earthwork volumes. The spacing (30m, 50m) can vary but the right-angle rule is constant."
                },
                {
                    id: "cm29q009",
                    src: "BASI674-00372",
                    text: "The following item of earth work is not measured separately.",
                    options: [
                        { key: "a", text: "Setting out of works" },
                        { key: "b", text: "Site clearance" },
                        { key: "c", text: "Steps in deep excavation" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "These are preliminary items and are not measured separately for payment. Their cost is included in the overall rate for earthwork."
                },
                {
                    id: "cm29q010",
                    src: "BASI674-00373",
                    text: "The excavation exceeding 1.5 m in width and 10 sq.m in plan area with a depth not exceeding 30 cm, is termed as",
                    options: [
                        { key: "a", text: "Excavation" },
                        { key: "b", text: "Surface dressing" },
                        { key: "c", text: "Surface excavation" },
                        { key: "d", text: "Cutting" }
                    ],
                    answer: "c",
                    explanation: "Surface excavation is measured in square meters for large, shallow areas, unlike deeper excavation which is measured in cubic meters."
                },
                {
                    id: "cm29q011",
                    src: "BASI674-00374",
                    text: "The measurement is made in square metre in case of",
                    options: [
                        { key: "a", text: "Cement concrete in foundation" },
                        { key: "b", text: "R.C.C. structure" },
                        { key: "c", text: "Hollow concrete block wall" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "c",
                    explanation: "Hollow concrete block walls are typically measured in square meters, as they are considered a form of masonry work. Concrete in foundations and RCC structures is usually measured in cubic meters."
                },
                {
                    id: "cm29q012",
                    src: "BASI674-00375",
                    text: "For the construction of buildings, the subheads of the estimate are",
                    options: [
                        { key: "a", text: "Earthwork, Concrete work, Brick work" },
                        { key: "b", text: "Brickwork, Stone work, Roofing" },
                        { key: "c", text: "Brickwork Flooring, Wood work, Steel work" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "A detailed estimate is organized into subheads for different types of work to facilitate calculation and organization. All listed options are common subheads."
                },
                {
                    id: "cm29q013",
                    src: "BASI674-00376",
                    text: "Cost of fittings and their fixing is specified for the following sanitary fittings",
                    options: [
                        { key: "a", text: "Water closets" },
                        { key: "b", text: "Flushing pipes" },
                        { key: "c", text: "Lavatory basins" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "The cost for sanitary fittings like water closets, flushing pipes, and lavatory basins typically includes the supply of the fitting itself and its installation."
                },
                {
                    id: "cm29q014",
                    src: "BASI674-00377",
                    text: "Pick up the correct statement from the following.",
                    options: [
                        { key: "a", text: "If the bed level is above N.S.L. the canal is called fully in baking and the berms are designed as 3 d where d is full supply depth of water (F.S.D.)" },
                        { key: "b", text: "Area of canal in cutting= BD + Sd² where B = bed width, d = depth of cutting and S is the side slope" },
                        { key: "c", text: "If F.S.L. is above N.S.L the canal is called partly in cutting and partly in filling and berms are designed as 2d where d is full supply depth" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "These are standard definitions and formulas used in canal engineering for design and measurement, covering different scenarios of canal positioning relative to the natural ground level."
                }
            ]
        },
        {
            id: "cm29stru",
            name: "Structural Mechanics",
            subject: "Structural Mech",
            accent: "cyan",
            blurb: "10 questions drawn from the Structural Mechanics bank.",
            questions: [
                {
                    id: "cm29q015",
                    src: "STRU935-00307",
                    text: "What is the factor of safety?",
                    options: [
                        { key: "a", text: "The ratio of stress to strain" },
                        { key: "b", text: "The ratio of permissible stress to the ultimate stress" },
                        { key: "c", text: "The ratio of longitudinal strain to stress" },
                        { key: "d", text: "The ratio of ultimate stress to the permissible stress" }
                    ],
                    answer: "d",
                    explanation: "Factor of Safety (FOS) is a design criterion used to provide a margin of safety against failure. It is defined as the ratio of the ultimate stress (or yield stress) of the material to the allowable (permissible) stress used in the design (FOS = σ_ultimate / σ_allowable)."
                },
                {
                    id: "cm29q016",
                    src: "STRU935-00308",
                    text: "What is Hooke’s law for the 1-D system?",
                    options: [
                        { key: "a", text: "The relation between normal stress and the corresponding strain" },
                        { key: "b", text: "The relation between shear stress and the corresponding strain" },
                        { key: "c", text: "The relation between lateral strain and the corresponding stress" },
                        { key: "d", text: "None of the mentioned" }
                    ],
                    answer: "a",
                    explanation: "In its simplest one-dimensional form (e.g., uniaxial tension/compression), Hooke's Law states that the normal stress (σ) is proportional to the corresponding normal strain (ε), and the constant of proportionality is Young's Modulus (E): σ = Eε."
                },
                {
                    id: "cm29q017",
                    src: "STRU935-00309",
                    text: "Limit of proportionality depends upon .....",
                    options: [
                        { key: "a", text: "Area of cross-section" },
                        { key: "b", text: "Type of material" },
                        { key: "c", text: "Type of loading" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "b",
                    explanation: "The limit of proportionality is the maximum stress up which stress is strictly proportional to strain (the point where the stress-strain curve first deviates from a straight line). It is a material property and depends solely on the type of material, not on the cross-section or type of loading."
                },
                {
                    id: "cm29q018",
                    src: "STRU935-00310",
                    text: "The stress at which extension of a material takes place more quickly as compared to the increase in load is called .....",
                    options: [
                        { key: "a", text: "Elastic point" },
                        { key: "b", text: "Plastic point" },
                        { key: "c", text: "Yielding point" },
                        { key: "d", text: "Breaking point" }
                    ],
                    answer: "c",
                    explanation: "The yield point is a characteristic of some materials (especially mild steel) where a sudden increase in strain occurs without a corresponding increase in stress (or even a decrease in stress). This signifies the onset of significant plastic deformation."
                },
                {
                    id: "cm29q019",
                    src: "STRU935-00311",
                    text: "Which of these is a non-hookean material?",
                    options: [
                        { key: "a", text: "Steel" },
                        { key: "b", text: "Aluminium" },
                        { key: "c", text: "Copper" },
                        { key: "d", text: "Rubber" }
                    ],
                    answer: "d",
                    explanation: "A Hookean material is one that obeys Hooke's Law, meaning it has a linear stress-strain relationship in its elastic region. Steel, aluminium, and copper are approximately Hookean. Rubber is non-Hookean as its stress-strain curve is highly non-linear and elastic (hyperelastic)."
                },
                {
                    id: "cm29q020",
                    src: "STRU935-00312",
                    text: "Where in the stress-strain curve, the hooke’s law is valid?",
                    options: [
                        { key: "a", text: "Elastic range" },
                        { key: "b", text: "Strain hardening region" },
                        { key: "c", text: "Necking region" },
                        { key: "d", text: "Valid everywhere" }
                    ],
                    answer: "a",
                    explanation: "Hooke's Law is only valid in the initial, linear-elastic portion of the stress-strain curve. This region extends from the origin up to the proportional limit, which is very near the elastic limit for most metals. The strain hardening and necking regions are part of plastic deformation."
                },
                {
                    id: "cm29q021",
                    src: "STRU935-00313",
                    text: "Highest value of stress for which Hooke’s law is applicable for a given material is called .....",
                    options: [
                        { key: "a", text: "Stress limit" },
                        { key: "b", text: "Proportional limit" },
                        { key: "c", text: "Strain limit" },
                        { key: "d", text: "Significant limit" }
                    ],
                    answer: "b",
                    explanation: "The proportional limit is defined as the highest stress point on the stress-strain curve at which stress is still directly proportional to strain. It is the precise stress value up which Hooke's Law is strictly applicable."
                },
                {
                    id: "cm29q022",
                    src: "STRU935-00314",
                    text: "The slope of the stress-strain curve in the elastic deformation region is .....",
                    options: [
                        { key: "a", text: "Plastic modulus" },
                        { key: "b", text: "Poisson’s ratio" },
                        { key: "c", text: "Elastic modulus" },
                        { key: "d", text: "None" }
                    ],
                    answer: "c",
                    explanation: "In the initial linear-elastic region, the slope of the stress-strain curve (Δσ/Δε) is constant and is defined as the Elastic Modulus or Young's Modulus (E). It is a measure of the material's stiffness."
                },
                {
                    id: "cm29q023",
                    src: "STRU935-00315",
                    text: "Which point on the stress strain curve occurs after the proportionality limit?",
                    options: [
                        { key: "a", text: "Upper yield point" },
                        { key: "b", text: "Lower yield point" },
                        { key: "c", text: "Ultimate point" },
                        { key: "d", text: "Elastic limit" }
                    ],
                    answer: "d",
                    explanation: "The elastic limit is the maximum stress that a material can withstand without any permanent deformation upon unloading. For most metals, it occurs at a stress value slightly higher than the proportional limit but before any significant yield point."
                },
                {
                    id: "cm29q024",
                    src: "STRU935-00316",
                    text: "Which point on the stress strain curve occurs after the lower yield point?",
                    options: [
                        { key: "a", text: "Yield plateau" },
                        { key: "b", text: "Upper yield point" },
                        { key: "c", text: "Ultimate point" },
                        { key: "d", text: "None" }
                    ],
                    answer: "a",
                    explanation: "For materials like mild steel that exhibit a yield point phenomenon, the sequence is: upper yield point -&gt; lower yield point -&gt; yield plateau (a region of constant stress and increasing strain). Therefore, the yield plateau occurs after the lower yield point."
                }
            ]
        },
        {
            id: "cm29desi",
            name: "Design of Structures",
            subject: "Design of Str",
            accent: "slate",
            blurb: "9 questions drawn from the Design of Structures bank.",
            questions: [
                {
                    id: "cm29q025",
                    src: "DESI787-00266",
                    text: "Segregation in concrete results in",
                    options: [
                        { key: "a", text: "honey combing" },
                        { key: "b", text: "porous layers" },
                        { key: "c", text: "surface scaling" },
                        { key: "d", text: "all of these" }
                    ],
                    answer: "d",
                    explanation: "Segregation causes an inhomogeneous concrete structure. This leads to various defects: honeycombing (voids due to lack of mortar), porous layers (areas with high water content), and surface scaling (separation of the surface layer)."
                },
                {
                    id: "cm29q026",
                    src: "DESI787-00267",
                    text: "Harshness in concrete is due to excess of",
                    options: [
                        { key: "a", text: "water" },
                        { key: "b", text: "finer particles" },
                        { key: "c", text: "middle sized particle" },
                        { key: "d", text: "coarser particles" }
                    ],
                    answer: "c",
                    explanation: "While an excess of water causes bleeding, and an excess of coarse aggregate typically leads to segregation, it is the excess of middle-sized fractions that specifically creates a harsh, unworkable texture."
                },
                {
                    id: "cm29q027",
                    src: "DESI787-00268",
                    text: "Reinforced cement concrete is equally strong in taking",
                    options: [
                        { key: "a", text: "compressive and shear stresses" },
                        { key: "b", text: "tensile, compressive and shear stresses" },
                        { key: "c", text: "tensile and shear stresses" },
                        { key: "d", text: "tensile and compressive stresses" }
                    ],
                    answer: "d",
                    explanation: "Reinforced Cement Concrete (RCC) combines concrete (strong in compression) and steel (strong in tension) to create a composite material that is effective in resisting both compressive and tensile stresses. It is not 'equally strong' in all stresses but is designed to handle both."
                },
                {
                    id: "cm29q028",
                    src: "DESI787-00269",
                    text: "Plain cement concrete is strong in taking",
                    options: [
                        { key: "a", text: "tensile stress" },
                        { key: "b", text: "compressive stress" },
                        { key: "c", text: "shear stress" },
                        { key: "d", text: "all of these" }
                    ],
                    answer: "b",
                    explanation: "Plain cement concrete (without reinforcement) has high compressive strength but very low tensile strength (about 10% of its compressive strength). Its shear strength is also derived primarily from its compressive strength."
                },
                {
                    id: "cm29q029",
                    src: "DESI787-00270",
                    text: "The cement concrete in which high compressive stresses are artificially induced before its actual use, is called",
                    options: [
                        { key: "a", text: "plain cement concrete" },
                        { key: "b", text: "prestressed cement concrete" },
                        { key: "c", text: "reinforced cement concrete" },
                        { key: "d", text: "lime concrete" }
                    ],
                    answer: "b",
                    explanation: "Prestressed concrete is a technique where high compressive stresses are introduced into the concrete member before it is subjected to service loads. This pre-compression counteracts the tensile stresses that will be developed under loading, effectively improving the member's performance."
                },
                {
                    id: "cm29q030",
                    src: "DESI787-00271",
                    text: "The removal of excess air after placing concrete helps in increasing the strength of concrete by",
                    options: [
                        { key: "a", text: "30 to 50%" },
                        { key: "b", text: "20 to 30%" },
                        { key: "c", text: "15 to 20%" },
                        { key: "d", text: "50 to 70%" }
                    ],
                    answer: "c",
                    explanation: "Compaction, the process of removing entrapped air from freshly placed concrete, is crucial for achieving density and strength. Proper compaction can increase the strength of concrete by about 15 to 20% compared to poorly compacted concrete."
                },
                {
                    id: "cm29q031",
                    src: "DESI787-00272",
                    text: "In order to obtain best workability of concrete the perfect shape of aggregate is",
                    options: [
                        { key: "a", text: "rounded" },
                        { key: "b", text: "elongated" },
                        { key: "c", text: "angular" },
                        { key: "d", text: "All of these" }
                    ],
                    answer: "a",
                    explanation: "Rounded aggregates have a lower surface area and less inter-particle friction compared to angular or elongated aggregates. This reduces the water requirement for a given workability or increases the workability for a given water content, making them ideal for workability."
                },
                {
                    id: "cm29q032",
                    src: "DESI787-00273",
                    text: "Shrinkage in concrete increases with",
                    options: [
                        { key: "a", text: "increase in water cement ratio." },
                        { key: "b", text: "increase in cement content." },
                        { key: "c", text: "decrease in humidity." },
                        { key: "d", text: "all of these" }
                    ],
                    answer: "d",
                    explanation: "All these factors increase shrinkage: A higher water-cement ratio leads to more evaporable water. More cement content means more paste that can shrink. A decrease in humidity increases the rate of evaporation, promoting drying shrinkage."
                },
                {
                    id: "cm29q033",
                    src: "DESI787-00274",
                    text: "The lower water cement ratio in concrete causes",
                    options: [
                        { key: "a", text: "smaller creep and shrinkage." },
                        { key: "b", text: "improved frost resistance." },
                        { key: "c", text: "greater density and permeability." },
                        { key: "d", text: "all of these" }
                    ],
                    answer: "a",
                    explanation: "A lower water-cement ratio results in a denser, stronger, and less porous concrete matrix. This leads to reduced creep and shrinkage. It also improves frost resistance (by reducing permeability) and increases density, but it decreases permeability (makes it less permeable), not increases it. the option \"greater density and permeability.\" is incorrect. The most direct and universally true effect is reduced creep and shrinkage."
                }
            ]
        },
        {
            id: "cm29soil",
            name: "Soil Mechanics and Foundation",
            subject: "Soil Mechanics",
            accent: "amber",
            blurb: "13 questions drawn from the Soil Mechanics and Foundation bank.",
            questions: [
                {
                    id: "cm29q034",
                    src: "SOIL136-00372",
                    text: "The Terzaghi’s general bearing capacity equation is represented as ______",
                    options: [
                        { key: "a", text: "q_f = 2cN_c" },
                        { key: "b", text: "q_f = cN_c + qN_q" },
                        { key: "c", text: "q_f = cN_c + qN_q + ½ γB N_γ" },
                        { key: "d", text: "q_f = cN_c" }
                    ],
                    answer: "c",
                    explanation: "Terzaghi's ultimate bearing capacity equation for a strip footing is: q_u = cN_c + qN_q + ½γB N_γ, where c is cohesion, q is surcharge (γD_f), γ is soil unit weight, B is footing width, and N_c, N_q, N_γ are bearing capacity factors."
                },
                {
                    id: "cm29q035",
                    src: "SOIL136-00373",
                    text: "Local shear failure generally occurs in ______",
                    options: [
                        { key: "a", text: "Dense sand" },
                        { key: "b", text: "Non-cohesive soil" },
                        { key: "c", text: "All of the mentioned" },
                        { key: "d", text: "Loose sand" }
                    ],
                    answer: "d",
                    explanation: "Local shear failure is commonly associated with soils of intermediate density/compressibility, such as medium or relatively loose sands, and medium-stiff clays."
                },
                {
                    id: "cm29q036",
                    src: "SOIL136-00374",
                    text: "The curve for N_γ and φ for the transition state from φ = 28° and φ = 38° was given by...",
                    options: [
                        { key: "a", text: "Peck" },
                        { key: "b", text: "Hanson" },
                        { key: "c", text: "Thornburn" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "a",
                    explanation: "R.B. Peck provided curves and values for the bearing capacity factor N_γ, including for the transition range of friction angles, which were widely used before more precise formulas became standard."
                },
                {
                    id: "cm29q037",
                    src: "SOIL136-00375",
                    text: "erzaghi’s bearing capacity equation is not applicable for ______",
                    options: [
                        { key: "a", text: "Narrow slope" },
                        { key: "b", text: "Depth effect and inclination factor" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "b",
                    explanation: "Terzaghi's original equation does not explicitly include factors to account for the depth of the foundation (beyond D_f in the surcharge term) or for inclined loads. Later modifications by other authors (e.g., Meyerhof, Hansen, Vesic) introduced depth, shape, and inclination factors."
                },
                {
                    id: "cm29q038",
                    src: "SOIL136-00376",
                    text: "The plate load test is essentially a ______",
                    options: [
                        { key: "a", text: "Laboratory test" },
                        { key: "b", text: "Graphical method analysis" },
                        { key: "c", text: "Field test" },
                        { key: "d", text: "None of the mentioned" }
                    ],
                    answer: "c",
                    explanation: "A plate load test is an in-situ field test conducted at the proposed foundation level to determine the bearing capacity and settlement characteristics of the soil directly on site."
                },
                {
                    id: "cm29q039",
                    src: "SOIL136-00377",
                    text: "The plate load test consists in loading a rigid plate at the ______",
                    options: [
                        { key: "a", text: "Base of the footing" },
                        { key: "b", text: "Bottom of the construction" },
                        { key: "c", text: "All of the mentioned" },
                        { key: "d", text: "Foundation level" }
                    ],
                    answer: "d",
                    explanation: "The test is performed by loading a rigid plate placed at the same depth where the foundation of the actual structure is planned to be built, i.e., at the foundation level."
                },
                {
                    id: "cm29q040",
                    src: "SOIL136-00378",
                    text: "The bearing plate used in plate load test is in the shape of ______",
                    options: [
                        { key: "a", text: "Square" },
                        { key: "b", text: "Rectangular and Circular" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "Both (a) and (b)" }
                    ],
                    answer: "d",
                    explanation: "Bearing plates used in plate load tests are typically square or circular in shape. The choice depends on the type of foundation being modeled and standard practices."
                },
                {
                    id: "cm29q041",
                    src: "SOIL136-00379",
                    text: "The size of bearing plate, which used in plate load test varies from ______",
                    options: [
                        { key: "a", text: "25 to 100 mm" },
                        { key: "b", text: "300 to 750 mm" },
                        { key: "c", text: "100 to 300 mm" },
                        { key: "d", text: "25 to 300 mm" }
                    ],
                    answer: "b",
                    explanation: "Standard sizes for plate load test plates are usually between 300 mm and 750 mm. Smaller plates (e.g., 100-300 mm) are not standard for this test, though smaller sizes might be used for very specific purposes."
                },
                {
                    id: "cm29q042",
                    src: "SOIL136-00380",
                    text: "The loading to the test plate is applied with ______",
                    options: [
                        { key: "a", text: "Fluid tube" },
                        { key: "b", text: "Sand bags" },
                        { key: "c", text: "Hydraulic jack" },
                        { key: "d", text: "Cross-joists" }
                    ],
                    answer: "c",
                    explanation: "A hydraulic jack is the most common and efficient method to apply a controlled and measurable load to the test plate in a plate load test. Reaction for the jack is provided by a dead weight platform or a reaction truss."
                },
                {
                    id: "cm29q043",
                    src: "SOIL136-00381",
                    text: "For clayey and silty soils, which of the following bearing plate can be used?",
                    options: [
                        { key: "a", text: "Square plate and Concrete block" },
                        { key: "b", text: "Circular plate" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "Both (a) and (b)" }
                    ],
                    answer: "d",
                    explanation: "For cohesive soils like clays and silts, both square and circular plates are suitable and can be used effectively in plate load tests. The choice is not strictly limited by soil type in this case."
                },
                {
                    id: "cm29q044",
                    src: "SOIL136-00382",
                    text: "The settlement of the plate in a load test measured with the help of ______",
                    options: [
                        { key: "a", text: "Sensitive dial gauges" },
                        { key: "b", text: "Test plate" },
                        { key: "c", text: "Measuring unit" },
                        { key: "d", text: "Datum bar" }
                    ],
                    answer: "a",
                    explanation: "Sensitive dial gauges (or displacement transducers) are precision instruments mounted on a independent datum frame to accurately measure the vertical settlement of the test plate under each load increment."
                },
                {
                    id: "cm29q045",
                    src: "SOIL136-00383",
                    text: "According to Indian standard method, the loading of the plate should be borne with either by ______",
                    options: [
                        { key: "a", text: "Concrete blocks" },
                        { key: "b", text: "Gravity loading platform and Reaction truss" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "b",
                    explanation: "IS standards specify two primary methods for applying reaction for the load jack: 1) A Gravity Loading Platform (kentledge) using dead weights, or 2) A Reaction Truss (reaction beam) anchored to the ground."
                },
                {
                    id: "cm29q046",
                    src: "SOIL136-00384",
                    text: "A seating pressure of ______ is applied on the plate before starting the load test.",
                    options: [
                        { key: "a", text: "30 g/cm²" },
                        { key: "b", text: "50 g/cm²" },
                        { key: "c", text: "70 g/cm²" },
                        { key: "d", text: "100 g/cm²" }
                    ],
                    answer: "c",
                    explanation: "A small seating pressure (approximately 70 g/cm² or 7 kN/m²) is applied initially to ensure proper contact between the plate and the soil bed and to take up any irregularities before official readings begin."
                }
            ]
        },
        {
            id: "cm29watr",
            name: "Basic Water Resources Engineering",
            subject: "Water Resources",
            accent: "emerald",
            blurb: "11 questions drawn from the Basic Water Resources Engineering bank.",
            questions: [
                {
                    id: "cm29q047",
                    src: "WATE701-00326",
                    text: "What type of flow can be taken for granted in a pipe of a uniform cross-section?",
                    options: [
                        { key: "a", text: "steady" },
                        { key: "b", text: "unsteady" },
                        { key: "c", text: "non-uniform" },
                        { key: "d", text: "uniform" }
                    ],
                    answer: "d",
                    explanation: "In a pipe of uniform cross-section, the flow is often assumed to be uniform (velocity constant along the pipe) if the pipe is straight and long."
                },
                {
                    id: "cm29q048",
                    src: "WATE701-00327",
                    text: "Can the flow inside a nozzle be steady and uniform?",
                    options: [
                        { key: "a", text: "it can be steady but never uniform" },
                        { key: "b", text: "yes" },
                        { key: "c", text: "never" },
                        { key: "d", text: "it can be uniform but never steady" }
                    ],
                    answer: "a",
                    explanation: "Inside a nozzle, the cross-section changes, so the velocity changes along the length, making the flow non-uniform. However, it can be steady if it does not change with time."
                },
                {
                    id: "cm29q049",
                    src: "WATE701-00328",
                    text: "Which of the following statements is true regarding one and two-dimensional flows?",
                    options: [
                        { key: "a", text: "Flow in a pipe is always taken as one-dimensional flow" },
                        { key: "b", text: "Flow in a pipe is taken as one-dimensional flow when average flow parameters are considered" },
                        { key: "c", text: "Flow in a pipe is always taken as two-dimensional flow" },
                        { key: "d", text: "Flow in a pipe is taken as two-dimensional flow when average flow parameters are considered" }
                    ],
                    answer: "b",
                    explanation: "In many engineering applications, flow in a pipe is approximated as one-dimensional by considering average velocity over the cross-section."
                },
                {
                    id: "cm29q050",
                    src: "WATE701-00329",
                    text: "Which of the following is true?",
                    options: [
                        { key: "a", text: "Flow is irrotational inside the boundary layer and rotational outside" },
                        { key: "b", text: "Flow is rotational both inside and outside of the boundary layer" },
                        { key: "c", text: "Flow is rotational inside the boundary layer and irrotational outside" },
                        { key: "d", text: "Flow is irrotational both inside and outside of the boundary layer" }
                    ],
                    answer: "c",
                    explanation: "Inside the boundary layer, viscous effects are significant, leading to rotational flow. Outside, the flow is often irrotational."
                },
                {
                    id: "cm29q051",
                    src: "WATE701-00330",
                    text: "The velocity of entrance and exit through a nozzle remains the same. Is this ever possible?",
                    options: [
                        { key: "a", text: "only if the flow is compressible" },
                        { key: "b", text: "only if the flow is laminar" },
                        { key: "c", text: "only if the flow is rotational" },
                        { key: "d", text: "never possible" }
                    ],
                    answer: "d",
                    explanation: "In a nozzle, the cross-section changes, so by continuity, the velocity must change if the density is constant. For incompressible flow, it is never possible. For compressible flow, it might be possible if the density changes accordingly, but the option 'never possible' is for incompressible assumption. The question does not specify, so 'never possible' is likely the answer."
                },
                {
                    id: "cm29q052",
                    src: "WATE701-00331",
                    text: "Three flows named as 1, 2 and 3 are observed. The Reynold’s number for the three are 100, 1000 and 10000. Which of the flows will be laminar?",
                    options: [
                        { key: "a", text: "only 1 and 2" },
                        { key: "b", text: "only 1" },
                        { key: "c", text: "1, 2 and 3" },
                        { key: "d", text: "only 3" }
                    ],
                    answer: "a",
                    explanation: "For pipe flow, Re &lt; 2300 is laminar. So Re=100 and 1000 are laminar, Re=10000 is turbulent."
                },
                {
                    id: "cm29q053",
                    src: "WATE701-00332",
                    text: "Three flows named as 1, 2 and 3 are observed. The flow velocities are v1 and v2. If all other geometrical factors remain the same along with the fluid considered, flow is more likely to be laminar?",
                    options: [
                        { key: "a", text: "flow 1 if v1 &gt; v2" },
                        { key: "b", text: "flow 2 if v1 &gt; v2" },
                        { key: "c", text: "always flow 1" },
                        { key: "d", text: "always flow 2" }
                    ],
                    answer: "b",
                    explanation: "Reynolds number is directly proportional to velocity (Re ∝ V). Lower velocity results in lower Reynolds number, which means flow is more likely to be laminar. If v1 &gt; v2, then flow 2 has lower velocity, so flow 2 is more likely laminar."
                },
                {
                    id: "cm29q054",
                    src: "WATE701-00333",
                    text: "A direct runoff hydrograph due to a storm was found to be triangular in shape with a peak of 150 m³/s, time from start of effective storm to peak of 24 h and a total time base of 72 h. The duration of storm in such case was",
                    options: [
                        { key: "a", text: "been 24 to 72 h" },
                        { key: "b", text: "72 h" },
                        { key: "c", text: "&lt; 24 h" },
                        { key: "d", text: "&gt; 72 h" }
                    ],
                    answer: "c",
                    explanation: "The duration of effective rainfall (D) is always less than the time of rise (T_p) of the hydrograph. Here, the time to peak is 24 hours, so the storm duration must be less than 24 hours."
                },
                {
                    id: "cm29q055",
                    src: "WATE701-00334",
                    text: "The D-hour unit hydrograph of a catchment may be obtained by dividing the ordinates of a single peak direct runoff hydrograph due to a storm of D hour duration by the",
                    options: [
                        { key: "a", text: "total runoff volume" },
                        { key: "b", text: "duration of direct runoff hydrograph" },
                        { key: "c", text: "total rainfall" },
                        { key: "d", text: "direct runoff volume" }
                    ],
                    answer: "d",
                    explanation: "A unit hydrograph is defined as the direct runoff hydrograph resulting from one unit (e.g., 1 cm) of effective rainfall occurring uniformly over the catchment at a uniform rate for a specified duration (D). Therefore, the ordinates of the observed DRH are divided by the volume of direct runoff (in cm) to obtain the D-hour unit hydrograph."
                },
                {
                    id: "cm29q056",
                    src: "WATE701-00335",
                    text: "A storm hydrograph was due to 3 h of effective rainfall. It contained 6 cm of direct runoff; the ordinate of direct runoff hydrograph of this storm is",
                    options: [
                        { key: "a", text: "when divided by 6 give the ordinate of a 3-h unit hydrograph" },
                        { key: "b", text: "when divided by 3 give the ordinate of a 6-h unit hydrograph" },
                        { key: "c", text: "when divided by 3 give the ordinate of a 3-h unit hydrograph" },
                        { key: "d", text: "when divided by 6 give the ordinate of a 6-h unit hydrograph" }
                    ],
                    answer: "a",
                    explanation: "The storm produced 6 cm of direct runoff from a 3-hour effective rainfall event. To get a unit hydrograph for that same duration (3 hours) which represents 1 cm of runoff, the ordinates of the observed DRH must be divided by the total direct runoff volume (6 cm)."
                },
                {
                    id: "cm29q057",
                    src: "WATE701-00336",
                    text: "A triangular direct runoff hydrograph due to a storm has a time base of 80 hours and peak flow of 50 m³/s occurring at 20 hours from the start. If the catchment area is 144 km², the rainfall excess in the storm was",
                    options: [
                        { key: "a", text: "20 cm" },
                        { key: "b", text: "7.2 cm" },
                        { key: "c", text: "5 cm" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "c",
                    explanation: "The volume of direct runoff is calculated as the area under the triangular hydrograph: (1/2) * base * height = (1/2) * (80 hrs * 3600 s/hr) * (50 m³/s). This volume in m³ is divided by the catchment area (144 km² * 10^6 m²/km²) to get the depth of effective rainfall (rainfall excess) in meters, which is then converted to cm. The calculation yields 5 cm."
                }
            ]
        },
        {
            id: "cm29hydr",
            name: "Hydropower",
            subject: "Hydropower",
            accent: "cyan",
            blurb: "10 questions drawn from the Hydropower bank.",
            questions: [
                {
                    id: "cm29q058",
                    src: "HYDR626-00261",
                    text: "In which range the gradual expansion of inlet gives smooth transition in settling basin",
                    options: [
                        { key: "a", text: "10° to 15°" },
                        { key: "b", text: "10° to 12°" },
                        { key: "c", text: "7° to 10°" },
                        { key: "d", text: "5° to 7°" }
                    ],
                    answer: "c",
                    explanation: "To ensure a smooth flow transition and prevent turbulence or eddies in a settling basin (desilting basin), the gradual horizontal expansion of the inlet should be kept in the angular range of 7° to 10° (up to a slope of 1:5), with (12°) being the widely accepted maximum upper limit if no divide walls are used."
                },
                {
                    id: "cm29q059",
                    src: "HYDR626-00262",
                    text: "In which zone of settling basin the suspended particles starts to settle down",
                    options: [
                        { key: "a", text: "Inlet Zone" },
                        { key: "b", text: "Outlet zone" },
                        { key: "c", text: "Transition zone" },
                        { key: "d", text: "Settling Zone" }
                    ],
                    answer: "d",
                    explanation: "The settling zone is the largest, quietest part of the basin where flow velocity is significantly reduced, allowing suspended particles to settle to the bottom due to gravity."
                },
                {
                    id: "cm29q060",
                    src: "HYDR626-00263",
                    text: "Which zone is larger in length in settling basin?",
                    options: [
                        { key: "a", text: "Settling Zone" },
                        { key: "b", text: "Inlet Zone" },
                        { key: "c", text: "Outlet Zone" },
                        { key: "d", text: "Transition Zone" }
                    ],
                    answer: "a",
                    explanation: "The settling zone requires the largest length to provide sufficient residence time for the designed particle size to settle to the bottom of the basin."
                },
                {
                    id: "cm29q061",
                    src: "HYDR626-00264",
                    text: "If G is the discharge in m³/sec, T is sediment emptying frequency in seconds and C is sediment concentration kg/m³ then sediment load can be computed from",
                    options: [
                        { key: "a", text: "S = G / (T x C)" },
                        { key: "b", text: "S = G x T x C" },
                        { key: "c", text: "S = T / (G x C)" },
                        { key: "d", text: "S = C / (G x T)" }
                    ],
                    answer: "b",
                    explanation: "The total sediment load (S) accumulated over a time period (T) is the product of the water discharge (G), the sediment concentration (C), and the time (T)."
                },
                {
                    id: "cm29q062",
                    src: "HYDR626-00265",
                    text: "The methods which are adopted in sediment handling are",
                    options: [
                        { key: "a", text: "Removing sediment inflow through watershed management and erosion control" },
                        { key: "b", text: "Removal of deposit from reservoir" },
                        { key: "c", text: "Construction of settling basin" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "Comprehensive sediment management involves a combination of approaches: preventing sediment from entering the system (watershed management), trapping it (settling basins), and removing accumulated deposits (reservoir flushing or dredging)."
                },
                {
                    id: "cm29q063",
                    src: "HYDR626-00266",
                    text: "What is the volume of silt accumulated in a period of 10 days if the sediment concentration of the flow is 5kg/m³ for a discharge of 25 cumecs and silt density of 2400kg/m³ and a packing factor of 1.2",
                    options: [
                        { key: "a", text: "45000 m³" },
                        { key: "b", text: "21000 m³" },
                        { key: "c", text: "25000 m³" },
                        { key: "d", text: "37500 m³" }
                    ],
                    answer: "d",
                    explanation: "1. Calculate total sediment mass: Mass = Discharge × Concentration × Time = 25 m³/s × 5 kg/m³ × (10 × 24 × 3600 s) = 108,000,000 kg. 2. Bulk Density = Particle Density × Packing Factor = 2400 kg/m³ × 1.2 = 2880 kg/m³. 3. Volume = Mass / Bulk Density = 108,000,000 kg / 2880 kg/m³ = 37,500 m³."
                },
                {
                    id: "cm29q064",
                    src: "HYDR626-00267",
                    text: "The volume of a reservoir is estimated for 9 billion cubic meter and mean annual flow of the river is 150 cubic meter per second along with its sediment transportation capacity of 2.6 kg/m³. The volume weight of the suspended sediment is 1.6 tones/m³. Determine the service life of the reservoir, if the mean annual volume of sediment due to erosion of its banks and the same of the sediment passing in the downstream are 25 % and 23 % of the gross storage",
                    options: [
                        { key: "a", text: "11.7 yrs" },
                        { key: "b", text: "50 yrs" },
                        { key: "c", text: "48 yrs" },
                        { key: "d", text: "45 yrs" }
                    ],
                    answer: "a",
                    explanation: "The service life is calculated by dividing the reservoir's gross storage capacity by the mean annual sediment inflow volume (adjusted for its in-situ density and any sediment that passes through). The calculation involves multiple steps to find the effective annual volume of sediment deposited."
                },
                {
                    id: "cm29q065",
                    src: "HYDR626-00268",
                    text: "A wide unlined channel carrying silt-free water has a depth of 2.0 m. The maximum slope that can be given to a channel is 1 in 10,000. Calculate the maximum tractive stress permissible on the bed to prevent scouring:",
                    options: [
                        { key: "a", text: "0.2 kg/m²" },
                        { key: "b", text: "1.962 kg/m²" },
                        { key: "c", text: "2 kg/m²" },
                        { key: "d", text: "1 kg/cm²" }
                    ],
                    answer: "b",
                    explanation: "Tractive stress (τ) is calculated using the formula τ = γ w R S, where γ w is the unit weight of water (9810 N/m³), R is the hydraulic radius (≈ depth = 2m for a wide channel), and S is the slope (1/10000 = 0.0001). Thus, τ = 9810 N/m³ × 2 m × 0.0001 = 1.962 N/m². This is the permissible stress in SI units."
                },
                {
                    id: "cm29q066",
                    src: "HYDR626-00269",
                    text: "Which of the following is component of ROR plant",
                    options: [
                        { key: "a", text: "Diversion weir" },
                        { key: "b", text: "Gravel trap" },
                        { key: "c", text: "Powerhouse" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "A Run-of-River (ROR) plant typically includes a diversion structure (weir or dam), sediment control features (gravel trap, settling basin), water conveyance system, and a powerhouse containing the turbines and generators."
                },
                {
                    id: "cm29q067",
                    src: "HYDR626-00270",
                    text: "Which of the following is the component of ROR head work",
                    options: [
                        { key: "a", text: "Weir" },
                        { key: "b", text: "Intake" },
                        { key: "c", text: "Under sluice" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "The headworks of a Run-of-River project include the weir or barrage, the intake structure, and under-sluices (scouring sluices) designed to manage sediment and flow."
                }
            ]
        },
        {
            id: "cm29irri",
            name: "Irrigation and Drainage",
            subject: "Irrigation",
            accent: "emerald",
            blurb: "11 questions drawn from the Irrigation and Drainage bank.",
            questions: [
                {
                    id: "cm29q068",
                    src: "IRRI951-00299",
                    text: "What is the size of the tile at an outlet? 12 hectare drainage system, if the D.C is 2 cm and the tile grade is 0.5%. Assume rugosity coefficient as 0.015 for the tile drain material:",
                    options: [
                        { key: "a", text: "20 cm" },
                        { key: "b", text: "10 cm" },
                        { key: "c", text: "15 cm" },
                        { key: "d", text: "25 cm" }
                    ],
                    answer: "a",
                    explanation: "This requires calculation using Manning's equation for flow in pipes. The given parameters (Area=12 ha, DC=2 cm/day, slope=0.005, n=0.015) would typically result in a design pointing towards a larger diameter tile, often in the 20-25 cm range for such an area and coefficient."
                },
                {
                    id: "cm29q069",
                    src: "IRRI951-00300",
                    text: "Which type of alternate layouts system tile drainage has two mains?",
                    options: [
                        { key: "a", text: "Grid Iron System" },
                        { key: "b", text: "Double main System" },
                        { key: "c", text: "Natural System" },
                        { key: "d", text: "Herring Bone System" }
                    ],
                    answer: "b",
                    explanation: "A double main system features two main collector drains that run parallel to each other, with laterals discharging into them. This layout is used for draining large or irregularly shaped areas."
                },
                {
                    id: "cm29q070",
                    src: "IRRI951-00301",
                    text: "How many cubic metres of water will removed for this particular period of a site designed to use a D.C of 1.5 cm drainage hectares for a capacity of 5 days?",
                    options: [
                        { key: "a", text: "25000 m³" },
                        { key: "b", text: "15000 m³" },
                        { key: "c", text: "7500 m³" },
                        { key: "d", text: "20000 m³" }
                    ],
                    answer: "c",
                    explanation: "Calculation: Drainage Coefficient (DC) = 1.5 cm/day = 0.015 m/day. Volume of water to remove per hectare per day = 0.015 m * 10,000 m² = 150 m³/day/ha. For 5 days and 10 hectares: 150 m³/day/ha * 5 days * 10 ha = 7,500 m³."
                },
                {
                    id: "cm29q071",
                    src: "IRRI951-00302",
                    text: "What is the name given to the drains used in depressions?",
                    options: [
                        { key: "a", text: "Shallow Surface Drains" },
                        { key: "b", text: "Open Drains" },
                        { key: "c", text: "Drains" },
                        { key: "d", text: "Deep Surface Drains" }
                    ],
                    answer: "d",
                    explanation: "Deep surface drains are specifically constructed in natural depressions or low-lying areas to collect and convey large volumes of accumulated surface water away from the land."
                },
                {
                    id: "cm29q072",
                    src: "IRRI951-00303",
                    text: "What is the cross sectional shape of shallow surface drains?",
                    options: [
                        { key: "a", text: "Trapezoidal Shape" },
                        { key: "b", text: "Triangular Shape" },
                        { key: "c", text: "Circular Shape" },
                        { key: "d", text: "Rectangular Shape" }
                    ],
                    answer: "a",
                    explanation: "Shallow surface drains are most commonly trapezoidal in cross-section. This shape provides stability to the side slopes and allows for efficient flow of water."
                },
                {
                    id: "cm29q073",
                    src: "IRRI951-00304",
                    text: "In design of surface drainage in Terai region initial water level in field is assumed as",
                    options: [
                        { key: "a", text: "40 mm" },
                        { key: "b", text: "50 mm" },
                        { key: "c", text: "60 mm" },
                        { key: "d", text: "100 mm" }
                    ],
                    answer: "b",
                    explanation: "For design purposes in the Terai region (a low-land area in Nepal and India), the initial water level standing in the field after irrigation or rain is often taken as 50 mm for calculating drainage requirements."
                },
                {
                    id: "cm29q074",
                    src: "IRRI951-00306",
                    text: "How many days of rainfall is recommended for the design of surface drainage in Terai Region?",
                    options: [
                        { key: "a", text: "5 days" },
                        { key: "b", text: "6 days" },
                        { key: "c", text: "3 days" },
                        { key: "d", text: "4 days" }
                    ],
                    answer: "c",
                    explanation: "The design rainfall is typically a critical duration of rainfall. For the Terai region, a 3-day rainfall event is commonly used as the design basis for surface drainage systems."
                },
                {
                    id: "cm29q075",
                    src: "IRRI951-00307",
                    text: "How many duration of rainfall is recommended for the design of surface drainage in Hilly Region?",
                    options: [
                        { key: "a", text: "24 hrs" },
                        { key: "b", text: "12 hrs" },
                        { key: "c", text: "72 hrs" },
                        { key: "d", text: "48 hrs" }
                    ],
                    answer: "d",
                    explanation: "In hilly regions with steeper slopes, the critical rainfall duration for designing surface drainage is shorter than in flat areas. A 48-hour duration is often used to account for intense runoff."
                },
                {
                    id: "cm29q076",
                    src: "IRRI951-00308",
                    text: "What structure is constructed to carry back into the underground?",
                    options: [
                        { key: "a", text: "Surface Inlet" },
                        { key: "b", text: "Land Grading" },
                        { key: "c", text: "Random Field Drains" },
                        { key: "d", text: "Open Drains" }
                    ],
                    answer: "a",
                    explanation: "A surface inlet is a structure that allows surface water to enter and be carried away into a subsurface drainage system, such as a tile drain or a well."
                },
                {
                    id: "cm29q077",
                    src: "IRRI951-00309",
                    text: "In surface inlet what is provided to deal with trash?",
                    options: [
                        { key: "a", text: "Cumette" },
                        { key: "b", text: "Beehive Grate" },
                        { key: "c", text: "Surface Inlet" },
                        { key: "d", text: "Blind Inlet" }
                    ],
                    answer: "b",
                    explanation: "A beehive grate is a dome-shaped cover placed over a surface inlet. Its design helps prevent floating debris and trash from entering and clogging the subsurface drainage pipe."
                },
                {
                    id: "cm29q078",
                    src: "IRRI951-00310",
                    text: "Which type of drains is used for small quantity of waters removal?",
                    options: [
                        { key: "a", text: "Shallow Surface Drains" },
                        { key: "b", text: "Deep Surface Drains" },
                        { key: "c", text: "Blind Inlet" },
                        { key: "d", text: "Open Drains" }
                    ],
                    answer: "c",
                    explanation: "A blind inlet is a small, covered pit filled with gravel or stone. It is used to remove small quantities of surface water by allowing it to seep into the subsurface without being clogged by silt."
                }
            ]
        },
        {
            id: "cm29tran",
            name: "Transportation",
            subject: "Transportation",
            accent: "rose",
            blurb: "11 questions drawn from the Transportation bank.",
            questions: [
                {
                    id: "cm29q079",
                    src: "TRAN808-00307",
                    text: "Which of the below doesn’t represent the purpose of providing a base course in the rigid pavement?",
                    options: [
                        { key: "a", text: "Prevent pumping" },
                        { key: "b", text: "Resist frost" },
                        { key: "c", text: "Reduce slab settlement" },
                        { key: "d", text: "Carry load" }
                    ],
                    answer: "d",
                    explanation: "In rigid pavements, the primary load-bearing element is the concrete slab itself. The base course's main purposes are to provide a stable construction platform, prevent pumping, resist frost action, and reduce slab settlement, not to primarily carry the load."
                },
                {
                    id: "cm29q080",
                    src: "TRAN808-00308",
                    text: "The direct impact of vertical stress on the road pavement may cause",
                    options: [
                        { key: "a", text: "Rutting" },
                        { key: "b", text: "Fatigue" },
                        { key: "c", text: "Shear" },
                        { key: "d", text: "Deflection" }
                    ],
                    answer: "a",
                    explanation: "Rutting is a surface depression in the wheel path caused by the permanent deformation (consolidation) of any layer under repeated vertical compressive stress."
                },
                {
                    id: "cm29q081",
                    src: "TRAN808-00309",
                    text: "Stresses are the response of ______ of the pavement.",
                    options: [
                        { key: "a", text: "Deflection" },
                        { key: "b", text: "Loading" },
                        { key: "c", text: "Weathering" },
                        { key: "d", text: "Bending" }
                    ],
                    answer: "b",
                    explanation: "Stresses (internal forces per unit area) are induced within the pavement structure as a direct response to the external application of traffic loads."
                },
                {
                    id: "cm29q082",
                    src: "TRAN808-00310",
                    text: "According to Boussinesq’s theory, the soil mass is not considered to be ______.",
                    options: [
                        { key: "a", text: "Elastic" },
                        { key: "b", text: "Homogeneous" },
                        { key: "c", text: "Infinite" },
                        { key: "d", text: "Isotropic" }
                    ],
                    answer: "c",
                    explanation: "Boussinesq's theory for stress distribution assumes the soil mass is elastic, homogeneous, isotropic, and semi-infinite (not infinite, but extending infinitely in all directions below a level surface)."
                },
                {
                    id: "cm29q083",
                    src: "TRAN808-00311",
                    text: "Which layer has the highest elasticity?",
                    options: [
                        { key: "a", text: "Subgrade" },
                        { key: "b", text: "Base" },
                        { key: "c", text: "Sub-base" },
                        { key: "d", text: "Surface" }
                    ],
                    answer: "d",
                    explanation: "The surface course, typically made of asphalt or concrete, has the highest modulus of elasticity (stiffness) compared to the base, sub-base, and subgrade layers."
                },
                {
                    id: "cm29q084",
                    src: "TRAN808-00312",
                    text: "Compute the vertical stress under the center of the load at a depth of 40 cm from the surface. A circular load of radius 16 cm with a uniform contact pressure of 7 kg/cm² is applied on the pavement surface.",
                    options: [
                        { key: "a", text: "1.4 kg/cm²" },
                        { key: "b", text: "1.3 kg/cm²" },
                        { key: "c", text: "1.3 kg/mm²" },
                        { key: "d", text: "1.4 kg/mm²" }
                    ],
                    answer: "a",
                    explanation: "Using Boussinesq's formula for a circular loaded area: σ_z = p * [1 - 1 / (1 + (a/z)^2)^(3/2)]. Here, p=7 kg/cm², a=16 cm, z=40 cm. (a/z)=16/40=0.4. σ_z = 7 * [1 - 1 / (1 + 0.4^2)^(3/2)] = 7 * [1 - 1 / (1.16)^(3/2)] ≈ 7 * [1 - 1 / 1.25] = 7 * [1 - 0.8] = 7 * 0.2 = 1.4 kg/cm²."
                },
                {
                    id: "cm29q085",
                    src: "TRAN808-00313",
                    text: "What would be the vertical stress on top of the pavement if the radius of the circular load is 15 cm and the uniform contact pressure equal to 6 kg/cm²?",
                    options: [
                        { key: "a", text: "2.67 kg/cm²" },
                        { key: "b", text: "6 kg/cm²" },
                        { key: "c", text: "1 kg/cm²" },
                        { key: "d", text: "0 kg/cm²" }
                    ],
                    answer: "b",
                    explanation: "'On top of the pavement' means at the surface and directly under the load. The vertical stress at the interface between the load and the pavement is equal to the applied contact pressure, which is 6 kg/cm²."
                },
                {
                    id: "cm29q086",
                    src: "TRAN808-00314",
                    text: "Which of the below is not a type of stress that is commonly found in flexible pavements?",
                    options: [
                        { key: "a", text: "Shear stress" },
                        { key: "b", text: "Vertical stress" },
                        { key: "c", text: "Normal stress" },
                        { key: "d", text: "Radial stress" }
                    ],
                    answer: "c",
                    explanation: "All are common. Normal stress acts perpendicular to a plane, vertical and radial are specific types of normal stress. Shear stress acts parallel to a plane. All are induced by traffic loads."
                },
                {
                    id: "cm29q087",
                    src: "TRAN808-00315",
                    text: "When does shear stress occur in the pavement?",
                    options: [
                        { key: "a", text: "Seepage into subgrade" },
                        { key: "b", text: "Loading exceeds capacity" },
                        { key: "c", text: "Weathering of the pavement surface" },
                        { key: "d", text: "Friction between pavement and tyre" }
                    ],
                    answer: "d",
                    explanation: "Horizontal shear stresses are primarily generated at the tire-pavement contact area due to friction during braking, acceleration, or turning movements."
                },
                {
                    id: "cm29q088",
                    src: "TRAN808-00316",
                    text: "The vertical ______ on top of the subgrade controls the subgrade rutting.",
                    options: [
                        { key: "a", text: "Compressive strain" },
                        { key: "b", text: "Tensile stress" },
                        { key: "c", text: "Tensile strain" },
                        { key: "d", text: "Compressive stress" }
                    ],
                    answer: "a",
                    explanation: "Rutting in the subgrade is a permanent deformation caused by the repeated application of vertical compressive strain, not stress. Limiting this strain is a key design criterion."
                },
                {
                    id: "cm29q089",
                    src: "TRAN808-00317",
                    text: "A flexible pavement of thickness 50 cm is laid over a subgrade. A circular load of radius 15 cm with a uniform contact pressure of 7 kg/cm² is applied on the pavement. What would be the vertical stress on top of the subgrade?",
                    options: [
                        { key: "a", text: "1.58 kg/cm²" },
                        { key: "b", text: "0.85 kg/cm²" },
                        { key: "c", text: "0.58 kg/cm²" },
                        { key: "d", text: "1.85 kg/cm²" }
                    ],
                    answer: "b",
                    explanation: "This requires using a method like Odemark's equivalent thickness to convert the layered system to an equivalent homogeneous mass, then applying Boussinesq. An approximate calculation or use of charts gives a value around 0.85 kg/cm². The exact value depends on the modulus of each layer."
                }
            ]
        },
        {
            id: "cm29wate",
            name: "Water Supply, Sanitation and Environment",
            subject: "Water Supply",
            accent: "blue",
            blurb: "11 questions drawn from the Water Supply, Sanitation and Environment bank.",
            questions: [
                {
                    id: "cm29q090",
                    src: "WATE813-00288",
                    text: "Which of the following is known as Shut off valve?",
                    options: [
                        { key: "a", text: "Air relief valve" },
                        { key: "b", text: "Pressure relief valve" },
                        { key: "c", text: "Stoice valve" },
                        { key: "d", text: "Altitude valve" }
                    ],
                    answer: "c",
                    explanation: "A 'Stoice valve' is likely a misspelling of 'Stop valve' or 'Gate valve', which is a common type of shut-off valve used to completely stop or allow flow in a pipeline. It operates by raising or lowering a gate."
                },
                {
                    id: "cm29q091",
                    src: "WATE813-00289",
                    text: "The spacing between the Stoice valves is ...",
                    options: [
                        { key: "a", text: "10 m" },
                        { key: "b", text: "30 m" },
                        { key: "c", text: "80 m" },
                        { key: "d", text: "180 m" }
                    ],
                    answer: "d",
                    explanation: "Stop valves (or gate valves) are typically spaced at intervals of about 150m to 180m in distribution networks. This allows sections of the pipeline to be isolated for maintenance and repair with minimal service disruption."
                },
                {
                    id: "cm29q092",
                    src: "WATE813-00290",
                    text: "The Gate valves are made of ... with brass mountings.",
                    options: [
                        { key: "a", text: "Cast iron" },
                        { key: "b", text: "Cement concrete" },
                        { key: "c", text: "Reinforced concrete" },
                        { key: "d", text: "Galvanized iron" }
                    ],
                    answer: "a",
                    explanation: "Gate valves are commonly constructed with a cast iron body for strength and durability. The internal parts, such as the stem, gate, and seat, are often made of brass or bronze for better corrosion resistance and sealing."
                },
                {
                    id: "cm29q093",
                    src: "WATE813-00291",
                    text: "Which of the following is known as washout valve?",
                    options: [
                        { key: "a", text: "Stoice valve" },
                        { key: "b", text: "Scour valve" },
                        { key: "c", text: "Reflux valve" },
                        { key: "d", text: "Altitude valve" }
                    ],
                    answer: "b",
                    explanation: "A scour valve (or blow-off valve) is installed at low points in a pipeline. It is used to 'wash out' or drain the line, flushing out sediment and allowing for maintenance by releasing water and debris."
                },
                {
                    id: "cm29q094",
                    src: "WATE813-00292",
                    text: "The valve which is preferred in elevated tanks and stand pipes is",
                    options: [
                        { key: "a", text: "Pressure relief valve" },
                        { key: "b", text: "Reflux valve" },
                        { key: "c", text: "Altitude valve" },
                        { key: "d", text: "Air relief valve" }
                    ],
                    answer: "c",
                    explanation: "An altitude valve is automatically controlled by the water level in an elevated tank. It opens to allow flow into the tank when the level is low and closes when the tank is full, preventing overflow."
                },
                {
                    id: "cm29q095",
                    src: "WATE813-00293",
                    text: "Which of the following is also known as a check valve?",
                    options: [
                        { key: "a", text: "Scour valve" },
                        { key: "b", text: "Pressure relief valve" },
                        { key: "c", text: "Altitude valve" },
                        { key: "d", text: "Reflux valve" }
                    ],
                    answer: "d",
                    explanation: "A reflux valve is another name for a check valve. It allows flow in only one direction, preventing backflow in the pipeline, which is crucial for protecting pumps and maintaining system pressure."
                },
                {
                    id: "cm29q096",
                    src: "WATE813-00294",
                    text: "Ascariasis, scabies, trachoma and conjunctivitis, shinghoid etc... are example of",
                    options: [
                        { key: "a", text: "water vector disease" },
                        { key: "b", text: "water borne disease" },
                        { key: "c", text: "water washed disease" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "c",
                    explanation: "Water-washed diseases are those where the key factor is the lack of water for personal hygiene, not necessarily the quality of the water itself. These diseases are spread through person-to-person contact and can be prevented by improved access to water for washing."
                },
                {
                    id: "cm29q097",
                    src: "WATE813-00295",
                    text: "Schistosomiasis(bilharziasis) is example of",
                    options: [
                        { key: "a", text: "water vector disease" },
                        { key: "b", text: "water borne disease" },
                        { key: "c", text: "water based disease" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "c",
                    explanation: "Water-based diseases are those caused by parasites that spend part of their life cycle in an aquatic intermediate host, such as a snail. Schistosomiasis is a classic example, where the parasite infects humans through contact with contaminated water."
                },
                {
                    id: "cm29q098",
                    src: "WATE813-00296",
                    text: "Malaria, yellow fever ... are example of",
                    options: [
                        { key: "a", text: "water vector disease" },
                        { key: "b", text: "water borne disease" },
                        { key: "c", text: "water based disease" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "a",
                    explanation: "Water-related vector diseases are transmitted by insects that breed or live near water. Mosquitoes, which transmit malaria and yellow fever, require water to complete their life cycle, making the presence of standing water a key risk factor."
                },
                {
                    id: "cm29q099",
                    src: "WATE813-00297",
                    text: "Waterborne disease are also known as",
                    options: [
                        { key: "a", text: "Aquatic-borne infections" },
                        { key: "b", text: "Water-based disease" },
                        { key: "c", text: "Water-washed disease" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "a",
                    explanation: "Waterborne diseases are directly caused by ingesting water contaminated with human or animal feces containing pathogenic microorganisms. They are often referred to as water quality diseases or Waterborne disease because their transmission is directly linked to the microbiological quality of the water supply."
                },
                {
                    id: "cm29q100",
                    src: "WATE813-00298",
                    text: "E-coil and coliform are known as",
                    options: [
                        { key: "a", text: "indicator organism" },
                        { key: "b", text: "water quality disease" },
                        { key: "c", text: "vector" },
                        { key: "d", text: "mustaed peer organism" }
                    ],
                    answer: "a",
                    explanation: "Coliform bacteria, including E. coli, are used as indicator organisms. Their presence in water indicates that fecal contamination has occurred and that pathogenic microbes (like those causing cholera or typhoid) *could* be present, making the water unsafe to drink."
                }
            ]
        }
    ]
};

/* Registered lazily — js/civil.js injects this file when the set is opened. */
window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["civil-29"] = CIVIL_MODEL_29;
