(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0504: {
            code: "ACiE0504",
            questionCount: 46,
            blocks: [
                {
                    id: "column-actions-strains-and-units",
                    title: "Column actions, strain limits and consistent units",
                    html: "<p>A reinforced-concrete column transfers axial force and usually bending moments between floors and foundations. Bond makes the longitudinal steel and surrounding concrete deform compatibly; transverse reinforcement restrains the longitudinal bars and confines the core. An axial force does not prove that bending is absent: frame action, imperfect alignment and second-order displacement can all create moment.</p>" +
                        "<p>The teaching basis here is <strong>IS 456:2000, Fourth Revision, with the relevant appended amendments</strong>, and <strong>IS 1343:2012, Second Revision</strong>, read with the identified 2019 amendment. These are edition-labelled study references, not a claim about the latest standards or legal acceptance in Nepal. Worked illustrations explain mechanics rather than dimension an actual building.</p>" +
                        "<p>For the IS 456 limit-state idealization of <strong>pure axial compression</strong>, the maximum concrete strain is <strong>ε<sub>c</sub> = 0.002</strong>. The familiar <strong>0.0035</strong> is the extreme compression-fibre limit in bending. Uniform axial strain and a bending strain gradient are different states; a member under combined axial force and bending, including an entirely compressed section, needs the applicable strain-compatibility conditions of §39.1. Neither number is a universal limit for every compression state.</p>" +
                        "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Consistent units and meaning</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>P, M, A, I, Z</th><td>For section stresses use N, N·mm, mm<sup>2</sup>, mm<sup>4</sup>, mm<sup>3</sup>; Z = I/c.</td></tr>" +
                        "<tr><th scope='row'>f<sub>ck</sub>, f<sub>y</sub>, σ</th><td>N/mm<sup>2</sup> = MPa; characteristic material strengths are not applied stresses.</td></tr>" +
                        "<tr><th scope='row'>Footing pressure q</th><td>kN/m<sup>2</sup> = kPa; 1000 kPa = 1 MPa.</td></tr>" +
                        "<tr><th scope='row'>ε and moment conversion</th><td>Strain is dimensionless; 1 kN·m = 10<sup>6</sup> N·mm.</td></tr></tbody></table>",
                    sources: [{ id: "DESI787-00022", set: 4, question: 26 }]
                },
                {
                    id: "short-column-effective-length-in-both-planes",
                    title: "Short columns: check effective length in both planes",
                    html: "<p><strong>IS 456:2000 §25.1.2</strong> classifies a compression member as short only when <strong>l<sub>ex</sub>/D &lt; 12 and l<sub>ey</sub>/b &lt; 12</strong>. The two effective lengths and corresponding lateral dimensions belong to their respective bending planes. If either ratio reaches 12, the member does not meet this short-column definition. This effective-length-to-dimension test is not the Euler slenderness ratio l<sub>e</sub>/r, where r is radius of gyration.</p>" +
                        "<p>Write l<sub>e</sub> = Kl, with l the unsupported length. Annex E/Table 28 recommends <strong>K = 0.65</strong> for the specified case with both ends effectively held in position and restrained against rotation. Confirm these restraints in each plane. <strong>Rotational fixity alone does not establish that frame sway is suppressed</strong>; the effective-length model must reflect translational restraint and the surrounding frame.</p>" +
                        "<p><strong>Bank calculation:</strong> a 400 × 500 mm section is <strong>rectangular, not square</strong>. With l = 5000 mm and the stated fully held, rotationally restrained interpretation in both planes, l<sub>ex</sub> = l<sub>ey</sub> = 0.65 × 5000 = 3250 mm. The two ratios are <strong>3250/400 = 8.125</strong> and <strong>3250/500 = 6.5</strong>. Both are below 12, so this interpretation gives a <strong>short column</strong>, not the stored long-column answer. If translational restraint is unknown, establish it rather than silently assigning K.</p>",
                    sources: [{ id: "DESI787-00078", set: 10, question: 25 }]
                },
                {
                    id: "minimum-eccentricity-uses-unsupported-length",
                    title: "Minimum eccentricity uses the unsupported length",
                    html: "<p>Nominally concentric loading still needs an allowance for unavoidable imperfections. Under <strong>IS 456:2000 §25.4</strong>, the minimum eccentricity for the relevant plane is <strong>e<sub>min</sub> = max(l/500 + D/30, 20 mm)</strong>, using the <strong>unsupported</strong> length l and the corresponding lateral dimension D, both in millimetres. Do not insert the smaller effective buckling length in this expression.</p>" +
                        "<table><thead><tr><th scope='col'>400 × 400 mm bank column</th><th scope='col'>Calculated allowance</th><th scope='col'>Adopted minimum</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>l = 5000 mm</th><td>5000/500 + 400/30 = 23.333… mm</td><td>23.333… mm</td></tr>" +
                        "<tr><th scope='row'>l = 3000 mm</th><td>3000/500 + 400/30 = 19.333… mm</td><td>20 mm, because the lower bound governs</td></tr></tbody></table>" +
                        "<p>For a given axial force, eccentricity produces a moment contribution P e; for example, 1000 kN acting 20 mm off-centre produces 20 kN·m. This is an illustrative force-times-distance conversion, not a replacement for the actual frame moments. Calculate the relevant eccentricities and preserve the actual uniaxial or biaxial loading; apply the code's combination provisions rather than discarding larger analysed moments.</p>",
                    sources: [
                        { id: "DESI787-00080", set: 10, question: 27 },
                        { id: "DESI787-00081", set: 10, question: 28 }
                    ]
                },
                {
                    id: "nominal-axial-capacity-and-its-applicability",
                    title: "The short-column axial expression has an applicability limit",
                    html: "<p>For the short, nominally axially loaded case admitted by <strong>IS 456:2000 §39.3</strong>, <strong>P<sub>u</sub> = 0.4f<sub>ck</sub>A<sub>c</sub> + 0.67f<sub>y</sub>A<sub>sc</sub></strong>. Here P<sub>u</sub> is design axial capacity, A<sub>sc</sub> is longitudinal steel area, A<sub>g</sub> is gross section area and <strong>A<sub>c</sub> = A<sub>g</sub> − A<sub>sc</sub></strong> is concrete area. Strengths in MPa and areas in mm<sup>2</sup> give force in N.</p>" +
                        "<p>The minimum eccentricity must be <strong>≤0.05 times the corresponding lateral dimension</strong>, and the member must genuinely fall within the nominal-axial case; actual moments requiring axial-force–moment interaction cannot be ignored. The coefficients already allow for the permitted nominal eccentricity. <strong>Do not multiply this capacity by another 0.9</strong> as a supposed blanket 10% deduction.</p>" +
                        "<p><em>Illustrative calculation:</em> take a 400 × 400 mm short column, unsupported length 3000 mm, M25 concrete, Fe415 steel and A<sub>sc</sub> = 2000 mm<sup>2</sup>, with no additional moments taking it outside that nominal-axial case. Its e<sub>min</sub> = 20 mm equals 0.05 × 400. Then A<sub>c</sub> = 158000 mm<sup>2</sup>, and P<sub>u</sub> = 0.4 × 25 × 158000 + 0.67 × 415 × 2000 = <strong>2136100 N = 2136.1 kN</strong>. Bar layout, restraints and all other checks remain separate.</p>" +
                        "<p>For the otherwise similar <strong>5000 mm unsupported-length</strong> example, e<sub>min</sub> = 23.333… mm <strong>exceeds 0.05D = 20 mm</strong>. The shortcut is therefore outside its stated eccentricity limit, even if the member is short. Use the appropriate combined axial-load and bending analysis instead.</p>",
                    sources: [{ id: "DESI787-00079", set: 10, question: 26 }]
                },
                {
                    id: "column-longitudinal-steel-area-limits",
                    title: "Longitudinal steel: minimum area, upper limit and congestion",
                    html: "<p>Under the ordinary gross-area rule in <strong>IS 456:2000 §26.5.3.1(a)</strong>, column longitudinal reinforcement lies between <strong>0.008A<sub>g</sub></strong> and <strong>0.06A<sub>g</sub></strong>. The lower limit provides a minimum reinforced load path and robustness; the upper limit is not a preferred target. Closely packed bars impede concrete placement, and lap zones can become especially congested. The accompanying code note usually limits the percentage to 4% where bars from the column below are lapped.</p>" +
                        "<p><strong>Bank section:</strong> A<sub>g</sub> = 400 × 400 = 160000 mm<sup>2</sup>. Therefore A<sub>sc,min</sub> = 0.008 × 160000 = <strong>1280 mm<sup>2</sup></strong>, and A<sub>sc,max</sub> = 0.06 × 160000 = <strong>9600 mm<sup>2</sup></strong>. An offered value of 1200 mm<sup>2</sup> is only 0.75% and is below the ordinary minimum; proximity to the correct number does not establish compliance. The 9600 mm<sup>2</sup> value is an <strong>upper</strong> bound, not a required minimum.</p>" +
                        "<p>Paragraph (b) has a distinct minimum-steel basis for a column deliberately larger than the concrete area required to carry direct stress. That exception needs a justified required-area calculation; it cannot be assumed merely to rescue a multiple-choice option. Area limits also do not replace strength, interaction, bar-spacing, cover, anchorage or seismic-detailing checks.</p>",
                    sources: [
                        { id: "DESI787-00040", set: 5, question: 34 },
                        { id: "DESI787-00165", set: 18, question: 34 },
                        { id: "DESI787-00166", set: 19, question: 25 }
                    ]
                },
                {
                    id: "column-bar-layout-and-circular-joints",
                    title: "Bar count, peripheral spacing and circular-column joints",
                    html: "<p><strong>IS 456:2000 §26.5.3.1(c–g)</strong> requires at least <strong>four longitudinal bars in a rectangular column</strong> and <strong>six in a circular column</strong>; longitudinal bar diameter must be <strong>at least 12 mm</strong>. In a helically reinforced column, the longitudinal bars are arranged against the inside of the helix, equidistant around it. The minimum number is a starting detailing rule, not proof that every other requirement has been met.</p>" +
                        "<p>The <strong>300 mm maximum spacing</strong> in §26.5.3.1(g) is measured <strong>along the periphery of the column</strong>. It is not a universal maximum for the separation of any two parallel reinforcement bars anywhere in a structure. Minimum clear gaps for concrete placement, peripheral spacing, total steel area and lateral restraint all require separate attention; a large section can need more than the minimum bar count.</p>" +
                        "<p><em>Illustrative area check:</em> four 20 mm bars provide 4 × π × 20<sup>2</sup>/4 = <strong>1256.6 mm<sup>2</sup></strong>. That satisfies the minimum number for a rectangle but falls below 1280 mm<sup>2</sup> for an ordinary 400 mm square column. Counting bars without checking their total area misses this shortfall.</p>" +
                        "<p>Circular columns are used in buildings, piers and piles; they are not inherently forbidden or weak. A curved face can complicate beam formwork, bar anchorage and joint confinement compared with a rectangular face. Whether it is convenient or economical depends on the actual beam–column joint and construction method, not a blanket statement that circular columns are generally unused.</p>",
                    sources: [
                        { id: "DESI787-00082", set: 10, question: 29 },
                        { id: "DESI787-00083", set: 10, question: 30 },
                        { id: "DESI787-00084", set: 10, question: 31 },
                        { id: "DESI787-00111", set: 13, question: 28 },
                        { id: "DESI787-00038", set: 5, question: 32 }
                    ]
                },
                {
                    id: "lateral-tie-pitch-and-bar-restraint",
                    title: "Lateral ties: use the smallest longitudinal-bar diameter",
                    html: "<p>Lateral ties hold the reinforcement cage in position and restrain compression bars against outward buckling. Their effectiveness depends on the tie arrangement and anchorage as well as their spacing. Under the general rule in <strong>IS 456:2000 §26.5.3.2</strong>, the maximum pitch is <strong>s<sub>max</sub> = min(least lateral dimension, 16φ<sub>min</sub>, 300 mm)</strong>, where φ<sub>min</sub> is the <strong>smallest longitudinal-bar diameter</strong> being considered.</p>" +
                        "<table><thead><tr><th scope='col'>400 × 400 mm bank column</th><th scope='col'>Three competing limits</th><th scope='col'>Maximum pitch</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>20 mm longitudinal bars</th><td>400 mm; 16 × 20 = 320 mm; 300 mm</td><td>300 mm</td></tr>" +
                        "<tr><th scope='row'>12 mm longitudinal bars</th><td>400 mm; 16 × 12 = 192 mm; 300 mm</td><td>192 mm</td></tr></tbody></table>" +
                        "<p>If a cage contains both 20 and 12 mm longitudinal bars, selecting the 20 mm diameter would overlook the smaller bar's restraint requirement. A calculated maximum of 192 mm means the adopted spacing must not exceed it, not that ties must be set at exactly 192 mm. These general maxima do not override closer spacing required in seismic confinement zones, joints, splice regions or a particular structural design.</p>",
                    sources: [
                        { id: "DESI787-00085", set: 10, question: 32 },
                        { id: "DESI787-00086", set: 10, question: 33 }
                    ]
                },
                {
                    id: "helical-confinement-and-conditional-strength-credit",
                    title: "Helical confinement: the 1.05 factor is conditional",
                    html: "<p>A properly proportioned spiral develops circumferential tension as the concrete core expands laterally. This confinement improves the core's compression behaviour and deformation capacity. <strong>IS 456:2000 §39.4</strong> allows a helically reinforced compression member <strong>1.05 times</strong> the strength of a similar tied member only when the specified requirements are satisfied. A circular shape or the presence of a spiral alone does not earn this credit.</p>" +
                        "<p>Check the <strong>helical-steel volume/core-volume ratio</strong> against §39.4.1. Its requirement depends on gross-to-core area, concrete strength and helix-steel strength, the latter limited to <strong>415 MPa</strong> for this provision. The core area is measured to the <strong>outside diameter of the helix</strong>; it is not the entire gross concrete area including cover.</p>" +
                        "<p>For the increased-strength case, §26.5.3.2 requires helix pitch s to satisfy <strong>max(25 mm, 3φ<sub>h</sub>) ≤ s ≤ min(75 mm, d<sub>core</sub>/6)</strong>, together with the diameter, end anchorage and longitudinal-bar restraint requirements. Here φ<sub>h</sub> is the helix-bar diameter, not the main-bar diameter. <em>Geometric illustration:</em> d<sub>core</sub> = 300 mm and φ<sub>h</sub> = 8 mm give a pitch window of <strong>25–50 mm</strong> from these spacing bounds alone. The volume-ratio and remaining checks are still necessary; this window by itself does not establish a 5% increase.</p>",
                    sources: [{ id: "DESI787-00044", set: 6, question: 28 }]
                },
                {
                    id: "footing-area-and-compatible-bearing-pressure",
                    title: "Footing area: match service loads to gross or net bearing pressure",
                    html: "<p>For a concentric preliminary bearing calculation, <strong>A<sub>req</sub> = N<sub>s</sub>/q<sub>allow</sub></strong> uses a service-level vertical resultant N<sub>s</sub> and an allowable pressure on the <strong>same load and gross/net basis</strong>. A gross contact check includes the appropriate column load, footing self-weight, soil above the footing and other relevant actions. Geotechnical net pressure commonly deducts the original overburden at founding level; use the actual definition in the soil report rather than assuming that net means column load only.</p>" +
                        "<p><strong>Printed data:</strong> 330 kN divided by 150 kN/m<sup>2</sup> gives <strong>2.20 m<sup>2</sup></strong>. This is valid for the stated simplified calculation only if 330 kN is the compatible load to compare with that pressure, or if additional weight is explicitly neglected at the preliminary stage. The 200 × 400 mm column dimensions affect footing projections and structural checks but do not change this division.</p>" +
                        "<p><em>Alternative illustrative assumption:</em> if 330 kN excludes footing/overburden weight, 150 kPa is a gross allowable pressure, and an estimated extra load of 10% is deliberately adopted, the total is 363 kN and the preliminary area is <strong>2.42 m<sup>2</sup></strong>. Ten percent is not a universal code addition. Replace an estimate with geometry-based weights, and never add it again to a load that already includes them.</p>" +
                        "<p>Check eccentric pressure and settlement as well as average bearing. Structural bending and shear use the appropriate factored load combinations with a compatible factored reaction model; a factored column load must not simply be divided by a service allowable pressure and called a consistent design.</p>",
                    sources: [{ id: "DESI787-00176", set: 20, question: 25 }]
                },
                {
                    id: "footing-resultants-pressure-and-no-tension-core",
                    title: "Equilibrium does not by itself make soil pressure uniform",
                    html: "<p>First locate the resultant of the <strong>load system</strong>, not merely the geometric centre of a column. With vertical forces P<sub>i</sub> at x<sub>i</sub> and no applied couples, <strong>x<sub>R</sub> = ΣP<sub>i</sub>x<sub>i</sub>/ΣP<sub>i</sub></strong>. Include the appropriate dead loads and applied moments in the full equilibrium calculation. The soil-reaction resultant must be equal, opposite and collinear with the applied resultant for equilibrium, whether the pressure is uniform or nonuniform.</p>" +
                        "<p>Uniform pressure follows from the <strong>idealized linear full-contact model</strong> when the applied resultant passes through the <strong>centroid of the footing area</strong> and the corresponding moments about that centroid vanish. Coincidence of the load and reaction resultants alone is not this extra condition. Even homogeneous soil can develop nonuniform contact stress because pressure also depends on soil constitutive behaviour, foundation stiffness and deformation compatibility.</p>" +
                        "<p>For a rectangular base of length L in the eccentricity direction and width B, <strong>A = BL</strong>, <strong>Z = BL<sup>2</sup>/6</strong> and <strong>q<sub>max,min</sub> = P/A ± M/Z = (P/A)(1 ± 6e/L)</strong>, with e = M/P and compressive contact pressure positive. This linear, full-area-contact expression has no soil tension only when <strong>|e| ≤ L/6</strong> for uniaxial eccentricity. If it predicts negative contact pressure, reassess the compression-only contact area and equilibrium; do not merely erase the negative part while leaving the other pressures unchanged.</p>" +
                        "<p><em>Illustrative service case:</em> P = 600 kN, L = 3 m, B = 2 m and M = 150 kN·m give e = 0.25 m, A = 6 m<sup>2</sup>, Z = 3 m<sup>3</sup> and pressures <strong>150 and 50 kPa</strong>. The resultants still balance along the same line, but the pressure is plainly not uniform. Biaxial moments require both pressure gradients and corner-contact checks.</p>",
                    sources: [
                        { id: "DESI787-00170", set: 19, question: 28 },
                        { id: "DESI787-00171", set: 19, question: 29 },
                        { id: "SOIL136-00411", set: 31, question: 45 },
                        { id: "SOIL136-00415", set: 32, question: 37 },
                        { id: "SOIL136-00417", set: 32, question: 39 }
                    ]
                },
                {
                    id: "unequal-column-loads-and-footing-plan-shape",
                    title: "Unequal column loads: choose a plan that fits the resultant",
                    html: "<p>A combined footing carries more than one column on a common base. When two column loads are unequal, a trapezoidal plan can move the area centroid toward the larger load by providing more width at that end. It is <strong>one possible solution</strong>, not a unique consequence of unequal loading. A rectangular footing with suitable position and projections, a strap arrangement or another foundation system may also satisfy the load path and site constraints.</p>" +
                        "<p>For a trapezoidal plan, define <strong>a as the width at x = 0</strong>, <strong>b as the width at x = L</strong>, and L as the distance between these parallel ends, not automatically the column spacing. Then <strong>A = L(a + b)/2</strong> and the area centroid measured from the a end is <strong>x̄ = L(a + 2b)/[3(a + b)]</strong>. Reversing the reference end reverses the roles of a and b. Check that the centroid moves toward the wider end.</p>" +
                        "<p><em>Illustrative geometry:</em> a = 2 m, b = 4 m and L = 6 m give A = 18 m<sup>2</sup> and x̄ = <strong>3.333… m from the 2 m-wide end</strong>. Compare that location with the load resultant before assuming uniform pressure. Geometry alone does not establish allowable bearing, settlement, shear or reinforcement. For the adopted idealization, the pressure model and both force and moment equilibrium must remain compatible.</p>",
                    sources: [
                        { id: "DESI787-00035", set: 5, question: 29 },
                        { id: "DESI787-00172", set: 19, question: 30 }
                    ]
                },
                {
                    id: "combined-footing-upward-soil-and-signed-moments",
                    title: "Combined footings: upward soil, downward columns and signed moments",
                    html: "<p>After choosing a compatible pressure distribution, obtain shear and bending from a footing free body with <strong>soil reaction acting upward</strong> and <strong>column loads acting downward</strong>. This is an inverted-beam load arrangement, not a downward-loaded floor slab supported upward by columns. Use the resulting positive and negative moment envelopes to place reinforcement; maximum bending moment is important but does not replace shear, punching or geotechnical checks.</p>" +
                        "<p>For a longitudinal strip with x measured from its free left edge, take <strong>sagging M as positive, giving bottom tension</strong>, and define V = dM/dx. With upward line load w and downward point-column loads P<sub>i</sub> at a<sub>i</sub>, equilibrium gives <strong>V(x) = wx − ΣP<sub>i</sub></strong> for columns already crossed by the cut, and <strong>M(x) = wx<sup>2</sup>/2 − ΣP<sub>i</sub>(x − a<sub>i</sub>)</strong>. Here dV/dx = +w because w is explicitly upward. Include applied couples or other loads when present.</p>" +
                        "<p><em>Illustrative factored net-load model:</em> use a 6 m-long, 2 m-wide strip with q<sub>u</sub> = 100 kPa upward, hence w = 200 kN/m, and two 600 kN downward column forces at x = 1 and 5 m. Uniform distributed dead load is assumed consistently netted against its matching reaction component; the gross bearing check is separate. Total upward and downward forces are both 1200 kN.</p>" +
                        "<table><thead><tr><th scope='col'>Section x</th><th scope='col'>Moment from the stated free body</th><th scope='col'>Flexural tension face</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>1 m, first column line</th><td>100 × 1<sup>2</sup> = +100 kN·m</td><td>Bottom</td></tr>" +
                        "<tr><th scope='row'>3 m, centre</th><td>100 × 3<sup>2</sup> − 600 × 2 = −300 kN·m</td><td>Top</td></tr>" +
                        "<tr><th scope='row'>5 m, second column line</th><td>100 × 5<sup>2</sup> − 600 × 4 = +100 kN·m</td><td>Bottom</td></tr></tbody></table>" +
                        "<p>M and V return to zero at the right free edge. This example has top tension centrally and bottom tension in the outer regions; <strong>these are not universal locations</strong>. Actual column moments, overhangs, pressure variation and load reversal govern. Point columns are only a global-analysis idealization: use finite column faces, actual critical sections, anchorage and transverse action for detailing.</p>",
                    sources: [
                        { id: "DESI787-00169", set: 19, question: 27 },
                        { id: "DESI787-00175", set: 19, question: 33 },
                        { id: "SOIL136-00399", set: 30, question: 48 },
                        { id: "SOIL136-00416", set: 32, question: 38 }
                    ]
                },
                {
                    id: "footing-critical-sections-and-thickness",
                    title: "Footing depth: bending, one-way shear and punching",
                    html: "<p>Footing depth must satisfy several mechanisms. Flexure develops over the projections beyond a column; one-way shear can separate an outer strip; punching can drive the column through a surrounding perimeter. The <strong>effective depth d</strong> is measured to the relevant tensile reinforcement and is not the same as overall thickness D or the thickness of a sloping edge.</p>" +
                        "<table><thead><tr><th scope='col'>Check for an ordinary concrete column on a soil-supported footing</th><th scope='col'>Critical location</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Bending, §34.2.3.2(a)</th><td>At the concrete column, pedestal or wall face.</td></tr>" +
                        "<tr><th scope='row'>One-way shear, §34.2.4.1(a), Amendment 1</th><td>d from the column/pedestal/wall face on soil.</td></tr>" +
                        "<tr><th scope='row'>Punching, §34.2.4.1(b)/§31.6.1</th><td>Ordinarily a perimeter offset d/2 from the loaded area; adapt it at edges and openings.</td></tr></tbody></table>" +
                        "<p><em>Illustrative concentric case:</em> a 2 × 2 m footing supports a centred 0.4 × 0.4 m column, with d = 0.3 m, compatible uniform net upward q<sub>u</sub> = 200 kPa and column P<sub>u</sub> = 800 kN. The face projection is 0.8 m. A one-metre strip has face moment <strong>200 × 0.8<sup>2</sup>/2 = 64 kN·m/m</strong>; one-way shear at d from that face is <strong>200 × (0.8 − 0.3) = 100 kN/m</strong>.</p>" +
                        "<p>The punching perimeter has side 0.4 + 0.3 = 0.7 m, perimeter u = 2.8 m and enclosed area 0.49 m<sup>2</sup>. Subtract the enclosed upward reaction: V<sub>p</sub> = 800 − 200 × 0.49 = <strong>702 kN</strong>. The nominal average stress is V<sub>p</sub>/(ud) = 835.714 kPa = <strong>0.836 MPa</strong>. These are demand calculations, not a concrete-capacity or complete design check; moment transfer can make perimeter stresses nonuniform.</p>" +
                        "<p><strong>§34.1.2</strong> requires edge thickness of at least <strong>150 mm on soil</strong> and <strong>300 mm above the tops of piles</strong> for pile-supported footings. The latter is not an unconditional 300 mm total pile-cap thickness. Pile-supported one-way shear has the separately specified d/2 location in the amended provision; do not substitute it for the d location on soil. Strength, cover and development requirements can demand greater thickness.</p>",
                    sources: [
                        { id: "DESI787-00173", set: 19, question: 31 },
                        { id: "DESI787-00174", set: 19, question: 32 }
                    ]
                },
                {
                    id: "footing-minimum-reinforcement-in-each-direction",
                    title: "Footing minimum steel applies in each direction",
                    html: "<p>For an ordinary footing governed by <strong>IS 456:2000 §34.5.1</strong>, the slab minimum-reinforcement provision of §26.5.2.1 applies. With high-strength deformed reinforcement such as Fe415, the minimum is <strong>0.12% of the gross concrete cross-sectional area in each direction</strong>. It is not 0.12% shared between two directions, nor a percentage of the effective-depth area or of the plan area.</p>" +
                        "<p>For a strip width b and overall depth D, <strong>A<sub>s,min</sub> = 0.0012bD</strong>. <em>Illustrative strip:</em> b = 1000 mm and D = 400 mm give <strong>480 mm<sup>2</sup>/m in each direction</strong>. A 12 mm bar has area π × 12<sup>2</sup>/4 = 113.10 mm<sup>2</sup>; at 200 mm spacing it supplies approximately <strong>565.5 mm<sup>2</sup>/m</strong>. This checks only the illustrated minimum-area arithmetic, not the flexural demand or a complete reinforcement layout.</p>" +
                        "<p>Provide the reinforcement needed for the governing moment as well as the minimum. Bar spacing, cover, development into the column region and the footing ends, load transfer at the column interface, and any separate requirements for thick footings remain necessary. Whether top reinforcement is also required follows the actual moment envelope and detailing requirements, not the minimum percentage alone.</p>",
                    sources: [{ id: "DESI787-00045", set: 6, question: 29 }]
                },
                {
                    id: "rectangular-footing-central-band-distribution",
                    title: "Rectangular two-way footing: the central-band fraction",
                    html: "<p>For the rectangular two-way footing distribution in <strong>IS 456:2000 §34.3.1(c)</strong>, let L be the long plan dimension, B the short dimension and <strong>β = L/B</strong>. Bars running in the <strong>long direction</strong> are distributed uniformly across the full short width. For bars running in the <strong>short direction</strong>, concentrate the prescribed share in a central band of width B along L, centred on the column in the ordinary centred-footing case.</p>" +
                        "<p>The fraction of the <strong>total short-direction reinforcement</strong> placed uniformly within that band is <strong>A<sub>s,band</sub>/A<sub>s,short</sub> = 2/(β + 1)</strong>. The remaining short-direction reinforcement is distributed uniformly outside the band. Do not concentrate all the steel in the band or confuse the total short-direction area with the combined steel in both directions.</p>" +
                        "<p><strong>Bank ratio:</strong> β = 1.5 gives <strong>2/(1.5 + 1) = 0.8</strong>, not 0.6. <em>Illustrative allocation:</em> L = 3 m and B = 2 m leave a 2 m-wide central band and two 0.5 m outer regions. If the required total short-direction area is 2000 mm<sup>2</sup>, allocate <strong>1600 mm<sup>2</sup> within the band</strong> and <strong>400 mm<sup>2</sup> outside</strong>, or 200 mm<sup>2</sup> in each equal outer region. Actual bar choices must still satisfy local minimums, spacing and anchorage. When β = 1, the fraction becomes 1 because the band covers the whole square footing.</p>",
                    sources: [{ id: "DESI787-00177", set: 20, question: 26 }]
                },
                {
                    id: "strap-footing-load-transfer-and-iteration",
                    title: "Strap footings: transfer the eccentric action, then iterate",
                    html: "<p>A strap footing connects separate pads with a sufficiently stiff beam so that the system can balance an eccentric column action, often at a property boundary. Begin with column loads, pad-reaction locations and the system's force and moment equilibrium. The strap transfers bending and shear between the pads; it is not merely a nominal tie added after sizing two unrelated isolated footings.</p>" +
                        "<p>The usual simplified strap model assumes <strong>no significant soil reaction directly under the strap</strong>. That is a modelling and construction condition, not an automatic property of every beam between pads. If contact is allowed and materially contributes to support, include the distributed reaction and its compatibility with pad movement. Pad settlement and strap stiffness can change the force distribution.</p>" +
                        "<p><em>Illustrative moment contribution:</em> a 600 kN column force offset 0.3 m from its pad-reaction line contributes <strong>180 kN·m</strong> about that line. The complete pad-and-strap equilibrium determines how this is balanced; 180 kN·m is not, without that analysis, a finished strap design moment. Designers often revise trial pad sizes and strap stiffness after bearing, bending, shear and settlement checks. This explains the bank's iteration terminology, but <strong>trial and error is not a constitutive law or the only possible solution method</strong>.</p>",
                    sources: [{ id: "SOIL136-00418", set: 32, question: 40 }]
                },
                {
                    id: "undefined-pressure-factor-does-not-give-plan-shape",
                    title: "An undefined pressure factor cannot determine footing shape",
                    html: "<p>The assigned item supplies only <strong>q<sub>2</sub> = αq<sub>s</sub></strong> and asks for footing shape after setting the factor to zero. If q<sub>s</sub> is a finite pressure, direct substitution gives <strong>α = 0 implies q<sub>2</sub> = 0</strong>. It does not give a nonzero uniform pressure and contains no equation defining a rectangular plan. The stem also switches between a Latin a and Greek α without defining their roles.</p>" +
                        "<p>Pressure intensity and plan geometry are distinct quantities. Knowing one pressure value, even if it were identified as an edge pressure, does not establish the complete pressure field, contact area or base outline. <em>Illustrative substitution only:</em> q<sub>s</sub> = 150 kPa and α = 0 produce q<sub>2</sub> = 0 kPa; no plan dimensions follow from those two numbers.</p>" +
                        "<p>To recover a determinate problem one would need the definition of α, the meaning and location of q<sub>2</sub> and q<sub>s</sub>, the other boundary pressures or pressure law, load resultants and the relation between dimensions and contact pressure. Without that information, retain an explicit gap rather than inventing an alternative formula or choosing a footing outline from an unsupported explanation.</p>",
                    sources: [{ id: "SOIL136-00419", set: 32, question: 41 }]
                },
                {
                    id: "raft-strip-analysis-and-net-structural-loading",
                    title: "Rafts: strip approximations and the limits of self-weight cancellation",
                    html: "<p>A raft spreads several column or wall loads through a common reinforced-concrete foundation. Flat plates, local thickening, ribs and beam–slab arrangements are possible. Its free body still has <strong>upward soil contact and downward structural loads</strong>. Calling it a flat slab does not turn its loading into that of an ordinary suspended floor. Under an assumed linear full-contact model, centroidal resultant loading can justify a uniform pressure approximation, not prove the actual soil pressure is uniform.</p>" +
                        "<p>Dividing a raft into strips in both directions is an <strong>approximate structural analysis</strong> for obtaining shear-force and bending-moment diagrams. The strip widths, load allocation, continuity and effective stiffness must represent the two-way plate action without counting the same load twice. Foundation-to-soil relative stiffness, column arrangement and soil variability govern whether this simplification is reasonable. Plate or soil–structure interaction analysis may be needed to capture redistribution, differential settlement and local punching.</p>" +
                        "<p>There is a limited net-load simplification for a uniform raft under a compatible full-contact pressure idealization. If the uniform downward self-weight intensity is w<sub>r</sub> and its added soil-reaction component is the same uniform w<sub>r</sub>, then <strong>q<sub>gross</sub> = q<sub>columns</sub> + w<sub>r</sub></strong> and the distributed action for that structural calculation is <strong>q<sub>gross</sub> − w<sub>r</sub> = q<sub>columns</sub></strong>. Only these matching uniform components cancel.</p>" +
                        "<p>This structural netting is not automatically the geotechnical definition of net bearing pressure. <strong>Retain raft weight in gross bearing, dead-load, settlement and stability checks.</strong> Nonuniform thickness, contact loss, uplift or a different interaction model can prevent the assumed cancellation; the fact that subsoil carries the weight is not a general permission to omit it from design.</p>",
                    sources: [
                        { id: "SOIL136-00429", set: 33, question: 34 },
                        { id: "SOIL136-00430", set: 33, question: 35 },
                        { id: "SOIL136-00433", set: 33, question: 38 },
                        { id: "SOIL136-00434", set: 33, question: 39 }
                    ]
                },
                {
                    id: "prestressing-process-and-material-quality",
                    title: "Prestressing: introduce force before service loading",
                    html: "<p>Prestressing deliberately introduces a tendon force and balancing actions into concrete before the intended service loading. The initial compression and eccentric prestress moment can offset later tensile stresses and improve crack control. Unlike passive reinforcement, which develops additional stress as the member deforms under load, a prestressing tendon is intentionally stressed during construction. Prestressed members can also contain ordinary reinforcement for local, shear and crack-control duties.</p>" +
                        "<table><thead><tr><th scope='col'>Process</th><th scope='col'>Sequence and initial force transfer</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Pre-tensioning</th><td>Stress tendons against an external bed before casting. After the concrete reaches the required actual strength, release the tendons; bond transfers force into the concrete over a transmission length.</td></tr>" +
                        "<tr><th scope='row'>Post-tensioning</th><td>Cast and cure the member, then jack the tendons against it. End anchorages transfer the force. Grouting a bonded duct subsequently provides bond and protection; unbonded systems retain a different bond condition.</td></tr></tbody></table>" +
                        "<p>High-strength steel permits useful prestress to remain after losses. Suitable concrete strength and quality are needed for compression, pre-tensioning bond transfer, and concentrated post-tensioning anchorage bearing. Anchorage zones also need checks for bursting and splitting, not simply a high concrete grade. Aggregate, mix, curing, age, creep and shrinkage matter; a higher nominal grade alone does not guarantee a particular loss or eliminate end-zone reinforcement.</p>",
                    sources: [
                        { id: "DESI787-00270", set: 29, question: 29 },
                        { id: "DESI787-00180", set: 20, question: 29 }
                    ]
                },
                {
                    id: "prestress-concrete-grade-versus-transfer-strength",
                    title: "Prestressed concrete: nominal grade is not transfer strength",
                    html: "<p><strong>IS 1343:2012 §6.1/Table 1 Note 2 and Table 4</strong> give baseline concrete grades of <strong>M40 for pre-tensioned work</strong> and <strong>M30 for post-tensioned work</strong>; exposure can require a higher grade. These denote <strong>characteristic 150 mm cube strengths at 28 days</strong>, 40 and 30 MPa respectively. They are not universal minimum measured strengths at the instant of transfer.</p>" +
                        "<p>Let <strong>f<sub>ci</sub></strong> denote the actual concrete strength relevant to the transfer stage, distinct from specified 28-day f<sub>ck</sub>. The transfer and testing requirements in §13.2.1.1(c), §16.2 and §24.3.2.1 must be satisfied with the actual prestress, concrete age and stress state. Check the member's transfer stresses, bond/transmission or anchorage action and applicable local requirements. A nominal M40 label does not establish the concrete's strength today. A strength condition attached to a particular transmission-length table is not a universal transfer threshold.</p>" +
                        "<p><strong>Historical-unit check:</strong> interpreting the bank's 250 kg/cm<sup>2</sup> as 250 kgf/cm<sup>2</sup>, use 1 kgf = 9.80665 N and 1 cm<sup>2</sup> = 100 mm<sup>2</sup>. Thus <strong>250 × 9.80665/100 = 24.516625 MPa</strong>. This unqualified older bank value is not the 2012 minimum grade for either method and must not be promoted to a current transfer criterion. The inspected 2012 copy's reaffirmation marking and the identified July 2019 Amendment 1 do not certify the latest amendment position or Nepal's legal requirements.</p>",
                    sources: [
                        { id: "DESI787-00041", set: 6, question: 25 },
                        { id: "DESI787-00178", set: 20, question: 27 }
                    ]
                },
                {
                    id: "prestress-losses-by-stage-not-concrete-strength",
                    title: "Prestress losses: track force and chronology, not a reduced concrete grade",
                    html: "<p>A loss of prestress reduces <strong>tendon force and the compression applied to the concrete</strong>. It does not, by definition, reduce the concrete's characteristic compressive strength f<sub>ck</sub>. Reduced precompression can change cracking resistance, deflection and shear behaviour, but these member responses must not be confused with a change in the material's specified grade.</p>" +
                        "<table><thead><tr><th scope='col'>Stage or mechanism</th><th scope='col'>What to account for</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Pre-tensioning release</th><td>Concrete elastic shortening reduces tendon extension as force is transferred by bond; account separately for any earlier bed-stage loss.</td></tr>" +
                        "<tr><th scope='row'>Post-tensioning operations</th><td>Duct friction acts during stressing and anchorage seating during lock-off. Later tendon stressing can shorten concrete and reduce force in tendons already anchored.</td></tr>" +
                        "<tr><th scope='row'>Time-dependent effects in both methods</th><td>Concrete creep and shrinkage, and prestressing-steel relaxation, depend on time, stress history and material behaviour.</td></tr></tbody></table>" +
                        "<p>At a specified section and stage, write <strong>P<sub>eff</sub> = P<sub>0</sub> − ΣΔP</strong>, defining the baseline P<sub>0</sub> before selecting losses. A jacking force is not automatically the force everywhere along a frictional tendon. Do not deduct lock-off or elastic-shortening losses again if they are already included in a measured or calculated transfer force. Real loss components can interact, so maintain a consistent staged calculation rather than mixing percentages with different baselines.</p>" +
                        "<p><em>Illustrative remaining-loss calculation:</em> suppose P<sub>0</sub> = 1000 kN is already the force just after transfer at the section of interest. If the subsequently evaluated creep, shrinkage and relaxation force losses are 60, 40 and 50 kN on a consistent basis, then <strong>P<sub>eff</sub> = 850 kN</strong>. The 15% total is only this example's arithmetic; it is not a universal loss allowance, and immediate losses already included in P<sub>0</sub> are not subtracted again.</p>",
                    sources: [{ id: "DESI787-00039", set: 5, question: 33 }]
                },
                {
                    id: "prestressed-section-stresses-with-explicit-signs",
                    title: "Prestressed-section stresses with explicit top and bottom signs",
                    html: "<p>For a simple uncracked elastic section calculation, take <strong>concrete compression as positive</strong>, tendon eccentricity e as positive <strong>below</strong> the concrete centroid, and external moment M as positive sagging, compressing the top and tending to tension the bottom. Use the prestressing force P appropriate to the section and load stage. With downward-positive fibre coordinate y, <strong>σ<sub>c</sub>(y) = P/A + (Pe − M)y/I</strong>. A, I and fibre distances must refer to the same adopted section model.</p>" +
                        "<p>With positive distances c<sub>t</sub> and c<sub>b</sub> to the top and bottom, define Z<sub>t</sub> = I/c<sub>t</sub> and Z<sub>b</sub> = I/c<sub>b</sub>. Then <strong>σ<sub>top</sub> = P/A − Pe/Z<sub>t</sub> + M/Z<sub>t</sub></strong>, and <strong>σ<sub>bottom</sub> = P/A + Pe/Z<sub>b</sub> − M/Z<sub>b</sub></strong>. Add all relevant external actions with their signs. Self-weight is an external load already present in many transfer situations; service live load and later losses belong to their proper stages.</p>" +
                        "<p><em>Illustrative trial stresses:</em> a 300 × 600 mm rectangle has A = 180000 mm<sup>2</sup>, I = 5.4 × 10<sup>9</sup> mm<sup>4</sup> and equal Z = 18 × 10<sup>6</sup> mm<sup>3</sup>. For P = 900 kN, e = 150 mm and M = 45 kN·m, the three stress magnitudes are P/A = 5 MPa, Pe/Z = 7.5 MPa and M/Z = 2.5 MPa. Hence <strong>σ<sub>top</sub> = 0 MPa</strong> and <strong>σ<sub>bottom</sub> = 10 MPa compression</strong>.</p>" +
                        "<p>In the mathematical prestress-only comparison M = 0, the same inputs instead predict <strong>top stress −2.5 MPa, meaning tension</strong>, while the bottom is compressed. This comparison does not permit omitting actual self-weight. Larger sagging moments can also make the soffit tensile. Check both faces against the applicable transfer/service limits and reassess the section model if cracking occurs; neither camber nor the word prestressed guarantees compression throughout the section.</p>",
                    sources: [
                        { id: "DESI787-00181", set: 20, question: 30 },
                        { id: "DESI787-00182", set: 20, question: 31 }
                    ]
                },
                {
                    id: "tendon-profile-curvature-and-camber",
                    title: "Tendon profile, load balancing and camber",
                    html: "<p>Tendon eccentricity varies along a member and produces a prestress moment opposing or adding to the external moment. For the simple sign convention above, the net sagging bending action is <strong>M<sub>external</sub>(x) − Pe(x)</strong>. Its distribution, section stiffness EI and support conditions determine curvature and deflection. Cable profile is therefore a direct design variable, but aggregate-related modulus, concrete age, creep, shrinkage and prestress loss also influence deflection.</p>" +
                        "<p>Let x run along the span and let the tendon ordinate <strong>y(x) be positive downward</strong> from the centroidal line. For small slopes and approximately constant tendon force P, the tendon force on the concrete per unit length, also downward-positive, is <strong>q<sub>t</sub>(x) = P d<sup>2</sup>y/dx<sup>2</sup></strong>. Thus negative q<sub>t</sub> means an upward equivalent load. End forces and anchorage eccentricities must accompany the distributed equivalent load for overall equilibrium.</p>" +
                        "<p>For the illustrative parabola <strong>y(x) = 4e<sub>mid</sub>x(L − x)/L<sup>2</sup></strong>, with zero end eccentricity and downward midspan eccentricity e<sub>mid</sub>, y'' = −8e<sub>mid</sub>/L<sup>2</sup>. The upward balancing-load magnitude is consequently <strong>w<sub>bal</sub> = 8Pe<sub>mid</sub>/L<sup>2</sup></strong>. With P = 900 kN, e<sub>mid</sub> = 0.15 m and L = 6 m, this gives <strong>30 kN/m upward</strong>.</p>" +
                        "<p>Matching a downward load by this upward equivalent action can cancel its bending in the stated idealization; it does not remove axial precompression or every other load-stage requirement. A changed profile, friction-varying P, continuity or losses changes the balance. Upward camber and downward service deflection must be assessed together, rather than concluding that the whole concrete section is always compressed or that cable shape alone fixes the final deflection.</p>",
                    sources: [{ id: "DESI787-00179", set: 20, question: 28 }]
                }
            ],
            gaps: [
                "The 46 assigned questions cover elementary columns, footing behaviour and prestressing concepts. They do not supply a complete column-frame analysis, axial–biaxial-moment interaction problem or slender-column second-order calculation. The numerical extensions here are labelled illustrations, not construction dimensions or a seismic detailing schedule.",
                "No site investigation, settlement criterion, groundwater case or complete footing load combination is supplied. Actual gross/net bearing definitions, soil–structure interaction, reinforcement development, column-to-footing force transfer, uplift and pile-cap action need project-specific data and checks beyond the worked demands shown here.",
                "The pressure-factor item does not define alpha, its geometry or the complete pressure field. Substitution into q2 = alpha times qs establishes only q2 = 0 at alpha = 0; the missing definitions prevent a defensible identification of footing plan shape.",
                "The bank supplies no tendon stressing records, actual transfer-strength tests, full loss history or complete prestressed-section design. Grade selection, transfer, anchorage/transmission, cracking and long-term deflection must be checked separately; the force-loss and fibre-stress examples do not certify a member.",
                "The code anchors are IS 456:2000 with the relevant amendments in the inspected archive, including Amendment 1 for footing shear location, and IS 1343:2012 with the identified July 2019 Amendment 1. Later amendment/status history and the applicable Nepal NS/NBC legal requirements were not established by these sources. No latest-code or Nepal approval claim is made."
            ],
            cautions: [
                {
                    html: "<p><strong>Wrong classification under the stated restrained interpretation:</strong> 400 × 500 mm is rectangular. With both ends held against translation and restrained against rotation in both planes, K = 0.65 gives effective length 3250 mm and ratios <strong>8.125 and 6.5</strong>, both below 12. The short-column conclusion contradicts the stored long-column key. End rotation restraint alone is not enough to establish this no-sway effective-length case.</p>",
                    sources: [{ id: "DESI787-00078", set: 10, question: 25 }]
                },
                {
                    html: "<p><strong>No extra blanket 10% reduction:</strong> §39.3's expression <strong>0.4f<sub>ck</sub>A<sub>c</sub> + 0.67f<sub>y</sub>A<sub>sc</sub></strong> already incorporates its nominal-eccentricity allowance; the cited clause does not prescribe another multiplication by 0.9. Moreover, the 400 mm/5 m column has e<sub>min</sub> = <strong>23.333… mm &gt; 20 mm = 0.05D</strong>, so the shortcut fails its eccentricity condition. Shortness alone cannot authorize it, nor can the shortcut discard actual bending moments.</p>",
                    sources: [
                        { id: "DESI787-00079", set: 10, question: 26 },
                        { id: "DESI787-00080", set: 10, question: 27 }
                    ]
                },
                {
                    html: "<p><strong>Minimum steel is not a closest-option exercise:</strong> 0.8% of 400 × 400 mm is <strong>1280 mm<sup>2</sup></strong>. The stored 1200 mm<sup>2</sup> is below this ordinary minimum, and none of the offered options equals the calculated requirement. A justified oversized-section exception is a different calculation, not permission to round the minimum downward.</p>",
                    sources: [{ id: "DESI787-00165", set: 18, question: 34 }]
                },
                {
                    html: "<p><strong>Inverted maximum-area wording:</strong> the stem combines maximum reinforcement with shall not be less than. The ordinary 6% calculation gives <strong>9600 mm<sup>2</sup> as an upper limit</strong>, so the governing direction is shall not exceed, not a minimum of 9600. Congestion and lap detailing can demand a lower practical percentage.</p>",
                    sources: [{ id: "DESI787-00166", set: 19, question: 25 }]
                },
                {
                    html: "<p><strong>Spacing context and clause are wrong in the explanation:</strong> the 300 mm column rule belongs to <strong>§26.5.3.1(g), measured along the column periphery</strong>. It is not a general 300 mm maximum between any two parallel main bars under §26.3.2. Clear spacing for placement, member-specific maximum spacing and the number of column bars are separate checks.</p>",
                    sources: [{ id: "DESI787-00111", set: 13, question: 28 }]
                },
                {
                    html: "<p><strong>Circular columns are not generally prohibited:</strong> connecting and anchoring beams at a curved face can complicate a particular joint, but circular columns are routinely used in appropriate structures. Neither low capacity nor uneconomy follows from the outline alone. The stem's generalization should be read as a possible detailing disadvantage, not a universal restriction.</p>",
                    sources: [{ id: "DESI787-00038", set: 5, question: 32 }]
                },
                {
                    html: "<p><strong>The helical factor needs qualification:</strong> <strong>1.05</strong> is the specified comparison only for a helix satisfying the required volume ratio and associated spacing, diameter, anchorage and longitudinal-bar details. The explanation mentions the volume requirement, but a memorized 5% increase must not be assigned to every circular or spirally tied column without those checks.</p>",
                    sources: [{ id: "DESI787-00044", set: 6, question: 28 }]
                },
                {
                    html: "<p><strong>The footing-area explanation changes assumptions:</strong> <strong>330/150 = 2.20 m<sup>2</sup></strong> and <strong>363/150 = 2.42 m<sup>2</sup></strong> use different loads. The former requires the compatible 330 kN basis or explicit preliminary neglect of extra weight; the latter illustrates adding an assumed 10% once to an otherwise excluded weight allowance. Ten percent is not mandatory, and self-weight must not be counted twice or paired with an incompatible gross/net bearing value.</p>",
                    sources: [{ id: "DESI787-00176", set: 20, question: 25 }]
                },
                {
                    html: "<p><strong>Coincident resultants do not prove uniform contact:</strong> collinearity of the applied and soil-reaction resultants is required by equilibrium for nonuniform pressure too. Uniformity is an additional idealization, obtained in the linear full-contact model when the applied resultant passes through the <strong>area centroid</strong>. The raft item includes that centroid condition, but still assumes a pressure model; homogeneous soil alone does not make actual contact pressure uniform.</p>",
                    sources: [
                        { id: "DESI787-00171", set: 19, question: 29 },
                        { id: "SOIL136-00415", set: 32, question: 37 },
                        { id: "SOIL136-00433", set: 33, question: 38 },
                        { id: "SOIL136-00417", set: 32, question: 39 }
                    ]
                },
                {
                    html: "<p><strong>Unequal loads do not uniquely select a trapezoid:</strong> varying width can align area centroid and load resultant, but a suitably positioned rectangular footing or a strap system can also serve unequal column loads. The first item's strap option is not inherently impossible. State the boundary and geometry assumptions instead of converting a common choice into a universal rule.</p>",
                    sources: [
                        { id: "DESI787-00035", set: 5, question: 29 },
                        { id: "DESI787-00172", set: 19, question: 30 }
                    ]
                },
                {
                    html: "<p><strong>Footing design is not one selected quantity:</strong> near-identical stems separately key pressure distribution and the centre of gravity of column loads. Locating the <strong>load-system resultant</strong> and establishing contact pressure are successive steps, not competing complete designs. The maximum-moment items identify an important flexural demand, but shear, punching, anchorage, bearing and settlement remain necessary. Do not confuse the resultant of unequal loads with an unweighted geometric average of column locations.</p>",
                    sources: [
                        { id: "DESI787-00170", set: 19, question: 28 },
                        { id: "SOIL136-00411", set: 31, question: 45 },
                        { id: "DESI787-00169", set: 19, question: 27 },
                        { id: "SOIL136-00416", set: 32, question: 38 }
                    ]
                },
                {
                    html: "<p><strong>The combined-footing explanation reverses the load picture:</strong> a footing has upward soil reaction and downward columns, unlike a gravity-loaded floor slab. Both top and bottom steel may be needed, but the claimed universal negative-at-columns/positive-at-midspan pattern cannot be copied from a suspended slab. In the stated 6 m illustrative strip, moments are <strong>+100 kN·m at the column lines and −300 kN·m centrally</strong>. The actual signed moment envelope determines the tension faces.</p>",
                    sources: [{ id: "DESI787-00175", set: 19, question: 33 }]
                },
                {
                    html: "<p><strong>Edge-thickness qualifiers matter:</strong> the 150 mm figure applies to a footing on soil under §34.1.2. For a footing on piles, the minimum is <strong>300 mm above the tops of the piles</strong>, not an unconditional total thickness of 300 mm. Neither minimum replaces bending, one-way shear, punching, cover or anchorage checks.</p>",
                    sources: [{ id: "DESI787-00174", set: 19, question: 32 }]
                },
                {
                    html: "<p><strong>Central-band arithmetic contradicts the key:</strong> <strong>2/(1.5 + 1) = 0.8</strong>. The stored 0.6 is not the fraction given by §34.3.1(c), and no offered value matches 0.8. The remaining 20% of short-direction steel is distributed outside the central band; long-direction reinforcement is distributed uniformly. An absent correct option does not authorize changing the formula.</p>",
                    sources: [{ id: "DESI787-00177", set: 20, question: 26 }]
                },
                {
                    html: "<p><strong>Undefined alpha and unsupported shape:</strong> the supplied equation q<sub>2</sub> = αq<sub>s</sub> gives <strong>q<sub>2</sub> = 0 at α = 0</strong> for finite q<sub>s</sub>. It does not yield a nonzero uniform pressure or prove a rectangular footing. The factor and its relationship to the plan are missing, so neither the keyed shape nor the speculative explanation can be derived from the supplied information.</p>",
                    sources: [{ id: "SOIL136-00419", set: 32, question: 41 }]
                },
                {
                    html: "<p><strong>Raft simplifications have limits:</strong> self-weight cancels out of a net structural bending calculation only to the extent that its downward distribution is matched by the corresponding upward pressure component in a compatible model. It remains in gross bearing and dead-load checks. Strip subdivision approximates two-way behaviour and needs compatible load sharing and foundation–soil stiffness assumptions; it generates <strong>shear-force</strong> diagrams, not a diagram that by itself establishes shear failure.</p>",
                    sources: [
                        { id: "SOIL136-00430", set: 33, question: 35 },
                        { id: "SOIL136-00434", set: 33, question: 39 }
                    ]
                },
                {
                    html: "<p><strong>Strap iteration is a workflow, not a law:</strong> trial sizing followed by equilibrium, bearing, strength and settlement checks is common, but direct equilibrium relations and numerical analysis are also possible. No soil support under the strap is an explicit idealization to be detailed or modelled appropriately, not an automatic consequence of naming the system a strap footing.</p>",
                    sources: [{ id: "SOIL136-00418", set: 32, question: 40 }]
                },
                {
                    html: "<p><strong>Prestress grade and transfer strength are conflated:</strong> IS 1343:2012's <strong>M40 pre-tensioned/M30 post-tensioned</strong> baseline refers to characteristic cube strength at <strong>28 days</strong>, not a universal transfer-strength pair. Transfer needs its own actual-strength and stress checks. The other item's <strong>250 kgf/cm<sup>2</sup> = 24.516625 MPa</strong> is an unqualified older bank value, not the 2012 baseline for either process. No universal 35 MPa transfer rule follows from these items.</p>",
                    sources: [
                        { id: "DESI787-00041", set: 6, question: 25 },
                        { id: "DESI787-00178", set: 20, question: 27 }
                    ]
                },
                {
                    html: "<p><strong>Prestress loss reduces applied stress, not inherently concrete strength:</strong> the keyed decrease in compressive strength mislabels a reduction in prestressing force and concrete precompression. Use P<sub>eff</sub> = P<sub>0</sub> − losses on a defined staged basis, not a reduced f<sub>ck</sub>. Cracking or shear resistance can change as a consequence of the altered stress state, but those are separate member checks.</p>",
                    sources: [{ id: "DESI787-00039", set: 5, question: 33 }]
                },
                {
                    html: "<p><strong>Soffit compression and camber are conditional:</strong> the sign at each fibre depends on P, tendon eccentricity, external moments and load stage. A low tendon can compress the soffit while its eccentric moment produces top tension; later sagging load can also tension the bottom. The example's prestress-only trial top stress of <strong>−2.5 MPa</strong> disproves the explanation's claim that the entire section must initially be compressed. Include the actual transfer-stage self-weight and check both faces.</p>",
                    sources: [{ id: "DESI787-00182", set: 20, question: 31 }]
                }
            ],
            references: [
                {
                    title: "IS 456:2000 — Plain and Reinforced Concrete, Fourth Revision; archived scan with appended amendments",
                    url: "https://archive.org/details/gov.in.is.456.2000"
                },
                {
                    title: "IS 1343:2012 — Prestressed Concrete, Second Revision; inspected copy marked reaffirmed 2022",
                    url: "https://archive.org/stream/gov.in.is.1343.2012/IS1343%3A2012_djvu.txt"
                },
                {
                    title: "IS 1343:2012 — Amendment 1, July 2019",
                    url: "https://archive.org/stream/gov.in.is.1343.2012/zIS1343Amd.1%3A2019_djvu.txt"
                }
            ]
        }
    });
})();