(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0406: {
            code: "ACiE0406",
            questionCount: 58,
            blocks: [
                {
                    id: "indeterminacy-and-method-selection",
                    title: "Restraints, redundants and method selection",
                    html: "<p>A <strong>continuous beam</strong> extends over more than two supports with flexural continuity between its spans. An intermediate vertical support does not automatically insert a hinge into the beam: adjacent member-end moments can be nonzero while balancing at the joint. Actual hinges, releases and support directions must be identified before counting indeterminacy.</p>" +
                        "<table><thead><tr><th scope='col'>Method family</th><th scope='col'>Primary unknowns</th><th scope='col'>Equations solved</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Force or flexibility</th><td>Independent redundant forces and moments</td><td>Compatibility of the released movements</td></tr>" +
                        "<tr><th scope='row'>Displacement or stiffness</th><td>Independent joint translations and rotations</td><td>Equilibrium at the free coordinates</td></tr></tbody></table>" +
                        "<p>Both families must ultimately satisfy <strong>equilibrium, compatibility and the force-deformation law</strong>. The degree of static indeterminacy, DSI, counts independent redundants; the degree of kinematic indeterminacy, DKI, counts independent movements after restraints and modelling assumptions. A force method is often economical when DSI &lt; DKI, but convenient releases and simple integrations matter too. The stiffness method is not a force method merely because it eventually calculates reactions.</p>",
                    sources: [
                        { id: "STRU935-00011", set: 2, question: 24 },
                        { id: "STRU935-00065", set: 7, question: 23 },
                        { id: "STRU935-00123", set: 13, question: 14 },
                        { id: "STRU935-00131", set: 13, question: 21 }
                    ]
                },
                {
                    id: "flexibility-compatibility-and-unit-actions",
                    title: "Flexibility: restore the released compatibility",
                    html: "<p>Release r independent redundants to obtain a <strong>stable primary structure</strong>, not a mechanism. Choose a positive direction for each redundant X<sub>j</sub> and its work-conjugate movement Δ<sub>j</sub>. Compute the load-only movements Δ<sub>i</sub><sup>0</sup>, then impose one unit redundant at a time.</p>" +
                        "<p><strong>Δ<sub>i</sub><sup>0</sup> + Σ f<sub>ij</sub>X<sub>j</sub> = Δ<sub>i</sub><sup>s</sup></strong>, for i = 1 to r. Here Δ<sub>i</sub><sup>s</sup> is the prescribed support or release movement, usually zero. Thus r independent redundants require r independent compatibility equations.</p>" +
                        "<p>The coefficient <strong>f<sub>ij</sub></strong> is movement at coordinate i caused by a unit generalized force at j, with the other independent generalized forces zero. The resulting movements form <strong>column j</strong> of the flexibility matrix; the other movements are not held at zero. A rotational coordinate is excited by a unit couple, not a unit transverse force.</p>" +
                        "<p>For small, linear-elastic bending deformation, <strong>f<sub>ij</sub> = ∫ m<sub>i</sub>m<sub>j</sub> ds/(EI)</strong> over all members, where m<sub>i</sub> is bending moment per unit action at i. Add axial or shear-deformation contributions when those effects are retained. Settlement, temperature and fabrication errors enter the compatibility balance rather than being invented as extra applied loads.</p>",
                    sources: [
                        { id: "STRU935-00124", set: 13, question: 15 },
                        { id: "STRU935-00139", set: 14, question: 18 },
                        { id: "STRU935-00141", set: 14, question: 20 }
                    ]
                },
                {
                    id: "reciprocity-inverses-stability-and-units",
                    title: "Reciprocity, inverses, stability and units",
                    html: "<p>For a <strong>linear conservative elastic system</strong> with consistent work-conjugate coordinates, reciprocal work gives f<sub>ij</sub> = f<sub>ji</sub>; the corresponding stiffness matrix is symmetric too. This is a statement about the mechanical model and coordinate definitions, not an unconditional property of every nonlinear or nonconservative analysis.</p>" +
                        "<p><strong>f = K<sup>−1</sup></strong> applies only to invertible force-displacement maps on the <strong>same independent coordinates with the same restraints</strong>. A redundant-force flexibility matrix is not automatically the inverse of a global nodal stiffness matrix. An unrestrained beam has rigid-body modes and a singular stiffness matrix. Restrain those modes and check for mechanisms before solving; a stable elastic reduced system is positive definite when every remaining nonzero movement stores strain energy.</p>" +
                        "<table><thead><tr><th scope='col'>Coordinate pair</th><th scope='col'>Stiffness</th><th scope='col'>Flexibility</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Force / translation</th><td>N/m</td><td>m/N</td></tr>" +
                        "<tr><th scope='row'>Moment / rotation</th><td>N·m/rad</td><td>rad/(N·m)</td></tr></tbody></table>" +
                        "<p>Mixed translation-rotation matrices also contain coupling coefficients with different force-length dimensions. Radians are dimensionless in dimensional analysis but must be used numerically, not degrees. Changing metres to millimetres or scaling rotations requires consistent scaling of their conjugate forces; otherwise numerical symmetry and comparisons can be misleading.</p>",
                    sources: [
                        { id: "STRU935-00125", set: 13, question: 16 },
                        { id: "STRU935-00127", set: 1, question: 17 }
                    ]
                },
                {
                    id: "elastic-propped-cantilever-and-contraflexure",
                    title: "Elastic propped cantilever: zero moment is not a hinge",
                    html: "<p><em>Worked syllabus extension:</em> take a prismatic beam fixed at A, vertically propped at B, length L and constant EI, with a full-span downward UDL w and no settlement. Release the <strong>actual prop</strong>. Downward tip deflection of the primary cantilever is wL<sup>4</sup>/(8EI); an upward prop force R<sub>B</sub> contributes −R<sub>B</sub>L<sup>3</sup>/(3EI).</p>" +
                        "<p>Compatibility gives <strong>R<sub>B</sub> = 3wL/8</strong> and R<sub>A</sub> = 5wL/8. With x measured from A and <strong>sagging section moment positive</strong>, M(x) = −wL<sup>2</sup>/8 + 5wLx/8 − wx<sup>2</sup>/2. Its interior zero is <strong>x = L/4 from the fixed end</strong>; the other zero is the prop at x = L.</p>" +
                        "<p>The interior zero is a <strong>point of contraflexure</strong>, not a manufactured or released hinge. The beam remains continuous and its rotation does not jump there. Releasing that section would change the structural model. A plastic hinge at collapse is a different concept and is not located by setting M = 0.</p>" +
                        "<p>For w = 10 kN/m, L = 4 m and EI = 20000 kN·m<sup>2</sup>, the released tip would move down <strong>16 mm</strong>. The prop supplies <strong>15 kN</strong>, the fixed-end vertical reaction is 25 kN, and the fixed-end section moment is −20 kN·m. Contraflexure lies 1 m from A, or 3 m from B, under these elastic loading assumptions.</p>",
                    sources: [{ id: "STRU935-00019", set: 3, question: 21 }]
                },
                {
                    id: "two-hinged-parabolic-arch-thrust",
                    title: "Two-hinged parabolic arch: derive the thrust",
                    html: "<p>A stable planar two-hinged arch has four support-reaction components but only three global equilibrium equations, leaving one redundant. For equal-level supports under vertical loading, choose the inward horizontal thrust H. Let M<sub>0</sub> be the moment in the corresponding simply supported beam and y the arch ordinate above the support chord. With sagging positive, <strong>M = M<sub>0</sub> − Hy</strong>.</p>" +
                        "<p>For fixed support spacing, small linear-elastic deformation and <strong>bending energy only</strong>, U = ∫ M<sup>2</sup> ds/(2EI). Compatibility ∂U/∂H = 0 gives <strong>H = [∫ M<sub>0</sub>y ds/(EI)] / [∫ y<sup>2</sup> ds/(EI)]</strong>. Integrate along the whole arch; ds = √[1 + (dy/dx)<sup>2</sup>] dx is arc length. H is one reaction for the load case, not a separate value at every point. Constant EI cancels between the integrals, but the geometric weighting does not disappear.</p>" +
                        "<p><em>Parabolic worked extension:</em> for span L, rise h and y = 4hx(L − x)/L<sup>2</sup>, a full-span UDL w <strong>per unit horizontal length</strong> gives M<sub>0</sub> = wx(L − x)/2. Hence <strong>H = wL<sup>2</sup>/(8h)</strong> and M = 0 throughout this bending-only model. With L = 20 m, h = 4 m and w = 12 kN/m, H = <strong>150 kN</strong> and each vertical reaction is 120 kN.</p>" +
                        "<p>This is the funicular load-shape match, not a claim that all parabolic arches have zero bending. Partial loading, point loads or a UDL measured along the arch change that match. Axial shortening, temperature changes, support movement and any retained shear deformation modify compatibility and can invalidate the bending-only thrust result.</p>",
                    sources: [
                        { id: "STRU935-00061", set: 7, question: 19 },
                        { id: "STRU935-00073", set: 8, question: 20 }
                    ]
                },
                {
                    id: "slope-deflection-equations-and-signs",
                    title: "Slope-deflection with one explicit sign convention",
                    html: "<p>For a member AB, take M<sub>AB</sub> and M<sub>BA</sub> as moments <strong>applied to the member</strong> at A and B, both positive clockwise. Joint rotations θ<sub>A</sub>, θ<sub>B</sub> and chord rotation ψ are also clockwise-positive, in radians. Use small-displacement, prismatic Euler-Bernoulli bending with constant EI and neglect axial and shear deformation in these equations.</p>" +
                        "<p><strong>M<sub>AB</sub> = M<sub>AB</sub><sup>F</sup> + (2EI/L)(2θ<sub>A</sub> + θ<sub>B</sub> − 3ψ)</strong>.</p>" +
                        "<p><strong>M<sub>BA</sub> = M<sub>BA</sub><sup>F</sup> + (2EI/L)(2θ<sub>B</sub> + θ<sub>A</sub> − 3ψ)</strong>.</p>" +
                        "<table><thead><tr><th scope='col'>Load on horizontal AB</th><th scope='col'>Left fixed-end moment</th><th scope='col'>Right fixed-end moment</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Downward full UDL w</th><td>−wL<sup>2</sup>/12</td><td>+wL<sup>2</sup>/12</td></tr>" +
                        "<tr><th scope='row'>Downward central point load P</th><td>−PL/8</td><td>+PL/8</td></tr></tbody></table>" +
                        "<p>The superscript F denotes the load-only moments with both end rotations and translations restrained. After inserting actual support conditions, solve <strong>joint equilibrium</strong> for the unknown rotations and sway. With these member-action signs, ΣM<sub>jk</sub> equals the external clockwise joint couple C<sub>j</sub>; at a joint without a couple the sum is zero. Frame sway also requires translational equilibrium. Do not mix these end-action signs with sagging-positive section-moment diagrams without conversion.</p>",
                    sources: [
                        { id: "STRU935-00076", set: 8, question: 23 },
                        { id: "STRU935-00134", set: 13, question: 24 }
                    ]
                },
                {
                    id: "settlement-and-chord-rotation",
                    title: "Support movement rotates the chord, not necessarily the joints",
                    html: "<p>For an initially horizontal member directed from left A to right B, let v<sub>A</sub> and v<sub>B</sub> be positive <strong>upward</strong>. The clockwise-positive chord rotation is <strong>ψ = (v<sub>A</sub> − v<sub>B</sub>)/L</strong>. If A goes down while B goes up, the chord rotates <strong>counterclockwise</strong>, so ψ is negative in this convention.</p>" +
                        "<p><em>Worked extension:</em> A settles 10 mm, B rises 5 mm and L = 5 m. Thus ψ = (−10 − 5)/5000 = <strong>−0.003 rad</strong>. If both end rotations remain fixed at zero and EI = 20000 kN·m<sup>2</sup>, each clockwise member-end moment increment is −6EIψ/L = <strong>+72 kN·m</strong>, before adding any load-only fixed-end moments.</p>" +
                        "<p>A straight chord has no curvature merely because it tilts. Curvature depends on how the member must deform relative to that chord. For an unloaded member allowed to follow a rigid-body rotation, θ<sub>A</sub> = θ<sub>B</sub> = ψ makes both slope-deflection bending terms vanish. Prescribed settlement and unknown joint rotation are therefore different inputs, not interchangeable signs.</p>",
                    sources: [{ id: "STRU935-00133", set: 13, question: 23 }]
                },
                {
                    id: "span-counts-versus-independent-displacements",
                    title: "Count spans, end moments and independent movements separately",
                    html: "<p>Four successive supports A, B, C and D, with no overhangs or extra internal releases, define <strong>three spans</strong>: AB, BC and CD. Each span has two end-moment expressions, giving <strong>six slope-deflection equations and six member-end moment quantities</strong>. That does not establish six independent displacement unknowns.</p>" +
                        "<table><thead><tr><th scope='col'>All vertical support translations held</th><th scope='col'>Independent rotations before condensation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>A and D fixed; beam continuous at B and C</th><td>θ<sub>B</sub>, θ<sub>C</sub>: two; θ<sub>A</sub> = θ<sub>D</sub> = 0.</td></tr>" +
                        "<tr><th scope='row'>A and D simple ends; beam continuous at B and C</th><td>θ<sub>A</sub>, θ<sub>B</sub>, θ<sub>C</sub>, θ<sub>D</sub>: four, with zero end moments at A and D.</td></tr></tbody></table>" +
                        "<p>The simple-end rotations can be eliminated using their zero-moment conditions, leaving two interior rotations in a condensed formulation. At an intermediate support, M<sub>BA</sub> + M<sub>BC</sub> = 0 without an external couple; this does not require either term individually to vanish. Add independent sway translations only when the frame permits them. Known settlements are prescribed displacements, while genuinely fixed-end rotations are known zeros.</p>",
                    sources: [
                        { id: "STRU935-00135", set: 14, question: 14 },
                        { id: "STRU935-00136", set: 14, question: 15 },
                        { id: "STRU935-00137", set: 14, question: 16 }
                    ]
                },
                {
                    id: "rotational-stiffness-and-end-constraints",
                    title: "Rotational stiffness is a boundary-condition result",
                    html: "<p>Define k<sub>A</sub> = M<sub>A</sub>/θ<sub>A</sub> for an unloaded prismatic member of length L. In the following table, <strong>A is held against transverse translation</strong>. The far-end conditions specify which other coordinates are held and which are allowed to respond.</p>" +
                        "<table><thead><tr><th scope='col'>Conditions at B</th><th scope='col'>Near-end rotational stiffness</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Translation and rotation fixed</th><td>4EI/L</td></tr>" +
                        "<tr><th scope='row'>Translation fixed; moment zero, rotation free</th><td>3EI/L</td></tr>" +
                        "<tr><th scope='row'>Rotation fixed; transverse translation free with zero transverse force</th><td>EI/L</td></tr></tbody></table>" +
                        "<p>The second result follows by setting M<sub>BA</sub> = 0, which gives θ<sub>B</sub> = −θ<sub>A</sub>/2 when ψ = 0. The third is a specifically defined <strong>rotation-restrained sliding guide</strong>, not a universal interpretation of the word guided. A fully free far end can follow a near-end rotation as a rigid link and supplies no rotational stiffness under this test.</p>" +
                        "<p>If B is fixed but <strong>A can also translate freely</strong>, a real cantilever tip couple instead gives |θ<sub>A</sub>| = |M<sub>A</sub>|L/(EI), so the tip moment/rotation ratio is EI/L, not 4EI/L. E is elastic modulus, I is second moment of area, and EI/L has moment units per radian; E/L is dimensionally wrong. For EI = 20000 kN·m<sup>2</sup> and L = 5 m, the three tabulated stiffnesses are 16000, 12000 and 4000 kN·m/rad respectively.</p>",
                    sources: [
                        { id: "STRU935-00066", set: 7, question: 24 },
                        { id: "STRU935-00071", set: 8, question: 18 },
                        { id: "STRU935-00129", set: 13, question: 19 },
                        { id: "STRU935-00130", set: 13, question: 20 }
                    ]
                },
                {
                    id: "moment-distribution-and-joint-balance",
                    title: "Moment distribution: balance, distribute and carry over",
                    html: "<p>Moment distribution iteratively solves the joint-equilibrium equations underlying slope-deflection, principally for indeterminate beams and frames. Lock the unknown joint rotations, calculate load-only end moments, and then release and balance one joint at a time while keeping the other working restraints explicit.</p>" +
                        "<ol><li>At joint j, compute clockwise unbalance U<sub>j</sub> = ΣM<sub>jk</sub> − C<sub>j</sub>.</li>" +
                        "<li>For each connected active member, calculate <strong>DF<sub>jk</sub> = k<sub>jk</sub>/Σk<sub>j</sub></strong>. The distribution factors sum to 1 when the total stiffness is nonzero.</li>" +
                        "<li>Apply the <strong>opposite</strong> balancing increment: ΔM<sub>jk</sub> = −DF<sub>jk</sub>U<sub>j</sub>.</li>" +
                        "<li>Carry each increment to its far end using that member's actual restraint; repeat until joint residuals are negligible.</li></ol>" +
                        "<p><em>Complete one-joint example:</em> AB and BC each have L = 4 m and equal EI; A is fixed, C is a simple end, and all support translations are held. A downward 8 kN/m UDL acts only on AB. Initially M<sub>AB</sub> = −10.667 and M<sub>BA</sub> = +10.667 kN·m; the unloaded BC moments are zero. Using 4EI/L for BA and the condensed 3EI/L for BC gives <strong>DF<sub>BA</sub> = 4/7, DF<sub>BC</sub> = 3/7</strong>.</p>" +
                        "<p>The balancing increments at B are −6.095 and −4.571 kN·m. Half of the BA increment carries to fixed A; none carries to simple C. Final moments are <strong>M<sub>AB</sub> = −13.714, M<sub>BA</sub> = +4.571, M<sub>BC</sub> = −4.571, M<sub>CB</sub> = 0 kN·m</strong>. Only B has an independent rotation here, so this balance completes the solution. A sway frame additionally needs its translation and storey-force equilibrium; locking sway forever solves a different structure.</p>",
                    sources: [
                        { id: "STRU935-00067", set: 8, question: 14 },
                        { id: "STRU935-00142", set: 14, question: 21 }
                    ]
                },
                {
                    id: "carry-over-versus-applied-cantilever-couple",
                    title: "Carry-over is not a substitute for equilibrium",
                    html: "<p><strong>Carry-over</strong> is the far-end moment increment induced by a near-end balancing action under specified restraints. With both transverse translations held and the far rotation fixed, ΔM<sub>A</sub> = 4EIθ<sub>A</sub>/L and ΔM<sub>B</sub> = 2EIθ<sub>A</sub>/L. Hence <strong>ΔM<sub>B</sub> = +ΔM<sub>A</sub>/2</strong> in the same clockwise-positive member-end action convention.</p>" +
                        "<p>A far simple end with no externally applied couple maintains zero end moment, so its incremental carry-over is zero and its rotation adjusts. An unrestrained far end similarly supplies no restraint moment in the corresponding moment-distribution increment. Reversing from actions on a member to actions on a joint, or to a different section-moment sign convention, can reverse a displayed sign; it cannot change equilibrium.</p>" +
                        "<p><strong>Different problem:</strong> apply a clockwise couple M at the genuinely free tip of a cantilever. Whole-member equilibrium requires a <strong>fixed-support reaction couple −M</strong>, zero shear for this couple-only loading, and constant internal bending-moment magnitude |M|. The support moment is not zero merely because the other end is free.</p>" +
                        "<p><em>Worked extension:</em> M = 10 kN·m, L = 3 m and EI = 15000 kN·m<sup>2</sup> give a −10 kN·m fixed reaction, tip rotation magnitude ML/(EI) = <strong>0.002 rad</strong>, and tip deflection magnitude ML<sup>2</sup>/(2EI) = <strong>3 mm</strong>. This applied-load problem must not be replaced by a zero-carry-over mnemonic for another set of constraints.</p>",
                    sources: [
                        { id: "STRU935-00143", set: 14, question: 22 },
                        { id: "STRU935-00144", set: 14, question: 23 },
                        { id: "STRU935-00145", set: 1, question: 18 },
                        { id: "STRU935-00146", set: 14, question: 24 }
                    ]
                },
                {
                    id: "direct-stiffness-coefficients-and-assembly",
                    title: "Direct stiffness: coefficients, assembly and restraints",
                    html: "<p>Choose independent nodal displacements d and their work-conjugate forces. <strong>K<sub>ij</sub></strong> is force at coordinate i caused by a <strong>unit displacement at j with all other displacements held at zero</strong>. These calculated forces form column j. This experiment is different from applying a unit force while allowing the other coordinates to move in a flexibility calculation.</p>" +
                        "<p>For each element, relate end actions to end displacements and load-only fixed-end actions. Transform local directions into the global coordinate system, then <strong>add contributions at shared coordinates</strong>. Assembly enforces common joint movements; the equations Kd = p enforce equilibrium, with p including the consistent nodal effect of member loading.</p>" +
                        "<p>Partition free coordinates f from prescribed coordinates c. Solve <strong>K<sub>ff</sub>d<sub>f</sub> = p<sub>f</sub> − K<sub>fc</sub>d<sub>c</sub></strong>, then recover member forces and support reactions from assembled internal actions minus applied loads. Do not try to invert the unrestrained global matrix. The primary unknowns are displacements, even though reaction recovery is an important output.</p>" +
                        "<p><em>Assembly extension:</em> three equal spans of length L and rigidity EI, fixed outer ends and no support translation, leave two interior rotations. Their rotational stiffness matrix has diagonal entries <strong>8EI/L</strong> and off-diagonal entries <strong>2EI/L</strong>: each interior diagonal receives 4EI/L from each adjoining span. This systematic addition, restraint handling and force recovery make the displacement approach suitable for computation.</p>",
                    sources: [
                        { id: "STRU935-00128", set: 13, question: 18 },
                        { id: "STRU935-00132", set: 13, question: 22 },
                        { id: "STRU935-00138", set: 14, question: 17 }
                    ]
                },
                {
                    id: "beam-bending-matrix-with-clockwise-rotations",
                    title: "The four-coordinate beam bending matrix",
                    html: "<p>Take AB from left to right, translations v positive upward, rotations θ positive clockwise, and actions V upward and M clockwise <strong>applied to the member</strong>. Order d = (v<sub>A</sub>, θ<sub>A</sub>, v<sub>B</sub>, θ<sub>B</sub>) and the corresponding actions as (V<sub>A</sub>, M<sub>A</sub>, V<sub>B</sub>, M<sub>B</sub>). For an unloaded prismatic Euler-Bernoulli member, <strong>k = (EI/L<sup>3</sup>) times the following table</strong>.</p>" +
                        "<table><thead><tr><th scope='col'>Action / coordinate</th><th scope='col'>v<sub>A</sub></th><th scope='col'>θ<sub>A</sub></th><th scope='col'>v<sub>B</sub></th><th scope='col'>θ<sub>B</sub></th></tr></thead><tbody>" +
                        "<tr><th scope='row'>V<sub>A</sub></th><td>12</td><td>−6L</td><td>−12</td><td>−6L</td></tr>" +
                        "<tr><th scope='row'>M<sub>A</sub></th><td>−6L</td><td>4L<sup>2</sup></td><td>6L</td><td>2L<sup>2</sup></td></tr>" +
                        "<tr><th scope='row'>V<sub>B</sub></th><td>−12</td><td>6L</td><td>12</td><td>6L</td></tr>" +
                        "<tr><th scope='row'>M<sub>B</sub></th><td>−6L</td><td>2L<sup>2</sup></td><td>6L</td><td>4L<sup>2</sup></td></tr></tbody></table>" +
                        "<p>For v<sub>A</sub> = δ upward and all other coordinates zero, <strong>V<sub>B</sub> = −12EIδ/L<sup>3</sup></strong> and <strong>M<sub>B</sub> = −6EIδ/L<sup>2</sup></strong>. The negative clockwise moment means counterclockwise. With EI = 20000 kN·m<sup>2</sup>, L = 4 m and δ = 2 mm, these are <strong>−7.5 kN</strong> and <strong>−15 kN·m</strong>. The stiffness coefficients must be multiplied by an actual displacement to obtain actions.</p>" +
                        "<p>A counterclockwise-positive rotation convention instead gives +6EI/L<sup>2</sup> for the far-moment coefficient in this first column. Change the associated force and displacement signs together, transforming both rows and columns; do not import one coefficient while retaining incompatible clockwise labels. Distributed loads require adding their fixed-end action vector to kd.</p>",
                    sources: [{ id: "STRU935-00140", set: 14, question: 19 }]
                },
                {
                    id: "continuous-beam-influence-lines-and-muller-breslau",
                    title: "Continuous-beam influence lines and Müller-Breslau",
                    html: "<p>An influence-line ordinate η(x) is one specified response caused by a unit moving load at x. Unlike a bending-moment diagram, the response location stays fixed while the <strong>load position moves</strong>. Linear-elastic continuous beams generally have curved, piecewise influence lines; dependence on load position is not the same as material nonlinearity.</p>" +
                        "<p><strong>Müller-Breslau principle:</strong> release the restraint conjugate to the required response and impose the corresponding positive unit movement. For a reaction, release its support translation. For a section moment, release moment continuity and impose a <strong>unit relative angular jump</strong> while retaining the other connections. For shear, release shear transfer and impose the conjugate relative transverse slip. A sketch gives qualitative shape and signs; quantitative ordinates require the released elastic system's correctly solved and normalized displacement shape, not an arbitrary mechanism sketch.</p>" +
                        "<p>With a unit vertical force as reference, reaction and shear ordinates are dimensionless and moment ordinates have length units. For loads acting in the reference direction, <strong>response = ΣP<sub>i</sub>η(x<sub>i</sub>) + ∫w(x)η(x) dx</strong>. Preserve positive and negative areas when placing a moving load or integrating a UDL.</p>" +
                        "<p><em>Quantitative syllabus extension:</em> consider two equal continuous spans AB and BC, each length L and constant EI, with simple outer ends, no settlement or internal hinges, and ideal supports that sustain either reaction sign. For a unit downward load on AB at t = x/L, the upward middle-reaction ordinate is <strong>η<sub>B</sub> = t(3 − t<sup>2</sup>)/2</strong>, for 0 ≤ t ≤ 1; the other span is its mirror. At t = 1/2 the ordinate is <strong>11/16 = 0.6875</strong>, so a 40 kN load there contributes <strong>27.5 kN</strong> at B. This cubic curve remains perfectly linear with respect to the load magnitude.</p>",
                    sources: [
                        { id: "STRU935-00102", set: 11, question: 15 },
                        { id: "STRU935-00111", set: 11, question: 24 }
                    ]
                },
                {
                    id: "approximate-portal-inflection-assumptions",
                    title: "Approximate portal analysis and inflection assumptions",
                    html: "<p><em>Bank extension to the listed analysis methods:</em> a basic lateral-load portal approximation often places inflection points at mid-height of columns and mid-span of beams. These assumed zero-moment sections simplify equilibrium calculations; they are not physical hinges or exact positions guaranteed by the word portal.</p>" +
                        "<p>For a column with no transverse distributed loading, shear is constant and its moment diagram is linear. If opposing end-moment magnitudes are m<sub>b</sub> at the base and m<sub>t</sub> at the top, the zero lies <strong>a = Lm<sub>b</sub>/(m<sub>b</sub> + m<sub>t</sub>)</strong> from the base. Equal magnitudes give L/2. The assumed <strong>L/3</strong> location corresponds to m<sub>t</sub> = 2m<sub>b</sub>, not to every partially fixed support.</p>" +
                        "<p><em>Illustration:</em> a 3 m column with opposing 20 and 40 kN·m end moments has its zero 1 m from the base. Actual partial fixity should be represented by the support's moment-rotation relation, such as a rotational spring, and solved with the rest of the frame. Gravity loading, unequal EI, unequal spans and different joint restraints can move or remove the assumed points of inflection.</p>",
                    sources: [
                        { id: "STRU935-00103", set: 11, question: 16 },
                        { id: "STRU935-00197", set: 19, question: 18 }
                    ]
                },
                {
                    id: "column-analogy-as-an-elementary-force-method",
                    title: "Column analogy: an elementary force method",
                    html: "<p><em>Bank extension:</em> classical column analogy is a <strong>force or flexibility method</strong>. The member centreline is represented by an analogous section whose strip weight is ds/(EI). The load-only bending-moment diagram supplies the analogous loading, and an analogous axial-plus-bending stress distribution supplies a redundant-moment correction. This is a mathematical analogy, not a column buckling calculation.</p>" +
                        "<p>For appropriate planar released frames, a correction moment can be represented by <strong>a + bx + cy</strong>, with the coefficient units chosen so each term is a moment. The three coefficients are determined by weighted compatibility using the corresponding unit-moment patterns. This explains the familiar <strong>up-to-three-redundant elementary implementation</strong>; it does not prove that mathematics forbids larger flexibility systems.</p>" +
                        "<p>Choose a stable release system and define its coordinates before using the analogy. More complicated structures can require additional independent compatibility equations, generalized force methods or direct stiffness assembly. Slope-deflection, moment distribution and Kani's rotation-contribution method instead belong to the displacement family because their working unknowns represent joint movements.</p>",
                    sources: [
                        { id: "STRU935-00122", set: 12, question: 24 },
                        { id: "STRU935-00162", set: 16, question: 18 }
                    ]
                },
                {
                    id: "first-yield-plastic-stress-and-neutral-axis",
                    title: "First yield, plastic stress blocks and the neutral axis",
                    html: "<p>In elastic pure bending of a homogeneous section, stress varies linearly with distance from the centroidal neutral axis. The <strong>yield moment M<sub>y</sub> = f<sub>y</sub>Z<sub>e</sub> = f<sub>y</sub>I/c</strong> first brings an extreme fibre to yield stress f<sub>y</sub>; c is the governing extreme-fibre distance. It does not mean every fibre has yielded. The elastic core shrinks as further moment produces yielding through more of the depth.</p>" +
                        "<p>For ideal fully plastic pure bending with uniform and equal tensile/compressive yield stress, <strong>M<sub>p</sub> = f<sub>y</sub>Z<sub>p</sub></strong>, where Z<sub>p</sub> = ∫|y| dA and y is measured from the plastic neutral axis, PNA. Force equilibrium requires f<sub>y</sub>A<sub>c</sub> = f<sub>y</sub>A<sub>t</sub>, so <strong>A<sub>c</sub> = A<sub>t</sub></strong>. The PNA bisects area under these assumptions; it need not coincide with the elastic centroidal axis of an unsymmetrical section.</p>" +
                        "<p>A symmetry axis aligned with the bending neutral-axis direction also bisects the area, so the two descriptions can overlap. With axial compression N taken positive, the fully plastic force balance becomes <strong>f<sub>y</sub>(A<sub>c</sub> − A<sub>t</sub>) = N</strong>; unequal yield stresses likewise require a strength-weighted balance rather than equal areas. Neither an axial load nor a composite section may be silently inserted into the equal-area rule.</p>",
                    sources: [
                        { id: "STRU935-00225", set: 21, question: 23 },
                        { id: "STRU935-00148", set: 15, question: 15 }
                    ]
                },
                {
                    id: "section-moduli-shape-factors-and-unit-checks",
                    title: "Section moduli, shape factors and dimensional checks",
                    html: "<p>The <strong>shape factor α = M<sub>p</sub>/M<sub>y</sub> = Z<sub>p</sub>/Z<sub>e</sub></strong> measures section reserve from first yield to ideal full plastic bending, not whole-frame redistribution. In the following table, b is rectangular width, d is bending depth or circle diameter, and the section is homogeneous with equal tensile/compressive yield stress and no axial force.</p>" +
                        "<table><thead><tr><th scope='col'>Section and axis</th><th scope='col'>Z<sub>e</sub></th><th scope='col'>Z<sub>p</sub></th><th scope='col'>α</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Rectangle, axis parallel to b</th><td>bd<sup>2</sup>/6</td><td>bd<sup>2</sup>/4</td><td>1.5</td></tr>" +
                        "<tr><th scope='row'>Solid circle, diameter axis</th><td>πd<sup>3</sup>/32</td><td>d<sup>3</sup>/6</td><td>16/(3π) ≈ 1.698</td></tr>" +
                        "<tr><th scope='row'>Typical rolled I, major axis</th><td>I/c</td><td>First moments of the two plastic stress areas</td><td>About 1.10–1.20</td></tr></tbody></table>" +
                        "<p>For general pure bending, Z<sub>p</sub> = A<sub>c</sub>y<sub>c</sub> + A<sub>t</sub>y<sub>t</sub>, using positive centroid distances from the PNA. I-section flanges already lie near the extreme fibres, so their extra reserve is relatively small. Actual flange/web proportions and the bending axis determine the ratio. A solid circle is <strong>not</strong> an exception with Z<sub>p</sub> &lt; Z<sub>e</sub>.</p>" +
                        "<p><strong>Bank rectangle:</strong> b = 200 mm and d = 400 mm give Z<sub>p</sub> = 200 × 400<sup>2</sup>/4 = <strong>8 × 10<sup>6</sup> mm<sup>3</sup></strong>; Z<sub>e</sub> is only 5.333 × 10<sup>6</sup> mm<sup>3</sup>. Do not substitute the elastic modulus when plastic capacity is requested.</p>" +
                        "<p><strong>Bank stress calculation:</strong> 1 kN·m = 10<sup>6</sup> N·mm. Thus M<sub>p</sub> = 120 kN·m and Z<sub>p</sub> = 5 × 10<sup>4</sup> mm<sup>3</sup> give <strong>f<sub>y</sub> = 120 × 10<sup>6</sup>/(5 × 10<sup>4</sup>) = 2400 N/mm<sup>2</sup></strong>, not 240. The supplied shape factor 1.2 is irrelevant because Z<sub>p</sub> is already given. An unusually high result is a reason to flag the data/key, not silently change an exponent.</p>",
                    sources: [
                        { id: "DESI787-00059", set: 7, question: 34 },
                        { id: "DESI787-00060", set: 8, question: 25 },
                        { id: "DESI787-00197", set: 22, question: 27 },
                        { id: "STRU935-00114", set: 12, question: 16 },
                        { id: "STRU935-00115", set: 12, question: 17 },
                        { id: "STRU935-00119", set: 12, question: 21 },
                        { id: "STRU935-00121", set: 12, question: 23 },
                        { id: "STRU935-00147", set: 15, question: 14 }
                    ]
                },
                {
                    id: "ideal-hinge-versus-longitudinal-yielded-zone",
                    title: "An ideal hinge is not a universal length of yielded beam",
                    html: "<p>An ideal concentrated plastic hinge is a <strong>point representation</strong> that permits relative rotation while transmitting M<sub>p</sub>. A finite longitudinal region with some yielded fibres is a different quantity. Its length depends on the moment gradient, section shape, loading stage and material model.</p>" +
                        "<p>For a simply supported uniform beam carrying a central point load P, M(x) = Px/2 on the left half and the peak is PL/4. At the ideal collapse stage, PL/4 = M<sub>p</sub>. Let α = M<sub>p</sub>/M<sub>y</sub>. The boundary of the region with M ≥ M<sub>y</sub> is x = L/(2α) from each support, so its total length is <strong>l<sub>y</sub> = L(1 − 1/α)</strong>.</p>" +
                        "<p>Only for a <strong>rectangular section with α = 1.5</strong> does this give L/3. For a 6 m beam the region is 2 m long, centred at mid-span. Most sections in that region are only <strong>partly yielded through their depth</strong>; only the peak section reaches M<sub>p</sub> in the ideal moment diagram. This does not establish a 2 m fully plastified length. A numerical hinge-length model requires its own curvature and rotation-capacity assumptions, and L/3 is not a universal answer for unspecified sections.</p>",
                    sources: [{ id: "STRU935-00043", set: 5, question: 23 }]
                },
                {
                    id: "plastic-mechanisms-work-and-collapse-conditions",
                    title: "Plastic mechanisms, virtual work and collapse checks",
                    html: "<p>Elementary rigid-plastic collapse analysis concentrates incremental inelastic rotations at plastic hinges and treats the intervening lengths as <strong>rigid links during the mechanism motion</strong>. It does not assert that those lengths were perfectly rigid throughout the earlier elastic loading. Existing real pins contribute no plastic moment resistance.</p>" +
                        "<p>For an admissible small mechanism displacement, <strong>ΣP<sub>i</sub>δ<sub>i</sub> + ∫wδ dx + ΣC<sub>i</sub>θ<sub>i</sub> = ΣM<sub>p,j</sub>|Δφ<sub>j</sub>|</strong>. The left side is external work by forces, distributed loads and applied couples; Δφ<sub>j</sub> is the <strong>relative rotation across hinge j</strong>. Moment times rotation and force times displacement both have work units. If two adjoining links rotate oppositely by θ, their hinge jump is 2θ, not θ.</p>" +
                        "<table><thead><tr><th scope='col'>Collapse check</th><th scope='col'>Required condition</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Equilibrium</th><td>Loads, reactions and internal actions balance.</td></tr>" +
                        "<tr><th scope='row'>Yield bound</th><td>|M(x)| ≤ M<sub>p</sub>(x) everywhere.</td></tr>" +
                        "<tr><th scope='row'>Mechanism</th><td>The hinge pattern permits a compatible nonzero collapse movement.</td></tr></tbody></table>" +
                        "<p>A statically admissible moment field within the yield bounds supplies a <strong>lower bound</strong> on collapse load; a kinematically admissible mechanism supplies an <strong>upper bound</strong>. Agreement establishes the exact ideal result. Counting r + 1 new hinges is only a shortcut for a suitable complete bending mechanism, not a substitute for examining local mechanisms and existing releases. Adequate ductility and rotation capacity, stable braced sections, and absence of premature buckling or unmodelled axial interaction are essential assumptions.</p>",
                    sources: [
                        { id: "STRU935-00068", set: 8, question: 15 },
                        { id: "STRU935-00120", set: 12, question: 22 }
                    ]
                },
                {
                    id: "simply-supported-beam-plastic-collapse",
                    title: "Simply supported collapse: point load versus UDL",
                    html: "<p>A simply supported uniform beam already has two real end hinges. One new mid-span plastic hinge creates its symmetric bending mechanism. If each half rotates by magnitude θ, the mid-span movement is δ = Lθ/2 and the plastic rotation there is 2θ; the end pins dissipate no plastic work.</p>" +
                        "<p>For a central point load, Pδ = 2M<sub>p</sub>θ gives <strong>P<sub>coll</sub> = 4M<sub>p</sub>/L</strong>. For a full UDL, the area under the triangular displacement shape is Lδ/2, so wLδ/2 = 2M<sub>p</sub>θ gives <strong>w<sub>coll</sub> = 8M<sub>p</sub>/L<sup>2</sup></strong>. Here P is force in kN, w is intensity in kN/m, L is in metres and M<sub>p</sub> in kN·m.</p>" +
                        "<p><strong>Bank application:</strong> w = 25 kN/m on L = 6 m gives maximum moment <strong>wL<sup>2</sup>/8 = 112.5 kN·m</strong>. It equals M<sub>p</sub> only if this load is stated or assumed to be the collapse load, or if one is finding the limiting required ideal capacity. Load and span alone cannot identify the actual capacity of an unspecified section.</p>" +
                        "<p><em>Comparison extension:</em> a beam with M<sub>p</sub> = 112.5 kN·m and L = 6 m has central point-load collapse at <strong>75 kN</strong>, whereas its full-UDL collapse has intensity 25 kN/m and total load 150 kN. A total load and an intensity cannot be inserted into the same formula without conversion.</p>",
                    sources: [{ id: "STRU935-00116", set: 12, question: 18 }]
                },
                {
                    id: "fixed-fixed-central-load-collapse",
                    title: "Fixed-fixed beam: the central-load collapse mechanism",
                    html: "<p>Take a fixed-fixed beam of span L, uniform positive and negative plastic capacity M<sub>p</sub>, and a central point load W. Its symmetric collapse mechanism has plastic hinges at both fixed ends and at mid-span. Assume adequate rotation capacity and no competing instability.</p>" +
                        "<p>Each half rotates by magnitude θ, so the load moves <strong>δ = θL/2</strong>. The two end hinges rotate by θ each relative to the fixed supports. At the middle, the two links rotate oppositely, giving a <strong>relative hinge rotation 2θ</strong>. Therefore <strong>W<sub>coll</sub>(θL/2) = M<sub>p</sub>(θ + 2θ + θ) = 4M<sub>p</sub>θ</strong>.</p>" +
                        "<p>Consequently <strong>W<sub>coll</sub> = 8M<sub>p</sub>/L</strong>, or M<sub>p</sub> = W<sub>coll</sub>L/8. A static check gives end section moments −M<sub>p</sub> and central moment +M<sub>p</sub>: their difference 2M<sub>p</sub> equals the half-span shear W/2 times L/2. The intervening linear moment diagrams remain within the plastic bound.</p>" +
                        "<p>The elastic end and mid-span moment magnitudes also have coefficient WL/8, but <strong>first fibre yield occurs at W<sub>y</sub> = 8M<sub>y</sub>/L</strong>, not at 8M<sub>p</sub>/L. Equal geometric coefficients do not make yield moment and plastic moment identical. With L = 6 m, M<sub>p</sub> = 120 kN·m and rectangular-section α = 1.5, M<sub>y</sub> = 80 kN·m, first yield is <strong>106.667 kN</strong>, and ideal collapse is <strong>160 kN</strong>. Counting the central rotation only once produces the bank's incorrect 6M<sub>p</sub>/L.</p>",
                    sources: [
                        { id: "STRU935-00069", set: 8, question: 16 },
                        { id: "STRU935-00117", set: 12, question: 19 },
                        { id: "STRU935-00118", set: 12, question: 20 }
                    ]
                },
                {
                    id: "propped-cantilever-full-udl-plastic-mechanism",
                    title: "Propped cantilever: full-UDL plastic collapse",
                    html: "<p>The familiar 0.414L location belongs to a <strong>specific plastic-collapse problem</strong>: fixed A, simple prop B, full-span UDL w, uniform positive/negative M<sub>p</sub>, ideal ductile bending and no competing instability. Let a be the distance from A to the sagging plastic hinge C, and b = L − a its distance from B. B is an existing real hinge; new plastic hinges form at A and C.</p>" +
                        "<p>For downward movement δ at C, the link rotations have magnitudes δ/a and δ/b. Plastic rotation is δ/a at A and δ/a + δ/b at C. External work is wLδ/2, hence the trial mechanism gives <strong>w = (2M<sub>p</sub>/L)(2/a + 1/b)</strong>. Minimize this upper bound over 0 &lt; a &lt; L: −2/a<sup>2</sup> + 1/b<sup>2</sup> = 0, giving a = √2b.</p>" +
                        "<p>Thus <strong>a = (2 − √2)L ≈ 0.585786L from the fixed end</strong>, <strong>b = (√2 − 1)L ≈ 0.414214L from the prop</strong>, and <strong>w<sub>coll</sub> = (6 + 4√2)M<sub>p</sub>/L<sup>2</sup> ≈ 11.656854M<sub>p</sub>/L<sup>2</sup></strong>.</p>" +
                        "<p>The equilibrium diagram M(x) = −M<sub>p</sub> + R<sub>A</sub>x − wx<sup>2</sup>/2, with R<sub>A</sub> = wL/2 + M<sub>p</sub>/L, reaches +M<sub>p</sub> at x = a and zero at B without exceeding either yield bound. This verifies the mechanism result. C carries <strong>maximum sagging moment, not zero moment</strong>.</p>" +
                        "<p><em>Worked extension:</em> L = 6 m and M<sub>p</sub> = 120 kN·m give a = <strong>3.515 m</strong>, b = <strong>2.485 m</strong> and w<sub>coll</sub> = <strong>38.856 kN/m</strong>. Different load patterns or capacities move the hinge; the elastic full-UDL contraflexure position L/4 from A is not this plastic hinge.</p>",
                    sources: [{ id: "STRU935-00019", set: 3, question: 21 }]
                },
                {
                    id: "section-reserve-versus-structural-load-factor",
                    title: "Section reserve versus whole-structure load factor",
                    html: "<p>For a fixed loading pattern, the structural collapse load factor is <strong>λ<sub>c</sub> = P<sub>coll</sub>/P<sub>work</sub></strong>. The section shape factor α = M<sub>p</sub>/M<sub>y</sub> is a different ratio. Under an assumed working-stress limit σ<sub>allow</sub>, define n = f<sub>y</sub>/σ<sub>allow</sub>. If the section is stressed to that limit, M<sub>work</sub> = M<sub>y</sub>/n, so its <strong>section moment reserve M<sub>p</sub>/M<sub>work</sub> = αn</strong>.</p>" +
                        "<p>That product becomes a structural load ratio only when the relevant moment-to-load relationship makes the identification valid. A frame may redistribute moments and form another mechanism. For example, the full-UDL propped cantilever has elastic fixed-end moment magnitude wL<sup>2</sup>/8, but plastic collapse intensity (6 + 4√2)M<sub>p</sub>/L<sup>2</sup>. If its working load is limited by the elastic fixed-end stress, <strong>λ<sub>c</sub> = [(6 + 4√2)/8]αn</strong>, not simply αn.</p>" +
                        "<p><strong>Bank arithmetic under its stated stress assumption:</strong> α = 1.12 and n = 1.5 give section reserve 1.68. Increasing the allowable stress by 20% increases the corresponding allowable section moment by 1.2, so the revised reserve is <strong>1.12 × 1.5/1.2 = 1.4</strong>. This is an illustration of the supplied working-stress rule, <strong>not a current wind or earthquake code prescription</strong>, nor permission to increase allowable stresses in an actual project without the applicable design standard.</p>",
                    sources: [
                        { id: "DESI787-00062", set: 8, question: 27 },
                        { id: "STRU935-00113", set: 12, question: 15 },
                        { id: "STRU935-00149", set: 15, question: 16 }
                    ]
                }
            ],
            gaps: [
                "The 58 assigned questions emphasize method identification, coefficients and elementary plastic results. They supply no complete multi-redundant or sway-frame numerical dataset. The compatibility, settlement, assembly and moment-distribution examples here are original syllabus extensions, not additional source questions.",
                "Two-hinged parabolic arches are explicitly in this topic's scope. The assigned thrust expression is malformed and supplies no numerical arch geometry. The worked parabolic example assumes fixed support spacing and bending deformation only; coupled axial/shear deformation, temperature and support-movement calculations remain outside these worked examples.",
                "Qualitative Müller-Breslau influence lines and curved indeterminate-beam influence lines are present in the bank. No tabulated continuous-beam ordinates or moving-load train is supplied. The equal-span quantitative example and load-integration rule extend that syllabus coverage; arbitrary unequal-span influence-line calculations are not worked out here.",
                "Approximate portal rules and classical column analogy are assigned bank extensions to the named syllabus methods. Their midpoint, one-third and three-redundant shortcuts are labelled assumptions, not universal structural laws. The wind/earthquake allowable-stress arithmetic is not a verified current design-code rule.",
                "Elementary plastic examples assume adequate ductility, rotation capacity and stable sections. No supplied data establish local or lateral-torsional buckling resistance, axial-force interaction, strain hardening, cyclic behaviour or code-level design acceptance. An ambiguous load or support description cannot be uniquely repaired without those missing assumptions."
            ],
            cautions: [
                {
                    html: "<p><strong>Propped-cantilever hinge ambiguity:</strong> the 0.414L key is not a universal elastic hinge or contraflexure location. An elastic prismatic full-UDL beam has interior contraflexure at L/4 from the fixed end, with continuous rotation. The plastic full-UDL mechanism with uniform M<sub>p</sub> instead places a +M<sub>p</sub> hinge at (√2 − 1)L from the prop. The stem omits the load and stage assumptions, and its zero-moment-as-hinge explanation is incorrect.</p>",
                    sources: [{ id: "STRU935-00019", set: 3, question: 21 }]
                },
                {
                    html: "<p><strong>Plastic hinge length is underspecified:</strong> L/3 describes the region with M ≥ M<sub>y</sub> for a rectangular section of shape factor 1.5 under a central point load when the peak reaches M<sub>p</sub>. In general that yielded-region length is L(1 − 1/α). It is neither a universal concentrated-hinge length nor the length of material fully yielded through every section.</p>",
                    sources: [{ id: "STRU935-00043", set: 5, question: 23 }]
                },
                {
                    html: "<p><strong>Wrong circular-section exception:</strong> the keyed claim Z<sub>p</sub> &lt; Z<sub>e</sub> for a solid circle is false under ordinary homogeneous pure bending. The correct expressions are Z<sub>e</sub> = πd<sup>3</sup>/32 and Z<sub>p</sub> = d<sup>3</sup>/6, giving Z<sub>p</sub>/Z<sub>e</sub> = 16/(3π) ≈ 1.698. None of the named section types supplies the claimed exception; selecting a circular section as a speculative trick is not a valid derivation.</p>",
                    sources: [{ id: "DESI787-00197", set: 22, question: 27 }]
                },
                {
                    html: "<p><strong>Factor-of-ten yield-stress error:</strong> 120 kN·m divided by 5 × 10<sup>4</sup> mm<sup>3</sup> is <strong>2400 N/mm<sup>2</sup></strong>, not the keyed 240. The latter would require Z<sub>p</sub> = 5 × 10<sup>5</sup> mm<sup>3</sup>, or M<sub>p</sub> = 12 kN·m with the printed modulus, neither of which is supplied. Shape factor 1.2 does not enter M<sub>p</sub>/Z<sub>p</sub>; no offered stress matches the printed data.</p>",
                    sources: [{ id: "STRU935-00119", set: 12, question: 21 }]
                },
                {
                    html: "<p><strong>Applied load is not a measured section capacity:</strong> 25 kN/m over a 6 m simply supported span gives moment demand 112.5 kN·m. Equating that to M<sub>p</sub> requires a collapse-load or limiting-required-capacity assumption. Without section dimensions and material strength, the actual plastic capacity cannot be inferred merely from the load currently carried.</p>",
                    sources: [{ id: "STRU935-00116", set: 12, question: 18 }]
                },
                {
                    html: "<p><strong>Fixed-fixed central-load contradiction:</strong> the 6M<sub>p</sub>/L item counts the middle hinge rotation as θ instead of 2θ. Correct virtual work is W(θL/2) = M<sub>p</sub>(θ + 2θ + θ), giving <strong>W<sub>coll</sub> = 8M<sub>p</sub>/L</strong>. The separate 8M<sub>p</sub>/L and WL/8 keys have correct results but their explanations use dimensionally incomplete work expressions involving WL/4 and missing rotation factors. The elastic coefficient WL/8 does not equate first yield with full plastic capacity.</p>",
                    sources: [
                        { id: "STRU935-00117", set: 12, question: 19 },
                        { id: "STRU935-00069", set: 8, question: 16 },
                        { id: "STRU935-00118", set: 12, question: 20 }
                    ]
                },
                {
                    html: "<p><strong>Missing I and ambiguous end restraints:</strong> the E/L options omit the second moment of area. Standard 4EI/L for a fixed far end and 3EI/L for a pinned far end hold with both transverse translations restrained. A far guide that fixes rotation but permits force-free transverse movement gives EI/L under those explicit conditions. A near end genuinely free to translate under a tip couple also does not have the constrained 4EI/L value. The words guided roller or free end alone cannot settle these questions.</p>",
                    sources: [
                        { id: "STRU935-00066", set: 7, question: 24 },
                        { id: "STRU935-00071", set: 8, question: 18 },
                        { id: "STRU935-00129", set: 13, question: 19 },
                        { id: "STRU935-00130", set: 13, question: 20 }
                    ]
                },
                {
                    html: "<p><strong>Carry-over sign needs a convention:</strong> with a fixed far rotation and both translations held, the far-end increment is +M/2 when both member-end actions are clockwise-positive. The printed −M/2 may use an opposing end-action or section-moment convention; it is not a universal sign rule. Label actions on the member, actions on the joint and bending-diagram signs before comparing them.</p>",
                    sources: [{ id: "STRU935-00144", set: 14, question: 23 }]
                },
                {
                    html: "<p><strong>Wrong cantilever reaction:</strong> a real free-tip couple M requires an opposing fixed-support couple −M by whole-beam moment equilibrium and constant internal moment magnitude |M|. The zero key and its claim that no moment reaches the fixed end are incorrect for that loading. Zero incremental carry-over to an unrestrained far end in moment distribution is a different boundary-value problem.</p>",
                    sources: [{ id: "STRU935-00146", set: 14, question: 24 }]
                },
                {
                    html: "<p><strong>Settlement sign versus curvature:</strong> left support down and right support up rotates the chord counterclockwise. It is negative under the declared clockwise-positive convention, not a negative clockwise rotation. Tilting a straight chord does not itself create sagging curvature; actual joint rotations and curvature depend on the rotational restraints.</p>",
                    sources: [{ id: "STRU935-00133", set: 13, question: 23 }]
                },
                {
                    html: "<p><strong>Six moments are not six independent movements:</strong> four supports ordinarily create three spans and six member-end moment quantities. With all support translations held, fixed outer ends leave two interior rotations; simple outer ends give four rotations before their zero-moment equations are condensed. Fixed-end rotations are known zeros. The source explanation's changing counts and suggestion that all fixed rotations are unknown cannot define DKI.</p>",
                    sources: [{ id: "STRU935-00137", set: 14, question: 16 }]
                },
                {
                    html: "<p><strong>Reciprocity is conditional:</strong> the flexibility matrix is symmetric for the stated linear conservative elastic model with consistent work-conjugate coordinates. The word always should not be generalized to arbitrary nonconservative models or inconsistently scaled coordinates. Inversion also requires a stable restrained map on the same independent coordinate set; a free member's rigid-body modes make its stiffness singular.</p>",
                    sources: [{ id: "STRU935-00125", set: 13, question: 16 }]
                },
                {
                    html: "<p><strong>Beam-matrix notation and signs:</strong> the printed 1 in the denominators must denote length L. With upward translations and clockwise-positive moments applied to the member, a positive displacement at A with all other coordinates zero gives V<sub>B</sub>/δ = −12EI/L<sup>3</sup> and M<sub>B</sub>/δ = −6EI/L<sup>2</sup>. The positive moment coefficient is compatible with a counterclockwise-positive convention, not the clockwise label attached in the explanation. The coordinate and action convention must be stated before judging a sign.</p>",
                    sources: [{ id: "STRU935-00140", set: 14, question: 19 }]
                },
                {
                    html: "<p><strong>Malformed arch integrals:</strong> the printed numerator involving dy/dx is not the bending-only compatibility integral. Use <strong>H = [∫M<sub>0</sub>y ds/(EI)]/[∫y<sup>2</sup> ds/(EI)]</strong> for fixed spacing with the stated assumptions. Both integrals use actual arc length and flexural-rigidity weighting. Constant EI permits cancellation of EI, not replacement of ds by a slope factor.</p>",
                    sources: [{ id: "STRU935-00073", set: 8, question: 20 }]
                },
                {
                    html: "<p><strong>Influence-line qualifications:</strong> indeterminate-beam influence lines are generally piecewise curves, but zero or straight portions can occur in particular responses or regions. Curvature with changing load position does not imply nonlinear response to load magnitude. Müller-Breslau is already represented in the bank; its qualitative released shape becomes quantitative only with the correct unit movement and elastic normalization.</p>",
                    sources: [
                        { id: "STRU935-00111", set: 11, question: 24 },
                        { id: "STRU935-00102", set: 11, question: 15 }
                    ]
                },
                {
                    html: "<p><strong>Portal fractions are assumptions:</strong> midpoint inflection is a common approximate lateral-load portal rule. L/3 from a partially fixed base is another assumed end-moment pattern, not a universal consequence of partial fixity. Actual end stiffnesses, joint restraints and loading determine the moment zeros; introducing a physical hinge there would change the structure.</p>",
                    sources: [
                        { id: "STRU935-00103", set: 11, question: 16 },
                        { id: "STRU935-00197", set: 19, question: 18 }
                    ]
                },
                {
                    html: "<p><strong>Column-analogy scope:</strong> the three-redundant answer describes the familiar elementary planar implementation using analogous axial force and biaxial bending. It is not an absolute mathematical ceiling on generalized flexibility analysis. A larger structure needs an adequate set of independent compatibility equations, not an assertion that fourth-degree indeterminacy is impossible to analyse.</p>",
                    sources: [{ id: "STRU935-00162", set: 16, question: 18 }]
                },
                {
                    html: "<p><strong>Section reserve is not automatically frame collapse:</strong> shape factor times bending factor of safety gives M<sub>p</sub>/M<sub>work</sub> when the section is at the assumed allowable stress. The structural collapse/working-load ratio can also depend on redistribution and the governing mechanism. The 20% stress-increase example evaluates to <strong>1.4</strong>, but its arithmetic supplies neither a universal frame load factor nor a current wind/seismic design rule.</p>",
                    sources: [
                        { id: "STRU935-00113", set: 12, question: 15 },
                        { id: "STRU935-00149", set: 15, question: 16 },
                        { id: "DESI787-00062", set: 8, question: 27 }
                    ]
                },
                {
                    html: "<p><strong>Equal-area assumptions and overlapping options:</strong> the plastic neutral axis bisects area only for pure bending with no axial force and uniform equal tensile/compressive yield stress. A symmetry axis aligned with that bending direction also bisects area, so the source's plastic-axis and symmetry-axis options can overlap, including its combined option. The unqualified wording does not uniquely distinguish them for a symmetric section.</p>",
                    sources: [{ id: "STRU935-00148", set: 15, question: 15 }]
                }
            ]
        }
    });
})();