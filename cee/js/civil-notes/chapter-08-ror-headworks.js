(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0804: {
            code: "ACiE0804",
            questionCount: 27,
            blocks: [
                {
                    id: "ror-water-route-and-headworks",
                    title: "ROR plant, headworks and the actual water route",
                    html: "<p><strong>Official 8.4 scope:</strong> components of a typical ROR plant; design of intake; methods of bed and suspended load handling; design of settling basin (practice and concentration approach), estimation of sediment volume in settling basin, flushing of deposited sediment, estimation of flushing frequency for sediments.</p>" +
                        "<p>A <strong>run-of-river plant</strong> uses river flow with little seasonal regulation compared with a storage scheme. A diversion pond or limited pondage may still exist: ROR does not mean zero stored water. The diversion structure raises or controls the water level for abstraction; it does not increase the river's water supply.</p>" +
                        "<table><thead><tr><th scope='col'>Part of the scheme</th><th scope='col'>Function and boundary</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>River headworks</th><td>Weir or barrage, intake, under-sluices and associated protection control admission and river passage. A fish pass may provide a separate ecological route.</td></tr>" +
                        "<tr><th scope='row'>Sediment treatment</th><td>A gravel trap and settling basin remove selected particulate material from diverted water. They belong to the scheme's sediment-control system; their exact site location varies.</td></tr>" +
                        "<tr><th scope='row'>Conveyance and generation</th><td>Headrace, forebay or suitable surge connection, penstock, turbine in the powerhouse, and tailrace convey water, extract energy and return water downstream.</td></tr></tbody></table>" +
                        "<p>For an illustrative open-headrace arrangement, trace the diverted stream from <strong>intake to gravel trap, settling basin, headrace, forebay, penstock, turbine and tailrace</strong>. This is a typical route, not a mandatory arrangement for every project. An under-sluice returns river water downstream without sending it through the turbine. A flushing outlet branches from a sediment-control structure. A surge tank, where needed in a pressure-waterway layout, is generally a connected branch rather than a vessel through which every litre must pass.</p>" +
                        "<p>Thus a powerhouse is a component of the <em>whole ROR plant</em>, not an intake-side headworks component. The bank's two component questions use different boundaries. The notes retain those questions as references while teaching the physical connections, not merely memorizing lists.</p>",
                    sources: [
                        { id: "HYDR626-00269", set: 29, question: 66 },
                        { id: "HYDR626-00270", set: 29, question: 67 }
                    ]
                },
                {
                    id: "headworks-duty-and-operating-cases",
                    title: "Headworks duty: reliable abstraction, protection and operability",
                    html: "<p>Good headworks admit the required <strong>discharge</strong>, limit damaging material entering the waterway, pass the remaining river flow safely and remain accessible for control and maintenance. Discharge is a volume rate in m<sup>3</sup>/s; a total volume without a duration is not an intake capacity. Economy means a defensible balance of construction cost, water losses, outages, repair and useful life, not the cheapest structure or an absence of maintenance.</p>" +
                        "<ol><li><strong>Low river stage:</strong> establish available water after required downstream releases, minimum operating level, intake submergence and head losses. Reduce abstraction when the available supply cannot support the intended duty.</li><li><strong>Normal generation:</strong> control admission without excessive entry velocities or unwanted vortices, and maintain the sediment-removal performance assumed in design.</li><li><strong>Flood and high sediment:</strong> assess debris loading, river-bed changes, bank scour, safe flood passage and the conditions for reducing or stopping generation.</li><li><strong>Flushing or a bay out of service:</strong> identify the remaining water routes, their capacities and any change in sediment loading on the active bays.</li><li><strong>Isolation and maintenance:</strong> provide operable gates or stoplogs, safe access and a way to remove intercepted debris and sediment.</li></ol>" +
                        "<p>Preventing the <em>entry</em> of damaging debris and ice is a design objective, not a promise that the structure itself cannot be damaged by them. Ice can obstruct openings, debris can increase head loss, and a blocked rack can experience a large differential pressure. The same intake must therefore be checked in clean, partly obstructed and relevant abnormal operating conditions.</p>" +
                        "<p>The bank's combined objectives are sensible. They do not establish numerical limits for blockage, acceptable sediment, flood level or maintenance intervals. Those require site information and the applicable project requirements rather than an invented universal rule.</p>",
                    sources: [{ id: "HYDR626-00273", set: 30, question: 63 }]
                },
                {
                    id: "intake-topology-and-siting",
                    title: "Intake topology, submergence and river-bank selection",
                    html: "<p>Describe an intake by <strong>where the opening is, how water approaches it, and whether the opening is submerged at the operating stage</strong>. These are different attributes. An opening on a riverbank can be submerged; being below the water surface does not by itself put an intake on the river bed.</p>" +
                        "<table><thead><tr><th scope='col'>Description</th><th scope='col'>Physical meaning</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Side or lateral intake</th><td>Water turns from the river into an opening along its side; approach currents and sediment-rich near-bed flow need attention.</td></tr>" +
                        "<tr><th scope='row'>Frontal intake</th><td>The entrance faces the approaching flow. Alignment affects entry losses and direct exposure to transported material.</td></tr>" +
                        "<tr><th scope='row'>Bottom intake</th><td>Water is collected through a bed-level or weir-rack arrangement; the Tyrolean example has a specific through-rack water route.</td></tr>" +
                        "<tr><th scope='row'>Submerged intake</th><td>The opening is below the relevant water surface. A bed-mounted intake is one possible construction, not the definition of all submerged intakes.</td></tr></tbody></table>" +
                        "<p>The concave, outer bank of a simple river bend often offers a deeper approach and less coarse deposition than the convex inner bank. The bend's secondary circulation can move near-bed sediment towards the inner bank, while high outer-bank velocities maintain depth. This explains the conventional bank answer without reducing the process to centrifugal force alone.</p>" +
                        "<p>The same outer bank may suffer severe erosion. Select the site using river surveys, bank and foundation stability, changing thalweg position, flood approach, sediment pathways, possible outfall contamination and construction access. A protected straight reach may be preferable to an unstable bend. Neither concavity nor submergence guarantees clean water.</p>" +
                        "<p>A submerged opening must retain adequate submergence at the <em>minimum operating stage</em>, while remaining clear of expected deposition. Floating material may be less directly exposed to a deep opening, but submerged debris, ice processes, blockage and difficult inspection remain possible. The bank's all-stages and damage-immunity claims are not general design facts.</p>",
                    sources: [
                        { id: "HYDR626-00035", set: 5, question: 67 },
                        { id: "HYDR626-00215", set: 24, question: 63 }
                    ]
                },
                {
                    id: "intake-opening-submergence-and-losses",
                    title: "Intake-design extension: net opening, levels and hydraulic losses",
                    html: "<p><em>Source-free syllabus extension: the assigned bank contains no complete intake-sizing dataset. The following equations and added example supply original design practice, not extra bank questions.</em> Start from continuity, <strong>Q = V<sub>net</sub>A<sub>net</sub></strong>. Here A<sub>net</sub> is the submerged clear area normal to flow, after bars, frames and the adopted blockage allowance; V<sub>net</sub> is the mean velocity through that area. Do not substitute approach-channel velocity while retaining the smaller rack-opening area.</p>" +
                        "<p>If φ is the clean open-area fraction and β is the fraction of that clear area assumed blocked, <strong>A<sub>net</sub> = φ(1 − β)A<sub>gross</sub></strong>. Therefore <strong>A<sub>gross</sub> = Q/[V<sub>net</sub>φ(1 − β)]</strong>. Define the projection and submerged portion consistently for an inclined rack. The formula sizes area; it does not prove that the available head can pass Q.</p>" +
                        "<p><strong>Added intake example, with invented inputs:</strong> take Q = 1.8 m<sup>3</sup>/s, selected V<sub>net</sub> = 0.60 m/s, φ = 0.75 and β = 0.20. The required net area is 1.8/0.60 = <strong>3.00 m<sup>2</sup></strong>; gross area is 3.00/(0.75 × 0.80) = <strong>5.00 m<sup>2</sup></strong>. These selected velocity and obstruction values are illustrative, not prescribed limits.</p>" +
                        "<p>Check the energy balance <strong>H<sub>up</sub> = H<sub>down</sub> + Σh<sub>L</sub></strong>, with H = z + p/γ<sub>w</sub> + αV<sup>2</sup>/(2g). Include the relevant entrance, rack, gate and transition losses. A local form h<sub>L</sub> = KV<sup>2</sup>/(2g) needs a coefficient and velocity definition appropriate to that component. Gate-controlled flow also needs its applicable rating.</p>" +
                        "<p>Set sill clearance above the anticipated bed or deposit separately from submergence below the lowest operating water surface. A raised sill reduces interception of near-bed material but can restrict low-stage supply. Check vortices, air entrainment, waves, drawdown and possible bed change; no single submergence-to-opening ratio or fixed bed clearance is established by these questions.</p>",
                    sources: []
                },
                {
                    id: "trash-racks-and-turbine-protection",
                    title: "Trash racks protect machinery, but do not desilt the water",
                    html: "<p>A <strong>trash rack</strong> is a barrier of bars or a suitable screen that intercepts objects too large to pass its openings. It protects downstream passages, wicket gates and turbine runners from appropriate debris such as branches and other transported objects. An intake gate controls or isolates flow; it is not a substitute for a debris screen. A surface boom can intercept some floating material but cannot screen the whole submerged flow section.</p>" +
                        "<p><strong>Screening is not settling.</strong> Sand and silt smaller than the rack openings pass with the water, even when they are hard enough to abrade a runner. A gravel trap removes a different size range, and a settling basin targets selected settleable suspended classes. Dissolved substances pass an ordinary rack and do not become removable sediment merely because the water passes through bars.</p>" +
                        "<ul><li>Select bar spacing and arrangement with downstream passage dimensions, turbine protection requirements, debris conditions and any fish-protection requirements in view.</li><li>Check net clear area and head loss in both clean and design-obstructed conditions; the differential water level across a blocked rack also creates a structural load.</li><li>Provide safe raking, lifting or other cleaning access and a route for removing the collected material.</li><li>Consider corrosion, abrasion, bar damage, ice obstruction and the possibility that cleaning equipment is unavailable during a flood.</li></ul>" +
                        "<p>Turbine characteristics therefore <strong>can influence intake protection</strong>, including fine-rack spacing and acceptable sediment exposure. It is too absolute to say turbine type has no effect simply because river hydraulics and diverted discharge are primary intake inputs. The reviewed AEPC micro-hydro guidance also connects fine-rack spacing with the turbine, within its own limited application scope.</p>" +
                        "<p>The bank's racks-and-trolley option overlaps a rack installation rather than representing a completely unrelated protective principle. The defensible lesson is the debris-interception mechanism, not a guarantee against every kind of machinery damage.</p>",
                    sources: [
                        { id: "HYDR626-00129", set: 15, question: 63 },
                        { id: "HYDR626-00220", set: 24, question: 68 },
                        { id: "HYDR626-00238", set: 1, question: 66 },
                        { id: "HYDR626-00218", set: 24, question: 66 }
                    ]
                },
                {
                    id: "tyrolean-bottom-intake-paths",
                    title: "Tyrolean bottom intake: water through the rack, coarse load over it",
                    html: "<p>A typical <strong>Tyrolean bottom intake</strong> places a rack above a collecting channel within a low diversion structure. Part of the stream passes <strong>down through the rack openings into the collector</strong> and is conveyed away. Excluded coarse bed material moves <strong>over or across the upper rack surface</strong> with the remaining stream towards the downstream river. Routing excluded coarse material underneath the rack into the collector would defeat that exclusion function.</p>" +
                        "<p>A steep mountain-stream setting can provide useful sweeping flow and an elevation difference for collection and discharge. This explains the bank's steep-gradient preference. It does not mean that every steep river is suitable, or that very high sediment concentration is automatically beneficial. Boulders, woody material, abrasion and rack blinding can limit performance.</p>" +
                        "<ol><li>Estimate the water available for withdrawal while retaining an appropriate downstream route.</li><li>Use the actual rack geometry, clear spacing, inclination, blockage assumptions and hydraulic rating to estimate the captured discharge.</li><li>Check the water remaining over the rack and its ability to convey excluded material downstream.</li><li>Provide a collector and outlet that do not back up or become a sediment pocket.</li><li>Treat sand and finer material that can enter through the openings; a bottom intake does not eliminate the need for downstream sediment control.</li></ol>" +
                        "<p>On a flat or very flat reach, weak sweeping action and an unfavourable collector/outfall level can encourage deposition and make the arrangement unattractive. Suitability depends on the complete hydraulic and sediment setting, not slope alone. The bank's malformed numerical distractor supplies <strong>no defensible 10% river-gradient threshold</strong>. No such threshold is inferred here.</p>",
                    sources: [
                        { id: "HYDR626-00271", set: 30, question: 61 },
                        { id: "HYDR626-00272", set: 30, question: 62 }
                    ]
                },
                {
                    id: "intake-flushing-water-budget",
                    title: "Intake discharge: trace the flushing water before adding a percentage",
                    html: "<p>For steady operation of the diverted-water system, a useful balance is <strong>Q<sub>intake</sub> = Q<sub>turbine</sub> + Q<sub>flush,through</sub> + Q<sub>loss</sub></strong>. Q<sub>flush,through</sub> is flushing water that actually passes through this intake before leaving a gravel trap or settling basin. Add any other nonoverlapping abstraction explicitly. During filling or drawdown, also include the rate of change of water stored within the selected boundary.</p>" +
                        "<p>A river under-sluice may take water directly from the upstream pond and discharge to the river without passing through the intake. That flow belongs in the <strong>river availability and headworks balance</strong>, but not automatically in intake discharge. Likewise, intermittent flushing may occur with reduced turbine demand rather than with full turbine demand and the largest flushing flow simultaneously. Design each genuine operating case and size each passage for the case that governs it.</p>" +
                        "<p><strong>Added water-budget example, not bank givens:</strong> if generation needs 10.0 m<sup>3</sup>/s, downstream basin flushing needs 0.8 m<sup>3</sup>/s through the intake, and conveyance losses are 0.2 m<sup>3</sup>/s, the simultaneous intake requirement is <strong>11.0 m<sup>3</sup>/s</strong>. A separate 2.0 m<sup>3</sup>/s river under-sluice does not make that intake requirement 13.0; the river must nevertheless supply both routes and any other required releases, without double-counting a release already included in them.</p>" +
                        "<p>The bank's <strong>100–120% of turbine discharge means 0–20% extra</strong>, since the extra fraction is Q<sub>intake</sub>/Q<sub>turbine</sub> − 1. An allowance of <strong>10–20% extra</strong> instead gives <strong>110–120% of turbine discharge</strong>. Neither expression is the same as designing the whole intake for only 10–20% of turbine demand.</p>" +
                        "<p>The reviewed <strong>AEPC first update 2014</strong> discusses an allowance for the relevant <em>conveyance system</em> within its micro/pico-hydro scope up to <strong>100 kW</strong>. It is not a universal intake-sizing rule for all ROR plants and does not replace the actual flushing-water path, losses, operating head and available river flow.</p>",
                    sources: [{ id: "HYDR626-00276", set: 30, question: 66 }]
                },
                {
                    id: "fish-passage-and-river-continuity",
                    title: "Fish passage is a designed water route, not an ordinary sluice",
                    html: "<p>A diversion barrier can interrupt migration even when the scheme returns its turbine discharge farther downstream. A <strong>fish ladder or fishway</strong> provides a route around or through that barrier using hydraulics suitable for the target fish. The bank correctly identifies its purpose, but the name of a structure alone does not demonstrate successful migration.</p>" +
                        "<p>Design begins with the species and life stages to be passed, their seasonal movements, swimming and jumping capabilities, and the range of river levels during those movements. The entrance needs to be discoverable in the downstream flow field, while the route must avoid impassable velocities, drops, excessive turbulence and unsuitable depths. Resting opportunities and reliable water supply may be important.</p>" +
                        "<ul><li>Assess upstream passage at the diversion barrier separately from downstream passage and entrainment into the intake.</li><li>Coordinate fishway attraction flow with spill, turbine operation and under-sluice discharge so that competing currents do not make the entrance ineffective.</li><li>Check screens and bypasses for the relevant fish-protection function; an ordinary coarse trash rack is not automatically a suitable fish screen.</li><li>Include blockage inspection, seasonal maintenance and the effects of sudden sediment releases from flushing.</li></ul>" +
                        "<p>An under-sluice is primarily a river sediment route. Its high-velocity, sediment-laden discharge is not automatically a fish passage. A divide wall guides or separates flows; it does not substitute for a pass either. The fishway's flow must be accounted for in the river balance, but it is not necessarily water that passes through the power intake.</p>" +
                        "<p>No species, migration season, operating levels or passage geometry is supplied in this bank. Consequently, no universal pool dimensions, allowable drops or passage-flow percentage is asserted.</p>",
                    sources: [{ id: "HYDR626-00251", set: 27, question: 67 }]
                },
                {
                    id: "sediment-load-and-grain-classes",
                    title: "Bed load, suspended particles and dissolved material are not one classification",
                    html: "<p>For headworks sediment handling, distinguish <strong>particulate transport</strong> from dissolved material, and distinguish a particle's <strong>size</strong> from its <strong>mode of transport</strong>. A grain can move near the bed under one flow condition and become suspended under another. Coarse does not mean bed load in every case, and suspended does not mean exclusively very fine silt.</p>" +
                        "<table><thead><tr><th scope='col'>Material or transport mode</th><th scope='col'>Meaning</th><th scope='col'>Headworks implication</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Bed load</th><td>Particles move by rolling, sliding or short hops near the bed.</td><td>Approach alignment, raised admission and appropriate low-level bypass or scouring routes can reduce entry.</td></tr>" +
                        "<tr><th scope='row'>Suspended sediment</th><td>Particles are carried within the water column, with turbulence opposing their tendency to fall.</td><td>Selected classes can deposit when residence time and settling conditions are adequate.</td></tr>" +
                        "<tr><th scope='row'>Dissolved load</th><td>Solutes are present at molecular or ionic scale rather than as the discrete grains being settled.</td><td>Ordinary desilting does not remove them by gravity settling.</td></tr></tbody></table>" +
                        "<p>The bank's threefold bed–suspended–dissolved list is a broad description of river-borne material. In hydraulic sediment-transport design, bed and suspended loads refer to <em>particulate</em> loads. Do not include dissolved mass in a basin's settleable concentration merely to match that broader terminology.</p>" +
                        "<p>A settling basin targets <strong>settleable suspended grain classes</strong>, including relatively coarse suspended sand where present. Some fine or cohesive particles may remain in suspension. Define the inlet size distribution, settling velocities, mineral hardness and desired class-specific removal; one total concentration does not reveal the abrasive risk or the fraction that can settle.</p>" +
                        "<p>Graded performance uses incoming <em>mass fractions</em>, not numbers of particles. A few large grains can carry more mass than many small ones. This distinction becomes essential when converting different class efficiencies into an overall deposited mass and an outlet concentration.</p>",
                    sources: [
                        { id: "HYDR626-00254", set: 28, question: 63 },
                        { id: "HYDR626-00258", set: 28, question: 67 }
                    ]
                },
                {
                    id: "sediment-handling-and-gravel-traps",
                    title: "Sediment handling from the catchment to the basin outlet",
                    html: "<p>Sediment control is a sequence of interventions, not one device that makes river water sediment-free. First reduce avoidable sediment supply where practical, then limit entry into the diverted stream, then remove selected material that has entered, and finally evacuate deposits without creating an unacceptable downstream problem.</p>" +
                        "<table><thead><tr><th scope='col'>Stage</th><th scope='col'>Purpose and limitation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Catchment management</th><td>Erosion control and suitable land management can reduce sediment delivery. They do not eliminate natural erosion, bank failures or every extreme-event sediment pulse.</td></tr>" +
                        "<tr><th scope='row'>Exclusion before abstraction</th><td>Intake alignment, sill arrangement and suitable river sediment bypass or excluder passages keep part of the sediment-rich flow out of the intake.</td></tr>" +
                        "<tr><th scope='row'>Extraction after entry</th><td>An ejector or extractor removes a sediment-rich portion of the diverted flow. Its interception occurs downstream of admission even if its final outfall returns to the river.</td></tr>" +
                        "<tr><th scope='row'>Trapping and removal</th><td>Gravel traps and settling basins deposit selected sizes; flushing or mechanical removal is then needed to restore their function.</td></tr></tbody></table>" +
                        "<p>Where both are provided, the usual diverted-water sequence is <strong>gravel trap before settling basin</strong>. The gravel trap intercepts relatively coarse material early, reducing blockage and storage demand in the finer-sediment basin. The downstream settling basin can then be proportioned for its actual incoming suspended load rather than for the unmodified river mixture.</p>" +
                        "<p>Provide a workable flushing or cleaning arrangement for each trap. A trap that rapidly fills and then passes its deposit downstream has not achieved sustained protection. Conversely, an oversized trap with an outlet too high to remove the deposit may have considerable nominal volume but poor operational performance.</p>" +
                        "<p>Measure or estimate concentration and grading at the <em>entrance of the structure being designed</em>. Substituting river concentration after upstream exclusion, dilution or removal has changed the stream can give the wrong basin loading. Reservoir dredging is one general sediment-management method mentioned by the bank; it is not a mandatory routine operation for every ROR intake.</p>",
                    sources: [
                        { id: "HYDR626-00257", set: 28, question: 66 },
                        { id: "HYDR626-00265", set: 29, question: 62 }
                    ]
                },
                {
                    id: "undersluice-and-flushing-outfall",
                    title: "Under-sluices: maintain the intake approach and a usable river outfall",
                    html: "<p>An <strong>under-sluice or scouring sluice</strong> is a low-level passage near the diversion intake. Its intended sediment function is to convey accumulated bed material from the intake approach towards the downstream river. Opening the gate increases the flow available through that route when sufficient upstream-to-downstream head exists.</p>" +
                        "<p>Relative levels matter. A low sluice sill and a suitably higher intake sill can favour removal of sediment-rich lower flow instead of its admission to the waterway. The appropriate level difference depends on bed elevations, desired intake depth, sediment grading, available scouring head and expected scour; the bank supplies no universal offset.</p>" +
                        "<ol><li>Identify the deposit to be removed and the connected path from that deposit to the sluice.</li><li>Check available head at the actual upstream and downstream levels. High tailwater can reduce the driving head even during a high-flow event.</li><li>Check the gate opening, possible blockage and the ability of the channel and outlet to transport the sediment, not merely to pass water.</li><li>Protect the downstream bed, banks and structure against unwanted local scour and loss of support.</li><li>Coordinate sluicing with intake admission, required river releases and the water needed for generation.</li></ol>" +
                        "<p>Scour in the intended approach pocket can be useful; scour beneath a floor or around a flank can be harmful. A stronger jet is therefore not automatically a better design. Flushing duration and gate sequence must respect structural support, receiving-channel capacity and safe operation.</p>" +
                        "<p>This <strong>river-side sluice is not the same as a settling-basin flushing outlet</strong>. The latter removes sediment after water has entered the diverted system. Both need an adequate outfall, but their water budgets and sediment inventories differ. An under-sluice can reduce bed-load entry without removing all suspended sand or silt from the intake flow.</p>",
                    sources: [{ id: "HYDR626-00275", set: 30, question: 65 }]
                },
                {
                    id: "settling-basin-zones-and-flow",
                    title: "Basin zones, active settling length and the meaning of quiet flow",
                    html: "<p>A settling basin changes the flow distribution so that selected particles have time to reach a collecting surface. Its zoning describes <strong>engineering functions</strong>, not separate laws of gravity. Particles can begin falling in the inlet or transition; the principal settling zone is where useful removal is deliberately provided and assessed.</p>" +
                        "<table><thead><tr><th scope='col'>Zone</th><th scope='col'>Design role</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Inlet and inlet transition</th><td>Expand or redistribute the approach flow across the basin without a concentrated jet, severe separation or short-circuiting.</td></tr>" +
                        "<tr><th scope='row'>Main settling zone</th><td>Provide the active width, length and depth used in the removal model. In conventional long basins this is usually the largest length.</td></tr>" +
                        "<tr><th scope='row'>Outlet zone</th><td>Collect the clarified flow without drawing a fast path through the basin or re-entraining the deposited layer.</td></tr>" +
                        "<tr><th scope='row'>Deposit-storage and collection region</th><td>Accommodate sediment below the required working flow section and connect it to a flushing or cleaning route.</td></tr></tbody></table>" +
                        "<p>The inlet zone commonly <em>contains</em> the inlet transition. Offering inlet zone and transition zone as mutually exclusive choices is ambiguous unless a particular diagram defines them. Likewise, largest settling-zone length is a conventional layout characteristic, not a prescribed fraction of every basin's total length. Do not count the full civil footprint as active settling area without justifying the hydraulic contribution of its transitions.</p>" +
                        "<p>Slow, orderly bulk flow is desirable, but a large full-scale basin can have a high Reynolds number even at modest velocity. Low velocity is not proof of laminar flow, and the bank supplies no hydraulic length or viscosity with which to establish its regime. Avoid strong eddies and resuspension rather than assuming that all turbulence can be eliminated.</p>" +
                        "<p>The particle Reynolds number used for a settling-velocity law is a different quantity. An individual tiny grain can satisfy Stokes conditions in a basin whose bulk flow is turbulent. The ideal models developed below deliberately simplify that flow; their assumptions must not be confused with a claim that the whole basin is laminar.</p>",
                    sources: [
                        { id: "HYDR626-00036", set: 5, question: 68 },
                        { id: "HYDR626-00260", set: 28, question: 69 },
                        { id: "HYDR626-00262", set: 29, question: 59 },
                        { id: "HYDR626-00263", set: 29, question: 60 }
                    ]
                },
                {
                    id: "inlet-transition-geometry",
                    title: "Transition geometry: define half-angle, included angle and slope axes",
                    html: "<p>For a symmetric plan expansion from width b to width B over longitudinal length L<sub>t</sub>, let <strong>θ be the angle between one sidewall and the centreline</strong>. Each wall moves laterally by (B − b)/2, so tan θ = (B − b)/(2L<sub>t</sub>) and <strong>L<sub>t</sub> = (B − b)/(2 tan θ)</strong>. The included angle between the two walls is <strong>2θ</strong>. If an included angle Θ is specified instead, substitute θ = Θ/2.</p>" +
                        "<p>The bank's <strong>7°–10°</strong> range does not state which angle is meant. Nor does an angular range alone prove attached, uniformly distributed flow: approach asymmetry, depth change, velocity, partitions and downstream geometry also affect the transition. No universal <strong>12° maximum</strong> is adopted from the explanation.</p>" +
                        "<p>If a wall slope means <strong>one unit lateral to five units longitudinal</strong>, then tan θ = 1/5 = 0.2, giving <strong>θ = 11.31°</strong> and an included angle of about <strong>22.62°</strong>. That slope is not the same as a 7°–10° half-angle. A vertical floor slope, expressed as elevation change per longitudinal distance, is yet another geometric quantity.</p>" +
                        "<p>The separate question's <strong>1H:2V for horizontal direction</strong> and <strong>1H:5V for vertical direction</strong> do not unambiguously identify plan offsets, longitudinal distances or elevation changes. A drawing and its axis convention are required; simply accepting both ratios because another option is keyed incorrect would certify undefined geometry.</p>" +
                        "<p><strong>Added transition example, not a bank dataset:</strong> let b = 2 m, B = 6 m and the selected half-angle be 8°. Then L<sub>t</sub> = 4/(2 tan 8°) ≈ <strong>14.23 m</strong>, and the included angle is 16°. If 8° had meant the included angle, the same widening would require 4/(2 tan 4°) ≈ <strong>28.60 m</strong>. These are geometric demonstrations, not a recommended angle or an automatically adequate hydraulic design.</p>",
                    sources: [
                        { id: "HYDR626-00261", set: 29, question: 58 },
                        { id: "HYDR626-00036", set: 5, question: 68 }
                    ]
                },
                {
                    id: "practice-approach-design-sequence",
                    title: "Practice approach: select a basin, then check removal and operation",
                    html: "<p>The official syllabus names both <strong>practice and concentration approach</strong>; it does not prescribe one universal formula or dimensional rule. A practice-oriented design develops a trial layout from sediment targets and hydraulic conditions, then checks that layout's removal performance, storage and cleaning arrangements together. The bank's removal, settling-capacity and flushing criteria are complementary, not interchangeable.</p>" +
                        "<ol><li><strong>Define the duty:</strong> establish discharge cases, inlet concentration and grading after upstream treatment, water temperature, grain properties and the turbine's protection needs.</li><li><strong>Set graded targets:</strong> specify removal for relevant size classes and an acceptable outlet condition. Do not assume that one chosen grain diameter represents all sediment.</li><li><strong>Obtain settling velocities:</strong> use measurements or a relation valid for the particle regime; account for shape and cohesive behaviour where relevant.</li><li><strong>Select active geometry:</strong> use B h = Q/u for the working cross-section and B L = Q/q<sub>o</sub> for active plan area. Choose q<sub>o</sub> through an explicitly stated removal model, not by confusing plan and cross-sectional areas.</li><li><strong>Develop the transitions and outlet:</strong> distribute the flow, avoid fast bypass paths and retain useful settling depth as sediment accumulates.</li><li><strong>Provide sediment storage and evacuation:</strong> connect the deposit to a usable outlet, allocate flushing water and estimate the interval to the allowable deposit limit.</li><li><strong>Check abnormal and maintenance cases:</strong> examine blocked openings, high tailwater, one bay isolated and adverse sediment events; revise dimensions and operation together.</li></ol>" +
                        "<p>For two equal operating bays, each normally receives half the total flow. Sending the full flow through one unchanged bay doubles that bay's surface loading, potentially reducing capture. An alternative is reduced plant discharge; uninterrupted operation does not prove unchanged sediment performance.</p>" +
                        "<p>Depth provides hydraulic cross-section and operational clearance, while active plan area controls the simplest settling comparison. Total excavation volume includes other functions and cannot stand in for either. Empirical proportions from a fish-farm training example or a micro-hydro standard must retain their application limits rather than becoming mandatory dimensions for every hydropower basin.</p>",
                    sources: [{ id: "HYDR626-00259", set: 28, question: 68 }]
                },
                {
                    id: "particle-settling-stokes-limit",
                    title: "Settling-velocity extension: derive Stokes' law and check its limit",
                    html: "<p><em>Source-free syllabus extension: no assigned question provides the grain and fluid data needed for a settling-velocity calculation.</em> For an isolated spherical grain of diameter d and density ρ<sub>s</sub> in a fluid of density ρ, the downward submerged weight is <strong>(ρ<sub>s</sub> − ρ)gπd<sup>3</sup>/6</strong>. At terminal settling velocity w<sub>s</sub>, this balances upward drag.</p>" +
                        "<p>In creeping flow around the particle, drag is 3πμd w<sub>s</sub>, where μ is dynamic viscosity. Equating forces and cancelling πd gives <strong>w<sub>s</sub> = (ρ<sub>s</sub> − ρ)gd<sup>2</sup>/(18μ)</strong>. With kinematic viscosity ν = μ/ρ, the same result is <strong>w<sub>s</sub> = (ρ<sub>s</sub>/ρ − 1)gd<sup>2</sup>/(18ν)</strong>. Use d in m, g in m/s<sup>2</sup> and ν in m<sup>2</sup>/s to obtain w<sub>s</sub> in m/s.</p>" +
                        "<p>Check <strong>Re<sub>p</sub> = w<sub>s</sub>d/ν ≪ 1</strong> after calculating the trial velocity. This is a particle-scale condition, not a requirement that the entire basin have laminar flow. At larger Re<sub>p</sub>, use an appropriate drag relation or measured settling velocity; the d<sup>2</sup> dependence is no longer generally valid.</p>" +
                        "<p><strong>Added particle example:</strong> assume d = 0.020 mm = 2 × 10<sup>−5</sup> m, ρ<sub>s</sub> = 2650 kg/m<sup>3</sup>, ρ = 1000 kg/m<sup>3</sup>, ν = 10<sup>−6</sup> m<sup>2</sup>/s and g = 9.81 m/s<sup>2</sup>. Stokes gives <strong>w<sub>s</sub> = 0.0003597 m/s</strong>; Re<sub>p</sub> = <strong>0.007194</strong>, consistent with creeping particle flow under the other assumptions.</p>" +
                        "<p>Increasing that diameter tenfold would produce a <em>Stokes trial</em> of 0.03597 m/s and Re<sub>p</sub> = 7.194. The failed Reynolds-number check means this trial is <strong>not an accepted settling velocity</strong>. Non-spherical grains, flocculation, cohesive fines, hindered settling at higher concentrations and bed resuspension require additional treatment. The illustrative diameter is not a prescribed hydropower removal cutoff.</p>",
                    sources: []
                },
                {
                    id: "ideal-trajectory-capture",
                    title: "Trajectory extension: residence time, fall distance and ideal capture",
                    html: "<p><em>Source-free syllabus extension: the bank supplies no complete ideal-trajectory basin example.</em> Consider a rectangular active settling zone of width B, length L and clear working depth h, all in metres. Assume steady Q, uniform horizontal velocity <strong>u = Q/(Bh)</strong>, dilute discrete particles with constant positive w<sub>s</sub>, a horizontal collecting floor, no vertical remixing, no short-circuiting and no resuspension.</p>" +
                        "<p>A particle spends <strong>t<sub>r</sub> = L/u</strong> in the zone and falls a distance w<sub>s</sub>t<sub>r</sub>. A particle entering at height z above the floor is captured if z ≤ w<sub>s</sub>t<sub>r</sub>. The most demanding starting height is z = h, so complete ideal capture of this class requires L/u ≥ h/w<sub>s</sub>.</p>" +
                        "<p>Substituting continuity gives <strong>w<sub>s</sub>BL/Q ≥ 1</strong>, or <strong>w<sub>s</sub> ≥ q<sub>o</sub> = Q/(BL)</strong>. The surface loading q<sub>o</sub> has units m/s and uses the <em>horizontal active plan area</em>. It is not Q/(Bh), which is the horizontal flow velocity, and it is not Q/(BLh), which has inverse-time units.</p>" +
                        "<p>Now assume the class enters uniformly over all heights from 0 to h. The fraction of its incoming mass starting low enough to settle is the captured height divided by h. Hence <strong>η = min(w<sub>s</sub>t<sub>r</sub>/h, 1) = min(w<sub>s</sub>BL/Q, 1)</strong>. If entrance concentration or velocity varies with height, that simple uniform-height fraction is no longer automatically valid.</p>" +
                        "<p>For a target fraction η<sub>target</sub> between zero and one, the ideal minimum area for this single class is η<sub>target</sub>Q/w<sub>s</sub>. The complete-capture threshold is Q/w<sub>s</sub>. These are theoretical results under the stated trajectory model, not guaranteed field efficiencies.</p>" +
                        "<p>Depth cancels because increasing h both lengthens the settling distance and reduces u at fixed Q and B. It still affects turbulence, bed shear, inlet/outlet behaviour, sediment-storage clearance and construction. Removing depth from the entire practical design would therefore be a serious misuse of the cancellation.</p>",
                    sources: []
                },
                {
                    id: "depth-mixed-concentration-model",
                    title: "Concentration extension: derive a depth-mixed plug-flow model",
                    html: "<p><em>Source-free syllabus extension for the explicitly required concentration approach.</em> The following is <strong>one specified concentration model, not a universal settling law or an asserted code formula</strong>. Assume steady longitudinal plug flow, constant Q and B, and concentration C(x) that is continuously mixed across the depth and width at each longitudinal position. There is no longitudinal dispersion, short-circuiting, resuspension, flocculation or change in particle settling velocity.</p>" +
                        "<p>Use the model assumption that the effective concentration at the collecting surface equals the section mean, so deposition flux is <strong>w<sub>s</sub>C</strong>, in kg/(m<sup>2</sup> s). Across a short slice dx, incoming minus outgoing suspended mass rate equals deposition onto plan area B dx: Q[C(x) − C(x + dx)] = B dx w<sub>s</sub>C(x). Dividing by dx and taking the limit gives <strong>Q dC/dx = −B w<sub>s</sub>C</strong>.</p>" +
                        "<p>Separate variables: dC/C = −(B w<sub>s</sub>/Q) dx. Integrating from C<sub>in</sub> at x = 0 to C<sub>out</sub> at x = L gives <strong>ln(C<sub>out</sub>/C<sub>in</sub>) = −w<sub>s</sub>BL/Q</strong>. Thus <strong>C<sub>out</sub>/C<sub>in</sub> = exp(−w<sub>s</sub>BL/Q)</strong> and, for equal inlet and outlet water discharge, <strong>η = 1 − exp(−w<sub>s</sub>BL/Q)</strong>.</p>" +
                        "<p>For a specified positive outlet concentration below the inlet concentration, solve <strong>L = [Q/(B w<sub>s</sub>)] ln(C<sub>in</sub>/C<sub>out</sub>)</strong>. Equivalently, BL = −(Q/w<sub>s</sub>) ln(1 − η<sub>target</sub>). In this model, exactly zero outlet concentration or exactly 100% removal is approached only as the loading ratio tends to infinity.</p>" +
                        "<p><strong>The mixing assumption differs from the trajectory model.</strong> Here depth mixing continually redistributes remaining suspended particles; in the ideal trajectory derivation each particle simply falls without vertical remixing. Longitudinal plug flow does not mean an absence of depth mixing. Do not combine the no-remixing assumption with the exponential result, or call either prediction measured performance without hydraulic evidence.</p>",
                    sources: []
                },
                {
                    id: "settling-model-comparison-example",
                    title: "Added basin example: why the same loading gives 100% or 63.2%",
                    html: "<p><em>Source-free syllabus extension and explicitly added example: all dimensions, flows and settling velocities in this block are illustrative, not original question data.</em> Take Q = 2.0 m<sup>3</sup>/s, B = 5.0 m, L = 20.0 m, h = 2.0 m and a selected particle class with w<sub>s</sub> = 0.020 m/s. The settling velocity is a given for this example, not an unverified Stokes estimate for an unstated grain.</p>" +
                        "<p>The active plan area is <strong>100 m<sup>2</sup></strong>, the working cross-section is <strong>10 m<sup>2</sup></strong>, u = 2/10 = <strong>0.20 m/s</strong>, and t<sub>r</sub> = 20/0.20 = <strong>100 s</strong>. The surface loading is q<sub>o</sub> = 2/100 = 0.020 m/s. Therefore the dimensionless loading ratio <strong>λ = w<sub>s</sub>BL/Q = 1</strong>.</p>" +
                        "<table><thead><tr><th scope='col'>Model</th><th scope='col'>Calculation at λ = 1</th><th scope='col'>Interpretation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Uniform-entry ideal trajectories</th><td>η = min(1, 1) = <strong>100%</strong>.</td><td>Even the top-entering grain falls 0.020 × 100 = 2.0 m to the floor by the outlet.</td></tr>" +
                        "<tr><th scope='row'>Depth-mixed plug-flow concentration</th><td>η = 1 − exp(−1) = <strong>63.2%</strong>, approximately.</td><td>Mixing redistributes the remaining concentration; the model leaves 36.8% in the outlet flow.</td></tr></tbody></table>" +
                        "<p>For an <strong>illustrative 90% target</strong> for the same class at the same Q and B, the trajectory area is 0.9Q/w<sub>s</sub> = <strong>90.0 m<sup>2</sup></strong>, giving L = 18.0 m. The mixed-model area is (Q/w<sub>s</sub>) ln 10 ≈ <strong>230.26 m<sup>2</sup></strong>, giving L ≈ <strong>46.05 m</strong>.</p>" +
                        "<p>The difference is not an arithmetic contradiction. The two calculations idealize different vertical particle behaviour. Actual design must select and justify an appropriate model, assess nonuniform flow and resuspension, and provide its practical allowances. Neither a theoretical 100% nor the larger calculated area proves compliance for every sediment class or operating condition.</p>",
                    sources: []
                },
                {
                    id: "graded-capture-and-outlet-quality",
                    title: "Graded-capture extension: combine grain classes by incoming mass",
                    html: "<p><em>Source-free syllabus extension with an added sediment-mixture example.</em> Let f<sub>i</sub> be the incoming particulate <strong>mass fraction</strong> of class i, so Σf<sub>i</sub> = 1, and let η<sub>i</sub> be its predicted capture fraction under one consistent model. Then <strong>η<sub>overall</sub> = Σf<sub>i</sub>η<sub>i</sub></strong>. Equal weighting of class efficiencies is justified only when their incoming masses are equal.</p>" +
                        "<p><strong>Added mixture:</strong> use Q = 2 m<sup>3</sup>/s and active area BL = 100 m<sup>2</sup>, giving q<sub>o</sub> = 0.020 m/s. Assume three noncohesive classes with the following invented mass fractions and supplied settling velocities. Apply each model separately; the two efficiency values in each row are alternatives, not quantities to average together.</p>" +
                        "<table><thead><tr><th scope='col'>Class</th><th scope='col'>f<sub>i</sub></th><th scope='col'>w<sub>s,i</sub>, m/s</th><th scope='col'>η<sub>i</sub>: trajectory / mixed</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Faster settling</th><td>0.20</td><td>0.040</td><td>1.0000 / 0.8647</td></tr>" +
                        "<tr><th scope='row'>Intermediate</th><td>0.50</td><td>0.020</td><td>1.0000 / 0.6321</td></tr>" +
                        "<tr><th scope='row'>Slower settling</th><td>0.30</td><td>0.005</td><td>0.2500 / 0.2212</td></tr></tbody></table>" +
                        "<p>The trajectory total is 0.20(1) + 0.50(1) + 0.30(0.25) = <strong>0.775, or 77.5%</strong>. Its escaping mass fraction is 0.225, entirely from the slower class. Using the unrounded mixed-model efficiencies instead gives <strong>η<sub>overall</sub> ≈ 0.55535, or 55.5%</strong>.</p>" +
                        "<p>With an additional illustrative C<sub>in</sub> = 0.40 kg/m<sup>3</sup> and equal inlet/outlet water flow, <strong>C<sub>out</sub> = C<sub>in</sub>(1 − η<sub>overall</sub>)</strong>. The trajectory prediction is <strong>0.090 kg/m<sup>3</sup></strong>; the mixed prediction is about <strong>0.178 kg/m<sup>3</sup></strong>. An illustrative outlet goal of 0.10 kg/m<sup>3</sup> requires η ≥ 75%, so only the first of these model predictions meets it.</p>" +
                        "<p>Class-specific protection targets still matter even when a total-concentration goal is met. Changes in flow, grading or mineral hardness can change turbine exposure. Use grading at the basin inlet after the gravel trap, and keep dissolved mass outside this particulate balance.</p>",
                    sources: []
                },
                {
                    id: "sediment-mass-and-concentration-units",
                    title: "Sediment quantity: concentration, mass rate and accumulated mass",
                    html: "<p>Let Q be the flow through the basin in m<sup>3</sup>/s and C the incoming <strong>dry particulate sediment mass per unit volume of that flow</strong>, in kg/m<sup>3</sup>. The incoming mass rate is <strong>Q C</strong>, in kg/s. For constant Q and C during an interval T seconds, incoming mass is <strong>M<sub>in</sub> = Q C T</strong>, in kg.</p>" +
                        "<p>This is the bank's G × T × C expression, with G denoting discharge there. Seconds identify <strong>an interval or period, not a frequency</strong>. Moreover, incoming mass becomes deposited mass only after allowing for capture and any material already removed. For a constant capture fraction η and no removal, <strong>ΔM<sub>dep</sub> = η Q C T</strong>; setting η = 1 is an additional complete-capture assumption.</p>" +
                        "<p>More generally, with capture into the deposit η(t) and ongoing removal rate R<sub>m</sub>(t) in kg/s, <strong>M<sub>dep</sub>(T) = M<sub>dep</sub>(0) + ∫[η(t)Q(t)C(t) − R<sub>m</sub>(t)] dt</strong> over the interval. For several grain classes, use their separate incoming mass rates and efficiencies, or a correctly mass-weighted overall η. Do not apply another capture factor to sediment that has already been counted as deposited.</p>" +
                        "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Unit or conversion</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Concentration</th><td><strong>1 kg/m<sup>3</sup> = 1000 mg/L</strong>, exactly.</td></tr>" +
                        "<tr><th scope='row'>Incoming mass rate</th><td>(m<sup>3</sup>/s)(kg/m<sup>3</sup>) = kg/s.</td></tr>" +
                        "<tr><th scope='row'>Incoming mass over T</th><td>(kg/s)(s) = kg; this is neither sediment volume nor events per second.</td></tr>" +
                        "<tr><th scope='row'>Mass-based ppm</th><td>C in kg/m<sup>3</sup> = C<sub>ppm</sub>ρ<sub>mixture</sub>/10<sup>6</sup>, when ppm is a dry-sediment/mixture mass ratio.</td></tr></tbody></table>" +
                        "<p>The familiar numerical equality of mg/L and ppm is only a <strong>dilute-water approximation</strong> with mixture density near 1000 kg/m<sup>3</sup>. A concentration in mg/L is not itself a dimensionless mass fraction. For varying river conditions, integrate Q C together; multiplying unrelated mean discharge and mean concentration can miss the high sediment flux during floods.</p>",
                    sources: [{ id: "HYDR626-00264", set: 29, question: 61 }]
                },
                {
                    id: "deposit-bulk-volume-and-packing",
                    title: "Deposit volume: solids, voids, dry bulk density and packing definitions",
                    html: "<p>Deposited dry sediment mass occupies both solid-grain volume and a bulk deposit containing voids. Let <strong>V<sub>bulk</sub> = V<sub>solid</sub> + V<sub>void</sub></strong>, porosity <strong>n = V<sub>void</sub>/V<sub>bulk</sub></strong>, and grain density ρ<sub>s</sub> = M<sub>dry</sub>/V<sub>solid</sub>. Then V<sub>solid</sub> = (1 − n)V<sub>bulk</sub>.</p>" +
                        "<p>It follows that <strong>ρ<sub>dry,bulk</sub> = M<sub>dry</sub>/V<sub>bulk</sub> = (1 − n)ρ<sub>s</sub></strong> and <strong>V<sub>bulk</sub> = M<sub>dep</sub>/ρ<sub>dry,bulk</sub></strong>, with M<sub>dep</sub> expressed as dry deposited mass. By contrast, <strong>V<sub>solid</sub> = M<sub>dep</sub>/ρ<sub>s</sub></strong> excludes void space. For physical voids, dry bulk density cannot exceed the density of the solid grains.</p>" +
                        "<p>Void ratio is <strong>e = V<sub>void</sub>/V<sub>solid</sub> = n/(1 − n)</strong>, so <strong>ρ<sub>dry,bulk</sub> = ρ<sub>s</sub>/(1 + e)</strong>. A bulk-volume/solid-volume multiplier is <strong>k<sub>v</sub> = 1 + e = 1/(1 − n) ≥ 1</strong>. It multiplies solid volume, or divides particle density; it does not multiply particle density to produce a larger dry bulk density.</p>" +
                        "<p>The words <strong>packing factor</strong> alone are insufficient. A solid-volume fraction V<sub>solid</sub>/V<sub>bulk</sub> must not exceed one, whereas the inverse volume multiplier is at least one. A factor relating two measured bulk-density states would need both states defined. These conventions cannot be exchanged merely to reproduce an answer option.</p>" +
                        "<p>For a saturated deposit, wet bulk density is approximately <strong>(1 − n)ρ<sub>s</sub> + nρ<sub>w</sub></strong>, including pore-water mass. Dividing <em>dry sediment mass</em> by this wet density incorrectly counts water as sediment mass. Use dry bulk density for dry-mass storage calculations, and measure or justify how packing changes with grading, deposition and consolidation. Working water volume, allowable sediment volume and total basin volume are also distinct quantities.</p>",
                    sources: [{ id: "HYDR626-00266", set: 29, question: 63 }]
                },
                {
                    id: "ten-day-silt-volume-bank-check",
                    title: "The ten-day bank example: why the packing definition controls the answer",
                    html: "<p><strong>Actual bank data, HYDR626-00266, Model 29 Q63:</strong> Q = 25 m<sup>3</sup>/s, C = 5 kg/m<sup>3</sup>, duration 10 days, stated silt density 2400 kg/m<sup>3</sup>, and an undefined packing factor of 1.2. The stored key is <strong>D, 37,500 m<sup>3</sup></strong>. These notes do not alter it.</p>" +
                        "<p>First compute the unambiguous incoming quantity: <strong>T = 10 × 24 × 3600 = 864,000 s</strong>; Q C = <strong>125 kg/s</strong>; hence <strong>M<sub>in</sub> = 108,000,000 kg</strong>. If capture is a constant η and no deposit is removed during the interval, added deposited mass is <strong>108,000,000η kg</strong>. The numerical alternatives below explicitly assume <strong>η = 1</strong>; complete capture is not supplied by the stem.</p>" +
                        "<table><thead><tr><th scope='col'>Interpretation of density and factor</th><th scope='col'>Consequence at complete capture</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>2400 is particle density alone</th><td>Solid-grain volume is 108,000,000/2400 = <strong>45,000 m<sup>3</sup></strong>. Bulk deposit volume still needs a void-space definition.</td></tr>" +
                        "<tr><th scope='row'>2400 is particle density; 1.2 is V<sub>bulk</sub>/V<sub>solid</sub></th><td>V<sub>bulk</sub> = 1.2 × 45,000 = <strong>54,000 m<sup>3</sup></strong>. Here e = 0.2, n = 1/6 and dry bulk density = 2000 kg/m<sup>3</sup>.</td></tr>" +
                        "<tr><th scope='row'>2400 is already dry bulk density</th><td>V<sub>bulk</sub> = <strong>45,000 m<sup>3</sup></strong>. Do not apply an additional undefined packing adjustment to a density that already includes its void state.</td></tr></tbody></table>" +
                        "<p>The stored explanation instead calls 2400 the particle density and multiplies it by 1.2 to obtain <strong>2880 kg/m<sup>3</sup></strong> as dry bulk density. This implies <strong>n = 1 − 2880/2400 = −0.20</strong> and <strong>e = 2400/2880 − 1 = −1/6</strong>. Negative void space is impossible. At full capture, its resulting 37,500 m<sup>3</sup> is smaller than the 45,000 m<sup>3</sup> occupied by the solid grains themselves.</p>" +
                        "<p><strong>Do not simply replace D with A, 45,000.</strong> That number is solid volume under one interpretation and bulk volume under another. A 1.2 bulk-volume multiplier gives 54,000, which is not offered. Capture efficiency and density/factor definitions remain missing or contradictory; choosing an unstated efficiency to fit an option would not repair the explanation. No unique corrected bulk-volume option is asserted.</p>",
                    sources: [{ id: "HYDR626-00266", set: 29, question: 63 }]
                },
                {
                    id: "flushing-arrangements-and-bieri",
                    title: "Flushing arrangements and the meaning of continuous operation in Bieri",
                    html: "<p>Sediment removal can be arranged so that a basin is cleaned intermittently, sediment is purged while water delivery continues, or separate bays alternate between settling and cleaning. Distinguish the <strong>continuity of plant production</strong> from the <strong>timing and location of sediment-outlet operation</strong>.</p>" +
                        "<table><thead><tr><th scope='col'>Operating arrangement</th><th scope='col'>What must be checked</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Intermittent chamber flushing</th><td>A deposit accumulates to a chosen limit, then the chamber is isolated or operated in a flushing mode. Generation may stop or use another available route.</td></tr>" +
                        "<tr><th scope='row'>Sediment removal during water delivery</th><td>A controlled purge removes collected sediment while useful flow continues. Water supply, flushing head and separation of the sediment-rich outlet from the power outlet must be adequate.</td></tr>" +
                        "<tr><th scope='row'>Parallel-bay operation</th><td>Other bays remain available while one is cleaned. Their reduced total active area must still meet the permitted discharge and sediment duty.</td></tr></tbody></table>" +
                        "<p>The bank's <strong>BEIRI</strong> spelling is read here as <strong>Bieri</strong>. Its intended contrast is a basin arrangement that permits <strong>continued plant production while flushing</strong>, rather than requiring routine complete shutdown for every sediment-removal operation. Continued production remains conditional on sufficient water and the functioning operating arrangement.</p>" +
                        "<p>That description does <strong>not</strong> mean every flushing opening is permanently fully open or that each location flushes at every instant. Local or sequential operation can coexist with continuing overall water delivery. The actual mechanism, gate sequence and control logic require the design and operating documentation of the particular installation.</p>" +
                        "<p><strong>Unverified particulars:</strong> the supplied research did not establish the claimed Middle Marsyangdi installation or the claimed specific level/turbidity sensors from inspected primary material. They are not presented here as verified project facts or universal Bieri features. The source key's operational intent can be explained without endorsing those additional assertions.</p>",
                    sources: [{ id: "HYDR626-00034", set: 5, question: 66 }]
                },
                {
                    id: "filling-interval-and-cycle-frequency",
                    title: "Frequency extension: derive filling time and include cleaning downtime",
                    html: "<p><em>Source-free syllabus extension with an added storage-and-frequency example: no assigned question supplies allowable storage, residual sediment, capture efficiency and a complete flushing cycle.</em> Let V<sub>allow</sub> be the deposit volume at the operating limit and V<sub>res</sub> the residual deposit just after cleaning. With constant dry bulk density, the available additional dry-mass storage is <strong>ΔM = ρ<sub>dry,bulk</sub>(V<sub>allow</sub> − V<sub>res</sub>)</strong>.</p>" +
                        "<p>During filling, let η Q C be the captured dry-mass rate and R<sub>m</sub> the ongoing dry-mass removal rate, both in kg/s. Constant positive net deposition gives <strong>T<sub>fill</sub> = ρ<sub>dry,bulk</sub>(V<sub>allow</sub> − V<sub>res</sub>)/(η Q C − R<sub>m</sub>)</strong>, in <strong>seconds</strong>. This requires V<sub>allow</sub> &gt; V<sub>res</sub>, a positive denominator and unchanged conditions. If the denominator is zero or negative, this model does not predict a finite filling time; do not report a negative interval or infer that maintenance is unnecessary.</p>" +
                        "<p>If settling/filling is suspended throughout flushing, refill and restart, <strong>T<sub>cycle</sub> = T<sub>fill</sub> + T<sub>nonfilling</sub></strong>. Event frequency is <strong>f = 1/T<sub>cycle</sub></strong>, in s<sup>−1</sup>, or 86,400/T<sub>cycle</sub> events per day. Where deposition continues during cleaning, use the full time-dependent inventory instead of appending downtime without a mass balance.</p>" +
                        "<p><strong>Added example:</strong> take ρ<sub>dry,bulk</sub> = 1600 kg/m<sup>3</sup>, V<sub>allow</sub> = 90 m<sup>3</sup>, V<sub>res</sub> = 18 m<sup>3</sup>, Q = 2 m<sup>3</sup>/s, C = 0.25 kg/m<sup>3</sup>, η = 0.80 and a small routine purge R<sub>m</sub> = 0.08 kg/s. The extra capacity is <strong>115,200 kg</strong>; net deposition is 0.80 × 2 × 0.25 − 0.08 = <strong>0.32 kg/s</strong>. Thus T<sub>fill</sub> = <strong>360,000 s = 100 h</strong>.</p>" +
                        "<p>Assuming a further <strong>2 h of nonfilling operation</strong> gives T<sub>cycle</sub> = <strong>102 h = 367,200 s = 4.25 days</strong>, so f ≈ <strong>0.2353 events/day</strong>. The two-hour allowance still needs a flushing-capacity check. If C doubles while other filling inputs remain fixed, net deposition becomes 0.72 kg/s and filling time becomes 160,000 s, not exactly half the original time because the routine removal rate has not doubled.</p>",
                    sources: []
                },
                {
                    id: "flush-water-and-sediment-capacity",
                    title: "Flushing-capacity extension: close both water and sediment balances",
                    html: "<p><em>Source-free syllabus extension and added flushing example.</em> In the dilute-flow hydraulic balance, <strong>dV/dt = Q<sub>in</sub> − Q<sub>power</sub> − Q<sub>flush</sub> − Q<sub>other</sub></strong>, with V the stored flow volume within the selected boundary. Drawdown requires total outflow greater than inflow. A controlled-level purge can instead have inflow equal to outflow while sediment is removed; drawdown is not required in every flushing arrangement.</p>" +
                        "<p>Water capacity alone does not establish sediment capacity. Over a flushing event, <strong>change in total sediment inventory = incoming dry sediment mass − exported dry sediment mass</strong>. That total inventory includes both the bed deposit and suspended material still in the basin. If the suspended inventory is the same at the start and finish, net bed removal equals exported mass minus incoming mass. Otherwise include its change explicitly.</p>" +
                        "<p>For one inlet and one flushing outlet at constant conditions, with no other sediment route and unchanged suspended inventory, net removal rate is <strong>Q<sub>flush</sub>C<sub>flush</sub> − Q<sub>in</sub>C<sub>in</sub></strong>. It must be positive, and its time integral must remove the targeted deposit. Here both concentrations are dry sediment mass per volume of their respective streams; a water-discharge rating cannot supply the outlet concentration.</p>" +
                        "<p>When an applicable calibrated orifice rating is used, <strong>Q<sub>flush</sub> = C<sub>d</sub>A<sub>g</sub>√(2gΔH)</strong>. Define the gate area, coefficient and driving head for that rating. Check falling upstream level, tailwater, conduit losses, sediment obstruction and the route's transport capacity. A maximum discharge at the initial head is not a sustained event-average discharge.</p>" +
                        "<p><strong>Added budget example continuing the preceding invented storage case:</strong> suppose a controlled-level purge has Q<sub>in</sub> = Q<sub>flush</sub> = 1.0 m<sup>3</sup>/s, zero turbine flow, average C<sub>in</sub> = 0.8 kg/m<sup>3</sup> and C<sub>flush</sub> = 20.0 kg/m<sup>3</sup>. All this inflow is supplied through the intake; assume no other sediment route, negligible conveyance loss and unchanged suspended inventory. The net export is <strong>19.2 kg/s</strong>; removing 115,200 kg needs <strong>6000 s = 100 min</strong> and approximately <strong>6000 m<sup>3</sup></strong> of flushing-stream water. An additional 20 min for nonfilling recovery would make the assumed two-hour nonfilling period, not the complete 102-hour cycle.</p>" +
                        "<p>This closes an illustrative budget, not a gate or channel design. Sustaining the assumed sediment concentration, driving head and water supply for 100 min must be established independently. Safe disposal, avoidance of harmful scour and the residual deposit after flushing also need verification.</p>",
                    sources: []
                },
                {
                    id: "operation-and-reference-limits",
                    title: "Operational extension: monitor the assumptions and respect reference scope",
                    html: "<p><em>Source-free syllabus extension: the assigned bank supplies no site monitoring record, maintenance schedule or approved sediment-disposal plan.</em> Operate against observable limits rather than a calendar derived from one assumed concentration. Record river and basin levels, diverted flow, sediment conditions, rack obstruction, gate condition and the deposit remaining after a flush.</p>" +
                        "<ul><li><strong>Reassess loading:</strong> storms can change concentration and grading together. A short sediment pulse may fill useful storage faster than a seasonal mean predicts.</li><li><strong>Check actual storage:</strong> survey the deposit surface and residual pockets. Uneven accumulation can interfere with the flow section before the nominal total volume is filled.</li><li><strong>Maintain the removal path:</strong> inspect racks, collectors, gate seals, flushing passages and outfalls. Tailwater rise or outlet clogging can invalidate both water and sediment capacity assumptions.</li><li><strong>Verify measurements:</strong> turbidity is not automatically dry-mass concentration. Any surrogate needs site-appropriate calibration and checks when grading or mineralogy changes.</li><li><strong>Dispose safely:</strong> consider downstream users, fish, turbidity impacts and erosion when planning sediment releases or mechanical removal. Do not discharge spoil where it blocks the river or re-enters the intake.</li></ul>" +
                        "<p><strong>Reference boundaries:</strong> the USBR glossary supports terminology, not project acceptance. The AEPC Reference Micro Hydro Power Standard has a first edition in 2005 and first update in 2014; the relevant guidance is scoped to micro/pico systems up to 100 kW, not all ROR developments. Its website upload date is not its technical edition.</p>" +
                        "<p>The linked FAO intake and settling-basin material is <strong>fish-farm training</strong>. It supports explanations of approach selection, water levels, screens, settling area, storage and cleaning, but its application-specific dimensional rules are not large-hydropower standards. A printed-edition date was not established in the supplied research. The original derivations here are explicit engineering models, not purported quotations of clauses from these references.</p>" +
                        "<p>A DoED headworks PDF was located during the supplied research, but readable technical pages were not obtained. <strong>No edition, clause or technical proof is claimed from that unread PDF.</strong> None of these notes establishes current Nepal adoption, project approval or a complete site design. Bank-source links identify the questions being discussed; they do not certify every stored explanation or provide provenance for the clearly added examples.</p>",
                    sources: []
                }
            ],
            gaps: [
                "intake-opening-submergence-and-losses is a source-free syllabus extension. Its added opening-area example supplies invented discharge, velocity and obstruction values; the bank does not provide a site rating, minimum stage, bed-clearance criterion or vortex assessment.",
                "particle-settling-stokes-limit is a source-free syllabus extension. Particle diameter, shape, density, viscosity and measured settling behaviour are not supplied as a complete bank dataset. The added Stokes calculation is not a mandated sediment-size cutoff.",
                "ideal-trajectory-capture is a source-free syllabus extension deriving a uniform-entry, no-vertical-remixing model. Actual inlet profiles, short-circuiting, turbulent dispersion and resuspension data are missing, so ideal capture is not verified field efficiency.",
                "depth-mixed-concentration-model and settling-model-comparison-example are source-free syllabus extensions. The exponential is one explicitly depth-mixed plug-flow model, not a universal concentration law; all comparative geometry and efficiency-target examples are added teaching inputs.",
                "graded-capture-and-outlet-quality is a source-free syllabus extension with invented mass fractions, settling velocities and an outlet goal. Real grading, mineral hardness and turbine-specific protection criteria remain necessary; the bank does not prescribe the illustrated target.",
                "filling-interval-and-cycle-frequency and flush-water-and-sediment-capacity are source-free syllabus extensions. Their linked worked examples invent allowable and residual storage, dry bulk density, capture, routine removal, flushing concentrations, supply and downtime. These do not certify a real basin's flushing interval or outlet capacity.",
                "The ten-day silt question leaves capture efficiency and the meaning of its density and packing factor unresolved. Its explanation produces dry bulk density above particle density. Neither 37,500 nor a simple replacement with 45,000 cubic metres is justified as a unique bulk-deposit answer; 54,000 applies only to the stated alternative full-capture volume-factor interpretation.",
                "The transition questions do not define the H/V axis conventions or whether 7–10 degrees is a half-angle or included angle. No drawing or inspected primary provision establishes those ratios or a universal 12-degree upper limit.",
                "The specific Middle Marsyangdi installation and level/turbidity-sensor assertions associated with the Bieri question were not verified from inspected primary material. The operational concept is distinguished from those unverified particulars and from a claim that every flushing opening is always open.",
                "operation-and-reference-limits is a source-free syllabus extension. Site monitoring, maintenance, fish-passage design and safe disposal require additional evidence. USBR terminology, scoped AEPC 2014 micro-hydro guidance and FAO fish-farm training are the reference basis; the unread DoED PDF supplies no clause proof, and no current adoption or project approval is claimed."
            ],
            cautions: [
                {
                    html: "<p><strong>Bank check: Bieri continuity is not a verified control-system specification.</strong> HYDR626-00034 intends continued plant production during flushing, subject to the working arrangement and water supply. It does not establish that every opening is constantly fully open. The Middle Marsyangdi and specific sensor assertions remain unverified from inspected primary material; they are not adopted as installation facts. The original BEIRI spelling and key remain untouched.</p>",
                    sources: [{ id: "HYDR626-00034", set: 5, question: 66 }]
                },
                {
                    html: "<p><strong>Bank check: submerged does not necessarily mean on the bed.</strong> HYDR626-00035's bottom-of-river key describes one arrangement, not the complete meaning of submergence. Side openings can also be submerged. Operation at all stages requires sufficient minimum submergence and supply; sediment, submerged debris, ice obstruction and inspection difficulties are still possible. Submergence is not immunity from damage.</p>",
                    sources: [{ id: "HYDR626-00035", set: 5, question: 67 }]
                },
                {
                    html: "<p><strong>Bank check: concave-bank preference is conditional.</strong> HYDR626-00215 reflects the usual deeper outer-bank approach and sediment tendencies of a bend. The same bank can erode severely. River morphology, foundation and bank stability, sediment pathways and access govern the final location; the keyed bank is not automatically safe or sediment-free.</p>",
                    sources: [{ id: "HYDR626-00215", set: 24, question: 63 }]
                },
                {
                    html: "<p><strong>Bank check: turbine characteristics can affect intake protection.</strong> HYDR626-00218's absolute exclusion of turbine type is too broad. Downstream clearances, fine-rack spacing, acceptable sediment and abrasion consequences can influence the intake and treatment design. River velocity, sediment and required discharge remain important without making turbine requirements irrelevant.</p>",
                    sources: [{ id: "HYDR626-00218", set: 24, question: 66 }]
                },
                {
                    html: "<p><strong>Bank check: debris protection is not complete sediment removal.</strong> HYDR626-00129, HYDR626-00220 and HYDR626-00238 correctly associate trash racks with interception of appropriate debris. Fine abrasive particles can pass the bars and require separate sediment treatment. The racks-and-trolley option in the first question overlaps a rack installation; it is not an entirely different physical protection principle.</p>",
                    sources: [
                        { id: "HYDR626-00129", set: 15, question: 63 },
                        { id: "HYDR626-00220", set: 24, question: 68 },
                        { id: "HYDR626-00238", set: 1, question: 66 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: correct the explained route, not the stored question.</strong> In HYDR626-00271, diverted water passes <strong>through</strong> the Tyrolean rack into its collector; excluded coarse bed load travels <strong>over</strong> the rack downstream, not underneath into that collector. HYDR626-00272's malformed numerical option supplies no 10% gradient threshold. Flat-reach limitations and steep-reach suitability require the actual sediment and hydraulic setting.</p>",
                    sources: [
                        { id: "HYDR626-00271", set: 30, question: 61 },
                        { id: "HYDR626-00272", set: 30, question: 62 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: 100–120% means 0–20% extra.</strong> HYDR626-00276 must not be paraphrased as 10–20% extra, which would mean 110–120%. Account for flushing water only in the passages it actually uses; river under-sluice bypass is not automatically intake flow. The reviewed AEPC 2014 conveyance allowance has a micro/pico-hydro scope up to 100 kW and is not a universal intake rule.</p>",
                    sources: [{ id: "HYDR626-00276", set: 30, question: 66 }]
                },
                {
                    html: "<p><strong>Bank check: separate solutes, grain size and transport mode.</strong> HYDR626-00254's dissolved load belongs to a broad river-material classification; it is not particulate material removed by ordinary settling. In HYDR626-00258, coarse and suspended are not mutually exclusive: coarse suspended sand can settle too. The design target is specified settleable suspended classes, not necessarily only fines and not every suspended particle.</p>",
                    sources: [
                        { id: "HYDR626-00254", set: 28, question: 63 },
                        { id: "HYDR626-00258", set: 28, question: 67 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: functional zones are not sharp settling boundaries.</strong> HYDR626-00260's inlet commonly includes its transition, so the two labels need a diagram to be exclusive. HYDR626-00262 should identify the main intended removal region, not claim particles only start falling there. HYDR626-00263's long settling zone is typical of a conventional layout, not a universal proportion or permission to count all transition area as active settling area.</p>",
                    sources: [
                        { id: "HYDR626-00260", set: 28, question: 69 },
                        { id: "HYDR626-00262", set: 29, question: 59 },
                        { id: "HYDR626-00263", set: 29, question: 60 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: bulk flow and undefined transition ratios.</strong> HYDR626-00036 does not supply enough data to calculate a basin Reynolds number. Low velocity does not itself imply laminar bulk flow, and Stokes particle settling does not require the whole basin to be laminar. Its 1H:2V horizontal and 1H:5V vertical statements also lack a clear geometric convention; they cannot simply be certified correct because laminar flow is the keyed choice.</p>",
                    sources: [{ id: "HYDR626-00036", set: 5, question: 68 }]
                },
                {
                    html: "<p><strong>Bank check: angle conventions cannot be interchanged.</strong> HYDR626-00261's 7°–10° range needs an included-angle or half-angle definition. A 1:5 lateral-to-longitudinal wall slope gives arctan(0.2) = <strong>11.31°</strong> as the half-angle, not 7°–10°. The stated 12° maximum is not verified here as a universal provision. The added dimensional example explains the geometry without attributing its values to this question.</p>",
                    sources: [{ id: "HYDR626-00261", set: 29, question: 58 }]
                },
                {
                    html: "<p><strong>Bank check: sediment management reduces and redistributes a load.</strong> HYDR626-00257's gravel-trap-before-basin sequence is the usual arrangement where both are installed, not a claim that every project needs identical structures. HYDR626-00265's watershed measures reduce sediment supply rather than eliminating it. Exclusion, deposition and removal are different stages, each with its own capacity and maintenance requirements.</p>",
                    sources: [
                        { id: "HYDR626-00257", set: 28, question: 66 },
                        { id: "HYDR626-00265", set: 29, question: 62 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: a list of objectives is not a performance calculation.</strong> HYDR626-00259 properly combines sediment removal, settling capacity and efficient flushing. It supplies no grain-class efficiency, active plan area, storage allowance or flushing rating. The added trajectory and concentration derivations are explicitly labelled models, not numerical conclusions extracted from this all-of-the-above answer.</p>",
                    sources: [{ id: "HYDR626-00259", set: 28, question: 68 }]
                },
                {
                    html: "<p><strong>Bank check: G T C is incoming mass over a period.</strong> In HYDR626-00264, m<sup>3</sup>/s × s × kg/m<sup>3</sup> gives <strong>kg</strong>. T in seconds is an emptying interval, not frequency. Deposited mass additionally needs capture efficiency and removal accounting; volume additionally needs a correctly defined dry bulk density. Event frequency is the reciprocal of the complete applicable cycle time.</p>",
                    sources: [{ id: "HYDR626-00264", set: 29, question: 61 }]
                },
                {
                    html: "<p><strong>Bank check: the 37,500 m<sup>3</sup> explanation implies negative void space.</strong> HYDR626-00266 gives incoming mass <strong>108,000,000 kg</strong> in 10 days. Multiplying particle density 2400 by 1.2 to obtain dry bulk density 2880 implies n = −0.20 and e = −1/6. At full capture, 45,000 m<sup>3</sup> is solid volume; a 1.2 bulk-volume/solid-volume multiplier gives <strong>54,000 m<sup>3</sup></strong>. If 2400 is already dry bulk density, bulk volume is 45,000 before any separately defined adjustment. Capture and packing remain unresolved: neither the stored D nor a simple replacement with A is asserted as uniquely justified.</p>",
                    sources: [{ id: "HYDR626-00266", set: 29, question: 63 }]
                },
                {
                    html: "<p><strong>Bank check: plant and headworks use different boundaries.</strong> HYDR626-00269 includes the powerhouse as part of the complete ROR plant. HYDR626-00270 lists intake-side river headworks. An under-sluice and basin flushing outlet are branches, not compulsory series elements before the turbine; ROR also does not forbid limited diversion pondage.</p>",
                    sources: [
                        { id: "HYDR626-00269", set: 29, question: 66 },
                        { id: "HYDR626-00270", set: 29, question: 67 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: objectives need operating conditions.</strong> HYDR626-00273's reliable supply, economy and debris/ice protection are design aims, not guarantees of zero maintenance or damage. HYDR626-00251 correctly identifies a fish ladder's purpose, but successful passage needs species-appropriate hydraulics and water supply. An ordinary scouring sluice or trash rack is not automatically a safe fishway or fish screen.</p>",
                    sources: [
                        { id: "HYDR626-00273", set: 30, question: 63 },
                        { id: "HYDR626-00251", set: 27, question: 67 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: under-sluice sediment routing has limits.</strong> HYDR626-00275 concerns bed material accumulated in front of the intake and its removal towards the downstream river. This is not a settling-basin outlet or a guarantee of removing all suspended sediment. Available head, tailwater, transport capacity, blockage, river-water availability and safe downstream scour/disposal conditions determine whether useful flushing actually occurs.</p>",
                    sources: [{ id: "HYDR626-00275", set: 30, question: 65 }]
                }
            ],
            references: [
                {
                    title: "USBR Glossary — sediment, intake and hydraulic-structure terminology; terminology reference, not design acceptance",
                    url: "https://www.usbr.gov/library/glossary/"
                },
                {
                    title: "AEPC Reference Micro Hydro Power Standard — first update 2014; scoped micro/pico-hydro conveyance, intake and sediment-control guidance up to 100 kW",
                    url: "https://www.aepc.gov.np/docs/2018-06-19_Reference%20Micro%20Hydro%20Power%20Standard,%202014.pdf"
                },
                {
                    title: "FAO fish-farm training: water intakes — siting, levels and screens; not a general hydropower design standard",
                    url: "https://www.fao.org/fishery/docs/CDrom/FAO_Training/FAO_Training/General/x6708e/x6708e07.htm"
                },
                {
                    title: "FAO fish-farm training, section 11.6: settling basins — settling area, deposit storage and cleaning; application-specific guidance",
                    url: "https://www.fao.org/fishery/docs/CDrom/FAO_Training/FAO_Training/General/x6708e/x6708e11.htm"
                }
            ]
        }
    });
})();