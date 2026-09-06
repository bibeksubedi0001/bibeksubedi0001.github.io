(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0705: {
            code: "ACiE0705",
            questionCount: 49,
            blocks: [
                {
                    id: "irrigation-regulator-network-locations",
                    title: "Locate the regulator before naming its function",
                    html: "<p>A regulator controls a particular connection or reach in the canal network. A <strong>canal head regulator</strong> admits water from a river diversion headworks into the canal. A <strong>distributary head regulator</strong> controls the entrance of an offtaking distributary or minor. A <strong>cross regulator</strong> lies across the parent canal, commonly just downstream of an offtake, and maintains an upstream level from which that offtake can draw.</p>" +
                        "<p><strong>Plan-view diagram in words:</strong> follow the river past the diversion weir; a side entrance with gates leads into the main canal. Farther along, a distributary branches sideways through its own head regulator. Across the continuing parent canal, below that branch, a cross regulator restricts the downstream passage and can back water up toward the branch entrance. The two nearby regulators therefore control different paths.</p>" +
                        "<p>During low supply, cross regulation may preserve the head needed at the branch without increasing the total water available. Closing its gates can isolate the downstream parent reach, but then incoming supply and upstream storage must be managed. It is not a device that creates water or independently guarantees every distributary its demand.</p>" +
                        "<p><small>The supplied NEC topic defines the study scope, not numerical design-code requirements. The network descriptions are original teaching schematics. A canal module is outlet terminology; it must not replace the missing term canal head regulator in the diversion-headworks item.</small></p>",
                    sources: [
                        { id: "IRRI951-00068", set: 8, question: 69 },
                        { id: "IRRI951-00345", set: 33, question: 68 },
                        { id: "IRRI951-00346", set: 33, question: 69 },
                        { id: "IRRI951-00347", set: 33, question: 70 }
                    ]
                },
                {
                    id: "irrigation-regulator-operation-and-sediment",
                    title: "Gates, fixed crests, sediment and operating limits",
                    html: "<p>Gates allow an operator to vary an opening, regulate admission and shut off an offtaking channel when supply is not required. Actual discharge still depends on the upstream head, tailwater and hydraulic losses. A gate opening is not a discharge reading unless its rating and operating conditions are known. A <strong>fixed weir also controls stage and discharge</strong> through its crest geometry and head-discharge relation; it lacks the same adjustable opening, not all hydraulic control.</p>" +
                        "<p>A raised sill and suitable approach flow can reduce the entry of sediment-rich near-bed water. This helps sediment management, but fine suspended material can still enter. Sill height, approach currents, flushing arrangements and operation must work together. Neither a head regulator nor a distributary head regulator is a perfect silt separator.</p>" +
                        "<p>Closing a serviceable head regulator limits river-water entry within the structure's design and operating envelope. It cannot stop every flood regardless of overtopping, seepage, gate failure, debris or bank breaches. Similarly, holding up a canal level must respect available freeboard and the effects on upstream outlets.</p>" +
                        "<p>The bank's <strong>90–110° alignment to the weir</strong> is an unverified guide, not a universal angle for every regulator or a rule about a single point on a curved approach. Specify which axes are being compared and study approach flow, sediment, headworks geometry and operation. A quoted angle alone cannot demonstrate smooth entry or safe flood performance.</p>",
                    sources: [
                        { id: "IRRI951-00226", set: 22, question: 72 },
                        { id: "IRRI951-00227", set: 22, question: 73 },
                        { id: "IRRI951-00228", set: 22, question: 74 },
                        { id: "IRRI951-00348", set: 33, question: 71 }
                    ]
                },
                {
                    id: "irrigation-escapes-and-reach-storage",
                    title: "An escape disposes of surplus outside the canal",
                    html: "<p>A <strong>canal escape</strong> releases surplus canal water to a suitable receiving drain, river or other designed outfall. A cross regulator instead passes water into the downstream parent canal. Even if a regulator can pass a large flow, that does not make it an escape: trace where the water goes. A fall lowers the canal profile and dissipates energy; a field outlet delivers an allotted supply.</p>" +
                        "<p>For a reach, a useful continuity statement is <strong>dV<sub>s</sub>/dt = Q<sub>in</sub> + Q<sub>lateral</sub> − Q<sub>delivery</sub> − Q<sub>down</sub> − Q<sub>escape</sub></strong>. Here V<sub>s</sub> is stored water in m<sup>3</sup>, t is time in seconds, and each Q is a flow rate in m<sup>3</sup>/s. Positive imbalance raises storage and generally stage; overtopping depends on the stage-storage relation and available freeboard.</p>" +
                        "<p>Sudden downstream closure, reduced irrigation demand or unexpected lateral inflow can leave a temporary surplus. Closing the canal <em>head</em> regulator ordinarily reduces new inflow rather than directly causing overflow. Water already travelling through the system, delayed gate coordination and changing backwater can still create local stage problems, so an operating sequence and escape route remain important.</p>" +
                        "<p>The stored <strong>one-third of canal capacity</strong> escape rule is not a verified NEC minimum. Required capacity follows the surplus hydrograph, usable reach storage, response time, allowable canal stage and receiving-water tailwater. The escape channel and outfall also need erosion protection and sufficient capacity during the same event; nominal entrance capacity is not enough if the outfall is drowned.</p>",
                    sources: [
                        { id: "IRRI951-00030", set: 4, question: 75 },
                        { id: "IRRI951-00069", set: 8, question: 70 },
                        { id: "IRRI951-00229", set: 22, question: 75 }
                    ]
                },
                {
                    id: "irrigation-crest-and-gated-vent-design-extension",
                    title: "Crest and gated-vent sizing: identify the controlling head",
                    html: "<p><strong>Syllabus extension, without an assigned numerical crest-design question:</strong> first establish design and operating discharges, upstream and downstream levels on a common datum, allowable afflux, approach geometry and sediment/debris conditions. Select a control form and check its rating over the operating range. The following equations organize a calculation; they do not supply missing coefficients or construction dimensions.</p>" +
                        "<p>For a suitable rectangular free-overflow control, write <strong>Q = C<sub>w</sub>L<sub>e</sub>H<sub>t</sub><sup>3/2</sup></strong>. Q is discharge in m<sup>3</sup>/s, L<sub>e</sub> is effective crest length in m and H<sub>t</sub> is upstream total head above the crest in m. In this convention C<sub>w</sub> has SI units m<sup>1/2</sup>/s and incorporates the selected crest model. It is not a universal dimensionless constant. With upstream water-surface elevation Z<sub>w</sub>, crest elevation Z<sub>c</sub> and approach velocity V<sub>a</sub>, <strong>H<sub>t</sub> = Z<sub>w</sub> − Z<sub>c</sub> + αV<sub>a</sub><sup>2</sup>/(2g)</strong>; α is the kinetic-energy correction factor and g ≈ 9.81 m/s<sup>2</sup>.</p>" +
                        "<p>For gated vents under an applicable orifice model, <strong>Q<sub>g</sub> = C<sub>d</sub>A<sub>o</sub>√(2gH<sub>g</sub>)</strong>, with dimensionless C<sub>d</sub> and net open area A<sub>o</sub> = Σb<sub>i</sub>a<sub>i</sub> in m<sup>2</sup>; b<sub>i</sub> and a<sub>i</sub> are clear width and opening height of vent i. For a small free opening with negligible approach velocity, H<sub>g</sub> is upstream head above its centre. For a fully submerged opening between nearly still pools, it is the upstream-minus-downstream water-surface head. Large free sluice openings require the appropriate contraction and jet-energy treatment, not automatic reuse of the small-orifice approximation.</p>" +
                        "<ol><li>Use a justified rating to obtain trial crest length, crest level or vent area; exclude piers and obstructions from the effective opening.</li><li>Recheck approach velocity, contraction, tailwater submergence, gate combinations and available head. A drowned crest needs its applicable submerged rating.</li><li>Check upstream afflux and freeboard, then downstream energy dissipation, scour and foundation seepage together. Iterate the layout rather than treating one discharge equation as a complete design.</li></ol>",
                    sources: []
                },
                {
                    id: "irrigation-impervious-floor-and-seepage-extension",
                    title: "Impervious floors: seepage control and net uplift",
                    html: "<p><strong>Syllabus extension, without an assigned complete impervious-floor design dataset:</strong> an impervious floor separates surface flow from a pervious foundation and helps control underseepage. Upstream and downstream cutoffs modify seepage paths and the pressure distribution. Floor joints, cutoff connections and filters must remain functional. A longer floor alone does not demonstrate a safe exit gradient or eliminate piping.</p>" +
                        "<p>Start with the differential heads and foundation strata for the relevant operating states. Use a suitable seepage model or flow net to obtain pressures beneath the floor and local exit gradients. The local gradient <strong>i = Δh/Δs</strong> is head loss Δh divided by flow-path distance Δs, both in m. Soil stability, stratification, filters and the applicable safety basis determine the allowable gradient; a total creep length is not a substitute for those local checks.</p>" +
                        "<p>At a floor section, let u<sub>b</sub> and u<sub>t</sub> be water pressures at its actual bottom and top faces in kPa, positive in compression. Net upward water loading is <strong>u<sub>net</sub> = u<sub>b</sub> − u<sub>t</sub></strong>. A bare, unfactored unit-area self-weight check is <strong>t ≥ max(0, u<sub>net</sub>)/γ<sub>c</sub></strong>, where t is thickness in m and γ<sub>c</sub> is the full concrete unit weight in kN/m<sup>3</sup>. This is only a lower-bound equilibrium check, not a structural design. If face pressure depends on the trial thickness, solve that dependence consistently. Do not also substitute buoyant unit weight after already accounting for both face pressures.</p>" +
                        "<p>Check bending, joints, sliding, foundation response and the prescribed load/safety combinations, including high groundwater, empty canal, flood tailwater and ineffective drainage where relevant. Surface-flow energy needs a cistern or another suitable dissipater and downstream protection. The seepage floor and the energy-dissipation system solve different problems: neither adequate cutoff length nor a hydraulic jump alone proves the other requirement satisfied.</p>",
                    sources: []
                },
                {
                    id: "irrigation-outlet-purpose-and-module-classes",
                    title: "Classify outlets by which water levels affect discharge",
                    html: "<p>An irrigation outlet transfers water from a supplying channel to a watercourse. Conventional canal management normally places farm-watercourse outlets on distributaries and minors rather than directly on major main canals, so allocation and measurement remain manageable. This is a system-management convention, not a physical impossibility of constructing a turnout in a main canal.</p>" +
                        "<table><thead><tr><th scope='col'>Class</th><th scope='col'>Discharge dependence at a fixed setting</th><th scope='col'>Necessary qualification</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Non-modular</th><td>Depends on both supplying-channel and receiving-watercourse levels.</td><td>A downstream rise can reduce the available head and delivery.</td></tr>" +
                        "<tr><th scope='row'>Semi-modular</th><td>Depends on upstream head but not downstream level while the outlet remains hydraulically isolated from it.</td><td>Independence ends when the modular or free-flow limit is exceeded.</td></tr>" +
                        "<tr><th scope='row'>Rigid modular</th><td>Maintains its intended discharge despite changes in both levels.</td><td>Only within the specified operating range and with the regulating mechanism functioning.</td></tr></tbody></table>" +
                        "<p>A non-modular outlet does have a discharge relationship; it simply needs both boundary levels. That extra dependence makes equitable delivery harder when watercourse levels vary or users interfere with them. A rigid module's constancy is not unlimited: insufficient supply head, excessive backwater, blockage or a changed setting can invalidate the intended behaviour.</p>" +
                        "<p>Draw the upstream pool, controlling crest or opening, and downstream pool before assigning a class. Classification concerns the response of the complete outlet under stated conditions, not merely whether one component is a pipe, gate or masonry wall.</p>",
                    sources: [
                        { id: "IRRI951-00231", set: 22, question: 77 },
                        { id: "IRRI951-00253", set: 24, question: 77 },
                        { id: "IRRI951-00259", set: 25, question: 71 }
                    ]
                },
                {
                    id: "irrigation-free-and-submerged-pipe-outlets",
                    title: "Free and submerged pipe outlets use different heads",
                    html: "<p>For a small, orifice-controlled opening flowing freely to atmosphere, <strong>q = C<sub>d</sub>A√(2gH)</strong>. Here q is outlet discharge in m<sup>3</sup>/s, A is opening area in m<sup>2</sup>, C<sub>d</sub> is an appropriate dimensionless discharge coefficient, g is gravitational acceleration and H is upstream head above the opening centre in m when approach velocity is negligible. A circular opening of diameter D has A = πD<sup>2</sup>/4. The centre-head approximation requires suitable opening size and submergence upstream.</p>" +
                        "<p>For a fully submerged orifice between nearly still pools, replace H with <strong>ΔH = Z<sub>u</sub> − Z<sub>d</sub></strong>, the difference between upstream and downstream water-surface elevations on the same datum. Thus a higher receiving level reduces q at unchanged upstream level. If approach or receiving velocities are important, use the appropriate energy-head corrections and calibrated relation rather than silently identifying total head with water depth.</p>" +
                        "<p>A long full pipe is not automatically a sharp-edged orifice. Its energy balance must include entrance, friction, bends and exit effects. For example, Darcy–Weisbach friction is <strong>h<sub>f</sub> = f(ℓ/D)V<sup>2</sup>/(2g)</strong>, where f is the dimensionless Darcy friction factor, ℓ and D are pipe length and diameter in m, and V = q/A is mean velocity in m/s. Local losses use suitable coefficients; no final C<sub>d</sub> or friction factor is supplied by the bank.</p>" +
                        "<p>A properly operating free pipe outlet is commonly a semi-module, historically called a flexible module. That name does not mean mathematical flexibility equals one. Tailwater drowning, partial filling, a water surface below the opening top, sediment or altered control geometry can change its rating and classification. Establish the actual flow regime first.</p>",
                    sources: [{ id: "IRRI951-00233", set: 22, question: 79 }]
                },
                {
                    id: "irrigation-outlet-sensitivity-and-flexibility",
                    title: "Sensitivity and flexibility compare fractional changes",
                    html: "<p>Let q be outlet discharge, Q parent-channel discharge and Y parent-channel water depth above its bed. At fixed outlet setting and a stated hydraulic regime, <strong>S = d ln q/d ln Y = (Y/q)(dq/dY)</strong> is sensitivity, while <strong>F = d ln q/d ln Q = (Q/q)(dq/dQ)</strong> is flexibility. Both are dimensionless. For finite small changes, use S ≈ (Δq/q)/(ΔY/Y) and F ≈ (Δq/q)/(ΔQ/Q).</p>" +
                        "<p>The derivative dq/dY has units of discharge per unit depth and is not itself sensitivity. Similarly, dq/dQ compares absolute discharge increments but lacks the normalization required for flexibility. A proportional outlet has <strong>F = 1</strong>: its percentage discharge change matches the parent channel's percentage discharge change. It does not generally have S = 1.</p>" +
                        "<p><strong>Original fractional-change illustration:</strong> if a small 2% rise in Y produces a 3% rise in q, S is approximately 1.5. If the same state change increases Q by 5%, F is approximately 0.6. The quantities being compared must refer to the same operating change; mixing independent upstream and downstream variations gives no unique outlet response.</p>" +
                        "<p>For a rigid module with constant q, both S and F are zero within its operating range. The bank's equal-rate wording for S = 1 is meaningful only for <em>equal fractional changes</em> in q and Y, not equality between m<sup>3</sup>/s and m. A semi-module's legacy description as flexible supplies neither S nor F without a head-discharge law.</p>",
                    sources: [
                        { id: "IRRI951-00080", set: 9, question: 69 },
                        { id: "IRRI951-00232", set: 22, question: 78 },
                        { id: "IRRI951-00258", set: 25, question: 70 },
                        { id: "IRRI951-00262", set: 25, question: 74 }
                    ]
                },
                {
                    id: "irrigation-proportional-outlet-setting-derivation",
                    title: "Derive proportional setting instead of memorizing 0.6",
                    html: "<p>At a fixed setting, take the outlet law <strong>q = cH<sup>r</sup></strong> and parent-channel rating <strong>Q = aY<sup>m</sup></strong>. Here r and m are local rating exponents; c and a are coefficients consistent with the geometry and chosen units. Define <strong>H = Y − z</strong>, where z is the opening centre or weir crest height above the parent bed and H &gt; 0 is the effective upstream head. These simple laws assume a stable control and negligible unaccounted velocity-head or tailwater effects.</p>" +
                        "<p>Since dH/dY = 1 at constant z, logarithmic differentiation gives <strong>S = rY/H</strong>. Because d ln Q/d ln Y = m, the chain rule gives <strong>F = S/m = rY/(mH)</strong>. Hence local proportionality, F = 1, requires <strong>H/Y = r/m</strong>. The raised-zero setting is the complement, <strong>z/Y = 1 − r/m</strong>; a head ratio and a crest-height ratio must not share an undefined label.</p>" +
                        "<p>For a wide rectangular, uniform Manning channel with fixed width B, roughness n and slope S<sub>0</sub>, A ≈ BY and R ≈ Y give Q ≈ (B/n)S<sub>0</sub><sup>1/2</sup>Y<sup>5/3</sup>, so m = 5/3. Under those assumptions:</p>" +
                        "<table><thead><tr><th scope='col'>Outlet control</th><th scope='col'>r</th><th scope='col'>Proportional H/Y</th><th scope='col'>Corresponding z/Y</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Orifice</th><td>1/2</td><td>0.30</td><td>0.70</td></tr>" +
                        "<tr><th scope='row'>Rectangular weir</th><td>3/2</td><td>0.90</td><td>0.10</td></tr></tbody></table>" +
                        "<p>The bank's unqualified <strong>0.6</strong> cannot be established from an undefined setting. It could be H/Y for a weir if a different parent rating had m = 2.5, but that exponent is not supplied. Furthermore, a fixed positive z makes H/Y vary as Y changes: setting F = 1 at a design depth does not automatically make the outlet proportional over the entire range.</p>",
                    sources: [{ id: "IRRI951-00230", set: 22, question: 76 }]
                },
                {
                    id: "irrigation-adjustable-semi-module-operation",
                    title: "Manual adjustability is not automatic constant discharge",
                    html: "<p>An adjustable orifice semi-module allows its effective opening or setting to be changed to obtain a desired delivery at a specified upstream condition. Once fixed, it remains a <strong>semi-module</strong>: downstream independence is conditional, and upstream head still affects discharge. Manual resetting after a supply change is not the same as a rigid module automatically compensating for that change.</p>" +
                        "<p><strong>Original head-ratio illustration:</strong> for an unchanged orifice-controlled area and coefficient, q<sub>2</sub>/q<sub>1</sub> = √(H<sub>2</sub>/H<sub>1</sub>). Raising effective head from 0.25 m to 1.00 m doubles discharge, provided the same flow regime remains valid. No numerical C<sub>d</sub> is needed for this ratio. Holding discharge constant would require changing the effective area or another control, not merely describing the outlet as adjustable.</p>" +
                        "<p>Practical selection compares available head, sediment passage, resistance to interference, calibration stability, cost, ease of operation and the desired allocation rule. A device that is convenient to adjust can also be misadjusted; recording and securing the setting are part of management. Sediment accumulation or wear can change the opening and its coefficient even without a deliberate adjustment.</p>" +
                        "<p>Thus the bank's preferred adjustable-orifice answer should be read as a conventional preference under unstated criteria, not proof that one module is always best or always delivers constant flow. Check upstream variation and downstream modular limits separately.</p>",
                    sources: [{ id: "IRRI951-00234", set: 23, question: 68 }]
                },
                {
                    id: "irrigation-cross-drainage-four-arrangements",
                    title: "Cross-drainage: identify the upper stream and lower flow regime",
                    html: "<p>Two independent questions identify the four separated cross-drainage arrangements: <strong>which stream passes above</strong>, and <strong>whether the lower stream has a free surface or fills a pressure conduit</strong>. Do not classify a structure from the word siphon alone. In the usual arrangements below, the upper stream is carried in an open trough or channel.</p>" +
                        "<table><thead><tr><th scope='col'>Arrangement</th><th scope='col'>Upper stream</th><th scope='col'>Lower stream and regime</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Aqueduct</th><td>Canal over drain</td><td>Drain flows with a free surface and clearance below the canal trough.</td></tr>" +
                        "<tr><th scope='row'>Siphon aqueduct</th><td>Canal over drain</td><td>Drain flows under pressure through barrels below the canal.</td></tr>" +
                        "<tr><th scope='row'>Superpassage</th><td>Drain over canal</td><td>Canal flows with a free surface and clearance below the drainage trough.</td></tr>" +
                        "<tr><th scope='row'>Canal siphon</th><td>Drain over canal</td><td>Canal flows through a pressure conduit below the drain.</td></tr></tbody></table>" +
                        "<p><strong>Section sketch in words:</strong> draw the upper stream, the thickness of its supporting trough, and the lower passage beneath it. An air gap over the lower design water surface indicates the free-flow case. A designed full barrel carrying the lower stream indicates the pressure-conduit case. Label canal and drain before attaching the name.</p>" +
                        "<p>Drainage under pressure beneath a canal is therefore a siphon aqueduct, not a superpassage. The label describes the intended design condition; a pressure barrel may carry a smaller flow partially full at another time. Mixing arrangements such as level crossings belong to a different layout and must not be forced into this separated-stream grid.</p>",
                    sources: [
                        { id: "IRRI951-00075", set: 8, question: 76 },
                        { id: "IRRI951-00076", set: 8, question: 77 },
                        { id: "IRRI951-00248", set: 24, question: 72 },
                        { id: "IRRI951-00249", set: 24, question: 73 }
                    ]
                },
                {
                    id: "irrigation-crossing-levels-and-underside-clearance",
                    title: "Compare water levels with the actual trough underside",
                    html: "<p>For an aqueduct, compare the drain's design <strong>high flood level, HFL</strong>, including the applicable crossing afflux, with the <strong>actual underside of the canal trough</strong> and the required clearance. Comparing it only with canal-bed elevation ignores slab thickness and other supporting elements. For a superpassage, make the corresponding comparison between the canal's design water surface and the underside of the drainage trough; full supply level, FSL, is a stated canal operating level, not a guarantee against every backwater rise.</p>" +
                        "<p><strong>Original elevation illustration:</strong> let a canal trough's internal bed elevation be 100.00 m and its slab thickness 0.60 m, so its underside is at 99.40 m. A drain flood surface at 99.70 m lies below the canal bed but above that underside. The proposed free-flow clearance is absent. This does not alone complete a siphon-aqueduct design: waterway, available head, tailwater and a pressure-capable structure still need checking.</p>" +
                        "<p>Survey both stream profiles on one datum and establish bed levels, water-level ranges, structural thickness, debris allowance and upstream/downstream control conditions. A low drain bed can coexist with a high flood surface, and a depressed invert can create head losses even where vertical separation looks generous.</p>" +
                        "<p>The bank stem that simultaneously describes a canal flowing under pressure and a free water surface clear of the support is internally inconsistent. If the lower canal really flows freely, the arrangement is a superpassage; if it runs full under pressure, it is a canal siphon. The two interpretations cannot be combined into one valid hydraulic description.</p>",
                    sources: [
                        { id: "IRRI951-00235", set: 23, question: 69 },
                        { id: "IRRI951-00247", set: 24, question: 71 },
                        { id: "IRRI951-00248", set: 24, question: 72 }
                    ]
                },
                {
                    id: "irrigation-canal-siphon-profile-and-pressure",
                    title: "A depressed canal siphon is driven by available energy head",
                    html: "<p>A canal siphon takes the canal below a drain through a closed passage. Its profile commonly descends from the approach canal, crosses below the obstruction and rises to the downstream canal. Depressing the bed provides geometrical clearance, but entry, bends, friction and exit consume head. A depressed local profile does not automatically require pumping: gravity flow remains possible when upstream energy exceeds downstream energy by the required losses.</p>" +
                        "<p>At a conduit section, <strong>HGL = Z + p/γ<sub>w</sub></strong> and total energy head <strong>E = Z + p/γ<sub>w</sub> + αV<sup>2</sup>/(2g)</strong>. Z is the local point elevation in m above a common datum, p is gauge pressure in kPa, γ<sub>w</sub> is water unit weight in kN/m<sup>3</sup>, V is mean velocity in m/s and α is the kinetic-energy correction factor. For steady flow without a pump, E<sub>u</sub> − E<sub>d</sub> supplies the intervening head losses.</p>" +
                        "<p>Gauge pressure is positive when the HGL is above the local point and negative when it is below that point. Whether the HGL elevation itself is positive or negative relative to an arbitrary survey datum says nothing about pressure sign. Low <em>absolute</em> pressure relative to water's vapour pressure can cause cavitation; a full pipe is not defined by negative pressure.</p>" +
                        "<p>The historical term inverted siphon distinguishes this undercrossing from a true over-crest siphon with a suction region. Use pressure-conduit hydraulics and check high points, air management, sediment deposition, cleaning access, minimum and maximum flows and transient conditions. The bank's pipe-flow choice describes the canal siphon; negative pressure is only a possible local condition, not its defining regime.</p>",
                    sources: [
                        { id: "IRRI951-00237", set: 23, question: 71 },
                        { id: "IRRI951-00251", set: 24, question: 75 }
                    ]
                },
                {
                    id: "irrigation-regulated-level-crossings",
                    title: "Near-level streams may share a regulated crossing",
                    html: "<p>A <strong>level crossing</strong> allows canal and drainage water to meet at approximately the same level instead of carrying one in a separated trough or pressure barrel. The mixed reach needs controlled exits so canal supply and drainage passage can be managed. Similar bed levels and a short-lived flood suggest a candidate arrangement, not an automatic selection without flood routing and water-quality checks.</p>" +
                        "<p><strong>Plan and profile in words:</strong> the drain approaches the canal junction; an upstream drainage crest can control admission into the common pool. A regulator on the drainage downstream of the junction controls the receiving route, while a cross regulator on the canal below the crossing manages the continuing canal level and discharge. The bank describes an upstream drainage crest at canal FSL as one layout; actual crest elevation must suit the operating levels and flood plan.</p>" +
                        "<p>The gates must be coordinated. Restricting the canal outlet while admitting a drain flood can raise the common pool; restricting the drainage route can cause upstream flooding. Design therefore requires simultaneous flow paths, permissible stages, sediment handling and a reliable operating rule, including gate or power failure where relevant.</p>" +
                        "<p>A level crossing is not a closed pressure pipe simply because water levels are close. Mixing has consequences for silt, water quality and the timing of supply. Where those consequences or the flood capacity are unacceptable, compare separated-stream alternatives even when a near-level arrangement appears geometrically convenient.</p>",
                    sources: [
                        { id: "IRRI951-00070", set: 8, question: 71 },
                        { id: "IRRI951-00238", set: 23, question: 72 },
                        { id: "IRRI951-00250", set: 24, question: 74 }
                    ]
                },
                {
                    id: "irrigation-inlets-outlets-and-drainage-continuity",
                    title: "Admit small drainage flows only with a safe continuing route",
                    html: "<p>A <strong>canal inlet</strong> admits drainage water into a canal, potentially augmenting supply. Suitable relative levels and a sufficiently small <em>design drainage discharge</em> are necessary; a drain that usually carries little water can still have a large flash flood. Check the flood hydrograph against available canal capacity and permissible stage, not merely the dry-season flow.</p>" +
                        "<p>In an inlet/outlet crossing arrangement, a drainage outlet farther downstream releases the admitted or surplus water toward a suitable drainage route. Here outlet means an exit associated with drainage continuity, not necessarily a farm irrigation outlet. Assess receiving-water tailwater, canal operation, sediment deposition and the quality of the mixed water before accepting the arrangement.</p>" +
                        "<p><strong>Flow-path description:</strong> a small drain reaches an inlet, its water joins the canal for a designed reach, and an appropriately located outlet restores the required downstream drainage connection. The route must remain workable for relevant low flows as well as the design event. Closing or obstructing a natural drain without providing that continuity is not a valid substitute for a crossing.</p>" +
                        "<p>Inlet and outlet counts need not be equal: a designed reach may collect several small inflows and release them through a suitably sized common outlet, or require several exits. That possibility is not permission to omit the water balance. Flood capacity, residual canal supply, outfall level and environmental constraints determine the arrangement.</p>",
                    sources: [
                        { id: "IRRI951-00031", set: 4, question: 76 },
                        { id: "IRRI951-00236", set: 23, question: 70 },
                        { id: "IRRI951-00239", set: 23, question: 73 }
                    ]
                },
                {
                    id: "irrigation-crossing-selection-and-clear-waterway",
                    title: "Prefer suitable free flow, then verify the waterway",
                    html: "<p>When a drain can pass above a canal with adequate clearance, a superpassage avoids pressure flow in the lower canal and can simplify inspection and sediment management. That is a conditional advantage over a canal siphon, not an absolute ranking of all crossing types. Available head, terrain, foundation conditions, structural spans, flood behaviour, construction access, operation and whole-life cost can change the preferred solution.</p>" +
                        "<p>A Lacey regime-perimeter estimate can provide a <strong>preliminary alluvial-waterway guide</strong>. Wetted perimeter is not automatically the clear horizontal opening of a bridge-like crossing; that approximation needs an appropriate wide section and regime assumptions. A natural drain with contraction, piers, a rigid floor or unusual sediment conditions needs its actual hydraulic analysis.</p>" +
                        "<p>For a simple line of spans, <strong>B<sub>clear</sub> = B<sub>gross</sub> − Σt<sub>pier</sub></strong>, where the B values are widths and t<sub>pier</sub> are pier obstructions projected across the waterway, all in m. This geometric subtraction says nothing by itself about acceptable afflux. Flow depth, velocity distribution, contraction, local losses, scour and debris blockage determine hydraulic capacity.</p>" +
                        "<p>The bank's <strong>30% reduction</strong> associated with Lacey's perimeter has not been verified as a design allowance. Do not remove 30% of a calculated waterway and presume safety. Evaluate the approach and exit, plausible blocked openings, flood levels and foundation/scour response; a narrower structure may save material while increasing hydraulic and maintenance risk.</p>",
                    sources: [
                        { id: "IRRI951-00240", set: 23, question: 74 },
                        { id: "IRRI951-00244", set: 1, question: 75 }
                    ]
                },
                {
                    id: "irrigation-fluming-transitions-and-velocity",
                    title: "Fluming trades structural width for hydraulic demands",
                    html: "<p>Fluming narrows a channel at a crossing. For fixed discharge, <strong>V = Q/A</strong>: reducing flow area A raises mean velocity V. A contraction accelerates flow; an expansion attempts to recover some velocity head as pressure or depth. Abrupt expansion can separate the flow and dissipate energy, so gradual recovery matters. Widening the exit does not recover all the head spent accelerating the approach.</p>" +
                        "<p>Expansions commonly need a gentler layout than contractions because an adverse pressure gradient promotes separation. The bank's <strong>22.5° contraction and 30° expansion</strong> limits are unverified, and the angle convention is unspecified. They should not be elevated into current code rules. Similarly, the <strong>5:1 downstream rising slope</strong> mentioned for a siphon aqueduct is only an unverified bank detail; a real profile must define horizontal-to-vertical orientation and satisfy its hydraulic and structural checks.</p>" +
                        "<p>The cited <strong>2–3 m/s</strong> drainage-barrel velocity is an indicative conventional range, not a universal permissible limit. Excessive velocity can increase friction, scour or abrasion, while too little can encourage deposition. Appropriate values depend on sediment, lining, roughness, geometry, available head and maintenance provisions.</p>" +
                        "<p>Cavitation is assessed from local absolute pressure and vapour pressure, particularly at contractions, bends and surface irregularities. A velocity within 2–3 m/s cannot guarantee freedom from cavitation, and exceeding it does not by itself prove cavitation. Combine continuity, an energy-head profile and justified local-loss treatment rather than treating a quoted speed as a complete safety check.</p>",
                    sources: [
                        { id: "IRRI951-00235", set: 23, question: 69 },
                        { id: "IRRI951-00242", set: 23, question: 76 },
                        { id: "IRRI951-00245", set: 23, question: 78 }
                    ]
                },
                {
                    id: "irrigation-siphon-flume-friction-two-regimes",
                    title: "The 100 m flume: include the roof only when it is wetted",
                    html: "<p>The supplied dimensions are length ℓ = <strong>100 m</strong>, width b = <strong>10 m</strong>, depth d = <strong>2 m</strong>, mean velocity V = <strong>2.5 m/s</strong> and Manning n = <strong>0.015</strong>. Area is A = bd = 20 m<sup>2</sup>; that area and velocity imply Q = AV = 50 m<sup>3</sup>/s in the considered section. The word siphon does not remove the need to establish whether the roof is wetted.</p>" +
                        "<p>For a uniform-friction Manning approximation, <strong>h<sub>f</sub> = n<sup>2</sup>V<sup>2</sup>ℓ/R<sup>4/3</sup></strong>, where R = A/P is hydraulic radius in m, P is wetted perimeter in m and h<sub>f</sub> is friction head loss in m. In SI, n is used consistently with units s/m<sup>1/3</sup>. Here the numerator n<sup>2</sup>V<sup>2</sup>ℓ is 0.140625 in the corresponding units.</p>" +
                        "<table><thead><tr><th scope='col'>Assumed flow state</th><th scope='col'>Wetted geometry</th><th scope='col'>Friction subtotal</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Free-surface rectangular flow</th><td>P = b + 2d = 14 m; R = 20/14 = 1.42857 m.</td><td>h<sub>f</sub> ≈ 0.0874 m = 87.4 mm, consistent with the rounded 87 mm choice.</td></tr>" +
                        "<tr><th scope='row'>Full closed rectangular barrel</th><td>P = 2(b + d) = 24 m; R = 20/24 = 0.83333 m, including the roof.</td><td>h<sub>f</sub> ≈ 0.179 m = 179 mm, not an offered answer.</td></tr></tbody></table>" +
                        "<p>The full-barrel result uses Manning only as the stated friction model with the supplied n; a pressure-conduit design must justify that model or an alternative. Neither subtotal is a complete crossing head requirement. Entrance, exit, bends and transitions need local-loss data, commonly h<sub>local</sub> = ΣK<sub>i</sub>V<sub>i</sub><sup>2</sup>/(2g). The change in upstream/downstream velocity head belongs separately in the energy balance and is not itself an irreversible loss. The original upstream velocity and those coefficients are missing, so the wording velocity is reduced cannot supply a unique total loss.</p>",
                    sources: [{ id: "IRRI951-00077", set: 8, question: 78 }]
                },
                {
                    id: "irrigation-roof-uplift-and-lower-floor",
                    title: "Distinguish the barrel roof from the lower-channel floor",
                    html: "<p>In a siphon aqueduct, the <strong>upper canal trough slab</strong> can also form the <strong>roof of the drainage barrel</strong>. The <strong>bottom floor or invert</strong> lies beneath the lower drain. These are different structural surfaces with different water-pressure paths. A statement about a pucca floor is ambiguous until the intended surface is identified.</p>" +
                        "<table><thead><tr><th scope='col'>Surface and condition</th><th scope='col'>Relevant upward loading</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Siphon-aqueduct roof</th><td>Drainage pressure beneath the roof opposes roof weight and any downward canal-water loading.</td></tr>" +
                        "<tr><th scope='row'>Lower drain invert</th><td>Foundation seepage or groundwater pressure beneath the floor can exceed pressure from water above it.</td></tr>" +
                        "<tr><th scope='row'>Ordinary aqueduct with clear free flow below</th><td>The lower stream does not apply internal water pressure to a roof it does not contact; a protected bottom floor can still experience foundation uplift.</td></tr></tbody></table>" +
                        "<p>The named adverse roof combination is <strong>canal empty and drain flowing full with pressure beneath the roof</strong>: the downward canal-water load is absent. It is a useful bank load case, not proof of the maximum for every head, groundwater level or transient state. Actual pressure diagrams and all required operating, flood, maintenance and exceptional combinations must be compared.</p>" +
                        "<p>In an ordinary aqueduct, the lack of lower-stream roof pressure follows from free-flow clearance, not from canal-water weight somehow preventing pressure. Canal seepage and a high subsoil water table can still load a lower impervious floor even when the drain is empty. An upper watertight conveyance trough also does not imply that every free-flow lower channel has a continuous pucca floor; bed protection depends on scour, seepage and foundation conditions.</p>",
                    sources: [
                        { id: "IRRI951-00241", set: 23, question: 75 },
                        { id: "IRRI951-00243", set: 23, question: 77 },
                        { id: "IRRI951-00245", set: 23, question: 78 },
                        { id: "IRRI951-00246", set: 24, question: 70 }
                    ]
                },
                {
                    id: "irrigation-falls-and-ground-slope",
                    title: "Falls reconcile a steep ground profile with a milder canal grade",
                    html: "<p>When ground descends more steeply than the chosen canal-bed grade, simply following the ground can produce excessive velocity and erosion. A canal fall introduces a controlled drop between milder reaches and dissipates the associated energy. It can keep the canal near a practicable profile while maintaining the required command and limiting long embankments.</p>" +
                        "<p><strong>Longitudinal sketch in words:</strong> draw a steep falling ground line and a canal bed made of several gently descending reaches. At selected locations, a fall steps the bed down to the next reach. Draw the water surface and energy line separately: their positions depend on depth, velocity and local controls, not just the ground line.</p>" +
                        "<p>If the designed canal-bed slope is steeper than the ground slope, <strong>pumping is not automatically required</strong>. A gravity canal may instead need progressively deeper excavation, a changed alignment or adjusted starting level, subject to available head, outlet command and feasible earthworks. Conversely, a seemingly favourable ground slope does not guarantee gravity delivery if downstream water levels require more head than is available.</p>" +
                        "<p>Use a surveyed profile and a common elevation datum to locate falls. Avoid fixing them solely at arbitrary distance intervals: branches, crossings, foundation conditions, allowable velocities and the water levels required at offtakes constrain their location. A fall is an energy-management structure, not a surplus-disposal escape.</p>",
                    sources: [{ id: "IRRI951-00073", set: 8, question: 74 }]
                },
                {
                    id: "irrigation-fall-number-and-head-budget",
                    title: "Allocate available head before choosing the number of drops",
                    html: "<p><strong>Syllabus elaboration of fall siting:</strong> the bank supplies no complete profile from which a numerical number or height of falls can be designed. For a steady constant-discharge reach without a pump, use total energy heads at its ends. For an open channel, E = Z<sub>b</sub> + y + αV<sup>2</sup>/(2g), where Z<sub>b</sub> is bed elevation, y is water depth, V is velocity and all head terms are in m.</p>" +
                        "<p>The budget for discrete structures is <strong>H<sub>structures</sub> = E<sub>u</sub> − E<sub>d</sub> − h<sub>reach</sub> − h<sub>other</sub></strong>. Here h<sub>reach</sub> is distributed friction and h<sub>other</sub> is already assigned local loss. Allocate a positive remaining budget among feasible falls and check their actual profiles; do not spend the same head twice. If discharge changes at offtakes, analyse the reaches on their own flow conditions.</p>" +
                        "<p><strong>Original allocation illustration, not bank data:</strong> an endpoint energy difference of 4.2 m, reach friction of 0.9 m and other assigned losses of 0.3 m leave 3.0 m. If an independently suitable local arrangement permits 1.0 m energy loss per fall, three such losses form a trial allocation. This does not establish three 1.0 m geometric bed drops, final spacing or safe cistern dimensions.</p>" +
                        "<p>At each trial fall, reconcile upstream control, approach velocity, geometric drop, downstream depth and velocity head, jump or other dissipater, and available tailwater. The local jump loss need not equal the bed-level difference. Recheck seepage uplift, floor/cutoff dimensions, downstream scour protection and command after the hydraulic profile changes. The number of structures is a result of those integrated checks, not a fixed terrain rule.</p>",
                    sources: [{ id: "IRRI951-00073", set: 8, question: 74 }]
                },
                {
                    id: "irrigation-fall-families-and-profiles",
                    title: "Sarda, Inglis and Montague describe different fall profiles",
                    html: "<p>Identify a fall by its crest, downstream profile and dissipation arrangement rather than treating every named type as a glacis fall. A crest controls the approach; the downstream shape guides the accelerating water; a cistern, jump or baffled region must handle residual energy. A smooth profile alone does not make that energy disappear.</p>" +
                        "<table><thead><tr><th scope='col'>Family</th><th scope='col'>Profile to recognize</th><th scope='col'>Energy-path description</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Sarda</th><td>A vertical-drop family, not a sloping-glacis identification.</td><td>Water passes the crest and falls toward a protected downstream cistern or pool.</td></tr>" +
                        "<tr><th scope='row'>Inglis or baffle fall</th><td>Straight glacis with a baffle platform and baffle wall.</td><td>The guided high-velocity stream interacts with the baffled dissipation arrangement.</td></tr>" +
                        "<tr><th scope='row'>Montague</th><td>Parabolic glacis.</td><td>The curved guide profile must still be matched to downstream dissipation and tailwater.</td></tr></tbody></table>" +
                        "<p>Parabolic is not a synonym for ogee: an ogee is a different profile description, and interchanging the names loses the geometric distinction being tested. The bank's Sardis spelling should be understood as its Sarda-type reference, not as evidence of a separate verified sloping-glacis type.</p>" +
                        "<p>The repeated <strong>14 cumecs</strong> rectangular-crest limit is an unverified legacy convention, not a certified current design threshold. One cumec is 1 m<sup>3</sup>/s. The other item's ounces wording is not a discharge unit, and its explanation claims an earlier 6-to-14 correction without establishing a checked design source. Retain that discrepancy rather than converting it into an authoritative numerical rule.</p>",
                    sources: [
                        { id: "IRRI951-00078", set: 8, question: 79 },
                        { id: "IRRI951-00263", set: 25, question: 75 },
                        { id: "IRRI951-00264", set: 25, question: 76 },
                        { id: "IRRI951-00265", set: 25, question: 77 }
                    ]
                },
                {
                    id: "irrigation-cistern-jump-and-protection",
                    title: "Match the cistern to the incoming jet and tailwater",
                    html: "<p><strong>Syllabus elaboration of fall energy dissipation:</strong> a hydraulic jump changes shallow supercritical flow into deeper subcritical flow while losing energy. For an ideal short jump in a horizontal prismatic rectangular channel, assume hydrostatic pressure at the end sections, negligible bed friction over the jump and approximately uniform section velocities. These assumptions do not describe every vertical-drop jet or baffled basin.</p>" +
                        "<p>With upstream depth y<sub>1</sub>, velocity V<sub>1</sub> and Froude number <strong>Fr<sub>1</sub> = V<sub>1</sub>/√(gy<sub>1</sub>) &gt; 1</strong>, momentum balance gives <strong>y<sub>2</sub>/y<sub>1</sub> = [√(1 + 8Fr<sub>1</sub><sup>2</sup>) − 1]/2</strong>. The corresponding energy loss is <strong>ΔE = (y<sub>2</sub> − y<sub>1</sub>)<sup>3</sup>/(4y<sub>1</sub>y<sub>2</sub>)</strong>. Both depths and ΔE are in m; V<sub>1</sub> is in m/s and g ≈ 9.81 m/s<sup>2</sup>. The depth y<sub>2</sub> is a conjugate-depth requirement, not automatically the site's available tailwater.</p>" +
                        "<p><strong>Original ideal-jump illustration:</strong> y<sub>1</sub> = 0.50 m and Fr<sub>1</sub><sup>2</sup> = 10 give a depth ratio of (√81 − 1)/2 = 4, so y<sub>2</sub> = 2.00 m. The loss is 1.50<sup>3</sup>/(4 × 0.50 × 2.00) = <strong>0.84375 m</strong>. This is a conditional energy result, not a supplied bank dataset or a required fall height.</p>" +
                        "<p>Insufficient tailwater can sweep the jump downstream beyond the protected floor; excessive tailwater can submerge or alter it. Choose cistern elevation, length, appurtenances and protection using the applicable dissipater method across the operating range, then check scour, uplift, structural forces and sediment. Do not equate a seepage-floor length with an adequate stilling length, or use the ideal jump relation as universal dimensions for an Inglis or Sarda fall.</p>",
                    sources: [{ id: "IRRI951-00263", set: 25, question: 75 }]
                },
                {
                    id: "irrigation-meter-falls-and-calibrated-ratings",
                    title: "A meter fall needs a valid control and calibrated rating",
                    html: "<p>A meter fall combines a drop with a usable discharge-measurement control. A vertical drop, flumed glacis or unflumed glacis arrangement may serve that purpose when its hydraulic control and rating are suitable. The bank's all-of-the-above wording does <strong>not</strong> establish that every existing fall can accurately measure every flow from one arbitrary depth reading.</p>" +
                        "<p>The verified USBR canal-control guidance requires critical control throughout the intended measurement range for the described upstream-gage method, with a special calibration relating upstream head to discharge. Calibrate against independent discharge measurements across relevant flows, gate settings where applicable and upstream/downstream conditions. Define the gage location and zero, maintain approach conditions and check sediment, debris and surface disturbances.</p>" +
                        "<p>Free-flow or semi-modular behaviour persists only below the device's applicable submergence limit. Above it, downstream head can influence discharge; an independently valid submerged rating may require both heads, or the reading may be unusable. USBR's flume guidance makes the limits device- and site-dependent. Its numerical conventions must not be transplanted to every fall or irrigation outlet.</p>" +
                        "<p>For a stable local rating q = cH<sup>r</sup>, a small head-reading error alone gives <strong>δq/q ≈ rδH/H</strong>, with coefficient and calibration errors additional. This explains why a shifted gage zero is especially damaging at low head. Calibration supplies evidence within a tested operating envelope; it is not an a priori guarantee of accuracy for an arbitrary raw fall, an altered structure or an untested submerged condition.</p>",
                    sources: [{ id: "IRRI951-00266", set: 25, question: 78 }]
                }
            ],
            gaps: [
                "The supplied NEC scope identifies topics, not adopted design constants. Alignment angles, escape fractions, legacy Sarda limits, velocity ranges, pier deductions and transition slopes remain bank conventions pending an applicable checked source. The verified FAO and USBR pages support basic structures and measurement principles, not Nepal structural-design certification.",
                "No assigned question supplies a complete crest or impervious-floor design dataset: design discharge, upstream/tailwater levels, effective openings, foundation strata, cutoff geometry, pressure distribution and structural loading are missing. The two source-free syllabus extensions provide methods and assumptions, not invented question citations or final dimensions.",
                "There is no complete longitudinal canal profile, command requirement or range of tailwater conditions from which to calculate the number, spacing, height and cistern dimensions of falls. The head-allocation and ideal-jump numericals are explicitly original illustrations, not bank inputs.",
                "The 100 m siphon-flume item does not establish whether its roof is wetted, its original upstream velocity or entrance/exit/transition losses. Its two conditional Manning subtotals cannot determine one complete crossing head requirement.",
                "No source supplies a complete outlet calibration, modular-limit curve, gage datum, pipe-loss dataset or defined parent rating for the unqualified 0.6 setting. Proportionality and measurement accuracy require their stated operating assumptions and cannot be certified from the stored labels alone.",
                "Crossing selection lacks a full drainage hydrograph, actual trough underside levels, sediment/debris and water-quality data, receiving-water conditions, geotechnical information and operating/cost comparison. The selection grid and uplift cases are teaching tools, not a site-specific flood, structural or environmental approval."
            ],
            cautions: [
                {
                    html: "<p><strong>Bank check: the diversion-headworks regulator is misnamed.</strong> The appropriate term is canal head regulator. It is absent from the supplied choices; the stored option c, canal module, conflates a headworks regulator with an irrigation outlet. Given those choices, none of the above, option d, is defensible. No missing distractor is invented and no stored key is rewritten.</p>",
                    sources: [{ id: "IRRI951-00345", set: 33, question: 68 }]
                },
                {
                    html: "<p><strong>Bank check: cross regulation is not external surplus disposal.</strong> Water passing a cross regulator continues down the parent canal; an escape discharges to a receiving route outside it. The cross-regulator all-functions explanation is overbroad if overflow is taken to mean an escape. Closing the head regulator usually reduces new inflow, not directly causes surplus; delayed travel, downstream closure and backwater changes explain possible remaining stage problems.</p>",
                    sources: [
                        { id: "IRRI951-00030", set: 4, question: 75 },
                        { id: "IRRI951-00069", set: 8, question: 70 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: sediment and flood control have limits.</strong> A head regulator can regulate admission, reduce sediment entry and shut off the intended supply, but its sill does not remove all suspended silt and its gates do not exclude every flood regardless of failure, overtopping or bypass seepage. The distributary-head functions are useful operating objectives, not guarantees independent of approach hydraulics, capacity and maintenance.</p>",
                    sources: [
                        { id: "IRRI951-00226", set: 22, question: 72 },
                        { id: "IRRI951-00348", set: 33, question: 71 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: a fixed weir does not control nothing.</strong> A raised fixed crest establishes a stage-discharge relation and can maintain upstream depth. Gates add adjustable control and closure capability. The distinction is fixed versus adjustable hydraulic control, not control versus no control; actual free or submerged operation still determines the rating.</p>",
                    sources: [{ id: "IRRI951-00228", set: 22, question: 74 }]
                },
                {
                    html: "<p><strong>Bank check: 90–110° is an unverified alignment guide.</strong> The item does not establish an applicable current design standard or a universal orientation for every head, distributary or cross regulator. Identify the weir and regulator axes and the approach-flow geometry before interpreting an angle. Neither the NEC scope nor the checked introductory FAO page verifies that numerical range.</p>",
                    sources: [{ id: "IRRI951-00227", set: 22, question: 73 }]
                },
                {
                    html: "<p><strong>Bank check: one-third is not a verified escape-design minimum.</strong> Retain the stored fraction as a bank convention only. A usable escape must accommodate the routed surplus within allowed canal levels while its receiving outfall is at the relevant stage. Demand change, residual inflow, travel time, reach storage, gate operation and outfall erosion/capacity can govern; the question supplies none of that design evidence.</p>",
                    sources: [{ id: "IRRI951-00229", set: 22, question: 75 }]
                },
                {
                    html: "<p><strong>Bank check: dependence on two heads is still a relationship.</strong> Non-modular discharge depends on both upstream and downstream levels; it does not lack a hydraulic law. An adjustable orifice semi-module permits manual resetting but does not automatically maintain constant discharge as upstream head changes. The preferred or best label needs operating and economic criteria, not an unsupported constant-flow claim.</p>",
                    sources: [
                        { id: "IRRI951-00231", set: 22, question: 77 },
                        { id: "IRRI951-00234", set: 23, question: 68 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: module independence is conditional.</strong> A free pipe may act as a semi-module while its control remains independent of downstream level, but drowning or a changed pipe-flow regime can remove that independence. Flexible module is legacy terminology, not proof that F = 1. A rigid module maintains discharge independently of both levels only within its specified range and with its mechanism operating properly.</p>",
                    sources: [
                        { id: "IRRI951-00233", set: 22, question: 79 },
                        { id: "IRRI951-00259", set: 25, question: 71 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: normalize the changes in sensitivity and flexibility.</strong> S = (Y/q)(dq/dY) and F = (Q/q)(dq/dQ). The printed F = dq/dQ omits normalization, and equal rates for S = 1 must mean equal fractional changes, not dimensional discharge and depth increments. Zero sensitivity remains valid for a rigid module within range. A flexible outlet does not generally have sensitivity one; proportionality means F = 1, not necessarily S = 1.</p>",
                    sources: [
                        { id: "IRRI951-00080", set: 9, question: 69 },
                        { id: "IRRI951-00232", set: 22, question: 78 },
                        { id: "IRRI951-00258", set: 25, question: 70 },
                        { id: "IRRI951-00262", set: 25, question: 74 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: the 0.6 weir setting lacks a definition.</strong> With q = cH<sup>r</sup>, Q = aY<sup>m</sup> and H = Y − z at fixed z, F = rY/(mH). Wide uniform Manning flow gives m = 5/3, hence proportional H/Y = 0.90 for a weir and 0.30 for an orifice; their z/Y values are 0.10 and 0.70. A weir ratio 0.60 could follow from m = 2.5, but that parent rating is not supplied. The stored 0.6 is therefore not a general result, and no silent key replacement is made.</p>",
                    sources: [{ id: "IRRI951-00230", set: 22, question: 76 }]
                },
                {
                    html: "<p><strong>Bank check: the main-canal prohibition is a management convention.</strong> Farm-watercourse outlets are conventionally supplied from the distribution network rather than the main conveyance canal. That explains the stored main-canal choice in its usual context, but the stem supplies no rule making a main-canal turnout physically impossible at every site or in every irrigation system.</p>",
                    sources: [{ id: "IRRI951-00253", set: 24, question: 77 }]
                },
                {
                    html: "<p><strong>Bank check: drainage under pressure beneath a canal is a siphon aqueduct.</strong> That is the supplied option d. The stored option a, superpassage, reverses the upper-stream arrangement and conflicts with the stem and its own explanatory distinction. A superpassage carries the drain above a freely flowing canal. The original answer remains untouched; the four-arrangement grid supplies the consistent terminology.</p>",
                    sources: [{ id: "IRRI951-00249", set: 24, question: 73 }]
                },
                {
                    html: "<p><strong>Bank check: pressure flow and clear free-surface flow contradict each other.</strong> The stem says the lower canal flows under pressure but also describes a water surface clear of the supporting structure. Reading the free-clearance condition gives superpassage, the stored choice; reading the pressure-conduit condition gives canal siphon. The wording needs repair before one can certify a unique answer. Do not silently discard one condition and pretend the entire stem is valid.</p>",
                    sources: [{ id: "IRRI951-00247", set: 24, question: 71 }]
                },
                {
                    html: "<p><strong>Bank check: a canal siphon is pipe flow, not inherently negative pressure.</strong> Option b describes the pressure-conduit regime; stored option c does not. Gauge pressure depends on the HGL relative to the local conduit point, and cavitation depends on absolute pressure relative to vapour pressure. An inverted siphon below a drain is not a true suction-operated over-crest siphon. A hypothetical local negative-pressure region cannot justify the general key.</p>",
                    sources: [{ id: "IRRI951-00251", set: 24, question: 75 }]
                },
                {
                    html: "<p><strong>Bank check: canal-bed elevation is not the underside clearance test.</strong> Drain HFL can lie below the internal canal bed yet above the underside of its supporting trough because the slab has thickness. Compare the actual flood profile with that underside and the required clearance. Full lower-barrel flow is pressure-conduit flow; calling it siphonic action does not establish suction or remove the need for an energy and tailwater calculation.</p>",
                    sources: [
                        { id: "IRRI951-00235", set: 23, question: 69 },
                        { id: "IRRI951-00248", set: 24, question: 72 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: a 30% pier deduction is not demonstrated safe waterway design.</strong> The stored percentage is unverified, and Lacey's wetted-perimeter estimate is only a preliminary regime guide. Distinguish gross width, projected pier obstruction and clear flow area. Actual contraction, afflux, local head loss, debris blockage and scour must be checked; the explanation's assurance of insignificant hydraulic effect is not established by a percentage alone.</p>",
                    sources: [{ id: "IRRI951-00244", set: 1, question: 75 }]
                },
                {
                    html: "<p><strong>Bank check: transition and velocity numbers are not verified code limits.</strong> The 22.5° contraction, 30° expansion and 5:1 rising-slope statements lack a checked source and clear geometric conventions. Expansions generally need gentle recovery to limit separation; the angle pair is not a basis for reversing that reasoning. Likewise, 2–3 m/s is indicative, not a cavitation-safe threshold. Site head, pressure profile, sediment and erosion conditions remain necessary.</p>",
                    sources: [
                        { id: "IRRI951-00235", set: 23, question: 69 },
                        { id: "IRRI951-00242", set: 23, question: 76 },
                        { id: "IRRI951-00245", set: 23, question: 78 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: floor terminology and uplift mechanisms are mixed.</strong> A lower drainage invert is not the upper canal trough slab or barrel roof. The pucca-floor explanation substitutes the upper conveyance floor for the lower-channel protection being discussed, so it cannot certify the stored incorrect-statement key. Free clearance prevents lower-stream contact pressure on an ordinary aqueduct roof; canal-water weight does not prevent pressure from existing. Groundwater and seepage can still uplift the bottom floor. Canal empty with drain full is a named adverse siphon-roof combination, not an automatic maximum for every possible head or transient.</p>",
                    sources: [
                        { id: "IRRI951-00241", set: 23, question: 75 },
                        { id: "IRRI951-00243", set: 23, question: 77 },
                        { id: "IRRI951-00245", set: 23, question: 78 },
                        { id: "IRRI951-00246", set: 24, question: 70 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: 87 mm uses a free-surface wetted perimeter.</strong> For the supplied 100 m × 10 m × 2 m passage, V = 2.5 m/s and n = 0.015, P = 14 m gives approximately 0.0874 m friction loss. A full roof-wetted barrel has P = 24 m and gives approximately 0.179 m under the same Manning model. The latter is not an offered choice. Neither is the complete head requirement because local losses and the original velocity-head change are unspecified; the 87 mm key cannot justify using an open-channel radius for a full pressure barrel.</p>",
                    sources: [{ id: "IRRI951-00077", set: 8, question: 78 }]
                },
                {
                    html: "<p><strong>Bank check: the fall slope choice is sound, but the pumping explanation is not.</strong> Falls commonly accommodate ground slope exceeding the selected canal grade. A canal grade exceeding the ground slope can still support gravity flow with feasible excavation and sufficient upstream-to-downstream energy head. Pumping follows an inadequate head relationship for the required delivery, not that slope comparison alone.</p>",
                    sources: [{ id: "IRRI951-00073", set: 8, question: 74 }]
                },
                {
                    html: "<p><strong>Bank check: retain the fall-family and unit discrepancies.</strong> Sarda is a vertical-drop family, not the sloping-glacis description attached to Sardis. Montague's parabolic glacis is not synonymous with an ogee. The 14 cumec rectangular-crest limit remains an unverified legacy convention. Ounces is not a discharge unit, and the separate explanation's claimed printed 6-to-14 correction is a provenance statement, not independent verification of either value as a current design rule.</p>",
                    sources: [
                        { id: "IRRI951-00078", set: 8, question: 79 },
                        { id: "IRRI951-00264", set: 25, question: 76 },
                        { id: "IRRI951-00265", set: 25, question: 77 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: potentially usable as a meter is not universally accurate.</strong> Suitable vertical-drop and glacis arrangements can provide a measuring control, but a valid rating requires a stable control, defined gage datum, calibration and an operating range consistent with tailwater and submergence. Merely stating that a fall can be calibrated does not prove one-head measurement accurate for any raw fall or every flow. An altered or drowned control needs its applicable validated treatment, not the original free-flow rating by default.</p>",
                    sources: [{ id: "IRRI951-00266", set: 25, question: 78 }]
                }
            ],
            references: [
                {
                    title: "FAO — Chapter 5, Irrigation System: verified basic intakes, checks, turnouts, drops and measurement concepts; not design-code constants",
                    url: "https://www.fao.org/4/r4082e/r4082e06.htm"
                },
                {
                    title: "USBR Water Measurement Manual — Chapter 13, section 4: measuring controls for canals and calibrated drops",
                    url: "https://www.usbr.gov/tsc/techreferences/mands/wmm/chap13_04.html"
                },
                {
                    title: "USBR Water Measurement Manual — Chapter 13, section 5: calibration of gates and sluices",
                    url: "https://www.usbr.gov/tsc/techreferences/mands/wmm/chap13_05.html"
                },
                {
                    title: "USBR Water Measurement Manual — Chapter 8, section 4: flume submergence and device-specific modular limits",
                    url: "https://www.usbr.gov/tsc/techreferences/mands/wmm/chap08_04.html"
                },
                {
                    title: "USBR Water Measurement Manual — Chapter 9, section 1: free and submerged orifices, head measurements and calibration conditions",
                    url: "https://www.usbr.gov/tsc/techreferences/mands/wmm/chap09_01.html"
                }
            ]
        }
    });
})();