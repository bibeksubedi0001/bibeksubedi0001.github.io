/* ============================================================
   CIVIL MODEL SET 28 — Civil Engineering licence-style model paper
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
const CIVIL_MODEL_28 = {
    day: 58,
    kind: "model",
    badge: { top: "Model", main: "C28" },
    title: "Civil Model Set 28",
    subtitle: "Civil Engineering · 9 subjects",
    durationMinutes: 120,
    negativeMarking: 0,
    chapters: [
        {
            id: "cm28basi",
            name: "Basic Civil Engineering",
            subject: "Basic Civil",
            accent: "blue",
            blurb: "13 questions drawn from the Basic Civil Engineering bank.",
            questions: [
                {
                    id: "cm28q001",
                    src: "BASI674-00351",
                    text: "In the triangulation method, the whole area is divided into:",
                    options: [
                        { key: "a", text: "Well-conditioned triangles" },
                        { key: "b", text: "Scale triangles" },
                        { key: "c", text: "Triangles" },
                        { key: "d", text: "Obtuse triangles" }
                    ],
                    answer: "a",
                    explanation: "In a triangulation network, the area is divided into triangles that are as close to equilateral as possible. These are called 'well-conditioned triangles' as they minimize the propagation of errors in the computation of sides."
                },
                {
                    id: "cm28q002",
                    src: "BASI674-00352",
                    text: "Which of the below is not a method of doing resection?",
                    options: [
                        { key: "a", text: "Back sighting" },
                        { key: "b", text: "Solving four-point problem" },
                        { key: "c", text: "Solving two-point problem" },
                        { key: "d", text: "Solving three-point problem" }
                    ],
                    answer: "b",
                    explanation: "Resection is the process of determining the location of an unknown point by observing angles to known points. Common methods include the two-point and three-point problems. A standard 'four-point problem' method is not typically used."
                },
                {
                    id: "cm28q003",
                    src: "BASI674-00353",
                    text: "Calculate the volume (cubic metre) of dry mortar required for 1 cubic metre brick work. Brick size: 190mm x 90 mm x 90mm",
                    options: [
                        { key: "a", text: "0.18" },
                        { key: "b", text: "0.23" },
                        { key: "c", text: "0.30" },
                        { key: "d", text: "0.45" }
                    ],
                    answer: "c",
                    explanation: "Number of bricks per m³ = 1 / (0.19*0.09*0.09) ≈ 649 bricks. Volume of bricks = 649 * (0.19*0.09*0.09) = 1 m³. Typical mortar volume is 25-30% of total volume. For 1 m³ brickwork, dry mortar ≈ 0.3 m³ (30%)."
                },
                {
                    id: "cm28q004",
                    src: "BASI674-00354",
                    text: "For one cubic metre of concrete (1 : 2 : 4) the number of cement bag required is",
                    options: [
                        { key: "a", text: "4.5" },
                        { key: "b", text: "5.3" },
                        { key: "c", text: "7.9" },
                        { key: "d", text: "6.5" }
                    ],
                    answer: "d",
                    explanation: "Wet volume = 1 m³. Dry volume = 1 * 1.54 = 1.54 m³. Cement part = 1/(1+2+4)=1/7. Cement volume = (1/7)*1.54 = 0.22 m³. Density of cement = 1440 kg/m³. Cement weight = 0.22 * 1440 = 316.8 kg. Bags = 316.8 / 50 = 6.336 bags ≈ 6.5 bags."
                },
                {
                    id: "cm28q005",
                    src: "BASI674-00355",
                    text: "The rate of payment is made for 100 cum (per% cum) in case of .....",
                    options: [
                        { key: "a", text: "Earth work in excavation" },
                        { key: "b", text: "Rock cutting" },
                        { key: "c", text: "Excavation in trenches for foundation" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "In construction estimating, rates for bulk earthwork items like excavation, rock cutting, and trench excavation are often quoted per 100 cubic meters (cum) for easier calculation and billing."
                },
                {
                    id: "cm28q006",
                    src: "BASI674-00356",
                    text: "The rate of an item of work depends on .....",
                    options: [
                        { key: "a", text: "Specifications of works" },
                        { key: "b", text: "Specifications of materials" },
                        { key: "c", text: "Proportion of mortar" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "The cost rate for a construction item is influenced by the quality of materials specified, the workmanship standards (specifications of works), and the mix proportions (e.g., mortar mix)."
                },
                {
                    id: "cm28q007",
                    src: "BASI674-00357",
                    text: "Brick walls are measured in sq. m if the thickness of the wall is.....",
                    options: [
                        { key: "a", text: "15 cm" },
                        { key: "b", text: "20 cm" },
                        { key: "c", text: "10 cm" },
                        { key: "d", text: "None" }
                    ],
                    answer: "c",
                    explanation: "As per standard measurement rules (e.g., IS 1200), brick walls with a thickness of 10 cm (or half-brick thick walls) are measured in square meters. Thicker walls are typically measured in cubic meters."
                },
                {
                    id: "cm28q008",
                    src: "BASI674-00358",
                    text: "The plinth area of a building not includes",
                    options: [
                        { key: "a", text: "Area of the walls at the floor level" },
                        { key: "b", text: "Internal shaft for sanitary installations up to 2 sqm in area" },
                        { key: "c", text: "Lift and wall including landing" },
                        { key: "d", text: "Area of cantilevered porch" }
                    ],
                    answer: "d",
                    explanation: "The plinth area is the built-up covered area measured at the floor level. It excludes areas like cantilevered porches that are not enclosed by walls on all sides, but includes internal shafts (if within size limit) and lift wells."
                },
                {
                    id: "cm28q009",
                    src: "BASI674-00359",
                    text: "The main factor to be considered while preparing a detailed estimate, is",
                    options: [
                        { key: "a", text: "Quantity of the materials" },
                        { key: "b", text: "Availability of materials" },
                        { key: "c", text: "Transportation of materials" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "A detailed estimate requires calculating accurate quantities, but the final rate also depends on the local availability and cost of transporting materials to the site."
                },
                {
                    id: "cm28q010",
                    src: "BASI674-00360",
                    text: "Pick up the correct statement from the following",
                    options: [
                        { key: "a", text: "The estimated value of the work excluding the amount for contingencies, work charged establishment, tool and plants, is called work value" },
                        { key: "b", text: "The actual expenditure involved to complete a work including incidental, establishment and travelling charges, is called actual cost" },
                        { key: "c", text: "The formal acceptance by the administrative department for incurring an expenditure on the work, is called administrative approval" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "All three statements are standard definitions in construction project management and estimating terminology."
                },
                {
                    id: "cm28q011",
                    src: "BASI674-00361",
                    text: "If the formation level of a highway has a uniform gradient for a particular length, and the ground is also having a longitudinal slope, the earthwork may be calculated by",
                    options: [
                        { key: "a", text: "Mid-section formula" },
                        { key: "b", text: "Trapezoidal formula" },
                        { key: "c", text: "Prismoidal formula" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "Different formulas can be applied for earthwork calculations depending on the site conditions and required accuracy. The mid-section, trapezoidal, and prismoidal formulas are all valid methods for calculating volumes in such scenarios."
                },
                {
                    id: "cm28q012",
                    src: "BASI674-00362",
                    text: "While estimating a reinforced cement structure, the omitted cover of concrete is assumed",
                    options: [
                        { key: "a", text: "At the end of reinforcing bar, not less than 25 mm or twice the diameter of the bar" },
                        { key: "b", text: "In thin slabs, 12 mm minimum or diameter of the bar whichever is more" },
                        { key: "c", text: "For reinforcing longitudinal bar in a beam 25 mm minimum or diameter of the largest bar which is more" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "These are standard rules (as per codes like IS 456) for providing minimum concrete cover to reinforcement to ensure durability and fire resistance."
                },
                {
                    id: "cm28q013",
                    src: "BASI674-00363",
                    text: "A cement concrete road is 1000 m long, 8 m wide and 15 cm thick over the sub-base of 10 cm thick gravel. The box cutting in road crust is",
                    options: [
                        { key: "a", text: "2000 m³" },
                        { key: "b", text: "500 m³" },
                        { key: "c", text: "1000 m³" },
                        { key: "d", text: "1500 m³" }
                    ],
                    answer: "a",
                    explanation: "Box cutting refers to the total volume of excavation. Total depth = 15 cm + 10 cm = 25 cm = 0.25 m. Volume = Length * Width * Depth = 1000 m * 8 m * 0.25 m = 2000 m³."
                }
            ]
        },
        {
            id: "cm28stru",
            name: "Structural Mechanics",
            subject: "Structural Mech",
            accent: "cyan",
            blurb: "11 questions drawn from the Structural Mechanics bank.",
            questions: [
                {
                    id: "cm28q014",
                    src: "STRU935-00296",
                    text: "How does the elastic constant vary with the elongation of body?",
                    options: [
                        { key: "a", text: "The elastic constant is directly proportional to the elongation" },
                        { key: "b", text: "The elastic constant is inversely proportional to the elongation" },
                        { key: "c", text: "The elongation does not depends on the elastic constant" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "d",
                    explanation: "The elastic constant (Young's Modulus, E) is a material property. It is defined as the ratio of stress to strain (E = σ/ε) and is constant for a material within its elastic limit. It does not vary with elongation; instead, it governs the relationship between stress and strain."
                },
                {
                    id: "cm28q015",
                    src: "STRU935-00297",
                    text: "The compressive strength of brittle materials is ___ its tensile strength.",
                    options: [
                        { key: "a", text: "equal to" },
                        { key: "b", text: "less than" },
                        { key: "c", text: "greater than" },
                        { key: "d", text: "double" }
                    ],
                    answer: "c",
                    explanation: "Brittle materials, like cast iron and concrete, are significantly weaker in tension than in compression. Microcracks present in the material propagate easily under tensile stress, leading to a much lower tensile strength compared to compressive strength."
                },
                {
                    id: "cm28q016",
                    src: "STRU935-00298",
                    text: "In compression test, the fracture in cast iron specimen would occur along",
                    options: [
                        { key: "a", text: "axis of load" },
                        { key: "b", text: "at right angles to the axis of specimen" },
                        { key: "c", text: "none" },
                        { key: "d", text: "an oblique plane" }
                    ],
                    answer: "d",
                    explanation: "Cast iron is a brittle material. Under compression, failure occurs due to shear stresses along planes oriented at approximately 45 degrees to the direction of the applied load. This results in a fracture along an oblique plane."
                },
                {
                    id: "cm28q017",
                    src: "STRU935-00299",
                    text: "For brittle material subjected to torsion, failure occurs at plane",
                    options: [
                        { key: "a", text: "perpendicular to longitudinal axis" },
                        { key: "b", text: "along the longitudinal axis" },
                        { key: "c", text: "45 degree with longitudinal axis" },
                        { key: "d", text: "cannot be determined" }
                    ],
                    answer: "a",
                    explanation: "In torsion, the maximum tensile and compressive stresses act on planes at 45 degrees to the shaft's axis. However, brittle materials fail suddenly on the plane perpendicular to the maximum tensile stress, which is a helical surface at 45 degrees to the axis but appears as a transverse fracture."
                },
                {
                    id: "cm28q018",
                    src: "STRU935-00300",
                    text: "For ductile material subjected to torsion, failure occurs at plane",
                    options: [
                        { key: "a", text: "along the load" },
                        { key: "b", text: "perpendicular to load" },
                        { key: "c", text: "45 degree with longitudinal axis" },
                        { key: "d", text: "cannot be determined" }
                    ],
                    answer: "b",
                    explanation: "In torsion, the maximum shear stresses act on planes parallel and perpendicular to the shaft's axis. Ductile materials, which fail due to shear, will yield and fracture along the plane of maximum shear stress, which is perpendicular to the axis (a transverse plane)."
                },
                {
                    id: "cm28q019",
                    src: "STRU935-00301",
                    text: "For brittle material subjected to tension failure occurs at plane",
                    options: [
                        { key: "a", text: "along the longitudinal axis" },
                        { key: "b", text: "45 degree with longitudinal axis" },
                        { key: "c", text: "perpendicular to longitudinal axis" },
                        { key: "d", text: "cannot be determined" }
                    ],
                    answer: "c",
                    explanation: "Under uniaxial tension, the maximum normal stress is the tensile stress itself, acting on a plane perpendicular to the load. Brittle materials fail on the plane perpendicular to the maximum tensile stress, resulting in a fracture surface normal to the load direction."
                },
                {
                    id: "cm28q020",
                    src: "STRU935-00302",
                    text: "For ductile material subjected to tension failure occurs at plane",
                    options: [
                        { key: "a", text: "perpendicular to load" },
                        { key: "b", text: "along the load" },
                        { key: "c", text: "cannot be determined" },
                        { key: "d", text: "45 degree with longitudinal axis" }
                    ],
                    answer: "d",
                    explanation: "Under uniaxial tension, the maximum shear stress acts on planes oriented at 45 degrees to the load axis. Ductile materials fail due to shear, leading to a cup-and-cone fracture where the central failure surface is at 45 degrees (shear lip) and the outer edge is perpendicular (cleavage)."
                },
                {
                    id: "cm28q021",
                    src: "STRU935-00303",
                    text: "For brittle material subjected to compression, failure occurs at plane",
                    options: [
                        { key: "a", text: "45 degree with load" },
                        { key: "b", text: "perpendicular to load" },
                        { key: "c", text: "along the load" },
                        { key: "d", text: "cannot be determined" }
                    ],
                    answer: "a",
                    explanation: "Under uniaxial compression, the maximum normal stress is compressive. However, the maximum shear stress acts on planes at 45 degrees to the load. Brittle materials often fail due to a combination of shear and buckling, typically along an oblique plane at around 45 degrees."
                },
                {
                    id: "cm28q022",
                    src: "STRU935-00304",
                    text: "For ductile material subjected to compression, failure occurs at plane",
                    options: [
                        { key: "a", text: "perpendicular to load" },
                        { key: "b", text: "cannot be determined" },
                        { key: "c", text: "along the load" },
                        { key: "d", text: "45 degree load" }
                    ],
                    answer: "b",
                    explanation: "Ductile materials under compression do not typically 'fracture' in the same way as brittle materials. They undergo significant plastic deformation (barreling) and may not fracture at all in a standard test. If fracture occurs, it is often complex and not on a single defined plane, making the answer 'cannot be determined' the most accurate."
                },
                {
                    id: "cm28q023",
                    src: "STRU935-00305",
                    text: "The law which states that within elastic limits strain produced is proportional to the stress producing it is known as",
                    options: [
                        { key: "a", text: "Bernoulli's law" },
                        { key: "b", text: "Poisson's law" },
                        { key: "c", text: "Hooke's law" },
                        { key: "d", text: "Stress law" }
                    ],
                    answer: "c",
                    explanation: "Hooke's Law is a fundamental principle of solid mechanics which states that for a material within its elastic limit, the strain is directly proportional to the applied stress. This is the basis for defining the elastic modulus."
                },
                {
                    id: "cm28q024",
                    src: "STRU935-00306",
                    text: "For an isotropic, homogeneous and elastic material obeying Hooke's law, the number of independent elastic constants is",
                    options: [
                        { key: "a", text: "3" },
                        { key: "b", text: "6" },
                        { key: "c", text: "1" },
                        { key: "d", text: "2" }
                    ],
                    answer: "d",
                    explanation: "For an isotropic material (properties same in all directions), homogeneous (same composition throughout), and linear elastic, the number of independent elastic constants is 2. Common pairs are Young's Modulus (E) and Poisson's Ratio (ν), or Lamé's constants (λ and μ)."
                }
            ]
        },
        {
            id: "cm28desi",
            name: "Design of Structures",
            subject: "Design of Str",
            accent: "slate",
            blurb: "10 questions drawn from the Design of Structures bank.",
            questions: [
                {
                    id: "cm28q025",
                    src: "DESI787-00255",
                    text: "In limit state method, factor of safety for load is",
                    options: [
                        { key: "a", text: "1.5" },
                        { key: "b", text: "1.0" },
                        { key: "c", text: "2.0" },
                        { key: "d", text: "2.5" }
                    ],
                    answer: "a",
                    explanation: "In the Limit State Method, safety is introduced through partial safety factors for loads (γ_f). For dead loads, this factor is typically 1.5. The overall factor of safety is not a single value but is applied separately to loads and material strengths."
                },
                {
                    id: "cm28q026",
                    src: "DESI787-00256",
                    text: "In limit state method, factor of safety for steel and concrete material is",
                    options: [
                        { key: "a", text: "1.0 and 1.0" },
                        { key: "b", text: "1.15 and 1.5" },
                        { key: "c", text: "1.5 and 1.5" },
                        { key: "d", text: "1.8 and 3.0" }
                    ],
                    answer: "b",
                    explanation: "As per IS 456:2000, the partial safety factors for materials are: For steel (γ_s) = 1.15 and for concrete (γ_c) = 1.5. These factors are applied to the characteristic strengths of the materials to obtain the design strengths."
                },
                {
                    id: "cm28q027",
                    src: "DESI787-00257",
                    text: "As per IS 456 : 2000, for the design of doubly reinforced beam, the area of compression reinforcement Asc is given by",
                    options: [
                        { key: "a", text: "(M_u,lim - M_u) / (f_sc (d - d'))" },
                        { key: "b", text: "M_u / (f_sc (d + d'))" },
                        { key: "c", text: "(M_u - M_u,lim) / (f_sc (d - d'))" },
                        { key: "d", text: "(M_u,lim - M_u) / (f_sc (d + d'))" }
                    ],
                    answer: "c",
                    explanation: "In a doubly reinforced beam, the moment of resistance M_u consists of two parts: M_u,lim (from the singly reinforced section) and an additional moment (M_u - M_u,lim) resisted by the compression steel and an equal area of additional tensile steel. The formula for the area of compression steel is Asc = (M_u - M_u,lim) / (f_sc (d - d')), where f_sc is the stress in compression steel and d' is the depth to the centroid of compression steel."
                },
                {
                    id: "cm28q028",
                    src: "DESI787-00258",
                    text: "In the design of a cantilever beam, main steel reinforcement is provided along …… face of the beam.",
                    options: [
                        { key: "a", text: "compression" },
                        { key: "b", text: "central" },
                        { key: "c", text: "side" },
                        { key: "d", text: "tension" }
                    ],
                    answer: "d",
                    explanation: "A cantilever beam is fixed at one end and free at the other. Under a downward load, positive bending moment causes tension at the top face. Therefore, the main tensile reinforcement must be provided along the top face."
                },
                {
                    id: "cm28q029",
                    src: "DESI787-00259",
                    text: "The minimum stripping time of soffit formwork to beams (props to be refixed immediately after removal of formwork is:",
                    options: [
                        { key: "a", text: "7 days" },
                        { key: "b", text: "14 days" },
                        { key: "c", text: "3 days" },
                        { key: "d", text: "21 days" }
                    ],
                    answer: "a",
                    explanation: "As per IS 456:2000, Table 11, the minimum period before striking formwork to soffits of beams is 7 days, provided props are refixed immediately. For larger spans, this period is longer (14 days)."
                },
                {
                    id: "cm28q030",
                    src: "DESI787-00260",
                    text: "If σ_cbc is permissible compressive stress of concrete in bending, then modular ratio is given by",
                    options: [
                        { key: "a", text: "280/4σ_cbc" },
                        { key: "b", text: "280/3σ_cbc" },
                        { key: "c", text: "280/2σ_cbc" },
                        { key: "d", text: "380/3σ_cbc" }
                    ],
                    answer: "b",
                    explanation: "The modular ratio (m) in the Working Stress Method is defined as the ratio of the modulus of elasticity of steel to that of concrete. It is calculated using the formula m = 280 / (3 * σ_cbc), where σ_cbc is the permissible compressive stress in concrete due to bending."
                },
                {
                    id: "cm28q031",
                    src: "DESI787-00261",
                    text: "In a doubly reinforced rectangular concrete beam, the distance between the centroids of compression and tension reinforcements is generally known as",
                    options: [
                        { key: "a", text: "Neutral axis depth" },
                        { key: "b", text: "Neutral Arm" },
                        { key: "c", text: "Lever Arm" },
                        { key: "d", text: "Critical axis depth" }
                    ],
                    answer: "c",
                    explanation: "The lever arm is the perpendicular distance between the lines of action of the resultant compressive force (C) in the concrete/compression steel and the resultant tensile force (T) in the tensile steel. This distance is crucial for calculating the moment of resistance of the section (M = C * z or T * z)."
                },
                {
                    id: "cm28q032",
                    src: "DESI787-00262",
                    text: "After the curing of 3 days, the concrete gains strength upto ......",
                    options: [
                        { key: "a", text: "60%" },
                        { key: "b", text: "80%" },
                        { key: "c", text: "100%" },
                        { key: "d", text: "40%" }
                    ],
                    answer: "d",
                    explanation: "Concrete typically gains about 30-40% of its 28-day strength in the first 3 days under normal curing conditions. The rate of strength gain is high initially and slows down over time."
                },
                {
                    id: "cm28q033",
                    src: "DESI787-00264",
                    text: "The breaking up of cohesion in a mass of concrete is called",
                    options: [
                        { key: "a", text: "segregation" },
                        { key: "b", text: "workability" },
                        { key: "c", text: "bleeding" },
                        { key: "d", text: "creep" }
                    ],
                    answer: "a",
                    explanation: "Segregation is the separation of the constituent materials of concrete, i.e., the coarse aggregate separating from the mortar. It leads to a non-uniform mix, resulting in honeycombing, porous layers, and scaling."
                },
                {
                    id: "cm28q034",
                    src: "DESI787-00265",
                    text: "The continuous strain, which the concrete undergoes due to application of external loads, is called",
                    options: [
                        { key: "a", text: "workability" },
                        { key: "b", text: "creep" },
                        { key: "c", text: "bleeding" },
                        { key: "d", text: "segregation" }
                    ],
                    answer: "b",
                    explanation: "Creep is the time-dependent deformation of concrete under a sustained load. It occurs even after the initial elastic deformation and continues at a decreasing rate for a long period."
                }
            ]
        },
        {
            id: "cm28soil",
            name: "Soil Mechanics and Foundation",
            subject: "Soil Mechanics",
            accent: "amber",
            blurb: "14 questions drawn from the Soil Mechanics and Foundation bank.",
            questions: [
                {
                    id: "cm28q035",
                    src: "SOIL136-00356",
                    text: "In general shear failure, continuous failure is developed between ______",
                    options: [
                        { key: "a", text: "Ground surface and found" },
                        { key: "b", text: "Foundation and the ground surface" },
                        { key: "c", text: "Edge of the footing and ground surface" },
                        { key: "d", text: "Footing and bedrock" }
                    ],
                    answer: "c",
                    explanation: "In a general shear failure, a distinct, continuous rupture surface develops from the edges of the footing and extends up to the ground surface, creating a heave or bulge on the sides."
                },
                {
                    id: "cm28q036",
                    src: "SOIL136-00358",
                    text: "In local shear failure, the development of plastic equilibrium is ______",
                    options: [
                        { key: "a", text: "Full" },
                        { key: "b", text: "Zero" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "Partial" }
                    ],
                    answer: "d",
                    explanation: "Local shear failure is an intermediate state. The zone of plastic equilibrium (where the soil shears) develops only partially beneath the footing and does not propagate fully to the ground surface."
                },
                {
                    id: "cm28q037",
                    src: "SOIL136-00359",
                    text: "Punching shear may occur in loose sand with density less than ______",
                    options: [
                        { key: "a", text: "35%" },
                        { key: "b", text: "45%" },
                        { key: "c", text: "50%" },
                        { key: "d", text: "20%" }
                    ],
                    answer: "a",
                    explanation: "Punching shear failure is typical in very loose, compressible soils. It often occurs in sands with a relative density (Dr) of less than approximately 35%."
                },
                {
                    id: "cm28q038",
                    src: "SOIL136-00360",
                    text: "Local shear failure is associated with soils having ______",
                    options: [
                        { key: "a", text: "High pore pressure" },
                        { key: "b", text: "High compressibility" },
                        { key: "c", text: "Low porosity" },
                        { key: "d", text: "Low compressibility" }
                    ],
                    answer: "b",
                    explanation: "Local shear failure is associated with soils that are moderately compressible. The failure is characterized by significant settlement as the soil compresses under the footing before a limited shear failure occurs."
                },
                {
                    id: "cm28q039",
                    src: "SOIL136-00361",
                    text: "Which of the following is not one of the characteristics of a local shear failure?",
                    options: [
                        { key: "a", text: "Failure is defined by large settlements" },
                        { key: "b", text: "Failure surface do not reach the ground surface" },
                        { key: "c", text: "Failure is sudden" },
                        { key: "d", text: "Ultimate bearing capacity is not well defined" }
                    ],
                    answer: "c",
                    explanation: "Local shear failure is not sudden. It is a progressive failure marked by large, noticeable settlements. The failure surface does not reach the ground surface, and the ultimate bearing capacity is not clearly defined."
                },
                {
                    id: "cm28q040",
                    src: "SOIL136-00362",
                    text: "In local shear failure, the failure surface does not reach the ground surface because",
                    options: [
                        { key: "a", text: "Ultimate bearing capacity is not well defined" },
                        { key: "b", text: "Failure is defined by large settlements" },
                        { key: "c", text: "All of the mentioned" },
                        { key: "d", text: "Compression of soil under the footing" }
                    ],
                    answer: "d",
                    explanation: "In local shear failure, the soil's higher compressibility means it deforms and compresses significantly under the load. This compression absorbs energy and prevents the shear failure surface from propagating completely to the ground surface."
                },
                {
                    id: "cm28q041",
                    src: "SOIL136-00363",
                    text: "State of equilibrium is fully developed in which of the following bearing capacity failures?",
                    options: [
                        { key: "a", text: "General shear failure" },
                        { key: "b", text: "Local shear failure" },
                        { key: "c", text: "Punching shear failure" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "a",
                    explanation: "A full state of plastic equilibrium is developed throughout the soil mass above the failure surface in a general shear failure. This is not achieved in the partial (local) or vertical compression (punching) failure modes."
                },
                {
                    id: "cm28q042",
                    src: "SOIL136-00364",
                    text: "An analysis of the condition of complete bearing capacity failure is usually termed as",
                    options: [
                        { key: "a", text: "Terzaghi’s analysis" },
                        { key: "b", text: "General shear failure" },
                        { key: "c", text: "Bearing failure" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "b",
                    explanation: "An analysis of the condition of complete bearing capacity failure is usually termed as general shear failure. This failure mode is characterized by a well-defined plastic failure surface that extends to the ground surface, often accompanied by significant tilting or upheaval of the soil."
                },
                {
                    id: "cm28q043",
                    src: "SOIL136-00365",
                    text: "The concept of analysis of bearing capacity failure was first developed by ______",
                    options: [
                        { key: "a", text: "Prandtl" },
                        { key: "b", text: "Mandi" },
                        { key: "c", text: "Terzaghi" },
                        { key: "d", text: "Darcy" }
                    ],
                    answer: "c",
                    explanation: "While Prandtl developed a failure mechanism in mechanics, Karl Terzaghi, the father of soil mechanics, was the first to adapt and apply this concept to the problem of foundation bearing capacity in soils."
                },
                {
                    id: "cm28q044",
                    src: "SOIL136-00366",
                    text: "For purely cohesive soil, the bearing capacity is given by which of the following equation?",
                    options: [
                        { key: "a", text: "q_u = c + σ̅" },
                        { key: "b", text: "q_u = 5.7 c" },
                        { key: "c", text: "q_u = c N_c" },
                        { key: "d", text: "q_u = 5.7 c + σ̅" }
                    ],
                    answer: "d",
                    explanation: "For a purely cohesive soil (φ = 0) under a strip footing, Terzaghi's bearing capacity equation simplifies to q_u = c N_c + q N_q. The bearing capacity factors become N_c = 5.7 and N_q = 1.0. Therefore, q_u = 5.7c + γD_f (where q = γD_f is the surcharge)."
                },
                {
                    id: "cm28q045",
                    src: "SOIL136-00367",
                    text: "The parameters N_c, N_q, N_γ in the equations of bearing capacity failure are known as ______",
                    options: [
                        { key: "a", text: "Bearing capacity factors" },
                        { key: "b", text: "Constant head" },
                        { key: "c", text: "Effective pressure" },
                        { key: "d", text: "Load intensity" }
                    ],
                    answer: "a",
                    explanation: "N_c, N_q, and N_γ are dimensionless numbers known as bearing capacity factors. Their values depend only on the angle of shearing resistance (φ) of the soil and quantify the contribution of cohesion, surcharge, and soil unit weight to the total bearing capacity."
                },
                {
                    id: "cm28q046",
                    src: "SOIL136-00368",
                    text: "For purely cohesive soil, local shear failure may be assumed to occur when the soil is......",
                    options: [
                        { key: "a", text: "Medium to soft" },
                        { key: "b", text: "Soft to medium" },
                        { key: "c", text: "Hard" },
                        { key: "d", text: "All" }
                    ],
                    answer: "b",
                    explanation: "For cohesive soils (clays), local shear failure is associated with soils that are medium to soft in consistency. General shear failure is typical for stiff to hard clays."
                },
                {
                    id: "cm28q047",
                    src: "SOIL136-00370",
                    text: "Which of the following are original Terzaghi values for N_γ?",
                    options: [
                        { key: "a", text: "N_γ for φ=40°" },
                        { key: "b", text: "N_γ for φ=50°" },
                        { key: "c", text: "N_γ for φ=34° and φ=48°" },
                        { key: "d", text: "N_γ for φ=60°" }
                    ],
                    answer: "c",
                    explanation: "In his original work, Terzaghi provided values for the bearing capacity factor N_γ for specific friction angles. The values for φ = 34° and φ = 48° are examples of these original proposed values."
                },
                {
                    id: "cm28q048",
                    src: "SOIL136-00371",
                    text: "According to the assumptions in Terzaghi’s analysis, the soil is ______",
                    options: [
                        { key: "a", text: "Non Homogeneous" },
                        { key: "b", text: "None of the mentioned" },
                        { key: "c", text: "All of the mentioned" },
                        { key: "d", text: "Homogeneous and Isotropic" }
                    ],
                    answer: "d",
                    explanation: "Terzaghi's classical bearing capacity theory is based on the assumption that the soil mass is homogeneous (same properties throughout) and isotropic (same properties in all directions)."
                }
            ]
        },
        {
            id: "cm28watr",
            name: "Basic Water Resources Engineering",
            subject: "Water Resources",
            accent: "emerald",
            blurb: "12 questions drawn from the Basic Water Resources Engineering bank.",
            questions: [
                {
                    id: "cm28q049",
                    src: "WATE701-00314",
                    text: "In a two dimensional flow, the component of the velocity along the X-axis and the Y-axis are \\( u = ax^2 + bxy \\) and \\( v = bxy + ay^2 \\). The condition for the flow field to be continuous is:",
                    options: [
                        { key: "a", text: "Independent of both the constants \\( (a, b) \\) and the variables \\( (x, y) \\)" },
                        { key: "b", text: "Independent of the constants \\( (a, b) \\) but dependent on the variables \\( (x, y) \\)" },
                        { key: "c", text: "Independent of the variables \\( (x, y) \\) but dependent on the constants \\( (a, b) \\)" },
                        { key: "d", text: "dependent on both the constants \\( (a, b) \\) and the variables \\( (x, y) \\)" }
                    ],
                    answer: "a",
                    explanation: "Continuity: ∂u/∂x + ∂v/∂y = 0. u = ax² + bxy, so ∂u/∂x = 2ax + by. v = bxy + ay², so ∂v/∂y = bx + 2ay. So sum: (2ax + by) + (bx + 2ay) = (2a + b)x + (b + 2a)y = (2a + b)(x + y). For this to be zero for all x and y, we need 2a + b = 0. So the condition is dependent only on the constants a and b, and not on x and y. So it is independent of variables (x,y) but dependent on constants (a,b). the option \"Independent of the variables \\( (x, y) \\) but dependent on the constants \\( (a, b) \\)\" is correct."
                },
                {
                    id: "cm28q050",
                    src: "WATE701-00315",
                    text: "Which of the following is NOT a type of force considered in the Navier-Stokes equation?",
                    options: [
                        { key: "a", text: "Gravity force" },
                        { key: "b", text: "Surface tension force" },
                        { key: "c", text: "Pressure force" },
                        { key: "d", text: "Viscous force" }
                    ],
                    answer: "b",
                    explanation: "The Navier-Stokes equation for fluid flow considers gravity force (body force), pressure force, and viscous force. Surface tension force is not directly included in the Navier-Stokes equation; it is usually considered as a boundary condition or in specific cases like capillary flows."
                },
                {
                    id: "cm28q051",
                    src: "WATE701-00316",
                    text: "Which of the following equations is a result of momentum conservation for inviscid steady flows?",
                    options: [
                        { key: "a", text: "Bernoulli’s equation" },
                        { key: "b", text: "Navier-Stokes equation" },
                        { key: "c", text: "Euler’s equation" },
                        { key: "d", text: "First law of thermodynamics" }
                    ],
                    answer: "c",
                    explanation: "Euler's equation is derived from the momentum conservation equation for inviscid flows (where viscous forces are neglected). Bernoulli's equation is derived from Euler's equation for steady, incompressible flow along a streamline."
                },
                {
                    id: "cm28q052",
                    src: "WATE701-00317",
                    text: "The Bernoulli’s equation in fluid dynamics is valid for ______.",
                    options: [
                        { key: "a", text: "Compressible flows" },
                        { key: "b", text: "Transient flows" },
                        { key: "c", text: "Viscous flows" },
                        { key: "d", text: "Continuous flows" }
                    ],
                    answer: "d",
                    explanation: "Bernoulli's equation is valid for steady, incompressible, inviscid (negligible viscosity) flow along a streamline. Among the options, 'Continuous flows' is the closest, as it implies the flow is continuous and smooth. It is not valid for compressible, transient, or viscous flows in its standard form."
                },
                {
                    id: "cm28q053",
                    src: "WATE701-00318",
                    text: "A water flows through a pipe at a velocity 2 m/s. The pressure gauge reading is 2 bar. The datum head is given to be 2 m. Find the piezometric head. Assume all. Bernoulli’s assumptions, Density of water = \\( 1000 \\text{kg/m}^3 \\), \\( g = 9.8 \\text{m/s}^2 \\).",
                    options: [
                        { key: "a", text: "20.4 m" },
                        { key: "b", text: "22.4 m" },
                        { key: "c", text: "22.6 m" },
                        { key: "d", text: "20.6 m" }
                    ],
                    answer: "a",
                    explanation: "Piezometric head = pressure head + datum head. Pressure = 2 bar = 2 * 10^5 Pa. Pressure head = p/(ρg) = (2e5) / (1000 * 9.8) = 200000 / 9800 = 20.408 m. Datum head = 2 m. So piezometric head = 20.408 + 2 = 22.408 m ≈ 22.4 m. So the option 22.4 m."
                },
                {
                    id: "cm28q054",
                    src: "WATE701-00319",
                    text: "The velocity of a point in a flow is",
                    options: [
                        { key: "a", text: "along the streamline" },
                        { key: "b", text: "tangent to the streamline" },
                        { key: "c", text: "along the pathline" },
                        { key: "d", text: "tangent to the pathline" }
                    ],
                    answer: "b",
                    explanation: "At any point in a flow, the velocity vector is tangent to the streamline at that point."
                },
                {
                    id: "cm28q055",
                    src: "WATE701-00320",
                    text: "Which of the following is correct?",
                    options: [
                        { key: "a", text: "A streamline can intersect itself and two streamlines can cross" },
                        { key: "b", text: "A streamline cannot intersect itself but two streamlines can cross" },
                        { key: "c", text: "A streamline cannot intersect itself and two streamlines cannot cross" },
                        { key: "d", text: "A streamline can intersect itself but two streamlines cannot cross" }
                    ],
                    answer: "c",
                    explanation: "Streamlines cannot intersect each other because at the point of intersection, there would be two different velocity vectors, which is not possible. Also, a streamline cannot intersect itself for the same reason."
                },
                {
                    id: "cm28q056",
                    src: "WATE701-00321",
                    text: "The streamlines of the particles in a flow are recorded. If the streamline distribution remain the same even after sometime, what type of flow can be?",
                    options: [
                        { key: "a", text: "unsteady" },
                        { key: "b", text: "uniform" },
                        { key: "c", text: "non-uniform" },
                        { key: "d", text: "steady" }
                    ],
                    answer: "d",
                    explanation: "In steady flow, the streamlines do not change with time. So if the streamline pattern remains the same over time, the flow is steady."
                },
                {
                    id: "cm28q057",
                    src: "WATE701-00322",
                    text: "If the streamlines of the particles in a flow are parallel to each other, what type of flow can it be?",
                    options: [
                        { key: "a", text: "uniform" },
                        { key: "b", text: "steady" },
                        { key: "c", text: "unsteady" },
                        { key: "d", text: "non-uniform" }
                    ],
                    answer: "a",
                    explanation: "If streamlines are parallel, it indicates that the velocity is constant in space at a given time, which is characteristic of uniform flow. It can be steady or unsteady, but the option 'uniform' is correct."
                },
                {
                    id: "cm28q058",
                    src: "WATE701-00323",
                    text: "The path taken by the smoke coming out of a chimney (in concentric circles) represents a",
                    options: [
                        { key: "a", text: "pathline" },
                        { key: "b", text: "streakline" },
                        { key: "c", text: "streamline" },
                        { key: "d", text: "streamtube" }
                    ],
                    answer: "b",
                    explanation: "The smoke pattern from a chimney shows the path of particles that passed through a fixed point (the chimney outlet) over time, which is a streakline."
                },
                {
                    id: "cm28q059",
                    src: "WATE701-00324",
                    text: "If a liquid enters a pipe of diameter \\( d \\) with a velocity \\( v \\), what will it’s velocity at the exit if the diameter reduces to \\( 0.5d \\)?",
                    options: [
                        { key: "a", text: "\\( v \\)" },
                        { key: "b", text: "\\( 0.5v \\)" },
                        { key: "c", text: "\\( 4v \\)" },
                        { key: "d", text: "\\( 2v \\)" }
                    ],
                    answer: "c",
                    explanation: "By continuity, A1 v1 = A2 v2. A1 = πd²/4, A2 = π(0.5d)²/4 = πd²/16. So (πd²/4) * v = (πd²/16) * v2 =&gt; v2 = (πd²/4 * v) * (16/(πd²)) = 4v."
                },
                {
                    id: "cm28q060",
                    src: "WATE701-00325",
                    text: "Which method is used exclusively in fluid mechanics?",
                    options: [
                        { key: "a", text: "Lagrangian method" },
                        { key: "b", text: "both Lagrangian and Eulerian methods" },
                        { key: "c", text: "Neither Lagrangian nor Eulerian method" },
                        { key: "d", text: "Eulerian method" }
                    ],
                    answer: "d",
                    explanation: "In fluid mechanics, the Eulerian method is commonly used because it focuses on specific points in space rather than tracking individual particles."
                }
            ]
        },
        {
            id: "cm28hydr",
            name: "Hydropower",
            subject: "Hydropower",
            accent: "cyan",
            blurb: "9 questions drawn from the Hydropower bank.",
            questions: [
                {
                    id: "cm28q061",
                    src: "HYDR626-00252",
                    text: "What device is placed in front of head regulator for silt removal?",
                    options: [
                        { key: "a", text: "Silt Excluder" },
                        { key: "b", text: "Weir" },
                        { key: "c", text: "Silt Extractor" },
                        { key: "d", text: "Barrage" }
                    ],
                    answer: "a",
                    explanation: "A silt excluder is a structure placed in front of the head regulator to prevent silt from entering the canal by diverting it away."
                },
                {
                    id: "cm28q062",
                    src: "HYDR626-00253",
                    text: "Which device is used for silt removal after it enters the canal?",
                    options: [
                        { key: "a", text: "Silt Excluder" },
                        { key: "b", text: "Silt Extractor" },
                        { key: "c", text: "Weir" },
                        { key: "d", text: "Barrage" }
                    ],
                    answer: "b",
                    explanation: "A silt extractor is a device used to remove silt after it has already entered the canal system."
                },
                {
                    id: "cm28q063",
                    src: "HYDR626-00254",
                    text: "What are the types of sediment load?",
                    options: [
                        { key: "a", text: "Bedload and Suspended load" },
                        { key: "b", text: "Bedload and Dissolved load" },
                        { key: "c", text: "Bedload, Dissolved and Suspended load" },
                        { key: "d", text: "Suspended load and Dissolved load" }
                    ],
                    answer: "c",
                    explanation: "Sediment load in a river is classified into three types: bed load (rolling along the bed), suspended load (carried in the water column), and dissolved load (chemically dissolved in the water)."
                },
                {
                    id: "cm28q064",
                    src: "HYDR626-00255",
                    text: "The basic mechanism behind the phenomenon of sediment transport is ______.",
                    options: [
                        { key: "a", text: "drag force opposite to direction of the flow" },
                        { key: "b", text: "free motion of the sediment particles" },
                        { key: "c", text: "force exerted by water vertically" },
                        { key: "d", text: "drag force in the direction of the flow" }
                    ],
                    answer: "d",
                    explanation: "Sediment transport is primarily initiated and sustained by the drag force exerted by the flowing water on the sediment particles, which acts in the direction of the flow."
                },
                {
                    id: "cm28q065",
                    src: "HYDR626-00256",
                    text: "On increasing velocity beyond threshold stage of motion, bed develops ______ shape.",
                    options: [
                        { key: "a", text: "Dunes with ripples" },
                        { key: "b", text: "Low-amplitude ripples" },
                        { key: "c", text: "Sand dunes" },
                        { key: "d", text: "Flat surface" }
                    ],
                    answer: "a",
                    explanation: "As flow velocity increases beyond the threshold of motion, the sediment bed typically develops a sequence of bedforms, starting with ripples and progressing to dunes."
                },
                {
                    id: "cm28q066",
                    src: "HYDR626-00257",
                    text: "Settling basin is located in the canal at",
                    options: [
                        { key: "a", text: "Upstream of Gravel trap" },
                        { key: "b", text: "Downstream of gravel trap" },
                        { key: "c", text: "Anywhere" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "b",
                    explanation: "A gravel trap is designed to remove coarse material first. The settling basin, which removes finer sediments, is located downstream of the gravel trap."
                },
                {
                    id: "cm28q067",
                    src: "HYDR626-00258",
                    text: "The settling basin are designed to settle",
                    options: [
                        { key: "a", text: "Coarse material" },
                        { key: "b", text: "Suspended material" },
                        { key: "c", text: "Both (a) and (b)" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "b",
                    explanation: "Settling basins are specifically designed to allow fine suspended particles to settle out of the water by reducing flow velocity."
                },
                {
                    id: "cm28q068",
                    src: "HYDR626-00259",
                    text: "Which of the following design criteria are important for design of settling basin",
                    options: [
                        { key: "a", text: "Optimal removal of sediment" },
                        { key: "b", text: "Efficient flushing" },
                        { key: "c", text: "Settling capacity" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "An effective settling basin must be designed for optimal sediment removal, have sufficient settling capacity (area and volume), and include a mechanism for efficient flushing to remove accumulated sediment."
                },
                {
                    id: "cm28q069",
                    src: "HYDR626-00260",
                    text: "In which zone of settling basin, the transitions from canal to settling zone occurs",
                    options: [
                        { key: "a", text: "Inlet Zone" },
                        { key: "b", text: "Settling Zone" },
                        { key: "c", text: "Outlet zone" },
                        { key: "d", text: "Transition zone" }
                    ],
                    answer: "a",
                    explanation: "The inlet zone is the first part of a settling basin where flow transitions from the canal into the basin. It is designed to distribute flow evenly across the settling zone."
                }
            ]
        },
        {
            id: "cm28irri",
            name: "Irrigation and Drainage",
            subject: "Irrigation",
            accent: "emerald",
            blurb: "10 questions drawn from the Irrigation and Drainage bank.",
            questions: [
                {
                    id: "cm28q070",
                    src: "IRRI951-00289",
                    text: "A recently reclaimed alkaline soil should preferably be sown with a salt resistant crop, like:",
                    options: [
                        { key: "a", text: "Wheat" },
                        { key: "b", text: "cotton" },
                        { key: "c", text: "berseem" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "c",
                    explanation: "Berseem (Egyptian clover) is a salt-tolerant forage crop often used in reclamation programs. It helps improve soil structure and fertility while tolerating the challenging conditions of recently reclaimed land."
                },
                {
                    id: "cm28q071",
                    src: "IRRI951-00290",
                    text: "Point out the incorrect statement, out of the following:",
                    options: [
                        { key: "a", text: "salinity is caused by water-logging" },
                        { key: "b", text: "water logging is not caused by salinity" },
                        { key: "c", text: "salinity subsides, when once the water logging is removed" },
                        { key: "d", text: "none of the above." }
                    ],
                    answer: "b",
                    explanation: "This statement is incorrect. While water-logging is a primary cause of salinity (by raising the water table and bringing salts to the surface), salinity can also cause water-logging by degrading soil structure and reducing infiltration rates, creating a vicious cycle."
                },
                {
                    id: "cm28q072",
                    src: "IRRI951-00291",
                    text: "Pick up the incorrect statement from the following:",
                    options: [
                        { key: "a", text: "intensive irrigation should be avoided in areas susceptible to water-logging" },
                        { key: "b", text: "extensive irrigation should be adopted in areas susceptible to water logging" },
                        { key: "c", text: "lift irrigation can help alleviate water-logging susceptibilities" },
                        { key: "d", text: "none of the above" }
                    ],
                    answer: "b",
                    explanation: "This statement is incorrect. \"Extensive irrigation\" implies applying water over large areas, which would exacerbate the water-logging problem in susceptible areas. The correct approach is to avoid intensive irrigation and use precise methods."
                },
                {
                    id: "cm28q073",
                    src: "IRRI951-00292",
                    text: "Water-logging of cropped land leads to reduced crop yields, due to:",
                    options: [
                        { key: "a", text: "Ill- aeration of root zone, causing lack of oxygen to plants" },
                        { key: "b", text: "Growth of water-loving plants interfering with the sown crop" },
                        { key: "c", text: "Surrounding of the root zone by the resultant saline water, which extracts, the good water from plant roots by osmosis" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "d",
                    explanation: "Water-logging creates a multitude of problems: anaerobic conditions harm roots, weeds thrive, and it often leads to secondary salinity where osmotic forces can actually pull water out of plant roots."
                },
                {
                    id: "cm28q074",
                    src: "IRRI951-00293",
                    text: "Alkaline soils are best reclaimed by:",
                    options: [
                        { key: "a", text: "Leaching" },
                        { key: "b", text: "Addition of gypsum to soil and leaching" },
                        { key: "c", text: "Addition of gypsum to soil" },
                        { key: "d", text: "Providing good drainage" }
                    ],
                    answer: "b",
                    explanation: "Reclaiming alkaline (sodic) soils requires a two-step process: first, applying a chemical amendment like gypsum to replace sodium ions with calcium ions, and then leaching the replaced sodium out of the root zone with good drainage."
                },
                {
                    id: "cm28q075",
                    src: "IRRI951-00294",
                    text: "Salt affected soil is called?",
                    options: [
                        { key: "a", text: "Saline" },
                        { key: "b", text: "Water Logger" },
                        { key: "c", text: "Both a and b" },
                        { key: "d", text: "None" }
                    ],
                    answer: "a",
                    explanation: "\"Saline soil\" is the specific term for a soil that contains enough soluble salts to negatively impact plant growth. \"Water-logged\" refers to the hydrological condition, though the two often occur together."
                },
                {
                    id: "cm28q076",
                    src: "IRRI951-00295",
                    text: "In Worldwide How Many Percent Lands Water Logged?",
                    options: [
                        { key: "a", text: "12 %" },
                        { key: "b", text: "15 %" },
                        { key: "c", text: "4%" },
                        { key: "d", text: "10%" }
                    ],
                    answer: "d",
                    explanation: "Approximately 10% of the world's irrigated land is affected by water-logging, representing a significant challenge to global food security."
                },
                {
                    id: "cm28q077",
                    src: "IRRI951-00296",
                    text: "Which One Of The Following Deficiency Cause The Yellowing Of Leaves?",
                    options: [
                        { key: "a", text: "Nitrogen" },
                        { key: "b", text: "Phosphorus" },
                        { key: "c", text: "Potassium" },
                        { key: "d", text: "Iron" }
                    ],
                    answer: "a",
                    explanation: "Nitrogen is a mobile nutrient and a key component of chlorophyll. Its deficiency causes chlorosis (yellowing) of the older leaves first, as the plant moves available nitrogen to support new growth."
                },
                {
                    id: "cm28q078",
                    src: "IRRI951-00297",
                    text: "Which type of soils is benefited by using the drainage?",
                    options: [
                        { key: "a", text: "Dry Soils" },
                        { key: "b", text: "Wet Soils" },
                        { key: "c", text: "Black Soils" },
                        { key: "d", text: "Red Soils" }
                    ],
                    answer: "b",
                    explanation: "Drainage systems are specifically installed to remove excess water from wet, waterlogged soils, making them suitable for agriculture and improving crop yields."
                },
                {
                    id: "cm28q079",
                    src: "IRRI951-00298",
                    text: "In what chemical ways does tile drainage help in plant growth?",
                    options: [
                        { key: "a", text: "Decreases Alkalinity of Soils" },
                        { key: "b", text: "Increases salinity of Soils" },
                        { key: "c", text: "Reduces and Removes Toxic Substances" },
                        { key: "d", text: "Increases Nitrogen" }
                    ],
                    answer: "c",
                    explanation: "By lowering the water table, tile drainage helps leach excess salts and other toxic substances (like reduced iron and manganese) out of the root zone, creating a healthier chemical environment for plants."
                }
            ]
        },
        {
            id: "cm28tran",
            name: "Transportation",
            subject: "Transportation",
            accent: "rose",
            blurb: "11 questions drawn from the Transportation bank.",
            questions: [
                {
                    id: "cm28q080",
                    src: "TRAN808-00295",
                    text: "Temperature stresses in the pavement are caused due to the variation of temperature in the?",
                    options: [
                        { key: "a", text: "Cement" },
                        { key: "b", text: "Subgrade" },
                        { key: "c", text: "Sub-base" },
                        { key: "d", text: "Slab" }
                    ],
                    answer: "d",
                    explanation: "In rigid pavements, temperature variations cause the concrete slab to expand or contract, leading to the development of internal stresses."
                },
                {
                    id: "cm28q081",
                    src: "TRAN808-00296",
                    text: "What are the type of stresses induced due to the temperature change in the pavement?",
                    options: [
                        { key: "a", text: "Warping stress and frictional stress" },
                        { key: "b", text: "Frictional stress and thermal stress" },
                        { key: "c", text: "Warping stress and thermal stress" },
                        { key: "d", text: "Thermal stress and temporal stress" }
                    ],
                    answer: "a",
                    explanation: "In concrete pavements, temperature changes cause two main stresses: warping stress (due to temperature differential between top and bottom of the slab) and frictional stress (due to restriction of slab movement by the subbase)."
                },
                {
                    id: "cm28q082",
                    src: "TRAN808-00297",
                    text: "When does the warping of the cement concrete slab occur?",
                    options: [
                        { key: "a", text: "Temperature differential exceeds 30°" },
                        { key: "b", text: "Different temperature on layers" },
                        { key: "c", text: "Same temperature on layers" },
                        { key: "d", text: "Temperature differential is below 10°" }
                    ],
                    answer: "b",
                    explanation: "Warping occurs due to a temperature gradient through the depth of the slab. The top and bottom of the slab are at different temperatures, causing it to curl upwards or downwards."
                },
                {
                    id: "cm28q083",
                    src: "TRAN808-00298",
                    text: "Frictional stresses are developed due to",
                    options: [
                        { key: "a", text: "Relative movement of the base" },
                        { key: "b", text: "Daily temperature variation" },
                        { key: "c", text: "Relative movement of the slab" },
                        { key: "d", text: "Seasonal temperature variation" }
                    ],
                    answer: "c",
                    explanation: "Frictional stress develops at the interface between the concrete slab and the underlying base/subgrade due to the slab's expansion and contraction restrained by friction."
                },
                {
                    id: "cm28q084",
                    src: "TRAN808-00299",
                    text: "Which temperature stress is generally considered in the design?",
                    options: [
                        { key: "a", text: "Frictional stress" },
                        { key: "b", text: "Interior stress" },
                        { key: "c", text: "Corner stress" },
                        { key: "d", text: "Edge stress" }
                    ],
                    answer: "d",
                    explanation: "While all are important, edge stress (a combination of load and temperature-induced warping stress) is often the critical stress considered in the design of rigid pavement thickness."
                },
                {
                    id: "cm28q085",
                    src: "TRAN808-00300",
                    text: "How are the traffic volume considerations in the design chart developed by IRC denoted as?",
                    options: [
                        { key: "a", text: "Numeric" },
                        { key: "b", text: "Alphabets" },
                        { key: "c", text: "Alphanumeric" },
                        { key: "d", text: "Percentages" }
                    ],
                    answer: "a",
                    explanation: "IRC (Indian Road Congress) design charts typically use numeric classifications for traffic volume, such as million standard axles (msa)."
                },
                {
                    id: "cm28q086",
                    src: "TRAN808-00301",
                    text: "Which of the below is not a classification of traffic condition that is used in the CBR design chart?",
                    options: [
                        { key: "a", text: "Light traffic 3175 kg" },
                        { key: "b", text: "Normal traffic 2500 kg" },
                        { key: "c", text: "Medium traffic 4082 kg" },
                        { key: "d", text: "Heavy traffic 5433 kg" }
                    ],
                    answer: "b",
                    explanation: "Standard traffic classifications in CBR charts are Light (&lt;3 ton standard axle), Medium (3-10 ton), and Heavy (&gt;10 ton). 'Normal traffic 2500 kg' is not a standard classification among the options provided."
                },
                {
                    id: "cm28q087",
                    src: "TRAN808-00302",
                    text: "Determine the thickness of the pavement if the pavement is subjected to medium traffic and the CBR value is obtained as 7%.",
                    options: [
                        { key: "a", text: "33 cm" },
                        { key: "b", text: "35 cm" },
                        { key: "c", text: "34 cm" },
                        { key: "d", text: "Not specified in options" }
                    ],
                    answer: "c",
                    explanation: "Using the IRC CBR design chart for medium traffic and a CBR of 7%, the corresponding pavement thickness is approximately 34 cm."
                },
                {
                    id: "cm28q088",
                    src: "TRAN808-00303",
                    text: "IRC 37-1984 redesigned the CBR charts based on ______.",
                    options: [
                        { key: "a", text: "Wheel loads" },
                        { key: "b", text: "Cumulative load" },
                        { key: "c", text: "Design traffic" },
                        { key: "d", text: "Cumulative standard axle" }
                    ],
                    answer: "d",
                    explanation: "The revised IRC guidelines shifted the design basis from wheel load to the cumulative number of standard axle load repetitions (msa) the pavement must endure over its design life."
                },
                {
                    id: "cm28q089",
                    src: "TRAN808-00304",
                    text: "______ is used to test the resistance value or R-value of the material ______.",
                    options: [
                        { key: "a", text: "Stabilometer" },
                        { key: "b", text: "Cohesionneter" },
                        { key: "c", text: "Penetrometer" },
                        { key: "d", text: "Tribometer" }
                    ],
                    answer: "a",
                    explanation: "The Hveem Stabilometer is a test apparatus used to determine the R-Value of a soil or base material, which is a measure of its resistance to deformation."
                },
                {
                    id: "cm28q090",
                    src: "TRAN808-00306",
                    text: "What type of surface course is provided in a semi-rigid pavement?",
                    options: [
                        { key: "a", text: "None" },
                        { key: "b", text: "Flexible" },
                        { key: "c", text: "Rigid" },
                        { key: "d", text: "Pozzolanic" }
                    ],
                    answer: "b",
                    explanation: "A semi-rigid pavement has a base course stabilized with cementitious materials (semi-rigid layer) but is topped with a conventional flexible (asphalt) surface course."
                }
            ]
        },
        {
            id: "cm28wate",
            name: "Water Supply, Sanitation and Environment",
            subject: "Water Supply",
            accent: "blue",
            blurb: "10 questions drawn from the Water Supply, Sanitation and Environment bank.",
            questions: [
                {
                    id: "cm28q091",
                    src: "WATE813-00277",
                    text: "The uniformity characteristics of sand is expressed in terms of ______",
                    options: [
                        { key: "a", text: "Effective size" },
                        { key: "b", text: "Uniformity coefficient" },
                        { key: "c", text: "Effective size and uniformity coefficient" },
                        { key: "d", text: "Mean velocity" }
                    ],
                    answer: "c",
                    explanation: "The grading of filter sand is described by two parameters: Effective Size (D10) and Uniformity Coefficient (D60/D10)."
                },
                {
                    id: "cm28q092",
                    src: "WATE813-00278",
                    text: "What should you do when spindle of cock continuously slip down and tap does close?",
                    options: [
                        { key: "a", text: "Replace washer" },
                        { key: "b", text: "Re seat the tap" },
                        { key: "c", text: "Replace tab" },
                        { key: "d", text: "Replace packing" }
                    ],
                    answer: "d",
                    explanation: "The packing is a gland material that creates a seal around the spindle. If it wears out, the spindle can slip and the tap (valve) won't close properly. Replacing the packing restores the seal and allows the valve to operate correctly."
                },
                {
                    id: "cm28q093",
                    src: "WATE813-00279",
                    text: "Foot valve is at bottom of...",
                    options: [
                        { key: "a", text: "Delivery pipe" },
                        { key: "b", text: "Suction pipe" },
                        { key: "c", text: "Both a &amp; b" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "b",
                    explanation: "A foot valve is a type of check valve with a strainer, installed at the bottom of a suction pipe. It prevents backflow and prime loss in a pump when the pump is shut off, ensuring water remains in the suction line."
                },
                {
                    id: "cm28q094",
                    src: "WATE813-00280",
                    text: "Which of the following joint is called run lead joint?",
                    options: [
                        { key: "a", text: "Tylon joint" },
                        { key: "b", text: "Shigot and socket joint" },
                        { key: "c", text: "Coupled joint" },
                        { key: "d", text: "Flanged joint" }
                    ],
                    answer: "b",
                    explanation: "A 'run lead joint' is the process of sealing a bell-and-spigot (shigot and socket) joint by pouring molten lead into the joint and then caulking it. 'Shigot' is a common misspelling of 'Spigot'."
                },
                {
                    id: "cm28q095",
                    src: "WATE813-00281",
                    text: "The water supply system means",
                    options: [
                        { key: "a", text: "The entire scheme of collection and disposal of liquid waste" },
                        { key: "b", text: "Construction of reservoirs" },
                        { key: "c", text: "The complete layout from the source of supply to the distribution system" },
                        { key: "d", text: "Construction of canals" }
                    ],
                    answer: "c",
                    explanation: "A water supply system encompasses all components: the source (e.g., river, well), intake, treatment plant, storage reservoirs, pumping stations, and the distribution network (pipes, valves) that delivers water to consumers."
                },
                {
                    id: "cm28q096",
                    src: "WATE813-00282",
                    text: "The suitable layout for a water supply distribution system, for a city of roads of rectangular pattern is",
                    options: [
                        { key: "a", text: "Dead end system" },
                        { key: "b", text: "Ring system" },
                        { key: "c", text: "Radial system" },
                        { key: "d", text: "Grid iron system" }
                    ],
                    answer: "d",
                    explanation: "A grid iron system is ideal for cities with a rectangular road layout. It interconnects all pipelines, eliminating dead ends and ensuring continuous water circulation, which maintains water quality and provides multiple supply routes in case of a break."
                },
                {
                    id: "cm28q097",
                    src: "WATE813-00283",
                    text: "The purpose of providing a balancing reservoir in a water supply distribution system is",
                    options: [
                        { key: "a", text: "take care of fluctuations in the rate of consumption" },
                        { key: "b", text: "equalize pressure in the distribution system" },
                        { key: "c", text: "store adequate quantity of water to meet requirement in case of breakdown of inflow" },
                        { key: "d", text: "store adequate fire fighting reserve" }
                    ],
                    answer: "a",
                    explanation: "A balancing reservoir (or service reservoir) stores treated water. Its primary purpose is to absorb the difference between a nearly constant supply rate from the treatment plant and the highly variable demand rate from consumers throughout the day."
                },
                {
                    id: "cm28q098",
                    src: "WATE813-00285",
                    text: "The equation used commonly for the design of distribution system for water supply is designed by",
                    options: [
                        { key: "a", text: "Manning" },
                        { key: "b", text: "Hazen and Williams" },
                        { key: "c", text: "Darcy" },
                        { key: "d", text: "Kutter" }
                    ],
                    answer: "b",
                    explanation: "The Hazen-Williams equation is an empirical formula widely used for calculating pressure loss and flow in water pipes. It is simpler for water flow calculations compared to the Darcy-Weisbach equation, which is more general."
                },
                {
                    id: "cm28q099",
                    src: "WATE813-00286",
                    text: "For water supply to residences, the service are provided by",
                    options: [
                        { key: "a", text: "Lyc pipes" },
                        { key: "b", text: "lead pipes" },
                        { key: "c", text: "galvanized iron pipes" },
                        { key: "d", text: "cast iron pipes" }
                    ],
                    answer: "c",
                    explanation: "Galvanized Iron (GI) pipes are commonly used for service connections to residences. They are steel pipes coated with zinc to resist corrosion, providing a balance of strength, cost, and durability for smaller diameter supply lines."
                },
                {
                    id: "cm28q100",
                    src: "WATE813-00287",
                    text: "The method which is most widely used for analyzing and designing the pipes of all types of complex water distribution network is",
                    options: [
                        { key: "a", text: "Gun/alent pipe method" },
                        { key: "b", text: "Circle method" },
                        { key: "c", text: "Electric network analyser method" },
                        { key: "d", text: "Hardy-cross method" }
                    ],
                    answer: "d",
                    explanation: "The Hardy-Cross method is an iterative technique for analyzing flow in pipe networks. It balances the flows and head losses in loops until corrections become negligible, making it suitable for complex systems without direct analytical solutions."
                }
            ]
        }
    ]
};

/* Registered lazily — js/civil.js injects this file when the set is opened. */
window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["civil-28"] = CIVIL_MODEL_28;
