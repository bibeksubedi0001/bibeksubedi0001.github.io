(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0704: {
            code: "ACiE0704",
            questionCount: 40,
            blocks: [
                {
                    id: "river-training-purpose-and-system-boundary",
                    title: "River training begins with a purpose, not a structure",
                    html: "<p><strong>7.4 River training works</strong> covers river stages and the need for training; design principles for guide bunds, launching aprons, levees and spurs; and watershed management. Training seeks a suitable pattern of flow and sediment movement where an identified asset, water use or community is at risk. Its objectives can include passing floods through a reach, aligning flow at a crossing or intake, and limiting damaging bank erosion. These objectives must be checked together rather than treating a straighter channel as an end in itself.</p>" +
                        "<p>Distinguish the functions of the works. A <strong>guide bank</strong> controls approach and passage near a structure; a <strong>spur or groyne</strong> projects into the current; a <strong>levee</strong> is a longitudinal flood barrier; a <strong>launching apron</strong> protects a toe as scour develops. These are complementary tools, not interchangeable names. A catchment area is the land draining to an outlet, not a constructed river-training component. Nevertheless, its runoff and sediment supply are essential inputs to an integrated plan.</p>" +
                        "<p>Compare intervention with alternatives such as maintaining a flood corridor, setting assets back, restoring riparian cover or accepting tolerable channel movement. Include upstream backwater, downstream sediment effects, habitats, access and recurring maintenance costs. Protecting one bank can transfer attack to another. The aim is defensible risk reduction over the affected river system, not an unsupported promise to eliminate erosion or floods.</p>",
                    sources: [
                        { id: "IRRI951-00326", set: 31, question: 72 },
                        { id: "IRRI951-00332", set: 31, question: 78 },
                        { id: "IRRI951-00066", set: 7, question: 78 }
                    ]
                },
                {
                    id: "river-training-reaches-and-headworks-siting",
                    title: "River stages and headworks siting",
                    html: "<p>The bank uses a <strong>three-reach teaching model: upper, middle and lower course</strong>. This is a useful longitudinal description, not a law that every river has exactly three separately identifiable stages. A hydraulic stage also means water-surface elevation at a gauge; that changing water level is different from a geomorphological reach name.</p>" +
                        "<table><thead><tr><th scope='col'>Broad reach</th><th scope='col'>Common tendencies, not universal conditions</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Upper course</th><td>Steep terrain, confined valleys and coarse bed material; the bank associates steep hilly reaches with its boulder-stage terminology.</td></tr>" +
                        "<tr><th scope='row'>Middle course</th><td>More opportunity for lateral adjustment and sediment exchange; alluvial plains may contain meandering or braided channels.</td></tr>" +
                        "<tr><th scope='row'>Lower course</th><td>Often flatter gradients, floodplain storage and deposition; a delta is one possible terminal environment, not the ending of every river.</td></tr></tbody></table>" +
                        "<p>Rocky, boulder, alluvial and valley descriptions classify different aspects of terrain or material and need an identified textbook convention. Do not assemble every name in the options into an arbitrary stage count. The unexplained <em>Through stage</em> option supplies no reliable definition and is not silently changed to another word.</p>" +
                        "<p>For headworks, compare seasonal flow reliability and diversion levels, approach alignment and channel migration, foundation and bank geology, flood and debris exposure, and compatibility with bed and suspended sediment. A stable-looking rocky reach can lack the required water level or accessibility; a broad alluvial reach can require substantial sediment and training works. Reach classification helps organize investigation, but no stage name by itself establishes the best site.</p>",
                    sources: [
                        { id: "IRRI951-00095", set: 10, question: 74 },
                        { id: "IRRI951-00318", set: 30, question: 76 },
                        { id: "IRRI951-00319", set: 30, question: 77 }
                    ]
                },
                {
                    id: "river-training-gradient-roughness-and-velocity",
                    title: "A stage name cannot determine velocity",
                    html: "<p>Discharge and velocity are different quantities: <strong>Q = AV</strong>, where Q is water discharge in m<sup>3</sup>/s, A is flowing cross-sectional area in m<sup>2</sup>, and V is section-mean velocity in m/s. The local velocity attacking a spur nose or outer bank can differ substantially from V. A downstream increase in discharge does not, by itself, establish either an increase or a decrease in velocity because area also changes.</p>" +
                        "<p>For an ordinary channel reach where a calibrated resistance approximation is appropriate, the SI Manning relation is <strong>V = R<sup>2/3</sup>S<sub>f</sub><sup>1/2</sup>/n</strong>. Hydraulic radius R = A/P is in m, P is wetted perimeter in m, S<sub>f</sub> is energy slope in m/m, and the SI coefficient n has units s/m<sup>1/3</sup>. Equating energy slope with bed slope requires approximately steady, uniform flow; rapidly varied flow near a structure needs more than this substitution.</p>" +
                        "<p><em>Derived comparison, not bank measurements:</em> at unchanged R, multiplying S<sub>f</sub> by four and n by two leaves the estimated V unchanged, since √4/2 = 1. A steeper reach therefore need not be faster if roughness or depth changes sufficiently. Large partly exposed boulders and shallow irregular flows also weaken a simple Manning representation, as the USBR normal-flow discussion cautions.</p>" +
                        "<p>The boulder-stage answer is a mnemonic for steep upper-course conditions. Gradient can support high velocity, but boulder roughness, pools, depth, flood stage and local controls determine actual speeds. It is not a universal ranking of every point in a river or proof that every boulder is mobile at ordinary flow.</p>",
                    sources: [{ id: "IRRI951-00321", set: 30, question: 79 }]
                },
                {
                    id: "river-training-channel-forming-discharge",
                    title: "Dominant discharge measures long-term geomorphic work",
                    html: "<p><strong>Dominant or channel-forming discharge</strong> describes the importance of flows that repeatedly reshape a channel. The related effective-discharge approach identifies the discharge range contributing most to sediment transport over an observation period. Flow magnitude matters because transport rises strongly once grains become mobile; frequency and duration matter because a powerful event can be very brief. The relevant combination is sediment-transport effectiveness integrated over time, not discharge multiplied by frequency alone.</p>" +
                        "<p>Let G<sub>s</sub>(Q) be an appropriate sediment-transport rate in kg/s for water discharge Q in m<sup>3</sup>/s. Over T seconds, transported mass is <strong>M<sub>s</sub> = ∫<sub>0</sub><sup>T</sup> G<sub>s</sub>(Q(t)) dt</strong>, in kg. For measured discharge classes, a useful approximation is M<sub>s,i</sub> ≈ G<sub>s,i</sub>Δt<sub>i</sub>. Compare these class contributions, accounting for class widths and the measured transport relation, rather than maximizing Q times its occurrence count.</p>" +
                        "<p>Specify the sediment fraction and channel-forming process being examined: abundant fine wash load need not control bed-material adjustment in the same way as mobile sand or gravel. Supply limitations, bed armouring and differences between rising and falling floods can make one rating relation inadequate. An effective-discharge estimate is consequently dependent on the data period and method.</p>" +
                        "<p>This flow is not automatically the median, annual maximum, largest recorded flood or a uniquely two-year event. Bankfull and effective discharges can be related in some rivers but are not identical definitions. Rare extreme floods can dominate in particular settings, so neither always choose the maximum nor always exclude large floods is a valid design rule.</p>",
                    sources: [{ id: "IRRI951-00052", set: 6, question: 75 }]
                },
                {
                    id: "river-training-sediment-continuity-and-bed-change",
                    title: "Aggradation and degradation follow sediment continuity",
                    html: "<p>An <strong>alluvial channel</strong> has boundaries formed partly or largely from transported deposits that can be reworked by flow. Its geometry reflects both sediment supply and the ability to transport that supply. A reach can pass sediment while remaining approximately stable on average; stability does not mean that grains stop moving.</p>" +
                        "<p>For a defined reach, write a sediment mass balance as <strong>dM<sub>store</sub>/dt = G<sub>in</sub> + G<sub>lateral</sub> − G<sub>out</sub></strong>. Stored dry sediment mass M<sub>store</sub> is in kg and each G is a sediment mass flux in kg/s. Include tributary and bank contributions consistently. Storage may occur in the bed, bars or floodplain, so a positive balance does not mean every point of the bed rises equally.</p>" +
                        "<ul><li><strong>Aggradation:</strong> sustained supply exceeding onward transport leads to net deposition and, where stored in the bed, a rising bed level. Available flood conveyance and intake approach conditions may deteriorate.</li><li><strong>Degradation:</strong> an erodible bed can supply a sediment deficit when outgoing transport exceeds incoming supply, lowering the bed and potentially exposing foundations or destabilizing bank toes.</li><li><strong>Adjustment:</strong> width, slope, bed texture and channel pattern can change together. Armouring or resistant layers may eventually constrain incision.</li></ul>" +
                        "<p>A sediment trap upstream may reduce deposition at one location but increase sediment deficit downstream; a local contraction may scour while its backwater reach deposits. Assess these linked effects before selecting works. Aggrading, degrading and migrating rivers deserve investigation where they threaten a defined interest, not automatic correction merely because they are changing.</p>",
                    sources: [{ id: "IRRI951-00323", set: 31, question: 69 }]
                },
                {
                    id: "river-training-meanders-wavelength-and-sinuosity",
                    title: "Meander mechanisms and the length being measured",
                    html: "<p>A meander couples curvature, a non-uniform velocity field, sediment movement and bank resistance. In a typical bend, secondary or helicoidal circulation has an outward component near the surface and a return component nearer the bed. Together with the main current it helps redistribute sediment and boundary stress: erosion commonly attacks the outer cut bank, while an inner-bank point bar builds. These are tendencies affected by flow stage, bank strength and planform; unequal erosion is a description of part of the process, not its sole cause.</p>" +
                        "<p>Define the geometry before giving a length. <strong>Meander wavelength λ</strong> is down-valley spacing along a specified local valley axis between corresponding points of successive complete cycles. A left-hand-bend apex to the next corresponding left-hand-bend apex spans a cycle; the adjacent opposite-hand apex is not that same endpoint. Channel-centreline length L<sub>c</sub> follows the winding path between the selected endpoints. Valley-axis distance L<sub>v</sub> is a different measurement, and sinuosity is <strong>s = L<sub>c</sub>/L<sub>v</sub></strong>, dimensionless when both lengths use the same units.</p>" +
                        "<p><em>Assumed geometry illustration, not bank givens:</em> over one complete cycle on a locally straight valley axis, let L<sub>v</sub> = λ = 1 000 m and L<sub>c</sub> = 1 400 m. Then s = 1.40; a journey along the channel is 1 400 m, not its 1 000 m wavelength. The source's wording about distance along the river and its explanation about straight valley-axis distance cannot be treated as interchangeable definitions.</p>" +
                        "<p>Meander migration creates floodplain habitat, bars and exchange with adjacent land. Intervention depends on consequences for people and assets; forcing every naturally sinuous channel into a fixed alignment can increase erosion elsewhere and remove these benefits.</p>",
                    sources: [
                        { id: "IRRI951-00322", set: 31, question: 68 },
                        { id: "IRRI951-00333", set: 32, question: 70 }
                    ]
                },
                {
                    id: "river-training-high-low-and-mean-water-objectives",
                    title: "High-, low- and mean-water training",
                    html: "<p>The traditional classification is by the <strong>main service sought</strong>, not three mutually isolated rivers or three constant operating discharges. A project can have more than one objective, and a measure selected for one flow range must be checked at the others.</p>" +
                        "<table><thead><tr><th scope='col'>Training category</th><th scope='col'>Principal concern</th><th scope='col'>Important qualification</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>High water / discharge</th><td>Pass design floods with tolerable inundation and damage.</td><td>Confinement can increase water levels and transfer risk rather than remove the flood volume.</td></tr>" +
                        "<tr><th scope='row'>Low water / depth</th><td>Maintain an adequate navigable channel at low flow.</td><td>Concentrating flow may deepen one channel but can increase scour or affect neighbouring banks.</td></tr>" +
                        "<tr><th scope='row'>Mean water / sediment</th><td>Manage passage and distribution of suspended load and bed load.</td><td>Seek a workable sediment balance, not a promise of zero deposition everywhere.</td></tr></tbody></table>" +
                        "<p>Mean-water training is a conventional name for sediment-management objectives over relevant channel-forming conditions. It does not require a literal arithmetic-mean discharge, constant velocity or an unchanging water level. Low-water navigation needs a specified draft, channel width and reliability criterion; flood training needs a defined hazard and acceptable consequences. One mnemonic cannot supply those design inputs.</p>",
                    sources: [
                        { id: "IRRI951-00314", set: 30, question: 73 },
                        { id: "IRRI951-00315", set: 30, question: 74 },
                        { id: "IRRI951-00316", set: 1, question: 78 }
                    ]
                },
                {
                    id: "river-training-guide-bank-alignment-and-heads",
                    title: "Guide banks align flow at a crossing or headworks",
                    html: "<p>A <strong>guide bank or guide bund</strong> leads flow through the intended waterway of a bridge, weir or barrage and protects vulnerable approaches. Confining the effective width is one means of keeping the current aligned; it is not a separate process that makes the incoming flood peak disappear. Excessive contraction can instead raise approach water level and intensify velocity and scour.</p>" +
                        "<p>Study the approach current over changing flood stages, possible migration behind the works and the downstream expansion. Straight shanks with curved heads and elliptical layouts are possible arrangements. The upstream curved head turns approaching flow progressively; the downstream tail helps manage its release. An abrupt turn can cause separation, return currents or inactive end openings. A curve drawn neatly in plan is not evidence that all the flow will follow it.</p>" +
                        "<p>IRC 89:1997 discusses these features for road bridges, with its guide-bank provisions distinguishing alluvial and sub-montane settings. Radius, arm length and sweep-angle proportions are empirical starting points with site and model-study qualifications, not final dimensions for every irrigation structure. Layout checks include oblique approach, adequate active waterway, afflux, local scour, stable connections to the approaches and the effects on adjacent banks.</p>" +
                        "<p>Use hydraulic and morphological investigation at the scale of the affected reach. Construction access, inspection and the ability to replenish protection also influence the scheme. Guide banks steer a river locally; they are not reservoirs, flood-peak reducers or guarantees against future channel migration beyond their influence.</p>",
                    sources: [{ id: "IRRI951-00064", set: 7, question: 76 }]
                },
                {
                    id: "river-training-guide-bank-proportions-and-bank-example",
                    title: "The 500 m barrage example is conditional",
                    html: "<p><strong>Actual bank datum:</strong> the barrage length is L = 500 m. Introduce dimensionless preliminary ratios a<sub>u</sub> and a<sub>d</sub>, with upstream and downstream lengths L<sub>u</sub> = a<sub>u</sub>L and L<sub>d</sub> = a<sub>d</sub>L. The bank's stored pair follows only after adopting particular ratios; the stem itself already states that pair.</p>" +
                        "<table><thead><tr><th scope='col'>Assumption</th><th scope='col'>Upstream length</th><th scope='col'>Downstream length</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>a<sub>u</sub> = 1.0; a<sub>d</sub> = 0.2</th><td>1.0 × 500 = <strong>500 m</strong></td><td>0.2 × 500 = <strong>100 m</strong></td></tr>" +
                        "<tr><th scope='row'>Another pair within the explanation's ranges</th><td>1.2 × 500 = <strong>600 m</strong></td><td>0.4 × 500 = <strong>200 m</strong></td></tr></tbody></table>" +
                        "<p>The explanation quotes a<sub>u</sub> = 1.0–1.25 and a<sub>d</sub> = 0.2–0.4, producing intervals of 500–625 m and 100–200 m. Thus its own ranges also admit the offered 600 m/200 m pair. These are the bank's quoted textbook ranges, not a claim that every combination is approved by IRC 89 or adequate for this unidentified site. That reference gives its own site-qualified bridge guidance.</p>" +
                        "<p>The upstream arm is <strong>often longer</strong> because it must intercept and align an approaching, possibly oblique current; a downstream arm addresses expansion and attack on the approaches. This is a common arrangement, not a universal inequality. Final lengths and curved-head geometry depend on floodplain width, embayment, structures, bank conditions and model evidence. A barrage length alone cannot determine those conditions or a complete design.</p>",
                    sources: [
                        { id: "IRRI951-00060", set: 7, question: 72 },
                        { id: "IRRI951-00067", set: 7, question: 79 }
                    ]
                },
                {
                    id: "river-training-armour-filters-and-launching-mechanism",
                    title: "Armour, filters and a launchable toe work together",
                    html: "<p>Slope pitching or revetment protects an exposed bank face; a <strong>launching apron</strong> is flexible protective material initially placed beyond the toe so that it can settle into a developing scour hole. As support is removed, a suitable apron spreads down the new face instead of leaving the toe unprotected. Launching is a response to scour, not proof that scour cannot occur.</p>" +
                        "<p>Loose durable rock can launch without wire cages. Gabions and connected stone mattresses are other possibilities, but they bend, settle and transfer forces differently from individual stones. Suitable discrete concrete blocks can also form flexible protection. A rigid continuous concrete slab or bonded brick/stone masonry cannot simply be assumed to launch in the same manner; block shape, articulation, connections and retention must be checked. <strong>Gabion is not the only possible apron material.</strong></p>" +
                        "<ul><li><strong>Hydraulic demand:</strong> consider design depth and velocity, local acceleration, obliquity, turbulence, waves and scour at heads and toes, not only a reach-average speed.</li><li><strong>Armour quality:</strong> stone density, durability, shape, grading and layer thickness affect stability and resistance to loss.</li><li><strong>Filter compatibility:</strong> a suitably designed granular filter or geotextile can retain underlying soil while allowing drainage. A gabion cage does not automatically perform that soil-filter function.</li><li><strong>Continuity and upkeep:</strong> toe transitions, end keys or anchors where required, mattress connections, and inspection of displaced armour, damaged wire and changed bed levels are part of the system.</li></ul>" +
                        "<p>Layered or cohesive beds can scour irregularly and prevent an apron from launching as intended. IRC 89:1997 discusses material and bed-condition differences; its examples do not make every connected mattress equivalent to loose stone. The list above identifies design checks, not a construction specification or certification of foundation safety.</p>",
                    sources: [{ id: "IRRI951-00065", set: 7, question: 77 }]
                },
                {
                    id: "river-training-scour-datums-and-apron-volume",
                    title: "Scour datums and an idealized apron calculation",
                    html: "<p><em>Syllabus extension and assumed numerical illustration: none of the 40 assigned items provides a complete launching-apron calculation. Every level, slope and thickness in this example is assumed, not extracted bank data.</em> A normal or mean scour depth quoted below a flood-water level is a depth from that water-surface datum, not automatically additional erosion below the existing bed. Design scour must assess contraction, local head/tip or bend effects and long-term degradation as applicable, without blindly adding overlapping estimates.</p>" +
                        "<p>Use one elevation datum, with elevations increasing upward. Let Z<sub>HFL</sub> be the selected high-flood level, Z<sub>a</sub> the reference apron-bed level at the upper end of an idealized launched bed face, and D<sub>max</sub> the maximum scour depth measured <strong>below HFL</strong>. Then the scour-bottom elevation is <strong>Z<sub>sc</sub> = Z<sub>HFL</sub> − D<sub>max</sub></strong> and the required vertical launch drop is <strong>h = Z<sub>a</sub> − Z<sub>sc</sub></strong>, for Z<sub>a</sub> &gt; Z<sub>sc</sub>.</p>" +
                        "<table><thead><tr><th scope='col'>Assumed input or derived quantity</th><th scope='col'>Value</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>HFL and reference apron-bed elevation</th><td>Z<sub>HFL</sub> = 100.00 m; Z<sub>a</sub> = 96.00 m</td></tr>" +
                        "<tr><th scope='row'>Maximum depth below HFL</th><td>D<sub>max</sub> = 8.00 m</td></tr>" +
                        "<tr><th scope='row'>Scour bottom and launch drop</th><td>Z<sub>sc</sub> = 92.00 m; h = 96 − 92 = <strong>4.00 m</strong></td></tr>" +
                        "<tr><th scope='row'>Assumed launched slope and normal thickness</th><td>z<sub>s</sub>:1 = 2 horizontal:1 vertical; t<sub>n</sub> = 0.50 m</td></tr></tbody></table>" +
                        "<p>For a planar, prismatic launched face, its slope length is <strong>ℓ = h√(1 + z<sub>s</sub><sup>2</sup>) = 4√5 ≈ 8.944 m</strong>. Its horizontal projection is z<sub>s</sub>h = 8.00 m, a different length. With t<sub>n</sub> measured <strong>normal to the face</strong>, the ideal bulk armour volume per metre of straight frontage is <strong>V′ = t<sub>n</sub>ℓ ≈ 4.472 m<sup>3</sup>/m</strong>. A vertically specified thickness cannot simply replace t<sub>n</sub> in that expression.</p>" +
                        "<p>If an initially horizontal apron also has an <strong>assumed uniform thickness t<sub>0</sub> = 0.50 m</strong>, all its volume is available to launch, packing remains unchanged and losses are neglected, volume balance gives Wt<sub>0</sub> = V′. Its ideal initial width is therefore <strong>W = 4.472/0.50 ≈ 8.944 m</strong>. This result is not a universal W = 2D rule. The 8 m water-datum scour depth must not replace the 4 m launch drop.</p>" +
                        "<p>Actual sizing requires allowances for packing changes, loss and uneven launching, retained toe coverage and construction tolerances. Curved noses require three-dimensional coverage and additional geometry; connected mattresses may adopt different shapes or fail to conform. The example establishes a datum and volume argument only, not armour sizing, an adopted code prescription or a completed design.</p>",
                    sources: []
                },
                {
                    id: "river-training-spurs-construction-and-water-stage",
                    title: "Spurs and groynes: projection, permeability and stage",
                    html: "<p><strong>Spur and groyne</strong> are usually synonymous in river training: a work rooted at the bank and projecting into the river to influence the current and protect a selected reach. Transverse means crossing the general current at a right angle or obliquely, not necessarily exactly 90°. This projection distinguishes the usual spur arrangement from a longitudinal flood levee. Guiding the current is its main function; a spur does not inherently reduce the incoming peak discharge.</p>" +
                        "<p>Classify construction separately from hydraulic purpose. Permeable arrangements allow some water through and increase resistance; solid or comparatively impermeable arrangements redirect more flow around their ends. Brushwood or pile-based works may be temporary, while rockfill, armoured earth and gabion systems can be intended for long service. Neither temporary nor permeable is a defining property of every spur. Debris accumulation and sediment infilling can also change permeability during service.</p>" +
                        "<p>Submergence is another independent distinction. Compare crest elevation with the specified water level: an emergent spur may become submerged during a flood, when flow passes over as well as around it. A non-submersible design means remaining above the chosen design flood, not above every conceivable flood. The current pattern, loads and local scour can change markedly with stage.</p>" +
                        "<p>Select length, crest, alignment, permeability and spacing as a system. Protection of the bank root, the tip and the reach between neighbouring spurs must be assessed. A temporary permeable example is one member of this wider family, not a restriction on the meaning of spur.</p>",
                    sources: [
                        { id: "IRRI951-00320", set: 30, question: 78 },
                        { id: "IRRI951-00338", set: 32, question: 74 },
                        { id: "IRRI951-00339", set: 32, question: 75 },
                        { id: "IRRI951-00340", set: 32, question: 76 }
                    ]
                },
                {
                    id: "river-training-spur-orientation-and-classification",
                    title: "Spur orientation needs an explicit angle convention",
                    html: "<p>For the bank's three-type mnemonic, take the local downstream current as approximately parallel to the bank. Define θ as the included angle between the <strong>downstream tangent and the vector from the bank root to the spur tip</strong>. Reversing that vector changes the angle to its supplement; measuring from a bank normal gives another number. State the convention before using acute, obtuse or inclined.</p>" +
                        "<table><thead><tr><th scope='col'>Bank convention</th><th scope='col'>Root-to-tip direction</th><th scope='col'>θ under the stated convention</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Repelling</th><td>Points upstream; conventionally directs the main current away from the bank.</td><td>90° &lt; θ &lt; 180°</td></tr>" +
                        "<tr><th scope='row'>Attracting</th><td>Points downstream; conventionally draws the current towards the bank.</td><td>0° &lt; θ &lt; 90°</td></tr>" +
                        "<tr><th scope='row'>Deflecting</th><td>Normal to the bank in this textbook mnemonic.</td><td>θ = 90° when flow is bank-parallel</td></tr></tbody></table>" +
                        "<p>These three names are <strong>not every reference's exhaustive classification</strong>. IRC 89:1997 §6.1.2 lists attracting, deflecting, repelling and a fourth functional category, sedimenting. It assigns right-angle-to-flow spurs to the sedimenting category and describes deflecting spurs by their local action; §6.2.2 gives other orientation guidance. Preserve this difference instead of calling the bank's normal/deflecting convention universal code terminology.</p>" +
                        "<p><em>Derived angle illustration, not a site design:</em> 30° upstream of the normal gives θ = 120°, while 30° downstream of the normal gives θ = 60°. The same numbers would mean something else if measured directly from the downstream tangent. The bank's up-to-30° statement does not specify its reference and is not a universal angular limit. Actual action also depends on stage, approach direction, permeability, length and neighbouring works; an orientation name alone does not determine a safe layout.</p>",
                    sources: [
                        { id: "IRRI951-00317", set: 30, question: 75 },
                        { id: "IRRI951-00328", set: 31, question: 74 },
                        { id: "IRRI951-00329", set: 31, question: 75 },
                        { id: "IRRI951-00342", set: 32, question: 78 },
                        { id: "IRRI951-00343", set: 32, question: 79 },
                        { id: "IRRI951-00344", set: 33, question: 67 }
                    ]
                },
                {
                    id: "river-training-spur-fields-scour-and-curved-heads",
                    title: "Spur fields redistribute both scour and deposition",
                    html: "<p>A spur can contract part of a wide channel, redirect the main current and produce sheltered lower-velocity zones. Greater depth in the contracted channel may assist navigation, while sediment can accumulate where transport capacity falls. These effects can occur together: local scour at the nose does not contradict deposition behind the spur. Nor does deeper water prove that the structure or adjacent bank is safe.</p>" +
                        "<p>Permeable retarders can encourage deposition when the water actually carries sediment capable of settling in the sheltered region. Clear water cannot create a sediment deposit merely because it slows down. Tip acceleration, horseshoe-type vortices and return currents can undermine protection or erode the bank between works. Examine spacing and length over a spur field, not each work in isolation, and include possible attack on the opposite bank and changes during submergence.</p>" +
                        "<p>Special head geometry changes the interaction with flow. IRC 89:1997 §6.1.2.9 calls a curved-head spur a <strong>Hockey or Burma type</strong>. Both names are relevant to the bank's curved-head item. A hook can alter the current and sheltered region, but superiority over a straight spur is not universal: curvature, incoming flow, sediment, construction and maintenance determine performance.</p>" +
                        "<p>Use site observations and suitable hydraulic or mobile-bed studies to assess the expected current and scour pattern. A statement that a groyne can deepen a channel, induce silting and guide flow describes possible functions, not guaranteed simultaneous benefits or permission to leave local scour unprotected.</p>",
                    sources: [
                        { id: "IRRI951-00334", set: 32, question: 71 },
                        { id: "IRRI951-00341", set: 32, question: 77 }
                    ]
                },
                {
                    id: "river-training-levees-dykes-and-marginal-embankments",
                    title: "Levees are longitudinal flood barriers",
                    html: "<p>A river <strong>levee, dyke or marginal embankment</strong> is generally a continuous earthen barrier running along the river or floodplain margin to reduce flooding of the protected land. Works may be needed on one or both sides. Generally parallel means longitudinal in purpose; a real alignment follows terrain, property limits, existing infrastructure and safe tie-ins rather than being exactly parallel to the instantaneous current at every point.</p>" +
                        "<p>The distinction from spurs is geometric and functional: levees mainly separate a flood corridor from protected land, while spurs or groynes project transversely into the current. Consequently, the usual statements that levees are parallel and that both spurs and groynes are transverse can all be true together. A set-back levee may leave a wider active floodplain than a close-bank levee, with different land, conveyance, storage and ecological consequences.</p>" +
                        "<p><strong>Bell bund belongs to guide-bank terminology</strong>, not to a wall surrounding a well or pond. Guide banks may also be broadly longitudinal, but their specific purpose is to align flow through a structure. That does not make Bell bund an interchangeable answer for every marginal flood embankment. The generic word bund does not erase the distinction between a guide work, a river levee and a small agricultural pond bank.</p>" +
                        "<p>Design a continuous protection system with safe ends and interfaces, adequate foundations, managed drainage crossings and access for maintenance. A gap or poorly connected end can admit floodwater even where the main embankment has sufficient height.</p>",
                    sources: [
                        { id: "IRRI951-00327", set: 31, question: 73 },
                        { id: "IRRI951-00335", set: 32, question: 72 },
                        { id: "IRRI951-00336", set: 32, question: 73 },
                        { id: "IRRI951-00349", set: 33, question: 72 },
                        { id: "IRRI951-00350", set: 33, question: 73 }
                    ]
                },
                {
                    id: "river-training-levee-afflux-and-transferred-risk",
                    title: "Levee confinement changes the flood hydraulics",
                    html: "<p>A levee excludes part of the floodplain from conveying or storing floodwater. It does not remove catchment runoff. For a given discharge, reducing effective conveyance can require a higher water level, while redistribution into a narrower active channel can increase velocity and scour. Water level, area, energy loss and sediment response adjust together; Q = AV is a continuity check, not a complete backwater calculation.</p>" +
                        "<p><strong>Afflux</strong> is a rise in water surface associated with an obstruction or confinement. In suitable subcritical conditions, the change can propagate upstream as backwater. An upstream water-surface slope may become flatter, while a confined section experiences greater erosive demand. These are possible mechanisms behind the bank's list, not inevitable identical changes at every section or for every river regime.</p>" +
                        "<p>The result depends on levee spacing, floodplain roughness and storage, channel geometry, downstream controls, tributary timing and the flood hydrograph. Altered storage can also change downstream flood timing and peak. A calculation that fixes the old water depth after substantially changing conveyance misses part of the problem; assuming that confinement reduces the incoming peak misses it altogether.</p>" +
                        "<p>Evaluate impacts beyond the protected land: backwater at upstream settlements, erosion through the confined reach, flood transfer downstream and consequences of overtopping or breach. Design comparisons should include set-back alternatives and residual-risk management, rather than reporting only the area nominally defended.</p>",
                    sources: [{ id: "IRRI951-00337", set: 1, question: 79 }]
                },
                {
                    id: "river-training-floodwall-crest-and-freeboard",
                    title: "Flood-wall crest level is more than a recorded flood mark",
                    html: "<p>A flood wall is a structural barrier where space or other constraints favour a wall over a broad earth embankment. Its crest must relate to the <strong>design water-surface elevation at the wall</strong>, not merely the minimum water level, an arbitrary 5 m height or the highest mark in a short record. Ground elevation and water elevation must use the same datum before a wall height is calculated.</p>" +
                        "<p>A useful bookkeeping expression is <strong>Z<sub>c,construction</sub> = Z<sub>d</sub> + F + A<sub>s</sub></strong>, all in m on one datum. Z<sub>d</sub> is the adopted design water elevation, including relevant backwater or afflux; F is required operational freeboard, with wave and uncertainty allowances treated according to the design basis; A<sub>s</sub> is any separately justified settlement allowance. Avoid adding the same wave or uncertainty allowance twice if it is already included in F.</p>" +
                        "<p>Freeboard is the vertical margin above the relevant design water surface. FAO's irrigation-system discussion explains this general overtopping margin; it is not a flood-wall sizing standard. The appropriate value depends on the hazard, wave exposure, uncertainty, settlement, allowable overtopping and consequences. Historical observations inform the design flood but do not alone establish its probability or future upper bound.</p>" +
                        "<p>Height is only one check. Water pressure, foundation bearing, sliding, overturning, uplift, seepage, joints and end connections require evaluation. A high wall founded on an erodible or unstable toe can fail without its crest being overtopped. The bank's maximum-flood-level choice identifies the relevant side of the water-level problem, but omits the allowances and stability checks needed for design.</p>",
                    sources: [{ id: "HYDR626-00274", set: 30, question: 64 }]
                },
                {
                    id: "river-training-embankment-failures-and-interior-drainage",
                    title: "Failure modes, interior drainage and residual risk",
                    html: "<p><em>Syllabus extension: levee and flood-wall design checks, not an additional bank problem or a construction procedure.</em> Flood defence can fail hydraulically, geotechnically or through a discontinuity in the system. Crest height alone does not cover these mechanisms.</p>" +
                        "<table><thead><tr><th scope='col'>Failure mechanism</th><th scope='col'>What the design must address</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Overtopping</th><td>Flood level, waves and crest settlement; overtopping can erode an unprotected landside face and develop into a breach.</td></tr>" +
                        "<tr><th scope='row'>Seepage and piping</th><td>Foundation or embankment flow paths, internal erosion, filters and safe drainage; openings and interfaces can concentrate leakage.</td></tr>" +
                        "<tr><th scope='row'>Slope or foundation instability</th><td>Soil strength, saturation, pore pressures and settlement, including rapid drawdown when external water support falls.</td></tr>" +
                        "<tr><th scope='row'>Toe erosion</th><td>Current, waves and local scour that remove support beneath the bank or wall.</td></tr>" +
                        "<tr><th scope='row'>Flooding behind the barrier</th><td>Rainfall, seepage and tributary inflow where high river stages prevent gravity drainage.</td></tr></tbody></table>" +
                        "<p>A drainage outlet that can discharge at low river stage may allow reverse flow during a flood. Closing it protects against river inflow but can trap local runoff. Interior storage, controlled outfalls and, where necessary, pumping must therefore be considered together, including operating reliability and power failure. A dry protected area cannot be inferred merely from a closed gate.</p>" +
                        "<p>Inspection before, during and after flood seasons should look for changed crest levels, cracks, seepage or boils, displaced protection, damaged connections and blocked drains. Observation methods must be safe and planned by the responsible team. Maintenance, flood warning and evacuation arrangements address residual risk: neither a levee nor a flood wall makes flood probability zero.</p>",
                    sources: []
                },
                {
                    id: "river-training-watershed-soil-water-and-sediment",
                    title: "Watershed management connects land and channel processes",
                    html: "<p>A <strong>watershed</strong> is the land area draining to a common outlet. Management coordinates vegetation, soils, slopes, drainage paths and water use to conserve soil and water, improve useful soil-water storage and harvest rainwater where appropriate. Catchment land is not itself a spur or bund, but management of that land can change the water and sediment arriving at river-training works.</p>" +
                        "<table><thead><tr><th scope='col'>Measure family</th><th scope='col'>Potential contribution and condition</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Vegetative cover and appropriate forest management</th><td>Limit exposed soil and erosion; rooting and evapotranspiration also alter the water balance.</td></tr>" +
                        "<tr><th scope='row'>Contour cultivation, terraces and infiltration measures</th><td>Reduce erosive overland-flow paths and retain moisture where soil and slope conditions permit, with safe overflow routes.</td></tr>" +
                        "<tr><th scope='row'>Gully treatment and suitable check dams</th><td>Manage local grade and sediment movement; capacity, foundation stability, outflow and maintenance govern performance.</td></tr></tbody></table>" +
                        "<p>Conservation acts through a balance, not by making rainfall larger. More infiltration may improve root-zone storage or recharge, but some water is subsequently used by vegetation. Forest expansion, harvesting or upstream storage can reduce water reaching downstream users; increased dry-season flow is not guaranteed. Saturated or unstable slopes require special care rather than indiscriminate infiltration enhancement.</p>" +
                        "<p>Trapped sediment occupies storage and must be managed. Reducing upstream erosion can benefit intakes and reservoirs, while substantial interception of bed material can change downstream channel stability. Link hillslope measures, channel works and outlet monitoring so that a local improvement is not mistaken for an automatically beneficial catchment-wide result.</p>",
                    sources: [{ id: "IRRI951-00352", set: 33, question: 75 }]
                },
                {
                    id: "river-training-farm-pond-storage-and-runoff",
                    title: "Farm ponds store water and can modify runoff",
                    html: "<p>A <strong>farm pond</strong> stores runoff or other available water for later agricultural use. Storage is its central function in the bank item, but it is not its only possible service. Depending on its available volume, location and operation, a pond can intercept sediment, reduce erosive runoff and attenuate part of a flood hydrograph. A full pond with a rapidly spilling outlet provides a different flood benefit from an empty pond with reserved detention capacity.</p>" +
                        "<p>Write the water balance as <strong>dS/dt = I − O − W − E − L</strong>. S is stored water in m<sup>3</sup>; I includes inflow and direct rainfall, O is controlled release or overflow, W is withdrawal, E is evaporation and L is seepage loss, with every rate expressed in m<sup>3</sup>/s. A rainfall or evaporation depth rate must be multiplied by the appropriate area before it is added to a volumetric rate. Initial storage and sediment-filled volume limit the remaining capacity.</p>" +
                        "<p><em>Assumed volume illustration, not bank givens:</em> a runoff depth of 20 mm over 1.00 ha gives 0.020 × 10 000 = <strong>200 m<sup>3</sup></strong>. This uses runoff depth, not gross rainfall before losses. It establishes a volume only: peak-flow reduction still requires the inflow hydrograph, starting storage and outlet behaviour.</p>" +
                        "<p>Assess usable water after evaporation, seepage and storage depletion, as well as sediment management and safe overflow. Local water storage may support supplementary irrigation while changing downstream supply. Neither only water storage nor automatic flood control is a complete interpretation of a pond's role.</p>",
                    sources: [{ id: "IRRI951-00010", set: 2, question: 78 }]
                },
                {
                    id: "river-training-watershed-outcomes-and-monitoring",
                    title: "Measure watershed outcomes rather than promise them",
                    html: "<p>Improved soil condition and more reliable water can increase farm production, but <strong>higher production and higher per-capita income are potential outcomes</strong>, not guaranteed consequences of installing watershed works. Crop response depends on soil, climate, water timing, agronomy and access. Household income also depends on prices, labour, input costs, debt and the share of benefits a household actually receives.</p>" +
                        "<p>Separate physical performance from economic performance. Retained soil, reduced gully expansion, usable pond capacity, reliable irrigation supply and changed sediment delivery are measurable physical indicators. Yield and crop value must be compared with operating, maintenance and capital costs. A larger harvest with high costs or unequal access can leave some households no better off, and downstream users may face losses.</p>" +
                        "<p>Use before-and-after observations interpreted against rainfall variability and suitable comparisons; one wet year is not proof of treatment success. Monitor channel response as well as hillslopes, since deposition at one site can accompany erosion at another. Review clogged structures, sediment-filled storage, changed flow paths and access to maintenance resources.</p>" +
                        "<p>An integrated programme assigns responsibility for upkeep and outfall operation, includes landholders and downstream users, and adapts where observed performance differs from the assumptions. The defensible learning point is a possible chain from soil and water conservation to production and welfare, with explicit conditions at each step, not a universal scientific promise of higher income.</p>",
                    sources: [{ id: "IRRI951-00353", set: 33, question: 76 }]
                }
            ],
            gaps: [
                "The official scope includes design of guide bunds, launching aprons, levees and spurs, but the 40 assigned items do not supply a complete hydraulic, sediment, geotechnical or site-layout dataset for designing any one of these systems.",
                "The 500 m barrage length is an actual bank datum. Its 500 m upstream/100 m downstream pair depends on assumed ratios and is already stated in the stem; the explanation's ranges also admit 600 m/200 m. No unique final guide-bank geometry is established.",
                "There is no complete numerical launching-apron problem among the 40 items. The HFL 100 m, apron-bed level 96 m, maximum depth 8 m, 2:1 slope and 0.50 m thicknesses are explicitly assumed. The 4 m drop, 8.944 m face length, 4.472 cubic metres per metre and 8.944 m initial width follow only within the stated idealized geometry and volume assumptions.",
                "The velocity comparison, meander-length example and farm-pond runoff volume are labelled derived or assumed illustrations, not hidden bank measurements. The source-free apron calculation and embankment-failure block are syllabus extensions. No additional source ID or invented bank calculation is introduced.",
                "The assigned extract contains no figures. River-stage terminology, the meander-distance wording, the spur-angle reference and several answer-choice defects remain explicitly qualified rather than repaired by changing questions or stored keys.",
                "IRC 89:1997 is used as a named archival road-bridge reference; FAO and USBR support identified hydraulic concepts, not a complete river-training specification. Current amendments, latest editions and Nepal adoption have not been established. Site-specific design, environmental assessment, construction details and approval are outside these notes."
            ],
            cautions: [
                {
                    html: "<p><strong>Bank check: reach names are not a universal classification.</strong> IRRI951-00095 uses the upper/middle/lower three-reach heuristic. IRRI951-00318 and IRRI951-00319 mix terrain and material terminology; the unexplained Through stage option must not be expanded or changed by guesswork. IRRI951-00321's boulder-stage velocity answer is a steep-reach mnemonic, not a universal speed ranking. Roughness, depth, discharge and local controls remain necessary.</p>",
                    sources: [
                        { id: "IRRI951-00095", set: 10, question: 74 },
                        { id: "IRRI951-00318", set: 30, question: 76 },
                        { id: "IRRI951-00319", set: 30, question: 77 },
                        { id: "IRRI951-00321", set: 30, question: 79 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: dominant discharge is not the maximum of Q times frequency.</strong> IRRI951-00052 correctly points towards channel-forming effectiveness, but its explanation needs a sediment-transport relation and the time spent at each discharge. Compare cumulative transport contributions, not merely water discharge times occurrence. No annual-maximum, median or exact two-year return-period identity follows from the definition.</p>",
                    sources: [{ id: "IRRI951-00052", set: 6, question: 75 }]
                },
                {
                    html: "<p><strong>Bank check: changing rivers do not automatically need correction.</strong> IRRI951-00322's unequal erosion is only part of meander development; curvature, secondary flow, sediment exchange and bank resistance interact. IRRI951-00323's meandering/aggrading/degrading list identifies possible engineering concerns, not proof that every such reach must be fixed. Intervention needs an exposed interest, an assessment of risk and consideration of natural river functions and transferred impacts.</p>",
                    sources: [
                        { id: "IRRI951-00322", set: 31, question: 68 },
                        { id: "IRRI951-00323", set: 31, question: 69 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: wavelength and travel distance are different.</strong> IRRI951-00333 mixes distance along the river with a valley-axis or straight-distance explanation. Define corresponding points one complete cycle apart, then state whether distance is measured along the valley axis or the channel centreline. Corresponding same-hand apices are not adjacent opposite-hand apices, and sinuosity does not make the two length measurements equal.</p>",
                    sources: [{ id: "IRRI951-00333", set: 32, question: 70 }]
                },
                {
                    html: "<p><strong>Bank check: an objective is not a constant hydraulic condition.</strong> IRRI951-00316's mean-water training concerns sediment passage and channel adjustment, not operation only at arithmetic-mean discharge or constant velocity. IRRI951-00064's guide banks align flow and may confine its width; they do not inherently reduce the incoming flood peak. A contraction can instead increase afflux and erosive demand.</p>",
                    sources: [
                        { id: "IRRI951-00316", set: 1, question: 78 },
                        { id: "IRRI951-00064", set: 7, question: 76 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: guide-bank lengths are not uniquely fixed by 500 m.</strong> IRRI951-00060's stored 500 m/100 m pair uses ratios 1.0 and 0.2. The explanation's own ranges also admit offered 600 m/200 m, and the stem already gives the stored pair. IRRI951-00067's greater upstream length is a common arrangement, not an exceptionless law. Site conditions and the chosen reference govern final proportions and curvature.</p>",
                    sources: [
                        { id: "IRRI951-00060", set: 7, question: 72 },
                        { id: "IRRI951-00067", set: 7, question: 79 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: neither gabions nor temporary permeable spurs are exclusive.</strong> IRRI951-00065's gabion choice must not be taught as the only launching-apron material. Loose rock and suitably designed discrete concrete blocks can also provide flexible protection; a rigid continuous slab is a different system. IRRI951-00320 describes one spur construction, not all spurs. Connected mattresses, loose stones and solid works need different checks, and a cage does not replace a soil filter.</p>",
                    sources: [
                        { id: "IRRI951-00065", set: 7, question: 77 },
                        { id: "IRRI951-00320", set: 30, question: 78 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: three functions and normal/deflecting are textbook conventions.</strong> IRRI951-00317, IRRI951-00328 and IRRI951-00343 use the attracting/repelling/deflecting mnemonic with a normal deflecting groyne. IRC 89:1997 §6.1.2 separately lists sedimenting as a fourth function and places right-angle-to-flow spurs there. It describes deflecting by local action and provides other orientation guidance. Do not merge the classifications or assume bank-normal always equals flow-normal.</p>",
                    sources: [
                        { id: "IRRI951-00317", set: 30, question: 75 },
                        { id: "IRRI951-00328", set: 31, question: 74 },
                        { id: "IRRI951-00343", set: 32, question: 79 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: upstream-pointing is not pointing with the downstream flow.</strong> IRRI951-00329's repelling direction is upstream; its parenthetical equating that with the direction of flow is wrong. IRRI951-00342's attracting direction is downstream under the stated convention. IRRI951-00344 does not define the reference for its 30° inclination: from a normal, 30° gives root-to-tip angles of 120° upstream or 60° downstream relative to the downstream tangent. Those derived angles are not universal design limits.</p>",
                    sources: [
                        { id: "IRRI951-00329", set: 31, question: 75 },
                        { id: "IRRI951-00342", set: 32, question: 78 },
                        { id: "IRRI951-00344", set: 33, question: 67 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: the curved-head question has two supported names.</strong> IRC 89:1997 §6.1.2.9 identifies a curved-head spur as <strong>Hockey or Burma type</strong>. Thus both the hockey and burma options in IRRI951-00334 are defensible under that reference; its stored hockey choice is not exclusive. The explanation also overstates universal superiority and reduced damage relative to straight groynes. No stored option or key is changed here.</p>",
                    sources: [{ id: "IRRI951-00334", set: 32, question: 71 }]
                },
                {
                    html: "<p><strong>Bank check: the levee/spur statements have no unique offered answer.</strong> In IRRI951-00327, (i) levees generally parallel to flow, (ii) spurs transverse and (iii) groynes transverse are all true in the usual arrangement. Options A, B and D give true pairs, no option includes all three, and option C invokes nonexistent statement (iv). The stored D does not resolve that defect. These notes explain the geometry without inventing or repairing an answer option.</p>",
                    sources: [{ id: "IRRI951-00327", set: 31, question: 73 }]
                },
                {
                    html: "<p><strong>Bank check: Bell bund is not a pond or well wall.</strong> IRRI951-00336's marginal-embankment synonym for a levee is sound, but its explanation of Bell bund is not. Bell bund belongs to river guide-bank terminology. Distinguish the longitudinal flood-protection role of a marginal embankment from the flow-alignment role of guide banks near a crossing or headworks.</p>",
                    sources: [{ id: "IRRI951-00336", set: 32, question: 73 }]
                },
                {
                    html: "<p><strong>Bank check: levee effects and alignment are conditional.</strong> IRRI951-00337 lists possible increased flood level, velocity and scour, and a flatter upstream surface slope. Those effects depend on geometry, boundary controls, floodplain storage and stage; they need not all occur identically everywhere. IRRI951-00350's parallel means generally longitudinal, not exact parallelism to every local current. Protection redistributes risk and does not remove runoff or eliminate the possibility of breach.</p>",
                    sources: [
                        { id: "IRRI951-00337", set: 1, question: 79 },
                        { id: "IRRI951-00350", set: 33, question: 73 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: a flood-wall crest needs more than maximum flood level.</strong> HYDR626-00274 omits freeboard and relevant wave, settlement and uncertainty allowances. Establish the design water level at the site, including afflux where applicable, and use a common elevation datum. There is no universal 5 m wall height. Sliding, overturning, bearing, uplift, seepage, toe scour and connections remain separate checks even with adequate crest elevation.</p>",
                    sources: [{ id: "HYDR626-00274", set: 30, question: 64 }]
                },
                {
                    html: "<p><strong>Bank check: damaged words are not engineering definitions.</strong> IRRI951-00326 says floods pass through a breach, where reach appears to be the intended context; a breach is a break in a defence, not the normal objective of safe conveyance. IRRI951-00332's groove appears to intend groyne, and IRRI951-00341's slits appears to intend silts. These are identified interpretations, not silent source edits. Deposition and channel deepening remain conditional functions, not guarantees that local tip scour is beneficial or safe.</p>",
                    sources: [
                        { id: "IRRI951-00326", set: 31, question: 72 },
                        { id: "IRRI951-00332", set: 31, question: 78 },
                        { id: "IRRI951-00341", set: 32, question: 77 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: watershed services are multiple and outcomes are not assured.</strong> IRRI951-00010 emphasizes pond storage, but erosion control, runoff management and flood attenuation can also occur depending on volume and timing. IRRI951-00352's soil-water conservation and harvesting objectives require suitable measures and safe outflows; they do not guarantee greater downstream or dry-season supply. IRRI951-00353's production and income benefits depend on costs, climate, markets, access and benefit distribution, not implementation alone.</p>",
                    sources: [
                        { id: "IRRI951-00010", set: 2, question: 78 },
                        { id: "IRRI951-00352", set: 33, question: 75 },
                        { id: "IRRI951-00353", set: 33, question: 76 }
                    ]
                }
            ],
            references: [
                {
                    title: "IRC 89:1997 — Guidelines for Design and Construction of River Training and Control Works for Road Bridges, first revision (archived text; selected provisions checked)",
                    url: "https://law.resource.org/pub/in/bis/irc/translate/irc.gov.in.089.1997.html"
                },
                {
                    title: "FAO — Irrigation System, Chapter 5 (intake, freeboard and drainage concepts; not a river-defence design standard)",
                    url: "https://www.fao.org/4/r4082e/r4082e06.htm"
                },
                {
                    title: "USBR — Water Measurement Manual, Chapter 2, section 16: Normal Flow Equations and Friction Head Loss",
                    url: "https://www.usbr.gov/tsc/techreferences/mands/wmm/chap02_16.html"
                }
            ]
        }
    });
})();