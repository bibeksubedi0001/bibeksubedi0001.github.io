(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0503: {
            code: "ACiE0503",
            questionCount: 63,
            blocks: [
                {
                    id: "rcc-composite-action-and-cracking",
                    title: "Why reinforced concrete works as a composite",
                    html: "<p>Concrete supplies a useful compression zone, while properly anchored reinforcement carries the principal flexural tension after cracking. Bond transfers force between the materials and permits the strain-compatibility assumption used in sectional analysis. Steel can also carry compression; concrete contributes to shear resistance. Their combined action does not imply numerically equal tensile, compressive and shear strengths.</p>" +
                        "<p>Steel is useful because of its tensile strength, ductility, bond and reasonably compatible thermal movement, not one property alone. Illustrative expansion coefficients of 12 × 10<sup>−6</sup>/°C for steel and 10 × 10<sup>−6</sup>/°C for concrete give free expansions of 0.36 mm and 0.30 mm over 1 m for a 30°C rise. They are close, not identical. Actual concrete expansion depends on its constituents; restraint, temperature gradients and shrinkage can still generate stress.</p>" +
                        "<p>Before flexural cracking, concrete can participate in tension. At a flexural crack, the ordinary cracked-section model neglects tensile concrete and transfers that force to reinforcement. First cracking, steel yielding and concrete crushing are separate events. A section may crack in service without having reached its ultimate bending resistance.</p>" +
                        "<p><small>Code basis throughout: the checked IS 456:2000, Fourth Revision scan and the expressly identified Amendment No. 3, August 2007 provisions. These are edition-specific teaching rules, not certification of current Nepal adoption, later amendments or a particular building design.</small></p>",
                    sources: [
                        { id: "DESI787-00049", set: 6, question: 33 },
                        { id: "DESI787-00268", set: 29, question: 27 },
                        { id: "STRU935-00288", set: 27, question: 18 }
                    ]
                },
                {
                    id: "rcc-section-dimensions-and-resultants",
                    title: "Section dimensions, neutral axes and internal forces",
                    html: "<p>Draw the compression face and reinforcement centroids before substituting a depth. In the beam formulas below, forces C and T are positive magnitudes of compression and tension. For bending without an applied axial force, longitudinal equilibrium requires C = T; their separation z gives the resisting-moment magnitude M = Cz = Tz.</p>" +
                        "<table><thead><tr><th scope='col'>Symbol</th><th scope='col'>Meaning and units</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>b; D</th><td>Rectangular section width and overall depth, in mm. For a flanged beam, shear uses web width rather than flange width.</td></tr>" +
                        "<tr><th scope='row'>d</th><td>Effective depth: extreme compression face to centroid of the tensile reinforcement, in mm.</td></tr>" +
                        "<tr><th scope='row'>d'</th><td>Compression face to centroid of the compression reinforcement, in mm; not simply nominal cover.</td></tr>" +
                        "<tr><th scope='row'>x; x<sub>u</sub></th><td>Neutral-axis depth from the compression face: x for the cracked working-stress model; x<sub>u</sub> for ultimate flexure.</td></tr>" +
                        "<tr><th scope='row'>A<sub>st</sub>; A<sub>sc</sub></th><td>Tensile- and compression-steel areas, in mm<sup>2</sup>.</td></tr>" +
                        "<tr><th scope='row'>f<sub>ck</sub>; f<sub>y</sub></th><td>Characteristic concrete cube strength and reinforcement yield/proof strength, in N/mm<sup>2</sup> = MPa.</td></tr></tbody></table>" +
                        "<p>Use N and mm together: a force times a lever arm gives N mm, and 10<sup>6</sup> N mm = 1 kN m. M denotes a service bending moment where WSM is being discussed; M<sub>u</sub> denotes a factored ultimate action or the corresponding resistance, identified by context. The neutral axis is a zero-longitudinal-strain line, not a force resultant. In a doubly reinforced beam, d − d' separates the steel centroids; it need not equal the separation of the total compression resultant and tensile steel.</p>",
                    sources: [{ id: "DESI787-00261", set: 28, question: 31 }]
                },
                {
                    id: "rcc-working-stress-and-limit-state-bases",
                    title: "Working stress and limit states use different safety bases",
                    html: "<p><strong>Working-stress design, WSM:</strong> calculate stresses for service loading with the prescribed elastic sectional model and compare each with its permissible value. A permissible stress is an upper allowance, not necessarily the actual stress reached. <strong>Limit-state design, LSM:</strong> check collapse resistance against the appropriate factored actions, then separately check serviceability and detailing.</p>" +
                        "<table><thead><tr><th scope='col'>Check</th><th scope='col'>Relevant basis in the checked edition</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>WSM steel</th><td>Annex B, Table 22: allowance depends on steel type, grade, bar size and stress category.</td></tr>" +
                        "<tr><th scope='row'>LSM collapse materials</th><td>§36.4.2.1: γ<sub>s</sub> = 1.15 for steel; γ<sub>c</sub> = 1.5 for concrete.</td></tr>" +
                        "<tr><th scope='row'>LSM serviceability</th><td>Use the serviceability loading and deformation/cracking provisions, not a collapse strain as an allowable service strain.</td></tr></tbody></table>" +
                        "<p>For Grade-I mild steel, the Table 22 tensile allowance is 140 MPa for bars not exceeding 20 mm diameter and 130 MPa for larger bars. With f<sub>y</sub> = 250 MPa, the yield-to-allowance ratios are <strong>250/140 = 1.786</strong> and <strong>250/130 = 1.923</strong>. The familiar approximate WSM value 1.8 belongs to the former case, not every reinforcement category.</p>" +
                        "<p>At the LSM design plateau, f<sub>y</sub>/1.15 is approximately 0.87f<sub>y</sub>. This partial material factor is not a WSM safety factor or a load factor. The 0.87 steel coefficient and the concrete design stress-block coefficients already contain their material-strength reductions; do not divide by the same factors again.</p>",
                    sources: [
                        { id: "DESI787-00046", set: 6, question: 30 },
                        { id: "DESI787-00248", set: 27, question: 27 },
                        { id: "DESI787-00256", set: 28, question: 26 }
                    ]
                },
                {
                    id: "rcc-permissible-concrete-stress-and-modular-ratio",
                    title: "Annex B modular ratio is not the instantaneous modulus ratio",
                    html: "<p>Let σ<sub>cbc</sub> be the permissible concrete compression stress in bending, not the actual stress at the applied service load. Annex B, B-1.3(d), prescribes <strong>m = 280/(3σ<sub>cbc</sub>)</strong> when stress is entered in N/mm<sup>2</sup>. The accompanying note says this working-stress modular ratio <strong>partially incorporates long-term effects such as creep</strong>. It is not simply an instantaneous material test result.</p>" +
                        "<table><thead><tr><th scope='col'>Concrete grade</th><th scope='col'>Table 21 bending allowance</th><th scope='col'>WSM m</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>M20</th><td>7 N/mm<sup>2</sup></td><td>280/(3 × 7) = 13.33</td></tr>" +
                        "<tr><th scope='row'>M25</th><td>8.5 N/mm<sup>2</sup></td><td>280/(3 × 8.5) = 10.98</td></tr></tbody></table>" +
                        "<p>For comparison, §6.2.3.1 estimates E<sub>c</sub> = 5000√f<sub>ck</sub> in MPa. M25 gives E<sub>c</sub> = 25000 MPa. Taking E<sub>s</sub> = 200000 MPa gives the estimated instantaneous ratio <strong>E<sub>s</sub>/E<sub>c</sub> = 8</strong>. Thus 8 and approximately 11 describe the instantaneous estimate and the Annex B design proxy, respectively. Calling the latter a fully developed long-term ratio for every loading history would go beyond the provision.</p>" +
                        "<p>Concrete has no single exact WSM strength divisor for all stress categories. M20 gives f<sub>ck</sub>/σ<sub>cbc</sub> = 20/7 = <strong>2.857</strong> in bending; its Table 21 direct-compression allowance of 5 MPa gives <strong>20/5 = 4</strong>. Use the applicable allowance instead of dividing every concrete strength by three.</p>",
                    sources: [
                        { id: "DESI787-00249", set: 27, question: 28 },
                        { id: "DESI787-00250", set: 27, question: 29 },
                        { id: "DESI787-00251", set: 27, question: 30 },
                        { id: "DESI787-00252", set: 27, question: 31 },
                        { id: "DESI787-00260", set: 28, question: 30 }
                    ]
                },
                {
                    id: "rcc-cracked-wsm-transformed-section",
                    title: "Derive the cracked working-stress neutral axis",
                    html: "<p><em>Syllabus elaboration of the permissible-stress and modular-ratio items:</em> consider a singly reinforced rectangular section in bending, with adequate bond, plane sections remaining plane and stresses in the working range. After cracking, neglect tensile concrete. The compression stress varies linearly from σ<sub>c</sub> at the face to zero at depth x; the tensile steel lies at depth d.</p>" +
                        "<p>Transform tensile steel into an equivalent concrete area mA<sub>st</sub>. Taking first moments about the neutral axis gives <strong>bx<sup>2</sup>/2 = mA<sub>st</sub>(d − x)</strong>. The useful root must lie between zero and d. This is a cracked transformed-section calculation, not the centroid of an uncracked gross rectangle.</p>" +
                        "<p>Strain compatibility gives <strong>σ<sub>s</sub> = mσ<sub>c</sub>(d − x)/x</strong>. Equilibrium gives C = σ<sub>c</sub>bx/2 = T = σ<sub>s</sub>A<sub>st</sub>. The triangular concrete resultant acts at x/3 from the compression face, so <strong>z = d − x/3</strong> and M = Cz. Both the concrete and steel allowances must be satisfied.</p>" +
                        "<p>Neglecting each bar’s small own second moment, the transformed cracked inertia is <strong>I<sub>cr</sub> = bx<sup>3</sup>/3 + mA<sub>st</sub>(d − x)<sup>2</sup></strong>, in mm<sup>4</sup>. Hence σ<sub>c</sub> = Mx/I<sub>cr</sub> and σ<sub>s</sub> = mM(d − x)/I<sub>cr</sub>. The ultimate concrete stress block is a different model; do not use its 0.42x<sub>u</sub> centroid in this triangular WSM calculation.</p>",
                    sources: [
                        { id: "DESI787-00046", set: 6, question: 30 },
                        { id: "DESI787-00260", set: 28, question: 30 }
                    ]
                },
                {
                    id: "rcc-wsm-worked-service-bending",
                    title: "Worked WSM section: check both materials",
                    html: "<p><strong>Original worked example, not a supplied bank dataset:</strong> take M20 concrete, b = 300 mm, d = 400 mm and idealized A<sub>st</sub> = 1200 mm<sup>2</sup>, using Grade-I Fe250 tension bars each no larger than 20 mm. Use m = 280/21 = 40/3 and a service moment of 41.6 kN m. Bar selection, shear and anchorage remain separate checks.</p>" +
                        "<ol><li>The neutral-axis equation is 150x<sup>2</sup> = 16000(400 − x). Its positive root is <strong>x = 160 mm</strong>: both sides equal 3840000 mm<sup>3</sup>.</li>" +
                        "<li>I<sub>cr</sub> = 300 × 160<sup>3</sup>/3 + 16000 × 240<sup>2</sup> = <strong>1331200000 mm<sup>4</sup></strong>.</li>" +
                        "<li>σ<sub>c</sub> = 41.6 × 10<sup>6</sup> × 160/I<sub>cr</sub> = <strong>5 MPa</strong>. Compatibility gives σ<sub>s</sub> = (40/3) × 5 × 240/160 = <strong>100 MPa</strong>.</li></ol>" +
                        "<p>The checks are 5 ≤ 7 MPa for concrete and 100 ≤ 140 MPa for steel. As an independent equilibrium check, C = 5 × 300 × 160/2 = 120000 N and T = 100 × 1200 = 120000 N. Their arm is 400 − 160/3 = 346.667 mm, giving <strong>Cz = 41.6 kN m</strong>.</p>" +
                        "<p>Scaling this model until the allowances are reached gives <strong>58.24 kN m</strong>; then σ<sub>c</sub> = 7 MPa and σ<sub>s</sub> = 140 MPa simultaneously. This is a balanced <em>working-stress allowance</em> calculation. It is neither the ultimate neutral axis nor a proof of the member’s collapse capacity.</p>",
                    sources: [
                        { id: "DESI787-00250", set: 27, question: 29 },
                        { id: "DESI787-00251", set: 27, question: 30 }
                    ]
                },
                {
                    id: "rcc-limit-strains-and-neutral-axis-ratios",
                    title: "Limit-state strains determine the neutral-axis limit",
                    html: "<p>For ultimate bending under §38.1, the extreme concrete compression strain is <strong>0.0035</strong>. With a linear strain profile and adequate bond, tensile-steel strain is ε<sub>st</sub> = 0.0035(d − x<sub>u</sub>)/x<sub>u</sub>. The required tensile strain at failure is <strong>ε<sub>st</sub> ≥ f<sub>y</sub>/(1.15E<sub>s</sub>) + 0.002</strong>. Strains are dimensionless; f<sub>y</sub> and E<sub>s</sub> must have matching stress units.</p>" +
                        "<p>Equating the two strain expressions gives <strong>x<sub>u,max</sub>/d = 0.0035/[0.0055 + f<sub>y</sub>/(1.15E<sub>s</sub>)]</strong>, approximately 0.0035/[0.0055 + 0.87f<sub>y</sub>/E<sub>s</sub>]. With E<sub>s</sub> = 200000 MPa, the latter expression gives approximately 0.531, 0.479 and 0.456 for Fe250, Fe415 and Fe500.</p>" +
                        "<table><thead><tr><th scope='col'>Tension-steel grade</th><th scope='col'>§38.1 note value of x<sub>u,max</sub>/d</th><th scope='col'>At d = 500 mm, using that note value</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Fe250</th><td>0.53</td><td>265 mm</td></tr>" +
                        "<tr><th scope='row'>Fe415</th><td>0.48</td><td>240 mm</td></tr>" +
                        "<tr><th scope='row'>Fe500</th><td>0.46</td><td>230 mm</td></tr></tbody></table>" +
                        "<p>Identify whether a calculation is using the code’s stated rounded value or evaluating the strain expression. Neither operation supplies an unspecified steel grade. The extra 0.002 strain requirement also means the code’s limiting section is not defined merely by the instant at which steel first yields. A smaller neutral-axis depth gives more tensile strain for the same extreme concrete strain.</p>",
                    sources: [
                        { id: "DESI787-00104", set: 12, question: 31 },
                        { id: "DESI787-00109", set: 13, question: 26 },
                        { id: "DESI787-00110", set: 13, question: 27 },
                        { id: "DESI787-00195", set: 22, question: 25 }
                    ]
                },
                {
                    id: "rcc-cracking-yielding-and-crushing-sequence",
                    title: "Under-reinforced behaviour is about yielding, not first cracking",
                    html: "<p>For otherwise suitable flexural detailing, an <strong>under-reinforced section yields in its tensile steel before concrete reaches its crushing limit</strong>. Plastic extension allows noticeable curvature and deflection before flexural failure. In a physically over-reinforced section, concrete can reach its limiting compression strain while the tensile steel remains below yield, so compression failure can be abrupt.</p>" +
                        "<p>These descriptions concern the sequence near failure. Initial tensile cracking can occur in under-reinforced, balanced and over-reinforced RCC sections. It begins when concrete’s tensile capacity is exceeded, usually well before the steel has yielded. Therefore, first cracking and the widening of existing cracks after yielding must not be treated as the same event.</p>" +
                        "<p>In the ideal physical balanced case, the chosen concrete limit and steel yield occur together. Keep that concept distinct from the code’s limiting strain criterion, which includes a tensile-strain margin. Classification also assumes that anchorage, shear, local crushing and other mechanisms do not fail first; a flexurally under-reinforced section alone does not guarantee a ductile structure.</p>" +
                        "<p>Adding steel beyond a reference balanced amount can increase an analytically calculated moment resistance for a fixed section and specified material model. That observation is not design permission. Annex G-1.1 requires redesign when x<sub>u</sub>/d exceeds the prescribed limiting value. Enlargement or a properly analysed doubly reinforced section is a design route, rather than accepting a brittle singly reinforced section because its computed moment is larger.</p>",
                    sources: [
                        { id: "DESI787-00025", set: 4, question: 29 },
                        { id: "DESI787-00028", set: 4, question: 32 },
                        { id: "DESI787-00047", set: 6, question: 31 },
                        { id: "DESI787-00107", set: 12, question: 33 },
                        { id: "DESI787-00108", set: 13, question: 25 }
                    ]
                },
                {
                    id: "rcc-is-stress-block-and-singly-reinforced-moment",
                    title: "IS stress-block resultants and a worked bending resistance",
                    html: "<p>For the rectangular ultimate bending section in §38.1 and Annex G, the concrete resultant is <strong>C = 0.36f<sub>ck</sub>bx<sub>u</sub></strong>. It acts at <strong>0.42x<sub>u</sub></strong> from the compression face. Thus z = d − 0.42x<sub>u</sub>. These coefficients summarize the code’s concrete stress distribution; x<sub>u</sub> is the full compression-zone depth, not the depth of an independently assumed uniform rectangular block.</p>" +
                        "<p>When the tensile steel reaches its design stress, T = 0.87f<sub>y</sub>A<sub>st</sub>. Force balance gives <strong>x<sub>u</sub> = 0.87f<sub>y</sub>A<sub>st</sub>/(0.36f<sub>ck</sub>b)</strong>. Check the limiting depth before using <strong>M<sub>u,R</sub> = 0.87f<sub>y</sub>A<sub>st</sub>(d − 0.42x<sub>u</sub>)</strong> as an acceptable singly reinforced resistance. At the limit, substitute x<sub>u,max</sub> to obtain M<sub>u,lim</sub>.</p>" +
                        "<p><strong>Original numerical illustration:</strong> M20, Fe415, b = 300 mm, d = 500 mm and A<sub>st</sub> = 1200 mm<sup>2</sup> give T = 433260 N and x<sub>u</sub> = 200.583 mm. This is below the code-note limit of 240 mm. The lever arm is 415.755 mm, giving <strong>M<sub>u,R</sub> = 180.13 kN m</strong>. A separate strain check gives ε<sub>st</sub> ≈ 0.00522, above the Fe415 minimum of approximately 0.00380.</p>" +
                        "<p>For the same section at x<sub>u,max</sub> = 240 mm, C = 518400 N and z = 399.2 mm, so <strong>M<sub>u,lim</sub> = 206.95 kN m</strong>. These are flexural resistances, not complete beam approvals; demand, shear, serviceability, cover and anchorage must still be checked.</p>",
                    sources: [{ id: "DESI787-00105", set: 12, question: 32 }]
                },
                {
                    id: "rcc-beam-steel-minimum-maximum-and-ductility",
                    title: "Steel-area limits do not replace the strain check",
                    html: "<p>Under §26.5.1.1, the beam tension-steel maximum is <strong>A<sub>st</sub> ≤ 0.04bD</strong>: four percent of the gross rectangular area, using overall depth D. The minimum is <strong>A<sub>st</sub>/(bd) ≥ 0.85/f<sub>y</sub></strong>, with f<sub>y</sub> in N/mm<sup>2</sup>. These limits address different aspects of reinforcement provision and use different depth bases.</p>" +
                        "<p><em>Syllabus elaboration of the maximum-steel items:</em> for b = 300 mm, D = 550 mm, d = 500 mm and Fe415, the minimum formula gives <strong>307.23 mm<sup>2</sup></strong>; the gross-area maximum is <strong>6600 mm<sup>2</sup></strong>. The required bending steel must also satisfy the applied moment, so the minimum is not a calculated demand area.</p>" +
                        "<p>For M20 in that section, the singly reinforced strain-limit area using x<sub>u,max</sub> = 240 mm is 0.36 × 20 × 300 × 240/(0.87 × 415) = <strong>1435.81 mm<sup>2</sup></strong>. Providing 2000 mm<sup>2</sup> is below the four-percent cap but would give x<sub>u</sub> = 334.31 mm if a full-design-stress tensile force were assumed. That violates the singly reinforced limiting-depth check and demands redesign, not acceptance under the area cap.</p>" +
                        "<p>Consequently, percentage compliance, strain compatibility, strength and physical bar placement are separate checks. Congestion, laps, aggregate passage and any applicable seismic detailing may constrain a layout further. An upper limit must never be read as a compulsory minimum.</p>",
                    sources: [
                        { id: "DESI787-00034", set: 5, question: 28 },
                        { id: "DESI787-00106", set: 1, question: 28 }
                    ]
                },
                {
                    id: "rcc-doubly-reinforced-force-couples",
                    title: "Doubly reinforced beams have two compression contributions",
                    html: "<p>A doubly reinforced flexural section has designed reinforcement in both its compression and tension zones for the moment direction being checked. Compression reinforcement is useful where section depth is restricted and moment demand exceeds the singly reinforced limit. It can also improve long-term deformation behaviour. Merely having nominal top bars does not establish that a compression-steel contribution has been designed.</p>" +
                        "<p>Write the concrete force as C<sub>c</sub> and the separately modelled compression-steel contribution as C<sub>s</sub>. Then <strong>T = C<sub>c</sub> + C<sub>s</sub></strong> and <strong>M = C<sub>c</sub>(d − 0.42x<sub>u</sub>) + C<sub>s</sub>(d − d')</strong>. The second arm, d − d', is the steel-couple arm; the first is the concrete-to-tension-steel arm.</p>" +
                        "<p>The total compression centroid is y<sub>C</sub> = [C<sub>c</sub>(0.42x<sub>u</sub>) + C<sub>s</sub>d']/(C<sub>c</sub> + C<sub>s</sub>), measured from the compression face. Its composite arm is d − y<sub>C</sub>. Use the same force model consistently when determining C<sub>s</sub>; the next block distinguishes the printed Annex G simplification from a displaced-concrete refinement.</p>" +
                        "<p><strong>Force-geometry illustration:</strong> C<sub>c</sub> = 400 kN at 90 mm, C<sub>s</sub> = 100 kN at 50 mm, and T = 500 kN at d = 500 mm give y<sub>C</sub> = 82 mm. The composite arm is <strong>418 mm</strong>, whereas the steel-centroid separation is <strong>450 mm</strong>. Both moment sums give 209 kN m. These assumed resultants illustrate geometry, not a completed reinforcement design.</p>",
                    sources: [
                        { id: "DESI787-00023", set: 4, question: 27 },
                        { id: "DESI787-00261", set: 28, question: 31 }
                    ]
                },
                {
                    id: "rcc-annex-g-compression-steel-design",
                    title: "Annex G-1.2: compression steel and additional tension steel",
                    html: "<p>The checked Annex G-1.2, printed page 96, gives the <strong>simplified</strong> relation ΔM = M<sub>u</sub> − M<sub>u,lim</sub> = f<sub>sc</sub>A<sub>sc</sub>(d − d'). Therefore <strong>A<sub>sc</sub> = ΔM/[f<sub>sc</sub>(d − d')]</strong>. This is the actual printed simplification. f<sub>sc</sub> is the compression-steel design stress corresponding to ε<sub>sc</sub> = 0.0035(1 − d'/x<sub>u,max</sub>), obtained from the appropriate steel stress–strain relationship, not automatically its yield plateau.</p>" +
                        "<p>Force equilibrium supplies <strong>A<sub>st2</sub> = f<sub>sc</sub>A<sub>sc</sub>/(0.87f<sub>y</sub>)</strong>. Add this to A<sub>st1</sub>, the singly reinforced tension area for M<sub>u,lim</sub>. Equal additional steel areas follow only if the compression-steel stress equals the tensile-steel design stress.</p>" +
                        "<p><strong>Original mixed-grade illustration:</strong> use tensile Fe415, compression Fe250, d = 500 mm, d' = 50 mm and x<sub>u,max</sub> = 240 mm. Compression strain is 0.00277, exceeding the Fe250 design-yield strain of approximately 0.0010875, so its design plateau is f<sub>sc</sub> = 217.5 MPa. An excess moment ΔM = 39.15 kN m gives <strong>A<sub>sc</sub> = 400 mm<sup>2</sup></strong>. The additional tensile force is 87000 N, requiring <strong>A<sub>st2</sub> = 87000/361.05 = 240.96 mm<sup>2</sup></strong>, not 400. This example deliberately identifies both steel grades.</p>" +
                        "<p><em>Different-model refinement:</em> when retaining a gross concrete stress block that includes the area occupied by compression steel, subtract the displaced concrete. The net addition is A<sub>sc</sub>(f<sub>sc</sub> − f<sub>cc</sub>), where f<sub>cc</sub> is the local concrete design stress. Use that net force in both moment and tension equilibrium. It must not be presented as the literal printed G-1.2 equation or mixed with the unadjusted simplified force balance.</p>",
                    sources: [{ id: "DESI787-00257", set: 28, question: 27 }]
                },
                {
                    id: "rcc-span-depth-ratios-and-long-spans",
                    title: "Span-to-effective-depth checks, including spans above 10 m",
                    html: "<p>Depth strongly affects flexural stiffness, making span-to-effective-depth ratio a useful serviceability screen. In §23.2.1 the basic L/d values for spans up to 10 m are <strong>7 for cantilevers, 20 for simply supported members and 26 for continuous members</strong>. Here L is the applicable effective span and d is effective, not overall, depth. Tension reinforcement, compression reinforcement and flange effects require the applicable modification factors.</p>" +
                        "<p>For the ordinary two-way slab deflection check, §24.1 uses the shorter span with the relevant provisions. A basic continuous value of 26 is not a final universal slab ratio. The alternative short-span slab provisions have their own loading, steel and depth definitions and should not be mixed into this basic-ratio calculation.</p>" +
                        "<table><thead><tr><th scope='col'>Simply supported example</th><th scope='col'>Basic-ratio arithmetic before reinforcement/flange modifications</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>L = 8 m</th><td>d = 8000/20 = 400 mm.</td></tr>" +
                        "<tr><th scope='row'>L = 10 m</th><td>d = 10000/20 = 500 mm; the up-to-10-m rule still applies.</td></tr>" +
                        "<tr><th scope='row'>L = 15 m</th><td>Basic allowable L/d = 20 × 10/15 = 13.333; d = 15000/13.333 = 1125 mm.</td></tr></tbody></table>" +
                        "<p>For simply supported and continuous spans above 10 m, multiply the basic ratio by 10/L with L expressed in metres. Long cantilevers require calculated deflection rather than that automatic extension. The tabulated example depths are preliminary results before the required modifications, strength, cover, cracking and loading checks; they are not unconditional minimum final dimensions.</p>",
                    sources: [
                        { id: "DESI787-00087", set: 10, question: 34 },
                        { id: "DESI787-00098", set: 12, question: 25 },
                        { id: "DESI787-00099", set: 12, question: 26 },
                        { id: "DESI787-00253", set: 27, question: 32 },
                        { id: "STRU935-00077", set: 8, question: 24 }
                    ]
                },
                {
                    id: "rcc-total-and-post-finish-deflections",
                    title: "Total deflection is different from the post-finish increment",
                    html: "<p>Serviceability is a limit on use, appearance and damage, not simply avoidance of collapse. Slab thickness often follows a deflection check, but bending, one-way shear, punching where relevant, cover and reinforcement placement can demand a greater thickness. Selecting the governing check from the remaining multiple-choice options is not a design method.</p>" +
                        "<p>Under §23.2(a), final total deflection, including the effects stated there such as creep, shrinkage and temperature, should normally not exceed <strong>L/250</strong>, measured relative to the as-cast support level. Under §23.2(b), the deflection increment after partitions and finishes should normally not exceed <strong>the smaller of L/350 and 20 mm</strong>, including the relevant subsequent time-dependent effects.</p>" +
                        "<p><strong>Original serviceability example:</strong> for L = 6000 mm, the respective limits are 24 mm total and 17.14 mm incremental. A prediction of 22 mm total and 18 mm after finishes passes the first check but fails the second. For a 9000 mm span, L/350 = 25.71 mm, so the <strong>20 mm</strong> incremental cap controls.</p>" +
                        "<p>A full deformation calculation needs the load history, cracking, stiffness, creep and shrinkage assumptions and the time finishes are installed. An uncracked gross-section EI calculation alone can underestimate RCC deflection after cracking. Compression steel and suitable depth can help, but neither dispenses with those assumptions or the two distinct limits.</p>",
                    sources: [
                        { id: "DESI787-00024", set: 4, question: 28 },
                        { id: "DESI787-00091", set: 11, question: 28 }
                    ]
                },
                {
                    id: "rcc-one-way-two-way-supports-and-boundary",
                    title: "One-way and two-way slab action starts with the supports",
                    html: "<p>A slab supported on only two opposite edges carries its principal spanning load toward those edges and is treated as one-way in the ordinary strip model. A slab supported suitably on all four edges can distribute bending in two directions. Let l<sub>x</sub> be the shorter span and l<sub>y</sub> the longer span; the ratio l<sub>y</sub>/l<sub>x</sub> is useful only after the support arrangement and continuity are identified.</p>" +
                        "<p>For conventional rectangular four-edge-supported panels, a ratio below two generally calls for two-way analysis; above two the short-span one-way approximation is commonly used. At <strong>exactly two</strong>, state the adopted boundary convention. The checked Annex D two-way coefficient tables extend to <strong>l<sub>y</sub>/l<sub>x</sub> = 2.0</strong>, so two is not a universal physical switch requiring one-way treatment regardless of supports.</p>" +
                        "<p><strong>Illustration:</strong> a 4 m × 6 m panel has ratio 1.5 and can act two-way with four suitable supporting edges. Remove the supports along one pair of edges and that same geometric ratio no longer establishes two-way support action. A 4 m × 8 m panel is the boundary case, not evidence that one set of edge reactions must vanish.</p>" +
                        "<p>In two-way bending both directions have designed flexural reinforcement, and their different layer positions can give different effective depths. In one-way bending the transverse reinforcement still controls distribution and restrained movement. Aspect ratio does not eliminate checks for support moments, corner restraint, shear or anchorage.</p>",
                    sources: [
                        { id: "DESI787-00026", set: 4, question: 30 },
                        { id: "DESI787-00119", set: 14, question: 26 }
                    ]
                },
                {
                    id: "rcc-flat-slab-column-and-middle-strips",
                    title: "Flat-slab extension: column-strip and middle-strip widths",
                    html: "<p><strong>Bank-prompted flat-slab extension:</strong> column strips and middle strips are design divisions for column-supported flat slabs under §31. They are not generic names for every beam-supported two-way slab. Establish the panel boundaries, column centre lines and direction of the moment being distributed before measuring their widths.</p>" +
                        "<p>For a regular <strong>6 m × 6 m square panel</strong>, the column strip extends 6/4 = 1.5 m on each side of a column centre line. The full strip centred on that line is therefore 3 m wide. Within a panel bounded by two parallel column lines, the two bordering half-strips each occupy 1.5 m, leaving a 3 m middle strip.</p>" +
                        "<table><thead><tr><th scope='col'>Width being measured</th><th scope='col'>Square-panel result</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>One side of a column line</th><td>1.5 m</td></tr>" +
                        "<tr><th scope='row'>Full column strip</th><td>1.5 + 1.5 = 3 m</td></tr>" +
                        "<tr><th scope='row'>Middle strip inside the 6 m panel</th><td>6 − 1.5 − 1.5 = 3 m</td></tr></tbody></table>" +
                        "<p>Do not confuse the half-width with the full column-strip width. These geometric results do not establish the moment fractions, suitability of a direct-design method, punching resistance or drop-panel dimensions. Irregular spans, edges and openings require their actual flat-slab rules and analysis rather than automatic reuse of the square-panel arithmetic.</p>",
                    sources: [{ id: "DESI787-00100", set: 12, question: 27 }]
                },
                {
                    id: "rcc-slab-minimum-steel-in-each-direction",
                    title: "Slab minimum steel uses gross area in each direction",
                    html: "<p>Under §26.5.2.1, minimum slab reinforcement is <strong>0.15% of gross cross-sectional area for mild steel</strong>; it is reduced to <strong>0.12% for high-strength deformed bars or welded wire fabric</strong>. Apply the minimum separately in each direction. For a design strip of width b, the area basis is bD, not bd, and the two directions do not share one combined minimum allowance.</p>" +
                        "<p><strong>Original strip example:</strong> take b = 1000 mm and D = 150 mm. Gross area is 150000 mm<sup>2</sup>. Mild steel requires at least <strong>225 mm<sup>2</sup> per metre in each direction</strong>; HYSD requires at least <strong>180 mm<sup>2</sup> per metre in each direction</strong>. Moment demand may require more, including top reinforcement at restrained supports.</p>" +
                        "<p>One bar of diameter φ has area A<sub>bar</sub> = πφ<sup>2</sup>/4. For spacing s in mm, the supplied area per metre is <strong>A<sub>s,metre</sub> = 1000A<sub>bar</sub>/s</strong>. For example, 8 mm bars at 250 mm centres provide 201.06 mm<sup>2</sup>/m: above the HYSD minimum in this example, but below the mild-steel minimum. At 200 mm centres they provide 251.33 mm<sup>2</sup>/m.</p>" +
                        "<p>Area alone is insufficient. Check the maximum bar spacing, thickness-based diameter limit, minimum clear spacing, anchorage and the depth of each layer. Minimum distribution steel controls cracking; it does not prove adequate flexural capacity under the actual loading.</p>",
                    sources: [
                        { id: "DESI787-00088", set: 11, question: 25 },
                        { id: "DESI787-00089", set: 11, question: 26 }
                    ]
                },
                {
                    id: "rcc-slab-spacing-and-amendment-three",
                    title: "Slab maximum spacing: original text versus Amendment 3",
                    html: "<p>The following <strong>prescriptive spacing limits</strong> are centre-to-centre distances and must be checked along with the required steel area. The opening of §26.3.3 permits greater spacing where crack-width calculations demonstrate acceptability; other applicable requirements still apply. Without that justified alternative, slab main flexural bars under §26.3.3(b)(1) use <strong>s ≤ min(3d, 300 mm)</strong>. Overall slab thickness by itself does not determine d: cover, diameter and the vertical order of the crossing layers matter.</p>" +
                        "<table><thead><tr><th scope='col'>Reinforcement and stated edition basis</th><th scope='col'>Maximum spacing</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Main flexural bars, §26.3.3(b)(1)</th><td>Smaller of 3d and 300 mm.</td></tr>" +
                        "<tr><th scope='row'>Secondary/distribution bars, original IS 456:2000 body, §26.3.3(b)(2)</th><td>Smaller of 5d and 450 mm; historical unamended wording.</td></tr>" +
                        "<tr><th scope='row'>Same secondary provision with Amendment No. 3, August 2007</th><td>Smaller of 5d and 300 mm; the amendment changes 450 to 300, retaining 5d.</td></tr></tbody></table>" +
                        "<p>Using an explicitly assumed d = 100 mm gives a main-bar cap of 300 mm. Distribution spacing would have been 450 mm under the original body, but is <strong>300 mm under the checked Amendment 3 basis</strong>. This is an actual amendment distinction, not an alternative rounding choice.</p>" +
                        "<p>For d = 90 mm, the prescriptive main-spacing limit is <strong>270 mm</strong>, not its 300 mm upper ceiling. At exactly 5 inches, D = 127 mm; a calculation must still establish the actual effective depth. Where both slab directions resist flexural moments, do not label one direction as secondary merely to use a more generous depth multiplier. An alternative justified by crack-width calculations must actually be established, not assumed from a preferred spacing.</p>",
                    sources: [
                        { id: "BASI674-00285", set: 23, question: 2 },
                        { id: "DESI787-00093", set: 1, question: 27 },
                        { id: "DESI787-00094", set: 11, question: 30 }
                    ]
                },
                {
                    id: "rcc-slab-clear-spacing-and-diameter",
                    title: "Minimum clear gap and maximum diameter are different checks",
                    html: "<p>The minimum horizontal <strong>clear</strong> spacing in §26.3.2(a) depends on bar size and nominal maximum coarse-aggregate size. For equal parallel bars of diameter φ and aggregate size a, use a clear gap at least the larger of φ and a + 5 mm. For unequal bars, the larger bar diameter controls that comparison. Clear distance is measured between bar surfaces, not their centres.</p>" +
                        "<p><strong>Original spacing illustration:</strong> 12 mm bars with 20 mm aggregate require a horizontal clear gap of at least max(12, 25) = 25 mm. Equal-bar centre spacing is consequently at least <strong>25 + 12 = 37 mm</strong> under that check. Placement access and other detailing can require more. The slab thickness alone supplies no universal 75 mm minimum.</p>" +
                        "<p>Separately, §26.5.2.2 limits a slab bar diameter to <strong>φ ≤ D/8</strong>, using overall thickness. Exactly 5 inches is 127 mm, so the limit is <strong>15.875 mm</strong>. If the designer instead specifies D = 125 mm, the limit is 15.625 mm. A 16 mm bar exceeds both: an upper-bound check cannot be passed by rounding its bound upward.</p>" +
                        "<p>A 12 mm choice lies below both thickness-based limits, but still needs sufficient total area, acceptable spacing and cover. More layers reduce effective depth for the inner bars, so a congested arrangement can change bending resistance and the maximum-spacing check even when every individual diameter is permitted.</p>",
                    sources: [
                        { id: "DESI787-00092", set: 11, question: 29 },
                        { id: "DESI787-00095", set: 11, question: 31 }
                    ]
                },
                {
                    id: "rcc-cover-exposure-and-effective-depth",
                    title: "Nominal cover protects reinforcement and changes effective depth",
                    html: "<p>Nominal cover under §26.4 is the specified concrete protection to reinforcement, <strong>including links</strong>. Select it using exposure, bar requirements and fire resistance, not just the labels beam or slab. Table 16’s exposure baselines are 20 mm for mild, 30 mm for moderate, 45 mm for severe, 50 mm for very severe and 75 mm for extreme exposure, before applicable qualifications.</p>" +
                        "<p>Table 16 Note 1 permits a <strong>5 mm reduction in mild exposure where the main bars are no larger than 12 mm</strong>. This can produce 15 mm, subject to the other requirements; it is not a universal slab default. Likewise, 20 mm is a mild-exposure baseline, not a cover that suits every beam. Nominal cover must also be <strong>not less than the bar diameter</strong> under §26.4.1 and satisfy the required fire resistance under §26.4.3. Any further permitted reduction needs its own stated conditions.</p>" +
                        "<p>For one tension layer inside a link, define c<sub>nom</sub> as cover to the link’s outside, φ<sub>link</sub> as its diameter and φ as the main-bar diameter. With the main bar against the inside of the link, <strong>d = D − c<sub>nom</sub> − φ<sub>link</sub> − φ/2</strong>. Additional layers require the actual area-weighted steel centroid.</p>" +
                        "<p><strong>Original geometry example:</strong> D = 500 mm, c<sub>nom</sub> = 30 mm, an 8 mm link and 20 mm main bars give <strong>d = 452 mm</strong>, not 470 mm. The exposure and fire checks must justify the assumed cover independently. Omitting links or half the main diameter overestimates the bending arm and can invalidate both strength and serviceability calculations.</p>",
                    sources: [
                        { id: "BASI674-00362", set: 28, question: 12 },
                        { id: "DESI787-00102", set: 12, question: 29 },
                        { id: "DESI787-00103", set: 12, question: 30 }
                    ]
                },
                {
                    id: "rcc-tension-face-cantilevers-and-wall-stems",
                    title: "Place main steel on the tension face for the actual loading",
                    html: "<p>Adopt positive sagging and negative hogging. A downward-loaded cantilever hogs near its fixed end, placing the <strong>top face in tension</strong>. Main tensile reinforcement therefore lies near the top and must be developed into the support. The fact that a beam is a cantilever does not by itself fix the tension face under uplift or reversed loading.</p>" +
                        "<p><strong>Original sign example:</strong> a 20 kN downward tip load on a 2 m cantilever gives a root moment <strong>M = −PL = −40 kN m</strong>. The negative sign means hogging under this convention. Top tension is consistent with that sign; calling the same moment positive sagging would reverse the stress interpretation.</p>" +
                        "<p><strong>Bank-prompted retaining-stem application:</strong> a conventional wall stem fixed into its base and loaded by lateral earth pressure from the retained side bends as a vertical cantilever. For that load case its principal vertical tension steel is on the <strong>backfill side</strong>. Its area and development length follow the bending demand along the height, not a universal wall percentage.</p>" +
                        "<p>Horizontal distribution reinforcement, opposite-face requirements and connection detailing remain necessary where applicable. Opposing water pressure, different restraints or load reversals require the tension face to be reconsidered. The stem example is a bending application only; it does not establish the wall’s sliding, overturning, bearing or overall stability.</p>",
                    sources: [
                        { id: "DESI787-00258", set: 28, question: 28 },
                        { id: "DESI787-00247", set: 27, question: 26 }
                    ]
                },
                {
                    id: "rcc-shear-transfer-and-inclined-cracks",
                    title: "Shear resistance involves concrete, longitudinal bars and links",
                    html: "<p>Transverse shear produces principal tensile stresses that can create inclined cracks. Reinforcement crossing such cracks provides a tensile load path after cracking. In ordinary beams this is commonly a system of anchored stirrups; simply adding longitudinal bending steel is not the same shear-resisting detail.</p>" +
                        "<ul><li>The uncracked compression region carries part of the shear transfer.</li>" +
                        "<li>Aggregate interlock can transfer forces across rough crack faces while suitable contact remains.</li>" +
                        "<li>Longitudinal bars contribute dowel action, influenced by surrounding concrete and splitting resistance.</li>" +
                        "<li>Stirrups crossing cracks carry tension and tie the internal force system together.</li></ul>" +
                        "<p>These mechanisms interact and evolve as cracks open. A design expression separating a concrete contribution and a stirrup contribution is an engineering model, not a statement that only two isolated physical mechanisms exist. Nor does a multiple-choice response of none mean that no shear resistance is present.</p>" +
                        "<p>Proper shear reinforcement reduces the risk of brittle diagonal failure, but it does not automatically guarantee ductile flexural failure. Inadequate anchorage, diagonal compression crushing, poor confinement, insufficient longitudinal capacity or noncompliant joints can govern instead. Establish a safe load path and check the applicable maximum concrete shear stress before attempting to solve every shear problem with closer links.</p>",
                    sources: [
                        { id: "DESI787-00030", set: 4, question: 34 },
                        { id: "STRU935-00004", set: 2, question: 17 }
                    ]
                },
                {
                    id: "rcc-nominal-shear-concrete-capacity-and-slab-depth",
                    title: "Compare shear demand with two different concrete limits",
                    html: "<p>For the ordinary beam check, nominal ultimate shear stress is <strong>τ<sub>v</sub> = V<sub>u</sub>/(bd)</strong>, with V<sub>u</sub> in N and b, d in mm, giving N/mm<sup>2</sup>. This is a code nominal stress, not the exact pointwise shear distribution. Table 19 supplies τ<sub>c</sub> from the concrete grade and <strong>p<sub>t</sub> = 100A<sub>st</sub>/(bd)</strong>, using the tension reinforcement eligible at the section under the table’s conditions.</p>" +
                        "<table><thead><tr><th scope='col'>Ordinary beam comparison</th><th scope='col'>Design consequence</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>τ<sub>v</sub> ≤ τ<sub>c</sub></th><td>Check the minimum shear-reinforcement provision and its stated relaxation; this is not automatic permission to omit links.</td></tr>" +
                        "<tr><th scope='row'>τ<sub>c</sub> &lt; τ<sub>v</sub> ≤ τ<sub>c,max</sub></th><td>Design reinforcement for V<sub>us</sub> = V<sub>u</sub> − τ<sub>c</sub>bd, together with minimum and spacing requirements.</td></tr>" +
                        "<tr><th scope='row'>τ<sub>v</sub> &gt; τ<sub>c,max</sub></th><td>Redesign the section/material specification; extra stirrups alone cannot remove the maximum-stress violation.</td></tr></tbody></table>" +
                        "<p>τ<sub>c,max</sub> is the separate Table 20 upper limit, not another name for τ<sub>c</sub>. For an illustrative V<sub>u</sub> = 90 kN, b = 250 mm, d = 360 mm and A<sub>st</sub> = 900 mm<sup>2</sup>, <strong>τ<sub>v</sub> = 1 MPa</strong> and <strong>p<sub>t</sub> = 1%</strong>. Those two results alone do not establish acceptance without the applicable concrete-grade lookup.</p>" +
                        "<p>Increasing slab depth often reduces nominal shear stress and is practical where conventional links cannot be accommodated. Slabs still require their own thickness factors and maximum shear limits; column-supported regions also require punching checks. Recompute demand and capacity after changing depth, because self-weight, reinforcement percentage and the critical section can change too.</p>",
                    sources: [
                        { id: "DESI787-00115", set: 13, question: 32 },
                        { id: "DESI787-00097", set: 11, question: 33 }
                    ]
                },
                {
                    id: "rcc-stirrup-area-spacing-and-minimum",
                    title: "Vertical stirrups: resistance, spacing cap and minimum area",
                    html: "<p>For vertical stirrups under §40.4, <strong>V<sub>us</sub> = 0.87f<sub>y</sub>A<sub>sv</sub>d/s<sub>v</sub></strong>. A<sub>sv</sub> is the sum of the effective leg areas crossing the shear crack in one stirrup group; s<sub>v</sub> is spacing along the beam. Use consistent N–mm units and a shear-reinforcement f<sub>y</sub> <strong>not exceeding 415 MPa</strong> in this expression.</p>" +
                        "<p>Under §26.5.1.5, vertical-link spacing must also satisfy <strong>s<sub>v</sub> ≤ min(0.75d, 300 mm)</strong>. Thus d = 360 mm gives a geometric maximum of <strong>270 mm</strong>, even if a strength calculation would permit more. Under §26.5.1.6, minimum shear steel satisfies <strong>A<sub>sv</sub>/(bs<sub>v</sub>) ≥ 0.4/(0.87f<sub>y</sub>)</strong>, again limiting f<sub>y</sub> to 415 MPa.</p>" +
                        "<p><strong>Separate sizing illustration:</strong> take a required stirrup contribution of 60 kN, d = 360 mm and two effective 8 mm legs, so A<sub>sv</sub> = 100.53 mm<sup>2</sup>. With Fe415, the strength equation permits s<sub>v</sub> ≤ 217.78 mm. Selecting 200 mm gives 65.33 kN and also meets the 270 mm spacing cap. If b = 250 mm, the minimum equation at 200 mm centres requires 55.39 mm<sup>2</sup>, below the supplied 100.53 mm<sup>2</sup>.</p>" +
                        "<p>The minimum provision is not literally exceptionless: §26.5.1.6 refers to shear stress <em>less than half the permissible value</em> and to <em>members of minor structural importance such as lintels</em>. Check that relaxation in full instead of generalizing either that all beams must always have minimum links or that τ<sub>v</sub> &lt; τ<sub>c</sub> always permits their omission. Anchorage and any applicable special detailing can impose further requirements.</p>",
                    sources: [
                        { id: "DESI787-00113", set: 13, question: 30 },
                        { id: "DESI787-00114", set: 13, question: 31 },
                        { id: "DESI787-00116", set: 13, question: 33 }
                    ]
                },
                {
                    id: "rcc-side-face-reinforcement-in-deep-webs",
                    title: "Side-face steel controls cracking along deep beam webs",
                    html: "<p>Under §26.5.1.3, provide side-face reinforcement along both faces when the <strong>web depth exceeds 750 mm</strong>. This is a web-depth condition, not a test using effective depth alone. The required total side-face steel area is at least <strong>0.1% of the web area</strong>, shared equally between the two faces.</p>" +
                        "<p>The vertical spacing of these longitudinal side bars must not exceed the smaller of <strong>300 mm and the web thickness</strong>. This spacing describes bars distributed over each side face; it must not be confused with the spacing of transverse stirrups along the beam.</p>" +
                        "<p><strong>Original web example:</strong> a rectangular web 250 mm thick and 900 mm deep has area 225000 mm<sup>2</sup>. Its side-face requirement is <strong>225 mm<sup>2</sup> total, or 112.5 mm<sup>2</sup> per face</strong>, and the spacing cap is <strong>250 mm</strong>. A real bar arrangement must meet both the area and spacing requirements over the web, so merely supplying the area in one bar per face may be inadequate.</p>" +
                        "<p>Side-face bars do not substitute for main bending steel, stirrups or their anchorage. Nor does passing this detailing threshold establish that ordinary slender-beam analysis is valid: a genuinely deep beam can require a different load-path analysis under the applicable provisions.</p>",
                    sources: [{ id: "DESI787-00112", set: 13, question: 29 }]
                },
                {
                    id: "rcc-development-length-from-bond-equilibrium",
                    title: "Derive development length from bar-force transfer",
                    html: "<p>Development length is the embedment needed to transfer the required bar stress into the surrounding concrete by bond. For a single round bar, its force is (πφ<sup>2</sup>/4)σ<sub>s</sub>. Equating that to an idealized design bond force πφL<sub>d</sub>τ<sub>bd</sub> gives <strong>L<sub>d</sub> = φσ<sub>s</sub>/(4τ<sub>bd</sub>)</strong>, as used in §26.2.1. This is a design-average bond model, not a claim that actual bond stress is uniform everywhere.</p>" +
                        "<p>φ is bar diameter in mm, σ<sub>s</sub> is the stress to be developed, and τ<sub>bd</sub> is the applicable bond stress in N/mm<sup>2</sup>. Their ratio is dimensionless, leaving L<sub>d</sub> in mm. For LSM tension steel at its full design stress, <strong>σ<sub>s</sub> = 0.87f<sub>y</sub></strong>. Deformed bars use the same equation but the appropriate increased bond allowance.</p>" +
                        "<p><strong>Original arithmetic example:</strong> φ = 16 mm, Fe415 and an applicable deformed-bar tension bond allowance of 1.92 MPa give σ<sub>s</sub> = 361.05 MPa and <strong>L<sub>d</sub> = 16 × 361.05/(4 × 1.92) = 752.19 mm</strong>. The following block shows the M20 bond basis for that allowance. Measure available anchorage from the critical section where the bar force is required.</p>" +
                        "<p>For WSM, use the required service steel stress and the Annex B permissible bond basis, not 0.87f<sub>y</sub> with a service bond table or a service stress with an unrelated ultimate allowance. Laps, bundles, curtailment, support details and hooks have additional rules; the isolated straight-bar equation is not a complete joint detail.</p>",
                    sources: [
                        { id: "DESI787-00015", set: 3, question: 29 },
                        { id: "DESI787-00117", set: 13, question: 34 },
                        { id: "DESI787-00118", set: 14, question: 25 }
                    ]
                },
                {
                    id: "rcc-bond-modifiers-and-bar-perimeter",
                    title: "Bond modifiers and the benefit of smaller bars",
                    html: "<p>In the LSM bond provision §26.2.1.1, take the concrete-grade plain-bar tension allowance as τ<sub>0</sub>. The allowance for qualifying deformed bars is increased by <strong>60%</strong>, giving 1.6τ<sub>0</sub>. For bars in compression the relevant tension allowance is increased by <strong>25%</strong>. Thus a qualifying deformed compression bar uses 1.25 × 1.6τ<sub>0</sub> = <strong>2τ<sub>0</sub></strong>, not a simple sum of percentage increments.</p>" +
                        "<p>For M20, the checked LSM plain tension value is 1.2 MPa, so deformed tension gives <strong>1.92 MPa</strong> and deformed compression gives <strong>2.4 MPa</strong>. At the same bar diameter and required steel stress, the 25% bond increase reduces L<sub>d</sub> by division by 1.25, or <strong>20%</strong>. The preceding 16 mm example would give 601.75 mm in compression if that same 361.05 MPa steel stress had to be developed. Do not assume the compression stress always reaches that value.</p>" +
                        "<p>At fixed total steel area A<sub>s</sub>, equal-diameter bars have total perimeter <strong>p = 4A<sub>s</sub>/φ</strong>. This follows by combining A<sub>s</sub> = nπφ<sup>2</sup>/4 with p = nπφ. Four 20 mm bars and sixteen 10 mm bars have the same steel area, but the latter have twice the total bonded perimeter for the same embedment length.</p>" +
                        "<p>That geometry explains why more, smaller bars can improve bond transfer without adding steel area. It does not automatically increase concrete’s local bond-stress allowance or guarantee economy. Splitting, edge cover, confinement, bar spacing, aggregate passage and anchorage congestion still need checking. Keep WSM permissible bond values and LSM design values on their respective bases.</p>",
                    sources: [
                        { id: "DESI787-00101", set: 12, question: 28 },
                        { id: "DESI787-00186", set: 21, question: 25 },
                        { id: "DESI787-00096", set: 11, question: 32 }
                    ]
                },
                {
                    id: "rcc-hooks-bends-and-anchorage-credit",
                    title: "A hook’s anchorage value is not its geometric length",
                    html: "<p>Under the tension-anchorage provisions of §26.2.2.1, a standard U-type 180° hook has an <strong>anchorage value of 16φ</strong>. For the specified 20 mm bar this credit is <strong>320 mm</strong>. The bend rule credits 4φ for each 45° change, subject to its 16φ maximum; a 90° bend consequently has an 8φ credit under that rule.</p>" +
                        "<p>An anchorage value is an equivalent force-transfer credit in the code’s detailing model. It is not the measured arc length, the inside bend diameter, the total bar cutting length or a universal straight extension. A geometric 180° curve only has the prescribed credit when it is detailed as the relevant standard hook.</p>" +
                        "<p>Check the straight embedment available from the critical section, the required stress and development length, and any admissible bend or hook contribution. Also satisfy the actual bend radius, tail, concrete bearing inside the bend, cover and confinement requirements. The anchorage must remain inside sound concrete with a suitable load path into the supporting member.</p>" +
                        "<p>Therefore, a shortage of straight length is not automatically cured by drawing any hook. Different bar types, compression anchorage, laps and support conditions require their own provisions. In a narrow support, the nominal credit may be insufficient or the required hook may not fit; redesign the anchorage arrangement instead of assuming that the 16φ number alone proves compliance.</p>",
                    sources: [{ id: "DESI787-00042", set: 6, question: 26 }]
                }
            ],
            gaps: [
                "The official scope includes NS/IS codes. The checked reference basis here is IS 456:2000, Fourth Revision, with the explicitly identified Amendment No. 3, August 2007 provisions. Later amendment status and current Nepal NS/NBC adoption or project acceptance have not been certified.",
                "The assigned questions do not supply a complete beam/slab design dataset or load envelope. The transformed-section derivation, worked WSM/LSM sections, reinforcement selections and other explicitly labelled numerical illustrations are original syllabus elaborations, not additional source questions or construction-ready designs.",
                "No complete time-dependent deflection dataset supplies loading age, cracking history, sustained-load fraction, shrinkage conditions or finish-installation timing. Basic span/depth checks and the two deflection limits do not replace a fully specified long-term calculation.",
                "Two-way moment coefficients, corner torsion, detailed flat-slab punching design, bar curtailment, laps, bundles and complete support/joint anchorage are not worked through from an assigned drawing. Actual fsc, available embedment, bend geometry, cover and any applicable seismic detailing must be established for a real member.",
                "The square flat-slab strip and retaining-wall stem passages are bank-prompted applications of slab geometry and bending. They do not establish a complete flat-slab system design or a retaining wall’s geotechnical and overall stability."
            ],
            cautions: [
                {
                    html: "<p><strong>Bank check: WSM and LSM safety factors are mixed.</strong> The WSM steel key of 1.15 belongs instead to the LSM collapse material factor. For Grade-I Fe250 bars ≤20 mm, Table 22 gives 140 MPa, so the WSM yield-to-allowance ratio is 1.786; larger bars have a different allowance. Concrete’s WSM divisor is not universally three: M20 gives 20/7 = 2.857 in bending and 20/5 = 4 in direct compression. No stored key is rewritten.</p>",
                    sources: [
                        { id: "DESI787-00248", set: 27, question: 27 },
                        { id: "DESI787-00249", set: 27, question: 28 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: the M25 pair 11 and 13 is unsupported.</strong> E<sub>s</sub>/E<sub>c</sub> = 200000/25000 = 8 is the estimated instantaneous ratio; 280/(3 × 8.5) = 10.98 is the Annex B WSM ratio, whose note partially allows for long-term effects. It is not correctly labelled a purely short-term ratio, nor does the supplied explanation justify a universal 13 or a blanket 1.5 multiplier. The shorthand denominator must be read as 3σ<sub>cbc</sub>.</p>",
                    sources: [
                        { id: "DESI787-00252", set: 27, question: 31 },
                        { id: "DESI787-00260", set: 28, question: 30 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: material roles are not exclusive or equal-strength claims.</strong> Thermal expansion is approximately compatible, not identical or sufficient by itself to guarantee bond. Concrete primarily provides compression in the cracked bending model but also contributes to shear. RCC does not have universally equal tensile and compressive strengths; its resistance depends on section geometry, reinforcement and the failure mode.</p>",
                    sources: [
                        { id: "DESI787-00049", set: 6, question: 33 },
                        { id: "DESI787-00268", set: 29, question: 27 },
                        { id: "STRU935-00288", set: 27, question: 18 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: cracking is not the under-reinforced failure criterion.</strong> All three flexural classifications can develop concrete tensile cracks before collapse. The useful under-reinforced distinction is tensile-steel yield before concrete crushing, provided another failure mechanism does not intervene. Conversely, compression-controlled failure does not mean that an over-reinforced member remained uncracked. A calculated increase in over-reinforced moment resistance is not permission to exceed the code’s singly reinforced neutral-axis limit.</p>",
                    sources: [
                        { id: "DESI787-00025", set: 4, question: 29 },
                        { id: "DESI787-00028", set: 4, question: 32 },
                        { id: "DESI787-00047", set: 6, question: 31 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: four percent is an upper bound on bD.</strong> The stem saying the maximum should not be less than reverses the intended inequality. §26.5.1.1(b) gives A<sub>st</sub> ≤ 0.04bD, using overall depth D, not effective depth d. A section can violate its singly reinforced strain limit while remaining below this gross-area cap; the cap does not establish under-reinforced behaviour.</p>",
                    sources: [
                        { id: "DESI787-00034", set: 5, question: 28 },
                        { id: "DESI787-00106", set: 1, question: 28 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: a missing steel grade cannot be supplied by proximity to an option.</strong> For d = 500 mm the code-note depths are 265, 240 and 230 mm for Fe250, Fe415 and Fe500. The 245 mm key is not a valid Fe415 result merely because it is close to 240 mm. Likewise, the separate ratio item’s 0.48 requires Fe415; it is not the grade-independent maximum among the tabulated values.</p>",
                    sources: [
                        { id: "DESI787-00104", set: 12, question: 31 },
                        { id: "DESI787-00109", set: 13, question: 26 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: Fe500 is not a 0.466 code limit.</strong> Using the displayed approximate strain expression gives 0.0035/0.007675 = 0.45603; the §38.1 note states 0.46. The other Fe500 item’s key 0.46 matches that note, but its printed denominator does not follow the required tensile-strain expression. State that x<sub>u</sub> must not exceed its permitted depth; avoid ambiguous wording about being above the limit.</p>",
                    sources: [
                        { id: "DESI787-00110", set: 13, question: 27 },
                        { id: "DESI787-00195", set: 22, question: 25 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: 0.8x<sub>u</sub> and 0.43d are not the specified IS stress-block description.</strong> The checked rectangular-section model has C = 0.36f<sub>ck</sub>bx<sub>u</sub> at 0.42x<sub>u</sub>. A different equivalent uniform-block construction needs its own stress intensity and centroid assumptions. Multiplying an unstated 0.8 factor by the Fe250 depth limit does not establish a general IS 456 compression-block depth.</p>",
                    sources: [{ id: "DESI787-00105", set: 12, question: 32 }]
                },
                {
                    html: "<p><strong>Bank check: preserve the printed Annex G formula, correct the equal-area claim.</strong> G-1.2 really does give A<sub>sc</sub> = (M<sub>u</sub> − M<sub>u,lim</sub>)/[f<sub>sc</sub>(d − d')] in its simplified treatment. The erroneous addition is the explanation’s general claim of equal compression and extra tension areas: A<sub>st2</sub> = f<sub>sc</sub>A<sub>sc</sub>/(0.87f<sub>y</sub>). Subtracting displaced concrete is a different, explicitly labelled refinement, not evidence that the source formula is absent.</p>",
                    sources: [{ id: "DESI787-00257", set: 28, question: 27 }]
                },
                {
                    html: "<p><strong>Bank check: identify which lever arm is measured.</strong> The distance between steel centroids is d − d', the arm of the additional steel couple. The combined concrete-plus-steel compression resultant generally lies elsewhere, so its arm to the tensile force is different. The source explanation conflates those two distances; neither should be substituted for the other without resolving the compression forces.</p>",
                    sources: [{ id: "DESI787-00261", set: 28, question: 31 }]
                },
                {
                    html: "<p><strong>Bank check: basic span/depth results need their conditions.</strong> The 8 m calculation gives 400 mm before reinforcement and other modifications. At 15 m the basic simply supported ratio is 20 × 10/15, giving 1125 mm, not the explanation’s 750 mm. The 20 and 26 ratios are starting values under their respective support and span conditions, not guarantees of final beam or continuous two-way slab adequacy.</p>",
                    sources: [
                        { id: "DESI787-00098", set: 12, question: 25 },
                        { id: "DESI787-00099", set: 12, question: 26 },
                        { id: "DESI787-00087", set: 10, question: 34 },
                        { id: "STRU935-00077", set: 8, question: 24 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: the deflection explanation swaps reference periods.</strong> L/250 is the usual final total limit in §23.2(a). The increment after partitions and finishes is governed by min(L/350, 20 mm) under §23.2(b). A total deflection below L/250 can coexist with an excessive post-finish increment, so both checks need their own measured or calculated change in level.</p>",
                    sources: [{ id: "DESI787-00091", set: 11, question: 28 }]
                },
                {
                    html: "<p><strong>Bank check: thickness cannot be designed by elimination of options.</strong> Deflection often governs a thin slab, but flexure, one-way shear, punching where relevant, cover and bar placement can set its thickness. Increasing depth is a common shear remedy, not proof that reinforcement is impossible in every slab. Recalculate the applicable shear demand and capacity rather than following the source’s instruction to choose shear when deflection is absent.</p>",
                    sources: [
                        { id: "DESI787-00024", set: 4, question: 28 },
                        { id: "DESI787-00097", set: 11, question: 33 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: support action and the aspect-ratio boundary matter.</strong> Supporting two opposite edges is not the same as two-way slab action. A four-edge-supported panel with l<sub>y</sub>/l<sub>x</sub> = 2.0 lies within the checked Annex D table range. The bank’s rule that every ratio ≥2 must be one-way is too absolute; identify the actual supports and the adopted boundary convention.</p>",
                    sources: [
                        { id: "DESI787-00026", set: 4, question: 30 },
                        { id: "DESI787-00119", set: 14, question: 26 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: the 3 m and 3 m strips require flat-slab context.</strong> For the stated square column-supported panel, 1.5 m is one side of a column strip, 3 m is its full width and 3 m is the middle-strip width. That arithmetic is not a generic partition of every two-way slab supported by beams or walls. The stem does not provide a complete flat-slab design system.</p>",
                    sources: [{ id: "DESI787-00100", set: 12, question: 27 }]
                },
                {
                    html: "<p><strong>Bank check: no universal 75 mm minimum follows from a 5-inch slab.</strong> Horizontal clear spacing requires the bar diameters and nominal maximum aggregate size under §26.3.2(a). Centre spacing adds the appropriate bar-radius distances to that clear gap. A customary layout dimension is not the same as a code minimum, and the slab thickness alone is insufficient to calculate it.</p>",
                    sources: [{ id: "DESI787-00092", set: 11, question: 29 }]
                },
                {
                    html: "<p><strong>Bank check: 300 mm is not automatically the permitted main-bar spacing.</strong> The prescriptive maximum is min(3d, 300 mm). The 5-inch example assumes an effective depth near 100 mm without supplying its cover or bar arrangement. If the actual d is 90 mm, that maximum is 270 mm. Section 26.3.3 permits greater spacing only where crack-width calculations demonstrate acceptability; no such calculation is supplied by these questions. Retain both parts of the prescriptive limit rather than assuming an exception.</p>",
                    sources: [
                        { id: "BASI674-00285", set: 23, question: 2 },
                        { id: "DESI787-00093", set: 1, question: 27 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: the distribution-bar key uses the unamended 450 mm rule.</strong> Original §26.3.3(b)(2) used min(5d, 450 mm). The checked Amendment No. 3, August 2007 expressly replaces 450 with <strong>300 mm</strong>, retaining 5d. At the source's assumed d = 100 mm the amended prescriptive maximum is 300 mm; the opening clause's alternative crack-width justification is not supplied. Preserve the historic basis of the stored answer rather than silently presenting it as the amended rule or changing the bank.</p>",
                    sources: [{ id: "DESI787-00094", set: 11, question: 30 }]
                },
                {
                    html: "<p><strong>Bank check: rounding cannot make 16 mm comply with D/8.</strong> Exactly 5 inches gives D/8 = 127/8 = 15.875 mm; the source’s 125 mm approximation gives 15.625 mm. Both are less than 16 mm. Of the listed bar diameters, 12 mm is the largest within that specific limit. The stored 16 mm answer is not justified by rounding upward.</p>",
                    sources: [{ id: "DESI787-00095", set: 11, question: 31 }]
                },
                {
                    html: "<p><strong>Bank check: cover values are not universal member-type defaults.</strong> The old estimating assumptions of 12 mm for thin slabs and 25 mm for beam bars are not substitutes for the checked exposure-based nominal-cover and fire provisions. A 15 mm slab cover requires the applicable mild-exposure, ≤12 mm main-bar reduction and other checks; 20 mm is only the mild-exposure baseline, not every beam’s minimum. Nominal cover includes links, which must also be allowed for when calculating d.</p>",
                    sources: [
                        { id: "BASI674-00362", set: 28, question: 12 },
                        { id: "DESI787-00102", set: 12, question: 29 },
                        { id: "DESI787-00103", set: 12, question: 30 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: top tension in a downward cantilever is hogging.</strong> With positive sagging, the downward cantilever moment is negative; the explanation’s positive-moment wording is inconsistent with that convention. The retaining-stem backfill-face answer is conditional on the conventional earth-pressure cantilever load case. Uplift, opposing pressure, load reversals or changed restraints require the stress faces to be checked again.</p>",
                    sources: [
                        { id: "DESI787-00258", set: 28, question: 28 },
                        { id: "DESI787-00247", set: 27, question: 26 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: minimum links have qualifications, and stirrups do not guarantee ductility.</strong> The all-beams claim omits §26.5.1.6’s relaxation referring to shear below half the permissible value and minor members such as lintels. Conversely, τ<sub>v</sub> &lt; τ<sub>c</sub> is not a general omission rule. Adequate stirrups alone cannot prevent every brittle failure: the concrete maximum shear limit, anchorage and the rest of the force path remain essential.</p>",
                    sources: [
                        { id: "DESI787-00114", set: 13, question: 31 },
                        { id: "DESI787-00030", set: 4, question: 34 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: the two shear expressions are not distinct for vertical links.</strong> With α = 90°, sinα + cosα = 1, so the displayed inclined-link expression reduces to the same 0.87f<sub>y</sub>A<sub>sv</sub>d/s<sub>v</sub> expression as the other option. Use the vertical-link formula with the applicable steel-strength cap, area definition and spacing limits; the option presentation does not establish two different vertical shear resistances.</p>",
                    sources: [{ id: "DESI787-00116", set: 13, question: 33 }]
                },
                {
                    html: "<p><strong>Bank check: valid bond formulas do not establish a complete anchorage detail.</strong> The deformed-bar item has only one distinct option because its originals were identical; do not invent missing distractors. More small bars increase perimeter at fixed steel area, but cover, splitting and confinement still govern usable bond. A standard 180° hook’s 16φ value is a conditional anchorage credit, not its arc length or automatic compensation for every shortage of straight development length.</p>",
                    sources: [
                        { id: "DESI787-00118", set: 14, question: 25 },
                        { id: "DESI787-00096", set: 11, question: 32 },
                        { id: "DESI787-00042", set: 6, question: 26 },
                        { id: "DESI787-00015", set: 3, question: 29 }
                    ]
                }
            ],
            references: [
                {
                    title: "IS 456:2000, Fourth Revision — checked archived scan: beam/slab provisions and Annexes B, D and G",
                    url: "https://archive.org/details/gov.in.is.456.2000"
                },
                {
                    title: "IS 456:2000, Amendment No. 3, August 2007 — appended to the checked scan; §26.3.3(b)(2) distribution spacing",
                    url: "https://archive.org/download/gov.in.is.456.2000/is.456.2000.pdf"
                },
                {
                    title: "IS 456:2000, Annex G-1.2 — checked scan, printed page 96: simplified doubly reinforced equations",
                    url: "https://archive.org/details/gov.in.is.456.2000/page/n108/mode/1up"
                }
            ]
        }
    });
})();