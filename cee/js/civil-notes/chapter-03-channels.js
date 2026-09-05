(function () {
    "use strict";

    Object.assign(window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {}, {
        ACiE0305: {
            code: "ACiE0305",
            questionCount: 141,
            blocks: [
                {
                    id: "free-surface-and-flow-descriptions",
                    title: "Free surfaces and independent flow classifications",
                    html: "<p>Open-channel flow has a <strong>free surface</strong>, normally at atmospheric pressure. A covered conduit running partly full can qualify; a full pressure pipe does not. Depth and wetted area can change even when the constructed channel remains unchanged.</p>" +
                        "<p>Steady/unsteady describes change with time at a station; uniform/nonuniform describes change along the channel. Gradually varied flow has small spatial depth changes, whereas a hydraulic jump is rapidly varied. Conventional GVF calculations assume steady flow, but a flood wave can be <strong>unsteady and gradually varied</strong>.</p>" +
                        "<p>Velocity is a cross-sectional distribution, not one value everywhere. Boundary friction and secondary circulation can place its maximum below the surface. This velocity dip is not universal, nor explained solely by air drag.</p>",
                    sources: [
                        { id: "WATE701-00070", set: 7, question: 57 },
                        { id: "WATE701-00204", set: 18, question: 58 },
                        { id: "WATE701-00205", set: 18, question: 59 },
                        { id: "WATE701-00208", set: 19, question: 48 },
                        { id: "WATE701-00215", set: 19, question: 55 },
                        { id: "WATE701-00243", set: 22, question: 50 }
                    ]
                },
                {
                    id: "hydraulic-radius-depth-and-regimes",
                    title: "Hydraulic radius, hydraulic depth, Reynolds and Froude numbers",
                    html: "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Definition and purpose</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Hydraulic radius</th><td>R = A/P; resistance uses wetted perimeter P.</td></tr>" +
                        "<tr><th scope='row'>Hydraulic depth</th><td>D<sub>hyd</sub> = A/T; surface-wave motion uses top width T.</td></tr>" +
                        "<tr><th scope='row'>Froude number</th><td>Fr = V/√(gA/T): subcritical &lt; 1, critical = 1, supercritical &gt; 1.</td></tr></tbody></table>" +
                        "<p>For rectangles D<sub>hyd</sub> = y exactly; for symmetric triangles it is y/2, regardless of side slope. Tranquil and torrential mean subcritical and supercritical, not laminar and turbulent. At fixed discharge, deeper subcritical flow has lower velocity than critical flow.</p>" +
                        "<p>Re<sub>R</sub> = VR/ν compares inertia with viscosity. A common R-based convention uses laminar below about 500 and turbulent above about 2000. Using hydraulic <em>diameter</em> 4R instead multiplies Re and these limits by four: 2000 and 8000. State the convention; do not import pipe thresholds unchanged.</p>",
                    sources: [
                        { id: "WATE701-00054", set: 6, question: 52 },
                        { id: "WATE701-00057", set: 6, question: 55 },
                        { id: "WATE701-00068", set: 7, question: 55 },
                        { id: "WATE701-00153", set: 14, question: 54 },
                        { id: "WATE701-00225", set: 1, question: 54 },
                        { id: "WATE701-00227", set: 20, question: 57 }
                    ]
                },
                {
                    id: "rectangle-and-trapezoid-geometry",
                    title: "Build channel geometry before using a flow formula",
                    html: "<p>Use bottom width b, vertical depth y and side slope z = horizontal/vertical. Thus <strong>1H:2V means z = 0.5</strong>, not 2. A triangle has b = 0.</p>" +
                        "<table><thead><tr><th scope='col'>Measure</th><th scope='col'>Rectangle</th><th scope='col'>Symmetric trapezoid</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Area A</th><td>by</td><td>(b + zy)y</td></tr>" +
                        "<tr><th scope='row'>Top width T</th><td>b</td><td>b + 2zy</td></tr>" +
                        "<tr><th scope='row'>Wetted perimeter P</th><td>b + 2y</td><td>b + 2y√(1 + z<sup>2</sup>)</td></tr></tbody></table>" +
                        "<p><strong>Bank values:</strong> b = 5, y = 4, z = 0.5 gives A = 28, T = 9 and D<sub>hyd</sub> = 3.11 m. With b = 6, y = 5, z = 1/3, R = 38.333/16.541 = 2.32 m. With b = 6, y = 3, z = 0.5 and V = 2 m/s, Q = AV = 45 m<sup>3</sup>/s.</p>" +
                        "<p>Both side-lining areas total 2Ly√(1 + z<sup>2</sup>); bed lining adds bL. Neither is the flowing cross-sectional area.</p>",
                    sources: [
                        { id: "IRRI951-00033", set: 4, question: 78 },
                        { id: "IRRI951-00034", set: 4, question: 79 },
                        { id: "WATE701-00109", set: 11, question: 47 },
                        { id: "WATE701-00154", set: 14, question: 55 },
                        { id: "WATE701-00155", set: 14, question: 56 },
                        { id: "WATE701-00157", set: 14, question: 58 },
                        { id: "WATE701-00236", set: 21, question: 52 }
                    ]
                },
                {
                    id: "geometry-reconstruction-and-checks",
                    title: "Inverse geometry and numerical cross-checks",
                    html: "<p>Recover missing dimensions from independent equations before calculating R. For rectangles, y = D<sub>hyd</sub>, b = A/y and P = b + 2y. Thus A = 12 m<sup>2</sup>, D<sub>hyd</sub> = 2 m gives R = 1.2 m, not 1.5 m.</p>" +
                        "<table><thead><tr><th scope='col'>Bank trapezoid data in SI</th><th scope='col'>Reconstruction</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>A = 17.25, b = 5, z = 0.25</th><td>5y + 0.25y<sup>2</sup> = 17.25; y = 3, T = 6.5.</td></tr>" +
                        "<tr><th scope='row'>zy = 2, z = 0.5, A = 32</th><td>y = 4, b = 6; P = 14.944.</td></tr>" +
                        "<tr><th scope='row'>T = 12, b = 6, z = 0.5</th><td>y = (T − b)/(2z) = 6; P = 19.416.</td></tr>" +
                        "<tr><th scope='row'>b = 8, y = 4, R ≈ 2.36</th><td>z = 0.5 satisfies the rounded R among the offered H:V ratios.</td></tr></tbody></table>" +
                        "<p>Rectangle checks: A = 5.2 × 3 = 15.6 m<sup>2</sup>; P = 4.5 + 6 = 10.5 m; R = 20/13 = 1.54 m. Unspecified ratios remain unknown, not implied constants.</p>",
                    sources: [
                        { id: "WATE701-00158", set: 14, question: 59 },
                        { id: "WATE701-00159", set: 15, question: 47 },
                        { id: "WATE701-00160", set: 15, question: 48 },
                        { id: "WATE701-00161", set: 15, question: 49 },
                        { id: "WATE701-00228", set: 20, question: 58 },
                        { id: "WATE701-00230", set: 20, question: 60 },
                        { id: "WATE701-00232", set: 21, question: 48 },
                        { id: "WATE701-00234", set: 21, question: 50 },
                        { id: "WATE701-00235", set: 21, question: 51 },
                        { id: "WATE701-00237", set: 21, question: 53 },
                        { id: "WATE701-00239", set: 21, question: 55 }
                    ]
                },
                {
                    id: "critical-section-factor",
                    title: "Critical-flow section factor is not Manning conveyance",
                    html: "<p>The critical-flow section factor is <strong>Z = A√D<sub>hyd</sub> = √(A<sup>3</sup>/T)</strong>, with units m<sup>5/2</sup>. Manning's geometric factor AR<sup>2/3</sup> instead has units m<sup>8/3</sup>; conveyance also includes 1/n. State which factor is intended.</p>" +
                        "<table><thead><tr><th scope='col'>Bank data in SI</th><th scope='col'>Result</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Trapezoid b = 5, y = 8, z = 0.5</th><td>A = 72, T = 13; Z = 169.44.</td></tr>" +
                        "<tr><th scope='row'>A = 15, T = 6</th><td>Z = 15√(15/6) = 23.72.</td></tr>" +
                        "<tr><th scope='row'>Z/D<sub>hyd</sub> = 324/25, A = 24</th><td>T = (Z/D<sub>hyd</sub>)<sup>2</sup>/A ≈ 7 m.</td></tr>" +
                        "<tr><th scope='row'>Q = 250, V = 5, Z = 111.80</th><td>A = 50; D<sub>hyd</sub> = (Z/A)<sup>2</sup> ≈ 5 m.</td></tr></tbody></table>" +
                        "<p>An economical rectangle at y = 4 has A = 32 and Z = 64. Separately, Z = 40 and D<sub>hyd</sub> = 4 imply A = 20 and T = 5 m.</p>",
                    sources: [
                        { id: "WATE701-00156", set: 14, question: 57 },
                        { id: "WATE701-00162", set: 15, question: 50 },
                        { id: "WATE701-00163", set: 15, question: 51 },
                        { id: "WATE701-00172", set: 16, question: 51 },
                        { id: "WATE701-00221", set: 20, question: 52 },
                        { id: "WATE701-00231", set: 21, question: 47 },
                        { id: "WATE701-00238", set: 21, question: 54 }
                    ]
                },
                {
                    id: "uniform-depth-and-grade-lines",
                    title: "Normal depth, energy datum and parallel grade lines",
                    html: "<p>Normal depth y<sub>n</sub> is the uniform-flow depth for specified discharge, geometry, roughness and positive bed slope. In steady prismatic uniform flow, A, y and V remain constant; bed elevation does not.</p>" +
                        "<p>With x positive downstream, define S<sub>0</sub> = −dz<sub>b</sub>/dx and friction slope S<sub>f</sub> = −dH/dx. Under hydrostatic, small-slope conditions, <strong>H = z<sub>b</sub> + y + αV<sup>2</sup>/(2g)</strong>. HGL is the free surface z<sub>b</sub> + y; EGL lies one velocity head above it. Both are parallel to the bed in uniform flow, with S<sub>f</sub> = S<sub>0</sub>.</p>" +
                        "<p>Specific energy omits bed elevation, unlike total head above a fixed datum. Worked calculations here use SI, g = 9.81 m/s<sup>2</sup> and α = β = 1 unless stated otherwise.</p>",
                    sources: [
                        { id: "WATE701-00176", set: 16, question: 55 },
                        { id: "WATE701-00177", set: 16, question: 56 },
                        { id: "WATE701-00178", set: 16, question: 57 },
                        { id: "WATE701-00206", set: 18, question: 60 },
                        { id: "WATE701-00207", set: 19, question: 47 }
                    ]
                },
                {
                    id: "manning-and-chezy-laws",
                    title: "Resistance laws, dimensions and scaling",
                    html: "<table><thead><tr><th scope='col'>SI law</th><th scope='col'>Coefficient</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Manning</th><td>V = R<sup>2/3</sup>√S<sub>f</sub>/n; Q = AV. n has SI units s/m<sup>1/3</sup>.</td></tr>" +
                        "<tr><th scope='row'>Chezy</th><td>V = C√(RS<sub>f</sub>); C has units m<sup>1/2</sup>/s.</td></tr></tbody></table>" +
                        "<p>Slope is dimensionless. Equating the laws gives C = R<sup>1/6</sup>/n, not a depth-independent conversion. Use S<sub>0</sub> only when uniform-flow assumptions justify it.</p>" +
                        "<p>At fixed Q and section, doubling n requires four times the friction slope. For a <strong>wide rectangle with unchanged b, n and slope</strong>, R ≈ y and Q ∝ y<sup>5/3</sup>. The bank's 20% normal-depth increase gives Q<sub>2</sub>/Q<sub>1</sub> = 1.2<sup>5/3</sup> = 1.35509: <strong>35.51%</strong> more discharge, approximately the offered 36%.</p>",
                    sources: [
                        { id: "IRRI951-00046", set: 6, question: 69 },
                        { id: "WATE701-00053", set: 6, question: 51 },
                        { id: "WATE701-00107", set: 10, question: 58 },
                        { id: "WATE701-00195", set: 18, question: 49 },
                        { id: "WATE701-00222", set: 20, question: 53 },
                        { id: "WATE813-00218", set: 22, question: 97 }
                    ]
                },
                {
                    id: "resistance-from-measured-flow",
                    title: "Solve resistance only with enough measured information",
                    html: "<p>Rearrange Manning as S<sub>f</sub> = [Qn/(AR<sup>2/3</sup>)]<sup>2</sup> or n = AR<sup>2/3</sup>√S<sub>f</sub>/Q. With the bank's A = P = 8 numerically, R = 1 m, Q = 33.33 m<sup>3</sup>/s and n = 0.012, √S<sub>f</sub> ≈ 0.05, so S<sub>f</sub> ≈ 0.0025 = 1/400.</p>" +
                        "<p>For uniform rectangular flow b = 4, y = 3, E = 3.13 and C = 50, V<sup>2</sup> = 2g(E − y) = 2.5506 and R = 1.2; hence S<sub>0</sub> = V<sup>2</sup>/(C<sup>2</sup>R) = 1/1176.19, approximately the offered 1/1200.</p>" +
                        "<p>The b = 4, y = 2, C = 35, S<sub>0</sub> = 1/1200 example similarly gives E = 2.052 m. An energy reading alone does not establish roughness or the energy gradient.</p>",
                    sources: [
                        { id: "WATE701-00056", set: 6, question: 54 },
                        { id: "WATE701-00062", set: 7, question: 49 },
                        { id: "WATE701-00108", set: 10, question: 59 },
                        { id: "WATE701-00111", set: 11, question: 49 },
                        { id: "WATE701-00180", set: 16, question: 59 },
                        { id: "WATE701-00188", set: 17, question: 51 },
                        { id: "WATE701-00189", set: 17, question: 52 },
                        { id: "WATE701-00193", set: 17, question: 56 }
                    ]
                },
                {
                    id: "economical-rectangle",
                    title: "Hydraulic efficiency and the economical rectangle",
                    html: "<p>For fixed area, roughness and slope, reducing P increases R and conveyance. For rectangles P = A/y + 2y; minimization gives <strong>b = 2y, A = 2y<sup>2</sup>, P = 4y and R = y/2</strong>. Hydraulic economy is not automatically minimum construction cost.</p>" +
                        "<table><thead><tr><th scope='col'>Bank data with economical geometry</th><th scope='col'>Calculation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>b = 8 m</th><td>y = 4 m; R = 2 m.</td></tr>" +
                        "<tr><th scope='row'>b = 5, n = 0.020, S = 1/500</th><td>y = 2.5, A = 12.5, R = 1.25; Q = 32.434 m<sup>3</sup>/s.</td></tr>" +
                        "<tr><th scope='row'>Q = 7.15, C = 40, S = 1/2000</th><td>Q = 2Cy<sup>2</sup>√(yS/2); y ≈ 2 m.</td></tr>" +
                        "<tr><th scope='row'>Q/T = 91/50, C = 50, S = 1/3000</th><td>Q/T = Cy√(yS/2); y ≈ 2 m.</td></tr>" +
                        "<tr><th scope='row'>R = 4, n = 0.015, S = 1/1000</th><td>y = 8, b = 16, A = 128; Q ≈ 679.97 m<sup>3</sup>/s.</td></tr></tbody></table>",
                    sources: [
                        { id: "WATE701-00164", set: 15, question: 52 },
                        { id: "WATE701-00165", set: 15, question: 53 },
                        { id: "WATE701-00166", set: 15, question: 54 },
                        { id: "WATE701-00167", set: 15, question: 55 },
                        { id: "WATE701-00168", set: 15, question: 56 },
                        { id: "WATE701-00169", set: 15, question: 57 },
                        { id: "WATE701-00170", set: 16, question: 49 },
                        { id: "WATE701-00171", set: 16, question: 50 },
                        { id: "WATE701-00173", set: 16, question: 52 },
                        { id: "WATE701-00174", set: 16, question: 53 },
                        { id: "WATE701-00216", set: 19, question: 56 },
                        { id: "WATE701-00233", set: 21, question: 49 }
                    ]
                },
                {
                    id: "economical-trapezoid-and-triangle",
                    title: "Optimum trapezoids, triangles and the limits of shortcuts",
                    html: "<p>Minimizing perimeter at fixed area and prescribed z gives b = 2y[√(1 + z<sup>2</sup>) − z]. Consequently <strong>T/2 equals the sloping-side length</strong> y√(1 + z<sup>2</sup>), and R = y/2. At y = 3 m, R = 1.5 m. T is not generally 2y.</p>" +
                        "<p>If z is also free to optimize, z = 1/√3: sides incline 60° to horizontal and the section is half a regular hexagon, with sloping side equal to bottom width. This extra condition does not apply to every fixed-z optimum.</p>" +
                        "<p>The best symmetric <strong>triangle</strong> at fixed area has z = 1, sides at 45°, and R = y/(2√2), not y/2. With unrestricted curved boundaries, a semicircle minimizes wetted perimeter; practical bank stability may prohibit these mathematical optima.</p>",
                    sources: [
                        { id: "WATE701-00065", set: 7, question: 52 },
                        { id: "WATE701-00071", set: 7, question: 58 },
                        { id: "WATE701-00194", set: 17, question: 57 },
                        { id: "WATE701-00198", set: 18, question: 52 },
                        { id: "WATE701-00218", set: 20, question: 49 },
                        { id: "WATE701-00220", set: 20, question: 51 },
                        { id: "WATE701-00223", set: 20, question: 54 },
                        { id: "WATE701-00242", set: 22, question: 49 }
                    ]
                },
                {
                    id: "part-full-circular-sections",
                    title: "Circular-channel optima depend on the resistance law",
                    html: "<p>Let d<sub>c</sub> be diameter and ψ half the wetted central angle in radians. Then A = d<sub>c</sub><sup>2</sup>(ψ − sinψ cosψ)/4, P = d<sub>c</sub>ψ, and y = d<sub>c</sub>(1 − cosψ)/2. Increasing depth near the crown adds perimeter rapidly, so maximum discharge need not occur at full depth.</p>" +
                        "<table><thead><tr><th scope='col'>Fixed slope and coefficient</th><th scope='col'>y/d<sub>c</sub></th><th scope='col'>R/d<sub>c</sub></th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Maximum velocity</th><td>0.8128</td><td>0.3043</td></tr>" +
                        "<tr><th scope='row'>Maximum Q, constant Chezy C</th><td>0.9497</td><td>0.2865</td></tr>" +
                        "<tr><th scope='row'>Illustrative comparison: constant Manning n</th><td>0.9382</td><td>0.2900</td></tr></tbody></table>" +
                        "<p>The bank's 0.95-depth rule corresponds approximately to constant C. Its 0.286 and 0.304 ratios describe <strong>R, not A/T</strong>. At the velocity optimum P ≈ 2.247d<sub>c</sub>; at the Chezy discharge optimum P ≈ 2.689d<sub>c</sub>.</p>",
                    sources: [
                        { id: "WATE701-00196", set: 18, question: 50 },
                        { id: "WATE701-00197", set: 18, question: 51 },
                        { id: "WATE701-00217", set: 19, question: 57 }
                    ]
                },
                {
                    id: "specific-energy-and-alternate-depths",
                    title: "Specific energy and its two depth branches",
                    html: "<p><strong>E = y + αQ<sup>2</sup>/(2gA<sup>2</sup>)</strong> measures energy per unit weight above the local bed. The kinetic-energy correction α accounts for nonuniform velocity; setting it to one is an approximation. Head has units of length, not force.</p>" +
                        "<p>At fixed discharge and section geometry, E above its minimum permits two <strong>alternate depths</strong>: shallow supercritical and deep subcritical. Lowering depth on the supercritical branch raises E because velocity head grows rapidly; raising depth on the subcritical branch also raises E. These are not hydraulic-jump sequent depths.</p>" +
                        "<p><strong>Bank checks:</strong> y = 3 m, V = 1.5 m/s gives E = 3.115 m. E = 1.01 m, V = 0.5 m/s gives y = 0.997 m. E − y = 1.24 − 1.20 gives V = 0.886 m/s. Q = 10, b = 5, y = 2 gives V = 1 and E = 2.051 m.</p>",
                    sources: [
                        { id: "WATE701-00055", set: 6, question: 53 },
                        { id: "WATE701-00175", set: 16, question: 54 },
                        { id: "WATE701-00179", set: 16, question: 58 },
                        { id: "WATE701-00187", set: 17, question: 50 },
                        { id: "WATE701-00190", set: 17, question: 53 },
                        { id: "WATE701-00200", set: 18, question: 54 },
                        { id: "WATE701-00224", set: 20, question: 55 },
                        { id: "WATE701-00226", set: 20, question: 56 },
                        { id: "WATE701-00240", set: 21, question: 56 },
                        { id: "WATE701-00250", set: 22, question: 57 },
                        { id: "WATE701-00260", set: 23, question: 52 }
                    ]
                },
                {
                    id: "critical-depth-and-discharge",
                    title: "Critical flow: minimum energy or maximum discharge",
                    html: "<p>Since dA/dy = T, differentiation at fixed Q and α = 1 gives dE/dy = 1 − Q<sup>2</sup>T/(gA<sup>3</sup>). Critical flow therefore satisfies <strong>Q<sup>2</sup>T/(gA<sup>3</sup>) = 1</strong>. It minimizes E for fixed Q, or maximizes Q for fixed E. It does not maximize discharge without a stated constraint.</p>" +
                        "<p>For rectangles, q = Q/b, y<sub>c</sub> = (q<sup>2</sup>/g)<sup>1/3</sup> and E<sub>c</sub> = 1.5y<sub>c</sub>. Generally E<sub>c</sub> = y<sub>c</sub> + A<sub>c</sub>/(2T<sub>c</sub>), not always 1.5y<sub>c</sub>. A constant nonunit α multiplies the Q<sup>2</sup> term in the critical condition.</p>" +
                        "<p><strong>Bank calculations:</strong> Q = 15, b = 3 gives q = 5 and y<sub>c</sub> = 1.366 m; y<sub>c</sub> = 1.5 gives E<sub>c</sub> = 2.25 m. Q = 10, b = 4 gives E<sub>c</sub> = 1.291 m. Conversely E<sub>c</sub> = 1.3, b = 10 gives Q = 25.27 m<sup>3</sup>/s.</p>",
                    sources: [
                        { id: "WATE701-00181", set: 16, question: 60 },
                        { id: "WATE701-00182", set: 17, question: 47 },
                        { id: "WATE701-00183", set: 1, question: 52 },
                        { id: "WATE701-00184", set: 17, question: 48 },
                        { id: "WATE701-00185", set: 17, question: 49 },
                        { id: "WATE701-00186", set: 1, question: 53 },
                        { id: "WATE701-00202", set: 18, question: 56 },
                        { id: "WATE701-00219", set: 20, question: 50 }
                    ]
                },
                {
                    id: "transitions-and-choking",
                    title: "Humps, contractions and conditional choking",
                    html: "<p>Across a short transition, energy gives E<sub>2</sub> = E<sub>1</sub> − Δz<sub>b</sub> − h<sub>L</sub>. A raised bed consumes available specific energy. An unchoked subcritical stream becomes shallower <em>relative to the crest</em>; supercritical flow instead deepens toward critical.</p>" +
                        "<p>The original approach state remains possible only if crest energy is at least E<sub>c</sub> for its discharge and section. Equality marks critical control; insufficient energy causes <strong>choking</strong>. With fixed Q and a subcritical approach, upstream afflux supplies the extra head. If Q can change, discharge may adjust instead.</p>" +
                        "<p>A contraction raises discharge per width and the required critical energy. Neither every hump nor every narrowing automatically raises upstream water: compare available and required energy, include losses and identify the controlling boundary. This is an extension of the bank's energy principles.</p>",
                    sources: [
                        { id: "WATE701-00055", set: 6, question: 53 },
                        { id: "WATE701-00181", set: 16, question: 60 },
                        { id: "WATE701-00219", set: 20, question: 50 },
                        { id: "WATE701-00251", set: 22, question: 58 }
                    ]
                },
                {
                    id: "specific-force-and-momentum",
                    title: "Specific force and momentum correction",
                    html: "<p>Momentum flux is <strong>βρQV</strong>, where β = ∫u<sup>2</sup>dA/(AV<sup>2</sup>). Energy uses α = ∫u<sup>3</sup>dA/(AV<sup>3</sup>); these correction factors are not interchangeable.</p>" +
                        "<p>With hydrostatic end pressures, the specific-force function is M = A h̄ + βQ<sup>2</sup>/(gA), where h̄ is the area-centroid depth below the surface. For a rectangle <strong>per unit width</strong>, M = y<sup>2</sup>/2 + q<sup>2</sup>/(gy) when β = 1. Its units are m<sup>2</sup>; the full-section function has units m<sup>3</sup>.</p>" +
                        "<p>Horizontal-channel momentum balance, neglecting external drag over the short reach, equates the two M values. The resulting depths are <strong>conjugate or sequent</strong>. Equal specific force does not imply equal energy; pressure force balances the change in momentum flux.</p>",
                    sources: [
                        { id: "WATE701-00050", set: 6, question: 48 },
                        { id: "WATE701-00199", set: 18, question: 53 },
                        { id: "WATE701-00260", set: 23, question: 52 }
                    ]
                },
                {
                    id: "hydraulic-jump-and-sequent-depth",
                    title: "Hydraulic jumps and downstream-depth compatibility",
                    html: "<p>A jump converts supercritical approach flow to deeper subcritical flow over a short turbulent reach. A stationary jump is steady only in the time-averaged sense. Take sections outside the roller, where hydrostatic pressure is reasonable.</p>" +
                        "<p>For a horizontal rectangular channel, negligible external drag and β = 1, momentum gives <strong>r = y<sub>2</sub>/y<sub>1</sub> = [√(1 + 8Fr<sub>1</sub><sup>2</sup>) − 1]/2</strong>. The bank's r = 16.48 gives Fr<sub>1</sub> = √[r(r + 1)/2] ≈ 12.00.</p>" +
                        "<p>Adequate tailwater must support the conjugate depth at the jump location. Low tailwater can sweep the jump downstream; high tailwater can submerge it. Spillway toes, gate outlets and steep-to-mild transitions are possible locations, not guarantees. The usual sluice approach is subcritical, so its jump forms downstream, not upstream.</p>",
                    sources: [
                        { id: "WATE701-00050", set: 6, question: 48 },
                        { id: "WATE701-00052", set: 6, question: 50 },
                        { id: "WATE701-00201", set: 18, question: 55 },
                        { id: "WATE701-00253", set: 22, question: 60 },
                        { id: "WATE701-00255", set: 23, question: 48 },
                        { id: "WATE701-00256", set: 1, question: 55 },
                        { id: "WATE701-00257", set: 23, question: 49 }
                    ]
                },
                {
                    id: "jump-loss-types-and-length",
                    title: "Jump energy loss, conventional types and empirical length",
                    html: "<p><strong>Mechanical energy is not conserved across a jump.</strong> Under the preceding rectangular assumptions and α = 1, ΔE = (y<sub>2</sub> − y<sub>1</sub>)<sup>3</sup>/(4y<sub>1</sub>y<sub>2</sub>). The bank's depths 1 and 5 m give 3.2 m head loss; 0.25 and 1.25 m give 0.8 m. Turbulence dissipates the lost head.</p>" +
                        "<table><thead><tr><th scope='col'>Approach Fr<sub>1</sub>, approximate bands</th><th scope='col'>Jump type</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>1–1.7</th><td>Undular; small surface waves.</td></tr>" +
                        "<tr><th scope='row'>1.7–2.5</th><td>Weak; small roller.</td></tr>" +
                        "<tr><th scope='row'>2.5–4.5</th><td>Oscillating; unstable jet and waves.</td></tr>" +
                        "<tr><th scope='row'>4.5–9</th><td>Steady/well-developed.</td></tr>" +
                        "<tr><th scope='row'>Above 9</th><td>Strong; intense turbulence.</td></tr></tbody></table>" +
                        "<p>Endpoints are classification conventions, not sharp physical switches. Jump height is y<sub>2</sub> − y<sub>1</sub>. Length is empirical: the bank quotes roughly 5–7, elsewhere 5.7–7, times that height. These are not universal stilling-basin dimensions.</p>",
                    sources: [
                        { id: "WATE701-00051", set: 6, question: 49 },
                        { id: "WATE701-00058", set: 6, question: 56 },
                        { id: "WATE701-00061", set: 7, question: 48 },
                        { id: "WATE701-00063", set: 7, question: 50 },
                        { id: "WATE701-00064", set: 7, question: 51 },
                        { id: "WATE701-00110", set: 11, question: 48 },
                        { id: "WATE701-00254", set: 23, question: 47 },
                        { id: "WATE701-00258", set: 23, question: 50 }
                    ]
                },
                {
                    id: "gvf-equation-and-assumptions",
                    title: "The gradually varied flow equation and its limits",
                    html: "<p>For steady, incompressible flow with constant Q in a prismatic, gently sloping channel, hydrostatic pressure and α = 1 give <strong>dy/dx = (S<sub>0</sub> − S<sub>f</sub>)/(1 − Fr<sup>2</sup>)</strong>. The equation follows from H = z<sub>b</sub> + E and dH/dx = −S<sub>f</sub>.</p>" +
                        "<p>Compute S<sub>f</sub> at the <em>actual</em> depth using the resistance law; do not set it equal to S<sub>0</sub> throughout a backwater curve. Their equality identifies normal flow. For ordinary sections, deeper-than-normal flow has S<sub>f</sub> &lt; S<sub>0</sub>.</p>" +
                        "<p>Use the numerator and denominator signs together. Near Fr = 1, the equation becomes singular or indeterminate; local control and rapidly varied physics must resolve the transition. It cannot describe a jump roller or an unsteady flood wave.</p>",
                    sources: [
                        { id: "WATE701-00070", set: 7, question: 57 },
                        { id: "WATE701-00206", set: 18, question: 60 },
                        { id: "WATE701-00215", set: 19, question: 55 },
                        { id: "WATE701-00243", set: 22, question: 50 },
                        { id: "WATE701-00251", set: 22, question: 58 }
                    ]
                },
                {
                    id: "slope-classes-and-profile-zones",
                    title: "Mild, steep, critical, horizontal and adverse profiles",
                    html: "<p>Critical slope S<sub>c</sub> makes y<sub>n</sub> = y<sub>c</sub> for the specified Q, roughness and section. A slope's numerical gradient alone cannot establish its hydraulic class.</p>" +
                        "<table><thead><tr><th scope='col'>Class</th><th scope='col'>Depth ordering</th><th scope='col'>Possible GVF profiles</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Mild: 0 &lt; S<sub>0</sub> &lt; S<sub>c</sub></th><td>y<sub>n</sub> &gt; y<sub>c</sub></td><td>M1, M2, M3</td></tr>" +
                        "<tr><th scope='row'>Steep: S<sub>0</sub> &gt; S<sub>c</sub></th><td>y<sub>n</sub> &lt; y<sub>c</sub></td><td>S1, S2, S3</td></tr>" +
                        "<tr><th scope='row'>Critical: S<sub>0</sub> = S<sub>c</sub></th><td>y<sub>n</sub> = y<sub>c</sub></td><td>C1, C3; no intervening C2 zone.</td></tr>" +
                        "<tr><th scope='row'>Horizontal: S<sub>0</sub> = 0</th><td>No finite normal depth for nonzero resisted flow.</td><td>H2, H3</td></tr>" +
                        "<tr><th scope='row'>Adverse: S<sub>0</sub> &lt; 0</th><td>No physical normal depth.</td><td>A2, A3</td></tr></tbody></table>" +
                        "<p>For M/S slopes, zone 1 lies above both reference depths, zone 2 between them, and zone 3 below both. C1/C3 lie above/below the coincident reference. H2/A2 are above y<sub>c</sub>; H3/A3 below. Boundary conditions decide which permitted profile actually occurs.</p>" +
                        "<p>For ordinary sections, depth rises downstream on zones 1 and 3; M2, S2, H2 and A2 are drawdown profiles.</p>",
                    sources: [
                        { id: "WATE701-00203", set: 18, question: 57 },
                        { id: "WATE701-00241", set: 21, question: 57 },
                        { id: "WATE701-00244", set: 22, question: 51 },
                        { id: "WATE701-00245", set: 22, question: 52 },
                        { id: "WATE701-00246", set: 22, question: 53 },
                        { id: "WATE701-00247", set: 22, question: 54 },
                        { id: "WATE701-00248", set: 22, question: 55 },
                        { id: "WATE701-00249", set: 22, question: 56 },
                        { id: "WATE701-00252", set: 22, question: 59 }
                    ]
                },
                {
                    id: "controls-backwater-and-drawdown",
                    title: "Control direction, backwater and drawdown",
                    html: "<p>In subcritical flow, surface disturbances can travel upstream: a downstream depth supplies the boundary for upstream GVF calculation. In supercritical flow both wave directions are carried downstream, so the upstream boundary controls the downstream calculation.</p>" +
                        "<p>A dam on a mild reach commonly creates <strong>M1 backwater</strong>, above normal depth and approaching normal far upstream. M2 drawdown lies between normal and critical depths and falls toward a downstream control. The obstruction alone does not prove the M1 label without the slope/depth ordering.</p>" +
                        "<p>Mild beds can carry supercritical M3 flow; steep beds can carry subcritical S1 flow. Normal-flow classification is not a universal local regime. Near a crest, drop, gate or jump, match local energy/momentum and boundary conditions rather than extending one GVF curve through the control.</p>",
                    sources: [
                        { id: "WATE701-00203", set: 18, question: 57 },
                        { id: "WATE701-00209", set: 19, question: 49 },
                        { id: "WATE701-00210", set: 19, question: 50 },
                        { id: "WATE701-00251", set: 22, question: 58 }
                    ]
                },
                {
                    id: "sediment-loads-and-driving-forces",
                    title: "Bed load, suspension, wash load and sediment supply",
                    html: "<ul><li><strong>Bed load:</strong> grains roll, slide or saltate near the bed.</li><li><strong>Suspended load:</strong> turbulent mixing counteracts particle settling through the water column.</li><li><strong>Wash load:</strong> fine material poorly represented in the local bed; transport is strongly supply-controlled and commonly suspended.</li><li><strong>Dissolved load:</strong> solutes, not mechanically transported sediment grains.</li></ul>" +
                        "<p>Downstream drag promotes grain movement, while lift, submerged weight, contact friction and exposure influence entrainment. Mean velocity is a useful indicator, not a complete threshold criterion. Turbulent upward fluctuations sustain suspension; gravity drives settling.</p>" +
                        "<p>Floods often transport large sediment quantities because discharge and stresses increase. Actual load also depends on supply and previous erosion: peak sediment concentration need not coincide with peak discharge.</p>",
                    sources: [
                        { id: "HYDR626-00255", set: 28, question: 64 },
                        { id: "IRRI951-00032", set: 4, question: 77 },
                        { id: "IRRI951-00168", set: 16, question: 79 },
                        { id: "IRRI951-00169", set: 17, question: 68 },
                        { id: "IRRI951-00170", set: 17, question: 69 },
                        { id: "IRRI951-00173", set: 17, question: 72 }
                    ]
                },
                {
                    id: "boundary-shear-and-shear-velocity",
                    title: "Tractive stress, shear velocity and inception of motion",
                    html: "<p>The uniform-flow force balance gives mean boundary shear <strong>τ<sub>0</sub> = ρgRS = γRS</strong>, with S = S<sub>0</sub> = S<sub>f</sub>. Using local S<sub>f</sub> in slowly varying flow is an approximation. This is a wetted-perimeter average, not identical stress everywhere on bed and banks; for a wide rectangle, bed shear is approximately ρgyS.</p>" +
                        "<p>Shear velocity u<sub>*</sub> = √(τ<sub>0</sub>/ρ) is a stress scale, not grain velocity. Critical shear τ<sub>c</sub> denotes inception of particle motion. The <strong>particle/shear Reynolds number</strong> is Re<sub>*</sub> = u<sub>*</sub>d/ν, distinct from bulk VR/ν.</p>" +
                        "<p>With Darcy friction factor f, S<sub>f</sub> = fV<sup>2</sup>/(8gR) and τ<sub>0</sub> = fρV<sup>2</sup>/8. A single specific-energy value supplies neither S<sub>f</sub> nor f.</p>",
                    sources: [
                        { id: "IRRI951-00174", set: 17, question: 73 },
                        { id: "WATE701-00191", set: 17, question: 54 },
                        { id: "WATE701-00192", set: 17, question: 55 },
                        { id: "WATE701-00259", set: 23, question: 51 },
                        { id: "WATE701-00261", set: 23, question: 53 }
                    ]
                },
                {
                    id: "shields-criterion-and-bank-stress",
                    title: "Read the Shields curve, not a universal threshold",
                    html: "<p>The dimensionless Shields stress is <strong>θ = τ/[(ρ<sub>s</sub> − ρ)gd] = τ/[(γ<sub>s</sub> − γ<sub>w</sub>)d]</strong>. The critical curve relates θ<sub>c</sub> to particle Re<sub>*</sub>, evaluated with critical shear velocity. The ordinate is dimensionless, not dimensional tractive force.</p>" +
                        "<p>About 0.056 is a coarse, hydraulically rough approximation, not a universal threshold for every grain size. Incipient motion is θ ≈ θ<sub>c</sub>; a non-scouring check requires applied θ below the applicable threshold. Cohesion, grading and hiding can invalidate a simple uniform-grain interpretation.</p>" +
                        "<p><strong>Illustrative reconstruction of the bank's 0.206 Pa:</strong> additionally assume γ<sub>s</sub> = 22.08 and γ<sub>w</sub> = 9.81 kN/m<sup>3</sup>, and θ<sub>c</sub> = 0.056. For its d = 0.3 mm, τ<sub>c</sub> = 0.056(22080 − 9810)(0.0003) = 0.206136 Pa. Those unit weights and threshold are assumptions, not supplied measurements.</p>",
                    sources: [
                        { id: "IRRI951-00041", set: 5, question: 75 },
                        { id: "WATE701-00044", set: 5, question: 55 },
                        { id: "WATE701-00259", set: 23, question: 51 },
                        { id: "WATE701-00261", set: 23, question: 53 },
                        { id: "WATE701-00262", set: 23, question: 54 }
                    ]
                },
                {
                    id: "mobile-boundary-design-and-bedforms",
                    title: "Mobile boundaries and stable-channel design approaches",
                    html: "<p>A mobile bed changes geometry and roughness through erosion, deposition and bedforms. Sand may develop ripples and dunes after motion begins; stronger flows can produce upper-stage plane beds or antidunes. Increasing velocity does not guarantee one universal sequence.</p>" +
                        "<p><strong>Permissible-velocity</strong> approaches screen mean velocity against material-dependent limits; <strong>tractive-force</strong> approaches compare bed and bank stresses with resistance. Empirical regime relations require comparable sediment and flow conditions. Transport-capacity and sediment-continuity approaches examine whether incoming load can pass without persistent aggradation or degradation.</p>" +
                        "<p>Stable mobile equilibrium can include sediment motion; it is not synonymous with a non-scouring immobile boundary. Select geometry, slope and roughness together with sediment supply, grading, bank stability and varying flow. Hydraulic optimum alone cannot establish a stable design.</p>",
                    sources: [
                        { id: "HYDR626-00256", set: 28, question: 65 },
                        { id: "IRRI951-00041", set: 5, question: 75 },
                        { id: "IRRI951-00168", set: 16, question: 79 },
                        { id: "WATE701-00261", set: 23, question: 53 },
                        { id: "WATE701-00262", set: 23, question: 54 }
                    ]
                }
            ],
            gaps: [
                "The assigned bank supplies no complete GVF reach with discharge, roughness, bed elevations, lengths and boundary depth for an integrated profile. The differential equation and full M/S/C/H/A classification provide official-syllabus context, not a fabricated worked reach.",
                "No assigned worked Reynolds-number or hump/choking problem is present. These explanations extend the official flow-type and energy scope; added numerical reconstructions are explicitly illustrative.",
                "Mobile-boundary questions lack a complete grain-size distribution, density, viscosity, sediment supply and calibrated transport relation. They cannot establish a unique Shields reading or stable-channel design.",
                "No verified project specifications, allowable stresses, freeboard requirements or stilling-basin dimensions are supplied. These notes explain principles, not site design acceptance or compliance with a named standard."
            ],
            cautions: [
                {
                    html: "<p><strong>Misparenthesized sequent-depth key:</strong> the stored option places −1 outside the half multiplier. Correct is [√(1 + 8Fr<sub>1</sub><sup>2</sup>) − 1]/2, not 0.5√(1 + 8Fr<sub>1</sub><sup>2</sup>) − 1. The limiting check Fr<sub>1</sub> = 1 must give a depth ratio of 1. The explanation describes the correct grouping, but the keyed expression does not.</p>",
                    sources: [{ id: "WATE701-00050", set: 6, question: 48 }]
                },
                {
                    html: "<p><strong>Contradictory jump classification:</strong> Model 7 keys 1.7–4.5 as steady, although its own explanation and Model 6 identify approximately 4.5–9. The lower interval spans weak and oscillating jumps in the convention used here. Band boundaries and empirical lengths are not design acceptance rules.</p>",
                    sources: [
                        { id: "WATE701-00051", set: 6, question: 49 },
                        { id: "WATE701-00061", set: 7, question: 48 },
                        { id: "WATE701-00254", set: 23, question: 47 }
                    ]
                },
                {
                    html: "<p><strong>Corrupted lining options and ambiguous slope:</strong> the two surviving options are unreadable, so no reliable option expression can be reconstructed. Both side areas equal 2Ly√(1 + z<sup>2</sup>). The explanation assumes 5H:1V and obtains 2Ly√26; if the printed 1:5 means 1H:5V, the result is 2Ly√26/5 instead. Specify H:V and whether both sides or the bed are included.</p>",
                    sources: [{ id: "IRRI951-00034", set: 4, question: 79 }]
                },
                {
                    html: "<p><strong>Economical-section overgeneralization:</strong> the trapezoid key T = 2y is wrong for nonzero z; T = 2y√(1 + z<sup>2</sup>) at the fixed-z optimum. A half-hexagon requires the additional optimized side slope. The rectangle explanation's claim that every efficient section has R = y/2 also fails for the optimum triangle, whose R = y/(2√2).</p>",
                    sources: [
                        { id: "WATE701-00065", set: 7, question: 52 },
                        { id: "WATE701-00071", set: 7, question: 58 },
                        { id: "WATE701-00166", set: 15, question: 54 }
                    ]
                },
                {
                    html: "<p><strong>Angle and width ambiguity:</strong> the printed 60′ is an angular-minute mark, whereas the explanation evidently intends 60°. A sloping side equals the <em>bottom</em> width only for the optimized half-hexagon, not for an arbitrary trapezoid with that side angle, and not for its top width.</p>",
                    sources: [{ id: "WATE701-00223", set: 20, question: 54 }]
                },
                {
                    html: "<p><strong>Unstated optimization and missing resistance:</strong> these maximum-discharge calculations presume b = 2y. A depth or width alone does not bound discharge while the other dimension is free to grow. The y = 3 m, S = 1/1000 item also omits C or n. Its explanation adds C = 50; that <em>illustrative extra assumption</em> gives Q = 34.8569 m<sup>3</sup>/s, not a uniquely determined answer from the stem.</p>",
                    sources: [
                        { id: "WATE701-00168", set: 15, question: 56 },
                        { id: "WATE701-00170", set: 16, question: 49 },
                        { id: "WATE701-00173", set: 16, question: 52 }
                    ]
                },
                {
                    html: "<p><strong>Incorrect Manning discharge key:</strong> assuming the intended economical rectangle, b = 5 m gives y = 2.5 m. With n = 0.020 and S = 1/500, Q = 32.4341 m<sup>3</sup>/s. The offered 32.43 is consistent; the stored key 31.43 and the explanation's trial arithmetic are not. The optimization assumption must still be stated.</p>",
                    sources: [{ id: "WATE701-00169", set: 15, question: 57 }]
                },
                {
                    html: "<p><strong>Cusec/cumec conflict:</strong> both triangular-channel stems say 117.6 cusec. A cusec is ft<sup>3</sup>/s, so this is about 3.33006 m<sup>3</sup>/s. With A = 66.72 m<sup>2</sup>, P = 24.03 m and S = 1/500, literal conversion gives n ≈ 1.77006 in SI, not an offered value. The keyed n ≈ 0.05 follows only by treating 117.6 as m<sup>3</sup>/s, which gives 0.05012. Do not silently change the discharge unit.</p>",
                    sources: [
                        { id: "WATE701-00062", set: 7, question: 49 },
                        { id: "WATE701-00111", set: 11, question: 49 }
                    ]
                },
                {
                    html: "<p><strong>Triangular-channel Chezy key:</strong> 1H:4V means z = 0.25. With y = 5 m, R = 0.606339 m. E = 5.06 m and S = 1/1000 imply C = √[2g(E − y)/(RS)] ≈ 44.06 under uniform flow and α = 1. The nearest offered coefficient is 45, not the stored 50. Subtracting nearly equal rounded depths also limits precision.</p>",
                    sources: [{ id: "WATE701-00180", set: 16, question: 59 }]
                },
                {
                    html: "<p><strong>Datum and energy-branch wording:</strong> specific energy means energy per unit <em>weight</em> relative to the local bed, not energy per unit head. An unspecified fixed datum calls for total head H; the keyed specific-energy answer assumes that datum is the bed. The shallow-branch explanation also contains a contradictory sentence: at fixed Q, decreasing supercritical depth increases E.</p>",
                    sources: [
                        { id: "WATE701-00175", set: 16, question: 54 },
                        { id: "WATE701-00178", set: 16, question: 57 },
                        { id: "WATE701-00240", set: 21, question: 56 }
                    ]
                },
                {
                    html: "<p><strong>Roughness cannot be recovered:</strong> the trapezoid's dimensions and slope do not determine n without Q or V, or equivalent additional information. Its 1H:2V slope means z = 0.5, not the explanation's 2. Geometry does not justify guessing n = 0.015.</p>",
                    sources: [{ id: "WATE701-00189", set: 17, question: 52 }]
                },
                {
                    html: "<p><strong>Missing friction-factor inputs:</strong> the 2 m × 3 m description does not clearly label depth versus width. Even after choosing an orientation and recovering V from E, Darcy f = 8gRS<sub>f</sub>/V<sup>2</sup> requires an energy slope or independent resistance information. The keyed 0.02 is not determined.</p>",
                    sources: [{ id: "WATE701-00191", set: 17, question: 54 }]
                },
                {
                    html: "<p><strong>Missing shear-stress inputs:</strong> y = 0.5 m, b = 0.8 m and E = 0.56 m determine V ≈ 1.085 m/s and R = 0.2222 m, but not S<sub>f</sub>. The keyed 3.32 Pa cannot be obtained without slope or resistance information. A point energy head is not an energy gradient; S<sub>f</sub> = −dH/dx, not dE/dx.</p>",
                    sources: [{ id: "WATE701-00192", set: 17, question: 55 }]
                },
                {
                    html: "<p><strong>Impossible specific-energy options:</strong> the trapezoid has y = 5 m, so E ≥ 5 m for nonnegative kinetic head. Every listed answer, 1.14–4.14 m, violates this. Neither C nor n is supplied. Correctly interpreting z = 0.25 and imposing economical geometry gives R = 2.5 m, but still cannot determine velocity or E.</p>",
                    sources: [{ id: "WATE701-00194", set: 17, question: 57 }]
                },
                {
                    html: "<p><strong>Critical-discharge option mismatch:</strong> y<sub>c</sub> = 1.13 m and b = 4 m give Q = 4√(9.81 × 1.13<sup>3</sup>) = 15.0492 m<sup>3</sup>/s. The stored 16 is merely the nearest offered value, not the computed result. This discrepancy is larger than ordinary final-digit rounding.</p>",
                    sources: [{ id: "WATE701-00183", set: 1, question: 52 }]
                },
                {
                    html: "<p><strong>Section-factor key and units:</strong> Q/V = 250/5 gives A = 50 m<sup>2</sup>; Z = 111.80 then gives D<sub>hyd</sub> ≈ 5 m. Model 20 keys 4 m despite its own calculation; Model 21 correctly keys 5 m. The section factor's printed unit m is also wrong: A√D<sub>hyd</sub> has units m<sup>5/2</sup>, including the separate Z = 40 example.</p>",
                    sources: [
                        { id: "WATE701-00221", set: 20, question: 52 },
                        { id: "WATE701-00231", set: 21, question: 47 },
                        { id: "WATE701-00238", set: 21, question: 54 }
                    ]
                },
                {
                    html: "<p><strong>Two incorrect hydraulic-radius keys:</strong> Q = 75, V = 5 and rectangular D<sub>hyd</sub> = 3 give A = 15, b = 5, P = 11 and R = 1.3636 m, not 1.87 m. A = 12 and D<sub>hyd</sub> = 2 give b = 6, P = 10 and R = 1.2 m, not 1.5 m. Both correct values are already offered.</p>",
                    sources: [
                        { id: "WATE701-00228", set: 20, question: 58 },
                        { id: "WATE701-00239", set: 21, question: 55 }
                    ]
                },
                {
                    html: "<p><strong>Missing ratios X:</strong> assuming a rectangle in the first item, X = R/D<sub>hyd</sub> = b/(b + 2y), so b = 6 gives y = 3(1/X − 1). In the second, X = y/b and A = 16 give b = √(16/X). Illustrative reconstruction of the keys requires X = 0.6 for y = 2, and X = 0.25 for b = 8 respectively. Neither value is supplied; they are not legitimate inferred givens.</p>",
                    sources: [
                        { id: "WATE701-00230", set: 20, question: 60 },
                        { id: "WATE701-00232", set: 21, question: 48 }
                    ]
                },
                {
                    html: "<p><strong>Circular-section convention conflict:</strong> the bank uses hydraulic mean depth for R in its 0.286/0.304 diameter ratios, but uses that phrase for A/T elsewhere. Use the equations, not the ambiguous name. The maximum-Q depth depends on holding C or n constant; 0.95 is not universal. Under constant C the wetted perimeter is approximately 2.69 diameters, so the listed 2.6 is only a coarse approximation.</p>",
                    sources: [
                        { id: "WATE701-00057", set: 6, question: 55 },
                        { id: "WATE701-00196", set: 18, question: 50 },
                        { id: "WATE701-00197", set: 18, question: 51 },
                        { id: "WATE701-00217", set: 19, question: 57 }
                    ]
                },
                {
                    html: "<p><strong>Theoretical efficiency versus practical economy:</strong> WATE701-00218 and WATE701-00242 name trapezoidal as the unrestricted theoretical optimum, overlooking the semicircular free-surface section. A half-hexagon is the optimum trapezoid, not the optimum among all possible curves. WATE701-00216 instead combines discharge, wetted perimeter and excavation claims: hydraulic efficiency needs fixed roughness, slope and comparison constraints, while minimum construction cost additionally depends on excavation, side stability and lining.</p>",
                    sources: [
                        { id: "WATE701-00216", set: 19, question: 56 },
                        { id: "WATE701-00218", set: 20, question: 49 },
                        { id: "WATE701-00242", set: 22, question: 49 }
                    ]
                },
                {
                    html: "<p><strong>Flow-classification shortcuts:</strong> gradual spatial variation does not itself establish steadiness; the flood-wave item is explicitly unsteady. A stationary hydraulic jump has a steady mean but strong instantaneous fluctuations. Supercritical is not synonymous with turbulent or universally unstable, and a steep bed guarantees supercritical <em>normal</em> flow, not supercritical conditions at every station.</p>",
                    sources: [
                        { id: "WATE701-00070", set: 7, question: 57 },
                        { id: "WATE701-00203", set: 18, question: 57 },
                        { id: "WATE701-00215", set: 19, question: 55 },
                        { id: "WATE701-00243", set: 22, question: 50 },
                        { id: "WATE701-00253", set: 22, question: 60 },
                        { id: "WATE701-00257", set: 23, question: 49 }
                    ]
                },
                {
                    html: "<p><strong>Velocity-dip explanation:</strong> a maximum slightly below the surface is common in finite-width channels, but secondary currents and sidewall effects matter. Air shear alone is not a general explanation, and the bank's suggested fractional-depth range is not a universal location to impose on every channel.</p>",
                    sources: [
                        { id: "WATE701-00205", set: 18, question: 59 },
                        { id: "WATE701-00208", set: 19, question: 48 }
                    ]
                },
                {
                    html: "<p><strong>Critical-slope and normal-depth errors:</strong> y<sub>n</sub> = y<sub>c</sub> removes the middle zone, leaving C1 and C3, not one zone or necessarily critical flow everywhere. For nonzero resisted flow, horizontal channels have no finite normal depth; infinity is a limiting shorthand. An adverse bed has no physical normal depth: an imaginary Manning result signals an inapplicable uniform-flow assumption, not an actual water depth.</p>",
                    sources: [
                        { id: "WATE701-00247", set: 22, question: 54 },
                        { id: "WATE701-00249", set: 22, question: 56 },
                        { id: "WATE701-00252", set: 22, question: 59 }
                    ]
                },
                {
                    html: "<p><strong>Sediment shortcuts are conditional:</strong> drag is important but not completely responsible for entrainment; lift, weight and contact resistance also matter. Ripples and dunes are possible lower-regime bedforms, not a mandatory result of any velocity increase. Required critical <em>stress</em> is proportional to grain diameter only when submerged density and θ<sub>c</sub> are fixed. A force on one grain is not the same quantity as stress on the bed.</p>",
                    sources: [
                        { id: "HYDR626-00255", set: 28, question: 64 },
                        { id: "HYDR626-00256", set: 28, question: 65 },
                        { id: "IRRI951-00169", set: 17, question: 68 },
                        { id: "WATE701-00261", set: 23, question: 53 }
                    ]
                },
                {
                    html: "<p><strong>Shields inputs are missing:</strong> d = 0.3 mm and usual turbulent flow do not uniquely determine τ<sub>c</sub>. As a separate <em>illustrative assumption</em>, quartz density 2650 kg/m<sup>3</sup>, water density 1000 kg/m<sup>3</sup> and θ<sub>c</sub> = 0.056 give 0.271933 Pa, not 0.206 Pa. The latter would require θ<sub>c</sub> ≈ 0.04242 for those densities. Neither threshold can be selected without the applicable particle-Reynolds regime and material conditions. The coarse-alluvium 0.056 key is not a universal Shields curve.</p>",
                    sources: [
                        { id: "IRRI951-00041", set: 5, question: 75 },
                        { id: "WATE701-00044", set: 5, question: 55 },
                        { id: "WATE701-00262", set: 23, question: 54 }
                    ]
                },
                {
                    html: "<p><strong>Dimensional and slope notation:</strong> the Chezy explanation incorrectly assigns length to slope. S is dimensionless, √(RS) has dimension L<sup>1/2</sup>, and C has dimension L<sup>1/2</sup>/time; the keyed dimension is correct despite the derivation. In the slope example, 0.05 is √S, not S or 1/400; squaring produces S = 0.0025.</p>",
                    sources: [
                        { id: "WATE701-00222", set: 20, question: 53 },
                        { id: "WATE701-00056", set: 6, question: 54 }
                    ]
                }
            ]
        }
    });
})();