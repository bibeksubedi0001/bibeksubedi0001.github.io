(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0801: {
            code: "ACiE0801",
            questionCount: 17,
            blocks: [
                {
                    id: "planning-purpose-and-system-boundary",
                    title: "Plan useful water-power development, not just maximum megawatts",
                    html: "<p><strong>Hydropower planning chooses whether, where, when and how to develop a water resource.</strong> Its objective is to obtain worthwhile, dependable benefits while respecting physical, economic, social and environmental constraints. Maximising a turbine rating is not equivalent to maximising the value of a project, and neither hydrological calculation alone nor drafting a policy completes the planning task.</p>" +
                        "<ul><li><strong>Define the service:</strong> annual electricity, dry-season supply, peak-period capacity, local access or a combination. Where irrigation, flood management or water supply are intended services, identify their timing and priorities too.</li><li><strong>Define the boundary:</strong> assess the catchment, diversion or reservoir, waterways, powerhouse, access and grid connection together. A favourable powerhouse site can still belong to an unacceptable overall scheme.</li><li><strong>Compare alternatives:</strong> consider different layouts, capacities and operating arrangements, as well as postponement or no development. Count the associated mitigation, resettlement, transmission and maintenance obligations.</li><li><strong>Test compatibility:</strong> a release that benefits one use may constrain another; a cascade changes the conditions experienced downstream. Benefits cannot be assumed independent merely because they have different names.</li></ul>" +
                        "<p>The bank's maximum-benefit/minimum-environmental-disturbance statement expresses this integrated objective. It does not promise zero impact or authorise trading away every constraint for more generation. Avoid adverse effects where possible, examine practicable alternatives, and explicitly assess the remaining effects rather than treating mitigation as a final decoration.</p>" +
                        "<p><small>Scope: official ACiE0801 covers Nepal and world potential, development stages, and Nepal's history, policy, acts and regulation. The linked sources are the 17 assigned bank records, not endorsements of every stored explanation. Document years below identify the inspected research editions; they are not claims that all facts describe current operating conditions. Original questions and keys are not altered.</small></p>",
                    sources: [{ id: "HYDR626-00229", set: 25, question: 65 }]
                },
                {
                    id: "planning-water-head-and-terrain",
                    title: "Usable flow and head matter more than a terrain label",
                    html: "<p><strong>A conventional hydropower scheme needs usable flow through an exploitable hydraulic head.</strong> Hilly terrain often supplies substantial elevation differences over short distances, which helps explain Nepal's opportunities. However, high head and mountains are not universal requirements: low-head schemes can use substantial flows across modest level differences, including in relatively flat terrain.</p>" +
                        "<p>At the conversion boundary, <strong>P = ρgQH<sub>n</sub>η</strong>. With water density ρ in kg/m<sup>3</sup>, gravitational acceleration g in m/s<sup>2</sup>, turbine flow Q in m<sup>3</sup>/s, net head H<sub>n</sub> in m and dimensionless conversion efficiency η, P is in watts. A small head does not mean zero power; its effect must be evaluated together with flow. Conversely, a steep valley without dependable usable water is not automatically an attractive generating site. The elevation difference on a map is not necessarily net turbine head because tailwater conditions and waterway losses matter.</p>" +
                        "<ul><li><strong>Hydrology:</strong> examine seasonal and low flows, floods, the length and quality of records, upstream withdrawals and the water that must remain available for other obligations.</li><li><strong>Catchment:</strong> area is a useful descriptor, not a direct guarantee of yield. Rainfall, runoff processes, snow contribution where relevant, geology and existing uses affect the flow actually reaching the intake.</li><li><strong>Layout:</strong> relate the intake, conveyance route and tailrace to recoverable head; a longer tunnel is not automatically a larger head.</li><li><strong>Delivery:</strong> access and a feasible grid connection affect whether physically obtainable electricity can be built and delivered economically.</li></ul>" +
                        "<p>The US Department of Energy's plant-type explanation also distinguishes impoundment from diversion layouts and notes that a diversion need not require a dam. Do not turn one common mountainous layout into a definition of every hydro installation. The bank's hilly-area choice is a broad tendency, not an exclusion of low-head development elsewhere.</p>",
                    sources: [{ id: "HYDR626-00307", set: 33, question: 63 }]
                },
                {
                    id: "planning-geology-sediment-and-site-risks",
                    title: "A favourable condition is still a siting consideration",
                    html: "<p><strong>Site selection considers both opportunities and problems.</strong> Sound rock may provide a favourable foundation, but the word rocky does not establish soundness. Joint orientation, weathering, faults, permeability, excavation behaviour and slope stability can govern dam abutments, tunnel support and powerhouse foundations. A positive result from geological investigation does not make geology irrelevant.</p>" +
                        "<table><thead><tr><th scope='col'>Subject</th><th scope='col'>Planning question</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Foundation and rock mass</th><td>Can the structures be supported and excavated safely, with practicable treatment of weak zones, seepage and instability?</td></tr>" +
                        "<tr><th scope='row'>Sediment</th><td>What material arrives, when does it arrive, and how will deposition, abrasion and sediment handling affect useful storage, equipment and downstream conditions?</td></tr>" +
                        "<tr><th scope='row'>Catchment and water</th><td>Is the usable flow sufficiently dependable for the intended service after competing uses and required releases?</td></tr>" +
                        "<tr><th scope='row'>Hazards and access</th><td>How do floods, earthquakes, landslides and any relevant upstream lake-outburst hazards affect the layout, construction and operation?</td></tr></tbody></table>" +
                        "<p>Unwanted sediment deposition is <strong>not a desirable site attribute</strong>. Nevertheless, sediment assessment and management are essential considerations. Deposition can reduce useful storage, while particles carried through machinery can cause abrasion; these are related but different mechanisms. A scheme without a large reservoir still needs a sediment strategy.</p>" +
                        "<p>This resolves the two bank stems differently. In the question asking what is <em>not a consideration</em>, all four listed subjects deserve consideration, including rocky land. In the question asking what is <em>not a requirement</em>, sedimentation is defensible only if requirement means a desirable attribute. It does not mean that an engineer may omit sediment investigations. No site-specific rock quality, sediment rate or universal acceptance threshold is supplied.</p>",
                    sources: [
                        { id: "HYDR626-00119", set: 14, question: 65 },
                        { id: "HYDR626-00305", set: 33, question: 61 }
                    ]
                },
                {
                    id: "planning-potential-hierarchy",
                    title: "Gross, technical and economic potential answer different questions",
                    html: "<p><strong>A potential estimate is conditional on its definition and assessment basis.</strong> Resource magnitude, engineering developability and economic attractiveness are separate filters. The official syllabus names all three; memorising one national number does not explain their relationship.</p>" +
                        "<table><thead><tr><th scope='col'>Category</th><th scope='col'>Meaning</th><th scope='col'>What it does not establish</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Gross or theoretical</th><td>An idealised physical resource account derived from water and elevation under the assessment's stated hydrological and geographical assumptions.</td><td>That all the resource can be captured by real, acceptable projects.</td></tr>" +
                        "<tr><th scope='row'>Technical</th><td>The portion that can be developed using the technologies, layouts and engineering constraints included in the study.</td><td>That construction costs, revenues, impacts and financing make every candidate attractive.</td></tr>" +
                        "<tr><th scope='row'>Economic</th><td>The technically developable opportunities that pass the specified economic evaluation, with its costs, benefits, prices, discounting and exclusions.</td><td>That funding, all permissions or a purchaser are already secured.</td></tr></tbody></table>" +
                        "<p>With <strong>compatible boundaries, units and definitions</strong>, economic potential is no greater than technical potential, which is no greater than gross potential. These are nested views of a resource, not independent quantities to add. Studies may place environmental or other exclusions at different screening stages, so retain their actual terminology rather than relabelling a published total.</p>" +
                        "<p>Installed capacity is the rating of facilities actually installed on the stated date; planned capacity describes proposed facilities. Neither is the same as national potential. A fraction such as feasible potential divided by gross potential is an assessment ratio, <strong>not turbine efficiency, capacity factor or a permanent percentage applicable to every river</strong>. The bank's 42 GW question needs precisely these category distinctions.</p>",
                    sources: [{ id: "HYDR626-00290", set: 31, question: 67 }]
                },
                {
                    id: "planning-capacity-and-annual-energy",
                    title: "Keep unit rating, station capacity and annual energy separate",
                    html: "<p><em>Syllabus extension: measurement basis for Nepal and world power-potential comparisons.</em> None of the 17 assigned records supplies a complete annual-generation calculation. The following account is an authored illustration, not reconstructed bank data.</p>" +
                        "<p><strong>Power is a rate; energy accumulates over time.</strong> One MW is 1000 kW, one GW is 1000 MW, and one TWh is 1000 GWh. Station installed capacity C is the sum of the relevant generating-unit power ratings. A single unit's rating is not the whole station's rating, and a generator rating in MVA cannot simply be read as the same numerical MW output.</p>" +
                        "<p>For power in MW and duration in hours, <strong>E<sub>MWh</sub> = ΣP<sub>i</sub>Δt<sub>i</sub></strong>. For a fixed capacity and consistent generation boundary, <strong>CF = E<sub>MWh</sub>/(C<sub>MW</sub>T<sub>h</sub>)</strong>, giving <strong>E<sub>GWh</sub> = C<sub>MW</sub>T<sub>h</sub>CF/1000</strong>. CF is the capacity factor, not the efficiency of a turbine. Water availability, operation, losses, outages and grid acceptance affect achieved energy.</p>" +
                        "<p><strong>Authored comparison:</strong> assume a 365-day year, so T = 8760 h. A hypothetical 100 MW station at CF = 0.50 produces <strong>438 GWh/year</strong>. Another at 80 MW and CF = 0.75 produces <strong>525.6 GWh/year</strong>. The smaller installed capacity produces more annual energy under these explicit assumptions. No actual project capacity factor is being asserted.</p>" +
                        "<p>Therefore a ranking by MW is not a ranking by yearly GWh. Similarly, TWh/year potential cannot be compared directly with a national MW estimate. Dividing annual energy by the year's hours gives average power; converting it into an equivalent installed capacity additionally requires the assumed capacity factor and a compatible operating basis.</p>",
                    sources: []
                },
                {
                    id: "planning-nepal-legacy-potential",
                    title: "Attribute the 83,000 and 42,000 MW figures to their historical account",
                    html: "<p><strong>The Hydropower Development Policy, 2058 (2001), introduction records the familiar 83,000/42,000 MW account.</strong> Its historical resource statement gives about 83,000 MW of potential and describes about 42,000 MW as feasible from <strong>financial–technical perspectives</strong>. Preserve that combined wording when citing the policy rather than treating it as a modern technical-only inventory.</p>" +
                        "<table><thead><tr><th scope='col'>Historical quantity</th><th scope='col'>Equivalent unit</th><th scope='col'>Interpretation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>83,000 MW</th><td>83 GW</td><td>The legacy aggregate resource figure commonly cited as gross/theoretical potential; it is not capacity already installed.</td></tr>" +
                        "<tr><th scope='row'>42,000 MW</th><td>42 GW</td><td>The policy's financial–technical feasibility figure, commonly used as the legacy economically feasible answer in examination material.</td></tr></tbody></table>" +
                        "<p>The bank's 42 GW choice follows that legacy convention. Its explanation then calls the same amount technically feasible and merges technical, economic and environmental constraints without identifying an assessment. That does not establish a separate, up-to-date technical estimate. Nor should 42 GW be written as 42,000 GW: the MW-to-GW conversion is a factor of 1000.</p>" +
                        "<p>Use a three-part memory aid: <strong>number, category, source year</strong>. The policy is evidence for the statement published in 2001, not proof that exactly that amount would satisfy present costs, permits, environmental requirements or financing conditions. New hydrological data, layouts and evaluation assumptions can change a later assessment without changing the correctness of quoting the older document accurately.</p>",
                    sources: [{ id: "HYDR626-00290", set: 31, question: 67 }]
                },
                {
                    id: "planning-wecs-2019-potential",
                    title: "Read WECS 2019 with its hydrology and border-accounting basis",
                    html: "<p><em>Syllabus extension: an identified assessment beyond the bank's single legacy potential question.</em> The Water and Energy Commission Secretariat, WECS, <strong>Assessment of Hydropower Potential of Nepal, Final Report, July 2019</strong>, provides a separately defined account. The supporting research inspected section 7.4.1, printed page 64, and section 11.1, printed page 116.</p>" +
                        "<table><thead><tr><th scope='col'>WECS 2019 result</th><th scope='col'>Basis to retain</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>72,544 MW gross potential</th><td><strong>72.544 GW at 40% flow exceedance</strong>; the national account includes half the potential of international-border reaches.</td></tr>" +
                        "<tr><th scope='row'>32,680 MW ROR techno-economic potential</th><td><strong>32.680 GW</strong> from the report's run-of-river project screening. This is not a technical-only result, a complete inventory of storage alternatives or an operating-fleet total.</td></tr></tbody></table>" +
                        "<p>A flow at 40% exceedance, Q<sub>40</sub>, is equalled or exceeded for 40% of the reference flow-duration record. It is <strong>not a 40% conversion efficiency or an automatic 40% annual capacity factor</strong>, and it is not a guarantee of the same continuous operating interval in every year. The border-reach half share is an accounting convention of this assessment; it does not halve every Nepal river or determine legal ownership by itself.</p>" +
                        "<p>Do not place 83,000, 72,544, 42,000 and 32,680 in one column and interpret their differences as a measured loss of Nepal's resource. First reconcile hydrology, coverage, shared reaches, candidate schemes, exclusions and economic assumptions. The 2001 financial–technical account and the 2019 techno-economic account are <strong>not automatically like-for-like estimates</strong>.</p>" +
                        "<p>WECS's <strong>Energy Sector Synopsis Report 2024, FY2079/80</strong>, section 4.1.2.3 and Table 4.5, printed page 55, repeats 72,544 MW with attribution to WECS 2019. A later publication repeating a figure does not turn it into a newly measured 2024 or 2026 potential.</p>",
                    sources: []
                },
                {
                    id: "planning-world-potential-2011",
                    title: "World potential needs a dated energy assessment, not a plant ranking",
                    html: "<p><em>Syllabus extension: gross, technical and economic potential of the world.</em> The assigned world questions concern individual stations, not the global resource. For the latter, the inspected <strong>IPCC SRREN, Chapter 5: Hydropower, 2011</strong>, sections 5.2–5.2.1, printed pages 444–446, reports estimates attributed to <strong>IJHD 2010</strong>.</p>" +
                        "<table><thead><tr><th scope='col'>Dated world estimate</th><th scope='col'>Quantity</th><th scope='col'>Meaning</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Theoretical annual potential</th><td><strong>39,894 TWh/year</strong></td><td>An annual physical energy-resource estimate, not a station rating.</td></tr>" +
                        "<tr><th scope='row'>Technical annual potential</th><td><strong>14,576 TWh/year</strong></td><td>The technically developable annual-energy estimate in the cited assessment.</td></tr>" +
                        "<tr><th scope='row'>Corresponding technical capacity</th><td><strong>3,721 GW</strong></td><td>A capacity equivalent derived using assumed regional capacity factors; not 3,721 TWh/year and not an additional resource to add to 14,576 TWh/year.</td></tr></tbody></table>" +
                        "<p>The conversion concept is <strong>E = ΣC<sub>i</sub>T CF<sub>i</sub></strong>, with compatible units and regional assumptions. A global annual energy value alone cannot establish a unique installed-capacity equivalent. These dated global energy estimates also cannot be ranked directly against Nepal's Q<sub>40</sub>-based MW account without reconciling the measurement basis.</p>" +
                        "<p><strong>Economic potential is time- and location-dependent.</strong> Construction and transmission costs, competing supplies, demand, discounting and the treatment of environmental and social constraints influence which technical opportunities are worth developing. The inspected material does not establish a single current world economic total for these notes; none is invented by applying an arbitrary percentage to technical potential.</p>" +
                        "<p>Use these numbers as a <strong>2011 assessment reporting 2010 estimates</strong>, not as a present-day inventory. The size of Three Gorges or Baihetan answers a station-capacity question and says nothing by itself about the world's remaining economic resource.</p>",
                    sources: []
                },
                {
                    id: "planning-economic-and-financial-appraisal",
                    title: "A physically possible project may be uneconomic or unfinanceable",
                    html: "<p><em>Syllabus extension: how economic potential is screened.</em> The bank supplies no project cash-flow series, price basis or financing model. This framework explains the distinction without inventing a tariff, discount rate, royalty, payback period or guaranteed return.</p>" +
                        "<table><thead><tr><th scope='col'>Assessment</th><th scope='col'>Central question</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Physical and technical</th><td>Can the selected layout produce the intended service safely with the available water, head, technology and infrastructure?</td></tr>" +
                        "<tr><th scope='row'>Economic</th><td>Do the benefits justify the real resources used, compared with alternatives under a stated assessment boundary?</td></tr>" +
                        "<tr><th scope='row'>Financial</th><td>Can the developer meet actual expenditures and financing obligations from contractual receipts and committed funding?</td></tr>" +
                        "<tr><th scope='row'>Policy and legal</th><td>Does the proposal align with policy objectives and satisfy applicable rights, permissions and obligations? These are not substitutes for either of the preceding appraisals.</td></tr></tbody></table>" +
                        "<p>A general discounted account is <strong>NPV = Σ[(B<sub>t</sub> − C<sub>t</sub>)/(1 + r)<sup>t</sup>]</strong>, including initial investment and later costs or benefits in their proper periods. Here B<sub>t</sub> and C<sub>t</sub> are consistently defined benefits and costs, r is the stated period discount rate, and t is the period index. Economic valuation and financial cash receipts need not use the same amounts. Keep real or nominal price treatment consistent with the chosen rate.</p>" +
                        "<p>Compare alternatives on a common service and life-cycle basis. Extra installed MW may produce little additional energy if useful water is rarely available, although dependable peak service can have value distinct from annual energy. Include access, evacuation, mitigation, operation, sediment-related maintenance and major rehabilitation rather than comparing turbine purchase costs alone.</p>" +
                        "<p>Test sensitivity to dry-year flows, construction delay, cost escalation, demand and sale assumptions. A project can have positive economic value but lack a financeable revenue arrangement; conversely, a favourable private contract does not prove that all wider costs are justified. DoED's 2018 study guidance includes cost–benefit comparison in optimisation, not a universal optimum capacity or financial guarantee.</p>",
                    sources: []
                },
                {
                    id: "planning-reconnaissance-to-feasibility",
                    title: "Development studies progressively reduce decision uncertainty",
                    html: "<p><strong>Development begins with choices, not concrete.</strong> The DoED <strong>Guidelines for Study of Hydropower Projects, 2018</strong>, printed pages 2–3, distinguishes study stages, including detailed design. Reconnaissance, pre-feasibility and feasibility have different purposes even when some investigations continue across their boundaries.</p>" +
                        "<table><thead><tr><th scope='col'>Stage</th><th scope='col'>Work and useful output</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Reconnaissance or identification</th><td>Screen river reaches, existing information, demand and broad constraints. Identify candidate schemes and obvious reasons to reject or investigate them.</td></tr>" +
                        "<tr><th scope='row'>Pre-feasibility</th><td>Compare plausible sites and layouts using preliminary surveys and estimates. Select promising alternatives and specify the investigations needed to distinguish them reliably.</td></tr>" +
                        "<tr><th scope='row'>Feasibility</th><td>Develop the evidence for a go/no-go decision: hydrology, geology, layout, energy, access, grid connection, costs, environmental and social implications, risks and implementation arrangements.</td></tr></tbody></table>" +
                        "<p>Feasibility is not simply a more precise name for reconnaissance. For example, a map-based high-head opportunity can be downgraded by poor rock along its tunnel, an expensive connection, inadequate dry-season supply or unacceptable impacts. The assessment must respond to that evidence rather than preserve the first advertised capacity at any cost.</p>" +
                        "<p>The outcome may be development, redesign, further investigation, postponement or rejection. A favourable feasibility report does not itself certify financing, every statutory approval or construction readiness. These study labels describe decision maturity; project-specific terms of reference and applicable procedures still govern the required work.</p>",
                    sources: [{ id: "HYDR626-00126", set: 15, question: 60 }]
                },
                {
                    id: "planning-detailed-design-to-operation",
                    title: "Detailed design, construction and commissioning remain distinct tasks",
                    html: "<p><strong>Detailed engineering converts the selected concept into coordinated, buildable requirements.</strong> It develops calculations, drawings, equipment specifications, civil–mechanical–electrical interfaces, quantities and quality requirements. It is logically distinct from physically constructing the works, even where both are procured under one contract.</p>" +
                        "<ol><li><strong>Detailed design and procurement preparation:</strong> resolve geometry, interfaces, technical specifications and the information needed for tendering and execution.</li><li><strong>Procurement and construction:</strong> arrange contracts and equipment supply, build the civil works, install machines and electrical systems, and control safety, quality, cost and schedule.</li><li><strong>Testing and commissioning:</strong> demonstrate readiness and performance through the appropriate inspections, functional checks and controlled operating tests before acceptance and commercial service under the applicable arrangements.</li><li><strong>Operation and maintenance:</strong> manage water and generation, inspect and maintain assets, monitor safety and environmental obligations, and compare actual performance with the planning assumptions.</li><li><strong>Later-life decisions:</strong> assess rehabilitation, uprating, changed operating requirements and eventual retirement or decommissioning obligations as part of life-cycle planning.</li></ol>" +
                        "<p>In an <strong>engineering, procurement and construction, EPC,</strong> package, one contractual implementation arrangement can encompass design, procurement and construction. Design development and procurement may overlap with staged construction when properly coordinated. That contractual overlap does not erase detailed design as a separate engineering activity or justify building without adequate design information.</p>" +
                        "<p>The bank combines all three activities in its construction-stage stem while its explanation says construction follows detailed design. Treat its choice as an implementation-package interpretation, not a universal statement that detailed design belongs only to construction. Commissioning is also not synonymous with feasibility approval, signing a PPA or completing only the civil works.</p>",
                    sources: [{ id: "HYDR626-00126", set: 15, question: 60 }]
                },
                {
                    id: "planning-licence-ppa-and-financial-closure",
                    title: "Licensing, purchase arrangements and finance are parallel workstreams",
                    html: "<p><strong>Technical progress, legal permission and commercial readiness are different dimensions of development.</strong> The bank's relative sequence, <strong>survey licence → PPA → financial closure → testing and commissioning</strong>, is the best of its offered sequences for the assumed project arrangement. It omits much of the work between these milestones and is not a complete statutory procedure.</p>" +
                        "<table><thead><tr><th scope='col'>Milestone</th><th scope='col'>What it establishes</th><th scope='col'>What it does not establish</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Survey licence</th><td>Permission for the specified survey or study activity, subject to its terms.</td><td>An automatic right to construct and operate the whole scheme or ownership of all required land.</td></tr>" +
                        "<tr><th scope='row'>Power purchase agreement, PPA</th><td>A contractual basis for sale and purchase, with the parties' terms and conditions.</td><td>A replacement for licences, physical water availability, a grid connection or committed project finance.</td></tr>" +
                        "<tr><th scope='row'>Financial closure</th><td>The financing arrangements and required conditions have reached the defined commitment stage.</td><td>That construction is complete or future receipts and performance are risk-free.</td></tr>" +
                        "<tr><th scope='row'>Testing and commissioning</th><td>Demonstration of the installed system's readiness under the relevant technical and contractual requirements.</td><td>A retrospective substitute for the preceding permissions, studies and construction.</td></tr></tbody></table>" +
                        "<p>The full development programme also accounts for feasibility, applicable environmental and land-related approvals, generation or transmission permissions, connection arrangements, detailed engineering and construction. These tracks interact and may overlap; their precise dependencies belong in the project's approval and implementation schedule.</p>" +
                        "<p>Do not assume that every project must sell to the same off-taker or that a PPA automatically guarantees purchase of every possible unit of energy. Tariffs, dispatch, delivery obligations and financing conditions depend on the applicable documents. This conceptual sequence supplies neither an approval deadline nor a standard guaranteed contract.</p>",
                    sources: [{ id: "HYDR626-00292", set: 32, question: 62 }]
                },
                {
                    id: "planning-pharping-and-early-history",
                    title: "Pharping marks the beginning of Nepal's hydropower history",
                    html: "<p><strong>Pharping was Nepal's first hydropower plant, with an original installed capacity of 500 kW.</strong> NEA's <strong>Generation Directorate 2082/2083, 18th issue</strong>, printed page 93, records inauguration on <strong>22 May 1911</strong> and <strong>two 250 kW generating units</strong>. The bank's 1911 AD, or 1968 BS, and 500 kW answers are consistent with this historical account.</p>" +
                        "<p>The unit account is <strong>2 × 250 kW = 500 kW = 0.5 MW</strong>. Neither one 250 kW unit nor 500 MW represents the original station total. Installed power is a rating; the supplied historical facts do not give the station's annual energy or prove that its original rating is continuously available now.</p>" +
                        "<p>Separate three kinds of historical milestone: <strong>the first generating plant</strong>, <strong>the later creation of a national electricity institution</strong>, and <strong>subsequent growth in project size and system capability</strong>. The start of generation in 1911 is not NEA's establishment date, and the date of a later annual report is not the plant's commissioning year.</p>" +
                        "<p>A useful chronology proceeds from Pharping to NEA's formation in 1985, the 1992 electricity-sector Act and 1993 implementing Rules, the identified 2001 hydropower policy, and later project milestones. This is a framework for understanding institutional and technical development, not a claim to list every plant or policy event in Nepal's history.</p>",
                    sources: [
                        { id: "HYDR626-00286", set: 31, question: 63 },
                        { id: "HYDR626-00287", set: 31, question: 64 }
                    ]
                },
                {
                    id: "planning-nea-establishment-and-statute",
                    title: "NEA's establishment date is not the year of its enabling Act",
                    html: "<p><strong>Nepal Electricity Authority was established on 16 August 1985, or 1 Bhadra 2042 BS, under the Nepal Electricity Authority Act, 1984/2041.</strong> NEA's own About Us account confirms the establishment date and identifies the enabling Act. Remember the full title: the word <strong>Authority</strong> is legally significant.</p>" +
                        "<p>The merger brought together the Department of Electricity under the Ministry of Water Resources, Nepal Electricity Corporation and related development boards. Its purpose was to coordinate previously fragmented electricity activities and reduce duplication. NEA describes its core functions as generation, transmission and distribution, including planning, construction, operation and maintenance in interconnected and isolated systems.</p>" +
                        "<table><thead><tr><th scope='col'>Event or instrument</th><th scope='col'>Date</th><th scope='col'>Distinction</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>NEA enabling Act</th><td>1984 AD / 2041 BS</td><td>The institution's establishing statute.</td></tr>" +
                        "<tr><th scope='row'>NEA established</th><td>16 August 1985 / 1 Bhadra 2042 BS</td><td>The date the authority was formed, not simply the year printed in the Act's title.</td></tr>" +
                        "<tr><th scope='row'>Electricity Act</th><td>1992 AD / 2049 BS</td><td>A separate electricity-sector law; it is not the statute that established NEA.</td></tr></tbody></table>" +
                        "<p><strong>Bank correction: No option correct as written in either cited establishment question.</strong> The generic Electricity Act choice in Model 15, Q61, and Nepal Electricity Act 1984 in Model 31, Q66, do not give the correct establishing statute. Their explanations also confuse the Act year with formation in 1985. An approximately similar title or the correct Act year attached to the wrong title does not repair those options.</p>",
                    sources: [
                        { id: "HYDR626-00127", set: 15, question: 61 },
                        { id: "HYDR626-00289", set: 31, question: 66 }
                    ]
                },
                {
                    id: "planning-policy-2001-objectives",
                    title: "Policy provides development direction, not project permission",
                    html: "<p><em>Syllabus extension: hydropower policy beyond the assigned institution and history questions.</em> Use the identified <strong>Hydropower Development Policy, 2058 (2001)</strong>, rather than an unspecified hydropower policy. The supplied research inspected its objectives in section 3 and the storage, multipurpose, environmental and resettlement provisions in sections 5.5–5.8.</p>" +
                        "<p>Policy explains <strong>what development should achieve and which considerations should guide it</strong>. It is not itself a completed feasibility study, a licence for a particular river reach, a financing commitment or a contract for electricity purchase. Its historical potential figures and its policy objectives must also be read separately: a national resource estimate does not approve a particular layout.</p>" +
                        "<ul><li><strong>Storage and multipurpose development:</strong> evaluate how regulation can serve power and other intended water uses. Identify the timing of benefits and conflicts rather than adding an irrigation label to a power-only operating plan.</li><li><strong>Environmental mitigation:</strong> integrate environmental effects into alternative selection, investigations, design and costs. An attractive installed capacity does not demonstrate acceptable impacts.</li><li><strong>Resettlement and social implications:</strong> identify affected people, land and livelihoods and account for the measures needed; these are planning inputs, not costs that can be omitted to make an alternative appear cheaper.</li><li><strong>Coordinated implementation:</strong> translate objectives into an evidence-based scheme and programme, recognising that separate legal and commercial instruments govern actual implementation.</li></ul>" +
                        "<p>These points explain the role of the <strong>2001 document</strong>. They do not certify that every clause, incentive or procedure in that historical English text is the fully consolidated rule applicable in September 2026. No current royalty, capacity exemption, approval period or PPA guarantee is inferred from it.</p>",
                    sources: []
                },
                {
                    id: "planning-electricity-act-and-rules",
                    title: "Distinguish an establishing Act, sector legislation and implementing Rules",
                    html: "<p><em>Syllabus extension: acts and regulation governing hydropower development.</em> The inspected legal references are identified English editions, not a certification of all amendments or present legal status. Learn each instrument's <strong>title, year and role</strong> before learning any project-specific procedure.</p>" +
                        "<table><thead><tr><th scope='col'>Instrument</th><th scope='col'>Role supported by the inspected material</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Nepal Electricity Authority Act, 2041 (1984)</th><td>The enabling statute named by NEA for its establishment; distinct from general electricity-sector licensing legislation.</td></tr>" +
                        "<tr><th scope='row'>Electricity Act, 2049 (1992)</th><td>The sector Act whose sections 3–5 contain licensing provisions concerning electricity survey and development activities. Survey, generation, transmission and distribution are not interchangeable permissions.</td></tr>" +
                        "<tr><th scope='row'>Electricity Rules, 2050 (1993)</th><td>Implementing Rules made under section 40 of the Electricity Act. They provide the subordinate procedural framework rather than constituting a separate Act establishing NEA.</td></tr>" +
                        "<tr><th scope='row'>Hydropower Development Policy, 2058 (2001)</th><td>A policy instrument setting development direction; it is neither the NEA Act nor the Electricity Rules.</td></tr></tbody></table>" +
                        "<p>A <strong>PPA is a commercial agreement</strong>, not an Act or a government licence. A study guideline tells an engineer what a study should address; it does not automatically confer a water-use right or replace environmental, land, forest or connection requirements that apply to the particular project.</p>" +
                        "<p>For actual practice, identify the competent authorities and obtain the applicable, amended texts and project conditions. Check which activities require which permissions and how they interact before committing to a programme. The old English copies alone cannot establish current exemptions, royalties, tariff rights, application deadlines or the completeness of a present-day approval checklist. None of those numerical or latest-status claims is made here.</p>",
                    sources: []
                },
                {
                    id: "planning-kaligandaki-and-upper-tamakoshi",
                    title: "Nepal's operating milestones need both a date and a scheme type",
                    html: "<p><strong>Compare projects within a stated operating fleet and time period.</strong> A historical largest-plant question is normally about installed generating capacity, not dam height, reservoir volume, yearly generation or every announced proposal. The following profiles retain the dates and classifications supported by the inspected NEA reports.</p>" +
                        "<table><thead><tr><th scope='col'>Project</th><th scope='col'>Capacity and scheme</th><th scope='col'>Dated interpretation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Kaligandaki A</th><td><strong>144 MW; peaking run-of-river.</strong></td><td>The bank's intended historical operating-fleet comparison shortly before 2020. NEA's Generation Directorate 2082/2083 plant table, printed page 99, supports the peaking-ROR classification.</td></tr>" +
                        "<tr><th scope='row'>Upper Tamakoshi</th><td><strong>456 MW; daily peaking run-of-river.</strong></td><td>NEA's Annual Report 2025/2026, UTKHPL section, PDF pages 110–111, records commercial operation on <strong>20 August 2021</strong>.</td></tr></tbody></table>" +
                        "<p><strong>Daily peaking</strong> means that available pondage and operating arrangements can shift releases and output within the day. It does not make the project a seasonal storage scheme capable of moving an arbitrary monsoon volume into the dry season. Equally, calling a project ROR does not necessarily mean it has no pondage or operational regulation.</p>" +
                        "<p>The 456 MW figure is larger than 144 MW, but the ratio of their capacities does not give the ratio of annual energy, dry-season dependable output or economic value. Those comparisons need flow, head, operation and the appropriate measured or modelled energy periods.</p>" +
                        "<p>Read before 2020 as the bank's historical comparison, not a claim that Kaligandaki A existed throughout all earlier history. Likewise, retain Upper Tamakoshi as the supported 456 MW operating milestone after its 2021 commissioning, <strong>not an undated promise that it remains Nepal's largest or that every unit is available today</strong>.</p>",
                    sources: [
                        { id: "HYDR626-00294", set: 32, question: 64 },
                        { id: "HYDR626-00293", set: 32, question: 63 }
                    ]
                },
                {
                    id: "planning-bheri-babai-multipurpose-account",
                    title: "Bheri Babai illustrates multipurpose planning and a capacity discrepancy",
                    html: "<p><strong>Bheri Babai Diversion Multipurpose Project combines water transfer with hydropower and irrigation objectives.</strong> Its planning logic is to use an exploitable level difference along the diversion while delivering water for another service. The hydraulic opportunity is not determined by tunnel length alone: turbine flow, usable head and conversion conditions still govern power.</p>" +
                        "<p>The inspected Government of Nepal project <strong>Our Mission</strong> page states a hydropower objective of <strong>46.8 MW</strong>. The assigned bank question instead keys <strong>48 MW</strong>. Keep the two accounts explicit: 46.8 MW is the published mission figure inspected in the research and rechecked on 6 September 2026; 48 MW is the bank's nominal capacity figure. The mission body does not supply a publication date or establish commissioning by that inspection date.</p>" +
                        "<ul><li><strong>Water allocation:</strong> coordinate transfer and generation with irrigation timing and obligations in both the donor and receiving systems. Maximum turbine flow need not coincide with the required irrigation release.</li><li><strong>Benefit accounting:</strong> the same transferred water may provide power and then irrigation, but it is not two independently available water volumes. Define the services and avoid double-counting the resource.</li><li><strong>Reliability:</strong> examine low flows, sediment handling, conveyance outages and evacuation constraints together; a nominal power rating alone does not establish dependable multipurpose delivery.</li></ul>" +
                        "<p><strong>Unresolved bank discrepancy:</strong> the inspected evidence does not explain whether 48 versus 46.8 reflects a particular design revision or a different rating convention. Do not invent that explanation or treat 48 MW as an exact uniquely adopted value. No offered option is exactly 46.8 MW, and neither figure proves the plant's current construction or operating status.</p>",
                    sources: [{ id: "HYDR626-00296", set: 32, question: 65 }]
                },
                {
                    id: "planning-budhigandaki-storage-proposal",
                    title: "Budhigandaki's proposed capacity is not an operating-fleet addition",
                    html: "<p><strong>The owner-published Budhigandaki project description supports a 1,200 MW storage proposal.</strong> The project is on the Budhigandaki River; its About the Project and Salient Features pages are design-information references. They were inspected in the supporting research and rechecked on 6 September 2026, but their body text does not establish a current commissioning date or a newly confirmed construction stage.</p>" +
                        "<p>The salient-features table lists <strong>6 × 200 MW = 1,200 MW = 1.2 GW</strong>. In the context of this proposed scheme, the table's installed-capacity label describes the <strong>planned rating</strong>; it must not be added to an operating-fleet total as though those machines had already entered service. The page's different generation scenarios and specified daily firm-output hours also show why a proposed MW total is not a promise of that output throughout every hour of the year.</p>" +
                        "<p>Storage changes the planning problem because water can be retained for later release, subject to usable storage, inflows, head, losses and operating obligations. It can improve the timing of supply but cannot create additional inflow. Reservoir extent, resettlement, sedimentation, safety, environmental effects and the cost of the associated infrastructure belong in the comparison with alternatives.</p>" +
                        "<p>The bank intends Budhigandaki among its listed upcoming projects. However, <strong>largest upcoming</strong> has no fixed meaning without a date, candidate list and status definition. Identified, studied, approved, financed, under construction and commissioned are not equivalent. The supported 1,200 MW storage proposal is <strong>not a guarantee of Nepal's largest future completed facility</strong> or a verified completion timetable.</p>",
                    sources: [{ id: "HYDR626-00295", set: 1, question: 68 }]
                },
                {
                    id: "planning-world-station-capacity-profiles",
                    title: "Three Gorges and Baihetan are installed-capacity comparisons",
                    html: "<p><strong>China Three Gorges Corporation's project profiles support the capacity comparison intended by the two world-ranking questions.</strong> The operator pages were inspected in the supporting research and rechecked on 6 September 2026. This is an attribution to those profiles, not an independently updated world inventory or a claim based on their footer copyright year.</p>" +
                        "<table><thead><tr><th scope='col'>Station</th><th scope='col'>Location and reported capacity</th><th scope='col'>Comparison being made</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Three Gorges</th><td>Yangtze River, China; <strong>22.5 GW = 22,500 MW</strong>.</td><td>The larger installed-capacity station in the cited comparison; the operator describes multiple water-management benefits as well as generation.</td></tr>" +
                        "<tr><th scope='row'>Baihetan</th><td>Jinsha River, the upper Yangtze; <strong>16 GW = 16,000 MW</strong>, with <strong>16 units of 1 GW each</strong>.</td><td>The operator describes it as second to Three Gorges in this station-capacity context.</td></tr></tbody></table>" +
                        "<p>These profiles support the bank's intended first/second <strong>installed generating capacity</strong> comparison. Use the proper name <strong>Three Gorges</strong>, not the bank's Three George spelling. Baihetan's one-gigawatt unit rating is not its station total, and a station total is not the combined capacity of a river cascade.</p>" +
                        "<p>Annual energy ranking needs actual generation over the same stated year; drought, releases, outages and operation can change it. Dam height, reservoir storage, individual unit size and multipurpose benefits are different metrics again. No current global maximum across all such meanings of largest, and no yearly energy ranking, is inferred here.</p>" +
                        "<p>Finally, a profile's reference to the start of operation must not be confused with the date all units reached the total quoted rating. Keep <strong>metric, unit, status and evidence date</strong> together whenever turning a project fact into a historical or planning comparison.</p>",
                    sources: [
                        { id: "HYDR626-00297", set: 32, question: 66 },
                        { id: "HYDR626-00298", set: 32, question: 67 }
                    ]
                }
            ],
            gaps: [
                "Syllabus extension — planning-capacity-and-annual-energy: no assigned annual-generation dataset, operating schedule or measured capacity factor is supplied. The 100 MW/80 MW comparison is explicitly authored and hypothetical; detailed power and energy study methods belong to ACiE0802.",
                "Syllabus extensions — planning-wecs-2019-potential and planning-world-potential-2011: the assigned questions do not supply the assessment methods or global potential totals. The added WECS July 2019 and IPCC 2011/IJHD 2010 results retain their own units and assumptions. No same-basis current national comparison or verified current world economic total is available from the inspected material.",
                "Syllabus extension — planning-economic-and-financial-appraisal: no project cash flows, common price year, discount rate, firm-sale contract or alternative-supply cost is supplied. The appraisal framework cannot establish a project optimum, financing approval or a universal economic percentage of gross potential.",
                "Syllabus extensions — planning-policy-2001-objectives and planning-electricity-act-and-rules: policy and regulatory coverage is added from the identified inspected documents. The historical English copies are not certified as fully consolidated September 2026 law; current amendments, other applicable instruments, thresholds, royalties, tariffs and approval conditions require separate verification.",
                "No site-specific flow record, rock-mass investigation, sediment study, grid assessment or environmental and social baseline accompanies these 17 records. The siting and development-stage discussions are planning frameworks, not a design approval or a quantified feasibility finding for an uninvestigated site.",
                "Bheri Babai's government mission states 46.8 MW, while the bank offers 48 MW. The inspected material does not resolve the precise design-edition or rating basis behind that discrepancy. The mission is an objective statement, not evidence of a commissioning date or present available output.",
                "The project history uses the identified NEA report periods and the inspected owner profiles, not a freshly verified complete fleet or development pipeline. Undated owner wording cannot establish a current construction stage, future largest-project guarantee or completion date; installed-capacity comparisons do not establish annual-energy rankings."
            ],
            cautions: [
                {
                    html: "<p><strong>Rocky ground is a consideration, not an exclusion.</strong> In the not-a-consideration question, geology remains relevant even when sound rock is favourable. Sediment, catchment, geology and water availability all warrant investigation, so there is <strong>no option correct as written</strong> on that literal reading. The explanation's positive-factor argument does not justify the stored rocky-land choice.</p>",
                    sources: [{ id: "HYDR626-00119", set: 14, question: 65 }]
                },
                {
                    html: "<p><strong>Unwanted attribute versus required assessment:</strong> sedimentation is not something a developer requires as a desirable site characteristic. Sediment investigation and management are nevertheless essential planning considerations. The bank's sedimentation choice is conditional on that desirable-attribute interpretation of requirement; it must not be used to omit sediment from site selection.</p>",
                    sources: [{ id: "HYDR626-00305", set: 33, question: 61 }]
                },
                {
                    html: "<p><strong>Hilly terrain is a tendency, not a universal condition.</strong> High head can be advantageous, but usable power depends on both flow and head. Low-head schemes also work outside mountainous terrain, including relatively flat areas. The explanation's necessary-high-head wording is therefore too restrictive.</p>",
                    sources: [{ id: "HYDR626-00307", set: 33, question: 63 }]
                },
                {
                    html: "<p><strong>Development-stage ambiguity:</strong> detailed engineering is a distinct study/design activity in DoED's 2018 framework. An EPC implementation package may combine engineering, procurement and construction, but construction is not universally the stage in which all detailed design first occurs. The bank's broad stem and its explanation that construction follows detailed design need this qualification.</p>",
                    sources: [{ id: "HYDR626-00126", set: 15, question: 60 }]
                },
                {
                    html: "<p><strong>No option correct as written in both NEA establishment questions.</strong> The correct statute is the <strong>Nepal Electricity Authority Act, 1984/2041</strong>. NEA was established on <strong>16 August 1985 / 1 Bhadra 2042</strong>, not in the Act's 1984 year. Electricity Act and Nepal Electricity Act 1984 are not the exact establishing title; the separate Electricity Act, 2049 (1992), did not establish NEA.</p>",
                    sources: [
                        { id: "HYDR626-00127", set: 15, question: 61 },
                        { id: "HYDR626-00289", set: 31, question: 66 }
                    ]
                },
                {
                    html: "<p><strong>42 GW is a dated legacy answer.</strong> The 2001 policy describes 42,000 MW using financial–technical feasibility wording alongside the 83,000 MW legacy resource account. The bank's shift from economically feasible in the stem to technically feasible in the explanation does not establish a modern technical estimate. WECS 2019's 72,544 MW gross at 40% exceedance and 32,680 MW ROR techno-economic results have their own assessment basis; do not combine them into an undated percentage or a simple like-for-like trend.</p>",
                    sources: [{ id: "HYDR626-00290", set: 31, question: 67 }]
                },
                {
                    html: "<p><strong>The offered sequence is incomplete:</strong> survey licence → PPA → financial closure → testing and commissioning is the bank's intended relative order, not a complete statutory checklist. Studies, applicable approvals, construction permissions, connection arrangements, design and construction are omitted. A PPA does not itself grant those permissions or guarantee an identical purchase and financing arrangement for every project.</p>",
                    sources: [{ id: "HYDR626-00292", set: 32, question: 62 }]
                },
                {
                    html: "<p><strong>Largest must retain its date and metric.</strong> Kaligandaki A's <strong>144 MW</strong> is the bank's historical pre-2020 operating-fleet comparison. Upper Tamakoshi's <strong>456 MW</strong> and <strong>daily peaking ROR</strong> classification are supported by NEA's 2025/2026 report, which records commercial operation on <strong>20 August 2021</strong>. These facts do not certify today's complete fleet ranking, current availability or annual-energy ranking, and daily peaking is not seasonal storage.</p>",
                    sources: [
                        { id: "HYDR626-00293", set: 32, question: 63 },
                        { id: "HYDR626-00294", set: 32, question: 64 }
                    ]
                },
                {
                    html: "<p><strong>A proposed 1,200 MW is not an operating 1,200 MW.</strong> The inspected Budhigandaki owner material supports the storage proposal and planned rating. It does not establish a current completion date or guarantee that it will be Nepal's largest future completed plant. Largest upcoming requires a dated candidate list and a definition of project status; the bank's intended choice among its options should not become that broader guarantee.</p>",
                    sources: [{ id: "HYDR626-00295", set: 1, question: 68 }]
                },
                {
                    html: "<p><strong>Bheri Babai capacity discrepancy:</strong> the inspected government mission states <strong>46.8 MW</strong>, while the stored key is <strong>48 MW</strong>. No offered option exactly matches 46.8 MW. The cause of the different figures is not established by the inspected sources, so neither a design-revision story nor an exact currently adopted 48 MW rating is asserted. A mission objective is not proof of operating status.</p>",
                    sources: [{ id: "HYDR626-00296", set: 32, question: 65 }]
                },
                {
                    html: "<p><strong>World station rankings are capacity-specific.</strong> The inspected CTG profiles support <strong>Three Gorges, 22,500 MW</strong>, and <strong>Baihetan, 16,000 MW</strong>, with Baihetan described as second to Three Gorges. Use Three Gorges rather than Three George. This is not an annual-generation, dam-height, reservoir-size or single-unit ranking, and it does not establish a timeless current maximum for every meaning of largest.</p>",
                    sources: [
                        { id: "HYDR626-00297", set: 32, question: 66 },
                        { id: "HYDR626-00298", set: 32, question: 67 }
                    ]
                }
            ],
            references: [
                {
                    title: "DoED — Guidelines for Study of Hydropower Projects, 2018; study stages, pp.2–3, and cost–benefit optimisation, pp.194–195",
                    url: "https://giwmscdnone.gov.np/media/pdf_upload/guidelines-for-study-of-hydropower-projects-2018_iplnyqz.pdf"
                },
                {
                    title: "NEA — About Us; establishment on 16 August 1985 under the Nepal Electricity Authority Act, 1984",
                    url: "https://nea.org.np/pages/about-us"
                },
                {
                    title: "NEA — Generation Directorate 2082/2083, 18th issue; Pharping history, p.93, and plant table, p.99",
                    url: "https://nea.org.np/uploads/shares/annual_report/Generation%20Directorate2082_%202083.pdf"
                },
                {
                    title: "NEA — Annual Report 2025/2026; Upper Tamakoshi, UTKHPL section, PDF pp.110–111",
                    url: "https://nea.org.np/uploads/shares/td_tender/A%20Year%20In%20Review%20Annual%20Report%202025_2026_compressed.pdf"
                },
                {
                    title: "DoED-hosted Hydropower Development Policy, 2058 (2001); historical potential account, objectives and sections 5.5–5.8",
                    url: "https://giwmscdnone.gov.np/media/pdf_upload/hydropower-development-policy-2058-2001_b6lu3vy.pdf"
                },
                {
                    title: "DoED-hosted Electricity Act, 2049 (1992); inspected English edition, licensing provisions in sections 3–5",
                    url: "https://giwmscdnone.gov.np/media/pdf_upload/electricity-act-2049-1992_rseflns.pdf"
                },
                {
                    title: "DoED-hosted Electricity Rules, 2050 (1993); inspected English edition made under Electricity Act section 40",
                    url: "https://giwmscdnone.gov.np/media/pdf_upload/electricity-rules-2050-1993_omynmfd.pdf"
                },
                {
                    title: "WECS — Assessment of Hydropower Potential of Nepal, Final Report, July 2019; sections 7.4.1 and 11.1, pp.64 and 116",
                    url: "https://giwmscdnone.gov.np/media/pdf_upload/final-report-july-2019-on-hydropower-potential_hazgvfv.pdf"
                },
                {
                    title: "WECS — Energy Sector Synopsis Report 2024, FY2079/80; section 4.1.2.3 and Table 4.5, p.55, attributing the gross estimate to 2019",
                    url: "https://wecs.gov.np/content/56/energy-sector-synopsis-report-2024--fy-2079-80-/"
                },
                {
                    title: "IPCC — SRREN Chapter 5: Hydropower, 2011; sections 5.2–5.2.1, pp.444–446, reporting IJHD 2010 global estimates",
                    url: "https://www.ipcc.ch/site/assets/uploads/2018/03/Chapter-5-Hydropower-1.pdf"
                },
                {
                    title: "Government of Nepal — Bheri Babai Diversion Multipurpose Project, Our Mission; stated 46.8 MW objective, undated page body",
                    url: "https://bbdmp.gov.np/our-mission-detail/"
                },
                {
                    title: "Budhigandaki Jalbidhyut Company — About the Project; owner-published 1,200 MW storage proposal, not a current commissioning record",
                    url: "https://bgjcl.com/pages/about-the-project"
                },
                {
                    title: "Budhigandaki Jalbidhyut Company — Salient Features; planned unit ratings, storage and generation-scenario information",
                    url: "https://bgjcl.com/pages/salient-features"
                },
                {
                    title: "China Three Gorges Corporation — Three Gorges Project; operator profile with 22.5 GW total installed capacity",
                    url: "https://www.ctg.com.cn/ctgenglish/business/clean_energy/hydropower7/2024080621171845881/index.html"
                },
                {
                    title: "China Three Gorges Corporation — Baihetan Hydropower Station; operator profile with 16 GW and sixteen 1 GW units",
                    url: "https://www.ctg.com.cn/ctgenglish/business/clean_energy/hydropower7/2024080621171840863/index.html"
                },
                {
                    title: "US Department of Energy — Types of Hydropower Plants; impoundment, diversion and pumped-storage distinctions",
                    url: "https://www.energy.gov/cmei/water/types-hydropower-plants"
                }
            ]
        }
    });
})();