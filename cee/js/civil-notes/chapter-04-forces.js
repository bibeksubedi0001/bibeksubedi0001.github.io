(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0401: {
            code: "ACiE0401",
            questionCount: 57,
            blocks: [
                {
                    id: "section-forces-and-cut-conventions",
                    title: "Section forces and a consistent sign convention",
                    html: "<p>A beam carries external loads through internal <strong>axial force N</strong>, <strong>shear force V</strong> and <strong>bending moment M</strong>. Cut the member at a section and replace the removed part by these resultants. For the straight horizontal beams here, x increases from the left end A towards B. Unless stated otherwise, use static loading, small deflections and rotations, equilibrium on the undeformed geometry, and unchanged ideal supports.</p>" +
                        "<table><thead><tr><th scope='col'>Positive resultant</th><th scope='col'>Action on the exposed cut of the left-hand portion</th><th scope='col'>Typical units</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>N: tension</th><td>Acts rightwards, away from the retained material.</td><td>N or kN</td></tr>" +
                        "<tr><th scope='row'>V: shear</th><td>Acts downwards on that cut.</td><td>N or kN</td></tr>" +
                        "<tr><th scope='row'>M: sagging</th><td>Acts counterclockwise on that cut.</td><td>N m or kN m</td></tr></tbody></table>" +
                        "<p>The actions on the right-hand portion are opposite. Apply <strong>ΣF<sub>x</sub> = 0, ΣF<sub>y</sub> = 0 and ΣM<sub>cut</sub> = 0</strong> to either portion; changing the retained side must not change the reported section resultants. With this convention, V equals the algebraic sum of transverse external forces on the left portion, taking upward as positive. A force diagram varies the <em>section position</em> while the load arrangement stays fixed. An influence line instead holds a response location fixed and moves a load; it is not the same diagram.</p>",
                    sources: [{ id: "STRU935-00107", set: 11, question: 20 }]
                },
                {
                    id: "sagging-hogging-and-curvature",
                    title: "Sagging, hogging and the shape of the beam",
                    html: "<p><strong>Positive sagging bends a horizontal beam concave upward</strong>, also described as <em>convex downward</em>. These descriptions are compatible, not opposing sign conventions. The bending contribution compresses the upper fibres and stretches the lower fibres. Negative hogging reverses this pattern. A simultaneous axial force can change the total fibre stress, so these statements describe the bending contribution rather than every possible combined stress state.</p>" +
                        "<p>For elementary linear-elastic bending, <strong>κ = M/(EI)</strong>, where κ is signed curvature in m<sup>−1</sup>, E is Young's modulus in kN/m<sup>2</sup> and I is the second moment of area in m<sup>4</sup>. Taking deflection y positive upward and small rotations, κ ≈ d<sup>2</sup>y/dx<sup>2</sup>. A beam can therefore have negative downward displacement and positive sagging curvature at the same section.</p>" +
                        "<p>Do not confuse the <strong>elastic curve</strong> with the graph of M against x. A simply supported beam under downward UDL has a downward-opening parabolic moment graph but sagging, concave-up beam curvature. Sagging is not defined by the word midspan: its position follows the actual loading and restraints. The two bank descriptions of positive curvature are both correct.</p>",
                    sources: [
                        { id: "STRU935-00013", set: 3, question: 15 },
                        { id: "STRU935-00215", set: 1, question: 21 },
                        { id: "STRU935-00326", set: 30, question: 23 }
                    ]
                },
                {
                    id: "load-models-resultants-and-supports",
                    title: "Loads, resultants and support conditions",
                    html: "<p>A point force P is measured in kN; distributed intensity w is measured in kN/m; a concentrated couple C is measured in kN m and needs a clockwise or counterclockwise direction. Resolve an inclined force into components along and normal to the member before constructing its diagrams. A resultant can replace a distributed load when calculating whole-beam reactions, but a cut inside the loaded length must retain only the load acting on the chosen portion.</p>" +
                        "<table><thead><tr><th scope='col'>Load over length ℓ</th><th scope='col'>Resultant</th><th scope='col'>Position</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Uniform intensity w</th><td>wℓ</td><td>At the middle of the loaded length.</td></tr>" +
                        "<tr><th scope='row'>Triangular intensity, peak w<sub>0</sub></th><td>w<sub>0</sub>ℓ/2</td><td>ℓ/3 from the more heavily loaded end.</td></tr>" +
                        "<tr><th scope='row'>Concentrated couple C</th><td>No net force</td><td>Keep its location and rotational sense for the moment diagram.</td></tr></tbody></table>" +
                        "<p>Self-weight is <strong>w = γA</strong>, with material unit weight γ and section area A. It is a UDL only when γA is constant. For an illustrative 0.25 m by 0.40 m prismatic beam with γ = 24 kN/m<sup>3</sup>, w = <strong>2.4 kN/m</strong>; tapering the section generally changes this distribution.</p>" +
                        "<p>A pin supplies force reactions but no resisting couple; a frictionless roller supplies a reaction normal to its supporting surface; a fixed end can also supply a couple. An end pin or roller has M = 0 just inside the beam <em>only when no external end couple is applied</em>. A negative reaction requires a support capable of holding the beam down; an unanchored bearing may lift, invalidating the assumed model.</p>",
                    sources: [{ id: "STRU935-00331", set: 31, question: 18 }]
                },
                {
                    id: "load-shear-moment-relations-and-jumps",
                    title: "Differential relations, signed areas and jumps",
                    html: "<p>Take distributed transverse load <strong>w(x) positive downward</strong> and retain the cut convention already defined. On an interval without a concentrated force or couple, equilibrium gives <strong>dV/dx = −w</strong> and <strong>dM/dx = V</strong>. Consequently d<sup>2</sup>M/dx<sup>2</sup> = −w. Shear is the rate of change of moment, not the rate of change of shear; load intensity is not the rate of change of loading.</p>" +
                        "<p>The signed area rules are <strong>V(b) − V(a) = −∫<sub>a</sub><sup>b</sup> w(x) dx</strong> and <strong>M(b) − M(a) = ∫<sub>a</sub><sup>b</sup> V(x) dx</strong> on such intervals. The first area has units kN and the second kN m. For example, a shear ordinate decreasing linearly from +3 to −1 kN over 2 m gives a moment increase of <strong>(3 − 1) × 2/2 = 2 kN m</strong>, not the unsigned area of both triangles.</p>" +
                        "<ul><li>A downward point load P at x = a gives <strong>V(a+) − V(a−) = −P</strong>. Moment is continuous there unless a couple also acts.</li>" +
                        "<li>An upward reaction R gives a shear jump +R.</li>" +
                        "<li>A clockwise concentrated couple C gives <strong>M(a+) − M(a−) = +C</strong> with this convention. It produces no shear jump by itself.</li></ul>" +
                        "<p>The symbols a− and a+ mean immediately to the left and right. Integrate between events, then add the appropriate jumps. A vertical step in the BMD is a finite idealized moment discontinuity, not a segment with ordinary finite shear equal to its apparent graphical slope.</p>",
                    sources: [
                        { id: "STRU935-00006", set: 2, question: 19 },
                        { id: "STRU935-00012", set: 3, question: 14 },
                        { id: "STRU935-00333", set: 31, question: 19 },
                        { id: "STRU935-00339", set: 1, question: 26 },
                        { id: "STRU935-00346", set: 32, question: 20 }
                    ]
                },
                {
                    id: "recognising-diagram-shapes",
                    title: "Read diagram shape from the load on each interval",
                    html: "<p>Divide the beam at point forces, applied couples, supports and changes in distributed loading. Integrating the intensity once determines the shear's polynomial degree; integrating again determines the moment's degree. Reactions and end conditions supply the constants of integration. These shape rules apply to each open interval, not automatically to the complete diagram across its jumps.</p>" +
                        "<table><thead><tr><th scope='col'>Loading within the interval</th><th scope='col'>Shear V</th><th scope='col'>Moment M</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>No distributed transverse load</th><td>Constant</td><td>Linear; horizontal if V = 0.</td></tr>" +
                        "<tr><th scope='row'>Nonzero UDL</th><td>Inclined straight line</td><td>Quadratic parabola</td></tr>" +
                        "<tr><th scope='row'>Uniformly varying load, UVL</th><td>Quadratic curve</td><td>Cubic curve</td></tr>" +
                        "<tr><th scope='row'>A point force at an interval boundary</th><td>Vertical jump</td><td>Continuous, with a change of slope.</td></tr>" +
                        "<tr><th scope='row'>A couple at an interval boundary</th><td>No jump from the couple alone</td><td>Vertical jump</td></tr></tbody></table>" +
                        "<p>For a linearly increasing intensity w = kx, k has units kN/m<sup>2</sup>; integrating produces a quadratic term in V and a cubic term in M. The bank's expression cubic parabola denotes this cubic moment curve, not an ordinary quadratic parabola. A constant or zero moment graph is a special straight line. An entirely unloaded beam with no imposed support movement can have zero resultants throughout; unloaded does not demand a nonzero sloping BMD.</p>",
                    sources: [
                        { id: "STRU935-00318", set: 30, question: 15 },
                        { id: "STRU935-00319", set: 30, question: 16 },
                        { id: "STRU935-00334", set: 31, question: 20 },
                        { id: "STRU935-00338", set: 31, question: 24 },
                        { id: "STRU935-00347", set: 32, question: 21 }
                    ]
                },
                {
                    id: "simple-beam-point-load",
                    title: "Simply supported beam with one point load",
                    html: "<p>Consider a span L with a single downward force P at distance a from A and b = L − a from B, with 0 &lt; a &lt; L. There are no other loads or end couples. Whole-beam equilibrium gives <strong>R<sub>A</sub> = Pb/L</strong> and <strong>R<sub>B</sub> = Pa/L</strong>. Shear is +R<sub>A</sub> before the load and −R<sub>B</sub> after it; both reactions are upward.</p>" +
                        "<p>For 0 ≤ x ≤ a, <strong>M(x) = R<sub>A</sub>x</strong>; for a ≤ x ≤ L, <strong>M(x) = R<sub>B</sub>(L − x)</strong>. The two straight branches meet continuously beneath the load, where <strong>M<sub>max</sub> = Pab/L</strong>. The shear jumps from positive to negative there, so the peak exists even though no continuous shear ordinate passes through zero.</p>" +
                        "<p><strong>Worked example:</strong> a 12 kN load 2 m from A on a 6 m span gives b = 4 m, R<sub>A</sub> = 8 kN and R<sub>B</sub> = 4 kN. The moment under the load is <strong>8 × 2 = 16 kN m</strong>. Moving that single load to the centre makes the BMD a symmetric triangle and gives PL/4. Zero end moments and a maximum at the load follow from this particular support and loading model, not from the word beam alone.</p>",
                    sources: [
                        { id: "STRU935-00039", set: 5, question: 19 },
                        { id: "STRU935-00336", set: 31, question: 22 },
                        { id: "STRU935-00340", set: 32, question: 14 }
                    ]
                },
                {
                    id: "simple-beam-full-span-udl",
                    title: "Simply supported beam under full-span UDL",
                    html: "<p>For a downward UDL w over the whole simple span L, with no other loads or applied couples, symmetry gives <strong>R<sub>A</sub> = R<sub>B</sub> = wL/2</strong>. At a distance x from A, the retained distributed load is wx and its lever arm about the cut is x/2. Therefore <strong>V(x) = wL/2 − wx</strong> and <strong>M(x) = wLx/2 − wx<sup>2</sup>/2</strong>.</p>" +
                        "<p>The SFD falls linearly from +wL/2 just inside A to −wL/2 just inside B. At x = L/2 the shear changes from positive to negative, giving <strong>M<sub>max</sub> = wL<sup>2</sup>/8</strong>. The BMD is parabolic, with zero at the simple ends and positive sagging values inside. The magnitude of shear is greatest next to both supports, but the two signed end ordinates are opposite, not equal.</p>" +
                        "<p><strong>Worked bank geometry:</strong> L = 8 m and w = 1 kN/m give each reaction 4 kN. With x expressed in metres, M(x) = 4x − x<sup>2</sup>/2 in kN m. At x = 2 m this is <strong>6 kN m</strong>; at the central x = 4 m it reaches <strong>8 kN m</strong>. The inward shear limits at the supports are nonzero; combining the reaction with the outside zero diagram creates the support jumps.</p>",
                    sources: [
                        { id: "STRU935-00014", set: 3, question: 16 },
                        { id: "STRU935-00090", set: 10, question: 15 },
                        { id: "STRU935-00092", set: 10, question: 16 }
                    ]
                },
                {
                    id: "two-point-loading-and-pure-bending",
                    title: "Symmetric two-point loading and the moment plateau",
                    html: "<p>Place two equal downward loads P at x = a and x = L − a on a simple span, where 0 &lt; a &lt; L/2. With no other loading, each reaction is P. The shear is <strong>+P, then 0, then −P</strong> through the three successive regions. Moment rises as Px, stays at <strong>Pa throughout the region between the loads</strong>, then falls as P(L − x).</p>" +
                        "<p>The maximum is a <strong>plateau</strong>: it occurs under both loads, at every section between them and at midspan. With zero axial force this constant nonzero moment and zero shear define a region of pure bending. At third-point loading, a = L/3, the plateau value is PL/3 and the shear at x = L/6 is P. A constant moment over any open interval has zero shear there because dM/dx = 0.</p>" +
                        "<p><strong>Worked flexure arrangement:</strong> two 6 kN loads at x = 1 m and 2 m on a 3 m span produce 6 kN reactions and <strong>6 kN m</strong> throughout the middle metre. This assumes the loads are <em>inside</em> the supports. If the loads act literally directly over the two simple end supports instead, each is balanced locally by its reaction; neglecting self-weight and other loads, <strong>N = V = M = 0</strong> in the open span. The two physical arrangements must not be interchanged.</p>",
                    sources: [
                        { id: "BASI674-00005", set: 2, question: 5 },
                        { id: "STRU935-00009", set: 2, question: 22 },
                        { id: "STRU935-00015", set: 3, question: 17 },
                        { id: "STRU935-00337", set: 31, question: 23 }
                    ]
                },
                {
                    id: "partial-udl-and-load-position",
                    title: "A partial UDL needs its position, not just its length",
                    html: "<p>Let a downward UDL w occupy x = a to x = a + ℓ within a simple span L. Its total force is <strong>W = wℓ</strong> at x = a + ℓ/2. Thus <strong>R<sub>B</sub> = W(a + ℓ/2)/L</strong> and R<sub>A</sub> = W − R<sub>B</sub>. Specifying L, w and ℓ without a does not specify the reactions or the peak moment.</p>" +
                        "<ul><li>Before the patch: V = R<sub>A</sub> and M = R<sub>A</sub>x.</li>" +
                        "<li>Inside the patch: <strong>V = R<sub>A</sub> − w(x − a)</strong> and <strong>M = R<sub>A</sub>x − w(x − a)<sup>2</sup>/2</strong>.</li>" +
                        "<li>After the patch: V = −R<sub>B</sub> and M = R<sub>A</sub>x − W(x − a − ℓ/2).</li></ul>" +
                        "<p>A smooth peak inside the loaded length is at <strong>x = a + R<sub>A</sub>/w</strong>; check that this lies inside the patch. For L = 8 m, w = 1 kN/m and ℓ = 4 m, the total load is 4 kN in both arrangements below, yet the moment maxima differ.</p>" +
                        "<table><thead><tr><th scope='col'>Patch position</th><th scope='col'>Reactions</th><th scope='col'>Peak moment</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>From A to x = 4 m</th><td>R<sub>A</sub> = 3 kN; R<sub>B</sub> = 1 kN</td><td>4.5 kN m at x = 3 m</td></tr>" +
                        "<tr><th scope='row'>Centred, x = 2 to 6 m</th><td>R<sub>A</sub> = R<sub>B</sub> = 2 kN</td><td>6 kN m at x = 4 m</td></tr></tbody></table>" +
                        "<p>The first result follows from 3 × 3 − 3<sup>2</sup>/2; the second from 2 × 4 − (4 − 2)<sup>2</sup>/2. A finite change of distributed intensity at a patch boundary changes the slope of V, not V itself, unless a point force also acts there.</p>",
                    sources: [{ id: "STRU935-00091", set: 1, question: 16 }]
                },
                {
                    id: "cantilever-transverse-load-diagrams",
                    title: "Cantilever diagrams under downward transverse loads",
                    html: "<p>Measure x from the fixed end of a cantilever of length L. Keeping the same sagging-positive convention, ordinary downward transverse loading gives hogging moments. The free-side portion often makes the cut calculation shortest: sum its remaining load for shear and its load moments for bending. The following are separate load cases, without added forces or couples.</p>" +
                        "<table><thead><tr><th scope='col'>Load case</th><th scope='col'>V(x)</th><th scope='col'>M(x)</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Downward tip force P</th><td>P</td><td>−P(L − x)</td></tr>" +
                        "<tr><th scope='row'>Full-span downward UDL w</th><td>w(L − x)</td><td>−w(L − x)<sup>2</sup>/2</td></tr>" +
                        "<tr><th scope='row'>Triangular load, w<sub>0</sub> at the fixed end and zero at the free end</th><td>w<sub>0</sub>(L − x)<sup>2</sup>/(2L)</td><td>−w<sub>0</sub>(L − x)<sup>3</sup>/(6L)</td></tr></tbody></table>" +
                        "<p>Thus a tip force gives constant shear and a triangular BMD; a UDL gives triangular shear and a parabolic BMD; the specified triangular load gives parabolic shear and a cubic BMD. Here w<sub>0</sub> is peak intensity in kN/m. For L = 3 m and w<sub>0</sub> = 6 kN/m, the triangular load totals <strong>9 kN</strong> and acts 1 m from the fixed end, producing <strong>V(0+) = 9 kN</strong> and <strong>M(0+) = −9 kN m</strong>.</p>" +
                        "<p>For these conventional downward-only cases, the largest absolute shear and moment occur at the fixed end, sometimes with ties along unloaded regions. Mixed upward/downward loading or added couples needs a fresh check. At an <em>unloaded</em> free end V and M are zero; a tip point force instead leaves a nonzero inward shear limit, and a tip couple leaves a nonzero inward moment limit.</p>",
                    sources: [
                        { id: "STRU935-00097", set: 10, question: 21 },
                        { id: "STRU935-00099", set: 10, question: 23 },
                        { id: "STRU935-00350", set: 32, question: 24 },
                        { id: "STRU935-00352", set: 33, question: 15 },
                        { id: "STRU935-00353", set: 33, question: 16 },
                        { id: "STRU935-00354", set: 33, question: 17 }
                    ]
                },
                {
                    id: "concentrated-couples-and-end-moments",
                    title: "Applied couples: reactions, jumps and pure bending",
                    html: "<p>Use <strong>C</strong> for an applied couple magnitude, reserving M(x) for internal bending moment. A clockwise couple C at x = a, with 0 &lt; a &lt; L, on a simple span L with no other load requires <strong>R<sub>A</sub> = −C/L</strong> and <strong>R<sub>B</sub> = +C/L</strong>, taking reactions positive upward. The reactions sum to zero but form the opposing external couple. Their magnitudes do not depend on a.</p>" +
                        "<p>The shear is <strong>V = −C/L</strong> throughout the open span. Before the couple, <strong>M(x) = −Cx/L</strong>; after it, <strong>M(x) = C(1 − x/L)</strong>. Both simple-end moments are zero. At a = L/2, the ordinates immediately beside the couple are <strong>−C/2 and +C/2</strong>; the maximum absolute moment C/2 is there, not at the supports. For C = 6 kN m and L = 3 m, the reactions are −2 and +2 kN and the central one-sided moments are −3 and +3 kN m.</p>" +
                        "<p>On a cantilever, a clockwise couple at x = a gives <strong>V = 0</strong> everywhere, <strong>M = −C</strong> between the fixed end and the couple, and M = 0 beyond it. At the free end, it produces constant moment over the entire length: a rectangular BMD. The fixed support supplies an equal opposite external couple; its direction is not the internal sagging-positive moment sign.</p>" +
                        "<p>Equal-magnitude, <strong>oppositely directed end couples</strong> on a simple beam give zero reactions and zero shear at every section, with constant moment of magnitude C. Equal end-couple magnitudes alone do not establish this: couples turning in the same direction need a reaction couple and nonzero shear. Always retain the direction arrows.</p>",
                    sources: [
                        { id: "STRU935-00001", set: 2, question: 14 },
                        { id: "STRU935-00016", set: 3, question: 18 },
                        { id: "STRU935-00018", set: 3, question: 20 },
                        { id: "STRU935-00030", set: 4, question: 21 },
                        { id: "STRU935-00327", set: 30, question: 24 },
                        { id: "STRU935-00351", set: 33, question: 14 }
                    ]
                },
                {
                    id: "finding-extrema-and-critical-sections",
                    title: "Find maxima rather than guessing their locations",
                    html: "<p>Moment increases where V &gt; 0 and decreases where V &lt; 0. At a smooth section, V = 0 identifies a <strong>stationary moment</strong>, which can be a maximum, minimum or part of a plateau; it need not be a peak. Positive-to-negative shear gives a local maximum, while negative-to-positive gives a local minimum. A point-force jump can reverse the sign without ever taking a continuous value V = 0.</p>" +
                        "<ol><li>Calculate reactions and construct V and M with consistent signs.</li><li>Check smooth zero-shear sections, sign-changing shear jumps and constant-moment intervals.</li><li>Evaluate endpoints and both one-sided ordinates at applied couples.</li><li>Compare signed extrema and absolute magnitudes separately. A large hogging demand is a negative minimum of M but may be the maximum of |M|.</li></ol>" +
                        "<p><strong>Illustrative counterexample to the largest-load shortcut:</strong> a 10 m simple beam carries downward loads 10, 6 and 2 kN at x = 1, 5 and 8 m respectively. R<sub>B</sub> = (10 × 1 + 6 × 5 + 2 × 8)/10 = 5.6 kN and R<sub>A</sub> = 12.4 kN. Shear changes from +2.4 to −3.6 kN at the <em>6 kN</em> load. There M = 12.4 × 5 − 10 × 4 = <strong>22 kN m</strong>, larger than the 12.4 kN m beneath the largest load.</p>" +
                        "<p>For a non-overhanging simple beam with only downward transverse loads and no applied couples, V is nonincreasing between the support jumps, so its absolute maximum is next to an end. Do not generalize this to arbitrary mixed loading. Design checks require the relevant axial, shear and moment demands along the member, including support and span regions, rather than assuming every critical section is the centre or a support.</p>",
                    sources: [
                        { id: "STRU935-00002", set: 2, question: 15 },
                        { id: "STRU935-00005", set: 2, question: 18 },
                        { id: "STRU935-00098", set: 10, question: 22 },
                        { id: "STRU935-00100", set: 10, question: 24 },
                        { id: "STRU935-00101", set: 11, question: 14 },
                        { id: "STRU935-00345", set: 32, question: 19 }
                    ]
                },
                {
                    id: "contraflexure-and-real-hinges",
                    title: "Contraflexure is not a physical hinge",
                    html: "<p>For a <strong>continuous bending-moment curve</strong>, a point of contraflexure is an interior section where M is zero <em>and changes sign across the section</em>. Zero alone is insufficient: a simple end with no moment has no span on both sides, and a graph merely touching zero without reversing sign has no contraflexure. For positive EI in elementary bending, the curvature reverses there; neither the deflection nor the slope must be zero.</p>" +
                        "<p>A simple beam with a single downward point load between its supports, or with a downward full-span UDL, has positive moment throughout its interior and therefore no interior points of contraflexure. At an applied couple, a moment jump may change sign without any continuous zero-moment ordinate. Record that discontinuity separately rather than solving M = 0 at the load point.</p>" +
                        "<p>An <strong>internal hinge</strong> is an actual idealized moment release in the structural model. It permits relative rotation and transfers no bending couple about the released axis, but it can transmit axial and shear forces. A contraflexure section in a continuous member remains materially connected and cannot simply be replaced by a hinge for every load case. Under load doubling in an unchanged linear model, nonzero N and V can double, while the hinge moment remains <strong>zero</strong>. Any other resultant already equal to zero may also remain zero; the distinctive hinge property is its enforced moment release.</p>",
                    sources: [
                        { id: "STRU935-00325", set: 30, question: 22 },
                        { id: "STRU935-00342", set: 32, question: 16 },
                        { id: "STRU935-00343", set: 32, question: 17 },
                        { id: "STRU935-00348", set: 32, question: 22 },
                        { id: "STRU935-00357", set: 33, question: 20 }
                    ]
                },
                {
                    id: "fixed-beam-sign-reversals",
                    title: "Fixed-beam contraflexure counts need a load case",
                    html: "<p>The following interpretation examples assume a prismatic beam with constant positive EI, both ends fully fixed at unchanged levels, linear-elastic small-deflection response, and only the named load. Fixed-end moments require deformation compatibility, not equilibrium alone; their general calculation belongs to the indeterminate-structures topic. Here they provide explicit starting ordinates for checking the bank's claims about sign changes.</p>" +
                        "<table><thead><tr><th scope='col'>Downward load case</th><th scope='col'>Internal end moments, sagging positive</th><th scope='col'>Continuous zero-moment sections</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Full-span UDL w</th><td>−wL<sup>2</sup>/12 at both ends</td><td>x/L = (1 ± 1/√3)/2, approximately 0.2113 and 0.7887</td></tr>" +
                        "<tr><th scope='row'>Central point load P</th><td>−PL/8 at both ends</td><td>x = L/4 and 3L/4</td></tr></tbody></table>" +
                        "<p>For the UDL, <strong>M(x) = −wL<sup>2</sup>/12 + wLx/2 − wx<sup>2</sup>/2</strong>. Setting this equal to zero gives the two listed roots. In both cases the ends hog and the central region sags; a zero at each transition is genuine continuous contraflexure.</p>" +
                        "<p>For a <strong>clockwise central couple C</strong> under the same fixed-end assumptions, M = C/4 − 3Cx/(2L) on the left half and M = 5C/4 − 3Cx/(2L) on the right half. The continuous zeros are <strong>x = L/6 and 5L/6</strong>. At the centre M jumps from −C/2 to +C/2: an additional <em>sign reversal</em>, not a third continuous zero-moment section. Calling all three contraflexures uses a broader counting convention. Different load positions, stiffness distributions or support movements require recalculation.</p>",
                    sources: [{ id: "STRU935-00344", set: 32, question: 18 }]
                },
                {
                    id: "axial-force-and-thrust-diagrams",
                    title: "Axial force and the thrust diagram",
                    html: "<p>An <strong>axial-force diagram</strong>, also called a <strong>thrust diagram</strong>, plots N along a member, not stress N/A. Adopt tension positive and compression negative; some texts take thrust positive in compression, so inspect the stated convention. With N acting rightwards on the left portion's cut, <strong>N = −ΣF<sub>x,left</sub></strong>. With no distributed axial load, N is constant between concentrated axial forces.</p>" +
                        "<p><em>Syllabus extension: constructing the diagram beyond the bank's naming question.</em> If p<sub>x</sub> is axial load per length in kN/m, positive towards increasing x, <strong>dN/dx = −p<sub>x</sub></strong>. A point axial force F towards +x gives a jump −F. Consider a 4 m straight bar anchored at x = 0, carrying 8 kN towards +x at a collar at x = 2 m and 3 kN towards −x at x = 4 m. The anchor reaction is −5 kN. Therefore <strong>N = +5 kN</strong> over 0 &lt; x &lt; 2 m and <strong>N = −3 kN</strong> over 2 &lt; x &lt; 4 m: tension changes to compression, with an 8 kN downward diagram jump at the collar.</p>" +
                        "<p>On an initially straight horizontal pin-and-roller beam with only vertical loads and no axial coupling, first-order analysis gives N = 0; increasing those loads leaves this zero diagram unchanged while V and M change. Vertical loading can nevertheless generate member axial forces in inclined members, arches and frames, or through large-deflection restraint effects. The ordinary straight-beam result is not a general rule for every structure.</p>",
                    sources: [
                        { id: "STRU935-00329", set: 31, question: 16 },
                        { id: "STRU935-00360", set: 33, question: 23 }
                    ]
                },
                {
                    id: "linear-superposition-and-signed-response",
                    title: "Superposition: same section, units and linear model",
                    html: "<p>For a linear structural model, the response to simultaneous loads is the signed sum of the responses to the separate loads. If load patterns P and Q produce responses r<sub>P</sub> and r<sub>Q</sub> at the <em>same section and in the same component</em>, applying αP and βQ gives <strong>r = αr<sub>P</sub> + βr<sub>Q</sub></strong>, with dimensionless factors α and β. The response may be moment, shear, axial force, displacement or strain, provided the corresponding linearity assumptions hold.</p>" +
                        "<p>For proportional strains and deflections, assume <strong>linear-elastic material behaviour, geometric linearity and unchanged boundary conditions</strong>. Elastic recovery alone does not imply a straight stress-strain relation. Small strains alone do not exclude large rotations. Load-dependent stiffness, yielding, changing contact, support lift-off or significant second-order effects defeat the elementary rule. For a statically determinate member on fixed geometry, equilibrium resultants can be added without using E; proportional deformation additionally needs the constitutive assumptions.</p>" +
                        "<p><strong>Signed displacement example:</strong> at a chosen point, P alone causes 4 mm downward and Q alone causes 2 mm upward. Taking downward positive, 2P and Q/2 produce <strong>2 × 4 + (−2)/2 = 7 mm downward</strong>. In the bank's separate 0.01 and 0.03 example, assuming common units and the same direction gives <strong>2 × 0.01 + 0.03/2 = 0.035</strong> in that original unit.</p>" +
                        "<p>Strains at different physical sections are not simply added as a body's total strain. <em>Syllabus extension:</em> for serial, uniform axial segments, total extension is <strong>ΔL = Σ N<sub>i</sub>L<sub>i</sub>/(E<sub>i</sub>A<sub>i</sub>)</strong>. Each signed force N<sub>i</sub>, length L<sub>i</sub>, modulus E<sub>i</sub> and area A<sub>i</sub> belongs to that segment. Strain ε is dimensionless; extension ΔL has units of length.</p>",
                    sources: [
                        { id: "STRU935-00167", set: 16, question: 23 },
                        { id: "STRU935-00258", set: 24, question: 22 },
                        { id: "STRU935-00355", set: 33, question: 18 },
                        { id: "STRU935-00358", set: 33, question: 21 },
                        { id: "STRU935-00359", set: 33, question: 22 }
                    ]
                }
            ],
            gaps: [
                "Axial-force coverage is sparse: one assigned item names the thrust diagram and another discusses its response to vertical loading. The distributed-axial-load relation, worked tension/compression diagram and serial-bar extension formula are explicitly labelled syllabus extensions, not additional bank questions.",
                "The assigned bank gives no complete worked inclined-member or general mixed upward/downward loading diagram. The counterexamples and stated idealizations here supplement that gap. Missing load positions or couple directions in individual stems cannot be reconstructed uniquely from an answer key.",
                "Fixed-beam examples supply standard constant-EI ordinates only to interpret sign changes. General compatibility methods, influence lines, full bending-stress design and nonlinear analysis are not developed here; the relevant later Structural Mechanics and Design of Structures topics remain separate."
            ],
            cautions: [
                {
                    html: "<p><strong>Loads directly over the supports are not inward two-point loading.</strong> Taken literally, the basic-civil stem puts each point force at a simple end support. With no other loads or self-weight, the local reactions cancel them and the open span has zero internal forces. Its explanation instead assumes two equal loads placed symmetrically inside the span, producing a nonzero maximum-moment plateau. That different geometry is not supplied by the stem.</p>",
                    sources: [{ id: "BASI674-00005", set: 2, question: 5 }]
                },
                {
                    html: "<p><strong>End-couple directions are missing.</strong> Equal and opposite applied end couples give pure bending, with V = 0 at <em>all sections</em>, not merely zero support ordinates. The bank's keyed wording is incomplete under its explanation's assumed case; the all-sections alternative states that result precisely. Equal couples rotating in the same sense instead require nonzero reactions and shear. A couple does not create a point-force jump, but it can still require transverse support reactions.</p>",
                    sources: [{ id: "STRU935-00001", set: 2, question: 14 }]
                },
                {
                    html: "<p><strong>Zero shear is not a sufficient maximum test.</strong> A smooth V = 0 section makes M stationary; inspect whether V changes positive-to-negative, negative-to-positive, or stays zero over an interval. These distinguish a maximum, minimum and plateau. Conversely, a point-load jump can create a moment peak without continuous V = 0. The bank's general zero-shear and changes-sign statements omit these distinctions and do not alone identify the absolute largest |M|.</p>",
                    sources: [
                        { id: "STRU935-00002", set: 2, question: 15 },
                        { id: "STRU935-00345", set: 32, question: 19 }
                    ]
                },
                {
                    html: "<p><strong>The 8 m beam's 4 m UDL has no stated position.</strong> At 1 kN/m, loading x = 0 to 4 m gives reactions 3 and 1 kN and a 4.5 kN m peak at x = 3 m. Centring the same patch at x = 2 to 6 m gives reactions 2 and 2 kN and a <strong>6 kN m</strong> peak at x = 4 m. The stored 4.5 kN m fits the support-adjacent patch, not the symmetric patch described in the explanation. The stem alone cannot select between them.</p>",
                    sources: [{ id: "STRU935-00091", set: 1, question: 16 }]
                },
                {
                    html: "<p><strong>The third-point maximum is not smaller at midspan.</strong> With equal downward loads W at L/3 and 2L/3, each reaction is W and V = 0 throughout the middle third. Therefore M = WL/3 everywhere in that region, including beneath both loads and at the centre. The keyed under-the-loads locations are included, but the claim of a smaller central moment is wrong and the listed locations are not mutually exclusive.</p>",
                    sources: [{ id: "STRU935-00337", set: 31, question: 23 }]
                },
                {
                    html: "<p><strong>The largest point force need not carry the largest moment.</strong> Reactions depend on all load magnitudes and positions, and the moment peak is found from the shear sign change. The worked 10 m example gives 22 kN m beneath a 6 kN force but only 12.4 kN m beneath a 10 kN force. The stem does not specify a moving load train; even for moving loads, candidate maxima must be compared rather than assuming the largest force always governs.</p>",
                    sources: [{ id: "STRU935-00101", set: 11, question: 14 }]
                },
                {
                    html: "<p><strong>Correct couple magnitude, incorrect location in the explanation.</strong> For a central applied couple of magnitude C on a simple span, the maximum absolute internal moment is C/2, so the stored magnitude is correct. The simple supports have zero moment. The values −C/2 and +C/2 occur immediately on the two sides of the central clockwise couple, joined by a jump, not at opposite beam ends. Reversing the applied couple reverses every sign.</p>",
                    sources: [{ id: "STRU935-00327", set: 30, question: 24 }]
                },
                {
                    html: "<p><strong>Continuous contraflexure requires zero and sign change.</strong> The wording zero <em>or</em> changes sign is too loose for the continuous-curve definition: an ordinary simple-end zero is not an interior contraflexure, and a concentrated-couple jump can reverse sign without a zero ordinate. A zero-moment section sometimes called a virtual hinge is not an installed internal hinge or a release valid for every load case.</p>",
                    sources: [
                        { id: "STRU935-00325", set: 30, question: 22 },
                        { id: "STRU935-00348", set: 32, question: 22 }
                    ]
                },
                {
                    html: "<p><strong>Fixed-beam counts need assumptions and a definition.</strong> The two-zero results shown here use constant EI, fixed end levels, and a full-span UDL or a central downward point load. A central couple gives two continuous zero-moment sections at L/6 and 5L/6 plus a central sign-changing jump. Counting that jump as a third contraflexure is a broader convention, not three continuous zeros as in the neighbouring continuous-BMD definition. The bank's all-of-the-above claim should not be generalized to arbitrary loading or stiffness.</p>",
                    sources: [{ id: "STRU935-00344", set: 32, question: 18 }]
                },
                {
                    html: "<p><strong>The rate statements are wrong as written.</strong> With downward-positive intensity, the relations are <strong>dM/dx = V</strong> and <strong>dV/dx = −w</strong>. The first is not equality to the <em>rate</em> of shear force, and the second is not equality to the <em>rate</em> of loading. Their dimensions expose the error: dM/dx is kN, dV/dx is kN/m, and dw/dx is kN/m<sup>2</sup>. The explanation silently repairs both statements; the original wording does not justify the both-correct key.</p>",
                    sources: [{ id: "STRU935-00346", set: 32, question: 20 }]
                },
                {
                    html: "<p><strong>The UVL stem and its answer choices belong to different concepts.</strong> A uniformly increasing transverse load produces a quadratic SFD and a <strong>cubic BMD</strong> between discontinuities. None of the listed stress, moment or deflection statements supplies that shape. Uniform bending strength is a separate design condition: a suitable varying section modulus Z, in m<sup>3</sup>, can keep bending stress |M|/Z constant. That section design is not stated and cannot be inferred from a triangular load, so it does not validate the stored constant-bending-stress answer to this stem.</p>",
                    sources: [{ id: "STRU935-00347", set: 32, question: 21 }]
                },
                {
                    html: "<p><strong>Support-maximum rules need conventional loading.</strong> They apply to the ordinary downward-only cantilever and simple-beam cases described in the notes, not every combination of forces and couples. For example, a 3 m cantilever carrying 10 kN downward at its tip and 12 kN upward at x = 2 m has fixed-end |V| = 2 kN but |V| = 10 kN in the outer metre. Its fixed-end M is −6 kN m, whereas M at x = 2 m is −10 kN m. Both absolute maxima therefore defeat an unconditional fixed-support rule.</p>",
                    sources: [
                        { id: "STRU935-00097", set: 10, question: 21 },
                        { id: "STRU935-00098", set: 10, question: 22 },
                        { id: "STRU935-00099", set: 10, question: 23 }
                    ]
                },
                {
                    html: "<p><strong>Elastic is broader than linear elastic.</strong> A recoverable but nonlinear stress-strain response does not permit elementary load-response superposition. Likewise, small strain by itself is insufficient: geometry, stiffness and supports must also remain within a linear model. Add strain contributions at the same point and in the same component; strains sampled at different sections are not automatically a total strain for the body. Use segment extensions when calculating a bar's overall change in length.</p>",
                    sources: [
                        { id: "STRU935-00358", set: 33, question: 21 },
                        { id: "STRU935-00258", set: 24, question: 22 }
                    ]
                },
                {
                    html: "<p><strong>The superposition number assumes compatible units and directions.</strong> The stored 0.035 follows from 2 × 0.01 + 0.03/2 if both deflections are measured at the same point in the same direction in one unit and the model is linear. The stem supplies no explicit unit, so the result must not be labelled metres or millimetres without additional information. Opposite signed contributions would instead give 0.020 − 0.015 = 0.005 in that common unit.</p>",
                    sources: [{ id: "STRU935-00359", set: 33, question: 22 }]
                },
                {
                    html: "<p><strong>An unchanged axial diagram is a straight-beam first-order result.</strong> Increasing only vertical loads leaves N unchanged for the uncoupled horizontal beam model used here, with no new horizontal loads or restraint effects. In arches, frames, inclined members or geometrically nonlinear restrained beams, those vertical loads can change member axial forces. The stored statement therefore needs geometry and support assumptions; it is not a universal property of every beam or structure.</p>",
                    sources: [{ id: "STRU935-00360", set: 33, question: 23 }]
                },
                {
                    html: "<p><strong>Location wording and overlapping choices.</strong> Sagging identifies the sign of bending curvature, not a compulsory midspan location; the midspan answer assumes a conventional loading arrangement. For the separate central downward point-load question, maximum at the centre and least at the supports are both true descriptions of the same simple-beam BMD. The selected peak-location answer is correct, but the other true statement makes the choices non-exclusive. This does not invalidate the bank's correct concave-up and convex-down descriptions of positive bending.</p>",
                    sources: [
                        { id: "STRU935-00326", set: 30, question: 23 },
                        { id: "STRU935-00340", set: 32, question: 14 }
                    ]
                }
            ]
        }
    });
})();