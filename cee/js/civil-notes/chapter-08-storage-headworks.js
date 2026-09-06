(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0803: {
            code: "ACiE0803",
            questionCount: 56,
            blocks: [
                {
                    id: "storage-plant-components",
                    title: "Storage-plant components: follow the water and the control functions",
                    html: "<p><em>Source-free syllabus extension: the assigned questions do not provide a complete storage-plant layout.</em> The official 8.3 scope includes the components of a typical storage plant, dam selection and design, failure mechanisms and remedies, gravity stability, seepage and foundations, intakes, spillways, dissipaters and gates. A storage project uses a reservoir to shift releases between periods; the dam creates the impoundment, but neither the dam nor the intake alone generates electricity.</p>" +
                        "<table><thead><tr><th scope='col'>Component or route</th><th scope='col'>Function and interface</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Reservoir and dam</th><td>Store water and maintain the operating level; foundation and abutments complete the load-resisting and seepage-control system.</td></tr>" +
                        "<tr><th scope='row'>Power intake</th><td>Admits water through screens and isolation arrangements into the power waterway, with adequate depth and acceptable losses.</td></tr>" +
                        "<tr><th scope='row'>Power waterway</th><td>A tunnel, pressure shaft or penstock conveys water to the turbine. A connected surge facility, where needed, moderates transients; it is not necessarily a chamber through which all flow passes.</td></tr>" +
                        "<tr><th scope='row'>Powerhouse and tailrace</th><td>The turbine drives the generator; discharged water returns to the river through the appropriate outlet and tailrace arrangement.</td></tr>" +
                        "<tr><th scope='row'>Spillway and dissipater</th><td>A separate flood/surplus route takes water past the generating units and returns it without unacceptable erosion.</td></tr>" +
                        "<tr><th scope='row'>Outlet works and auxiliary systems</th><td>Provide controlled releases or drawdown; access, drainage, instrumentation, electrical evacuation and operating equipment support the plant.</td></tr></tbody></table>" +
                        "<p>In a dam-toe arrangement, the power waterway may be short. A remote powerhouse may require a long headrace and pressure system. These alternatives do not change the need to distinguish the <strong>power route, flood route and controlled-release route</strong>. Headworks are the upstream retaining, admission and associated release works; the complete plant also includes conveyance, generating and downstream facilities.</p>" +
                        "<p>Study the interfaces: reservoir drawdown changes intake submergence, flood releases change tailwater, and gate closure changes waterway pressures. The notes explain these interactions and the assigned bank's limitations, not an approved project design. Bank citations identify existing questions; explicitly labelled extensions do not create additional bank records.</p>",
                    sources: []
                },
                {
                    id: "storage-dam-classifications",
                    title: "Dam classifications: purpose, material, structural action and overflow",
                    html: "<p>A classification is useful only after its <strong>basis</strong> is stated. Storage describes what a project does; earthfill describes its material; gravity describes its principal resisting action; overflow describes its hydraulic provision. These labels can overlap in one project and should not be treated as mutually exclusive alternatives.</p>" +
                        "<table><thead><tr><th scope='col'>Basis</th><th scope='col'>Classes and interpretation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Purpose</th><td>Storage retains water for later use; diversion raises or controls an intake level; detention or flood-control works attenuate floods. Multipurpose projects combine operating objectives.</td></tr>" +
                        "<tr><th scope='row'>Material or construction</th><td>Earthfill, rockfill, concrete, masonry, steel and timber describe different forms of construction, not one universal project purpose.</td></tr>" +
                        "<tr><th scope='row'>Structural action</th><td>Gravity sections rely chiefly on weight; arches transfer substantial load into abutments; buttresses support a water-retaining deck or arches; embankments rely on stable soil/rockfill masses and foundations.</td></tr>" +
                        "<tr><th scope='row'>Hydraulic behaviour</th><td>Overflow portions are designed to pass water over a controlled crest and protected downstream route. Non-overflow portions are not designed for overtopping.</td></tr></tbody></table>" +
                        "<p>An embankment used in a storage plant retains a reservoir, but embankment construction does not make storage its primary purpose everywhere. Flood control can itself be the main objective. Likewise, a concrete dam can include both overflow bays and non-overflow monoliths. The hydraulic classification therefore applies to the relevant structure or portion, not necessarily every metre of the barrier in the same way.</p>" +
                        "<p><strong>Non-overflow does not mean physically impossible to overtop.</strong> It means that water passing over that portion is outside its intended hydraulic function and can threaten safety. Ordinary earth and rockfill sections need an independently adequate spillway route rather than an assumption that their crests can carry uncontrolled flood flow.</p>",
                    sources: [
                        { id: "HYDR626-00029", set: 5, question: 61 },
                        { id: "HYDR626-00116", set: 14, question: 62 }
                    ]
                },
                {
                    id: "storage-dam-site-selection",
                    title: "Site and dam selection: evaluate the whole valley, not one adjective",
                    html: "<p>A dam site must provide a workable combination of storage, hydraulic routes, foundations, materials and acceptable consequences. A short dam axis or a large reservoir volume is not sufficient if the abutments are unstable, leakage cannot be controlled, the flood route is inadequate or the inundation consequences are unacceptable.</p>" +
                        "<ul><li><strong>Topography and layout:</strong> examine valley width and shape, reservoir area-volume relations, saddles, spillway and outlet routes, construction access and powerhouse location.</li>" +
                        "<li><strong>Geology and geotechnics:</strong> establish rock-mass strength, discontinuity orientation, weathering, weak seams, compressibility, permeability, faults and potential reservoir-rim instability.</li>" +
                        "<li><strong>Hydrology and sediment:</strong> assess dependable yield, flood hydrographs, sediment delivery and likely deposition near the intake and outlets.</li>" +
                        "<li><strong>Construction and operation:</strong> compare available earth, rock and aggregate, diversion needs, transport, treatment costs, maintenance and reliable gate operation.</li>" +
                        "<li><strong>People and environment:</strong> assess settlements, land acquisition, access, transmission or demand connections, ecological releases and downstream hazard consequences.</li></ul>" +
                        "<p>A conventional concrete gravity dam transmits large compressive and shear actions to its base and generally favours a strong, suitably stiff foundation. The word <em>rock</em> alone does not establish this: fractured rock may be acceptable after investigation and justified treatment, or unacceptable because of adverse discontinuities. It does not automatically require an earth dam.</p>" +
                        "<p>Earthfill can be an alternative where rigid gravity construction is unsuitable, but a wide base does not cure a weak, compressible or liquefiable foundation. Rockfill is another embankment option requiring its own assessment. A separate spillway route can favour embankment construction without uniquely selecting it. <strong>Proximity to urban centres does matter</strong> through inundation, access, demand and downstream exposure; it cannot be excluded merely because it is not a rock-strength parameter.</p>",
                    sources: [
                        { id: "HYDR626-00019", set: 4, question: 60 },
                        { id: "HYDR626-00118", set: 14, question: 64 },
                        { id: "HYDR626-00209", set: 23, question: 65 },
                        { id: "IRRI951-00114", set: 12, question: 70 },
                        { id: "IRRI951-00115", set: 12, question: 71 }
                    ]
                },
                {
                    id: "storage-arch-buttress-and-materials",
                    title: "Arch and buttress load paths; material labels and their limits",
                    html: "<p>An <strong>arch dam</strong> is curved in plan so that water loading produces substantial compressive arch thrust into the valley sides. Narrow, steep-sided valleys can make this action economical, but the decisive condition is that both abutments can resist the thrust without unacceptable sliding or deformation. Canyon shape alone does not prove arch suitability; foundation discontinuities and the three-dimensional load path must be investigated.</p>" +
                        "<p>Concrete is the sensible offered material in the bank's modern-arch question, but <strong>masonry arch dams also exist</strong>. The inspected USBR glossary includes both concrete and masonry in its arch-dam terminology. Thus <em>arch</em> and <em>concrete</em> are overlapping structural and material descriptions, not parallel, exclusive dam types.</p>" +
                        "<p>In a <strong>buttress dam</strong>, water pressure acts on an upstream slab/deck, multiple arches or another retaining surface, and the load is carried into supporting buttresses and their foundations. Reduced concrete volume comes with concentrated reactions, more structural detailing and sensitivity to the supporting foundation. The bank's reinforced-concrete deck or series of arches describes this buttress load path more precisely than the broad label <em>hollow masonry gravity dam</em>. Here an RCC deck means reinforced concrete; roller-compacted concrete is a different construction term.</p>" +
                        "<p>A hollow gravity section and a buttress arrangement must be identified from their actual geometry and resisting action, not just from the presence of voids. A concrete buttress dam is simultaneously a concrete dam, which matters when interpreting the bank's supposedly exclusive categories.</p>" +
                        "<p>Steel and timber forms have specialised or historical applications with structural, corrosion, durability and maintenance constraints. The bank's <strong>20 m steel-dam limit has no verified universal physical or code basis</strong> in the supplied research. It is an unverified historical/textbook claim, not a height limit to use for selection or approval.</p>",
                    sources: [
                        { id: "HYDR626-00117", set: 14, question: 63 },
                        { id: "HYDR626-00121", set: 14, question: 67 },
                        { id: "IRRI951-00116", set: 12, question: 72 },
                        { id: "IRRI951-00117", set: 12, question: 73 }
                    ]
                },
                {
                    id: "storage-embankment-zones-and-filters",
                    title: "Embankment section: core, shells, filters, drains and surface protection",
                    html: "<p>An earth or rockfill dam uses a broad section because stable slopes and acceptable foundation deformation govern its geometry. Its water barrier and its load-bearing zones perform different jobs. A homogeneous earthfill section, a zoned section and a rockfill section with an impervious face or core require different seepage and deformation details; no single slope or base-to-height ratio is established by the bank.</p>" +
                        "<table><thead><tr><th scope='col'>Element</th><th scope='col'>Engineering function</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Low-permeability core or membrane</th><td>Limits leakage and dissipates hydraulic head. An earth core may be central or inclined; clay is common but not the definition of every core.</td></tr>" +
                        "<tr><th scope='row'>Outer shells</th><td>Provide stable supporting masses and protect the barrier against deformation. Their strength and drainage characteristics must suit the loading cases.</td></tr>" +
                        "<tr><th scope='row'>Filter or qualifying transition</th><td>Retains particles from the adjacent finer material while transmitting water, including concentrated leakage from a crack.</td></tr>" +
                        "<tr><th scope='row'>Chimney, blanket and toe drainage</th><td>Collect and convey seepage to controlled outlets, reducing adverse pore pressure without allowing soil loss.</td></tr>" +
                        "<tr><th scope='row'>Slope protection</th><td>Upstream armour resists waves; downstream surface drainage and cover limit rainfall erosion. Neither replaces internal filters.</td></tr></tbody></table>" +
                        "<p><strong>A transition zone prevents piping only if it meets the relevant filter requirements.</strong> Merely placing an intermediate grain size between core and shell does not demonstrate retention, permeability or resistance to segregation. Compatibility must be checked across every interface, including foundation contacts and penetrations.</p>" +
                        "<p>Compaction, moisture control, continuous placement and careful treatment of steep abutment contacts help limit settlement and cracking. Check end-of-construction pore pressures, steady reservoir seepage and rapid drawdown separately. After rapid drawdown, upstream water support may disappear faster than pore pressures dissipate; this can govern the upstream slope even when the downstream slope was the main concern under steady seepage.</p>",
                    sources: [
                        { id: "HYDR626-00020", set: 4, question: 61 },
                        { id: "HYDR626-00135", set: 16, question: 62 },
                        { id: "HYDR626-00237", set: 26, question: 66 }
                    ]
                },
                {
                    id: "storage-failure-mechanisms-and-remedies",
                    title: "Failure mechanisms and remedies: diagnose the process first",
                    html: "<p>Separate an <strong>initiating hazard</strong>, such as a flood or earthquake, from the mechanism by which resistance is lost. One hazard can cause several mechanisms, and one mechanism can have several triggers. Rare regional hazards should be screened for site relevance rather than declared physically incapable of affecting a dam.</p>" +
                        "<table><thead><tr><th scope='col'>Mechanism</th><th scope='col'>Development</th><th scope='col'>Relevant preventive or remedial approach</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Overtopping erosion</th><td>Unintended flow attacks the crest or downstream face, potentially cutting back into an embankment.</td><td>Adequate routed flood passage, reliable operations, justified freeboard and protection designed for the actual overflow exposure.</td></tr>" +
                        "<tr><th scope='row'>Internal erosion</th><td>Particles migrate through cracks, contacts or susceptible foundation paths; cavities and loss of support can follow.</td><td>Compatible filters, controlled drainage, sound contacts and appropriate barriers; investigate sediment-bearing leakage.</td></tr>" +
                        "<tr><th scope='row'>Slope instability and sloughing</th><td>Adverse pore pressure lowers effective stress; shallow saturated material may repeatedly slip from the downstream face.</td><td>Drainage and filters, appropriate slope or berm changes and pore-pressure-informed stability assessment.</td></tr>" +
                        "<tr><th scope='row'>Sliding or rotational instability</th><td>Driving actions exceed resistance on a base, joint or foundation discontinuity, or move the resultant beyond the viable contact region.</td><td>Reassess loads, drainage, section geometry, shear paths and any justified anchorage.</td></tr>" +
                        "<tr><th scope='row'>Bearing, settlement or structural distress</th><td>Foundation yielding, differential movement, excessive stress or cracking damages the load path or water barrier.</td><td>Ground treatment or excavation, compatible geometry, structural and thermal detailing, monitoring and engineered repair.</td></tr></tbody></table>" +
                        "<p><strong>Sloughing</strong> is the progressive loss of material from the downstream face, often associated with saturation and shallow slips. It is not synonymous with particles first being removed from deep inside the dam: that describes internal erosion. External scour below an outlet is a third mechanism that can undermine support.</p>" +
                        "<p>Earthquake effects can include cracking, liquefaction, movement and damage to gates or drainage. Volcanic activity, where relevant, is also an initiating hazard rather than an impossible failure cause. Actual distress requires a qualified safety assessment and the applicable emergency response; adding weight, grouting or plugging a seepage outlet without diagnosing the process can worsen another mechanism.</p>",
                    sources: [
                        { id: "HYDR626-00024", set: 4, question: 65 },
                        { id: "HYDR626-00242", set: 27, question: 58 }
                    ]
                },
                {
                    id: "storage-cofferdams-and-foundation-treatment",
                    title: "Cofferdams and foundation preparation: temporary works are engineered works",
                    html: "<p>A <strong>cofferdam</strong> excludes water from a work area so that excavation and construction can proceed in controlled conditions. It is a functional description of temporary works, not one exclusive material or resisting system. Earthfill, rockfill, sheet-pile and concrete arrangements are possible. Upstream and downstream cofferdams may work with a diversion tunnel or channel; pumping alone is not a substitute for a viable diversion and seepage-control layout.</p>" +
                        "<p>Temporary works require construction-stage flood passage, stability, leakage, dewatering and safe-access assessments. Lowering water inside a cofferdam increases the head difference through its foundation and can cause heave or soil loss. A dry-looking surface does not establish a stable or depressurised foundation.</p>" +
                        "<ol><li><strong>Investigate:</strong> map foundation and abutment conditions, drill and test where needed, and identify discontinuities, weak zones and permeability.</li>" +
                        "<li><strong>Prepare the contact:</strong> remove unsuitable material, clean the exposed surface and shape or treat local defects so the dam can transfer loads without unsupported pockets.</li>" +
                        "<li><strong>Match treatment to purpose:</strong> use an appropriate grout curtain or cutoff for leakage control, consolidation treatment where justified, and drainage for pressure relief.</li>" +
                        "<li><strong>Verify and record:</strong> inspect the treated contact, evaluate treatment response, establish monitoring and retain construction records for operation.</li></ol>" +
                        "<p>Grouting fills accessible openings; it cannot be assumed to repair every adverse rock wedge or weak seam. Controlled blasting is mainly an excavation/preparation technique and must avoid unnecessary damage to the remaining rock. Piles are a site-specific structural or ground-engineering measure, not an interchangeable substitute for grouting or drainage. The bank's broad list of foundation treatments must not be read as a prescription to use all of them at every dam.</p>",
                    sources: [
                        { id: "HYDR626-00249", set: 27, question: 65 },
                        { id: "HYDR626-00244", set: 27, question: 60 }
                    ]
                },
                {
                    id: "storage-seepage-control-and-monitoring",
                    title: "Seepage control: barriers, filters and drains are not interchangeable",
                    html: "<p>Seepage can pass through the dam, beneath it, around the abutments and along joints or penetrations. The objective is to keep leakage, pressures, gradients and particle transport within acceptable limits, not to promise that all subsurface flow becomes zero. Fractures and fissures matter, but so do bulk permeability, stratification, groundwater boundaries and the continuity of the treatment.</p>" +
                        "<table><thead><tr><th scope='col'>Measure</th><th scope='col'>What it changes</th><th scope='col'>What it does not prove</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Core, cutoff or grout curtain</th><td>Introduces a lower-permeability barrier and changes the distribution of hydraulic head.</td><td>Perfect sealing, zero uplift everywhere or immunity to external scour.</td></tr>" +
                        "<tr><th scope='row'>Filter</th><td>Allows water passage while retaining the adjacent soil.</td><td>An impervious barrier or a zero-pressure boundary.</td></tr>" +
                        "<tr><th scope='row'>Drain</th><td>Provides a controlled outlet that can lower pore pressures when adequately sized and maintained.</td><td>Safe soil retention without compatible filters, or effectiveness under every blocked/backwater condition.</td></tr></tbody></table>" +
                        "<p><small>For saturated Darcy flow, total head is h = z + u/γ<sub>w</sub>; the gradient magnitude is i = |dh/ds|. For an ideal homogeneous isotropic flow net, seepage per unit transverse width is q′ = kΔH N<sub>f</sub>/N<sub>d</sub>.</small> These syllabus relationships need hydraulic conductivity k, actual boundaries and a defensible flow model. Fractured or layered foundations may not resemble a homogeneous two-dimensional medium.</p>" +
                        "<p>Reducing total leakage does not necessarily reduce every local gradient. A cutoff changes the entire flow field and can concentrate head loss near an end or defect. Maintain continuity at the core-foundation and abutment contacts, and protect seepage exits against internal erosion. Preventing undermining by piping is distinct from preventing a discharge jet from scouring away the downstream bed.</p>" +
                        "<p>Monitor piezometric levels, drain flows, leakage clarity and deformation together with reservoir and tailwater levels. Clear leakage can still indicate excessive pressure or an evolving path; sediment-bearing leakage is especially concerning. A fall in drain flow may mean reduced inflow or a blocked drain, so interpretation needs several observations rather than a single reassuring reading.</p>",
                    sources: [
                        { id: "HYDR626-00120", set: 14, question: 66 },
                        { id: "HYDR626-00243", set: 27, question: 59 },
                        { id: "HYDR626-00250", set: 27, question: 66 }
                    ]
                },
                {
                    id: "storage-gravity-loads-and-signed-moments",
                    title: "Gravity-dam free body: a signed load and moment diagram in words",
                    html: "<p>Take a one-metre-long strip along a straight dam axis. In section, the reservoir is on the left, the <strong>heel is x = 0</strong>, the downstream <strong>toe is x = B</strong>, and the horizontal base is z = 0. Positive x is downstream; positive z and vertical force F<sub>z</sub> are upward. Use <strong>clockwise moments as positive</strong>. The foundation supplies a compressive contact resultant and a shear reaction at the base.</p>" +
                        "<p><strong>Text diagram:</strong> water thrust acts downstream on the upstream face; tailwater thrust acts upstream on the downstream face; full dam weight acts downward through the section centroid; uplift acts upward beneath the base. For a force at (x,z), its signed toe moment is <small>M<sub>toe</sub> = zF<sub>x</sub> + (B − x)F<sub>z</sub></small>. This fixes signs without guessing which arrow is favourable.</p>" +
                        "<table><thead><tr><th scope='col'>Action on the strip</th><th scope='col'>Line of action</th><th scope='col'>Clockwise toe moment</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Full self-weight W</th><td>Downward at centroid x<sub>G</sub>; W = γ<sub>c</sub>A<sub>section</sub> × 1 m.</td><td>−W(B − x<sub>G</sub>).</td></tr>" +
                        "<tr><th scope='row'>Upstream hydrostatic thrust P<sub>u</sub></th><td>For a vertical face, P<sub>u</sub> = γ<sub>w</sub>H<sub>u</sub><sup>2</sup> × 1 m / 2, downstream at H<sub>u</sub>/3 above the base.</td><td>+P<sub>u</sub>H<sub>u</sub>/3.</td></tr>" +
                        "<tr><th scope='row'>Tailwater horizontal thrust P<sub>d</sub></th><td>For its vertical projection, upstream at H<sub>d</sub>/3 above the same base.</td><td>−P<sub>d</sub>H<sub>d</sub>/3.</td></tr>" +
                        "<tr><th scope='row'>Uplift U</th><td>Upward at the centroid x<sub>U</sub> of the actual underside-pressure diagram.</td><td>+U(B − x<sub>U</sub>).</td></tr></tbody></table>" +
                        "<p>These water-thrust expressions assume hydrostatic triangular distributions from the free surface to the stated base. On sloping wetted faces, resolve the additional vertical water-pressure components and include their own lever arms. A vertical upstream face has no hydrostatic vertical component. Represent sediment-skeleton pressure separately from pore-water pressure; do not count the same water pressure twice.</p>" +
                        "<p>For this horizontal-base free body, <small>N = W + other downward actions − U − other upward actions</small>, and T is the net downstream driving action. Use <strong>full weight minus explicit uplift</strong>, not buoyant concrete weight followed by another subtraction of the same uplift. Evaluate empty, normal, flood, drain-impaired and applicable seismic/post-earthquake states separately. Self-weight is the main stabilising contribution, but its presence does not establish adequate contact, sliding, overturning or bearing resistance.</p>",
                    sources: [
                        { id: "HYDR626-00122", set: 14, question: 68 },
                        { id: "IRRI951-00122", set: 12, question: 77 }
                    ]
                },
                {
                    id: "storage-uplift-pressure-and-drain-limits",
                    title: "Uplift: pressure datum, resultant and limits on drainage credit",
                    html: "<p>Uplift is water pressure acting upward on the chosen base or joint. With local piezometric elevation H<sub>p</sub> and underside elevation z<sub>b</sub>, <small>u = γ<sub>w</sub>(H<sub>p</sub> − z<sub>b</sub>)</small>. The pressure head is measured above the <strong>actual underside</strong>, not above the crest or an unrelated ground datum. Integrate pressure to obtain a force, and integrate its moment to locate that force.</p>" +
                        "<p>As an explicitly idealised undrained example, take a horizontal base of width B with a linear pressure-head diagram from h<sub>u</sub> at the heel to h<sub>d</sub> at the toe. Both heads are above that base; for strip length ℓ = 1 m:</p>" +
                        "<p><small>U = γ<sub>w</sub>Bℓ(h<sub>u</sub> + h<sub>d</sub>)/2.</small></p>" +
                        "<p><small>x<sub>U</sub> = B(h<sub>u</sub> + 2h<sub>d</sub>)/[3(h<sub>u</sub> + h<sub>d</sub>)] from the heel, when the head sum is positive.</small></p>" +
                        "<p>For h<sub>d</sub> = 0, this is a triangle and x<sub>U</sub> = B/3; equal heads give uniform pressure at B/2. Zero pressure everywhere gives U = 0 and no meaningful uplift centroid. With γ<sub>w</sub> in kN/m<sup>3</sup> and dimensions in metres, U is kN for the strip, while U/ℓ is kN/m along the dam.</p>" +
                        "<p>A drain gallery usually requires a <strong>piecewise pressure diagram</strong>, with drain pressure related to the outlet elevation and backpressure. Do not multiply every base pressure by an assumed drain-efficiency percentage. Tailwater, outlet restrictions, blockage and changing reservoir levels affect drainage; a drain's presence is not proof of its effectiveness.</p>" +
                        "<p>The supplied primary-source review identifies FERC Chapter III, dated 4 March 2016, as requiring justified drainage assumptions and attention to cracking, maintenance and extrapolation beyond demonstrated conditions. A connected crack may admit reservoir pressure and invalidate previous drainage credit. Uplift and pore-pressure effects also matter in buttress dams, cofferdams and embankments; they are not exclusive to a category labelled concrete. If N becomes nonpositive, a full-contact compressive-base model is no longer available.</p>",
                    sources: [{ id: "IRRI951-00057", set: 7, question: 69 }]
                },
                {
                    id: "storage-contact-stress-and-kern",
                    title: "Resultant and contact stress: the middle third, with a worked force ledger",
                    html: "<p><em>Source-free syllabus extension: no assigned item supplies a complete numerical load-and-contact-stress ledger.</em> For a rectangular base B by ℓ with N &gt; 0, assume <strong>linear-elastic stress distribution and full contact</strong>. Let M<sub>c</sub> be the net clockwise moment of external loads about the base centre, excluding the foundation contact reaction. Positive eccentricity e is downstream.</p>" +
                        "<p><small>e = M<sub>c</sub>/N; x<sub>R</sub> = B/2 + e; A<sub>b</sub> = Bℓ; Z<sub>b</sub> = ℓB<sup>2</sup>/6.</small></p>" +
                        "<p><small>σ<sub>toe</sub> = (N/A<sub>b</sub>)(1 + 6e/B); σ<sub>heel</sub> = (N/A<sub>b</sub>)(1 − 6e/B).</small></p>" +
                        "<p>Requiring both edge pressures to be nonnegative gives <strong>|e| ≤ B/6</strong>, or B/3 ≤ x<sub>R</sub> ≤ 2B/3. This interval is the <strong>middle third</strong>: the limiting distance on either side of the centre is one sixth, but the complete permissible interval is one third of B. At the boundary one edge pressure is zero. Outside it, a no-tension interface needs a revised contact/cracking and uplift analysis, not a fictitious tensile soil reaction.</p>" +
                        "<p><strong>Explicit illustration, not bank givens:</strong> a rectangular strip is 6 m wide, 8 m high and 1 m long; γ<sub>c</sub> = 24 kN/m<sup>3</sup>, γ<sub>w</sub> = 10 kN/m<sup>3</sup>, upstream depth is 6 m, and tailwater is zero. Assume linear undrained uplift from 60 kPa at the heel to zero at the toe, and no other loads. Clockwise moments are positive.</p>" +
                        "<table><thead><tr><th scope='col'>Load</th><th scope='col'>Force and position</th><th scope='col'>Toe moment, kN m</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Weight</th><td>W = 24 × 6 × 8 = 1152 kN downward at x = 3 m.</td><td>−1152 × 3 = −3456.</td></tr>" +
                        "<tr><th scope='row'>Water thrust</th><td>P = 10 × 6<sup>2</sup>/2 = 180 kN downstream at z = 2 m.</td><td>+180 × 2 = +360.</td></tr>" +
                        "<tr><th scope='row'>Uplift</th><td>U = 60 × 6/2 = 180 kN upward at x = 2 m.</td><td>+180 × 4 = +720.</td></tr></tbody></table>" +
                        "<p>Thus N = 972 kN and M<sub>toe</sub> = −2376 kN m. Moving the reference to the centre gives M<sub>c</sub> = M<sub>toe</sub> + NB/2 = 540 kN m. Hence e = 0.5556 m, x<sub>R</sub> = 3.5556 m and N/A<sub>b</sub> = 162 kPa. The edge pressures are <strong>252 kPa at the toe and 72 kPa at the heel</strong>. The resultant satisfies this model's kern condition, but no foundation strength or friction data have been supplied to establish overall safety.</p>",
                    sources: []
                },
                {
                    id: "storage-sliding-resistance-and-keys",
                    title: "Sliding: effective normal force, shear strength and foundation keys",
                    html: "<p>Sliding is relative movement along a particular base, construction joint or foundation surface. Start by identifying a plausible sliding path. A strong concrete-rock contact is not sufficient if an adversely oriented weak seam below it allows a larger dam-foundation block to move.</p>" +
                        "<p>For a horizontal candidate plane with compressive effective normal force N and net driving shear T &gt; 0, a simplified resistance expression is:</p>" +
                        "<p><small>R = c′A<sub>contact</sub> + N tan φ′; FS<sub>slide</sub> = R/T. For friction only, c′ = 0 and μ = tan φ′, so FS<sub>slide</sub> = μN/T.</small></p>" +
                        "<p>Use strength parameters appropriate to the interface, material condition and loading history. Credit cohesion only where justified, over contact that actually exists. Cracking, cyclic loading or weak infill may change the resistance model. For an inclined plane resolve all loads, including water pressures, into that plane's normal and tangential directions rather than calling every vertical force N.</p>" +
                        "<p>Widening a gravity section can add weight and improve its force and moment balance, but <strong>contact area alone does not increase Coulomb friction μN at fixed N</strong>. A revised width also changes uplift and stress distribution. A foundation step or key can mobilise bearing, interlock and shear across a different failure path; it is not a free increase in μ merely because the apparent surface is longer.</p>" +
                        "<p>Possible engineered improvements include a revised section, justified drainage, treatment of weak planes, properly designed keys or anchorage into competent material. Do not count the same key action twice as both an unexplained friction increase and a separate resistance. Anchorage at the foundation can be a valid remedy when its entire load path is established.</p>" +
                        "<p>Unity is the elementary limit of resistance equalling demand, not a recommended safety factor. The bank's <strong>more than 3 to 5</strong> shear-friction claim has no stated definition, cohesion basis, load case or governing criterion. It must not be promoted to a current universal sliding requirement, nor substituted for a friction-only calculation.</p>",
                    sources: [
                        { id: "HYDR626-00025", set: 4, question: 66 },
                        { id: "HYDR626-00027", set: 4, question: 68 },
                        { id: "HYDR626-00030", set: 5, question: 62 }
                    ]
                },
                {
                    id: "storage-overturning-check",
                    title: "Overturning: moment equilibrium is separate from the kern and sliding",
                    html: "<p><em>Source-free syllabus extension for the independent overturning check.</em> Retain the signed toe convention: clockwise is positive. Split external actions into clockwise overturning moments M<sub>O</sub> and counterclockwise resisting moments M<sub>R</sub>, both expressed as positive magnitudes. Include uplift with its actual lever arm; do not subtract it from weight at the weight centroid and then add its toe moment again.</p>" +
                        "<p><small>M<sub>toe</sub> = M<sub>O</sub> − M<sub>R</sub>. For N &gt; 0, the contact resultant's distance upstream of the toe is b<sub>R</sub> = (M<sub>R</sub> − M<sub>O</sub>)/N; x<sub>R</sub> = B − b<sub>R</sub>.</small></p>" +
                        "<p>A traditional moment ratio is <small>FS<sub>OT</sub> = M<sub>R</sub>/M<sub>O</sub></small> when M<sub>O</sub> &gt; 0. Its definition and required value must come from the adopted assessment method and load case. Some procedures express the acceptance through resultant/contact or other stability criteria instead. No numerical target is inferred from the existence of this ratio.</p>" +
                        "<p>For the preceding <strong>source-free rectangular illustration</strong>, M<sub>R</sub> = 3456 kN m and M<sub>O</sub> = 360 + 720 = 1080 kN m. The moment ratio is 3.2 and b<sub>R</sub> = 2376/972 = 2.4444 m, giving the same x<sub>R</sub> = 3.5556 m as the centre-moment calculation. This is an arithmetic equilibrium check, not a code acceptance statement.</p>" +
                        "<p>A resultant can remain inside the physical base while being outside the middle third. Thus not reaching a rigid-body toe-pivot condition does not establish full compression. Conversely, a satisfactory moment ratio does not supply shear strength or an allowable bearing pressure.</p>" +
                        "<p>Check both loading directions when reservoir, tailwater or seismic actions change. An empty reservoir does not necessarily mean zero foundation water pressure, and high tailwater can provide opposing thrust while also raising uplift. Rebuild the complete force ledger for each case rather than transferring one favourable moment ratio to another operating state.</p>",
                    sources: []
                },
                {
                    id: "storage-bearing-and-structural-stress",
                    title: "Bearing and structural stresses: compression is not automatically acceptable",
                    html: "<p><em>Source-free syllabus extension: the assigned bank supplies no project bearing limit, foundation deformability model or complete structural-strength dataset.</em> The kern check only asks whether a specified linear full-contact model predicts tension. The <strong>bearing check</strong> asks whether the foundation can carry the resulting contact pressures and associated shear without unacceptable yielding, movement or settlement.</p>" +
                        "<p><small>For a valid full-contact model, compare σ<sub>max</sub> = (N/A<sub>b</sub>)(1 + 6|e|/B) with the bearing resistance or allowable pressure defined by the adopted design method and load case.</small> Keep characteristic, factored, ultimate and allowable quantities on the same basis. No allowable pressure can be deduced solely from the concrete's specific gravity or the foundation being described as strong.</p>" +
                        "<p>The source-free contact example gives σ<sub>max</sub> = 252 kPa. Without a corresponding justified foundation criterion, that value is neither a demonstrated pass nor a demonstrated failure. If contact opens, using the original full width can understate the peak compression; determine the effective contact, update water pressure where relevant and recalculate the stresses.</p>" +
                        "<ul><li><strong>Foundation response:</strong> consider weathered zones, weak seams, bearing resistance, differential deformation and the stability of possible rock wedges.</li>" +
                        "<li><strong>Dam-body response:</strong> check concrete or masonry compression, principal stresses, shear and joints; base pressure is not the complete internal stress field.</li>" +
                        "<li><strong>Detailing and construction:</strong> galleries, openings, lift joints, thermal gradients, shrinkage and restraint create local demands that an elementary triangular profile omits.</li></ul>" +
                        "<p>Possible improvements include a different section or foundation level, removal or treatment of weak material, improved contact detailing and a compatible structural layout. More weight may improve sliding while increasing bearing demand. Draining a joint may reduce uplift but requires a durable outlet and monitoring. Each proposed remedy must therefore be checked against the other failure mechanisms rather than accepted because one calculated factor improves.</p>",
                    sources: []
                },
                {
                    id: "storage-elementary-profile-worked",
                    title: "The 35 m elementary gravity profile: no tension and sliding both checked",
                    html: "<p>The bank gives H = 35 m, concrete specific gravity S<sub>c</sub> = 2.4, μ = 0.7 and <strong>no uplift</strong>. The elementary interpretation is a triangular section with vertical upstream face, zero crest width and water depth equal to H. Take a horizontal base, no tailwater, no cohesion and no sediment, wave or earthquake actions. This is a proportioning model, not a complete dam design.</p>" +
                        "<p>For a unit-length strip, weight acts at x<sub>G</sub> = B/3 from the heel and hydrostatic thrust at H/3 above the base:</p>" +
                        "<p><small>W = S<sub>c</sub>γ<sub>w</sub>BH × 1 m / 2; P = γ<sub>w</sub>H<sup>2</sup> × 1 m / 2; U = 0.</small></p>" +
                        "<p><small>e = −B/6 + PH/(3W) = −B/6 + H<sup>2</sup>/(3S<sub>c</sub>B).</small></p>" +
                        "<p>The reservoir-full no-tension condition e ≤ B/6 gives <small>B ≥ H/√S<sub>c</sub></small>. With the reservoir empty in this elementary dry-base model, weight alone lies at x = B/3, the upstream boundary of the middle third. The full-reservoir boundary gives:</p>" +
                        "<table><thead><tr><th scope='col'>Independent elementary check</th><th scope='col'>Calculation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>No-tension base width</th><td>B<sub>NT</sub> = 35/√2.4 = <strong>22.5924 m</strong>.</td></tr>" +
                        "<tr><th scope='row'>Friction-only incipient sliding</th><td>μW/P = μS<sub>c</sub>B/H. Setting resistance equal to demand gives B<sub>incipient</sub> = 35/(0.7 × 2.4) = <strong>20.8333 m</strong>.</td></tr>" +
                        "<tr><th scope='row'>Sliding ratio at B<sub>NT</sub></th><td>FS<sub>slide</sub> = 0.7√2.4 = <strong>1.0844</strong>.</td></tr></tbody></table>" +
                        "<p>The keyed <strong>22.6 m</strong> agrees with the larger of these two elementary widths. The friction coefficient cancels from the no-tension derivation but is still needed for the separate sliding check. A required sliding ratio F<sub>req</sub> would instead impose <small>B ≥ F<sub>req</sub>H/(μS<sub>c</sub>)</small> under the same assumptions; no such required value is given.</p>" +
                        "<p><strong>FS = 1.0844 is not a validated safe design.</strong> Bearing, material stresses, a practical crest and freeboard, foundation geometry, uplift in real operating cases and adopted acceptance criteria remain missing. Do not introduce an S<sub>c</sub> − 1 denominator by silently replacing the explicitly stated no-uplift case with a buoyant-weight model.</p>",
                    sources: [{ id: "HYDR626-00222", set: 25, question: 58 }]
                },
                {
                    id: "storage-seismic-acceleration-and-inertia",
                    title: "Earthquake signs: ground acceleration is opposite to equivalent inertia",
                    html: "<p><strong>Newtonian sign illustration, not a complete seismic assessment:</strong> idealise the dam strip as a rigid mass moving with the ground and hold other water loads fixed. Use upward a<sub>y</sub> and downstream a<sub>x</sub> as positive accelerations. With mass m = W/g, an equivalent inertial force is <small>F<sub>I</sub> = −ma</small>. It is opposite to acceleration; it is not an additional real force in the inertial-frame Newton equation.</p>" +
                        "<p>The actual vertical force balance is <small>N + U − W = ma<sub>y</sub></small>. Therefore:</p>" +
                        "<p><small>N = W(1 + a<sub>y</sub>/g) − U.</small></p>" +
                        "<table><thead><tr><th scope='col'>Ground/dam acceleration</th><th scope='col'>Equivalent dam inertia</th><th scope='col'>Effect in this fixed-water-load model</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Upward, a<sub>y</sub> &gt; 0</th><td>Downward.</td><td>N and average compressive base pressure increase.</td></tr>" +
                        "<tr><th scope='row'>Downward, a<sub>y</sub> &lt; 0</th><td>Upward.</td><td>N and friction available from N decrease.</td></tr>" +
                        "<tr><th scope='row'>Toward the reservoir, a<sub>x</sub> &lt; 0</th><td>Downstream, F<sub>Ix</sub> &gt; 0.</td><td>Dam inertia adds to downstream driving action and its clockwise toe moment.</td></tr>" +
                        "<tr><th scope='row'>Away from the reservoir, a<sub>x</sub> &gt; 0</th><td>Upstream.</td><td>Dam inertia reverses; the complete response and load combination still require assessment.</td></tr></tbody></table>" +
                        "<p>For the horizontal rigid-body illustration, apply F<sub>Ix</sub> at the mass centroid; its toe moment is <small>z<sub>G</sub>F<sub>Ix</sub></small>. A force itself directed toward the reservoir does not add to downstream hydrostatic thrust. The bank's direction statements must identify whether they mean acceleration or equivalent inertia.</p>" +
                        "<p>If a downward acceleration of <strong>0.1g is explicitly assumed</strong>, N = 0.9W − U and the reduction is 0.1W. The source stem does not supply that magnitude. This is not automatically a 10% reduction of W − U, and it does not imply a 10% change in uplift.</p>" +
                        "<p>Upward ground acceleration can raise bearing demand even though it increases frictional normal force, so neither sign is universally beneficial for every limit state. Actual dam acceleration, reservoir pressure and structural deformation vary dynamically. These equations correct sign reasoning only; they do not imply approval of a pseudostatic seismic-design procedure.</p>",
                    sources: [
                        { id: "IRRI951-00118", set: 1, question: 70 },
                        { id: "IRRI951-00119", set: 12, question: 74 },
                        { id: "IRRI951-00120", set: 12, question: 75 },
                        { id: "IRRI951-00124", set: 13, question: 69 }
                    ]
                },
                {
                    id: "storage-hydrodynamics-and-seismic-scope",
                    title: "Hydrodynamic pressure and the boundary of elementary seismic formulas",
                    html: "<p>Reservoir water resists acceleration, producing a time-varying pressure component in addition to static hydrostatic pressure. In the intended rigid-body bank picture, acceleration of the dam toward the reservoir produces increased upstream-face hydrodynamic loading. Wave propagation direction, dam acceleration and the direction of an equivalent dam inertial force are different quantities.</p>" +
                        "<p>A hydrodynamic assessment needs a pressure distribution, not just a total-force coefficient. For a vertical face and z measured upward from the base:</p>" +
                        "<p><small>P′<sub>e</sub>(t) = ∫ p<sub>e</sub>(z,t) dz; M′<sub>e</sub>(t) = ∫ z p<sub>e</sub>(z,t) dz.</small></p>" +
                        "<p>The integration is over the wetted face. P′<sub>e</sub> is force per metre of dam and M′<sub>e</sub> is moment per metre; multiply by the strip length for strip actions. A resultant lever arm, when defined, is M′<sub>e</sub>/P′<sub>e</sub>. It must not automatically be assigned the hydrostatic H/3 lever arm. Reservoir geometry, compressibility, boundary behaviour, foundation interaction and structural response affect an applicable dynamic model.</p>" +
                        "<p><strong>Flagged bank expression, not a verified design formula:</strong> IRRI951-00126 is interpreted in its explanation as <small>P′<sub>e</sub> = 0.555k<sub>h</sub>γ<sub>w</sub>H<sup>2</sup></small>. With dimensionless k<sub>h</sub>, water unit weight γ<sub>w</sub> and water depth H, this has kN/m units. Dimensional consistency does not verify the coefficient, its assumptions or the claimed <em>von Kármán</em> attribution. That attribution was not established by the inspected primary material in the supplied research; the expression is retained only for identifying the bank claim.</p>" +
                        "<p><strong>FERC Chapter III, 4 March 2016, explicitly rejects the pseudostatic method for its evaluation procedure.</strong> The supplied review identifies its dynamic-analysis and post-earthquake damage/stability requirements. The Newtonian sign illustration in these notes is therefore not presented as a complete FERC-accepted method. A dynamic acceptance entry marked not applicable does not mean zero safety is required.</p>" +
                        "<p>The bank's <strong>0.1g–0.15g</strong> range is not generically sufficient for high dams in seismic zones. Site hazard, appropriate ground motions or spectra, response, damage mechanisms and performance criteria are needed. No current Nepal adoption or project approval is asserted for any reference here.</p>",
                    sources: [
                        { id: "IRRI951-00121", set: 12, question: 76 },
                        { id: "IRRI951-00125", set: 13, question: 70 },
                        { id: "IRRI951-00126", set: 13, question: 71 }
                    ]
                },
                {
                    id: "storage-waves-and-freeboard",
                    title: "Reservoir waves: conditional bank arithmetic and a separate freeboard check",
                    html: "<p>Wind-generated waves can impose fluctuating forces, run up the upstream face and contribute to crest exceedance. Relevant inputs include over-water wind, direction and duration, effective fetch, reservoir depth, wave period, face geometry and the water level for the assessed event. Fetch is an over-water generation distance, not simply the reservoir's greatest map dimension regardless of wind direction.</p>" +
                        "<p><strong>Legacy heuristic used by the bank:</strong> its explanation applies the following empirical expressions, with V entered in km/h, F in km and h<sub>w</sub> obtained in metres:</p>" +
                        "<p><small>h<sub>w</sub> = 0.032√(VF); P′<sub>w</sub> = 19.62h<sub>w</sub><sup>2</sup> kN/m when h<sub>w</sub> is entered in metres.</small></p>" +
                        "<p>The numerical constants belong to those unit conventions. The origin, validity range and wave-height type are <strong>unverified</strong> in the supplied primary research: h<sub>w</sub> cannot be confidently labelled significant, mean or maximum wave height. These are conditional bank expressions, not current universal wave-design rules.</p>" +
                        "<table><thead><tr><th scope='col'>Bank quantity</th><th scope='col'>Working</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Wind and fetch</th><td>V = 172 km/h; F = 52 km; VF = 8944.</td></tr>" +
                        "<tr><th scope='row'>Heuristic wave height</th><td>0.032√8944 = <strong>3.0263 m</strong>; retain the unrounded value in the next step.</td></tr>" +
                        "<tr><th scope='row'>Heuristic force</th><td>19.62 × 0.032<sup>2</sup> × 8944 = <strong>179.6928 kN/m</strong> along the dam.</td></tr></tbody></table>" +
                        "<p>The numerical option 180 agrees approximately, but the result is <strong>kN per metre</strong>, not a total force in kN unless a one-metre strip is explicitly understood. Using the printed intermediate 3.02 instead gives 178.9422 kN/m; it cannot reproduce 179.69 exactly. No wave-force lever arm is supplied by these two equations.</p>" +
                        "<p>Freeboard is the difference between the dam crest elevation and a <strong>specified reservoir water-surface level</strong>. Its assessment must allow for the applicable flood, wind setup, wave runup and settlement conditions and their justified combinations. It is not merely h<sub>w</sub>, the head above a spillway crest, or a fixed addition to an energy line. The missing wave provenance and site data prevent a defensible freeboard dimension from this bank problem alone.</p>",
                    sources: [{ id: "IRRI951-00123", set: 12, question: 78 }]
                },
                {
                    id: "storage-intake-arrangements",
                    title: "Storage intakes: dam, tower and submerged arrangements",
                    html: "<p>An intake must admit the required water reliably throughout its operating range while limiting debris entry, air entrainment and avoidable hydraulic losses. Its location and elevation must be coordinated with minimum reservoir level, sediment deposition, the power waterway and safe inspection and isolation.</p>" +
                        "<table><thead><tr><th scope='col'>Arrangement</th><th scope='col'>Useful application</th><th scope='col'>Important qualification</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Dam intake</th><td>An inlet incorporated in or immediately associated with the dam can feed a short pressure route to a dam-toe powerhouse.</td><td>Its penetrations, gates and load transfer must be compatible with the dam; not every plant in a valley has this layout.</td></tr>" +
                        "<tr><th scope='row'>Tower intake</th><td>A tower can provide accessible controls and, where designed, ports at several elevations for changing levels or selective withdrawal.</td><td>Multiple ports and water-quality selection are design features, not automatic properties of every tower.</td></tr>" +
                        "<tr><th scope='row'>Submerged intake</th><td>An underwater inlet can remain below the minimum operating surface and connect to a tunnel or conduit.</td><td>Submerged does not necessarily mean lying on the bed; sediment blockage, submergence and maintenance still need checks.</td></tr></tbody></table>" +
                        "<p>The bank favours a tower for a fluctuating reservoir, but fluctuations alone do not rule out a suitably placed fixed submerged intake. If selective water quality is not required, a multilevel arrangement still needs justification rather than being imposed by the wording. Conversely, intake-depth choices can affect temperature and other release-quality conditions even in a power project.</p>" +
                        "<p>Define the bank's <em>valley-type plant</em> as an intended integrated dam-toe arrangement before interpreting its dam-intake answer. Siting a powerhouse somewhere in a valley is not sufficient.</p>" +
                        "<p>Provide a smooth approach, suitable screen/rack access and a means of isolating the waterway for maintenance. Maintain clearance above anticipated sediment and sufficient submergence below the lowest operating surface; these are separate dimensions. An inlet that clears sediment may still draw an air-core vortex, and a deeply submerged inlet may still become buried or inaccessible.</p>",
                    sources: [
                        { id: "HYDR626-00216", set: 24, question: 64 },
                        { id: "HYDR626-00217", set: 24, question: 65 }
                    ]
                },
                {
                    id: "storage-intake-net-area-and-losses",
                    title: "Intake sizing extension: gross area, clear area, blockage and losses",
                    html: "<p><em>Source-free syllabus extension: no assigned intake question supplies a complete discharge, rack geometry, operating-level and loss dataset.</em> Continuity supplies an area only after the velocity definition is fixed. With design admission Q and a justified net-opening velocity V<sub>net</sub>, <small>A<sub>net,required</sub> = Q/V<sub>net</sub></small>. Discharge is in m<sup>3</sup>/s, velocity in m/s and area in m<sup>2</sup>.</p>" +
                        "<p>Let A<sub>gross</sub> be the gross projected rack area, f<sub>clear</sub> its initially clear fraction after bars and supports, and β the fraction of that initially clear area assumed blocked in the assessed condition. Then:</p>" +
                        "<p><small>A<sub>net</sub> = A<sub>gross</sub>f<sub>clear</sub>(1 − β); A<sub>gross,required</sub> = Q/[V<sub>net</sub>f<sub>clear</sub>(1 − β)].</small></p>" +
                        "<p>For identical straight bars alone, with projected bar width b and clear spacing s, <small>f<sub>clear</sub> = s/(s + b)</small>. Frames, braces, rack inclination and the chosen projection may require additional treatment. If net area already excludes bars, do not deduct their blockage again. Gross-face velocity Q/A<sub>gross</sub> and through-opening velocity Q/A<sub>net</sub> are not interchangeable.</p>" +
                        "<ol><li>Establish admission for the operating cases, including only releases or flushing flows actually passing through this intake.</li>" +
                        "<li>Select a permissible velocity and blockage condition from the project's debris, equipment, environmental, cleaning and hydraulic requirements; no arbitrary universal percentage is supplied here.</li>" +
                        "<li>Evaluate rack, entrance, gate and transition losses using coefficients consistent with their stated reference velocities. In a local-loss expression h<sub>L</sub> = K V<sub>ref</sub><sup>2</sup>/(2g), the definition of V<sub>ref</sub> is essential.</li>" +
                        "<li>Check minimum-level submergence, vortices, pressure conditions, sediment clearance and the differential head on a partially blocked rack; provide access and isolation.</li></ol>" +
                        "<p>A = Q/V is not a submergence or structural design. Rack clogging can change both velocity distribution and loss coefficient. The supplied review verifies intake-control, submergence and turbine-dependent fine-rack considerations in AEPC's 2014 update, but that reference is principally for micro/pico plants up to 100 kW. Its numerical rules are not transferred to large storage intakes.</p>",
                    sources: []
                },
                {
                    id: "storage-spillway-functions-and-flood-routing",
                    title: "Spillway function: flood routing, outlet availability and crest protection",
                    html: "<p>A spillway safely passes surplus and flood water from the reservoir to the downstream river. A <strong>service spillway</strong> can operate during ordinary surplus conditions; auxiliary or emergency provisions serve separately defined additional or exceptional functions. Calling every spillway only an emergency release obscures its normal hydraulic role.</p>" +
                        "<p>Outlet works can provide controlled releases and reservoir drawdown below a spillway crest. Turbines are a separate release path and may be unavailable during a flood. Flood capacity must not silently assume that all generating units, gates and power supplies remain available.</p>" +
                        "<p><strong>Syllabus extension for flood routing:</strong> over a short flood event, if direct rainfall, evaporation and other unlisted fluxes are neglected, reservoir continuity is <small>dS/dt = I(t) − Q<sub>spill</sub> − Q<sub>outlet</sub> − Q<sub>turbine</sub></small>. Storage S depends on reservoir level, and each release depends on level and operating state. An inflow hydrograph, initial storage, stage-storage relation and outlet ratings are needed; a peak inflow alone does not determine the maximum reservoir level.</p>" +
                        "<ul><li>Route the adopted event and assess the relevant gate states, debris blockage and operational constraints.</li>" +
                        "<li>Check maximum water level and the justified freeboard of non-overflow portions, including settlement and applicable wave conditions.</li>" +
                        "<li>Provide a continuous protected route through the control, conveyance and energy-dissipation sections to the receiving river.</li></ul>" +
                        "<p>Insufficient spillway capacity is an important overtopping cause, but the supplied bank provides no evidence that it is the universal most common cause. Blockage, misoperation, crest settlement and wave-related exceedance can also contribute. Flood consequences and reliability belong in the assessment, not just nominal discharge at fully open gates.</p>" +
                        "<p>A large required spillway can favour a suitable overflow section, but it does not independently choose the entire dam type. An embankment project may have a large separate concrete or excavated spillway. Passing water over an engineered overflow portion is fundamentally different from uncontrolled overtopping of an ordinary earthfill crest.</p>",
                    sources: [
                        { id: "HYDR626-00123", set: 15, question: 58 },
                        { id: "HYDR626-00239", set: 26, question: 67 },
                        { id: "HYDR626-00247", set: 27, question: 63 },
                        { id: "HYDR626-00248", set: 27, question: 64 }
                    ]
                },
                {
                    id: "storage-spillway-forms-and-shaft-control",
                    title: "Spillway forms and the changing controls of a morning-glory inlet",
                    html: "<p>Spillway selection combines valley geometry, foundation conditions, required capacity, acceptable head, debris, constructibility and the discharge route. A named inlet form does not by itself provide the downstream protection or the complete discharge rating.</p>" +
                        "<table><thead><tr><th scope='col'>Form</th><th scope='col'>Flow path and design concern</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Overflow or ogee</th><td>Water crosses a shaped crest and passes down a protected face; pressures and coefficient depend on the profile and operating head.</td></tr>" +
                        "<tr><th scope='row'>Chute</th><td>A control feeds an open channel around an abutment or through a saddle; alignment, sidewalls, transitions and terminal dissipation must be checked.</td></tr>" +
                        "<tr><th scope='row'>Side-channel</th><td>Water crossing the crest turns into a collecting channel running alongside it; lateral inflow and the downstream control affect performance.</td></tr>" +
                        "<tr><th scope='row'>Shaft or drop-inlet</th><td>A reservoir inlet discharges into a shaft and outlet conduit/tunnel; ventilation, vortices, debris and transitions between controls matter.</td></tr>" +
                        "<tr><th scope='row'>Siphon</th><td>A primed closed passage uses a head difference to discharge water; priming, air entry, de-priming and the outlet condition govern its rating.</td></tr></tbody></table>" +
                        "<p>A <strong>morning-glory spillway</strong> is a bellmouth/drop-inlet form of shaft spillway. It is not defined by a minimum or maximum dam height, and its flared inlet is not the horizontal outlet tunnel. Narrow canyons with steep abutments can favour a shaft route, but feasibility still depends on the shaft, tunnel and receiving reach. A bellmouth can be freestanding in the reservoir; it need not be built into the canyon wall.</p>" +
                        "<p>At relatively low levels the inlet perimeter may act as a weir control. With increasing submergence, inlet/orifice or conduit control may take over, changing the head-discharge relation. It is unsafe to extend one crest-length H<sup>3/2</sup> rating through every regime. Air admission, unstable transitions, vortex formation and blockage can constrain usable capacity.</p>" +
                        "<p>Losses within a shaft do not make its inlet a substitute for a terminal dissipater. The outlet still needs an assessment of velocity, pressure, tailwater and erosion, together with maintenance access and a reliable way of operating or inspecting the system.</p>",
                    sources: [
                        { id: "HYDR626-00042", set: 6, question: 64 },
                        { id: "HYDR626-00211", set: 1, question: 65 },
                        { id: "HYDR626-00214", set: 24, question: 62 }
                    ]
                },
                {
                    id: "storage-overflow-rating-and-crest-design",
                    title: "Overflow rating: define the coefficient before calculating discharge or length",
                    html: "<p>For an applicable calibrated free-overflow rating, use <small>Q = C<sub>w</sub>L<sub>eff</sub>H<sub>e</sub><sup>3/2</sup></small>. Here Q is m<sup>3</sup>/s, effective crest length L<sub>eff</sub> is m and total energy head above the crest H<sub>e</sub> is m. In this form <strong>C<sub>w</sub> has units m<sup>1/2</sup>/s</strong>. It is not the same numerical coefficient as a dimensionless C<sub>d</sub> in a formula that explicitly includes gravity.</p>" +
                        "<p><small>H<sub>e</sub> = Z<sub>upstream water surface</sub> − z<sub>crest</sub> + αV<sub>a</sub><sup>2</sup>/(2g).</small></p>" +
                        "<p>Structural crest height above the bed is not the head above the crest. Effective length may differ from gross length because of contractions; approach conditions, profile and downstream submergence affect the rating. The bank calculations below treat the supplied head as H<sub>e</sub>, without additional approach-velocity or effective-length corrections because none are supplied.</p>" +
                        "<table><thead><tr><th scope='col'>Given problem and coefficient convention</th><th scope='col'>Calculation and interpretation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>H = 1.2 m, dimensional C<sub>w</sub> = 0.7</th><td>Specific discharge q = Q/L<sub>eff</sub> = 0.7 × 1.2<sup>3/2</sup> = <strong>0.9202 m<sup>3</sup>/s/m</strong>.</td></tr>" +
                        "<tr><th scope='row'>H = 1.2 m, dimensionless C<sub>d</sub> = 0.7</th><td>If the stated convention were q = (2/3)C<sub>d</sub>√(2g)H<sup>3/2</sup>, using g = 9.81 m/s<sup>2</sup> gives <strong>2.7172 m<sup>3</sup>/s/m</strong>.</td></tr>" +
                        "<tr><th scope='row'>Q = 90 m<sup>3</sup>/s, H = 1.6 m, C<sub>w</sub> = 1.7</th><td>L<sub>eff</sub> = 90/[1.7 × 1.6<sup>3/2</sup>] = <strong>26.1585 m</strong>, corresponding to the bank's rounded 26 m option.</td></tr></tbody></table>" +
                        "<p>For the 1.2 m question, the coefficient convention is undefined and one option is missing. <strong>Neither stated interpretation gives the stored 4.27.</strong> These alternatives diagnose the ambiguity; they are not permission to invent a new coefficient, head or missing option to fit the key. Specific discharge has m<sup>2</sup>/s units, equivalently m<sup>3</sup>/s per metre.</p>" +
                        "<p>The 26 m answer is an appropriate multiple-choice rounding, not proof that a constructed effective length rounded downward still passes exactly 90 m<sup>3</sup>/s. Actual length needs the adopted rating, contractions and capacity requirements.</p>" +
                        "<p>An ogee profile is related to the nappe at its design head. Off-design heads alter surface pressures and coefficient; higher heads can produce subatmospheric pressures and possible cavitation concerns that require assessment of local absolute pressure and surface conditions. USBR's Water Measurement Manual supports head and coefficient distinctions, but its measuring-weir rules are not automatically large-spillway design criteria.</p>",
                    sources: [
                        { id: "HYDR626-00223", set: 25, question: 59 },
                        { id: "IRRI951-00062", set: 7, question: 74 }
                    ]
                },
                {
                    id: "storage-siphon-and-gated-outlet-capacity",
                    title: "Saddle-siphon capacity and the limits of an orifice-type flow law",
                    html: "<p>The bank's <strong>5 m by 2.25 m dimensions describe a saddle-siphon throat</strong>, not a specified gate opening. Under its intended fully primed rating, the dimensionless coefficient C<sub>d</sub> relates throat area A and operative head H to discharge:</p>" +
                        "<p><small>Q<sub>unit</sub> = C<sub>d</sub>A√(2gH).</small></p>" +
                        "<table><thead><tr><th scope='col'>Step</th><th scope='col'>Bank calculation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Throat area</th><td>A = 5 × 2.25 = 11.25 m<sup>2</sup>.</td></tr>" +
                        "<tr><th scope='row'>One-unit discharge</th><td>With C<sub>d</sub> = 0.90, H = 4.53 m and g = 9.81 m/s<sup>2</sup>, Q<sub>unit</sub> = <strong>95.4539 m<sup>3</sup>/s</strong>.</td></tr>" +
                        "<tr><th scope='row'>Unit count</th><td>350/95.4539 ≈ 3.6667; round <strong>up to four units</strong>, not to the nearest integer.</td></tr>" +
                        "<tr><th scope='row'>Capacity comparison</th><td>Three units pass approximately 286.36 m<sup>3</sup>/s; four pass approximately 381.82 m<sup>3</sup>/s at the stated head and coefficient.</td></tr></tbody></table>" +
                        "<p>The current bank's four-unit key is consistent. The given head is the <em>maximum operative head</em>; this calculation does not establish capacity at lower levels, successful priming or reliability with a unit unavailable. Those conditions require the actual rating and operating study. No standby allowance is invented here.</p>" +
                        "<p><strong>Syllabus extension for gated outlets:</strong> a calibrated orifice-type rating can also have the form C<sub>d</sub>A√(2gΔH), but ΔH must match that calibration. A free discharge uses the appropriate upstream energy head relative to the discharge/jet reference; a submerged opening depends on the upstream-downstream energy difference. Reservoir depth above the bed cannot be inserted indiscriminately.</p>" +
                        "<p>Gate opening, contraction, submergence and approach conditions change the coefficient. Entrance, conduit and exit losses must be included consistently rather than both hidden inside C<sub>d</sub> and subtracted again. Pressure, cavitation, ventilation, closure transients and gate structural loads remain independent checks; an adequate steady discharge is not a complete outlet design.</p>",
                    sources: [{ id: "IRRI951-00072", set: 8, question: 73 }]
                },
                {
                    id: "storage-dissipater-selection-and-tailwater",
                    title: "Dissipater selection: hydraulic jump, roller bucket and flip bucket",
                    html: "<p>An energy dissipater converts excess mechanical energy into turbulence and other losses within a receiving region that can withstand the resulting loads. Reduced downstream velocity is an important outcome, but the designer must also control fluctuating pressures, scour and the location of the energetic flow. A wide, slow-looking outlet is not necessarily protected against local erosion.</p>" +
                        "<table><thead><tr><th scope='col'>Arrangement</th><th scope='col'>Mechanism and suitable conditions</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Hydraulic-jump stilling basin</th><td>Contains the transition from fast shallow flow to slower deeper flow on a protected floor. Often appropriate on erodible alluvium when tailwater, floor elevation and basin geometry retain the jump.</td></tr>" +
                        "<tr><th scope='row'>Roller bucket</th><td>Uses a submerged bucket and rollers in the receiving water. It needs suitably deep tailwater and a checked downstream bed; it is not the automatic solution to deficient tailwater.</td></tr>" +
                        "<tr><th scope='row'>Flip or ski-jump bucket</th><td>Projects a jet away from the structure into a receiving reach or plunge pool. Trajectory, impact zone, pool depth and rock/bed erodibility must be assessed.</td></tr></tbody></table>" +
                        "<p>For a jump, compare the available tailwater depth with the required <strong>sequent depth y<sub>2</sub></strong>, both referred to the proposed basin floor. Do not compare it with the jump rise y<sub>2</sub> − y<sub>1</sub>. Inadequate tailwater can sweep the jump out of the basin; excessive tailwater can submerge it and change performance. A sloping apron or depressed basin may alter the match, but needs hydraulic design over the discharge range.</p>" +
                        "<p><strong>A flip bucket is not a roller bucket.</strong> The bank's ski-jump-roller wording conflates two systems. Jet flight does not dispose of all the energy: substantial dissipation occurs through impact and turbulent mixing in the plunge pool. Even apparently sound rock can scour along joints; pool and bank protection must be justified rather than omitted.</p>" +
                        "<p>Alluvial foundation is a reason to favour contained dissipation, not a proof that every jump basin works there. Sound rock alone does not uniquely select a flip bucket. Stilling basins, roller buckets and flip buckets are established families in this scope; the bank's inverted-umbrella distractor does not supply a defined alternative design.</p>",
                    sources: [
                        { id: "HYDR626-00206", set: 23, question: 62 },
                        { id: "HYDR626-00023", set: 4, question: 64 },
                        { id: "HYDR626-00212", set: 23, question: 67 },
                        { id: "HYDR626-00213", set: 24, question: 61 },
                        { id: "HYDR626-00245", set: 27, question: 61 }
                    ]
                },
                {
                    id: "storage-hydraulic-jump-design-example",
                    title: "Hydraulic-jump extension: sequent depth, energy loss and a tailwater trap",
                    html: "<p><em>Source-free syllabus extension: no assigned question gives a complete numerical jump-design dataset.</em> Consider steady flow through a jump in a horizontal rectangular channel of constant width. Assume approximately uniform section velocities, hydrostatic pressures at sections outside the roller and negligible bed-friction force over the short control volume. Let y<sub>1</sub>, V<sub>1</sub> be upstream of the jump and y<sub>2</sub>, V<sub>2</sub> downstream.</p>" +
                        "<p><small>q = Q/B = V<sub>1</sub>y<sub>1</sub> = V<sub>2</sub>y<sub>2</sub>; Fr<sub>1</sub> = V<sub>1</sub>/√(gy<sub>1</sub>) &gt; 1.</small></p>" +
                        "<p>Momentum balance equates the functions <small>y<sup>2</sup>/2 + q<sup>2</sup>/(gy)</small> at the two sections, giving:</p>" +
                        "<p><small>y<sub>2</sub>/y<sub>1</sub> = [√(1 + 8Fr<sub>1</sub><sup>2</sup>) − 1]/2.</small></p>" +
                        "<p>Specific energy is <small>E = y + V<sup>2</sup>/(2g)</small>. It decreases across the jump:</p>" +
                        "<p><small>ΔE = E<sub>1</sub> − E<sub>2</sub> = (y<sub>2</sub> − y<sub>1</sub>)<sup>3</sup>/(4y<sub>1</sub>y<sub>2</sub>).</small></p>" +
                        "<p><strong>Explicit illustration:</strong> choose y<sub>1</sub> = 1 m and Fr<sub>1</sub> = √6. Then √(1 + 8Fr<sub>1</sub><sup>2</sup>) = 7 and y<sub>2</sub> = 3 m. The jump rise is 2 m, but the required sequent depth is 3 m. Energy loss is 2<sup>3</sup>/(4 × 1 × 3) = <strong>0.6667 m</strong>; independently, E<sub>1</sub> = 4 m and E<sub>2</sub> = 3.3333 m.</p>" +
                        "<p>If the illustrative tailwater depth is 2 m above this same floor, it equals the <em>rise</em> but is still 1 m below y<sub>2</sub>. Comparing it with y<sub>2</sub> − y<sub>1</sub> would therefore give the wrong containment conclusion. A basin-elevation or other design change needs the actual tailwater relation and applicable basin method.</p>" +
                        "<p>Sequent depths share a momentum function; alternate depths share specific energy and are not the same pair. The equations do not determine basin length, block size or a stable operating range. This chosen Froude number is an algebraic illustration, not a recommended basin condition. A validated arrangement must also account for jump behaviour, pressure fluctuations, nonuniform gate jets and sediment.</p>",
                    sources: []
                },
                {
                    id: "storage-stilling-basin-devices-and-scour",
                    title: "Stilling-basin devices and a continuous route to the downstream bed",
                    html: "<p>A stilling basin must keep energetic flow on a structure and receiving bed designed to resist it. Appurtenances can improve jump formation or flow distribution, but adding their names to a layout does not establish adequate dimensions or performance.</p>" +
                        "<table><thead><tr><th scope='col'>Device</th><th scope='col'>Role and associated check</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Chute blocks</th><td>Divide and deflect the entering jet, helping organise the jump. Check local pressure, abrasion, debris and compatibility with the selected basin type.</td></tr>" +
                        "<tr><th scope='row'>Baffle piers or blocks</th><td>Apply drag and redirect momentum to assist containment. Their structural loads, anchorage, cavitation exposure and maintenance require design.</td></tr>" +
                        "<tr><th scope='row'>End sill or dentated sill</th><td>Helps control the exit flow and its distribution beyond the basin. It does not remove the need to check downstream scour.</td></tr>" +
                        "<tr><th scope='row'>Floor, joints, filters and armour</th><td>Provide structural resistance and continuity of protection while allowing controlled, soil-retaining drainage where designed.</td></tr></tbody></table>" +
                        "<p>A <strong>morning-glory inlet</strong> passes reservoir water into a shaft spillway; it is not the toe energy-dissipation device in the bank's comparison. Some energy can be lost along any real waterway, but that does not establish an adequately protected terminal discharge.</p>" +
                        "<ol><li>Determine incoming depth, velocity, discharge per width and the tailwater relation over the relevant operating range.</li>" +
                        "<li>Select an applicable basin or model-supported arrangement and establish floor elevation, length and appurtenances together.</li>" +
                        "<li>Check unequal or partial gate openings, which can create severe concentrated jets below maximum total flood flow.</li>" +
                        "<li>Design the floor and joints for pressure fluctuations and net uplift, including dewatering and impaired-drain conditions.</li>" +
                        "<li>Continue protection through the basin exit to the receiving channel with compatible filters, armour and scour-resistant transitions.</li></ol>" +
                        "<p>Hydrodynamic pressures at a leaking joint can load the slab underside, while loss of support changes its bending action. Neither static slab weight nor a sequent-depth calculation alone proves adequacy. Downstream armour must retain its underlying soil and remain effective as the bed evolves; an abrupt end to rigid protection can simply move the scour problem to that edge.</p>",
                    sources: [{ id: "HYDR626-00031", set: 5, question: 63 }]
                },
                {
                    id: "storage-floor-uplift-and-pressure-datum",
                    title: "Floor-uplift extension: why the head datum changes the thickness formula",
                    html: "<p><em>Source-free syllabus extension: no assigned item supplies a numerical floor-slab uplift design.</em> Let the slab top be at elevation z<sub>t</sub>, thickness be t and underside be z<sub>t</sub> − t. Let H<sub>p</sub> be the local piezometric-head elevation beneath the slab. Define <strong>h = H<sub>p</sub> − z<sub>t</sub></strong>, measured above the <strong>floor top</strong>.</p>" +
                        "<p>For a dry top, underside pressure is <small>p<sub>u</sub> = γ<sub>w</sub>(h + t)</small>, whereas slab weight per unit area is γ<sub>c</sub>t. The elementary unanchored no-lift balance is:</p>" +
                        "<p><small>γ<sub>c</sub>t ≥ γ<sub>w</sub>(h + t); t ≥ h/(G − 1), with G = γ<sub>c</sub>/γ<sub>w</sub> &gt; 1.</small></p>" +
                        "<p>The denominator G − 1 appears because the actual underside lies t below the reference used for h. If the <strong>actual underside pressure</strong> p has already been evaluated and the top is dry, the balance instead reads <strong>t ≥ p/γ<sub>c</sub></strong>. Equivalently, for actual underside pressure head h<sub>b</sub>, <small>t ≥ h<sub>b</sub>/G</small>. These are two consistent ways of writing the balance, not competing safety rules.</p>" +
                        "<p>If hydrostatic water of depth y lies on top, p<sub>top</sub> = γ<sub>w</sub>y and actual net uplift pressure is <small>Δp = p<sub>u</sub> − p<sub>top</sub></small>. Use <small>t ≥ Δp/γ<sub>c</sub></small>, or define h<sub>res</sub> = H<sub>p</sub> − z<sub>t</sub> − y and obtain <small>t ≥ h<sub>res</sub>/(G − 1)</small> for positive h<sub>res</sub> under the same assumptions.</p>" +
                        "<p><strong>Explicit dry-top illustration:</strong> h = 2 m and G = 2.4 give the equality thickness t = 2/1.4 = <strong>1.4286 m</strong>. The actual underside pressure head is then h<sub>b</sub> = 2 + 1.4286 = 3.4286 m; dividing this by 2.4 gives the same thickness. These are illustrative inputs, not additional bank data or a design recommendation.</p>" +
                        "<p><strong>Do not divide the same actual net pressure by γ<sub>c</sub> − γ<sub>w</sub></strong>: that would count the thickness-related water term twice. Pressures are kN/m<sup>2</sup>; unit weights are kN/m<sup>3</sup>. Equality has no reserve. Required load factors, anchors, bending, shear, joints, fluctuating pressures and changed seepage geometry must be evaluated separately, with the pressure datum kept consistent as t changes.</p>",
                    sources: []
                },
                {
                    id: "storage-gate-types-and-locations",
                    title: "Gates: identify motion, load path and location rather than a popularity ranking",
                    html: "<p>Gates regulate or isolate water at spillway crests, power intakes and outlet works. Select them for head, opening size, sediment/debris, regulation range, emergency duty, access and maintainability. The bank's statement that one type is mostly used in modern hydraulic structures has no defined population or verified universal ranking.</p>" +
                        "<table><thead><tr><th scope='col'>Family</th><th scope='col'>Motion and support</th><th scope='col'>Typical location or duty</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Slide gate</th><td>A leaf slides in guides with sliding contact resistance.</td><td>Appropriately rated intakes, sluices and outlet openings.</td></tr>" +
                        "<tr><th scope='row'>Fixed-wheel vertical-lift gate</th><td>Wheels attached to the leaf run on tracks, carrying water load and reducing movement resistance.</td><td>Large intake, outlet or spillway openings, according to rating.</td></tr>" +
                        "<tr><th scope='row'>Stoney or free-roller arrangement</th><td>Separate roller trains transmit load between the leaf and tracks.</td><td>A distinct rolling-support form of vertical gate.</td></tr>" +
                        "<tr><th scope='row'>Radial or Tainter gate</th><td>A curved leaf and arms rotate about trunnions; idealised radial water pressure is directed through the curvature centre.</td><td>Common spillway control and suitably designed outlet duties.</td></tr>" +
                        "<tr><th scope='row'>Drum gate</th><td>A buoyant hollow sector rotates in a crest recess, controlled by the chamber water condition.</td><td>A separate conventional crest-control family, not simply a synonym for a Tainter gate.</td></tr>" +
                        "<tr><th scope='row'>Cylindrical roller gate</th><td>A large cylindrical body moves on its supporting track/rack arrangement.</td><td>The USBR glossary distinguishes this crest-control form from fixed-wheel vertical gates.</td></tr>" +
                        "<tr><th scope='row'>Flap gate; stoplogs or bulkhead</th><td>A flap rotates about a hinge; stoplogs and bulkheads are removable closure elements.</td><td>Flaps may control a crest; stoplogs/bulkheads commonly isolate a bay for maintenance, not necessarily under full-flow emergency closure.</td></tr></tbody></table>" +
                        "<p>A trunnion is a pivot/support term, not by itself a unique gate family. Even for a radial gate with favourable ideal hydrostatic geometry, leaf weight, seal friction, trunnion friction and hydrodynamic effects remain; its hoist demand is not zero. The arms, bearings and supporting piers must transmit the water load.</p>" +
                        "<p>The bank uses roller gate loosely for a fixed-wheel gate and classifies drum as radial. Preserve the stored wording but use the actual geometry and the inspected USBR terminology to avoid confusing these arrangements. Vertical lift is not radial/Tainter, and drum is conventionally distinct as well, making the bank's single-exception classification non-unique.</p>" +
                        "<p>Coordinate service gates with maintenance isolation and any required emergency closure, pressure equalisation, reliable power/hoists and access. Check maximum differential head, downpull or uplift, vibration, seals, corrosion and debris. Closure schedules must be compatible with waterway transients; rapid closure is not automatically safe. A trashrack intercepts debris and is not an isolation gate, while a high-pressure regulating valve needs its own equipment-specific assessment.</p>",
                    sources: [
                        { id: "HYDR626-00022", set: 4, question: 63 },
                        { id: "HYDR626-00246", set: 27, question: 62 }
                    ]
                }
            ],
            gaps: [
                "The complete plant layout, full numerical contact-stress ledger, independent overturning and bearing checks are explicitly source-free syllabus extensions. Apart from the elementary 35 m profile, the bank does not provide the geometry, load combinations, material strengths or foundation model needed for a project stability assessment.",
                "No site seismic hazard, spectra or time histories, damping, reservoir-response model or post-earthquake damage dataset is supplied. Newtonian acceleration/inertia signs are taught separately from design acceptance; the downward-acceleration question omits the magnitude needed to claim a 10% reduction.",
                "The 0.555 hydrodynamic coefficient and von Kármán attribution, the wind-wave heuristic's origin and wave-height type, the steel-dam 20 m limit and the universal shear-friction threshold are not verified by the supplied primary-source review. Conditional bank arithmetic does not establish a current standard.",
                "Foundation permeability and discontinuity data, soil/filter gradations, treatment trials, drain outlet/backpressure conditions and monitoring evidence are missing. No numerical cutoff depth, filter ratio, grout specification or blanket drain-efficiency allowance is invented.",
                "Intake net-area and loss sizing is a source-free syllabus extension. The bank lacks a complete admission-discharge, operating-level, bar/support, blockage, submergence and equipment dataset; no universal intake velocity, bar spacing or blockage percentage is imposed.",
                "The 1.2 m spillway question leaves the coefficient convention undefined and includes a missing option; neither demonstrated interpretation supports 4.27. The 90 m³/s crest example lacks approach and contraction details, and the siphon example gives maximum operative head rather than a complete operating rating.",
                "No design flood hydrograph, initial reservoir condition, stage-storage curve, gate-availability scenario or applicable freeboard criterion is supplied. Flood routing and spillway reliability are explained without inventing a design flood, final crest elevation or capacity approval.",
                "Hydraulic-jump arithmetic and floor-uplift thickness are explicitly source-free syllabus extensions. Their chosen illustrative inputs are not bank givens. Tailwater curves, basin geometry, foundation erodibility, actual underside pressures, structural spans and gate load/closure data remain necessary for detailed design.",
                "Reference scope is limited to the primary material identified as inspected in the supplied research: FERC gravity-dam guidance dated 4 March 2016, USBR terminology and measurement background, and AEPC's 2014 update principally for micro/pico systems up to 100 kW. No current Nepal adoption or approval is established. Unread DoED headworks clauses and uninspected manual contents are not used as technical authority."
            ],
            cautions: [
                {
                    html: "<p><strong>Bank check: foundation adjectives do not select a dam by themselves.</strong> HYDR626-00019 and IRRI951-00114 reasonably favour a strong foundation for gravity action. Fractured rock does not automatically require an embankment: discontinuities, strength, seepage and feasible treatment govern. IRRI951-00115's earthfill choice is conditional; rockfill is also an embankment option, and neither is automatically safe on weak, compressible or liquefiable ground.</p>",
                    sources: [
                        { id: "HYDR626-00019", set: 4, question: 60 },
                        { id: "IRRI951-00114", set: 12, question: 70 },
                        { id: "IRRI951-00115", set: 12, question: 71 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: distinguish classification basis and preserve missing options.</strong> HYDR626-00029's non-overflow means not designed for overtopping, not physically never overtopped. HYDR626-00116's embankment label does not make storage the universal primary purpose or flood control inherently secondary. HYDR626-00123's large spillway demand and HYDR626-00209's separate-spillway site do not uniquely select the whole dam type. The latter has an Oged wording defect and a placeholder option; no replacement distractor is manufactured. Stored keys remain unchanged.</p>",
                    sources: [
                        { id: "HYDR626-00029", set: 5, question: 61 },
                        { id: "HYDR626-00116", set: 14, question: 62 },
                        { id: "HYDR626-00123", set: 15, question: 58 },
                        { id: "HYDR626-00209", set: 23, question: 65 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: arches need sound abutments; masonry arches exist.</strong> HYDR626-00117 omits the decisive abutment-capacity condition and offers overlapping arch/concrete categories. HYDR626-00121's concrete option does not justify the claim that concrete is the only suitable arch material: the inspected USBR terminology includes masonry arches. IRRI951-00116 describes a buttress-supported deck or arches; hollow masonry gravity dam is not a precise universal synonym for that load path.</p>",
                    sources: [
                        { id: "HYDR626-00117", set: 14, question: 63 },
                        { id: "HYDR626-00121", set: 14, question: 67 },
                        { id: "IRRI951-00116", set: 12, question: 72 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: steel dams have no verified universal 20 m ceiling here.</strong> IRRI951-00117 retains its stored 20 m choice, but the claimed hard limit is not established by the inspected primary material. Treat it as an unverified historical/textbook statement, not a physical maximum, a current design standard or an approval criterion.</p>",
                    sources: [{ id: "IRRI951-00117", set: 12, question: 73 }]
                },
                {
                    html: "<p><strong>Bank check: urban proximity cannot be excluded from site selection.</strong> HYDR626-00118's NOT-considered assertion is too absolute. Settlements influence inundation, land acquisition, access, demand/transmission connections and downstream consequences. Being outside a narrow geological checklist does not make location relative to people irrelevant.</p>",
                    sources: [{ id: "HYDR626-00118", set: 14, question: 64 }]
                },
                {
                    html: "<p><strong>Bank check: a core is not a complete piping defence.</strong> HYDR626-00020 correctly identifies seepage control, but a core need not be central or exclusively clay; filters and drains provide additional protection. HYDR626-00135's transition-zone answer only has the stated crack-filter function when the zone satisfies retention and drainage requirements. Arbitrary intermediate grading is not enough.</p>",
                    sources: [
                        { id: "HYDR626-00020", set: 4, question: 61 },
                        { id: "HYDR626-00135", set: 16, question: 62 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: distinguish hazards, sloughing and internal erosion.</strong> HYDR626-00242 mixes initiating hazards with failure mechanisms; geographical rarity does not prove volcanic activity cannot contribute to failure. HYDR626-00024's downstream-face removal describes sloughing, often from saturation and shallow slips. It should not be equated with particles first migrating from within the body, or with external river-bed scour.</p>",
                    sources: [
                        { id: "HYDR626-00242", set: 27, question: 58 },
                        { id: "HYDR626-00024", set: 4, question: 65 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: seepage control is broader than stopping under-dam flow.</strong> HYDR626-00120's cutoff can reduce leakage and change gradients or uplift, but does not perfectly seal every foundation or stop external scour. HYDR626-00243 omits body, abutment and contact seepage and overstates prevention. In HYDR626-00250, fractures and high permeability are both relevant; A is not uniquely important. Filters retain soil, drains relieve pressure and barriers impede flow; their functions must not be merged.</p>",
                    sources: [
                        { id: "HYDR626-00120", set: 14, question: 66 },
                        { id: "HYDR626-00243", set: 27, question: 59 },
                        { id: "HYDR626-00250", set: 27, question: 66 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: grouting, piling and blasting are not interchangeable treatments.</strong> HYDR626-00244 groups different operations under a broad label. Controlled blasting mainly excavates/prepares the site; piling requires a justified structural or ground-treatment role; grouting addresses accessible voids or fractures. The list does not prescribe all three at every dam or establish that each solves seepage and foundation weakness.</p>",
                    sources: [{ id: "HYDR626-00244", set: 27, question: 60 }]
                },
                {
                    html: "<p><strong>Bank check: self-weight is primary, not the only action that matters.</strong> HYDR626-00122 and IRRI951-00122 correctly emphasise gravity resistance by weight. Tailwater can also provide opposing thrust while affecting uplift. A vertical upstream face has no vertical hydrostatic component, but sloping wetted faces may have one. Always use full structural weight and explicit water actions consistently; self-weight alone is not a safety verdict.</p>",
                    sources: [
                        { id: "HYDR626-00122", set: 14, question: 68 },
                        { id: "IRRI951-00122", set: 12, question: 77 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: uplift is not exclusive to concrete dams.</strong> IRRI951-00057's categories overlap: a buttress dam may be concrete, and a cofferdam is a functional category that can use several materials. Pore pressure also affects embankment stability. The intended gravity-dam lesson is reduction of effective normal resistance by uplift, not that the other listed structures are unaffected. Do not subtract uplift after already reducing concrete weight for the same buoyancy effect.</p>",
                    sources: [{ id: "IRRI951-00057", set: 7, question: 69 }]
                },
                {
                    html: "<p><strong>Bank check: distinguish friction from mechanical interlock.</strong> HYDR626-00027's steps need an identified geometry and failure path; keys can mobilise bearing/interlock/shear, not merely a larger frictional area. HYDR626-00030's wider base can add weight, but μN is unchanged by area alone at fixed N. Proper foundation anchorage can also resist sliding, so the offered bottom-anchorage remedy is not inherently ineffective.</p>",
                    sources: [
                        { id: "HYDR626-00027", set: 4, question: 68 },
                        { id: "HYDR626-00030", set: 5, question: 62 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: no universal shear-friction factor of more than 3 to 5 is established.</strong> HYDR626-00025 does not define the credited shear strength, cohesion/contact assumptions, load case or governing acceptance method. A shear-friction factor is not automatically a friction-only sliding ratio. The stored numerical rule is not adopted here as a current code requirement.</p>",
                    sources: [{ id: "HYDR626-00025", set: 4, question: 66 }]
                },
                {
                    html: "<p><strong>Bank check: 22.6 m is elementary proportioning, not demonstrated safety.</strong> HYDR626-00222 gives B<sub>NT</sub> = 22.5924 m and friction-only incipient-sliding width 20.8333 m under the stated no-uplift triangular model. The sliding ratio at B<sub>NT</sub> is only 1.0844. The coefficient μ is unnecessary for the no-tension formula but must not be ignored in the independent sliding check. No required factor, bearing limit or complete design load set is supplied.</p>",
                    sources: [{ id: "HYDR626-00222", set: 25, question: 58 }]
                },
                {
                    html: "<p><strong>Bank check: upward acceleration is not upward inertia.</strong> IRRI951-00118's explanation reverses these directions. With upward acceleration positive and water loads fixed, N = W(1 + a<sub>y</sub>/g) − U: upward ground/dam acceleration gives downward equivalent inertia and increases N. IRRI951-00124's stored decrease-base-pressure explanation has the same sign error; the elementary interpretation supports increased average compression. Upward equivalent inertia instead corresponds to downward acceleration. The stored keys are not rewritten.</p>",
                    sources: [
                        { id: "IRRI951-00118", set: 1, question: 70 },
                        { id: "IRRI951-00124", set: 13, question: 69 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: reservoir-directed acceleration produces downstream dam inertia.</strong> IRRI951-00119's stored direction is defensible only when interpreted as ground/dam acceleration, not a force itself directed toward the reservoir. IRRI951-00121 likewise needs its intended reservoir-response and acceleration interpretation. Do not conflate wave travel, ground motion and equivalent force, or assign a hydrodynamic lever arm without a pressure model.</p>",
                    sources: [
                        { id: "IRRI951-00119", set: 12, question: 74 },
                        { id: "IRRI951-00121", set: 12, question: 76 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: the 10% acceleration magnitude is missing.</strong> IRRI951-00120's downward acceleration reduces the weight-related normal action by W|a<sub>y</sub>|/g in the elementary fixed-water-load model. It is 0.1W only if |a<sub>y</sub>| = 0.1g, which the stem does not state. It is not automatically a 10% reduction of W − U or a 10% change in uplift.</p>",
                    sources: [{ id: "IRRI951-00120", set: 12, question: 75 }]
                },
                {
                    html: "<p><strong>Bank check: a seismic coefficient range is not a high-dam sufficiency criterion.</strong> IRRI951-00125's 0.1g–0.15g answer has no site hazard or performance basis here. FERC's inspected 4 March 2016 guidance rejects pseudostatic evaluation for its procedure and requires the applicable dynamic and post-earthquake assessment. The notes' Newtonian sign equations do not constitute that assessment or demonstrate current Nepal approval.</p>",
                    sources: [{ id: "IRRI951-00125", set: 13, question: 70 }]
                },
                {
                    html: "<p><strong>Bank check: 0.555 and its attribution remain unverified.</strong> IRRI951-00126's explanation interprets the notation as 0.555k<sub>h</sub>γ<sub>w</sub>H<sup>2</sup>. It has force-per-unit-length dimensions under those definitions, but dimensional consistency does not prove the coefficient or the von Kármán attribution. No verified primary derivation or pressure shape was obtained in the supplied research. Retain it only as a flagged bank expression, not a universal hydrodynamic design formula.</p>",
                    sources: [{ id: "IRRI951-00126", set: 13, question: 71 }]
                },
                {
                    html: "<p><strong>Bank check: wave force is per metre, and the heuristic's provenance is unresolved.</strong> IRRI951-00123 conditionally gives h<sub>w</sub> = 3.0263 m and P′<sub>w</sub> = 179.6928 kN/m with V in km/h and F in km. The option's 180 kN requires an understood one-metre strip. Substitution of the printed rounded 3.02 gives 178.9422 kN/m instead. The wave-height type, origin and validity limits are unverified; no current standard or freeboard recommendation is inferred.</p>",
                    sources: [{ id: "IRRI951-00123", set: 12, question: 78 }]
                },
                {
                    html: "<p><strong>Bank check: intake selection needs an actual layout and operating range.</strong> HYDR626-00216's fluctuating-level condition does not uniquely require a tower, especially when selective quality withdrawal is not required; a suitably submerged fixed inlet may work. HYDR626-00217's valley-type wording needs the intended dam-toe arrangement, not simply a powerhouse situated in a valley. Neither question supplies a quantitative intake design.</p>",
                    sources: [
                        { id: "HYDR626-00216", set: 24, question: 64 },
                        { id: "HYDR626-00217", set: 24, question: 65 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: spillways are not only emergency devices.</strong> HYDR626-00239's surplus-water function is sound, but its missing option remains missing. HYDR626-00247 omits service operation during normal surplus conditions. HYDR626-00248 identifies inadequate capacity as an important overtopping cause, not a verified universal most-common statistic. Routing, blockage, operation, settlement and waves can change the outcome; nominal flood discharge alone is insufficient.</p>",
                    sources: [
                        { id: "HYDR626-00239", set: 26, question: 67 },
                        { id: "HYDR626-00247", set: 27, question: 63 },
                        { id: "HYDR626-00248", set: 27, question: 64 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: morning glory is inlet geometry, not a dam-height class.</strong> HYDR626-00042's large-project restriction is not definitional. HYDR626-00214 correctly associates the bellmouth form with a shaft spillway. HYDR626-00211's narrow-steep-site preference needs tunnel, debris and hydraulic-control checks, and the inlet need not be integrated into a canyon wall. A shaft spillway's rating can change control as level rises.</p>",
                    sources: [
                        { id: "HYDR626-00042", set: 6, question: 64 },
                        { id: "HYDR626-00211", set: 1, question: 65 },
                        { id: "HYDR626-00214", set: 24, question: 62 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: the 4.27 spillway answer is unsupported.</strong> In HYDR626-00223, H = 1.2 m and dimensional C<sub>w</sub> = 0.7 give q = 0.9202 m<sup>3</sup>/s/m. If 0.7 were dimensionless C<sub>d</sub> in the explicitly stated (2/3)C<sub>d</sub>√(2g)H<sup>3/2</sup> convention, q = 2.7172. Neither gives 4.27. The coefficient definition and an option are missing. Do not reverse-engineer unstated data or repeat the explanation's speculative coefficient substitutions as a solution.</p>",
                    sources: [{ id: "HYDR626-00223", set: 25, question: 59 }]
                },
                {
                    html: "<p><strong>Bank check: 26 m is the rounded option, not a final effective crest design.</strong> IRRI951-00062 gives L = 90/[1.7 × 1.6<sup>3/2</sup>] = 26.1585 m in the stated dimensional-coefficient rating. The stored 26 m choice is appropriate as an MCQ approximation. Approach head, submergence, contraction and any minimum-capacity allowance remain unprovided; construction length should not simply be rounded downward without those checks.</p>",
                    sources: [{ id: "IRRI951-00062", set: 7, question: 74 }]
                },
                {
                    html: "<p><strong>Bank check: four saddle-siphon units are needed at the stated head.</strong> IRRI951-00072 gives 95.4539 m<sup>3</sup>/s per 5 m by 2.25 m throat at C<sub>d</sub> = 0.90 and H = 4.53 m. The ratio 350/95.4539 ≈ 3.6667 must be rounded up to four. Three are insufficient. The current stored key is consistent; maximum-head arithmetic does not establish priming, lower-head capacity or standby reliability.</p>",
                    sources: [{ id: "IRRI951-00072", set: 8, question: 73 }]
                },
                {
                    html: "<p><strong>Bank check: deficient tailwater does not justify every bucket.</strong> HYDR626-00023's all-of-the-above answer overgeneralises: a roller bucket needs suitable deep tailwater, while a flip bucket projects a jet into a separately assessed receiving region. Compare tailwater with y<sub>2</sub>, not y<sub>2</sub> − y<sub>1</sub>. HYDR626-00212's hydraulic-jump preference on alluvium is conditional, not universal. HYDR626-00213's ski-jump-roller term conflates distinct devices; substantial energy remains for the plunge pool, and sound rock still requires scour assessment and suitable protection.</p>",
                    sources: [
                        { id: "HYDR626-00023", set: 4, question: 64 },
                        { id: "HYDR626-00212", set: 23, question: 67 },
                        { id: "HYDR626-00213", set: 24, question: 61 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: gate terminology and popularity are not interchangeable.</strong> HYDR626-00022 supplies no basis for a universal mostly-used ranking and loosely equates roller with fixed-wheel gates. The inspected USBR glossary distinguishes fixed-wheel, free-roller and cylindrical roller arrangements. HYDR626-00246's vertical lift is not radial/Tainter, but drum is also a conventionally separate family; trunnion names a support rather than uniquely defining a gate. Its single-exception question is therefore non-unique under those definitions.</p>",
                    sources: [
                        { id: "HYDR626-00022", set: 4, question: 63 },
                        { id: "HYDR626-00246", set: 27, question: 62 }
                    ]
                }
            ],
            references: [
                {
                    title: "FERC Engineering Guidelines, Chapter III: Gravity Dams — 4 March 2016; uplift, dynamic and post-earthquake assessment",
                    url: "https://www.ferc.gov/sites/default/files/2020-04/chap3.pdf"
                },
                {
                    title: "USBR Glossary — dam, seepage, spillway and gate terminology; page update identified as 18 April 2022",
                    url: "https://www.usbr.gov/library/glossary/"
                },
                {
                    title: "USBR Water Measurement Manual — third edition 1997, revised reprint 2001; measurement and rating background, not a storage-dam approval code",
                    url: "https://www.usbr.gov/tsc/techreferences/mands/wmm/"
                },
                {
                    title: "AEPC Reference Micro Hydro Power Standard — first edition 2005, first update 2014; principally micro/pico systems up to 100 kW",
                    url: "https://www.aepc.gov.np/docs/2018-06-19_Reference%20Micro%20Hydro%20Power%20Standard,%202014.pdf"
                }
            ]
        }
    });
})();