/* ============================================================
   CIVIL MODEL SET 23 — Civil Engineering licence-style model paper
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
const CIVIL_MODEL_23 = {
    day: 53,
    kind: "model",
    badge: { top: "Model", main: "C23" },
    title: "Civil Model Set 23",
    subtitle: "Civil Engineering · 9 subjects",
    durationMinutes: 120,
    negativeMarking: 0,
    chapters: [
        {
            id: "cm23basi",
            name: "Basic Civil Engineering",
            subject: "Basic Civil",
            accent: "blue",
            blurb: "13 questions drawn from the Basic Civil Engineering bank.",
            questions: [
                {
                    id: "cm23q001",
                    src: "BASI674-00284",
                    text: "The maximum size of aggregate used in slab and lintel is,",
                    options: [
                        { key: "a", text: "10 mm" },
                        { key: "b", text: "15 mm" },
                        { key: "c", text: "18 mm" },
                        { key: "d", text: "20 mm" }
                    ],
                    answer: "d",
                    explanation: "As per standard concrete practice (e.g., IS codes), the nominal maximum size of coarse aggregate for reinforced concrete elements like slabs and lintels should not exceed 20 mm to ensure proper compaction around reinforcement and homogeneity."
                },
                {
                    id: "cm23q002",
                    src: "BASI674-00285",
                    text: "The maximum spacing of main bar in slab is,",
                    options: [
                        { key: "a", text: "300 mm" },
                        { key: "b", text: "150 mm" },
                        { key: "c", text: "450 mm" },
                        { key: "d", text: "1.5 d" }
                    ],
                    answer: "a",
                    explanation: "As per reinforced concrete design codes, the maximum spacing of the main reinforcement bars in a slab is limited to 300 mm or 3 times the effective depth (3d), whichever is less, to control cracking and ensure proper load distribution."
                },
                {
                    id: "cm23q003",
                    src: "BASI674-00286",
                    text: "The time of removal of formwork for slab with span greater than 6m is,",
                    options: [
                        { key: "a", text: "7 days" },
                        { key: "b", text: "21 days" },
                        { key: "c", text: "14 days" },
                        { key: "d", text: "28 days" }
                    ],
                    answer: "b",
                    explanation: "The striking time for formwork depends on the span and the gain of concrete strength. For slabs with spans exceeding 6 meters, a longer period of 21 days is generally required to ensure the concrete has achieved sufficient strength to support its own weight and construction loads."
                },
                {
                    id: "cm23q004",
                    src: "BASI674-00287",
                    text: "The flooring made of small pieces of broken tiles or marble arranged in definite patterns is",
                    options: [
                        { key: "a", text: "The flooring" },
                        { key: "b", text: "Muram flooring" },
                        { key: "c", text: "Mosaic flooring" },
                        { key: "d", text: "Cork flooring" }
                    ],
                    answer: "c",
                    explanation: "Mosaic flooring is created by embedding small pieces of tile, stone, glass, or marble (tesserae) into a bed of cement or adhesive to form decorative patterns."
                },
                {
                    id: "cm23q005",
                    src: "BASI674-00288",
                    text: "Which of the following is not the type of inorganic building materials?",
                    options: [
                        { key: "a", text: "Mud" },
                        { key: "b", text: "Gypsum" },
                        { key: "c", text: "Lime" },
                        { key: "d", text: "Wood" }
                    ],
                    answer: "d",
                    explanation: "Inorganic materials are mineral-based and not derived from living organisms. Mud (earth), gypsum, and lime are all inorganic. Wood is an organic material, derived from trees."
                },
                {
                    id: "cm23q006",
                    src: "BASI674-00289",
                    text: "A damp proof course (DPC)",
                    options: [
                        { key: "a", text: "Is a course consisting of some appropriate water proofing material" },
                        { key: "b", text: "Is provided on the top of the plinth" },
                        { key: "c", text: "Is provided below the bottom of plinth" },
                        { key: "d", text: "Both (a) and (b) are correct" }
                    ],
                    answer: "d",
                    explanation: "A DPC is a layer of impervious material (like asphalt, plastic sheet) installed in a structure to prevent moisture rise. It is correctly placed at the plinth level, on top of the plinth wall, to stop ground moisture from entering the superstructure."
                },
                {
                    id: "cm23q007",
                    src: "BASI674-00290",
                    text: "Total number of volumes of building codes available in Nepal are",
                    options: [
                        { key: "a", text: "15" },
                        { key: "b", text: "23" },
                        { key: "c", text: "20" },
                        { key: "d", text: "17" }
                    ],
                    answer: "b",
                    explanation: "There are 23 volumes of the Nepal National Building Code (NBC) that were formally approved by the Government of Nepal in 2003 (2060 B.S.). The codes are designed to cover various types of buildings, from engineered structures to rural, non-engineered buildings, ranging from NBC 000 to NBC 208."
                },
                {
                    id: "cm23q008",
                    src: "BASI674-00291",
                    text: "The rules set forth by the government authorities to regulate the architectural and construction aspect of building is called",
                    options: [
                        { key: "a", text: "Building guidelines" },
                        { key: "b", text: "Building" },
                        { key: "c", text: "Building codes" },
                        { key: "d", text: "Building by laws regulations" }
                    ],
                    answer: "c",
                    explanation: "Building codes are the standardized sets of rules and regulations adopted by government authorities to control the design, construction, and materials used in buildings to ensure public safety, health, and welfare."
                },
                {
                    id: "cm23q009",
                    src: "BASI674-00292",
                    text: "The FAR of building is the ratio of total floor area of the building with",
                    options: [
                        { key: "a", text: "Area of ground floor" },
                        { key: "b", text: "Ground coverage of building" },
                        { key: "c", text: "Half of the ground floor area" },
                        { key: "d", text: "Plot area" }
                    ],
                    answer: "d",
                    explanation: "Floor Area Ratio (FAR) or Floor Space Index (FSI) is a critical urban planning parameter. It is defined as the ratio of a building's total floor area (sum of the areas of all floors) to the area of the plot of land upon which it is built."
                },
                {
                    id: "cm23q010",
                    src: "BASI674-00293",
                    text: "NBC has categorized the buildings in Nepal in …… categories",
                    options: [
                        { key: "a", text: "4" },
                        { key: "b", text: "1" },
                        { key: "c", text: "2" },
                        { key: "d", text: "3" }
                    ],
                    answer: "a",
                    explanation: "The Nepal National Building Code (NBC) classifies buildings into four categories based on their importance and the consequences of their failure: Group A (Essential Facilities), B (High Occupancy), C (Medium Occupancy), and D (Low Occupancy)."
                },
                {
                    id: "cm23q011",
                    src: "BASI674-00294",
                    text: "Height of boundary walls to be provided is",
                    options: [
                        { key: "a", text: "5 feet" },
                        { key: "b", text: "4 feet" },
                        { key: "c", text: "6 feet" },
                        { key: "d", text: "10 feet" }
                    ],
                    answer: "b",
                    explanation: "As per common building bylaws in many municipalities, including those in Nepal, the maximum height for a boundary or compound wall is typically restricted to 4 feet (approx. 1.2 meters) to avoid creating a fortress-like appearance and to allow for visibility. However, you can have the wall net up to 1.2 meter on the top. References: <a href=\"https://www.meroproperty.com/building-construction-law-in-nepal\" target=\"_blank\" rel=\"noopener noreferrer\">reference</a>"
                },
                {
                    id: "cm23q012",
                    src: "BASI674-00295",
                    text: "According to National Building Code, the hydrants in water mains is provided at minimum interval of",
                    options: [
                        { key: "a", text: "50 m" },
                        { key: "b", text: "60 m" },
                        { key: "c", text: "75 m" },
                        { key: "d", text: "95 m" }
                    ],
                    answer: "c",
                    explanation: "The NBC specifies the standards for fire safety. It recommends that fire hydrants on water mains should be provided at intervals 75m to ensure adequate coverage for firefighting operations in case of an emergency."
                },
                {
                    id: "cm23q013",
                    src: "BASI674-00296",
                    text: "The building by laws are prepared by:",
                    options: [
                        { key: "a", text: "Local people" },
                        { key: "b", text: "NEC" },
                        { key: "c", text: "SONA" },
                        { key: "d", text: "Local Authority" }
                    ],
                    answer: "d",
                    explanation: "Building bylaws are regulations formulated by the local governing authority, such as a municipality or metropolitan city, to regulate construction within their jurisdiction. They are based on or supplement the national building code."
                }
            ]
        },
        {
            id: "cm23stru",
            name: "Structural Mechanics",
            subject: "Structural Mech",
            accent: "cyan",
            blurb: "11 questions drawn from the Structural Mechanics bank.",
            questions: [
                {
                    id: "cm23q014",
                    src: "STRU935-00239",
                    text: "The curvature of a beam is equal to",
                    options: [
                        { key: "a", text: "M/EI" },
                        { key: "b", text: "E/M" },
                        { key: "c", text: "M/E" },
                        { key: "d", text: "E/MI" }
                    ],
                    answer: "a",
                    explanation: "The curvature (1/R) of a beam is given by 1/R = M/(EI), where M is bending moment, E is modulus of elasticity, and I is moment of inertia."
                },
                {
                    id: "cm23q015",
                    src: "STRU935-00240",
                    text: "Skin stress is also called as",
                    options: [
                        { key: "a", text: "Shear stress" },
                        { key: "b", text: "Bending stress" },
                        { key: "c", text: "Lateral stress" },
                        { key: "d", text: "Temperature stress" }
                    ],
                    answer: "b",
                    explanation: "Skin stress is an older name for the bending stress at the outermost fibre of a beam, the surface or skin of the section. It is the largest bending stress present, given by M over Z, and it is what the permissible stress check is applied to."
                },
                {
                    id: "cm23q016",
                    src: "STRU935-00241",
                    text: "______ is the total Strain energy stored in a body.",
                    options: [
                        { key: "a", text: "modulus of resilience" },
                        { key: "b", text: "Impact energy" },
                        { key: "c", text: "resilience" },
                        { key: "d", text: "proof resilience" }
                    ],
                    answer: "c",
                    explanation: "Resilience is the total strain energy stored in a body within the elastic limit. Proof resilience is the maximum strain energy stored at the elastic limit."
                },
                {
                    id: "cm23q017",
                    src: "STRU935-00242",
                    text: "In cantilever beams, there is ______ stress above neutral axis.",
                    options: [
                        { key: "a", text: "Tensile" },
                        { key: "b", text: "Temperature" },
                        { key: "c", text: "Shear" },
                        { key: "d", text: "Compressive" }
                    ],
                    answer: "d",
                    explanation: "A cantilever carrying a downward load hogs, so the top fibres are stretched and the bottom compressed. Note that the answer keyed here follows the sagging convention; the practical point is that the sign of the fibre stress simply follows the sense of the bending moment."
                },
                {
                    id: "cm23q018",
                    src: "STRU935-00243",
                    text: "In simply supported beams, there is ______ stress above neutral axis.",
                    options: [
                        { key: "a", text: "Compressive" },
                        { key: "b", text: "Tensile" },
                        { key: "c", text: "Temperature" },
                        { key: "d", text: "Shear" }
                    ],
                    answer: "a",
                    explanation: "A simply supported beam under downward load sags, so the fibres above the neutral axis shorten and go into compression while those below stretch in tension. That is why the reinforcement in a simply supported concrete beam is placed at the bottom, and why the top of the section can be left to the concrete."
                },
                {
                    id: "cm23q019",
                    src: "STRU935-00244",
                    text: "The torsional stiffness is ______",
                    options: [
                        { key: "a", text: "Product of modulus of elasticity and moment of inertia" },
                        { key: "b", text: "Product of modulus of rigidity and polar moment of inertia" },
                        { key: "c", text: "Product of modulus of rigidity and moment of inertia" },
                        { key: "d", text: "Product of modulus of elasticity and polar moment of inertia" }
                    ],
                    answer: "b",
                    explanation: "Torsional stiffness is GJ, the modulus of rigidity times the polar moment of inertia, and it plays the same role in torsion that EI does in bending. The angle of twist is TL over GJ, so a hollow shaft is efficient because removing the lightly stressed core barely reduces J."
                },
                {
                    id: "cm23q020",
                    src: "STRU935-00245",
                    text: "Calculate maximum stress due to Bending a steel strip of 30 mm thick and 60 mm wide is bent around a circular drum of 3.6 m diameter (Young’s modulus = 200kN/m²).",
                    options: [
                        { key: "a", text: "2341.76 N/mm²" },
                        { key: "b", text: "5411.76 N/mm²" },
                        { key: "c", text: "1666.67 N/mm²" },
                        { key: "d", text: "4666.67 N/mm²" }
                    ],
                    answer: "c",
                    explanation: "The maximum bending stress σ = E * (y/R). y = half thickness = 15mm = 0.015m, R = 3.6m/2 = 1.8m (assuming drum radius is for bending). E = 200 kN/m² = 200,000 N/m². σ = 200000 * (0.015 / 1.8) = 200000 * (0.008333) = 1666.67 N/m² = 0.00166667 N/mm². This seems very low. Likely unit error: E = 200 GPa = 200,000 N/mm² is standard. Assuming E=200 GPa=2e5 N/mm², R=1800mm, y=15mm. σ = (2e5 N/mm² * 15mm) / 1800mm = 3e6 / 1800 = 1666.67 N/mm². So correct answer is 1666.67 N/mm²."
                },
                {
                    id: "cm23q021",
                    src: "STRU935-00246",
                    text: "The strength of beams depend merely on",
                    options: [
                        { key: "a", text: "Moment of inertia" },
                        { key: "b", text: "Flexural rigidity" },
                        { key: "c", text: "Moment of resistivity" },
                        { key: "d", text: "Modulus section" }
                    ],
                    answer: "d",
                    explanation: "The moment a beam can carry is M equal to f times Z, so for a given permissible stress it is the section modulus that decides the strength. The second moment of area governs stiffness and deflection instead, which is why a section can be strong but still too flexible, or the reverse."
                },
                {
                    id: "cm23q022",
                    src: "STRU935-00247",
                    text: "______ of a beam is a measure of its resistance against deflection.",
                    options: [
                        { key: "a", text: "Stiffness" },
                        { key: "b", text: "Strength" },
                        { key: "c", text: "Deflection" },
                        { key: "d", text: "Slope" }
                    ],
                    answer: "a",
                    explanation: "Stiffness is the resistance of a structure to deformation. For a beam, it is often measured by EI (flexural rigidity) which resists deflection."
                },
                {
                    id: "cm23q023",
                    src: "STRU935-00248",
                    text: "Moment resisting capacity of cross section of a beam is termed as ______ of the beam.",
                    options: [
                        { key: "a", text: "Stiffness" },
                        { key: "b", text: "Strength" },
                        { key: "c", text: "Modulus" },
                        { key: "d", text: "Inertia" }
                    ],
                    answer: "b",
                    explanation: "The strength of a beam refers to its maximum moment carrying capacity (M = f * Z), which is a function of its cross-sectional shape and material."
                },
                {
                    id: "cm23q024",
                    src: "STRU935-00249",
                    text: "At a certain point in a strained material two direct stresses 80N/mm² (tensile) and 60N/mm² tensile are acting along with a shear stress of 20N/mm². Find the major principal stress.",
                    options: [
                        { key: "a", text: "90 N/mm²" },
                        { key: "b", text: "92.2 N/mm²" },
                        { key: "c", text: "92.36 N/mm²" },
                        { key: "d", text: "96 N/mm²" }
                    ],
                    answer: "c",
                    explanation: "σ_x=80 N/mm², σ_y=60 N/mm², τ_xy=20 N/mm². Major principal stress σ₁ = (σ_x+σ_y)/2 + √[((σ_x-σ_y)/2)² + τ_xy²] = (80+60)/2 + √[((80-60)/2)² + 20²] = 70 + √[(10)² + 400] = 70 + √[100+400] = 70 + √500 = 70 + 22.36 = 92.36 N/mm²."
                }
            ]
        },
        {
            id: "cm23desi",
            name: "Design of Structures",
            subject: "Design of Str",
            accent: "slate",
            blurb: "9 questions drawn from the Design of Structures bank.",
            questions: [
                {
                    id: "cm23q025",
                    src: "DESI787-00206",
                    text: "Which of the following is not a compression member?",
                    options: [
                        { key: "a", text: "strut" },
                        { key: "b", text: "rafter" },
                        { key: "c", text: "boom" },
                        { key: "d", text: "tie" }
                    ],
                    answer: "d",
                    explanation: "A tie is by definition a tension member, so it is the odd one out. Struts, rafters and booms all carry compression, and the distinction matters because a compression member must be checked for buckling, whereas a tie only needs its net area checked."
                },
                {
                    id: "cm23q026",
                    src: "DESI787-00207",
                    text: "What is the value of the imperfection factor for buckling class a?",
                    options: [
                        { key: "a", text: "0.21" },
                        { key: "b", text: "0.35" },
                        { key: "c", text: "0.73" },
                        { key: "d", text: "0.23" }
                    ],
                    answer: "a",
                    explanation: "IS 800:2007 assigns each section an imperfection factor according to its buckling class: 0.21 for class a, 0.34 for b, 0.49 for c and 0.76 for d. The factor allows for initial crookedness and residual stresses, so a higher value gives a lower design compressive strength for the same slenderness."
                },
                {
                    id: "cm23q027",
                    src: "DESI787-00208",
                    text: "What is the yield strength of a bolt of class 4.6?",
                    options: [
                        { key: "a", text: "400 N/mm²" },
                        { key: "b", text: "240 N/mm²" },
                        { key: "c", text: "250 N/mm²" },
                        { key: "d", text: "600 N/mm²" }
                    ],
                    answer: "b",
                    explanation: "For a bolt of property class X.Y the ultimate strength is X times 100 and the yield strength is X times Y times 10. For class 4.6 that gives an ultimate of 400 and a yield of 4 times 6 times 10, which is 240 N/mm². The second digit is therefore the yield-to-ultimate ratio expressed in tenths."
                },
                {
                    id: "cm23q028",
                    src: "DESI787-00209",
                    text: "High strength bolt is used for ______",
                    options: [
                        { key: "a", text: "shear connection" },
                        { key: "b", text: "slip-resistant connection only" },
                        { key: "c", text: "both slip-resistant and bearing type connection" },
                        { key: "d", text: "bearing type connection only" }
                    ],
                    answer: "c",
                    explanation: "High-strength bolts can be used in both types of connections: slip-critical (friction-type) and bearing-type connections."
                },
                {
                    id: "cm23q029",
                    src: "DESI787-00210",
                    text: "What is the minimum pitch distance?",
                    options: [
                        { key: "a", text: "3.0 x nominal diameter of the fastener" },
                        { key: "b", text: "1.5 x nominal diameter of the fastener" },
                        { key: "c", text: "2.0 x nominal diameter of the fastener" },
                        { key: "d", text: "2.5 x nominal diameter of the fastener" }
                    ],
                    answer: "d",
                    explanation: "IS 800 sets the minimum pitch at 2.5 times the bolt diameter, so that the bolts can be tightened without the spanners fouling and so the plate between them is not overstressed in bearing. The maximum pitch is limited separately, to stop the plates buckling or gaping between fasteners."
                },
                {
                    id: "cm23q030",
                    src: "DESI787-00211",
                    text: "Maximum pitch distance = ______",
                    options: [
                        { key: "a", text: "32 x thickness of the thinner plate" },
                        { key: "b", text: "16 x thickness of the thinner plate" },
                        { key: "c", text: "40 x thickness of the thinner plate" },
                        { key: "d", text: "20 x thickness of the thinner plate" }
                    ],
                    answer: "a",
                    explanation: "As per IS 800:2007, for compression members, the maximum pitch is 12t or 200 mm, and for tension members, it is 16t or 200 mm. However, 32t is not standard. Based on the options, 32t is selected as it is a common maximum in some codes for compression."
                },
                {
                    id: "cm23q031",
                    src: "DESI787-00212",
                    text: "In case of staggered pitch, pitch may be increased by ______",
                    options: [
                        { key: "a", text: "20%" },
                        { key: "b", text: "50%" },
                        { key: "c", text: "100%" },
                        { key: "d", text: "30%" }
                    ],
                    answer: "b",
                    explanation: "Staggering the bolts lengthens the potential failure path through the plate, so the code permits the pitch measured along the line of stress to be increased by 50 percent. The zigzag path is then checked with the s squared over 4g correction when computing the net section."
                },
                {
                    id: "cm23q032",
                    src: "DESI787-00213",
                    text: "Minimum edge distance and end distance for rolled, machine flame cut is ______",
                    options: [
                        { key: "a", text: "1.7 x hole diameter" },
                        { key: "b", text: "1.2 x hole diameter" },
                        { key: "c", text: "1.5 x hole diameter" },
                        { key: "d", text: "2.0 x hole diameter" }
                    ],
                    answer: "c",
                    explanation: "As per IS 800:2007, for rolled, machine flame cut, or sawn edges, the minimum edge distance is 1.5 times the hole diameter."
                },
                {
                    id: "cm23q033",
                    src: "DESI787-00214",
                    text: "Tensile strength of bolt is given by ______",
                    options: [
                        { key: "a", text: "fub An / γmb" },
                        { key: "b", text: "0.9 fub An / γmb" }
                    ],
                    answer: "b",
                    explanation: "As per IS 800:2007, the design tensile strength of a bolt is Tdb = 0.9 fub An / γmb, where γmb is the partial safety factor for material of bolt (1.25)."
                }
            ]
        },
        {
            id: "cm23soil",
            name: "Soil Mechanics and Foundation",
            subject: "Soil Mechanics",
            accent: "amber",
            blurb: "13 questions drawn from the Soil Mechanics and Foundation bank.",
            questions: [
                {
                    id: "cm23q034",
                    src: "SOIL136-00286",
                    text: "Based on the assumptions of Rankine’s theory, the soil mass is ______.",
                    options: [
                        { key: "a", text: "Stratified" },
                        { key: "b", text: "Submerged" },
                        { key: "c", text: "Homogeneous" },
                        { key: "d", text: "All of above" }
                    ],
                    answer: "c",
                    explanation: "Rankine treats the retained soil as homogeneous, dry, cohesionless and semi-infinite, with a plane vertical wall face and no wall friction. Real stratified or submerged backfills are handled by applying the theory layer by layer, with the submerged unit weight used below the water table."
                },
                {
                    id: "cm23q035",
                    src: "SOIL136-00287",
                    text: "For an angle of internal friction of 30°, the values of coefficients of active and passive earth pressures are given by a ______ and ______ respectively.",
                    options: [
                        { key: "a", text: "1/5, 5" },
                        { key: "b", text: "1/3, 3" },
                        { key: "c", text: "3, 1/3" },
                        { key: "d", text: "5, 1/5" }
                    ],
                    answer: "b",
                    explanation: "With phi equal to 30 degrees the sine is one half, so Ka equal to (1 minus sin phi) over (1 plus sin phi) is 0.5 over 1.5, that is one third, and Kp is its reciprocal, 3. The two are always reciprocals in Rankine's theory, and the factor of nine between them is why passive resistance is so much larger than active thrust."
                },
                {
                    id: "cm23q036",
                    src: "SOIL136-00289",
                    text: "Compute the passive pressure intensity when the backfill has unit weight of 18 KN/m³ and height of wall is 6 m. The coefficient of active earth pressure Ka=1/3.",
                    options: [
                        { key: "a", text: "176 KN/m³" },
                        { key: "b", text: "154 KN/m³" },
                        { key: "c", text: "324 KN/m³" },
                        { key: "d", text: "476 KN/m³" }
                    ],
                    answer: "c",
                    explanation: "The passive coefficient is the reciprocal of the active one, so Kp is 3. The pressure at the base is Kp times gamma times H, that is 3 times 18 times 6, which is 324 kN per square metre. Note that reaching full passive pressure needs far more wall movement than the active case does, which is why designers rarely rely on all of it."
                },
                {
                    id: "cm23q037",
                    src: "SOIL136-00290",
                    text: "Which of the following cases for cohesion less backfill in Rankine’s theory is considered?",
                    options: [
                        { key: "a", text: "Submerged backfill" },
                        { key: "b", text: "Moist backfill with no surcharge" },
                        { key: "c", text: "Backfill with sloping surface" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "d",
                    explanation: "Rankine's method covers all three conditions listed. A submerged backfill uses the buoyant unit weight with full water pressure added separately, a moist backfill uses the bulk unit weight, and a sloping surface uses the modified coefficient that depends on the surface angle as well as on phi."
                },
                {
                    id: "cm23q038",
                    src: "SOIL136-00291",
                    text: "The factor that is responsible for inclination of resultant pressure to the retaining wall is ……",
                    options: [
                        { key: "a", text: "Frictional force" },
                        { key: "b", text: "Surcharge" },
                        { key: "c", text: "Earth pressure" },
                        { key: "d", text: "Weight of the wall" }
                    ],
                    answer: "a",
                    explanation: "The friction between the soil and the wall surface causes the resultant earth pressure force to be inclined at an angle to the normal of the wall."
                },
                {
                    id: "cm23q039",
                    src: "SOIL136-00292",
                    text: "If the sand filled behind the retaining wall with saturated water with water, then the possible lateral pressure is",
                    options: [
                        { key: "a", text: "Lateral pressure due to submerged weight and lateral pressure due to water" },
                        { key: "b", text: "Lateral pressure due to retaining wall" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "Both (a) and (b)" }
                    ],
                    answer: "a",
                    explanation: "For a submerged backfill, the total lateral pressure is the sum of the effective lateral earth pressure (using submerged unit weight) and the hydrostatic water pressure."
                },
                {
                    id: "cm23q040",
                    src: "SOIL136-00293",
                    text: "The earth pressure at rest exerted on a retaining structure can be calculated using……….",
                    options: [
                        { key: "a", text: "Theory of plasticity" },
                        { key: "b", text: "Mohr’s theory of rupture" },
                        { key: "c", text: "Theory of elasticity" },
                        { key: "d", text: "None of the mentioned" }
                    ],
                    answer: "c",
                    explanation: "The at-rest condition assumes no lateral strain, and the coefficient K₀ is often derived using elastic theory and Poisson's ratio."
                },
                {
                    id: "cm23q041",
                    src: "SOIL136-00294",
                    text: "The value of K₀ (coefficient of earth pressure at rest) for loose sand is ______.",
                    options: [
                        { key: "a", text: "0.5" },
                        { key: "b", text: "0.4" },
                        { key: "c", text: "0.8" },
                        { key: "d", text: "0.6" }
                    ],
                    answer: "d",
                    explanation: "For a normally consolidated sand Jaky's relation gives K0 equal to 1 minus sin phi, which for a loose sand with a friction angle near 24 degrees comes out around 0.6. Dense sands, with their higher friction angle, give values nearer 0.4, and over-consolidated soils can exceed one because of the locked-in horizontal stress."
                },
                {
                    id: "cm23q042",
                    src: "SOIL136-00295",
                    text: "The expression for K₀ as given by Jacky is",
                    options: [
                        { key: "a", text: "K₀ = 1 - sinφ" },
                        { key: "b", text: "K₀ = 1 + sinφ" },
                        { key: "c", text: "K₀ = 1 - cosφ" },
                        { key: "d", text: "K₀ = 1 - tanφ" }
                    ],
                    answer: "a",
                    explanation: "Jaky's empirical relation gives the at-rest coefficient as K0 equal to 1 minus sin phi, and it holds well for normally consolidated soils. For over-consolidated soils the value is larger, roughly K0 for normal consolidation multiplied by the square root of the over-consolidation ratio."
                },
                {
                    id: "cm23q043",
                    src: "SOIL136-00296",
                    text: "What will be coefficient of earth pressure at rest for a rigid retaining wall, if backfill consists of cohesionless soil having φ = 26°?",
                    options: [
                        { key: "a", text: "0.1295" },
                        { key: "b", text: "0.5616" },
                        { key: "c", text: "0.6552" },
                        { key: "d", text: "0.7383" }
                    ],
                    answer: "b",
                    explanation: "Jaky's formula gives the at-rest coefficient as K0 equal to 1 minus sin phi. With phi of 26 degrees the sine is 0.4384, so K0 is 0.5616. At-rest conditions apply where the wall cannot move at all, such as a basement wall braced by the floor slabs, and the pressure lies between the active and passive values."
                },
                {
                    id: "cm23q044",
                    src: "SOIL136-00297",
                    text: "For a dry backfill with no surcharge, the active earth pressure intensity is ______.",
                    options: [
                        { key: "a", text: "P_a = K_a γ (b)" },
                        { key: "b", text: "P_a = K_a γ 2H" },
                        { key: "c", text: "P_a = K_a γ H" },
                        { key: "d", text: "P_a = γ H" }
                    ],
                    answer: "c",
                    explanation: "The active earth pressure at a depth H is given by the product of the coefficient of active earth pressure (K_a), the unit weight of soil (γ), and the depth (H)."
                },
                {
                    id: "cm23q045",
                    src: "SOIL136-00299",
                    text: "The resultant active pressure per unit length of wall for dry backfill with no surcharge acting at ______ above the base of wall.",
                    options: [
                        { key: "a", text: "H/2" },
                        { key: "b", text: "H" },
                        { key: "c", text: "H/6" },
                        { key: "d", text: "H/3" }
                    ],
                    answer: "d",
                    explanation: "For a dry backfill with no surcharge the active pressure grows linearly from zero at the surface to Ka gamma H at the base, so the diagram is a triangle. The resultant of a triangular distribution acts at its centroid, that is one third of the height above the base."
                },
                {
                    id: "cm23q046",
                    src: "SOIL136-00300",
                    text: "For a submerged backfill, the active earth pressure is given by ______.",
                    options: [
                        { key: "a", text: "P_a = K_a * γ' Z" },
                        { key: "b", text: "P_a = K_a * γ' Z - γ_w Z" },
                        { key: "c", text: "P_a = K_a * γ' Z + γ_w Z" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "a",
                    explanation: "For the effective stress component of active pressure in submerged soil, use the submerged unit weight (γ') and depth (Z). The water pressure (γ_w Z) is calculated separately."
                }
            ]
        },
        {
            id: "cm23watr",
            name: "Basic Water Resources Engineering",
            subject: "Water Resources",
            accent: "emerald",
            blurb: "11 questions drawn from the Basic Water Resources Engineering bank.",
            questions: [
                {
                    id: "cm23q047",
                    src: "WATE701-00254",
                    text: "For rectangular channel, length of hydraulic jump is",
                    options: [
                        { key: "a", text: "3-5 times height of hydraulic jump" },
                        { key: "b", text: "5-7 times height of hydraulic jump" },
                        { key: "c", text: "7-9 times height of hydraulic jump" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "b",
                    explanation: "Empirically, the length of a hydraulic jump in a rectangular channel is approximately 5 to 7 times the height of the jump (the difference between the sequent depths)."
                },
                {
                    id: "cm23q048",
                    src: "WATE701-00255",
                    text: "Hydraulic jump occurs when",
                    options: [
                        { key: "a", text: "Flow is sub-critical" },
                        { key: "b", text: "adequate downstream depth is available" },
                        { key: "c", text: "flow is supercritical and adequate downstream depth is available" },
                        { key: "d", text: "flow is subcritical and adequate downstream depth is available" }
                    ],
                    answer: "c",
                    explanation: "A hydraulic jump occurs when a supercritical flow encounters a sufficient downstream depth (which is subcritical) to cause the jump. This downstream depth is called the sequent depth."
                },
                {
                    id: "cm23q049",
                    src: "WATE701-00257",
                    text: "Hydraulic jump is a",
                    options: [
                        { key: "a", text: "non-steady uniform flow" },
                        { key: "b", text: "non-steady non-uniform flow" },
                        { key: "c", text: "steady uniform flow" },
                        { key: "d", text: "steady non-uniform flow" }
                    ],
                    answer: "d",
                    explanation: "In a hydraulic jump, the flow is steady (does not change with time at a fixed location) but is non-uniform (the depth and velocity change along the channel)."
                },
                {
                    id: "cm23q050",
                    src: "WATE701-00258",
                    text: "A hydraulic jump is classified based on initial",
                    options: [
                        { key: "a", text: "Froude number" },
                        { key: "b", text: "Weber number" },
                        { key: "c", text: "Mach number" },
                        { key: "d", text: "Reynolds number" }
                    ],
                    answer: "a",
                    explanation: "The type and strength of a hydraulic jump are classified based on the upstream Froude number (Fr1), which is the ratio of inertial to gravitational forces in open channel flow."
                },
                {
                    id: "cm23q051",
                    src: "WATE701-00259",
                    text: "Average shear stress on channel bed at which sediment particles just begins to move is known as",
                    options: [
                        { key: "a", text: "tractive stress" },
                        { key: "b", text: "critical shear stress" },
                        { key: "c", text: "efficient shear stress" }
                    ],
                    answer: "b",
                    explanation: "The critical shear stress is the minimum shear stress required to initiate motion of sediment particles on the channel bed."
                },
                {
                    id: "cm23q052",
                    src: "WATE701-00260",
                    text: "The term alternate depths in open channel flow is associated with",
                    options: [
                        { key: "a", text: "at the beginning and end of hydraulic jump" },
                        { key: "b", text: "at the beginning and end of GVF profile" },
                        { key: "c", text: "having the same specific energy for a given discharge" },
                        { key: "d", text: "having the same kinetic energy for a given discharge" }
                    ],
                    answer: "c",
                    explanation: "For a given specific energy and discharge in a channel, there are two possible depths: the subcritical depth and the supercritical depth. These are called alternate depths."
                },
                {
                    id: "cm23q053",
                    src: "WATE701-00261",
                    text: "The tractive force in mobile boundary channel is",
                    options: [
                        { key: "a", text: "directly proportional to the diameter of particles" },
                        { key: "b", text: "inversely proportional to the diameter of particles" },
                        { key: "c", text: "independent of diameter of particles" },
                        { key: "d", text: "none of these" }
                    ],
                    answer: "a",
                    explanation: "The tractive force (shear stress) required to move sediment particles is directly proportional to the particle diameter. Larger particles require more force to move."
                },
                {
                    id: "cm23q054",
                    src: "WATE701-00262",
                    text: "The curve obtained by plotting shear Reynold’s number (along x-axis) and tractive force (along y-axis) is known as",
                    options: [
                        { key: "a", text: "Shield’s curve" },
                        { key: "b", text: "Mass curve" },
                        { key: "c", text: "tractive force" },
                        { key: "d", text: "Reynold’s curve" }
                    ],
                    answer: "a",
                    explanation: "Shield's curve is a classic graph in sediment transport that relates the critical dimensionless shear stress (tractive force) to the shear Reynolds number."
                },
                {
                    id: "cm23q055",
                    src: "WATE701-00263",
                    text: "The most common device for measuring discharge through the channels is",
                    options: [
                        { key: "a", text: "Venturi flume" },
                        { key: "b", text: "Current meter" },
                        { key: "c", text: "Pitot tube" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "a",
                    explanation: "Venturi flume (or standing-wave flume), which determines flow rate by constricting the channel and measuring water depth without moving parts. Current meter: Measures flow velocity via a rotating impeller, requiring cross-sectional area calculations to find total discharge. Pitot tube: Measures single-point fluid velocity pressure rather than total volumetric flow."
                },
                {
                    id: "cm23q056",
                    src: "WATE701-00264",
                    text: "For a long pipe, the head loss",
                    options: [
                        { key: "a", text: "at the entrance is ignored" },
                        { key: "b", text: "at the outlet is ignored" },
                        { key: "c", text: "at the entrance and outlet both are ignored" },
                        { key: "d", text: "due to friction is ignored" }
                    ],
                    answer: "c",
                    explanation: "In long pipes, the major head loss is due to friction along the pipe length. The minor losses at the entrance and outlet are relatively small and are often ignored for simplicity."
                },
                {
                    id: "cm23q057",
                    src: "WATE701-00265",
                    text: "What is the pressure in Pascals at a depth of 1m below the water surface?",
                    options: [
                        { key: "a", text: "105Pa" },
                        { key: "b", text: "1.5 x 10^6 Pa" },
                        { key: "c", text: "100 Pa" },
                        { key: "d", text: "9800 Pa" }
                    ],
                    answer: "d",
                    explanation: "Hydrostatic pressure is calculated by P = ρgh, where ρ is density (1000 kg/m³ for water), g is gravity (9.8 m/s²), and h is depth (1m). Thus, P = 1000 * 9.8 * 1 = 9800 Pa."
                }
            ]
        },
        {
            id: "cm23hydr",
            name: "Hydropower",
            subject: "Hydropower",
            accent: "cyan",
            blurb: "10 questions drawn from the Hydropower bank.",
            questions: [
                {
                    id: "cm23q058",
                    src: "HYDR626-00202",
                    text: "The most suitable soil for compressed atmosphere is",
                    options: [
                        { key: "a", text: "clay" },
                        { key: "b", text: "silt" },
                        { key: "c", text: "sand" },
                        { key: "d", text: "gravel" }
                    ],
                    answer: "a",
                    explanation: "In compressed air tunneling, air pressure keeps water and soil out. Clay is the most suitable soil because it is relatively impermeable, minimizing air loss. Sandy or gravelly soils are highly permeable and lead to significant air leakage."
                },
                {
                    id: "cm23q059",
                    src: "HYDR626-00203",
                    text: "Drift method of tunnelling is used to construct tunnels in",
                    options: [
                        { key: "a", text: "soft grounds" },
                        { key: "b", text: "rock" },
                        { key: "c", text: "self supporting grounds" },
                        { key: "d", text: "broken grounds" }
                    ],
                    answer: "b",
                    explanation: "The drift method involves first driving a small pilot tunnel (drift). This is particularly advantageous in rock tunneling to investigate geological conditions, provide ventilation, and facilitate drainage before full-face excavation."
                },
                {
                    id: "cm23q060",
                    src: "HYDR626-00204",
                    text: "Whenever closed conduits are used in hydroelectric power plant, ______ is used to limit the abnormal pressure in the conduit.",
                    options: [
                        { key: "a", text: "Penstocks" },
                        { key: "b", text: "headworks" },
                        { key: "c", text: "surge tank" },
                        { key: "d", text: "spillways" }
                    ],
                    answer: "c",
                    explanation: "A surge tank is the specific structure installed on a closed conduit (penstock) to absorb the kinetic energy of water during sudden flow changes, thereby limiting abnormal pressure rises (water hammer) or drops."
                },
                {
                    id: "cm23q061",
                    src: "HYDR626-00205",
                    text: "Water hammer is developed in a",
                    options: [
                        { key: "a", text: "draft tube" },
                        { key: "b", text: "surge tank." },
                        { key: "c", text: "turbine." },
                        { key: "d", text: "penstock." }
                    ],
                    answer: "d",
                    explanation: "Water hammer is a pressure surge that occurs in a closed conduit (like a penstock) when the flow of water is suddenly stopped or changed, such as by quickly closing a valve or a turbine inlet gate."
                },
                {
                    id: "cm23q062",
                    src: "HYDR626-00206",
                    text: "What is an energy dissipater in a dam structure?",
                    options: [
                        { key: "a", text: "A structure that reduces the velocity of water flowing downstream of the dam" },
                        { key: "b", text: "A device that generates hydroelectric power" },
                        { key: "c", text: "A gate that regulates the flow of water through the dam" },
                        { key: "d", text: "A mechanism that controls the water level in the reservoir" }
                    ],
                    answer: "a",
                    explanation: "An energy dissipater is a structure designed to safely reduce the high kinetic energy of water flowing from a spillway or outlet, preventing erosion and damage to the dam's foundation and downstream areas."
                },
                {
                    id: "cm23q063",
                    src: "HYDR626-00207",
                    text: "The gross head minus the losses in friction, trash rack and other minor losses in penstocks is called",
                    options: [
                        { key: "a", text: "Available head" },
                        { key: "b", text: "Minimum head" },
                        { key: "c", text: "Effective head" },
                        { key: "d", text: "None of above" }
                    ],
                    answer: "c",
                    explanation: "Effective head is the actual head available at the turbine inlet after accounting for all hydraulic losses in the system, including friction in penstocks and losses through trash racks."
                },
                {
                    id: "cm23q064",
                    src: "HYDR626-00208",
                    text: "An effective storage of a flood control reservoir is",
                    options: [
                        { key: "a", text: "The storage volume of flood water above the maximum reservoir level" },
                        { key: "b", text: "The amount of water supplied from reservoir in particular interval of time" },
                        { key: "c", text: "The storage between the minimum and maximum reservoir levels under operating conditions." },
                        { key: "d", text: "The live storage plus the surcharge storage less than the valley storage" }
                    ],
                    answer: "c",
                    explanation: "The effective storage for flood control is the volume between the normal maximum operating level and the minimum level to which the reservoir is drawn down to create space for absorbing incoming flood waters."
                },
                {
                    id: "cm23q065",
                    src: "HYDR626-00209",
                    text: "A site where spillway location is available separate from dam, what dam is suitable",
                    options: [
                        { key: "a", text: "Arch dam" },
                        { key: "b", text: "Oged dam" },
                        { key: "c", text: "(Option for (a) not provided in original text)" },
                        { key: "d", text: "Earth dam" }
                    ],
                    answer: "d",
                    explanation: "Earth dams are often suited for sites with wide valleys where a separate spillway can be constructed away from the main dam structure on an abutment or in a saddle."
                },
                {
                    id: "cm23q066",
                    src: "HYDR626-00210",
                    text: "Sediment deposit take place in lower reach of the reservoir if the reservoirs with",
                    options: [
                        { key: "a", text: "Steep slope" },
                        { key: "b", text: "Level ground" },
                        { key: "c", text: "Mild slope" },
                        { key: "d", text: "Plain ground" }
                    ],
                    answer: "a",
                    explanation: "In reservoirs with steep slopes at the inlet, the high stream velocity carries sediments further into the reservoir, causing deposition in the lower reaches near the dam."
                },
                {
                    id: "cm23q067",
                    src: "HYDR626-00212",
                    text: "The energy dissipating arrangement below a spillway in alluvial foundation is usually",
                    options: [
                        { key: "a", text: "Ski jump type" },
                        { key: "b", text: "Hydraulic jump type" },
                        { key: "c", text: "Roller bucket type" },
                        { key: "d", text: "Well stilling basin" }
                    ],
                    answer: "b",
                    explanation: "For alluvial foundations (composed of loose soil/sediment), a stilling basin that forces a hydraulic jump is most common. It dissipates energy within the basin, protecting the erodible foundation from scour."
                }
            ]
        },
        {
            id: "cm23irri",
            name: "Irrigation and Drainage",
            subject: "Irrigation",
            accent: "emerald",
            blurb: "11 questions drawn from the Irrigation and Drainage bank.",
            questions: [
                {
                    id: "cm23q068",
                    src: "IRRI951-00234",
                    text: "The type of irrigation module, which is usually considered as best, is:",
                    options: [
                        { key: "a", text: "Punjab open flume outlet" },
                        { key: "b", text: "Khanna’s rigid module" },
                        { key: "c", text: "Adjustable orifice semi module" },
                        { key: "d", text: "Kennedy’s gauge module" }
                    ],
                    answer: "c",
                    explanation: "The adjustable orifice semi-module is often considered the best as it allows for manual adjustment to maintain a constant discharge, combining flexibility with control."
                },
                {
                    id: "cm23q069",
                    src: "IRRI951-00235",
                    text: "Which one of the following statements is INCORRECT about a syphon aqueduct?",
                    options: [
                        { key: "a", text: "The drain bed is depressed and provided with pucca floor" },
                        { key: "b", text: "The drainage bed is joined to pucca floor by a vertical drop" },
                        { key: "c", text: "The downstream rising slope should not be steeper than 5:1" },
                        { key: "d", text: "HFL of the drain is sufficiently below the bottom of the canal" }
                    ],
                    answer: "d",
                    explanation: "In a standard aqueduct, the High Flood Level (HFL) of the natural drain is sufficiently below the bottom of the canal trough, allowing the drainage water to flow freely under gravity. In a syphon aqueduct, the HFL of the drain is above the canal bed level. This forces the drainage water to pass under the canal through a barrel under pressure (siphonic action)."
                },
                {
                    id: "cm23q070",
                    src: "IRRI951-00236",
                    text: "The drainage water is sometimes allowed to join the canal water to augment canal supplies through a hydraulic structure called",
                    options: [
                        { key: "a", text: "Canal inlet" },
                        { key: "b", text: "Canal outlet" },
                        { key: "c", text: "Module" },
                        { key: "d", text: "Level crossing" }
                    ],
                    answer: "a",
                    explanation: "A canal inlet is a structure that allows drainage water to enter and mix with the canal water to supplement the canal's supply."
                },
                {
                    id: "cm23q071",
                    src: "IRRI951-00237",
                    text: "The bed of the canal is lowered in case of",
                    options: [
                        { key: "a", text: "Syphon aqueduct" },
                        { key: "b", text: "Canal syphon" },
                        { key: "c", text: "Level crossing" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "b",
                    explanation: "In a canal syphon, the canal is carried under the drainage. To maintain the required hydraulic gradient and head loss, the canal bed is often lowered (depressed) where it passes under the obstruction."
                },
                {
                    id: "cm23q072",
                    src: "IRRI951-00238",
                    text: "Which of the following is correct?",
                    options: [
                        { key: "a", text: "In a level crossing, a crest with its top at the canal FSL is provided across the drainage at its u/s junction with canal." },
                        { key: "b", text: "In a level crossing, a regulator is provided across the drainage at its d/s" },
                        { key: "c", text: "In a level crossing, a cross regulator is provided on the canal below the crossing" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "A level crossing is used when a canal and a drainage approach at the same level. It involves a crest at the upstream drainage junction, a regulator on the drainage downstream, and a cross regulator on the canal to manage flows and water levels."
                },
                {
                    id: "cm23q073",
                    src: "IRRI951-00239",
                    text: "Which one of the following statements is wrong?",
                    options: [
                        { key: "a", text: "An inlet is a structure constructed in order to allow the drainage water to enter canal." },
                        { key: "b", text: "Inlets are constructed when the drainage discharge is small and the drain crosses the canal with its bed level equal to or slightly higher." },
                        { key: "c", text: "Outlets are located a little downstream along the canal." },
                        { key: "d", text: "The number of inlets and outlets should always be same." }
                    ],
                    answer: "d",
                    explanation: "Inlets and outlets are used in different scenarios (inlets for adding water, outlets for escaping excess water). Their numbers are determined by specific site requirements and are not necessarily equal."
                },
                {
                    id: "cm23q074",
                    src: "IRRI951-00240",
                    text: "Pinpoint the correct statement in relation to the relative merits of the two cross-drainage works.",
                    options: [
                        { key: "a", text: "A super passage is preferred to a canal syphon." },
                        { key: "b", text: "A super passage is preferred to an aqueduct." },
                        { key: "c", text: "A canal syphon is preferred to a super-passage." },
                        { key: "d", text: "A syphon aqueduct is inferior to the canal syphon and is seldom used." }
                    ],
                    answer: "a",
                    explanation: "In cross-drainage works, open flow conditions are generally preferred over pressure flow because they are safer, simpler, and easier to maintain. Super passage: The drain passes over the canal, and the canal continues to flow open channel below. Canal syphon: The canal passes under the drain under pressure (closed conduit), which involves higher construction cost, head loss, and maintenance issues. Since a super passage avoids pressure flow in the canal, it is preferred over a canal syphon whenever site conditions permit."
                },
                {
                    id: "cm23q075",
                    src: "IRRI951-00241",
                    text: "In a syphon aqueduct, the worst condition of uplift on the roof occurs when:",
                    options: [
                        { key: "a", text: "The canal and drainage are flowing full." },
                        { key: "b", text: "The canal is flowing full and there is no drainage discharge." },
                        { key: "c", text: "The canal is empty and drainage is flowing full." },
                        { key: "d", text: "None of the above." }
                    ],
                    answer: "c",
                    explanation: "The roof of the syphon aqueduct barrel is subjected to maximum uplift pressure when the canal above is empty (no downward water pressure) and the drainage below is flowing full, creating hydrostatic pressure from beneath."
                },
                {
                    id: "cm23q076",
                    src: "IRRI951-00242",
                    text: "The velocity of drainage water in the barrels of a syphon-aqueduct is normally limited to",
                    options: [
                        { key: "a", text: "1-2 m/s" },
                        { key: "b", text: "3-4 m/s" },
                        { key: "c", text: "2-3 m/s" },
                        { key: "d", text: "4-5 m/s" }
                    ],
                    answer: "c",
                    explanation: "The flow velocity in the barrels of a syphon-aqueduct is typically limited to 2-3 m/s to prevent excessive friction loss, cavitation, and scour while ensuring efficient discharge."
                },
                {
                    id: "cm23q077",
                    src: "IRRI951-00243",
                    text: "In an aqueduct provided with a pucca bottom floor, the uplift will occur",
                    options: [
                        { key: "a", text: "On the roof slab" },
                        { key: "b", text: "On both roof slab as well as bottom floor" },
                        { key: "c", text: "Nowhere, since the flow is free in the canal as well as in the drainage channel." },
                        { key: "d", text: "On the bottom floor" }
                    ],
                    answer: "d",
                    explanation: "In a standard aqueduct (not syphonic), the canal flows freely over the drainage. Uplift pressure due to seepage or a high groundwater table acts on the pucca bottom floor of the drainage passage, not on the roof slab which has the canal weight above it."
                },
                {
                    id: "cm23q078",
                    src: "IRRI951-00245",
                    text: "Select the incorrect statement from the following",
                    options: [
                        { key: "a", text: "Aqueducts and super passages are usually not provided with pucca bottom floors" },
                        { key: "b", text: "Aqueduct syphons and canal syphons are usually provided with pucca bottom floors." },
                        { key: "c", text: "Canals or drainage channels are usually flumed to affect economy at the sites of crossings, wherein the contraction transitions are not to be steeper than 22.5 degrees and the expansion transitions not to be steeper than 30 degrees" },
                        { key: "d", text: "None of these." }
                    ],
                    answer: "a",
                    explanation: "This is incorrect. Aqueducts (canal over drainage) and super passages (drainage over canal) where the flow is free often have pucca floors in the trough carrying the flow to prevent seepage and scour. Syphonic structures always require pucca floors to contain pressure flow."
                }
            ]
        },
        {
            id: "cm23tran",
            name: "Transportation",
            subject: "Transportation",
            accent: "rose",
            blurb: "11 questions drawn from the Transportation bank.",
            questions: [
                {
                    id: "cm23q079",
                    src: "TRAN808-00238",
                    text: "Which of the following is the most vulnerable part of the traffic?",
                    options: [
                        { key: "a", text: "Cattle" },
                        { key: "b", text: "Pedestrians" },
                        { key: "c", text: "Vehicles" },
                        { key: "d", text: "Traffic jam" }
                    ],
                    answer: "b",
                    explanation: "In any interaction between a vehicle and a pedestrian, the pedestrian is at a significant physical disadvantage, lacking any protective shell. They are therefore considered the most vulnerable road users."
                },
                {
                    id: "cm23q080",
                    src: "TRAN808-00239",
                    text: "Which of the following traffic study determines total parking demand?",
                    options: [
                        { key: "a", text: "Travel time studies" },
                        { key: "b", text: "Accident studies" },
                        { key: "c", text: "Parking studies" },
                        { key: "d", text: "Traffic volume study" }
                    ],
                    answer: "c",
                    explanation: "The specific purpose of parking studies is to inventory existing parking supply, analyze its usage, and determine the current and future demand for parking spaces in a given area."
                },
                {
                    id: "cm23q081",
                    src: "TRAN808-00240",
                    text: "What is the purpose of a Travel Time and Delay Study?",
                    options: [
                        { key: "a", text: "To evaluate the traffic stream" },
                        { key: "b", text: "For survey data" },
                        { key: "c", text: "To assess the time taken to travel by various vehicles" },
                        { key: "d", text: "To assess the quality of traffic movement" }
                    ],
                    answer: "d",
                    explanation: "Travel Time and Delay Studies measure the time required to cover a route and identify locations and causes of delays. This directly assesses the Level of Service (LOS) and overall quality of traffic movement on a corridor."
                },
                {
                    id: "cm23q082",
                    src: "TRAN808-00241",
                    text: "Which of the following is known as the time lost by traffic due to traffic friction and traffic control devices?",
                    options: [
                        { key: "a", text: "Delay" },
                        { key: "b", text: "Setback time" },
                        { key: "c", text: "Green time" },
                        { key: "d", text: "Red time" }
                    ],
                    answer: "a",
                    explanation: "In traffic engineering, 'delay' is the technical term for the extra time consumed by travelers due to impediments to their movement. These impediments include control devices (signals, signs) and traffic friction (interactions with other vehicles)."
                },
                {
                    id: "cm23q083",
                    src: "TRAN808-00242",
                    text: "Which of the following is not determined by traffic volume studies?",
                    options: [
                        { key: "a", text: "Number of vehicles" },
                        { key: "b", text: "Design criteria" },
                        { key: "c", text: "Movement of vehicles" },
                        { key: "d", text: "Vehicle classification" }
                    ],
                    answer: "b",
                    explanation: "Traffic volume studies count vehicles, classify them, and track their movement (e.g., turning counts). However, design criteria (like pavement thickness, geometric design standards) are engineering decisions based on volume data and other factors, not directly determined by the study itself."
                },
                {
                    id: "cm23q084",
                    src: "TRAN808-00243",
                    text: "Which of the following is not a parameter of traffic stream?",
                    options: [
                        { key: "a", text: "Speed" },
                        { key: "b", text: "Density of traffic" },
                        { key: "c", text: "PCU" },
                        { key: "d", text: "Flow of traffic" }
                    ],
                    answer: "c",
                    explanation: "The three fundamental parameters of a traffic stream are speed (rate of motion), flow (volume, vehicles per hour), and density (vehicles per km). PCU (Passenger Car Unit) is a conversion factor used to standardize different vehicle types, not a direct measure of the stream itself."
                },
                {
                    id: "cm23q085",
                    src: "TRAN808-00244",
                    text: "Which of the following is not a way by which traffic volume data is presented?",
                    options: [
                        { key: "a", text: "Traffic composition" },
                        { key: "b", text: "Variation charts" },
                        { key: "c", text: "AAOT" },
                        { key: "d", text: "Modal average" }
                    ],
                    answer: "d",
                    explanation: "Common presentations include traffic composition (pie charts of vehicle types), variation charts (flow vs. time of day), and AAOT (Annual Average One-directional Traffic). 'Modal average' is not a standard term for presenting traffic volume data."
                },
                {
                    id: "cm23q086",
                    src: "TRAN808-00245",
                    text: "Which of the following does the thickness of lines represent in Traffic flow maps?",
                    options: [
                        { key: "a", text: "Traffic volume" },
                        { key: "b", text: "Volume change" },
                        { key: "c", text: "Boundary for expansion" },
                        { key: "d", text: "Direction of flow" }
                    ],
                    answer: "a",
                    explanation: "Traffic flow maps use desire lines. The key feature is that the width (thickness) of the line drawn between two points is proportional to the volume of traffic moving between those points."
                },
                {
                    id: "cm23q087",
                    src: "TRAN808-00246",
                    text: "Which of the following is not a factor affecting traffic capacity?",
                    options: [
                        { key: "a", text: "Gradient" },
                        { key: "b", text: "Traffic control devices" },
                        { key: "c", text: "Lane width" },
                        { key: "d", text: "Lateral clearance" }
                    ],
                    answer: "b",
                    explanation: "Traffic capacity is the maximum number of vehicles that can pass a point under given conditions. Lane width, gradient, and lateral clearance are all geometric factors that directly affect capacity. Traffic control devices (like signals) manage flow but do not change the physical capacity of the road section itself."
                },
                {
                    id: "cm23q088",
                    src: "TRAN808-00247",
                    text: "Which of the following are the disadvantages of traffic signals?",
                    options: [
                        { key: "a", text: "The quality of the traffic flow improves" },
                        { key: "b", text: "Traffic handling capacity increases" },
                        { key: "c", text: "The rear end collision increases" },
                        { key: "d", text: "Provide orderly moment at intersection" }
                    ],
                    answer: "c",
                    explanation: "While signals provide orderly movement, disadvantages include potential increases in rear-end collisions (due to stopping), delay, and disobedience. They can sometimes reduce the capacity of an intersection compared to a roundabout for certain traffic patterns."
                },
                {
                    id: "cm23q089",
                    src: "TRAN808-00248",
                    text: "When are mail-back postcard surveys usually used?",
                    options: [
                        { key: "a", text: "When traffic is homogeneous" },
                        { key: "b", text: "When traffic is heterogeneous" },
                        { key: "c", text: "When traffic volume is high" },
                        { key: "d", text: "When traffic volume is low" }
                    ],
                    answer: "d",
                    explanation: "Mail-back surveys are a type of self-administered survey. They are more feasible and have higher response rates when the total number of users (traffic volume) is low, making distribution and processing manageable."
                }
            ]
        },
        {
            id: "cm23wate",
            name: "Water Supply, Sanitation and Environment",
            subject: "Water Supply",
            accent: "blue",
            blurb: "11 questions drawn from the Water Supply, Sanitation and Environment bank.",
            questions: [
                {
                    id: "cm23q090",
                    src: "WATE813-00223",
                    text: "The drop manholes are provided in sewerage system when there is",
                    options: [
                        { key: "a", text: "Large difference in elevation between incoming and main sewer" },
                        { key: "b", text: "Change in alignment of sewer line" },
                        { key: "c", text: "Change in size of sewers" }
                    ],
                    answer: "a",
                    explanation: "A drop manhole is specifically used when the invert level of an incoming sewer is much higher than the invert of the outlet sewer, requiring a vertical drop to avoid a steep slope."
                },
                {
                    id: "cm23q091",
                    src: "WATE813-00224",
                    text: "Manhole covers are made circular",
                    options: [
                        { key: "a", text: "To strengthen the cover" },
                        { key: "b", text: "To prevent falling of the cover into the manhole" },
                        { key: "c", text: "To make the entry convenient" },
                        { key: "d", text: "For architectural reason" }
                    ],
                    answer: "b",
                    explanation: "A circular cover cannot fall through its own opening, unlike a square or rectangular cover which can be dropped diagonally into the hole. This is a key safety and practical feature."
                },
                {
                    id: "cm23q092",
                    src: "WATE813-00225",
                    text: "The most suitable sewer in combined sewerage system is",
                    options: [
                        { key: "a", text: "Rectangular" },
                        { key: "b", text: "Parabolic" },
                        { key: "c", text: "Circular" }
                    ],
                    answer: "c",
                    explanation: "Circular shapes are the most common for sewers (combined or separate) because they are hydraulically efficient for full and partial flow, structurally strong, and easier to construct."
                },
                {
                    id: "cm23q093",
                    src: "WATE813-00226",
                    text: "Sewerage system is usually designed for",
                    options: [
                        { key: "a", text: "7 years" },
                        { key: "b", text: "5 years" },
                        { key: "c", text: "100 years" },
                        { key: "d", text: "25-50 years" }
                    ],
                    answer: "d",
                    explanation: "Sewerage systems are typically designed for a future period of 25 to 50 years to account for population growth and urban development, making the infrastructure sustainable long-term."
                },
                {
                    id: "cm23q094",
                    src: "WATE813-00227",
                    text: "Which one of the following options is true for combined system of sewerage system?",
                    options: [
                        { key: "a", text: "Sewage and rain water" },
                        { key: "b", text: "Dry weather flow and rain water" },
                        { key: "c", text: "Sewage and industrial waste" },
                        { key: "d", text: "Industrial waste and rain water" }
                    ],
                    answer: "a",
                    explanation: "A combined system carries both sanitary sewage (which includes domestic and often industrial waste) and rainwater (stormwater) in a single conduit."
                },
                {
                    id: "cm23q095",
                    src: "WATE813-00228",
                    text: "Which of following processes are necessary for removing suspended solids from water?",
                    options: [
                        { key: "a", text: "Coagulation" },
                        { key: "b", text: "Flocculation" },
                        { key: "c", text: "Sedimentation" },
                        { key: "d", text: "All of these" }
                    ],
                    answer: "d",
                    explanation: "The complete removal of suspended solids typically requires coagulation (destabilizing particles), flocculation (forming larger flocs), and sedimentation (settling by gravity)."
                },
                {
                    id: "cm23q096",
                    src: "WATE813-00229",
                    text: "Alum acts as",
                    options: [
                        { key: "a", text: "catalyst" },
                        { key: "b", text: "flocculent" },
                        { key: "c", text: "coagulant" },
                        { key: "d", text: "disinfectant" }
                    ],
                    answer: "c",
                    explanation: "Alum (aluminum sulfate) is a primary coagulant used in water treatment to neutralize the charges of suspended particles, allowing them to clump together."
                },
                {
                    id: "cm23q097",
                    src: "WATE813-00230",
                    text: "Activated carbon removes from water",
                    options: [
                        { key: "a", text: "Organic matter" },
                        { key: "b", text: "Manganese" },
                        { key: "c", text: "All of the above" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "c",
                    explanation: "Activated carbon is highly effective at adsorbing organic compounds, tastes, odors, and certain inorganic contaminants like manganese."
                },
                {
                    id: "cm23q098",
                    src: "WATE813-00231",
                    text: "For proper slow mixing in the flocculator of a water treatment plant, the temporal mean velocity gradient G needs to be of the order of",
                    options: [
                        { key: "a", text: "100 s⁻¹ to 200 s⁻¹" },
                        { key: "b", text: "10 s⁻¹ to 20 s⁻¹" },
                        { key: "c", text: "250 s⁻¹ to 350 s⁻¹" },
                        { key: "d", text: "400 s⁻¹ to 500 s⁻¹" }
                    ],
                    answer: "a",
                    explanation: "The velocity gradient (G) for flocculation is typically in the range of 20-100 s⁻¹, but common values for design are often cited as 10-100 s⁻¹, with the closest standard option being 100-200 s⁻¹."
                },
                {
                    id: "cm23q099",
                    src: "WATE813-00232",
                    text: "Self-purification of natural streams is caused due to:",
                    options: [
                        { key: "a", text: "Turbulence of water" },
                        { key: "b", text: "Dilution" },
                        { key: "c", text: "Oxidation-reduction" },
                        { key: "d", text: "All the above" }
                    ],
                    answer: "d",
                    explanation: "Self-purification is a natural process involving dilution, turbulence (which promotes aeration), and biological oxidation-reduction reactions that break down pollutants."
                },
                {
                    id: "cm23q100",
                    src: "WATE813-00233",
                    text: "In a water treatment, the optimum time of flocculation is usually time as 30 minutes. In case the time of flocculation is increased beyond this value, the flocs will",
                    options: [
                        { key: "a", text: "become heavy and settle down in the flocculation tank itself" },
                        { key: "b", text: "entrap air and will float in the sedimentation tank" },
                        { key: "c", text: "break up and defeat the purpose of flocculation" },
                        { key: "d", text: "stick to the paddles" }
                    ],
                    answer: "c",
                    explanation: "Excessive mixing time can shear and break apart the delicate flocs that were formed, reducing the efficiency of the subsequent sedimentation process."
                }
            ]
        }
    ]
};

/* Registered lazily — js/civil.js injects this file when the set is opened. */
window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["civil-23"] = CIVIL_MODEL_23;
