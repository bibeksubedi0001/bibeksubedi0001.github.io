(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0505: {
            code: "ACiE0505",
            questionCount: 60,
            blocks: [
                {
                    id: "steel-design-basis-and-code-editions",
                    title: "Design basis, units and identifiable code editions",
                    html: "<p>Steel design follows the load from the supported construction through members, connections and bases into the foundation. A satisfactory cross-section alone does not establish a satisfactory structure: instability, connection failure, excessive movement, fatigue and construction-stage conditions can govern before the nominal material strength is reached.</p>" +
                        "<p>The numerical steel provisions identified here refer to <strong>IS 800:2007, General Construction in Steel, third revision</strong>, using the supplied archived text and scan. Working-stress questions explicitly naming IS 800:1962 belong to a different edition and design basis. Service-load stresses checked against an older permissible stress must not be combined indiscriminately with factored limit-state loads and partial safety factors.</p>" +
                        "<p>Use a coherent unit system: <strong>1 MPa = 1 N/mm<sup>2</sup></strong>, 1 kN = 1000 N and 1 kN·m = 10<sup>6</sup> N·mm. In historical force-based units, 1 kgf/cm<sup>2</sup> = 0.0980665 MPa; kilograms of mass are not a stress unit.</p>" +
                        "<p>The official DUDBC catalogue identifies <strong>NBC 111 as Steel and NBC 112 as Timber</strong>. Catalogue identity does not certify that every IS clause below is adopted unchanged in Nepal. Confirm the governing NBC/NS requirements, specified editions, amendments, load combinations and approval requirements for the actual project. These study notes are not a consolidated-current-code claim or a design certification.</p>",
                    sources: [
                        { id: "DESI787-00144", set: 16, question: 33 },
                        { id: "DESI787-00164", set: 18, question: 33 }
                    ]
                },
                {
                    id: "standard-sections-and-axis-efficiency",
                    title: "Choose sections by their properties, not their names",
                    html: "<p>A standard rolled section has catalogue dimensions and properties; a built-up section combines separately connected components. Equal and unequal angles describe leg dimensions, while a bulb angle has a locally thickened profile. Such shape descriptions are not the plastic, compact, semi-compact or slender classifications used to assess local plate behaviour.</p>" +
                        "<p>For any centroidal bending axis, <strong>r = √(I/A)</strong>, where I is second moment of area and A is area. Column efficiency depends on the governing effective-length-to-radius ratio, local slenderness and buckling class, not just a large major-axis I. Evaluate both principal axes with their own restraints.</p>" +
                        "<table><thead><tr><th scope='col'>Section family</th><th scope='col'>Useful feature and qualification</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Wide-flange I section</th><td>Wider flanges can improve minor-axis resistance relative to narrow-flange alternatives. ISWB is a section designation, not a requirement for every column or a guarantee of equal radii.</td></tr>" +
                        "<tr><th scope='row'>Circular or square hollow section</th><td>Symmetry gives equal centroidal radii about the corresponding axes. Thin walls, end details, corrosion access and fabrication still matter.</td></tr>" +
                        "<tr><th scope='row'>Rectangular hollow or angle section</th><td>Axis properties differ; angles also need attention to connection eccentricity and possible torsional or flexural-torsional behaviour.</td></tr></tbody></table>" +
                        "<p>For a circular tube with outer diameter D and inner diameter D<sub>i</sub>, r = √(D<sup>2</sup> + D<sub>i</sub><sup>2</sup>)/4. Moving material outward can improve buckling resistance per unit area, but a tube is not automatically the cheapest completed column once local buckling, joints and procurement are included.</p>",
                    sources: [
                        { id: "DESI787-00050", set: 7, question: 25 },
                        { id: "DESI787-00143", set: 16, question: 32 },
                        { id: "DESI787-00147", set: 17, question: 26 }
                    ]
                },
                {
                    id: "ties-struts-and-roof-load-paths",
                    title: "Ties, struts and the real roof load path",
                    html: "<p>A <strong>tie</strong> is intended to resist tension; a <strong>strut</strong> is intended to resist compression, and a column usually carries predominantly compressive force. Rafter and boom are positional or structural names, not guarantees of one force sign. Analyse each relevant load combination before deciding which strength and stability checks apply.</p>" +
                        "<p>A typical roof transfers cladding load to purlins, then to rafters or truss joints, columns and foundations. The ideal axial-only truss model assumes straight members, idealized joint behaviour and loads introduced at joints. A purlin reaction applied <strong>between panel points</strong> produces local rafter bending in addition to the truss axial action.</p>" +
                        "<p>Under the usual gravity case the principal rafter may therefore require a <strong>compression-plus-bending</strong> check, including in-plane and out-of-plane stability. Wind uplift can change its axial force to tension or reverse bending; that case needs its own member and connection checks. Purlins are restraints only if their stiffness, bracing and connections actually provide the assumed restraint.</p>" +
                        "<p>Tension design includes gross-section yielding, effective net-section rupture and block shear at connections. Compression design includes effective area, member buckling and local instability. Neither a tie checked only by net area nor a rafter treated as always compressive represents the complete load path.</p>",
                    sources: [
                        { id: "DESI787-00067", set: 8, question: 32 },
                        { id: "DESI787-00206", set: 23, question: 25 }
                    ]
                },
                {
                    id: "compression-slenderness-and-buckling-curves",
                    title: "Axial compression: effective length and buckling reduction",
                    html: "<p>For the flexural buckling mode being checked, let L<sub>e</sub> = KL be effective length and r the corresponding radius of gyration. Both use the same length unit. The geometric slenderness is L<sub>e</sub>/r; K represents actual rotational and translational restraint, not merely a support label. Check each relevant axis, local plate slenderness and any other applicable instability mode.</p>" +
                        "<p>In the IS 800:2007 §7.1.2 formulation, <strong>P<sub>d</sub> = A<sub>e</sub>f<sub>cd</sub></strong> and <strong>f<sub>cd</sub> = χf<sub>y</sub>/γ<sub>m0</sub></strong>. A<sub>e</sub> is the effective sectional area allowed by the member rules, not automatically the gross area. With stresses in N/mm<sup>2</sup> and area in mm<sup>2</sup>, P<sub>d</sub> is in N.</p>" +
                        "<p>Define Euler stress f<sub>cc</sub> = π<sup>2</sup>E/(L<sub>e</sub>/r)<sup>2</sup> and the non-dimensional buckling parameter <strong>λ = √(f<sub>y</sub>/f<sub>cc</sub>)</strong>. Then φ = 0.5[1 + α(λ − 0.2) + λ<sup>2</sup>] and <strong>χ = min{1, 1/[φ + √(φ<sup>2</sup> − λ<sup>2</sup>)]}</strong>. E is Young's modulus and α is the imperfection factor of the applicable buckling class.</p>" +
                        "<table><thead><tr><th scope='col'>Buckling class</th><th scope='col'>a</th><th scope='col'>b</th><th scope='col'>c</th><th scope='col'>d</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>α, Table 7</th><td>0.21</td><td>0.34</td><td>0.49</td><td>0.76</td></tr></tbody></table>" +
                        "<p>Choose the class from the section, manufacture, dimensions and buckling axis rules, rather than selecting the smallest α. <em>Supplementary curve calculation:</em> for λ = 1, class a, f<sub>y</sub> = 250 MPa, γ<sub>m0</sub> = 1.10 and A<sub>e</sub> = 2000 mm<sup>2</sup>, φ = 1.084, χ ≈ 0.6656, f<sub>cd</sub> ≈ <strong>151.3 MPa</strong> and P<sub>d</sub> ≈ <strong>302.5 kN</strong>. This illustrates the reduction, not the selection or approval of a real column.</p>",
                    sources: [{ id: "DESI787-00207", set: 23, question: 26 }]
                },
                {
                    id: "web-shear-bearing-crippling-and-buckling",
                    title: "Web shear, local bearing, crippling and buckling",
                    html: "<p>In a conventional I beam under transverse loading, the flanges contribute strongly to bending resistance and the web normally carries the dominant share of vertical shear. Elastic shear stress follows <strong>τ = VQ/(It)</strong>: V is shear force, Q the first moment of the relevant partial area, I the section second moment and t the local width or thickness at the level checked. The actual web/flange distribution depends on section geometry.</p>" +
                        "<p>A concentrated load or support reaction enters through a finite bearing length. <strong>Web crippling</strong> describes localized bearing-related yielding, folding or distortion near that load introduction. <strong>Web buckling</strong> is a stability failure of a compressed or sheared web region. These mechanisms can interact, but local crippling is not simply another name for the column-like buckling of the web.</p>" +
                        "<p>IS 800:2007 §8.4.2.1 requires a shear-buckling check for an unstiffened web when <strong>d/t<sub>w</sub> &gt; 67ε</strong>, writing ε = √(250/f<sub>yw</sub>) with the web yield stress f<sub>yw</sub> in MPa. Here d is the relevant clear web depth and t<sub>w</sub> its thickness. Stiffened panels have additional panel-geometry considerations. Crossing this threshold triggers verification; it does not by itself prescribe one stiffener arrangement.</p>" +
                        "<p><em>Supplementary screening example:</em> d = 600 mm, t<sub>w</sub> = 8 mm and f<sub>yw</sub> = 250 MPa give d/t<sub>w</sub> = <strong>75 &gt; 67</strong>. A shear-buckling assessment is needed even though the ratio is below 85. Bearing length, load level, web thickness and designed bearing or transverse stiffeners must then be considered for the actual failure modes.</p>",
                    sources: [
                        { id: "DESI787-00051", set: 7, question: 26 },
                        { id: "DESI787-00141", set: 16, question: 30 },
                        { id: "DESI787-00146", set: 17, question: 25 }
                    ]
                },
                {
                    id: "built-up-columns-lacing-and-battens",
                    title: "Built-up columns: make the components work together",
                    html: "<p>Separating channels or other components can increase the second moment of a built-up column, but that advantage depends on a designed connection system. Each component must be restrained between connection points, and the assembled member must resist overall buckling without excessive relative movement of its parts.</p>" +
                        "<p><strong>Lacing</strong> develops truss-like action through diagonal elements; <strong>battens</strong> transfer transverse shear through plate-and-component frame action. Their members, plates and fastenings need strength and stiffness checks for the prescribed transverse design action, as well as any actual applied shear. Perfectly axial loading is not a reason to assume this transverse design action is zero. Shear flexibility and individual-component slenderness also affect the overall compression assessment.</p>" +
                        "<p>For welded tie or batten plates, the verified IS 800:2007 <strong>§7.7.4.1 overlap is at least 4t</strong>, with t the batten-plate thickness. <em>Supplementary dimensional example:</em> an 8 mm batten needs at least <strong>32 mm overlap</strong> under that provision. Meeting this one dimension does not establish the required weld length, throat, end detail or connection capacity.</p>" +
                        "<p>Design the actual force path from one main component through its weld or bolts, through the batten or lacing, and into the other component. Calling the assembled shape rigid cannot replace these checks.</p>",
                    sources: [
                        { id: "DESI787-00055", set: 7, question: 30 },
                        { id: "DESI787-00154", set: 17, question: 32 }
                    ]
                },
                {
                    id: "tension-limit-states-and-straight-net-area",
                    title: "Tension members and straight net-section calculations",
                    html: "<p>For a fully connected plate in axial tension, three distinct checks are <strong>gross yielding, net-section rupture and block shear</strong>. Gross yielding spreads through the member section; rupture crosses a weakened net path; block shear removes a connection-end block along combined shear and tension planes. Bolts, welds and connected supporting parts require their own checks. Outstanding legs or incomplete connection of a section can introduce shear lag.</p>" +
                        "<p>For the simple plate case, IS 800:2007 uses <strong>T<sub>dg</sub> = A<sub>g</sub>f<sub>y</sub>/γ<sub>m0</sub></strong> and <strong>T<sub>dn</sub> = 0.9A<sub>n</sub>f<sub>u</sub>/γ<sub>m1</sub></strong>. The member resistance cannot exceed the least applicable yielding, rupture and block-shear resistance. A<sub>g</sub> and A<sub>n</sub> are gross and net areas; f<sub>y</sub> and f<sub>u</sub> are plate yield and ultimate strengths. This simple net-rupture expression is not an unqualified rule for every angle connection.</p>" +
                        "<p>Distinguish actual hole diameter d<sub>0</sub> from the <strong>design deduction diameter d<sub>h</sub></strong>. IS 800:2007 §6.3.1 requires d<sub>h</sub> = d<sub>0</sub> + 2 mm for <strong>directly punched holes</strong>; this fabrication allowance is not a second bolt-clearance allowance. For a straight cut, use <strong>A<sub>n</sub> = (b − d<sub>h</sub>)t</strong>. The actual geometric area, before any such design allowance, is (b − d<sub>0</sub>)t.</p>" +
                        "<p>Assuming holes for which the directly punched allowance does not apply, d<sub>h</sub> = d<sub>0</sub> = 18 mm. The bank's 40 cm wide, 10 mm thick plate then gives (400 − 18)10 = <strong>3820 mm<sup>2</sup> = 38.2 cm<sup>2</sup></strong>. Its separate 75 mm wide plate gives (75 − 18)10 = <strong>570 mm<sup>2</sup> = 5.70 cm<sup>2</sup></strong>. If the holes were directly punched, the respective design areas would instead be <strong>3800 and 550 mm<sup>2</sup></strong>. The bank does not identify manufacture; do not infer punching or add bolt clearance again merely to match an option.</p>" +
                        "<p><em>Supplementary strength extension for the 400 mm plate:</em> assume f<sub>y</sub> = 250 MPa, f<sub>u</sub> = 410 MPa, γ<sub>m0</sub> = 1.10 and γ<sub>m1</sub> = 1.25. With A<sub>g</sub> = 4000 mm<sup>2</sup>, gross yielding gives <strong>909.1 kN</strong>, while the simple net-rupture check gives <strong>1127.7 kN</strong>. Yielding governs these two values, but block shear and the complete connection still have to be established.</p>",
                    sources: [
                        { id: "DESI787-00056", set: 7, question: 31 },
                        { id: "DESI787-00203", set: 22, question: 33 }
                    ]
                },
                {
                    id: "staggered-holes-and-critical-net-paths",
                    title: "Staggered holes: compare actual failure paths",
                    html: "<p>A potential fracture can cross holes on a straight line or follow a zigzag between staggered holes. For a constant-thickness plate, the conventional staggered-path calculation is <strong>A<sub>n</sub> = t[b − Σd<sub>h</sub> + Σs<sup>2</sup>/(4g)]</strong>. Use the §6.3.1 deduction diameters, including the 2 mm addition where holes are directly punched, rather than assuming every actual d<sub>0</sub> is also d<sub>h</sub>. Deduct the holes intercepted by that path, then add a correction for each diagonal link. Here s is the separation parallel to the force and g the transverse gauge between the linked holes; all lengths must use the same unit.</p>" +
                        "<p>The addition accounts for the inclined path geometry; it does not permit selecting whichever path gives the largest area. Examine all admissible critical cuts and use the controlling net area, with no calculated net area exceeding the gross area. The complete connection can still fail by block shear or another mechanism.</p>" +
                        "<p><em>Supplementary two-hole example:</em> take b = 120 mm, t = 8 mm, drilled holes with d<sub>0</sub> = d<sub>h</sub> = 18 mm, s = 30 mm and g = 50 mm. A trial zigzag through both holes has one correction of 30<sup>2</sup>/(4 × 50) = <strong>4.5 mm</strong>, giving A<sub>n</sub> = (120 − 36 + 4.5)8 = <strong>708 mm<sup>2</sup></strong>. A straight cut through one hole gives <strong>816 mm<sup>2</sup></strong>, and the gross area is 960 mm<sup>2</sup>. Among these two cuts, the zigzag governs; a different hole layout or fabrication allowance could change the controlling design area.</p>",
                    sources: [{ id: "DESI787-00161", set: 18, question: 30 }]
                },
                {
                    id: "bolt-types-slip-and-load-reversal",
                    title: "Bearing, fitted and friction-grip connections",
                    html: "<p>Distinguish the <strong>bolt material strength</strong> from the <strong>joint's load-transfer mechanism</strong>. A high-strength bolt can be used in a bearing-type connection or in a correctly specified, installed and inspected slip-resistant connection. Its grade alone does not establish pretension or slip resistance.</p>" +
                        "<table><thead><tr><th scope='col'>Connection</th><th scope='col'>Shear load path</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Bearing type</th><td>Load passes through plate-hole bearing and bolt shear after any available clearance movement. Check the relevant bolt and plate failure modes.</td></tr>" +
                        "<tr><th scope='row'>Turned and fitted bolt</th><td>A close-fitting machined bolt reduces clearance movement. It remains capable of transmitting load by bearing; close fit is not the same as friction-grip action.</td></tr>" +
                        "<tr><th scope='row'>HSFG, slip-resistant design</th><td>Controlled pretension clamps prepared faying surfaces so friction resists slip up to the specified design slip resistance.</td></tr></tbody></table>" +
                        "<p>For stress reversal or fatigue-sensitive details, limiting slip can avoid repeated clearance take-up and adverse local stress changes. This benefit depends on surface condition, pretension retention and the required serviceability or ultimate limit state. Where slip is prevented only at service load, IS 800:2007 §10.4.4 permits an ultimate bearing-type assessment after slipping. No connection should be described as incapable of bearing at any load merely because HSFG bolts were specified.</p>",
                    sources: [
                        { id: "DESI787-00054", set: 7, question: 29 },
                        { id: "DESI787-00152", set: 1, question: 29 },
                        { id: "DESI787-00205", set: 22, question: 34 },
                        { id: "DESI787-00209", set: 23, question: 28 }
                    ]
                },
                {
                    id: "bolt-property-classes-and-design-pretension",
                    title: "Bolt property classes, stress areas and pretension",
                    html: "<p>The familiar property-class shorthand X.Y gives nominal ultimate strength <strong>f<sub>ub</sub> = 100X MPa</strong> and nominal yield ratio f<sub>yb</sub>/f<sub>ub</sub> = Y/10. These are nominal class interpretations, not a substitute for the applicable product specification, diameter-dependent requirements, proof testing or certification.</p>" +
                        "<table><thead><tr><th scope='col'>Nominal class</th><th scope='col'>f<sub>ub</sub></th><th scope='col'>f<sub>yb</sub></th></tr></thead><tbody>" +
                        "<tr><th scope='row'>4.6</th><td>400 MPa</td><td>240 MPa</td></tr>" +
                        "<tr><th scope='row'>8.8</th><td>800 MPa</td><td>640 MPa</td></tr></tbody></table>" +
                        "<p>The bank's M36 class-8.8 item tests the nominal <strong>800 MPa</strong> interpretation. A real M36 fastener still requires its actual specification and size range. The plain shank area A<sub>sb</sub> = πd<sup>2</sup>/4 is different from a specified tensile-stress area or an effective threaded shear area. Thread pitch and the definition used in the relevant capacity check matter.</p>" +
                        "<p>For the IS 800:2007 §10.4.3 slip-resistance model, installation tension may be taken as <strong>F<sub>0</sub> = A<sub>n</sub>f<sub>0</sub> = 0.7f<sub>ub</sub>A<sub>n</sub></strong>, with the threaded area prescribed for that check. The code's f<sub>0</sub> is a stress; F<sub>0</sub> is a force. <em>Supplementary example:</em> assuming an M16 coarse-thread area of 157 mm<sup>2</sup> and nominal class-8.8 f<sub>ub</sub> = 800 MPa gives <strong>F<sub>0</sub> = 87.92 kN</strong>. This design convention does not define every manufacturer's proof stress or replace the installation procedure.</p>",
                    sources: [
                        { id: "DESI787-00188", set: 21, question: 27 },
                        { id: "DESI787-00204", set: 1, question: 31 },
                        { id: "DESI787-00208", set: 23, question: 27 }
                    ]
                },
                {
                    id: "holes-minimum-pitch-and-edge-distances",
                    title: "Hole diameter is not bolt diameter",
                    html: "<p>Let d be nominal bolt diameter and d<sub>0</sub> the specified hole diameter. IS 800:2007 Table 19 gives the following <strong>diametral additions for standard clearance holes</strong>. Oversized and slotted holes have separate provisions. When a question already gives d<sub>0</sub>, use it directly rather than adding the clearance a second time.</p>" +
                        "<table><thead><tr><th scope='col'>Nominal d, mm</th><th scope='col'>Standard addition, mm</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>12–14</th><td>1</td></tr>" +
                        "<tr><th scope='row'>16–22, and 24</th><td>2</td></tr>" +
                        "<tr><th scope='row'>Above 24</th><td>3</td></tr></tbody></table>" +
                        "<p>Pitch is centre spacing along a fastener line; gauge is transverse spacing between lines. Under §10.2.2, the minimum centre spacing is <strong>2.5d</strong>. End distance is measured from the hole centre to the end in the stress direction; edge distance is measured transversely to the adjacent edge. The minimum edge/end distances in §10.2.4.2 instead use <strong>d<sub>0</sub></strong>: 1.5d<sub>0</sub> for rolled, machine-flame-cut, sawn or planed edges, and 1.7d<sub>0</sub> for sheared or hand-flame-cut edges.</p>" +
                        "<p><strong>Bank M16 pitch:</strong> 2.5 × 16 = <strong>40 mm</strong>, independent of the class-4.6 label in this minimum-spacing calculation. With an ordinary 18 mm hole, the corresponding minimum edge/end dimensions are <strong>27 mm</strong> for the smoother listed edges and <strong>30.6 mm</strong> for sheared or hand-flame-cut edges. These are different dimensions with different physical purposes; hole bearing, tearing and access still need consideration.</p>",
                    sources: [
                        { id: "DESI787-00150", set: 17, question: 29 },
                        { id: "DESI787-00058", set: 7, question: 33 },
                        { id: "DESI787-00187", set: 21, question: 26 },
                        { id: "DESI787-00213", set: 23, question: 32 },
                        { id: "DESI787-00184", set: 20, question: 33 },
                        { id: "DESI787-00210", set: 23, question: 29 }
                    ]
                },
                {
                    id: "maximum-spacing-and-conditional-stagger",
                    title: "Maximum fastener spacing has several simultaneous limits",
                    html: "<p>Maximum spacing controls such matters as separation of connected plates, local behaviour between fasteners and the reliability of the intended load transfer. It is not obtained by reversing the minimum-pitch calculation. In the following IS 800:2007 §10.2.3 summary, t is the thinner connected plate thickness and t<sub>o</sub> the thinner outside-plate thickness, in mm.</p>" +
                        "<table><thead><tr><th scope='col'>Spacing being checked</th><th scope='col'>Limit, mm</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>General adjacent-fastener maximum</th><td>min(32t, 300)</td></tr>" +
                        "<tr><th scope='row'>Along stress, tension member</th><td>min(16t, 200)</td></tr>" +
                        "<tr><th scope='row'>Along stress, compression member</th><td>min(12t, 200)</td></tr>" +
                        "<tr><th scope='row'>Line adjacent and parallel to an outside-plate edge</th><td>min(100 + 4t<sub>o</sub>, 200)</td></tr></tbody></table>" +
                        "<p>All applicable limits must be satisfied, including special details such as compression splices transferring force through butting faces. <em>Supplementary ordinary-row example:</em> t = t<sub>o</sub> = 10 mm gives a general maximum of 300 mm, a tension-direction limit of <strong>160 mm</strong>, a compression-direction limit of <strong>120 mm</strong> and an outside-edge-row limit of <strong>140 mm</strong>.</p>" +
                        "<p>Under §10.2.3.4, the specified stress-direction and outside-edge-row spacings may increase by <strong>50%</strong> only for fasteners staggered at equal intervals with gauge <strong>not exceeding 75 mm</strong>, and still subject to the general maximum. This is a conditional detailing provision. It is separate from the s<sup>2</sup>/(4g) net-path calculation and cannot be derived from that correction or used to omit it.</p>",
                    sources: [
                        { id: "DESI787-00211", set: 23, question: 30 },
                        { id: "DESI787-00212", set: 23, question: 31 }
                    ]
                },
                {
                    id: "fitting-a-bolt-row-with-end-allowances",
                    title: "Fit the complete bolt row, including its end distances",
                    html: "<p>For n equally spaced bolts in an available row length W, the geometric requirement is <strong>2e + (n − 1)p ≤ W</strong> when both ends have the same centre-to-end allowance e. Use the applicable hole-based end distances and nominal-diameter-based minimum centre spacing. A plate's width is the available row length only when the row is actually arranged across that width.</p>" +
                        "<p><strong>Conditional calculation for the bank's 200 mm flat:</strong> interpret the given 25 mm as nominal bolt diameter and use standard holes. Table 19 gives d<sub>0</sub> = 25 + 3 = <strong>28 mm</strong>. Even for rolled or equivalent smoother edges, e = 1.5 × 28 = <strong>42 mm</strong>, while p<sub>min</sub> = 2.5 × 25 = <strong>62.5 mm</strong>.</p>" +
                        "<p>Three bolts require 2 × 42 + 2 × 62.5 = <strong>209 mm</strong>, exceeding the available 200 mm. Two require 2 × 42 + 62.5 = <strong>146.5 mm</strong>, so two are geometrically possible under these assumptions. Rougher edge requirements do not rescue a three-bolt layout.</p>" +
                        "<p>This calculation checks minimum spacing and fit, not the load capacity of the row. Confirm its orientation, actual nominal size and holes, edge preparation, maximum-spacing rules, plate strength, connection forces and fabrication access before treating the layout as a design.</p>",
                    sources: [{ id: "DESI787-00215", set: 24, question: 25 }]
                },
                {
                    id: "bolt-shear-bearing-and-joint-efficiency",
                    title: "Bolt shear, plate bearing and joint efficiency",
                    html: "<p>For an ordinary bearing-type bolt, IS 800:2007 §10.3.3 gives the unreduced design shear resistance <strong>V<sub>dsb</sub> = f<sub>ub</sub>(n<sub>n</sub>A<sub>nb</sub> + n<sub>s</sub>A<sub>sb</sub>)/(√3γ<sub>mb</sub>)</strong>. The counts n<sub>n</sub> and n<sub>s</sub> refer to shear planes crossing threads and plain shank respectively. A<sub>nb</sub> is the threaded-plane area prescribed for the check; A<sub>sb</sub> = πd<sup>2</sup>/4. Long joints, large grips, packing and simultaneous actions may require further treatment.</p>" +
                        "<p><strong>Bank M16 class-4.6 lap joint:</strong> take one shear plane, f<sub>ub</sub> = 400 MPa and γ<sub>mb</sub> = 1.25. A<sub>sb</sub> = 201.06 mm<sup>2</sup>. With threads on the plane and the approximation A<sub>nb</sub> = 0.78A<sub>sb</sub> = 156.83 mm<sup>2</sup>, resistance is <strong>28.97 kN</strong>. Using the tabulated M16 coarse-thread stress area of about 157 mm<sup>2</sup> where applicable gives about <strong>29.0 kN</strong>. The 0.78 ratio is an approximation, not an exact area for every thread.</p>" +
                        "<p>If the same single plane instead crosses only the unthreaded shank, the unreduced value is <strong>37.15 kN</strong>. Thus the thread location explains the different results without changing the bolt grade. Identify the area required by the actual bolt specification and design clause.</p>" +
                        "<p>For standard holes, §10.3.4 gives <strong>V<sub>dpb</sub> = 2.5k<sub>b</sub>dtf<sub>u</sub>/γ<sub>mb</sub></strong>, with k<sub>b</sub> = min[e/(3d<sub>0</sub>), p/(3d<sub>0</sub>) − 0.25, f<sub>ub</sub>/f<sub>u</sub>, 1]. Here e and p are measured along bearing, f<sub>u</sub> is plate ultimate strength, and t represents the relevant plate thickness bearing in the same direction. Check the plates on each side of the force transfer; a simple lap joint cannot use the sum of both opposing plates as one bearing thickness.</p>" +
                        "<p>The bolt value for this shear-transfer check is <strong>min(V<sub>dsb</sub>, V<sub>dpb</sub>)</strong>, with plate rupture, block shear and other joint modes checked separately. For the bank's stated 60 kN controlling joint strength and 150 kN solid-plate strength per pitch, efficiency is <strong>100 × 60/150 = 40%</strong>. This assumes no other mode gives a joint strength below 60 kN and both strengths use the same basis.</p>",
                    sources: [
                        { id: "DESI787-00142", set: 16, question: 31 },
                        { id: "DESI787-00216", set: 24, question: 26 },
                        { id: "DESI787-00217", set: 24, question: 27 },
                        { id: "DESI787-00218", set: 24, question: 28 }
                    ]
                },
                {
                    id: "bolt-tension-yielding-cap-and-interaction",
                    title: "Bolt tension includes a yielding cap",
                    html: "<p>Bolts can transfer tension as well as shear, notably in end plates, hangers and base anchorage details. In the bearing-type bolt tension provision of IS 800:2007 §10.3.5, the design value is <strong>T<sub>db</sub> = min(0.9f<sub>ub</sub>A<sub>n</sub>/γ<sub>mb</sub>, f<sub>yb</sub>A<sub>sb</sub>/γ<sub>m0</sub>)</strong>. A<sub>n</sub> is the specified tensile-stress area and A<sub>sb</sub> the plain shank area. The rupture expression is therefore not the entire check.</p>" +
                        "<p><em>Supplementary M16 class-4.6 example:</em> assume A<sub>n</sub> = 157 mm<sup>2</sup>, A<sub>sb</sub> = 201.06 mm<sup>2</sup>, f<sub>ub</sub> = 400 MPa, f<sub>yb</sub> = 240 MPa, γ<sub>mb</sub> = 1.25 and γ<sub>m0</sub> = 1.10. The rupture branch gives <strong>45.22 kN</strong>, but the yielding branch gives <strong>43.87 kN</strong>; the lower value controls under these assumptions.</p>" +
                        "<p>External joint tension is not automatically the force in each bolt divided equally. Eccentricity, bolt-row lever arms and end-plate bending can increase particular bolt forces; prying must be included where relevant. Simultaneous shear and tension need the applicable interaction check, rather than independent use of both full single-action capacities. Friction-grip joints also require their own slip and external-tension treatment; initial pretension is not an extra externally available tensile capacity.</p>",
                    sources: [{ id: "DESI787-00214", set: 23, question: 33 }]
                },
                {
                    id: "cantilever-gussets-and-moment-end-plates",
                    title: "Moment connections need a separate shear load path",
                    html: "<p>A true cantilever support must transmit both the end shear and fixing moment generated by transverse loading. A gusset attached to the end does not create fixity by name: its plate, fasteners, welds and supporting member must provide the necessary force paths and rotational restraint.</p>" +
                        "<p>In a typical bolted moment end plate, tensile bolt-row forces and compression contact form a couple to resist moment. For a pure moment with no axial force, its idealized resultants satisfy <strong>T = C = M/z</strong>, where z is their separation. Axial force changes the normal-force equilibrium. <strong>Shear still needs its own mechanism</strong>, such as bolt shear and hole bearing, designed faying-surface friction, or a shear key where detailed; a tension-compression couple alone does not describe all three actions.</p>" +
                        "<p><em>Supplementary example:</em> a 20 kN end load on a 1.5 m cantilever produces support magnitudes <strong>V = 20 kN</strong> and <strong>M = 30 kN·m</strong>. With a 0.30 m idealized moment lever arm and no axial force, the normal-force couple has <strong>T = C = 100 kN</strong>. The joint must also transfer the 20 kN shear.</p>" +
                        "<p>These couple resultants are not an instruction to divide 100 kN equally among arbitrary bolts. Determine the actual bolt-row distribution, contact region, plate bending and prying, plus local column flange/web effects, combined bolt actions and connection deformation.</p>",
                    sources: [
                        { id: "DESI787-00219", set: 24, question: 29 },
                        { id: "DESI787-00220", set: 24, question: 30 }
                    ]
                },
                {
                    id: "column-splices-and-gusset-plate-design",
                    title: "Column splices and gusset plates are designed details",
                    html: "<p>A column splice connects successive column lengths and must transfer the actions assigned to it: compression or tension, shear and bending, including construction-stage and relevant reversal effects. Properly prepared contact can transfer compression by bearing; it cannot transfer tensile separation. Splice plates, fasteners and welds must supply the remaining intended load paths.</p>" +
                        "<p>Placing a splice somewhat above a floor can improve erection access, alignment, bolting and welding. This is an erection convention, not proof that the location has minimum moment. Moment diagrams, seismic detailing requirements, floor obstructions, temporary stability and the governing standard determine whether a proposed position is suitable. No universal floor clearance follows from the source question.</p>" +
                        "<p>A <strong>gusset plate</strong> distributes connected member forces into a broader supporting region. Its thickness depends on force level, unsupported dimensions, material, connection geometry and load eccentricity. Check yielding, net rupture, block shear, compression buckling, local bending and the connection itself as applicable. A nominal thickness without these inputs does not establish adequacy.</p>",
                    sources: [
                        { id: "DESI787-00193", set: 21, question: 32 },
                        { id: "DESI787-00222", set: 24, question: 32 }
                    ]
                },
                {
                    id: "weld-processes-joints-and-load-directions",
                    title: "Weld process, joint form and load direction are different",
                    html: "<p>Choose a joining process and a joint form that can transmit the forces and can actually be fabricated and inspected. <strong>Resistance spot welding</strong> produces localized fused nuggets between overlapping sheets using electrode pressure and electrical heating. The overlap, rather than one particular vertical orientation on site, explains the bank's one-below-the-other description.</p>" +
                        "<p><strong>Fillet welds</strong> commonly join overlapping plates and T joints along the intersection of their faces. A groove or butt-weld detail instead develops fusion through a prepared joint thickness. Spot, fillet and groove describe different process or geometry features; they are not interchangeable strength specifications.</p>" +
                        "<p>A <strong>side fillet</strong> has its longitudinal weld axis parallel to the applied load; an <strong>end fillet</strong> has that axis transverse to the load. Resolve the force into the stress components required by the selected weld-design method and use the effective throat and length. Directional names alone do not authorize an arbitrary strength multiplier.</p>" +
                        "<p>In a weld group, the group centroid and the load line also matter. A force not passing through the appropriate weld-group centre introduces moment as well as direct force. The most highly stressed throat location can then govern rather than the average force divided by total weld length.</p>",
                    sources: [
                        { id: "DESI787-00048", set: 6, question: 32 },
                        { id: "DESI787-00052", set: 7, question: 27 },
                        { id: "DESI787-00223", set: 24, question: 33 }
                    ]
                },
                {
                    id: "fillet-leg-size-effective-throat-and-profile",
                    title: "Fillet leg size is not its perpendicular throat",
                    html: "<p>For an ideal equal-leg fillet between faces meeting at 90°, the nominal triangular section has two 45° angles. Its leg dimension is the <strong>weld size s</strong>. The shortest perpendicular distance from root to the ideal flat face is the throat, <strong>t<sub>e</sub> = s/√2 ≈ 0.707s</strong>. This is a geometric result for that equal-leg, right-angle triangle, not for every fusion-face angle or unequal-leg detail.</p>" +
                        "<p>The usual IS 800:2007 design throat factor for this 90° fillet is <strong>0.7s</strong>. For the bank's 5 mm size, the design throat is <strong>3.5 mm</strong>; the exact ideal-triangle distance is about 3.536 mm. Do not substitute the full 5 mm leg as the resisting throat.</p>" +
                        "<p>Flat or mitre, convex and concave describe the exposed weld profile. A convex face does not automatically earn credit for all its reinforcement, while concavity can reduce the available minimum throat. Adequate fusion, acceptable profile and freedom from relevant defects must be established, not inferred from the apparent quantity of deposited metal.</p>" +
                        "<p>The root-to-face triangle used here must not be applied blindly to complete- or partial-penetration butt welds. Their effective throat depends on the qualified penetration and joined thickness, excluding reinforcement as required by the applicable provision.</p>",
                    sources: [
                        { id: "DESI787-00155", set: 17, question: 33 },
                        { id: "DESI787-00158", set: 18, question: 27 },
                        { id: "DESI787-00183", set: 20, question: 32 }
                    ]
                },
                {
                    id: "fillet-size-limits-and-effective-length",
                    title: "Fillet size limits and effective length",
                    html: "<p>Minimum size is influenced by the <strong>thicker part</strong> and heat flow; the usual maximum edge fillet size is controlled by the <strong>thinner local edge</strong> and its geometry. Required structural throat is a further check. These quantities must not be substituted for one another.</p>" +
                        "<table><thead><tr><th scope='col'>IS 800:2007 detail</th><th scope='col'>Application to the supplied data</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Table 21 minimum, subject to its notes</th><td>A thicker part exactly 20 mm thick falls in the band giving a 5 mm minimum fillet size; the next band is above 20 mm.</td></tr>" +
                        "<tr><th scope='row'>Usual square-edge limit, §10.5.8.1</th><td>Use thinner-edge thickness minus 1.5 mm for this detail. The 12 mm and 14 mm plates therefore give 12 − 1.5 = 10.5 mm.</td></tr>" +
                        "<tr><th scope='row'>Rounded rolled-section toe, §10.5.8.2</th><td>The usual maximum is 0.75t, with t the local toe thickness, not a square-edge rule.</td></tr></tbody></table>" +
                        "<p>Effective length L<sub>e</sub> is the length over which the specified full throat is effective. Under §10.5.4.1, it should be at least <strong>4s</strong>; the usual allowance makes actual straight-weld length <strong>L<sub>e</sub> + 2s</strong>. Starting, stopping, returns and the actual joint detail must be accounted for rather than counting all visible weld as fully effective.</p>" +
                        "<p><em>Supplementary length example:</em> for s = 5 mm, the 4s criterion gives <strong>L<sub>e</sub> ≥ 20 mm</strong>; the corresponding actual length with the 2s allowance is at least <strong>30 mm</strong>. This is only a dimensional lower bound. Required strength can demand a longer weld, and no universal numerical length can be obtained when s is unspecified.</p>",
                    sources: [
                        { id: "DESI787-00191", set: 21, question: 30 },
                        { id: "DESI787-00192", set: 21, question: 31 },
                        { id: "DESI787-00198", set: 22, question: 28 },
                        { id: "DESI787-00201", set: 22, question: 31 }
                    ]
                },
                {
                    id: "butt-weld-penetration-and-effective-throat",
                    title: "Butt welds: specify penetration before calculating area",
                    html: "<p>A butt or groove weld transfers force through the fused thickness of the joint. Its design needs the <strong>effective throat</strong>, effective length, material strengths, stress state and quality requirements. A drawing also needs adequate preparation and penetration information; merely stating the plate thickness does not define a partial-penetration weld.</p>" +
                        "<p>For a complete-joint-penetration detail, the effective thickness is associated with the fully joined thinner part under the applicable requirements. For an incomplete-penetration butt weld, IS 800:2007 §10.5.3.3 bases the throat on the <strong>minimum weld-metal thickness common to the connected parts, excluding reinforcement</strong>. Establish that thickness from the actual qualified detail, rather than assuming an arbitrary fraction of the thinner plate.</p>" +
                        "<p>For a concentric direct-force illustration, the effective weld area is A<sub>w</sub> = t<sub>e</sub>L<sub>e</sub> and average normal stress is N/A<sub>w</sub>. <em>Supplementary example:</em> a specified 8 mm effective throat over 100 mm gives 800 mm<sup>2</sup>; a 100 kN normal force produces <strong>125 MPa</strong>. This is a demand calculation, not proof that the welding procedure or resistance is adequate.</p>" +
                        "<p>Parent-metal-equivalent resistance requires the relevant full-penetration, material and inspection conditions. Where those conditions are not demonstrated, neither the nominal plate area nor the appearance of a continuous weld establishes full parent-section capacity.</p>",
                    sources: [
                        { id: "DESI787-00145", set: 16, question: 34 },
                        { id: "DESI787-00153", set: 17, question: 31 }
                    ]
                },
                {
                    id: "weld-resistance-and-shop-site-factors",
                    title: "Calculate weld resistance from throat, length and strength",
                    html: "<p>For the ordinary fillet-weld design-strength model in IS 800:2007, <strong>f<sub>wd</sub> = f<sub>u</sub>/(√3γ<sub>mw</sub>)</strong>, using the lower relevant ultimate strength of weld metal and parent metal. The normal code factors for these welds are <strong>γ<sub>mw</sub> = 1.25 for shop welding</strong> and <strong>1.50 for site welding</strong>. These values belong to the identified design basis; they are not a reason to neglect workmanship or inspection.</p>" +
                        "<p>For a simple concentric force transferred by a uniformly stressed effective throat, resistance is <strong>R = f<sub>wd</sub>t<sub>e</sub>L<sub>e</sub></strong>. Eccentric weld groups, long joints, partial penetration and combined stresses require their additional applicable checks. Material strength in N/mm<sup>2</sup> multiplied by throat area in mm<sup>2</sup> gives resistance in N.</p>" +
                        "<p><em>Supplementary fillet example:</em> use s = 5 mm, t<sub>e</sub> = 3.5 mm, L<sub>e</sub> = 100 mm and weaker ultimate strength f<sub>u</sub> = 410 MPa, with no applicable reduction or eccentricity. Shop welding gives f<sub>wd</sub> ≈ <strong>189.4 MPa</strong> and R ≈ <strong>66.3 kN</strong>. With the same geometry and site factor, the values become <strong>157.8 MPa</strong> and <strong>55.2 kN</strong>.</p>" +
                        "<p>Assess joint resistance against the actual design actions and the capacities of all connected parts. A general percentage of parent-metal strength cannot replace throat geometry, the failure-mode checks or the specified quality level.</p>",
                    sources: [
                        { id: "DESI787-00200", set: 22, question: 30 },
                        { id: "DESI787-00221", set: 24, question: 31 }
                    ]
                },
                {
                    id: "combined-weld-stress-components",
                    title: "Combined weld stress: define the components and method",
                    html: "<p>A force or moment can produce several components of stress at a weld throat. Resolve them at the <strong>same critical location</strong> using the axes, effective throat and stress definitions of the chosen method. Adding a nominal plate stress to an unrelated weld-group maximum does not create a valid local stress state.</p>" +
                        "<p>The single-normal-component, single-shear-component equivalent-stress form tested in the bank is <strong>σ<sub>eq</sub> = √(σ<sup>2</sup> + 3τ<sup>2</sup>)</strong>. Here σ is the applicable normal stress and τ the applicable shear stress in the stated local stress model, both in the same units. It is not the simple vector resultant √(σ<sup>2</sup> + τ<sup>2</sup>), and a general multi-normal-component stress state requires its fuller expression.</p>" +
                        "<p>For IS 800:2007 weld design, use the stress resolution of §10.5.9 and the relevant fillet or butt-weld combination provision and resistance limit in §10.5.10 together. A von Mises-looking expression does not authorize importing a different code's allowable value or assigning an arbitrary longitudinal/transverse weld multiplier.</p>" +
                        "<p><em>Supplementary arithmetic check:</em> σ = 60 MPa and τ = 40 MPa give √(60<sup>2</sup> + 3 × 40<sup>2</sup>) = √8400 ≈ <strong>91.65 MPa</strong>. This is the equivalent-stress calculation for those stipulated components, not an acceptance verdict without the applicable weld resistance and detail checks.</p>",
                    sources: [{ id: "DESI787-00199", set: 22, question: 29 }]
                },
                {
                    id: "weldability-and-hydrogen-assisted-cold-cracking",
                    title: "Weldability and hydrogen-assisted cold cracking",
                    html: "<p><strong>Base-metal type and composition strongly affect weldability.</strong> Carbon and alloy content influence hardenability; impurities, strength level, thickness and heat flow influence suitable consumables and procedures. Joint preparation, access, restraint, electrode condition, current, arc length and heat input all interact with the material rather than making the material irrelevant.</p>" +
                        "<p>Hydrogen-assisted cold cracking requires an adverse combination of diffusible hydrogen, a susceptible microstructure and tensile stress. It can occur in weld metal or the heat-affected zone after cooling, sometimes with a delay. Its mechanism is different from cracking during solidification.</p>" +
                        "<p><strong>Low-hydrogen consumables</strong> reduce one important source of hydrogen, provided storage, handling and any specified conditioning are correct. Clean, dry joint surfaces, qualified preheat and interpass control, suitable heat input and restraint management may also be required. Consumable choice alone does not guarantee that cracking is prevented.</p>" +
                        "<p>Determine the procedure from the actual steel, thickness, hydrogen level and restraint, and use the required inspection plan. These qualitative controls are not a universal preheat temperature, cooling-rate prescription or permission to weld an unidentified plate.</p>",
                    sources: [
                        { id: "DESI787-00149", set: 17, question: 28 },
                        { id: "DESI787-00224", set: 24, question: 34 }
                    ]
                },
                {
                    id: "hot-cracking-and-welding-procedure-controls",
                    title: "Hot cracking is not solved by a universal cooling rule",
                    html: "<p><strong>Hot cracking</strong> occurs at high temperature and includes weld-solidification and heat-affected-zone liquation mechanisms. During late solidification, segregated low-melting material and poorly fed interdendritic regions can be unable to accommodate shrinkage or imposed tensile strain. Joint restraint and the developing weld shape therefore matter alongside composition.</p>" +
                        "<p>Control measures can involve compatible parent and filler compositions, impurity control, joint and bead geometry, welding sequence, restraint reduction and a qualified heat-input/travel-speed range. Solidification behaviour and cooling rate are part of this interacting system, not independent switches that always improve the result when made faster or slower.</p>" +
                        "<p>Preheating may be part of a suitable procedure, particularly where hydrogen-assisted cold cracking is the concern, but it does not automatically remove the metallurgical and strain conditions responsible for hot cracking. Distinguish the crack mechanism before selecting a corrective action, and qualify the procedure for the actual material and joint.</p>",
                    sources: [{ id: "DESI787-00225", set: 25, question: 25 }]
                },
                {
                    id: "column-base-load-transfer-and-bearing-bases",
                    title: "Column bases: preserve the distinction between code provisions",
                    html: "<p>A column base transfers column force through shaft contact or its connecting welds, stiffeners or gussets, into the base plate, bedding/grout, concrete support and foundation. Check plate bending, contact bearing, anchorage, shear transfer and the supporting construction. Anchors and shear keys provide only the actions for which they are actually detailed.</p>" +
                        "<p>For a rigid-base idealization with full compressive contact and a suitable linear pressure distribution, <strong>q = N/A ± M/Z</strong>. Use consistent units; N in N, M in N·mm, A in mm<sup>2</sup> and base-contact section modulus Z in mm<sup>3</sup> give q in MPa. If the calculation gives q<sub>min</sub> &lt; 0, compression-only contact cannot sustain that tensile pressure: use the appropriate partial-contact and anchor-force model instead.</p>" +
                        "<p>The supplied <strong>IS 800:2007 scan, §7.4.1, printed page 46</strong>, states a bearing strength of <strong>0.6f<sub>ck</sub></strong>, using the smaller characteristic cube strength of the concrete or bedding material. The nearby <strong>0.45 is a friction coefficient</strong> for the proper steel-to-concrete/grout contact surface; it is not that paragraph's bearing-stress coefficient.</p>" +
                        "<p><strong>Separately, IS 456:2000 §34.4</strong> treats bearing transfer at a column or pedestal base. Its limit-state expression is <strong>0.45f<sub>ck</sub> min[√(A<sub>1</sub>/A<sub>2</sub>), 2]</strong>. A<sub>2</sub> is the loaded area; A<sub>1</sub> is the supporting area permitted by that provision. In a sloped or stepped footing, the supporting-area construction uses a wholly contained frustum with the loaded area as its upper base and a one-vertical-to-two-horizontal side slope. It is not automatically the entire footing plan area.</p>" +
                        "<p><em>Supplementary comparison, not a combined design rule:</em> f<sub>ck</sub> = 25 MPa gives <strong>15 MPa</strong> under the supplied IS 800 bearing paragraph and <strong>11.25 MPa</strong> for the unenhanced IS 456 limit-state value. A qualifying A<sub>1</sub>/A<sub>2</sub> = 4 makes the latter <strong>22.5 MPa</strong>; the enhancement multiplier is capped at 2 even if its square root would be larger. A 600 kN concentric force at an assumed uniform 15 MPa needs 40000 mm<sup>2</sup> of effective bearing area, but that alone does not size or approve the base plate.</p>" +
                        "<p>These are two separately identified provisions and scopes. Do not select the larger value opportunistically, attach the IS 456 enhancement to the IS 800 coefficient, or claim that later amendments have been reconciled here. Establish the governing project basis before applying a bearing resistance.</p>",
                    sources: [{ id: "DESI787-00167", set: 19, question: 26 }]
                }
            ],
            gaps: [
                "The 60 assigned questions emphasize section names and connection details. No complete axially loaded column or built-up-member dataset is supplied. The buckling-curve and other explicitly supplementary calculations are authored teaching extensions, not additional bank questions.",
                "Actual member selection still needs loads, section dimensions and classification, material strength, effective lengths, restraints and applicable instability or interaction checks. These notes do not supply a complete biaxial column, slender-plate, torsional-buckling or lateral-torsional-buckling design.",
                "The bank does not provide complete bolt-group drawings, verified thread specifications or all plate strengths. Row-fit and M16 capacity examples state their assumptions; final bearing, block-shear, net-section, combined-action, prying, fatigue and fabrication checks are not established by those examples alone.",
                "Weld metallurgy and crack-control explanations are qualitative. No actual steel chemistry, welding procedure qualification, inspection record or acceptance class is supplied, so a universal preheat temperature, penetration fraction or weld efficiency cannot be certified from the bank.",
                "The archived IS 800:2007 bearing paragraph and IS 456:2000 bearing-transfer provision are kept separate. Their project applicability and later amendment reconciliation are not verified here. The quoted IS 800:1962 permissible stress is not independently verified; its force-unit conversion is only arithmetic.",
                "The DUDBC catalogue verifies NBC 111 Steel versus NBC 112 Timber, not wholesale equivalence to the cited IS editions or a complete Nepal Standards schedule. Real column bases additionally require actual column/base geometry, bedding strength, contact conditions, anchor demands and foundation checks; no final base design is claimed."
            ],
            cautions: [
                {
                    html: "<p><strong>Section-choice qualifications:</strong> the ISWB and tubular-section keys are not universal column-selection rules. A flange width close to section depth does not establish equal radii of gyration, and rectangular tubes need not have equal axis properties. Compare the actual governing slenderness, buckling class, local wall slenderness, connections and completed cost. Wide-flange or hollow sections may be advantageous without being automatically best.</p>",
                    sources: [
                        { id: "DESI787-00050", set: 7, question: 25 },
                        { id: "DESI787-00147", set: 17, question: 26 }
                    ]
                },
                {
                    html: "<p><strong>Web-only and local-failure wording:</strong> the web normally carries most vertical shear, but the keyed web only is not literally exact, and over 90% is not a geometry-independent constant. The concentrated-load answer for crippling identifies the relevant loading, but local bearing-related yielding or distortion must be distinguished from web buckling rather than reduced to a universal crushing-at-one-point description.</p>",
                    sources: [
                        { id: "DESI787-00051", set: 7, question: 26 },
                        { id: "DESI787-00146", set: 17, question: 25 }
                    ]
                },
                {
                    html: "<p><strong>85t is not the verified 2007 trigger:</strong> IS 800:2007 §8.4.2.1 calls for shear-buckling verification of an unstiffened web beyond d/t<sub>w</sub> = 67ε. The bank's 85t answer and associated stiffeners-required explanation must not be promoted as that clause. A check trigger is not an unconditional command to install intermediate stiffeners, nor does it select their spacing or size.</p>",
                    sources: [{ id: "DESI787-00141", set: 16, question: 30 }]
                },
                {
                    html: "<p><strong>Member names do not fix every force sign:</strong> compression plus bending is appropriate for the usual gravity-loaded rafter with a purlin between joints, but wind or other combinations can reverse its actions. A tie is a tension member; a rafter or boom is not necessarily compressive in every case. The tie explanation's only-net-area claim omits gross yielding, block shear, shear lag where applicable and connection resistance.</p>",
                    sources: [
                        { id: "DESI787-00067", set: 8, question: 32 },
                        { id: "DESI787-00206", set: 23, question: 25 }
                    ]
                },
                {
                    html: "<p><strong>Batten rule versus ambiguous pattern plates:</strong> the verified welded tie/batten overlap in IS 800:2007 §7.7.4.1 is at least 4t. The other source says pattern plates and keys more than 6t without identifying a supported detail. Its wording must not be silently rewritten as batten or splice plate, and the unverified 6t rule is not adopted here.</p>",
                    sources: [
                        { id: "DESI787-00055", set: 7, question: 30 },
                        { id: "DESI787-00154", set: 17, question: 32 }
                    ]
                },
                {
                    html: "<p><strong>No universal 1.6 mm hole allowance:</strong> IS 800:2007 Table 19 uses 1 mm for nominal 12–14 mm, 2 mm for 16–22 mm and 24 mm, and 3 mm above 24 mm for standard clearance holes. The source omits the bolt diameter and hole category, so choosing 1.6 mm as the closest general practice is not a verified code answer.</p>",
                    sources: [{ id: "DESI787-00150", set: 17, question: 29 }]
                },
                {
                    html: "<p><strong>Net-area assumptions and incorrect units:</strong> the 75 mm by 10 mm plate with an actual 18 mm hole has geometric net area <strong>570 mm<sup>2</sup> = 5.70 cm<sup>2</sup></strong>. IS 800:2007 §6.3.1 would give design area <strong>550 mm<sup>2</sup></strong> if the hole were directly punched, through its separate 2 mm deduction allowance. Manufacture is not specified; the explanation instead incorrectly adds bolt clearance to an already given hole. The keyed <strong>550 cm<sup>2</sup></strong> remains wrong even under the punched-hole interpretation. Likewise, the 400 mm plate's 3820 mm<sup>2</sup> assumes no directly punched deduction; that design area would otherwise be 3800 mm<sup>2</sup>. Do not invent manufacture or repair option units to defend a key.</p>",
                    sources: [
                        { id: "DESI787-00203", set: 22, question: 33 },
                        { id: "DESI787-00056", set: 7, question: 31 }
                    ]
                },
                {
                    html: "<p><strong>Reversal, fit and post-slip behaviour:</strong> HSFG is a suitable slip-resistant strategy when correctly designed and installed, not a guarantee of no slip or bearing at every load. A turned-and-fitted bolt can be defensible among the other item's listed choices, but its close fit does not prevent bearing. The sources' absolute no-bearing and automatic-loosening explanations overstate the distinction; fatigue performance depends on the complete detail.</p>",
                    sources: [
                        { id: "DESI787-00054", set: 7, question: 29 },
                        { id: "DESI787-00152", set: 1, question: 29 },
                        { id: "DESI787-00205", set: 22, question: 34 }
                    ]
                },
                {
                    html: "<p><strong>Nominal bolt-class interpretation:</strong> 4.6 gives nominal 400/240 MPa ultimate/yield strengths, and 8.8 gives nominal 800/640 MPa. These support the bank's shorthand answers but do not establish every size-dependent minimum, proof stress, thread area or product requirement. In particular, an M36 certification cannot be inferred solely from the 8.8 arithmetic.</p>",
                    sources: [
                        { id: "DESI787-00188", set: 21, question: 27 },
                        { id: "DESI787-00208", set: 23, question: 27 }
                    ]
                },
                {
                    html: "<p><strong>Stress versus installation force:</strong> the IS 800:2007 slip model's f<sub>0</sub> = 0.7f<sub>ub</sub> is a stress convention; its associated installation force is F<sub>0</sub> = 0.7f<sub>ub</sub>A<sub>n</sub>. Calling 0.7f<sub>ub</sub> alone a proof load omits area. It is also not a universal replacement for the proof-stress requirement in every bolt manufacturing specification.</p>",
                    sources: [{ id: "DESI787-00204", set: 1, question: 31 }]
                },
                {
                    html: "<p><strong>M16 minimum pitch is 40 mm:</strong> §10.2.2 gives 2.5 × 16 = 40 mm, not the keyed 27. The separate 2.5d source states the correct rule. For comparison, 27 mm equals 1.5 times an 18 mm hole, which can be a smoother-edge end distance; it is not a different minimum pitch caused by class 4.6.</p>",
                    sources: [
                        { id: "DESI787-00184", set: 20, question: 33 },
                        { id: "DESI787-00210", set: 23, question: 29 }
                    ]
                },
                {
                    html: "<p><strong>32t is real but incomplete:</strong> §10.2.3.1 has the general maximum min(32t, 300 mm), contrary to the explanation's statement that 32t is not standard. Ordinary stress-direction rows also have tension min(16t, 200 mm) or compression min(12t, 200 mm) limits, with separate outside-edge-row and special-detail provisions. A bare 32t answer cannot be applied to every row.</p>",
                    sources: [{ id: "DESI787-00211", set: 23, question: 30 }]
                },
                {
                    html: "<p><strong>The 50% stagger allowance has conditions:</strong> equal stagger intervals, gauge no greater than 75 mm, the specified spacing categories in §§10.2.3.2–3 and the general cap in §10.2.3.1 all matter. The bank's explanation incorrectly presents a longer net-failure path as enough justification. Detailing relaxation and net-section resistance are separate checks.</p>",
                    sources: [{ id: "DESI787-00212", set: 23, question: 31 }]
                },
                {
                    html: "<p><strong>Three nominal 25 mm bolts do not fit the stated conditional layout:</strong> standard holes are 28 mm, so even smoother-edge distances are 42 mm, not 37.5 mm. Three require <strong>209 mm</strong>; two require 146.5 mm. Two are possible only after interpreting 200 mm as the available row length and confirming the assumed nominal diameter, hole and edge conditions. The bank's three-bolt result uses bolt diameter where hole diameter is required.</p>",
                    sources: [{ id: "DESI787-00215", set: 24, question: 25 }]
                },
                {
                    html: "<p><strong>The 29 kN shear key is conditionally correct:</strong> one threaded shear plane in an M16 class-4.6 bolt gives about <strong>28.97 kN</strong> using 0.78 times shank area, or about <strong>29.0 kN</strong> using the applicable area near 157 mm<sup>2</sup>. A plain-shank plane gives 37.15 kN. No different grade is needed to explain the key. The explanation's alternative multiplication by √3γ<sub>mb</sub> is not the design shear formula; bearing and other applicable checks may still govern the joint.</p>",
                    sources: [{ id: "DESI787-00216", set: 24, question: 26 }]
                },
                {
                    html: "<p><strong>Check the first limiting mode, not a supposedly gentle failure:</strong> bolts are commonly used for shear transfer but can also be designed for tension. Taking the smaller shear and bearing resistance identifies the controlling limit state; it does not ensure a least-catastrophic failure sequence. The 40% efficiency calculation is correct only if the stated 60 kN is the controlling joint strength per pitch and no other mode is weaker.</p>",
                    sources: [
                        { id: "DESI787-00142", set: 16, question: 31 },
                        { id: "DESI787-00218", set: 24, question: 28 },
                        { id: "DESI787-00217", set: 24, question: 27 }
                    ]
                },
                {
                    html: "<p><strong>Bolt tension formula is incomplete without the cap:</strong> the keyed 0.9f<sub>ub</sub>A<sub>n</sub>/γ<sub>mb</sub> is the rupture branch. The supplied IS 800:2007 §10.3.5 also caps it by <strong>f<sub>yb</sub>A<sub>sb</sub>/γ<sub>m0</sub></strong>. Retain both branches with their stated areas and factors; do not invent another multiplier in the yielding branch. Prying and concurrent shear remain separate demands/checks.</p>",
                    sources: [{ id: "DESI787-00214", set: 23, question: 33 }]
                },
                {
                    html: "<p><strong>The end-plate answer omits shear transfer:</strong> a tension-compression couple explains the moment component, not how all moment, axial force and shear reach the support. Identify bolt shear/bearing, designed friction or another detailed shear path. The cantilever's shear-plus-moment answer is appropriate for a true moment-resisting support, but attaching an unspecified gusset does not by itself establish that restraint.</p>",
                    sources: [
                        { id: "DESI787-00220", set: 24, question: 30 },
                        { id: "DESI787-00219", set: 24, question: 29 }
                    ]
                },
                {
                    html: "<p><strong>Unspecified gusset minimum and splice location:</strong> the supplied data do not establish a universal 12 mm gusset/splice-plate minimum. Thickness needs the actual resistance and stability checks. Above-floor splices are often convenient for erection, but that location need not avoid maximum moment and supplies no universal minimum clear distance. Use the actual force envelope, access and governing detailing provisions.</p>",
                    sources: [
                        { id: "DESI787-00193", set: 21, question: 32 },
                        { id: "DESI787-00222", set: 24, question: 32 }
                    ]
                },
                {
                    html: "<p><strong>Side versus end fillet:</strong> the parallel-axis definition of a side fillet is correct. Its explanation should not be read as a universal permission to apply different arbitrary strength factors to side and end welds. Resolve the load using the stress model and resistance rules of the chosen code and detail.</p>",
                    sources: [{ id: "DESI787-00052", set: 7, question: 27 }]
                },
                {
                    html: "<p><strong>Partial penetration is not universally 5/8 of the thinner plate:</strong> §10.5.3.3 uses the actual minimum common weld-metal thickness, excluding reinforcement. Complete and incomplete penetration need their own qualified joint geometry. A generic root-to-face description or an assumed 5/8 ratio does not establish the effective throat of every butt weld.</p>",
                    sources: [
                        { id: "DESI787-00145", set: 16, question: 34 },
                        { id: "DESI787-00153", set: 17, question: 31 }
                    ]
                },
                {
                    html: "<p><strong>Keep the fillet-size boundaries and edge types separate:</strong> exactly 20 mm thicker-part thickness gives the Table 21 minimum of 5 mm, subject to its notes. A rounded rolled-section toe has the usual <strong>0.75t</strong> maximum, not the keyed t/2. The 10.5 mm answer for 12 mm and 14 mm plates is appropriate to the usual square-edge thinner-minus-1.5 mm detail, not every possible weld geometry.</p>",
                    sources: [
                        { id: "DESI787-00191", set: 21, question: 30 },
                        { id: "DESI787-00198", set: 22, question: 28 },
                        { id: "DESI787-00201", set: 22, question: 31 }
                    ]
                },
                {
                    html: "<p><strong>No universal 45 mm effective length:</strong> the verified §10.5.4.1 criterion is at least 4s, with the usual actual-length allowance of 2s beyond effective length. The source supplies no weld size or sufficient detail. Its extra 40 mm minimum and selected 45 mm cannot be adopted as an unqualified statement of that clause.</p>",
                    sources: [{ id: "DESI787-00192", set: 21, question: 31 }]
                },
                {
                    html: "<p><strong>Equivalent stress is method-dependent:</strong> √(σ<sup>2</sup> + 3τ<sup>2</sup>) is the stated normal-plus-shear form, but the symbols must refer to the prescribed local stress components. It is not a complete acceptance rule for every weld, arbitrary stress state or code. Use the selected fillet/butt provision, its definitions and its resistance limit together.</p>",
                    sources: [{ id: "DESI787-00199", set: 22, question: 29 }]
                },
                {
                    html: "<p><strong>Unverified global 80% weld rule:</strong> no authoritative general requirement that every welded portion have at least 80% of parent-material strength was verified in the supplied IS 800:2007 text. The source provides no usable detail or clause establishing it. Do not adopt that percentage, convert it into a blanket butt-weld rule or assign a historical clause number without the relevant edition.</p>",
                    sources: [{ id: "DESI787-00221", set: 24, question: 31 }]
                },
                {
                    html: "<p><strong>Base-metal type is important to sound welding:</strong> the keyed claim that metal-plate type does not govern weld quality is incorrect. Composition, hardenability, impurities, thickness and strength level influence weldability and procedure selection. Electrode choice, arc conditions and joint geometry cannot be specified reliably by treating the parent metal as irrelevant.</p>",
                    sources: [{ id: "DESI787-00224", set: 24, question: 34 }]
                },
                {
                    html: "<p><strong>Low hydrogen is a control, not an unconditional guarantee:</strong> low-hydrogen electrodes address an important cause of cold cracking, but storage, moisture, susceptible microstructure and tensile restraint also matter. Cracking can involve the weld metal as well as the heat-affected zone. The required preheat, interpass and heat-input controls depend on the actual material and joint.</p>",
                    sources: [{ id: "DESI787-00149", set: 17, question: 28 }]
                },
                {
                    html: "<p><strong>Preheating does not universally prevent hot cracks:</strong> the bank's key and explanation conflate a possible thermal-control measure with a guaranteed cure. Hot-cracking susceptibility depends on composition, segregation, joint and bead geometry, restraint, shrinkage strain and solidification conditions. Preheat is often relevant to hydrogen-assisted cold-crack control; it does not automatically remove hot-crack causes.</p>",
                    sources: [{ id: "DESI787-00225", set: 25, question: 25 }]
                },
                {
                    html: "<p><strong>Historical stress is not a verified current allowance:</strong> the source explicitly names IS 800:1962 and quotes 1890 kg/cm<sup>2</sup>. Interpreting the intended force unit as kgf/cm<sup>2</sup>, <strong>1890 × 0.0980665 = 185.345685 MPa</strong>. This checks the conversion only. The quoted coefficient and its precise 1962 scope were not independently verified, and the value must not be used as a current limit-state slab-base resistance.</p>",
                    sources: [{ id: "DESI787-00164", set: 18, question: 33 }]
                },
                {
                    html: "<p><strong>Column-base key and code attribution:</strong> <strong>0.45√f<sub>ck</sub></strong> is not either verified bearing expression, and the IS 456 area multiplier is capped at <strong>2, not √2</strong>. The supplied IS 800:2007 §7.4.1 scan actually gives <strong>0.6f<sub>ck</sub></strong> using the smaller concrete/bedding strength; its nearby 0.45 is friction. IS 456:2000 §34.4 separately gives 0.45f<sub>ck</sub> with its geometrically qualified area enhancement. None of the three offered options establishes the correct design basis. Do not mix the provisions or claim later amendments have been reconciled.</p>",
                    sources: [{ id: "DESI787-00167", set: 19, question: 26 }]
                }
            ],
            references: [
                {
                    title: "IS 800:2007, General Construction in Steel — Code of Practice, third revision; archived scan, including §7.4.1 on printed page 46",
                    url: "https://archive.org/details/gov.in.is.800.2007/page/n59/mode/1up"
                },
                {
                    title: "IS 456:2000, Plain and Reinforced Concrete — Code of Practice, fourth revision; archived text, §34.4 bearing transfer",
                    url: "https://archive.org/stream/gov.in.is.456.2000/is.456.2000_djvu.txt"
                },
                {
                    title: "DUDBC official National Building Code catalogue — NBC 111 Steel and NBC 112 Timber; catalogue identity, not certification of an adopted edition",
                    url: "https://dudbc.gov.np/pages/24231978/"
                }
            ]
        }
    });
})();