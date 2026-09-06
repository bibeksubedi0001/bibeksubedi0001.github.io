(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0706: {
            code: "ACiE0706",
            questionCount: 62,
            blocks: [
                {
                    id: "drainage-waterlogging-aeration-and-duration",
                    title: "Waterlogging is an aeration problem with a time dimension",
                    html: "<p><strong>A cropped soil is waterlogged when excessive water restricts root-zone aeration enough to impair the intended crop.</strong> Water occupies pores that would otherwise provide connected air pathways. Oxygen supply to respiring roots becomes inadequate, so root activity, nutrient uptake and growth can decline even though water is abundant. Poor aeration can develop before every pore is completely filled; complete cessation of all air movement is not a necessary diagnostic threshold.</p>" +
                        "<p>Root-zone saturation may result from rainfall, flooding, seepage, irrigation or obstructed drainage. Over-irrigation is one cause, <em>not part of an exclusive definition</em>. A shallow water table and its capillary fringe can affect roots without visible surface ponding. Conversely, a short-lived surface puddle does not establish a permanently high regional water table.</p>" +
                        "<ul><li><strong>Depth:</strong> relate water levels to the actual rooting zone and the soil's capillary behaviour, not to an assumed universal depth below ground.</li><li><strong>Duration:</strong> record how long poor aeration persists and whether another wetting event arrives before recovery.</li><li><strong>Crop and stage:</strong> species, establishment stage, temperature and adaptation to flooded conditions change the response.</li><li><strong>Purpose:</strong> an ill-aerated natural wetland can be valuable habitat; its wetness is not by itself a reason for agricultural drainage.</li></ul>" +
                        "<p><small>These notes cover causes, effects, prevention and surface/subsurface design. Source links identify related assigned bank items, not endorsements of every stored explanation. Added analytical models and examples are labelled; no regional design-code approval is implied.</small></p>",
                    sources: [
                        { id: "IRRI951-00267", set: 26, question: 70 },
                        { id: "IRRI951-00269", set: 26, question: 72 },
                        { id: "IRRI951-00276", set: 26, question: 78 },
                        { id: "IRRI951-00278", set: 27, question: 68 }
                    ]
                },
                {
                    id: "drainage-field-capacity-and-available-water",
                    title: "Field capacity, wilting point and useful storage",
                    html: "<p><em>Official-scope extension, supported by FAO-56 Chapter 8 rather than a separate assigned bank numerical.</em> <strong>Field capacity, FC, is the water content remaining after rapid gravity drainage has markedly decreased in a well-drained soil.</strong> It is not saturation. At the permanent wilting point, PWP, remaining water is too strongly held for the plant to recover from wilting under the defining conditions; PWP is a drought-side condition, not a waterlogging point.</p>" +
                        "<p>With volumetric water contents θ<sub>FC</sub> and θ<sub>WP</sub> in m<sup>3</sup>/m<sup>3</sup>, and effective rooting depth Z<sub>r</sub> in m, FAO-56 gives <strong>TAW = 1000 (θ<sub>FC</sub> − θ<sub>WP</sub>) Z<sub>r</sub></strong> in mm. The factor 1000 converts metres of water to millimetres. <strong>RAW = p TAW</strong>, where p is the dimensionless fraction that can be depleted before water stress develops under the assumed crop and evaporative demand. RAW is not all water held in the soil.</p>" +
                        "<p><strong>Illustrative added storage example:</strong> θ<sub>FC</sub> = 0.30, θ<sub>WP</sub> = 0.15, Z<sub>r</sub> = 0.60 m and an assumed p = 0.40 give TAW = 1000 × 0.15 × 0.60 = <strong>90 mm</strong> and RAW = <strong>36 mm</strong>. These are invented teaching inputs, not crop-specific recommendations.</p>" +
                        "<p>Increasing water content above FC does not turn all extra storage into beneficial crop water: impaired aeration can dominate. FAO-56's simplified scheduling balance assumes prompt removal of excess above FC; that assumption is <strong>not proof of same-day drainage in a restrictive, waterlogged field</strong>. Such a field needs an explicit water-table and drainage assessment.</p>",
                    sources: []
                },
                {
                    id: "drainage-causes-and-field-diagnosis",
                    title: "Trace the inflow and the obstruction before choosing a remedy",
                    html: "<p>Waterlogging develops when inflow and recharge exceed the removal possible within the available time. For a defined field control volume, <strong>change in surface-plus-soil water storage = rainfall + irrigation + net lateral inflow − evapotranspiration − surface outflow − subsurface outflow</strong>. Express every term as mm over the same area and period, or convert all terms to volumes. Count each boundary crossing once; a tile discharge must not also be counted as a separate deep-percolation loss from that same control volume.</p>" +
                        "<table><thead><tr><th scope='col'>Observed pattern</th><th scope='col'>Mechanism to investigate</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Ponding in hollows</th><td>Microtopographic depressions, blocked field outlets, flat grades and run-on from adjoining land can concentrate rainfall or irrigation.</td></tr>" +
                        "<tr><th scope='row'>Wet layer above a barrier</th><td>A clay lens, hardpan or other restrictive layer can create perched saturation above an underlying unsaturated zone.</td></tr>" +
                        "<tr><th scope='row'>Broad seasonal rise</th><td>Regional recharge, flooding, canal leakage or lateral groundwater inflow from higher land may exceed the basin's discharge capacity.</td></tr></tbody></table>" +
                        "<p>Repeated storms can maintain wetness that a single storm would cause only temporarily. A perched water body is not automatically the regional groundwater table: compare observations at different depths with the soil profile and a common elevation datum. A drain that reaches the wrong layer may miss the actual water source.</p>" +
                        "<p>Survey low points and outlet levels, log soil layers, observe water levels before and after rain or irrigation, and compare wet and unaffected patches. Water-loving weeds are a useful symptom of persistent moisture, but <strong>do not uniquely identify canal seepage</strong>; rainfall, floodwater and poor drainage can support them too.</p>",
                    sources: [
                        { id: "IRRI951-00268", set: 26, question: 71 },
                        { id: "IRRI951-00270", set: 26, question: 73 },
                        { id: "IRRI951-00271", set: 26, question: 74 },
                        { id: "IRRI951-00273", set: 26, question: 75 },
                        { id: "IRRI951-00274", set: 26, question: 76 },
                        { id: "IRRI951-00275", set: 26, question: 77 }
                    ]
                },
                {
                    id: "drainage-canal-seepage-and-source-control",
                    title: "Canal lining and lower supply levels control one source",
                    html: "<p>A canal whose water level exceeds the surrounding groundwater head can lose water through its bed and banks. This seepage contributes recharge to neighbouring land. A persistent wet strip alongside the canal is consistent with that mechanism, but the diagnosis should compare canal operation, water levels and other possible inflows.</p>" +
                        "<p><strong>Lining reduces the seepage pathway; lowering the full supply level, FSL, can reduce the driving head.</strong> Neither measure guarantees zero leakage. Cracks, joints, penetrations, foundation conditions and maintenance affect lining performance. Reducing FSL also changes the head available at offtakes and may reduce gravity command, delivery capacity or service to higher fields.</p>" +
                        "<ol><li>Establish whether canal recharge materially contributes to the wet area.</li><li>Compare seepage-control works, operating-level changes and an appropriately located interceptor with their costs and command-area effects.</li><li>Check the downstream disposal route and whether groundwater levels actually respond after implementation.</li></ol>" +
                        "<p>Lining cannot extinguish waterlogging caused independently by extreme rainfall, river flooding, highland inflow or a blocked outfall. It reduces an <strong>input</strong>; a working drain provides an <strong>output</strong>. Keeping those roles separate prevents the mistaken explanation that every remedial measure merely reduces the water reaching the water table.</p>",
                    sources: [
                        { id: "IRRI951-00082", set: 9, question: 71 },
                        { id: "IRRI951-00083", set: 9, question: 72 },
                        { id: "IRRI951-00135", set: 14, question: 69 }
                    ]
                },
                {
                    id: "drainage-irrigation-frequency-and-intensity",
                    title: "Manage net application, not frequency labels",
                    html: "<p>Preventing irrigation-induced waterlogging means controlling the <strong>net amount and rate reaching the field</strong> relative to crop demand, soil-water deficit, rainfall, any justified leaching and available drainage. Repeated deep percolation can raise a poorly drained water table. A short irrigation interval alone does not establish excessive application.</p>" +
                        "<p><strong>Illustrative added comparison:</strong> two net applications of 15 mm and six net applications of 5 mm both supply <strong>30 mm</strong> over the same period. They need not produce identical evaporation or percolation, but the six applications do not inherently supply more water. Application control, infiltration, rooting depth and weather determine whether either schedule is appropriate. FAO-29 discusses both the possible benefit of frequent irrigation and the drainage problems caused when smaller application depths cannot be controlled.</p>" +
                        "<p><strong>Intensive and extensive irrigation describe concentration of irrigation and cropping over land or seasons, not an automatic water depth per hectare.</strong> Spreading a limited supply over more area or reducing cropping intensity may reduce concentrated recharge. A larger irrigated area does not, by definition, mean a greater application to every hectare.</p>" +
                        "<p>Measure delivered flow and duration, estimate infiltrated depth, credit rainfall, and observe the water-table response. Neither frequent irrigation nor extensive irrigation is intrinsically the incorrect practice. The bank's rejection of extensive irrigation uses a faulty area-versus-depth argument; the listed management approaches require site-specific conditions rather than that blanket distinction.</p>",
                    sources: [
                        { id: "IRRI951-00085", set: 9, question: 74 },
                        { id: "IRRI951-00086", set: 9, question: 75 },
                        { id: "IRRI951-00272", set: 1, question: 76 },
                        { id: "IRRI951-00291", set: 28, question: 72 }
                    ]
                },
                {
                    id: "drainage-remedies-and-conjunctive-use",
                    title: "Match source control, drainage and groundwater use",
                    html: "<p>There can be several valid remedies for the same field. Prompt surface disposal helps with ponding; canal seepage control reduces recharge; subsurface drains or appropriately sited wells can lower a hydraulically connected water table. Choosing one measure does not make the other measures generally incorrect.</p>" +
                        "<table><thead><tr><th scope='col'>Measure</th><th scope='col'>Necessary qualification</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Groundwater pumping</th><td>Abstraction must influence the water body causing the problem. Lifting surface water elsewhere is not automatically groundwater drainage.</td></tr>" +
                        "<tr><th scope='row'>Conjunctive use</th><td>Coordinate groundwater and canal supplies so usable pumped water can replace part of the imported supply; account for return percolation and water quality.</td></tr>" +
                        "<tr><th scope='row'>Contour bunding</th><td>Captures runoff for water conservation and erosion control. In already wet ground, retained water can worsen ponding or recharge unless suitable drainage is provided.</td></tr></tbody></table>" +
                        "<p>Groundwater abstraction can lower heads, but <strong>excessive abstraction is not a recommended waterlogging remedy</strong>. Overdraft can harm neighbouring wells, wetlands and stream baseflow, increase pumping costs, cause subsidence in susceptible formations or change water quality. Specify an assessed operating range and monitor impacts.</p>" +
                        "<p>Choose a combination from a water budget and a feasible outfall, balancing water conservation against aeration needs. The bank's quick-rainwater-disposal choice is only one valid remedy. Likewise, intensive/extensive management and lift irrigation can each be useful under appropriate conditions; none should be condemned solely by its label.</p>",
                    sources: [
                        { id: "IRRI951-00279", set: 27, question: 69 },
                        { id: "IRRI951-00280", set: 27, question: 70 },
                        { id: "IRRI951-00281", set: 27, question: 71 }
                    ]
                },
                {
                    id: "drainage-rootable-volume-and-chemical-response",
                    title: "Drainage improves the usable root zone, not the amount of soil",
                    html: "<p>Removing excess water can restore connected air-filled pores and enlarge the <strong>aerated, root-accessible volume</strong>. This is the useful interpretation of the bank's soil-volume wording. A drain does not add soil or inherently increase the physical bulk volume of the field. Better aeration can support deeper rooting, improve trafficability and allow timely cultivation where wetness was the limiting factor.</p>" +
                        "<p>Wet soil may benefit from drainage; its colour alone is not a design criterion. Confirm that the proposed system can collect the excess water, convey it to an outlet and achieve the required water-table response. Draining a moisture-deficient soil can instead increase irrigation demand.</p>" +
                        "<p><strong>Chemical changes are conditional.</strong> Oxygen depletion changes microbial activity and redox conditions, sometimes increasing dissolved reduced iron or manganese and other harmful products. Restored aeration can change their chemical forms, while suitable percolation can export mobile solutes. Not every toxic substance is soluble, mobile or removed by a tile drain, and drainage does not manufacture nitrogen or guarantee a particular pH.</p>" +
                        "<p>Define the agricultural objective before intervening in natural wet land. Habitat, downstream flow, drainage-water quality and the effects of changing soil chemistry belong in the decision. A larger aerated root zone is a potential benefit, not proof that every swamp should be converted to a drained farm.</p>",
                    sources: [
                        { id: "IRRI951-00087", set: 9, question: 76 },
                        { id: "IRRI951-00282", set: 27, question: 72 },
                        { id: "IRRI951-00297", set: 28, question: 78 },
                        { id: "IRRI951-00298", set: 28, question: 79 }
                    ]
                },
                {
                    id: "drainage-salinity-sodicity-and-ph",
                    title: "Separate soluble salts, exchangeable sodium and pH",
                    html: "<p><strong>Salt-affected soil is a broader category than saline soil.</strong> Saline, sodic and saline-sodic conditions require different diagnoses. Waterlogging describes a water-and-aeration condition, not a chemical soil class.</p>" +
                        "<table><thead><tr><th scope='col'>Property</th><th scope='col'>What to measure and interpret</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Salinity</th><td>Soluble salts. EC<sub>e</sub> is conductivity of a soil saturation extract, commonly reported in dS/m at 25°C; do not confuse it with irrigation-water EC<sub>w</sub>.</td></tr>" +
                        "<tr><th scope='row'>Sodicity</th><td>Excessive exchangeable sodium relative to the soil's exchange capacity. Exchangeable sodium percentage, ESP, concerns charge on exchange sites; solution SAR is a related assessment, not the same measurement.</td></tr>" +
                        "<tr><th scope='row'>Alkaline reaction</th><td>A pH measurement describes hydrogen-ion activity on a logarithmic scale. Record the laboratory method; pH alone does not quantify soluble salts or exchangeable sodium.</td></tr></tbody></table>" +
                        "<p>A pH around <strong>11</strong> is severe alkalinity and warrants investigation of nutrient availability, toxicities and sodium status. It is not a universal numerical boundary at which all soils become infertile. The bank's <strong>pH &gt;9</strong> label for strongly alkaline soil has no verified classification source here; do not substitute it for a complete soil analysis or an automatic gypsum requirement.</p>" +
                        "<p><em>Thur</em> and <em>Kallar</em> are regional or legacy land descriptions in the bank. Their usage is not a universal technical classification of every waterlogged area. For design, report measured water levels, drainage restrictions, EC, sodium status and pH instead of relying on a regional name.</p>",
                    sources: [
                        { id: "IRRI951-00092", set: 10, question: 71 },
                        { id: "IRRI951-00130", set: 13, question: 75 },
                        { id: "IRRI951-00277", set: 26, question: 79 },
                        { id: "IRRI951-00288", set: 27, question: 78 },
                        { id: "IRRI951-00294", set: 28, question: 75 }
                    ]
                },
                {
                    id: "drainage-leaching-and-sodium-reclamation",
                    title: "Leach soluble salts; assess calcium before treating sodicity",
                    html: "<p><strong>Leaching moves dissolved salts below the root zone through percolating water and an effective drainage route.</strong> Surface flushing alone need not remove salts stored deeper in the profile. In the long term, salt export must balance or exceed salt inputs if storage is not to increase. Adding leaching water without adequate drainage can raise the table and worsen the original problem.</p>" +
                        "<ol><li>Measure soil salinity by depth, sodium status and the quality of both irrigation and groundwater.</li><li>Where excessive exchangeable sodium is diagnosed, assess a calcium amendment such as gypsum, CaSO<sub>4</sub>·2H<sub>2</sub>O, against the soil's requirement, existing calcium supply, treatment depth and amendment purity.</li><li>Calcium can replace sodium on exchange sites; the released sodium then has to be removed in solution by leaching and drainage. Leaching does not automatically wash all adsorbed alkali from exchange sites.</li><li>Monitor infiltration, water levels, effluent and the salinity profile. Do not assume a one-time amendment or drain installation completes reclamation.</li></ol>" +
                        "<p><em>FAO-29 analytical extension:</em> for its conventional surface-irrigation, long-term salt-balance assumptions, <strong>LR = EC<sub>w</sub> / (5 EC<sub>e,allow</sub> − EC<sub>w</sub>)</strong>. LR is the required leaching fraction; the two conductivities use the same dS/m units, and EC<sub>e,allow</sub> corresponds to the selected crop/yield criterion. The model assumes adequate drainage and the stated root-water extraction pattern; an uncontrolled saline groundwater input requires a different accounting.</p>" +
                        "<p><strong>Illustrative added calculation:</strong> with EC<sub>w</sub> = 1 dS/m and an assumed EC<sub>e,allow</sub> = 2 dS/m, LR = 1/9 ≈ <strong>0.111</strong>. For ET = 300 mm, no rainfall, no storage change and no other water losses, infiltrated irrigation = 300/(1 − 1/9) = <strong>337.5 mm</strong>; drainage is <strong>37.5 mm</strong>. This fraction is of infiltrated irrigation, not of ET. Existing effective leaching from rainfall or irrigation must be credited rather than added twice. These are hypothetical inputs, not a reclamation prescription.</p>",
                    sources: [
                        { id: "IRRI951-00003", set: 2, question: 71 },
                        { id: "IRRI951-00216", set: 21, question: 72 },
                        { id: "IRRI951-00293", set: 28, question: 74 }
                    ]
                },
                {
                    id: "drainage-crop-choice-after-reclamation",
                    title: "Salinity tolerance is not a complete reclaimed-soil crop decision",
                    html: "<p>Crop selection after reclamation must consider residual salinity, exchangeable sodium, soil structure, aeration, season, establishment conditions, available water and intended produce. The phrase recently reclaimed alkaline soil does not supply those data. A crop used in a reclamation sequence is not necessarily the crop with the highest soluble-salt tolerance.</p>" +
                        "<p>The following <strong>three comparative FAO-56 Table 23 guidelines</strong> concern mean root-zone saturation-extract conductivity at which yield first starts to decline under the source's assumptions. They are not Nepal reclamation standards or guaranteed field limits.</p>" +
                        "<table><thead><tr><th scope='col'>Crop</th><th scope='col'>EC<sub>e</sub> threshold</th><th scope='col'>FAO rating</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Berseem clover</th><td>1.5 dS/m</td><td>Moderately sensitive.</td></tr>" +
                        "<tr><th scope='row'>Wheat, Triticum aestivum</th><td>6.0 dS/m</td><td>Moderately tolerant.</td></tr>" +
                        "<tr><th scope='row'>Cotton</th><td>7.7 dS/m</td><td>Tolerant.</td></tr></tbody></table>" +
                        "<p>These facts do not support describing berseem as the most salt-resistant of the listed crops. They also <strong>do not prove that cotton or wheat must replace it in every reclaimed sodic soil</strong>. Salinity tolerance is different from tolerance of sodium-damaged structure or waterlogging. Climate, cultivar and cultural practices matter, and germination/seedling tolerance can differ from later growth.</p>" +
                        "<p>Use soil and water tests to define the remaining constraint, then consider a locally suitable crop and monitor establishment. The bank's berseem choice needs its missing reclamation and agronomic context; the comparison alone cannot certify a uniquely preferred crop.</p>",
                    sources: [{ id: "IRRI951-00289", set: 28, question: 70 }]
                },
                {
                    id: "drainage-waterlogging-salts-and-evidence",
                    title: "Waterlogging and salt accumulation can interact without being identical",
                    html: "<p>A shallow <strong>saline</strong> water table can supply salts to the root zone by upward capillary flow. Evaporation and crop water uptake leave much of that salt behind. The rate depends on groundwater quality, soil, climate, depth and irrigation management. Fresh-water waterlogging can harm roots without salinity, while saline irrigation can cause salinity even where the water table is not high.</p>" +
                        "<p><strong>Osmotic stress reduces the availability of soil water to roots.</strong> It does not mean every waterlogged root inevitably experiences outward osmotic water movement. Water movement depends on total water-potential differences, and plants differ in osmotic adjustment. Weed competition and ion toxicity are additional possible stresses, not necessary consequences in every wet field.</p>" +
                        "<p>FAO-29 distinguishes sodium-driven infiltration problems from salinity alone. High sodium relative to calcium and magnesium, especially at low electrolyte concentration, can promote dispersion, pore blockage and surface sealing. A high EC does not inevitably disperse soil; electrolyte concentration and SAR must be evaluated together. Thus the bank's simple salinity-causes-structural-breakdown loop is overbroad.</p>" +
                        "<p>Lowering a water table can reduce upward salt input, but <strong>does not instantly remove accumulated salts</strong>. Provide effective leaching, any assessed amendment and subsequent monitoring. Separately, the bank's <strong>10% worldwide</strong> figure has no date or verified denominator: its stem refers to land and its explanation to irrigated land. Treat it as an undated bank claim, not a current statistic. A useful extent estimate must define the population, survey period and waterlogging criterion.</p>",
                    sources: [
                        { id: "IRRI951-00290", set: 28, question: 71 },
                        { id: "IRRI951-00292", set: 28, question: 73 },
                        { id: "IRRI951-00295", set: 28, question: 76 }
                    ]
                },
                {
                    id: "drainage-network-and-outfall",
                    title: "A drain needs a complete route to an acceptable outfall",
                    html: "<p><strong>Drains remove surplus water; irrigation supply canals primarily deliver water.</strong> An open drainage channel may itself be called a drainage canal. The name describes function, not a fundamentally different law of flow. An outlet is the exit or discharge structure of a system and is not restricted in meaning to an individual farm holding.</p>" +
                        "<p>Follow the complete route: field collection, laterals or shallow drains, collectors, main drain and receiving outfall. Each link needs compatible capacity and levels. A well-sized lateral cannot perform if the collector is blocked, the receiving river submerges the outlet or another crossing throttles the system.</p>" +
                        "<ol><li>Survey the outfall first, including seasonal and flood tailwater levels, before committing to field-drain depths.</li><li>Trace the available gravity head along the route and account for junctions, structures and downstream backwater.</li><li>If gravity discharge is unavailable, assess an engineered pumping and storage arrangement, operating reliability and environmental acceptability rather than assuming a deeper trench will solve it.</li><li>Check who receives the water, its quality and any effect on neighbouring land or habitat.</li></ol>" +
                        "<p>Drainage is therefore a collection-and-disposal system, not merely an excavation in a wet patch. An accessible, maintainable and environmentally acceptable outfall is part of the design from the beginning.</p>",
                    sources: [
                        { id: "IRRI951-00088", set: 9, question: 77 },
                        { id: "IRRI951-00325", set: 31, question: 71 }
                    ]
                },
                {
                    id: "drainage-grading-bedding-and-depressions",
                    title: "Use microrelief and bedding to give surface water a path",
                    html: "<p><strong>Bedding shapes cropped land into gently raised strips separated by shallow dead furrows.</strong> The furrows collect excess rainfall or irrigation and lead it to a collector. Their usefulness depends on continuous fall and an outlet; a furrow closed by a headland, wheel rut or bund can simply become another pond.</p>" +
                        "<p>Land grading establishes a planned surface gradient; smoothing removes smaller irregularities. Check both the broad slope and the microrelief controlling the last shallow water in depressions. A nominal field grade does not eliminate isolated hollows, and a clear field path is insufficient if the receiving drain is backed up.</p>" +
                        "<ul><li>Locate depressions and natural flow paths with levels, not visual judgement alone.</li><li>Compare shallow random drains, bedding and appropriate grading while preserving usable topsoil and farm access.</li><li>Allow for settlement of fill, erosion along concentrated flow paths and interruptions at crossings or field boundaries.</li><li>Connect collection furrows to a drain able to receive the water during the design event.</li></ul>" +
                        "<p>A depression <strong>does not automatically require a deep surface drain</strong>. Depth follows the needed interception, conveyance and outlet elevations, together with soil stability and maintenance. Shallow works may suffice for small surface accumulations; lowering a groundwater table is a different task. Bedding can be economical in suitable terrain, but no universal cheapest solution follows without comparing site works and upkeep.</p>",
                    sources: [
                        { id: "IRRI951-00081", set: 9, question: 70 },
                        { id: "IRRI951-00284", set: 27, question: 74 },
                        { id: "IRRI951-00302", set: 29, question: 71 }
                    ]
                },
                {
                    id: "drainage-open-channel-geometry-and-capacity",
                    title: "Size an open drain for flow, stability and maintenance",
                    html: "<p>A trapezoidal section is common for excavated field drains because sloping sides can suit the soil and mechanical maintenance. It is <strong>not the universally optimal geometry</strong>. Excavation cost, bank stability, land take, lining, vegetation, access and downstream controls can matter more than minimising wetted perimeter.</p>" +
                        "<p><em>Analytical design extension:</em> for bottom width b, flow depth y and side slope z horizontal to 1 vertical, <strong>A<sub>f</sub> = (b + zy)y</strong> and <strong>P<sub>w</sub> = b + 2y√(1 + z<sup>2</sup>)</strong>. With b and y in m, flow area A<sub>f</sub> is in m<sup>2</sup>, wetted perimeter P<sub>w</sub> in m and hydraulic radius <strong>R = A<sub>f</sub>/P<sub>w</sub></strong> in m. Freeboard is not included in the flowing area.</p>" +
                        "<p>For the applicable steady uniform-flow approximation, <strong>Q = (1/n) A<sub>f</sub> R<sup>2/3</sup> S<sub>f</sub><sup>1/2</sup></strong>. Q is in m<sup>3</sup>/s with SI Manning n and energy slope S<sub>f</sub> in m/m. Bed slope may replace S<sub>f</sub> only where uniform-flow conditions justify it. Backwater or a control structure needs a water-surface-profile check instead of that substitution.</p>" +
                        "<p>Calculate mean velocity Q/A<sub>f</sub>, check permissible erosion for the actual material and vegetation, and assess sediment deposition, freeboard and bank safety. A uniform-flow estimate of mean boundary shear is <strong>τ ≈ ρgRS<sub>f</sub></strong> in Pa when ρ is kg/m<sup>3</sup>; local bed and bank stresses can differ. Neither a preferred shape nor a computed discharge alone proves that ponding clears within a crop's tolerance time.</p>",
                    sources: [
                        { id: "IRRI951-00090", set: 10, question: 69 },
                        { id: "IRRI951-00303", set: 29, question: 72 }
                    ]
                },
                {
                    id: "drainage-surface-and-blind-inlets",
                    title: "Surface and blind inlets connect to carriers, not imaginary sinks",
                    html: "<p>A surface inlet admits ponded water to a <strong>connected underground carrier drain</strong>. The carrier must have capacity and a functioning outfall. Sending water below ground is not equivalent to safely disposing of it, and this drainage arrangement is not automatically a groundwater-recharge well.</p>" +
                        "<table><thead><tr><th scope='col'>Component</th><th scope='col'>Function and limitation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Beehive grate</th><td>A raised, open cover screens larger trash while providing inlet openings at several heights. Accumulated debris still reduces its effective area.</td></tr>" +
                        "<tr><th scope='row'>Silt trap or sump</th><td>Provides an accessible place to retain sediment before it reaches the pipe; it needs regular removal of deposits.</td></tr>" +
                        "<tr><th scope='row'>Blind inlet</th><td>A buried permeable aggregate/filter arrangement over a perforated collection connection can receive surface water without an exposed riser. Its filter and hydraulic connection remain essential.</td></tr></tbody></table>" +
                        "<p>A blind inlet is <strong>not a clog-proof gravel soakaway</strong>. Fine sediment, unsuitable filter grading, compaction, biological growth or a backed-up carrier can reduce performance. Small quantities of surface water can also be removed by other arrangements; quantity alone does not uniquely select a blind inlet.</p>" +
                        "<p>Check capture capacity at the allowed ponding head, sediment and trash load, pipe capacity, outlet level, safe covers and maintenance access. Protect the carrier from sediment rather than relying on a grate to stop every fine particle.</p>",
                    sources: [
                        { id: "IRRI951-00308", set: 29, question: 76 },
                        { id: "IRRI951-00309", set: 29, question: 77 },
                        { id: "IRRI951-00310", set: 29, question: 78 }
                    ]
                },
                {
                    id: "drainage-coefficient-units-and-water-fractions",
                    title: "A drainage coefficient is depth per time",
                    html: "<p>The drainage coefficient w is a design removal rate expressed as an equivalent water depth over the drainage area, commonly <strong>mm/day or cm/day</strong>. It is not simply a depth, a percentage of irrigation, or a rainfall return period. Discharge Q becomes comparable only after the contributing area is included.</p>" +
                        "<p>One hectare is 10000 m<sup>2</sup>; 1 mm over 1 ha is <strong>10 m<sup>3</sup></strong>. Therefore, entering w in mm/day and area A<sub>ha</sub> in hectares gives <strong>Q = w A<sub>ha</sub>/8640</strong> in m<sup>3</sup>/s, because a day has 86400 seconds. For a constant rate maintained over T days, <strong>V = 10 w A<sub>ha</sub> T</strong> in m<sup>3</sup>. Thus 1 mm/day over 1 ha corresponds to about <strong>0.11574 L/s</strong>.</p>" +
                        "<p><strong>Dimensional check:</strong> depth/time × area is volume/time; multiplying by duration then gives volume. Convert cm/day to mm/day before using these numerical factors. In a soil-flow equation using conductivity in m/day, express w in m/day instead.</p>" +
                        "<p>The bank's <strong>10–50% of applied water</strong> is an unverified indicative range, not a universal drainage standard. A fraction needs a defined application volume and period before it yields capacity. Rainfall, seepage, leaching and storage changes must also be considered. Evaporation and surface runoff are not automatically recharge intercepted by tiles, and a steady average coefficient is not necessarily the required peak capacity of an inlet or surface collector.</p>",
                    sources: [
                        { id: "IRRI951-00285", set: 27, question: 75 },
                        { id: "IRRI951-00286", set: 27, question: 76 }
                    ]
                },
                {
                    id: "drainage-bank-volumes-and-missing-inputs",
                    title: "Bank volumes: missing time basis versus missing area",
                    html: "<p>Before multiplying a drainage coefficient by area and duration, identify whether the quoted depth is a <strong>daily rate</strong> or the <strong>total depth for the stated period</strong>. These interpretations produce different volumes. Neither an answer option nor an unexplained extra value repairs an incomplete input.</p>" +
                        "<p><strong>Bank numerical, Model 10 question 70:</strong> the area is 20 ha and the period is five days, but the stem gives 1.5 cm without a clear daily unit. If it means <strong>1.5 cm/day = 15 mm/day</strong>, daily removal is 10 × 15 × 20 = <strong>3000 m<sup>3</sup>/day</strong>. The five-day volume is <strong>15000 m<sup>3</sup></strong>, matching the stored choice, and continuous average Q = 3000/86400 ≈ <strong>0.034722 m<sup>3</sup>/s</strong>.</p>" +
                        "<p>If 1.5 cm instead means the <em>entire five-day depth</em>, V = 0.015 × 200000 = <strong>3000 m<sup>3</sup> total</strong>. Multiplying that total by five would count the period twice. The daily interpretation is an explicit condition for the keyed 15000 m<sup>3</sup>, not an additional datum actually written in the stem.</p>" +
                        "<p><strong>Bank numerical, Model 29 question 70:</strong> the drainage area is missing. Even interpreting DC as 1.5 cm/day, the only determined expression is <strong>V = 10 × 15 × A<sub>ha</sub> × 5 = 750 A<sub>ha</sub> m<sup>3</sup></strong>. A volume of 7500 m<sup>3</sup> would require <strong>A<sub>ha</sub> = 10</strong>. That area appears in the explanation, not in the supplied question; it must not be presented as recovered input or a unique solution.</p>",
                    sources: [
                        { id: "IRRI951-00091", set: 10, question: 70 },
                        { id: "IRRI951-00301", set: 29, question: 70 }
                    ]
                },
                {
                    id: "drainage-event-storage-and-regional-assumptions",
                    title: "Event drainage needs rainfall, storage and crop constraints",
                    html: "<p>A surface-drainage design event requires rainfall frequency, duration and time distribution, antecedent wetness, run-on, infiltration, outlet conditions and crop-stage tolerance. The duration used to select rainfall is not automatically the allowed period of inundation. Route inflow through field storage and the drain/outlet response, checking both <strong>maximum ponding</strong> and <strong>time to recover</strong>.</p>" +
                        "<p><strong>Unverified bank assumptions, not regional design standards:</strong> the following values preserve the source distinctions. Their originating document, crop conditions and adoption have not been established.</p>" +
                        "<table><thead><tr><th scope='col'>Bank context</th><th scope='col'>Stored value</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Terai initial field water depth</th><td>50 mm.</td></tr>" +
                        "<tr><th scope='row'>Terai maximum ponding lasting one day</th><td>300 mm; no general crop-safety assurance is justified.</td></tr>" +
                        "<tr><th scope='row'>Terai design rainfall duration</th><td>3 days.</td></tr>" +
                        "<tr><th scope='row'>Hilly-region design rainfall duration</th><td>48 hours.</td></tr></tbody></table>" +
                        "<p><em>Illustrative added balance:</em> over a fixed field area and a chosen interval, write <strong>H<sub>p,end</sub> = H<sub>p,start</sub> + P + I + U − F − E − D<sub>s</sub></strong>. All terms are depths in mm: H<sub>p</sub> is ponded storage, P rainfall, I surface irrigation input, U run-on, F actual infiltration, E surface evaporation and D<sub>s</sub> exported surface drainage. Actual losses cannot exceed available water.</p>" +
                        "<p>For an invented daily interval with initial 20 mm, rainfall 40 mm, no irrigation/run-on, infiltration 15 mm, evaporation 2 mm and export 25 mm, residual storage is <strong>20 + 40 − 15 − 2 − 25 = 18 mm</strong>. This is volume accounting, not a routed peak or a safe ponding limit. Local depressions can be deeper than the field-average equivalent depth. Infiltration may also recharge a shallow table, so removing ponding and restoring subsurface aeration need separate checks. Blindly adopting 300 mm for one day could be unsafe for the intended crop.</p>",
                    sources: [
                        { id: "IRRI951-00304", set: 29, question: 73 },
                        { id: "IRRI951-00305", set: 1, question: 77 },
                        { id: "IRRI951-00306", set: 29, question: 74 },
                        { id: "IRRI951-00307", set: 29, question: 75 }
                    ]
                },
                {
                    id: "drainage-tiles-depth-and-soil-connection",
                    title: "Subsurface drains must connect hydraulically to the wet layer",
                    html: "<p><strong>Tile drainage is one form of subsurface drainage.</strong> Traditional short clay or concrete tiles admit water at open joints; modern buried systems commonly use perforated pipes. A carrier conveys collected water to the main and outlet. Open-jointed and perforated describe different entry arrangements, not a requirement that every drain use both.</p>" +
                        "<p><em>Scope extension:</em> subsurface water control can also use interceptor drains, suitably designed drainage wells and, in appropriate soils, mole drains. These are not all tile systems. Interception controls an incoming groundwater pathway; a field system more broadly controls water levels within the cropped area.</p>" +
                        "<p>Investigate hydraulic conductivity K, layering, restrictive horizons, groundwater heads and the collection path before choosing depth. Low-conductivity soil can sometimes be drained with closer spacing and suitable hydraulic connections; it is <strong>not categorically forbidden</strong>. An envelope around a pipe does not overcome a field-wide lack of conductivity.</p>" +
                        "<p>A pipe isolated beneath a poorly permeable barrier may fail to receive perched water above it. A correctly connected drain <em>above</em> a restrictive layer can function; being above an impervious horizon is not itself a failure. Conversely, placement in a locally pervious seam does not guarantee the whole root zone drains adequately.</p>" +
                        "<p>Choose depth with crop-root objectives, capillary influence, available outlet elevation, pipe cover, traffic loads, trench stability, settlement and construction access. Depth and spacing are coupled hydraulic choices as well as geotechnical and agricultural decisions, not rules determined by the word wet alone.</p>",
                    sources: [
                        { id: "IRRI951-00084", set: 9, question: 73 },
                        { id: "IRRI951-00287", set: 27, question: 77 },
                        { id: "IRRI951-00312", set: 30, question: 71 }
                    ]
                },
                {
                    id: "drainage-envelopes-and-construction-quality",
                    title: "Envelopes balance soil retention and water entry",
                    html: "<p>A granular or suitable geotextile drain envelope is selected for the surrounding soil and drain openings. Its functions can include <strong>retaining soil particles, providing a permeable approach to the openings and limiting entrance resistance</strong>. The appropriate envelope is not simply the finest available fabric or an arbitrary gravel thickness.</p>" +
                        "<ul><li><strong>Retention:</strong> prevent unacceptable soil migration and pipe sedimentation without sealing the soil–envelope interface.</li><li><strong>Hydraulic performance:</strong> provide suitable permeability and contact around the drain, considering the actual soil gradation and chemistry.</li><li><strong>Construction:</strong> maintain the designed line and grade, protect openings and envelope continuity, and avoid contamination by smeared trench soil or unsuitable backfill.</li><li><strong>Durability:</strong> assess physical clogging, root ingress and biological or chemical deposits; allow inspection and maintenance.</li></ul>" +
                        "<p>The field still has to deliver water through its own soil to the envelope. A thin highly permeable surround cannot make an extensive clay layer behave like permeable sand. Conversely, an unsuitable low-permeability filter can become the controlling resistance even where the soil itself could drain.</p>" +
                        "<p>No particle-size ratio, fabric specification or construction dimension is supplied by the assigned question. Select those from tested soil properties and an applicable verified design procedure. An envelope reduces particular risks; it does not promise permanent freedom from clogging.</p>",
                    sources: [{ id: "IRRI951-00283", set: 27, question: 73 }]
                },
                {
                    id: "drainage-layout-selection",
                    title: "Choose natural, herringbone, grid or double-main layouts by terrain",
                    html: "<p>A drainage layout must match topography, soil variability, field operations and the receiving outlet. Locate collectors where they can accept lateral flows with workable levels, then divide the area into hydraulic design units. A large field does not by itself require two parallel mains.</p>" +
                        "<table><thead><tr><th scope='col'>Layout</th><th scope='col'>Typical reasoning, not a compulsory rule</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Natural or random</th><td>Follow separate wet hollows or irregular natural drainage paths where systematic coverage is unnecessary.</td></tr>" +
                        "<tr><th scope='row'>Herringbone</th><td>Laterals join a collector obliquely from either side, often where the main follows a depression.</td></tr>" +
                        "<tr><th scope='row'>Gridiron</th><td>Regular, generally parallel laterals serve a comparatively uniform area and discharge into a collector.</td></tr>" +
                        "<tr><th scope='row'>Double main</th><td>Two mains can serve opposite sides of a broad depression or otherwise distinct drainage strips. Their alignment follows actual levels and boundaries, not a mandatory parallel geometry.</td></tr></tbody></table>" +
                        "<p>Different hydraulic conductivities may require different spacings within one farm. Check collector capacity as tributary area increases, avoid unnecessary overlap and excessive pipe depth, and retain access for inspection and field machinery. Layout names describe the arrangement; they do not provide a drain spacing, pipe diameter or outfall level.</p>",
                    sources: [{ id: "IRRI951-00300", set: 29, question: 69 }]
                },
                {
                    id: "drainage-hooghoudt-spacing-and-conductivity",
                    title: "Steady spacing: a conditional square-root relation",
                    html: "<p><em>Analytical syllabus extension linked to the bank's permeability question, not a quotation from an inspected FAO-62 formula chapter.</em> A Hooghoudt-type model describes steady, uniform net recharge to long, equally spaced parallel drains at a common level. It idealises horizontally uniform soil layers, with homogeneous isotropic conductivity within each layer, and a horizontal lower restrictive boundary. Entrance resistance, irregular recharge, backwater and transient storage require additional treatment.</p>" +
                        "<p>Use <strong>w = (8 K<sub>b</sub> d<sub>e</sub> h + 4 K<sub>a</sub> h<sup>2</sup>) / L<sup>2</sup></strong>. Here w is net recharge in m/day; K<sub>b</sub> and K<sub>a</sub> are conductivities below and above drain level in m/day; L is spacing in m; h is the <strong>midpoint water-table height above the maintained drain-water level</strong>, not depth below the ground. The equivalent depth d<sub>e</sub> is in m.</p>" +
                        "<p>Equivalent depth accounts approximately for convergence of flow near the drain. It depends on <strong>spacing, drain radius and actual distance to the restrictive layer</strong>; it is not automatically the surveyed depth to that layer. A real spacing solution generally updates d<sub>e</sub> consistently with L using an appropriate method.</p>" +
                        "<p>Rearranging gives <strong>wL<sup>2</sup> = 8 K<sub>b</sub>d<sub>e</sub>h + 4 K<sub>a</sub>h<sup>2</sup></strong>. Each term has units m<sup>3</sup>/day. With equal conductivity K and <em>fixed equivalent geometry, h and w</em>, this yields L proportional to √K, <strong>not directly proportional to K</strong>.</p>" +
                        "<p><strong>Illustrative added fixed-d<sub>e</sub> calculation:</strong> K<sub>a</sub> = K<sub>b</sub> = 0.5 m/day, d<sub>e</sub> = 1 m, h = 0.5 m and w = 0.005 m/day give a numerator of 2 + 0.5 = 2.5 m<sup>3</sup>/day. Hence L<sup>2</sup> = 2.5/0.005 = <strong>500 m<sup>2</sup></strong> and L ≈ <strong>22.3607 m</strong>. Doubling both conductivities while artificially holding d<sub>e</sub> fixed gives L = √1000 ≈ <strong>31.6228 m</strong>. This demonstrates scaling only, not a non-iterative field design.</p>",
                    sources: [{ id: "IRRI951-00089", set: 9, question: 78 }]
                },
                {
                    id: "drainage-storage-drawdown-and-dupuit-units",
                    title: "Transient storage and no-recharge flow are different models",
                    html: "<p><em>Official-scope analytical extension; no assigned question supplies this storage dataset.</em> Drainable porosity or specific yield S<sub>y</sub> is the fraction of bulk volume released by gravity drainage over the relevant conditions and time. It is not all pore water, total porosity n<sub>p</sub>, or void ratio e. Although n<sub>p</sub> = e/(1 + e), that phase relation does not determine S<sub>y</sub>.</p>" +
                        "<p>With approximately constant S<sub>y</sub>, area A in m<sup>2</sup> and a suitably averaged positive water-table fall Δz in m, <strong>V ≈ S<sub>y</sub> A Δz</strong> is the storage volume released in m<sup>3</sup>. Recharge and other inflows would add to the quantity that must be exported. <strong>Illustrative added example:</strong> S<sub>y</sub> = 0.08, A = 5 ha = 50000 m<sup>2</sup> and average Δz = 0.40 m give V = <strong>1600 m<sup>3</sup></strong>, equivalent to <strong>32 mm</strong> over the field. The remaining retained soil water has not vanished.</p>" +
                        "<p>A simplified area-averaged balance is <strong>S<sub>y</sub> dh̄/dt = r − q<sub>a</sub></strong>, where h̄ is water-table elevation, and net recharge r and removal q<sub>a</sub> use m/day over the same footprint. Positive q<sub>a</sub> − r lowers the average table. Actual removal changes with head, hydraulic connection and outlet conditions, so storage volume divided by nominal pipe capacity alone does not establish a crop-safe drawdown time.</p>" +
                        "<p><strong>Different steady model:</strong> under homogeneous unconfined Dupuit flow, a horizontal impervious datum, fixed end heads and <em>no distributed recharge or abstraction</em>, discharge per unit width is <strong>q′ = K (H<sub>1</sub><sup>2</sup> − H<sub>2</sub><sup>2</sup>) / (2ℓ)</strong>. H<sub>1</sub> and H<sub>2</sub> are saturated thicknesses above that datum, ℓ is separation in m, and flow is positive toward the lower head. With K in m/day, q′ is <strong>m<sup>2</sup>/day</strong>, not the m/day areal flux w in the recharged spacing model. Do not substitute one quantity for the other merely because both concern groundwater.</p>",
                    sources: []
                },
                {
                    id: "drainage-pipe-grade-and-hydraulic-capacity",
                    title: "Pipe capacity depends on energy slope and operating depth",
                    html: "<p>Buried open-jointed or perforated drains can run partly full, full or under surcharge depending on inflow and downstream conditions. They do <strong>not always flow full</strong>. A full-flow calculation is an explicit sizing assumption, not a description of every operating hour.</p>" +
                        "<p><em>Analytical extension:</em> for a circular pipe flowing full, <strong>A<sub>f</sub> = πD<sup>2</sup>/4</strong>, wetted perimeter = πD, and <strong>R = D/4</strong>. Substitution in Manning's relation gives <strong>Q = π D<sup>8/3</sup> √S<sub>f</sub> / (4<sup>5/3</sup> n)</strong>. Therefore <strong>D = [4<sup>5/3</sup> nQ / (π√S<sub>f</sub>)]<sup>3/8</sup></strong>.</p>" +
                        "<p>Use D and R in m, Q in m<sup>3</sup>/s and the SI Manning coefficient n, formally in s/m<sup>1/3</sup>, so A<sub>f</sub>R<sup>2/3</sup>/n has units m<sup>3</sup>/s. The friction/energy slope S<sub>f</sub> is dimensionless. At fixed n and S<sub>f</sub>, full-flow capacity varies with <strong>D<sup>8/3</sup></strong>, not D or D<sup>2</sup> alone.</p>" +
                        "<p>The bank's <strong>0.2% working grade</strong> is an unverified indicative value, not a universally mandatory minimum. Numerically, 0.2% = 0.002 m/m; an <em>illustrative</em> 100 m reach at that invert grade falls 0.20 m. Grade alone does not guarantee sediment transport or self-cleansing.</p>" +
                        "<p>Use bed grade as energy slope only for the justified uniform-flow approximation. Outlet submergence, inlet losses, junctions and pressure flow can change the hydraulic grade line, HGL, and available head. Check pipe invert and cover, drain-water levels relative to the desired root-zone level, tailwater, backwater capacity and any required reverse-flow protection. A non-return device also introduces losses and maintenance obligations.</p>",
                    sources: [{ id: "IRRI951-00313", set: 30, question: 72 }]
                },
                {
                    id: "drainage-bank-outlet-pipe-diameter",
                    title: "Bank pipe calculation: 25 cm, not an undersized 20 cm",
                    html: "<p><strong>Bank numerical, Model 29 question 68:</strong> area = 12 ha, DC = 2 cm interpreted as <strong>2 cm/day</strong>, tile grade = 0.5%, and Manning n = 0.015. For this calculation, <strong>assume a full-pipe Manning sizing model</strong>; full flow is not expressly specified by the stem. Also assume uniform conditions so the energy slope equals the stated grade: <strong>S<sub>f</sub> = 0.005</strong>, not 0.5.</p>" +
                        "<ol><li>Convert DC to <strong>20 mm/day</strong>. Required discharge is Q = 20 × 12/8640 = <strong>0.0277778 m<sup>3</sup>/s</strong>, or about 27.78 L/s.</li><li>For full circular flow, use A<sub>f</sub> = πD<sup>2</sup>/4 and R = D/4 in Manning's equation.</li><li>Calculate D = [4<sup>5/3</sup> × 0.015 × 0.0277778 / (π√0.005)]<sup>3/8</sup> ≈ <strong>0.226 m = 22.6 cm</strong>.</li><li>Choose a provided diameter with adequate capacity, rather than rounding to a smaller option.</li></ol>" +
                        "<table><thead><tr><th scope='col'>Available diameter</th><th scope='col'>Full-flow capacity under these assumptions</th><th scope='col'>Comparison</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>20 cm</th><td>About 0.0201 m<sup>3</sup>/s.</td><td>Less than 0.02778 m<sup>3</sup>/s; inadequate.</td></tr>" +
                        "<tr><th scope='row'>25 cm</th><td>About 0.0364 m<sup>3</sup>/s.</td><td>Exceeds the calculated demand; the suitable listed choice.</td></tr></tbody></table>" +
                        "<p>The result supports <strong>25 cm, option d</strong>, not the stored <strong>20 cm, option a</strong>. The phrase 20–25 cm in the explanation does not establish the capacity of 20 cm. This is a conditional bank calculation, not a construction diameter approved for an actual site: internal diameter, available head, collector inflows, losses, capacity allowance, pipe strength, cover and installation conditions still require design checks.</p>",
                    sources: [{ id: "IRRI951-00299", set: 29, question: 68 }]
                },
                {
                    id: "drainage-design-operation-and-disposal-workflow",
                    title: "Close the design with observation, maintenance and water quality",
                    html: "<p><em>Official-scope workflow extension, not a bank-supplied project design.</em> Surface collection, soil-water response, carrier capacity and disposal must work together. A steady spacing calculation does not prove recovery after a storm, and a large outlet pipe does not make water move quickly through a low-conductivity soil.</p>" +
                        "<ol><li><strong>Define the objective:</strong> intended land use, crop and growth stage, acceptable ponding and water-table duration, habitat constraints and the consequence of failure.</li><li><strong>Investigate:</strong> survey contributing areas, microrelief and outfall levels; measure soil layering, conductivity, drainable storage and water quality; record rainfall, irrigation and seasonal water levels.</li><li><strong>Choose and calculate:</strong> compare source reduction, surface grading, subsurface collection and managed pumping. Use an event model for storm storage and a suitable steady or transient soil model for the water table.</li><li><strong>Check the whole route:</strong> verify inlets, laterals, collectors, crossings, energy levels and outfall operation, including blocked-inlet and high-tailwater cases.</li><li><strong>Observe performance:</strong> compare water levels between drains and at outlets after wetting events, and monitor discharge, sediment, soil salinity and crop response before assuming the design objective is met.</li></ol>" +
                        "<p>Provide access to remove trash and silt, inspect pipe/outlet condition and repair local sags or damage. Investigate a decline in discharge together with water levels: it could mean less recharge, but it could also mean clogging or a submerged outlet. Low discharge alone is not proof of successful drainage.</p>" +
                        "<p>Assess the receiving water and any reuse plan. With concentration C in kg/m<sup>3</sup> and discharge Q in m<sup>3</sup>/s, solute export rate <strong>CQ</strong> is kg/s; EC itself is not a salt mass concentration to insert into that equation without a justified conversion. Reuse or dilution does not destroy the salt load. Consider nutrients, contaminants, ecology and applicable disposal permissions. The FAO-62 reference establishes publication and contents only; no complete formula chapter, local standard or project certification is claimed here.</p>",
                    sources: []
                }
            ],
            gaps: [
                "No site-specific survey, seasonal groundwater record, conductivity profile, restrictive-layer geometry, specific-yield measurement or crop-stage aeration criterion is supplied. The causes and design workflows explain how to obtain and use those data, not which depth or spacing to construct at an unidentified site.",
                "The 20 ha volume question lacks a clear daily time basis; the other five-day volume question omits area. The outlet-pipe question also relies on interpreting DC per day and using grade as energy slope under the stated full-flow approximation. Missing premises remain explicit rather than being inferred from the keyed choice.",
                "The bank's Terai 50 mm initial depth, 300 mm one-day ponding, three-day rainfall, hill 48-hour rainfall, 10–50% applied-water allowance and 0.2% working grade have no verified originating regional design document here. The pH >9 classification and undated worldwide 10% figure likewise lack the necessary classification or population/date evidence.",
                "No measured soil EC, exchangeable sodium, amendment requirement, irrigation-water analysis, residual reclamation condition or crop-season dataset is provided. FAO crop thresholds are comparative salinity guidelines, not sufficient evidence to prescribe a crop or gypsum rate for an unspecified reclaimed sodic soil.",
                "The available-water, leaching, ponding, fixed-equivalent-depth spacing and specific-yield examples use explicitly added illustrative inputs. No calibrated transient water-table model, routed storm result, guaranteed clogging performance or crop-safe recovery time is established by those arithmetic examples.",
                "FAO-56 Chapter 8 and the identified FAO-29 web sections support the stated soil-water, salinity and infiltration concepts. FAO-62 publication and contents are verified, not its full formula chapters. No current NEC/NS/regional technical requirement, disposal permit or construction approval has been certified."
            ],
            cautions: [
                {
                    html: "<p><strong>Definition and duration are broader than one cause:</strong> over-irrigation is only one route to poor root-zone aeration. Rainfall, floods, lateral seepage and restrictive layers can produce temporary or persistent waterlogging. Complete cessation of air movement is not required for oxygen stress. Swampy conditions can support natural habitat and are not automatically agricultural defects requiring drainage.</p>",
                    sources: [
                        { id: "IRRI951-00269", set: 26, question: 72 },
                        { id: "IRRI951-00273", set: 26, question: 75 },
                        { id: "IRRI951-00276", set: 26, question: 78 },
                        { id: "IRRI951-00278", set: 27, question: 68 }
                    ]
                },
                {
                    html: "<p><strong>Canal-specific remedies have limits:</strong> lining and a lower canal FSL can reduce canal recharge, but cannot eliminate independent rainfall, flood or regional-groundwater causes. Lowering FSL may reduce gravity command. Water-loving weeds are not a unique indicator of canal seepage; investigate moisture sources and water-level response rather than diagnosing from weeds alone.</p>",
                    sources: [
                        { id: "IRRI951-00082", set: 9, question: 71 },
                        { id: "IRRI951-00083", set: 9, question: 72 },
                        { id: "IRRI951-00135", set: 14, question: 69 },
                        { id: "IRRI951-00271", set: 26, question: 74 }
                    ]
                },
                {
                    html: "<p><strong>Frequency and area are not water depth:</strong> frequent small irrigations need not over-irrigate. Extensive irrigation does not inherently mean more application per hectare. The stored rejection of extensive irrigation is therefore not justified by its explanation. Avoiding excess concentrated recharge, spreading a limited supply and using suitable groundwater lift irrigation can all be useful conditionally; no uniquely incorrect practice follows from these labels alone.</p>",
                    sources: [
                        { id: "IRRI951-00085", set: 9, question: 74 },
                        { id: "IRRI951-00086", set: 9, question: 75 },
                        { id: "IRRI951-00272", set: 1, question: 76 },
                        { id: "IRRI951-00291", set: 28, question: 72 }
                    ]
                },
                {
                    html: "<p><strong>Multiple remedies can be valid:</strong> quick rainwater disposal is not the only answer that can alleviate waterlogging; seepage control, lower canal levels and hydraulically effective groundwater pumping may also help. Pumping that lowers heads does not justify excessive extraction. Contour bunding conserves runoff, but can worsen wetness without a suitable outlet. Select from the water budget, crop need and environmental constraints.</p>",
                    sources: [
                        { id: "IRRI951-00279", set: 27, question: 69 },
                        { id: "IRRI951-00280", set: 27, question: 70 },
                        { id: "IRRI951-00281", set: 27, question: 71 }
                    ]
                },
                {
                    html: "<p><strong>Usable soil volume, not physical soil creation:</strong> drainage can enlarge the aerated root-accessible zone; it does not add soil or automatically increase bulk volume. Chemical improvements depend on redox conditions, solute mobility and effective export. Tile drainage cannot be assumed to remove every toxic substance, supply nitrogen or instantly correct alkalinity.</p>",
                    sources: [
                        { id: "IRRI951-00282", set: 27, question: 72 },
                        { id: "IRRI951-00298", set: 28, question: 79 }
                    ]
                },
                {
                    html: "<p><strong>pH is not a universal infertility or amendment test:</strong> pH around 11 is severe alkalinity, but crop failure has no single pH threshold applicable to every soil. The bank's strongly alkaline class above pH 9 lacks a verified classification source here. Measure salinity, exchangeable sodium and other constraints; high pH alone does not establish sodicity or a gypsum requirement.</p>",
                    sources: [
                        { id: "IRRI951-00092", set: 10, question: 71 },
                        { id: "IRRI951-00277", set: 26, question: 79 },
                        { id: "IRRI951-00288", set: 27, question: 78 }
                    ]
                },
                {
                    html: "<p><strong>Leaching and exchange chemistry are different steps:</strong> leaching removes soluble salts with percolating water and drainage. Exchangeable sodium may first need replacement by calcium from an assessed amendment or existing supply. Alkaline is not automatically sodic, and salt-affected includes saline, sodic and saline-sodic soils. Gypsum plus leaching is not a universal treatment for every saline or high-pH field.</p>",
                    sources: [
                        { id: "IRRI951-00003", set: 2, question: 71 },
                        { id: "IRRI951-00216", set: 21, question: 72 },
                        { id: "IRRI951-00293", set: 28, question: 74 },
                        { id: "IRRI951-00294", set: 28, question: 75 }
                    ]
                },
                {
                    html: "<p><strong>Berseem needs reclamation context:</strong> FAO-56 lists berseem as moderately sensitive to salinity, with EC<sub>e</sub> threshold 1.5 dS/m, compared with ordinary wheat 6.0 and cotton 7.7 dS/m. These comparative guidelines do not support a most-salt-resistant description of berseem. They also do not establish the best crop for an unspecified reclaimed sodic soil; residual sodium, structure, season and establishment criteria are missing.</p>",
                    sources: [{ id: "IRRI951-00289", set: 28, question: 70 }]
                },
                {
                    html: "<p><strong>The salt–waterlogging loop is conditional:</strong> soluble-salt stress is not identical to sodium-driven dispersion at low EC. Waterlogging can occur without salinity and salinity without waterlogging. Removing excess water does not automatically leach away stored salts, contradicting the bank's salt-disappearance assertion. Osmotic stress reduces water availability; it does not inevitably reverse water flow from all roots. The stored single-incorrect-statement key cannot resolve these blanket claims.</p>",
                    sources: [
                        { id: "IRRI951-00290", set: 28, question: 71 },
                        { id: "IRRI951-00292", set: 28, question: 73 }
                    ]
                },
                {
                    html: "<p><strong>Regional names and an undated percentage are not global evidence:</strong> Thur/Kallar usage should not be promoted to a universal technical category. The worldwide 10% item supplies neither a survey year nor a defensible denominator, and switches from land in the stem to irrigated land in the explanation. It is retained only as an unverified bank claim, not a current extent statistic.</p>",
                    sources: [
                        { id: "IRRI951-00130", set: 13, question: 75 },
                        { id: "IRRI951-00295", set: 28, question: 76 }
                    ]
                },
                {
                    html: "<p><strong>Common section, not universal optimum:</strong> trapezoidal earth drains are practical in many soils, but hydraulic economy, stability and total construction/maintenance cost are different criteria. A depression alone does not demand a deep surface drain. Select shape and depth from discharge, grades, soil, access and the receiving outlet, rather than from the bank's unconditional wording.</p>",
                    sources: [
                        { id: "IRRI951-00090", set: 10, question: 69 },
                        { id: "IRRI951-00302", set: 29, question: 71 },
                        { id: "IRRI951-00303", set: 29, question: 72 }
                    ]
                },
                {
                    html: "<p><strong>Inlets require carriers and cleaning:</strong> a surface inlet connects surface water to a drainage pipe with a suitable outlet; it is not automatically an injection well. A beehive grate screens larger trash but does not remove all silt. A blind inlet needs permeable material and a connected collection pipe, and can clog. Small flow alone does not make it the uniquely appropriate solution or prove a soakaway will work.</p>",
                    sources: [
                        { id: "IRRI951-00308", set: 29, question: 76 },
                        { id: "IRRI951-00309", set: 29, question: 77 },
                        { id: "IRRI951-00310", set: 29, question: 78 }
                    ]
                },
                {
                    html: "<p><strong>Depth rate versus application fraction:</strong> DC in cm/day or mm/day is a removal rate per area. The bank's 10–50% of applied water is not a verified universal capacity rule and lacks a complete timing and recharge basis. Convert a justified fraction to volume per time and include rainfall, seepage, storage and outlet constraints; do not treat every irrigation loss as tile-drain inflow.</p>",
                    sources: [
                        { id: "IRRI951-00285", set: 27, question: 75 },
                        { id: "IRRI951-00286", set: 27, question: 76 }
                    ]
                },
                {
                    html: "<p><strong>Missing daily unit:</strong> over 20 ha, 1.5 cm is 3000 m<sup>3</sup>. The stored five-day answer of 15000 m<sup>3</sup> follows only if the depth means <strong>1.5 cm/day</strong>. If it is the total depth for the whole period, the answer remains 3000 m<sup>3</sup>. State the interpretation instead of silently supplying a time unit.</p>",
                    sources: [{ id: "IRRI951-00091", set: 10, question: 70 }]
                },
                {
                    html: "<p><strong>Missing drainage area:</strong> with 1.5 cm/day over five days, V = <strong>750 A<sub>ha</sub> m<sup>3</sup></strong>. The keyed 7500 m<sup>3</sup> would require 10 ha, but that area is absent from the question and appears only in its explanation. This is an underdetermined stem, not evidence that 10 ha was supplied.</p>",
                    sources: [{ id: "IRRI951-00301", set: 29, question: 70 }]
                },
                {
                    html: "<p><strong>Regional criteria remain unverified:</strong> 50 mm initial ponding, 300 mm for one day, three-day Terai rainfall and 48-hour hill rainfall are bank values without an established originating design document here. In particular, 300 mm for one day is not verified safe for most crops. Obtain a suitable design rainfall and crop-stage tolerance, route storage/outflow, and check peak depth and duration before applying regional numbers.</p>",
                    sources: [
                        { id: "IRRI951-00304", set: 29, question: 73 },
                        { id: "IRRI951-00305", set: 1, question: 77 },
                        { id: "IRRI951-00306", set: 29, question: 74 },
                        { id: "IRRI951-00307", set: 29, question: 75 }
                    ]
                },
                {
                    html: "<p><strong>Strata and envelopes require a hydraulic connection:</strong> low-conductivity soil is not an absolute prohibition on drainage, but can demand closer spacing or a different arrangement. A drain isolated from perched water can fail. An envelope controls entry and particle migration; it does not make the entire less-pervious layer permeable, nor guarantee freedom from clogging.</p>",
                    sources: [
                        { id: "IRRI951-00084", set: 9, question: 73 },
                        { id: "IRRI951-00283", set: 27, question: 73 }
                    ]
                },
                {
                    html: "<p><strong>Tile drainage is a subset:</strong> open-jointed traditional tiles and perforated modern pipes are collection arrangements, not interchangeable descriptions of every product. Subsurface drainage also includes appropriate wells, interceptors and mole systems. Wetness motivates investigation, but wet soil alone does not establish tile feasibility, depth, spacing or a usable outlet.</p>",
                    sources: [
                        { id: "IRRI951-00087", set: 9, question: 76 },
                        { id: "IRRI951-00287", set: 27, question: 77 },
                        { id: "IRRI951-00312", set: 30, question: 71 }
                    ]
                },
                {
                    html: "<p><strong>Spacing is not directly proportional to K:</strong> the displayed steady model gives L proportional to √K only when equivalent geometry, water-table criterion and recharge are held fixed. Equivalent depth itself depends on spacing, radius and the restrictive layer, so a real design may require iteration. The 22.3607 m and 31.6228 m examples deliberately fix equivalent depth and are not source-provided field spacings.</p>",
                    sources: [{ id: "IRRI951-00089", set: 9, question: 78 }]
                },
                {
                    html: "<p><strong>Two mains do not follow from field size alone:</strong> the double-main name identifies an arrangement with two collectors, but their position depends on topography, wet zones, hydraulic conductivity and outfall levels. They need not be obligatorily parallel. A large or irregular field may need another layout or different spacings in separate design units.</p>",
                    sources: [{ id: "IRRI951-00300", set: 29, question: 69 }]
                },
                {
                    html: "<p><strong>Working grade does not guarantee full flow or self-cleansing:</strong> 0.2% is a bank indicative grade, not a verified universal minimum. Open-jointed drains can run partly full. Friction slope equals bed slope only under appropriate uniform-flow conditions; high tailwater and pressure conditions need an HGL/head-loss check. Neither 0.2% nor 0.5% alone establishes a transient waterlogging-recovery time.</p>",
                    sources: [{ id: "IRRI951-00313", set: 30, question: 72 }]
                },
                {
                    html: "<p><strong>Stored pipe key is undersized under the stated model:</strong> with 12 ha, DC = 2 cm/day, n = 0.015 and S<sub>f</sub> = 0.005, Q = <strong>0.0277778 m<sup>3</sup>/s</strong> and full-flow D ≈ <strong>0.226 m</strong>. A 20 cm pipe carries only about 0.0201 m<sup>3</sup>/s. Select <strong>25 cm, option d</strong>, rather than the stored 20 cm, option a. Rounding down or calling the result 20–25 cm does not satisfy the calculated demand.</p>",
                    sources: [{ id: "IRRI951-00299", set: 29, question: 68 }]
                }
            ],
            references: [
                {
                    title: "FAO Irrigation and Drainage Paper 56 — Chapter 8: soil-water availability, FC/PWP, TAW/RAW and comparative crop salinity thresholds",
                    url: "https://www.fao.org/4/x0490e/x0490e0e.htm"
                },
                {
                    title: "FAO Irrigation and Drainage Paper 29 — Water quality for agriculture, section 2.4: drainage, leaching, crop tolerance and irrigation management",
                    url: "https://www.fao.org/4/t0234e/t0234e03.htm"
                },
                {
                    title: "FAO Irrigation and Drainage Paper 29 — Chapter 3: infiltration problems, combined EC/SAR effects and conditional gypsum use",
                    url: "https://www.fao.org/4/t0234e/t0234e04.htm"
                },
                {
                    title: "FAO Irrigation and Drainage Paper 62 (2007) — Guidelines and computer programs for the planning and design of land drainage systems; publication and contents verified, not full formula chapters",
                    url: "https://www.fao.org/4/a0975e/a0975e00.htm"
                }
            ]
        }
    });
})();