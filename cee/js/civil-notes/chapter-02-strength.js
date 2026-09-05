(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0203: {
            code: "ACiE0203",
            questionCount: 69,
            blocks: [
                {
                    id: "strength-and-soil-state",
                    title: "Shear strength and the state of the soil",
                    html: "<p><strong>Shear strength</strong> is the limiting shear stress a soil can resist, not a force. Sliding friction, interlocking and bonding contribute; failure can appear as a sinking footing, an embankment slide or a moving earth wedge.</p>" +
                        "<p>For saturated soil, effective normal stress is σ′<sub>n</sub> = σ<sub>n</sub> − u. Clean, uncemented sand has approximately zero effective cohesion. At comparable confinement, denser granular soil generally has greater peak resistance. Wetting can remove suction or raise pore pressure and weaken soil, but neither water content nor void ratio alone determines strength. Loading rate matters through drainage and material response.</p>" +
                        "<p>Specify confinement, drainage, stress history and whether resistance is peak or large-displacement. Dense sand can lose its interlocking contribution after peak; transferring that peak strength to an already sheared surface can overestimate available resistance.</p>",
                    sources: [
                        { id: "SOIL136-00032", set: 4, question: 40 },
                        { id: "SOIL136-00034", set: 4, question: 42 },
                        { id: "SOIL136-00045", set: 5, question: 40 },
                        { id: "SOIL136-00096", set: 9, question: 38 },
                        { id: "SOIL136-00097", set: 9, question: 39 },
                        { id: "SOIL136-00099", set: 1, question: 36 },
                        { id: "SOIL136-00218", set: 18, question: 37 },
                        { id: "SOIL136-00242", set: 19, question: 45 },
                        { id: "SOIL136-00243", set: 19, question: 46 },
                        { id: "SOIL136-00246", set: 20, question: 37 }
                    ]
                },
                {
                    id: "principal-stresses-and-mohr-circle",
                    title: "Principal planes and Mohr's circle",
                    html: "<p>Take compression as positive and order principal stresses σ<sub>1</sub> ≥ σ<sub>2</sub> ≥ σ<sub>3</sub>. Principal planes carry zero shear; their normals give the principal stress directions. A normal stress on an arbitrary plane is not necessarily principal.</p>" +
                        "<table><thead><tr><th scope='col'>Mohr construction</th><th scope='col'>Meaning</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Axes</th><td>Horizontal: normal stress; vertical: shear stress.</td></tr>" +
                        "<tr><th scope='row'>Centre C</th><td>(σ<sub>1</sub> + σ<sub>3</sub>)/2.</td></tr>" +
                        "<tr><th scope='row'>Radius R</th><td>(σ<sub>1</sub> − σ<sub>3</sub>)/2 = maximum shear stress.</td></tr></tbody></table>" +
                        "<p>The horizontal intercepts are σ<sub>3</sub> and σ<sub>1</sub>; the circle transforms one stress state, not a collection of failure tests.</p>",
                    sources: [
                        { id: "SOIL136-00047", set: 5, question: 42 },
                        { id: "SOIL136-00100", set: 9, question: 41 },
                        { id: "SOIL136-00244", set: 20, question: 35 },
                        { id: "SOIL136-00247", set: 20, question: 38 },
                        { id: "SOIL136-00248", set: 20, question: 39 },
                        { id: "SOIL136-00249", set: 20, question: 40 },
                        { id: "SOIL136-00250", set: 1, question: 42 }
                    ]
                },
                {
                    id: "plane-angles-and-transformed-stresses",
                    title: "Define the angle before transforming stresses",
                    html: "<p>Let θ be the angle between the <strong>plane normal</strong> and the σ<sub>1</sub> direction. Then σ<sub>n</sub> = C + R cos(2θ), and |τ| = R|sin(2θ)|. A physical rotation θ corresponds to <strong>2θ on Mohr's circle</strong>; the plotted rotation direction depends on the shear-sign convention. If α instead measures the plane itself from the σ<sub>1</sub> direction, use θ = 90° − α.</p>" +
                        "<p><strong>Illustrative extension of the dry-test numbers:</strong> cell pressure 150 kPa plus deviator stress 100 kPa gives σ<sub>1</sub> = 250 kPa, σ<sub>3</sub> = 150 kPa, C = 200 and R = 50 kPa. At an added θ = 30°, σ<sub>n</sub> = 225 kPa and |τ| = 43.30 kPa. At θ = 45°, |τ| reaches 50 kPa.</p>",
                    sources: [
                        { id: "SOIL136-00051", set: 5, question: 46 },
                        { id: "SOIL136-00052", set: 5, question: 47 },
                        { id: "SOIL136-00251", set: 20, question: 41 }
                    ]
                },
                {
                    id: "failure-envelope-and-principal-relation",
                    title: "Mohr-Coulomb failure and principal stresses",
                    html: "<p>The effective-stress envelope is <strong>τ<sub>f</sub> = c′ + σ′<sub>n</sub> tanφ′</strong>. Its intercept is c′ and slope tanφ′. Tangency of a failure circle gives σ′<sub>1</sub> = N<sub>φ</sub>σ′<sub>3</sub> + 2c′√N<sub>φ</sub>, where N<sub>φ</sub> = tan<sup>2</sup>(45° + φ′/2).</p>" +
                        "<p>The same principal-stress relation in total stresses requires matching <strong>total-stress</strong> c and φ. Subtracting u from both principal stresses shifts the circle without changing its radius. Ideal failure planes make 45° + φ′/2 with the major principal plane, not its normal. They coincide with maximum-shear planes only when φ′ = 0.</p>" +
                        "<p><strong>Bank calculation:</strong> for the preceding dry specimen, additionally assuming c′ = 0 gives sinφ′ = (250 − 150)/(250 + 150) = 0.25, hence φ′ = <strong>14.48°</strong>. Without that cohesion assumption, one failure circle cannot determine both parameters. The linear envelope is a fitted model; neglect of σ<sub>2</sub> is a model limitation, not a universal material law.</p>" +
                        "<p>Under that assumption, the failure-plane stresses are σ′<sub>nf</sub> = C − R sinφ′ = <strong>187.5 kPa</strong> and τ<sub>f</sub> = R cosφ′ = <strong>48.41 kPa</strong>. Maximum shear, 50 kPa, acts on a different plane.</p>",
                    sources: [
                        { id: "SOIL136-00051", set: 5, question: 46 },
                        { id: "SOIL136-00058", set: 6, question: 39 },
                        { id: "SOIL136-00098", set: 9, question: 40 },
                        { id: "SOIL136-00101", set: 9, question: 42 },
                        { id: "SOIL136-00102", set: 9, question: 43 },
                        { id: "SOIL136-00225", set: 18, question: 43 },
                        { id: "SOIL136-00245", set: 20, question: 36 },
                        { id: "SOIL136-00254", set: 20, question: 44 },
                        { id: "SOIL136-00255", set: 20, question: 45 },
                        { id: "SOIL136-00256", set: 20, question: 46 },
                        { id: "SOIL136-00257", set: 20, question: 47 },
                        { id: "SOIL136-00305", set: 24, question: 39 }
                    ]
                },
                {
                    id: "drainage-and-test-selection",
                    title: "UU, CU and CD are drainage histories",
                    html: "<table><thead><tr><th scope='col'>Test</th><th scope='col'>Before and during shear</th><th scope='col'>Interpretation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>UU: unconsolidated-undrained</th><td>No drainage in either stage.</td><td>Short-term total-stress strength for the sampled state.</td></tr>" +
                        "<tr><th scope='row'>CU: consolidated-undrained</th><td>Consolidate with drainage; close drainage for shear.</td><td>Total strength; effective parameters if u is measured.</td></tr>" +
                        "<tr><th scope='row'>CD: consolidated-drained</th><td>Drain in both stages.</td><td>Effective parameters with negligible excess pore pressure.</td></tr></tbody></table>" +
                        "<p>Comparable saturated clay specimens tested UU at unchanged water content/history often give φ<sub>u</sub> ≈ 0 and c<sub>u</sub> = s<sub>u</sub>. Consolidation before CU changes strength; undrained does not universally mean φ = 0. Drained does not mean dry or zero hydrostatic u. A slow test must permit drainage, not merely last a prescribed number of days.</p>" +
                        "<p>Reproduce field drainage during the loading period. Soil name alone cannot select the stress basis; permeability, drainage distance and loading duration matter together.</p>",
                    sources: [
                        { id: "SOIL136-00048", set: 5, question: 43 },
                        { id: "SOIL136-00220", set: 1, question: 41 },
                        { id: "SOIL136-00221", set: 18, question: 39 },
                        { id: "SOIL136-00226", set: 18, question: 44 },
                        { id: "SOIL136-00230", set: 18, question: 48 },
                        { id: "SOIL136-00232", set: 19, question: 35 }
                    ]
                },
                {
                    id: "triaxial-stresses-and-pore-pressure",
                    title: "Triaxial control and pore-pressure evidence",
                    html: "<p>Conventional triaxial compression controls cell pressure σ<sub>3</sub> = σ<sub>2</sub> and axial deviator stress σ<sub>1</sub> − σ<sub>3</sub>. Drainage control and a relatively well-defined stress state are advantages; the failure plane is not imposed by a split box. Conventional apparatus does not independently control all three principal stresses.</p>" +
                        "<p>Measured u permits effective-stress CU failure circles; unmeasured u prevents that conversion. Skempton's incremental expression is Δu = B[Δσ<sub>3</sub> + A(Δσ<sub>1</sub> − Δσ<sub>3</sub>)]. B approaches one for saturated soil with a compressible skeleton. Parameters depend on saturation, soil state, stress path, fluid compressibility and temperature; A is not a universal constant.</p>",
                    sources: [
                        { id: "SOIL136-00222", set: 18, question: 40 },
                        { id: "SOIL136-00223", set: 18, question: 41 },
                        { id: "SOIL136-00224", set: 18, question: 42 },
                        { id: "SOIL136-00258", set: 20, question: 48 },
                        { id: "SOIL136-00259", set: 21, question: 34 },
                        { id: "SOIL136-00261", set: 21, question: 36 },
                        { id: "SOIL136-00262", set: 21, question: 37 }
                    ]
                },
                {
                    id: "direct-shear-and-imposed-plane",
                    title: "Direct shear: simple apparatus, imposed failure plane",
                    html: "<p>A shear box displaces one half relative to the other under normal load. Nominal normal and shear stresses are the respective forces divided by the current overlap area. Edge concentrations make stresses nonuniform, and the predetermined plane may not be the weakest orientation.</p>" +
                        "<p>Strain control describes displacement loading; direct shear is not the same apparatus as simple shear. Drained sand testing is practical. Ordinary boxes cannot reliably measure pore pressure or guarantee undrained clay conditions: impermeable plain grids and fast shearing alone are insufficient. Drainage rate and changing area require attention.</p>",
                    sources: [
                        { id: "SOIL136-00227", set: 18, question: 45 },
                        { id: "SOIL136-00228", set: 18, question: 46 },
                        { id: "SOIL136-00229", set: 18, question: 47 },
                        { id: "SOIL136-00231", set: 19, question: 34 },
                        { id: "SOIL136-00233", set: 19, question: 36 },
                        { id: "SOIL136-00234", set: 19, question: 37 }
                    ]
                },
                {
                    id: "unconfined-vane-and-sensitivity",
                    title: "Unconfined compression, vane strength and sensitivity",
                    html: "<p>Unconfined compression uses a self-supporting cohesive specimen with zero lateral total pressure. Under the saturated, undrained φ<sub>u</sub> = 0 idealization, <strong>s<sub>u</sub> = q<sub>u</sub>/2</strong>. It is a quick option, not the universally preferred test for every saturated clay.</p>" +
                        "<p>For a fully embedded vane of diameter D and height H, assuming uniform strength on its cylindrical surface and both ends, <strong>s<sub>u</sub> = T/[πD<sup>2</sup>(H/2 + D/6)]</strong>. T is calibrated failure torque after appropriate rod-friction correction; an angular reading alone is not torque or φ. Metres and N m give strength in Pa.</p>" +
                        "<p>Sensitivity S<sub>t</sub> = intact strength/remoulded strength compares matched water content and test conditions. Vane testing suits soft fine-grained soils; sand, roots, peat fibres and disturbance can invalidate the simple interpretation.</p>",
                    sources: [
                        { id: "SOIL136-00044", set: 5, question: 39 },
                        { id: "SOIL136-00050", set: 5, question: 45 },
                        { id: "SOIL136-00219", set: 18, question: 38 },
                        { id: "TRAN808-00177", set: 17, question: 86 }
                    ]
                },
                {
                    id: "slope-geometry-and-failure-types",
                    title: "Finite slopes, infinite idealization and slip mechanisms",
                    html: "<p>An infinite slope idealizes a long, uniform layer with negligible end effects relative to slip depth. Real cuts, dams and embankments are finite, although a shallow local slide may admit that approximation.</p>" +
                        "<p>Rotational slips can exit the face, pass through the toe, or extend below it as base failures. Weak layers also permit planar translational sliding: curved failure is not compulsory. Gravity supplies driving shear; loading, toe erosion and groundwater changes alter stability. In a rotational slide the head commonly drops while the toe moves outward and upward.</p>",
                    sources: [
                        { id: "SOIL136-00189", set: 16, question: 36 },
                        { id: "SOIL136-00190", set: 16, question: 37 },
                        { id: "SOIL136-00235", set: 19, question: 38 },
                        { id: "SOIL136-00236", set: 19, question: 39 },
                        { id: "SOIL136-00237", set: 19, question: 40 },
                        { id: "SOIL136-00238", set: 19, question: 41 }
                    ]
                },
                {
                    id: "safety-factor-definitions",
                    title: "Available resistance versus mobilized resistance",
                    html: "<p>Locally, F = τ<sub>f</sub>/τ<sub>mobilized</sub>. A finite-slope analysis compares integrated resistance with driving forces or moments over trial surfaces; the critical surface has the lowest F.</p>" +
                        "<p>For uniform strength reduction, c<sub>m</sub> = c/F and tanφ<sub>m</sub> = tanφ/F. Mobilized cohesion is not the whole shear strength of frictional soil. The separate height factor F<sub>H</sub> = H<sub>critical</sub>/H concerns specified geometry and conditions; it is not automatically interchangeable with a shear-strength factor.</p>",
                    sources: [
                        { id: "SOIL136-00039", set: 4, question: 47 },
                        { id: "SOIL136-00241", set: 19, question: 44 },
                        { id: "SOIL136-00252", set: 20, question: 42 },
                        { id: "SOIL136-00253", set: 20, question: 43 }
                    ]
                },
                {
                    id: "infinite-slope-calculations",
                    title: "Infinite-slope calculations and dry-slope examples",
                    html: "<p>For a uniform slope at angle β, with vertical slip depth z and bulk unit weight γ, σ<sub>n</sub> = γz cos<sup>2</sup>β and τ = γz sinβ cosβ. The drained factor is <strong>F = [c′ + (γz cos<sup>2</sup>β − u)tanφ′]/(γz sinβ cosβ)</strong>.</p>" +
                        "<p>Dry, cohesionless soil gives F = tanφ′/tanβ. Using the bank's φ′ = 36° and F = 1.5, β = arctan(tan36°/1.5) = <strong>25.84°</strong>. Its β = 12°, φ′ = 30° example gives <strong>F = 2.716</strong>. At limiting equilibrium F = 1, β = φ′ in this idealization; an observed angle of repose is not a universal design friction angle.</p>" +
                        "<p>The offered 26° is an exam approximation: rounding the limiting angle upward slightly reduces the achieved factor.</p>",
                    sources: [
                        { id: "SOIL136-00062", set: 6, question: 43 },
                        { id: "SOIL136-00090", set: 8, question: 45 },
                        { id: "SOIL136-00239", set: 19, question: 42 },
                        { id: "SOIL136-00240", set: 19, question: 43 },
                        { id: "SOIL136-00241", set: 19, question: 44 }
                    ]
                },
                {
                    id: "seepage-and-undrained-slope-safety",
                    title: "Seepage and short-term undrained stability",
                    html: "<p>For cohesionless soil saturated to the surface with steady slope-parallel seepage, γ′ = γ<sub>sat</sub> − γ<sub>w</sub> gives <strong>F = (γ′/γ<sub>sat</sub>)tanφ′/tanβ</strong>. The dry factor is approximately halved only when γ<sub>sat</sub> ≈ 2γ<sub>w</sub>, with other assumptions unchanged. Seepage force per unit volume is iγ<sub>w</sub> along flow; do not count it again in equilibrium already including total weight and pore pressures.</p>" +
                        "<p>For the corresponding uniform short-term φ<sub>u</sub> = 0 model, <strong>F = s<sub>u</sub>/(γ<sub>sat</sub>z sinβ cosβ)</strong>. Do not subtract u again from s<sub>u</sub>. Rapid drawdown and transient infiltration need their actual pore-pressure distributions, not the steady-seepage shortcut.</p>",
                    sources: [
                        { id: "SOIL136-00031", set: 4, question: 39 },
                        { id: "SOIL136-00032", set: 4, question: 40 },
                        { id: "SOIL136-00048", set: 5, question: 43 },
                        { id: "SOIL136-00235", set: 19, question: 38 }
                    ]
                }
            ],
            gaps: [
                "The assigned bank has no independent worked stress-transformation problem or multi-specimen failure-envelope dataset; the added plane rotation is explicitly illustrative.",
                "Finite-slope slice calculations, stability charts, transient groundwater and rapid-drawdown datasets are absent; concepts here do not establish site design safety.",
                "Complete shear-test procedures, calibration, specimen acceptance and pore-pressure records are not supplied. Applicable methods and representative testing remain necessary."
            ],
            cautions: [
                {
                    html: "<p><strong>Wrong numerical key:</strong> the dry triaxial item keys 30° despite sinφ′ = 0.25 under c′ = 0. That gives 14.48°, which is not offered.</p>",
                    sources: [{ id: "SOIL136-00051", set: 5, question: 46 }]
                },
                {
                    html: "<p><strong>Cohesion terminology:</strong> none of the offered rankings properly treats clean dense sand as approximately cohesionless. C<sub>m</sub> means mobilized cohesion, not general shear strength.</p>",
                    sources: [
                        { id: "SOIL136-00034", set: 4, question: 42 },
                        { id: "SOIL136-00039", set: 4, question: 47 }
                    ]
                },
                {
                    html: "<p><strong>UU wording is incorrect:</strong> total σ<sub>3</sub> equals cell pressure and σ<sub>1</sub> includes it. Approximate confinement independence concerns undrained strength for comparable UU specimens, not those total stresses or CU-consolidated specimens.</p>",
                    sources: [{ id: "SOIL136-00220", set: 1, question: 41 }]
                },
                {
                    html: "<p><strong>Angle and envelope traps:</strong> 90° on the circle means 45° physically; orthogonal planes are 180° apart on it. Merely having φ &lt; 90° does not prove an envelope is straight.</p>",
                    sources: [
                        { id: "SOIL136-00052", set: 5, question: 47 },
                        { id: "SOIL136-00256", set: 20, question: 46 }
                    ]
                },
                {
                    html: "<p><strong>Test descriptions:</strong> the keyed three CU methods are an unspecified classification; complex stresses are not themselves a triaxial advantage. The bank's 5–7-day drained-clay duration is not a verified procedure.</p>",
                    sources: [
                        { id: "SOIL136-00221", set: 18, question: 39 },
                        { id: "SOIL136-00232", set: 19, question: 35 },
                        { id: "SOIL136-00262", set: 21, question: 37 }
                    ]
                },
                {
                    html: "<p><strong>Slope wording:</strong> the keyed downward toe movement conflicts with the rotational explanation. The malformed 360/260 numerals mean 36°/26°, not full revolutions.</p>",
                    sources: [
                        { id: "SOIL136-00190", set: 16, question: 37 },
                        { id: "SOIL136-00090", set: 8, question: 45 }
                    ]
                }
            ]
        },
        ACiE0204: {
            code: "ACiE0204",
            questionCount: 90,
            blocks: [
                {
                    id: "investigation-planning",
                    title: "Plan exploration around the engineering decision",
                    html: "<p>Begin with project loads, dimensions, construction sequence and tolerable movement. A walkover records exposures, old excavations, escarpments, drainage, flood marks and instability. Topography, climate and access influence investigation methods.</p>" +
                        "<p>General exploration establishes likely strata, rock depth and groundwater; detailed exploration resolves variability and design parameters. Combine observations, borings, soundings and groundwater investigation. Locate boreholes around important loads and changing ground conditions rather than imposing one universal grid. Structural loading is a design input to obtain, not a soil property measured by drilling.</p>",
                    sources: [
                        { id: "SOIL136-00263", set: 21, question: 38 },
                        { id: "SOIL136-00264", set: 21, question: 39 },
                        { id: "SOIL136-00265", set: 21, question: 40 },
                        { id: "SOIL136-00267", set: 21, question: 42 },
                        { id: "SOIL136-00268", set: 21, question: 43 },
                        { id: "SOIL136-00270", set: 21, question: 45 },
                        { id: "SOIL136-00272", set: 22, question: 35 }
                    ]
                },
                {
                    id: "significant-depth-and-investigation-limits",
                    title: "Significant depth is not a fixed drilling length",
                    html: "<p>Investigate through layers where loading could cause significant settlement or shear failure, including weaker material below an apparent bearing layer. Foundation size, loading, ground variability and groundwater govern depth; the boring method merely provides access.</p>" +
                        "<p>The bank's 1.5B footing depth, 40 m pile exploration and 10–20% stress-increase criterion are preliminary heuristics, not stopping rules. Piles require investigation beneath their proposed toes; grouped foundations can influence deeper ground than isolated footings.</p>",
                    sources: [
                        { id: "SOIL136-00056", set: 6, question: 37 },
                        { id: "SOIL136-00266", set: 21, question: 41 },
                        { id: "SOIL136-00269", set: 21, question: 44 },
                        { id: "SOIL136-00276", set: 22, question: 39 },
                        { id: "SOIL136-00282", set: 22, question: 45 },
                        { id: "SOIL136-00283", set: 22, question: 46 }
                    ]
                },
                {
                    id: "exploration-method-comparison",
                    title: "Choose an exploration method for the ground",
                    html: "<table><thead><tr><th scope='col'>Method</th><th scope='col'>Use and limitation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Pits and trenches</th><td>Direct shallow inspection and sampling; require safe support and groundwater control.</td></tr>" +
                        "<tr><th scope='row'>Auger and shell</th><td>Useful in suitable soils, particularly soft-to-stiff clays. Unsupported loose saturated sands may collapse; specialized equipment changes suitability.</td></tr>" +
                        "<tr><th scope='row'>Wash or percussion boring</th><td>Advances through appropriate deposits; returned cuttings are disturbed and can mix strata.</td></tr>" +
                        "<tr><th scope='row'>Rotary drilling</th><td>Rotating tools and circulating fluid remove cuttings; bentonite slurry can support the hole, but affects samples and water observations.</td></tr></tbody></table>" +
                        "<p>The bank's 25 m hand-rig capability is equipment- and ground-dependent, not a universal limit.</p>",
                    sources: [
                        { id: "SOIL136-00274", set: 22, question: 37 },
                        { id: "SOIL136-00275", set: 22, question: 38 },
                        { id: "SOIL136-00277", set: 22, question: 40 },
                        { id: "SOIL136-00278", set: 22, question: 41 },
                        { id: "SOIL136-00279", set: 22, question: 42 }
                    ]
                },
                {
                    id: "sample-quality-and-area-ratio",
                    title: "Sampling quality, piston samplers and area ratio",
                    html: "<p>A disturbed sample may preserve composition for classification but not natural fabric. A high-quality undisturbed sample seeks to retain structure, density and moisture; stress relief means perfect preservation is impossible. Seal, identify, orient and protect samples during transport.</p>" +
                        "<p>Piston samplers help recover very soft or sensitive clay with reduced entry disturbance. Thin walls reduce displacement: <strong>A<sub>r</sub> = 100(D<sub>o</sub><sup>2</sup> − D<sub>i</sub><sup>2</sup>)/D<sub>i</sub><sup>2</sup></strong>, using outside and inside cutting-edge diameters. A low area ratio, often targeted near or below 10%, is desirable but not proof of quality. Recovery, clearance, pushing technique and handling also matter.</p>",
                    sources: [
                        { id: "SOIL136-00054", set: 6, question: 35 },
                        { id: "SOIL136-00084", set: 8, question: 39 },
                        { id: "SOIL136-00280", set: 22, question: 43 },
                        { id: "SOIL136-00281", set: 22, question: 44 }
                    ]
                },
                {
                    id: "spt-procedure-and-raw-count",
                    title: "SPT: distinguish the seating drive from N",
                    html: "<p>The Standard Penetration Test drives a split-spoon sampler and recovers a disturbed sample. For the bank's complete 450 mm drive, discard the first 150 mm seating count; <strong>N is the sum for the second and third 150 mm</strong>.</p>" +
                        "<p>Soundings help infer density, resistance and changes of stratum through correlations. Record individual increments, achieved penetration and refusal, not a fabricated full-drive N. A hard response may be a boulder rather than continuous competent ground. Test spacing must resolve strata; 750 mm is not universally mandatory.</p>",
                    sources: [
                        { id: "SOIL136-00271", set: 21, question: 46 },
                        { id: "SOIL136-00323", set: 25, question: 42 },
                        { id: "SOIL136-00324", set: 25, question: 43 },
                        { id: "SOIL136-00327", set: 25, question: 46 },
                        { id: "SOIL136-00328", set: 26, question: 35 },
                        { id: "SOIL136-00435", set: 33, question: 40 }
                    ]
                },
                {
                    id: "spt-corrections-and-conditions",
                    title: "Energy, overburden and conditional dilatancy corrections",
                    html: "<p><strong>N<sub>60</sub> = N(ER/60)C<sub>B</sub>C<sub>R</sub>C<sub>S</sub></strong>, with measured energy ratio ER expressed in percent and the chosen borehole, rod and sampler factors. Effective-overburden normalization then gives (N<sub>1</sub>)<sub>60</sub> = C<sub>N</sub>N<sub>60</sub>. State the reference stress, correlation and caps; different authors' overburden corrections are alternatives, not cumulative multipliers.</p>" +
                        "<p>The traditional dilatancy correction <strong>N<sub>d</sub> = 15 + 0.5(N<sub>c</sub> − 15)</strong> applies only to saturated fine sands or nonplastic silts when the specified overburden-corrected N<sub>c</sub> exceeds 15. It is not a blanket submergence correction, a CPT correction, or an automatic extra step in every modern correlation.</p>",
                    sources: [
                        { id: "SOIL136-00325", set: 25, question: 44 },
                        { id: "SOIL136-00326", set: 25, question: 45 }
                    ]
                },
                {
                    id: "cone-penetration-interpretation",
                    title: "CPT is not an SPT blow count",
                    html: "<p>A static cone records penetration resistance, commonly tip resistance q<sub>c</sub> and sleeve friction; CPTu additionally measures pore pressure. It gives a detailed profile but no routine split-spoon sample. Sands and silts are important applications, not its exclusive scope.</p>" +
                        "<p>Convert resistance to engineering parameters only through appropriate correlations. The bank's sandy-silt value of 5, interpreted there as MPa, is not a soil constant: density, confinement, drainage and equipment influence the result.</p>",
                    sources: [
                        { id: "SOIL136-00323", set: 25, question: 42 },
                        { id: "SOIL136-00329", set: 26, question: 36 },
                        { id: "SOIL136-00330", set: 1, question: 45 }
                    ]
                },
                {
                    id: "plate-load-field-test",
                    title: "Plate loading: measured response and scale limitations",
                    html: "<p>At proposed foundation level, load a rigid bearing plate incrementally with a hydraulic jack reacting against kentledge or an anchored truss. Measure settlement with sensitive gauges on an independent datum frame and record time as well as load. Neither reaction arrangement is universally preferable.</p>" +
                        "<p>Square and circular plates are common; the bank quotes 300–750 mm sizes. Its 70 g/cm<sup>2</sup> seating pressure means gram-force per area: <strong>6.865 kPa</strong>, approximately 7 kPa. Geometry, seating and load stages require the applicable method. A small plate samples a shallower influence zone; short-duration results cannot establish full-foundation settlement or long-term clay consolidation.</p>",
                    sources: [
                        { id: "SOIL136-00376", set: 29, question: 38 },
                        { id: "SOIL136-00377", set: 29, question: 39 },
                        { id: "SOIL136-00378", set: 29, question: 40 },
                        { id: "SOIL136-00379", set: 29, question: 41 },
                        { id: "SOIL136-00380", set: 29, question: 42 },
                        { id: "SOIL136-00381", set: 29, question: 43 },
                        { id: "SOIL136-00382", set: 29, question: 44 },
                        { id: "SOIL136-00383", set: 29, question: 45 },
                        { id: "SOIL136-00384", set: 29, question: 46 },
                        { id: "SOIL136-00385", set: 30, question: 35 }
                    ]
                },
                {
                    id: "boring-logs-and-investigation-report",
                    title: "Turn field observations into a defensible ground model",
                    html: "<p><strong>Syllabus context:</strong> a boring log records location/elevation, depth datum, strata boundaries, descriptions, sample type/recovery, test depths and raw readings. Groundwater observations need dates, stabilization time and drilling-fluid context.</p>" +
                        "<p>The report separates observations from interpretation: correlate logs into sections, document permeability/strength testing, present corrected values with methods, and explain chosen parameters, groundwater scenarios and uncertainty. Include foundation/retaining recommendations, construction risks and further investigation needed. Similar soil names do not prove identical engineering behaviour between boreholes.</p>",
                    sources: [
                        { id: "SOIL136-00265", set: 21, question: 40 },
                        { id: "SOIL136-00268", set: 21, question: 43 },
                        { id: "SOIL136-00273", set: 22, question: 36 }
                    ]
                },
                {
                    id: "earth-pressure-states-and-wall-movement",
                    title: "Movement determines the lateral-pressure state",
                    html: "<p>For level, homogeneous cohesionless backfill, use K = σ′<sub>h</sub>/σ′<sub>v</sub>.</p>" +
                        "<table><thead><tr><th scope='col'>State</th><th scope='col'>Wall movement</th><th scope='col'>Stress interpretation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Active</th><td>Away from retained soil.</td><td>Minimum lateral pressure; vertical stress is major.</td></tr>" +
                        "<tr><th scope='row'>At rest</th><td>No lateral strain.</td><td>Constrained state, not necessarily failure.</td></tr>" +
                        "<tr><th scope='row'>Passive</th><td>Into the soil.</td><td>Maximum resistance; horizontal stress is major.</td></tr></tbody></table>" +
                        "<p>Vertical principal stress acts on a horizontal plane. Full passive resistance generally requires more movement than active pressure. The usual K<sub>a</sub> &lt; K<sub>0</sub> &lt; K<sub>p</sub> comparison assumes compatible ground/history; do not select active pressure for a restrained basement simply because it is smaller.</p>",
                    sources: [
                        { id: "SOIL136-00020", set: 3, question: 41 },
                        { id: "SOIL136-00308", set: 24, question: 42 },
                        { id: "SOIL136-00311", set: 24, question: 45 },
                        { id: "SOIL136-00315", set: 25, question: 34 },
                        { id: "SOIL136-00316", set: 25, question: 35 },
                        { id: "SOIL136-00317", set: 25, question: 36 }
                    ]
                },
                {
                    id: "rankine-coefficients-and-assumptions",
                    title: "Rankine coefficients and their assumptions",
                    html: "<p>The elementary Rankine solution assumes homogeneous soil, level backfill and a smooth vertical boundary at limiting plastic equilibrium. For cohesionless soil:</p>" +
                        "<p><strong>K<sub>a</sub> = (1 − sinφ′)/(1 + sinφ′) = tan<sup>2</sup>(45° − φ′/2)</strong>; <strong>K<sub>p</sub> = 1/K<sub>a</sub></strong>. Thus φ′ = 30° gives 1/3 and 3; decreasing φ′ increases K<sub>a</sub>. At φ′ = 0 both coefficients equal one.</p>" +
                        "<p>The bank's φ′ = 32° gives K<sub>p</sub> ≈ 3.255: its 8 m depth and water level affect pressure, not this coefficient with unchanged φ′. Rankine's original cohesionless treatment has cohesive extensions associated with Resal and Bell; submerged conditions require effective stress plus water pressure.</p>",
                    sources: [
                        { id: "SOIL136-00055", set: 6, question: 36 },
                        { id: "SOIL136-00061", set: 6, question: 42 },
                        { id: "SOIL136-00088", set: 8, question: 43 },
                        { id: "SOIL136-00284", set: 22, question: 47 },
                        { id: "SOIL136-00285", set: 22, question: 48 },
                        { id: "SOIL136-00286", set: 23, question: 34 },
                        { id: "SOIL136-00287", set: 23, question: 35 },
                        { id: "SOIL136-00302", set: 24, question: 36 },
                        { id: "SOIL136-00309", set: 24, question: 43 },
                        { id: "SOIL136-00312", set: 24, question: 46 },
                        { id: "SOIL136-00314", set: 24, question: 48 }
                    ]
                },
                {
                    id: "coulomb-culmann-and-sloping-backfill",
                    title: "Wedge equilibrium and nonlevel backfill",
                    html: "<p>Coulomb balances trial failure wedges and can include wall friction, batter and backfill slope. Culmann is a graphical wedge construction, useful for irregular surfaces and loads; the critical active wedge maximizes required thrust.</p>" +
                        "<p>Wall friction inclines the contact resultant from the wall normal. Sloping-ground Rankine geometry is different: conjugate planes carry tractions parallel to the other plane. For Rankine's ideal sloping ground, traction on a vertical virtual cut is parallel to the backfill surface. Use its appropriate coefficient and direction, not the level-ground expression or the claim that every stress component is parallel to the surface.</p>",
                    sources: [
                        { id: "SOIL136-00059", set: 6, question: 40 },
                        { id: "SOIL136-00290", set: 23, question: 37 },
                        { id: "SOIL136-00291", set: 23, question: 38 },
                        { id: "SOIL136-00304", set: 24, question: 38 },
                        { id: "SOIL136-00310", set: 24, question: 44 }
                    ]
                },
                {
                    id: "at-rest-coefficient-estimation",
                    title: "At-rest estimates are model-dependent",
                    html: "<p>Jaky's approximate normally consolidated relation is <strong>K<sub>0</sub> = 1 − sinφ′</strong>: the bank's 26° gives 0.5616 and 45° gives 0.2929. A fixed 0.6 for loose sand is illustrative; density alone does not specify stress history or K<sub>0</sub>.</p>" +
                        "<p>For ideal isotropic linear elasticity under lateral restraint, K<sub>0</sub> = ν/(1 − ν). With K<sub>0</sub> = 0.4, ν = 0.4/1.4 = <strong>0.2857</strong>. This is not a universal soil constitutive law. Constant K<sub>0</sub> and unit weight without surcharge yield triangular pressure; loading, layering and water change that diagram.</p>",
                    sources: [
                        { id: "SOIL136-00293", set: 23, question: 40 },
                        { id: "SOIL136-00294", set: 23, question: 41 },
                        { id: "SOIL136-00295", set: 23, question: 42 },
                        { id: "SOIL136-00296", set: 23, question: 43 },
                        { id: "SOIL136-00318", set: 25, question: 37 },
                        { id: "SOIL136-00319", set: 25, question: 38 },
                        { id: "SOIL136-00320", set: 25, question: 39 },
                        { id: "SOIL136-00321", set: 25, question: 40 }
                    ]
                },
                {
                    id: "pressure-diagrams-and-surcharge",
                    title: "Pressure intensity, thrust and surcharge",
                    html: "<p>Backfill is retained soil; uniform surcharge q is additional surface stress. For dry, level, cohesionless backfill:</p>" +
                        "<table><thead><tr><th scope='col'>Component</th><th scope='col'>Intensity at depth z</th><th scope='col'>Thrust and height above base</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Self-weight</th><td>K<sub>a</sub>γz</td><td>K<sub>a</sub>γH<sup>2</sup>/2 at H/3.</td></tr>" +
                        "<tr><th scope='row'>Uniform surcharge</th><td>K<sub>a</sub>q</td><td>K<sub>a</sub>qH at H/2.</td></tr></tbody></table>" +
                        "<p><strong>Bank numbers:</strong> γ = 18 kN/m<sup>3</sup>, H = 6 m and φ′ = 30° give base active intensity 36 kPa and passive intensity 324 kPa. Adding q = 36 kPa adds 12 kPa, giving 48 kPa active intensity; equivalent fill height q/γ = 2 m.</p>" +
                        "<p><strong>Illustrative extension:</strong> active thrusts are 108 and 72 kN/m, total 180 kN/m. Their combined height is (108 × 2 + 72 × 3)/180 = <strong>2.4 m</strong>, not H/3.</p>",
                    sources: [
                        { id: "SOIL136-00060", set: 6, question: 41 },
                        { id: "SOIL136-00089", set: 8, question: 44 },
                        { id: "SOIL136-00288", set: 1, question: 43 },
                        { id: "SOIL136-00289", set: 23, question: 36 },
                        { id: "SOIL136-00297", set: 23, question: 44 },
                        { id: "SOIL136-00298", set: 1, question: 44 },
                        { id: "SOIL136-00299", set: 23, question: 45 },
                        { id: "SOIL136-00303", set: 24, question: 37 },
                        { id: "SOIL136-00307", set: 24, question: 41 },
                        { id: "SOIL136-00313", set: 24, question: 47 }
                    ]
                },
                {
                    id: "water-pressure-separate-from-earth-pressure",
                    title: "Add hydrostatic water pressure separately",
                    html: "<p>Below groundwater, use γ′ = γ<sub>sat</sub> − γ<sub>w</sub> for effective overburden, adding overlying layer stresses. For cohesionless active soil, <strong>p<sub>total</sub> = K<sub>a</sub>σ′<sub>v</sub> + u</strong>, with hydrostatic u = γ<sub>w</sub>h. Do not multiply water pressure by K<sub>a</sub>.</p>" +
                        "<p>Water on both faces cancels only where hydrostatic heads and exposed levels match. Unequal levels leave net water thrust; seepage requires a head distribution rather than assumed hydrostatics. Wall drainage must remain functional before reduced water pressure is justified.</p>",
                    sources: [
                        { id: "SOIL136-00290", set: 23, question: 37 },
                        { id: "SOIL136-00292", set: 23, question: 39 },
                        { id: "SOIL136-00300", set: 23, question: 46 },
                        { id: "SOIL136-00301", set: 24, question: 35 }
                    ]
                },
                {
                    id: "cohesive-pressure-and-tension-cutoff",
                    title: "Cohesion does not provide dependable tensile contact",
                    html: "<p>For the effective-stress Rankine extension, p′<sub>a</sub> = K<sub>a</sub>σ′<sub>v</sub> − 2c′√K<sub>a</sub> and p′<sub>p</sub> = K<sub>p</sub>σ′<sub>v</sub> + 2c′√K<sub>p</sub>. An undrained total-stress model instead needs compatible c<sub>u</sub>, φ<sub>u</sub>.</p>" +
                        "<p>Cut off negative active contact pressure at zero; soil cannot sustain that assumed tension. For homogeneous dry fill with uniform surcharge, the theoretical zero-pressure depth is z<sub>t</sub> = max[0, (2c′/√K<sub>a</sub> − q)/γ]. Integrate the remaining pressure and check crack water separately. Do not rely on apparent cohesion for permanent retention without justification.</p>",
                    sources: [
                        { id: "SOIL136-00057", set: 6, question: 38 },
                        { id: "SOIL136-00285", set: 22, question: 48 }
                    ]
                },
                {
                    id: "retaining-wall-stability-checks",
                    title: "Sliding, overturning, bearing and overall stability",
                    html: "<p><strong>Syllabus context:</strong> assemble soil, surcharge, water and wall-weight forces with their lever arms. Check sliding, overturning, bearing pressure, settlement and a global slip surface through the foundation.</p>" +
                        "<p>In a simple friction-only base model, F<sub>sliding</sub> = N′tanδ<sub>b</sub>/H<sub>d</sub>, where N′ is base compression after uplift, δ<sub>b</sub> interface friction and H<sub>d</sub> driving horizontal force. Include adhesion or usable passive resistance only when justified. Overturning compares resisting and overturning moments about the toe.</p>" +
                        "<p>For a rectangular base of width B, unit wall length and full linear contact, <strong>p<sub>max,min</sub> = (N′/B)(1 ± 6e/B)</strong>, with e the resultant eccentricity from the centre. The bank's <strong>|e| ≤ B/6</strong> avoids theoretical base tension, not every failure. Beyond it, recompute compression-only contact rather than accepting negative bearing pressure.</p>",
                    sources: [
                        { id: "HYDR626-00032", set: 5, question: 64 },
                        { id: "SOIL136-00306", set: 24, question: 40 }
                    ]
                },
                {
                    id: "retaining-stability-improvements",
                    title: "Improve the resisting system, not just its dimensions",
                    html: "<p><strong>Syllabus context:</strong> a wider/heavier base can improve resistance and resultant position; reduced surcharge or flatter backfill reduces demand. Filtered drainage, maintained outlets and erosion protection control water-related loss of stability. Ground improvement, reinforcement, anchors or a shear key require verified ground resistance and structural detailing.</p>" +
                        "<p>Never count passive support that future excavation or scour may remove. A breast wall is the hill-road term for support/protection of a natural cutting; retaining structures are not restricted to artificial fill. Improvements require rechecking global stability, bearing and constructability.</p>",
                    sources: [
                        { id: "SOIL136-00306", set: 24, question: 40 },
                        { id: "TRAN808-00074", set: 8, question: 87 }
                    ]
                }
            ],
            gaps: [
                "No complete site-investigation report or borehole-log dataset is assigned; the reporting workflow is syllabus context, not a worked site interpretation.",
                "The bank lacks complete retaining-wall sliding, overturning, bearing and global-stability examples or comparative improvement designs; no site dimensions or target safety factors are verified here.",
                "Current sampling, SPT and plate-load standards, energy records, full test curves and stratified/sloping-wall design data are absent. Quoted dimensions and procedural figures are not verified compliance criteria."
            ],
            cautions: [
                {
                    html: "<p><strong>SPT/CPT mix-up:</strong> the two static-cone stems actually describe SPT N corrections and the split-spoon sampler. CPT has no SPT blow count. Gibbs–Holtz and Peck/Thornburn are correction attributions, not instructions to combine methods.</p>",
                    sources: [
                        { id: "SOIL136-00325", set: 25, question: 44 },
                        { id: "SOIL136-00326", set: 25, question: 45 },
                        { id: "SOIL136-00327", set: 25, question: 46 }
                    ]
                },
                {
                    html: "<p><strong>Units:</strong> the 18 unit weight requires kN/m<sup>3</sup>, not kN/m<sup>2</sup>. Active/passive intensity is kPa, not kN/m<sup>3</sup>; integrated thrust is kN per metre of wall.</p>",
                    sources: [
                        { id: "SOIL136-00060", set: 6, question: 41 },
                        { id: "SOIL136-00288", set: 1, question: 43 },
                        { id: "SOIL136-00289", set: 23, question: 36 }
                    ]
                },
                {
                    html: "<p><strong>Submerged pressure:</strong> the keyed K<sub>a</sub>γ′z is only the effective soil component, not total pressure. Water on both sides is insufficient for cancellation unless heads match.</p>",
                    sources: [
                        { id: "SOIL136-00300", set: 23, question: 46 },
                        { id: "SOIL136-00301", set: 24, question: 35 }
                    ]
                },
                {
                    html: "<p><strong>At-rest and plane wording:</strong> no lateral strain does not mean zero shear on every plane. Vertical/horizontal planes are principal only under the stated symmetry. A vertical stress direction is not a vertical stress-carrying plane.</p>",
                    sources: [
                        { id: "SOIL136-00311", set: 24, question: 45 },
                        { id: "SOIL136-00317", set: 25, question: 36 }
                    ]
                },
                {
                    html: "<p><strong>Sampling ambiguity:</strong> clay and very soft clay overlap in the piston-sampler choices. Low area ratio alone cannot certify an undisturbed sample; the quoted 10% guideline is not a verified acceptance standard.</p>",
                    sources: [
                        { id: "SOIL136-00054", set: 6, question: 35 },
                        { id: "SOIL136-00084", set: 8, question: 39 }
                    ]
                },
                {
                    html: "<p><strong>Unverified test specifications:</strong> the rectangular-plate/concrete-block options and claimed Indian-standard reaction arrangements do not establish an approved geometry or procedure. Verify plate stiffness, size, seating and loading requirements rather than treating these keys as a specification.</p>",
                    sources: [
                        { id: "SOIL136-00378", set: 29, question: 40 },
                        { id: "SOIL136-00379", set: 29, question: 41 },
                        { id: "SOIL136-00381", set: 29, question: 43 },
                        { id: "SOIL136-00383", set: 29, question: 45 },
                        { id: "SOIL136-00384", set: 29, question: 46 }
                    ]
                }
            ]
        }
    });
})();