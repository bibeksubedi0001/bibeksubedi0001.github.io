(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0604: {
            code: "ACiE0604",
            questionCount: 57,
            blocks: [
                {
                    id: "sewer-network-purpose-and-responsibility",
                    title: "A sewerage system includes collection, conveyance and accountable operation",
                    html: "<p><strong>Sewage</strong> is the wastewater being conveyed; a <strong>sewer</strong> is a conduit; <strong>sewerage</strong> is the collection and conveyance system with its associated structures and management. Water-carriage sanitation transports wastes with water, but does not by itself specify whether stormwater shares the sanitary network.</p>" +
                        "<p>A sanitary system collects domestic and relevant commercial or industrial wastewater. A combined system additionally receives intended storm runoff. Calling a system water-carried therefore does not mean it carries only storm sewage, nor that every sanitary sewer should accept roof and road drainage.</p>" +
                        "<p>The responsible collection-system agency must have defined ownership, operating duties, access rights and interfaces with treatment and discharge arrangements. Sewer system agency is a descriptive term in the bank, not the unique statutory name of every responsible Nepal institution. Actual responsibilities depend on the applicable local arrangements and agreements.</p>" +
                        "<p>Engineering accountability includes maintaining asset records, managing connections, investigating leakage and overflows, providing maintenance resources and responding to failures. A pipe sized for a calculated discharge is only one part of that responsibility. Blockages, power loss at pumping facilities, damaged joints or a downstream bottleneck can defeat nominal capacity. Conveying sewage away from a house is not an acceptable completed solution if it merely transfers untreated pollution to another community or waterbody.</p>",
                    sources: [
                        { id: "WATE813-00052", set: 7, question: 92 },
                        { id: "WATE813-00087", set: 10, question: 96 },
                        { id: "WATE813-00180", set: 19, question: 92 }
                    ]
                },
                {
                    id: "sewer-quantity-population-and-return",
                    title: "Estimate domestic wastewater from population, supplied water and the return fraction",
                    html: "<p>For contributing population P, per-capita water use q<sub>w</sub> in L/(person·day), and dimensionless sewer return fraction r, average domestic wastewater is <strong>Q<sub>d</sub> = Pq<sub>w</sub>r</strong> in L/day. Divide by 1000 for m<sup>3</sup>/day or by 86,400 for L/s. Litres per capita per day describe a generation rate, not the total flow in a trunk sewer.</p>" +
                        "<p>The return fraction accounts for water not reaching the sewer, such as some outdoor consumption or evaporation. The bank's 80% is an assumption frequently used in elementary estimates, not a universal measured fraction. Water supplied from private wells may enter sewers without appearing in utility consumption records.</p>" +
                        "<p><strong>Hypothetical example:</strong> P = 10,000 people, q<sub>w</sub> = 120 L/(person·day) and r = 0.80 give <strong>960,000 L/day = 960 m<sup>3</sup>/day = 11.1111 L/s</strong> domestic wastewater. These inputs are not a prescribed Nepal design demand.</p>" +
                        "<p>Add institutional, commercial or industrial discharges only where they are not already included in the population-based estimate. Infiltration and direct inflow require separate assessment. Population served, connection uptake, daily use and industrial schedules can all change over time. An unauthorised connection is a potential flow source and a management issue, not a fixed percentage that can be inserted without investigation.</p>",
                    sources: [
                        { id: "WATE813-00182", set: 19, question: 94 },
                        { id: "WATE813-00183", set: 19, question: 95 },
                        { id: "WATE813-00201", set: 21, question: 91 }
                    ]
                },
                {
                    id: "sewer-horizon-peaking-and-minimum-flow",
                    title: "Check initial low flow and ultimate high flow rather than designing for one average",
                    html: "<p>A design horizon defines the future population, development and service conditions used for planning. It is not automatically the physical life of every pipe, pump or control. The bank's 25–50 years is a broad planning convention without a verified governing edition here; individual components and staged development may use different horizons.</p>" +
                        "<p>Peak sanitary flow is commonly estimated from an average domestic component and an appropriate peaking relationship, then combined with other contributions on a justified time basis. A generic expression is <strong>Q<sub>peak</sub> = FQ<sub>dom,avg</sub> + Q<sub>other,coincident</sub></strong>. F is dimensionless. An empirical F must retain its specified population units and applicability; no universal peaking factor is supplied by these records.</p>" +
                        "<p>Maximum flow tests capacity, surcharge and overflow risk. Minimum or low dry-weather flow tests deposition, residence time and maintenance demands. These checks often use different development stages: an ultimate pipe can convey very little sewage during its early years.</p>" +
                        "<p>Do not apply one domestic peak multiplier indiscriminately to steady groundwater infiltration or every industrial discharge. Likewise, the sum of independent upstream peaks need not occur simultaneously downstream. Use measured patterns or a justified routing model where timing matters. The bank correctly requires both high- and low-flow checks, but its wording does not establish a particular self-cleansing threshold for every hour and sewer.</p>",
                    sources: [
                        { id: "WATE813-00181", set: 19, question: 93 },
                        { id: "WATE813-00226", set: 23, question: 93 }
                    ]
                },
                {
                    id: "sewer-infiltration-inflow-and-exfiltration",
                    title: "Distinguish groundwater leakage from direct stormwater inflow",
                    html: "<p><strong>Infiltration</strong> is groundwater entering through defects such as cracked pipes, faulty joints or leaking structures. <strong>Inflow</strong> is more direct entry through connections or openings, including inappropriate roof drains, surface drains and flooded covers. Together they are often abbreviated I&amp;I, but their timing and remedies differ.</p>" +
                        "<p>Rain can cause rapid inflow and delayed infiltration as groundwater rises. A sanitary sewer can therefore have wet-weather excess flow without being an intentionally combined sewer. Groundwater infiltration may also persist in dry weather, so dry-weather flow is not necessarily pure domestic sewage.</p>" +
                        "<p><strong>Exfiltration</strong> is leakage out of the sewer when the hydraulic conditions drive wastewater towards the surrounding ground. Leakage direction can change with external groundwater and internal water levels. A joint that admits groundwater in one season may release sewage under a different pressure condition.</p>" +
                        "<p>Investigate flow records alongside rainfall, groundwater and connection surveys. Remote inspection and approved testing can help distinguish structural defects from inappropriate connections. Repairs should target the cause, while checking whether groundwater entry simply shifts to another defect. I&amp;I increases conveyance and treatment loads, but dilution does not remove the underlying pollutant mass or make an overflow acceptable. No universal infiltration allowance can be inferred from a definition question.</p>",
                    sources: [
                        { id: "WATE813-00202", set: 1, question: 95 },
                        { id: "WATE813-00203", set: 21, question: 92 },
                        { id: "WATE813-00182", set: 19, question: 94 }
                    ]
                },
                {
                    id: "sewer-flow-components-example",
                    title: "Dry- and wet-weather flow accounting — Syllabus extension",
                    html: "<p><strong>Syllabus extension; the entire dataset is hypothetical.</strong> The bank does not provide a complete measured domestic profile, industrial schedule or I&amp;I record. Assume domestic average flow 11.1111 L/s, corresponding to 10,000 people using 120 L/(person·day) with an 80% return. Add steady industrial flow of 3 L/s and groundwater infiltration of 2 L/s.</p>" +
                        "<p>For this illustration only, assume the domestic peak is 2.5 times its average and the domestic minimum is 0.25 times its average. Assume an additional 10 L/s wet-weather inflow coincides with the domestic peak. Keep unrounded domestic flow in the calculations.</p>" +
                        "<table><thead><tr><th scope='col'>Condition</th><th scope='col'>Flow, L/s</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Average dry weather</th><td>11.1111 + 3 + 2 = 16.1111</td></tr>" +
                        "<tr><th scope='row'>Peak dry weather</th><td>2.5 × 11.1111 + 3 + 2 = 32.7778</td></tr>" +
                        "<tr><th scope='row'>Minimum dry weather</th><td>0.25 × 11.1111 + 3 + 2 = 7.7778</td></tr>" +
                        "<tr><th scope='row'>Coincident wet-weather peak</th><td>32.7778 + 10 = 42.7778</td></tr></tbody></table>" +
                        "<p>The wet peak is 0.0427778 m<sup>3</sup>/s. Applying the 2.5 multiplier to every contribution would incorrectly peak the assumed steady flows. Adding wet-weather inflow to the minimum dry-weather case would describe a different condition.</p>" +
                        "<p>These values demonstrate component accounting, not a prescribed flow allowance. Actual minimum industrial flow, infiltration and peak coincidence may differ; measurements and development scenarios determine which combinations govern capacity and deposition checks.</p>",
                    sources: []
                },
                {
                    id: "sewer-separate-combined-and-partial-systems",
                    title: "Classify systems by the intended flow paths, not by population size",
                    html: "<p>A <strong>separate system</strong> provides distinct sanitary and stormwater conveyance paths. A <strong>combined system</strong> intentionally carries sanitary wastewater and storm runoff in one network. Sanitary wastewater can include domestic, commercial and industrial contributions; domestic and industrial sewage alone do not define a combined storm-sanitary system.</p>" +
                        "<p>Storm sewers collect runoff from roofs, streets, parking and other connected surfaces. Their outlets still need receiving-water and erosion assessment; stormwater is not automatically clean. Separate sanitary pipes should not intentionally accept unlimited runoff merely because an I&amp;I allowance is included.</p>" +
                        "<p>Partially separate or partially combined terminology describes arrangements in which selected runoff joins sanitary flow while other drainage remains separate. The actual connected catchments must be drawn and quantified: the label alone does not specify the volume or treatment route.</p>" +
                        "<p>Dry-weather flow generally includes sanitary contributions and any persistent extraneous flow. Consequently sewage plus rainwater and dry-weather flow plus rainwater can overlap in meaning under common elementary usage; they are not reliably exclusive answer choices.</p>" +
                        "<p>Trace each source through its lateral, main, interceptor and treatment or permitted discharge route. A wet-weather overflow from a sanitary system is a malfunction or exceedance to investigate, not proof that it was correctly designed as combined. Water-carriage sanitation can use different network types and does not mean stormwater alone.</p>",
                    sources: [
                        { id: "WATE813-00204", set: 21, question: 93 },
                        { id: "WATE813-00206", set: 21, question: 95 },
                        { id: "WATE813-00213", set: 22, question: 92 },
                        { id: "WATE813-00222", set: 1, question: 96 },
                        { id: "WATE813-00227", set: 23, question: 94 },
                        { id: "WATE813-00180", set: 19, question: 92 }
                    ]
                },
                {
                    id: "sewer-system-selection-and-lifecycle",
                    title: "Compare total system performance rather than one construction-cost claim",
                    html: "<p>Separate sanitary sewers can be smaller than conduits designed to carry a large storm peak, because intended runoff is excluded. That does not prove that two networks always cost less overall: storm drainage, excavation, existing infrastructure, pumping, treatment and maintenance must all be included.</p>" +
                        "<p>Combined systems can impose much greater wet-weather hydraulic loads on conveyance and treatment. Storage and flow management may be required to limit overflows and process disruption. Smaller pollutant concentration during rainfall is not necessarily a smaller pollutant load; mass rate depends on both concentration and discharge.</p>" +
                        "<p>The bank's proposition that low-population cities universally prefer combined systems is not a design rule. Climate, connected impervious area, treatment capacity, topography, existing sewers, environmental objectives and operator resources can outweigh population alone. Decentralised or staged options may also deserve comparison where appropriate.</p>" +
                        "<p>Similarly, a larger pipe offers more space for some obstructions but can convey a fixed low flow at smaller relative depth and weaker cleansing conditions. More capacity does not invariably mean fewer sediment blockages. Compare initial and ultimate flows, maintenance access and whole-life costs rather than selecting the largest pipe or accepting the malformed source question as evidence of universal economy. A transparent alternatives appraisal states the assumed flows, risks and service standards for each option.</p>",
                    sources: [
                        { id: "WATE813-00205", set: 21, question: 94 },
                        { id: "WATE813-00207", set: 21, question: 96 },
                        { id: "WATE813-00208", set: 21, question: 97 },
                        { id: "WATE813-00209", set: 21, question: 98 }
                    ]
                },
                {
                    id: "sewer-rational-runoff-and-units",
                    title: "The rational runoff formula needs coefficient, intensity and contributing area",
                    html: "<p>For an appropriate small catchment, the rational method estimates peak runoff as <strong>Q = CiA/360</strong>, with Q in m<sup>3</sup>/s, rainfall intensity i in mm/h, area A in hectares and dimensionless runoff coefficient C. The conversion is 10<sup>−3</sup> m/mm × 10<sup>4</sup> m<sup>2</sup>/ha divided by 3600 s/h. With A in km<sup>2</sup>, the denominator becomes 3.6.</p>" +
                        "<p>Select intensity for the adopted event frequency and a duration consistent with concentration time. That time includes travel to and through the drainage network. A daily rainfall depth divided by 24 is not a substitute for short-duration design intensity. Mixed land cover can use <strong>C = ΣC<sub>j</sub>A<sub>j</sub>/ΣA<sub>j</sub></strong> when the method's assumptions are appropriate.</p>" +
                        "<p><strong>Hypothetical example:</strong> C = 0.65, i = 75 mm/h and A = 12 ha give Q = 0.65 × 75 × 12/360 = <strong>1.625 m<sup>3</sup>/s</strong>. These are invented teaching inputs, not a Nepal rainfall estimate or selected design event.</p>" +
                        "<p>The bank's CL/360 lacks defined rainfall intensity and contributing area; an unexplained L cannot silently replace iA. Storage, spatial rainfall variation and large catchments may require hydrographs and routing instead. For a combined system, add sanitary contributions on a justified coincident time basis without double-counting runoff already represented as inflow.</p>",
                    sources: [
                        { id: "WATE813-00202", set: 1, question: 95 },
                        { id: "WATE813-00213", set: 22, question: 92 },
                        { id: "WATE813-00214", set: 22, question: 93 }
                    ]
                },
                {
                    id: "sewer-hydrographs-storage-and-surcharge",
                    title: "Hydrographs and storage — Syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> the bank lacks rainfall time series, storage geometry, downstream levels and complete combined-system hydrographs. A peak estimate alone cannot determine storage volume or overflow duration. Continuity gives <strong>dS/dt = Q<sub>in</sub> − Q<sub>out</sub></strong>, with storage S in m<sup>3</sup>, flow in m<sup>3</sup>/s and time in seconds.</p>" +
                        "<p>Integrate the flow difference over the event, respecting the starting storage, outlet relation and physical storage bounds. The maximum accumulated excess determines the required active storage for the assumed operation, not peak discharge multiplied by an arbitrary duration.</p>" +
                        "<p><strong>Hypothetical simplified pulse:</strong> initially empty storage receives 0.40 m<sup>3</sup>/s for 20 minutes while a controlled outlet passes 0.25 m<sup>3</sup>/s. Accumulation is (0.40 − 0.25) × 1200 = <strong>180 m<sup>3</sup></strong>. This excludes freeboard, sediment space and other allowances and assumes that the stated outlet can actually discharge throughout the pulse.</p>" +
                        "<p>Downstream backwater can reduce outlet capacity and cause surcharge or reverse flow. EPA's SWMM capability description supports routing runoff, dry-weather flow and I&amp;I with appropriate hydraulic models, including dynamic-wave representation of such effects. Software still requires verified levels, connections and calibration; a uniform-flow calculation is not a surcharge model. Storage and overflow controls need receiving-water protection and operating plans, not permission for untreated disposal.</p>",
                    sources: []
                },
                {
                    id: "sewer-functional-hierarchy-and-pressure",
                    title: "Laterals, trunks, interceptors and force mains have different functions",
                    html: "<p>House connections discharge into local collecting sewers; branches combine local flows and larger mains or trunks convey accumulated flow onward. Naming conventions vary, so a plan should identify actual connections and contributing areas rather than infer capacity from a name alone.</p>" +
                        "<p>An <strong>intercepting sewer</strong> receives flow from existing sewers or outfalls and redirects it towards treatment or another controlled destination. It may be used to intercept former direct discharges along a river. This is a large-scale collection function, not an intercepting trap's gas-seal function at a house drain.</p>" +
                        "<p>A <strong>force main</strong> normally carries pumped wastewater under pressure. A gravity sewer ordinarily has a free water surface, although it can surcharge under adverse conditions. A depressed crossing, conventionally called an inverted siphon, also operates full under pressure but is driven by the available upstream-to-downstream head rather than necessarily by a pump.</p>" +
                        "<p>At each junction, continuity requires downstream flow to equal the concurrent incoming flows plus local contribution, allowing for any defined storage or diversion. Do not add every tributary's independent peak without checking timing. Profile, energy losses and downstream level determine whether gravity is feasible. Selecting an interceptor or pressure crossing must also address low-flow sediment, maintenance, failure consequences and treatment capacity, not just whether the alignment reaches the receiving point.</p>",
                    sources: [
                        { id: "WATE813-00051", set: 7, question: 91 },
                        { id: "WATE813-00048", set: 6, question: 98 }
                    ]
                },
                {
                    id: "sewer-shapes-and-hydraulic-objectives",
                    title: "Circular efficiency does not make one cross-section universally best",
                    html: "<p>For a given enclosed area, a circle has the smallest enclosing perimeter, giving a favourable full-flow hydraulic radius. Circular pipes are also convenient to manufacture and join and can develop effective ring action under external load. These advantages explain their widespread use in both separate and combined sewerage.</p>" +
                        "<p>Combined flow can vary greatly between dry weather and storms. An egg-shaped section with a narrow invert can concentrate low flow while providing a larger upper area for storms. Rectangular or other noncircular conduits can suit particular drainage, structural or space constraints. Their hydraulic elements must be calculated from their actual shape, not circular-pipe ratios.</p>" +
                        "<p>Compare area A, wetted perimeter P<sub>w</sub> and hydraulic radius R = A/P<sub>w</sub> at the <strong>operating depth</strong>. Full-section efficiency alone does not establish low-flow sediment transport. A narrow invert can improve one condition while complicating construction, inspection or sediment removal elsewhere.</p>" +
                        "<p>The bank offers circular as the most suitable combined-system shape without defining the flow range or alternatives completely. It is a common practical choice, not a universal optimum. Check manufacturability, structural strength, corrosion resistance, flow variability, maintenance and cost. Even within one circular section, velocity and discharge do not increase monotonically all the way to full depth.</p>",
                    sources: [
                        { id: "WATE813-00225", set: 23, question: 92 },
                        { id: "WATE813-00047", set: 6, question: 97 }
                    ]
                },
                {
                    id: "sewer-material-selection",
                    title: "Sewer materials and exposure — Syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> sewer materials are explicit official scope, but the assigned bank provides no complete material-selection or structural-class dataset. Selection combines hydraulic, chemical, structural, construction and maintenance requirements. A smooth new pipe is not automatically the best pipe for every buried environment.</p>" +
                        "<table><thead><tr><th scope='col'>Material family</th><th scope='col'>Issues to assess</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Concrete or reinforced concrete</th><td>Load capacity, joints and protection where sulfide-related acid corrosion or aggressive ground is relevant.</td></tr>" +
                        "<tr><th scope='row'>Vitrified clay</th><td>Chemical resistance alongside brittle handling behaviour, bedding and joint integrity.</td></tr>" +
                        "<tr><th scope='row'>PVC or polyethylene</th><td>Pipe-soil interaction, deformation, stiffness, temperature and appropriate jointing; pressure duty needs a suitable product.</td></tr>" +
                        "<tr><th scope='row'>Ductile iron, steel or composites</th><td>Pressure or special-crossing needs, corrosion protection, joints and product-specific structural behaviour.</td></tr></tbody></table>" +
                        "<p>Assess wastewater composition, groundwater, traffic loads, burial, construction access, abrasion and expected service conditions. Distinguish nominal diameter from the actual internal diameter used in hydraulic calculations, and distinguish pressure rating from buried external-load performance.</p>" +
                        "<p>Material standards must be matched to the product and application. No claim that ISO 4437 specifies sewer-water velocity or that IS 2430 is a sewer-design standard is used here. Product certification, local requirements and project-specific acceptance criteria remain necessary rather than invented from an unrelated standard number.</p>",
                    sources: []
                },
                {
                    id: "sewer-buried-pipe-and-joints",
                    title: "Buried pipe-soil behaviour and watertight joints — Syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> the bank lacks cover, soil stiffness, trench geometry, external loads and structural pipe properties for a buried-pipe design. Rigid and flexible pipes interact differently with their surroundings. Flexible pipes mobilise side support as they deform; rigid pipes depend strongly on bedding support and their structural resistance.</p>" +
                        "<p>Check earth and traffic loads, bedding and haunch support, joint movement, allowable deformation and local ground settlement. Groundwater can add external pressure or buoyancy, especially when a pipe is empty. Adequate hydraulic capacity does not prove resistance to crushing, buckling, flotation or excessive deformation.</p>" +
                        "<p>Joints must maintain alignment and watertightness while accommodating the movements for which they were designed. Poor joints allow groundwater infiltration, sewage exfiltration, soil migration or root entry. A connection to a rigid manhole may need different movement accommodation from a straight pipe-to-pipe joint.</p>" +
                        "<p>Specify compatible pipes, seals, fittings and installation tolerances, then verify their condition during construction and acceptance. Roughness n in a hydraulic formula is not structural stiffness, and a pressure class is not a substitute for a buried-load calculation. Seismic movement, differential settlement and aggressive ground can govern even where the nominal pipe size and slope appear adequate. The missing data prevent a defensible numerical cover or pipe-class prescription.</p>",
                    sources: []
                },
                {
                    id: "sewer-diameter-minima-and-gradient",
                    title: "A minimum diameter is an application-specific rule, not a substitute for flow design",
                    html: "<p>Diameter selection balances peak capacity, low-flow solids transport, blockage risk, structural needs and access for maintenance. A minimum adopted by a particular authority is a constraint to check after identifying the service: a public sewer, house drain and special pressure system are not interchangeable categories.</p>" +
                        "<p>The bank repeatedly gives <strong>150 mm</strong> as a minimum public-sewer diameter, sometimes extending it to every sewer. No applicable universal Nepal clause has been verified for that generalisation. <strong>100 mm house drains can be used in appropriate applications</strong> where the governing plumbing requirements, fixture loading and layout allow them. That does not automatically make 100 mm acceptable for a public collector.</p>" +
                        "<p>A gradient of <strong>1 in 100</strong> supplies only S = 0.01. It does not establish discharge, roughness, allowable depth, solids loading or the relevant minimum-diameter rule. Consequently the domestic-sewer question cannot uniquely prove 150 mm from slope alone; its small diameter-gradient table is a teaching convention, not a completed hydraulic design.</p>" +
                        "<p>Increasing diameter raises potential capacity but can worsen cleansing at a fixed low flow. Use the actual internal diameter, compute operating depth and velocity, and check both initial and ultimate conditions. A prescribed minimum, where applicable, does not remove the need for these calculations or a feasible maintenance plan.</p>",
                    sources: [
                        { id: "BASI674-00403", set: 31, question: 11 },
                        { id: "WATE813-00053", set: 7, question: 93 },
                        { id: "WATE813-00186", set: 1, question: 94 },
                        { id: "WATE813-00199", set: 20, question: 100 }
                    ]
                },
                {
                    id: "sewer-manning-model-and-units",
                    title: "Manning's uniform-flow model — Syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> the assigned questions do not provide a complete Manning design dataset. For the conventional SI relation, <strong>v = (1/n)R<sup>2/3</sup>S<sub>f</sub><sup>1/2</sup></strong> and <strong>Q = Av</strong>. A is flowing area in m<sup>2</sup>, R = A/P<sub>w</sub> is hydraulic radius in metres, P<sub>w</sub> is wetted perimeter in metres, and S<sub>f</sub> is friction slope in m/m.</p>" +
                        "<p>Velocity is m/s and discharge m<sup>3</sup>/s. In dimensional SI form, n has units s/m<sup>1/3</sup>; its numerical value depends on the unit convention. Do not insert the US-customary coefficient into the SI formula or use diameter in millimetres while retaining metre-based parameters.</p>" +
                        "<p>Equating friction slope to the bed slope assumes steady uniform flow in the reach. Backwater, junction losses, rapidly changing discharge and pressurisation require additional hydraulic analysis. A pipe's geometric fall alone does not determine its actual energy gradient under surcharge.</p>" +
                        "<p>Roughness reflects the relevant surface and operating condition, including joints, ageing, deposits and biofilm. Use a justified value or sensitivity range, not an unexplained constant copied from a material name. The formula is empirical; it is not derived solely from dimensional analysis. Continuity and correct section geometry allow its consistent application, but neither equation proves self-cleansing, structural adequacy or acceptable overflow risk.</p>",
                    sources: []
                },
                {
                    id: "sewer-full-flow-trial-sizing",
                    title: "Full circular reference capacity — Syllabus extension",
                    html: "<p><strong>Syllabus extension; all numerical inputs are hypothetical.</strong> The bank provides no complete flow, roughness and slope dataset for this calculation. For a full circular reference section, A<sub>f</sub> = πD<sup>2</sup>/4, P<sub>f</sub> = πD and R<sub>f</sub> = D/4. Substituting into SI Manning gives <strong>Q<sub>f</sub> = [π/(4<sup>5/3</sup>n)]D<sup>8/3</sup>√S<sub>f</sub></strong>. This is a convenient reference for partial-flow ratios, not proof that a gravity sewer should operate full.</p>" +
                        "<p>Solving the expression for diameter gives <strong>D = [Q<sub>f</sub>n4<sup>5/3</sup>/(π√S<sub>f</sub>)]<sup>3/8</sup></strong>. Required flow, roughness and slope must all be defined before selecting D. A commercial size and its actual bore are then checked, including the intended free-surface operating depth.</p>" +
                        "<p>Assume D = 0.300 m, n = 0.013 and S<sub>f</sub> = 0.004. Then A<sub>f</sub> = <strong>0.0706858 m<sup>2</sup></strong>, R<sub>f</sub> = 0.075 m, v<sub>f</sub> ≈ <strong>0.86522 m/s</strong> and Q<sub>f</sub> ≈ <strong>0.0611589 m<sup>3</sup>/s</strong>. A full-reference target of 0.040 m<sup>3</sup>/s would give a theoretical diameter of about <strong>0.256 m</strong>.</p>" +
                        "<p>Selecting a nominal 300 mm pipe from this comparison is only a trial. Low-flow velocity, allowable depth, downstream levels, local losses, minimum-size rules and structural conditions remain unresolved. A larger full-flow capacity cannot be used as evidence that a small initial flow will transport solids adequately.</p>",
                    sources: []
                },
                {
                    id: "sewer-partial-depth-angle-and-area",
                    title: "Derive partial depth, area and wetted perimeter from a radian angle",
                    html: "<p>For a circular sewer of internal diameter D and water depth y, let <strong>θ be the central angle subtended by the wetted arc, in radians</strong>. In free-surface partial flow, 0 &lt; θ &lt; 2π. The radius is D/2, so vertical geometry gives <strong>y/D = [1 − cos(θ/2)]/2</strong>, or <strong>θ = 2 arccos(1 − 2y/D)</strong>.</p>" +
                        "<p>The factor 1/2 is essential. At θ = π the depth is D/2, not D. The sector area minus its triangular part gives <strong>a = D<sup>2</sup>(θ − sin θ)/8</strong>. Wetted perimeter is <strong>p = Dθ/2</strong>; the water surface is not included in p.</p>" +
                        "<p>Relative to the full circular reference, <strong>a/A<sub>f</sub> = (θ − sin θ)/(2π)</strong> and <strong>p/P<sub>f</sub> = θ/(2π)</strong>. Dividing gives <strong>r/R<sub>f</sub> = (θ − sin θ)/θ</strong>, where r = a/p and R<sub>f</sub> = D/4. Area ratio alone is not discharge ratio.</p>" +
                        "<p>At half depth, area and wetted perimeter are both half their full values, so hydraulic radius equals the full value. At vanishing depth, hydraulic radius tends to zero; the raw formula at θ = 0 needs a limit rather than division by zero. Degree values cannot be inserted directly into θ − sin θ. These geometric identities do not depend on a chosen roughness model.</p>",
                    sources: [
                        { id: "WATE813-00216", set: 22, question: 95 },
                        { id: "WATE813-00047", set: 6, question: 97 }
                    ]
                },
                {
                    id: "sewer-partial-discharge-and-roughness",
                    title: "Partial discharge needs both area and hydraulic-radius terms",
                    html: "<p>Let n<sub>p</sub> and n<sub>f</sub> be Manning roughness for partial flow and the full reference. For the same friction slope, <strong>v/v<sub>f</sub> = (n<sub>f</sub>/n<sub>p</sub>)[(θ − sin θ)/θ]<sup>2/3</sup></strong>. Multiplying by area ratio gives the complete expression:</p>" +
                        "<p><strong>q/Q<sub>f</sub> = (n<sub>f</sub>/n<sub>p</sub>) [(θ − sin θ)/(2π)] [(θ − sin θ)/θ]<sup>2/3</sup></strong>. If friction slopes differ, also multiply by √(S<sub>p</sub>/S<sub>f</sub>). A bare θ − sin θ omits normalisation and the hydraulic-radius contribution and is not a discharge ratio.</p>" +
                        "<table><thead><tr><th scope='col'>y/D</th><th scope='col'>a/A<sub>f</sub></th><th scope='col'>v/v<sub>f</sub></th><th scope='col'>q/Q<sub>f</sub></th></tr></thead><tbody>" +
                        "<tr><th scope='row'>0.25</th><td>0.195501</td><td>0.700670</td><td>0.136982</td></tr>" +
                        "<tr><th scope='row'>0.50</th><td>0.500000</td><td>1.000000</td><td>0.500000</td></tr>" +
                        "<tr><th scope='row'>0.75</th><td>0.804499</td><td>1.133473</td><td>0.911878</td></tr></tbody></table>" +
                        "<p>The table is a mathematical comparison assuming <strong>constant equal n and equal slope</strong>, not measured sewer performance. At half depth, velocity equals the full-reference velocity only with those assumptions. A variable-roughness chart incorporates an additional empirical assumption and must not be mixed silently with this constant-n table. Calculate θ in radians and retain precision until the final result; a plausible-looking area fraction cannot repair the bank's incomplete formula.</p>",
                    sources: [
                        { id: "WATE813-00217", set: 22, question: 96 },
                        { id: "WATE813-00047", set: 6, question: 97 }
                    ]
                },
                {
                    id: "sewer-partial-flow-maxima",
                    title: "Maximum velocity occurs near 0.81D; maximum discharge near 0.94D",
                    html: "<p>With constant n and friction slope, velocity increases with hydraulic radius, not with area alone. Differentiating <strong>r/R<sub>f</sub> = 1 − sin θ/θ</strong> gives a stationary point where <strong>sin θ − θ cos θ = 0</strong>. The relevant interior root is θ ≈ 4.49341 rad, giving <strong>y/D ≈ 0.81280</strong> and <strong>v/v<sub>f</sub> ≈ 1.14003</strong>.</p>" +
                        "<p>Discharge additionally includes increasing area. Differentiating the complete constant-n discharge expression gives <strong>5θ(1 − cos θ) = 2(θ − sin θ)</strong>. Its relevant root gives <strong>y/D ≈ 0.93818</strong> and <strong>q/Q<sub>f</sub> ≈ 1.07571</strong>. Thus maximum velocity and maximum discharge occur at different depths.</p>" +
                        "<p>At 0.90D, the discharge ratio is about 1.0658; at full depth its reference value is 1.0. Increasing depth therefore does not increase discharge throughout every partially full condition. Wetted perimeter, however, increases with depth over the circular free-surface range. The bank's unrestricted single-choice statement misses this distinction.</p>" +
                        "<p>These maxima belong to the stated idealised Manning model. Variable roughness shifts them, and a pressurised sewer is governed by available head rather than this free-surface depth curve. Values between full-reference capacity and the partial-flow maximum can correspond to two normal-depth branches; solving an equation requires identifying the physical regime and boundary conditions, not selecting an arbitrary root.</p>",
                    sources: [{ id: "WATE813-00047", set: 6, question: 97 }]
                },
                {
                    id: "sewer-self-cleansing-and-shields",
                    title: "Relate solids transport to shear without accepting a malformed Camp–Shields equation",
                    html: "<p>Self-cleansing concerns transport or removal of deposits over the relevant operating cycle. Grain size and density, organic content, cohesion, flow depth and hydraulic conditions matter. A single minimum velocity cannot guarantee transport of every sewer solid.</p>" +
                        "<p>For steady uniform flow, mean boundary shear is approximately <strong>τ<sub>0</sub> = ρgrS<sub>f</sub></strong> in Pa. A Shields-type threshold for idealised noncohesive grains uses <strong>Θ<sub>c</sub> = τ<sub>c</sub>/[(ρ<sub>s</sub> − ρ)gd<sub>s</sub>]</strong>. Θ<sub>c</sub> is dimensionless; d<sub>s</sub> is grain diameter in metres. Threshold selection depends on sediment and flow regime, not a universally fixed coefficient.</p>" +
                        "<p>If a compatible Darcy friction-factor model gives τ = f<sub>D</sub>ρv<sup>2</sup>/8, combination yields <strong>v<sub>c</sub> = √[8Θ<sub>c</sub>(s − 1)gd<sub>s</sub>/f<sub>D</sub>]</strong>, with s = ρ<sub>s</sub>/ρ. This is an explicitly defined model, not a reconstruction of the bank's undefined symbols.</p>" +
                        "<p><strong>Hypothetical illustration:</strong> Θ<sub>c</sub> = 0.047, s = 2.65, d<sub>s</sub> = 0.0005 m, f<sub>D</sub> = 0.03, ρ = 1000 kg/m<sup>3</sup> and g = 9.81 m/s<sup>2</sup> give τ<sub>c</sub> ≈ <strong>0.38038 Pa</strong> and v<sub>c</sub> ≈ <strong>0.31849 m/s</strong>. These hypothetical isolated-grain results are not sewer minimum criteria; cohesive sewage deposits can behave very differently. The printed Camp–Shields alternatives lack sufficient definitions and dimensional consistency to justify a closest-option answer.</p>",
                    sources: [
                        { id: "WATE813-00185", set: 19, question: 97 },
                        { id: "WATE813-00215", set: 22, question: 94 },
                        { id: "WATE813-00341", set: 33, question: 99 }
                    ]
                },
                {
                    id: "sewer-velocity-limits-and-airspace",
                    title: "Low-flow deposition and high-flow abrasion impose different checks",
                    html: "<p>Low flow can encourage deposition, long residence and septic conditions. High flow can increase abrasion, turbulence, local scour and energy losses. These competing concerns explain why sewers are checked at more than one discharge and why steepening a pipe is not an unlimited cure for deposition.</p>" +
                        "<p>The bank cites approximately <strong>0.6–0.9 m/s</strong> for self-cleansing and <strong>2.5–3.0 m/s</strong> as a maximum raw-sewer velocity. Treat these as legacy teaching ranges unless an applicable material-, flow- and edition-specific requirement is identified. They do not establish universal present-versus-ultimate values or a physical erosion boundary for every pipe.</p>" +
                        "<p>Evaluate actual operating depth and mean velocity, sediment characteristics, lining or pipe resistance and the frequency of cleansing conditions. Local velocities at bends, drops and junctions can exceed a reach-average value. Hydraulic radius and boundary shear also change with depth; a full-pipe velocity is not a low-flow calculation.</p>" +
                        "<p>Airspace above the design water surface helps retain free-surface flow and accommodate variation. It does not guarantee that the network will never surcharge, and it is not proof of safe ventilation or safe entry. Downstream water levels, storm events, obstructions and gas-management design remain relevant. Where steep terrain requires drops or pressure sections, energy control and maintenance must be designed explicitly.</p>",
                    sources: [
                        { id: "WATE813-00049", set: 6, question: 99 },
                        { id: "WATE813-00331", set: 32, question: 100 },
                        { id: "WATE813-00336", set: 33, question: 94 },
                        { id: "WATE813-00341", set: 33, question: 99 }
                    ]
                },
                {
                    id: "sewer-two-flow-design-example",
                    title: "A pipe that passes peak flow can still fail the low-flow check",
                    html: "<p><strong>Hypothetical design exercise; none of these design inputs is a bank dataset.</strong> Assume a circular bore D = 0.300 m, constant n = 0.013, low flow 0.003 m<sup>3</sup>/s and peak flow 0.040 m<sup>3</sup>/s. For illustration only, choose checks of at least 0.60 m/s at low flow, at most 2.50 m/s at peak, and peak depth no greater than 0.80D. These are not asserted Nepal requirements.</p>" +
                        "<p>For each trial slope, solve the complete circular Manning equation on the rising discharge branch, then calculate v = Q/a. Do not substitute full-section area at the small flow.</p>" +
                        "<table><thead><tr><th scope='col'>Slope</th><th scope='col'>Low-flow y / v</th><th scope='col'>Peak y / v</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>0.004</th><td>0.045198 m / 0.44835 m/s</td><td>0.176888 m / 0.92238 m/s</td></tr>" +
                        "<tr><th scope='row'>0.012</th><td>0.034698 m / 0.65893 m/s</td><td>0.127771 m / 1.39379 m/s</td></tr></tbody></table>" +
                        "<p>The first trial passes the chosen peak checks but fails low-flow velocity. The steeper trial passes all three illustrative checks; its peak depth is about 0.426D. It is not automatically constructible or approved.</p>" +
                        "<p>For comparison, hypothetically enlarging the first trial to D = 0.450 m at the same 0.004 slope and 0.003 m<sup>3</sup>/s gives depth about 0.040399 m and velocity <strong>0.42470 m/s</strong>: greater size weakens low-flow cleansing here. Survey levels, roughness uncertainty, sediment criteria, junctions, structural checks and downstream conditions still govern final selection.</p>",
                    sources: [
                        { id: "WATE813-00181", set: 19, question: 93 },
                        { id: "WATE813-00207", set: 21, question: 96 }
                    ]
                },
                {
                    id: "sewer-surveying-inverts-and-profile",
                    title: "Set inverts from a checked datum and distinguish internal levels from cover",
                    html: "<p>The <strong>invert</strong> is the lowest internal level of a sewer. A gravity profile must connect the required upstream and downstream inverts while providing the selected fall and accommodating junctions, crossings and structures. Surface slope and pipe slope are not necessarily equal.</p>" +
                        "<p>A dumpy or automatic level can transfer elevations from a reliable benchmark; modern survey instruments may also be used with appropriate control. Independent checks of benchmarks, instrument setup, chainage and closing error matter more than the instrument name alone. Construction lasers or sighting devices do not replace the underlying level survey.</p>" +
                        "<p><strong>Hypothetical profile:</strong> upstream invert RL 100.500 m, horizontal reach length 80 m and downward gradient 1 in 250 give a fall of 80/250 = <strong>0.320 m</strong> and downstream invert RL <strong>100.180 m</strong>. An accidental sign reversal would create a rise instead of the intended fall.</p>" +
                        "<p>Ground cover is measured to the relevant <strong>outside crown</strong>, not automatically to invert plus nominal diameter; wall thickness and actual bore must be considered. Check cover, utility separation and ground support along the whole reach, not just at its ends. Changes in direction or gradient normally require a defined inspection and maintenance arrangement. Record actual installed levels and deviations because an unrecorded sag can retain solids despite the correct average end-to-end gradient.</p>",
                    sources: [
                        { id: "WATE813-00195", set: 20, question: 96 },
                        { id: "BASI674-00401", set: 31, question: 9 }
                    ]
                },
                {
                    id: "sewer-excavation-bedding-and-installation",
                    title: "Construction quality and temporary works — Syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> the bank does not supply ground conditions, trench dimensions, temporary-works design or a pipe manufacturer's installation requirements. Sewer construction starts with verified utilities, survey control, access arrangements and a competent construction plan. Excavation stability, groundwater, nearby foundations and public traffic require engineered protection rather than assumptions based on shallow appearance.</p>" +
                        "<p>Bedding provides continuous support compatible with the selected pipe; haunch support is especially important to the behaviour of flexible systems. Unsupported sockets, hard points or poorly compacted side support can cause distortion, settlement and joint leakage. Backfill and compaction must suit the pipe-soil design and the surface use above it.</p>" +
                        "<p>Inspect delivered pipes and joints for damage and compatibility. During installation, maintain specified line and level, joint integrity and cleanliness, with temporary protection against unwanted water or debris entering the works. The required connection orientation and jointing procedure come from the product and project documents, not an unqualified mnemonic.</p>" +
                        "<p>Protect drinking-water infrastructure and other services using the governing separation and crossing details; no unverified universal spacing is supplied here. Dewatering and spoil handling must avoid destabilising ground or creating uncontrolled polluted discharge. Acceptance checks and as-built records should be planned before covering critical work. These are design and quality responsibilities, not instructions for entering an unsupported trench or hazardous sewer.</p>",
                    sources: []
                },
                {
                    id: "sewer-acceptance-tests-and-records",
                    title: "Leakage, alignment and obstruction tests answer different questions",
                    html: "<p>Sewer acceptance examines several independent properties. Watertightness testing assesses leakage; alignment and level checks assess the installed profile; obstruction or dimensional checks assess usable bore; visual or CCTV inspection can identify defects, joints, debris and inappropriate connections. No single test establishes all of them.</p>" +
                        "<p>An air test can assess leakage under a specified protocol, but water-based infiltration or exfiltration tests may also be applicable. Test pressure, duration, allowable loss and safe isolation depend on the relevant procedure and system. The bank's generic testing question does not justify air test as the only possible answer.</p>" +
                        "<p>A historical mirror-and-light straightness check examines the line of sight through a suitable straight reach. <strong>Mirror test and straightness test are names for the same basic check</strong> in the cited two-option question. They cannot form a sound pair of mutually exclusive alternatives. Such a check also does not reveal every sag, leak or structural defect.</p>" +
                        "<p>Modern acceptance can combine surveyed levels, remote inspection, joint and leakage assessment, and product-specific deformation checks. Qualified personnel must use approved test methods; these notes intentionally supply no pressurised-test operating instructions. Document results, repairs, retesting and as-built pipe/structure locations. A pass against one criterion does not excuse a failure against another or establish safe confined-space access.</p>",
                    sources: [
                        { id: "WATE813-00187", set: 19, question: 98 },
                        { id: "WATE813-00188", set: 19, question: 99 }
                    ]
                },
                {
                    id: "sewer-manhole-layout-and-access",
                    title: "Locate appurtenances for hydraulic function and maintainability",
                    html: "<p><strong>Sewer appurtenances</strong> are auxiliary structures that allow the system to collect, convey, inspect, control and maintain flow. They include manholes, inspection chambers, clean-outs, inlets, catch basins and specialised crossings or control structures. A catch basin admits runoff and may retain debris; a manhole provides access to the sewer reach and its junctions.</p>" +
                        "<p>Inspection access is commonly needed at junctions and significant changes of alignment, gradient or size, as well as along long reaches. Layout must accommodate the available remote inspection and cleaning equipment, surface access, traffic protection and safe maintenance. Access does not imply that a person should routinely enter the sewer.</p>" +
                        "<p>The bank's 30 m interval for building drainage and 300 m spacing for large sewers are not established here as universal standards. Diameter alone does not determine permissible spacing. Different authority documents, pipe sizes, equipment reach and site constraints can lead to different requirements.</p>" +
                        "<p>Plan access before finalising the alignment: a nominal manhole in an inaccessible location may be of little practical use. Confirm ownership and maintenance access, avoid avoidable surface-water entry, and coordinate channel levels so the structure does not become a sediment trap. Exact dimensions and spacing remain an edition-specific design hold rather than a reason to reproduce the bank's unverified numbers as law.</p>",
                    sources: [
                        { id: "BASI674-00401", set: 31, question: 9 },
                        { id: "WATE813-00190", set: 20, question: 91 },
                        { id: "WATE813-00210", set: 21, question: 99 },
                        { id: "WATE813-00211", set: 21, question: 100 },
                        { id: "WATE813-00212", set: 22, question: 91 },
                        { id: "WATE813-00219", set: 22, question: 98 }
                    ]
                },
                {
                    id: "sewer-manhole-components-and-covers",
                    title: "Manhole geometry and cover loading do not establish safe entry",
                    html: "<p>A manhole normally includes a foundation or base, formed flow channels, benching, a lower chamber, an access shaft or neck where needed, and a frame and cover. The lower enlarged part is often called the working chamber. That historical name describes geometry and access function, not permission for unassessed personnel entry.</p>" +
                        "<p>Channels guide flow through the structure; benching should avoid stagnant pockets and direct incidental water towards the channel. Joints and penetrations need watertightness and movement compatibility. Manholes are not aeration tanks intended to guarantee biological treatment of sewage.</p>" +
                        "<p>A properly sized circular cover has constant width in every in-plane direction, so it cannot pass through a smaller matching circular opening merely by turning diagonally. This is a practical advantage over some rectangular arrangements, not proof that every cover is safe regardless of its seat, dimensions, restraint or damage.</p>" +
                        "<p>Cover strength and support depend on traffic and imposed loads, not just chamber depth. A shallow chamber can still lie beneath heavy traffic. The bank's 0.7–0.9 m shallow classification and 50 cm opening are unverified dimensional conventions here. No opening diameter guarantees passage with rescue equipment or a safe atmosphere. Access dimensions, fall protection and any entry system require a competent, site-specific design under the applicable requirements.</p>",
                    sources: [
                        { id: "WATE813-00054", set: 7, question: 94 },
                        { id: "WATE813-00191", set: 20, question: 92 },
                        { id: "WATE813-00192", set: 20, question: 93 },
                        { id: "WATE813-00193", set: 20, question: 94 },
                        { id: "WATE813-00224", set: 23, question: 91 }
                    ]
                },
                {
                    id: "sewer-drop-manhole-energy",
                    title: "A drop connection manages a real invert-level difference",
                    html: "<p>A drop manhole accommodates a significant difference between an incoming sewer invert and the receiving channel or outgoing sewer. It controls the transition rather than allowing an uncontrolled free fall into the chamber. A change in direction or diameter alone does not define the need for a drop.</p>" +
                        "<p>The selected arrangement must convey design flow, manage energy and entrained air, resist abrasion and remain inspectable. Incoming and outgoing channels require coordinated levels and geometry. Poorly designed drops can create splash, turbulence, gas release or inaccessible deposits; simply enclosing the fall in a vertical pipe does not solve every issue.</p>" +
                        "<p><strong>Hypothetical energy illustration:</strong> incoming invert RL 100.8 m and receiving invert RL 99.5 m differ by 1.3 m. At an assumed Q = 0.040 m<sup>3</sup>/s, the elevation-power scale is <strong>ρgQΔz = 1000 × 9.81 × 0.040 × 1.3 = 510.12 W</strong>. It indicates energy requiring hydraulic consideration, not the dimensions of a drop structure.</p>" +
                        "<p>Actual energy balance also includes depth and velocity heads and downstream conditions. Applicable details determine the threshold for a drop, its configuration and structural design; the bank supplies no verified universal level-difference limit. Maintenance and gas hazards need competent assessment, and an apparently accessible drop chamber is not a safe-entry certificate.</p>",
                    sources: [
                        { id: "WATE813-00194", set: 20, question: 95 },
                        { id: "WATE813-00223", set: 23, question: 90 }
                    ]
                },
                {
                    id: "sewer-inverted-siphon-headloss",
                    title: "A depressed sewer crossing needs an available-head and low-flow check",
                    html: "<p>An inverted siphon is a depressed sewer crossing beneath an obstruction such as a river, road or utility. It normally runs full under pressure. Despite the name, it is not a true siphon lifted above the upstream water surface. Available head must cover friction, entrance, exit and other local losses.</p>" +
                        "<p>For a constant circular bore, <strong>v = 4Q/(πD<sup>2</sup>)</strong> and a simplified Darcy–Weisbach loss is <strong>h<sub>L</sub> = [f<sub>D</sub>L/D + ΣK]v<sup>2</sup>/(2g)</strong>. Use D and L in metres, Q in m<sup>3</sup>/s, dimensionless Darcy factor f<sub>D</sub> and appropriately referenced local coefficients K.</p>" +
                        "<p><strong>Hypothetical example:</strong> Q = 0.030 m<sup>3</sup>/s, D = 0.200 m, L = 60 m, f<sub>D</sub> = 0.025 and ΣK = 3 give v ≈ <strong>0.95493 m/s</strong> and h<sub>L</sub> ≈ <strong>0.48802 m</strong>. The example assumes the stated loss model and does not establish actual upstream or downstream levels.</p>" +
                        "<p>Several barrels may allow different flows to be conveyed while preserving useful velocities, but multiple barrels are not an automatic guarantee against deposition. A suitably designed barrel can provide cleansing at its operating flow; the claim that every inverted siphon cannot self-clean is too absolute. Check low flow, sediment, access, blockage, redundancy, buoyancy, structural protection and receiving levels before adopting the crossing.</p>",
                    sources: [{ id: "WATE813-00048", set: 6, question: 98 }]
                },
                {
                    id: "sewer-house-drainage-traps-and-vents",
                    title: "Soil, waste and vent pipes serve different parts of building drainage",
                    html: "<p>A <strong>soil pipe</strong> carries discharge containing human excreta, such as from water closets. A <strong>waste pipe</strong> carries discharge from fixtures such as baths, sinks and kitchens under the conventional distinction. A <strong>vent pipe</strong> primarily manages air pressure and gases. Greywater is not automatically clean or suitable for reuse without assessment.</p>" +
                        "<p>A trap retains a water seal between the occupied space and foul drainage air. Siphonage or positive pressure can disturb that seal; evaporation can also remove it. An anti-siphonage or vent connection helps control pressure at the protected trap arrangement. The bank's top-of-P-trap wording is a simplified description, not a complete connection detail or a reason to connect indiscriminately to any point.</p>" +
                        "<p>An intercepting trap is a traditional trap at the house-drain/public-sewer interface. It is not an intercepting sewer. Whether it is required or appropriate depends on the governing building-drainage design; additional trapping can introduce headloss and maintenance demands and should not be assumed universally beneficial.</p>" +
                        "<p>Ventilation helps protect seals and manage foul air, but it does not make a sewer chamber safe to enter. Coordinate fixture loading, pipe slopes, clean-outs, vent routes and permitted connection details using the applicable plumbing requirements. Neither a trap nor a vent replaces watertight construction, routine maintenance or protection against surcharge backing into the building.</p>",
                    sources: [
                        { id: "BASI674-00384", set: 30, question: 6 },
                        { id: "BASI674-00391", set: 30, question: 13 },
                        { id: "WATE813-00196", set: 20, question: 97 },
                        { id: "WATE813-00197", set: 20, question: 98 },
                        { id: "WATE813-00198", set: 20, question: 99 }
                    ]
                },
                {
                    id: "sewer-occupational-health-and-confined-spaces",
                    title: "Confined-space safety requires a qualified system — Syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> the bank supplies no site hazard assessment, authorised-entry programme or rescue plan. Sewers and connected chambers can contain oxygen-deficient, toxic or flammable atmospheres and can experience sudden inflow. Biological exposure, moving equipment, falls, traffic and structural hazards add to the risk. An open cover, absence of smell or apparently low water level does not establish safety.</p>" +
                        "<p>Design for inspection and maintenance from outside where practicable. If entry is necessary, it belongs within a competent employer's site-specific confined-space system with trained authorised personnel, appropriate hazard isolation and monitoring, communication, supervision and a capable rescue arrangement. Protective equipment alone is not that system, and untrained people must not attempt an improvised rescue.</p>" +
                        "<p>The inspected US OSHA <strong>29 CFR 1910.146</strong> addresses permit-required confined spaces in general industry; its scope excludes construction. Construction has separate requirements, including <strong>29 CFR 1926.1203</strong> on identification, prevention of unauthorised entry, written programmes and coordination. These are identified foreign safety references, not claims of Nepal legal adoption.</p>" +
                        "<p>No cover diameter, shallow-chamber classification or nominal ventilation space implies safe entry. Competent specialists must establish the applicable controls and emergency response for the actual work. These study notes intentionally omit detailed entry procedures, atmospheric acceptance thresholds and rescue techniques; they are not an operational permit or training substitute.</p>",
                    sources: []
                },
                {
                    id: "sewer-operation-resilience-and-rehabilitation",
                    title: "Operate the network as an asset system with evidence-based maintenance",
                    html: "<p>The responsible agency needs current records of pipes, structures, connections, inverts, materials, condition and maintenance access. Risk-based maintenance prioritises not only the likelihood of failure but also its consequences: a small critical crossing or inaccessible interceptor can warrant more attention than a larger easily bypassed reach.</p>" +
                        "<p>Combine complaints, blockage history, rainfall and flow monitoring with remote inspection to distinguish capacity shortfalls from deposits, roots, failed joints or downstream restrictions. Repeated cleaning without identifying the cause may leave the failure mechanism unchanged. Appurtenances should support the actual equipment and maintenance strategy, not merely appear on a drawing.</p>" +
                        "<p>Rehabilitation options can include local repair, lining, replacement or connection correction. Each changes some combination of bore, roughness, structural behaviour and leakage. A smoother lining may reduce friction while also reducing diameter; both effects belong in the hydraulic assessment. Watertightness improvements can change groundwater patterns and relocate infiltration.</p>" +
                        "<p>Plan continuity of service, qualified temporary conveyance, public protection and controlled wastewater handling during work. Flood exposure, power loss at pumps and downstream treatment constraints require contingency planning. The inspected EPA SSO guidance identifies defects, blockages and operational failures as overflow causes; its US regulatory discussion is not a Nepal discharge rule. Good records and follow-up verification are part of sewer design performance, not optional administration after construction.</p>",
                    sources: [
                        { id: "WATE813-00052", set: 7, question: 92 },
                        { id: "WATE813-00087", set: 10, question: 96 },
                        { id: "WATE813-00210", set: 21, question: 99 }
                    ]
                }
            ],
            gaps: [
                "All 57 assigned root-question records are cited in related substantive blocks, including the four BASI-prefixed building-drainage records. Embedded model-chapter questions are not additional assignments; the original banks and stored keys remain unchanged.",
                "The bank lacks a complete population forecast, measured return fraction, industrial schedule, peaking model and I&I time series. sewer-flow-components-example is an explicitly hypothetical, source-free Syllabus extension rather than a recovered design dataset.",
                "Rainfall IDF information, adopted event frequency, connected impervious areas, concentration time and hydrographs are missing. sewer-hydrographs-storage-and-surcharge is a source-free Syllabus extension; the rational-method example is hypothetical and does not select a Nepal design storm or authorise overflow.",
                "sewer-material-selection and sewer-buried-pipe-and-joints are source-free Syllabus extensions. Product class, ground support, loads, groundwater, corrosion, movement and actual internal diameters are not supplied. No unrelated ISO or IS number is presented as a sewer design standard.",
                "sewer-manning-model-and-units and sewer-full-flow-trial-sizing are source-free Syllabus extensions. Assumed roughness and uniform friction slopes support teaching calculations only. Real backwater, junction losses, surcharge, time variation and sediment require further evidence and suitable analysis.",
                "Partial-flow geometry and constant-n maxima are derived explicitly with radian angles. Variable roughness changes velocity/discharge ratios and maxima. A pressurised network is not governed by the same free-surface depth curve, and some flow ratios can have multiple mathematical depth branches.",
                "The Camp–Shields alternatives lack definitions and dimensional completeness. The notes supply a separately defined Shields-type noncohesive-grain model, not a fabricated reconstruction. Its hypothetical threshold is not a universal sewage-deposit criterion.",
                "No applicable Nepal edition was verified for universal 150 mm public-sewer minima, domestic diameter-gradient pairings, 0.6–0.9 or 2.5–3.0 m/s velocity limits, 25–50-year horizons, 30/300 m manhole spacing, shallow classifications or 50 cm openings. These remain qualified rather than silently adopted.",
                "sewer-excavation-bedding-and-installation is a source-free Syllabus extension. Site utilities, temporary works, groundwater, trench support, manufacturer requirements and acceptance procedures are absent; no numerical trench, pressure-test or cover prescription is invented.",
                "sewer-occupational-health-and-confined-spaces is a source-free Syllabus extension. The OSHA general-industry and construction references are foreign safety context, not Nepal adoption or an operational entry procedure. No opening dimension or nominal airspace certifies safe access.",
                "The EPA SSO, CSO and SWMM web pages were inspected for system definitions, failure causes and modelling scope. Attempts to retrieve separate conventional-gravity-sewer and CMOM PDFs did not yield verified text, so those documents are not cited as inspected design authorities. Subsequent legal amendments, site permissions and completed construction approval are not established."
            ],
            cautions: [
                {
                    html: "<p><strong>Water-carriage sewerage does not mean storm sewage alone.</strong> It conveys wastes using water; the selected sanitary, combined or other arrangement determines which flows are intended. The source has three options and no sound exclusive all-liquid-wastes conclusion; its storm-only key must not be generalised to every system.</p>",
                    sources: [{ id: "WATE813-00180", set: 19, question: 92 }]
                },
                {
                    html: "<p><strong>Sewer system agency is a descriptive term, not a verified universal statutory name.</strong> Ownership, maintenance, treatment interfaces and regulatory duties depend on the applicable local arrangements. These definition questions do not identify a particular Nepal legal entity.</p>",
                    sources: [
                        { id: "WATE813-00052", set: 7, question: 92 },
                        { id: "WATE813-00087", set: 10, question: 96 }
                    ]
                },
                {
                    html: "<p><strong>80% is an assumed return fraction, not a universal measured wastewater yield.</strong> Per-capita rates need population and conversion to total flow; private supplies, industrial discharges and I&amp;I may require separate additions. Avoid both omission and double-counting of non-domestic contributions.</p>",
                    sources: [
                        { id: "WATE813-00182", set: 19, question: 94 },
                        { id: "WATE813-00183", set: 19, question: 95 },
                        { id: "WATE813-00201", set: 21, question: 91 }
                    ]
                },
                {
                    html: "<p><strong>Rain-related excess can be inflow or delayed infiltration.</strong> Groundwater entry through defects is infiltration, and it may persist in dry weather. Direct surface-water entry is inflow. Wet-weather excess in a sanitary sewer does not make it an intentionally combined system.</p>",
                    sources: [
                        { id: "WATE813-00202", set: 1, question: 95 },
                        { id: "WATE813-00203", set: 21, question: 92 }
                    ]
                },
                {
                    html: "<p><strong>The separate-system advantage question is malformed and has only three stored options.</strong> A smaller sanitary conduit can be an advantage when storm runoff is excluded, but the missing comparison must not be silently reconstructed as a verified economic rule. Total network and treatment costs require a full alternatives comparison.</p>",
                    sources: [{ id: "WATE813-00205", set: 21, question: 94 }]
                },
                {
                    html: "<p><strong>Low population does not universally favour a combined system.</strong> Runoff, existing assets, topography, treatment, receiving-water protection and whole-life cost determine the choice. Combined wet-weather loads can increase treatment cost, but that is not a complete universal cost ranking.</p>",
                    sources: [
                        { id: "WATE813-00208", set: 21, question: 97 },
                        { id: "WATE813-00209", set: 21, question: 98 }
                    ]
                },
                {
                    html: "<p><strong>Larger pipes are not invariably less prone to choking.</strong> At fixed low discharge they may have weaker cleansing conditions and accumulate sediment. The source also offers Large and Big as overlapping choices. Capacity, solids transport and maintenance must be checked separately.</p>",
                    sources: [{ id: "WATE813-00207", set: 21, question: 96 }]
                },
                {
                    html: "<p><strong>The combined-system choices overlap.</strong> Sewage plus rainwater and dry-weather flow plus rainwater can describe the same elementary arrangement. Domestic and industrial wastewater alone do not define storm-sanitary combination. Preserve the intended system distinction without treating synonymous options as independent facts.</p>",
                    sources: [
                        { id: "WATE813-00222", set: 1, question: 96 },
                        { id: "WATE813-00227", set: 23, question: 94 }
                    ]
                },
                {
                    html: "<p><strong>CL/360 is not a complete defined rational formula.</strong> For Q in m<sup>3</sup>/s, use CiA/360 only with dimensionless C, intensity i in mm/h and area A in hectares. The printed expression omits defined intensity and area; an unexplained L cannot stand in for their product. Neither of the two stored options supplies a defensible complete equation.</p>",
                    sources: [{ id: "WATE813-00214", set: 22, question: 93 }]
                },
                {
                    html: "<p><strong>The Camp–Shields options cannot be validated by closest notation.</strong> Undefined symbols and a velocity written proportional to gd without the necessary dimensional structure do not establish a usable relation. A separately defined Shields parameter and resistance model can yield a square-root velocity expression, but that is not proof of the stored alternative.</p>",
                    sources: [{ id: "WATE813-00215", set: 22, question: 94 }]
                },
                {
                    html: "<p><strong>The partial-depth factor 1/2 cannot be omitted.</strong> With θ the wetted central angle in radians, y/D = [1 − cos(θ/2)]/2. At θ = π this must give 0.5. The source's three offered expressions omit the correct complete relation; calling the keyed expression simplified does not make it dimensionally or geometrically equivalent.</p>",
                    sources: [{ id: "WATE813-00216", set: 22, question: 95 }]
                },
                {
                    html: "<p><strong>θ − sin θ alone is neither normalised area ratio nor discharge ratio.</strong> Area ratio is (θ − sin θ)/(2π). At equal friction slope, the Manning discharge ratio also includes [(θ − sin θ)/θ]<sup>2/3</sup> and n<sub>f</sub>/n<sub>p</sub> if roughness differs. No stored option gives the complete relation, and the explanation's changing option reference does not repair it.</p>",
                    sources: [{ id: "WATE813-00217", set: 22, question: 96 }]
                },
                {
                    html: "<p><strong>Partial-flow discharge does not increase monotonically to full depth.</strong> For constant n and slope, maximum velocity occurs near 0.8128D and maximum discharge near 0.9382D; the latter is about 1.0757 times the full reference. Wetted perimeter does increase throughout the partial-depth range. Variable roughness and surcharge require different qualifications.</p>",
                    sources: [{ id: "WATE813-00047", set: 6, question: 97 }]
                },
                {
                    html: "<p><strong>150 mm is not a universal minimum for every sewer or house drain.</strong> It is the bank's public-sewer teaching value without a verified applicable edition here. Appropriate 100 mm house-drain applications exist subject to plumbing requirements and loading. Do not extend a public-network convention to every connection or pressure system.</p>",
                    sources: [
                        { id: "WATE813-00053", set: 7, question: 93 },
                        { id: "WATE813-00186", set: 1, question: 94 },
                        { id: "WATE813-00199", set: 20, question: 100 }
                    ]
                },
                {
                    html: "<p><strong>A 1 in 100 gradient alone cannot determine diameter.</strong> Flow, roughness, actual bore, allowable depth, solids and the applicable drainage requirements are missing. The source's diameter-gradient pairings are not a complete design calculation or a verified universal standard.</p>",
                    sources: [{ id: "BASI674-00403", set: 31, question: 11 }]
                },
                {
                    html: "<p><strong>Velocity ranges need a named application and design basis.</strong> Approximately 0.6–0.9 m/s minimum and 2.5–3.0 m/s maximum are legacy teaching ranges, not universal limits for every material and deposit. The asserted 0.6 present/0.9 ultimate requirement is not independently established here. Check actual low-flow depth, sediment behaviour and abrasion separately.</p>",
                    sources: [
                        { id: "WATE813-00185", set: 19, question: 97 },
                        { id: "WATE813-00331", set: 32, question: 100 },
                        { id: "WATE813-00336", set: 33, question: 94 },
                        { id: "WATE813-00341", set: 33, question: 99 }
                    ]
                },
                {
                    html: "<p><strong>25–50 years is not a universal design-life requirement.</strong> Define planning horizon, growth, connection uptake and component life separately. Initial low-flow performance can govern even when the ultimate high-flow capacity is adequate.</p>",
                    sources: [{ id: "WATE813-00226", set: 23, question: 93 }]
                },
                {
                    html: "<p><strong>Airspace does not guarantee ventilation, no surcharge or safe entry.</strong> A free water surface supports open-channel operation at the assumed condition, but backwater, storms and blockages can change the regime. Gas and access hazards require a separate qualified safety assessment.</p>",
                    sources: [{ id: "WATE813-00049", set: 6, question: 99 }]
                },
                {
                    html: "<p><strong>Circular is common, not universally the most suitable combined-sewer shape.</strong> Egg-shaped or other sections may suit particular flow ranges and construction constraints. The source's limited options do not establish an optimum independent of hydraulics, structure and maintenance.</p>",
                    sources: [{ id: "WATE813-00225", set: 23, question: 92 }]
                },
                {
                    html: "<p><strong>An inverted siphon is a depressed pressure crossing, not necessarily a pumped main or a true elevated siphon.</strong> A suitably designed operating barrel may achieve cleansing velocity; the blanket claim that it cannot is too strong. Multiple barrels require justified flow distribution and maintenance provisions, not automatic credit for self-cleansing.</p>",
                    sources: [{ id: "WATE813-00048", set: 6, question: 98 }]
                },
                {
                    html: "<p><strong>Air testing is not the only sewer test.</strong> Leakage, alignment, obstruction, deformation and condition require different checks. Approved water-based leakage tests or other acceptance methods may be appropriate. A generic testing question does not exclude its straightness and obstruction alternatives.</p>",
                    sources: [{ id: "WATE813-00187", set: 19, question: 98 }]
                },
                {
                    html: "<p><strong>Mirror test and straightness test are synonymous in this context.</strong> The source retains only these two choices, so they do not provide mutually exclusive alternatives. The line-of-sight check is also not proof of watertightness or every installed level.</p>",
                    sources: [{ id: "WATE813-00188", set: 19, question: 99 }]
                },
                {
                    html: "<p><strong>Manhole spacing requires an applicable edition and equipment context.</strong> Changes of alignment, gradient, size and junctions commonly require access, but the source's 30 m building-drain interval and 300 m large-sewer spacings are not established as universal requirements here. Large diameter does not automatically justify wider spacing or personnel entry.</p>",
                    sources: [
                        { id: "BASI674-00401", set: 31, question: 9 },
                        { id: "WATE813-00190", set: 20, question: 91 },
                        { id: "WATE813-00212", set: 22, question: 91 }
                    ]
                },
                {
                    html: "<p><strong>Shallow depth does not imply a light cover or safe atmosphere.</strong> The 0.7–0.9 m classification is an unverified convention here; cover loading depends on actual traffic and imposed loads. Working chamber describes a part of the structure, not automatic authorisation for workers to stand inside it.</p>",
                    sources: [
                        { id: "WATE813-00054", set: 7, question: 94 },
                        { id: "WATE813-00191", set: 20, question: 92 }
                    ]
                },
                {
                    html: "<p><strong>A 50 cm opening does not establish safe access with a harness or rescue equipment.</strong> The source's minimum is not independently verified. Circular-cover geometry helps only with a correctly sized matching seat; damaged or wrongly fitted covers remain hazardous. Neither dimension nor shape substitutes for a qualified confined-space system.</p>",
                    sources: [
                        { id: "WATE813-00192", set: 20, question: 93 },
                        { id: "WATE813-00224", set: 23, question: 91 }
                    ]
                },
                {
                    html: "<p><strong>Manholes provide access and hydraulic connections, not guaranteed oxidation treatment.</strong> Ventilation and cleaning are distinct functions, and the malformed all-of-these source wording should not imply that routine entry or deliberate exposure to sewer gases is acceptable. Prefer remote inspection where practicable.</p>",
                    sources: [
                        { id: "WATE813-00193", set: 20, question: 94 },
                        { id: "WATE813-00211", set: 21, question: 100 },
                        { id: "WATE813-00219", set: 22, question: 98 }
                    ]
                },
                {
                    html: "<p><strong>A drop addresses an incoming-to-receiving invert difference.</strong> It is not required merely because a sewer changes alignment or size. The cited questions provide no verified universal height threshold, and a drop arrangement must control energy, air, abrasion and maintenance access.</p>",
                    sources: [
                        { id: "WATE813-00194", set: 20, question: 95 },
                        { id: "WATE813-00223", set: 23, question: 90 }
                    ]
                },
                {
                    html: "<p><strong>The invert is an internal level; ground cover uses the relevant outer crown.</strong> A dumpy or automatic level is suitable for elevation control, but correct datum, survey checks and installed-profile verification remain necessary. Average end-to-end fall can conceal a local sag.</p>",
                    sources: [{ id: "WATE813-00195", set: 20, question: 96 }]
                },
                {
                    html: "<p><strong>Trap and vent identification is not a complete plumbing detail.</strong> The top-of-P-trap answer is simplified; actual anti-siphonage connections require the governing layout. Intercepting traps are not universally required or interchangeable with intercepting sewers. House-drain ventilation protects pressure conditions but does not certify a safe sewer atmosphere.</p>",
                    sources: [
                        { id: "BASI674-00384", set: 30, question: 6 },
                        { id: "BASI674-00391", set: 30, question: 13 },
                        { id: "WATE813-00196", set: 20, question: 97 }
                    ]
                },
                {
                    html: "<p><strong>Foreign safety references are identified, not adopted as Nepal law.</strong> OSHA 1910.146 concerns general-industry confined spaces and excludes construction; construction has separate Subpart AA requirements, including 1926.1203. These notes do not provide an entry permit, operational testing procedure or rescue instruction. Site-specific qualified systems remain essential.</p>",
                    sources: []
                }
            ],
            references: [
                { title: "US EPA, Sanitary Sewer Overflows (SSOs), web guidance updated 13 April 2026: system definition and failure causes; US context", url: "https://www.epa.gov/npdes/sanitary-sewer-overflows-ssos" },
                { title: "US EPA, Combined Sewer Overflows (CSOs), web guidance updated 20 May 2026: combined-system definition and wet-weather overload; US context", url: "https://www.epa.gov/npdes/combined-sewer-overflows-csos" },
                { title: "US EPA, Storm Water Management Model (SWMM), web page updated 17 March 2026: hydraulic modelling capabilities and limitations of model selection", url: "https://www.epa.gov/water-research/storm-water-management-model-swmm" },
                { title: "US OSHA, 29 CFR 1910.146, Permit-required confined spaces: general-industry scope and employer programme responsibilities; online text inspected 6 September 2026", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.146" },
                { title: "US OSHA, 29 CFR 1926.1203, General requirements, Subpart AA Confined Spaces in Construction; 2015 rule, online text inspected 6 September 2026", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1203" }
            ]
        }
    });
})();