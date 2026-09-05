(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    Object.assign(window.CIVIL_NOTE_TOPICS, {
        ACiE0101: {
            code: "ACiE0101",
            questionCount: 81,
            blocks: [
                {
                    id: "properties",
                    title: "Material properties and selection",
                    html: "<p>Engineering materials are substances used to construct buildings and infrastructure. Selection begins with the service requirement: a load-bearing member, exposed surface and decorative finish need different combinations of properties. Wood is organic; earth, gypsum and lime are inorganic.</p>" +
                        "<table><thead><tr><th scope='col'>Property group</th><th scope='col'>Meaning for selection</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Physical</th><td>Density, porosity and moisture behaviour affect weight and water uptake.</td></tr>" +
                        "<tr><th scope='row'>Chemical</th><td>Hydration, oxidation and chemical attack affect binding and durability.</td></tr>" +
                        "<tr><th scope='row'>Mechanical</th><td>Stress capacity and deformation govern load resistance.</td></tr>" +
                        "<tr><th scope='row'>Thermal</th><td>Expansion, heat transfer and temperature response affect movement and serviceability.</td></tr></tbody></table>" +
                        "<p>Polymorphism concerns alternative crystal structures. It is a real material characteristic, not another broad property group comparable with those above.</p>",
                    sources: [
                        { id: "BASI674-00090", set: 8, question: 11 },
                        { id: "BASI674-00288", set: 23, question: 5 },
                        { id: "TRAN808-00155", set: 15, question: 87 },
                        { id: "TRAN808-00156", set: 15, question: 88 }
                    ]
                },
                {
                    id: "mechanical-behaviour",
                    title: "Strength, hardness and deformation",
                    html: "<p><strong>Strength</strong> is stress capacity; <strong>stiffness</strong> is resistance to elastic deformation, represented by modulus E. Neither means hardness.</p>" +
                        "<table><thead><tr><th scope='col'>Property</th><th scope='col'>Distinguishing behaviour</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Hardness</th><td>Resistance to scratching, abrasion or indentation.</td></tr>" +
                        "<tr><th scope='row'>Toughness</th><td>Energy absorbed before fracture; important under impact.</td></tr>" +
                        "<tr><th scope='row'>Ductility</th><td>Plastic extension under tension, as in drawing wire.</td></tr>" +
                        "<tr><th scope='row'>Malleability</th><td>Plastic deformation under compression, as in hammering or rolling sheets.</td></tr>" +
                        "<tr><th scope='row'>Creep</th><td>Increasing strain with time under sustained stress.</td></tr>" +
                        "<tr><th scope='row'>Fatigue</th><td>Damage and possible failure under repeated stress cycles.</td></tr></tbody></table>" +
                        "<p>Alumina exemplifies a hard but brittle ceramic. Brittle materials generally resist compression better than tension because tensile stress opens cracks. Brinell, Vickers and Rockwell tests indent surfaces; they do not directly measure bulk strength. Fatigue testing investigates cyclic endurance. An endurance limit, where present, is the stress-amplitude threshold for an idealized infinite-life fatigue response; not every material has one.</p>",
                    sources: [
                        { id: "BASI674-00094", set: 9, question: 2 },
                        { id: "BASI674-00101", set: 9, question: 9 },
                        { id: "BASI674-00167", set: 14, question: 7 },
                        { id: "DESI787-00238", set: 26, question: 28 },
                        { id: "DESI787-00244", set: 26, question: 34 },
                        { id: "STRU935-00256", set: 24, question: 20 },
                        { id: "STRU935-00257", set: 24, question: 21 },
                        { id: "STRU935-00297", set: 28, question: 15 }
                    ]
                },
                {
                    id: "stone-selection",
                    title: "Stone composition and use",
                    html: "<p>Separate <strong>origin</strong> from <strong>composition</strong>: granite is igneous; quartzite is metamorphosed sandstone and is siliceous. Limestone and marble are calcareous; slate is clay-derived, or argillaceous. Metamorphism changes existing rock through heat and pressure without melting.</p>" +
                        "<p>Select stone for strength, porosity, wear resistance and exposure. Sound granite is useful for heavily loaded bridge components, foundations and road aggregate. Freestone can be dressed in different directions without pronounced cleavage; the name does not mean that dressing is unnecessary. Circular-dressed stone can form pillars or columns.</p>" +
                        "<p>The bank's crushing-strength figure <strong>&gt;100 MPa</strong> and absorption figure <strong>&lt;5%</strong> are generic exam heuristics, not universal acceptance criteria. Strong stone is not automatically fire-resistant: thermal gradients can crack or spall it. Neither stone nor brick is superior under every exposure.</p>",
                    sources: [
                        { id: "BASI674-00008", set: 2, question: 8 },
                        { id: "BASI674-00091", set: 8, question: 12 },
                        { id: "BASI674-00092", set: 8, question: 13 },
                        { id: "BASI674-00097", set: 9, question: 5 },
                        { id: "BASI674-00105", set: 9, question: 12 },
                        { id: "BASI674-00106", set: 9, question: 13 },
                        { id: "BASI674-00201", set: 16, question: 13 },
                        { id: "BASI674-00202", set: 17, question: 1 },
                        { id: "TRAN808-00136", set: 14, question: 80 }
                    ]
                },
                {
                    id: "bricks-and-tiles",
                    title: "Bricks, terracotta and tiles",
                    html: "<p>Fired bricks are clay products. A <strong>frog</strong> is a moulded depression that can provide a mortar key; joint filling still matters. Sand tempers plastic brick earth, reducing drying shrinkage and associated cracking or warping rather than guaranteeing their elimination.</p>" +
                        "<table><thead><tr><th scope='col'>Product</th><th scope='col'>Useful distinction</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Terracotta</th><td>Moulded, burnt clay for ornamental details and panels.</td></tr>" +
                        "<tr><th scope='row'>Quarry tile</th><td>Unglazed ceramic, not necessarily quarried stone.</td></tr>" +
                        "<tr><th scope='row'>Cork tile</th><td>Resilient, insulating and sound-absorbing flooring.</td></tr>" +
                        "<tr><th scope='row'>Water-resistant tile</th><td>Limits surface water uptake; not a complete waterproofing system.</td></tr></tbody></table>" +
                        "<p>Waterproofing also requires suitable joints, bedding and drainage. The bank lists floor-tile examples of 15 × 15 × 1.8, 20 × 20 × 2 and 22.5 × 22.5 × 2.2 cm; these are not mandatory dimensions for every product.</p>",
                    sources: [
                        { id: "BASI674-00004", set: 2, question: 4 },
                        { id: "BASI674-00016", set: 3, question: 3 },
                        { id: "BASI674-00022", set: 3, question: 9 },
                        { id: "BASI674-00027", set: 4, question: 1 },
                        { id: "BASI674-00116", set: 10, question: 10 },
                        { id: "BASI674-00117", set: 10, question: 11 },
                        { id: "BASI674-00279", set: 22, question: 10 }
                    ]
                },
                {
                    id: "cement-chemistry",
                    title: "Cement constituents and hydration",
                    html: "<p>Limestone supplies calcium carbonate for clinker; clay or shale supplies silica, alumina and iron oxides. Coal is fuel rather than the principal raw material. Calcium is the dominant metallic element. The bank's <strong>17–25% silica</strong> is an approximate oxide-composition range, not a site mixing proportion.</p>" +
                        "<p>In cement notation, C = CaO, S = SiO<sub>2</sub>, A = Al<sub>2</sub>O<sub>3</sub> and F = Fe<sub>2</sub>O<sub>3</sub>.</p>" +
                        "<table><thead><tr><th scope='col'>Principal clinker phase</th><th scope='col'>Role</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>C<sub>3</sub>S: tricalcium silicate</th><td>Faster hydration; principal early-strength contributor.</td></tr>" +
                        "<tr><th scope='row'>C<sub>2</sub>S: dicalcium silicate</th><td>Slower hydration; later-strength contribution.</td></tr>" +
                        "<tr><th scope='row'>C<sub>3</sub>A: tricalcium aluminate</th><td>Rapid reaction and high heat; gypsum controls flash setting. Sulfate vulnerability matters.</td></tr>" +
                        "<tr><th scope='row'>C<sub>4</sub>AF: tetracalcium aluminoferrite</th><td>Iron-bearing phase affecting colour; smaller strength contribution.</td></tr></tbody></table>" +
                        "<p>Hydration of the silicates forms <strong>C-S-H</strong>, the principal binding product. Calcium hydroxide is not the main strength-giving phase. Rapid strength gain must not be confused with uncontrolled setting.</p>",
                    sources: [
                        { id: "BASI674-00002", set: 2, question: 2 },
                        { id: "BASI674-00012", set: 2, question: 12 },
                        { id: "BASI674-00099", set: 9, question: 7 },
                        { id: "BASI674-00107", set: 10, question: 1 },
                        { id: "BASI674-00108", set: 10, question: 2 },
                        { id: "BASI674-00429", set: 33, question: 9 },
                        { id: "DESI787-00018", set: 3, question: 32 }
                    ]
                },
                {
                    id: "cement-and-lime",
                    title: "Cement and lime selection",
                    html: "<p>Select binders for exposure and finish. <strong>Sulfate-resisting cement</strong> addresses sulfate exposure, including affected treatment structures; it is not universal protection against sewage acids. White cement for architectural finishes and cement-based coatings has low colouring-oxide contents, not literally zero iron. Coloured cement incorporates pigments for decorative finishes and artificial marble. Rapid hardening concerns strength gain; quick setting concerns loss of plasticity.</p>" +
                        "<p>Fly ash is a coal-combustion byproduct used as a pozzolan: suitable reactive constituents combine with lime in moist conditions. Being a waste material alone does not establish suitability or a universal popularity ranking.</p>" +
                        "<p><strong>Hydraulic lime</strong> develops binding action in moist conditions. Fat-lime mortar can also be used where air carbonation is appropriate; hydraulic lime is not the only mortar lime.</p>" +
                        "<p><strong>Worked application of BASI674-00109:</strong> with the bank's loose bulk density of 1440 kg/m<sup>3</sup>, an illustrative 0.10 m<sup>3</sup> gives m = ρ<sub>bulk</sub>V = 1440 × 0.10 = 144 kg. Bulk density includes interparticle voids; it must not replace particle density in absolute-volume calculations.</p>",
                    sources: [
                        { id: "BASI674-00010", set: 2, question: 10 },
                        { id: "BASI674-00109", set: 10, question: 3 },
                        { id: "BASI674-00146", set: 12, question: 13 },
                        { id: "BASI674-00147", set: 13, question: 1 },
                        { id: "BASI674-00425", set: 33, question: 5 },
                        { id: "DESI787-00229", set: 25, question: 28 },
                        { id: "DESI787-00230", set: 25, question: 29 },
                        { id: "TRAN808-00129", set: 1, question: 82 }
                    ]
                },
                {
                    id: "timber-structure",
                    title: "Timber structure and grading",
                    html: "<p>Timber is <strong>anisotropic</strong>: longitudinal fibres make parallel-to-grain loading generally much stronger than loading across the grain. Grain continuity matters in tension; cross-grain forces encourage splitting. Sal exemplifies an exogenous tree with concentric growth rings, unlike the bank's traditional endogenous group of bamboo, palm and cane. A <strong>balk</strong> is a roughly squared log.</p>" +
                        "<p>Do not confuse a species stiffness group with a quality grade. The bank lists Select Grade, Grade I and Grade II; grading concerns defects and usable properties, not just the tree name. Fibreboards are bonded wood-fibre products whose actual product classification matters.</p>" +
                        "<p>The quoted tension/compression ratio, fibreboard density boundary and Group A modulus threshold are addressed in the cautions; they are not adopted as design values.</p>",
                    sources: [
                        { id: "BASI674-00111", set: 10, question: 5 },
                        { id: "BASI674-00205", set: 17, question: 4 },
                        { id: "DESI787-00064", set: 8, question: 29 },
                        { id: "DESI787-00068", set: 8, question: 33 },
                        { id: "DESI787-00077", set: 9, question: 33 },
                        { id: "DESI787-00128", set: 15, question: 26 },
                        { id: "DESI787-00129", set: 15, question: 27 },
                        { id: "DESI787-00130", set: 15, question: 28 },
                        { id: "DESI787-00132", set: 15, question: 30 }
                    ]
                },
                {
                    id: "timber-seasoning",
                    title: "Seasoning and timber defects",
                    html: "<p><strong>Seasoning</strong> reduces moisture toward service equilibrium; it does not waterproof timber. Drying reduces later dimensional movement and decay risk, but moisture uptake can recur.</p>" +
                        "<table><thead><tr><th scope='col'>Defect</th><th scope='col'>Mechanism or identification</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Checks</th><td>Local cracks associated with differential shrinkage.</td></tr>" +
                        "<tr><th scope='row'>Splits</th><td>Separation through the wood; poorly controlled rapid drying can contribute.</td></tr>" +
                        "<tr><th scope='row'>Rind galls</th><td>Abnormal wound-related swelling, distinct from normal callus tissue.</td></tr>" +
                        "<tr><th scope='row'>Knots</th><td>Branch remnants: growth features, not defects created by drying.</td></tr></tbody></table>" +
                        "<p>Electrical seasoning heats wood internally; splitting is a possible defect, not an inevitable outcome. The bank's <strong>10–12% moisture</strong> is an indoor seasoning example, not a target for every climate or service condition.</p>",
                    sources: [
                        { id: "BASI674-00007", set: 2, question: 7 },
                        { id: "BASI674-00014", set: 3, question: 1 },
                        { id: "BASI674-00100", set: 9, question: 8 },
                        { id: "BASI674-00112", set: 10, question: 6 },
                        { id: "BASI674-00113", set: 10, question: 7 }
                    ]
                },
                {
                    id: "metals-and-alloys",
                    title: "Metals, alloys and thermal movement",
                    html: "<p>Ferrous metals are iron-based; non-ferrous metals include copper and aluminium. Increasing carbon generally raises steel's hardness and strength while reducing ductility and weldability, subject to processing. It does not greatly increase elastic modulus.</p>" +
                        "<p><strong>Worked comparison from DESI787-00185:</strong> mild and high-tensile structural steel both have E approximately 200 GPa, so their modulus ratio is about 1. Greater strength does not imply less elastic deflection for identical geometry and load.</p>" +
                        "<p>Unprotected carbon steel is corrosion-prone despite its high strength per unit mass. Copper alloying can improve atmospheric corrosion resistance, but suitable weathering conditions still matter. Chromium supports stainless-steel passivation; nickel is not compulsory in every family. Common brazing spelter is copper–zinc, not the universal composition of all brazing fillers.</p>" +
                        "<p><strong>Thermal application of DESI787-00189:</strong> free expansion is ΔL = αLΔT. Using its α ≈ 12 × 10<sup>−6</sup>/°C, an illustrative 2 m bar warmed by 40°C extends 0.00096 m = 0.96 mm. Steel and concrete have similar, not identical, expansion; restraint produces stress instead of unrestricted movement.</p>",
                    sources: [
                        { id: "BASI674-00093", set: 9, question: 1 },
                        { id: "BASI674-00114", set: 10, question: 8 },
                        { id: "DESI787-00053", set: 7, question: 28 },
                        { id: "DESI787-00071", set: 9, question: 27 },
                        { id: "DESI787-00185", set: 20, question: 34 },
                        { id: "DESI787-00189", set: 21, question: 28 },
                        { id: "DESI787-00194", set: 21, question: 33 },
                        { id: "DESI787-00196", set: 22, question: 26 },
                        { id: "DESI787-00202", set: 22, question: 32 }
                    ]
                },
                {
                    id: "paints-and-varnishes",
                    title: "Paints, varnishes and lacquer",
                    html: "<p>Paint forms a pigmented protective film; varnish forms a resinous film, usually without hiding pigment.</p>" +
                        "<table><thead><tr><th scope='col'>Constituent</th><th scope='col'>Function</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Pigment</th><td>Colour and opacity.</td></tr>" +
                        "<tr><th scope='row'>Binder or vehicle</th><td>Forms the continuous film holding pigment to the substrate.</td></tr>" +
                        "<tr><th scope='row'>Thinner</th><td>Reduces application viscosity and evaporates; turpentine is an oil-paint example.</td></tr>" +
                        "<tr><th scope='row'>Drier</th><td>Accelerates curing; not interchangeable with thinner.</td></tr></tbody></table>" +
                        "<p>The bank's solventborne lacquer dries mainly by solvent evaporation; nitrocellulose is a film-forming resin, not the solvent. Bituminous paint primarily protects against water and corrosion. White-lead paint is a historical woodwork association, not a recommendation: lead is toxic; select appropriate lead-free coatings.</p>",
                    sources: [
                        { id: "BASI674-00009", set: 2, question: 9 },
                        { id: "BASI674-00013", set: 2, question: 13 },
                        { id: "BASI674-00095", set: 9, question: 3 },
                        { id: "BASI674-00102", set: 9, question: 10 },
                        { id: "BASI674-00115", set: 10, question: 9 },
                        { id: "BASI674-00214", set: 17, question: 13 },
                        { id: "BASI674-00430", set: 33, question: 10 }
                    ]
                },
                {
                    id: "bituminous-materials",
                    title: "Bitumen, asphalt and tar",
                    html: "<p>Bitumen is a petroleum-derived binder; coal tar comes from destructive distillation and is chemically different. Asphalt commonly means a bituminous material combined with mineral aggregate; this distinction is syllabus context, not a direct assigned-bank test.</p>" +
                        "<p>Thermoplastic bitumen stiffens on cooling and softens on warming. Cold brittleness favours cracking; hot softening can favour rutting or bleeding. Under matching penetration-test conditions, lower penetration means harder binder: <strong>30/40 is harder than 60/70 and 80/100</strong>. This comparison concerns penetration grades, not every grading system.</p>" +
                        "<p>Plastic bitumen uses filler and sometimes solvent for crack-sealing consistency. Emulsion disperses bitumen in water for cold application, subject to product conditions. Flexible bituminous sealants can serve gutter joints; they are not the only gutter construction material.</p>" +
                        "<p>Solubility in carbon disulfide is the bank's classic bitumen association; mineral filler is not binder. The solvent is hazardous: this is identification, not a laboratory instruction.</p>",
                    sources: [
                        { id: "BASI674-00011", set: 2, question: 11 },
                        { id: "BASI674-00028", set: 4, question: 2 },
                        { id: "BASI674-00104", set: 9, question: 11 },
                        { id: "BASI674-00118", set: 10, question: 12 },
                        { id: "BASI674-00119", set: 10, question: 13 },
                        { id: "BASI674-00120", set: 11, question: 1 },
                        { id: "BASI674-00122", set: 11, question: 3 },
                        { id: "BASI674-00123", set: 11, question: 4 }
                    ]
                }
            ],
            gaps: [
                "Asphalt mixtures and tar types/properties have no direct assigned question; the binder-versus-mixture distinction here is syllabus context.",
                "Physical and thermal properties are only partly tested: no systematic coverage of thermal conductivity, specific heat or chemical-resistance comparisons.",
                "Lime manufacture/slaking, complete brick/tile raw mixes and firing processes, and systematic alloy/varnish classifications lack direct question coverage."
            ],
            cautions: [
                {
                    html: "<p><strong>Ambiguous wording:</strong> polymorphism is a genuine characteristic. The metal item's positional 'Both b &amp; c' is malformed. Pillar and column overlap. Wound-covering tissue is callus; a rind gall is abnormal swelling, so that stem does not cleanly distinguish them.</p>",
                    sources: [
                        { id: "BASI674-00090", set: 8, question: 11 },
                        { id: "BASI674-00093", set: 9, question: 1 },
                        { id: "BASI674-00105", set: 9, question: 12 },
                        { id: "BASI674-00113", set: 10, question: 7 }
                    ]
                },
                {
                    html: "<p><strong>Not verified specifications:</strong> stone strength/absorption figures are bank heuristics; rock type, orientation and test conditions matter. Stone-versus-brick rankings and the listed tile dimensions are likewise not universal rules.</p>",
                    sources: [
                        { id: "BASI674-00091", set: 8, question: 12 },
                        { id: "BASI674-00106", set: 9, question: 13 },
                        { id: "BASI674-00201", set: 16, question: 13 },
                        { id: "BASI674-00202", set: 17, question: 1 },
                        { id: "BASI674-00279", set: 22, question: 10 }
                    ]
                },
                {
                    html: "<p><strong>Timber classifications:</strong> the bank quotes 960 kg/m<sup>3</sup> as a maximum fibreboard density, 2–4 for parallel-grain tensile/compressive strength, and E &gt; 12.6 × 10<sup>3</sup> N/mm<sup>2</sup> for Group A. These are not verified universal boundaries. Hardboard is itself a fibreboard type; stiffness group is not strength grade. Do not turn a generic strength ratio into allowable design stresses.</p>",
                    sources: [
                        { id: "DESI787-00068", set: 8, question: 33 },
                        { id: "DESI787-00077", set: 9, question: 33 },
                        { id: "DESI787-00129", set: 15, question: 27 },
                        { id: "DESI787-00130", set: 15, question: 28 }
                    ]
                },
                {
                    html: "<p><strong>Stainless-steel minimum:</strong> the keyed 10.5% chromium/0.5% nickel pair does not establish a universal paired minimum. Nickel is not required in every stainless family; the explanation also contains an inconsistent option reference.</p>",
                    sources: [
                        { id: "DESI787-00196", set: 22, question: 26 }
                    ]
                },
                {
                    html: "<p><strong>Conditional selections:</strong> hydraulic lime does not exclude air-lime mortars; electrical seasoning does not necessarily split timber. Cork's gym/rink recommendation depends on the actual surface use, not simply the building label.</p>",
                    sources: [
                        { id: "BASI674-00007", set: 2, question: 7 },
                        { id: "BASI674-00010", set: 2, question: 10 },
                        { id: "BASI674-00117", set: 10, question: 11 }
                    ]
                },
                {
                    html: "<p><strong>Terminology:</strong> calling lacquer spirit varnish is a broad bank shorthand; cellulose nitrate is resin, not solvent. Indentation leaves a mark, so describing hardness testing as unqualifiedly non-destructive is misleading.</p>",
                    sources: [
                        { id: "BASI674-00013", set: 2, question: 13 },
                        { id: "BASI674-00430", set: 33, question: 10 },
                        { id: "STRU935-00256", set: 24, question: 20 }
                    ]
                }
            ]
        },
        ACiE0102: {
            code: "ACiE0102",
            questionCount: 45,
            blocks: [
                {
                    id: "standards-and-reporting",
                    title: "Standards and test reporting",
                    html: "<p>NS denotes Nepal Standards and IS Indian Standards; their prefixes are not interchangeable. The Nepal Bureau of Standards and Metrology (NBSM) is the standards institution identified in the bank. Distinguish a <strong>product specification</strong>, defining classification and acceptance, from a <strong>test method</strong>, defining measurement. The bank connects IS 3495 Part 1 with brick compression; verify the applicable edition before laboratory use.</p>" +
                        "<p>Record specimen identity, conditioning, dimensions, apparatus, relevant test age, loading rate, individual results and reporting rule. A passing average alone does not prove every specimen satisfies an individual minimum. Results without methods and units cannot prove compliance.</p>" +
                        "<p><strong>Verified catalogue identities:</strong> the NBSM catalogue lists NS 1:2035 for bricks, NS 49:2041 for ordinary Portland cement (with a 2076 amendment), and NS 572:2076 for OPC 43 and 53 grades. This resolves the bank's brick/cement identity conflict; it does not verify the numerical acceptance limits in the questions.</p>",
                    sources: [
                        { id: "BASI674-00125", set: 11, question: 6 },
                        { id: "BASI674-00131", set: 11, question: 12 },
                        { id: "BASI674-00132", set: 11, question: 13 },
                        { id: "BASI674-00133", set: 1, question: 3 }
                    ]
                },
                {
                    id: "brick-water-absorption",
                    title: "Brick water absorption",
                    html: "<p>Absorption measures water uptake by mass and indicates accessible pore space. It does not directly give porosity percentage or compressive strength.</p>" +
                        "<ol><li>Dry and weigh the specimen: dry mass m<sub>d</sub>.</li><li>Immerse in cold water for the bank's stated 24 hours.</li><li>Remove surface water and weigh: wet mass m<sub>w</sub>.</li><li>Calculate absorption = 100(m<sub>w</sub> − m<sub>d</sub>)/m<sub>d</sub> percent.</li></ol>" +
                        "<p>Use identical mass units and report immersion conditions.</p>" +
                        "<p><strong>Worked comparison from BASI674-00020/00096:</strong> an illustrative uptake of 150 g per 1000 g dry brick gives 15%. Dividing by the wet mass, 1150 g, incorrectly gives 13.0%. The first-class keys use <strong>15%</strong>; the malformed '13c' IS/NS items use <strong>20%</strong>. Preserve this bank-specific distinction, not a supposedly verified common classification.</p>",
                    sources: [
                        { id: "BASI674-00020", set: 3, question: 7 },
                        { id: "BASI674-00096", set: 9, question: 4 },
                        { id: "BASI674-00127", set: 11, question: 8 },
                        { id: "BASI674-00134", set: 12, question: 1 },
                        { id: "BASI674-00135", set: 12, question: 2 },
                        { id: "BASI674-00136", set: 12, question: 3 }
                    ]
                },
                {
                    id: "brick-compression",
                    title: "Brick compression and field screening",
                    html: "<p>Load uniformly in compression and use the measured loaded area A: <strong>f<sub>c</sub> = P<sub>max</sub>/A</strong>. With newtons and mm<sup>2</sup>, strength is N/mm<sup>2</sup>, or MPa. Brick-unit strength is not finished masonry strength; joints and workmanship also matter.</p>" +
                        "<p>The bank procedure uses five specimens and their mean, with stress applied at 14 N/mm<sup>2</sup> per minute. This is a stress rate, not 14 N/min: the corresponding load rate is 14A N/min. Conditioning, loading faces and acceptance rules require the specified method.</p>" +
                        "<p>A clear ringing sound screens for sound burning; a knife/fingernail scratch screens surface hardness. Neither replaces laboratory tests. The bank quotes first-class strength &gt;10.5 MPa and a Nepal masonry minimum of 3.5 MPa; these are not verified universal NS criteria.</p>",
                    sources: [
                        { id: "BASI674-00017", set: 3, question: 4 },
                        { id: "BASI674-00126", set: 11, question: 7 },
                        { id: "BASI674-00128", set: 11, question: 9 },
                        { id: "BASI674-00129", set: 11, question: 10 },
                        { id: "BASI674-00130", set: 11, question: 11 },
                        { id: "BASI674-00137", set: 12, question: 4 }
                    ]
                },
                {
                    id: "cement-consistency",
                    title: "Cement consistency and fineness",
                    html: "<p><strong>Standard consistency</strong> is the water content producing the prescribed Vicat-plunger penetration, found by trial pastes. It is not a concrete mix-design water/cement ratio. The bank describes a 10 mm plunger stopping 5–7 mm above the mould base. Water percentage P = 100m<sub>water</sub>/m<sub>cement</sub>.</p>" +
                        "<p><strong>Worked source example, DESI787-00282:</strong> 1875 g paste − 1500 g cement = 375 g water; P = 100 × 375/1500 = <strong>25%</strong>. Dividing by total paste mass gives 20%, the wrong denominator. Consistency establishes a reference water demand for related tests; neither 25% nor an unexplained 0.78 is universal.</p>" +
                        "<p><strong>Fineness</strong> concerns particle size. Sieve testing measures residue: retained percentage = 100m<sub>retained</sub>/m<sub>sample</sub>; passing percentage = 100 − retained percentage. The mesh and reporting limit come from the method, not simply the statement that grains are smaller than a sieve opening.</p>",
                    sources: [
                        { id: "BASI674-00018", set: 3, question: 5 },
                        { id: "BASI674-00139", set: 12, question: 6 },
                        { id: "BASI674-00140", set: 12, question: 7 },
                        { id: "DESI787-00241", set: 26, question: 31 },
                        { id: "DESI787-00282", set: 30, question: 32 }
                    ]
                },
                {
                    id: "cement-setting-and-soundness",
                    title: "Cement setting, soundness and strength",
                    html: "<p><strong>Setting</strong> is the transition from plastic paste toward rigidity; strength continues developing afterwards. Both setting times start when water is added. Initial set marks loss of workable plasticity; final set is a method-defined penetration endpoint, not proof of design strength.</p>" +
                        "<table><thead><tr><th scope='col'>Apparatus</th><th scope='col'>What it measures</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Vicat</th><td>Consistency and setting times, using different attachments.</td></tr>" +
                        "<tr><th scope='row'>Le Chatelier</th><td>Expansive unsoundness, particularly associated with free lime.</td></tr></tbody></table>" +
                        "<p>The bank quotes OPC initial set not before 30 minutes, final set not after 600 minutes (10 hours), and low-heat cement initial set not before 60 minutes. Apply these only with the relevant cement specification.</p>" +
                        "<p>In the cited Le Chatelier sequence, water-condition the paste-filled split mould for 24 hours, record pointer spacing, then heat/boil as the method requires and determine the expansion. Soundness means volume stability, not strength. Free-magnesia expansion is not reliably covered by this method alone; the bank also mentions autoclave testing.</p>" +
                        "<p><strong>Where 0.78 belongs:</strong> IS 4031 Part 3:1988, clause 5.2.1, specifies Le Chatelier paste water as 0.78 times the quantity required for standard consistency. If P = 30% for the same cement mass, this means 0.78 × 30 = 23.4% water by cement mass, not a water/cement ratio of 0.78. The standard-consistency test itself determines P experimentally.</p>" +
                        "<p><strong>Cement compressive strength — syllabus context:</strong> prepare standardized cement–sand mortar specimens, compact and cure them under the prescribed conditions, then load them in compression at specified ages. Strength is maximum load divided by loaded area. Specimen size, mortar proportions, curing and test age affect the result; use the applicable method rather than borrowing a concrete-cube procedure. Setting time and soundness cannot substitute for this strength test. The assigned questions do not supply its complete procedure or acceptance table.</p>",
                    sources: [
                        { id: "BASI674-00015", set: 3, question: 2 },
                        { id: "BASI674-00019", set: 3, question: 6 },
                        { id: "BASI674-00021", set: 3, question: 8 },
                        { id: "BASI674-00068", set: 7, question: 3 },
                        { id: "BASI674-00138", set: 12, question: 5 },
                        { id: "BASI674-00141", set: 12, question: 8 },
                        { id: "BASI674-00142", set: 12, question: 9 },
                        { id: "BASI674-00143", set: 12, question: 10 },
                        { id: "BASI674-00144", set: 12, question: 11 },
                        { id: "BASI674-00145", set: 12, question: 12 }
                    ]
                },
                {
                    id: "sand-bulking",
                    title: "Bulking of sand and batching correction",
                    html: "<p><strong>Bulking</strong> is a physical increase in loose sand volume when moisture films hold grains apart, not chemical aggregate expansion. Volume initially rises with moisture, then further wetting removes film-supported separation. Fine sand bulks more than coarse sand; coarse-aggregate bulking is usually negligible.</p>" +
                        "<p>Compare equal quantities of sand solids using a cylinder/rule and consistent settling. Flooding and stirring remove the film-supported structure; a Vicat mould is irrelevant. <strong>B = 100(V<sub>damp</sub> − V<sub>reference</sub>)/V<sub>reference</sub></strong> percent.</p>" +
                        "<p><strong>Worked application of BASI674-00152/00156:</strong> using their illustrative 40% bulking, one unbulked volume requires 1.40 measured loose volumes. Conversely, 1.00 m<sup>3</sup> of bulked sand represents 1/1.40 = 0.714 m<sup>3</sup> unbulked. Ignoring bulking underbatches sand solids.</p>" +
                        "<p>With comparable packing, equal quantities of sand solids have similar dry and fully flooded bulk volumes in the elementary bulking model. Intermediate dampness increases volume; comparisons involving different solid masses or different compaction states cannot isolate bulking.</p>" +
                        "<p>The 40% figure and quoted moisture ranges are indicative bank examples, not fixed correction factors. Measure actual bulking. Mass batching avoids the volumetric bulking error but still requires accounting for aggregate water.</p>",
                    sources: [
                        { id: "BASI674-00151", set: 13, question: 4 },
                        { id: "BASI674-00152", set: 13, question: 5 },
                        { id: "BASI674-00153", set: 13, question: 6 },
                        { id: "BASI674-00154", set: 13, question: 7 },
                        { id: "BASI674-00155", set: 13, question: 8 },
                        { id: "BASI674-00156", set: 13, question: 9 },
                        { id: "BASI674-00157", set: 13, question: 10 },
                        { id: "BASI674-00428", set: 33, question: 8 },
                        { id: "SOIL136-00033", set: 4, question: 41 },
                        { id: "SOIL136-00087", set: 8, question: 42 },
                        { id: "TRAN808-00076", set: 8, question: 89 },
                        { id: "TRAN808-00141", set: 14, question: 85 }
                    ]
                },
                {
                    id: "rebar-tension",
                    title: "Tensile testing and test selection",
                    html: "<p>A tensile test in a <strong>universal testing machine</strong> pulls axially while load and extension are measured. Alignment, gripping and the specified original area and gauge length matter.</p>" +
                        "<p>Engineering stress σ = P/A<sub>0</sub>; strain ε = ΔL/L<sub>0</sub>; fracture elongation = 100(L<sub>f</sub> − L<sub>0</sub>)/L<sub>0</sub> percent. The curve distinguishes elastic stiffness, yielding and ultimate tensile strength; compare like conditions, not just peak loads.</p>" +
                        "<p>Peak engineering stress is ultimate strength; yielding concerns substantial permanent strain. E comes from the initial elastic slope, not the peak. If a clear yield point is absent, the applicable method defines a proof-stress convention; no offset or acceptance limit is assumed here.</p>" +
                        "<p>Brinell measures indentation hardness, not rebar tensile capacity. The assigned bank identifies the UTM only; these rebar interpretations are syllabus context, not bank-verified grade acceptance limits.</p>",
                    sources: [
                        { id: "BASI674-00424", set: 33, question: 4 },
                        { id: "DESI787-00243", set: 26, question: 33 }
                    ]
                }
            ],
            gaps: [
                "Cement compressive strength is required by the syllabus, but no assigned item establishes mortar preparation, specimen dimensions, curing/test ages or strength acceptance.",
                "Rebar coverage stops at the generic UTM question: rebar-specific sampling, gauge length, yield/proof stress and ductility acceptance are not supplied.",
                "The NBSM catalogue resolves standard identities, and the cited IS clause resolves the 0.78 factor. Complete applicable NS/IS specifications and amendments are still needed to establish material acceptance and current compliance."
            ],
            references: [
                { title: "NBSM catalogue: NS 1, NS 49 and NS 572", url: "https://nbsm.gov.np/particular/" },
                { title: "IS 4031 Part 3:1988, clause 5.2.1 (archived BIS text)", url: "https://archive.org/details/gov.in.is.4031.3.1988" }
            ],
            cautions: [
                {
                    html: "<p><strong>Incorrect brick-standard key:</strong> BASI674-00125 assigns NS 49/2041 to bricks, but the NBSM catalogue identifies NS 1:2035 as the brick standard and NS 49:2041 as OPC. BASI674-00133 has the correct OPC identity, though its explanation mislabels the Indian IS 269 reference. Related brick strength/absorption claims still require the applicable standard text. Original stored questions and keys have not been changed.</p>",
                    sources: [
                        { id: "BASI674-00125", set: 11, question: 6 },
                        { id: "BASI674-00133", set: 1, question: 3 },
                        { id: "BASI674-00136", set: 12, question: 3 },
                        { id: "BASI674-00137", set: 12, question: 4 }
                    ]
                },
                {
                    html: "<p><strong>Do not merge brick grades:</strong> first-class keys use 15%, while both '13c' items key 20%; the malformed class must not silently become 13.5. One first-class explanation's loose 15–20% range does not resolve the discrepancy. The 10.5 and 3.5 MPa figures likewise are not a verified common NS/IS classification. Knife and fingernail scratch options also overlap.</p>",
                    sources: [
                        { id: "BASI674-00017", set: 3, question: 4 },
                        { id: "BASI674-00020", set: 3, question: 7 },
                        { id: "BASI674-00096", set: 9, question: 4 },
                        { id: "BASI674-00129", set: 11, question: 10 },
                        { id: "BASI674-00135", set: 12, question: 2 },
                        { id: "BASI674-00136", set: 12, question: 3 },
                        { id: "BASI674-00137", set: 12, question: 4 }
                    ]
                },
                {
                    html: "<p><strong>Incorrect consistency record:</strong> BASI674-00140 keys 0.78 while its explanation rejects that answer. Standard consistency requires the Vicat endpoint and a measured water/cement percentage. The 0.78 multiplier belongs to preparation of Le Chatelier soundness paste under the cited IS method, not a fixed normal-consistency ratio.</p>",
                    sources: [
                        { id: "BASI674-00140", set: 12, question: 7 }
                    ]
                },
                {
                    html: "<p><strong>Ambiguous sand records:</strong> BASI674-00157's dry/saturated comparison conflicts with its explanation and omits packing conditions. SSD means saturated internal pores without a surface film, not water filling bulk voids. TRAN808-00076's 'less than sand' and 'negligible' can both describe coarse aggregate. TRAN808-00141's 'reaction with water' must not imply a chemical mechanism.</p>",
                    sources: [
                        { id: "BASI674-00157", set: 13, question: 10 },
                        { id: "TRAN808-00076", set: 8, question: 89 },
                        { id: "TRAN808-00141", set: 14, question: 85 }
                    ]
                },
                {
                    html: "<p><strong>Variable bulking peaks:</strong> the explanations variously quote 4–6%, 5–8% and 5–10% moisture. None establishes a material-independent peak or universal 40% bulking.</p>",
                    sources: [
                        { id: "BASI674-00152", set: 13, question: 5 },
                        { id: "BASI674-00153", set: 13, question: 6 },
                        { id: "BASI674-00156", set: 13, question: 9 },
                        { id: "BASI674-00428", set: 33, question: 8 },
                        { id: "SOIL136-00033", set: 4, question: 41 },
                        { id: "SOIL136-00087", set: 8, question: 42 }
                    ]
                }
            ]
        }
    });
})();