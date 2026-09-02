/* ============================================================
   CIVIL MODEL SET 4 — Civil Engineering licence-style model paper
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
const CIVIL_MODEL_4 = {
    day: 34,
    kind: "model",
    badge: { top: "Model", main: "C4" },
    title: "Civil Model Set 4",
    subtitle: "Civil Engineering · 9 subjects",
    durationMinutes: 120,
    negativeMarking: 0,
    chapters: [
        {
            id: "cm4basi",
            name: "Basic Civil Engineering",
            subject: "Basic Civil",
            accent: "blue",
            blurb: "13 questions drawn from the Basic Civil Engineering bank.",
            questions: [
                {
                    id: "cm4q001",
                    src: "BASI674-00027",
                    text: "What is the purpose of providing waterproof tiles?",
                    options: [
                        { key: "a", text: "Prevents water from entering" },
                        { key: "b", text: "Help to reduce fire catch" },
                        { key: "c", text: "Provide smooth surface" },
                        { key: "d", text: "Help in sound insulation" }
                    ],
                    answer: "a",
                    explanation: "Waterproof tiles are laid on terraces, in bathrooms and in kitchens to form a continuous impervious skin, so that water runs off to the outlet instead of soaking into the slab below. Keeping the water out also protects the reinforcement from corrosion."
                },
                {
                    id: "cm4q002",
                    src: "BASI674-00028",
                    text: "What is used in rainwater gutter in roof?",
                    options: [
                        { key: "a", text: "Cement" },
                        { key: "b", text: "sand" },
                        { key: "c", text: "bitumen" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "c",
                    explanation: "Gutters and valley linings are sealed with bitumen, which stays flexible, sticks to the substrate and is completely impervious, so the joint can move with temperature without cracking. Cement and sand would crack under that movement and let water through."
                },
                {
                    id: "cm4q003",
                    src: "BASI674-00029",
                    text: "A projecting piece usually provided to support a truss, is",
                    options: [
                        { key: "a", text: "coping" },
                        { key: "b", text: "frieze" },
                        { key: "c", text: "cornice" },
                        { key: "d", text: "lintel" }
                    ],
                    answer: "c",
                    explanation: "A corbel or projecting cornice course is built out from the wall face to give a truss or beam a bearing surface. Coping caps the top of a wall to throw water off, a frieze is a decorative band and a lintel spans an opening."
                },
                {
                    id: "cm4q004",
                    src: "BASI674-00030",
                    text: "In which of the following, CG and geometric center doesn't coincide.",
                    options: [
                        { key: "a", text: "Circle Equilateral" },
                        { key: "b", text: "Triangle" },
                        { key: "c", text: "Rectangle" },
                        { key: "d", text: "Right angle triangle" }
                    ],
                    answer: "d",
                    explanation: "For any figure with two axes of symmetry, such as a circle, a square or a rectangle, the centroid sits at the geometric centre. A right-angled triangle has no such symmetry, so its centroid lies at one third of the height and one third of the base from the right angle."
                },
                {
                    id: "cm4q005",
                    src: "BASI674-00031",
                    text: "Second moment of area of triangle about its base",
                    options: [
                        { key: "a", text: "I = bh³ / 12" },
                        { key: "b", text: "I = bh³ / 36" },
                        { key: "c", text: "I = bh³ / 24" },
                        { key: "d", text: "I = bh³ / 6" }
                    ],
                    answer: "a",
                    explanation: "About its own base a triangle has a second moment of area of bh cubed over 12. Shifting to the centroidal axis, which is h/3 above the base, reduces it to bh cubed over 36 by the parallel axis theorem."
                },
                {
                    id: "cm4q006",
                    src: "BASI674-00032",
                    text: "The angle for well conditional triangle should not be less than",
                    options: [
                        { key: "a", text: "60 degree" },
                        { key: "b", text: "30 degree" },
                        { key: "c", text: "45 degree" },
                        { key: "d", text: "20 degree" }
                    ],
                    answer: "b",
                    explanation: "In triangulation a well conditioned triangle keeps every angle above about 30 degrees and below about 120 degrees. Very acute or very obtuse triangles make the computed lengths extremely sensitive to small angular errors, so the fix becomes weak."
                },
                {
                    id: "cm4q007",
                    src: "BASI674-00033",
                    text: "MOI of inertia of hollow circular",
                    options: [
                        { key: "a", text: "π/8 * (R^4 - r^4)" },
                        { key: "b", text: "π/16 * (R^4 - r^4)" },
                        { key: "c", text: "π/64 * (R^4 - r^4)" },
                        { key: "d", text: "π/4 * (R^4 - r^4)" }
                    ],
                    answer: "c",
                    explanation: "A hollow circular section is treated as the solid outer circle minus the hole, so I equals pi over 64 times the difference of the fourth powers of the outer and inner diameters. Because the fourth power dominates, metal near the outside contributes far more stiffness, which is why tubes are efficient."
                },
                {
                    id: "cm4q008",
                    src: "BASI674-00034",
                    text: "MOI of semicircle about the base",
                    options: [
                        { key: "a", text: "πD^4/16" },
                        { key: "b", text: "πD^4/64" },
                        { key: "c", text: "πD^4/32" },
                        { key: "d", text: "πD^4/128" }
                    ],
                    answer: "d",
                    explanation: "A semicircle about its diameter has half the second moment of area of the full circle, that is half of pi D to the fourth over 64, which gives pi D to the fourth over 128."
                },
                {
                    id: "cm4q009",
                    src: "BASI674-00035",
                    text: "What is the moment of inertia of a rectangular section about a horizontal axis passing through the base?",
                    options: [
                        { key: "a", text: "bd³/3" },
                        { key: "b", text: "bd³/12" },
                        { key: "c", text: "bd³/6" }
                    ],
                    answer: "a",
                    explanation: "About its base a rectangle has I equal to bd cubed over 3. The centroidal value is bd cubed over 12, and the parallel axis theorem adds A times (d/2) squared, that is bd cubed over 4, to make up the difference."
                },
                {
                    id: "cm4q010",
                    src: "BASI674-00036",
                    text: "The CG of a cone from its base is",
                    options: [
                        { key: "a", text: "h/3" },
                        { key: "b", text: "h/4" },
                        { key: "c", text: "h/2" },
                        { key: "d", text: "3h/4" }
                    ],
                    answer: "b",
                    explanation: "The centroid of a solid cone lies on its axis at one quarter of the height above the base, because the cross-sectional area falls off as the square of the distance from the apex, concentrating the volume near the base."
                },
                {
                    id: "cm4q011",
                    src: "BASI674-00037",
                    text: "Calculate the second moment of area of a hollow circular section with external and internal diameter 20cm and 10cm respectively",
                    options: [
                        { key: "a", text: "2,347 cm<sup>4</sup>" },
                        { key: "b", text: "3,681 cm<sup>4</sup>" },
                        { key: "c", text: "7,363 cm<sup>4</sup>" },
                        { key: "d", text: "9,375 cm<sup>4</sup>" }
                    ],
                    answer: "c",
                    explanation: "$$I = \\frac{\\pi}{64} (D^4 - d^4)$$ $$I = \\frac{\\pi}{64} (160,000 - 10,000)$$ $$I \\approx 7363.11\\text{ cm}^4$$"
                },
                {
                    id: "cm4q012",
                    src: "BASI674-00038",
                    text: "Find the Cg of trapezoidal section for depth h with parallel side a and b from the base of b?",
                    options: [
                        { key: "a", text: "h/2*((b+2a)/(b+a))" },
                        { key: "b", text: "h/2*((b+2a)/(b-a))" },
                        { key: "c", text: "h/3*((b+2a)/(b-a))" },
                        { key: "d", text: "h/3*((b+2a)/(b+a))" }
                    ],
                    answer: "d",
                    explanation: "Measured from the side of length b, the centroid of a trapezium lies at h over 3 times (b plus 2a) divided by (b plus a). Setting a equal to b recovers h/2 for a rectangle, and setting a to zero gives h/3 for a triangle, which is a useful check."
                },
                {
                    id: "cm4q013",
                    src: "BASI674-00039",
                    text: "The perpendicular axis theorem is used to calculate the MOI of",
                    options: [
                        { key: "a", text: "circular lamina" },
                        { key: "b", text: "semi-circular lamina" },
                        { key: "c", text: "triangle lamina" },
                        { key: "d", text: "square lamina" }
                    ],
                    answer: "a",
                    explanation: "The perpendicular axis theorem, Iz equal to Ix plus Iy, applies only to a plane lamina, and it is most useful for a circular lamina, where symmetry makes Ix equal to Iy so each is simply half the polar moment."
                }
            ]
        },
        {
            id: "cm4stru",
            name: "Structural Mechanics",
            subject: "Structural Mech",
            accent: "cyan",
            blurb: "11 questions drawn from the Structural Mechanics bank.",
            questions: [
                {
                    id: "cm4q014",
                    src: "STRU935-00023",
                    text: "Principal planes are subjected to",
                    options: [
                        { key: "a", text: "normal stresses only" },
                        { key: "b", text: "tangential stresses only" },
                        { key: "c", text: "normal stresses as well as tangential stresses" },
                        { key: "d", text: "none of these." }
                    ],
                    answer: "a",
                    explanation: "A principal plane is defined as one on which the shear stress vanishes, leaving only normal stress. There are two such perpendicular planes in two-dimensional stress, and they carry the maximum and minimum normal stresses."
                },
                {
                    id: "cm4q015",
                    src: "STRU935-00024",
                    text: "Along the principal plan subjected to maximum principal stress",
                    options: [
                        { key: "a", text: "maximum shear stress acts" },
                        { key: "b", text: "minimum shear stress acts" },
                        { key: "c", text: "no shear stress acts" },
                        { key: "d", text: "none of these" }
                    ],
                    answer: "c",
                    explanation: "By definition no shear stress acts on a principal plane, which is why the normal stress there reaches its extreme value. The planes of maximum shear stress lie at 45 degrees to the principal planes."
                },
                {
                    id: "cm4q016",
                    src: "STRU935-00025",
                    text: "Shear stress in the edge of the shaft is?",
                    options: [
                        { key: "a", text: "Minimum" },
                        { key: "b", text: "Zero" },
                        { key: "c", text: "Negative" },
                        { key: "d", text: "Maximum" }
                    ],
                    answer: "d",
                    explanation: "For a circular shaft under torsion, the shear stress varies linearly from the center to the outer surface: Zero at the center Maximum at the outer edge (surface) of the shaft So, the shear stress at the edge of the shaft is maximum."
                },
                {
                    id: "cm4q017",
                    src: "STRU935-00026",
                    text: "The permissible stress to which a structural member can be subjected to, is known as",
                    options: [
                        { key: "a", text: "working stress" },
                        { key: "b", text: "bearing stress" },
                        { key: "c", text: "tensile stress" },
                        { key: "d", text: "compressive stress" }
                    ],
                    answer: "a",
                    explanation: "Working stress, also called permissible or allowable stress, is the yield or ultimate stress divided by the factor of safety. It is the ceiling used in elastic design, so the member stays well inside its elastic range in service."
                },
                {
                    id: "cm4q018",
                    src: "STRU935-00027",
                    text: "A body is subjected to a tensile stress of 1200 MPa on one plane and another tensile stress of 600 MPa on a plane at right angles to the former. It is also subjected to a shear stress of 400 MPa on the same planes. The maximum normal stress will be",
                    options: [
                        { key: "a", text: "400 MPa" },
                        { key: "b", text: "1400 MPa" },
                        { key: "c", text: "500 MPa" },
                        { key: "d", text: "900 MPa" }
                    ],
                    answer: "b",
                    explanation: "The average normal stress is (1200 plus 600) over 2, that is 900 MPa, and the radius of the Mohr circle is the root of (300 squared plus 400 squared), which is 500 MPa. The maximum normal stress is therefore 900 plus 500, or 1400 MPa."
                },
                {
                    id: "cm4q019",
                    src: "STRU935-00028",
                    text: "A body is subjected to a direct tensile stress of 300 Mpa in one plane accompanied by a simple shear stress of 200 Mpa. The maximum normal stress on the plane will be",
                    options: [
                        { key: "a", text: "300 Mpa" },
                        { key: "b", text: "350 Mpa" },
                        { key: "c", text: "400 Mpa" },
                        { key: "d", text: "450 Mpa" }
                    ],
                    answer: "c",
                    explanation: "With only one direct stress the average is 300 over 2, that is 150 MPa, and the radius of the Mohr circle is the root of (150 squared plus 200 squared), which is 250 MPa. The maximum normal stress is 150 plus 250, giving 400 MPa."
                },
                {
                    id: "cm4q020",
                    src: "STRU935-00029",
                    text: "If a body is subjected to stresses in the xy plane with stresses of 60 N/mm² and 80 N/mm² along x and y axes, and a shear stress of 20 N/mm², find the maximum shear stress to which the body is subjected.",
                    options: [
                        { key: "a", text: "25 N/mm²" },
                        { key: "b", text: "26.3 N/mm²" },
                        { key: "c", text: "27.2 N/mm²" },
                        { key: "d", text: "22.4 N/mm²" }
                    ],
                    answer: "d",
                    explanation: "The maximum shear stress is the radius of the Mohr circle, the root of half the difference of the direct stresses squared plus the shear stress squared. That is the root of (10 squared plus 20 squared), which is the root of 500, or 22.4 N/mm²."
                },
                {
                    id: "cm4q021",
                    src: "STRU935-00030",
                    text: "A moment M is acting at the center of a cantilever beam of length L. What will be the value of shear force and bending moment at the fixed end?",
                    options: [
                        { key: "a", text: "0 and M" },
                        { key: "b", text: "0 and 0" },
                        { key: "c", text: "M and 0" },
                        { key: "d", text: "M/L and 0" }
                    ],
                    answer: "a",
                    explanation: "A couple applied anywhere on a cantilever needs no vertical reaction to balance it, so the shear force at the fixed end is zero. The support simply supplies an equal and opposite moment, so the bending moment there is M."
                },
                {
                    id: "cm4q022",
                    src: "STRU935-00031",
                    text: "The maximum shear stress is ______ times the average shear stress For rectangular beams.",
                    options: [
                        { key: "a", text: "1.33" },
                        { key: "b", text: "1.5" },
                        { key: "c", text: "1.7" },
                        { key: "d", text: "2.36" }
                    ],
                    answer: "b",
                    explanation: "For a rectangular section the shear stress varies parabolically, zero at the top and bottom fibres and greatest at the neutral axis, where it reaches 1.5 times the average value V over A. For a circular section the factor is 4/3."
                },
                {
                    id: "cm4q023",
                    src: "STRU935-00032",
                    text: "A circular shaft is subjected to a torsion, the stress at the center of shaft is",
                    options: [
                        { key: "a", text: "maximum" },
                        { key: "b", text: "minimum" },
                        { key: "c", text: "zero" },
                        { key: "d", text: "infinite" }
                    ],
                    answer: "c",
                    explanation: "In torsion the shear stress varies linearly with radius, tau equal to T r over J, so it is zero on the axis and greatest at the outer surface. That is exactly why hollow shafts are so efficient: the lightly stressed core contributes little."
                },
                {
                    id: "cm4q024",
                    src: "STRU935-00033",
                    text: "Which of the following doesn't have the same unit as the modulus of elasticity?",
                    options: [
                        { key: "a", text: "Modulus of rigidity" },
                        { key: "b", text: "Shear stress" },
                        { key: "c", text: "Pressure" },
                        { key: "d", text: "Section modulus" }
                    ],
                    answer: "d",
                    explanation: "Modulus of elasticity, modulus of rigidity, shear stress and pressure all have units of force per unit area. Section modulus is a purely geometric quantity, I divided by y, with units of length cubed."
                }
            ]
        },
        {
            id: "cm4desi",
            name: "Design of Structures",
            subject: "Design of Str",
            accent: "slate",
            blurb: "10 questions drawn from the Design of Structures bank.",
            questions: [
                {
                    id: "cm4q025",
                    src: "DESI787-00021",
                    text: "The mixture of cement sand and coarse aggregate is increase by ... to get dry volume of concrete.",
                    options: [
                        { key: "a", text: "50-55%" },
                        { key: "b", text: "10-20%" },
                        { key: "c", text: "30-40%" },
                        { key: "d", text: "40-50%" }
                    ],
                    answer: "a",
                    explanation: "The dry, loose volume of the ingredients is about 50 to 55 percent greater than the volume of the finished wet concrete, because the cement and water fill the voids between the aggregate particles. Estimates therefore multiply the wet volume by roughly 1.54."
                },
                {
                    id: "cm4q026",
                    src: "DESI787-00022",
                    text: "The maximum compressive strain in concrete in axial compression is taken as",
                    options: [
                        { key: "a", text: "0.02" },
                        { key: "b", text: "0.002" },
                        { key: "c", text: "0.05" },
                        { key: "d", text: "0.005" }
                    ],
                    answer: "b",
                    explanation: "IS 456 limits the maximum compressive strain in concrete under pure axial compression to 0.002. In bending the extreme fibre is allowed to reach 0.0035, since the less strained fibres below help to restrain it."
                },
                {
                    id: "cm4q027",
                    src: "DESI787-00023",
                    text: "In doubly reinforced means",
                    options: [
                        { key: "a", text: "Steel in Compression only" },
                        { key: "b", text: "Steel in Tension only" },
                        { key: "c", text: "Steel in both compression and tension" },
                        { key: "d", text: "Double steel in compression than tension" }
                    ],
                    answer: "c",
                    explanation: "A doubly reinforced section carries steel in both the compression and the tension zones. It is used when the section is restricted in depth and cannot take the moment as a singly reinforced member, and the compression steel also cuts long-term creep deflection."
                },
                {
                    id: "cm4q028",
                    src: "DESI787-00024",
                    text: "In slab the minimum thickness is designed to resist",
                    options: [
                        { key: "a", text: "Shear" },
                        { key: "b", text: "Tension" },
                        { key: "c", text: "Compression" },
                        { key: "d", text: "Deflection" }
                    ],
                    answer: "d",
                    explanation: "The primary role of designing a slab with a minimum thickness is to control long-term deflection and prevent excessive sagging. It also plays a vital role in resisting shear forces (especially around columns) and ensuring the overall strength and durability of the reinforced concrete structure. If no deflection in option go with Shear."
                },
                {
                    id: "cm4q029",
                    src: "DESI787-00025",
                    text: "The cracking of cement occurs first in.",
                    options: [
                        { key: "a", text: "Under reinforced." },
                        { key: "b", text: "Over reinforced." },
                        { key: "c", text: "Balanced" },
                        { key: "d", text: "all" }
                    ],
                    answer: "a",
                    explanation: "An under-reinforced section has relatively little tensile steel, so the steel yields first and stretches noticeably. That yielding opens wide flexural cracks and produces large deflections well before collapse, which is precisely the ductile warning that codes require."
                },
                {
                    id: "cm4q030",
                    src: "DESI787-00026",
                    text: "What is the name of that slab which is continuously two way supported and carries load in one direction only?",
                    options: [
                        { key: "a", text: "Two-way slab" },
                        { key: "b", text: "One-way slab" },
                        { key: "c", text: "torsional slab" },
                        { key: "d", text: "continuous slab" }
                    ],
                    answer: "b",
                    explanation: "Gemini said A one-way slab is characterized by an aspect ratio where the longer span divided by the shorter span is greater than 2. It is designed to carry and transfer structural loads primarily in one direction along its shorter span to the supporting beams."
                },
                {
                    id: "cm4q031",
                    src: "DESI787-00027",
                    text: "After reaching yield point, strain in a test sample ....than stress.",
                    options: [
                        { key: "a", text: "Decreases slowly" },
                        { key: "b", text: "Decreases heavily" },
                        { key: "c", text: "Increases heavily" },
                        { key: "d", text: "Remains same" }
                    ],
                    answer: "c",
                    explanation: "Beyond the yield point the material flows plastically, so strain increases rapidly while the stress rises only slightly or even falls. The flat plateau on the stress-strain curve is what gives steel its ductility and its warning before failure."
                },
                {
                    id: "cm4q032",
                    src: "DESI787-00028",
                    text: "The moment of resistance of an over reinforced section is",
                    options: [
                        { key: "a", text: "Equal to balanced section" },
                        { key: "b", text: "Less than balanced section" },
                        { key: "c", text: "Less than under reinforced section" },
                        { key: "d", text: "More than balanced section" }
                    ],
                    answer: "d",
                    explanation: "An over-reinforced section has more steel than the balanced condition, so the concrete crushes before the steel yields. The section carries slightly more moment than the balanced case, but it fails suddenly with no warning, which is why codes forbid it."
                },
                {
                    id: "cm4q033",
                    src: "DESI787-00029",
                    text: "What is permanent action according to the classification of actions by the IS code?",
                    options: [
                        { key: "a", text: "Due-to self-weight" },
                        { key: "b", text: "Due to accidents" },
                        { key: "c", text: "Due to earthquake loads" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "a",
                    explanation: "Permanent actions are those that act throughout the life of the structure with little variation, principally self-weight and fixed finishes. Imposed loads are variable actions, and earthquake and impact are accidental or seismic actions."
                },
                {
                    id: "cm4q034",
                    src: "DESI787-00030",
                    text: "Shear reinforcement is provided in RC section to",
                    options: [
                        { key: "a", text: "Counteract maximum BM" },
                        { key: "b", text: "Counteract crack and shear failure" },
                        { key: "c", text: "Counteract negative moment at support" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "b",
                    explanation: "Shear reinforcement, usually vertical stirrups or bent-up bars, crosses the inclined tension cracks near the supports and carries the tension that concrete alone cannot. It converts a sudden diagonal shear failure into a ductile flexural one."
                }
            ]
        },
        {
            id: "cm4soil",
            name: "Soil Mechanics and Foundation",
            subject: "Soil Mechanics",
            accent: "amber",
            blurb: "13 questions drawn from the Soil Mechanics and Foundation bank.",
            questions: [
                {
                    id: "cm4q035",
                    src: "SOIL136-00027",
                    text: "The immediate settlement can be computed from the expression, based on ______",
                    options: [
                        { key: "a", text: "Pressure distribution." },
                        { key: "b", text: "Theory of plasticity" },
                        { key: "c", text: "Theory of elasticity" },
                        { key: "d", text: "Terzaghi's analysis" }
                    ],
                    answer: "c",
                    explanation: "Immediate or elastic settlement occurs as soon as the load is applied, before any water is expelled, so it is computed from elasticity theory using the soil's modulus and Poisson's ratio. Consolidation settlement, which follows, needs Terzaghi's theory instead."
                },
                {
                    id: "cm4q036",
                    src: "SOIL136-00028",
                    text: "A clay is .....if it has been subjected to a pressure in excess of its present pressure.",
                    options: [
                        { key: "a", text: "Post consolidated" },
                        { key: "b", text: "Normally consolidated" },
                        { key: "c", text: "Over consolidated" },
                        { key: "d", text: "Any of above" }
                    ],
                    answer: "c",
                    explanation: "A clay that has carried a higher effective pressure at some time in the past than it does today is over-consolidated. It behaves stiffly on reloading until that preconsolidation pressure is passed, after which it compresses along the much steeper virgin curve."
                },
                {
                    id: "cm4q037",
                    src: "SOIL136-00029",
                    text: "The direction of seepage water",
                    options: [
                        { key: "a", text: "perpendicular to the equipotential line" },
                        { key: "b", text: "parallel to the equipotential line" },
                        { key: "c", text: "perpendicular to the streamline" },
                        { key: "d", text: "Along the direction of gravity" }
                    ],
                    answer: "a",
                    explanation: "In a flow net the flow lines cross the equipotential lines at right angles, because water moves down the steepest hydraulic gradient. Seepage therefore travels perpendicular to the equipotential lines and along the flow lines."
                },
                {
                    id: "cm4q038",
                    src: "SOIL136-00030",
                    text: "Compaction depends on",
                    options: [
                        { key: "a", text: "Number of repetitions" },
                        { key: "b", text: "All" },
                        { key: "c", text: "Weight of roller" },
                        { key: "d", text: "Speed of roller" }
                    ],
                    answer: "b",
                    explanation: "Field compaction depends on all of these: the weight and type of roller, the number of passes and the speed at which it travels, along with the layer thickness and the moisture content of the soil."
                },
                {
                    id: "cm4q039",
                    src: "SOIL136-00031",
                    text: "The factor of safety for infinite slope with steady seepage is",
                    options: [
                        { key: "a", text: "More than dry slope" },
                        { key: "b", text: "Equal to dry slope" },
                        { key: "c", text: "approx. half of the dry slope" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "c",
                    explanation: "Steady seepage parallel to an infinite slope roughly halves the factor of safety compared with the same slope when dry, because buoyancy cuts the effective normal stress while the seepage force drives the soil downslope. This is why slopes so often fail during prolonged rain."
                },
                {
                    id: "cm4q040",
                    src: "SOIL136-00032",
                    text: "On wetting, cohesive soils",
                    options: [
                        { key: "a", text: "loose permeability" },
                        { key: "b", text: "gain shear strength" },
                        { key: "c", text: "loose elasticity" },
                        { key: "d", text: "decrease their shear strength" }
                    ],
                    answer: "d",
                    explanation: "Water softens the bonds between clay particles and lubricates them, so cohesion and therefore shear strength fall as the soil wets up. This loss of strength on wetting is behind many cutting and embankment failures in the monsoon."
                },
                {
                    id: "cm4q041",
                    src: "SOIL136-00033",
                    text: "What is the meaning of bulking of sand?",
                    options: [
                        { key: "a", text: "Increase in volume of sand due to moisture absorption." },
                        { key: "b", text: "Increase in weight of sand due to moisture absorption" },
                        { key: "c", text: "Increase in mass of sand due to moisture absorption" },
                        { key: "d", text: "Increase in strength of sand due to moisture absorption" }
                    ],
                    answer: "a",
                    explanation: "Bulking is the increase in the volume of loose sand caused by a film of moisture holding the grains apart by surface tension. It peaks at about 4 to 6 percent moisture and disappears when the sand is fully saturated, which matters when concrete is batched by volume."
                },
                {
                    id: "cm4q042",
                    src: "SOIL136-00034",
                    text: "Arrange the following regarding the coefficient of cohesion:",
                    options: [
                        { key: "a", text: "Dense sand &gt; Hard clay &gt; Medium clay &gt; Soft clay" },
                        { key: "b", text: "Hard clay &gt; Dense sand &gt; Medium clay &gt; Soft clay" },
                        { key: "c", text: "Medium clay &gt; Dense sand &gt; Hard clay &gt; Soft clay" }
                    ],
                    answer: "b",
                    explanation: "Cohesion is a property of clay, not of sand, so a clean dense sand has essentially none. Among clays it rises with stiffness, giving hard clay the greatest value, then medium and soft clay, with dense sand ranking below hard clay."
                },
                {
                    id: "cm4q043",
                    src: "SOIL136-00035",
                    text: "Consolidation settlement occurs due to:",
                    options: [
                        { key: "a", text: "Expulsion of air voids" },
                        { key: "b", text: "Both (a) &amp; (b)" },
                        { key: "c", text: "Expulsion of water voids" },
                        { key: "d", text: "Readjustment of soil molecules" }
                    ],
                    answer: "c",
                    explanation: "Consolidation is the slow squeezing out of pore water from a saturated fine-grained soil, and the soil compresses as the water leaves. Expelling air is compaction, which is immediate and mechanical rather than time dependent."
                },
                {
                    id: "cm4q044",
                    src: "SOIL136-00036",
                    text: "How will the water table affect the effective stress if it rises above GL?",
                    options: [
                        { key: "a", text: "effective stress increases" },
                        { key: "b", text: "no effect" },
                        { key: "c", text: "effective stress may increase or decrease" },
                        { key: "d", text: "effective stress decreases" }
                    ],
                    answer: "d",
                    explanation: "Raising the water table above ground level adds the same weight of water to both the total stress and the pore pressure, so the effective stress in the soil below stays unchanged. Raising it within the soil, however, buoys the grains and does reduce the effective stress."
                },
                {
                    id: "cm4q045",
                    src: "SOIL136-00037",
                    text: "What is the effect on the effective stress within a soil mass if the groundwater table rises from a deep position up to the ground level?",
                    options: [
                        { key: "a", text: "Decreases" },
                        { key: "b", text: "Increases" },
                        { key: "c", text: "Remains constant" },
                        { key: "d", text: "Can not be said exactly" }
                    ],
                    answer: "a",
                    explanation: "Effective stress is the ratio of force at the contact of particles of soil to the total area. It cannot be obtained practically but we can calculate the effective stress by measuring total stress and pore water pressure as: $$\\begin{aligned} \\text{Total stress } (\\sigma) &= \\text{effective stress } (\\sigma') + \\text{pore water pressure } (u) \\\\ \\text{Effective stress } (\\sigma') &= \\text{Total stress } (\\sigma) - \\text{pore water pressure } (u) \\end{aligned}$$ If we increase the ground water table then value of pore water pressure increases and effective stress decreases.If we lowering the groundwater table below ground then the value of pore water pressure decreases and effective stress increases. Verified."
                },
                {
                    id: "cm4q046",
                    src: "SOIL136-00038",
                    text: "The Oedometer is used for.",
                    options: [
                        { key: "a", text: "Compaction" },
                        { key: "b", text: "Consolidation" },
                        { key: "c", text: "Permeability" },
                        { key: "d", text: "Void Ratio" }
                    ],
                    answer: "b",
                    explanation: "The oedometer, or consolidation test apparatus, confines a soil sample laterally in a ring and loads it in stages while the compression is recorded against time. From it come the compression index, the coefficient of consolidation and the preconsolidation pressure."
                },
                {
                    id: "cm4q047",
                    src: "SOIL136-00039",
                    text: "C_m is also called",
                    options: [
                        { key: "a", text: "Cohesion value of soil" },
                        { key: "b", text: "Applied shear stress" },
                        { key: "c", text: "Shear strength of soil" },
                        { key: "d", text: "Direct stress on soil" }
                    ],
                    answer: "c",
                    explanation: "Cm denotes the mobilised cohesion, the part of the soil's cohesive strength actually called on at the factor of safety being used. It is the cohesion divided by the factor of safety in a slope stability analysis."
                }
            ]
        },
        {
            id: "cm4watr",
            name: "Basic Water Resources Engineering",
            subject: "Water Resources",
            accent: "emerald",
            blurb: "12 questions drawn from the Basic Water Resources Engineering bank.",
            questions: [
                {
                    id: "cm4q048",
                    src: "WATE701-00025",
                    text: "Piezometer is used to measure",
                    options: [
                        { key: "a", text: "low pressure" },
                        { key: "b", text: "medium pressure" },
                        { key: "c", text: "high pressure" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "a",
                    explanation: "A piezometer is simply a vertical tube open to the atmosphere in which the liquid rises to its pressure head, so it can only measure small pressures before the tube becomes impractically long. It also cannot measure negative pressure or gas pressure."
                },
                {
                    id: "cm4q049",
                    src: "WATE701-00026",
                    text: "Which of the following is used to measure very high pressure?",
                    options: [
                        { key: "a", text: "Bourdon gauge" },
                        { key: "b", text: "Piezometer" },
                        { key: "c", text: "Manometer" },
                        { key: "d", text: "Differential manometer" }
                    ],
                    answer: "a",
                    explanation: "The Bourdon gauge measures very high pressures, because the coiled elastic tube can be made thick enough to take them and it converts the movement directly to a dial reading. Piezometers and manometers are limited by the height of liquid column they would need."
                },
                {
                    id: "cm4q050",
                    src: "WATE701-00027",
                    text: "The pressure at a point 4m below the free surface of water is",
                    options: [
                        { key: "a", text: "4 kPa" },
                        { key: "b", text: "40 kPa" },
                        { key: "c", text: "400 kPa" },
                        { key: "d", text: "4000 kPa" }
                    ],
                    answer: "b",
                    explanation: "Pressure below a free surface is p equal to rho g h, that is 1000 times 9.81 times 4, which is 39,240 N per square metre, or about 40 kPa. Note that this is the gauge pressure; the absolute value would add atmospheric pressure on top."
                },
                {
                    id: "cm4q051",
                    src: "WATE701-00028",
                    text: "The pressure at a point in a fluid is 50 kPa. If the fluid has specific weight of 10 kN/m3, the piezometric head is",
                    options: [
                        { key: "a", text: "50 m" },
                        { key: "b", text: "500 m" },
                        { key: "c", text: "5 m" },
                        { key: "d", text: "5000 m" }
                    ],
                    answer: "c",
                    explanation: "Piezometric head is the pressure divided by the specific weight, so 50 divided by 10 gives 5 m. In other words a column of this fluid 5 m high produces the stated pressure at its base."
                },
                {
                    id: "cm4q052",
                    src: "WATE701-00029",
                    text: "The pressure head corresponding to pressure intensity of 10 kPa is",
                    options: [
                        { key: "a", text: "10 m" },
                        { key: "b", text: "100 m" },
                        { key: "c", text: "1000 m" },
                        { key: "d", text: "1 m" }
                    ],
                    answer: "d",
                    explanation: "Pressure head is p over gamma, so for water 10 kPa divided by 9.81 kN per cubic metre gives about 1.02 m, which rounds to 1 m. A convenient rule follows: roughly 10 kPa per metre of water."
                },
                {
                    id: "cm4q053",
                    src: "WATE701-00030",
                    text: "The pressure intensity at a point in a fluid is 20 kPa. If the specific weight of fluid is 5 kN/m3, the piezometric head is",
                    options: [
                        { key: "a", text: "4 m" },
                        { key: "b", text: "20 m" },
                        { key: "c", text: "100 m" },
                        { key: "d", text: "400 m" }
                    ],
                    answer: "a",
                    explanation: "Dividing the pressure by the specific weight gives the head, so 20 divided by 5 is 4 m. The lighter the fluid, the taller the column needed to produce the same pressure."
                },
                {
                    id: "cm4q054",
                    src: "WATE701-00031",
                    text: "The velocity potential function exists for",
                    options: [
                        { key: "a", text: "irrotational flow only" },
                        { key: "b", text: "rotational flow only" },
                        { key: "c", text: "both rotational and irrotational flow" },
                        { key: "d", text: "none of the above" }
                    ],
                    answer: "a",
                    explanation: "A velocity potential can only be defined when the flow is irrotational, since its existence requires the vorticity to vanish. Where it does exist, lines of constant potential cross the streamlines at right angles."
                },
                {
                    id: "cm4q055",
                    src: "WATE701-00032",
                    text: "The stream function exists for",
                    options: [
                        { key: "a", text: "irrotational flow only" },
                        { key: "b", text: "rotational flow only" },
                        { key: "c", text: "both rotational and irrotational flow" },
                        { key: "d", text: "none of the above" }
                    ],
                    answer: "c",
                    explanation: "The stream function follows from continuity alone, so it exists for any two-dimensional incompressible flow, rotational or not. The velocity potential is the more restrictive of the two and needs irrotational flow."
                },
                {
                    id: "cm4q056",
                    src: "WATE701-00033",
                    text: "Which of the following conditions can the Bernoulli equation not be used?",
                    options: [
                        { key: "a", text: "Incompressible flow" },
                        { key: "b", text: "Steady flow" },
                        { key: "c", text: "Laminar flow" },
                        { key: "d", text: "Viscous flow" }
                    ],
                    answer: "d",
                    explanation: "Bernoulli's equation is derived by assuming no energy is lost, so it cannot be applied to viscous flow where friction dissipates energy, unless a head-loss term is added. Steady, incompressible and even laminar flow are all acceptable provided losses are accounted for."
                },
                {
                    id: "cm4q057",
                    src: "WATE701-00034",
                    text: "Prandl mixing length is",
                    options: [
                        { key: "a", text: "zero at the pipe wall" },
                        { key: "b", text: "a universal constant" },
                        { key: "c", text: "independent of shear stress" },
                        { key: "d", text: "independent of radial distance from pipe axis" }
                    ],
                    answer: "a",
                    explanation: "Prandtl's mixing length is the distance a fluid lump travels before losing its identity, and it is taken as proportional to the distance from the wall, so it falls to zero at the wall itself, where turbulence is suppressed by viscosity."
                },
                {
                    id: "cm4q058",
                    src: "WATE701-00035",
                    text: "A pitot tube is used to measure",
                    options: [
                        { key: "a", text: "pressure" },
                        { key: "b", text: "difference in pressure" },
                        { key: "c", text: "velocity of flow" },
                        { key: "d", text: "none of these." }
                    ],
                    answer: "c",
                    explanation: "A pitot tube faces the flow so that fluid is brought to rest at its mouth. The difference between the stagnation pressure it registers and the static pressure gives the velocity head, from which the local velocity follows."
                },
                {
                    id: "cm4q059",
                    src: "WATE701-00036",
                    text: "Two identical pipes of length L, diameter D and friction f, are connected in parallel between two points. The length of a single pipe of diameter D and the same friction f, equivalent to the above pair is",
                    options: [
                        { key: "a", text: "2L" },
                        { key: "b", text: "L/2" },
                        { key: "c", text: "L/4" },
                        { key: "d", text: "4L" }
                    ],
                    answer: "c",
                    explanation: "Two identical pipes in parallel each carry half the discharge, and since head loss varies as the square of the discharge, the same loss is produced by a single pipe only one quarter as long. The equivalent length is therefore L over 4."
                }
            ]
        },
        {
            id: "cm4hydr",
            name: "Hydropower",
            subject: "Hydropower",
            accent: "cyan",
            blurb: "9 questions drawn from the Hydropower bank.",
            questions: [
                {
                    id: "cm4q060",
                    src: "HYDR626-00019",
                    text: "Gravity dam is most suitable when the foundation is",
                    options: [
                        { key: "a", text: "weak" },
                        { key: "b", text: "with heavy overburden" },
                        { key: "c", text: "rocky but cracked" },
                        { key: "d", text: "strong" }
                    ],
                    answer: "d",
                    explanation: "A gravity dam resists water load by its own weight, so it concentrates very large vertical and shear forces on a narrow base and demands sound, strong rock. Weak, cracked or heavily overburdened foundations call for an earth or rockfill dam instead."
                },
                {
                    id: "cm4q061",
                    src: "HYDR626-00020",
                    text: "What is the importance of providing Core in earthen embankment?",
                    options: [
                        { key: "a", text: "to control seepage" },
                        { key: "b", text: "to increase stability" },
                        { key: "c", text: "for aesthetic purposes" },
                        { key: "d", text: "to enhance vegetation" }
                    ],
                    answer: "a",
                    explanation: "The core is a zone of low permeability clay in the middle of the embankment that intercepts seepage and keeps the phreatic line well inside the downstream shell. That protects the downstream slope from saturation and piping."
                },
                {
                    id: "cm4q062",
                    src: "HYDR626-00021",
                    text: "Middle 1/3 rule is used in",
                    options: [
                        { key: "a", text: "Tension" },
                        { key: "b", text: "compression" },
                        { key: "c", text: "sliding" },
                        { key: "d", text: "shear" }
                    ],
                    answer: "b",
                    explanation: "The middle third rule keeps the resultant thrust within the middle third of the base so that no tension develops anywhere on the section. Masonry and concrete are weak in tension, so the rule is really a limit on compression-only behaviour."
                },
                {
                    id: "cm4q063",
                    src: "HYDR626-00022",
                    text: "In modern day, which type of gates are mostly used in hydraulic structures?",
                    options: [
                        { key: "a", text: "Sliding Gate" },
                        { key: "b", text: "Radial Gate" },
                        { key: "c", text: "Roller Gate" },
                        { key: "d", text: "Flap Gate" }
                    ],
                    answer: "c",
                    explanation: "A Fixed Wheel Gate (or roller gate) is a heavy-duty vertical lift gate used for water control in dams, irrigation, and power plants. These welded steel gates use wheels running on fixed tracks to reduce friction, allowing them to close via gravity, even under high water loads. They provide efficient operation for large openings."
                },
                {
                    id: "cm4q064",
                    src: "HYDR626-00023",
                    text: "Energy dissipator provided if jump height is more than tail water depth.",
                    options: [
                        { key: "a", text: "Roller bucket" },
                        { key: "b", text: "Ski jump" },
                        { key: "c", text: "Sloping apron" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "When the jump height exceeds the tail water depth the jump would sweep downstream, so a special dissipator is needed. Roller buckets, ski jump buckets and sloping aprons are all used for this, the choice depending on head, discharge and the strength of the river bed."
                },
                {
                    id: "cm4q065",
                    src: "HYDR626-00024",
                    text: "Sloughing is the process of",
                    options: [
                        { key: "a", text: "progressive removal of soil from the D/s face" },
                        { key: "b", text: "progressive erosion" },
                        { key: "c", text: "subsequent removal of soil grains from within the dam" },
                        { key: "d", text: "uncontrolled seepage through the dam body" }
                    ],
                    answer: "a",
                    explanation: "Sloughing is the progressive slipping away of saturated soil from the downstream face of an embankment. Seepage emerging on that face softens it, a small slip exposes fresh wet soil, and the process repeats until the section becomes dangerously thin."
                },
                {
                    id: "cm4q066",
                    src: "HYDR626-00025",
                    text: "What is the recommended value of the shear friction factor against sliding?",
                    options: [
                        { key: "a", text: "More than unity" },
                        { key: "b", text: "More than 3 to 5" },
                        { key: "c", text: "Less than unity" },
                        { key: "d", text: "Less than 3" }
                    ],
                    answer: "b",
                    explanation: "The shear friction factor, which combines the frictional resistance with the shear strength at the base, is normally required to exceed about 3 to 5. That is considerably more than the factor of unity that would only just prevent sliding."
                },
                {
                    id: "cm4q067",
                    src: "HYDR626-00026",
                    text: "What is dead storage of storage reservoir?",
                    options: [
                        { key: "a", text: "Level between bed level &amp; full reservoir level" },
                        { key: "b", text: "level between bed level and max water level" },
                        { key: "c", text: "level between bed level and minimum pool level" },
                        { key: "d", text: "level between minimum pool level and full reservoir level" }
                    ],
                    answer: "c",
                    explanation: "Dead storage is the volume between the bed and the minimum pool or sill level. It is never drawn on for supply and is set aside to take the sediment that accumulates over the design life, so it fixes the useful life of the reservoir."
                },
                {
                    id: "cm4q068",
                    src: "HYDR626-00027",
                    text: "The bottom portion of a concrete or a masonry gravity dam is usually stepped in order to ______",
                    options: [
                        { key: "a", text: "increase the overturning resistance of the dam" },
                        { key: "b", text: "increase the shear strength" },
                        { key: "c", text: "decrease the shear strength" },
                        { key: "d", text: "increase the frictional resistance" }
                    ],
                    answer: "d",
                    explanation: "Stepping the base of a gravity dam gives the concrete a mechanical key into the rock, so sliding along the contact has to shear through the steps instead of simply slipping along a plane. That raises the frictional and shear resistance at the base."
                }
            ]
        },
        {
            id: "cm4irri",
            name: "Irrigation and Drainage",
            subject: "Irrigation",
            accent: "emerald",
            blurb: "11 questions drawn from the Irrigation and Drainage bank.",
            questions: [
                {
                    id: "cm4q069",
                    src: "IRRI951-00024",
                    text: "Design canal discharge is based on?",
                    options: [
                        { key: "a", text: "Maximum irrigation water requirement" },
                        { key: "b", text: "Maximum Q of river" },
                        { key: "c", text: "Max crop water requirement" },
                        { key: "d", text: "Empirical relationship" }
                    ],
                    answer: "a",
                    explanation: "A canal is sized for the peak of the irrigation water requirement, the month in which the crops on the command demand most water after allowing for effective rainfall. Sizing on an average would leave the crop short exactly when it is most vulnerable."
                },
                {
                    id: "cm4q070",
                    src: "IRRI951-00025",
                    text: "Which canal is not considered to be used for irrigation?",
                    options: [
                        { key: "a", text: "main canal" },
                        { key: "b", text: "watercourse" },
                        { key: "c", text: "major distributary" },
                        { key: "d", text: "minor distributary" }
                    ],
                    answer: "b",
                    explanation: "The watercourse is the small channel that takes water from the outlet across the farmer's fields, and it is built and maintained by the cultivators rather than the irrigation department. Main canals, distributaries and minors form the department's irrigation network."
                },
                {
                    id: "cm4q071",
                    src: "IRRI951-00026",
                    text: "The capacity of irrigation canal is determined by",
                    options: [
                        { key: "a", text: "Kor water depth (Rabi)" },
                        { key: "b", text: "Average irrigation depth (Rabi)" },
                        { key: "c", text: "Kor water depth (Kharif)" },
                        { key: "d", text: "Average irrigation depth (Kharif)" }
                    ],
                    answer: "c",
                    explanation: "Canal capacity is fixed by the kor demand, the peak water depth required during the first watering after sowing, for the kharif season when the requirement is greatest. That single peak governs the section even though the average demand is far smaller."
                },
                {
                    id: "cm4q072",
                    src: "IRRI951-00027",
                    text: "What is the problem in Nepal for artificial channels?",
                    options: [
                        { key: "a", text: "Formation of Depressions" },
                        { key: "b", text: "Untimely Rains" },
                        { key: "c", text: "Improper Usage of Channels" },
                        { key: "d", text: "Formation of Alluvial Soil" }
                    ],
                    answer: "d",
                    explanation: "Nepal's rivers carry very heavy sediment loads out of the young Himalaya, so artificial channels in the alluvial plains silt up quickly and their beds and alignments keep changing. Sediment exclusion and regular desilting therefore dominate canal operation."
                },
                {
                    id: "cm4q073",
                    src: "IRRI951-00028",
                    text: "Water in canal is base on",
                    options: [
                        { key: "a", text: "Gross irrigation requirement" },
                        { key: "b", text: "Crop water requirement" },
                        { key: "c", text: "Net irrigation requirement" },
                        { key: "d", text: "transpiration" }
                    ],
                    answer: "a",
                    explanation: "Canal supply must cover the gross irrigation requirement, which is the net requirement of the crop divided by the overall efficiency, so that conveyance, distribution and field application losses are all included on top of what the crop actually uses."
                },
                {
                    id: "cm4q074",
                    src: "IRRI951-00029",
                    text: "Which of the following conditions is NOT applicable to a true regime?",
                    options: [
                        { key: "a", text: "Silk grade is constant" },
                        { key: "b", text: "Channel can be scoured more easily than it can be deposited" },
                        { key: "c", text: "Silk charge is constant" },
                        { key: "d", text: "Discharge is constant" }
                    ],
                    answer: "b",
                    explanation: "A channel in true regime neither scours nor silts: the sediment leaving equals the sediment arriving. Saying that the channel can be scoured more easily than silted therefore contradicts the definition, while a constant discharge, silt grade and silt charge are all conditions for it."
                },
                {
                    id: "cm4q075",
                    src: "IRRI951-00030",
                    text: "The structure provided to discharge extra water from canal is",
                    options: [
                        { key: "a", text: "canal regulator" },
                        { key: "b", text: "canal fall" },
                        { key: "c", text: "canal escape" },
                        { key: "d", text: "canal outlet" }
                    ],
                    answer: "c",
                    explanation: "A canal escape is a safety outlet that lets surplus water out of the canal into a natural drain, protecting the banks when the demand suddenly drops or the head regulator is closed. Regulators control the flow, falls handle a change in bed level and outlets serve individual holdings."
                },
                {
                    id: "cm4q076",
                    src: "IRRI951-00031",
                    text: "Which hydraulic structure allows drainage to mix with the canal?",
                    options: [
                        { key: "a", text: "canal outlet" },
                        { key: "b", text: "modules" },
                        { key: "c", text: "canal inlet" },
                        { key: "d", text: "none of the above" }
                    ],
                    answer: "c",
                    explanation: "The structure allows the drainage water to enter the canal and get mixed with the canal water. It helps in augmenting canal supplies. It is adopted when high flood drainage discharge is small."
                },
                {
                    id: "cm4q077",
                    src: "IRRI951-00032",
                    text: "What are the sediments that are rolling, sliding and bouncing called?",
                    options: [
                        { key: "a", text: "Bed load" },
                        { key: "b", text: "Suspended load" },
                        { key: "c", text: "Dissolved load" },
                        { key: "d", text: "Contact load" }
                    ],
                    answer: "a",
                    explanation: "Bed load is the coarser fraction that moves in more or less continuous contact with the bed by rolling, sliding and bouncing, that is saltation. Finer material carried up in the body of the flow is suspended load, and what is chemically carried is dissolved load."
                },
                {
                    id: "cm4q078",
                    src: "IRRI951-00033",
                    text: "If B is the formation width and depth y with a slope of s:1 then what is the area of cross section?",
                    options: [
                        { key: "a", text: "Bd + s2d" },
                        { key: "b", text: "Bd + sd2" },
                        { key: "c", text: "Bd + s2d2" },
                        { key: "d", text: "Bd + sd" }
                    ],
                    answer: "b",
                    explanation: "For a trapezoidal section of bed width B, depth d and side slope s horizontal to 1 vertical, the area is the rectangle plus the two triangles, that is Bd plus s d squared. The wetted perimeter is B plus 2d times the root of (1 plus s squared)."
                },
                {
                    id: "cm4q079",
                    src: "IRRI951-00034",
                    text: "If an irrigation channel has a side slope of 1:5, width B, depth y and length L then total area of side slope is...",
                    options: [
                        { key: "a", text: "1.5°BV(1+5°)" },
                        { key: "b", text: "1.5°V(1+5°)" }
                    ],
                    answer: "b",
                    explanation: "Each sloping side has a length equal to the depth times the root of (1 plus s squared), so for a side slope of 1 in 5 the slant length is y times the root of 26. Multiplying by the length of the channel and by two gives the total area of both side slopes for lining."
                }
            ]
        },
        {
            id: "cm4tran",
            name: "Transportation",
            subject: "Transportation",
            accent: "rose",
            blurb: "11 questions drawn from the Transportation bank.",
            questions: [
                {
                    id: "cm4q080",
                    src: "TRAN808-00023",
                    text: "Which of the following is used for speed regulation?",
                    options: [
                        { key: "a", text: "98th percentile cumulative frequency" },
                        { key: "b", text: "75th percentile cumulative frequency" },
                        { key: "c", text: "50th percentile cumulative frequency" },
                        { key: "d", text: "85th percentile cumulative frequency" }
                    ],
                    answer: "d",
                    explanation: "Speed limits are set from the 85th percentile speed, the value that 85 percent of drivers do not exceed. It represents the speed that reasonable drivers find safe and comfortable, so a limit based on it is widely obeyed; the 98th percentile is used for geometric design."
                },
                {
                    id: "cm4q081",
                    src: "TRAN808-00024",
                    text: "The minimum radius of curvature for hair pin bend in hill roads is",
                    options: [
                        { key: "a", text: "20 m" },
                        { key: "b", text: "60 m" },
                        { key: "c", text: "15 m" },
                        { key: "d", text: "10 m" }
                    ],
                    answer: "a",
                    explanation: "A hairpin bend on a hill road is set out to a minimum radius of about 20 m at the centre line, with the roadway widened through the bend. A tighter curve would be impossible for long vehicles to negotiate."
                },
                {
                    id: "cm4q082",
                    src: "TRAN808-00025",
                    text: "If the coefficient of friction on the road surface is 0.15 and a maximum super-elevation 1 in 15 is provided, the maximum speed of the vehicles on a curve of 100 metre radius, is",
                    options: [
                        { key: "a", text: "32.44 km/hour" },
                        { key: "b", text: "52.44 km/hour" },
                        { key: "c", text: "42.44 kg/hour" },
                        { key: "d", text: "62.44 km/hour" }
                    ],
                    answer: "b",
                    explanation: "Using v equal to the root of 127 R times (e plus f), with e of 1 in 15, that is 0.0667, and f of 0.15, the sum is 0.2167. Then 127 times 100 times 0.2167 is 2752, whose square root is about 52.4 km per hour."
                },
                {
                    id: "cm4q083",
                    src: "TRAN808-00026",
                    text: "ROW for feeder road",
                    options: [
                        { key: "a", text: "50m" },
                        { key: "b", text: "20m" },
                        { key: "c", text: "30m" },
                        { key: "d", text: "45m" }
                    ],
                    answer: "c",
                    explanation: "Most design standards (for example, the Nepal Road Standard and national feeder-road design manuals) specify a total ROW of 30 m for feeder roads."
                },
                {
                    id: "cm4q084",
                    src: "TRAN808-00027",
                    text: "The maximum vertical clearance in hill road for overhanging cliff is",
                    options: [
                        { key: "a", text: "3 m" },
                        { key: "b", text: "4 m" },
                        { key: "c", text: "6 m" },
                        { key: "d", text: "5 m" }
                    ],
                    answer: "d",
                    explanation: "Hill roads keep a vertical clearance of about 5 m under an overhanging cliff, so that high loaded trucks and buses can pass beneath safely, with an allowance for the road surface being raised later."
                },
                {
                    id: "cm4q085",
                    src: "TRAN808-00028",
                    text: "Calculate Round about radius for f = 0.36, e=0 and v=35kmph.",
                    options: [
                        { key: "a", text: "27m" },
                        { key: "b", text: "16m" },
                        { key: "c", text: "36m" },
                        { key: "d", text: "49m" }
                    ],
                    answer: "a",
                    explanation: "With no superelevation the radius follows from R equal to v squared over 127 f, that is 35 squared divided by (127 times 0.36). The numerator is 1225 and the denominator 45.7, giving about 27 m."
                },
                {
                    id: "cm4q086",
                    src: "TRAN808-00029",
                    text: "What is the brake reaction time of a normal driver?",
                    options: [
                        { key: "a", text: "1.5 sec" },
                        { key: "b", text: "2.5 sec" },
                        { key: "c", text: "3 sec" },
                        { key: "d", text: "4 sec" }
                    ],
                    answer: "b",
                    explanation: "Highway design assumes a total brake reaction time of 2.5 seconds, which covers perception, intellection, emotion and volition, the PIEV process. At 50 km per hour the vehicle travels almost 35 m in that time before the brakes even begin to act."
                },
                {
                    id: "cm4q087",
                    src: "TRAN808-00030",
                    text: "If the length of a transition curve to be introduced between a straight and a circular curve of radius 500 m is 90 m, the maximum perpendicular offset for the transition curve, is",
                    options: [
                        { key: "a", text: "0.70 m" },
                        { key: "b", text: "1.70 m" },
                        { key: "c", text: "2.70 m" },
                        { key: "d", text: "3.70 m" }
                    ],
                    answer: "c",
                    explanation: "The maximum perpendicular offset occurs at the junction of the transition curve and the circular curve, where the distance along the tangent is approximately equal to the total length of the transition curve: \\(\\(y_{\\text{max}}=\\frac{L^{3}}{6RL}=\\frac{L^{2}}{6R}\\)\\) \\(\\(y_{\\text{max}}=\\frac{90^{2}}{6\\times 500}=\\frac{8100}{3000}=2.70\\text{\\ m}\\)\\)"
                },
                {
                    id: "cm4q088",
                    src: "TRAN808-00031",
                    text: "The total value of extra widening required at a horizontal curve on a two lane hill road of radius 42 m for a design speed of 50 kmph and for vehicles with wheel base 6 m, is",
                    options: [
                        { key: "a", text: "0.500 m" },
                        { key: "b", text: "0.589 m" },
                        { key: "c", text: "0.089 m" },
                        { key: "d", text: "1.669 m" }
                    ],
                    answer: "d",
                    explanation: "Mechanical widening is n l squared over 2R, that is 2 times 36 divided by 84, which is 0.857 m. Psychological widening is V over 9.5 times the root of R, that is 50 divided by 61.6, which is 0.812 m. The total is about 1.669 m."
                },
                {
                    id: "cm4q089",
                    src: "TRAN808-00032",
                    text: "In water bound macadam roads, binding material, is",
                    options: [
                        { key: "a", text: "stone dust" },
                        { key: "b", text: "sand" },
                        { key: "c", text: "cement" },
                        { key: "d", text: "brick dust" }
                    ],
                    answer: "a",
                    explanation: "In water bound macadam the coarse aggregate is compacted first and stone dust is then brushed in and watered so that it fills the voids and binds the layer as it dries. Sand has no binding action and cement or bitumen would make it a different pavement type."
                },
                {
                    id: "cm4q090",
                    src: "TRAN808-00033",
                    text: "Which premix is used in the base course?",
                    options: [
                        { key: "a", text: "Otta seal" },
                        { key: "b", text: "Bituminous bound macadam" },
                        { key: "c", text: "Bituminous concrete" },
                        { key: "d", text: "Surface dressing" }
                    ],
                    answer: "b",
                    explanation: "Bituminous bound macadam is the premix used for base and binder courses: an open-graded, coarse mix that gives strength and drainage. Bituminous concrete is a dense-graded surfacing, while Otta seal and surface dressing are thin surface treatments."
                }
            ]
        },
        {
            id: "cm4wate",
            name: "Water Supply, Sanitation and Environment",
            subject: "Water Supply",
            accent: "blue",
            blurb: "10 questions drawn from the Water Supply, Sanitation and Environment bank.",
            questions: [
                {
                    id: "cm4q091",
                    src: "WATE813-00021",
                    text: "What type of fitting is used to connect pipes of different diameter?",
                    options: [
                        { key: "a", text: "union" },
                        { key: "b", text: "nipple" },
                        { key: "c", text: "reducer" },
                        { key: "d", text: "spigot" }
                    ],
                    answer: "c",
                    explanation: "A reducer joins pipes of different diameters and keeps the transition gradual so the extra head loss is small. A union joins pipes of the same size for easy dismantling, and a nipple is a short threaded connector."
                },
                {
                    id: "cm4q092",
                    src: "WATE813-00022",
                    text: "Which of the following is the use of Altitude valves?",
                    options: [
                        { key: "a", text: "To allows water to flows in one direction only" },
                        { key: "b", text: "To blow off or remove the sand" },
                        { key: "c", text: "Distribution system to shut off the supply whenever required" },
                        { key: "d", text: "Supplies water to elevated tanks or standpipes" }
                    ],
                    answer: "d",
                    explanation: "An altitude valve controls the flow into an elevated tank or standpipe, closing automatically when the tank reaches its set level and reopening as the level falls. It prevents overflow without needing an attendant."
                },
                {
                    id: "cm4q093",
                    src: "WATE813-00023",
                    text: "1 TCU is equivalent to",
                    options: [
                        { key: "a", text: "The color produced by 1 mg of platinum cobalt in 1L of distilled water" },
                        { key: "b", text: "The color produced by 1 g of platinum cobalt" },
                        { key: "c", text: "The color produced by 1 mg of platinum cobalt" },
                        { key: "d", text: "The color produced by 1 mg of platinum cobalt in 1mL of distilled water" }
                    ],
                    answer: "a",
                    explanation: "One true colour unit is the colour produced by 1 mg of platinum, as chloroplatinate, in one litre of distilled water, on the platinum-cobalt scale. Drinking water is normally limited to about 5 to 15 units."
                },
                {
                    id: "cm4q094",
                    src: "WATE813-00024",
                    text: "Water from reservoirs comes under the category of ______",
                    options: [
                        { key: "a", text: "Rainwater" },
                        { key: "b", text: "Surface water" },
                        { key: "c", text: "Underground water" },
                        { key: "d", text: "Seawater" }
                    ],
                    answer: "b",
                    explanation: "Reservoirs, lakes, rivers and streams are all surface water sources, exposed to the atmosphere and to the catchment they drain. They are usually turbid and bacteriologically suspect, so they need full treatment, unlike most groundwater."
                },
                {
                    id: "cm4q095",
                    src: "WATE813-00025",
                    text: "In the water-supply distribution network, the dead-end system is not favored because?",
                    options: [
                        { key: "a", text: "It is cumbersome in terms of design." },
                        { key: "b", text: "The pressure at the dead-ends becomes undesirably low in the case of additional extensions." },
                        { key: "c", text: "At the time of repairs, service connections beyond the point of repair are deprived of water." },
                        { key: "d", text: "It is difficult to maintain residual chlorine levels at the dead ends." }
                    ],
                    answer: "c",
                    explanation: "In a dead-end system every pipe is fed from one direction only, so closing a main for repair cuts off every connection downstream of the break. The gridiron and ring systems avoid this by giving each point at least two supply routes."
                },
                {
                    id: "cm4q096",
                    src: "WATE813-00026",
                    text: "If three pipes are connected in series, then",
                    options: [
                        { key: "a", text: "head loss is same for all" },
                        { key: "b", text: "friction factor is same for all" },
                        { key: "c", text: "velocity is same for all" },
                        { key: "d", text: "discharge is same for all" }
                    ],
                    answer: "d",
                    explanation: "Pipes in series carry the same discharge one after another, and the total head loss is the sum of the individual losses. In parallel it is the other way round: the head loss is common and the discharges add."
                },
                {
                    id: "cm4q097",
                    src: "WATE813-00027",
                    text: "Which of the following pipe fitting provide a deviation of 90° in the pipework system?",
                    options: [
                        { key: "a", text: "Elbow" },
                        { key: "b", text: "Tee branch" },
                        { key: "c", text: "Eccentric reducer" },
                        { key: "d", text: "Plug" }
                    ],
                    answer: "a",
                    explanation: "An elbow turns the pipeline through 90 degrees, or 45 degrees for the smaller pattern. A tee takes a branch off at right angles while the run continues straight, and a plug simply seals an opening."
                },
                {
                    id: "cm4q098",
                    src: "WATE813-00028",
                    text: "Which distribution is used in irregularly developed old city",
                    options: [
                        { key: "a", text: "Gridiron system" },
                        { key: "b", text: "Dead end system" },
                        { key: "c", text: "Ring system." },
                        { key: "d", text: "Radial system" }
                    ],
                    answer: "b",
                    explanation: "The dead-end or tree system is used in old towns that grew without a plan, because it follows whatever irregular street pattern already exists and needs the least pipe. Its drawbacks are stagnation at the ends and complete loss of supply during repairs."
                },
                {
                    id: "cm4q099",
                    src: "WATE813-00029",
                    text: "Which pipe is strong in resisting inside stress but weak when stressed from outside?",
                    options: [
                        { key: "a", text: "Cast iron" },
                        { key: "b", text: "Ductile iron" },
                        { key: "c", text: "Steel" },
                        { key: "d", text: "Concrete" }
                    ],
                    answer: "c",
                    explanation: "A steel pipe resists internal pressure well because the thin wall works in ring tension, which is what steel is best at. That same thin wall has very little stiffness against external pressure or an internal vacuum, so the pipe buckles and collapses inwards unless it is stiffened or backfilled."
                },
                {
                    id: "cm4q100",
                    src: "WATE813-00030",
                    text: "Scour valves are provided",
                    options: [
                        { key: "a", text: "At street corners to control the flow of water" },
                        { key: "b", text: "At the foot of rising main along the slope to prevent back running of water" },
                        { key: "c", text: "At every summit of rising mains" },
                        { key: "d", text: "At every depression and dead ends to drain out the waste water that may collect there" }
                    ],
                    answer: "d",
                    explanation: "Scour valves are placed at every depression and at dead ends, the points where sediment settles and water stagnates, so that the main can be flushed clean. Air valves belong at the summits, where air would otherwise collect and throttle the flow."
                }
            ]
        }
    ]
};

/* Registered lazily — js/civil.js injects this file when the set is opened. */
window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["civil-4"] = CIVIL_MODEL_4;
