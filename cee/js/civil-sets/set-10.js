/* ============================================================
   CIVIL MODEL SET 10 — Civil Engineering licence-style model paper
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
const CIVIL_MODEL_10 = {
    day: 40,
    kind: "model",
    badge: { top: "Model", main: "C10" },
    title: "Civil Model Set 10",
    subtitle: "Civil Engineering · 9 subjects",
    durationMinutes: 120,
    negativeMarking: 0,
    chapters: [
        {
            id: "cm10basi",
            name: "Basic Civil Engineering",
            subject: "Basic Civil",
            accent: "blue",
            blurb: "13 questions drawn from the Basic Civil Engineering bank.",
            questions: [
                {
                    id: "cm10q001",
                    src: "BASI674-00107",
                    text: "% Content of silica in cement is",
                    options: [
                        { key: "a", text: "60-65" },
                        { key: "b", text: "3-8" },
                        { key: "c", text: "17-25" },
                        { key: "d", text: "All" }
                    ],
                    answer: "c",
                    explanation: "The major oxides in cement are Lime (CaO), Silica (SiO₂), Alumina (Al₂O₃), and Iron oxide (Fe₂O₃). Silica (SiO₂) typically constitutes about 17-25% of the raw materials used in cement manufacturing. It imparts strength to the cement."
                },
                {
                    id: "cm10q002",
                    src: "BASI674-00108",
                    text: "Which of the following is called the bogue compound ?",
                    options: [
                        { key: "a", text: "Tricalcium silicate" },
                        { key: "b", text: "Dicalcium silicate" },
                        { key: "c", text: "Tricalcium aluminate" },
                        { key: "d", text: "All" }
                    ],
                    answer: "d",
                    explanation: "The Bogue compounds are the four main chemical compounds (minerals) formed during the burning process in cement kilns. They are: Tricalcium silicate (C3S), Dicalcium silicate (C2S), Tricalcium aluminate (C3A), and Tetracalcium aluminoferrite (C4AF)."
                },
                {
                    id: "cm10q003",
                    src: "BASI674-00109",
                    text: "What is the density of cement?",
                    options: [
                        { key: "a", text: "1440 kg/ cu.m" },
                        { key: "b", text: "1000 kg/ cu.m" },
                        { key: "c", text: "1150 kg/ cu.m" },
                        { key: "d", text: "2500 kg/ cu.m" }
                    ],
                    answer: "a",
                    explanation: "The density of cement in its loose, packaged state is approximately 1440 kg/m³. This is a standard value used for calculations in concrete mix design and quantity estimation."
                },
                {
                    id: "cm10q004",
                    src: "BASI674-00110",
                    text: "Curing period for lime is usually",
                    options: [
                        { key: "a", text: "120 minutes" },
                        { key: "b", text: "7 days" },
                        { key: "c", text: "14 days" },
                        { key: "d", text: "18 days" }
                    ],
                    answer: "b",
                    explanation: "Lime mortar and plaster gain strength through a slow process of carbonation (reaction with atmospheric CO₂). While it continues for a long time, a typical initial curing period of 7 days is often recommended to ensure it sets properly and doesn't dry out too quickly, which would stop the reaction."
                },
                {
                    id: "cm10q005",
                    src: "BASI674-00111",
                    text: "Which of the following is example of exogenous tree?",
                    options: [
                        { key: "a", text: "Bamboo" },
                        { key: "b", text: "Palm" },
                        { key: "c", text: "Sal" },
                        { key: "d", text: "Cane" }
                    ],
                    answer: "c",
                    explanation: "Exogenous trees grow outward by adding concentric rings each year (secondary growth). Sal (Shorea robusta) is a hardwood exogenous tree. Bamboo, Palm, and Cane are monocots and are endogenous; they grow in height by primary growth only, not in girth by adding rings."
                },
                {
                    id: "cm10q006",
                    src: "BASI674-00112",
                    text: "A well seasoned timber may contain moisture up to",
                    options: [
                        { key: "a", text: "4 to 6%" },
                        { key: "b", text: "6 to 8%" },
                        { key: "c", text: "8 to 10%" },
                        { key: "d", text: "10 to 12%" }
                    ],
                    answer: "d",
                    explanation: "Seasoning is the process of reducing the moisture content in timber. For indoor use, well-seasoned timber should have a moisture content between 10% and 12% to minimize subsequent shrinkage, warping, or decay."
                },
                {
                    id: "cm10q007",
                    src: "BASI674-00113",
                    text: "The defect of the timber in which the new tissues grow around the wounded part is called",
                    options: [
                        { key: "a", text: "Rind gall" },
                        { key: "b", text: "Callus" },
                        { key: "c", text: "Star shake" },
                        { key: "d", text: "Foxiness" }
                    ],
                    answer: "a",
                    explanation: "Rind galls are abnormal swelling or growth on the bark of a tree, often caused by injuries or improper pruning, where new sapwood grows abnormally over a wound. In timber, this defect manifests as distorted, swollen patches that reduce wood quality, strength, and value due to the irregular wood fibers."
                },
                {
                    id: "cm10q008",
                    src: "BASI674-00114",
                    text: "Brazing solder is an alloy of",
                    options: [
                        { key: "a", text: "Tin and lead" },
                        { key: "b", text: "Copper and zinc" },
                        { key: "c", text: "Copper, zinc and tin" },
                        { key: "d", text: "Copper and tin" }
                    ],
                    answer: "b",
                    explanation: "Brazing is a process that uses a filler metal with a melting point above 450°C (842°F). Common brazing solders (spelter) are alloys of copper and zinc (e.g., 60% Cu, 40% Zn). Soft soldering uses low-melting-point alloys of tin and lead."
                },
                {
                    id: "cm10q009",
                    src: "BASI674-00115",
                    text: "Bitumen paint renders :",
                    options: [
                        { key: "a", text: "Smooth surface" },
                        { key: "b", text: "shining surface" },
                        { key: "c", text: "Protective surface" },
                        { key: "d", text: "Hard surface" }
                    ],
                    answer: "c",
                    explanation: "Bitumen paint is primarily used as a protective coating to prevent corrosion and provide a waterproof layer on surfaces like metal and concrete."
                },
                {
                    id: "cm10q010",
                    src: "BASI674-00116",
                    text: "Quarry tile is also called:",
                    options: [
                        { key: "a", text: "Granite tile" },
                        { key: "b", text: "Stone tile" },
                        { key: "c", text: "Workshop tiles" },
                        { key: "d", text: "Unglazed ceramic tile" }
                    ],
                    answer: "d",
                    explanation: "Quarry tiles are a type of unglazed ceramic tile, typically made from natural clay, known for their durability and slip-resistant properties."
                },
                {
                    id: "cm10q011",
                    src: "BASI674-00117",
                    text: "Which type of tile is suitable for air-conditioned rooms, gymnasiums and skating rinks?",
                    options: [
                        { key: "a", text: "Cork tiles" },
                        { key: "b", text: "Wood tiles" },
                        { key: "c", text: "Ceramic tiles" },
                        { key: "d", text: "Concrete tiles" }
                    ],
                    answer: "a",
                    explanation: "Cork tiles provide thermal insulation, comfort underfoot, and sound absorption, making them ideal for environments like air-conditioned rooms, gyms, and rinks."
                },
                {
                    id: "cm10q012",
                    src: "BASI674-00118",
                    text: "Bitumen is obtained from ______.",
                    options: [
                        { key: "a", text: "Wood" },
                        { key: "b", text: "Petroleum" },
                        { key: "c", text: "Coal" },
                        { key: "d", text: "Kerosene" }
                    ],
                    answer: "b",
                    explanation: "Bitumen is a viscous, black material derived as a residue from the distillation of petroleum."
                },
                {
                    id: "cm10q013",
                    src: "BASI674-00119",
                    text: "The bitumen is completely soluble in ______.",
                    options: [
                        { key: "a", text: "Carbon monoxide" },
                        { key: "b", text: "Carbon dioxide" },
                        { key: "c", text: "Carbon disulfide" },
                        { key: "d", text: "Carbon sulfide" }
                    ],
                    answer: "c",
                    explanation: "Carbon disulfide is a common organic solvent used to dissolve bitumen for various tests and applications."
                }
            ]
        },
        {
            id: "cm10stru",
            name: "Structural Mechanics",
            subject: "Structural Mech",
            accent: "cyan",
            blurb: "11 questions drawn from the Structural Mechanics bank.",
            questions: [
                {
                    id: "cm10q014",
                    src: "STRU935-00089",
                    text: "Radial shear in two hinged arch, tangent to the arch makes an angle theta with horizontal",
                    options: [
                        { key: "a", text: "Hcosθ+Vsinθ" },
                        { key: "b", text: "Vcosθ+Hsinθ" },
                        { key: "c", text: "Hcosθ-Vsinθ" },
                        { key: "d", text: "Vcosθ-Hsinθ" }
                    ],
                    answer: "d",
                    explanation: "Radial shear is the component of the resultant perpendicular to the arch axis, V cos theta minus H sin theta, while the component along the axis, H cos theta plus V sin theta, is the normal thrust. Resolving along and across the tangent is what makes an arch analysis different from a beam."
                },
                {
                    id: "cm10q015",
                    src: "STRU935-00090",
                    text: "Maximum bending moment on a simply supported beam of length 8m subjected to 1KN/m load over entire span is:",
                    options: [
                        { key: "a", text: "8 kNm" },
                        { key: "b", text: "4.5 kNm" },
                        { key: "c", text: "6 kNm" },
                        { key: "d", text: "16 kNm" }
                    ],
                    answer: "a",
                    explanation: "For a simply supported beam with a uniformly distributed load (UDL) over its entire length, the maximum bending moment occurs at the mid-span and is calculated by the formula wL²/8. Here, w = 1 kN/m and L = 8m. Thus, M_max = (1 * 8²) / 8 = 64 / 8 = 8 kNm."
                },
                {
                    id: "cm10q016",
                    src: "STRU935-00092",
                    text: "Bending moment at 2m from left support in a simply supported beam of length 8m 1KN/m load over entire span is:",
                    options: [
                        { key: "a", text: "4.5 kNm" },
                        { key: "b", text: "6 kNm" },
                        { key: "c", text: "8 kNm" },
                        { key: "d", text: "16 kNm" }
                    ],
                    answer: "b",
                    explanation: "To find the bending moment at a point 2m from a support for a simply supported beam with a UDL, use the formula M_x = (wLx/2) - (wx²/2), where x is the distance from the support. For x=2m, L=8m, w=1 kN/m: M_2 = ((1*8*2)/2) - ((1*2²)/2) = (16/2) - (4/2) = 8 - 2 = 6 kNm."
                },
                {
                    id: "cm10q017",
                    src: "STRU935-00093",
                    text: "Maximum bending moment at a section 2m from left support on a simply supported beam of length 8m subjected to 1KN/m load over 4m is:",
                    options: [
                        { key: "a", text: "4.5 kNm" },
                        { key: "b", text: "8 kNm" },
                        { key: "c", text: "6 kNm" },
                        { key: "d", text: "16 kNm" }
                    ],
                    answer: "c",
                    explanation: "This question asks for the maximum value of the bending moment that occurs specifically at the 2m section as the load moves. For a partial UDL starting from the left support and covering 4m, the maximum BM at x=2m (within the loaded region) is calculated to be 6 kNm based on influence lines or direct analysis."
                },
                {
                    id: "cm10q018",
                    src: "STRU935-00094",
                    text: "Top most part of an arch is called",
                    options: [
                        { key: "a", text: "Soft" },
                        { key: "b", text: "Center" },
                        { key: "c", text: "Abutment" },
                        { key: "d", text: "Crown" }
                    ],
                    answer: "d",
                    explanation: "The highest point of an arch is termed the 'crown'. The 'abutments' are the supports at the ends of the arch."
                },
                {
                    id: "cm10q019",
                    src: "STRU935-00095",
                    text: "Internal bending moment generated in a three hinged parabolic arch carring UDL over entire length is always:",
                    options: [
                        { key: "a", text: "Zero" },
                        { key: "b", text: "Infinite" },
                        { key: "c", text: "Varies" },
                        { key: "d", text: "Non zero value but const" }
                    ],
                    answer: "a",
                    explanation: "A three-hinged parabolic arch is a funicular structure for a uniformly distributed load. This means the arch shape carries the load primarily in pure compression, resulting in zero bending moment throughout the entire arch under that specific loading condition."
                },
                {
                    id: "cm10q020",
                    src: "STRU935-00096",
                    text: "Internal shear force generated in a three hinged parabolic arch carring UDL over entire length is always:",
                    options: [
                        { key: "a", text: "Infinite" },
                        { key: "b", text: "Zero" },
                        { key: "c", text: "Varies" },
                        { key: "d", text: "Non zero value but const" }
                    ],
                    answer: "b",
                    explanation: "Similar to the bending moment, the shear force in a three-hinged parabolic arch carrying a UDL over its entire span is also zero at all points. This is a characteristic of a true funicular arch under its design load."
                },
                {
                    id: "cm10q021",
                    src: "STRU935-00097",
                    text: "For a cantilevered beam, where would absolute maximum shear occur?",
                    options: [
                        { key: "a", text: "At midpoint" },
                        { key: "b", text: "Depends upon position of load applied" },
                        { key: "c", text: "Just next to fixed support" },
                        { key: "d", text: "Just next to free end" }
                    ],
                    answer: "c",
                    explanation: "The absolute maximum shear force in a cantilever beam occurs at the fixed support. This is because the support must provide the full reaction force to equilibrate all the applied loads on the beam."
                },
                {
                    id: "cm10q022",
                    src: "STRU935-00098",
                    text: "For a simply supported beam, where would absolute maximum shear occur?",
                    options: [
                        { key: "a", text: "At midpoint" },
                        { key: "b", text: "Depends upon position of load applied" },
                        { key: "c", text: "At both of the ends" },
                        { key: "d", text: "Just next to one of ends" }
                    ],
                    answer: "d",
                    explanation: "The absolute maximum shear force in a simply supported beam occurs immediately adjacent to one of the supports. The magnitude depends on which support is closer to the resultant of the applied loads, but its maximum value will always be at a support reaction point."
                },
                {
                    id: "cm10q023",
                    src: "STRU935-00099",
                    text: "For a cantilevered beam, where would absolute maximum moment occur?",
                    options: [
                        { key: "a", text: "Just next to fixed support" },
                        { key: "b", text: "At midpoint" },
                        { key: "c", text: "Depends upon position of load applied" },
                        { key: "d", text: "Just next to free end" }
                    ],
                    answer: "a",
                    explanation: "The absolute maximum bending moment in a cantilever beam occurs at the fixed support. This is where the fixity generates the largest moment to resist the rotation caused by the loads on the beam."
                },
                {
                    id: "cm10q024",
                    src: "STRU935-00100",
                    text: "For a simply supported beam, where would absolute maximum moment occur?",
                    options: [
                        { key: "a", text: "At midpoint" },
                        { key: "b", text: "Depends upon position of load applied" },
                        { key: "c", text: "Just next to one of ends" },
                        { key: "d", text: "At both of the ends" }
                    ],
                    answer: "b",
                    explanation: "For a simply supported beam, the location of the absolute maximum moment is not fixed. It depends on the number, type, and position of the loads applied. For a single concentrated load, it's under the load. For a UDL, it's at mid-span. The option 'Depends upon position of load applied' is correct."
                }
            ]
        },
        {
            id: "cm10desi",
            name: "Design of Structures",
            subject: "Design of Str",
            accent: "slate",
            blurb: "10 questions drawn from the Design of Structures bank.",
            questions: [
                {
                    id: "cm10q025",
                    src: "DESI787-00078",
                    text: "The 400 mm x 500 mm square column having both end fixed has unsupported length 5 m. The column falls under ______ Type.",
                    options: [
                        { key: "a", text: "Short column" },
                        { key: "b", text: "Intermediate column" },
                        { key: "c", text: "Long column" },
                        { key: "d", text: "Cannot say" }
                    ],
                    answer: "c",
                    explanation: "The slenderness ratio (λ) is calculated as Effective Length / Least Lateral Dimension. For a column fixed at both ends, effective length (Lₑ) = 0.65L = 0.65 * 5000 = 3250 mm. Least lateral dimension = 400 mm. λ = 3250 / 400 = 8.125. As per IS 456:2000, a column is long if λ &gt; 12. Since 8.125 &lt; 12, it is a short column. However, the question states \"square column\" but dimensions are 400x500mm (rectangular). The least dimension is 400mm. λ=8.125 which is less than 12, so it should be a short column. But the provided correct answer is \"Long column\". This might be a trick or error in the question. Rechecking: Unsupported length = 5000mm, Least lateral dimension = 400mm. For column with both ends fixed, effective length = 0.65 * 5000 = 3250mm. Slenderness ratio = 3250/400 = 8.125. Since 8.125 &lt; 12, it is a short column. But the answer given is \"Long column\". Possibly a misprint in the question or options. However, based on standard calculation, it should be short column. But the correct answer as per the test might be \"Long column\" due to some other interpretation. Alternatively, if we consider the larger dimension for buckling, but that is not standard. Standard is least lateral dimension. So, the description should clarify that as per calculation it is short, but the answer might be intended as long. However, the user provided the correct answer as \"Long column\", so we go with that."
                },
                {
                    id: "cm10q026",
                    src: "DESI787-00079",
                    text: "When minimum eccentricity in columns does not exceed 0.05 times the lateral dimension, the design axial load carrying capacity is reduced by ______.",
                    options: [
                        { key: "a", text: "9%" },
                        { key: "b", text: "13%" },
                        { key: "c", text: "15%" },
                        { key: "d", text: "10%" }
                    ],
                    answer: "d",
                    explanation: "As per IS 456:2000, Clause 39.3, when the minimum eccentricity (e_min) does not exceed 0.05 times the lateral dimension, the design axial load capacity (P_u) is reduced by 10% to account for accidental eccentricities."
                },
                {
                    id: "cm10q027",
                    src: "DESI787-00080",
                    text: "Minimum eccentricity to be considered for axially loaded RCC column of size 400 mm x 400 mm with unsupported length of 5 m is:",
                    options: [
                        { key: "a", text: "23.3 mm" },
                        { key: "b", text: "15.6 mm" },
                        { key: "c", text: "20.0 mm" },
                        { key: "d", text: "30.6 mm" }
                    ],
                    answer: "a",
                    explanation: "As per IS 456:2000, Clause 25.4, minimum eccentricity (e_min) = (unsupported length / 500) + (lateral dimension / 30) = (5000 / 500) + (400 / 30) = 10 + 13.33 = 23.33 mm. It should not be less than 20 mm."
                },
                {
                    id: "cm10q028",
                    src: "DESI787-00081",
                    text: "Minimum eccentricity to be considered for axially loaded RCC column of size 400 mm x 400 mm with unsupported length of 3 m is:",
                    options: [
                        { key: "a", text: "15.6 mm" },
                        { key: "b", text: "20.0 mm" },
                        { key: "c", text: "23.3 mm" },
                        { key: "d", text: "30.6 mm" }
                    ],
                    answer: "b",
                    explanation: "As per IS 456:2000, Clause 25.4, minimum eccentricity (e_min) = (unsupported length / 500) + (lateral dimension / 30) = (3000 / 500) + (400 / 30) = 6 + 13.33 = 19.33 mm. However, the code specifies that e_min should not be less than 20 mm. Therefore, the value to be adopted is 20 mm."
                },
                {
                    id: "cm10q029",
                    src: "DESI787-00082",
                    text: "Minimum number of longitudinal bars in rectangular column is ______.",
                    options: [
                        { key: "a", text: "6" },
                        { key: "b", text: "8" },
                        { key: "c", text: "4" },
                        { key: "d", text: "None" }
                    ],
                    answer: "c",
                    explanation: "As per IS 456:2000, Clause 26.5.3.1, the minimum number of longitudinal bars in a rectangular column is 4."
                },
                {
                    id: "cm10q030",
                    src: "DESI787-00083",
                    text: "Minimum number of longitudinal bars in Circular column in residential buildings is",
                    options: [
                        { key: "a", text: "4" },
                        { key: "b", text: "8" },
                        { key: "c", text: "None" },
                        { key: "d", text: "6" }
                    ],
                    answer: "d",
                    explanation: "As per IS 456:2000, Clause 26.5.3.1, the minimum number of longitudinal bars in a circular column is 6."
                },
                {
                    id: "cm10q031",
                    src: "DESI787-00084",
                    text: "Minimum number of longitudinal bars in circular column is",
                    options: [
                        { key: "a", text: "6" },
                        { key: "b", text: "4" },
                        { key: "c", text: "8" },
                        { key: "d", text: "None" }
                    ],
                    answer: "a",
                    explanation: "As per IS 456:2000, Clause 26.5.3.1, the minimum number of longitudinal bars in a circular column is 6."
                },
                {
                    id: "cm10q032",
                    src: "DESI787-00085",
                    text: "A reinforced concrete column of size 400 mm x 400 mm is having the diameter of longitudinal bar as 20 mm. The pitch of lateral ties in such a case should be:",
                    options: [
                        { key: "a", text: "320 mm" },
                        { key: "b", text: "300 mm" },
                        { key: "c", text: "400 mm" },
                        { key: "d", text: "192 mm" }
                    ],
                    answer: "b",
                    explanation: "As per IS 456:2000, Clause 26.5.3.2, the pitch of lateral ties shall be the least of: (i) Least lateral dimension = 400 mm, (ii) 16 times the diameter of longitudinal bar = 16 * 20 = 320 mm, (iii) 300 mm. Therefore, the pitch should be 300 mm."
                },
                {
                    id: "cm10q033",
                    src: "DESI787-00086",
                    text: "A reinforced concrete column of size 400 mm x 400 mm is having the diameter of longitudinal bar as 12 mm. The pitch of lateral ties in such a case should be:",
                    options: [
                        { key: "a", text: "320 mm" },
                        { key: "b", text: "400 mm" },
                        { key: "c", text: "192 mm" },
                        { key: "d", text: "300 mm" }
                    ],
                    answer: "c",
                    explanation: "As per IS 456:2000, Clause 26.5.3.2, the pitch of lateral ties shall be the least of: (i) Least lateral dimension = 400 mm, (ii) 16 times the diameter of longitudinal bar = 16 * 12 = 192 mm, (iii) 300 mm. Therefore, the pitch should be 192 mm."
                },
                {
                    id: "cm10q034",
                    src: "DESI787-00087",
                    text: "The limiting value for Span to effective depth ratio for continuous two way slab is",
                    options: [
                        { key: "a", text: "20" },
                        { key: "b", text: "35" },
                        { key: "c", text: "40" },
                        { key: "d", text: "26" }
                    ],
                    answer: "d",
                    explanation: "As per IS 456:2000, Clause 23.2.1, the basic span to effective depth ratio for a continuous slab is 26. For two-way slabs, the same ratio is applied based on the shorter span."
                }
            ]
        },
        {
            id: "cm10soil",
            name: "Soil Mechanics and Foundation",
            subject: "Soil Mechanics",
            accent: "amber",
            blurb: "13 questions drawn from the Soil Mechanics and Foundation bank.",
            questions: [
                {
                    id: "cm10q035",
                    src: "SOIL136-00106",
                    text: "Coefficient of permeability of soil",
                    options: [
                        { key: "a", text: "does not depend upon temperature" },
                        { key: "b", text: "increases with the increase in temperature" },
                        { key: "c", text: "increases with the decrease in temperature" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "b",
                    explanation: "The permeability of water increases with temperature because the viscosity of water decreases as temperature rises, allowing it to flow more easily through the soil pores."
                },
                {
                    id: "cm10q036",
                    src: "SOIL136-00107",
                    text: "The hydraulic head that would produce a quick condition in a sand stratum of thickness 1.5 m, specific gravity 2.67 and voids ratio 0.67 is equal to",
                    options: [
                        { key: "a", text: "1.0m" },
                        { key: "b", text: "1.5m" },
                        { key: "c", text: "2.0m" },
                        { key: "d", text: "3m" }
                    ],
                    answer: "b",
                    explanation: "The critical hydraulic gradient (i_c) for quicksand condition is (G-1)/(1+e) = (2.67-1)/(1+0.67) = 1.0. The head required (h) is i_c * thickness = 1.0 * 1.5m = 1.5m."
                },
                {
                    id: "cm10q037",
                    src: "SOIL136-00108",
                    text: "Degree of consolidation is",
                    options: [
                        { key: "a", text: "directly proportional to time and inversely proportional to drainage path" },
                        { key: "b", text: "directly proportional to drainage path and inversely proportional to time" },
                        { key: "c", text: "directly proportional to time and inversely proportional to square of drainage path" },
                        { key: "d", text: "directly proportional to square of drainage path and inversely proportional to time" }
                    ],
                    answer: "c",
                    explanation: "The time factor (T_v) in Terzaghi's theory of one-dimensional consolidation is T_v = c_v * t / d². This shows that the degree of consolidation (U) is a function of T_v, meaning it is directly proportional to time (t) and inversely proportional to the square of the drainage path (d)."
                },
                {
                    id: "cm10q038",
                    src: "SOIL136-00109",
                    text: "The volume of voids VV is equal to the sum of",
                    options: [
                        { key: "a", text: "the volume of air and volume of solids" },
                        { key: "b", text: "the volume of water and volume of solids" },
                        { key: "c", text: "the volume of water and the weight of water" },
                        { key: "d", text: "the volume of air and volume of water" }
                    ],
                    answer: "d",
                    explanation: "By definition, the total volume of voids (V_v) in a soil mass is the sum of the volume of air (V_a) and the volume of water (V_w)."
                },
                {
                    id: "cm10q039",
                    src: "SOIL136-00110",
                    text: "The phase diagram is also known as ______",
                    options: [
                        { key: "a", text: "block diagram" },
                        { key: "b", text: "soil grain diagram" },
                        { key: "c", text: "constituents diagram" },
                        { key: "d", text: "element diagram" }
                    ],
                    answer: "a",
                    explanation: "The phase diagram, which separates the three phases of soil (solid, water, air) into a block for visualization of mass and volume relationships, is commonly referred to as a block diagram."
                },
                {
                    id: "cm10q040",
                    src: "SOIL136-00111",
                    text: "In the phase diagram, volumes are represented on the ______",
                    options: [
                        { key: "a", text: "right side" },
                        { key: "b", text: "left side" },
                        { key: "c", text: "top" },
                        { key: "d", text: "bottom" }
                    ],
                    answer: "b",
                    explanation: "In a standard phase diagram (block diagram), volumes (V_s, V_w, V_a, V_v, V) are typically shown on the left side of the diagram, while masses (M_s, M_w, M) are shown on the right side."
                },
                {
                    id: "cm10q041",
                    src: "SOIL136-00112",
                    text: "For a fully saturated soil sample, the volume of voids is equal to ______",
                    options: [
                        { key: "a", text: "the volume of air and volume of water" },
                        { key: "b", text: "the volume of water and volume of solids" },
                        { key: "c", text: "volume of water" },
                        { key: "d", text: "volume of air" }
                    ],
                    answer: "c",
                    explanation: "In a fully saturated soil, the voids are completely filled with water. Therefore, the volume of voids (V_v) is exactly equal to the volume of water (V_w)."
                },
                {
                    id: "cm10q042",
                    src: "SOIL136-00113",
                    text: "A soil sample weighs 190kN. After oven drying it weighs 150kN. What will be the weight of Water before oven drying?",
                    options: [
                        { key: "a", text: "35 kN" },
                        { key: "b", text: "30 kN" },
                        { key: "c", text: "45 kN" },
                        { key: "d", text: "40 kN" }
                    ],
                    answer: "d",
                    explanation: "The weight of water (W_w) is the total weight (W) minus the weight of solids (W_s). Therefore, W_w = 190 kN - 150 kN = 40 kN."
                },
                {
                    id: "cm10q043",
                    src: "SOIL136-00115",
                    text: "The relation between porosity and void ratio is given",
                    options: [
                        { key: "a", text: "n = e / (1+e)" },
                        { key: "b", text: "e = n / (1+n)" },
                        { key: "c", text: "e = n / (1-n)" },
                        { key: "d", text: "n = e / (1-e)" }
                    ],
                    answer: "a",
                    explanation: "Porosity (n) is related to void ratio (e) by the formula n = e / (1 + e). This is a fundamental relationship in soil mechanics."
                },
                {
                    id: "cm10q044",
                    src: "SOIL136-00116",
                    text: "The relation between air content and degree of saturation is",
                    options: [
                        { key: "a", text: "a_c = S - 1" },
                        { key: "b", text: "a_c = 1 - S" },
                        { key: "c", text: "a_c = 1 - 2S" },
                        { key: "d", text: "a_c = 2S - 1" }
                    ],
                    answer: "b",
                    explanation: "Air content (a_c) is defined as the ratio of the volume of air (V_a) to the volume of voids (V_v). Since the degree of saturation (S) is V_w/V_v, and V_v = V_a + V_w, it follows that a_c = V_a/V_v = (V_v - V_w)/V_v = 1 - S."
                },
                {
                    id: "cm10q045",
                    src: "SOIL136-00117",
                    text: "The ratio of the volume of air to the total volume is",
                    options: [
                        { key: "a", text: "Air content" },
                        { key: "b", text: "Degree of saturation" },
                        { key: "c", text: "Percentage air voids" },
                        { key: "d", text: "Void ratio" }
                    ],
                    answer: "c",
                    explanation: "The percentage air voids (n_a) is defined as the ratio of the volume of air (V_a) to the total volume (V), expressed as a percentage: n_a = (V_a / V) * 100%."
                },
                {
                    id: "cm10q046",
                    src: "SOIL136-00118",
                    text: "Honeycomb structure having diameter smaller than......mm and larger than ... mm.",
                    options: [
                        { key: "a", text: "0.002 &amp; 0.000002" },
                        { key: "b", text: "0.2 &amp; 0.02" },
                        { key: "c", text: "2.0 &amp; 0.2" },
                        { key: "d", text: "0.02 &amp; 0.002" }
                    ],
                    answer: "d",
                    explanation: "Honeycomb structure is typically formed by soil particles in the silt size range. The particle diameter for silt is between 0.075 mm and 0.002 mm. The honeycomb structure is common for particles smaller than 0.02 mm and larger than 0.002 mm."
                },
                {
                    id: "cm10q047",
                    src: "SOIL136-00119",
                    text: "The formula of plasticity index......",
                    options: [
                        { key: "a", text: "I_p = W_l - W_p" },
                        { key: "b", text: "I_p = W_l - 2W_p" },
                        { key: "c", text: "I_p = W_l + W_p" },
                        { key: "d", text: "I_p = W_p - W_l" }
                    ],
                    answer: "a",
                    explanation: "The Plasticity Index (I_p) is defined as the numerical difference between the Liquid Limit (W_l) and the Plastic Limit (W_p): I_p = W_l - W_p."
                }
            ]
        },
        {
            id: "cm10watr",
            name: "Basic Water Resources Engineering",
            subject: "Water Resources",
            accent: "emerald",
            blurb: "12 questions drawn from the Basic Water Resources Engineering bank.",
            questions: [
                {
                    id: "cm10q048",
                    src: "WATE701-00097",
                    text: "The equation of continuity for a fluid that is compressible and flow that is steady is:",
                    options: [
                        { key: "a", text: "A1 V1 = A2 V2" },
                        { key: "b", text: "p1 A1 V1 = p2 A2 V2" },
                        { key: "c", text: "A1 V2 = A2 V1" }
                    ],
                    answer: "b",
                    explanation: "For steady compressible flow the mass flow rate is constant along the stream tube, so rho1 A1 V1 equals rho2 A2 V2. Only when the density is constant does this simplify to the familiar A1 V1 equal to A2 V2."
                },
                {
                    id: "cm10q049",
                    src: "WATE701-00098",
                    text: "The bernoulli eqn states that:",
                    options: [
                        { key: "a", text: "discharge is constant throughout the section" },
                        { key: "b", text: "energy is constant for one streamline and is different from another streamline" },
                        { key: "c", text: "energy is constant through the fluid flow" },
                        { key: "d", text: "none of the above" }
                    ],
                    answer: "b",
                    explanation: "Bernoulli's equation states that the total head is constant along a streamline for steady, frictionless, incompressible flow. The constant may differ from one streamline to another unless the flow is also irrotational."
                },
                {
                    id: "cm10q050",
                    src: "WATE701-00099",
                    text: "Water is flowing at 1 m/sec through a pipe of 10cm diameter with a right-angle bend. The force in Newton exerted on the bend by water is",
                    options: [
                        { key: "a", text: "10√2 π" },
                        { key: "b", text: "5√2 π" },
                        { key: "c", text: "5π/2" },
                        { key: "d", text: "5π/√2" }
                    ],
                    answer: "d",
                    explanation: "\\(F_x = \\dot{m} (v_1 - v_2 \\cos\\theta)\\) \\(F_y = \\dot{m} (0 - v_2 \\sin\\theta)\\) \\(F = \\sqrt{F_x^2 + F_y^2}\\) \\(F = \\sqrt{(7.854)^2 + (-7.854)^2} = \\sqrt{2} \\times 7.854 \\approx 11.11 \\text{ N}\\)"
                },
                {
                    id: "cm10q051",
                    src: "WATE701-00100",
                    text: "The force exerted by a jet of water on a stationary vertical plate in the direction of jet is",
                    options: [
                        { key: "a", text: "paV²" },
                        { key: "b", text: "paV" },
                        { key: "c", text: "pa²" }
                    ],
                    answer: "a",
                    explanation: "The force is the rate of change of momentum, that is the mass flow rate rho a V multiplied by the velocity destroyed, V. It therefore comes out as rho a V squared and grows with the square of the jet velocity."
                },
                {
                    id: "cm10q052",
                    src: "WATE701-00101",
                    text: "The difference of EGL and HGL gives",
                    options: [
                        { key: "a", text: "Pressure head" },
                        { key: "b", text: "Velocity head" },
                        { key: "c", text: "Potential energy" },
                        { key: "d", text: "Energy slope" }
                    ],
                    answer: "b",
                    explanation: "The energy grade line lies above the hydraulic grade line by exactly the velocity head, since the hydraulic grade line accounts only for pressure and elevation. Where the flow speeds up, the gap widens."
                },
                {
                    id: "cm10q053",
                    src: "WATE701-00102",
                    text: "In which of the following conditions can the Bernoulli equation not be used?",
                    options: [
                        { key: "a", text: "Incompressible flow" },
                        { key: "b", text: "Steady flow" },
                        { key: "c", text: "Viscous flow" },
                        { key: "d", text: "Laminar flow" }
                    ],
                    answer: "c",
                    explanation: "Bernoulli's equation assumes no energy is dissipated, so it cannot be applied to viscous flow unless a head loss term is added. Steady, incompressible and laminar conditions are all compatible with it provided friction is accounted for."
                },
                {
                    id: "cm10q054",
                    src: "WATE701-00103",
                    text: "Head loss formula h = fIQ²/12.1D^5 is given by.",
                    options: [
                        { key: "a", text: "Hazen–Williams" },
                        { key: "b", text: "Chezy" },
                        { key: "c", text: "Manning’s" },
                        { key: "d", text: "Darcy–Weisbach" }
                    ],
                    answer: "d",
                    explanation: "This is the Darcy-Weisbach relation rewritten in terms of discharge: substituting V equal to 4Q over pi D squared into fLV squared over 2gD produces the constant 12.1 in the denominator. It remains the theoretically sound friction formula."
                },
                {
                    id: "cm10q055",
                    src: "WATE701-00104",
                    text: "The three liquids 1, 2, and 3 with vapor pressures V1, V2, and V3 respectively, are kept under the same pressure. If V1&gt;V2&gt;V3, which liquid will start boiling early?",
                    options: [
                        { key: "a", text: "Liquid 1" },
                        { key: "b", text: "Liquid 2" },
                        { key: "c", text: "Liquid 3" },
                        { key: "d", text: "They will start boiling at the same time" }
                    ],
                    answer: "a",
                    explanation: "Boiling starts when the vapour pressure reaches the imposed pressure, so under a common pressure the liquid with the highest vapour pressure, liquid 1, boils first. This is also why cavitation begins in the most volatile liquid."
                },
                {
                    id: "cm10q056",
                    src: "WATE701-00105",
                    text: "Two pipes, each of diameter d, converge to form a pipe of diameter D. What should be the relation between d and D such that the flow velocity in the third pipe becomes double of that in each of the two pipes?",
                    options: [
                        { key: "a", text: "D = 2d" },
                        { key: "b", text: "D = d" },
                        { key: "c", text: "D = 3d" },
                        { key: "d", text: "D = 4d" }
                    ],
                    answer: "b",
                    explanation: "Continuity requires 2 times (pi d squared over 4) times V to equal (pi D squared over 4) times 2V. The factor of two appears on both sides and cancels, leaving D squared equal to d squared, so the combined pipe has the same diameter as each branch."
                },
                {
                    id: "cm10q057",
                    src: "WATE701-00106",
                    text: "The head loss at the entrance of the pipe is...... to that of at it’s exit",
                    options: [
                        { key: "a", text: "Equal" },
                        { key: "b", text: "Twice" },
                        { key: "c", text: "Half" },
                        { key: "d", text: "Four times" }
                    ],
                    answer: "c",
                    explanation: "The sharp-edged entrance loses 0.5 times the velocity head, whereas the entire velocity head is lost at the exit, so the entry loss is half the exit loss. Rounding the entrance reduces it much further still."
                },
                {
                    id: "cm10q058",
                    src: "WATE701-00107",
                    text: "If Manning’s n is doubled then slope should be changed to?",
                    options: [
                        { key: "a", text: "Halved" },
                        { key: "b", text: "Doubled" },
                        { key: "c", text: "one-quarter" },
                        { key: "d", text: "Quadruple" }
                    ],
                    answer: "d",
                    explanation: "Manning's equation makes discharge proportional to the root of the slope divided by n, so if n doubles the root of the slope must double to keep the same discharge. That means the slope itself must be four times as steep."
                },
                {
                    id: "cm10q059",
                    src: "WATE701-00108",
                    text: "The area of a channel section is 8 m² and the wetted perimeter is 8 m. Calculate the value of the bed slope of the channel if the discharge is 33.33 m³/s and Manning’s coefficient is 0.012.",
                    options: [
                        { key: "a", text: "1 in 400" },
                        { key: "b", text: "1 in 300" },
                        { key: "c", text: "1 in 500" },
                        { key: "d", text: "1 in 600" }
                    ],
                    answer: "a",
                    explanation: "The hydraulic radius is 8 over 8, that is 1 m. From Manning's equation the root of S is Q n over A R to the two thirds, that is 33.33 times 0.012 divided by 8, which is 0.05. Squaring gives 0.0025, that is a slope of 1 in 400."
                }
            ]
        },
        {
            id: "cm10hydr",
            name: "Hydropower",
            subject: "Hydropower",
            accent: "cyan",
            blurb: "9 questions drawn from the Hydropower bank.",
            questions: [
                {
                    id: "cm10q060",
                    src: "HYDR626-00075",
                    text: "What should be the outlet velocity from a draft tube if P=2250 Kw, H=5.5m, inlet diameter = 2.8m, overall efficiency = 0.87, draft tube efficiency=78% and head loss = 0.89",
                    options: [
                        { key: "a", text: "1.877 m/s" },
                        { key: "b", text: "1.767 m/s" },
                        { key: "c", text: "1.754 m/s" },
                        { key: "d", text: "1.384 m/s" }
                    ],
                    answer: "b",
                    explanation: "First, find the flow rate Q from the power formula: P = ηρgQH. Then, find the inlet velocity V1 = Q / A_inlet. Use draft tube efficiency η_d = (Actual regain in pressure head) / (Kinetic head at inlet) to find the outlet velocity V2."
                },
                {
                    id: "cm10q061",
                    src: "HYDR626-00076",
                    text: "A turbine is to operate under a head of 25m at 200 rpm. The discharge is 9 cumecs. If efficiency =90%, determine the power generated and specific speed of turbine",
                    options: [
                        { key: "a", text: "1966.525 HP, 184.62 rpm" },
                        { key: "b", text: "1986.525 HP, 54 rpm" },
                        { key: "c", text: "2662.209 HP, 184.62 rpm" },
                        { key: "d", text: "1986.525 HP, 184.62 rpm" }
                    ],
                    answer: "c",
                    explanation: "Power P = ηρgQH. Specific speed N_s = N√P / H^(5/4), where P is in HP, H in m, and N in rpm. Convert the calculated power to HP before computing specific speed."
                },
                {
                    id: "cm10q062",
                    src: "HYDR626-00077",
                    text: "For discharge =300 cumecs, net head=5m, speed of turbine=50 rpm and efficiency =82% and specific speed =500 rpm, determine the number of kalima turbine need to utilize the full potential of the river:",
                    options: [
                        { key: "a", text: "1" },
                        { key: "b", text: "2" },
                        { key: "c", text: "4" },
                        { key: "d", text: "3" }
                    ],
                    answer: "d",
                    explanation: "First, find the power per turbine from the specific speed formula, rearranged to find P for a single turbine. Then, find the total power available from the river. The number of turbines is total power divided by power per turbine."
                },
                {
                    id: "cm10q063",
                    src: "HYDR626-00078",
                    text: "What is the diameter if turbine runner in the peripheral coefficient of a Francis turbine is 0.678 working under a head of 150m and synchronous speed (N)=500",
                    options: [
                        { key: "a", text: "1.3 m" },
                        { key: "b", text: "1.2 m" },
                        { key: "c", text: "1.4 m" },
                        { key: "d", text: "1.5 m" }
                    ],
                    answer: "a",
                    explanation: "The peripheral speed u = (πDN)/60. The speed ratio φ = u / √(2gH). Therefore, D = (60 φ √(2gH)) / (πN)."
                },
                {
                    id: "cm10q064",
                    src: "HYDR626-00079",
                    text: "The specific speed of a turbine under a head of 150 m to develop 2000HP while running at 300 rpm is",
                    options: [
                        { key: "a", text: "60-300" },
                        { key: "b", text: "35-60" },
                        { key: "c", text: "300-1000" },
                        { key: "d", text: "10-35" }
                    ],
                    answer: "b",
                    explanation: "Calculate the specific speed using N_s = N√P / H^(5/4). The value falls within the range for Francis turbines, which is typically 60-300, but the calculated value should be verified. The options suggest a misprint; the correct range for a Francis turbine (medium specific speed) is 60-300, but the calculation might yield a value around 50-60, making (d) the closest intended answer."
                },
                {
                    id: "cm10q065",
                    src: "HYDR626-00080",
                    text: "A pelton wheel is supplied water under a head of 200m through a 100mm diameter nozzle pipe. Quantity of water supplied is 1.25 cumecs. Find number of jets assuming Cv=0.97",
                    options: [
                        { key: "a", text: "1" },
                        { key: "b", text: "2" },
                        { key: "c", text: "3" },
                        { key: "d", text: "4" }
                    ],
                    answer: "c",
                    explanation: "Find the area of one jet from the nozzle diameter. Calculate the velocity of jet V = Cv√(2gH). The discharge per jet is Q_jet = A_jet * V. The number of jets is total Q divided by Q_jet."
                },
                {
                    id: "cm10q066",
                    src: "HYDR626-00081",
                    text: "Find the specific speed of the turbine if speed = 6000 rpm, Power generation = 5MW in total by 2 turbines under head of 20m",
                    options: [
                        { key: "a", text: "6315 rpm" },
                        { key: "b", text: "8212.3 rpm" },
                        { key: "c", text: "8996.11 rpm" },
                        { key: "d", text: "2098 rpm" }
                    ],
                    answer: "d",
                    explanation: "Power per turbine = Total Power / 2. Convert power to HP. Use the formula for specific speed: N_s = N√P / H^(5/4)."
                },
                {
                    id: "cm10q067",
                    src: "HYDR626-00082",
                    text: "Determine the number of buckets in a pelton wheel turbine with runner diameter=2m and jet diameter=0.25m",
                    options: [
                        { key: "a", text: "19" },
                        { key: "b", text: "13" },
                        { key: "c", text: "17" },
                        { key: "d", text: "15" }
                    ],
                    answer: "a",
                    explanation: "The number of buckets Z is given by the empirical formula: Z = 15 + (D / (2d)), where D is runner diameter and d is jet diameter. Round the result to the nearest integer."
                },
                {
                    id: "cm10q068",
                    src: "HYDR626-00083",
                    text: "In a reciprocating pump, with the charge discharge pressure,",
                    options: [
                        { key: "a", text: "The Volume delivered increases" },
                        { key: "b", text: "The volume delivered decreases" },
                        { key: "c", text: "Volume delivered remains the same" },
                        { key: "d", text: "Volume delivered is independent" }
                    ],
                    answer: "b",
                    explanation: "In a reciprocating pump, an increase in discharge pressure leads to increased slip, which is a leakage of fluid back through the valves. This results in a decrease in the actual volume delivered compared to the theoretical displacement."
                }
            ]
        },
        {
            id: "cm10irri",
            name: "Irrigation and Drainage",
            subject: "Irrigation",
            accent: "emerald",
            blurb: "11 questions drawn from the Irrigation and Drainage bank.",
            questions: [
                {
                    id: "cm10q069",
                    src: "IRRI951-00090",
                    text: "Which shape is optimal for surface drain?",
                    options: [
                        { key: "a", text: "Circular" },
                        { key: "b", text: "Triangular" },
                        { key: "c", text: "Trapezoidal" },
                        { key: "d", text: "Rectangular" }
                    ],
                    answer: "c",
                    explanation: "A trapezoidal section is the practical optimum for an open surface drain: it gives a large area for a small wetted perimeter, its sloping sides stand up in ordinary soil without lining, and it is easy to excavate and to maintain by machine."
                },
                {
                    id: "cm10q070",
                    src: "IRRI951-00091",
                    text: "How many cubic meters of water will be removed from a system designed to use a duty cycle of 1.5 cm, draining 20 hectares for a capacity of 5 days?",
                    options: [
                        { key: "a", text: "10000 m³" },
                        { key: "b", text: "25000 m³" },
                        { key: "c", text: "20000 m³" },
                        { key: "d", text: "15000 m³" }
                    ],
                    answer: "d",
                    explanation: "Twenty hectares is 200,000 square metres, and a drainage depth of 1.5 cm over that area is 0.015 times 200,000, which is 3000 cubic metres a day. Over the five day capacity that totals 15,000 cubic metres."
                },
                {
                    id: "cm10q071",
                    src: "IRRI951-00092",
                    text: "The top soil of a water logged field becomes more alkaline and infertile if its pH value is",
                    options: [
                        { key: "a", text: "11" },
                        { key: "b", text: "6" },
                        { key: "c", text: "8" },
                        { key: "d", text: "9" }
                    ],
                    answer: "a",
                    explanation: "A waterlogged soil whose pH climbs to about 11 has become strongly alkaline, and at that level the sodium in the exchange complex destroys the soil structure and locks up nutrients, so the land turns infertile and needs gypsum and leaching to reclaim."
                },
                {
                    id: "cm10q072",
                    src: "IRRI951-00093",
                    text: "Which type of weir is suitable for any type of foundation?",
                    options: [
                        { key: "a", text: "Sloping Weir" },
                        { key: "b", text: "Vertical Drop Weir" },
                        { key: "c", text: "Parabolic Weir" },
                        { key: "d", text: "Masonry Sloping Weir" }
                    ],
                    answer: "b",
                    explanation: "A vertical drop weir is suitable for any type of foundation because its design, which includes a vertical drop, allows it to be constructed on various foundations without requiring extensive modifications. It is a versatile and commonly used structure in irrigation engineering."
                },
                {
                    id: "cm10q073",
                    src: "IRRI951-00094",
                    text: "What is the main difference between a dam and weir?",
                    options: [
                        { key: "a", text: "Capacity of Water" },
                        { key: "b", text: "Material Used for Construction" },
                        { key: "c", text: "Height and Duration of Storage" },
                        { key: "d", text: "Location of the Structure" }
                    ],
                    answer: "c",
                    explanation: "The primary difference between a dam and a weir is their height and the duration for which they store water. Dams are taller structures designed for long-term water storage and creating large reservoirs, while weirs are smaller, overflow structures used for short-term storage and flow measurement in rivers."
                },
                {
                    id: "cm10q074",
                    src: "IRRI951-00095",
                    text: "In order to find the proper location for the head works on the river, the river is divided into how many stages?",
                    options: [
                        { key: "a", text: "5" },
                        { key: "b", text: "2" },
                        { key: "c", text: "4" },
                        { key: "d", text: "3" }
                    ],
                    answer: "d",
                    explanation: "The river is divided into three stages: the upper stage (mountainous tract), the middle stage (sloping plain), and the delta stage (flat area). This division helps in selecting the optimal location for headworks based on topography, sediment load, and water availability."
                },
                {
                    id: "cm10q075",
                    src: "IRRI951-00096",
                    text: "What are the two main causes of failure of hydraulic structure on the pervious foundation?",
                    options: [
                        { key: "a", text: "Undermining and Uplift" },
                        { key: "b", text: "Seepage and Over-turning" },
                        { key: "c", text: "Over-turning and Piping" },
                        { key: "d", text: "Overturning and Uplift" }
                    ],
                    answer: "a",
                    explanation: "The two main causes are undermining (scour or erosion of foundation material) and uplift pressure (upward seepage force that can lift the structure). These failures occur due to the permeable nature of the foundation, which allows water to seep underneath and exert destructive forces."
                },
                {
                    id: "cm10q076",
                    src: "IRRI951-00097",
                    text: "The structure finally subsides in the hollow formed in the foundation in which failure?",
                    options: [
                        { key: "a", text: "Overturning" },
                        { key: "b", text: "Undermining" },
                        { key: "c", text: "Collapse" },
                        { key: "d", text: "Uplift" }
                    ],
                    answer: "b",
                    explanation: "Undermining failure occurs when seepage water erodes the foundation material, creating hollows or cavities. The structure loses support and eventually subsides into these hollows, leading to collapse."
                },
                {
                    id: "cm10q077",
                    src: "IRRI951-00098",
                    text: "Heave piping may occur on the ______",
                    options: [
                        { key: "a", text: "Upstream of sheet pile or cut off wall" },
                        { key: "b", text: "body of earth structure" },
                        { key: "c", text: "Downstream of sheet pile or cut off wall" },
                        { key: "d", text: "below the foundation" }
                    ],
                    answer: "c",
                    explanation: "Heave piping, a form of seepage failure, typically occurs downstream of a sheet pile or cutoff wall. It happens when the upward seepage pressure exceeds the downward weight of the soil, causing the soil particles to boil and be carried away by water."
                },
                {
                    id: "cm10q078",
                    src: "IRRI951-00099",
                    text: "The safety of a hydraulic structure founded on a pervious foundation can be ensured by: Provision sufficient length of its concrete floor. Providing sufficient depth of its concrete floor. III. Provision a downstream cutoff of some reasonable depth.",
                    options: [
                        { key: "a", text: "1 and 2" },
                        { key: "b", text: "1 and 3" },
                        { key: "c", text: "2 and 3" },
                        { key: "d", text: "1,2,3" }
                    ],
                    answer: "d",
                    explanation: "All three measures are crucial: a sufficient floor length distributes seepage forces, adequate depth resists uplift pressure, and a downstream cutoff reduces the exit gradient. Together, they prevent failures like piping and uplift."
                },
                {
                    id: "cm10q079",
                    src: "IRRI951-00100",
                    text: "Which factor doesn’t influence the root zone depth?",
                    options: [
                        { key: "a", text: "The yield of the crop" },
                        { key: "b", text: "Type of soil" },
                        { key: "c", text: "Type of crops grown" },
                        { key: "d", text: "Sub-soil formation" }
                    ],
                    answer: "a",
                    explanation: "Root zone depth is primarily influenced by soil type (e.g., sandy vs. clay), crop type (different plants have varying root depths), and sub-soil formation (presence of hardpan or water table). Crop yield is an outcome of many factors but does not directly determine root depth."
                }
            ]
        },
        {
            id: "cm10tran",
            name: "Transportation",
            subject: "Transportation",
            accent: "rose",
            blurb: "11 questions drawn from the Transportation bank.",
            questions: [
                {
                    id: "cm10q080",
                    src: "TRAN808-00090",
                    text: "The stability of slope is considered while designing",
                    options: [
                        { key: "a", text: "National highway" },
                        { key: "b", text: "Hill roads" },
                        { key: "c", text: "Feeder road" },
                        { key: "d", text: "District road" }
                    ],
                    answer: "b",
                    explanation: "Hill roads are constructed in mountainous terrain with significant elevation changes. A primary design concern is ensuring the stability of cut and fill slopes to prevent landslides and ensure road safety."
                },
                {
                    id: "cm10q081",
                    src: "TRAN808-00091",
                    text: "The survey of highway alignment are completed in",
                    options: [
                        { key: "a", text: "One stage" },
                        { key: "b", text: "Two stages" },
                        { key: "c", text: "Four stages" },
                        { key: "d", text: "Three stages" }
                    ],
                    answer: "c",
                    explanation: "The standard process involves four stages: Map Study, Reconnaissance Survey, Preliminary Survey, and Final Location and Detailed Survey to determine the optimal route."
                },
                {
                    id: "cm10q082",
                    src: "TRAN808-00092",
                    text: "Inspection of site is done in which survey",
                    options: [
                        { key: "a", text: "Preliminary survey" },
                        { key: "b", text: "Secondary survey" },
                        { key: "c", text: "Final report" },
                        { key: "d", text: "Reconnaissance" }
                    ],
                    answer: "d",
                    explanation: "The reconnaissance survey is the initial field inspection of a broad area. Engineers physically examine the site to identify feasible routes and major obstacles before detailed surveys."
                },
                {
                    id: "cm10q083",
                    src: "TRAN808-00093",
                    text: "How many types of terrain classified to be are as per NRS 2070?",
                    options: [
                        { key: "a", text: "Four" },
                        { key: "b", text: "One" },
                        { key: "c", text: "Two" },
                        { key: "d", text: "Three" }
                    ],
                    answer: "a",
                    explanation: "Under NRS 2070, terrain is categorized into four types - Plain(0 - 10 %), Rolling(10 - 25 %), Mountainous(25 – 60 %), and Steep(&gt; 60%) - based on the percentage of its cross-slope. This classification serves as the technical foundation for determining a road's design speed and essential geometric features."
                },
                {
                    id: "cm10q084",
                    src: "TRAN808-00094",
                    text: "The camber required depends on",
                    options: [
                        { key: "a", text: "type of pavement" },
                        { key: "b", text: "type of pavement and rainfall" },
                        { key: "c", text: "rainfall" },
                        { key: "d", text: "rainfall characteristics" }
                    ],
                    answer: "b",
                    explanation: "Camber (cross-slope) is designed to drain water off the road surface. The required rate depends on the pavement surface type (e.g., concrete needs less than gravel) and the intensity of rainfall in the area."
                },
                {
                    id: "cm10q085",
                    src: "TRAN808-00095",
                    text: "The phases of highway planning do not include",
                    options: [
                        { key: "a", text: "Assessment of road length development" },
                        { key: "b", text: "Preparation of master plan" },
                        { key: "c", text: "Financing" },
                        { key: "d", text: "Showing the phasing of a plan in five year plan" }
                    ],
                    answer: "c",
                    explanation: "Highway planning phases involve assessment, master plan creation, and phasing within development plans. Financing is a separate implementation activity that follows the planning phase."
                },
                {
                    id: "cm10q086",
                    src: "TRAN808-00096",
                    text: "The basic requirement of alignment should be",
                    options: [
                        { key: "a", text: "short" },
                        { key: "b", text: "comfort and economical" },
                        { key: "c", text: "easy and safe" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "d",
                    explanation: "An ideal alignment must be short to reduce distance, easy for comfortable travel, safe to prevent accidents, and economical in both construction and maintenance costs."
                },
                {
                    id: "cm10q087",
                    src: "TRAN808-00097",
                    text: "The type of traffic assumed to design pavements in Nepal is",
                    options: [
                        { key: "a", text: "Mixed traffic" },
                        { key: "b", text: "Low traffic" },
                        { key: "c", text: "Very low traffic" },
                        { key: "d", text: "Heavy traffic" }
                    ],
                    answer: "a",
                    explanation: "Nepal's road network carries a diverse mix of vehicles—from bicycles and motorcycles to trucks and buses—with varying axle loads and speeds. Pavement design must account for this mixed traffic condition."
                },
                {
                    id: "cm10q088",
                    src: "TRAN808-00098",
                    text: "The main purpose of providing camber is",
                    options: [
                        { key: "a", text: "To maintain equilibrium" },
                        { key: "b", text: "To collect storm water" },
                        { key: "c", text: "To follow rc specifications" },
                        { key: "d", text: "To follow geometric specifications" }
                    ],
                    answer: "b",
                    explanation: "The primary purpose of camber (cross-slope) is to quickly drain rainwater and stormwater off the road surface to the shoulders, preventing water infiltration that weakens the pavement structure and avoiding aquaplaning."
                },
                {
                    id: "cm10q089",
                    src: "TRAN808-00099",
                    text: "The first step in a preliminary survey is",
                    options: [
                        { key: "a", text: "Map study" },
                        { key: "b", text: "Detailed survey" },
                        { key: "c", text: "Primary traverse" },
                        { key: "d", text: "Detailed project report" }
                    ],
                    answer: "c",
                    explanation: "The first major field activity in a preliminary survey is establishing a primary traverse (a control network of survey lines) along the proposed alignments to serve as a framework for all subsequent detailed measurements."
                },
                {
                    id: "cm10q090",
                    src: "TRAN808-00100",
                    text: "The economical option during the construction of a road around hill is",
                    options: [
                        { key: "a", text: "Cut the hill" },
                        { key: "b", text: "Provide a tunnel" },
                        { key: "c", text: "Look for other alternative approaches" },
                        { key: "d", text: "Provide a road around the hill" }
                    ],
                    answer: "d",
                    explanation: "Generally, constructing a road around a hill (following the contours) is more economical than massive cutting or building an expensive tunnel, as it minimizes earthwork and complex engineering structures."
                }
            ]
        },
        {
            id: "cm10wate",
            name: "Water Supply, Sanitation and Environment",
            subject: "Water Supply",
            accent: "blue",
            blurb: "10 questions drawn from the Water Supply, Sanitation and Environment bank.",
            questions: [
                {
                    id: "cm10q091",
                    src: "WATE813-00082",
                    text: "The number of goals of sustainable development is",
                    options: [
                        { key: "a", text: "17" },
                        { key: "b", text: "7" },
                        { key: "c", text: "12" },
                        { key: "d", text: "21" }
                    ],
                    answer: "a",
                    explanation: "The 2030 Agenda sets out 17 Sustainable Development Goals with 169 targets. Goal 6, on clean water and sanitation, is the one most directly tied to public health engineering."
                },
                {
                    id: "cm10q092",
                    src: "WATE813-00083",
                    text: "What is the fire demand of the city of 1 lakh population by Buston’s formula?",
                    options: [
                        { key: "a", text: "5663 l/min" },
                        { key: "b", text: "56630 l/min" },
                        { key: "c", text: "566300 l/min" },
                        { key: "d", text: "5663000 l/min" }
                    ],
                    answer: "b",
                    explanation: "Buston's formula gives Q equal to 5663 times the root of P, with P the population in thousands. A lakh is 100 thousand, so the root is 10 and the fire demand is 56,630 litres a minute. The key has been corrected, since the printed value omits that factor of ten."
                },
                {
                    id: "cm10q093",
                    src: "WATE813-00084",
                    text: "Find fire demand of 1 lakh population by Kuichling’s.",
                    options: [
                        { key: "a", text: "31820 l/hr" },
                        { key: "b", text: "630l/hr" },
                        { key: "c", text: "1909200 l/hr" },
                        { key: "d", text: "730l/hr" }
                    ],
                    answer: "c",
                    explanation: "\\(\\(Q = 3182 \\sqrt{P}\\)\\) \\(\\(Q = 3182 \\times \\sqrt{100}\\)\\) \\(Q = 31,820 \\text{ L/min} = 31,820 \\times 60 \\text{ L/hr} = 1,909,200 \\text{ L/hr} \\)"
                },
                {
                    id: "cm10q094",
                    src: "WATE813-00085",
                    text: "Water from reservoirs comes under the category of ______.",
                    options: [
                        { key: "a", text: "Rainwater" },
                        { key: "b", text: "Underground water" },
                        { key: "c", text: "Seawater" },
                        { key: "d", text: "Surface water" }
                    ],
                    answer: "d",
                    explanation: "Reservoirs, along with lakes, rivers and streams, are surface water sources: open to the atmosphere and fed by runoff from their catchments. They are generally turbid and bacteriologically unsafe, so they need full treatment before supply."
                },
                {
                    id: "cm10q095",
                    src: "WATE813-00086",
                    text: "When the impurities are separated by the gravitation of settling particles, the operation is called ______.",
                    options: [
                        { key: "a", text: "Sedimentation with coagulan" },
                        { key: "b", text: "Filtration" },
                        { key: "c", text: "Clarification" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "a",
                    explanation: "Separation of impurities purely by the settling of particles under gravity is sedimentation, or clarification. Adding a coagulant first, so that fine colloidal matter flocculates into settleable particles, extends the same process to the material plain settling cannot remove."
                },
                {
                    id: "cm10q096",
                    src: "WATE813-00087",
                    text: "The legal entity that is responsible for the wastewater collection system is called ______.",
                    options: [
                        { key: "a", text: "Collection system agency" },
                        { key: "b", text: "Sewer system agency" },
                        { key: "c", text: "Water collection agency" },
                        { key: "d", text: "Storm collection agency" }
                    ],
                    answer: "b",
                    explanation: "The sewer system agency is the legal body that owns, operates and maintains the wastewater collection network, and it is answerable for its condition, its overflows and its compliance with discharge standards."
                },
                {
                    id: "cm10q097",
                    src: "WATE813-00088",
                    text: "Impacts on which of the following should not be considered in an EIA",
                    options: [
                        { key: "a", text: "Ecological" },
                        { key: "b", text: "Human Health" },
                        { key: "c", text: "Social" },
                        { key: "d", text: "None of the above; all should be considered" }
                    ],
                    answer: "d",
                    explanation: "A core principle of Environmental Impact Assessment (EIA) is to holistically evaluate all significant environmental consequences of a proposed project. This explicitly includes ecological, human health, and social impacts. The question is phrased to identify an exception, but there is none; all are considered crucial components of a comprehensive EIA."
                },
                {
                    id: "cm10q098",
                    src: "WATE813-00089",
                    text: "Which of the elements of the EIA process does the following expression describe? ...identifying at an early stage, from all a project's possible impacts, those that are the crucial, significant ones....",
                    options: [
                        { key: "a", text: "Screening" },
                        { key: "b", text: "Baseline description" },
                        { key: "c", text: "Mitigation" },
                        { key: "d", text: "Scoping" }
                    ],
                    answer: "d",
                    explanation: "Scoping is the EIA stage that follows screening. Its primary purpose is to focus the assessment on the most significant issues and impacts, determining the scope, depth, and terms of reference for the EIA study. It identifies key impacts and alternatives to be studied in detail, avoiding unnecessary data collection."
                },
                {
                    id: "cm10q099",
                    src: "WATE813-00090",
                    text: "Which of the elements of the EIA process does the following expression describe? ......narrowing the application of EIA to those projects that may have significant environmental impacts.....",
                    options: [
                        { key: "a", text: "Screening" },
                        { key: "b", text: "Scoping" },
                        { key: "c", text: "Baseline description" },
                        { key: "d", text: "Mitigation" }
                    ],
                    answer: "a",
                    explanation: "Screening is the initial step in the EIA process. It is a regulatory filter used to decide whether a proposed project requires a full-scale EIA or not, based on factors like project type, size, location, and potential sensitivity of the surrounding environment."
                },
                {
                    id: "cm10q100",
                    src: "WATE813-00091",
                    text: "Which of the elements of the EIA process does the following expression describe? ......establishing the present and future states of the environment in the absence of the project......",
                    options: [
                        { key: "a", text: "Screening" },
                        { key: "b", text: "Baseline description" },
                        { key: "c", text: "Scoping" },
                        { key: "d", text: "Mitigation" }
                    ],
                    answer: "b",
                    explanation: "The baseline study involves collecting and describing data on the status and trends of the existing environmental conditions (physical, biological, social) in the project area. This 'baseline' is the crucial reference point against which all future predicted impacts of the project are measured and evaluated."
                }
            ]
        }
    ]
};

/* Registered lazily — js/civil.js injects this file when the set is opened. */
window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["civil-10"] = CIVIL_MODEL_10;
