(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0404: {
            code: "ACiE0404",
            questionCount: 47,
            blocks: [
                {
                    id: "equilibrium-and-determinate-analysis",
                    title: "Equilibrium and determinate analysis",
                    html: "<p><strong>4.4 Determinate structures-1</strong> connects degree of determinacy, energy methods and virtual work to beam and portal-frame deflection. A stable, statically determinate model gives unique reactions and member actions from equilibrium alone. Its displacements still require deformation properties such as EA and EI.</p>" +
                        "<table><thead><tr><th scope='col'>Free body</th><th scope='col'>Independent rigid-body equilibrium equations</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Plane</th><td>ΣF<sub>x</sub> = 0, ΣF<sub>y</sub> = 0, ΣM<sub>z</sub> = 0: three equations.</td></tr>" +
                        "<tr><th scope='row'>Space</th><td>Three force sums and three moment sums: six equations.</td></tr></tbody></table>" +
                        "<p>Draw the whole-structure free body first, then isolate joints, members or sections. Reactions, axial forces, shears and bending moments follow from those appropriate free bodies, not necessarily from just three equations for the entire assembly. For X planar rigid parts and Y independent scalar force/couple unknowns, Y = 3X is only a counting condition. Action-reaction pairs must be represented consistently, and the equilibrium equations must have the required rank.</p>",
                    sources: [
                        { id: "STRU935-00156", set: 15, question: 23 },
                        { id: "STRU935-00157", set: 15, question: 24 },
                        { id: "STRU935-00168", set: 16, question: 24 },
                        { id: "STRU935-00295", set: 27, question: 24 }
                    ]
                },
                {
                    id: "support-constraints-and-geometric-stability",
                    title: "Support constraints and geometric stability",
                    html: "<p>A planar rigid body has two translations and one rotation to restrain. Count <strong>independent constraints</strong>, not support symbols. Reaction directions and their lever arms determine whether the body can resist an arbitrary force and moment.</p>" +
                        "<table><thead><tr><th scope='col'>Ideal planar support</th><th scope='col'>Reaction and restraint</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Smooth roller</th><td>One force normal to the supporting surface; motion along that surface remains free.</td></tr>" +
                        "<tr><th scope='row'>Pin</th><td>Two force components; translation restrained, rotation free.</td></tr>" +
                        "<tr><th scope='row'>Fixed end</th><td>Two force components and one couple; translation and rotation restrained.</td></tr></tbody></table>" +
                        "<p>Two rollers on horizontal surfaces cannot prevent horizontal translation. An inclined roller has an inclined normal reaction, not automatically a vertical one. If all available force-reaction lines are concurrent and no independent reaction couple exists, they cannot resist a moment about their intersection. All-parallel force restraints also leave a translation unrestrained. Even a pin plus a roller fails if the roller's reaction line passes through the pin. Sufficient counts therefore need independent orientation and nonzero lever arms.</p>" +
                        "<p>Fewer independent resisting force components than necessary equilibrium conditions indicate insufficient restraint in this ideal model, not an excess of restraint. Equilibrium under one specially aligned load does not establish geometric stability.</p>",
                    sources: [
                        { id: "STRU935-00169", set: 17, question: 14 },
                        { id: "STRU935-00170", set: 17, question: 15 },
                        { id: "STRU935-00173", set: 1, question: 19 },
                        { id: "STRU935-00328", set: 31, question: 15 }
                    ]
                },
                {
                    id: "plane-space-and-compound-truss-counts",
                    title: "Plane, space and compound truss counts",
                    html: "<p>For an ideal pin-jointed truss, m is the number of axial-force members, j the number of joints and r the number of scalar support-reaction components. Each plane joint supplies two force equations; each space joint supplies three.</p>" +
                        "<table><thead><tr><th scope='col'>Model</th><th scope='col'>Counting difference D<sub>c</sub></th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Plane truss</th><td>m + r − 2j; with r = 3, the determinate candidate has m = 2j − 3.</td></tr>" +
                        "<tr><th scope='row'>Space truss</th><td>m + r − 3j; not the rigid-jointed space-frame formula.</td></tr></tbody></table>" +
                        "<p>More precisely, D<sub>c</sub> = s − k, where s counts independent self-equilibrated force states and k counts first-order mechanisms of the restrained, unprestressed model. Only after k = 0 is established does D<sub>c</sub> give static indeterminacy. A negative count signals missing restraint; zero or positive counts do <strong>not</strong> prove stability. Collinear joints, dependent bars or poorly arranged supports can still leave mechanisms.</p>" +
                        "<p><strong>Bank count:</strong> j = 8, m = 11 and the usual three independent external restraints give D<sub>c</sub> = 11 + 3 − 16 = −2. Two suitably placed independent bars are the minimum count correction; two arbitrary additions need not stabilize the truss.</p>" +
                        "<p><strong>Compound construction:</strong> two disjoint stable planar subtrusses can be joined without adding joints by three bars that independently restrain their relative two translations and rotation. Then m = m<sub>1</sub> + m<sub>2</sub> + 3. Shared joints or parallel/concurrent connector arrangements require their own constraint check. The bank's term <em>pin-jointed space frame</em> denotes a space truss here, not a moment-resisting space frame.</p>",
                    sources: [
                        { id: "STRU935-00040", set: 5, question: 20 },
                        { id: "STRU935-00060", set: 7, question: 18 },
                        { id: "STRU935-00158", set: 16, question: 14 },
                        { id: "STRU935-00159", set: 16, question: 15 },
                        { id: "STRU935-00163", set: 16, question: 19 }
                    ]
                },
                {
                    id: "truss-joints-sections-and-force-polygons",
                    title: "Truss joints, sections and force polygons",
                    html: "<p>Ideal straight truss members with loads applied only at frictionless joints are two-force members. Start with an assumed tensile member force directed away from each isolated joint; a negative solution means compression. Joint equilibrium is a <strong>vector</strong> condition, ΣF = 0, equivalent in a plane to ΣF<sub>x</sub> = ΣF<sub>y</sub> = 0.</p>" +
                        "<ul><li><strong>Joints:</strong> work through joints with enough known forces to solve their remaining unknowns.</li><li><strong>Sections:</strong> cut selected members and use force and moment balance on one portion. Three cut unknowns are solvable only if the chosen equations are independent.</li><li><strong>Graphical analysis:</strong> a closed scaled force polygon expresses the same vector balance; scale and construction accuracy limit the result.</li></ul>" +
                        "<p>At an otherwise unloaded joint carrying just two non-collinear member forces, both must be zero. Two nonzero forces can balance only if equal, opposite and collinear. Because these forces are concurrent, their individual moments about the joint are already zero; the failure is in force balance, not a couple at that point. An unclosed polygon of concurrent forces has a nonzero resultant through the concurrency point and cannot reduce to a pure couple.</p>",
                    sources: [
                        { id: "STRU935-00323", set: 30, question: 20 },
                        { id: "STRU935-00324", set: 30, question: 21 },
                        { id: "STRU935-00335", set: 31, question: 21 },
                        { id: "STRU935-00356", set: 33, question: 19 }
                    ]
                },
                {
                    id: "rigid-frames-and-independent-releases",
                    title: "Rigid frames, releases and internal hinges",
                    html: "<p>A rigid plane-frame joint has two translations and one rotation; a rigid <strong>space-frame</strong> joint has three translations and three rotations. Rotations are absent from the ideal axial-only truss joint model. Do not use m + r − 3j for a rigid space frame.</p>" +
                        "<p>For a connected planar rigid-member model, the usual count is <strong>D<sub>c</sub> = 3m + r − 3j − c</strong>, where c is the number of independent internal force releases relative to the fully rigid model. Count members and end joints consistently. Support releases already represented in r must not be subtracted again; a multi-member hinge can represent more than one independent moment release. Rank and stability still need checking.</p>" +
                        "<p><strong>Bank calculation:</strong> without internal releases, m = 15, r = 3 and j = 14 give 45 + 3 − 42 = <strong>6</strong>. A determinate primary structure requires six independent force releases <em>chosen without creating a mechanism</em>. This is total indeterminacy, not external indeterminacy alone. A double-overhanging beam on a properly arranged pin and roller remains determinate: overhangs add no support reactions.</p>" +
                        "<p><strong>Modelling distinction:</strong> an ideal internal hinge transmits forces but no bending moment and permits relative member rotation while keeping the joined point together. A point of contraflexure is instead a load-dependent sign change of bending moment in a continuous member. Zero moment in one loading case does not authorize inserting a hinge or deleting a rotational compatibility condition.</p>",
                    sources: [
                        { id: "STRU935-00160", set: 16, question: 16 },
                        { id: "STRU935-00161", set: 16, question: 17 },
                        { id: "STRU935-00171", set: 17, question: 16 },
                        { id: "STRU935-00172", set: 17, question: 17 }
                    ]
                },
                {
                    id: "symmetry-and-deflection-boundaries",
                    title: "Structural symmetry and deflection boundaries",
                    html: "<p><strong>Structural symmetry</strong> requires reflected geometry, member stiffness/material properties and support conditions. Symmetric loading is a separate requirement. For a stable linear model with a unique response, symmetric structure plus symmetric loading gives a symmetric response; loading symmetry alone cannot repair asymmetric supports or stiffness.</p>" +
                        "<p><em>Deflection boundary-condition extension:</em> an immovable simple beam support fixes the supported translation but permits rotation. A fixed end fixes both translation and rotation. At an ordinary rigid frame joint, connected member ends share joint translations and rotation. A symmetric beam response has zero rotation at a smooth symmetry section, but can have its largest deflection there. A half-model must reproduce these actual compatibility conditions, not replace every symmetry cut by an assumed hinge or fixed support.</p>",
                    sources: [{ id: "STRU935-00126", set: 13, question: 17 }]
                },
                {
                    id: "elastic-work-and-member-strain-energy",
                    title: "Elastic work and member strain energy",
                    html: "<p>For an initially unstressed linear elastic bar, axial extension is Δ = NL/(EA). Gradually increasing the force from zero to N gives <strong>U = ½NΔ = N<sup>2</sup>L/(2EA)</strong>. The half comes from the triangular load-displacement area. It is not a universal multiplier for the work of a suddenly applied or falling external load.</p>" +
                        "<p>For piecewise uniform axial-only truss members, <strong>U = ΣN<sub>i</sub><sup>2</sup>L<sub>i</sub>/(2E<sub>i</sub>A<sub>i</sub>)</strong>. Bending energy is <strong>U<sub>b</sub> = ∫M<sup>2</sup>/(2EI) ds</strong>. In a more complete uncoupled linear member model, sum over all members the integral of <strong>N<sup>2</sup>/(2EA) + M<sup>2</sup>/(2EI) + kV<sup>2</sup>/(2GA) + T<sup>2</sup>/(2GJ<sub>t</sub>)</strong>. Do not count the same axial contribution twice.</p>" +
                        "<p>Here N, V, M and T are axial force, transverse shear, bending moment and torque; s is distance along the member, A area, E Young's modulus, G shear modulus, I second moment of area and J<sub>t</sub> torsional constant. J<sub>t</sub> equals polar area moment only for the appropriate circular sections. The shear factor k accounts for nonuniform shear stress. Keep varying stiffness inside the integrals. Energy has units force × length; using kN and m requires EI in kN m<sup>2</sup>.</p>",
                    sources: [
                        { id: "STRU935-00181", set: 18, question: 14 },
                        { id: "STRU935-00186", set: 18, question: 19 }
                    ]
                },
                {
                    id: "resilience-proof-resilience-and-density",
                    title: "Resilience, proof resilience and energy density",
                    html: "<p>Keep the amount of stored energy separate from energy per unit volume. In the bank's elastic context, <strong>resilience</strong> is recoverable strain energy at the stated load; <strong>proof resilience</strong> is the greatest recoverable energy without permanent deformation.</p>" +
                        "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Uniform uniaxial linear-elastic expression</th><th scope='col'>Units</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Energy density at stress σ</th><td>u = σ<sup>2</sup>/(2E)</td><td>J/m<sup>3</sup>, equivalent to Pa</td></tr>" +
                        "<tr><th scope='row'>Proof resilience</th><td>U<sub>p</sub> = σ<sub>e</sub><sup>2</sup> Vol/(2E)</td><td>J</td></tr>" +
                        "<tr><th scope='row'>Modulus of resilience</th><td>U<sub>p</sub>/Vol = σ<sub>e</sub><sup>2</sup>/(2E)</td><td>J/m<sup>3</sup></td></tr></tbody></table>" +
                        "<p>Vol is member volume and σ<sub>e</sub> the limiting stress for the assumed recoverable linear response. The general energy density is the area ∫σ dε under the applicable stress-strain path. For nonuniform stress, integrate locally rather than multiplying the largest energy density by the whole volume. An offset proof stress can imply a permanent strain, so it is not automatically the elastic-limit stress required by this ideal proof-resilience expression.</p>",
                    sources: [
                        { id: "STRU935-00174", set: 17, question: 18 },
                        { id: "STRU935-00184", set: 18, question: 17 },
                        { id: "STRU935-00185", set: 18, question: 18 },
                        { id: "STRU935-00187", set: 18, question: 20 },
                        { id: "STRU935-00241", set: 23, question: 16 }
                    ]
                },
                {
                    id: "beam-bending-and-shear-energy-factors",
                    title: "Beam bending and shear-energy factors",
                    html: "<p>For a slender Euler-Bernoulli beam under transverse loading, bending usually dominates deflection, so U ≈ ∫M<sup>2</sup>/(2EI) ds. This is a modelling approximation, not a statement that every beam has zero axial, shear or torsional deformation. Deep beams, low shear stiffness or substantial axial loading can require additional terms.</p>" +
                        "<p>In the bank's convention, <strong>U<sub>V</sub> = ∫kV<sup>2</sup>/(2GA) ds</strong>. With the classical elementary shear-stress distributions, k = (A/V<sup>2</sup>)∫τ<sup>2</sup> dA. Thus k weights a squared-stress integral, rather than merely the peak-to-average shear ratio.</p>" +
                        "<table><thead><tr><th scope='col'>Section</th><th scope='col'>Energy multiplier k</th><th scope='col'>Reciprocal stiffness factor κ = 1/k</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Solid circle</th><td>10/9</td><td>9/10</td></tr>" +
                        "<tr><th scope='row'>Rectangle</th><td>6/5</td><td>5/6</td></tr></tbody></table>" +
                        "<p>The alternative stiffness notation is κGA, giving U<sub>V</sub> = ∫V<sup>2</sup>/(2κGA) ds. Never insert 9/10 as the multiplier in a formula defined with k. More refined shear-correction models can use different factors; identify their definition before borrowing a value.</p>",
                    sources: [
                        { id: "STRU935-00193", set: 19, question: 15 },
                        { id: "STRU935-00194", set: 19, question: 16 }
                    ]
                },
                {
                    id: "castigliano-energy-derivative-formulas",
                    title: "Castigliano: use the energy derivative, not its number",
                    html: "<p>For a stable, small-displacement, linearly elastic conservative structure with fixed supports and no imposed initial strains, write strain energy in terms of the independent applied generalized loads. Then <strong>Δ<sub>i</sub> = ∂U/∂F<sub>i</sub></strong> and <strong>φ<sub>i</sub> = ∂U/∂C<sub>i</sub></strong>, where F<sub>i</sub> is a force, Δ<sub>i</sub> its conjugate translation, C<sub>i</sub> a couple and φ<sub>i</sub> its conjugate rotation. Hold the other independent loads constant during differentiation.</p>" +
                        "<p>For bending, Δ<sub>i</sub> = Σ∫[M/(EI)](∂M/∂F<sub>i</sub>) ds; include analogous axial, shear or torsional contributions when retained by the model. Determinate reactions come from equilibrium. Indeterminate forces require compatibility as well; applicability to different structural forms does not remove that requirement.</p>" +
                        "<p>Conversely, if strain energy is written in independent compatible displacements, <strong>F<sub>i</sub> = ∂U/∂Δ<sub>i</sub></strong>. For nonlinear elastic laws, the load derivative generally belongs to <em>complementary</em> energy, not indiscriminately to U. Textbooks number Castigliano's theorems differently. Specify the energy function, differentiation variable, assumptions and conjugate response instead of treating one first/second-theorem label as universal.</p>",
                    sources: [
                        { id: "STRU935-00164", set: 16, question: 20 },
                        { id: "STRU935-00191", set: 18, question: 24 },
                        { id: "STRU935-00192", set: 19, question: 14 }
                    ]
                },
                {
                    id: "virtual-work-and-compatible-variations",
                    title: "Virtual work: equilibrium and compatible variations",
                    html: "<p>In the <strong>virtual-displacement</strong> statement, real equilibrated forces act through imagined infinitesimal, kinematically admissible displacements. The balance is <strong>δW<sub>external</sub> = δW<sub>internal</sub></strong>, or zero net virtual work when both are included. External work alone is not generally zero for a deformable body.</p>" +
                        "<p>For applied forces F<sub>i</sub>, couples C<sub>i</sub> and reactions R<sub>j</sub>, external virtual work includes ΣF<sub>i</sub>δu<sub>i</sub> + ΣC<sub>i</sub>δφ<sub>i</sub> + ΣR<sub>j</sub>δs<sub>j</sub>. The last term vanishes at immovable supports with admissible zero support variation; prescribed support movements must be treated consistently, not silently discarded. Internally, the continuum expression is ∫σ : δε dVol, the stress tensor contracted with the virtual strain tensor. There is no gradual-loading factor ½ in this work identity.</p>" +
                        "<p>The companion <strong>virtual-force</strong> formulation uses an equilibrated auxiliary force system acting through compatible real deformations. The unit-load method is its familiar linear-elastic application. Thus the virtual quantity is displacement in one formulation and force in the other.</p>" +
                        "<p>Virtual work as a statement of equilibrium is not confined to stresses below the elastic limit. What does require constitutive assumptions is converting the identity into formulas such as ∫Mm/(EI) ds. Equilibrium, compatibility, material response and prescribed support motion are separate issues.</p>",
                    sources: [
                        { id: "STRU935-00038", set: 5, question: 18 },
                        { id: "STRU935-00166", set: 16, question: 22 },
                        { id: "STRU935-00175", set: 17, question: 19 },
                        { id: "STRU935-00176", set: 17, question: 20 },
                        { id: "STRU935-00177", set: 17, question: 21 },
                        { id: "STRU935-00178", set: 17, question: 22 },
                        { id: "STRU935-00183", set: 18, question: 16 }
                    ]
                },
                {
                    id: "dummy-loads-and-unit-load-deflection",
                    title: "Dummy loads and work-conjugate deflection",
                    html: "<p>A requested displacement need not coincide with a real applied load. Introduce a dummy force F at the required point in the required direction, find U with F retained, differentiate and <strong>only then set F = 0</strong>. If that generalized force actually exists, evaluate at its actual value instead. For rotation, use a dummy couple C and evaluate ∂U/∂C. A horizontal force measures horizontal translation, not vertical deflection.</p>" +
                        "<p>Equivalently, remove the real loads in an auxiliary copy with the same restraints and apply a unit generalized load. Let m = ∂M/∂F and n = ∂N/∂F be its normalized bending and axial responses. For beam bending, <strong>Δ = Σ∫Mm/(EI) ds</strong>. For an ideal axial-only truss, <strong>Δ = ΣN<sub>i</sub>n<sub>i</sub>L<sub>i</sub>/(E<sub>i</sub>A<sub>i</sub>)</strong>. Real and auxiliary member forces must use the same sign convention; their products can be negative.</p>" +
                        "<p>With a force as the generalized load, n is dimensionless and m has length units, so these expressions return a length. Normalize by a unit couple for a rotation instead. The unit load is an analytical probe, not an extra real service load. In a truss it acts at a modelled joint; a between-joint physical load can introduce member bending and invalidate the axial-only idealization.</p>",
                    sources: [
                        { id: "STRU935-00036", set: 5, question: 16 },
                        { id: "STRU935-00165", set: 16, question: 21 }
                    ]
                },
                {
                    id: "central-point-load-energy-worked-example",
                    title: "Worked bank example: central point-load energy",
                    html: "<p>The bank's w is a <strong>point force</strong>, here renamed P to distinguish it from a UDL intensity. Take a simply supported span L, constant EI, small elastic bending and immovable supports. Symmetry gives reactions P/2. On the left half, measured from its support, M(x) = Px/2.</p>" +
                        "<p>Integrate both halves: <strong>U = 2∫<sub>0</sub><sup>L/2</sup>[(Px/2)<sup>2</sup>/(2EI)] dx = P<sup>2</sup>L<sup>3</sup>/(96EI)</strong>. Differentiating with respect to P gives the downward centre deflection <strong>Δ = PL<sup>3</sup>/(48EI)</strong>. The identity U = ½PΔ provides an independent algebraic check of the factor 96.</p>" +
                        "<p>The corresponding unit-load diagram has m = x/2 on the left half. Its product integral 2∫<sub>0</sub><sup>L/2</sup>(Px/2)(x/2)/(EI) dx gives the same deflection. The denominators 96 and 48 therefore belong to different quantities: energy and deflection. Replacing point force P by a force-per-length UDL without changing the derivation is dimensionally wrong.</p>",
                    sources: [{ id: "STRU935-00050", set: 6, question: 19 }]
                },
                {
                    id: "portal-frame-deflection-workflow",
                    title: "Portal-frame deflection: complete member contributions",
                    html: "<p><em>Official-scope extension: the assigned items supply no fully dimensioned portal-frame deflection problem.</em> For a stable small-displacement planar portal, use a separate local coordinate s along every beam and column. A displacement at one joint generally involves column bending and axial deformation as well as beam bending.</p>" +
                        "<ol><li>Find real member fields M, N and V under the actual loads, satisfying joint equilibrium and the real support conditions.</li><li>Apply an auxiliary unit force at the target joint in its conjugate displacement direction, or a unit couple for rotation. Solve the same structural model for normalized fields m, n and v.</li><li>Sum <strong>Δ = Σ∫[Mm/(EI) + Nn/(EA) + kVv/(GA)] ds</strong> over every member. Retain each member's own stiffness and split intervals where loading or properties change.</li><li>Account separately for prescribed support displacements or initial strains. Check continuity of translations and, at rigid joints, rotations; retain the releases actually present.</li></ol>" +
                        "<p>For a slender bending-only approximation, omit the other terms explicitly rather than claiming they are always zero. Out-of-plane or spatial members can additionally require torsional work ∫Tt/(GJ<sub>t</sub>) ds. If the portal is indeterminate, equilibrium alone cannot supply its force fields: compatibility or a stiffness/flexibility solution must precede the deflection integral. No dimensions, loads or numerical portal answer are invented here.</p>",
                    sources: []
                },
                {
                    id: "maxwell-betti-reciprocity-and-limits",
                    title: "Maxwell-Betti reciprocity and its limits",
                    html: "<p>For the same stable, small-displacement, linearly elastic conservative structure with unchanged restraints, write Δ<sub>i</sub> = Σf<sub>ij</sub>F<sub>j</sub>. The flexibility coefficient f<sub>ij</sub> is displacement in direction i per unit load in direction j. A smooth quadratic energy gives <strong>f<sub>ij</sub> = ∂<sup>2</sup>U/(∂F<sub>i</sub>∂F<sub>j</sub>) = f<sub>ji</sub></strong>.</p>" +
                        "<p><strong>Maxwell:</strong> displacement at A due to a unit load at B equals the conjugate displacement at B due to the corresponding unit load at A. Directions, signs and force/couple units must match. <strong>Betti:</strong> for two complete load systems α and β, ΣF<sub>i</sub><sup>α</sup>Δ<sub>i</sub><sup>β</sup> = ΣF<sub>i</sub><sup>β</sup>Δ<sub>i</sub><sup>α</sup>, with corresponding Cφ terms included for couples and rotations.</p>" +
                        "<p>This is the symmetry of the energy's mixed derivatives, not a rule about all real structures or one universally numbered theorem. Plastic history, frictional/nonconservative actions, follower loads, changed boundary conditions or finite-geometry effects can invalidate this elementary reciprocal relation. A mechanism also lacks the unique finite flexibility assumed here.</p>",
                    sources: [{ id: "STRU935-00190", set: 18, question: 23 }]
                },
                {
                    id: "gradual-sudden-and-falling-load-energy",
                    title: "Gradual, sudden and falling-load energy",
                    html: "<p>Use a stated dynamic model before assigning an impact factor. Consider an initially unstressed, linear elastic member idealized as a massless spring of stiffness K, with a weight W dropped through height h onto it. Neglect damping and contact losses, and require the peak response to remain elastic. The static displacement is Δ<sub>st</sub> = W/K.</p>" +
                        "<p>At maximum displacement, <strong>W(h + Δ<sub>max</sub>) = ½KΔ<sub>max</sub><sup>2</sup></strong>, giving <strong>Δ<sub>max</sub>/Δ<sub>st</sub> = 1 + √(1 + 2h/Δ<sub>st</sub>)</strong>. Stress and restoring-force ratios are the same in this linear model. Gradual application has factor 1; a suddenly applied maintained load with h = 0 has factor 2; a positive drop height gives a factor greater than 2.</p>" +
                        "<p>The sudden zero-drop case stores <strong>four times</strong> the gradual-load strain energy at its peak because energy is quadratic in displacement, although the peak stress is twice the static stress. The external weight does work WΔ, not ½WΔ, during sudden application. General impact response is not bounded between 1 and 2: rise time, falling height, damping, member mass, contact compliance and yielding matter.</p>",
                    sources: [
                        { id: "STRU935-00188", set: 18, question: 21 },
                        { id: "STRU935-00189", set: 18, question: 22 }
                    ]
                }
            ],
            gaps: [
                "No assigned item supplies the geometry, member stiffnesses and loading needed for a numerical portal-frame deflection. The portal workflow and added boundary-condition discussion are labelled syllabus extensions, not additional bank questions.",
                "There is no assigned numerical truss-displacement, settlement or temperature-deformation dataset. The notes explain the method and its limits without inventing input values; detailed indeterminate compatibility methods remain in official 4.6.",
                "The count-only truss and compound-truss items do not establish joint geometry, connector independence or a stable release layout. Their numerical counts cannot substitute for a geometry/rank check."
            ],
            cautions: [
                {
                    html: "<p><strong>Bank check: a count is not a stability proof.</strong> STRU935-00163 keys stable and indeterminate whenever m + r &gt; 2j, but a mechanism can coexist with redundant members. STRU935-00060's two added bars are only a minimum count under the usual three independent restraints; placement matters. The 3j expression in STRU935-00158 is for a pin-jointed space truss, not a rigid space frame.</p>",
                    sources: [
                        { id: "STRU935-00163", set: 16, question: 19 },
                        { id: "STRU935-00060", set: 7, question: 18 },
                        { id: "STRU935-00158", set: 16, question: 14 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: three connectors need independent action.</strong> STRU935-00040's m<sub>1</sub> + m<sub>2</sub> + 3 applies to the specified disjoint planar-subtruss construction, not every compound truss. Shared joints alter the count, and three dependent connector constraints can leave relative motion. No connector geometry is supplied to prove stability.</p>",
                    sources: [{ id: "STRU935-00040", set: 5, question: 20 }]
                },
                {
                    html: "<p><strong>Bank check: reaction orientation matters.</strong> The two-roller explanation assumes horizontal supporting surfaces; a roller reaction is normal to its actual surface. The concurrency rule assumes force reactions only, with no independent resisting couple. Neither a support label nor a raw reaction count by itself establishes stability.</p>",
                    sources: [
                        { id: "STRU935-00173", set: 1, question: 19 },
                        { id: "STRU935-00328", set: 31, question: 15 },
                        { id: "STRU935-00169", set: 17, question: 14 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: underconstraint is not overconstraint.</strong> STRU935-00170's explanation calls more required equilibrium equations than resisting unknowns over-constrained. In the intended independent-count model this signals insufficient restraint, not excess restraint. Its stored improperly-constrained choice does not justify the explanation's reversed terminology.</p>",
                    sources: [{ id: "STRU935-00170", set: 17, question: 15 }]
                },
                {
                    html: "<p><strong>Bank check: particle choices overlap.</strong> In STRU935-00324, vector force balance and zero sums of both perpendicular components are equivalent for a planar particle, so the alternatives are not exclusive. An unsigned sum of force magnitudes is not the equilibrium condition. In STRU935-00335, two non-collinear concurrent forces fail force balance; they do not create a moment about their common joint.</p>",
                    sources: [
                        { id: "STRU935-00324", set: 30, question: 21 },
                        { id: "STRU935-00335", set: 31, question: 21 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: the energy-method question has multiple false restrictions.</strong> STRU935-00036 correctly rejects loaded-point-only deflection, but its single-concentrated-load requirement is also false. A selected derivative returns the conjugate direction of its selected load; a dummy load supplies any other admissible direction. STRU935-00164's broad applicability is conditional on an appropriate elastic model and, where necessary, compatibility.</p>",
                    sources: [
                        { id: "STRU935-00036", set: 5, question: 16 },
                        { id: "STRU935-00164", set: 16, question: 20 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: Castigliano numbering and the stated derivative conflict.</strong> STRU935-00191 keys deflection while its explanation describes differentiating strain energy with respect to displacement, which returns force. STRU935-00192 describes the load derivative that returns conjugate displacement under the stated linear assumptions. The ordinal names used there and in the Maxwell item are not universal; follow the explicit derivative, not an unqualified theorem number. Stored keys are not rewritten.</p>",
                    sources: [
                        { id: "STRU935-00191", set: 18, question: 24 },
                        { id: "STRU935-00192", set: 19, question: 14 },
                        { id: "STRU935-00190", set: 18, question: 23 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: virtual-work identity versus elastic shortcut.</strong> STRU935-00183's restriction to non-yielding supports and linear material is not a general limitation of virtual work and conflicts with the broader principle in STRU935-00178. Prescribed support motion requires consistent work terms; nonlinear material requires its actual constitutive deformation. Displacement is virtual in STRU935-00175's formulation, whereas the auxiliary force is virtual in the unit-load formulation.</p>",
                    sources: [
                        { id: "STRU935-00183", set: 18, question: 16 },
                        { id: "STRU935-00178", set: 17, question: 22 },
                        { id: "STRU935-00175", set: 17, question: 19 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: beam and shear-factor qualifications.</strong> Bending dominance in STRU935-00193 is a slender-beam approximation, not a universal exclusion of shear or axial energy. STRU935-00194's 10/9 is the circular-section multiplier in its stated energy convention; 9/10 is the reciprocal stiffness convention. The maximum shear exceeding average shear does not by itself determine the energy factor.</p>",
                    sources: [
                        { id: "STRU935-00193", set: 19, question: 15 },
                        { id: "STRU935-00194", set: 19, question: 16 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: total proof energy versus density.</strong> The volume factor distinguishes proof resilience from modulus of resilience. In STRU935-00187, σ must represent the applicable elastic-limit stress for a uniform linear-elastic state; calling it an arbitrary proof stress is unsafe because an offset proof stress can include permanent deformation. For a nonuniform member, use a volume integral.</p>",
                    sources: [
                        { id: "STRU935-00184", set: 18, question: 17 },
                        { id: "STRU935-00185", set: 18, question: 18 },
                        { id: "STRU935-00187", set: 18, question: 20 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: impact is not bounded by a factor of two.</strong> STRU935-00188's between-1-and-2 key is not a general impact rule. An undamped sudden maintained load gives 2 in the ideal initially unloaded linear model; a weight falling through h &gt; 0 gives 1 + √(1 + 2h/Δ<sub>st</sub>) &gt; 2. STRU935-00189's greater-than-two statement needs those same falling-load assumptions, not arbitrary impact conditions.</p>",
                    sources: [
                        { id: "STRU935-00188", set: 18, question: 21 },
                        { id: "STRU935-00189", set: 18, question: 22 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: global equations and releases need the actual model.</strong> Three plane equilibrium equations refer to one rigid-body free body. Internal hinges can supply further independent conditions after separation, so more than three external reactions does not alone settle an assembly's determinacy. Y = 3X is also a count, not a rank proof. Removing as many forces as the indeterminacy works only when those releases are independent and the primary structure remains stable.</p>",
                    sources: [
                        { id: "STRU935-00156", set: 15, question: 23 },
                        { id: "STRU935-00168", set: 16, question: 24 },
                        { id: "STRU935-00172", set: 17, question: 17 }
                    ]
                }
            ]
        },
        ACiE0405: {
            code: "ACiE0405",
            questionCount: 30,
            blocks: [
                {
                    id: "influence-lines-and-official-scope",
                    title: "Influence lines and the official scope",
                    html: "<p><strong>4.5 Determinate structures-2</strong> is retained exactly as the official heading. Its scope includes simple-structure influence lines under point loads and UDL, plus two-hinged arches. A standard two-hinged planar arch is nevertheless <strong>statically indeterminate to degree one</strong>; two-hinged parabolic arches also appear in official 4.6. The assigned three-hinged examples remain here without reclassifying any question.</p>" +
                        "<p>An <strong>influence line</strong> fixes a section and a response, then varies the position z of a unit force. Its ordinate η(z) is response per unit force. A <strong>bending-moment diagram</strong> instead fixes the loading and varies the section position x. A triangular moment influence line can therefore coexist with a parabolic moment diagram under a fixed UDL.</p>" +
                        "<p>The bank uses a unit test force, not a unit distributed load. For ordinary statically determinate straight-beam arrangements, equilibrium gives piecewise straight influence-line segments. Continuous-beam influence lines need compatibility and are not covered by that straight-line shortcut. These are quasi-static linear-response calculations; dynamic amplification is a separate problem.</p>",
                    sources: [
                        { id: "STRU935-00056", set: 7, question: 14 },
                        { id: "STRU935-00088", set: 9, question: 24 },
                        { id: "STRU935-00108", set: 11, question: 21 },
                        { id: "STRU935-00109", set: 11, question: 22 },
                        { id: "STRU935-00110", set: 11, question: 23 }
                    ]
                },
                {
                    id: "simple-span-reaction-and-moment-ordinates",
                    title: "Simple-span reaction and moment ordinates",
                    html: "<p>Let A and B be level simple supports separated by L, and fix section C at a from A and b = L − a from B. A downward unit force moves at z measured from A. Equilibrium gives the following influence ordinates for 0 ≤ z ≤ L.</p>" +
                        "<table><thead><tr><th scope='col'>Response</th><th scope='col'>Ordinate η(z)</th><th scope='col'>Ordinate units</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Reaction at A</th><td>(L − z)/L: 1 at A, 0 at B.</td><td>Force/force, dimensionless</td></tr>" +
                        "<tr><th scope='row'>Reaction at B</th><td>z/L: 0 at A, 1 at B.</td><td>Dimensionless</td></tr>" +
                        "<tr><th scope='row'>Sagging moment at C</th><td>bz/L for z ≤ a; a(L − z)/L for z ≥ a.</td><td>Moment/force, length</td></tr></tbody></table>" +
                        "<p>Both reaction diagrams are triangular ramps. The moment influence line is a triangle with its peak <strong>ab/L</strong> directly under the fixed section, and zero at the supports. A point force P at z produces M<sub>C</sub> = Pη<sub>M</sub>(z). If lengths are in metres and P in kN, the ordinate is in metres and the resulting moment in kNm. Do not mistake ab/L for a force or a complete bending moment.</p>",
                    sources: [
                        { id: "STRU935-00055", set: 6, question: 24 },
                        { id: "STRU935-00112", set: 12, question: 14 }
                    ]
                },
                {
                    id: "section-shear-and-cantilever-influence-lines",
                    title: "Section shear and the cantilever rectangle",
                    html: "<p>For a simple span, take section shear V as the algebraic upward resultant of external forces to the left of the cut. At a fixed section a, a downward unit force at z gives <strong>η<sub>V</sub> = −z/L for z &lt; a</strong> and <strong>η<sub>V</sub> = (L − z)/L for z &gt; a</strong>. The left and right limits differ by one when the load crosses the cut; a force applied exactly at the section needs a specified side.</p>" +
                        "<p>Now fix a cantilever at x = 0 with free end x = L and section x = a. A load between the fixed end and the section leaves the portion beyond the cut unloaded, so η<sub>V</sub> = 0 there. A load between the section and free end transmits its entire force across the cut, so η<sub>V</sub> = 1 with the same resultant convention. Thus the shear influence line is a <strong>rectangle from the section to the free end</strong>, zero elsewhere.</p>" +
                        "<p>The cantilever's bending-moment influence ordinate is instead −(z − a) for z &gt; a and zero for z &lt; a under the sagging-positive convention. It is the changing moment arm that makes that diagram triangular. Confusing these two responses produces the bank's incorrect triangular-shear answer.</p>",
                    sources: [{ id: "STRU935-00053", set: 6, question: 22 }]
                },
                {
                    id: "load-superposition-and-full-span-udl",
                    title: "Moving-load sums and full-span UDL coverage",
                    html: "<p>For linear influence ordinates, a response is <strong>R = ΣP<sub>i</sub>η(z<sub>i</sub>) + ∫w(z)η(z) dz</strong>. Multiply each point force by its own ordinate. A constant UDL intensity w contributes w times the <em>signed area</em> under the influence line over the portion actually loaded. Loads beyond the supported span contribute nothing to these simple-span ordinates.</p>" +
                        "<p>The simple-span moment influence line is nonnegative. If a movable UDL is at least as long as the span, its maximum moment at any fixed section requires <strong>the entire span to be covered</strong>. Merely crossing the midpoint can still leave part of the positive influence area unloaded.</p>" +
                        "<p>With full coverage, the triangular area gives <strong>M<sub>C,max</sub> = w × ½L × ab/L = wab/2</strong>. Among all sections, ab is greatest at a = b = L/2, producing <strong>wL<sup>2</sup>/8</strong> at midspan. Distinguish the load placement that maximizes one section's response from the subsequent search for the largest response anywhere along the beam.</p>",
                    sources: [{ id: "STRU935-00052", set: 6, question: 21 }]
                },
                {
                    id: "partial-udl-equal-end-ordinates-example",
                    title: "Worked bank example: moving 4 m UDL on an 8 m span",
                    html: "<p>Fix section a = 2 m on a span L = 8 m, with b = 6 m. The UDL has intensity w = 1 kN/m and length ℓ = 4 m. If its left edge is t, the response is M(t) = w∫<sub>t</sub><sup>t+ℓ</sup>η<sub>M</sub>(z) dz. At an interior optimum, <strong>dM/dt = w[η(t + ℓ) − η(t)] = 0</strong>: the two end ordinates must be equal.</p>" +
                        "<p>When the patch straddles the section, bt/L = a(L − t − ℓ)/L, so <strong>t = a(L − ℓ)/L = 1 m</strong>. The optimal patch therefore covers <strong>x = 1 to 5 m</strong>, not 0 to 4 m. Its end ordinates are both 0.75 m and the section peak is ab/L = 1.5 m. The loaded influence area is ½(0.75 + 1.5) × 1 + ½(1.5 + 0.75) × 3 = 4.5 m<sup>2</sup>. Hence <strong>M<sub>2,max</sub> = 4.5 kNm</strong>.</p>" +
                        "<table><thead><tr><th scope='col'>UDL position</th><th scope='col'>Reaction at A</th><th scope='col'>Moment at the fixed 2 m section</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>1 to 5 m</th><td>4(8 − 3)/8 = 2.5 kN</td><td>2.5 × 2 − 1 × 1<sup>2</sup>/2 = 4.5 kNm</td></tr>" +
                        "<tr><th scope='row'>0 to 4 m</th><td>4(8 − 2)/8 = 3 kN</td><td>3 × 2 − 1 × 2<sup>2</sup>/2 = 4 kNm</td></tr></tbody></table>" +
                        "<p>For an unrestricted positive patch with ℓ ≤ L, the same derivation gives M<sub>C,max</sub> = wabℓ/L × [1 − ℓ/(2L)]. The <em>global</em> maximum for this 4 m patch is 6 kNm at the 4 m section with loading from 2 to 6 m. That different question cannot justify the stored 6 kNm key for the fixed 2 m section.</p>",
                    sources: [{ id: "STRU935-00093", set: 10, question: 17 }]
                },
                {
                    id: "wheel-trains-and-critical-placements",
                    title: "Wheel trains: compare actual critical placements",
                    html: "<p>For a given arrangement of downward wheel forces on a simple span, the bending-moment diagram is piecewise linear. A maximum can be selected under a wheel; a zero-shear plateau between wheels can share that maximum. It need not be at the span centre or under the heaviest wheel.</p>" +
                        "<p>To find maximum left reaction, use <strong>R<sub>A</sub> = ΣP<sub>i</sub>(L − x<sub>i</sub>)/L</strong> over axles actually on the span. Preserve their spacing and stated travel direction. Compare candidate positions as successive axles enter or leave, especially when an axle is just inside A. A load exactly on the bearing goes directly into its reaction; section shear immediately inside the span is interpreted using the appropriate limiting axle position.</p>" +
                        "<p>For the absolute bending-moment search, try the relevant wheels in turn. While the set of on-span axles is unchanged, a stationary moment under a selected wheel at x<sub>k</sub> satisfies <strong>x<sub>k</sub> + x̄ = L</strong>, where x̄ is the position of the resultant of those axles. Thus that wheel and the on-span resultant straddle midspan equally. Recheck the on-span set and boundary placements before accepting a candidate.</p>" +
                        "<p>The source figure labels the <strong>trailing load at A</strong>, with middle and leading loads successively farther into the span above a triangular left-reaction influence line. It illustrates the keyed candidate but supplies <strong>no axle-force magnitudes or numerical spacings</strong> with which to compare the weighted sums. A triangle's largest ordinate at A does not prove which axle of an arbitrary unequal train should occupy it. Use the labelled order and compare admissible placements rather than treating leading or trailing as a universal maximum-shear rule.</p>",
                    sources: [
                        { id: "STRU935-00037", set: 5, question: 17 },
                        { id: "STRU935-00054", set: 6, question: 23 }
                    ]
                },
                {
                    id: "arch-geometry-and-hinge-classification",
                    title: "Arch geometry and what the hinges release",
                    html: "<p>The <strong>crown</strong> is the highest part of an arch, at midspan only for an appropriately symmetric profile. Springings are where the rib meets its supports; abutments resist the transmitted thrust. For the following level-support examples, L is horizontal span and h is crown rise above the springing line. A semicircle has L = 2R and h = R; an arbitrary span and rise need not describe a semicircle.</p>" +
                        "<p>A stable planar <strong>two-hinged</strong> arch has a pin at each springing: four reaction components but only three whole-body equilibrium equations. Its one redundant reaction is usually chosen as horizontal thrust H. The crown is not a hinge, and its bending moment need not vanish. Compatibility and stiffness determine H.</p>" +
                        "<p>A <strong>three-hinged</strong> arch additionally releases moment at an internal hinge, usually the crown in these bank examples. Separating the halves gives the additional independent moment condition that makes a properly arranged arch determinate. Both types have zero end moments at ideal springing pins. These mechanical distinctions explain the examples while leaving the official Determinate structures-2 heading and its two-hinged-arch scope unchanged.</p>",
                    sources: [{ id: "STRU935-00094", set: 10, question: 18 }]
                },
                {
                    id: "three-hinged-thrust-and-influence-ordinates",
                    title: "Three-hinged thrust and its influence line",
                    html: "<p>For vertical loads on a three-hinged arch with level springings, let M<sub>0</sub>(x) be the moment in a simple beam of the same horizontal span and loading, and y(x) the arch ordinate above the springing line. With inward horizontal thrust H, <strong>M(x) = M<sub>0</sub>(x) − Hy(x)</strong>. At a crown hinge of height h, M = 0, so <strong>H = M<sub>0</sub>(C)/h</strong>. This is a hinge-equilibrium result, not a two-hinged compatibility formula.</p>" +
                        "<p>For a midspan crown hinge, a downward unit force at z gives <strong>η<sub>H</sub> = z/(2h)</strong> on the left half and <strong>η<sub>H</sub> = (L − z)/(2h)</strong> on the right. The triangular peak is <strong>L/(4h)</strong>, a dimensionless force-per-force ordinate. The result does not require a parabolic rib, only the specified hinge position and level supports.</p>" +
                        "<p>Integrating that triangle gives H = wL<sup>2</sup>/(8h) for a full-span horizontal UDL and H = wL<sup>2</sup>/(16h) for loading one horizontal half. If the hinge is instead at horizontal distance c from A, the peak unit-load ordinate is c(L − c)/(Lh); the familiar L/(4h) is its symmetric special case.</p>",
                    sources: [{ id: "STRU935-00150", set: 15, question: 17 }]
                },
                {
                    id: "quarter-span-point-load-arch-example",
                    title: "Worked bank sequence: 80 kN at quarter span",
                    html: "<p>Use the actual four linked bank items: a three-hinged parabolic arch with level supports, span <strong>L = 20 m</strong>, rise <strong>h = 4 m</strong> and a downward point force <strong>P = 80 kN at x = 5 m</strong>. The bank calls the point force w; it is not a UDL intensity.</p>" +
                        "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Working</th><th scope='col'>Result</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Left vertical reaction</th><td>V<sub>A</sub> = 80 × 15/20</td><td>60 kN</td></tr>" +
                        "<tr><th scope='row'>Right vertical reaction</th><td>V<sub>B</sub> = 80 × 5/20</td><td>20 kN</td></tr>" +
                        "<tr><th scope='row'>Crown beam moment</th><td>M<sub>0</sub>(10) = 60 × 10 − 80 × 5</td><td>200 kNm</td></tr>" +
                        "<tr><th scope='row'>Horizontal thrust</th><td>H = 200/4</td><td>50 kN</td></tr>" +
                        "<tr><th scope='row'>Quarter-span ordinate</th><td>y(5) = 4 × 4 × 5 × 15/20<sup>2</sup></td><td>3 m</td></tr>" +
                        "<tr><th scope='row'>Quarter-span beam moment</th><td>M<sub>0</sub>(5) = 60 × 5</td><td>300 kNm</td></tr>" +
                        "<tr><th scope='row'>Quarter-span arch moment</th><td>M(5) = 300 − 50 × 3</td><td>150 kNm</td></tr></tbody></table>" +
                        "<p>The parabolic ordinate is y(x) = 4hx(L − x)/L<sup>2</sup>. A point force exactly at the section has zero lever arm about it, so it does not introduce a jump in bending moment; shear does jump. The 300 kNm beam value must not be substituted for the 150 kNm arch value, which includes the horizontal-thrust reduction.</p>",
                    sources: [
                        { id: "STRU935-00151", set: 15, question: 18 },
                        { id: "STRU935-00152", set: 15, question: 19 },
                        { id: "STRU935-00153", set: 15, question: 20 },
                        { id: "STRU935-00154", set: 15, question: 21 }
                    ]
                },
                {
                    id: "crown-equilibrium-further-bank-examples",
                    title: "Further crown-equilibrium examples and geometry checks",
                    html: "<p><strong>Half-span UDL:</strong> the actual symmetric three-hinged example has L = 20 m, h = 5 m and w = 1 kN/m over x = 0 to 10 m. Its total load is 10 kN at x = 5 m. Thus V<sub>A</sub> = 10 × 15/20 = <strong>7.5 kN</strong> and V<sub>B</sub> = <strong>2.5 kN</strong>. Crown beam moment is 2.5 × 10 = 25 kNm, giving <strong>H = 25/5 = 5 kN</strong>. Using the full-span UDL formula would double this value incorrectly.</p>" +
                        "<p><strong>Conflicting geometry in another bank item:</strong> L = 40 m, h = 8 m and P = 80 kN at x = 6 m give V<sub>A</sub> = 68 kN and V<sub>B</sub> = 12 kN for level supports. A midspan crown hinge requires M<sub>0</sub>(20) = 68 × 20 − 80 × 14 = 240 kNm, so <strong>H = 240/8 = 30 kN</strong>.</p>" +
                        "<p>That second calculation is valid for the stated three-hinged, level-support geometry with 8 m rise, but its simultaneous description as <em>semicircular</em> is impossible: a semicircle spanning 40 m rises 20 m. If semicircular geometry were imposed instead, the same crown beam moment would give H = 240/20 = 12 kN. These are two distinct assumptions, not a silent correction of the original dimensions or stored key.</p>",
                    sources: [
                        { id: "STRU935-00155", set: 15, question: 22 },
                        { id: "STRU935-00058", set: 7, question: 16 }
                    ]
                },
                {
                    id: "arch-tangent-normal-and-radial-shear",
                    title: "Horizontal thrust, normal thrust and radial shear",
                    html: "<p>Take global x to the right and y upward. At a section, H and V denote the rightward and upward components of the net external force on the left portion before adding the balancing cut force. For vertical span loads, H is the constant support thrust and <strong>V = V<sub>A</sub> − ΣP<sub>left</sub> − ∫w dx</strong>. This V is a vertical component, not the arch's local radial shear.</p>" +
                        "<p>Let the tangent toward increasing x make signed angle θ with the horizontal: its unit vector is (cosθ, sinθ), and the chosen normal is (−sinθ, cosθ). Resolving the left-body resultant gives <strong>N = Hcosθ + Vsinθ</strong> and <strong>Q = Vcosθ − Hsinθ</strong>. Here N is positive compressive thrust and Q uses the stated normal/resultant convention. Actual cut actions on the opposite free-body face reverse; do not mix face conventions.</p>" +
                        "<p>The same projection applies to two- and three-hinged arches after H and V have been found by the appropriate analysis. At a horizontal crown tangent, N = H and Q = V. On the right half of an ordinary convex arch, θ is negative, so replacing it by an unsigned slope angle can reverse the shear result.</p>",
                    sources: [
                        { id: "STRU935-00064", set: 7, question: 22 },
                        { id: "STRU935-00089", set: 10, question: 14 }
                    ]
                },
                {
                    id: "funicular-parabola-and-coincident-thrust-line",
                    title: "Funicular parabola and the coincident thrust line",
                    html: "<p>A funicular arch axis follows the <strong>line of thrust for its actual loading</strong>, eliminating bending moment. Mere parallelism is insufficient: an offset leaves a moment arm. For level supports under vertical loading, the thrust-line ordinate is y<sub>t</sub> = M<sub>0</sub>/H and M = H(y<sub>t</sub> − y); zero moment throughout requires coincidence with the axis.</p>" +
                        "<p>For a three-hinged parabolic arch, y = 4hx(L − x)/L<sup>2</sup>. A constant downward UDL w <strong>per unit horizontal projection</strong> over the entire span gives M<sub>0</sub> = wx(L − x)/2 and H = wL<sup>2</sup>/(8h). Substitution gives <strong>M = M<sub>0</sub> − Hy = 0</strong> everywhere in the first-order model.</p>" +
                        "<p>Also V = w(L/2 − x) and tanθ = dy/dx = 4h(L − 2x)/L<sup>2</sup>, so V = Htanθ. Hence <strong>Q = Vcosθ − Hsinθ = 0</strong>, while N = H/cosθ carries compression. The <em>vertical component V</em> generally is not zero except at midspan. The bank's zero-shear statement means local radial shear.</p>" +
                        "<p>A UDL measured along curved rib length is a different loading distribution; the same parabola need not be funicular. Uniform self-weight per curved length instead motivates a catenary. Partial or point loading also destroys the full-span parabolic cancellation even though the arch shape has not changed.</p>",
                    sources: [
                        { id: "STRU935-00062", set: 7, question: 20 },
                        { id: "STRU935-00095", set: 10, question: 19 },
                        { id: "STRU935-00096", set: 10, question: 20 }
                    ]
                },
                {
                    id: "rolling-point-load-parabolic-arch-maximum",
                    title: "Rolling point load: where the arch moment envelope peaks",
                    html: "<p>The bank's L/(2√3) statement needs a <strong>rolling point force on a symmetric three-hinged parabolic arch with level supports and a midspan crown hinge</strong>. It is not a universal position for an arbitrary fixed point load or for a circular arch.</p>" +
                        "<p>Let a downward force P lie at s in the left half, measured horizontally from A. The positive moment envelope at a section is obtained with that force directly at the section. For this placement, H = Ps/(2h), the beam moment under the force is Ps(L − s)/L and the ordinate is 4hs(L − s)/L<sup>2</sup>. Therefore <strong>M<sub>under load</sub> = Ps(L − s)(L − 2s)/L<sup>2</sup></strong> for 0 ≤ s ≤ L/2.</p>" +
                        "<p>Writing t = s/L gives M/(PL) = t − 3t<sup>2</sup> + 2t<sup>3</sup>. Its stationary condition is 1 − 6t + 6t<sup>2</sup> = 0. By symmetry, the peak positive-envelope sections are <strong>s = L/2 ± L/(2√3)</strong>, with maximum PL/(6√3). Thus L/(2√3) is the distance <em>from the crown</em>; the left position from A is about 0.2113L. Moving the load and searching the envelope must not be confused with inspecting a single fixed-load moment diagram.</p>",
                    sources: [{ id: "STRU935-00057", set: 7, question: 15 }]
                },
                {
                    id: "two-hinged-compatibility-and-semicircle-thrust",
                    title: "Two-hinged compatibility and semicircular thrust",
                    html: "<p><strong>Bending-only compatibility model:</strong> take a stable small-displacement elastic two-hinged arch with level, immovable springings, no temperature change or initial strain, and neglect axial and shear deformation. Releasing horizontal restraint gives M = M<sub>0</sub> − Hy. Zero relative horizontal displacement requires ∂U<sub>b</sub>/∂H = −∫My/(EI) ds = 0, so <strong>H = [∫M<sub>0</sub>y/(EI) ds]/[∫y<sup>2</sup>/(EI) ds]</strong>. M<sub>0</sub> is the released simple-beam moment, not the final arch moment.</p>" +
                        "<p>For a semicircle of radius R and constant EI, use x = R(1 − cosφ), y = Rsinφ and ds = R dφ, with 0 ≤ φ ≤ π. Then ∫y<sup>2</sup> ds = πR<sup>3</sup>/2. For full horizontal UDL w, M<sub>0</sub> = wy<sup>2</sup>/2, giving numerator ∫M<sub>0</sub>y ds = 2wR<sup>4</sup>/3.</p>" +
                        "<table><thead><tr><th scope='col'>Loading on horizontal span 2R</th><th scope='col'>Horizontal thrust in this model</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Full-span UDL w</th><td>H = 4wR/(3π)</td></tr>" +
                        "<tr><th scope='row'>Left-half UDL w</th><td>H = 2wR/(3π), half the full value by symmetry and superposition.</td></tr>" +
                        "<tr><th scope='row'>Point force P at crown</th><td>H = P/π; the numerator is PR<sup>3</sup>/2.</td></tr></tbody></table>" +
                        "<p>Consequently the bank's radii 5, 7.5 and 10 m under the same crown force give <strong>1:1:1</strong>, provided each arch follows this same constant-EI, bending-only idealization. Uniform EI magnitudes cancel within each ratio of integrals. Nonuniform stiffness, finite axial/shear flexibility, temperature or support settlement can change the compatibility equation and the thrust; neglecting them is not a generally exact two-hinged-arch analysis.</p>",
                    sources: [
                        { id: "STRU935-00070", set: 8, question: 17 },
                        { id: "STRU935-00072", set: 8, question: 19 }
                    ]
                },
                {
                    id: "semicircular-reaction-locus-defined",
                    title: "Reaction locus: define the plotted point before memorizing",
                    html: "<p>Use the same constant-EI, bending-only two-hinged semicircle, with supports A = (0, 0), B = (2R, 0), and just one downward point force P at horizontal position a, where 0 &lt; a &lt; 2R. Here a denotes the <em>moving load position</em>. The usual spatial reaction-locus construction is the intersection of the two support-reaction lines with the load's vertical line.</p>" +
                        "<p>Since y ds = R dx for this semicircle, ∫M<sub>0</sub>y ds = R∫M<sub>0</sub> dx = PRa(2R − a)/2. Dividing by ∫y<sup>2</sup> ds = πR<sup>3</sup>/2 gives <strong>H = Pa(2R − a)/(πR<sup>2</sup>)</strong>. Vertical equilibrium gives <strong>V<sub>A</sub> = P(2R − a)/(2R)</strong> and V<sub>B</sub> = Pa/(2R).</p>" +
                        "<p>The reaction line from A has slope V<sub>A</sub>/H. At the load vertical x = a, its height is <strong>y = aV<sub>A</sub>/H = πR/2</strong>, independent of a. The line from B meets the same point. This defined locus is therefore a <strong>horizontal straight line</strong>, not a circle. At the endpoints the formula is interpreted by its interior limit because H vanishes.</p>" +
                        "<p>If instead reaction-vector endpoints are plotted in force-component space, eliminating a gives H = (4/π)V<sub>A</sub>(1 − V<sub>A</sub>/P), a parabola in that different diagram. Other stiffness/deformation assumptions require another derivation. The bank's bare circle answer supplies neither a sufficient locus definition nor the assumptions needed to replace these results.</p>",
                    sources: [{ id: "STRU935-00063", set: 7, question: 21 }]
                },
                {
                    id: "unequal-support-heights-and-dimensional-checks",
                    title: "Unequal support heights: define geometry and check units",
                    html: "<p>The unequal-height bank item does not define whether h<sub>1</sub> and h<sub>2</sub> are support elevations, crown rises or something else. The keyed <strong>PL/(h<sub>1</sub> + h<sub>2</sub>)<sup>2</sup></strong> has units force/length when the h values are lengths, not the force units of thrust. The other squared-height sums have the same problem; the displayed h<sub>1</sub> + √h<sub>2</sub> expression is not even a dimensionally valid addition. None supplies a sound thrust formula as written.</p>" +
                        "<p><em>Conditional geometric extension, not recovered source givens:</em> suppose the crown hinge and point force P are at horizontal midspan, and h<sub>1</sub>, h<sub>2</sub> are explicitly the positive vertical rises from the left and right supports to that crown. Take the two half-arches as unloaded except at their ends and this crown force. Moment balance about the hinge gives V<sub>A</sub>L/2 = Hh<sub>1</sub> and V<sub>B</sub>L/2 = Hh<sub>2</sub>.</p>" +
                        "<p>With V<sub>A</sub> + V<sub>B</sub> = P, the result is <strong>H = PL/[2(h<sub>1</sub> + h<sub>2</sub>)]</strong>, V<sub>A</sub> = Ph<sub>1</sub>/(h<sub>1</sub> + h<sub>2</sub>) and V<sub>B</sub> = Ph<sub>2</sub>/(h<sub>1</sub> + h<sub>2</sub>). Setting both rises to h recovers PL/(4h). If the given heights are elevations above an arbitrary datum or the hinge/load is not at midspan, these conditional formulas must not be used without reconstructing the actual geometry.</p>",
                    sources: [{ id: "STRU935-00087", set: 9, question: 23 }]
                }
            ],
            gaps: [
                "The supplied wheel-train figure has been checked: it labels trailing, middle and leading loads, with the trailing load at A, but supplies no axle-force magnitudes or numerical spacings. It illustrates a candidate rather than a complete numerical comparison of all placements; the notes give the influence-ordinate and trial-position method.",
                "The unequal-support item lacks height and crown-location definitions, and the reaction-locus item lacks a precise locus/model definition. Their conditional derivations are explicitly identified and do not invent original givens.",
                "There is no assigned worked two-hinged-arch dataset with nonuniform EI, axial/shear deformation, temperature or settlement. The displayed compatibility model states its omissions; detailed flexibility, two-hinged parabolic-arch and continuous-beam influence-line methods remain in official 4.6."
            ],
            cautions: [
                {
                    html: "<p><strong>Bank check: a long UDL must cover the full span.</strong> STRU935-00052 keys crossing the midpoint, but that event alone can leave positive moment-influence area unloaded. For a patch longer than the girder, full-span coverage is the required maximum condition. The stored explanation's first statement recognizes full coverage; its later midpoint wording does not establish it.</p>",
                    sources: [{ id: "STRU935-00052", set: 6, question: 21 }]
                },
                {
                    html: "<p><strong>Bank check: cantilever shear is rectangular.</strong> STRU935-00053 keys a triangle from the section to the free end, contradicting its own constant-shear explanation. The shear influence ordinate has unit magnitude there and is zero toward the fixed end. The changing-lever-arm triangular diagram belongs to bending moment, not shear. The original key is left unchanged.</p>",
                    sources: [{ id: "STRU935-00053", set: 6, question: 22 }]
                },
                {
                    html: "<p><strong>Bank check: the labelled candidate is not a universal train rule.</strong> STRU935-00054's figure shows the trailing load at A and the other two farther into the span, but gives no magnitudes or numerical spacings for a weighted comparison. The triangular reaction influence line alone does not establish that this placement governs every unequal train. Compare weighted ordinates at admissible trials. STRU935-00037's maximum-under-a-wheel statement allows a zero-shear plateau to share the same maximum.</p>",
                    sources: [
                        { id: "STRU935-00054", set: 6, question: 23 },
                        { id: "STRU935-00037", set: 5, question: 17 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: the fixed 2 m section does not reach 6 kNm.</strong> In STRU935-00093, equal patch-end influence ordinates place the 4 m UDL from 1 to 5 m and give <strong>4.5 kNm</strong>. Loading 0 to 4 m gives <strong>4 kNm</strong>, not the explanation's 6. A 6 kNm global maximum belongs to the 4 m section under a centred 2-to-6 m patch, a different optimization.</p>",
                    sources: [{ id: "STRU935-00093", set: 10, question: 17 }]
                },
                {
                    html: "<p><strong>Bank check: the crown-distance rule needs its arch and loading model.</strong> STRU935-00057 omits the rolling-load and parabolic qualifications in its stem. L/(2√3) is the distance from the midspan crown to the positive-envelope peak for a rolling point force on a symmetric, level-support, three-hinged parabolic arch. It is not the distance from a support or a result for every fixed-load arch.</p>",
                    sources: [{ id: "STRU935-00057", set: 7, question: 15 }]
                },
                {
                    html: "<p><strong>Bank check: span 40 m and rise 8 m cannot define a semicircle.</strong> STRU935-00058's <strong>30 kN</strong> thrust follows correctly from the given 8 m rise, level supports and a midspan third hinge. Its semicircular label would instead require rise 20 m and give 12 kN for the same load. The inconsistent shape description is flagged without replacing either original dimension or the stored key.</p>",
                    sources: [{ id: "STRU935-00058", set: 7, question: 16 }]
                },
                {
                    html: "<p><strong>Bank check: coincidence, not parallelism.</strong> STRU935-00062 keys a thrust line parallel to the axis. A parallel but offset resultant still has a moment arm. Zero bending throughout requires the thrust line to <strong>coincide</strong> with the arch axis for the specified loading; ideal end hinges alone enforce zero moment only at those hinges.</p>",
                    sources: [{ id: "STRU935-00062", set: 7, question: 20 }]
                },
                {
                    html: "<p><strong>Bank check: the circle locus is unsupported as stated.</strong> For STRU935-00063, defining the locus as the intersection of support-reaction lines with a moving vertical point load on a constant-EI, bending-only two-hinged semicircle gives <strong>y = πR/2</strong>, a straight line. Plotting reaction components instead gives a parabola. A different intended locus or deformation model must be specified before the blanket circle key can be defended.</p>",
                    sources: [{ id: "STRU935-00063", set: 7, question: 21 }]
                },
                {
                    html: "<p><strong>Bank check: unequal-height options fail dimensional or geometric definition.</strong> STRU935-00087's squared-height denominators give force/length rather than force; its mixed height/square-root option also adds unlike dimensions. The explanation does not repair the missing geometry. <strong>PL/[2(h<sub>1</sub> + h<sub>2</sub>)]</strong> is only the separately labelled case of crown rises above each support with crown hinge and load at horizontal midspan, not a recovered original answer.</p>",
                    sources: [{ id: "STRU935-00087", set: 9, question: 23 }]
                },
                {
                    html: "<p><strong>Bank check: full-span funicular loading and the meaning of shear.</strong> STRU935-00095 and STRU935-00096 require constant downward load per horizontal projection on the specified three-hinged parabola. Their zero shear is local radial shear Q, not the generally nonzero vertical component V = w(L/2 − x). Uniform load per curved rib length is not the same load case.</p>",
                    sources: [
                        { id: "STRU935-00095", set: 10, question: 19 },
                        { id: "STRU935-00096", set: 10, question: 20 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: semicircular thrust needs the compatibility assumptions.</strong> STRU935-00070's half-span result is exactly <strong>2wR/(3π)</strong> in the constant-EI, bending-only model, not merely of the order wR/π. Full-span loading gives 4wR/(3π). STRU935-00072's radius-independent P/π result requires the same member/deformation assumptions; it is not a general claim that axial stiffness, temperature or support movement never affect an arch.</p>",
                    sources: [
                        { id: "STRU935-00070", set: 8, question: 17 },
                        { id: "STRU935-00072", set: 8, question: 19 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: symmetry is an assumption, not a definition of every arch.</strong> STRU935-00094's crown is the highest point, but need not be at horizontal midspan for an asymmetric profile. STRU935-00150's L/(4h) peak assumes a midspan internal hinge and level supports; a hinge at c instead gives c(L − c)/(Lh). A two-hinged crown is not an internal moment release.</p>",
                    sources: [
                        { id: "STRU935-00094", set: 10, question: 18 },
                        { id: "STRU935-00150", set: 15, question: 17 }
                    ]
                }
            ]
        }
    });
})();