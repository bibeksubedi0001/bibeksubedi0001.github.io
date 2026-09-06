(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0805: {
            code: "ACiE0805",
            questionCount: 65,
            blocks: [
                {
                    id: "waterway-functions-and-regimes",
                    title: "Identify each waterway by function and hydraulic regime",
                    html: "<p>The conveyance system delivers water with usable head from the source to the turbine. A typical run-of-river arrangement has an intake, sediment-control works, a headrace, a forebay and a penstock. A reservoir can itself perform the forebay function where it supplies the pressure-conduit entrance. These are functional arrangements, not a compulsory sequence of identical structures at every site.</p>" +
                        "<table><thead><tr><th scope='col'>Component or regime</th><th scope='col'>Hydraulic meaning</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Free-surface tunnel</th><td>Water has an air-exposed surface and normally leaves an air space below the crown. Pressure below that surface is not zero; approximately hydrostatic pressure acts where the flow assumptions permit.</td></tr>" +
                        "<tr><th scope='row'>Pressure tunnel</th><td>The operating water passage runs full. Pressure and elevation together determine the hydraulic grade, which need not follow the invert.</td></tr>" +
                        "<tr><th scope='row'>Penstock</th><td>A pressure conduit supplying the turbine. It can feed a reaction-turbine scroll case or an impulse-turbine manifold and nozzles; a scroll case is not universal.</td></tr>" +
                        "<tr><th scope='row'>Pressure shaft</th><td>A steep or vertical underground pressure-waterway reach. Its hydraulic and structural design must account for the local pressure and surrounding ground.</td></tr></tbody></table>" +
                        "<p>A conventional forebay is normally at the <strong>downstream end of the headrace, before the penstock</strong>, not necessarily before the river intake. A surge chamber is connected to the pressure waterway to exchange water during transients; all generating flow need not pass through the chamber as though it were a tank in series. Distinguish both structures from the tailrace downstream of the turbine.</p>",
                    sources: [
                        { id: "HYDR626-00068", set: 9, question: 61 },
                        { id: "HYDR626-00152", set: 17, question: 66 },
                        { id: "HYDR626-00128", set: 15, question: 62 }
                    ]
                },
                {
                    id: "energy-head-and-pressure-profile",
                    title: "Energy head and local pressure — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> the assigned bank has no complete longitudinal energy-profile calculation. Use a common elevation datum and consistent pressure reference before comparing a tunnel, forebay, shaft and turbine.</p>" +
                        "<p>For a section with elevation z, mean velocity V and pressure p, <strong>H = z + p/(ρg) + αV<sup>2</sup>/(2g)</strong>. Here H and z are in metres, p in Pa, ρ in kg/m<sup>3</sup>, g in m/s<sup>2</sup>, and α is the dimensionless kinetic-energy correction coefficient. The <strong>hydraulic grade line, HGL = z + p/(ρg)</strong>; the energy grade line lies αV<sup>2</sup>/(2g) above it.</p>" +
                        "<p>For steady incompressible flow without a machine between the selected sections, <strong>H<sub>1</sub> = H<sub>2</sub> + h<sub>f</sub> + h<sub>m</sub></strong>. Distributed friction and local losses reduce available energy. Changes of elevation or area can increase or decrease local pressure even while total energy decreases. Net turbine head is the difference between the appropriate upstream and downstream total heads, with waterway losses assigned consistently; it is not simply height above the powerhouse floor.</p>" +
                        "<p><em>Added illustration, not bank data:</em> a gauge-pressure HGL at elevation 160 m and a pipe-centre elevation of 100 m give 60 m of gauge pressure head. With ρ = 1000 kg/m<sup>3</sup> and g = 9.81 m/s<sup>2</sup>, p = <strong>588.6 kPa</strong>. This is a local pressure calculation, not the plant's net head or a verified maximum transient pressure. Plot both maximum and minimum pressure envelopes for structural and cavitation assessment.</p>",
                    sources: []
                },
                {
                    id: "circular-wetted-geometry",
                    title: "Full and partly full circular geometry — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> the bank's section-selection questions do not supply a partly full geometry calculation. Let D be the internal waterway diameter, A the flow area and P<sub>w</sub> the wetted perimeter. Hydraulic radius is <strong>R = A/P<sub>w</sub></strong>, not the radius of the circle.</p>" +
                        "<table><thead><tr><th scope='col'>Flow condition</th><th scope='col'>Geometry</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Full circular section</th><td>A = πD<sup>2</sup>/4; P<sub>w</sub> = πD; R = D/4. The geometric radius is D/2.</td></tr>" +
                        "<tr><th scope='row'>Partly full, 0 &lt; y &lt; D</th><td>For wetted central angle θ in radians, θ = 2 arccos(1 − 2y/D), and y = (D/2)[1 − cos(θ/2)].</td></tr>" +
                        "<tr><th scope='row'>Wetted area and perimeter</th><td>A = (D<sup>2</sup>/8)(θ − sin θ); P<sub>w</sub> = Dθ/2; R = D(θ − sin θ)/(4θ).</td></tr>" +
                        "<tr><th scope='row'>Free-surface width</th><td>B = D sin(θ/2). Hydraulic depth A/B, used in free-surface flow analysis, differs from R.</td></tr></tbody></table>" +
                        "<p>A has units m<sup>2</sup>; D, y, P<sub>w</sub>, B and R have units m. The free surface does <strong>not</strong> contribute to wetted perimeter. For a full circular conduit, hydraulic diameter 4R equals D. At other depths calculate 4R from the actual wetted geometry rather than assume that equality; half depth happens to give the same value. Do not confuse hydraulic diameter 4R with free-surface hydraulic depth A/B.</p>" +
                        "<p><em>Added geometry check, not bank data:</em> D = 2 m at half depth gives θ = π, A = π/2 m<sup>2</sup>, P<sub>w</sub> = π m and R = 0.5 m. The full section also has R = 0.5 m, but twice the flow area. This coincidence at half and full depth does not make R constant at other depths. Required air space or freeboard must be checked separately from wetted geometry.</p>",
                    sources: []
                },
                {
                    id: "manning-tunnel-sizing",
                    title: "Discharge is essential, but friction slope and geometry finish the sizing",
                    html: "<p>Continuity gives <strong>Q = AV</strong>, with Q in m<sup>3</sup>/s and mean V in m/s. The bank correctly identifies discharge as a primary sizing input, but one discharge can pass through many diameters at different velocities and losses. A flow regime, section, roughness, available head and design criterion are also needed.</p>" +
                        "<p>In the SI Manning form, <strong>V = (1/n)R<sup>2/3</sup>S<sub>f</sub><sup>1/2</sup></strong> and <strong>Q = (1/n)AR<sup>2/3</sup>S<sub>f</sub><sup>1/2</sup></strong>. R is in metres, S<sub>f</sub> is distributed friction-head loss per unit length in m/m, and dimensional n has units s/m<sup>1/3</sup>. Do not insert the US-customary multiplier 1.486 into this SI expression.</p>" +
                        "<p>Only for <strong>steady uniform free-surface flow in a prismatic reach</strong> can friction, water-surface and invert slopes be taken equal. Backwater, transitions and downstream controls require nonuniform-flow analysis. In a pressure tunnel, S<sub>f</sub> is not automatically the construction grade. USBR's normal-flow discussion expressly cautions against assuming normal depth where controls determine the water level.</p>" +
                        "<p>Substitution of full-circle geometry gives <strong>D = [4<sup>5/3</sup>nQ/(π√S<sub>f</sub>)]<sup>3/8</sup></strong>. For partly full flow, instead use A(y) and R(y) and establish the governing depth. Manning is an empirical resistance representation; Darcy-Weisbach is generally the clearer pressure-conduit formulation when Reynolds-number and relative-roughness effects matter.</p>" +
                        "<p><em>Added calculation, not bank data:</em> a completely filled D = 4 m circle has R = 1 m and A = 4π m<sup>2</sup>. With assumed n = 0.020 and S<sub>f</sub> = 0.0004, V = <strong>1 m/s</strong> and Q = <strong>12.5664 m<sup>3</sup>/s</strong>. These chosen inputs do not approve a free-surface tunnel running without air space.</p>",
                    sources: [{ id: "HYDR626-00180", set: 20, question: 68 }]
                },
                {
                    id: "darcy-loss-and-diameter",
                    title: "Darcy losses and the fifth power of diameter — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> no assigned question works a complete Darcy-Weisbach waterway calculation. For a full, straight circular reach of length L, <strong>h<sub>f</sub> = f<sub>D</sub>(L/D)V<sup>2</sup>/(2g)</strong>. The dimensionless factor here is the <strong>Darcy</strong> factor. If a reference instead uses the Fanning factor, <strong>f<sub>D</sub> = 4f<sub>F</sub></strong>; inserting one as the other causes a fourfold error.</p>" +
                        "<p>Use a factor appropriate to <strong>Re = VD/ν</strong> and relative roughness ε/D, with kinematic viscosity ν in m<sup>2</sup>/s and roughness ε in metres. These are unrelated to Manning's n. For local losses, <strong>h<sub>m</sub> = ΣK<sub>i</sub>V<sub>i</sub><sup>2</sup>/(2g)</strong>; each dimensionless K<sub>i</sub> must use its specified reference velocity, especially where the passage area changes.</p>" +
                        "<p>Using V = 4Q/(πD<sup>2</sup>) gives <strong>h<sub>f</sub> = 8f<sub>D</sub>LQ<sup>2</sup>/(π<sup>2</sup>gD<sup>5</sup>)</strong>. Thus the familiar Q<sup>2</sup>/D<sup>5</sup> dependence assumes fixed L and approximately fixed f<sub>D</sub>. Recalculate the factor if diameter, roughness or Reynolds number changes materially. Local losses with fixed K have a different D dependence through their velocity head.</p>" +
                        "<p><em>Added sensitivity example, not bank data:</em> doubling D at fixed Q, L and f<sub>D</sub> reduces V to one-quarter and distributed h<sub>f</sub> to <strong>1/32</strong>. The reduction is not merely one-quarter because L/D changes too. Translate losses into annual energy and cost before choosing a diameter; minimizing loss alone would continually favour larger passages without accounting for construction cost.</p>",
                    sources: []
                },
                {
                    id: "tunnel-section-and-ground-load",
                    title: "Choose the section for pressure, ground and construction together",
                    html: "<p>A circular section is efficient for internal pressure because a continuous circular shell can resist it primarily through hoop tension. Under approximately uniform radial external pressure, a ring can develop compression, although instability and imperfections still require checks. This explains the bank's circular-section preference without declaring it the strongest shape for every ground-loading pattern.</p>" +
                        "<table><thead><tr><th scope='col'>Consideration</th><th scope='col'>Implication for selection</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Internal water pressure</th><td>Favour a pressure-efficient section and a verified pressure-resisting system; shape alone does not supply tensile strength or watertightness.</td></tr>" +
                        "<tr><th scope='row'>Unequal ground stresses or joint-controlled blocks</th><td>Account for nonuniform loads, bending, deformation and support interaction, even in a circular tunnel.</td></tr>" +
                        "<tr><th scope='row'>Free-surface flow and access</th><td>Horseshoe or D-shaped sections can provide useful invert and working-space geometry where the complete hydraulic and structural design supports the choice.</td></tr>" +
                        "<tr><th scope='row'>Non-cohesive ground</th><td>Supported circular shield and segmental tunnels can be feasible. Face stability, groundwater and support govern; cohesionlessness does not prohibit a circle.</td></tr></tbody></table>" +
                        "<p><strong>Unsupported excavation and a supported tunnel are different systems.</strong> Neither dry sand nor fractured rock should be assumed to form a stable unsupported opening simply because a preferred section has been drawn. Conversely, the need for support is not evidence that circular geometry is unsuitable.</p>" +
                        "<p>Where high internal pressure coincides with weak rock or inadequate confinement, assess alignment, leakage, hydraulic jacking and engineered lining. A circular outline plus an unspecified concrete lining is not a complete solution. Steel and concrete cannot be exchanged without examining their pressure-resistance and crack-control roles.</p>",
                    sources: [
                        { id: "HYDR626-00156", set: 18, question: 63 },
                        { id: "HYDR626-00191", set: 21, question: 66 },
                        { id: "HYDR626-00157", set: 18, question: 64 },
                        { id: "HYDR626-00192", set: 21, question: 67 },
                        { id: "HYDR626-00171", set: 19, question: 66 },
                        { id: "HYDR626-00199", set: 22, question: 67 }
                    ]
                },
                {
                    id: "lining-functions-and-load-sharing",
                    title: "Lining behaviour and load sharing — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> these records do not contain a structural lining analysis. Separate hydraulic smoothing, erosion resistance, groundwater control, ground support and internal-pressure containment. One lining may serve several purposes, but satisfying one does not demonstrate all the others.</p>" +
                        "<table><thead><tr><th scope='col'>Waterway treatment</th><th scope='col'>Behaviour to establish</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Unlined competent rock</th><td>Requires verified rock-mass stability, erosion resistance, permeability and, for pressure service, adequate confinement.</td></tr>" +
                        "<tr><th scope='row'>Shotcrete and rock support</th><td>Can stabilize exposed ground under an engineered support design. A support layer is not automatically a watertight pressure shell.</td></tr>" +
                        "<tr><th scope='row'>Concrete or reinforced concrete</th><td>Provides a defined hydraulic surface and structural functions as designed. Cracking, joints, reinforcement, external head and surrounding-ground interaction matter.</td></tr>" +
                        "<tr><th scope='row'>Steel pressure lining</th><td>Can provide tensile pressure containment and leakage control, but welds, corrosion, local details, contact and external-pressure buckling require assessment.</td></tr></tbody></table>" +
                        "<p>Pressure sharing between lining and rock follows <strong>deformation compatibility, stiffness and actual contact</strong>, not an arbitrary percentage. Gaps, cracking, groundwater, permeability and contact treatment change that interaction. A cracked concrete lining may transmit water pressure into joints even when it still provides a smooth flow surface.</p>" +
                        "<p>Loading also reverses with operating state. During pressure operation, internal water pressure may dominate; when the waterway is empty, external groundwater may govern. Permanent support, drainage and pressure lining must therefore be examined as an interacting system over construction, filling, operation and dewatered conditions, not only at one full-supply state.</p>",
                    sources: []
                },
                {
                    id: "faults-and-pressure-confinement",
                    title: "Faults, confinement and treatment — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> no site-specific fault, stress or groundwater dataset accompanies the bank. Rock cover is geometric information; it is not a direct measurement of the least confining stress or of normal stress on an unfavourably oriented discontinuity.</p>" +
                        "<p>For a water-filled joint, the elementary effective-normal-stress idea is <strong>σ′<sub>n</sub> ≈ σ<sub>n</sub> − u</strong>, with normal stress and joint-water pressure u expressed in the same units. Increasing joint pressure reduces clamping. Hydraulic jacking, joint opening and leakage depend on stress orientation, joint connectivity, deformation and material resistance; this relation is a mechanism explanation, not a standalone fracture-pressure criterion.</p>" +
                        "<p><em>Added conceptual case, not bank data:</em> a pressure tunnel crosses a fault close to a steep valley side. Vertical cover may appear substantial while confinement normal to the fault is small and the fault provides a leakage path towards the slope. A circular section does not remove either condition. Investigation must establish the rock mass, stresses, discontinuities, groundwater and likely response before choosing alignment and containment.</p>" +
                        "<p>Possible engineered responses include alignment changes, appropriate support, contact treatment, permeability-reduction grouting or pressure lining. Contact grouting and ground improvement have different objectives; neither guarantees confinement merely by being named. Drainage must be compatible with the required water-pressure boundary and acceptable groundwater effects. <strong>No universal bolt spacing, investigation-hole spacing, lining thickness or cover/head ratio is adopted.</strong> Treatment and monitoring must be tailored to the actual weak zones and pressure envelope.</p>",
                    sources: []
                },
                {
                    id: "lining-rule-and-segment-materials",
                    title: "A unit conversion and a historical material are not design rules",
                    html: "<p>The bank's legacy lining proportion is <strong>t<sub>mm</sub> = 42D<sub>m</sub></strong>, where the subscripts indicate numerical values in millimetres and metres. A dimensionally explicit form is <strong>t/(1 mm) = 42[D/(1 m)]</strong>. With both lengths expressed in the same unit, it becomes <strong>t = 0.042D</strong>, not t = 42D.</p>" +
                        "<p><em>Added unit illustration, not bank data:</em> D = 5 m would give 210 mm = 0.210 m under that proportion. This demonstrates conversion only. The coefficient's applicable material, loading, calibration range and authoritative provenance have not been established. It is <strong>not a structural lining rule or verified current code requirement</strong>. Pressure, ground loads, reinforcement, cracking, groundwater and construction details cannot be inferred from D alone.</p>" +
                        "<p>Cast-iron segments are a historical suitable lining for shield-driven subaqueous tunnels. Their segmented form permitted a supported ring to be assembled within the construction system. Watertight performance still depends on joints, seals, connections and the surrounding interface, rather than on the material name alone.</p>" +
                        "<p><strong>Modern concrete segmental linings can also be suitable.</strong> The records that offer cement concrete alongside cast iron therefore do not establish cast iron as the only possible answer without further context. Compare handling and erection loads, ground and water pressure, ring/joint behaviour, durability and leakage requirements. Historical suitability is not evidence that modern alternatives are prohibited.</p>",
                    sources: [
                        { id: "HYDR626-00165", set: 19, question: 60 },
                        { id: "HYDR626-00195", set: 22, question: 63 },
                        { id: "HYDR626-00048", set: 7, question: 61 },
                        { id: "HYDR626-00173", set: 20, question: 61 },
                        { id: "HYDR626-00201", set: 22, question: 69 }
                    ]
                },
                {
                    id: "full-face-versus-staged-excavation",
                    title: "Distinguish excavation stages from labels within a face",
                    html: "<p><strong>Full-face excavation</strong> advances the complete tunnel cross-section as one excavation stage, rather than first completing only an upper heading or a smaller pilot opening. It does not mean that every point of rock is removed at the same instant. Suitability depends on ground behaviour, opening size, equipment, support and groundwater conditions.</p>" +
                        "<p><strong>Staged excavation</strong> divides the cross-section into portions, such as an upper heading and a lower bench. This changes the exposed opening and the opportunities for support and access. It can be chosen for more than one ground class; the method name alone does not establish that the rock is perfectly self-supporting or that support can be omitted.</p>" +
                        "<p>The bank's three labels for cut, relief and perimeter functions describe zones within a face, <strong>not three full-face excavation stages</strong>. This resolves the apparent conflict between the three-sections record and the record that defines full-face as the entire section. Their wording asks different things without making that distinction clear.</p>" +
                        "<p>The separate heading-and-trenching wording is inconsistent with the heading-and-benching concept being examined. Only the distinction between geometric stages is adopted here. <strong>A construction-method label does not determine a drilling or firing sequence.</strong> The source's procedural alternatives, or their opposites, are not taught as universal instructions; detailed excavation procedures are outside these conceptual notes.</p>",
                    sources: [
                        { id: "HYDR626-00160", set: 18, question: 67 },
                        { id: "HYDR626-00194", set: 22, question: 62 },
                        { id: "HYDR626-00163", set: 19, question: 58 }
                    ]
                },
                {
                    id: "headings-benches-and-pilot-drifts",
                    title: "Understand the access and investigation reasons for staging",
                    html: "<p>Heading and benching is a common way to divide a large tunnel section. The upper heading and remaining lower bench provide different working spaces and support conditions. The bench can assist access, but its presence does not automatically make transport from the heading easy. Access gradients, available space, equipment and the support arrangement influence excavation logistics.</p>" +
                        "<p>Activities in suitably separated work areas may overlap under an engineered construction and safety plan. That can improve progress, but <strong>continuous or faster tunnelling is a possibility, not a consequence guaranteed by the method name</strong>. Ground changes, water, support needs and restricted access can control the achievable rate. The bank's very-easy versus very-difficult muck-removal descriptions are contextual comparisons, not invariant properties.</p>" +
                        "<p>A <strong>pilot drift</strong> is a smaller opening associated with subsequent development of a larger section. It can provide geological information and assist planned access, ventilation or drainage. Drifts may be placed near the top, centre or invert according to the objective and conditions; none of those positions is universally required.</p>" +
                        "<p>Rock tunnelling is a conventional application, but rock, broken ground and self-supporting ground are not mutually exclusive categories. Rock can be fractured and require support; an investigation drift does not make the whole future opening stable. The selection should connect the engineering purpose of the smaller opening to the ground model and support needs, rather than memorize an exclusive material-to-method pairing.</p>",
                    sources: [
                        { id: "HYDR626-00045", set: 6, question: 67 },
                        { id: "HYDR626-00047", set: 7, question: 60 },
                        { id: "HYDR626-00161", set: 18, question: 68 },
                        { id: "HYDR626-00162", set: 18, question: 69 },
                        { id: "HYDR626-00166", set: 19, question: 61 },
                        { id: "HYDR626-00196", set: 22, question: 64 },
                        { id: "HYDR626-00175", set: 20, question: 63 },
                        { id: "HYDR626-00203", set: 23, question: 59 }
                    ]
                },
                {
                    id: "ground-support-and-equipment-terms",
                    title: "Method and equipment names describe different functions",
                    html: "<p>Ground-support arrangements, excavation equipment and profile-control terms are different classifications. They can overlap in one engineered tunnel system; they are not an interchangeable list of complete designs.</p>" +
                        "<table><thead><tr><th scope='col'>Term</th><th scope='col'>Concept and qualification</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Forepoling</th><td>Presupport ahead of the exposed roof region in weak or unstable ground. Soft and running ground can overlap; suitability depends on the full support and groundwater-control system.</td></tr>" +
                        "<tr><th scope='row'>Needle-beam arrangement</th><td>A traditional temporary-support concept. Its name does not establish a universal ground class, span or adequate support capacity.</td></tr>" +
                        "<tr><th scope='row'>Shield</th><td>A protective construction system associated with excavation and lining. Shielded equipment is not restricted exclusively to soft ground.</td></tr>" +
                        "<tr><th scope='row'>Compressed-air tunnelling</th><td>A historical pressure-supported working-environment concept. Low-permeability clay can limit air loss, but permeability alone does not establish stability or a suitable working-pressure condition.</td></tr>" +
                        "<tr><th scope='row'>Drifter</th><td>A rock-drilling machine whose mounting and positioning can permit horizontal, upward or downward work. Not every drifter is pneumatic or track-mounted.</td></tr>" +
                        "<tr><th scope='row'>Trimmer or perimeter terminology</th><td>Refers to control of the final excavation profile, not an instruction about the order in which equipment must operate.</td></tr></tbody></table>" +
                        "<p>The compressed-atmosphere wording is interpreted only in its bank context of compressed-air tunnelling. A soil-name answer such as clay does not establish permissible worker exposure, groundwater control or construction safety. These notes provide <strong>conceptual vocabulary and qualified selection considerations only</strong>, with no drilling patterns, firing sequences or explosives instructions.</p>",
                    sources: [
                        { id: "HYDR626-00164", set: 19, question: 59 },
                        { id: "HYDR626-00174", set: 20, question: 62 },
                        { id: "HYDR626-00202", set: 23, question: 58 },
                        { id: "HYDR626-00159", set: 18, question: 66 },
                        { id: "HYDR626-00172", set: 19, question: 67 },
                        { id: "HYDR626-00200", set: 22, question: 68 }
                    ]
                },
                {
                    id: "tunnel-drainage-and-water-control",
                    title: "Drainage descriptions overlap; an open ditch is not excluded",
                    html: "<p><strong>Dewatering</strong> is the removal or control of unwanted water; it may use gravity drainage or pumping according to the hydraulic conditions. <strong>Foredrainage</strong> concerns water control ahead of the excavation. <strong>Permanent drainage</strong> describes a system retained for service. These terms describe purpose, location or duration and are not exact synonyms.</p>" +
                        "<p>Similarly, central and side drains describe position. A side drain can also be permanent, and an open ditch can also be a side drain. The bank's options therefore mix classifications. A question about the general removal of water can reasonably use dewatering, whereas an all-of-the-above answer needs a question about applicable categories, not a claim that every term means the same thing.</p>" +
                        "<p><strong>Open ditch drainage can be used inside appropriate free-surface or construction tunnels.</strong> It is not exclusively a surface-road feature. Its capacity, gradient, maintenance access, sediment control and receiving level must be suitable. This does not authorize an uncontrolled opening through a pressure-retaining lining; the waterway's operating pressure boundary must remain part of the design.</p>" +
                        "<p>Water behind a lining can create external pressure, especially when internal water level falls. Drainage effectiveness depends on connected flow paths and usable outfalls, and can be reduced by clogging or submergence. Uncontrolled groundwater lowering can also affect surrounding ground and water resources. A drainage label alone establishes neither zero external head nor acceptable ground response.</p>",
                    sources: [
                        { id: "HYDR626-00046", set: 6, question: 68 },
                        { id: "HYDR626-00169", set: 19, question: 64 },
                        { id: "HYDR626-00198", set: 22, question: 66 }
                    ]
                },
                {
                    id: "forebay-volume-and-level-constraints",
                    title: "Size forebay storage from the discharge imbalance",
                    html: "<p>A forebay provides operating storage and suitable entry conditions for the penstock. Its storage balance, neglecting other losses or including them explicitly in outflow, is <strong>d𝒱/dt = Q<sub>in</sub> − Q<sub>out</sub> − Q<sub>spill</sub></strong>. Therefore <strong>𝒱(t) − 𝒱(0) = ∫[Q<sub>in</sub> − Q<sub>out</sub> − Q<sub>spill</sub>] dt</strong>. Use seconds with discharge in m<sup>3</sup>/s to obtain volume in m<sup>3</sup>.</p>" +
                        "<p>If forebay plan area is A<sub>F</sub>(z), then <strong>A<sub>F</sub>(z) dz/dt = Q<sub>in</sub> − Q<sub>out</sub> − Q<sub>spill</sub></strong>. Only for constant plan area is usable storage simply A<sub>F</sub>Δz. The required operating band must accommodate the accumulated imbalance over the specified demand and headrace-response histories, not just the final difference in flow.</p>" +
                        "<ul><li>The minimum level must retain the required inlet submergence and avoid unacceptable air entrainment.</li><li>The maximum level must satisfy overflow capacity, freeboard and adjoining headrace constraints.</li><li>Dead or sediment-occupied volume below the useful operating band is not available balancing storage.</li><li>Entry geometry, trash exclusion, drainage and maintenance requirements constrain the layout independently of storage volume.</li></ul>" +
                        "<p><strong>Net head alone cannot determine forebay size.</strong> Head can influence the discharge associated with a specified power through P = ρgQHη, but power, efficiency and an operating history would also be needed. The bank supplies none of those storage-design data. A forebay may allow some settling, but it is not automatically an adequately designed settling basin.</p>",
                    sources: [{ id: "HYDR626-00181", set: 20, question: 69 }]
                },
                {
                    id: "forebay-storage-example",
                    title: "Forebay storage and submergence example — syllabus extension",
                    html: "<p><strong>Syllabus extension; added example, not bank data.</strong> Assume Q<sub>in</sub> = 2 m<sup>3</sup>/s, Q<sub>out</sub> = 3 m<sup>3</sup>/s for 30 s, no spill and negligible other losses. The required drawdown storage is (3 − 2) × 30 = <strong>30 m<sup>3</sup></strong>. This is an assumed flow history, not a prediction of actual headrace or governor response.</p>" +
                        "<p>For a constant A<sub>F</sub> = 60 m<sup>2</sup>, the level change is Δz = −30/60 = <strong>−0.50 m</strong>. Merely finding room for 30 m<sup>3</sup> does not prove that this drawdown is usable. Suppose, solely for this illustration, initial inlet submergence is 1.80 m and the separately stipulated minimum is 1.50 m, both measured to the same fixed datum.</p>" +
                        "<p>The permissible drawdown from that constraint is only <strong>0.30 m</strong>, so this area provides 60 × 0.30 = <strong>18 m<sup>3</sup></strong> of usable storage before reaching the stipulated minimum. The calculated 0.50 m drop would leave 1.30 m submergence. Under these simplified assumptions, meeting the 30 m<sup>3</sup> demand within 0.30 m drawdown requires A<sub>F</sub> ≥ <strong>100 m<sup>2</sup></strong>.</p>" +
                        "<p>This is a conditional storage-area bound, <strong>not a finished forebay design or a universal submergence requirement</strong>. Variable plan area, approach hydraulics, headrace response, overflow, sediment and structural requirements may change the solution. During a sustained rejection of turbine flow, an unchanged incoming supply ultimately needs a controlled outlet or spill path; a finite balancing volume cannot absorb a continuing imbalance indefinitely.</p>",
                    sources: []
                },
                {
                    id: "forebay-submergence-bank-check",
                    title: "Check the supplied submergence arithmetic without certifying the rules",
                    html: "<p>The actual bank data are <strong>Q = 3.6 m<sup>3</sup>/s</strong> and <strong>D = 1.55 m</strong>. Full-circle area A = π(1.55)<sup>2</sup>/4 = <strong>1.88692 m<sup>2</sup></strong>, so the penstock mean velocity is V = Q/A = <strong>1.90787 m/s</strong>. This is not the mean approach velocity over the entire forebay.</p>" +
                        "<table><thead><tr><th scope='col'>Rule stated in the explanation</th><th scope='col'>Conditional substitution</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>h<sub>s1</sub> = 1.5V<sup>2</sup>/(2g)</th><td>With g = 9.81 m/s<sup>2</sup>, h<sub>s1</sub> ≈ 0.2783 m.</td></tr>" +
                        "<tr><th scope='row'>h<sub>s2</sub> = 0.5V√D</th><td>Using the explanation's numerical metre-second convention gives h<sub>s2</sub> ≈ 1.1876 m.</td></tr>" +
                        "<tr><th scope='row'>Larger of those two values</th><td>1.1876 m, or about 1.19 m, only if both stated rules are adopted.</td></tr></tbody></table>" +
                        "<p>The second expression is <strong>not dimensionally homogeneous with a dimensionless coefficient 0.5</strong>: V√D has units m<sup>3/2</sup>/s, so the numerical coefficient encodes a unit convention equivalent to s/√m. Neither the origin nor calibration range of these correlations was verified. The keyed 1.18 is nearby, but conventional rounding of the calculated larger value to two decimals is 1.19.</p>" +
                        "<p>Submergence also needs a stated datum, such as inlet centre or crown, which this item does not define. Actual vortex and air-entrainment behaviour depends on inlet geometry, approach circulation, operating level and discharge. The calculation checks the explanation's arithmetic; <strong>it does not establish a universal minimum-submergence design criterion</strong>.</p>",
                    sources: [{ id: "HYDR626-00037", set: 6, question: 59 }]
                },
                {
                    id: "surge-response-to-load-changes",
                    title: "A surge tank exchanges water during both load acceptance and rejection",
                    html: "<p>A long water column has inertia: its discharge cannot follow a changing turbine demand without pressure differences that accelerate or decelerate it. A surge connection provides local storage exchange so the headrace flow can adjust over time. It <strong>mitigates specified pressure variations</strong>; it does not guarantee zero water hammer or perfectly constant turbine pressure.</p>" +
                        "<p>With flow into the tank taken positive, <strong>Q<sub>s</sub> = Q<sub>headrace</sub> − Q<sub>penstock</sub></strong> and, for a simple constant-area tank, <strong>A<sub>s</sub> dz/dt = Q<sub>s</sub></strong>. Discharges are in m<sup>3</sup>/s, tank area in m<sup>2</sup>, and level z in m. The flow difference, not turbine load considered in isolation, determines the instantaneous level-change sign.</p>" +
                        "<table><thead><tr><th scope='col'>Initial demand change</th><th scope='col'>Typical initial response</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Load rejection and reduced turbine flow</th><td>Headrace inflow initially exceeds the reduced penstock demand; water enters the tank and its level rises.</td></tr>" +
                        "<tr><th scope='row'>Load acceptance and increased turbine flow</th><td>Penstock demand initially exceeds the headrace supply; stored water leaves the tank and its level falls.</td></tr></tbody></table>" +
                        "<p>Subsequent overshoot and oscillation mean that the level need not continue moving monotonically in that initial direction. Water-column kinetic energy and gravity-related storage energy are exchanged; friction and other losses can damp the motion. Fast elastic waves in the remaining pressure conduit are a related but distinct phenomenon. The bank's decreased-load answers describe one important case, not the only case in which a surge tank acts.</p>",
                    sources: [
                        { id: "HYDR626-00038", set: 6, question: 60 },
                        { id: "HYDR626-00039", set: 6, question: 61 },
                        { id: "HYDR626-00041", set: 6, question: 63 },
                        { id: "HYDR626-00044", set: 6, question: 66 },
                        { id: "HYDR626-00177", set: 20, question: 65 },
                        { id: "HYDR626-00182", set: 21, question: 58 },
                        { id: "HYDR626-00179", set: 20, question: 67 },
                        { id: "HYDR626-00185", set: 21, question: 61 }
                    ]
                },
                {
                    id: "surge-types-and-junction-location",
                    title: "Open standpipes and closed air-cushion chambers both have valid roles",
                    html: "<p>Classify a surge device by its hydraulic boundary, not merely by whether it has a visible roof. A screened or covered tank can still be vented to atmosphere. A <strong>closed air-cushion chamber</strong> is a different, functional arrangement with a compressible gas volume; it is not a rigid vessel filled entirely with incompressible water.</p>" +
                        "<table><thead><tr><th scope='col'>Arrangement</th><th scope='col'>Restoring or dissipative behaviour</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Simple open tank</th><td>Water-level change changes gravity head while the air-exposed surface remains at atmospheric pressure.</td></tr>" +
                        "<tr><th scope='row'>Restricted-orifice or differential arrangement</th><td>Designed restrictions and connected storage alter exchange rates and losses; those features require coupled transient analysis.</td></tr>" +
                        "<tr><th scope='row'>Closed air-cushion chamber</th><td>Gas compression and expansion contribute a pressure-restoring effect. An idealized gas model may use p<sub>abs</sub>𝒱<sub>gas</sub><sup>κ</sup> = constant, with an explicitly chosen thermodynamic exponent κ.</td></tr></tbody></table>" +
                        "<p>For a conventional high-head layout, a surge connection is often placed near the <strong>headrace–penstock junction</strong>, relatively close to the powerhouse compared with the reservoir. Elevation, operating pressure, geology, access, chamber form and the remaining downstream conduit determine feasible locations. An open tank at a low turbine elevation could require an impractical height to reach its hydraulic level.</p>" +
                        "<p>Therefore near the turbine is a relative textbook answer, <strong>not exactly at the turbine inlet or as close as physically possible in every scheme</strong>. The two wrong-statement records have inconsistent keys and more than one overgeneralized statement. Neither the universal closure claim nor the universal turbine-inlet location is adopted, and closed air-cushion operation must not be dismissed.</p>",
                    sources: [
                        { id: "HYDR626-00153", set: 17, question: 67 },
                        { id: "HYDR626-00189", set: 1, question: 64 },
                        { id: "HYDR626-00178", set: 20, question: 66 },
                        { id: "HYDR626-00184", set: 21, question: 60 }
                    ]
                },
                {
                    id: "simple-surge-period",
                    title: "Derive the ideal gravity-surge period — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> no assigned question supplies a numerical surge-period or governor-stability design. Consider an ideal constant-level reservoir, a uniform tunnel of length L and area A<sub>t</sub>, and a simple open tank of area A<sub>s</sub>. After turbine flow is shut off, take v positive towards the tank and z positive above the reservoir's equilibrium level. Neglect friction, elastic waves, tank-water inertia and connection losses.</p>" +
                        "<p>Continuity gives <strong>A<sub>s</sub> dz/dt = A<sub>t</sub>v</strong>. The excess tank head opposes motion from the reservoir, so water-column momentum gives <strong>(L/g) dv/dt = −z</strong>. Differentiating continuity and substituting momentum yields <strong>d<sup>2</sup>z/dt<sup>2</sup> + [gA<sub>t</sub>/(LA<sub>s</sub>)]z = 0</strong>.</p>" +
                        "<p>Thus <strong>ω<sup>2</sup> = gA<sub>t</sub>/(LA<sub>s</sub>)</strong> and <strong>T = 2π√[LA<sub>s</sub>/(gA<sub>t</sub>)]</strong>. With L in m, both areas in m<sup>2</sup> and g in m/s<sup>2</sup>, T is in seconds. Gravity provides the restoring mechanism; acoustic wave speed does not appear in this lumped, rigid-column oscillation model.</p>" +
                        "<p><em>Added illustration, not bank data:</em> L = 1000 m, A<sub>t</sub> = 5 m<sup>2</sup>, A<sub>s</sub> = 20 m<sup>2</sup> and g = 9.81 m/s<sup>2</sup> give T ≈ <strong>127 s</strong>. This is a period, not an allowable closure time or an adequate tank height. Initial conditions are still needed to determine amplitude.</p>" +
                        "<p>The ideal equation has <strong>no damping</strong>. Real losses, restrictions and changing turbine demand alter the response. Design must check upsurge, downsurge, freeboard, minimum level and <strong>governor–waterway stability</strong>; a plausible period or large storage volume alone proves none of those requirements. Air-cushion chambers require their additional gas-pressure model.</p>",
                    sources: []
                },
                {
                    id: "penstock-materials-and-service-duty",
                    title: "A penstock material must match pressure and service conditions",
                    html: "<p>Steel is common in large or high-pressure penstocks because tensile strength, ductility, fabrication and inspectable joints can be combined in an engineered pressure conduit. However, <strong>penstock describes a function, not a single material specification</strong>. Appropriately rated ductile iron, reinforced or prestressed concrete, composites and plastics may serve other suitable head, size and installation duties.</p>" +
                        "<p>Mild steel is a type of steel, so those two options overlap in the bank. Conversely, wild steel is not an established material grade. A usable design specification must identify strength, toughness, weldability, joint quality, corrosion protection and the applicable manufacturing and inspection requirements, rather than merely select the word steel.</p>" +
                        "<p>Wall adequacy depends on the pressure envelope and the complete load path. Supports and anchors introduce local bending and longitudinal forces; branches and transitions change stresses and losses. Sediment abrasion, chemical corrosion and access for inspection can affect material and detailing decisions even when the plant has high head.</p>" +
                        "<p>Separate the hydraulic diameter from nominal product dimensions and structural wall thickness. Increasing thickness does not necessarily increase the internal flow area, and a hydraulically adequate bore can still have an inadequate pressure rating or external-pressure resistance. No material in this comparison is approved for an unspecified duty.</p>",
                    sources: [
                        { id: "HYDR626-00151", set: 17, question: 65 },
                        { id: "HYDR626-00188", set: 21, question: 64 }
                    ]
                },
                {
                    id: "penstock-membrane-stresses",
                    title: "Hoop and closed-end axial stresses — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> the bank does not provide a worked thin-wall penstock stress problem. Consider a circular, thin-walled cylinder under uniform net internal pressure p, with thickness t much smaller than D. D is the shell diameter, approximated by the internal diameter in the thin-wall model. The following are membrane stresses away from supports, joints and local discontinuities.</p>" +
                        "<p>Cut a cylinder segment of length ℓ along a diametral plane. Pressure acts on projected area Dℓ, while two cut wall strips each carry σ<sub>θ</sub>tℓ. Equilibrium gives <strong>2σ<sub>θ</sub>tℓ = pDℓ</strong>, hence <strong>σ<sub>θ</sub> = pD/(2t)</strong>. This is circumferential or hoop tension for positive internal pressure excess.</p>" +
                        "<p>For a closed end whose pressure thrust is carried by the shell, axial equilibrium gives <strong>σ<sub>z</sub>πDt = pπD<sup>2</sup>/4</strong>, hence <strong>σ<sub>z</sub> = pD/(4t)</strong>. This is the closed-end pressure contribution only. Restraint, anchors, thermal effects, weight and bending can change the total longitudinal stress; it is not automatically half the total hoop stress in every installation.</p>" +
                        "<p><em>Added unit check, not bank data:</em> p = 2 MPa, D = 1000 mm and effective t = 10 mm give <strong>σ<sub>θ</sub> = 100 MPa</strong> and <strong>σ<sub>z</sub> = 50 MPa</strong> in this model. MPa equals N/mm<sup>2</sup>, so D and t must use the same length unit. These are calculated demands, not allowable stresses or a completed pressure-conduit design. Thick walls, external buckling and local details need different or additional analysis.</p>",
                    sources: []
                },
                {
                    id: "penstock-thickness-and-load-envelope",
                    title: "Thickness allowances and load envelopes — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> this preliminary membrane calculation is not a quoted design-standard clause. With allowable tensile stress S<sub>allow</sub> and a suitably established joint-efficiency factor η<sub>j</sub>, a simplified pressure thickness is <strong>t<sub>pressure</sub> ≈ p<sub>design</sub>D/(2S<sub>allow</sub>η<sub>j</sub>)</strong>. The factor is dimensionless and cannot be guessed from the word welded.</p>" +
                        "<p>Use the relevant <strong>coincident static and transient pressure envelope</strong>, not surge pressure alone or unrelated maxima added without a consistent load case. Corrosion or erosion allowance and manufacturing tolerance must be treated according to the governing specification. With p and S in MPa and D in mm, the computed thickness is in mm.</p>" +
                        "<p><em>Added illustration, not bank data or standard-prescribed inputs:</em> assume atmospheric external pressure and a 150 m gauge design head already representing the chosen static-plus-transient case. With ρ = 1000 kg/m<sup>3</sup>, g = 9.81 m/s<sup>2</sup>, D = 1000 mm, S<sub>allow</sub> = 120 MPa and η<sub>j</sub> = 0.90, p<sub>design</sub> = <strong>1.4715 MPa</strong> and t<sub>pressure</sub> = <strong>6.8125 mm</strong>. Adding an assumed 2 mm allowance gives <strong>8.8125 mm before manufacturing tolerance and other checks</strong>; it is not a selected nominal plate thickness.</p>" +
                        "<ul><li>Check external-pressure buckling when empty or internally depressurized, including groundwater and imperfections.</li><li>Check supports, anchors, bends, branches and transitions for combined stresses and local instability.</li><li>Check repeated operating transients for fatigue and relevant seismic, thermal and construction loads.</li><li>Establish material and joint properties, inspection requirements and the applicable design basis before accepting any thickness.</li></ul>",
                    sources: []
                },
                {
                    id: "pressure-shafts-and-restraint",
                    title: "Pressure-shaft containment and restraint — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> no assigned record supplies a complete pressure-shaft design. A shaft is a steep or vertical pressure-waterway reach; its local pressure follows hydraulic grade relative to elevation. For a selected gauge HGL, <strong>p = ρg(HGL − z)</strong>. The friction calculation uses actual conduit length along the alignment, not merely the vertical head difference.</p>" +
                        "<p>An unlined pressure shaft is feasible only where verified rock-mass stability, confinement and leakage conditions justify it. A concrete or steel lining changes the containment system, but pressure sharing still depends on stiffness, cracking, contact and groundwater. Consider faults, valley-side stress relief and hydraulic connection to the ground rather than treating vertical cover as a universal pressure rating.</p>" +
                        "<p>A steel-lined shaft must also be checked for <strong>external pressure during empty or low-internal-pressure states</strong>. An annular gap, imperfect geometry or uncertain contact can materially affect buckling behaviour. Drainage assumptions must match their actual reliability and outlet conditions; a buried liner is not automatically supported against every failure mode.</p>" +
                        "<p>At an ideal closed end, pressure thrust is <strong>F = pA</strong>, in N when p is in Pa and A in m<sup>2</sup>. Actual anchor and transition forces also involve directions, momentum change, weight, restraint and other load cases. For temperature change, free expansion is ΔL = α<sub>T</sub>LΔT; a fully restrained, uniform elastic member has a thermal-stress magnitude Eα<sub>T</sub>|ΔT| under that idealization. These relationships illustrate why support and movement conditions matter; they do not prescribe a support spacing or a shaft-lining design.</p>",
                    sources: []
                },
                {
                    id: "penstock-diameter-bank-check",
                    title: "The 0.7-cumec penstock needs an added velocity assumption",
                    html: "<p>The actual source gives <strong>gross head H<sub>g</sub> = 25 m</strong>, <strong>Q = 0.7 m<sup>3</sup>/s</strong> and <strong>L = 500 m</strong>. It does not state roughness, an acceptable head loss, material and pressure rating, cost data, or a selected design velocity. These givens alone cannot determine a unique effective diameter.</p>" +
                        "<p>The explanation adds <strong>V = 2 m/s</strong>. With that explicit assumption, A = Q/V = 0.7/2 = <strong>0.35 m<sup>2</sup></strong> and <strong>D = √[4Q/(πV)] = √(1.4/π) ≈ 0.6676 m</strong>. This approximately reproduces the stored 0.667 m choice, but only after adding the velocity criterion; the velocity is not derived from the supplied head or length.</p>" +
                        "<p>The role of L appears when checking friction, and the available head constrains the loss budget and turbine duty. Different trial diameters change V, Reynolds number, friction and local losses. A defensible selection therefore checks the hydraulic profile and pressure envelope and compares feasible alternatives, rather than using the unused H and L as implied proof that 2 m/s is correct.</p>" +
                        "<p>The effective hydraulic diameter refers to the water-carrying bore. Nominal pipe size, external diameter, lining and allowances may make it different from a catalogue diameter. Neither this conditional continuity calculation nor the answer option supplies wall thickness, transient protection or an economic optimum.</p>",
                    sources: [{ id: "HYDR626-00007", set: 2, question: 66 }]
                },
                {
                    id: "economic-diameter-and-life-cycle-cost",
                    title: "Economic diameter balances the complete cost of feasible alternatives",
                    html: "<p>The bank's approximately <strong>7 m/s</strong> for a high-head penstock is a textbook heuristic, <strong>not a universal target, limit or verified standard requirement</strong>. At fixed discharge, a smaller diameter raises velocity and losses; a larger diameter usually raises parts of construction cost. Material, sediment, transient response and access constrain both options.</p>" +
                        "<p>Compare the complete capital cost of pipe or excavation, lining, joints, valves, supports, anchors, access and installation. Include maintenance, corrosion or abrasion protection, outages and replacement where relevant. Value lost generation over the actual flow-duration and operating schedule, using a consistent efficiency, energy price, discount rate and study period. Comparing steel weight alone with one rated-point loss is not a full economic appraisal.</p>" +
                        "<p>For an otherwise unchanged generating system, the electrical-power opportunity loss associated with a waterway loss h<sub>L</sub> is approximately <strong>ΔP<sub>e</sub> = ρgQh<sub>L</sub>η</strong>, in W, for the stated conversion efficiency. Integrate through time for energy. Distributed friction has the approximate Q<sup>2</sup>/D<sup>5</sup> dependence only while its Darcy factor is treated as fixed.</p>" +
                        "<p><em>Added analytical cost model, not bank data:</em> suppose equivalent costs take the deliberately simplified form <strong>C(D) = a<sub>c</sub>D<sup>m</sup> + b<sub>c</sub>D<sup>−5</sup></strong>, with positive coefficients, m &gt; 0 and consistent cost units. Setting dC/dD = 0 gives <strong>D<sub>econ</sub> = [5b<sub>c</sub>/(ma<sub>c</sub>)]<sup>1/(m+5)</sup></strong>. This illustrates a trade-off, not a universal formula: real roughness, wall design, discrete sizes, local losses and project costs may invalidate that assumed cost shape.</p>",
                    sources: [{ id: "HYDR626-00051", set: 7, question: 64 }]
                },
                {
                    id: "maximum-power-is-not-economic-design",
                    title: "The one-third head-loss result — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> no assigned question establishes a maximum-transmitted-power or economic-diameter calculation. The one-third result belongs to a particular optimization: <strong>vary discharge Q through a fixed pipe</strong> with constant gross head H<sub>g</sub> and a fixed quadratic loss coefficient k.</p>" +
                        "<p>Write <strong>h<sub>f</sub> = kQ<sup>2</sup></strong> and transmitted water power <strong>P<sub>w</sub> = ρgQ(H<sub>g</sub> − kQ<sup>2</sup>)</strong>. Differentiation gives <strong>dP<sub>w</sub>/dQ = ρg(H<sub>g</sub> − 3kQ<sup>2</sup>)</strong>. The interior maximum for positive flow occurs at <strong>Q = √[H<sub>g</sub>/(3k)]</strong>, hence <strong>h<sub>f</sub> = H<sub>g</sub>/3</strong> and remaining head 2H<sub>g</sub>/3.</p>" +
                        "<p><em>Added numerical illustration, not bank data:</em> H<sub>g</sub> = 30 m and k = 0.4 s<sup>2</sup>/m<sup>5</sup> give Q = 5 m<sup>3</sup>/s, h<sub>f</sub> = 10 m and P<sub>w</sub> = <strong>981 kW</strong> for ρ = 1000 kg/m<sup>3</sup> and g = 9.81 m/s<sup>2</sup>. That is the optimum of the stated mathematical model, not a recommendation to waste 10 m of project head.</p>" +
                        "<p>This result does <strong>not</strong> optimize diameter while Q is fixed, does not minimize life-cycle cost, and does not impose a general hydropower loss allowance. Available flow, changing friction factors, nonquadratic losses, varying head, machine efficiency and operational limits can change the optimization. Economic diameter is a separate problem with explicit cost and energy data.</p>",
                    sources: []
                },
                {
                    id: "water-hammer-and-wave-travel",
                    title: "Water hammer is an elastic transient, not only a pressure rise",
                    html: "<p>Water hammer describes propagating pressure and velocity disturbances caused by changes in flow in a closed waterway. Downstream valve closure is a familiar positive-pressure case; other boundary changes and wave reflections can produce pressure drops. Penstocks are important locations, but relevant closed turbine, draft-tube and tailrace passages are not exempt merely because their names differ.</p>" +
                        "<p>For the elementary frictionless elastic-wave relation, take <strong>ΔV as a positive reduction of forward velocity at a downstream closure</strong>. Then the initial pressure rise is <strong>Δp = ρaΔV</strong> and <strong>ΔH = aΔV/g</strong>, where a is wave speed in m/s, ρ is density in kg/m<sup>3</sup>, Δp is in Pa and ΔH is in m. For other wave directions use consistent signs; magnitudes satisfy |Δp| = ρa|ΔV| in this linear model.</p>" +
                        "<p>The momentum basis can be seen over a short interval Δτ: the wave changes the momentum of approximately ρAaΔτ of water, while pressure impulse is ΔpAΔτ. Equating the corresponding velocity-change impulse gives the relation. The wave speed a is <strong>not the mean water velocity V</strong>.</p>" +
                        "<p>Reservoirs, tanks, branches, changes of section and valves reflect and transmit waves. The first Joukowsky increment is not automatically the largest pressure at every later time or location. Actual peaks and minima depend on the initial state, boundary histories, elasticity, losses and possible cavities. An incompressible, perfectly rigid instantaneous-stop idealization can become singular; this indicates an inadequate model, not physically infinite pressure.</p>",
                    sources: [
                        { id: "HYDR626-00155", set: 18, question: 62 },
                        { id: "HYDR626-00205", set: 23, question: 61 }
                    ]
                },
                {
                    id: "elastic-wave-speed-bank-check",
                    title: "Wave speed includes both water and wall compliance",
                    html: "<p>A thin-wall elastic approximation is <strong>a = √[(K/ρ)/(1 + ψKD/(Et))]</strong>. K is water bulk modulus, E is pipe Young's modulus, t is wall thickness and ψ represents restraint and associated Poisson effects in the adopted model. K here is <strong>not</strong> a local head-loss coefficient. Use K and E in the same pressure units and D and t in the same length units.</p>" +
                        "<p>The actual bank gives D = <strong>40 cm = 0.40 m</strong>, t = <strong>4 mm = 0.004 m</strong>, E = <strong>2.1 × 10<sup>11</sup> Pa</strong> and K = <strong>2.1 × 10<sup>9</sup> Pa</strong>. Add the explicit assumptions <strong>ρ = 1000 kg/m<sup>3</sup></strong> and <strong>ψ = 1</strong>. Then KD/(Et) = (2.1 × 10<sup>9</sup> × 0.40)/(2.1 × 10<sup>11</sup> × 0.004) = <strong>1</strong>.</p>" +
                        "<p>Consequently <strong>a = √(2.1 × 10<sup>6</sup>/2) = 1024.7 m/s</strong>. The stored 1000 m/s is the approximate offered choice, not the exact calculated value. For comparison under the same water properties, suppressing pipe-wall compliance would give √(K/ρ) ≈ 1449.1 m/s; the flexible wall reduces celerity.</p>" +
                        "<p>Neither ψ = 1 nor the stated water density is universal. Entrained gas, different restraint, viscoelastic pipe behaviour and composite lining/rock systems can need another model. This calculation supplies wave speed only; pipe length, initial flow, boundary conditions and operating history are still needed to determine transient pressure. Do not borrow this speed to fill missing data in another bank question.</p>",
                    sources: [{ id: "HYDR626-00050", set: 7, question: 63 }]
                },
                {
                    id: "rapid-and-gradual-closure",
                    title: "Compare closure time with a wave's round trip",
                    html: "<p>In the elementary reservoir–uniform-pipe–downstream-valve system, a disturbance travels from the valve to the upstream boundary and returns in <strong>T<sub>crit</sub> = 2L/a</strong>. L is the relevant pipe length in m, a is pressure-wave speed in m/s, and the comparison time is in seconds. The bank's symbol c denotes this same wave speed, not water discharge velocity.</p>" +
                        "<p>A closure time <strong>T<sub>c</sub> &lt; 2L/a</strong> is rapid in this convention; equality is the limiting case. The general gradual-closure condition is <strong>T<sub>c</sub> &gt; 2L/a</strong>. Values such as 4L/a or 5L/a can be particular gradual times, but they do not replace the general inequality. An option with T<sub>c</sub> &lt; 4L/a also includes rapid closures, so it is not an equivalent criterion.</p>" +
                        "<p><em>Added time-scale example, not bank data:</em> L = 600 m and a = 1200 m/s give T<sub>crit</sub> = <strong>1 s</strong>. Under the stated simple model, a 0.4 s closure is rapid and a 3 s closure is gradual. This classification does not by itself calculate either pressure envelope.</p>" +
                        "<p>A slow total valve stroke can still contain a sharp final change in discharge because valve position and discharge are not generally proportional. Networks, surge connections and variable-area passages have multiple travel and reflection paths. Thus gradual does not mean no water hammer, and a single travel-time inequality is not a complete closure-law or surge-protection design.</p>",
                    sources: [
                        { id: "HYDR626-00158", set: 18, question: 65 },
                        { id: "HYDR626-00193", set: 22, question: 61 }
                    ]
                },
                {
                    id: "gradual-closure-bank-check",
                    title: "The 1 km pipe result depends on the assumed deceleration model",
                    html: "<p>The source gives <strong>L = 1000 m</strong>, closure time <strong>T<sub>c</sub> = 10 s</strong> and pressure-head rise <strong>ΔH = 20 m</strong>. It does not give wave speed, a valve characteristic or a discharge-versus-time history. The word gradually alone cannot establish a particular elastic peak-pressure formula.</p>" +
                        "<p>To reproduce the explanation, assume a <strong>frictionless rigid water column with uniform velocity deceleration</strong>, V(t) = V<sub>0</sub>(1 − t/T<sub>c</sub>). The inertial pressure-head increment is <strong>ΔH = −(L/g)dV/dt = LV<sub>0</sub>/(gT<sub>c</sub>)</strong>. Rearranging gives <strong>V<sub>0</sub> = ΔHgT<sub>c</sub>/L = 20 × 9.81 × 10/1000 = 1.962 m/s</strong>, approximately the stored 2 m/s.</p>" +
                        "<p>A different historical slow-closure approximation, often called the <strong>Michaud form</strong>, is ΔH ≈ 2LV<sub>0</sub>/(gT<sub>c</sub>) under its own assumptions. Substituting the same numbers in that expression would give <strong>0.981 m/s</strong>. The factor of two is a change of model, not a rounding choice, and the two formulas must not be swapped to defend an answer option.</p>" +
                        "<p>The 1.962 m/s result is therefore a <strong>conditional rigid-column reconstruction</strong>, not a uniquely demonstrated velocity from an actual elastic peak. Without a, even the 10 s time cannot independently be checked against 2L/a. A real evaluation needs the initial flow and pressure state, valve/flow history, wave properties and boundary conditions; another question's pipe data are not missing inputs for this one.</p>",
                    sources: [{ id: "HYDR626-00049", set: 7, question: 62 }]
                },
                {
                    id: "absolute-pressure-and-cavitation",
                    title: "Compare absolute pressure with vapour pressure",
                    html: "<p>Cavitation involves vapour formation where local absolute liquid pressure reaches the relevant vapour-pressure condition, followed by collapse when conditions permit pressure recovery. Vapour pressure depends on water temperature. Formation and collapse need not occur at exactly the same place; pressure recovery can occur after a cavity is transported or the transient reverses.</p>" +
                        "<p>Use <strong>p<sub>abs</sub> = p<sub>gauge</sub> + p<sub>atm,site</sub></strong> and compare local p<sub>abs</sub> with <strong>p<sub>v</sub>(T)</strong>. <strong>Negative gauge pressure is not automatically cavitation.</strong> It only means pressure below local atmosphere. Conversely, a permissible gauge-pressure calculation requires the correct atmospheric pressure at the site's altitude and the water temperature.</p>" +
                        "<p><em>Added reference-pressure illustration, not bank data:</em> assume local atmospheric pressure 90 kPa, water vapour pressure 2 kPa and local gauge pressure −20 kPa. Absolute pressure is <strong>70 kPa</strong>, above the stipulated 2 kPa vapour pressure. This simple local comparison does not predict cavitation there; it also does not establish an adequate margin at other locations or during later transients.</p>" +
                        "<p>A low-pressure transient can produce column separation. Subsequent cavity collapse or liquid-column rejoining can create secondary pressure peaks, so a single-phase wave model may cease to be sufficient. Engineering assessment considers minimum absolute pressure, air entrainment, the full transient history and suitable protection. A surge chamber does not automatically remove every cavitation risk.</p>",
                    sources: [
                        { id: "HYDR626-00154", set: 18, question: 61 },
                        { id: "HYDR626-00190", set: 21, question: 65 }
                    ]
                },
                {
                    id: "coordinated-transient-protection",
                    title: "Match protection to the physical mechanism and the whole system",
                    html: "<p>A surge tank can reduce hydraulic-transient loads on a waterway and turbine, but it is not universal protection against all runner or penstock damage. Nor does every closed conduit automatically require the same surge arrangement. Need and form follow the complete waterway, machine controls, pressure envelope and consequences of loss of function.</p>" +
                        "<table><thead><tr><th scope='col'>Physical concern</th><th scope='col'>Engineering assessment</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Positive transient pressure</th><td>Pressure-rated containment and a coordinated analysis of surge storage, controls and any engineered relief arrangements.</td></tr>" +
                        "<tr><th scope='row'>Low pressure or cavity formation</th><td>Minimum absolute-pressure envelope, appropriate storage exchange and air-management assessment; protective devices themselves alter the transient.</td></tr>" +
                        "<tr><th scope='row'>Mass-surge oscillation and machine response</th><td>Upsurge/downsurge limits, governor interaction and stability, including the effects of restrictions and operating-state changes.</td></tr>" +
                        "<tr><th scope='row'>Sediment and corrosion</th><td>Actual concentration, grading, hardness, water chemistry, wear exposure, material protection and maintainability; these are not solved by surge storage.</td></tr></tbody></table>" +
                        "<p><strong>High head does not imply sediment-free water.</strong> High-head run-of-river schemes can convey abrasive sediment, and a deep reservoir intake is not guaranteed to exclude it. Sediment management, lining or coating selection, velocities and wear allowance must address the actual service environment. The bank's exclusion of sediment from penstock design is not adopted.</p>" +
                        "<p>These are protective design concepts, not operating settings or field procedures. A completed design requires a coupled hydraulic and structural analysis, appropriate failure cases and professional review. Original stored answers remain distinct from the limitations explained here.</p>",
                    sources: [
                        { id: "HYDR626-00040", set: 6, question: 62 },
                        { id: "HYDR626-00176", set: 20, question: 64 },
                        { id: "HYDR626-00204", set: 23, question: 60 },
                        { id: "HYDR626-00183", set: 21, question: 59 }
                    ]
                }
            ],
            gaps: [
                "The 65 assigned records do not provide worked HGL/EGL profiles, partly full circular geometry or a complete Darcy loss calculation. The explicitly labelled source-free syllabus extensions supply original teaching, not extra bank questions. Questions repeated inside the extract's parent chapter objects are not additional ACiE0805 assignments.",
                "Hydraulic sizing lacks a surveyed profile, operating discharges, roughness and local-loss data, acceptable loss and cost criteria. The 0.7-cumec diameter reconstruction assumes 2 m/s; neither it nor the separate 7 m/s heuristic establishes an economic or permissible design velocity.",
                "No site-specific stress, fault, discontinuity, rock-quality, groundwater or lining-interaction dataset is supplied. The fault example and lining discussion are syllabus extensions. The provenance and range of the 42D proportion are unresolved; no universal lining thickness, bolt spacing or cover/head ratio is justified.",
                "Drainage capacity, groundwater impacts, filtered collection details, reliable outfalls and external-head histories are absent. Drainage categories and historical excavation terms do not establish a complete support or water-control design, and construction procedures are deliberately outside these notes.",
                "Forebay design lacks actual inflow and outflow histories, plan-area variation, minimum and maximum levels, overflow data and inlet geometry. The two stated submergence correlations have unverified provenance, unit convention and measurement datum. About 1.19 m is only their conditional arithmetic result, not a certified minimum.",
                "Surge-tank dimensions, initial conditions, friction, restrictions, gas properties and governor characteristics are not supplied. The ideal source-free period derivation does not establish upsurge, downsurge or governor stability, and no universal critical tank area is asserted.",
                "Penstock and pressure-shaft structural data, material and joint certification, allowable stresses, corrosion or erosion allowance, manufacturing tolerance, support loads and fatigue histories are missing. The membrane calculations and added thickness example are syllabus extensions, not standard-prescribed dimensions or design approval.",
                "The gradual-closure item does not specify wave speed, a closure law or an elastic pressure history; its 1.962 m/s result uses uniform rigid-column deceleration. The separate wave-speed item assumes density 1000 kg/m3 and restraint factor 1. Cavitation assessment additionally needs local atmospheric pressure, temperature and minimum transient pressure.",
                "USBR Water Measurement Manual HTML discussions of energy, hydraulic radius and resistance were read. DoED's water-conveyance guideline listing, the USBR monograph catalogue and the USACE tunnel-manual catalogue establish publication metadata only; their full technical PDF clauses were not verified. No current statutory adoption, DoED clause compliance, universal code limit or construction authorization is claimed."
            ],
            cautions: [
                {
                    html: "<p><strong>The 0.667 m diameter is conditional:</strong> Q = 0.7 m<sup>3</sup>/s with the explanation's added V = 2 m/s gives A = 0.35 m<sup>2</sup> and D ≈ 0.6676 m. The supplied 25 m head and 500 m length do not derive that velocity. Roughness, loss or economic criteria are missing, so this is not a unique penstock design.</p>",
                    sources: [{ id: "HYDR626-00007", set: 2, question: 66 }]
                },
                {
                    html: "<p><strong>Submergence arithmetic is not a verified criterion:</strong> Q = 3.6 m<sup>3</sup>/s and D = 1.55 m give V = 1.90787 m/s. The explanation's two rules yield 0.2783 m and 1.1876 m, so their maximum is about <strong>1.19 m</strong>, not conventionally rounded 1.18. Correlation provenance, the second coefficient's unit convention and the inlet datum remain unresolved.</p>",
                    sources: [{ id: "HYDR626-00037", set: 6, question: 59 }]
                },
                {
                    html: "<p><strong>Mitigation is not elimination:</strong> a surge tank accepts or supplies water while the conveyance flow adjusts, reducing specified pressure variations. It does not ensure constant pressure or eliminate every downstream elastic transient. Open-tank mass oscillation is gravity-restored, and damping requires losses; the ideal lossless oscillator does not damp itself.</p>",
                    sources: [
                        { id: "HYDR626-00038", set: 6, question: 60 },
                        { id: "HYDR626-00039", set: 6, question: 61 },
                        { id: "HYDR626-00041", set: 6, question: 63 },
                        { id: "HYDR626-00044", set: 6, question: 66 },
                        { id: "HYDR626-00177", set: 20, question: 65 },
                        { id: "HYDR626-00182", set: 21, question: 58 }
                    ]
                },
                {
                    html: "<p><strong>Specify the kind of damage:</strong> surge storage is the intended option for hydraulic-transient protection, not a remedy for every runner failure. Sediment abrasion, cavitation, overspeed, corrosion and mechanical loading require their own engineering assessments and protective measures.</p>",
                    sources: [{ id: "HYDR626-00040", set: 6, question: 62 }]
                },
                {
                    html: "<p><strong>Method choice is qualified:</strong> heading and benching is a conventional rock-tunnelling arrangement, but is not restricted to perfectly self-supporting hard rock. Possible overlap of work can help progress; it does not guarantee continuous excavation or eliminate support needs. Shields are not exclusively soft-ground equipment.</p>",
                    sources: [
                        { id: "HYDR626-00045", set: 6, question: 67 },
                        { id: "HYDR626-00161", set: 18, question: 68 }
                    ]
                },
                {
                    html: "<p><strong>Heading access is context-dependent:</strong> the very-easy muck-removal claim is not generally established, but neither is a universal rule that removal must always be difficult or follow one transport arrangement. Working space, access, equipment, ground and support conditions govern the comparison.</p>",
                    sources: [
                        { id: "HYDR626-00047", set: 7, question: 60 },
                        { id: "HYDR626-00162", set: 18, question: 69 }
                    ]
                },
                {
                    html: "<p><strong>Open ditches can be inside tunnels:</strong> appropriate construction and free-surface tunnels can use open side or invert drainage. Central and side describe position, while permanent describes service life, so the options are not exclusive categories. A pressurized water-retaining lining still needs a compatible drainage and containment design.</p>",
                    sources: [{ id: "HYDR626-00046", set: 6, question: 68 }]
                },
                {
                    html: "<p><strong>Cast iron is historically suitable, not uniquely possible:</strong> modern concrete segmental linings may also suit shield-driven subaqueous tunnels. Two of these records offer concrete as well, making exclusivity questionable without more context. Joints, seals and the complete lining system determine watertightness; a material label does not guarantee it.</p>",
                    sources: [
                        { id: "HYDR626-00048", set: 7, question: 61 },
                        { id: "HYDR626-00173", set: 20, question: 61 },
                        { id: "HYDR626-00201", set: 22, question: 69 }
                    ]
                },
                {
                    html: "<p><strong>The 2 m/s choice uses a rigid-column assumption:</strong> uniform deceleration with negligible friction gives V<sub>0</sub> = 20 × 9.81 × 10/1000 = <strong>1.962 m/s</strong>. Gradual valve motion does not establish that flow history or the actual elastic peak. The Michaud expression with twice the coefficient is a different approximation and cannot be substituted interchangeably. Wave speed and closure-law data are missing.</p>",
                    sources: [{ id: "HYDR626-00049", set: 7, question: 62 }]
                },
                {
                    html: "<p><strong>The wave-speed result is approximately 1024.7 m/s:</strong> convert D = 0.40 m and t = 0.004 m, and explicitly assume ρ = 1000 kg/m<sup>3</sup> and ψ = 1. Then KD/(Et) = 1 and a = √(1.05 × 10<sup>6</sup>). The 1000 m/s option is approximate; other restraint or gas conditions need different evaluation.</p>",
                    sources: [{ id: "HYDR626-00050", set: 7, question: 63 }]
                },
                {
                    html: "<p><strong>7 m/s is not a universal high-head penstock velocity:</strong> losses, economics, pressure transients, material, sediment and geometry determine an appropriate range for a particular design. No mandatory standard or calibration establishing this number for every project was verified.</p>",
                    sources: [{ id: "HYDR626-00051", set: 7, question: 64 }]
                },
                {
                    html: "<p><strong>A penstock supplies the turbine under pressure:</strong> connection to a scroll case describes applicable reaction-turbine arrangements, not every turbine. An impulse machine can be supplied through manifolds and nozzles. Wall adequacy is governed by the complete load and pressure envelope, not surge pressure alone.</p>",
                    sources: [
                        { id: "HYDR626-00068", set: 9, question: 61 },
                        { id: "HYDR626-00152", set: 17, question: 66 }
                    ]
                },
                {
                    html: "<p><strong>Reservoir function is reasonable; the placement explanation needs care:</strong> a reservoir can perform the forebay role. In a typical headrace-fed run-of-river scheme, the forebay is after the headrace and before the penstock, not necessarily before the project intake. Some settling does not make it a designed settling basin.</p>",
                    sources: [{ id: "HYDR626-00128", set: 15, question: 62 }]
                },
                {
                    html: "<p><strong>Steel and mild steel overlap:</strong> mild steel belongs to the broader steel category, so the Model 17 options are not mutually exclusive. Steel is common but not the only possible penstock material. Wild steel in the other item is not a specification, and neither item establishes material strength, joints or pressure rating.</p>",
                    sources: [
                        { id: "HYDR626-00151", set: 17, question: 65 },
                        { id: "HYDR626-00188", set: 21, question: 64 }
                    ]
                },
                {
                    html: "<p><strong>These wrong-statement items are inconsistent:</strong> one keys total closure and the other exact turbine-inlet location. A conventional open tank is vented, but a <strong>closed air-cushion chamber does work</strong>. Exact turbine-inlet placement is also not universal. Tank type and layout must be identified; choosing one stored answer does not make every other statement correct.</p>",
                    sources: [
                        { id: "HYDR626-00153", set: 17, question: 67 },
                        { id: "HYDR626-00189", set: 1, question: 64 }
                    ]
                },
                {
                    html: "<p><strong>Cavitation needs the missing pressure condition:</strong> compare local absolute pressure with water vapour pressure at the relevant temperature. Negative gauge pressure alone is insufficient. Vapour can collapse after pressure recovery elsewhere or later in the transient, not necessarily at the point of formation.</p>",
                    sources: [
                        { id: "HYDR626-00154", set: 18, question: 61 },
                        { id: "HYDR626-00190", set: 21, question: 65 }
                    ]
                },
                {
                    html: "<p><strong>Water hammer is broader than the familiar example:</strong> sudden downstream closure can produce a pressure rise in a penstock, but transients also include pressure drops and reflected waves. Other closed hydraulic passages can experience them. Gradual changes are not automatically transient-free, and a perfectly rigid instantaneous-stop singularity is not physically infinite pressure.</p>",
                    sources: [
                        { id: "HYDR626-00155", set: 18, question: 62 },
                        { id: "HYDR626-00205", set: 23, question: 61 }
                    ]
                },
                {
                    html: "<p><strong>Circular efficiency depends on loading:</strong> a circle is effective for internal pressure and approximately uniform radial loading. Anisotropic ground stresses, joints, deformation, imperfections and buckling can still govern. The phrase inherently strongest is not a universal structural comparison.</p>",
                    sources: [
                        { id: "HYDR626-00156", set: 18, question: 63 },
                        { id: "HYDR626-00191", set: 21, question: 66 }
                    ]
                },
                {
                    html: "<p><strong>A circle does not cure inadequate confinement:</strong> high internal pressure in weak rock or near a low-confinement boundary needs an engineered lining, ground and leakage assessment. Unspecified concrete and steel are not interchangeable pressure-containment solutions, and vertical cover alone does not exclude hydraulic jacking.</p>",
                    sources: [
                        { id: "HYDR626-00157", set: 18, question: 64 },
                        { id: "HYDR626-00192", set: 21, question: 67 }
                    ]
                },
                {
                    html: "<p><strong>2L/a is a model-specific return time:</strong> the general elementary gradual-closure criterion is T<sub>c</sub> &gt; 2L/a for a reservoir–pipe–valve system. Particular multiples such as 4L/a or 5L/a can satisfy it but are not the defining boundary. Longer closure does not guarantee zero pressure rise or identify the correct slow-closure formula.</p>",
                    sources: [
                        { id: "HYDR626-00158", set: 18, question: 65 },
                        { id: "HYDR626-00193", set: 22, question: 61 }
                    ]
                },
                {
                    html: "<p><strong>Profile-control terminology does not establish a sequence:</strong> trimmer or perimeter terminology concerns the intended finished excavation profile. The explanation's assertion about an obligatory drilling order is not inferred from that function. No drilling or firing procedure is supplied in these notes.</p>",
                    sources: [{ id: "HYDR626-00159", set: 18, question: 66 }]
                },
                {
                    html: "<p><strong>Three face zones are not three excavation stages:</strong> full-face means the whole cross-section is advanced as one stage rather than as heading and bench portions. Functional labels within the face do not contradict that definition. Entire face does not require simultaneous removal of every point at one instant.</p>",
                    sources: [
                        { id: "HYDR626-00160", set: 18, question: 67 },
                        { id: "HYDR626-00194", set: 22, question: 62 }
                    ]
                },
                {
                    html: "<p><strong>The construction label cannot decide the procedural options:</strong> heading and trenching is inconsistent wording for the heading-and-benching concept. The useful lesson is the distinction between upper and lower excavation portions. Neither the offered operating sequence nor its opposite is adopted as an inherent rule; project procedures require a separate engineered basis.</p>",
                    sources: [{ id: "HYDR626-00163", set: 19, question: 58 }]
                },
                {
                    html: "<p><strong>Soft and running ground can overlap:</strong> forepoling is a presupport concept for weak or unstable ground, not a guarantee tied to one mutually exclusive soil label. Its suitability depends on the complete support arrangement and water conditions; the source supplies no design of those elements.</p>",
                    sources: [{ id: "HYDR626-00164", set: 19, question: 59 }]
                },
                {
                    html: "<p><strong>42D is a legacy numerical-unit proportion:</strong> t in mm = 42 times D in m corresponds to t = 0.042D in consistent length units. Its technical provenance and applicability remain unverified. The conversion is correct, but it is not a structural lining calculation, universal minimum thickness or verified current-code clause.</p>",
                    sources: [
                        { id: "HYDR626-00165", set: 19, question: 60 },
                        { id: "HYDR626-00195", set: 22, question: 63 }
                    ]
                },
                {
                    html: "<p><strong>Drift position is flexible, and rock is not an exclusive definition:</strong> top, centre and bottom pilot openings are possible according to their purpose and ground conditions. Rock is a conventional application, but it can also be broken or require support. A drift's investigation or access function does not establish stability of the eventual full opening.</p>",
                    sources: [
                        { id: "HYDR626-00166", set: 19, question: 61 },
                        { id: "HYDR626-00196", set: 22, question: 64 },
                        { id: "HYDR626-00175", set: 20, question: 63 },
                        { id: "HYDR626-00203", set: 23, question: 59 }
                    ]
                },
                {
                    html: "<p><strong>Drainage terms are not interchangeable synonyms:</strong> dewatering can use gravity or pumping; foredrainage describes control ahead of excavation; permanent drainage describes service life. An all-of-the-above response can describe applicable categories only with suitable wording. Neither record demonstrates a complete drainage layout or zero groundwater pressure.</p>",
                    sources: [
                        { id: "HYDR626-00169", set: 19, question: 64 },
                        { id: "HYDR626-00198", set: 22, question: 66 }
                    ]
                },
                {
                    html: "<p><strong>Non-cohesive soil does not prohibit circular tunnels:</strong> engineered circular shield and segmental systems can be used in such ground. An unsupported opening may be unstable, but that is not the same as a supported tunnel being geometrically unsuitable. Face stability, support and groundwater control determine feasibility.</p>",
                    sources: [
                        { id: "HYDR626-00171", set: 19, question: 66 },
                        { id: "HYDR626-00199", set: 22, question: 67 }
                    ]
                },
                {
                    html: "<p><strong>Drifter capability depends on the equipment:</strong> horizontal, upward and downward orientations are possible where mounting and positioning permit. The explanation's pneumatic and track-mounted description is not a definition of every drifter. This is equipment vocabulary, not a drilling procedure.</p>",
                    sources: [
                        { id: "HYDR626-00172", set: 19, question: 67 },
                        { id: "HYDR626-00200", set: 22, question: 68 }
                    ]
                },
                {
                    html: "<p><strong>Low permeability explains the clay heuristic, not a complete method choice:</strong> reduced air loss can be advantageous in the historical compressed-air context. Ground stability, groundwater and specialist safety requirements remain separate. Compressed atmosphere is incomplete terminology; no suitable working pressure or exposure condition follows from either question.</p>",
                    sources: [
                        { id: "HYDR626-00174", set: 20, question: 62 },
                        { id: "HYDR626-00202", set: 23, question: 58 }
                    ]
                },
                {
                    html: "<p><strong>Whenever is too broad:</strong> a surge chamber is one means of limiting abnormal pressure, not a compulsory identical feature of every closed conduit. The need and arrangement depend on hydraulic length, pressure-wave behaviour, machine controls, allowable pressure range and the complete protective system.</p>",
                    sources: [
                        { id: "HYDR626-00176", set: 20, question: 64 },
                        { id: "HYDR626-00204", set: 23, question: 60 }
                    ]
                },
                {
                    html: "<p><strong>Near the turbine is relative, not an exact location:</strong> a conventional surge connection is often near the headrace–penstock transition. Geology, elevation, operating hydraulic level, access and remaining pressure-conduit length control placement. It need not be physically as close as possible to the runner or exactly at its inlet.</p>",
                    sources: [
                        { id: "HYDR626-00178", set: 20, question: 66 },
                        { id: "HYDR626-00184", set: 21, question: 60 }
                    ]
                },
                {
                    html: "<p><strong>Both load directions matter:</strong> reduced turbine flow commonly causes initial upsurge, while increased demand causes initial drawdown and supply from storage. Later oscillations can reverse those initial tendencies. The decreased-load keys do not establish that a surge tank acts only during rejection.</p>",
                    sources: [
                        { id: "HYDR626-00179", set: 20, question: 67 },
                        { id: "HYDR626-00185", set: 21, question: 61 }
                    ]
                },
                {
                    html: "<p><strong>Q is essential but insufficient:</strong> continuity alone gives an area only after velocity is selected. Hydraulic sizing also needs section and flow regime, roughness, length, available head, losses and operating constraints. Identifying discharge as a primary parameter is not a unique tunnel-diameter calculation.</p>",
                    sources: [{ id: "HYDR626-00180", set: 20, question: 68 }]
                },
                {
                    html: "<p><strong>Net head alone does not size a forebay:</strong> usable volume follows the integral of inflow minus outflow and spill over a stated time history, subject to minimum submergence and maximum-level constraints. The power equation cannot provide that history. None of the offered variables supplies a general storage-design answer on its own.</p>",
                    sources: [{ id: "HYDR626-00181", set: 20, question: 69 }]
                },
                {
                    html: "<p><strong>Sediment must not be excluded from high-head penstock design:</strong> abrasive material can pass through high-head run-of-river systems, and deep intakes are not guaranteed to supply clear water. Actual sediment, corrosion, static pressure and transients all require consideration. A surge tank does not address abrasion or eliminate the need for sediment management.</p>",
                    sources: [{ id: "HYDR626-00183", set: 21, question: 59 }]
                }
            ],
            references: [
                {
                    title: "USBR Water Measurement Manual §2.10 — verified HTML: energy balance, pressure head and hydraulic and energy grade lines",
                    url: "https://www.usbr.gov/tsc/techreferences/mands/wmm/chap02_10.html"
                },
                {
                    title: "USBR Water Measurement Manual §2.11 — verified HTML: hydraulic radius and hydraulic mean depth",
                    url: "https://www.usbr.gov/tsc/techreferences/mands/wmm/chap02_11.html"
                },
                {
                    title: "USBR Water Measurement Manual §2.16 — verified HTML: normal flow, resistance equations and friction-slope limitations",
                    url: "https://www.usbr.gov/tsc/techreferences/mands/wmm/chap02_16.html"
                },
                {
                    title: "DoED — Design Guidelines for Water Conveyance System of Hydropower Projects; publisher listing verified, not full technical clauses or edition inferred from upload date",
                    url: "https://doed.gov.np/content/30/design-guidelines-for-water-conveyance-system-of/"
                },
                {
                    title: "USBR monograph catalogue — EM 3 Welded Steel Penstocks, revised 1966, and EM 7 Friction Factors for Large Conduits Flowing Full, revised 1977; historical metadata only",
                    url: "https://www.usbr.gov/tsc/techreferences/hydraulics_lab/pubs/manuals_monographs.html"
                },
                {
                    title: "USACE official manual catalogue — EM 1110-2-2901, Tunnels and Shafts in Rock, 30 May 1997; catalogue metadata only, not verified technical clauses or Nepal adoption",
                    url: "https://www.publications.usace.army.mil/USACE-Publications/Engineer-Manuals/?udt_43544_param_page=3"
                }
            ]
        }
    });
})();