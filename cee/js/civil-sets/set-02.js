/* ============================================================
   CIVIL MODEL SET 2 — Civil Engineering licence-style model paper
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
const CIVIL_MODEL_2 = {
    day: 32,
    kind: "model",
    badge: { top: "Model", main: "C2" },
    title: "Civil Model Set 2",
    subtitle: "Civil Engineering · 9 subjects",
    durationMinutes: 120,
    negativeMarking: 0,
    chapters: [
        {
            id: "cm2basi",
            name: "Basic Civil Engineering",
            subject: "Basic Civil",
            accent: "blue",
            blurb: "13 questions drawn from the Basic Civil Engineering bank.",
            questions: [
                {
                    id: "cm2q001",
                    src: "BASI674-00001",
                    text: "For repetitive use, formworks in concrete construction, what material is preferred?",
                    options: [
                        { key: "a", text: "Stone" },
                        { key: "b", text: "Timber" },
                        { key: "c", text: "Steel" },
                        { key: "d", text: "Bamboo" }
                    ],
                    answer: "c",
                    explanation: "Steel formwork is preferred where forms are reused many times: it is dimensionally stable, does not warp or absorb water, gives a smooth off-form finish and survives 100 or more uses. Timber and bamboo distort after a few pours, and stone is not a formwork material at all."
                },
                {
                    id: "cm2q002",
                    src: "BASI674-00002",
                    text: "Early strength of cement is achieved by",
                    options: [
                        { key: "a", text: "C2S" },
                        { key: "b", text: "C3A" },
                        { key: "c", text: "C4AF" },
                        { key: "d", text: "C3S" }
                    ],
                    answer: "d",
                    explanation: "Tricalcium silicate (C3S) hydrates quickly and is responsible for the strength gained in the first 7 to 28 days. C2S reacts slowly and governs later strength, C3A causes flash set and is controlled by gypsum, and C4AF contributes mainly colour rather than strength."
                },
                {
                    id: "cm2q003",
                    src: "BASI674-00003",
                    text: "Brick is soaked in water before use.",
                    options: [
                        { key: "a", text: "All" },
                        { key: "b", text: "To wash dust" },
                        { key: "c", text: "To prevent moisture loss from mortar" },
                        { key: "d", text: "For even spreading of mortar" }
                    ],
                    answer: "a",
                    explanation: "Soaking serves every purpose listed: it washes away dust and loose particles, it stops the dry brick from sucking the mixing water out of the mortar (which would leave the mortar unhydrated and weak), and the wet surface lets mortar spread evenly."
                },
                {
                    id: "cm2q004",
                    src: "BASI674-00004",
                    text: "Indentation on the surface of a brick is called?",
                    options: [
                        { key: "a", text: "Strike" },
                        { key: "b", text: "Frog" },
                        { key: "c", text: "Spike" },
                        { key: "d", text: "All" }
                    ],
                    answer: "b",
                    explanation: "The frog is the shallow depression moulded into the top face of a brick. It keys the mortar so the bed joint resists sliding, reduces the weight of the unit, and carries the manufacturer's identification mark."
                },
                {
                    id: "cm2q005",
                    src: "BASI674-00005",
                    text: "If a two-point load acts above two supports in a simply supported beam",
                    options: [
                        { key: "a", text: "No internal force develops." },
                        { key: "b", text: "Only axial force is 0." },
                        { key: "c", text: "MB is max at mid span." },
                        { key: "d", text: "Reaction not developed." }
                    ],
                    answer: "c",
                    explanation: "With equal point loads placed symmetrically, the shear force between the two loads is zero, so the bending moment is constant and at its maximum across the whole central region, mid-span included. This zone of pure bending is exactly why the arrangement is used in flexure testing."
                },
                {
                    id: "cm2q006",
                    src: "BASI674-00006",
                    text: "Before plastering, the surface has to be.",
                    options: [
                        { key: "a", text: "Smooth" },
                        { key: "b", text: "Cemented" },
                        { key: "c", text: "Watered" },
                        { key: "d", text: "Rough" }
                    ],
                    answer: "d",
                    explanation: "A rough background gives the plaster a mechanical key. Old smooth concrete or dense brickwork must be hacked, raked or given a spatterdash coat, otherwise the plaster has nothing to grip and later debonds and hollows."
                },
                {
                    id: "cm2q007",
                    src: "BASI674-00007",
                    text: "The effect on timber due to electric seasoning is?",
                    options: [
                        { key: "a", text: "Splitting" },
                        { key: "b", text: "Cracking" },
                        { key: "c", text: "Rot" },
                        { key: "d", text: "Checks" }
                    ],
                    answer: "a",
                    explanation: "Electrical seasoning passes a high-frequency current through the timber, which heats it internally and drives moisture out very quickly. The steep moisture gradient that results sets up internal stresses and splits the timber, and the high power cost keeps the method from general use."
                },
                {
                    id: "cm2q008",
                    src: "BASI674-00008",
                    text: "What is the composition of quartzite?",
                    options: [
                        { key: "a", text: "Calcareous" },
                        { key: "b", text: "Siliceous" },
                        { key: "c", text: "Argillaceous" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "b",
                    explanation: "Quartzite is a metamorphosed sandstone made up almost entirely of quartz grains, so it is classed as a siliceous rock. Calcareous rocks are lime based, such as limestone and marble, while argillaceous rocks such as slate are clay based."
                },
                {
                    id: "cm2q009",
                    src: "BASI674-00009",
                    text: "The component of paint that imparts color to it is called",
                    options: [
                        { key: "a", text: "Vehicle" },
                        { key: "b", text: "Both" },
                        { key: "c", text: "Pigment" },
                        { key: "d", text: "None" }
                    ],
                    answer: "c",
                    explanation: "Pigment is the finely ground solid that gives paint its colour, opacity and much of its durability. The vehicle or binder is the liquid medium that carries the pigment, wets the surface and forms the film as it dries."
                },
                {
                    id: "cm2q010",
                    src: "BASI674-00010",
                    text: "Which lime is used in lime motor?",
                    options: [
                        { key: "a", text: "Quick lime" },
                        { key: "b", text: "Fat lime" },
                        { key: "c", text: "Limp lime" },
                        { key: "d", text: "Hydraulic lime" }
                    ],
                    answer: "d",
                    explanation: "Hydraulic lime contains clay impurities that let it set and harden in the presence of water, so it can be used for mortar in walls and in damp locations. Fat lime hardens only by absorbing carbon dioxide from the air and is used for plaster and whitewash."
                },
                {
                    id: "cm2q011",
                    src: "BASI674-00011",
                    text: "Plastic bitumen is used in...",
                    options: [
                        { key: "a", text: "Filling cracks" },
                        { key: "b", text: "Road pavement" },
                        { key: "c", text: "Expansion joint" },
                        { key: "d", text: "Paints" }
                    ],
                    answer: "a",
                    explanation: "Plastic bitumen is bitumen blended with a fine inert filler to give a stiff, putty-like consistency. It is applied to seal cracks and small openings, where it stays in place instead of flowing out like ordinary hot bitumen."
                },
                {
                    id: "cm2q012",
                    src: "BASI674-00012",
                    text: "Which of the following is primary raw material in the cement manufacturing?",
                    options: [
                        { key: "a", text: "Mica" },
                        { key: "b", text: "Limestone" },
                        { key: "c", text: "Aluminum" },
                        { key: "d", text: "Coal" }
                    ],
                    answer: "b",
                    explanation: "Limestone supplies the calcium carbonate that becomes the lime in cement clinker and makes up roughly three quarters of the raw mix. Clay or shale supplies the silica, alumina and iron, while coal is a fuel rather than a raw material."
                },
                {
                    id: "cm2q013",
                    src: "BASI674-00013",
                    text: "Lacquer is",
                    options: [
                        { key: "a", text: "Oil paints" },
                        { key: "b", text: "Distemper" },
                        { key: "c", text: "Spirit Varnish" },
                        { key: "d", text: "Enamel paints" }
                    ],
                    answer: "c",
                    explanation: "Lacquer is a spirit varnish: a resin dissolved in a volatile solvent that dries purely by evaporation, leaving a hard film in minutes. Oil varnishes and enamels dry far more slowly because the film has to oxidise or cure chemically."
                }
            ]
        },
        {
            id: "cm2stru",
            name: "Structural Mechanics",
            subject: "Structural Mech",
            accent: "cyan",
            blurb: "11 questions drawn from the Structural Mechanics bank.",
            questions: [
                {
                    id: "cm2q014",
                    src: "STRU935-00001",
                    text: "A bending moment M acts at each support of a simply supported beam, the SFD has ordinates",
                    options: [
                        { key: "a", text: "zero at all sections" },
                        { key: "b", text: "max at mid-point" },
                        { key: "c", text: "max at supports" },
                        { key: "d", text: "zero at the supports" }
                    ],
                    answer: "d",
                    explanation: "A couple applied at a support is carried by the beam as bending, not as a transverse force. With equal end moments the support reactions come out zero, so the shear-force diagram has zero ordinates at the supports and the beam is in pure bending."
                },
                {
                    id: "cm2q015",
                    src: "STRU935-00002",
                    text: "If the shear force along a section of a beam is zero, the bending moment at the section is",
                    options: [
                        { key: "a", text: "maximum" },
                        { key: "b", text: "zero" },
                        { key: "c", text: "minimum" },
                        { key: "d", text: "average of maximum-minimum" }
                    ],
                    answer: "a",
                    explanation: "Shear force is the slope of the bending-moment diagram, since V equals dM/dx. Where the shear passes through zero the slope of the moment diagram is zero, which is the stationary point where the bending moment reaches its maximum."
                },
                {
                    id: "cm2q016",
                    src: "STRU935-00003",
                    text: "For a simply supported beam, a neutral axis is",
                    options: [
                        { key: "a", text: "where bending stress is maximum and shear stress zero" },
                        { key: "b", text: "where bending stress is zero and shear stress maximum" },
                        { key: "c", text: "where BM is zero, SF is maximum" },
                        { key: "d", text: "where BM is maximum, SF is zero" }
                    ],
                    answer: "b",
                    explanation: "The neutral axis is the layer where the fibres neither stretch nor shorten, so the bending stress there is zero. For a symmetrical section the shear stress distribution is parabolic with its peak at that same level, which is why webs are checked for shear at the neutral axis."
                },
                {
                    id: "cm2q017",
                    src: "STRU935-00004",
                    text: "During ultimate shear failure, the resistance provided is due to",
                    options: [
                        { key: "a", text: "Shear reinforcement only" },
                        { key: "b", text: "compression reinforcement only" },
                        { key: "c", text: "None of the above" },
                        { key: "d", text: "Both a and b" }
                    ],
                    answer: "c",
                    explanation: "At ultimate shear failure the resistance comes from several sources acting together: the uncracked concrete in the compression zone, aggregate interlock across the crack, dowel action of the longitudinal bars and the stirrups crossing the crack. No single option listed covers that combination."
                },
                {
                    id: "cm2q018",
                    src: "STRU935-00005",
                    text: "Which of the following is important while designing Beam",
                    options: [
                        { key: "a", text: "SF at Support" },
                        { key: "b", text: "BM at Support" },
                        { key: "c", text: "SF at Center" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "A beam design has to satisfy every one of these: the bending moment at the supports and at mid-span decides the flexural steel, while the shear force at the supports and along the span decides the stirrup spacing."
                },
                {
                    id: "cm2q019",
                    src: "STRU935-00006",
                    text: "Correct relation between SF and M?",
                    options: [
                        { key: "a", text: "S=dM/dx" },
                        { key: "b", text: "M=dS/dx" },
                        { key: "c", text: "dM/dS=x" },
                        { key: "d", text: "dS/dM=x" }
                    ],
                    answer: "a",
                    explanation: "Differentiating the bending moment along the beam gives the shear force, S equals dM/dx. Differentiating once more gives the intensity of loading, which is why the load, shear and moment diagrams can each be drawn from the one above it."
                },
                {
                    id: "cm2q020",
                    src: "STRU935-00007",
                    text: "The load beyond which a body will have permanent set is",
                    options: [
                        { key: "a", text: "Rigidity" },
                        { key: "b", text: "Proof load" },
                        { key: "c", text: "Proof resilience" },
                        { key: "d", text: "Proof stress" }
                    ],
                    answer: "b",
                    explanation: "The proof load is the largest load a member can carry and still return to its original shape. Loading beyond it takes the material past the elastic limit, so part of the strain is not recovered and a permanent set remains."
                },
                {
                    id: "cm2q021",
                    src: "STRU935-00008",
                    text: "The deflection at the center of a simply supported beam when a concentrated load P is acting at its center is",
                    options: [
                        { key: "a", text: "PL³/96EI" },
                        { key: "b", text: "PL⁴/24EI" },
                        { key: "c", text: "PL³/48EI" },
                        { key: "d", text: "PL³/16EI" }
                    ],
                    answer: "c",
                    explanation: "For a simply supported span with a central point load the maximum deflection occurs at mid-span and equals PL cubed divided by 48EI. Note the cube on the span: doubling the span makes the beam eight times more flexible."
                },
                {
                    id: "cm2q022",
                    src: "STRU935-00009",
                    text: "In a simply supported beam, two equal point loads P are acting at a distance of L/3 from both supports A and B. what is the value of shear force at distance L/6 from support A?",
                    options: [
                        { key: "a", text: "2P" },
                        { key: "b", text: "P/3" },
                        { key: "c", text: "P/6" },
                        { key: "d", text: "P" }
                    ],
                    answer: "d",
                    explanation: "The two loads are placed symmetrically, so each reaction is P. A section at L/6 from A lies between the support and the first load, and the only force to the left of it is the reaction, so the shear force there equals P."
                },
                {
                    id: "cm2q023",
                    src: "STRU935-00010",
                    text: "The ductility of a material ______ with the increase in percentage reduction in the area of a specimen under a tensile test?",
                    options: [
                        { key: "a", text: "Increases" },
                        { key: "b", text: "Increases rapidly." },
                        { key: "c", text: "Decreases" },
                        { key: "d", text: "Remains constant" }
                    ],
                    answer: "a",
                    explanation: "Percentage reduction in area measures how much the specimen necks down before it breaks, so a larger reduction means the material deformed plastically for longer. Ductility therefore increases with the percentage reduction in area, just as it does with percentage elongation."
                },
                {
                    id: "cm2q024",
                    src: "STRU935-00011",
                    text: "A beam is said to be Continuous if...",
                    options: [
                        { key: "a", text: "Fixed at both ends" },
                        { key: "b", text: "Fixed at one end and free at the other end" },
                        { key: "c", text: "Supported at more than two supports" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "c",
                    explanation: "A continuous beam rests on more than two supports, so it spans several bays without a break. The extra supports make it statically indeterminate and produce hogging moments over the interior supports."
                }
            ]
        },
        {
            id: "cm2desi",
            name: "Design of Structures",
            subject: "Design of Str",
            accent: "slate",
            blurb: "10 questions drawn from the Design of Structures bank.",
            questions: [
                {
                    id: "cm2q025",
                    src: "DESI787-00001",
                    text: "The snow load is calculated as",
                    options: [
                        { key: "a", text: "S=µ/So" },
                        { key: "b", text: "So=µS" },
                        { key: "c", text: "S=µSo" },
                        { key: "d", text: "S=µSo2" }
                    ],
                    answer: "c",
                    explanation: "The design snow load is the ground snow load So multiplied by the shape coefficient, giving S equal to mu times So. The shape coefficient allows for roof slope and for snow sliding or drifting, so a steep roof retains far less snow than a flat one."
                },
                {
                    id: "cm2q026",
                    src: "DESI787-00002",
                    text: "Which of the following is not dead load?",
                    options: [
                        { key: "a", text: "Partition wall" },
                        { key: "b", text: "Stages in class" },
                        { key: "c", text: "Floor finish" },
                        { key: "d", text: "Furniture in class" }
                    ],
                    answer: "d",
                    explanation: "Dead load covers only what is permanently fixed in place: partition walls, floor finishes and fixed stages. Furniture can be moved or removed at any time, so it is an imposed (live) load."
                },
                {
                    id: "cm2q027",
                    src: "DESI787-00003",
                    text: "Live loads, with time can vary in:",
                    options: [
                        { key: "a", text: "Position as well as magnitude" },
                        { key: "b", text: "Magnitude" },
                        { key: "c", text: "Position" },
                        { key: "d", text: "Neither position nor magnitude" }
                    ],
                    answer: "a",
                    explanation: "Imposed loads change both where they act and how heavy they are, since people, furniture and stored goods move around and vary from hour to hour. That is why the position of a live load has to be varied to find the worst effect on each member."
                },
                {
                    id: "cm2q028",
                    src: "DESI787-00004",
                    text: "Provisions for live loads are made in which of the following IS codes?",
                    options: [
                        { key: "a", text: "IS 875 I" },
                        { key: "b", text: "IS 875 II" },
                        { key: "c", text: "IS 1893" },
                        { key: "d", text: "IS 875 III" }
                    ],
                    answer: "b",
                    explanation: "IS 875 Part II covers imposed (live) loads. Part I deals with dead loads and unit weights, Part III with wind loads and Part V with load combinations, while IS 1893 covers earthquake loading."
                },
                {
                    id: "cm2q029",
                    src: "DESI787-00005",
                    text: "According to NBC, the velocity of wind in higher hills?",
                    options: [
                        { key: "a", text: "33 m/s" },
                        { key: "b", text: "39 m/s" },
                        { key: "c", text: "55 m/s" },
                        { key: "d", text: "49 m/s" }
                    ],
                    answer: "c",
                    explanation: "According to Nepal National Building Code 104:1994 (NBC 104), the basic wind velocity in the higher hills and mountain regions (generally above 3000 meters elevation) is 55 meters per second. This higher value is used in the second wind zone, while lower regions are rated at 47 m/s."
                },
                {
                    id: "cm2q030",
                    src: "DESI787-00006",
                    text: "Basic wind speed = 55m/s and k1, k2, k3 all are 1 then wind pressure considered is",
                    options: [
                        { key: "a", text: "18.15" },
                        { key: "b", text: "181.5" },
                        { key: "c", text: "18150" },
                        { key: "d", text: "1815" }
                    ],
                    answer: "d",
                    explanation: "The design wind speed is Vz equal to Vb times k1 k2 k3, which here is simply 55 m/s. The design wind pressure is then pz equal to 0.6 Vz squared, giving 0.6 times 3025, which is 1815 N per square metre."
                },
                {
                    id: "cm2q031",
                    src: "DESI787-00007",
                    text: "How many wind zones are there in Nepal?",
                    options: [
                        { key: "a", text: "3" },
                        { key: "b", text: "1" },
                        { key: "c", text: "2" },
                        { key: "d", text: "4" }
                    ],
                    answer: "a",
                    explanation: "Nepal is divided into three wind zones for design purposes, reflecting the different basic wind speeds across the Terai, the hills and the high mountains."
                },
                {
                    id: "cm2q032",
                    src: "DESI787-00008",
                    text: "Grout is a mixture of",
                    options: [
                        { key: "a", text: "Water, cement and sand" },
                        { key: "b", text: "Water and cement" },
                        { key: "c", text: "Water, cement and lime" },
                        { key: "d", text: "Water, lime and sand" }
                    ],
                    answer: "b",
                    explanation: "Grout in this sense is a fluid neat cement paste, cement mixed with water only, thin enough to flow into cracks, joints and post-tensioning ducts. Adding sand would make it a mortar and stop it penetrating fine openings."
                },
                {
                    id: "cm2q033",
                    src: "DESI787-00009",
                    text: "If enough water for workability of concrete is already added, then increasing w/c ratio in the concrete results in?",
                    options: [
                        { key: "a", text: "strength will increase" },
                        { key: "b", text: "strength may increase or decrease" },
                        { key: "c", text: "strength will decrease" },
                        { key: "d", text: "no change in strength" }
                    ],
                    answer: "c",
                    explanation: "Once enough water is present for full compaction, any extra water simply leaves capillary pores behind as it evaporates. By Abrams' law strength falls as the water-cement ratio rises, so raising w/c beyond the workability requirement always reduces strength."
                },
                {
                    id: "cm2q034",
                    src: "DESI787-00010",
                    text: "Which test gives good results for rich mixes?",
                    options: [
                        { key: "a", text: "Stamp test" },
                        { key: "b", text: "Compacting factor test" },
                        { key: "c", text: "VeBe test" },
                        { key: "d", text: "Flow table test" }
                    ],
                    answer: "d",
                    explanation: "The flow table test suits rich, highly workable and flowing mixes, where the slump cone would collapse and give no useful reading. Very dry, harsh mixes are better measured by the compacting factor or VeBe tests."
                }
            ]
        },
        {
            id: "cm2soil",
            name: "Soil Mechanics and Foundation",
            subject: "Soil Mechanics",
            accent: "amber",
            blurb: "13 questions drawn from the Soil Mechanics and Foundation bank.",
            questions: [
                {
                    id: "cm2q035",
                    src: "SOIL136-00001",
                    text: "What is the formula to compute dry density of soil?",
                    options: [
                        { key: "a", text: "$$\\frac{\\gamma}{1+w}$$" },
                        { key: "b", text: "$$\\frac{(1-n_a)G\\gamma_w}{1+wG}$$" },
                        { key: "c", text: "$$\\frac{G\\gamma_w}{1+e}$$" },
                        { key: "d", text: "All of above" }
                    ],
                    answer: "d",
                    explanation: "All of them are the formula to compute dry density of soil"
                },
                {
                    id: "cm2q036",
                    src: "SOIL136-00002",
                    text: "The water content of soil is defined as the ratio of",
                    options: [
                        { key: "a", text: "volume of water to volume of given soil" },
                        { key: "b", text: "weight of water to weight of solids of given mass of soil" },
                        { key: "c", text: "volume of water to volume of voids in" },
                        { key: "d", text: "weight of water to weight of air in voids" }
                    ],
                    answer: "b",
                    explanation: "Water content is defined on a dry-mass basis: the weight of water divided by the weight of the soil solids, expressed as a percentage. Because the denominator is the solids and not the total, water content can exceed 100 percent in soft organic clays."
                },
                {
                    id: "cm2q037",
                    src: "SOIL136-00003",
                    text: "Meaning of SC in soil classification?",
                    options: [
                        { key: "a", text: "Soil with plastic fines" },
                        { key: "b", text: "Sand with inorganic fines" },
                        { key: "c", text: "Sand with plastic fines" },
                        { key: "d", text: "Sand with common fines" }
                    ],
                    answer: "c",
                    explanation: "In the Unified system the first letter S means sand and the second letter C means clay, so SC is clayey sand, that is sand containing plastic fines. Sand with non-plastic silty fines would be SM."
                },
                {
                    id: "cm2q038",
                    src: "SOIL136-00004",
                    text: "The ratio of the volume of water present in a given soil mass to the total volume of its voids, is known as",
                    options: [
                        { key: "a", text: "porosity" },
                        { key: "b", text: "void ratio" },
                        { key: "c", text: "percentage voids" },
                        { key: "d", text: "degree of saturation" }
                    ],
                    answer: "d",
                    explanation: "The degree of saturation is the volume of water divided by the volume of voids. It is zero for dry soil and 100 percent when every void is full of water, which is the condition below the water table."
                },
                {
                    id: "cm2q039",
                    src: "SOIL136-00005",
                    text: "What is the type of soil which have PI below A-line?",
                    options: [
                        { key: "a", text: "Low plasticity" },
                        { key: "b", text: "Organic" },
                        { key: "c", text: "High plasticity" },
                        { key: "d", text: "All types" }
                    ],
                    answer: "a",
                    explanation: "On the plasticity chart, soils that plot below the A-line have too little plasticity for their liquid limit to class as clay. They are the silts and organic soils of low plasticity, the M and O groups, while clays plot above the line."
                },
                {
                    id: "cm2q040",
                    src: "SOIL136-00006",
                    text: "The aggregate containing moisture in pores and having its surface dry, is known as",
                    options: [
                        { key: "a", text: "moist aggregates" },
                        { key: "b", text: "saturated surface dry aggregate" },
                        { key: "c", text: "dry aggregates" }
                    ],
                    answer: "b",
                    explanation: "Saturated surface dry is the reference state in mix design: the pores are full of water but no free film remains on the surface. In this condition the aggregate neither absorbs mixing water nor adds to it, so the intended water-cement ratio is preserved."
                },
                {
                    id: "cm2q041",
                    src: "SOIL136-00007",
                    text: "The maximum water content at which a reduction in water content does not cause a decrease in volume of a soil mass, is known as",
                    options: [
                        { key: "a", text: "liquid limit" },
                        { key: "b", text: "plastic limit" },
                        { key: "c", text: "shrinkage limit" },
                        { key: "d", text: "permeability limit" }
                    ],
                    answer: "c",
                    explanation: "The shrinkage limit is the water content below which further drying causes no more reduction in volume. Below it, air replaces the water leaving the pores, so the soil mass stays the same size while it continues to dry."
                },
                {
                    id: "cm2q042",
                    src: "SOIL136-00008",
                    text: "Coefficient of uniformity is ______",
                    options: [
                        { key: "a", text: "D10/D60" },
                        { key: "b", text: "D30²/D60*D30" },
                        { key: "c", text: "D60*D30 /D30²" },
                        { key: "d", text: "D60/D10" }
                    ],
                    answer: "d",
                    explanation: "The coefficient of uniformity is Cu equal to D60 divided by D10, the ratio of the sieve sizes through which 60 and 10 percent of the sample pass. A large ratio means a wide spread of particle sizes, so the soil is well graded."
                },
                {
                    id: "cm2q043",
                    src: "SOIL136-00009",
                    text: "Falling head permeability test can be used for ______",
                    options: [
                        { key: "a", text: "Clayey soil" },
                        { key: "b", text: "Coarse-grained soil" },
                        { key: "c", text: "Glassy soil" },
                        { key: "d", text: "Leakness" }
                    ],
                    answer: "a",
                    explanation: "The falling head test is used for fine-grained soils such as silts and clays, whose permeability is so low that only a very small flow occurs. The drop of water level in a standpipe is measured over time, whereas the constant head test suits free-draining coarse soils."
                },
                {
                    id: "cm2q044",
                    src: "SOIL136-00010",
                    text: "Soil of Kathmandu valley is",
                    options: [
                        { key: "a", text: "black cotton" },
                        { key: "b", text: "organic" },
                        { key: "c", text: "sandy" },
                        { key: "d", text: "both a and b" }
                    ],
                    answer: "d",
                    explanation: "The Kathmandu valley is an old lake bed, so its deposits are lacustrine: soft black clay of the kalimati type interbedded with organic silts and peat. Both the black cotton type clay and the organic descriptions therefore apply."
                },
                {
                    id: "cm2q045",
                    src: "SOIL136-00011",
                    text: "What is the sieve size in mm for an aggregate to be a fine-grained aggregate if it retains on it?",
                    options: [
                        { key: "a", text: "75 microns" },
                        { key: "b", text: "2.36mm" },
                        { key: "c", text: "4.75mm" },
                        { key: "d", text: "20 microns" }
                    ],
                    answer: "c",
                    explanation: "An aggregate is considered a fine-grained aggregate if it passes through a 4.75mm sieve. Conversely, if the aggregate is retained on the 4.75mm sieve, it is classified as a coarse-grained aggregate. This sieve size acts as the dividing line between fine aggregates (like sand) and coarse aggregates (like gravel or crushed stone) in standard grading tests like sieve analysis. The other options are incorrect: A. 75 microns (or 0.075mm) is the sieve size used to differentiate between sand and finer materials like silt and clay. B. 2.36mm is a standard sieve size for grading fine aggregates but is not the size that defines the overall classification as fine or coarse. D. 20 microns (or 0.02mm) is a particle size that would pass through the 75-micron sieve and is considered silt, not a fine aggregate."
                },
                {
                    id: "cm2q046",
                    src: "SOIL136-00012",
                    text: "The coefficient of curvature for a well graded soil, must be between",
                    options: [
                        { key: "a", text: "0.5 to 1.0" },
                        { key: "b", text: "3.0 to 4.0" },
                        { key: "c", text: "4.0 to 5.0" },
                        { key: "d", text: "1.0 to 3.0" }
                    ],
                    answer: "d",
                    explanation: "For a well-graded soil the coefficient of curvature must lie between 1 and 3, alongside a coefficient of uniformity greater than 4 for gravels or 6 for sands. A value outside that band shows a gap in the grading."
                },
                {
                    id: "cm2q047",
                    src: "SOIL136-00013",
                    text: "What is the value of the coefficient of uniformity for well-graded sand?",
                    options: [
                        { key: "a", text: "&gt;6" },
                        { key: "b", text: "&gt;4" },
                        { key: "c", text: "1 to 3" },
                        { key: "d", text: "&gt;10" }
                    ],
                    answer: "a",
                    explanation: "Sand is classed as well graded when its coefficient of uniformity exceeds 6, which means the particle sizes are spread widely enough for the small grains to pack into the voids between the large ones. For gravel the corresponding limit is 4."
                }
            ]
        },
        {
            id: "cm2watr",
            name: "Basic Water Resources Engineering",
            subject: "Water Resources",
            accent: "emerald",
            blurb: "12 questions drawn from the Basic Water Resources Engineering bank.",
            questions: [
                {
                    id: "cm2q048",
                    src: "WATE701-00001",
                    text: "The rise of a liquid in a capillary tube depends on",
                    options: [
                        { key: "a", text: "the material" },
                        { key: "b", text: "the inner radius of the tube." },
                        { key: "c", text: "the length" },
                        { key: "d", text: "the outer radius" }
                    ],
                    answer: "b",
                    explanation: "Capillary rise follows h equal to 2T cos theta divided by rho g r, where r is the inner radius of the tube. The rise is inversely proportional to that radius, so a finer bore lifts the liquid higher, and the outer diameter and tube length play no part."
                },
                {
                    id: "cm2q049",
                    src: "WATE701-00002",
                    text: "Match the following. A. Capillarity a. Cavitation B. Vapor pressure b. Density of water C. Viscosity c. Shear forces D. Specific gravity d. Surface tension",
                    options: [
                        { key: "a", text: "A-a, B-d, C-b, D-c" },
                        { key: "b", text: "A-a, B-d, C-c, D-b" },
                        { key: "c", text: "A-d, B-a, C-c, D-b" },
                        { key: "d", text: "A-d, B-a, C-b, D-c" }
                    ],
                    answer: "c",
                    explanation: "Capillarity is a surface tension effect, vapour pressure governs cavitation because bubbles form when local pressure drops to it, viscosity is the property that resists shear, and specific gravity is defined against the density of water. The matching is therefore A-d, B-a, C-c, D-b."
                },
                {
                    id: "cm2q050",
                    src: "WATE701-00003",
                    text: "Maximum density of water at...... Degree Celsius.",
                    options: [
                        { key: "a", text: "0 degree" },
                        { key: "b", text: "100 degree" },
                        { key: "c", text: "-4 degree" },
                        { key: "d", text: "4 degree" }
                    ],
                    answer: "d",
                    explanation: "Water reaches its maximum density of about 1000 kg per cubic metre at 4 degrees Celsius. Below that temperature it expands again as hydrogen bonding opens the structure, which is why ice floats and why lakes freeze from the surface down."
                },
                {
                    id: "cm2q051",
                    src: "WATE701-00004",
                    text: "Bulk modulus of liquid",
                    options: [
                        { key: "a", text: "increases with pressure." },
                        { key: "b", text: "Is independent of temperature." },
                        { key: "c", text: "is independent of pressure and viscosity." },
                        { key: "d", text: "is larger when the fluid is more compressible." }
                    ],
                    answer: "a",
                    explanation: "The bulk modulus measures resistance to compression, and a liquid stiffens as it is squeezed, so the modulus rises with pressure. A large bulk modulus means the fluid is hard to compress, which is the opposite of the statement that it is larger for a more compressible fluid."
                },
                {
                    id: "cm2q052",
                    src: "WATE701-00005",
                    text: "Buoyancy force is",
                    options: [
                        { key: "a", text: "Force on submerged body" },
                        { key: "b", text: "Force acts in the opposite direction to the weight of an object submerged in a fluid" },
                        { key: "c", text: "Force exerted by surrounding fluid" },
                        { key: "d", text: "Force experienced by an object due to its weight in the absence of any fluid" }
                    ],
                    answer: "b",
                    explanation: "Buoyancy is the upward thrust exerted by the surrounding fluid, equal to the weight of fluid displaced and acting opposite to the weight of the body. It arises because pressure increases with depth, so the upward push on the base exceeds the downward push on the top."
                },
                {
                    id: "cm2q053",
                    src: "WATE701-00006",
                    text: "A non newtonian fluid is one which",
                    options: [
                        { key: "a", text: "Is a mathematical concept" },
                        { key: "b", text: "Follow that Shear stress is directly proportional to velocity gradient" },
                        { key: "c", text: "Doesn't follow Newton's law of viscosity" },
                        { key: "d", text: "Has properties of real fluid" }
                    ],
                    answer: "c",
                    explanation: "A non-Newtonian fluid is one whose shear stress is not simply proportional to the velocity gradient, so its apparent viscosity changes with the rate of shear. Fresh concrete, drilling mud, paint and blood behave this way."
                },
                {
                    id: "cm2q054",
                    src: "WATE701-00007",
                    text: "Two Soap bubbles have d and 2d diameter respectively. Which bubble have more internal pressure?",
                    options: [
                        { key: "a", text: "same for both bubble" },
                        { key: "b", text: "with dia 2d" },
                        { key: "c", text: "can not be said until calculated" },
                        { key: "d", text: "with dia d" }
                    ],
                    answer: "d",
                    explanation: "For a soap bubble the excess internal pressure is 8 sigma divided by the diameter, because there are two liquid surfaces. Pressure is therefore inversely proportional to size, so the smaller bubble of diameter d holds the higher internal pressure."
                },
                {
                    id: "cm2q055",
                    src: "WATE701-00008",
                    text: "Specific volume is defined as reciprocal of",
                    options: [
                        { key: "a", text: "density" },
                        { key: "b", text: "specific gravity" },
                        { key: "c", text: "relative density" },
                        { key: "d", text: "mass" }
                    ],
                    answer: "a",
                    explanation: "Specific volume is the volume occupied by unit mass, so it is simply the reciprocal of density. Specific gravity and relative density are dimensionless ratios and have no such inverse relationship."
                },
                {
                    id: "cm2q056",
                    src: "WATE701-00009",
                    text: "The pressure at a point in a fluid will not be same in all directions when the fluid is",
                    options: [
                        { key: "a", text: "Moving" },
                        { key: "b", text: "Viscous and moving" },
                        { key: "c", text: "Viscous" },
                        { key: "d", text: "Viscous and static" }
                    ],
                    answer: "b",
                    explanation: "In a static fluid, or in any inviscid fluid, pressure at a point is the same in every direction, which is Pascal's law. Direction dependence appears only when viscous shear stresses act, and that needs the fluid to be both viscous and in motion."
                },
                {
                    id: "cm2q057",
                    src: "WATE701-00010",
                    text: "The radius of curvature of the arc of the bubble tube is generally kept",
                    options: [
                        { key: "a", text: "10 m" },
                        { key: "b", text: "25 m" },
                        { key: "c", text: "100 m" },
                        { key: "d", text: "50 m" }
                    ],
                    answer: "c",
                    explanation: "The bubble tube of a level is ground to a large radius of curvature, about 100 metres, so that the bubble moves a visible distance for a very small tilt. A shorter radius would make the bubble less sensitive and the levelling less precise."
                },
                {
                    id: "cm2q058",
                    src: "WATE701-00011",
                    text: "Coefficient of friction for laminar flow is",
                    options: [
                        { key: "a", text: "16/Re" },
                        { key: "b", text: "24/Re" },
                        { key: "c", text: "32/Re" },
                        { key: "d", text: "64/Re" }
                    ],
                    answer: "d",
                    explanation: "For laminar pipe flow the Darcy-Weisbach friction factor depends only on the Reynolds number, f equal to 64 divided by Re. Roughness has no effect in this regime because the flow near the wall is smooth and orderly."
                },
                {
                    id: "cm2q059",
                    src: "WATE701-00012",
                    text: "With increase in temperature, viscosity......",
                    options: [
                        { key: "a", text: "Decreases" },
                        { key: "b", text: "Increase" },
                        { key: "c", text: "Remains same" },
                        { key: "d", text: "Cannot be said" }
                    ],
                    answer: "a",
                    explanation: "In a liquid, viscosity comes mainly from cohesion between molecules, and heating loosens those bonds, so viscosity falls as temperature rises. Gases behave the other way round, since their viscosity comes from molecular momentum exchange."
                }
            ]
        },
        {
            id: "cm2hydr",
            name: "Hydropower",
            subject: "Hydropower",
            accent: "cyan",
            blurb: "9 questions drawn from the Hydropower bank.",
            questions: [
                {
                    id: "cm2q060",
                    src: "HYDR626-00001",
                    text: "Hydroelectric power plant is",
                    options: [
                        { key: "a", text: "Non-renewable source of energy" },
                        { key: "b", text: "Conventional source of energy" },
                        { key: "c", text: "Non-conventional source of energy" },
                        { key: "d", text: "Continuous source of energy" }
                    ],
                    answer: "b",
                    explanation: "Hydroelectric generation is classed as a conventional source because it has been used commercially for well over a century and relies on established, large-scale technology. Solar, wind, biogas and tidal are the non-conventional sources."
                },
                {
                    id: "cm2q061",
                    src: "HYDR626-00002",
                    text: "Which of the following is not an advantage of a hydroelectric power plant?",
                    options: [
                        { key: "a", text: "No fuel requirement" },
                        { key: "b", text: "Low running cost" },
                        { key: "c", text: "Continuous power source" },
                        { key: "d", text: "No standby losses" }
                    ],
                    answer: "c",
                    explanation: "Hydropower does have low running costs, needs no fuel and has no standby losses, but its output depends on river flow, which falls in the dry season and in droughts. A continuous, guaranteed supply is therefore not one of its advantages."
                },
                {
                    id: "cm2q062",
                    src: "HYDR626-00003",
                    text: "Identify correct statement about hydropower.",
                    options: [
                        { key: "a", text: "Hydropower stations are generally labor oriented" },
                        { key: "b", text: "The gestation period for hydropower plant is usually small." },
                        { key: "c", text: "In a hydropower scheme, the firm power is usually high as compared to tidal power" },
                        { key: "d", text: "The hydro generators give high efficiency over a wide range of load" }
                    ],
                    answer: "d",
                    explanation: "Hydro turbines and generators hold high efficiency across a wide range of loads, which is why hydro plants are so useful for following demand. Hydro schemes are capital intensive rather than labour oriented, and their gestation period is long, not short."
                },
                {
                    id: "cm2q063",
                    src: "HYDR626-00004",
                    text: "Most reliable power is",
                    options: [
                        { key: "a", text: "combined system and hydroelectric power" },
                        { key: "b", text: "Hydroelectric power" },
                        { key: "c", text: "wind power" },
                        { key: "d", text: "diesel power" }
                    ],
                    answer: "a",
                    explanation: "A hydroelectric plant working as part of a combined system is the most reliable arrangement, because thermal or other units cover the dry season when river flow is low while hydro carries the peaks. Hydro alone is exposed to hydrological variation."
                },
                {
                    id: "cm2q064",
                    src: "HYDR626-00005",
                    text: "The power available continuously is.",
                    options: [
                        { key: "a", text: "secondary power" },
                        { key: "b", text: "firm power" },
                        { key: "c", text: "plant power" },
                        { key: "d", text: "water power" }
                    ],
                    answer: "b",
                    explanation: "Firm power is the output that can be guaranteed at all times, based on the minimum flow the river can be relied upon to provide. Anything generated above that during high flows is secondary or surplus power, which cannot be promised to consumers."
                },
                {
                    id: "cm2q065",
                    src: "HYDR626-00006",
                    text: "If operating cost is high but the plant offers great flexibility, the plant is used for",
                    options: [
                        { key: "a", text: "base load only" },
                        { key: "b", text: "base load and peak load" },
                        { key: "c", text: "peak load only" },
                        { key: "d", text: "we don’t use such plant" }
                    ],
                    answer: "c",
                    explanation: "A plant with a high running cost but quick, flexible response is uneconomic to run continuously, so it is reserved for peak load. Base load is carried by the plants with the lowest running cost, which are run flat out around the clock."
                },
                {
                    id: "cm2q066",
                    src: "HYDR626-00007",
                    text: "A hydropower plant is going to be installed in Nepal. The power plant has the following characteristics: Gross Head (H) = 25 m, Design flow (Q) = 0.7 m3/s &amp; The length of the penstock pipe (L) is 500 m long. the effective diameter of penstock pipe required is?",
                    options: [
                        { key: "a", text: "0.567m" },
                        { key: "b", text: "0.75m" },
                        { key: "c", text: "0.87m" },
                        { key: "d", text: "0.667m" }
                    ],
                    answer: "d",
                    explanation: "Penstocks are sized on a design velocity of about 2 m/s. The area needed is A equal to Q divided by V, that is 0.7 divided by 2, which is 0.35 square metres, and D equal to the square root of 4A over pi gives 0.667 m."
                },
                {
                    id: "cm2q067",
                    src: "HYDR626-00008",
                    text: "The flow duration curve at a given head of a hydroelectric plant is used to determine",
                    options: [
                        { key: "a", text: "total units of energy available." },
                        { key: "b", text: "total power available at the site." },
                        { key: "c", text: "load-factor at the plant." },
                        { key: "d", text: "diversity factor for the plant." }
                    ],
                    answer: "a",
                    explanation: "The flow duration curve shows the fraction of time each discharge is equalled or exceeded, so the area under the corresponding power curve gives the total energy, in units, available in a year. It cannot by itself give load factor or diversity factor, which depend on demand."
                },
                {
                    id: "cm2q068",
                    src: "HYDR626-00009",
                    text: "Coincidence factor is the reciprocal of?",
                    options: [
                        { key: "a", text: "Total demand" },
                        { key: "b", text: "Diversity factor" },
                        { key: "c", text: "Load factor" },
                        { key: "d", text: "Plant factor" }
                    ],
                    answer: "b",
                    explanation: "The diversity factor is the sum of the individual maximum demands divided by the maximum demand of the system. The coincidence factor is its reciprocal and expresses the fraction of the individual peaks that actually occur together."
                }
            ]
        },
        {
            id: "cm2irri",
            name: "Irrigation and Drainage",
            subject: "Irrigation",
            accent: "emerald",
            blurb: "11 questions drawn from the Irrigation and Drainage bank.",
            questions: [
                {
                    id: "cm2q069",
                    src: "IRRI951-00001",
                    text: "Which crop has highest water resistance?",
                    options: [
                        { key: "a", text: "Wheat" },
                        { key: "b", text: "Rice" },
                        { key: "c", text: "Millet" },
                        { key: "d", text: "all" }
                    ],
                    answer: "c",
                    explanation: "Millet is the most drought resistant of the crops listed: it has a short growing season, a deep fibrous root system and low consumptive use, so it survives on limited moisture where rice, which needs standing water, would fail."
                },
                {
                    id: "cm2q070",
                    src: "IRRI951-00002",
                    text: "Weight of Capillary water is **holded by**?",
                    options: [
                        { key: "a", text: "Shear force" },
                        { key: "b", text: "Cohesion" },
                        { key: "c", text: "Molecular forces" },
                        { key: "d", text: "Surface tension" }
                    ],
                    answer: "d",
                    explanation: "Capillary water is held in the small pores against gravity by surface tension at the air-water interfaces, aided by adhesion to the soil grains. It is the fraction that plants can actually draw on, between field capacity and the wilting point."
                },
                {
                    id: "cm2q071",
                    src: "IRRI951-00003",
                    text: "Saline soil can be improved by",
                    options: [
                        { key: "a", text: "Leaching" },
                        { key: "b", text: "Pyrite application" },
                        { key: "c", text: "Gypsum application" },
                        { key: "d", text: "Lime application" }
                    ],
                    answer: "a",
                    explanation: "The most effective method for improving saline soils is leaching, as it directly removes soluble salts from the root zone. For soils that are both saline and sodic, combining leaching with gypsum application can be beneficial. Gypsum provides calcium ions that help displace sodium ions, improving soil structure and facilitating further leaching."
                },
                {
                    id: "cm2q072",
                    src: "IRRI951-00004",
                    text: "The consumptive use of water for a crop",
                    options: [
                        { key: "a", text: "Is measured as the volume of water per unit area" },
                        { key: "b", text: "Is measured as depth of water on irrigated area" },
                        { key: "c", text: "may be supplied partly by precipitation and partly by irrigation" },
                        { key: "d", text: "all the above" }
                    ],
                    answer: "d",
                    explanation: "All the descriptions apply. Consumptive use is the water evaporated and transpired by a crop, and it is quoted either as a volume per unit area or as an equivalent depth over the irrigated area, met partly by rainfall and partly by irrigation."
                },
                {
                    id: "cm2q073",
                    src: "IRRI951-00005",
                    text: "What is the name of water which flows under gravity?",
                    options: [
                        { key: "a", text: "Hygroscopic Water" },
                        { key: "b", text: "Capillary Water" },
                        { key: "c", text: "Gravity Water" },
                        { key: "d", text: "Residue Water" }
                    ],
                    answer: "c",
                    explanation: "Gravity water, also called free or drainable water, is the fraction that drains out of the large pores under its own weight after irrigation or rain. What the soil retains against gravity is the field capacity."
                },
                {
                    id: "cm2q074",
                    src: "IRRI951-00006",
                    text: "Which of the following water is usable to plant?",
                    options: [
                        { key: "a", text: "Hygroscopic" },
                        { key: "b", text: "Chemical" },
                        { key: "c", text: "Gravity" },
                        { key: "d", text: "capillary" }
                    ],
                    answer: "d",
                    explanation: "Plants draw on capillary water, the moisture held in the fine pores between field capacity and the permanent wilting point. Gravity water drains away before the roots can use it, and hygroscopic water is held far too tightly for roots to extract."
                },
                {
                    id: "cm2q075",
                    src: "IRRI951-00007",
                    text: "What is ponding?",
                    options: [
                        { key: "a", text: "Hold back of water to form pond" },
                        { key: "b", text: "Storing water for using in peak period" },
                        { key: "c", text: "Storing water for long period of time" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "a",
                    explanation: "Ponding means holding water back on the surface so that it stands as a shallow pond, as in paddy fields or in a recharge basin. It raises the head available to drive infiltration and keeps the crop's root zone saturated."
                },
                {
                    id: "cm2q076",
                    src: "IRRI951-00008",
                    text: "Water available for plants is.",
                    options: [
                        { key: "a", text: "FC" },
                        { key: "b", text: "FC-PWP" },
                        { key: "c", text: "PWP" },
                        { key: "d", text: "RWW-PWP" }
                    ],
                    answer: "b",
                    explanation: "The water a crop can actually use is the available water, the difference between field capacity and the permanent wilting point. Above field capacity the water drains away, and below the wilting point the remaining moisture is held too tightly for roots to extract."
                },
                {
                    id: "cm2q077",
                    src: "IRRI951-00009",
                    text: "What is consumptive use in terms of losses?",
                    options: [
                        { key: "a", text: "Evaporation, Infiltration, and Transpiration" },
                        { key: "b", text: "Evaporation and Infiltration" },
                        { key: "c", text: "Evaporation and Transpiration" },
                        { key: "d", text: "Evaporation and the conveyance losses" }
                    ],
                    answer: "c",
                    explanation: "Consumptive use covers the two losses that remove water from the field to the atmosphere: evaporation from the soil and water surfaces, and transpiration through the crop. Infiltration and conveyance losses go elsewhere in the system and are counted separately."
                },
                {
                    id: "cm2q078",
                    src: "IRRI951-00010",
                    text: "Farm pond is used for.",
                    options: [
                        { key: "a", text: "Erosion control" },
                        { key: "b", text: "Flood control" },
                        { key: "c", text: "Runoff control" },
                        { key: "d", text: "Water storage" }
                    ],
                    answer: "d",
                    explanation: "A farm pond is a small excavated or embanked reservoir that stores runoff or surplus irrigation water on the holding itself, so that it can be used later for supplementary irrigation, livestock or fish."
                },
                {
                    id: "cm2q079",
                    src: "IRRI951-00011",
                    text: "Capacity of an irrigation channel is fixed based on:",
                    options: [
                        { key: "a", text: "Cultivable command area and water transmission losses" },
                        { key: "b", text: "Duty of water" },
                        { key: "c", text: "Time factor" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "Channel capacity depends on all of these together: the cultivable command area to be served, the duty of water for the crops grown, the time factor or how much of the period the channel actually runs, and the seepage and evaporation losses in transmission."
                }
            ]
        },
        {
            id: "cm2tran",
            name: "Transportation",
            subject: "Transportation",
            accent: "rose",
            blurb: "11 questions drawn from the Transportation bank.",
            questions: [
                {
                    id: "cm2q080",
                    src: "TRAN808-00001",
                    text: "A road inside the city is called.",
                    options: [
                        { key: "a", text: "ring road" },
                        { key: "b", text: "street" },
                        { key: "c", text: "highway" },
                        { key: "d", text: "trunk road" }
                    ],
                    answer: "b",
                    explanation: "A street is a road within a town or city, normally lined with buildings and carrying local traffic at low speed. Highways and trunk roads connect settlements, while a ring road bypasses the built-up area entirely."
                },
                {
                    id: "cm2q081",
                    src: "TRAN808-00002",
                    text: "Which can be a feeder for other means of transportation?",
                    options: [
                        { key: "a", text: "Rail" },
                        { key: "b", text: "Waterway" },
                        { key: "c", text: "Roadway" },
                        { key: "d", text: "Airway" }
                    ],
                    answer: "c",
                    explanation: "Roads reach every doorstep, so they act as the feeder that collects traffic and delivers it to railway stations, ports and airports. Rail, water and air transport all end at fixed terminals and depend on road links for the first and last leg."
                },
                {
                    id: "cm2q082",
                    src: "TRAN808-00003",
                    text: "In which stage of survey, soil survey is done?",
                    options: [
                        { key: "a", text: "Reconnaissance" },
                        { key: "b", text: "Map study" },
                        { key: "c", text: "Topography study" },
                        { key: "d", text: "Preliminary survey" }
                    ],
                    answer: "d",
                    explanation: "Soil and material surveys belong to the preliminary survey stage, where a few shortlisted alignments are examined in detail with soil tests, drainage studies and traffic estimates. Reconnaissance is only a rapid field inspection of a broad corridor."
                },
                {
                    id: "cm2q083",
                    src: "TRAN808-00004",
                    text: "Which is not the fixed component?",
                    options: [
                        { key: "a", text: "Railway locomotive" },
                        { key: "b", text: "Airport" },
                        { key: "c", text: "Harbor" },
                        { key: "d", text: "Railroad track" }
                    ],
                    answer: "a",
                    explanation: "Fixed components are the permanent installations: track, airports and harbours. A locomotive is rolling stock, the moving component that travels over that fixed infrastructure."
                },
                {
                    id: "cm2q084",
                    src: "TRAN808-00005",
                    text: "Formula of mechanical extra widening in road is",
                    options: [
                        { key: "a", text: "Wm=nI²/127R" },
                        { key: "b", text: "Wm=nI²/2R" },
                        { key: "c", text: "Wm=nI²/254R" },
                        { key: "d", text: "Wm=nI²/R" }
                    ],
                    answer: "b",
                    explanation: "Mechanical widening allows for the extra width a rigid vehicle occupies on a curve, and is given by Wm equal to n l squared divided by 2R, where n is the number of lanes, l the wheelbase and R the radius. The 127R and 254R forms belong to psychological widening and superelevation."
                },
                {
                    id: "cm2q085",
                    src: "TRAN808-00006",
                    text: "What is the process dealing with vertical curves and gradients?",
                    options: [
                        { key: "a", text: "Vertical control" },
                        { key: "b", text: "Horizontal alignment" },
                        { key: "c", text: "Vertical alignment" },
                        { key: "d", text: "Levelling" }
                    ],
                    answer: "c",
                    explanation: "Vertical alignment is the profile of the road along its length, made up of gradients joined by summit and valley curves. Horizontal alignment deals with the plan view, the straights and the circular and transition curves."
                },
                {
                    id: "cm2q086",
                    src: "TRAN808-00007",
                    text: "The relationship between SSD and ISD is",
                    options: [
                        { key: "a", text: "SSD = ISD" },
                        { key: "b", text: "SSD = 1.5 SSD" },
                        { key: "c", text: "SSD = ISD + OSD" },
                        { key: "d", text: "ISD = 2 SSD" }
                    ],
                    answer: "d",
                    explanation: "Intermediate sight distance is defined as twice the stopping sight distance. It is provided where full overtaking sight distance cannot be achieved, so that a driver at least has room to see and stop for an oncoming vehicle in the same lane."
                },
                {
                    id: "cm2q087",
                    src: "TRAN808-00008",
                    text: "Enoscope is used to determine",
                    options: [
                        { key: "a", text: "spot speed" },
                        { key: "b", text: "average speed" },
                        { key: "c", text: "travel time" },
                        { key: "d", text: "none of these" }
                    ],
                    answer: "a",
                    explanation: "The enoscope is a simple right-angled mirror set at the roadside that lets an observer see a vehicle cross a mark without parallax error. Timing the vehicle over a short measured base gives its spot speed at that point."
                },
                {
                    id: "cm2q088",
                    src: "TRAN808-00009",
                    text: "The length visible to driver at any instance of time is called",
                    options: [
                        { key: "a", text: "Head light distance" },
                        { key: "b", text: "Sight distance" },
                        { key: "c", text: "Overtaking sight distance" },
                        { key: "d", text: "none" }
                    ],
                    answer: "b",
                    explanation: "Sight distance is the length of road ahead that is visible to the driver from a given position. Stopping, overtaking and intermediate sight distances are particular cases of it, each defined for a different manoeuvre."
                },
                {
                    id: "cm2q089",
                    src: "TRAN808-00010",
                    text: "Which of the following is not considered when designing highways?",
                    options: [
                        { key: "a", text: "Cross-section" },
                        { key: "b", text: "Level of service" },
                        { key: "c", text: "Settlement" },
                        { key: "d", text: "Sight distance" }
                    ],
                    answer: "c",
                    explanation: "Cross-section, level of service and sight distance are all part of geometric design. Settlement is a soil and foundation consideration handled in earthwork and pavement design, not in the geometric design of the highway."
                },
                {
                    id: "cm2q090",
                    src: "TRAN808-00011",
                    text: "'Clearance time' is indicated by",
                    options: [
                        { key: "a", text: "Red" },
                        { key: "b", text: "Green" },
                        { key: "c", text: "White" },
                        { key: "d", text: "Amber" }
                    ],
                    answer: "d",
                    explanation: "The amber interval is the clearance time, giving vehicles already in or approaching the intersection enough time to stop or to clear it before the conflicting green begins. Red is the stop interval and green the go interval."
                }
            ]
        },
        {
            id: "cm2wate",
            name: "Water Supply, Sanitation and Environment",
            subject: "Water Supply",
            accent: "blue",
            blurb: "10 questions drawn from the Water Supply, Sanitation and Environment bank.",
            questions: [
                {
                    id: "cm2q091",
                    src: "WATE813-00001",
                    text: "Water may not contain much impurities if its source is",
                    options: [
                        { key: "a", text: "spring along hill slopes" },
                        { key: "b", text: "reservoirs" },
                        { key: "c", text: "stream flowing in plains." },
                        { key: "d", text: "lake in lower regions." }
                    ],
                    answer: "a",
                    explanation: "Springs on hill slopes deliver water that has been filtered through the soil and rock, in a catchment with little habitation, so it carries very little suspended matter or pollution. Streams in the plains, lakes and reservoirs collect runoff and waste from a much larger populated area."
                },
                {
                    id: "cm2q092",
                    src: "WATE813-00002",
                    text: "Demography is the study of",
                    options: [
                        { key: "a", text: "culture" },
                        { key: "b", text: "population" },
                        { key: "c", text: "heritage" },
                        { key: "d", text: "environmental change" }
                    ],
                    answer: "b",
                    explanation: "Demography is the statistical study of populations: their size, age structure, births, deaths and migration. Water supply design depends on it directly, because the design population fixes the demand the scheme must meet."
                },
                {
                    id: "cm2q093",
                    src: "WATE813-00003",
                    text: "The per capita demand of water is calculated in liters",
                    options: [
                        { key: "a", text: "per person per year" },
                        { key: "b", text: "per person per month" },
                        { key: "c", text: "per person per day" },
                        { key: "d", text: "per peak hour consumption" }
                    ],
                    answer: "c",
                    explanation: "Per capita demand is expressed in litres per person per day, usually written lpcd. Multiplying it by the design population gives the average daily demand from which the source, treatment and distribution capacities follow."
                },
                {
                    id: "cm2q094",
                    src: "WATE813-00004",
                    text: "Harmful bacteria are called",
                    options: [
                        { key: "a", text: "Parasites" },
                        { key: "b", text: "Aerobic" },
                        { key: "c", text: "Anaerobic" },
                        { key: "d", text: "Pathogens" }
                    ],
                    answer: "d",
                    explanation: "Pathogens are the disease-causing organisms in water, including bacteria such as those of cholera and typhoid, along with viruses, protozoa and helminths. Most bacteria in water are harmless, and aerobic and anaerobic describe how organisms respire rather than whether they cause disease."
                },
                {
                    id: "cm2q095",
                    src: "WATE813-00005",
                    text: "Blue baby syndrome is caused due to",
                    options: [
                        { key: "a", text: "Nitrate" },
                        { key: "b", text: "Nitrite" },
                        { key: "c", text: "Chloride" },
                        { key: "d", text: "Sulphate" }
                    ],
                    answer: "a",
                    explanation: "Blue baby syndrome, or methaemoglobinaemia, is caused by nitrate in drinking water. In an infant's gut nitrate is reduced to nitrite, which converts haemoglobin to methaemoglobin so it can no longer carry oxygen, and the skin takes on a bluish colour."
                },
                {
                    id: "cm2q096",
                    src: "WATE813-00006",
                    text: "Such bacteria that grow more at high temperature (40 to 70°C) are called",
                    options: [
                        { key: "a", text: "Mesophilic" },
                        { key: "b", text: "Thermophilic" },
                        { key: "c", text: "Hyper Thermophilic" },
                        { key: "d", text: "Psychrophilic" }
                    ],
                    answer: "b",
                    explanation: "Thermophilic bacteria thrive between about 40 and 70 degrees Celsius. Mesophilic organisms prefer the 20 to 40 degree range, and psychrophilic ones work at low temperatures, a distinction that matters when choosing a digester operating temperature."
                },
                {
                    id: "cm2q097",
                    src: "WATE813-00007",
                    text: "Trachoma can be avoided by",
                    options: [
                        { key: "a", text: "Increasing water supply" },
                        { key: "b", text: "Adding chlorine to water" },
                        { key: "c", text: "Providing clean water" },
                        { key: "d", text: "Not providing excess water" }
                    ],
                    answer: "c",
                    explanation: "Trachoma is an eye infection spread by contact and by flies, and it is controlled by having enough clean water for regular face and hand washing. It is a water-washed disease, so hygiene rather than chlorination is the key."
                },
                {
                    id: "cm2q098",
                    src: "WATE813-00008",
                    text: "Turbidity of water is expressed.",
                    options: [
                        { key: "a", text: "In numbers in an arbitrary scale" },
                        { key: "b", text: "by pH value" },
                        { key: "c", text: "by color code." },
                        { key: "d", text: "In ppm" }
                    ],
                    answer: "d",
                    explanation: "Turbidity has traditionally been reported in parts per million on the silica scale, where 1 ppm corresponds to the effect of 1 mg of silica per litre. Modern practice uses nephelometric turbidity units, which are numerically comparable."
                },
                {
                    id: "cm2q099",
                    src: "WATE813-00009",
                    text: "Which method is used to measure the color of water?",
                    options: [
                        { key: "a", text: "Tintometer method" },
                        { key: "b", text: "Gravimetric analysis" },
                        { key: "c", text: "Chromatography" },
                        { key: "d", text: "Hydrometer analysis" }
                    ],
                    answer: "a",
                    explanation: "Colour is measured with a tintometer, which compares the sample against calibrated coloured glass slides on the platinum-cobalt scale. Gravimetric analysis and chromatography measure the mass and identity of constituents, not the visual colour."
                },
                {
                    id: "cm2q100",
                    src: "WATE813-00010",
                    text: "A disease which is widespread and can reach globally is termed as",
                    options: [
                        { key: "a", text: "Epidemic" },
                        { key: "b", text: "Pandemic" },
                        { key: "c", text: "Endemic" },
                        { key: "d", text: "Hyper-endemic" }
                    ],
                    answer: "b",
                    explanation: "A pandemic is an outbreak that has spread across countries or continents. An epidemic is confined to one community or region at a time, while an endemic disease is constantly present in an area at a fairly steady level."
                }
            ]
        }
    ]
};

/* Registered lazily — js/civil.js injects this file when the set is opened. */
window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["civil-2"] = CIVIL_MODEL_2;
