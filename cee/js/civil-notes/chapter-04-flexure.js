(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0403: {
            code: "ACiE0403",
            questionCount: 77,
            blocks: [
                {
                    id: "flexure-plane-loads-and-bending-signs",
                    title: "Co-planar loading, pure bending and signs",
                    html: "<p>Take x along the initially straight beam to the right, y upward through its cross-section, and v upward for transverse displacement. Measure y from the neutral axis of the homogeneous, unaxially loaded bending model. Longitudinal normal stress σ is positive in tension. Define <strong>M positive for sagging</strong>, which compresses the upper fibres and stretches the lower fibres.</p>" +
                        "<p>With I the second moment of area about the horizontal bending axis, the signed relation is <strong>σ = −My/I</strong>. Thus positive M and positive y give compression; at negative y they give tension. Hogging has negative M and reverses these signs. For a cantilever fixed at x = 0 with a downward end force P, M(x) = −P(L − x): the upper fibres are in tension, not compression. Support type alone never determines the stress sign.</p>" +
                        "<p><strong>Co-planar loading</strong> means the loads occupy one plane. A one-plane bending response additionally requires the appropriate principal bending plane and absence of torsional excitation. <strong>Pure bending</strong> describes an interval carrying a constant bending moment with no axial force or transverse shear. Using V = dM/dx, constant M gives V = 0 throughout that interval; it is not the same statement as zero shear at one isolated section.</p>",
                    sources: [
                        { id: "STRU935-00227", set: 22, question: 14 },
                        { id: "STRU935-00226", set: 21, question: 24 },
                        { id: "STRU935-00243", set: 23, question: 18 },
                        { id: "STRU935-00242", set: 23, question: 17 }
                    ]
                },
                {
                    id: "flexure-plane-sections-and-derivation",
                    title: "Deriving the elastic flexure equation",
                    html: "<p>Use an initially straight, slender, prismatic, homogeneous linearly elastic member, with the same Young’s modulus E in tension and compression. Plane cross-sections remain plane and normal to the deformed neutral line. Strains are small; shear deformation is neglected. The usual elastic-curve integrations also assume small slopes. Pure bending has no axial-force resultant, and the stresses must remain within the material’s linear range.</p>" +
                        "<p>For a short sagging circular segment, a neutral fibre has length R dφ and an upper fibre has length (R − y)dφ. Therefore <strong>ε = −y/R</strong> and Hooke’s law gives σ = −Ey/R. Here R is the neutral-line radius and φ is its turning angle. With the adopted moment sign, internal resistance is <strong>M = −∫yσ dA = (E/R)∫y<sup>2</sup> dA = EI/R</strong>. The tensile and compressive stress resultants balance as a force but form a resisting couple.</p>" +
                        "<p>The sign-consistent identity is <strong>M/I = −σ/y = E/R</strong>, away from y = 0. The familiar M/I = σ/y = E/R must instead use consistent magnitudes, or a different stated stress/coordinate convention. In magnitude form, |σ| = |M||y|/I. At the neutral axis use σ = −My/I directly, rather than dividing by zero. These assumptions explain the bank’s linear stress distribution; they do not justify an elastic formula after plastic collapse.</p>",
                    sources: [
                        { id: "STRU935-00034", set: 5, question: 14 },
                        { id: "STRU935-00229", set: 22, question: 16 },
                        { id: "STRU935-00216", set: 21, question: 14 },
                        { id: "STRU935-00224", set: 21, question: 22 }
                    ]
                },
                {
                    id: "flexure-neutral-axis-and-fibre-stresses",
                    title: "Neutral axis, extreme fibres and transverse shear",
                    html: "<p>The neutral surface contains fibres with zero longitudinal bending strain; its intersection with a cross-section is the <strong>neutral axis</strong>. For nonzero pure bending and uniform E, zero axial force gives ∫σ dA = −(E/R)∫y dA = 0. Consequently ∫y dA = 0 and this axis passes through the area centroid. It need not lie halfway through the depth of an unsymmetrical section. An added axial force or nonuniform material stiffness invalidates that simple centroid argument.</p>" +
                        "<table><thead><tr><th scope='col'>Position under positive sagging M</th><th scope='col'>Longitudinal stress</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Upper extreme, y = c<sub>t</sub></th><td>−Mc<sub>t</sub>/I: compression.</td></tr>" +
                        "<tr><th scope='row'>Neutral axis, y = 0</th><td>Zero bending stress.</td></tr>" +
                        "<tr><th scope='row'>Lower extreme, y = −c<sub>b</sub></th><td>+Mc<sub>b</sub>/I: tension.</td></tr></tbody></table>" +
                        "<p>The maximum |σ| at a section occurs at the largest |y|; the critical section along a member is found from |M|/Z<sub>e</sub>, not by automatically choosing midspan. The bank’s older term <em>skin stress</em> refers here to outer-fibre bending stress.</p>" +
                        "<p>Transverse shear is a separate distribution. For a solid rectangle of area A = bd under shear force V, <strong>|τ(y)| = 3|V|[1 − (2y/d)<sup>2</sup>]/(2A)</strong>: it peaks at the neutral axis and vanishes at the top and bottom. This parabolic result is not true for every symmetric section. In pure bending V = 0, so transverse shear is zero everywhere; maximum shear is not the definition of the neutral axis.</p>",
                    sources: [
                        { id: "STRU935-00003", set: 2, question: 16 },
                        { id: "STRU935-00231", set: 22, question: 18 },
                        { id: "STRU935-00232", set: 22, question: 19 },
                        { id: "STRU935-00237", set: 22, question: 23 },
                        { id: "STRU935-00238", set: 22, question: 24 },
                        { id: "STRU935-00240", set: 23, question: 15 },
                        { id: "STRU935-00341", set: 32, question: 15 }
                    ]
                },
                {
                    id: "flexure-section-modulus-and-stiffness",
                    title: "Section strength is not flexural stiffness",
                    html: "<p>The elastic section modulus is <strong>Z<sub>e</sub> = I/c</strong>, where c is the distance to the extreme fibre being checked. For permissible bending stress f, elastic moment resistance is <strong>M<sub>R</sub> = fZ<sub>e</sub></strong>. Unequal upper and lower distances require separate section moduli and, where relevant, separate permissible stresses. Section modulus measures the geometric contribution to bending strength; material strength and other failure modes still matter.</p>" +
                        "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Consistent N–mm units</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>E, σ and f</th><td>N/mm<sup>2</sup>; 1 N/mm<sup>2</sup> = 1 MPa.</td></tr>" +
                        "<tr><th scope='row'>I and Z<sub>e</sub></th><td>mm<sup>4</sup> and mm<sup>3</sup>, respectively.</td></tr>" +
                        "<tr><th scope='row'>Moment M and rigidity EI</th><td>N mm and N mm<sup>2</sup>, respectively.</td></tr>" +
                        "<tr><th scope='row'>Force P or total load W; intensity w</th><td>N for P and W; N/mm for w.</td></tr></tbody></table>" +
                        "<p>For a rectangle, let b be horizontal width and d vertical depth for bending about the horizontal centroidal axis. Then <strong>I = bd<sup>3</sup>/12</strong> and <strong>Z<sub>e</sub> = bd<sup>2</sup>/6</strong>. Doubling b with d unchanged doubles both quantities and halves bending deflection for the same load, span and E. Doubling d gives eight times I, four times Z<sub>e</sub> and one-eighth the deflection. Always establish the orientation before using the powers.</p>" +
                        "<p><strong>EI is flexural rigidity</strong>, with SI units N m<sup>2</sup>, not a force/displacement stiffness by itself. Structural stiffness also depends on length and restraint: the central-load stiffness of a simply supported beam is 48EI/L<sup>3</sup>, whereas a cantilever’s end-load stiffness is 3EI/L<sup>3</sup>. A member can satisfy a stress limit and still deflect excessively.</p>",
                    sources: [
                        { id: "STRU935-00047", set: 6, question: 16 },
                        { id: "STRU935-00235", set: 22, question: 21 },
                        { id: "STRU935-00246", set: 23, question: 21 },
                        { id: "STRU935-00247", set: 23, question: 22 },
                        { id: "STRU935-00248", set: 23, question: 23 }
                    ]
                },
                {
                    id: "flexure-cantilever-stress-worked-check",
                    title: "Worked cantilever stress and section orientation",
                    html: "<p>The two bank problems give a 2 m cantilever, a 2.4 kN free-end point load and a 40 mm × 60 mm section. Assume the load is downward, the width b = 40 mm and the vertical depth d = 60 mm. Convert first: <strong>P = 2400 N</strong> and <strong>L = 2000 mm</strong>. The fixed-end moment is M = −PL = −4.8 × 10<sup>6</sup> N mm = −4.8 kN m.</p>" +
                        "<ol><li>I = 40 × 60<sup>3</sup>/12 = <strong>720000 mm<sup>4</sup></strong>.</li>" +
                        "<li>c = 30 mm, so Z<sub>e</sub> = I/c = <strong>24000 mm<sup>3</sup></strong>.</li>" +
                        "<li>|σ|<sub>max</sub> = |M|/Z<sub>e</sub> = 4800000/24000 = <strong>200 N/mm<sup>2</sup></strong>.</li></ol>" +
                        "<p>The upper stress is +200 N/mm<sup>2</sup> in tension and the lower stress −200 N/mm<sup>2</sup> in compression under this loading. If the section were rotated so that b = 60 mm and d = 40 mm, Z<sub>e</sub> would be 16000 mm<sup>3</sup> and the calculated magnitude would be <strong>300 N/mm<sup>2</sup></strong>. That alternative is an orientation check, not a correction to the givens.</p>" +
                        "<p>The stem’s phrase <em>stress during collapse</em> is not established by these data. The 200 result is an elastic extreme-fibre calculation under the stated orientation. Yield strength, material behaviour, plastic redistribution and relevant instability modes are needed before interpreting a load as actual collapse.</p>",
                    sources: [
                        { id: "STRU935-00046", set: 6, question: 15 },
                        { id: "STRU935-00085", set: 9, question: 21 }
                    ]
                },
                {
                    id: "flexure-rectangular-moment-resistance",
                    title: "Worked moment resistance: retain the printed dimensions",
                    html: "<p>The rectangular-beam question explicitly gives <strong>b = 40 mm, d = 400 mm and f = 15 N/mm<sup>2</sup></strong>. Bending is about the centroidal axis parallel to the width. The elastic section modulus is Z<sub>e</sub> = bd<sup>2</sup>/6 = 40 × 400<sup>2</sup>/6 = <strong>1066666.67 mm<sup>3</sup></strong>. Equivalently, I = 213333333.33 mm<sup>4</sup> and c = 200 mm.</p>" +
                        "<p>Thus <strong>M<sub>R</sub> = fZ<sub>e</sub> = 16000000 N mm = 16 kN m</strong>, using 1 kN m = 10<sup>6</sup> N mm. This is a positive capacity magnitude, not the sign of a particular applied moment. The stored 84 kN m key is inconsistent with the printed data; none of the offered values equals 16 kN m.</p>" +
                        "<p>A reverse check makes the conflict visible: 84 × 10<sup>6</sup>/1066666.67 = <strong>78.75 N/mm<sup>2</sup></strong>, not the supplied 15 N/mm<sup>2</sup>. Do not invent a larger width or select an unrelated option as the closest answer. The source remains unchanged; the calculation and discrepancy are recorded separately.</p>",
                    sources: [{ id: "STRU935-00209", set: 20, question: 19 }]
                },
                {
                    id: "flexure-curvature-radius-and-equation",
                    title: "Curvature, radius, rotation and the elastic curve",
                    html: "<p>Rotation and curvature are different quantities. Geometrically, tan θ = dv/dx and κ = dθ/ds, where s is distance along the deformed line. For small slopes, the conventional beam notation is <strong>θ = dv/dx</strong> and <strong>κ ≈ d<sup>2</sup>v/dx<sup>2</sup></strong>. Rotation is dimensionless, normally reported in radians; curvature has units of inverse length.</p>" +
                        "<p>The signed geometric curvature is <strong>κ = v″/[1 + (v′)<sup>2</sup>]<sup>3/2</sup></strong>. Combining the bending constitutive law EIκ = M with small slopes gives <strong>EI v″ = M(x)</strong>. This is a linear second-order equation when the moment distribution is prescribed. Keeping the exact curvature expression produces a nonlinear equation instead. If EI varies with x, integrate M(x)/EI(x), not M(x) divided by an arbitrary average rigidity.</p>" +
                        "<p>For fixed positive EI, curvature is proportional to moment and <strong>|R| = EI/|M|</strong>. At M = 0 the curvature vanishes and the local radius tends to infinity; neither rotation nor displacement must be zero there. EI multiplies <em>curvature</em> to give moment, not rotation. Two integrations and the correct boundary conditions are still required to obtain deflection.</p>" +
                        "<p>The bending-only model is appropriate for slender beams when transverse shear deformation is negligible. It is not a universal claim that bending always causes the greatest deformation: short, deep members may have appreciable shear deflection, while axial force causes longitudinal extension or shortening. External loads cause the internal actions, so they are not a competing deformation mechanism to rank against bending.</p>",
                    sources: [
                        { id: "STRU935-00233", set: 22, question: 20 },
                        { id: "STRU935-00234", set: 1, question: 22 },
                        { id: "STRU935-00239", set: 23, question: 14 },
                        { id: "STRU935-00217", set: 21, question: 15 },
                        { id: "STRU935-00218", set: 21, question: 16 },
                        { id: "STRU935-00211", set: 20, question: 21 }
                    ]
                },
                {
                    id: "flexure-constant-moment-and-end-couples",
                    title: "Constant moment: circular arc and end-couple deflections",
                    html: "<p>A constant moment acting on constant EI gives constant curvature. The neutral line is a <strong>circular arc</strong> in the constant-curvature description. Replacing exact curvature by v″ is the small-slope approximation; integrating constant v″ then gives a parabola that approximates that arc. These descriptions refer to different levels of geometric approximation, not different load cases.</p>" +
                        "<p>For the simply supported bank case, specify <strong>equal-magnitude, opposite-sense external end couples</strong>: clockwise at the left end and counterclockwise at the right produce a constant positive internal sagging moment M. With no transverse loads, the vertical reactions are zero. The supports impose v(0) = v(L) = 0 but allow rotation. Integrating v″ = M/EI and applying those conditions gives <strong>v(x) = Mx(x − L)/(2EI)</strong> and θ(x) = M(2x − L)/(2EI).</p>" +
                        "<p>Hence the midspan downward-deflection magnitude is <strong>ML<sup>2</sup>/(8EI)</strong>, and the end slopes are −ML/(2EI) and +ML/(2EI). M is a couple in force × length units, not a point load. A pin cannot supply a reaction couple, but a separately applied end couple can still make the adjacent beam moment nonzero.</p>" +
                        "<p><em>Syllabus-only companion; no assigned cantilever end-couple item:</em> a cantilever with constant signed internal moment C has v(0) = θ(0) = 0. Integration gives θ(x) = Cx/EI and v(x) = Cx<sup>2</sup>/(2EI). The free-end magnitudes are therefore <strong>|C|L/EI</strong> for slope and <strong>|C|L<sup>2</sup>/(2EI)</strong> for deflection. Do not substitute the point-load formula PL<sup>3</sup>/(3EI) into this different loading arrangement.</p>",
                    sources: [
                        { id: "STRU935-00106", set: 11, question: 19 },
                        { id: "STRU935-00228", set: 22, question: 15 },
                        { id: "STRU935-00349", set: 32, question: 23 }
                    ]
                },
                {
                    id: "flexure-supports-and-joint-rotations",
                    title: "Boundary conditions and compatible joint rotations",
                    html: "<p>Integration constants represent displacement and rotation freedoms; determine them from the actual restraints. The following conditions assume supports with no imposed settlement or rotation, and use one consistent global sign convention.</p>" +
                        "<table><thead><tr><th scope='col'>Connection or boundary</th><th scope='col'>Condition to apply</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Ground-fixed end</th><td>v = 0 and θ = 0; reactions may include a moment.</td></tr>" +
                        "<tr><th scope='row'>Pin or roller support</th><td>v = 0; rotation is free. End M = 0 only if no external end couple acts.</td></tr>" +
                        "<tr><th scope='row'>Unloaded free end</th><td>M = 0 and V = 0; v and θ need not vanish. An end force or couple changes the force conditions.</td></tr>" +
                        "<tr><th scope='row'>Rigid member-to-member joint</th><td>Connected members share the joint’s rotation and retain their included angle; that rotation need not be zero.</td></tr>" +
                        "<tr><th scope='row'>Pin-connected members</th><td>They share the pin position but may rotate independently; their rotations can coincide by circumstance.</td></tr></tbody></table>" +
                        "<p>At an ordinary internal hinge, transverse displacement is continuous but the slopes on its two sides need not match. For a smooth elastic curve, candidate interior displacement extrema satisfy θ = 0; candidate slope extrema satisfy κ = M/EI = 0. Also examine boundaries and any rotational discontinuities.</p>" +
                        "<p>A simply supported beam under symmetric downward loading has opposite end slopes of equal magnitude and zero slope at midspan. When curvature keeps one sign, slope varies monotonically. Those conditions explain the familiar maximum support-slope answer; mixed loading, moment reversal, overhangs or different restraints require an actual extremum check.</p>",
                    sources: [
                        { id: "STRU935-00212", set: 20, question: 22 },
                        { id: "STRU935-00213", set: 20, question: 23 },
                        { id: "STRU935-00214", set: 20, question: 24 },
                        { id: "STRU935-00195", set: 19, question: 17 }
                    ]
                },
                {
                    id: "flexure-simply-supported-central-load",
                    title: "Derive the simply supported central-point-load result",
                    html: "<p>Consider a constant-EI span L, simple supports without settlement, and a downward point force P <strong>at midspan</strong>. Each reaction is P/2. On the left half, 0 ≤ x ≤ L/2, the bending moment is M(x) = Px/2. The right half follows by symmetry, so only the left-half integration is needed.</p>" +
                        "<ol><li>EI v″ = Px/2 gives <strong>EI θ = Px<sup>2</sup>/4 + C<sub>1</sub></strong>.</li>" +
                        "<li>Integrating again gives EI v = Px<sup>3</sup>/12 + C<sub>1</sub>x + C<sub>2</sub>.</li>" +
                        "<li>The support condition v(0) = 0 gives C<sub>2</sub> = 0. Symmetry gives θ(L/2) = 0, hence C<sub>1</sub> = −PL<sup>2</sup>/16.</li></ol>" +
                        "<p>Substitution at x = L/2 yields <strong>v(L/2) = −PL<sup>3</sup>/(48EI)</strong>. The downward maximum-deflection magnitude is PL<sup>3</sup>/(48EI); the support-slope magnitudes are PL<sup>2</sup>/(16EI). The negative displacement is consistent with upward-positive v and positive sagging moment.</p>" +
                        "<p>Where the bank calls the concentrated force W, replace P by W without changing the result. W is then a force, not a UDL intensity. Asking for a deflection at midspan does not itself locate an unspecified load there: the standard coefficient 1/48 requires the central-load arrangement. For fixed load and section, doubling L multiplies this bending deflection by eight.</p>",
                    sources: [
                        { id: "DESI787-00163", set: 18, question: 32 },
                        { id: "STRU935-00008", set: 2, question: 21 },
                        { id: "STRU935-00020", set: 3, question: 22 },
                        { id: "STRU935-00105", set: 11, question: 18 }
                    ]
                },
                {
                    id: "flexure-cantilever-end-point-load",
                    title: "Derive cantilever end-load slope and deflection",
                    html: "<p>Let x start at a cantilever’s fixed end and let a downward force P act at x = L. Under the constant-EI, small-slope bending model, <strong>M(x) = −P(L − x)</strong>. Unlike a simply supported beam, the two kinematic conditions are both at the fixed end: v(0) = 0 and θ(0) = 0.</p>" +
                        "<p>Integrating EI v″ = −PL + Px gives <strong>θ(x) = −P(Lx − x<sup>2</sup>/2)/EI</strong>. A second integration gives <strong>v(x) = −P(Lx<sup>2</sup>/2 − x<sup>3</sup>/6)/EI</strong>. The integration constants vanish because of the clamp conditions, not because every beam starts with zero slope.</p>" +
                        "<p>At the free end, the slope is <strong>−PL<sup>2</sup>/(2EI)</strong> and the deflection is <strong>−PL<sup>3</sup>/(3EI)</strong>. The bank reports their magnitudes and sometimes uses W instead of P. Both formulas have the expected dimensions: force × length<sup>2</sup>/EI is dimensionless, while force × length<sup>3</sup>/EI is a length.</p>" +
                        "<p>For the same P, L, E and I, this cantilever deflects <strong>16 times</strong> as much as a simply supported beam with the force at its centre. Its free-end slope magnitude is eight times the support-slope magnitude of that central-load case. These comparisons do not apply unchanged when spans, sections or loading positions differ.</p>",
                    sources: [
                        { id: "STRU935-00048", set: 6, question: 17 },
                        { id: "STRU935-00104", set: 11, question: 17 }
                    ]
                },
                {
                    id: "flexure-uniform-loads-and-comparisons",
                    title: "UDL intensity, total load and the 8/5 comparison",
                    html: "<p>Let w be uniform load intensity and <strong>W = wL</strong> the total downward load on a span. For a simply supported constant-EI beam, M(x) = wx(L − x)/2. Integrating EI v″ = M and applying v(0) = v(L) = 0 gives <strong>v(x) = w(2Lx<sup>3</sup> − x<sup>4</sup> − L<sup>3</sup>x)/(24EI)</strong>. Symmetry puts maximum downward deflection at x = L/2.</p>" +
                        "<p>For the same UDL with both ends fixed against translation and rotation, compatibility gives end moments −wL<sup>2</sup>/12. Thus M(x) = −wL<sup>2</sup>/12 + wLx/2 − wx<sup>2</sup>/2. Integration with the fixed-end conditions gives <strong>v(x) = −wx<sup>2</sup>(L − x)<sup>2</sup>/(24EI)</strong>. This expression has zero displacement and slope at both ends.</p>" +
                        "<table><thead><tr><th scope='col'>Load case</th><th scope='col'>Maximum downward-deflection magnitude</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Simple supports; central point force W</th><td>WL<sup>3</sup>/(48EI).</td></tr>" +
                        "<tr><th scope='row'>Simple supports; full-span UDL of total W</th><td>5wL<sup>4</sup>/(384EI) = 5WL<sup>3</sup>/(384EI).</td></tr>" +
                        "<tr><th scope='row'>Both ends fixed; full-span UDL of total W</th><td>wL<sup>4</sup>/(384EI) = WL<sup>3</sup>/(384EI).</td></tr></tbody></table>" +
                        "<p>For otherwise identical beams, concentrating the same total load at the centre instead of spreading it uniformly gives <strong>δ<sub>point</sub>/δ<sub>UDL</sub> = (1/48)/(5/384) = 8/5 = 1.6</strong>. Fixed-ended UDL deflection is one-fifth the simply supported UDL value. Keeping W constant is essential: WL<sup>4</sup>/EI has the wrong dimensions for deflection when W denotes a force.</p>",
                    sources: [
                        { id: "STRU935-00045", set: 6, question: 14 },
                        { id: "STRU935-00084", set: 9, question: 20 },
                        { id: "STRU935-00049", set: 6, question: 18 }
                    ]
                },
                {
                    id: "flexure-moment-area-worked-deflection",
                    title: "Moment-area reasoning and the 9.975 mm check",
                    html: "<p>The first moment-area theorem gives <strong>θ<sub>C</sub> − θ<sub>A</sub> = ∫<sub>A</sub><sup>C</sup>(M/EI) dx</strong>. The second relates tangent deviation to a first moment of this curvature area. The diagram is M/EI, not automatically M: their centroids coincide only when EI is constant over the interval.</p>" +
                        "<p>Place support A at x = 0 with v(A) = 0. Let C be an interior deflection extremum at x = c, where θ(C) = 0. Integration by parts gives <strong>−v(C) = ∫<sub>0</sub><sup>c</sup>x(M/EI) dx</strong>. For a same-sign sagging curvature diagram on A–C, its area equals |θ<sub>A</sub>|. If x̄ is the distance of that <em>A–C diagram’s centroid</em> from A, the downward deflection is therefore δ<sub>C</sub> = |θ<sub>A</sub>|x̄.</p>" +
                        "<p><strong>Bank arithmetic under those conditions:</strong> 0.0075 rad × 1.33 m = 0.009975 m = <strong>9.975 mm</strong>. This reproduces the keyed number, but the stem does not identify the diagram interval, loading or stiffness distribution. A centroid for the entire span cannot simply replace the A–C centroid. The multiplication is conditionally valid, not a universal slope-to-deflection rule or proof that the missing diagram has the required form.</p>",
                    sources: [{ id: "STRU935-00196", set: 1, question: 20 }]
                },
                {
                    id: "flexure-drum-bending-modulus-check",
                    title: "Steel-strip drum bending: units before substitution",
                    html: "<p>The strip is 30 mm thick and 60 mm wide, bent around a drum of diameter 3.6 m. Taking thickness as the radial dimension gives c = 15 mm; the width cancels from <strong>|σ| = Ec/R</strong>. This is a local strain–curvature calculation, not a small-slope deflection polynomial for an entire wrap. First identify whether the stated radius is the drum contact surface or the strip’s neutral line.</p>" +
                        "<p>The printed modulus is <strong>E = 200 kN/m<sup>2</sup> = 200000 N/m<sup>2</sup> = 0.2 N/mm<sup>2</sup></strong>. Approximating the neutral radius by 1800 mm gives |σ| = 0.2 × 15/1800 = <strong>0.00166667 N/mm<sup>2</sup></strong>, equivalently 1666.67 N/m<sup>2</sup>. These are not 1666.67 N/mm<sup>2</sup>.</p>" +
                        "<table><thead><tr><th scope='col'>Explicit interpretation</th><th scope='col'>Calculated extreme stress</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Printed E; R = 1800 mm approximation</th><td>0.00166667 N/mm<sup>2</sup>.</td></tr>" +
                        "<tr><th scope='row'>Printed E; neutral R = 1800 + 15 = 1815 mm</th><td>0.00165289 N/mm<sup>2</sup>.</td></tr>" +
                        "<tr><th scope='row'>Hypothetical E = 200 GPa; R = 1800 mm</th><td>1666.67 N/mm<sup>2</sup>.</td></tr>" +
                        "<tr><th scope='row'>Hypothetical E = 200 GPa; neutral R = 1815 mm</th><td>1652.89 N/mm<sup>2</sup>.</td></tr></tbody></table>" +
                        "<p>The hypothetical modulus, 200000 N/mm<sup>2</sup> or 200 kN/mm<sup>2</sup>, is <strong>one million times</strong> the printed value. It explains the key only as a stated what-if correction, not as the given datum. Moreover, c/R is about 0.0083, or 0.83% strain: the hypothetical elastic stresses exceed the usual elastic range of ordinary structural steel. No grade or constitutive data are supplied to justify elastic wrapping or a collapse-strength conclusion.</p>",
                    sources: [{ id: "STRU935-00245", set: 23, question: 20 }]
                },
                {
                    id: "flexure-principal-axes-and-unsymmetrical-bending",
                    title: "Principal-axis bending is distinct from shear-centre torsion",
                    html: "<p>For a homogeneous section in elastic bending without axial force, choose centroidal principal axes y and z, so the product of area is zero. Take x, y, z as a right-handed system, with y vertical. The section properties are I<sub>z</sub> = ∫y<sup>2</sup> dA and I<sub>y</sub> = ∫z<sup>2</sup> dA. Resolving the internal moment into its two components gives <strong>σ = M<sub>y</sub>z/I<sub>y</sub> − M<sub>z</sub>y/I<sub>z</sub></strong>.</p>" +
                        "<p>A moment not aligned with a principal axis generally causes bending about both axes, with an inclined neutral axis obtained by setting σ = 0. This is the issue in <strong>unsymmetrical bending</strong>. Even a geometrically symmetric rectangle can bend this way under an oblique load; an unsymmetrical section can instead bend about a single principal axis. Cross-section appearance alone is not a sufficient test.</p>" +
                        "<p>The <strong>shear centre</strong> is the cross-sectional point through which a transverse resultant must act to avoid its associated twisting moment. Loading away from that point can add torsion. It is not a neutral axis, which is a line of zero longitudinal bending stress. The bank’s explanation conflates torsion caused by an offset transverse load with principal-axis misalignment; none of its listed statements supplies the general criterion correctly.</p>",
                    sources: [{ id: "STRU935-00210", set: 20, question: 20 }]
                },
                {
                    id: "flexure-uniform-strength-tapers",
                    title: "Uniform strength and economical variation of section",
                    html: "<p>A beam of uniform section keeps its geometry constant, whereas a beam of <strong>uniform bending strength</strong> varies the section to use a chosen permissible outer-fibre stress f efficiently. In the elementary elastic model, <strong>Z<sub>e</sub>(x) = |M(x)|/f</strong>. It does not mean that the moment, second moment of area or deflection is uniform. The bank associates such material savings with large spans, but span alone cannot prove economy.</p>" +
                        "<p><em>Syllabus-only elaboration of the assigned uniform-strength concept:</em> for a rectangular cantilever under a free-end force P, |M(x)| = P(L − x). At constant depth d, b(x) = 6P(L − x)/(fd<sup>2</sup>), so the ideal width tapers linearly. At constant width b, <strong>d(x) = √[6P(L − x)/(bf)]</strong>; the squared depth varies linearly with distance from the free end. These profiles follow from Z<sub>e</sub> = bd<sup>2</sup>/6, not from an assumption of constant EI.</p>" +
                        "<p>The mathematical taper tends to zero section where moment vanishes. A real member still needs material for shear transfer, point-load bearing, fabrication, durability and stability. Deflection must be obtained with the actual variable I(x). Minimum dimensions, serviceability and manufacturing cost can outweigh theoretical bending-material savings, so an economical design is not established by the bank’s span label alone.</p>",
                    sources: [{ id: "STRU935-00330", set: 31, question: 17 }]
                },
                {
                    id: "column-failure-and-euler-assumptions",
                    title: "Crushing, instability and the domain of Euler theory",
                    html: "<p>A stocky compression member is commonly limited by direct compressive yielding or crushing. A long slender member may lose lateral stability while its material is still elastic. Intermediate members require treatment of inelasticity and imperfections rather than unconditional use of Euler’s elastic result. These are different mechanisms, not three universally fixed slenderness-number bands.</p>" +
                        "<p>The elementary Euler model assumes an <strong>initially straight, homogeneous, prismatic, linearly elastic column</strong>, a central conservative compressive load P, known ideal end restraints and small lateral perturbations. It excludes initial crookedness and load eccentricity from the ideal eigenvalue calculation. Below the first critical load the straight configuration is stable against the relevant small perturbation; at that load the linearized model admits a nonzero buckling mode. The calculation identifies instability, not a prescribed post-buckling displacement or ultimate material stress.</p>" +
                        "<p>The direct compression P/A does not disappear. A perfectly straight column has zero bending stress before bifurcation, whereas a displaced or imperfect column develops additional bending, of order P times its lateral offset. Therefore the bank’s competing descriptions of direct stress as negligible or less than bending stress are not general stress inequalities. The robust distinction is <strong>buckling-controlled rather than crushing-controlled behaviour</strong>.</p>" +
                        "<p><strong>Bank-prompted companion, Rankine:</strong> the elementary combined expression 1/P<sub>R</sub> = 1/P<sub>c</sub> + 1/P<sub>E</sub> links a crushing estimate P<sub>c</sub> = f<sub>c</sub>A with an Euler estimate P<sub>E</sub>. Here f<sub>c</sub> is the adopted crushing strength. It approaches the crushing estimate for stocky members and Euler for slender ones. Practical Rankine-type coefficients and their applicable materials require calibration; the name alone supplies neither a universal design rule nor an allowable load.</p>",
                    sources: [
                        { id: "DESI787-00037", set: 5, question: 31 },
                        { id: "DESI787-00075", set: 9, question: 31 },
                        { id: "STRU935-00200", set: 19, question: 21 },
                        { id: "STRU935-00201", set: 19, question: 22 },
                        { id: "STRU935-00219", set: 21, question: 17 },
                        { id: "STRU935-00220", set: 21, question: 18 },
                        { id: "STRU935-00221", set: 21, question: 19 }
                    ]
                },
                {
                    id: "column-euler-derivation-and-slenderness",
                    title: "Euler’s eigenvalue and the inverse-square slenderness law",
                    html: "<p>For an ideal pin-ended column of length L, let u(x) be a small lateral displacement. Equilibrium and bending compatibility give <strong>EIu″ + Pu = 0</strong>. Setting k<sup>2</sup> = P/EI gives u = C sin(kx) + D cos(kx), where C and D are displacement constants. The end conditions u(0) = u(L) = 0 eliminate D and require sin(kL) = 0 for nonzero C.</p>" +
                        "<p>The lowest nonzero mode has kL = π, hence <strong>P<sub>cr</sub> = π<sup>2</sup>EI/L<sup>2</sup></strong>. Higher integer multiples give higher eigenvalues, not the first loss of stability. Introducing effective length L<sub>e</sub> = KL generalizes the ideal result to <strong>P<sub>cr</sub> = π<sup>2</sup>EI/(KL)<sup>2</sup></strong>. In a formula written with L alone, establish whether L means actual or effective length.</p>" +
                        "<p>For the relevant axis, <strong>r = √(I/A)</strong> is radius of gyration and <strong>λ = L<sub>e</sub>/r</strong> is dimensionless slenderness. Dividing Euler load by A gives <strong>σ<sub>cr</sub> = π<sup>2</sup>E/λ<sup>2</sup></strong>. Doubling λ quarters critical stress. Equivalently, λ varies with the inverse square root of critical stress, not its simple reciprocal. With E in N/mm<sup>2</sup>, I in mm<sup>4</sup> and L<sub>e</sub> in mm, P<sub>cr</sub> is in N.</p>" +
                        "<p>If f<sub>p</sub> is a material’s proportional-limit stress, requiring Euler stress not to exceed it gives the ideal comparison <strong>λ ≥ π√(E/f<sub>p</sub>)</strong>. This is a material-dependent elastic-domain check, not a complete design acceptance criterion. The bank’s 32 &lt; λ &lt; 120 medium-column band is a convention in that item; without material and design context it is not universal.</p>",
                    sources: [
                        { id: "STRU935-00203", set: 19, question: 24 },
                        { id: "STRU935-00206", set: 20, question: 16 },
                        { id: "STRU935-00208", set: 20, question: 18 },
                        { id: "STRU935-00202", set: 19, question: 23 }
                    ]
                },
                {
                    id: "column-end-restraints-and-effective-length",
                    title: "Effective length: translations and rotations both matter",
                    html: "<p>The effective length is the length of an ideal pin-ended member with the same EI and critical load. End conditions refer to the <strong>buckling plane</strong>: a pin restrains transverse position but allows rotation; a clamp restrains both; a free end allows both. The classical restrained-end cases below exclude relative sidesway of the restrained supports. Actual frame sway, partial fixity and bracing require their own stability model.</p>" +
                        "<table><thead><tr><th scope='col'>Ideal end condition</th><th scope='col'>K and effective length</th><th scope='col'>Load relative to pin–pin at the same L and EI</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Fixed–free</th><td>K = 2; L<sub>e</sub> = 2L.</td><td>1/4.</td></tr>" +
                        "<tr><th scope='row'>Pinned–pinned</th><td>K = 1; L<sub>e</sub> = L.</td><td>1.</td></tr>" +
                        "<tr><th scope='row'>Fixed–pinned</th><td>K ≈ 0.699156; L<sub>e</sub> ≈ 0.699L.</td><td>About 2.046.</td></tr>" +
                        "<tr><th scope='row'>Fixed–fixed, no sidesway</th><td>K = 0.5; L<sub>e</sub> = L/2.</td><td>4.</td></tr></tbody></table>" +
                        "<p>In the first fixed–fixed mode, inflection points occur at L/4 and 3L/4. Their spacing is <strong>L/2</strong>, not L/4. This explains both the equivalent pin-ended length and the fourfold critical load. The fixed–free member has twice the actual length as its effective length and one-quarter the pin-ended critical load for otherwise identical data.</p>" +
                        "<p><em>Syllabus-only exact fixed–pinned extension:</em> its end conditions lead to tan μ = μ, where μ<sup>2</sup> = PL<sup>2</sup>/EI. The first nonzero root is approximately 4.493409, giving K = π/μ ≈ 0.699156. The elementary approximation <strong>L/√2 ≈ 0.707107L</strong> instead gives a load factor of 2. It is not the exact 0.699L solution.</p>" +
                        "<p>The separate bank item asking for a <em>recommended</em> fixed–fixed length keys 0.65L. That is a practical-table convention rather than the perfect-restraint Euler value 0.5L. No governing design standard is identified in the item, so 0.65L must not be presented as a universal replacement for the theoretical result.</p>",
                    sources: [
                        { id: "STRU935-00041", set: 5, question: 21 },
                        { id: "STRU935-00042", set: 5, question: 22 },
                        { id: "STRU935-00051", set: 6, question: 20 },
                        { id: "STRU935-00074", set: 8, question: 21 },
                        { id: "STRU935-00075", set: 8, question: 22 },
                        { id: "STRU935-00086", set: 9, question: 22 },
                        { id: "STRU935-00198", set: 19, question: 19 },
                        { id: "STRU935-00199", set: 19, question: 20 },
                        { id: "STRU935-00222", set: 21, question: 20 }
                    ]
                },
                {
                    id: "column-weakest-axis-and-section-efficiency",
                    title: "Find the weakest admissible buckling mode",
                    html: "<p>Calculate <strong>P<sub>cr,i</sub> = π<sup>2</sup>EI<sub>i</sub>/(K<sub>i</sub>L<sub>i</sub>)<sup>2</sup></strong> for each admissible flexural buckling axis i and take the lowest. If material, length and end restraint are identical about both axes, the least I, or least radius of gyration, governs. If bracing lengths or rotational restraints differ, the smallest I alone is not enough. Buckling <em>about</em> an axis produces transverse displacement perpendicular to that axis.</p>" +
                        "<p>Euler efficiency at fixed area improves when material is distributed away from the governing axis. For a circular tube with outer diameter D<sub>o</sub> and inner diameter D<sub>i</sub>, <strong>A = π(D<sub>o</sub><sup>2</sup> − D<sub>i</sub><sup>2</sup>)/4</strong> and I = π(D<sub>o</sub><sup>4</sup> − D<sub>i</sub><sup>4</sup>)/64. Dividing gives <strong>r<sup>2</sup> = (D<sub>o</sub><sup>2</sup> + D<sub>i</sub><sup>2</sup>)/16</strong> about every centroidal diametral axis.</p>" +
                        "<p>This explains why a tube is a useful answer for efficient all-direction global buckling resistance, whereas an I-section can be efficient about its major axis but weak about its minor axis. It is not an unrestricted optimisation theorem. Equal area alone does not limit outside diameter or wall slenderness, and Euler theory omits local wall buckling. A real shape comparison needs dimensional constraints, bracing and local-stability checks before any section is declared best.</p>",
                    sources: [
                        { id: "STRU935-00207", set: 20, question: 17 },
                        { id: "STRU935-00223", set: 21, question: 21 }
                    ]
                },
                {
                    id: "column-load-scaling-equivalence-and-safety",
                    title: "Worked Euler scaling, equivalent lengths and safe load",
                    html: "<p>For two ideal Euler columns, <strong>P<sub>2</sub>/P<sub>1</sub> = (E<sub>2</sub>I<sub>2</sub>)/(E<sub>1</sub>I<sub>1</sub>) × [K<sub>1</sub>L<sub>1</sub>/(K<sub>2</sub>L<sub>2</sub>)]<sup>2</sup></strong>. The two bank rod questions keep material, cross-section and pinned ends unchanged. Reducing length from 2 m to 1 m therefore gives P<sub>2</sub> = 1 kN × (2/1)<sup>2</sup> = <strong>4 kN</strong>. The shorter rod must still lie within Euler’s elastic-buckling domain for this scaling to represent its governing limit.</p>" +
                        "<p>For the bank’s equivalent-column problem, let the original fixed–fixed member have actual length L and the new fixed–free member actual length L<sub>c</sub>, with the same EI. Equal critical loads require equal effective lengths: <strong>L/2 = 2L<sub>c</sub></strong>. Hence <strong>L<sub>c</sub> = L/4</strong>. This is the new physical length; the shared effective length is L/2. If the physical lengths were instead equal, fixed–fixed and fixed–free Euler loads would have the ratio 16:1.</p>" +
                        "<p>The <strong>critical or crippling load</strong> in Euler theory marks elastic instability. A <strong>working or safe load</strong> is a permitted service load, not automatically that eigenvalue, an ultimate load or a factored action. Under a specifically stated elementary safety-factor model, P<sub>work</sub> = P<sub>cr</sub>/S with S &gt; 1. No numerical factor S is supplied in these terminology items. Actual acceptance also requires material strength, imperfections, other failure modes and the applicable design rules.</p>",
                    sources: [
                        { id: "DESI787-00057", set: 7, question: 32 },
                        { id: "DESI787-00076", set: 9, question: 32 },
                        { id: "STRU935-00044", set: 5, question: 24 },
                        { id: "STRU935-00204", set: 20, question: 14 },
                        { id: "STRU935-00205", set: 20, question: 15 }
                    ]
                },
                {
                    id: "column-eccentric-compression-and-circular-core",
                    title: "Assigned eccentric-load application: the circular core",
                    html: "<p>The circular-core question involves combined axial compression and bending, <strong>not pure bending</strong>. Consider a short homogeneous, linearly elastic solid circular column, with compressive force P acting at eccentricity e from the centroid. Neglect secondary moment from lateral deflection. Direct compression P/A combines with a moment of magnitude Pe.</p>" +
                        "<p>For this paragraph let p denote a positive <em>compressive</em> stress magnitude, so the earlier tension-positive stress is σ = −p. The extreme values are <strong>p<sub>max,min</sub> = P/A ± Pec/I</strong>. Avoiding tension requires p<sub>min</sub> ≥ 0, or <strong>e ≤ I/(Ac) = r<sup>2</sup>/c</strong>, where c is the extreme-fibre distance in the bending direction.</p>" +
                        "<p>For a solid circle of diameter D, A = πD<sup>2</sup>/4, I = πD<sup>4</sup>/64 and c = D/2. Therefore the limiting eccentricity is <strong>D/8</strong>. Rotational symmetry makes the no-tension core a concentric circle of <strong>radius D/8 and diameter D/4</strong>. The bank asks for the diameter, so confusing these two dimensions changes the answer by a factor of two.</p>" +
                        "<p>At the boundary one extreme fibre has zero stress; strict compression everywhere requires e &lt; D/8. The core condition alone does not establish a safe column load or prevent Euler buckling. A hollow section has a different I/A, and a slender eccentrically loaded column needs secondary-deflection effects; neither may silently be substituted into this elementary solid-circle check.</p>",
                    sources: [{ id: "STRU935-00293", set: 1, question: 24 }]
                }
            ],
            gaps: [
                "The assigned items do not supply a complete nonsymmetric beam-loading diagram or an off-centre point-load calculation. General integration and extremum checks elaborate the syllabus; central-load and moment-area shortcuts remain conditional on the stated geometry and boundaries.",
                "No assigned item directly asks for cantilever end-couple deflection, the exact fixed–pinned Euler eigencondition, or a taper-profile derivation. Those passages are explicitly syllabus-only extensions, not additional model-question coverage.",
                "No verified material grade, proportional-limit or yield dataset, effective-length design standard, or constrained section-cost dataset is supplied. The notes establish no universal slenderness cutoff, steel wrapping acceptance, practical effective-length recommendation or numerical allowable column load.",
                "Unsymmetrical bending, uniform strength, Rankine behaviour and the solid circular core are included because assigned questions raise them. No worked thermal-gradient, composite-section, transformed-section or eccentric long-column calculation is assigned; those broader topics are not claimed as covered."
            ],
            cautions: [
                {
                    html: "<p><strong>Bank check: direct stress does not vanish in a long column.</strong> The two design-bank versions key different comparisons, negligible and less. Neither is universal: P/A remains present, and an ideal straight column below bifurcation has no bending stress. For a lateral offset Δ, the approximate stress ratio is (PΔc/I)/(P/A) = Δc/r<sup>2</sup>, which depends on deflection. Euler’s bending-instability description must not be read as zero axial stress or a specified post-buckling stress ratio.</p>",
                    sources: [
                        { id: "DESI787-00037", set: 5, question: 31 },
                        { id: "DESI787-00075", set: 9, question: 31 },
                        { id: "STRU935-00220", set: 21, question: 18 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: neutral-axis and shear qualifications.</strong> Zero bending stress defines the neutral axis; maximum shear there is the solid-rectangle result under nonzero transverse shear, not a universal consequence of symmetry or simple supports. Pure bending has zero transverse shear everywhere. Centroid coincidence requires homogeneous elastic bending with no axial-force resultant, not every possible deformed beam.</p>",
                    sources: [
                        { id: "STRU935-00003", set: 2, question: 16 },
                        { id: "STRU935-00034", set: 5, question: 14 },
                        { id: "STRU935-00237", set: 22, question: 23 },
                        { id: "STRU935-00341", set: 32, question: 15 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: elastic stress is not demonstrated collapse.</strong> Both 200 N/mm<sup>2</sup> keys require b = 40 mm and vertical d = 60 mm. Rotating that rectangle gives 300 N/mm<sup>2</sup>. No material yield or collapse data justify the stem’s collapse wording; the worked result is explicitly an elastic calculation with an assumed orientation.</p>",
                    sources: [
                        { id: "STRU935-00046", set: 6, question: 15 },
                        { id: "STRU935-00085", set: 9, question: 21 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: incorrect 84 kN m moment-resistance key.</strong> The printed 40 mm width, 400 mm depth and 15 N/mm<sup>2</sup> stress give fbd<sup>2</sup>/6 = 16 kN m. None of the options matches. An 84 kN m moment would require 78.75 N/mm<sup>2</sup> on that section. Do not silently enlarge a dimension or reinterpret the stated units.</p>",
                    sources: [{ id: "STRU935-00209", set: 20, question: 19 }]
                },
                {
                    html: "<p><strong>Bank check: unsymmetrical bending is not a shear-centre test.</strong> The keyed statement compares a shear-centre point with a neutral-axis line and conflates bending with torsion. Resolve the moment about principal centroidal axes to determine unsymmetrical bending. An offset from the shear centre can add twisting; neither an unsymmetrical cross-section nor an unsymmetrical moment diagram alone supplies the general criterion. No listed option states it correctly.</p>",
                    sources: [{ id: "STRU935-00210", set: 20, question: 20 }]
                },
                {
                    html: "<p><strong>Bank check: cantilever upper-fibre key conflicts with downward loading.</strong> A conventional downward-loaded cantilever hogs and has upper-fibre tension, contradicting the stored compressive key. A downward-loaded simply supported beam normally sags and has upper-fibre compression. Both stems omit load direction, so use the actual moment sign rather than treating either stress state as a property of the support arrangement.</p>",
                    sources: [
                        { id: "STRU935-00242", set: 23, question: 17 },
                        { id: "STRU935-00243", set: 23, question: 18 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: drum modulus, radius and elastic range.</strong> The printed E = 200 kN/m<sup>2</sup> gives 0.00166667 N/mm<sup>2</sup> using R = 1800 mm, not the keyed 1666.67 N/mm<sup>2</sup>. That key needs a million-fold modulus change to 200 GPa and the thin-strip radius approximation. A 3.6 m contact diameter instead puts the neutral radius near 1815 mm. Even the hypothetical corrected-modulus stress needs a material elastic-range check; neither the units nor yielding may be silently repaired.</p>",
                    sources: [{ id: "STRU935-00245", set: 23, question: 20 }]
                },
                {
                    html: "<p><strong>Bank check: support-slope and midspan-load shortcuts.</strong> Maximum slope at simple supports is conditional on the loading and curvature diagram, not a universal point-location rule. The other item asks for midspan deflection but does not explicitly put its point load at the centre; WL<sup>3</sup>/(48EI) requires that extra loading condition. Check zero-slope and zero-curvature locations, as well as boundaries, instead of inferring them from the requested result.</p>",
                    sources: [
                        { id: "STRU935-00195", set: 19, question: 17 },
                        { id: "STRU935-00105", set: 11, question: 18 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: end-couple senses are missing.</strong> ML<sup>2</sup>/(8EI) is the midspan magnitude for equal, opposite-sense external end couples producing constant internal moment in a constant-EI simply supported beam. Merely saying a couple acts at both ends does not specify that arrangement. Same-sense couples require a different moment diagram; M must also retain its force × length units.</p>",
                    sources: [{ id: "STRU935-00106", set: 11, question: 19 }]
                },
                {
                    html: "<p><strong>Bank check: missing moment-area diagram context.</strong> The multiplication 0.0075 × 1.33 gives 9.975 mm only when the quoted centroid belongs to the support-to-zero-slope curvature diagram used in the derivation. The supplied stem identifies neither that interval nor the loading and EI distribution. A whole-span bending-moment centroid is not interchangeable with it, so the arithmetic reproduces the key conditionally rather than validating a missing figure.</p>",
                    sources: [{ id: "STRU935-00196", set: 1, question: 20 }]
                },
                {
                    html: "<p><strong>Bank check: independent does not mean necessarily unequal.</strong> Pin-connected members may rotate independently but can have equal rotations under a particular loading. A rigid joint enforces one compatible global rotation, which need not be zero. A stationary ground-fixed support enforces zero rotation; pins and rollers can also happen to have zero slope, so the word can makes the fixed-support choice less precise than must.</p>",
                    sources: [
                        { id: "STRU935-00212", set: 20, question: 22 },
                        { id: "STRU935-00213", set: 20, question: 23 },
                        { id: "STRU935-00214", set: 20, question: 24 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: linear elastic-curve theory is an approximation.</strong> The linear second-order answer assumes small slopes and a prescribed moment distribution. Exact geometric curvature gives a nonlinear relation. Bending-only deflection is the Euler–Bernoulli assumption, not a universal ranking of bending, shear, axial effects and external loads; deep beams and other load cases need the omitted mechanisms considered.</p>",
                    sources: [
                        { id: "STRU935-00217", set: 21, question: 15 },
                        { id: "STRU935-00218", set: 21, question: 16 },
                        { id: "STRU935-00211", set: 20, question: 21 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: pure-bending wording and circular versus parabolic geometry.</strong> Interpreting simple bending as pure bending gives constant moment, but its zero shear and zero distributed transverse load are also constant, so the constant-quantity choices are not mathematically exclusive. A circular arc additionally needs constant EI; the parabolic expression is its small-slope approximation, not evidence against the constant-curvature result.</p>",
                    sources: [
                        { id: "STRU935-00227", set: 22, question: 14 },
                        { id: "STRU935-00228", set: 22, question: 15 },
                        { id: "STRU935-00349", set: 32, question: 23 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: column classification and empirical range.</strong> The band 32 &lt; λ &lt; 120 is the medium-column convention used by the source, not a material-independent law. Euler validity depends on whether the predicted stress remains elastic. Rankine-type interpolation can connect crushing and buckling regimes, but its coefficients, material basis and design applicability cannot be supplied by the formula name alone.</p>",
                    sources: [
                        { id: "STRU935-00202", set: 19, question: 23 },
                        { id: "STRU935-00221", set: 21, question: 19 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: retain the square in Euler’s stress law.</strong> The keyed inverse proportional wording is incomplete: σ<sub>cr</sub> = π<sup>2</sup>E/λ<sup>2</sup>, so critical stress is inversely proportional to the square of slenderness. If slenderness is the dependent variable, λ is inversely proportional to √σ<sub>cr</sub>. A reciprocal first-power calculation would give the wrong scaling.</p>",
                    sources: [{ id: "STRU935-00206", set: 20, question: 16 }]
                },
                {
                    html: "<p><strong>Bank check: theoretical and recommended effective lengths differ.</strong> Perfect fixed–fixed restraint without sidesway gives L/2; the quarter-point inflections do not make the effective length L/4. The separate recommended-value item keys 0.65L without naming its governing standard. Keep that practical convention separate from exact Euler theory. Likewise, fixed–pinned 0.699L and the elementary L/√2 approximation are not identical.</p>",
                    sources: [
                        { id: "STRU935-00041", set: 5, question: 21 },
                        { id: "STRU935-00222", set: 21, question: 20 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: weakest axis and tubular efficiency need constraints.</strong> Least I governs only when effective lengths and admissible restraint conditions are comparable about the candidate axes. Otherwise compare EI/(KL)<sup>2</sup>. A tube can distribute area efficiently, but equal area alone supplies no diameter or wall-thickness constraint and Euler theory omits local buckling; it does not prove a universal optimum among the named shapes.</p>",
                    sources: [
                        { id: "STRU935-00207", set: 20, question: 17 },
                        { id: "STRU935-00223", set: 21, question: 21 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: strength and economy are not geometry-only guarantees.</strong> Section modulus controls elastic bending resistance only after permissible material stress and the governing axis are specified. A uniform-strength taper can save bending material on a long span, but shear, deflection, stability, minimum section size and fabrication cost can govern. The bank’s merely and large-span wording should not be treated as a complete design or economic criterion.</p>",
                    sources: [
                        { id: "STRU935-00246", set: 23, question: 21 },
                        { id: "STRU935-00330", set: 31, question: 17 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: total load is not UDL intensity.</strong> The 8/5 comparison assumes identical spans, E and I, with the same total load W. A full-span UDL then has w = W/L. The fixed-ended result is WL<sup>3</sup>/(384EI), or wL<sup>4</sup>/(384EI), under zero end translation and rotation. The current dimensionally consistent keys are retained; do not reintroduce an extra power of L or compare unequal beams without their stiffness ratios.</p>",
                    sources: [
                        { id: "STRU935-00045", set: 6, question: 14 },
                        { id: "STRU935-00084", set: 9, question: 20 },
                        { id: "STRU935-00049", set: 6, question: 18 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: core diameter and strict compression.</strong> For the solid homogeneous circular-section model, D/8 is the limiting eccentricity and core radius; D/4 is the core diameter asked for. At that limit the farthest fibre has zero stress, so strictly compressive stress everywhere requires an interior load position. The no-tension result assumes negligible secondary bending and is not a buckling or safe-load check.</p>",
                    sources: [{ id: "STRU935-00293", set: 1, question: 24 }]
                }
            ]
        }
    });
})();