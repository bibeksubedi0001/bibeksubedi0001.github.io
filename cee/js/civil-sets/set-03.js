/* ============================================================
   CIVIL MODEL SET 3 — Civil Engineering licence-style model paper
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
const CIVIL_MODEL_3 = {
    day: 33,
    kind: "model",
    badge: { top: "Model", main: "C3" },
    title: "Civil Model Set 3",
    subtitle: "Civil Engineering · 9 subjects",
    durationMinutes: 120,
    negativeMarking: 0,
    chapters: [
        {
            id: "cm3basi",
            name: "Basic Civil Engineering",
            subject: "Basic Civil",
            accent: "blue",
            blurb: "13 questions drawn from the Basic Civil Engineering bank.",
            questions: [
                {
                    id: "cm3q001",
                    src: "BASI674-00014",
                    text: "Seasoning of timber is done",
                    options: [
                        { key: "a", text: "to make it water proof" },
                        { key: "b", text: "to paint its surface" },
                        { key: "c", text: "to increase its temperature" },
                        { key: "d", text: "to remove water" }
                    ],
                    answer: "d",
                    explanation: "Seasoning dries the timber down to the moisture content it will settle at in service. Removing that water stops the shrinkage, warping and splitting that would otherwise happen after the member is fixed, and dry timber is far less prone to fungal decay and insect attack."
                },
                {
                    id: "cm3q002",
                    src: "BASI674-00015",
                    text: "The initial setting time of ordinary Portland cement is",
                    options: [
                        { key: "a", text: "30 minutes" },
                        { key: "b", text: "10 minutes" },
                        { key: "c", text: "6 hours" },
                        { key: "d", text: "10 hours" }
                    ],
                    answer: "a",
                    explanation: "Ordinary Portland cement must not begin to stiffen sooner than 30 minutes, so there is time to mix, transport, place and compact the concrete. The final setting time is limited at the other end to 600 minutes, that is 10 hours."
                },
                {
                    id: "cm3q003",
                    src: "BASI674-00016",
                    text: "The presence of sand in brick earth prevents:",
                    options: [
                        { key: "a", text: "cracking of bricks" },
                        { key: "b", text: "All" },
                        { key: "c", text: "shrinkage of bricks" },
                        { key: "d", text: "warping of bricks" }
                    ],
                    answer: "b",
                    explanation: "A. Cracking of bricks: Reduces internal tensile stresses caused by rapid moisture loss. B. Shrinkage of bricks: Reduces overall volume contraction as water evaporates from the raw brick matrix. C. Warping of bricks: Prevents non-uniform volume change across the surfaces, ensuring the brick retains its flat faces and sharp edges."
                },
                {
                    id: "cm3q004",
                    src: "BASI674-00017",
                    text: "Compressive strength of 1st class brick",
                    options: [
                        { key: "a", text: "&gt;7" },
                        { key: "b", text: "&gt;3.5" },
                        { key: "c", text: "&gt;10.5" },
                        { key: "d", text: "&lt;3.5" }
                    ],
                    answer: "c",
                    explanation: "A first-class brick has to reach a compressive strength of at least 10.5 N/mm². Second-class bricks are allowed 7 N/mm² and third class 3.5 N/mm², so strength is one of the main grading criteria along with shape, colour and water absorption."
                },
                {
                    id: "cm3q005",
                    src: "BASI674-00018",
                    text: "Vicat apparatus is used in",
                    options: [
                        { key: "a", text: "Compressive strength test" },
                        { key: "b", text: "Soundness test" },
                        { key: "c", text: "Fineness of cement" },
                        { key: "d", text: "Consistency test" }
                    ],
                    answer: "d",
                    explanation: "The Vicat apparatus measures the standard consistency of cement paste, using the 10 mm plunger to find the water content that leaves the plunger 5 to 7 mm above the bottom. The same frame, fitted with the initial and final setting needles, then gives the setting times."
                },
                {
                    id: "cm3q006",
                    src: "BASI674-00019",
                    text: "Soundness test is performed by",
                    options: [
                        { key: "a", text: "Le Chatelier's apparatus" },
                        { key: "b", text: "Turbidity meter" },
                        { key: "c", text: "Vicat's apparatus" },
                        { key: "d", text: "Briquette" }
                    ],
                    answer: "a",
                    explanation: "Soundness, the freedom from excessive expansion caused by unhydrated free lime, is measured with the Le Chatelier apparatus. The split mould is boiled and the spread of the indicator points is limited to 10 mm; the autoclave test is used where free magnesia is suspected."
                },
                {
                    id: "cm3q007",
                    src: "BASI674-00020",
                    text: "For 1st class bricks, the water absorption should not be more than",
                    options: [
                        { key: "a", text: "0.1" },
                        { key: "b", text: "0.15" },
                        { key: "c", text: "0.2" },
                        { key: "d", text: "0.3" }
                    ],
                    answer: "b",
                    explanation: "A first-class brick may absorb no more than 15 percent of its dry weight after 24 hours of immersion. Higher absorption points to under-burning and a porous structure, which lets damp through the wall and reduces frost resistance; second-class bricks are allowed up to 20 percent."
                },
                {
                    id: "cm3q008",
                    src: "BASI674-00021",
                    text: "Le-Chatelier's device is used for determining the:",
                    options: [
                        { key: "a", text: "Setting time of cement" },
                        { key: "b", text: "Tensile strength" },
                        { key: "c", text: "Soundness" },
                        { key: "d", text: "Compressive strength" }
                    ],
                    answer: "c",
                    explanation: "Le Chatelier's device tests soundness. Two indicator points on a split mould spread apart if free lime in the cement expands on hydration, and the measured spread must stay within the permitted limit or the hardened concrete would later crack and disintegrate."
                },
                {
                    id: "cm3q009",
                    src: "BASI674-00022",
                    text: "Terracotta is used in buildings for",
                    options: [
                        { key: "a", text: "Insulation" },
                        { key: "b", text: "Storage" },
                        { key: "c", text: "None" },
                        { key: "d", text: "Ornamental work" }
                    ],
                    answer: "d",
                    explanation: "Terracotta is a fine, moulded and burnt clay product used for ornamental work: cornices, brackets, string courses and decorative panels. It takes crisp moulded detail, weathers well and is much lighter than carved stone."
                },
                {
                    id: "cm3q010",
                    src: "BASI674-00023",
                    text: "______ is prepared on the basis of plinth area of the building, the rate being deducted from the cost of a similar building having similar specifications, heights, and construction in the locality.",
                    options: [
                        { key: "a", text: "Plinth Area Estimate" },
                        { key: "b", text: "Cube Rate Estimate" },
                        { key: "c", text: "Supplementary Estimate" },
                        { key: "d", text: "Maintenance Estimate" }
                    ],
                    answer: "a",
                    explanation: "The plinth area estimate is a preliminary estimate found by multiplying the plinth area of the proposed building by the plinth area rate of a recently completed building of similar specification, height and construction in the same locality."
                },
                {
                    id: "cm3q011",
                    src: "BASI674-00024",
                    text: "The number of treads in a flight is equal to ______",
                    options: [
                        { key: "a", text: "Risers in the flight" },
                        { key: "b", text: "Risers minus one" },
                        { key: "c", text: "Risers plus one" },
                        { key: "d", text: "Risers plus three" }
                    ],
                    answer: "b",
                    explanation: "Every tread has a riser above and below it, but the topmost riser lands on the floor or landing, which is not counted as a tread. A flight therefore contains one fewer tread than risers."
                },
                {
                    id: "cm3q012",
                    src: "BASI674-00025",
                    text: "Which is the weakest bond in building?",
                    options: [
                        { key: "a", text: "Flemish bond" },
                        { key: "b", text: "English bond" },
                        { key: "c", text: "Raking bond" },
                        { key: "d", text: "Header bond" }
                    ],
                    answer: "c",
                    explanation: "Raking bond is not a bond in its own right; the diagonal courses are laid inside thick walls simply to tie the middle of the wall together, so on its own it gives the least strength and the poorest transverse bond. English bond is the strongest, with Flemish and header bonds between."
                },
                {
                    id: "cm3q013",
                    src: "BASI674-00026",
                    text: "In case of cavity walls where both walls are load bearing the effective thickness is ...",
                    options: [
                        { key: "a", text: "Sum of both walls" },
                        { key: "b", text: "Thickness of stronger wall" },
                        { key: "c", text: "2/3 of sum of thickness of both walls" },
                        { key: "d", text: "Larger of b and c" }
                    ],
                    answer: "c",
                    explanation: "For a cavity wall in which both leaves carry load, the effective thickness is taken as two thirds of the sum of the two leaf thicknesses. If only one leaf is loaded, the effective thickness is that of the loaded leaf alone."
                }
            ]
        },
        {
            id: "cm3stru",
            name: "Structural Mechanics",
            subject: "Structural Mech",
            accent: "cyan",
            blurb: "11 questions drawn from the Structural Mechanics bank.",
            questions: [
                {
                    id: "cm3q014",
                    src: "STRU935-00012",
                    text: "Abrupt change in BMD if ……… is applied.",
                    options: [
                        { key: "a", text: "Couple" },
                        { key: "b", text: "Impact load" },
                        { key: "c", text: "Point load" },
                        { key: "d", text: "UDL" }
                    ],
                    answer: "a",
                    explanation: "An applied couple is carried as a step in the bending-moment diagram, because the moment just to the left and just to the right of the point differ by the magnitude of the couple. Point loads produce a step in the shear-force diagram, not in the moment diagram."
                },
                {
                    id: "cm3q015",
                    src: "STRU935-00013",
                    text: "Positive bending moment has shape of?",
                    options: [
                        { key: "a", text: "Convex downward" },
                        { key: "b", text: "Concave downward" },
                        { key: "c", text: "Linear" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "a",
                    explanation: "A positive or sagging moment makes the beam bulge downwards, so the deflected shape is convex downward and the top fibres go into compression while the bottom fibres stretch. A hogging moment reverses both."
                },
                {
                    id: "cm3q016",
                    src: "STRU935-00014",
                    text: "If a simply supported beam carries a UDL across the entire span, then the shear force",
                    options: [
                        { key: "a", text: "max at the center" },
                        { key: "b", text: "does not have a max value" },
                        { key: "c", text: "changes linearly" },
                        { key: "d", text: "is zero at supports" }
                    ],
                    answer: "c",
                    explanation: "Under a uniformly distributed load the shear force is the reaction minus wx, so it falls linearly from plus wL/2 at one support to minus wL/2 at the other and passes through zero at mid-span, which is exactly where the bending moment peaks."
                },
                {
                    id: "cm3q017",
                    src: "STRU935-00015",
                    text: "If a beam is subjected to a constant bending moment along its length, then the shear force will",
                    options: [
                        { key: "a", text: "also have a constant value everywhere along its length" },
                        { key: "b", text: "be maximum at the centre and zero at the ends" },
                        { key: "c", text: "zero at the centre and maximum at the ends" },
                        { key: "d", text: "be zero at all sections along the beam" }
                    ],
                    answer: "d",
                    explanation: "Shear force is the rate of change of bending moment, V equal to dM/dx. If the moment is the same at every section its derivative vanishes, so the shear force is zero all along the beam and the member is in pure bending."
                },
                {
                    id: "cm3q018",
                    src: "STRU935-00016",
                    text: "A moment M is acting at free end of a cantilever beam. What will be the maximum moment developed in the beam?",
                    options: [
                        { key: "a", text: "M" },
                        { key: "b", text: "M/2" },
                        { key: "c", text: "M/4" },
                        { key: "d", text: "2M" }
                    ],
                    answer: "a",
                    explanation: "A couple applied at the free end of a cantilever is carried unchanged to the fixed end, because there is no transverse load to alter it. The bending moment is therefore constant at M over the whole length and the shear force is zero throughout."
                },
                {
                    id: "cm3q019",
                    src: "STRU935-00017",
                    text: "A rod of area 1000 mm² has axial pull of 20 kN. Then what is the shear stress at 30° inclined to horizontal axis?",
                    options: [
                        { key: "a", text: "2 N/mm²" },
                        { key: "b", text: "0.866 N/mm²" },
                        { key: "c", text: "0.667 N/mm²" },
                        { key: "d", text: "1 N/mm²" }
                    ],
                    answer: "b",
                    explanation: "The direct stress is P/A, that is 20000/1000 equal to 20 N/mm². On a plane inclined at theta the shear stress is (sigma/2) sin 2 theta, so at 30 degrees it is 10 times sin 60, which is 8.66 N/mm². The published key lists the same figure with the decimal point shifted, 0.866."
                },
                {
                    id: "cm3q020",
                    src: "STRU935-00018",
                    text: "Support reaction in simply supported beam of span 1m is 1 KNm clockwise couple acts at its midspan.",
                    options: [
                        { key: "a", text: "2 kN upward, 1 kN downward" },
                        { key: "b", text: "2 kN upward, 2 kN downward" },
                        { key: "c", text: "1 kN downward, 1 kN upward" },
                        { key: "d", text: "2 kN downward, 2 kN upward" }
                    ],
                    answer: "c",
                    explanation: "Take moments about A: the clockwise couple of 1 kNm must be balanced by the couple formed by the two reactions over the 1 m span, so each reaction is 1 kN. They act in opposite senses, one downward at A and one upward at B, and their vertical sum is zero because no load is applied."
                },
                {
                    id: "cm3q021",
                    src: "STRU935-00019",
                    text: "In case of propped cantilever beam, the internal hinge is located at what distance from propped end",
                    options: [
                        { key: "a", text: "0L" },
                        { key: "b", text: "0.25L" },
                        { key: "c", text: "0.5L" },
                        { key: "d", text: "0.414L" }
                    ],
                    answer: "d",
                    explanation: "A propped cantilever hogs over the fixed end and sags in the span, so the bending moment changes sign somewhere between them. That point of contraflexure carries no moment and therefore behaves as an internal hinge; the source keys its distance from the propped end as 0.414L."
                },
                {
                    id: "cm3q022",
                    src: "STRU935-00020",
                    text: "The deflection of simply supported beam having point load W acting at its center is",
                    options: [
                        { key: "a", text: "(WL³)/48EI" },
                        { key: "b", text: "(WL³)/3EI" },
                        { key: "c", text: "(WL³)/12EI" },
                        { key: "d", text: "(5WL³)/384EI" }
                    ],
                    answer: "a",
                    explanation: "For a simply supported beam with a central point load the maximum deflection is at mid-span and equals WL cubed over 48EI. Compare a cantilever with an end load, WL cubed over 3EI, which is sixteen times more flexible for the same span."
                },
                {
                    id: "cm3q023",
                    src: "STRU935-00021",
                    text: "If σx and τxy are normal and shear stress resp. Find the minor principal stress",
                    options: [
                        { key: "a", text: "σx/2 + √(σx²/4 + τxy²)" },
                        { key: "b", text: "σx/2 - √(σx²/4 + τxy²)" },
                        { key: "c", text: "σx/2 - √(σx²/4 - τxy²)" },
                        { key: "d", text: "σx/2 + √(σx²/4 - τxy²)" }
                    ],
                    answer: "b",
                    explanation: "The principal stresses are sigma x over 2, plus or minus the root of (sigma x squared over 4 plus tau xy squared). Taking the minus sign gives the minor principal stress. The term under the root is always positive, which is why the two principal stresses straddle the average normal stress."
                },
                {
                    id: "cm3q024",
                    src: "STRU935-00022",
                    text: "Relation of E, G and µ is",
                    options: [
                        { key: "a", text: "µ = E/G - 1" },
                        { key: "b", text: "µ = E/G - 2" },
                        { key: "c", text: "µ = E/2G - 1" },
                        { key: "d", text: "µ = E/2G - 0.5" }
                    ],
                    answer: "c",
                    explanation: "The elastic constants are linked by E equal to 2G times (1 plus mu). Rearranging gives mu equal to E divided by 2G, minus 1. The companion relation with bulk modulus is E equal to 3K times (1 minus 2 mu)."
                }
            ]
        },
        {
            id: "cm3desi",
            name: "Design of Structures",
            subject: "Design of Str",
            accent: "slate",
            blurb: "10 questions drawn from the Design of Structures bank.",
            questions: [
                {
                    id: "cm3q025",
                    src: "DESI787-00011",
                    text: "Moisture condition of aggregate used in concrete is ...",
                    options: [
                        { key: "a", text: "Oven dry" },
                        { key: "b", text: "Air dry" },
                        { key: "c", text: "As available from source" },
                        { key: "d", text: "Saturated surface dry" }
                    ],
                    answer: "d",
                    explanation: "Mix designs are written for aggregate in the saturated surface dry state, in which the pores are already full but no free water clings to the surface. Aggregate wetter than that adds water to the mix and drier aggregate steals it, so in both cases the free water has to be corrected."
                },
                {
                    id: "cm3q026",
                    src: "DESI787-00012",
                    text: "What nominal mix of concrete is required for roofing of RCC?",
                    options: [
                        { key: "a", text: "M20" },
                        { key: "b", text: "M10" },
                        { key: "c", text: "M15" },
                        { key: "d", text: "M30" }
                    ],
                    answer: "a",
                    explanation: "M20 is the usual nominal mix, 1:1.5:3, for reinforced slabs and beams. IS 456 sets M20 as the minimum grade for reinforced concrete in mild exposure, and leaner mixes such as M10 and M15 are limited to levelling courses and mass concrete."
                },
                {
                    id: "cm3q027",
                    src: "DESI787-00013",
                    text: "Cement should be stored",
                    options: [
                        { key: "a", text: "In wet condition on metal" },
                        { key: "b", text: "on ground" },
                        { key: "c", text: "on platform" },
                        { key: "d", text: "any of the above" }
                    ],
                    answer: "c",
                    explanation: "Cement bags must be stacked on a raised, dry timber platform clear of the floor and away from the walls, so that ground damp and wall damp cannot reach them. Moisture makes cement lump and set prematurely and it loses strength as it ages in store."
                },
                {
                    id: "cm3q028",
                    src: "DESI787-00014",
                    text: "Water to be used in concrete is similar to",
                    options: [
                        { key: "a", text: "Distilled" },
                        { key: "b", text: "Potable" },
                        { key: "c", text: "Sea water" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "b",
                    explanation: "Water for mixing and curing must be of potable quality: clean, free of oil, acid, alkali, organic matter and excessive salts. Distilled water is unnecessary, and sea water is unacceptable in reinforced work because its chlorides corrode the steel."
                },
                {
                    id: "cm3q029",
                    src: "DESI787-00015",
                    text: "The Length required for full transfer of bar stress to concrete is called",
                    options: [
                        { key: "a", text: "bond length" },
                        { key: "b", text: "equivalent length" },
                        { key: "c", text: "anchorage length" },
                        { key: "d", text: "development length" }
                    ],
                    answer: "d",
                    explanation: "Development length is the embedment needed for bond to transfer the full stress in a bar into the surrounding concrete, given by Ld equal to phi times sigma s over 4 tau bd. If less is available, the bar is anchored with a hook or bend instead."
                },
                {
                    id: "cm3q030",
                    src: "DESI787-00016",
                    text: "Slump test is used to measure?",
                    options: [
                        { key: "a", text: "Consistency" },
                        { key: "b", text: "Setting time" },
                        { key: "c", text: "Soundness" },
                        { key: "d", text: "Water content" }
                    ],
                    answer: "a",
                    explanation: "The slump test measures the consistency of fresh concrete, which is a direct index of its workability. It is quick and needs no laboratory, so it is the standard site check for uniformity from batch to batch."
                },
                {
                    id: "cm3q031",
                    src: "DESI787-00017",
                    text: "Slump test of concrete is a measure of its",
                    options: [
                        { key: "a", text: "consistency" },
                        { key: "b", text: "homogeneity" },
                        { key: "c", text: "mobility" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "a",
                    explanation: "Slump indicates consistency, the ease with which the mix flows and can be compacted. It says nothing about how well the ingredients are dispersed, so a badly mixed and a well mixed concrete can record the same slump."
                },
                {
                    id: "cm3q032",
                    src: "DESI787-00018",
                    text: "Which metallic element is highest in cement?",
                    options: [
                        { key: "a", text: "Aluminium" },
                        { key: "b", text: "Iron" },
                        { key: "c", text: "Calcium" },
                        { key: "d", text: "Sulphur" }
                    ],
                    answer: "c",
                    explanation: "Calcium is by far the most abundant metallic element in cement: lime, CaO, makes up roughly 60 to 65 percent of the clinker. Aluminium and iron are present in single-figure percentages, and sulphur enters only as the gypsum added to control setting."
                },
                {
                    id: "cm3q033",
                    src: "DESI787-00019",
                    text: "While compacting the concrete by a mechanical vibrator, the slump should not exceed",
                    options: [
                        { key: "a", text: "2.5 cm" },
                        { key: "b", text: "0.5 cm" },
                        { key: "c", text: "10 cm" },
                        { key: "d", text: "7.5 cm" }
                    ],
                    answer: "d",
                    explanation: "Concrete compacted by a mechanical vibrator is designed dry and stiff, with a slump not exceeding about 7.5 cm, because the vibrator supplies the energy that water would otherwise have to provide. A wetter mix under vibration simply segregates and bleeds."
                },
                {
                    id: "cm3q034",
                    src: "DESI787-00020",
                    text: "If the effective working time is 7 hours and per batch time of concrete is 3 minutes, the output of a concrete mixer of 150 liter capacity, is",
                    options: [
                        { key: "a", text: "18,900 liters" },
                        { key: "b", text: "15,900 liters" },
                        { key: "c", text: "16,900 liters" },
                        { key: "d", text: "17,900 liters" }
                    ],
                    answer: "a",
                    explanation: "Seven hours is 420 minutes, and at 3 minutes a batch that is 140 batches, or 140 times 150, which is 21,000 litres of theoretical output. Applying the customary 90 percent job efficiency for loading, waiting and cleaning gives 18,900 litres."
                }
            ]
        },
        {
            id: "cm3soil",
            name: "Soil Mechanics and Foundation",
            subject: "Soil Mechanics",
            accent: "amber",
            blurb: "13 questions drawn from the Soil Mechanics and Foundation bank.",
            questions: [
                {
                    id: "cm3q035",
                    src: "SOIL136-00014",
                    text: "Soil exists in how many states?",
                    options: [
                        { key: "a", text: "1" },
                        { key: "b", text: "3" },
                        { key: "c", text: "2" },
                        { key: "d", text: "4" }
                    ],
                    answer: "b",
                    explanation: "Soil is a three-phase system made up of solid grains, water and air. Fully dry soil and fully saturated soil are the two limiting cases in which one of the fluid phases disappears, and almost all natural soil lies between them."
                },
                {
                    id: "cm3q036",
                    src: "SOIL136-00015",
                    text: "A moist soil sample weighing 108 g has a volume of 60 cc. If water content is 25% and value of G = 2.52, the void ratio is",
                    options: [
                        { key: "a", text: "0.55" },
                        { key: "b", text: "0.65" },
                        { key: "c", text: "0.75" },
                        { key: "d", text: "0.8" }
                    ],
                    answer: "c",
                    explanation: "The dry weight is 108 divided by 1.25, which is 86.4 g, so the volume of solids is 86.4 divided by 2.52, that is 34.29 cc. The voids occupy 60 minus 34.29, which is 25.71 cc, and the void ratio is 25.71 over 34.29, giving 0.75. The key has been corrected from the printed 0.65, which does not follow from these figures."
                },
                {
                    id: "cm3q037",
                    src: "SOIL136-00016",
                    text: "Find the porosity if specific gravity is 2.6 &amp; water content is 45% for fully saturated condition of soil?",
                    options: [
                        { key: "a", text: "0.5" },
                        { key: "b", text: "0.6" },
                        { key: "c", text: "0.65" },
                        { key: "d", text: "0.55" }
                    ],
                    answer: "d",
                    explanation: "For fully saturated soil the void ratio is e equal to w times G, that is 0.45 times 2.6, which is 1.17. Porosity follows from n equal to e over (1 plus e), so n is 1.17 divided by 2.17, which is 0.54, near enough 0.55."
                },
                {
                    id: "cm3q038",
                    src: "SOIL136-00017",
                    text: "The weight of a pycnometer containing 400 g sand and water full to the top is 2150 g. The weight of pycnometer full of clean water is 1950 g. If specific gravity of the soil is 2.5, the water content is",
                    options: [
                        { key: "a", text: "0.2" },
                        { key: "b", text: "0.05" },
                        { key: "c", text: "0.1" },
                        { key: "d", text: "0.15" }
                    ],
                    answer: "a",
                    explanation: "Using the pycnometer relation, w equals the wet soil weight divided by (W3 minus W4), times (G minus 1) over G, minus 1. Here that is 400 over 200, times 1.5 over 2.5, minus 1, which is 2 times 0.6 minus 1, giving a water content of 0.2 or 20 percent."
                },
                {
                    id: "cm3q039",
                    src: "SOIL136-00018",
                    text: "What is the formula for seepage discharge in flow net?",
                    options: [
                        { key: "a", text: "q = kh Na/Nf" },
                        { key: "b", text: "q = kh Nf/Na" },
                        { key: "c", text: "q = kh" },
                        { key: "d", text: "q = k Nf/Na" }
                    ],
                    answer: "b",
                    explanation: "Seepage through a flow net is q equal to k h times Nf over Nd, where Nf is the number of flow channels and Nd the number of equipotential drops. The ratio Nf over Nd is the shape factor and depends only on the geometry, not on the head."
                },
                {
                    id: "cm3q040",
                    src: "SOIL136-00019",
                    text: "Relative compaction is defined as",
                    options: [
                        { key: "a", text: "yd, max/yd" },
                        { key: "b", text: "yd/yd, min" },
                        { key: "c", text: "yd/yd, max" },
                        { key: "d", text: "yd, min/yd" }
                    ],
                    answer: "c",
                    explanation: "Relative compaction is the dry density achieved in the field divided by the maximum dry density from the laboratory Proctor test, expressed as a percentage. It is not the same as relative density, which compares a sand's void ratio with its loosest and densest states."
                },
                {
                    id: "cm3q041",
                    src: "SOIL136-00020",
                    text: "The active earth pressure of a soil is defined as the lateral pressure exerted by soil",
                    options: [
                        { key: "a", text: "when it is at rest" },
                        { key: "b", text: "when the retaining wall has no movement relative to the back fill" },
                        { key: "c", text: "when the retaining wall moves into the soil" },
                        { key: "d", text: "when the retaining wall tends to move away from the back fill" }
                    ],
                    answer: "d",
                    explanation: "Active pressure is the minimum lateral pressure, reached when the wall yields away from the backfill just enough for the soil behind it to mobilise its full shear strength. If the wall is pushed into the soil instead, the far larger passive pressure develops, and with no movement the at-rest pressure acts."
                },
                {
                    id: "cm3q042",
                    src: "SOIL136-00021",
                    text: "Which roller is used for compacting clayey soils?",
                    options: [
                        { key: "a", text: "Sheep footed" },
                        { key: "b", text: "Vibratory" },
                        { key: "c", text: "Smooth wheeled" },
                        { key: "d", text: "Pneumatic tyred" }
                    ],
                    answer: "a",
                    explanation: "Sheepsfoot rollers carry projecting feet that punch into cohesive soil and knead it from the bottom of the layer upwards, which is what clay needs. Smooth wheeled and vibratory rollers work by pressure and vibration and suit granular soils."
                },
                {
                    id: "cm3q043",
                    src: "SOIL136-00022",
                    text: "The soil which has been acted upon by stress greater than present stress is called",
                    options: [
                        { key: "a", text: "Under consolidated" },
                        { key: "b", text: "Over consolidated" },
                        { key: "c", text: "Pre consolidated" },
                        { key: "d", text: "Normal consolidated" }
                    ],
                    answer: "b",
                    explanation: "A soil that has carried a larger effective stress in the past than it does now is over-consolidated, and it is much stiffer under reloading until that past maximum, the preconsolidation pressure, is exceeded. Erosion, past glaciation or a fallen water table can all cause it."
                },
                {
                    id: "cm3q044",
                    src: "SOIL136-00023",
                    text: "The coefficient of compressibility of soil, is the ratio of",
                    options: [
                        { key: "a", text: "Stress to strain" },
                        { key: "b", text: "Stress to settlement" },
                        { key: "c", text: "Strain to stress" },
                        { key: "d", text: "Rate of loading to that of settlement" }
                    ],
                    answer: "c",
                    explanation: "The coefficient of compressibility av is the change in void ratio per unit increase in effective stress, that is a strain-type quantity divided by stress. Its reciprocal has the dimensions of a modulus, and dividing av by (1 plus e) gives the coefficient of volume change mv."
                },
                {
                    id: "cm3q045",
                    src: "SOIL136-00024",
                    text: "Critical hydraulic gradient is formed if ...",
                    options: [
                        { key: "a", text: "Seepage is upward." },
                        { key: "b", text: "Flow is upward" },
                        { key: "c", text: "Effective stress is zero" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "The critical hydraulic gradient is reached when upward seepage cancels the effective stress. All three statements describe the same condition: the flow is upward, the seepage force equals the submerged weight and the effective stress becomes zero, which produces the quick or boiling condition."
                },
                {
                    id: "cm3q046",
                    src: "SOIL136-00025",
                    text: "Consolidation settlement is calculated for",
                    options: [
                        { key: "a", text: "clay layer with Wt at the ground surface" },
                        { key: "b", text: "sand layer and when WT is far below" },
                        { key: "c", text: "sand layer with WT below the base of footing" },
                        { key: "d", text: "none" }
                    ],
                    answer: "a",
                    explanation: "Consolidation settlement is a time-dependent squeezing of water out of a saturated clay, so it is computed for a clay layer below the water table. Sands drain almost instantly, and above the water table there is no excess pore pressure to dissipate."
                },
                {
                    id: "cm3q047",
                    src: "SOIL136-00026",
                    text: "Compaction is a process in which change in volume due to",
                    options: [
                        { key: "a", text: "Removal of water" },
                        { key: "b", text: "Removal of air" },
                        { key: "c", text: "Removal of soil particles" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "b",
                    explanation: "Compaction expels air from the voids by mechanical energy, which packs the grains closer and raises the dry density immediately. Consolidation is the different, slower process in which water is squeezed out of a saturated soil."
                }
            ]
        },
        {
            id: "cm3watr",
            name: "Basic Water Resources Engineering",
            subject: "Water Resources",
            accent: "emerald",
            blurb: "12 questions drawn from the Basic Water Resources Engineering bank.",
            questions: [
                {
                    id: "cm3q048",
                    src: "WATE701-00013",
                    text: "The dew point is above 0°C, then.",
                    options: [
                        { key: "a", text: "Frost will form." },
                        { key: "b", text: "Vapor will form." },
                        { key: "c", text: "Dew will form." },
                        { key: "d", text: "Hailstone will form." }
                    ],
                    answer: "c",
                    explanation: "The dew point is the temperature at which air becomes saturated. If it lies above 0 degrees Celsius the moisture condenses as liquid dew; only when the dew point is below freezing does the vapour deposit directly as frost."
                },
                {
                    id: "cm3q049",
                    src: "WATE701-00014",
                    text: "If the jar is placed 1m above the floor and tap with cross sectional area .1m2 at the bottom of jar is open, then water jet discharges .02m3/s water and hits floor at 1.8m distance. If the height of the jar is 1 m and fully filled, what would be the coefficient of velocity?",
                    options: [
                        { key: "a", text: "0.8" },
                        { key: "b", text: "0.85" },
                        { key: "c", text: "0.95" },
                        { key: "d", text: "0.9" }
                    ],
                    answer: "d",
                    explanation: "For a jet leaving a vertical head H and falling a height y, the coefficient of velocity is Cv equal to x divided by twice the root of H y. With x equal to 1.8 m and both H and y equal to 1 m, Cv is 1.8 divided by 2, which is 0.9."
                },
                {
                    id: "cm3q050",
                    src: "WATE701-00015",
                    text: "If the depression in a glass tube of 1.2mm diameter immersed in mercury is 8mm, then find the diameter of tube to have depression of 4mm",
                    options: [
                        { key: "a", text: "2.4mm" },
                        { key: "b", text: "1.2mm" },
                        { key: "c", text: "3.6mm" },
                        { key: "d", text: "4.8mm" }
                    ],
                    answer: "a",
                    explanation: "Capillary rise or depression varies inversely with the tube diameter, so h times d is constant. Here 8 times 1.2 equals 4 times d, which gives d equal to 2.4 mm: doubling the bore halves the depression."
                },
                {
                    id: "cm3q051",
                    src: "WATE701-00016",
                    text: "Two capillary tubes P and Q are dipped in water. The height of water level in capillary P is 2/3 to the height in Q capillary. The ratio of their diameters is",
                    options: [
                        { key: "a", text: "2:3" },
                        { key: "b", text: "3:2" },
                        { key: "c", text: "4:9" },
                        { key: "d", text: "9:4" }
                    ],
                    answer: "b",
                    explanation: "Capillary rise is inversely proportional to diameter, so h P over h Q equals d Q over d P. Since the rise in P is two thirds of that in Q, the diameter of P must be three halves that of Q, giving a ratio of 3:2."
                },
                {
                    id: "cm3q052",
                    src: "WATE701-00017",
                    text: "The pressure inside a water droplet is",
                    options: [
                        { key: "a", text: "less than atmospheric pressure" },
                        { key: "b", text: "equal to atmospheric pressure" },
                        { key: "c", text: "greater than atmospheric pressure" },
                        { key: "d", text: "equal to surface tension" }
                    ],
                    answer: "c",
                    explanation: "Surface tension pulls the curved film inwards, so the pressure inside a droplet exceeds the outside pressure by 4 sigma over d. A droplet has a single surface, unlike a bubble, which is why its excess pressure is half that of a soap bubble of the same size."
                },
                {
                    id: "cm3q053",
                    src: "WATE701-00018",
                    text: "The pressure inside a soap bubble is",
                    options: [
                        { key: "a", text: "less than atmospheric pressure" },
                        { key: "b", text: "equal to atmospheric pressure" },
                        { key: "c", text: "equal to surface tension" },
                        { key: "d", text: "greater than atmospheric pressure" }
                    ],
                    answer: "d",
                    explanation: "A soap bubble has two liquid surfaces, inner and outer, so the excess pressure inside is 8 sigma over d, again above atmospheric. That is why the smaller of two connected bubbles blows itself into the larger one."
                },
                {
                    id: "cm3q054",
                    src: "WATE701-00019",
                    text: "The pressure inside a liquid jet is",
                    options: [
                        { key: "a", text: "greater than atmospheric pressure" },
                        { key: "b", text: "less than atmospheric pressure" },
                        { key: "c", text: "equal to atmospheric pressure" },
                        { key: "d", text: "equal to surface tension" }
                    ],
                    answer: "a",
                    explanation: "The pressure inside a liquid jet is higher than the surrounding atmospheric pressure due to surface tension, which creates an inward force."
                },
                {
                    id: "cm3q055",
                    src: "WATE701-00020",
                    text: "The pressure intensity at any point in a fluid at rest is same in all directions is stated by",
                    options: [
                        { key: "a", text: "Newton's law" },
                        { key: "b", text: "Pascal's law" },
                        { key: "c", text: "Bernoulli's theorem" },
                        { key: "d", text: "Archimedes principle" }
                    ],
                    answer: "b",
                    explanation: "Pascal's law states that the pressure intensity at a point in a fluid at rest is the same in every direction. It holds only in the absence of shear, which is why it applies to any static fluid but not to a moving viscous one."
                },
                {
                    id: "cm3q056",
                    src: "WATE701-00021",
                    text: "The pressure measured with reference to absolute vacuum is called",
                    options: [
                        { key: "a", text: "gauge pressure" },
                        { key: "b", text: "negative pressure" },
                        { key: "c", text: "absolute pressure" },
                        { key: "d", text: "atmospheric pressure" }
                    ],
                    answer: "c",
                    explanation: "Absolute pressure is measured from a perfect vacuum as the zero datum, so it can never be negative. It equals the gauge reading plus the local atmospheric pressure, and thermodynamic calculations must always use it."
                },
                {
                    id: "cm3q057",
                    src: "WATE701-00022",
                    text: "The pressure measured with reference to atmospheric pressure is called",
                    options: [
                        { key: "a", text: "absolute pressure" },
                        { key: "b", text: "negative pressure" },
                        { key: "c", text: "vacuum pressure" },
                        { key: "d", text: "gauge pressure" }
                    ],
                    answer: "d",
                    explanation: "Gauge pressure is measured relative to the local atmospheric pressure, so an open gauge reads zero in still air. A negative gauge reading, below atmospheric, is called vacuum pressure."
                },
                {
                    id: "cm3q058",
                    src: "WATE701-00023",
                    text: "Manometers are used to measure",
                    options: [
                        { key: "a", text: "low pressure" },
                        { key: "b", text: "medium pressure" },
                        { key: "c", text: "high pressure" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "a",
                    explanation: "Manometers balance the unknown pressure against a column of liquid, so the tube length limits them to low pressures; measuring a few bar with mercury would already need an impractical column. They are simple, cheap and need no calibration."
                },
                {
                    id: "cm3q059",
                    src: "WATE701-00024",
                    text: "Bourdon tube is used to measure",
                    options: [
                        { key: "a", text: "low pressure" },
                        { key: "b", text: "medium pressure" },
                        { key: "c", text: "high pressure" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "c",
                    explanation: "The Bourdon gauge works by the elastic uncoiling of a curved metal tube, which can be built to withstand very high pressures and gives a direct dial reading. Being a mechanical device it is robust but needs periodic calibration."
                }
            ]
        },
        {
            id: "cm3hydr",
            name: "Hydropower",
            subject: "Hydropower",
            accent: "cyan",
            blurb: "9 questions drawn from the Hydropower bank.",
            questions: [
                {
                    id: "cm3q060",
                    src: "HYDR626-00010",
                    text: "What is a load factor?",
                    options: [
                        { key: "a", text: "ratio of maximum demand to average demand" },
                        { key: "b", text: "energy generated per unit time" },
                        { key: "c", text: "ratio of average demand to maximum demand" },
                        { key: "d", text: "none" }
                    ],
                    answer: "c",
                    explanation: "Load factor is the average demand divided by the maximum demand over the same period. It is always less than one, and a high value means the plant is used steadily rather than only during short peaks, which lowers the cost per unit generated."
                },
                {
                    id: "cm3q061",
                    src: "HYDR626-00011",
                    text: "A hydropower runs at 20MW in certain season. If peaking is done, the plant is able to at 40MW for 6 hours peaking period and 10MW for remaining off peak hours. What is the benefit for peaking if power rate is Rs.12/KWh for peak period and Rs.6/KWh for off peak hour?",
                    options: [
                        { key: "a", text: "Rs 2800000" },
                        { key: "b", text: "Rs 3600000" },
                        { key: "c", text: "Rs 3000000" },
                        { key: "d", text: "Rs 1080000" }
                    ],
                    answer: "d",
                    explanation: "Off-peak generation is 10 MW for the remaining 18 hours, that is 10,000 kW times 18 h, or 180,000 kWh, which at Rs 6 per kWh earns Rs 1,080,000, the figure keyed here. For comparison the peak period generates 40,000 kW times 6 h, or 240,000 kWh, worth Rs 2,880,000 at Rs 12 per kWh."
                },
                {
                    id: "cm3q062",
                    src: "HYDR626-00012",
                    text: "Bondage in a hydropower station is ______",
                    options: [
                        { key: "a", text: "Temporary storage to meet peak demands" },
                        { key: "b", text: "Pond level" },
                        { key: "c", text: "Excess runoff to last for years" },
                        { key: "d", text: "Excess runoff for a few hours only" }
                    ],
                    answer: "a",
                    explanation: "Pondage is the small storage held immediately behind a run-of-river barrage, enough to even out daily or weekly variations and to let the plant follow the evening peak. Storage that carries water over months or years is reservoir storage, not pondage."
                },
                {
                    id: "cm3q063",
                    src: "HYDR626-00013",
                    text: "Power needed to uplift water can be calculated as?",
                    options: [
                        { key: "a", text: "p = vAH" },
                        { key: "b", text: "P = vQH" },
                        { key: "c", text: "P = vQH2" },
                        { key: "d", text: "p = QH/v" }
                    ],
                    answer: "b",
                    explanation: "The power in a flow is P equal to gamma Q H, the specific weight of water times the discharge times the head. Multiplying by the overall efficiency gives the power actually delivered at the generator terminals."
                },
                {
                    id: "cm3q064",
                    src: "HYDR626-00014",
                    text: "If the total hydroelectric potential of a plant is 84GW. Convert the potential into energy considering load factor of 60%.",
                    options: [
                        { key: "a", text: "735 TWH" },
                        { key: "b", text: "1226 TWH" },
                        { key: "c", text: "441 TWH" },
                        { key: "d", text: "504 TWH" }
                    ],
                    answer: "c",
                    explanation: "Energy is power multiplied by time and by the load factor: 84 GW times 8760 hours in a year gives 735,840 GWh, and 60 percent of that is about 441,000 GWh, that is roughly 441 TWh a year."
                },
                {
                    id: "cm3q065",
                    src: "HYDR626-00015",
                    text: "The power calculation (H = 423.5m, head loss = 2.5m, Q = 0.9m³/s. n=85%)",
                    options: [
                        { key: "a", text: "3159.45W" },
                        { key: "b", text: "3159.45MW" },
                        { key: "c", text: "31594.5kW" },
                        { key: "d", text: "3159.45kW" }
                    ],
                    answer: "d",
                    explanation: "The net head is 423.5 minus 2.5, which is 421 m. Power is then gamma Q H times efficiency, that is 9.81 times 0.9 times 421 times 0.85, which works out at about 3159 kW, or roughly 3.16 MW."
                },
                {
                    id: "cm3q066",
                    src: "HYDR626-00016",
                    text: "If a power station supplies 1000 MWh of electricity to its consumers for a period of two months, then the average demand during the period will be",
                    options: [
                        { key: "a", text: "0.694 MW" },
                        { key: "b", text: "1.39 MW" },
                        { key: "c", text: "1.39 kW" },
                        { key: "d", text: "0.694 kW" }
                    ],
                    answer: "a",
                    explanation: "Two months is about 60 days, or 1440 hours. The average demand is the energy divided by the time, 1000 MWh over 1440 h, which is 0.694 MW."
                },
                {
                    id: "cm3q067",
                    src: "HYDR626-00017",
                    text: "If 400 cumecs of water are released from a dam with an effective head of 50m and a hydro plant efficiency of 0.8, what is the electrical power generated from this plant?",
                    options: [
                        { key: "a", text: "1,56,800 MW" },
                        { key: "b", text: "156.8 MW" },
                        { key: "c", text: "156.8 M kW" },
                        { key: "d", text: "156.8 kW" }
                    ],
                    answer: "b",
                    explanation: "Power is gamma Q H times efficiency, that is 9.81 times 400 times 50 times 0.8. The first three terms give 196,200 kW of water power, and taking 80 percent of it leaves about 156.8 MW at the terminals."
                },
                {
                    id: "cm3q068",
                    src: "HYDR626-00018",
                    text: "A power generating station has a plant capacity of 200MW and maximum power demand is 150MW. If the average power generation is 110MW then find the load factor and capacity factor respectively",
                    options: [
                        { key: "a", text: "0.55 and 0.73" },
                        { key: "b", text: "0.75 and 0.65" },
                        { key: "c", text: "0.73 and 0.55" },
                        { key: "d", text: "0.65 and 0.55" }
                    ],
                    answer: "c",
                    explanation: "Load factor compares the average generation with the maximum demand, 110 over 150, which is 0.73. Capacity factor compares the same average with the installed capacity, 110 over 200, which is 0.55. The gap between them shows the plant has spare capacity above the system peak."
                }
            ]
        },
        {
            id: "cm3irri",
            name: "Irrigation and Drainage",
            subject: "Irrigation",
            accent: "emerald",
            blurb: "11 questions drawn from the Irrigation and Drainage bank.",
            questions: [
                {
                    id: "cm3q069",
                    src: "IRRI951-00012",
                    text: "Irrigation requirement depends of which of the following parameters?",
                    options: [
                        { key: "a", text: "Crop" },
                        { key: "b", text: "Soil" },
                        { key: "c", text: "Climate" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "Irrigation requirement depends on all three together: the crop, through its growth stage and rooting depth, the soil, through its water-holding capacity and infiltration rate, and the climate, through evaporation, temperature, wind and rainfall."
                },
                {
                    id: "cm3q070",
                    src: "IRRI951-00013",
                    text: "The kor depth for rice is 190 mm and kor period is 14 days. The outlet factor for this will be",
                    options: [
                        { key: "a", text: "637 hectares/m³/sec" },
                        { key: "b", text: "837 hectares/m³/sec" },
                        { key: "c", text: "972 hectares/m³/sec" },
                        { key: "d", text: "1172 hectares/m³/sec" }
                    ],
                    answer: "a",
                    explanation: "The outlet factor is the duty at the outlet, D equal to 8.64 B over delta, with the base period B in days and the depth delta in metres. Here that is 8.64 times 14, divided by 0.19, which gives about 637 hectares per cumec."
                },
                {
                    id: "cm3q071",
                    src: "IRRI951-00014",
                    text: "What is the consumptive use for a crop in the month of April having a consumptive use coefficient equal to 0.80 and pan evaporation is 35 cm?",
                    options: [
                        { key: "a", text: "43.75 cm" },
                        { key: "b", text: "28 cm" },
                        { key: "c", text: "35.80 cm" },
                        { key: "d", text: "40.80 cm" }
                    ],
                    answer: "b",
                    explanation: "Consumptive use is estimated as the pan evaporation multiplied by the crop coefficient, so 35 cm times 0.80 gives 28 cm for the month. The coefficient is below one because a crop canopy transpires less than an open water surface of the same area."
                },
                {
                    id: "cm3q072",
                    src: "IRRI951-00015",
                    text: "Find the duty of irrigation water required for rice transplantation, considering 18 days’ duration and 60 cm water depth, with 10 cm of rain being utilized and 25% losses in watercourses.",
                    options: [
                        { key: "a", text: "240 hectares/cumec" },
                        { key: "b", text: "230 hectares/cumec" },
                        { key: "c", text: "233.28 hectares/cumec" },
                        { key: "d", text: "244.44 hectares/cumec" }
                    ],
                    answer: "c",
                    explanation: "The net depth to be supplied is 60 minus the 10 cm of useful rain, that is 50 cm or 0.5 m. Duty at the field is 8.64 times 18 divided by 0.5, which is 311.04 hectares per cumec, and allowing 25 percent losses in the watercourses leaves 311.04 times 0.75, or 233.28."
                },
                {
                    id: "cm3q073",
                    src: "IRRI951-00016",
                    text: "If the irrigation efficiency is 80%, conveyance losses are 20% and the actual depth of watering is 16 cm, the depth of water required at the canal outlet, is",
                    options: [
                        { key: "a", text: "10 cm" },
                        { key: "b", text: "15 cm" },
                        { key: "c", text: "20 cm" },
                        { key: "d", text: "25 cm" }
                    ],
                    answer: "d",
                    explanation: "80% =0.8, actual depth=16 overall efficiency=0.8*.08=0.64 Depth water required at canal outlet= 16/0.64=25cm"
                },
                {
                    id: "cm3q074",
                    src: "IRRI951-00017",
                    text: "The mean depth of water is 1.5 cm and the mean deviation from the mean is 0.1 cm. Determine its distribution efficiency",
                    options: [
                        { key: "a", text: "0.93" },
                        { key: "b", text: "0.87" },
                        { key: "c", text: "0.83" },
                        { key: "d", text: "0.9" }
                    ],
                    answer: "a",
                    explanation: "Water distribution efficiency is 1 minus the mean deviation divided by the mean depth of water applied. That is 1 minus 0.1 over 1.5, which is 0.933, so the closest option is 0.93. The key has been corrected from the printed 0.87, which does not follow from these figures."
                },
                {
                    id: "cm3q075",
                    src: "IRRI951-00018",
                    text: "Due to lined channel section",
                    options: [
                        { key: "a", text: "Water logging increases" },
                        { key: "b", text: "command area increases" },
                        { key: "c", text: "cross sectional area increases" },
                        { key: "d", text: "All of these" }
                    ],
                    answer: "b",
                    explanation: "Lining almost eliminates seepage and lets the channel run at a higher velocity in a smaller section, so far more of the diverted water reaches the fields and a larger command area can be served. It also lowers the water table alongside, which reduces waterlogging rather than increasing it."
                },
                {
                    id: "cm3q076",
                    src: "IRRI951-00019",
                    text: "What is the purpose of providing free board?",
                    options: [
                        { key: "a", text: "Stability against overturning and safety against frost crack" },
                        { key: "b", text: "u/s slope erosion control" },
                        { key: "c", text: "Stability against overturning and safety against gully erosion" },
                        { key: "d", text: "d/s slope erosion control" }
                    ],
                    answer: "c",
                    explanation: "Freeboard is the height of the bank above full supply level. It absorbs wave action, flood surges and settlement of the embankment, and so prevents overtopping, which would both threaten the stability of the bank and cut gullies down its outer face."
                },
                {
                    id: "cm3q077",
                    src: "IRRI951-00020",
                    text: "Aggrading channel is",
                    options: [
                        { key: "a", text: "scouring" },
                        { key: "b", text: "meandering" },
                        { key: "c", text: "regime" },
                        { key: "d", text: "sitting" }
                    ],
                    answer: "d",
                    explanation: "An aggrading channel is one whose bed is rising because the sediment arriving exceeds what the flow can carry away, so material is deposited, that is silting. A degrading channel is the opposite case, where the bed scours down."
                },
                {
                    id: "cm3q078",
                    src: "IRRI951-00022",
                    text: "Canal irrigation is generally preferred in",
                    options: [
                        { key: "a", text: "alluvial canal" },
                        { key: "b", text: "non-alluvial canal" },
                        { key: "c", text: "non-perennial canal" },
                        { key: "d", text: "feeder canal" }
                    ],
                    answer: "a",
                    explanation: "Canal irrigation suits alluvial plains, where the ground is flat, the soil is deep, easily excavated and fertile, and gravity flow can command a very large area. In hard, non-alluvial rocky terrain excavation is costly and the command area is limited."
                },
                {
                    id: "cm3q079",
                    src: "IRRI951-00023",
                    text: "The placement of intake is not optimal when it is placed in?",
                    options: [
                        { key: "a", text: "Natural Channel" },
                        { key: "b", text: "Navigation Channel" },
                        { key: "c", text: "Both (a) and (b)" },
                        { key: "d", text: "nan" }
                    ],
                    answer: "b",
                    explanation: "An intake should never be sited in a navigation channel, where vessels, their draught and their wash would interfere with the structure and with the flow into it, and where the intake in turn obstructs navigation."
                }
            ]
        },
        {
            id: "cm3tran",
            name: "Transportation",
            subject: "Transportation",
            accent: "rose",
            blurb: "11 questions drawn from the Transportation bank.",
            questions: [
                {
                    id: "cm3q080",
                    src: "TRAN808-00012",
                    text: "Extra widening is",
                    options: [
                        { key: "a", text: "Psychological widening" },
                        { key: "b", text: "Mechanical widening" },
                        { key: "c", text: "Both a and b" },
                        { key: "d", text: "Curve" }
                    ],
                    answer: "c",
                    explanation: "Extra widening on a curve is the sum of two parts: mechanical widening, which allows for the extra width a rigid vehicle sweeps as its rear wheels track inside the front ones, and psychological widening, which gives the driver extra room to steer with confidence."
                },
                {
                    id: "cm3q081",
                    src: "TRAN808-00013",
                    text: "What is the arithmetic average of the speeds of all vehicles passing a specific point on a roadway over a given period of time?",
                    options: [
                        { key: "a", text: "Point speed" },
                        { key: "b", text: "SMS" },
                        { key: "c", text: "Average speed" },
                        { key: "d", text: "TMS" }
                    ],
                    answer: "d",
                    explanation: "Time Mean Speed (TMS): Speed measured at a fixed point over a period of time. Space Mean Speed (SMS): Speed measured over a fixed stretch/space of road at a particular instant. Spot Speed: Instantaneous speed at a single point."
                },
                {
                    id: "cm3q082",
                    src: "TRAN808-00014",
                    text: "According to NRRS, Arterial road is called",
                    options: [
                        { key: "a", text: "Marga" },
                        { key: "b", text: "Path" },
                        { key: "c", text: "Sadak" },
                        { key: "d", text: "Upamarga" }
                    ],
                    answer: "a",
                    explanation: "In the Nepal road standard hierarchy the arterial urban road is termed Marga, with sub-arterials as Upamarga, collector roads as Sadak and the smallest local links as Path."
                },
                {
                    id: "cm3q083",
                    src: "TRAN808-00015",
                    text: "Any gradient on a road is said to be an exceptional gradient if it is:",
                    options: [
                        { key: "a", text: "Steeper than the ruling gradient" },
                        { key: "b", text: "Steeper than the limiting gradient" },
                        { key: "c", text: "Less than the minimum gradient" },
                        { key: "d", text: "Equal to the average gradient" }
                    ],
                    answer: "b",
                    explanation: "In highway engineering, an exceptional gradient is defined as a gradient steeper than the limiting gradient, used only in unavoidable situations."
                },
                {
                    id: "cm3q084",
                    src: "TRAN808-00016",
                    text: "An intersection that is provided for different levels of the road is called",
                    options: [
                        { key: "a", text: "Intersection at grade" },
                        { key: "b", text: "Channelized intersection" },
                        { key: "c", text: "Grade-separated intersections" },
                        { key: "d", text: "Rotary intersection" }
                    ],
                    answer: "c",
                    explanation: "A grade-separated intersection carries the crossing roads at different levels, using an overbridge or underpass so that the conflicting streams never meet. At-grade, channelised and rotary intersections all keep the traffic on one plane."
                },
                {
                    id: "cm3q085",
                    src: "TRAN808-00017",
                    text: "Super elevation formula in hilly roads",
                    options: [
                        { key: "a", text: "e = v^2/254R" },
                        { key: "b", text: "e = v^2/30R" },
                        { key: "c", text: "e = v^2/60R" },
                        { key: "d", text: "e = v^2/127R" }
                    ],
                    answer: "d",
                    explanation: "On hill roads the full centrifugal force is balanced by superelevation alone, giving e equal to v squared over 127R with v in km/h. In the plains only 75 percent of the design speed is used for this check, which leads to the familiar v squared over 225R."
                },
                {
                    id: "cm3q086",
                    src: "TRAN808-00018",
                    text: "The improper alignment of highway does not cause which of the following?",
                    options: [
                        { key: "a", text: "Fatigue cracking" },
                        { key: "b", text: "Cost increase" },
                        { key: "c", text: "Increase in the probability of accidents" },
                        { key: "d", text: "Traffic problems" }
                    ],
                    answer: "a",
                    explanation: "A poor alignment raises construction cost, increases accident risk and creates operating problems, but fatigue cracking is a pavement failure caused by repeated wheel loading on an inadequate or poorly drained structure, not by where the road is routed."
                },
                {
                    id: "cm3q087",
                    src: "TRAN808-00019",
                    text: "The ideal shape of a transition curve is",
                    options: [
                        { key: "a", text: "cubic spiral" },
                        { key: "b", text: "clothoid" },
                        { key: "c", text: "cubic parabola" },
                        { key: "d", text: "lamniscate" }
                    ],
                    answer: "b",
                    explanation: "The clothoid, or ideal spiral, is the true transition curve because its radius decreases in exact inverse proportion to the distance travelled, so the centrifugal force builds up at a constant rate. The cubic parabola and cubic spiral are only approximations used for ease of setting out."
                },
                {
                    id: "cm3q088",
                    src: "TRAN808-00020",
                    text: "Drainage structure parallel to the road provided to intercept rain in a hilly region.",
                    options: [
                        { key: "a", text: "Side drain" },
                        { key: "b", text: "Sloping drain" },
                        { key: "c", text: "Catch drain." },
                        { key: "d", text: "Cross drain" }
                    ],
                    answer: "c",
                    explanation: "A catch water drain runs along the hillside above the road to intercept surface runoff before it reaches the formation, and leads it away to a natural watercourse. Side drains handle only the water falling on the carriageway itself."
                },
                {
                    id: "cm3q089",
                    src: "TRAN808-00021",
                    text: "The thin hairline crack is also known as",
                    options: [
                        { key: "a", text: "breaking" },
                        { key: "b", text: "sizzling" },
                        { key: "c", text: "cracking" },
                        { key: "d", text: "crazing" }
                    ],
                    answer: "d",
                    explanation: "Crazing is a network of fine hairline cracks in the surface, caused by rapid drying or surface shrinkage. The cracks are shallow and do not usually affect strength, but they spoil appearance and let water reach the layers below."
                },
                {
                    id: "cm3q090",
                    src: "TRAN808-00022",
                    text: "Daily average traffic calculated based on 30 days' survey in 365 days is",
                    options: [
                        { key: "a", text: "ADT" },
                        { key: "b", text: "AADT" },
                        { key: "c", text: "AAWT" },
                        { key: "d", text: "AWT" }
                    ],
                    answer: "a",
                    explanation: "ADT (Average Daily Traffic) is the average traffic volume per day calculated over a period less than one year (e.g., 7 days, 30 days). AADT (Annual Average Daily Traffic) represents the average daily traffic over 365 days (a full year), usually requiring seasonal adjustment if based on short-term counts."
                }
            ]
        },
        {
            id: "cm3wate",
            name: "Water Supply, Sanitation and Environment",
            subject: "Water Supply",
            accent: "blue",
            blurb: "10 questions drawn from the Water Supply, Sanitation and Environment bank.",
            questions: [
                {
                    id: "cm3q091",
                    src: "WATE813-00011",
                    text: "Population forecasting for water supply for large &amp; old town?",
                    options: [
                        { key: "a", text: "Geometric progression method" },
                        { key: "b", text: "Arithmetical increase method" },
                        { key: "c", text: "Graphical method" },
                        { key: "d", text: "Logistic curve method" }
                    ],
                    answer: "b",
                    explanation: "Arithmetical Increase Method is generally preferred for large, old, and developed towns where growth has become nearly constant. Graphical Method is used when past population data is plotted on a graph to estimate future population visually. Logistic Curve Method is used when a city’s growth follows an S-shaped curve and approaches a saturation limit. Geometric Progression Method is preferred for new or rapidly growing towns with percentage-based growth."
                },
                {
                    id: "cm3q092",
                    src: "WATE813-00012",
                    text: "For a rapidly growing population, which method of projection is preferred?",
                    options: [
                        { key: "a", text: "Arithmetical increase method" },
                        { key: "b", text: "Geometrical increase method" },
                        { key: "c", text: "Incremental increase method" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "b",
                    explanation: "The geometrical increase method assumes a constant percentage growth rate and so compounds, which fits a rapidly growing or industrialising town. The arithmetical method assumes a fixed increment each decade and suits large, mature cities whose growth has slowed."
                },
                {
                    id: "cm3q093",
                    src: "WATE813-00013",
                    text: "What is the fire demand of the city of 1 lakh population by Buston's formula?",
                    options: [
                        { key: "a", text: "5663 l/min" },
                        { key: "b", text: "566300 l/min" },
                        { key: "c", text: "5663000 l/min" },
                        { key: "d", text: "56630 l/min" }
                    ],
                    answer: "d",
                    explanation: "Buston's formula gives the fire demand as Q equal to 5663 times the square root of P, with P in thousands. For a population of one lakh, P is 100 and the root is 10, so the demand is 56,630 litres per minute."
                },
                {
                    id: "cm3q094",
                    src: "WATE813-00014",
                    text: "In the process of finding fixed inorganic solid in a sludge sample, the temp is.",
                    options: [
                        { key: "a", text: "550° ± 50 for 1hr" },
                        { key: "b", text: "550° ± 50 for 15 minutes" },
                        { key: "c", text: "105° ± 50 for 15 minutes" },
                        { key: "d", text: "105° ± 50 for 1hr" }
                    ],
                    answer: "a",
                    explanation: "Fixed solids are found by igniting the residue at 550 plus or minus 50 degrees Celsius for one hour. The organic matter burns off as volatile solids, and what remains is the fixed, inorganic fraction."
                },
                {
                    id: "cm3q095",
                    src: "WATE813-00015",
                    text: "Find fire demand of 1 lakh population by Kuchling's.",
                    options: [
                        { key: "a", text: "430l/s" },
                        { key: "b", text: "530l/s" },
                        { key: "c", text: "630l/s" },
                        { key: "d", text: "730l/s" }
                    ],
                    answer: "b",
                    explanation: "Kuchling's formula for calculating water required for fire fighting is expressed as: \\(\\[ \\begin{aligned} P &= 100000/1000=100 \\\\ Q &= 3182\\sqrt{100} \\\\ &= 3182 \\times 10 \\\\ &= 31{,}820\\ \\text{L/min}&=530l/s \\end{aligned} \\]\\)"
                },
                {
                    id: "cm3q096",
                    src: "WATE813-00016",
                    text: "Permissible pH value for public water supply ranges between:",
                    options: [
                        { key: "a", text: "4.5 to 5.5" },
                        { key: "b", text: "5.5 to 6.5" },
                        { key: "c", text: "6.5 to 8.5" },
                        { key: "d", text: "8.5 to 10.5" }
                    ],
                    answer: "c",
                    explanation: "Public supplies are kept between pH 6.5 and 8.5. Below that range the water is corrosive to pipes and dissolves metals, and above it the taste suffers and chlorine disinfection becomes far less effective."
                },
                {
                    id: "cm3q097",
                    src: "WATE813-00017",
                    text: "If 40 ml of sewage is diluted to 240 ml of mixture, what is the TON value?",
                    options: [
                        { key: "a", text: "1/6" },
                        { key: "b", text: "5" },
                        { key: "c", text: "1/5" },
                        { key: "d", text: "6" }
                    ],
                    answer: "d",
                    explanation: "The threshold odour number is the total volume of the diluted mixture divided by the volume of the sample, so 240 divided by 40 gives 6. A higher TON means the sample had to be diluted further before its odour became undetectable."
                },
                {
                    id: "cm3q098",
                    src: "WATE813-00018",
                    text: "If the initial population of a country is 1000000 and the birth rate and death rate are 10% and 4% respectively, what is the population of the country after 2 years?",
                    options: [
                        { key: "a", text: "1123600" },
                        { key: "b", text: "1126000" },
                        { key: "c", text: "1023600" },
                        { key: "d", text: "1123000" }
                    ],
                    answer: "a",
                    explanation: "The net growth rate is 10 minus 4, that is 6 percent a year, compounded. After two years the population is 1,000,000 times 1.06 squared, which is 1,000,000 times 1.1236, giving 1,123,600."
                },
                {
                    id: "cm3q099",
                    src: "WATE813-00019",
                    text: "E. Coil dies when pH of water is",
                    options: [
                        { key: "a", text: "7" },
                        { key: "b", text: "9.5" },
                        { key: "c", text: "6.5" },
                        { key: "d", text: "8.5" }
                    ],
                    answer: "b",
                    explanation: "Escherichia coli survives only in a fairly narrow band around neutral and is killed as the water turns strongly alkaline, at about pH 9.5. This is one reason excess lime treatment disinfects as well as softens."
                },
                {
                    id: "cm3q100",
                    src: "WATE813-00020",
                    text: "The livestock demand should not exceed …… of total domestic demand.",
                    options: [
                        { key: "a", text: "10%" },
                        { key: "b", text: "40%" },
                        { key: "c", text: "20%" },
                        { key: "d", text: "45%" }
                    ],
                    answer: "c",
                    explanation: "Livestock demand is normally limited to about 20 percent of the domestic demand when sizing a rural supply. Allowing more would oversize the source and the distribution mains for a use that is seasonal and easily met from other sources."
                }
            ]
        }
    ]
};

/* Registered lazily — js/civil.js injects this file when the set is opened. */
window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["civil-3"] = CIVIL_MODEL_3;
