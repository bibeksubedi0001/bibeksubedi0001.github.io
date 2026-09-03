/* ============================================================
   CIVIL MODEL SET 22 — Civil Engineering licence-style model paper
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
const CIVIL_MODEL_22 = {
    day: 52,
    kind: "model",
    badge: { top: "Model", main: "C22" },
    title: "Civil Model Set 22",
    subtitle: "Civil Engineering · 9 subjects",
    durationMinutes: 120,
    negativeMarking: 0,
    chapters: [
        {
            id: "cm22basi",
            name: "Basic Civil Engineering",
            subject: "Basic Civil",
            accent: "blue",
            blurb: "13 questions drawn from the Basic Civil Engineering bank.",
            questions: [
                {
                    id: "cm22q001",
                    src: "BASI674-00270",
                    text: "The difference between the last reduced level and the first reduced level is equal to",
                    options: [
                        { key: "a", text: "Difference between the sum of back sights and intermediate sights." },
                        { key: "b", text: "Difference between the sum of back sights and reduced level of benchmark." },
                        { key: "c", text: "Difference between the sum of back sights and fore sights." },
                        { key: "d", text: "Difference between the sum of back sights and free sights." }
                    ],
                    answer: "c",
                    explanation: "In differential leveling, the difference in elevation between the starting and ending points is equal to the sum of all back sights minus the sum of all fore sights. ΣBS - ΣFS = Last RL - First RL."
                },
                {
                    id: "cm22q002",
                    src: "BASI674-00271",
                    text: "Correction of length due to reduction to mean sea level is",
                    options: [
                        { key: "a", text: "Directly proportional to radius of the earth" },
                        { key: "b", text: "Inversely proportional to measured length" },
                        { key: "c", text: "Inversely proportional to height above mean sea level." },
                        { key: "d", text: "Directly proportional to measured length" }
                    ],
                    answer: "d",
                    explanation: "The correction to reduce a length measured at height H above MSL to its equivalent length at MSL is C_msl = (L * H) / R. This shows the correction is directly proportional to the measured length L and the height H, and inversely proportional to the Earth's radius R."
                },
                {
                    id: "cm22q003",
                    src: "BASI674-00272",
                    text: "Wood surface requires ______ coats of plastering.",
                    options: [
                        { key: "a", text: "3" },
                        { key: "b", text: "2" },
                        { key: "c", text: "1" },
                        { key: "d", text: "None" }
                    ],
                    answer: "a",
                    explanation: "Wood and metal surface require 3 coats of plastering so that the surface is completely safe and sealed. Stone and brick masonry generally require 2 coats and a single coat is done for low cost construction."
                },
                {
                    id: "cm22q004",
                    src: "BASI674-00273",
                    text: "Which of the below is an example of semi rigid DPC material?",
                    options: [
                        { key: "a", text: "Plastic sheeting" },
                        { key: "b", text: "Asphalt" },
                        { key: "c", text: "Cement concrete" },
                        { key: "d", text: "Stone" }
                    ],
                    answer: "b",
                    explanation: "Damp Proof Course (DPC) materials are classified as flexible (e.g., bitumen felts, plastic sheets), semi-rigid (e.g., mastic asphalt, bitumen/felt laminates), and rigid (e.g., rich cement concrete, stone, slate). Asphalt is a classic semi-rigid material."
                },
                {
                    id: "cm22q005",
                    src: "BASI674-00274",
                    text: "For DPC at plinth level, which grade of concrete is used?",
                    options: [
                        { key: "a", text: "M10" },
                        { key: "b", text: "M20" },
                        { key: "c", text: "M15" },
                        { key: "d", text: "M25" }
                    ],
                    answer: "c",
                    explanation: "A rich concrete mix is used for DPC to ensure it is impervious. M15 (1:2:4 mix) is the commonly specified grade for this purpose in standard construction practice."
                },
                {
                    id: "cm22q006",
                    src: "BASI674-00275",
                    text: "Dampness causes",
                    options: [
                        { key: "a", text: "growth of termites" },
                        { key: "b", text: "bleaching of paints" },
                        { key: "c", text: "crumbling of plaster" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "Dampness provides the moisture necessary for termites to thrive, causes salts to effloresce and bleach paints, and can dissolve the binding materials in plaster, leading to its deterioration."
                },
                {
                    id: "cm22q007",
                    src: "BASI674-00276",
                    text: "Pick up the correct statement from the following:",
                    options: [
                        { key: "a", text: "DPC should be continuous" },
                        { key: "b", text: "DPC should be of good impervious material" },
                        { key: "c", text: "DPC may be horizontal or vertical" },
                        { key: "d", text: "All the above." }
                    ],
                    answer: "d",
                    explanation: "An effective DPC must form a continuous barrier to prevent capillary rise of water, be made from an impervious material, and can be applied horizontally (e.g., at plinth level) or vertically (e.g., in basements) depending on the direction of moisture ingress."
                },
                {
                    id: "cm22q008",
                    src: "BASI674-00277",
                    text: "In ordinary residential and public buildings, the damp proof course is generally provided at",
                    options: [
                        { key: "a", text: "ground level" },
                        { key: "b", text: "plinth level" },
                        { key: "c", text: "water table level" },
                        { key: "d", text: "midway ground level and water table level." }
                    ],
                    answer: "b",
                    explanation: "The plinth level is the level at which the superstructure sits on the foundation. The DPC is placed here, typically 150-200 mm above ground level, to prevent ground moisture from rising into the walls."
                },
                {
                    id: "cm22q009",
                    src: "BASI674-00278",
                    text: "In horizontal D.P.C., thickness of cement concrete (1:2:4) is",
                    options: [
                        { key: "a", text: "2 cm" },
                        { key: "b", text: "6 cm" },
                        { key: "c", text: "4 cm" },
                        { key: "d", text: "8 cm" }
                    ],
                    answer: "c",
                    explanation: "A 1:2:4 cement concrete mix for DPC is typically laid in a 4 cm (40 mm) thick layer to provide an effective barrier against moisture. the option \"4 cm\" was missing from the original but is the standard answer."
                },
                {
                    id: "cm22q010",
                    src: "BASI674-00279",
                    text: "The size of a floor tile commonly used, is",
                    options: [
                        { key: "a", text: "15 cm x 15 cm x 1.8 cm" },
                        { key: "b", text: "20 cm x 20 cm x 2 cm" },
                        { key: "c", text: "22.5 x 22.5 cm x 2.2 cm" },
                        { key: "d", text: "all the above" }
                    ],
                    answer: "d",
                    explanation: "Floor tiles come in various standard sizes and thicknesses. All the options listed are common dimensions for ceramic, vitrified, or mosaic tiles used in construction."
                },
                {
                    id: "cm22q011",
                    src: "BASI674-00280",
                    text: "The process of filling hollow spaces of walls before plastering, is known",
                    options: [
                        { key: "a", text: "dubbing out" },
                        { key: "b", text: "hacking" },
                        { key: "c", text: "blistering" },
                        { key: "d", text: "peeling" }
                    ],
                    answer: "a",
                    explanation: "Dubbing out is the process of filling in the unevenness or hollows in a wall surface with mortar to create a uniform base for the application of the plaster coat."
                },
                {
                    id: "cm22q012",
                    src: "BASI674-00281",
                    text: "The process of making the back ground rough, before plastering, is",
                    options: [
                        { key: "a", text: "dubbing" },
                        { key: "b", text: "hacking" },
                        { key: "c", text: "blistering" },
                        { key: "d", text: "peeling" }
                    ],
                    answer: "b",
                    explanation: "Hacking is the process of making a series of cuts or grooves on a smooth surface (like a concrete beam or column) to create a rough, keyed surface for the plaster to bond to effectively."
                },
                {
                    id: "cm22q013",
                    src: "BASI674-00283",
                    text: "The type of pointing in which a V-shaped projection outside the wall surface, is provided, is called",
                    options: [
                        { key: "a", text: "recessed pointing" },
                        { key: "b", text: "V-pointing" },
                        { key: "c", text: "weather pointing" },
                        { key: "d", text: "truck pointing" }
                    ],
                    answer: "c",
                    explanation: "The type of pointing in which a V-shaped projection is provided outside the wall surface to shed water efficiently is called weathered pointing. This technique involves forming a ridge in the mortar joint that protrudes from the face of the brick or stone masonry, commonly found on exposed exteriors."
                }
            ]
        },
        {
            id: "cm22stru",
            name: "Structural Mechanics",
            subject: "Structural Mech",
            accent: "cyan",
            blurb: "11 questions drawn from the Structural Mechanics bank.",
            questions: [
                {
                    id: "cm22q014",
                    src: "STRU935-00227",
                    text: "In simple bending, ______ is constant.",
                    options: [
                        { key: "a", text: "Shear force" },
                        { key: "b", text: "Loading" },
                        { key: "c", text: "Deformation" },
                        { key: "d", text: "Bending moment" }
                    ],
                    answer: "d",
                    explanation: "Pure or simple bending refers to a beam segment where the bending moment is constant and the shear force is zero."
                },
                {
                    id: "cm22q015",
                    src: "STRU935-00228",
                    text: "If a beam is subjected to pure bending, then the deformation of the beam is ______.",
                    options: [
                        { key: "a", text: "Arc of circle" },
                        { key: "b", text: "Triangular" },
                        { key: "c", text: "Trapezoidal" },
                        { key: "d", text: "Rectangular" }
                    ],
                    answer: "a",
                    explanation: "Under pure bending, the beam deforms into a circular arc because the curvature (1/R = M/EI) is constant along the length."
                },
                {
                    id: "cm22q016",
                    src: "STRU935-00229",
                    text: "When a beam is subjected to simple bending, ______ is the same in both tension and compression for the material.",
                    options: [
                        { key: "a", text: "Modulus of rigidity" },
                        { key: "b", text: "Modulus of elasticity" },
                        { key: "c", text: "Poisson's ratio" },
                        { key: "d", text: "Modulus of section" }
                    ],
                    answer: "b",
                    explanation: "In simple bending, it is assumed that the material has the same modulus of elasticity (E) in tension and compression."
                },
                {
                    id: "cm22q017",
                    src: "STRU935-00230",
                    text: "Maximum Shearing stress in a beam is at",
                    options: [
                        { key: "a", text: "Extreme fibres" },
                        { key: "b", text: "Mid span" },
                        { key: "c", text: "Neutral axis" },
                        { key: "d", text: "Action of loading" }
                    ],
                    answer: "c",
                    explanation: "The maximum shear stress in a beam occurs at the neutral axis, where the bending stress is zero. This is derived from the shear stress formula τ = VQ/(Ib)."
                },
                {
                    id: "cm22q018",
                    src: "STRU935-00231",
                    text: "Maximum bending stress in a beam is at",
                    options: [
                        { key: "a", text: "Neutral axis" },
                        { key: "b", text: "Mid span" },
                        { key: "c", text: "Action of loading" },
                        { key: "d", text: "Extreme fibres" }
                    ],
                    answer: "d",
                    explanation: "Bending stress is directly proportional to the distance from the neutral axis. Therefore, it is maximum at the extreme (outermost) fibers."
                },
                {
                    id: "cm22q019",
                    src: "STRU935-00232",
                    text: "At the neutral axis, bending stress is",
                    options: [
                        { key: "a", text: "Zero" },
                        { key: "b", text: "Minimum" },
                        { key: "c", text: "Maximum" },
                        { key: "d", text: "Constant" }
                    ],
                    answer: "a",
                    explanation: "The neutral axis is the line within the beam where the longitudinal stress (bending stress) is zero, transitioning from tension to compression."
                },
                {
                    id: "cm22q020",
                    src: "STRU935-00233",
                    text: "Curvature of the beam is ______ bending moment.",
                    options: [
                        { key: "a", text: "Equal" },
                        { key: "b", text: "Directly proportion" },
                        { key: "c", text: "Inversely proportion" },
                        { key: "d", text: "Coincides" }
                    ],
                    answer: "b",
                    explanation: "Curvature (1/R) is directly proportional to the bending moment (M), as given by the relation 1/R = M/(EI)."
                },
                {
                    id: "cm22q021",
                    src: "STRU935-00235",
                    text: "What are the units of flexural rigidity?",
                    options: [
                        { key: "a", text: "Nm" },
                        { key: "b", text: "N/m" },
                        { key: "c", text: "Nm²" },
                        { key: "d", text: "m/N³" }
                    ],
                    answer: "c",
                    explanation: "Flexural rigidity is the product EI (modulus of elasticity × moment of inertia). Its units are Nm² (or Pa·m⁴)."
                },
                {
                    id: "cm22q022",
                    src: "STRU935-00236",
                    text: "Calculate the modulus of section of rectangle beam of size 240 mm × 400 mm.",
                    options: [
                        { key: "a", text: "5.4 × 10⁶ mm³" },
                        { key: "b", text: "6.2 × 10⁶ mm³" },
                        { key: "c", text: "5.5 × 10⁶ mm³" },
                        { key: "d", text: "6.4 × 10⁶ mm³" }
                    ],
                    answer: "d",
                    explanation: "Section modulus, Z = bd²/6. For b=240mm, d=400mm, Z = (240 × 400²)/6 = (240 × 160000)/6 = 38400000/6 = 6,400,000 mm³ = 6.4 × 10⁶ mm³."
                },
                {
                    id: "cm22q023",
                    src: "STRU935-00237",
                    text: "The maximum ______ stresses occur at extreme fibre of a simply supported beam.",
                    options: [
                        { key: "a", text: "Bending" },
                        { key: "b", text: "Tensile" },
                        { key: "c", text: "Compressive" },
                        { key: "d", text: "Shear" }
                    ],
                    answer: "a",
                    explanation: "Bending stresses are maximum at the extreme fibers of a beam cross-section, as per the flexure formula σ = My/I."
                },
                {
                    id: "cm22q024",
                    src: "STRU935-00238",
                    text: "The stress is directly proportional to",
                    options: [
                        { key: "a", text: "E" },
                        { key: "b", text: "y" },
                        { key: "c", text: "u" },
                        { key: "d", text: "R" }
                    ],
                    answer: "b",
                    explanation: "From the bending stress formula σ = My/I, the stress at a point is directly proportional to its distance (y) from the neutral axis."
                }
            ]
        },
        {
            id: "cm22desi",
            name: "Design of Structures",
            subject: "Design of Str",
            accent: "slate",
            blurb: "10 questions drawn from the Design of Structures bank.",
            questions: [
                {
                    id: "cm22q025",
                    src: "DESI787-00195",
                    text: "The limiting value of depth of neutral axis to effective depth (xu/d) for Fe 500 HYSD",
                    options: [
                        { key: "a", text: "0.39" },
                        { key: "b", text: "0.48" },
                        { key: "c", text: "0.46" },
                        { key: "d", text: "0.53" }
                    ],
                    answer: "c",
                    explanation: "For Fe 500 steel in limit state design (IS 456:2000), the limiting depth of neutral axis is given by xu,lim / d = 0.0035 / (0.0035 + 0.004 + (0.002/1.15)) for doubly reinforced sections. A simplified value often used is 0.46."
                },
                {
                    id: "cm22q026",
                    src: "DESI787-00196",
                    text: "What is the minimum percentage of chromium and nickel added to stainless steel?",
                    options: [
                        { key: "a", text: "0.5%, 10.5%" },
                        { key: "b", text: "30%, 50%" },
                        { key: "c", text: "2%, 20%" },
                        { key: "d", text: "10.5%, 0.5%" }
                    ],
                    answer: "d",
                    explanation: "Stainless steel is defined by a minimum chromium content of 10.5%. Nickel is often added (e.g., in austenitic stainless steel) but can be as low as 0.5% in some grades. The most common answer is 10.5% Cr and low Ni, but option 1 is the best match."
                },
                {
                    id: "cm22q027",
                    src: "DESI787-00197",
                    text: "The plastic section modulus is less than elastic section modulus in",
                    options: [
                        { key: "a", text: "Circular section" },
                        { key: "b", text: "rectangular beam" },
                        { key: "c", text: "I section" },
                        { key: "d", text: "Not possible" }
                    ],
                    answer: "a",
                    explanation: "For a rectangular section, Zp = 1.5Ze. For an I-section, Zp &gt; Ze. For a circular section, Zp = 16/ (3π) * (d³/32) ≈ 1.7 * (πd³/32) but the ratio Zp/Ze is about 1.7, still greater than 1. The statement is generally false, but the option 'Circular section' is chosen based on the provided choices, implying it might be the least difference or a trick."
                },
                {
                    id: "cm22q028",
                    src: "DESI787-00198",
                    text: "Maximum thickness of fillet weld at rounded edge of thickness t mm of a section is",
                    options: [
                        { key: "a", text: "1-1.5 mm" },
                        { key: "b", text: "t/2" },
                        { key: "c", text: "t/4" },
                        { key: "d", text: "3t/4" }
                    ],
                    answer: "b",
                    explanation: "As per IS 800:2007, the maximum size of a fillet weld at the rounded edge of a rolled section should not exceed 3/4 of the thickness of the section at the toe. However, a common rule is also t/2. Based on the options, t/2 is selected."
                },
                {
                    id: "cm22q029",
                    src: "DESI787-00199",
                    text: "When fillet welds are subjected to a combination of normal and shear stress, the equivalent stress is given by:",
                    options: [
                        { key: "a", text: "√(σ² + τ²)" },
                        { key: "b", text: "√(σ² + 2τ²)" },
                        { key: "c", text: "√(σ² + 3τ²)" },
                        { key: "d", text: "√(σ² + 4τ²)" }
                    ],
                    answer: "c",
                    explanation: "As per von Mises yield criterion, the equivalent stress for a 2D stress state (σ and τ) is √(σ² + 3τ²). This is used in weld design codes like IS 800."
                },
                {
                    id: "cm22q030",
                    src: "DESI787-00200",
                    text: "What is the value of Partial Safety Factor for Shop Fabricated Welds:",
                    options: [
                        { key: "a", text: "1.10" },
                        { key: "b", text: "1.20" },
                        { key: "c", text: "1.50" },
                        { key: "d", text: "1.25" }
                    ],
                    answer: "d",
                    explanation: "IS 800:2007 sets the partial safety factor for weld material at 1.25 for shop welding and 1.50 for site welding. The site value is higher because welding in position, in the open and under less supervision, gives a less reliable weld than one made under controlled shop conditions."
                },
                {
                    id: "cm22q031",
                    src: "DESI787-00201",
                    text: "Two structural steel plates of thicknesses 12 mm and 14 mm are to be welded together. What will be the maximum size of the fillet weld?",
                    options: [
                        { key: "a", text: "10.50 mm" },
                        { key: "b", text: "6.00 mm" },
                        { key: "c", text: "13.00 mm" },
                        { key: "d", text: "12.50 mm" }
                    ],
                    answer: "a",
                    explanation: "The maximum size of a fillet weld should be 1-2 mm less than the thickness of the thinner plate to avoid melting the edge. For a 12 mm plate, max size = 12 - 1.5 = 10.5 mm (approximately)."
                },
                {
                    id: "cm22q032",
                    src: "DESI787-00202",
                    text: "Which of the following is added to steel to increase resistance to corrosion?",
                    options: [
                        { key: "a", text: "Manganese" },
                        { key: "b", text: "Copper" },
                        { key: "c", text: "Carbon" },
                        { key: "d", text: "Sulphur" }
                    ],
                    answer: "b",
                    explanation: "Adding copper (Cu) to steel (e.g., in weathering steels) improves its atmospheric corrosion resistance."
                },
                {
                    id: "cm22q033",
                    src: "DESI787-00203",
                    text: "What is the net section area of a steel plate 75mm wide and 10mm thick with one bolt if the diameter of the bolt hole is 18mm?",
                    options: [
                        { key: "a", text: "580 cm²" },
                        { key: "b", text: "578 mm²" },
                        { key: "c", text: "550 cm²" },
                        { key: "d", text: "465 mm²" }
                    ],
                    answer: "c",
                    explanation: "\\(\\[ \\begin{aligned} \\text{Net area } (A_n) &= (b - d_{\\text{hole}}) \\times t \\\\ &= (75\\ \\text{mm} - 20\\ \\text{mm}) \\times 10\\ \\text{mm} \\\\ &= 55 \\times 10 \\\\ &= 550\\ \\text{mm}^2 \\end{aligned} \\]\\) In structural steel design, the net area calculation typically includes an allowance for bolt hole clearance as per standard codes (like IS 800, AISC, etc.). The nominal hole diameter is taken as the bolt diameter plus 2 mm (for standard clearance holes), so:"
                },
                {
                    id: "cm22q034",
                    src: "DESI787-00205",
                    text: "Which of the following is an advantage of HSFG bolts over bearing type bolts?",
                    options: [
                        { key: "a", text: "joints are not rigid" },
                        { key: "b", text: "low static strength" },
                        { key: "c", text: "bolts are subjected to shearing and bearing stresses" },
                        { key: "d", text: "high strength fatigue" }
                    ],
                    answer: "d",
                    explanation: "HSFG (High Strength Friction Grip) bolts transfer load by friction, not bearing. This leads to better fatigue performance as the bolts are not subjected to bearing and shear stresses in the same way."
                }
            ]
        },
        {
            id: "cm22soil",
            name: "Soil Mechanics and Foundation",
            subject: "Soil Mechanics",
            accent: "amber",
            blurb: "14 questions drawn from the Soil Mechanics and Foundation bank.",
            questions: [
                {
                    id: "cm22q035",
                    src: "SOIL136-00272",
                    text: "The number and disposition of bore holes are varied, depending upon",
                    options: [
                        { key: "a", text: "Surroundings" },
                        { key: "b", text: "Strate" },
                        { key: "c", text: "Subsoil condition" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "c",
                    explanation: "The layout and number of boreholes are primarily determined by the variability and complexity of the subsurface soil strata."
                },
                {
                    id: "cm22q036",
                    src: "SOIL136-00273",
                    text: "In detailed exploration, the field test is conducted to determine ______",
                    options: [
                        { key: "a", text: "Tensile strength" },
                        { key: "b", text: "Permeability" },
                        { key: "c", text: "Rigidity" },
                        { key: "d", text: "Water content" }
                    ],
                    answer: "b",
                    explanation: "Detailed exploration involves in-situ tests to determine key engineering properties like permeability, shear strength, and compressibility for design."
                },
                {
                    id: "cm22q037",
                    src: "SOIL136-00274",
                    text: "The various method of site exploration can be grouped under, which of the following?",
                    options: [
                        { key: "a", text: "Soil strata" },
                        { key: "b", text: "None of the mentioned" },
                        { key: "c", text: "Open excavations and Borings" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "c",
                    explanation: "Site exploration methods are broadly classified into open excavations (e.g., trial pits, trenches) and borings (e.g., auger, wash boring, rotary drilling)."
                },
                {
                    id: "cm22q038",
                    src: "SOIL136-00275",
                    text: "Exploratory borings in general exploration is carried out by using",
                    options: [
                        { key: "a", text: "Auger" },
                        { key: "b", text: "Bone equipment" },
                        { key: "c", text: "Well curb" },
                        { key: "d", text: "All of above" }
                    ],
                    answer: "a",
                    explanation: "Hand augers or mechanical augers are simple, cost-effective tools for preliminary boring in general exploration, especially in shallow, soft soils."
                },
                {
                    id: "cm22q039",
                    src: "SOIL136-00276",
                    text: "The depth of exploration for isolated spread footing is",
                    options: [
                        { key: "a", text: "1 and 1/2 the width" },
                        { key: "b", text: "2 and 1/2 the width" },
                        { key: "c", text: "1/2 the width" },
                        { key: "d", text: "1/4 the width" }
                    ],
                    answer: "a",
                    explanation: "Exploration depth for spread footings is typically 1.5 times the width of the footing to cover the zone of significant stress influence."
                },
                {
                    id: "cm22q040",
                    src: "SOIL136-00277",
                    text: "In hand operated rings in ‘auger and shell boring’ the depth of which it can be used is...",
                    options: [
                        { key: "a", text: "40 m" },
                        { key: "b", text: "25 m" },
                        { key: "c", text: "30 m" },
                        { key: "d", text: "15 m" }
                    ],
                    answer: "b",
                    explanation: "Hand-operated auger and shell boring methods are generally suitable for depths up to about 25 meters in suitable soil conditions."
                },
                {
                    id: "cm22q041",
                    src: "SOIL136-00278",
                    text: "Auger is suitable for",
                    options: [
                        { key: "a", text: "very stiff clays" },
                        { key: "b", text: "sandy soils" },
                        { key: "c", text: "soft to stiff clays" },
                        { key: "d", text: "hard clays" }
                    ],
                    answer: "c",
                    explanation: "Augers are most effective in cohesive soils (clays) that are soft to stiff. They are not suitable for very hard soils, sands, or gravels which may collapse."
                },
                {
                    id: "cm22q042",
                    src: "SOIL136-00279",
                    text: "In rotator boring ______ is forced down the hallow drill rods.",
                    options: [
                        { key: "a", text: "glycerin" },
                        { key: "b", text: "dextrin" },
                        { key: "c", text: "phenyl" },
                        { key: "d", text: "water solution of bentonite" }
                    ],
                    answer: "d",
                    explanation: "In rotary drilling, a drilling fluid (mud), often a bentonite slurry, is circulated down the hollow rods to stabilize the borehole walls and remove cuttings."
                },
                {
                    id: "cm22q043",
                    src: "SOIL136-00280",
                    text: "A ______ sample has preserved natural structure of soil.",
                    options: [
                        { key: "a", text: "undisturbed" },
                        { key: "b", text: "disturbed" },
                        { key: "c", text: "non-representative" },
                        { key: "d", text: "remolded" }
                    ],
                    answer: "a",
                    explanation: "An undisturbed sample is one where the in-situ structure, moisture content, and density of the soil are preserved as much as possible during the sampling process."
                },
                {
                    id: "cm22q044",
                    src: "SOIL136-00281",
                    text: "______ sample has the natural structure of soil as modified.",
                    options: [
                        { key: "a", text: "undisturbed" },
                        { key: "b", text: "disturbed" },
                        { key: "c", text: "representative" },
                        { key: "d", text: "non-remolded" }
                    ],
                    answer: "b",
                    explanation: "A disturbed sample is one where the natural structure of the soil has been altered during the sampling process, though it may still be representative of its composition."
                },
                {
                    id: "cm22q045",
                    src: "SOIL136-00282",
                    text: "The depth up to which the increase in pressure due to structural loading is likely to cause perceptible settlement is ______",
                    options: [
                        { key: "a", text: "insignificant depth" },
                        { key: "b", text: "trifling depth" },
                        { key: "c", text: "significant depth" },
                        { key: "d", text: "nugatory" }
                    ],
                    answer: "c",
                    explanation: "This is the depth where the applied load increases the vertical stress enough to cause measurable compression or shear in the soil layers."
                },
                {
                    id: "cm22q046",
                    src: "SOIL136-00283",
                    text: "The significant depth is assumed up to a level at which net increase in vertical pressure becomes ______ of initial overburden pressure.",
                    options: [
                        { key: "a", text: "less than 10%" },
                        { key: "b", text: "20% to 30%" },
                        { key: "c", text: "50% to 70%" },
                        { key: "d", text: "10% to 20%" }
                    ],
                    answer: "d",
                    explanation: "A common rule of thumb is that the significant depth, or depth of influence, is where the stress increase from the foundation is less than 10-20% of the original in-situ stress."
                },
                {
                    id: "cm22q047",
                    src: "SOIL136-00284",
                    text: "Originally, Rankine’s theory of lateral earth pressure can be applied to only ______.",
                    options: [
                        { key: "a", text: "Cohesion less soil" },
                        { key: "b", text: "Cohesive soil" },
                        { key: "c", text: "Fine grained soil" },
                        { key: "d", text: "Coarse grained soil" }
                    ],
                    answer: "a",
                    explanation: "The original Rankine theory was developed for cohesionless soils (c=0) with a horizontal backfill surface."
                },
                {
                    id: "cm22q048",
                    src: "SOIL136-00285",
                    text: "Rankine’s theory of lateral pressure was extended to other soil by ______.",
                    options: [
                        { key: "a", text: "Mohr" },
                        { key: "b", text: "Resal and Bell" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "b",
                    explanation: "Resal and Bell are credited with extending Rankine's principles to include cohesive soils (c &gt; 0)."
                }
            ]
        },
        {
            id: "cm22watr",
            name: "Basic Water Resources Engineering",
            subject: "Water Resources",
            accent: "emerald",
            blurb: "12 questions drawn from the Basic Water Resources Engineering bank.",
            questions: [
                {
                    id: "cm22q049",
                    src: "WATE701-00242",
                    text: "The most efficient theoretical section to get maximum discharge for a given cross section is",
                    options: [
                        { key: "a", text: "triangular" },
                        { key: "b", text: "rectangular" },
                        { key: "c", text: "trapezoidal" },
                        { key: "d", text: "circular" }
                    ],
                    answer: "c",
                    explanation: "The most efficient theoretical section for maximum discharge is the trapezoidal section with side slopes of 60 degrees from horizontal, which is half a hexagon. Among the given options, trapezoidal is the correct choice as it can approximate the half-hexagon shape."
                },
                {
                    id: "cm22q050",
                    src: "WATE701-00243",
                    text: "A flood wave in river is an example of",
                    options: [
                        { key: "a", text: "steady and non-uniform flow" },
                        { key: "b", text: "steady and spatially varied flow" },
                        { key: "c", text: "unsteady and rapidly varied flow" },
                        { key: "d", text: "unsteady and gradually varied flow" }
                    ],
                    answer: "d",
                    explanation: "A flood wave involves a change in discharge and depth with time, so it is unsteady. The variation in depth is typically gradual along the river, so it is gradually varied flow."
                },
                {
                    id: "cm22q051",
                    src: "WATE701-00244",
                    text: "When channel bottom slope is less than critical slope, it is designated as",
                    options: [
                        { key: "a", text: "Horizontal" },
                        { key: "b", text: "Mild" },
                        { key: "c", text: "steep" },
                        { key: "d", text: "none of these" }
                    ],
                    answer: "b",
                    explanation: "A mild slope is one where the normal depth (for uniform flow) is greater than the critical depth. This occurs when the channel slope is less than the critical slope."
                },
                {
                    id: "cm22q052",
                    src: "WATE701-00245",
                    text: "In case of mild slope",
                    options: [
                        { key: "a", text: "Normal depth of flow will be greater than critical depth of flow" },
                        { key: "b", text: "Normal depth of flow will be lesser than critical depth of flow" },
                        { key: "c", text: "Normal depth of flow will be equal to critical depth of flow" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "a",
                    explanation: "A slope is classed as mild when the normal depth it produces is greater than the critical depth, so uniform flow on it is subcritical with a Froude number below one. On a steep slope the normal depth falls below critical and the flow is supercritical, and it is this comparison, not the numerical gradient, that defines the class."
                },
                {
                    id: "cm22q053",
                    src: "WATE701-00246",
                    text: "When channel bottom slope is greater than critical slope, it is designated as",
                    options: [
                        { key: "a", text: "Horizontal" },
                        { key: "b", text: "Mild" },
                        { key: "c", text: "steep" },
                        { key: "d", text: "none of these" }
                    ],
                    answer: "c",
                    explanation: "A steep slope is one where the normal depth is less than the critical depth, which happens when the channel slope is greater than the critical slope."
                },
                {
                    id: "cm22q054",
                    src: "WATE701-00247",
                    text: "For a channel with horizontal bottom, the normal depth of flow will be",
                    options: [
                        { key: "a", text: "Unity" },
                        { key: "b", text: "Zero" },
                        { key: "c", text: "equal to the critical depth" },
                        { key: "d", text: "Infinity" }
                    ],
                    answer: "d",
                    explanation: "For a horizontal channel (slope S0=0), the normal depth for uniform flow is theoretically infinity because uniform flow cannot occur without a slope. In practice, it means the flow is not uniform."
                },
                {
                    id: "cm22q055",
                    src: "WATE701-00248",
                    text: "When the channel bottom slope rises in the direction of flow, it is designated as",
                    options: [
                        { key: "a", text: "front slope" },
                        { key: "b", text: "back slope" },
                        { key: "c", text: "adverse slope" },
                        { key: "d", text: "none of these" }
                    ],
                    answer: "c",
                    explanation: "An adverse slope is one where the channel bottom rises in the direction of flow, opposing the flow."
                },
                {
                    id: "cm22q056",
                    src: "WATE701-00249",
                    text: "In adverse flow, the normal depth of flow is",
                    options: [
                        { key: "a", text: "infinity" },
                        { key: "b", text: "imaginary" },
                        { key: "c", text: "zero" },
                        { key: "d", text: "cannot predicted" }
                    ],
                    answer: "b",
                    explanation: "For an adverse slope (negative slope), the normal depth calculated from Manning's equation becomes imaginary because the slope term is negative under the square root."
                },
                {
                    id: "cm22q057",
                    src: "WATE701-00250",
                    text: "Specific energy of flowing water through rectangular channel of width 5 m and discharge 10 m³/s and depth of flow 2 m is",
                    options: [
                        { key: "a", text: "1.06 m" },
                        { key: "b", text: "1.02 m" },
                        { key: "c", text: "2.05 m" },
                        { key: "d", text: "2.60 m" }
                    ],
                    answer: "c",
                    explanation: "Specific energy E = y + (V²/(2g)). Discharge Q=10 m³/s, width B=5m, depth y=2m. Velocity V = Q/A = Q/(B*y) = 10/(5*2) = 1 m/s. V²/(2g) = (1)²/(2*9.81) ≈ 1/19.62 ≈ 0.051 m. So, E = 2 + 0.051 = 2.051 m ≈ 2.05m."
                },
                {
                    id: "cm22q058",
                    src: "WATE701-00251",
                    text: "For subcritical flow in an open channel, the control section for gradually varied flow profile is",
                    options: [
                        { key: "a", text: "at the upstream end" },
                        { key: "b", text: "at both upstream and downstream end" },
                        { key: "c", text: "at any intermediate section" },
                        { key: "d", text: "at the downstream end" }
                    ],
                    answer: "d",
                    explanation: "In subcritical flow, the depth is controlled from the downstream end because disturbances can travel upstream. Therefore, the control section for gradually varied flow profiles is at the downstream end."
                },
                {
                    id: "cm22q059",
                    src: "WATE701-00252",
                    text: "In case of surface profile in critically sloped channels, there may exist",
                    options: [
                        { key: "a", text: "one zones" },
                        { key: "b", text: "three zones" },
                        { key: "c", text: "two zones" },
                        { key: "d", text: "no zones" }
                    ],
                    answer: "a",
                    explanation: "For a critical slope (S0 = Sc), the normal depth equals the critical depth. The entire channel is essentially at critical conditions, so there is only one zone (Zone C) where the water surface profile is approximately parallel to the channel bottom."
                },
                {
                    id: "cm22q060",
                    src: "WATE701-00253",
                    text: "The rise of water level, which takes place due to the transformation of the unstable super critical flow to the stable sub critical flow is called",
                    options: [
                        { key: "a", text: "hydraulic jump" },
                        { key: "b", text: "hydraulic oscillation" },
                        { key: "c", text: "rise of water level" },
                        { key: "d", text: "none of these" }
                    ],
                    answer: "a",
                    explanation: "A hydraulic jump is a phenomenon where supercritical flow rapidly transitions to subcritical flow, resulting in a sudden rise in water level and energy dissipation."
                }
            ]
        },
        {
            id: "cm22hydr",
            name: "Hydropower",
            subject: "Hydropower",
            accent: "cyan",
            blurb: "9 questions drawn from the Hydropower bank.",
            questions: [
                {
                    id: "cm22q061",
                    src: "HYDR626-00193",
                    text: "The valve closure is said to be gradual if the time required to close the valve is",
                    options: [
                        { key: "a", text: "t= L/c" },
                        { key: "b", text: "t&lt; 4L/c" },
                        { key: "c", text: "t&gt; 2L/c" },
                        { key: "d", text: "t= 5L/c" }
                    ],
                    answer: "c",
                    explanation: "Valve closure is considered gradual if the closing time (t) is greater than 2L/c, where L is the pipe length and c is the speed of the pressure wave. This allows the pressure wave to reflect and partially cancel out, reducing the water hammer effect."
                },
                {
                    id: "cm22q062",
                    src: "HYDR626-00194",
                    text: "For full face method, the excavation to be done is generally divided into",
                    options: [
                        { key: "a", text: "Two sections" },
                        { key: "b", text: "Three sections" },
                        { key: "c", text: "Four sections" },
                        { key: "d", text: "The entire face at once" }
                    ],
                    answer: "d",
                    explanation: "The full face method involves excavating the entire tunnel cross-section simultaneously in one continuous operation. It is efficient and suitable for stable rock conditions."
                },
                {
                    id: "cm22q063",
                    src: "HYDR626-00195",
                    text: "If D is the diameter of tunnel in meters, then the thickness of lining in mm, as per the empirical formula is given by",
                    options: [
                        { key: "a", text: "42 D" },
                        { key: "b", text: "82 D" },
                        { key: "c", text: "104 D" },
                        { key: "d", text: "124 D" }
                    ],
                    answer: "a",
                    explanation: "A common empirical formula for preliminary estimation of tunnel lining thickness (t in mm) is t = 42D, where D is the tunnel diameter in meters. This provides a rough initial estimate for design."
                },
                {
                    id: "cm22q064",
                    src: "HYDR626-00196",
                    text: "In case of drift method of tunnelling, the drift may be excavated at",
                    options: [
                        { key: "a", text: "the centre" },
                        { key: "b", text: "the bottom" },
                        { key: "c", text: "the top" },
                        { key: "d", text: "All of the above." }
                    ],
                    answer: "d",
                    explanation: "A drift is a small pilot tunnel. It can be driven along the centerline, at the top, or at the bottom of the proposed full tunnel section to explore ground conditions and facilitate drainage or ventilation before full-face excavation."
                },
                {
                    id: "cm22q065",
                    src: "HYDR626-00197",
                    text: "For tunnels exceeding 300 m in length, the grade should be provided below",
                    options: [
                        { key: "a", text: "50% of the ruling gradient" },
                        { key: "b", text: "60% of the ruling gradient" },
                        { key: "c", text: "75% of the ruling gradient" },
                        { key: "d", text: "80% of the ruling gradient" }
                    ],
                    answer: "c",
                    explanation: "By limiting the tunnel grade to 75% of the ruling gradient (the steepest gradient allowed on that section of the line), engineers ensure that locomotives or vehicles have enough \"reserve\" power to overcome the added resistances mentioned above without stalling."
                },
                {
                    id: "cm22q066",
                    src: "HYDR626-00198",
                    text: "The method of draining in the tunnels, is generally known as",
                    options: [
                        { key: "a", text: "foredrainage" },
                        { key: "b", text: "dewatering" },
                        { key: "c", text: "permanent drainage" },
                        { key: "d", text: "All of the above." }
                    ],
                    answer: "d",
                    explanation: "Tunnel drainage involves various methods: 'foredrainage' (draining water ahead of the face), 'dewatering' (pumping out water that has entered), and installing 'permanent drainage' systems (like pipes behind the lining) for the long term."
                },
                {
                    id: "cm22q067",
                    src: "HYDR626-00199",
                    text: "Circular section of tunnels is not suitable for;",
                    options: [
                        { key: "a", text: "non-cohesive soils" },
                        { key: "b", text: "carrying water" },
                        { key: "c", text: "tunnels driven by shield method" },
                        { key: "d", text: "placement of concrete lining" }
                    ],
                    answer: "a",
                    explanation: "In non-cohesive soils (like dry sand or gravel) that have no inherent cohesion, the bottom of a circular tunnel is difficult to support during construction without continuous lining pressure. Other shapes like rectangular with breasting are often used."
                },
                {
                    id: "cm22q068",
                    src: "HYDR626-00200",
                    text: "Drifters can be used to drill",
                    options: [
                        { key: "a", text: "only up holes" },
                        { key: "b", text: "horizontal down or up holes" },
                        { key: "c", text: "only down holes" },
                        { key: "d", text: "horizontal or up holes" }
                    ],
                    answer: "b",
                    explanation: "A drifter is a powerful, track-mounted pneumatic drill used in tunneling and mining. It is versatile and can be positioned to drill holes in various directions: horizontally, down, or up."
                },
                {
                    id: "cm22q069",
                    src: "HYDR626-00201",
                    text: "Which of the following lining material is useful for shield driven tunnels in sub aqueous regions?",
                    options: [
                        { key: "a", text: "stone masonry" },
                        { key: "b", text: "timber" },
                        { key: "c", text: "cast iron" },
                        { key: "d", text: "cement concrete" }
                    ],
                    answer: "c",
                    explanation: "Cast iron segments are highly effective for lining tunnels built with a shield method underwater. They are strong, durable, water-tight, and can withstand the external water pressure and handling during construction."
                }
            ]
        },
        {
            id: "cm22irri",
            name: "Irrigation and Drainage",
            subject: "Irrigation",
            accent: "emerald",
            blurb: "10 questions drawn from the Irrigation and Drainage bank.",
            questions: [
                {
                    id: "cm22q070",
                    src: "IRRI951-00224",
                    text: "At which point in the entire canal system the duty of water will be more?",
                    options: [
                        { key: "a", text: "Head of the Minor" },
                        { key: "b", text: "Head of the Distributary" },
                        { key: "c", text: "Head of the Branch" },
                        { key: "d", text: "Head of the Water-course" }
                    ],
                    answer: "d",
                    explanation: "Duty is highest at the head of the watercourse because it is calculated after all major conveyance losses (in main canals, branches, distributaries) have already occurred. The water delivered here is very close to what is applied to the field."
                },
                {
                    id: "cm22q071",
                    src: "IRRI951-00225",
                    text: "The optimum utilization of irrigation water means ______",
                    options: [
                        { key: "a", text: "Getting maximum yield with the maximum amount of water available" },
                        { key: "b", text: "Getting maximum yield with any amount of water" },
                        { key: "c", text: "Getting less yield with maximum water content" },
                        { key: "d", text: "Getting less yield with the least water content" }
                    ],
                    answer: "a",
                    explanation: "Optimum utilization aims to achieve the highest possible crop yield per unit of water available, maximizing productivity from the limited water resource."
                },
                {
                    id: "cm22q072",
                    src: "IRRI951-00226",
                    text: "Canal head regulator",
                    options: [
                        { key: "a", text: "Regulates supply of water entering canal" },
                        { key: "b", text: "Controls the entry of silt in the canal" },
                        { key: "c", text: "Prevents river flood from entering canal" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "A canal head regulator is a structure at the head of a canal that performs multiple functions: it regulates the water supply into the canal, helps control silt entry, and prevents flood waters from the river from entering the canal."
                },
                {
                    id: "cm22q073",
                    src: "IRRI951-00227",
                    text: "A regulator is generally aligned at",
                    options: [
                        { key: "a", text: "90 degree to the weir" },
                        { key: "b", text: "90-110 degree to the weir" },
                        { key: "c", text: "110-120 degree to the weir" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "b",
                    explanation: "A regulator is typically aligned at an angle between 90 to 110 degrees to the weir to ensure smooth and efficient flow entry into the canal."
                },
                {
                    id: "cm22q074",
                    src: "IRRI951-00228",
                    text: "Regulator is provided with",
                    options: [
                        { key: "a", text: "Raised crest" },
                        { key: "b", text: "Gates" },
                        { key: "c", text: "Divide baffles" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "b",
                    explanation: "A regulator is equipped with gates to control the flow of water and regulate the discharge entering the canal."
                },
                {
                    id: "cm22q075",
                    src: "IRRI951-00229",
                    text: "The minimum capacity of the escape channel is kept as...... Of the channel capacity.",
                    options: [
                        { key: "a", text: "1/3" },
                        { key: "b", text: "1/2" },
                        { key: "c", text: "1/4" },
                        { key: "d", text: "1/5" }
                    ],
                    answer: "a",
                    explanation: "The escape channel, used to dispose of excess water, is designed with a minimum capacity of one-third of the channel capacity to handle surplus flow effectively."
                },
                {
                    id: "cm22q076",
                    src: "IRRI951-00230",
                    text: "For proportionality, weir type outlets should be set at",
                    options: [
                        { key: "a", text: "0.3" },
                        { key: "b", text: "0.6" },
                        { key: "c", text: "0.5" },
                        { key: "d", text: "0.9" }
                    ],
                    answer: "b",
                    explanation: "Weir type outlets are set at a proportionality value of 0.6 to ensure a balanced and equitable distribution of water between the outlet and the parent channel."
                },
                {
                    id: "cm22q077",
                    src: "IRRI951-00231",
                    text: "The type of irrigation module which makes the equitable distribution of water more difficult is:",
                    options: [
                        { key: "a", text: "Rigid module" },
                        { key: "b", text: "Semi-rigid module" },
                        { key: "c", text: "Non-modular" },
                        { key: "d", text: "None" }
                    ],
                    answer: "c",
                    explanation: "Non-modular outlets lack a fixed discharge relationship with the water level, making it difficult to ensure equitable and consistent water distribution."
                },
                {
                    id: "cm22q078",
                    src: "IRRI951-00232",
                    text: "Rate of change of discharge through an irrigation outlet becomes equal to the rate of change of water depth in the channel when its",
                    options: [
                        { key: "a", text: "Flexibility is 1" },
                        { key: "b", text: "Sensitivity is 0" },
                        { key: "c", text: "Flexibility is 0" },
                        { key: "d", text: "Sensitivity is 1" }
                    ],
                    answer: "d",
                    explanation: "Sensitivity is defined as the ratio of the rate of change of outlet discharge to the rate of change of water depth in the distributing channel. When this ratio is 1, they are equal."
                },
                {
                    id: "cm22q079",
                    src: "IRRI951-00233",
                    text: "A free pipe outlet is a :",
                    options: [
                        { key: "a", text: "Rigid module" },
                        { key: "b", text: "Flexible module" },
                        { key: "c", text: "Non-modular module" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "b",
                    explanation: "A free pipe outlet is a type of flexible module where the discharge varies with the water level in the distributary, offering some adaptability."
                }
            ]
        },
        {
            id: "cm22tran",
            name: "Transportation",
            subject: "Transportation",
            accent: "rose",
            blurb: "11 questions drawn from the Transportation bank.",
            questions: [
                {
                    id: "cm22q080",
                    src: "TRAN808-00227",
                    text: "What is the first stage in the function of the traffic engineering department?",
                    options: [
                        { key: "a", text: "Planning and design" },
                        { key: "b", text: "Collection of data" },
                        { key: "c", text: "Finance" },
                        { key: "d", text: "Investigations" }
                    ],
                    answer: "b",
                    explanation: "The foundational step for any traffic engineering project is data collection. Accurate data on traffic volume, speed, accidents, etc., is essential before any analysis, planning, or design can begin."
                },
                {
                    id: "cm22q081",
                    src: "TRAN808-00228",
                    text: "What is the first stage in traffic engineering studies?",
                    options: [
                        { key: "a", text: "Spot speed studies" },
                        { key: "b", text: "Origin and destination studies" },
                        { key: "c", text: "Traffic volume studies" },
                        { key: "d", text: "Speed and delay studies" }
                    ],
                    answer: "c",
                    explanation: "Traffic volume studies are often the most fundamental and first step. They provide the basic quantitative information about the number and types of vehicles using a road network, which is crucial for planning further specific studies."
                },
                {
                    id: "cm22q082",
                    src: "TRAN808-00229",
                    text: "The study of traffic engineering is divided into how many major categories?",
                    options: [
                        { key: "a", text: "Eight" },
                        { key: "b", text: "Five" },
                        { key: "c", text: "Six" },
                        { key: "d", text: "Seven" }
                    ],
                    answer: "d",
                    explanation: "As per standard traffic engineering texts, the major categories are seven: Traffic Characteristics, Traffic Studies and Analysis, Traffic Operations, Planning and Analysis, Design, Administration, and Research."
                },
                {
                    id: "cm22q083",
                    src: "TRAN808-00230",
                    text: "What does \"3-Es\" of traffic engineering stand for?",
                    options: [
                        { key: "a", text: "Engineering, education and enforcement" },
                        { key: "b", text: "Engineering, education and enthusiasm" },
                        { key: "c", text: "Engineering, education and expulsion" },
                        { key: "d", text: "Enforcement, empowerment and eradication" }
                    ],
                    answer: "a",
                    explanation: "The \"3-Es\" are a fundamental philosophy in traffic engineering. Engineering involves physical road design. Education involves teaching road users about laws and safety. Enforcement involves police ensuring compliance with traffic laws."
                },
                {
                    id: "cm22q084",
                    src: "TRAN808-00231",
                    text: "In traffic engineering, the elements are classified into how many categories?",
                    options: [
                        { key: "a", text: "Four" },
                        { key: "b", text: "Three" },
                        { key: "c", text: "One" },
                        { key: "d", text: "Two" }
                    ],
                    answer: "b",
                    explanation: "The key elements of traffic engineering are classified into three broad categories: the road user (human element), the vehicle (mechanical element), and the roadway (environmental element)."
                },
                {
                    id: "cm22q085",
                    src: "TRAN808-00232",
                    text: "Which of the following is not a category of Traffic Studies?",
                    options: [
                        { key: "a", text: "Inventories" },
                        { key: "b", text: "Economic studies" },
                        { key: "c", text: "Dynamic studies" },
                        { key: "d", text: "Administrative studies" }
                    ],
                    answer: "c",
                    explanation: "Standard categories of traffic studies include inventories (e.g., geometrics, control devices), administrative studies (e.g., financial, legal), and economic studies (e.g., cost-benefit analysis). \"Dynamic studies\" is not a standard category name."
                },
                {
                    id: "cm22q086",
                    src: "TRAN808-00233",
                    text: "Which of the following is the traffic that is prepared based on 365 days of the year?",
                    options: [
                        { key: "a", text: "Average daily traffic" },
                        { key: "b", text: "Average yearly traffic" },
                        { key: "c", text: "Yearly traffic" },
                        { key: "d", text: "Annual average daily traffic" }
                    ],
                    answer: "d",
                    explanation: "Annual Average Daily Traffic (AADT) is the total volume of traffic on a highway for a year divided by 365 days. It represents the average traffic volume on any given day of the year."
                },
                {
                    id: "cm22q087",
                    src: "TRAN808-00234",
                    text: "Which of the following is the first phase of traffic regulation?",
                    options: [
                        { key: "a", text: "Driver controls" },
                        { key: "b", text: "Traffic flow regulations" },
                        { key: "c", text: "General controls" },
                        { key: "d", text: "Vehicle controls" }
                    ],
                    answer: "a",
                    explanation: "The phases of traffic regulation proceed in this order: Driver Controls, followed by Vehicle Controls, then Traffic Flow Regulations, and finally General Controls."
                },
                {
                    id: "cm22q088",
                    src: "TRAN808-00235",
                    text: "Which of the following is the number of vehicles crossing a section of road in a unit time at any selected period?",
                    options: [
                        { key: "a", text: "Traffic density study" },
                        { key: "b", text: "Traffic volume study" },
                        { key: "c", text: "Traffic characteristic study" },
                        { key: "d", text: "Traffic mass study" }
                    ],
                    answer: "b",
                    explanation: "A traffic volume study specifically measures the number of vehicles (or persons) passing a given point on a roadway during a specified time interval. It is a measure of flow (vehicles per hour)."
                },
                {
                    id: "cm22q089",
                    src: "TRAN808-00236",
                    text: "The road traffic consists of how many types of traffic?",
                    options: [
                        { key: "a", text: "No traffic" },
                        { key: "b", text: "Pedestrian traffic" },
                        { key: "c", text: "Vehicular and pedestrian traffic" },
                        { key: "d", text: "Vehicle traffic" }
                    ],
                    answer: "c",
                    explanation: "Road traffic is broadly composed of two main streams: vehicular traffic (cars, trucks, buses, bicycles, etc.) and pedestrian traffic (people walking)."
                },
                {
                    id: "cm22q090",
                    src: "TRAN808-00237",
                    text: "Which of the following traffic study uses traffic models to analyze traffic?",
                    options: [
                        { key: "a", text: "Accident studies" },
                        { key: "b", text: "Exploration studies" },
                        { key: "c", text: "Parking studies" },
                        { key: "d", text: "Traffic volume studies" }
                    ],
                    answer: "d",
                    explanation: "Traffic volume data is a primary input for building and calibrating mathematical traffic models, which are used to simulate and analyze traffic flow, predict future conditions, and evaluate alternative solutions."
                }
            ]
        },
        {
            id: "cm22wate",
            name: "Water Supply, Sanitation and Environment",
            subject: "Water Supply",
            accent: "blue",
            blurb: "10 questions drawn from the Water Supply, Sanitation and Environment bank.",
            questions: [
                {
                    id: "cm22q091",
                    src: "WATE813-00212",
                    text: "What is the spacing of manholes for pipe diameter of greater than 2 m?",
                    options: [
                        { key: "a", text: "300 m" },
                        { key: "b", text: "90-150 m" },
                        { key: "c", text: "150-200 m" },
                        { key: "d", text: "45-90 m" }
                    ],
                    answer: "a",
                    explanation: "For very large sewers (diameter &gt; 2m), the spacing between manholes can be increased significantly, up to 300 meters, as access and maneuvering within the large pipe is easier."
                },
                {
                    id: "cm22q092",
                    src: "WATE813-00213",
                    text: "...is required to transport storm water runoff from roofs, parking lots, streets, and highways to a point of discharge.",
                    options: [
                        { key: "a", text: "Sanitary sewers" },
                        { key: "b", text: "Storm sewers" },
                        { key: "c", text: "Wastewater sewers" },
                        { key: "d", text: "Water sewers" }
                    ],
                    answer: "b",
                    explanation: "Storm sewers are a dedicated network of pipes designed solely to collect and convey surface runoff from precipitation to a discharge point like a river or treatment facility."
                },
                {
                    id: "cm22q093",
                    src: "WATE813-00214",
                    text: "Storm water flow or run off is given by",
                    options: [
                        { key: "a", text: "Q = CL/3600" },
                        { key: "b", text: "Q = CL/360" }
                    ],
                    answer: "b",
                    explanation: "The rational formula for peak stormwater runoff is Q = CIA, where C is runoff coefficient, I is rainfall intensity, A is area. The option 'Q = CL/360' is likely a distractor; the standard formula does not use length (L) in this way."
                },
                {
                    id: "cm22q094",
                    src: "WATE813-00215",
                    text: "Camp Shield formula for self-cleansing velocity is given by which of the following equations?",
                    options: [
                        { key: "a", text: "v = (βρB/3a²) d" },
                        { key: "b", text: "v = (βρC/3a²) gd" },
                        { key: "c", text: "v = (βρD/3a²) d" },
                        { key: "d", text: "v = (βρA/3a²) gd" }
                    ],
                    answer: "d",
                    explanation: "The correct form of the Shield's formula for self-cleansing velocity in sewers involves the sediment properties (β, ρ), pipe characteristics, gravitational constant (g), and particle diameter (d). the option \"v = (βρA/3a²) gd\" is closest to the standard notation."
                },
                {
                    id: "cm22q095",
                    src: "WATE813-00216",
                    text: "For a circular sewer running partially full, the expression for proportion depth d/D is equal to",
                    options: [
                        { key: "a", text: "(1 - cos(θ/2))" },
                        { key: "b", text: "(1 - sin(θ/2))" },
                        { key: "c", text: "(1 - tan(θ/2))" }
                    ],
                    answer: "a",
                    explanation: "The proportional depth (d/D) in a circular sewer is given by the formula: d/D = (1 - cos(θ/2))/2. The option '(1 - cos(θ/2))' is a simplified representation of this concept."
                },
                {
                    id: "cm22q096",
                    src: "WATE813-00217",
                    text: "For a circular sewer running partially full, the expression for proportional discharge q/Q is equal to",
                    options: [
                        { key: "a", text: "(θ - (3sinθ)/2)" },
                        { key: "b", text: "(θ - sinθ)" },
                        { key: "c", text: "(1 - tan(θ/2))" }
                    ],
                    answer: "b",
                    explanation: "The proportional discharge (q/Q) for a circular sewer is a function of the central angle θ. The standard expression involves terms like (θ - sinθ) for area and hydraulic elements, making (a) the most plausible answer."
                },
                {
                    id: "cm22q097",
                    src: "WATE813-00218",
                    text: "Which of the following is the expression in the meaning? Formula?",
                    options: [
                        { key: "a", text: "V = (1/n) R³⁄² S¹⁄²" },
                        { key: "b", text: "V = (1/n) R²⁄³ S²" },
                        { key: "c", text: "V = (1/n) R²⁄³ S¹⁄²" }
                    ],
                    answer: "c",
                    explanation: "This question asks for the Manning's formula, which is V = (1/n) * R^(2/3) * S^(1/2), where V is velocity, n is roughness coefficient, R is hydraulic radius, and S is slope."
                },
                {
                    id: "cm22q098",
                    src: "WATE813-00219",
                    text: "The means of access for inspection and cleaning of sewer line is known as",
                    options: [
                        { key: "a", text: "Inlet" },
                        { key: "b", text: "Catch basin" },
                        { key: "c", text: "Manhole" }
                    ],
                    answer: "c",
                    explanation: "While inlets and catch basins allow water to enter the system, a manhole is the primary structure that provides direct access to the sewer line itself for inspection and cleaning."
                },
                {
                    id: "cm22q099",
                    src: "WATE813-00220",
                    text: "Removal of oil and grease from sewage is known as",
                    options: [
                        { key: "a", text: "Skimming" },
                        { key: "b", text: "Screening" },
                        { key: "c", text: "Filtration" }
                    ],
                    answer: "a",
                    explanation: "Skimming is the process where oil and grease, which float on the surface, are removed from sewage in skimming tanks. Screening removes large floating solids."
                },
                {
                    id: "cm22q100",
                    src: "WATE813-00221",
                    text: "A well oxidized sewage contains nitrogen mainly as",
                    options: [
                        { key: "a", text: "Nitrites" },
                        { key: "b", text: "Nitrates" },
                        { key: "c", text: "Ammoniacal Nitrogen" }
                    ],
                    answer: "b",
                    explanation: "In a well-oxidized, treated sewage (aerobic conditions), the organic nitrogen has been stabilized and converted primarily to nitrates (NO₃⁻) through the process of nitrification."
                }
            ]
        }
    ]
};

/* Registered lazily — js/civil.js injects this file when the set is opened. */
window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["civil-22"] = CIVIL_MODEL_22;
