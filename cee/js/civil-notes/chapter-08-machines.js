(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0806: {
            code: "ACiE0806",
            questionCount: 67,
            blocks: [
                {
                    id: "machines-energy-chain",
                    title: "Follow the energy transfer before applying efficiency",
                    html: "<p>A <strong>hydraulic turbine</strong> extracts energy from water and delivers mechanical work through a rotating shaft. A generator then converts shaft work into electrical energy. A pump transfers energy in the opposite direction, from its driving shaft to the liquid. Hydraulic machines therefore include both energy-producing and energy-absorbing machines; they are not all turbines, nor are they all rotodynamic. A reciprocating positive-displacement pump is a counterexample to the latter generalization.</p>" +
                        "<p>For steady incompressible flow, hydraulic power associated with a head difference H is <strong>P<sub>w</sub> = ρgQH = γQH</strong>. Use ρ = 1000 kg/m<sup>3</sup> and g = 9.81 m/s<sup>2</sup> for the water numericals here, unless otherwise stated. Q is in m<sup>3</sup>/s, H in m and γ = ρg = 9810 N/m<sup>3</sup>; the result is W. Equivalently, <strong>P<sub>w</sub> = 9.81QH kW</strong>. One cumec is 1 m<sup>3</sup>/s. Head is energy per unit weight, not pressure alone.</p>" +
                        "<ul><li><strong>Generation:</strong> P<sub>shaft</sub> = η<sub>t</sub>ρgQH<sub>n</sub>, where H<sub>n</sub> is net turbine head and η<sub>t</sub> is water-to-shaft efficiency.</li><li><strong>Generator terminals:</strong> P<sub>electric</sub> = η<sub>g</sub>P<sub>shaft</sub>. Station auxiliaries and downstream electrical losses are deducted separately when calculating export.</li><li><strong>Pumping:</strong> P<sub>shaft,in</sub> = ρgQH<sub>p</sub>/η<sub>p</sub>, where H<sub>p</sub> is the total head added by the pump. Motor input is larger again if motor losses are included.</li></ul>" +
                        "<p>The lifting-power item's printed v can represent γ only if it means <em>specific weight</em>, not velocity. Multiplication by efficiency gives turbine output; it does not give the input needed to lift water. Always pair a stated overall efficiency with the same power boundary used in the equation. These are original teaching notes; source links identify the unchanged bank records, including their errors, rather than certify every stored explanation.</p>",
                    sources: [
                        { id: "HYDR626-00013", set: 3, question: 63 },
                        { id: "HYDR626-00095", set: 12, question: 59 },
                        { id: "HYDR626-00097", set: 12, question: 61 },
                        { id: "HYDR626-00101", set: 12, question: 65 }
                    ]
                },
                {
                    id: "machines-equipment-extension",
                    title: "Hydromechanical equipment: exclusion, isolation and regulation",
                    html: "<p><strong>Syllabus extension, without an assigned equipment-schedule question:</strong> identify each component's location, operating function and failure consequence. A device that regulates normal flow is not automatically a maintenance isolation barrier or an emergency closure device. The following functional inventory supplies missing official-scope teaching, not extra question citations.</p>" +
                        "<table><thead><tr><th scope='col'>Equipment</th><th scope='col'>Function and interface</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Trash rack and cleaning system</th><td>Exclude damaging debris at the intake; accumulated blockage increases head loss and differential loading. A rack does not remove all fine abrasive sediment.</td></tr>" +
                        "<tr><th scope='row'>Intake gate and stoplogs</th><td>Control or isolate a waterway according to their design. Maintenance stoplogs may require balanced or stopped flow; they must not be assumed capable of emergency closure under any discharge.</td></tr>" +
                        "<tr><th scope='row'>Main turbine inlet valve</th><td>Isolate the unit supply. Butterfly or spherical valve selection depends on pressure, diameter, losses, operating forces and the specified closure duty.</td></tr>" +
                        "<tr><th scope='row'>Guide vanes or nozzle needle</th><td>Regulate turbine admission; guide vanes also establish inlet direction. Their motion interacts with water-column transients and the governor.</td></tr>" +
                        "<tr><th scope='row'>Pelton deflector</th><td>Divert a jet away from the buckets during rapid load reduction while flow reduction can follow a separately controlled rate.</td></tr>" +
                        "<tr><th scope='row'>Tailrace gates, drains and dewatering equipment</th><td>Permit inspection of wetted spaces after suitable isolation. Leakage, groundwater and backwater remain design inputs.</td></tr>" +
                        "<tr><th scope='row'>Hoists, servomotors and auxiliary services</th><td>Operate and maintain the water-control equipment. Lifting routes, hydraulic-oil supply, electrical supply and position feedback must be coordinated.</td></tr></tbody></table>" +
                        "<p>Specify normal and transient pressure envelopes, sediment and corrosion exposure, leakage limits, operating loads, closure capability, access and the response to loss of power or control. Supports and embedded parts transmit equipment forces into the civil structure. A valve's nominal diameter or a gate's open area alone does not establish these requirements.</p>",
                    sources: []
                },
                {
                    id: "machines-impulse-reaction",
                    title: "Impulse and reaction describe the pressure-energy path",
                    html: "<p>In a conventional <strong>Pelton impulse turbine</strong>, the nozzle converts the available supply head into a free jet before the water meets the runner. The jet and exposed bucket surfaces operate approximately at local atmospheric pressure. The runner extracts work by changing the water's momentum, not by maintaining a large pressure drop through a sealed, water-filled blade passage.</p>" +
                        "<p>In a <strong>reaction turbine</strong>, such as Francis, Kaplan or fixed-blade propeller, the runner passages run full. At runner entry, water possesses both pressure and kinetic energy, and pressure changes through the runner while shaft work is extracted. Pressure energy alone is not the entire inlet energy, and inlet kinetic energy is not absent merely because the passage is enclosed.</p>" +
                        "<p><strong>Energy-path sketch in words:</strong> Pelton supply passes through a nozzle, then an atmospheric jet, moving buckets and a freely draining casing. A Francis supply passes through a scroll case, distributor, water-filled runner and draft tube before reaching the tailrace. The first casing mainly collects and directs spent water; the reaction-turbine casing also forms part of the pressurized waterway.</p>" +
                        "<p>Both impulse and reaction runners change the <em>velocity vector</em> and convert hydraulic energy into mechanical work. Thus does not change the form of energy is not a correct description of an impulse runner. Nor does changes velocity uniquely identify a reaction turbine. The useful distinction is the pressure-energy path through the runner, not the presence or absence of energy conversion.</p>",
                    sources: [
                        { id: "HYDR626-00057", set: 8, question: 60 },
                        { id: "HYDR626-00061", set: 8, question: 64 },
                        { id: "HYDR626-00064", set: 8, question: 67 },
                        { id: "HYDR626-00065", set: 8, question: 68 },
                        { id: "HYDR626-00096", set: 12, question: 60 },
                        { id: "HYDR626-00102", set: 12, question: 66 },
                        { id: "HYDR626-00103", set: 12, question: 67 }
                    ]
                },
                {
                    id: "machines-flow-families",
                    title: "Separate flow direction, pressure class and blade adjustment",
                    html: "<p>A turbine has several simultaneous classifications. Tangential, radial, axial and mixed flow describe the water path relative to the shaft. Impulse and reaction describe the energy-transfer arrangement. Fixed or adjustable blade pitch describes regulation. A vertical shaft is an installation orientation, not another name for axial flow.</p>" +
                        "<table><thead><tr><th scope='col'>Runner family</th><th scope='col'>Water path and regulation</th><th scope='col'>Usual selection tendency</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Pelton</th><td>Tangential free jets on impulse buckets; nozzle admission is regulated.</td><td>High head with comparatively lower discharge.</td></tr>" +
                        "<tr><th scope='row'>Francis</th><td>Reaction runner, generally radial-inward entry turning toward axial discharge; adjustable guide vanes.</td><td>A broad intermediate head/discharge field, subject to the actual runner design.</td></tr>" +
                        "<tr><th scope='row'>Kaplan</th><td>Axial reaction; adjustable runner pitch, normally coordinated with guide-vane admission.</td><td>Low head and high discharge, especially where operating flow varies.</td></tr>" +
                        "<tr><th scope='row'>Fixed-blade propeller</th><td>Axial reaction with fixed runner pitch; changing admission does not change that pitch.</td><td>Low-head service with a duty range suited to its performance curve.</td></tr>" +
                        "<tr><th scope='row'>Fourneyron</th><td>Historical outward radial-flow reaction turbine.</td><td>Recognize its outward radial path rather than use it as a modern universal selection recommendation.</td></tr></tbody></table>" +
                        "<p>For Francis, radial entry and axial departure give the name <strong>mixed flow</strong>. For a propeller, fixed to the hub must mean <strong>fixed pitch</strong>; Kaplan blades are also physically attached to a hub but can pivot. Fourneyron is both outward-flow and radial-flow, so those two descriptions are not mutually exclusive options.</p>" +
                        "<p>Head and discharge tendencies overlap; the bank's below-30-m description is not an absolute Kaplan limit. Manufacturer characteristics, specific-speed convention, regulation range, cavitation setting and site constraints decide a real selection. The DOE turbine-types reference supports the main classifications, not universal dimensional or head limits.</p>",
                    sources: [
                        { id: "HYDR626-00060", set: 8, question: 63 },
                        { id: "HYDR626-00094", set: 11, question: 68 },
                        { id: "HYDR626-00104", set: 13, question: 60 },
                        { id: "HYDR626-00106", set: 13, question: 62 },
                        { id: "HYDR626-00107", set: 1, question: 61 },
                        { id: "HYDR626-00111", set: 13, question: 66 },
                        { id: "HYDR626-00112", set: 13, question: 67 },
                        { id: "HYDR626-00143", set: 17, question: 58 },
                        { id: "HYDR626-00144", set: 17, question: 59 }
                    ]
                },
                {
                    id: "machines-turgo-crossflow-extension",
                    title: "Additional turbine types: Turgo and crossflow",
                    html: "<p><strong>Syllabus extension, without an assigned Turgo or crossflow question:</strong> the official requirement for turbine types is wider than the repeated Pelton, Francis and Kaplan recall items. These additional types are not given invented bank IDs.</p>" +
                        "<p>A <strong>Turgo</strong> is an impulse turbine in which the jet approaches the runner obliquely and passes through it, leaving on the opposite side. Its water path differs from the split jet turning around a Pelton bucket. Jet clearance, runner geometry, speed and loading therefore need the appropriate Turgo design basis; Pelton bucket-width and bucket-count rules cannot simply be transplanted.</p>" +
                        "<p>A <strong>crossflow</strong> turbine is normally classified as impulse. Water enters a cylindrical, bladed runner, crosses the blade row toward its interior, and passes through the blade row a second time while leaving. The two passes refer to the water path through the same runner, not two separate machines or permission to count the same available energy twice. The DOE introductory description verifies this two-pass distinction.</p>" +
                        "<p>Admission arrangement and the actual efficiency-versus-flow curve matter, particularly for variable-flow smaller schemes. Compare annual operation, sediment exposure, maintainability, available head, manufacturing support and cost rather than declare one type universally superior. A type name supplies neither a guaranteed efficiency nor final runner dimensions.</p>",
                    sources: []
                },
                {
                    id: "machines-performance-selection",
                    title: "Select a turbine from its duty envelope, not rpm alone",
                    html: "<p>Begin with the range of <strong>net heads and usable discharges</strong>, required unit output, number of units and generator/coupling arrangement. Then compare candidate runners using a consistently defined specific speed and their performance maps. Actual rotational speed N by itself does not identify a runner family: the bank's <strong>95–440 rpm</strong> range cannot uniquely select Francis.</p>" +
                        "<ul><li><strong>Main characteristics:</strong> at a maintained head and a fixed admission setting, vary speed and observe discharge, torque, power and efficiency. Repeat for other settings.</li><li><strong>Operating characteristics:</strong> at the intended approximately constant speed and stated head, vary admission/load and examine efficiency, discharge and output over the usable range.</li><li><strong>Hill diagram:</strong> efficiency contours in a defined reduced-speed/reduced-discharge plane summarize many operating points. Gate opening, blade pitch, cavitation and prohibited operating zones must retain their specified meanings.</li></ul>" +
                        "<p>Pelton needle and multiple-jet regulation can maintain useful performance as flow changes. Francis operation far from its intended duty can develop incidence losses, residual swirl and pressure pulsations. Coordinated Kaplan blade and guide-vane adjustment generally offers a broader efficient operating range than a comparable fixed-pitch propeller. These are mechanisms to understand, not a numerical ranking valid for every machine.</p>" +
                        "<p>Choose using the time spent at each duty as well as peak efficiency: electrical energy is the integral of terminal power over time. Check minimum stable load, cavitation margin, sediment wear, tailwater range, runaway duty, generator speed options, transport, maintenance and economics. If 95–440 was intended as <em>specific speed</em>, its power/head units and runner basis are missing; do not silently replace rpm by that different quantity.</p>",
                    sources: [{ id: "HYDR626-00108", set: 13, question: 63 }]
                },
                {
                    id: "machines-similarity-unit-quantities",
                    title: "Similarity laws and unit quantities have different purposes",
                    html: "<p>For <strong>geometrically similar</strong> rotodynamic machines at corresponding operating points, characteristic velocity scales with ND and area with D<sup>2</sup>. Hence <strong>Q ∝ ND<sup>3</sup></strong>. Comparable head coefficients give <strong>H ∝ N<sup>2</sup>D<sup>2</sup></strong>, and hydraulic power ρgQH gives <strong>P ∝ ρN<sup>3</sup>D<sup>5</sup></strong>. Comparable efficiencies are needed when applying the power relation to shaft input/output. Use consistent speed units; dimensional constants include the rpm-to-revolutions-per-second conversion.</p>" +
                        "<p>At fixed diameter, the familiar speed laws are Q ∝ N, H ∝ N<sup>2</sup> and P ∝ N<sup>3</sup>. At fixed speed across a geometrically similar family, Q ∝ D<sup>3</sup>, H ∝ D<sup>2</sup> and <strong>P ∝ D<sup>5</sup></strong>. Reynolds-number effects, roughness, cavitation and efficiency differences can require corrections. Trimming only an impeller in an unchanged casing does not preserve all geometric similarity; a limited-trim D<sup>3</sup> power shortcut is a different approximation requiring its own conditions and pump curves.</p>" +
                        "<p>For the <strong>same turbine diameter</strong> at comparable operation, head reduction gives <strong>N<sub>u</sub> = N/√H</strong>, <strong>Q<sub>u</sub> = Q/√H</strong> and <strong>P<sub>u</sub> = P/H<sup>3/2</sup></strong>. These conventional unit quantities describe corresponding operation at unit head in the selected units. They do not all become unity, and are not dimensionless coefficients.</p>" +
                        "<p>Unit power is therefore <strong>P/H<sup>1.5</sup></strong>, not a requirement to impose both Q = 1 and H = 1 simultaneously. For water, that separate imposed condition would give 9.81 kW of hydraulic power and an efficiency-dependent output. The pump-diameter question's explanation multiplies D<sup>3</sup> flow by D<sup>2</sup> head but its stored key still says D<sup>3</sup>; the two statements are inconsistent.</p>",
                    sources: [
                        { id: "HYDR626-00053", set: 7, question: 66 },
                        { id: "HYDR626-00067", set: 9, question: 60 }
                    ]
                },
                {
                    id: "machines-specific-speed-conventions",
                    title: "Specific speed requires a unit convention and one-runner power",
                    html: "<p>The conventional power-based turbine specific speed is <strong>n<sub>s</sub> = N√P<sub>unit</sub>/H<sub>n</sub><sup>5/4</sup></strong>. N is rotational speed in rpm, H<sub>n</sub> is net head in m, and <strong>P<sub>unit</sub> is the output associated with one runner</strong>, conventionally the turbine shaft output for the selection correlation. It is not automatically whole-station power, generator electrical output or internal fluid-to-runner transfer power.</p>" +
                        "<p>For similar machines at the same type of duty, N ∝ √H/D and P ∝ D<sup>2</sup>H<sup>3/2</sup> at comparable efficiency and density. Thus N√P scales as H<sup>5/4</sup>, explaining the exponent. Conceptually, n<sub>s</sub> is the speed of a similar turbine producing one selected power unit under one selected head unit. <strong>This conventional number is not dimensionless:</strong> its stated convention carries rpm·kW<sup>1/2</sup>/m<sup>5/4</sup>, or rpm·hp<sup>1/2</sup>/m<sup>5/4</sup>.</p>" +
                        "<p>Mechanical horsepower is <strong>1 hp = 0.745699872 kW</strong>; the rounded classroom conversion is 0.746 kW/hp. Metric horsepower is different, approximately 0.73549875 kW. For the same physical machine, n<sub>s,kW</sub> = √0.745699872 × n<sub>s,mechanical hp</sub>. A range expressed using horsepower and feet cannot be applied unchanged to kW and metres.</p>" +
                        "<p>For r equal runners sharing station output at the same head and speed, use P<sub>unit</sub> = P<sub>station</sub>/r; using total power would overstate the single-runner value by √r. For z equal-power Pelton jets, <strong>n<sub>s,jet</sub> = n<sub>s,runner</sub>/√z</strong> only when a correlation explicitly uses <em>per-jet</em> power. Otherwise all jets on one runner belong in its one-runner power. On a consistent basis, Pelton tends toward lower, Francis intermediate and axial runners higher specific speed; this is a selection guide, not a substitute for a duty map.</p>",
                    sources: [{ id: "HYDR626-00070", set: 9, question: 63 }]
                },
                {
                    id: "machines-specific-speed-power-examples",
                    title: "Worked power and specific-speed conversions",
                    html: "<p><strong>First case: 2000 hp, 150 m and 300 rpm.</strong> H<sup>5/4</sup> = 150<sup>5/4</sup> ≈ 524.945 and √2000 ≈ 44.72136. Therefore <strong>n<sub>s</sub> = 300 × 44.72136/524.945 ≈ 25.5577</strong> in the rpm–hp–m convention. This supports the 25.56 choice. The repeated range question has exactly the same duty, so the result lies in <strong>10–35</strong>, not 35–60. A turbine-family label cannot change this arithmetic.</p>" +
                        "<p>If the 2000 hp is mechanical horsepower, its output is 1491.399744 kW and the kW-based value is <strong>22.0701</strong>. That is the same physical duty in another convention, not evidence that one formula is wrong. Keep the convention alongside every reported result.</p>" +
                        "<p><strong>Second case: H = 25 m, N = 200 rpm, Q = 9 m<sup>3</sup>/s and η = 0.90.</strong> Reading η as turbine water-to-shaft efficiency for the intended specific-speed calculation gives <strong>P = 0.90 × 9.81 × 9 × 25 = 1986.525 kW</strong>. This value is not 1986.525 hp. If instead the efficiency is water-to-electric, the same calculated output belongs at the terminals and a generator efficiency is needed to infer turbine shaft power.</p>" +
                        "<table><thead><tr><th scope='col'>Power convention</th><th scope='col'>Power used</th><th scope='col'>n<sub>s</sub>, with N in rpm and H in m</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>kW</th><td>1986.525 kW</td><td>159.4601</td></tr>" +
                        "<tr><th scope='row'>Mechanical hp</th><td>1986.525/0.745699872 ≈ 2663.97 hp</td><td>184.6588</td></tr>" +
                        "<tr><th scope='row'>Rounded 746 W/hp</th><td>1986.525/0.746 ≈ 2662.90 hp</td><td>184.62</td></tr></tbody></table>" +
                        "<p>The printed pair 2662.209 HP and 184.62 is evidently intended to use the rounded-horsepower convention, but its power value contains a numerical typo. The rounded conversion explains 184.62; it does not produce 2662.209. No original option or key is changed.</p>",
                    sources: [
                        { id: "HYDR626-00070", set: 9, question: 63 },
                        { id: "HYDR626-00076", set: 10, question: 61 },
                        { id: "HYDR626-00079", set: 10, question: 64 }
                    ]
                },
                {
                    id: "machines-specific-speed-multiple-units",
                    title: "Separate station power, unit capacity and actual operating duty",
                    html: "<p><strong>300 m<sup>3</sup>/s at 5 m:</strong> with η = 0.82, the intended turbine-output calculation gives P<sub>total</sub> = 9.81 × 300 × 5 × 0.82 = <strong>12066.3 kW</strong>. If n<sub>s</sub> = 500 uses the rpm–kW–m convention and N = 50 rpm, rearrange the formula for one runner: <strong>P<sub>unit</sub> = [n<sub>s</sub>H<sup>5/4</sup>/N]<sup>2</sup> = [500 × 5<sup>5/4</sup>/50]<sup>2</sup> ≈ 5590.17 kW</strong>.</p>" +
                        "<p>The quotient is <strong>12066.3/5590.17 = 2.1585 units</strong>. Three is the minimum whole-number <em>capacity</em> choice, not an exact operating solution with every unit simultaneously producing 5590.17 kW. Three equal shares of the river output would instead be 4022.1 kW each, requiring a new operating-point check. If 500 uses horsepower, the same algebra gives 5590.17 hp per unit, about 4.169 MW, and a different quotient of about 2.895. Its ceiling happens also to be three. Neither agreement resolves the missing unit convention. The printed kalima name is garbled and is not adopted here as an established turbine type.</p>" +
                        "<p><strong>Two turbines, total 5 MW, 6000 rpm and 20 m:</strong> assume equal sharing and the bank's intended turbine-output convention. <strong>P<sub>unit</sub> = 5000/2 = 2500 kW</strong>, so n<sub>s</sub> = 6000√2500/20<sup>5/4</sup> = <strong>7093.06</strong> in rpm–kW–m. Converting each unit to mechanical hp gives about 8213.94; using 746 W/hp gives <strong>8212.29</strong>, matching the offered 8212.3, not 2098. Metric horsepower would give about 8270.71 and does not rescue the stored explanation.</p>" +
                        "<p>The supplied <strong>6000 rpm is retained</strong>. It is an unusual low-head hydraulic duty, not permission to replace it with 600 or another speed. If 5 MW denotes electrical generation strictly, the shaft power per unit is 2500/η<sub>g</sub> kW and its shaft-based specific speed is 7093.06/√η<sub>g</sub>; η<sub>g</sub> is not supplied. A calculated conventional specific speed is not itself the physical shaft rpm or proof of an available generator/runner combination.</p>",
                    sources: [
                        { id: "HYDR626-00077", set: 10, question: 62 },
                        { id: "HYDR626-00081", set: 10, question: 66 }
                    ]
                },
                {
                    id: "machines-efficiency-boundaries",
                    title: "Keep leakage, runner work, shaft output and electricity separate",
                    html: "<p>Draw an energy ledger before multiplying efficiencies. Let Q<sub>in</sub> be water admitted at the turbine boundary and Q<sub>r</sub> the portion passing through the runner. Let P<sub>r</sub> be fluid power actually transferred to the runner, P<sub>s</sub> the delivered turbine shaft power and P<sub>e</sub> generator terminal output. All powers must use the same unit, and H<sub>n</sub> must refer to the specified turbine hydraulic boundary.</p>" +
                        "<table><thead><tr><th scope='col'>Efficiency</th><th scope='col'>Consistent definition</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Volumetric</th><td>η<sub>v</sub> = Q<sub>r</sub>/Q<sub>in</sub>.</td></tr>" +
                        "<tr><th scope='row'>Hydraulic, runner-flow basis</th><td>η<sub>h</sub> = P<sub>r</sub>/(ρgQ<sub>r</sub>H<sub>n</sub>).</td></tr>" +
                        "<tr><th scope='row'>Mechanical</th><td>η<sub>m</sub> = P<sub>s</sub>/P<sub>r</sub>, allowing for the allocated mechanical losses.</td></tr>" +
                        "<tr><th scope='row'>Turbine overall</th><td>η<sub>t</sub> = P<sub>s</sub>/(ρgQ<sub>in</sub>H<sub>n</sub>) = η<sub>v</sub>η<sub>h</sub>η<sub>m</sub> under this loss allocation.</td></tr>" +
                        "<tr><th scope='row'>Generator</th><td>η<sub>g</sub> = P<sub>e</sub>/P<sub>s</sub>; water-to-terminal efficiency is η<sub>t</sub>η<sub>g</sub>.</td></tr></tbody></table>" +
                        "<p>The hydraulic-efficiency bank item uses power available at the turbine inlet as its denominator. If that means <strong>ρgQ<sub>in</sub>H<sub>n</sub></strong>, its ratio already includes the leakage effect: it equals η<sub>v</sub>η<sub>h</sub> in the separate-flow convention above. Do not multiply it by η<sub>v</sub> a second time. If leakage is neglected, Q<sub>r</sub> = Q<sub>in</sub> and the distinction disappears.</p>" +
                        "<p>A lost hydraulic head and a lost shaft power are different entries in this ledger. Likewise, nozzle-to-runner efficiency, whole-turbine efficiency and water-to-electric efficiency are not interchangeable percentages. Use a stated overall efficiency only once when obtaining Q from a given output.</p>",
                    sources: [
                        { id: "HYDR626-00069", set: 9, question: 62 },
                        { id: "HYDR626-00084", set: 11, question: 59 }
                    ]
                },
                {
                    id: "machines-velocity-triangles-euler",
                    title: "Velocity triangles turn angular momentum into runner work",
                    html: "<p>At any runner station, use <strong>V = u + W as a vector equation</strong>: V is absolute water velocity, u is blade/peripheral velocity and W is water velocity relative to the moving blade. All are in m/s. The whirl velocity V<sub>w</sub> is the <strong>tangential component of V</strong>, not a fourth independent vector or a replacement for u in the triangle. The meridional component V<sub>m</sub> lies in the radial/axial flow plane.</p>" +
                        "<p><strong>Triangle in words:</strong> choose the positive tangent in the direction of runner motion and a perpendicular meridional direction along the local throughflow. Draw u on the tangent, then add W to reach V. The components satisfy W<sub>w</sub> = V<sub>w</sub> − u and W<sub>m</sub> = V<sub>m</sub>. Define the angle axes and retain signs before using trigonometry; a positive speed magnitude does not determine the sign of whirl.</p>" +
                        "<p>For steady mean-line flow, angular momentum gives runner torque <strong>T<sub>r</sub> = ρQ<sub>r</sub>(r<sub>1</sub>V<sub>w1</sub> − r<sub>2</sub>V<sub>w2</sub>)</strong>. Multiplying by ω = 2πN/60, with u = ωr, gives <strong>P<sub>r</sub> = ρQ<sub>r</sub>(u<sub>1</sub>V<sub>w1</sub> − u<sub>2</sub>V<sub>w2</sub>)</strong> and <strong>H<sub>E</sub> = (u<sub>1</sub>V<sub>w1</sub> − u<sub>2</sub>V<sub>w2</sub>)/g</strong>. Torque is in N·m, power in W and Euler work head H<sub>E</sub> in m. Appropriate mean components are assumed.</p>" +
                        "<p>This is Newton's second law in angular-momentum form. Buckets and blades turn the water and alter its whirl, producing torque. A stationary bucket can experience force but delivers no rotational power because u = 0. Euler head is the transferred work head; it equals net available head only in the corresponding lossless limit. Ordinary no-work Bernoulli cannot be applied through an operating runner while omitting its extracted work.</p>",
                    sources: [
                        { id: "HYDR626-00098", set: 12, question: 62 },
                        { id: "HYDR626-00099", set: 12, question: 63 },
                        { id: "HYDR626-00145", set: 17, question: 60 }
                    ]
                },
                {
                    id: "machines-pelton-preliminary-sequence",
                    title: "Pelton preliminary design: head, speed, wheel and jets",
                    html: "<p>The nozzle's principal function is to convert available pressure/head into a coherent high-speed jet, not merely to create pressure variations. Let H<sub>n</sub> be the net head available to the nozzle, including the intended approach-head convention, and let <strong>V<sub>j</sub> = C<sub>v</sub>√(2gH<sub>n</sub>)</strong>. C<sub>v</sub> is a dimensionless velocity coefficient; C<sub>v</sub> = 1 is the ideal nozzle limit. V<sub>j</sub> is in m/s.</p>" +
                        "<p>Define two different speed ratios explicitly: <strong>φ = u/√(2gH<sub>n</sub>)</strong> and <strong>λ = u/V<sub>j</sub></strong>. They satisfy φ = C<sub>v</sub>λ. With pitch-circle runner diameter D in m and speed N in rpm, <strong>u = πDN/60</strong>. A quoted speed ratio without its denominator leaves the preliminary wheel diameter ambiguous.</p>" +
                        "<ol><li>Determine the one-unit output boundary, net head, required discharge and feasible shaft speed. With an efficiency η paired to output P, Q = P/(ηρgH<sub>n</sub>) in consistent units.</li><li>Select a justified speed ratio and compute u, then D = 60u/(πN). This D is the runner pitch diameter, not the nozzle diameter.</li><li>For z equal effective circular jets of diameter d, use <strong>Q = z(πd<sup>2</sup>/4)V<sub>j</sub></strong>. If z is chosen, d = √[4Q/(zπV<sub>j</sub>)]. If d is fixed, first compute the generally non-integer quotient Q/[(πd<sup>2</sup>/4)V<sub>j</sub>].</li><li>Reconcile integer jet count with operating openings, jet ratio, bucket interception and clearance. Then check bucket proportions, mechanical loading, regulation and the freely draining casing/tailrace arrangement.</li></ol>" +
                        "<p>Using actual effective jet area with V<sub>j</sub> avoids counting the same nozzle loss twice. A pipe bore is not automatically the contracted jet area; if only a nozzle opening is known, its contraction/discharge relationship must be specified. The sequence is preliminary hydraulic sizing, not a fabrication drawing or guaranteed efficiency.</p>",
                    sources: [{ id: "HYDR626-00105", set: 13, question: 61 }]
                },
                {
                    id: "machines-pelton-momentum-optimum",
                    title: "Derive the half-jet-speed optimum and its efficiency limit",
                    html: "<p>Consider a tangential jet fully intercepted by the rotating bucket train, with 0 &lt; u &lt; V<sub>j</sub>. The relative inlet speed is <strong>W<sub>1</sub> = V<sub>j</sub> − u</strong>. Model relative exit speed as <strong>W<sub>2</sub> = kW<sub>1</sub></strong>, with 0 ≤ k ≤ 1. Define β at exit <strong>from the backward tangent</strong>: β = 0 corresponds to complete relative-flow reversal. The through-bucket deflection in this idealized plane is 180° − β.</p>" +
                        "<p>The exit whirl is <strong>V<sub>w2</sub> = u − k(V<sub>j</sub> − u)cosβ</strong>, whereas inlet whirl is V<sub>j</sub>. Applying momentum to the intercepted steady discharge Q gives <strong>P<sub>r</sub> = ρQu(V<sub>j</sub> − u)(1 + kcosβ)</strong>. The inlet jet power is ρQV<sub>j</sub><sup>2</sup>/2. Hence, for λ = u/V<sub>j</sub>, <strong>η<sub>jet</sub> = 2λ(1 − λ)(1 + kcosβ)</strong>.</p>" +
                        "<p>Holding k and β fixed, dη<sub>jet</sub>/dλ = 2(1 − 2λ)(1 + kcosβ). The non-degenerate maximum occurs at <strong>λ = 1/2</strong>, and <strong>η<sub>jet,max</sub> = (1 + kcosβ)/2</strong>. Lossless reversal, k = 1 and β = 0, gives the mathematical limit of unity. For an original illustration, k = 0.90 and β = 0 give a maximum of 0.95 even at the optimum speed.</p>" +
                        "<p>Choosing u/V<sub>j</sub> = 0.5 does <strong>not</strong> make the bucket turn water through 180°; geometry determines β. Real buckets need the spent water to clear following buckets and have friction, splash and other losses. With the same flow and head boundaries, head-to-runner efficiency additionally includes C<sub>v</sub><sup>2</sup>; mechanical and generator losses belong after runner work. Thus the stored 88% is neither a universal practical ceiling nor the ideal jet-efficiency maximum.</p>",
                    sources: [
                        { id: "HYDR626-00093", set: 11, question: 67 },
                        { id: "HYDR626-00141", set: 16, question: 68 }
                    ]
                },
                {
                    id: "machines-pelton-proportions",
                    title: "Jet ratio and empirical bucket proportions",
                    html: "<p>Use <strong>D for runner pitch diameter</strong>, d for effective jet diameter and <strong>m = D/d</strong> for jet ratio. Both diameters must use the same length unit. The inverse ratio asked as jet-to-runner is d:D = 1:m. No single value such as 1:6 follows merely from the name Pelton, and selecting the closest supposedly standard option cannot supply missing design data.</p>" +
                        "<table><thead><tr><th scope='col'>Preliminary quantity</th><th scope='col'>Assumed rule or definition</th><th scope='col'>Worked interpretation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Bucket width B</th><td>Bank heuristic B ≈ 5d.</td><td>For d = 85 mm, B = 5 × 85 = <strong>425 mm</strong>. The supplied 1.5 m runner diameter is unused in this width calculation.</td></tr>" +
                        "<tr><th scope='row'>Bucket depth</th><td>Bank heuristic depth ≈ 1.2d.</td><td>A preliminary proportion, not a mandatory dimension for every bucket design.</td></tr>" +
                        "<tr><th scope='row'>Bucket count Z</th><td>Empirical rule Z ≈ 15 + D/(2d).</td><td>For D = 2 m and d = 0.25 m, Z = 15 + 2/0.50 = <strong>19</strong>.</td></tr>" +
                        "<tr><th scope='row'>Runner diameter from jet ratio</th><td>D = md is a definition rearrangement, not an empirical law.</td><td>For m = 10 and d = 125 mm, D = 1250 mm = <strong>1.25 m</strong>. The jet remains 0.125 m.</td></tr></tbody></table>" +
                        "<p>Width, depth, length, splitter shape and bucket spacing must intercept the jet, turn it smoothly and let spent water escape without striking the next bucket. Too many or too few buckets affect interception, interference and loading. The 15 + D/(2d) relation is therefore a trial rule, not a proof that every runner of those diameters must contain exactly 19 buckets.</p>" +
                        "<p>The bank's additional bucket-length proportion is also empirical and needs a defined geometric direction. No inspected primary design clause establishes these ratios as universal requirements. In the 125 mm item, the requested diameter is mislabeled as a jet: 1.25 m is the <strong>runner</strong> result, and that wording error must remain visible rather than changing what D means mid-calculation.</p>",
                    sources: [
                        { id: "HYDR626-00072", set: 9, question: 65 },
                        { id: "HYDR626-00082", set: 10, question: 67 },
                        { id: "HYDR626-00089", set: 11, question: 64 },
                        { id: "HYDR626-00090", set: 1, question: 60 },
                        { id: "HYDR626-00091", set: 11, question: 65 },
                        { id: "HYDR626-00092", set: 11, question: 66 }
                    ]
                },
                {
                    id: "machines-pelton-six-megawatt-jets",
                    title: "The 6 MW Pelton duty: check integer-jet compatibility",
                    html: "<p>The supplied values are <strong>P = 6 MW, H<sub>n</sub> = 300 m, N = 550 rpm, η<sub>o</sub> = 0.90, C<sub>v</sub> = 0.98, d/D = 0.10 and speed ratio 0.46</strong>. Pair the stated overall efficiency with the given output and initially interpret the speed ratio as φ = u/√(2gH<sub>n</sub>). No separate generator efficiency is inserted into this discharge calculation.</p>" +
                        "<ol><li>√(2gH<sub>n</sub>) = √5886 ≈ 76.7203 m/s; <strong>V<sub>j</sub> = 0.98 × 76.7203 = 75.1859 m/s</strong>.</li><li>u = 0.46 × 76.7203 = 35.2913 m/s; <strong>D = 60 × 35.2913/(π × 550) ≈ 1.2255 m</strong>.</li><li>The exact diameter ratio gives d = 0.10D ≈ 0.12255 m, and one full effective jet carries q<sub>j</sub> = (πd<sup>2</sup>/4)V<sub>j</sub> ≈ 0.88683 m<sup>3</sup>/s.</li><li><strong>Q = 6000/(0.90 × 9.81 × 300) = 2.26526 m<sup>3</sup>/s</strong>.</li><li>The required quotient is <strong>z = Q/q<sub>j</sub> ≈ 2.554</strong>, not four.</li></ol>" +
                        "<p>Three full-size nozzles provide the smallest integer capacity above Q, but three fully open jets of that exact d at the stated head do not pass exactly Q. Three equal effective jets passing the required discharge would need <strong>d ≈ 0.11308 m</strong>, so the operating d/D would no longer be exactly 0.10. If the quoted diameter denotes maximum available opening, regulated operation may be feasible; if it is an exact operating-jet constraint, the complete set of givens is inconsistent.</p>" +
                        "<p>If 0.46 instead means λ = u/V<sub>j</sub>, the wheel and jets become smaller and the quotient is approximately <strong>2.660</strong>, still not four. The stored four-jet answer is unsupported under either speed-ratio interpretation. Three is explicitly a <em>capacity ceiling with adjustment</em>, not a silent exact replacement solution.</p>",
                    sources: [{ id: "HYDR626-00073", set: 9, question: 66 }]
                },
                {
                    id: "machines-pelton-two-hundred-metre-jets",
                    title: "The 1.25 cumec duty: three nozzles do not mean three full jets",
                    html: "<p>Assume the printed <strong>100 mm nozzle-pipe diameter</strong> is the effective circular jet diameter d = 0.100 m, with net nozzle head H = 200 m and C<sub>v</sub> = 0.97. If it is only a supply-pipe bore, further nozzle geometry and contraction information would be needed; that distinction is not supplied.</p>" +
                        "<p>The jet velocity is <strong>V<sub>j</sub> = 0.97√(2 × 9.81 × 200) ≈ 60.7626 m/s</strong>. Its area is π(0.100)<sup>2</sup>/4 = 0.00785398 m<sup>2</sup>, giving <strong>q<sub>j</sub> ≈ 0.47723 m<sup>3</sup>/s</strong>. Thus Q/q<sub>j</sub> = 1.25/0.47723 = <strong>2.6193</strong>.</p>" +
                        "<p>The smallest whole-number nozzle capacity is three, matching the bank's integer choice only under that interpretation. Three full effective 100 mm jets would pass approximately <strong>1.4317 m<sup>3</sup>/s</strong>, not 1.25. To pass exactly 1.25 through three equal jets at the same velocity, <strong>d<sub>effective</sub> = √[4 × 1.25/(3π × 60.7626)] ≈ 0.09344 m = 93.44 mm</strong>.</p>" +
                        "<p>After choosing a nozzle count, recalculate operating opening, jet interception and efficiency. Rounding a discharge quotient upward is a capacity decision; it does not preserve an exact full-opening flow constraint. Rounding downward would leave insufficient full-jet capacity in this simplified model.</p>",
                    sources: [{ id: "HYDR626-00080", set: 10, question: 65 }]
                },
                {
                    id: "machines-francis-design-extension",
                    title: "Francis preliminary design: speed, inlet width and velocity triangles",
                    html: "<p><strong>Syllabus extension, without a complete assigned Francis design dataset:</strong> the bank supplies a peripheral-diameter calculation but not the flow coefficients, blockage, angles, hub dimensions or performance data for a full preliminary runner. Use the following mean-line workflow with explicitly selected inputs, not invented numerical coefficients.</p>" +
                        "<ol><li>Establish H<sub>n</sub>, Q<sub>in,unit</sub>, required shaft output, feasible speed N and a consistent efficiency allocation. Use Q<sub>r</sub> = η<sub>v</sub>Q<sub>in,unit</sub> and H<sub>E</sub> = η<sub>h</sub>H<sub>n</sub> under the separate-flow convention.</li><li>Select an applicable peripheral coefficient φ and compute <strong>u<sub>1</sub> = φ√(2gH<sub>n</sub>)</strong>, then <strong>D<sub>1</sub> = 60u<sub>1</sub>/(πN)</strong>.</li><li>Select a justified inlet flow coefficient C<sub>m</sub>, so V<sub>m1</sub> = C<sub>m</sub>√(2gH<sub>n</sub>). For radial entry across a cylindrical inlet surface, <strong>Q<sub>r</sub> = χπD<sub>1</sub>B<sub>1</sub>V<sub>m1</sub></strong>, giving <strong>B<sub>1</sub> = Q<sub>r</sub>/(χπD<sub>1</sub>V<sub>m1</sub>)</strong>.</li><li>Choose and state the outlet-whirl assumption. Euler work requires <strong>u<sub>1</sub>V<sub>w1</sub> − u<sub>2</sub>V<sub>w2</sub> = gη<sub>h</sub>H<sub>n</sub></strong>. Only if V<sub>w2</sub> = 0 is assumed does V<sub>w1</sub> = gη<sub>h</sub>H<sub>n</sub>/u<sub>1</sub>.</li><li>Construct V, u and W at both ends. At inlet, the absolute angle to the positive tangent has tanα<sub>1</sub> = V<sub>m1</sub>/V<sub>w1</sub> when the quadrant permits that form. Relative components are W<sub>w1</sub> = V<sub>w1</sub> − u<sub>1</sub> and W<sub>m1</sub> = V<sub>m1</sub>; their signs determine the blade-angle quadrant.</li></ol>" +
                        "<p>Here χ is the net-open-area fraction after blade blockage, with 0 &lt; χ ≤ 1. D<sub>1</sub>, B<sub>1</sub> and all lengths are in m; velocities are in m/s. Less open area requires a larger width for unchanged flow and velocity, not a smaller width. The radial-entry area πDB must not be replaced by πD<sup>2</sup>/4. At an approximately axial outlet, an appropriate annular area instead involves the outer and hub diameters and its own blockage allowance.</p>" +
                        "<p>Zero outlet whirl is a design-point assumption, not a truth at all loads, and it does not mean zero outlet meridional velocity or zero residual kinetic energy. Check incidence, outlet diffusion, draft-tube recovery, cavitation setting, runner stresses and the distributor/scroll-case arrangement together. Manufacturer/model evidence is needed before turning this workflow into final dimensions or operating guarantees.</p>",
                    sources: []
                },
                {
                    id: "machines-francis-peripheral-diameter",
                    title: "The Francis peripheral coefficient gives 1.405 m, not 1.3 m",
                    html: "<p>For an inward-flow reaction runner, the conventional speed or peripheral coefficient is <strong>φ = u<sub>1</sub>/√(2gH<sub>n</sub>)</strong>. The denominator is a theoretical spouting velocity used as a head scale; a Francis turbine does not thereby acquire a literal free jet at its inlet. If another denominator is used, it must be defined rather than assumed identical.</p>" +
                        "<p>The given values are φ = <strong>0.678</strong>, H<sub>n</sub> = <strong>150 m</strong> and N = <strong>500 rpm</strong>. First, √(2gH<sub>n</sub>) = √2943 ≈ 54.2494 m/s. Then <strong>u<sub>1</sub> = 0.678 × 54.2494 ≈ 36.7811 m/s</strong>.</p>" +
                        "<p>Using u<sub>1</sub> = πD<sub>1</sub>N/60 gives <strong>D<sub>1</sub> = 60 × 36.7811/(π × 500) ≈ 1.40493 m</strong>. To one decimal place this is <strong>1.4 m</strong>, the supplied option c, not the stored 1.3 m. Retaining more digits in g or π cannot account for that difference.</p>" +
                        "<p>This computes the diameter at the station to which φ refers. It does not determine inlet width, outlet diameter, hub, blade profile or generator dimensions. Those need discharge, blockage and additional design relationships. Calling the given speed synchronous also requires a compatible generator frequency and pole count when specifying the actual coupled unit.</p>",
                    sources: [
                        { id: "HYDR626-00078", set: 10, question: 63 },
                        { id: "HYDR626-00148", set: 17, question: 63 }
                    ]
                },
                {
                    id: "machines-scroll-distributor",
                    title: "Why scroll-case area decreases around the runner",
                    html: "<p>A reaction turbine's <strong>scroll or spiral case</strong> receives the penstock supply and distributes it around the runner. As water is admitted through the surrounding distributor, the discharge still travelling inside the scroll decreases. If the preliminary objective is an approximately maintained section-mean velocity, <strong>A(θ) ≈ Q<sub>remaining</sub>(θ)/V<sub>scroll</sub></strong>, so its area decreases toward the end of the spiral.</p>" +
                        "<p><strong>Original ideal distribution model:</strong> if admission is uniform per unit angle over a full turn, with θ measured in radians from the scroll entrance, Q<sub>remaining</sub>(θ) = Q<sub>total</sub>[1 − θ/(2π)]. This explains the taper; it is not a final casing profile. The tongue, actual entry and termination, local velocities, pressure losses and three-dimensional flow prevent a literal zero-area mathematical end from being used as a complete construction design.</p>" +
                        "<p>Distinguish the successive components: the <strong>scroll case distributes</strong>, fixed stay vanes guide flow and support the assembly, adjustable guide vanes regulate admission and its direction, and the <strong>runner extracts work</strong>. The draft tube is downstream of that runner and recovers some residual velocity head; it is not the casing into which the penstock first discharges.</p>" +
                        "<p>Near-uniform admission is a design aim, not proof of exactly constant velocity everywhere. Scroll geometry, stay-ring loads, internal pressure including transients, construction joints and access must be coordinated with the powerhouse. A taper that satisfies a simple area-discharge rule can still have undesirable local flow or structural behaviour.</p>",
                    sources: [
                        { id: "HYDR626-00146", set: 17, question: 61 },
                        { id: "HYDR626-00149", set: 1, question: 63 },
                        { id: "HYDR626-00186", set: 21, question: 62 }
                    ]
                },
                {
                    id: "machines-draft-tube-energy",
                    title: "Draft-tube recovery is not energy creation or compulsory vacuum",
                    html: "<p>A <strong>draft tube</strong> is the water-filled passage from a reaction runner outlet toward the tailrace. It generally increases flow area to reduce mean velocity and recover part of the runner-exit kinetic head as piezometric head. It can permit an above-tailwater runner setting without simply abandoning that elevation head, but the admissible setting is limited by cavitation and the actual hydraulic arrangement.</p>" +
                        "<p>Let station 1 be the draft-tube inlet and station 2 its outlet. With no shaft work inside the tube, the energy equation is <strong>p<sub>1</sub>/(ρg) + z<sub>1</sub> + α<sub>1</sub>V<sub>1</sub><sup>2</sup>/(2g) = p<sub>2</sub>/(ρg) + z<sub>2</sub> + α<sub>2</sub>V<sub>2</sub><sup>2</sup>/(2g) + h<sub>L</sub></strong>. Use the same pressure reference at both stations, elevations on one datum, and head loss h<sub>L</sub> in m. The α values correct for nonuniform kinetic-energy flux.</p>" +
                        "<p>Define recovered piezometric head as <strong>H<sub>rec</sub> = (p<sub>2</sub> − p<sub>1</sub>)/(ρg) + z<sub>2</sub> − z<sub>1</sub></strong>. Therefore <strong>H<sub>rec</sub> = α<sub>1</sub>V<sub>1</sub><sup>2</sup>/(2g) − α<sub>2</sub>V<sub>2</sub><sup>2</sup>/(2g) − h<sub>L</sub></strong>. The static pressure-head rise alone also includes z<sub>1</sub> − z<sub>2</sub>; it is not identical to kinetic-energy recovery if the elevations differ.</p>" +
                        "<p>Runner-exit pressure is commonly subatmospheric for some settings, but it is not always below atmosphere. A sufficiently submerged setting or changed tailwater can give positive gauge pressure. Creating the largest possible vacuum is not a design objective independent of cavitation. A standard Pelton runner instead discharges freely at atmospheric pressure and has <strong>no conventional suction draft tube</strong>. Its water still has residual kinetic and elevation energy; nothing remains to recover is the wrong explanation for the different arrangement.</p>",
                    sources: [
                        { id: "HYDR626-00055", set: 7, question: 68 },
                        { id: "HYDR626-00066", set: 9, question: 59 },
                        { id: "HYDR626-00086", set: 11, question: 61 },
                        { id: "HYDR626-00147", set: 17, question: 62 }
                    ]
                },
                {
                    id: "machines-draft-tube-shape-efficiency",
                    title: "Draft-tube form, diffusion and efficiency definitions",
                    html: "<p>Draft tubes include <strong>straight divergent</strong> and <strong>elbow</strong> arrangements, with appropriate circular-to-noncircular transitions where required. An elbow can redirect a vertical runner discharge toward a shallower horizontal outfall, saving excavation depth but introducing a bend and more complicated diffusion. A draft tube is therefore not simply another name for an elbow with varying cross-section.</p>" +
                        "<p>At fixed discharge, V = Q/A explains why a suitably larger outlet area reduces residual velocity. However, excessively rapid expansion creates an adverse pressure gradient that can separate the flow. Bend losses, inlet swirl, nonuniformity, tailwater, available length and civil-space constraints affect recovery. Large means appropriately expanded relative to the inlet, not indefinitely large or loss-free.</p>" +
                        "<p>Using the recovered piezometric-head definition and approximately uniform inlet/outlet velocities, <strong>η<sub>d</sub> = H<sub>rec</sub> / [V<sub>1</sub><sup>2</sup>/(2g)] = 1 − (V<sub>2</sub>/V<sub>1</sub>)<sup>2</sup> − 2gh<sub>L</sub>/V<sub>1</sub><sup>2</sup></strong>. This states the assumed convention; another published efficiency definition must not be substituted unnoticed.</p>" +
                        "<p>The unrecovered inlet kinetic head is the sum of <strong>outlet kinetic head and irreversible loss</strong>. Consequently, 1 − η<sub>d</sub> is not generally the loss coefficient 2gh<sub>L</sub>/V<sub>1</sub><sup>2</sup>. They coincide only if the outlet kinetic term is negligible under this model. Similarly, draft-tube efficiency is not whole-turbine efficiency, and its denominator is not the plant's net head.</p>",
                    sources: [
                        { id: "HYDR626-00087", set: 11, question: 62 },
                        { id: "HYDR626-00088", set: 11, question: 63 }
                    ]
                },
                {
                    id: "machines-draft-tube-inconsistent-example",
                    title: "The 2250 kW draft-tube problem has no real stated solution",
                    html: "<p>The bank gives <strong>P = 2250 kW, H = 5.5 m, inlet diameter 2.8 m, overall efficiency 0.87, draft-tube efficiency 0.78 and head loss 0.89</strong>. The loss has no printed unit; the calculation below explicitly assumes <strong>h<sub>L</sub> = 0.89 m of water</strong>, α<sub>1</sub> = α<sub>2</sub> = 1, and an output/head boundary consistent with P = η<sub>o</sub>ρgQH.</p>" +
                        "<p><strong>Q = 2250/(0.87 × 9.81 × 5.5) ≈ 47.93266 m<sup>3</sup>/s</strong>. The inlet area is A<sub>1</sub> = π(2.8)<sup>2</sup>/4 ≈ 6.15752 m<sup>2</sup>, giving <strong>V<sub>1</sub> ≈ 7.78441 m/s</strong> and V<sub>1</sub><sup>2</sup> ≈ 60.59702 m<sup>2</sup>/s<sup>2</sup>. Retain unrounded intermediate values in the following check.</p>" +
                        "<p>Rearranging the stated recovery-efficiency convention gives <strong>V<sub>2</sub><sup>2</sup> = (1 − η<sub>d</sub>)V<sub>1</sub><sup>2</sup> − 2gh<sub>L</sub></strong>. Substitution yields <strong>0.22 × 60.59702 − 19.62 × 0.89 ≈ −4.13046 m<sup>2</sup>/s<sup>2</sup></strong>. A real outlet speed cannot have a negative square, so <strong>none of the offered velocities follows from these givens under this definition</strong>.</p>" +
                        "<p>There is also a useful bound: even if V<sub>2</sub> approached zero, η<sub>d,max</sub> = 1 − 2gh<sub>L</sub>/V<sub>1</sub><sup>2</sup> ≈ <strong>0.7118</strong>, below the stated 0.78. Ignoring the loss instead gives about 3.651 m/s, still not 1.767. The loss unit, efficiency definition or other givens need clarification; do not take the square root of an absolute value, discard the loss or alter data to force the stored answer.</p>",
                    sources: [{ id: "HYDR626-00075", set: 10, question: 60 }]
                },
                {
                    id: "machines-cavitation-setting",
                    title: "Cavitation depends on absolute pressure, temperature and setting",
                    html: "<p>Cavitation involves vapour formation when relevant local <strong>absolute pressure approaches the liquid's vapour pressure</strong>, followed by collapse when pressure recovers. Pressure fluctuations and local minima matter, not just a section-average reading. Collapse can cause pitting, noise, vibration and loss of performance. A pressure drop is not sufficient by itself: the resulting absolute level and water temperature must be known.</p>" +
                        "<p>Use <strong>p<sub>abs</sub> = p<sub>gauge</sub> + p<sub>atm,site</sub></strong> and water vapour pressure p<sub>v</sub>(T). Atmospheric pressure decreases with site altitude, and vapour pressure rises with water temperature. Thus an unchanged gauge reading or geometric runner setting does not guarantee the same cavitation margin at another site. Negative gauge pressure alone is not cavitation.</p>" +
                        "<p>For one common simplified turbine-setting convention, <strong>σ<sub>available</sub> = [H<sub>atm,site</sub> − H<sub>v</sub>(T) − H<sub>s</sub>]/H<sub>n</sub></strong>, where H<sub>atm,site</sub> = p<sub>atm,site</sub>/(ρg), H<sub>v</sub> = p<sub>v</sub>/(ρg), and H<sub>s</sub> is the chosen runner reference elevation above tailwater, positive upward. All heads are in m. Compare with the manufacturer's or model's required σ using the <strong>same datum and operating convention</strong>, plus the specified margin.</p>" +
                        "<p>In that simplified convention, H<sub>s</sub> ≤ H<sub>atm,site</sub> − H<sub>v</sub> − σ<sub>required</sub>H<sub>n</sub> expresses a limiting setting before an additional design margin. Lower tailwater, warmer water or reduced atmospheric pressure tightens the allowable setting. Actual runner pressure fields, swirl, transients and the applicable cavitation criterion need more detailed treatment. The bank's <strong>one-third atmosphere</strong> is not a universal threshold at either end of a draft tube.</p>",
                    sources: [
                        { id: "HYDR626-00058", set: 8, question: 61 },
                        { id: "HYDR626-00085", set: 11, question: 60 }
                    ]
                },
                {
                    id: "machines-pump-suction-cavitation",
                    title: "Reciprocating pumps can cavitate on the suction stroke",
                    html: "<p>Reaction turbines and centrifugal pumps can develop low local pressures near blades, at an impeller eye or in a draft-tube region. <strong>Reciprocating pumps can also cavitate</strong>: suction lift, valve losses and the need to accelerate the inlet liquid can depress cylinder or suction-line pressure. A high delivery pressure says nothing by itself about the minimum pressure during suction.</p>" +
                        "<p>For a steady suction calculation referenced to a pump's specified inlet datum, available net positive suction head is <strong>NPSH<sub>a</sub> = p<sub>s,abs</sub>/(ρg) + V<sub>s</sub><sup>2</sup>/(2g) − p<sub>v</sub>/(ρg)</strong>. For a large open supply reservoir, negligible surface velocity and that same datum, it can be written <strong>NPSH<sub>a</sub> = H<sub>atm,site</sub> + z<sub>reservoir</sub> − z<sub>pump</sub> − h<sub>loss,suction</sub> − H<sub>v</sub></strong>. Terms are in m of pumped liquid.</p>" +
                        "<p>Compare available head with the applicable machine requirement and margin at the operating point. A centrifugal-pump NPSH curve's stated criterion is not automatically the threshold for absolutely no bubbles. A reciprocating system additionally needs its time-varying suction acceleration and valve behaviour checked; a mean-flow reservoir calculation can miss its lowest instantaneous pressure.</p>" +
                        "<p>Consequently, the supplied pair <strong>reaction turbines and reciprocating pumps</strong> is possible as well as <strong>reaction turbines and centrifugal pumps</strong>. The stored option d is not unique. Pelton's usual atmospheric free-jet runner avoids the conventional reaction-runner suction arrangement, but impulse classification must not be read as immunity for every nozzle or local liquid-flow condition.</p>",
                    sources: [{ id: "WATE701-00379", set: 33, question: 51 }]
                },
                {
                    id: "machines-generators-rating",
                    title: "Generator types, kW, kVA and power factor",
                    html: "<p>The <strong>generator</strong>, not the turbine or transformer, converts mechanical shaft work into electrical energy by electromagnetic induction. A synchronous generator is common in hydropower; low-speed arrangements commonly use salient poles. Induction generators are an alternative in suitable systems, requiring a source of magnetizing reactive power; a simple grid-connected induction generator operates with generating slip rather than exactly at synchronous rotor speed. Converter-connected systems can decouple permitted shaft-speed variation from grid frequency.</p>" +
                        "<p>Generator efficiency relates two different power boundaries: <strong>P<sub>electric,kW</sub> = η<sub>g</sub>P<sub>shaft,kW</sub></strong>. Apparent power is then <strong>S<sub>kVA</sub> = P<sub>electric,kW</sub>/|PF|</strong> for nonzero generating power and nonzero power-factor magnitude. In general <strong>0 ≤ |PF| ≤ 1</strong>, and unity is possible. Leading/lagging reactive operation and any signed convention must be stated; generally below unity is not a physical prohibition on unity.</p>" +
                        "<p><strong>Original rating illustration, not bank data:</strong> 1000 kW at the generator shaft and η<sub>g</sub> = 0.96 give 960 kW at its terminals. At |PF| = 0.80, the corresponding apparent power is 960/0.80 = <strong>1200 kVA</strong>. At unity it is 960 kVA. Using 1000/0.80 would incorrectly substitute shaft power for electrical output.</p>" +
                        "<p>Specify voltage, frequency, speed/poles, kVA or MVA, rated power factor, cooling and the thermal/reactive capability envelope together. For balanced three-phase operation, S = √3V<sub>LL</sub>I/1000 in kVA with line-to-line voltage in V and current in A. kVA arithmetic alone does not demonstrate adequate excitation, heating or fault capability. Auxiliary consumption and transformer/cable losses reduce export beyond terminal output and must not be silently included in turbine efficiency.</p>",
                    sources: [
                        { id: "HYDR626-00109", set: 13, question: 64 },
                        { id: "HYDR626-00232", set: 26, question: 61 }
                    ]
                },
                {
                    id: "machines-synchronous-pole-consistency",
                    title: "461.54 rpm at 50 Hz cannot give a conventional 13-pole generator",
                    html: "<p>For a conventional synchronous AC generator, <strong>N<sub>sync</sub> = 120f/p</strong>, where f is frequency in Hz, N<sub>sync</sub> is mechanical speed in rpm and p is the <strong>total number of poles</strong>. North and south poles form pairs, so p must be a <strong>positive even integer: 2, 4, 6, …</strong>. Do not confuse p with pole pairs or with the power P used in turbine formulas.</p>" +
                        "<p>The bank's f = 50 Hz and N<sub>sync</sub> = 461.54 rpm give <strong>p = 120 × 50/461.54 ≈ 13</strong> algebraically. That is not a physically valid total pole count for the stated conventional machine. <strong>No supplied option satisfies both the specified speed and frequency.</strong> Choosing a nearby even number changes the speed; it does not solve the original givens.</p>" +
                        "<table><thead><tr><th scope='col'>Total poles</th><th scope='col'>Speed at 50 Hz</th><th scope='col'>Interpretation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>12</th><td>500 rpm</td><td>Valid alternative duty, not 461.54 rpm.</td></tr>" +
                        "<tr><th scope='row'>14</th><td>428.571 rpm</td><td>Valid alternative duty, not 461.54 rpm.</td></tr>" +
                        "<tr><th scope='row'>26</th><td>230.769 rpm</td><td>Thirteen pole pairs; also not the given duty.</td></tr></tbody></table>" +
                        "<p>Real selection iterates among allowed synchronous speeds, hydraulic specific speed, runner diameter and coupling arrangements. A gearbox or converter would require explicitly different assumptions about which shaft speed or frequency is being stated. Neither is present in this question, and neither is invented to legitimize 13 total poles.</p>",
                    sources: [{ id: "HYDR626-00074", set: 9, question: 67 }]
                },
                {
                    id: "machines-governor-load-response",
                    title: "Governing links electrical load to water admission",
                    html: "<p>A turbine governor regulates mean speed in isolated operation by adjusting water admission as load changes. A simplified rotor balance is <strong>J dω/dt = T<sub>t</sub> − T<sub>e</sub> − T<sub>loss</sub></strong>, where J is combined rotational inertia in kg·m<sup>2</sup>, ω is angular speed in rad/s and the torques are in N·m. An imbalance accelerates or decelerates the unit; the governor does not keep instantaneous speed mathematically constant.</p>" +
                        "<p>With isolated <strong>load acceptance</strong>, electrical opposing torque initially rises and speed tends to fall; the control admits more water within its limits. During <strong>load rejection</strong>, electrical torque drops before hydraulic input has fully reduced, so the rotor tends to accelerate. Flywheel inertia limits the immediate rate of change but does not replace sustained governor control.</p>" +
                        "<p>On a large interconnected grid, frequency is largely imposed by the system. Governor settings and droop then govern real-power response and load sharing rather than independently setting a different steady grid frequency. Excitation and the automatic voltage regulator chiefly address voltage/reactive behaviour and are different controls. Hydraulic and electrical dynamics remain coupled during disturbances.</p>" +
                        "<p>Francis admission uses guide vanes; Kaplan operation coordinates guide vanes and runner pitch; Pelton uses nozzle needles, with deflectors where provided. Rapidly reducing flow can aggravate water hammer, whereas slow removal of turbine torque can increase overspeed. A Pelton deflector can quickly remove jet action from the runner while the needle reduces discharge at a separately controlled rate. Closure laws, transient limits, servo response and protection require a system study, not an arbitrary universal timing rule.</p>",
                    sources: [{ id: "HYDR626-00059", set: 8, question: 62 }]
                },
                {
                    id: "machines-pump-curves-extension",
                    title: "Pump curves, system duty and series/parallel operation",
                    html: "<p><strong>Syllabus extension, without an assigned pump-curve dataset:</strong> a centrifugal impeller transfers shaft work to water; its diffuser or volute can convert part of the resulting velocity into pressure. Across defined suction and discharge sections, pump head is <strong>H<sub>p</sub> = (p<sub>d</sub> − p<sub>s</sub>)/(ρg) + z<sub>d</sub> − z<sub>s</sub> + (V<sub>d</sub><sup>2</sup> − V<sub>s</sub><sup>2</sup>)/(2g)</strong> for approximately uniform section velocities. Pressure difference alone is sufficient only when the other differences are negligible.</p>" +
                        "<p>At a stated speed and impeller configuration, examine <strong>head–discharge, efficiency–discharge, shaft-input-power and required-NPSH curves</strong>. Many centrifugal pumps have falling head with rising discharge and an efficiency peak near a best-efficiency point, but the actual manufacturer's curve governs. Input power and the allowable continuous operating range must be checked rather than guessed from that usual head-curve shape.</p>" +
                        "<p>A simple steady system can have <strong>H<sub>system</sub> = H<sub>static</sub> + KQ<sup>2</sup></strong>, with K incorporating the applicable pipe/local-loss model in consistent units. The operating duty is an acceptable intersection of pump and system characteristics. Changing water levels, valve position, speed or pipe resistance shifts that intersection. A nameplate maximum flow is not automatically the delivered flow in the connected system.</p>" +
                        "<ul><li><strong>Series:</strong> add individual pump heads at the same throughflow, then intersect the combined curve with the system curve.</li><li><strong>Parallel:</strong> add individual discharges at the same head, allowing for branch conditions, then determine the combined system duty.</li><li><strong>Limits:</strong> check suction conditions, priming, minimum flow, cavitation, motor loading, pressure ratings and stable operation. Two pumps do not automatically double both flow and head.</li></ul>" +
                        "<p>Affinity laws estimate corresponding points only under their assumptions; the final operating point still comes from the system interaction. Detailed pump data are absent from this bank, so these curves and checks are a teaching workflow rather than a selected pump or certified operating schedule.</p>",
                    sources: []
                },
                {
                    id: "machines-reciprocating-displacement",
                    title: "Reciprocating displacement, slip and pressure dependence",
                    html: "<p>A reciprocating pump draws liquid into a chamber and displaces it through delivery valves using a piston or plunger. This <strong>positive-displacement</strong> principle is different from continuous rotodynamic impeller work. The historical force-pump name describes some pressure-delivery arrangements; it is not a more precise modern classification than positive displacement.</p>" +
                        "<p>For a single-acting cylinder of area A and stroke L, running at N crank revolutions per minute with one delivery stroke per revolution, <strong>Q<sub>theoretical</sub> = ALN/60</strong>. For an ideal double-acting cylinder with piston-rod area A<sub>rod</sub>, <strong>Q<sub>theoretical</sub> = (2A − A<sub>rod</sub>)LN/60</strong>. Areas are in m<sup>2</sup>, stroke in m and mean discharge in m<sup>3</sup>/s. This is a cycle-average displacement, not constant instantaneous flow.</p>" +
                        "<p>At fixed speed and stroke, ideal displacement is independent of discharge pressure; the drive must supply the required force and work. Real delivery can differ through leakage, valve timing, compressibility, incomplete filling and suction limitations. Slip is commonly expressed as Q<sub>theoretical</sub> − Q<sub>actual</sub>; it is not always explainable as valve leakage alone. Increased delivery pressure may reduce actual flow for a given real machine, but a universal decrease cannot be inferred without its operating model.</p>" +
                        "<p>The stem with charge discharge pressure is corrupted. Even interpreting it as a change or increase of delivery pressure does not specify ideal versus actual delivery, speed or leakage. Pulsation-control arrangements can reduce fluctuations and suction acceleration, but adequate suction conditions and suitable pressure-relief/protection arrangements remain necessary. A high discharge pressure does not prevent suction cavitation.</p>",
                    sources: [
                        { id: "HYDR626-00083", set: 10, question: 68 },
                        { id: "HYDR626-00139", set: 16, question: 66 },
                        { id: "HYDR626-00142", set: 16, question: 69 }
                    ]
                },
                {
                    id: "machines-pump-efficiency-selection",
                    title: "Compare pump efficiency at the required duty",
                    html: "<p>Pump overall efficiency is <strong>η<sub>p</sub> = ρgQ<sub>delivered</sub>H<sub>p</sub>/P<sub>shaft,in</sub></strong>. It measures useful hydraulic output against shaft input, the reverse direction of the turbine's water-to-shaft efficiency. If electrical consumption is the concern, include motor and drive efficiencies on the input side rather than treating a pump-only percentage as wire-to-water efficiency.</p>" +
                        "<p>Reciprocating machines can suit low-flow, high-pressure or controlled-displacement duties. Centrifugal and other rotodynamic pumps can suit large, comparatively continuous flows. Neither class has a permanently fixed efficiency nor is one class always more efficient. Size, liquid properties, clearances, valve losses, friction, suction conditions, wear and distance from the intended duty affect the comparison.</p>" +
                        "<p>A fair comparison specifies the <strong>same delivered Q and required head</strong>, suitable operating limits, and the hours spent at each duty. Consider pumping energy, not only the highest catalogue efficiency. Leakage or incomplete filling can degrade a reciprocating pump; recirculation, throttling and off-design operation can degrade a centrifugal system. A well-matched machine of either class can outperform a poorly matched example of the other.</p>" +
                        "<p>Selection also considers fluid viscosity and temperature, solids/abrasion, pulsation, controllability, maintenance, access, initial cost and reliability. The stored higher-efficiency answer is an unstated-duty generalization, not a universal physical comparison or a guarantee of 90% efficiency.</p>",
                    sources: [{ id: "HYDR626-00140", set: 16, question: 67 }]
                },
                {
                    id: "machines-rotor-safety-extension",
                    title: "Rotor speed, runaway, vibration and civil-design interfaces",
                    html: "<p><strong>Syllabus extension, without an assigned rotor-safety design question:</strong> normal speed selection also fixes torque, peripheral speed and mechanical loading. For shaft output P<sub>s</sub> in W, <strong>T = P<sub>s</sub>/ω</strong>, where ω = 2πN/60. A lower-speed unit delivering the same power requires more torque. Peripheral speed at a specified rotor diameter D<sub>rotor</sub> is πD<sub>rotor</sub>N/60; generator rotor diameter and hydraulic runner diameter must not be confused.</p>" +
                        "<p>For fixed mass and radius, centrifugal force scales as <strong>mω<sup>2</sup>r</strong>. Consequently, overspeed loads rise quadratically with speed in that simple comparison. <strong>Runaway</strong> refers to the unloaded speed attainable under specified hydraulic admission/head and losses, not a universal multiple of rated rpm. Load-rejection overspeed depends on inertia, governor/protection response and waterway dynamics and is not necessarily the same condition as steady runaway.</p>" +
                        "<p>Check radial and axial hydraulic thrust, rotating weight, bearing loads, shaft alignment, lubrication/cooling and rotor-to-stator clearances. Excitation includes rotation-related forces, blade-passing effects, hydraulic pulsations and electrical disturbances. Compare these with shaft, support and foundation modes to avoid unacceptable vibration or resonance. No generic allowable vibration, runaway factor or foundation stiffness is supplied here.</p>" +
                        "<p>The equipment–civil interface must transmit static, transient and dynamic loads through bearings, frames, anchors, embedded rings and concrete/rock foundations while controlling deformation. Crane loads and equipment removal can create different structural states from normal operation. Coordinate machine limits, transient analysis, instrumentation, protection and maintenance access with the responsible disciplines. The listed DoED/USACE documents are reference leads with verified publication metadata, not inspected clauses from which numerical safety limits are asserted.</p>",
                    sources: []
                },
                {
                    id: "powerhouse-types-extension",
                    title: "Powerhouse types follow site and waterway constraints",
                    html: "<p><strong>Syllabus extension, without an assigned powerhouse-type selection question:</strong> select the building and machine arrangement from the site rather than from head alone. Establish the waterway route, head and tailwater ranges, flood and sediment exposure, topography, geology/groundwater, access, electrical connection and unit-maintenance requirements before comparing alternatives.</p>" +
                        "<table><thead><tr><th scope='col'>Arrangement</th><th scope='col'>Useful site relationship</th><th scope='col'>Principal checks</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Surface</th><td>Main machine hall is accessible from ground level; the turbine and draft-tube substructure may extend below it.</td><td>Foundation, flood level, slope stability, access, penstock approach and tailrace capacity.</td></tr>" +
                        "<tr><th scope='row'>Semi-underground</th><td>A significant lower part is embedded/excavated while the upper hall remains exposed and accessible.</td><td>Retaining loads, rock/soil support, groundwater, waterproofing and the chosen unit setting.</td></tr>" +
                        "<tr><th scope='row'>Underground</th><td>Machine hall occupies a cavern connected by access, pressure and tailrace waterways.</td><td>Rock stresses and discontinuities, cavern stability, groundwater, construction sequence, ventilation, drainage and safe evacuation.</td></tr>" +
                        "<tr><th scope='row'>In-water or bulb/tubular installation</th><td>Machine arrangement is integrated with a low-head water passage; a bulb can enclose the generator in the flow path.</td><td>Hydraulic losses, sealing/cooling, isolation against backwater, access and removal of submerged or enclosed equipment.</td></tr></tbody></table>" +
                        "<p>In-water describes integration with the waterway and can coexist with surface building portions; these classification axes are not always mutually exclusive. Likewise, a dam-toe powerhouse and one remote from the intake describe location relative to the scheme, not necessarily surface versus underground construction.</p>" +
                        "<p>Compare pressure-waterway and tailrace losses, excavation and support cost, land/environmental effects, flood protection, transport and whole-life operation. Underground siting may suit a favourable rock mass and steep terrain, but high head does not compel it and rock cover alone does not certify a cavern. Low-head schemes especially need economical passages with low hydraulic loss, but that does not remove flood, maintenance or geotechnical requirements. There is no supplied site dataset from which to declare one arrangement the final choice.</p>",
                    sources: []
                },
                {
                    id: "powerhouse-layout-extension",
                    title: "General arrangement and dimensional workflow",
                    html: "<p><strong>Syllabus extension, without an assigned complete powerhouse layout:</strong> first select the unit count, shaft orientation, runner setting and equipment envelopes. For a typical vertical reaction unit, water enters from the pressure side through its inlet equipment and scroll case, passes the runner and draft tube, then leaves to the tailrace. The generator, shaft and bearings occupy coordinated upper levels. Unit bays commonly line up beneath a travelling crane, with an erection/maintenance bay linked to the delivery route.</p>" +
                        "<p>A horizontal arrangement instead needs the appropriate axial shaft/coupling and component-withdrawal space. A Pelton installation needs jet and bucket clearance plus free drainage of spent water, not a reaction-type suction draft tube. An in-water generator arrangement requires its own access and removal route after suitable isolation. Copying a vertical-Francis floor plan into all three cases is not a layout method.</p>" +
                        "<ol><li><strong>Fix hydraulic levels:</strong> relate minimum/maximum tailwater, cavitation setting, runner and draft-tube elevations, drainage sumps and flood protection to one datum. Determine substructure depth from those levels and foundation requirements.</li><li><strong>Establish plan envelopes:</strong> include machine, inlet valve, piping, access and dismantling spaces. Derive unit-bay pitch from non-overlapping equipment and clearance zones. Add erection-bay length and any separate end/access zones without counting the same allowance twice.</li><li><strong>Establish hall width:</strong> accommodate the widest equipment/removal envelope, upstream/downstream aisles, crane coverage and service routes. Rooms or galleries not already included require separate space.</li><li><strong>Establish lifting height:</strong> start at the highest obstruction to be cleared; add safe lift clearance, lifted-component height, rigging to the hook, then the actual crane/hoist and roof allowances. Check removal hatches and the entire transport path, not just the final hook position.</li><li><strong>Coordinate services and structure:</strong> provide control/governor space, cooling and lubricating systems, drainage/dewatering, electrical galleries, ventilation and fire/evacuation provisions; resolve crane, machine, hydraulic and foundation loads together.</li></ol>" +
                        "<p>Keep wet services, oil systems and electrical equipment appropriately separated; locate transformers, switchgear, cables and auxiliary supplies using the applicable safety design. Maintenance assemblies must have laydown space without blocking operating access or exits. Crane capacity follows the governing lift and rigging/load basis, not generator kW. These steps determine dimensions from real envelopes and operations; no universal length, width or height can be inferred from head or runner diameter alone.</p>",
                    sources: []
                },
                {
                    id: "powerhouse-bay-example-extension",
                    title: "Hypothetical rectangular-bay arithmetic, not prescribed clearances",
                    html: "<p><strong>Syllabus extension and wholly hypothetical dimensional illustration:</strong> assume three units, each with a rectangular machine envelope <strong>6 m along the hall by 4 m across it</strong>. For this arithmetic only, allocate 1.5 m at each longitudinal end of each machine, a 2 m upstream aisle and a 3 m downstream aisle. These invented clearances are <strong>not manufacturer requirements, NEC/DoED/USACE prescriptions or safe minimums</strong>.</p>" +
                        "<p>Each unit zone is <strong>6 + 1.5 + 1.5 = 9 m long</strong>. Adjacent machine edges are consequently 3 m apart: each contributes its own 1.5 m clearance. Common clear internal hall width is <strong>4 + 2 + 3 = 9 m</strong>. Add one separate 9 m-long erection bay of the same width at an end; the erection bay is not also counted as a unit clearance.</p>" +
                        "<table><thead><tr><th scope='col'>Item</th><th scope='col'>Calculation</th><th scope='col'>Result</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Three unit zones</th><td>3 × 9 m</td><td>27 m length</td></tr>" +
                        "<tr><th scope='row'>Clear internal hall length</th><td>27 + 9 m erection bay</td><td>36 m</td></tr>" +
                        "<tr><th scope='row'>Clear rectangular floor area</th><td>36 × 9</td><td>324 m<sup>2</sup></td></tr>" +
                        "<tr><th scope='row'>Area cross-check</th><td>Three 9 × 9 unit zones plus one 9 × 9 erection bay</td><td>243 + 81 = 324 m<sup>2</sup></td></tr></tbody></table>" +
                        "<p><strong>Independent hypothetical lifting-height check:</strong> suppose the highest obstruction is 2 m above the hall floor, the lifted component is 3 m high, its lower edge must clear that obstruction by an assumed 1 m, and rigging extends 1.5 m from component top to hook. Required hook elevation is then <strong>2 + 1 + 3 + 1.5 = 7.5 m above the floor</strong>. If a further assumed 2 m is reserved from that hook position to the underside of the roof for the crane/hoist envelope and clearance, the trial roof-underside elevation is <strong>9.5 m</strong>. Actual hoist geometry and all extraction positions must replace these assumptions.</p>" +
                        "<p>The 324 m<sup>2</sup> figure excludes wall thickness, separate electrical/auxiliary rooms, stairs and any additional transport turning space. It does not establish that the erection bay can hold the real dismantled unit. Substructure depth, draft-tube shape, structural thickness and foundation dimensions are not derived by this rectangle. Replace every envelope and allowance with coordinated equipment, site and safety information before design; the illustration teaches addition of defined spaces, not construction approval.</p>",
                    sources: []
                }
            ],
            gaps: [
                "All 67 assigned ACiE0806 questions, including WATE701-00379, are represented by exact source/model/question triples. Coverage does not certify the original keys: inconsistent, ambiguous and convention-dependent items remain visible in the bank checks. No questions from other topic assignments are used to fill the gaps.",
                "The source-free syllabus extension machines-equipment-extension supplies the missing functional equipment inventory. No assigned record supplies a complete gate/valve schedule, pressure and closure envelope, operating forces, leakage limits, sediment specification or equipment–civil interface drawing.",
                "The source-free syllabus extension machines-turgo-crossflow-extension covers additional turbine types without a matching assigned stem. The bank also lacks measured efficiency curves, hill diagrams, cavitation maps and a seasonal duty distribution; qualitative comparisons do not establish universal head or specific-speed limits.",
                "The source-free syllabus extension machines-francis-design-extension gives a mean-line preliminary workflow. Inlet flow coefficient, blockage, blade angles, outlet/hub geometry, hydraulic/mechanical loss allocation and manufacturer design data are missing. The supplied peripheral-diameter problem is not a complete Francis design.",
                "Exact duty remains unresolved in the 6 MW jet problem unless geometry or operating opening is relaxed; the 1.25 cumec jet count and the 300 cumec unit count are capacity ceilings, not exact simultaneous rated duties. The 461.54 rpm/50 Hz pole data have no valid conventional option, and the 2250 kW draft-tube givens produce no real outlet velocity under the stated recovery/loss assumptions. Horsepower and output-boundary ambiguities are not silently repaired.",
                "The source-free syllabus extensions machines-pump-curves-extension and machines-rotor-safety-extension provide the missing pump/system-curve and mechanical-safety workflows. Actual pump curves, instantaneous suction conditions, transient studies, rotor/thrust loads, vibration limits, protection settings and foundation properties are not supplied; no safe operating envelope is certified.",
                "The three source-free syllabus extensions powerhouse-types-extension, powerhouse-layout-extension and powerhouse-bay-example-extension cover site selection, general arrangements and dimensions. No assigned question supplies vendor envelopes, lifting/removal drawings, clearance rules, flood/tailwater levels or geotechnical data. Every number in the rectangular-bay/lifting illustration is explicitly hypothetical, not a prescribed dimension.",
                "Reference verification is limited to what the supplied technical report established: DOE turbine-types and USBR energy-balance HTML content were inspected there; DoED and USACE listings/links and edition metadata were verified, not their full technical clauses. DoED PowerHouse Design Guidelines is identified as 2018; USACE EM 1110-2-3001 as 2008 and EM 1110-2-3006 as 22 April 2024, superseding 1994. No uninspected clause, universal bucket proportion, current Nepal adoption or project approval is claimed."
            ],
            cautions: [
                {
                    html: "<p><strong>Bank check: lifting input and turbine output are opposite efficiency applications.</strong> The printed vQH is hydraulic lifting power only if v denotes specific weight γ. Actual pump shaft input is ρgQH/η<sub>p</sub>, not ηρgQH. The explanation switches incorrectly to generation. Hydraulic machines also include pumps, and positive-displacement pumps are not rotodynamic; the two broad machinery stems need a turbine or turbomachinery restriction for their intended statements.</p>",
                    sources: [
                        { id: "HYDR626-00013", set: 3, question: 63 },
                        { id: "HYDR626-00097", set: 12, question: 61 },
                        { id: "HYDR626-00101", set: 12, question: 65 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: unit power is not defined by unit discharge.</strong> For the same turbine at comparable operation, P<sub>u</sub> = P/H<sup>3/2</sup>. Q<sub>u</sub> = Q/√H is a separate reduced quantity. Imposing both Q = 1 m<sup>3</sup>/s and H = 1 m gives 9.81 kW of hydraulic power for the adopted water properties, not the standard unit-power definition. The stored wording and explanation need that distinction.</p>",
                    sources: [{ id: "HYDR626-00053", set: 7, question: 66 }]
                },
                {
                    html: "<p><strong>Bank check: geometric pump similarity gives D<sup>5</sup> power at fixed speed.</strong> Q ∝ ND<sup>3</sup> and H ∝ N<sup>2</sup>D<sup>2</sup> imply P ∝ ρN<sup>3</sup>D<sup>5</sup> at comparable efficiency. Under that interpretation, none of D<sup>3</sup>, D<sup>2</sup> or D<sup>4</sup> is correct. D<sup>3</sup> can appear in a different limited-impeller-trimming approximation, but its conditions are absent. The explanation cannot justify the stored option a using geometric-similarity flow and head laws.</p>",
                    sources: [{ id: "HYDR626-00067", set: 9, question: 60 }]
                },
                {
                    html: "<p><strong>Bank check: impulse runners do change energy form and velocity.</strong> They extract kinetic energy as mechanical work while operating approximately at atmospheric pressure. Does not change energy form is not a valid physical definition. Both impulse and reaction runners change water velocity, so the velocity-change stem cannot uniquely identify reaction turbines. Pressure change through the runner is the relevant distinction; neither stored key is silently rewritten.</p>",
                    sources: [
                        { id: "HYDR626-00102", set: 12, question: 66 },
                        { id: "HYDR626-00103", set: 12, question: 67 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: outward and radial are overlapping Fourneyron descriptions.</strong> Fourneyron is an outward radial-flow reaction turbine. Stored option a is the more specific outward-flow answer, but option d, radial flow, is also true. The stem must specify the classification level before the choices become mutually exclusive.</p>",
                    sources: [{ id: "HYDR626-00104", set: 13, question: 60 }]
                },
                {
                    html: "<p><strong>Bank check: 95–440 rpm is not a Francis selection criterion.</strong> Actual speed alone lacks head, one-runner power and the operating envelope needed for selection. If the numbers were intended as a specific-speed range, its definition and power/head units are missing. The stored Francis answer is not established by the literal stem, and rpm is not silently reinterpreted as specific speed.</p>",
                    sources: [{ id: "HYDR626-00108", set: 13, question: 63 }]
                },
                {
                    html: "<p><strong>Bank check: do not count volumetric loss twice.</strong> Runner power divided by inlet water power is the intended hydraulic ratio, while shaft power divided by runner-transferred power is mechanical efficiency. If inlet water power uses total admitted flow, that first ratio already includes leakage. Only the separate runner-flow hydraulic definition combines with an additional Q<sub>r</sub>/Q<sub>in</sub> factor. Generator efficiency belongs beyond the turbine shaft.</p>",
                    sources: [
                        { id: "HYDR626-00069", set: 9, question: 62 },
                        { id: "HYDR626-00084", set: 11, question: 59 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: the repeated 2000 hp duty gives the same result.</strong> At 300 rpm and 150 m, n<sub>s</sub> = 25.5577 in rpm–hp–m, supporting 25.56 in the first item and <strong>option d, 10–35</strong>, in the range item. Stored range option b, 35–60, and the explanation's Francis/50–60 speculation do not follow. The same mechanical power expressed in kW gives 22.0701; conventional specific speed is unit-dependent, not dimensionless or merely the actual shaft rpm.</p>",
                    sources: [
                        { id: "HYDR626-00070", set: 9, question: 63 },
                        { id: "HYDR626-00079", set: 10, question: 64 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: 1986.525 is kW, and the intended hp option contains a typo.</strong> The 25 m, 9 cumec, 90% calculation gives 1986.525 kW. It is 2663.97 mechanical hp, or 2662.90 hp using 746 W/hp. Corresponding specific speeds are 159.4601 in kW, 184.6588 in mechanical hp and about 184.62 with the rounded conversion. Option c's printed 2662.209 HP is not reproduced, though its 184.62 identifies the intended convention. Output and efficiency must also refer to the same shaft or electrical boundary.</p>",
                    sources: [{ id: "HYDR626-00076", set: 10, question: 61 }]
                },
                {
                    html: "<p><strong>Bank check: three turbines is only a capacity ceiling.</strong> With n<sub>s</sub> = 500 interpreted in rpm–kW–m, total output is 12066.3 kW and one-unit output from the specified speed/head is 5590.17 kW. The quotient is 2.1585, not exactly three. Equal operation of three units requires a different per-unit duty. A horsepower convention changes the quotient, and kalima is not treated as an established turbine name. The stored three is conditional, not a fully consistent rated design.</p>",
                    sources: [{ id: "HYDR626-00077", set: 10, question: 62 }]
                },
                {
                    html: "<p><strong>Bank check: divide the 5 MW between the two runners.</strong> On the intended equal-share turbine-output basis, each receives 2500 kW. At the unchanged 6000 rpm and 20 m, n<sub>s</sub> is 7093.06 in kW or 8212.29 using 746 W/hp, consistent with option b, not stored option d, 2098. Mechanical hp gives about 8213.94 and metric horsepower about 8270.71. If the 5 MW is strictly electrical, generator efficiency is missing for shaft-based selection. The unusual rpm is not replaced.</p>",
                    sources: [{ id: "HYDR626-00081", set: 10, question: 66 }]
                },
                {
                    html: "<p><strong>Bank check: 13 total poles is invalid for the stated conventional generator.</strong> The equation gives approximately 13, but total poles must be a positive even integer. No option meets 461.54 rpm at 50 Hz. Twelve poles would require 500 rpm and fourteen 428.571 rpm; selecting twelve as nearest does not preserve the given condition. Thirteen pole pairs would mean 26 poles and 230.769 rpm. The inconsistent speed/pole data remain unresolved.</p>",
                    sources: [{ id: "HYDR626-00074", set: 9, question: 67 }]
                },
                {
                    html: "<p><strong>Bank check: define nozzle function and the speed-ratio denominator.</strong> A nozzle converts available head into jet kinetic energy; pressure variations is only an imprecise description. φ = u/√(2gH) and λ = u/V<sub>j</sub> differ when C<sub>v</sub> differs from one, with φ = C<sub>v</sub>λ. The reaction-turbine peripheral coefficient uses theoretical spouting velocity, not necessarily an actual inlet jet. Neither the name speed ratio nor the nozzle label supplies missing numerical assumptions.</p>",
                    sources: [
                        { id: "HYDR626-00105", set: 13, question: 61 },
                        { id: "HYDR626-00148", set: 17, question: 63 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: half jet speed does not enforce 180° turning or an 88% ceiling.</strong> For fixed k and backward-tangent exit angle β, η<sub>jet</sub> = 2λ(1 − λ)(1 + kcosβ) has its maximum at λ = 1/2, with maximum (1 + kcosβ)/2. Bucket geometry sets the turning angle. Nozzle, runner, mechanical and generator losses have different boundaries. The ideal lossless-reversal limit is unity; 88% is an unverified practical figure, not a universal maximum.</p>",
                    sources: [
                        { id: "HYDR626-00141", set: 16, question: 68 },
                        { id: "HYDR626-00093", set: 11, question: 67 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: bucket proportions are empirical.</strong> B ≈ 5d, depth ≈ 1.2d and Z ≈ 15 + D/(2d) are preliminary bank heuristics, not universal laws or verified mandatory clauses. They give 425 mm width for an 85 mm jet and 19 buckets for D = 2 m, d = 0.25 m under those assumptions. The width calculation does not use the given 1.5 m runner diameter. Final interception, clearance, bucket geometry and loading still require design evidence.</p>",
                    sources: [
                        { id: "HYDR626-00072", set: 9, question: 65 },
                        { id: "HYDR626-00082", set: 10, question: 67 },
                        { id: "HYDR626-00089", set: 11, question: 64 },
                        { id: "HYDR626-00091", set: 11, question: 65 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: jet-to-runner ratio is not universally 1:6.</strong> Define m = D/d and d:D = 1:m. The item supplies no head, speed, flow, wheel size or specified design correlation from which one fixed ratio follows. The explanation's closest-standard-choice argument does not establish a unique correct option. Its stored 1:6 remains a bank assertion, not a general design requirement.</p>",
                    sources: [{ id: "HYDR626-00090", set: 1, question: 60 }]
                },
                {
                    html: "<p><strong>Bank check: 1.25 m is the runner, not the jet.</strong> With m = 10 and given jet diameter d = 125 mm, D = md = 1250 mm = 1.25 m. The jet is already specified as 0.125 m. Stored option a is the intended runner-diameter answer only after acknowledging the erroneous requested quantity; the original stem and key are left unchanged.</p>",
                    sources: [{ id: "HYDR626-00092", set: 11, question: 66 }]
                },
                {
                    html: "<p><strong>Bank check: the 6 MW givens do not produce four jets.</strong> With φ = u/√(2gH), D = 1.2255 m, d = 0.12255 m, Q = 2.26526 m<sup>3</sup>/s and q<sub>j</sub> ≈ 0.88683 m<sup>3</sup>/s, the quotient is 2.554. Three, option b, is only the minimum full-size nozzle capacity count. Three equal operating jets would require about 0.11308 m diameter and would violate the exact d/D = 0.10 constraint. Using λ = u/V<sub>j</sub> gives about 2.660, not four. Exact operating geometry and power remain inconsistent unless a stated constraint is relaxed.</p>",
                    sources: [{ id: "HYDR626-00073", set: 9, question: 66 }]
                },
                {
                    html: "<p><strong>Bank check: three 100 mm full jets exceed 1.25 cumecs.</strong> Assuming 100 mm is effective jet diameter, V<sub>j</sub> = 60.7626 m/s and Q/q<sub>j</sub> = 2.6193. Three is a capacity ceiling; three full jets carry about 1.4317 m<sup>3</sup>/s. Three equal effective jets for exactly 1.25 m<sup>3</sup>/s need approximately 93.44 mm diameter. A nozzle-pipe bore alone does not establish contracted jet diameter, and the needed flow adjustment must not be omitted.</p>",
                    sources: [{ id: "HYDR626-00080", set: 10, question: 65 }]
                },
                {
                    html: "<p><strong>Bank check: whirl is a component, not the missing triangle vector.</strong> The velocity triangle is V = u + W: absolute, blade/peripheral and relative velocities. V<sub>w</sub> is the tangential component of V. The bank explanation lists absolute, relative and whirl while omitting blade velocity. Retain the intended use for blade-flow analysis, but derive torque and Euler work from the correctly signed components.</p>",
                    sources: [{ id: "HYDR626-00145", set: 17, question: 60 }]
                },
                {
                    html: "<p><strong>Bank check: recovery is partial, and Pelton still has residual energy.</strong> A draft tube can recover some runner-exit kinetic head, less outlet kinetic energy and losses, and its usable setting is cavitation-limited. It does not create head or guarantee recovery of most energy in every installation. A conventional Pelton has no reaction-type suction draft tube because it operates with free jets and free discharge, not because the spent water has no energy left.</p>",
                    sources: [
                        { id: "HYDR626-00055", set: 7, question: 68 },
                        { id: "HYDR626-00066", set: 9, question: 59 },
                        { id: "HYDR626-00086", set: 11, question: 61 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: an elbow is a draft-tube form, not its unique other name.</strong> Straight divergent and elbow arrangements both exist. Larger exit area can reduce residual velocity, but excessive diffusion or a poor bend can increase separation and loss. The stored large answer needs a relative inlet/outlet and geometry interpretation. Under the stated recovery convention, unrecovered inlet kinetic head includes both outlet kinetic head and loss; 1 − η<sub>d</sub> is not generally the loss coefficient alone.</p>",
                    sources: [
                        { id: "HYDR626-00087", set: 11, question: 62 },
                        { id: "HYDR626-00088", set: 11, question: 63 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: the draft-tube velocity square is negative.</strong> Assuming the unlabelled loss is 0.89 m and η<sub>d</sub> means piezometric recovery divided by inlet kinetic head, Q ≈ 47.93266 m<sup>3</sup>/s and V<sub>1</sub> ≈ 7.78441 m/s. Then V<sub>2</sub><sup>2</sup> = 0.22 × 60.59702 − 19.62 × 0.89 ≈ −4.13046 m<sup>2</sup>/s<sup>2</sup>. No real outlet velocity, including stored 1.767 m/s, satisfies that model. Its maximum efficiency with this loss is only about 71.18%. The missing loss unit and intended efficiency definition require clarification.</p>",
                    sources: [{ id: "HYDR626-00075", set: 10, question: 60 }]
                },
                {
                    html: "<p><strong>Bank check: one-third atmosphere is not the cavitation criterion.</strong> Assess local absolute pressure against water-temperature-dependent vapour pressure and the machine's required margin. Site atmospheric pressure, altitude, tailwater and runner setting matter. A pressure drop may or may not reach the vapour-pressure condition, and inlet/outlet pressures need not be equal. The stored one-third-atmosphere rule is not treated as a universal limit.</p>",
                    sources: [
                        { id: "HYDR626-00058", set: 8, question: 61 },
                        { id: "HYDR626-00085", set: 11, question: 60 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: reaction-runner outlet pressure is not always subatmospheric.</strong> The stored lesser answer describes a common setting, not every reaction turbine. A sufficiently submerged setting and its tailwater can produce positive gauge pressure. Pressure follows the energy balance, geometry and operating condition; vacuum is not an independently maximized objective, and cavitation constrains low absolute pressure.</p>",
                    sources: [{ id: "HYDR626-00147", set: 17, question: 62 }]
                },
                {
                    html: "<p><strong>Bank check: reciprocating-pump suction also permits cavitation.</strong> Reaction turbines and centrifugal pumps are susceptible, but suction lift, acceleration and valve losses can also depress pressure in a reciprocating pump. High discharge pressure does not protect its suction side. Thus option a as well as stored option d names a physically possible pair; the question has no unique single answer under possibility wording. Atmospheric Pelton runner operation is not blanket immunity for all nozzle/local conditions.</p>",
                    sources: [{ id: "WATE701-00379", set: 33, question: 51 }]
                },
                {
                    html: "<p><strong>Bank check: governor action depends on grid connection and transients.</strong> Mean-speed regulation is the intended elementary answer. In isolated operation it supports speed/frequency control; grid-connected operation also involves real-power response and droop/load sharing. Load rejection initially accelerates the rotor, and water-admission changes must balance overspeed and hydraulic transients. Excitation/voltage control is a separate function, and perfectly constant instantaneous speed is not guaranteed.</p>",
                    sources: [{ id: "HYDR626-00059", set: 8, question: 62 }]
                },
                {
                    html: "<p><strong>Bank check: distinguish ideal displacement from real delivery.</strong> The charge discharge pressure stem is corrupted. At fixed stroke and speed, ideal reciprocating displacement is pressure-independent; real discharge can change with leakage, valve behaviour and suction conditions. A universal decrease is not established without specifying a real operating model. Positive displacement is the defining principle. Force pump is historical terminology, not a complete universal synonym for every reciprocating arrangement.</p>",
                    sources: [
                        { id: "HYDR626-00083", set: 10, question: 68 },
                        { id: "HYDR626-00139", set: 16, question: 66 },
                        { id: "HYDR626-00142", set: 16, question: 69 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: higher reciprocating-pump efficiency is not universal.</strong> Compare specified machines at the same required delivered flow/head and their actual operating points. Leakage, valve and mechanical losses, viscosity, scale and off-design operation affect performance. A pump-only efficiency is also distinct from motor/drive-inclusive efficiency. Neither the stored higher answer nor an illustrative 90% figure supplies a fixed efficiency for all reciprocating pumps.</p>",
                    sources: [{ id: "HYDR626-00140", set: 16, question: 67 }]
                },
                {
                    html: "<p><strong>Bank check: scroll taper supports distribution, not exact constant velocity everywhere.</strong> Remaining scroll flow decreases as water enters the distributor, so a decreasing area is consistent with an approximately maintained section-mean velocity. The casing receives penstock supply; the downstream draft tube has a different role. Local flow, tongue/end geometry, losses and nonuniformity require detailed design beyond the ideal remaining-flow/area explanation.</p>",
                    sources: [
                        { id: "HYDR626-00146", set: 17, question: 61 },
                        { id: "HYDR626-00149", set: 1, question: 63 },
                        { id: "HYDR626-00186", set: 21, question: 62 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: power-factor magnitude can equal one.</strong> Generally less than unity is an operating tendency, not a strict upper bound excluding equality. Use 0 ≤ |PF| ≤ 1 and S<sub>kVA</sub> = P<sub>electric,kW</sub>/|PF| for nonzero generating power and power factor. Convert turbine shaft output through generator efficiency first; apparent power is not computed directly from an unqualified turbine shaft kW value.</p>",
                    sources: [{ id: "HYDR626-00232", set: 26, question: 61 }]
                },
                {
                    html: "<p><strong>Bank check: the Francis diameter rounds to 1.4 m.</strong> With φ = 0.678 defined relative to √(2gH), H = 150 m and N = 500 rpm, u = 36.7811 m/s and D = 60u/(πN) ≈ 1.40493 m. Supplied option c, 1.4 m, matches; stored option a, 1.3 m, does not. This is the diameter at the coefficient's reference station, not a full runner or powerhouse dimensional design.</p>",
                    sources: [{ id: "HYDR626-00078", set: 10, question: 63 }]
                }
            ],
            references: [
                {
                    title: "US DOE — Types of Hydropower Turbines: technical HTML inspected in the supplied report; introductory classifications, not dimensional design rules",
                    url: "https://www.energy.gov/cmei/water/types-hydropower-turbines"
                },
                {
                    title: "USBR Water Measurement Manual — Energy Balance Relationships: technical HTML inspected in the supplied report; pressure, elevation, velocity head and losses",
                    url: "https://www.usbr.gov/tsc/techreferences/mands/wmm/chap02_10.html"
                },
                {
                    title: "DoED — PowerHouse Design Guidelines for Hydropower Projects, 2018: official listing verified; technical clauses and statutory adoption not verified",
                    url: "https://doed.gov.np/content/34/powerhouse-design-guidelines-for-hydropower-projects--2018/"
                },
                {
                    title: "USACE official Engineer Manuals catalogue — EM 1110-2-3001 (10 October 2008) and EM 1110-2-3006 (22 April 2024); edition metadata only",
                    url: "https://www.publications.usace.army.mil/USACE-Publications/Engineer-Manuals/?udt_43544_param_page=3"
                },
                {
                    title: "USACE EM 1110-2-3006 — Mechanical and Electrical Design of Hydroelectric Power Plants, 22 April 2024: publisher link verified, supersedes 1994; PDF clauses not inspected",
                    url: "https://www.publications.usace.army.mil/Portals/76/Publications/EngineerManuals/EM%201110-2-3006_2024Apr22.pdf"
                }
            ]
        }
    });
})();