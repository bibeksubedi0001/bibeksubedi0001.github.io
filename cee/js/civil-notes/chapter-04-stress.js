(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0402: {
            code: "ACiE0402",
            questionCount: 97,
            blocks: [
                {
                    id: "normal-shear-stress-and-units",
                    title: "Normal stress, shear stress and dimensions",
                    html: "<p><strong>Stress is internal force per unit area on a specified plane.</strong> A force alone is not a stress, and resistance to deformation without an area qualification is an incomplete definition. Normal stress σ acts perpendicular to the plane; shear stress τ acts tangentially. Use <strong>tension positive and compression negative</strong> throughout these notes. A tensile axial pair tends to lengthen a bar; a compressive pair tends to shorten it.</p>" +
                        "<p>A section resultant is the integral of its stress distribution. Thus σ = N/A or τ = V/A is an <em>average</em>; a uniform local distribution requires additional loading and geometry assumptions. Bending can produce normal stress, and restrained heating can produce normal stress: the cause of stress is different from its classification by direction.</p>" +
                        "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Meaning and consistent units</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>σ, τ, pressure, E, G, K</th><td>Force/area; 1 N/mm<sup>2</sup> = 1 MPa = 10<sup>6</sup> Pa. Elastic moduli have stress units, not force units.</td></tr>" +
                        "<tr><th scope='row'>A</th><td>Section area, mm<sup>2</sup> or m<sup>2</sup>.</td></tr>" +
                        "<tr><th scope='row'>I and J</th><td>Second and polar second moments of area, mm<sup>4</sup> or m<sup>4</sup>.</td></tr>" +
                        "<tr><th scope='row'>Z = I/c</th><td>Section modulus, mm<sup>3</sup> or m<sup>3</sup>; c is the extreme-fibre distance.</td></tr>" +
                        "<tr><th scope='row'>Normal strain and Poisson's ratio</th><td>Dimensionless ratios. Engineering shear strain is dimensionless, commonly expressed as an angle in radians for small distortion.</td></tr></tbody></table>" +
                        "<p><strong>Section modulus is geometric</strong>; Young's modulus E is constitutive. Their shared word does not give them the same physical meaning or dimensions.</p>",
                    sources: [
                        { id: "BASI674-00166", set: 14, question: 6 },
                        { id: "STRU935-00259", set: 24, question: 23 },
                        { id: "STRU935-00284", set: 27, question: 14 },
                        { id: "STRU935-00285", set: 27, question: 15 },
                        { id: "STRU935-00289", set: 27, question: 19 },
                        { id: "STRU935-00033", set: 4, question: 24 },
                        { id: "STRU935-00083", set: 9, question: 19 }
                    ]
                },
                {
                    id: "axial-stress-strain-and-stiffness",
                    title: "Axial stress, strain and member stiffness",
                    html: "<p>For a straight prismatic bar under a centred, gradually applied axial force N, away from load introduction, <strong>σ = N/A</strong>. Small engineering strain is <strong>ε = Δ/L</strong>, using original length L and signed extension Δ. With homogeneous linear-elastic response, σ = Eε gives <strong>Δ = NL/(AE)</strong>. N in N, A in mm<sup>2</sup>, E in N/mm<sup>2</sup> and L in mm give Δ in mm. Gradual loading means the static equilibrium result; no dynamic multiplier is implied.</p>" +
                        "<p><strong>Bank rod:</strong> diameter 2 cm = 20 mm, so A = π(20)<sup>2</sup>/4 = 100π mm<sup>2</sup>. The 20 kN pull gives σ = 20000/(100π) = 200/π = <strong>63.66 MPa</strong>. The listed 63.6 option is closest. The supplied 150 cm length is unnecessary for uniform stress; an extension cannot be calculated without E.</p>" +
                        "<p><strong>Bank strain, appearing in two models:</strong> σ = 70 N/mm<sup>2</sup> and E = 2 × 10<sup>5</sup> N/mm<sup>2</sup> give ε = 70/200000 = <strong>0.00035 = 350 microstrain = 0.035%</strong>. Dividing quantities with the same units removes the units; it does not make strain a uniquely fundamental material property. Stress measures internal force intensity, while strain measures deformation.</p>" +
                        "<p><strong>Axial rigidity is AE; member stiffness is k = N/Δ = AE/L.</strong> For fixed N, A and L, a larger E means a smaller Δ. This inverse comparison between different stiffnesses must not be confused with E changing as one linear-elastic specimen elongates under increasing load.</p>",
                    sources: [
                        { id: "BASI674-00168", set: 14, question: 8 },
                        { id: "BASI674-00169", set: 14, question: 9 },
                        { id: "STRU935-00292", set: 27, question: 22 },
                        { id: "STRU935-00182", set: 18, question: 15 },
                        { id: "STRU935-00296", set: 28, question: 14 },
                        { id: "STRU935-00268", set: 25, question: 20 }
                    ]
                },
                {
                    id: "vertical-bar-self-weight",
                    title: "A hanging bar: changing force and self-weight extension",
                    html: "<p>A cut through a hanging bar carries the end load plus the weight <em>below that cut</em>. Let x run downward from the upper support, with 0 ≤ x ≤ L. For constant area A, mass density ρ, gravitational acceleration g and downward end-load magnitude P, <strong>N(x) = P + ρgA(L − x)</strong>. Hence σ(x) = P/A + ρg(L − x): the upper section carries the greatest tensile stress, P/A + ρgL.</p>" +
                        "<p>Integrating each small extension, dΔ = N(x)dx/(AE), gives <strong>Δ = PL/(AE) + ρgL<sup>2</sup>/(2E)</strong>. For self-weight alone, Δ = WL/(2AE), where W = ρgAL is the total weight. The one-half follows from a triangular force distribution, not from applying only half the total weight at the free end.</p>" +
                        "<p>With unit weight γ<sub>w</sub> = ρg, the self-weight term is <strong>γ<sub>w</sub>L<sup>2</sup>/(2E)</strong>. γ<sub>w</sub> in N/m<sup>3</sup>, L in m and E in N/m<sup>2</sup> produce metres. Diameter cancels from this term because both weight and axial rigidity grow with A; it does not cancel from the end-load term.</p>" +
                        "<p>The bank's statement that density is 1 supplies neither a unit nor an unambiguous mass-density/unit-weight convention. Its L<sup>2</sup>/(2E) shortcut is conditional on <em>unit weight</em> being numerically 1 in a consistent unit system. A mass density of 1 still requires g.</p>",
                    sources: [
                        { id: "STRU935-00275", set: 26, question: 16 },
                        { id: "STRU935-00287", set: 27, question: 17 }
                    ]
                },
                {
                    id: "direct-shear-and-beam-shear",
                    title: "Average direct shear versus rectangular-beam shear",
                    html: "<p>In an ideal direct-shear block, average stress is tangential force divided by the resisting sliding-plane area. Interpreting the bank's upper-face displacement relative to its base as simple shear, <strong>A = 100 × 100 = 10000 mm<sup>2</sup></strong>. Thus 10 kN gives τ<sub>avg</sub> = 10000/10000 = <strong>1 N/mm<sup>2</sup> = 1 MPa</strong>, not 10 MPa. The 10 mm height and 1 mm relative displacement instead give engineering shear strain γ ≈ 1/10 = 0.1; the actual angular distortion is arctan(0.1). An edge-applied force does not establish a uniform local stress field.</p>" +
                        "<p>For transverse shear in a slender, homogeneous elastic beam, the elementary distribution is <strong>τ(y) = VQ(y)/[I b(y)]</strong>. V is the section shear force, I the second moment about the neutral axis, Q the first moment of the area above or below the level considered, and b(y) the width at that level. With N and mm, Q has mm<sup>3</sup>, I has mm<sup>4</sup> and b has mm, leaving N/mm<sup>2</sup>.</p>" +
                        "<p>For a solid rectangle of constant width b and depth h, with y measured from its centroidal neutral axis, I = bh<sup>3</sup>/12 and Q(y) = b[(h/2)<sup>2</sup> − y<sup>2</sup>]/2. Substitution gives <strong>τ(y) = [3V/(2bh)] [1 − 4y<sup>2</sup>/h<sup>2</sup>]</strong>.</p>" +
                        "<table><thead><tr><th scope='col'>Rectangle location or measure</th><th scope='col'>Shear result</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Top and bottom, y = ±h/2</th><td>Zero in the elementary distribution.</td></tr>" +
                        "<tr><th scope='row'>Neutral axis, y = 0</th><td>Maximum magnitude 1.5|V|/A.</td></tr>" +
                        "<tr><th scope='row'>Section average</th><td>V/A, not the local maximum.</td></tr></tbody></table>" +
                        "<p>The neutral axis is a location <em>within a section</em>, not necessarily midspan along a beam. Neither the 1.5 factor nor a universal neutral-axis maximum follows for arbitrary variable-width sections; examine Q/b and the applicable beam assumptions.</p>",
                    sources: [
                        { id: "STRU935-00291", set: 27, question: 21 },
                        { id: "STRU935-00031", set: 4, question: 22 },
                        { id: "STRU935-00230", set: 22, question: 17 },
                        { id: "STRU935-00290", set: 27, question: 20 }
                    ]
                },
                {
                    id: "plane-stress-and-traction-resolution",
                    title: "Plane stress and traction on a chosen plane",
                    html: "<p><strong>Plane stress</strong> sets σ<sub>z</sub> = τ<sub>xz</sub> = τ<sub>yz</sub> = 0. Symmetry of shear stress leaves three independent in-plane components: σ<sub>x</sub>, σ<sub>y</sub> and τ<sub>xy</sub>. Here positive τ<sub>xy</sub> acts in +y on the +x face and in +x on the +y face. This definition fixes the transformation signs.</p>" +
                        "<p><em>Traction derivation of the syllabus formulae:</em> let θ be the counterclockwise angle <strong>from +x to the plane's unit normal</strong>, not to the plane itself. Choose n = (cos θ, sin θ) and tangent m = (−sin θ, cos θ). The traction vector is t = σn, where σ denotes the in-plane stress tensor. Explicitly, t<sub>x</sub> = σ<sub>x</sub> cos θ + τ<sub>xy</sub> sin θ and t<sub>y</sub> = τ<sub>xy</sub> cos θ + σ<sub>y</sub> sin θ.</p>" +
                        "<p>Resolve that traction: <strong>σ<sub>n</sub> = n·t = σ<sub>x</sub> cos<sup>2</sup> θ + σ<sub>y</sub> sin<sup>2</sup> θ + 2τ<sub>xy</sub> sin θ cos θ</strong>. The signed tangential component is <strong>τ<sub>nm</sub> = m·t = (σ<sub>y</sub> − σ<sub>x</sub>) sin θ cos θ + τ<sub>xy</sub>(cos<sup>2</sup> θ − sin<sup>2</sup> θ)</strong>. Resultant traction magnitude is |t| = √(σ<sub>n</sub><sup>2</sup> + τ<sub>nm</sub><sup>2</sup>), combining components on the <em>same</em> plane.</p>" +
                        "<p>Stress transformation changes the observation plane, not the applied loading. It does not require E. Also, <strong>plane stress does not mean plane strain</strong>: for isotropic linear elasticity without thermal strain, ε<sub>z</sub> = −ν(σ<sub>x</sub> + σ<sub>y</sub>)/E, generally nonzero. Plane strain instead prescribes out-of-plane strains and may develop σ<sub>z</sub>.</p>",
                    sources: [
                        { id: "STRU935-00286", set: 27, question: 16 },
                        { id: "STRU935-00262", set: 1, question: 23 }
                    ]
                },
                {
                    id: "inclined-plane-axial-load-example",
                    title: "Inclined cut through the 20 kN bar",
                    html: "<p>For uniaxial tension σ = N/A, set σ<sub>y</sub> = τ<sub>xy</sub> = 0 in the traction equations. If θ is the angle of the <strong>plane normal</strong> to the rod axis, <strong>σ<sub>n</sub> = σ cos<sup>2</sup> θ</strong> and <strong>τ<sub>nm</sub> = −σ sin θ cos θ = −(σ/2) sin 2θ</strong> with the stated tangent convention. The normal stress varies from σ on the transverse cut to zero on a longitudinal cut.</p>" +
                        "<p>If instead α is the acute angle of the <strong>cut plane itself</strong> to the rod axis, its normal makes the complementary acute angle. Therefore σ<sub>n</sub> = σ sin<sup>2</sup> α and |τ| = σ sin α cos α. Complementing the angle exchanges sine and cosine in the normal-stress formula; it leaves this shear magnitude unchanged. The sign of shear still depends on which oriented face and tangent are chosen.</p>" +
                        "<p><strong>Bank calculation:</strong> N = 20000 N and A = 1000 mm<sup>2</sup> give σ = 20 MPa. Assuming the horizontal direction is the rod axis and the stated 30° describes the cut plane, σ<sub>n</sub> = 20 sin<sup>2</sup> 30° = <strong>5 MPa</strong>, while |τ| = 10 sin 60° = <strong>5√3 = 8.660 MPa</strong>. The inclined area is 1000/sin 30° = 2000 mm<sup>2</sup>, so |t| = 20000/2000 = 10 MPa; independently, √(5<sup>2</sup> + (5√3)<sup>2</sup>) = 10.</p>" +
                        "<p>If 30° instead labels the normal, σ<sub>n</sub> is <strong>15 MPa</strong>, with the same 8.660 MPa shear magnitude. Neither interpretation produces the keyed 0.866 MPa. The second occurrence prints the angle as 300; the 30° interpretation is explicitly conditional, not a silent repair of that stem.</p>",
                    sources: [
                        { id: "STRU935-00017", set: 3, question: 19 },
                        { id: "STRU935-00080", set: 9, question: 16 }
                    ]
                },
                {
                    id: "principal-stresses-and-planes",
                    title: "Principal stresses: zero shear and extreme normal stress",
                    html: "<p>A <strong>principal plane has zero shear traction</strong>. Its remaining normal component is a principal stress, which can be tensile, compressive or zero. Principal does not mean that both components are large: the defining condition is τ<sub>nm</sub> = 0. In two dimensions, the major and minor principal values are the greatest and least <em>signed</em> normal stresses obtainable by rotating the in-plane normal.</p>" +
                        "<p>Define <strong>C = (σ<sub>x</sub> + σ<sub>y</sub>)/2</strong>, <strong>D = (σ<sub>x</sub> − σ<sub>y</sub>)/2</strong> and <strong>R = √(D<sup>2</sup> + τ<sub>xy</sub><sup>2</sup>)</strong>. Then the ordered in-plane values are <strong>σ<sub>a</sub> = C + R</strong> and <strong>σ<sub>b</sub> = C − R</strong>, with σ<sub>a</sub> ≥ σ<sub>b</sub>. The squared shear term is added under the root, never subtracted.</p>" +
                        "<p>Where the bank gives only σ<sub>x</sub> and τ<sub>xy</sub>, the displayed two-component formula assumes σ<sub>y</sub> = 0. Its minor root is <strong>σ<sub>b</sub> = σ<sub>x</sub>/2 − √(σ<sub>x</sub><sup>2</sup>/4 + τ<sub>xy</sub><sup>2</sup>)</strong>. A positive axial stress plus nonzero shear can therefore produce a compressive minor principal stress.</p>" +
                        "<p>For distinct principal values, the two in-plane principal normals, and hence their planes, are perpendicular. Useful arithmetic checks are <strong>σ<sub>a</sub> + σ<sub>b</sub> = σ<sub>x</sub> + σ<sub>y</sub></strong> and <strong>σ<sub>a</sub>σ<sub>b</sub> = σ<sub>x</sub>σ<sub>y</sub> − τ<sub>xy</sub><sup>2</sup></strong>. If R = 0, all in-plane orientations are principal; an orthogonal pair can still be selected, but there is no unique major-plane direction.</p>",
                    sources: [
                        { id: "STRU935-00021", set: 3, question: 23 },
                        { id: "STRU935-00081", set: 9, question: 17 },
                        { id: "STRU935-00023", set: 4, question: 14 },
                        { id: "STRU935-00024", set: 4, question: 15 },
                        { id: "STRU935-00250", set: 24, question: 14 },
                        { id: "STRU935-00251", set: 24, question: 15 },
                        { id: "STRU935-00253", set: 24, question: 17 },
                        { id: "STRU935-00263", set: 25, question: 15 }
                    ]
                },
                {
                    id: "mohr-circle-orientation-and-obliquity",
                    title: "Mohr's circle, doubled angles and obliquity",
                    html: "<p>The transformation equations can be written <strong>σ<sub>n</sub> − C = D cos 2θ + τ<sub>xy</sub> sin 2θ</strong> and <strong>τ<sub>nm</sub> = −D sin 2θ + τ<sub>xy</sub> cos 2θ</strong>. Squaring and adding gives <strong>(σ<sub>n</sub> − C)<sup>2</sup> + τ<sub>nm</sub><sup>2</sup> = R<sup>2</sup></strong>: Mohr's circle. Normal stress is the horizontal coordinate; shear stress is the vertical coordinate.</p>" +
                        "<ol><li>Plot the perpendicular-face points (σ<sub>x</sub>, τ<sub>xy</sub>) and (σ<sub>y</sub>, −τ<sub>xy</sub>); they form a diameter.</li><li>Locate the centre (C, 0), radius R and normal-axis intercepts C ± R.</li><li>With positive τ plotted upward and the traction convention above, a counterclockwise rotation θ of the physical normal moves <em>clockwise through 2θ</em> on the circle. Books using the opposite shear ordinate reverse this direction.</li><li>For R ≠ 0, a major-principal normal satisfies <strong>2θ<sub>p</sub> = atan2(2τ<sub>xy</sub>, σ<sub>x</sub> − σ<sub>y</sub>)</strong>. atan2 retains the quadrant. The other principal normal is 90° away; maximum in-plane shear normals are 45° from them.</li></ol>" +
                        "<p>Do not substitute a plane angle directly for a normal angle or confuse a physical 45° with a Mohr-circle 45°. A 90° physical turn reaches the perpendicular face and corresponds to 180° on the circle.</p>" +
                        "<p><strong>Obliquity</strong> describes how resultant traction departs from the normal direction. The acute angle to the line of normal action obeys tan β = |τ<sub>nm</sub>|/|σ<sub>n</sub>| when σ<sub>n</sub> ≠ 0; signed direction needs the appropriate quadrant. It is zero for a nonzero purely normal traction, 90° for pure shear, and undefined for zero traction. It is not automatically an angle of friction or a universal failure condition.</p>" +
                        "<p>Mohr's circle transforms stresses arising from bending, torsion or other loading. First obtain those components from equilibrium and the relevant section formula; the circle does not supply a missing moment, torque or section size.</p>",
                    sources: [
                        { id: "STRU935-00266", set: 25, question: 18 },
                        { id: "STRU935-00267", set: 25, question: 19 },
                        { id: "STRU935-00265", set: 25, question: 17 }
                    ]
                },
                {
                    id: "principal-stress-worked-bank-cases",
                    title: "Worked principal-stress cases from the bank",
                    html: "<p>Compute the centre and radius separately before adding or subtracting. This separates the mean normal stress from the directional variation and provides two simple checks instead of one memorised answer. The table uses the tensile normal stresses explicitly supplied in the stems; the single-direct-stress case takes the unmentioned second direct component as zero. All entries are in <strong>MPa, equivalently N/mm<sup>2</sup></strong>.</p>" +
                        "<table><thead><tr><th scope='col'>Given (σ<sub>x</sub>, σ<sub>y</sub>, |τ<sub>xy</sub>|)</th><th scope='col'>Centre C and radius R</th><th scope='col'>In-plane principals (σ<sub>a</sub>, σ<sub>b</sub>)</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>(1200, 600, 400)</th><td>C = 900; R = √(300<sup>2</sup> + 400<sup>2</sup>) = 500.</td><td><strong>(1400, 400)</strong></td></tr>" +
                        "<tr><th scope='row'>(300, 0, 200)</th><td>C = 150; R = √(150<sup>2</sup> + 200<sup>2</sup>) = 250.</td><td><strong>(400, −100)</strong></td></tr>" +
                        "<tr><th scope='row'>(80, 60, 20)</th><td>C = 70; R = √(10<sup>2</sup> + 20<sup>2</sup>) = √500 ≈ 22.3607.</td><td><strong>(92.3607, 47.6393)</strong></td></tr></tbody></table>" +
                        "<p><strong>Independent checks using unrounded roots:</strong> the first pair sums to 1800 and multiplies to 560000 MPa<sup>2</sup>, matching 1200 × 600 − 400<sup>2</sup>. The second pair sums to 300 and multiplies to −40000 MPa<sup>2</sup>. The third pair sums to 140 and multiplies to 4400 MPa<sup>2</sup>, matching 80 × 60 − 20<sup>2</sup>.</p>" +
                        "<p>Reversing the shear direction changes principal-plane orientation but not these eigenvalues, because R contains τ<sub>xy</sub><sup>2</sup>. The stems supply shear magnitudes without a complete oriented element, so no unique signed principal-plane angle is asserted here. Nor do these stress calculations establish that a real material remains elastic at the stated high stresses.</p>",
                    sources: [
                        { id: "STRU935-00027", set: 4, question: 18 },
                        { id: "STRU935-00028", set: 4, question: 19 },
                        { id: "STRU935-00249", set: 23, question: 24 }
                    ]
                },
                {
                    id: "in-plane-versus-absolute-maximum-shear",
                    title: "Maximum in-plane shear is not always the absolute maximum",
                    html: "<p>For the two in-plane principal values, <strong>|τ|<sub>max,in-plane</sub> = R = (σ<sub>a</sub> − σ<sub>b</sub>)/2</strong>. Its planes have normals 45° from the in-plane principal normals and carry normal stress C, generally <em>not zero</em>. With unequal direct stresses and no initial shear, the given axes are principal, so the in-plane maximum occurs on their 45° bisectors. If the direct stresses are equal, R = 0 and no special in-plane shear orientation exists.</p>" +
                        "<p><strong>Absolute three-dimensional maximum:</strong> include every principal value. For plane stress the out-of-plane principal stress is σ<sub>z</sub> = 0, often labelled σ<sub>3</sub> before sorting. Reorder {σ<sub>a</sub>, σ<sub>b</sub>, 0} as σ<sub>I</sub> ≥ σ<sub>II</sub> ≥ σ<sub>III</sub>. Then <strong>|τ|<sub>max,absolute</sub> = (σ<sub>I</sub> − σ<sub>III</sub>)/2</strong>. The relevant plane normal bisects the directions of these global extreme principal stresses; it may leave the original xy plane.</p>" +
                        "<p><strong>Bank 60/80/20 case:</strong> taking the two unsigned normal stresses as tensile, C = 70 and R = √500 ≈ <strong>22.3607 MPa</strong>, the listed 22.4 result. The in-plane principals are 92.3607 and 47.6393 MPa. If this is plane stress, the third principal is zero, so the absolute maximum is <strong>(70 + √500)/2 ≈ 46.1803 MPa</strong>. The stem's unqualified maximum-shear wording hides this distinction.</p>" +
                        "<p><em>Plane-stress comparison derived from the other bank states:</em> (1400, 400, 0) gives an absolute maximum of 700 MPa, although its in-plane radius is 500 MPa. For (400, −100, 0), zero lies between the in-plane roots, and both maxima are 250 MPa. Equal biaxial tension s has zero in-plane shear but absolute maximum s/2 when σ<sub>z</sub> = 0. Always sort before taking the largest difference.</p>",
                    sources: [
                        { id: "STRU935-00029", set: 4, question: 20 },
                        { id: "STRU935-00264", set: 25, question: 16 },
                        { id: "STRU935-00252", set: 24, question: 16 },
                        { id: "STRU935-00027", set: 4, question: 18 },
                        { id: "STRU935-00028", set: 4, question: 19 }
                    ]
                },
                {
                    id: "poisson-ratio-from-measured-strains",
                    title: "Poisson's ratio: signs, measurements and zero lateral strain",
                    html: "<p>For uniaxial loading with free lateral surfaces, <strong>ν = −ε<sub>lateral</sub>/ε<sub>longitudinal</sub></strong>. Ordinary lateral contraction under tension is negative while axial extension is positive, so the minus sign gives positive ν. Some bank formulae write μ for Poisson's ratio; these notes use ν and reserve G for shear modulus. A ratio of stresses, or a strain divided by stress, is not Poisson's ratio.</p>" +
                        "<p><strong>Bank measurement:</strong> original diameter d = 30 mm, gauge length L = 200 mm and extension ΔL = 0.09 mm give ε<sub>longitudinal</sub> = 0.09/200 = 0.00045. Taking the 0.0045 mm diameter change as the intended contraction, Δd = −0.0045 mm, so ε<sub>lateral</sub> = −0.0045/30 = −0.00015. Thus <strong>ν = −(−0.00015)/0.00045 = 1/3</strong>. Use diameter change divided by original diameter, not area change divided by diameter.</p>" +
                        "<p>ν = 0 means no lateral strain <em>caused by that uniaxial stress</em>; it does not mean infinite stiffness or no longitudinal strain. Other independently applied stresses can still create lateral deformation. If the measured diameter instead increased during tension, the signed definition would give negative ν, rather than justify dropping the minus sign.</p>" +
                        "<p>For a stable, compressible isotropic linear-elastic solid with finite positive moduli, <strong>−1 &lt; ν &lt; 0.5</strong>. Negative values describe auxetic response and are not excluded by elasticity. The frequently quoted interval 0 to 0.5 describes many familiar materials, not all possible materials, and the isotropic bound must not be imposed indiscriminately on directional ratios of anisotropic solids.</p>",
                    sources: [
                        { id: "STRU935-00260", set: 24, question: 24 },
                        { id: "STRU935-00276", set: 26, question: 17 },
                        { id: "STRU935-00282", set: 26, question: 23 }
                    ]
                },
                {
                    id: "isotropic-elastic-moduli-and-conversions",
                    title: "E, G, K and ν: assumptions, derivation and numerical ratios",
                    html: "<p>For small-strain, isotropic <strong>linear elasticity</strong>, only two independent elastic constants are required. In a homogeneous solid those constants are also spatially uniform. Under uniaxial stress E = σ/ε; under simple shear <strong>G = τ/γ</strong>, with engineering shear strain γ, not tensor shear strain γ/2. Under uniform compressive pressure p, <strong>K = −p/ε<sub>v</sub></strong>, where ε<sub>v</sub> = ΔVol/Vol ≈ ε<sub>x</sub> + ε<sub>y</sub> + ε<sub>z</sub>. Positive pressure creates negative volume strain, leaving positive K.</p>" +
                        "<p>The isotropic identities are <strong>E = 2G(1 + ν)</strong>, <strong>E = 3K(1 − 2ν)</strong> and <strong>E = 9KG/(3K + G)</strong>. They are not unrestricted formulae for orthotropic materials or large nonlinear rubber deformation. All moduli must use the same stress units.</p>" +
                        "<p>Equating 2G(1 + ν) and 3K(1 − 2ν) gives (6K + 2G)ν = 3K − 2G. Therefore <strong>ν = (3K − 2G)/(6K + 2G)</strong>, not the bank's expression containing 4G in both positions. Other useful rearrangements are ν = E/(2G) − 1 and <strong>K = EG/[3(3G − E)]</strong>.</p>" +
                        "<table><thead><tr><th scope='col'>Bank data</th><th scope='col'>Calculation</th><th scope='col'>Result</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>ν = 0.25</th><td>E/G = 2(1 + 0.25)</td><td><strong>2.5</strong></td></tr>" +
                        "<tr><th scope='row'>ν = 0.3</th><td>E/K = 3(1 − 0.6)</td><td><strong>1.2</strong></td></tr>" +
                        "<tr><th scope='row'>E = 12, G = 4.8</th><td>K = (12 × 4.8)/[3(14.4 − 12)] = 57.6/7.2</td><td><strong>K = 8</strong> in the same unspecified modulus unit; ν = 12/9.6 − 1 = 0.25.</td></tr>" +
                        "<tr><th scope='row'>ν approaching 0.5</th><td>E/G approaches 2(1.5)</td><td><strong>E/G approaches 3</strong>; K tends to infinity for finite positive E.</td></tr></tbody></table>" +
                        "<p>The exact ν = 0.5 answer E = 3G describes the <strong>ideal incompressible limit</strong>, not a compressible solid with a finite K. A zero denominator in K = E/[3(1 − 2ν)] signals that limiting constraint, not K = 0. As a cross-check on the numerical case, (3 × 8 − 2 × 4.8)/(6 × 8 + 2 × 4.8) = 14.4/57.6 = 0.25.</p>",
                    sources: [
                        { id: "STRU935-00022", set: 3, question: 24 },
                        { id: "STRU935-00274", set: 26, question: 15 },
                        { id: "STRU935-00277", set: 26, question: 18 },
                        { id: "STRU935-00278", set: 26, question: 19 },
                        { id: "STRU935-00279", set: 26, question: 20 },
                        { id: "STRU935-00280", set: 26, question: 21 },
                        { id: "STRU935-00281", set: 26, question: 22 },
                        { id: "STRU935-00283", set: 26, question: 24 },
                        { id: "STRU935-00306", set: 28, question: 24 }
                    ]
                },
                {
                    id: "elastic-linear-and-nonlinear-response",
                    title: "Elastic recovery is different from a straight stress-strain curve",
                    html: "<p><strong>Elasticity concerns recovery after unloading; linearity concerns proportionality during loading.</strong> An ideally elastic specimen returns to its original dimensions without permanent set. It may nevertheless follow a curved stress-strain relation. Consequently, the phrase within elastic limits is not by itself enough to justify Hooke's law for every material.</p>" +
                        "<table><thead><tr><th scope='col'>Response</th><th scope='col'>Stress-strain behaviour</th><th scope='col'>Unloading implication</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Linear elastic</th><td>σ = Eε with constant E in the stated range.</td><td>Proportional recovery, with no permanent strain.</td></tr>" +
                        "<tr><th scope='row'>Nonlinear elastic</th><td>A curved constitutive relation; stiffness changes along the curve.</td><td>Recovery can still be complete.</td></tr>" +
                        "<tr><th scope='row'>Elastoplastic</th><td>Elastic strain plus irreversible plastic strain after yielding.</td><td>Residual strain remains after full unloading.</td></tr></tbody></table>" +
                        "<p>For one-dimensional normal loading, Hooke's law relates <strong>normal stress to corresponding axial strain</strong>. On a plot of stress vertically against strain horizontally, the initial straight-line slope is E, in Pa or MPa. A member's load-deformation plot instead has slope k, in N/mm or N/m. For a linear-elastic axial member of fixed geometry, k = AE/L; changing A or L changes member stiffness without changing the material's E.</p>" +
                        "<p>For a nonlinear curve, distinguish tangent modulus dσ/dε from secant modulus σ/ε at a stated point. Rubber provides the bank's familiar non-Hookean example over substantial deformation; steel, aluminium and copper are approximately Hookean only in appropriate small-strain ranges. Nonlinear response is not automatically plastic failure, and material elasticity alone does not prevent geometric nonlinearity in a whole structure.</p>",
                    sources: [
                        { id: "STRU935-00179", set: 17, question: 23 },
                        { id: "STRU935-00180", set: 17, question: 24 },
                        { id: "STRU935-00261", set: 25, question: 14 },
                        { id: "STRU935-00305", set: 28, question: 23 },
                        { id: "STRU935-00308", set: 29, question: 16 },
                        { id: "STRU935-00311", set: 29, question: 19 },
                        { id: "STRU935-00312", set: 29, question: 20 },
                        { id: "STRU935-00314", set: 29, question: 22 }
                    ]
                },
                {
                    id: "proportional-elastic-and-yield-limits",
                    title: "Proportional limit, elastic limit and yielding",
                    html: "<p>A tensile-test diagram contains several different landmarks. Learning their defining observations is safer than treating them as interchangeable points on every material's curve. The bank's familiar ordering describes an idealised mild-steel test, not a universal curve shared by all solids.</p>" +
                        "<table><thead><tr><th scope='col'>Landmark</th><th scope='col'>Defining observation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Proportional limit</th><td>Highest stress for which stress remains proportional to strain: the end of the initial straight line.</td></tr>" +
                        "<tr><th scope='row'>Elastic limit</th><td>Highest stress that leaves no permanent set after complete unloading. It is a recovery criterion, not a straightness criterion.</td></tr>" +
                        "<tr><th scope='row'>Yielding</th><td>Development of appreciable plastic deformation. Some steels show an upper yield peak, a lower yield level and a plateau; other materials yield smoothly.</td></tr></tbody></table>" +
                        "<p>The elastic limit is conventionally placed just beyond the proportional limit on the schematic used by the bank. They may be nearly coincident or difficult to distinguish experimentally. A nonlinearly elastic interval can lie between them: proportionality has ended but recovery remains possible.</p>" +
                        "<p>The proportional-limit <em>stress</em> is associated with the material in its specified condition, whereas the corresponding load also depends on section area. Temperature, prior treatment and test conditions matter; the bank's material-type answer is not evidence that these influences never exist.</p>" +
                        "<p>The rapid extension described in the yield questions means a large <strong>increment of strain for little additional stress</strong>, not a numerical comparison of strain with stress, which have different dimensions. Substantial plastic strain is irreversible; it must not be computed by extending the initial σ = Eε line through the yield region.</p>",
                    sources: [
                        { id: "STRU935-00309", set: 29, question: 17 },
                        { id: "STRU935-00313", set: 29, question: 21 },
                        { id: "STRU935-00315", set: 29, question: 23 },
                        { id: "STRU935-00320", set: 30, question: 17 },
                        { id: "DESI787-00027", set: 4, question: 31 },
                        { id: "STRU935-00310", set: 29, question: 18 }
                    ]
                },
                {
                    id: "plateau-hardening-necking-and-rupture",
                    title: "Yield plateau, strain hardening, ultimate stress and necking",
                    html: "<p>For the idealised mild-steel engineering stress-strain curve used in the bank, follow the sequence <strong>upper yield, lower yield, yield plateau, strain hardening, ultimate point, necking and rupture</strong>. These names describe stages with different mechanisms. The lower yield level leads into the plateau; the ultimate point is not the immediate physical stage after that plateau.</p>" +
                        "<ul><li><strong>Yield plateau:</strong> considerable plastic extension occurs at roughly constant nominal stress. Some materials have no distinct plateau.</li><li><strong>Strain hardening:</strong> further plastic deformation requires increasing flow stress. This does not imply that the initial elastic modulus E has increased by the same mechanism.</li><li><strong>Ultimate tensile strength:</strong> σ<sub>u</sub> = P<sub>max</sub>/A<sub>0</sub>, using maximum tensile load and original area. This is the peak of the engineering stress curve.</li><li><strong>Necking:</strong> deformation localises into a reducing section, conventionally beginning at the maximum load in a standard ductile tensile test. Engineering stress subsequently falls as load falls.</li><li><strong>Rupture:</strong> the specimen separates after the post-ultimate necking region.</li></ul>" +
                        "<p>Plastic deformation has already occurred before necking begins. Likewise, the nominal stress decrease after the ultimate point does not by itself prove that local material resistance is decreasing; the changing neck area must also be considered. A specimen may continue to harden locally while carrying a declining total load.</p>" +
                        "<p>When an MCQ offers ultimate point as the next named point after the plateau, it skips the intervening <strong>strain-hardening region</strong>. Retain that missing region in the conceptual sequence rather than drawing a plateau connected directly to rupture.</p>",
                    sources: [
                        { id: "STRU935-00316", set: 29, question: 24 },
                        { id: "STRU935-00317", set: 30, question: 14 },
                        { id: "STRU935-00321", set: 30, question: 18 }
                    ]
                },
                {
                    id: "engineering-true-stress-and-ductility",
                    title: "Engineering stress, true stress and measures of ductility",
                    html: "<p><strong>Engineering stress</strong> uses original area: σ<sub>eng</sub> = P/A<sub>0</sub>. <strong>True stress</strong> uses the current local area: σ<sub>true</sub> = P/A. At a neck these are different because A is smaller than A<sub>0</sub>. For approximately volume-conserving uniform plastic extension before necking, A<sub>0</sub>L<sub>0</sub> = AL gives σ<sub>true</sub> = σ<sub>eng</sub>(1 + ε<sub>eng</sub>). This conversion is not a substitute for measuring the actual neck area after localisation.</p>" +
                        "<p>At fracture, σ<sub>eng,f</sub> = P<sub>f</sub>/A<sub>0</sub> cannot exceed σ<sub>u</sub> = P<sub>max</sub>/A<sub>0</sub>, by the definition of maximum load. The average true fracture stress P<sub>f</sub>/A<sub>f</sub> is often larger than engineering UTS in a strongly necking ductile-metal test, but this comparison is <em>not guaranteed merely by the word ductile</em>.</p>" +
                        "<p>The exact comparison is <strong>σ<sub>true,f</sub>/σ<sub>u</sub> = (P<sub>f</sub>/P<sub>max</sub>)/(A<sub>f</sub>/A<sub>0</sub>)</strong>. It exceeds one only when P<sub>f</sub>/P<sub>max</sub> &gt; A<sub>f</sub>/A<sub>0</sub>. The source supplies no such measurements. Also, stress near a neck is multiaxial, so P/A<sub>f</sub> is a sectional average, not a complete local stress state.</p>" +
                        "<table><thead><tr><th scope='col'>Ductility measure</th><th scope='col'>Definition and interpretation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Percentage elongation</th><td>100(L<sub>f</sub> − L<sub>0</sub>)/L<sub>0</sub>, using a specified original gauge length and the reassembled fractured gauge length.</td></tr>" +
                        "<tr><th scope='row'>Percentage reduction of area</th><td>100(A<sub>0</sub> − A<sub>f</sub>)/A<sub>0</sub>, using the minimum final section.</td></tr></tbody></table>" +
                        "<p>Greater reduction of area indicates greater local plastic deformation in comparable tests. A ductile material permits substantial plastic strain before rupture; high strength, high E and large absolute extension of a long specimen are not themselves definitions of ductility.</p>",
                    sources: [
                        { id: "BASI674-00165", set: 14, question: 5 },
                        { id: "STRU935-00010", set: 2, question: 23 },
                        { id: "STRU935-00269", set: 25, question: 21 }
                    ]
                },
                {
                    id: "allowable-stress-proof-load-and-safety",
                    title: "Working stress, factor of safety and proof terminology",
                    html: "<p><strong>Permissible or allowable stress</strong> is the stress limit adopted for a specified design check; the bank calls it working stress. Actual service stress must be compared with that limit. The strength used to establish the limit must be identified: an ultimate-strength convention gives <strong>FOS = σ<sub>u</sub>/σ<sub>allow</sub></strong>, while a yield-based convention uses σ<sub>y</sub>/σ<sub>allow</sub>. Reversing the ratio gives neither convention.</p>" +
                        "<p>For a uniform axially stressed area, P<sub>allow</sub> = Aσ<sub>allow</sub>. This translates a stress criterion into a load criterion; it does not address other possible limits such as excessive deformation or instability. No numerical factor of safety or code-prescribed permissible stress is provided by these assigned questions.</p>" +
                        "<table><thead><tr><th scope='col'>Term</th><th scope='col'>What it measures</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Elastic-limit load</th><td>Load associated with the onset of permanent set for that specimen and loading arrangement.</td></tr>" +
                        "<tr><th scope='row'>Proof load</th><td>A specified verification load under a stated test criterion. The bank uses it as shorthand for the load threshold beyond which permanent set occurs.</td></tr>" +
                        "<tr><th scope='row'>Proof stress</th><td>A stress associated with a specified non-proportional or permanent strain criterion; the criterion must be stated.</td></tr>" +
                        "<tr><th scope='row'>Proof resilience</th><td>Maximum recoverable strain energy up to the elastic limit, an energy rather than a load or stress.</td></tr></tbody></table>" +
                        "<p>Keep these dimensions separate: load in N, stress in Pa and energy in J. Neither a proof test nor a factor-of-safety definition makes elastic limit, proportional limit and ultimate strength the same quantity. An unstated proof-strain percentage must not be invented from the answer choices.</p>",
                    sources: [
                        { id: "STRU935-00007", set: 2, question: 20 },
                        { id: "STRU935-00026", set: 4, question: 17 },
                        { id: "STRU935-00307", set: 29, question: 15 }
                    ]
                },
                {
                    id: "material-directionality-and-time-dependence",
                    title: "Isotropy, orthotropy, creep and viscoelasticity",
                    html: "<p>Material descriptions answer different questions: whether properties vary with <strong>direction</strong>, with <strong>position</strong>, with <strong>time</strong>, or with <strong>plastic history</strong>. These classifications are not mutually interchangeable.</p>" +
                        "<table><thead><tr><th scope='col'>Description</th><th scope='col'>Meaning and limitation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Isotropic</th><td>Elastic response is the same in every direction at a point. This does not by itself say that every point has identical properties.</td></tr>" +
                        "<tr><th scope='row'>Homogeneous</th><td>Properties do not vary from point to point. A homogeneous material can still be direction-dependent.</td></tr>" +
                        "<tr><th scope='row'>Orthotropic</th><td>Elastic response has three mutually perpendicular material symmetry directions, generally with different directional properties. Timber's longitudinal and transverse responses illustrate the distinction; not every anisotropic material is orthotropic.</td></tr>" +
                        "<tr><th scope='row'>Viscoelastic</th><td>Response combines elastic and time-dependent viscous behaviour. Recovery may be delayed or incomplete depending on the material model; a small plastic zone is not its definition.</td></tr>" +
                        "<tr><th scope='row'>Strain hardening</th><td>Plastic history raises the stress needed for further plastic flow. This is not necessarily an increase in elastic modulus.</td></tr></tbody></table>" +
                        "<p><strong>Creep is time-dependent growth of strain under sustained load or stress.</strong> It must be distinguished from immediate elastic extension and from a yield plateau observed during changing load. The time-dependent strain need not all be irreversible plastic strain: some viscoelastic creep can recover after unloading. Under a fixed load, changing area can also change true stress, so constant load and constant true stress are not identical test conditions.</p>" +
                        "<p>Elevated temperature is important for creep in many metals, but it is not part of the definition: materials such as concrete and polymers can exhibit significant time dependence at ordinary service temperatures. The assigned questions supply no duration, temperature or constitutive parameters from which a creep magnitude could be calculated.</p>",
                    sources: [
                        { id: "STRU935-00271", set: 25, question: 23 },
                        { id: "STRU935-00272", set: 25, question: 24 },
                        { id: "STRU935-00322", set: 30, question: 19 },
                        { id: "STRU935-00270", set: 25, question: 22 },
                        { id: "STRU935-00273", set: 26, question: 14 }
                    ]
                },
                {
                    id: "thermal-restraint-and-composite-compatibility",
                    title: "Thermal strain: free expansion, fixed walls and joined bars",
                    html: "<p>The assigned thermal questions require distinguishing <strong>compatibility</strong> from free expansion. For uniform temperature change ΔT in a uniaxial linear-elastic bar, <strong>ε = σ/E + αΔT</strong>, where α is the linear thermal-expansion coefficient in K<sup>−1</sup>. A free bar has σ = 0 and ΔL = αLΔT. A fully restrained bar has ε = 0, hence <strong>σ = −EαΔT</strong>: heating produces compression when α is positive.</p>" +
                        "<p><strong>Joined composite interpretation:</strong> take two initially unstressed, equal-length parallel bars joined to common rigid end plates, with no external axial load and with the plates free to move apart. This is an explicit model for the end-joined source, not the fixed-wall model. Both bars have common total strain ε, while equilibrium requires σ<sub>A</sub>A<sub>A</sub> + σ<sub>B</sub>A<sub>B</sub> = 0.</p>" +
                        "<p>Combining equilibrium with σ<sub>i</sub> = E<sub>i</sub>(ε − α<sub>i</sub>ΔT) gives <strong>ε = [(E<sub>A</sub>A<sub>A</sub>α<sub>A</sub> + E<sub>B</sub>A<sub>B</sub>α<sub>B</sub>)/(E<sub>A</sub>A<sub>A</sub> + E<sub>B</sub>A<sub>B</sub>)] ΔT</strong>. A<sub>A</sub> and A<sub>B</sub> denote areas. For positive stiffnesses, heating and α<sub>A</sub> &gt; α<sub>B</sub>, this common strain lies between the free thermal strains: <strong>A is compressed and B is tensioned</strong>. A is held shorter than it wants to be; B is pulled longer than it wants to be.</p>" +
                        "<p><strong>Two bars secured against expansion between unyielding walls:</strong> suppressing each bar's total extension gives σ<sub>A</sub> = −E<sub>A</sub>α<sub>A</sub>ΔT and σ<sub>B</sub> = −E<sub>B</sub>α<sub>B</sub>ΔT. For positive expansion coefficients, <strong>both are in compression</strong>; a difference in α changes magnitudes, not these signs. Do not import the freely moving composite's self-equilibrating tensile stress into this restraint condition. The source's same-material/different-coefficient wording also needs qualification.</p>",
                    sources: [
                        { id: "STRU935-00254", set: 24, question: 18 },
                        { id: "STRU935-00294", set: 27, question: 23 }
                    ]
                },
                {
                    id: "eccentric-compression-and-middle-third",
                    title: "Direct stress plus bending: the middle-third rule",
                    html: "<p>An eccentric compressive load combines uniform compression with a linear bending-stress distribution. Let P be the <em>positive magnitude</em> of the compressive force and M the bending moment about a centroidal axis. Keeping tension positive, a symmetric section has extreme stresses <strong>σ = −P/A ± M/Z</strong>, where Z = I/c. With eccentricity magnitude |e| = |M|/P, avoiding tensile stress requires −P/A + |M|/Z ≤ 0, or <strong>|e| ≤ Z/A</strong>.</p>" +
                        "<p>For a rectangle of width b and depth h in the direction of eccentricity, A = bh, I = bh<sup>3</sup>/12 and Z = bh<sup>2</sup>/6. Therefore <strong>Z/A = h/6</strong>. The admissible interval runs h/6 on each side of the centroid, spanning the <strong>middle third h/3</strong> of that dimension.</p>" +
                        "<table><thead><tr><th scope='col'>Resultant location</th><th scope='col'>Linear full-section prediction</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>e = 0</th><td>Uniform compression of magnitude P/A.</td></tr>" +
                        "<tr><th scope='row'>|e| &lt; h/6</th><td>Both edges remain in compression.</td></tr>" +
                        "<tr><th scope='row'>|e| = h/6</th><td>One edge reaches zero stress; the other has compression magnitude 2P/A.</td></tr>" +
                        "<tr><th scope='row'>|e| &gt; h/6</th><td>The formula predicts tension at one edge; a no-tension material or contact interface needs a revised effective compression zone.</td></tr></tbody></table>" +
                        "<p>The literal middle-third result belongs to rectangular sections, including squares, under <strong>uniaxial eccentricity</strong> and the assumed linear stress distribution. The more general no-tension concept is the kern or core; other shapes have different limits. <em>Shape-comparison extension:</em> a solid circular section of radius R has Z/A = (πR<sup>3</sup>/4)/(πR<sup>2</sup>) = R/4, not a middle-third dimension. Biaxial eccentricity requires checking all extreme corners or fibres, not applying two independent one-dimensional allowances without interaction.</p>",
                    sources: [
                        { id: "HYDR626-00021", set: 4, question: 62 },
                        { id: "HYDR626-00028", set: 5, question: 60 }
                    ]
                },
                {
                    id: "circular-shaft-torsional-stress",
                    title: "Circular-shaft torsion and the radial shear distribution",
                    html: "<p>For a straight prismatic circular shaft of homogeneous isotropic linear-elastic material, away from load-introduction effects, <strong>τ(r) = Tr/J</strong>. T is internal torque, r distance from the shaft axis and <strong>J = ∫r<sup>2</sup>dA</strong> the polar second moment of area. This elementary torsion law assumes small strains and circular-section behaviour; it is not a general formula for arbitrary noncircular sections.</p>" +
                        "<table><thead><tr><th scope='col'>Circular section</th><th scope='col'>J</th><th scope='col'>Maximum shear magnitude</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Solid, diameter d</th><td>πd<sup>4</sup>/32</td><td><strong>16|T|/(πd<sup>3</sup>)</strong> at r = d/2.</td></tr>" +
                        "<tr><th scope='row'>Hollow, outer D and inner d<sub>i</sub></th><td>π(D<sup>4</sup> − d<sub>i</sub><sup>4</sup>)/32</td><td>16|T|D/[π(D<sup>4</sup> − d<sub>i</sub><sup>4</sup>)] at r = D/2.</td></tr></tbody></table>" +
                        "<p>For a solid shaft, r = 0 gives <strong>zero shear at the centre</strong>; stress magnitude rises linearly to its maximum at the outer edge. This linear radial distribution differs from the parabolic transverse-shear distribution in a rectangular beam. In a hollow shaft, the axis lies in the void, not in material to which a zero-stress statement can be applied.</p>" +
                        "<p>T in N·mm, r in mm and J in mm<sup>4</sup> give τ in N/mm<sup>2</sup>. Torque has force-times-length units; it is not a shear force. Material far from the axis contributes strongly to J, explaining the usefulness of hollow shafts, but removing a core at fixed outer diameter still reduces J relative to the solid section.</p>" +
                        "<p><em>Torsion-syllabus extension:</em> the hollow-section expressions follow by subtracting the inner circular polar moment. No hollow-shaft numerical dimensions are supplied in the assigned questions.</p>",
                    sources: [
                        { id: "STRU935-00025", set: 4, question: 16 },
                        { id: "STRU935-00032", set: 4, question: 23 }
                    ]
                },
                {
                    id: "torque-diagrams-twist-stiffness-and-power",
                    title: "Torque diagrams, twist, torsional rigidity and power",
                    html: "<p>Find internal torque by cutting the shaft and balancing the signed applied torques on one side. With concentrated applied torques, the internal-torque diagram is constant between application points and jumps by the applied torque's magnitude at each point. This is analogous to the shear-force diagram under point forces, not the bending-moment diagram. A <em>constant</em> distributed torque per unit length gives a linear internal-torque segment.</p>" +
                        "<p>For a uniform circular shaft with constant T, G and J, the elastic shear strain satisfies γ(r) = rφ/L. Combining τ = Gγ with τ = Tr/J gives <strong>φ = TL/(GJ)</strong>. Here φ is relative end twist in radians, L is length and G is shear modulus. The product <strong>GJ is torsional rigidity</strong>; the member's torque-per-twist stiffness is <strong>k<sub>t</sub> = T/φ = GJ/L</strong>. A longer shaft has less member stiffness even if GJ is unchanged.</p>" +
                        "<p>With N and mm, GJ has units N·mm<sup>2</sup>, while k<sub>t</sub> is reported in N·mm/rad. The bank calls GJ torsional stiffness; distinguish that sectional usage from the stiffness of a shaft of specified length.</p>" +
                        "<p><em>Torsion-syllabus extensions:</em> for constant-property segments, add signed twists, <strong>φ = Σ[T<sub>i</sub>L<sub>i</sub>/(G<sub>i</sub>J<sub>i</sub>)]</strong>; with continuously varying properties use ∫T(x)/[G(x)J(x)] dx. Opposite torques can produce cancelling twists while still generating nonzero local stresses.</p>" +
                        "<p><em>Power extension:</em> transmitted mechanical power is <strong>P<sub>power</sub> = Tω</strong>. For speed n in revolutions per minute, ω = 2πn/60 rad/s, so P<sub>power</sub> = 2πnT/60. Use T in N·m for power in watts, not N·mm without conversion. Torque describes twisting load; angular speed is also needed for power. The assigned bank supplies no numerical torque-speed or twist dataset.</p>",
                    sources: [
                        { id: "STRU935-00244", set: 23, question: 19 },
                        { id: "STRU935-00332", set: 1, question: 25 }
                    ]
                },
                {
                    id: "bending-torsion-and-principal-normal-stress",
                    title: "Bending with torsion, and why pure torsion has principal normal stresses",
                    html: "<p>For a solid circular shaft of diameter d, elastic bending produces extreme axial stress magnitude <strong>|σ<sub>bend</sub>| = |M|c/I = 32|M|/(πd<sup>3</sup>)</strong>, with I = πd<sup>4</sup>/64 and c = d/2. Torsion produces surface shear magnitude <strong>|τ<sub>tor</sub>| = 16|T|/(πd<sup>3</sup>)</strong>. Their ratio is <strong>2|M|/|T|</strong> for nonzero T, matching the bank when M and T denote magnitudes.</p>" +
                        "<p>That ratio compares the <em>bending normal component</em> with the <em>torsional shear component</em>. At an extreme bending fibre, transformation of the combined state instead gives <strong>σ<sub>±</sub> = σ<sub>bend</sub>/2 ± √[(σ<sub>bend</sub>/2)<sup>2</sup> + τ<sub>tor</sub><sup>2</sup>]</strong>, with a third principal stress zero in the elementary free-surface model. Its maximum shear magnitude is the square-root term, not simply |τ<sub>tor</sub>| when bending is present.</p>" +
                        "<p><strong>Pure torsion:</strong> setting M = 0 leaves zero axial normal component on a transverse cross-section, but the local stress state is pure shear. The principal values are <strong>+|τ|, 0 and −|τ|</strong>. The tensile and compressive principal-plane normals lie at 45° to the original axial and circumferential directions; the radial principal direction carries zero normal stress. Thus the greatest tensile normal stress anywhere in the solid shaft is <strong>16|T|/(πd<sup>3</sup>)</strong>, reached at the surface on a principal plane; it is not zero for nonzero torque.</p>" +
                        "<p>There is no contradiction between zero normal traction on one chosen plane and nonzero normal traction on a rotated plane. Mohr's circle for pure shear is centred at zero with radius |τ|; its horizontal intercepts show the tensile and compressive principal stresses directly. The bank's maximum-normal-stress question confuses these two observations.</p>",
                    sources: [
                        { id: "STRU935-00079", set: 9, question: 15 },
                        { id: "STRU935-00255", set: 24, question: 19 }
                    ]
                },
                {
                    id: "fracture-patterns-and-loading-mode",
                    title: "Fracture patterns: distinguish tension, compression and torsion",
                    html: "<p>Stress transformation identifies candidate tensile and shear planes; it does not by itself establish a universal material failure law. Ductile metals generally accommodate plastic shear, while brittle tensile fracture is sensitive to principal tension and defects. The following are <strong>conventional short-specimen test tendencies</strong>, subject to material, stress state and test conditions.</p>" +
                        "<table><thead><tr><th scope='col'>Loading and material</th><th scope='col'>Typical observation</th><th scope='col'>Interpretation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Brittle tension</th><td>Fracture approximately transverse to the specimen axis.</td><td>The transverse plane is normal to the axial principal tension.</td></tr>" +
                        "<tr><th scope='row'>Ductile tension</th><td>Necking and often cup-and-cone fracture, with an approximately transverse central region and inclined outer shear lips.</td><td>The familiar 45° statement describes shear localisation or lips, not every part of the fracture surface.</td></tr>" +
                        "<tr><th scope='row'>Brittle compression, including cast iron</th><td>Often an oblique shear fracture, represented as about 45° in elementary questions.</td><td>End friction, confinement and tensile splitting can change the observed pattern; an exact angle is not guaranteed.</td></tr>" +
                        "<tr><th scope='row'>Ductile compression</th><td>Large shortening and lateral bulging; platen friction can cause barreling.</td><td>A unique fracture plane may not develop in an ordinary compression test.</td></tr>" +
                        "<tr><th scope='row'>Ductile torsion</th><td>Generally a transverse fracture across the shaft.</td><td>Shear acts on the transverse cross-section; it is a maximum-shear orientation.</td></tr>" +
                        "<tr><th scope='row'>Brittle torsion</th><td>Generally a helical fracture inclined about 45° to the shaft axis.</td><td>Pure shear produces principal tension on rotated planes, favouring tensile fracture.</td></tr></tbody></table>" +
                        "<p><strong>Do not transfer the brittle-tension transverse pattern to brittle torsion.</strong> The applied torque is a couple, so perpendicular to the load is ambiguous unless the shaft axis is identified. Likewise, ductile tensile shear lips do not imply that every ductile compression specimen fractures on a 45° plane.</p>" +
                        "<p>A full failure prediction needs the material criterion, geometry, defects, restraint and loading history. In particular, instability of a long compressed member is a structural issue distinct from the fracture morphology of a short material-test specimen.</p>",
                    sources: [
                        { id: "STRU935-00298", set: 28, question: 16 },
                        { id: "STRU935-00299", set: 28, question: 17 },
                        { id: "STRU935-00300", set: 28, question: 18 },
                        { id: "STRU935-00301", set: 28, question: 19 },
                        { id: "STRU935-00302", set: 28, question: 20 },
                        { id: "STRU935-00303", set: 28, question: 21 },
                        { id: "STRU935-00304", set: 28, question: 22 }
                    ]
                }
            ],
            gaps: [
                "The 97 assigned sources contain no numerical principal-plane-angle or strain-rosette task. The traction derivation, quadrant-aware angle procedure and three-dimensional comparisons develop the official stress-analysis scope; they are not additional bank questions or measured data.",
                "No numerical shaft-diameter/torque/speed/twist dataset is supplied. Hollow-section, segmented-twist and power relations are labelled torsion-syllabus extensions; no missing dimensions, torques or speeds have been invented.",
                "The thermal cases lack numerical expansion coefficients, temperature changes, areas and detailed restraint diagrams, while the self-weight question gives density 1 without units. Their derivations are conditional on the stated mechanical interpretations, not evidence of unstated source data.",
                "There is no complete tensile-test dataset, specified proof-strain criterion or assigned impact/suddenly applied load calculation. No NS/IS test constants, numerical allowable stresses or universal fracture-angle acceptance limits are asserted."
            ],
            cautions: [
                {
                    html: "<p><strong>Inclined-plane decimal error:</strong> both 20 kN/1000 mm<sup>2</sup> items key 0.866 N/mm<sup>2</sup>. Under the intended 30° axial-cut interpretation, |τ| = (20/2) sin 60° = <strong>8.660 N/mm<sup>2</sup></strong>; none of their listed values matches. Model 9 prints 300, so its angle needs clarification. A 30° plane and a 30° normal give different normal stresses, 5 and 15 MPa respectively, even though these two complementary interpretations give the same shear magnitude.</p>",
                    sources: [
                        { id: "STRU935-00017", set: 3, question: 19 },
                        { id: "STRU935-00080", set: 9, question: 16 }
                    ]
                },
                {
                    html: "<p><strong>Direct-shear area conflict:</strong> using the stated 100 mm × 100 mm sliding base gives <strong>1 MPa</strong>, absent from the options. The keyed 10 MPa would require 1000 mm<sup>2</sup>, not the stated base area. Height and displacement describe distortion, not a replacement area. The phrase upper edge also prevents inferring an exact uniform local stress without a loading diagram; the calculation is a face-average simple-shear interpretation.</p>",
                    sources: [{ id: "STRU935-00291", set: 27, question: 21 }]
                },
                {
                    html: "<p><strong>Maximum-shear scope:</strong> the 60/80/20 item yields <strong>22.3607 MPa in-plane</strong> on the positive-normal-stress reading used by its key, but <strong>46.1803 MPa absolutely</strong> if σ<sub>z</sub> = 0. Its normal-stress signs and three-dimensional scope are not fully stated. The two-principal-value formula is an in-plane result unless those values are the global extremes. The biaxial 45° rule assumes initially shear-free, unequal direct stresses; equal biaxial stresses give zero shear on every in-plane orientation.</p>",
                    sources: [
                        { id: "STRU935-00029", set: 4, question: 20 },
                        { id: "STRU935-00264", set: 25, question: 16 },
                        { id: "STRU935-00252", set: 24, question: 16 }
                    ]
                },
                {
                    html: "<p><strong>Neutral-axis generalisation:</strong> the beam question gives no section shape. A neutral-axis maximum is correct for the elementary solid rectangle, but not a theorem for every beam cross-section. The local distribution depends on Q(y)/b(y); also, neutral axis identifies a point within a section, not a longitudinal station such as midspan.</p>",
                    sources: [{ id: "STRU935-00230", set: 22, question: 17 }]
                },
                {
                    html: "<p><strong>Rigidity versus member stiffness:</strong> the keyed product GJ is torsional rigidity, with units force × length<sup>2</sup>. The torque required per radian of end twist for a uniform shaft is <strong>GJ/L</strong>. The bank uses stiffness in a sectional sense; do not omit length when calculating the response of an actual shaft.</p>",
                    sources: [{ id: "STRU935-00244", set: 23, question: 19 }]
                },
                {
                    html: "<p><strong>Which shaft shear stress?</strong> the ratio 2M/T assumes a circular shaft and compares maximum bending normal stress with the torsion-induced shear component, using load magnitudes. If maximum shear means the transformed combined bending-torsion stress state, its magnitude is √[(σ<sub>bend</sub>/2)<sup>2</sup> + τ<sub>tor</sub><sup>2</sup>], so the keyed ratio is not that comparison.</p>",
                    sources: [{ id: "STRU935-00079", set: 9, question: 15 }]
                },
                {
                    html: "<p><strong>Pure-torsion normal-stress miskey:</strong> zero is the axial normal component on the transverse plane, not the maximum normal stress over all planes. For the stated solid circular shaft, the maximum tensile principal stress is <strong>16|T|/(πd<sup>3</sup>)</strong> under elementary elastic torsion. Of the actual choices 3T/(πd<sup>3</sup>), None and Zero, <strong>None</strong> is the appropriate choice for nonzero torque; the stored Zero key and contradictory explanation are not followed here.</p>",
                    sources: [{ id: "STRU935-00255", set: 24, question: 19 }]
                },
                {
                    html: "<p><strong>End-joined thermal composite:</strong> for equal-length parallel bars sharing movable rigid end plates without external axial force, the higher-expansion material A is compressed and B is tensioned on heating. The stored tension-in-A/compression-in-B key reverses those signs. End joining alone does not fully specify restraint; the derivation states the free-composite assumptions rather than inventing fixed supports.</p>",
                    sources: [{ id: "STRU935-00254", set: 24, question: 18 }]
                },
                {
                    html: "<p><strong>Fixed-wall thermal conflict:</strong> the second source explicitly describes unyielding walls. With both expansions prevented and positive α values, <strong>both bars are compressed</strong>, not A compressed and B tensioned. That keyed pattern belongs to a different, freely expanding composite arrangement. Describing the bars as the same material while assigning different expansion coefficients at the same conditions is an additional inconsistency; no numerical stress can be inferred.</p>",
                    sources: [{ id: "STRU935-00294", set: 27, question: 23 }]
                },
                {
                    html: "<p><strong>Poisson sign and limiting assumptions:</strong> the signed definition is <strong>ν = −ε<sub>lateral</sub>/ε<sub>longitudinal</sub></strong>. The unsigned bank wording is conventional only when comparing contraction and extension magnitudes. The explanation's restriction to 0–0.5 is not universal: stable compressible isotropic elasticity permits −1 &lt; ν &lt; 0.5. The ν = 0.5 result E = 3G is the ideal incompressible limit with unbounded K, not a finite-bulk-modulus compressible case.</p>",
                    sources: [
                        { id: "STRU935-00260", set: 24, question: 24 },
                        { id: "STRU935-00274", set: 26, question: 15 }
                    ]
                },
                {
                    html: "<p><strong>Incorrect K–G relation:</strong> combining E = 2G(1 + ν) with E = 3K(1 − 2ν) gives <strong>ν = (3K − 2G)/(6K + 2G)</strong>, the actual option c. The stored option b, (3K − 4G)/(6K + 4G), does not satisfy those identities. The bank explanation's attempt to equate the two expressions is algebraically incorrect.</p>",
                    sources: [{ id: "STRU935-00283", set: 26, question: 24 }]
                },
                {
                    html: "<p><strong>Density and self-weight units:</strong> the hanging-bar expression is <strong>Δ = ρgL<sup>2</sup>/(2E) = γ<sub>w</sub>L<sup>2</sup>/(2E)</strong>. A stated density of 1 without units does not justify discarding g. The keyed L<sup>2</sup>/(2E) can only be a numerical unit-weight convention, not a dimensionally complete formula using mass density.</p>",
                    sources: [{ id: "STRU935-00275", set: 26, question: 16 }]
                },
                {
                    html: "<p><strong>Proof-load terminology:</strong> onset of permanent set physically identifies the specimen's elastic-limit load. The bank labels that threshold proof load, but actual proof loads are specified verification loads with an acceptance criterion. Do not infer a universal proof stress, a proof-strain percentage, or proof resilience from that load wording.</p>",
                    sources: [{ id: "STRU935-00007", set: 2, question: 20 }]
                },
                {
                    html: "<p><strong>True fracture stress is a conditional comparison:</strong> the keyed statement is a common ductile-metal test tendency, not an identity for every ductile material. The condition for true fracture stress to exceed engineering UTS is <strong>P<sub>f</sub>/P<sub>max</sub> &gt; A<sub>f</sub>/A<sub>0</sub></strong>; the source gives neither ratio. Nominal fracture stress cannot exceed the maximum nominal stress by definition, while local neck stress also needs multiaxial interpretation.</p>",
                    sources: [{ id: "BASI674-00165", set: 14, question: 5 }]
                },
                {
                    html: "<p><strong>Hooke's law and curve limits:</strong> the two elastic-range wordings require the <em>linear</em> elastic range, ending at the proportional limit. Nonlinear elastic recovery does not obey constant-E proportionality. The elastic-limit point conventionally shown after the proportional limit is a recovery boundary; the two may nearly coincide and are not necessarily visibly separated in every material.</p>",
                    sources: [
                        { id: "STRU935-00305", set: 28, question: 23 },
                        { id: "STRU935-00312", set: 29, question: 20 },
                        { id: "STRU935-00315", set: 29, question: 23 }
                    ]
                },
                {
                    html: "<p><strong>Stage omitted after the plateau:</strong> ultimate point is the later named landmark among the available choices, but a <strong>strain-hardening region</strong> intervenes after the yield plateau in the conventional mild-steel curve. Do not merge the plateau, hardening region and ultimate stress into a single event.</p>",
                    sources: [{ id: "STRU935-00317", set: 30, question: 14 }]
                },
                {
                    html: "<p><strong>Unfounded fundamental-property premise:</strong> being a ratio or being dimensionless does not make strain intrinsically more fundamental than stress. Strain is a kinematic measure and stress is a force-intensity measure; their relation requires a constitutive model. Neither is a fixed material property like an elastic modulus, and the offered reasons do not establish the asserted hierarchy.</p>",
                    sources: [{ id: "STRU935-00268", set: 25, question: 20 }]
                },
                {
                    html: "<p><strong>What is held fixed?</strong> E does not vary with extension while a given specimen remains in its linear-elastic material range, which explains the bank's None interpretation. But comparing different E values at fixed N, A and L gives <strong>Δ = NL/(AE)</strong>, an inverse dependence of extension on E. The question does not clearly distinguish these two experiments.</p>",
                    sources: [{ id: "STRU935-00296", set: 28, question: 14 }]
                },
                {
                    html: "<p><strong>Time dependence and hardening terminology:</strong> creep means increasing strain under sustained loading; it is not restricted universally to irreversible plastic strain. Viscoelasticity is not defined by a small plastic zone. Also, the strain-hardening option's stiffening shorthand means increased resistance to subsequent plastic flow, not necessarily a larger Young's modulus.</p>",
                    sources: [
                        { id: "STRU935-00270", set: 25, question: 22 },
                        { id: "STRU935-00272", set: 25, question: 24 }
                    ]
                },
                {
                    html: "<p><strong>Torsion fracture reversal:</strong> the brittle-torsion source incorrectly keys a plane perpendicular to the longitudinal axis. The conventional brittle pattern is a <strong>45° helical tensile fracture</strong>; a generally transverse maximum-shear fracture is characteristic of ductile torsion. The ductile source's perpendicular-to-load wording should be read as perpendicular to the <em>shaft axis</em>, since torque has no single force direction. These are typical test patterns, not universal failure laws.</p>",
                    sources: [
                        { id: "STRU935-00299", set: 28, question: 17 },
                        { id: "STRU935-00300", set: 28, question: 18 }
                    ]
                },
                {
                    html: "<p><strong>Tension and compression fracture qualifications:</strong> in a common ductile tensile cup-and-cone fracture, the central region is approximately transverse and the <em>outer shear lips</em> are inclined near 45°; the tensile explanation reverses those locations and should not be copied. The cast-iron and brittle-compression oblique/45° answers are elementary tendencies influenced by end friction and confinement; splitting or other patterns can occur. They do not prescribe one fracture angle for every brittle material in compression.</p>",
                    sources: [
                        { id: "STRU935-00302", set: 28, question: 20 },
                        { id: "STRU935-00298", set: 28, question: 16 },
                        { id: "STRU935-00303", set: 28, question: 21 }
                    ]
                },
                {
                    html: "<p><strong>Mohr and obliquity scope:</strong> Mohr's circle can transform stress states generated by bending or torsion, but it cannot replace equilibrium or determine missing loads and geometry. The angle-of-obliquity name is correct; the explanation's assertion that obliquity always reaches its maximum on a failure plane is not a general structural-mechanics result. A failure criterion would have to be specified separately.</p>",
                    sources: [
                        { id: "STRU935-00266", set: 25, question: 18 },
                        { id: "STRU935-00265", set: 25, question: 17 }
                    ]
                }
            ]
        }
    });
})();