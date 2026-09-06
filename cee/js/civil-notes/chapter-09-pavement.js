(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0905: {
            code: "ACiE0905",
            questionCount: 70,
            blocks: [
                {
                    id: "pavement-functions-and-serviceability",
                    title: "Separate structural capacity, riding quality and skid resistance",
                    html: "<p>A pavement is a load-carrying system and a running surface. Structural design limits damaging deformation and cracking under repeated traffic; functional design provides an acceptably even, durable and skid-resistant surface. A pavement can be structurally sound but dangerously polished, or smooth at opening but structurally inadequate. Passing one check does not demonstrate the other.</p>" +
                        "<p><strong>Non-yielding does not mean perfectly motionless.</strong> Recoverable deflection occurs in both flexible and rigid pavements. The objection is excessive permanent deformation, differential settlement or progressive damage that impairs serviceability. Repeated small movements can consume fatigue life even when no single pass produces an obvious failure.</p>" +
                        "<p>The surface directly receives tyre contact and braking forces, but <strong>every structural layer withstands and transmits stress</strong>. Lower stress intensity at depth does not make the subgrade stress-free. Similarly, a surface should provide friction to resist skidding, not resist the existence of friction. Smooth riding refers to the longitudinal profile; adequate microtexture and macrotexture refer to much smaller surface features and water escape. These requirements are compatible.</p>" +
                        "<p>Conventional dense surfacing helps limit infiltration, but cracks, joints and pavement edges remain possible entry paths. Porous or pervious pavement systems intentionally admit water into an engineered drainage arrangement. Reducing the number of vehicles is a transport-management objective, not a primary function of the pavement layers themselves.</p>",
                    sources: [
                        { id: "TRAN808-00163", set: 16, question: 85 },
                        { id: "TRAN808-00164", set: 16, question: 86 },
                        { id: "TRAN808-00269", set: 25, question: 87 },
                        { id: "TRAN808-00274", set: 26, question: 81 }
                    ]
                },
                {
                    id: "pavement-types-and-load-paths",
                    title: "Flexible, rigid, composite and semi-rigid load mechanisms",
                    html: "<table><thead><tr><th scope='col'>System</th><th scope='col'>How it carries load</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Flexible</th><td>Bituminous and unbound layers distribute wheel forces through their combined stiffness, thickness, confinement and interfaces. Granular layers rely substantially on interparticle contact and interlock; asphalt also develops tensile and shear response.</td></tr>" +
                        "<tr><th scope='row'>Rigid</th><td>A cement-concrete slab spreads load through plate bending onto its foundation. Concrete's high elastic modulus and the slab's thickness give substantial flexural rigidity. Uniform support remains necessary.</td></tr>" +
                        "<tr><th scope='row'>Composite</th><td>Flexible and rigid structural layers coexist, for example an asphalt overlay on a concrete pavement. The concrete slab and its joints still influence response beneath the asphalt; reflection cracking and interface condition matter.</td></tr>" +
                        "<tr><th scope='row'>Semi-rigid</th><td>A typical arrangement has flexible asphalt surfacing over a cementitious stabilized base. The base has appreciable stiffness and tensile capacity, but must be checked for fatigue, shrinkage and reflection of cracks.</td></tr></tbody></table>" +
                        "<p><strong>WBM is a flexible, unbound granular construction</strong>, not a concrete plate. Water assists placement and the incorporation of screenings or binding fines; it does not convert the aggregate skeleton into hydraulic concrete. A semi-rigid base differs because a cementitious binder creates a bonded material.</p>" +
                        "<p>The bank's truncated-cone picture is a useful sketch of load spreading: a larger supporting area generally means a smaller average stress. It is <strong>load or stress, not compressive strength, that is distributed</strong>. A fixed-angle frustum is not an exact solution for a layered pavement. Material moduli, layer thicknesses and interface conditions determine the real stress field. Likewise, high E helps explain rigid behaviour, but slab rigidity also varies with the cube of thickness; the surface label alone does not characterize a composite system.</p>",
                    sources: [
                        { id: "TRAN808-00270", set: 25, question: 88 },
                        { id: "TRAN808-00271", set: 25, question: 89 },
                        { id: "TRAN808-00273", set: 26, question: 80 },
                        { id: "TRAN808-00276", set: 26, question: 83 },
                        { id: "TRAN808-00306", set: 28, question: 90 },
                        { id: "TRAN808-00360", set: 33, question: 85 }
                    ]
                },
                {
                    id: "pavement-choice-and-design-category",
                    title: "Choose a pavement for its service conditions, not a universal cost ranking",
                    html: "<p>Begin by identifying <strong>new construction, reconstruction or rehabilitation</strong>. New construction establishes a pavement on a prepared foundation; reconstruction replaces deficient structural components; rehabilitation retains useful parts while restoring required performance. Demolition may be an operation within reconstruction, but it is not an alternative structural-design category in this comparison.</p>" +
                        "<p>Compare feasible systems for the same traffic, analysis period and service requirements. Consider initial construction, future resurfacing or joint maintenance, user delay during closures, available materials, construction equipment, drainage, utility access and the reliability of future maintenance. Stage construction can favour a flexible system, but a low initial price is not proof of the lowest whole-life cost. WBM can be economical in an appropriate early stage; it also belongs to the flexible family, so those two bank options are not mutually exclusive.</p>" +
                        "<p>Bituminous surfacing is widely useful on highways, but neither asphalt nor concrete is always preferable. Monsoon serviceability requires a stable wet-season foundation, drainage outlets, suitable surfacing and maintained shoulders. Properly designed and maintained gravel roads can also be all-weather. A blacktop layer over saturated, eroding support does not guarantee access during rain.</p>" +
                        "<p><strong>Effective communication is a design control, not a substitute for engineering.</strong> The designer, investigation team, materials laboratory, contractor and maintaining agency must agree on traffic-count basis, material sources, layer interfaces and acceptance requirements. Record changes and reassess the design when those assumptions change. DoR Flexible 2021 §3.1 explicitly considers soils, weather, construction and cost alongside traffic in pavement-type selection.</p>",
                    sources: [
                        { id: "TRAN808-00105", set: 11, question: 84 },
                        { id: "TRAN808-00113", set: 12, question: 80 },
                        { id: "TRAN808-00132", set: 13, question: 87 },
                        { id: "TRAN808-00284", set: 27, question: 79 },
                        { id: "TRAN808-00320", set: 30, question: 81 }
                    ]
                },
                {
                    id: "layer-stack-and-functions",
                    title: "Read the pavement section from the prepared foundation upward",
                    html: "<p>The subgrade is the prepared upper foundation zone, whether in cutting, on an embankment or formed from selected or stabilized soil. It is not necessarily a separate layer of native soil laid above fill. DoR Flexible 2021 §5.1 considers the upper <strong>500 mm</strong> in its main procedure; Annex E uses a different <strong>300 mm</strong> low-volume description. Identify the procedure before attaching a depth to the word subgrade.</p>" +
                        "<table><thead><tr><th scope='col'>Part of a conventional section</th><th scope='col'>Principal roles</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Subgrade</th><td>Provides foundation support and must resist unacceptable accumulated deformation. Its wet-season condition and variability affect the whole section.</td></tr>" +
                        "<tr><th scope='row'>Subbase</th><td>Supports the base and construction traffic; can provide filtration, separation and drainage when appropriately graded and connected to outlets.</td></tr>" +
                        "<tr><th scope='row'>Base</th><td>Supplies structural support and spreads stresses. It may be unbound, bituminous or cement-treated, with different design properties.</td></tr>" +
                        "<tr><th scope='row'>Binder course</th><td>An intermediate asphalt course, where provided, contributing thickness, shape and structural performance beneath the wearing course.</td></tr>" +
                        "<tr><th scope='row'>Wearing course</th><td>Receives tyre action and environmental exposure, providing texture, ride quality and suitable resistance to wear and moisture damage.</td></tr>" +
                        "<tr><th scope='row'>Foundation beneath a rigid slab</th><td>Provides uniform, stable and erosion-resistant support, a working platform and drainage-related functions. It still transmits slab reactions to the ground.</td></tr></tbody></table>" +
                        "<p>The conventional upward order is subgrade, subbase, base, binder and surface, but not every design contains five separate courses. Special filter, capping, frost-protection or crack-relief layers can alter that sequence. Never interpret the slab's dominant bending role as meaning its foundation carries no load. Protecting the subgrade from overstress and protecting it from harmful water are complementary requirements.</p>",
                    sources: [
                        { id: "TRAN808-00127", set: 13, question: 83 },
                        { id: "TRAN808-00278", set: 26, question: 85 },
                        { id: "TRAN808-00280", set: 26, question: 87 },
                        { id: "TRAN808-00307", set: 29, question: 79 }
                    ]
                },
                {
                    id: "weather-groundwater-and-frost",
                    title: "Weather and groundwater belong in pavement design",
                    html: "<p>A legacy CBR chart may not contain a separate weather variable, but its soil-strength input is already conditional on moisture and compaction. <strong>Weather is not excluded from DoR design.</strong> Flexible 2021 §3.1.1 and Annex A discuss rainfall, snow, frost, temperature and moisture damage. Wetting can reduce soil support; high pavement temperature can promote asphalt deformation; low temperature and ageing can increase cracking susceptibility.</p>" +
                        "<p>Investigate seasonal groundwater, flood exposure, capillary rise, hillside seepage, shoulder infiltration and blocked drainage. A sealed surface does not intercept water arriving from below or from a cut slope. Select drainage and capillary-cutoff measures from the site conditions, and ensure the drainage layer has a functioning outlet. Do not assign a dry-season CBR or foundation k-value to a persistently wet service condition without justification.</p>" +
                        "<p>Frost damage requires freezing conditions, frost-susceptible material and an available water supply. A suitable non-frost-susceptible layer can be placed between subgrade and subbase; sometimes the subbase itself supplies that function. Thickness and material selection depend on frost penetration, water conditions and permitted movement. A labelled layer at the correct interface alone cannot prove frost protection, and thaw weakening must also be considered.</p>" +
                        "<p>For otherwise comparable alternatives, stronger support may reduce structural thickness, while increased damaging traffic generally demands greater capacity. These are conditional trends, not a rule that every additional stress must be solved by extra asphalt. Drainage, stabilization, material choice and detailing may be the controlling remedies. The bank's four factor-effect pairs do not establish a uniquely incorrect pair.</p>",
                    sources: [
                        { id: "TRAN808-00048", set: 6, question: 83 },
                        { id: "TRAN808-00281", set: 26, question: 88 },
                        { id: "TRAN808-00286", set: 27, question: 81 }
                    ]
                },
                {
                    id: "material-strength-and-density-bases",
                    title: "CBR acceptance and compaction percentages need a named material and test basis",
                    html: "<p>CBR is a penetration-resistance index under specified preparation and testing conditions. It is not an allowable contact stress or a physical strength ceiling. In the bank's conventional unbound-layer comparison, the <strong>base</strong>, not the subgrade, normally needs the higher CBR. Do not extend that ranking to concrete or asphalt, which use other strength and performance measures.</p>" +
                        "<p><strong>Identified specification:</strong> DoR Standard Specifications for Road and Bridge Works 2073, with Third Amendment 2082, effective 1 Shrawan 2082. Its following requirements are material-specific and retain the relevant contract qualifications; they are not a claim about every edition.</p>" +
                        "<table><thead><tr><th scope='col'>Material and provision</th><th scope='col'>CBR basis</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Untreated subgrade, §1003</th><td>At least 5%, after four-day soaking of a laboratory specimen compacted to 95% heavy-compaction MDD.</td></tr>" +
                        "<tr><th scope='row'>Granular subbase, Table 12.2</th><td>Minimum 30, unless specified in the Contract.</td></tr>" +
                        "<tr><th scope='row'>WBM, Table 12.5</th><td>Base 80%; subbase 30%, unless specified in the Contract.</td></tr>" +
                        "<tr><th scope='row'>Crusher-run and wet-mix macadam, Tables 12.9 and 12.11</th><td>Base 80%; subbase 60%, unless specified in the Contract.</td></tr></tbody></table>" +
                        "<p>The granular tables use CBR at <strong>95% IS 2720 Part 8 MDD</strong>; that specimen density is not automatically the field-density requirement. Untreated subgrade field density is at least 95% heavy MDD. Crusher-run and WMM field requirements distinguish 98% for base from 95% for subbase. Do not infer a separate WBM field-density percentage from its CBR-test row.</p>" +
                        "<p>For the stated CRM/WMM products, both base and subbase have LL at most 25 and PI at most 6 on the passing-425-micron fraction. There is no universal relaxed-subbase exception. Report compaction as field dry density divided by the <em>matching</em> laboratory MDD. Annex E's 100% Standard Proctor MDD under Part 7 is a different reference from 95% heavy MDD. No 97%-MDD test condition is established by the checked main-2021 passages.</p>",
                    sources: [{ id: "TRAN808-00128", set: 13, question: 84 }]
                },
                {
                    id: "thickness-structural-and-construction-limits",
                    title: "Structural thickness, functional minimum and compacted lift are different",
                    html: "<p>Structural analysis selects enough capacity for traffic and support conditions. A functional minimum ensures a layer can drain, filter or relieve cracks. A construction limit ensures its aggregate can be placed and compacted properly. The adopted section must satisfy all applicable requirements; a nominal minimum alone is not a completed thickness design.</p>" +
                        "<p><strong>DoR Flexible 2021 §7.1 recommends a minimum 150 mm granular base</strong>, with a separate 100 mm granular crack-relief layer over CTB. Thus the bank's 15 cm answer has support for that identified granular-base context; it is not a universal conclusion derived from the undefined phrase medium-volume road. Annex E's separate gravel-road procedure includes a different minimum remaining gravel-base thickness, so the procedures must not be merged.</p>" +
                        "<p>Under §6.1, separate filter and drainage layers have a combined minimum 200 mm, with at least 100 mm each; a single filter-cum-drainage layer has a 150 mm functional minimum. The same section relates compacted granular thickness to nominal maximum aggregate size. These provisions address specified functions, not interchangeable names for one universally required course.</p>" +
                        "<p>Binder-course thickness depends on mix grading, compacted-lift limits, structural demand and the chosen section. A 100–150 mm range cannot be inferred from the name binder course alone, and it overlaps the bank's 100–200 mm option. A mass-per-area unit such as g/cm<sup>2</sup> is not thickness. DoR §8.2 also has a combined-bituminous-thickness requirement for a specified CTB/high-traffic case; do not misread a combined total as the thickness of each individual asphalt lift.</p>",
                    sources: [
                        { id: "TRAN808-00066", set: 7, question: 90 },
                        { id: "TRAN808-00282", set: 26, question: 89 }
                    ]
                },
                {
                    id: "dor-flexible-scope-and-evidence",
                    title: "DoR flexible scope, design life and evidence — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> official 9.5 requires DoR design methods, but the assigned questions do not supply a complete applicability or edition comparison. Here <strong>Flexible 2021</strong> means the DoR-covered <em>Guidelines for the Design of Flexible Pavements-2014 (Second Edition 2021)</em>, April 2021. The cover says Second Edition; running headers say 2nd Revision.</p>" +
                        "<p>The flexible and rigid 2021 texts used here are <strong>nongovernment HERMES mirror copies</strong> identified by DoR covers and forewords. They were not byte-compared with inaccessible official DoR PDF downloads. The later amended specifications are a separately government-hosted document. Readable content, document identity and confirmed current adoption are different questions; these notes establish neither latest-edition status nor construction approval.</p>" +
                        "<ul><li><strong>Main flexible method:</strong> §2 concerns design traffic greater than 2 msa.</li><li><strong>Exactly 2 msa and below:</strong> Annex E §E.1 expressly covers design traffic up to 2 msa. Its density, traffic and layer conventions must be retained together.</li><li><strong>Catalogue range:</strong> main granular-base tables start at 5 msa and extend to 250 msa. The first catalogue row is not the guideline's minimum applicability limit.</li><li><strong>Design period, §4.3:</strong> National Highways 20 years, expressways 30 years, low-volume roads 10 years. The period concerns service without major rehabilitation, not freedom from all maintenance.</li></ul>" +
                        "<p>Section 11 requires site-specific mechanistic-empirical design above 2 msa. Its other optional structural catalogues up to 50 msa are for initial estimation and guidance, with detailed analysis needed for actual layer thicknesses. A named traffic band and one CBR cannot replace the section's material, drainage, interface and performance assumptions.</p>",
                    sources: []
                },
                {
                    id: "traffic-surveys-and-structural-counts",
                    title: "Mixed traffic must be converted into the correct structural demand",
                    html: "<p>Mixed traffic describes the variety of vehicles using the road. Structural design is especially sensitive to commercial-vehicle axle loads and repetitions; geometric capacity assessment uses different measures, including PCU. <strong>A PCU count is not an ESAL count.</strong> Vehicle numbers, axle numbers, axle force and equivalent damage are separate quantities.</p>" +
                        "<p>DoR Flexible 2021 §§4.1–4.6 starts with classified traffic, annualized from observed counts where necessary. It recommends seven-day, 24-hour traffic counting and, for deriving VDF, axle-load observations in each direction with the stated sampling requirements. Record count year, opening year, directional balance, vehicle classes and loading. An apparently balanced vehicle flow may have very different damage in the two directions if one carries loaded freight and the other returning empty vehicles.</p>" +
                        "<p>The reference <strong>80 kN is the force on a standard single axle with dual wheels on each side</strong>. It is not one tyre load and not the gross mass of a vehicle. In the guideline's equal-wheel structural idealization it is distributed over four 20 kN wheel loads. One axle pass is one standard-axle repetition, not four repetitions because four tyres are present.</p>" +
                        "<p>Forecast normal, diverted and generated traffic without double counting, and estimate growth by commercial-vehicle category where evidence permits. The main guideline supplies a 5% annual-growth fallback when data are absent; that is an identified fallback, not a measured forecast for every route. Lateral wander, wheel spacing, repeated channelized loading, load duration and dynamic effects influence response. Do not append an arbitrary impact multiplier to an already calibrated procedure without establishing its intended load basis.</p>",
                    sources: [{ id: "TRAN808-00097", set: 10, question: 87 }]
                },
                {
                    id: "opening-year-traffic-and-msa",
                    title: "Opening-year traffic and cumulative msa — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> no assigned question provides all the inputs for a full opening-year traffic calculation. Let P<sub>count</sub> be the count-year commercial vehicles per day, x the delay to opening, r the decimal annual growth rate, and n the service period from opening. Then <strong>A = P<sub>count</sub>(1 + r)<sup>x</sup></strong>.</p>" +
                        "<p>Summing the opening-year daily flow A and the successive annual flows A(1 + r), through year n − 1, gives the geometric growth sum <strong>G = [(1 + r)<sup>n</sup> − 1] / r</strong>. With D consistent with the count's lane/direction basis and F in standard axles per commercial vehicle:</p>" +
                        "<p><strong>N<sub>msa</sub> = 365 A D F [(1 + r)<sup>n</sup> − 1] / (r × 10<sup>6</sup>)</strong>.</p>" +
                        "<p><strong>Printing caution:</strong> Flexible 2021 Eq.12 labels N as msa but omits the factor 10<sup>−6</sup>. Its unconverted right-hand side produces individual standard-axle repetitions. The expression here includes the dimensionally necessary conversion; do not copy the printed unit error. For r = 0, use G = n rather than divide by zero. For different class growth rates or changing VDF, calculate appropriate class/year contributions before adding them.</p>" +
                        "<p><em>Hypothetical teaching example, not bank data:</em> P<sub>count</sub> = 1000 two-way CV/day, x = 2 years, r = 0.05, n = 20 years, D = 0.50 for the main two-lane procedure, and chosen F = 4. A = <strong>1102.5 CV/day</strong>; G = <strong>33.06595</strong>; N = <strong>26.6123 msa</strong>. The two pre-opening years are used in A, not added again to the 20-year service period. Under the separately hypothetical zero-growth case with the same count, D, F and n, N = 14.6 msa. Neither example determines a pavement thickness.</p>",
                    sources: []
                },
                {
                    id: "lane-factors-and-count-basis",
                    title: "Lane distribution: undivided and divided roads use different denominators",
                    html: "<p>Write the traffic-count basis beside D before multiplying. The defaults in <strong>DoR Flexible 2021 §4.5</strong> apply when adequate project-specific evidence is unavailable. Measured loading in the governing lane can supersede a generic distribution assumption within the design procedure.</p>" +
                        "<table><thead><tr><th scope='col'>Main-procedure road configuration</th><th scope='col'>Fraction and traffic denominator</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Single lane</th><td>1.00 of total two-way commercial traffic.</td></tr>" +
                        "<tr><th scope='row'>Intermediate, 5.5 m</th><td>0.75 of total two-way commercial traffic.</td></tr>" +
                        "<tr><th scope='row'>Two lanes, two-way</th><td>0.50 of total two-way commercial traffic.</td></tr>" +
                        "<tr><th scope='row'>Four lanes, undivided single carriageway</th><td>0.40 of total two-way commercial traffic.</td></tr>" +
                        "<tr><th scope='row'>Four lanes, divided into two two-lane carriageways</th><td>0.75 of the commercial traffic in the direction being designed.</td></tr>" +
                        "<tr><th scope='row'>Divided, three or four lanes in each direction</th><td>Respectively 0.60 or 0.45 of directional commercial traffic.</td></tr></tbody></table>" +
                        "<p><em>Hypothetical comparison, not additional bank givens:</em> for 1000 two-way CV/day with balanced directions, a four-lane undivided section uses 400 CV/day. A four-lane divided section uses 1000 × 0.5 × 0.75 = <strong>375 CV/day</strong>, or 0.375 of the two-way total. A main-procedure two-lane road uses 500 CV/day. Do not halve the 0.40 result again, or apply 0.75 to the entire two-way divided-road count.</p>" +
                        "<p><strong>Keep Annex E separate:</strong> its low-volume procedure uses 0.75 of two-way traffic for double-lane roads and 1.00 for single/intermediate roads. That does not validate the bank explanation's general two-lane 0.75 statement for the main method. The four-lane undivided key 0.40 itself is supported.</p>",
                    sources: [{ id: "TRAN808-00061", set: 7, question: 85 }]
                },
                {
                    id: "axle-equivalence-and-vdf",
                    title: "Fourth-power axle equivalence and vehicle damage factor",
                    html: "<p>An axle-equivalence factor represents the damage from one specified axle-group pass relative to a reference pass under the chosen calibration. A common approximation is <strong>EF = (W/W<sub>s</sub>)<sup>4</sup></strong>. W and W<sub>s</sub> must use the same force units and comparable wheel/axle configurations. It is not a universal fourth-power constitutive law for every pavement and failure mechanism.</p>" +
                        "<p>For the bank's <strong>160 kN versus 80 kN</strong> comparison, assuming the same single-axle dual-wheel configuration, EF = (160/80)<sup>4</sup> = 2<sup>4</sup> = <strong>16</strong>. This means sixteen times the reference damage per pass, not sixteen times the number of vehicles or a sixteenfold wheel pressure. Changing axle configuration invalidates a blind comparison using only total force.</p>" +
                        "<p>Flexible 2021 §4.4 uses configuration-specific fourth-power reference denominators: <strong>65 kN</strong> for a single axle with single wheels on either side, <strong>80 kN</strong> for a single axle with dual wheels, <strong>148 kN</strong> for a tandem dual-wheel group, and <strong>224 kN</strong> for a tridem dual-wheel group. These are design-equivalence references, not a statement of current legal axle-load limits.</p>" +
                        "<p>A vehicle's contribution is the sum of the applicable axle-group equivalences. For a survey, <strong>F = total equivalent standard axles / commercial vehicles surveyed</strong>. A fleet-weighted F must preserve the proportions of vehicle types and loading states. Use different directional F values when the evidence requires it. CTB fatigue and rigid-slab fatigue also need load-spectrum checks; replacing their individual stress levels by one average gross vehicle weight discards information the damage model needs.</p>",
                    sources: [{ id: "TRAN808-00063", set: 7, question: 87 }]
                },
                {
                    id: "tyre-contact-wheel-geometry-and-eswl",
                    title: "Wheel layout, contact pressure, footprint and ESWL",
                    html: "<p>Wheel configuration supplies the number and arrangement of tyres, axle-group spacing and the geometry for stress overlap. It does <strong>not by itself determine contact pressure</strong>. For a load P represented by a uniformly loaded area A<sub>c</sub>, equilibrium gives q = P/A<sub>c</sub>. An equivalent circle has <strong>a = √[P/(πq)]</strong>; use P in N and q in N/mm<sup>2</sup> to obtain a in mm.</p>" +
                        "<p>An actual tyre footprint is generally noncircular and its pressure is nonuniform. The circular footprint is an analytical idealization. Average pavement contact pressure is often approximated by tyre inflation pressure, but carcass stiffness, tyre construction and loading prevent an exact identity. If rigidity factor is defined as q/p<sub>tyre</sub>, it equals 1 <strong>only under the equal-pressure assumption</strong>; p<sub>tyre</sub> = 7 kgf/cm<sup>2</sup> alone does not prove that value.</p>" +
                        "<p>For the bank's two equal circular contacts, centre spacing s = 270 mm and radius a = 110 mm give <strong>clear gap = s − 2a = 50 mm</strong>. Radius is not diameter, and centre spacing is not the clear gap. If contact sizes differ, subtract both radii along the line of centres. Close wheel contacts produce overlapping responses at depth even though a clear surface gap remains.</p>" +
                        "<p><strong>ESWL</strong>, equivalent single wheel load, is a force that produces the same selected response as a wheel group at a specified location or depth under a stated model. An ESWL matching vertical stress need not match deflection or tensile strain. By contrast, ESAL is an equivalent-damage repetition count. Neither the geometric 50 mm gap nor the word tandem supplies a universal ESWL or a VDF without the remaining response and loading assumptions.</p>",
                    sources: [
                        { id: "TRAN808-00288", set: 27, question: 83 },
                        { id: "TRAN808-00289", set: 27, question: 84 },
                        { id: "TRAN808-00291", set: 27, question: 86 },
                        { id: "TRAN808-00292", set: 27, question: 87 },
                        { id: "TRAN808-00294", set: 27, question: 89 }
                    ]
                },
                {
                    id: "failure-repetitions-and-equivalent-damage",
                    title: "Derive equivalence from failure repetitions before applying a load law",
                    html: "<p>Under a linear damage-fraction interpretation, one pass of a loading condition that would cause failure after N<sub>f</sub> identical passes consumes <strong>1/N<sub>f</sub></strong> of the fatigue budget. If the reference condition survives N<sub>ref</sub> passes, the damage equivalence of one test pass is <strong>EF = N<sub>ref</sub>/N<sub>test</sub></strong>. The shorter-lived condition is more damaging, so the ratio's direction matters.</p>" +
                        "<p>The assigned record gives 228 kg with 105000 repetitions and <strong>3125 kg with 22500 repetitions</strong>. Treating these as comparable failure tests, the second condition has <strong>105000/22500 = 4.6667</strong> times the reference damage per pass. This deduction uses the reported lives, not an assumed fourth-power relationship between the two printed load numbers.</p>" +
                        "<p>The question then asks about <strong>3175 kg</strong>, for which it supplies no failure count or valid interpolation model. Do not silently change that load to 3125 kg, change 228 to a familiar standard wheel load, or invent a missing chart. Even for the stated 3125 kg pair, 4.6667 is not the stored answer 4; truncating or choosing a convenient option is not rounding a supported engineering result.</p>" +
                        "<p>For a spectrum with n<sub>i</sub> expected passes and N<sub>i</sub> allowable passes at each stress level, the corresponding damage sum is Σ(n<sub>i</sub>/N<sub>i</sub>). This is a model-based bookkeeping device: all N<sub>i</sub> must refer to a compatible failure definition, material state and loading condition. It does not make an internally inconsistent source dataset complete.</p>",
                    sources: [{ id: "TRAN808-00293", set: 27, question: 88 }]
                },
                {
                    id: "design-cbr-and-performance-reliability",
                    title: "Design CBR: distinguish a lower-tail soil value from model reliability",
                    html: "<p>CBR results depend on soil type, density, moisture, soaking and specimen preparation. Divide the alignment into defensible material or support sections before selecting a design value; an average over unrelated strong and weak reaches can hide a local failure risk. Flexible 2021 §5.1 calls for at least three specimens for the CBR of each soil type, then describes selection among the subgrade values.</p>" +
                        "<p>That paragraph uses the label <strong>90th percentile</strong> for high-volume roads such as expressways and National Highways, and permits <strong>80th percentile</strong> for roads with design traffic below 20 msa. However, it does not explicitly define ascending versus exceedance ordering. The bank's 0.90 matches the printed label, but its explanation that only one tenth is weaker describes a <strong>90% exceedance value</strong>, not the ordinary upper 90th percentile.</p>" +
                        "<p>For a continuous distribution, a value equalled or exceeded by 90% of results is at approximately the <strong>lower 10th percentile in ascending order</strong>. Sort results and explicitly state the ranking/interpolation convention. <em>Hypothetical illustration, not bank measurements:</em> if two of twenty representative results are below CBR 5 and eighteen are at least 5, then 90% meet or exceed 5. Selecting a value near the strongest end of that same sample would reverse the intended protection. Finite-sample ties and interpolation require a declared rule.</p>" +
                        "<p><strong>Separate reliability decision:</strong> §3.4 recommends 90% performance-model reliability for important roads, and for other roads at design traffic <strong>20 msa or more</strong>; below 20 msa it gives 80% for those other roads. This concerns calibrated fatigue/rutting predictions, not the percentile of soil samples. The 20-msa performance boundary, the 2-msa Annex E boundary and the 5-msa first catalogue row are three different limits.</p>",
                    sources: [{ id: "TRAN808-00045", set: 6, question: 80 }]
                },
                {
                    id: "resilient-and-effective-subgrade-modulus",
                    title: "Resilient and effective subgrade modulus — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> the assigned 9.5 bank does not contain a complete resilient-modulus or composite-subgrade calculation. Resilient modulus describes recoverable cyclic response, commonly as repeated deviator stress divided by recoverable axial strain. It is not the concrete modulus of rupture, despite both sometimes being abbreviated MR.</p>" +
                        "<p>DoR Flexible 2021 §5.2, Eqs.13–14, gives these empirical estimates, with CBR entered as the percentage number:</p>" +
                        "<ul><li><strong>M<sub>RS</sub> = 10 CBR MPa</strong>, for CBR ≤ 5.</li><li><strong>M<sub>RS</sub> = 17.6 CBR<sup>0.64</sup> MPa</strong>, for CBR &gt; 5.</li></ul>" +
                        "<p>Thus CBR 5% gives <strong>50 MPa</strong>, using CBR = 5, not 0.05. This is a correlation at the stated test/design basis, not a measurement of every soil with that CBR. The main text permits a subgrade Poisson ratio of 0.35; it does not require the incompressible 0.5 of a historical chart.</p>" +
                        "<p>For different prepared-subgrade and underlying-embankment materials, §5.3 uses <strong>deflection equivalence</strong>, not an arithmetic average of CBR or E. Analyze the actual support layers under the specified auxiliary 40 kN circular load at q = 0.56 MPa. From the resulting centre deflection δ, form <strong>E<sub>eff</sub> = 2(1 − μ<sup>2</sup>)qa/δ</strong>, with a and δ in consistent length units. This auxiliary load is distinct from a single 20 kN tyre in the standard-axle strain analysis.</p>" +
                        "<p>The calculated effective modulus is capped at <strong>100 MPa</strong> for design, not 50 MPa. <em>Hypothetical cap illustration:</em> a compatible layered calculation returning 115 MPa would be limited to 100 MPa; no such calculation is supplied by the bank. Over rock, the guideline credits only the borrow material's CBR and still requires protection against trapped water. Keep the main and Annex E compaction/test bases separate when deriving any input.</p>",
                    sources: []
                },
                {
                    id: "stress-strain-deflection-and-stiffness",
                    title: "Stress, strain, deflection and stiffness answer different questions",
                    html: "<p><strong>Stress</strong> is internal force per area, <strong>strain</strong> is relative deformation, and <strong>deflection</strong> is a displacement. Stress and modulus can be expressed in MPa; strain is dimensionless; deflection is a length. A load can cause recoverable movement without immediate failure. Repeated loading can then accumulate damage or permanent deformation.</p>" +
                        "<p>In cylindrical pavement coordinates, vertical σ<sub>z</sub>, radial σ<sub>r</sub> and circumferential or tangential σ<sub>θ</sub> are <strong>normal stress components</strong>, acting perpendicular to their respective material planes. Shear τ<sub>rz</sub> acts parallel to a plane. Therefore normal stress cannot be excluded while vertical and radial stresses are admitted. The coordinate name tangential does not automatically mean shear stress.</p>" +
                        "<p>Braking, acceleration and turning introduce horizontal tyre-pavement traction, making surface shear important. Internal shear also occurs under a vertical load because adjacent portions of the material deform differently. Weather and thermal restraint can induce additional stresses, so loading is the correct context of the bank's response question without being the only possible physical cause.</p>" +
                        "<p>Elasticity is not a precise synonym for elastic modulus. A large E means small strain for a given compatible stress state; recoverability is a separate behaviour. In a typical unbound-base flexible section, asphalt may be much stiffer than the soil, but its modulus depends on temperature and loading time, and a cement-treated base can be stiffer still. No universal highest-elasticity layer follows from position alone. In a multiaxial state even elastic strain is influenced by other normal stresses through Poisson coupling, not simply by one isolated σ/E.</p>",
                    sources: [
                        { id: "TRAN808-00309", set: 29, question: 81 },
                        { id: "TRAN808-00311", set: 29, question: 83 },
                        { id: "TRAN808-00314", set: 29, question: 86 },
                        { id: "TRAN808-00315", set: 29, question: 87 }
                    ]
                },
                {
                    id: "flexible-mechanistic-distress-criteria",
                    title: "Rutting and fatigue criteria connect elastic response to accumulated distress",
                    html: "<p>DoR Flexible 2021 §§3.2–3.5 uses <strong>top-of-subgrade vertical compressive strain</strong> as a subgrade-rutting predictor, <strong>bottom-of-bituminous-layer horizontal tensile strain</strong> for bottom-up asphalt fatigue, and bottom CTB tensile stress/strain for cemented-base fatigue. These are selected critical response parameters, not assertions that all distress originates at those locations.</p>" +
                        "<p>Rutting is permanent wheel-path deformation. It can arise through densification or shear-related movement in asphalt, granular layers or subgrade. The calculated recoverable strain is an empirical predictor of accumulated rutting, not itself the permanent rut depth. Stress still causes deformation; the bank's wording that strain matters but stress does not is misleading. Deflection is also a direct response to vertical load and need not mean rutting.</p>" +
                        "<p>For the guideline's 20 mm critical average rut-depth definition, write <strong>N<sub>R</sub> = c<sub>R</sub> ε<sub>v</sub><sup>−4.5337</sup></strong>. Eqs.1–2 give c<sub>R</sub> = 4.1656 × 10<sup>−8</sup> at 80% reliability and 1.4100 × 10<sup>−8</sup> at 90%. Use the magnitude of strain as a decimal, not an unconverted microstrain number. N<sub>R</sub> is individual standard-axle repetitions; compare it with 10<sup>6</sup>N<sub>msa</sub>.</p>" +
                        "<p>For its 20% cracked-area fatigue definition, <strong>N<sub>f</sub> = c<sub>f</sub>C ε<sub>t</sub><sup>−3.89</sup> M<sub>Rm</sub><sup>−0.854</sup></strong>. Eqs.3–4 use c<sub>f</sub> = 1.6064 × 10<sup>−4</sup> or 0.5161 × 10<sup>−4</sup> at 80% or 90%, respectively; M<sub>Rm</sub> is in MPa. Define v = V<sub>be</sub>/(V<sub>a</sub> + V<sub>be</sub>), then <strong>C = 10<sup>4.84(v − 0.69)</sup></strong>. V<sub>a</sub> and V<sub>be</sub> are air and effective-binder <em>volumes</em>, not binder mass percentages.</p>" +
                        "<p>These calibrated relations require their specified loading, material and reliability conditions. Greater stiffness may reduce calculated strain but also changes the fatigue expression; evaluate the complete system rather than one factor in isolation. Passing these structural checks does not replace asphalt rut resistance, moisture durability, ageing or construction-quality checks.</p>",
                    sources: [
                        { id: "TRAN808-00308", set: 29, question: 80 },
                        { id: "TRAN808-00316", set: 29, question: 88 }
                    ]
                },
                {
                    id: "circular-load-vertical-stress",
                    title: "Work the three circular-load stress questions with an explicit model",
                    html: "<p>Consider a uniformly loaded circle of radius a on a level, homogeneous, isotropic, linear-elastic half-space. Beneath the centre, at depth z &gt; 0, integration of the point-load solution over the circular area gives <strong>σ<sub>z</sub> = q[1 − (1 + (a/z)<sup>2</sup>)<sup>−3/2</sup>]</strong>. The a/z ratio is dimensionless; σ<sub>z</sub> has the same units as q. This is a homogeneous-half-space result, not an exact multilayer pavement analysis.</p>" +
                        "<ol><li><strong>40 cm depth:</strong> the bank gives q = 7 kgf/cm<sup>2</sup>, a = 16 cm, z = 40 cm. Set a/z = 0.4, then σ<sub>z</sub> = 7[1 − 1.16<sup>−1.5</sup>] = <strong>1.3971 kgf/cm<sup>2</sup></strong>, agreeing with the 1.4 option after rounding.</li>" +
                        "<li><strong>Loaded surface:</strong> for q = 6 kgf/cm<sup>2</sup>, the limiting surface normal stress within the loaded footprint is q itself. Thus σ<sub>z</sub> = <strong>6 kgf/cm<sup>2</sup> = 0.588399 MPa</strong>. A 15 cm radius changes total load, not the imposed pressure.</li>" +
                        "<li><strong>50 cm depth:</strong> q = 7 kgf/cm<sup>2</sup>, a = 15 cm and z = 50 cm give a/z = 0.3. Hence σ<sub>z</sub> = 7[1 − 1.09<sup>−1.5</sup>] = <strong>0.84882 kgf/cm<sup>2</sup></strong>, supporting 0.85 under this assumed model.</li></ol>" +
                        "<p>Use <strong>1 kgf/cm<sup>2</sup> = 0.0980665 MPa</strong>. The source's kg/cm<sup>2</sup> is conventional force-unit shorthand here, not mass density; kgf/mm<sup>2</sup> would be one hundred times larger. As z approaches zero beneath the circle, the bracket approaches 1; as depth becomes very large it approaches zero, providing useful checks.</p>" +
                        "<p>The 50 cm answer does not require an invented Odemark transformation. A real layered solution would need each layer's modulus, Poisson ratio, thickness and interface condition, which that question does not supply. Calling the homogeneous result exact for the unspecified pavement would overstate the data.</p>",
                    sources: [
                        { id: "TRAN808-00312", set: 29, question: 84 },
                        { id: "TRAN808-00313", set: 29, question: 85 },
                        { id: "TRAN808-00317", set: 29, question: 89 }
                    ]
                },
                {
                    id: "semi-rigid-and-composite-design-checks",
                    title: "A stabilized base needs more than a deflection check",
                    html: "<p>A cement-treated base can reduce deflection and protect the subgrade, but its own tensile response can govern. Repeated bending damages the cemented skeleton; shrinkage and thermal movement can create cracks that reflect through the asphalt. Therefore <strong>deflection alone is not a universal semi-rigid design basis</strong>.</p>" +
                        "<p>DoR Flexible 2021 §3.3.3 checks CTB fatigue using tensile response and, additionally, the project axle-load spectrum. Determine the CTB bottom tensile stress for each loading group, divide by the appropriate flexural strength where the model requires a stress ratio, obtain allowable repetitions N<sub>i</sub>, and accumulate <strong>CFD = Σ(n<sub>i</sub>/N<sub>i</sub>)</strong>. The procedure requires a damage budget not exceeding unity; changing thickness or materials requires the responses to be recalculated.</p>" +
                        "<p>The guideline uses <strong>0.80 MPa</strong> contact stress for CTB fatigue analysis, distinct from the <strong>0.56 MPa</strong> standard loading used for asphalt/subgrade strain models. Do not mix those calibrations or turn a tendon, tyre or gross-vehicle load into an axle group by name alone. Evaluate the cracked or uncracked material state required by the adopted model, with strength, modulus and durability established for the actual stabilized material.</p>" +
                        "<p>Under §7.3, a granular crack-relief layer or a stress-absorbing membrane interlayer can reduce reflection into the asphalt. SAMI is not credited as a separate structural layer in that guideline's analysis. A crack-relief treatment does not remove the need for CTB fatigue and drainage checks. For asphalt over an existing concrete slab, also assess joint movement, faulting and interface bonding; a composite overlay cannot be designed as if the old joints had vanished.</p>",
                    sources: [{ id: "TRAN808-00287", set: 27, question: 82 }]
                },
                {
                    id: "dor-flexible-design-workflow",
                    title: "DoR 2021 flexible design is an iterative mechanistic-empirical workflow",
                    html: "<p>The bank's CBR-method label describes a familiar historical starting point. In <strong>DoR Flexible 2021 §§3, 5–8 and 10</strong>, CBR can supply a foundation-modulus estimate, but thickness design is not merely reading one total-thickness curve.</p>" +
                        "<ol><li><strong>Establish demand and support:</strong> select the applicable procedure, design period and performance reliability; calculate opening-year design-lane traffic and VDF/spectra; characterize soils, water conditions and effective support.</li>" +
                        "<li><strong>Select a trial section:</strong> choose materials and layer functions, including drainage and any crack-relief treatment. Establish mix volumetrics, elastic/resilient moduli, Poisson ratios, interface assumptions and constructible trial thicknesses.</li>" +
                        "<li><strong>Analyze elastic response:</strong> use the guideline's layered analysis, such as IITPAVE, with finite upper layers over semi-infinite subgrade. Main standard-axle strain analysis uses 80 kN over four 20 kN wheels, circular uniform contact and 0.56 MPa; use the prescribed CTB loading separately.</li>" +
                        "<li><strong>Read the correct response:</strong> take horizontal tensile strain on the asphalt side of its bottom interface and vertical compressive strain on the subgrade side of its top interface. Check the relevant radial locations and components, not just the first output row. Annex B distinguishes interface sides and software stress signs.</li>" +
                        "<li><strong>Compare with performance models:</strong> check fatigue and rutting life against individual equivalent-axle repetitions; check CTB tensile response and spectrum-based cumulative damage where present.</li>" +
                        "<li><strong>Iterate and detail:</strong> adjust layer thicknesses/materials, rerun the analysis, then verify functional minima, mix/lift constraints, drainage, construction traffic and durability.</li>" +
                        "<li><strong>Communicate the design:</strong> retain the assumptions, editions, test conditions, source materials, section drawings and quality-control basis so construction and later performance can be compared with the design.</li></ol>" +
                        "<p>Full bonding is the stated main-analysis interface idealization; actual poor bond cannot be dismissed because the calculation assumed otherwise. Use model-compatible strain units and the appropriate temperature-dependent mix modulus. A catalogue may suggest a trial, but neither it nor these educational steps certifies a finished site design.</p>",
                    sources: [{ id: "TRAN808-00336", set: 31, question: 85 }]
                },
                {
                    id: "historical-charts-and-r-value-limits",
                    title: "Historical CBR charts, R-value constants and chart provenance",
                    html: "<p>An empirical chart bundles assumptions about loading, material condition, construction and acceptable distress. Before using it, identify its author/edition, axes, traffic measure, units, foundation condition and whether its output is total pavement thickness or a particular layer. A numeric msa axis in one edition does not prove that every historical IRC chart used numeric rather than lettered traffic classes.</p>" +
                        "<p>The bank associates <strong>IRC 37:1984</strong> with the move to cumulative standard-axle repetitions rather than isolated wheel-load classes. That historical principle should not be presented as the present DoR thickness procedure. The original historical chart has not been verified here, so its traffic labels and numerical readings remain on hold.</p>" +
                        "<ul><li>The 3175, 4082 and 5433 kg options are presented as historical wheel-load classes, not the invented standard-axle bands in the explanation. The original table, including whether 5433 should be 5443, is unavailable; do not silently repair it.</li><li><strong>CBR 7% plus medium traffic does not uniquely establish 34 cm.</strong> Without the particular chart and its assumptions, the 33/35/34 cm choices cannot be independently resolved. The 2021 catalogue cannot be substituted and called the missing historical chart.</li><li>The Foster–Ahlvin attribution to charts prepared for μ = 0.5 is a historical claim in the bank whose original publication has not been inspected here. The incompressible idealization is not a universal soil Poisson ratio or a requirement of DoR's layered model.</li></ul>" +
                        "<p><strong>R-value/EWL evidence is secondary:</strong> the identified reproduced Table 2 in <em>Design of Rigid and Flexible Pavements by Various Methods &amp; Their Cost Analysis of Each Method</em> assigns <strong>2460 to four axles</strong> and <strong>330 to two axles</strong>. It is labelled on a yearly basis. This contradicts the bank's four-axle 330 pairing, but the original governing method, factor units and annualization convention remain unconfirmed.</p>" +
                        "<p>Accordingly, do not multiply the reproduced historical constant by a lifetime vehicle count and present the result as a current universal EWL. R-value is a material index, historical EWL traffic constants are method-specific, ESWL matches a selected response, and modern standard-axle repetitions represent calibrated damage. Similar abbreviations do not make these quantities interchangeable.</p>",
                    sources: [
                        { id: "TRAN808-00300", set: 28, question: 85 },
                        { id: "TRAN808-00301", set: 28, question: 86 },
                        { id: "TRAN808-00302", set: 28, question: 87 },
                        { id: "TRAN808-00303", set: 28, question: 88 },
                        { id: "TRAN808-00305", set: 1, question: 88 },
                        { id: "TRAN808-00318", set: 1, question: 89 }
                    ]
                },
                {
                    id: "dor-rigid-scope-and-workflow",
                    title: "DoR rigid scope and design workflow — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> the bank contains individual rigid-pavement concepts, not a complete DoR axle-spectrum design. The DoR-covered <em>Pavement Design Guidelines (Rigid Pavement), 2021</em>, read through the qualified HERMES mirror, principally covers jointed plain concrete and discusses reinforced and prestressed systems. Section 1.2 applies to roads above <strong>450 commercial vehicles/day</strong>, with laden vehicle weight exceeding 3 tonnes, and expressly excludes low-volume rural roads.</p>" +
                        "<p>Section 2.2 generally uses <strong>30 years</strong>, with 20 years permitted in its stated forecasting/low-volume circumstances and engineering judgement required. That exception does not cancel the explicit rural-road scope exclusion. Collect opening-year traffic, growth, axle-group load spectra, wheelbases, day/night proportions, foundation support, concrete properties and anticipated temperature differences. A flexible-pavement msa total alone is not this dataset.</p>" +
                        "<ol><li>Select trial slab thickness, panel dimensions, support layers, bonded/unbonded foundation condition, joint transfer and tied-shoulder or widened-lane arrangement.</li><li>Compute actual repetitions by the relevant axle groups over the design period. Preserve the traffic denominator at every directional, lateral and time-period adjustment.</li><li>Analyze load and temperature together for bottom-up cracking (BUC) and top-down cracking (TDC), using the appropriate pavement configuration and equations/charts.</li><li>Convert combined tensile stress to stress ratio, obtain fatigue life for each group and accumulate damage for both modes. Iterate the section, then design joints, support drainage and other details.</li></ol>" +
                        "<p>For BUC, §2.3.2 specifies 25% of total two-lane/two-way commercial traffic, or 25% of predominant-direction traffic for divided multilane roads. These are critical edge-loading allowances, <strong>not flexible D factors</strong>. TDC also depends on vehicles whose front-to-first-rear axle spacing is less than panel joint spacing. The text mentions a 50% default subset, but its example and prose normalize TDC traffic differently; resolve that before a project calculation rather than blindly combining their factors.</p>" +
                        "<p>The guideline emphasizes approximately 10 AM–4 PM BUC traffic and midnight–6 AM TDC traffic, with location-dependent conditions. Those windows organize the model; a clock reading alone does not establish a real slab's gradient or stress sign.</p>",
                    sources: []
                },
                {
                    id: "rigid-fatigue-budget-example",
                    title: "Rigid stress ratio and fatigue budget — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> no assigned record supplies the complete rigid fatigue spectrum. For each modeled axle/temperature combination, let S be the relevant combined tensile stress and f<sub>r,design</sub> the flexural strength used on the stated age basis. Then <strong>SR = S/f<sub>r,design</sub></strong>. Being below the one-pass strength does not imply an unlimited fatigue life.</p>" +
                        "<p>DoR Rigid 2021 §2.8.4 relates stress ratio to allowable repetitions. Its unlimited-life treatment below SR = 0.45 is a model idealization, not a promise against moisture damage, erosion or every cracking mechanism. Compute <strong>CFD<sub>BUC</sub> = Σ(n<sub>i</sub>/N<sub>i</sub>)</strong> for the relevant daytime groups and the analogous CFD<sub>TDC</sub> for the nighttime groups. Section 3.2 and Appendix IV require attention to both; the worked example explicitly adds them. Do not hide a failing total by reporting only one mode.</p>" +
                        "<p><em>Hypothetical teaching spectrum, not bank data or a proposed concrete minimum:</em> choose f<sub>r,design</sub> = 4.5 MPa. A modeled stress of 2.25 MPa gives SR = 0.50; Table 7 lists approximately 762000 allowable repetitions. An assumed 76200 passes therefore contributes 0.10. A second modeled stress of 2.70 MPa gives SR = 0.60; the table's approximately 30900 allowable passes and an assumed 3090 passes give another 0.10.</p>" +
                        "<p>The illustrative BUC sum is 0.20. If a <em>separate, hypothetically completed</em> nighttime analysis contributes 0.05, the total is <strong>0.25</strong>, below the unity fatigue budget. That supplied nighttime total is not a derived stress solution. Conversely, components 0.70 and 0.40 would total 1.10 and fail the combined budget. Allowable lives are tied to their stated stress ratios; never reuse them after changing strength, temperature, foundation or slab geometry without recalculation.</p>" +
                        "<p>A fatigue-budget comparison is only one part of design. Joint load transfer, erosion, drainage, constructability, material acceptance and source-model limitations still require independent checks. These arithmetic examples do not approve a slab thickness.</p>",
                    sources: []
                },
                {
                    id: "rigid-foundation-k-and-water",
                    title: "Foundation reaction, effective k and water — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> the assigned 9.5 records contain no complete plate-support calculation. In the Winkler idealization, foundation pressure is proportional to local vertical deflection: <strong>q = kδ</strong>. Hence k = q/δ has units force per volume, such as MPa/m or N/mm<sup>3</sup>, not MPa alone. The parameter describes the loaded support system and test basis, not a unique intrinsic soil constant.</p>" +
                        "<p>DoR Rigid 2021 §2.5.2 defines its plate-bearing basis at 1.25 mm deflection and provides an approximate soaked-CBR correlation. Table 2 gives <strong>CBR 5% → k = 42 MPa/m = 0.042 N/mm<sup>3</sup></strong>. This is not the flexible correlation CBR 5% → M<sub>RS</sub> = 50 MPa. The two parameters have different dimensions and uses. The same rigid section recommends minimum subgrade CBR 8%; a correlation exercise at 5% is not by itself an acceptable rigid foundation design.</p>" +
                        "<p>Use §2.5.3's appropriate support-system treatment for granular, cement-treated or DLC layers rather than adding individual k-values. Its effective-k design cap is <strong>300 MPa/m</strong>. The specified DLC-table approach ignores the additional GSB contribution beneath DLC for that estimate; it does not imply the GSB has no drainage or construction function.</p>" +
                        "<p>Stable, uniform and erosion-resistant support prevents local loss of contact. Water plus repeated slab movement can eject fines at joints, progressively creating voids and faulting. Filters retain fines; drainage layers remove water; outlets must remain functional. Groundwater and thaw conditions belong in the support assessment. A rigid slab is not a substitute for drainage.</p>" +
                        "<p>Distinguish a deliberately separated slab/DLC interface from a designed bonded composite. A slip membrane reduces restraint in the former; verified bonding changes composite bending stiffness in the latter. Neither support k nor a bonded-section thickness can be obtained by simply adding layer labels. Tied shoulders and widened outer lanes also change edge response and must match the analysis case.</p>",
                    sources: []
                },
                {
                    id: "rigid-concrete-strength-and-age",
                    title: "Concrete strength, elastic properties and age must not be conflated",
                    html: "<p>Compressive grade describes resistance in a compression test. Flexural strength or modulus of rupture describes beam-test rupture stress. Elastic modulus E describes stiffness before failure. Although all can be expressed in MPa, they are not interchangeable. DoR Rigid 2021 §2.8.1 bases pavement design on flexural strength and requires third-point beam testing; it does not allow cube-to-flexural correlation as the substitute for major-project testing.</p>" +
                        "<p>For preliminary illustration, its M35 example uses <strong>f<sub>r,28</sub> = 0.7√35 ≈ 4.14 MPa</strong>. Applying the example's 1.10 multiplier to the <em>unrounded</em> estimate gives 4.5554 MPa, reported as <strong>4.56 MPa at 90 days</strong>. This demonstrates that particular example's strength-age assumption. It is not a universal M35 approval, a general 4.5 MPa minimum derived from the example, or automatic permission to replace a specified 28-day result by a later result.</p>" +
                        "<p><strong>Later specification, different document:</strong> §3202(3) of SSRBW 2073 with Third Amendment 2082 makes the design basis contractual and specifies characteristic flexural strength at least <strong>4.5 MPa or characteristic compressive strength 40 MPa, unless specified otherwise</strong>. Preserve both the word or and the exception. Its testing/acceptance provisions use a 28-day basis, with earlier tests also specified. The sentence does not establish that every concrete road in every method universally requires M40.</p>" +
                        "<p>Rigid 2021 §§2.8.2–2.8.3 suggests <strong>E = 30000 MPa = 30 GPa</strong>, <strong>μ = 0.15</strong> and <strong>α = 10 × 10<sup>−6</sup>/°C</strong> under its stated design context, with actual material properties to be considered. These are analysis inputs, not measured flexural strengths.</p>" +
                        "<p>Strength-age modelling also does not authorize early opening. The later specification's <strong>§3202(12) forbids vehicular traffic within 28 days</strong> and requires curing, permanently sealed/cured joints, completed shoulders and written Engineer permission. That clause contains no strength-only permission to open earlier.</p>",
                    sources: [{ id: "TRAN808-00144", set: 14, question: 88 }]
                },
                {
                    id: "plate-stiffness-and-contact-radii",
                    title: "Plate stiffness, relative stiffness and contact radii — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> these equations explain rigid-pavement mechanics; no assigned question supplies their full numerical input set. For a homogeneous elastic plate of thickness h, define <strong>D<sub>plate</sub> = Eh<sup>3</sup> / [12(1 − μ<sup>2</sup>)]</strong>. This D is plate rigidity, not the flexible-traffic lane-distribution factor.</p>" +
                        "<p>The characteristic radius of relative stiffness is <strong>ℓ = [Eh<sup>3</sup> / {12k(1 − μ<sup>2</sup>)}]<sup>1/4</sup></strong>. E has units force/area, k force/volume, and ℓ is a length. If E is N/mm<sup>2</sup>, h must be in mm and k in N/mm<sup>3</sup>. Mixing MPa/m with mm without conversion corrupts the fourth root.</p>" +
                        "<p>The h<sup>3</sup> term explains why thickness is powerful: <em>as a hypothetical sensitivity comparison</em>, doubling h at fixed E, μ and k multiplies D<sub>plate</sub> by 8 and ℓ by 8<sup>1/4</sup> ≈ 1.6818. This does not mean every load stress falls by exactly eight; contact geometry and relative stiffness also appear in the stress solution.</p>" +
                        "<p>For one equivalent uniformly loaded circle, <strong>a = √[P/(πq)]</strong>. P is the force assigned to that contact, not an entire axle silently placed onto one tyre. In the classical Westergaard coefficient set used below, an equivalent resisting radius is:</p>" +
                        "<ul><li><strong>b = √(1.6a<sup>2</sup> + h<sup>2</sup>) − 0.675h</strong>, if a &lt; 1.724h.</li><li><strong>b = a</strong>, if a ≥ 1.724h.</li></ul>" +
                        "<p>Contact radius a, resisting radius b and relative-stiffness radius ℓ have different meanings. Keep them in the same length unit. The b relationship and the following classical stress formulas are supplementary textbook mechanics, not an assertion that DoR 2021 approves a modern slab from those formulas alone.</p>",
                    sources: []
                },
                {
                    id: "westergaard-load-positions-and-stress",
                    title: "Westergaard interior, edge and corner stresses: use one consistent coefficient set",
                    html: "<p>The canonical positions are <strong>interior</strong>, sufficiently far from free edges; <strong>edge</strong>, near one free straight boundary; and <strong>corner</strong>, near the meeting of two perpendicular free boundaries. Eccentric describes possible load placement, but is not a fourth name in this classical classification. Real loads are not prohibited from being eccentric.</p>" +
                        "<p>For the homogeneous, constant-thickness, small-deflection elastic plate on a proportional-reaction foundation, one classical coefficient set for <strong>μ approximately 0.15</strong> is given in the cited IIT Bombay teaching note:</p>" +
                        "<p><strong>σ<sub>i</sub> = (0.316P/h<sup>2</sup>) [4 log<sub>10</sub>(ℓ/b) + 1.069]</strong>.</p>" +
                        "<p><strong>σ<sub>e</sub> = (0.572P/h<sup>2</sup>) [4 log<sub>10</sub>(ℓ/b) + 0.359]</strong>.</p>" +
                        "<p><strong>σ<sub>c</sub> = (3P/h<sup>2</sup>) [1 − (√2 a/ℓ)<sup>0.6</sup>]</strong>.</p>" +
                        "<p>Here P is the stated circular-contact load; a, b, h and ℓ use one length unit. P in N with lengths in mm produces N/mm<sup>2</sup> = MPa. Use <strong>base-10 logarithms</strong>; neither natural logarithms nor coefficients from another Westergaard variant can be substituted unchanged.</p>" +
                        "<p>The edge footprint is tangent to a free boundary. For the ideal corner geometry, its centre is a from each perpendicular edge, or √2 a from the corner along the bisector. Interior and edge wheel loading commonly develop critical bottom tension; the corner case can develop top tension. These stresses refer to different locations and faces, so their maxima are not added together.</p>" +
                        "<p>The cited lecture is supplementary classical teaching and itself cites IRC:58-1988; it is not a verified DoR 2021 normative coefficient table. Modern DoR design includes finite panels, joint/shoulder transfer, curled support conditions, axle groups and cumulative combined load-temperature fatigue. The simple formulas cannot reproduce all those effects.</p>",
                    sources: [{ id: "TRAN808-00327", set: 30, question: 88 }]
                },
                {
                    id: "westergaard-worked-example",
                    title: "Classical load-stress arithmetic — syllabus extension",
                    html: "<p><strong>Syllabus extension; hypothetical data, not a recovered bank question:</strong> take a single circular contact load P = 40000 N, slab thickness h = 200 mm, a = 100 mm and a compatible foundation/plate result ℓ = 800 mm, with μ = 0.15. The contact pressure implied by these selected load and radius values is <strong>q = P/(πa<sup>2</sup>) = 1.2732 MPa</strong>. It is deliberately an arithmetic example, not the DoR flexible standard contact pressure.</p>" +
                        "<p>Since 100 &lt; 1.724 × 200, use <strong>b = √56000 − 135 = 101.64 mm</strong>. Also P/h<sup>2</sup> = 40000/40000 = 1 MPa, and log<sub>10</sub>(ℓ/b) ≈ 0.89601. Keeping the unrounded intermediate values gives:</p>" +
                        "<ul><li>Interior: 0.316[4(0.89601) + 1.069] ≈ <strong>1.47 MPa</strong>.</li><li>Edge: 0.572[4(0.89601) + 0.359] ≈ <strong>2.26 MPa</strong>.</li><li>Corner: 3[1 − (√2 × 100/800)<sup>0.6</sup>] ≈ <strong>1.94 MPa</strong>.</li></ul>" +
                        "<p>This example starts with ℓ as a specified compatible analysis input; it does not infer foundation k from CBR. The edge result happens to be largest here, but the corner result refers to a different critical face. Add temperature or restraint effects only at the same location, direction and face under a compatible model. No flexural strength, fatigue spectrum or site foundation investigation has been supplied to approve this slab.</p>" +
                        "<p>A useful sensitivity distinction follows from q = P/(πa<sup>2</sup>): changing P at fixed q changes a, whereas changing P at fixed a changes q. Thus the stress is not generally proportional to P when all dependent inputs are updated. Likewise, a larger h changes both the explicit P/h<sup>2</sup> factor and ℓ and b.</p>",
                    sources: []
                },
                {
                    id: "thermal-gradient-and-bradbury-warping",
                    title: "Temperature difference, curling and Bradbury warping stress",
                    html: "<p>Define <strong>ΔT = T<sub>top</sub> − T<sub>bottom</sub></strong> in °C. This is a through-depth temperature <em>difference</em>; the linear gradient is ΔT/h in °C per unit length. A change in mean slab temperature relative to construction is a different quantity. Uniform free heating changes length without necessarily producing stress; a gradient produces a tendency to curve, and restraint/self-weight/support generates warping stress.</p>" +
                        "<p>In the usual restrained daytime case, positive ΔT makes the top seek greater expansion than the bottom and contributes <strong>bottom tension and BUC</strong>. Negative ΔT can curl the ends upward, reduce contact and contribute <strong>top tension and TDC</strong> with the relevant axle placement. Reversal of the gradient can reverse warping stresses, but neither exactly two reversals per day nor a 10°/30° initiation threshold is a physical requirement. Solar radiation, cloud, wind, curing history and moisture affect the actual state.</p>" +
                        "<p>For a classical rectangular-slab model, let C<sub>x</sub> depend on L<sub>x</sub>/ℓ and C<sub>y</sub> on L<sub>y</sub>/ℓ. One Bradbury interior expression is <strong>σ<sub>wx</sub> = [EαΔT / {2(1 − μ<sup>2</sup>)}] (C<sub>x</sub> + μC<sub>y</sub>)</strong>. Exchange x and y for the other direction. The corresponding free-edge expressions use EαΔT C<sub>x</sub>/2 or EαΔT C<sub>y</sub>/2 for the relevant direction. The coefficients are not universal constants.</p>" +
                        "<p><em>Hypothetical calculation, not bank data or chart readings:</em> choose E = 30000 MPa, α = 10<sup>−5</sup>/°C, ΔT = 10°C, μ = 0.15, C<sub>x</sub> = 0.8 and C<sub>y</sub> = 0.6. EαΔT/2 = 1.5 MPa, giving interior σ<sub>wx</sub> ≈ <strong>1.366 MPa</strong> and the x-direction edge value <strong>1.20 MPa</strong>. Across a separately assumed 0.20 m thickness, that same temperature difference is a 50°C/m gradient, not 50°C across the slab.</p>" +
                        "<p>Actual coefficients need the identified dimension-ratio charts/model, and nonlinear or built-in gradients need the applicable treatment. Do not add a separate Bradbury term to a DoR regression stress that already includes temperature.</p>",
                    sources: [
                        { id: "TRAN808-00295", set: 28, question: 80 },
                        { id: "TRAN808-00296", set: 28, question: 81 },
                        { id: "TRAN808-00297", set: 28, question: 82 },
                        { id: "TRAN808-00333", set: 31, question: 82 }
                    ]
                },
                {
                    id: "slab-drag-and-restraint",
                    title: "Derive slab-drag stress from equilibrium and retain its sign",
                    html: "<p>Uniform shrinkage or a change in mean temperature makes a slab tend to shorten or lengthen. Interface friction opposes that tendency. <strong>Contraction restraint produces tension; expansion restraint produces compression.</strong> Static friction can develop before sliding, so observable movement is not a prerequisite for restraint stress.</p>" +
                        "<p>For a uniform slab of full length L, width B and thickness h on a fully contacting foundation, assume a uniformly mobilized Coulomb friction coefficient f and concrete unit weight γ<sub>c</sub>. The limiting interface shear is fγ<sub>c</sub>h. Equilibrium of half the slab gives drag force <strong>T = fγ<sub>c</sub>hB L/2</strong>. Dividing by the concrete section Bh yields <strong>|σ<sub>f</sub>|<sub>max</sub> = fγ<sub>c</sub>L/2</strong>.</p>" +
                        "<p>The maximum is at the middle under this idealization, falling toward a free end. The cancellation of h is a result of weight and resisting area both increasing with thickness; it is not proof that thickness has no role in real restrained pavements. Bonded bases, anchors, partial contact, nonuniform friction and interaction with joints require an appropriate model rather than this full-uniform-friction expression.</p>" +
                        "<p><em>Hypothetical illustration, not bank inputs:</em> f = 1.5, γ<sub>c</sub> = 24 kN/m<sup>3</sup> and L = 4.5 m give <strong>81 kPa = 0.081 MPa</strong>. The result is tensile for prevented contraction and compressive for prevented expansion. It is a membrane-stress idealization, not compression confined only to the slab bottom.</p>" +
                        "<p>The bank's statement that the top heats does not prove the bottom cannot warm; a gradient only requires different temperatures. Nor does expansion toward a joint follow without specifying mean-temperature change and available movement. Separate through-depth warping from mean-temperature drag before judging a list of thermal statements.</p>",
                    sources: [
                        { id: "TRAN808-00298", set: 28, question: 83 },
                        { id: "TRAN808-00328", set: 30, question: 89 }
                    ]
                },
                {
                    id: "signed-load-warping-combinations",
                    title: "Combine stresses at the same face, not by memorizing the clock",
                    html: "<p>Choose a location, direction and slab face, then assign a sign to each component. For a bottom-edge check with tension positive, write <strong>σ = σ<sub>L</sub> + σ<sub>W</sub> + σ<sub>F</sub></strong>, where the component signs come from their physical action. Do not add interior, edge and corner maxima from different positions.</p>" +
                        "<p>In the <strong>classical winter-midday case</strong>, assume wheel loading creates bottom-edge tension, a positive through-depth temperature difference also creates bottom tension, and the slab's mean temperature is below its reference stress-free temperature so friction restrains contraction. Then the tensile magnitudes add as <strong>L + W + F</strong>. Neither of the bank's two options states that result. Its A, L − W − F, is not justified; B, L + W − F, is not an automatic repair.</p>" +
                        "<p>If instead mean-temperature expansion is restrained while the positive-gradient/load conditions remain, drag is compressive and the classical bottom-edge expression becomes L + W − F. At night, another load position and top-face tension may govern. Season and time do not by themselves establish these actual thermal and restraint conditions. Edge stress is often important, but it is not the only temperature-stress location or cracking mode.</p>" +
                        "<p><em>Hypothetical sign check, not bank data:</em> bottom tensile load stress 2.0 MPa, tensile warping 0.6 MPa and tensile drag 0.1 MPa total 2.7 MPa. Changing only drag to 0.1 MPa compression gives 2.5 MPa. The thermal signs must be justified before either result is used.</p>" +
                        "<p>DoR Rigid 2021 analyzes combined load/temperature response and fatigue under BUC and TDC conditions. Where a regression or finite-element result already includes temperature or restraint, adding the same effect separately double counts it. A standalone classical stress sum is not the complete DoR fatigue workflow.</p>",
                    sources: [
                        { id: "TRAN808-00299", set: 28, question: 84 },
                        { id: "TRAN808-00337", set: 31, question: 86 }
                    ]
                },
                {
                    id: "joint-layout-and-contraction-spacing",
                    title: "Joint purpose and spacing: the two different 4.5 m statements",
                    html: "<table><thead><tr><th scope='col'>Joint</th><th scope='col'>Function and design distinction</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Transverse contraction</th><td>Creates an intended location for shortening/shrinkage-related cracking and movement. Joint spacing, load transfer, saw-cut timing and sealing must work together.</td></tr>" +
                        "<tr><th scope='row'>Expansion or isolation</th><td>Provides movement allowance where the detailed arrangement needs it, particularly at restraints or permanent structures. It is not required at every contraction-joint location.</td></tr>" +
                        "<tr><th scope='row'>Longitudinal</th><td>Divides paving width to manage transverse contraction and warping; ties commonly restrain separation between adjoining lanes.</td></tr>" +
                        "<tr><th scope='row'>Construction</th><td>Occurs at a paving interruption. Locate it at a planned joint where possible and provide the specified connection/transfer arrangement.</td></tr></tbody></table>" +
                        "<p><strong>DoR Rigid 2021 §4.1 limits contraction-joint spacing to 4.5 m</strong> in its stated arrangement to help prevent nighttime top-down cracking. The text also relates spacing to aggregate type and seasonal temperature fluctuation. The bank's 4.5 m key is therefore consistent with that identified guidance, but <strong>it is not calculated from h = 20 cm alone</strong>. Panel length also changes whether front and rear axles can simultaneously occupy the panel in the TDC case.</p>" +
                        "<p>A separate statement in the rigid guideline and later SSRBW §3202(6)(c) concerns <strong>paving width greater than 4.5 m triggering a longitudinal joint</strong>. That is a transverse-width criterion, not evidence for a 4.5 m transverse contraction-joint interval. Identical numbers do not imply identical meanings.</p>" +
                        "<p>Joint layout must also accommodate skewed panels, openings, drainage and adjacent structures. Keep incompressible debris out of movement joints and maintain seals to reduce water entry. Reinforcement may hold cracks tight, but it does not make arbitrary large panel spacing acceptable. The malformed bank option mixing 10 m and a reinforced 14 m statement is not an independent design rule.</p>",
                    sources: [{ id: "DESI787-00032", set: 5, question: 26 }]
                },
                {
                    id: "dowels-and-tie-bars",
                    title: "Dowels transfer load; ties restrain separation",
                    html: "<table><thead><tr><th scope='col'>Dowel bars</th><th scope='col'>Tie bars</th></tr></thead><tbody>" +
                        "<tr><td>Cross transverse joints, approximately parallel to the road/traffic direction.</td><td>Cross longitudinal joints, approximately transverse to the road direction.</td></tr>" +
                        "<tr><td>Share wheel load between slabs while permitting the intended longitudinal opening/closing.</td><td>Resist separation of adjoining lanes or a tied concrete shoulder through axial restraint and anchorage.</td></tr>" +
                        "<tr><td>Conventionally smooth round bars with the specified debonding/sleeve arrangement for movement.</td><td>Commonly deformed, fully anchored bars; the identified rigid guideline also discusses designed plain-bar details.</td></tr>" +
                        "<tr><td>Require checks of concrete bearing, bar response, alignment, embedment, corrosion protection and group action.</td><td>Require sufficient tensile area and bond development on both sides, with the specified cover and placement details.</td></tr></tbody></table>" +
                        "<p>Load transfer is the <strong>purpose</strong> of a dowel, not an alternative to shear or bending as its internal actions. The bar transfers load through shear/bending and concrete bearing; excessive bearing can loosen it and cause faulting. DoR Rigid 2021 §§4.2–4.3 considers the most heavily loaded dowel and decreasing participation of neighbours. Equal sharing among every dowel across the full road width is not the default physical model.</p>" +
                        "<p>Tie bars are not sliding dowels. By holding a joint tight they help preserve the intended aggregate interlock and shoulder/lane interaction, but their primary design role differs from a transverse dowel's. A development-length calculation equates steel force to bond resistance; it must provide anchorage on both sides and account for any unbonded length and placement allowance.</p>" +
                        "<p>The word <strong>bars</strong> alone cannot select one joint type. Dowels can occur at contraction, expansion and specified construction joints; ties commonly occur at longitudinal joints. The assigned question with a contraction-joint key but a tie-bar explanation is internally inconsistent. Joint-bar placement also cannot determine the level of general crack-control reinforcement in a slab.</p>",
                    sources: [
                        { id: "TRAN808-00069", set: 8, question: 82 },
                        { id: "TRAN808-00071", set: 8, question: 84 },
                        { id: "TRAN808-00330", set: 31, question: 79 },
                        { id: "TRAN808-00338", set: 31, question: 87 }
                    ]
                },
                {
                    id: "crack-control-steel-and-placement",
                    title: "Crack-control steel is not automatically bottom beam reinforcement",
                    html: "<p>Distributed reinforcement in a concrete pavement commonly holds cracked faces together, limits opening and preserves aggregate interlock. DoR Rigid 2021 <strong>§4.5</strong> says economically used crack-control reinforcement does not increase the flexural strength of the unbroken slab. Treating that steel as ordinary bottom flexural reinforcement because one wheel-load case produces bottom tension misidentifies its design purpose.</p>" +
                        "<p>The section's general preference is <strong>about 50–60 mm below the top surface</strong>, to control opening of water-admitting top cracks while protecting the steel. By contrast, the guideline's <strong>CRCP/elastic-joint provisions in §§5.2 and 5.7 use mid-depth steel</strong>. These are different systems and purposes. Neither the bank's generic near-bottom key nor its generic middle key can be applied without naming the reinforcement system and governing detail.</p>" +
                        "<p>The crack-control force model is based on restraint, not on an assumed tensile face under a single wheel. For a one-metre strip, a simplified fully mobilized drag force is fWL/2, where W = γ<sub>c</sub>h is slab weight per area and L is the relevant full distance between free joints. With W in kN/m<sup>2</sup>, L in m and allowable steel stress σ<sub>s</sub> in N/mm<sup>2</sup>, <strong>A<sub>s</sub> = 1000 fWL / (2σ<sub>s</sub>)</strong> gives mm<sup>2</sup> per metre width.</p>" +
                        "<p><em>Hypothetical force-balance illustration, not bank data or a reinforcement schedule:</em> choose W = 6 kN/m<sup>2</sup>, L = 4.5 m, f = 1.5 and σ<sub>s</sub> = 200 MPa. The drag-based area is <strong>101.25 mm<sup>2</sup>/m</strong>. Applicable minimum steel, spacing, cover, anchorage, local effects and construction details still need checking. This calculation alone does not select bar diameter or prove crack-width performance.</p>" +
                        "<p>Openings, acute corners, underpasses or other special panels may need locally designed reinforcement for additional actions. Such a structural detail is not evidence for a universal bottom-placement rule for all concrete roads.</p>",
                    sources: [
                        { id: "TRAN808-00331", set: 31, question: 80 },
                        { id: "TRAN808-00355", set: 33, question: 81 }
                    ]
                },
                {
                    id: "concrete-systems-and-retained-joints",
                    title: "CRCP and prestressing reduce some joints, not every joint",
                    html: "<p><strong>JPCP</strong> manages cracking with closely spaced planned joints, normally without distributed crack-control steel throughout every panel. <strong>JRCP</strong> uses reinforcement to hold intermediate cracks tight but still has joints. <strong>CRCP</strong> uses continuous reinforcement to control a pattern of transverse cracks rather than relying on regular intermediate transverse contraction joints. Crack control does not mean the concrete never cracks.</p>" +
                        "<p>Conventional CRCP still needs longitudinal, construction and terminal details. The separate <strong>CRCP with elastic joints</strong> described in DoR Rigid 2021 Chapter 5 intentionally includes weakened-plane elastic joints and end movement arrangements, with reinforcement continuous through the specified joints. Calling that system jointless would contradict the very mechanism used to control its cracking and steel strain.</p>" +
                        "<p>Prestressing introduces compression that offsets part of the tensile demand, potentially allowing longer panels or thinner sections for a justified design. It also introduces anchorage, friction and time-dependent losses; the useful quantity is the effective residual prestress, not merely the initial stressing force. Precast prestressed panel systems still have panel connections and terminal or expansion provisions. Chapter 6 of the identified rigid guideline explicitly retains joint and end-movement design.</p>" +
                        "<p>Therefore the bank's absolute claim that prestressed pavement eliminates <strong>all joints completely</strong> is not defensible, and selecting CRCP instead would not fix that wording. Compare systems by load transfer, crack spacing/opening, restraint, construction sequence and maintenance of retained joints. A statement that a particular type omits intermediate contraction joints cannot be expanded into a statement that it has no joints of any kind.</p>",
                    sources: [{ id: "TRAN808-00275", set: 26, question: 82 }]
                }
            ],
            gaps: [
                "dor-flexible-scope-and-evidence is a source-free syllabus extension: the official 9.5 scope requires DoR methods, but the bank has no complete edition/applicability comparison. Its numerical bounds come from the identified guideline text, not invented bank support.",
                "opening-year-traffic-and-msa is source-free: no assigned question supplies a complete count-to-opening calculation. The 1000-CV/day, two-year-delay and 20-year calculations are explicitly hypothetical teaching inputs, not recovered question givens.",
                "resilient-and-effective-subgrade-modulus is source-free: no assigned 9.5 question contains a complete resilient-modulus or layered-support-equivalence dataset. The correlation and cap are identified DoR provisions; the 115-MPa illustration is hypothetical.",
                "dor-rigid-scope-and-workflow is source-free: axle spectra, wheelbases, directional/day-night traffic and a full trial-section design are absent from the assigned records. DoR provisions are taught without attaching unrelated question IDs.",
                "rigid-fatigue-budget-example is source-free: expected repetitions, example stresses, chosen flexural strength and the separately supplied TDC subtotal are hypothetical. The two approximate allowable lives are identified Rigid 2021 Table 7 values, not bank data.",
                "rigid-foundation-k-and-water is source-free: no assigned record provides a full plate test, effective-k calculation or drainage design. CBR 5 to k 42 MPa/m is a scoped table correlation, not a site-foundation approval.",
                "plate-stiffness-and-contact-radii is source-free: the bank lacks the full inputs for plate rigidity, relative stiffness and resisting-radius calculations. Its thickness scaling is a mathematical teaching comparison.",
                "westergaard-worked-example is source-free: P, h, a and the compatible given relative-stiffness radius are hypothetical. It demonstrates one consistent classical coefficient set, not a DoR-compliant slab design.",
                "Original historical CBR traffic charts, the CBR-7 medium-traffic thickness chart and the original Foster–Ahlvin publication were not verified. The R-value/EWL reproduction is secondary; the original factor units, annualization rule and governing-method edition remain unresolved.",
                "Flexible 2021's CBR-percentile wording does not define statistical ordering. These notes explain why 90% exceedance means a lower-tail value, but do not claim that the document explicitly states that convention. Several main-text/annex boundary and parameter inconsistencies remain flagged for authoritative clarification.",
                "Additional examples within source-linked blocks, including balanced lane traffic, CBR sampling, Bradbury coefficients, slab drag, signed stresses and crack-control steel area, are explicitly hypothetical syllabus teaching. Their source links identify related concepts, not a bank dataset containing those added numbers.",
                "No site-specific material testing, multilayer/finite-element run, historical-chart reconstruction, construction approval or confirmation of latest/current adoption is supplied. Both 2021 pavement copies are nongovernment HERMES mirrors not byte-compared with unavailable official downloads; the amended specifications are a separately identified edition."
            ],
            cautions: [
                {
                    html: "<p><strong>Weather is not excluded from design:</strong> TRAN808-00048 stores weather as the factor not considered. At most this describes the absence of an explicit independent weather variable in a particular legacy chart. DoR Flexible 2021 expressly includes weather, moisture, temperature and frost; soaked CBR does not replace the entire environmental assessment.</p>",
                    sources: [{ id: "TRAN808-00048", set: 6, question: 83 }]
                },
                {
                    html: "<p><strong>Percentile and reliability ambiguity:</strong> TRAN808-00045's 0.90 matches the guideline's 90th-percentile label, but the text does not define ordering. The bank's only-one-tenth-weaker interpretation requires approximately the lower 10th ascending percentile, or 90% exceedance, not the upper 90th percentile. Performance-model reliability at the 20-msa boundary is separate; the 2-msa Annex E limit is separate again.</p>",
                    sources: [{ id: "TRAN808-00045", set: 6, question: 80 }]
                },
                {
                    html: "<p><strong>Correct key, defective explanation:</strong> TRAN808-00061's 0.40 is supported for four-lane undivided roads using total two-way CV traffic. Main §4.5 uses 0.50, not 0.75, for two-lane/two-way roads. Four-lane divided roads use 0.75 of directional traffic, equal to 0.375 of balanced two-way traffic. Annex E's double-lane 0.75 belongs to its separate low-volume procedure.</p>",
                    sources: [{ id: "TRAN808-00061", set: 7, question: 85 }]
                },
                {
                    html: "<p><strong>Fourth-power assumption:</strong> TRAN808-00063 gives 16 only for a comparable axle/wheel configuration under the fourth-power approximation. The 80 kN reference is an axle force, not one tyre load or total vehicle mass. Different configurations require their appropriate equivalence basis.</p>",
                    sources: [{ id: "TRAN808-00063", set: 7, question: 87 }]
                },
                {
                    html: "<p><strong>Scope the 15 cm minimum:</strong> TRAN808-00066's key is consistent with Flexible 2021 §7.1's 150 mm granular-base minimum. The undefined medium-volume label does not by itself establish material, catalogue, drainage or design adequacy. The separate crack-relief and Annex E gravel-road provisions must not be generalized into the same rule.</p>",
                    sources: [{ id: "TRAN808-00066", set: 7, question: 90 }]
                },
                {
                    html: "<p><strong>Unspecified bars cannot identify one joint:</strong> TRAN808-00071 keys contraction joints but explains tie bars at longitudinal joints. TRAN808-00330 also leaves bar type unspecified. Dowels can cross several transverse joint types; ties ordinarily cross longitudinal joints. The records are preserved, not silently rekeyed.</p>",
                    sources: [
                        { id: "TRAN808-00071", set: 8, question: 84 },
                        { id: "TRAN808-00330", set: 31, question: 79 }
                    ]
                },
                {
                    html: "<p><strong>Surface wording:</strong> all structural layers withstand stress, so TRAN808-00163 does not uniquely isolate the surface as written. TRAN808-00164's resist-friction option should not be taught literally: the surface must provide friction to resist skidding while maintaining suitable riding quality.</p>",
                    sources: [
                        { id: "TRAN808-00163", set: 16, question: 85 },
                        { id: "TRAN808-00164", set: 16, question: 86 }
                    ]
                },
                {
                    html: "<p><strong>No universal surfacing or cost ranking:</strong> TRAN808-00105 incorrectly implies all gravel roads are unusable during monsoon; drainage and support determine all-weather performance. TRAN808-00113's bituminous preference is contextual. TRAN808-00132 compares overlapping flexible/WBM categories and supplies no project cost basis, so cheapest is not a universal result.</p>",
                    sources: [
                        { id: "TRAN808-00105", set: 11, question: 84 },
                        { id: "TRAN808-00113", set: 12, question: 80 },
                        { id: "TRAN808-00132", set: 13, question: 87 }
                    ]
                },
                {
                    html: "<p><strong>Highest-CBR key error:</strong> TRAN808-00128 stores subgrade. In the intended unbound-layer comparison, base is the appropriate higher-CBR layer. The identified amended specification gives base 80 versus WBM subbase 30 or CRM/WMM subbase 60, with their stated testing and contract conditions. Do not replace these with an invented universal layer hierarchy or acceptance limit.</p>",
                    sources: [{ id: "TRAN808-00128", set: 13, question: 84 }]
                },
                {
                    html: "<p><strong>M40 is not an exceptionless 2021 rule:</strong> TRAN808-00144 omits the governing edition, contract basis and age. Rigid 2021 contains an M35 example with approximately 4.14 MPa at 28 days and 4.56 MPa at 90 days using its example uplift. The later amended §3202 specifies 4.5 MPa flexural or 40 MPa compressive unless otherwise specified, with 28-day testing/acceptance. None of this permits early traffic contrary to §3202(12)'s 28-day restriction.</p>",
                    sources: [{ id: "TRAN808-00144", set: 14, question: 88 }]
                },
                {
                    html: "<p><strong>Idealizations are not literal material laws:</strong> non-yielding in TRAN808-00269 means no unacceptable permanent deformation, not zero elastic deflection. TRAN808-00271 should discuss spreading of load/stress, not spreading of compressive strength. A frustum sketch is not an exact layered-elastic stress field.</p>",
                    sources: [
                        { id: "TRAN808-00269", set: 25, question: 87 },
                        { id: "TRAN808-00271", set: 25, question: 89 }
                    ]
                },
                {
                    html: "<p><strong>Qualify functions:</strong> reducing traffic is not a pavement-layer function in TRAN808-00274, but waterproofing is not universal for intentionally permeable systems. In TRAN808-00307, the rigid slab is the principal plate-bending element, yet its base still carries and transmits reactions; carry load cannot be excluded literally.</p>",
                    sources: [
                        { id: "TRAN808-00274", set: 26, question: 81 },
                        { id: "TRAN808-00307", set: 29, question: 79 }
                    ]
                },
                {
                    html: "<p><strong>Binder thickness is under-specified:</strong> TRAN808-00282 gives no mix, structure, traffic or specification. Its keyed 100–150 mm overlaps 100–200 mm, and g/cm<sup>2</sup> is not a length. No universal binder-course thickness is established.</p>",
                    sources: [{ id: "TRAN808-00282", set: 26, question: 89 }]
                },
                {
                    html: "<p><strong>Structural and environmental conditions overlap:</strong> avoiding subgrade overstress in TRAN808-00280 does not make flooding irrelevant. TRAN808-00281 identifies one frost-protection arrangement, not a compulsory distinct layer at every site; a suitably designed subbase may itself perform that function.</p>",
                    sources: [
                        { id: "TRAN808-00280", set: 26, question: 87 },
                        { id: "TRAN808-00281", set: 26, question: 88 }
                    ]
                },
                {
                    html: "<p><strong>No unique incorrect pair:</strong> TRAN808-00286 keys high stress–high thickness even though its explanation recognizes that as a reasonable conditional trend. The other pairs are also plausible. No new incorrect pair or missing option is invented to force the stored answer.</p>",
                    sources: [{ id: "TRAN808-00286", set: 27, question: 81 }]
                },
                {
                    html: "<p><strong>Semi-rigid design is not deflection-only:</strong> TRAN808-00287's keyed response omits cemented-layer tensile stress/strain, fatigue damage, shrinkage and reflection cracking. DoR Flexible 2021 requires CTB performance checks in addition to the asphalt and subgrade checks.</p>",
                    sources: [{ id: "TRAN808-00287", set: 27, question: 82 }]
                },
                {
                    html: "<p><strong>Configuration does not supply pressure:</strong> TRAN808-00288 keys contact pressure, but wheel arrangement directly identifies wheel number and layout. Load plus contact area, or an explicitly adopted tyre-pressure approximation, is needed to establish q. Configuration alone cannot do so.</p>",
                    sources: [{ id: "TRAN808-00288", set: 27, question: 83 }]
                },
                {
                    html: "<p><strong>Contact assumptions:</strong> tyre inflation pressure and average contact pressure are not exactly identical as TRAN808-00289 states. TRAN808-00292's circle is an equivalent analytical footprint, not a universal actual tyre shape. TRAN808-00294's q/p ratio is 1 only after adopting equality; the stated tyre pressure alone does not determine it. No unverified historical pressure-rigidity curve is substituted.</p>",
                    sources: [
                        { id: "TRAN808-00289", set: 27, question: 84 },
                        { id: "TRAN808-00292", set: 27, question: 87 },
                        { id: "TRAN808-00294", set: 27, question: 89 }
                    ]
                },
                {
                    html: "<p><strong>Missing load data and unsupported key:</strong> TRAN808-00293 gives failure data for 3125 kg but asks for 3175 kg. The stated repetition pair implies 105000/22500 = 4.6667 for 3125 kg relative to the stated reference, not 4. None of 6/2/4/8 resolves the actual question. Do not truncate the ratio or silently repair either printed load.</p>",
                    sources: [{ id: "TRAN808-00293", set: 27, question: 88 }]
                },
                {
                    html: "<p><strong>Historical charts are missing:</strong> TRAN808-00300 cannot establish one notation for every IRC chart. TRAN808-00301's explanation invents standard-axle traffic bands for options stated as historical wheel loads. TRAN808-00302's 34 cm cannot be verified from CBR 7 and medium traffic without the original chart. TRAN808-00303's historical cumulative-standard-axle principle does not authorize using a 1984 chart as current DoR design.</p>",
                    sources: [
                        { id: "TRAN808-00300", set: 28, question: 85 },
                        { id: "TRAN808-00301", set: 28, question: 86 },
                        { id: "TRAN808-00302", set: 28, question: 87 },
                        { id: "TRAN808-00303", set: 28, question: 88 }
                    ]
                },
                {
                    html: "<p><strong>Historical EWL pairing:</strong> the inspected audit's secondary table reproduction assigns four axles to 2460, not TRAN808-00305's keyed 330; 330 belongs to two axles. Its yearly-basis label is not verification of the original annualization method or units. The explanation's unrestricted lifetime-count multiplication is not supported, and the original governing table remains an evidence gap.</p>",
                    sources: [{ id: "TRAN808-00305", set: 1, question: 88 }]
                },
                {
                    html: "<p><strong>Unverified original chart attribution:</strong> TRAN808-00318's Foster–Ahlvin/μ = 0.5 history was not checked against the original publication. Treat 0.5 as a stated incompressible chart idealization, not a universal pavement-material input or a substitute for the identified DoR layer properties.</p>",
                    sources: [{ id: "TRAN808-00318", set: 1, question: 89 }]
                },
                {
                    html: "<p><strong>Rutting versus immediate response:</strong> TRAN808-00308's vertical loading can cause deflection as well as accumulated rutting; rutting is not only consolidation. TRAN808-00316 correctly identifies the selected vertical compressive-strain criterion, but its explanation should not deny the causal role of stress. Elastic strain is a calibrated predictor of permanent damage, not identical to that damage.</p>",
                    sources: [
                        { id: "TRAN808-00308", set: 29, question: 80 },
                        { id: "TRAN808-00316", set: 29, question: 88 }
                    ]
                },
                {
                    html: "<p><strong>Modulus and stress terminology:</strong> TRAN808-00311 does not define highest elasticity; modulus ordering depends on material and temperature, and a cemented base can exceed the asphalt modulus. TRAN808-00314 has no valid exclusion: vertical and radial stresses are normal stresses, and shear is also present. Its stored normal-stress key contradicts its explanation.</p>",
                    sources: [
                        { id: "TRAN808-00311", set: 29, question: 83 },
                        { id: "TRAN808-00314", set: 29, question: 86 }
                    ]
                },
                {
                    html: "<p><strong>Correct numerics under a limited model:</strong> TRAN808-00312 gives 1.3971 kgf/cm<sup>2</sup>; TRAN808-00313 gives the loaded-surface pressure 6 kgf/cm<sup>2</sup>; TRAN808-00317 gives 0.84882 kgf/cm<sup>2</sup> under the homogeneous-half-space assumption. The latter does not require an Odemark transformation to produce 0.85. Missing moduli/interfaces prevent calling these exact multilayer-pavement results. Retain force units and the centre/loaded-footprint condition.</p>",
                    sources: [
                        { id: "TRAN808-00312", set: 29, question: 84 },
                        { id: "TRAN808-00313", set: 29, question: 85 },
                        { id: "TRAN808-00317", set: 29, question: 89 }
                    ]
                },
                {
                    html: "<p><strong>Thermal conditions need restraint and a defined gradient:</strong> TRAN808-00295–00298 concern slab temperature, through-depth warping and restrained movement. Free uniform heating need not create stress; static restraint can exist before sliding. The gradient is through slab depth, not necessarily between separate pavement courses. TRAN808-00333's reversal is possible, not guaranteed exactly twice daily. ΔT in these notes is top minus bottom in °C, not °C/m.</p>",
                    sources: [
                        { id: "TRAN808-00295", set: 28, question: 80 },
                        { id: "TRAN808-00296", set: 28, question: 81 },
                        { id: "TRAN808-00297", set: 28, question: 82 },
                        { id: "TRAN808-00298", set: 28, question: 83 },
                        { id: "TRAN808-00333", set: 31, question: 82 }
                    ]
                },
                {
                    html: "<p><strong>Neither winter-midday option is supported by the stated classical case:</strong> for bottom-edge load tension, positive-gradient warping tension and contraction drag, TRAN808-00337 requires L + W + F. A subtracts both effects and B still subtracts contraction tension; do not silently switch to B. Actual signs require thermal/restraint data. TRAN808-00299's edge emphasis does not eliminate interior/corner or TDC checks.</p>",
                    sources: [
                        { id: "TRAN808-00299", set: 28, question: 84 },
                        { id: "TRAN808-00337", set: 31, question: 86 }
                    ]
                },
                {
                    html: "<p><strong>Thermal statement set is ambiguous:</strong> TRAN808-00328's heated top does not imply its bottom cannot warm. Expansion toward joints depends on mean-temperature change and freedom to move. Friction is not generally compression acting only at the bottom; contraction restraint gives tension. The supplied II-and-III explanation is not a complete mechanical justification.</p>",
                    sources: [{ id: "TRAN808-00328", set: 30, question: 89 }]
                },
                {
                    html: "<p><strong>Identify the reinforcement system:</strong> TRAN808-00331's general near-bottom rule is contradicted by Rigid 2021 §4.5's preferred crack-control placement 50–60 mm below the top. TRAN808-00355's middle placement applies to the guideline's separate CRCP/elastic-joint case, not every reinforced road. Generic beam-tension reasoning and joint-bar positions cannot decide general pavement crack-control detailing.</p>",
                    sources: [
                        { id: "TRAN808-00331", set: 31, question: 80 },
                        { id: "TRAN808-00355", set: 33, question: 81 }
                    ]
                },
                {
                    html: "<p><strong>All-joints-eliminated is false as a general claim:</strong> TRAN808-00275's prestressed key does not remove panel, construction or terminal movement details. CRCP removes regular intermediate transverse contraction joints, not all joints; the guideline's CRCP-EJ system explicitly retains elastic joints. No alternative key cures the absolute wording.</p>",
                    sources: [{ id: "TRAN808-00275", set: 26, question: 82 }]
                },
                {
                    html: "<p><strong>4.5 m has a verified but specific context:</strong> DESI787-00032's contraction-joint key is consistent with Rigid 2021 §4.1, not derived from 20 cm thickness alone. Its mixed 10 m/14 m option is malformed. The later specification's separate 4.5 m paving-width condition concerns longitudinal joints and must not be offered as proof of transverse spacing.</p>",
                    sources: [{ id: "DESI787-00032", set: 5, question: 26 }]
                },
                {
                    html: "<p><strong>Primary-text unit defect, not a bank citation:</strong> Flexible 2021 Eq.12 omits division by 10<sup>6</sup> despite defining its result as msa. Use the unit-corrected expression taught above; the unconverted product is individual repetitions. Opening-year A and count-year P are also different. No assigned source ID is invented for this equation-printing issue.</p>",
                    sources: []
                },
                {
                    html: "<p><strong>Do not silently reconcile internal guideline inconsistencies:</strong> Flexible 2021's main reliability paragraph includes 20 msa in the 90% category, while an Annex C catalogue description says 80% up to 20. Main §5.3 says effective CBR more than 5% above 450 two-way CV/day, whereas Annex A says minimum 5%. Its long-life main text uses 70 microstrain while annex examples use 80, and Annex E prints both 148 and 128 kN tandem references.</p>" +
                        "<p>Rigid 2021's extracted built-in differential appears as 50oC, but its example's 13.4°C equals 16.8/2 + 5, not +50; no 50°C rule is certified here. Its recommended CBR 8 and example CBR 6, and its prose/example TDC traffic normalization, also need contextual clarification. Several regression equations lose symbols in extraction. These holds prevent treating a copied chart or spreadsheet as independently verified project design.</p>",
                    sources: []
                },
                {
                    html: "<p><strong>Authority and provenance limit:</strong> both DoR-covered 2021 pavement documents were read as nongovernment HERMES mirror copies, not byte-verified official downloads. The 2073 specifications with Third Amendment 2082 are a different, government-hosted edition. The IIT Bombay page is classical supplementary teaching and the EWL table is a secondary reproduction. These original educational notes do not certify current law, latest adoption, full code compliance or construction approval; the stored bank records and keys remain untouched.</p>",
                    sources: []
                }
            ],
            references: [
                {
                    title: "DoR — Guidelines for the Design of Flexible Pavements-2014 (Second Edition 2021), April 2021; nongovernment HERMES mirror, not byte-compared with the unavailable official PDF",
                    url: "https://download.hermes.com.np/wp-content/uploads/sites/12/2023/07/2021-Guidelines-for-the-design-of-Flexible-Pavement-2021.pdf"
                },
                {
                    title: "DoR — Pavement Design Guidelines (Rigid Pavement), 2021; nongovernment HERMES mirror, not byte-compared with the unavailable official PDF",
                    url: "https://download.hermes.com.np/wp-content/uploads/sites/12/2023/07/RIgid-Pavement-Guideline-2021.pdf"
                },
                {
                    title: "DoR — Standard Specifications for Road and Bridge Works 2073, with Third Amendment 2082, effective 1 Shrawan 2082; government-hosted edition, especially §§1003, 1201, 1203, 1204, 1208 and 3202",
                    url: "https://giwmscdnone.gov.np/media/files/Standard%20Specifications%20For%20Road%20And%20Bridge%20Works_houcxlr.pdf"
                },
                {
                    title: "Tom V. Mathew, IIT Bombay — Rigid pavement design, page dated 10 January 2019; supplementary classical Westergaard/Bradbury teaching citing IRC:58-1988, not DoR 2021 authority",
                    url: "https://www.civil.iitb.ac.in/tvm/nptel/411_lnTse/web/web.html"
                },
                {
                    title: "Design of Rigid and Flexible Pavements by Various Methods & Their Cost Analysis of Each Method — reproduced Table 2 on Academia; secondary historical EWL evidence, original method edition/units/annualization unverified",
                    url: "https://www.academia.edu/figures/4741904/table-2-design-of-rigid-and-flexible-pavements-by-various"
                }
            ]
        }
    });
})();