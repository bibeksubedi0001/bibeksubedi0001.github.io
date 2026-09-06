(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0602: {
            code: "ACiE0602",
            questionCount: 27,
            blocks: [
                {
                    id: "distribution-system-boundaries-and-driving-head",
                    title: "A supply system connects the source to usable water at the consumer",
                    html: "<p>A water-supply system includes collection or abstraction, raw-water conveyance, appropriate treatment, pumping where necessary, storage and distribution. Its performance is the delivery of the required quantity and quality at usable pressure and reliability, not merely completion of a reservoir or a pipeline. Wastewater collection and disposal are related sanitation services but are not the definition of a water-supply scheme.</p>" +
                        "<p>A <strong>gravity system</strong> uses elevation-derived head. A source above consumers is useful only if the available head can overcome losses and still provide the required service pressure. A pumping system adds mechanical energy; a combined arrangement can pump to storage and then distribute by gravity. These descriptions refer to the actual hydraulic arrangement, not simply whether a pump exists somewhere in the scheme.</p>" +
                        "<p>The hydraulic grade is <strong>H = z + p/(ρg)</strong>; adding velocity head gives the energy grade, <strong>E = H + v<sup>2</sup>/(2g)</strong> under the usual mean-velocity approximation. Elevation z and all heads must use one datum. Pump head is an energy addition; friction and local losses consume head along the flow direction.</p>" +
                        "<p>Draw the system profile from source through intake, treatment, tanks and critical service points. Check both high-demand conditions, when residual pressure can be low, and low-flow or shutoff conditions, when static pressure can be high. Gravity operation can reduce energy expenditure but does not eliminate pressure control, treatment, maintenance or monitoring.</p>",
                    sources: [
                        { id: "WATE813-00281", set: 28, question: 95 },
                        { id: "WATE813-00284", set: 1, question: 98 }
                    ]
                },
                {
                    id: "distribution-intake-location-selection",
                    title: "Intake siting needs low-water, flood, quality and access evidence — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> no assigned question directly supplies intake-siting data. An intake must admit dependable raw water under the design operating range without creating an unacceptable contamination, sediment, structural or maintenance problem. A convenient bank location alone does not establish suitability.</p>" +
                        "<ol><li>Establish seasonal minimum and maximum water levels, dependable yield, abstraction constraints and the water levels that govern gravity conveyance or pump suction.</li><li>Survey upstream sanitary and chemical hazards and their seasonal pathways. A nominally upstream location is not adequate if local runoff, floodwater or another pollution source bypasses protection.</li><li>Investigate bed movement, sediment entry, debris, bank erosion, scour and foundation conditions. Keep the entry operable during expected low water without simply placing it where bed sediment accumulates.</li><li>Compare raw-water quality at candidate depths and locations, including stratification or algal effects in impoundments.</li><li>Provide safe inspection, isolation and cleaning access, power where needed, flood-resilient access and a practicable connection to treatment.</li></ol>" +
                        "<p>Environmental flows, aquatic habitat, navigation, land rights and permissions are constraints rather than optional afterthoughts. Compare life-cycle operation and failure consequences as well as construction cost. The site decision should identify the governing water levels and hazards on drawings and in calculations; it cannot be justified by an unverified universal setback or a rule that every intake belongs on one particular side of a river bend.</p>",
                    sources: []
                },
                {
                    id: "distribution-intake-types-and-construction",
                    title: "Choose an intake arrangement that can be protected and maintained — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> the bank does not provide an intake-type comparison or construction design. Type names describe arrangements; selection follows source behaviour, hydraulic levels, quality and maintainability.</p>" +
                        "<table><thead><tr><th scope='col'>Arrangement</th><th scope='col'>Use and construction consideration</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>River-bank intake or collection well</th><td>An entry and connecting conduit convey water to a protected chamber or pumping well. Sediment entry, flood access, bank stability and isolation need explicit provision.</td></tr>" +
                        "<tr><th scope='row'>Submerged intake</th><td>A screened entry away from shore can reach suitable depth. Underwater inspection, debris removal, pipe protection and anchorage become important.</td></tr>" +
                        "<tr><th scope='row'>Lake/reservoir tower</th><td>Multiple inlet levels can permit selective withdrawal. A wet tower contains the collection water; a dry-access arrangement houses accessible controls around separate conduits.</td></tr>" +
                        "<tr><th scope='row'>Floating intake</th><td>Moves with water level, but needs stable mooring, flexible connections and protection from debris, waves and low-water grounding.</td></tr></tbody></table>" +
                        "<p>A spring collection chamber or protected well head is another abstraction arrangement, not proof of an inherently safe source. Prevent dirty surface drainage or animals from bypassing the intended collection path.</p>" +
                        "<p>Construction planning addresses temporary diversion or dewatering, stable excavation, foundations, watertight interfaces, safe access and the protection of raw water from construction pollution. Screens, valves and removable components need space for maintenance. Check flotation, scour and flood actions before choosing the foundation and anchorage; merely specifying concrete or a tower does not establish stability or an acceptable ecological footprint.</p>",
                    sources: []
                },
                {
                    id: "distribution-intake-open-area-and-protection",
                    title: "An intake screen needs effective open area, not only an outside dimension — syllabus extension",
                    html: "<p><strong>Syllabus extension; all numerical inputs here are hypothetical.</strong> No assigned record gives a screen design. Let Q be intake discharge, A<sub>o</sub> the effective open area and v<sub>o</sub> mean velocity through those openings. Continuity gives <strong>A<sub>o</sub> = Q/v<sub>o</sub></strong>. This through-opening velocity is not automatically the approach velocity based on gross face area.</p>" +
                        "<p>Assume Q = 0.030 m<sup>3</sup>/s and an illustrative through-opening velocity of 0.15 m/s. Then A<sub>o</sub> = <strong>0.200 m<sup>2</sup></strong>. If the stipulated effective open fraction of the submerged gross face is 0.60, already accounting for bars and the assumed blockage allowance, gross area is <strong>0.200/0.60 = 0.3333 m<sup>2</sup></strong>. The corresponding gross-face approach velocity is 0.090 m/s. Do not deduct the same blockage allowance twice.</p>" +
                        "<p>These assumed velocities and fractions are not fish-protection criteria, approved screen dimensions or Nepal design constants. An actual design must establish allowable approach and opening velocities, opening size, cleaning method, head loss and operation at the minimum submerged area. A larger rack can still fail if debris cannot be removed safely.</p>" +
                        "<p>Check the hydraulic grade through the entry, screen, conduit and chamber, including a justified partly blocked condition. Provide maintainable isolation, suitable sediment management and protection against unsafe bypasses. Foundation, uplift, sliding, pipe anchorage and flood/scour checks remain separate from the open-area calculation.</p>",
                    sources: []
                },
                {
                    id: "distribution-pipe-materials-and-pressure-classes",
                    title: "Choose material, pressure class and installation as one specification",
                    html: "<p>A material name alone does not establish a pipe's allowable pressure, service life or suitability for drinking water. Specify the applicable product standard, dimensions, pressure class, temperature basis, joint system, lining or coating, installation and potable-water compatibility.</p>" +
                        "<table><thead><tr><th scope='col'>Material family</th><th scope='col'>Selection considerations</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Ductile iron</th><td>Robust pressure-pipe option; lining, external corrosion protection, joint restraint and handling still matter.</td></tr>" +
                        "<tr><th scope='row'>Steel</th><td>Useful for fabricated pressure mains and crossings; corrosion protection, weld quality, wall stability and anchorage govern performance.</td></tr>" +
                        "<tr><th scope='row'>uPVC and polyethylene</th><td>Lightweight corrosion-resistant options; pressure rating, temperature, long-term loading, joint quality and supported installation remain essential.</td></tr>" +
                        "<tr><th scope='row'>Concrete pressure products</th><td>Suitability depends on the specific reinforced or prestressed product and joint design, not the word concrete alone.</td></tr>" +
                        "<tr><th scope='row'>Galvanised steel service pipe</th><td>Historically called GI; zinc protection is not permanent immunity to corrosion, deposits or reduced bore.</td></tr></tbody></table>" +
                        "<p>The bank's GI residential-service answer describes a conventional practice, not a universal requirement or a reason to install lead service pipes. Local approved materials and water compatibility must govern selection.</p>" +
                        "<p>Compare rated operating and test conditions with maximum static pressure, operating pressure and assessed transients. Do not assume a nominal class number can be read directly as MPa without its standard, or that a short proof test establishes a lifetime operating rating. The weakest compatible component may be a fitting, valve or joint rather than the straight pipe.</p>",
                    sources: [{ id: "WATE813-00286", set: 28, question: 99 }]
                },
                {
                    id: "distribution-hoop-stress-and-external-buckling",
                    title: "Internal-pressure tension and external collapse are different limit states",
                    html: "<p>For a thin cylindrical wall under uniform internal gauge pressure p, consider a longitudinal diametral cut of length L. Pressure acts on projected area DL, while the two wall edges resist with total area 2tL. Equilibrium gives <strong>σ<sub>h</sub> = pD/(2t)</strong>. For a closed-ended pipe whose wall carries the end-pressure force, axial equilibrium gives <strong>σ<sub>a</sub> = pD/(4t)</strong>.</p>" +
                        "<p><em>Added hypothetical example, not bank dimensions:</em> p = 0.80 MPa, D = 300 mm and wall thickness t = 6 mm give <strong>20 MPa hoop stress</strong> and <strong>10 MPa pressure-induced axial stress</strong>. Use compatible units. The thin-wall approximation, diameter convention, end restraint and other loads must be checked; these numbers do not choose a pressure class or include corrosion allowance, surge, welding factors or bending.</p>" +
                        "<p>External pressure or internal vacuum can instead ovalise and buckle a thin shell. In idealised elastic-shell models, collapse resistance has a strong dependence of the form <strong>E(t/D)<sup>3</sup></strong>, but the coefficient and actual capacity depend on support, length, imperfections and the selected model. It is not enough to compare external pressure with tensile yield strength.</p>" +
                        "<p>Thin steel pipe can therefore be strong in pressure-induced tension yet vulnerable to collapse, but this is not an intrinsic weakness of every steel pipe. Soil support, bedding, ring stiffness, corrosion, vacuum and construction loads require assessment. A pipe that passes the hoop-stress check can still fail during dewatering or poor installation.</p>",
                    sources: [{ id: "WATE813-00029", set: 4, question: 99 }]
                },
                {
                    id: "distribution-joints-restraint-and-lead-legacy",
                    title: "A joint must seal, accommodate movement and provide the intended restraint",
                    html: "<p>A joint's duties include hydraulic sealing, transmitting or accommodating movement, and carrying the axial forces assigned to it. Leakage resistance and thrust restraint are not the same property: a flexible gasketed joint may seal well while needing a separate restrained arrangement or thrust support.</p>" +
                        "<p>Spigot-and-socket describes the end geometry: one pipe end enters a receiving bell or socket. Modern versions can use appropriate elastomeric seals. The historical <strong>run-lead joint</strong> used a lead seal in a bell-and-spigot assembly. That terminology does not mean every socket joint contains lead, and the bank's shigot spelling is not a separate joint type.</p>" +
                        "<p>Flanged joints provide dismantlable bolted connections, useful near equipment, but need compatible ratings, alignment, gaskets and bolt procedures. Mechanical couplings accommodate specified joining conditions; welded steel and properly qualified thermoplastic fusion can form continuous joints. Solvent-cement and threaded joints have their own material, size and service limitations. Never assume different material systems can be connected without a rated transition.</p>" +
                        "<p>For potable water, select approved compatible components and control contamination during assembly. Lead is a health hazard; historical recognition is <strong>not a recommendation for new lead work</strong> or an assurance that an old joint is safe. Existing lead-containing infrastructure needs appropriate assessment and managed replacement or repair. Inspect alignment, restraint, bedding and the complete pressure envelope, then test and commission using the applicable procedure.</p>",
                    sources: [{ id: "WATE813-00280", set: 28, question: 94 }]
                },
                {
                    id: "distribution-fittings-flow-and-thrust",
                    title: "Reducers, elbows, tees and unions solve different connection problems",
                    html: "<p>A <strong>reducer</strong> joins different nominal pipe sizes; an elbow changes the direction of a run; a tee creates a branch while retaining a through run. A union provides a dismantlable connection, and a nipple is a short connecting length, often threaded. A plug closes an opening rather than directing the main flow around a bend.</p>" +
                        "<p>A 90° elbow is the conventional answer to turning a pipe run through a right angle, but elbows also have other angles. A tee can create a right-angle branch, so distinguish changing the whole run's direction from adding another flow path. A reducer may be concentric or eccentric, and the appropriate orientation depends on drainage, air management, pump-suction arrangement and the manufacturer's requirements.</p>" +
                        "<p>Continuity requires <strong>Q = Av</strong>; the same flow through a smaller bore has greater mean velocity. A fitting adds local energy loss commonly represented by <strong>h<sub>m</sub> = Kv<sup>2</sup>/(2g)</strong>. Use the velocity and reference section specified for that K value. Not every reducer is sufficiently gradual to make its loss negligible.</p>" +
                        "<p>Changes in pressure area and flow direction also produce forces on fittings. Bends, tees, blank ends and reducers may require restrained joints, anchors or thrust blocks designed for the actual loading and ground conditions. Selecting the correct fitting name does not establish its pressure rating, hydraulic loss, support or resistance to transient forces.</p>",
                    sources: [
                        { id: "WATE813-00021", set: 4, question: 91 },
                        { id: "WATE813-00027", set: 4, question: 97 }
                    ]
                },
                {
                    id: "distribution-isolation-valves-and-materials",
                    title: "Shut-off valves isolate planned sections, not arbitrary equal lengths",
                    html: "<p>An isolation or shut-off valve allows an intended section of the network to be taken out of service. Gate or sluice valves are conventional examples; other appropriately specified valves can also perform isolation. The bank's term <strong>Stoice</strong> is not established terminology. It may be damaged wording for <em>sluice</em>, stop or another isolation-valve term; that reading remains a possibility, not a definite correction of the source.</p>" +
                        "<p>Valve placement follows an isolation plan: consider junctions, crossings, vulnerable mains, critical customers, alternative feeds and the volume or service area affected by a closure. Accessibility, chamber drainage, operating clearance, marking and a maintained valve register are important. An evenly spaced layout can still leave a hospital or an entire pressure zone without a practicable alternative supply.</p>" +
                        "<p>The quoted <strong>180 m</strong> spacing has no verified applicable code and clause here. It is not a universal maximum, minimum or requirement to install valves at exactly that distance. Assess the actual network and the governing specification.</p>" +
                        "<p>Cast-iron bodies with brass or bronze mountings describe a traditional construction, not all gate valves. Ductile iron, other metals, resilient seats and differing stem arrangements are also used. Confirm pressure rating, coating, potable-water compatibility and component suitability. Gate valves are primarily isolation devices; sustained throttling needs a valve selected for the required control and cavitation conditions rather than assuming any partly closed gate is suitable.</p>",
                    sources: [
                        { id: "WATE813-00288", set: 29, question: 90 },
                        { id: "WATE813-00289", set: 29, question: 91 },
                        { id: "WATE813-00290", set: 29, question: 92 }
                    ]
                },
                {
                    id: "distribution-scour-air-and-drainage-valves",
                    title: "Low-point drainage and high-point air management have complementary purposes",
                    html: "<p>A <strong>scour, washout or blow-off valve</strong> provides a controlled discharge for draining or flushing a main. Low points are common locations because water and deposited solids can collect there; dead ends can also need flushing. The location must actually permit the isolated section to drain or develop the required flushing flow.</p>" +
                        "<p>Not every geometric depression automatically requires an identical valve. Pipe profile, isolation boundaries, sediment risk, outfall levels, available pressure and safe disposal determine the arrangement and size. A washout connected carelessly to a drain can create a contamination pathway; the receiving environment and water quality of the discharge also need consideration.</p>" +
                        "<p>Air can accumulate at summits and restrict the effective flow area or disturb operation. Air-release devices remove accumulated air under pressure; air/vacuum devices admit or exhaust larger air volumes during filling, emptying or other specified conditions. Combination devices serve both functions when correctly selected. High points are important, but the complete profile and operating scenarios determine locations and capacity.</p>" +
                        "<p>Air control, pressure relief and scour are not interchangeable duties. A small air-release valve is not necessarily sized to protect a rapidly draining main from vacuum, and admitting or expelling air can interact with transients. Check filling and shutdown procedures and obtain suitable device characteristics rather than assuming that a symbol at every summit provides complete surge protection.</p>",
                    sources: [
                        { id: "WATE813-00030", set: 4, question: 100 },
                        { id: "WATE813-00291", set: 29, question: 93 },
                        { id: "WATE813-00329", set: 32, question: 98 }
                    ]
                },
                {
                    id: "distribution-check-foot-and-altitude-valves",
                    title: "Reverse-flow prevention, pump priming and tank-level control are different duties",
                    html: "<p>A <strong>check or reflux valve</strong> allows flow in its intended direction and closes against reverse flow. Closure behaviour matters: a valve that closes after substantial reversal can contribute to surge. A check valve is not automatically an approved backflow-prevention assembly for every contamination hazard and does not by itself maintain all downstream pressures.</p>" +
                        "<p>A <strong>foot valve</strong> is a check valve at the submerged inlet or lower end of a pump suction line, often combined with a strainer. It helps retain water in a suction system requiring priming when the pump stops. Its resistance contributes to suction losses; clogging or leakage can undermine operation. It cannot create unlimited suction lift, repair an air leak or guarantee that available net positive suction head is adequate.</p>" +
                        "<p>An <strong>altitude valve</strong> controls inflow to an elevated tank or standpipe according to its level-related control arrangement, commonly sensing hydrostatic head. It closes at a set level and reopens according to the selected operating logic. The bank's supplies-water description is incomplete unless this automatic level-control function is understood.</p>" +
                        "<p>Select valves with compatible flow capacity, pressure rating, control range and failure behaviour. Provide necessary isolation and maintainable access. Level control does not replace a hygienic overflow and independent assessment of failure consequences, and a foot or check valve does not replace pressure-relief or transient analysis. The correct valve name is only the start of a functional specification.</p>",
                    sources: [
                        { id: "WATE813-00022", set: 4, question: 92 },
                        { id: "WATE813-00279", set: 28, question: 93 },
                        { id: "WATE813-00292", set: 29, question: 94 },
                        { id: "WATE813-00293", set: 29, question: 95 }
                    ]
                },
                {
                    id: "distribution-tap-spindle-fault-diagnosis",
                    title: "Packing seals a spindle; it does not repair worn operating threads",
                    html: "<p>A screw-down tap converts handle rotation into axial movement through engaged threads. That movement brings the valve's sealing element against its seat. A washer or other closure seal controls leakage through the outlet; gland packing or an equivalent stem seal controls leakage around the moving spindle. These components solve different problems.</p>" +
                        "<p>If the spindle turns or slips without reliably advancing the closure, inspect thread wear, damaged engagement and the mechanism's retaining components. <strong>Replacing packing is not the mechanical remedy for stripped threads.</strong> Packing replacement may be appropriate for leakage around the spindle, while a worn washer or damaged seat can cause outlet dripping even when the mechanism closes normally.</p>" +
                        "<p>The assigned question is also linguistically damaged: it says the spindle slips and the tap does close, without clearly establishing whether failure to close was intended. That ambiguity does not justify the explanation's claim that packing transmits screw motion. Diagnose the actual symptom rather than guessing an unprinted word or defending the stored key.</p>" +
                        "<p>Maintenance requires safe isolation and depressurisation, confirmation of the component design and use of suitable replacement parts or a replacement tap where necessary. After repair, check both closure and external leakage under the approved procedure. These notes explain fault mechanisms; they do not alter the bank or imply that one replacement action is correct for every slipping, stiff or leaking tap.</p>",
                    sources: [{ id: "WATE813-00278", set: 28, question: 92 }]
                },
                {
                    id: "distribution-break-pressure-tanks-and-hgl",
                    title: "An atmospheric break-pressure tank resets head, not every transient — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> no assigned question provides a break-pressure-tank design. In a long downhill gravity main, static pressure can exceed downstream component ratings. An open, properly vented break-pressure tank interrupts the pressurised hydraulic connection by receiving water into a chamber with an atmospheric free surface.</p>" +
                        "<p>At that surface, gauge pressure is zero and the hydraulic grade equals the <strong>water-surface elevation</strong>. With negligible surface velocity, this level is also the downstream supply energy head. The upstream source head does not continue unchanged through the atmospheric break. A bypass, submerged pressurised connection that avoids the break, or blocked vent must not be assumed equivalent to the intended arrangement.</p>" +
                        "<p><em>Added hypothetical profile:</em> source water level 140 m and a downstream point at elevation 80 m would give 60 m static head without a break. A tank with water level 110 m reduces the downstream static head to <strong>30 m</strong>. If the downstream nodal hydraulic-head drop during flow is 8 m, H = 102 m and pressure head is <strong>22 m</strong>, using the stated negligible nodal velocity approximation.</p>" +
                        "<p>Tank location, operating levels, inlet control, overflow, drainage, hygiene and capacity still require design. It cannot be called perfect water-hammer protection: downstream rapid closure, air events and other transients can occur within the new pressure segment. Assess them separately, and distinguish a true atmospheric break from a pressure-reducing valve that remains within a pressurised system.</p>",
                    sources: []
                },
                {
                    id: "distribution-service-reservoir-purpose-and-location",
                    title: "A service reservoir balances time variation while its level establishes supply head",
                    html: "<p>A service or distribution reservoir stores treated water between its production or transmission system and consumers. It absorbs the difference between the inflow schedule and variable demand, allowing treatment or pumping to operate more uniformly where the available storage and control strategy permit. This is the <strong>balancing</strong> function, not merely a large emergency water reserve.</p>" +
                        "<p>Storage can also support fire or emergency provision and improve operating flexibility, but those purposes require separate quantities and rules for preserving usable reserves. A source impounding reservoir stores raw water over a potentially different time scale; a detention reservoir normally attenuates a flow event. The term reservoir alone does not establish the contents or function.</p>" +
                        "<p>An elevated tank or suitably located ground-level reservoir can provide gravity pressure according to its water level and distribution losses. A low-level ground tank may instead require downstream pumping. Tank level varies during operation, so check service pressure at the minimum operating level and maximum static pressure at the high level, not only at a convenient mean elevation.</p>" +
                        "<p>Location also affects access, foundation conditions, seismic and slope exposure, land, security and water quality. Provide maintainable compartments or another continuity strategy where justified. More volume is not automatically better: poor turnover and mixing can degrade quality. Uniform plant operation is possible only if cumulative inflow and outflow can be reconciled within the actual operating storage range.</p>",
                    sources: [
                        { id: "HYDR626-00113", set: 13, question: 68 },
                        { id: "WATE813-00283", set: 28, question: 97 }
                    ]
                },
                {
                    id: "distribution-balancing-mass-curve-derivation",
                    title: "Derive balancing capacity from the range of cumulative imbalance",
                    html: "<p>Let I(t) be reservoir inflow and D(t) demand outflow in compatible volume/time units. Neglect other flows, or include them explicitly in the balance. Continuity gives <strong>dS/dt = I − D</strong>, where S is stored usable volume. Integrating from the chosen start time gives <strong>S(t) = S<sub>0</sub> + B(t)</strong>, with <strong>B(t) = ∫[I(t) − D(t)]dt</strong> and B(0) = 0.</p>" +
                        "<p>For a repeatable cycle, total inflow must equal total outflow, so B at the end returns to zero. The smallest initial usable storage avoiding an empty tank is <strong>S<sub>0</sub> = −min B</strong>, including the initial zero in the search. The resulting maximum usable storage is <strong>C<sub>b</sub> = max B − min B</strong>. This is the balancing capacity, not a fixed fraction of daily demand.</p>" +
                        "<p>On a mass-curve plot, cumulative inflow and cumulative demand are volumes. Their vertical difference is B, not an instantaneous rate. With piecewise-constant rates, each interval contributes <strong>ΔB = (I − D)Δt</strong>; peaks occur at the interval boundaries in that assumed model. More detailed demand variation may require finer time steps.</p>" +
                        "<p>This derivation extends the bank's balancing-purpose question; it does not claim the bank supplies a demand curve. Fire, outage, dead storage, freeboard and operating-control margins are not automatically included. If the cycle has a persistent deficit, merely increasing tank capacity delays failure rather than creating a sustainable repeating operation.</p>",
                    sources: [{ id: "WATE813-00283", set: 28, question: 97 }]
                },
                {
                    id: "distribution-balancing-worked-table",
                    title: "A six-period demand pattern requires 40 m3 of balancing storage — syllabus extension",
                    html: "<p><strong>Syllabus extension; all rates and times in this example are hypothetical.</strong> The assigned bank gives no balancing table. Assume constant inflow <strong>10 m<sup>3</sup>/hour</strong> for 24 hours. Demand rates in six successive four-hour periods are <strong>4, 16, 12, 8, 14 and 6 m<sup>3</sup>/hour</strong>. Both daily inflow and demand equal 240 m<sup>3</sup>.</p>" +
                        "<p>Each period supplies 40 m<sup>3</sup>. Subtract the period's demand volume, not its hourly rate. The signed period changes are <strong>+24, −24, −8, +8, −16 and +16 m<sup>3</sup></strong>. The table uses B(0) = 0 and an initial usable storage of 16 m<sup>3</sup>.</p>" +
                        "<table><thead><tr><th scope='col'>End hour</th><th scope='col'>Period demand, m<sup>3</sup></th><th scope='col'>Cumulative B, m<sup>3</sup></th><th scope='col'>Usable S, m<sup>3</sup></th></tr></thead><tbody>" +
                        "<tr><th scope='row'>0</th><td>Not applicable</td><td>0</td><td>16</td></tr>" +
                        "<tr><th scope='row'>4</th><td>16</td><td>24</td><td>40</td></tr>" +
                        "<tr><th scope='row'>8</th><td>64</td><td>0</td><td>16</td></tr>" +
                        "<tr><th scope='row'>12</th><td>48</td><td>−8</td><td>8</td></tr>" +
                        "<tr><th scope='row'>16</th><td>32</td><td>0</td><td>16</td></tr>" +
                        "<tr><th scope='row'>20</th><td>56</td><td>−16</td><td>0</td></tr>" +
                        "<tr><th scope='row'>24</th><td>24</td><td>0</td><td>16</td></tr></tbody></table>" +
                        "<p>The maximum B is 24 and minimum is −16, giving <strong>C<sub>b</sub> = 24 − (−16) = 40 m<sup>3</sup></strong>. S returns to its initial value, so this ideal cycle repeats. Starting empty at hour zero would fail later despite equal daily totals.</p>" +
                        "<p>Zero in this table is the bottom of the modelled <em>usable balancing band</em>, not permission to uncover an outlet or exhaust protected reserves. Actual tank dimensions require operating levels, dead volume, reserves, freeboard and water-quality constraints. Changing the pumping schedule requires rebuilding the balance.</p>",
                    sources: []
                },
                {
                    id: "distribution-reserves-and-total-storage",
                    title: "Determine outage and fire reserves from scenarios, not an unverified ceiling",
                    html: "<p>Breakdown storage sustains an agreed service level during a credible interruption. Its basis includes outage duration, demand, remaining inflow, repair access, redundancy and failure consequences. Apply <strong>dS/dt = I<sub>available</sub> − D</strong> with the actual initial usable storage, capacity ceiling and operating policy. For zero inflow and constant demand D over duration T, <strong>V<sub>outage</sub> = DT</strong>. Variable schedules require a cumulative balance that accounts for replenishment; summing only positive interval deficits is not necessarily the exact storage requirement.</p>" +
                        "<p><em>Added hypothetical scenario:</em> maintaining 10 m<sup>3</sup>/hour for six hours with no inflow requires <strong>60 m<sup>3</sup></strong>. If a design explicitly preserves that reserve below an independent 40-m<sup>3</sup> balancing band, the two require <strong>100 m<sup>3</sup> usable storage</strong> before other allowances. That addition is conditional; overlapping fire/outage scenarios and shared storage must be treated consistently rather than counted twice.</p>" +
                        "<p>The bank's claim that breakdown reserve is generally no more than <strong>25% of total storage</strong> has no verified universal basis here. Even a stipulated percentage needs its denominator. <em>A separate hypothetical percentage exercise:</em> if B = 40 m<sup>3</sup> is all non-reserve usable storage and reserve is 25% of total T, then T = 40 + 0.25T, giving <strong>T = 53.3333 m<sup>3</sup></strong> and reserve 13.3333 m<sup>3</sup>. This is an alternative assumption, not the six-hour scenario.</p>" +
                        "<p>Dead storage and freeboard are not available emergency supply. Excessive residence time needs turnover and mixing control, but that concern does not establish a universal reserve cap. Record the scenario, protected operating levels and replenishment plan before selecting capacity.</p>",
                    sources: [{ id: "WATE813-00031", set: 5, question: 91 }]
                },
                {
                    id: "distribution-branch-grid-ring-and-radial-layouts",
                    title: "A connected loop creates an alternative route, not guaranteed circulation",
                    html: "<p>A <strong>branch or dead-end layout</strong> resembles a tree, with one route from a single source to each downstream point. It can follow irregular roads and can simplify initial construction and flow tracing. Closing an upstream section normally disconnects its descendants unless a separate feed or storage arrangement exists. Dead ends can also have poor turnover and require managed flushing.</p>" +
                        "<p>A <strong>gridiron</strong> interconnects mains around multiple blocks and often suits rectangular streets. A ring main forms a perimeter or other principal loop with connections inward. A radial arrangement divides a planned area into sectors supplied from a suitably located point or storage arrangement. Mixed layouts are common; old town does not prescribe a unique solution or prove a tree has the least life-cycle cost.</p>" +
                        "<p>Loops provide potential alternative paths, but flow is driven by hydraulic-head differences and nodal withdrawals. A link can have very low flow or reverse direction as demand and tank levels change. Therefore grid topology does <strong>not ensure continuous circulation, continuous supply or safe water quality</strong>. A closed valve can also turn a drawn loop into an operating branch.</p>" +
                        "<p>Compare pressure, isolation consequences, fire-flow performance, capital and operating cost, leakage management and water age under realistic scenarios. Extra pipes can improve resilience but do not create more source water. The bank's repair disadvantage is valid for a simple tree, while low terminal pressure and residual-decay concerns can also be legitimate disadvantages rather than mutually exclusive choices.</p>",
                    sources: [
                        { id: "WATE813-00025", set: 4, question: 95 },
                        { id: "WATE813-00028", set: 4, question: 98 },
                        { id: "WATE813-00282", set: 28, question: 96 }
                    ]
                },
                {
                    id: "distribution-hazen-williams-and-darcy-weisbach",
                    title: "A head-loss equation is not the algorithm that solves the network",
                    html: "<p>Hazen–Williams is an empirical water-pipe relation. A common rounded SI magnitude form is <strong>h<sub>f</sub> = 10.67 LQ<sup>1.852</sup>/(C<sup>1.852</sup>D<sup>4.87</sup>)</strong>, with Q in m<sup>3</sup>/s and L, internal diameter D and head loss h<sub>f</sub> in metres. C is the empirical roughness parameter. Omitting L gives a friction gradient, not the total head loss.</p>" +
                        "<p>The English EPANET 2.2 manual gives its table in feet and cfs; the displayed SI form is the rounded conversion, not permission to mix unit systems. Hazen–Williams is not a general viscosity-dependent fluid law and must not be used indiscriminately for laminar flow, non-water fluids or substantially different conditions.</p>" +
                        "<p><strong>Darcy–Weisbach:</strong> h<sub>f</sub> = f(L/D)v<sup>2</sup>/(2g), with v = 4Q/(πD<sup>2</sup>). The Darcy friction factor f depends on Reynolds number and relative roughness in the appropriate regime. It is not Hazen–Williams C and not the Fanning friction factor. Local losses add as <strong>ΣKv<sup>2</sup>/(2g)</strong>, using each fitting's specified reference velocity.</p>" +
                        "<p>Both equations can support distribution analysis. Choose an applicable model, actual bore and justified roughness; deposits and ageing can change performance. A network solver additionally enforces continuity and consistent heads across all links. The bank's familiar Hazen–Williams answer does not make Darcy–Weisbach invalid or turn either equation into Hardy Cross or another network algorithm.</p>",
                    sources: [{ id: "WATE813-00285", set: 28, question: 98 }]
                },
                {
                    id: "distribution-pipe-headloss-worked-example",
                    title: "Compare two stated pipe models without averaging their answers — syllabus extension",
                    html: "<p><strong>Syllabus extension; all pipe and roughness data here are hypothetical.</strong> The bank supplies no complete head-loss dataset. Assume water flow Q = 0.020 m<sup>3</sup>/s through L = 500 m of pipe with internal D = 0.200 m. Use g = 9.81 m/s<sup>2</sup>, illustrative Hazen–Williams C = 130, separately stipulated Darcy f = 0.020 and total local coefficient ΣK = 2 based on the same pipe velocity.</p>" +
                        "<p>Area = πD<sup>2</sup>/4, so <strong>v = 0.6366198 m/s</strong> and v<sup>2</sup>/(2g) = 0.0206567 m. With the 10.67 coefficient and 4.87 diameter exponent, Hazen–Williams gives <strong>h<sub>f</sub> = 1.173824 m</strong>. Darcy–Weisbach gives 0.020 × (500/0.200) × 0.0206567 = <strong>1.032836 m</strong>, retaining unrounded values in calculation.</p>" +
                        "<p>The local loss is 2 × 0.0206567 = <strong>0.041313 m</strong>. Total modelled losses are therefore <strong>1.215137 m</strong> with the chosen Hazen–Williams model, or <strong>1.074149 m</strong> with the chosen Darcy model. These independently assumed roughness inputs were not calibrated to represent identical friction, so equality is not expected and averaging the two results has no design justification.</p>" +
                        "<p>A real comparison needs water viscosity, measured or justified pipe roughness, verified fitting data and suitable model applicability. Head loss is distinct from elevation change; pressure at a downstream point still requires the source head and node elevation. These small numerical losses do not establish acceptable service pressure, surge capacity, hygienic performance or the correct nominal pipe class.</p>",
                    sources: []
                },
                {
                    id: "distribution-branch-continuity-and-hgl-example",
                    title: "Branch flow follows continuity; critical pressure also depends on elevation — syllabus extension",
                    html: "<p><strong>Syllabus extension; this entire branch network is hypothetical.</strong> The bank gives no elevations, pipe resistances or nodal withdrawals. Assume a reservoir with H = 100 m feeds junction A, which has no withdrawal. A supplies B at 4 L/s and C at 6 L/s. Steady continuity requires the reservoir–A flow to be <strong>10 L/s</strong>.</p>" +
                        "<p>Adopt a simple positive-flow model h = rQ<sup>2</sup>, with Q numerically in L/s and r in m/(L/s)<sup>2</sup>. Let r be 0.05 for the common pipe, 0.50 for A–B and 0.25 for A–C. The losses are respectively <strong>5, 8 and 9 m</strong>. Consequently H<sub>A</sub> = 95 m, H<sub>B</sub> = 87 m and H<sub>C</sub> = 86 m.</p>" +
                        "<table><thead><tr><th scope='col'>Node</th><th scope='col'>H, m</th><th scope='col'>Elevation z, m</th><th scope='col'>Pressure head H − z, m</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>A</th><td>95</td><td>80</td><td>15</td></tr>" +
                        "<tr><th scope='row'>B</th><td>87</td><td>75</td><td>12</td></tr>" +
                        "<tr><th scope='row'>C</th><td>86</td><td>70</td><td>16</td></tr></tbody></table>" +
                        "<p>Although C has the lowest hydraulic head, <strong>B has the lowest pressure head</strong>. Searching only for the lowest H or longest branch can therefore miss the critical service location. Walk each source-to-node path and use a common elevation datum.</p>" +
                        "<p>This model assumes fixed delivered demands, negligible nodal velocity heads and the stated resistances. It supplies no minimum-pressure standard. Check maximum-day/peak and isolation scenarios, and use pressure-dependent delivery if a fixed-demand solution becomes physically impossible. A friction calculation is not permission to supply full demand at negative pressure.</p>",
                    sources: []
                },
                {
                    id: "distribution-hardy-cross-signed-loop-derivation",
                    title: "Hardy Cross corrects a signed head imbalance while preserving continuity",
                    html: "<p>For a closed loop without pumps or imposed head jumps, the algebraic sum of hydraulic-head changes must be zero. Choose a positive direction around the loop and assign <strong>signed Q</strong> to every pipe. For a fixed-resistance power model, signed loss is <strong>h = rQ|Q|<sup>n−1</sup></strong>, where r is positive and carries the required units. Opposing flow contributes a negative signed loss.</p>" +
                        "<p>Begin with trial flows satisfying continuity at every junction. Add the same small signed loop correction ΔQ to each loop-oriented flow. Linearising the head sum gives <strong>0 ≈ Σh + ΔQ Σ[nr|Q|<sup>n−1</sup>]</strong>. Hence <strong>ΔQ = −Σh / Σ[nr|Q|<sup>n−1</sup>]</strong>. The numerator retains signs; the denominator is the sum of positive local derivatives for this model.</p>" +
                        "<p>The correction circulates around a closed loop, adding an equal inflow and outflow at each node, so continuity is preserved. Recompute head losses after each update. If a flow changes sign, update its physical direction rather than continuing to use its old positive magnitude. Shared pipes in multiple loops require consistent orientations and the combined corrections.</p>" +
                        "<p>The derivation assumes fixed resistances and the chosen power law; changing friction factors, pumps and control valves require suitable treatment. It explains a classical teaching method, not a universal contemporary solver. <strong>EPANET 2.2 uses the Global Gradient Algorithm</strong>, not Hardy Cross. Small corrections alone are insufficient: also check head residuals, continuity and plausible delivered pressures.</p>",
                    sources: [{ id: "WATE813-00287", set: 28, question: 100 }]
                },
                {
                    id: "distribution-hardy-cross-inconsistent-headsum-example",
                    title: "A +5.6 m loop error needs a negative circulation correction — syllabus extension",
                    html: "<p><strong>Syllabus extension; all network data are hypothetical.</strong> Two parallel pipes carry a total 10 L/s from A to B. Orient the loop A-to-B through pipe 1 and B-to-A through pipe 2. Use n = 2, r<sub>1</sub> = 0.20 and r<sub>2</sub> = 0.10 in m/(L/s)<sup>2</sup>, with trial signed flows <strong>+6 and −4 L/s</strong>.</p>" +
                        "<p>Continuity is satisfied because Q<sub>1</sub> − Q<sub>2</sub> = 10. The head sum is not: <strong>+0.20 × 6<sup>2</sup> − 0.10 × 4<sup>2</sup> = +5.6 m</strong>. The derivative sum is 2 × 0.20 × 6 + 2 × 0.10 × 4 = 3.2 m/(L/s), so <strong>ΔQ = −1.75 L/s</strong>, producing +4.25 and −5.75 L/s.</p>" +
                        "<table><thead><tr><th scope='col'>State</th><th scope='col'>Signed Q<sub>1</sub>, L/s</th><th scope='col'>Signed Q<sub>2</sub>, L/s</th><th scope='col'>Σh, m</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Initial</th><td>6</td><td>−4</td><td>+5.6</td></tr>" +
                        "<tr><th scope='row'>After correction 1</th><td>4.25</td><td>−5.75</td><td>+0.30625</td></tr>" +
                        "<tr><th scope='row'>After correction 2</th><td>4.14254386</td><td>−5.85745614</td><td>+0.001154682</td></tr>" +
                        "<tr><th scope='row'>After correction 3</th><td>4.14213563</td><td>−5.85786437</td><td>About +1.67 × 10<sup>−8</sup></td></tr></tbody></table>" +
                        "<p>The second and third corrections are −0.10745614 and −0.000408230 L/s. Unrounded values were used; displayed flows are rounded. Analytically, equal path losses require 0.20q<sub>1</sub><sup>2</sup> = 0.10q<sub>2</sub><sup>2</sup> with both q positive A-to-B and q<sub>1</sub> + q<sub>2</sub> = 10. Thus q<sub>1</sub> = <strong>4.14213562</strong>, q<sub>2</sub> = <strong>5.85786438 L/s</strong>, and common loss is <strong>3.43145751 m</strong>. The negative loop sign of pipe 2 does not mean its physical flow is B-to-A.</p>",
                    sources: []
                },
                {
                    id: "distribution-network-design-and-model-checks",
                    title: "Solve, inspect and stress-test the network model — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> the bank does not supply a complete design network, demand pattern or model calibration. Start with surveyed elevations, connectivity, actual internal diameters, justified roughness, demand locations, source heads, tank geometry and operating levels, and pump/valve characteristics. A solver cannot correct an invented connection or inconsistent datum.</p>" +
                        "<ol><li>Allocate non-duplicated demands and time patterns. Distinguish annual-average volume, maximum day, peak hour and any stipulated fire scenario.</li><li>Choose appropriate head-loss and delivery models, then solve continuity and hydraulic-head relationships.</li><li>Inspect pressure at high-demand/low-tank conditions and maximum pressure at low demand or shutoff. Review flow direction, velocity and pump/control behaviour.</li><li>Test isolation, power loss, source outage and the necessary recovery and storage scenarios.</li><li>Check sensitivity to growth, roughness, valve status and uncertain data; compare with field observations where available.</li></ol>" +
                        "<p>EPANET 2.2's <strong>demand-driven analysis</strong> fixes withdrawals and can produce impossible delivered-demand results at negative pressure. Its pressure-driven option makes delivery depend on pressure. Neither mode is automatically correct without justified parameters and boundary conditions. The hydraulic solver is the <strong>Global Gradient Algorithm</strong>.</p>" +
                        "<p>Hydraulic adequacy, transient resistance and water quality need separate but coordinated checks. Water age and disinfectant modelling require time-varying operation and reaction/mixing assumptions. A converged model is evidence of solved equations under its assumptions, not a certificate of safe water, calibrated performance, approved pipe sizes or code compliance.</p>",
                    sources: []
                },
                {
                    id: "distribution-hydrants-and-spacing-provenance",
                    title: "A spacing number without its code and inequality cannot establish coverage",
                    html: "<p>A hydrant provides an accessible connection for fire-fighting water. Its usefulness depends on available flow and residual pressure during the specified event, location relative to access and risks, compatible equipment, isolation arrangements and reliable operation. A nearby hydrant on an undersupplied main does not establish protection.</p>" +
                        "<p>The bank attributes <strong>75 m</strong> hydrant spacing to a National Building Code but does not establish the country, part, edition, clause or application. That attribution remains unverified here. The stem says <strong>minimum interval</strong>. Coverage requirements are often expressed as a maximum permissible separation or access distance; a minimum separation controls the opposite inequality and can serve a different purpose. Do not silently change minimum to maximum to make the question sound plausible.</p>" +
                        "<p>The separate <strong>180 m</strong> isolation-valve spacing is also an unverified conventional figure, not evidence for a current hydrant or valve-spacing rule. Hydrants and isolation valves have different functions and should not be assigned the same planning logic merely because both lie on water mains.</p>" +
                        "<p>For an actual design, identify the applicable fire and water-supply requirements, required event flow and duration, allowable hydrant residual pressure, access route and measurement convention. Check the event against tank levels, concurrent service demand and the credible unavailable component. Neither 75 m nor 180 m is adopted here as an authenticated Nepal minimum, maximum or universal exact spacing.</p>",
                    sources: [
                        { id: "BASI674-00295", set: 23, question: 12 },
                        { id: "WATE813-00289", set: 29, question: 91 }
                    ]
                },
                {
                    id: "distribution-hygiene-turnover-and-commissioning",
                    title: "Keep the completed network sanitary and operable — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> the assigned records do not provide a commissioning protocol, disinfectant-decay study or tank-mixing dataset. Protect pipes and fittings from contamination during storage and installation, prevent dirty water entry during repairs, and follow the applicable pressure-testing, flushing, disinfection and microbiological-verification procedure before returning a section to potable service. No unverified dose or contact-time prescription is supplied here.</p>" +
                        "<p>Reservoir covers, vents, overflows, drains and access openings need hygienic protection and maintenance. Poorly sealed chambers and unsafe drain connections can bypass treatment. Assess internal flow paths, level cycling and cleaning access. Confined-space work requires appropriately trained personnel and controlled procedures, not informal entry because a tank appears empty.</p>" +
                        "<p>EPANET 2.2 offers complete-mix, two-compartment, FIFO and LIFO tank-quality representations. They are model assumptions, not interchangeable descriptions of every real tank. <strong>Water age</strong> is time spent by a water parcel in the network; it is a non-specific quality indicator, not proof of potability or a direct chlorine-residual measurement.</p>" +
                        "<p>A loop can still contain low-flow links, and a large tank can retain old water despite adequate pressure. Verify quality at representative source, tank, distribution and consumer points, investigate low-pressure events, and maintain valves, records and emergency plans. Hydraulic continuity, continuous service and sanitary integrity must each be demonstrated; none follows automatically from a grid drawn on a plan.</p>",
                    sources: []
                }
            ],
            gaps: [
                "Syllabus extensions — distribution-intake-location-selection, distribution-intake-types-and-construction and distribution-intake-open-area-and-protection: no directly assigned intake-siting, type-selection or construction question supplies design data. The intake comparison is conceptual; Q = 0.030 m3/s, opening velocity 0.15 m/s and effective open fraction 0.60 are hypothetical, not approved ecological or engineering limits.",
                "Syllabus extension — distribution-break-pressure-tanks-and-hgl: no assigned BPT dimensions or profile exist. The 140/110/80-m levels and 8-m flowing head drop are added assumptions. Atmospheric head reset is explained, but tank capacity, maximum operating level, hygiene, transient control and actual pressure classes need project data.",
                "Syllabus extension — distribution-balancing-worked-table: the six four-hour demand rates, constant 10-m3/hour inflow, initial 16-m3 storage and resulting 40-m3 balancing swing are hypothetical. The derivation relates to the bank's purpose question; the table is not recovered bank data. Protected reserves, dead storage and freeboard remain outside that balancing band.",
                "The six-hour outage and 25%-of-total reserve calculations are separate labelled hypothetical scenarios. No universal 25% reserve ceiling, fire duration, simultaneous-event rule or local tank-size prescription is verified.",
                "Syllabus extension — distribution-pipe-headloss-worked-example: L = 500 m, D = 0.200 m, Q = 0.020 m3/s, C = 130, Darcy f = 0.020 and sum K = 2 are assumed. The two roughness models were not calibrated to each other, and actual water temperature, material condition, fittings and pressure envelope remain unspecified.",
                "Syllabus extensions — distribution-branch-continuity-and-hgl-example and distribution-hardy-cross-inconsistent-headsum-example: all network topology, heads, elevations, demands and resistance coefficients are hypothetical. The equations and residuals demonstrate analysis, not an assigned project or an approved pressure/velocity criterion.",
                "Syllabus extensions — distribution-network-design-and-model-checks and distribution-hygiene-turnover-and-commissioning: no calibrated EPANET model, reaction study, actual tank-mixing behaviour, field-pressure record or commissioning acceptance dataset is provided. Global Gradient, DDA/PDA and water-age distinctions are supported by the identified English EPANET 2.2 manual.",
                "The NBC 75-m hydrant claim and 180-m valve claim lack an authenticated country/part/edition/clause and inequality direction. Stoice may be damaged sluice or other isolation-valve wording, but no definite original term is established. These holds are not corrected bank keys.",
                "The thin-wall 20/10-MPa stress illustration does not establish a material allowable, pipe class, corrosion allowance, external-collapse capacity or surge rating. Approved materials, joints and fittings must be selected for the actual pressure, temperature, soil and potable-water service.",
                "Intake works, storage, pipe installation and maintenance require site-specific engineering, environmental and safety procedures. No fixed Nepal screen velocity, intake setback, minimum residual pressure, disinfectant commissioning dose or guarantee of current code compliance is invented."
            ],
            cautions: [
                {
                    html: "<p><strong>The 75-m NBC attribution and minimum wording remain unresolved.</strong> No country, part, edition or clause is authenticated. A minimum interval and maximum separation impose opposite constraints; do not silently invert the stem or advertise 75 m as a verified Nepal requirement. Hydrant adequacy also needs flow, pressure, duration and access checks.</p>",
                    sources: [{ id: "BASI674-00295", set: 23, question: 12 }]
                },
                {
                    html: "<p><strong>Uniform production requires enough usable balancing storage.</strong> A distribution reservoir can absorb demand variation, but its presence alone does not guarantee constant-rate pumping or treatment. Cumulative inflow and outflow must fit within the operating band, with appropriate controls and a sustainable volume balance.</p>",
                    sources: [
                        { id: "HYDR626-00113", set: 13, question: 68 },
                        { id: "WATE813-00283", set: 28, question: 97 }
                    ]
                },
                {
                    html: "<p><strong>A reducer is not automatically a low-loss gradual transition.</strong> Geometry, direction and area ratio matter. The correct size-changing fitting still needs compatible pressure rating, jointing and thrust support; its name does not establish a negligible head loss.</p>",
                    sources: [{ id: "WATE813-00021", set: 4, question: 91 }]
                },
                {
                    html: "<p><strong>A 90-degree run bend differs from a tee branch.</strong> Elbow is the intended fitting, but elbows are not restricted to 90 degrees and tees can create right-angle branches. Select by the required topology and geometry, not a claim that only one fitting ever changes flow direction.</p>",
                    sources: [{ id: "WATE813-00027", set: 4, question: 97 }]
                },
                {
                    html: "<p><strong>Altitude means level control, not simply delivering water to a tank.</strong> The device's sensing and set-point logic controls tank inflow. It is not interchangeable with a check, scour or pressure-relief valve, and it does not remove the need to assess overflow and failure conditions.</p>",
                    sources: [
                        { id: "WATE813-00022", set: 4, question: 92 },
                        { id: "WATE813-00292", set: 29, question: 94 }
                    ]
                },
                {
                    html: "<p><strong>Network layout answers are tendencies, not guarantees.</strong> A simple dead-end tree loses downstream supply when isolated, but low terminal pressure and poor residual retention can also be disadvantages. Irregular streets do not force one layout or prove least cost. Grids provide possible alternative routes, not guaranteed circulation, continuous supply or safe water quality.</p>",
                    sources: [
                        { id: "WATE813-00025", set: 4, question: 95 },
                        { id: "WATE813-00028", set: 4, question: 98 },
                        { id: "WATE813-00282", set: 28, question: 96 }
                    ]
                },
                {
                    html: "<p><strong>External vulnerability depends on pipe geometry and support.</strong> Thin steel shells can buckle under external pressure or vacuum, but every steel pipe is not inherently weak externally. Wall thickness, imperfections, corrosion, restraint, bedding and soil support govern the relevant collapse checks. Hoop tension alone does not establish pipe adequacy.</p>",
                    sources: [{ id: "WATE813-00029", set: 4, question: 99 }]
                },
                {
                    html: "<p><strong>Low-point scour placement is functional, not an automatic valve at every depression.</strong> Drainability, isolated sections, sediment risk and a safe outfall determine provision. Air devices are selected from the profile and operating conditions; an air-release symbol at a summit is not proof of adequate vacuum or surge protection.</p>",
                    sources: [
                        { id: "WATE813-00030", set: 4, question: 100 },
                        { id: "WATE813-00291", set: 29, question: 93 },
                        { id: "WATE813-00329", set: 32, question: 98 }
                    ]
                },
                {
                    html: "<p><strong>The 25%-of-total breakdown cap is unverified.</strong> Credible outage duration, service target and available inflow determine required reserve. Water-age concerns do not prove a universal percentage ceiling. If a percentage is stipulated, state whether it is of total storage or of another component before calculating it.</p>",
                    sources: [{ id: "WATE813-00031", set: 5, question: 91 }]
                },
                {
                    html: "<p><strong>Packing is not the screw-motion mechanism.</strong> The bank's claim that worn packing makes the spindle slip and that replacing packing restores thread engagement is mechanically unsound. Packing seals around the stem; slipping or non-advancing operation can involve worn threads or retaining components. The does-close wording is itself ambiguous, so do not manufacture a definitive repair from an assumed missing not. The stored key remains unchanged.</p>",
                    sources: [{ id: "WATE813-00278", set: 28, question: 92 }]
                },
                {
                    html: "<p><strong>A foot valve helps retain prime; it does not guarantee suction performance.</strong> It belongs at the inlet end of the suction line in the applicable arrangement, often with a strainer. Leakage, clogging, air entry and insufficient available suction head can still prevent successful pumping.</p>",
                    sources: [{ id: "WATE813-00279", set: 28, question: 93 }]
                },
                {
                    html: "<p><strong>Run-lead is a historical joint description, not present potable-work advice.</strong> Spigot-and-socket geometry can use modern non-lead seals; shigot is damaged spelling. Lead presents health risks, and historical recognition does not authenticate approval or safety of new or existing lead-containing joints.</p>",
                    sources: [{ id: "WATE813-00280", set: 28, question: 94 }]
                },
                {
                    html: "<p><strong>Elevation alone does not prove gravity service is adequate.</strong> Available head must cover conveyance losses and the required residual pressure throughout the operating range. Gravity supply can still require break-pressure arrangements, controls and all appropriate treatment and hygiene measures.</p>",
                    sources: [{ id: "WATE813-00284", set: 1, question: 98 }]
                },
                {
                    html: "<p><strong>Hazen–Williams is common, not exclusive.</strong> Darcy–Weisbach is also valid when applied with an appropriate friction model. The empirical equation is distinct from the algorithm solving a pipe network. Retain length and the stated unit system; omitting L gives a gradient, not total head loss.</p>",
                    sources: [{ id: "WATE813-00285", set: 28, question: 98 }]
                },
                {
                    html: "<p><strong>GI service pipes are a conventional practice, not a universal prescription.</strong> GI commonly means zinc-coated steel, not proof of cast-iron construction or permanent corrosion immunity. Current approved potable materials and the actual water and pressure conditions determine suitability. Lead service pipe is not endorsed as an alternative.</p>",
                    sources: [{ id: "WATE813-00286", set: 28, question: 99 }]
                },
                {
                    html: "<p><strong>Hardy Cross is not the universal modern network solver.</strong> It is an important classical loop method. EPANET 2.2 explicitly uses Todini's Global Gradient Algorithm. The bank's most-widely-used claim is not authenticated, and applying a head-loss formula alone is not a network solution.</p>",
                    sources: [{ id: "WATE813-00287", set: 28, question: 100 }]
                },
                {
                    html: "<p><strong>Stoice is unresolved source text.</strong> Sluice is a plausible intended word, while stop/gate terminology also relates to isolation. None is asserted as a definite recovery of the original. Teach the shut-off function without pretending an unrecognised term is an established valve category.</p>",
                    sources: [{ id: "WATE813-00288", set: 29, question: 90 }]
                },
                {
                    html: "<p><strong>The 180-m spacing is not a verified universal requirement.</strong> The explanation's 150–180-m range lacks an authenticated applicable document here. Isolation consequences, topology, critical services and access govern placement along with the actual specification. Do not infer minimum, maximum or exact-spacing status from the stored answer.</p>",
                    sources: [{ id: "WATE813-00289", set: 29, question: 91 }]
                },
                {
                    html: "<p><strong>Cast iron with brass mountings is one traditional construction.</strong> Gate-valve bodies, stems, seats and seals are not universally those materials. Verify the specified pressure rating, corrosion protection and potable-water compatibility of the complete product rather than selecting only by the bank's material mnemonic.</p>",
                    sources: [{ id: "WATE813-00290", set: 29, question: 92 }]
                },
                {
                    html: "<p><strong>Reverse-flow closure is not comprehensive system protection.</strong> Reflux and check describe the one-way function. Closure dynamics can themselves contribute to surge, and a simple check valve is not necessarily the approved backflow-protection assembly for a given contamination hazard or a guarantee of downstream pressure.</p>",
                    sources: [{ id: "WATE813-00293", set: 29, question: 95 }]
                },
                {
                    html: "<p><strong>Source-free extension boundary:</strong> the atmospheric BPT, mass-curve table, branch network and signed Hardy Cross example use explicitly added assumptions, not hidden bank questions. A BPT does not guarantee perfect surge protection, and calculated balancing capacity excludes any unmodelled reserve, dead storage or freeboard. No fabricated source ID is attached to these limitations.</p>",
                    sources: []
                }
            ],
            references: [
                {
                    title: "US EPA — EPANET 2.2 User Manual, English edition, chapter 3: Network Model; pipe headloss, local losses, hydraulic simulation, DDA/PDA, tank mixing and water age",
                    url: "https://usepa.github.io/EPANET2.2/3_network_model.html"
                },
                {
                    title: "US EPA — EPANET 2.2 User Manual, English edition, chapter 12 section 12.1: Analysis Algorithms, hydraulics and the Global Gradient Algorithm",
                    url: "https://usepa.github.io/EPANET2.2/12_analysis_algorithms.html"
                },
                {
                    title: "WHO — Guidelines for drinking-water quality, fourth edition incorporating the first and second addenda, 2022; chapters 4 and 7 on water-safety planning, operational barriers and microbial verification",
                    url: "https://www.who.int/publications/i/item/9789240045064"
                }
            ]
        }
    });
})();