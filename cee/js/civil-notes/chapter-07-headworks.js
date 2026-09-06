(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0703: {
            code: "ACiE0703",
            questionCount: 36,
            blocks: [
                {
                    id: "diversion-purpose-and-pond-level",
                    title: "Diversion headworks: purpose, pond level and control",
                    html: "<p><strong>7.3 Diversion headworks</strong> links river-level control, the canal intake, sediment management, foundation seepage and downstream energy dissipation. The central irrigation purpose is to establish enough upstream water-surface elevation to feed an offtaking canal by gravity, while passing the remaining river flow safely. Raising a level does not create additional water: abstraction still depends on available river discharge and required downstream releases.</p>" +
                        "<table><thead><tr><th scope='col'>Arrangement</th><th scope='col'>Principal control</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Fixed-crested diversion weir</th><td>A raised overflow crest largely determines the upstream level through its discharge rating.</td></tr>" +
                        "<tr><th scope='row'>Barrage</th><td>Adjustable gates over relatively low sills provide substantial control of pond level and flood passage.</td></tr>" +
                        "<tr><th scope='row'>Storage project</th><td>Usable reservoir volume and release scheduling are central to transferring supply between periods.</td></tr></tbody></table>" +
                        "<p>A diversion pond contains storage and may permit limited operational regulation; it is not necessarily a seasonal storage reservoir, but neither is its storage always zero. Height and storage duration are useful descriptive tendencies, not an absolute boundary between every dam and weir. Some weirs have crest gates or adjacent gated scouring bays, so the distinction is <em>predominantly fixed-crest control versus adjustable gated control</em>, not that no weir can have a gate.</p>" +
                        "<p>The required pond level is established from the canal's full-supply level, entry losses and operating range, not from the season's name. These notes follow the official scope and distinguish bank arithmetic from design assumptions; they are not an adopted Nepal design standard or a completed site design.</p>",
                    sources: [
                        { id: "IRRI951-00048", set: 6, question: 71 },
                        { id: "IRRI951-00050", set: 6, question: 73 },
                        { id: "IRRI951-00094", set: 10, question: 73 }
                    ]
                },
                {
                    id: "head-regulator-and-headworks-layout",
                    title: "Head regulator, divide wall and associated site components",
                    html: "<p>The <strong>canal head regulator</strong> is the controlled entrance to the offtaking canal. Its gates regulate or stop canal admission; its sill, piers, abutments and transitions define the intake passage. A suitably raised intake sill helps avoid the sediment-rich near-bed layer, but neither a sill nor a gate alone excludes every suspended particle.</p>" +
                        "<table><thead><tr><th scope='col'>Component</th><th scope='col'>Position and function</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Under-sluices</th><td>Low-level river bays near the intake, used to pass sediment-laden water and maintain the approach pocket.</td></tr>" +
                        "<tr><th scope='row'>Divide wall</th><td>Separates the under-sluice pocket from the main weir or barrage bays and helps limit undesirable cross-currents.</td></tr>" +
                        "<tr><th scope='row'>Fish pass</th><td>A separately designed passage around the river barrier, where required; its position and hydraulics must suit the target species.</td></tr>" +
                        "<tr><th scope='row'>River-training and bank protection</th><td>Guide the approach and departure flows and protect the flanks against erosion or bypassing.</td></tr></tbody></table>" +
                        "<p>The divide wall generally runs in the upstream-downstream direction. It creates a more manageable intake-side flow region, not a permanently stagnant tank: flushing needs enough velocity to transport deposited sediment. These are components of the <em>headworks site</em>, not items that the head regulator literally carries. A canal aqueduct carries a canal over a drainage channel and belongs to cross-drainage work; a nearby crossing does not make it an intrinsic part of the intake regulator.</p>",
                    sources: [
                        { id: "IRRI951-00053", set: 6, question: 76 },
                        { id: "IRRI951-00074", set: 8, question: 75 }
                    ]
                },
                {
                    id: "undersluice-capacity-and-sill-levels",
                    title: "Under-sluices: flushing capacity and relative sill levels",
                    html: "<p>Under-sluices provide a preferential low-level route through the river barrier. Gate operation can draw sediment-rich bottom water from the intake pocket, maintain a useful approach channel and contribute to flood passage. Effective flushing requires an adequate head difference to the outfall, sediment-transport velocity and an acceptable loss of water from the irrigation supply.</p>" +
                        "<table><thead><tr><th scope='col'>Preliminary capacity comparison</th><th scope='col'>Qualification</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Fraction of flood discharge</th><td>The bank quotes 10–15%; this is a preliminary textbook proportion, not a universal sizing rule.</td></tr>" +
                        "<tr><th scope='row'>Canal-related flushing demand</th><td>A comparison such as twice the maximum canal discharge is meaningful only when the adopted operating requirements specify it.</td></tr>" +
                        "<tr><th scope='row'>Low-season river passage</th><td>The relevant river discharge may need to pass through the sluice pocket while other bays are operated differently.</td></tr></tbody></table>" +
                        "<p>Let Q<sub>us</sub> be under-sluice discharge in m<sup>3</sup>/s. Check that the available Q<sub>us</sub> at each case's head and gate opening meets that case's required discharge. Taking the maximum of several stated requirements is justified only if those requirements actually apply; capacities at different heads are not interchangeable. Sediment load, blockage, gate availability and the river's flood distribution can govern beyond any one percentage.</p>" +
                        "<p>The scouring-sluice sill is commonly lower than the canal head-regulator sill so that the sediment-rich lower flow has an outlet below the intake. The bank's <strong>1.20 m</strong> difference illustrates this arrangement. The actual difference must follow river-bed levels, intake depth, target sediment, flushing head and structural layout; it is not a fixed allowance for every headworks.</p>",
                    sources: [
                        { id: "IRRI951-00110", set: 11, question: 78 },
                        { id: "IRRI951-00261", set: 25, question: 73 }
                    ]
                },
                {
                    id: "sediment-exclusion-and-extraction",
                    title: "Silt excluder before the intake; extractor after it",
                    html: "<p>The decisive distinction is <strong>where the sediment is intercepted relative to canal entry</strong>. River flow commonly carries a larger concentration of transportable coarse sediment near the bed. Headworks layout and flushing exploit this vertical distribution, but turbulence can still carry sediment into the upper water entering the canal.</p>" +
                        "<table><thead><tr><th scope='col'>Device</th><th scope='col'>Location</th><th scope='col'>Action</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Silt excluder</th><td>In the river bed, upstream of and adjacent to the canal head regulator.</td><td>Intercepts sediment-rich bottom flow before canal admission, commonly through tunnels discharging back to the river downstream.</td></tr>" +
                        "<tr><th scope='row'>Silt extractor or ejector</th><td>Inside the canal, downstream of the head regulator.</td><td>Removes a sediment-rich portion of water after the sediment has entered the canal, commonly through collecting passages and a flushing outfall.</td></tr></tbody></table>" +
                        "<p>Follow the water route: river approach, intake regulator, canal, then any canal ejector. An excluder's downstream river outlet does not change the fact that its interception occurs <em>upstream of the intake in the river</em>. An extractor is not renamed an excluder merely because both use tunnels.</p>" +
                        "<p>Performance depends on particle size distribution, approach currents, tunnel geometry, available flushing head and operating discharge. Neither device guarantees sediment-free water for every grain size. Suspended fines may require separate settling or may remain in the conveyed water; removal targets must be specified by sediment class and acceptable downstream consequences.</p>",
                    sources: [
                        { id: "HYDR626-00252", set: 28, question: 61 },
                        { id: "HYDR626-00253", set: 28, question: 62 },
                        { id: "IRRI951-00071", set: 8, question: 72 },
                        { id: "IRRI951-00111", set: 11, question: 79 }
                    ]
                },
                {
                    id: "settling-basin-transit-and-fall-times",
                    title: "Settling-basin extension: travel time, fall time and plan area",
                    html: "<p><em>Source-free syllabus extension for silt control: no assigned item supplies a settling-basin design dataset.</em> Consider an ideal rectangular basin of settling length L<sub>s</sub>, width B<sub>s</sub> and working depth y<sub>s</sub>, all in metres. For steady discharge Q and uniform horizontal velocity V = Q/(B<sub>s</sub>y<sub>s</sub>), a discrete particle has a still-water settling velocity w<sub>s</sub> in m/s.</p>" +
                        "<p>The horizontal transit time is <strong>L<sub>s</sub>/V</strong>; a particle entering at the water surface needs <strong>y<sub>s</sub>/w<sub>s</sub></strong> to reach the floor. Ideal capture of that particle requires L<sub>s</sub>/V ≥ y<sub>s</sub>/w<sub>s</sub>. Substituting continuity gives <strong>w<sub>s</sub> ≥ Q/(B<sub>s</sub>L<sub>s</sub>) = Q/A<sub>plan</sub></strong>. The surface loading Q/A<sub>plan</sub> has velocity units; it uses the horizontal settling-zone plan area, not the wetted cross-sectional area or the basin volume.</p>" +
                        "<p><strong>Explicit illustration, not bank givens:</strong> Q = 2 m<sup>3</sup>/s, B<sub>s</sub> = 5 m, L<sub>s</sub> = 20 m and y<sub>s</sub> = 2 m give V = 0.20 m/s and transit time 100 s. A class with w<sub>s</sub> = 0.025 m/s needs 80 s to settle through 2 m, satisfying the ideal criterion; Q/A<sub>plan</sub> = 0.020 m/s. A slower class with w<sub>s</sub> = 0.005 m/s needs 400 s and cannot be assumed completely removed.</p>" +
                        "<p>The derivation assumes dilute discrete settling, uniform flow, no short-circuiting, no resuspension and a suitable settling-velocity estimate. Real design must allow for turbulence, inlet and outlet transitions, deposited-silt storage and flushing. Depth cancels from this ideal capture criterion, not from every hydraulic or operational requirement. Passing the criterion for one grain class does not establish 100% removal of all sediment.</p>",
                    sources: []
                },
                {
                    id: "weir-profiles-and-foundation-selection",
                    title: "Weir profiles and foundation-dependent selection",
                    html: "<p>A weir's crest controls overflow, while its downstream profile and protection govern how that flow reaches the receiving bed. Profile selection must consider discharge range, available head, tailwater, sediment abrasion, foundation conditions and maintainability, rather than treating one named shape as best everywhere.</p>" +
                        "<table><thead><tr><th scope='col'>Form</th><th scope='col'>Hydraulic feature and design issue</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Vertical-drop weir</th><td>A falling jet requires a checked receiving cistern or pool and protection against impact and scour.</td></tr>" +
                        "<tr><th scope='row'>Sloping-glacis weir</th><td>Flow accelerates along the downstream face; a designed jump and stilling arrangement can dissipate energy on a protected floor.</td></tr>" +
                        "<tr><th scope='row'>Broad-crested weir</th><td>A sufficiently long crest in the flow direction can support a control section; the applicable rating depends on crest geometry and head.</td></tr>" +
                        "<tr><th scope='row'>Ogee profile</th><td>A shaped overflow surface is related to a design nappe profile; coefficient and surface pressures vary when operating head differs from design head.</td></tr></tbody></table>" +
                        "<p>The bank's <em>recent origin</em> label for the concrete or masonry sloping type is a historical textbook comparison, not a claim of a recent invention at the current date. Its <em>parabolic</em> label is used loosely in relation to an ogee: the entire engineered ogee need not be a simple parabola, and high discharge efficiency at a specified design condition is not universal superiority.</p>" +
                        "<p>No vertical-drop form is automatically suitable for <strong>any foundation</strong>. Bearing resistance, differential settlement, permeability, stratification, erodibility and anticipated scour require investigation. A viable form on one foundation may require substantial floor, cutoff, drainage or ground-treatment changes on another.</p>",
                    sources: [
                        { id: "IRRI951-00047", set: 6, question: 70 },
                        { id: "IRRI951-00058", set: 7, question: 70 },
                        { id: "IRRI951-00093", set: 10, question: 72 }
                    ]
                },
                {
                    id: "flood-waterway-and-weir-alignment",
                    title: "Flood waterway, afflux and practical alignment",
                    html: "<p>Choose the flood-passage layout from hydrology and site hydraulics. A specified <strong>50-year flood</strong> is the event used in the bank calculation; under a stationary annual-maximum model its annual exceedance probability is 1/50, not a promise that it occurs once every fifty years. The design return period for an actual project depends on consequence, governing requirements and the adopted risk assessment.</p>" +
                        "<p><strong>Bank arithmetic:</strong> substitution of Q = 4000 m<sup>3</sup>/s into the empirical SI relation <strong>P = 4.75√Q</strong> gives P = 4.75 × 63.245553 = <strong>300.4164 m</strong>. Here P is Lacey's regime wetted perimeter; the numerical coefficient belongs to that unit convention. Treating this perimeter as a trial waterway already needs a suitable alluvial-channel interpretation. It is not automatically a final crest length for a rare flood.</p>" +
                        "<p>The supplied bank-to-bank width is 280 m. Selecting the smaller of 280 m and 300.4164 m is <strong>not a hydraulic design rule</strong>. The narrower trial needs checks of effective clear openings, pier and abutment contractions, gate operation, approach velocity, tailwater and local scour. Afflux is the upstream water-level rise caused by the works relative to the comparable unobstructed condition at the same discharge. Acceptable afflux, bank protection and possible layout alterations must justify the final width; the two supplied numbers alone do not prove the keyed 280 m choice.</p>" +
                        "<p>For a reasonably straight reach, placing the weir axis normal to the main current often gives a short crossing and a more regular approach, making construction and flow distribution easier. That pragmatic preference does not guarantee a universal maximum discharge coefficient or an economical solution at every curved or unstable reach. Alignment, waterway and river-training layout must be assessed together.</p>",
                    sources: [
                        { id: "IRRI951-00061", set: 7, question: 73 },
                        { id: "IRRI951-00330", set: 31, question: 76 }
                    ]
                },
                {
                    id: "crest-discharge-and-flood-wall-level",
                    title: "Crest rating and the worked flood-wall elevation",
                    html: "<p>For an applicable calibrated free-overflow rectangular-crest rating, write <strong>Q = C<sub>w</sub>L<sub>e</sub>H<sub>e</sub><sup>3/2</sup></strong>. Q is discharge in m<sup>3</sup>/s, L<sub>e</sub> the effective crest length across the flow in m, and H<sub>e</sub> the upstream total energy head above crest elevation in m. In this form C<sub>w</sub> has units <strong>m<sup>1/2</sup>/s</strong>; it is not a dimensionless coefficient unless the appropriate gravitational factor is written separately.</p>" +
                        "<p>At a suitable approach section, <strong>H<sub>e</sub> = Z<sub>u</sub> − z<sub>c</sub> + α<sub>a</sub>V<sub>a</sub><sup>2</sup>/(2g)</strong>, where Z<sub>u</sub> is upstream water-surface elevation, z<sub>c</sub> crest elevation, V<sub>a</sub> approach velocity and α<sub>a</sub> the dimensionless kinetic-energy correction factor. The structural crest height z<sub>c</sub> − z<sub>bed</sub> is not H<sub>e</sub>. L<sub>e</sub> also differs from the streamwise floor length and the breadth of the crest in the flow direction.</p>" +
                        "<p><strong>Actual bank example:</strong> use Q = 90 m<sup>3</sup>/s, C<sub>w</sub> = 1.5 in the stated SI form, L<sub>e</sub> = 30 m, crest height 2.5 m, bed RL 1080 m and freeboard 1.2 m. The intended calculation assumes negligible approach-velocity head and free overflow; no tailwater rating or approach area is supplied to verify those field conditions.</p>" +
                        "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Working and result</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Crest elevation</th><td>z<sub>c</sub> = 1080 + 2.5 = 1082.5000 m.</td></tr>" +
                        "<tr><th scope='row'>Head above crest</th><td>H<sub>e</sub> = [90/(1.5 × 30)]<sup>2/3</sup> = 2<sup>2/3</sup> = 1.587401 m.</td></tr>" +
                        "<tr><th scope='row'>Upstream flood water surface</th><td>Z<sub>u</sub> = 1082.5 + 1.587401 = 1084.0874 m.</td></tr>" +
                        "<tr><th scope='row'>Flood-wall top</th><td>1084.087401 + 1.2 = 1085.2874 m, or <strong>1085.29 m</strong> to two decimals.</td></tr></tbody></table>" +
                        "<p>The stored 1085.28 m is a close option, less than 0.01 m below the unrounded result, but it is not correct rounding to two decimals. Freeboard belongs above the <em>water surface</em>, not automatically above the energy line. High tailwater may submerge the control and require a rating using both upstream and downstream conditions; gate-controlled underflow needs its own rating. The linked USBR measurement background also explains that approach conditions can affect effective length and coefficient, so simply adding a velocity head does not repair every unsuitable calibration.</p>",
                    sources: [{ id: "IRRI951-00079", set: 9, question: 68 }]
                },
                {
                    id: "gravity-resistance-and-wall-width-heuristic",
                    title: "Gravity resistance and the limits of the wall-width heuristic",
                    html: "<p><strong>Bank arithmetic, not a demonstrated design rule:</strong> the supplied shortcut is B′ = H/√(G − 1). With H = 2 m and G = 2.4, it gives <strong>B′ = 2/√1.4 = 1.6903 m</strong>, approximately the keyed 1.7 m. G is dimensionless, so the expression has length units. However, the bank identifies G as the floor material's specific gravity and H as head over the wall; neither supplies the complete wall geometry or its full loading.</p>" +
                        "<p>This arithmetic does <strong>not</strong> prove that a top width of 1.6903 m prevents tension. Top width B′ and streamwise base width B are different dimensions. Overall height, body material, upstream and tailwater levels, uplift distribution, base geometry and other actions are needed to obtain the resultant and moments. No authoritative code basis is asserted for this shortcut.</p>" +
                        "<p>A gravity weir obtains its principal resistance from self-weight. For a consistent free body, let W be structural weight, V<sub>w</sub> additional downward water action and U the upward pressure resultant. The net compressive vertical action is <strong>N = W + V<sub>w</sub> − U</strong>. U is the integral of actual underside pressure over the base. If W = U and no other vertical action exists, N = 0 and W/U = 1: there is no reserve against flotation, not a proof of safety.</p>" +
                        "<p>For a one-metre strip with a rectangular base, full contact, N &gt; 0 and a linear bearing-pressure distribution, let A<sub>b</sub> = B × 1 m and e<sub>R</sub> = M/N, with M the resultant moment about the base centre. Edge pressures are <strong>σ = (N/A<sub>b</sub>)(1 ± 6e<sub>R</sub>/B)</strong>; nonnegative contact pressure requires |e<sub>R</sub>| ≤ B/6 in this model. This is a separate base-resultant check, not a derivation of the top-width shortcut. Sliding, overturning, bearing, settlement and structural stresses also require their own checks.</p>",
                    sources: [
                        { id: "IRRI951-00037", set: 5, question: 71 },
                        { id: "IRRI951-00054", set: 6, question: 77 }
                    ]
                },
                {
                    id: "piping-scour-and-uplift-failures",
                    title: "Failure mechanisms: internal erosion, external scour and uplift",
                    html: "<p>Seepage through a pervious foundation is not itself synonymous with failure. Failure occurs when the resulting gradients, pressures or material transport exceed what the soil and structure can safely resist. Diagnose the mechanism before selecting a remedy.</p>" +
                        "<table><thead><tr><th scope='col'>Mechanism</th><th scope='col'>What happens</th><th scope='col'>Relevant protection</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Piping or internal erosion</th><td>Seepage transports foundation particles through susceptible paths; erosion may progress and create cavities.</td><td>Suitable cutoffs, gradient control, soil-retaining filters and sound contacts.</td></tr>" +
                        "<tr><th scope='row'>External bed scour</th><td>River currents or discharge jets erode the exposed bed and can remove support from an edge or cutoff.</td><td>Energy dissipation, adequate embedment, armour and launching protection.</td></tr>" +
                        "<tr><th scope='row'>Uplift failure</th><td>Upward pressure beneath a slab or body exceeds available resistance, causing lifting, cracking or loss of contact.</td><td>Pressure assessment, adequate structural resistance and appropriately designed drainage.</td></tr></tbody></table>" +
                        "<p><strong>Undermining</strong> describes loss of foundation support; either internal erosion or external scour can contribute to it. Subsidence into an eroded hollow is therefore different from a slab first lifting under excess pressure. Surface scour is not caused merely by a foundation being permeable. Conversely, substantial uplift may exist before visible sediment loss appears.</p>" +
                        "<p>The bank's undermining-and-uplift pair highlights important pervious-foundation problems, not every possible failure. Sliding, overturning, bearing failure, settlement, structural cracking and flow around the flanks remain separate concerns. Protection must cover the structure's ends and joints as well as an ideal centreline section.</p>",
                    sources: [
                        { id: "IRRI951-00096", set: 10, question: 75 },
                        { id: "IRRI951-00097", set: 10, question: 76 }
                    ]
                },
                {
                    id: "bligh-contact-length-and-head-loss",
                    title: "Bligh: trace the contact and state the empirical assumption",
                    html: "<p>Bligh idealizes seepage resistance by a <strong>creep path along the structure-soil contact</strong>. For a profile made of horizontal and vertical segments, <strong>L<sub>creep</sub> = L<sub>h</sub> + L<sub>v</sub></strong>. Both directions receive equal weight. Trace the contact continuously: a thin cutoff of depth z normally contributes a downward length z and an upward length z, not just its penetration depth once.</p>" +
                        "<p>Let H be the upstream-to-downstream total head difference and ℓ the contact distance already travelled, all in metres. The simplified uniform-loss assumption gives <strong>head loss = Hℓ/L<sub>creep</sub></strong> and residual head above the downstream reference head <strong>H(1 − ℓ/L<sub>creep</sub>)</strong>. These formulas express Bligh's empirical distribution, not actual streamlines or an exact potential-flow solution.</p>" +
                        "<p>A creep-ratio requirement may be written L<sub>creep</sub>/H ≥ C<sub>B</sub>, where C<sub>B</sub> is an empirical coefficient associated with the adopted ground classification and experience. Its value is not supplied by the question, and no universal soil-coefficient table is inferred here. Uncovered loose apron does not automatically count as impervious floor contact.</p>" +
                        "<p>Uniform head loss per unit contact length is not uniform pressure beneath the floor, nor proof of constant physical friction everywhere. Pressure at elevation z is obtained from total head by p = γ<sub>w</sub>(h − z). A descending contact can have increasing pressure even while total head falls. Bligh's path-length check cannot directly establish the local exit gradient or capture concentrated seepage around a pile tip.</p>",
                    sources: [
                        { id: "IRRI951-00049", set: 6, question: 72 },
                        { id: "IRRI951-00056", set: 6, question: 79 }
                    ]
                },
                {
                    id: "lane-weighted-creep-bank-example",
                    title: "Lane's weighted creep: the 5 m, 54 m and 8 m example",
                    html: "<p>Lane's weighted-creep approach assigns greater relative effectiveness to vertical contact than to horizontal contact. For the bank's horizontal floor and vertical thin cutoffs, <strong>L<sub>w</sub> = L<sub>v</sub> + L<sub>h</sub>/3</strong>. L<sub>w</sub> is an empirical equivalent length in metres, not a measured streamline length. Use the same complete contact trace as for Bligh before applying the weights.</p>" +
                        "<table><thead><tr><th scope='col'>Actual bank component</th><th scope='col'>Contact contribution</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Upstream cutoff, 5 m deep</th><td>5 m down + 5 m up = 10 m vertical.</td></tr>" +
                        "<tr><th scope='row'>Downstream cutoff, 8 m deep</th><td>8 m down + 8 m up = 16 m vertical.</td></tr>" +
                        "<tr><th scope='row'>Horizontal floor, 54 m</th><td>54 m physical horizontal contact; Lane contribution 54/3 = 18 m.</td></tr></tbody></table>" +
                        "<p>Thus L<sub>v</sub> = 26 m and <strong>L<sub>w</sub> = 26 + 18 = 44 m</strong>. Bligh's unweighted value for the same idealized contact is <strong>26 + 54 = 80 m</strong>. The current bank's 44 m answer is consistent with Lane; the two values answer different model definitions, not two alternative measurements of the floor.</p>" +
                        "<p>A requirement L<sub>w</sub>/H ≥ C<sub>L</sub> uses Lane's own empirical coefficient, not Bligh's coefficient or the discharge coefficient of a weir. No H or applicable soil coefficient is given in this length exercise, so neither 44 m nor 80 m demonstrates that the foundation is safe. Complex contact slopes and geometry require the applicable weighted-creep convention rather than arbitrary counting.</p>",
                    sources: [{ id: "IRRI951-00059", set: 7, question: 71 }]
                },
                {
                    id: "darcy-head-and-seepage-potential",
                    title: "Darcy flow, total head and the seepage potential",
                    html: "<p>For saturated foundation seepage, neglect the very small velocity head and write <strong>h(x,z) = z + p/γ<sub>w</sub></strong>. Here z is elevation above a common datum, p pore-water pressure, γ<sub>w</sub> water unit weight and h total hydraulic head, in metres. Darcy flux is <strong>q<sub>s</sub> = −k∇h</strong>, where k is hydraulic conductivity in m/s and q<sub>s</sub> is discharge per gross soil area in m/s, not the interstitial particle velocity.</p>" +
                        "<p>For <strong>steady, two-dimensional, incompressible flow through a saturated, homogeneous, isotropic medium with constant k</strong>, continuity gives ∇·q<sub>s</sub> = 0 and hence <strong>∇<sup>2</sup>h = ∂<sup>2</sup>h/∂x<sup>2</sup> + ∂<sup>2</sup>h/∂z<sup>2</sup> = 0</strong>. The potential-flow description refers to this head field throughout the permeable domain; it is not a claim that water follows only the floor outline or that Darcy flow has no resistance.</p>" +
                        "<p>Upstream and downstream water bodies set head boundaries. An intact impervious floor has zero normal seepage flux. Flow lines and equipotential lines intersect at right angles in this isotropic model. In a curvilinear-square flow net with N<sub>d</sub> equal potential drops, each drop is H/N<sub>d</sub>; with N<sub>f</sub> flow channels, discharge per unit transverse width is <strong>q′ = kH N<sub>f</sub>/N<sub>d</sub></strong>, in m<sup>2</sup>/s.</p>" +
                        "<p>Conformal mapping is an analytical way of solving suitable two-dimensional potential problems; flow nets are another representation. Layering, anisotropy, finite strata and end flow need their actual boundary and material model. Along a seepage path total head decreases, but pressure head h − z need not decrease monotonically when elevation changes.</p>",
                    sources: [{ id: "IRRI951-00104", set: 11, question: 72 }]
                },
                {
                    id: "khosla-independent-variables-and-corrections",
                    title: "Khosla's independent variables and prescribed corrections",
                    html: "<p>Khosla's <strong>method of independent variables</strong> uses solutions of idealized standard floor-and-pile profiles as building blocks for a composite hydraulic structure. The potential-flow basis supplies head distributions and gradients for the stated geometry and foundation assumptions; it does not treat horizontal and vertical contact as interchangeable lengths.</p>" +
                        "<ol><li>Identify the standard profile, including floor extent, pile position and depth, and the appropriate dimensionless geometry ratios.</li><li>Obtain the standard head percentages at the required key points using that profile's equations or charts.</li><li>Apply the prescribed corrections for <strong>floor thickness, mutual interference of piles and floor slope</strong>, with the sign and reference point defined by the method.</li><li>Convert the corrected heads into actual underside pressures and check exit gradients and structural resistance for each operating case.</li></ol>" +
                        "<p>If φ denotes percentage of residual total head above downstream head h<sub>d</sub>, then <strong>h = h<sub>d</sub> + (φ/100)H</strong>. At an underside point of elevation z, p = γ<sub>w</sub>(h − z); top-water pressure must be considered separately when finding net uplift. A percentage is not itself a pressure, and its datum must remain consistent after a thickness correction.</p>" +
                        "<p>The corrections are part of a defined engineering approximation, not permission to add arbitrary isolated-pile pressures or mix Bligh's linear loss with Khosla's gradients. Closely interacting piles, unusual boundaries or nonuniform ground may require a complete seepage analysis rather than hand-combining standard results outside their validity. No unsupplied correction chart or numerical pressure distribution is fabricated here.</p>",
                    sources: [{ id: "IRRI951-00051", set: 6, question: 74 }]
                },
                {
                    id: "upstream-and-downstream-cutoff-functions",
                    title: "Upstream and downstream cutoffs: different benefits, one flow field",
                    html: "<p>An <strong>upstream cutoff</strong> can create an appreciable head loss before seepage reaches much of the floor, reducing uplift in relevant floor regions. A <strong>downstream cutoff</strong> is particularly useful for spreading the emerging seepage path and reducing the local exit gradient. These are comparative tendencies within a specified layout, not independent switches that eliminate uplift and piping.</p>" +
                        "<p>A downstream pile may retain higher heads under parts of the floor even while reducing the exit gradient beyond its toe. Changing either pile alters the whole potential field. Do not assume that every additional metre of cutoff monotonically reduces pressure at every point, or that the same total head difference disappears merely because a path is longer.</p>" +
                        "<ul><li><strong>Exit condition:</strong> evaluate the actual local gradient against an appropriate permissible value and provide soil-retaining drainage where needed.</li><li><strong>Scour and embedment:</strong> maintain effective penetration and protection relative to the deepest anticipated eroded bed, not just the initial bed level.</li><li><strong>Uplift compatibility:</strong> use the resulting pressure distribution when proportioning the floor and body.</li><li><strong>Structural and construction checks:</strong> establish pile strength, support after scour, durability, penetrability, joints and contact integrity.</li></ul>" +
                        "<p>The bank's counting question does not establish a universal number of design considerations. Estimating scour and extending below the scour hole are related parts of one protection problem, not necessarily independent criteria. A seepage cutoff also is not automatically an anchor resisting slab uplift or a structural pile providing sliding resistance; those actions require a designed load path.</p>",
                    sources: [
                        { id: "IRRI951-00063", set: 7, question: 75 },
                        { id: "IRRI951-00105", set: 11, question: 73 },
                        { id: "IRRI951-00108", set: 11, question: 76 }
                    ]
                },
                {
                    id: "critical-and-permissible-exit-gradients",
                    title: "Critical gradient, permissible gradient and soil erodibility",
                    html: "<p>The local hydraulic gradient is head change per unit path length, <strong>i = |dh/ds|</strong>, and is dimensionless. It is not the pore-pressure head alone. For upward seepage, the seepage body force per unit soil volume has magnitude γ<sub>w</sub>i. Loss of effective stress can occur when this upward action balances the soil skeleton's submerged weight.</p>" +
                        "<p>For a saturated cohesionless soil under ideal uniform upward seepage without an added restraining surcharge, <strong>i<sub>cr</sub> = γ′/γ<sub>w</sub> = (G<sub>s</sub> − 1)/(1 + e)</strong>. G<sub>s</sub> is the specific gravity of soil solids, e = V<sub>void</sub>/V<sub>solid</sub> is void ratio and γ′ is submerged bulk unit weight. This is the quick or heave condition for that model, not a universal threshold for every internal-erosion mechanism.</p>" +
                        "<p>A selected gradient safety factor F<sub>i</sub> &gt; 1 may define <strong>i<sub>allow</sub> = i<sub>cr</sub>/F<sub>i</sub></strong>. Actual exit gradient must be checked against the permissible value, not assumed equal to it. Internal stability, filter retention, concentrated leakage and soil fabric can matter even below the ideal heave gradient.</p>" +
                        "<p><strong>Explicit illustration:</strong> G<sub>s</sub> = 2.65 and e = 0.65 give i<sub>cr</sub> = 1.00. If F<sub>i</sub> is independently chosen as 5 for illustration, i<sub>allow</sub> = 0.20, or 1 in 5. These are not supplied barrage-question data or a prescribed safety factor.</p>" +
                        "<p>Fine sand is the bank's most vulnerable listed material, but the explanation must not attribute this simply to a lower grain-material density. Larger grains of the same mineral have essentially the same G<sub>s</sub>. Grain size, gradation, packing, permeability and force/contact geometry influence particle mobility and the appropriate protection; coarse grains are not assigned a greater specific gravity merely because each grain has more mass.</p>",
                    sources: [{ id: "IRRI951-00055", set: 6, question: 78 }]
                },
                {
                    id: "isolated-end-pile-exit-gradient",
                    title: "Khosla end-pile formula: the missing head and the edge limit",
                    html: "<p>Consider the ideal standard case of a finite, horizontal, zero-thickness impervious floor of streamwise length b, with a single downstream end pile of depth d &gt; 0, over a homogeneous isotropic foundation idealized as extending to great depth. For steady two-dimensional seepage and retained total head difference H, <strong>G<sub>E</sub> = H/(πd√λ)</strong>, where <strong>α = b/d</strong> and <strong>λ = [1 + √(1 + α<sup>2</sup>)]/2</strong>. G<sub>E</sub>, α and λ are dimensionless; H, b and d use the same length unit.</p>" +
                        "<p><strong>Actual supplied geometry:</strong> b = 20 m and d = 5 m give α = 4, λ = (1 + √17)/2 = 2.561553 and √λ = 1.600485. Therefore <strong>πd√λ ≈ 25.1404 m</strong> and <strong>G<sub>E</sub> = H/(25.1404 m)</strong>. The bank supplies no numerical H. It is consequently impossible to choose a unique numerical exit gradient from those dimensions alone.</p>" +
                        "<p>Reversing the calculation shows that G<sub>E</sub> = 1/5 would require <strong>H ≈ 5.0281 m</strong> in this isolated standard model. This is the head needed to obtain the stored answer, not a recovered original given or a common ratio that may silently be assumed. The formula computes a gradient; it does not establish that the computed gradient is permissible for the actual soil.</p>" +
                        "<p>For fixed b &gt; 0 and H &gt; 0, taking d towards zero gives λ approximately b/(2d), so πd√λ tends to π√(bd/2) and then to zero. The resulting <strong>unbounded exit gradient is a localized sharp-edge singularity of the ideal boundary-value model</strong>. Removing a cutoff does not make the physical pervious stratum infinitely deep. Finite edge geometry, a designed filter and the real ground boundaries affect how exit conditions must be assessed; the ideal infinity is not a uniform gradient throughout the foundation.</p>",
                    sources: [
                        { id: "IRRI951-00106", set: 11, question: 74 },
                        { id: "IRRI951-00113", set: 12, question: 69 }
                    ]
                },
                {
                    id: "impervious-floor-dimensions-and-design-cases",
                    title: "Impervious-floor design: length, thickness and cutoff depth",
                    html: "<p>The impervious floor must satisfy surface-flow, seepage and structural requirements together. Its dimensions are not substitutes for one another: length changes the seepage geometry, thickness supplies local structural resistance, and cutoff depth affects both the flow field and protection against erosion.</p>" +
                        "<table><thead><tr><th scope='col'>Dimension</th><th scope='col'>Important design checks</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Streamwise floor length b, m</th><td>Permissible exit gradient with the selected cutoffs; space for the required hydraulic control and energy dissipation.</td></tr>" +
                        "<tr><th scope='row'>Floor thickness t, m</th><td>Net local uplift, slab bending and shear, joint behaviour, support conditions and durability.</td></tr>" +
                        "<tr><th scope='row'>Cutoff penetration d, m</th><td>Seepage distribution, exit gradient, scour exposure, structural capacity and constructibility.</td></tr></tbody></table>" +
                        "<ol><li>Establish relevant river and canal water levels, gate states and dewatered conditions, together with ground strata and anticipated scour.</li><li>Select a trial waterway, floor profile, basin and cutoff layout; distinguish across-river crest length from streamwise floor length.</li><li>Solve the appropriate seepage problem for each head difference and determine underside pressures and exit gradients.</li><li>Check local and overall resistance, revise dimensions and re-evaluate the changed geometry; detail filters, joints and protection continuously.</li></ol>" +
                        "<p>Exit gradient and uplift pressure are central seepage checks, but the <strong>unbalanced head is an essential input</strong>, and scour changes the foundation boundary. A nominally sufficient floor length, some concrete thickness and a cutoff of reasonable depth do not by their mere presence ensure safety. In the isolated end-pile model increasing b lowers the calculated exit gradient at fixed H and d; that trend does not establish every local pressure or the necessary basin length in a complete layout.</p>",
                    sources: [
                        { id: "IRRI951-00099", set: 10, question: 78 },
                        { id: "IRRI951-00107", set: 11, question: 75 },
                        { id: "IRRI951-00112", set: 12, question: 68 }
                    ]
                },
                {
                    id: "floor-thickness-and-pressure-datum",
                    title: "Floor-thickness extension: define the pressure-head datum",
                    html: "<p><em>Source-free syllabus extension: the assigned items provide no numerical slab-uplift design.</em> Take a floor with upper-face elevation z<sub>t</sub>, thickness t and underside elevation z<sub>t</sub> − t. Let h<sub>u</sub> be the local underside piezometric-head elevation from the seepage solution, and define <strong>h = h<sub>u</sub> − z<sub>t</sub></strong>. Thus h is referred to the <strong>floor top</strong>, not the actual underside pressure head.</p>" +
                        "<p>With a dry upper surface, the underside pressure is <strong>p<sub>u</sub> = γ<sub>w</sub>(h + t)</strong>. The unanchored slab's weight per unit area is γ<sub>c</sub>t. The elementary unfactored no-lift balance γ<sub>c</sub>t ≥ γ<sub>w</sub>(h + t) gives <strong>t ≥ h/(G − 1)</strong>, where G = γ<sub>c</sub>/γ<sub>w</sub> &gt; 1. This is a local weight balance, with no extra resisting load or safety allowance; equality has no reserve.</p>" +
                        "<p>If hydrostatic water depth y lies above the slab, top pressure is γ<sub>w</sub>y and net upward pressure is γ<sub>w</sub>(h + t − y). Defining <strong>h<sub>res</sub> = h − y</strong> gives t ≥ h<sub>res</sub>/(G − 1) when h<sub>res</sub> &gt; 0. In this notation γ<sub>w</sub>(h<sub>res</sub> + t) is the <em>net</em> pressure, not the raw underside pressure.</p>" +
                        "<p><strong>Explicit illustration:</strong> choose h<sub>res</sub> = 2 m and G = 2.4. The elementary balance gives <strong>t = 2/1.4 = 1.4286 m</strong>. These illustrative inputs are not a bank question or a project design. A required safety margin, structural span, reinforcement, joints, anchors and fluctuating pressures have not been designed.</p>" +
                        "<p>Alternatively, if the <strong>actual net pressure</strong> Δp = p<sub>u</sub> − p<sub>top</sub> has already been evaluated at the actual underside for a trial thickness, the same balance is t ≥ Δp/γ<sub>c</sub>. For a net uplift force U over area A, use Δp = U/A. Pressures have kN/m<sup>2</sup> units and unit weights kN/m<sup>3</sup>. Do not divide that same actual Δp by γ<sub>c</sub> − γ<sub>w</sub>, which would count the thickness-related water term twice. Changing t can change both the underside datum and the seepage solution, so the pressure and thickness must remain consistent.</p>",
                    sources: []
                },
                {
                    id: "hydraulic-jump-depth-and-energy-loss",
                    title: "Energy-dissipation extension: conjugate depths and jump loss",
                    html: "<p><em>Source-free official-scope extension: no assigned item supplies a complete numerical hydraulic-jump problem.</em> Consider a steady jump in a horizontal rectangular channel of constant width. Take approximately uniform velocities, hydrostatic pressure at sections outside the roller and negligible bed-friction force over the short control volume. Let y<sub>1</sub>, V<sub>1</sub> describe the incoming supercritical flow and y<sub>2</sub>, V<sub>2</sub> the outgoing subcritical flow.</p>" +
                        "<p>Discharge per unit width is <strong>q = V<sub>1</sub>y<sub>1</sub> = V<sub>2</sub>y<sub>2</sub></strong>, in m<sup>2</sup>/s. The incoming Froude number is <strong>Fr<sub>1</sub> = V<sub>1</sub>/√(gy<sub>1</sub>) &gt; 1</strong>. Equality of momentum functions y<sup>2</sup>/2 + q<sup>2</sup>/(gy) gives the conjugate-depth relation <strong>y<sub>2</sub>/y<sub>1</sub> = [√(1 + 8Fr<sub>1</sub><sup>2</sup>) − 1]/2</strong>.</p>" +
                        "<p>Specific energy is E = y + V<sup>2</sup>/(2g). Its loss across this jump is <strong>ΔE = E<sub>1</sub> − E<sub>2</sub> = (y<sub>2</sub> − y<sub>1</sub>)<sup>3</sup>/(4y<sub>1</sub>y<sub>2</sub>)</strong>, in metres. Energy is dissipated by turbulence; it is not conserved through the jump. Conjugate depths share a momentum function, whereas alternate depths refer to equal specific energy and are a different concept.</p>" +
                        "<p><strong>Explicit illustration:</strong> choose y<sub>1</sub> = 1 m and Fr<sub>1</sub> = √6. The depth ratio is (√49 − 1)/2 = 3, so y<sub>2</sub> = 3 m. The energy loss is 2<sup>3</sup>/(4 × 1 × 3) = <strong>0.6667 m</strong>; E<sub>1</sub> = 4 m and E<sub>2</sub> = 10/3 m give the same loss. These values illustrate the equations, not an assigned headworks geometry or a recommended basin size.</p>",
                    sources: []
                },
                {
                    id: "stilling-basin-and-operating-range",
                    title: "Stilling-basin extension: tailwater and operating load cases",
                    html: "<p><em>Source-free syllabus extension for energy dissipaters and their operation.</em> A sloping glacis can deliver fast, shallow flow onto a protected stilling floor. The basin must keep the dissipating flow where the bed and structure can withstand it. The conjugate depth is only one input: it does not by itself determine basin length, block dimensions, end-sill geometry or slab reinforcement.</p>" +
                        "<p>Compare the tailwater depth y<sub>t</sub> at each discharge with the required conjugate depth measured above the proposed basin floor. Insufficient tailwater can sweep the jump downstream onto unprotected material; excessive tailwater can submerge the jump and change the pressure and turbulence pattern. Basin elevation and geometry must work over the operating discharge range, using an applicable validated basin design or hydraulic model rather than a universal length multiplier.</p>" +
                        "<table><thead><tr><th scope='col'>Operating case</th><th scope='col'>Reason for checking it</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>High pond with a dewatered floor or canal</th><td>Top-water resistance may be absent while foundation pore pressure remains high; drawdown may involve transient seepage.</td></tr>" +
                        "<tr><th scope='row'>Partial or unequal gate opening</th><td>Concentrated jets, cross-flow and local scour can be severe even below the maximum total flood discharge.</td></tr>" +
                        "<tr><th scope='row'>Flood, high tailwater and waves</th><td>Submergence, fluctuating pressures, freeboard and the extent of downstream protection change.</td></tr></tbody></table>" +
                        "<p>A vertical-drop pool or other dissipater needs its own foundation and scour assessment; a discharge jet cannot simply be directed onto an assumed sound bed. Slabs and joints require bending, shear and differential-pressure checks, including pressure fluctuations and possible drain blockage. Filters and aprons protect the transition beyond the rigid floor, but they do not replace stable jump containment or a sound structural load path.</p>",
                    sources: []
                },
                {
                    id: "inverted-filters-and-complete-apron-sequence",
                    title: "Inverted filters and the complete upstream-to-downstream apron sequence",
                    html: "<p>The bank's arrangement is an <strong>illustrative weir-floor protection sequence</strong>, not a universal schedule of lengths. Its numbered elements are 1, impervious floor; 2, block protection; 3, blocks over an inverted filter; and 4, launching apron. Both occurrences of 4 matter.</p>" +
                        "<table><thead><tr><th scope='col'>Position from upstream</th><th scope='col'>Element</th><th scope='col'>Purpose</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>First</th><td>4: upstream launching apron</td><td>Flexible protection beyond the fixed upstream works.</td></tr>" +
                        "<tr><th scope='row'>Second</th><td>2: upstream block protection</td><td>Armours the approach adjacent to the rigid floor.</td></tr>" +
                        "<tr><th scope='row'>Third</th><td>1: impervious floor</td><td>Provides a continuous hydraulic boundary and designed structural protection.</td></tr>" +
                        "<tr><th scope='row'>Fourth</th><td>3: downstream blocks over inverted filter</td><td>Combines erosion-resistant cover with soil-retaining seepage drainage.</td></tr>" +
                        "<tr><th scope='row'>Last</th><td>4: downstream launching apron</td><td>Provides further adaptable protection as the downstream bed scours.</td></tr></tbody></table>" +
                        "<p>The complete sequence is therefore <strong>4-2-1-3-4</strong>, including the downstream launching apron omitted from the stored explanation's final description. A launching apron has enough appropriately sized flexible material to move or settle onto a developing scour slope; it is not the same as the rigid <em>impervious apron</em> used in seepage calculations.</p>" +
                        "<p>An inverted granular filter has a soil-compatible finer layer next to the base soil and progressively coarser layers towards the protective cover and outlet. It must retain the underlying soil while allowing drainage; actual gradations, permeability, interfaces and possible flow reversal govern its design. It is not an impervious seal and does not make every pressure zero. Armour, filter and cutoff transitions need continuity so that seepage does not escape through an unprotected gap. Apron extent and quantity require anticipated scour and hydraulic loading, not the element numbers alone.</p>",
                    sources: [{ id: "IRRI951-00109", set: 11, question: 77 }]
                }
            ],
            gaps: [
                "The end-pile exercise supplies a 20 m floor and a 5 m pile but no retained head difference. Its exit gradient can only be expressed in terms of H; the head needed to reproduce a stored option is not an original given.",
                "The flood-wall exercise lacks approach area and a tailwater rating. Its numerical solution explicitly assumes negligible approach-velocity head and free overflow. The 4000 m³/s flood and 280 m bank width likewise do not supply the afflux, contraction and scour checks needed to establish a final waterway.",
                "No complete site stratigraphy, hydraulic conductivity model, soil gradation, permissible gradient, creep coefficient or Khosla correction dataset is supplied. The notes explain their roles without inventing soil tables, corrected pressures, filter sizes or a foundation safety certification.",
                "Settling-basin transit time, floor-thickness datum, hydraulic-jump arithmetic and stilling-basin operating cases are explicitly source-free syllabus extensions. Their illustrative inputs are not additional bank questions. Particle settling data, basin geometry, actual uplift pressures and structural design inputs remain necessary for a project calculation.",
                "The top-width shortcut does not provide a full weir section or a demonstrated no-tension design. The verified USBR reference is general weir-measurement background, not authority for that heuristic, a Nepal code edition, a universal flood return period or site-specific structural acceptance."
            ],
            cautions: [
                {
                    html: "<p><strong>Bank check: diversion control does not mean zero storage or gate-free weirs.</strong> The main purpose in IRRI951-00048 is to raise and control the upstream surface for diversion. Its explanation overstates the absence of storage. IRRI951-00050's gate distinction is a useful conventional comparison, not a ban on gates at every weir. IRRI951-00094's height-and-duration wording is descriptive, not an absolute definition of every dam or diversion structure.</p>",
                    sources: [
                        { id: "IRRI951-00048", set: 6, question: 71 },
                        { id: "IRRI951-00050", set: 6, question: 73 },
                        { id: "IRRI951-00094", set: 10, question: 73 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: distinguish the regulator from the whole site.</strong> IRRI951-00074's aqueduct contrast concerns a cross-drainage work versus associated headworks components. A fish pass, divide wall and under-sluices are not all literally carried by the head regulator. IRRI951-00053 correctly identifies the divide wall, but its pocket is a managed flow region; useful sluicing requires sediment transport, not permanent stillness and settlement.</p>",
                    sources: [
                        { id: "IRRI951-00074", set: 8, question: 75 },
                        { id: "IRRI951-00053", set: 6, question: 76 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: sluice percentages and sill offsets are conditional.</strong> IRRI951-00110's 10–15% flood fraction alone does not establish under-sluice capacity. Canal-related flushing, river passage and sediment requirements must be checked at their operating heads; the alternative maximum-of-requirements rule also needs those requirements to be applicable. IRRI951-00261's 1.20 m sill difference is a typical textbook value, not a universal site prescription.</p>",
                    sources: [
                        { id: "IRRI951-00110", set: 11, question: 78 },
                        { id: "IRRI951-00261", set: 25, question: 73 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: historical labels and universal suitability.</strong> IRRI951-00047's recent-origin wording is relative to an older classification, not the current date. IRRI951-00058 supplies no common operating condition or efficiency criterion proving a parabolic or ogee form best everywhere. IRRI951-00093's any-foundation statement is unsafe as a general engineering claim: a vertical drop does not remove bearing, seepage, settlement or scour constraints.</p>",
                    sources: [
                        { id: "IRRI951-00047", set: 6, question: 70 },
                        { id: "IRRI951-00058", set: 7, question: 70 },
                        { id: "IRRI951-00093", set: 10, question: 72 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: 280 m is not proved by taking a minimum.</strong> IRRI951-00061 gives a formal Lacey value of 300.4164 m, but neither that estimate nor the 280 m bank width independently establishes a safe final waterway. The keyed 280 m needs hydraulic and layout justification. Its 50-year event is a supplied assumption, not every project's required design return period. IRRI951-00330's normal alignment is a practical preference, not a guarantee of maximum coefficient or economy for all sites.</p>",
                    sources: [
                        { id: "IRRI951-00061", set: 7, question: 73 },
                        { id: "IRRI951-00330", set: 31, question: 76 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: a close flood-wall option, but incorrect rounding.</strong> IRRI951-00079 gives H<sub>e</sub> = 1.587401 m and wall RL 1085.287401 m under its intended negligible-approach-velocity model. The correctly rounded wall elevation is <strong>1085.29 m</strong>, not 1085.28 m. The stored option is only about 7.4 mm lower than the unrounded result; this is a small rounding or truncation discrepancy, not a large hydraulic error. The 2.5 m crest height and 1.2 m freeboard must both be included.</p>",
                    sources: [{ id: "IRRI951-00079", set: 9, question: 68 }]
                },
                {
                    html: "<p><strong>Bank check: arithmetic does not validate a wall-width rule.</strong> IRRI951-00037's H/√(G − 1) produces 1.6903 m from the stated 2 m and 2.4. The top-width shortcut is presented only as the bank's heuristic. Without complete height, base and top geometry, wall material, tailwater, uplift and moments, its claimed no-tension justification is not established. A correctly evaluated shortcut is not a full stability calculation or an authoritative code provision.</p>",
                    sources: [{ id: "IRRI951-00037", set: 5, question: 71 }]
                },
                {
                    html: "<p><strong>Bank check: gravity resistance is not neutral flotation.</strong> IRRI951-00054 appears to intend resistance by self-weight, which is characteristic of gravity action. Its literal statement that weight is completely balanced by uplift instead gives W/U = 1 when these are the only opposing vertical actions. That leaves no reserve and no net compressive base reaction; it cannot be used as a definition of a safe gravity weir. The stored key is not rewritten.</p>",
                    sources: [{ id: "IRRI951-00054", set: 6, question: 77 }]
                },
                {
                    html: "<p><strong>Bank check: identify how support is lost.</strong> IRRI951-00096's undermining-and-uplift pair is not an exhaustive failure classification. External bed scour and seepage-driven internal erosion are different processes, although either can undermine support. The hollow and subsidence in IRRI951-00097 describe loss of support; they must not be confused with a slab lifting first under excessive net pressure.</p>",
                    sources: [
                        { id: "IRRI951-00096", set: 10, question: 75 },
                        { id: "IRRI951-00097", set: 10, question: 76 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: empirical contact length is not an actual flow net.</strong> IRRI951-00049 and IRRI951-00056 state Bligh's assumed contact route and equal horizontal/vertical weighting. They do not establish the true pressure or gradient field. In IRRI951-00059, both faces of each ideal cutoff count: Lane gives <strong>44 m</strong>, while Bligh gives <strong>80 m</strong>. The current 44 m key is consistent; neither length alone supplies an exit-gradient or uplift safety check.</p>",
                    sources: [
                        { id: "IRRI951-00049", set: 6, question: 72 },
                        { id: "IRRI951-00056", set: 6, question: 79 },
                        { id: "IRRI951-00059", set: 7, question: 71 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: mathematical basis and solution method are related.</strong> IRRI951-00104 concerns Darcy potential flow under the floor with appropriate assumptions. Conformal mapping is also a technique for solving that potential problem, not a competing physical mechanism that can simply be dismissed. IRRI951-00051 names the independent-variables method; its standard profiles and prescribed corrections do not justify arbitrary superposition or an exact solution for every layered, three-dimensional foundation.</p>",
                    sources: [
                        { id: "IRRI951-00104", set: 11, question: 72 },
                        { id: "IRRI951-00051", set: 6, question: 74 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: cutoff roles are comparative, not absolute.</strong> IRRI951-00105 and IRRI951-00108 emphasize downstream exit-gradient control and the upstream pile's usefulness for uplift reduction. The final pressure field depends on the complete layout; a downstream pile can retain higher pressure under parts of the floor. IRRI951-00063's three-consideration explanation partly duplicates scour estimation and embedment below scour. Check exit gradient, uplift, scour protection and structural/constructibility requirements rather than asserting a universal count.</p>",
                    sources: [
                        { id: "IRRI951-00105", set: 11, question: 73 },
                        { id: "IRRI951-00108", set: 11, question: 76 },
                        { id: "IRRI951-00063", set: 7, question: 75 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: grain size is not grain specific gravity.</strong> IRRI951-00055's fine-sand choice reflects the intended vulnerability comparison, but larger particles of the same mineral do not have greater material density. The ideal heave expression uses G<sub>s</sub> and void ratio; erosion resistance also depends on gradation, permeability, fabric and filters. The quoted safe-gradient range is not adopted here as a universal soil value or a current Nepal standard.</p>",
                    sources: [{ id: "IRRI951-00055", set: 6, question: 78 }]
                },
                {
                    html: "<p><strong>Bank check: the retained head is missing.</strong> For IRRI951-00106, the isolated standard-profile formula gives <strong>G<sub>E</sub> = H/(25.1404 m)</strong>. A 1-in-5 result would require H ≈ 5.0281 m, which the stem does not state. A common H/d ratio is not an admissible substitute for a missing given. The actual gradient also must not be confused with a permissible gradient independently selected for the soil.</p>",
                    sources: [{ id: "IRRI951-00106", set: 11, question: 74 }]
                },
                {
                    html: "<p><strong>Bank check: the infinity belongs to an ideal edge.</strong> IRRI951-00113's infinite exit-gradient answer is the sharp-edge limit of the ideal floor-without-downstream-cutoff model. The explanation incorrectly makes absence of the pile cause infinite pervious-layer depth. Physical layer thickness does not change when a pile is omitted; actual geometry, filters and ground boundaries determine the appropriate engineering assessment.</p>",
                    sources: [{ id: "IRRI951-00113", set: 12, question: 69 }]
                },
                {
                    html: "<p><strong>Bank check: separate design dimensions and retain the inputs.</strong> IRRI951-00112 identifies a major seepage constraint on floor length, not the only requirement for the whole apron. IRRI951-00107's exit-gradient/uplift pair does not make scour or unbalanced head irrelevant. In IRRI951-00099, adequate floor thickness is interpreted as uplift resistance, distinct from streamwise length and cutoff penetration. Merely providing all three features cannot ensure safety without quantitative hydraulic, geotechnical and structural checks.</p>",
                    sources: [
                        { id: "IRRI951-00112", set: 12, question: 68 },
                        { id: "IRRI951-00107", set: 11, question: 75 },
                        { id: "IRRI951-00099", set: 10, question: 78 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: do not omit the second launching apron.</strong> IRRI951-00109's keyed <strong>4-2-1-3-4</strong> includes upstream and downstream launching aprons. The explanation stops after the filtered downstream blocks and therefore leaves out the final 4. The stem's well wording is inconsistent with the indicated weir-floor schematic; this illustrative interpretation is not a universal arrangement for every well foundation or headworks.</p>",
                    sources: [{ id: "IRRI951-00109", set: 11, question: 77 }]
                }
            ],
            references: [
                {
                    title: "USBR Water Measurement Manual, Chapter 7: Weirs — background and rating limitations",
                    url: "https://www.usbr.gov/tsc/techreferences/mands/wmm/chap07_01.html"
                }
            ]
        }
    });
})();