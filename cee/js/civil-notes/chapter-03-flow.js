(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0303: {
            code: "ACiE0303",
            questionCount: 47,
            blocks: [
                {
                    id: "flow-description-and-classification",
                    title: "Flow descriptions and classifications",
                    html: "<p><strong>Eulerian</strong> description observes fixed locations; <strong>Lagrangian</strong> description follows particles. Both are valid. Section-averaged pipe variables give a one-dimensional approximation, not a uniform actual profile.</p>" +
                        "<table><thead><tr><th scope='col'>Classification</th><th scope='col'>Criterion</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Steady</th><td>Properties at each fixed point are time-independent.</td></tr>" +
                        "<tr><th scope='row'>Uniform</th><td>Velocity is spatially constant at that instant.</td></tr></tbody></table>" +
                        "<p>These are independent. A steady incompressible nozzle has spatially changing speed. Constant pipe area fixes section-mean speed for steady incompressible flow without withdrawals; area alone guarantees neither steadiness nor a uniform profile.</p>",
                    sources: [
                        { id: "WATE701-00325", set: 28, question: 60 },
                        { id: "WATE701-00326", set: 29, question: 47 },
                        { id: "WATE701-00327", set: 29, question: 48 },
                        { id: "WATE701-00328", set: 29, question: 49 },
                        { id: "WATE701-00330", set: 29, question: 51 }
                    ]
                },
                {
                    id: "streamlines-pathlines-and-streaklines",
                    title: "Streamlines, pathlines and streaklines",
                    html: "<p>A <strong>streamline</strong> is instantaneously tangent to velocity; a <strong>pathline</strong> records one particle; a <strong>streakline</strong> joins particles previously passing a fixed point, as with chimney smoke. Use coincidence of all three only under a stated steady-flow assumption. Streamlines cannot cross at regular, nonstagnant points.</p>" +
                        "<p>Unchanging streamline geometry can conceal changing speeds. Parallel lines can have unequal speeds: neither observation alone proves the bank's proposed classification.</p>",
                    sources: [
                        { id: "WATE701-00319", set: 28, question: 54 },
                        { id: "WATE701-00320", set: 28, question: 55 },
                        { id: "WATE701-00321", set: 28, question: 56 },
                        { id: "WATE701-00322", set: 28, question: 57 },
                        { id: "WATE701-00323", set: 28, question: 58 }
                    ]
                },
                {
                    id: "rotation-potentials-and-stream-functions",
                    title: "Rotation, potential and stream function",
                    html: "<p>For two-dimensional incompressible flow, choose <strong>u = ∂ψ/∂y, v = −∂ψ/∂x</strong>. Constant ψ traces streamlines; |Δψ| gives discharge per unit width through a flow channel between them. Equal channel discharges require equal Δψ.</p>" +
                        "<p>Irrotational flow admits a local potential with <strong>u = ∂φ/∂x, v = ∂φ/∂y</strong>, globally single-valued on a simply connected region. Opposite sign conventions exist; do not mix them. Potential contours cross streamlines orthogonally away from stagnation. A stream function permits rotation; boundary-layer shear commonly produces it, whereas outer irrotationality is an assumption.</p>",
                    sources: [
                        { id: "WATE701-00031", set: 4, question: 54 },
                        { id: "WATE701-00032", set: 4, question: 55 },
                        { id: "WATE701-00059", set: 6, question: 57 },
                        { id: "WATE701-00329", set: 29, question: 50 }
                    ]
                },
                {
                    id: "mass-continuity-and-junctions",
                    title: "Mass and volume continuity",
                    html: "<p>Mass conservation gives <strong>dM<sub>CV</sub>/dt = Σ(ρQ)<sub>in</sub> − Σ(ρQ)<sub>out</sub></strong>: M<sub>CV</sub> is stored mass, ρ density, Q = AV discharge and V section-mean speed. Steady flow conserves ρAV; constant density additionally gives A<sub>1</sub>V<sub>1</sub> = A<sub>2</sub>V<sub>2</sub>. Incompressibility requires ∇·<strong>v</strong> = 0.</p>" +
                        "<p><strong>Bank applications:</strong> halving diameter gives 4V. Two d-inlets at V feeding one outlet at 2V require D = d. For arbitrary inlet diameters and outlet diameter 2d, <strong>V<sub>3</sub> = (d<sub>1</sub><sup>2</sup>V<sub>1</sub> + d<sub>2</sub><sup>2</sup>V<sub>2</sub>)/(4d<sup>2</sup>)</strong>.</p>",
                    sources: [
                        { id: "WATE701-00094", set: 9, question: 56 },
                        { id: "WATE701-00097", set: 10, question: 48 },
                        { id: "WATE701-00105", set: 10, question: 56 },
                        { id: "WATE701-00309", set: 27, question: 53 },
                        { id: "WATE701-00310", set: 27, question: 54 },
                        { id: "WATE701-00324", set: 28, question: 59 }
                    ]
                },
                {
                    id: "differential-continuity-worked-fields",
                    title: "Worked polynomial continuity checks",
                    html: "<p>Differentiate u in x and v in y. Their sum must vanish <strong>throughout the field</strong>, not just along a special line. Applying this to the bank's fields:</p>" +
                        "<table><thead><tr><th scope='col'>Components (u; v)</th><th scope='col'>Divergence</th><th scope='col'>Required constants</th></tr></thead><tbody>" +
                        "<tr><td>ax<sup>2</sup> + bxy + cy<sup>2</sup>; cxy</td><td>(2a + c)x + by</td><td>2a + c = 0; b = 0</td></tr>" +
                        "<tr><td>axy; bx<sup>2</sup> + cy<sup>2</sup></td><td>(a + 2c)y</td><td>a + 2c = 0</td></tr>" +
                        "<tr><td>ax<sup>2</sup> + bxy; cxy + dy<sup>2</sup></td><td>(2a + c)x + (b + 2d)y</td><td>2a + c = 0; b + 2d = 0</td></tr>" +
                        "<tr><td>ax<sup>2</sup> + bxy; bxy + ay<sup>2</sup></td><td>(2a + b)(x + y)</td><td>2a + b = 0</td></tr></tbody></table>",
                    sources: [
                        { id: "WATE701-00311", set: 27, question: 55 },
                        { id: "WATE701-00312", set: 27, question: 56 },
                        { id: "WATE701-00313", set: 27, question: 57 },
                        { id: "WATE701-00314", set: 28, question: 49 }
                    ]
                },
                {
                    id: "acceleration-and-governing-forces",
                    title: "Acceleration, Euler and Navier-Stokes",
                    html: "<p><em>Syllabus extension:</em> in two dimensions, <strong>a<sub>x</sub> = ∂u/∂t + u∂u/∂x + v∂u/∂y</strong>. The first term is local acceleration; the others are convective. Thus steady nozzle flow can accelerate. Here t is time and u, v are velocity components.</p>" +
                        "<p>Navier-Stokes includes pressure, gravity and viscous stresses. Euler's momentum equation neglects viscosity, not acceleration, and need not be steady. Surface tension normally enters interfacial boundary conditions.</p>",
                    sources: [
                        { id: "WATE701-00315", set: 28, question: 50 },
                        { id: "WATE701-00316", set: 28, question: 51 }
                    ]
                },
                {
                    id: "bernoulli-energy-and-head",
                    title: "Bernoulli and extended energy balance",
                    html: "<p>Steady, incompressible, inviscid flow without shaft work conserves Bernoulli head along a streamline. Constants may differ between streamlines unless flow is irrotational; laminar does not mean lossless.</p>" +
                        "<p>For section means, <strong>H = z + p/(ρg) + αV<sup>2</sup>/(2g)</strong>. Here z is elevation, p pressure, g gravitational acceleration and α the kinetic-energy correction factor. Head is energy per weight in metres; gH is energy per mass in J/kg. The extended balance is <strong>H<sub>1</sub> + h<sub>p</sub> = H<sub>2</sub> + h<sub>t</sub> + h<sub>L</sub></strong>: pump addition, turbine extraction and losses respectively.</p>" +
                        "<p><strong>Bank calculation:</strong> 2 bar gauge = 200000 Pa; z = 2 m, ρ = 1000 kg/m<sup>3</sup> and g = 9.8 m/s<sup>2</sup> give piezometric head <strong>2 + 200000/9800 = 22.41 m</strong>. At V = 2 m/s, another 0.204 m enters total head when α = 1. Ideal constant-speed downflow trades elevation for pressure.</p>",
                    sources: [
                        { id: "WATE701-00033", set: 4, question: 56 },
                        { id: "WATE701-00048", set: 5, question: 59 },
                        { id: "WATE701-00098", set: 10, question: 49 },
                        { id: "WATE701-00102", set: 10, question: 53 },
                        { id: "WATE701-00317", set: 28, question: 52 },
                        { id: "WATE701-00318", set: 28, question: 53 }
                    ]
                },
                {
                    id: "momentum-jets-and-bends",
                    title: "Momentum, jets and fitting reaction",
                    html: "<p>For steady flow, <strong>ΣF<sub>external,on fluid</sub> = ρQ(β<sub>2</sub><strong>v</strong><sub>2</sub> − β<sub>1</sub><strong>v</strong><sub>1</sub>)</strong>. Vectors preserve direction; β corrects momentum flux (1 for uniform profiles). Include pressure, weight and wall forces. Fitting reaction reverses the wall force, not automatically the entire resultant.</p>" +
                        "<p>A normal jet spreads along a stationary plate, giving <strong>F = ρA<sub>j</sub>V<sup>2</sup></strong>. Retreat along the jet at 0 ≤ U &lt; V gives intercepted mass rate ρA<sub>j</sub>(V − U), hence F = ρA<sub>j</sub>(V − U)<sup>2</sup>; A<sub>j</sub> is jet area.</p>" +
                        "<p><strong>Bank bend, β = 1:</strong> water (ρ = 1000 kg/m<sup>3</sup>) at 1 m/s in diameter 0.10 m gives ρQV = 7.854 N. A right-angle turn gives <strong>√2 × 7.854 = 11.11 N = 5π/√2 N</strong>, neglecting pressure forces and weight.</p>",
                    sources: [
                        { id: "WATE701-00093", set: 9, question: 55 },
                        { id: "WATE701-00095", set: 9, question: 57 },
                        { id: "WATE701-00099", set: 10, question: 50 },
                        { id: "WATE701-00100", set: 10, question: 51 }
                    ]
                },
                {
                    id: "reynolds-number-and-regime",
                    title: "Reynolds number and flow regime",
                    html: "<p><strong>Re = ρVD/μ = VD/ν</strong>, using mean speed, pipe diameter D, dynamic viscosity μ and kinematic viscosity ν. For ordinary full circular-pipe flow, the bank uses laminar below about 2000, transition around 2000–4000 and turbulent above 4000. Thus 100 and 1000 are laminar, unlike 10000. At fixed fluid and geometry, lower speed lowers Re. These thresholds do not transfer unchanged to open channels or boundary layers.</p>",
                    sources: [
                        { id: "WATE701-00331", set: 29, question: 52 },
                        { id: "WATE701-00332", set: 29, question: 53 }
                    ]
                },
                {
                    id: "pressure-based-flow-meters",
                    title: "Pitot, venturi and orifice meters",
                    html: "<p>A pitot-static tube gives local speed <strong>V = C<sub>p</sub>√(2gΔh)</strong> from stagnation minus static head; C<sub>p</sub> is its calibration coefficient. It does not directly give total discharge.</p>" +
                        "<p><em>Measurement extension:</em> <strong>Q = C<sub>d</sub>A<sub>t</sub>√[2gΔh/(1 − r<sup>2</sup>)]</strong>, with throat/opening area A<sub>t</sub>, upstream area A<sub>1</sub> and r = A<sub>t</sub>/A<sub>1</sub>. Δh is piezometric-head difference in metres of flowing liquid, not unconverted manometer displacement. Areas in m<sup>2</sup> give Q in m<sup>3</sup>/s. The bank's C<sub>d</sub> ranges, 0.62–0.65 for an orifice meter and 0.97–0.99 for a venturi, are indicative, not calibration standards.</p>",
                    sources: [
                        { id: "WATE701-00035", set: 4, question: 58 },
                        { id: "WATE701-00039", set: 5, question: 50 },
                        { id: "WATE701-00060", set: 6, question: 58 }
                    ]
                },
                {
                    id: "free-orifice-and-trajectory-example",
                    title: "Orifice coefficients and jet trajectory",
                    html: "<p>For a small free orifice with head H above its centre, <strong>C<sub>v</sub> = V<sub>jet</sub>/√(2gH)</strong>, C<sub>c</sub> = A<sub>jet</sub>/A<sub>orifice</sub>, and C<sub>d</sub> = C<sub>c</sub>C<sub>v</sub>; hence Q = C<sub>d</sub>A<sub>orifice</sub>√(2gH).</p>" +
                        "<p><strong>Bank trajectory:</strong> a horizontal jet falling y travels x, giving C<sub>v</sub> = x/(2√Hy). With H = y = 1 m and x = 1.8 m, C<sub>v</sub> = <strong>0.90</strong>. This assumes negligible air resistance and instantaneous reservoir head.</p>",
                    sources: [{ id: "WATE701-00014", set: 3, question: 49 }]
                },
                {
                    id: "notches-weirs-and-channel-measurement",
                    title: "Notches, weirs and channel measurement",
                    html: "<p><em>Measurement extension:</em> free rectangular-notch discharge is <strong>Q = (2/3)C<sub>d</sub>b√(2g)H<sup>3/2</sup></strong>; a triangular notch gives Q = (8/15)C<sub>d</sub>tan(θ/2)√(2g)H<sup>5/2</sup>. Here b is width, θ notch angle and H upstream head above the crest; neglect approach velocity and require free, aerated discharge.</p>" +
                        "<p>An ogee also follows H<sup>3/2</sup> with fixed coefficient and geometry; efficiency depends on operating head. A venturi flume infers discharge from calibrated depth. A current meter instead supplies velocities for summing area × mean velocity across channel subsections.</p>",
                    sources: [
                        { id: "WATE701-00066", set: 7, question: 53 },
                        { id: "WATE701-00067", set: 7, question: 54 },
                        { id: "WATE701-00263", set: 23, question: 55 }
                    ]
                },
                {
                    id: "mass-and-variable-area-meters",
                    title: "Coriolis meters and rotameters",
                    html: "<p>A <strong>Coriolis meter</strong> senses mass flow through vibrating tubes; volumetric flow additionally needs density. A <strong>rotameter</strong> balances float weight against buoyancy and drag in a vertical tapered tube. Float height indicates calibrated flow through a variable area; fluid properties affect that calibration.</p>",
                    sources: [
                        { id: "WATE701-00271", set: 24, question: 54 },
                        { id: "WATE701-00272", set: 24, question: 55 }
                    ]
                }
            ],
            gaps: [
                "The 47 assigned items contain no acceleration calculation, instrument calibration dataset or pump/turbine energy problem. Added equations are syllabus extensions, not additional bank questions.",
                "Notch formulae supplement the assigned ogee questions; no measured notch dataset or verified method standard is supplied."
            ],
            cautions: [
                {
                    html: "<p><strong>Momentum conflict:</strong> the moving-plate exclusion is wrong; even venturimeters obey momentum conservation. The bend omits pressure data. In the jet option, p must mean density ρ, not pressure.</p>",
                    sources: [
                        { id: "WATE701-00095", set: 9, question: 57 },
                        { id: "WATE701-00099", set: 10, question: 50 },
                        { id: "WATE701-00100", set: 10, question: 51 }
                    ]
                },
                {
                    html: "<p><strong>Jar section ambiguity:</strong> Q/A = 0.20 m/s versus trajectory speed 3.99 m/s. These cannot describe one uniform exit section; reconciliation requires C<sub>c</sub> ≈ 0.050. Printed values remain unchanged.</p>",
                    sources: [{ id: "WATE701-00014", set: 3, question: 49 }]
                },
                {
                    html: "<p><strong>Missing diameters:</strong> the keyed V<sub>1</sub> + V<sub>2</sub>/4 requires d<sub>1</sub> = 2d, d<sub>2</sub> = d, neither supplied. Equal d-inlets instead give (V<sub>1</sub> + V<sub>2</sub>)/4.</p>",
                    sources: [{ id: "WATE701-00309", set: 27, question: 53 }]
                },
                {
                    html: "<p><strong>Polynomial conflicts:</strong> the first worked field also needs b = 0, absent from its key. The last requires 2a + b = 0, contradicting the key's claimed independence from constants.</p>",
                    sources: [
                        { id: "WATE701-00311", set: 27, question: 55 },
                        { id: "WATE701-00314", set: 28, question: 49 }
                    ]
                },
                {
                    html: "<p><strong>Bernoulli wording:</strong> continuous does not imply steady, inviscid or incompressible. Streamline constants <em>may</em> differ, not necessarily. Downward pressure rise also depends on losses.</p>",
                    sources: [
                        { id: "WATE701-00317", set: 28, question: 52 },
                        { id: "WATE701-00098", set: 10, question: 49 },
                        { id: "WATE701-00048", set: 5, question: 59 }
                    ]
                },
                {
                    html: "<p><strong>Geometric inference:</strong> instantaneous velocity is tangent to its particle's pathline too, so the tangency choices overlap. Fixed or parallel streamlines alone prove neither steady nor uniform speed; nonintersection excludes singular/stagnation points.</p>",
                    sources: [
                        { id: "WATE701-00319", set: 28, question: 54 },
                        { id: "WATE701-00320", set: 28, question: 55 },
                        { id: "WATE701-00321", set: 28, question: 56 },
                        { id: "WATE701-00322", set: 28, question: 57 }
                    ]
                },
                {
                    html: "<p><strong>Missing assumptions:</strong> Eulerian is common, not exclusive. Constant area alone cannot establish uniformity; nozzle 'never' answers require nonzero steady incompressible flow through changing area.</p>",
                    sources: [
                        { id: "WATE701-00325", set: 28, question: 60 },
                        { id: "WATE701-00326", set: 29, question: 47 },
                        { id: "WATE701-00327", set: 29, question: 48 },
                        { id: "WATE701-00330", set: 29, question: 51 }
                    ]
                },
                {
                    html: "<p><strong>Instrument qualifications:</strong> ogee loss ranking and 'most common' flume are context-dependent. A rotameter alone is not an automatic controller; sensing and actuation are additional functions.</p>",
                    sources: [
                        { id: "WATE701-00066", set: 7, question: 53 },
                        { id: "WATE701-00263", set: 23, question: 55 },
                        { id: "WATE701-00272", set: 24, question: 55 }
                    ]
                },
                {
                    html: "<p><strong>Notation and scope:</strong> incompressibility uses divergence ∇·<strong>v</strong>, not the velocity gradient; compressible continuity uses density, not pressure. Reynolds thresholds assume pipe flow; the three-flow wording supplies only two velocities.</p>",
                    sources: [
                        { id: "WATE701-00094", set: 9, question: 56 },
                        { id: "WATE701-00097", set: 10, question: 48 },
                        { id: "WATE701-00331", set: 29, question: 52 },
                        { id: "WATE701-00332", set: 29, question: 53 }
                    ]
                }
            ]
        },
        ACiE0304: {
            code: "ACiE0304",
            questionCount: 21,
            blocks: [
                {
                    id: "pipe-regime-and-hydraulic-diameter",
                    title: "Flow regime and the correct diameter",
                    html: "<p>For a full circular pipe, V = Q/A and <strong>Re = VD/ν</strong>, with kinematic viscosity ν. Conventional laminar/transition/turbulent bands are approximately below 2000–2300, up to 4000, and above 4000; inlet disturbances matter.</p>" +
                        "<p>For noncircular conduits, <strong>D<sub>h</sub> = 4A/P<sub>w</sub></strong>, where P<sub>w</sub> is wetted perimeter. The bank's full 10 m × 6 m duct gives A = 60 m<sup>2</sup>, P<sub>w</sub> = 32 m and <strong>D<sub>h</sub> = 7.5 m</strong>. An open free surface is not wetted wall; neither its perimeter nor its transition criterion is interchangeable with a full duct's.</p>",
                    sources: [{ id: "WATE701-00229", set: 20, question: 59 }]
                },
                {
                    id: "laminar-profile-and-poiseuille",
                    title: "Laminar velocity, shear and Hagen-Poiseuille flow",
                    html: "<p>Assume steady, fully developed, laminar, incompressible Newtonian flow, constant viscosity μ, a straight uniform circular pipe and no slip. Radius is R; r measures distance from the axis.</p>" +
                        "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Distribution</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Velocity</th><td>u(r) = 2V[1 − (r/R)<sup>2</sup>]: parabolic, centre maximum 2V, zero at wall.</td></tr>" +
                        "<tr><th scope='row'>Shear magnitude</th><td>|τ(r)| = Δp<sub>f</sub>r/(2L): linear, zero at centre, maximum at wall.</td></tr></tbody></table>" +
                        "<p><em>Governing-equation extension:</em> Hagen-Poiseuille gives <strong>Q = πD<sup>4</sup>Δp<sub>f</sub>/(128μL)</strong>, with Δp<sub>f</sub> = p<sub>1</sub> − p<sub>2</sub> + ρg(z<sub>1</sub> − z<sub>2</sub>). Pressure drop alone suffices only horizontally. The parabolic profile gives kinetic-energy factor α = 2 and momentum factor β = 4/3; uniform profiles give both factors 1.</p>",
                    sources: [
                        { id: "STRU935-00082", set: 9, question: 18 },
                        { id: "WATE701-00049", set: 6, question: 47 }
                    ]
                },
                {
                    id: "darcy-friction-and-discharge-form",
                    title: "Darcy-Weisbach and the factor-of-four trap",
                    html: "<p><strong>h<sub>f</sub> = f<sub>D</sub>(L/D)V<sup>2</sup>/(2g)</strong>, where h<sub>f</sub> is friction head, L length and f<sub>D</sub> the dimensionless <strong>Darcy</strong> factor. Fully developed circular laminar flow gives <strong>f<sub>D</sub> = 64/Re</strong>. The Fanning factor is f<sub>F</sub> = f<sub>D</sub>/4 = 16/Re; substituting it without the factor four underestimates loss.</p>" +
                        "<p>Substituting V = 4Q/(πD<sup>2</sup>) gives <strong>h<sub>f</sub> = 8f<sub>D</sub>LQ<sup>2</sup>/(gπ<sup>2</sup>D<sup>5</sup>)</strong>, approximately f<sub>D</sub>LQ<sup>2</sup>/(12.1D<sup>5</sup>) for g = 9.81 m/s<sup>2</sup>, Q in m<sup>3</sup>/s and lengths in metres. The 12.1 is not a unit-independent constant.</p>",
                    sources: [
                        { id: "WATE701-00011", set: 2, question: 58 },
                        { id: "WATE701-00037", set: 5, question: 48 },
                        { id: "WATE701-00103", set: 10, question: 54 }
                    ]
                },
                {
                    id: "roughness-turbulence-and-mixing-length",
                    title: "Roughness and turbulent momentum exchange",
                    html: "<p>Moody-chart e is absolute wall roughness; <strong>e/D</strong> is relative roughness. Turbulent f<sub>D</sub> generally depends on both Re and e/D. Only the <strong>fully rough</strong> limiting regime becomes essentially independent of Re. Ordinary developed laminar resistance is independent of roughness.</p>" +
                        "<p>Laminar head loss varies with V because f<sub>D</sub> varies as 1/Re. Turbulent loss is proportional to V<sup>2</sup> only when f<sub>D</sub> is effectively constant. Prandtl's mixing length models turbulent momentum exchange; it approaches zero at the wall, varies with wall distance, and is not a universal constant.</p>",
                    sources: [
                        { id: "WATE701-00034", set: 4, question: 57 },
                        { id: "WATE701-00043", set: 5, question: 54 },
                        { id: "WATE701-00045", set: 5, question: 56 }
                    ]
                },
                {
                    id: "minor-losses-and-sudden-expansion",
                    title: "Minor losses need a stated velocity basis",
                    html: "<p>Fittings produce <strong>h<sub>m</sub> = KV<sub>ref</sub><sup>2</sup>/(2g)</strong>; dimensionless K belongs to a specified reference section. Do not combine coefficients based on different velocities. A sharp-edged reservoir entrance is commonly approximated by K = 0.5, and discharge into a large reservoir by K = 1, using pipe speed.</p>" +
                        "<p>For steady incompressible sudden expansion with approximately uniform section velocities, <strong>h<sub>e</sub> = (V<sub>1</sub> − V<sub>2</sub>)<sup>2</sup>/(2g)</strong>. With upstream velocity as reference, K = (1 − A<sub>1</sub>/A<sub>2</sub>)<sup>2</sup>. <em>Illustrative extension:</em> V<sub>1</sub> = 2 and V<sub>2</sub> = 0.5 m/s give h<sub>e</sub> = 2.25/19.62 = <strong>0.115 m</strong>, not either section's whole velocity head.</p>",
                    sources: [
                        { id: "WATE701-00038", set: 5, question: 49 },
                        { id: "WATE701-00047", set: 5, question: 58 },
                        { id: "WATE701-00106", set: 10, question: 57 }
                    ]
                },
                {
                    id: "total-loss-and-economic-diameter",
                    title: "Loss budgeting and economic diameter",
                    html: "<p>Add distributed and local losses. For a common velocity basis, compare f<sub>D</sub>L/D with ΣK before neglecting fittings. Long pipes often have friction-dominated loss, but numerous valves or a restrictive fitting can invalidate that shortcut.</p>" +
                        "<p><strong>Bank calculation:</strong> the empirical estimate D = 1.22√Q gives 1.22√0.16 = <strong>0.488 m</strong>, with Q in m<sup>3</sup>/s. Its coefficient carries the unit convention; it does not prove an optimum. Actual economic selection balances pipe cost against pumping energy, operating hours, efficiency and pressure requirements. Those data are absent.</p>",
                    sources: [
                        { id: "HYDR626-00052", set: 7, question: 65 },
                        { id: "WATE701-00212", set: 19, question: 52 },
                        { id: "WATE701-00264", set: 23, question: 56 }
                    ]
                },
                {
                    id: "grade-lines-and-machine-head",
                    title: "HGL, TEL and machine-head jumps",
                    html: "<p><strong>HGL = z + p/(ρg)</strong>; <strong>TEL = EGL = HGL + αV<sup>2</sup>/(2g)</strong>. Pressure head p/(ρg) is HGL's signed height above the pipe axis. Line separation is corrected velocity head, reducing to the bank's V<sup>2</sup>/(2g) when α = 1. TEL cannot lie below HGL; at rest they coincide.</p>" +
                        "<p>Total head falls through losses, rises through a pump and falls through a turbine. HGL need not fall monotonically: deceleration can recover pressure. Across a machine its jump equals the total-head jump only if velocity-head terms are unchanged. HGL below the pipe axis means negative gauge pressure; check absolute pressure against vapour pressure, not against zero gauge alone.</p>",
                    sources: [
                        { id: "WATE701-00096", set: 9, question: 58 },
                        { id: "WATE701-00101", set: 10, question: 52 },
                        { id: "WATE701-00214", set: 19, question: 54 }
                    ]
                },
                {
                    id: "series-parallel-and-network-balance",
                    title: "Series, parallel branches and loop closure",
                    html: "<p><strong>Series:</strong> steady incompressible flow without intermediate withdrawals has equal discharge; individual losses add, but speeds and friction factors can differ. <strong>Parallel:</strong> branches between common junctions share head difference; branch discharges add.</p>" +
                        "<p><strong>Bank derivation:</strong> identical parallel pipes each carry Q/2. Holding diameter and f<sub>D</sub> fixed, loss scales as LQ<sup>2</sup>, so one pipe carrying Q needs <strong>L<sub>eq</sub> = L/4</strong>. For laminar flow with the factor recalculated, linear resistance instead gives L/2.</p>" +
                        "<p><em>Network extension:</em> enforce zero signed mass imbalance at every junction and zero signed net head change around every loop, including pumps/turbines. Solve compatible branch flows and update velocity-dependent friction factors; a pressure-only balance misses differing elevations.</p>",
                    sources: [
                        { id: "WATE701-00036", set: 4, question: 59 },
                        { id: "WATE701-00211", set: 19, question: 51 },
                        { id: "WATE813-00026", set: 4, question: 96 }
                    ]
                },
                {
                    id: "water-hammer-pressure-increment",
                    title: "Water hammer and the fast-closure limit",
                    html: "<p><em>Syllabus extension; no assigned transient calculation:</em> rapid velocity change launches pressure waves. For fast closure in a simple reservoir-pipe-valve system, <strong>Δp = ρaΔV</strong> and <strong>ΔH = aΔV/g</strong>. These are increments, not final pressure or original velocity head. Here a is wave speed and ΔV the velocity reduction. Fast closure means closure time T<sub>c</sub> ≤ <strong>2L/a</strong>, the wave round-trip time.</p>" +
                        "<p>Wave speed depends on fluid compressibility, pipe elasticity, wall thickness and restraint. Slower closure requires its time history and boundary conditions. <em>Illustration:</em> ρ = 1000 kg/m<sup>3</sup>, a = 1000 m/s, L = 500 m and ΔV = 1 m/s give a 1 s round trip, <strong>Δp = 1 MPa</strong> and ΔH ≈ 101.9 m for sufficiently fast closure.</p>",
                    sources: []
                },
                {
                    id: "surge-control-and-relief-limits",
                    title: "Relief devices are system-specific",
                    html: "<p><em>Syllabus extension:</em> controlled valve motion, suitable pump controls, surge tanks, air vessels and relief valves can moderate transients. Their effectiveness depends on placement, sizing, response and operating conditions. Reflected waves can also lower pressure and cause column separation. A surge tank or relief valve is not a universal cure: evaluate both maximum and minimum transient pressures against actual pipe and system limits.</p>",
                    sources: []
                }
            ],
            gaps: [
                "The 21 assigned items contain no water-hammer, relief-device sizing or worked loop-network problem. Those sections are explicitly syllabus extensions.",
                "No economic-cost dataset, pipe pressure rating or measured friction/calibration data are supplied; the notes establish no design acceptance standard."
            ],
            cautions: [
                {
                    html: "<p><strong>Wrong shear key:</strong> the structural-bank item keys parabolic shear, contradicting its own explanation. Shear is linear; velocity is parabolic. The centre/mean ratio 2 requires fully developed laminar circular flow, not merely 'viscous' flow.</p>",
                    sources: [
                        { id: "STRU935-00082", set: 9, question: 18 },
                        { id: "WATE701-00049", set: 6, question: 47 }
                    ]
                },
                {
                    html: "<p><strong>Friction qualifications:</strong> quadratic turbulent loss and L/4 equivalence hold with fixed Darcy factor. Roughness-only dependence means fully rough, not all turbulent flow.</p>",
                    sources: [
                        { id: "WATE701-00036", set: 4, question: 59 },
                        { id: "WATE701-00043", set: 5, question: 54 },
                        { id: "WATE701-00045", set: 5, question: 56 }
                    ]
                },
                {
                    html: "<p><strong>Loss shortcuts:</strong> entrance loss is half exit loss only for the stated sharp-edged entrance/large-reservoir model. Length alone does not justify ignoring both losses.</p>",
                    sources: [
                        { id: "WATE701-00047", set: 5, question: 58 },
                        { id: "WATE701-00106", set: 10, question: 57 },
                        { id: "WATE701-00264", set: 23, question: 56 }
                    ]
                },
                {
                    html: "<p><strong>Missing design conditions:</strong> the economic diameter uses an unstated empirical rule, not sufficient cost data. The 7.5 m hydraulic diameter assumes a fully wetted closed duct.</p>",
                    sources: [
                        { id: "HYDR626-00052", set: 7, question: 65 },
                        { id: "WATE701-00229", set: 20, question: 59 }
                    ]
                }
            ]
        }
    });
})();