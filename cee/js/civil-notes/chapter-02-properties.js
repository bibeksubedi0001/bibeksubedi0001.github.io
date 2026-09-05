(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0201: {
            code: "ACiE0201",
            questionCount: 80,
            blocks: [
                {
                    id: "soil-origin-and-fabric",
                    title: "Origin, mineralogy and soil fabric",
                    html: "<p>Origin describes deposition; fabric describes particle arrangement. <strong>Alluvium</strong> is river-deposited sediment, not a guarantee of flat ground or hard foundations. Lacustrine means lake-deposited. Kathmandu deposits cannot all be identified as black cotton soil from colour. Organic soils may be spongy and highly compressible.</p>" +
                        "<p>Single-grain contacts typify sands and gravels; open honeycomb fabrics can occur in silts. Clay platelets may be flocculated or more parallel/dispersed. Size alone does not determine fabric. Montmorillonite can absorb interlayer water and swell; wetting-induced void expansion is <strong>swelling</strong>, not compression. Gradation, mineralogy, fabric, density and water state jointly govern engineering behaviour.</p>",
                    sources: [
                        { id: "IRRI951-00136", set: 14, question: 70 },
                        { id: "SOIL136-00010", set: 2, question: 44 },
                        { id: "SOIL136-00095", set: 9, question: 37 },
                        { id: "SOIL136-00118", set: 10, question: 46 },
                        { id: "SOIL136-00129", set: 11, question: 43 },
                        { id: "SOIL136-00130", set: 11, question: 44 },
                        { id: "SOIL136-00131", set: 11, question: 45 },
                        { id: "SOIL136-00132", set: 11, question: 46 },
                        { id: "SOIL136-00192", set: 16, question: 39 },
                        { id: "SOIL136-00197", set: 16, question: 44 },
                        { id: "SOIL136-00346", set: 27, question: 37 }
                    ]
                },
                {
                    id: "soil-phase-definitions",
                    title: "Phase diagram, fractions and units",
                    html: "<p>The block/phase diagram separates solids, water and air; volumes conventionally appear left, masses or weights right. Saturated soil has V<sub>a</sub> = 0 and V<sub>v</sub> = V<sub>w</sub>; dry soil has V<sub>w</sub> = 0. Both are two-phase cases, not two consistency states.</p>" +
                        "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Definition</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Volumes</th><td>V = V<sub>s</sub> + V<sub>v</sub>; V<sub>v</sub> = V<sub>a</sub> + V<sub>w</sub>.</td></tr>" +
                        "<tr><th scope='row'>Water content</th><td>w = M<sub>w</sub>/M<sub>s</sub> = W<sub>w</sub>/W<sub>s</sub>.</td></tr>" +
                        "<tr><th scope='row'>Void ratio; porosity</th><td>e = V<sub>v</sub>/V<sub>s</sub>; n = V<sub>v</sub>/V.</td></tr>" +
                        "<tr><th scope='row'>Saturation; air content</th><td>S = V<sub>w</sub>/V<sub>v</sub>; a<sub>c</sub> = V<sub>a</sub>/V<sub>v</sub>.</td></tr>" +
                        "<tr><th scope='row'>Density; unit weight</th><td>ρ = M/V, kg/m<sup>3</sup>; γ = ρg, N/m<sup>3</sup>. Divide by 1000 for kN/m<sup>3</sup>.</td></tr></tbody></table>" +
                        "<p>Use fractions in equations; multiply by 100 for percentages. Water content and e can exceed 1; n and S cannot. G = ρ<sub>s</sub>/ρ<sub>w</sub> is dimensionless. The bank's 2.7 g/cm<sup>3</sup> is an indicative <em>particle</em> density, not bulk density or a universal G.</p>",
                    sources: [
                        { id: "SOIL136-00002", set: 2, question: 36 },
                        { id: "SOIL136-00004", set: 2, question: 38 },
                        { id: "SOIL136-00014", set: 3, question: 35 },
                        { id: "SOIL136-00093", set: 9, question: 35 },
                        { id: "SOIL136-00109", set: 10, question: 38 },
                        { id: "SOIL136-00110", set: 10, question: 39 },
                        { id: "SOIL136-00111", set: 10, question: 40 },
                        { id: "SOIL136-00112", set: 10, question: 41 },
                        { id: "SOIL136-00158", set: 13, question: 47 }
                    ]
                },
                {
                    id: "soil-phase-identities",
                    title: "Phase identities and denominator checks",
                    html: "<p><strong>n = e/(1 + e); e = n/(1 − n); 1 − n = 1/(1 + e); Se = wG.</strong> Thus wG ≤ e for S ≤ 1. Air-void fraction n<sub>a</sub> = V<sub>a</sub>/V = n(1 − S), whereas air content a<sub>c</sub> = 1 − S. Neither symbol means a numerical percentage inside these equations.</p>" +
                        "<p><strong>Bank calculations:</strong> drying from 190 to 150 kN removes 40 kN water; w = 40/150 = 0.2667 = 26.67%, not 40/190. When air occupies V/7 and water V/8, n = 15/56 = 0.2679, e = 15/41 = 0.3659 and S = 7/15 = 46.67%. Air voids are 14.29% of total volume, but air content is 53.33% of void volume.</p>",
                    sources: [
                        { id: "SOIL136-00085", set: 8, question: 40 },
                        { id: "SOIL136-00113", set: 10, question: 42 },
                        { id: "SOIL136-00114", set: 1, question: 37 },
                        { id: "SOIL136-00115", set: 10, question: 43 },
                        { id: "SOIL136-00116", set: 10, question: 44 },
                        { id: "SOIL136-00117", set: 10, question: 45 },
                        { id: "SOIL136-00155", set: 13, question: 44 },
                        { id: "SOIL136-00322", set: 25, question: 41 }
                    ]
                },
                {
                    id: "soil-density-worked-samples",
                    title: "Dry density and worked phase problems",
                    html: "<p>Neglecting air weight, equivalent dry-unit-weight expressions are <strong>γ<sub>d</sub> = γ/(1 + w) = Gγ<sub>w</sub>/(1 + e) = (1 − n<sub>a</sub>)Gγ<sub>w</sub>/(1 + wG)</strong>. Use fractional w and n<sub>a</sub>, and matching unit-weight units. Density versions replace γ by ρ throughout.</p>" +
                        "<p><strong>108 g sample:</strong> with V = 60 cm<sup>3</sup>, w = 0.25, G = 2.52 and ρ<sub>w</sub> ≈ 1 g/cm<sup>3</sup>, M<sub>s</sub> = 108/1.25 = 86.4 g; V<sub>s</sub> = 86.4/2.52 = 34.286 cm<sup>3</sup>. Hence V<sub>v</sub> = 25.714 cm<sup>3</sup>, e = <strong>0.75</strong> and ρ<sub>d</sub> = 1.44 g/cm<sup>3</sup>.</p>" +
                        "<p><strong>Saturated sample:</strong> G = 2.6 and w = 45% give e = wG = 1.17 and n = 1.17/2.17 = <strong>0.5392</strong>. The offered 0.55 is only the nearest option.</p>",
                    sources: [
                        { id: "SOIL136-00001", set: 2, question: 35 },
                        { id: "SOIL136-00015", set: 3, question: 36 },
                        { id: "SOIL136-00016", set: 3, question: 37 },
                        { id: "SOIL136-00154", set: 13, question: 43 }
                    ]
                },
                {
                    id: "soil-pycnometer-water-content",
                    title: "Pycnometer displacement and moisture",
                    html: "<p>Compare soil-plus-water and water-only pycnometer masses at the same filling mark and temperature, without entrapped air. For moist sample mass M and filled-mass difference ΔM, displacement gives ΔM = M<sub>s</sub>(1 − 1/G), hence <strong>w = M(G − 1)/(GΔM) − 1</strong>.</p>" +
                        "<p>The bank gives M = 400 g, ΔM = 2150 − 1950 = 200 g and G = 2.5. Therefore M<sub>s</sub> = 333.33 g, M<sub>w</sub> = 66.67 g and w = <strong>0.20 = 20%</strong>. This requires 400 g to mean moist sand, not dry solids.</p>",
                    sources: [
                        { id: "SOIL136-00017", set: 3, question: 38 }
                    ]
                },
                {
                    id: "soil-size-classification-systems",
                    title: "USCS, ISI/IS and MIT distinctions",
                    html: "<p>USCS developed from Arthur Casagrande's wartime airfield classification; 'Tasagrande' is a bank typo. <strong>Syllabus comparison:</strong> name the scheme before applying conventional particle-size boundaries, in millimetres.</p>" +
                        "<table><thead><tr><th scope='col'>Scheme</th><th scope='col'>Gravel/sand</th><th scope='col'>Sand/fines</th><th scope='col'>Silt/clay distinction</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>USCS</th><td>4.75</td><td>0.075</td><td>Plasticity for M/C groups, not a 0.002 mm group boundary.</td></tr>" +
                        "<tr><th scope='row'>ISI/IS size bands</th><td>4.75</td><td>0.075</td><td>0.002 for particle-size fractions.</td></tr>" +
                        "<tr><th scope='row'>MIT size bands</th><td>2</td><td>0.06</td><td>0.002 for particle-size fractions.</td></tr></tbody></table>" +
                        "<p>A clay-sized particle need not be a clay mineral. IS engineering classification also uses plasticity; its intermediate fine-soil category is not a USCS category. These schemes describe soil, not permissible foundation pressures.</p>",
                    sources: [
                        { id: "SOIL136-00133", set: 12, question: 34 },
                        { id: "SOIL136-00134", set: 12, question: 35 },
                        { id: "SOIL136-00135", set: 12, question: 36 },
                        { id: "SOIL136-00140", set: 12, question: 41 },
                        { id: "SOIL136-00145", set: 12, question: 46 },
                        { id: "SOIL136-00148", set: 13, question: 37 }
                    ]
                },
                {
                    id: "soil-sieve-analysis-gradation",
                    title: "Sieve interpretation and grading coefficients",
                    html: "<p>Use representative dry mass M, decreasing sieve openings and a bottom pan; check recovered mass. Percentage retained = 100m<sub>i</sub>/M; percentage passing = 100 − cumulative percentage retained. Sieve analysis resolves coarse fractions; sedimentation analysis of finer particles is syllabus context.</p>" +
                        "<p>D<sub>p</sub> is the opening at p% passing. With all diameters in matching units, <strong>C<sub>u</sub> = D<sub>60</sub>/D<sub>10</sub></strong> and <strong>C<sub>c</sub> = D<sub>30</sub><sup>2</sup>/(D<sub>10</sub>D<sub>60</sub>)</strong>. Clean GW requires C<sub>u</sub> ≥ 4; clean SW requires C<sub>u</sub> ≥ 6; <em>both also require</em> 1 ≤ C<sub>c</sub> ≤ 3. A large C<sub>u</sub> alone does not exclude gap grading.</p>" +
                        "<p>Dispersant breaks aggregates into constituent grains. The bank's shaking time and solution concentration are not verified laboratory prescriptions; test-method conditions still control separation.</p>",
                    sources: [
                        { id: "SOIL136-00008", set: 2, question: 42 },
                        { id: "SOIL136-00012", set: 2, question: 46 },
                        { id: "SOIL136-00013", set: 2, question: 47 },
                        { id: "SOIL136-00121", set: 11, question: 35 },
                        { id: "SOIL136-00122", set: 11, question: 36 },
                        { id: "SOIL136-00147", set: 13, question: 36 },
                        { id: "SOIL136-00149", set: 13, question: 38 },
                        { id: "SOIL136-00150", set: 13, question: 39 },
                        { id: "SOIL136-00151", set: 13, question: 40 },
                        { id: "SOIL136-00152", set: 13, question: 41 }
                    ]
                },
                {
                    id: "soil-uscs-symbols-and-fines",
                    title: "USCS decision sequence and dual symbols",
                    html: "<p>Coarse soil has &gt;50% dry mass retained on 0.075 mm; otherwise follow the fine-soil plasticity branch. Within the coarse fraction, compare gravel with sand to select G or S. W/P describes grading; M/C describes silty/clayey fines: SC is clayey sand. Organic fines use OL/OH; highly organic peat uses Pt.</p>" +
                        "<p>Fines &lt;5% permit clean-soil symbols; 5–12% require dual symbols; &gt;12% makes fines character decisive. CL-ML is a different, fine-soil borderline designation.</p>" +
                        "<p><strong>Conditional bank calculation:</strong> if the garbled entry means 64% passing 4.75 mm and 6% passing 0.075 mm, gravel = 36%, sand = 58%, coarse = 94%; 58/94 = 61.7% sand. C<sub>u</sub> = 7.5 and C<sub>c</sub> = 2.7 satisfy grading; PI = 2.5 indicates silty fines. The result is <strong>SW-SM</strong>, not unqualified SW.</p>",
                    sources: [
                        { id: "SOIL136-00003", set: 2, question: 37 },
                        { id: "SOIL136-00120", set: 11, question: 34 },
                        { id: "SOIL136-00136", set: 12, question: 37 },
                        { id: "SOIL136-00137", set: 12, question: 38 },
                        { id: "SOIL136-00138", set: 12, question: 39 },
                        { id: "SOIL136-00139", set: 12, question: 40 },
                        { id: "SOIL136-00146", set: 13, question: 35 }
                    ]
                },
                {
                    id: "soil-consistency-limit-tests",
                    title: "Consistency states and Atterberg endpoints",
                    html: "<p>With increasing water, fine-soil consistency passes through <strong>solid, semi-solid, plastic and liquid</strong>; the boundaries are shrinkage, plastic and liquid limits respectively. Below shrinkage limit, further drying causes no further volume reduction; water can still leave as air enters. Plasticity means lasting remoulding without rupture, not obligatory volume increase.</p>" +
                        "<p>The bank describes the Casagrande liquid-limit endpoint as approximately 13 mm groove closure at 25 blows, and plastic limit as thread crumbling at about 3 mm diameter. These are empirical method endpoints, not universal physical phase transitions. Specify preparation and the applicable cup/thread method; values from different procedures are not automatically interchangeable.</p>",
                    sources: [
                        { id: "SOIL136-00007", set: 2, question: 41 },
                        { id: "SOIL136-00092", set: 9, question: 34 },
                        { id: "SOIL136-00094", set: 9, question: 36 },
                        { id: "SOIL136-00123", set: 11, question: 37 },
                        { id: "SOIL136-00124", set: 11, question: 38 },
                        { id: "SOIL136-00125", set: 11, question: 39 },
                        { id: "SOIL136-00188", set: 16, question: 35 }
                    ]
                },
                {
                    id: "soil-plasticity-chart-indices",
                    title: "A-line, liquidity, flow and toughness indices",
                    html: "<p>The <strong>A-line, PI = 0.73(LL − 20)</strong>, uses percentage values and separates clayey from silty behaviour; it is <em>not</em> the low/high boundary. USCS uses LL = 50% for the L/H division. High-liquid-limit silts can lie below the A-line; organic identification needs more than chart position.</p>" +
                        "<table><thead><tr><th scope='col'>Index</th><th scope='col'>Definition and interpretation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Plasticity PI</th><td>LL − PL; plastic water-content interval.</td></tr>" +
                        "<tr><th scope='row'>Shrinkage I<sub>s</sub></th><td>PL − SL; semi-solid interval.</td></tr>" +
                        "<tr><th scope='row'>Liquidity I<sub>L</sub></th><td>(w − PL)/PI; 0 at PL, 1 at LL.</td></tr>" +
                        "<tr><th scope='row'>Flow I<sub>f</sub></th><td>(w<sub>1</sub> − w<sub>2</sub>)/log<sub>10</sub>(N<sub>2</sub>/N<sub>1</sub>), N<sub>2</sub> &gt; N<sub>1</sub>; positive cup-flow-curve slope magnitude.</td></tr>" +
                        "<tr><th scope='row'>Toughness I<sub>t</sub></th><td>PI/I<sub>f</sub>; empirical strength indicator at PL, not measured shear stress.</td></tr></tbody></table>" +
                        "<p>Use consistent water-content units; N denotes blows. <strong>Illustrative extension:</strong> LL = 50%, PL = 25%, SL = 15%, w = 35%, I<sub>f</sub> = 10 percentage points per log cycle give PI = 25 points, I<sub>s</sub> = 10 points, I<sub>L</sub> = 0.4 and I<sub>t</sub> = 2.5. I<sub>L</sub> is undefined when its denominator PI is zero. I<sub>t</sub> instead divides by I<sub>f</sub>; a formal zero numerator is not division by zero. For nonplastic soil, report indices as not applicable where the required consistency limits are not measurable.</p>",
                    sources: [
                        { id: "SOIL136-00005", set: 2, question: 39 },
                        { id: "SOIL136-00119", set: 10, question: 47 },
                        { id: "SOIL136-00126", set: 11, question: 40 },
                        { id: "SOIL136-00127", set: 11, question: 41 },
                        { id: "SOIL136-00128", set: 11, question: 42 },
                        { id: "SOIL136-00141", set: 12, question: 42 },
                        { id: "TRAN808-00176", set: 17, question: 85 }
                    ]
                },
                {
                    id: "soil-descriptions-texture-logs",
                    title: "Descriptions, textural triangles and boring logs",
                    html: "<p>The bank reads 'sandy silty clay' as clay &gt; silt &gt; sand; modifiers do not supply measured percentages. The Public Roads Administration textural triangle uses sand/silt/clay fractions summing to 100%, read parallel to the three sides. Only two percentages are independent. State grain boundaries and any excluded gravel fraction; texture alone cannot establish engineering suitability.</p>" +
                        "<p><strong>Boring logs — syllabus context:</strong> read depth datum, contacts, descriptions, sample depths/types, groundwater observation times and test results together. Disturbed samples support index tests, not intact fabric measurements. Separate observed contacts from interpolation between boreholes; a soil name alone establishes neither continuous strata nor bearing capacity.</p>",
                    sources: [
                        { id: "SOIL136-00142", set: 12, question: 43 },
                        { id: "SOIL136-00143", set: 12, question: 44 },
                        { id: "SOIL136-00144", set: 12, question: 45 },
                        { id: "SOIL136-00153", set: 13, question: 42 }
                    ]
                },
                {
                    id: "soil-hydraulic-conductivity-tests",
                    title: "Permeability tests and fluid effects",
                    html: "<p>Hydraulic conductivity k measures flow through connected pores and has length/time units. Interpret tests with saturation, de-airing and side-leakage control.</p>" +
                        "<table><thead><tr><th scope='col'>Test</th><th scope='col'>Darcy-based calculation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Constant head: coarser soils</th><td>k = V<sub>collected</sub>L/(AtΔH).</td></tr>" +
                        "<tr><th scope='row'>Falling head: low-permeability fines</th><td>k = aL ln(h<sub>1</sub>/h<sub>2</sub>)/(At).</td></tr></tbody></table>" +
                        "<p>A is specimen area, a standpipe area, L specimen length, t elapsed time and h hydraulic-head differences. Matching metre/second units give m/s. Falling-head interpretation assumes quasi-steady Darcy flow as head changes, not constant head.</p>" +
                        "<p>For unchanged fabric, warmer water's reduced viscosity generally increases k. Intrinsic permeability κ has area units: k = κρ<sub>w</sub>g/μ, with consistent SI units and dynamic viscosity μ. Do not confuse a fluid-dependent conductivity change with a change of pore geometry.</p>",
                    sources: [
                        { id: "SOIL136-00009", set: 2, question: 43 },
                        { id: "SOIL136-00103", set: 9, question: 44 },
                        { id: "SOIL136-00104", set: 9, question: 45 },
                        { id: "SOIL136-00105", set: 9, question: 46 },
                        { id: "SOIL136-00106", set: 10, question: 35 }
                    ]
                },
                {
                    id: "soil-strength-compressibility-tests",
                    title: "Engineering-property tests and interpretation",
                    html: "<p>Index tests describe grading and consistency; engineering tests measure responses under specified stress and drainage conditions.</p>" +
                        "<table><thead><tr><th scope='col'>Test family</th><th scope='col'>Syllabus context</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Strength</th><td>Direct shear imposes a failure plane. Triaxial testing controls confinement/drainage and can measure pore pressure. Unconfined compression needs a self-supporting cohesive specimen.</td></tr>" +
                        "<tr><th scope='row'>Compressibility</th><td>An oedometer confines lateral strain and records height changes under vertical loading with time; disturbance, drainage and stress history matter.</td></tr></tbody></table>" +
                        "<p>The bank associates fixed-ring equipment with permeability measurement during loading. Suitable hydraulic connections are essential. A floating ring moves vertically; it does not cease to constrain specimen area. Neither an index nor a soil name substitutes for a measured strength or compression curve.</p>",
                    sources: [
                        { id: "SOIL136-00187", set: 15, question: 46 }
                    ]
                }
            ],
            gaps: [
                "No assigned boring log or complete strength/compressibility test dataset is supplied; those interpretation notes are syllabus context, not worked bank evidence.",
                "MIT, full ISI/IS classification, sedimentation and organic-identification procedures are not systematically tested. Exact applicable method editions and reporting rules remain to be checked.",
                "No specimen-specific mineralogy, Kathmandu-wide classification or reliable site porosity is established by these questions."
            ],
            cautions: [
                {
                    html: "<p><strong>Incorrect chart claims:</strong> SOIL136-00005 wrongly equates below-A-line with low plasticity. SOIL136-00141 supplies no chart supporting its 'relative suitability' key; ordinary axes represent LL and PI, not a universal suitability ranking.</p>",
                    sources: [
                        { id: "SOIL136-00005", set: 2, question: 39 },
                        { id: "SOIL136-00141", set: 12, question: 42 }
                    ]
                },
                {
                    html: "<p><strong>Numerical/notation defects:</strong> 0.55 is approximate, the pycnometer's 400 g must mean moist soil, and both n = e/(1 + e) and e = n/(1 − n) are valid options in SOIL136-00115. SOIL136-00154's corrupted choices do not express the required dry-unit-weight identity.</p>",
                    sources: [
                        { id: "SOIL136-00016", set: 3, question: 37 },
                        { id: "SOIL136-00017", set: 3, question: 38 },
                        { id: "SOIL136-00115", set: 10, question: 43 },
                        { id: "SOIL136-00154", set: 13, question: 43 }
                    ]
                },
                {
                    html: "<p><strong>Classification conflicts:</strong> SOIL136-00120 is garbled; 6% fines would require a dual symbol, and PI = 2.5 is not literally nonplastic. SOIL136-00133 misattributes a size-only silt/clay division to USCS. The 'four major groups' key is a grouping convention, not a substitute for classification criteria.</p>",
                    sources: [
                        { id: "SOIL136-00120", set: 11, question: 34 },
                        { id: "SOIL136-00133", set: 12, question: 34 },
                        { id: "SOIL136-00137", set: 12, question: 38 }
                    ]
                },
                {
                    html: "<p><strong>Fabric/geography:</strong> honeycomb ranges conflict: 0.0002 mm is below, not inside, a 0.002 mm lower bound. Size cannot uniquely assign fabric. Kathmandu's dark lacustrine soils are not thereby all expansive black cotton soil. The plasticity stem's volume-change wording is also defective.</p>",
                    sources: [
                        { id: "SOIL136-00010", set: 2, question: 44 },
                        { id: "SOIL136-00118", set: 10, question: 46 },
                        { id: "SOIL136-00131", set: 11, question: 45 },
                        { id: "SOIL136-00132", set: 11, question: 46 },
                        { id: "SOIL136-00188", set: 16, question: 35 }
                    ]
                },
                {
                    html: "<p><strong>Method limitations:</strong> ten minutes and '2% ... per litre' are unverified procedural claims. Mass and weight percentages coincide under common gravity, so SOIL136-00151 has overlapping options. Floating-ring area does not change as claimed; direct permeability capability depends on apparatus plumbing.</p>",
                    sources: [
                        { id: "SOIL136-00150", set: 13, question: 39 },
                        { id: "SOIL136-00151", set: 13, question: 40 },
                        { id: "SOIL136-00152", set: 13, question: 41 },
                        { id: "SOIL136-00187", set: 15, question: 46 }
                    ]
                },
                {
                    html: "<p><strong>Do not generalize:</strong> clay porosity 0.4–0.5 and particle density 2.7 g/cm<sup>3</sup> are bank heuristics, not site inputs. Textural classification is not universally 'most suitable' for coarse soils; it omits important plasticity information.</p>",
                    sources: [
                        { id: "SOIL136-00093", set: 9, question: 35 },
                        { id: "SOIL136-00143", set: 12, question: 44 },
                        { id: "SOIL136-00322", set: 25, question: 41 }
                    ]
                },
                {
                    html: "<p><strong>Grading boundaries:</strong> the bank writes C<sub>u</sub> &gt; 4 or &gt; 6; conventional USCS criteria include equality. Always apply C<sub>c</sub> and fines content as well. Stored questions and keys remain unchanged.</p>",
                    sources: [
                        { id: "SOIL136-00008", set: 2, question: 42 },
                        { id: "SOIL136-00012", set: 2, question: 46 },
                        { id: "SOIL136-00013", set: 2, question: 47 },
                        { id: "SOIL136-00121", set: 11, question: 35 },
                        { id: "SOIL136-00122", set: 11, question: 36 }
                    ]
                }
            ]
        },
        ACiE0202: {
            code: "ACiE0202",
            questionCount: 63,
            blocks: [
                {
                    id: "effective-stress-principle",
                    title: "Total, neutral and effective stress",
                    html: "<p>For saturated soil, using compression-positive stresses and gauge pore pressure, <strong>σ′ = σ − u</strong>. Total stress σ includes external load and overlying soil/water weight; neutral stress u is pore-water pressure. Effective stress is the skeleton's average stress over gross area, not microscopic stress over actual grain-contact area.</p>" +
                        "<p>For layers, σ<sub>v</sub> = Σγ<sub>i</sub>H<sub>i</sub> plus surcharge; kN/m<sup>3</sup> × m gives kPa. Subtract measured/calculated u. An applied load need not immediately become effective stress: <strong>Δσ′ = Δσ − Δu</strong>. Drained compression usually decreases e and k; stress history and fabric matter. Water supports pressure, not static shear resistance.</p>",
                    sources: [
                        { id: "SOIL136-00049", set: 5, question: 44 },
                        { id: "SOIL136-00156", set: 13, question: 45 },
                        { id: "SOIL136-00157", set: 13, question: 46 },
                        { id: "SOIL136-00166", set: 14, question: 40 }
                    ]
                },
                {
                    id: "water-table-effective-stress",
                    title: "Rising groundwater versus ponded water",
                    html: "<p>Under hydrostatic conditions u = γ<sub>w</sub>z<sub>w</sub>, where z<sub>w</sub> is depth below the water surface. Raising groundwater <em>within soil</em> generally reduces effective stress; account for changed soil unit weight as well as increased u. Lowering groundwater commonly increases effective stress and can cause compression.</p>" +
                        "<p>Once soil is saturated to ground level, additional ponding increases total stress and pore pressure equally: <strong>Δσ = Δu = γ<sub>w</sub>Δh; Δσ′ = 0</strong>. <strong>Illustrative extension:</strong> 2 m ponding with γ<sub>w</sub> = 9.81 kN/m<sup>3</sup> adds 19.62 kPa to each. This assumes hydrostatic equilibrium, unchanged loading and no seepage gradient.</p>",
                    sources: [
                        { id: "SOIL136-00036", set: 4, question: 44 },
                        { id: "SOIL136-00037", set: 4, question: 45 },
                        { id: "SOIL136-00159", set: 14, question: 34 }
                    ]
                },
                {
                    id: "capillary-rise-and-suction",
                    title: "Capillary water and negative pore pressure",
                    html: "<p>Surface tension holds capillary water against gravity. For an ideal circular tube, <strong>h<sub>c</sub> = 4T cosθ/(γ<sub>w</sub>d)</strong>: surface tension T in N/m, diameter d in m and γ<sub>w</sub> in N/m<sup>3</sup> give metres; θ is contact angle. Smaller pores favour greater equilibrium rise; clay can rise higher but much more slowly than sand. Soil pores are not identical tubes.</p>" +
                        "<p>In a continuous saturated capillary fringe, u = −γ<sub>w</sub>h above the water table; subtracting negative u increases σ′. Unsaturated soil needs an appropriate suction framework, not automatic use of the saturated equation. Compaction can leave suction but does not invariably produce negative u. Adsorbed water also resists gravity drainage.</p>" +
                        "<p>Dense sand or heavily overconsolidated clay may tend to dilate during shear. If undrained conditions prevent volume change, that tendency can generate <strong>negative excess pore pressure Δu</strong>. It need not make the total gauge pressure u negative: the initial pressure also matters. Distinguish capillary suction, a negative increment and a negative absolute gauge value.</p>",
                    sources: [
                        { id: "SOIL136-00260", set: 21, question: 35 },
                        { id: "TRAN808-00215", set: 21, question: 79 },
                        { id: "WATE701-00213", set: 19, question: 53 }
                    ]
                },
                {
                    id: "darcy-seepage-force-example",
                    title: "Darcy flow, seepage force and worked pressure",
                    html: "<p>Darcy's relation is <strong>Q = kiA</strong>, with i = ΔH/L, head loss ΔH and path length L. H = z + u/γ<sub>w</sub>, neglecting velocity head. Laminar Darcy behaviour, saturation and stable fabric are assumed; large-gradient coarse flow may be non-Darcy. Q/A is discharge velocity; pore velocity is approximately (Q/A)/n<sub>effective</sub>. Flow transfers drag to grains while dissipating hydraulic energy.</p>" +
                        "<table><thead><tr><th scope='col'>Uniform isotropic flow</th><th scope='col'>Expression and units</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Force per soil volume</th><td>j = iγ<sub>w</sub>, kN/m<sup>3</sup>, along flow.</td></tr>" +
                        "<tr><th scope='row'>Force per area over L</th><td>p<sub>s</sub> = iγ<sub>w</sub>L = γ<sub>w</sub>ΔH, kPa.</td></tr>" +
                        "<tr><th scope='row'>Total seepage force</th><td>J = p<sub>s</sub>A = jAL, kN.</td></tr></tbody></table>" +
                        "<p><strong>Bank example:</strong> Q = 0.04 m<sup>3</sup>/s, k = 1.6 × 10<sup>−3</sup> m/s, A = 50 m<sup>2</sup>, L = 12 m give i = 0.04/(0.0016 × 50) = 0.5 and ΔH = 6 m. With γ<sub>w</sub> = 9.81, p<sub>s</sub> = <strong>58.86 kPa</strong> and J = 2943 kN. This drag-related pressure is not absolute pore pressure at an unspecified elevation.</p>",
                    sources: [
                        { id: "SOIL136-00041", set: 5, question: 36 },
                        { id: "SOIL136-00174", set: 15, question: 34 },
                        { id: "SOIL136-00185", set: 1, question: 39 },
                        { id: "SOIL136-00212", set: 17, question: 44 },
                        { id: "SOIL136-00213", set: 17, question: 45 },
                        { id: "SOIL136-00214", set: 1, question: 40 },
                        { id: "SOIL136-00215", set: 17, question: 46 },
                        { id: "SOIL136-00216", set: 18, question: 35 }
                    ]
                },
                {
                    id: "critical-gradient-and-heave",
                    title: "Upward seepage, quick condition and piping",
                    html: "<p>For a saturated cohesionless prism of thickness L, no surcharge and uniform vertical flow, <strong>σ′<sub>base</sub> = (γ′ − iγ<sub>w</sub>)L</strong> upward; replace minus by plus for downward flow. Here γ′ = γ<sub>sat</sub> − γ<sub>w</sub>. Quick condition occurs when upward seepage cancels submerged weight: <strong>i<sub>c</sub> = γ′/γ<sub>w</sub> = (G − 1)/(1 + e)</strong>.</p>" +
                        "<p><strong>Bank checks:</strong> G = 2.68, e = 0.68 give i<sub>c</sub> = 1.68/1.68 = 1. For G = 2.67, e = 0.67 and L = 1.5 m, required head difference is i<sub>c</sub>L = <strong>1.5 m</strong>. Upward flow alone is insufficient.</p>" +
                        "<p>Quicksand is a condition, not a sand type. Downstream cutoff exits can develop upward heave. Internal erosion/piping is related but not identical to bulk heave; no universal safe gradient follows from these examples.</p>",
                    sources: [
                        { id: "IRRI951-00098", set: 10, question: 77 },
                        { id: "IRRI951-00103", set: 11, question: 71 },
                        { id: "SOIL136-00024", set: 3, question: 45 },
                        { id: "SOIL136-00042", set: 5, question: 37 },
                        { id: "SOIL136-00107", set: 10, question: 36 },
                        { id: "SOIL136-00164", set: 14, question: 38 },
                        { id: "SOIL136-00165", set: 14, question: 39 }
                    ]
                },
                {
                    id: "flow-net-construction-principles",
                    title: "Flow-net construction and boundary conditions",
                    html: "<p>A classical net solves steady two-dimensional saturated Darcy flow. In homogeneous isotropic soil, smooth flow lines intersect equipotentials orthogonally, forming approximate curvilinear squares. A flow channel lies between adjacent flow lines; equivalent square channels carry equal discharge. Constant-head boundaries are equipotentials; impermeable boundaries are flow lines.</p>" +
                        "<p>Forchheimer is associated with graphical construction. The electrical-conductor analogy matches current with discharge and voltage with head, using equivalent geometry and boundary conditions. Interior curves should not kink arbitrarily; boundaries, material interfaces or singular corners require separate treatment. Orthogonality in physical coordinates is not guaranteed for anisotropic soil.</p>",
                    sources: [
                        { id: "SOIL136-00029", set: 4, question: 37 },
                        { id: "SOIL136-00168", set: 14, question: 42 },
                        { id: "SOIL136-00169", set: 14, question: 43 },
                        { id: "SOIL136-00170", set: 14, question: 44 },
                        { id: "SOIL136-00172", set: 14, question: 46 },
                        { id: "SOIL136-00184", set: 15, question: 44 },
                        { id: "SOIL136-00217", set: 18, question: 36 }
                    ]
                },
                {
                    id: "flow-net-discharge-exit-gradient",
                    title: "Discharge, pore pressure and exit gradient",
                    html: "<p>For an isotropic square net, <strong>q′ = kΔH(N<sub>f</sub>/N<sub>d</sub>)</strong> per unit out-of-plane width, in m<sup>2</sup>/s. Multiply by width for m<sup>3</sup>/s. Count channels and head-drop intervals, not lines; the bank's N<sub>a</sub> denotes N<sub>d</sub>. Each drop loses ΔH/N<sub>d</sub>; local u = γ<sub>w</sub>(H − z), with head H and elevation z sharing a datum.</p>" +
                        "<p><strong>Illustrative extension of the bank's k and 6 m head loss:</strong> choosing N<sub>f</sub> = 3, N<sub>d</sub> = 12 gives q′ = 0.0024 m<sup>2</sup>/s. If the final flow-path field is 0.25 m long, i<sub>exit</sub> ≈ ΔH/(N<sub>d</sub>L<sub>exit</sub>) = 2. These channel counts and exit length are illustrative, not supplied bank geometry.</p>",
                    sources: [
                        { id: "SOIL136-00018", set: 3, question: 39 },
                        { id: "SOIL136-00167", set: 14, question: 41 },
                        { id: "SOIL136-00173", set: 14, question: 47 },
                        { id: "SOIL136-00041", set: 5, question: 36 }
                    ]
                },
                {
                    id: "anisotropic-layered-seepage",
                    title: "Anisotropy and layered conductivity",
                    html: "<p><strong>Syllabus extension, not a supplied layered-soil problem:</strong> for homogeneous principal conductivities k<sub>x</sub>, k<sub>z</sub>, Darcy flux components are −k<sub>x</sub>∂H/∂x and −k<sub>z</sub>∂H/∂z. Flux need not follow the head-gradient direction. Transform x* = x√(k<sub>z</sub>/k<sub>x</sub>), keeping z, to construct an orthogonal net; use √(k<sub>x</sub>k<sub>z</sub>) with that transformed geometry, not an unchanged isotropic drawing.</p>" +
                        "<p>For planar saturated layers in steady one-dimensional flow, <strong>k<sub>parallel</sub> = Σ(k<sub>i</sub>H<sub>i</sub>)/ΣH<sub>i</sub></strong> and <strong>k<sub>normal</sub> = ΣH<sub>i</sub>/Σ(H<sub>i</sub>/k<sub>i</sub>)</strong>. H<sub>i</sub> are thicknesses; k retains length/time units. Parallel layers share gradient; series layers share flux.</p>" +
                        "<p><strong>Illustrative extension:</strong> equal layers with the bank's k = 0.0016 m/s and an assumed k/4 give k<sub>parallel</sub> = 0.001 m/s and k<sub>normal</sub> = 0.00064 m/s.</p>",
                    sources: [
                        { id: "SOIL136-00170", set: 14, question: 44 },
                        { id: "SOIL136-00041", set: 5, question: 36 }
                    ]
                },
                {
                    id: "soil-compressibility-indices",
                    title: "Compression, compressibility and indices",
                    html: "<p>Compression is volume reduction; compressibility is susceptibility to it. Consolidation is time-dependent compression associated with drainage and effective-stress change. Clay response involves particle rearrangement, pore-water drainage and electrochemical fabric effects, not solely expulsion of 'double-layer water'.</p>" +
                        "<table><thead><tr><th scope='col'>Index</th><th scope='col'>For σ′<sub>2</sub> &gt; σ′<sub>1</sub></th></tr></thead><tbody>" +
                        "<tr><th scope='row'>a<sub>v</sub></th><td>(e<sub>1</sub> − e<sub>2</sub>)/(σ′<sub>2</sub> − σ′<sub>1</sub>), inverse stress.</td></tr>" +
                        "<tr><th scope='row'>m<sub>v</sub></th><td>a<sub>v</sub>/(1 + e<sub>1</sub>), confined volume strain per stress.</td></tr>" +
                        "<tr><th scope='row'>Compression C<sub>c</sub></th><td>(e<sub>1</sub> − e<sub>2</sub>)/log<sub>10</sub>(σ′<sub>2</sub>/σ′<sub>1</sub>), dimensionless virgin-curve slope magnitude.</td></tr></tbody></table>" +
                        "<p>Virgin e–log σ′ is approximately straight beyond preconsolidation stress; recompression/swelling follows a different slope. This C<sub>c</sub> is not grain-size curvature. <strong>Illustrative extension:</strong> e changing 0.68 to 0.60 as σ′ rises 100 to 200 kPa gives a<sub>v</sub> = 0.0008 kPa<sup>−1</sup>, m<sub>v</sub> = 0.000476 kPa<sup>−1</sup> and C<sub>c</sub> = 0.266 if both points lie on the virgin branch.</p>",
                    sources: [
                        { id: "SOIL136-00023", set: 3, question: 44 },
                        { id: "SOIL136-00199", set: 16, question: 46 },
                        { id: "SOIL136-00200", set: 16, question: 47 },
                        { id: "SOIL136-00201", set: 16, question: 48 },
                        { id: "SOIL136-00202", set: 17, question: 34 }
                    ]
                },
                {
                    id: "compaction-water-content-energy",
                    title: "Compaction curve, water content and energy",
                    html: "<p>Compaction rapidly densifies partly saturated soil through mechanical rearrangement and predominantly air removal. It increases dry density and reduces e and n; it is not saturated consolidation by water drainage. Proctor testing plots dry density against water content for a specified effort; the peak defines maximum dry density and optimum moisture content, OMC.</p>" +
                        "<p>Use <strong>γ<sub>d</sub> = γ/(1 + w)</strong>, with fractional w. Initial wetting aids rearrangement; beyond OMC, added water occupies space without proportional densification. For the same soil, greater effort generally raises maximum dry density and lowers OMC.</p>" +
                        "<p><strong>Energy context:</strong> E = m<sub>rammer</sub>gh<sub>drop</sub>N<sub>blows</sub>N<sub>layers</sub>/V<sub>mould</sub>, in J/m<sup>3</sup> using kg, m and seconds; N<sub>blows</sub> is blows per layer. Standard and modified efforts are different references; their maximum densities cannot be interchanged. The zero-air-void bound γ<sub>d</sub> = Gγ<sub>w</sub>/(1 + wG) assumes S = 1; measured unsaturated points lie below it.</p>",
                    sources: [
                        { id: "SOIL136-00026", set: 3, question: 47 },
                        { id: "SOIL136-00191", set: 16, question: 38 },
                        { id: "SOIL136-00198", set: 16, question: 45 },
                        { id: "SOIL136-00203", set: 17, question: 35 },
                        { id: "SOIL136-00204", set: 17, question: 36 },
                        { id: "SOIL136-00205", set: 17, question: 37 },
                        { id: "SOIL136-00206", set: 17, question: 38 },
                        { id: "SOIL136-00207", set: 17, question: 39 },
                        { id: "SOIL136-00210", set: 17, question: 42 },
                        { id: "SOIL136-00211", set: 17, question: 43 },
                        { id: "SOIL136-00349", set: 27, question: 40 }
                    ]
                },
                {
                    id: "field-compaction-comparisons",
                    title: "Relative compaction, rollers and resulting properties",
                    html: "<p><strong>Relative compaction = 100γ<sub>d,field</sub>/γ<sub>d,max,lab</sub></strong> percent, using the same soil and specified laboratory effort. It is not granular relative density, which compares current void ratio with loosest/densest reference states. A percentage without its laboratory reference is incomplete.</p>" +
                        "<p>Sheepsfoot kneading commonly suits cohesive clay; vibration commonly suits granular sand. Roller weight, speed, passes, lift thickness and moisture all matter; no universal pass count follows. Compaction affects permeability, water absorption and swelling, but their direction and magnitude depend on fabric and wet/dry placement. Increased density alone does not guarantee reduced swelling or a specified field strength.</p>",
                    sources: [
                        { id: "SOIL136-00019", set: 3, question: 40 },
                        { id: "SOIL136-00021", set: 3, question: 42 },
                        { id: "SOIL136-00030", set: 4, question: 38 },
                        { id: "SOIL136-00208", set: 17, question: 40 },
                        { id: "SOIL136-00209", set: 17, question: 41 },
                        { id: "SOIL136-00350", set: 27, question: 41 }
                    ]
                },
                {
                    id: "footing-contact-stress-assumptions",
                    title: "Footing contact pressure and elastic stress assumptions",
                    html: "<p>Contact-pressure distribution depends on footing rigidity, loading, soil type and condition. A flexible footing under uniform applied loading can transmit uniform pressure while settling unevenly; a rigid footing enforces compatible settlement and can redistribute pressure. 'Cohesive soil' alone cannot specify a universal nonlinear diagram.</p>" +
                        "<p>Boussinesq's idealization is a homogeneous, isotropic, linear-elastic <strong>semi-infinite half-space</strong> below a level surface, not an infinite solid without a boundary. <strong>Syllabus context:</strong> for a vertical surface point load P, Δσ<sub>z</sub> = [3P/(2πz<sup>2</sup>)][1 + (r/z)<sup>2</sup>]<sup>−5/2</sup>, z &gt; 0. P in kN and radial distance r/depth z in metres give kPa; this is a stress increment, not bearing capacity.</p>",
                    sources: [
                        { id: "SOIL136-00398", set: 30, question: 47 },
                        { id: "SOIL136-00401", set: 31, question: 35 },
                        { id: "TRAN808-00310", set: 29, question: 82 }
                    ]
                },
                {
                    id: "electro-osmosis-principle",
                    title: "Electro-osmosis in fine soils",
                    html: "<p>Where low hydraulic conductivity makes gravity drainage slow, an applied electric field can move pore water through fine cohesive soil: <strong>electro-osmosis</strong>. Water commonly moves toward the cathode in negatively charged clays, subject to pore chemistry. This is electrical driving, not simply a larger Darcy hydraulic gradient.</p>" +
                        "<p>The malformed 'Leasegrande' apparently intends <strong>Ludwig Casagrande</strong>, associated with geotechnical electro-osmotic dewatering, not Arthur Casagrande's classification work. Applicability depends on chemistry, electrodes and energy requirements; the MCQ does not justify universal method selection, electrode spacing or operating voltage.</p>",
                    sources: [
                        { id: "SOIL136-00176", set: 15, question: 36 },
                        { id: "SOIL136-00181", set: 15, question: 41 },
                        { id: "SOIL136-00182", set: 15, question: 42 }
                    ]
                }
            ],
            gaps: [
                "No assigned drawn flow net, anisotropic or layered-conductivity numerical problem is supplied; transformed geometry and layering examples are labelled syllabus extensions.",
                "Capillary rise is qualitative in the bank; no pore-size/contact-angle data establish an actual rise height or unsaturated effective-stress parameter.",
                "No complete compression curve or Proctor dataset establishes fitted indices, rammer protocol, field acceptance targets or settlement-time predictions; no site-specific prescription is inferred."
            ],
            cautions: [
                {
                    html: "<p><strong>Contradictory groundwater key:</strong> SOIL136-00036 keys a decrease for rise above ground, but its explanation and SOIL136-00159 correctly give equal increases in σ and u after saturation to ground level. A rise from depth within soil is a different case.</p>",
                    sources: [
                        { id: "SOIL136-00036", set: 4, question: 44 },
                        { id: "SOIL136-00037", set: 4, question: 45 },
                        { id: "SOIL136-00159", set: 14, question: 34 }
                    ]
                },
                {
                    html: "<p><strong>Quicksand and dimensions:</strong> upward seepage is not itself the critical condition. SOIL136-00165 equates 'pressure' with unit weight; the valid balance is force per volume iγ<sub>w</sub> = γ′. Critical gradient is not universally 1; required head also depends on thickness and boundary loading.</p>",
                    sources: [
                        { id: "SOIL136-00024", set: 3, question: 45 },
                        { id: "SOIL136-00042", set: 5, question: 37 },
                        { id: "SOIL136-00107", set: 10, question: 36 },
                        { id: "SOIL136-00165", set: 14, question: 39 }
                    ]
                },
                {
                    html: "<p><strong>Flow-net limitations:</strong> SOIL136-00173 has identical original options and undefined 'ah/b'; use defined head loss and exit length instead. Perpendicular flow assumes isotropy. A flow net gives pore pressure during seepage, not an everywhere-hydrostatic distribution; force proportionality to head loss assumes fixed geometry.</p>",
                    sources: [
                        { id: "SOIL136-00029", set: 4, question: 37 },
                        { id: "SOIL136-00167", set: 14, question: 41 },
                        { id: "SOIL136-00173", set: 14, question: 47 },
                        { id: "SOIL136-00184", set: 15, question: 44 },
                        { id: "SOIL136-00185", set: 1, question: 39 },
                        { id: "SOIL136-00215", set: 17, question: 46 }
                    ]
                },
                {
                    html: "<p><strong>Compressibility terminology:</strong> SOIL136-00023 blurs a<sub>v</sub> with m<sub>v</sub>: void-ratio change per stress is not volume strain per stress until divided by 1 + e. Clay compression is not exclusively loss of double-layer water.</p>",
                    sources: [
                        { id: "SOIL136-00023", set: 3, question: 44 },
                        { id: "SOIL136-00199", set: 16, question: 46 },
                        { id: "SOIL136-00201", set: 16, question: 48 }
                    ]
                },
                {
                    html: "<p><strong>Malformed compaction items:</strong> SOIL136-00204's stem says dry density decreases; the reverse is intended. SOIL136-00206 repeats 'increasing dry density' instead of pairing it with decreasing porosity. Compaction does not guarantee suction or reduced swelling; saturated contractive loading can increase pore pressure. SOIL136-00260 omits saturation and drainage: prevented dilation during undrained shear can produce negative excess pressure, so 'Compaction' is not a unique general explanation.</p>",
                    sources: [
                        { id: "SOIL136-00204", set: 17, question: 36 },
                        { id: "SOIL136-00206", set: 17, question: 38 },
                        { id: "SOIL136-00260", set: 21, question: 35 },
                        { id: "SOIL136-00350", set: 27, question: 41 }
                    ]
                },
                {
                    html: "<p><strong>Missing footing conditions:</strong> SOIL136-00401 does not specify rigidity or loading; its explanation's general claim about flexible footings is inaccurate. Soil type alone cannot determine the contact-pressure shape. Original bank records remain unchanged.</p>",
                    sources: [
                        { id: "SOIL136-00398", set: 30, question: 47 },
                        { id: "SOIL136-00401", set: 31, question: 35 }
                    ]
                }
            ]
        }
    });
})();