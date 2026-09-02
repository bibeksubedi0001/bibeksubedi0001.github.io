/* ============================================================
   CIVIL MODEL SET 33 — Civil Engineering licence-style model paper
   100 questions · 120 minutes · no negative marking

     Basic Civil Engineering...................  13
     Structural Mechanics......................  10
     Design of Structures......................   9
     Soil Mechanics and Foundation.............  13
     Basic Water Resources Engineering.........  11
     Hydropower................................  10
     Irrigation and Drainage...................  11
     Transportation............................  12
     Water Supply, Sanitation and Environment..  11

   Generated from the civil engineering question bank; every bank
   question is used in exactly one set. Identical duplicate options
   were collapsed, and the key was rotated across a/b/c/d except on
   questions whose options refer to other options.
   The "src" field on each question is its id in the source bank.
   ============================================================ */
const CIVIL_MODEL_33 = {
    day: 63,
    kind: "model",
    badge: { top: "Model", main: "C33" },
    title: "Civil Model Set 33",
    subtitle: "Civil Engineering · 9 subjects",
    durationMinutes: 120,
    negativeMarking: 0,
    chapters: [
        {
            id: "cm33basi",
            name: "Basic Civil Engineering",
            subject: "Basic Civil",
            accent: "blue",
            blurb: "13 questions drawn from the Basic Civil Engineering bank.",
            questions: [
                {
                    id: "cm33q001",
                    src: "BASI674-00421",
                    text: "The volume (in m³) of coarse aggregate required to make 100 m² of 1 : 2 : 4 concrete is",
                    options: [
                        { key: "a", text: "84" },
                        { key: "b", text: "88" },
                        { key: "c", text: "92" },
                        { key: "d", text: "96" }
                    ],
                    answer: "b",
                    explanation: "For 1:2:4 concrete, the volume of coarse aggregate is 4/7 of the total concrete volume. For 1 cum concrete, CA = 4/7 cum. For 100 cum, CA = (4/7)*100 ≈ 57.14 cum. This seems off. Standard: Dry volume for 1 cum concrete is 1.54 cum. CA volume = (4/7)*1.54 = 0.88 cum per cum of concrete. For 100 cum, 88 cum."
                },
                {
                    id: "cm33q002",
                    src: "BASI674-00422",
                    text: "What is the least window opening for 30° m² inside volume of the room?",
                    options: [
                        { key: "a", text: "30 m²" },
                        { key: "b", text: "3 m²" },
                        { key: "c", text: "1/10th of Floor Area" },
                        { key: "d", text: "10 m²" }
                    ],
                    answer: "c",
                    explanation: "As per building bye-laws, the minimum window opening area should generally be at least 1/10th of the floor area of the room for proper ventilation and light."
                },
                {
                    id: "cm33q003",
                    src: "BASI674-00423",
                    text: "Connecting pipe in septic tank should be of diameter not less than",
                    options: [
                        { key: "a", text: "150 mm" },
                        { key: "b", text: "200 mm" },
                        { key: "c", text: "250 mm" },
                        { key: "d", text: "100 mm" }
                    ],
                    answer: "d",
                    explanation: "As per standard plumbing codes, the connecting pipe from a septic tank to the dispersion field should have a minimum diameter of 100 mm."
                },
                {
                    id: "cm33q004",
                    src: "BASI674-00424",
                    text: "Which of the following tests is specifically used to determine the hardness of an engineering material?",
                    options: [
                        { key: "a", text: "Brinell Test" },
                        { key: "b", text: "Impact Test" },
                        { key: "c", text: "Tensile Test" },
                        { key: "d", text: "Cupping Test" }
                    ],
                    answer: "a",
                    explanation: "Hardness is measured using tests like Brinell, Rockwell, or Vickers, which involve indenting the material surface."
                },
                {
                    id: "cm33q005",
                    src: "BASI674-00425",
                    text: "Which type of cement is primarily used for decorative works, architectural finishes, and as a base for paints?",
                    options: [
                        { key: "a", text: "Rapid Hardening Cement" },
                        { key: "b", text: "White Cement" },
                        { key: "c", text: "Low Heat Cement" },
                        { key: "d", text: "Sulphate Resisting Cement" }
                    ],
                    answer: "b",
                    explanation: "White cement is manufactured from raw materials free from Iron Oxide, making it ideal for aesthetic and architectural finishes."
                },
                {
                    id: "cm33q006",
                    src: "BASI674-00426",
                    text: "What is the Moment of Inertia (MOI) of a rectangular section of width 'b' and depth 'd' about its centroidal axis parallel to the width?",
                    options: [
                        { key: "a", text: "db^3 / 12" },
                        { key: "b", text: "bd^2 / 6" },
                        { key: "c", text: "bd^3 / 12" },
                        { key: "d", text: "bd^3 / 3" }
                    ],
                    answer: "c",
                    explanation: "The standard formula for the second moment of area (MOI) of a rectangle about its horizontal centroidal axis is bd^3/12."
                },
                {
                    id: "cm33q007",
                    src: "BASI674-00427",
                    text: "What is the Moment of Inertia of a semi-circular section of radius 'R' about its base (the diameter)?",
                    options: [
                        { key: "a", text: "(pi * R^4) / 4" },
                        { key: "b", text: "0.11 * R^4" },
                        { key: "c", text: "(pi * R^4) / 64" },
                        { key: "d", text: "(pi * R^4) / 8" }
                    ],
                    answer: "d",
                    explanation: "The moment of inertia of a full circle is (pi * R^4)/4; for a semi-circle about its base, it is exactly half of that, which is (pi * R^4)/8."
                },
                {
                    id: "cm33q008",
                    src: "BASI674-00428",
                    text: "Which of the following describes the 'bulking of sand' phenomenon?",
                    options: [
                        { key: "a", text: "Increase in volume due to surface tension of moisture" },
                        { key: "b", text: "Increase in weight due to moisture" },
                        { key: "c", text: "Decrease in volume due to loading" },
                        { key: "d", text: "Chemical reaction of sand with cement" }
                    ],
                    answer: "a",
                    explanation: "Bulking occurs when thin films of water push sand particles apart, increasing the total volume; it is maximum at about 4-6% moisture content."
                },
                {
                    id: "cm33q009",
                    src: "BASI674-00429",
                    text: "During the hydration of cement, which of the following is the primary bond/product responsible for the strength of the hardened paste?",
                    options: [
                        { key: "a", text: "Calcium Hydroxide" },
                        { key: "b", text: "Calcium Silicate Hydrate (C-S-H) gel" },
                        { key: "c", text: "Tricalcium Aluminate" },
                        { key: "d", text: "Gypsum" }
                    ],
                    answer: "b",
                    explanation: "C-S-H gel is the main product of the hydration of C2S and C3S and is primarily responsible for the strength and durability of concrete."
                },
                {
                    id: "cm33q010",
                    src: "BASI674-00430",
                    text: "What is a 'Lacquer' in the context of engineering materials?",
                    options: [
                        { key: "a", text: "A type of oil-based paint" },
                        { key: "b", text: "A mixture of lime and sand" },
                        { key: "c", text: "A solution of resin in a volatile solvent (cellulose nitrate)" },
                        { key: "d", text: "A water-based distemper" }
                    ],
                    answer: "c",
                    explanation: "Lacquers are film-forming materials that dry purely by evaporation of the solvent, providing a high-gloss, durable finish."
                },
                {
                    id: "cm33q011",
                    src: "BASI674-00431",
                    text: "What is the correct sequence of engineering surveys for a major project like a highway or railway?",
                    options: [
                        { key: "a", text: "Preliminary, Reconnaissance, Map Study, Final Location" },
                        { key: "b", text: "Final Location, Map Study, Preliminary, Reconnaissance" },
                        { key: "c", text: "Reconnaissance, Preliminary, Map Study, Final Location" },
                        { key: "d", text: "Map Study, Reconnaissance, Preliminary, Final Location" }
                    ],
                    answer: "d",
                    explanation: "The standard engineering survey sequence begins with a map study to identify routes, followed by field reconnaissance, detailed preliminary survey, and finally the detailed location survey."
                },
                {
                    id: "cm33q012",
                    src: "BASI674-00432",
                    text: "Which of the following solid figures can be represented by a single projection on a 2D plane without losing its defining geometric properties (like a circle or square)?",
                    options: [
                        { key: "a", text: "Cylinder" },
                        { key: "b", text: "Tetrahedron" },
                        { key: "c", text: "Hemisphere" },
                        { key: "d", text: "Cone" }
                    ],
                    answer: "a",
                    explanation: "While all 3D objects are shown on 2D planes, a cylinder is often represented by its diameter and height in a single orthographic view (rectangle) combined with a circular base view."
                },
                {
                    id: "cm33q013",
                    src: "BASI674-00433",
                    text: "What is the Moment of Inertia (MOI) of a quarter circle of radius 'R' about its base?",
                    options: [
                        { key: "a", text: "(pi * R^4) / 4" },
                        { key: "b", text: "(pi * R^4) / 16" },
                        { key: "c", text: "(pi * R^4) / 8" },
                        { key: "d", text: "(pi * R^4) / 64" }
                    ],
                    answer: "b",
                    explanation: "The MOI of a full circle is (pi * R^4)/4. For a quarter circle about its base, it is one-fourth of that, resulting in (pi * R^4)/16."
                }
            ]
        },
        {
            id: "cm33stru",
            name: "Structural Mechanics",
            subject: "Structural Mech",
            accent: "cyan",
            blurb: "10 questions drawn from the Structural Mechanics bank.",
            questions: [
                {
                    id: "cm33q014",
                    src: "STRU935-00351",
                    text: "The moment diagram for a cantilever whose free end is subjected to a bending moment, will be a",
                    options: [
                        { key: "a", text: "triangle" },
                        { key: "b", text: "parabolic" },
                        { key: "c", text: "rectangle" },
                        { key: "d", text: "cubic parabolic" }
                    ],
                    answer: "c",
                    explanation: "If a concentrated moment is applied at the free end of a cantilever, the bending moment is constant throughout the entire length of the beam (equal to the applied moment). A constant function graphs as a rectangle (a horizontal line) on the bending moment diagram."
                },
                {
                    id: "cm33q015",
                    src: "STRU935-00352",
                    text: "The shear force diagram for a cantilever which is subjected to a uniformly distributed load will be a",
                    options: [
                        { key: "a", text: "rectangle" },
                        { key: "b", text: "parabolic" },
                        { key: "c", text: "cubic parabolic" },
                        { key: "d", text: "triangle" }
                    ],
                    answer: "d",
                    explanation: "For a cantilever with a uniformly distributed load (UDL), the shear force at any point is the integral of the load from the free end to that point. This results in a linearly varying shear force, which graphs as an inclined straight line (a triangle)."
                },
                {
                    id: "cm33q016",
                    src: "STRU935-00353",
                    text: "The moment diagram for a cantilever which is subjected to a uniformly distributed load will be a",
                    options: [
                        { key: "a", text: "parabolic" },
                        { key: "b", text: "triangle" },
                        { key: "c", text: "rectangle" },
                        { key: "d", text: "cubic parabolic" }
                    ],
                    answer: "a",
                    explanation: "For a cantilever with a UDL, the shear force is linear. The bending moment, being the integral of the shear force, is a quadratic function (second degree). This graphs as a parabolic curve."
                },
                {
                    id: "cm33q017",
                    src: "STRU935-00354",
                    text: "The moment diagram for a cantilever carrying a concentrated load at its free end, will be",
                    options: [
                        { key: "a", text: "rectangle" },
                        { key: "b", text: "triangle" },
                        { key: "c", text: "parabolic" },
                        { key: "d", text: "cubic parabolic" }
                    ],
                    answer: "b",
                    explanation: "For a cantilever with a concentrated load at the free end, the shear force is constant. The bending moment, being the integral of the shear force, is a linear function (first degree). This graphs as an inclined straight line (a triangle)."
                },
                {
                    id: "cm33q018",
                    src: "STRU935-00355",
                    text: "Which law states that when a number of loads are acting on a body, the resulting strain, according to principle of superposition, will be the algebraic sum of strains caused by individual loads?",
                    options: [
                        { key: "a", text: "Hooke's law" },
                        { key: "b", text: "Lami's theorem" },
                        { key: "c", text: "Superposition theory" },
                        { key: "d", text: "Strain law" }
                    ],
                    answer: "c",
                    explanation: "The Principle of Superposition states that for a linear elastic material, the total effect (stress, strain, deflection) of multiple loads is the sum of the effects of each load applied individually."
                },
                {
                    id: "cm33q019",
                    src: "STRU935-00356",
                    text: "If the given forces P1, P2, P3, P4, and P5 which are co planar and concurrent are such that the force polygon does not close, then the system will",
                    options: [
                        { key: "a", text: "Be in equilibrium" },
                        { key: "b", text: "Always reduce to a couple" },
                        { key: "c", text: "Always be in equilibrium and will always reduce to a couple" },
                        { key: "d", text: "Always reduce to a resultant force" }
                    ],
                    answer: "d",
                    explanation: "For a system of concurrent coplanar forces, equilibrium exists if and only if the force polygon closes. If it does not close, the system has a net resultant force. It cannot reduce to a couple because the forces are concurrent (their moments about the point of concurrency are zero)."
                },
                {
                    id: "cm33q020",
                    src: "STRU935-00357",
                    text: "The load on structure is doubled, which of the following does not change: at internal hinge:",
                    options: [
                        { key: "a", text: "Bending moment" },
                        { key: "b", text: "Axial force" },
                        { key: "c", text: "Shear force" },
                        { key: "d", text: "All changes" }
                    ],
                    answer: "a",
                    explanation: "An internal hinge is a point within a structure that cannot resist a bending moment; the bending moment at an internal hinge is always zero. Even if the loads are doubled, the bending moment at the hinge remains zero. The shear and axial forces, however, will change as they are proportional to the applied loads."
                },
                {
                    id: "cm33q021",
                    src: "STRU935-00358",
                    text: "The principle of superposition is valid only if the material is:",
                    options: [
                        { key: "a", text: "Plastic" },
                        { key: "b", text: "Elastic" },
                        { key: "c", text: "Elasto plastic" },
                        { key: "d", text: "Stress- strain relation line" }
                    ],
                    answer: "b",
                    explanation: "The Principle of Superposition is only valid for linear systems. In mechanics of materials, this requires the material to be linear elastic (obeying Hooke's Law), so that stress and strain are directly proportional. It is not valid for plastic or elasto-plastic materials where the behavior is nonlinear."
                },
                {
                    id: "cm33q022",
                    src: "STRU935-00359",
                    text: "The point load P and Q act at a distance of 1/2 and 1/3 from left support. The deflection at section C, 2/3 from left support is 0.01 and 0.03 respectively. What is the deflection at C when load P is doubled and Q is halved",
                    options: [
                        { key: "a", text: "0.020" },
                        { key: "b", text: "0.015" },
                        { key: "c", text: "0.035" },
                        { key: "d", text: "cannot be determined" }
                    ],
                    answer: "c",
                    explanation: "This applies the Principle of Superposition. Deflection is linear with load. Deflection due to P alone is 0.01, due to Q alone is 0.03. New deflection = (2P causes 2*0.01) + (Q/2 causes 0.03/2) = 0.02 + 0.015 = 0.035."
                },
                {
                    id: "cm33q023",
                    src: "STRU935-00360",
                    text: "When vertical loads on beam are increased which of the diagram does not change:",
                    options: [
                        { key: "a", text: "Axial force diagram" },
                        { key: "b", text: "Shear force diagram" },
                        { key: "c", text: "Bending Moment Diagram" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "a",
                    explanation: "If only vertical loads are increased on a beam, the axial force (if it exists) is typically caused by horizontal components of loads or reactions. Increasing vertical loads alone does not affect the axial force diagram. The shear force and bending moment diagrams will change proportionally."
                }
            ]
        },
        {
            id: "cm33desi",
            name: "Design of Structures",
            subject: "Design of Str",
            accent: "slate",
            blurb: "9 questions drawn from the Design of Structures bank.",
            questions: [
                {
                    id: "cm33q024",
                    src: "DESI787-00305",
                    text: "Which of the following relation between design pressure (p_z) and design wind speed (V_z) is correct?",
                    options: [
                        { key: "a", text: "p_z = V_z²" },
                        { key: "b", text: "p_z = 1/(V_z²)" },
                        { key: "c", text: "p_z = V_z" },
                        { key: "d", text: "p_z = 1/V_z²" }
                    ],
                    answer: "a",
                    explanation: "The design wind pressure (p_z) is proportional to the square of the design wind speed (V_z) at height z. The exact formula is p_z = 0.6 V_z² (where p_z is in N/m² and V_z is in m/s), showing the quadratic relationship."
                },
                {
                    id: "cm33q025",
                    src: "DESI787-00306",
                    text: "What is the partial safety factor for live load in combination of DL+LL for limit state of strength, where DL=Dead load, LL=Imposed load?",
                    options: [
                        { key: "a", text: "1.2" },
                        { key: "b", text: "1.5" },
                        { key: "c", text: "1.0" },
                        { key: "d", text: "0.8" }
                    ],
                    answer: "b",
                    explanation: "For the limit state of strength, the common load combination is 1.5(DL + LL). Therefore, the partial safety factor for live load (γ_LL) in this fundamental combination is 1.5."
                },
                {
                    id: "cm33q026",
                    src: "DESI787-00307",
                    text: "Which of the following load combination is not possible?",
                    options: [
                        { key: "a", text: "Dead load + Imposed load + Wind load" },
                        { key: "b", text: "Dead + Imposed load + Earthquake load" },
                        { key: "c", text: "Dead load + Wind load + Earthquake load" },
                        { key: "d", text: "Dead load + Imposed load" }
                    ],
                    answer: "c",
                    explanation: "Design codes (like IS 456 or IS 800) stipulate that wind load and earthquake load are not considered to act simultaneously because their probability of occurring together is extremely low. Therefore, combinations including both WL and EL are generally not considered."
                },
                {
                    id: "cm33q027",
                    src: "DESI787-00308",
                    text: "What is the partial safety factor for Dead load in combination of DL+LL+WL/EL for limit state of serviceability, where DL=Dead load, LL=Imposed load , WL=Wind load, EL=Earthquake load ?",
                    options: [
                        { key: "a", text: "1.5" },
                        { key: "b", text: "0.8" },
                        { key: "c", text: "1.2" },
                        { key: "d", text: "1.0" }
                    ],
                    answer: "d",
                    explanation: "For the limit state of serviceability (deflection, vibration), partial safety factors are usually taken as 1.0 for all loads (DL, LL, WL, EL) as per most codes, including IS codes. The structure is checked under service loads without any amplification."
                },
                {
                    id: "cm33q028",
                    src: "DESI787-00309",
                    text: "What is the partial safety factor for dead load in combination of DL+ WL/EL for limit state of serviceability, where DL=Dead load, WL=wind load, EL=earthquake load?",
                    options: [
                        { key: "a", text: "1.0" },
                        { key: "b", text: "1.2" },
                        { key: "c", text: "1.5" },
                        { key: "d", text: "0.8" }
                    ],
                    answer: "a",
                    explanation: "Similar to the previous question, for serviceability limit states, the partial safety factors are typically 1.0 for all types of loads, including dead, wind, and earthquake loads."
                },
                {
                    id: "cm33q029",
                    src: "DESI787-00310",
                    text: "What is the partial safety factor for imposed load in combination of DL+LL+AL , where DL=Dead load, WL=Wind load, AL=Accidental load ?",
                    options: [
                        { key: "a", text: "1.4" },
                        { key: "b", text: "0.35" },
                        { key: "c", text: "0.5" },
                        { key: "d", text: "0.4" }
                    ],
                    answer: "b",
                    explanation: "For load combinations involving accidental loads (like fire, impact), the partial safety factor for imposed loads (LL) is often significantly reduced. As per many codes, including Eurocode, it is 0.35 for accompanying variable loads in accidental design situations."
                },
                {
                    id: "cm33q030",
                    src: "DESI787-00311",
                    text: "What percent of factored load is notional horizontal force?",
                    options: [
                        { key: "a", text: "1 %" },
                        { key: "b", text: "10 %" },
                        { key: "c", text: "0.5 %" },
                        { key: "d", text: "20 %" }
                    ],
                    answer: "c",
                    explanation: "To analyze a frame subjected to gravity loads while considering its sway stability, notional horizontal forces shall be applied. These forces account for practical imperfections and shall be taken at each level as being equal to 0.5 percent of the factored dead load plus vertical imposed loads applied at that level. The notional loads shall not be applied along with other lateral loads such as wind and earthquake loads in the analysis. References (Page 34): <a href=\"https://giwmscdntwo.gov.np/media/pdf_upload/NBC%20111%20Draft_3uce6xh.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">reference</a>"
                },
                {
                    id: "cm33q031",
                    src: "DESI787-00312",
                    text: "Purpose of load factors is to account for:",
                    options: [
                        { key: "a", text: "Lapse in designing" },
                        { key: "b", text: "Lapse in construction" },
                        { key: "c", text: "Lapse in funding" },
                        { key: "d", text: "Lapse in predicting magnitudes of dead or live load" }
                    ],
                    answer: "d",
                    explanation: "Partial safety factors (load factors) are applied to characteristic loads to account for uncertainties in the estimation of loads (unforeseen increases in live load, inaccuracies in dead load calculation) and in the analysis of their effects."
                },
                {
                    id: "cm33q032",
                    src: "DESI787-00313",
                    text: "Load factor used for live load are ______ than that used for dead loads.",
                    options: [
                        { key: "a", text: "Larger" },
                        { key: "b", text: "Smaller" },
                        { key: "c", text: "Depends upon case" },
                        { key: "d", text: "Depends upon loading" }
                    ],
                    answer: "a",
                    explanation: "Generally, the partial safety factor for live loads (e.g., 1.5) is larger than that for dead loads (e.g., 1.2 or 1.35 in some cases for unfavorable effect) because live loads have a higher degree of uncertainty and variability compared to the more predictable dead loads."
                }
            ]
        },
        {
            id: "cm33soil",
            name: "Soil Mechanics and Foundation",
            subject: "Soil Mechanics",
            accent: "amber",
            blurb: "13 questions drawn from the Soil Mechanics and Foundation bank.",
            questions: [
                {
                    id: "cm33q033",
                    src: "SOIL136-00428",
                    text: "The foundation that is used when the soil mass is sufficiently erratic?",
                    options: [
                        { key: "a", text: "Strap footing" },
                        { key: "b", text: "Mat footing" },
                        { key: "c", text: "Combined footing" },
                        { key: "d", text: "Rectangular combined footing" }
                    ],
                    answer: "b",
                    explanation: "A mat foundation (or raft foundation) is often used when the soil conditions are variable or erratic. Its large size helps bridge over local weak spots and reduces differential settlement."
                },
                {
                    id: "cm33q034",
                    src: "SOIL136-00429",
                    text: "Usually, rafts are designed as",
                    options: [
                        { key: "a", text: "Reinforced slabs" },
                        { key: "b", text: "Ordinary concrete slab" },
                        { key: "c", text: "Reinforced concrete flat slabs" },
                        { key: "d", text: "Inverted flat slabs" }
                    ],
                    answer: "c",
                    explanation: "Raft foundations are typically designed as reinforced concrete flat slabs, with thickening under columns and sometimes with beams (ribbed raft) to resist high bending moments and shear forces."
                },
                {
                    id: "cm33q035",
                    src: "SOIL136-00430",
                    text: "The weight of the raft is not considered in the structural design, because",
                    options: [
                        { key: "a", text: "Raft does not remain contact with soil" },
                        { key: "b", text: "The weight is transferred to column" },
                        { key: "c", text: "All of the mentioned" },
                        { key: "d", text: "Weight is carried by subsoil" }
                    ],
                    answer: "d",
                    explanation: "In the structural design of the raft for moments and shears, the self-weight of the concrete raft is usually neglected because it is directly supported by the soil beneath it and does not contribute to the bending moments caused by the column loads."
                },
                {
                    id: "cm33q036",
                    src: "SOIL136-00431",
                    text: "If a maximum settlement of 50 mm is permitted for a raft, the differential settlement must not exceed",
                    options: [
                        { key: "a", text: "20 mm" },
                        { key: "b", text: "30 mm" },
                        { key: "c", text: "10 mm" },
                        { key: "d", text: "25 mm" }
                    ],
                    answer: "a",
                    explanation: "A common rule of thumb in foundation engineering is that the maximum differential settlement should not exceed about half to three-quarters of the maximum total settlement. For a 50 mm total settlement, a typical limit for differential settlement is 20 mm."
                },
                {
                    id: "cm33q037",
                    src: "SOIL136-00432",
                    text: "The net ultimate bearing capacity for raft may be determined by",
                    options: [
                        { key: "a", text: "Akerpiton’s equation and Terraghi’s equation" },
                        { key: "b", text: "Darcy’s equation" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "Both (a) and (b)" }
                    ],
                    answer: "a",
                    explanation: "The net ultimate bearing capacity for a raft foundation can be calculated using bearing capacity theories, such as those proposed by Terzaghi and Skempton. 'Akerpiton' is likely a misspelling of 'Skempton'."
                },
                {
                    id: "cm33q038",
                    src: "SOIL136-00433",
                    text: "In raft footing, if the C.G of the load coincide with the centroid of the raft, the upward load is considered as",
                    options: [
                        { key: "a", text: "Non uniform pressure" },
                        { key: "b", text: "Excess pressure" },
                        { key: "c", text: "Uniform pressure" },
                        { key: "d", text: "None of the mentioned" }
                    ],
                    answer: "c",
                    explanation: "If the resultant of all the structural loads (the center of gravity) coincides with the centroid of the raft area, the reactive upward pressure from the soil is assumed to be uniform."
                },
                {
                    id: "cm33q039",
                    src: "SOIL136-00434",
                    text: "Raft is subdivided in to series of beams to establish",
                    options: [
                        { key: "a", text: "Pressure distribution" },
                        { key: "b", text: "None of the mentioned" },
                        { key: "c", text: "All of the mentioned" },
                        { key: "d", text: "Shear failure and Moment diagrams" }
                    ],
                    answer: "d",
                    explanation: "For structural design purposes, a common approach is to divide the raft into a series of continuous strips (beams) in both directions. This simplifies the analysis for calculating bending moments and shear forces."
                },
                {
                    id: "cm33q040",
                    src: "SOIL136-00435",
                    text: "The penetration resistance N for designing of raft should be taken at ______ intervals.",
                    options: [
                        { key: "a", text: "75 cm" },
                        { key: "b", text: "50 cm" },
                        { key: "c", text: "60 cm" },
                        { key: "d", text: "20 cm" }
                    ],
                    answer: "a",
                    explanation: "Standard Penetration Test (SPT) 'N' values are typically obtained at depth intervals of 75 cm (or 0.75 m) during drilling and soil investigation."
                },
                {
                    id: "cm33q041",
                    src: "SOIL136-00436",
                    text: "If the penetration resistance N is less than 5, which of the following measures can be adopted?",
                    options: [
                        { key: "a", text: "Using inverted flat slab" },
                        { key: "b", text: "Using piles and piers and Compacting sand" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "All of the mentioned" }
                    ],
                    answer: "b",
                    explanation: "An SPT 'N' value less than 5 indicates very loose soil with very low bearing capacity. Measures to improve the foundation include soil compaction (for sands) or using deep foundations like piles or piers to bypass the weak soil."
                },
                {
                    id: "cm33q042",
                    src: "SOIL136-00437",
                    text: "The net pressure can be calculated for raft having width greater than ______",
                    options: [
                        { key: "a", text: "20 cm" },
                        { key: "b", text: "30 cm" },
                        { key: "c", text: "6 m" },
                        { key: "d", text: "4 m" }
                    ],
                    answer: "c",
                    explanation: "For wide rafts (typically greater than 6 meters), the net pressure (the pressure causing settlement) can be calculated based on the depth of the soil zone that is stressed, as the pressure bulb extends deeper."
                },
                {
                    id: "cm33q043",
                    src: "SOIL136-00438",
                    text: "The common types of well shape are",
                    options: [
                        { key: "a", text: "Rectangular" },
                        { key: "b", text: "Dumb bell" },
                        { key: "c", text: "Single circular" },
                        { key: "d", text: "All" }
                    ],
                    answer: "d",
                    explanation: "Common shapes for well foundations (caissons) include single circular, rectangular, double-D, and dumb-bell shapes, chosen based on the required stability and the dimensions of the pier they support."
                },
                {
                    id: "cm33q044",
                    src: "SOIL136-00439",
                    text: "Well are also called as",
                    options: [
                        { key: "a", text: "Open caissons" },
                        { key: "b", text: "Shell sunk" },
                        { key: "c", text: "Caisse" },
                        { key: "d", text: "All" }
                    ],
                    answer: "a",
                    explanation: "Well foundations are a type of deep foundation, also commonly known as open caissons. They are constructed by excavating soil from within a permanent casing."
                },
                {
                    id: "cm33q045",
                    src: "SOIL136-00440",
                    text: "______ forms the most common type of deep foundation for bridges?",
                    options: [
                        { key: "a", text: "Pile foundation" },
                        { key: "b", text: "Well foundation" },
                        { key: "c", text: "Pier foundation" },
                        { key: "d", text: "Caisson foundation" }
                    ],
                    answer: "b",
                    explanation: "In many regions, particularly in India, well foundations (large, hollow, watertight structures sunk into the ground) are the most traditional and common deep foundation type for major bridge piers."
                }
            ]
        },
        {
            id: "cm33watr",
            name: "Basic Water Resources Engineering",
            subject: "Water Resources",
            accent: "emerald",
            blurb: "11 questions drawn from the Basic Water Resources Engineering bank.",
            questions: [
                {
                    id: "cm33q046",
                    src: "WATE701-00374",
                    text: "The dynamic viscosity of a fluid is 1 Poise. What should one multiply to it to get the answer in N-s/m2?",
                    options: [
                        { key: "a", text: "1" },
                        { key: "b", text: "10" },
                        { key: "c", text: "0.1" },
                        { key: "d", text: "100" }
                    ],
                    answer: "c",
                    explanation: "1 Poise = 0.1 Pa-s = 0.1 N-s/m². Therefore, to convert Poise to N-s/m², you multiply by 0.1."
                },
                {
                    id: "cm33q047",
                    src: "WATE701-00375",
                    text: "Which of the following is a unit of kinematic viscosity?",
                    options: [
                        { key: "a", text: "Pa-s" },
                        { key: "b", text: "m/s" },
                        { key: "c", text: "Poise" },
                        { key: "d", text: "Stokes" }
                    ],
                    answer: "d",
                    explanation: "Kinematic viscosity (ν) is the ratio of dynamic viscosity (μ) to density (ρ), ν = μ/ρ. Its units are m²/s or Stokes (1 Stokes = 10⁻⁴ m²/s). Pa-s and Poise are units of dynamic viscosity. m/s is a unit of speed, not viscosity."
                },
                {
                    id: "cm33q048",
                    src: "WATE701-00376",
                    text: "The kinematic viscosity of a fluid is 0.1 Stokes. What will be the value is m²/s?",
                    options: [
                        { key: "a", text: "10^-5" },
                        { key: "b", text: "10^-4" },
                        { key: "c", text: "10^-3" }
                    ],
                    answer: "a",
                    explanation: "1 Stokes = 10⁻⁴ m²/s. Therefore, 0.1 Stokes = 0.1 × 10⁻⁴ m²/s = 10⁻⁵ m²/s. (Note: Option 1 and 3 are duplicates in the original text; the correct value is 10⁻⁵)."
                },
                {
                    id: "cm33q049",
                    src: "WATE701-00377",
                    text: "The shear stress at a point in a liquid is found to be 0.03 N/m². The velocity gradient at the point is 0.15 s⁻¹. What will be it’s viscosity (in Poise)?",
                    options: [
                        { key: "a", text: "20" },
                        { key: "b", text: "2" },
                        { key: "c", text: "0.2" },
                        { key: "d", text: "0.5" }
                    ],
                    answer: "b",
                    explanation: "Using Newton's law of viscosity: τ = μ(du/dy). Therefore, μ = τ / (du/dy) = 0.03 N/m² / 0.15 s⁻¹ = 0.2 Pa-s. Since 1 Pa-s = 10 Poise, 0.2 Pa-s = 2 Poise."
                },
                {
                    id: "cm33q050",
                    src: "WATE701-00378",
                    text: "Which of the following statement is true about vapor pressure of a liquid?",
                    options: [
                        { key: "a", text: "Vapor pressure is closely related to molecular activity but independent of the temperature of the liquid" },
                        { key: "b", text: "Vapor pressure is not affected by molecular activity and temperature of the liquid" },
                        { key: "c", text: "Vapor pressure is closely related to molecular activity and temperature of the liquid" },
                        { key: "d", text: "Vapor pressure is not affected by molecular activity and is independent of the temperature of the liquid" }
                    ],
                    answer: "c",
                    explanation: "Vapor pressure is the pressure exerted by a vapor in thermodynamic equilibrium with its condensed phases. It is a direct result of molecular activity (molecules escaping the liquid surface) and increases significantly with temperature as molecular kinetic energy increases."
                },
                {
                    id: "cm33q051",
                    src: "WATE701-00379",
                    text: "Which of the following machines have the possibility of cavitation?",
                    options: [
                        { key: "a", text: "Reaction turbines and reciprocating pumps" },
                        { key: "b", text: "Impulse turbines and centrifugal pumps" },
                        { key: "c", text: "Impulse turbines and reciprocating pumps" },
                        { key: "d", text: "Reaction turbines and centrifugal pumps" }
                    ],
                    answer: "d",
                    explanation: "Cavitation occurs in machines where there is a pressure drop below the vapor pressure of the fluid. This is common in reaction turbines (like Francis or Kaplan) and centrifugal pumps, where high flow velocities can cause localized low-pressure zones. Impulse turbines (like Pelton wheels) operate at atmospheric pressure, and reciprocating pumps typically have higher pressure, reducing cavitation risk."
                },
                {
                    id: "cm33q052",
                    src: "WATE701-00380",
                    text: "The three liquids 1, 2, and 3 with vapor pressures V1, V2 and V3 respectively, are kept under same pressure. If V1 &gt; V2 &gt; V3, which liquid will start boiling early?",
                    options: [
                        { key: "a", text: "liquid 1" },
                        { key: "b", text: "liquid 2" },
                        { key: "c", text: "liquid 3" },
                        { key: "d", text: "same time" }
                    ],
                    answer: "a",
                    explanation: "A liquid boils when its vapor pressure equals the surrounding pressure. Liquid 1 has the highest vapor pressure (V1), so it will reach the surrounding pressure first and boil earliest."
                },
                {
                    id: "cm33q053",
                    src: "WATE701-00381",
                    text: "Equal amount of a particular liquid is poured into three similar containers, namely 1, 2 and 3, at a temperature of T1, T2 and T3 respectively. If T1 &lt; T2 &lt; T3, the liquid in which container will have the highest vapor pressure?",
                    options: [
                        { key: "a", text: "container 1" },
                        { key: "b", text: "container 3" },
                        { key: "c", text: "container 2" },
                        { key: "d", text: "remain same" }
                    ],
                    answer: "b",
                    explanation: "Vapor pressure is a property that depends solely on the identity of the liquid and its temperature. It is independent of the amount of liquid or the container size (for a given temperature). Since T3 is the highest temperature, the liquid in container 3 will have the highest vapor pressure."
                },
                {
                    id: "cm33q054",
                    src: "WATE701-00382",
                    text: "The absolute pressure of a water is 0.5kN above its vapor pressure. If it flows with a velocity of 1m/s, what will be the value of Cavitation Number describing the flow induced boiling?",
                    options: [
                        { key: "a", text: "0.25" },
                        { key: "b", text: "0.5" },
                        { key: "c", text: "1" },
                        { key: "d", text: "2" }
                    ],
                    answer: "c",
                    explanation: "The Cavitation Number (σ) is calculated as σ = 2(P - Pv) / (ρV²), where P is the absolute pressure, Pv is the vapor pressure, ρ is density, and V is velocity. Given P - Pv = 0.5 kN/m² = 500 N/m², V=1 m/s, and assuming ρ for water is 1000 kg/m³: σ = 2 * 500 / (1000 * 1²) = 1000 / 1000 = 1."
                },
                {
                    id: "cm33q055",
                    src: "WATE701-00383",
                    text: "Which of the following is correct regarding the formation and collapse of vapor bubbles in a liquid?",
                    options: [
                        { key: "a", text: "Vapor bubbles are formed when the fluid pressure goes above the vapor pressure and collapses when the fluid pressure goes above the bubble pressure" },
                        { key: "b", text: "Vapor bubbles are formed when the fluid pressure goes above the vapor pressure and collapses when the fluid pressure goes below the bubble pressure" },
                        { key: "c", text: "Vapor bubbles are formed when the fluid pressure drops below the vapor pressure and collapses when the fluid pressure goes below the bubble pressure" },
                        { key: "d", text: "Vapor bubbles are formed when the fluid pressure drops below the vapor pressure and collapses when the fluid pressure goes above the bubble pressure" }
                    ],
                    answer: "d",
                    explanation: "Cavitation bubbles form when the local fluid pressure falls below the vapor pressure of the liquid, causing vaporization. These bubbles then collapse violently (implode) when they move into a region of higher pressure, causing damage to machinery components."
                },
                {
                    id: "cm33q056",
                    src: "WATE701-00384",
                    text: "Which of the following is a shear-thinning fluid?",
                    options: [
                        { key: "a", text: "Pseudo plastic" },
                        { key: "b", text: "Bingham plastic" },
                        { key: "c", text: "Thixotropic" },
                        { key: "d", text: "Dilatant" }
                    ],
                    answer: "a",
                    explanation: "A shear-thinning fluid, also known as a pseudoplastic fluid, is one whose viscosity decreases under applied shear stress. Examples include ketchup, blood, paint, and polymer solutions. Bingham plastics have a yield stress. Thixotropic fluids have time-dependent shear thinning. Dilatant fluids are shear-thickening."
                }
            ]
        },
        {
            id: "cm33hydr",
            name: "Hydropower",
            subject: "Hydropower",
            accent: "cyan",
            blurb: "10 questions drawn from the Hydropower bank.",
            questions: [
                {
                    id: "cm33q057",
                    src: "HYDR626-00301",
                    text: "Water for a hydroelectric power station is obtained from a reservoir with a head of 150 m. What will be the approximate electrical power generated per hour per cubic meter of Water if mechanical (hydro) efficiency is 0.85 and electric efficiency is 0.92?",
                    options: [
                        { key: "a", text: "1470.0 kWh" },
                        { key: "b", text: "1150.7 kWh" },
                        { key: "c", text: "945.7 kWh" },
                        { key: "d", text: "1350.0 kWh" }
                    ],
                    answer: "b",
                    explanation: "Energy generated per cubic meter of water = η * ρ * g * H * (1 m³). Overall efficiency η_overall = 0.85 * 0.92 = 0.782. Energy = 0.782 * 1000 kg/m³ * 9.81 m/s² * 150 m * 1 m³ = 1,150,701.3 Joules. Since 1 kWh = 3,600,000 Joules, Energy (kWh) = 1,150,701.3 / 3,600,000 ≈ 0.3196 kWh. This result does not match any options. Recalculating for power: P = η * ρ * g * Q * H. For Q=1 m³/s, P = 0.782 * 1000 * 9.81 * 1 * 150 = 1,150,713 W = 1150.7 kW. If this power is generated for 1 hour, the energy is 1150.7 kWh. The question asks for \"per hour per cubic meter\", which is ambiguous but likely intends for a flow rate of 1 m³/s for one hour (3600 m³), making the answer 1150.7 kWh."
                },
                {
                    id: "cm33q058",
                    src: "HYDR626-00302",
                    text: "A hydroelectric reservoir can supply water continuously at a rate of 100 m³/s. The head is 75 m. The theoretical power that can be developed is (MW).",
                    options: [
                        { key: "a", text: "65.7" },
                        { key: "b", text: "68.5" },
                        { key: "c", text: "73.5" },
                        { key: "d", text: "70.8" }
                    ],
                    answer: "c",
                    explanation: "Theoretical power means no efficiency losses are considered. P = ρ * g * Q * H = 1000 kg/m³ * 9.81 m/s² * 100 m³/s * 75 m = 73,575,000 W = 73.575 MW."
                },
                {
                    id: "cm33q059",
                    src: "HYDR626-00303",
                    text: "Hydroelectric power plant is ......",
                    options: [
                        { key: "a", text: "Non-renewable source of energy" },
                        { key: "b", text: "Non-conventional source of energy" },
                        { key: "c", text: "Continuous source of energy" },
                        { key: "d", text: "Conventional source of energy" }
                    ],
                    answer: "d",
                    explanation: "Hydropower is a conventional source of energy because it has been used for commercial electricity generation for over a century. It is also renewable, but \"conventional\" is the more precise term in this context compared to \"non-conventional\" like solar or wind."
                },
                {
                    id: "cm33q060",
                    src: "HYDR626-00304",
                    text: "Which statement about hydroelectric power plant is wrong?",
                    options: [
                        { key: "a", text: "Meeting rapidly changing load demands is not possible in hydroelectric power plant." },
                        { key: "b", text: "Efficiency of hydroelectric power plant does not reduce with age" },
                        { key: "c", text: "Its construction coast is very high and takes a long time for erection." },
                        { key: "d", text: "It is very neat and clean plant because no smoke or ash is produced." }
                    ],
                    answer: "a",
                    explanation: "Hydroelectric plants are excellent for meeting rapidly changing load demands. They can be started and stopped very quickly (in a few minutes) and their output can be adjusted rapidly by changing the flow of water through the turbines, making them ideal for peak load and grid frequency regulation."
                },
                {
                    id: "cm33q061",
                    src: "HYDR626-00305",
                    text: "Which of the following is not a requirement for site selection of hydroelectric power plant?",
                    options: [
                        { key: "a", text: "Availability of water" },
                        { key: "b", text: "Sedimentation" },
                        { key: "c", text: "Large catchment area" },
                        { key: "d", text: "Rocky land" }
                    ],
                    answer: "b",
                    explanation: "Sedimentation is a problem, not a requirement, for hydroelectric plant site selection. A large amount of sediment in the water can silt up the reservoir, reduce storage capacity, and cause abrasion in turbines. Sites are selected to minimize sedimentation, not require it."
                },
                {
                    id: "cm33q062",
                    src: "HYDR626-00306",
                    text: "Which of the following is not an advantage of hydroelectric power plant?",
                    options: [
                        { key: "a", text: "no fuel requirement" },
                        { key: "b", text: "low running cost" },
                        { key: "c", text: "continuous power source" },
                        { key: "d", text: "no standby losses" }
                    ],
                    answer: "c",
                    explanation: "Hydropower is not an inherently continuous power source. Its generation depends on the availability of water, which can be seasonal (monsoon vs. dry season) or affected by droughts. Run-of-river plants, in particular, have highly variable output. Reservoir plants provide more stability but are still subject to hydrological variability."
                },
                {
                    id: "cm33q063",
                    src: "HYDR626-00307",
                    text: "Hydroelectric power plant is mainly located in ......",
                    options: [
                        { key: "a", text: "Flat areas" },
                        { key: "b", text: "Deserts" },
                        { key: "c", text: "Deltas" },
                        { key: "d", text: "Hilly areas" }
                    ],
                    answer: "d",
                    explanation: "Hydroelectric plants are primarily located in hilly or mountainous areas because these terrains provide the necessary high head (elevation drop) for efficient power generation. The steeper the gradient, the more potential energy is available in the water."
                },
                {
                    id: "cm33q064",
                    src: "HYDR626-00308",
                    text: "Which of the following statement is true about hydroelectric power plant?",
                    options: [
                        { key: "a", text: "Hydroelectric power plants are multipurpose." },
                        { key: "b", text: "Due to non-uniform flow of water frequency control in such plants is very difficult." },
                        { key: "c", text: "Hydroelectric power plant has high running cost" },
                        { key: "d", text: "Water is used as fuel in hydroelectric power plant" }
                    ],
                    answer: "a",
                    explanation: "Many large hydroelectric projects are multipurpose. Besides generating electricity, they provide benefits like flood control, irrigation water for agriculture, water supply for municipalities and industries, recreation, and navigation."
                },
                {
                    id: "cm33q065",
                    src: "HYDR626-00309",
                    text: "A ROR type hydropower plant with 100MW installed capacity and with Q40% design flow can generate the full capacity at least for ______.",
                    options: [
                        { key: "a", text: "245 days" },
                        { key: "b", text: "146 days" },
                        { key: "c", text: "300 days" },
                        { key: "d", text: "365 days" }
                    ],
                    answer: "b",
                    explanation: "Q40% (40% exceedance probability) means the design flow is available or exceeded for 40% of the time in a year. Therefore, the plant can generate at its full installed capacity for 0.4 × 365 = 146 days. This is a fundamental concept in flow duration curve analysis for run-of-river projects."
                },
                {
                    id: "cm33q066",
                    src: "HYDR626-00310",
                    text: "The cost of fuel transportation is minimum in the case of ______.",
                    options: [
                        { key: "a", text: "Thermal power plant" },
                        { key: "b", text: "Nuclear power plant" },
                        { key: "c", text: "Hydro-electric power plant" },
                        { key: "d", text: "Diesel power plant" }
                    ],
                    answer: "c",
                    explanation: "Hydro-electric power plants use water as their energy source, which requires no extraction, processing, or transportation of fuel like coal, gas, uranium, or diesel. This eliminates fuel transportation costs entirely, a significant economic advantage."
                }
            ]
        },
        {
            id: "cm33irri",
            name: "Irrigation and Drainage",
            subject: "Irrigation",
            accent: "emerald",
            blurb: "11 questions drawn from the Irrigation and Drainage bank.",
            questions: [
                {
                    id: "cm33q067",
                    src: "IRRI951-00344",
                    text: "Groynes are generally built",
                    options: [
                        { key: "a", text: "Perpendicular to the bank" },
                        { key: "b", text: "Inclined upstream upto 30 degree" },
                        { key: "c", text: "Inclined downstream upto 30 degree" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "The alignment of a groyne depends on its intended function (attracting, repelling, or deflecting). They can be built perpendicular to the bank or inclined upstream (for repelling) or downstream (for attracting) typically within a 30-degree range."
                },
                {
                    id: "cm33q068",
                    src: "IRRI951-00345",
                    text: "The canal regulator, which is constructed at a diversion head works is called",
                    options: [
                        { key: "a", text: "cross regulator" },
                        { key: "b", text: "distribution head regulator" },
                        { key: "c", text: "canal module" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "c",
                    explanation: "A 'canal module' or 'canal head regulator' is the structure constructed at the head of a canal off-taking from a diversion headworks (like a weir or barrage). Its primary function is to control the water entry into the main canal."
                },
                {
                    id: "cm33q069",
                    src: "IRRI951-00346",
                    text: "The gated regulator, which is constructed in the parent canal near the site of an off taking, canal, is called a",
                    options: [
                        { key: "a", text: "canal head regulator" },
                        { key: "b", text: "distribution head regulator" },
                        { key: "c", text: "cross regulator" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "c",
                    explanation: "A cross regulator is a gated structure built across a parent canal (e.g., a main canal). It is located downstream of an off-take (e.g., a distributary) to raise the water level upstream and ensure a sufficient head for feeding the off-taking channel."
                },
                {
                    id: "cm33q070",
                    src: "IRRI951-00347",
                    text: "A structure which is constructed at the head of the off taking channel or distributary is called",
                    options: [
                        { key: "a", text: "Canal head regulator" },
                        { key: "b", text: "distribution head regulator" },
                        { key: "c", text: "cross regulator" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "b",
                    explanation: "A Distributary Head Regulator (DHR) is constructed at the head of a distributary or minor off-taking from a parent canal. It regulates the amount of water entering the distributary and helps control silt entry."
                },
                {
                    id: "cm33q071",
                    src: "IRRI951-00348",
                    text: "Distributary head regulators are provided",
                    options: [
                        { key: "a", text: "to control the supplies to the off-taking channel" },
                        { key: "b", text: "to control the silt entry in the off-taking canal" },
                        { key: "c", text: "to stop the supply, when not needed, in off-taking canal" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "d",
                    explanation: "The Distributary Head Regulator (DHR) is a crucial control structure. It manages the quantity of water entering the distributary, helps in sediment control by utilizing the sill level, and can completely shut off the supply when irrigation is not required."
                },
                {
                    id: "cm33q072",
                    src: "IRRI951-00349",
                    text: "The earth embankments constructed parallel river for flood protection is called",
                    options: [
                        { key: "a", text: "Levees" },
                        { key: "b", text: "Guide banks" },
                        { key: "c", text: "Terraces" },
                        { key: "d", text: "Groynes" }
                    ],
                    answer: "a",
                    explanation: "Levees (or dykes) are long, continuous earthen embankments constructed parallel to the river's course. Their sole purpose is to act as a barrier, confining flood waters within the main channel and protecting the adjacent floodplain."
                },
                {
                    id: "cm33q073",
                    src: "IRRI951-00350",
                    text: "Leeves are constructed",
                    options: [
                        { key: "a", text: "Transverse to river flow" },
                        { key: "b", text: "Parallel to river flow" },
                        { key: "c", text: "At some inclination to river flow" },
                        { key: "d", text: "Sometimes parallel and sometimes tranverse to river flow" }
                    ],
                    answer: "b",
                    explanation: "Levees are always constructed parallel to the direction of the river flow. Their function is to contain the river during floods, which requires them to run alongside the river for long distances, not project into it."
                },
                {
                    id: "cm33q074",
                    src: "IRRI951-00351",
                    text: "What are the helping factors of Waterist Management?",
                    options: [
                        { key: "a", text: "To cope with country’s energy crises" },
                        { key: "b", text: "Appropriate funds must be allocated" },
                        { key: "c", text: "Alternatives must be provided to the community" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "Effective water resource management requires a multi-faceted approach. It addresses energy needs (e.g., hydropower), necessitates proper financial investment for infrastructure, and involves providing sustainable alternatives to local communities for equitable resource use."
                },
                {
                    id: "cm33q075",
                    src: "IRRI951-00352",
                    text: "What is the object of watershed management?",
                    options: [
                        { key: "a", text: "Conservation of soil and water capacity of soil" },
                        { key: "b", text: "Improve the water holding" },
                        { key: "c", text: "Harvesting rainwater" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "Watershed management aims for the sustainable development of a geographical area drained by a common outlet. Its core objectives include conserving soil and water, enhancing the land's water retention capacity, and promoting rainwater harvesting to manage water resources holistically."
                },
                {
                    id: "cm33q076",
                    src: "IRRI951-00353",
                    text: "Implementation of proper watershed practices will improve management",
                    options: [
                        { key: "a", text: "The farm production" },
                        { key: "b", text: "The per-capita income" },
                        { key: "c", text: "Both (a) and (b)" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "c",
                    explanation: "Successful watershed management leads to improved soil fertility and water availability, which directly boosts agricultural (farm) production. This increase in productivity and resources subsequently raises the income and standard of living for people in the watershed, i.e., the per-capita income."
                },
                {
                    id: "cm33q077",
                    src: "IRRI951-00354",
                    text: "Consider the following terms relating to irrigation requirements: 1. Consumptive irrigation requirement 2. Net irrigation requirement 3. Field irrigation requirement 4. Gross irrigation requirement The correct sequence of these requirements in increasing order is:",
                    options: [
                        { key: "a", text: "1,2,3,4" },
                        { key: "b", text: "2, 1, 3, 4" },
                        { key: "c", text: "3,2,1,4" },
                        { key: "d", text: "2,1,4,3" }
                    ],
                    answer: "b",
                    explanation: "Net Irrigation Requirement (NIR - 2): The minimum amount of water required to meet the evapotranspiration needs of the crop. This is the fundamental water need at the root zone. Consumptive Irrigation Requirement (CIR - 1): This is essentially the same as NIR. It is the amount of irrigation water required to meet the evapotranspiration needs of the crop, excluding effective rainfall and other contributions. Therefore, NIR and CIR are nearly identical and form the base amount. Field Irrigation Requirement (FIR - 3): This is the amount of water that must be delivered to the field to meet the NIR. It accounts for water application losses within the field (e.g., deep percolation, surface runoff). FIR = NIR / Application Efficiency. Gross Irrigation Requirement (GIR - 4): This is the total amount of water that must be diverted from the water source to meet the FIR. It includes the FIR plus all conveyance losses in the canals or pipes from the source to the field. GIR = FIR / Conveyance Efficiency. Thus, the values increase as you account for more losses: NIR/CIR (crop need) &lt; FIR (includes field losses) &lt; GIR (includes field and conveyance losses)"
                }
            ]
        },
        {
            id: "cm33tran",
            name: "Transportation",
            subject: "Transportation",
            accent: "rose",
            blurb: "12 questions drawn from the Transportation bank.",
            questions: [
                {
                    id: "cm33q078",
                    src: "TRAN808-00352",
                    text: "Failure from relative movement of pavement layer",
                    options: [
                        { key: "a", text: "Alligator cracking" },
                        { key: "b", text: "Shear failure" },
                        { key: "c", text: "Reflection cracking" },
                        { key: "d", text: "Consolidation" }
                    ],
                    answer: "c",
                    explanation: "Reflection cracking is directly caused by horizontal or vertical movement of an underlying cracked layer."
                },
                {
                    id: "cm33q079",
                    src: "TRAN808-00353",
                    text: "Causes of raveling in bituminous pavement",
                    options: [
                        { key: "a", text: "Soft bitumen" },
                        { key: "b", text: "Open graded aggregates" },
                        { key: "c", text: "Excessive bitumen" },
                        { key: "d", text: "Low bitumen content" }
                    ],
                    answer: "d",
                    explanation: "Raveling is caused by lack of binder making the mix dry and brittle, or inadequate compaction."
                },
                {
                    id: "cm33q080",
                    src: "TRAN808-00354",
                    text: "Treatment for surfacing on existing black top or concrete road",
                    options: [
                        { key: "a", text: "Tack coat" },
                        { key: "b", text: "Seal coat" },
                        { key: "c", text: "Spray of emulsion" },
                        { key: "d", text: "Prime coat" }
                    ],
                    answer: "a",
                    explanation: "A tack coat is essential for bonding a new asphalt layer to an existing impervious surface."
                },
                {
                    id: "cm33q081",
                    src: "TRAN808-00355",
                    text: "Reinforcement placement in reinforced concrete road",
                    options: [
                        { key: "a", text: "Near bottom of slab" },
                        { key: "b", text: "At middle" },
                        { key: "c", text: "Near top of slab" },
                        { key: "d", text: "Equally distributed" }
                    ],
                    answer: "b",
                    explanation: "Reinforcement in concrete roads (rigid pavement) is primarily placed to control cracking, shrinkage, and temperature stresses, usually positioned at mid-depth (one-third to half of the slab depth from the top)."
                },
                {
                    id: "cm33q082",
                    src: "TRAN808-00356",
                    text: "Which is not a distress in flexible pavements?",
                    options: [
                        { key: "a", text: "Alligator cracking" },
                        { key: "b", text: "Raveling" },
                        { key: "c", text: "Mud pumping" },
                        { key: "d", text: "Pot hole formation" }
                    ],
                    answer: "c",
                    explanation: "Mud pumping is a distress specific to rigid pavements where water ejects subgrade soil through joints/cracks."
                },
                {
                    id: "cm33q083",
                    src: "TRAN808-00357",
                    text: "Stripping of asphalt pavement is primarily due to",
                    options: [
                        { key: "a", text: "Excessive asphalt" },
                        { key: "b", text: "Fatigue damage" },
                        { key: "c", text: "Less tough aggregate" },
                        { key: "d", text: "Moisture damage" }
                    ],
                    answer: "d",
                    explanation: "Stripping is the loss of adhesion between binder and aggregate primarily caused by water infiltration."
                },
                {
                    id: "cm33q084",
                    src: "TRAN808-00358",
                    text: "Defect indicating disintegration by loss of aggregates",
                    options: [
                        { key: "a", text: "Raveling" },
                        { key: "b", text: "Pot holes" },
                        { key: "c", text: "Edge breaking" },
                        { key: "d", text: "Rutting" }
                    ],
                    answer: "a",
                    explanation: "Raveling is the progressive loss of aggregate particles from the surface, making it rough and uneven."
                },
                {
                    id: "cm33q085",
                    src: "TRAN808-00360",
                    text: "Water bound macadam road is an example of",
                    options: [
                        { key: "a", text: "Rigid pavement" },
                        { key: "b", text: "Semi-rigid pavement" },
                        { key: "c", text: "Flexible pavement" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "c",
                    explanation: "WBM derives strength from aggregate interlock and lacks rigid behavior, making it a flexible pavement."
                },
                {
                    id: "cm33q086",
                    src: "TRAN808-00361",
                    text: "Distance driver can see opposite object on road surface",
                    options: [
                        { key: "a", text: "Sight distance" },
                        { key: "b", text: "Visibility" },
                        { key: "c", text: "Clear distance" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "a",
                    explanation: "Sight distance is the length of roadway ahead visible to the driver, crucial for safe stopping and maneuvering."
                },
                {
                    id: "cm33q087",
                    src: "TRAN808-00362",
                    text: "Tests to evaluate subgrade strength are classified as",
                    options: [
                        { key: "a", text: "Shear and penetration" },
                        { key: "b", text: "Shear and bearing" },
                        { key: "c", text: "Bearing and penetration" },
                        { key: "d", text: "Shear, bearing and penetration" }
                    ],
                    answer: "d",
                    explanation: "Subgrade strength is evaluated through shear tests, bearing tests, and penetration tests measuring different properties."
                },
                {
                    id: "cm33q088",
                    src: "TRAN808-00363",
                    text: "Test conducted in-situ and in laboratory",
                    options: [
                        { key: "a", text: "CBR" },
                        { key: "b", text: "Unconfined compression" },
                        { key: "c", text: "Triaxial" },
                        { key: "d", text: "Direct shear" }
                    ],
                    answer: "a",
                    explanation: "The California Bearing Ratio test can be performed both in the laboratory and in-situ on the prepared subgrade."
                },
                {
                    id: "cm33q089",
                    src: "TRAN808-00364",
                    text: "In penetration macadam construction, bitumen is",
                    options: [
                        { key: "a", text: "Sprayed after aggregate compaction" },
                        { key: "b", text: "Premixed with aggregates" },
                        { key: "c", text: "Sprayed before aggregates" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "a",
                    explanation: "In penetration macadam, aggregate is first spread and compacted, then bitumen is sprayed over it, followed by a sealing layer."
                }
            ]
        },
        {
            id: "cm33wate",
            name: "Water Supply, Sanitation and Environment",
            subject: "Water Supply",
            accent: "blue",
            blurb: "11 questions drawn from the Water Supply, Sanitation and Environment bank.",
            questions: [
                {
                    id: "cm33q090",
                    src: "WATE813-00332",
                    text: "In the Ion-exchange process for water softening, the exhausted Zeolite bed is regenerated using:",
                    options: [
                        { key: "a", text: "Sugar solution" },
                        { key: "b", text: "Fly ash" },
                        { key: "c", text: "Common salt (NaCl)" },
                        { key: "d", text: "Soda ash" }
                    ],
                    answer: "c",
                    explanation: "Zeolite is regenerated using a brine (NaCl) solution to restore the sodium ions."
                },
                {
                    id: "cm33q091",
                    src: "WATE813-00333",
                    text: "Which of the following diseases is NOT classified as a water-borne disease?",
                    options: [
                        { key: "a", text: "Cholera" },
                        { key: "b", text: "Typhoid" },
                        { key: "c", text: "Dysentery" },
                        { key: "d", text: "Measles" }
                    ],
                    answer: "d",
                    explanation: "Measles is an airborne viral disease, whereas Cholera, Typhoid, and Dysentery are spread via contaminated water."
                },
                {
                    id: "cm33q092",
                    src: "WATE813-00334",
                    text: "The 'Blue Baby' syndrome (Methaemoglobinaemia) in infants is caused by the presence of excess levels of which substance in drinking water?",
                    options: [
                        { key: "a", text: "Nitrates" },
                        { key: "b", text: "Fluorides" },
                        { key: "c", text: "Chlorides" },
                        { key: "d", text: "Sulphates" }
                    ],
                    answer: "a",
                    explanation: "High nitrate levels in water are converted to nitrites in an infant's body, which interferes with the blood's ability to carry oxygen."
                },
                {
                    id: "cm33q093",
                    src: "WATE813-00335",
                    text: "In the context of sanitation engineering, what does the term 'Night Soil' refer to?",
                    options: [
                        { key: "a", text: "Waste from industries" },
                        { key: "b", text: "Human excreta collected from latrines" },
                        { key: "c", text: "Stormwater runoff" },
                        { key: "d", text: "Kitchen waste" }
                    ],
                    answer: "b",
                    explanation: "Night soil is a historical term for human feces and urine collected from non-sewered areas, often used for soil fertilization."
                },
                {
                    id: "cm33q094",
                    src: "WATE813-00336",
                    text: "What is the recommended 'Minimum Velocity' (self-cleansing velocity) in a sewer to prevent the deposition of solids?",
                    options: [
                        { key: "a", text: "0.15 m/s" },
                        { key: "b", text: "3.0 m/s" },
                        { key: "c", text: "0.6 to 0.9 m/s" },
                        { key: "d", text: "5.0 m/s" }
                    ],
                    answer: "c",
                    explanation: "A minimum velocity of 0.6 m/s for present flow and 0.9 m/s for ultimate flow is required to ensure that the sewer remains self-cleansing."
                },
                {
                    id: "cm33q095",
                    src: "WATE813-00337",
                    text: "In a water treatment plant, which process is typically carried out immediately after the 'Coagulation' (rapid mixing) stage?",
                    options: [
                        { key: "a", text: "Sedimentation" },
                        { key: "b", text: "Filtration" },
                        { key: "c", text: "Disinfection" },
                        { key: "d", text: "Flocculation (Slow mixing)" }
                    ],
                    answer: "d",
                    explanation: "After coagulation destabilizes particles, flocculation allows them to collide and form larger masses (flocs) that can settle easily."
                },
                {
                    id: "cm33q096",
                    src: "WATE813-00338",
                    text: "Which of the following is typically NOT included as a mandatory component in an Environmental Impact Assessment (EIA) report?",
                    options: [
                        { key: "a", text: "Project's bank account details" },
                        { key: "b", text: "Mitigation measures" },
                        { key: "c", text: "Monitoring plan" },
                        { key: "d", text: "Public consultation" }
                    ],
                    answer: "a",
                    explanation: "EIA focuses on environmental consequences and mitigation; financial details like specific bank accounts are administrative and not part of the environmental assessment."
                },
                {
                    id: "cm33q097",
                    src: "WATE813-00339",
                    text: "The 'Blue Baby' syndrome (methemoglobinemia) in infants is caused by the presence of excess of which chemical in drinking water?",
                    options: [
                        { key: "a", text: "Fluorides" },
                        { key: "b", text: "Nitrates" },
                        { key: "c", text: "Chlorides" },
                        { key: "d", text: "Sulphates" }
                    ],
                    answer: "b",
                    explanation: "High nitrate levels in water are converted to nitrites in the body, which interfere with the blood's ability to carry oxygen in infants."
                },
                {
                    id: "cm33q098",
                    src: "WATE813-00340",
                    text: "In the context of sanitation, what does the term 'Night Soil' refer to?",
                    options: [
                        { key: "a", text: "Industrial waste" },
                        { key: "b", text: "Kitchen waste" },
                        { key: "c", text: "Human excreta" },
                        { key: "d", text: "Stormwater runoff" }
                    ],
                    answer: "c",
                    explanation: "Night soil is a euphemism for human excrement collected from privies or latrines, historically used as a fertilizer."
                },
                {
                    id: "cm33q099",
                    src: "WATE813-00341",
                    text: "What is the recommended minimum velocity (self-cleansing velocity) in a sewer to prevent the settlement of solid particles?",
                    options: [
                        { key: "a", text: "0.15 m/s" },
                        { key: "b", text: "3.0 m/s" },
                        { key: "c", text: "5.0 m/s" },
                        { key: "d", text: "0.60 m/s" }
                    ],
                    answer: "d",
                    explanation: "A self-cleansing velocity (typically 0.6 m/s to 0.9 m/s) is necessary to ensure that organic matter and grit do not settle and clog the sewer."
                },
                {
                    id: "cm33q100",
                    src: "WATE813-00342",
                    text: "In a water treatment plant, which process is typically carried out immediately after the coagulation and flocculation stage?",
                    options: [
                        { key: "a", text: "Sedimentation" },
                        { key: "b", text: "Disinfection" },
                        { key: "c", text: "Screening" },
                        { key: "d", text: "Aeration" }
                    ],
                    answer: "a",
                    explanation: "After chemicals aggregate impurities into 'flocs' (flocculation), the water enters a sedimentation tank where the heavy flocs settle by gravity."
                }
            ]
        }
    ]
};

/* Registered lazily — js/civil.js injects this file when the set is opened. */
window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["civil-33"] = CIVIL_MODEL_33;
